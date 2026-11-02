/* Builds site/lessons.js from the parts here, then checks it. Run from the verba folder: node tools/lessons/make.js */
const fs=require('fs'),path=require('path');
const parts=fs.readdirSync(__dirname).filter(f=>/^p\d.*\.js$/.test(f)).sort();
const units=parts.flatMap(f=>{const m=require('./'+f);return Array.isArray(m)?m:[m]});
/* which practice topics each lesson teaches: a lesson is shaded as class-taught when every one of its topics is in TAUGHT (site/config.js) */
const TOPICS={verbs1:'pa1',verbs2:'pa2',verbs3:'pa3',verbs4:'pa3i pa4',compinf:'inf',prespass:'ppas',passinf:'pinf',fut12:'fut',fut34:'fut',futpass:'fpas',cases:'nom',accusative:'acc',dative:'dat datref',ablative:'d1 d2',decl12:'d1 d2 tricky',agreement:'adj12',vocative:'voc appos',ablfrom:'placeFrom sep',ablby:'agent means',ablwith:'accomp manner placeWhere cause',placeto:'placeTo town',questions:'ques',andque:'conj',gapping:'gap',adverbs:'adv',conditions:'pcond fcond',indstat:'indst',genposs:'gen gendat',genpart:'genpart',gensubj:'genso genmat',impf:'impf',impfpass:'ipas',indstat2:'indst2',imperative:'imp',medsum:'medsum',sum:'esse',possum:'sum',perfect:'perf',decl3:'d3'};
const out=[];
out.push(`/* ---------- Verba's lessons: the lesson text, every written question and the XP values ----------
   The mechanics are in js/lessons.js, which also explains the markup used in each body and the question format.
   A lesson's questions are grouped into spots: ?1 in the body shows q[0], ?2 shows q[1], and so on. s tells the AI what the spot tests.
   Keep the spots in the same order: an account remembers its XP by lesson id and spot number. */\n`);
out.push(`const LESSONS={\n xp:{question:10,finish:25},\n courses:[{id:'I',title:'Latin I Honors',units:[\n`);
for(const u of units){
  out.push(` {title:${JSON.stringify(u.title)},lessons:[\n`);
  for(const l of u.lessons){
    const body=l.body.trim().replace(/\\/g,'\\\\').replace(/`/g,'\\`').replace(/\$\{/g,'\\${');
    out.push(`  {id:${JSON.stringify(l.id)},title:${JSON.stringify(l.title)},blurb:${JSON.stringify(l.blurb)},t:${JSON.stringify((TOPICS[l.id]||'').split(' ').filter(Boolean))},\n   body:\`${body}\`,\n   q:[\n`);
    for(const s of l.q){out.push(`    {s:${JSON.stringify(s.s)},b:[\n`);for(const q of s.b){const{sv,...c}=q;out.push('     '+JSON.stringify(c)+',\n')}out.push('    ]},\n')}
    out.push('   ]},\n');
  }
  out.push(' ]},\n');
}
out.push(']}]\n};\n');
fs.writeFileSync(path.join(__dirname,'../../site/lessons.js'),out.join(''));
const ls=units.flatMap(u=>u.lessons);
console.log(units.length,'units',ls.length,'lessons',ls.reduce((n,l)=>n+l.q.length,0),'spots',ls.reduce((n,l)=>n+l.q.reduce((m,s)=>m+s.b.length,0),0),'questions',Math.round(fs.statSync(path.join(__dirname,'../../site/lessons.js')).size/1024)+'KB');
