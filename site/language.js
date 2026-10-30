/* ---------- Latin: how the language behaves in the shared practice code ----------
   Each piece here is called by a shared script (named beside it). Grammar itself is in engine.js. */
/* js/core.js glossify(): fold a word so accents don't stop a hover definition from matching */
const foldWord=t=>t.replace(/[āēīōūȳĀĒĪŌŪȲ]/g,c=>'aeiouyAEIOUY'['āēīōūȳĀĒĪŌŪȲ'.indexOf(c)]).toLowerCase();
/* js/drill.js next(): the sentence as shown, without its end mark */
const sentenceText=q=>cap(q.display||q.tokens.map(t=>t.la+(t.post||'')).join(' '));
/* js/drill.js: get a new question ready */
function prep(x){x.mode=(x.choice||x.form)?'blank':modeSel();if(!x.choice&&x.mode!=='blank')x.latin=cap(x.display||x.tokens.map(t=>t.la+(t.post||'')).join(' '))+x.end;x.greeting=R(GREETINGS);return x}
/* ---------- charts beside the sentence: buildCharts() runs once at start-up, renderCharts(q) on every new sentence ---------- */
function buildCharts(){
  const PN=['1st (I)','2nd (you)','3rd (he/she/it)'],PL=['(we)','(you)','(they)'],re=x=>x.replace(/^(\S*)ris$/,'$1ris / -$1re');
  const blk=(cap_,act,pas,note)=>`<div class="cwrap"><table><caption>${cap_}</caption>${[['Active',act],['Passive',pas]].map(([n,e])=>`<tr class="sub"><th>${n}</th><th>Singular</th><th></th><th>Plural</th></tr>`+[0,1,2].map(i=>`<tr><th>${PN[i]}</th><td>-${re(e[i])}</td><th>${PL[i]}</th><td>-${e[i+3]}</td></tr>`).join('')).join('')}</table>${note?`<p>${note}</p>`:''}</div>`;
  const t1=blk('Present tense, 1st conjugation',T6(PA[1]),T6(PP[1]),'Passive infinitive: -re becomes -rī (amārī, to be loved).<br>2nd conjugation: swap ā for e; the e stays before ō (-eō).<br>dare keeps a short a: damus, datis, darī (but dās).');
  const cols=[E[1],E[2],E['2n']],order=[0,3,2,4,1];
  const t2=`<div class="cwrap"><table><caption>1st and 2nd declension noun endings</caption><tr><th rowspan="2">Case</th><th colspan="2">1st feminine</th><th colspan="2">2nd masculine</th><th colspan="2">2nd neuter</th></tr><tr>${'<th>Sing.</th><th>Plur.</th>'.repeat(3)}</tr>${order.map(c=>`<tr><th>${cap(CASES[c])}</th>${cols.map(d=>`<td>-${d[0][c]}</td><td>-${d[1][c]}</td>`).join('')}</tr>`).join('')}</table><p>Vocative: same as nominative, except -us becomes -e.<br>dea and fīlia use -ābus in the dative and ablative plural.</p></div>`;
  const cj=[2,3,'3i',4],t3=`<div class="cwrap"><table><caption>Present tense, other conjugations</caption><tr><th></th><th>2nd</th><th>3rd</th><th>3rd -iō</th><th>4th</th></tr>${[['Active',PA],['Passive',PP]].map(([n,T])=>`<tr class="sub"><th colspan="5">${n}</th></tr>`+[0,1,2,3,4,5].map(i=>`<tr><th>${i<3?PN[i]:PL[i-3]}</th>${cj.map(c=>`<td>-${re(T6(T[c])[i])}</td>`).join('')}</tr>`).join('')).join('')}</table><p>Passive infinitive: 2nd -ērī, 3rd and 3rd -iō -ī, 4th -īrī.</p></div>`;
  const t4=blk('Future, 1st and 2nd conjugation',T6('bō bis bit bimus bitis bunt'),T6('bor beris bitur bimur biminī buntur').map((x,i)=>i===1?'beris / -bere':x),'Keep the stem vowel: portābō, monēbō.');
  const t5=blk('Future, 3rd and 4th conjugation',T6('am ēs et ēmus ētis ent'),T6('ar ēris ētur ēmur ēminī entur'),'3rd -iō and 4th add i first: capiam, audiam.');
  const t6=blk('Continuous past (imperfect), all conjugations',T6('bam bās bat bāmus bātis bant'),T6('bar bāris bātur bāmur bāminī bantur'),'Drop the last three letters of the infinitive, then add the vowel and -bā-:<br>1st -ā- (portābam), 2nd -ē- (vidēbam), 3rd -ē- (mittēbam), 3rd -iō -iē- (capiēbam), 4th -iē- (audiēbam).<br>Short a before -m, -t, -nt and -r: portābam, portābat, portābant, portābar.<br>Means “was/were …-ing” or “used to …”.');
  const IMPS=[['1st','portāre','portā','portāte','portāre','portāminī'],['2nd','sedēre','sedē','sedēte','sedēre','sedēminī'],['3rd','currere','curre','currite','currere','curriminī'],['3rd -iō','capere','cape','capite','capere','capiminī'],['4th','audīre','audī','audīte','audīre','audīminī']];
  const t7=`<div class="cwrap"><table><caption>Imperative (commands)</caption><tr class="sub"><th></th><th>Infinitive</th><th>Active sing.</th><th>Active pl.</th><th>Passive sing.</th><th>Passive pl.</th></tr>${IMPS.map(r=>`<tr><th>${r[0]}</th>${r.slice(1).map(x=>`<td>${x}</td>`).join('')}</tr>`).join('')}</table><p>Singular: drop -re. Plural: -re becomes -te, but 3rd and 3rd -iō use -ite (currite, capite).<br>The passive singular looks like the active infinitive; the passive plural is the -minī form.<br>Poetic “don’t”: nē + imperative (nē vidēminī! don’t be seen!).<br>salvē, salvēte: hello · valē, valēte: goodbye · notā bene: note well</p></div>`;
  $('cbody').innerHTML=t1+t2+t3+t4+t5+t6+t7;
  const set=h=>{$('cbody').hidden=h;$('ctoggle').textContent=h?'Show':'Hide'};
  $('ctoggle').addEventListener('click',()=>set(!$('cbody').hidden));
}
function renderCharts(){} // the charts never change
/* ---------- identify the use (js/identify.js) ---------- */
const ID_TOPIC={gen:'genposs',gendat:'genposs',genpart:'genpart',genso:'genso',genmat:'genmat',cause:'cause',placeFrom:'placeFrom',sep:'sep',agent:'agent',means:'means',accomp:'accomp',manner:'manner',placeWhere:'placeWhere',acc:'acc',placeTo:'placeTo',dat:'dat',datref:'datref'};
const normU=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z ]/g,' ').replace(/\b(genitive|ablative|accusative|dative|gen|abl|acc|dat|case|use|usage|of|the|a|an|it|is|its|this|type)\b/g,' ').replace(/\s+/g,' ').trim();
const isPrepTok=t=>t&&t.vocab&&(/\(\+(acc|abl)\)/.test(t.vocab)||t.la==='cum');
function phraseOf(qq,tok){const i=qq.tokens.indexOf(tok),p=qq.tokens[i-1];return(isPrepTok(p)?p.la+' ':'')+qq.tokens.slice(i,i+1+(tok.span||0)).map(t=>t.la).join(' ')}
function latinMarked(qq,tok){
  const i=qq.tokens.indexOf(tok),from=isPrepTok(qq.tokens[i-1])?i-1:i,useQue=qq.and&&qq.display&&/que\b/.test(qq.display);
  let out=[],queNext=false,first=true,firstWord=true;
  qq.tokens.forEach((t,j)=>{
    if(t.et&&useQue){queNext=true;return}
    let w=t.la;if(queNext){w=w.replace(/^(\S+)/,'$1que');queNext=false}
    if(qq.ne&&first&&!t.isVoc){w=w.replace(/^(\S+)/,'$1ne');first=false}
    if(firstWord){w=cap(w);firstWord=false}
    w=esc(w);if(j>=from&&j<=i+(tok.span||0))w=`<mark>${w}</mark>`;
    out.push(w+(t.post||''));
  });
  return out.join(' ').replace(/<\/mark> <mark>/g,' ')+qq.end;
}
function pickXC(qq){
  if(!qq||qq.choice||!qq.tokens)return null;
  const c=qq.tokens.filter(t=>t.cids&&TY(t.cids[0])&&!XC_SKIP(t,qq));if(!c.length)return null;
  const pref=qq.topic&&ID_TOPIC[qq.topic.id],a=c.find(t=>TY(t.cids[0])===pref);if(a)return a;
  const nonAcc=c.filter(t=>TY(t.cids[0])!=='acc');return R(nonAcc.length?nonAcc:c);
}
function makeIdentify(){
  const fb=[...bFocus].filter(x=>TYPES[x]),ft=[...tFocus].map(t=>ID_TOPIC[t]).filter(Boolean);
  let types=tab==='uses'?[...uSel]:tab==='build'?(fb.length?fb:[...bIngs].filter(x=>TYPES[x])):(ft.length?ft:[...selected].map(t=>ID_TOPIC[t]).filter(Boolean));
  if(!types.length)types=Object.keys(TYPES);
  for(let tries=0;tries<200;tries++){
    const ty=R(types);ALT=[];
    let qq;try{qq=TYPES[ty].gen?TYPES[ty].gen():ty==='acc'?B('stmt',chance(.5)?['adj']:[]):B('stmt',ty==='genposs'&&chance(.35)?['genposs','gdat']:[ty])}catch(e){continue}qq.alts=ALT;
    const tok=qq.tokens.find(t=>t.cids&&TY(t.cids[0])===ty);if(!tok)continue;
    qq.idType=ty;qq.idTok=tok;if(!useEnMark(qq))continue;qq.topic={id:'identify',level:'I',name:'Identify: '+USES[TYPES[ty].c].name+' uses'};
    qq.topic.level=TYPES[ty].level||USES[TYPES[ty].c].level||qq.topic.level||'I';
    return qq;
  }
  return makeQuestion(selected.size?selected:new Set(['means']),false);
}
/* js/check.js checkT(): the feedback line for a checked translation (r: the grader's result) */
function resultLine(r,model,why,order,e2l,inp){
  let li;
  if(r.ok&&!r.macron)li=`<li class="ok"><b class="ok">Correct.</b> ${model}</li>`;
  else if(r.ok)li=`<li class="mac"><b class="ok">Correct</b>, <b class="mac">but check the macrons.</b> With every macron: ${model}</li>`;
  else if(r.essential)li=`<li class="bad"><b class="bad">Incorrect: a macron matters here.</b> <span class="la">${esc(r.essential.join(', '))}</span> is a different form. The answer is ${model}</li>`;
  else li=`<li class="bad"><b class="bad">${r.empty?'No answer given.':'Incorrect.'}</b>${why}${why?'<br>':' '}One correct answer: ${model}${order}${r.empty?'':'<br><button class="btn quiet" id="override">Count my answer as correct</button>'}</li>`;
  return li;
}
/* js/check.js: typing helpers in the answer box and the question box, and the letter buttons */
function setupTyping(){
  const MAC={a:'ā',e:'ē',i:'ī',o:'ō',u:'ū',A:'Ā',E:'Ē',I:'Ī',O:'Ō',U:'Ū'};
  $('qbody').addEventListener('input',e=>{const t=e.target;if(t.tagName!=='INPUT'||q.mode==='l2e')return;
    const p=t.selectionStart,v=t.value;if(p>1&&(v[p-1]==='-'||v[p-1]==='_')&&MAC[v[p-2]]){t.value=v.slice(0,p-2)+MAC[v[p-2]]+v.slice(p);t.setSelectionRange(p-1,p-1);}});
  $('macrons').innerHTML=['ā','ē','ī','ō','ū'].map(c=>`<button type="button" aria-label="Insert ${c}">${c}</button>`).join('');
  $('askq').addEventListener('input',e=>{const t=e.target,p=t.selectionStart,v=t.value;if(p>1&&(v[p-1]==='-'||v[p-1]==='_')&&MAC[v[p-2]]){t.value=v.slice(0,p-2)+MAC[v[p-2]]+v.slice(p);t.setSelectionRange(p-1,p-1);}});
}
/* js/vocab.js: the word to type when a vocabulary line is clicked */
function vocabWords(v){
  const i=v.indexOf(' : '),la=(i<0?v:v.slice(0,i)).trim(),en=i<0?'':v.slice(i+3).trim();
  const laW=(la.match(/^[^\s,(/]+/)||[la])[0];
  const enW=en.split(/[;,]/)[0].replace(/\([^)]*\)/g,'').replace(/\s+/g,' ').trim()||en;
  return{la:laW,en:enW};
}
