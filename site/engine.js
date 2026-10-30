/* ===================== ENGINE ===================== */
const R=a=>a[Math.floor(Math.random()*a.length)], chance=p=>Math.random()<p;
const T6=s=>s.split(' ');
const CASES=['nominative','genitive','dative','accusative','ablative','vocative'];
const NUM=['singular','plural'], GN={m:'masculine',f:'feminine',n:'neuter'};
const PERS=['1st person singular','2nd person singular','3rd person singular','1st person plural','2nd person plural','3rd person plural'];
const TN={pres:'present',impf:'imperfect',fut:'future',perf:'perfect',plup:'pluperfect',futp:'future perfect',spres:'present subjunctive',simpf:'imperfect subjunctive',sperf:'perfect subjunctive',splup:'pluperfect subjunctive'};
const PRON=['I','you','he','we','you (pl.)','they'];

const E={};Object.entries({1:'a ae ae am ā|ae ārum īs ās īs',2:'us ī ō um ō|ī ōrum īs ōs īs','2n':'um ī ō um ō|a ōrum īs a īs','2x':'us ī ō us ō|a ōrum īs a īs',3:'* is ī em e|ēs um ibus ēs ibus','3i':'* is ī em e|ēs ium ibus ēs ibus','3n':'* is ī * e|a um ibus a ibus','3ni':'* is ī * ī|ia ium ibus ia ibus',4:'us ūs uī um ū|ūs uum ibus ūs ibus','4n':'ū ūs ū ū ū|ua uum ibus ua ibus',5:'ēs eī eī em ē|ēs ērum ēbus ēs ēbus'}).forEach(([k,v])=>E[k]=v.split('|').map(x=>x.split(' ')));

/* nom,gen,stem,decl,gender,eng,eng pl,tag,flags  — tags: p person, g group, a animal, t thing, w written, l natural place, c town/building, v ship, o other, x abstract */
const NOUNS=`puella,-ae,puell,1,f,girl,girls,p
nauta,-ae,naut,1,m,sailor,sailors,p,T
agricola,-ae,agricol,1,m,farmer,farmers,p,T
poēta,-ae,poēt,1,m,poet,poets,p,T
fēmina,-ae,fēmin,1,f,woman,women,p
rēgīna,-ae,rēgīn,1,f,queen,queens,p
via,-ae,vi,1,f,road,roads,l
silva,-ae,silv,1,f,forest,forests,l
īnsula,-ae,īnsul,1,f,island,islands,l
vīlla,-ae,vīll,1,f,farmhouse,farmhouses,c
aqua,-ae,aqu,1,f,water,waters,t,S
epistula,-ae,epistul,1,f,letter,letters,w
pecūnia,-ae,pecūni,1,f,money,money,t,S
amīca,-ae,amīc,1,f,friend,friends,p
fābula,-ae,fābul,1,f,story,stories,s
casa,-ae,cas,1,f,house,houses,c
taberna,-ae,tabern,1,f,inn,inns,c
āra,-ae,ār,1,f,altar,altars,c
terra,-ae,terr,1,f,land,lands,l
sagitta,-ae,sagitt,1,f,arrow,arrows,t
cūra,-ae,cūr,1,f,care,cares,x,S
īra,-ae,īr,1,f,anger,anger,x,S
culpa,-ae,culp,1,f,blame,blame,x,S
convīva,-ae,convīv,1,m,dinner guest,dinner guests,p,T
incola,-ae,incol,1,m,inhabitant,inhabitants,p,T
pīrāta,-ae,pīrāt,1,m,pirate,pirates,p,T
advena,-ae,adven,1,m,stranger,strangers,p,T
hortus,-ī,hort,2,m,garden,gardens,l
vīcīnus,-ī,vīcīn,2,m,neighbor,neighbors,p
nūntius,-ī,nūnti,2,m,messenger,messengers,p
avus,-ī,av,2,m,grandfather,grandfathers,p
deus,-ī,de,2,m,god,gods,p
iocus,-ī,ioc,2,m,joke,jokes,t
carrus,-ī,carr,2,m,wagon,wagons,t
cibus,-ī,cib,2,m,food,food,t,S
gaudium,-ī,gaudi,2n,n,joy,joy,x,S
perīculum,-ī,perīcul,2n,n,danger,dangers,x,S
rosa,-ae,ros,1,f,rose,roses,t
corōna,-ae,corōn,1,f,crown,crowns,t
pōculum,-ī,pōcul,2n,n,cup,cups,t
victōria,-ae,victōri,1,f,victory,victories,x,S
aurum,-ī,aur,2n,n,gold,gold,m,S
argentum,-ī,argent,2n,n,silver,silver,m,S
oppidānus,-ī,oppidān,2,m,townsperson,townspeople,p
Rōmānus,-ī,Rōmān,2,m,Roman,Romans,p
discipulus,-ī,discipul,2,m,student,students,p
discipula,-ae,discipul,1,f,student,students,p
inimīcus,-ī,inimīc,2,m,enemy,enemies,p
nympha,-ae,nymph,1,f,nymph,nymphs,p
barbarus,-ī,barbar,2,m,barbarian,barbarians,p
mōnstrum,-ī,mōnstr,2n,n,monster,monsters,a
hasta,-ae,hast,1,f,spear,spears,t
plaustrum,-ī,plaustr,2n,n,cart,carts,t
mendācium,-ī,mendāci,2n,n,lie,lies,s
forum,-ī,for,2n,n,forum,forums,c
Flāvia,-ae,Flāvi,1,f,Flavia,Flavia,n,S
Cornēlia,-ae,Cornēli,1,f,Cornelia,Cornelia,n,S
Līvia,-ae,Līvi,1,f,Livia,Livia,n,S
Aurēlia,-ae,Aurēli,1,f,Aurelia,Aurelia,n,S
Calpurnia,-ae,Calpurni,1,f,Calpurnia,Calpurnia,n,S
Tullia,-ae,Tulli,1,f,Tullia,Tullia,n,S
Antōnia,-ae,Antōni,1,f,Antonia,Antonia,n,S
Horātia,-ae,Horāti,1,f,Horatia,Horatia,n,S
Catullus,-ī,Catull,2,m,Catullus,Catullus,n,S
Sextus,-ī,Sext,2,m,Sextus,Sextus,n,S
Vergilius,-ī,Vergili,2,m,Vergil,Vergil,n,S
Tiberius,-ī,Tiberi,2,m,Tiberius,Tiberius,n,S
Polyphēmus,-ī,Polyphēm,2,m,Polyphemus,Polyphemus,n,S
Marcus,-ī,Marc,2,m,Marcus,Marcus,n,S
Brūtus,-ī,Brūt,2,m,Brutus,Brutus,n,S
Iūlia,-ae,Iūli,1,f,Julia,Julia,n,S
Aemilia,-ae,Aemili,1,f,Aemilia,Aemilia,n,S
Rōma,-ae,Rōm,1,f,Rome,Rome,z,S
Crēta,-ae,Crēt,1,f,Crete,Crete,z,S
Athēnae,-ārum,Athēn,1,f,Athens,Athens,z,SP
Thēbae,-ārum,Thēb,1,f,Thebes,Thebes,z,SP
Rhodus,-ī,Rhod,2,f,Rhodes,Rhodes,z,S
Corinthus,-ī,Corinth,2,f,Corinth,Corinth,z,S
aurīga,-ae,aurīg,1,m,charioteer,charioteers,p,T
caverna,-ae,cavern,1,f,cave,caves,l
dea,-ae,de,1,f,goddess,goddesses,p,B
fīlia,-ae,fīli,1,f,daughter,daughters,p,B
pelagus,-ī,pelag,2x,n,sea,seas,l,ST
vīrus,-ī,vīr,2x,n,poison,poisons,t,ST
vulgus,-ī,vulg,2x,n,crowd,crowds,g,ST
servus,-ī,serv,2,m,slave,slaves,p
amīcus,-ī,amīc,2,m,friend,friends,p
dominus,-ī,domin,2,m,master,masters,p
equus,-ī,equ,2,m,horse,horses,a
fīlius,-ī,fīli,2,m,son,sons,p
gladius,-ī,gladi,2,m,sword,swords,t
puer,-ī,puer,2r,m,boy,boys,p
vir,-ī,vir,2r,m,man,men,p
ager,agrī,agr,2r,m,field,fields,l
magister,-trī,magistr,2r,m,teacher,teachers,p
liber,librī,libr,2r,m,book,books,w
dōnum,-ī,dōn,2n,n,gift,gifts,t
oppidum,-ī,oppid,2n,n,town,towns,c
templum,-ī,templ,2n,n,temple,temples,c
tēlum,-ī,tēl,2n,n,spear,spears,t
rēx,rēgis,rēg,3,m,king,kings,p
mīles,mīlitis,mīlit,3,m,soldier,soldiers,p
dux,ducis,duc,3,m,leader,leaders,p
pater,patris,patr,3,m,father,fathers,p
frāter,frātris,frātr,3,m,brother,brothers,p
māter,mātris,mātr,3,f,mother,mothers,p
soror,sorōris,sorōr,3,f,sister,sisters,p
hostis,hostis,host,3i,m,enemy,enemies,p
cīvis,cīvis,cīv,3i,m,citizen,citizens,p
canis,canis,can,3,m,dog,dogs,a
urbs,urbis,urb,3i,f,city,cities,c
nāvis,nāvis,nāv,3i,f,ship,ships,v
mōns,montis,mont,3i,m,mountain,mountains,l
arbor,arboris,arbor,3,f,tree,trees,o,T
corpus,corporis,corpor,3n,n,body,bodies,o,T
tempus,temporis,tempor,3n,n,time,times,x,T
flūmen,flūminis,flūmin,3n,n,river,rivers,l
mare,maris,mar,3ni,n,sea,seas,l
manus,-ūs,man,4,f,hand,hands,o,T
exercitus,-ūs,exercit,4,m,army,armies,g
portus,-ūs,port,4,m,harbor,harbors,c
cornū,-ūs,corn,4n,n,horn,horns,t
diēs,-ēī,di,5,m,day,days,x,T
rēs,reī,r,5,f,thing,things,o
spēs,speī,sp,5,f,hope,hopes,x,S`.split('\n').map(l=>{const[nom,gen,stem,d,g,e,ep,tag,fl='']=l.split(',');return{nom,gen,stem,d,g,e,ep,tag,sgOnly:fl.includes('S'),tricky:fl.includes('T'),abus:fl.includes('B'),pl:fl.includes('P')}});
const ALLN=[...NOUNS];let LIMIT=false;
const nn=x=>ALLN.find(n=>n.nom===x);
const PEOPLE=NOUNS.filter(n=>n.tag==='p');
function setLimit(on){LIMIT=on;NOUNS.length=0;NOUNS.push(...ALLN.filter(n=>!on||'12'.includes(n.d[0])));PEOPLE.length=0;PEOPLE.push(...NOUNS.filter(n=>n.tag==='p'));}
const have=names=>names.map(nn).filter(n=>NOUNS.includes(n));
function nf(n,c,k){
  if(c===5){ if(k===0&&n.d==='2') return n.stem.endsWith('i')?n.stem.slice(0,-1)+'ī':n.stem+'e'; c=0; }
  if(n.abus&&k===1&&(c===2||c===4))return n.stem+'ābus';
  let d=n.d; if(d==='2r'){ if(c===0&&k===0) return n.nom; d='2'; }
  let e=E[d][k][c]; if(e==='*') return n.nom;
  if(d==='5'&&e==='eī'&&n.stem.endsWith('i')) e='ēī';
  return n.stem+e;
}
const nounV=n=>`${n.nom}, ${n.gen}, ${n.g}. : ${n.e}`;
const allN=n=>[0,1].flatMap(k=>[0,1,2,3,4,5].map(c=>nf(n,c,k)));
function N(n,c,k,cid){return{la:nf(n,c,k),lemma:n.nom,cids:[cid,'d'+(n.d[0]>'3'?'45':n.d[0])],concept:CASES[c]+' '+NUM[k],forms:allN(n),vocab:nounV(n)}}
const W=(la,vocab)=>({la,vocab:vocab||WV[la]});
const WV={ut:'ut (+subjunctive) : so that, that',nē:'nē (+subjunctive) : so that … not; that (after fearing)',cum:'cum (+subjunctive) : when',sī:'sī : if',quam:'quam : than',tam:'tam : so',causā:'causā (+gen, placed after) : for the sake of',cūr:'cūr : why',quōmodo:'quōmodo : how',num:'num : whether',partem:'pars, partis, f. : part'};

/* inf|perfect|supine|conj|eng|past|pp|ing|object tags|flags (D takes dative, M motion, S static, X deponent, Z helper) */
const VERBS=`laudāre|laudāvī|laudātum|1|praise|praised|praised|praising|pg
amāre|amāvī|amātum|1|love|loved|loved|loving|pa
portāre|portāvī|portātum|1|carry|carried|carried|carrying|tw
vocāre|vocāvī|vocātum|1|call|called|called|calling|pa
spectāre|spectāvī|spectātum|1|watch|watched|watched|watching|palcvog
servāre|servāvī|servātum|1|save|saved|saved|saving|pacv
superāre|superāvī|superātum|1|defeat|defeated|defeated|defeating|pg
exspectāre|exspectāvī|exspectātum|1|await|awaited|awaited|awaiting|patwlcvoxg
dōnāre|dōnāvī|dōnātum|1|give|gave|given|giving|tw|D
mōnstrāre|mōnstrāvī|mōnstrātum|1|show|showed|shown|showing|twa|D
vidēre|vīdī|vīsum|2|see|saw|seen|seeing|patwlcvog
monēre|monuī|monitum|2|warn|warned|warned|warning|p
tenēre|tenuī|tentum|2|hold|held|held|holding|tw
terrēre|terruī|territum|2|frighten|frightened|frightened|frightening|pag
docēre|docuī|doctum|2|teach|taught|taught|teaching|p
dēlēre|dēlēvī|dēlētum|2|destroy|destroyed|destroyed|destroying|cv
dūcere|dūxī|ductum|3|lead|led|led|leading|pag
mittere|mīsī|missum|3|send|sent|sent|sending|ptwg
legere|lēgī|lēctum|3|read|read|read|reading|w
scrībere|scrīpsī|scrīptum|3|write|wrote|written|writing|w
vincere|vīcī|victum|3|conquer|conquered|conquered|conquering|pg
dēfendere|dēfendī|dēfēnsum|3|defend|defended|defended|defending|pcv
relinquere|relīquī|relictum|3|abandon|abandoned|abandoned|abandoning|patwlcvoxg
regere|rēxī|rēctum|3|rule|ruled|ruled|ruling|c
trādere|trādidī|trāditum|3|hand over|handed over|handed over|handing over|tw|D
capere|cēpī|captum|3i|capture|captured|captured|capturing|pacv
iacere|iēcī|iactum|3i|throw|threw|thrown|throwing|t
accipere|accēpī|acceptum|3i|receive|received|received|receiving|tw
cōnspicere|cōnspexī|cōnspectum|3i|notice|noticed|noticed|noticing|patwlcvog
interficere|interfēcī|interfectum|3i|kill|killed|killed|killing|pa
audīre|audīvī|audītum|4|hear|heard|heard|hearing|pa
pūnīre|pūnīvī|pūnītum|4|punish|punished|punished|punishing|p
custōdīre|custōdīvī|custōdītum|4|guard|guarded|guarded|guarding|pacvt
invenīre|invēnī|inventum|4|find|found|found|finding|patwlcvoxg
impedīre|impedīvī|impedītum|4|hinder|hindered|hindered|hindering|pg
mūnīre|mūnīvī|mūnītum|4|fortify|fortified|fortified|fortifying|c
ambulāre|ambulāvī|ambulātum|1|walk|walked|walked|walking||M
nūntiāre|nūntiāvī|nūntiātum|1|announce|announced|announced|announcing||Z
comperīre|comperī|compertum|4|find out|found out|found out|finding out||Z
reprehendere|reprehendī|reprehēnsum|3|scold|scolded|scolded|scolding|p
reddere|reddidī|redditum|3|give back|gave back|given back|giving back|tw|D
fallere|fefellī|falsum|3|deceive|deceived|deceived|deceiving|p
iuvāre|iūvī|iūtum|1|help|helped|helped|helping|p
revocāre|revocāvī|revocātum|1|call back|called back|called back|calling back|pa
petere|petīvī|petītum|3|seek|sought|sought|seeking|pt
attingere|attigī|attāctum|3|touch|touched|touched|touching|tlc
dare|dedī|datum|1d|give|gave|given|giving|tw|D
narrāre|narrāvī|narrātum|1|tell|told|told|telling|s|D
parāre|parāvī|parātum|1|prepare|prepared|prepared|preparing|t
līberāre|līberāvī|līberātum|1|free|freed|freed|freeing|p|L
prohibēre|prohibuī|prohibitum|2|keep|kept|kept|keeping|p|K
dēlectāre|dēlectāvī|dēlectātum|1|delight|delighted|delighted|delighting|p
pugnāre|pugnāvī|pugnātum|1|fight|fought|fought|fighting||F
nāvigāre|nāvigāvī|nāvigātum|1|sail|sailed|sailed|sailing||M
discēdere|discessī|discessum|3|depart|departed|departed|departing||M
labōrāre|labōrāvī|labōrātum|1|work|worked|worked|working||S
cupere|cupīvī|cupītum|3i|want|wanted|wanted|wanting||Z
solēre||solitum|2|be accustomed|was accustomed|been accustomed|being accustomed||Z
crēdere|crēdidī|crēditum|3|believe|believed|believed|believing||Z
spērāre|spērāvī|spērātum|1|hope|hoped|hoped|hoping||Z
festīnāre|festīnāvī|festīnātum|1|hurry|hurried|hurried|hurrying||M
currere|cucurrī|cursum|3|run|ran|run|running||M
venīre|vēnī|ventum|4|come|came|come|coming||M
habitāre|habitāvī|habitātum|1|live|lived|lived|living||S
manēre|mānsī|mānsum|2|stay|stayed|stayed|staying||S
sedēre|sēdī|sessum|2|sit|sat|sat|sitting||S
dormīre|dormīvī|dormītum|4|sleep|slept|slept|sleeping||S
hortāre||hortātum|1|encourage|encouraged|encouraged|encouraging|pg|X
verēre||veritum|2|fear|feared|feared|fearing|patlcvog|X
sequere||secūtum|3|follow|followed|followed|following|pag|X
mīrāre||mīrātum|1|admire|admired|admired|admiring|patlcvog|X
dīcere|dīxī|dictum|3|say|said|said|saying||Z
putāre|putāvī|putātum|1|think|thought|thought|thinking||Z
scīre|scīvī|scītum|4|know|knew|known|knowing||Z
rogāre|rogāvī|rogātum|1|ask|asked|asked|asking||Z
imperāre|imperāvī|imperātum|1|order|ordered|ordered|ordering||Z
ōrāre|ōrāvī|ōrātum|1|beg|begged|begged|begging||Z
timēre|timuī|timitum|2|fear|feared|feared|fearing||Z
dēbēre|dēbuī|dēbitum|2|owe|owed|owed|owing||Z`.split('\n').map(l=>{const[inf,pf,sup,cj,e,past,pp,ing,obj='',fl='']=l.split('|');return{inf,ps:pf.slice(0,-1),ss:sup.slice(0,-2),cj,stem:inf.slice(0,-3),e,past,pp,ing,obj,fl}});
const vb=x=>VERBS.find(v=>v.inf===x);
const TV=VERBS.filter(v=>v.obj&&!v.fl.includes('X')), IV=VERBS.filter(v=>v.fl==='M'||v.fl==='S'), DEPS=VERBS.filter(v=>v.fl==='X');
const MEANSV=['superāre','interficere','vincere','dēfendere','terrēre'].map(vb), WEAPONS=[nn('gladius'),nn('tēlum')];
const mkIrr=(inf,first,pres,ib,fut,e,past,pp,ing,obj,fl)=>({inf,first,irr:{pres:T6(pres).map(x=>x.replace('_',' ')),ib,fut:T6(fut)},e,past,pp,ing,obj,fl,cj:'irr',stem:'',ps:'',ss:''});
const EO=mkIrr('īre','eō','eō īs it īmus ītis eunt','ī','ībō ībis ībit ībimus ībitis ībunt','go','went','gone','going','','M');
const FERO=mkIrr('ferre','ferō','ferō fers fert ferimus fertis ferunt','ferē','feram ferēs feret ferēmus ferētis ferent','bring','brought','brought','bringing','tw','');
const VOLO=mkIrr('velle','volō','volō vīs vult volumus vultis volunt','volē','volam volēs volet volēmus volētis volent','want','wanted','wanted','wanting','','');
const NOLO=mkIrr('nōlle','nōlō','nōlō nōn_vīs nōn_vult nōlumus nōn_vultis nōlunt','nōlē','nōlam nōlēs nōlet nōlēmus nōlētis nōlent','refuse','refused','refused','refusing','','');
const objFor=v=>NOUNS.filter(n=>v.obj.includes(n.tag));
const isDep=v=>v.fl.includes('X');

const PA={'1d':'ō ās at amus atis ant',1:'ō ās at āmus ātis ant',2:'eō ēs et ēmus ētis ent',3:'ō is it imus itis unt','3i':'iō is it imus itis iunt',4:'iō īs it īmus ītis iunt'};
const PP={'1d':'or aris atur amur aminī antur',1:'or āris ātur āmur āminī antur',2:'eor ēris ētur ēmur ēminī entur',3:'or eris itur imur iminī untur','3i':'ior eris itur imur iminī iuntur',4:'ior īris ītur īmur īminī iuntur'};
const TH={'1d':'a',1:'ā',2:'ē',3:'ē','3i':'iē',4:'iē'};
const SUM={pres:T6('sum es est sumus estis sunt'),impf:T6('eram erās erat erāmus erātis erant'),fut:T6('erō eris erit erimus eritis erunt'),spres:T6('sim sīs sit sīmus sītis sint'),simpf:T6('essem essēs esset essēmus essētis essent')};
function d12(st,c,k,g,nomM){ if(g==='m'){ if(nomM&&c===0&&k===0)return nomM; return st+E['2'][k][c]; } return st+E[g==='f'?'1':'2n'][k][c]; }
const ppp=(v,c,k,g)=>d12(v.ss,c,k,g);
function vf(v,t,vc,p,g='m'){
  if(v.irr){ if(t==='pres')return v.irr.pres[p]; if(t==='impf')return v.irr.ib+T6('bam bās bat bāmus bātis bant')[p]; return v.irr.fut[p]; }
  const cj=v.cj,s=v.stem,pas=vc==='pass';
  switch(t){
    case'pres':return s+T6((pas?PP:PA)[cj])[p];
    case'impf':return s+TH[cj]+T6(pas?'bar bāris bātur bāmur bāminī bantur':'bam bās bat bāmus bātis bant')[p];
    case'fut':if(cj==='1'||cj==='1d'||cj==='2')return s+TH[cj]+T6(pas?'bor beris bitur bimur biminī buntur':'bō bis bit bimus bitis bunt')[p];
      return s+(cj==='3'?'':'i')+T6(pas?'ar ēris ētur ēmur ēminī entur':'am ēs et ēmus ētis ent')[p];
    case'spres':if(cj[0]==='1')return s+T6(pas?'er ēris ētur ēmur ēminī entur':'em ēs et ēmus ētis ent')[p];
      return s+{2:'e',3:'','3i':'i',4:'i'}[cj]+T6(pas?'ar āris ātur āmur āminī antur':'am ās at āmus ātis ant')[p];
    case'simpf':return v.inf.slice(0,-1)+T6(pas?'er ēris ētur ēmur ēminī entur':'em ēs et ēmus ētis ent')[p];
  }
  if(!pas)return v.ps+T6({perf:'ī istī it imus istis ērunt',plup:'eram erās erat erāmus erātis erant',futp:'erō eris erit erimus eritis erint',sperf:'erim erīs erit erīmus erītis erint',splup:'issem issēs isset issēmus issētis issent'}[t])[p];
  return ppp(v,0,p>2?1:0,g)+' '+SUM[{perf:'pres',plup:'impf',futp:'fut',sperf:'spres',splup:'simpf'}[t]][p];
}
const passInf=v=>(v.cj==='3'||v.cj==='3i')?v.stem+'ī':v.inf.slice(0,-1)+'ī';
const dispInf=v=>isDep(v)?passInf(v):v.inf;
const verbV=v=>v.irr?`${v.inf}, ${v.first} : to ${v.e}`:isDep(v)?`${passInf(v)}, -${{1:'or',2:'eor',3:'or'}[v.cj]} : to ${v.e}`:v.cj==='1d'?`${v.inf}, dō : to ${v.e}`:`${v.inf}, -${{1:'ō',2:'eō',3:'ō','3i':'iō',4:'iō'}[v.cj]} : to ${v.e}`;
function vforms(v){ if(v.irr)return v.irr.pres; const six=[0,1,2,3,4,5],a=[];
  for(const t of['pres','fut'])for(const vc of isDep(v)?['pass']:['act','pass'])a.push(...six.map(p=>vf(v,t,vc,p)));
  if(v.ps)a.push(...six.map(p=>vf(v,'perf','act',p))); return a; }
function vcids(v,t,vc){
  if(v.irr)return['irr']; if(isDep(v))return['dep'];
  if(t[0]==='s'&&t!=='sum')return[{spres:'sjpres',simpf:'sjimpf',sperf:'sjperf',splup:'sjperf'}[t]];
  if(vc==='pass')return[{pres:'ppas',impf:'ipas',fut:'fpas'}[t]||'perfpas'];
  return[{pres:'pa'+(v.cj==='1d'?'1':v.cj),impf:'impf',fut:'fut',perf:'perf'}[t]||'plup'];
}
function V(v,t,vc,p,g,xc=[]){
  const dep=isDep(v),la=vf(v,t,dep?'pass':vc,p,g);
  const tok={la,lemma:dispInf(v),cids:[...xc,...vcids(v,t,vc)],concept:`${PERS[p]} ${TN[t]} ${dep?'(deponent)':vc==='pass'?'passive':'active'}`,forms:vforms(v),vocab:verbV(v)};
  if(t==='perf'&&vc==='act'&&p===5&&!dep)tok.alt=[v.ps+'ēre'];
  if(p===1&&(dep||vc==='pass')&&/ris$/.test(la))tok.alt=[la.slice(0,-3)+'re'];
  return tok;
}
function s3(b){const[w,...r]=b.split(' ');const x=/(s|sh|ch|x|o)$/.test(w)?w+'es':/[^aeiou]y$/.test(w)?w.slice(0,-1)+'ies':w+'s';return[x,...r].join(' ')}
const beP=p=>['am','are','is','are','are','are'][p], beQ=p=>['was','were','was','were','were','were'][p];
const be=(t,p)=>t==='pres'?beP(p):t==='impf'?beQ(p):'will be';
let ALT=[],GDAT=null;
/* Uses of the cases (types), from the class notes */
const USES={
 gen:{name:'Genitive',word:'genitive',list:[
  {id:'genposs',full:'a genitive of possession',n:'Possession',syn:['possession','possessive','possesion','owner','ownership','belonging','belongs'],what:'whose something is, or what it belongs to',la:'amīcus nautae',en:'the friend of the sailor, the sailor’s friend'},
  {id:'genpart',full:'a partitive genitive',n:'Partitive (part and whole)',syn:['partitive','part and whole','part of a whole','part whole','whole','part'],what:'the whole that a part is taken from (ex + ablative can do the same)',la:'multī nautārum',en:'many of the sailors (= multī ex nautīs)'},
  {id:'genso',full:'a subjective or objective genitive',n:'Subjective or objective',syn:['subjective','objective','subjective or objective','objective or subjective','subject','object'],what:'the one doing the action (subjective) or receiving it (objective); context decides',la:'cūra rēgīnae',en:'the queen’s care, or care for the queen'},
  {id:'genmat',full:'a genitive of material',n:'Material',syn:['material','made of','made from','substance','materials'],what:'what something is made of',la:'corōna aurī',en:'a crown of gold'}]},
 abl:{name:'Ablative',word:'ablative',list:[
  {id:'placeFrom',full:'an ablative of place from which',n:'Place from which',syn:['place from which','place from','from which','motion from','place from where','origin'],what:'motion away from a place: ā/ab or ē/ex, no preposition with towns',la:'ex silvā venit',en:'comes out of the forest'},
  {id:'sep',full:'an ablative of separation',n:'Separation',syn:['separation','separate','true ablative','true','removal'],what:'freeing or keeping someone away from something',la:'nautās culpā līberat',en:'frees the sailors from blame'},
  {id:'cause',full:'an ablative of cause',n:'Cause',syn:['cause','reason','because','causal'],what:'why something happens, with no preposition',la:'gaudiō currit',en:'runs from joy'},
  {id:'agent',full:'an ablative of personal agent',n:'Personal agent',syn:['personal agent','agent','agency','doer','personal'],what:'the person who does a passive action: ā/ab + ablative',la:'ā rēgīnā laudātur',en:'is praised by the queen'},
  {id:'means',full:'an ablative of means',n:'Means (instrument)',syn:['means','instrument','instrumental','tool','instrument of means'],what:'the thing used to do something, with no preposition',la:'gladiō pugnat',en:'fights with a sword'},
  {id:'accomp',full:'an ablative of accompaniment',n:'Accompaniment',syn:['accompaniment','accompany','associative','company','together with','contention'],what:'the person something is done with: cum + ablative',la:'cum amīcō ambulat',en:'walks with a friend'},
  {id:'manner',full:'an ablative of manner',n:'Manner',syn:['manner','how','way','mannner'],what:'how something is done: cum + an abstract noun',la:'cum cūrā labōrat',en:'works with care'},
  {id:'placeWhere',full:'an ablative of place where',n:'Place where',syn:['place where','place in which','where','locative','location','place at which'],what:'where something is: in + ablative, no preposition with plural towns',la:'in silvā habitat',en:'lives in the forest'}]},
 acc:{name:'Accusative',word:'accusative',list:[
  {id:'acc',full:'a direct object (accusative)',n:'Direct object',syn:['direct object','object','receives the action','being done to','direct'],what:'the person or thing that receives the action',la:'puellam laudat',en:'praises the girl'},
  {id:'placeTo',full:'an accusative of place to which',n:'Place to which',syn:['place to which','place to','to which','motion toward','motion towards','destination','place to where'],what:'motion toward a place: ad or in, no preposition with towns',la:'ad cavernam ambulat',en:'walks to the cave'}]},
 dat:{name:'Dative',word:'dative',list:[
  {id:'dat',full:'an indirect object (dative)',n:'Indirect object',syn:['indirect object','indirect','given to','to'],what:'the one something is given, shown or told to',la:'puellae rosam dat',en:'gives a rose to the girl'},
  {id:'datref',full:'a dative of reference',n:'Reference',syn:['reference','dative of reference','for','benefit','interest','for whom'],what:'the one something is done for',la:'puellae cibum parat',en:'prepares food for the girl'}]}
};
const TYPES={};Object.entries(USES).forEach(([c,u])=>u.list.forEach(x=>TYPES[x.id]=Object.assign(x,{c})));
const TY=cid=>cid==='gen'?'genposs':TYPES[cid]?cid:null;
const possE=(g,gk)=>{const b=gk?g.ep:g.e;return'the '+b+(gk&&/s$/.test(b)?"'":"'s")};
const GENSO_N={servāre:['cūra'],dēlectāre:['gaudium','cūra'],terrēre:['īra']};
const SUMMUS={aqua:'surface',mōns:'top',arbor:'top',templum:'top',casa:'top',vīlla:'top',āra:'top',mare:'surface'};
const MEDSUM_V={medi:'medius -a -um : middle (of), the middle of',summ:'summus -a -um : highest, topmost; the top or surface of'};
/* medius and summus are adjectives in Latin but "the middle of / the top of" in English */
function medsumDeco(n,c){
  const st=SUMMUS[n.nom]&&chance(.75)?'summ':'medi',word=st==='summ'?SUMMUS[n.nom]:'middle',base=npE(n,0),noun=n.e;
  const tok={la:d12(st,c,0,n.g,st+'us'),lemma:st+'us',cids:['medsum'],concept:CASES[c]+' singular '+GN[n.g],forms:[],vocab:MEDSUM_V[st]};
  const phrase=`the ${word} of ${base}`,alts=st==='medi'?[`the mid-${noun}`,`the mid ${noun}`,`the midst of ${base}`,`the center of ${base}`,`the centre of ${base}`]:word==='surface'?[`the top of ${base}`,`the topmost ${noun}`]:[`the summit of ${base}`,`the topmost ${noun}`,`the highest ${noun}`,`the highest part of ${base}`];
  return{tok,base,phrase,alts};
}
const MAT_OBJ=['corōna','pōculum'];
const MATS=()=>[['aurum',['gold','golden']],['argentum',['silver']]].map(([n,a])=>({n:nn(n),adj:a})).filter(m=>m.n&&NOUNS.includes(m.n));
function engV(v,t,vc,p){
  const hv=p===2?'has':'have',bp=beP(p),bq=beQ(p);
  const o=vc==='pass'?{pres:[bp+' '+v.pp,bp+' being '+v.pp],impf:[bq+' being '+v.pp,bq+' '+v.pp,'used to be '+v.pp],fut:['will be '+v.pp,'shall be '+v.pp,bp+' going to be '+v.pp],perf:[bq+' '+v.pp,hv+' been '+v.pp],plup:['had been '+v.pp],futp:['will have been '+v.pp,'shall have been '+v.pp]}[t]
   :{pres:[p===2?s3(v.e):v.e,bp+' '+v.ing,(p===2?'does ':'do ')+v.e],impf:[bq+' '+v.ing,'used to '+v.e,'kept '+v.ing,v.past],fut:['will '+v.e,'shall '+v.e,bp+' going to '+v.e],perf:[v.past,hv+' '+v.pp,'did '+v.e],plup:['had '+v.pp],futp:['will have '+v.pp,'shall have '+v.pp]}[t];
  if(o.length>1)ALT.push(o);
  return o[0];
}
function SUMT(t,p,poss){
  const la=poss?(t==='pres'?T6('possum potes potest possumus potestis possunt')[p]:'pot'+SUM[t][p]):SUM[t][p];
  return{la,lemma:poss?'posse':'esse',cids:['sum'],concept:PERS[p]+' '+TN[t],forms:poss?[]:[...SUM.pres,...SUM.impf,...SUM.fut],vocab:poss?'posse, possum : to be able':'esse, sum : to be'};
}
function INF(v,kind,g='m',k=0,cid){
  const la={pa:v.inf,pp:passInf(v),pfa:v.ps+'isse',pfp:ppp(v,3,k,g)+' esse',fa:d12(v.ss+'ūr',3,k,g)+' esse'}[kind];
  return{la,lemma:v.inf,cids:cid?[cid]:[],concept:{pa:'present active',pp:'present passive',pfa:'perfect active',pfp:'perfect passive',fa:'future active'}[kind]+' infinitive',forms:[v.inf,passInf(v)],vocab:verbV(v)};
}
function pap(v,c,k,g){
  if(k===0&&(c===0||(g==='n'&&c===3)))return v.stem+TH[v.cj]+'ns';
  const b=v.stem+{'1d':'a',1:'a',2:'e',3:'e','3i':'ie',4:'ie'}[v.cj]+'nt', neu=g==='n';
  return b+(k===0?['','is','ī','em','e'][c]:[neu?'ia':'ēs','ium','ibus',neu?'ia':'ēs','ibus'][c]);
}
function PT(v,kind,c,k,g,cid){return{la:kind==='ppp'?ppp(v,c,k,g):pap(v,c,k,g),lemma:v.inf,cids:[cid],concept:`${kind==='ppp'?'perfect passive':'present active'} participle, ${CASES[c]} ${NUM[k]} ${GN[g]}`,forms:[],vocab:verbV(v)}}
function GV(v,c,k,g,cid){return{la:d12(v.stem+{'1d':'and',1:'and',2:'end',3:'end','3i':'iend',4:'iend'}[v.cj],c,k,g),lemma:v.inf,cids:[cid],concept:`gerundive, ${CASES[c]} ${NUM[k]} ${GN[g]}`,forms:[],vocab:verbV(v)}}

/* nom|stem|type|eng|tags|comparative|superlative|adverb|adverb eng */
const ADJ=`bonus|bon|12|good|pt|better|best|bene|well
malus|mal|12|bad|pt|worse|worst|male|badly
magnus|magn|12|great|pt|greater|greatest
parvus|parv|12|small|pt|smaller|smallest
laetus|laet|12|happy|p|happier|happiest|laetē|happily
fessus|fess|12|tired|p|more tired|most tired
īrātus|īrāt|12|angry|p|angrier|angriest|īrātē|angrily
novus|nov|12|new|t|newer|newest
pulcher|pulchr|12|beautiful|pt|more beautiful|most beautiful|pulchrē|beautifully
miser|miser|12|wretched|p|more wretched|most wretched|miserē|wretchedly
maestus|maest|12|sad|p|sadder|saddest|maestē|sadly
avārus|avār|12|greedy|p|greedier|greediest|avārē|greedily
saevus|saev|12|fierce|pt|fiercer|fiercest|saevē|fiercely
probus|prob|12|honest|p|more honest|most honest|probē|honestly
scelestus|scelest|12|wicked|p|more wicked|most wicked|scelestē|wickedly
lentus|lent|12|slow|pt|slower|slowest|lentē|slowly
antīquus|antīqu|12|ancient|t|more ancient|most ancient
clārus|clār|12|famous|pt|more famous|most famous
lātus|lāt|12|wide|t|wider|widest
molestus|molest|12|annoying|p|more annoying|most annoying|molestē|annoyingly
fortis|fort|32|brave|p|braver|bravest|fortiter|bravely
trīstis|trīst|32|sad|p|sadder|saddest
ingēns|ingent|31|huge|t|more huge|most huge
fēlīx|fēlīc|31|lucky|p|luckier|luckiest|fēlīciter|luckily
sapiēns|sapient|31|wise|p|wiser|wisest|sapienter|wisely
ācer|ācr|33|fierce|p|fiercer|fiercest|ācriter|fiercely
celer|celer|33|swift|p|swifter|swiftest|celeriter|swiftly`.split('\n').map(l=>{const[nom,stem,ty,e,tags,ce,se,adv,adve]=l.split('|');return{nom,stem,ty,e,tags,ce,se,adv,adve}});
function af(a,c,k,g){
  if(a.ty==='12')return d12(a.stem,c,k,g,a.nom);
  const neu=g==='n';
  if(k===0&&(c===0||(neu&&c===3))){ if(a.ty==='31')return a.nom; if(neu)return a.stem+'e'; if(a.ty==='33'&&g==='m')return a.nom; return a.stem+'is'; }
  return a.stem+(k===0?['','is','ī','em','ī'][c]:[neu?'ia':'ēs','ium','ibus',neu?'ia':'ēs','ibus'][c]);
}
const adjV=a=>(a.ty==='12'?(a.nom.endsWith('us')?`${a.nom} -a -um`:`${a.nom} ${a.stem}a ${a.stem}um`):a.ty==='32'?`${a.nom} -e`:a.ty==='31'?`${a.nom}, ${a.stem}is`:`${a.nom}, ${a.stem}is, ${a.stem}e`)+' : '+a.e;
const allA=(f)=>['m','f','n'].flatMap(g=>[0,1].flatMap(k=>[0,1,2,3,4].map(c=>f(c,k,g))));
function A(a,c,k,g,cids){return{la:af(a,c,k,g),lemma:a.nom,cids:cids||[a.ty==='12'?'adj12':'adj3'],concept:`${CASES[c]} ${NUM[k]} ${GN[g]}`,forms:allA((c,k,g)=>af(a,c,k,g)),vocab:adjV(a)}}
const IRC={bonus:['melior','melius','meliōr','optim'],malus:['peior','peius','peiōr','pessim'],magnus:['maior','maius','maiōr','maxim'],parvus:['minor','minus','minōr','minim']};
function cf(a,deg,c,k,g){
  const ir=IRC[a.nom];
  if(deg==='sup')return d12(ir?ir[3]:a.nom.endsWith('er')?a.nom+'rim':a.stem+'issim',c,k,g);
  const neu=g==='n';
  if(k===0&&c===0&&!neu)return ir?ir[0]:a.stem+'ior';
  if(k===0&&neu&&(c===0||c===3))return ir?ir[1]:a.stem+'ius';
  return(ir?ir[2]:a.stem+'iōr')+(k===0?['','is','ī','em','e'][c]:[neu?'a':'ēs','um','ibus',neu?'a':'ēs','ibus'][c]);
}
function CMP(a,deg,c,k,g){return{la:cf(a,deg,c,k,g),lemma:a.nom,cids:[deg],concept:`${deg==='comp'?'comparative':'superlative'}, ${CASES[c]} ${NUM[k]} ${GN[g]}`,forms:allA((c,k,g)=>cf(a,deg,c,k,g)),vocab:adjV(a)}}
const adjFor=(n,types)=>R((LIMIT&&types.includes('12')?(types=['12']):0,ADJ).filter(a=>types.includes(a.ty)&&a.tags.includes('pag'.includes(n.tag)?'p':'t')));
const adjForOld=(n,types)=>R(ADJ.filter(a=>types.includes(a.ty)&&a.tags.includes('pag'.includes(n.tag)?'p':'t')));

const pt=(m,f,n)=>{const s=x=>{x=x.split(' ');return[x.slice(0,5),x.slice(5)]};return{m:s(m),f:s(f),n:s(n)}};
const DEMOS=[{nom:'hic',t:pt('hic huius huic hunc hōc hī hōrum hīs hōs hīs','haec huius huic hanc hāc hae hārum hīs hās hīs','hoc huius huic hoc hōc haec hōrum hīs haec hīs'),det:['this','these'],vocab:'hic, haec, hoc : this'},
 {nom:'ille',t:pt('ille illīus illī illum illō illī illōrum illīs illōs illīs','illa illīus illī illam illā illae illārum illīs illās illīs','illud illīus illī illud illō illa illōrum illīs illa illīs'),det:['that','those'],vocab:'ille, illa, illud : that'}];
const QUI={nom:'quī',t:pt('quī cuius cui quem quō quī quōrum quibus quōs quibus','quae cuius cui quam quā quae quārum quibus quās quibus','quod cuius cui quod quō quae quōrum quibus quae quibus'),vocab:'quī, quae, quod : who, which'};
function D(d,c,k,g,cid='demo'){return{la:d.t[g][k][c],lemma:d.nom,cids:[cid],concept:`${CASES[c]} ${NUM[k]} ${GN[g]}`,forms:allA((c,k,g)=>d.t[g][k][c]),vocab:d.vocab}}

/* form, case, eng, verb class, object tags */
const PREPS=[['ad',3,'to','M','lcp'],['in',3,'into','M','lc'],['per',3,'through','M','lc'],['trāns',3,'across','M','l'],['prope',3,'near','S','lcp'],['ante',3,'in front of','S','cp'],
 ['ē/ex',4,'out of','M','c'],['ā/ab',4,'away from','M','lcp'],['cum',4,'with','MS','pg'],['sine',4,'without','MS','pg'],['in',4,'in','S','lc']].map(([la,c,e,cl,tags])=>({la,c,e,cl,tags}));
const prepW=(pr,next)=>{const vw=/^[aeiouāēīōūh]/i.test(next);const la=pr.la.includes('/')?pr.la.split('/')[vw?1:0]:pr.la;const w=W(la,`${pr.la} (+${pr.c===3?'acc':'abl'}) : ${pr.e}`);if(pr.la.includes('/')&&!vw)w.alt=[pr.la.split('/')[1]];return w};
const AB=PREPS[7];

const num=n=>n.sgOnly?0:(chance(.5)?1:0);
const pick=(arr,ex=[])=>R(arr.filter(x=>!ex.includes(x)));
const np=(n,k,o={})=>(o.det?o.det[k]:'the')+' '+(o.adj?o.adj+' ':'')+(k?n.ep:n.e);
const heShe=(n,k)=>k?'they':n.g==='f'?'she':'he';
const S=(tokens,en,end='.')=>({tokens,en,end});

/* ---------- generators ---------- */
function gTrans(o={}){
  const t=o.t||'pres';let v=o.v;
  if(!v){let pool=o.pool||TV;if(o.dat)pool=pool.filter(x=>x.fl.includes('D'));if(o.means)pool=MEANSV;if(o.obj)pool=pool.filter(x=>x.obj.includes(o.obj.tag));if(o.cj)pool=pool.filter(x=>x.cj===o.cj);v=R(pool);}
  const used=[o.subj,o.obj,o.io,o.genN].filter(Boolean);
  const obj=o.obj||pick(objFor(v),used);used.push(obj);
  const subj=o.subj||pick(PEOPLE,used);used.push(subj);
  const on=num(obj),sn=num(subj);
  const pron=o.pron&&!o.subj&&!o.modS&&chance(.45)&&!(isDep(v)&&t==='perf');
  const p=pron?R([0,1,3,4]):(sn?5:2);
  const tk=[];let sE;
  if(pron)sE=PRON[p];else{const m=o.modS&&o.modS(0,sn,subj.g);if(m&&m.pre)tk.push(m.tok);tk.push(N(subj,0,sn,'nom'));if(m&&!m.pre)tk.push(m.tok);sE=np(subj,sn,m||{});}
  let tail='';
  if(o.dat){const io=o.io||pick(PEOPLE,used);used.push(io);const k=num(io);tk.push(N(io,2,k,'dat'));tail+=' to '+np(io,k);}
  const mo=o.modO&&o.modO(3,on,obj.g);
  if(mo&&mo.pre)tk.push(mo.tok);tk.push(N(obj,3,on,'acc'));if(mo&&!mo.pre)tk.push(mo.tok);
  let oE=np(obj,on,mo||{});
  if(o.gen){const g=o.genN||pick(PEOPLE,used);const k=num(g);tk.push(N(g,1,k,'gen'));oE+=' of '+np(g,k);}
  if(o.means){const m=R(WEAPONS),k=num(m);tk.push(N(m,4,k,'means'));tail+=' with '+np(m,k);}
  if(o.adv)tk.push(o.adv.tok);
  tk.push(V(v,t,'act',p,subj.g,o.xc));
  return S(tk,`${sE} ${engV(v,t,'act',p)} ${oE}${tail}${o.adv?' '+o.adv.e:''}`);
}
function gPrep(o={}){
  const vcl=o.v&&o.v.fl;
  const pr=o.prep||R(PREPS.filter(p=>(!o.c||p.c===o.c)&&(!o.noun||p.tags.includes(o.noun.tag))&&(!vcl||p.cl.includes(vcl))));
  const n=o.noun||R(NOUNS.filter(x=>pr.tags.includes(x.tag))),k=num(n);
  const v=o.v||R(IV.filter(x=>pr.cl.includes(x.fl))),t=o.t||'pres';
  const s=pick(PEOPLE,[n]),sn=num(s),pron=o.pron&&chance(.45),p=pron?R([0,1,3,4]):(sn?5:2);
  const nt=N(n,pr.c,k,pr.c===3?'accprep':'ablprep'),tk=[];
  if(!pron)tk.push(N(s,0,sn,'nom'));
  tk.push(prepW(pr,nt.la),nt,V(v,t,'act',p));
  return S(tk,`${pron?PRON[p]:np(s,sn)} ${engV(v,t,'act',p)} ${pr.e} ${np(n,k)}`);
}
const gAct=(t,cj)=>{const iv=IV.filter(x=>!cj||x.cj===cj);return iv.length&&chance(.3)?gPrep({v:R(iv),t,pron:1}):gTrans({t,cj,pron:1})};
function gPass(o={}){
  const t=o.t||'pres',v=R(TV),perfSys=!['pres','impf','fut'].includes(t);
  const pron=o.pron&&v.obj.includes('p')&&!perfSys&&chance(.45);
  const pat=R(objFor(v)),pk=num(pat),ag=pick(PEOPLE,[pat]),ak=num(ag),p=pron?R([0,1,3,4]):(pk?5:2);
  const at=N(ag,4,ak,'agent'),tk=[];
  if(!pron)tk.push(N(pat,0,pk,'nom'));
  tk.push(prepW(AB,at.la),at,V(v,t,'pass',p,pat.g,o.xc));
  return S(tk,`${pron?PRON[p]:np(pat,pk)} ${engV(v,t,'pass',p)} by ${np(ag,ak)}`);
}
function gPred(){
  const fem=chance(.2),s=R(have(fem?['fēmina','puella','māter','soror','fīlia']:['vir','puer','frāter','pater','amīcus','fīlius'])),pr=R(have(fem?['rēgīna','dea']:['nauta','agricola','poēta','aurīga','mīles','rēx','servus','magister','dux','cīvis']));
  const k=chance(.5)?1:0,t=R(['pres','pres','impf']),p=k?5:2;
  return S([N(s,0,k,'nom'),SUMT(t,p),N(pr,0,k,'pred')],`${np(s,k)} ${be(t,p)} ${k?pr.ep:'a '+pr.e}`);
}
function gDecl(d){
  const n=R(ALLN.filter(x=>(x.d[0]>'3'?'45':x.d[0])===d&&!'nzxm'.includes(x.tag)));let s;
  if(n.tag==='p'){const m=R(['s','o','io','gen','cum']);
    s=m==='s'?gTrans({subj:n}):m==='o'?gTrans({obj:n}):m==='io'?gTrans({dat:1,io:n}):m==='gen'?gTrans({gen:1,genN:n}):gPrep({noun:n});}
  else s=('lc'.includes(n.tag)&&chance(.5))||n.tag==='g'&&chance(.4)?gPrep({noun:n}):gTrans({obj:n});
  s.focus=s.tokens.find(t=>t.lemma===n.nom&&t.cids);return s;
}
const modA=(a,cids)=>(c,k,g)=>({tok:A(a,c,k,g,cids),adj:a.e});
function gAdj(types,cid,tricky){
  const n=tricky?R(NOUNS.filter(x=>x.tricky)):chance(.75)?R(PEOPLE):R(NOUNS.filter(x=>!x.sgOnly));
  const a=adjFor(n,types)||adjFor(R(PEOPLE),types),cids=tricky?['tricky','adj12']:[cid];
  const person=n.tag==='p',m=R(person?['s','o','pred']:['o','pred']);let s;
  if(!a.tags.includes('pag'.includes(n.tag)?'p':'t'))return gAdj(types,cid,tricky);
  if(m==='s')s=gTrans({subj:n,modS:modA(a,cids)});
  else if(m==='o')s=gTrans({obj:n,modO:modA(a,cids)});
  else{const k=num(n),p=k?5:2;s=S([N(n,0,k,'nom'),SUMT('pres',p),A(a,0,k,n.g,cids)],`${np(n,k)} ${beP(p)} ${a.e}`);}
  s.focus=s.tokens.find(t=>t.lemma===a.nom);return s;
}
function gSum(){
  const t=R(['pres','pres','impf','fut']),p=R([0,1,2,3,4,5]),m=R([0,1,2]);
  if(m===0){const pr=PREPS[10],n=R(NOUNS.filter(x=>x.tag==='c'||x.nom==='silva'||x.nom==='ager')),k=num(n);
    return S([prepW(pr,''),N(n,4,k,'ablprep'),SUMT(t,p)],`${PRON[p]} ${be(t,p)} in ${np(n,k)}`);}
  if(m===1){const v=R(TV),o=R(objFor(v)),k=num(o);
    return S([N(o,3,k,'acc'),INF(v,'pa','m',0,'inf'),SUMT(t,p,true)],`${PRON[p]} ${be(t,p)} able to ${v.e} ${np(o,k)}`);}
  const s=R(PEOPLE),k=num(s),a=adjFor(s,['12']),q=k?5:2;
  return S([N(s,0,k,'nom'),A(a,0,k,s.g),SUMT(t,q)],`${np(s,k)} ${be(t,q)} ${a.e}`);
}
function gCompl(vc){
  const poss=chance(.5),D2=vb('dēbēre');
  const modal=p=>poss?SUMT('pres',p,true):Object.assign(V(D2,'pres','act',p),{vocab:'dēbēre, -eō : to owe; (+infinitive) ought'});
  const mE=p=>poss?beP(p)+' able to':'ought to';
  if(vc==='act'){const v=R(TV),o=R(objFor(v)),k=num(o),s=pick(PEOPLE,[o]),sn=num(s),pron=chance(.45),p=pron?R([0,1,3,4]):(sn?5:2),tk=[];
    if(!pron)tk.push(N(s,0,sn,'nom'));tk.push(N(o,3,k,'acc'),INF(v,'pa','m',0,'inf'),modal(p));
    return S(tk,`${pron?PRON[p]:np(s,sn)} ${mE(p)} ${v.e} ${np(o,k)}`);}
  const v=R(TV),pron=v.obj.includes('p')&&chance(.4),pat=R(objFor(v)),pk=num(pat),p=pron?R([0,1,3,4]):(pk?5:2),tk=[];let tail='';
  if(!pron)tk.push(N(pat,0,pk,'nom'));
  if(chance(.5)){const ag=pick(PEOPLE,[pat]),ak=num(ag),at=N(ag,4,ak,'agent');tk.push(prepW(AB,at.la),at);tail=' by '+np(ag,ak);}
  tk.push(INF(v,'pp','m',0,'pinf'),modal(p));
  return S(tk,`${pron?PRON[p]:np(pat,pk)} ${mE(p)} be ${v.pp}${tail}`);
}
function gImp(o={}){
  const v=R(TV),ob=R(objFor(v)),on=num(ob),ad=o.voc&&chance(.65)?pick(PEOPLE.filter(n=>n.d==='2'),[ob]):pick(PEOPLE,[ob]),ak=num(ad),neg=!o.voc&&chance(.3);
  const voc=N(ad,5,ak,'voc');voc.post=',';
  const en=`${ak?ad.ep:ad.e}, ${neg?"don't ":''}${v.e} ${np(ob,on)}`;
  if(neg)return S([voc,{la:ak?'nōlīte':'nōlī',lemma:'nōlle',cids:['imp'],concept:'negative command, '+NUM[ak],forms:[],vocab:'nōlī, nōlīte (+infinitive) : don’t …'},N(ob,3,on,'acc'),INF(v,'pa')],en,'!');
  const la=ak?v.stem+{'1d':'ate',1:'āte',2:'ēte',3:'ite','3i':'ite',4:'īte'}[v.cj]:v.inf==='dūcere'?'dūc':v.stem+{'1d':'ā',1:'ā',2:'ē',3:'e','3i':'e',4:'ī'}[v.cj];
  return S([voc,N(ob,3,on,'acc'),{la,lemma:v.inf,cids:['imp'],concept:'imperative '+NUM[ak],forms:[],vocab:verbV(v)}],en,'!');
}
function gCompare(kind){
  const a=R(ADJ.filter(x=>x.tags.includes('p'))),deg=kind==='sup'?'sup':'comp',e=deg==='sup'?a.se:a.ce;
  if(kind!=='ablcomp'&&chance(.5)){const s=gTrans({pool:TV.filter(v=>v.obj.includes('p')),obj:R(PEOPLE),modO:(c,k,g)=>({tok:CMP(a,deg,c,k,g),adj:e})});s.focus=s.tokens.find(t=>t.cids&&t.cids[0]===deg);return s;}
  const s=R(PEOPLE),k=num(s),p=k?5:2;
  if(deg==='sup')return S([N(s,0,k,'nom'),CMP(a,'sup',0,k,s.g),SUMT('pres',p)],`${np(s,k)} ${beP(p)} the ${e}`);
  const s2=pick(PEOPLE,[s]),k2=num(s2);
  if(kind==='ablcomp')return S([N(s,0,k,'nom'),N(s2,4,k2,'ablcomp'),CMP(a,'comp',0,k,s.g),SUMT('pres',p)],`${np(s,k)} ${beP(p)} ${e} than ${np(s2,k2)} (no quam)`);
  return S([N(s,0,k,'nom'),CMP(a,'comp',0,k,s.g),SUMT('pres',p),W('quam'),N(s2,0,k2,'nom')],`${np(s,k)} ${beP(p)} ${e} than ${np(s2,k2)}`);
}
function gAdv(){const a=R(ADJ.filter(x=>x.adv&&(!LIMIT||x.ty==='12')));return gTrans({pool:TV.filter(v=>v.obj.includes('p')),adv:{tok:{la:a.adv,lemma:a.nom,cids:['adv'],concept:'adverb',forms:[],vocab:adjV(a)},e:a.adve}})}
function gDemo(){const d=R(DEMOS),m=(c,k,g)=>({tok:D(d,c,k,g),det:d.det,pre:1});return chance(.5)?gTrans({modS:m}):gTrans({modO:m})}
function gRel(){
  const ant=R(PEOPLE),ak=num(ant),ap=ak?5:2,c=R([0,3,2,1]),a=adjFor(ant,['12','32','31','33']);
  const first=N(ant,0,ak,'nom');first.post=',';const tk=[first,D(QUI,c,ak,ant.g,'rel')];let cl;
  if(c===0){const v=R(TV),o=pick(objFor(v),[ant]),k=num(o);tk.push(N(o,3,k,'acc'),V(v,'pres','act',ap));cl=`who ${engV(v,'pres','act',ap)} ${np(o,k)}`;}
  else if(c===3){const v=R(TV.filter(x=>x.obj.includes('p'))),s=pick(PEOPLE,[ant]),k=num(s);tk.push(N(s,0,k,'nom'),V(v,'pres','act',k?5:2));cl=`whom ${np(s,k)} ${engV(v,'pres','act',k?5:2)}`;}
  else if(c===2){const v=R(TV.filter(x=>x.fl==='D')),s=pick(PEOPLE,[ant]),k=num(s),th=R(objFor(v)),tn=num(th);tk.push(N(s,0,k,'nom'),N(th,3,tn,'acc'),V(v,'pres','act',k?5:2));cl=`to whom ${np(s,k)} ${engV(v,'pres','act',k?5:2)} ${np(th,tn)}`;}
  else{const kin=pick(have(['pater','māter','frāter','soror','amīcus','servus','fīlius','fīlia']),[ant]),kk=num(kin),v=R(TV.filter(x=>x.obj.includes('p'))),o=pick(PEOPLE,[ant,kin]),k=num(o);tk.push(N(kin,0,kk,'nom'),N(o,3,k,'acc'),V(v,'pres','act',kk?5:2));cl=`whose ${kk?kin.ep:kin.e} ${engV(v,'pres','act',kk?5:2)} ${np(o,k)}`;}
  tk[tk.length-1].post=',';tk.push(A(a,0,ak,ant.g),SUMT('pres',ap));
  return S(tk,`${np(ant,ak)}, ${cl}, ${beP(ap)} ${a.e}`);
}
function gDatPoss(){const p=R(PEOPLE),k=num(p),th=R(NOUNS.filter(n=>'twa'.includes(n.tag))),tn=num(th);
  return S([N(p,2,k,'datposs'),N(th,0,tn,'nom'),SUMT('pres',tn?5:2)],`${np(p,k)} ${k?'have':'has'} ${np(th,tn)} (use a dative of possession)`)}
function gPart(){
  if(chance(.5)){const iv=R(IV),o=R(PEOPLE);return gTrans({pool:['vidēre','audīre','spectāre','cōnspicere','exspectāre'].map(vb),obj:o,modO:(c,k,g)=>({tok:PT(iv,'pap',c,k,g,'ppart'),adj:iv.ing})});}
  const v1=R(TV.filter(x=>x.inf!=='narrāre')),o=R(objFor(v1));return gTrans({pool:['vidēre','relinquere','invenīre','cōnspicere'].map(vb).filter(x=>x.obj.includes(o.tag)),obj:o,modO:(c,k,g)=>({tok:PT(v1,'ppp',c,k,g,'ppart'),adj:v1.pp})});
}
function gIrr(){
  const v=R([EO,FERO,VOLO,NOLO]),t=R(['pres','pres','impf','fut']);
  if(v===EO)return gPrep({v,t,pron:1});
  if(v===FERO)return gTrans({v,t,pron:1});
  const u=R(TV),o=R(objFor(u)),k=num(o),s=pick(PEOPLE,[o]),sn=num(s),pron=chance(.5),p=pron?R([0,1,3,4]):(sn?5:2),tk=[];
  if(!pron)tk.push(N(s,0,sn,'nom'));tk.push(N(o,3,k,'acc'),INF(u,'pa'),V(v,t,'act',p));
  return S(tk,`${pron?PRON[p]:np(s,sn)} ${engV(v,t,'act',p)} to ${u.e} ${np(o,k)}`);
}
function gForm(tenses){
  const v=R(TV),t=R(tenses),p=R([0,1,2,3,4,5]),vc=R(['act','pass']),two=vc==='pass'&&(t==='sperf'||t==='splup');
  const s=S([V(v,t,vc,p,'m')],`Form the ${PERS[p]} ${TN[t]} ${vc==='act'?'active':'passive'} of ${v.inf}, “to ${v.e}”${two?' (masculine subject)':''}`);s.form=1;return s;
}
/* subjunctive clauses */
const clause=()=>{const v=R(TV),s=R(PEOPLE),sn=num(s),o=pick(objFor(v),[s]),on=num(o);return{v,s,sn,o,on,p:sn?5:2}};
function gPurpose(){
  const sec=chance(.5),{v,s,sn,o,on,p}=clause(),m=R(IV.filter(x=>x.fl==='M')),neg=chance(.2);
  return S([N(s,0,sn,'nom'),V(m,sec?'perf':'pres','act',p),W(neg?'nē':'ut'),N(o,3,on,'acc'),V(v,sec?'simpf':'spres','act',p,'m',['purpose'])],
    `${np(s,sn)} ${engV(m,sec?'perf':'pres','act',p)} so that ${heShe(s,sn)} ${sec?'might':'may'}${neg?' not':''} ${v.e} ${np(o,on)}`);
}
function gResult(){
  const sec=chance(.5),{v,s,sn,o,on,p}=clause(),a=adjFor(s,['12','32','31','33']);
  return S([N(s,0,sn,'nom'),W('tam'),A(a,0,sn,s.g),SUMT(sec?'impf':'pres',p),W('ut'),N(o,3,on,'acc'),V(v,sec?'simpf':'spres','act',p,'m',['result'])],
    `${np(s,sn)} ${be(sec?'impf':'pres',p)} so ${a.e} that ${heShe(s,sn)} ${engV(v,sec?'perf':'pres','act',p)} ${np(o,on)}`);
}
function gIndQ(){
  const sec=chance(.5),prior=chance(.4),{v,s,sn,o,on,p}=clause(),a=pick(PEOPLE,[s,o]),an=num(a),ap=an?5:2,q=R([['cūr','why'],['quōmodo','how'],['num','whether']]);
  return S([N(a,0,an,'nom'),V(vb('rogāre'),sec?'perf':'pres','act',ap),W(q[0]),N(s,0,sn,'nom'),N(o,3,on,'acc'),V(v,sec?(prior?'splup':'simpf'):(prior?'sperf':'spres'),'act',p,'m',['indq'])],
    `${np(a,an)} ${engV(vb('rogāre'),sec?'perf':'pres','act',ap)} ${q[1]} ${np(s,sn)} ${engV(v,sec?(prior?'plup':'impf'):(prior?'perf':'pres'),'act',p)} ${np(o,on)}`);
}
function gIndCmd(){
  const sec=chance(.5),{v,s,sn,o,on,p}=clause(),a=pick(PEOPLE,[s,o]),an=num(a),ap=an?5:2,imp=chance(.6),h=vb(imp?'imperāre':'ōrāre'),neg=chance(.2);
  return S([N(a,0,an,'nom'),N(s,imp?2:3,sn,imp?'dat':'acc'),V(h,sec?'perf':'pres','act',ap),W(neg?'nē':'ut'),N(o,3,on,'acc'),V(v,sec?'simpf':'spres','act',p,'m',['indcmd'])],
    `${np(a,an)} ${engV(h,sec?'perf':'pres','act',ap)} ${np(s,sn)} ${neg?'not ':''}to ${v.e} ${np(o,on)}`);
}
function gCum(){
  const plu=chance(.5),{v,s,sn,o,on,p}=clause(),s2=pick(PEOPLE,[s,o]),k2=num(s2),m=R(IV);
  const sv=V(v,plu?'splup':'simpf','act',p,'m',['cumcl']);sv.post=',';
  return S([W('cum'),N(s,0,sn,'nom'),N(o,3,on,'acc'),sv,N(s2,0,k2,'nom'),V(m,'perf','act',k2?5:2)],
    `When ${np(s,sn)} ${engV(v,plu?'plup':'impf','act',p)} ${np(o,on)}, ${np(s2,k2)} ${engV(m,'perf','act',5)}`);
}
function gFear(){
  const sec=chance(.5),{v,s,sn,o,on,p}=clause(),a=pick(PEOPLE,[s,o]),an=num(a),ap=an?5:2,h=vb('timēre');
  return S([N(a,0,an,'nom'),V(h,sec?'impf':'pres','act',ap),W('nē'),N(s,0,sn,'nom'),N(o,3,on,'acc'),V(v,sec?'simpf':'spres','act',p,'m',['fear'])],
    `${np(a,an)} ${engV(h,sec?'impf':'pres','act',ap)} that ${np(s,sn)} ${sec?'might':'may'} ${v.e} ${np(o,on)}`);
}
function gHort(){
  const{v,s,sn,o,on,p}=clause();
  if(chance(.5))return S([N(o,3,on,'acc'),V(v,'spres','act',3,'m',['hort'])],`Let us ${v.e} ${np(o,on)}`,'!');
  return S([N(s,0,sn,'nom'),N(o,3,on,'acc'),V(v,'spres','act',p,'m',['hort'])],`Let ${np(s,sn)} ${v.e} ${np(o,on)}`,'!');
}
function gCond(only){
  const{v,s,sn,o,on,p}=clause(),s2=pick(PEOPLE,[s,o]),k2=num(s2),p2=k2?5:2,m=R(IV);
  const[t,name,e1,e2]=(only?a=>a[0]:R)([['fut','future more vivid',engV(v,'pres','act',p),'will '+m.e],['spres','future less vivid','should '+v.e,'would '+m.e],['simpf','present contrary to fact','were '+v.ing,'would be '+m.ing],['splup','past contrary to fact','had '+v.pp,'would have '+m.pp]]);
  const a=V(v,t,'act',p,'m',['cond']),b=V(m,t,'act',p2,'m',['cond']);a.post=',';
  a.concept+=', '+name+' (if-clause)';b.concept+=', '+name+' (conclusion)';
  if(t==='fut')a.alt=[vf(v,'futp','act',p)];
  return S([W('sī'),N(s,0,sn,'nom'),N(o,3,on,'acc'),a,N(s2,0,k2,'nom'),b],`If ${np(s,sn)} ${e1} ${np(o,on)}, ${np(s2,k2)} ${e2}`);
}
function gIndSt(simple){
  const a=R(PEOPLE),an=num(a),ap=an?5:2,h=R(['dīcere','putāre','scīre','audīre'].map(vb)),v=R(TV),kind=simple?'pa':R(['pa','pfa','fa','pp','pfp']),et={pa:'pres',pfa:'perf',fa:'fut',pp:'pres',pfp:'perf'}[kind];
  const head=[N(a,0,an,'nom'),V(h,'pres','act',ap)],hE=`${np(a,an)} ${engV(h,'pres','act',ap)} that `;
  if(simple&&chance(.4)){const s=pick(PEOPLE,[a]),sn=num(s),iv=R(IV),sa=N(s,3,sn,'indst');
    return S([...head,sa,INF(iv,'pa',s.g,sn,'indst')],hE+`${np(s,sn)} ${engV(iv,'pres','act',sn?5:2)}`);}
  if(kind[kind.length-1]==='a'){const s=pick(PEOPLE,[a]),sn=num(s),o=pick(objFor(v),[a,s]),on=num(o),sa=N(s,3,sn,'indst');sa.concept+=' (subject of the infinitive)';
    return S([...head,sa,N(o,3,on,'acc'),INF(v,kind,s.g,sn,'indst')],hE+`${np(s,sn)} ${engV(v,et,'act',sn?5:2)} ${np(o,on)}`);}
  const pat=pick(objFor(v),[a]),pk=num(pat),ag=pick(PEOPLE,[a,pat]),ak=num(ag),at=N(ag,4,ak,'agent'),sa=N(pat,3,pk,'indst');sa.concept+=' (subject of the infinitive)';
  return S([...head,sa,prepW(AB,at.la),at,INF(v,kind,pat.g,pk,'indst')],hE+`${np(pat,pk)} ${engV(v,et,'pass',pk?5:2)} by ${np(ag,ak)}`);
}
function gAbs(){
  const s=R(PEOPLE),sn=num(s),m=R(IV.filter(x=>x.fl==='M')),main=[N(s,0,sn,'nom'),V(m,'perf','act',sn?5:2)],mE=`${np(s,sn)} ${m.past}`;
  if(chance(.3)){const n=pick(PEOPLE,[s]),k=num(n),iv=R(IV.filter(x=>x.fl==='S')),pt=PT(iv,'pap',4,k,n.g,'abs');pt.post=',';
    return S([N(n,4,k,'abs'),pt,...main],`With ${np(n,k)} ${iv.ing}, ${mE}`);}
  const v=R(TV),n=pick(objFor(v),[s]),k=num(n),pt=PT(v,'ppp',4,k,n.g,'abs');pt.post=',';
  return S([N(n,4,k,'abs'),pt,...main],`With ${np(n,k)} having been ${v.pp}, ${mE}`);
}
function gPeri(){
  const v=R(TV),pat=R(objFor(v)),pk=num(pat),ag=pick(PEOPLE,[pat]),ak=num(ag),past=chance(.3),at=N(ag,2,ak,'pperi');at.concept+=' (dative of agent)';
  return S([N(pat,0,pk,'nom'),at,GV(v,0,pk,pat.g,'pperi'),SUMT(past?'impf':'pres',pk?5:2)],`${np(pat,pk)} ${past?'had to':'must'} be ${v.pp} by ${np(ag,ak)}`);
}
function gGerv(){
  const{v,s,sn,o,on,p}=clause(),m=R(IV.filter(x=>x.fl==='M')),t=R(['pres','perf']),en=`${np(s,sn)} ${engV(m,t,'act',p)} for the purpose of ${v.ing} ${np(o,on)}`;
  if(chance(.5))return S([N(s,0,sn,'nom'),W('ad','ad (+acc) : to, for'),N(o,3,on,'accprep'),GV(v,3,on,o.g,'gerv'),V(m,t,'act',p)],en+' (use ad)');
  return S([N(s,0,sn,'nom'),N(o,1,on,'gen'),GV(v,1,on,o.g,'gerv'),W('causā'),V(m,t,'act',p)],en+' (use causā)');
}
/* class-notes topics */
function gQues(){
  const v=R(TV),o=R(objFor(v)),k=num(o);
  if(chance(.35))return S([W('quis','quis : who?'),N(o,3,k,'acc'),V(v,'pres','act',2)],`who ${engV(v,'pres','act',2)} ${np(o,k)}`,'?');
  const s=pick(PEOPLE,[o]),sn=num(s),p=sn?5:2,vt=V(v,'pres','act',p),st=N(s,0,sn,'nom'),ot=N(o,3,k,'acc');
  const q=S([vt,st,ot],`${beP(p)} ${np(s,sn)} ${v.ing} ${np(o,k)}`,'?');
  q.ne=1;q.display=`${vt.la}ne ${st.la} ${ot.la}`;q.enAlt=[`${p===2?'does':'do'} ${np(s,sn)} ${v.e} ${np(o,k)}`];
  q.extraVocab=['-ne : added to the first word to ask a yes or no question'];return q;
}
function gConj(){
  const v=R(TV.filter(x=>x.obj.includes('p'))),et=W('et','et, -que : and'),que=chance(.5);let q;
  if(chance(.5)){const a=R(PEOPLE),b=pick(PEOPLE,[a]),o=pick(objFor(v),[a,b]),k=num(o),ta=N(a,0,0,'nom'),tb=N(b,0,0,'nom'),to=N(o,3,k,'acc'),tv=V(v,'pres','act',5);
    q=S([ta,et,tb,to,tv],`${np(a,0)} and ${np(b,0)} ${engV(v,'pres','act',5)} ${np(o,k)}`);if(que)q.display=`${ta.la} ${tb.la}que ${to.la} ${tv.la}`;}
  else{const s=R(PEOPLE),sn=num(s),p=sn?5:2,a=pick(PEOPLE,[s]),b=pick(PEOPLE,[s,a]),ts=N(s,0,sn,'nom'),ta=N(a,3,0,'acc'),tb=N(b,3,0,'acc'),tv=V(v,'pres','act',p);
    q=S([ts,ta,et,tb,tv],`${np(s,sn)} ${engV(v,'pres','act',p)} ${np(a,0)} and ${np(b,0)}`);if(que)q.display=`${ts.la} ${ta.la} ${tb.la}que ${tv.la}`;}
  q.and=1;return q;
}
function gGap(){
  const v=R(TV.filter(x=>x.obj.includes('p'))),a=R(PEOPLE),b=pick(PEOPLE,[a]),c=pick(PEOPLE,[a,b]),d=pick(PEOPLE,[a,b,c]),oc=N(c,3,0,'acc');oc.post=',';
  const x=engV(v,'pres','act',2),q=S([N(a,0,0,'nom'),oc,N(b,0,0,'nom'),N(d,3,0,'acc'),V(v,'pres','act',2)],`${np(a,0)} ${x} ${np(c,0)}, ${np(b,0)} ${np(d,0)}`);
  q.enAlt=[`${np(a,0)} ${x} ${np(c,0)} and ${np(b,0)} ${x} ${np(d,0)}`,`${np(a,0)} ${x} ${np(c,0)} and ${np(b,0)} ${np(d,0)}`];return q;
}
function gVoc(){
  const s=gTrans(),used=s.tokens.map(t=>t.lemma),us=PEOPLE.filter(n=>n.d==='2'&&!used.includes(n.nom));
  const ad=us.length&&chance(.7)?R(us):R(PEOPLE.filter(n=>!used.includes(n.nom))),k=num(ad),voc=N(ad,5,k,'voc');voc.post=',';
  s.tokens.unshift(voc);s.en=`${k?ad.ep:ad.e}, ${s.en}`;return s;
}
/* AP */
function gRelPurp(){
  const sec=chance(.5),{v,s,sn,o,on,p}=clause(),a=pick(PEOPLE,[s,o]),an=num(a),ap=an?5:2,h=vb('mittere');
  return S([N(a,0,an,'nom'),N(s,3,sn,'acc'),V(h,sec?'perf':'pres','act',ap),D(QUI,0,sn,s.g,'rel'),N(o,3,on,'acc'),V(v,sec?'simpf':'spres','act',p,'m',['relpurp'])],
    `${np(a,an)} ${engV(h,sec?'perf':'pres','act',ap)} ${np(s,sn)} to ${v.e} ${np(o,on)} (relative clause of purpose)`);
}
function gSupine(){
  const{v,s,sn,o,on,p}=clause(),m=R(IV.filter(x=>x.fl==='M')),t=R(['pres','perf']);
  return S([N(s,0,sn,'nom'),V(m,t,'act',p),N(o,3,on,'acc'),{la:v.ss+'um',lemma:v.inf,cids:['supine'],concept:'supine in -um',forms:[],vocab:verbV(v)}],`${np(s,sn)} ${engV(m,t,'act',p)} to ${v.e} ${np(o,on)} (use the supine)`);
}
function gDdat(){
  const[la,lem,voc,e]=R([['auxiliō','auxilium','auxilium, -ī, n. : help','a help'],['praesidiō','praesidium','praesidium, -ī, n. : protection','a protection'],['cūrae','cūra','cūra, -ae, f. : concern','a concern'],['impedīmentō','impedīmentum','impedīmentum, -ī, n. : hindrance','a hindrance'],['salūtī','salūs','salūs, salūtis, f. : safety','a source of safety']]);
  const s=R(PEOPLE),sn=num(s),b=pick(PEOPLE,[s]),bk=num(b),bt=N(b,2,bk,'ddat');bt.concept+=' (dative of reference)';
  return S([N(s,0,sn,'nom'),bt,{la,lemma:lem,cids:['ddat'],concept:'dative singular (dative of purpose)',forms:[],vocab:voc},SUMT('pres',sn?5:2)],`${np(s,sn)} ${beP(sn?5:2)} ${e} to ${np(b,bk)} (double dative)`);
}
function gPartGen(){
  const v=R(TV.filter(x=>x.obj.includes('p'))),s=R(PEOPLE),sn=num(s),g=pick(PEOPLE,[s]),p=sn?5:2;
  return S([N(s,0,sn,'nom'),W('partem'),N(g,1,1,'partgen'),V(v,'pres','act',p)],`${np(s,sn)} ${engV(v,'pres','act',p)} part of ${np(g,1)}`);
}
function gSync(){
  const v=R(VERBS.filter(x=>/[āī]v$/.test(x.ps)&&!x.fl.includes('Z'))),a=v.ps.endsWith('āv'),b=v.ps.slice(0,-2);
  const[full,la,how]=R([[v.ps+'ērunt',v.ps+'ēre','the alternate -ēre ending'],[v.ps+'isse',b+(a?'āsse':'īsse'),'syncope (drop the -vi-)'],[v.ps+'ērunt',b+(a?'ārunt':'iērunt'),'syncope (drop the -v-)'],[v.ps+'istī',b+(a?'āstī':'īstī'),'syncope (drop the -vi-)']]);
  const s=S([{la,lemma:v.inf,cids:['sync'],concept:how,forms:[],vocab:verbV(v)}],`Rewrite ${full} using ${how}, as Vergil often does`);s.form=1;return s;
}
const DEVICES=[['hīc illius arma, hīc currus fuit','Aeneid 1.16–17','anaphora','hīc is repeated at the start of successive phrases.'],
['magnō cum murmure montis','Aeneid 1.55','alliteration','The repeated m sounds imitate the rumbling.'],
['ac velutī magnō in populō cum saepe coorta est sēditiō','Aeneid 1.148–149','simile','velutī introduces an explicit comparison.'],
['Īlionēa petit dextrā laevāque Serestum','Aeneid 1.611','chiasmus','Accusative, ablative, ablative, accusative: an ABBA arrangement.'],
['nōn ignāra malī','Aeneid 1.630','litotes','A double negative (“not ignorant”) makes a strong positive.'],
['Mūsa, mihī causās memorā','Aeneid 1.8','apostrophe','The poet turns to address the Muse directly.'],
['circum dea fūdit','Aeneid 1.412','tmesis','The compound circumfūdit is split into two words.'],
['saevae memorem Iūnōnis ob īram','Aeneid 1.4','synchysis','Interlocked word order, ABAB: saevae … memorem … Iūnōnis … īram.'],
['mōlemque et montēs','Aeneid 1.61','hendiadys','Two nouns joined by “and” express one idea: a mass of mountains.'],
['ūnā Eurusque Notusque ruunt crēberque procellīs Āfricus','Aeneid 1.85–86','polysyndeton','-que is repeated more often than needed.'],
['Cererem corruptam undīs','Aeneid 1.177','metonymy','Ceres, the goddess, stands for grain.'],
['tantaene animīs caelestibus īrae?','Aeneid 1.11','rhetorical question','A question asked for effect, with no answer expected.']];
function gDevice(){const d=R(DEVICES),names=[...new Set(DEVICES.map(x=>x[2]))].filter(x=>x!==d[2]).sort(()=>Math.random()-.5).slice(0,5);
  return{choice:1,line:d[0],cite:d[1],answer:d[2],explain:d[3],options:[d[2],...names].sort()}}

/* ===================== SENTENCE BUILDER ===================== */
const MOT_I=['ambulāre','festīnāre','currere','venīre','nāvigāre','discēdere'],MOT_T=['portāre','dūcere','mittere','revocāre'];
const GIVE=['dare','dōnāre','mōnstrāre','trādere','narrāre','reddere'];
const DATREF=['portāre','servāre','dēfendere','pugnāre','labōrāre','scrībere','custōdīre','capere','invenīre','parāre'];
const MEANS={terrēre:['sagitta','gladius','tēlum'],superāre:['gladius','tēlum','sagitta'],dēfendere:['gladius','tēlum'],portāre:['equus','carrus'],dēlectāre:['iocus','fābula'],pugnāre:['gladius','tēlum','sagitta'],interficere:['gladius','sagitta']};
const SEPV=['līberāre','prohibēre'];
const NOBUILD=new Set(['nūntiāre','comperīre','dīcere','putāre','scīre','rogāre','imperāre','ōrāre','timēre','dēbēre','cupere','solēre','crēdere','spērāre','exspectāre','relinquere','spectāre']);
const INTO=['silva','caverna','hortus','ager','oppidum','casa','taberna','templum','vīlla'];
const FIXADV=[['hodiē','today'],['saepe','often'],['semper','always'],['nunc','now']];
const ING_ALL=[
 ['adj','Adjective agreement','Nouns and adjectives'],['tricky','Nouns that look like a different gender','Nouns and adjectives'],['appos','Apposition','Nouns and adjectives'],['que','et and -que','Nouns and adjectives'],['adv','Adverbs','Nouns and adjectives'],['medsum','medius and summus (middle of, top of)','Nouns and adjectives'],
 ['dat','Dative: indirect object (to)','Cases'],['datref','Dative of reference (for)','Cases'],['placeTo','Accusative of place to which','Cases'],['placeWhere','Ablative of place where','Cases'],['placeFrom','Ablative of place from which','Cases'],['town','Towns and small islands (no preposition)','Cases'],['sep','Ablative of separation','Cases'],['means','Ablative of means','Cases'],['accomp','Ablative of accompaniment (cum)','Cases'],['manner','Ablative of manner (cum)','Cases'],['agent','Ablative of personal agent','Cases'],['voc','Vocative','Cases'],['cause','Ablative of cause','Cases'],
 ['genposs','Genitive of possession','Genitive'],['genpart','Partitive genitive','Genitive'],['genso','Subjective or objective genitive','Genitive'],['genmat','Genitive of material','Genitive'],
 ['pass','Passive voice','Verbs'],['fut','Future tense','Verbs'],['impf','Continuous past (imperfect)','Verbs']];
const FRAMES=[['stmt','Plain statement'],['ne','Yes or no question (-ne)'],['quis','Question with quis'],['ci','Complementary infinitive'],['is','Indirect statement'],['condP','Open condition: present'],['condF','Open condition: future'],['gap','Gapping'],['imp','Command (imperative)']];
const FRAME_ONLY={gap:['adj','tricky','adv','fut','impf','pass','agent'],condP:null,condF:null};
const FRAME_NOT={condP:['fut','impf'],condF:['fut','impf'],gap:[],imp:['fut','impf','genso']};
const ingName=id=>(ING_ALL.find(x=>x[0]===id)||[0,id])[1];
const npE=(n,k,adj)=>n.tag==='n'||n.tag==='z'?n.e:n.tag==='x'?(adj?adj+' ':'')+n.e:'the '+(adj?adj+' ':'')+(k?n.ep:n.e);
const tidy=s=>s.replace(/\s+/g,' ').replace(/ ,/g,',').replace(/,+/g,',').replace(/, *$/,'').trim();
const kOf=n=>n.pl?1:num(n);

function okV(v,set){
  const n=v.inf,tr=!!v.obj;
  if((set.has('placeTo')||set.has('placeFrom'))&&!MOT_I.includes(n)&&!MOT_T.includes(n))return false;
  if(set.has('sep')!==SEPV.includes(n))return false;
  if(set.has('genso')&&(!GENSO_N[n]||set.has('pass')))return false;
  if(set.has('genmat')&&(!tr||!v.obj.includes('t')||set.has('pass')))return false;
  if(set.has('means')&&!MEANS[n])return false;
  if(set.has('dat')&&!GIVE.includes(n))return false;
  if(set.has('datref')&&!DATREF.includes(n))return false;
  if(set.has('pass')&&(!tr||n==='prohibēre'))return false;
  if(set.has('pass')&&(set.has('appos')||set.has('tricky'))&&!v.obj.includes('p'))return false;
  if(set.has('pass')&&set.has('means')&&!['terrēre','superāre','dēfendere','portāre','dēlectāre','interficere'].includes(n))return false;
  return true;
}
function bVerb(set){
  const c=VERBS.filter(v=>!NOBUILD.has(v.inf)&&!v.irr&&!v.fl.includes('X')&&(v.obj||['M','S','F'].includes(v.fl))&&okV(v,set));
  return c.length?R(c):null;
}
/* one clause: o = {p, noSubj, subjCase, inf, t, v, used, pron, k} */
function bClause(set,o={}){try{return bClause0(set,o)}catch(e){if(e==='EMPTY')return null;throw e}}
function bClause0(set,o={}){
  const v=o.v||bVerb(set);if(!v)return null;
  const vc=v.obj&&set.has('pass')?'pass':'act',t=o.t||(set.has('fut')?'fut':set.has('impf')?'impf':'pres');
  const tr=vc==='act'&&!!v.obj,used=o.used||[],missing=[];
  const slots=[];if(!o.noSubj)slots.push('s');if(tr)slots.push('o');
  const poolFor=s=>(s==='s'?(vc==='act'?PEOPLE:objFor(v)):objFor(v)).filter(n=>!used.includes(n));
  const pick=ok=>{const c=slots.filter(ok);return c.length?R(c):null};
  const where={};
  if(set.has('tricky'))where.tricky=pick(s=>poolFor(s).some(n=>n.tricky));
  if(set.has('appos'))where.appos=pick(s=>s!==where.tricky&&poolFor(s).some(n=>n.tag==='p'));
  if(set.has('que'))where.que=pick(s=>poolFor(s).length>2&&!(s==='s'&&o.k===0));
  if(set.has('adj'))where.adj=pick(s=>s!==where.tricky&&s!==where.appos);
  const taken=s=>Object.values(where).includes(s);
  if(set.has('genso'))where.genso=slots.includes('s')&&vc==='act'&&!taken('s')?'s':null;
  if(set.has('genmat'))where.mat=slots.includes('o')&&!taken('o')&&poolFor('o').some(n=>MAT_OBJ.includes(n.nom))?'o':null;
  if(set.has('genpart'))where.part=pick(s=>!taken(s)&&poolFor(s).some(n=>n.tag==='p'&&!n.sgOnly));
  if(set.has('genposs'))where.gen=pick(s=>s!==where.appos&&s!==where.que&&s!==where.part&&s!==where.mat&&s!==where.genso&&(!set.has('gdat')||s==='o'));
  for(const x of['tricky','appos','que','adj'])if(set.has(x)&&!where[x])missing.push(x);
  for(const[x,w]of[['genso','genso'],['genmat','mat'],['genpart','part'],['genposs','gen']])if(set.has(x)&&!where[w])missing.push(x);
  function mk(s,c,cid){
    let pool=poolFor(s);if(where.tricky===s)pool=pool.filter(n=>n.tricky);
    if(where.que===s&&s==='s')pool=pool.filter(n=>!n.sgOnly);
    if(!pool.length||(where.que===s&&poolFor(s).length<2))throw 'EMPTY';
    let toks,en,k;
    if(where.genso===s){
      const ab=R((GENSO_N[v.inf]||[]).map(nn).filter(x=>x&&!used.includes(x)&&NOUNS.includes(x)));if(!ab)throw 'EMPTY';used.push(ab);
      const g=R(PEOPLE.filter(x=>!used.includes(x)));if(!g)throw 'EMPTY';used.push(g);const gk=kOf(g);
      const full=`the ${ab.e} of ${npE(g,gk)}`;ALT.push([full,`${possE(g,gk)} ${ab.e}`,`${ab.e} for ${npE(g,gk)}`,`the ${ab.e} for ${npE(g,gk)}`]);
      return{toks:[N(ab,c,0,c===0?'nom':'acc'),N(g,1,gk,'genso')],en:full,k:0};
    }
    if(where.part===s){
      const n=R(pool.filter(x=>x.tag==='p'&&!x.sgOnly));if(!n)throw 'EMPTY';used.push(n);
      const qn=R([['mult','many','multus -a -um : much; (plural) many','multus'],['pauc','few','paucī -ae -a : few','paucī']]);
      const qt={la:d12(qn[0],c,1,n.g),lemma:qn[3],cids:[c===0?'nom':'acc'],concept:CASES[c]+' plural '+GN[n.g],forms:[],vocab:qn[2]};
      const abl=nf(n,4,1),gt=N(n,1,1,'genpart');gt.alt=/^[aeiouāēīōūh]/i.test(abl)?['ex '+abl]:['ē '+abl,'ex '+abl];
      return{toks:[qt,gt],en:`${qn[1]} of ${npE(n,1)}`,k:1};
    }
    if(where.mat===s){
      const n=R(pool.filter(x=>MAT_OBJ.includes(x.nom))),m=R(MATS());if(!n||!m)throw 'EMPTY';used.push(n);const k0=kOf(n);
      const full=`${npE(n,k0)} of ${m.n.e}`;ALT.push([full,...m.adj.map(a=>`the ${a} ${k0?n.ep:n.e}`)]);
      return{toks:[N(n,c,k0,c===0?'nom':'acc'),N(m.n,1,0,'genmat')],en:full,k:k0};
    }
    if(where.appos===s){
      const nm=R(NOUNS.filter(n=>n.tag==='n'&&!used.includes(n)));used.push(nm);
      const ap=R(PEOPLE.filter(n=>n.g===nm.g&&!used.includes(n)));used.push(ap);
      toks=[N(nm,c,0,cid),N(ap,c,0,'appos')];toks[1].concept+=' (appositive)';en=`${nm.e}, ${npE(ap,0)},`;k=0;
    }else{
      const n=R(pool);used.push(n);k=o.k!=null&&s==='s'&&!n.sgOnly?o.k:kOf(n);toks=[N(n,c,k,cid)];let aE='';
      if(where.adj===s||where.tricky===s){const a=adjFor(n,['12']);if(a){toks.push(A(a,c,k,n.g,[n.tricky?'tricky':'adj12']));aE=a.e;}}
      en=npE(n,k,aE);
      if(where.gen===s){
        const g=R(PEOPLE.filter(x=>!used.includes(x)&&(!set.has('gdat')||(x.d==='1'&&!x.pl))));if(!g)throw 'EMPTY';used.push(g);
        const gk=set.has('gdat')?0:kOf(g),plain=en,full=`${en} of ${npE(g,gk)}`;toks.push(N(g,1,gk,'genposs'));
        ALT.push([full,`${possE(g,gk)} ${aE?aE+' ':''}${k?n.ep:n.e}`]);en=full;
        if(g.d==='1'&&gk===0&&s==='o')GDAT={full,plain,forE:'for '+npE(g,0)};
      }
    }
    if(where.que===s){
      const n2=R(poolFor(s).filter(n=>!used.includes(n)));used.push(n2);const k2=kOf(n2);
      toks.push(Object.assign(W('et','et, -que : and'),{et:1}),N(n2,c,k2,'que'));en=`${en} and ${npE(n2,k2)}`;k=1;
    }
    return{toks,en,k};
  }
  let S0=null,p=o.p,sE;
  if(!o.noSubj){
    const free=!Object.values(where).includes('s');
    if(o.pron!==false&&free&&chance(.3)){p=R([0,1,3,4,5]);sE=PRON[p];}
    else{S0=mk('s',o.subjCase||0,(o.subjCase||0)===0?'nom':'indst');p=S0.k?5:2;sE=S0.en;}
  }else sE=p==null?'':PRON[p];
  const O0=tr?mk('o',3,'acc'):null;
  const adjs=[],add=(toks,en,alts)=>{adjs.push({toks,en});if(alts)ALT.push([en,...alts]);};
  const person=()=>{const n=R(PEOPLE.filter(x=>!used.includes(x)));if(!n)throw 'EMPTY';used.push(n);return n};
  const plc=(tags,ex)=>{const n=R(NOUNS.filter(x=>tags.includes(x.tag)&&!used.includes(x)&&(!ex||ex(x))));if(!n)throw 'EMPTY';used.push(n);return n};
  const towns=pl=>NOUNS.filter(n=>n.tag==='z'&&!used.includes(n)&&(pl==null||!!n.pl===pl));
  let townRole=null;
  if(set.has('town')){const r=['placeTo','placeFrom','placeWhere','sep'].filter(x=>set.has(x)&&(x!=='placeWhere'||towns(true).length)&&(x!=='sep'||v.inf==='prohibēre'));townRole=r.length?R(r):null;if(!townRole)missing.push('town');}
  const townTok=(c,pl)=>{const n=R(towns(pl));used.push(n);const t=N(n,c,n.pl?1:0,'town');t.concept+=' (town, no preposition)';return[t,n]};
  if(set.has('dat')||set.has('datref')){const d=set.has('dat'),n=person(),k=num(n),e=npE(n,k);
    add([N(n,2,k,d?'dat':'datref')],(d?'to ':'for ')+e,[(d?'for ':'to ')+e]);}
  if(set.has('placeTo')){
    if(townRole==='placeTo'){const[t,n]=townTok(3);add([t],'to '+n.e,['toward '+n.e,'towards '+n.e]);}
    else{const n=plc('lc'),k=num(n),into=INTO.includes(n.nom)&&chance(.4),nt=N(n,3,k,'placeTo'),e=npE(n,k);
      add([prepW(PREPS[into?1:0],nt.la),nt],(into?'into ':'to ')+e,into?null:['toward '+e,'towards '+e]);}
  }
  if(set.has('placeFrom')){
    if(townRole==='placeFrom'){const[t,n]=townTok(4);add([t],'from '+n.e);}
    else{const n=plc('lc'),k=num(n),ex=INTO.includes(n.nom)&&chance(.4),nt=N(n,4,k,'placeFrom'),e=npE(n,k);
      add([prepW(PREPS[ex?6:7],nt.la),nt],(ex?'out of ':'from ')+e,ex?['from '+e]:null);}
  }
  if(set.has('placeWhere')){
    if(townRole==='placeWhere'){const[t,n]=townTok(4,true);add([t],'in '+n.e,['at '+n.e]);}
    else{const n=plc('lc'),k=num(n),nt=N(n,4,k,'placeWhere'),e=npE(n,k);add([prepW(PREPS[10],nt.la),nt],'in '+e,['on '+e,'at '+e]);}
  }
  if(set.has('sep')){
    if(v.inf==='līberāre'){const n=R(['culpa','cūra','perīculum'].map(nn).filter(x=>!used.includes(x)&&NOUNS.includes(x)));used.push(n);add([N(n,4,0,'sep')],'from '+n.e);}
    else if(townRole==='sep'){const[t,n]=townTok(4);add([t],'from '+n.e,['away from '+n.e]);}
    else{const n=plc('lc'),k=num(n),nt=N(n,4,k,'sep'),e=npE(n,k);add([prepW(PREPS[7],nt.la),nt],'from '+e);}
  }
  if(set.has('means')){const n=R(MEANS[v.inf].map(nn).filter(x=>!used.includes(x)&&NOUNS.includes(x)));used.push(n);const k=num(n),e=npE(n,k);add([N(n,4,k,'means')],'with '+e,['by '+e,'by means of '+e]);}
  if(set.has('accomp')){const n=person(),k=num(n),nt=N(n,4,k,'accomp'),e=npE(n,k);add([W('cum','cum (+abl) : with'),nt],'with '+e,v.inf==='pugnāre'?['against '+e]:null);}
  if(set.has('manner')){const n=R(['gaudium','cūra','īra'].map(nn).filter(x=>!used.includes(x)&&NOUNS.includes(x)));used.push(n);add([W('cum','cum (+abl) : with'),N(n,4,0,'manner')],'with '+n.e);}
  if(set.has('cause')){const n=R(['gaudium','īra'].map(nn).filter(x=>x&&!used.includes(x)&&NOUNS.includes(x)));if(!n)throw 'EMPTY';used.push(n);add([N(n,4,0,'cause')],'from '+n.e,['because of '+n.e,'out of '+n.e,'through '+n.e]);}
  if(vc==='pass'&&set.has('agent')){const n=person(),k=num(n),nt=N(n,4,k,'agent');add([prepW(AB,nt.la),nt],'by '+npE(n,k));}
  let advT=null,advE='';
  if(set.has('adv')){
    const opts=[...ADJ.filter(a=>a.adv&&a.ty==='12').map(a=>[a.adv,a.adve,adjV(a)]),...FIXADV.map(([l,e])=>[l,e,`${l} : ${e}`]),...(t==='fut'&&!o.inf?[['crās','tomorrow','crās : tomorrow']]:[])];
    const[l,e,vo]=R(opts);advT={la:l,lemma:l,cids:['adv'],concept:'adverb',forms:[],vocab:vo};advE=e;
  }
  const g=S0&&S0.toks[0]?nn(S0.toks[0].lemma)?.g||'m':'m';
  const verbT=o.inf?INF(v,vc==='pass'?'pp':'pa','m',0,o.inf):V(v,t,vc,p==null?2:p,g);
  if(set.has('medsum')){
    const PL=['placeTo','placeWhere','placeFrom'];let ok=false;
    for(const a of adjs){const i=a.toks.findIndex(t=>t.cids&&PL.includes(t.cids[0])&&/singular/.test(t.concept||''));if(i<0)continue;
      const nt=a.toks[i],n=nn(nt.lemma);if(!n||!'lct'.includes(n.tag))continue;
      const d=medsumDeco(n,nt.cids[0]==='placeTo'?3:4);a.toks.splice(i,0,d.tok);const en0=a.en;a.en=a.en.replace(d.base,d.phrase);
      ALT.push([a.en,...d.alts.map(x=>en0.replace(d.base,x))]);ok=true;break}
    if(!ok&&O0&&O0.toks.length===1&&/singular/.test(O0.toks[0].concept||'')){const n=nn(O0.toks[0].lemma);
      if(n&&'lct'.includes(n.tag)){const d=medsumDeco(n,3);O0.toks.unshift(d.tok);O0.en=d.phrase;ALT.push([d.phrase,...d.alts]);ok=true}}
    if(!ok)missing.push('medsum');
  }
  return{v,vc,t,p,sE,S0,O0,adjs,advT,advE,verbT,missing,objE:O0?O0.en:'',restE:[O0?O0.en:'',...adjs.map(a=>a.en)].filter(Boolean).join(' ')};
}
/* English: put the adverb at the end, after the subject, or first */
function withAdv(c,sE,vp,rest){
  rest=rest==null?c.restE:rest;const out=[tidy(`${sE} ${vp} ${rest} ${c.advE}`)];
  if(c.advE){out.push(tidy(`${sE} ${c.advE} ${vp} ${rest}`),tidy(`${c.advE}, ${sE} ${vp} ${rest}`));}
  return out;
}
const lat=c=>[...(c.S0?c.S0.toks:[]),...(c.advT?[c.advT]:[]),...c.adjs.flatMap(a=>a.toks),...(c.O0?c.O0.toks:[])];
function latinOf(tokens,o={}){
  const out=[];let queNext=false,first=true;
  for(const t of tokens){
    if(t.et&&o.que){queNext=true;continue;}
    let w=t.la;if(queNext){w=w.replace(/^(\S+)/,'$1que');queNext=false;}
    if(o.ne&&first&&!t.isVoc){w=w.replace(/^(\S+)/,'$1ne');first=false;}
    out.push(w+(t.post||''));
  }
  return out.join(' ');
}
function mkVoc(used){
  const pool=[...NOUNS.filter(n=>n.tag==='n'),...PEOPLE.filter(n=>n.d==='2'&&n.g==='m'),...PEOPLE].filter(n=>!used.includes(n)&&n.nom!=='deus');
  const n=R(pool);used.push(n);const k=n.tag==='n'?0:num(n),t=N(n,5,k,'voc');t.post=',';t.isVoc=1;
  return{tok:t,en:(n.tag==='n'?n.e:k?n.ep:n.e)+',',p:k?4:1};
}
const FRAMEGEN={
  stmt(set){const used=[],vo=set.has('voc')?mkVoc(used):null,c=bClause(set,{used,noSubj:!!vo,p:vo?vo.p:null});
    if(!c||c.missing.length)return null;
    const vE=engV(c.v,c.t,c.vc,c.p),ens=withAdv(c,c.sE,vE).map(e=>(vo?vo.en+' ':'')+e);
    return{tokens:[...(vo?[vo.tok]:[]),...lat(c),c.verbT],ens,end:'.'};},
  ne(set){const used=[],vo=set.has('voc')?mkVoc(used):null,c=bClause(set,{used,noSubj:!!vo,p:vo?vo.p:null});
    if(!c||c.missing.length)return null;
    const{v,t,vc,p,sE}=c,be=['am','are','is','are','are','are'][p],dO=p===2?'does':'do',ww=p===0||p===2?'was':'were';
    const heads=t==='impf'?(vc==='act'?[`${ww} ${sE} ${v.ing}`,`did ${sE} ${v.e}`,`did ${sE} use to ${v.e}`]:[`${ww} ${sE} being ${v.pp}`,`${ww} ${sE} ${v.pp}`]):vc==='act'?(t==='fut'?[`will ${sE} ${v.e}`,`shall ${sE} ${v.e}`]:[`${dO} ${sE} ${v.e}`,`${be} ${sE} ${v.ing}`]):(t==='fut'?[`will ${sE} be ${v.pp}`]:[`${be} ${sE} ${v.pp}`,`${be} ${sE} being ${v.pp}`]);
    const ens=heads.flatMap(h=>{const r=[tidy(`${h} ${c.restE} ${c.advE}`)];if(c.advE)r.push(tidy(`${c.advE}, ${h} ${c.restE}`));return r}).map(e=>(vo?vo.en+' ':'')+e);
    const tokens=[...(vo?[vo.tok]:[]),c.verbT,...lat(c)];
    return{tokens,ens,end:'?',ne:1,extraVocab:['-ne : added to the first word to ask a yes or no question']};},
  quis(set){const used=[],vo=set.has('voc')?mkVoc(used):null,c=bClause(set,{used,noSubj:true,p:2});
    if(!c||c.missing.length)return null;
    const ens=withAdv(c,'who',engV(c.v,c.t,c.vc,2)).map(e=>(vo?vo.en+' ':'')+e);
    return{tokens:[...(vo?[vo.tok]:[]),W('quis','quis : who?'),...lat(c),c.verbT],ens,end:'?'};},
  ci(set){const used=[],vo=set.has('voc')?mkVoc(used):null,c=bClause(set,{used,inf:'inf',noSubj:!!vo,p:vo?vo.p:null,t:'pres'});
    if(!c||c.missing.length)return null;
    const fut=set.has('fut'),past=!fut&&set.has('impf'),hv=R(fut?['dēbēre','cupere','amāre']:['dēbēre','cupere','solēre','amāre']),p=c.p,be=['am','are','is','are','are','are'][p],ww=p===0||p===2?'was':'were',s=x=>p===2?s3(x):x;
    const forms=past?{dēbēre:['had to',`${ww} supposed to`,'used to have to'],cupere:['wanted to',`${ww} wanting to`,'wished to'],solēre:['used to',`${ww} accustomed to`],amāre:['loved to','liked to','used to love to']}[hv]:{dēbēre:fut?['will have to']:['must',s('have')+' to','ought to','should'],cupere:fut?['will want to','will wish to']:[s('want')+' to',(p===2?'wishes':'wish')+' to',s('desire')+' to'],solēre:[`${be} accustomed to`,`${be} used to`],amāre:fut?['will love to','will like to']:[s('love')+' to',s('like')+' to']}[hv];
    ALT.push(forms);
    const head=Object.assign(V(vb(hv),fut?'fut':past?'impf':'pres','act',p),{vocab:{dēbēre:'dēbēre, -eō : (+infinitive) to have to, must; to owe',cupere:'cupere, -iō : to want, wish, desire',solēre:'solēre, -eō : to be accustomed to',amāre:'amāre, -ō : to love'}[hv]});
    const infE=c.vc==='pass'?'be '+c.v.pp:c.v.e,ens=withAdv(c,c.sE,`${forms[0]} ${infE}`).map(e=>(vo?vo.en+' ':'')+e);
    return{tokens:[...(vo?[vo.tok]:[]),...lat(c),c.verbT,head],ens,end:'.'};},
  is(set){const used=[],vo=set.has('voc')?mkVoc(used):null,c=bClause(set,{used,inf:'indst',subjCase:3,pron:false,t:'pres'});
    if(!c||c.missing.length||!c.S0)return null;
    const HEADS=[['dīcere'],['putāre'],['vidēre'],['audīre'],['scīre'],['crēdere'],['spērāre'],['nūntiāre'],['comperīre']].map(x=>vb(x[0])),hv=R(HEADS),ht=set.has('fut')?'fut':set.has('impf')?'impf':'pres';
    let hp,hS=null,hE;
    if(vo){hp=vo.p;hE=PRON[hp];}else if(chance(.5)){hp=R([0,1,2,3,4,5]);hE=PRON[hp];if(hp===2)ALT.push(['he','she']);}
    else{const n=R(PEOPLE.filter(x=>!used.includes(x)));used.push(n);const k=num(n);hS=N(n,0,k,'nom');hp=k?5:2;hE=npE(n,k);}
    ALT.push([' that ',' ']);
    const head=V(hv,ht,'act',hp),inner=withAdv(c,c.S0.en,engV(c.v,ht==='impf'?'impf':'pres',c.vc,c.S0.k?5:2));
    const ens=inner.map(e=>`${vo?vo.en+' ':''}${hE} ${engV(hv,ht,'act',hp)} that ${e}`);
    c.S0.toks[0].concept+=' (subject of the infinitive)';
    return{tokens:[...(vo?[vo.tok]:[]),...(hS?[hS]:[]),head,...lat(c),c.verbT],ens,end:'.'};},
  imp(set){
    const used=[],vo=set.has('voc')||chance(.6)?mkVoc(used):null,pl=vo?vo.p===4:chance(.5),p=pl?4:1;
    const c=bClause(set,{used,noSubj:true,p,t:'pres'});if(!c||c.missing.length)return null;
    const v=c.v,pas=c.vc==='pass',neg=chance(.25);
    if(pas&&!v.obj.includes('p'))return null;
    const la=pas?(pl?vf(v,'pres','pass',4):v.inf):pl?v.stem+{'1d':'ate',1:'āte',2:'ēte',3:'ite','3i':'ite',4:'īte'}[v.cj]:['dūcere','dīcere'].includes(v.inf)?v.inf.slice(0,-3):v.stem+{'1d':'ā',1:'ā',2:'ē',3:'e','3i':'e',4:'ī'}[v.cj];
    const it={la,lemma:dispInf(v),cids:['imp'],concept:`${pas?'passive':'active'} imperative, ${pl?'plural':'singular'}`,forms:[],vocab:verbV(v)};
    const vp=(neg?"don't ":'')+(pas?'be '+v.pp:v.e),who=vo?'':` (to ${pl?'more than one person':'one person'})`;
    const ens=withAdv(c,'',vp).map(e=>(vo?vo.en+' ':'')+e+who);
    const nt=W('nē','nē (+imperative) : don’t (in poetry)'),head=vo?[vo.tok]:[];
    const tokens=[...head,...(neg?[nt]:[]),...lat(c),it];
    const altTokens=neg?[[...head,...lat(c),W(pl?'nōlīte':'nōlī'),W(pas?passInf(v):v.inf)]]:undefined;
    return{tokens,ens,end:'!',altTokens};},
  condP(set){return cond(set,'pres')},
  condF(set){return cond(set,'fut')},
  gap(set){
    if(set.has('pass'))set.add('agent');
    const used=[],c1=bClause(set,{used,pron:false});if(!c1||c1.missing.length||!c1.S0||(!c1.O0&&c1.vc!=='pass'))return null;
    const set2=new Set([...set].filter(x=>['pass','agent','fut','impf'].includes(x)));
    const c2=bClause(set2,{used,v:c1.v,pron:false,k:c1.S0.k,t:c1.t});if(!c2||!c2.S0||c2.S0.k!==c1.S0.k)return null;
    const vE=engV(c1.v,c1.t,c1.vc,c1.p),r1=c1.restE,r2=c2.restE,a=c1.advE?' '+c1.advE:'';
    const ens=[`${c1.sE} ${vE} ${r1}${a}, ${c2.sE} ${r2}`,`${c1.sE} ${vE} ${r1}${a} and ${c2.sE} ${r2}`,`${c1.sE} ${vE} ${r1}${a}, and ${c2.sE} ${vE} ${r2}`,`${c1.sE} ${vE} ${r1}${a} and ${c2.sE} ${vE} ${r2}`].map(tidy);
    const l1=lat(c1),l2=lat(c2),back=chance(.5);
    let tokens;
    if(back){l1[l1.length-1]=Object.assign({},l1[l1.length-1],{post:','});tokens=[...l1,...l2,c1.verbT];}
    else{tokens=[...l1,Object.assign({},c1.verbT,{post:','}),...l2];}
    const vt2=Object.assign({},c1.verbT,{post:''});
    return{tokens,ens,end:'.',altTokens:[[...l1,c1.verbT,...l2,vt2],[...l1,c1.verbT,W('et'),...l2,vt2],[...l1,W('et'),...l2,c1.verbT]]};
  }
};
function cond(set,t){
  const A=new Set(),Bs=new Set(),groups=[['town','placeTo','placeFrom','placeWhere','sep'],['pass','agent']];
  const done=new Set();
  for(const x of set){if(done.has(x)||x==='voc')continue;const g=groups.find(g=>g.includes(x))||[x],to=chance(.5)?A:Bs;for(const y of g)if(set.has(y)){to.add(y);done.add(y);}}
  const used=[],vo=set.has('voc')?mkVoc(used):null;
  const a=bClause(A,{used,t}),b=bClause(Bs,{used,t,noSubj:!!vo,p:vo?vo.p:null});
  if(!a||!b||a.missing.length||b.missing.length||a.v===b.v)return null;
  const pE=engV(a.v,'pres',a.vc,a.p);
  if(t==='fut'){const g=ALT[ALT.length-1];if(g&&g[0]===pE)g.push(a.vc==='act'?'will '+a.v.e:'will be '+a.v.pp);}
  const prot=withAdv(a,a.sE,pE),apo=withAdv(b,b.sE,engV(b.v,t,b.vc,b.p));
  const ens=prot.flatMap(x=>apo.map(y=>`${vo?vo.en+' ':''}if ${x}, ${y}`)).slice(0,6);
  const av=Object.assign({},a.verbT,{post:','});
  return{tokens:[...(vo?[vo.tok]:[]),W('sī','sī : if'),...lat(a),av,...lat(b),b.verbT],ens,end:'.'};
}
function B(frame,ings,must){
  let list=[...ings];const only=FRAME_ONLY[frame],not=FRAME_NOT[frame]||[];
  if(only)list=list.filter(x=>only.includes(x));list=list.filter(x=>!not.includes(x));
  if(list.includes('fut')&&list.includes('impf')){const drop=must==='fut'?'impf':must==='impf'?'fut':R(['fut','impf']);list=list.filter(x=>x!==drop)}
  for(let tries=0;tries<60;tries++){
    const set=new Set(list);GDAT=null;
    if(set.has('agent'))set.add('pass');
    if(set.has('town')&&!['placeTo','placeFrom','placeWhere','sep'].some(x=>set.has(x)))set.add(R(['placeTo','placeFrom']));
    if(set.has('medsum')&&!['placeTo','placeFrom','placeWhere'].some(x=>set.has(x))&&chance(.6))set.add(R(['placeWhere','placeTo']));
    const r=FRAMEGEN[frame](set);
    if(r){
      const q=S(r.tokens,r.ens[0],r.end);q.enAlt=r.ens.slice(1);q.altTokens=r.altTokens;q.ne=r.ne;q.extraVocab=r.extraVocab;
      q.and=r.tokens.some(t=>t.et);q.display=latinOf(r.tokens,{ne:r.ne,que:q.and&&chance(.5)});q.built=[frame,...list].filter(x=>x!=='gdat');
      if(GDAT&&!set.has('dat')&&!set.has('datref')){const g=GDAT;q.enAlt.push(...r.ens.filter(e=>e.includes(g.full)).map(e=>tidy(e.replace(g.full,g.plain)+' '+g.forE)));q.gdat=1}
      return q;
    }
    if(tries>8&&tries%4===0&&list.length>1){const drop=list.map((x,i)=>i).filter(i=>list[i]!==must);if(drop.length)list.splice(R(drop),1);}
    if(tries>40)list=must&&list.includes(must)?[must]:[];
  }
  return gTrans();
}
const fitsFrame=(f,x)=>{const only=FRAME_ONLY[f],not=FRAME_NOT[f]||[];return(!only||only.includes(x))&&!not.includes(x)};
/* focus: every sentence uses at least one focus item (a main type or an inside item); everything else comes only from what is selected */
function makeBuilt(frames,ings,per,focus){
  const fF=[...frames].filter(f=>focus&&focus.has(f)),fI=[...ings].filter(x=>focus&&focus.has(x));
  const none=!fF.length&&!fI.length,hit=q=>none||!!q.built&&(fF.includes(q.built[0])||q.built.slice(1).some(x=>fI.includes(x)));
  let q=null;
  for(let a=0;a<12;a++){
    ALT=[];let frame=R([...frames]),must=null;
    const opts=[...fF.map(f=>['f',f]),...fI.map(x=>['i',x])];
    if(opts.length){const [k,v]=R(opts);
      if(k==='f')frame=v;
      else{must=v;const ok=[...frames].filter(f=>fitsFrame(f,v));if(!ok.length)continue;if(!fitsFrame(frame,v))frame=R(ok);}}
    let pool=[...ings].filter(x=>x!==must).sort(()=>Math.random()-.5);
    const n=per==='all'?pool.length+(must?1:0):Math.min(pool.length+(must?1:0),+per);
    if(must)pool=[must,...pool];
    q=B(frame,pool.slice(0,n),must);q.alts=ALT;
    if(hit(q))break;
  }
  q=q||(ALT=[],B(R([...frames]),[]));
  const frame=q.built?q.built[0]:R([...frames]),fn=FRAMES.find(f=>f[0]===frame)[1],used=(q.built||[]).slice(1).filter(x=>x!=='pass'||!q.built.includes('agent'));
  q.topic={id:'built',name:fn+(used.length?' + '+used.map(ingName).join(' + '):'')};
  return q;
}

/* id, level, group, name, generator */
const TOPICS=[
['nom','I','Cases','Nominative: subject',()=>gTrans()],
['acc','I','Cases','Accusative: direct object',()=>gTrans()],
['placeTo','I','Cases','Accusative of place to which',()=>B('stmt',['placeTo'])],
['dat','I','Cases','Dative: indirect object (to)',()=>B('stmt',['dat'])],
['datref','I','Cases','Dative of reference (for)',()=>B('stmt',['datref'])],
['placeFrom','I','Cases','Ablative of place from which',()=>B('stmt',['placeFrom'])],
['sep','I','Cases','Ablative of separation',()=>B('stmt',['sep'])],
['means','I','Cases','Ablative of means',()=>B('stmt',['means'])],
['accomp','I','Cases','Ablative of accompaniment (cum)',()=>B('stmt',['accomp'])],
['manner','I','Cases','Ablative of manner (cum)',()=>B('stmt',['manner'])],
['placeWhere','I','Cases','Ablative of place where',()=>B('stmt',['placeWhere'])],
['cause','I','Cases','Ablative of cause',()=>B('stmt',['cause'])],
['agent','I','Cases','Ablative of personal agent',()=>B('stmt',['agent'])],
['town','I','Cases','Towns and small islands (no preposition)',()=>B('stmt',['town'])],
['voc','I','Cases','Vocative',()=>B(R(['stmt','ne']),['voc'])],
['appos','I','Cases','Apposition',()=>B('stmt',['appos'])],
['gen','I','Genitive','Genitive of possession',()=>B('stmt',['genposs'])],
['gendat','I','Genitive','Genitive or dative? (-ae)',()=>B('stmt',['genposs','gdat'])],
['genpart','I','Genitive','Partitive genitive (part and whole)',()=>B('stmt',['genpart'])],
['genso','I','Genitive','Subjective and objective genitive',()=>B('stmt',['genso'])],
['genmat','I','Genitive','Genitive of material',()=>B('stmt',['genmat'])],
['d1','I','Nouns and adjectives','1st declension',()=>gDecl('1')],
['d2','I','Nouns and adjectives','2nd declension',()=>gDecl('2')],
['adj12','I','Nouns and adjectives','Noun-adjective agreement',()=>B('stmt',['adj'])],
['tricky','I','Nouns and adjectives','Nouns that look like a different gender',()=>B('stmt',['tricky'])],
['adv','I','Nouns and adjectives','Adverbs',()=>B('stmt',['adv'])],
['medsum','I','Nouns and adjectives','medius and summus (the middle of, the top of)',()=>B('stmt',['medsum'])],
['d3','I','Nouns and adjectives','3rd declension',()=>gDecl('3')],
['pa1','I','Verbs','1st conjugation: present',()=>gAct('pres','1')],
['pa2','I','Verbs','2nd conjugation: present',()=>gAct('pres','2')],
['pa3','I','Verbs','3rd conjugation: present',()=>gAct('pres','3')],
['pa3i','I','Verbs','3rd -iō conjugation: present',()=>gAct('pres','3i')],
['pa4','I','Verbs','4th conjugation: present',()=>gAct('pres','4')],
['ppas','I','Verbs','Present passive, all conjugations',()=>gPass({t:'pres',pron:1})],
['fut','I','Verbs','Future active, all conjugations',()=>gAct('fut')],
['fpas','I','Verbs','Future passive, all conjugations',()=>gPass({t:'fut',pron:1})],
['impf','I','Verbs','Continuous past (imperfect) active',()=>gAct('impf')],
['ipas','I','Verbs','Continuous past (imperfect) passive',()=>gPass({t:'impf',pron:1})],
['inf','I','Verbs','Complementary infinitive',()=>B('ci',[])],
['pinf','I','Verbs','Passive infinitive',()=>B('ci',['pass'])],
['sum','I','Verbs','sum and possum',gSum],
['ques','I','Sentence types','Questions: -ne and quis',()=>B(R(['ne','quis']),[])],
['conj','I','Sentence types','And: et and -que',()=>B('stmt',['que'])],
['gap','I','Sentence types','Gapping',()=>B('gap',[])],
['indst','I','Sentence types','Indirect statement',()=>B('is',chance(.35)?['pass']:[])],
['indst2','I','Sentence types','Indirect statement II: with past tenses',()=>B('is',chance(.35)?['impf','pass']:['impf'],'impf')],
['pcond','I','Sentence types','Open conditions: present',()=>B('condP',[])],
['fcond','I','Sentence types','Open conditions: future',()=>B('condF',[])],
['perf','I','Verbs','Perfect active',()=>gAct('perf')],
['imp','I','Verbs','Commands: the imperative (active and passive)',()=>B('imp',chance(.3)?['pass']:[])],
['plup','II','Verbs','Pluperfect and future perfect active',()=>gAct(R(['plup','plup','futp']))],
['perfpas','II','Verbs','Perfect, pluperfect, future perfect passive',()=>gPass({t:R(['perf','perf','plup','futp'])})],
['dep','II','Verbs','Deponent verbs',()=>gTrans({v:R(DEPS),t:R(['pres','impf','fut','perf']),pron:1})],
['irr','II','Verbs','eō, ferō, volō, nōlō',gIrr],
['ppart','II','Verbs','Participles: present active and perfect passive',gPart],
['datposs','II','Cases','Dative of possession',gDatPoss],
['d45','II','Nouns and pronouns','4th and 5th declension',()=>gDecl('45')],
['demo','II','Nouns and pronouns','hic and ille',gDemo],
['rel','II','Nouns and pronouns','Relative pronoun quī, quae, quod',gRel],
['adj3','II','Adjectives and adverbs','3rd declension adjectives',()=>gAdj(['32','31','33'],'adj3')],
['comp','II','Adjectives and adverbs','Comparatives',()=>gCompare('comp')],
['sup','II','Adjectives and adverbs','Superlatives',()=>gCompare('sup')],
['sjpres','III','Subjunctive forms','Present subjunctive',()=>gForm(['spres'])],
['sjimpf','III','Subjunctive forms','Imperfect subjunctive',()=>gForm(['simpf'])],
['sjperf','III','Subjunctive forms','Perfect and pluperfect subjunctive',()=>gForm(['sperf','splup'])],
['hort','III','Subjunctive clauses','Hortatory and jussive',gHort],
['purpose','III','Subjunctive clauses','Purpose clauses',gPurpose],
['result','III','Subjunctive clauses','Result clauses',gResult],
['indcmd','III','Subjunctive clauses','Indirect commands',gIndCmd],
['indq','III','Subjunctive clauses','Indirect questions',gIndQ],
['cumcl','III','Subjunctive clauses','Cum clauses',gCum],
['fear','III','Subjunctive clauses','Fearing clauses',gFear],
['cond','III','Subjunctive clauses','Conditionals',gCond],
['indst3','III','Infinitives and participles','Indirect statement: all infinitive tenses',gIndSt],
['abs','III','Infinitives and participles','Ablative absolute',gAbs],
['pperi','III','Infinitives and participles','Passive periphrastic and dative of agent',gPeri],
['gerv','III','Infinitives and participles','Gerundive of purpose: ad and causā',gGerv],
['ablcomp','III','Cases','Ablative of comparison',()=>gCompare('ablcomp')],
['relpurp','AP','Syntax in Vergil and Pliny','Relative clause of purpose',gRelPurp],
['supine','AP','Syntax in Vergil and Pliny','Supine of purpose',gSupine],
['ddat','AP','Syntax in Vergil and Pliny','Double dative',gDdat],
['partgen','AP','Syntax in Vergil and Pliny','Partitive genitive',gPartGen],
['sync','AP','Reading poetry','Syncopated and -ēre perfects',gSync],
['devices','AP','Reading poetry','Literary devices in the Aeneid',gDevice]
].map(([id,level,group,name,gen])=>({id,level,group,name,gen}));

/* how each topic maps onto the sentence builder, so a focus topic can be mixed with other selected topics */
const TOPIC_PLAN={placeTo:{ing:['placeTo']},dat:{ing:['dat']},datref:{ing:['datref']},placeFrom:{ing:['placeFrom']},sep:{ing:['sep']},means:{ing:['means']},accomp:{ing:['accomp']},manner:{ing:['manner']},placeWhere:{ing:['placeWhere']},agent:{ing:['agent']},town:{ing:['town']},voc:{ing:['voc']},appos:{ing:['appos']},cause:{ing:['cause']},
 gen:{ing:['genposs']},gendat:{ing:['genposs','gdat']},genpart:{ing:['genpart']},genso:{ing:['genso']},genmat:{ing:['genmat']},adj12:{ing:['adj']},tricky:{ing:['tricky']},adv:{ing:['adv']},conj:{ing:['que']},fut:{ing:['fut']},ppas:{ing:['pass']},fpas:{ing:['pass','fut']},
 inf:{frame:'ci'},pinf:{frame:'ci',ing:['pass']},ques:{frame:'ne|quis'},gap:{frame:'gap'},indst:{frame:'is'},imp:{frame:'imp'},medsum:{ing:['medsum']},indst2:{frame:'is',ing:['impf']},impf:{ing:['impf']},ipas:{ing:['pass','impf']},pcond:{frame:'condP'},fcond:{frame:'condF'}};
/* every sentence is about one focus topic; other selected topics may join in */
function makeFocused(selected,focus){
  const foc=[...focus].filter(x=>selected.has(x));if(!foc.length)return makeQuestion(selected,false);
  const fid=R(foc),ft=TOPICS.find(t=>t.id===fid),plan=TOPIC_PLAN[fid];
  const extras=[...selected].filter(x=>x!==fid&&TOPIC_PLAN[x]&&TOPIC_PLAN[x].ing&&!TOPIC_PLAN[x].frame);
  if(plan&&extras.length&&chance(.65)){
    const ex=TOPIC_PLAN[R(extras)],frame=plan.frame?R(plan.frame.split('|')):'stmt',must=plan.ing?plan.ing[0]:null;
    for(let a=0;a<6;a++){
      ALT=[];const q=B(frame,[...new Set([...(plan.ing||[]),...ex.ing])],must);q.alts=ALT;
      if(q.built&&q.built[0]===frame&&(!must||q.built.includes(must))){
        const extraNames=q.built.slice(1).filter(x=>!(plan.ing||[]).includes(x)&&!(x==='pass'&&q.built.includes('agent'))).map(ingName);
        q.topic=Object.assign({},ft,{name:ft.name+(extraNames.length?' + '+extraNames.join(' + '):'')});return q;
      }
    }
  }
  return makeQuestion(new Set([fid]),false);
}
function makeQuestion(selected,mixed){
  ALT=[];const pickId=R([...selected]),topic=TOPICS.find(t=>t.id===pickId),q=topic.gen();q.alts=ALT;
  q.topic=topic;if(q.choice)return q;
  const can=q.tokens.filter(t=>t.cids&&t.cids.includes(topic.id));
  const focus=q.focus||R(can)||q.tokens.find(t=>t.cids&&t.cids.length);
  if(focus)focus.blank=true;
  if(mixed&&!q.form){
    const extra=q.tokens.filter(t=>!t.blank&&t.cids&&t.cids.some(c=>selected.has(c))).sort(()=>Math.random()-.5).slice(0,2);
    extra.forEach(t=>t.blank=true);
  }
  return q;
}
const stripM=s=>s.normalize('NFD').replace(/\u0304/g,'').normalize('NFC');
const normA=s=>s.toLowerCase().replace(/[.,!?;:]/g,'').trim().split(/\s+/).sort().join(' ');
function grade(tok,input){
  const u=normA(input);if(!u)return{ok:false,empty:true};
  const ans=[tok.la,...(tok.alt||[])].map(normA);
  if(ans.includes(u))return{ok:true};
  if(ans.some(a=>stripM(a)===stripM(u))){
    const clash=(tok.forms||[]).map(normA).some(f=>f===u&&!ans.includes(f));
    return clash?{ok:false,essential:true}:{ok:true,macron:true};
  }
  return{ok:false};
}
const wordsL=s=>s.toLowerCase().replace(/[.,!?;:"“”]/g,' ').trim().split(/\s+/).filter(Boolean);
function gradeLatin(q,input){
  let u=wordsL(input);if(!u.length)return{ok:false,empty:true};
  const sets=[q.tokens,...(q.altTokens||[])],base=new Set(sets.flat().flatMap(t=>wordsL(t.la)).map(stripM));
  if(q.ne){const i=u.findIndex(w=>/ne$/.test(w)&&w.length>3&&!base.has(stripM(w)));if(i<0)return{ok:false};u[i]=u[i].slice(0,-2);}
  if(q.and)u=u.flatMap(w=>/que$/.test(w)&&!base.has(stripM(w))?['et',w.slice(0,-3)]:[w]);
  const cands=sets.flatMap(ts=>{let c=[[]];for(const t of ts){const opts=[t.la,...(t.alt||[])];c=c.flatMap(x=>opts.map(o=>[...x,...wordsL(o)]));if(c.length>400)c=c.slice(0,400);}return c;});
  const key=a=>[...a].sort().join(' '),uk=key(u),us=key(u.map(stripM));
  if(cands.some(c=>key(c)===uk))return{ok:true};
  const c=cands.find(c=>key(c.map(stripM))===us);
  if(!c)return{ok:false};
  const forms=new Set(sets.flat().flatMap(t=>(t.forms||[]).flatMap(wordsL))),clash=u.filter(w=>!c.includes(w)&&forms.has(w));
  return clash.length?{ok:false,essential:clash}:{ok:true,macron:true};
}
const normE=s=>s.toLowerCase().replace(/\([^)]*\)/g,' ').replace(/[’‘]/g,"'").replace(/\bdon't\b/g,'do not').replace(/[^a-z' ]/g,' ').replace(/\b(the|a|an)\b/g,' ').replace(/\b(am|are|is) able to\b/g,'can').replace(/\b(was|were) able to\b/g,'could').replace(/\bought to\b/g,'should').replace(/\baway from\b/g,'from').replace(/\byou all\b|\by'all\b|\byou guys\b/g,'you').replace(/\b(his|her|their|its|my|our|your|o)\b/g,' ').replace(/\s+/g,' ').trim();
function gradeEnglish(q,input){
  const u=normE(input);if(!u)return{ok:false,empty:true};
  for(const base of [q.en,...(q.enAlt||[])]){
    let vs=[base];
    for(const g of q.alts||[]){const re=new RegExp('\\b'+g[0].replace(/[()]/g,'\\$&')+'(?![a-z])');vs=vs.flatMap(v=>re.test(v)?g.map(a=>v.replace(re,a)):[v]);if(vs.length>4000)vs=vs.slice(0,4000);}
    if(vs.some(v=>normE(v)===u))return{ok:true};
  }
  return{ok:false};
}
if(typeof module!=='undefined')module.exports={setLimit,makeBuilt,makeFocused,TOPIC_PLAN,FRAME_ONLY,FRAME_NOT,B,FRAMES,ING_ALL,latinOf,TOPICS,makeQuestion,grade,gradeLatin,gradeEnglish,NOUNS,VERBS,ADJ,nf,vf,af,cf};
