/* SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (C) 2026 janavduraikkannan and Linguae contributors */
/* Smoke test for the Lesson 10 additions. Run from the verba folder: node tools/test_lesson10.js
   Generates many sentences for the topics Lesson 10 teaches, checks their shape, and grades the model answer. */
const G=require('../site/engine.js');G.setEr(true);
let fails=0;const F=m=>{fails++;console.log('FAIL',m)};
const T=id=>G.TOPICS.find(t=>t.id===id);
const strip=s=>s.normalize('NFD').replace(/̄/g,'').normalize('NFC');
/* nouns */
for(const [nom,gen,g] of [['homō','hominis','m'],['prīnceps','prīncipis','m'],['iter','itineris','n']]){
  const n=G.NOUNS.find(x=>x.nom===nom);if(!n){F('missing noun '+nom);continue}
  if(G.nf(n,1,0)!==gen)F(nom+' genitive '+G.nf(n,1,0));
  if(n.g!==g)F(nom+' gender');
}
const forms=(nom,k)=>{const n=G.NOUNS.find(x=>x.nom===nom);return[0,1,2,3,4,5].map(c=>G.nf(n,c,k)).join(' ')};
const want={'prīnceps0':'prīnceps prīncipis prīncipī prīncipem prīncipe prīnceps','prīnceps1':'prīncipēs prīncipum prīncipibus prīncipēs prīncipibus prīncipēs','iter0':'iter itineris itinerī iter itinere iter','iter1':'itinera itinerum itineribus itinera itineribus itinera','homō0':'homō hominis hominī hominem homine homō','homō1':'hominēs hominum hominibus hominēs hominibus hominēs'};
for(const k in want){const got=forms(k.slice(0,-1),+k.slice(-1));if(got!==want[k])F(`${k}: ${got}`)}
/* topics exist and every generated question can be graded with its own model answer */
for(const id of ['neg','esse','imp','d3','sum']){
  const t=T(id);if(!t){F('no topic '+id);continue}
  const seen=new Set();
  for(let i=0;i<400;i++){
    let q;try{q=G.makeQuestion(new Set([id]),false)}catch(e){F(id+' threw '+e.message);break}
    if(!q.display&&!q.tokens)F(id+' no tokens');
    seen.add(q.display||q.en);
    if(id==='neg'){
      const d=strip(q.display||'');
      if(!/\bnoli(te)?\b/.test(d.toLowerCase()))F('neg without noli: '+q.display);
      if(!/don't/.test(q.en))F('neg english: '+q.en);
    }
  }
  console.log(id,seen.size,'different sentences');
}
/* grading: the Latin and English a question shows are accepted as answers, and so is nē + imperative for a negative command */
for(const id of ['neg','esse','imp','d3','sum']){
  for(let i=0;i<300;i++){const q=G.makeQuestion(new Set([id]),false),la=G.latinOf(q.tokens,{ne:q.ne}).replace(/[.!?,]/g,'');
    if(!G.gradeLatin(q,la).ok)F(id+' Latin answer refused: '+la+' | '+q.en);
    if(!G.gradeEnglish(q,q.en).ok)F(id+' English answer refused: '+q.en);
    if(q.altTokens)for(const alt of q.altTokens){const a=G.latinOf(alt,{ne:q.ne}).replace(/[.!?,]/g,'');if(!G.gradeLatin(q,a).ok)F(id+' alternative refused: '+a)}}
}
/* es / este sentences appear in the esse topic */
let cmd=0;for(let i=0;i<600;i++){const q=G.makeQuestion(new Set(['esse']),false);if(/\b(es|este)\b/.test(strip(q.display||G.latinOf(q.tokens))) && /^[^,]+, be /.test(q.en))cmd++}
if(!cmd)F('esse never makes an es/este command');else console.log('es/este commands:',cmd,'of 600');
/* the focus picker works for the new topic */
for(let i=0;i<50;i++){const q=G.makeFocused(new Set(['neg','imp','d3','acc','nom']),new Set(['neg']));if(!q)F('focus neg')}
console.log(fails?fails+' failures':'ok');process.exit(fails?1:0);
