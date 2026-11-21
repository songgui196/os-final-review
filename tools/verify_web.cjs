/* 用独立参考计算校验变式；同时验证题库结构、组卷与判分。 */
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),web=path.join(root,'web'),E=require(path.join(web,'quiz-engine.js'));
const sandbox={window:{}};
vm.runInNewContext(fs.readFileSync(path.join(web,'questions.js'),'utf8'),sandbox);
vm.runInNewContext(fs.readFileSync(path.join(web,'content.js'),'utf8'),sandbox);
const bank=JSON.parse(JSON.stringify(sandbox.window.OS_QUESTIONS)),content=sandbox.window.OS_CONTENT;
let checks=0,samples=0;const check=(ok,message)=>{assert.ok(ok,message);checks++;};
const same=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
check(bank.length===144,'基础题数量');check(bank.filter(q=>q.type==='single').length===120,'120 道单选');check(bank.filter(q=>q.type==='multiple').length===24,'24 道多选');
check(new Set(bank.map(q=>q.id)).size===bank.length,'稳定且唯一的题目 ID');check(content.documents.length===27,'全部笔记已打包');
const sources=new Set(content.documents.map(d=>d.id));
function validate(q){check(q.options.length===4&&new Set(q.options).size===4,'选项必须互不相同 '+q.id);check(q.correct.length>0&&q.correct.every(i=>Number.isInteger(i)&&i>=0&&i<4),'答案索引有效 '+q.id);check(q.type!=='single'||q.correct.length===1,'单选只一个正确项');check(q.type!=='multiple'||q.correct.length>=2,'多选至少两个正确项');check(sources.has(q.source),'回看来源有效 '+q.id);check(q.explanation?.length>15,'具备解析 '+q.id);}
for(const q of bank){validate(q);let prepared=E.prepare(q,E.random(75));check(same(prepared.correct.map(i=>prepared.options[i]).sort(),q.correct.map(i=>q.options[i]).sort()),'打乱选项后答案保持一致');check(E.isCorrect(prepared,prepared.correct),'标准答案正确');if(q.type==='multiple'){check(!E.isCorrect(q,q.correct.slice(1)),'多选少选不得分');check(!E.isCorrect(q,[0,1,2,3]),'多选多选不得分');}}
for(let chapter=1;chapter<=12;chapter++)check(bank.filter(q=>q.chapter===chapter).length===12,'每章覆盖 12 题');
function refFaults(seq,capacity,algorithm,initial){let resident=new Set(initial),inserted=new Map(initial.map((p,i)=>[p,i-capacity])),last=new Map(initial.map((p,i)=>[p,i-capacity])),faults=0;seq.forEach((p,t)=>{if(!resident.has(p)){faults++;if(resident.size===capacity){let candidates=[...resident];candidates.sort((a,b)=>(algorithm==='LRU'?last.get(a)-last.get(b):inserted.get(a)-inserted.get(b)));resident.delete(candidates[0]);}resident.add(p);inserted.set(p,t);}last.set(p,t);});return faults;}
function refSequence(seq,allocation,max,available){let stock=available.slice();let used=new Set();for(const i of seq){if(used.has(i)||max[i].some((v,j)=>v>stock[j]+allocation[i][j]))return false;used.add(i);for(let j=0;j<stock.length;j++)stock[j]+=allocation[i][j];}return used.size===allocation.length;}
for(const meta of E.generatorMeta){for(let seed=1;seed<=500;seed++){const q=E.generate(meta.id,seed),a=q.audit;validate(q);samples++;if(meta.id==='banker'){const valid=a.perms.map(p=>refSequence(p,a.allocation,a.max,a.available));check(valid.filter(Boolean).length===1&&valid[q.correct[0]],'银行家唯一正确序列');check(E.safety(a.allocation,a.max,a.available).safe,'银行家实例安全');}
else if(meta.id==='buffer'){check(q.options[0]===[a.n-a.k,a.k,1].join(','),'空槽与产品计数');}
else{let expected;
if(meta.id==='cpu'){let s=a.services.slice();if(a.algorithm!=='FCFS')s.sort((a,b)=>a-b);expected=Number(((3*s[0]+2*s[1]+s[2])/3).toFixed(2));}
if(meta.id==='semaphore')expected=Math.max(0,a.n-a.start-a.v);
if(meta.id==='address'){let logical=a.page*a.size+a.offset;expected=a.frame*a.size+logical%a.size;}
if(meta.id==='tlb')expected=a.h*(a.lookup+a.t)+(1-a.h)*(a.lookup+2*a.t);
if(meta.id==='pages')expected=refFaults(a.seq,a.cap,a.algorithm,a.initial)/a.seq.length*100;
if(meta.id==='eat')expected=a.h*a.t+(1-a.h)*(1-a.conditional)*2*a.t+(1-a.h)*a.conditional*(2*a.t+a.disk*1000);
if(meta.id==='disk')expected=a.seek+(60/a.rpm*1000)/2+a.transfer+a.controller;
if(meta.id==='index')expected=Math.floor(a.block/a.pointer)*a.block/1024;
check(Math.abs(parseFloat(q.options[q.correct[0]])-expected)<.00011,'变式答案与独立参考相符 '+q.id);}
let prepared=E.prepare(q,E.random(seed));check(E.isCorrect(prepared,prepared.correct),'变式打乱后的判分');if(meta.id==='pages')check(q.options.every(o=>parseFloat(o)>=0&&parseFloat(o)<=100),'缺页率选项在 0—100% 内');}}
let assemblyCases=0;
for(const chapters of [[1],[3],[4],[5],[6],[7],[8],[9],[10,11,12],Array.from({length:12},(_,i)=>i+1)])for(const type of ['all','single','multiple'])for(const source of ['mixed','bank','generated'])for(const difficulty of ['all','基础','理解'])for(const count of [10,20,30,50]){let settings={chapters,type,source,difficulty,count},r=E.assemble(bank,settings,92817);assemblyCases++;let fixed=source==='generated'?[]:E.eligibleBank(bank,settings),g=source==='bank'?[]:E.eligibleGenerators(settings);if(!fixed.length&&!g.length){check(!!r.error,'不支持的组合清楚返回错误');continue;}check(r.questions.length===Math.min(count,fixed.length+g.reduce((n,x)=>n+x.variants,0)),'可用题量不足按实际组卷 '+JSON.stringify(settings)+' got '+r.questions.length);check(new Set(r.questions.map(q=>q.id)).size===r.questions.length,'一张卷内无重复 ID');check(r.questions.every(q=>chapters.includes(q.chapter)),'章节筛选有效');check(r.questions.every(q=>type==='all'||q.type===type),'题型筛选有效');check(r.questions.every(q=>difficulty==='all'||q.difficulty===difficulty||difficulty==='理解'&&q.difficulty==='计算'),'难度筛选有效');let allRight=E.grade(r.questions,r.questions.map(q=>q.correct));check(allRight.score===100&&allRight.right===r.actual,'全对满分');let unanswered=E.grade(r.questions,[]);check(unanswered.score===0&&unanswered.unanswered===r.actual,'未答单独统计');}
check(!!E.assemble(bank,{chapters:[],type:'all',source:'mixed',difficulty:'all',count:20},1).error,'未选章节不组卷');
const allocation=[[0,0,3],[1,0,0],[1,3,5],[0,0,2],[0,0,1]],max=[[0,0,4],[1,7,5],[2,3,5],[0,6,4],[0,6,5]];
for(const [available,expected] of [[[1,4,0],true],[[0,6,2],false],[[1,1,1],false],[[0,4,7],false]])check(E.safety(allocation,max,available).safe===expected,'课后银行家样例回归');
check(E.pageTrace([1,2,4,2,6,2,1,5,6,1],3,'LRU',[1,2,3]).faults===5,'预装页面 LRU 课后题回归');
const assets=['index.html','styles.css','content.js','questions.js','quiz-engine.js','app.js','vendor/marked.umd.js'];for(const file of assets)check(fs.existsSync(path.join(web,file)),'离线资产完整');
const report={status:'passed',checks,fixedQuestions:bank.length,documents:content.documents.length,chapters:12,generatorFamilies:E.generatorMeta.length,generatedSamples:samples,assemblyCases,method:'独立参考算法 + 题库结构 + 组卷筛选与判分 + 教材已知样例',visualBrowserInspection:'not part of automated logic checks; see web-visual-verification-report.json'};
fs.writeFileSync(path.join(root,'web-verification-report.json'),JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report,null,2));
