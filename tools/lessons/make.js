/* Builds site/lessons.js from the parts here, then checks it. Run from the verba folder: node tools/lessons/make.js */
const fs=require('fs'),path=require('path');
const parts=fs.readdirSync(__dirname).filter(f=>/^p\d.*\.js$/.test(f)).sort();
const units=parts.flatMap(f=>{const m=require('./'+f);return Array.isArray(m)?m:[m]});
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
    out.push(`  {id:${JSON.stringify(l.id)},title:${JSON.stringify(l.title)},blurb:${JSON.stringify(l.blurb)},\n   body:\`${body}\`,\n   q:[\n`);
    for(const s of l.q){out.push(`    {s:${JSON.stringify(s.s)},b:[\n`);for(const q of s.b){const{sv,...c}=q;out.push('     '+JSON.stringify(c)+',\n')}out.push('    ]},\n')}
    out.push('   ]},\n');
  }
  out.push(' ]},\n');
}
out.push(']}]\n};\n');
fs.writeFileSync(path.join(__dirname,'../../site/lessons.js'),out.join(''));
const ls=units.flatMap(u=>u.lessons);
console.log(units.length,'units',ls.length,'lessons',ls.reduce((n,l)=>n+l.q.length,0),'spots',ls.reduce((n,l)=>n+l.q.reduce((m,s)=>m+s.b.length,0),0),'questions',Math.round(fs.statSync(path.join(__dirname,'../../site/lessons.js')).size/1024)+'KB');
