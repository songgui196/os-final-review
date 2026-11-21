/* Exercise actual theme initialization and user actions without browser dependencies. */
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),key='zhixu.os.review.theme';
const source=fs.readFileSync(path.join(root,'web/theme.js'),'utf8');
let checks=0;
const check=(condition,message)=>{assert.ok(condition,message);checks++;};
function environment({saved=null,systemDark=false,blocked=false,matchMedia=true,buttonReady=true}={}){
 const storage=new Map([['zhixu.os.review.v1','existing-study-progress']]);if(saved!==null)storage.set(key,saved);
 const events={},windowEvents={},mediaEvents={},attributes={},buttonAttributes={},metaAttributes={};
 let ready=buttonReady;
 const button={setAttribute:(name,value)=>{buttonAttributes[name]=value;}};
 const media={matches:systemDark,addEventListener:(name,fn)=>{mediaEvents[name]=fn;}};
 const document={documentElement:{setAttribute:(name,value)=>{attributes[name]=value;}},readyState:buttonReady?'complete':'loading',querySelector:selector=>selector==='#theme-toggle'?(ready?button:null):selector==='meta[name="theme-color"]'?{setAttribute:(name,value)=>{metaAttributes[name]=value;}}:null,addEventListener:(name,fn)=>{events[name]=fn;}};
 const window={addEventListener:(name,fn)=>{windowEvents[name]=fn;}};if(matchMedia)window.matchMedia=()=>media;
 const context={document,window,localStorage:{getItem(name){if(blocked)throw Error('storage blocked');return storage.get(name)??null;},setItem(name,value){if(blocked)throw Error('storage blocked');storage.set(name,value);}},console};
 vm.runInNewContext(source,context,{filename:'theme.js'});
 return {theme:()=>attributes['data-theme'],button:buttonAttributes,meta:metaAttributes,storage,
  toggle(){events.click({target:{closest:selector=>selector==='[data-action="theme-toggle"]'?button:null}});},
  unrelated(){events.click({target:{closest:()=>null}});},
  mount(){ready=true;events.DOMContentLoaded?.();},
  system(dark){media.matches=dark;mediaEvents.change?.({matches:dark});},
  external(value){if(value===null)storage.delete(key);else storage.set(key,value);windowEvents.storage?.({key,newValue:value});}
 };
}
let app=environment();check(app.theme()==='light','Default follows a light system');check(app.button['aria-checked']==='false','Accessible switch reflects light mode');
app.toggle();check(app.theme()==='dark','User can enable dark mode');check(app.storage.get(key)==='dark','Manual preference is saved');check(app.button['aria-checked']==='true','Accessible switch reflects dark mode');
check(app.button.title.includes('浅色'),'Dark mode offers a light-mode tooltip');
app.toggle();check(app.theme()==='light'&&app.storage.get(key)==='light','User can switch back to light mode');
check(app.storage.get('zhixu.os.review.v1')==='existing-study-progress','Switching preserves study progress');
app=environment({systemDark:true});check(app.theme()==='dark','First visit respects a dark system');app.system(false);check(app.theme()==='light','Unchosen theme follows system changes');
app.toggle();app.system(false);check(app.theme()==='dark','System changes preserve a manual choice');
app=environment({saved:'dark',systemDark:false});check(app.theme()==='dark','Dark choice survives a new page load');
app=environment({saved:'light',systemDark:true});check(app.theme()==='light','Stored light choice overrides dark system');
app=environment({saved:'invalid',systemDark:true});check(app.theme()==='dark','Invalid stored preference falls back to the system');
app=environment({blocked:true,systemDark:true});check(app.theme()==='dark','Blocked storage does not prevent initialization');app.toggle();check(app.theme()==='light','Blocked storage still permits switching for the current visit');
app=environment({matchMedia:false});check(app.theme()==='light','Missing system preference API falls back to light');app.toggle();check(app.theme()==='dark','Switch works without system preference API');
app=environment({systemDark:true,buttonReady:false});check(app.theme()==='dark','Theme applies before page content is parsed');app.mount();check(app.button['aria-checked']==='true','Switch is synchronized after page parsing');
app.unrelated();check(app.theme()==='dark','Other page clicks do not change the theme');
app=environment();app.external('dark');check(app.theme()==='dark','Theme updates from another tab');app.system(true);app.external(null);check(app.theme()==='dark','Removing an override restores system preference');
const html=fs.readFileSync(path.join(root,'web/index.html'),'utf8');
check(html.indexOf('src="theme.js"')>=0&&html.indexOf('src="theme.js"')<html.indexOf('rel="stylesheet"'),'Theme initializes before CSS to avoid a light flash');
console.log(JSON.stringify({status:'passed',checks,flows:['system preference','manual toggle','saved preference','blocked storage','early initialization','accessible switch','cross-tab changes','study progress preservation']},null,2));
