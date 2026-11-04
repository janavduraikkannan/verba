/* ---------- Verba's lessons: the lesson text, every written question and the XP values ----------
   The mechanics are in js/lessons.js, which also explains the markup used in each body and the question format.
   A lesson's questions are grouped into spots: ?1 in the body shows q[0], ?2 shows q[1], and so on. s tells the AI what the spot tests.
   Keep the spots in the same order: an account remembers its XP by lesson id and spot number. */
const LESSONS={
 xp:{question:10,finish:25},
 courses:[{id:'I',title:'Latin I Honors',units:[
 {title:"Verbs: the present tense",lessons:[
  {id:"verbs1",title:"Verbs and the 1st conjugation",blurb:"How a Latin verb tells you who is acting, and your first verb group.",t:["pa1"],
   body:`Welcome to Latin. The first thing to know is that a Latin verb does much more work than an English verb. English needs two words to say *we* and *praise*. Latin packs both ideas into one word:

: laudāmus = we praise

The start of the word, *laud-*, carries the meaning (praise). The end of the word, [[-mus]], tells you who is doing the action (we). You will read Latin by looking at the ends of words, so start that habit now.

# Person and number

Every verb form has a **person** and a **number**.

- **Person** tells you who is involved. 1st person is the speaker (I, we). 2nd person is the one spoken to (you). 3rd person is anyone else (he, she, it, they).
- **Number** tells you how many: **singular** means one, **plural** means more than one.

English has one word for *you*, but Latin has different endings for talking to one person and talking to several.

|~ The personal endings
|Person|Singular|Meaning|Plural|Meaning|
|1st|[[-ō]]|I|[[-mus]]|we|
|2nd|[[-s]]|you|[[-tis]]|you (all)|
|3rd|[[-t]]|he, she, it|[[-nt]]|they|

! Latin usually leaves out words like *I* and *they*. The ending already says it, so *laudant* alone is a full sentence: They praise.

?1

# The 1st conjugation

A **conjugation** is a family of verbs that behave the same way. Latin has four main families, and you can tell them apart by the **infinitive**, the "to" form of the verb. Dictionaries list a verb by its infinitive and its "I" form:

: laudāre, -ō = to praise

Verbs whose infinitive ends in **-āre** belong to the **1st conjugation**. To find the **stem**, take off the *-re*. That leaves *laudā-*, and the long *ā* is the sign of this family. Then add the personal endings.

|~ laudāre, to praise: present active
|Person|Singular|Plural|
|1st|laud[[ō]], I praise|laudā[[mus]], we praise|
|2nd|laudā[[s]], you praise|laudā[[tis]], you (all) praise|
|3rd|lauda[[t]], he/she/it praises|lauda[[nt]], they praise|

Two small details are worth noticing. In the "I" form the *ā* disappears, so it is *laudō*, not *laudāō*. And the *a* is short before a final *-t* and before *-nt*.

The lines over vowels are called **macrons**. They mark long vowels. On Verba you can type one by writing a vowel and then a hyphen, so *a-* becomes *ā*.

# Three English translations

The Latin present tense covers all three English present forms. Any of these is correct:

: portat = he carries
: portat = he is carrying
: portat = he does carry

Without other words around it, *portat* could also mean *she carries* or *it carries*.

?2

?3`,
   q:[
    {s:"Identify the person and number of a 1st conjugation present verb",b:[
     {"k":"mc","p":"What person and number is *vocō*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":0,"w":"The ending of *vocō* means I, so it is 1st person singular.","g":[["vocāre, -ō","to call"]]},
     {"k":"mc","p":"What person and number is *spectāmus*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":3,"w":"The ending of *spectāmus* means we, so it is 1st person plural.","g":[["spectāre, -ō","to watch"]]},
     {"k":"mc","p":"What person and number is *amant*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":5,"w":"The ending of *amant* means they, so it is 3rd person plural.","g":[["amāre, -ō","to love"]]},
     {"k":"mc","p":"What person and number is *servās*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":1,"w":"The ending of *servās* means you (one person), so it is 2nd person singular.","g":[["servāre, -ō","to save"]]},
     {"k":"mc","p":"What person and number is *superātis*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":4,"w":"The ending of *superātis* means you (more than one person), so it is 2nd person plural.","g":[["superāre, -ō","to defeat"]]},
     {"k":"mc","p":"What person and number is *parat*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":2,"w":"The ending of *parat* means he, she or it, so it is 3rd person singular.","g":[["parāre, -ō","to prepare"]]},
     {"k":"mc","p":"What person and number is *mōnstrāmus*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":3,"w":"The ending of *mōnstrāmus* means we, so it is 1st person plural.","g":[["mōnstrāre, -ō","to show"]]},
     {"k":"mc","p":"What person and number is *dōnās*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":1,"w":"The ending of *dōnās* means you (one person), so it is 2nd person singular.","g":[["dōnāre, -ō","to give"]]},
     {"k":"mc","p":"What person and number is *narrant*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":5,"w":"The ending of *narrant* means they, so it is 3rd person plural.","g":[["narrāre, -ō","to tell"]]},
     {"k":"mc","p":"What person and number is *līberō*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":0,"w":"The ending of *līberō* means I, so it is 1st person singular.","g":[["līberāre, -ō","to free"]]},
    ]},
    {s:"Translate a 1st conjugation present verb into English",b:[
     {"k":"en","p":"Translate into English: *vocat*","a":["he calls","he is calling","he does call","she calls","she is calling","she does call","it calls","it is calling","it does call"],"w":"*vocat* is 3rd person singular, so it means “he calls.”","g":[["vocāre, -ō","to call"]]},
     {"k":"en","p":"Translate into English: *spectant*","a":["they watch","they are watching","they do watch"],"w":"*spectant* is 3rd person plural, so it means “they watch.”","g":[["spectāre, -ō","to watch"]]},
     {"k":"en","p":"Translate into English: *amō*","a":["I love","I am loving","I do love"],"w":"*amō* is 1st person singular, so it means “I love.”","g":[["amāre, -ō","to love"]]},
     {"k":"en","p":"Translate into English: *servāmus*","a":["we save","we are saving","we do save"],"w":"*servāmus* is 1st person plural, so it means “we save.”","g":[["servāre, -ō","to save"]]},
     {"k":"en","p":"Translate into English: *superās*","a":["you defeat","you are defeating","you do defeat"],"w":"*superās* is 2nd person singular, so it means “you defeat.”","g":[["superāre, -ō","to defeat"]]},
     {"k":"en","p":"Translate into English: *parātis*","a":["you prepare","you are preparing","you do prepare"],"w":"*parātis* is 2nd person plural, so it means “you prepare.”","g":[["parāre, -ō","to prepare"]]},
     {"k":"en","p":"Translate into English: *mōnstrant*","a":["they show","they are showing","they do show"],"w":"*mōnstrant* is 3rd person plural, so it means “they show.”","g":[["mōnstrāre, -ō","to show"]]},
     {"k":"en","p":"Translate into English: *dōnat*","a":["he gives","he is giving","he does give","she gives","she is giving","she does give","it gives","it is giving","it does give"],"w":"*dōnat* is 3rd person singular, so it means “he gives.”","g":[["dōnāre, -ō","to give"]]},
     {"k":"en","p":"Translate into English: *narrāmus*","a":["we tell","we are telling","we do tell"],"w":"*narrāmus* is 1st person plural, so it means “we tell.”","g":[["narrāre, -ō","to tell"]]},
     {"k":"en","p":"Translate into English: *līberō*","a":["I free","I am freeing","I do free"],"w":"*līberō* is 1st person singular, so it means “I free.”","g":[["līberāre, -ō","to free"]]},
    ]},
    {s:"Write a 1st conjugation present verb in Latin from English",b:[
     {"k":"la","p":"Write in Latin: we call","a":["vocāmus"],"w":"The 1st person plural form is *vocāmus*.","g":[["vocāre, -ō","to call"]]},
     {"k":"la","p":"Write in Latin: I watch","a":["spectō"],"w":"The 1st person singular form is *spectō*.","g":[["spectāre, -ō","to watch"]]},
     {"k":"la","p":"Write in Latin: he loves","a":["amat"],"w":"The 3rd person singular form is *amat*.","g":[["amāre, -ō","to love"]]},
     {"k":"la","p":"Write in Latin: they save","a":["servant"],"w":"The 3rd person plural form is *servant*.","g":[["servāre, -ō","to save"]]},
     {"k":"la","p":"Write in Latin: you all defeat","a":["superātis"],"w":"The 2nd person plural form is *superātis*.","g":[["superāre, -ō","to defeat"]]},
     {"k":"la","p":"Write in Latin: you (one person) prepare","a":["parās"],"w":"The 2nd person singular form is *parās*.","g":[["parāre, -ō","to prepare"]]},
     {"k":"la","p":"Write in Latin: I show","a":["mōnstrō"],"w":"The 1st person singular form is *mōnstrō*.","g":[["mōnstrāre, -ō","to show"]]},
     {"k":"la","p":"Write in Latin: they give","a":["dōnant"],"w":"The 3rd person plural form is *dōnant*.","g":[["dōnāre, -ō","to give"]]},
     {"k":"la","p":"Write in Latin: he tells","a":["narrat"],"w":"The 3rd person singular form is *narrat*.","g":[["narrāre, -ō","to tell"]]},
     {"k":"la","p":"Write in Latin: we free","a":["līberāmus"],"w":"The 1st person plural form is *līberāmus*.","g":[["līberāre, -ō","to free"]]},
    ]},
   ]},
  {id:"verbs2",title:"The 2nd conjugation",blurb:"A second verb family, marked by a long ē.",t:["pa2"],
   body:`The **2nd conjugation** works almost exactly like the 1st. Its infinitive ends in **-ēre**, with a long *ē*, and that *ē* takes the place of the 1st conjugation's *ā*.

: monēre, -eō = to warn
: vidēre, -eō = to see

The personal endings are the same ones you already know.

|~ monēre, to warn: present active
|Person|Singular|Plural|
|1st|mone[[ō]], I warn|monē[[mus]], we warn|
|2nd|monē[[s]], you warn|monē[[tis]], you (all) warn|
|3rd|mone[[t]], he/she/it warns|mone[[nt]], they warn|

The main difference is the "I" form. The 1st conjugation loses its vowel (*laudō*), but the 2nd conjugation keeps it: *moneō*. So a verb listed with **-eō** is 2nd conjugation.

! Compare *portat* and *monet*. Both are "he/she/it" forms. The vowel before the ending tells you the family, and the ending tells you the person.

?1

?2

?3`,
   q:[
    {s:"Identify the person and number of a 2nd conjugation present verb",b:[
     {"k":"mc","p":"What person and number is *teneō*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":0,"w":"The ending of *teneō* means I, so it is 1st person singular.","g":[["tenēre, -eō","to hold"]]},
     {"k":"mc","p":"What person and number is *terrēmus*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":3,"w":"The ending of *terrēmus* means we, so it is 1st person plural.","g":[["terrēre, -eō","to frighten"]]},
     {"k":"mc","p":"What person and number is *docent*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":5,"w":"The ending of *docent* means they, so it is 3rd person plural.","g":[["docēre, -eō","to teach"]]},
     {"k":"mc","p":"What person and number is *dēlēs*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":1,"w":"The ending of *dēlēs* means you (one person), so it is 2nd person singular.","g":[["dēlēre, -eō","to destroy"]]},
     {"k":"mc","p":"What person and number is *timētis*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":4,"w":"The ending of *timētis* means you (more than one person), so it is 2nd person plural.","g":[["timēre, -eō","to fear"]]},
     {"k":"mc","p":"What person and number is *manet*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":2,"w":"The ending of *manet* means he, she or it, so it is 3rd person singular.","g":[["manēre, -eō","to stay"]]},
     {"k":"mc","p":"What person and number is *sedēmus*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":3,"w":"The ending of *sedēmus* means we, so it is 1st person plural.","g":[["sedēre, -eō","to sit"]]},
     {"k":"mc","p":"What person and number is *prohibēs*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":1,"w":"The ending of *prohibēs* means you (one person), so it is 2nd person singular.","g":[["prohibēre, -eō","to keep away"]]},
     {"k":"mc","p":"What person and number is *tenent*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":5,"w":"The ending of *tenent* means they, so it is 3rd person plural.","g":[["tenēre, -eō","to hold"]]},
     {"k":"mc","p":"What person and number is *terreō*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":0,"w":"The ending of *terreō* means I, so it is 1st person singular.","g":[["terrēre, -eō","to frighten"]]},
    ]},
    {s:"Translate a 2nd conjugation present verb into English",b:[
     {"k":"en","p":"Translate into English: *tenet*","a":["he holds","he is holding","he does hold","she holds","she is holding","she does hold","it holds","it is holding","it does hold"],"w":"*tenet* is 3rd person singular, so it means “he holds.”","g":[["tenēre, -eō","to hold"]]},
     {"k":"en","p":"Translate into English: *terrent*","a":["they frighten","they are frightening","they do frighten"],"w":"*terrent* is 3rd person plural, so it means “they frighten.”","g":[["terrēre, -eō","to frighten"]]},
     {"k":"en","p":"Translate into English: *doceō*","a":["I teach","I am teaching","I do teach"],"w":"*doceō* is 1st person singular, so it means “I teach.”","g":[["docēre, -eō","to teach"]]},
     {"k":"en","p":"Translate into English: *dēlēmus*","a":["we destroy","we are destroying","we do destroy"],"w":"*dēlēmus* is 1st person plural, so it means “we destroy.”","g":[["dēlēre, -eō","to destroy"]]},
     {"k":"en","p":"Translate into English: *timēs*","a":["you fear","you are fearing","you do fear"],"w":"*timēs* is 2nd person singular, so it means “you fear.”","g":[["timēre, -eō","to fear"]]},
     {"k":"en","p":"Translate into English: *manētis*","a":["you stay","you are staying","you do stay"],"w":"*manētis* is 2nd person plural, so it means “you stay.”","g":[["manēre, -eō","to stay"]]},
     {"k":"en","p":"Translate into English: *sedent*","a":["they sit","they are sitting","they do sit"],"w":"*sedent* is 3rd person plural, so it means “they sit.”","g":[["sedēre, -eō","to sit"]]},
     {"k":"en","p":"Translate into English: *prohibet*","a":["he keeps","he is keeping","he does keep","she keeps","she is keeping","she does keep","it keeps","it is keeping","it does keep"],"w":"*prohibet* is 3rd person singular, so it means “he keeps.”","g":[["prohibēre, -eō","to keep away"]]},
     {"k":"en","p":"Translate into English: *tenēmus*","a":["we hold","we are holding","we do hold"],"w":"*tenēmus* is 1st person plural, so it means “we hold.”","g":[["tenēre, -eō","to hold"]]},
     {"k":"en","p":"Translate into English: *terreō*","a":["I frighten","I am frightening","I do frighten"],"w":"*terreō* is 1st person singular, so it means “I frighten.”","g":[["terrēre, -eō","to frighten"]]},
    ]},
    {s:"Write a 2nd conjugation present verb in Latin from English",b:[
     {"k":"la","p":"Write in Latin: we hold","a":["tenēmus"],"w":"The 1st person plural form is *tenēmus*.","g":[["tenēre, -eō","to hold"]]},
     {"k":"la","p":"Write in Latin: I frighten","a":["terreō"],"w":"The 1st person singular form is *terreō*.","g":[["terrēre, -eō","to frighten"]]},
     {"k":"la","p":"Write in Latin: he teaches","a":["docet"],"w":"The 3rd person singular form is *docet*.","g":[["docēre, -eō","to teach"]]},
     {"k":"la","p":"Write in Latin: they destroy","a":["dēlent"],"w":"The 3rd person plural form is *dēlent*.","g":[["dēlēre, -eō","to destroy"]]},
     {"k":"la","p":"Write in Latin: you all fear","a":["timētis"],"w":"The 2nd person plural form is *timētis*.","g":[["timēre, -eō","to fear"]]},
     {"k":"la","p":"Write in Latin: you (one person) stay","a":["manēs"],"w":"The 2nd person singular form is *manēs*.","g":[["manēre, -eō","to stay"]]},
     {"k":"la","p":"Write in Latin: I sit","a":["sedeō"],"w":"The 1st person singular form is *sedeō*.","g":[["sedēre, -eō","to sit"]]},
     {"k":"la","p":"Write in Latin: they keep","a":["prohibent"],"w":"The 3rd person plural form is *prohibent*.","g":[["prohibēre, -eō","to keep away"]]},
     {"k":"la","p":"Write in Latin: he holds","a":["tenet"],"w":"The 3rd person singular form is *tenet*.","g":[["tenēre, -eō","to hold"]]},
     {"k":"la","p":"Write in Latin: we frighten","a":["terrēmus"],"w":"The 1st person plural form is *terrēmus*.","g":[["terrēre, -eō","to frighten"]]},
    ]},
   ]},
  {id:"verbs3",title:"The 3rd conjugation",blurb:"The family with a short e in its infinitive and a shifting vowel.",t:["pa3"],
   body:`The **3rd conjugation** also has an infinitive in *-ere*, but the *e* is **short**. Compare them:

: monēre = 2nd conjugation (long ē)
: dūcere = 3rd conjugation (short e)

This matters because you can't always hear the difference at first, and the two families conjugate differently. The list form helps: a 3rd conjugation verb has plain **-ō**, while a 2nd conjugation verb has **-eō**.

: dūcere, -ō = to lead

# Finding the forms

Take off the *-ere* to get the stem, *dūc-*. Unlike the first two families, this stem ends in a consonant, so Latin needs a linking vowel before most endings. That vowel is usually a short *i*, and before *-nt* it is *u*.

|~ dūcere, to lead: present active
|Person|Singular|Plural|
|1st|dūc[[ō]], I lead|dūci[[mus]], we lead|
|2nd|dūci[[s]], you lead|dūci[[tis]], you (all) lead|
|3rd|dūci[[t]], he/she/it leads|dūcu[[nt]], they lead|

! The pattern to remember is *ō, i, i, i, i, u*. Say it aloud a few times: *dūcō, dūcis, dūcit, dūcimus, dūcitis, dūcunt*.

?1

?2

?3`,
   q:[
    {s:"Identify the person and number of a 3rd conjugation present verb",b:[
     {"k":"mc","p":"What person and number is *mittō*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":0,"w":"The ending of *mittō* means I, so it is 1st person singular.","g":[["mittere, -ō","to send"]]},
     {"k":"mc","p":"What person and number is *scrībimus*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":3,"w":"The ending of *scrībimus* means we, so it is 1st person plural.","g":[["scrībere, -ō","to write"]]},
     {"k":"mc","p":"What person and number is *legunt*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":5,"w":"The ending of *legunt* means they, so it is 3rd person plural.","g":[["legere, -ō","to read"]]},
     {"k":"mc","p":"What person and number is *vincis*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":1,"w":"The ending of *vincis* means you (one person), so it is 2nd person singular.","g":[["vincere, -ō","to conquer"]]},
     {"k":"mc","p":"What person and number is *dēfenditis*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":4,"w":"The ending of *dēfenditis* means you (more than one person), so it is 2nd person plural.","g":[["dēfendere, -ō","to defend"]]},
     {"k":"mc","p":"What person and number is *regit*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":2,"w":"The ending of *regit* means he, she or it, so it is 3rd person singular.","g":[["regere, -ō","to rule"]]},
     {"k":"mc","p":"What person and number is *relinquimus*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":3,"w":"The ending of *relinquimus* means we, so it is 1st person plural.","g":[["relinquere, -ō","to abandon"]]},
     {"k":"mc","p":"What person and number is *petis*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":1,"w":"The ending of *petis* means you (one person), so it is 2nd person singular.","g":[["petere, -ō","to seek"]]},
     {"k":"mc","p":"What person and number is *mittunt*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":5,"w":"The ending of *mittunt* means they, so it is 3rd person plural.","g":[["mittere, -ō","to send"]]},
     {"k":"mc","p":"What person and number is *scrībō*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":0,"w":"The ending of *scrībō* means I, so it is 1st person singular.","g":[["scrībere, -ō","to write"]]},
    ]},
    {s:"Translate a 3rd conjugation present verb into English",b:[
     {"k":"en","p":"Translate into English: *mittit*","a":["he sends","he is sending","he does send","she sends","she is sending","she does send","it sends","it is sending","it does send"],"w":"*mittit* is 3rd person singular, so it means “he sends.”","g":[["mittere, -ō","to send"]]},
     {"k":"en","p":"Translate into English: *scrībunt*","a":["they write","they are writing","they do write"],"w":"*scrībunt* is 3rd person plural, so it means “they write.”","g":[["scrībere, -ō","to write"]]},
     {"k":"en","p":"Translate into English: *legō*","a":["I read","I am reading","I do read"],"w":"*legō* is 1st person singular, so it means “I read.”","g":[["legere, -ō","to read"]]},
     {"k":"en","p":"Translate into English: *vincimus*","a":["we conquer","we are conquering","we do conquer"],"w":"*vincimus* is 1st person plural, so it means “we conquer.”","g":[["vincere, -ō","to conquer"]]},
     {"k":"en","p":"Translate into English: *dēfendis*","a":["you defend","you are defending","you do defend"],"w":"*dēfendis* is 2nd person singular, so it means “you defend.”","g":[["dēfendere, -ō","to defend"]]},
     {"k":"en","p":"Translate into English: *regitis*","a":["you rule","you are ruling","you do rule"],"w":"*regitis* is 2nd person plural, so it means “you rule.”","g":[["regere, -ō","to rule"]]},
     {"k":"en","p":"Translate into English: *relinquunt*","a":["they abandon","they are abandoning","they do abandon"],"w":"*relinquunt* is 3rd person plural, so it means “they abandon.”","g":[["relinquere, -ō","to abandon"]]},
     {"k":"en","p":"Translate into English: *petit*","a":["he seeks","he is seeking","he does seek","she seeks","she is seeking","she does seek","it seeks","it is seeking","it does seek"],"w":"*petit* is 3rd person singular, so it means “he seeks.”","g":[["petere, -ō","to seek"]]},
     {"k":"en","p":"Translate into English: *mittimus*","a":["we send","we are sending","we do send"],"w":"*mittimus* is 1st person plural, so it means “we send.”","g":[["mittere, -ō","to send"]]},
     {"k":"en","p":"Translate into English: *scrībō*","a":["I write","I am writing","I do write"],"w":"*scrībō* is 1st person singular, so it means “I write.”","g":[["scrībere, -ō","to write"]]},
    ]},
    {s:"Write a 3rd conjugation present verb in Latin from English",b:[
     {"k":"la","p":"Write in Latin: we send","a":["mittimus"],"w":"The 1st person plural form is *mittimus*.","g":[["mittere, -ō","to send"]]},
     {"k":"la","p":"Write in Latin: I write","a":["scrībō"],"w":"The 1st person singular form is *scrībō*.","g":[["scrībere, -ō","to write"]]},
     {"k":"la","p":"Write in Latin: he reads","a":["legit"],"w":"The 3rd person singular form is *legit*.","g":[["legere, -ō","to read"]]},
     {"k":"la","p":"Write in Latin: they conquer","a":["vincunt"],"w":"The 3rd person plural form is *vincunt*.","g":[["vincere, -ō","to conquer"]]},
     {"k":"la","p":"Write in Latin: you all defend","a":["dēfenditis"],"w":"The 2nd person plural form is *dēfenditis*.","g":[["dēfendere, -ō","to defend"]]},
     {"k":"la","p":"Write in Latin: you (one person) rule","a":["regis"],"w":"The 2nd person singular form is *regis*.","g":[["regere, -ō","to rule"]]},
     {"k":"la","p":"Write in Latin: I abandon","a":["relinquō"],"w":"The 1st person singular form is *relinquō*.","g":[["relinquere, -ō","to abandon"]]},
     {"k":"la","p":"Write in Latin: they seek","a":["petunt"],"w":"The 3rd person plural form is *petunt*.","g":[["petere, -ō","to seek"]]},
     {"k":"la","p":"Write in Latin: he sends","a":["mittit"],"w":"The 3rd person singular form is *mittit*.","g":[["mittere, -ō","to send"]]},
     {"k":"la","p":"Write in Latin: we write","a":["scrībimus"],"w":"The 1st person plural form is *scrībimus*.","g":[["scrībere, -ō","to write"]]},
    ]},
   ]},
  {id:"verbs4",title:"The 3rd -iō and 4th conjugations",blurb:"Two families that keep an i, and how to tell them apart.",t:["pa3i","pa4"],
   body:`The last two families both have an **i** right before most endings.

# The 4th conjugation

The infinitive ends in **-īre**, with a long *ī*. Keep that *ī*, and add the endings. The "they" form adds a *u*: *-iunt*.

|~ audīre, to hear: present active
|Person|Singular|Plural|
|1st|audi[[ō]], I hear|audī[[mus]], we hear|
|2nd|audī[[s]], you hear|audī[[tis]], you (all) hear|
|3rd|audi[[t]], he/she/it hears|audiu[[nt]], they hear|

# The 3rd -iō conjugation

These verbs have an infinitive like the 3rd conjugation, with a short *-ere*, but an "I" form in **-iō**.

: capere, -iō = to take, to capture

|~ capere, to take: present active
|Person|Singular|Plural|
|1st|capi[[ō]], I take|capi[[mus]], we take|
|2nd|capi[[s]], you take|capi[[tis]], you (all) take|
|3rd|capi[[t]], he/she/it takes|capiu[[nt]], they take|

# Telling all five apart

Look at both the infinitive and the "I" form.

|~ The five patterns
|Family|Infinitive|"I" form|Example|
|1st|-āre|-ō|laudāre, laudō|
|2nd|-ēre|-eō|monēre, moneō|
|3rd|-ere|-ō|dūcere, dūcō|
|3rd -iō|-ere|-iō|capere, capiō|
|4th|-īre|-iō|audīre, audiō|

?1

?2

?3`,
   q:[
    {s:"Identify which conjugation a verb belongs to from its infinitive and first form",b:[
     {"k":"mc","p":"Which family is *portāre, portō*?","o":["1st","2nd","3rd","4th"],"a":0,"w":"-āre is the 1st conjugation.","g":[["portāre, -ō","to carry"]]},
     {"k":"mc","p":"Which family is *tenēre, teneō*?","o":["2nd","1st","3rd","4th"],"a":0,"w":"A long -ēre with -eō is the 2nd conjugation.","g":[["tenēre, -eō","to hold"]]},
     {"k":"mc","p":"Which family is *mittere, mittō*?","o":["3rd","2nd","3rd -iō","4th"],"a":0,"w":"A short -ere with plain -ō is the 3rd conjugation.","g":[["mittere, -ō","to send"]]},
     {"k":"mc","p":"Which family is *iacere, iaciō*?","o":["3rd -iō","2nd","3rd","4th"],"a":0,"w":"A short -ere with -iō is the 3rd -iō conjugation.","g":[["iacere, -iō","to throw"]]},
     {"k":"mc","p":"Which family is *pūnīre, pūniō*?","o":["4th","1st","2nd","3rd -iō"],"a":0,"w":"-īre is the 4th conjugation.","g":[["pūnīre, -iō","to punish"]]},
     {"k":"mc","p":"Which family is *accipere, accipiō*?","o":["3rd -iō","3rd","4th","2nd"],"a":0,"w":"A short -ere with -iō is the 3rd -iō conjugation.","g":[["accipere, -iō","to receive"]]},
     {"k":"mc","p":"Which family is *scrībere, scrībō*?","o":["3rd","2nd","3rd -iō","4th"],"a":0,"w":"A short -ere with plain -ō is the 3rd conjugation.","g":[["scrībere, -ō","to write"]]},
     {"k":"mc","p":"Which family is *custōdīre, custōdiō*?","o":["4th","2nd","3rd","3rd -iō"],"a":0,"w":"-īre is the 4th conjugation.","g":[["custōdīre, -iō","to guard"]]},
     {"k":"mc","p":"Which family is *terrēre, terreō*?","o":["2nd","1st","3rd","3rd -iō"],"a":0,"w":"A long -ēre with -eō is the 2nd conjugation.","g":[["terrēre, -eō","to frighten"]]},
     {"k":"mc","p":"Which family is *amāre, amō*?","o":["1st","2nd","3rd","4th"],"a":0,"w":"-āre is the 1st conjugation.","g":[["amāre, -ō","to love"]]},
    ]},
    {s:"Translate a 3rd -iō or 4th conjugation present verb into English",b:[
     {"k":"en","p":"Translate into English: *iacit*","a":["he throws","he is throwing","he does throw","she throws","she is throwing","she does throw","it throws","it is throwing","it does throw"],"w":"*iacit* is 3rd person singular, so it means “he throws.”","g":[["iacere, -iō","to throw"]]},
     {"k":"en","p":"Translate into English: *accipiunt*","a":["they receive","they are receiving","they do receive"],"w":"*accipiunt* is 3rd person plural, so it means “they receive.”","g":[["accipere, -iō","to receive"]]},
     {"k":"en","p":"Translate into English: *cōnspiciō*","a":["I notice","I am noticing","I do notice"],"w":"*cōnspiciō* is 1st person singular, so it means “I notice.”","g":[["cōnspicere, -iō","to notice"]]},
     {"k":"en","p":"Translate into English: *interficimus*","a":["we kill","we are killing","we do kill"],"w":"*interficimus* is 1st person plural, so it means “we kill.”","g":[["interficere, -iō","to kill"]]},
     {"k":"en","p":"Translate into English: *cupis*","a":["you want","you are wanting","you do want"],"w":"*cupis* is 2nd person singular, so it means “you want.”","g":[["cupere, -iō","to want"]]},
     {"k":"en","p":"Translate into English: *custōdītis*","a":["you guard","you are guarding","you do guard"],"w":"*custōdītis* is 2nd person plural, so it means “you guard.”","g":[["custōdīre, -iō","to guard"]]},
     {"k":"en","p":"Translate into English: *inveniunt*","a":["they find","they are finding","they do find"],"w":"*inveniunt* is 3rd person plural, so it means “they find.”","g":[["invenīre, -iō","to find"]]},
     {"k":"en","p":"Translate into English: *pūnit*","a":["he punishes","he is punishing","he does punish","she punishes","she is punishing","she does punish","it punishes","it is punishing","it does punish"],"w":"*pūnit* is 3rd person singular, so it means “he punishes.”","g":[["pūnīre, -iō","to punish"]]},
     {"k":"en","p":"Translate into English: *impedīmus*","a":["we hinder","we are hindering","we do hinder"],"w":"*impedīmus* is 1st person plural, so it means “we hinder.”","g":[["impedīre, -iō","to hinder"]]},
     {"k":"en","p":"Translate into English: *mūniō*","a":["I fortify","I am fortifying","I do fortify"],"w":"*mūniō* is 1st person singular, so it means “I fortify.”","g":[["mūnīre, -iō","to fortify"]]},
    ]},
    {s:"Write a 3rd -iō or 4th conjugation present verb in Latin from English",b:[
     {"k":"la","p":"Write in Latin: we guard","a":["custōdīmus"],"w":"The 1st person plural form is *custōdīmus*.","g":[["custōdīre, -iō","to guard"]]},
     {"k":"la","p":"Write in Latin: I find","a":["inveniō"],"w":"The 1st person singular form is *inveniō*.","g":[["invenīre, -iō","to find"]]},
     {"k":"la","p":"Write in Latin: he punishes","a":["pūnit"],"w":"The 3rd person singular form is *pūnit*.","g":[["pūnīre, -iō","to punish"]]},
     {"k":"la","p":"Write in Latin: they hinder","a":["impediunt"],"w":"The 3rd person plural form is *impediunt*.","g":[["impedīre, -iō","to hinder"]]},
     {"k":"la","p":"Write in Latin: you all fortify","a":["mūnītis"],"w":"The 2nd person plural form is *mūnītis*.","g":[["mūnīre, -iō","to fortify"]]},
     {"k":"la","p":"Write in Latin: you (one person) throw","a":["iacis"],"w":"The 2nd person singular form is *iacis*.","g":[["iacere, -iō","to throw"]]},
     {"k":"la","p":"Write in Latin: I receive","a":["accipiō"],"w":"The 1st person singular form is *accipiō*.","g":[["accipere, -iō","to receive"]]},
     {"k":"la","p":"Write in Latin: they notice","a":["cōnspiciunt"],"w":"The 3rd person plural form is *cōnspiciunt*.","g":[["cōnspicere, -iō","to notice"]]},
     {"k":"la","p":"Write in Latin: he kills","a":["interficit"],"w":"The 3rd person singular form is *interficit*.","g":[["interficere, -iō","to kill"]]},
     {"k":"la","p":"Write in Latin: we want","a":["cupimus"],"w":"The 1st person plural form is *cupimus*.","g":[["cupere, -iō","to want"]]},
    ]},
   ]},
  {id:"compinf",title:"The complementary infinitive",blurb:"Verbs like \"wants to\" that need another verb to finish the idea.",t:["inf"],
   body:`You already know the **infinitive**: the "to" form, such as *portāre*, to carry. Some verbs don't make sense alone and need an infinitive to complete them. In English: *I want to sail*. The second verb completes the first, so it is called a **complementary infinitive**.

: Nāvigāre cupimus. = We want to sail.
: Puella ambulāre solet. = The girl usually walks.
: Dormīre dēbēs. = You ought to sleep.

Only the first verb changes for person and number. The infinitive never changes.

# Verbs that often take one

: cupere, -iō = to want
: solēre, -eō = to be used to, to usually do
: dēbēre, -eō = to owe, ought to
: spērāre, -ō = to hope

*Dēbēre* means *to owe* when it takes an object, but with an infinitive it means *ought* or *should*. The translation of *solēre* often sounds best with *usually*: *ambulāre solet*, she usually walks.

! Find the verb with a personal ending first. It tells you who is acting. Then attach the infinitive to it.

?1

?2`,
   q:[
    {s:"Pick out the complementary infinitive or finite verb in a short sentence",b:[
     {"k":"mc","p":"In *Currere cupimus*, which word is the infinitive?","o":["*currere*","*cupimus*","Both","Neither"],"a":0,"w":"-āre marks the infinitive; *cupimus* has a personal ending.","g":[["currere, -ō","to run"],["cupere, -iō","to want"]]},
     {"k":"mc","p":"In *Ambulāre solent*, which word tells you who acts?","o":["*solent*","*ambulāre*","Both","Neither"],"a":0,"w":"-nt means they, and infinitives have no personal ending.","g":[["ambulāre, -ō","to walk"],["solēre, -eō","to be used to, to usually do"]]},
     {"k":"mc","p":"In *Audīre dēbēmus*, who ought to listen?","o":["we","I","you","they"],"a":0,"w":"*dēbēmus* ends in -mus, we.","g":[["audīre, -iō","to hear"],["dēbēre, -eō","to owe; ought, should"]]},
     {"k":"mc","p":"In *Currere cupis*, who wants to run?","o":["you (one person)","we","they","you (more than one person)"],"a":0,"w":"*cupis* ends in -s.","g":[["currere, -ō","to run"],["cupere, -iō","to want"]]},
     {"k":"mc","p":"In *Scrībere cupit*, what does the word *scrībere* do?","o":["It completes the verb *cupit*","It says who is writing","It is the subject","It tells when"],"a":0,"w":"A complementary infinitive completes the main verb.","g":[["scrībere, -ō","to write"],["cupere, -iō","to want"]]},
     {"k":"mc","p":"Which word changes when the subject changes in *Dormīre cupiō*?","o":["*cupiō*","*dormīre*","Both","Neither"],"a":0,"w":"Only the main verb has personal endings.","g":[["dormīre, -iō","to sleep"],["cupere, -iō","to want"]]},
     {"k":"mc","p":"How do you say \"they ought to work\"?","o":["*Labōrāre dēbent*","*Labōrant dēbēre*","*Labōrāre dēbet*","*Labōrāmus dēbēre*"],"a":0,"w":"-nt on the main verb, and the infinitive stays the same.","g":[["labōrāre, -ō","to work"],["dēbēre, -eō","to owe; ought, should"]]},
     {"k":"mc","p":"How do you say \"we hope to sail\"?","o":["*Nāvigāre spērāmus*","*Nāvigāmus spērāre*","*Nāvigāre spērant*","*Nāvigat spērāmus*"],"a":0,"w":"The main verb takes -mus, and *nāvigāre* stays an infinitive.","g":[["nāvigāre, -ō","to sail"],["spērāre, -ō","to hope"]]},
     {"k":"mc","p":"What does *solēmus* add to *Ambulāre solēmus*?","o":["We usually walk","We walk alone","We want to walk","We ought to walk"],"a":0,"w":"*solēre* with an infinitive means to usually do something.","g":[["solēre, -eō","to be used to, to usually do"],["ambulāre, -ō","to walk"]]},
     {"k":"mc","p":"*Scrībere dēbēs* means...","o":["You ought to write.","You want to write.","You usually write.","You hope to write."],"a":0,"w":"With an infinitive, *dēbēre* means ought or should.","g":[["scrībere, -ō","to write"],["dēbēre, -eō","to owe; ought, should"]]},
    ]},
    {s:"Translate a sentence with a complementary infinitive",b:[
     {"k":"en","p":"Translate into English: *Labōrāre cupimus.*","a":["We want to work.","We are wanting to work.","We do want to work."],"w":"Translate the main verb first, then add the infinitive.","g":[["labōrāre, -ō","to work"],["cupere, -iō","to want"]]},
     {"k":"la","p":"Translate into Latin: They usually walk.","a":["Ambulāre solent."],"w":"Translate the main verb first, then add the infinitive.","g":[["ambulāre, -ō","to walk"],["solēre, -eō","to be used to, to usually do"]]},
     {"k":"en","p":"Translate into English: *Scrībere dēbēs.*","a":["You ought to write.","You should write."],"w":"Translate the main verb first, then add the infinitive.","g":[["scrībere, -ō","to write"],["dēbēre, -eō","to owe; ought, should"]]},
     {"k":"la","p":"Translate into Latin: I hope to work.","a":["Labōrāre spērō."],"w":"Translate the main verb first, then add the infinitive.","g":[["labōrāre, -ō","to work"],["spērāre, -ō","to hope"]]},
     {"k":"en","p":"Translate into English: *Currere cupiunt.*","a":["They want to run.","They are wanting to run.","They do want to run."],"w":"Translate the main verb first, then add the infinitive.","g":[["currere, -ō","to run"],["cupere, -iō","to want"]]},
     {"k":"la","p":"Translate into Latin: You ought to listen.","a":["Audīre dēbētis."],"w":"Translate the main verb first, then add the infinitive.","g":[["audīre, -iō","to hear"],["dēbēre, -eō","to owe; ought, should"]]},
     {"k":"en","p":"Translate into English: *Scrībere solet.*","a":["He usually writes.","She usually writes."],"w":"Translate the main verb first, then add the infinitive.","g":[["scrībere, -ō","to write"],["solēre, -eō","to be used to, to usually do"]]},
     {"k":"la","p":"Translate into Latin: He wants to stay.","a":["Manēre cupit."],"w":"Translate the main verb first, then add the infinitive.","g":[["manēre, -eō","to stay"],["cupere, -iō","to want"]]},
     {"k":"en","p":"Translate into English: *Pugnāre dēbēmus.*","a":["We ought to fight.","We should fight."],"w":"Translate the main verb first, then add the infinitive.","g":[["pugnāre, -ō","to fight"],["dēbēre, -eō","to owe; ought, should"]]},
     {"k":"la","p":"Translate into Latin: You hope to come.","a":["Venīre spērās."],"w":"Translate the main verb first, then add the infinitive.","g":[["venīre, -iō","to come"],["spērāre, -ō","to hope"]]},
    ]},
   ]},
  {id:"prespass",title:"The present passive",blurb:"When the subject receives the action.",t:["ppas"],
   body:`So far every verb has been **active**: the subject does the action. In the **passive** voice, the subject receives the action.

: Portō. = I carry. (active)
: Portor. = I am carried. (passive)

Latin marks the passive by changing the personal ending. Everything else stays the same.

|~ Passive personal endings
|Person|Singular|Plural|
|1st|[[-r]], I am ...ed|[[-mur]], we are ...ed|
|2nd|[[-ris]] or [[-re]], you are ...ed|[[-minī]], you (all) are ...ed|
|3rd|[[-tur]], he/she/it is ...ed|[[-ntur]], they are ...ed|

The 1st and 2nd conjugations are the most regular. The "I" form adds *-r* to the active form.

|~ laudāre: present passive
|Person|Singular|Plural|
|1st|laudo[[r]]|laudā[[mur]]|
|2nd|laudā[[ris]]|laudā[[minī]]|
|3rd|laudā[[tur]]|lauda[[ntur]]|

: moneor, monēris, monētur = I am warned, you are warned, he is warned
: monēmur, monēminī, monentur = we are warned, you are warned, they are warned

# The 3rd, 3rd -iō and 4th conjugations

Watch one form. In the 3rd conjugation the "you" singular has a short **e**: *dūceris*, and in the 3rd -iō, *caperis*. The rest follows the active pattern.

|~ Present passive of the other families
|Person|3rd|3rd -iō|4th|
|I|dūcor|capior|audior|
|you|dūceris|caperis|audīris|
|he/she/it|dūcitur|capitur|audītur|
|we|dūcimur|capimur|audīmur|
|you all|dūciminī|capiminī|audīminī|
|they|dūcuntur|capiuntur|audiuntur|

! A translation trick: the passive uses *is/are* plus the verb. *Laudātur* means *he is praised* or *he is being praised*.

?1

?2

?3`,
   q:[
    {s:"Identify the person and number of a present passive verb",b:[
     {"k":"mc","p":"What person and number is *vocor*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":0,"w":"The ending of *vocor* means I, so it is 1st person singular.","g":[["vocāre, -ō","to call"]]},
     {"k":"mc","p":"What person and number is *spectāmur*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":3,"w":"The ending of *spectāmur* means we, so it is 1st person plural.","g":[["spectāre, -ō","to watch"]]},
     {"k":"mc","p":"What person and number is *terrentur*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":5,"w":"The ending of *terrentur* means they, so it is 3rd person plural.","g":[["terrēre, -eō","to frighten"]]},
     {"k":"mc","p":"What person and number is *tenēris*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":1,"w":"The ending of *tenēris* means you (one person), so it is 2nd person singular.","g":[["tenēre, -eō","to hold"]]},
     {"k":"mc","p":"What person and number is *mittiminī*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":4,"w":"The ending of *mittiminī* means you (more than one person), so it is 2nd person plural.","g":[["mittere, -ō","to send"]]},
     {"k":"mc","p":"What person and number is *regitur*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":2,"w":"The ending of *regitur* means he, she or it, so it is 3rd person singular.","g":[["regere, -ō","to rule"]]},
     {"k":"mc","p":"What person and number is *iacimur*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":3,"w":"The ending of *iacimur* means we, so it is 1st person plural.","g":[["iacere, -iō","to throw"]]},
     {"k":"mc","p":"What person and number is *acciperis*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":1,"w":"The ending of *acciperis* means you (one person), so it is 2nd person singular.","g":[["accipere, -iō","to receive"]]},
     {"k":"mc","p":"What person and number is *custōdiuntur*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":5,"w":"The ending of *custōdiuntur* means they, so it is 3rd person plural.","g":[["custōdīre, -iō","to guard"]]},
     {"k":"mc","p":"What person and number is *pūnior*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":0,"w":"The ending of *pūnior* means I, so it is 1st person singular.","g":[["pūnīre, -iō","to punish"]]},
    ]},
    {s:"Translate a present passive verb into English",b:[
     {"k":"en","p":"Translate into English: *vocātur*","a":["he is called","he is being called","she is called","she is being called","it is called","it is being called"],"w":"*vocātur* is 3rd person singular, so it means “he is called.”","g":[["vocāre, -ō","to call"]]},
     {"k":"en","p":"Translate into English: *spectantur*","a":["they are watched","they are being watched"],"w":"*spectantur* is 3rd person plural, so it means “they are watched.”","g":[["spectāre, -ō","to watch"]]},
     {"k":"en","p":"Translate into English: *terreor*","a":["I am frightened","I am being frightened"],"w":"*terreor* is 1st person singular, so it means “I am frightened.”","g":[["terrēre, -eō","to frighten"]]},
     {"k":"en","p":"Translate into English: *tenēmur*","a":["we are held","we are being held"],"w":"*tenēmur* is 1st person plural, so it means “we are held.”","g":[["tenēre, -eō","to hold"]]},
     {"k":"en","p":"Translate into English: *mitteris*","a":["you are sent","you are being sent"],"w":"*mitteris* is 2nd person singular, so it means “you are sent.”","g":[["mittere, -ō","to send"]]},
     {"k":"en","p":"Translate into English: *regiminī*","a":["you are ruled","you are being ruled"],"w":"*regiminī* is 2nd person plural, so it means “you are ruled.”","g":[["regere, -ō","to rule"]]},
     {"k":"en","p":"Translate into English: *iaciuntur*","a":["they are thrown","they are being thrown"],"w":"*iaciuntur* is 3rd person plural, so it means “they are thrown.”","g":[["iacere, -iō","to throw"]]},
     {"k":"en","p":"Translate into English: *accipitur*","a":["he is received","he is being received","she is received","she is being received","it is received","it is being received"],"w":"*accipitur* is 3rd person singular, so it means “he is received.”","g":[["accipere, -iō","to receive"]]},
     {"k":"en","p":"Translate into English: *custōdīmur*","a":["we are guarded","we are being guarded"],"w":"*custōdīmur* is 1st person plural, so it means “we are guarded.”","g":[["custōdīre, -iō","to guard"]]},
     {"k":"en","p":"Translate into English: *pūnior*","a":["I am punished","I am being punished"],"w":"*pūnior* is 1st person singular, so it means “I am punished.”","g":[["pūnīre, -iō","to punish"]]},
    ]},
    {s:"Write a present passive verb in Latin from English",b:[
     {"k":"la","p":"Write in Latin: we are called","a":["vocāmur"],"w":"The 1st person plural form is *vocāmur*.","g":[["vocāre, -ō","to call"]]},
     {"k":"la","p":"Write in Latin: I am watched","a":["spector"],"w":"The 1st person singular form is *spector*.","g":[["spectāre, -ō","to watch"]]},
     {"k":"la","p":"Write in Latin: he is frightened","a":["terrētur"],"w":"The 3rd person singular form is *terrētur*.","g":[["terrēre, -eō","to frighten"]]},
     {"k":"la","p":"Write in Latin: they are held","a":["tenentur"],"w":"The 3rd person plural form is *tenentur*.","g":[["tenēre, -eō","to hold"]]},
     {"k":"la","p":"Write in Latin: you all are sent","a":["mittiminī"],"w":"The 2nd person plural form is *mittiminī*.","g":[["mittere, -ō","to send"]]},
     {"k":"la","p":"Write in Latin: you (one person) are ruled","a":["regeris"],"w":"The 2nd person singular form is *regeris*.","g":[["regere, -ō","to rule"]]},
     {"k":"la","p":"Write in Latin: I am thrown","a":["iacior"],"w":"The 1st person singular form is *iacior*.","g":[["iacere, -iō","to throw"]]},
     {"k":"la","p":"Write in Latin: they are received","a":["accipiuntur"],"w":"The 3rd person plural form is *accipiuntur*.","g":[["accipere, -iō","to receive"]]},
     {"k":"la","p":"Write in Latin: he is guarded","a":["custōdītur"],"w":"The 3rd person singular form is *custōdītur*.","g":[["custōdīre, -iō","to guard"]]},
     {"k":"la","p":"Write in Latin: we are punished","a":["pūnīmur"],"w":"The 1st person plural form is *pūnīmur*.","g":[["pūnīre, -iō","to punish"]]},
    ]},
   ]},
  {id:"passinf",title:"The passive infinitive",blurb:"How to say \"to be carried\".",t:["pinf"],
   body:`The passive also has an infinitive, meaning *to be ...ed*.

|~ Making the passive infinitive
|Family|Active|Passive|Meaning|
|1st|portāre|portā[[rī]]|to be carried|
|2nd|monēre|monē[[rī]]|to be warned|
|3rd|dūcere|dūc[[ī]]|to be led|
|3rd -iō|capere|cap[[ī]]|to be taken|
|4th|audīre|audī[[rī]]|to be heard|

In the 1st, 2nd and 4th conjugations, the final *-e* becomes *-ī*. In the 3rd and 3rd -iō, the whole *-ere* is replaced by *-ī*.

! Careful: *dūcī* looks like a short word, but it is an infinitive. It means *to be led*.

It works as a complementary infinitive just like an active one:

: Laudārī cupit. = She wants to be praised.
: Monērī dēbēmus. = We ought to be warned.
: Audīrī spērant. = They hope to be heard.

?1

?2`,
   q:[
    {s:"Write the passive infinitive of a verb",b:[
     {"k":"la","p":"Write the passive infinitive of *amāre*.","a":["amārī"],"w":"In the 1st conjugation, -āre becomes -ārī.","g":[["amāre, -ō","to love"]]},
     {"k":"la","p":"Write the passive infinitive of *regere*.","a":["regī"],"w":"In the 3rd conjugation, -ere becomes -ī.","g":[["regere, -ō","to rule"]]},
     {"k":"la","p":"Write the passive infinitive of *docēre*.","a":["docērī"],"w":"In the 2nd conjugation, -ēre becomes -ērī.","g":[["docēre, -eō","to teach"]]},
     {"k":"la","p":"Write the passive infinitive of *accipere*.","a":["accipī"],"w":"In the 3rd -iō conjugation, -ere becomes -ī.","g":[["accipere, -iō","to receive"]]},
     {"k":"la","p":"Write the passive infinitive of *pūnīre*.","a":["pūnīrī"],"w":"In the 4th conjugation, -īre becomes -īrī.","g":[["pūnīre, -iō","to punish"]]},
     {"k":"la","p":"Write the passive infinitive of *vocāre*.","a":["vocārī"],"w":"In the 1st conjugation, -āre becomes -ārī.","g":[["vocāre, -ō","to call"]]},
     {"k":"la","p":"Write the passive infinitive of *mittere*.","a":["mittī"],"w":"In the 3rd conjugation, -ere becomes -ī.","g":[["mittere, -ō","to send"]]},
     {"k":"la","p":"Write the passive infinitive of *vidēre*.","a":["vidērī"],"w":"In the 2nd conjugation, -ēre becomes -ērī.","g":[["vidēre, -eō","to see"]]},
     {"k":"la","p":"Write the passive infinitive of *iacere*.","a":["iacī"],"w":"In the 3rd -iō conjugation, -ere becomes -ī.","g":[["iacere, -iō","to throw"]]},
     {"k":"la","p":"Write the passive infinitive of *custōdīre*.","a":["custōdīrī"],"w":"In the 4th conjugation, -īre becomes -īrī.","g":[["custōdīre, -iō","to guard"]]},
    ]},
    {s:"Translate a complementary passive infinitive sentence",b:[
     {"k":"en","p":"Translate into English: *Amārī cupit.*","a":["He wants to be loved.","He is wanting to be loved.","He does want to be loved.","She wants to be loved.","She is wanting to be loved.","She does want to be loved."],"w":"The main verb has the personal ending, and the passive infinitive adds \"to be ...ed\".","g":[["amāre, -ō","to love"],["cupere, -iō","to want"]]},
     {"k":"la","p":"Translate into Latin: We ought to be taught.","a":["Docērī dēbēmus."],"w":"The main verb has the personal ending, and the passive infinitive adds \"to be ...ed\".","g":[["docēre, -eō","to teach"],["dēbēre, -eō","to owe; ought, should"]]},
     {"k":"en","p":"Translate into English: *Invenīrī spērant.*","a":["They hope to be found."],"w":"The main verb has the personal ending, and the passive infinitive adds \"to be ...ed\".","g":[["invenīre, -iō","to find"],["spērāre, -ō","to hope"]]},
     {"k":"la","p":"Translate into Latin: I want to be seen.","a":["Vidērī cupiō."],"w":"The main verb has the personal ending, and the passive infinitive adds \"to be ...ed\".","g":[["vidēre, -eō","to see"],["cupere, -iō","to want"]]},
     {"k":"en","p":"Translate into English: *Servārī spērāmus.*","a":["We hope to be saved."],"w":"The main verb has the personal ending, and the passive infinitive adds \"to be ...ed\".","g":[["servāre, -ō","to save"],["spērāre, -ō","to hope"]]},
     {"k":"la","p":"Translate into Latin: You ought to be called.","a":["Vocārī dēbēs."],"w":"The main verb has the personal ending, and the passive infinitive adds \"to be ...ed\".","g":[["vocāre, -ō","to call"],["dēbēre, -eō","to owe; ought, should"]]},
     {"k":"en","p":"Translate into English: *Dūcī cupiunt.*","a":["They want to be led.","They are wanting to be led.","They do want to be led."],"w":"The main verb has the personal ending, and the passive infinitive adds \"to be ...ed\".","g":[["dūcere, -ō","to lead"],["cupere, -iō","to want"]]},
     {"k":"la","p":"Translate into Latin: They ought to be punished.","a":["Pūnīrī dēbent."],"w":"The main verb has the personal ending, and the passive infinitive adds \"to be ...ed\".","g":[["pūnīre, -iō","to punish"],["dēbēre, -eō","to owe; ought, should"]]},
     {"k":"en","p":"Translate into English: *Portārī solet.*","a":["He is usually carried.","She is usually carried."],"w":"The main verb has the personal ending, and the passive infinitive adds \"to be ...ed\".","g":[["portāre, -ō","to carry"],["solēre, -eō","to be used to, to usually do"]]},
     {"k":"la","p":"Translate into Latin: I hope to be defended.","a":["Dēfendī spērō."],"w":"The main verb has the personal ending, and the passive infinitive adds \"to be ...ed\".","g":[["dēfendere, -ō","to defend"],["spērāre, -ō","to hope"]]},
    ]},
   ]},
 ]},
 {title:"Verbs: the future",lessons:[
  {id:"fut12",title:"The future: 1st and 2nd conjugations",blurb:"Saying what will happen, with the -bi- signal.",t:["fut"],
   body:`Latin marks the **future** tense inside the verb, where English adds the word *will*. The 1st and 2nd conjugations put a signal between the stem and the ending: usually **-bi-**.

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

?2`,
   q:[
    {s:"Translate a 1st or 2nd conjugation future active verb into English",b:[
     {"k":"en","p":"Translate into English: *laudābit*","a":["he will praise","he is going to praise","she will praise","she is going to praise","it will praise","it is going to praise"],"w":"*laudābit* is 3rd person singular, so it means “he will praise.”","g":[["laudāre, -ō","to praise"]]},
     {"k":"en","p":"Translate into English: *vocābunt*","a":["they will call","they are going to call"],"w":"*vocābunt* is 3rd person plural, so it means “they will call.”","g":[["vocāre, -ō","to call"]]},
     {"k":"en","p":"Translate into English: *vidēbō*","a":["I will see","I am going to see"],"w":"*vidēbō* is 1st person singular, so it means “I will see.”","g":[["vidēre, -eō","to see"]]},
     {"k":"en","p":"Translate into English: *tenēbimus*","a":["we will hold","we are going to hold"],"w":"*tenēbimus* is 1st person plural, so it means “we will hold.”","g":[["tenēre, -eō","to hold"]]},
     {"k":"en","p":"Translate into English: *spectābis*","a":["you will watch","you are going to watch"],"w":"*spectābis* is 2nd person singular, so it means “you will watch.”","g":[["spectāre, -ō","to watch"]]},
     {"k":"en","p":"Translate into English: *terrēbitis*","a":["you will frighten","you are going to frighten"],"w":"*terrēbitis* is 2nd person plural, so it means “you will frighten.”","g":[["terrēre, -eō","to frighten"]]},
     {"k":"en","p":"Translate into English: *amābunt*","a":["they will love","they are going to love"],"w":"*amābunt* is 3rd person plural, so it means “they will love.”","g":[["amāre, -ō","to love"]]},
     {"k":"en","p":"Translate into English: *docēbit*","a":["he will teach","he is going to teach","she will teach","she is going to teach","it will teach","it is going to teach"],"w":"*docēbit* is 3rd person singular, so it means “he will teach.”","g":[["docēre, -eō","to teach"]]},
     {"k":"en","p":"Translate into English: *laudābimus*","a":["we will praise","we are going to praise"],"w":"*laudābimus* is 1st person plural, so it means “we will praise.”","g":[["laudāre, -ō","to praise"]]},
     {"k":"en","p":"Translate into English: *vocābō*","a":["I will call","I am going to call"],"w":"*vocābō* is 1st person singular, so it means “I will call.”","g":[["vocāre, -ō","to call"]]},
    ]},
    {s:"Write a 1st or 2nd conjugation future active verb in Latin",b:[
     {"k":"la","p":"Write in Latin: we will praise","a":["laudābimus"],"w":"The 1st person plural form is *laudābimus*.","g":[["laudāre, -ō","to praise"]]},
     {"k":"la","p":"Write in Latin: I will call","a":["vocābō"],"w":"The 1st person singular form is *vocābō*.","g":[["vocāre, -ō","to call"]]},
     {"k":"la","p":"Write in Latin: he will see","a":["vidēbit"],"w":"The 3rd person singular form is *vidēbit*.","g":[["vidēre, -eō","to see"]]},
     {"k":"la","p":"Write in Latin: they will hold","a":["tenēbunt"],"w":"The 3rd person plural form is *tenēbunt*.","g":[["tenēre, -eō","to hold"]]},
     {"k":"la","p":"Write in Latin: you all will watch","a":["spectābitis"],"w":"The 2nd person plural form is *spectābitis*.","g":[["spectāre, -ō","to watch"]]},
     {"k":"la","p":"Write in Latin: you (one person) will frighten","a":["terrēbis"],"w":"The 2nd person singular form is *terrēbis*.","g":[["terrēre, -eō","to frighten"]]},
     {"k":"la","p":"Write in Latin: I will love","a":["amābō"],"w":"The 1st person singular form is *amābō*.","g":[["amāre, -ō","to love"]]},
     {"k":"la","p":"Write in Latin: they will teach","a":["docēbunt"],"w":"The 3rd person plural form is *docēbunt*.","g":[["docēre, -eō","to teach"]]},
     {"k":"la","p":"Write in Latin: he will praise","a":["laudābit"],"w":"The 3rd person singular form is *laudābit*.","g":[["laudāre, -ō","to praise"]]},
     {"k":"la","p":"Write in Latin: we will call","a":["vocābimus"],"w":"The 1st person plural form is *vocābimus*.","g":[["vocāre, -ō","to call"]]},
    ]},
   ]},
  {id:"fut34",title:"The future: 3rd and 4th conjugations",blurb:"A different future signal, and a classic trap.",t:["fut"],
   body:`The other families don't use *-bi-*. Their future is marked with **-a-** in the "I" form and **-ē-** everywhere else (shortened to *-e-* before *-t* and *-nt*).

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

?3`,
   q:[
    {s:"Decide whether a verb form is present or future from its conjugation",b:[
     {"k":"mc","p":"*docet* (2nd conjugation) is...","o":["present","future"],"a":0,"w":"In the 2nd conjugation, -et is present.","g":[["docēre, -eō","to teach"]]},
     {"k":"mc","p":"*vincet* (3rd conjugation) is...","o":["future","present"],"a":0,"w":"In the 3rd conjugation, -et is future.","g":[["vincere, -ō","to conquer"]]},
     {"k":"mc","p":"*vident* (2nd conjugation) is...","o":["present","future"],"a":0,"w":"In the 2nd conjugation, -ent is present.","g":[["vidēre, -eō","to see"]]},
     {"k":"mc","p":"*mittent* (3rd conjugation) is...","o":["future","present"],"a":0,"w":"In the 3rd conjugation, -ent is future.","g":[["mittere, -ō","to send"]]},
     {"k":"mc","p":"*pūniet* (4th conjugation) is...","o":["future","present"],"a":0,"w":"4th conjugation present is *pūnit*, so *pūniet* is future.","g":[["pūnīre, -iō","to punish"]]},
     {"k":"mc","p":"*iacient* (3rd -iō conjugation) is...","o":["future","present"],"a":0,"w":"The present is *iaciunt*, so *iacient* is future.","g":[["iacere, -iō","to throw"]]},
     {"k":"mc","p":"*tenet* (2nd conjugation) is...","o":["present","future"],"a":0,"w":"In the 2nd conjugation, -et is present.","g":[["tenēre, -eō","to hold"]]},
     {"k":"mc","p":"*legēmus* (3rd conjugation) is...","o":["future","present"],"a":0,"w":"The present is *legimus*, so *legēmus* is future.","g":[["legere, -ō","to read"]]},
     {"k":"mc","p":"*terrēmus* (2nd conjugation) is...","o":["present","future"],"a":0,"w":"The future would be *terrēbimus*.","g":[["terrēre, -eō","to frighten"]]},
     {"k":"mc","p":"*scrībet* (3rd conjugation) is...","o":["future","present"],"a":0,"w":"The present is *scrībit*.","g":[["scrībere, -ō","to write"]]},
    ]},
    {s:"Translate a 3rd, 3rd -iō or 4th conjugation future active verb into English",b:[
     {"k":"en","p":"Translate into English: *mittet*","a":["he will send","he is going to send","she will send","she is going to send","it will send","it is going to send"],"w":"*mittet* is 3rd person singular, so it means “he will send.”","g":[["mittere, -ō","to send"]]},
     {"k":"en","p":"Translate into English: *scrībent*","a":["they will write","they are going to write"],"w":"*scrībent* is 3rd person plural, so it means “they will write.”","g":[["scrībere, -ō","to write"]]},
     {"k":"en","p":"Translate into English: *custōdiam*","a":["I will guard","I am going to guard"],"w":"*custōdiam* is 1st person singular, so it means “I will guard.”","g":[["custōdīre, -iō","to guard"]]},
     {"k":"en","p":"Translate into English: *iaciēmus*","a":["we will throw","we are going to throw"],"w":"*iaciēmus* is 1st person plural, so it means “we will throw.”","g":[["iacere, -iō","to throw"]]},
     {"k":"en","p":"Translate into English: *inveniēs*","a":["you will find","you are going to find"],"w":"*inveniēs* is 2nd person singular, so it means “you will find.”","g":[["invenīre, -iō","to find"]]},
     {"k":"en","p":"Translate into English: *legētis*","a":["you will read","you are going to read"],"w":"*legētis* is 2nd person plural, so it means “you will read.”","g":[["legere, -ō","to read"]]},
     {"k":"en","p":"Translate into English: *pūnient*","a":["they will punish","they are going to punish"],"w":"*pūnient* is 3rd person plural, so it means “they will punish.”","g":[["pūnīre, -iō","to punish"]]},
     {"k":"en","p":"Translate into English: *reget*","a":["he will rule","he is going to rule","she will rule","she is going to rule","it will rule","it is going to rule"],"w":"*reget* is 3rd person singular, so it means “he will rule.”","g":[["regere, -ō","to rule"]]},
     {"k":"en","p":"Translate into English: *accipiēmus*","a":["we will receive","we are going to receive"],"w":"*accipiēmus* is 1st person plural, so it means “we will receive.”","g":[["accipere, -iō","to receive"]]},
     {"k":"en","p":"Translate into English: *mūniam*","a":["I will fortify","I am going to fortify"],"w":"*mūniam* is 1st person singular, so it means “I will fortify.”","g":[["mūnīre, -iō","to fortify"]]},
    ]},
    {s:"Write a 3rd, 3rd -iō or 4th conjugation future active verb in Latin",b:[
     {"k":"la","p":"Write in Latin: we will send","a":["mittēmus"],"w":"The 1st person plural form is *mittēmus*.","g":[["mittere, -ō","to send"]]},
     {"k":"la","p":"Write in Latin: I will write","a":["scrībam"],"w":"The 1st person singular form is *scrībam*.","g":[["scrībere, -ō","to write"]]},
     {"k":"la","p":"Write in Latin: he will guard","a":["custōdiet"],"w":"The 3rd person singular form is *custōdiet*.","g":[["custōdīre, -iō","to guard"]]},
     {"k":"la","p":"Write in Latin: they will throw","a":["iacient"],"w":"The 3rd person plural form is *iacient*.","g":[["iacere, -iō","to throw"]]},
     {"k":"la","p":"Write in Latin: you all will find","a":["inveniētis"],"w":"The 2nd person plural form is *inveniētis*.","g":[["invenīre, -iō","to find"]]},
     {"k":"la","p":"Write in Latin: you (one person) will read","a":["legēs"],"w":"The 2nd person singular form is *legēs*.","g":[["legere, -ō","to read"]]},
     {"k":"la","p":"Write in Latin: I will punish","a":["pūniam"],"w":"The 1st person singular form is *pūniam*.","g":[["pūnīre, -iō","to punish"]]},
     {"k":"la","p":"Write in Latin: they will rule","a":["regent"],"w":"The 3rd person plural form is *regent*.","g":[["regere, -ō","to rule"]]},
     {"k":"la","p":"Write in Latin: he will receive","a":["accipiet"],"w":"The 3rd person singular form is *accipiet*.","g":[["accipere, -iō","to receive"]]},
     {"k":"la","p":"Write in Latin: we will fortify","a":["mūniēmus"],"w":"The 1st person plural form is *mūniēmus*.","g":[["mūnīre, -iō","to fortify"]]},
    ]},
   ]},
  {id:"futpass",title:"The future passive",blurb:"Saying what will be done, in all conjugations.",t:["fpas"],
   body:`The future passive combines what you already know: the future signals and the passive endings.

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

?2`,
   q:[
    {s:"Translate a future passive verb into English",b:[
     {"k":"en","p":"Translate into English: *vocābitur*","a":["he will be called","she will be called","it will be called"],"w":"*vocābitur* is 3rd person singular, so it means “he will be called.”","g":[["vocāre, -ō","to call"]]},
     {"k":"en","p":"Translate into English: *vidēbuntur*","a":["they will be seen"],"w":"*vidēbuntur* is 3rd person plural, so it means “they will be seen.”","g":[["vidēre, -eō","to see"]]},
     {"k":"en","p":"Translate into English: *mittar*","a":["I will be sent"],"w":"*mittar* is 1st person singular, so it means “I will be sent.”","g":[["mittere, -ō","to send"]]},
     {"k":"en","p":"Translate into English: *iaciēmur*","a":["we will be thrown"],"w":"*iaciēmur* is 1st person plural, so it means “we will be thrown.”","g":[["iacere, -iō","to throw"]]},
     {"k":"en","p":"Translate into English: *custōdiēris*","a":["you will be guarded"],"w":"*custōdiēris* is 2nd person singular, so it means “you will be guarded.”","g":[["custōdīre, -iō","to guard"]]},
     {"k":"en","p":"Translate into English: *laudābiminī*","a":["you will be praised"],"w":"*laudābiminī* is 2nd person plural, so it means “you will be praised.”","g":[["laudāre, -ō","to praise"]]},
     {"k":"en","p":"Translate into English: *tenēbuntur*","a":["they will be held"],"w":"*tenēbuntur* is 3rd person plural, so it means “they will be held.”","g":[["tenēre, -eō","to hold"]]},
     {"k":"en","p":"Translate into English: *regētur*","a":["he will be ruled","she will be ruled","it will be ruled"],"w":"*regētur* is 3rd person singular, so it means “he will be ruled.”","g":[["regere, -ō","to rule"]]},
     {"k":"en","p":"Translate into English: *accipiēmur*","a":["we will be received"],"w":"*accipiēmur* is 1st person plural, so it means “we will be received.”","g":[["accipere, -iō","to receive"]]},
     {"k":"en","p":"Translate into English: *pūniar*","a":["I will be punished"],"w":"*pūniar* is 1st person singular, so it means “I will be punished.”","g":[["pūnīre, -iō","to punish"]]},
    ]},
    {s:"Write a future passive verb in Latin",b:[
     {"k":"la","p":"Write in Latin: we will be called","a":["vocābimur"],"w":"The 1st person plural form is *vocābimur*.","g":[["vocāre, -ō","to call"]]},
     {"k":"la","p":"Write in Latin: I will be seen","a":["vidēbor"],"w":"The 1st person singular form is *vidēbor*.","g":[["vidēre, -eō","to see"]]},
     {"k":"la","p":"Write in Latin: he will be sent","a":["mittētur"],"w":"The 3rd person singular form is *mittētur*.","g":[["mittere, -ō","to send"]]},
     {"k":"la","p":"Write in Latin: they will be thrown","a":["iacientur"],"w":"The 3rd person plural form is *iacientur*.","g":[["iacere, -iō","to throw"]]},
     {"k":"la","p":"Write in Latin: you all will be guarded","a":["custōdiēminī"],"w":"The 2nd person plural form is *custōdiēminī*.","g":[["custōdīre, -iō","to guard"]]},
     {"k":"la","p":"Write in Latin: you (one person) will be praised","a":["laudāberis"],"w":"The 2nd person singular form is *laudāberis*.","g":[["laudāre, -ō","to praise"]]},
     {"k":"la","p":"Write in Latin: I will be held","a":["tenēbor"],"w":"The 1st person singular form is *tenēbor*.","g":[["tenēre, -eō","to hold"]]},
     {"k":"la","p":"Write in Latin: they will be ruled","a":["regentur"],"w":"The 3rd person plural form is *regentur*.","g":[["regere, -ō","to rule"]]},
     {"k":"la","p":"Write in Latin: he will be received","a":["accipiētur"],"w":"The 3rd person singular form is *accipiētur*.","g":[["accipere, -iō","to receive"]]},
     {"k":"la","p":"Write in Latin: we will be punished","a":["pūniēmur"],"w":"The 1st person plural form is *pūniēmur*.","g":[["pūnīre, -iō","to punish"]]},
    ]},
   ]},
 ]},
 {title:"Nouns and cases",lessons:[
  {id:"cases",title:"What is a case? The nominative",blurb:"How Latin nouns change their endings, and the case that names the subject.",t:["nom"],
   body:`You've spent the first lessons on verbs. Now for the other half of a sentence: nouns. This is the biggest difference between Latin and English, so take your time here.

# What is a case?

In English, a noun keeps its shape, and word order or small words like *of* and *to* show what it's doing. *The dog sees the horse* and *The horse sees the dog* use the same words, and only the order changes the meaning.

Latin changes the **ending** of the noun instead. Each ending is called a **case**, and each case gives the noun a different job. Here is one noun, *equus* (horse), with its stem *equ-*.

|~ One noun, six cases
|^{Case¹|Verba lists the cases in this order because it groups them by what they do. The nominative, accusative and dative are the ones a verb can require: subject, direct object and indirect object. The ablative adds optional information about the verb. The genitive attaches to another noun. It is close to the order used in Sanskrit grammar. Many older Latin books use a different order (nominative, genitive, dative, accusative, vocative, ablative), which comes from Greek grammarians, with the ablative added because Greek doesn't have one. For the linguistics behind this, see Michael Covington, "Why the Ablative, Locative, and Instrumental Cases Fell Together in Latin" (1999): https://www.covingtoninnovations.com/mc/whycases.pdf}|Form|Basic idea|Example|
|Nominative|equ[[us]]|the subject|The **horse** is drinking.|
|Accusative|equ[[um]]|the direct object|I see the **horse**.|
|Dative|equ[[ō]]|to or for someone|I give food to the **horse**.|
|Ablative*|equ[[ō]]|from, with, by, in|I ride away from the **horse**.|
|Genitive|equ[[ī]]|of, belonging to|the rider **of the horse**|
|Vocative|equ[[e]]|calling someone|**O horse!**|

^{* The ablative was originally three separate cases.|Latin once had three separate cases here: the ablative (from), the instrumental (with, by means of) and the locative (in, at). They fell together into one case, which is why the Latin ablative has so many different uses. Later lessons cover them one at a time.}

Now compare how English shows the same ideas.

|~ The same ideas in English
|Case|How English shows it|Example|
|Nominative|before the verb|The **horse** sees the food.|
|Accusative|after the verb|The horse sees the **food**.|
|Dative|*to* or *for*|for the horse|
|Ablative|*from*, *with*, *by*, *in*|with the horse|
|Genitive|*of* or *'s*|the horse's rider|
|Vocative|*O*, or just a name|O horse!|

> The Latin word for case is *cāsus*, "a falling," from the verb *cadere*, to fall. It translates a Greek grammar word, *ptōsis*, which also means a fall. Ancient grammarians pictured the other forms of a word as falling away from its basic form, the nominative. That is where the English word *case* comes from.

# The nominative case

We start with the first case. The name **nominative** comes from *nōmen*, name. The nominative names the person or thing the sentence is about. Usually that noun is one of these:

- the one **doing** the action: Cicero spoke loudly.
- the one **receiving** a passive action: Cicero is heard by the senators.
- linked to the subject by a verb like *to be*: One great orator was Cicero.

In the first two sentences, Cicero is the **subject** of the verb. The third use, called the predicate nominative, comes up in a later lesson. For now, use the nominative for the subject.

# First and second declension endings

Nouns come in groups called **declensions**, each with its own set of endings. Every noun also has a **gender**: masculine, feminine or neuter. Here are the nominative endings of the first two declensions.

|~ Nominative endings
|Number|1st declension (mostly feminine)|2nd declension masculine|2nd declension neuter|
|Singular|[[-a]]|[[-us]]|[[-um]]|
|Plural|[[-ae]]|[[-ī]]|[[-a]]|

: puella, puellae = girl, girls
: amīcus, amīcī = friend, friends
: oppidum, oppida = town, towns

Notice that *-a* appears twice: singular in the 1st declension and plural for 2nd declension neuters. You need to know the noun's group to read it.

# The verb agrees with its subject

A singular subject takes a singular verb, and a plural subject takes a plural verb. So if *oppidum* (town) is the subject, the verb ends in *-t*, not *-nt*.

: oppidum nūntiat = the town announces
: oppida nūntiant = the towns announce
: amīcus ambulat = the friend walks
: amīcī ambulant = the friends walk

?1

# The subject replaces the pronoun

On its own, *laudat* means *he, she or it praises*. When a nominative noun is added, the noun takes over the place of the pronoun.

: laudat = she praises
: puella laudat = the girl praises
: laudant = they praise
: puellae laudant = the girls praise

Latin has no word for *the* or *a*. Add them in English wherever they sound right.

# Word order

The ending shows that a noun is the subject, not its position. So these two sentences mean the same thing:

: Puella spectat. = The girl watches.
: Spectat puella. = The girl watches.

Most Latin sentences put the verb last, but the order isn't what carries the meaning.

?2

# Latin endings in English

English borrowed some Latin nouns along with their plurals, so you already know these endings.

|~ Latin plurals in English
|1st declension|2nd declension masculine|2nd declension neuter|
|antenna, antennae|alumnus, alumnī|curriculum, curricula|
|larva, larvae|cactus, cactī|stratum, strata|
|nebula, nebulae|fungus, fungī|datum, data|
|vertebra, vertebrae|radius, radiī|bacterium, bacteria|`,
   q:[
    {s:"Choose the verb ending that agrees with a nominative subject",b:[
     {"k":"mc","p":"If *templum* (temple) is the subject, should the verb end in -t or -nt?","o":["-t","-nt"],"a":0,"w":"*templum* is singular.","g":[["templum, -ī, n.","temple"]]},
     {"k":"mc","p":"If *fēminae* (women) is the subject, should the verb end in -t or -nt?","o":["-nt","-t"],"a":0,"w":"-ae is nominative plural here.","g":[["fēmina, -ae, f.","woman"]]},
     {"k":"mc","p":"If *servī* (slaves) is the subject, should the verb end in -t or -nt?","o":["-nt","-t"],"a":0,"w":"-ī is nominative plural in the 2nd declension.","g":[["servus, -ī, m.","slave"]]},
     {"k":"mc","p":"If *dōna* (gifts) is the subject, should the verb end in -t or -nt?","o":["-nt","-t"],"a":0,"w":"-a is plural for 2nd declension neuters.","g":[["dōnum, -ī, n.","gift"]]},
     {"k":"mc","p":"If *rēgīna* (queen) is the subject, should the verb end in -t or -nt?","o":["-t","-nt"],"a":0,"w":"-a is singular in the 1st declension.","g":[["rēgīna, -ae, f.","queen"]]},
     {"k":"mc","p":"If *servus* (slave) is the subject, should the verb end in -t or -nt?","o":["-t","-nt"],"a":0,"w":"-us is singular.","g":[["servus, -ī, m.","slave"]]},
     {"k":"mc","p":"If *templa* (temples) is the subject, should the verb end in -t or -nt?","o":["-nt","-t"],"a":0,"w":"-a is plural for 2nd declension neuters.","g":[["templum, -ī, n.","temple"]]},
     {"k":"mc","p":"If *nautae* (sailors) is the subject, should the verb end in -t or -nt?","o":["-nt","-t"],"a":0,"w":"-ae is plural.","g":[["nauta, -ae, m.","sailor"]]},
     {"k":"mc","p":"If *dōnum* (gift) is the subject, should the verb end in -t or -nt?","o":["-t","-nt"],"a":0,"w":"-um is singular.","g":[["dōnum, -ī, n.","gift"]]},
     {"k":"mc","p":"If *fīliī* (sons) is the subject, should the verb end in -t or -nt?","o":["-nt","-t"],"a":0,"w":"-ī is plural.","g":[["fīlius, -ī, m.","son"]]},
    ]},
    {s:"Translate a short sentence with a nominative subject",b:[
     {"k":"en","p":"Translate into English: *Puella labōrat.*","a":["The girl works.","The girl is working.","The girl does work."],"w":"The nominative is the subject, and the verb ending agrees with it.","g":[["puella, -ae, f.","girl"],["labōrāre, -ō","to work"]]},
     {"k":"la","p":"Translate into Latin: The friends come.","a":["Amīcī veniunt."],"w":"The nominative is the subject, and the verb ending agrees with it.","g":[["amīcus, -ī, m.","friend"],["venīre, -iō","to come"]]},
     {"k":"en","p":"Translate into English: *Nauta nāvigat.*","a":["The sailor sails.","The sailor is sailing.","The sailor does sail."],"w":"The nominative is the subject, and the verb ending agrees with it.","g":[["nauta, -ae, m.","sailor"],["nāvigāre, -ō","to sail"]]},
     {"k":"la","p":"Translate into Latin: The girls sleep.","a":["Puellae dormiunt."],"w":"The nominative is the subject, and the verb ending agrees with it.","g":[["puella, -ae, f.","girl"],["dormīre, -iō","to sleep"]]},
     {"k":"en","p":"Translate into English: *Servus labōrat.*","a":["The slave works.","The slave is working.","The slave does work."],"w":"The nominative is the subject, and the verb ending agrees with it.","g":[["servus, -ī, m.","slave"],["labōrāre, -ō","to work"]]},
     {"k":"la","p":"Translate into Latin: The women come.","a":["Fēminae veniunt."],"w":"The nominative is the subject, and the verb ending agrees with it.","g":[["fēmina, -ae, f.","woman"],["venīre, -iō","to come"]]},
     {"k":"en","p":"Translate into English: *Equus currit.*","a":["The horse runs.","The horse is running.","The horse does run."],"w":"The nominative is the subject, and the verb ending agrees with it.","g":[["equus, -ī, m.","horse"],["currere, -ō","to run"]]},
     {"k":"la","p":"Translate into Latin: The farmers work.","a":["Agricolae labōrant."],"w":"The nominative is the subject, and the verb ending agrees with it.","g":[["agricola, -ae, m.","farmer"],["labōrāre, -ō","to work"]]},
     {"k":"en","p":"Translate into English: *Rēgīna sedet.*","a":["The queen sits.","The queen is sitting.","The queen does sit."],"w":"The nominative is the subject, and the verb ending agrees with it.","g":[["rēgīna, -ae, f.","queen"],["sedēre, -eō","to sit"]]},
     {"k":"la","p":"Translate into Latin: The men fight.","a":["Virī pugnant."],"w":"The nominative is the subject, and the verb ending agrees with it.","g":[["vir, -ī, m.","man"],["pugnāre, -ō","to fight"]]},
    ]},
   ]},
  {id:"accusative",title:"The accusative: direct objects",blurb:"The case for the person or thing that receives the action.",t:["acc"],
   body:`The **accusative** marks the **direct object**: the person or thing that receives the action of the verb.

: Puella rosam portat. = The girl carries a rose.

*Puella* is nominative, so she does the carrying. *Rosam* is accusative, so it gets carried.

|~ Accusative endings
|Number|1st declension|2nd masculine|2nd neuter|
|Singular|[[-am]]|[[-um]]|[[-um]]|
|Plural|[[-ās]]|[[-ōs]]|[[-a]]|

# Endings, not order

Because endings show the job of each noun, you can reorder the words without changing who does what.

: Nauta puellam vocat. = The sailor calls the girl.
: Puellam nauta vocat. = The sailor calls the girl.
: Puella nautam vocat. = The girl calls the sailor.

The last sentence changes the meaning, because the endings changed, not because the words moved.

# Neuters

Every neuter noun looks the same in the nominative and accusative. *Dōnum* can be either, so you need the rest of the sentence to decide. Often the verb helps: if another noun is clearly the subject, the neuter is the object.

: Nauta dōnum portat. = The sailor carries the gift.

! Read a Latin sentence in this order: find the verb, find the nominative, then look for an accusative.

?1

?2`,
   q:[
    {s:"Identify the case of a marked noun in a sentence (nominative or accusative)",b:[
     {"k":"mc","p":"In *Fēmina **rosam** portat*, what case is *rosam*?","o":["accusative","nominative"],"a":0,"w":"-am marks the accusative singular.","g":[["fēmina, -ae, f.","woman"],["rosa, -ae, f.","rose"],["portāre, -ō","to carry"]]},
     {"k":"mc","p":"In ***Nauta** fēminam vocat*, what case is *nauta*?","o":["nominative","accusative"],"a":0,"w":"*nauta* is the subject, the one calling.","g":[["nauta, -ae, m.","sailor"],["fēmina, -ae, f.","woman"],["vocāre, -ō","to call"]]},
     {"k":"mc","p":"In *Agricolae **equōs** spectant*, what case is *equōs*?","o":["accusative","nominative"],"a":0,"w":"-ōs marks the accusative plural.","g":[["agricola, -ae, m.","farmer"],["equus, -ī, m.","horse"],["spectāre, -ō","to watch"]]},
     {"k":"mc","p":"In ***Servī** templum vident*, what case is *servī*?","o":["nominative","accusative"],"a":0,"w":"-ī is the nominative plural of the 2nd declension.","g":[["servus, -ī, m.","slave"],["templum, -ī, n.","temple"],["vidēre, -eō","to see"]]},
     {"k":"mc","p":"In *Rēgīna **nautās** laudat*, what case is *nautās*?","o":["accusative","nominative"],"a":0,"w":"-ās marks the accusative plural.","g":[["rēgīna, -ae, f.","queen"],["nauta, -ae, m.","sailor"],["laudāre, -ō","to praise"]]},
     {"k":"mc","p":"In ***Puellae** fābulam audiunt*, what case is *puellae*?","o":["nominative","accusative"],"a":0,"w":"The plural verb -nt matches the plural subject.","g":[["puella, -ae, f.","girl"],["fābula, -ae, f.","story"],["audīre, -iō","to hear"]]},
     {"k":"mc","p":"In *Puer **librum** legit*, what case is *librum*?","o":["accusative","nominative"],"a":0,"w":"The boy is the subject, so *librum* is the object.","g":[["puer, -ī, m.","boy"],["liber, librī, m.","book"],["legere, -ō","to read"]]},
     {"k":"mc","p":"In *Nauta **dōna** portat*, what case is *dōna*?","o":["accusative","nominative"],"a":0,"w":"*nauta* is the subject, so the neuter *dōna* is the object.","g":[["nauta, -ae, m.","sailor"],["dōnum, -ī, n.","gift"],["portāre, -ō","to carry"]]},
     {"k":"mc","p":"In ***Dōna** puellam dēlectant*, what case is *dōna*?","o":["nominative","accusative"],"a":0,"w":"-nt is plural, *puellam* is clearly accusative, so *dōna* is the subject.","g":[["dōnum, -ī, n.","gift"],["puella, -ae, f.","girl"],["dēlectāre, -ō","to delight"]]},
     {"k":"mc","p":"In *Fēmina **amīcum** videt*, what case is *amīcum*?","o":["accusative","nominative"],"a":0,"w":"-um on a masculine noun is accusative.","g":[["fēmina, -ae, f.","woman"],["amīcus, -ī, m.","friend"],["vidēre, -eō","to see"]]},
    ]},
    {s:"Translate a sentence with a subject and a direct object",b:[
     {"k":"en","p":"Translate into English: *Fēmina rosam spectat.*","a":["The woman watches the rose.","The woman is watching the rose.","The woman does watch the rose."],"w":"The nominative is the subject and the accusative is the direct object.","g":[["fēmina, -ae, f.","woman"],["rosa, -ae, f.","rose"],["spectāre, -ō","to watch"]]},
     {"k":"la","p":"Translate into Latin: The sailor calls the girls.","a":["Nauta puellās vocat."],"w":"The nominative is the subject and the accusative is the direct object.","g":[["nauta, -ae, m.","sailor"],["puella, -ae, f.","girl"],["vocāre, -ō","to call"]]},
     {"k":"en","p":"Translate into English: *Agricolae equōs spectant.*","a":["The farmers watch the horses.","The farmers are watching the horses.","The farmers do watch the horses."],"w":"The nominative is the subject and the accusative is the direct object.","g":[["agricola, -ae, m.","farmer"],["equus, -ī, m.","horse"],["spectāre, -ō","to watch"]]},
     {"k":"la","p":"Translate into Latin: The boy reads the book.","a":["Puer librum legit."],"w":"The nominative is the subject and the accusative is the direct object.","g":[["puer, -ī, m.","boy"],["liber, librī, m.","book"],["legere, -ō","to read"]]},
     {"k":"en","p":"Translate into English: *Fēmina dōna portat.*","a":["The woman carries the gifts.","The woman is carrying the gifts.","The woman does carry the gifts."],"w":"The nominative is the subject and the accusative is the direct object.","g":[["fēmina, -ae, f.","woman"],["dōnum, -ī, n.","gift"],["portāre, -ō","to carry"]]},
     {"k":"la","p":"Translate into Latin: The slaves see the temple.","a":["Servī templum vident."],"w":"The nominative is the subject and the accusative is the direct object.","g":[["servus, -ī, m.","slave"],["templum, -ī, n.","temple"],["vidēre, -eō","to see"]]},
     {"k":"en","p":"Translate into English: *Amīcus puerum audit.*","a":["The friend hears the boy.","The friend is hearing the boy.","The friend does hear the boy."],"w":"The nominative is the subject and the accusative is the direct object.","g":[["amīcus, -ī, m.","friend"],["puer, -ī, m.","boy"],["audīre, -iō","to hear"]]},
     {"k":"la","p":"Translate into Latin: The queen praises the sailors.","a":["Rēgīna nautās laudat."],"w":"The nominative is the subject and the accusative is the direct object.","g":[["rēgīna, -ae, f.","queen"],["nauta, -ae, m.","sailor"],["laudāre, -ō","to praise"]]},
     {"k":"en","p":"Translate into English: *Magister discipulōs docet.*","a":["The teacher teaches the students.","The teacher is teaching the students.","The teacher does teach the students."],"w":"The nominative is the subject and the accusative is the direct object.","g":[["magister, -trī, m.","teacher"],["discipulus, -ī, m.","student"],["docēre, -eō","to teach"]]},
     {"k":"la","p":"Translate into Latin: The girls write the stories.","a":["Puellae fābulās scrībunt."],"w":"The nominative is the subject and the accusative is the direct object.","g":[["puella, -ae, f.","girl"],["fābula, -ae, f.","story"],["scrībere, -ō","to write"]]},
    ]},
   ]},
  {id:"dative",title:"The dative: to and for",blurb:"Indirect objects, and the person an action is done for.",t:["dat","datref"],
   body:`The **dative** marks someone who is interested in or affected by an action. In English you usually translate it with *to* or *for*.

|~ Dative endings
|Number|1st declension|2nd masculine|2nd neuter|
|Singular|[[-ae]]|[[-ō]]|[[-ō]]|
|Plural|[[-īs]]|[[-īs]]|[[-īs]]|

# Indirect object

Verbs of giving, showing and telling often have an **indirect object**: the person who receives the direct object.

: Puella nautae rosam dat. = The girl gives a rose to the sailor.

English can also say *gives the sailor a rose*, with no *to*. Either translation is correct.

: Magister puerīs fābulam narrat. = The teacher tells the boys a story.
: Fēmina amīcō dōnum mōnstrat. = The woman shows the gift to a friend.

# Dative of reference

The dative also names the person an action is done **for**.

: Agricola fīliō labōrat. = The farmer works for his son.
: Puella amīcae cibum parat. = The girl prepares food for her friend.

! *Puellae* can be dative singular or nominative plural. Check the verb: a plural verb suggests nominative plural, and a singular verb with a different subject means dative.

?1

?2`,
   q:[
    {s:"Identify whether a form ending in -ae or -īs is dative or something else, using the sentence",b:[
     {"k":"mc","p":"In *Fēmina **nautae** rosam dat*, what case is *nautae*?","o":["dative","nominative","accusative"],"a":0,"w":"*fēmina* is the singular subject, so *nautae* is the receiver.","g":[["fēmina, -ae, f.","woman"],["nauta, -ae, m.","sailor"],["rosa, -ae, f.","rose"],["dare, dō","to give"]]},
     {"k":"mc","p":"In ***Nautae** rosam portant*, what case is *nautae*?","o":["nominative","dative","accusative"],"a":0,"w":"The plural verb needs a plural subject.","g":[["nauta, -ae, m.","sailor"],["rosa, -ae, f.","rose"],["portāre, -ō","to carry"]]},
     {"k":"mc","p":"In *Magister **puellīs** fābulam narrat*, what case is *puellīs*?","o":["dative","nominative","accusative"],"a":0,"w":"-īs is dative plural here: told to the girls.","g":[["magister, -trī, m.","teacher"],["puella, -ae, f.","girl"],["fābula, -ae, f.","story"],["narrāre, -ō","to tell"]]},
     {"k":"mc","p":"In *Rēgīna **agricolīs** aurum dat*, what case is *agricolīs*?","o":["dative","nominative","accusative"],"a":0,"w":"-īs is dative plural.","g":[["rēgīna, -ae, f.","queen"],["agricola, -ae, m.","farmer"],["aurum, -ī, n.","gold"],["dare, dō","to give"]]},
     {"k":"mc","p":"In ***Puellae** dormiunt*, what case is *puellae*?","o":["nominative","dative","accusative"],"a":0,"w":"The plural verb needs a plural subject.","g":[["puella, -ae, f.","girl"],["dormīre, -iō","to sleep"]]},
     {"k":"mc","p":"In *Servus **dominō** equum trādit*, what case is *dominō*?","o":["dative","nominative","accusative"],"a":0,"w":"-ō on a noun receiving something is dative.","g":[["servus, -ī, m.","slave"],["dominus, -ī, m.","master"],["equus, -ī, m.","horse"],["trādere, -ō","to hand over"]]},
     {"k":"mc","p":"In *Fēmina **fīliae** pecūniam dat*, what case is *fīliae*?","o":["dative","nominative","accusative"],"a":0,"w":"The singular subject *fēmina* matches *dat*, so *fīliae* is the receiver.","g":[["fēmina, -ae, f.","woman"],["fīlia, -ae, f.","daughter"],["pecūnia, -ae, f.","money"],["dare, dō","to give"]]},
     {"k":"mc","p":"In *Agricola **amīcō** labōrat*, how should *amīcō* be translated?","o":["for a friend","a friend","of a friend"],"a":0,"w":"This is a dative of reference.","g":[["agricola, -ae, m.","farmer"],["amīcus, -ī, m.","friend"],["labōrāre, -ō","to work"]]},
     {"k":"mc","p":"In *Puer **puellae** cibum parat*, how should *puellae* be translated?","o":["for the girl","the girls","of the girls"],"a":0,"w":"*puer* is the subject and *cibum* the object, so *puellae* is dative.","g":[["puer, -ī, m.","boy"],["puella, -ae, f.","girl"],["cibus, -ī, m.","food"],["parāre, -ō","to prepare"]]},
     {"k":"mc","p":"In *Puer amīcīs fābulam narrat*, who hears the story?","o":["the friends","the boy","the story"],"a":0,"w":"*amīcīs* is dative plural.","g":[["puer, -ī, m.","boy"],["amīcus, -ī, m.","friend"],["fābula, -ae, f.","story"],["narrāre, -ō","to tell"]]},
    ]},
    {s:"Translate a sentence with a dative",b:[
     {"k":"en","p":"Translate into English: *Puella agricolae rosam dat.*","a":["The girl gives the farmer a rose.","The girl gives a rose to the farmer.","The girl is giving the farmer a rose.","The girl is giving a rose to the farmer.","The girl does give the farmer a rose.","The girl does give a rose to the farmer."],"w":"The dative is translated with to or for.","g":[["puella, -ae, f.","girl"],["agricola, -ae, m.","farmer"],["rosa, -ae, f.","rose"],["dare, dō","to give"]]},
     {"k":"la","p":"Translate into Latin: The poet tells the boys a story.","a":["Poēta puerīs fābulam narrat."],"w":"The dative is translated with to or for.","g":[["poēta, -ae, m.","poet"],["puer, -ī, m.","boy"],["fābula, -ae, f.","story"],["narrāre, -ō","to tell"]]},
     {"k":"en","p":"Translate into English: *Fēmina amīcae pecūniam mōnstrat.*","a":["The woman shows the friend the money.","The woman shows the money to the friend.","The woman is showing the friend the money.","The woman is showing the money to the friend.","The woman does show the friend the money.","The woman does show the money to the friend."],"w":"The dative is translated with to or for.","g":[["fēmina, -ae, f.","woman"],["amīca, -ae, f.","friend"],["pecūnia, -ae, f.","money"],["mōnstrāre, -ō","to show"]]},
     {"k":"la","p":"Translate into Latin: The slave hands over the horse to the master.","a":["Servus dominō equum trādit."],"w":"The dative is translated with to or for.","g":[["servus, -ī, m.","slave"],["dominus, -ī, m.","master"],["equus, -ī, m.","horse"],["trādere, -ō","to hand over"]]},
     {"k":"en","p":"Translate into English: *Rēgīna agricolīs aurum dat.*","a":["The queen gives the farmers gold.","The queen gives gold to the farmers.","The queen is giving the farmers gold.","The queen is giving gold to the farmers.","The queen does give the farmers gold.","The queen does give gold to the farmers."],"w":"The dative is translated with to or for.","g":[["rēgīna, -ae, f.","queen"],["agricola, -ae, m.","farmer"],["aurum, -ī, n.","gold"],["dare, dō","to give"]]},
     {"k":"la","p":"Translate into Latin: The sailors give the girls gifts.","a":["Nautae puellīs dōna dant."],"w":"The dative is translated with to or for.","g":[["nauta, -ae, m.","sailor"],["puella, -ae, f.","girl"],["dōnum, -ī, n.","gift"],["dare, dō","to give"]]},
     {"k":"en","p":"Translate into English: *Nauta fīliō labōrat.*","a":["The sailor works for the son.","The sailor is working for the son.","The sailor does work for the son."],"w":"The dative is translated with to or for.","g":[["nauta, -ae, m.","sailor"],["fīlius, -ī, m.","son"],["labōrāre, -ō","to work"]]},
     {"k":"la","p":"Translate into Latin: The woman prepares food for the friend.","a":["Fēmina amīcae cibum parat."],"w":"The dative is translated with to or for.","g":[["fēmina, -ae, f.","woman"],["amīca, -ae, f.","friend"],["cibus, -ī, m.","food"],["parāre, -ō","to prepare"]]},
     {"k":"en","p":"Translate into English: *Vir fēminae epistulam scrībit.*","a":["The man writes a letter to the woman.","The man writes a letter for the woman.","The man is writing a letter to the woman.","The man is writing a letter for the woman.","The man does write a letter to the woman.","The man does write a letter for the woman."],"w":"The dative is translated with to or for.","g":[["vir, -ī, m.","man"],["fēmina, -ae, f.","woman"],["epistula, -ae, f.","letter"],["scrībere, -ō","to write"]]},
     {"k":"la","p":"Translate into Latin: The boys save the horse for the friend.","a":["Puerī amīcō equum servant."],"w":"The dative is translated with to or for.","g":[["puer, -ī, m.","boy"],["amīcus, -ī, m.","friend"],["equus, -ī, m.","horse"],["servāre, -ō","to save"]]},
    ]},
   ]},
  {id:"ablative",title:"The ablative and prepositions",blurb:"A new case, and the small words that use it.",t:["d1","d2"],
   body:`The **ablative** tells you things like where, how and with whom something happens. You will learn its uses in later lessons. Start with its forms.

|~ Ablative endings
|Number|1st declension|2nd masculine|2nd neuter|
|Singular|[[-ā]]|[[-ō]]|[[-ō]]|
|Plural|[[-īs]]|[[-īs]]|[[-īs]]|

The ablative singular of the 1st declension looks like the nominative, except for the macron. *Puella* is nominative, and *puellā* is ablative.

Plurals look like the dative, so *puerīs* could be either. The sentence decides.

# Prepositions

A **preposition** is a small word placed before a noun. In Latin, each preposition takes a particular case.

|~ Common prepositions
|With the accusative|Meaning|With the ablative|Meaning|
|ad|to, toward|ā, ab|away from, by|
|in|into|in|in, on|
|per|through|ē, ex|out of|
|trāns|across|cum|with|
|prope|near|sine|without|

*In* takes either case, and the case changes the meaning.

: in silvam = into the forest (accusative: motion)
: in silvā = in the forest (ablative: location)

*Ā* and *ē* are used before consonants. *Ab* and *ex* are used before vowels, and may be used before consonants too.

: ā silvā = away from the forest
: ab īnsulā = away from the island
: ex oppidō = out of the town

?1

?2`,
   q:[
    {s:"Choose the correct noun form after a preposition",b:[
     {"k":"mc","p":"Pick the right form: *cum ___* (with a friend)","o":["*amīcō*","*amīcum*","*amīcus*","*amīcī*"],"a":0,"w":"*cum* takes the ablative.","g":[["cum (+abl)","with"],["amīcus, -ī, m.","friend"]]},
     {"k":"mc","p":"Pick the right form: *ad ___* (to the garden)","o":["*hortum*","*hortō*","*hortus*","*hortī*"],"a":0,"w":"*ad* takes the accusative.","g":[["ad (+acc)","to, toward"],["hortus, -ī, m.","garden"]]},
     {"k":"mc","p":"Pick the right form: *sine ___* (without water)","o":["*aquā*","*aquam*","*aqua*","*aquae*"],"a":0,"w":"*sine* takes the ablative.","g":[["sine (+abl)","without"],["aqua, -ae, f.","water"]]},
     {"k":"mc","p":"Pick the right form: *in ___* (in the temple)","o":["*templō*","*templum*","*templa*","*templī*"],"a":0,"w":"Location uses *in* with the ablative.","g":[["in","in, on (+abl); into (+acc)"],["templum, -ī, n.","temple"]]},
     {"k":"mc","p":"Pick the right form: *in ___* (into the town)","o":["*oppidum*","*oppidō*","*oppidī*","*oppidīs*"],"a":0,"w":"Motion into uses *in* with the accusative.","g":[["in","in, on (+abl); into (+acc)"],["oppidum, -ī, n.","town"]]},
     {"k":"mc","p":"Pick the right form: *per ___* (through the roads)","o":["*viās*","*viīs*","*viae*","*viā*"],"a":0,"w":"*per* takes the accusative.","g":[["per (+acc)","through"],["via, -ae, f.","road"]]},
     {"k":"mc","p":"Pick the right form: *ex ___* (out of the garden)","o":["*hortō*","*hortum*","*hortus*","*hortī*"],"a":0,"w":"*ex* takes the ablative.","g":[["ē, ex (+abl)","out of"],["hortus, -ī, m.","garden"]]},
     {"k":"mc","p":"Pick the right form: *ab ___* (away from the field)","o":["*agrō*","*agrum*","*ager*","*agrī*"],"a":0,"w":"*ab* takes the ablative.","g":[["ā, ab (+abl)","away from; by"],["ager, agrī, m.","field"]]},
     {"k":"mc","p":"Pick the right form: *trāns ___* (across the fields)","o":["*agrōs*","*agrīs*","*agrī*","*agrō*"],"a":0,"w":"*trāns* takes the accusative.","g":[["trāns (+acc)","across"],["ager, agrī, m.","field"]]},
     {"k":"mc","p":"Pick the right form: *cum ___* (with the girls)","o":["*puellīs*","*puellās*","*puellae*","*puellā*"],"a":0,"w":"*cum* takes the ablative.","g":[["cum (+abl)","with"],["puella, -ae, f.","girl"]]},
    ]},
    {s:"Translate a phrase or sentence using a preposition",b:[
     {"k":"en","p":"Translate into English: *Nauta ad īnsulam nāvigat.*","a":["The sailor sails to the island.","The sailor is sailing to the island.","The sailor does sail to the island."],"w":"The preposition decides the case of the noun after it.","g":[["nauta, -ae, m.","sailor"],["ad (+acc)","to, toward"],["īnsula, -ae, f.","island"],["nāvigāre, -ō","to sail"]]},
     {"k":"la","p":"Translate into Latin: The girl walks in the forest.","a":["Puella in silvā ambulat."],"w":"The preposition decides the case of the noun after it.","g":[["puella, -ae, f.","girl"],["in","in, on (+abl); into (+acc)"],["silva, -ae, f.","forest"],["ambulāre, -ō","to walk"]]},
     {"k":"en","p":"Translate into English: *Agricola ex agrō venit.*","a":["The farmer comes out of the field.","The farmer is coming out of the field.","The farmer does come out of the field."],"w":"The preposition decides the case of the noun after it.","g":[["agricola, -ae, m.","farmer"],["ē, ex (+abl)","out of"],["ager, agrī, m.","field"],["venīre, -iō","to come"]]},
     {"k":"la","p":"Translate into Latin: The boys run into the forest.","a":["Puerī in silvam currunt."],"w":"The preposition decides the case of the noun after it.","g":[["puer, -ī, m.","boy"],["in","in, on (+abl); into (+acc)"],["silva, -ae, f.","forest"],["currere, -ō","to run"]]},
     {"k":"en","p":"Translate into English: *Fēmina cum amīcā ambulat.*","a":["The woman walks with the friend.","The woman is walking with the friend.","The woman does walk with the friend."],"w":"The preposition decides the case of the noun after it.","g":[["fēmina, -ae, f.","woman"],["cum (+abl)","with"],["amīca, -ae, f.","friend"],["ambulāre, -ō","to walk"]]},
     {"k":"la","p":"Translate into Latin: The slave comes without the horse.","a":["Servus sine equō venit."],"w":"The preposition decides the case of the noun after it.","g":[["servus, -ī, m.","slave"],["sine (+abl)","without"],["equus, -ī, m.","horse"],["venīre, -iō","to come"]]},
     {"k":"en","p":"Translate into English: *Virī per viās ambulant.*","a":["The men walk through the roads.","The men are walking through the roads.","The men do walk through the roads."],"w":"The preposition decides the case of the noun after it.","g":[["vir, -ī, m.","man"],["per (+acc)","through"],["via, -ae, f.","road"],["ambulāre, -ō","to walk"]]},
     {"k":"la","p":"Translate into Latin: The sailors sail away from the island.","a":["Nautae ab īnsulā nāvigant."],"w":"The preposition decides the case of the noun after it.","g":[["nauta, -ae, m.","sailor"],["ā, ab (+abl)","away from; by"],["īnsula, -ae, f.","island"],["nāvigāre, -ō","to sail"]]},
     {"k":"en","p":"Translate into English: *Equus trāns agrum currit.*","a":["The horse runs across the field.","The horse is running across the field.","The horse does run across the field."],"w":"The preposition decides the case of the noun after it.","g":[["equus, -ī, m.","horse"],["trāns (+acc)","across"],["ager, agrī, m.","field"],["currere, -ō","to run"]]},
     {"k":"la","p":"Translate into Latin: The girl sits near the house.","a":["Puella prope casam sedet."],"w":"The preposition decides the case of the noun after it.","g":[["puella, -ae, f.","girl"],["prope (+acc)","near"],["casa, -ae, f.","house"],["sedēre, -eō","to sit"]]},
    ]},
   ]},
  {id:"decl12",title:"The 1st and 2nd declensions in full",blurb:"Every ending together, including -er nouns and the genitive forms.",t:["d1","d2","tricky"],
   body:`Here are all the endings together. The genitive forms are included so the chart is complete. Their uses come in a later lesson.

|~ 1st and 2nd declension endings
|Case|1st sg.|1st pl.|2nd m. sg.|2nd m. pl.|2nd n. sg.|2nd n. pl.|
|Nominative|-a|-ae|-us|-ī|-um|-a|
|Accusative|-am|-ās|-um|-ōs|-um|-a|
|Dative|-ae|-īs|-ō|-īs|-ō|-īs|
|Ablative|-ā|-īs|-ō|-īs|-ō|-īs|
|Genitive|-ae|-ārum|-ī|-ōrum|-ī|-ōrum|

A dictionary lists a noun with its genitive singular and gender, because the genitive shows which declension it belongs to.

: puella, -ae, f. = girl (genitive -ae: 1st declension)
: amīcus, -ī, m. = friend (genitive -ī: 2nd declension)
: dōnum, -ī, n. = gift (genitive -ī: 2nd declension)

# Nouns in -er and vir

Some masculine nouns of the 2nd declension have no *-us* in the nominative singular. After that form, they use the normal endings.

: puer, puerī = boy (keeps the e)
: ager, agrī = field (drops the e)
: magister, magistrī = teacher (drops the e)
: vir, virī = man

The genitive tells you the real stem: drop its ending, and add the others. So *ager* becomes *agrum*, *agrō*, *agrī*.

# Nouns that don't look like their gender

Gender doesn't always match the ending. A few 1st declension nouns naming men are masculine: *nauta* (sailor), *agricola* (farmer), *poēta* (poet). A few 2nd declension nouns in *-us* are neuter: *pelagus* (sea), *vīrus* (poison), *vulgus* (crowd). They keep their own endings.

One more spelling note: *dea* and *fīlia* use *-ābus* in the dative and ablative plural, *deābus* and *fīliābus*, so they aren't confused with *deīs* (gods) and *fīliīs* (sons).

?1

?2`,
   q:[
    {s:"Write a named case and number of a 1st or 2nd declension noun",b:[
     {"k":"la","p":"Write the accusative plural of *puella*.","a":["puellās"],"w":"The accusative plural of *puella* is *puellās*.","g":[["puella, -ae, f.","girl"]]},
     {"k":"la","p":"Write the accusative singular of *amīcus*.","a":["amīcum"],"w":"The accusative singular of *amīcus* is *amīcum*.","g":[["amīcus, -ī, m.","friend"]]},
     {"k":"la","p":"Write the nominative plural of *dōnum*.","a":["dōna"],"w":"The nominative plural of *dōnum* is *dōna*.","g":[["dōnum, -ī, n.","gift"]]},
     {"k":"la","p":"Write the dative singular of *nauta*.","a":["nautae"],"w":"The dative singular of *nauta* is *nautae*.","g":[["nauta, -ae, m.","sailor"]]},
     {"k":"la","p":"Write the ablative plural of *ager*.","a":["agrīs"],"w":"The ablative plural of *ager* is *agrīs*.","g":[["ager, agrī, m.","field"]]},
     {"k":"la","p":"Write the ablative plural of *puer*.","a":["puerīs"],"w":"The ablative plural of *puer* is *puerīs*.","g":[["puer, -ī, m.","boy"]]},
     {"k":"la","p":"Write the ablative singular of *via*.","a":["viā"],"w":"The ablative singular of *via* is *viā*.","m":1,"g":[["via, -ae, f.","road"]]},
     {"k":"la","p":"Write the nominative plural of *liber*.","a":["librī"],"w":"The nominative plural of *liber* is *librī*.","g":[["liber, librī, m.","book"]]},
     {"k":"la","p":"Write the genitive plural of *fēmina*.","a":["fēminārum"],"w":"The genitive plural of *fēmina* is *fēminārum*.","g":[["fēmina, -ae, f.","woman"]]},
     {"k":"la","p":"Write the genitive plural of *templum*.","a":["templōrum"],"w":"The genitive plural of *templum* is *templōrum*.","g":[["templum, -ī, n.","temple"]]},
    ]},
    {s:"Identify the possible cases of an ambiguous noun form",b:[
     {"k":"mc","p":"*puellae* could be...","o":["genitive singular, dative singular or nominative plural","only nominative plural","accusative plural or dative plural","ablative singular or accusative singular"],"a":0,"w":"1st declension -ae has three uses.","g":[["puella, -ae, f.","girl"]]},
     {"k":"mc","p":"*amīcī* could be...","o":["genitive singular or nominative plural","dative singular or accusative plural","only nominative plural","ablative plural or dative plural"],"a":0,"w":"2nd declension -ī has two uses.","g":[["amīcus, -ī, m.","friend"]]},
     {"k":"mc","p":"*dōna* could be...","o":["nominative plural or accusative plural","nominative singular","ablative singular","genitive plural"],"a":0,"w":"Neuter plural nominative and accusative end in -a.","g":[["dōnum, -ī, n.","gift"]]},
     {"k":"mc","p":"*amīcō* could be...","o":["dative singular or ablative singular","accusative plural","nominative singular","genitive plural"],"a":0,"w":"2nd declension -ō has two uses.","g":[["amīcus, -ī, m.","friend"]]},
     {"k":"mc","p":"*puellīs* could be...","o":["dative plural or ablative plural","accusative plural","genitive singular","nominative plural"],"a":0,"w":"-īs has two uses.","g":[["puella, -ae, f.","girl"]]},
     {"k":"mc","p":"*templum* could be...","o":["nominative singular or accusative singular","only accusative singular","genitive plural","dative singular"],"a":0,"w":"Neuter nominative and accusative match.","g":[["templum, -ī, n.","temple"]]},
     {"k":"mc","p":"*puellārum* is...","o":["genitive plural","dative plural","accusative plural","ablative plural"],"a":0,"w":"-ārum is 1st declension genitive plural.","g":[["puella, -ae, f.","girl"]]},
     {"k":"mc","p":"*virōrum* is...","o":["genitive plural","accusative plural","dative plural","nominative plural"],"a":0,"w":"-ōrum is 2nd declension genitive plural.","g":[["vir, -ī, m.","man"]]},
     {"k":"mc","p":"*nautam* is...","o":["accusative singular","nominative singular","genitive plural","accusative plural"],"a":0,"w":"-am is accusative singular, even for a masculine noun.","g":[["nauta, -ae, m.","sailor"]]},
     {"k":"mc","p":"*agrōs* is...","o":["accusative plural","dative plural","nominative plural","genitive plural"],"a":0,"w":"-ōs is accusative plural.","g":[["ager, agrī, m.","field"]]},
    ]},
   ]},
  {id:"agreement",title:"Noun-adjective agreement",blurb:"How adjectives match the nouns they describe.",t:["adj12"],
   body:`An **adjective** describes a noun. In Latin it must **agree** with its noun in three ways: **gender**, **number** and **case**.

Adjectives like *bonus -a -um* (good) use 2nd declension endings for masculine and neuter, and 1st declension endings for feminine.

|~ Three forms of bonus
|Case|Masculine|Feminine|Neuter|
|Nom. sg.|bon[[us]]|bon[[a]]|bon[[um]]|
|Acc. sg.|bon[[um]]|bon[[am]]|bon[[um]]|
|Nom. pl.|bon[[ī]]|bon[[ae]]|bon[[a]]|
|Acc. pl.|bon[[ōs]]|bon[[ās]]|bon[[a]]|

: puella bona = the good girl
: amīcus bonus = the good friend
: dōnum bonum = the good gift

Agreement doesn't mean the endings look the same. *Nauta* is masculine, so it takes a masculine adjective:

: nauta bonus = the good sailor
: nautae bonī = the good sailors
: agricolam laetum = the happy farmer (accusative)

Some adjectives have no *-us*: *pulcher, pulchra, pulchrum* (beautiful) and *miser, misera, miserum* (wretched).

In Latin the adjective usually follows its noun, but adjectives of size and number often come first: *magnum oppidum*, the great town.

?1

?2`,
   q:[
    {s:"Choose the adjective form that agrees with a noun",b:[
     {"k":"mc","p":"Choose: *puella ___* (happy)","o":["*laeta*","*laetus*","*laetum*","*laetam*"],"a":0,"w":"Feminine nominative singular.","g":[["puella, -ae, f.","girl"],["laetus -a -um","happy"]]},
     {"k":"mc","p":"Choose: *nauta ___* (tired)","o":["*fessus*","*fessa*","*fessum*","*fessam*"],"a":0,"w":"*nauta* is masculine.","g":[["nauta, -ae, m.","sailor"],["fessus -a -um","tired"]]},
     {"k":"mc","p":"Choose: *dōna ___* (new)","o":["*nova*","*novae*","*novī*","*novum*"],"a":0,"w":"Neuter plural nominative or accusative.","g":[["dōnum, -ī, n.","gift"],["novus -a -um","new"]]},
     {"k":"mc","p":"Choose: *amīcōs ___* (happy)","o":["*laetōs*","*laetās*","*laetī*","*laetīs*"],"a":0,"w":"Masculine accusative plural.","g":[["amīcus, -ī, m.","friend"],["laetus -a -um","happy"]]},
     {"k":"mc","p":"Choose: *agricolam ___* (tired)","o":["*fessum*","*fessam*","*fessa*","*fessus*"],"a":0,"w":"*agricola* is masculine, so accusative -um.","g":[["agricola, -ae, m.","farmer"],["fessus -a -um","tired"]]},
     {"k":"mc","p":"Choose: *puellīs ___* (happy)","o":["*laetīs*","*laetās*","*laetae*","*laetōrum*"],"a":0,"w":"Dative or ablative plural.","g":[["puella, -ae, f.","girl"],["laetus -a -um","happy"]]},
     {"k":"mc","p":"Choose: *viā ___* (wide)","o":["*lātā*","*lātam*","*lātō*","*lātus*"],"a":0,"w":"Feminine ablative singular.","g":[["via, -ae, f.","road"],["lātus -a -um","wide"]]},
     {"k":"mc","p":"Choose: *poētae ___* (famous, nominative plural)","o":["*clārī*","*clārae*","*clāra*","*clārōs*"],"a":0,"w":"*poēta* is masculine.","g":[["poēta, -ae, m.","poet"],["clārus -a -um","famous"]]},
     {"k":"mc","p":"Choose: *templum ___* (ancient)","o":["*antīquum*","*antīquus*","*antīqua*","*antīquam*"],"a":0,"w":"Neuter singular.","g":[["templum, -ī, n.","temple"],["antīquus -a -um","ancient"]]},
     {"k":"mc","p":"Choose: *vīrus ___* (bad)","o":["*malum*","*malus*","*mala*","*malī*"],"a":0,"w":"*vīrus* is neuter despite its -us.","g":[["vīrus, -ī, n.","poison"],["malus -a -um","bad"]]},
    ]},
    {s:"Translate a sentence with an adjective",b:[
     {"k":"en","p":"Translate into English: *Puella bona rosam portat.*","a":["The good girl carries the rose.","The good girl is carrying the rose.","The good girl does carry the rose."],"w":"Each adjective agrees with its noun in gender, number and case.","g":[["puella, -ae, f.","girl"],["bonus -a -um","good"],["rosa, -ae, f.","rose"],["portāre, -ō","to carry"]]},
     {"k":"la","p":"Translate into Latin: The tired sailor sleeps.","a":["Nauta fessus dormit."],"w":"Each adjective agrees with its noun in gender, number and case.","g":[["nauta, -ae, m.","sailor"],["fessus -a -um","tired"],["dormīre, -iō","to sleep"]]},
     {"k":"en","p":"Translate into English: *Agricolae laetī labōrant.*","a":["The happy farmers work.","The happy farmers are working.","The happy farmers do work."],"w":"Each adjective agrees with its noun in gender, number and case.","g":[["agricola, -ae, m.","farmer"],["laetus -a -um","happy"],["labōrāre, -ō","to work"]]},
     {"k":"la","p":"Translate into Latin: The woman reads the new book.","a":["Fēmina novum librum legit."],"w":"Each adjective agrees with its noun in gender, number and case.","g":[["fēmina, -ae, f.","woman"],["novus -a -um","new"],["liber, librī, m.","book"],["legere, -ō","to read"]]},
     {"k":"en","p":"Translate into English: *Puer parvus magnum equum spectat.*","a":["The small boy watches the great horse.","The small boy watches the big horse.","The small boy is watching the great horse.","The small boy is watching the big horse.","The small boy does watch the great horse.","The small boy does watch the big horse."],"w":"Each adjective agrees with its noun in gender, number and case.","g":[["puer, -ī, m.","boy"],["parvus -a -um","small"],["magnus -a -um","great"],["equus, -ī, m.","horse"],["spectāre, -ō","to watch"]]},
     {"k":"la","p":"Translate into Latin: The famous queen praises the honest sailors.","a":["Rēgīna clāra nautās probōs laudat."],"w":"Each adjective agrees with its noun in gender, number and case.","g":[["rēgīna, -ae, f.","queen"],["clārus -a -um","famous"],["nauta, -ae, m.","sailor"],["probus -a -um","honest"],["laudāre, -ō","to praise"]]},
     {"k":"en","p":"Translate into English: *Virī īrātī pugnant.*","a":["The angry men fight.","The angry men are fighting.","The angry men do fight."],"w":"Each adjective agrees with its noun in gender, number and case.","g":[["vir, -ī, m.","man"],["īrātus -a -um","angry"],["pugnāre, -ō","to fight"]]},
     {"k":"la","p":"Translate into Latin: The wretched poet writes a story.","a":["Poēta miser fābulam scrībit."],"w":"Each adjective agrees with its noun in gender, number and case.","g":[["poēta, -ae, m.","poet"],["miser misera miserum","wretched"],["fābula, -ae, f.","story"],["scrībere, -ō","to write"]]},
     {"k":"en","p":"Translate into English: *Dea pulchra templum antīquum servat.*","a":["The beautiful goddess saves the ancient temple.","The beautiful goddess is saving the ancient temple.","The beautiful goddess does save the ancient temple."],"w":"Each adjective agrees with its noun in gender, number and case.","g":[["dea, -ae, f.","goddess"],["pulcher pulchra pulchrum","beautiful"],["templum, -ī, n.","temple"],["antīquus -a -um","ancient"],["servāre, -ō","to save"]]},
     {"k":"la","p":"Translate into Latin: The good friends give the girl gifts.","a":["Amīcī bonī puellae dōna dant."],"w":"Each adjective agrees with its noun in gender, number and case.","g":[["amīcus, -ī, m.","friend"],["bonus -a -um","good"],["puella, -ae, f.","girl"],["dōnum, -ī, n.","gift"],["dare, dō","to give"]]},
    ]},
   ]},
  {id:"vocative",title:"The vocative and apposition",blurb:"Calling someone by name, and renaming a noun.",t:["voc","appos"],
   body:`# The vocative

The **vocative** is used to address someone directly. It is usually set off with commas.

: Salvē, amīce! = Hello, friend!
: Audīte, puellae! = Listen, girls!

In most nouns the vocative is the same as the nominative. There are two exceptions, both in the 2nd declension singular.

|~ Vocative
|Nominative|Vocative|Rule|
|Marcus|Marc[[e]]|-us becomes -e|
|amīcus|amīc[[e]]|-us becomes -e|
|Vergilius|Vergil[[ī]]|names in -ius become -ī|
|fīlius|fīl[[ī]]|*fīlius* becomes *fīlī*|
|puella|puella|same as nominative|
|puer|puer|same as nominative|

# Apposition

A noun in **apposition** renames another noun next to it. The two nouns are in the same case.

: Marcus, nauta, labōrat. = Marcus, a sailor, works.
: Marcum, nautam, videō. = I see Marcus, a sailor.
: Iūliae, amīcae, rosam dō. = I give a rose to Julia, my friend.

?1

?2`,
   q:[
    {s:"Write the vocative of a noun",b:[
     {"k":"la","p":"Write the vocative singular of *Sextus*.","a":["Sexte"],"w":"-us becomes -e."},
     {"k":"la","p":"Write the vocative singular of *vīcīnus*.","a":["vīcīne"],"w":"-us becomes -e.","g":[["vīcīnus, -ī, m.","neighbor"]]},
     {"k":"la","p":"Write the vocative singular of *Cornēlius*.","a":["Cornēlī"],"w":"Names in -ius become -ī."},
     {"k":"la","p":"Write the vocative singular of *Horātius*.","a":["Horātī"],"w":"Names in -ius become -ī."},
     {"k":"la","p":"Write the vocative singular of *fēmina*.","a":["fēmina"],"w":"Same as the nominative.","g":[["fēmina, -ae, f.","woman"]]},
     {"k":"la","p":"Write the vocative singular of *servus*.","a":["serve"],"w":"-us becomes -e.","g":[["servus, -ī, m.","slave"]]},
     {"k":"la","p":"Write the vocative singular of *vir*.","a":["vir"],"w":"Same as the nominative.","g":[["vir, -ī, m.","man"]]},
     {"k":"la","p":"Write the vocative plural of *amīcus*.","a":["amīcī"],"w":"Plurals match the nominative.","g":[["amīcus, -ī, m.","friend"]]},
     {"k":"la","p":"Write the vocative singular of *dominus*.","a":["domine"],"w":"-us becomes -e.","g":[["dominus, -ī, m.","master"]]},
     {"k":"la","p":"Write the vocative singular of *Tiberius*.","a":["Tiberī"],"w":"Names in -ius become -ī."},
    ]},
    {s:"Translate a sentence with a vocative or a noun in apposition",b:[
     {"k":"en","p":"Translate into English: *Amīce, puellam vidēs.*","a":["Friend, you see the girl.","Friend, you are seeing the girl.","Friend, you do see the girl."],"w":"A vocative names the person spoken to. A noun in apposition matches the case of the noun it renames.","g":[["amīcus, -ī, m.","friend"],["puella, -ae, f.","girl"],["vidēre, -eō","to see"]]},
     {"k":"la","p":"Translate into Latin: Sextus, the sailor, works.","a":["Sextus, nauta, labōrat."],"w":"A vocative names the person spoken to. A noun in apposition matches the case of the noun it renames.","g":[["nauta, -ae, m.","sailor"],["labōrāre, -ō","to work"]]},
     {"k":"en","p":"Translate into English: *Puellae, rosās portātis.*","a":["Girls, you carry the roses.","Girls, you are carrying the roses.","Girls, you do carry the roses."],"w":"A vocative names the person spoken to. A noun in apposition matches the case of the noun it renames.","g":[["puella, -ae, f.","girl"],["rosa, -ae, f.","rose"],["portāre, -ō","to carry"]]},
     {"k":"la","p":"Translate into Latin: They call Marcus, the slave.","a":["Marcum, servum, vocant."],"w":"A vocative names the person spoken to. A noun in apposition matches the case of the noun it renames.","g":[["servus, -ī, m.","slave"],["vocāre, -ō","to call"]]},
     {"k":"en","p":"Translate into English: *Serve, labōrās.*","a":["Slave, you work.","Slave, you are working.","Slave, you do work."],"w":"A vocative names the person spoken to. A noun in apposition matches the case of the noun it renames.","g":[["servus, -ī, m.","slave"],["labōrāre, -ō","to work"]]},
     {"k":"la","p":"Translate into Latin: I give Flavia, the friend, a rose.","a":["Flāviae, amīcae, rosam dō."],"w":"A vocative names the person spoken to. A noun in apposition matches the case of the noun it renames.","g":[["amīca, -ae, f.","friend"],["rosa, -ae, f.","rose"],["dare, dō","to give"]]},
     {"k":"en","p":"Translate into English: *Fīlī, epistulam legis.*","a":["Son, you read the letter.","Son, you are reading the letter.","Son, you do read the letter."],"w":"A vocative names the person spoken to. A noun in apposition matches the case of the noun it renames.","g":[["fīlius, -ī, m.","son"],["epistula, -ae, f.","letter"],["legere, -ō","to read"]]},
     {"k":"la","p":"Translate into Latin: Vergil, the poet, writes.","a":["Vergilius, poēta, scrībit."],"w":"A vocative names the person spoken to. A noun in apposition matches the case of the noun it renames.","g":[["Vergilius, -ī, m.","Vergil"],["poēta, -ae, m.","poet"],["scrībere, -ō","to write"]]},
     {"k":"en","p":"Translate into English: *Domine, equum servō.*","a":["Master, I save the horse.","Master, I am saving the horse.","Master, I do save the horse."],"w":"A vocative names the person spoken to. A noun in apposition matches the case of the noun it renames.","g":[["dominus, -ī, m.","master"],["equus, -ī, m.","horse"],["servāre, -ō","to save"]]},
     {"k":"la","p":"Translate into Latin: We praise Flavia, the queen.","a":["Flāviam, rēgīnam, laudāmus."],"w":"A vocative names the person spoken to. A noun in apposition matches the case of the noun it renames.","g":[["rēgīna, -ae, f.","queen"],["laudāre, -ō","to praise"]]},
    ]},
   ]},
  {id:"ablfrom",title:"Ablative: place from which and separation",blurb:"Two uses that mean \"away from\".",t:["placeFrom","sep"],
   body:`The ablative's oldest meaning is **away from**. Two uses come from this.

# Place from which

Motion away from a place uses *ā/ab* or *ē/ex* with the ablative.

: ex silvā venit = she comes out of the forest
: ā casā ambulat = he walks away from the house

With names of towns and small islands, Latin uses no preposition.

: Rōmā venit = he comes from Rome

# Separation

Verbs of freeing or keeping away use the **ablative of separation**, usually with no preposition for things.

: līberāre, -ō = to free
: prohibēre, -eō = to keep away

: Nautās culpā līberat. = She frees the sailors from blame.
: Agricolam perīculō prohibet. = He keeps the farmer from danger.

The difference is that place from which involves real motion from a place, and separation means removing someone from a thing or condition.

?1

?2`,
   q:[
    {s:"Tell place from which apart from separation",b:[
     {"k":"mc","p":"*ex agrō venit*: which use?","o":["place from which","separation"],"a":0,"w":"Coming out of a place is motion.","g":[["ē, ex (+abl)","out of"],["ager, agrī, m.","field"],["venīre, -iō","to come"]]},
     {"k":"mc","p":"*puerōs culpā līberat*: which use?","o":["separation","place from which"],"a":0,"w":"Freeing from blame is separation.","g":[["puer, -ī, m.","boy"],["culpa, -ae, f.","blame"],["līberāre, -ō","to free"]]},
     {"k":"mc","p":"*Crētā venit*: which use?","o":["place from which","separation"],"a":0,"w":"Motion from a small island, with no preposition.","g":[["Crēta, -ae, f.","Crete"],["venīre, -iō","to come"]]},
     {"k":"mc","p":"*poētam perīculō prohibet*: which use?","o":["separation","place from which"],"a":0,"w":"Keeping from danger is separation.","g":[["poēta, -ae, m.","poet"],["perīculum, -ī, n.","danger"],["prohibēre, -eō","to keep away"]]},
     {"k":"mc","p":"*ab īnsulā nāvigant*: which use?","o":["place from which","separation"],"a":0,"w":"Sailing away from a place is motion.","g":[["ā, ab (+abl)","away from; by"],["īnsula, -ae, f.","island"],["nāvigāre, -ō","to sail"]]},
     {"k":"mc","p":"*puellam cūrā līberant*: which use?","o":["separation","place from which"],"a":0,"w":"Freeing from worry is separation.","g":[["puella, -ae, f.","girl"],["cūra, -ae, f.","care"],["līberāre, -ō","to free"]]},
     {"k":"mc","p":"*ā vīllā ambulat*: which use?","o":["place from which","separation"],"a":0,"w":"Walking away from a place is motion.","g":[["ā, ab (+abl)","away from; by"],["vīlla, -ae, f.","farmhouse"],["ambulāre, -ō","to walk"]]},
     {"k":"mc","p":"*puerōs īrā prohibet*: which use?","o":["separation","place from which"],"a":0,"w":"Keeping from anger is separation.","g":[["puer, -ī, m.","boy"],["īra, -ae, f.","anger"],["prohibēre, -eō","to keep away"]]},
     {"k":"mc","p":"*Corinthō discēdunt*: which use?","o":["place from which","separation"],"a":0,"w":"Leaving a town, with no preposition.","g":[["Corinthus, -ī, f.","Corinth"],["discēdere, -ō","to depart"]]},
     {"k":"mc","p":"*servōs perīculō līberāmus*: which use?","o":["separation","place from which"],"a":0,"w":"Freeing from danger is separation.","g":[["servus, -ī, m.","slave"],["perīculum, -ī, n.","danger"],["līberāre, -ō","to free"]]},
    ]},
    {s:"Translate a sentence with an ablative of place from which or separation",b:[
     {"k":"en","p":"Translate into English: *Agricola ex silvā venit.*","a":["The farmer comes out of the forest.","The farmer is coming out of the forest.","The farmer does come out of the forest."],"w":"Both uses mean away from. Separation with things usually has no preposition.","g":[["agricola, -ae, m.","farmer"],["ē, ex (+abl)","out of"],["silva, -ae, f.","forest"],["venīre, -iō","to come"]]},
     {"k":"la","p":"Translate into Latin: The queen frees the sailors from blame.","a":["Rēgīna nautās culpā līberat."],"w":"Both uses mean away from. Separation with things usually has no preposition.","g":[["rēgīna, -ae, f.","queen"],["nauta, -ae, m.","sailor"],["culpa, -ae, f.","blame"],["līberāre, -ō","to free"]]},
     {"k":"en","p":"Translate into English: *Nautae ab īnsulā nāvigant.*","a":["The sailors sail away from the island.","The sailors are sailing away from the island.","The sailors do sail away from the island."],"w":"Both uses mean away from. Separation with things usually has no preposition.","g":[["nauta, -ae, m.","sailor"],["ā, ab (+abl)","away from; by"],["īnsula, -ae, f.","island"],["nāvigāre, -ō","to sail"]]},
     {"k":"la","p":"Translate into Latin: The goddess keeps the boy from danger.","a":["Dea puerum perīculō prohibet."],"w":"Both uses mean away from. Separation with things usually has no preposition.","g":[["dea, -ae, f.","goddess"],["puer, -ī, m.","boy"],["perīculum, -ī, n.","danger"],["prohibēre, -eō","to keep away"]]},
     {"k":"en","p":"Translate into English: *Servī ā casā currunt.*","a":["The slaves run away from the house.","The slaves are running away from the house.","The slaves do run away from the house."],"w":"Both uses mean away from. Separation with things usually has no preposition.","g":[["servus, -ī, m.","slave"],["ā, ab (+abl)","away from; by"],["casa, -ae, f.","house"],["currere, -ō","to run"]]},
     {"k":"la","p":"Translate into Latin: We free the girl from care.","a":["Puellam cūrā līberāmus."],"w":"Both uses mean away from. Separation with things usually has no preposition.","g":[["puella, -ae, f.","girl"],["cūra, -ae, f.","care"],["līberāre, -ō","to free"]]},
     {"k":"en","p":"Translate into English: *Rōmā discēdit.*","a":["He departs from Rome.","He is departing from Rome.","He does depart from Rome.","She departs from Rome.","She is departing from Rome.","She does depart from Rome."],"w":"Both uses mean away from. Separation with things usually has no preposition.","g":[["Rōma, -ae, f.","Rome"],["discēdere, -ō","to depart"]]},
     {"k":"la","p":"Translate into Latin: The woman keeps the son from danger.","a":["Fēmina fīlium perīculō prohibet."],"w":"Both uses mean away from. Separation with things usually has no preposition.","g":[["fēmina, -ae, f.","woman"],["fīlius, -ī, m.","son"],["perīculum, -ī, n.","danger"],["prohibēre, -eō","to keep away"]]},
     {"k":"en","p":"Translate into English: *Virī ex oppidō ambulant.*","a":["The men walk out of the town.","The men are walking out of the town.","The men do walk out of the town."],"w":"Both uses mean away from. Separation with things usually has no preposition.","g":[["vir, -ī, m.","man"],["ē, ex (+abl)","out of"],["oppidum, -ī, n.","town"],["ambulāre, -ō","to walk"]]},
     {"k":"la","p":"Translate into Latin: The teacher frees the students from blame.","a":["Magister discipulōs culpā līberat."],"w":"Both uses mean away from. Separation with things usually has no preposition.","g":[["magister, -trī, m.","teacher"],["discipulus, -ī, m.","student"],["culpa, -ae, f.","blame"],["līberāre, -ō","to free"]]},
    ]},
   ]},
  {id:"ablby",title:"Ablative: personal agent and means",blurb:"Two ways to say \"by\", one for people and one for things.",t:["agent","means"],
   body:`English uses *by* or *with* for both people and things. Latin keeps them apart.

# Personal agent

With a passive verb, the **person** who does the action is in the ablative with **ā** or **ab**.

: Puella ā rēgīnā laudātur. = The girl is praised by the queen.
: Nautae ab amīcīs vocantur. = The sailors are called by friends.

# Means

The **thing** used to do something is in the ablative with **no preposition**.

: Gladiō pugnat. = He fights with a sword.
: Sagittīs terrentur. = They are frightened by arrows.

! Ask whether it's a person or a thing. A person takes *ā/ab*. A thing takes no preposition.

?1

?2`,
   q:[
    {s:"Choose ablative of agent or means",b:[
     {"k":"mc","p":"Choose: The girl is praised by the farmer.","o":["*ab agricolā*","*agricolā*","*cum agricolā*"],"a":0,"w":"A person with a passive verb takes *ā/ab*.","g":[["ā, ab (+abl)","away from; by"],["agricola, -ae, m.","farmer"],["cum (+abl)","with"]]},
     {"k":"mc","p":"Choose: He fights with a spear.","o":["*hastā*","*ā hastā*","*cum hastā*"],"a":0,"w":"A tool takes no preposition.","g":[["hasta, -ae, f.","spear"],["ā, ab (+abl)","away from; by"],["cum (+abl)","with"]]},
     {"k":"mc","p":"Choose: They are frightened by spears.","o":["*tēlīs*","*ā tēlīs*","*cum tēlīs*"],"a":0,"w":"A thing takes no preposition.","g":[["tēlum, -ī, n.","spear"],["ā, ab (+abl)","away from; by"],["cum (+abl)","with"]]},
     {"k":"mc","p":"Choose: The boy is called by a friend.","o":["*ab amīcō*","*amīcō*","*cum amīcō*"],"a":0,"w":"A person takes *ā/ab*.","g":[["ā, ab (+abl)","away from; by"],["amīcus, -ī, m.","friend"],["cum (+abl)","with"]]},
     {"k":"mc","p":"*Puer ā magistrō docētur*: what does *ā magistrō* show?","o":["personal agent","means","accompaniment"],"a":0,"w":"A person doing a passive action.","g":[["puer, -ī, m.","boy"],["ā, ab (+abl)","away from; by"],["magister, -trī, m.","teacher"],["docēre, -eō","to teach"]]},
     {"k":"mc","p":"*Hastā terret*: what does *hastā* show?","o":["means","personal agent","accompaniment"],"a":0,"w":"A thing used as a tool.","g":[["hasta, -ae, f.","spear"],["terrēre, -eō","to frighten"]]},
     {"k":"mc","p":"*Puella ā nautā servātur*: what does *ā nautā* show?","o":["personal agent","means","accompaniment"],"a":0,"w":"A person doing a passive action.","g":[["puella, -ae, f.","girl"],["ā, ab (+abl)","away from; by"],["nauta, -ae, m.","sailor"],["servāre, -ō","to save"]]},
     {"k":"mc","p":"*Tēlīs superantur*: what does *tēlīs* show?","o":["means","personal agent","place where"],"a":0,"w":"Spears are the tools.","g":[["tēlum, -ī, n.","spear"],["superāre, -ō","to defeat"]]},
     {"k":"mc","p":"Choose: The town is defended by the sailors.","o":["*ā nautīs*","*nautīs*","*cum nautīs*"],"a":0,"w":"People take *ā/ab*.","g":[["ā, ab (+abl)","away from; by"],["nauta, -ae, m.","sailor"],["cum (+abl)","with"]]},
     {"k":"mc","p":"Choose: The farmer is frightened by the arrow.","o":["*sagittā*","*ā sagittā*","*cum sagittā*"],"a":0,"w":"A thing takes no preposition.","g":[["sagitta, -ae, f.","arrow"],["ā, ab (+abl)","away from; by"],["cum (+abl)","with"]]},
    ]},
    {s:"Translate a sentence with an ablative of agent or means",b:[
     {"k":"en","p":"Translate into English: *Puer ā rēgīnā laudātur.*","a":["The boy is praised by the queen.","The boy is being praised by the queen."],"w":"A person with a passive verb takes ā/ab. A thing takes no preposition.","g":[["puer, -ī, m.","boy"],["ā, ab (+abl)","away from; by"],["rēgīna, -ae, f.","queen"],["laudāre, -ō","to praise"]]},
     {"k":"la","p":"Translate into Latin: The man fights with a sword.","a":["Vir gladiō pugnat."],"w":"A person with a passive verb takes ā/ab. A thing takes no preposition.","g":[["vir, -ī, m.","man"],["gladius, -ī, m.","sword"],["pugnāre, -ō","to fight"]]},
     {"k":"en","p":"Translate into English: *Agricolae ab amīcīs vocantur.*","a":["The farmers are called by the friends.","The farmers are being called by the friends."],"w":"A person with a passive verb takes ā/ab. A thing takes no preposition.","g":[["agricola, -ae, m.","farmer"],["ā, ab (+abl)","away from; by"],["amīcus, -ī, m.","friend"],["vocāre, -ō","to call"]]},
     {"k":"la","p":"Translate into Latin: The women are frightened by arrows.","a":["Fēminae sagittīs terrentur."],"w":"A person with a passive verb takes ā/ab. A thing takes no preposition.","g":[["fēmina, -ae, f.","woman"],["sagitta, -ae, f.","arrow"],["terrēre, -eō","to frighten"]]},
     {"k":"en","p":"Translate into English: *Puer ā magistrō docētur.*","a":["The boy is taught by the teacher.","The boy is being taught by the teacher."],"w":"A person with a passive verb takes ā/ab. A thing takes no preposition.","g":[["puer, -ī, m.","boy"],["ā, ab (+abl)","away from; by"],["magister, -trī, m.","teacher"],["docēre, -eō","to teach"]]},
     {"k":"la","p":"Translate into Latin: The farmer defends the town with a spear.","a":["Agricola hastā oppidum dēfendit."],"w":"A person with a passive verb takes ā/ab. A thing takes no preposition.","g":[["agricola, -ae, m.","farmer"],["hasta, -ae, f.","spear"],["oppidum, -ī, n.","town"],["dēfendere, -ō","to defend"]]},
     {"k":"en","p":"Translate into English: *Servī ā dominō pūniuntur.*","a":["The slaves are punished by the master.","The slaves are being punished by the master."],"w":"A person with a passive verb takes ā/ab. A thing takes no preposition.","g":[["servus, -ī, m.","slave"],["ā, ab (+abl)","away from; by"],["dominus, -ī, m.","master"],["pūnīre, -iō","to punish"]]},
     {"k":"la","p":"Translate into Latin: The Romans overcome the barbarians with spears.","a":["Rōmānī barbarōs tēlīs superant."],"w":"A person with a passive verb takes ā/ab. A thing takes no preposition.","g":[["Rōmānus, -ī, m.","Roman"],["barbarus, -ī, m.","barbarian"],["tēlum, -ī, n.","spear"],["superāre, -ō","to defeat"]]},
     {"k":"en","p":"Translate into English: *Equus ab agricolā servātur.*","a":["The horse is saved by the farmer.","The horse is being saved by the farmer."],"w":"A person with a passive verb takes ā/ab. A thing takes no preposition.","g":[["equus, -ī, m.","horse"],["ā, ab (+abl)","away from; by"],["agricola, -ae, m.","farmer"],["servāre, -ō","to save"]]},
     {"k":"la","p":"Translate into Latin: The island is guarded by the sailors.","a":["Īnsula ā nautīs custōdītur."],"w":"A person with a passive verb takes ā/ab. A thing takes no preposition.","g":[["īnsula, -ae, f.","island"],["ā, ab (+abl)","away from; by"],["nauta, -ae, m.","sailor"],["custōdīre, -iō","to guard"]]},
    ]},
   ]},
  {id:"ablwith",title:"Ablative: accompaniment, manner, place where and cause",blurb:"With whom, how, where and why.",t:["accomp","manner","placeWhere","cause"],
   body:`Four more uses complete the ablative for this course.

|~ Four uses
|Use|Question|Form|Example|
|Accompaniment|with whom?|*cum* + ablative|*cum amīcō ambulat*, walks with a friend|
|Manner|how?|*cum* + abstract noun|*cum cūrā labōrat*, works with care|
|Place where|where?|*in* + ablative|*in silvā habitat*, lives in the forest|
|Cause|why?|no preposition|*gaudiō currit*, runs from joy|

# Manner

Manner describes how something is done, usually with an abstract noun like *cūra* (care) or *gaudium* (joy). If the noun has an adjective, *cum* is often dropped or moved between them: *magnā cum cūrā*, with great care.

# Place where

With plural town names, Latin uses the ablative alone: *Athēnīs*, in Athens. Singular town names of the 1st and 2nd declension use a leftover **locative** form that looks like the genitive: *Rōmae*, at Rome, and *Corinthī*, at Corinth.

# Compare all the withs

: Cum amīcō pugnat. = He fights with a friend. (accompaniment)
: Gladiō pugnat. = He fights with a sword. (means)
: Cum gaudiō pugnat. = He fights with joy. (manner)
: Gaudiō pugnat. = He fights from joy. (cause)

?1

?2`,
   q:[
    {s:"Name the use of an ablative: accompaniment, manner, place where, cause or means",b:[
     {"k":"mc","p":"*cum servō ambulat*","o":["accompaniment","manner","means","cause"],"a":0,"w":"A person who goes along.","g":[["cum (+abl)","with"],["servus, -ī, m.","slave"],["ambulāre, -ō","to walk"]]},
     {"k":"mc","p":"*cum cūrā scrībit*","o":["manner","accompaniment","means","cause"],"a":0,"w":"How she works.","g":[["cum (+abl)","with"],["cūra, -ae, f.","care"],["scrībere, -ō","to write"]]},
     {"k":"mc","p":"*in īnsulā habitat*","o":["place where","place from which","manner","cause"],"a":0,"w":"Where he lives.","g":[["in","in, on (+abl); into (+acc)"],["īnsula, -ae, f.","island"],["habitāre, -ō","to live"]]},
     {"k":"mc","p":"*gaudiō labōrat*","o":["cause","means","manner","place where"],"a":0,"w":"Why she works, with no preposition.","g":[["gaudium, -ī, n.","joy"],["labōrāre, -ō","to work"]]},
     {"k":"mc","p":"*hastā pugnat*","o":["means","cause","manner","accompaniment"],"a":0,"w":"A tool, with no preposition.","g":[["hasta, -ae, f.","spear"],["pugnāre, -ō","to fight"]]},
     {"k":"mc","p":"*cum puellīs nāvigant*","o":["accompaniment","manner","means","cause"],"a":0,"w":"People who go along.","g":[["cum (+abl)","with"],["puella, -ae, f.","girl"],["nāvigāre, -ō","to sail"]]},
     {"k":"mc","p":"*īrā pugnat*","o":["cause","means","manner","accompaniment"],"a":0,"w":"Why he fights.","g":[["īra, -ae, f.","anger"],["pugnāre, -ō","to fight"]]},
     {"k":"mc","p":"*cum gaudiō scrībit*","o":["manner","cause","accompaniment","means"],"a":0,"w":"How she writes.","g":[["cum (+abl)","with"],["gaudium, -ī, n.","joy"],["scrībere, -ō","to write"]]},
     {"k":"mc","p":"*Athēnīs labōrat*","o":["place where","place from which","cause","means"],"a":0,"w":"In a plural-named town.","g":[["Athēnae, -ārum, f.","Athens"],["labōrāre, -ō","to work"]]},
     {"k":"mc","p":"*in agrō labōrant*","o":["place where","place from which","means","manner"],"a":0,"w":"Where they work.","g":[["in","in, on (+abl); into (+acc)"],["ager, agrī, m.","field"],["labōrāre, -ō","to work"]]},
    ]},
    {s:"Translate a sentence using accompaniment, manner, place where or cause",b:[
     {"k":"en","p":"Translate into English: *Puer cum amīcō ambulat.*","a":["The boy walks with the friend.","The boy is walking with the friend.","The boy does walk with the friend."],"w":"Cum with a person is accompaniment, cum with an abstract noun is manner, in with a place is place where, and a noun with no preposition giving the reason is cause.","g":[["puer, -ī, m.","boy"],["cum (+abl)","with"],["amīcus, -ī, m.","friend"],["ambulāre, -ō","to walk"]]},
     {"k":"la","p":"Translate into Latin: The woman works with care.","a":["Fēmina cum cūrā labōrat."],"w":"Cum with a person is accompaniment, cum with an abstract noun is manner, in with a place is place where, and a noun with no preposition giving the reason is cause.","g":[["fēmina, -ae, f.","woman"],["cum (+abl)","with"],["cūra, -ae, f.","care"],["labōrāre, -ō","to work"]]},
     {"k":"en","p":"Translate into English: *Agricola in agrō labōrat.*","a":["The farmer works in the field.","The farmer is working in the field.","The farmer does work in the field."],"w":"Cum with a person is accompaniment, cum with an abstract noun is manner, in with a place is place where, and a noun with no preposition giving the reason is cause.","g":[["agricola, -ae, m.","farmer"],["in","in, on (+abl); into (+acc)"],["ager, agrī, m.","field"],["labōrāre, -ō","to work"]]},
     {"k":"la","p":"Translate into Latin: The girl runs from joy.","a":["Puella gaudiō currit."],"w":"Cum with a person is accompaniment, cum with an abstract noun is manner, in with a place is place where, and a noun with no preposition giving the reason is cause.","g":[["puella, -ae, f.","girl"],["gaudium, -ī, n.","joy"],["currere, -ō","to run"]]},
     {"k":"en","p":"Translate into English: *Nauta cum puellīs nāvigat.*","a":["The sailor sails with the girls.","The sailor is sailing with the girls.","The sailor does sail with the girls."],"w":"Cum with a person is accompaniment, cum with an abstract noun is manner, in with a place is place where, and a noun with no preposition giving the reason is cause.","g":[["nauta, -ae, m.","sailor"],["cum (+abl)","with"],["puella, -ae, f.","girl"],["nāvigāre, -ō","to sail"]]},
     {"k":"la","p":"Translate into Latin: The man fights from anger.","a":["Vir īrā pugnat."],"w":"Cum with a person is accompaniment, cum with an abstract noun is manner, in with a place is place where, and a noun with no preposition giving the reason is cause.","g":[["vir, -ī, m.","man"],["īra, -ae, f.","anger"],["pugnāre, -ō","to fight"]]},
     {"k":"en","p":"Translate into English: *Virī in silvā habitant.*","a":["The men live in the forest.","The men are living in the forest.","The men do live in the forest."],"w":"Cum with a person is accompaniment, cum with an abstract noun is manner, in with a place is place where, and a noun with no preposition giving the reason is cause.","g":[["vir, -ī, m.","man"],["in","in, on (+abl); into (+acc)"],["silva, -ae, f.","forest"],["habitāre, -ō","to live"]]},
     {"k":"la","p":"Translate into Latin: The poet writes with joy.","a":["Poēta cum gaudiō scrībit."],"w":"Cum with a person is accompaniment, cum with an abstract noun is manner, in with a place is place where, and a noun with no preposition giving the reason is cause.","g":[["poēta, -ae, m.","poet"],["cum (+abl)","with"],["gaudium, -ī, n.","joy"],["scrībere, -ō","to write"]]},
     {"k":"en","p":"Translate into English: *Athēnīs labōrāmus.*","a":["We work in Athens.","We are working in Athens.","We do work in Athens."],"w":"Cum with a person is accompaniment, cum with an abstract noun is manner, in with a place is place where, and a noun with no preposition giving the reason is cause.","g":[["Athēnae, -ārum, f.","Athens"],["labōrāre, -ō","to work"]]},
     {"k":"la","p":"Translate into Latin: He lives at Rome.","a":["Rōmae habitat."],"w":"Cum with a person is accompaniment, cum with an abstract noun is manner, in with a place is place where, and a noun with no preposition giving the reason is cause.","g":[["Rōma, -ae, f.","Rome"],["habitāre, -ō","to live"]]},
    ]},
   ]},
  {id:"placeto",title:"Accusative: place to which, and towns",blurb:"Going to places, with and without a preposition.",t:["placeTo","town"],
   body:`Motion toward a place uses the accusative, usually with *ad* (to) or *in* (into).

: ad cavernam ambulat = she walks to the cave
: in silvam currunt = they run into the forest

With names of towns and small islands, Latin drops the preposition.

: Rōmam nāvigat. = He sails to Rome.
: Athēnās ambulant. = They walk to Athens.
: Crētam festīnās. = You hurry to Crete.

# All three directions together

|~ Places
|Question|Ordinary place|Town or small island|
|Where to?|*ad* or *in* + accusative|accusative alone: *Rōmam*|
|Where from?|*ā/ab* or *ē/ex* + ablative|ablative alone: *Rōmā*|
|Where?|*in* + ablative|locative *Rōmae*, or ablative for plural names: *Athēnīs*|

?1

?2`,
   q:[
    {s:"Choose the right form for going to, from or staying in a place",b:[
     {"k":"mc","p":"Choose: to Rhodes","o":["*Rhodum*","*Rhodō*","*Rhodī*","*ad Rhodō*"],"a":0,"w":"A small island takes the accusative with no preposition.","g":[["Rhodus, -ī, f.","Rhodes"],["ad (+acc)","to, toward"]]},
     {"k":"mc","p":"Choose: from Crete","o":["*Crētā*","*Crētam*","*Crētae*","*ab Crētam*"],"a":0,"w":"A small island takes the ablative with no preposition.","g":[["Crēta, -ae, f.","Crete"],["ā, ab (+abl)","away from; by"]]},
     {"k":"mc","p":"Choose: at Corinth","o":["*Corinthī*","*Corinthum*","*Corinthō*","*ad Corinthum*"],"a":0,"w":"The locative.","g":[["Corinthus, -ī, f.","Corinth"],["ad (+acc)","to, toward"]]},
     {"k":"mc","p":"Choose: to the forest","o":["*ad silvam*","*silvam*","*ad silvā*","*in silvā*"],"a":0,"w":"Ordinary places need a preposition.","g":[["ad (+acc)","to, toward"],["silva, -ae, f.","forest"],["in","in, on (+abl); into (+acc)"]]},
     {"k":"mc","p":"Choose: into the cave","o":["*in cavernam*","*in cavernā*","*cavernam*","*ad cavernā*"],"a":0,"w":"Motion into takes the accusative.","g":[["caverna, -ae, f.","cave"],["ad (+acc)","to, toward"]]},
     {"k":"mc","p":"Choose: in the cave","o":["*in cavernā*","*in cavernam*","*cavernā*","*ad cavernam*"],"a":0,"w":"Location takes the ablative.","g":[["caverna, -ae, f.","cave"],["ad (+acc)","to, toward"]]},
     {"k":"mc","p":"Choose: to Thebes","o":["*Thēbās*","*Thēbīs*","*ad Thēbīs*","*Thēbārum*"],"a":0,"w":"*Thēbae* is plural: accusative -ās.","g":[["Thēbae, -ārum, f.","Thebes"],["ad (+acc)","to, toward"]]},
     {"k":"mc","p":"Choose: in Thebes","o":["*Thēbīs*","*Thēbās*","*Thēbae*","*in Thēbās*"],"a":0,"w":"A plural town name takes the ablative alone.","g":[["Thēbae, -ārum, f.","Thebes"],["in","in, on (+abl); into (+acc)"]]},
     {"k":"mc","p":"Choose: to Corinth","o":["*Corinthum*","*Corinthō*","*Corinthī*","*in Corinthō*"],"a":0,"w":"A town name takes the accusative with no preposition.","g":[["Corinthus, -ī, f.","Corinth"],["in","in, on (+abl); into (+acc)"]]},
     {"k":"mc","p":"Choose: from Corinth","o":["*Corinthō*","*Corinthum*","*Corinthī*","*ab Corinthum*"],"a":0,"w":"Town name, ablative, no preposition.","g":[["Corinthus, -ī, f.","Corinth"],["ā, ab (+abl)","away from; by"]]},
    ]},
    {s:"Translate a sentence about going to or coming from a place",b:[
     {"k":"en","p":"Translate into English: *Nauta Rōmam nāvigat.*","a":["The sailor sails to Rome.","The sailor is sailing to Rome.","The sailor does sail to Rome."],"w":"Place to which uses the accusative, with no preposition for towns and small islands.","g":[["nauta, -ae, m.","sailor"],["Rōma, -ae, f.","Rome"],["nāvigāre, -ō","to sail"]]},
     {"k":"la","p":"Translate into Latin: The girl walks to the cave.","a":["Puella ad cavernam ambulat."],"w":"Place to which uses the accusative, with no preposition for towns and small islands.","g":[["puella, -ae, f.","girl"],["ad (+acc)","to, toward"],["caverna, -ae, f.","cave"],["ambulāre, -ō","to walk"]]},
     {"k":"en","p":"Translate into English: *Virī Athēnās festīnant.*","a":["The men hurry to Athens.","The men are hurrying to Athens.","The men do hurry to Athens."],"w":"Place to which uses the accusative, with no preposition for towns and small islands.","g":[["vir, -ī, m.","man"],["Athēnae, -ārum, f.","Athens"],["festīnāre, -ō","to hurry"]]},
     {"k":"la","p":"Translate into Latin: The boys run into the forest.","a":["Puerī in silvam currunt."],"w":"Place to which uses the accusative, with no preposition for towns and small islands.","g":[["puer, -ī, m.","boy"],["in","in, on (+abl); into (+acc)"],["silva, -ae, f.","forest"],["currere, -ō","to run"]]},
     {"k":"en","p":"Translate into English: *Fēminae Crētam nāvigant.*","a":["The women sail to Crete.","The women are sailing to Crete.","The women do sail to Crete."],"w":"Place to which uses the accusative, with no preposition for towns and small islands.","g":[["fēmina, -ae, f.","woman"],["Crēta, -ae, f.","Crete"],["nāvigāre, -ō","to sail"]]},
     {"k":"la","p":"Translate into Latin: The farmer comes to the farmhouse.","a":["Agricola ad vīllam venit."],"w":"Place to which uses the accusative, with no preposition for towns and small islands.","g":[["agricola, -ae, m.","farmer"],["ad (+acc)","to, toward"],["vīlla, -ae, f.","farmhouse"],["venīre, -iō","to come"]]},
     {"k":"en","p":"Translate into English: *Corinthum ambulāmus.*","a":["We walk to Corinth.","We are walking to Corinth.","We do walk to Corinth."],"w":"Place to which uses the accusative, with no preposition for towns and small islands.","g":[["Corinthus, -ī, f.","Corinth"],["ambulāre, -ō","to walk"]]},
     {"k":"la","p":"Translate into Latin: The sailors sail into the island.","a":["Nautae in īnsulam nāvigant."],"w":"Place to which uses the accusative, with no preposition for towns and small islands.","g":[["nauta, -ae, m.","sailor"],["in","in, on (+abl); into (+acc)"],["īnsula, -ae, f.","island"],["nāvigāre, -ō","to sail"]]},
     {"k":"en","p":"Translate into English: *Rēgīna Thēbās venit.*","a":["The queen comes to Thebes.","The queen is coming to Thebes.","The queen does come to Thebes."],"w":"Place to which uses the accusative, with no preposition for towns and small islands.","g":[["rēgīna, -ae, f.","queen"],["Thēbae, -ārum, f.","Thebes"],["venīre, -iō","to come"]]},
     {"k":"la","p":"Translate into Latin: The slave runs into the inn.","a":["Servus in tabernam currit."],"w":"Place to which uses the accusative, with no preposition for towns and small islands.","g":[["servus, -ī, m.","slave"],["in","in, on (+abl); into (+acc)"],["taberna, -ae, f.","inn"],["currere, -ō","to run"]]},
    ]},
   ]},
 ]},
 {title:"Sentence patterns",lessons:[
  {id:"questions",title:"Questions: -ne and quis",blurb:"Asking yes or no questions, and asking who.",t:["ques"],
   body:`# Yes or no questions

Latin turns a statement into a question by attaching **-ne** to the first word. The *-ne* isn't translated. It works like a spoken question mark.

: Puella venit. = The girl is coming.
: Venitne puella? = Is the girl coming?
: Nautamne vidēs? = Do you see the sailor?

A word that has something attached, like *-ne*, is called an **enclitic**.

# Who?

To ask *who*, use **quis**. It is singular, and it takes a singular verb.

: Quis venit? = Who is coming?
: Quis nautam vocat? = Who is calling the sailor?

Don't add *-ne* to a question that already has a question word.

?1

?2`,
   q:[
    {s:"Identify how a Latin question is formed",b:[
     {"k":"mc","p":"How do you turn *Nauta labōrat* into a question?","o":["*Labōratne nauta?*","*Nauta labōrat ne*","*Quis nauta labōrat?*","*Ne nauta labōrat*"],"a":0,"w":"-ne attaches to the first word.","g":[["nauta, -ae, m.","sailor"],["labōrāre, -ō","to work"],["-ne","marks a yes or no question"],["quis","who?"]]},
     {"k":"mc","p":"What does -ne translate to in English?","o":["Nothing: it only marks a question","not","who","and"],"a":0,"w":"-ne is a question signal."},
     {"k":"mc","p":"*Quis dormit?* asks...","o":["who is sleeping","whether someone is sleeping","why someone is sleeping","where someone is sleeping"],"a":0,"w":"*quis* asks who.","g":[["quis","who?"],["dormīre, -iō","to sleep"]]},
     {"k":"mc","p":"Which is correct for \"Who is walking?\"","o":["*Quis ambulat?*","*Quisne ambulat?*","*Quis ambulant?*","*Ambulatne quis?*"],"a":0,"w":"*quis* takes a singular verb, without -ne.","g":[["quis","who?"],["ambulāre, -ō","to walk"],["-ne","marks a yes or no question"]]},
     {"k":"mc","p":"In *Audīsne puellam?*, what is the subject?","o":["you","the girl","she","we"],"a":0,"w":"-s in *audīs* means you.","g":[["audīre, -iō","to hear"],["-ne","marks a yes or no question"],["puella, -ae, f.","girl"]]},
     {"k":"mc","p":"*Dormitne puer?* means...","o":["Is the boy sleeping?","The boy is sleeping.","Who is sleeping?","The boy is not sleeping."],"a":0,"w":"-ne makes a yes or no question.","g":[["dormīre, -iō","to sleep"],["-ne","marks a yes or no question"],["puer, -ī, m.","boy"]]},
     {"k":"mc","p":"Where does -ne usually go?","o":["On the first word of the sentence","On the last word","On the subject only","On the verb only"],"a":0,"w":"Any first word can take it."},
     {"k":"mc","p":"Which is correct for \"Does the farmer work?\"","o":["*Labōratne agricola?*","*Labōrat agricola ne?*","*Quis labōrat agricola?*","*Labōrantne agricola?*"],"a":0,"w":"A singular verb with -ne on the first word.","g":[["labōrāre, -ō","to work"],["-ne","marks a yes or no question"],["agricola, -ae, m.","farmer"],["quis","who?"]]},
     {"k":"mc","p":"*Quis portat?* means...","o":["Who carries?","Does he carry?","What carries him?","Why does he carry?"],"a":0,"w":"*quis* means who.","g":[["portāre, -ō","to carry"]]},
     {"k":"mc","p":"What is -ne called, since it attaches to another word?","o":["an enclitic","an infinitive","a declension","a vocative"],"a":0,"w":"An enclitic leans on the word before it."},
    ]},
    {s:"Translate a Latin question",b:[
     {"k":"en","p":"Translate into English: *Venitne nauta?*","a":["Is the sailor coming?","Does the sailor come?"],"w":"-ne marks a yes or no question and quis asks who.","g":[["venīre, -iō","to come"],["-ne","marks a yes or no question"],["nauta, -ae, m.","sailor"]]},
     {"k":"la","p":"Translate into Latin: Who runs?","a":["Quis currit?"],"w":"-ne marks a yes or no question and quis asks who.","g":[["quis","who?"],["currere, -ō","to run"]]},
     {"k":"en","p":"Translate into English: *Puellamne vidēs?*","a":["Do you see the girl?","Are you seeing the girl?"],"w":"-ne marks a yes or no question and quis asks who.","g":[["puella, -ae, f.","girl"],["-ne","marks a yes or no question"],["vidēre, -eō","to see"]]},
     {"k":"la","p":"Translate into Latin: Who calls the boy?","a":["Quis puerum vocat?"],"w":"-ne marks a yes or no question and quis asks who.","g":[["quis","who?"],["puer, -ī, m.","boy"],["vocāre, -ō","to call"]]},
     {"k":"en","p":"Translate into English: *Dormitne puer?*","a":["Is the boy sleeping?","Does the boy sleep?"],"w":"-ne marks a yes or no question and quis asks who.","g":[["dormīre, -iō","to sleep"],["-ne","marks a yes or no question"],["puer, -ī, m.","boy"]]},
     {"k":"la","p":"Translate into Latin: Who works?","a":["Quis labōrat?"],"w":"-ne marks a yes or no question and quis asks who.","g":[["quis","who?"],["labōrāre, -ō","to work"]]},
     {"k":"en","p":"Translate into English: *Audiuntne puellae?*","a":["Are the girls listening?","Are the girls hearing?","Do the girls hear?"],"w":"-ne marks a yes or no question and quis asks who.","g":[["audīre, -iō","to hear"],["-ne","marks a yes or no question"],["puella, -ae, f.","girl"]]},
     {"k":"la","p":"Translate into Latin: Who warns the farmer?","a":["Quis agricolam monet?"],"w":"-ne marks a yes or no question and quis asks who.","g":[["quis","who?"],["agricola, -ae, m.","farmer"],["monēre, -eō","to warn"]]},
     {"k":"en","p":"Translate into English: *Rosamne portās?*","a":["Are you carrying the rose?","Do you carry the rose?"],"w":"-ne marks a yes or no question and quis asks who.","g":[["rosa, -ae, f.","rose"],["-ne","marks a yes or no question"],["portāre, -ō","to carry"]]},
     {"k":"la","p":"Translate into Latin: Who writes the story?","a":["Quis fābulam scrībit?"],"w":"-ne marks a yes or no question and quis asks who.","g":[["quis","who?"],["fābula, -ae, f.","story"],["scrībere, -ō","to write"]]},
    ]},
   ]},
  {id:"andque",title:"And: et and -que",blurb:"Two ways to join words.",t:["conj"],
   body:`Latin has two common ways to say *and*.

**Et** goes between the two words, just like English.

: puella et nauta = the girl and the sailor

**-que** is an enclitic, like *-ne*. It attaches to the end of the **second** word.

: puella nautaque = the girl and the sailor
: Senātus Populusque Rōmānus = the Senate and the Roman People

The two mean the same thing here. When you see *-que*, translate *and* before the word it is attached to.

! Two singular subjects joined by *and* take a plural verb: *Puella et nauta ambulant*.

?1

?2`,
   q:[
    {s:"Use et and -que",b:[
     {"k":"mc","p":"Rewrite *fēmina et vir* with -que.","o":["*fēmina virque*","*fēminaque vir*","*que fēmina vir*","*fēmina que vir*"],"a":0,"w":"-que goes on the second word.","g":[["fēmina, -ae, f.","woman"],["et","and"],["vir, -ī, m.","man"],["-que","and"]]},
     {"k":"mc","p":"In *fēminae virīque*, what does -que mean?","o":["and","also not","but","or"],"a":0,"w":"-que means and.","g":[["fēmina, -ae, f.","woman"],["vir, -ī, m.","man"]]},
     {"k":"mc","p":"*Amīcus et servus* needs what kind of verb?","o":["plural","singular","passive","infinitive"],"a":0,"w":"Two subjects make a plural.","g":[["amīcus, -ī, m.","friend"],["et","and"],["servus, -ī, m.","slave"]]},
     {"k":"mc","p":"Where do you put \"and\" in *agrōs silvāsque*?","o":["fields and forests","and fields forests","forests and fields","fields forests and"],"a":0,"w":"Translate and before the word with -que.","g":[["ager, agrī, m.","field"],["silva, -ae, f.","forest"],["-que","and"]]},
     {"k":"mc","p":"*Puer puellaque* means...","o":["the boy and the girl","the boy of the girl","the boy or the girl","the girl and the boy of"],"a":0,"w":"-que joins the two.","g":[["puer, -ī, m.","boy"],["puella, -ae, f.","girl"],["-que","and"]]},
     {"k":"mc","p":"Which is correct?","o":["*Nautae agricolaeque labōrant*","*Nautaeque que agricolae labōrant*","*Nautae agricolae et que labōrant*","*Que nautae agricolae labōrant*"],"a":0,"w":"One -que on the second word.","g":[["nauta, -ae, m.","sailor"],["agricola, -ae, m.","farmer"],["-que","and"],["labōrāre, -ō","to work"],["et","and"]]},
     {"k":"mc","p":"How does *et* differ from -que in position?","o":["*et* goes between the words, -que goes on the second word","*et* goes on the first word","-que goes on the first word","They are always the same"],"a":0,"w":"That is their only difference here.","g":[["et","and"]]},
     {"k":"mc","p":"Does *rosam corōnamque* have the same case on both nouns?","o":["Yes, both are accusative","No, one is dative","No, one is nominative","No, -que changes the case"],"a":0,"w":"Joined nouns share a job.","g":[["rosa, -ae, f.","rose"],["corōna, -ae, f.","crown"],["-que","and"]]},
     {"k":"mc","p":"*Vir fēminaque* as a subject would need which verb ending?","o":["-nt","-t","-s","-mus"],"a":0,"w":"Two subjects need a plural verb.","g":[["vir, -ī, m.","man"],["fēmina, -ae, f.","woman"],["-que","and"]]},
     {"k":"mc","p":"-que is an example of...","o":["an enclitic","a preposition","a declension","an infinitive"],"a":0,"w":"It attaches to a word."},
    ]},
    {s:"Translate a sentence with et or -que",b:[
     {"k":"en","p":"Translate into English: *Puella et agricola ambulant.*","a":["The girl and the farmer walk.","The girl and the farmer are walking.","The girl and the farmer do walk."],"w":"et goes between the words, and -que attaches to the second word. Both mean and.","g":[["puella, -ae, f.","girl"],["et","and"],["agricola, -ae, m.","farmer"],["ambulāre, -ō","to walk"]]},
     {"k":"la","p":"Translate into Latin: The boy and the girl run.","a":["Puer puellaque currunt."],"w":"et goes between the words, and -que attaches to the second word. Both mean and.","g":[["puer, -ī, m.","boy"],["puella, -ae, f.","girl"],["-que","and"],["currere, -ō","to run"]]},
     {"k":"en","p":"Translate into English: *Agricola equum et servum vocat.*","a":["The farmer calls the horse and the slave.","The farmer is calling the horse and the slave.","The farmer does call the horse and the slave."],"w":"et goes between the words, and -que attaches to the second word. Both mean and.","g":[["agricola, -ae, m.","farmer"],["equus, -ī, m.","horse"],["et","and"],["servus, -ī, m.","slave"],["vocāre, -ō","to call"]]},
     {"k":"la","p":"Translate into Latin: The queen praises the sailors and the farmers.","a":["Rēgīna nautās agricolāsque laudat."],"w":"et goes between the words, and -que attaches to the second word. Both mean and.","g":[["rēgīna, -ae, f.","queen"],["nauta, -ae, m.","sailor"],["agricola, -ae, m.","farmer"],["-que","and"],["laudāre, -ō","to praise"]]},
     {"k":"en","p":"Translate into English: *Fēminae et virī veniunt.*","a":["The women and the men come.","The women and the men are coming.","The women and the men do come."],"w":"et goes between the words, and -que attaches to the second word. Both mean and.","g":[["fēmina, -ae, f.","woman"],["et","and"],["vir, -ī, m.","man"],["venīre, -iō","to come"]]},
     {"k":"la","p":"Translate into Latin: The friend carries the rose and the crown.","a":["Amīcus rosam corōnamque portat."],"w":"et goes between the words, and -que attaches to the second word. Both mean and.","g":[["amīcus, -ī, m.","friend"],["rosa, -ae, f.","rose"],["corōna, -ae, f.","crown"],["-que","and"],["portāre, -ō","to carry"]]},
     {"k":"en","p":"Translate into English: *Magister et discipulī labōrant.*","a":["The teacher and the students work.","The teacher and the students are working.","The teacher and the students do work."],"w":"et goes between the words, and -que attaches to the second word. Both mean and.","g":[["magister, -trī, m.","teacher"],["et","and"],["discipulus, -ī, m.","student"],["labōrāre, -ō","to work"]]},
     {"k":"la","p":"Translate into Latin: The girls and the boys hear.","a":["Puellae puerīque audiunt."],"w":"et goes between the words, and -que attaches to the second word. Both mean and.","g":[["puella, -ae, f.","girl"],["puer, -ī, m.","boy"],["-que","and"],["audīre, -iō","to hear"]]},
     {"k":"en","p":"Translate into English: *Dominus servum et equum videt.*","a":["The master sees the slave and the horse.","The master is seeing the slave and the horse.","The master does see the slave and the horse."],"w":"et goes between the words, and -que attaches to the second word. Both mean and.","g":[["dominus, -ī, m.","master"],["servus, -ī, m.","slave"],["et","and"],["equus, -ī, m.","horse"],["vidēre, -eō","to see"]]},
     {"k":"la","p":"Translate into Latin: The man and the woman sail.","a":["Vir fēminaque nāvigant."],"w":"et goes between the words, and -que attaches to the second word. Both mean and.","g":[["vir, -ī, m.","man"],["fēmina, -ae, f.","woman"],["-que","and"],["nāvigāre, -ō","to sail"]]},
    ]},
   ]},
  {id:"gapping",title:"Gapping",blurb:"When Latin leaves a word out and expects you to fill it in.",t:["gap"],
   body:`**Gapping** means leaving out a word that can be understood from the rest of the sentence. A verb is the usual word to go. The verb appears once and is shared by two clauses.

: Puella rosam, puer librum portat. = The girl carries a rose, the boy a book.

The verb *portat* belongs to both clauses, so in English you can repeat it: *the boy carries a book*. Both versions are correct.

The verb can sit in either clause.

: Fēmina hastam portat, vir gladium. = The woman carries a spear, the man a sword.

! When a clause seems to have no verb, match its nouns to the other clause: nominative with nominative, accusative with accusative.

?1

?2`,
   q:[
    {s:"Find what has been gapped and how to read it",b:[
     {"k":"mc","p":"In *Fēmina rosam, vir librum spectat*, what is the verb for *vir*?","o":["*spectat*","*rosam*","*librum*","There is none"],"a":0,"w":"One verb serves both clauses.","g":[["fēmina, -ae, f.","woman"],["rosa, -ae, f.","rose"],["vir, -ī, m.","man"],["liber, librī, m.","book"],["spectāre, -ō","to watch"]]},
     {"k":"mc","p":"In *Nauta aquam, agricola cibum portat*, what does the farmer carry?","o":["food","water","a sailor","nothing"],"a":0,"w":"*cibum* is the accusative in his clause.","g":[["nauta, -ae, m.","sailor"],["aqua, -ae, f.","water"],["agricola, -ae, m.","farmer"],["portāre, -ō","to carry"]]},
     {"k":"mc","p":"What word is usually gapped?","o":["the verb","the subject","the preposition","the adjective"],"a":0,"w":"The verb is the word most often left out."},
     {"k":"mc","p":"In *Fēmina epistulam, vir librum legit*, who reads the book?","o":["the man","the woman","both of them equally","no one"],"a":0,"w":"*vir* is nominative in the clause with *librum*.","g":[["fēmina, -ae, f.","woman"],["epistula, -ae, f.","letter"],["liber, librī, m.","book"],["legere, -ō","to read"]]},
     {"k":"mc","p":"What kind of noun does *vir* pair with in *Fēmina rosam, vir librum spectat*?","o":["the other nominative","the accusative *rosam*","the verb","the accusative *librum*"],"a":0,"w":"Parallel clauses match case by case.","g":[["vir, -ī, m.","man"],["fēmina, -ae, f.","woman"],["rosa, -ae, f.","rose"],["liber, librī, m.","book"],["spectāre, -ō","to watch"]]},
     {"k":"mc","p":"In *Dominus equum, servus hastam tenet*, what does the slave hold?","o":["a spear","a horse","the master","nothing"],"a":0,"w":"*hastam* goes with *servus*.","g":[["dominus, -ī, m.","master"],["equus, -ī, m.","horse"],["servus, -ī, m.","slave"],["tenēre, -eō","to hold"]]},
     {"k":"mc","p":"Does the English need the verb repeated?","o":["It may be repeated or left out","It must be left out","It must be changed","Only with a plural"],"a":0,"w":"Both English versions are correct."},
     {"k":"mc","p":"In *Puerī librōs, puellae rosās portant*, what do the girls carry?","o":["roses","books","boys","nothing"],"a":0,"w":"*rosās* follows *puellae*.","g":[["puer, -ī, m.","boy"],["liber, librī, m.","book"],["puella, -ae, f.","girl"],["rosa, -ae, f.","rose"],["portāre, -ō","to carry"]]},
     {"k":"mc","p":"Which sentence shows gapping?","o":["*Nauta aquam, puer cibum portat*","*Nauta aquam portat*","*Puer cibum portat*","*Nauta et puer veniunt*"],"a":0,"w":"Two clauses share a single verb.","g":[["nauta, -ae, m.","sailor"],["aqua, -ae, f.","water"],["puer, -ī, m.","boy"],["cibus, -ī, m.","food"],["portāre, -ō","to carry"],["et","and"],["venīre, -iō","to come"]]},
     {"k":"mc","p":"In *Servus hastam tenet, nauta gladium*, what is gapped?","o":["*tenet*, in the second clause","*servus*","*hastam*","*nauta*"],"a":0,"w":"The verb is understood after *gladium*.","g":[["servus, -ī, m.","slave"],["hasta, -ae, f.","spear"],["tenēre, -eō","to hold"],["nauta, -ae, m.","sailor"],["gladius, -ī, m.","sword"]]},
    ]},
    {s:"Translate a sentence with gapping",b:[
     {"k":"en","p":"Translate into English: *Puella librum, puer rosam tenet.*","a":["The girl holds the book, the boy the rose.","The girl is holding the book, the boy the rose.","The girl does hold the book, the boy the rose."],"w":"One verb is shared by both clauses.","g":[["puella, -ae, f.","girl"],["liber, librī, m.","book"],["puer, -ī, m.","boy"],["rosa, -ae, f.","rose"],["tenēre, -eō","to hold"]]},
     {"k":"la","p":"Translate into Latin: The slave carries the spear, the sailor the sword.","a":["Servus hastam portat, nauta gladium."],"w":"One verb is shared by both clauses.","g":[["servus, -ī, m.","slave"],["hasta, -ae, f.","spear"],["portāre, -ō","to carry"],["nauta, -ae, m.","sailor"],["gladius, -ī, m.","sword"]]},
     {"k":"en","p":"Translate into English: *Nauta aquam, agricola cibum portat.*","a":["The sailor carries the water, the farmer the food.","The sailor is carrying the water, the farmer the food.","The sailor does carry the water, the farmer the food."],"w":"One verb is shared by both clauses.","g":[["nauta, -ae, m.","sailor"],["aqua, -ae, f.","water"],["agricola, -ae, m.","farmer"],["cibus, -ī, m.","food"],["portāre, -ō","to carry"]]},
     {"k":"la","p":"Translate into Latin: The woman reads the letter, the man the book.","a":["Fēmina epistulam, vir librum legit."],"w":"One verb is shared by both clauses.","g":[["fēmina, -ae, f.","woman"],["epistula, -ae, f.","letter"],["vir, -ī, m.","man"],["liber, librī, m.","book"],["legere, -ō","to read"]]},
     {"k":"en","p":"Translate into English: *Dominus equum, servus hastam tenet.*","a":["The master holds the horse, the slave the spear.","The master is holding the horse, the slave the spear.","The master does hold the horse, the slave the spear."],"w":"One verb is shared by both clauses.","g":[["dominus, -ī, m.","master"],["equus, -ī, m.","horse"],["servus, -ī, m.","slave"],["hasta, -ae, f.","spear"],["tenēre, -eō","to hold"]]},
     {"k":"la","p":"Translate into Latin: The boys carry the books, the girls the roses.","a":["Puerī librōs, puellae rosās portant."],"w":"One verb is shared by both clauses.","g":[["puer, -ī, m.","boy"],["liber, librī, m.","book"],["puella, -ae, f.","girl"],["rosa, -ae, f.","rose"],["portāre, -ō","to carry"]]},
     {"k":"en","p":"Translate into English: *Rēgīna nautās, dominus servōs laudat.*","a":["The queen praises the sailors, the master the slaves.","The queen is praising the sailors, the master the slaves.","The queen does praise the sailors, the master the slaves."],"w":"One verb is shared by both clauses.","g":[["rēgīna, -ae, f.","queen"],["nauta, -ae, m.","sailor"],["dominus, -ī, m.","master"],["servus, -ī, m.","slave"],["laudāre, -ō","to praise"]]},
     {"k":"la","p":"Translate into Latin: The farmer watches the field, the sailor the water.","a":["Agricola agrum spectat, nauta aquam."],"w":"One verb is shared by both clauses.","g":[["agricola, -ae, m.","farmer"],["ager, agrī, m.","field"],["spectāre, -ō","to watch"],["nauta, -ae, m.","sailor"],["aqua, -ae, f.","water"]]},
     {"k":"en","p":"Translate into English: *Poēta fābulam, magister epistulam scrībit.*","a":["The poet writes the story, the teacher the letter.","The poet is writing the story, the teacher the letter.","The poet does write the story, the teacher the letter."],"w":"One verb is shared by both clauses.","g":[["poēta, -ae, m.","poet"],["fābula, -ae, f.","story"],["magister, -trī, m.","teacher"],["epistula, -ae, f.","letter"],["scrībere, -ō","to write"]]},
     {"k":"la","p":"Translate into Latin: The master gives a gift to the son, the queen to the daughter.","a":["Dominus fīliō, rēgīna fīliae dōnum dat."],"w":"One verb is shared by both clauses.","g":[["dominus, -ī, m.","master"],["fīlius, -ī, m.","son"],["rēgīna, -ae, f.","queen"],["fīlia, -ae, f.","daughter"],["dōnum, -ī, n.","gift"],["dare, dō","to give"]]},
    ]},
   ]},
  {id:"adverbs",title:"Adverbs in -ē",blurb:"Words that describe how an action is done.",t:["adv"],
   body:`An **adverb** describes a verb, and it often answers *how*. In English many adverbs end in *-ly*. In Latin, adjectives like *laetus -a -um* form an adverb by adding **-ē** to the stem.

|~ Adjectives and adverbs
|Adjective|Meaning|Adverb|Meaning|
|laetus|happy|laet[[ē]]|happily|
|lentus|slow|lent[[ē]]|slowly|
|miser|wretched|miser[[ē]]|wretchedly|
|pulcher|beautiful|pulchr[[ē]]|beautifully|
|bonus|good|bene|well|
|malus|bad|male|badly|

*Bene* and *male* are irregular. Adverbs never change their form, and they usually come before the verb.

: Nauta lentē ambulat. = The sailor walks slowly.
: Puer bene legit. = The boy reads well.

Some adverbs aren't formed from adjectives at all: *saepe* (often), *semper* (always), *hodiē* (today), *nunc* (now) and *nōn* (not).

?1

?2`,
   q:[
    {s:"Form an adverb from an adjective",b:[
     {"k":"la","p":"Write the adverb from *clārus*.","a":["clārē"],"w":"Stem plus -ē.","g":[["clārus -a -um","famous"]]},
     {"k":"la","p":"Write the adverb from *lātus*.","a":["lātē"],"w":"Stem plus -ē.","g":[["lātus -a -um","wide"]]},
     {"k":"la","p":"Write the adverb from *īrātus*.","a":["īrātē"],"w":"Stem plus -ē.","g":[["īrātus -a -um","angry"]]},
     {"k":"la","p":"Write the adverb from *molestus*.","a":["molestē"],"w":"Stem plus -ē.","g":[["molestus -a -um","annoying"]]},
     {"k":"la","p":"Write the adverb from *scelestus*.","a":["scelestē"],"w":"Stem plus -ē.","g":[["scelestus -a -um","wicked"]]},
     {"k":"la","p":"Write the adverb from *antīquus*.","a":["antīquē"],"w":"Stem plus -ē.","g":[["antīquus -a -um","ancient"]]},
     {"k":"la","p":"Write the adverb from *saevus*.","a":["saevē"],"w":"Stem plus -ē.","g":[["saevus -a -um","fierce"]]},
     {"k":"la","p":"Write the adverb from *probus*.","a":["probē"],"w":"Stem plus -ē.","g":[["probus -a -um","honest"]]},
     {"k":"la","p":"Write the adverb from *maestus*.","a":["maestē"],"w":"Stem plus -ē.","g":[["maestus -a -um","sad"]]},
     {"k":"la","p":"Write the adverb from *avārus*.","a":["avārē"],"w":"Stem plus -ē.","g":[["avārus -a -um","greedy"]]},
    ]},
    {s:"Translate a sentence with an adverb",b:[
     {"k":"en","p":"Translate into English: *Agricola lentē ambulat.*","a":["The farmer walks slowly.","The farmer is walking slowly.","The farmer does walk slowly."],"w":"An adverb describes the verb and never changes form.","g":[["agricola, -ae, m.","farmer"],["lentē","slowly"],["ambulāre, -ō","to walk"]]},
     {"k":"la","p":"Translate into Latin: The girl reads well.","a":["Puella bene legit."],"w":"An adverb describes the verb and never changes form.","g":[["puella, -ae, f.","girl"],["bene","well"],["legere, -ō","to read"]]},
     {"k":"en","p":"Translate into English: *Puella laetē labōrat.*","a":["The girl works happily.","The girl is working happily.","The girl does work happily."],"w":"An adverb describes the verb and never changes form.","g":[["puella, -ae, f.","girl"],["laetē","happily"],["labōrāre, -ō","to work"]]},
     {"k":"la","p":"Translate into Latin: The woman sails often.","a":["Fēmina saepe nāvigat."],"w":"An adverb describes the verb and never changes form.","g":[["fēmina, -ae, f.","woman"],["saepe","often"],["nāvigāre, -ō","to sail"]]},
     {"k":"en","p":"Translate into English: *Agricolae male labōrant.*","a":["The farmers work badly.","The farmers are working badly.","The farmers do work badly."],"w":"An adverb describes the verb and never changes form.","g":[["agricola, -ae, m.","farmer"],["male","badly"],["labōrāre, -ō","to work"]]},
     {"k":"la","p":"Translate into Latin: The poet writes beautifully.","a":["Poēta pulchrē scrībit."],"w":"An adverb describes the verb and never changes form.","g":[["poēta, -ae, m.","poet"],["pulchrē","beautifully"],["scrībere, -ō","to write"]]},
     {"k":"en","p":"Translate into English: *Virī saevē pugnant.*","a":["The men fight fiercely.","The men are fighting fiercely.","The men do fight fiercely."],"w":"An adverb describes the verb and never changes form.","g":[["vir, -ī, m.","man"],["saevē","fiercely"],["pugnāre, -ō","to fight"]]},
     {"k":"la","p":"Translate into Latin: We always work.","a":["Semper labōrāmus."],"w":"An adverb describes the verb and never changes form.","g":[["semper","always"],["labōrāre, -ō","to work"]]},
     {"k":"en","p":"Translate into English: *Puellae maestē ambulant.*","a":["The girls walk sadly.","The girls are walking sadly.","The girls do walk sadly."],"w":"An adverb describes the verb and never changes form.","g":[["puella, -ae, f.","girl"],["maestē","sadly"],["ambulāre, -ō","to walk"]]},
     {"k":"la","p":"Translate into Latin: He comes today.","a":["Hodiē venit."],"w":"An adverb describes the verb and never changes form.","g":[["hodiē","today"],["venīre, -iō","to come"]]},
    ]},
   ]},
  {id:"conditions",title:"Open conditions",blurb:"If this happens, then that happens.",t:["pcond","fcond"],
   body:`A **condition** has two parts: the *if* clause, starting with **sī**, and the main clause that gives the result. An **open** condition leaves the question open: it may or may not be true.

# Present

Both verbs are present.

: Sī labōrās, laudāris. = If you work, you are praised.

# Future

Both verbs are future in Latin.

: Sī labōrābis, laudāberis. = If you work, you will be praised.

Latin is more exact than English here. English uses a present verb in the *if* clause (*if you work*) even when it means the future. Translate the Latin *sī* clause with an English present.

: Sī venient, nautās vidēbunt. = If they come, they will see the sailors.

*If they will come* is understandable, but it isn't natural English.

?1

?2`,
   q:[
    {s:"Identify the tense of a condition and how to translate it",b:[
     {"k":"mc","p":"*Sī ambulās, vidēris* is a...","o":["present condition","future condition"],"a":0,"w":"Both verbs are present.","g":[["sī","if"],["ambulāre, -ō","to walk"],["vidēre, -eō","to see"]]},
     {"k":"mc","p":"*Sī ambulābis, vidēberis* is a...","o":["future condition","present condition"],"a":0,"w":"Both verbs are future.","g":[["sī","if"],["ambulāre, -ō","to walk"],["vidēre, -eō","to see"]]},
     {"k":"mc","p":"What does *sī* mean?","o":["if","and","who","so"],"a":0,"w":"*sī* opens the condition."},
     {"k":"mc","p":"How is *sī veniet* best translated?","o":["if he comes","if he came","if he is coming from","he will come if"],"a":0,"w":"English uses a present for a Latin future here.","g":[["sī","if"],["venīre, -iō","to come"]]},
     {"k":"mc","p":"Choose the main verb for *Sī puella labōrābit, nauta ___* (the sailor will praise).","o":["*laudābit*","*laudat*","*laudābat*","*laudāre*"],"a":0,"w":"A future condition has future verbs in both clauses.","g":[["sī","if"],["puella, -ae, f.","girl"],["labōrāre, -ō","to work"],["nauta, -ae, m.","sailor"],["laudāre, -ō","to praise"]]},
     {"k":"mc","p":"*Sī dormīs, nōn labōrās*: what tense are the verbs?","o":["present","future","imperfect","perfect"],"a":0,"w":"Both are present.","g":[["sī","if"],["dormīre, -iō","to sleep"],["nōn","not"],["labōrāre, -ō","to work"]]},
     {"k":"mc","p":"*Sī mittent, vidēbimus*: what tense are the verbs?","o":["future","present","imperfect","perfect"],"a":0,"w":"*mittent* is 3rd conjugation future and *vidēbimus* has -bi-.","g":[["sī","if"],["mittere, -ō","to send"],["vidēre, -eō","to see"]]},
     {"k":"mc","p":"Which clause does *sī* start?","o":["the if clause","the main clause","neither clause","both clauses"],"a":0,"w":"*sī* starts the if clause.","g":[["sī","if"]]},
     {"k":"mc","p":"Which is a future condition?","o":["*Sī veniēs, puellam vidēbō*","*Sī venīs, puellam videō*","*Sī venit, puellam videt*","*Sī venīmus, puellam vidēmus*"],"a":0,"w":"Both verbs have future forms.","g":[["sī","if"],["venīre, -iō","to come"],["puella, -ae, f.","girl"],["vidēre, -eō","to see"]]},
     {"k":"mc","p":"An open condition means...","o":["It may or may not be true","It is false","It happened in the past","It is a command"],"a":0,"w":"The speaker leaves it open."},
    ]},
    {s:"Translate an open condition",b:[
     {"k":"en","p":"Translate into English: *Sī legis, monēris.*","a":["If you read, you are warned.","If you read, you are being warned.","If you are reading, you are warned.","If you are reading, you are being warned.","If you do read, you are warned.","If you do read, you are being warned."],"w":"Sī means if. In a future condition, both Latin verbs are future, but the if clause is usually a present in English.","g":[["sī","if"],["legere, -ō","to read"],["monēre, -eō","to warn"]]},
     {"k":"la","p":"Translate into Latin: If you read, you will be warned.","a":["Sī legēs, monēberis."],"w":"Sī means if. In a future condition, both Latin verbs are future, but the if clause is usually a present in English.","g":[["sī","if"],["legere, -ō","to read"],["monēre, -eō","to warn"]]},
     {"k":"en","p":"Translate into English: *Sī puella venit, nauta labōrat.*","a":["If the girl comes, the sailor works.","If the girl comes, the sailor is working.","If the girl comes, the sailor does work.","If the girl is coming, the sailor works.","If the girl is coming, the sailor is working.","If the girl is coming, the sailor does work.","If the girl does come, the sailor works.","If the girl does come, the sailor is working.","If the girl does come, the sailor does work."],"w":"Sī means if. In a future condition, both Latin verbs are future, but the if clause is usually a present in English.","g":[["sī","if"],["puella, -ae, f.","girl"],["venīre, -iō","to come"],["nauta, -ae, m.","sailor"],["labōrāre, -ō","to work"]]},
     {"k":"la","p":"Translate into Latin: If the sailors come, the girls will walk.","a":["Sī nautae venient, puellae ambulābunt."],"w":"Sī means if. In a future condition, both Latin verbs are future, but the if clause is usually a present in English.","g":[["sī","if"],["nauta, -ae, m.","sailor"],["venīre, -iō","to come"],["puella, -ae, f.","girl"],["ambulāre, -ō","to walk"]]},
     {"k":"en","p":"Translate into English: *Sī dūcit, audīmus.*","a":["If he leads, we hear.","If he leads, we are hearing.","If he leads, we do hear.","If he is leading, we hear.","If he is leading, we are hearing.","If he is leading, we do hear.","If he does lead, we hear.","If he does lead, we are hearing.","If he does lead, we do hear.","If she leads, we hear.","If she leads, we are hearing.","If she leads, we do hear.","If she is leading, we hear.","If she is leading, we are hearing.","If she is leading, we do hear.","If she does lead, we hear.","If she does lead, we are hearing.","If she does lead, we do hear."],"w":"Sī means if. In a future condition, both Latin verbs are future, but the if clause is usually a present in English.","g":[["sī","if"],["dūcere, -ō","to lead"],["audīre, -iō","to hear"]]},
     {"k":"la","p":"Translate into Latin: If I carry, you will see.","a":["Sī portābō, vidēbis."],"w":"Sī means if. In a future condition, both Latin verbs are future, but the if clause is usually a present in English.","g":[["sī","if"],["portāre, -ō","to carry"],["vidēre, -eō","to see"]]},
     {"k":"en","p":"Translate into English: *Sī puer legit, magister laudat.*","a":["If the boy reads, the teacher praises.","If the boy reads, the teacher is praising.","If the boy reads, the teacher does praise.","If the boy is reading, the teacher praises.","If the boy is reading, the teacher is praising.","If the boy is reading, the teacher does praise.","If the boy does read, the teacher praises.","If the boy does read, the teacher is praising.","If the boy does read, the teacher does praise."],"w":"Sī means if. In a future condition, both Latin verbs are future, but the if clause is usually a present in English.","g":[["sī","if"],["puer, -ī, m.","boy"],["legere, -ō","to read"],["magister, -trī, m.","teacher"],["laudāre, -ō","to praise"]]},
     {"k":"la","p":"Translate into Latin: If the queen calls, we will come.","a":["Sī rēgīna vocābit, veniēmus."],"w":"Sī means if. In a future condition, both Latin verbs are future, but the if clause is usually a present in English.","g":[["sī","if"],["rēgīna, -ae, f.","queen"],["vocāre, -ō","to call"],["venīre, -iō","to come"]]},
     {"k":"en","p":"Translate into English: *Sī servus currit, dominus videt.*","a":["If the slave runs, the master sees.","If the slave runs, the master is seeing.","If the slave runs, the master does see.","If the slave is running, the master sees.","If the slave is running, the master is seeing.","If the slave is running, the master does see.","If the slave does run, the master sees.","If the slave does run, the master is seeing.","If the slave does run, the master does see."],"w":"Sī means if. In a future condition, both Latin verbs are future, but the if clause is usually a present in English.","g":[["sī","if"],["servus, -ī, m.","slave"],["currere, -ō","to run"],["dominus, -ī, m.","master"],["vidēre, -eō","to see"]]},
     {"k":"la","p":"Translate into Latin: If we see the friend, we will praise.","a":["Sī amīcum vidēbimus, laudābimus."],"w":"Sī means if. In a future condition, both Latin verbs are future, but the if clause is usually a present in English.","g":[["sī","if"],["amīcus, -ī, m.","friend"],["vidēre, -eō","to see"],["laudāre, -ō","to praise"]]},
    ]},
   ]},
  {id:"indstat",title:"Indirect statement",blurb:"Reporting what someone says, thinks or sees.",t:["indst"],
   body:`A **direct statement** gives the exact words: *The girl is working.* An **indirect statement** reports them after a verb of saying, thinking, knowing or perceiving: *He says that the girl is working.*

Latin doesn't use a word for *that*. It turns the reported sentence into two pieces.

- The subject of the reported sentence goes into the **accusative**.
- The verb of the reported sentence becomes an **infinitive**.

: Puella labōrat. = The girl is working.
: Dīcit puellam labōrāre. = He says that the girl is working.

# Verbs that introduce it

: dīcere = to say
: putāre = to think
: scīre = to know
: crēdere = to believe
: vidēre = to see
: audīre = to hear
: spērāre = to hope
: nūntiāre = to announce

When you see one of these with an accusative and an infinitive, add *that*.

# Passive

Use a passive infinitive for a passive reported verb.

: Rōmānus dīcit puellam laudārī. = The Roman says that the girl is praised.

?1

?2`,
   q:[
    {s:"Recognize the parts of an indirect statement",b:[
     {"k":"mc","p":"In *Dīcit nautam labōrāre*, what case is *nautam*?","o":["accusative, the subject of the infinitive","accusative, the object of *dīcit*","nominative","dative"],"a":0,"w":"The subject of an indirect statement is accusative.","g":[["dīcere, -ō","to say"],["nauta, -ae, m.","sailor"],["labōrāre, -ō","to work"]]},
     {"k":"mc","p":"In *Putat nautam venīre*, what form is *venīre*?","o":["infinitive","present indicative","future","imperative"],"a":0,"w":"The reported verb is an infinitive.","g":[["putāre, -ō","to think"],["nauta, -ae, m.","sailor"],["venīre, -iō","to come"]]},
     {"k":"mc","p":"What English word do you add?","o":["that","because","if","who"],"a":0,"w":"Latin has no word for it here."},
     {"k":"mc","p":"Which is correct for \"She says that the boy is sleeping\"?","o":["*Dīcit puerum dormīre*","*Dīcit puer dormit*","*Dīcit puerō dormīre*","*Dīcit puerum dormit*"],"a":0,"w":"Accusative plus infinitive.","g":[["dīcere, -ō","to say"],["puer, -ī, m.","boy"],["dormīre, -iō","to sleep"]]},
     {"k":"mc","p":"Which of these is an indirect statement?","o":["*Putat rēgīnam dormīre*","*Rēgīna dormit*","*Dormīre cupit*","*Rēgīna dormīre solet*"],"a":0,"w":"A verb of thinking with an accusative and an infinitive.","g":[["putāre, -ō","to think"],["rēgīna, -ae, f.","queen"],["dormīre, -iō","to sleep"],["cupere, -iō","to want"],["solēre, -eō","to be used to, to usually do"]]},
     {"k":"mc","p":"In *Crēdimus deōs audīre*, who hears?","o":["the gods","we","no one","the believers"],"a":0,"w":"*deōs* is the subject of *audīre*.","g":[["crēdere, -ō","to believe"],["deus, -ī, m.","god"],["audīre, -iō","to hear"]]},
     {"k":"mc","p":"In *Videt rosās portārī*, what does *portārī* mean?","o":["to be carried: are carried","to carry: are carrying","carrying away","will carry"],"a":0,"w":"-rī is passive.","g":[["vidēre, -eō","to see"],["rosa, -ae, f.","rose"],["portāre, -ō","to carry"]]},
     {"k":"mc","p":"How do you say \"We know that the sailors are working\"?","o":["*Scīmus nautās labōrāre*","*Scīmus nautae labōrant*","*Scīmus nautīs labōrāre*","*Scīmus nautās labōrant*"],"a":0,"w":"Accusative plus infinitive.","g":[["scīre, -iō","to know"],["nauta, -ae, m.","sailor"],["labōrāre, -ō","to work"]]},
     {"k":"mc","p":"In *Audīs servum venīre*, who is coming?","o":["the slave","you","the hearer","no one"],"a":0,"w":"*servum* is the subject of *venīre*.","g":[["audīre, -iō","to hear"],["venīre, -iō","to come"]]},
     {"k":"mc","p":"Why is the subject of the reported verb not nominative?","o":["Because indirect statement puts it in the accusative","Because it is a direct object of the main verb","Because it follows a preposition","Because the verb is passive"],"a":0,"w":"That is the rule of this construction."},
    ]},
    {s:"Translate an indirect statement",b:[
     {"k":"en","p":"Translate into English: *Dīcit fēminam labōrāre.*","a":["He says that the woman works.","He says that the woman is working.","He says the woman works.","He says the woman is working.","He is saying that the woman works.","He is saying that the woman is working.","He is saying the woman works.","He is saying the woman is working.","He does say that the woman works.","He does say that the woman is working.","He does say the woman works.","He does say the woman is working.","She says that the woman works.","She says that the woman is working.","She says the woman works.","She says the woman is working.","She is saying that the woman works.","She is saying that the woman is working.","She is saying the woman works.","She is saying the woman is working.","She does say that the woman works.","She does say that the woman is working.","She does say the woman works.","She does say the woman is working."],"w":"After a verb of saying or thinking, the subject is accusative and the verb is an infinitive. Add that in English.","g":[["dīcere, -ō","to say"],["fēmina, -ae, f.","woman"],["labōrāre, -ō","to work"]]},
     {"k":"la","p":"Translate into Latin: They think that the sailor comes.","a":["Putant nautam venīre."],"w":"After a verb of saying or thinking, the subject is accusative and the verb is an infinitive. Add that in English.","g":[["putāre, -ō","to think"],["nauta, -ae, m.","sailor"],["venīre, -iō","to come"]]},
     {"k":"en","p":"Translate into English: *Scīmus virōs pugnāre.*","a":["We know that the men fight.","We know that the men are fighting.","We know the men fight.","We know the men are fighting.","We are knowing that the men fight.","We are knowing that the men are fighting.","We are knowing the men fight.","We are knowing the men are fighting.","We do know that the men fight.","We do know that the men are fighting.","We do know the men fight.","We do know the men are fighting."],"w":"After a verb of saying or thinking, the subject is accusative and the verb is an infinitive. Add that in English.","g":[["scīre, -iō","to know"],["vir, -ī, m.","man"],["pugnāre, -ō","to fight"]]},
     {"k":"la","p":"Translate into Latin: The queen says that the boy sleeps.","a":["Rēgīna dīcit puerum dormīre."],"w":"After a verb of saying or thinking, the subject is accusative and the verb is an infinitive. Add that in English.","g":[["rēgīna, -ae, f.","queen"],["dīcere, -ō","to say"],["puer, -ī, m.","boy"],["dormīre, -iō","to sleep"]]},
     {"k":"en","p":"Translate into English: *Videt agricolās labōrāre.*","a":["He sees that the farmers work.","He sees that the farmers are working.","He sees the farmers work.","He sees the farmers are working.","He is seeing that the farmers work.","He is seeing that the farmers are working.","He is seeing the farmers work.","He is seeing the farmers are working.","He does see that the farmers work.","He does see that the farmers are working.","He does see the farmers work.","He does see the farmers are working.","She sees that the farmers work.","She sees that the farmers are working.","She sees the farmers work.","She sees the farmers are working.","She is seeing that the farmers work.","She is seeing that the farmers are working.","She is seeing the farmers work.","She is seeing the farmers are working.","She does see that the farmers work.","She does see that the farmers are working.","She does see the farmers work.","She does see the farmers are working."],"w":"After a verb of saying or thinking, the subject is accusative and the verb is an infinitive. Add that in English.","g":[["vidēre, -eō","to see"],["agricola, -ae, m.","farmer"],["labōrāre, -ō","to work"]]},
     {"k":"la","p":"Translate into Latin: We hear that the friend comes.","a":["Audīmus amīcum venīre."],"w":"After a verb of saying or thinking, the subject is accusative and the verb is an infinitive. Add that in English.","g":[["audīre, -iō","to hear"],["amīcus, -ī, m.","friend"],["venīre, -iō","to come"]]},
     {"k":"en","p":"Translate into English: *Crēdis deās audīre.*","a":["You believe that the goddesses hear.","You believe that the goddesses are hearing.","You believe the goddesses hear.","You believe the goddesses are hearing.","You are believing that the goddesses hear.","You are believing that the goddesses are hearing.","You are believing the goddesses hear.","You are believing the goddesses are hearing.","You do believe that the goddesses hear.","You do believe that the goddesses are hearing.","You do believe the goddesses hear.","You do believe the goddesses are hearing."],"w":"After a verb of saying or thinking, the subject is accusative and the verb is an infinitive. Add that in English.","g":[["crēdere, -ō","to believe"],["dea, -ae, f.","goddess"],["audīre, -iō","to hear"]]},
     {"k":"la","p":"Translate into Latin: The Roman says that the boy is praised.","a":["Rōmānus dīcit puerum laudārī."],"w":"After a verb of saying or thinking, the subject is accusative and the verb is an infinitive. Add that in English.","g":[["Rōmānus, -ī, m.","Roman"],["dīcere, -ō","to say"],["puer, -ī, m.","boy"],["laudāre, -ō","to praise"]]},
     {"k":"en","p":"Translate into English: *Nūntiat rēgīnam venīre.*","a":["He announces that the queen comes.","He announces that the queen is coming.","He announces the queen comes.","He announces the queen is coming.","He is announcing that the queen comes.","He is announcing that the queen is coming.","He is announcing the queen comes.","He is announcing the queen is coming.","He does announce that the queen comes.","He does announce that the queen is coming.","He does announce the queen comes.","He does announce the queen is coming.","She announces that the queen comes.","She announces that the queen is coming.","She announces the queen comes.","She announces the queen is coming.","She is announcing that the queen comes.","She is announcing that the queen is coming.","She is announcing the queen comes.","She is announcing the queen is coming.","She does announce that the queen comes.","She does announce that the queen is coming.","She does announce the queen comes.","She does announce the queen is coming."],"w":"After a verb of saying or thinking, the subject is accusative and the verb is an infinitive. Add that in English.","g":[["nūntiāre, -ō","to announce"],["rēgīna, -ae, f.","queen"],["venīre, -iō","to come"]]},
     {"k":"la","p":"Translate into Latin: We hope that the sailors sail.","a":["Spērāmus nautās nāvigāre."],"w":"After a verb of saying or thinking, the subject is accusative and the verb is an infinitive. Add that in English.","g":[["spērāre, -ō","to hope"],["nauta, -ae, m.","sailor"],["nāvigāre, -ō","to sail"]]},
    ]},
   ]},
 ]},
 {title:"The genitive",lessons:[
  {id:"genposs",title:"The genitive of possession",blurb:"Showing whose something is, and telling -ae apart.",t:["gen","gendat"],
   body:`The **genitive** connects one noun to another. Its main meaning is *of*, or *'s*.

|~ Genitive endings
|Number|1st declension|2nd declension|
|Singular|[[-ae]]|[[-ī]]|
|Plural|[[-ārum]]|[[-ōrum]]|

: liber puellae = the girl's book, the book of the girl
: equus agricolārum = the farmers' horse
: dōnum amīcī = the friend's gift

The genitive usually follows its noun, and either English translation is fine.

# Genitive or dative?

A 1st declension *-ae* can be genitive, dative or nominative plural. Look at what it connects to.

: Liber puellae puerum dēlectat. = The girl's book delights the boy. (genitive: goes with a noun)
: Nauta puellae librum dat. = The sailor gives a book to the girl. (dative: goes with a verb of giving)

If a noun needs an owner, try genitive. If a verb needs someone to receive something, try dative.

?1

?2`,
   q:[
    {s:"Decide if a form in -ae is genitive or dative",b:[
     {"k":"mc","p":"*Equus **puellae** currit*: what case is *puellae*?","o":["genitive","dative","nominative"],"a":0,"w":"It goes with *equus*: the horse of the girl.","g":[["equus, -ī, m.","horse"],["puella, -ae, f.","girl"],["currere, -ō","to run"]]},
     {"k":"mc","p":"*Nauta **puellae** rosam dat*: what case is *puellae*?","o":["dative","genitive","nominative"],"a":0,"w":"The rose is given to the girl.","g":[["nauta, -ae, m.","sailor"],["puella, -ae, f.","girl"],["rosa, -ae, f.","rose"],["dare, dō","to give"]]},
     {"k":"mc","p":"*Liber **fēminae** puerum dēlectat*: what case is *fēminae*?","o":["genitive","dative","nominative"],"a":0,"w":"The book of the woman.","g":[["liber, librī, m.","book"],["fēmina, -ae, f.","woman"],["puer, -ī, m.","boy"],["dēlectāre, -ō","to delight"]]},
     {"k":"mc","p":"*Magister **discipulae** fābulam narrat*: what case is *discipulae*?","o":["dative","genitive","nominative"],"a":0,"w":"The story is told to the student.","g":[["magister, -trī, m.","teacher"],["discipula, -ae, f.","student"],["fābula, -ae, f.","story"],["narrāre, -ō","to tell"]]},
     {"k":"mc","p":"***Puellae** ambulant*: what case is *puellae*?","o":["nominative","genitive","dative"],"a":0,"w":"The plural verb needs a plural subject.","g":[["puella, -ae, f.","girl"],["ambulāre, -ō","to walk"]]},
     {"k":"mc","p":"*Agricola **rēgīnae** equum videt*: what is the most natural reading of *rēgīnae*?","o":["genitive: the queen’s horse","dative: gives to the queen","nominative: the queens"],"a":0,"w":"*videt* isn’t a verb of giving.","g":[["agricola, -ae, m.","farmer"],["rēgīna, -ae, f.","queen"],["equus, -ī, m.","horse"],["vidēre, -eō","to see"]]},
     {"k":"mc","p":"*Fīlia **nautae** labōrat*: what case is *nautae*?","o":["genitive","dative","nominative"],"a":0,"w":"The daughter of the sailor.","g":[["fīlia, -ae, f.","daughter"],["nauta, -ae, m.","sailor"],["labōrāre, -ō","to work"]]},
     {"k":"mc","p":"*Servus **rēgīnae** pecūniam trādit*: what case is *rēgīnae*?","o":["dative","genitive","nominative"],"a":0,"w":"The money is handed to the queen.","g":[["servus, -ī, m.","slave"],["rēgīna, -ae, f.","queen"],["pecūnia, -ae, f.","money"],["trādere, -ō","to hand over"]]},
     {"k":"mc","p":"*Dōna **deae** laudant*: what is the most natural reading of *deae*?","o":["genitive: the goddess’s gifts","dative: gives to the goddess","nominative plural: goddesses"],"a":0,"w":"*laudant* doesn’t take a receiver.","g":[["dōnum, -ī, n.","gift"],["dea, -ae, f.","goddess"],["laudāre, -ō","to praise"]]},
     {"k":"mc","p":"*Puer **amīcae** epistulam scrībit*: what case is *amīcae*?","o":["dative","genitive","nominative"],"a":0,"w":"He writes a letter to his friend.","g":[["puer, -ī, m.","boy"],["amīca, -ae, f.","friend"],["epistula, -ae, f.","letter"],["scrībere, -ō","to write"]]},
    ]},
    {s:"Translate a sentence with a genitive of possession",b:[
     {"k":"en","p":"Translate into English: *Equus puellae currit.*","a":["The girl’s horse runs.","The girl’s horse is running.","The girl’s horse does run.","The horse of the girl runs.","The horse of the girl is running.","The horse of the girl does run."],"w":"The genitive shows whose something is: of, or ’s.","g":[["equus, -ī, m.","horse"],["puella, -ae, f.","girl"],["currere, -ō","to run"]]},
     {"k":"la","p":"Translate into Latin: The farmer’s friend comes.","a":["Amīcus agricolae venit."],"w":"The genitive shows whose something is: of, or ’s.","g":[["amīcus, -ī, m.","friend"],["agricola, -ae, m.","farmer"],["venīre, -iō","to come"]]},
     {"k":"en","p":"Translate into English: *Dōna rēgīnae spectāmus.*","a":["We watch the queen’s gifts.","We watch the gifts of the queen.","We are watching the queen’s gifts.","We are watching the gifts of the queen.","We do watch the queen’s gifts.","We do watch the gifts of the queen."],"w":"The genitive shows whose something is: of, or ’s.","g":[["dōnum, -ī, n.","gift"],["rēgīna, -ae, f.","queen"],["spectāre, -ō","to watch"]]},
     {"k":"la","p":"Translate into Latin: The teacher’s book delights the boy.","a":["Liber magistrī puerum dēlectat."],"w":"The genitive shows whose something is: of, or ’s.","g":[["liber, librī, m.","book"],["magister, -trī, m.","teacher"],["puer, -ī, m.","boy"],["dēlectāre, -ō","to delight"]]},
     {"k":"en","p":"Translate into English: *Fīlia nautae labōrat.*","a":["The sailor’s daughter works.","The sailor’s daughter is working.","The sailor’s daughter does work.","The daughter of the sailor works.","The daughter of the sailor is working.","The daughter of the sailor does work."],"w":"The genitive shows whose something is: of, or ’s.","g":[["fīlia, -ae, f.","daughter"],["nauta, -ae, m.","sailor"],["labōrāre, -ō","to work"]]},
     {"k":"la","p":"Translate into Latin: I see the man’s horse.","a":["Equum virī videō."],"w":"The genitive shows whose something is: of, or ’s.","g":[["equus, -ī, m.","horse"],["vir, -ī, m.","man"],["vidēre, -eō","to see"]]},
     {"k":"en","p":"Translate into English: *Agrōs agricolārum spectant.*","a":["They watch the farmers’ fields.","They watch the fields of the farmers.","They are watching the farmers’ fields.","They are watching the fields of the farmers.","They do watch the farmers’ fields.","They do watch the fields of the farmers."],"w":"The genitive shows whose something is: of, or ’s.","g":[["ager, agrī, m.","field"],["agricola, -ae, m.","farmer"],["spectāre, -ō","to watch"]]},
     {"k":"la","p":"Translate into Latin: The masters’ slaves work.","a":["Servī dominōrum labōrant."],"w":"The genitive shows whose something is: of, or ’s.","g":[["servus, -ī, m.","slave"],["dominus, -ī, m.","master"],["labōrāre, -ō","to work"]]},
     {"k":"en","p":"Translate into English: *Templum deae laudant.*","a":["They praise the goddess’s temple.","They praise the temple of the goddess.","They are praising the goddess’s temple.","They are praising the temple of the goddess.","They do praise the goddess’s temple.","They do praise the temple of the goddess."],"w":"The genitive shows whose something is: of, or ’s.","g":[["templum, -ī, n.","temple"],["dea, -ae, f.","goddess"],["laudāre, -ō","to praise"]]},
     {"k":"la","p":"Translate into Latin: We read the boys’ letters.","a":["Epistulās puerōrum legimus."],"w":"The genitive shows whose something is: of, or ’s.","g":[["epistula, -ae, f.","letter"],["puer, -ī, m.","boy"],["legere, -ō","to read"]]},
    ]},
   ]},
  {id:"genpart",title:"The partitive genitive",blurb:"A part taken from a whole.",t:["genpart"],
   body:`The **partitive genitive** names the whole that a part comes from.

: multī nautārum = many of the sailors
: {pars|part} aquae = part of the water
: paucī puerōrum = few of the boys

Latin can say the same thing with **ex** (or **ē**) and the ablative.

: multī ex nautīs = many of the sailors

The two mean the same, so *multī nautārum* and *multī ex nautīs* are interchangeable.

?1

?2`,
   q:[
    {s:"Recognize and rewrite a partitive expression",b:[
     {"k":"mc","p":"Rewrite *multī agricolārum* with *ex*.","o":["*multī ex agricolīs*","*multī ex agricolās*","*multī ex agricolae*","*multī agricolīs*"],"a":0,"w":"*ex* takes the ablative.","g":[["multī -ae -a","many"],["agricola, -ae, m.","farmer"],["ē, ex (+abl)","out of"]]},
     {"k":"mc","p":"Rewrite *paucī servōrum* with *ex*.","o":["*paucī ex servīs*","*paucī ex servōs*","*paucī ex servōrum*","*paucī servīs*"],"a":0,"w":"*ex* takes the ablative.","g":[["paucī -ae -a","few"],["servus, -ī, m.","slave"],["ē, ex (+abl)","out of"]]},
     {"k":"mc","p":"Rewrite *multī ex virīs* with a genitive.","o":["*multī virōrum*","*multī virī*","*multī virōs*","*multī ex virōrum*"],"a":0,"w":"Genitive plural -ōrum.","g":[["multī -ae -a","many"],["ē, ex (+abl)","out of"],["vir, -ī, m.","man"]]},
     {"k":"mc","p":"Rewrite *paucae ex fēminīs* with a genitive.","o":["*paucae fēminārum*","*paucae fēminae*","*paucae fēminās*","*paucae ex fēminārum*"],"a":0,"w":"Genitive plural -ārum.","g":[["paucī -ae -a","few"],["ē, ex (+abl)","out of"],["fēmina, -ae, f.","woman"]]},
     {"k":"mc","p":"In *paucī agricolārum*, what is the whole?","o":["the farmers","a few","the part","no one"],"a":0,"w":"The genitive names the whole.","g":[["paucī -ae -a","few"],["agricola, -ae, m.","farmer"]]},
     {"k":"mc","p":"In *multī poētārum*, what is the part?","o":["many","the sailors","the sea","none"],"a":0,"w":"The genitive is the whole, and *multī* is the part.","g":[["poēta, -ae, m.","poet"]]},
     {"k":"mc","p":"*{Pars|part} pecūniae* means...","o":["part of the money","the money’s owner","money for a part","part by money"],"a":0,"w":"A part of a whole.","g":[["pars, partis, f.","part"],["pecūnia, -ae, f.","money"]]},
     {"k":"mc","p":"What case does *ex* take?","o":["ablative","genitive","accusative","dative"],"a":0,"w":"*ex* always takes the ablative.","g":[["ē, ex (+abl)","out of"]]},
     {"k":"mc","p":"*Multae puellārum* means...","o":["many of the girls","the girls’ many things","many girls’ things","many to the girls"],"a":0,"w":"A partitive genitive.","g":[["multī -ae -a","many"],["puella, -ae, f.","girl"]]},
     {"k":"mc","p":"*Paucī ex amīcīs* means...","o":["few of the friends","few friends’ things","out of few friends","friends of few"],"a":0,"w":"*ex* + ablative here means of.","g":[["paucī -ae -a","few"],["ē, ex (+abl)","out of"],["amīcus, -ī, m.","friend"]]},
    ]},
    {s:"Translate a sentence with a partitive expression",b:[
     {"k":"en","p":"Translate into English: *Multī nautārum veniunt.*","a":["Many of the sailors come.","Many of the sailors are coming.","Many of the sailors do come."],"w":"The genitive, or ex with the ablative, names the whole.","g":[["multī -ae -a","many"],["nauta, -ae, m.","sailor"],["venīre, -iō","to come"]]},
     {"k":"la","p":"Translate into Latin: Few of the boys run.","a":["Paucī puerōrum currunt."],"w":"The genitive, or ex with the ablative, names the whole.","g":[["paucī -ae -a","few"],["puer, -ī, m.","boy"],["currere, -ō","to run"]]},
     {"k":"en","p":"Translate into English: *Multī ex virīs pugnant.*","a":["Many of the men fight.","Many of the men are fighting.","Many of the men do fight."],"w":"The genitive, or ex with the ablative, names the whole.","g":[["multī -ae -a","many"],["ē, ex (+abl)","out of"],["vir, -ī, m.","man"],["pugnāre, -ō","to fight"]]},
     {"k":"la","p":"Translate into Latin: Few of the women sail.","a":["Paucae fēminārum nāvigant."],"w":"The genitive, or ex with the ablative, names the whole.","g":[["paucī -ae -a","few"],["fēmina, -ae, f.","woman"],["nāvigāre, -ō","to sail"]]},
     {"k":"en","p":"Translate into English: *Multae ex puellīs ambulant.*","a":["Many of the girls walk.","Many of the girls are walking.","Many of the girls do walk."],"w":"The genitive, or ex with the ablative, names the whole.","g":[["multī -ae -a","many"],["ē, ex (+abl)","out of"],["puella, -ae, f.","girl"],["ambulāre, -ō","to walk"]]},
     {"k":"la","p":"Translate into Latin: Few of the farmers work.","a":["Paucī ex agricolīs labōrant."],"w":"The genitive, or ex with the ablative, names the whole.","g":[["paucī -ae -a","few"],["ē, ex (+abl)","out of"],["agricola, -ae, m.","farmer"],["labōrāre, -ō","to work"]]},
     {"k":"en","p":"Translate into English: *Multī discipulōrum legunt.*","a":["Many of the students read.","Many of the students are reading.","Many of the students do read."],"w":"The genitive, or ex with the ablative, names the whole.","g":[["multī -ae -a","many"],["discipulus, -ī, m.","student"],["legere, -ō","to read"]]},
     {"k":"la","p":"Translate into Latin: Few of the slaves sleep.","a":["Paucī servōrum dormiunt."],"w":"The genitive, or ex with the ablative, names the whole.","g":[["paucī -ae -a","few"],["servus, -ī, m.","slave"],["dormīre, -iō","to sleep"]]},
     {"k":"en","p":"Translate into English: *Multī poētārum scrībunt.*","a":["Many of the poets write.","Many of the poets are writing.","Many of the poets do write."],"w":"The genitive, or ex with the ablative, names the whole.","g":[["multī -ae -a","many"],["poēta, -ae, m.","poet"],["scrībere, -ō","to write"]]},
     {"k":"la","p":"Translate into Latin: Few of the sailors stay.","a":["Paucī ex nautīs manent."],"w":"The genitive, or ex with the ablative, names the whole.","g":[["paucī -ae -a","few"],["ē, ex (+abl)","out of"],["nauta, -ae, m.","sailor"],["manēre, -eō","to stay"]]},
    ]},
   ]},
  {id:"gensubj",title:"Subjective, objective and material genitives",blurb:"Three more jobs for the genitive.",t:["genso","genmat"],
   body:`# Subjective and objective

Some nouns contain the idea of an action, like *cūra* (care) or *gaudium* (joy). A genitive with such a noun can show who **does** that action or who **receives** it.

: cūra rēgīnae = the queen's care

If the queen does the caring, it's a **subjective genitive**. If someone cares for the queen, it's an **objective genitive**. Context decides.

: Cūra rēgīnae puerōs servat. = The queen's care saves the boys. (subjective)
: Cūra rēgīnae nautam terret. = Care for the queen frightens the sailor. (objective)

# Material

The **genitive of material** tells what something is made of.

: corōna aurī = a crown of gold
: pōculum argentī = a cup of silver

?1

?2`,
   q:[
    {s:"Name the use of a genitive: possession, subjective, objective or material",b:[
     {"k":"mc","p":"*corōna argentī*","o":["material","possession","subjective","objective"],"a":0,"w":"What it is made of.","g":[["corōna, -ae, f.","crown"],["argentum, -ī, n.","silver"]]},
     {"k":"mc","p":"*pōculum aurī*","o":["material","possession","subjective","objective"],"a":0,"w":"What it is made of.","g":[["pōculum, -ī, n.","cup"],["aurum, -ī, n.","gold"]]},
     {"k":"mc","p":"*equus agricolae*","o":["possession","material","subjective","objective"],"a":0,"w":"Who owns it.","g":[["equus, -ī, m.","horse"],["agricola, -ae, m.","farmer"]]},
     {"k":"mc","p":"*cūra dominī* meaning the care the master gives","o":["subjective","objective","material","possession"],"a":0,"w":"The master does the caring.","g":[["cūra, -ae, f.","care"],["dominus, -ī, m.","master"]]},
     {"k":"mc","p":"*cūra dominī* meaning care felt for the master","o":["objective","subjective","material","possession"],"a":0,"w":"The master receives the care.","g":[["cūra, -ae, f.","care"],["dominus, -ī, m.","master"]]},
     {"k":"mc","p":"*gaudium puellārum* meaning the joy the girls feel","o":["subjective","objective","material","possession"],"a":0,"w":"The girls feel the joy.","g":[["gaudium, -ī, n.","joy"],["puella, -ae, f.","girl"]]},
     {"k":"mc","p":"*liber magistrī*","o":["possession","material","subjective","objective"],"a":0,"w":"Whose book it is.","g":[["liber, librī, m.","book"],["magister, -trī, m.","teacher"]]},
     {"k":"mc","p":"*corōnae aurī* (plural)","o":["material","possession","subjective","objective"],"a":0,"w":"Crowns of gold.","g":[["corōna, -ae, f.","crown"],["aurum, -ī, n.","gold"]]},
     {"k":"mc","p":"*īra deī* meaning the god’s anger","o":["subjective","objective","material","possession"],"a":0,"w":"The god feels the anger.","g":[["īra, -ae, f.","anger"],["deus, -ī, m.","god"]]},
     {"k":"mc","p":"*cūra equōrum* meaning looking after horses","o":["objective","subjective","material","possession"],"a":0,"w":"The horses receive the care.","g":[["cūra, -ae, f.","care"],["equus, -ī, m.","horse"]]},
    ]},
    {s:"Translate a sentence with a subjective, objective or material genitive",b:[
     {"k":"en","p":"Translate into English: *Corōna aurī puellam dēlectat.*","a":["The crown of gold delights the girl.","The crown of gold is delighting the girl.","The crown of gold does delight the girl."],"w":"Translate these genitives with of. Context tells you who does the action.","g":[["corōna, -ae, f.","crown"],["aurum, -ī, n.","gold"],["puella, -ae, f.","girl"],["dēlectāre, -ō","to delight"]]},
     {"k":"la","p":"Translate into Latin: The care of the master saves the boys.","a":["Cūra dominī puerōs servat."],"w":"Translate these genitives with of. Context tells you who does the action.","g":[["cūra, -ae, f.","care"],["dominus, -ī, m.","master"],["puer, -ī, m.","boy"],["servāre, -ō","to save"]]},
     {"k":"en","p":"Translate into English: *Pōcula argentī custōdiunt.*","a":["They guard the cups of silver.","They are guarding the cups of silver.","They do guard the cups of silver."],"w":"Translate these genitives with of. Context tells you who does the action.","g":[["pōculum, -ī, n.","cup"],["argentum, -ī, n.","silver"],["custōdīre, -iō","to guard"]]},
     {"k":"la","p":"Translate into Latin: The joy of the girls delights the sailors.","a":["Gaudium puellārum nautās dēlectat."],"w":"Translate these genitives with of. Context tells you who does the action.","g":[["gaudium, -ī, n.","joy"],["puella, -ae, f.","girl"],["nauta, -ae, m.","sailor"],["dēlectāre, -ō","to delight"]]},
     {"k":"en","p":"Translate into English: *Vir pōculum aurī portat.*","a":["The man carries a cup of gold.","The man is carrying a cup of gold.","The man does carry a cup of gold."],"w":"Translate these genitives with of. Context tells you who does the action.","g":[["vir, -ī, m.","man"],["pōculum, -ī, n.","cup"],["aurum, -ī, n.","gold"],["portāre, -ō","to carry"]]},
     {"k":"la","p":"Translate into Latin: The anger of the god frightens the men.","a":["Īra deī virōs terret."],"w":"Translate these genitives with of. Context tells you who does the action.","g":[["īra, -ae, f.","anger"],["deus, -ī, m.","god"],["vir, -ī, m.","man"],["terrēre, -eō","to frighten"]]},
     {"k":"en","p":"Translate into English: *Corōnam argentī spectāmus.*","a":["We watch the crown of silver.","We are watching the crown of silver.","We do watch the crown of silver."],"w":"Translate these genitives with of. Context tells you who does the action.","g":[["corōna, -ae, f.","crown"],["argentum, -ī, n.","silver"],["spectāre, -ō","to watch"]]},
     {"k":"la","p":"Translate into Latin: The care of the farmer saves the horse.","a":["Cūra agricolae equum servat."],"w":"Translate these genitives with of. Context tells you who does the action.","g":[["cūra, -ae, f.","care"],["agricola, -ae, m.","farmer"],["equus, -ī, m.","horse"],["servāre, -ō","to save"]]},
     {"k":"en","p":"Translate into English: *Rēgīna corōnās aurī dat.*","a":["The queen gives crowns of gold.","The queen is giving crowns of gold.","The queen does give crowns of gold."],"w":"Translate these genitives with of. Context tells you who does the action.","g":[["rēgīna, -ae, f.","queen"],["corōna, -ae, f.","crown"],["aurum, -ī, n.","gold"],["dare, dō","to give"]]},
     {"k":"la","p":"Translate into Latin: The joy of the poet delights the women.","a":["Gaudium poētae fēminās dēlectat."],"w":"Translate these genitives with of. Context tells you who does the action.","g":[["gaudium, -ī, n.","joy"],["poēta, -ae, m.","poet"],["fēmina, -ae, f.","woman"],["dēlectāre, -ō","to delight"]]},
    ]},
   ]},
 ]},
 {title:"The past and commands",lessons:[
  {id:"impf",title:"The continuous past (imperfect) active",blurb:"What was happening, or used to happen.",t:["impf"],
   body:`The **imperfect**, or continuous past, describes an action in the past that was going on or kept happening. Its signal is **-bā-**.

|~ Imperfect active endings
|Person|Singular|Plural|
|1st|-bam|-bāmus|
|2nd|-bās|-bātis|
|3rd|-bat|-bant|

To form it, take the infinitive, drop the last three letters and add the right vowel.

|~ Vowels before -bā-
|Family|Vowel|Example|
|1st|-ā-|portābam|
|2nd|-ē-|vidēbam|
|3rd|-ē-|mittēbam|
|3rd -iō|-iē-|capiēbam|
|4th|-iē-|audiēbam|

Translate with *was ...ing*, *were ...ing* or *used to*.

: Portābat. = He was carrying.
: Laudābant. = They used to praise.

?1

?2`,
   q:[
    {s:"Translate an imperfect active verb into English",b:[
     {"k":"en","p":"Translate into English: *vocābat*","a":["he was calling","he used to call","he kept calling","she was calling","she used to call","she kept calling","it was calling","it used to call","it kept calling"],"w":"*vocābat* is 3rd person singular, so it means “he was calling.”","g":[["vocāre, -ō","to call"]]},
     {"k":"en","p":"Translate into English: *docēbant*","a":["they were teaching","they used to teach","they kept teaching"],"w":"*docēbant* is 3rd person plural, so it means “they were teaching.”","g":[["docēre, -eō","to teach"]]},
     {"k":"en","p":"Translate into English: *regēbam*","a":["I was ruling","I used to rule","I kept ruling"],"w":"*regēbam* is 1st person singular, so it means “I was ruling.”","g":[["regere, -ō","to rule"]]},
     {"k":"en","p":"Translate into English: *accipiēbāmus*","a":["we were receiving","we used to receive","we kept receiving"],"w":"*accipiēbāmus* is 1st person plural, so it means “we were receiving.”","g":[["accipere, -iō","to receive"]]},
     {"k":"en","p":"Translate into English: *custōdiēbās*","a":["you were guarding","you used to guard","you kept guarding"],"w":"*custōdiēbās* is 2nd person singular, so it means “you were guarding.”","g":[["custōdīre, -iō","to guard"]]},
     {"k":"en","p":"Translate into English: *amābātis*","a":["you were loving","you used to love","you kept loving"],"w":"*amābātis* is 2nd person plural, so it means “you were loving.”","g":[["amāre, -ō","to love"]]},
     {"k":"en","p":"Translate into English: *tenēbant*","a":["they were holding","they used to hold","they kept holding"],"w":"*tenēbant* is 3rd person plural, so it means “they were holding.”","g":[["tenēre, -eō","to hold"]]},
     {"k":"en","p":"Translate into English: *scrībēbat*","a":["he was writing","he used to write","he kept writing","she was writing","she used to write","she kept writing","it was writing","it used to write","it kept writing"],"w":"*scrībēbat* is 3rd person singular, so it means “he was writing.”","g":[["scrībere, -ō","to write"]]},
     {"k":"en","p":"Translate into English: *iaciēbāmus*","a":["we were throwing","we used to throw","we kept throwing"],"w":"*iaciēbāmus* is 1st person plural, so it means “we were throwing.”","g":[["iacere, -iō","to throw"]]},
     {"k":"en","p":"Translate into English: *pūniēbam*","a":["I was punishing","I used to punish","I kept punishing"],"w":"*pūniēbam* is 1st person singular, so it means “I was punishing.”","g":[["pūnīre, -iō","to punish"]]},
    ]},
    {s:"Write an imperfect active verb in Latin",b:[
     {"k":"la","p":"Write in Latin: we were calling","a":["vocābāmus"],"w":"The 1st person plural form is *vocābāmus*.","g":[["vocāre, -ō","to call"]]},
     {"k":"la","p":"Write in Latin: I was teaching","a":["docēbam"],"w":"The 1st person singular form is *docēbam*.","g":[["docēre, -eō","to teach"]]},
     {"k":"la","p":"Write in Latin: he was ruling","a":["regēbat"],"w":"The 3rd person singular form is *regēbat*.","g":[["regere, -ō","to rule"]]},
     {"k":"la","p":"Write in Latin: they were receiving","a":["accipiēbant"],"w":"The 3rd person plural form is *accipiēbant*.","g":[["accipere, -iō","to receive"]]},
     {"k":"la","p":"Write in Latin: you all were guarding","a":["custōdiēbātis"],"w":"The 2nd person plural form is *custōdiēbātis*.","g":[["custōdīre, -iō","to guard"]]},
     {"k":"la","p":"Write in Latin: you (one person) were loving","a":["amābās"],"w":"The 2nd person singular form is *amābās*.","g":[["amāre, -ō","to love"]]},
     {"k":"la","p":"Write in Latin: I was holding","a":["tenēbam"],"w":"The 1st person singular form is *tenēbam*.","g":[["tenēre, -eō","to hold"]]},
     {"k":"la","p":"Write in Latin: they were writing","a":["scrībēbant"],"w":"The 3rd person plural form is *scrībēbant*.","g":[["scrībere, -ō","to write"]]},
     {"k":"la","p":"Write in Latin: he was throwing","a":["iaciēbat"],"w":"The 3rd person singular form is *iaciēbat*.","g":[["iacere, -iō","to throw"]]},
     {"k":"la","p":"Write in Latin: we were punishing","a":["pūniēbāmus"],"w":"The 1st person plural form is *pūniēbāmus*.","g":[["pūnīre, -iō","to punish"]]},
    ]},
   ]},
  {id:"impfpass",title:"The continuous past passive",blurb:"What was being done.",t:["ipas"],
   body:`The imperfect passive keeps the same vowels and uses passive endings after *-bā-*.

|~ Imperfect passive endings
|Person|Singular|Plural|
|1st|-bar|-bāmur|
|2nd|-bāris|-bāminī|
|3rd|-bātur|-bantur|

: portābar = I was being carried
: mittēbātur = he was being sent
: capiēbantur = they were being captured

The *a* is short before *-r* and *-ntur*, so *portābar* but *portābāris*.

?1

?2`,
   q:[
    {s:"Translate an imperfect passive verb into English",b:[
     {"k":"en","p":"Translate into English: *vocābātur*","a":["he was being called","he used to be called","she was being called","she used to be called","it was being called","it used to be called"],"w":"*vocābātur* is 3rd person singular, so it means “he was being called.”","g":[["vocāre, -ō","to call"]]},
     {"k":"en","p":"Translate into English: *docēbantur*","a":["they were being taught","they used to be taught"],"w":"*docēbantur* is 3rd person plural, so it means “they were being taught.”","g":[["docēre, -eō","to teach"]]},
     {"k":"en","p":"Translate into English: *regēbar*","a":["I was being ruled","I used to be ruled"],"w":"*regēbar* is 1st person singular, so it means “I was being ruled.”","g":[["regere, -ō","to rule"]]},
     {"k":"en","p":"Translate into English: *accipiēbāmur*","a":["we were being received","we used to be received"],"w":"*accipiēbāmur* is 1st person plural, so it means “we were being received.”","g":[["accipere, -iō","to receive"]]},
     {"k":"en","p":"Translate into English: *custōdiēbāris*","a":["you were being guarded","you used to be guarded"],"w":"*custōdiēbāris* is 2nd person singular, so it means “you were being guarded.”","g":[["custōdīre, -iō","to guard"]]},
     {"k":"en","p":"Translate into English: *amābāminī*","a":["you were being loved","you used to be loved"],"w":"*amābāminī* is 2nd person plural, so it means “you were being loved.”","g":[["amāre, -ō","to love"]]},
     {"k":"en","p":"Translate into English: *tenēbantur*","a":["they were being held","they used to be held"],"w":"*tenēbantur* is 3rd person plural, so it means “they were being held.”","g":[["tenēre, -eō","to hold"]]},
     {"k":"en","p":"Translate into English: *scrībēbātur*","a":["he was being written","he used to be written","she was being written","she used to be written","it was being written","it used to be written"],"w":"*scrībēbātur* is 3rd person singular, so it means “he was being written.”","g":[["scrībere, -ō","to write"]]},
     {"k":"en","p":"Translate into English: *iaciēbāmur*","a":["we were being thrown","we used to be thrown"],"w":"*iaciēbāmur* is 1st person plural, so it means “we were being thrown.”","g":[["iacere, -iō","to throw"]]},
     {"k":"en","p":"Translate into English: *pūniēbar*","a":["I was being punished","I used to be punished"],"w":"*pūniēbar* is 1st person singular, so it means “I was being punished.”","g":[["pūnīre, -iō","to punish"]]},
    ]},
    {s:"Write an imperfect passive verb in Latin",b:[
     {"k":"la","p":"Write in Latin: we were being called","a":["vocābāmur"],"w":"The 1st person plural form is *vocābāmur*.","g":[["vocāre, -ō","to call"]]},
     {"k":"la","p":"Write in Latin: I was being taught","a":["docēbar"],"w":"The 1st person singular form is *docēbar*.","g":[["docēre, -eō","to teach"]]},
     {"k":"la","p":"Write in Latin: he was being ruled","a":["regēbātur"],"w":"The 3rd person singular form is *regēbātur*.","g":[["regere, -ō","to rule"]]},
     {"k":"la","p":"Write in Latin: they were being received","a":["accipiēbantur"],"w":"The 3rd person plural form is *accipiēbantur*.","g":[["accipere, -iō","to receive"]]},
     {"k":"la","p":"Write in Latin: you all were being guarded","a":["custōdiēbāminī"],"w":"The 2nd person plural form is *custōdiēbāminī*.","g":[["custōdīre, -iō","to guard"]]},
     {"k":"la","p":"Write in Latin: you (one person) were being loved","a":["amābāris"],"w":"The 2nd person singular form is *amābāris*.","g":[["amāre, -ō","to love"]]},
     {"k":"la","p":"Write in Latin: I was being held","a":["tenēbar"],"w":"The 1st person singular form is *tenēbar*.","g":[["tenēre, -eō","to hold"]]},
     {"k":"la","p":"Write in Latin: they were being written","a":["scrībēbantur"],"w":"The 3rd person plural form is *scrībēbantur*.","g":[["scrībere, -ō","to write"]]},
     {"k":"la","p":"Write in Latin: he was being thrown","a":["iaciēbātur"],"w":"The 3rd person singular form is *iaciēbātur*.","g":[["iacere, -iō","to throw"]]},
     {"k":"la","p":"Write in Latin: we were being punished","a":["pūniēbāmur"],"w":"The 1st person plural form is *pūniēbāmur*.","g":[["pūnīre, -iō","to punish"]]},
    ]},
   ]},
  {id:"indstat2",title:"Indirect statement II",blurb:"Reported speech after a past verb.",t:["indst2"],
   body:`When the main verb is past, a present infinitive still means something happening **at the same time** as that verb. In English, this becomes a past verb.

: Dīcit puellam labōrāre. = He says that the girl is working.
: Dīcēbat puellam labōrāre. = He was saying that the girl was working.

The Latin infinitive didn't change, and only the main verb did. English shifts the reported verb to match.

: Sciēbāmus nautās venīre. = We knew that the sailors were coming.
: Putābant rēgīnam laudārī. = They thought that the queen was being praised.

?1

?2`,
   q:[
    {s:"Translate the infinitive correctly after a past main verb",b:[
     {"k":"mc","p":"After *dīcēbat*, *labōrāre* means...","o":["was working","is working","will work","worked yesterday"],"a":0,"w":"The action happens at the same time as the past verb.","g":[["dīcere, -ō","to say"],["labōrāre, -ō","to work"]]},
     {"k":"mc","p":"After *dīcit*, *labōrāre* means...","o":["is working","was working","will work","has worked"],"a":0,"w":"A present main verb, so a present in English.","g":[["dīcere, -ō","to say"],["labōrāre, -ō","to work"]]},
     {"k":"mc","p":"After *sciēbāmus*, *venīre* means...","o":["were coming","are coming","will come","came long ago"],"a":0,"w":"The same time as the past verb.","g":[["scīre, -iō","to know"],["venīre, -iō","to come"]]},
     {"k":"mc","p":"After *putant*, *venīre* means...","o":["are coming","were coming","will come","had come"],"a":0,"w":"A present main verb.","g":[["putāre, -ō","to think"],["venīre, -iō","to come"]]},
     {"k":"mc","p":"After *putābant*, *laudārī* means...","o":["was being praised","is being praised","praised","will praise"],"a":0,"w":"-rī is passive, at the same time as the past verb.","g":[["putāre, -ō","to think"],["laudāre, -ō","to praise"]]},
     {"k":"mc","p":"Did the Latin infinitive change between *dīcit puerum labōrāre* and *dīcēbat puerum labōrāre*?","o":["No","Yes, it became past","Yes, it became passive","Yes, it became future"],"a":0,"w":"Only the main verb changed.","g":[["dīcere, -ō","to say"],["puer, -ī, m.","boy"],["labōrāre, -ō","to work"]]},
     {"k":"mc","p":"*Crēdēbat nautam nāvigāre* means...","o":["He believed that the sailor was sailing.","He believes that the sailor sails.","He believed that the sailor sails tomorrow.","The sailor believed him."],"a":0,"w":"Past main verb.","g":[["crēdere, -ō","to believe"],["nauta, -ae, m.","sailor"],["nāvigāre, -ō","to sail"]]},
     {"k":"mc","p":"*Vidēbant puerōs currere* means...","o":["They saw that the boys were running.","They see that the boys are running.","The boys saw them running.","They will see the boys run."],"a":0,"w":"Past main verb.","g":[["vidēre, -eō","to see"],["puer, -ī, m.","boy"],["currere, -ō","to run"]]},
     {"k":"mc","p":"*Audiēbam amīcum venīre* means...","o":["I heard that the friend was coming.","I hear that the friend is coming.","The friend heard me.","I will hear the friend."],"a":0,"w":"Past main verb.","g":[["audīre, -iō","to hear"],["amīcus, -ī, m.","friend"],["venīre, -iō","to come"]]},
     {"k":"mc","p":"Which main verb is past?","o":["*spērābat*","*spērat*","*spērābit*","*spērāre*"],"a":0,"w":"-bā- marks the imperfect.","g":[["spērāre, -ō","to hope"]]},
    ]},
    {s:"Translate an indirect statement with a past main verb",b:[
     {"k":"en","p":"Translate into English: *Dīcēbat fēminam labōrāre.*","a":["He was saying that the woman was working.","He was saying the woman was working.","He used to say that the woman was working.","He used to say the woman was working.","He kept saying that the woman was working.","He kept saying the woman was working.","She was saying that the woman was working.","She was saying the woman was working.","She used to say that the woman was working.","She used to say the woman was working.","She kept saying that the woman was working.","She kept saying the woman was working."],"w":"A present infinitive after a past main verb is translated as a past action at the same time.","g":[["dīcere, -ō","to say"],["fēmina, -ae, f.","woman"],["labōrāre, -ō","to work"]]},
     {"k":"la","p":"Translate into Latin: We were knowing that the farmers were coming.","a":["Sciēbāmus agricolās venīre."],"w":"A present infinitive after a past main verb is translated as a past action at the same time.","g":[["scīre, -iō","to know"],["agricola, -ae, m.","farmer"],["venīre, -iō","to come"]]},
     {"k":"en","p":"Translate into English: *Putābant virum dormīre.*","a":["They were thinking that the man was sleeping.","They were thinking the man was sleeping.","They used to think that the man was sleeping.","They used to think the man was sleeping.","They kept thinking that the man was sleeping.","They kept thinking the man was sleeping."],"w":"A present infinitive after a past main verb is translated as a past action at the same time.","g":[["putāre, -ō","to think"],["vir, -ī, m.","man"],["dormīre, -iō","to sleep"]]},
     {"k":"la","p":"Translate into Latin: The queen was saying that the boy was running.","a":["Rēgīna dīcēbat puerum currere."],"w":"A present infinitive after a past main verb is translated as a past action at the same time.","g":[["rēgīna, -ae, f.","queen"],["dīcere, -ō","to say"],["puer, -ī, m.","boy"],["currere, -ō","to run"]]},
     {"k":"en","p":"Translate into English: *Vidēbam agricolās labōrāre.*","a":["I was seeing that the farmers were working.","I was seeing the farmers were working.","I used to see that the farmers were working.","I used to see the farmers were working.","I kept seeing that the farmers were working.","I kept seeing the farmers were working."],"w":"A present infinitive after a past main verb is translated as a past action at the same time.","g":[["vidēre, -eō","to see"],["agricola, -ae, m.","farmer"],["labōrāre, -ō","to work"]]},
     {"k":"la","p":"Translate into Latin: They were hearing that the friend was coming.","a":["Audiēbant amīcum venīre."],"w":"A present infinitive after a past main verb is translated as a past action at the same time.","g":[["audīre, -iō","to hear"],["amīcus, -ī, m.","friend"],["venīre, -iō","to come"]]},
     {"k":"en","p":"Translate into English: *Crēdēbās deam audīre.*","a":["You were believing that the goddess was hearing.","You were believing the goddess was hearing.","You used to believe that the goddess was hearing.","You used to believe the goddess was hearing.","You kept believing that the goddess was hearing.","You kept believing the goddess was hearing."],"w":"A present infinitive after a past main verb is translated as a past action at the same time.","g":[["crēdere, -ō","to believe"],["dea, -ae, f.","goddess"],["audīre, -iō","to hear"]]},
     {"k":"la","p":"Translate into Latin: He was announcing that the queen was coming.","a":["Nūntiābat rēgīnam venīre."],"w":"A present infinitive after a past main verb is translated as a past action at the same time.","g":[["nūntiāre, -ō","to announce"],["rēgīna, -ae, f.","queen"],["venīre, -iō","to come"]]},
     {"k":"en","p":"Translate into English: *Spērābāmus nautās nāvigāre.*","a":["We were hoping that the sailors were sailing.","We were hoping the sailors were sailing.","We used to hope that the sailors were sailing.","We used to hope the sailors were sailing.","We kept hoping that the sailors were sailing.","We kept hoping the sailors were sailing."],"w":"A present infinitive after a past main verb is translated as a past action at the same time.","g":[["spērāre, -ō","to hope"],["nauta, -ae, m.","sailor"],["nāvigāre, -ō","to sail"]]},
     {"k":"la","p":"Translate into Latin: They were saying that the girl was being praised.","a":["Dīcēbant puellam laudārī."],"w":"A present infinitive after a past main verb is translated as a past action at the same time.","g":[["dīcere, -ō","to say"],["puella, -ae, f.","girl"],["laudāre, -ō","to praise"]]},
    ]},
   ]},
  {id:"imperative",title:"The imperative",blurb:"Giving commands.",t:["imp"],
   body:`The **imperative** gives a command. It has singular and plural forms, in the active and the passive.

|~ Imperative forms
|Family|Infinitive|Active sg.|Active pl.|Passive sg.|Passive pl.|
|1st|portāre|portā|portāte|portāre|portāminī|
|2nd|sedēre|sedē|sedēte|sedēre|sedēminī|
|3rd|currere|curre|currite|currere|curriminī|
|3rd -iō|capere|cape|capite|capere|capiminī|
|4th|audīre|audī|audīte|audīre|audīminī|

The rules are short.

- Active singular: drop *-re*.
- Active plural: change *-re* to *-te*. The 3rd and 3rd -iō conjugations use *-ite*.
- Passive singular: looks like the active infinitive.
- Passive plural: looks like the *-minī* form you already know.

A few 3rd conjugation verbs lose the final *-e*: *dūc*, lead, and *dīc*, say.

In poetry you may see **nē** with an imperative as a negative command: *Nē timē*, don't be afraid.

?1

?2`,
   q:[
    {s:"Write an imperative form",b:[
     {"k":"la","p":"Write the active singular imperative of *amāre*.","a":["amā"],"w":"Drop -re.","g":[["amāre, -ō","to love"]]},
     {"k":"la","p":"Write the active plural imperative of *amāre*.","a":["amāte"],"w":"-re becomes -te.","g":[["amāre, -ō","to love"]]},
     {"k":"la","p":"Write the active singular imperative of *tenēre*.","a":["tenē"],"w":"Drop -re.","g":[["tenēre, -eō","to hold"]]},
     {"k":"la","p":"Write the active plural imperative of *mittere*.","a":["mittite"],"w":"3rd conjugation plural uses -ite.","g":[["mittere, -ō","to send"]]},
     {"k":"la","p":"Write the active singular imperative of *mittere*.","a":["mitte"],"w":"Drop -re.","g":[["mittere, -ō","to send"]]},
     {"k":"la","p":"Write the active plural imperative of *iacere*.","a":["iacite"],"w":"3rd -iō plural uses -ite.","g":[["iacere, -iō","to throw"]]},
     {"k":"la","p":"Write the active singular imperative of *custōdīre*.","a":["custōdī"],"w":"Drop -re.","g":[["custōdīre, -iō","to guard"]]},
     {"k":"la","p":"Write the active plural imperative of *custōdīre*.","a":["custōdīte"],"w":"-re becomes -te.","g":[["custōdīre, -iō","to guard"]]},
     {"k":"la","p":"Write the passive plural imperative of *amāre*.","a":["amāminī"],"w":"The -minī form.","g":[["amāre, -ō","to love"]]},
     {"k":"la","p":"Write the passive plural imperative of *vocāre*.","a":["vocāminī"],"w":"The -minī form.","g":[["vocāre, -ō","to call"]]},
    ]},
    {s:"Translate a command",b:[
     {"k":"en","p":"Translate into English: *Portā rosam!*","a":["Carry the rose!"],"w":"Singular commands drop -re, and plural commands end in -te or -ite.","g":[["portāre, -ō","to carry"],["rosa, -ae, f.","rose"]]},
     {"k":"la","p":"Translate into Latin: Listen, girls!","a":["Audīte, puellae!"],"w":"Singular commands drop -re, and plural commands end in -te or -ite.","g":[["audīre, -iō","to hear"],["puella, -ae, f.","girl"]]},
     {"k":"en","p":"Translate into English: *Curre, puer!*","a":["Run, boy!"],"w":"Singular commands drop -re, and plural commands end in -te or -ite.","g":[["currere, -ō","to run"],["puer, -ī, m.","boy"]]},
     {"k":"la","p":"Translate into Latin: Call the sailor!","a":["Nautam vocāte!"],"w":"Singular commands drop -re, and plural commands end in -te or -ite.","g":[["nauta, -ae, m.","sailor"],["vocāre, -ō","to call"]]},
     {"k":"en","p":"Translate into English: *Labōrā, serve!*","a":["Work, slave!"],"w":"Singular commands drop -re, and plural commands end in -te or -ite.","g":[["labōrāre, -ō","to work"],["servus, -ī, m.","slave"]]},
     {"k":"la","p":"Translate into Latin: Take the swords!","a":["Capite gladiōs!"],"w":"Singular commands drop -re, and plural commands end in -te or -ite.","g":[["capere, -iō","to capture"],["gladius, -ī, m.","sword"]]},
     {"k":"en","p":"Translate into English: *Sedē, amīce!*","a":["Sit, friend!"],"w":"Singular commands drop -re, and plural commands end in -te or -ite.","g":[["sedēre, -eō","to sit"],["amīcus, -ī, m.","friend"]]},
     {"k":"la","p":"Translate into Latin: Read the books!","a":["Legite librōs!"],"w":"Singular commands drop -re, and plural commands end in -te or -ite.","g":[["legere, -ō","to read"],["liber, librī, m.","book"]]},
     {"k":"en","p":"Translate into English: *Equum dūc!*","a":["Lead the horse!"],"w":"Singular commands drop -re, and plural commands end in -te or -ite.","g":[["equus, -ī, m.","horse"],["dūcere, -ō","to lead"]]},
     {"k":"la","p":"Translate into Latin: See the temple!","a":["Vidēte templum!"],"w":"Singular commands drop -re, and plural commands end in -te or -ite.","g":[["vidēre, -eō","to see"],["templum, -ī, n.","temple"]]},
    ]},
   ]},
  {id:"medsum",title:"medius and summus",blurb:"Adjectives that mean \"the middle of\" and \"the top of\".",t:["medsum"],
   body:`*Medius -a -um* and *summus -a -um* are adjectives, so they agree with their nouns. English often translates them with *of*.

: media silva = the middle of the forest
: in mediā silvā = in the middle of the forest
: summus mōns = the top of the mountain
: ad summum montem = to the top of the mountain
: summa aqua = the surface of the water

The Latin doesn't use a genitive here, even though English says *of*. Read *in mediā silvā* as *in the mid forest*, then say it in natural English.

?1`,
   q:[
    {s:"Translate a phrase with medius or summus",b:[
     {"k":"en","p":"Translate into English: *Puella in mediā silvā ambulat.*","a":["The girl walks in the middle of the forest.","The girl is walking in the middle of the forest.","The girl does walk in the middle of the forest."],"w":"medius and summus agree with their noun, and English adds of.","g":[["puella, -ae, f.","girl"],["in","in, on (+abl); into (+acc)"],["medius -a -um","the middle of"],["silva, -ae, f.","forest"],["ambulāre, -ō","to walk"]]},
     {"k":"la","p":"Translate into Latin: The sailor runs to the top of the mountain.","a":["Nauta ad summum montem currit."],"w":"medius and summus agree with their noun, and English adds of.","g":[["nauta, -ae, m.","sailor"],["ad (+acc)","to, toward"],["summus -a -um","the top of, the surface of"],["mōns, montis, m.","mountain"],["currere, -ō","to run"]]},
     {"k":"en","p":"Translate into English: *Agricola in mediō agrō labōrat.*","a":["The farmer works in the middle of the field.","The farmer is working in the middle of the field.","The farmer does work in the middle of the field."],"w":"medius and summus agree with their noun, and English adds of.","g":[["agricola, -ae, m.","farmer"],["in","in, on (+abl); into (+acc)"],["medius -a -um","the middle of"],["ager, agrī, m.","field"],["labōrāre, -ō","to work"]]},
     {"k":"la","p":"Translate into Latin: He sits in the top of the house.","a":["In summā casā sedet."],"w":"medius and summus agree with their noun, and English adds of.","g":[["in","in, on (+abl); into (+acc)"],["summus -a -um","the top of, the surface of"],["casa, -ae, f.","house"],["sedēre, -eō","to sit"]]},
     {"k":"en","p":"Translate into English: *Virī in mediā viā pugnant.*","a":["The men fight in the middle of the road.","The men are fighting in the middle of the road.","The men do fight in the middle of the road."],"w":"medius and summus agree with their noun, and English adds of.","g":[["vir, -ī, m.","man"],["in","in, on (+abl); into (+acc)"],["medius -a -um","the middle of"],["via, -ae, f.","road"],["pugnāre, -ō","to fight"]]},
     {"k":"la","p":"Translate into Latin: He lives in the middle of the town.","a":["In mediō oppidō habitat."],"w":"medius and summus agree with their noun, and English adds of.","g":[["in","in, on (+abl); into (+acc)"],["medius -a -um","the middle of"],["oppidum, -ī, n.","town"],["habitāre, -ō","to live"]]},
     {"k":"en","p":"Translate into English: *Puerī ad mediam īnsulam ambulant.*","a":["The boys walk to the middle of the island.","The boys are walking to the middle of the island.","The boys do walk to the middle of the island."],"w":"medius and summus agree with their noun, and English adds of.","g":[["puer, -ī, m.","boy"],["ad (+acc)","to, toward"],["medius -a -um","the middle of"],["īnsula, -ae, f.","island"],["ambulāre, -ō","to walk"]]},
     {"k":"la","p":"Translate into Latin: The master sits in the middle of the house.","a":["Dominus in mediā casā sedet."],"w":"medius and summus agree with their noun, and English adds of.","g":[["dominus, -ī, m.","master"],["in","in, on (+abl); into (+acc)"],["medius -a -um","the middle of"],["casa, -ae, f.","house"],["sedēre, -eō","to sit"]]},
     {"k":"en","p":"Translate into English: *Ad summam vīllam currimus.*","a":["We run to the top of the farmhouse.","We are running to the top of the farmhouse.","We do run to the top of the farmhouse."],"w":"medius and summus agree with their noun, and English adds of.","g":[["ad (+acc)","to, toward"],["summus -a -um","the top of, the surface of"],["vīlla, -ae, f.","farmhouse"],["currere, -ō","to run"]]},
     {"k":"la","p":"Translate into Latin: The girl works in the middle of the inn.","a":["Puella in mediā tabernā labōrat."],"w":"medius and summus agree with their noun, and English adds of.","g":[["puella, -ae, f.","girl"],["in","in, on (+abl); into (+acc)"],["medius -a -um","the middle of"],["taberna, -ae, f.","inn"],["labōrāre, -ō","to work"]]},
    ]},
   ]},
 ]},
 {title:"Finishing Latin I",lessons:[
  {id:"sum",title:"esse: how to “be” in Latin",blurb:"The irregular verb “to be,” the = sign, there is, and adesse/abesse.",t:["esse"],
   body:`Not every English “is” means the verb *esse*. First ask: what is the **main idea** of the verb?

: Dūcit. = He is leading. (the main idea is leading)
: Laetus est. = He is happy. (the main idea is being)

English uses “is” to help say that an action is happening now, but Latin only uses *esse* when the main idea really is *to be*. So “the sailors are sailing” is *nautae nāvigant*, while “the sailors are tired” is *nautae fessī sunt*.

## The forms of esse

*Esse*, to be, is irregular, but its forms have patterns you already know. The continuous past has the *-ā-* of *-bā-*, and the future has the *ō, i, u* pattern of *-bō, -bi, -bu*.

|~ esse, to be
|Person|Present|Continuous past|Future|
|I|sum|eram|erō|
|you|es|erās|eris|
|he/she/it|est|erat|erit|
|we|sumus|erāmus|erimus|
|you all|estis|erātis|eritis|
|they|sunt|erant|erunt|

?1

## esse is an equals sign

*Esse* doesn't take a direct object: no action passes from one person to another. Instead the words on **both sides** of *esse* refer to the same person or thing, so both are **nominative**. A noun used this way is a **predicate nominative**; an adjective is a **predicate adjective**, and it agrees with the subject.

: Puella rēgīna est. = The girl is a queen. (girl = queen)
: Rēgīna laeta est. = The queen is happy. (queen = happy)
: Nautae Graecī sunt. = The sailors are Greeks. (sailors = Greeks)

! To pick a case, use what you know: “of” points to the genitive, the direct object of an action is accusative, and X = Y is nominative.

?2

## The = sign in indirect statement

In indirect statement the subject becomes accusative. The two sides of the = still refer to the same thing, so the word after *esse* becomes accusative too.

: Nauta laetus est. = The sailor is happy.
: Videō nautam laetum esse. = I see that the sailor is happy. (nautam = laetum)
: Videō nautam agricolam esse. = I see that the sailor is a farmer. (nautam = agricolam)

The order *videō nautam esse laetum* is also correct, but *videō nautam laetum esse* is very common.

## adesse and abesse

Once you know *esse*, you know two more verbs. Add *ad-* (toward, at) or *ab-* (away from):

: adesse = to be present, be here
: abesse = to be absent, be away

|~ adesse and abesse, present
|Person|adesse|abesse|
|I|adsum|absum|
|you|ades|abes|
|he/she/it|adest|abest|
|we|adsumus|absumus|
|you all|adestis|abestis|
|they|adsunt|absunt|

The other tenses work the same way: *aderam*, *aderō*, *aberam*, *aberō*. When you split *adest* into syllables, the prefix stays whole: **ad.est**, not **a.dest**.

## There is, there are

Latin can also use *esse* to say that something exists. Putting *est* or *sunt* first introduces something new to the scene, which English says with “there is” or “there are”:

: Est casa prope silvam. = There is a house near the forest.
: Sunt casae prope silvam. = There are houses near the forest.
: Casa est prope silvam. = The house is near the forest.

The last sentence starts with a house we already know about and tells us where it is.

?3

?4`,
   q:[
    {s:"Write a sentence in Latin using the right form of esse",b:[
     {"k":"la","p":"Translate into Latin: The girls are tired.","a":["Puellae fessae sunt."],"w":"Plural subject, present: *sunt*. The adjective agrees with the subject.","g":[["puella, -ae, f.","girl"],["fessus -a -um","tired"],["esse, sum","to be"]]},
     {"k":"la","p":"Translate into Latin: I am happy.","a":["Laetus sum.","Laeta sum."],"w":"\"I\" in the present is *sum*.","g":[["laetus -a -um","happy"],["esse, sum","to be"]]},
     {"k":"la","p":"Translate into Latin: You (one person) are a student.","a":["Discipulus es.","Discipula es."],"w":"\"You\" in the present is *es*.","g":[["discipulus, -ī, m.","student"],["esse, sum","to be"]]},
     {"k":"la","p":"Translate into Latin: We were tired.","a":["Fessī erāmus.","Fessae erāmus."],"w":"\"We\" in the imperfect is *erāmus*.","g":[["fessus -a -um","tired"],["esse, sum","to be"]]},
     {"k":"la","p":"Translate into Latin: The farmer was angry.","a":["Agricola īrātus erat."],"w":"Singular subject, imperfect: *erat*. *Agricola* is masculine.","g":[["agricola, -ae, m.","farmer"],["īrātus -a -um","angry"],["esse, sum","to be"]]},
     {"k":"la","p":"Translate into Latin: The boys will be happy.","a":["Puerī laetī erunt."],"w":"Plural subject, future: *erunt*.","g":[["puer, -ī, m.","boy"],["laetus -a -um","happy"],["esse, sum","to be"]]},
     {"k":"la","p":"Translate into Latin: I will be a poet.","a":["Poēta erō."],"w":"\"I\" in the future is *erō*.","g":[["poēta, -ae, m.","poet"],["esse, sum","to be"]]},
     {"k":"la","p":"Translate into Latin: You all are friends.","a":["Amīcī estis.","Amīcae estis."],"w":"\"You all\" in the present is *estis*.","g":[["amīcus, -ī, m.","friend"],["esse, sum","to be"]]},
     {"k":"la","p":"Translate into Latin: The road is wide.","a":["Via lāta est."],"w":"Singular subject, present: *est*.","g":[["via, -ae, f.","road"],["lātus -a -um","wide"],["esse, sum","to be"]]},
     {"k":"la","p":"Translate into Latin: We will be sailors.","a":["Nautae erimus."],"w":"\"We\" in the future is *erimus*.","g":[["nauta, -ae, m.","sailor"],["esse, sum","to be"]]},
    ]},
    {s:"Translate a sentence with esse",b:[
     {"k":"en","p":"Translate into English: *Puella laeta est.*","a":["The girl is happy."],"w":"esse links the subject to a nominative word.","g":[["puella, -ae, f.","girl"],["laetus -a -um","happy"],["esse, sum","to be"]]},
     {"k":"la","p":"Translate into Latin: The farmers are tired.","a":["Agricolae fessī sunt."],"w":"esse links the subject to a nominative word.","g":[["agricola, -ae, m.","farmer"],["fessus -a -um","tired"],["esse, sum","to be"]]},
     {"k":"en","p":"Translate into English: *Nauta bonus erat.*","a":["The sailor was good."],"w":"esse links the subject to a nominative word.","g":[["nauta, -ae, m.","sailor"],["bonus -a -um","good"],["esse, sum","to be"]]},
     {"k":"la","p":"Translate into Latin: The gifts are beautiful.","a":["Dōna pulchra sunt."],"w":"esse links the subject to a nominative word.","g":[["dōnum, -ī, n.","gift"],["pulcher pulchra pulchrum","beautiful"],["esse, sum","to be"]]},
     {"k":"en","p":"Translate into English: *Rēgīna clāra erit.*","a":["The queen will be famous."],"w":"esse links the subject to a nominative word.","g":[["rēgīna, -ae, f.","queen"],["clārus -a -um","famous"],["esse, sum","to be"]]},
     {"k":"la","p":"Translate into Latin: The boys were happy.","a":["Puerī laetī erant."],"w":"esse links the subject to a nominative word.","g":[["puer, -ī, m.","boy"],["laetus -a -um","happy"],["esse, sum","to be"]]},
     {"k":"en","p":"Translate into English: *Marcus poēta est.*","a":["Marcus is a poet."],"w":"esse links the subject to a nominative word.","g":[["poēta, -ae, m.","poet"],["esse, sum","to be"]]},
     {"k":"la","p":"Translate into Latin: We are students.","a":["Discipulī sumus."],"w":"esse links the subject to a nominative word.","g":[["discipulus, -ī, m.","student"],["esse, sum","to be"]]},
     {"k":"en","p":"Translate into English: *Amīca bona est.*","a":["The friend is good."],"w":"esse links the subject to a nominative word.","g":[["amīca, -ae, f.","friend"],["bonus -a -um","good"],["esse, sum","to be"]]},
     {"k":"la","p":"Translate into Latin: The women will be angry.","a":["Fēminae īrātae erunt."],"w":"esse links the subject to a nominative word.","g":[["fēmina, -ae, f.","woman"],["īrātus -a -um","angry"],["esse, sum","to be"]]},
    ]},
    {s:"Use esse, or not?",b:[
     {"k":"mc","p":"Choose the Latin for \"The poets are working.\"","o":["*Poētae labōrant.*","*Poētae labōrant sunt.*","*Poētae sunt labōrāre.*","*Poētae labōrat.*"],"a":0,"w":"The main idea is working, so Latin uses the present tense of *labōrāre*, with no *esse*.","g":[["poēta, -ae, m.","poet"],["labōrāre, -ō","to work"],["esse, sum","to be"]]},
     {"k":"mc","p":"Choose the Latin for \"The poets are tired.\"","o":["*Poētae fessī sunt.*","*Poētae fessōs sunt.*","*Poētae fessae sunt.*","*Poētae fessī.*"],"a":0,"w":"Poets = tired, so the adjective is nominative and agrees with *poētae*, which is masculine.","g":[["poēta, -ae, m.","poet"],["fessus -a -um","tired"],["esse, sum","to be"]]},
     {"k":"mc","p":"In \"The queen is a girl,\" what case is “girl”?","o":["nominative","accusative","genitive","dative"],"a":0,"w":"Queen = girl, so both are nominative."},
     {"k":"mc","p":"In \"The sailor praises the farmer,\" what case is “farmer”?","o":["accusative","nominative","genitive","dative"],"a":0,"w":"The farmer receives the action, so he is the direct object."},
     {"k":"mc","p":"In \"The sailor is a farmer,\" what case is “farmer”?","o":["nominative","accusative","genitive","ablative"],"a":0,"w":"Sailor = farmer: a predicate nominative."},
     {"k":"mc","p":"In \"The queen summons the farmer,\" what case is “farmer”?","o":["accusative","nominative","genitive","dative"],"a":0,"w":"The farmer receives the action of summoning."},
     {"k":"mc","p":"In \"The queen of the island is happy,\" what case is “island”?","o":["genitive","nominative","accusative","ablative"],"a":0,"w":"“Of the island”: genitive."},
     {"k":"mc","p":"In \"The queen of the island is happy,\" what case is “happy”?","o":["nominative","accusative","genitive","dative"],"a":0,"w":"Queen = happy: a predicate adjective, nominative like the subject."},
     {"k":"mc","p":"Why is *fessum* accusative in *Videō puerum fessum esse*?","o":["It refers to *puerum*, the accusative subject of the indirect statement.","It is a direct object.","*Esse* always takes the accusative.","Adjectives after *videō* are accusative."],"a":0,"w":"The = sign keeps both sides in the same case, and the subject of an indirect statement is accusative.","g":[["fessus -a -um","tired"],["vidēre, -eō","to see"],["puer, -ī, m.","boy"],["esse, sum","to be"]]},
     {"k":"mc","p":"What does *Nautae aberant* mean?","o":["The sailors were absent.","The sailors were present.","The sailors were near.","The sailors will be away."],"a":0,"w":"*Ab-* means away from: *abesse* is to be away, absent.","g":[["nauta, -ae, m.","sailor"],["abesse, absum","to be away, to be absent"]]},
    ]},
    {s:"Translate esse in more ways",b:[
     {"k":"en","p":"Translate into English: *Videō puerum fessum esse.*","a":["I see that the boy is tired."],"w":"In indirect statement both sides of esse are accusative; adesse and abesse work like esse; est or sunt first means there is or there are.","g":[["vidēre, -eō","to see"],["puer, -ī, m.","boy"],["fessus -a -um","tired"],["esse, sum","to be"]]},
     {"k":"la","p":"Translate into Latin: He says that the girl is a queen.","a":["Dīcit puellam rēgīnam esse.","Dīcit puellam esse rēgīnam."],"w":"In indirect statement both sides of esse are accusative; adesse and abesse work like esse; est or sunt first means there is or there are.","g":[["dīcere, -ō","to say"],["puella, -ae, f.","girl"],["rēgīna, -ae, f.","queen"],["esse, sum","to be"]]},
     {"k":"en","p":"Translate into English: *Magister adest.*","a":["The teacher is present.","The teacher is here."],"w":"In indirect statement both sides of esse are accusative; adesse and abesse work like esse; est or sunt first means there is or there are.","g":[["magister, -trī, m.","teacher"],["adesse, adsum","to be present, to be here"]]},
     {"k":"la","p":"Translate into Latin: The students are absent.","a":["Discipulī absunt."],"w":"In indirect statement both sides of esse are accusative; adesse and abesse work like esse; est or sunt first means there is or there are.","g":[["discipulus, -ī, m.","student"],["abesse, absum","to be away, to be absent"]]},
     {"k":"en","p":"Translate into English: *Est vīlla prope agrum.*","a":["There is a farmhouse near the field."],"w":"In indirect statement both sides of esse are accusative; adesse and abesse work like esse; est or sunt first means there is or there are.","g":[["esse, sum","to be"],["vīlla, -ae, f.","farmhouse"],["prope (+acc)","near"],["ager, agrī, m.","field"]]},
     {"k":"la","p":"Translate into Latin: There are temples near the town.","a":["Sunt templa prope oppidum."],"w":"In indirect statement both sides of esse are accusative; adesse and abesse work like esse; est or sunt first means there is or there are.","g":[["esse, sum","to be"],["templum, -ī, n.","temple"],["prope (+acc)","near"],["oppidum, -ī, n.","town"]]},
     {"k":"en","p":"Translate into English: *Vīlla est prope agrum.*","a":["The farmhouse is near the field."],"w":"In indirect statement both sides of esse are accusative; adesse and abesse work like esse; est or sunt first means there is or there are.","g":[["vīlla, -ae, f.","farmhouse"],["esse, sum","to be"],["prope (+acc)","near"],["ager, agrī, m.","field"]]},
     {"k":"la","p":"Translate into Latin: He was thinking that the farmers were tired.","a":["Putābat agricolās fessōs esse.","Putābat agricolās esse fessōs."],"w":"In indirect statement both sides of esse are accusative; adesse and abesse work like esse; est or sunt first means there is or there are.","g":[["putāre, -ō","to think"],["agricola, -ae, m.","farmer"],["fessus -a -um","tired"],["esse, sum","to be"]]},
     {"k":"en","p":"Translate into English: *Aderāmus.*","a":["We were present.","We were here."],"w":"In indirect statement both sides of esse are accusative; adesse and abesse work like esse; est or sunt first means there is or there are.","g":[["adesse, adsum","to be present, to be here"]]},
     {"k":"la","p":"Translate into Latin: The sailors were Greeks.","a":["Nautae Graecī erant."],"w":"In indirect statement both sides of esse are accusative; adesse and abesse work like esse; est or sunt first means there is or there are.","g":[["nauta, -ae, m.","sailor"],["Graecus, -ī, m.","Greek"],["esse, sum","to be"]]},
    ]},
   ]},
  {id:"possum",title:"possum: to be able",blurb:"esse with a prefix, and a verb that needs an infinitive.",t:["sum"],
   body:`*Possum* means *I am able* or *I can*. It is *pot-* plus *esse*. The *t* becomes *s* before another *s*.

|~ posse, to be able
|Person|Present|Imperfect|Future|
|I|possum|poteram|poterō|
|you|potes|poterās|poteris|
|he/she/it|potest|poterat|poterit|
|we|possumus|poterāmus|poterimus|
|you all|potestis|poterātis|poteritis|
|they|possunt|poterant|poterunt|

*Possum* takes a complementary infinitive.

: Nāvigāre possumus. = We can sail.
: Vidēre poterat. = She could see.
: Venīre poterunt. = They will be able to come.

?1

?2`,
   q:[
    {s:"Choose the sentence with the right form of possum",b:[
     {"k":"mc","p":"Choose \"We can walk.\"","o":["*Ambulāre possumus.*","*Ambulāre potumus.*","*Ambulāre possimus.*","*Ambulāre poteramus.*"],"a":0,"w":"The *t* of *pot-* becomes *s* before *s*.","g":[["ambulāre, -ō","to walk"],["posse, possum","to be able, can"]]},
     {"k":"mc","p":"Choose \"They can run.\"","o":["*Currere possunt.*","*Currere potunt.*","*Currere poterunt.*","*Currere potest.*"],"a":0,"w":"The *t* of *pot-* becomes *s* before *s*.","g":[["currere, -ō","to run"],["posse, possum","to be able, can"]]},
     {"k":"mc","p":"Choose \"She can write.\"","o":["*Scrībere potest.*","*Scrībere possit.*","*Scrībere possunt.*","*Scrībere potes.*"],"a":0,"w":"*pot-* + *est*.","g":[["scrībere, -ō","to write"],["posse, possum","to be able, can"]]},
     {"k":"mc","p":"Choose \"You (one person) can stay.\"","o":["*Manēre potes.*","*Manēre posses.*","*Manēre potest.*","*Manēre possum.*"],"a":0,"w":"*pot-* + *es*.","g":[["manēre, -eō","to stay"],["posse, possum","to be able, can"]]},
     {"k":"mc","p":"Choose \"I could read.\"","o":["*Legere poteram.*","*Legere possum.*","*Legere poterō.*","*Legere potuit.*"],"a":0,"w":"*pot-* + *eram*.","g":[["legere, -ō","to read"],["posse, possum","to be able, can"]]},
     {"k":"mc","p":"Choose \"They will be able to work.\"","o":["*Labōrāre poterunt.*","*Labōrāre poterant.*","*Labōrāre possunt.*","*Labōrāre potērunt.*"],"a":0,"w":"*pot-* + *erunt*.","g":[["labōrāre, -ō","to work"],["posse, possum","to be able, can"]]},
     {"k":"mc","p":"Choose \"You all can fight.\"","o":["*Pugnāre potestis.*","*Pugnāre possetis.*","*Pugnāre potes.*","*Pugnāre possumus.*"],"a":0,"w":"*pot-* + *estis*.","g":[["pugnāre, -ō","to fight"],["posse, possum","to be able, can"]]},
     {"k":"mc","p":"Choose \"I can sail.\"","o":["*Nāvigāre possum.*","*Nāvigāre potum.*","*Nāvigāre potes.*","*Nāvigāre poterō.*"],"a":0,"w":"The *t* of *pot-* becomes *s* before *s*.","g":[["nāvigāre, -ō","to sail"],["posse, possum","to be able, can"]]},
     {"k":"mc","p":"In *Puella legere potest*, what does *legere* do?","o":["It completes the main verb","It is the subject","It is a direct object","It names a place"],"a":0,"w":"A form of *possum* takes a complementary infinitive.","g":[["puella, -ae, f.","girl"],["legere, -ō","to read"],["posse, possum","to be able, can"]]},
     {"k":"mc","p":"Choose \"We could sleep.\"","o":["*Dormīre poterāmus.*","*Dormīre possumus.*","*Dormīre poterimus.*","*Dormīre poteramur.*"],"a":0,"w":"*pot-* + *erāmus*.","g":[["dormīre, -iō","to sleep"],["posse, possum","to be able, can"]]},
    ]},
    {s:"Translate a sentence with possum",b:[
     {"k":"en","p":"Translate into English: *Currere possumus.*","a":["We can run.","We are able to run."],"w":"possum is translated can or be able, with an infinitive.","g":[["currere, -ō","to run"],["posse, possum","to be able, can"]]},
     {"k":"la","p":"Translate into Latin: He could hear.","a":["Audīre poterat."],"w":"possum is translated can or be able, with an infinitive.","g":[["audīre, -iō","to hear"],["posse, possum","to be able, can"]]},
     {"k":"en","p":"Translate into English: *Manēre poterunt.*","a":["They will be able to stay."],"w":"possum is translated can or be able, with an infinitive.","g":[["manēre, -eō","to stay"],["posse, possum","to be able, can"]]},
     {"k":"la","p":"Translate into Latin: The girl can write.","a":["Puella scrībere potest."],"w":"possum is translated can or be able, with an infinitive.","g":[["puella, -ae, f.","girl"],["scrībere, -ō","to write"],["posse, possum","to be able, can"]]},
     {"k":"en","p":"Translate into English: *Nautae pugnāre possunt.*","a":["The sailors can fight.","The sailors are able to fight."],"w":"possum is translated can or be able, with an infinitive.","g":[["nauta, -ae, m.","sailor"],["pugnāre, -ō","to fight"],["posse, possum","to be able, can"]]},
     {"k":"la","p":"Translate into Latin: I cannot run.","a":["Currere nōn possum."],"w":"possum is translated can or be able, with an infinitive.","g":[["currere, -ō","to run"],["nōn","not"],["posse, possum","to be able, can"]]},
     {"k":"en","p":"Translate into English: *Legere potes.*","a":["You can read.","You are able to read."],"w":"possum is translated can or be able, with an infinitive.","g":[["legere, -ō","to read"],["posse, possum","to be able, can"]]},
     {"k":"la","p":"Translate into Latin: The farmer could work.","a":["Agricola labōrāre poterat."],"w":"possum is translated can or be able, with an infinitive.","g":[["agricola, -ae, m.","farmer"],["labōrāre, -ō","to work"],["posse, possum","to be able, can"]]},
     {"k":"en","p":"Translate into English: *Dormīre poterimus.*","a":["We will be able to sleep."],"w":"possum is translated can or be able, with an infinitive.","g":[["dormīre, -iō","to sleep"],["posse, possum","to be able, can"]]},
     {"k":"la","p":"Translate into Latin: The boys can hear.","a":["Puerī audīre possunt."],"w":"possum is translated can or be able, with an infinitive.","g":[["puer, -ī, m.","boy"],["audīre, -iō","to hear"],["posse, possum","to be able, can"]]},
    ]},
   ]},
  {id:"perfect",title:"The perfect active",blurb:"What happened and is finished.",t:["perf"],
   body:`The **perfect** tells about a completed action. It has its own stem, so dictionaries give it as the third principal part.

: laudō, laudāre, laudāvī = praise
: dūcō, dūcere, dūxī = lead
: capiō, capere, cēpī = take

Drop the *-ī* from that part to find the perfect stem, then add the perfect endings.

|~ Perfect active endings
|Person|Singular|Plural|
|1st|-ī|-imus|
|2nd|-istī|-istis|
|3rd|-it|-ērunt|

: laudāvī = I praised, I have praised
: dūxit = he led, he has led
: cēpērunt = they took, they have taken

Perfect stems often can't be guessed, so learn them with each verb. *Videō, vidēre, vīdī* and *mittō, mittere, mīsī* are examples.

?1

?2

?3`,
   q:[
    {s:"Identify the person and number of a perfect active verb",b:[
     {"k":"mc","p":"What person and number is *amāvī*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":0,"w":"The ending of *amāvī* means I, so it is 1st person singular.","g":[["amāre, -ō","to love"]]},
     {"k":"mc","p":"What person and number is *docuimus*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":3,"w":"The ending of *docuimus* means we, so it is 1st person plural.","g":[["docēre, -eō","to teach"]]},
     {"k":"mc","p":"What person and number is *rēxērunt*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":5,"w":"The ending of *rēxērunt* means they, so it is 3rd person plural.","g":[["regere, -ō","to rule"]]},
     {"k":"mc","p":"What person and number is *iēcistī*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":1,"w":"The ending of *iēcistī* means you (one person), so it is 2nd person singular.","g":[["iacere, -iō","to throw"]]},
     {"k":"mc","p":"What person and number is *custōdīvistis*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":4,"w":"The ending of *custōdīvistis* means you (more than one person), so it is 2nd person plural.","g":[["custōdīre, -iō","to guard"]]},
     {"k":"mc","p":"What person and number is *tenuit*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":2,"w":"The ending of *tenuit* means he, she or it, so it is 3rd person singular.","g":[["tenēre, -eō","to hold"]]},
     {"k":"mc","p":"What person and number is *scrīpsimus*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":3,"w":"The ending of *scrīpsimus* means we, so it is 1st person plural.","g":[["scrībere, -ō","to write"]]},
     {"k":"mc","p":"What person and number is *vocāvistī*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":1,"w":"The ending of *vocāvistī* means you (one person), so it is 2nd person singular.","g":[["vocāre, -ō","to call"]]},
     {"k":"mc","p":"What person and number is *vīcērunt*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":5,"w":"The ending of *vīcērunt* means they, so it is 3rd person plural.","g":[["vincere, -ō","to conquer"]]},
     {"k":"mc","p":"What person and number is *pūnīvī*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":0,"w":"The ending of *pūnīvī* means I, so it is 1st person singular.","g":[["pūnīre, -iō","to punish"]]},
    ]},
    {s:"Translate a perfect active verb into English",b:[
     {"k":"en","p":"Translate into English: *amāvit*","a":["he loved","he has loved","he did love","she loved","she has loved","she did love","it loved","it has loved","it did love"],"w":"*amāvit* is 3rd person singular, so it means “he loved.”","g":[["amāre, -ō","to love"]]},
     {"k":"en","p":"Translate into English: *docuērunt*","a":["they taught","they have taught","they did teach"],"w":"*docuērunt* is 3rd person plural, so it means “they taught.”","g":[["docēre, -eō","to teach"]]},
     {"k":"en","p":"Translate into English: *rēxī*","a":["I ruled","I have ruled","I did rule"],"w":"*rēxī* is 1st person singular, so it means “I ruled.”","g":[["regere, -ō","to rule"]]},
     {"k":"en","p":"Translate into English: *iēcimus*","a":["we threw","we have thrown","we did throw"],"w":"*iēcimus* is 1st person plural, so it means “we threw.”","g":[["iacere, -iō","to throw"]]},
     {"k":"en","p":"Translate into English: *custōdīvistī*","a":["you guarded","you have guarded","you did guard"],"w":"*custōdīvistī* is 2nd person singular, so it means “you guarded.”","g":[["custōdīre, -iō","to guard"]]},
     {"k":"en","p":"Translate into English: *tenuistis*","a":["you held","you have held","you did hold"],"w":"*tenuistis* is 2nd person plural, so it means “you held.”","g":[["tenēre, -eō","to hold"]]},
     {"k":"en","p":"Translate into English: *scrīpsērunt*","a":["they wrote","they have written","they did write"],"w":"*scrīpsērunt* is 3rd person plural, so it means “they wrote.”","g":[["scrībere, -ō","to write"]]},
     {"k":"en","p":"Translate into English: *vocāvit*","a":["he called","he has called","he did call","she called","she has called","she did call","it called","it has called","it did call"],"w":"*vocāvit* is 3rd person singular, so it means “he called.”","g":[["vocāre, -ō","to call"]]},
     {"k":"en","p":"Translate into English: *vīcimus*","a":["we conquered","we have conquered","we did conquer"],"w":"*vīcimus* is 1st person plural, so it means “we conquered.”","g":[["vincere, -ō","to conquer"]]},
     {"k":"en","p":"Translate into English: *pūnīvī*","a":["I punished","I have punished","I did punish"],"w":"*pūnīvī* is 1st person singular, so it means “I punished.”","g":[["pūnīre, -iō","to punish"]]},
    ]},
    {s:"Write a perfect active verb in Latin",b:[
     {"k":"la","p":"Write in Latin: we loved","a":["amāvimus"],"w":"The 1st person plural form is *amāvimus*.","g":[["amāre, -ō","to love"]]},
     {"k":"la","p":"Write in Latin: I taught","a":["docuī"],"w":"The 1st person singular form is *docuī*.","g":[["docēre, -eō","to teach"]]},
     {"k":"la","p":"Write in Latin: he ruled","a":["rēxit"],"w":"The 3rd person singular form is *rēxit*.","g":[["regere, -ō","to rule"]]},
     {"k":"la","p":"Write in Latin: they threw","a":["iēcērunt"],"w":"The 3rd person plural form is *iēcērunt*.","g":[["iacere, -iō","to throw"]]},
     {"k":"la","p":"Write in Latin: you all guarded","a":["custōdīvistis"],"w":"The 2nd person plural form is *custōdīvistis*.","g":[["custōdīre, -iō","to guard"]]},
     {"k":"la","p":"Write in Latin: you (one person) held","a":["tenuistī"],"w":"The 2nd person singular form is *tenuistī*.","g":[["tenēre, -eō","to hold"]]},
     {"k":"la","p":"Write in Latin: I wrote","a":["scrīpsī"],"w":"The 1st person singular form is *scrīpsī*.","g":[["scrībere, -ō","to write"]]},
     {"k":"la","p":"Write in Latin: they called","a":["vocāvērunt"],"w":"The 3rd person plural form is *vocāvērunt*.","g":[["vocāre, -ō","to call"]]},
     {"k":"la","p":"Write in Latin: he conquered","a":["vīcit"],"w":"The 3rd person singular form is *vīcit*.","g":[["vincere, -ō","to conquer"]]},
     {"k":"la","p":"Write in Latin: we punished","a":["pūnīvimus"],"w":"The 1st person plural form is *pūnīvimus*.","g":[["pūnīre, -iō","to punish"]]},
    ]},
   ]},
  {id:"decl3",title:"The 3rd declension",blurb:"A new noun group with a stem you find in the genitive.",t:["d3"],
   body:`The **3rd declension** has masculine, feminine and neuter nouns. You can't predict the stem from the nominative, so always use the genitive: drop *-is* to find the stem.

: rēx, rēgis, m. = king (stem rēg-)
: mīles, mīlitis, m. = soldier (stem mīlit-)
: māter, mātris, f. = mother (stem mātr-)
: corpus, corporis, n. = body (stem corpor-)

|~ 3rd declension endings
|Case|M/F sg.|M/F pl.|Neuter sg.|Neuter pl.|
|Nominative|(varies)|-ēs|(varies)|-a|
|Accusative|-em|-ēs|same as nom.|-a|
|Dative|-ī|-ibus|-ī|-ibus|
|Ablative|-e|-ibus|-e|-ibus|
|Genitive|-is|-um|-is|-um|

Some nouns, called **i-stems**, have *-ium* in the genitive plural, such as *hostium* (of the enemies), *cīvium* (of the citizens) and *urbium* (of the cities). Neuters such as *mare* use *-ia*: *maria*, seas.

?1

?2`,
   q:[
    {s:"Write a named case and number of a 3rd declension noun",b:[
     {"k":"la","p":"Write the accusative singular of *rēx*.","a":["rēgem"],"w":"The accusative singular of *rēx* is *rēgem*.","g":[["rēx, rēgis, m.","king"]]},
     {"k":"la","p":"Write the nominative plural of *mīles*.","a":["mīlitēs"],"w":"The nominative plural of *mīles* is *mīlitēs*.","g":[["mīles, mīlitis, m.","soldier"]]},
     {"k":"la","p":"Write the dative singular of *pater*.","a":["patrī"],"w":"The dative singular of *pater* is *patrī*.","g":[["pater, patris, m.","father"]]},
     {"k":"la","p":"Write the ablative singular of *māter*.","a":["mātre"],"w":"The ablative singular of *māter* is *mātre*.","g":[["māter, mātris, f.","mother"]]},
     {"k":"la","p":"Write the accusative plural of *frāter*.","a":["frātrēs"],"w":"The accusative plural of *frāter* is *frātrēs*.","g":[["frāter, frātris, m.","brother"]]},
     {"k":"la","p":"Write the nominative plural of *corpus*.","a":["corpora"],"w":"The nominative plural of *corpus* is *corpora*.","g":[["corpus, corporis, n.","body"]]},
     {"k":"la","p":"Write the genitive singular of *dux*.","a":["ducis"],"w":"The genitive singular of *dux* is *ducis*.","g":[["dux, ducis, m.","leader"]]},
     {"k":"la","p":"Write the dative plural of *soror*.","a":["sorōribus"],"w":"The dative plural of *soror* is *sorōribus*.","g":[["soror, sorōris, f.","sister"]]},
     {"k":"la","p":"Write the accusative plural of *flūmen*.","a":["flūmina"],"w":"The accusative plural of *flūmen* is *flūmina*.","g":[["flūmen, flūminis, n.","river"]]},
     {"k":"la","p":"Write the genitive plural of *rēx*.","a":["rēgum"],"w":"The genitive plural of *rēx* is *rēgum*.","g":[["rēx, rēgis, m.","king"]]},
    ]},
    {s:"Translate a sentence with 3rd declension nouns",b:[
     {"k":"en","p":"Translate into English: *Rēx mīlitēs laudat.*","a":["The king praises the soldiers.","The king is praising the soldiers.","The king does praise the soldiers."],"w":"Find the stem from the genitive, then read the ending for the case.","g":[["rēx, rēgis, m.","king"],["mīles, mīlitis, m.","soldier"],["laudāre, -ō","to praise"]]},
     {"k":"la","p":"Translate into Latin: The mother calls the daughter.","a":["Māter fīliam vocat."],"w":"Find the stem from the genitive, then read the ending for the case.","g":[["māter, mātris, f.","mother"],["fīlia, -ae, f.","daughter"],["vocāre, -ō","to call"]]},
     {"k":"en","p":"Translate into English: *Pater fīliō librum dat.*","a":["The father gives the son a book.","The father gives a book to the son.","The father is giving the son a book.","The father is giving a book to the son.","The father does give the son a book.","The father does give a book to the son."],"w":"Find the stem from the genitive, then read the ending for the case.","g":[["pater, patris, m.","father"],["fīlius, -ī, m.","son"],["liber, librī, m.","book"],["dare, dō","to give"]]},
     {"k":"la","p":"Translate into Latin: The soldiers hear the leader.","a":["Mīlitēs ducem audiunt."],"w":"Find the stem from the genitive, then read the ending for the case.","g":[["mīles, mīlitis, m.","soldier"],["dux, ducis, m.","leader"],["audīre, -iō","to hear"]]},
     {"k":"en","p":"Translate into English: *Soror frātrem videt.*","a":["The sister sees the brother.","The sister is seeing the brother.","The sister does see the brother."],"w":"Find the stem from the genitive, then read the ending for the case.","g":[["soror, sorōris, f.","sister"],["frāter, frātris, m.","brother"],["vidēre, -eō","to see"]]},
     {"k":"la","p":"Translate into Latin: The kings defend the town.","a":["Rēgēs oppidum dēfendunt."],"w":"Find the stem from the genitive, then read the ending for the case.","g":[["rēx, rēgis, m.","king"],["oppidum, -ī, n.","town"],["dēfendere, -ō","to defend"]]},
     {"k":"en","p":"Translate into English: *Dux cum mīlitibus venit.*","a":["The leader comes with the soldiers.","The leader is coming with the soldiers.","The leader does come with the soldiers."],"w":"Find the stem from the genitive, then read the ending for the case.","g":[["dux, ducis, m.","leader"],["cum (+abl)","with"],["mīles, mīlitis, m.","soldier"],["venīre, -iō","to come"]]},
     {"k":"la","p":"Translate into Latin: The brother gives the sister a rose.","a":["Frāter sorōrī rosam dat."],"w":"Find the stem from the genitive, then read the ending for the case.","g":[["frāter, frātris, m.","brother"],["soror, sorōris, f.","sister"],["rosa, -ae, f.","rose"],["dare, dō","to give"]]},
     {"k":"en","p":"Translate into English: *Corpus virī portant.*","a":["They carry the body of the man.","They are carrying the body of the man.","They do carry the body of the man."],"w":"Find the stem from the genitive, then read the ending for the case.","g":[["corpus, corporis, n.","body"],["vir, -ī, m.","man"],["portāre, -ō","to carry"]]},
     {"k":"la","p":"Translate into Latin: The mothers work for the sons.","a":["Mātrēs fīliīs labōrant."],"w":"Find the stem from the genitive, then read the ending for the case.","g":[["māter, mātris, f.","mother"],["fīlius, -ī, m.","son"],["labōrāre, -ō","to work"]]},
    ]},
   ]},
  {id:"pronouns",title:"Personal pronouns",blurb:"I, you, we and you all, in every case.",t:["pron"],
   body:`Personal pronouns stand in for people. Latin only uses them in the nominative for emphasis, since the verb ending already shows the subject.

|~ Personal pronouns
|Case|I|you|we|you all|
|Nominative|ego|tū|nōs|vōs|
|Accusative|mē|tē|nōs|vōs|
|Dative|mihi|tibi|nōbīs|vōbīs|
|Ablative|mē|tē|nōbīs|vōbīs|
|Genitive|meī|tuī|nostrum, nostrī|vestrum, vestrī|

: Ego labōrō, tū dormīs. = I am working, you are sleeping.
: Mē videt. = He sees me.
: Tibi dōnum dō. = I give a gift to you.

*Cum* attaches to the end of these pronouns.

: mēcum = with me
: tēcum = with you
: nōbīscum = with us
: vōbīscum = with you all

?1

?2`,
   q:[
    {s:"Write a Latin sentence using the right personal pronoun",b:[
     {"k":"la","p":"Translate into Latin: The girl sees me.","a":["Puella mē videt."],"w":"\"Me\" as a direct object is *mē*.","g":[["puella, -ae, f.","girl"],["ego","I, me"],["vidēre, -eō","to see"]]},
     {"k":"la","p":"Translate into Latin: The sailor gives a rose to you (one person).","a":["Nauta tibi rosam dat."],"w":"\"To you\" is the dative *tibi*.","g":[["nauta, -ae, m.","sailor"],["tū","you (one person)"],["rosa, -ae, f.","rose"],["dare, dō","to give"]]},
     {"k":"la","p":"Translate into Latin: The teacher tells a story to me.","a":["Magister mihi fābulam narrat."],"w":"\"To me\" is the dative *mihi*.","g":[["magister, -trī, m.","teacher"],["ego","I, me"],["fābula, -ae, f.","story"],["narrāre, -ō","to tell"]]},
     {"k":"la","p":"Translate into Latin: The boy walks with me.","a":["Puer mēcum ambulat."],"w":"*cum* attaches to the end of *mē*.","g":[["puer, -ī, m.","boy"],["ego","I, me"],["cum (+abl)","with"],["ambulāre, -ō","to walk"]]},
     {"k":"la","p":"Translate into Latin: The farmers work with us.","a":["Agricolae nōbīscum labōrant."],"w":"*cum* attaches to the end of *nōbīs*.","g":[["agricola, -ae, m.","farmer"],["nōs","we, us"],["cum (+abl)","with"],["labōrāre, -ō","to work"]]},
     {"k":"la","p":"Translate into Latin: The queen calls you (one person).","a":["Rēgīna tē vocat."],"w":"\"You\" as a direct object is *tē*.","g":[["rēgīna, -ae, f.","queen"],["tū","you (one person)"],["vocāre, -ō","to call"]]},
     {"k":"la","p":"Translate into Latin: The friend gives a gift to us.","a":["Amīcus nōbīs dōnum dat."],"w":"\"To us\" is the dative *nōbīs*.","g":[["amīcus, -ī, m.","friend"],["nōs","we, us"],["dōnum, -ī, n.","gift"],["dare, dō","to give"]]},
     {"k":"la","p":"Translate into Latin: The sailors sail with you all.","a":["Nautae vōbīscum nāvigant."],"w":"*cum* attaches to the end of *vōbīs*.","g":[["nauta, -ae, m.","sailor"],["vōs","you (more than one person)"],["cum (+abl)","with"],["nāvigāre, -ō","to sail"]]},
     {"k":"la","p":"Translate into Latin: The master warns us.","a":["Dominus nōs monet."],"w":"\"Us\" as a direct object is *nōs*.","g":[["dominus, -ī, m.","master"],["nōs","we, us"],["monēre, -eō","to warn"]]},
     {"k":"la","p":"Translate into Latin: The woman shows the money to you all.","a":["Fēmina vōbīs pecūniam mōnstrat."],"w":"\"To you all\" is the dative *vōbīs*.","g":[["fēmina, -ae, f.","woman"],["vōs","you (more than one person)"],["pecūnia, -ae, f.","money"],["mōnstrāre, -ō","to show"]]},
    ]},
    {s:"Translate a sentence with a personal pronoun",b:[
     {"k":"en","p":"Translate into English: *Mē vocat.*","a":["He calls me.","He is calling me.","He does call me.","She calls me.","She is calling me.","She does call me."],"w":"Pronouns use case endings of their own. Nominative pronouns add emphasis.","g":[["ego","I, me"],["vocāre, -ō","to call"]]},
     {"k":"la","p":"Translate into Latin: I give you a rose.","a":["Tibi rosam dō."],"w":"Pronouns use case endings of their own. Nominative pronouns add emphasis.","g":[["tū","you (one person)"],["rosa, -ae, f.","rose"],["dare, dō","to give"]]},
     {"k":"en","p":"Translate into English: *Ego ambulō, tū curris.*","a":["I walk, you run.","I walk, you are running.","I walk, you do run.","I am walking, you run.","I am walking, you are running.","I am walking, you do run.","I do walk, you run.","I do walk, you are running.","I do walk, you do run."],"w":"Pronouns use case endings of their own. Nominative pronouns add emphasis.","g":[["ego","I, me"],["ambulāre, -ō","to walk"],["tū","you (one person)"],["currere, -ō","to run"]]},
     {"k":"la","p":"Translate into Latin: They call us.","a":["Nōs vocant."],"w":"Pronouns use case endings of their own. Nominative pronouns add emphasis.","g":[["nōs","we, us"],["vocāre, -ō","to call"]]},
     {"k":"en","p":"Translate into English: *Mēcum ambulat.*","a":["He walks with me.","He is walking with me.","He does walk with me.","She walks with me.","She is walking with me.","She does walk with me."],"w":"Pronouns use case endings of their own. Nominative pronouns add emphasis.","g":[["ego","I, me"],["cum (+abl)","with"],["ambulāre, -ō","to walk"]]},
     {"k":"la","p":"Translate into Latin: We praise you.","a":["Tē laudāmus."],"w":"Pronouns use case endings of their own. Nominative pronouns add emphasis.","g":[["tū","you (one person)"],["laudāre, -ō","to praise"]]},
     {"k":"en","p":"Translate into English: *Nōbīs fābulam narrat.*","a":["He tells us a story.","He tells a story to us.","He is telling us a story.","He is telling a story to us.","He does tell us a story.","He does tell a story to us.","She tells us a story.","She tells a story to us.","She is telling us a story.","She is telling a story to us.","She does tell us a story.","She does tell a story to us."],"w":"Pronouns use case endings of their own. Nominative pronouns add emphasis.","g":[["nōs","we, us"],["fābula, -ae, f.","story"],["narrāre, -ō","to tell"]]},
     {"k":"la","p":"Translate into Latin: I sail with you.","a":["Vōbīscum nāvigō."],"w":"Pronouns use case endings of their own. Nominative pronouns add emphasis.","g":[["vōs","you (more than one person)"],["cum (+abl)","with"],["nāvigāre, -ō","to sail"]]},
     {"k":"en","p":"Translate into English: *Mihi epistulam scrībit.*","a":["He writes me a letter.","He writes a letter to me.","He is writing me a letter.","He is writing a letter to me.","He does write me a letter.","He does write a letter to me.","She writes me a letter.","She writes a letter to me.","She is writing me a letter.","She is writing a letter to me.","She does write me a letter.","She does write a letter to me."],"w":"Pronouns use case endings of their own. Nominative pronouns add emphasis.","g":[["ego","I, me"],["epistula, -ae, f.","letter"],["scrībere, -ō","to write"]]},
     {"k":"la","p":"Translate into Latin: We warn you.","a":["Vōs monēmus."],"w":"Pronouns use case endings of their own. Nominative pronouns add emphasis.","g":[["vōs","you (more than one person)"],["monēre, -eō","to warn"]]},
    ]},
   ]},
 ]},
]}]
};
