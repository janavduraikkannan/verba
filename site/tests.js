/* ---------- Verba's Practice Test mode: the pages it lists, the study guide, and the verb test with its answer checker ----------
   The mechanics (the tab, the page, check-as-you-go or check-at-the-end, the AI explanations) are in js/tests.js, which is the same on
   every practice site. A site without this file simply never shows the Practice Test tab.

   PTESTS.groups   the groups the tab lists; each page is {id, kind:'test'|'guide', title, blurb}
   PTESTS.guide    id → the study guide page, as HTML
   PTESTS.tests    id → {title, intro, bank(), make(), grade(q, raw, strict), tutor, rules, describe(q)}
   Everything is inside one function so none of these names clash with the rest of the site. */
const PTESTS=(function(){
  /* ================= The verbs and the conjugation engine ================= */
  const VERBS=[
    {inf:'portāre',stem:'port',c:'1',base:'carry',s3:'carries',ing:'carrying',pp:'carried',gloss:'to carry'},
    {inf:'vidēre',stem:'vid',c:'2',base:'see',s3:'sees',ing:'seeing',pp:'seen',gloss:'to see'},
    {inf:'iubēre',stem:'iub',c:'2',base:'order',s3:'orders',ing:'ordering',pp:'ordered',gloss:'to order'},
    {inf:'legere',stem:'leg',c:'3',base:'choose',s3:'chooses',ing:'choosing',pp:'chosen',gloss:'to choose',note:'-ō'},
    {inf:'fallere',stem:'fall',c:'3',base:'deceive',s3:'deceives',ing:'deceiving',pp:'deceived',gloss:'to deceive',note:'-ō'},
    {inf:'iacere',stem:'iac',c:'3io',base:'throw',s3:'throws',ing:'throwing',pp:'thrown',gloss:'to throw',note:'-iō'},
    {inf:'audīre',stem:'aud',c:'4',base:'hear',s3:'hears',ing:'hearing',pp:'heard',gloss:'to hear'},
    {inf:'impedīre',stem:'imped',c:'4',base:'hinder',s3:'hinders',ing:'hindering',pp:'hindered',gloss:'to hinder'}
  ];
  const CONJ_NAME={'1':'1st','2':'2nd','3':'3rd','3io':'3rd -iō','4':'4th'};
  const PRES={
    A:{'1':['ō','ās','at','āmus','ātis','ant'],'2':['eō','ēs','et','ēmus','ētis','ent'],'3':['ō','is','it','imus','itis','unt'],'3io':['iō','is','it','imus','itis','iunt'],'4':['iō','īs','it','īmus','ītis','iunt']},
    P:{'1':['or',['āris','āre'],'ātur','āmur','āminī','antur'],'2':['eor',['ēris','ēre'],'ētur','ēmur','ēminī','entur'],'3':['or',['eris','ere'],'itur','imur','iminī','untur'],'3io':['ior',['eris','ere'],'itur','imur','iminī','iuntur'],'4':['ior',['īris','īre'],'ītur','īmur','īminī','iuntur']}
  };
  const B_A=['bō','bis','bit','bimus','bitis','bunt'],B_P=['bor',['beris','bere'],'bitur','bimur','biminī','buntur'];
  const F3_A=['am','ēs','et','ēmus','ētis','ent'],F3_P=['ar',['ēris','ēre'],'ētur','ēmur','ēminī','entur'];
  const I_A=['bam','bās','bat','bāmus','bātis','bant'],I_P=['bar',['bāris','bāre'],'bātur','bāmur','bāminī','bantur'];
  const IMP_V={'1':'ā','2':'ē','3':'ē','3io':'iē','4':'iē'};
  const INF={A:{'1':'āre','2':'ēre','3':'ere','3io':'ere','4':'īre'},P:{'1':'ārī','2':'ērī','3':'ī','3io':'ī','4':'īrī'}};
  const arr=x=>Array.isArray(x)?x:[x];
  /* every accepted spelling of one form: tense 'pres' | 'fut' | 'imp' | 'inf', voice 'A' | 'P', person 0 to 5 */
  function forms(v,tense,voice,p){
    const c=v.c,s=v.stem;
    if(tense==='inf')return[s+INF[voice][c]];
    if(tense==='pres')return arr(PRES[voice][c][p]).map(x=>s+x);
    if(tense==='fut'){
      if(c==='1'||c==='2')return arr((voice==='A'?B_A:B_P)[p]).map(x=>s+(c==='1'?'ā':'ē')+x);
      return arr((voice==='A'?F3_A:F3_P)[p]).map(x=>s+(c==='3'?'':'i')+x);
    }
    return arr((voice==='A'?I_A:I_P)[p]).map(x=>s+IMP_V[c]+x);
  }

  /* ================= Making a test ================= */
  const PERSON=['I','you (sing.)','he/she','we','you guys','they'];
  const TENSE_NAME={pres:'present',fut:'future',imp:'imperfect'},VOICE_NAME={A:'active',P:'passive'};
  const AM=['am','are','is','are','are','are'],WAS=['was','were','was','were','were','were'];
  const pick=a=>a[Math.floor(Math.random()*a.length)];
  const shuffle=a=>{for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
  function english(v,t,vo,p){
    if(t==='inf')return vo==='A'?'to '+v.base:'to be '+v.pp;
    const s=p===2?pick(['he','she']):PERSON[p];
    if(t==='pres'&&vo==='A')return Math.random()<.5?s+' '+(p===2?v.s3:v.base):s+' '+AM[p]+' '+v.ing;
    if(t==='pres')return s+' '+AM[p]+(Math.random()<.5?' being ':' ')+v.pp;
    if(t==='fut')return s+' will '+(vo==='A'?v.base:'be '+v.pp);
    return s+' '+WAS[p]+' '+(vo==='A'?v.ing:'being '+v.pp);
  }
  const label=(t,vo,p)=>t==='inf'?VOICE_NAME[vo]+' infinitive':TENSE_NAME[t]+' '+VOICE_NAME[vo]+', “'+PERSON[p]+'”';
  /* 20 questions: three of each tense and voice, plus two passive infinitives; each verb is used before any repeats */
  function make(){
    const slots=[];
    ['pres','fut','imp'].forEach(t=>['A','P'].forEach(vo=>{for(let k=0;k<3;k++)slots.push([t,vo])}));
    slots.push(['inf','P'],['inf','P']);
    const seen={},out=[],pool=shuffle(VERBS.concat(VERBS,VERBS));
    shuffle(slots).forEach(sl=>{
      let v,p,key,tries=0;
      do{v=tries===0&&pool.length?pool.pop():pick(VERBS);p=sl[0]==='inf'?0:Math.floor(Math.random()*6);key=v.inf+sl[0]+sl[1]+p;tries++}while(seen[key]&&tries<50);
      seen[key]=1;
      out.push({v,t:sl[0],vo:sl[1],p,en:english(v,sl[0],sl[1],p),answers:forms(v,sl[0],sl[1],p)});
    });
    return out;
  }

  /* ================= Checking an answer (code only; the AI never decides) ================= */
  const clean=s=>(s||'').normalize('NFC').toLowerCase().replace(/j/g,'i').replace(/[^a-zāēīōū]/g,'');
  const bare=s=>s.replace(/ā/g,'a').replace(/ē/g,'e').replace(/ī/g,'i').replace(/ō/g,'o').replace(/ū/g,'u');
  /* which forms of this verb the student's spelling actually is, so the note can say what they wrote instead */
  function diagnose(q,raw){
    const b=bare(clean(raw)),hits=[];
    ['pres','fut','imp'].forEach(t=>['A','P'].forEach(vo=>{for(let p=0;p<6;p++){
      if(forms(q.v,t,vo,p).some(f=>bare(f)===b))hits.push(label(t,vo,p));
    }}));
    ['A','P'].forEach(vo=>{if(bare(forms(q.v,'inf',vo,0)[0])===b)hits.push(label('inf',vo,0))});
    return hits;
  }
  function grade(q,raw,strict){
    const c=clean(raw);
    if(!c)return{status:'bad',note:'No answer.'};
    if(q.answers.includes(c))return{status:'ok'};
    if(q.answers.some(a=>bare(a)===bare(c)))return{status:strict?'bad':'warn',note:'Right letters, but check the macrons.'};
    const hits=diagnose(q,raw);
    return{status:'bad',note:hits.length?'That spelling is the '+hits.join(' or ')+' form of '+q.v.inf+'.':'That isn’t a form of '+q.v.inf+' in these tenses.'};
  }

  /* ================= What the AI is told ================= */
  const RULES=[
    'Conjugation from the infinitive: -āre 1st; -ēre 2nd; -ere with first form -ō is 3rd; -ere with first form -iō is 3rd -iō; -īre 4th.',
    'Active endings: -ō/-m, -s, -t, -mus, -tis, -nt. Passive endings: -r (-or), -ris or -re, -tur, -mur, -minī, -ntur.',
    'Present: 1st has a in every form but the first (portō, portās). 2nd has ē (videō, vidēs). 3rd has ō, four i’s, u (legō, legis ... legunt). 3rd -iō and 4th have iō, four i’s, iu (iaciō, iacis ... iaciunt). Exception: 3rd and 3rd -iō singular "you" passive use e: legeris/legere, iaceris/iacere.',
    'Passive infinitive: final -e becomes -ī (portārī, vidērī, audīrī), but 3rd conjugation drops the whole -ere and adds -ī (legī, iacī).',
    'Future 1st and 2nd: drop -re, add bō, bi, bu + ending (portābō, portābis, portābunt); in the singular "you" passive bi becomes be (portāberis/portābere).',
    'Future 3rd, 3rd -iō, 4th: the "I" form uses a (legam, legar), all other forms use e (legēs, legētur); 3rd -iō and 4th keep the i (iaciam, audiēs).',
    'Imperfect: stem + vowel (1st ā, 2nd ē, 3rd ē, 3rd -iō iē, 4th iē) + bā + ending (portābāmus, impediēbātur); bā is short before -m, -t, -nt, -r, -ntur.'
  ].join('\n');
  const describe=(q,n,raw,note)=>({n,english:q.en,verb:q.v.inf+' ('+CONJ_NAME[q.v.c]+' conjugation)',target:label(q.t,q.vo,q.p),student:raw||'(blank)',correct:q.answers.join(' or '),checker:note});

  const bank=()=>VERBS.map(v=>`<div><b class="la">${v.inf}</b>${v.note?` <small>(${v.note})</small>`:''} <i>(${v.gloss})</i></div>`).join('');

  const tests={
    pfi:{
      title:'Present, future & imperfect practice test',
      intro:'Write the Latin for each phrase; the verb to use is shown beside it. Your answers are graded by code, and the AI then explains anything you missed.',
      bankTitle:'Verbs on this test',
      tutor:'You are a friendly Latin 1 tutor. A student took a practice test on present, future and imperfect verbs (active and passive).',
      rules:RULES,
      bank,make,grade,describe,hint:q=>q.v.inf
    }
  };

  /* ================= The study guide ================= */
  /* A form is written "stem/vowel/tense/ending"; roles says what each part is: s stem, v vowel, t tense sign, e ending */
  const persons=['I','you','he / she / it','we','you all','they'];
  const cols5=[['1st','portāre'],['2nd','vidēre'],['3rd','legere'],['3rd -iō','iacere'],['4th','audīre']],cols2=cols5.slice(0,2),cols3=cols5.slice(2);
  const impForms=(stem,v,passive)=>(passive?['ba/r','bā/ris|bā/re','bā/tur','bā/mur','bā/minī','ba/ntur']:['ba/m','bā/s','ba/t','bā/mus','bā/tis','ba/nt'])
    .map(x=>x.split('|').map(y=>stem+'/'+v+'/'+y).join('|'));
  const impTable=passive=>{
    const cs=[['port','ā'],['vid','ē'],['leg','ē'],['iac','iē'],['aud','iē']].map(c=>impForms(c[0],c[1],passive));
    return{cols:cols5,roles:'svte',rows:[0,1,2,3,4,5].map(i=>cs.map(c=>c[i]))};
  };
  const T={
    presA:{cols:cols5,roles:'sve',rows:[
      ['port/ō/','vid/eō/','leg/ō/','iac/iō/','aud/iō/'],['port/ā/s','vid/ē/s','leg/i/s','iac/i/s','aud/ī/s'],['port/a/t','vid/e/t','leg/i/t','iac/i/t','aud/i/t'],
      ['port/ā/mus','vid/ē/mus','leg/i/mus','iac/i/mus','aud/ī/mus'],['port/ā/tis','vid/ē/tis','leg/i/tis','iac/i/tis','aud/ī/tis'],['port/a/nt','vid/e/nt','leg/u/nt','iac/iu/nt','aud/iu/nt']]},
    presP:{cols:cols5,roles:'sve',rows:[
      ['port/o/r','vid/eo/r','leg/o/r','iac/io/r','aud/io/r'],['port/ā/ris|port/ā/re','vid/ē/ris|vid/ē/re','leg/e/ris|leg/e/re','iac/e/ris|iac/e/re','aud/ī/ris|aud/ī/re'],
      ['port/ā/tur','vid/ē/tur','leg/i/tur','iac/i/tur','aud/ī/tur'],['port/ā/mur','vid/ē/mur','leg/i/mur','iac/i/mur','aud/ī/mur'],
      ['port/ā/minī','vid/ē/minī','leg/i/minī','iac/i/minī','aud/ī/minī'],['port/a/ntur','vid/e/ntur','leg/u/ntur','iac/iu/ntur','aud/iu/ntur']]},
    fut12A:{cols:cols2,roles:'svte',rows:[
      ['port/ā/b/ō','vid/ē/b/ō'],['port/ā/bi/s','vid/ē/bi/s'],['port/ā/bi/t','vid/ē/bi/t'],['port/ā/bi/mus','vid/ē/bi/mus'],['port/ā/bi/tis','vid/ē/bi/tis'],['port/ā/bu/nt','vid/ē/bu/nt']]},
    fut12P:{cols:cols2,roles:'svte',rows:[
      ['port/ā/b/or','vid/ē/b/or'],['port/ā/be/ris|port/ā/be/re','vid/ē/be/ris|vid/ē/be/re'],['port/ā/bi/tur','vid/ē/bi/tur'],['port/ā/bi/mur','vid/ē/bi/mur'],['port/ā/bi/minī','vid/ē/bi/minī'],['port/ā/bu/ntur','vid/ē/bu/ntur']]},
    fut34A:{cols:cols3,roles:'sve',rows:[
      ['leg/a/m','iac/ia/m','aud/ia/m'],['leg/ē/s','iac/iē/s','aud/iē/s'],['leg/e/t','iac/ie/t','aud/ie/t'],['leg/ē/mus','iac/iē/mus','aud/iē/mus'],['leg/ē/tis','iac/iē/tis','aud/iē/tis'],['leg/e/nt','iac/ie/nt','aud/ie/nt']]},
    fut34P:{cols:cols3,roles:'sve',rows:[
      ['leg/a/r','iac/ia/r','aud/ia/r'],['leg/ē/ris|leg/ē/re','iac/iē/ris|iac/iē/re','aud/iē/ris|aud/iē/re'],['leg/ē/tur','iac/iē/tur','aud/iē/tur'],['leg/ē/mur','iac/iē/mur','aud/iē/mur'],
      ['leg/ē/minī','iac/iē/minī','aud/iē/minī'],['leg/e/ntur','iac/ie/ntur','aud/ie/ntur']]},
    impA:impTable(false),impP:impTable(true)
  };
  const form=(str,roles)=>str.split('/').map((seg,i)=>seg?`<span class="pt-${roles[i]}">${seg}</span>`:'').join('');
  function table(key){
    const d=T[key];
    return`<div class="ptscroll"><table${d.cols.length<5?` class="narrow${d.cols.length}"`:''}><thead><tr><th></th>${d.cols.map(c=>`<th>${c[0]}<small>${c[1]}</small></th>`).join('')}</tr></thead><tbody>`+
      d.rows.map((r,i)=>`<tr><th scope="row">${persons[i]}</th>${r.map(cell=>`<td class="f">${cell.split('|').map(f=>form(f,d.roles)).join('<span class="or">or</span>')}</td>`).join('')}</tr>`).join('')+`</tbody></table></div>`;
  }
  const voiceTables=(a,p)=>`<div class="ptvoice"><div><p class="ptvl">Active</p>${table(a)}</div><div><p class="ptvl">Passive</p>${table(p)}</div></div>`;
  const L=s=>`<i class="la">${s}</i>`;
  const note=(h,body)=>`<aside class="ptnote"><b>${h}</b>${body}</aside>`;

  const guide=()=>`
<header class="pthero">
  <p class="lkick">Study guide · Latin I Honors</p>
  <h1>Present, future &amp; imperfect verbs</h1>
  <p class="lblurb">Every form on the test is built from the same four pieces. Learn which piece each tense uses and you can build any verb, active or passive.</p>
  <div class="ptanat" role="img" aria-label="iac, iē, bā, tur: he was being thrown">
    <div><span class="pt-s">iac</span><small>stem</small></div><div><span class="pt-v">iē</span><small>vowel</small></div>
    <div><span class="pt-t">bā</span><small>tense sign</small></div><div><span class="pt-e">tur</span><small>ending</small></div>
    <p>iaciēbātur: he / she / it was being thrown</p>
  </div>
  <nav class="ptjump" aria-label="Sections">${[['conjugation','Conjugations'],['endings','Endings'],['present','Present'],['infinitive','Infinitives'],['future','Future'],['imperfect','Imperfect'],['english','English to Latin'],['traps','Traps']].map(([id,n])=>`<a href="#" data-jump="pt-${id}">${n}</a>`).join('')}</nav>
</header>

<section id="pt-build"><h2>Building any form</h2>
  <div class="ptpanel"><ol class="ptsteps">
    <li>Find the <b>conjugation</b> from the infinitive (and the first form, for ${L('-ere')} verbs).</li>
    <li>Find the <b class="pt-s">stem</b>: take off ${L('-āre, -ēre, -ere, -īre')}.</li>
    <li>Add the <b class="pt-v">vowel</b> and, if the tense has one, the <b class="pt-t">tense sign</b> (${L('bi')} for future 1st/2nd, ${L('bā')} for imperfect).</li>
    <li>Finish with the <b class="pt-e">personal ending</b>, active or passive.</li>
  </ol></div>
  <p class="ptlegend"><span class="pt-s">stem</span><span class="pt-v">vowel</span><span class="pt-t">tense sign</span><span class="pt-e">personal ending</span></p>
</section>

<section id="pt-conjugation"><h2>Which conjugation is it?</h2>
  <p class="sub">The conjugation decides the vowel pattern. Look at the infinitive first.</p>
  <div class="ptscroll"><table class="plain"><thead><tr><th>Infinitive ends in</th><th>First form ends in</th><th>Conjugation</th><th>Verbs from the test</th></tr></thead><tbody>
    <tr><td class="f">-āre</td><td class="f">-ō</td><td>1st</td><td class="la">portāre <i>to carry</i></td></tr>
    <tr><td class="f">-ēre</td><td class="f">-eō</td><td>2nd</td><td class="la">vidēre <i>to see</i>, iubēre <i>to order</i></td></tr>
    <tr><td class="f">-ere</td><td class="f">-ō</td><td>3rd</td><td class="la">legere <i>to choose</i>, fallere <i>to deceive</i></td></tr>
    <tr><td class="f">-ere</td><td class="f">-iō</td><td>3rd -iō</td><td class="la">iacere <i>to throw</i></td></tr>
    <tr><td class="f">-īre</td><td class="f">-iō</td><td>4th</td><td class="la">audīre <i>to hear</i>, impedīre <i>to hinder</i></td></tr>
  </tbody></table></div>
  ${note('The macron is the clue.',`<p>${L('vidēre')} (long ē) is 2nd; ${L('legere')} (short e) is 3rd. To tell 3rd from 3rd -iō, check the first form: ${L('legō')} vs. ${L('iaciō')}.</p>`)}
</section>

<section id="pt-endings"><h2>Personal endings</h2>
  <p class="sub">These will be on the board, but you need to know which one goes where.</p>
  <div class="ptscroll"><table class="plain narrow3"><thead><tr><th>Person</th><th>Active</th><th>Passive</th></tr></thead><tbody>
    <tr><th scope="row">I</th><td class="f pt-e">-ō / -m</td><td class="f pt-e">-r <span class="or">(-or after o)</span></td></tr>
    <tr><th scope="row">you</th><td class="f pt-e">-s</td><td class="f pt-e">-ris <span class="or">or</span> -re</td></tr>
    <tr><th scope="row">he / she / it</th><td class="f pt-e">-t</td><td class="f pt-e">-tur</td></tr>
    <tr><th scope="row">we</th><td class="f pt-e">-mus</td><td class="f pt-e">-mur</td></tr>
    <tr><th scope="row">you all</th><td class="f pt-e">-tis</td><td class="f pt-e">-minī</td></tr>
    <tr><th scope="row">they</th><td class="f pt-e">-nt</td><td class="f pt-e">-ntur</td></tr>
  </tbody></table></div>
  ${note('“I” form: -ō or -m?',`<p>${L('-ō')} in the present (${L('portō')}) and the 1st/2nd future (${L('portābō')}). ${L('-m')} in the imperfect (${L('portābam')}) and the 3rd/4th future (${L('legam')}). Passive follows the same split: ${L('portor, portābor, portābar, legar')}.</p>`)}
</section>

<section id="pt-present"><h2>Present tense</h2>
  <p class="sub">Active: “I carry / I am carrying.” Passive: “I am carried / I am being carried.”</p>
  <div class="pttwo">
    <div class="ptpanel"><p><b>1st</b> has <b class="pt-v">a</b> in every form except the first. <b>2nd</b> has <b class="pt-v">ē</b> everywhere (the macron drops before ${L('-t, -nt')} and in ${L('videō')}).</p></div>
    <div class="ptpanel"><p><b>3rd</b>: <b class="pt-v">ō</b>, four <b class="pt-v">i</b>’s, a <b class="pt-v">u</b>. <b>3rd -iō</b> and <b>4th</b>: <b class="pt-v">iō</b>, four <b class="pt-v">i</b>’s, an <b class="pt-v">iu</b>.</p></div>
  </div>
  ${voiceTables('presA','presP')}
  ${note('Exception: singular “you” passive in the 3rd and 3rd -iō',`<p>The vowel is <b class="pt-v">e</b>, not i: ${L('legeris / legere')}, ${L('iaceris / iacere')} (also ${L('mitteris, caperis')}). The 4th keeps its ī: ${L('audīris / audīre')}.</p>`)}
</section>

<section id="pt-infinitive"><h2>Passive infinitive</h2>
  <p class="sub">“to ___” becomes “to be ___ed.”</p>
  <div class="pttwo">
    <div class="ptpanel"><h3>1st, 2nd, 4th: final -e becomes -ī</h3>
      <p class="ptrecipe"><span class="pt-s">portār</span><span class="pt-e">e</span> <span class="plus">to</span> <span class="pt-s">portār</span><span class="pt-e">ī</span></p>
      <p class="ptrecipe"><span class="pt-s">vidēr</span><span class="pt-e">e</span> <span class="plus">to</span> <span class="pt-s">vidēr</span><span class="pt-e">ī</span></p>
      <p class="ptrecipe"><span class="pt-s">audīr</span><span class="pt-e">e</span> <span class="plus">to</span> <span class="pt-s">audīr</span><span class="pt-e">ī</span></p></div>
    <div class="ptpanel"><h3>3rd and 3rd -iō: drop -ere, add -ī</h3>
      <p class="ptrecipe"><span class="pt-s">leg</span><span class="pt-e">ere</span> <span class="plus">to</span> <span class="pt-s">leg</span><span class="pt-e">ī</span></p>
      <p class="ptrecipe"><span class="pt-s">iac</span><span class="pt-e">ere</span> <span class="plus">to</span> <span class="pt-s">iac</span><span class="pt-e">ī</span></p>
      <p class="ptrecipe"><span class="pt-s">capere</span> <span class="plus">to</span> <span class="pt-s">cap</span><span class="pt-e">ī</span></p></div>
  </div>
</section>

<section id="pt-future"><h2>Future tense</h2>
  <p class="sub">Active: “I will carry.” Passive: “I will be carried.” The two families build it differently.</p>
  <h3>1st &amp; 2nd conjugation: bō, bi, bu</h3>
  <p>Take ${L('-re')} off the infinitive and add <b class="pt-t">b</b> + <b class="pt-v">ō / i / u</b> + ending. In the passive, the singular “you” turns ${L('bi')} into <b class="pt-t">be</b>: ${L('vidēberis / vidēbere')}.</p>
  ${voiceTables('fut12A','fut12P')}
  <h3>3rd, 3rd -iō &amp; 4th conjugation: a, then e</h3>
  <p>The “I” form uses <b class="pt-v">a</b> (with ${L('-m')} active, ${L('-r')} passive). Every other form uses <b class="pt-v">e</b>. The 3rd -iō and 4th keep their <b class="pt-v">i</b> in front: ${L('iaciam, audiēs')}.</p>
  ${voiceTables('fut34A','fut34P')}
  ${note('A 3rd conjugation future looks like a 2nd conjugation present.',`<p>${L('legēs')} means “you <em>will</em> choose,” but ${L('vidēs')} means “you see.” Always check the conjugation before you translate an ē.</p>`)}
</section>

<section id="pt-imperfect"><h2>Imperfect tense</h2>
  <p class="sub">Active: “I was carrying / I used to carry.” Passive: “I was being carried.”</p>
  <div class="ptpanel">
    <p class="ptrecipe"><span class="pt-s">stem</span><span class="plus">+</span><span class="pt-v">vowel</span><span class="plus">+</span><span class="pt-t">bā</span><span class="plus">+</span><span class="pt-e">ending</span></p>
    <div class="ptscroll"><table class="plain narrow5"><thead><tr><th>1st</th><th>2nd</th><th>3rd</th><th>3rd -iō</th><th>4th</th></tr></thead>
      <tbody><tr><td class="f pt-v">ā</td><td class="f pt-v">ē</td><td class="f pt-v">ē</td><td class="f pt-v">iē</td><td class="f pt-v">iē</td></tr></tbody></table></div>
    <p>Examples with ${L('capere')}: <span class="la"><span class="pt-s">cap</span><span class="pt-v">iē</span><span class="pt-t">bā</span><span class="pt-e">tis</span></span> “you all were capturing,” <span class="la"><span class="pt-s">cap</span><span class="pt-v">iē</span><span class="pt-t">bā</span><span class="pt-e">minī</span></span> “you all were being captured,” <span class="la"><span class="pt-s">cap</span><span class="pt-v">iē</span><span class="pt-t">bā</span><span class="pt-e">tur</span></span> “he / she / it was being captured.”</p>
  </div>
  ${voiceTables('impA','impP')}
  ${note('The ā in bā goes short',`<p>before ${L('-m, -t, -nt, -r, -ntur')}: ${L('portābam, portābat, portābant, portābar, portābantur')}.</p>`)}
</section>

<section id="pt-english"><h2>Reading the English</h2>
  <p class="sub">The English wording tells you the tense and voice before you write a single letter.</p>
  <div class="ptscroll"><table class="plain"><thead><tr><th>English looks like</th><th>Tense &amp; voice</th><th>Example</th></tr></thead><tbody>
    <tr><td>he chooses, he is choosing</td><td>present active</td><td class="f">legit</td></tr>
    <tr><td>I am thrown, they are being chosen</td><td>present passive</td><td class="f">iacior, leguntur</td></tr>
    <tr><td>will ___</td><td>future active</td><td class="f">audiētis</td></tr>
    <tr><td>will be ___ed</td><td>future passive</td><td class="f">portābuntur</td></tr>
    <tr><td>was / were ___ing</td><td>imperfect active</td><td class="f">portābāmus</td></tr>
    <tr><td>was / were being ___ed</td><td>imperfect passive</td><td class="f">impediēbātur</td></tr>
    <tr><td>to ___</td><td>present active infinitive</td><td class="f">audīre</td></tr>
    <tr><td>to be ___ed</td><td>present passive infinitive</td><td class="f">audīrī</td></tr>
  </tbody></table></div>
  <p>Then match the subject to the ending: <b>you</b> (singular) is ${L('-s / -ris')}; <b>you guys</b> is ${L('-tis / -minī')}.</p>
</section>

<section id="pt-traps"><h2>Easy points to lose</h2>
  <ul class="pttraps">
    <li><b>Singular “you” passive has two correct forms.</b> Write ${L('-ris')} or ${L('-re')}: ${L('iubēberis / iubēbere')}, ${L('legēbāris / legēbāre')}, ${L('audīris / audīre')}.</li>
    <li><b>The 3rd conjugation passive infinitive drops the whole -ere.</b> ${L('legī')}, not ${L('legerī')}.</li>
    <li><b>${L('legere')} can mean two things.</b> “To choose” (infinitive) or “you are being chosen” (passive, -re form). Same spelling.</li>
    <li><b>The 3rd -iō and 4th never lose their i in the future and imperfect.</b> ${L('iaciēmus, audiēbam, impediēbātur')}.</li>
    <li><b>“They” forms differ by tense.</b> Present: ${L('legunt')} but ${L('iaciunt, audiunt')}. Future: ${L('portābunt')} but ${L('legent, audient')}.</li>
    <li><b>Future 1st/2nd “you” passive uses be, not bi.</b> ${L('portāberis')}, not ${L('portābiris')}.</li>
    <li><b>Present “I” passive uses -or.</b> ${L('portor, videor, legor, iacior, audior')}.</li>
  </ul>
</section>`;

  return{
    groups:[{
      id:'pfi',title:'Present, future & imperfect verbs',blurb:'Latin I Honors verb test',
      pages:[
        {id:'pfi-test',kind:'test',test:'pfi',title:'Practice Test',blurb:'20 phrases to write in Latin: every tense and voice, plus passive infinitives'},
        {id:'pfi-guide',kind:'guide',title:'Study Guide',blurb:'Stem, vowel, tense sign and ending for every form, with the traps to avoid'}
      ]}],
    guide:{'pfi-guide':guide},
    tests,
    /* exposed so the checker can be tested without a browser */
    _engine:{forms,make,grade,VERBS}
  };
})();
