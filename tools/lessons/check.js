/* Checks site/lessons.js: run from the verba folder with node tools/lessons/check.js
   Every Latin word must be a form the engine can make (or on the short list below); every question must be well formed. */
const fs=require('fs');const G=require('../../site/engine.js');
eval(fs.readFileSync('site/lessons.js','utf8').replace('const LESSONS','global.LESSONS'));
const F=new Set();const add=w=>String(w).toLowerCase().split(/\s+/).forEach(x=>F.add(x));
for(const n of G.NOUNS)for(const k of[0,1])for(let c=0;c<6;c++){try{add(G.nf(n,c,k))}catch(e){}}
for(const v of G.VERBS){add(v.inf);add(v.cj==='3'||v.cj==='3i'?v.stem+'ī':v.inf.slice(0,-1)+'ī');add(v.inf.slice(0,-2));
  add(v.inf.slice(0,-2)+'te');add(v.inf.slice(0,-3)+'ite');add(v.stem+'o'+'r');
  for(const t of['pres','impf','fut','perf'])for(const vc of['act','pass'])for(let p=0;p<6;p++){try{const f=G.vf(v,t,vc,p);if(t==='perf'&&vc==='pass')continue;add(f)}catch(e){}}
  add(G.vf(v,'pres','pass',4)||'')}
for(const a of G.ADJ)for(const g of['m','f','n'])for(const k of[0,1])for(let c=0;c<5;c++){try{add(G.af(a,c,k,g))}catch(e){}}
for(const a of G.ADJ){add(a.stem+'ē')}
const OK=`et ad in per trāns prope ante ā ab ē ex cum sine sī nē nōn quis saepe semper hodiē nunc bene male sum es est sumus estis sunt eram erās erat erāmus erātis erant erō eris erit erimus eritis erunt esse possum potes potest possumus potestis possunt poteram poterās poterat poterāmus poterātis poterant poterō poteris poterit poterimus poteritis poterunt posse ego tū nōs vōs mē tē nōbīs vōbīs mihi tibi meī tuī nostrum nostrī vestrum vestrī mēcum tēcum nōbīscum vōbīscum salvē dō medius summus media mediā mediō mediam summum summa summā multī multae paucī paucae dūc dīc timē cum sedē adsum ades adest adsumus adestis adsunt aderam aderās aderat aderāmus aderātis aderant aderō aderis aderit aderimus aderitis aderunt adesse absum abes abest absumus abestis absunt aberam aberās aberat aberāmus aberātis aberant aberō aberis aberit aberimus aberitis aberunt abesse`.split(/\s+/);OK.forEach(add);
const bad={};const strip=s=>s.replace(/\{([^{}|]+)\|[^{}]*\}/g,'$1').replace(/\*\*/g,'').replace(/\[\[|\]\]/g,'');
function word(w,where){w=w.normalize('NFC').toLowerCase().replace(/^[-–]+|[-–]+$/g,'');if(!w)return;
  if(F.has(w))return;for(const e of['que','ne'])if(w.endsWith(e)&&F.has(w.slice(0,-e.length)))return;(bad[w]=bad[w]||new Set()).add(where)}
const scan=(s,where)=>{for(const m of strip(String(s)).matchAll(/\*([^*]+)\*/g))m[1].split(/[\s,.;:!?…()"“”]+/).forEach(w=>/^[\p{L}-]+$/u.test(w)&&word(w,where))};
let errs=0,n=0;const E=m=>{errs++;console.log('ERR',m)};
const ids=new Set();
for(const c of LESSONS.courses)for(const u of c.units)for(const l of u.lessons){
  if(ids.has(l.id))E('dup id '+l.id);ids.add(l.id);
  scan(l.body,l.id);for(const m of l.body.matchAll(/^: (.+?)(?: = |$)/gm))m[1].split(/[\s,.;:!?()]+/).forEach(w=>/^[\p{L}-]+$/u.test(w)&&!/^[A-Z][a-z]+$/.test(w)&&word(w,l.id+' ex'));
  const marks=[...l.body.matchAll(/^\?(\d+)$/gm)].map(m=>+m[1]);
  if(marks.length!==l.q.length||marks.some((x,i)=>x!==i+1))E(`${l.id}: ${marks.length} marks, ${l.q.length} spots`);
  l.q.forEach((s,k)=>{if(s.b.length!==10)E(`${l.id}.${k}: ${s.b.length} questions`);if(!s.s)E(l.id+' no skill');
    const seen=new Set();s.b.forEach(q=>{n++;if(seen.has(q.p)&&q.k!=='mc')E(`${l.id}.${k} repeat: ${q.p}`);seen.add(q.p);scan(q.p,l.id+'.'+k);if(!q.w)E(`${l.id}.${k} no why: ${q.p}`);
      if(q.k==='mc'){if(!(q.o.length>=2&&q.a>=0&&q.a<q.o.length))E('mc '+q.p);if(new Set(q.o).size!==q.o.length)E('mc dup '+q.p);q.o.forEach(o=>scan(o,l.id+'.'+k))}
      else{if(!Array.isArray(q.a)||!q.a.length)E('answers '+q.p);if(q.k==='la')q.a.forEach(a=>a.split(/[\s,.;:!?]+/).forEach(w=>w&&word(w,l.id+'.'+k+' ans')))}
    })});
}
{const all=LESSONS.courses.flatMap(c=>c.units.flatMap(u=>u.lessons.flatMap(l=>l.q.flatMap(s=>s.b.map(q=>[l.id,q])))));
 const none=all.filter(([,q])=>/\*[^*]+\*/.test(q.p)&&!(q.g&&q.g.length));
 console.log(all.filter(([,q])=>q.g&&q.g.length).length,'questions have word meanings;',none.length,'Latin questions have none:');none.slice(0,30).forEach(([id,q])=>console.log('  ',id,q.p));
 all.forEach(([id,q])=>{(q.g||[]).forEach(([w])=>{if(q.k!=='mc'&&q.a.some(a=>a.normalize('NFC').toLowerCase()===w.split(/[, ]/)[0].toLowerCase())&&q.p.indexOf('*'+w.split(/[, ]/)[0])<0&&!q.p.includes(w.split(/[, ]/)[0]))E(id+' gloss gives the answer: '+q.p)})})}
console.log(n,'questions checked,',errs,'errors');
const k=Object.keys(bad).sort();console.log(k.length,'words not recognised:');k.forEach(w=>console.log(' ',w,[...bad[w]].slice(0,3).join(' ')));
process.exit(errs?1:0);
