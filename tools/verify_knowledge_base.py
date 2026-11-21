"""Recalculate study answers, explore P/V interleavings and validate local links."""
from __future__ import annotations
from collections import deque
from fractions import Fraction
from pathlib import Path
import hashlib
import importlib.util
import itertools
import json
import re
import sys
from urllib.parse import unquote

sys.dont_write_bytecode = True
ROOT = Path(__file__).resolve().parent.parent
KB = ROOT / '.agents/skills/os-final-review'
CHECKS: list[str] = []

def check(name, condition):
    if not condition:
        raise AssertionError(name)
    CHECKS.append(name)


def schedule(jobs, policy, quantum=1):
    """Event-driven simulator; jobs: (id, arrival, duration, priority)."""
    pending = sorted(jobs, key=lambda j: (j[1], j[0]))
    ready, now, remaining, done, segments = [], 0, {j[0]: j[2] for j in jobs}, {}, []
    while pending or ready:
        if not ready and pending and now < pending[0][1]:
            now = pending[0][1]
        while pending and pending[0][1] <= now:
            ready.append(pending.pop(0))
        if policy == 'SJF':
            idx = min(range(len(ready)), key=lambda k: (ready[k][2], ready[k][1], ready[k][0]))
        elif policy == 'PRIO':
            idx = min(range(len(ready)), key=lambda k: (ready[k][3], ready[k][1], ready[k][0]))
        else:
            idx = 0
        job = ready.pop(idx)
        delta = min(quantum, remaining[job[0]]) if policy == 'RR' else remaining[job[0]]
        segments.append((job[0], now, now + delta))
        now += delta
        remaining[job[0]] -= delta
        while pending and pending[0][1] <= now:
            ready.append(pending.pop(0))
        if remaining[job[0]]:
            ready.append(job)
        else:
            done[job[0]] = now
    turnaround = [done[j[0]] - j[1] for j in jobs]
    weighted = [Fraction(str(turnaround[i])) / Fraction(str(j[2])) for i, j in enumerate(jobs)]
    return done, sum(turnaround) / len(jobs), sum(weighted) / len(jobs), segments


def safe_sequences(allocation, maximum, available):
    need = [tuple(m - a for m, a in zip(ms, als)) for ms, als in zip(maximum, allocation)]
    found = []
    def visit(work, order):
        if len(order) == len(need):
            found.append(order)
            return
        for i, ni in enumerate(need):
            if i not in order and all(n <= w for n, w in zip(ni, work)):
                visit(tuple(w + a for w, a in zip(work, allocation[i])), order + (i,))
    visit(tuple(available), ())
    return need, found


def replace_pages(sequence, initial, capacity, policy):
    frames = list(initial)
    loaded = {page: -len(initial) + i for i, page in enumerate(initial)}
    accessed = loaded.copy()
    faults, victims = [], []
    for k, page in enumerate(sequence):
        if page not in frames:
            faults.append(k + 1)
            victim = None
            if len(frames) == capacity:
                if policy == 'FIFO':
                    victim = min(frames, key=loaded.get)
                elif policy == 'LRU':
                    victim = min(frames, key=accessed.get)
                else:
                    def next_use(p):
                        return next((n for n in range(k + 1, len(sequence)) if sequence[n] == p), float('inf'))
                    victim = max(frames, key=next_use)
                frames[frames.index(victim)] = page
            else:
                frames.append(page)
            loaded[page] = k
            victims.append(victim)
        accessed[page] = k
    return faults, victims


def disk_distance(head, requests):
    pairs = zip([head] + list(requests), requests)
    return sum(abs(a - b) for a, b in pairs)


def pv_explore(capacity):
    """All schedules: red then blue production, one consumer per class.

    Semaphore waits are disabled until their token exists (equivalent to
    waiting); individual lock/put/get/publish operations interleave freely.
    """
    # item, producer_step, red_step, blue_step, empty, red, blue, mutex, buf_r, buf_b
    initial = (0, 0, 0, 0, capacity, 0, 0, 1, 0, 0)
    seen, todo, terminals = {initial}, deque([initial]), 0
    while todo:
        state = todo.popleft()
        item, ps, rs, bs, empty, red, blue, mutex, br, bb = state
        assert 0 <= br + bb <= capacity
        assert min(empty, red, blue, br, bb) >= 0 and mutex in (0, 1)
        moves = []
        if item < 2:
            n = list(state)
            if ps == 0 and empty:
                n[4] -= 1; n[1] = 1; moves.append(tuple(n))
            elif ps == 1 and mutex:
                n[7] = 0; n[1] = 2; moves.append(tuple(n))
            elif ps == 2:
                n[8 + item] += 1; n[1] = 3; moves.append(tuple(n))
            elif ps == 3:
                n[7] = 1; n[1] = 4; moves.append(tuple(n))
            elif ps == 4:
                n[5 + item] += 1; n[0] += 1; n[1] = 0; moves.append(tuple(n))
        for color, pc_index in [(0, 2), (1, 3)]:
            step = state[pc_index]
            n = list(state)
            if step == 0 and state[5 + color]:
                n[5 + color] -= 1; n[pc_index] = 1; moves.append(tuple(n))
            elif step == 1 and mutex:
                n[7] = 0; n[pc_index] = 2; moves.append(tuple(n))
            elif step == 2:
                assert state[8 + color] > 0
                n[8 + color] -= 1; n[pc_index] = 3; moves.append(tuple(n))
            elif step == 3:
                n[7] = 1; n[pc_index] = 4; moves.append(tuple(n))
            elif step == 4:
                n[4] += 1; n[pc_index] = 5; moves.append(tuple(n))
        if not moves:
            assert item == 2 and rs == bs == 5, ('deadlock', state)
            assert (empty, red, blue, mutex, br, bb) == (capacity, 0, 0, 1, 0, 0)
            terminals += 1
        for n in moves:
            if n not in seen:
                seen.add(n); todo.append(n)
    assert terminals > 0
    return len(seen)


def anchor(text):
    return re.sub(r'[^\w\-\s]', '', text.lower()).replace(' ', '-')


def verify_links():
    paths = [ROOT / 'README.md'] + sorted(KB.rglob('*.md'))
    count = 0
    for path in paths:
        text = path.read_text(encoding='utf-8')
        check('valid characters: ' + path.name, '\ufffd' not in text and '\x00' not in text)
        check('balanced fences: ' + path.name, len(re.findall(r'^```', text, re.M)) % 2 == 0)
        for match in re.finditer(r'\[[^\]]*\]\((<[^>]+>|[^\s)]+)\)', text):
            target = unquote(match.group(1).strip('<>'))
            if '://' in target:
                continue
            filename, _, frag = target.partition('#')
            dest = (path.parent / filename).resolve() if filename else path
            check('link ' + path.name + ' -> ' + target, dest.is_file())
            if frag:
                headings = re.findall(r'^#{1,6}\s+(.+)$', dest.read_text(encoding='utf-8'), re.M)
                check('anchor ' + path.name + ' -> #' + frag, frag in {anchor(h) for h in headings})
            count += 1
    return count


def main():
    jobs = [(i + 1, a, b, 0) for i, (a, b) in enumerate(zip([0, .4, 1, 5.5, 7], [9, 4, 1, 4, 2]))]
    check('Exercise 3.19 average turnaround', abs(schedule(jobs, 'SJF')[1] - 10.62) < 1e-9)
    jobs = [(i + 1, 0, b, p) for i, (b, p) in enumerate(zip([10, 1, 2, 1, 5], [3, 1, 3, 4, 2]))]
    for policy, avg, weight in [('FCFS', 13.4, Fraction(363, 50)), ('RR', 9.2, Fraction(71, 25)), ('SJF', 7, Fraction(87, 50)), ('PRIO', 12, Fraction(159, 25))]:
        _, actual, weighted, _ = schedule(jobs, policy)
        check('Exercise 3.20 ' + policy, abs(avg - actual) < 1e-9 and weight == weighted)
    jobs = [(i + 1, 0, b, 0) for i, b in enumerate([5, 3, 1])]
    check('Mock RR q=2', schedule(jobs, 'RR', 2)[:3] == ({3: 5, 2: 8, 1: 9}, 22 / 3, Fraction(142, 45)))

    als = [(0, 0, 3), (1, 0, 0), (1, 3, 5), (0, 0, 2), (0, 0, 1)]
    mx = [(0, 0, 4), (1, 7, 5), (2, 3, 5), (0, 6, 4), (0, 6, 5)]
    for av, expected in [((1, 4, 0), True), ((0, 6, 2), False), ((1, 1, 1), False), ((0, 4, 7), False)]:
        check('Exercise 3.22 all-order safety ' + str(av), bool(safe_sequences(als, mx, av)[1]) == expected)
    initial_a = [(0,1,0),(2,0,0),(3,0,2),(2,1,1),(0,0,2)]
    initial_m = [(7,5,3),(3,2,2),(9,0,2),(2,2,2),(4,3,3)]
    after = initial_a[:]; after[1] = (3,0,2)
    check('Textbook P1 trial allocation', bool(safe_sequences(after, initial_m, (2,3,0))[1]))
    for req, available, expected in [((0,2,0),(2,1,0),False),((0,1,0),(2,2,0),True)]:
        trial = after[:]; trial[0] = tuple(a + r for a,r in zip(trial[0],req))
        check('Textbook P0 trial ' + str(req), bool(safe_sequences(trial,initial_m,available)[1]) == expected)
    ma, mm = [(1,0),(1,1),(0,1)], [(3,2),(2,2),(1,2)]
    check('Mock initial safety', bool(safe_sequences(ma,mm,(1,1))[1]))
    check('Mock unsafe request', not safe_sequences([(2,0),ma[1],ma[2]],mm,(0,1))[1])

    seq = [1,2,4,2,6,2,1,5,6,1]
    check('Exercise 6.18 OPT', replace_pages(seq,[1,2,3],3,'OPT')[0] == [3,5,8])
    check('Exercise 6.18 LRU', replace_pages(seq,[1,2,3],3,'LRU')[0] == [3,5,7,8,9])
    for policy, expected in [('FIFO',7),('LRU',6)]:
        check('Mock page faults ' + policy,len(replace_pages([1,2,3,2,4,1,2,3],[],3,policy)[0]) == expected)
    for size, expected_row, expected_col in [(200,50,5000),(100,100,10000)]:
        row = [i*100+j for i in range(100) for j in range(100)]
        col = [i*100+j for j in range(100) for i in range(100)]
        for policy in ['LRU','FIFO']:
            check('Exercise 6.17 row ' + str((size,policy)),len(replace_pages([x//size for x in row],[],2,policy)[0])==expected_row)
            check('Exercise 6.17 column ' + str((size,policy)),len(replace_pages([x//size for x in col],[],2,policy)[0])==expected_col)

    requests = [30,145,120,78,82,140,20,42,165,65]
    scan = sorted(x for x in requests if x>=110)+sorted((x for x in requests if x<110),reverse=True)
    check('Exercise 7.17 distances', disk_distance(110,requests)==689 and disk_distance(110,scan)==200)
    requests = [38,6,37,100,14,124,65,67]
    scan = sorted(x for x in requests if x>=30)+sorted((x for x in requests if x<30),reverse=True)
    todo, head, shortest = requests[:], 30, []
    while todo:
        head = min(todo,key=lambda v:abs(v-head)); shortest.append(head); todo.remove(head)
    check('Exercise 7.18 distances', (disk_distance(30,requests),disk_distance(30,shortest),disk_distance(30,scan))==(391,158,212))
    times = {}
    for tail in itertools.permutations('BCD'):
        layout, now = ('A',)+tail, 0
        for record in 'ABCD':
            now += (5*layout.index(record)-now)%20 + 10
        times[''.join(layout)] = now
    check('Exercise 7.21 optimal layout',times['ABCD']==85 and times['ACBD']==min(times.values())==45)
    check('Exercise 7.15 disk ms', abs(6+30000/10000+4096/(20e6)*1000+.2-9.4048)<1e-10)
    check('Exercise 6.14 maximum fault rate',abs((1+16400*(1/16400))-2)<1e-10)
    check('Exercise 6.15 EAT us',Fraction(8,10)*1+Fraction(18,100)*2+Fraction(2,100)*20002==Fraction(4012,10))
    check('Mock EAT us',Fraction(999,1000)*Fraction(1,10)+Fraction(1,1000)*(9300+Fraction(1,10))==Fraction(94,10))
    check('Exercise 6.21 address',int('101',16)*4096+int('565',16)==int('101565',16))
    states = {str(n):pv_explore(n) for n in [1,2,4,5]}
    check('P/V bounded state exploration: no deadlock, capacity invariant, restored tokens',all(n>0 for n in states.values()))

    manifest = json.loads((KB/'source-map.json').read_text(encoding='utf-8'))
    check('12 complete chapters',len(manifest['chapters'])==12 and len(list((KB/'chapters').glob('ch*.md')))==12)
    source=Path(manifest['source_file'])
    if source.is_file():
        check('original PDF fingerprint',hashlib.sha256(source.read_bytes()).hexdigest()==manifest['source_sha256'])
    link_count = verify_links()
    scanner_path = Path.home()/'.codex/skills/book-to-skill/tools/scan_generated_skill.py'
    scanned = 0
    if scanner_path.is_file():
        spec = importlib.util.spec_from_file_location('book_skill_scan',scanner_path)
        module = importlib.util.module_from_spec(spec); sys.modules[spec.name]=module; spec.loader.exec_module(module)
        findings=[]
        for path in KB.rglob('*.md'):
            findings.extend(module._scan_text(path.relative_to(KB).as_posix(),path.read_text(encoding='utf-8')))
            scanned += 1
        check('all generated Markdown passed advisory content scan',not findings)
    report={'result':'PASS','date':'2026-11-21','checks':len(CHECKS),'markdown_links':link_count,'markdown_files':len(list(KB.rglob('*.md'))),'advisory_scan_files':scanned,'pv_reachable_states_by_capacity':states,'coverage_note':'Algorithm checks cover published examples; bounded interleavings are not a proof for all executions. Source figures not exhaustively transcribed.','checks_passed':CHECKS}
    (ROOT/'verification-report.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    print(json.dumps({k:v for k,v in report.items() if k!='checks_passed'},ensure_ascii=False,indent=2))

if __name__=='__main__':
    main()