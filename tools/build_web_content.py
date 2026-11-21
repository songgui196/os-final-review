"""将整理后的笔记打包为离线网页数据；不复制原教材全文。"""
from pathlib import Path
import json,re
ROOT=Path(__file__).resolve().parents[1]
KB=ROOT/'.agents/skills/os-final-review'
def title(text):
    match=re.search(r'^# (.+)$',text,re.M)
    return match.group(1) if match else '复习资料'
def main():
    meta=json.loads((KB/'source-map.json').read_text(encoding='utf-8'))
    docs=[]
    for path in sorted(KB.rglob('*.md')):
        rel=path.relative_to(KB).as_posix()
        text=path.read_text(encoding='utf-8')
        text=re.sub(r'^---\n.*?\n---\n','',text,count=1,flags=re.S)
        category='章节笔记' if rel.startswith('chapters/') else ('课后题解析' if rel.startswith('exercises/') else '复习资料')
        chapter=int(re.search(r'ch(\d+)',rel).group(1)) if rel.startswith('chapters/') else None
        if rel=='SKILL.md':
            category='复习导航'
            text=text.replace('## 如何使用','## 复习建议').replace('问“怎么复习”：','开始复习：').replace('问具体习题：','查找具体习题：').replace('问概念：','查找概念：').replace('若用户想自测，先给提示，等提交后再给答案。','自测时先看题目，独立提交后再对答案。')
        docs.append(dict(id=rel,title=title(text),category=category,chapter=chapter,markdown=text))
    overview=(ROOT/'README.md').read_text(encoding='utf-8').replace('.agents/skills/os-final-review/','')
    overview=re.sub(r'## 网页复习工作台\n.*?\n(?=## 简答题)', '',overview,flags=re.S)
    docs.insert(0,dict(id='overview.md',title='期末复习路线',category='复习导航',chapter=None,markdown=overview))
    chapters=[dict(id=c['chapter'],title=re.sub(r'^第\d+章\s*','',c['title']).replace('输入/ 输出','输入/输出'),printed=c['printed_pages'],pdf=c['pdf_pages'],doc=next(d['id'] for d in docs if d['chapter']==c['chapter']),priority=c['chapter'] in [1,2,3,4,5,6,7]) for c in meta['chapters']]
    bundle=dict(documents=docs,chapters=chapters,source=meta)
    output=ROOT/'web/content.js'
    output.write_text('/* 仅包含整理笔记与来源索引，不包含原书全文。 */\nwindow.OS_CONTENT = '+json.dumps(bundle,ensure_ascii=False,indent=2)+';\n',encoding='utf-8')
    print(json.dumps(dict(documents=len(docs),chapters=len(chapters),output=str(output)),ensure_ascii=False))
if __name__=='__main__':
    main()
