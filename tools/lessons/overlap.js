/* Finds questions whose answer is printed in their own lesson. Used by check.js; run alone to list them. */
const norm=s=>' '+String(s).normalize('NFC').toLowerCase().replace(/\{([^{}|]+)\|[^{}]*\}/g,'$1').replace(/\[\[|\]\]|\*/g,'').replace(/[^\p{L}\p{M}]+/gu,' ').trim()+' ';
const strip=s=>String(s).replace(/\{([^{}|]+)\|[^{}]*\}/g,'$1').replace(/\*\*/g,'');
const segs=s=>[...strip(s).matchAll(/\*([^*]+)\*/g)].map(m=>m[1]).filter(x=>!/_/.test(x));
/* little words that any lesson may name */
const SMALL=new Set('et ex ē ab ā in ad cum sine sī nē'.split(' '));
function hits(l,q){
  const body=norm(l.body),out=[],has=t=>{const n=norm(t);return n.trim()&&body.includes(n)};
  if(q.k==='en')segs(q.p).forEach(s=>has(s)&&out.push(s));
  if(q.k==='la'&&has(q.a[0]))out.push(q.a[0]);
  if(q.k==='mc'){const P=segs(q.p),multi=x=>norm(x).trim().includes(' ');
    segs(q.o[q.a]).forEach(s=>has(s)&&!SMALL.has(norm(s).trim())&&out.push(s));
    P.forEach(s=>has(s)&&(multi(s)||(P.length===1&&!SMALL.has(norm(s).trim())))&&out.push(s))}
  return out;
}
module.exports={hits,norm};
if(require.main===module){
  const fs=require('fs');eval(fs.readFileSync('site/lessons.js','utf8').replace('const LESSONS','global.LESSONS'));
  let n=0;for(const u of LESSONS.courses[0].units)for(const l of u.lessons){const r={};l.q.forEach((s,k)=>s.b.forEach(q=>{const h=hits(l,q);if(h.length){n++;(r[k]=r[k]||[]).push(q.k+':'+h.join('/'))}}));
    for(const k in r)console.log(l.id,k,r[k].length,r[k].join(' ; ').slice(0,300))}
  console.log(n,'questions show their answer in the lesson');
}
