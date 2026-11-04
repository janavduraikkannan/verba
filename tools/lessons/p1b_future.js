const {tr,mc,ty,spot,parseQs,enQs,laQs}=require('./lib.js');
const a12=['laudāre','vocāre','vidēre','tenēre','spectāre','terrēre','amāre','docēre'];
const a34=['mittere','scrībere','custōdīre','iacere','invenīre','legere','pūnīre','regere','accipere','mūnīre'];
const all=['vocāre','vidēre','mittere','iacere','custōdīre','laudāre','tenēre','regere','accipere','pūnīre'];
module.exports={title:'Verbs: the future',lessons:[
{id:'fut12',title:'The future: 1st and 2nd conjugations',blurb:'Saying what will happen, with the -bi- signal.',body:`
Latin marks the **future** tense inside the verb, where English adds the word *will*. The 1st and 2nd conjugations put a signal between the stem and the ending: usually **-bi-**.

|~ portāre: future active
|Person|Singular|Plural|
|1st|portā[[bō]], I will carry|portā[[bimus]], we will carry|
|2nd|portā[[bis]], you will carry|portā[[bitis]], you (all) will carry|
|3rd|portā[[bit]], he/she/it will carry|portā[[bunt]], they will carry|

The stem keeps its vowel: *portā-*, *monē-*.

: monēbō = I will warn
: monēbunt = they will warn

The pattern of the signal is *bō, bi, bi, bi, bi, bu*. It has the same shape you learned for the 3rd conjugation present: *ō, i, i, i, i, u*.

?1

?2
`,q:[spot('Translate a 1st or 2nd conjugation future active verb into English',enQs(a12,'fut','act')),spot('Write a 1st or 2nd conjugation future active verb in Latin',laQs(a12,'fut','act'))]},

{id:'fut34',title:'The future: 3rd and 4th conjugations',blurb:'A different future signal, and a classic trap.',body:`
The other families don't use *-bi-*. Their future is marked with **-a-** in the "I" form and **-ē-** everywhere else (shortened to *-e-* before *-t* and *-nt*).

|~ Future active
|Person|3rd: dūcere|3rd -iō: capere|4th: audīre|
|I|dūc[[am]]|capi[[am]]|audi[[am]]|
|you|dūc[[ēs]]|capi[[ēs]]|audi[[ēs]]|
|he/she/it|dūc[[et]]|capi[[et]]|audi[[et]]|
|we|dūc[[ēmus]]|capi[[ēmus]]|audi[[ēmus]]|
|you all|dūc[[ētis]]|capi[[ētis]]|audi[[ētis]]|
|they|dūc[[ent]]|capi[[ent]]|audi[[ent]]|

The 3rd -iō and 4th conjugations keep their *i* in front of the signal.

# The trap

Look closely at these two forms:

: monet = he warns (2nd conjugation, present)
: dūcet = he will lead (3rd conjugation, future)

They end the same way, but they mean different things. An *e* before the ending means present in the 2nd conjugation and future in the 3rd. So you have to know a verb's family before you translate it.

?1

?2

?3
`,q:[mc('Decide whether a verb form is present or future from its conjugation',[
['*docet* (2nd conjugation) is...','present',['future'],'In the 2nd conjugation, -et is present.'],['*vincet* (3rd conjugation) is...','future',['present'],'In the 3rd conjugation, -et is future.'],['*vident* (2nd conjugation) is...','present',['future'],'In the 2nd conjugation, -ent is present.'],['*mittent* (3rd conjugation) is...','future',['present'],'In the 3rd conjugation, -ent is future.'],['*pūniet* (4th conjugation) is...','future',['present'],'4th conjugation present is *pūnit*, so *pūniet* is future.'],['*iacient* (3rd -iō conjugation) is...','future',['present'],'The present is *iaciunt*, so *iacient* is future.'],['*tenet* (2nd conjugation) is...','present',['future'],'In the 2nd conjugation, -et is present.'],['*legēmus* (3rd conjugation) is...','future',['present'],'The present is *legimus*, so *legēmus* is future.'],['*terrēmus* (2nd conjugation) is...','present',['future'],'The future would be *terrēbimus*.'],['*scrībet* (3rd conjugation) is...','future',['present'],'The present is *scrībit*.']]),
spot('Translate a 3rd, 3rd -iō or 4th conjugation future active verb into English',enQs(a34,'fut','act')),spot('Write a 3rd, 3rd -iō or 4th conjugation future active verb in Latin',laQs(a34,'fut','act'))]},

{id:'futpass',title:'The future passive',blurb:'Saying what will be done, in all conjugations.',body:`
The future passive combines what you already know: the future signals and the passive endings.

|~ Future passive
|Person|1st: portāre|2nd: monēre|3rd: dūcere|3rd -iō: capere|4th: audīre|
|I|portā[[bor]]|monē[[bor]]|dūc[[ar]]|capi[[ar]]|audi[[ar]]|
|you|portā[[beris]]|monē[[beris]]|dūc[[ēris]]|capi[[ēris]]|audi[[ēris]]|
|he/she/it|portā[[bitur]]|monē[[bitur]]|dūc[[ētur]]|capi[[ētur]]|audi[[ētur]]|
|we|portā[[bimur]]|monē[[bimur]]|dūc[[ēmur]]|capi[[ēmur]]|audi[[ēmur]]|
|you all|portā[[biminī]]|monē[[biminī]]|dūc[[ēminī]]|capi[[ēminī]]|audi[[ēminī]]|
|they|portā[[buntur]]|monē[[buntur]]|dūc[[entur]]|capi[[entur]]|audi[[entur]]|

Two spots need attention.

- In the 1st and 2nd conjugations, the "you" form is *-beris*, with an *e* instead of the *i*.
- The macron alone can separate two forms. *Dūceris* (short *e*) is present: *you are led*. *Dūcēris* (long *ē*) is future: *you will be led*.

Translate with *will be*: *portābitur*, he will be carried.

?1

?2
`,q:[spot('Translate a future passive verb into English',enQs(all,'fut','pass')),spot('Write a future passive verb in Latin',laQs(all,'fut','pass'))]},
]};
