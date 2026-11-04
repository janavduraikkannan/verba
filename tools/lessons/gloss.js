/* Adds g to every written question: the dictionary entry and meaning of each Latin word it uses, shown in the question's box.
   Forms are looked up from the engine, so any word the engine knows is covered. Fix a wrong pick in PICK below. */
const {G}=require('./lib.js');
const fold=s=>s.normalize('NFC').toLowerCase();
const L=new Map();const put=(f,h,m,kind)=>{f=fold(f);if(!L.has(f))L.set(f,[]);const a=L.get(f);if(!a.some(e=>e.h===h))a.push({h,m,kind})};
const END={1:'ō',2:'eō',3:'ō','3i':'iō',4:'iō'};
const MEAN={dēbēre:'to owe; ought, should',solēre:'to be used to, to usually do',cupere:'to want',dare:'to give',trādere:'to hand over',līberāre:'to free',prohibēre:'to keep away',līberī:''};
for(const n of G.NOUNS){if(fold(n.nom).normalize('NFD').replace(/\p{M}/gu,'')===n.e.toLowerCase().replace(/^j/,'i'))continue;
  const h=`${n.nom}, ${n.gen}, ${n.g}.`;for(const k of[0,1])for(let c=0;c<6;c++){try{const f=G.nf(n,c,k);if(f)put(f,h,n.e,'n')}catch(e){}}}
for(const v of G.VERBS){const h=v.cj==='1d'?`${v.inf}, dō`:`${v.inf}, -${END[v.cj]}`,m=MEAN[v.inf]||`to ${v.e}`;
  [v.inf,v.cj==='3'||v.cj==='3i'?v.stem+'ī':v.inf.slice(0,-1)+'ī',v.inf.slice(0,-2),v.inf.slice(0,-2)+'te',v.inf.slice(0,-3)+'ite'].forEach(f=>put(f,h,m,'v'));
  for(const t of['pres','impf','fut','perf'])for(const vc of['act','pass'])for(let p=0;p<6;p++){if(t==='perf'&&vc==='pass')continue;try{put(G.vf(v,t,vc,p),h,m,'v')}catch(e){}}}
put('dō','dare, dō','to give','v');put('dūc','dūcere, -ō','to lead','v');put('dīc','dīcere, -ō','to say','v');
for(const a of G.ADJ){const h=a.ty==='12'?(a.nom.endsWith('us')?`${a.nom} -a -um`:`${a.nom} ${a.stem}a ${a.stem}um`):a.nom;
  for(const g of['m','f','n'])for(const k of[0,1])for(let c=0;c<5;c++){try{put(G.af(a,c,k,g),h,a.e,'a')}catch(e){}}
  if(a.adv)put(a.adv,a.adv,a.adve,'x');else put(a.stem+'ē',a.stem+'ē',a.e+'ly','x')}
const FIX=[['ad','ad (+acc)','to, toward'],['per','per (+acc)','through'],['trāns','trāns (+acc)','across'],['prope','prope (+acc)','near'],['ante','ante (+acc)','in front of'],['ā','ā, ab (+abl)','away from; by'],['ab','ā, ab (+abl)','away from; by'],['ē','ē, ex (+abl)','out of'],['ex','ē, ex (+abl)','out of'],['cum','cum (+abl)','with'],['sine','sine (+abl)','without'],['in','in','in, on (+abl); into (+acc)'],
['et','et','and'],['sī','sī','if'],['nē','nē','do not (with a command)'],['nōn','nōn','not'],['quis','quis','who?'],['saepe','saepe','often'],['semper','semper','always'],['hodiē','hodiē','today'],['nunc','nunc','now'],['bene','bene','well'],['male','male','badly'],['salvē','salvē','hello'],['lentē','lentē','slowly'],
['multī','multī -ae -a','many'],['multae','multī -ae -a','many'],['paucī','paucī -ae -a','few'],['paucae','paucī -ae -a','few'],['pars','pars, partis, f.','part']];
FIX.forEach(([f,h,m])=>{L.delete(f);put(f,h,m,'x')});
'sum es est sumus estis sunt eram erās erat erāmus erātis erant erō eris erit erimus eritis erunt esse'.split(' ').forEach(f=>put(f,'esse, sum','to be','x'));
'possum potes potest possumus potestis possunt poteram poterās poterat poterāmus poterātis poterant poterō poteris poterit poterimus poteritis poterunt posse'.split(' ').forEach(f=>put(f,'posse, possum','to be able, can','x'));
for(const[base,mean]of[['adesse','to be present, to be here'],['abesse','to be away, to be absent']]){const p=base.slice(0,-4);'sum es est sumus estis sunt eram erās erat erāmus erātis erant erō eris erit erimus eritis erunt esse'.split(' ').forEach(f=>put(p==='ab'&&/^[sa]/.test('')?f:p+f,`${base}, ${p}sum`,mean,'x'))}
for(const[fs,h,m]of[['ego mē mihi meī','ego','I, me'],['tū tē tibi tuī','tū','you (one person)'],['nōs nōbīs nostrum nostrī','nōs','we, us'],['vōs vōbīs vestrum vestrī','vōs','you (more than one person)']])fs.split(' ').forEach(f=>{L.delete(f);put(f,h,m,'x')});
for(const[f,h,m]of[['mēcum','ego','I, me'],['tēcum','tū','you (one person)'],['nōbīscum','nōs','we, us'],['vōbīscum','vōs','you (more than one person)']]){put(f,h,m,'x');put(f,'cum (+abl)','with','x')}
for(const[w,h,m]of[['media','medius -a -um','the middle of'],['mediā','medius -a -um','the middle of'],['mediō','medius -a -um','the middle of'],['mediam','medius -a -um','the middle of'],['medius','medius -a -um','the middle of'],['summus','summus -a -um','the top of, the surface of'],['summum','summus -a -um','the top of, the surface of'],['summa','summus -a -um','the top of, the surface of'],['summā','summus -a -um','the top of, the surface of'],['summam','summus -a -um','the top of, the surface of']]){L.delete(w);put(w,h,m,'x')}
/* words that are forms of two dictionary entries: which one a sentence means is decided here, by the words around them */
const VERBISH=/(^|\s)(ad|in|cum|ā|ab|ē|ex|per|sine|trāns|prope)\s*$/;
function pickOne(es,word,before,sentence,hint){
  if(es.length<2)return es;
  if(new Set(es.map(e=>e.m)).size===1)return[es.find(e=>/, m\.$/.test(e.h))||es[0]]; /* amīcus and amīca: the same meaning */
  if(fold(word)==='hortō')return es.filter(e=>e.kind==='n'); /* hortāre is almost never meant */
  if(hint){const a=es.filter(e=>hint.includes(e.h.split(/[, ]/)[0]));if(a.length)return a}
  if(VERBISH.test(before)){const a=es.filter(e=>e.kind!=='v');if(a.length)return a}
  /* a sentence has one finite verb: if another word already is one, this is a noun; otherwise it is the verb */
  const others=sentence.split(/[\s,.;:!?]+/).filter(w=>w&&fold(w)!==fold(word));
  const hasVerb=others.some(w=>{const e=L.get(fold(w));return e&&e.length===1&&e[0].kind==='v'});
  const a=es.filter(e=>hasVerb?e.kind!=='v':e.kind==='v');return a.length?a:es;
}
const strip=s=>s.replace(/\{([^{}|]+)\|[^{}]*\}/g,'$1').replace(/\*\*/g,'').replace(/\[\[|\]\]/g,'');
const segs=s=>[...strip(String(s)).matchAll(/\*([^*]+)\*/g)].map(m=>m[1]);
const WORD=/[\p{L}\p{M}]+/gu;
const stats={unknown:{},ambig:{}};
function look(seg,out,where,hint){
  for(const m of seg.matchAll(WORD)){let w=m[0];const before=seg.slice(0,m.index);if(m.index>0&&seg[m.index-1]==='-')continue;
    let es=L.get(fold(w)),extra=null;
    if(!es){for(const[e,h,mean]of[['que','-que','and'],['ne','-ne','marks a yes or no question']])if(fold(w).endsWith(e)&&L.get(fold(w).slice(0,-e.length))){es=L.get(fold(w).slice(0,-e.length));w=w.slice(0,-e.length);extra={h,m:mean}}}
    if(!es){if(/^[a-zāēīōū]+$/i.test(w)&&w.length>1)stats.unknown[w]=(stats.unknown[w]||0)+1;continue}
    const p=pickOne(es,w,before,seg,hint);if(process.env.AUD&&es.length>1&&new Set(es.map(e=>e.m)).size>1)console.log('AUD',w,'|',seg,'|',p.map(e=>e.h).join(' / '),'| from',es.map(e=>e.h).join(' / '));if(p.length>1)stats.ambig[w+' <'+seg+'>']=p.map(e=>e.h);
    p.forEach(e=>{if(!out.some(x=>x.h===e.h))out.push({h:e.h,m:e.m,src:where})});
    if(extra&&!out.some(x=>x.h===extra.h))out.push({...extra,src:where});
  }
}
function gloss(q){
  const out=[];const hint=q.lem;
  segs(q.p).forEach(s=>look(s,out,'p',hint));
  if(q.k==='mc')q.o.forEach(o=>segs(o).forEach(s=>look(s,out,'o',hint)));
  if(q.k==='la')q.a.slice(0,1).forEach(a=>look(a,out,'a',hint));
  const right=q.k==='mc'?strip(q.o[q.a]).replace(/\*/g,''):'';
  const small=right&&right.split(/\s+/).length<=2;
  const norm=s=>fold(s).replace(/^to /,'').replace(/[.,;?!]/g,'');
  const kept=out.filter(e=>{
    if(e.src==='a'&&q.a.some(x=>fold(x)===fold(e.h.split(/[, ]/)[0])))return false; /* never hand over the answer itself */
    if(small&&right.split(/[\s,]+/).some(w=>norm(e.m).split(/[\s,;]+/).includes(norm(w))))return false; /* the question asks what this word means */
    return true});
  return kept.map(e=>[e.h,e.m]);
}
module.exports={gloss,stats};
