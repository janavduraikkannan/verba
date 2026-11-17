/* Tests the lesson pages without a browser. Run from the verba folder: node tools/test_lessons_page.js
   Loads site/lessons.js and js/lessons.js in a sandbox, then for every lesson in the Lesson 10 section:
   the body must parse into blocks with every question spot placed once and in order, every accepted answer must be accepted by
   the page's own answer checker (lsLocal), and the lesson must be shaded as covered in class when its topics are in TAUGHT. */
const fs=require('fs'),vm=require('vm');
const ctx={console,Math,JSON,Set,Map,Array,Object,String,Number,RegExp,Error,Date,Promise};ctx.window=ctx;
vm.createContext(ctx);
const run=(f,pre='')=>vm.runInContext(pre+fs.readFileSync(f,'utf8'),ctx,{filename:f});
const keep=['site/config.js','site/lessons.js'];
run('site/config.js');
vm.runInContext(`const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));const LW=/\\{([^{}|]+)\\|([^{}]+)\\}/g;`+fs.readFileSync('site/language.js','utf8').split('\n').find(l=>l.startsWith('const foldWord')),ctx);
run('site/lessons.js');
vm.runInContext('globalThis.LESSONS=LESSONS;globalThis.TAUGHT=TAUGHT;',ctx);
run('js/lessons.js');
vm.runInContext('globalThis.api={lsAll,lsBlocks,lsBlockHTML,lsLocal,lsTaught,lsById}',ctx);
const {lsAll,lsBlocks,lsBlockHTML,lsLocal,lsTaught,lsById}=ctx.api;
let fails=0;const F=m=>{fails++;console.log('FAIL',m)};
const unit=ctx.LESSONS.courses[0].units.find(u=>u.title==='Lesson 10');
if(!unit)F('no Lesson 10 section');
const want=['sum2','possum','negcmd','decl3'];
if(unit&&unit.lessons.map(l=>l.id).join()!==want.join())F('Lesson 10 lessons are '+unit.lessons.map(l=>l.id));
let typed=0,mcs=0;
for(const l of (unit?unit.lessons:[])){
  const blocks=lsBlocks(l.body),marks=blocks.filter(b=>b.t==='q').map(b=>b.i);
  if(marks.join()!==l.q.map((_,i)=>i).join())F(`${l.id}: spots ${marks} but ${l.q.length} question sets`);
  try{blocks.forEach(lsBlockHTML)}catch(e){F(l.id+' does not render: '+e.message)}
  if(!blocks.some(b=>b.t==='table'))F(l.id+' has no table');
  if(!lsTaught(lsById(l.id)))F(l.id+' is not shaded as covered in class (topics '+l.t+')');
  l.q.forEach((s,k)=>{if(s.b.length!==10)F(`${l.id}.${k}: ${s.b.length} questions`);
    for(const q of s.b){
      if(q.k==='mc'){mcs++;if(!(q.a>=0&&q.a<q.o.length))F(l.id+' bad mc');continue}
      for(const a of q.a){typed++;if(!lsLocal(q,a).ok)F(`${l.id}.${k} refuses its own answer: ${q.p} <- ${a}`);
        if(lsLocal(q,'zzz qqq').ok)F(l.id+' accepts nonsense')}}});
}
console.log(unit?unit.lessons.length+' lessons, '+mcs+' multiple choice and '+typed+' typed answers checked':'');
console.log(fails?fails+' failures':'ok');process.exit(fails?1:0);
