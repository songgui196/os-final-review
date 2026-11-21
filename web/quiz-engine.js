/* 纯计算与组卷逻辑；浏览器和本地验证共用。 */
(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory();else root.OSQuiz=factory();})(typeof globalThis!=='undefined'?globalThis:this,function(){
'use strict';
const generatorMeta=[
{id:'cpu',variants:432,name:'FCFS / SJF 周转时间',chapter:3,tag:'进程调度',source:'exercises/01-cpu-scheduling.md'},
{id:'banker',variants:16,name:'银行家安全序列',chapter:3,tag:'银行家算法',source:'exercises/02-bankers.md'},
{id:'semaphore',variants:32,name:'记录型信号量计数',chapter:4,tag:'P/V 原语',source:'chapters/ch04-synchronization.md'},
{id:'buffer',variants:65,name:'生产者消费者信号量',chapter:4,tag:'生产者消费者',source:'exercises/03-producer-consumer.md'},
{id:'address',variants:54432,name:'分页地址转换',chapter:5,tag:'地址转换',source:'chapters/ch05-memory-management.md'},
{id:'tlb',variants:36,name:'TLB 有效访问时间',chapter:5,tag:'TLB EAT',source:'exercises/05-disk-and-eat.md'},
{id:'pages',variants:1000000,name:'FIFO / LRU 缺页率',chapter:6,tag:'缺页率',source:'exercises/04-page-fault-rate.md'},
{id:'eat',variants:54,name:'条件缺页概率与 EAT',chapter:6,tag:'内存 EAT',source:'exercises/05-disk-and-eat.md'},
{id:'disk',variants:96,name:'机械磁盘访问时间',chapter:7,tag:'磁盘访问时间',source:'exercises/05-disk-and-eat.md'},
{id:'index',variants:8,name:'一级索引容量',chapter:9,tag:'索引容量',source:'chapters/ch09-disk-storage.md'}];
function random(seed){let a=seed>>>0;return function(){a+=0x6D2B79F5;let t=a;t=Math.imul(t^(t>>>15),t|1);t^=t+Math.imul(t^(t>>>7),t|61);return ((t^(t>>>14))>>>0)/4294967296;};}
function shuffle(list,rng=Math.random){const a=list.slice();for(let i=a.length-1;i>0;i--){let j=Math.floor(rng()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function pick(a,rng){return a[Math.floor(rng()*a.length)];}
function integer(a,b,rng){return a+Math.floor(rng()*(b-a+1));}
function pretty(x){return String(Math.round(x*10000)/10000);}
function numeric(answer,proposals,suffix=''){let xs=[answer,...proposals].map(x=>Math.round(x*10000)/10000).filter(x=>Number.isFinite(x)&&x>=0);xs=[...new Set(xs)];for(let step=1;xs.length<4;step++){let x=Math.round((answer+step)*10000)/10000;if(!xs.includes(x))xs.push(x);}return xs.slice(0,4).map(x=>pretty(x)+suffix);}
function pageTrace(seq,capacity,algorithm,initial=[]){let frames=initial.slice(),faults=0,rows=[],ages=initial.slice();for(let i=0;i<seq.length;i++){const p=seq[i];let fault=!frames.includes(p);if(fault){faults++;if(frames.length===capacity){let victim=ages.shift();frames.splice(frames.indexOf(victim),1);}frames.push(p);ages.push(p);}else if(algorithm==='LRU'){ages.splice(ages.indexOf(p),1);ages.push(p);}rows.push({page:p,fault,frames:frames.slice()});}return {faults,rows};}
function safety(allocation,max,available){let need=max.map((row,i)=>row.map((n,j)=>n-allocation[i][j]));let work=available.slice(),finished=allocation.map(()=>false),sequence=[],trace=[];let progress=true;while(progress){progress=false;for(let i=0;i<need.length;i++)if(!finished[i]&&need[i].every((n,j)=>n<=work[j])){work=work.map((n,j)=>n+allocation[i][j]);finished[i]=true;sequence.push(i);trace.push(work.slice());progress=true;}}return {safe:finished.every(Boolean),sequence,trace,need,work};}
function sequenceSafe(seq,allocation,max,available){let work=available.slice();for(const i of seq){if(max[i].some((n,j)=>n-allocation[i][j]>work[j]))return false;work=work.map((n,j)=>n+allocation[i][j]);}return new Set(seq).size===allocation.length;}
function generate(kind,seed){let rng=random(seed),meta=generatorMeta.find(x=>x.id===kind);if(!meta)throw Error('未知变式类型');let q={id:'g-'+kind+'-'+(seed>>>0),chapter:meta.chapter,type:'single',difficulty:'计算',tag:meta.tag,source:meta.source,origin:'自编参数变式',generator:kind,seed:seed>>>0,correct:[0]};let a,exp;
if(kind==='cpu'){
 let services=shuffle([integer(2,4,rng),integer(5,7,rng),integer(8,11,rng)],rng),algorithm=pick(['FCFS','非抢占 SJF'],rng);let order=algorithm==='FCFS'?[0,1,2]:[0,1,2].sort((i,j)=>services[i]-services[j]);let time=0,completion=services.map(()=>0);order.forEach(i=>completion[i]=time+=services[i]);a=completion.reduce((s,x)=>s+x,0)/3;
 q.stem='单 CPU，P1、P2、P3 均在时刻 0 到达，按编号先后入队，服务时间依次为 '+services.join('、')+'。采用 '+algorithm+'，忽略切换开销。平均周转时间是多少？（保留 2 位小数）';
 let vals=numeric(Number(a.toFixed(2)),[Number((a-services.reduce((s,x)=>s+x,0)/3).toFixed(2)),Number((a+1).toFixed(2)),Number((a-1).toFixed(2))]);q.options=vals;
 exp='执行顺序：'+order.map(i=>'P'+(i+1)).join('→')+'。按进程编号的完成时间为 '+completion.join('、')+'；到达均为 0，平均周转=('+completion.join('+')+')/3='+a.toFixed(2)+'。';q.audit={services,algorithm,completion,answer:Number(a.toFixed(2))};
}else if(kind==='banker'){
 let x=integer(1,4,rng),y=integer(1,4,rng),allocation=[[1,0],[0,1],[1,1]],need=[[x,0],[x+1,y],[0,y+1]],max=need.map((r,i)=>r.map((n,j)=>n+allocation[i][j])),available=[x,y];
 let perms=[[0,1,2],[0,2,1],[1,0,2],[2,0,1]],labels=perms.map(s=>s.map(i=>'P'+i).join('→'));q.options=labels;q.stem='资源 A、B。Available=('+available.join(',')+')。\nP0: Allocation=(1,0), Need=('+x+',0)\nP1: Allocation=(0,1), Need=('+(x+1)+','+y+')\nP2: Allocation=(1,1), Need=(0,'+(y+1)+')\n下列哪一个是安全序列？（向量逐分量比较）';
 exp='初始只有 P0 的 Need≤Work；P0 完成后 Work=('+(x+1)+','+y+')，P1 才可完成并释放 B，之后 P2 可完成。故所列四个选项中仅 P0→P1→P2 安全。';q.audit={allocation,max,available,perms};
}else if(kind==='semaphore'){
 let start=integer(1,4,rng),blocked=integer(1,4,rng),n=start+blocked,v=pick([0,1],rng);a=blocked-v;q.stem='记录型信号量初值 S='+start+'。有 '+n+' 个不同进程依次执行一次 P(S)，其间没有 V；随后执行 '+v+' 次 V(S)。采用 P 先减、<0 阻塞；V 先加、≤0 唤醒的语义。此时仍阻塞在该信号量队列中的进程数是多少？';q.options=numeric(a,[blocked,start,n]);exp='完成所有 P 后 S='+(-blocked)+'，有 '+blocked+' 个等待者；'+v+' 次 V 唤醒 '+v+' 个，仍阻塞 '+a+' 个。已被唤醒但尚未运行的进程不再计入阻塞队列。';q.audit={start,n,v,answer:a};
}else if(kind==='buffer'){
 let n=integer(3,12,rng),k=integer(1,n-1,rng);q.stem='容量 '+n+' 的标准有界缓冲区，当前有 '+k+' 个产品，所有 P/V 均已完成，没有在途操作或等待者。互斥信号量当前空闲。empty、full、mutex 的值应分别为？';q.options=[(n-k)+','+k+',1',(n===2*k?(n-k+1)+','+(k-1)+',1':k+','+(n-k)+',1'),n+',0,1',(n-k)+','+k+',0'];exp='empty=容量−现有产品='+n+'−'+k+'='+(n-k)+'；full='+k+'；互斥锁空闲时 mutex=1。题目排除了并发在途操作，故可直接由占用数推断。';q.audit={n,k};
}else if(kind==='address'){
 let size=pick([512,1024,2048,4096],rng),page=integer(1,8,rng),offset=integer(20,100,rng),frame=integer(10,30,rng);a=frame*size+offset;q.stem='分页系统，页大小 '+size+'B，逻辑地址 '+(page*size+offset)+'。该地址对应的合法驻留页映射至页框 '+frame+'，权限正确。物理字节地址为多少？';q.options=numeric(a,[page*size+offset,frame*size,frame*size+page]);exp='逻辑页号='+page+'，页内偏移='+offset+'。物理地址=页框号×页大小+偏移='+frame+'×'+size+'+'+offset+'='+a+'。';q.audit={size,page,offset,frame,answer:a};
}else if(kind==='tlb'){
 let t=pick([80,100,120,200],rng),lookup=pick([5,10,20],rng),h=pick([.7,.8,.9],rng);a=lookup+(2-h)*t;q.stem='单级主存页表，无缺页。TLB 与主存串行查找，TLB 查找 '+lookup+'ns，一次主存访问 '+t+'ns，命中率 '+h*100+'%。不计更新 TLB 的费用。EAT 是多少？';q.options=numeric(a,[lookup+t,lookup+2*t,(2-h)*t],'ns');exp='命中耗时 '+(lookup+t)+'ns；未命中需查页表再访问数据，共 '+(lookup+2*t)+'ns。EAT='+h+'×'+(lookup+t)+'+'+pretty(1-h)+'×'+(lookup+2*t)+'='+pretty(a)+'ns。';q.audit={t,lookup,h,answer:a};
}else if(kind==='pages'){
 let cap=pick([3,4],rng),algorithm=pick(['FIFO','LRU'],rng),seq=Array.from({length:10},()=>integer(1,5,rng)),initial=rng()<.5?[]:Array.from({length:cap},(_,i)=>i+1);let result=pageTrace(seq,cap,algorithm,initial);a=result.faults*10;q.stem=cap+' 个页框，'+(initial.length?'初始按装入先后预装 '+initial.join(',')+'（若为 LRU，同顺序视为从最久到最近访问）':'初始全空')+'。采用 '+algorithm+'，引用串为 '+seq.join(',')+'。只统计该引用串内的缺页，缺页率为多少？';q.options=numeric(a,[Math.max(0,a-10),Math.min(100,a+10),Math.min(100,a+20),Math.max(0,a-20),0,50,100],'%');exp=result.rows.map((r,i)=>(i+1)+'. 访问 '+r.page+'：'+(r.fault?'缺页':'命中')+'，页框 ['+r.frames.join(',')+']').join('\n')+'\n共 '+result.faults+'/10 次缺页，缺页率 '+a+'%。初始预装不计入缺页。';q.audit={cap,algorithm,seq,initial,answer:a};
}else if(kind==='eat'){
 let h=pick([.7,.8,.9],rng),conditional=pick([.05,.1,.2],rng),t=pick([1,2],rng),disk=pick([5,10,20],rng),p=(1-h)*conditional;a=(2-h)*t+p*disk*1000;q.stem='TLB 命中率 '+h*100+'%，TLB 未命中中 '+conditional*100+'% 缺页。忽略 TLB 时间，主存 '+t+'µs，额外缺页处理 '+disk+'ms。路径费用：命中 t；未命中且驻留 2t；未命中且缺页 2t+缺页处理。EAT 是多少？';q.options=numeric(a,[(2-h)*t+conditional*disk*1000,(2-h)*t+p*disk,(2-h)*t],'µs');exp='总体缺页率 p=(1−'+h+')×'+conditional+'='+pretty(p)+'。额外缺页处理 '+disk+'ms='+disk*1000+'µs。EAT=(2−'+h+')×'+t+'+'+pretty(p)+'×'+disk*1000+'='+pretty(a)+'µs。费用已按题设给定，不再另加重执行。';q.audit={h,conditional,t,disk,p,answer:a};
}else if(kind==='disk'){
 let rpm=pick([6000,10000,12000,15000],rng),seek=pick([3,5,6,8],rng),transfer=pick([.1,.2,.4],rng),controller=pick([.1,.2],rng),rotation=30000/rpm;a=seek+rotation+transfer+controller;q.stem='机械磁盘 '+rpm+'r/min，平均寻道 '+seek+'ms，本次传输耗时 '+transfer+'ms，控制器耗时 '+controller+'ms。不计排队，按平均旋转等待半圈，平均访问时间是多少？';q.options=numeric(a,[seek+2*rotation+transfer+controller,seek+transfer+controller,rotation+transfer+controller],'ms');exp='每圈 '+pretty(60000/rpm)+'ms，平均旋转等待 '+pretty(rotation)+'ms。总时间='+seek+'+'+pretty(rotation)+'+'+transfer+'+'+controller+'='+pretty(a)+'ms。';q.audit={rpm,seek,transfer,controller,answer:a};
}else if(kind==='index'){
 let block=pick([1024,2048,4096,8192],rng),pointer=pick([4,8],rng);a=block/pointer*block/1024;q.stem='索引分配中，磁盘块 '+block+'B，每个块号指针 '+pointer+'B。只用一个一级索引块，忽略其他限制，它最多能指向多少 KiB 的文件数据？（不含索引块自身）';q.options=numeric(a,[block/pointer,block/1024,a*2],'KiB');exp='索引项数='+block+'/'+pointer+'='+(block/pointer)+'；数据容量=索引项数×块大小='+(block/pointer)+'×'+block+'B='+pretty(a)+'KiB。';q.audit={block,pointer,answer:a};
}
q.explanation=exp;return q;}
function eligibleGenerators(settings){return generatorMeta.filter(m=>settings.chapters.includes(m.chapter)&&settings.type!=='multiple'&&settings.difficulty!=='基础');}
function eligibleBank(bank,settings){return bank.filter(q=>settings.chapters.includes(q.chapter)&&(settings.type==='all'||q.type===settings.type)&&(settings.difficulty==='all'||q.difficulty===settings.difficulty||(settings.difficulty==='理解'&&q.difficulty==='计算')));}
function assemble(bank,settings,seed=Date.now()){
let rng=random(seed),fixed=settings.source==='generated'?[]:eligibleBank(bank,settings),generators=settings.source==='bank'?[]:eligibleGenerators(settings),requested=Number(settings.count),amount=Math.min(requested,fixed.length+generators.reduce((n,g)=>n+g.variants,0)),chosen=[];
if(!settings.chapters.length)return {error:'请至少选择一个章节。'};
if(!fixed.length&&!generators.length)return {error:'当前条件没有可用题目，请调整章节、题型或难度。'};
let generatedCount=generators.length?(fixed.length?Math.min(Math.max(1,Math.round(amount*.3)),amount):amount):0;
chosen=shuffle(fixed,rng).slice(0,amount-generatedCount);
if(generators.length)generatedCount=amount-chosen.length;
let used=new Set(),attempt=0,rotation=shuffle(generators,rng);
while(chosen.length<amount&&generators.length&&attempt<amount*40){let kind=rotation[attempt%rotation.length].id;let q=generate(kind,Math.floor(rng()*4294967296));attempt++;if(used.has(q.stem))continue;used.add(q.stem);chosen.push(q);}
if(chosen.length<amount){const picked=new Set(chosen.map(q=>q.id));chosen.push(...shuffle(fixed.filter(q=>!picked.has(q.id)),rng).slice(0,amount-chosen.length));}
if(!chosen.length)return {error:'当前条件无法生成试卷。'};
return {questions:shuffle(chosen,rng).map(q=>prepare(q,rng)),requested,actual:chosen.length};}
function prepare(q,rng=Math.random){let order=shuffle(q.options.map((_,i)=>i),rng);return {...q,options:order.map(i=>q.options[i]),correct:q.correct.map(i=>order.indexOf(i)).sort((a,b)=>a-b)};}
function isCorrect(question,answer){let given=Array.isArray(answer)?[...new Set(answer)].sort((a,b)=>a-b):[];return given.length===question.correct.length&&given.every((n,i)=>n===question.correct.slice().sort((a,b)=>a-b)[i]);}
function grade(questions,answers){let results=questions.map((q,i)=>({question:q,answer:answers[i]||[],correct:isCorrect(q,answers[i]),unanswered:!answers[i]||!answers[i].length}));let right=results.filter(x=>x.correct).length,unanswered=results.filter(x=>x.unanswered).length;return {results,right,wrong:questions.length-right-unanswered,unanswered,total:questions.length,score:Math.round(right/questions.length*100)};}
return {generatorMeta,random,shuffle,generate,prepare,assemble,eligibleGenerators,eligibleBank,pageTrace,safety,sequenceSafe,isCorrect,grade};
});