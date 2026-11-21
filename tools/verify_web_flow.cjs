/* 模拟 DOM 环境运行实际页面逻辑，验证状态流转；不替代浏览器视觉验收。 */
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),web=path.join(root,'web'),key='zhixu.os.review.v1';
const storage=new Map();let checks=0;const check=(ok,msg)=>{assert.ok(ok,msg);checks++;};
function environment(storageFail=false){
 const events={},windowEvents={},nodes=new Map(),timers=new Map();let timerId=0,pendingHash=false;
 class Element{constructor(id){this.id=id;this._html='';this.textContent='';this.value='';this.dataset={};this.attributes={};this.disabled=false;this.tagName='DIV';this.classList={values:new Set(),add:x=>this.classList.values.add(x),remove:x=>this.classList.values.delete(x),toggle:(x,force)=>{if(force===undefined)force=!this.classList.values.has(x);force?this.classList.values.add(x):this.classList.values.delete(x);return force;},contains:x=>this.classList.values.has(x)};}get innerHTML(){return this._html;}set innerHTML(s){this._html=s;}setAttribute(k,v){this.attributes[k]=v;}removeAttribute(k){delete this.attributes[k];}focus(){document.activeElement=this;}scrollIntoView(){}showModal(){this.open=true;}close(){this.open=false;}insertAdjacentHTML(pos,html){this._html+=html;}closest(){return this;}matches(s){return s==='[data-chapter-pick]'&&this.dataset.chapterPick!==undefined;}click(){} }
 const get=s=>{if(!nodes.has(s))nodes.set(s,new Element(s));return nodes.get(s);};
 const document={activeElement:{tagName:'BODY'},title:'',querySelector(s){if(s==='#storage-warning')return get('#app').innerHTML.includes('id="storage-warning"')?get(s):null;return get(s);},querySelectorAll(s){if(s==='[data-nav]')return ['home','library','quiz','wrong'].map(v=>{let el=get('nav-'+v);el.dataset.nav=v;return el;});if(s==='[data-chapter-pick]:checked')return [...get('#main').innerHTML.matchAll(/<input type="checkbox" data-chapter-pick="(\d+)" checked/g)].map(m=>{let e=new Element();e.dataset.chapterPick=m[1];return e;});return [];},addEventListener(name,fn){events[name]=fn;},getElementById(id){return get('#main').innerHTML.includes('id="'+id+'"')?get('#'+id):null;},createElement(){return new Element();}};
 let hash='';const location={get hash(){return hash;},set hash(s){hash=s;pendingHash=true;}};
 const window={OS_CONTENT:null,OS_QUESTIONS:null,OSQuiz:null,scrollY:0,scrollTo(x,y){this.scrollY=y;},print(){},addEventListener(name,fn){windowEvents[name]=fn;}};
 const context={window,document,location,localStorage:{getItem(k){if(storageFail)throw Error('storage blocked');return storage.get(k)||null;},setItem(k,v){if(storageFail)throw Error('storage blocked');storage.set(k,v);}},setTimeout(fn,ms){let id=++timerId;timers.set(id,{fn,ms});return id;},clearTimeout(id){timers.delete(id);},setInterval(){return ++timerId;},clearInterval(){},URLSearchParams,URL:{createObjectURL:()=>'',revokeObjectURL(){}},Blob,Intl,Date,console};
 vm.createContext(context);
 for(const f of ['content.js','questions.js','quiz-engine.js'])vm.runInContext(fs.readFileSync(path.join(web,f),'utf8'),context,{filename:f});
 context.globalThis=context;
 // UMD binds the engine to the global object; the actual browser has window===globalThis.
 if(!window.OSQuiz)window.OSQuiz=context.OSQuiz;
 vm.runInContext(fs.readFileSync(path.join(web,'vendor/marked.umd.js'),'utf8'),context,{filename:'marked.umd.js'});
 if(!context.marked&&window.marked)context.marked=window.marked;
 vm.runInContext(fs.readFileSync(path.join(web,'app.js'),'utf8'),context,{filename:'app.js'});
 function flush(){if(pendingHash){pendingHash=false;windowEvents.hashchange();}}
 return {context,get,html:()=>get('#main').innerHTML,state:()=>JSON.parse(storage.get(key)),go(h){location.hash=h;flush();},click(action,data={}){let el=new Element();el.dataset={action,...data};events.click({target:el});flush();},confirm(){get('#dialog-confirm').onclick();flush();},input(text){let el=get('#global-search');el.id='global-search';el.value=text;events.input({target:el});},timers(){for(const [id,t] of timers)if(t.ms<=250){timers.delete(id);t.fn();}flush();},events};
}
let app=environment();check(app.html().includes('把知识串起来'),'首页正常运行');
let content=app.context.window.OS_CONTENT,headingMap=new Map(),links=[];
for(const d of content.documents){app.go('#/read/'+encodeURIComponent(d.id));let html=app.html();check(html.includes('class="prose"'),'全部 Markdown 均可运行渲染 '+d.id);check(html.includes('<h1'),'有正文标题 '+d.id);headingMap.set(d.id,new Set([...html.matchAll(/id="([^"]+)"/g)].map(m=>m[1])));links.push(...[...html.matchAll(/href="(#\/read\/[^"\s]+)"/g)].map(m=>m[1]));}
app.go('#/home');links.push(...[...app.html().matchAll(/href="(#\/read\/[^"\s]+)"/g)].map(m=>m[1]));
for(const href of links){let [route,query='']=href.split('?'),id=decodeURIComponent(route.split('/').slice(2).join('/')),anchor=new URLSearchParams(query).get('anchor');check(headingMap.has(id),'网页内链目标存在 '+href);if(anchor)check(headingMap.get(id).has(anchor),'网页内链锚点存在 '+href);}
app.go('#/read/'+encodeURIComponent('chapters/ch01-introduction.md'));app.click('read-toggle',{id:'chapters/ch01-introduction.md'});check(app.state().read.includes('chapters/ch01-introduction.md'),'已读标记可保存');
app.click('font-toggle');check(app.html().includes('reader-grid large-text'),'字号切换');
app.input('银行家');app.timers();check(app.html().includes('搜索“银行家”'),'搜索跳转');check(app.html().includes('计算题 2：')&&app.html().includes('<mark>银行家</mark>算法'),'搜索命中正文');
app.click('clear-search');app.click('library-filter',{value:'章节笔记'});check(app.html().includes('12 篇资料'),'章节分类筛选');
app.go('#/quiz');app.click('chapters-none');check(app.html().includes('data-action="start-quiz" disabled'),'无章节时禁止出卷');app.click('chapters-all');app.click('setting',{field:'count',value:'10'});app.click('start-quiz');let draft=app.state().draft;check(draft.questions.length===10,'生成十题练习');
app.click('answer',{value:String(draft.questions[0].correct[0])});check(app.state().draft.answers[0].length===1,'作答立即保存');
app=environment();app.go('#/practice');check(app.html().includes('option selected'),'刷新可恢复已选项');
app.click('submit');check(app.get('#confirm-dialog').open,'未答交卷会提示');app.click('dialog-cancel');check(!app.get('#confirm-dialog').open,'可以取消交卷');
// 从已保存的问题中取出答案，通过实际事件完成两种题型。
for(let i=0;i<10;i++){app.click('jump',{value:String(i)});let q=app.state().draft.questions[i];if(i===8){let bad=q.options.findIndex((_,j)=>!q.correct.includes(j));if(q.type==='multiple'){let existing=app.state().draft.answers[i];for(const x of existing)app.click('answer',{value:String(x)});}app.click('answer',{value:String(bad)});}else if(i===9){/* 保留一题未答以核对统计 */}else{if(q.type==='multiple'){let existing=app.state().draft.answers[i];for(const x of existing)if(!q.correct.includes(x))app.click('answer',{value:String(x)});for(const x of q.correct)if(!app.state().draft.answers[i].includes(x))app.click('answer',{value:String(x)});}else app.click('answer',{value:String(q.correct[0])});}}
app.click('submit');app.confirm();let saved=app.state();check(saved.draft===null,'交卷清除草稿');check(saved.lastResult.right===8&&saved.lastResult.wrong===1&&saved.lastResult.unanswered===1,'答对、答错、未答分别统计');check(saved.lastResult.score===80,'按总题量计分');check(Object.keys(saved.wrong).length===2,'错题和未答自动进入错题本');check(app.html().includes('答案与解析'),'交卷后显示解析');
app.click('result-filter');check((app.html().match(/panel review-card/g)||[]).length===2,'只看错题与未答');
app.go('#/wrong');check(app.html().includes('2 道待巩固'),'错题页显示记录');app.click('retry-all');check(app.state().draft.questions.length===2,'错题可组卷重练');for(let i=0;i<2;i++){app.click('jump',{value:String(i)});for(const x of app.state().draft.questions[i].correct)app.click('answer',{value:String(x)});}app.click('submit');check(app.state().lastResult.score===100,'重练正确判满分');check(Object.keys(app.state().wrong).length===0,'答对后自动移出错题本');
app=environment();app.go('#/wrong');check(app.html().includes('错题本现在很轻松'),'刷新保留已掌握结果');check(app.state().stats.sessions===2,'刷新不重复累计交卷');
// 单独确保多选切换、少选判错与错题恢复不依赖随机卷碰巧出现多选。
app.go('#/quiz');app.click('setting',{field:'source',value:'bank'});app.click('setting',{field:'type',value:'multiple'});app.click('start-quiz');let q=app.state().draft.questions[0];check(q.type==='multiple','只组多选题');app.click('answer',{value:String(q.correct[0])});app.click('answer',{value:String(q.correct[0])});check(app.state().draft.answers[0].length===0,'多选可取消选中');app.click('answer',{value:String(q.correct[0])});app.click('submit');app.confirm();check(app.state().lastResult.right===0,'多选少选不给分');
let unavailable=environment(true);check(unavailable.get('#app').innerHTML.includes('storage-warning'),'存储不可用时有明确提示');unavailable.go('#/quiz');unavailable.click('start-quiz');check(unavailable.html().includes('question-stem'),'存储不可用仍可在内存作答');
const report={status:'passed',checks,documentsRendered:content.documents.length,internalLinksChecked:links.length,flows:['知识库渲染与锚点','已读与字号','全文搜索与分类','按条件组卷','草稿刷新恢复','单选多选作答','未答交卷提示','成绩与解析','错题重练及自动移除','存储失败降级'],environment:'交互逻辑使用模拟 DOM；浏览器视觉检查单独记录于 web-visual-verification-report.json'};
fs.writeFileSync(path.join(root,'web-flow-verification-report.json'),JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report,null,2));
