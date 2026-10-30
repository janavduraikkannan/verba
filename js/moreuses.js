/* ---------- Latin: the rest of the course's case uses, for the identify-the-use tab ----------
   Loaded after js/usemode.js. Each new use has a gen() that builds a sentence with exactly one word
   (or phrase) tagged with the use's id, using the topic generators the engine already has. */
const LANG_NAME='Latin';
const useAsk=ty=>USES[ty.c].word?`What use of the ${USES[ty.c].word} is`:'What is the use of';
const useOf=ty=>USES[ty.c].word?`use of the ${USES[ty.c].word}`:'use';
/* subjects are in nearly every sentence, and the second word of an ablative absolute or a gerundive isn't a case use on its own */
const XC_SKIP=(t,qq)=>{const c=t.cids[0],prev=qq.tokens[qq.tokens.indexOf(t)-1];
  return c==='nom'||c==='pperi'&&!/dative/.test(t.concept||'')||c==='abs'&&!!prev&&prev.cids&&prev.cids[0]==='abs'};
const DDAT_E={auxiliō:'a help',praesidiō:'a protection',cūrae:'a concern',impedīmentō:'a hindrance',salūtī:'a source of safety'};
const MORE_ID_TOPIC={nom:'nom',voc:'voc',appos:'appos',datposs:'datposs',ablcomp:'ablcomp',abs:'abs',ddat:'datpurp',pperi:'pperi'};

addUses('role',{name:'Nominative, vocative and apposition',word:'',order:-1},[
  {id:'nom',level:'I',full:'the subject (nominative)',n:'Subject',syn:['subject','nominative subject','subj','doer','who does it'],what:'who or what does the action of the verb',la:'puella cantat',en:'the girl sings',gen:()=>R([gTrans,gPred])()},
  {id:'pred',level:'I',full:'a predicate nominative',n:'Predicate nominative',syn:['predicate nominative','predicate','predicate noun','pred nom','complement'],what:'a noun after sum that renames the subject',la:'Mārcus est agricola',en:'Marcus is a farmer',gen:gPred},
  {id:'voc',level:'I',full:'a vocative of direct address',n:'Direct address (vocative)',syn:['direct address','vocative','address','calling','speaking to'],what:'the person being spoken to',la:'Mārce, venī!',en:'Marcus, come!',gen:()=>B(R(['stmt','ne']),['voc'])},
  {id:'appos',level:'I',full:'an appositive',n:'Apposition',syn:['apposition','appositive','appositional','renames','renaming'],what:'a noun beside another noun that renames it, in the same case',la:'Antōniam, discipulam, laudat',en:'praises Antonia, the student',gen:()=>B('stmt',['appos'])}]);
addUses('dat',{},[
  {id:'datposs',level:'II',full:'a dative of possession',n:'Possession',syn:['possession','possessive','dative of possession','owner','ownership','has'],what:'the owner, with a form of sum',la:'puellae est rosa',en:'the girl has a rose',gen:gDatPoss},
  {id:'pperi',level:'III',full:'a dative of agent',n:'Agent (with a gerundive)',syn:['agent','dative of agent','agency','by whom','passive periphrastic','periphrastic'],what:'the person who must do something, with a passive periphrastic',la:'puellae laudanda est',en:'she must be praised by the girl',
    gen:()=>{const x=gPeri();x.tokens.forEach(t=>{if(t.cids[0]==='pperi'&&!/dative/.test(t.concept||''))t.cids=['gerundive',...t.cids.slice(1)]});return x}},
  {id:'datpurp',level:'AP',full:'a dative of purpose (double dative)',n:'Purpose (double dative)',syn:['purpose','double dative','dative of purpose','serves as','end'],what:'what something serves as, often paired with a dative of reference',la:'puerī magistrō cūrae sunt',en:'the boys are a concern to the teacher',
    gen:()=>{const x=gDdat(),d=x.tokens.filter(t=>t.cids[0]==='ddat');d[0].cids=['datref'];d[1].cids=['datpurp'];d[1].enHint=[DDAT_E[d[1].la]];return x}}]);
addUses('abl',{},[
  {id:'ablcomp',level:'III',full:'an ablative of comparison',n:'Comparison',syn:['comparison','compare','comparative','than','ablative of comparison'],what:'the thing compared against, with no quam',la:'pater nymphīs fortior est',en:'the father is braver than the nymphs',gen:()=>gCompare('ablcomp')},
  {id:'abs',level:'III',full:'an ablative absolute',n:'Absolute',syn:['absolute','ablative absolute','abl abs','participial phrase'],what:'a noun and participle set apart from the sentence, telling when, why or how',la:'amīcīs captīs, hostēs vēnērunt',en:'with the friends captured, the enemies came',enToComma:true,
    gen:()=>{const x=gAbs(),d=x.tokens.filter(t=>t.cids[0]==='abs');d[0].span=d.length-1;d.slice(1).forEach(t=>t.cids=['absPart',...t.cids.slice(1)]);return x}}]);
