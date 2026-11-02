/* Helpers for writing Latin lessons. Forms come from Verba's own engine (site/engine.js), so a lesson can't disagree with the practice mode. */
const G=require('../../site/engine.js');
const vb=x=>{const v=G.VERBS.find(v=>v.inf===x);if(!v)throw new Error('no verb '+x);return v};
const nn=x=>{const n=G.NOUNS.find(n=>n.nom===x);if(!n)throw new Error('no noun '+x);return n};
const PERS=['I','you','he','we','you','they'];
const PL=['1st person singular','2nd person singular','3rd person singular','1st person plural','2nd person plural','3rd person plural'];
const MEAN=['I','you (one person)','he, she or it','we','you (more than one person)','they'];
const ES=b=>/(s|sh|ch|x|o)$/.test(b)?b+'es':/[^aeiou]y$/.test(b)?b.slice(0,-1)+'ies':b+'s';
const EXTRA={sit:['sat','sat','sitting'],stay:['stayed','stayed','staying'],run:['ran','run','running'],go:['went','gone','going'],greet:['greeted','greeted','greeting'],hear:['heard','heard','hearing'],see:['saw','seen','seeing'],write:['wrote','written','writing'],read:['read','read','reading'],lead:['led','led','leading'],send:['sent','sent','sending'],give:['gave','given','giving'],seek:['sought','sought','seeking'],find:['found','found','finding'],fight:['fought','fought','fighting'],hold:['held','held','holding'],have:['had','had','having'],teach:['taught','taught','teaching'],say:['said','said','saying'],leave:['left','left','leaving'],sleep:['slept','slept','sleeping'],come:['came','come','coming'],take:['took','taken','taking'],throw:['threw','thrown','throwing'],kill:['killed','killed','killing'],live:['lived','lived','living'],walk:['walked','walked','walking'],warn:['warned','warned','warning'],sail:['sailed','sailed','sailing'],work:['worked','worked','working'],hurry:['hurried','hurried','hurrying'],save:['saved','saved','saving'],want:['wanted','wanted','wanting'],guard:['guarded','guarded','guarding'],watch:['watched','watched','watching'],carry:['carried','carried','carrying'],call:['called','called','calling'],love:['loved','loved','loving'],praise:['praised','praised','praising'],prepare:['prepared','prepared','preparing'],tell:['told','told','telling'],show:['showed','shown','showing'],defend:['defended','defended','defending'],conquer:['conquered','conquered','conquering'],capture:['captured','captured','capturing'],punish:['punished','punished','punishing'],overcome:['overcame','overcome','overcoming'],announce:['announced','announced','announcing'],wait:['waited','waited','waiting'],free:['freed','freed','freeing'],fear:['feared','feared','fearing'],believe:['believed','believed','believing'],hope:['hoped','hoped','hoping'],destroy:['destroyed','destroyed','destroying'],terrify:['terrified','terrified','terrifying'],frighten:['frightened','frightened','frightening'],rule:['ruled','ruled','ruling'],think:['thought','thought','thinking'],know:['knew','known','knowing'],receive:['received','received','receiving'],accept:['accepted','accepted','accepting'],help:['helped','helped','helping'],hinder:['hindered','hindered','hindering'],build:['built','built','building'],fortify:['fortified','fortified','fortifying'],entrust:['entrusted','entrusted','entrusting'],hand:['handed','handed','handing'],delight:['delighted','delighted','delighting'],owe:['owed','owed','owing'],ask:['asked','asked','asking'],order:['ordered','ordered','ordering'],beg:['begged','begged','begging'],keep:['kept','kept','keeping'],drive:['drove','driven','driving'],depart:['departed','departed','departing'],leavea:['left','left','leaving']};
const eng=b=>{const v=G.VERBS.find(v=>v.e===b);if(EXTRA[b])return EXTRA[b];if(v)return[v.past,v.pp,v.ing];throw new Error('no English for '+b)};
/* every way to say one English verb: b base, key: 3 he, p they, 1 I, w we */
function enVerb(b,mode='3'){
  const[past,pp,ing]=eng(b),pl=/p$/.test(mode),m=mode.replace(/p$/,'')||'3';
  const be=pl?'are':'is',was=pl?'were':'was',s=pl?b:ES(b),doit=pl?'do':'does',has=pl?'have':'has';
  switch(m){
    case'3':return[s,`${be} ${ing}`,`${doit} ${b}`];
    case'1':return[b,`am ${ing}`,`do ${b}`];
    case'f':return[`will ${b}`,`are going to ${b}`.replace('are',be)];
    case'i':return[`${was} ${ing}`,`used to ${b}`,`kept ${ing}`];
    case'd':return[past,`${has} ${pp}`,`did ${b}`];
    case'x':return[`${be} ${pp}`,`${be} being ${pp}`];
    case'xf':return[`will be ${pp}`];
    case'xi':return[`${was} being ${pp}`,`used to be ${pp}`];
    case'inf':return[`to ${b}`];
  }
  throw new Error('mode '+mode);
}
function expand(s){ /* <call> <call:p> <call:f> ... and [a|b] */
  let vs=[s.trim().replace(/\bI <([a-z ]+):p>/g,'I <$1:1>')];
  for(;;){const m=vs[0].match(/<([a-z ]+)(?::([a-z0-9]+))?>|\[([^\]]+)\]/i);if(!m)break;
    const alts=m[3]?m[3].split('|'):enVerb(m[1],m[2]||'3');
    vs=vs.flatMap(v=>alts.map(a=>v.replace(m[0],a).replace(/ +/g,' ').trim()));if(vs.length>400)vs=vs.slice(0,400)}
  return vs;
}
const firstOf=s=>expand(s)[0];
const Cap=s=>s.charAt(0).toUpperCase()+s.slice(1);
/* six persons of a tense, in English: every accepted phrase */
function enPerson(b,tense,voice,p){
  const pro=[['I'],['you'],['he','she','it'],['we'],['you'],['they']][p],pl=p>2||p===1;
  const out=[];
  const fix=(x)=>{
    if(p===0)return x.replace(/^is /,'am ').replace(/^was /,'was ').replace(/^does /,'do ').replace(/^has /,'have ');
    if(p===1||p>2)return x;return x};
  const key=(voice==='pass'?{pres:'x',fut:'xf',impf:'xi'}:{pres:'3',fut:'f',impf:'i',perf:'d'})[tense];
  const list=(p===2||p===0)?enVerb(b,key):enVerb(b,key+'p');
  const first=p===0;
  const conv=first?list.map(x=>{if(key==='3')return x===ES(b)?b:x.replace(/^is /,'am ').replace(/^does /,'do ');if(key==='x')return x.replace(/^is /,'am ');if(key==='f')return x.replace(/^is going/,'am going');if(key==='d')return x.replace(/^has /,'have ');return x}):list;
  for(const pr of pro)for(const x of conv)out.push(`${pr} ${x}`);
  return out;
}
const say=(a)=>a[0];
/* question makers */
const pick=(n,a)=>{const o=[];for(let i=0;o.length<n;i++)o.push(a[i%a.length]);return o};
function parseQs(verbs,tense,voice,ends){ /* person and number, multiple choice */
  return pick(10,verbs).map((inf,i)=>{const v=vb(inf),p=[0,3,5,1,4,2,3,1,5,0][i],f=G.vf(v,tense,voice,p);
    return{k:'mc',p:`What person and number is *${f}*?`,o:PL.slice(),a:p,w:`The ending of *${f}* means ${MEAN[p]}, so it is ${PL[p]}.`}});
}
function enQs(verbs,tense,voice){
  return pick(10,verbs).map((inf,i)=>{const v=vb(inf),p=[2,5,0,3,1,4,5,2,3,0][i],f=G.vf(v,tense,voice,p),a=enPerson(v.e,tense,voice,p);
    return{k:'en',p:`Translate into English: *${f}*`,a,w:`*${f}* is ${PL[p]}, so it means “${a[0]}.”`}});
}
function laQs(verbs,tense,voice){
  return pick(10,verbs).map((inf,i)=>{const v=vb(inf),p=[3,0,2,5,4,1,0,5,2,3][i],f=G.vf(v,tense,voice,p),e=enPerson(v.e,tense,voice,p)[0];
    return{k:'la',p:`Write in Latin: ${p===4?e.replace(/^you/,'you all'):p===1?e.replace(/^you/,'you (one person)'):e}`,a:[f],w:`The ${PL[p]} form is *${f}*.`}});
}
/* a list of [Latin, English] sentences: odd ones Latin to English, even ones English to Latin */
function tr(skill,list,note,opt={}){
  if(list.length!==10)throw new Error(`${skill}: ${list.length} sentences, need 10`);
  return{s:skill,b:list.map(([la,en,w],i)=>{const a=expand(en);
    return(i%2===0&&!opt.only)||opt.only==='en'?{k:'en',p:`Translate into English: *${la}*`,a,w:w||note,sv:la}
      :{k:'la',p:`Translate into Latin: ${Cap(a[0])}${/[.?!]$/.test(a[0])?'':'.'}`,a:[la],w:w||note,...(opt.alt&&opt.alt[i]?{a:[la,...opt.alt[i]]}:{})}})};
}
/* multiple choice: [prompt, right, [wrong...], why] */
function mc(skill,list){
  if(list.length!==10)throw new Error(`${skill}: ${list.length} questions, need 10`);
  return{s:skill,b:list.map(([p,r,w,y])=>{const o=[r,...w];return{k:'mc',p,o,a:0,w:y}})};
}
/* typed short answers: [prompt, [accepted], why, kind] */
function ty(skill,list,kind='tx'){
  if(list.length!==10)throw new Error(`${skill}: ${list.length} questions, need 10`);
  return{s:skill,b:list.map(([p,a,w,m])=>({k:kind,p,a:[].concat(a),w,...(m?{m:1}:{})}))};
}
const spot=(s,b)=>{if(b.length!==10)throw new Error(`${s}: ${b.length}`);return{s,b}};
/* every noun's declension: case-word list */
const CASE=['nominative','genitive','dative','accusative','ablative','vocative'];
/* write a noun form: [nominative, case number, 0 singular or 1 plural] */
function nq(skill,list){if(list.length!==10)throw new Error(skill);return{s:skill,b:list.map(([nom,c,k])=>{const n=nn(nom),f=G.nf(n,c,k);
  return{k:'la',p:`Write the ${CASE[c]} ${k?'plural':'singular'} of *${nom}*.`,a:[f],w:`The ${CASE[c]} ${k?'plural':'singular'} of *${nom}* is *${f}*.`,...(/ā$/.test(f)?{m:1}:{})}})}}
module.exports={nq,G,vb,nn,PL,MEAN,tr,mc,ty,spot,parseQs,enQs,laQs,enPerson,expand,firstOf,Cap,pick,CASE};
