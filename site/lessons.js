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
     {"k":"mc","p":"What person and number is *laudō*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":0,"w":"The ending of *laudō* means I, so it is 1st person singular."},
     {"k":"mc","p":"What person and number is *portāmus*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":3,"w":"The ending of *portāmus* means we, so it is 1st person plural."},
     {"k":"mc","p":"What person and number is *vocant*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":5,"w":"The ending of *vocant* means they, so it is 3rd person plural."},
     {"k":"mc","p":"What person and number is *spectās*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":1,"w":"The ending of *spectās* means you (one person), so it is 2nd person singular."},
     {"k":"mc","p":"What person and number is *amātis*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":4,"w":"The ending of *amātis* means you (more than one person), so it is 2nd person plural."},
     {"k":"mc","p":"What person and number is *servat*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":2,"w":"The ending of *servat* means he, she or it, so it is 3rd person singular."},
     {"k":"mc","p":"What person and number is *superāmus*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":3,"w":"The ending of *superāmus* means we, so it is 1st person plural."},
     {"k":"mc","p":"What person and number is *parās*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":1,"w":"The ending of *parās* means you (one person), so it is 2nd person singular."},
     {"k":"mc","p":"What person and number is *laudant*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":5,"w":"The ending of *laudant* means they, so it is 3rd person plural."},
     {"k":"mc","p":"What person and number is *portō*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":0,"w":"The ending of *portō* means I, so it is 1st person singular."},
    ]},
    {s:"Translate a 1st conjugation present verb into English",b:[
     {"k":"en","p":"Translate into English: *laudat*","a":["he praises","he is praising","he does praise","she praises","she is praising","she does praise","it praises","it is praising","it does praise"],"w":"*laudat* is 3rd person singular, so it means “he praises.”"},
     {"k":"en","p":"Translate into English: *portant*","a":["they carry","they are carrying","they do carry"],"w":"*portant* is 3rd person plural, so it means “they carry.”"},
     {"k":"en","p":"Translate into English: *vocō*","a":["I call","I am calling","I do call"],"w":"*vocō* is 1st person singular, so it means “I call.”"},
     {"k":"en","p":"Translate into English: *spectāmus*","a":["we watch","we are watching","we do watch"],"w":"*spectāmus* is 1st person plural, so it means “we watch.”"},
     {"k":"en","p":"Translate into English: *amās*","a":["you love","you are loving","you do love"],"w":"*amās* is 2nd person singular, so it means “you love.”"},
     {"k":"en","p":"Translate into English: *servātis*","a":["you save","you are saving","you do save"],"w":"*servātis* is 2nd person plural, so it means “you save.”"},
     {"k":"en","p":"Translate into English: *superant*","a":["they defeat","they are defeating","they do defeat"],"w":"*superant* is 3rd person plural, so it means “they defeat.”"},
     {"k":"en","p":"Translate into English: *parat*","a":["he prepares","he is preparing","he does prepare","she prepares","she is preparing","she does prepare","it prepares","it is preparing","it does prepare"],"w":"*parat* is 3rd person singular, so it means “he prepares.”"},
     {"k":"en","p":"Translate into English: *laudāmus*","a":["we praise","we are praising","we do praise"],"w":"*laudāmus* is 1st person plural, so it means “we praise.”"},
     {"k":"en","p":"Translate into English: *portō*","a":["I carry","I am carrying","I do carry"],"w":"*portō* is 1st person singular, so it means “I carry.”"},
    ]},
    {s:"Write a 1st conjugation present verb in Latin from English",b:[
     {"k":"la","p":"Write in Latin: we praise","a":["laudāmus"],"w":"The 1st person plural form is *laudāmus*."},
     {"k":"la","p":"Write in Latin: I carry","a":["portō"],"w":"The 1st person singular form is *portō*."},
     {"k":"la","p":"Write in Latin: he calls","a":["vocat"],"w":"The 3rd person singular form is *vocat*."},
     {"k":"la","p":"Write in Latin: they watch","a":["spectant"],"w":"The 3rd person plural form is *spectant*."},
     {"k":"la","p":"Write in Latin: you all love","a":["amātis"],"w":"The 2nd person plural form is *amātis*."},
     {"k":"la","p":"Write in Latin: you (one person) save","a":["servās"],"w":"The 2nd person singular form is *servās*."},
     {"k":"la","p":"Write in Latin: I defeat","a":["superō"],"w":"The 1st person singular form is *superō*."},
     {"k":"la","p":"Write in Latin: they prepare","a":["parant"],"w":"The 3rd person plural form is *parant*."},
     {"k":"la","p":"Write in Latin: he praises","a":["laudat"],"w":"The 3rd person singular form is *laudat*."},
     {"k":"la","p":"Write in Latin: we carry","a":["portāmus"],"w":"The 1st person plural form is *portāmus*."},
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
     {"k":"mc","p":"What person and number is *videō*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":0,"w":"The ending of *videō* means I, so it is 1st person singular."},
     {"k":"mc","p":"What person and number is *monēmus*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":3,"w":"The ending of *monēmus* means we, so it is 1st person plural."},
     {"k":"mc","p":"What person and number is *tenent*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":5,"w":"The ending of *tenent* means they, so it is 3rd person plural."},
     {"k":"mc","p":"What person and number is *terrēs*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":1,"w":"The ending of *terrēs* means you (one person), so it is 2nd person singular."},
     {"k":"mc","p":"What person and number is *docētis*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":4,"w":"The ending of *docētis* means you (more than one person), so it is 2nd person plural."},
     {"k":"mc","p":"What person and number is *dēlet*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":2,"w":"The ending of *dēlet* means he, she or it, so it is 3rd person singular."},
     {"k":"mc","p":"What person and number is *timēmus*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":3,"w":"The ending of *timēmus* means we, so it is 1st person plural."},
     {"k":"mc","p":"What person and number is *manēs*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":1,"w":"The ending of *manēs* means you (one person), so it is 2nd person singular."},
     {"k":"mc","p":"What person and number is *sedent*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":5,"w":"The ending of *sedent* means they, so it is 3rd person plural."},
     {"k":"mc","p":"What person and number is *prohibeō*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":0,"w":"The ending of *prohibeō* means I, so it is 1st person singular."},
    ]},
    {s:"Translate a 2nd conjugation present verb into English",b:[
     {"k":"en","p":"Translate into English: *videt*","a":["he sees","he is seeing","he does see","she sees","she is seeing","she does see","it sees","it is seeing","it does see"],"w":"*videt* is 3rd person singular, so it means “he sees.”"},
     {"k":"en","p":"Translate into English: *monent*","a":["they warn","they are warning","they do warn"],"w":"*monent* is 3rd person plural, so it means “they warn.”"},
     {"k":"en","p":"Translate into English: *teneō*","a":["I hold","I am holding","I do hold"],"w":"*teneō* is 1st person singular, so it means “I hold.”"},
     {"k":"en","p":"Translate into English: *terrēmus*","a":["we frighten","we are frightening","we do frighten"],"w":"*terrēmus* is 1st person plural, so it means “we frighten.”"},
     {"k":"en","p":"Translate into English: *docēs*","a":["you teach","you are teaching","you do teach"],"w":"*docēs* is 2nd person singular, so it means “you teach.”"},
     {"k":"en","p":"Translate into English: *dēlētis*","a":["you destroy","you are destroying","you do destroy"],"w":"*dēlētis* is 2nd person plural, so it means “you destroy.”"},
     {"k":"en","p":"Translate into English: *timent*","a":["they fear","they are fearing","they do fear"],"w":"*timent* is 3rd person plural, so it means “they fear.”"},
     {"k":"en","p":"Translate into English: *manet*","a":["he stays","he is staying","he does stay","she stays","she is staying","she does stay","it stays","it is staying","it does stay"],"w":"*manet* is 3rd person singular, so it means “he stays.”"},
     {"k":"en","p":"Translate into English: *sedēmus*","a":["we sit","we are sitting","we do sit"],"w":"*sedēmus* is 1st person plural, so it means “we sit.”"},
     {"k":"en","p":"Translate into English: *prohibeō*","a":["I keep","I am keeping","I do keep"],"w":"*prohibeō* is 1st person singular, so it means “I keep.”"},
    ]},
    {s:"Write a 2nd conjugation present verb in Latin from English",b:[
     {"k":"la","p":"Write in Latin: we see","a":["vidēmus"],"w":"The 1st person plural form is *vidēmus*."},
     {"k":"la","p":"Write in Latin: I warn","a":["moneō"],"w":"The 1st person singular form is *moneō*."},
     {"k":"la","p":"Write in Latin: he holds","a":["tenet"],"w":"The 3rd person singular form is *tenet*."},
     {"k":"la","p":"Write in Latin: they frighten","a":["terrent"],"w":"The 3rd person plural form is *terrent*."},
     {"k":"la","p":"Write in Latin: you all teach","a":["docētis"],"w":"The 2nd person plural form is *docētis*."},
     {"k":"la","p":"Write in Latin: you (one person) destroy","a":["dēlēs"],"w":"The 2nd person singular form is *dēlēs*."},
     {"k":"la","p":"Write in Latin: I fear","a":["timeō"],"w":"The 1st person singular form is *timeō*."},
     {"k":"la","p":"Write in Latin: they stay","a":["manent"],"w":"The 3rd person plural form is *manent*."},
     {"k":"la","p":"Write in Latin: he sits","a":["sedet"],"w":"The 3rd person singular form is *sedet*."},
     {"k":"la","p":"Write in Latin: we keep","a":["prohibēmus"],"w":"The 1st person plural form is *prohibēmus*."},
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
     {"k":"mc","p":"What person and number is *dūcō*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":0,"w":"The ending of *dūcō* means I, so it is 1st person singular."},
     {"k":"mc","p":"What person and number is *mittimus*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":3,"w":"The ending of *mittimus* means we, so it is 1st person plural."},
     {"k":"mc","p":"What person and number is *scrībunt*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":5,"w":"The ending of *scrībunt* means they, so it is 3rd person plural."},
     {"k":"mc","p":"What person and number is *legis*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":1,"w":"The ending of *legis* means you (one person), so it is 2nd person singular."},
     {"k":"mc","p":"What person and number is *vincitis*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":4,"w":"The ending of *vincitis* means you (more than one person), so it is 2nd person plural."},
     {"k":"mc","p":"What person and number is *dēfendit*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":2,"w":"The ending of *dēfendit* means he, she or it, so it is 3rd person singular."},
     {"k":"mc","p":"What person and number is *regimus*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":3,"w":"The ending of *regimus* means we, so it is 1st person plural."},
     {"k":"mc","p":"What person and number is *relinquis*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":1,"w":"The ending of *relinquis* means you (one person), so it is 2nd person singular."},
     {"k":"mc","p":"What person and number is *dūcunt*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":5,"w":"The ending of *dūcunt* means they, so it is 3rd person plural."},
     {"k":"mc","p":"What person and number is *mittō*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":0,"w":"The ending of *mittō* means I, so it is 1st person singular."},
    ]},
    {s:"Translate a 3rd conjugation present verb into English",b:[
     {"k":"en","p":"Translate into English: *dūcit*","a":["he leads","he is leading","he does lead","she leads","she is leading","she does lead","it leads","it is leading","it does lead"],"w":"*dūcit* is 3rd person singular, so it means “he leads.”"},
     {"k":"en","p":"Translate into English: *mittunt*","a":["they send","they are sending","they do send"],"w":"*mittunt* is 3rd person plural, so it means “they send.”"},
     {"k":"en","p":"Translate into English: *scrībō*","a":["I write","I am writing","I do write"],"w":"*scrībō* is 1st person singular, so it means “I write.”"},
     {"k":"en","p":"Translate into English: *legimus*","a":["we read","we are reading","we do read"],"w":"*legimus* is 1st person plural, so it means “we read.”"},
     {"k":"en","p":"Translate into English: *vincis*","a":["you conquer","you are conquering","you do conquer"],"w":"*vincis* is 2nd person singular, so it means “you conquer.”"},
     {"k":"en","p":"Translate into English: *dēfenditis*","a":["you defend","you are defending","you do defend"],"w":"*dēfenditis* is 2nd person plural, so it means “you defend.”"},
     {"k":"en","p":"Translate into English: *regunt*","a":["they rule","they are ruling","they do rule"],"w":"*regunt* is 3rd person plural, so it means “they rule.”"},
     {"k":"en","p":"Translate into English: *relinquit*","a":["he abandons","he is abandoning","he does abandon","she abandons","she is abandoning","she does abandon","it abandons","it is abandoning","it does abandon"],"w":"*relinquit* is 3rd person singular, so it means “he abandons.”"},
     {"k":"en","p":"Translate into English: *dūcimus*","a":["we lead","we are leading","we do lead"],"w":"*dūcimus* is 1st person plural, so it means “we lead.”"},
     {"k":"en","p":"Translate into English: *mittō*","a":["I send","I am sending","I do send"],"w":"*mittō* is 1st person singular, so it means “I send.”"},
    ]},
    {s:"Write a 3rd conjugation present verb in Latin from English",b:[
     {"k":"la","p":"Write in Latin: we lead","a":["dūcimus"],"w":"The 1st person plural form is *dūcimus*."},
     {"k":"la","p":"Write in Latin: I send","a":["mittō"],"w":"The 1st person singular form is *mittō*."},
     {"k":"la","p":"Write in Latin: he writes","a":["scrībit"],"w":"The 3rd person singular form is *scrībit*."},
     {"k":"la","p":"Write in Latin: they read","a":["legunt"],"w":"The 3rd person plural form is *legunt*."},
     {"k":"la","p":"Write in Latin: you all conquer","a":["vincitis"],"w":"The 2nd person plural form is *vincitis*."},
     {"k":"la","p":"Write in Latin: you (one person) defend","a":["dēfendis"],"w":"The 2nd person singular form is *dēfendis*."},
     {"k":"la","p":"Write in Latin: I rule","a":["regō"],"w":"The 1st person singular form is *regō*."},
     {"k":"la","p":"Write in Latin: they abandon","a":["relinquunt"],"w":"The 3rd person plural form is *relinquunt*."},
     {"k":"la","p":"Write in Latin: he leads","a":["dūcit"],"w":"The 3rd person singular form is *dūcit*."},
     {"k":"la","p":"Write in Latin: we send","a":["mittimus"],"w":"The 1st person plural form is *mittimus*."},
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
     {"k":"mc","p":"Which family is *portāre, portō*?","o":["1st","2nd","3rd","4th"],"a":0,"w":"-āre is the 1st conjugation."},
     {"k":"mc","p":"Which family is *tenēre, teneō*?","o":["2nd","1st","3rd","4th"],"a":0,"w":"A long -ēre with -eō is the 2nd conjugation."},
     {"k":"mc","p":"Which family is *mittere, mittō*?","o":["3rd","2nd","3rd -iō","4th"],"a":0,"w":"A short -ere with plain -ō is the 3rd conjugation."},
     {"k":"mc","p":"Which family is *iacere, iaciō*?","o":["3rd -iō","2nd","3rd","4th"],"a":0,"w":"A short -ere with -iō is the 3rd -iō conjugation."},
     {"k":"mc","p":"Which family is *pūnīre, pūniō*?","o":["4th","1st","2nd","3rd -iō"],"a":0,"w":"-īre is the 4th conjugation."},
     {"k":"mc","p":"Which family is *accipere, accipiō*?","o":["3rd -iō","3rd","4th","2nd"],"a":0,"w":"A short -ere with -iō is the 3rd -iō conjugation."},
     {"k":"mc","p":"Which family is *scrībere, scrībō*?","o":["3rd","2nd","3rd -iō","4th"],"a":0,"w":"A short -ere with plain -ō is the 3rd conjugation."},
     {"k":"mc","p":"Which family is *custōdīre, custōdiō*?","o":["4th","2nd","3rd","3rd -iō"],"a":0,"w":"-īre is the 4th conjugation."},
     {"k":"mc","p":"Which family is *terrēre, terreō*?","o":["2nd","1st","3rd","3rd -iō"],"a":0,"w":"A long -ēre with -eō is the 2nd conjugation."},
     {"k":"mc","p":"Which family is *amāre, amō*?","o":["1st","2nd","3rd","4th"],"a":0,"w":"-āre is the 1st conjugation."},
    ]},
    {s:"Translate a 3rd -iō or 4th conjugation present verb into English",b:[
     {"k":"en","p":"Translate into English: *capit*","a":["he captures","he is capturing","he does capture","she captures","she is capturing","she does capture","it captures","it is capturing","it does capture"],"w":"*capit* is 3rd person singular, so it means “he captures.”"},
     {"k":"en","p":"Translate into English: *iaciunt*","a":["they throw","they are throwing","they do throw"],"w":"*iaciunt* is 3rd person plural, so it means “they throw.”"},
     {"k":"en","p":"Translate into English: *accipiō*","a":["I receive","I am receiving","I do receive"],"w":"*accipiō* is 1st person singular, so it means “I receive.”"},
     {"k":"en","p":"Translate into English: *cōnspicimus*","a":["we notice","we are noticing","we do notice"],"w":"*cōnspicimus* is 1st person plural, so it means “we notice.”"},
     {"k":"en","p":"Translate into English: *interficis*","a":["you kill","you are killing","you do kill"],"w":"*interficis* is 2nd person singular, so it means “you kill.”"},
     {"k":"en","p":"Translate into English: *audītis*","a":["you hear","you are hearing","you do hear"],"w":"*audītis* is 2nd person plural, so it means “you hear.”"},
     {"k":"en","p":"Translate into English: *custōdiunt*","a":["they guard","they are guarding","they do guard"],"w":"*custōdiunt* is 3rd person plural, so it means “they guard.”"},
     {"k":"en","p":"Translate into English: *invenit*","a":["he finds","he is finding","he does find","she finds","she is finding","she does find","it finds","it is finding","it does find"],"w":"*invenit* is 3rd person singular, so it means “he finds.”"},
     {"k":"en","p":"Translate into English: *pūnīmus*","a":["we punish","we are punishing","we do punish"],"w":"*pūnīmus* is 1st person plural, so it means “we punish.”"},
     {"k":"en","p":"Translate into English: *impediō*","a":["I hinder","I am hindering","I do hinder"],"w":"*impediō* is 1st person singular, so it means “I hinder.”"},
    ]},
    {s:"Write a 3rd -iō or 4th conjugation present verb in Latin from English",b:[
     {"k":"la","p":"Write in Latin: we hear","a":["audīmus"],"w":"The 1st person plural form is *audīmus*."},
     {"k":"la","p":"Write in Latin: I guard","a":["custōdiō"],"w":"The 1st person singular form is *custōdiō*."},
     {"k":"la","p":"Write in Latin: he finds","a":["invenit"],"w":"The 3rd person singular form is *invenit*."},
     {"k":"la","p":"Write in Latin: they punish","a":["pūniunt"],"w":"The 3rd person plural form is *pūniunt*."},
     {"k":"la","p":"Write in Latin: you all hinder","a":["impedītis"],"w":"The 2nd person plural form is *impedītis*."},
     {"k":"la","p":"Write in Latin: you (one person) fortify","a":["mūnīs"],"w":"The 2nd person singular form is *mūnīs*."},
     {"k":"la","p":"Write in Latin: I capture","a":["capiō"],"w":"The 1st person singular form is *capiō*."},
     {"k":"la","p":"Write in Latin: they throw","a":["iaciunt"],"w":"The 3rd person plural form is *iaciunt*."},
     {"k":"la","p":"Write in Latin: he receives","a":["accipit"],"w":"The 3rd person singular form is *accipit*."},
     {"k":"la","p":"Write in Latin: we notice","a":["cōnspicimus"],"w":"The 1st person plural form is *cōnspicimus*."},
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
     {"k":"mc","p":"In *Nāvigāre cupimus*, which word is the infinitive?","o":["*nāvigāre*","*cupimus*","Both","Neither"],"a":0,"w":"-āre marks the infinitive; *cupimus* has a personal ending."},
     {"k":"mc","p":"In *Ambulāre solent*, which word tells you who acts?","o":["*solent*","*ambulāre*","Both","Neither"],"a":0,"w":"-nt means they, and infinitives have no personal ending."},
     {"k":"mc","p":"In *Audīre dēbēmus*, who ought to listen?","o":["we","I","you","they"],"a":0,"w":"*dēbēmus* ends in -mus, we."},
     {"k":"mc","p":"In *Currere cupis*, who wants to run?","o":["you (one person)","we","they","you (more than one person)"],"a":0,"w":"*cupis* ends in -s."},
     {"k":"mc","p":"In *Scrībere solet*, what does the word *scrībere* do?","o":["It completes the verb *solet*","It says who is writing","It is the subject","It tells when"],"a":0,"w":"A complementary infinitive completes the main verb."},
     {"k":"mc","p":"Which word changes when the subject changes in *Dormīre cupiō*?","o":["*cupiō*","*dormīre*","Both","Neither"],"a":0,"w":"Only the main verb has personal endings."},
     {"k":"mc","p":"How do you say \"they ought to work\"?","o":["*Labōrāre dēbent*","*Labōrant dēbēre*","*Labōrāre dēbet*","*Labōrāmus dēbēre*"],"a":0,"w":"-nt on the main verb, and the infinitive stays the same."},
     {"k":"mc","p":"How do you say \"we hope to sail\"?","o":["*Nāvigāre spērāmus*","*Nāvigāmus spērāre*","*Nāvigāre spērant*","*Nāvigat spērāmus*"],"a":0,"w":"The main verb takes -mus, and *nāvigāre* stays an infinitive."},
     {"k":"mc","p":"What does *solēmus* add to *Ambulāre solēmus*?","o":["We usually walk","We walk alone","We want to walk","We ought to walk"],"a":0,"w":"*solēre* with an infinitive means to usually do something."},
     {"k":"mc","p":"What does *dēbēre* mean with an infinitive?","o":["ought, should","to want","to hope","to be used to"],"a":0,"w":"With an infinitive, *dēbēre* means ought or should."},
    ]},
    {s:"Translate a sentence with a complementary infinitive",b:[
     {"k":"en","p":"Translate into English: *Nāvigāre cupimus.*","a":["We want to sail.","We are wanting to sail.","We do want to sail."],"w":"Translate the main verb first, then add the infinitive."},
     {"k":"la","p":"Translate into Latin: They usually walk.","a":["Ambulāre solent."],"w":"Translate the main verb first, then add the infinitive."},
     {"k":"en","p":"Translate into English: *Dormīre dēbēs.*","a":["You ought to sleep.","You should sleep."],"w":"Translate the main verb first, then add the infinitive."},
     {"k":"la","p":"Translate into Latin: I hope to work.","a":["Labōrāre spērō."],"w":"Translate the main verb first, then add the infinitive."},
     {"k":"en","p":"Translate into English: *Currere cupiunt.*","a":["They want to run.","They are wanting to run.","They do want to run."],"w":"Translate the main verb first, then add the infinitive."},
     {"k":"la","p":"Translate into Latin: You ought to listen.","a":["Audīre dēbētis."],"w":"Translate the main verb first, then add the infinitive."},
     {"k":"en","p":"Translate into English: *Scrībere solet.*","a":["He usually writes.","She usually writes."],"w":"Translate the main verb first, then add the infinitive."},
     {"k":"la","p":"Translate into Latin: He wants to stay.","a":["Manēre cupit."],"w":"Translate the main verb first, then add the infinitive."},
     {"k":"en","p":"Translate into English: *Pugnāre dēbēmus.*","a":["We ought to fight.","We should fight."],"w":"Translate the main verb first, then add the infinitive."},
     {"k":"la","p":"Translate into Latin: You hope to come.","a":["Venīre spērās."],"w":"Translate the main verb first, then add the infinitive."},
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
     {"k":"mc","p":"What person and number is *laudor*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":0,"w":"The ending of *laudor* means I, so it is 1st person singular."},
     {"k":"mc","p":"What person and number is *monēmur*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":3,"w":"The ending of *monēmur* means we, so it is 1st person plural."},
     {"k":"mc","p":"What person and number is *dūcuntur*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":5,"w":"The ending of *dūcuntur* means they, so it is 3rd person plural."},
     {"k":"mc","p":"What person and number is *caperis*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":1,"w":"The ending of *caperis* means you (one person), so it is 2nd person singular."},
     {"k":"mc","p":"What person and number is *audīminī*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":4,"w":"The ending of *audīminī* means you (more than one person), so it is 2nd person plural."},
     {"k":"mc","p":"What person and number is *portātur*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":2,"w":"The ending of *portātur* means he, she or it, so it is 3rd person singular."},
     {"k":"mc","p":"What person and number is *vidēmur*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":3,"w":"The ending of *vidēmur* means we, so it is 1st person plural."},
     {"k":"mc","p":"What person and number is *mitteris*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":1,"w":"The ending of *mitteris* means you (one person), so it is 2nd person singular."},
     {"k":"mc","p":"What person and number is *iaciuntur*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":5,"w":"The ending of *iaciuntur* means they, so it is 3rd person plural."},
     {"k":"mc","p":"What person and number is *custōdior*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":0,"w":"The ending of *custōdior* means I, so it is 1st person singular."},
    ]},
    {s:"Translate a present passive verb into English",b:[
     {"k":"en","p":"Translate into English: *laudātur*","a":["he is praised","he is being praised","she is praised","she is being praised","it is praised","it is being praised"],"w":"*laudātur* is 3rd person singular, so it means “he is praised.”"},
     {"k":"en","p":"Translate into English: *portantur*","a":["they are carried","they are being carried"],"w":"*portantur* is 3rd person plural, so it means “they are carried.”"},
     {"k":"en","p":"Translate into English: *videor*","a":["I am seen","I am being seen"],"w":"*videor* is 1st person singular, so it means “I am seen.”"},
     {"k":"en","p":"Translate into English: *monēmur*","a":["we are warned","we are being warned"],"w":"*monēmur* is 1st person plural, so it means “we are warned.”"},
     {"k":"en","p":"Translate into English: *dūceris*","a":["you are led","you are being led"],"w":"*dūceris* is 2nd person singular, so it means “you are led.”"},
     {"k":"en","p":"Translate into English: *mittiminī*","a":["you are sent","you are being sent"],"w":"*mittiminī* is 2nd person plural, so it means “you are sent.”"},
     {"k":"en","p":"Translate into English: *capiuntur*","a":["they are captured","they are being captured"],"w":"*capiuntur* is 3rd person plural, so it means “they are captured.”"},
     {"k":"en","p":"Translate into English: *iacitur*","a":["he is thrown","he is being thrown","she is thrown","she is being thrown","it is thrown","it is being thrown"],"w":"*iacitur* is 3rd person singular, so it means “he is thrown.”"},
     {"k":"en","p":"Translate into English: *audīmur*","a":["we are heard","we are being heard"],"w":"*audīmur* is 1st person plural, so it means “we are heard.”"},
     {"k":"en","p":"Translate into English: *custōdior*","a":["I am guarded","I am being guarded"],"w":"*custōdior* is 1st person singular, so it means “I am guarded.”"},
    ]},
    {s:"Write a present passive verb in Latin from English",b:[
     {"k":"la","p":"Write in Latin: we are praised","a":["laudāmur"],"w":"The 1st person plural form is *laudāmur*."},
     {"k":"la","p":"Write in Latin: I am carried","a":["portor"],"w":"The 1st person singular form is *portor*."},
     {"k":"la","p":"Write in Latin: he is seen","a":["vidētur"],"w":"The 3rd person singular form is *vidētur*."},
     {"k":"la","p":"Write in Latin: they are warned","a":["monentur"],"w":"The 3rd person plural form is *monentur*."},
     {"k":"la","p":"Write in Latin: you all are led","a":["dūciminī"],"w":"The 2nd person plural form is *dūciminī*."},
     {"k":"la","p":"Write in Latin: you (one person) are sent","a":["mitteris"],"w":"The 2nd person singular form is *mitteris*."},
     {"k":"la","p":"Write in Latin: I am captured","a":["capior"],"w":"The 1st person singular form is *capior*."},
     {"k":"la","p":"Write in Latin: they are thrown","a":["iaciuntur"],"w":"The 3rd person plural form is *iaciuntur*."},
     {"k":"la","p":"Write in Latin: he is heard","a":["audītur"],"w":"The 3rd person singular form is *audītur*."},
     {"k":"la","p":"Write in Latin: we are guarded","a":["custōdīmur"],"w":"The 1st person plural form is *custōdīmur*."},
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
     {"k":"la","p":"Write the passive infinitive of *portāre*.","a":["portārī"],"w":"In the 1st conjugation, -āre becomes -ārī."},
     {"k":"la","p":"Write the passive infinitive of *dūcere*.","a":["dūcī"],"w":"In the 3rd conjugation, -ere becomes -ī."},
     {"k":"la","p":"Write the passive infinitive of *monēre*.","a":["monērī"],"w":"In the 2nd conjugation, -ēre becomes -ērī."},
     {"k":"la","p":"Write the passive infinitive of *capere*.","a":["capī"],"w":"In the 3rd -iō conjugation, -ere becomes -ī."},
     {"k":"la","p":"Write the passive infinitive of *audīre*.","a":["audīrī"],"w":"In the 4th conjugation, -īre becomes -īrī."},
     {"k":"la","p":"Write the passive infinitive of *vocāre*.","a":["vocārī"],"w":"In the 1st conjugation, -āre becomes -ārī."},
     {"k":"la","p":"Write the passive infinitive of *mittere*.","a":["mittī"],"w":"In the 3rd conjugation, -ere becomes -ī."},
     {"k":"la","p":"Write the passive infinitive of *vidēre*.","a":["vidērī"],"w":"In the 2nd conjugation, -ēre becomes -ērī."},
     {"k":"la","p":"Write the passive infinitive of *iacere*.","a":["iacī"],"w":"In the 3rd -iō conjugation, -ere becomes -ī."},
     {"k":"la","p":"Write the passive infinitive of *custōdīre*.","a":["custōdīrī"],"w":"In the 4th conjugation, -īre becomes -īrī."},
    ]},
    {s:"Translate a complementary passive infinitive sentence",b:[
     {"k":"en","p":"Translate into English: *Laudārī cupit.*","a":["He wants to be praised.","He is wanting to be praised.","He does want to be praised.","She wants to be praised.","She is wanting to be praised.","She does want to be praised."],"w":"The main verb has the personal ending, and the passive infinitive adds \"to be ...ed\"."},
     {"k":"la","p":"Translate into Latin: We ought to be warned.","a":["Monērī dēbēmus."],"w":"The main verb has the personal ending, and the passive infinitive adds \"to be ...ed\"."},
     {"k":"en","p":"Translate into English: *Audīrī spērant.*","a":["They hope to be heard."],"w":"The main verb has the personal ending, and the passive infinitive adds \"to be ...ed\"."},
     {"k":"la","p":"Translate into Latin: I want to be seen.","a":["Vidērī cupiō."],"w":"The main verb has the personal ending, and the passive infinitive adds \"to be ...ed\"."},
     {"k":"en","p":"Translate into English: *Servārī spērāmus.*","a":["We hope to be saved."],"w":"The main verb has the personal ending, and the passive infinitive adds \"to be ...ed\"."},
     {"k":"la","p":"Translate into Latin: You ought to be called.","a":["Vocārī dēbēs."],"w":"The main verb has the personal ending, and the passive infinitive adds \"to be ...ed\"."},
     {"k":"en","p":"Translate into English: *Dūcī cupiunt.*","a":["They want to be led.","They are wanting to be led.","They do want to be led."],"w":"The main verb has the personal ending, and the passive infinitive adds \"to be ...ed\"."},
     {"k":"la","p":"Translate into Latin: They ought to be punished.","a":["Pūnīrī dēbent."],"w":"The main verb has the personal ending, and the passive infinitive adds \"to be ...ed\"."},
     {"k":"en","p":"Translate into English: *Portārī solet.*","a":["He is usually carried.","She is usually carried."],"w":"The main verb has the personal ending, and the passive infinitive adds \"to be ...ed\"."},
     {"k":"la","p":"Translate into Latin: I hope to be defended.","a":["Dēfendī spērō."],"w":"The main verb has the personal ending, and the passive infinitive adds \"to be ...ed\"."},
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
     {"k":"en","p":"Translate into English: *laudābit*","a":["he will praise","he is going to praise","she will praise","she is going to praise","it will praise","it is going to praise"],"w":"*laudābit* is 3rd person singular, so it means “he will praise.”"},
     {"k":"en","p":"Translate into English: *portābunt*","a":["they will carry","they are going to carry"],"w":"*portābunt* is 3rd person plural, so it means “they will carry.”"},
     {"k":"en","p":"Translate into English: *vocābō*","a":["I will call","I am going to call"],"w":"*vocābō* is 1st person singular, so it means “I will call.”"},
     {"k":"en","p":"Translate into English: *vidēbimus*","a":["we will see","we are going to see"],"w":"*vidēbimus* is 1st person plural, so it means “we will see.”"},
     {"k":"en","p":"Translate into English: *monēbis*","a":["you will warn","you are going to warn"],"w":"*monēbis* is 2nd person singular, so it means “you will warn.”"},
     {"k":"en","p":"Translate into English: *tenēbitis*","a":["you will hold","you are going to hold"],"w":"*tenēbitis* is 2nd person plural, so it means “you will hold.”"},
     {"k":"en","p":"Translate into English: *spectābunt*","a":["they will watch","they are going to watch"],"w":"*spectābunt* is 3rd person plural, so it means “they will watch.”"},
     {"k":"en","p":"Translate into English: *terrēbit*","a":["he will frighten","he is going to frighten","she will frighten","she is going to frighten","it will frighten","it is going to frighten"],"w":"*terrēbit* is 3rd person singular, so it means “he will frighten.”"},
     {"k":"en","p":"Translate into English: *laudābimus*","a":["we will praise","we are going to praise"],"w":"*laudābimus* is 1st person plural, so it means “we will praise.”"},
     {"k":"en","p":"Translate into English: *portābō*","a":["I will carry","I am going to carry"],"w":"*portābō* is 1st person singular, so it means “I will carry.”"},
    ]},
    {s:"Write a 1st or 2nd conjugation future active verb in Latin",b:[
     {"k":"la","p":"Write in Latin: we will praise","a":["laudābimus"],"w":"The 1st person plural form is *laudābimus*."},
     {"k":"la","p":"Write in Latin: I will carry","a":["portābō"],"w":"The 1st person singular form is *portābō*."},
     {"k":"la","p":"Write in Latin: he will call","a":["vocābit"],"w":"The 3rd person singular form is *vocābit*."},
     {"k":"la","p":"Write in Latin: they will see","a":["vidēbunt"],"w":"The 3rd person plural form is *vidēbunt*."},
     {"k":"la","p":"Write in Latin: you all will warn","a":["monēbitis"],"w":"The 2nd person plural form is *monēbitis*."},
     {"k":"la","p":"Write in Latin: you (one person) will hold","a":["tenēbis"],"w":"The 2nd person singular form is *tenēbis*."},
     {"k":"la","p":"Write in Latin: I will watch","a":["spectābō"],"w":"The 1st person singular form is *spectābō*."},
     {"k":"la","p":"Write in Latin: they will frighten","a":["terrēbunt"],"w":"The 3rd person plural form is *terrēbunt*."},
     {"k":"la","p":"Write in Latin: he will praise","a":["laudābit"],"w":"The 3rd person singular form is *laudābit*."},
     {"k":"la","p":"Write in Latin: we will carry","a":["portābimus"],"w":"The 1st person plural form is *portābimus*."},
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
     {"k":"mc","p":"*monet* (2nd conjugation) is...","o":["present","future"],"a":0,"w":"In the 2nd conjugation, -et is present."},
     {"k":"mc","p":"*dūcet* (3rd conjugation) is...","o":["future","present"],"a":0,"w":"In the 3rd conjugation, -et is future."},
     {"k":"mc","p":"*vident* (2nd conjugation) is...","o":["present","future"],"a":0,"w":"In the 2nd conjugation, -ent is present."},
     {"k":"mc","p":"*mittent* (3rd conjugation) is...","o":["future","present"],"a":0,"w":"In the 3rd conjugation, -ent is future."},
     {"k":"mc","p":"*audiet* (4th conjugation) is...","o":["future","present"],"a":0,"w":"4th conjugation present is *audit*, so *audiet* is future."},
     {"k":"mc","p":"*capient* (3rd -iō conjugation) is...","o":["future","present"],"a":0,"w":"The present is *capiunt*, so *capient* is future."},
     {"k":"mc","p":"*tenet* (2nd conjugation) is...","o":["present","future"],"a":0,"w":"In the 2nd conjugation, -et is present."},
     {"k":"mc","p":"*legēmus* (3rd conjugation) is...","o":["future","present"],"a":0,"w":"The present is *legimus*, so *legēmus* is future."},
     {"k":"mc","p":"*terrēmus* (2nd conjugation) is...","o":["present","future"],"a":0,"w":"The future would be *terrēbimus*."},
     {"k":"mc","p":"*scrībet* (3rd conjugation) is...","o":["future","present"],"a":0,"w":"The present is *scrībit*."},
    ]},
    {s:"Translate a 3rd, 3rd -iō or 4th conjugation future active verb into English",b:[
     {"k":"en","p":"Translate into English: *dūcet*","a":["he will lead","he is going to lead","she will lead","she is going to lead","it will lead","it is going to lead"],"w":"*dūcet* is 3rd person singular, so it means “he will lead.”"},
     {"k":"en","p":"Translate into English: *mittent*","a":["they will send","they are going to send"],"w":"*mittent* is 3rd person plural, so it means “they will send.”"},
     {"k":"en","p":"Translate into English: *scrībam*","a":["I will write","I am going to write"],"w":"*scrībam* is 1st person singular, so it means “I will write.”"},
     {"k":"en","p":"Translate into English: *audiēmus*","a":["we will hear","we are going to hear"],"w":"*audiēmus* is 1st person plural, so it means “we will hear.”"},
     {"k":"en","p":"Translate into English: *custōdiēs*","a":["you will guard","you are going to guard"],"w":"*custōdiēs* is 2nd person singular, so it means “you will guard.”"},
     {"k":"en","p":"Translate into English: *capiētis*","a":["you will capture","you are going to capture"],"w":"*capiētis* is 2nd person plural, so it means “you will capture.”"},
     {"k":"en","p":"Translate into English: *iacient*","a":["they will throw","they are going to throw"],"w":"*iacient* is 3rd person plural, so it means “they will throw.”"},
     {"k":"en","p":"Translate into English: *inveniet*","a":["he will find","he is going to find","she will find","she is going to find","it will find","it is going to find"],"w":"*inveniet* is 3rd person singular, so it means “he will find.”"},
     {"k":"en","p":"Translate into English: *legēmus*","a":["we will read","we are going to read"],"w":"*legēmus* is 1st person plural, so it means “we will read.”"},
     {"k":"en","p":"Translate into English: *pūniam*","a":["I will punish","I am going to punish"],"w":"*pūniam* is 1st person singular, so it means “I will punish.”"},
    ]},
    {s:"Write a 3rd, 3rd -iō or 4th conjugation future active verb in Latin",b:[
     {"k":"la","p":"Write in Latin: we will lead","a":["dūcēmus"],"w":"The 1st person plural form is *dūcēmus*."},
     {"k":"la","p":"Write in Latin: I will send","a":["mittam"],"w":"The 1st person singular form is *mittam*."},
     {"k":"la","p":"Write in Latin: he will write","a":["scrībet"],"w":"The 3rd person singular form is *scrībet*."},
     {"k":"la","p":"Write in Latin: they will hear","a":["audient"],"w":"The 3rd person plural form is *audient*."},
     {"k":"la","p":"Write in Latin: you all will guard","a":["custōdiētis"],"w":"The 2nd person plural form is *custōdiētis*."},
     {"k":"la","p":"Write in Latin: you (one person) will capture","a":["capiēs"],"w":"The 2nd person singular form is *capiēs*."},
     {"k":"la","p":"Write in Latin: I will throw","a":["iaciam"],"w":"The 1st person singular form is *iaciam*."},
     {"k":"la","p":"Write in Latin: they will find","a":["invenient"],"w":"The 3rd person plural form is *invenient*."},
     {"k":"la","p":"Write in Latin: he will read","a":["leget"],"w":"The 3rd person singular form is *leget*."},
     {"k":"la","p":"Write in Latin: we will punish","a":["pūniēmus"],"w":"The 1st person plural form is *pūniēmus*."},
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
     {"k":"en","p":"Translate into English: *portābitur*","a":["he will be carried","she will be carried","it will be carried"],"w":"*portābitur* is 3rd person singular, so it means “he will be carried.”"},
     {"k":"en","p":"Translate into English: *vidēbuntur*","a":["they will be seen"],"w":"*vidēbuntur* is 3rd person plural, so it means “they will be seen.”"},
     {"k":"en","p":"Translate into English: *dūcar*","a":["I will be led"],"w":"*dūcar* is 1st person singular, so it means “I will be led.”"},
     {"k":"en","p":"Translate into English: *capiēmur*","a":["we will be captured"],"w":"*capiēmur* is 1st person plural, so it means “we will be captured.”"},
     {"k":"en","p":"Translate into English: *audiēris*","a":["you will be heard"],"w":"*audiēris* is 2nd person singular, so it means “you will be heard.”"},
     {"k":"en","p":"Translate into English: *laudābiminī*","a":["you will be praised"],"w":"*laudābiminī* is 2nd person plural, so it means “you will be praised.”"},
     {"k":"en","p":"Translate into English: *monēbuntur*","a":["they will be warned"],"w":"*monēbuntur* is 3rd person plural, so it means “they will be warned.”"},
     {"k":"en","p":"Translate into English: *mittētur*","a":["he will be sent","she will be sent","it will be sent"],"w":"*mittētur* is 3rd person singular, so it means “he will be sent.”"},
     {"k":"en","p":"Translate into English: *iaciēmur*","a":["we will be thrown"],"w":"*iaciēmur* is 1st person plural, so it means “we will be thrown.”"},
     {"k":"en","p":"Translate into English: *custōdiar*","a":["I will be guarded"],"w":"*custōdiar* is 1st person singular, so it means “I will be guarded.”"},
    ]},
    {s:"Write a future passive verb in Latin",b:[
     {"k":"la","p":"Write in Latin: we will be carried","a":["portābimur"],"w":"The 1st person plural form is *portābimur*."},
     {"k":"la","p":"Write in Latin: I will be seen","a":["vidēbor"],"w":"The 1st person singular form is *vidēbor*."},
     {"k":"la","p":"Write in Latin: he will be led","a":["dūcētur"],"w":"The 3rd person singular form is *dūcētur*."},
     {"k":"la","p":"Write in Latin: they will be captured","a":["capientur"],"w":"The 3rd person plural form is *capientur*."},
     {"k":"la","p":"Write in Latin: you all will be heard","a":["audiēminī"],"w":"The 2nd person plural form is *audiēminī*."},
     {"k":"la","p":"Write in Latin: you (one person) will be praised","a":["laudāberis"],"w":"The 2nd person singular form is *laudāberis*."},
     {"k":"la","p":"Write in Latin: I will be warned","a":["monēbor"],"w":"The 1st person singular form is *monēbor*."},
     {"k":"la","p":"Write in Latin: they will be sent","a":["mittentur"],"w":"The 3rd person plural form is *mittentur*."},
     {"k":"la","p":"Write in Latin: he will be thrown","a":["iaciētur"],"w":"The 3rd person singular form is *iaciētur*."},
     {"k":"la","p":"Write in Latin: we will be guarded","a":["custōdiēmur"],"w":"The 1st person plural form is *custōdiēmur*."},
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
     {"k":"mc","p":"If *oppidum* (town) is the subject, should the verb end in -t or -nt?","o":["-t","-nt"],"a":0,"w":"*oppidum* is singular."},
     {"k":"mc","p":"If *puellae* (girls) is the subject, should the verb end in -t or -nt?","o":["-nt","-t"],"a":0,"w":"-ae is nominative plural here."},
     {"k":"mc","p":"If *amīcī* (friends) is the subject, should the verb end in -t or -nt?","o":["-nt","-t"],"a":0,"w":"-ī is nominative plural in the 2nd declension."},
     {"k":"mc","p":"If *dōna* (gifts) is the subject, should the verb end in -t or -nt?","o":["-nt","-t"],"a":0,"w":"-a is plural for 2nd declension neuters."},
     {"k":"mc","p":"If *rēgīna* (queen) is the subject, should the verb end in -t or -nt?","o":["-t","-nt"],"a":0,"w":"-a is singular in the 1st declension."},
     {"k":"mc","p":"If *servus* (slave) is the subject, should the verb end in -t or -nt?","o":["-t","-nt"],"a":0,"w":"-us is singular."},
     {"k":"mc","p":"If *templa* (temples) is the subject, should the verb end in -t or -nt?","o":["-nt","-t"],"a":0,"w":"-a is plural for 2nd declension neuters."},
     {"k":"mc","p":"If *nautae* (sailors) is the subject, should the verb end in -t or -nt?","o":["-nt","-t"],"a":0,"w":"-ae is plural."},
     {"k":"mc","p":"If *dōnum* (gift) is the subject, should the verb end in -t or -nt?","o":["-t","-nt"],"a":0,"w":"-um is singular."},
     {"k":"mc","p":"If *fīliī* (sons) is the subject, should the verb end in -t or -nt?","o":["-nt","-t"],"a":0,"w":"-ī is plural."},
    ]},
    {s:"Translate a short sentence with a nominative subject",b:[
     {"k":"en","p":"Translate into English: *Puella laudat.*","a":["The girl praises.","The girl is praising.","The girl does praise."],"w":"The nominative is the subject, and the verb ending agrees with it."},
     {"k":"la","p":"Translate into Latin: The friends walk.","a":["Amīcī ambulant."],"w":"The nominative is the subject, and the verb ending agrees with it."},
     {"k":"en","p":"Translate into English: *Nauta nāvigat.*","a":["The sailor sails.","The sailor is sailing.","The sailor does sail."],"w":"The nominative is the subject, and the verb ending agrees with it."},
     {"k":"la","p":"Translate into Latin: The girls sleep.","a":["Puellae dormiunt."],"w":"The nominative is the subject, and the verb ending agrees with it."},
     {"k":"en","p":"Translate into English: *Servus labōrat.*","a":["The slave works.","The slave is working.","The slave does work."],"w":"The nominative is the subject, and the verb ending agrees with it."},
     {"k":"la","p":"Translate into Latin: The women come.","a":["Fēminae veniunt."],"w":"The nominative is the subject, and the verb ending agrees with it."},
     {"k":"en","p":"Translate into English: *Equus currit.*","a":["The horse runs.","The horse is running.","The horse does run."],"w":"The nominative is the subject, and the verb ending agrees with it."},
     {"k":"la","p":"Translate into Latin: The farmers work.","a":["Agricolae labōrant."],"w":"The nominative is the subject, and the verb ending agrees with it."},
     {"k":"en","p":"Translate into English: *Rēgīna sedet.*","a":["The queen sits.","The queen is sitting.","The queen does sit."],"w":"The nominative is the subject, and the verb ending agrees with it."},
     {"k":"la","p":"Translate into Latin: The men fight.","a":["Virī pugnant."],"w":"The nominative is the subject, and the verb ending agrees with it."},
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
     {"k":"mc","p":"In *Puella **rosam** portat*, what case is *rosam*?","o":["accusative","nominative"],"a":0,"w":"-am marks the accusative singular."},
     {"k":"mc","p":"In ***Nauta** puellam vocat*, what case is *nauta*?","o":["nominative","accusative"],"a":0,"w":"*nauta* is the subject, the one calling."},
     {"k":"mc","p":"In *Agricolae **equōs** spectant*, what case is *equōs*?","o":["accusative","nominative"],"a":0,"w":"-ōs marks the accusative plural."},
     {"k":"mc","p":"In ***Servī** templum vident*, what case is *servī*?","o":["nominative","accusative"],"a":0,"w":"-ī is the nominative plural of the 2nd declension."},
     {"k":"mc","p":"In *Rēgīna **nautās** laudat*, what case is *nautās*?","o":["accusative","nominative"],"a":0,"w":"-ās marks the accusative plural."},
     {"k":"mc","p":"In ***Puellae** fābulam audiunt*, what case is *puellae*?","o":["nominative","accusative"],"a":0,"w":"The plural verb -nt matches the plural subject."},
     {"k":"mc","p":"In *Puer **librum** legit*, what case is *librum*?","o":["accusative","nominative"],"a":0,"w":"The boy is the subject, so *librum* is the object."},
     {"k":"mc","p":"In *Nauta **dōna** portat*, what case is *dōna*?","o":["accusative","nominative"],"a":0,"w":"*nauta* is the subject, so the neuter *dōna* is the object."},
     {"k":"mc","p":"In ***Dōna** puellam dēlectant*, what case is *dōna*?","o":["nominative","accusative"],"a":0,"w":"-nt is plural, *puellam* is clearly accusative, so *dōna* is the subject."},
     {"k":"mc","p":"In *Fēmina **amīcum** videt*, what case is *amīcum*?","o":["accusative","nominative"],"a":0,"w":"-um on a masculine noun is accusative."},
    ]},
    {s:"Translate a sentence with a subject and a direct object",b:[
     {"k":"en","p":"Translate into English: *Puella rosam portat.*","a":["The girl carries the rose.","The girl is carrying the rose.","The girl does carry the rose."],"w":"The nominative is the subject and the accusative is the direct object."},
     {"k":"la","p":"Translate into Latin: The sailor calls the girls.","a":["Nauta puellās vocat."],"w":"The nominative is the subject and the accusative is the direct object."},
     {"k":"en","p":"Translate into English: *Agricolae equōs spectant.*","a":["The farmers watch the horses.","The farmers are watching the horses.","The farmers do watch the horses."],"w":"The nominative is the subject and the accusative is the direct object."},
     {"k":"la","p":"Translate into Latin: The boy reads the book.","a":["Puer librum legit."],"w":"The nominative is the subject and the accusative is the direct object."},
     {"k":"en","p":"Translate into English: *Fēmina dōna portat.*","a":["The woman carries the gifts.","The woman is carrying the gifts.","The woman does carry the gifts."],"w":"The nominative is the subject and the accusative is the direct object."},
     {"k":"la","p":"Translate into Latin: The slaves see the temple.","a":["Servī templum vident."],"w":"The nominative is the subject and the accusative is the direct object."},
     {"k":"en","p":"Translate into English: *Amīcus puerum audit.*","a":["The friend hears the boy.","The friend is hearing the boy.","The friend does hear the boy."],"w":"The nominative is the subject and the accusative is the direct object."},
     {"k":"la","p":"Translate into Latin: The queen praises the sailors.","a":["Rēgīna nautās laudat."],"w":"The nominative is the subject and the accusative is the direct object."},
     {"k":"en","p":"Translate into English: *Magister discipulōs docet.*","a":["The teacher teaches the students.","The teacher is teaching the students.","The teacher does teach the students."],"w":"The nominative is the subject and the accusative is the direct object."},
     {"k":"la","p":"Translate into Latin: The girls write the stories.","a":["Puellae fābulās scrībunt."],"w":"The nominative is the subject and the accusative is the direct object."},
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
     {"k":"mc","p":"In *Puella **nautae** rosam dat*, what case is *nautae*?","o":["dative","nominative","accusative"],"a":0,"w":"*puella* is the singular subject, so *nautae* is the receiver."},
     {"k":"mc","p":"In ***Nautae** rosam portant*, what case is *nautae*?","o":["nominative","dative","accusative"],"a":0,"w":"The plural verb needs a plural subject."},
     {"k":"mc","p":"In *Magister **puerīs** fābulam narrat*, what case is *puerīs*?","o":["dative","nominative","accusative"],"a":0,"w":"-īs is dative plural here: told to the boys."},
     {"k":"mc","p":"In *Rēgīna **agricolīs** aurum dat*, what case is *agricolīs*?","o":["dative","nominative","accusative"],"a":0,"w":"-īs is dative plural."},
     {"k":"mc","p":"In ***Puellae** dormiunt*, what case is *puellae*?","o":["nominative","dative","accusative"],"a":0,"w":"The plural verb needs a plural subject."},
     {"k":"mc","p":"In *Servus **dominō** equum trādit*, what case is *dominō*?","o":["dative","nominative","accusative"],"a":0,"w":"-ō on a noun receiving something is dative."},
     {"k":"mc","p":"In *Fēmina **fīliae** pecūniam dat*, what case is *fīliae*?","o":["dative","nominative","accusative"],"a":0,"w":"The singular subject *fēmina* matches *dat*, so *fīliae* is the receiver."},
     {"k":"mc","p":"In *Agricola **amīcō** labōrat*, how should *amīcō* be translated?","o":["for a friend","a friend","of a friend"],"a":0,"w":"This is a dative of reference."},
     {"k":"mc","p":"In *Puer **puellae** cibum parat*, how should *puellae* be translated?","o":["for the girl","the girls","of the girls"],"a":0,"w":"*puer* is the subject and *cibum* the object, so *puellae* is dative."},
     {"k":"mc","p":"In *Puer amīcīs fābulam narrat*, who hears the story?","o":["the friends","the boy","the story"],"a":0,"w":"*amīcīs* is dative plural."},
    ]},
    {s:"Translate a sentence with a dative",b:[
     {"k":"en","p":"Translate into English: *Puella nautae rosam dat.*","a":["The girl gives the sailor a rose.","The girl gives a rose to the sailor.","The girl is giving the sailor a rose.","The girl is giving a rose to the sailor.","The girl does give the sailor a rose.","The girl does give a rose to the sailor."],"w":"The dative is translated with to or for."},
     {"k":"la","p":"Translate into Latin: The teacher tells the boys a story.","a":["Magister puerīs fābulam narrat."],"w":"The dative is translated with to or for."},
     {"k":"en","p":"Translate into English: *Fēmina amīcae pecūniam mōnstrat.*","a":["The woman shows the friend the money.","The woman shows the money to the friend.","The woman is showing the friend the money.","The woman is showing the money to the friend.","The woman does show the friend the money.","The woman does show the money to the friend."],"w":"The dative is translated with to or for."},
     {"k":"la","p":"Translate into Latin: The slave hands over the horse to the master.","a":["Servus dominō equum trādit."],"w":"The dative is translated with to or for."},
     {"k":"en","p":"Translate into English: *Rēgīna agricolīs aurum dat.*","a":["The queen gives the farmers gold.","The queen gives gold to the farmers.","The queen is giving the farmers gold.","The queen is giving gold to the farmers.","The queen does give the farmers gold.","The queen does give gold to the farmers."],"w":"The dative is translated with to or for."},
     {"k":"la","p":"Translate into Latin: The sailors give the girls gifts.","a":["Nautae puellīs dōna dant."],"w":"The dative is translated with to or for."},
     {"k":"en","p":"Translate into English: *Agricola fīliō labōrat.*","a":["The farmer works for the son.","The farmer is working for the son.","The farmer does work for the son."],"w":"The dative is translated with to or for."},
     {"k":"la","p":"Translate into Latin: The girl prepares food for the friend.","a":["Puella amīcae cibum parat."],"w":"The dative is translated with to or for."},
     {"k":"en","p":"Translate into English: *Vir fēminae epistulam scrībit.*","a":["The man writes a letter to the woman.","The man writes a letter for the woman.","The man is writing a letter to the woman.","The man is writing a letter for the woman.","The man does write a letter to the woman.","The man does write a letter for the woman."],"w":"The dative is translated with to or for."},
     {"k":"la","p":"Translate into Latin: The boys save the horse for the friend.","a":["Puerī amīcō equum servant."],"w":"The dative is translated with to or for."},
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
     {"k":"mc","p":"Pick the right form: *cum ___* (with a friend)","o":["*amīcō*","*amīcum*","*amīcus*","*amīcī*"],"a":0,"w":"*cum* takes the ablative."},
     {"k":"mc","p":"Pick the right form: *ad ___* (to the forest)","o":["*silvam*","*silvā*","*silva*","*silvae*"],"a":0,"w":"*ad* takes the accusative."},
     {"k":"mc","p":"Pick the right form: *sine ___* (without water)","o":["*aquā*","*aquam*","*aqua*","*aquae*"],"a":0,"w":"*sine* takes the ablative."},
     {"k":"mc","p":"Pick the right form: *in ___* (in the town)","o":["*oppidō*","*oppidum*","*oppida*","*oppidī*"],"a":0,"w":"Location uses *in* with the ablative."},
     {"k":"mc","p":"Pick the right form: *in ___* (into the town)","o":["*oppidum*","*oppidō*","*oppidī*","*oppidīs*"],"a":0,"w":"Motion into uses *in* with the accusative."},
     {"k":"mc","p":"Pick the right form: *per ___* (through the roads)","o":["*viās*","*viīs*","*viae*","*viā*"],"a":0,"w":"*per* takes the accusative."},
     {"k":"mc","p":"Pick the right form: *ex ___* (out of the garden)","o":["*hortō*","*hortum*","*hortus*","*hortī*"],"a":0,"w":"*ex* takes the ablative."},
     {"k":"mc","p":"Pick the right form: *ab ___* (away from the island)","o":["*īnsulā*","*īnsulam*","*īnsula*","*īnsulae*"],"a":0,"w":"*ab* takes the ablative."},
     {"k":"mc","p":"Pick the right form: *trāns ___* (across the fields)","o":["*agrōs*","*agrīs*","*agrī*","*agrō*"],"a":0,"w":"*trāns* takes the accusative."},
     {"k":"mc","p":"Pick the right form: *cum ___* (with the girls)","o":["*puellīs*","*puellās*","*puellae*","*puellā*"],"a":0,"w":"*cum* takes the ablative."},
    ]},
    {s:"Translate a phrase or sentence using a preposition",b:[
     {"k":"en","p":"Translate into English: *Nauta ad īnsulam nāvigat.*","a":["The sailor sails to the island.","The sailor is sailing to the island.","The sailor does sail to the island."],"w":"The preposition decides the case of the noun after it."},
     {"k":"la","p":"Translate into Latin: The girl walks in the forest.","a":["Puella in silvā ambulat."],"w":"The preposition decides the case of the noun after it."},
     {"k":"en","p":"Translate into English: *Agricola ex agrō venit.*","a":["The farmer comes out of the field.","The farmer is coming out of the field.","The farmer does come out of the field."],"w":"The preposition decides the case of the noun after it."},
     {"k":"la","p":"Translate into Latin: The boys run into the forest.","a":["Puerī in silvam currunt."],"w":"The preposition decides the case of the noun after it."},
     {"k":"en","p":"Translate into English: *Fēmina cum amīcā ambulat.*","a":["The woman walks with the friend.","The woman is walking with the friend.","The woman does walk with the friend."],"w":"The preposition decides the case of the noun after it."},
     {"k":"la","p":"Translate into Latin: The slave comes without the horse.","a":["Servus sine equō venit."],"w":"The preposition decides the case of the noun after it."},
     {"k":"en","p":"Translate into English: *Virī per viās ambulant.*","a":["The men walk through the roads.","The men are walking through the roads.","The men do walk through the roads."],"w":"The preposition decides the case of the noun after it."},
     {"k":"la","p":"Translate into Latin: The sailors sail away from the island.","a":["Nautae ab īnsulā nāvigant."],"w":"The preposition decides the case of the noun after it."},
     {"k":"en","p":"Translate into English: *Equus trāns agrum currit.*","a":["The horse runs across the field.","The horse is running across the field.","The horse does run across the field."],"w":"The preposition decides the case of the noun after it."},
     {"k":"la","p":"Translate into Latin: The girl sits near the house.","a":["Puella prope casam sedet."],"w":"The preposition decides the case of the noun after it."},
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
     {"k":"la","p":"Write the accusative plural of *puella*.","a":["puellās"],"w":"The accusative plural of *puella* is *puellās*."},
     {"k":"la","p":"Write the accusative singular of *amīcus*.","a":["amīcum"],"w":"The accusative singular of *amīcus* is *amīcum*."},
     {"k":"la","p":"Write the nominative plural of *dōnum*.","a":["dōna"],"w":"The nominative plural of *dōnum* is *dōna*."},
     {"k":"la","p":"Write the dative singular of *nauta*.","a":["nautae"],"w":"The dative singular of *nauta* is *nautae*."},
     {"k":"la","p":"Write the accusative singular of *ager*.","a":["agrum"],"w":"The accusative singular of *ager* is *agrum*."},
     {"k":"la","p":"Write the ablative plural of *puer*.","a":["puerīs"],"w":"The ablative plural of *puer* is *puerīs*."},
     {"k":"la","p":"Write the ablative singular of *via*.","a":["viā"],"w":"The ablative singular of *via* is *viā*.","m":1},
     {"k":"la","p":"Write the nominative plural of *magister*.","a":["magistrī"],"w":"The nominative plural of *magister* is *magistrī*."},
     {"k":"la","p":"Write the genitive plural of *fēmina*.","a":["fēminārum"],"w":"The genitive plural of *fēmina* is *fēminārum*."},
     {"k":"la","p":"Write the genitive plural of *templum*.","a":["templōrum"],"w":"The genitive plural of *templum* is *templōrum*."},
    ]},
    {s:"Identify the possible cases of an ambiguous noun form",b:[
     {"k":"mc","p":"*puellae* could be...","o":["genitive singular, dative singular or nominative plural","only nominative plural","accusative plural or dative plural","ablative singular or accusative singular"],"a":0,"w":"1st declension -ae has three uses."},
     {"k":"mc","p":"*amīcī* could be...","o":["genitive singular or nominative plural","dative singular or accusative plural","only nominative plural","ablative plural or dative plural"],"a":0,"w":"2nd declension -ī has two uses."},
     {"k":"mc","p":"*dōna* could be...","o":["nominative plural or accusative plural","nominative singular","ablative singular","genitive plural"],"a":0,"w":"Neuter plural nominative and accusative end in -a."},
     {"k":"mc","p":"*amīcō* could be...","o":["dative singular or ablative singular","accusative plural","nominative singular","genitive plural"],"a":0,"w":"2nd declension -ō has two uses."},
     {"k":"mc","p":"*puellīs* could be...","o":["dative plural or ablative plural","accusative plural","genitive singular","nominative plural"],"a":0,"w":"-īs has two uses."},
     {"k":"mc","p":"*dōnum* could be...","o":["nominative singular or accusative singular","only accusative singular","genitive plural","dative singular"],"a":0,"w":"Neuter nominative and accusative match."},
     {"k":"mc","p":"*puellārum* is...","o":["genitive plural","dative plural","accusative plural","ablative plural"],"a":0,"w":"-ārum is 1st declension genitive plural."},
     {"k":"mc","p":"*virōrum* is...","o":["genitive plural","accusative plural","dative plural","nominative plural"],"a":0,"w":"-ōrum is 2nd declension genitive plural."},
     {"k":"mc","p":"*nautam* is...","o":["accusative singular","nominative singular","genitive plural","accusative plural"],"a":0,"w":"-am is accusative singular, even for a masculine noun."},
     {"k":"mc","p":"*agrōs* is...","o":["accusative plural","dative plural","nominative plural","genitive plural"],"a":0,"w":"-ōs is accusative plural."},
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
     {"k":"mc","p":"Choose: *puella ___* (good)","o":["*bona*","*bonus*","*bonum*","*bonam*"],"a":0,"w":"Feminine nominative singular."},
     {"k":"mc","p":"Choose: *nauta ___* (good)","o":["*bonus*","*bona*","*bonum*","*bonam*"],"a":0,"w":"*nauta* is masculine."},
     {"k":"mc","p":"Choose: *dōna ___* (good)","o":["*bona*","*bonae*","*bonī*","*bonum*"],"a":0,"w":"Neuter plural nominative or accusative."},
     {"k":"mc","p":"Choose: *amīcōs ___* (happy)","o":["*laetōs*","*laetās*","*laetī*","*laetīs*"],"a":0,"w":"Masculine accusative plural."},
     {"k":"mc","p":"Choose: *agricolam ___* (tired)","o":["*fessum*","*fessam*","*fessa*","*fessus*"],"a":0,"w":"*agricola* is masculine, so accusative -um."},
     {"k":"mc","p":"Choose: *puellīs ___* (happy)","o":["*laetīs*","*laetās*","*laetae*","*laetōrum*"],"a":0,"w":"Dative or ablative plural."},
     {"k":"mc","p":"Choose: *viā ___* (wide)","o":["*lātā*","*lātam*","*lātō*","*lātus*"],"a":0,"w":"Feminine ablative singular."},
     {"k":"mc","p":"Choose: *poētae ___* (famous, nominative plural)","o":["*clārī*","*clārae*","*clāra*","*clārōs*"],"a":0,"w":"*poēta* is masculine."},
     {"k":"mc","p":"Choose: *templum ___* (ancient)","o":["*antīquum*","*antīquus*","*antīqua*","*antīquam*"],"a":0,"w":"Neuter singular."},
     {"k":"mc","p":"Choose: *vīrus ___* (bad)","o":["*malum*","*malus*","*mala*","*malī*"],"a":0,"w":"*vīrus* is neuter despite its -us."},
    ]},
    {s:"Translate a sentence with an adjective",b:[
     {"k":"en","p":"Translate into English: *Puella bona rosam portat.*","a":["The good girl carries the rose.","The good girl is carrying the rose.","The good girl does carry the rose."],"w":"Each adjective agrees with its noun in gender, number and case."},
     {"k":"la","p":"Translate into Latin: The tired sailor sleeps.","a":["Nauta fessus dormit."],"w":"Each adjective agrees with its noun in gender, number and case."},
     {"k":"en","p":"Translate into English: *Agricolae laetī labōrant.*","a":["The happy farmers work.","The happy farmers are working.","The happy farmers do work."],"w":"Each adjective agrees with its noun in gender, number and case."},
     {"k":"la","p":"Translate into Latin: The woman reads the new book.","a":["Fēmina novum librum legit."],"w":"Each adjective agrees with its noun in gender, number and case."},
     {"k":"en","p":"Translate into English: *Puer parvus magnum equum spectat.*","a":["The small boy watches the great horse.","The small boy watches the big horse.","The small boy is watching the great horse.","The small boy is watching the big horse.","The small boy does watch the great horse.","The small boy does watch the big horse."],"w":"Each adjective agrees with its noun in gender, number and case."},
     {"k":"la","p":"Translate into Latin: The famous queen praises the honest sailors.","a":["Rēgīna clāra nautās probōs laudat."],"w":"Each adjective agrees with its noun in gender, number and case."},
     {"k":"en","p":"Translate into English: *Virī īrātī pugnant.*","a":["The angry men fight.","The angry men are fighting.","The angry men do fight."],"w":"Each adjective agrees with its noun in gender, number and case."},
     {"k":"la","p":"Translate into Latin: The wretched poet writes a story.","a":["Poēta miser fābulam scrībit."],"w":"Each adjective agrees with its noun in gender, number and case."},
     {"k":"en","p":"Translate into English: *Dea pulchra templum antīquum servat.*","a":["The beautiful goddess saves the ancient temple.","The beautiful goddess is saving the ancient temple.","The beautiful goddess does save the ancient temple."],"w":"Each adjective agrees with its noun in gender, number and case."},
     {"k":"la","p":"Translate into Latin: The good friends give the girl gifts.","a":["Amīcī bonī puellae dōna dant."],"w":"Each adjective agrees with its noun in gender, number and case."},
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
     {"k":"la","p":"Write the vocative singular of *Marcus*.","a":["Marce"],"w":"-us becomes -e."},
     {"k":"la","p":"Write the vocative singular of *amīcus*.","a":["amīce"],"w":"-us becomes -e."},
     {"k":"la","p":"Write the vocative singular of *fīlius*.","a":["fīlī"],"w":"*fīlius* becomes *fīlī*."},
     {"k":"la","p":"Write the vocative singular of *Vergilius*.","a":["Vergilī"],"w":"Names in -ius become -ī."},
     {"k":"la","p":"Write the vocative singular of *puella*.","a":["puella"],"w":"Same as the nominative."},
     {"k":"la","p":"Write the vocative singular of *servus*.","a":["serve"],"w":"-us becomes -e."},
     {"k":"la","p":"Write the vocative singular of *puer*.","a":["puer"],"w":"Same as the nominative."},
     {"k":"la","p":"Write the vocative plural of *amīcus*.","a":["amīcī"],"w":"Plurals match the nominative."},
     {"k":"la","p":"Write the vocative singular of *dominus*.","a":["domine"],"w":"-us becomes -e."},
     {"k":"la","p":"Write the vocative singular of *Tiberius*.","a":["Tiberī"],"w":"Names in -ius become -ī."},
    ]},
    {s:"Translate a sentence with a vocative or a noun in apposition",b:[
     {"k":"en","p":"Translate into English: *Amīce, puellam vidēs.*","a":["Friend, you see the girl.","Friend, you are seeing the girl.","Friend, you do see the girl."],"w":"A vocative names the person spoken to. A noun in apposition matches the case of the noun it renames."},
     {"k":"la","p":"Translate into Latin: Marcus, the sailor, works.","a":["Marcus, nauta, labōrat."],"w":"A vocative names the person spoken to. A noun in apposition matches the case of the noun it renames."},
     {"k":"en","p":"Translate into English: *Puellae, rosās portātis.*","a":["Girls, you carry the roses.","Girls, you are carrying the roses.","Girls, you do carry the roses."],"w":"A vocative names the person spoken to. A noun in apposition matches the case of the noun it renames."},
     {"k":"la","p":"Translate into Latin: They call Marcus, the slave.","a":["Marcum, servum, vocant."],"w":"A vocative names the person spoken to. A noun in apposition matches the case of the noun it renames."},
     {"k":"en","p":"Translate into English: *Serve, labōrās.*","a":["Slave, you work.","Slave, you are working.","Slave, you do work."],"w":"A vocative names the person spoken to. A noun in apposition matches the case of the noun it renames."},
     {"k":"la","p":"Translate into Latin: I give Julia, the friend, a rose.","a":["Iūliae, amīcae, rosam dō."],"w":"A vocative names the person spoken to. A noun in apposition matches the case of the noun it renames."},
     {"k":"en","p":"Translate into English: *Fīlī, epistulam legis.*","a":["Son, you read the letter.","Son, you are reading the letter.","Son, you do read the letter."],"w":"A vocative names the person spoken to. A noun in apposition matches the case of the noun it renames."},
     {"k":"la","p":"Translate into Latin: Vergil, the poet, writes.","a":["Vergilius, poēta, scrībit."],"w":"A vocative names the person spoken to. A noun in apposition matches the case of the noun it renames."},
     {"k":"en","p":"Translate into English: *Domine, equum servō.*","a":["Master, I save the horse.","Master, I am saving the horse.","Master, I do save the horse."],"w":"A vocative names the person spoken to. A noun in apposition matches the case of the noun it renames."},
     {"k":"la","p":"Translate into Latin: We praise Flavia, the queen.","a":["Flāviam, rēgīnam, laudāmus."],"w":"A vocative names the person spoken to. A noun in apposition matches the case of the noun it renames."},
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
     {"k":"mc","p":"*ex silvā venit*: which use?","o":["place from which","separation"],"a":0,"w":"Coming out of a place is motion."},
     {"k":"mc","p":"*nautās culpā līberat*: which use?","o":["separation","place from which"],"a":0,"w":"Freeing from blame is separation."},
     {"k":"mc","p":"*Rōmā venit*: which use?","o":["place from which","separation"],"a":0,"w":"Motion from a town, with no preposition."},
     {"k":"mc","p":"*agricolam perīculō prohibet*: which use?","o":["separation","place from which"],"a":0,"w":"Keeping from danger is separation."},
     {"k":"mc","p":"*ab īnsulā nāvigant*: which use?","o":["place from which","separation"],"a":0,"w":"Sailing away from a place is motion."},
     {"k":"mc","p":"*puellam cūrā līberant*: which use?","o":["separation","place from which"],"a":0,"w":"Freeing from worry is separation."},
     {"k":"mc","p":"*ā casā ambulat*: which use?","o":["place from which","separation"],"a":0,"w":"Walking away from a place is motion."},
     {"k":"mc","p":"*puerōs īrā prohibet*: which use?","o":["separation","place from which"],"a":0,"w":"Keeping from anger is separation."},
     {"k":"mc","p":"*Corinthō discēdunt*: which use?","o":["place from which","separation"],"a":0,"w":"Leaving a town, with no preposition."},
     {"k":"mc","p":"*servōs perīculō līberāmus*: which use?","o":["separation","place from which"],"a":0,"w":"Freeing from danger is separation."},
    ]},
    {s:"Translate a sentence with an ablative of place from which or separation",b:[
     {"k":"en","p":"Translate into English: *Agricola ex silvā venit.*","a":["The farmer comes out of the forest.","The farmer is coming out of the forest.","The farmer does come out of the forest."],"w":"Both uses mean away from. Separation with things usually has no preposition."},
     {"k":"la","p":"Translate into Latin: The queen frees the sailors from blame.","a":["Rēgīna nautās culpā līberat."],"w":"Both uses mean away from. Separation with things usually has no preposition."},
     {"k":"en","p":"Translate into English: *Nautae ab īnsulā nāvigant.*","a":["The sailors sail away from the island.","The sailors are sailing away from the island.","The sailors do sail away from the island."],"w":"Both uses mean away from. Separation with things usually has no preposition."},
     {"k":"la","p":"Translate into Latin: The goddess keeps the boy from danger.","a":["Dea puerum perīculō prohibet."],"w":"Both uses mean away from. Separation with things usually has no preposition."},
     {"k":"en","p":"Translate into English: *Servī ā casā currunt.*","a":["The slaves run away from the house.","The slaves are running away from the house.","The slaves do run away from the house."],"w":"Both uses mean away from. Separation with things usually has no preposition."},
     {"k":"la","p":"Translate into Latin: We free the girl from care.","a":["Puellam cūrā līberāmus."],"w":"Both uses mean away from. Separation with things usually has no preposition."},
     {"k":"en","p":"Translate into English: *Rōmā discēdit.*","a":["He departs from Rome.","He is departing from Rome.","He does depart from Rome.","She departs from Rome.","She is departing from Rome.","She does depart from Rome."],"w":"Both uses mean away from. Separation with things usually has no preposition."},
     {"k":"la","p":"Translate into Latin: The woman keeps the son from danger.","a":["Fēmina fīlium perīculō prohibet."],"w":"Both uses mean away from. Separation with things usually has no preposition."},
     {"k":"en","p":"Translate into English: *Virī ex oppidō ambulant.*","a":["The men walk out of the town.","The men are walking out of the town.","The men do walk out of the town."],"w":"Both uses mean away from. Separation with things usually has no preposition."},
     {"k":"la","p":"Translate into Latin: The teacher frees the students from blame.","a":["Magister discipulōs culpā līberat."],"w":"Both uses mean away from. Separation with things usually has no preposition."},
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
     {"k":"mc","p":"Choose: The girl is praised by the queen.","o":["*ā rēgīnā*","*rēgīnā*","*cum rēgīnā*"],"a":0,"w":"A person with a passive verb takes *ā/ab*."},
     {"k":"mc","p":"Choose: He fights with a sword.","o":["*gladiō*","*ā gladiō*","*cum gladiō*"],"a":0,"w":"A tool takes no preposition."},
     {"k":"mc","p":"Choose: They are frightened by arrows.","o":["*sagittīs*","*ā sagittīs*","*cum sagittīs*"],"a":0,"w":"A thing takes no preposition."},
     {"k":"mc","p":"Choose: The boy is called by a friend.","o":["*ab amīcō*","*amīcō*","*cum amīcō*"],"a":0,"w":"A person takes *ā/ab*."},
     {"k":"mc","p":"*Puer ā magistrō docētur*: what does *ā magistrō* show?","o":["personal agent","means","accompaniment"],"a":0,"w":"A person doing a passive action."},
     {"k":"mc","p":"*Hastā terret*: what does *hastā* show?","o":["means","personal agent","accompaniment"],"a":0,"w":"A thing used as a tool."},
     {"k":"mc","p":"*Puella ā nautā servātur*: what does *ā nautā* show?","o":["personal agent","means","accompaniment"],"a":0,"w":"A person doing a passive action."},
     {"k":"mc","p":"*Tēlīs superantur*: what does *tēlīs* show?","o":["means","personal agent","place where"],"a":0,"w":"Spears are the tools."},
     {"k":"mc","p":"Choose: The town is defended by the sailors.","o":["*ā nautīs*","*nautīs*","*cum nautīs*"],"a":0,"w":"People take *ā/ab*."},
     {"k":"mc","p":"Choose: The farmer is frightened by the sword.","o":["*gladiō*","*ā gladiō*","*cum gladiō*"],"a":0,"w":"A thing takes no preposition."},
    ]},
    {s:"Translate a sentence with an ablative of agent or means",b:[
     {"k":"en","p":"Translate into English: *Puella ā rēgīnā laudātur.*","a":["The girl is praised by the queen.","The girl is being praised by the queen."],"w":"A person with a passive verb takes ā/ab. A thing takes no preposition."},
     {"k":"la","p":"Translate into Latin: The man fights with a sword.","a":["Vir gladiō pugnat."],"w":"A person with a passive verb takes ā/ab. A thing takes no preposition."},
     {"k":"en","p":"Translate into English: *Nautae ab amīcīs vocantur.*","a":["The sailors are called by the friends.","The sailors are being called by the friends."],"w":"A person with a passive verb takes ā/ab. A thing takes no preposition."},
     {"k":"la","p":"Translate into Latin: The women are frightened by arrows.","a":["Fēminae sagittīs terrentur."],"w":"A person with a passive verb takes ā/ab. A thing takes no preposition."},
     {"k":"en","p":"Translate into English: *Puer ā magistrō docētur.*","a":["The boy is taught by the teacher.","The boy is being taught by the teacher."],"w":"A person with a passive verb takes ā/ab. A thing takes no preposition."},
     {"k":"la","p":"Translate into Latin: The farmer defends the town with a spear.","a":["Agricola hastā oppidum dēfendit."],"w":"A person with a passive verb takes ā/ab. A thing takes no preposition."},
     {"k":"en","p":"Translate into English: *Servī ā dominō pūniuntur.*","a":["The slaves are punished by the master.","The slaves are being punished by the master."],"w":"A person with a passive verb takes ā/ab. A thing takes no preposition."},
     {"k":"la","p":"Translate into Latin: The Romans overcome the barbarians with spears.","a":["Rōmānī barbarōs tēlīs superant."],"w":"A person with a passive verb takes ā/ab. A thing takes no preposition."},
     {"k":"en","p":"Translate into English: *Equus ab agricolā servātur.*","a":["The horse is saved by the farmer.","The horse is being saved by the farmer."],"w":"A person with a passive verb takes ā/ab. A thing takes no preposition."},
     {"k":"la","p":"Translate into Latin: The island is guarded by the sailors.","a":["Īnsula ā nautīs custōdītur."],"w":"A person with a passive verb takes ā/ab. A thing takes no preposition."},
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
     {"k":"mc","p":"*cum amīcō ambulat*","o":["accompaniment","manner","means","cause"],"a":0,"w":"A person who goes along."},
     {"k":"mc","p":"*cum cūrā labōrat*","o":["manner","accompaniment","means","cause"],"a":0,"w":"How she works."},
     {"k":"mc","p":"*in silvā habitat*","o":["place where","place from which","manner","cause"],"a":0,"w":"Where he lives."},
     {"k":"mc","p":"*gaudiō currit*","o":["cause","means","manner","place where"],"a":0,"w":"Why he runs, with no preposition."},
     {"k":"mc","p":"*gladiō pugnat*","o":["means","cause","manner","accompaniment"],"a":0,"w":"A tool, with no preposition."},
     {"k":"mc","p":"*cum puellīs nāvigant*","o":["accompaniment","manner","means","cause"],"a":0,"w":"People who go along."},
     {"k":"mc","p":"*īrā pugnat*","o":["cause","means","manner","accompaniment"],"a":0,"w":"Why he fights."},
     {"k":"mc","p":"*cum gaudiō scrībit*","o":["manner","cause","accompaniment","means"],"a":0,"w":"How she writes."},
     {"k":"mc","p":"*Athēnīs labōrat*","o":["place where","place from which","cause","means"],"a":0,"w":"In a plural-named town."},
     {"k":"mc","p":"*in agrō labōrant*","o":["place where","place from which","means","manner"],"a":0,"w":"Where they work."},
    ]},
    {s:"Translate a sentence using accompaniment, manner, place where or cause",b:[
     {"k":"en","p":"Translate into English: *Puer cum amīcō ambulat.*","a":["The boy walks with the friend.","The boy is walking with the friend.","The boy does walk with the friend."],"w":"Cum with a person is accompaniment, cum with an abstract noun is manner, in with a place is place where, and a noun with no preposition giving the reason is cause."},
     {"k":"la","p":"Translate into Latin: The woman works with care.","a":["Fēmina cum cūrā labōrat."],"w":"Cum with a person is accompaniment, cum with an abstract noun is manner, in with a place is place where, and a noun with no preposition giving the reason is cause."},
     {"k":"en","p":"Translate into English: *Agricola in agrō labōrat.*","a":["The farmer works in the field.","The farmer is working in the field.","The farmer does work in the field."],"w":"Cum with a person is accompaniment, cum with an abstract noun is manner, in with a place is place where, and a noun with no preposition giving the reason is cause."},
     {"k":"la","p":"Translate into Latin: The girl runs from joy.","a":["Puella gaudiō currit."],"w":"Cum with a person is accompaniment, cum with an abstract noun is manner, in with a place is place where, and a noun with no preposition giving the reason is cause."},
     {"k":"en","p":"Translate into English: *Nauta cum puellīs nāvigat.*","a":["The sailor sails with the girls.","The sailor is sailing with the girls.","The sailor does sail with the girls."],"w":"Cum with a person is accompaniment, cum with an abstract noun is manner, in with a place is place where, and a noun with no preposition giving the reason is cause."},
     {"k":"la","p":"Translate into Latin: The man fights from anger.","a":["Vir īrā pugnat."],"w":"Cum with a person is accompaniment, cum with an abstract noun is manner, in with a place is place where, and a noun with no preposition giving the reason is cause."},
     {"k":"en","p":"Translate into English: *Virī in silvā habitant.*","a":["The men live in the forest.","The men are living in the forest.","The men do live in the forest."],"w":"Cum with a person is accompaniment, cum with an abstract noun is manner, in with a place is place where, and a noun with no preposition giving the reason is cause."},
     {"k":"la","p":"Translate into Latin: The poet writes with joy.","a":["Poēta cum gaudiō scrībit."],"w":"Cum with a person is accompaniment, cum with an abstract noun is manner, in with a place is place where, and a noun with no preposition giving the reason is cause."},
     {"k":"en","p":"Translate into English: *Athēnīs labōrāmus.*","a":["We work in Athens.","We are working in Athens.","We do work in Athens."],"w":"Cum with a person is accompaniment, cum with an abstract noun is manner, in with a place is place where, and a noun with no preposition giving the reason is cause."},
     {"k":"la","p":"Translate into Latin: He lives at Rome.","a":["Rōmae habitat."],"w":"Cum with a person is accompaniment, cum with an abstract noun is manner, in with a place is place where, and a noun with no preposition giving the reason is cause."},
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
     {"k":"mc","p":"Choose: to Rome","o":["*Rōmam*","*Rōmā*","*Rōmae*","*ad Rōmā*"],"a":0,"w":"Town name, accusative, no preposition."},
     {"k":"mc","p":"Choose: from Rome","o":["*Rōmā*","*Rōmam*","*Rōmae*","*ab Rōmam*"],"a":0,"w":"Town name, ablative, no preposition."},
     {"k":"mc","p":"Choose: at Rome","o":["*Rōmae*","*Rōmam*","*Rōmā*","*ad Rōmam*"],"a":0,"w":"The locative."},
     {"k":"mc","p":"Choose: to the forest","o":["*ad silvam*","*silvam*","*ad silvā*","*in silvā*"],"a":0,"w":"Ordinary places need a preposition."},
     {"k":"mc","p":"Choose: into the cave","o":["*in cavernam*","*in cavernā*","*cavernam*","*ad cavernā*"],"a":0,"w":"Motion into takes the accusative."},
     {"k":"mc","p":"Choose: in the cave","o":["*in cavernā*","*in cavernam*","*cavernā*","*ad cavernam*"],"a":0,"w":"Location takes the ablative."},
     {"k":"mc","p":"Choose: to Athens","o":["*Athēnās*","*Athēnīs*","*ad Athēnīs*","*Athēnārum*"],"a":0,"w":"*Athēnae* is plural: accusative -ās."},
     {"k":"mc","p":"Choose: in Athens","o":["*Athēnīs*","*Athēnās*","*Athēnae*","*in Athēnās*"],"a":0,"w":"A plural town name takes the ablative alone."},
     {"k":"mc","p":"Choose: to Crete","o":["*Crētam*","*Crētā*","*Crētae*","*in Crētā*"],"a":0,"w":"A small island works like a town."},
     {"k":"mc","p":"Choose: from Corinth","o":["*Corinthō*","*Corinthum*","*Corinthī*","*ab Corinthum*"],"a":0,"w":"Town name, ablative, no preposition."},
    ]},
    {s:"Translate a sentence about going to or coming from a place",b:[
     {"k":"en","p":"Translate into English: *Nauta Rōmam nāvigat.*","a":["The sailor sails to Rome.","The sailor is sailing to Rome.","The sailor does sail to Rome."],"w":"Place to which uses the accusative, with no preposition for towns and small islands."},
     {"k":"la","p":"Translate into Latin: The girl walks to the cave.","a":["Puella ad cavernam ambulat."],"w":"Place to which uses the accusative, with no preposition for towns and small islands."},
     {"k":"en","p":"Translate into English: *Virī Athēnās festīnant.*","a":["The men hurry to Athens.","The men are hurrying to Athens.","The men do hurry to Athens."],"w":"Place to which uses the accusative, with no preposition for towns and small islands."},
     {"k":"la","p":"Translate into Latin: The boys run into the forest.","a":["Puerī in silvam currunt."],"w":"Place to which uses the accusative, with no preposition for towns and small islands."},
     {"k":"en","p":"Translate into English: *Fēminae Crētam nāvigant.*","a":["The women sail to Crete.","The women are sailing to Crete.","The women do sail to Crete."],"w":"Place to which uses the accusative, with no preposition for towns and small islands."},
     {"k":"la","p":"Translate into Latin: The farmer comes to the farmhouse.","a":["Agricola ad vīllam venit."],"w":"Place to which uses the accusative, with no preposition for towns and small islands."},
     {"k":"en","p":"Translate into English: *Corinthum ambulāmus.*","a":["We walk to Corinth.","We are walking to Corinth.","We do walk to Corinth."],"w":"Place to which uses the accusative, with no preposition for towns and small islands."},
     {"k":"la","p":"Translate into Latin: The sailors sail into the island.","a":["Nautae in īnsulam nāvigant."],"w":"Place to which uses the accusative, with no preposition for towns and small islands."},
     {"k":"en","p":"Translate into English: *Rēgīna Thēbās venit.*","a":["The queen comes to Thebes.","The queen is coming to Thebes.","The queen does come to Thebes."],"w":"Place to which uses the accusative, with no preposition for towns and small islands."},
     {"k":"la","p":"Translate into Latin: The slave runs into the inn.","a":["Servus in tabernam currit."],"w":"Place to which uses the accusative, with no preposition for towns and small islands."},
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
     {"k":"mc","p":"How do you turn *Puella venit* into a question?","o":["*Venitne puella?*","*Puella venit ne*","*Quis puella venit?*","*Ne puella venit*"],"a":0,"w":"-ne attaches to the first word."},
     {"k":"mc","p":"What does -ne translate to in English?","o":["Nothing: it only marks a question","not","who","and"],"a":0,"w":"-ne is a question signal."},
     {"k":"mc","p":"What does *quis* mean?","o":["who","what kind","why","where"],"a":0,"w":"*quis* asks who."},
     {"k":"mc","p":"Which is correct for \"Who is walking?\"","o":["*Quis ambulat?*","*Quisne ambulat?*","*Quis ambulant?*","*Ambulatne quis?*"],"a":0,"w":"*quis* takes a singular verb, without -ne."},
     {"k":"mc","p":"In *Audīsne puellam?*, what is the subject?","o":["you","the girl","she","we"],"a":0,"w":"-s in *audīs* means you."},
     {"k":"mc","p":"*Dormitne puer?* means...","o":["Is the boy sleeping?","The boy is sleeping.","Who is sleeping?","The boy is not sleeping."],"a":0,"w":"-ne makes a yes or no question."},
     {"k":"mc","p":"Where does -ne usually go?","o":["On the first word of the sentence","On the last word","On the subject only","On the verb only"],"a":0,"w":"Any first word can take it."},
     {"k":"mc","p":"Which is correct for \"Does the farmer work?\"","o":["*Labōratne agricola?*","*Labōrat agricola ne?*","*Quis labōrat agricola?*","*Labōrantne agricola?*"],"a":0,"w":"A singular verb with -ne on the first word."},
     {"k":"mc","p":"*Quis portat?* means...","o":["Who carries?","Does he carry?","What carries him?","Why does he carry?"],"a":0,"w":"*quis* means who."},
     {"k":"mc","p":"What is -ne called, since it attaches to another word?","o":["an enclitic","an infinitive","a declension","a vocative"],"a":0,"w":"An enclitic leans on the word before it."},
    ]},
    {s:"Translate a Latin question",b:[
     {"k":"en","p":"Translate into English: *Venitne puella?*","a":["Is the girl coming?","Does the girl come?"],"w":"-ne marks a yes or no question and quis asks who."},
     {"k":"la","p":"Translate into Latin: Who comes?","a":["Quis venit?"],"w":"-ne marks a yes or no question and quis asks who."},
     {"k":"en","p":"Translate into English: *Nautamne vidēs?*","a":["Do you see the sailor?","Are you seeing the sailor?"],"w":"-ne marks a yes or no question and quis asks who."},
     {"k":"la","p":"Translate into Latin: Who calls the sailor?","a":["Quis nautam vocat?"],"w":"-ne marks a yes or no question and quis asks who."},
     {"k":"en","p":"Translate into English: *Dormitne puer?*","a":["Is the boy sleeping?","Does the boy sleep?"],"w":"-ne marks a yes or no question and quis asks who."},
     {"k":"la","p":"Translate into Latin: Who works?","a":["Quis labōrat?"],"w":"-ne marks a yes or no question and quis asks who."},
     {"k":"en","p":"Translate into English: *Audiuntne puellae?*","a":["Are the girls listening?","Are the girls hearing?","Do the girls hear?"],"w":"-ne marks a yes or no question and quis asks who."},
     {"k":"la","p":"Translate into Latin: Who warns the farmer?","a":["Quis agricolam monet?"],"w":"-ne marks a yes or no question and quis asks who."},
     {"k":"en","p":"Translate into English: *Rosamne portās?*","a":["Are you carrying the rose?","Do you carry the rose?"],"w":"-ne marks a yes or no question and quis asks who."},
     {"k":"la","p":"Translate into Latin: Who writes the story?","a":["Quis fābulam scrībit?"],"w":"-ne marks a yes or no question and quis asks who."},
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
     {"k":"mc","p":"Rewrite *puella et nauta* with -que.","o":["*puella nautaque*","*puellaque nauta*","*que puella nauta*","*puella que nauta*"],"a":0,"w":"-que goes on the second word."},
     {"k":"mc","p":"In *fēminae virīque*, what does -que mean?","o":["and","also not","but","or"],"a":0,"w":"-que means and."},
     {"k":"mc","p":"*Amīcus et servus* needs what kind of verb?","o":["plural","singular","passive","infinitive"],"a":0,"w":"Two subjects make a plural."},
     {"k":"mc","p":"Where do you put \"and\" in *agrōs silvāsque*?","o":["fields and forests","and fields forests","forests and fields","fields forests and"],"a":0,"w":"Translate and before the word with -que."},
     {"k":"mc","p":"*Puer puellaque* means...","o":["the boy and the girl","the boy of the girl","the boy or the girl","the girl and the boy of"],"a":0,"w":"-que joins the two."},
     {"k":"mc","p":"Which is correct?","o":["*Nautae agricolaeque labōrant*","*Nautaeque que agricolae labōrant*","*Nautae agricolae et que labōrant*","*Que nautae agricolae labōrant*"],"a":0,"w":"One -que on the second word."},
     {"k":"mc","p":"How does *et* differ from -que in position?","o":["*et* goes between the words, -que goes on the second word","*et* goes on the first word","-que goes on the first word","They are always the same"],"a":0,"w":"That is their only difference here."},
     {"k":"mc","p":"Does *rosam corōnamque* have the same case on both nouns?","o":["Yes, both are accusative","No, one is dative","No, one is nominative","No, -que changes the case"],"a":0,"w":"Joined nouns share a job."},
     {"k":"mc","p":"*Vir fēminaque* as a subject would need which verb ending?","o":["-nt","-t","-s","-mus"],"a":0,"w":"Two subjects need a plural verb."},
     {"k":"mc","p":"-que is an example of...","o":["an enclitic","a preposition","a declension","an infinitive"],"a":0,"w":"It attaches to a word."},
    ]},
    {s:"Translate a sentence with et or -que",b:[
     {"k":"en","p":"Translate into English: *Puella et nauta ambulant.*","a":["The girl and the sailor walk.","The girl and the sailor are walking.","The girl and the sailor do walk."],"w":"et goes between the words, and -que attaches to the second word. Both mean and."},
     {"k":"la","p":"Translate into Latin: The boy and the girl run.","a":["Puer puellaque currunt."],"w":"et goes between the words, and -que attaches to the second word. Both mean and."},
     {"k":"en","p":"Translate into English: *Agricola equum et servum vocat.*","a":["The farmer calls the horse and the slave.","The farmer is calling the horse and the slave.","The farmer does call the horse and the slave."],"w":"et goes between the words, and -que attaches to the second word. Both mean and."},
     {"k":"la","p":"Translate into Latin: The queen praises the sailors and the farmers.","a":["Rēgīna nautās agricolāsque laudat."],"w":"et goes between the words, and -que attaches to the second word. Both mean and."},
     {"k":"en","p":"Translate into English: *Fēminae et virī veniunt.*","a":["The women and the men come.","The women and the men are coming.","The women and the men do come."],"w":"et goes between the words, and -que attaches to the second word. Both mean and."},
     {"k":"la","p":"Translate into Latin: The friend carries the rose and the crown.","a":["Amīcus rosam corōnamque portat."],"w":"et goes between the words, and -que attaches to the second word. Both mean and."},
     {"k":"en","p":"Translate into English: *Magister et discipulī labōrant.*","a":["The teacher and the students work.","The teacher and the students are working.","The teacher and the students do work."],"w":"et goes between the words, and -que attaches to the second word. Both mean and."},
     {"k":"la","p":"Translate into Latin: The girls and the boys hear.","a":["Puellae puerīque audiunt."],"w":"et goes between the words, and -que attaches to the second word. Both mean and."},
     {"k":"en","p":"Translate into English: *Dominus servum et equum videt.*","a":["The master sees the slave and the horse.","The master is seeing the slave and the horse.","The master does see the slave and the horse."],"w":"et goes between the words, and -que attaches to the second word. Both mean and."},
     {"k":"la","p":"Translate into Latin: The man and the woman sail.","a":["Vir fēminaque nāvigant."],"w":"et goes between the words, and -que attaches to the second word. Both mean and."},
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
     {"k":"mc","p":"In *Puella rosam, puer librum portat*, what is the verb for *puer*?","o":["*portat*","*rosam*","*librum*","There is none"],"a":0,"w":"One verb serves both clauses."},
     {"k":"mc","p":"In *Nauta aquam, agricola cibum portat*, what does the farmer carry?","o":["food","water","a sailor","nothing"],"a":0,"w":"*cibum* is the accusative in his clause."},
     {"k":"mc","p":"What word is usually gapped?","o":["the verb","the subject","the preposition","the adjective"],"a":0,"w":"The verb is the word most often left out."},
     {"k":"mc","p":"In *Fēmina epistulam, vir librum legit*, who reads the book?","o":["the man","the woman","both of them equally","no one"],"a":0,"w":"*vir* is nominative in the clause with *librum*."},
     {"k":"mc","p":"What kind of noun does *puer* pair with in *Puella rosam, puer librum portat*?","o":["the other nominative, *puella*","the accusative *rosam*","the verb","the accusative *librum*"],"a":0,"w":"Parallel clauses match case by case."},
     {"k":"mc","p":"In *Dominus equum, servus hastam tenet*, what does the slave hold?","o":["a spear","a horse","the master","nothing"],"a":0,"w":"*hastam* goes with *servus*."},
     {"k":"mc","p":"Does the English need the verb repeated?","o":["It may be repeated or left out","It must be left out","It must be changed","Only with a plural"],"a":0,"w":"Both English versions are correct."},
     {"k":"mc","p":"In *Puerī librōs, puellae rosās portant*, what do the girls carry?","o":["roses","books","boys","nothing"],"a":0,"w":"*rosās* follows *puellae*."},
     {"k":"mc","p":"Which sentence shows gapping?","o":["*Nauta aquam, puer cibum portat*","*Nauta aquam portat*","*Puer cibum portat*","*Nauta et puer veniunt*"],"a":0,"w":"Two clauses share a single verb."},
     {"k":"mc","p":"In *Fēmina hastam portat, vir gladium*, what is gapped?","o":["*portat*, in the second clause","*fēmina*","*hastam*","*vir*"],"a":0,"w":"The verb is understood after *gladium*."},
    ]},
    {s:"Translate a sentence with gapping",b:[
     {"k":"en","p":"Translate into English: *Puella rosam, puer librum portat.*","a":["The girl carries the rose, the boy the book.","The girl is carrying the rose, the boy the book.","The girl does carry the rose, the boy the book."],"w":"One verb is shared by both clauses."},
     {"k":"la","p":"Translate into Latin: The woman carries the spear, the man the sword.","a":["Fēmina hastam portat, vir gladium."],"w":"One verb is shared by both clauses."},
     {"k":"en","p":"Translate into English: *Nauta aquam, agricola cibum portat.*","a":["The sailor carries the water, the farmer the food.","The sailor is carrying the water, the farmer the food.","The sailor does carry the water, the farmer the food."],"w":"One verb is shared by both clauses."},
     {"k":"la","p":"Translate into Latin: The woman reads the letter, the man the book.","a":["Fēmina epistulam, vir librum legit."],"w":"One verb is shared by both clauses."},
     {"k":"en","p":"Translate into English: *Dominus equum, servus hastam tenet.*","a":["The master holds the horse, the slave the spear.","The master is holding the horse, the slave the spear.","The master does hold the horse, the slave the spear."],"w":"One verb is shared by both clauses."},
     {"k":"la","p":"Translate into Latin: The boys carry the books, the girls the roses.","a":["Puerī librōs, puellae rosās portant."],"w":"One verb is shared by both clauses."},
     {"k":"en","p":"Translate into English: *Rēgīna nautās, dominus servōs laudat.*","a":["The queen praises the sailors, the master the slaves.","The queen is praising the sailors, the master the slaves.","The queen does praise the sailors, the master the slaves."],"w":"One verb is shared by both clauses."},
     {"k":"la","p":"Translate into Latin: The farmer watches the field, the sailor the water.","a":["Agricola agrum spectat, nauta aquam."],"w":"One verb is shared by both clauses."},
     {"k":"en","p":"Translate into English: *Poēta fābulam, magister epistulam scrībit.*","a":["The poet writes the story, the teacher the letter.","The poet is writing the story, the teacher the letter.","The poet does write the story, the teacher the letter."],"w":"One verb is shared by both clauses."},
     {"k":"la","p":"Translate into Latin: The master gives a gift to the son, the queen to the daughter.","a":["Dominus fīliō, rēgīna fīliae dōnum dat."],"w":"One verb is shared by both clauses."},
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
     {"k":"la","p":"Write the adverb from *laetus*.","a":["laetē"],"w":"Stem plus -ē."},
     {"k":"la","p":"Write the adverb from *lentus*.","a":["lentē"],"w":"Stem plus -ē."},
     {"k":"la","p":"Write the adverb from *bonus*.","a":["bene"],"w":"This one is irregular."},
     {"k":"la","p":"Write the adverb from *malus*.","a":["male"],"w":"This one is irregular."},
     {"k":"la","p":"Write the adverb from *miser*.","a":["miserē"],"w":"Stem plus -ē."},
     {"k":"la","p":"Write the adverb from *pulcher*.","a":["pulchrē"],"w":"The stem is *pulchr-*."},
     {"k":"la","p":"Write the adverb from *saevus*.","a":["saevē"],"w":"Stem plus -ē."},
     {"k":"la","p":"Write the adverb from *probus*.","a":["probē"],"w":"Stem plus -ē."},
     {"k":"la","p":"Write the adverb from *maestus*.","a":["maestē"],"w":"Stem plus -ē."},
     {"k":"la","p":"Write the adverb from *avārus*.","a":["avārē"],"w":"Stem plus -ē."},
    ]},
    {s:"Translate a sentence with an adverb",b:[
     {"k":"en","p":"Translate into English: *Nauta lentē ambulat.*","a":["The sailor walks slowly.","The sailor is walking slowly.","The sailor does walk slowly."],"w":"An adverb describes the verb and never changes form."},
     {"k":"la","p":"Translate into Latin: The boy reads well.","a":["Puer bene legit."],"w":"An adverb describes the verb and never changes form."},
     {"k":"en","p":"Translate into English: *Puella laetē labōrat.*","a":["The girl works happily.","The girl is working happily.","The girl does work happily."],"w":"An adverb describes the verb and never changes form."},
     {"k":"la","p":"Translate into Latin: The woman sails often.","a":["Fēmina saepe nāvigat."],"w":"An adverb describes the verb and never changes form."},
     {"k":"en","p":"Translate into English: *Agricolae male labōrant.*","a":["The farmers work badly.","The farmers are working badly.","The farmers do work badly."],"w":"An adverb describes the verb and never changes form."},
     {"k":"la","p":"Translate into Latin: The poet writes beautifully.","a":["Poēta pulchrē scrībit."],"w":"An adverb describes the verb and never changes form."},
     {"k":"en","p":"Translate into English: *Virī saevē pugnant.*","a":["The men fight fiercely.","The men are fighting fiercely.","The men do fight fiercely."],"w":"An adverb describes the verb and never changes form."},
     {"k":"la","p":"Translate into Latin: We always work.","a":["Semper labōrāmus."],"w":"An adverb describes the verb and never changes form."},
     {"k":"en","p":"Translate into English: *Puellae maestē ambulant.*","a":["The girls walk sadly.","The girls are walking sadly.","The girls do walk sadly."],"w":"An adverb describes the verb and never changes form."},
     {"k":"la","p":"Translate into Latin: He comes today.","a":["Hodiē venit."],"w":"An adverb describes the verb and never changes form."},
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
     {"k":"mc","p":"*Sī labōrās, laudāris* is a...","o":["present condition","future condition"],"a":0,"w":"Both verbs are present."},
     {"k":"mc","p":"*Sī labōrābis, laudāberis* is a...","o":["future condition","present condition"],"a":0,"w":"Both verbs are future."},
     {"k":"mc","p":"What does *sī* mean?","o":["if","and","who","so"],"a":0,"w":"*sī* opens the condition."},
     {"k":"mc","p":"How is *sī veniet* best translated?","o":["if he comes","if he came","if he is coming from","he will come if"],"a":0,"w":"English uses a present for a Latin future here."},
     {"k":"mc","p":"Choose the main verb for *Sī puella labōrābit, nauta ___* (the sailor will praise).","o":["*laudābit*","*laudat*","*laudābat*","*laudāre*"],"a":0,"w":"A future condition has future verbs in both clauses."},
     {"k":"mc","p":"*Sī dormīs, nōn labōrās*: what tense are the verbs?","o":["present","future","imperfect","perfect"],"a":0,"w":"Both are present."},
     {"k":"mc","p":"*Sī mittent, vidēbimus*: what tense are the verbs?","o":["future","present","imperfect","perfect"],"a":0,"w":"*mittent* is 3rd conjugation future and *vidēbimus* has -bi-."},
     {"k":"mc","p":"Which clause does *sī* start?","o":["the if clause","the main clause","neither clause","both clauses"],"a":0,"w":"*sī* starts the if clause."},
     {"k":"mc","p":"Which is a future condition?","o":["*Sī veniēs, puellam vidēbō*","*Sī venīs, puellam videō*","*Sī venit, puellam videt*","*Sī venīmus, puellam vidēmus*"],"a":0,"w":"Both verbs have future forms."},
     {"k":"mc","p":"An open condition means...","o":["It may or may not be true","It is false","It happened in the past","It is a command"],"a":0,"w":"The speaker leaves it open."},
    ]},
    {s:"Translate an open condition",b:[
     {"k":"en","p":"Translate into English: *Sī labōrās, laudāris.*","a":["If you work, you are praised.","If you work, you are being praised.","If you are working, you are praised.","If you are working, you are being praised.","If you do work, you are praised.","If you do work, you are being praised."],"w":"Sī means if. In a future condition, both Latin verbs are future, but the if clause is usually a present in English."},
     {"k":"la","p":"Translate into Latin: If you work, you will be praised.","a":["Sī labōrābis, laudāberis."],"w":"Sī means if. In a future condition, both Latin verbs are future, but the if clause is usually a present in English."},
     {"k":"en","p":"Translate into English: *Sī puella venit, nauta labōrat.*","a":["If the girl comes, the sailor works.","If the girl comes, the sailor is working.","If the girl comes, the sailor does work.","If the girl is coming, the sailor works.","If the girl is coming, the sailor is working.","If the girl is coming, the sailor does work.","If the girl does come, the sailor works.","If the girl does come, the sailor is working.","If the girl does come, the sailor does work."],"w":"Sī means if. In a future condition, both Latin verbs are future, but the if clause is usually a present in English."},
     {"k":"la","p":"Translate into Latin: If the sailors come, the girls will walk.","a":["Sī nautae venient, puellae ambulābunt."],"w":"Sī means if. In a future condition, both Latin verbs are future, but the if clause is usually a present in English."},
     {"k":"en","p":"Translate into English: *Sī dūcit, audīmus.*","a":["If he leads, we hear.","If he leads, we are hearing.","If he leads, we do hear.","If he is leading, we hear.","If he is leading, we are hearing.","If he is leading, we do hear.","If he does lead, we hear.","If he does lead, we are hearing.","If he does lead, we do hear.","If she leads, we hear.","If she leads, we are hearing.","If she leads, we do hear.","If she is leading, we hear.","If she is leading, we are hearing.","If she is leading, we do hear.","If she does lead, we hear.","If she does lead, we are hearing.","If she does lead, we do hear."],"w":"Sī means if. In a future condition, both Latin verbs are future, but the if clause is usually a present in English."},
     {"k":"la","p":"Translate into Latin: If I carry, you will see.","a":["Sī portābō, vidēbis."],"w":"Sī means if. In a future condition, both Latin verbs are future, but the if clause is usually a present in English."},
     {"k":"en","p":"Translate into English: *Sī puer legit, magister laudat.*","a":["If the boy reads, the teacher praises.","If the boy reads, the teacher is praising.","If the boy reads, the teacher does praise.","If the boy is reading, the teacher praises.","If the boy is reading, the teacher is praising.","If the boy is reading, the teacher does praise.","If the boy does read, the teacher praises.","If the boy does read, the teacher is praising.","If the boy does read, the teacher does praise."],"w":"Sī means if. In a future condition, both Latin verbs are future, but the if clause is usually a present in English."},
     {"k":"la","p":"Translate into Latin: If the queen calls, we will come.","a":["Sī rēgīna vocābit, veniēmus."],"w":"Sī means if. In a future condition, both Latin verbs are future, but the if clause is usually a present in English."},
     {"k":"en","p":"Translate into English: *Sī servus currit, dominus videt.*","a":["If the slave runs, the master sees.","If the slave runs, the master is seeing.","If the slave runs, the master does see.","If the slave is running, the master sees.","If the slave is running, the master is seeing.","If the slave is running, the master does see.","If the slave does run, the master sees.","If the slave does run, the master is seeing.","If the slave does run, the master does see."],"w":"Sī means if. In a future condition, both Latin verbs are future, but the if clause is usually a present in English."},
     {"k":"la","p":"Translate into Latin: If we see the friend, we will praise.","a":["Sī amīcum vidēbimus, laudābimus."],"w":"Sī means if. In a future condition, both Latin verbs are future, but the if clause is usually a present in English."},
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
     {"k":"mc","p":"In *Dīcit puellam labōrāre*, what case is *puellam*?","o":["accusative, the subject of the infinitive","accusative, the object of *dīcit*","nominative","dative"],"a":0,"w":"The subject of an indirect statement is accusative."},
     {"k":"mc","p":"In *Putat nautam venīre*, what form is *venīre*?","o":["infinitive","present indicative","future","imperative"],"a":0,"w":"The reported verb is an infinitive."},
     {"k":"mc","p":"What English word do you add?","o":["that","because","if","who"],"a":0,"w":"Latin has no word for it here."},
     {"k":"mc","p":"Which is correct for \"She says that the boy is sleeping\"?","o":["*Dīcit puerum dormīre*","*Dīcit puer dormit*","*Dīcit puerō dormīre*","*Dīcit puerum dormit*"],"a":0,"w":"Accusative plus infinitive."},
     {"k":"mc","p":"Which verb can introduce an indirect statement?","o":["*putāre*","*portāre*","*ambulāre*","*nāvigāre*"],"a":0,"w":"*putāre* is a verb of thinking."},
     {"k":"mc","p":"In *Crēdimus deōs audīre*, who hears?","o":["the gods","we","no one","the believers"],"a":0,"w":"*deōs* is the subject of *audīre*."},
     {"k":"mc","p":"In *Videt rosās portārī*, what does *portārī* mean?","o":["to be carried: are carried","to carry: are carrying","carrying away","will carry"],"a":0,"w":"-rī is passive."},
     {"k":"mc","p":"How do you say \"We know that the sailors are working\"?","o":["*Scīmus nautās labōrāre*","*Scīmus nautae labōrant*","*Scīmus nautīs labōrāre*","*Scīmus nautās labōrant*"],"a":0,"w":"Accusative plus infinitive."},
     {"k":"mc","p":"In *Audīs servum venīre*, who is coming?","o":["the slave","you","the hearer","no one"],"a":0,"w":"*servum* is the subject of *venīre*."},
     {"k":"mc","p":"Why is the subject of the reported verb not nominative?","o":["Because indirect statement puts it in the accusative","Because it is a direct object of the main verb","Because it follows a preposition","Because the verb is passive"],"a":0,"w":"That is the rule of this construction."},
    ]},
    {s:"Translate an indirect statement",b:[
     {"k":"en","p":"Translate into English: *Dīcit puellam labōrāre.*","a":["He says that the girl works.","He says that the girl is working.","He says the girl works.","He says the girl is working.","He is saying that the girl works.","He is saying that the girl is working.","He is saying the girl works.","He is saying the girl is working.","He does say that the girl works.","He does say that the girl is working.","He does say the girl works.","He does say the girl is working.","She says that the girl works.","She says that the girl is working.","She says the girl works.","She says the girl is working.","She is saying that the girl works.","She is saying that the girl is working.","She is saying the girl works.","She is saying the girl is working.","She does say that the girl works.","She does say that the girl is working.","She does say the girl works.","She does say the girl is working."],"w":"After a verb of saying or thinking, the subject is accusative and the verb is an infinitive. Add that in English."},
     {"k":"la","p":"Translate into Latin: They think that the sailor comes.","a":["Putant nautam venīre."],"w":"After a verb of saying or thinking, the subject is accusative and the verb is an infinitive. Add that in English."},
     {"k":"en","p":"Translate into English: *Scīmus virōs pugnāre.*","a":["We know that the men fight.","We know that the men are fighting.","We know the men fight.","We know the men are fighting.","We are knowing that the men fight.","We are knowing that the men are fighting.","We are knowing the men fight.","We are knowing the men are fighting.","We do know that the men fight.","We do know that the men are fighting.","We do know the men fight.","We do know the men are fighting."],"w":"After a verb of saying or thinking, the subject is accusative and the verb is an infinitive. Add that in English."},
     {"k":"la","p":"Translate into Latin: The queen says that the boy sleeps.","a":["Rēgīna dīcit puerum dormīre."],"w":"After a verb of saying or thinking, the subject is accusative and the verb is an infinitive. Add that in English."},
     {"k":"en","p":"Translate into English: *Videt agricolās labōrāre.*","a":["He sees that the farmers work.","He sees that the farmers are working.","He sees the farmers work.","He sees the farmers are working.","He is seeing that the farmers work.","He is seeing that the farmers are working.","He is seeing the farmers work.","He is seeing the farmers are working.","He does see that the farmers work.","He does see that the farmers are working.","He does see the farmers work.","He does see the farmers are working.","She sees that the farmers work.","She sees that the farmers are working.","She sees the farmers work.","She sees the farmers are working.","She is seeing that the farmers work.","She is seeing that the farmers are working.","She is seeing the farmers work.","She is seeing the farmers are working.","She does see that the farmers work.","She does see that the farmers are working.","She does see the farmers work.","She does see the farmers are working."],"w":"After a verb of saying or thinking, the subject is accusative and the verb is an infinitive. Add that in English."},
     {"k":"la","p":"Translate into Latin: We hear that the friend comes.","a":["Audīmus amīcum venīre."],"w":"After a verb of saying or thinking, the subject is accusative and the verb is an infinitive. Add that in English."},
     {"k":"en","p":"Translate into English: *Crēdis deās audīre.*","a":["You believe that the goddesses hear.","You believe that the goddesses are hearing.","You believe the goddesses hear.","You believe the goddesses are hearing.","You are believing that the goddesses hear.","You are believing that the goddesses are hearing.","You are believing the goddesses hear.","You are believing the goddesses are hearing.","You do believe that the goddesses hear.","You do believe that the goddesses are hearing.","You do believe the goddesses hear.","You do believe the goddesses are hearing."],"w":"After a verb of saying or thinking, the subject is accusative and the verb is an infinitive. Add that in English."},
     {"k":"la","p":"Translate into Latin: The Roman says that the girl is praised.","a":["Rōmānus dīcit puellam laudārī."],"w":"After a verb of saying or thinking, the subject is accusative and the verb is an infinitive. Add that in English."},
     {"k":"en","p":"Translate into English: *Nūntiat rēgīnam venīre.*","a":["He announces that the queen comes.","He announces that the queen is coming.","He announces the queen comes.","He announces the queen is coming.","He is announcing that the queen comes.","He is announcing that the queen is coming.","He is announcing the queen comes.","He is announcing the queen is coming.","He does announce that the queen comes.","He does announce that the queen is coming.","He does announce the queen comes.","He does announce the queen is coming.","She announces that the queen comes.","She announces that the queen is coming.","She announces the queen comes.","She announces the queen is coming.","She is announcing that the queen comes.","She is announcing that the queen is coming.","She is announcing the queen comes.","She is announcing the queen is coming.","She does announce that the queen comes.","She does announce that the queen is coming.","She does announce the queen comes.","She does announce the queen is coming."],"w":"After a verb of saying or thinking, the subject is accusative and the verb is an infinitive. Add that in English."},
     {"k":"la","p":"Translate into Latin: We hope that the sailors sail.","a":["Spērāmus nautās nāvigāre."],"w":"After a verb of saying or thinking, the subject is accusative and the verb is an infinitive. Add that in English."},
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
     {"k":"mc","p":"*Equus **puellae** currit*: what case is *puellae*?","o":["genitive","dative","nominative"],"a":0,"w":"It goes with *equus*: the horse of the girl."},
     {"k":"mc","p":"*Nauta **puellae** rosam dat*: what case is *puellae*?","o":["dative","genitive","nominative"],"a":0,"w":"The rose is given to the girl."},
     {"k":"mc","p":"*Liber **fēminae** puerum dēlectat*: what case is *fēminae*?","o":["genitive","dative","nominative"],"a":0,"w":"The book of the woman."},
     {"k":"mc","p":"*Magister **discipulae** fābulam narrat*: what case is *discipulae*?","o":["dative","genitive","nominative"],"a":0,"w":"The story is told to the student."},
     {"k":"mc","p":"***Puellae** ambulant*: what case is *puellae*?","o":["nominative","genitive","dative"],"a":0,"w":"The plural verb needs a plural subject."},
     {"k":"mc","p":"*Agricola **rēgīnae** equum videt*: what is the most natural reading of *rēgīnae*?","o":["genitive: the queen’s horse","dative: gives to the queen","nominative: the queens"],"a":0,"w":"*videt* isn’t a verb of giving."},
     {"k":"mc","p":"*Fīlia **nautae** labōrat*: what case is *nautae*?","o":["genitive","dative","nominative"],"a":0,"w":"The daughter of the sailor."},
     {"k":"mc","p":"*Servus **rēgīnae** pecūniam trādit*: what case is *rēgīnae*?","o":["dative","genitive","nominative"],"a":0,"w":"The money is handed to the queen."},
     {"k":"mc","p":"*Dōna **deae** laudant*: what is the most natural reading of *deae*?","o":["genitive: the goddess’s gifts","dative: gives to the goddess","nominative plural: goddesses"],"a":0,"w":"*laudant* doesn’t take a receiver."},
     {"k":"mc","p":"*Puer **amīcae** epistulam scrībit*: what case is *amīcae*?","o":["dative","genitive","nominative"],"a":0,"w":"He writes a letter to his friend."},
    ]},
    {s:"Translate a sentence with a genitive of possession",b:[
     {"k":"en","p":"Translate into English: *Equus puellae currit.*","a":["The girl’s horse runs.","The girl’s horse is running.","The girl’s horse does run.","The horse of the girl runs.","The horse of the girl is running.","The horse of the girl does run."],"w":"The genitive shows whose something is: of, or ’s."},
     {"k":"la","p":"Translate into Latin: The farmer’s friend comes.","a":["Amīcus agricolae venit."],"w":"The genitive shows whose something is: of, or ’s."},
     {"k":"en","p":"Translate into English: *Dōna rēgīnae spectāmus.*","a":["We watch the queen’s gifts.","We watch the gifts of the queen.","We are watching the queen’s gifts.","We are watching the gifts of the queen.","We do watch the queen’s gifts.","We do watch the gifts of the queen."],"w":"The genitive shows whose something is: of, or ’s."},
     {"k":"la","p":"Translate into Latin: The teacher’s book delights the boy.","a":["Liber magistrī puerum dēlectat."],"w":"The genitive shows whose something is: of, or ’s."},
     {"k":"en","p":"Translate into English: *Fīlia nautae labōrat.*","a":["The sailor’s daughter works.","The sailor’s daughter is working.","The sailor’s daughter does work.","The daughter of the sailor works.","The daughter of the sailor is working.","The daughter of the sailor does work."],"w":"The genitive shows whose something is: of, or ’s."},
     {"k":"la","p":"Translate into Latin: I see the man’s horse.","a":["Equum virī videō."],"w":"The genitive shows whose something is: of, or ’s."},
     {"k":"en","p":"Translate into English: *Agrōs agricolārum spectant.*","a":["They watch the farmers’ fields.","They watch the fields of the farmers.","They are watching the farmers’ fields.","They are watching the fields of the farmers.","They do watch the farmers’ fields.","They do watch the fields of the farmers."],"w":"The genitive shows whose something is: of, or ’s."},
     {"k":"la","p":"Translate into Latin: The masters’ slaves work.","a":["Servī dominōrum labōrant."],"w":"The genitive shows whose something is: of, or ’s."},
     {"k":"en","p":"Translate into English: *Templum deae laudant.*","a":["They praise the goddess’s temple.","They praise the temple of the goddess.","They are praising the goddess’s temple.","They are praising the temple of the goddess.","They do praise the goddess’s temple.","They do praise the temple of the goddess."],"w":"The genitive shows whose something is: of, or ’s."},
     {"k":"la","p":"Translate into Latin: We read the boys’ letters.","a":["Epistulās puerōrum legimus."],"w":"The genitive shows whose something is: of, or ’s."},
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
     {"k":"mc","p":"Rewrite *multī nautārum* with *ex*.","o":["*multī ex nautīs*","*multī ex nautās*","*multī ex nautae*","*multī nautīs*"],"a":0,"w":"*ex* takes the ablative."},
     {"k":"mc","p":"Rewrite *paucī puerōrum* with *ex*.","o":["*paucī ex puerīs*","*paucī ex puerōs*","*paucī ex puerōrum*","*paucī puerīs*"],"a":0,"w":"*ex* takes the ablative."},
     {"k":"mc","p":"Rewrite *multī ex virīs* with a genitive.","o":["*multī virōrum*","*multī virī*","*multī virōs*","*multī ex virōrum*"],"a":0,"w":"Genitive plural -ōrum."},
     {"k":"mc","p":"Rewrite *paucae ex fēminīs* with a genitive.","o":["*paucae fēminārum*","*paucae fēminae*","*paucae fēminās*","*paucae ex fēminārum*"],"a":0,"w":"Genitive plural -ārum."},
     {"k":"mc","p":"In *paucī agricolārum*, what is the whole?","o":["the farmers","a few","the part","no one"],"a":0,"w":"The genitive names the whole."},
     {"k":"mc","p":"In *multī nautārum*, what is the part?","o":["many","the sailors","the sea","none"],"a":0,"w":"The genitive is the whole, and *multī* is the part."},
     {"k":"mc","p":"*{Pars|part} aquae* means...","o":["part of the water","the water’s owner","water for a part","part by water"],"a":0,"w":"A part of a whole."},
     {"k":"mc","p":"What case does *ex* take?","o":["ablative","genitive","accusative","dative"],"a":0,"w":"*ex* always takes the ablative."},
     {"k":"mc","p":"*Multae puellārum* means...","o":["many of the girls","the girls’ many things","many girls’ things","many to the girls"],"a":0,"w":"A partitive genitive."},
     {"k":"mc","p":"*Paucī ex amīcīs* means...","o":["few of the friends","few friends’ things","out of few friends","friends of few"],"a":0,"w":"*ex* + ablative here means of."},
    ]},
    {s:"Translate a sentence with a partitive expression",b:[
     {"k":"en","p":"Translate into English: *Multī nautārum veniunt.*","a":["Many of the sailors come.","Many of the sailors are coming.","Many of the sailors do come."],"w":"The genitive, or ex with the ablative, names the whole."},
     {"k":"la","p":"Translate into Latin: Few of the boys run.","a":["Paucī puerōrum currunt."],"w":"The genitive, or ex with the ablative, names the whole."},
     {"k":"en","p":"Translate into English: *Multī ex virīs pugnant.*","a":["Many of the men fight.","Many of the men are fighting.","Many of the men do fight."],"w":"The genitive, or ex with the ablative, names the whole."},
     {"k":"la","p":"Translate into Latin: Few of the women sail.","a":["Paucae fēminārum nāvigant."],"w":"The genitive, or ex with the ablative, names the whole."},
     {"k":"en","p":"Translate into English: *Multae ex puellīs ambulant.*","a":["Many of the girls walk.","Many of the girls are walking.","Many of the girls do walk."],"w":"The genitive, or ex with the ablative, names the whole."},
     {"k":"la","p":"Translate into Latin: Few of the farmers work.","a":["Paucī ex agricolīs labōrant."],"w":"The genitive, or ex with the ablative, names the whole."},
     {"k":"en","p":"Translate into English: *Multī discipulōrum legunt.*","a":["Many of the students read.","Many of the students are reading.","Many of the students do read."],"w":"The genitive, or ex with the ablative, names the whole."},
     {"k":"la","p":"Translate into Latin: Few of the slaves sleep.","a":["Paucī servōrum dormiunt."],"w":"The genitive, or ex with the ablative, names the whole."},
     {"k":"en","p":"Translate into English: *Multī poētārum scrībunt.*","a":["Many of the poets write.","Many of the poets are writing.","Many of the poets do write."],"w":"The genitive, or ex with the ablative, names the whole."},
     {"k":"la","p":"Translate into Latin: Few of the sailors stay.","a":["Paucī ex nautīs manent."],"w":"The genitive, or ex with the ablative, names the whole."},
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
     {"k":"mc","p":"*corōna aurī*","o":["material","possession","subjective","objective"],"a":0,"w":"What it is made of."},
     {"k":"mc","p":"*pōculum argentī*","o":["material","possession","subjective","objective"],"a":0,"w":"What it is made of."},
     {"k":"mc","p":"*equus agricolae*","o":["possession","material","subjective","objective"],"a":0,"w":"Who owns it."},
     {"k":"mc","p":"*cūra rēgīnae* meaning the care the queen gives","o":["subjective","objective","material","possession"],"a":0,"w":"The queen does the caring."},
     {"k":"mc","p":"*cūra rēgīnae* meaning care felt for the queen","o":["objective","subjective","material","possession"],"a":0,"w":"The queen receives the care."},
     {"k":"mc","p":"*gaudium puellārum* meaning the joy the girls feel","o":["subjective","objective","material","possession"],"a":0,"w":"The girls feel the joy."},
     {"k":"mc","p":"*liber magistrī*","o":["possession","material","subjective","objective"],"a":0,"w":"Whose book it is."},
     {"k":"mc","p":"*corōnae aurī* (plural)","o":["material","possession","subjective","objective"],"a":0,"w":"Crowns of gold."},
     {"k":"mc","p":"*īra deī* meaning the god’s anger","o":["subjective","objective","material","possession"],"a":0,"w":"The god feels the anger."},
     {"k":"mc","p":"*cūra equōrum* meaning looking after horses","o":["objective","subjective","material","possession"],"a":0,"w":"The horses receive the care."},
    ]},
    {s:"Translate a sentence with a subjective, objective or material genitive",b:[
     {"k":"en","p":"Translate into English: *Corōna aurī puellam dēlectat.*","a":["The crown of gold delights the girl.","The crown of gold is delighting the girl.","The crown of gold does delight the girl."],"w":"Translate these genitives with of. Context tells you who does the action."},
     {"k":"la","p":"Translate into Latin: The care of the queen saves the boys.","a":["Cūra rēgīnae puerōs servat."],"w":"Translate these genitives with of. Context tells you who does the action."},
     {"k":"en","p":"Translate into English: *Pōcula argentī custōdiunt.*","a":["They guard the cups of silver.","They are guarding the cups of silver.","They do guard the cups of silver."],"w":"Translate these genitives with of. Context tells you who does the action."},
     {"k":"la","p":"Translate into Latin: The joy of the girls delights the sailors.","a":["Gaudium puellārum nautās dēlectat."],"w":"Translate these genitives with of. Context tells you who does the action."},
     {"k":"en","p":"Translate into English: *Vir pōculum aurī portat.*","a":["The man carries a cup of gold.","The man is carrying a cup of gold.","The man does carry a cup of gold."],"w":"Translate these genitives with of. Context tells you who does the action."},
     {"k":"la","p":"Translate into Latin: The anger of the god frightens the men.","a":["Īra deī virōs terret."],"w":"Translate these genitives with of. Context tells you who does the action."},
     {"k":"en","p":"Translate into English: *Corōnam argentī spectāmus.*","a":["We watch the crown of silver.","We are watching the crown of silver.","We do watch the crown of silver."],"w":"Translate these genitives with of. Context tells you who does the action."},
     {"k":"la","p":"Translate into Latin: The care of the farmer saves the horse.","a":["Cūra agricolae equum servat."],"w":"Translate these genitives with of. Context tells you who does the action."},
     {"k":"en","p":"Translate into English: *Rēgīna corōnās aurī dat.*","a":["The queen gives crowns of gold.","The queen is giving crowns of gold.","The queen does give crowns of gold."],"w":"Translate these genitives with of. Context tells you who does the action."},
     {"k":"la","p":"Translate into Latin: The joy of the poet delights the women.","a":["Gaudium poētae fēminās dēlectat."],"w":"Translate these genitives with of. Context tells you who does the action."},
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
     {"k":"en","p":"Translate into English: *portābat*","a":["he was carrying","he used to carry","he kept carrying","she was carrying","she used to carry","she kept carrying","it was carrying","it used to carry","it kept carrying"],"w":"*portābat* is 3rd person singular, so it means “he was carrying.”"},
     {"k":"en","p":"Translate into English: *vidēbant*","a":["they were seeing","they used to see","they kept seeing"],"w":"*vidēbant* is 3rd person plural, so it means “they were seeing.”"},
     {"k":"en","p":"Translate into English: *dūcēbam*","a":["I was leading","I used to lead","I kept leading"],"w":"*dūcēbam* is 1st person singular, so it means “I was leading.”"},
     {"k":"en","p":"Translate into English: *capiēbāmus*","a":["we were capturing","we used to capture","we kept capturing"],"w":"*capiēbāmus* is 1st person plural, so it means “we were capturing.”"},
     {"k":"en","p":"Translate into English: *audiēbās*","a":["you were hearing","you used to hear","you kept hearing"],"w":"*audiēbās* is 2nd person singular, so it means “you were hearing.”"},
     {"k":"en","p":"Translate into English: *laudābātis*","a":["you were praising","you used to praise","you kept praising"],"w":"*laudābātis* is 2nd person plural, so it means “you were praising.”"},
     {"k":"en","p":"Translate into English: *monēbant*","a":["they were warning","they used to warn","they kept warning"],"w":"*monēbant* is 3rd person plural, so it means “they were warning.”"},
     {"k":"en","p":"Translate into English: *mittēbat*","a":["he was sending","he used to send","he kept sending","she was sending","she used to send","she kept sending","it was sending","it used to send","it kept sending"],"w":"*mittēbat* is 3rd person singular, so it means “he was sending.”"},
     {"k":"en","p":"Translate into English: *iaciēbāmus*","a":["we were throwing","we used to throw","we kept throwing"],"w":"*iaciēbāmus* is 1st person plural, so it means “we were throwing.”"},
     {"k":"en","p":"Translate into English: *custōdiēbam*","a":["I was guarding","I used to guard","I kept guarding"],"w":"*custōdiēbam* is 1st person singular, so it means “I was guarding.”"},
    ]},
    {s:"Write an imperfect active verb in Latin",b:[
     {"k":"la","p":"Write in Latin: we were carrying","a":["portābāmus"],"w":"The 1st person plural form is *portābāmus*."},
     {"k":"la","p":"Write in Latin: I was seeing","a":["vidēbam"],"w":"The 1st person singular form is *vidēbam*."},
     {"k":"la","p":"Write in Latin: he was leading","a":["dūcēbat"],"w":"The 3rd person singular form is *dūcēbat*."},
     {"k":"la","p":"Write in Latin: they were capturing","a":["capiēbant"],"w":"The 3rd person plural form is *capiēbant*."},
     {"k":"la","p":"Write in Latin: you all were hearing","a":["audiēbātis"],"w":"The 2nd person plural form is *audiēbātis*."},
     {"k":"la","p":"Write in Latin: you (one person) were praising","a":["laudābās"],"w":"The 2nd person singular form is *laudābās*."},
     {"k":"la","p":"Write in Latin: I was warning","a":["monēbam"],"w":"The 1st person singular form is *monēbam*."},
     {"k":"la","p":"Write in Latin: they were sending","a":["mittēbant"],"w":"The 3rd person plural form is *mittēbant*."},
     {"k":"la","p":"Write in Latin: he was throwing","a":["iaciēbat"],"w":"The 3rd person singular form is *iaciēbat*."},
     {"k":"la","p":"Write in Latin: we were guarding","a":["custōdiēbāmus"],"w":"The 1st person plural form is *custōdiēbāmus*."},
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
     {"k":"en","p":"Translate into English: *portābātur*","a":["he was being carried","he used to be carried","she was being carried","she used to be carried","it was being carried","it used to be carried"],"w":"*portābātur* is 3rd person singular, so it means “he was being carried.”"},
     {"k":"en","p":"Translate into English: *vidēbantur*","a":["they were being seen","they used to be seen"],"w":"*vidēbantur* is 3rd person plural, so it means “they were being seen.”"},
     {"k":"en","p":"Translate into English: *dūcēbar*","a":["I was being led","I used to be led"],"w":"*dūcēbar* is 1st person singular, so it means “I was being led.”"},
     {"k":"en","p":"Translate into English: *capiēbāmur*","a":["we were being captured","we used to be captured"],"w":"*capiēbāmur* is 1st person plural, so it means “we were being captured.”"},
     {"k":"en","p":"Translate into English: *audiēbāris*","a":["you were being heard","you used to be heard"],"w":"*audiēbāris* is 2nd person singular, so it means “you were being heard.”"},
     {"k":"en","p":"Translate into English: *laudābāminī*","a":["you were being praised","you used to be praised"],"w":"*laudābāminī* is 2nd person plural, so it means “you were being praised.”"},
     {"k":"en","p":"Translate into English: *monēbantur*","a":["they were being warned","they used to be warned"],"w":"*monēbantur* is 3rd person plural, so it means “they were being warned.”"},
     {"k":"en","p":"Translate into English: *mittēbātur*","a":["he was being sent","he used to be sent","she was being sent","she used to be sent","it was being sent","it used to be sent"],"w":"*mittēbātur* is 3rd person singular, so it means “he was being sent.”"},
     {"k":"en","p":"Translate into English: *iaciēbāmur*","a":["we were being thrown","we used to be thrown"],"w":"*iaciēbāmur* is 1st person plural, so it means “we were being thrown.”"},
     {"k":"en","p":"Translate into English: *custōdiēbar*","a":["I was being guarded","I used to be guarded"],"w":"*custōdiēbar* is 1st person singular, so it means “I was being guarded.”"},
    ]},
    {s:"Write an imperfect passive verb in Latin",b:[
     {"k":"la","p":"Write in Latin: we were being carried","a":["portābāmur"],"w":"The 1st person plural form is *portābāmur*."},
     {"k":"la","p":"Write in Latin: I was being seen","a":["vidēbar"],"w":"The 1st person singular form is *vidēbar*."},
     {"k":"la","p":"Write in Latin: he was being led","a":["dūcēbātur"],"w":"The 3rd person singular form is *dūcēbātur*."},
     {"k":"la","p":"Write in Latin: they were being captured","a":["capiēbantur"],"w":"The 3rd person plural form is *capiēbantur*."},
     {"k":"la","p":"Write in Latin: you all were being heard","a":["audiēbāminī"],"w":"The 2nd person plural form is *audiēbāminī*."},
     {"k":"la","p":"Write in Latin: you (one person) were being praised","a":["laudābāris"],"w":"The 2nd person singular form is *laudābāris*."},
     {"k":"la","p":"Write in Latin: I was being warned","a":["monēbar"],"w":"The 1st person singular form is *monēbar*."},
     {"k":"la","p":"Write in Latin: they were being sent","a":["mittēbantur"],"w":"The 3rd person plural form is *mittēbantur*."},
     {"k":"la","p":"Write in Latin: he was being thrown","a":["iaciēbātur"],"w":"The 3rd person singular form is *iaciēbātur*."},
     {"k":"la","p":"Write in Latin: we were being guarded","a":["custōdiēbāmur"],"w":"The 1st person plural form is *custōdiēbāmur*."},
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
     {"k":"mc","p":"After *dīcēbat*, *labōrāre* means...","o":["was working","is working","will work","worked yesterday"],"a":0,"w":"The action happens at the same time as the past verb."},
     {"k":"mc","p":"After *dīcit*, *labōrāre* means...","o":["is working","was working","will work","has worked"],"a":0,"w":"A present main verb, so a present in English."},
     {"k":"mc","p":"After *sciēbāmus*, *venīre* means...","o":["were coming","are coming","will come","came long ago"],"a":0,"w":"The same time as the past verb."},
     {"k":"mc","p":"After *putant*, *venīre* means...","o":["are coming","were coming","will come","had come"],"a":0,"w":"A present main verb."},
     {"k":"mc","p":"After *putābant*, *laudārī* means...","o":["was being praised","is being praised","praised","will praise"],"a":0,"w":"-rī is passive, at the same time as the past verb."},
     {"k":"mc","p":"Did the Latin infinitive change between *dīcit puellam labōrāre* and *dīcēbat puellam labōrāre*?","o":["No","Yes, it became past","Yes, it became passive","Yes, it became future"],"a":0,"w":"Only the main verb changed."},
     {"k":"mc","p":"*Crēdēbat nautam nāvigāre* means...","o":["He believed that the sailor was sailing.","He believes that the sailor sails.","He believed that the sailor sails tomorrow.","The sailor believed him."],"a":0,"w":"Past main verb."},
     {"k":"mc","p":"*Vidēbant puerōs currere* means...","o":["They saw that the boys were running.","They see that the boys are running.","The boys saw them running.","They will see the boys run."],"a":0,"w":"Past main verb."},
     {"k":"mc","p":"*Audiēbam amīcum venīre* means...","o":["I heard that the friend was coming.","I hear that the friend is coming.","The friend heard me.","I will hear the friend."],"a":0,"w":"Past main verb."},
     {"k":"mc","p":"Which main verb is past?","o":["*spērābat*","*spērat*","*spērābit*","*spērāre*"],"a":0,"w":"-bā- marks the imperfect."},
    ]},
    {s:"Translate an indirect statement with a past main verb",b:[
     {"k":"en","p":"Translate into English: *Dīcēbat puellam labōrāre.*","a":["He was saying that the girl was working.","He was saying the girl was working.","He used to say that the girl was working.","He used to say the girl was working.","He kept saying that the girl was working.","He kept saying the girl was working.","She was saying that the girl was working.","She was saying the girl was working.","She used to say that the girl was working.","She used to say the girl was working.","She kept saying that the girl was working.","She kept saying the girl was working."],"w":"A present infinitive after a past main verb is translated as a past action at the same time."},
     {"k":"la","p":"Translate into Latin: We were knowing that the sailors were coming.","a":["Sciēbāmus nautās venīre."],"w":"A present infinitive after a past main verb is translated as a past action at the same time."},
     {"k":"en","p":"Translate into English: *Putābant virum dormīre.*","a":["They were thinking that the man was sleeping.","They were thinking the man was sleeping.","They used to think that the man was sleeping.","They used to think the man was sleeping.","They kept thinking that the man was sleeping.","They kept thinking the man was sleeping."],"w":"A present infinitive after a past main verb is translated as a past action at the same time."},
     {"k":"la","p":"Translate into Latin: The queen was saying that the boy was running.","a":["Rēgīna dīcēbat puerum currere."],"w":"A present infinitive after a past main verb is translated as a past action at the same time."},
     {"k":"en","p":"Translate into English: *Vidēbam agricolās labōrāre.*","a":["I was seeing that the farmers were working.","I was seeing the farmers were working.","I used to see that the farmers were working.","I used to see the farmers were working.","I kept seeing that the farmers were working.","I kept seeing the farmers were working."],"w":"A present infinitive after a past main verb is translated as a past action at the same time."},
     {"k":"la","p":"Translate into Latin: They were hearing that the friend was coming.","a":["Audiēbant amīcum venīre."],"w":"A present infinitive after a past main verb is translated as a past action at the same time."},
     {"k":"en","p":"Translate into English: *Crēdēbās deam audīre.*","a":["You were believing that the goddess was hearing.","You were believing the goddess was hearing.","You used to believe that the goddess was hearing.","You used to believe the goddess was hearing.","You kept believing that the goddess was hearing.","You kept believing the goddess was hearing."],"w":"A present infinitive after a past main verb is translated as a past action at the same time."},
     {"k":"la","p":"Translate into Latin: He was announcing that the queen was coming.","a":["Nūntiābat rēgīnam venīre."],"w":"A present infinitive after a past main verb is translated as a past action at the same time."},
     {"k":"en","p":"Translate into English: *Spērābāmus nautās nāvigāre.*","a":["We were hoping that the sailors were sailing.","We were hoping the sailors were sailing.","We used to hope that the sailors were sailing.","We used to hope the sailors were sailing.","We kept hoping that the sailors were sailing.","We kept hoping the sailors were sailing."],"w":"A present infinitive after a past main verb is translated as a past action at the same time."},
     {"k":"la","p":"Translate into Latin: They were saying that the girl was being praised.","a":["Dīcēbant puellam laudārī."],"w":"A present infinitive after a past main verb is translated as a past action at the same time."},
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
     {"k":"la","p":"Write the active singular imperative of *portāre*.","a":["portā"],"w":"Drop -re."},
     {"k":"la","p":"Write the active plural imperative of *portāre*.","a":["portāte"],"w":"-re becomes -te."},
     {"k":"la","p":"Write the active singular imperative of *sedēre*.","a":["sedē"],"w":"Drop -re."},
     {"k":"la","p":"Write the active plural imperative of *currere*.","a":["currite"],"w":"3rd conjugation plural uses -ite."},
     {"k":"la","p":"Write the active singular imperative of *currere*.","a":["curre"],"w":"Drop -re."},
     {"k":"la","p":"Write the active plural imperative of *capere*.","a":["capite"],"w":"3rd -iō plural uses -ite."},
     {"k":"la","p":"Write the active singular imperative of *audīre*.","a":["audī"],"w":"Drop -re."},
     {"k":"la","p":"Write the active plural imperative of *audīre*.","a":["audīte"],"w":"-re becomes -te."},
     {"k":"la","p":"Write the passive plural imperative of *portāre*.","a":["portāminī"],"w":"The -minī form."},
     {"k":"la","p":"Write the passive singular imperative of *audīre*.","a":["audīre"],"w":"It looks like the active infinitive."},
    ]},
    {s:"Translate a command",b:[
     {"k":"en","p":"Translate into English: *Portā rosam!*","a":["Carry the rose!"],"w":"Singular commands drop -re, and plural commands end in -te or -ite."},
     {"k":"la","p":"Translate into Latin: Listen, girls!","a":["Audīte, puellae!"],"w":"Singular commands drop -re, and plural commands end in -te or -ite."},
     {"k":"en","p":"Translate into English: *Curre, puer!*","a":["Run, boy!"],"w":"Singular commands drop -re, and plural commands end in -te or -ite."},
     {"k":"la","p":"Translate into Latin: Call the sailor!","a":["Nautam vocāte!"],"w":"Singular commands drop -re, and plural commands end in -te or -ite."},
     {"k":"en","p":"Translate into English: *Labōrā, serve!*","a":["Work, slave!"],"w":"Singular commands drop -re, and plural commands end in -te or -ite."},
     {"k":"la","p":"Translate into Latin: Take the swords!","a":["Capite gladiōs!"],"w":"Singular commands drop -re, and plural commands end in -te or -ite."},
     {"k":"en","p":"Translate into English: *Sedē, amīce!*","a":["Sit, friend!"],"w":"Singular commands drop -re, and plural commands end in -te or -ite."},
     {"k":"la","p":"Translate into Latin: Read the books!","a":["Legite librōs!"],"w":"Singular commands drop -re, and plural commands end in -te or -ite."},
     {"k":"en","p":"Translate into English: *Equum dūc!*","a":["Lead the horse!"],"w":"Singular commands drop -re, and plural commands end in -te or -ite."},
     {"k":"la","p":"Translate into Latin: See the temple!","a":["Vidēte templum!"],"w":"Singular commands drop -re, and plural commands end in -te or -ite."},
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
     {"k":"en","p":"Translate into English: *Puella in mediā silvā ambulat.*","a":["The girl walks in the middle of the forest.","The girl is walking in the middle of the forest.","The girl does walk in the middle of the forest."],"w":"medius and summus agree with their noun, and English adds of."},
     {"k":"la","p":"Translate into Latin: The sailor runs to the top of the mountain.","a":["Nauta ad summum montem currit."],"w":"medius and summus agree with their noun, and English adds of."},
     {"k":"en","p":"Translate into English: *Agricola in mediō agrō labōrat.*","a":["The farmer works in the middle of the field.","The farmer is working in the middle of the field.","The farmer does work in the middle of the field."],"w":"medius and summus agree with their noun, and English adds of."},
     {"k":"la","p":"Translate into Latin: He sits in the top of the house.","a":["In summā casā sedet."],"w":"medius and summus agree with their noun, and English adds of."},
     {"k":"en","p":"Translate into English: *Virī in mediā viā pugnant.*","a":["The men fight in the middle of the road.","The men are fighting in the middle of the road.","The men do fight in the middle of the road."],"w":"medius and summus agree with their noun, and English adds of."},
     {"k":"la","p":"Translate into Latin: He lives in the middle of the town.","a":["In mediō oppidō habitat."],"w":"medius and summus agree with their noun, and English adds of."},
     {"k":"en","p":"Translate into English: *Puerī ad mediam īnsulam ambulant.*","a":["The boys walk to the middle of the island.","The boys are walking to the middle of the island.","The boys do walk to the middle of the island."],"w":"medius and summus agree with their noun, and English adds of."},
     {"k":"la","p":"Translate into Latin: The master sits in the middle of the house.","a":["Dominus in mediā casā sedet."],"w":"medius and summus agree with their noun, and English adds of."},
     {"k":"en","p":"Translate into English: *Ad summam vīllam currimus.*","a":["We run to the top of the farmhouse.","We are running to the top of the farmhouse.","We do run to the top of the farmhouse."],"w":"medius and summus agree with their noun, and English adds of."},
     {"k":"la","p":"Translate into Latin: The girl works in the middle of the inn.","a":["Puella in mediā tabernā labōrat."],"w":"medius and summus agree with their noun, and English adds of."},
    ]},
   ]},
 ]},
 {title:"Finishing Latin I",lessons:[
  {id:"sum",title:"sum: the verb \"to be\"",blurb:"The most common irregular verb, and the predicate nominative.",t:["sum"],
   body:`*Esse*, to be, is irregular, so learn its forms by heart.

|~ esse, to be
|Person|Present|Imperfect|Future|
|I|sum|eram|erō|
|you|es|erās|eris|
|he/she/it|est|erat|erit|
|we|sumus|erāmus|erimus|
|you all|estis|erātis|eritis|
|they|sunt|erant|erunt|

*Esse* doesn't take a direct object. It links the subject to another word, which stays in the **nominative**. This is the **predicate nominative** that the cases lesson mentioned.

: Puella nauta est. = The girl is a sailor.
: Agricolae laetī sunt. = The farmers are happy.

An adjective after *esse* agrees with the subject.

?1

?2`,
   q:[
    {s:"Write a form of esse",b:[
     {"k":"la","p":"Write \"they are\" in Latin.","a":["sunt"],"w":"3rd person plural present."},
     {"k":"la","p":"Write \"I am\" in Latin.","a":["sum"],"w":"1st person singular present."},
     {"k":"la","p":"Write \"you (one person) are\" in Latin.","a":["es"],"w":"2nd person singular present."},
     {"k":"la","p":"Write \"we were\" in Latin.","a":["erāmus"],"w":"Imperfect."},
     {"k":"la","p":"Write \"he was\" in Latin.","a":["erat"],"w":"Imperfect."},
     {"k":"la","p":"Write \"they will be\" in Latin.","a":["erunt"],"w":"Future."},
     {"k":"la","p":"Write \"I will be\" in Latin.","a":["erō"],"w":"Future."},
     {"k":"la","p":"Write \"you all are\" in Latin.","a":["estis"],"w":"2nd person plural present."},
     {"k":"la","p":"Write \"she is\" in Latin.","a":["est"],"w":"3rd person singular present."},
     {"k":"la","p":"Write \"we will be\" in Latin.","a":["erimus"],"w":"Future."},
    ]},
    {s:"Translate a sentence with esse",b:[
     {"k":"en","p":"Translate into English: *Puella laeta est.*","a":["The girl is happy."],"w":"esse links the subject to a nominative word."},
     {"k":"la","p":"Translate into Latin: The farmers are tired.","a":["Agricolae fessī sunt."],"w":"esse links the subject to a nominative word."},
     {"k":"en","p":"Translate into English: *Nauta bonus erat.*","a":["The sailor was good."],"w":"esse links the subject to a nominative word."},
     {"k":"la","p":"Translate into Latin: The gifts are beautiful.","a":["Dōna pulchra sunt."],"w":"esse links the subject to a nominative word."},
     {"k":"en","p":"Translate into English: *Rēgīna clāra erit.*","a":["The queen will be famous."],"w":"esse links the subject to a nominative word."},
     {"k":"la","p":"Translate into Latin: The boys were happy.","a":["Puerī laetī erant."],"w":"esse links the subject to a nominative word."},
     {"k":"en","p":"Translate into English: *Marcus poēta est.*","a":["Marcus is a poet."],"w":"esse links the subject to a nominative word."},
     {"k":"la","p":"Translate into Latin: We are students.","a":["Discipulī sumus."],"w":"esse links the subject to a nominative word."},
     {"k":"en","p":"Translate into English: *Amīca bona est.*","a":["The friend is good."],"w":"esse links the subject to a nominative word."},
     {"k":"la","p":"Translate into Latin: The women will be angry.","a":["Fēminae īrātae erunt."],"w":"esse links the subject to a nominative word."},
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
    {s:"Choose a form of possum",b:[
     {"k":"mc","p":"Choose \"we can\".","o":["*possumus*","*potumus*","*possimus*","*poteramus*"],"a":0,"w":"*t* becomes *s* before *s*."},
     {"k":"mc","p":"Choose \"they can\".","o":["*possunt*","*potunt*","*poterunt*","*potest*"],"a":0,"w":"*t* becomes *s* before *s*."},
     {"k":"mc","p":"Choose \"she can\".","o":["*potest*","*possit*","*possunt*","*potes*"],"a":0,"w":"*pot-* + *est*."},
     {"k":"mc","p":"Choose \"you (one person) can\".","o":["*potes*","*posses*","*potest*","*possum*"],"a":0,"w":"*pot-* + *es*."},
     {"k":"mc","p":"Choose \"I could\".","o":["*poteram*","*possum*","*poterō*","*potuit*"],"a":0,"w":"*pot-* + *eram*."},
     {"k":"mc","p":"Choose \"they will be able\".","o":["*poterunt*","*poterant*","*possunt*","*potērunt*"],"a":0,"w":"*pot-* + *erunt*."},
     {"k":"mc","p":"Choose \"you all can\".","o":["*potestis*","*possetis*","*potes*","*possumus*"],"a":0,"w":"*pot-* + *estis*."},
     {"k":"mc","p":"Choose \"I can\".","o":["*possum*","*potum*","*potes*","*poterō*"],"a":0,"w":"*t* becomes *s* before *s*."},
     {"k":"mc","p":"What does *possum* take?","o":["a complementary infinitive","a dative","an ablative","a vocative"],"a":0,"w":"*Possum* needs another verb."},
     {"k":"mc","p":"Choose \"we could\".","o":["*poterāmus*","*possumus*","*poterimus*","*poteramur*"],"a":0,"w":"*pot-* + *erāmus*."},
    ]},
    {s:"Translate a sentence with possum",b:[
     {"k":"en","p":"Translate into English: *Nāvigāre possumus.*","a":["We can sail.","We are able to sail."],"w":"possum is translated can or be able, with an infinitive."},
     {"k":"la","p":"Translate into Latin: He could see.","a":["Vidēre poterat."],"w":"possum is translated can or be able, with an infinitive."},
     {"k":"en","p":"Translate into English: *Venīre poterunt.*","a":["They will be able to come."],"w":"possum is translated can or be able, with an infinitive."},
     {"k":"la","p":"Translate into Latin: The girl can write.","a":["Puella scrībere potest."],"w":"possum is translated can or be able, with an infinitive."},
     {"k":"en","p":"Translate into English: *Nautae pugnāre possunt.*","a":["The sailors can fight.","The sailors are able to fight."],"w":"possum is translated can or be able, with an infinitive."},
     {"k":"la","p":"Translate into Latin: I cannot run.","a":["Currere nōn possum."],"w":"possum is translated can or be able, with an infinitive."},
     {"k":"en","p":"Translate into English: *Legere potes.*","a":["You can read.","You are able to read."],"w":"possum is translated can or be able, with an infinitive."},
     {"k":"la","p":"Translate into Latin: The farmer could work.","a":["Agricola labōrāre poterat."],"w":"possum is translated can or be able, with an infinitive."},
     {"k":"en","p":"Translate into English: *Dormīre poterimus.*","a":["We will be able to sleep."],"w":"possum is translated can or be able, with an infinitive."},
     {"k":"la","p":"Translate into Latin: The boys can hear.","a":["Puerī audīre possunt."],"w":"possum is translated can or be able, with an infinitive."},
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
     {"k":"mc","p":"What person and number is *laudāvī*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":0,"w":"The ending of *laudāvī* means I, so it is 1st person singular."},
     {"k":"mc","p":"What person and number is *monuimus*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":3,"w":"The ending of *monuimus* means we, so it is 1st person plural."},
     {"k":"mc","p":"What person and number is *dūxērunt*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":5,"w":"The ending of *dūxērunt* means they, so it is 3rd person plural."},
     {"k":"mc","p":"What person and number is *cēpistī*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":1,"w":"The ending of *cēpistī* means you (one person), so it is 2nd person singular."},
     {"k":"mc","p":"What person and number is *audīvistis*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":4,"w":"The ending of *audīvistis* means you (more than one person), so it is 2nd person plural."},
     {"k":"mc","p":"What person and number is *vīdit*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":2,"w":"The ending of *vīdit* means he, she or it, so it is 3rd person singular."},
     {"k":"mc","p":"What person and number is *mīsimus*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":3,"w":"The ending of *mīsimus* means we, so it is 1st person plural."},
     {"k":"mc","p":"What person and number is *scrīpsistī*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":1,"w":"The ending of *scrīpsistī* means you (one person), so it is 2nd person singular."},
     {"k":"mc","p":"What person and number is *portāvērunt*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":5,"w":"The ending of *portāvērunt* means they, so it is 3rd person plural."},
     {"k":"mc","p":"What person and number is *vīcī*?","o":["1st person singular","2nd person singular","3rd person singular","1st person plural","2nd person plural","3rd person plural"],"a":0,"w":"The ending of *vīcī* means I, so it is 1st person singular."},
    ]},
    {s:"Translate a perfect active verb into English",b:[
     {"k":"en","p":"Translate into English: *laudāvit*","a":["he praised","he has praised","he did praise","she praised","she has praised","she did praise","it praised","it has praised","it did praise"],"w":"*laudāvit* is 3rd person singular, so it means “he praised.”"},
     {"k":"en","p":"Translate into English: *monuērunt*","a":["they warned","they have warned","they did warn"],"w":"*monuērunt* is 3rd person plural, so it means “they warned.”"},
     {"k":"en","p":"Translate into English: *dūxī*","a":["I led","I have led","I did lead"],"w":"*dūxī* is 1st person singular, so it means “I led.”"},
     {"k":"en","p":"Translate into English: *cēpimus*","a":["we captured","we have captured","we did capture"],"w":"*cēpimus* is 1st person plural, so it means “we captured.”"},
     {"k":"en","p":"Translate into English: *audīvistī*","a":["you heard","you have heard","you did hear"],"w":"*audīvistī* is 2nd person singular, so it means “you heard.”"},
     {"k":"en","p":"Translate into English: *vīdistis*","a":["you saw","you have seen","you did see"],"w":"*vīdistis* is 2nd person plural, so it means “you saw.”"},
     {"k":"en","p":"Translate into English: *mīsērunt*","a":["they sent","they have sent","they did send"],"w":"*mīsērunt* is 3rd person plural, so it means “they sent.”"},
     {"k":"en","p":"Translate into English: *scrīpsit*","a":["he wrote","he has written","he did write","she wrote","she has written","she did write","it wrote","it has written","it did write"],"w":"*scrīpsit* is 3rd person singular, so it means “he wrote.”"},
     {"k":"en","p":"Translate into English: *portāvimus*","a":["we carried","we have carried","we did carry"],"w":"*portāvimus* is 1st person plural, so it means “we carried.”"},
     {"k":"en","p":"Translate into English: *vīcī*","a":["I conquered","I have conquered","I did conquer"],"w":"*vīcī* is 1st person singular, so it means “I conquered.”"},
    ]},
    {s:"Write a perfect active verb in Latin",b:[
     {"k":"la","p":"Write in Latin: we praised","a":["laudāvimus"],"w":"The 1st person plural form is *laudāvimus*."},
     {"k":"la","p":"Write in Latin: I warned","a":["monuī"],"w":"The 1st person singular form is *monuī*."},
     {"k":"la","p":"Write in Latin: he led","a":["dūxit"],"w":"The 3rd person singular form is *dūxit*."},
     {"k":"la","p":"Write in Latin: they captured","a":["cēpērunt"],"w":"The 3rd person plural form is *cēpērunt*."},
     {"k":"la","p":"Write in Latin: you all heard","a":["audīvistis"],"w":"The 2nd person plural form is *audīvistis*."},
     {"k":"la","p":"Write in Latin: you (one person) saw","a":["vīdistī"],"w":"The 2nd person singular form is *vīdistī*."},
     {"k":"la","p":"Write in Latin: I sent","a":["mīsī"],"w":"The 1st person singular form is *mīsī*."},
     {"k":"la","p":"Write in Latin: they wrote","a":["scrīpsērunt"],"w":"The 3rd person plural form is *scrīpsērunt*."},
     {"k":"la","p":"Write in Latin: he carried","a":["portāvit"],"w":"The 3rd person singular form is *portāvit*."},
     {"k":"la","p":"Write in Latin: we conquered","a":["vīcimus"],"w":"The 1st person plural form is *vīcimus*."},
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
     {"k":"la","p":"Write the accusative singular of *rēx*.","a":["rēgem"],"w":"The accusative singular of *rēx* is *rēgem*."},
     {"k":"la","p":"Write the nominative plural of *mīles*.","a":["mīlitēs"],"w":"The nominative plural of *mīles* is *mīlitēs*."},
     {"k":"la","p":"Write the dative singular of *pater*.","a":["patrī"],"w":"The dative singular of *pater* is *patrī*."},
     {"k":"la","p":"Write the ablative singular of *māter*.","a":["mātre"],"w":"The ablative singular of *māter* is *mātre*."},
     {"k":"la","p":"Write the accusative plural of *frāter*.","a":["frātrēs"],"w":"The accusative plural of *frāter* is *frātrēs*."},
     {"k":"la","p":"Write the nominative plural of *corpus*.","a":["corpora"],"w":"The nominative plural of *corpus* is *corpora*."},
     {"k":"la","p":"Write the genitive singular of *dux*.","a":["ducis"],"w":"The genitive singular of *dux* is *ducis*."},
     {"k":"la","p":"Write the dative plural of *soror*.","a":["sorōribus"],"w":"The dative plural of *soror* is *sorōribus*."},
     {"k":"la","p":"Write the accusative plural of *flūmen*.","a":["flūmina"],"w":"The accusative plural of *flūmen* is *flūmina*."},
     {"k":"la","p":"Write the genitive plural of *rēx*.","a":["rēgum"],"w":"The genitive plural of *rēx* is *rēgum*."},
    ]},
    {s:"Translate a sentence with 3rd declension nouns",b:[
     {"k":"en","p":"Translate into English: *Rēx mīlitēs laudat.*","a":["The king praises the soldiers.","The king is praising the soldiers.","The king does praise the soldiers."],"w":"Find the stem from the genitive, then read the ending for the case."},
     {"k":"la","p":"Translate into Latin: The mother calls the daughter.","a":["Māter fīliam vocat."],"w":"Find the stem from the genitive, then read the ending for the case."},
     {"k":"en","p":"Translate into English: *Pater fīliō librum dat.*","a":["The father gives the son a book.","The father gives a book to the son.","The father is giving the son a book.","The father is giving a book to the son.","The father does give the son a book.","The father does give a book to the son."],"w":"Find the stem from the genitive, then read the ending for the case."},
     {"k":"la","p":"Translate into Latin: The soldiers hear the leader.","a":["Mīlitēs ducem audiunt."],"w":"Find the stem from the genitive, then read the ending for the case."},
     {"k":"en","p":"Translate into English: *Soror frātrem videt.*","a":["The sister sees the brother.","The sister is seeing the brother.","The sister does see the brother."],"w":"Find the stem from the genitive, then read the ending for the case."},
     {"k":"la","p":"Translate into Latin: The kings defend the town.","a":["Rēgēs oppidum dēfendunt."],"w":"Find the stem from the genitive, then read the ending for the case."},
     {"k":"en","p":"Translate into English: *Dux cum mīlitibus venit.*","a":["The leader comes with the soldiers.","The leader is coming with the soldiers.","The leader does come with the soldiers."],"w":"Find the stem from the genitive, then read the ending for the case."},
     {"k":"la","p":"Translate into Latin: The brother gives the sister a rose.","a":["Frāter sorōrī rosam dat."],"w":"Find the stem from the genitive, then read the ending for the case."},
     {"k":"en","p":"Translate into English: *Corpus virī portant.*","a":["They carry the body of the man.","They are carrying the body of the man.","They do carry the body of the man."],"w":"Find the stem from the genitive, then read the ending for the case."},
     {"k":"la","p":"Translate into Latin: The mothers work for the sons.","a":["Mātrēs fīliīs labōrant."],"w":"Find the stem from the genitive, then read the ending for the case."},
    ]},
   ]},
  {id:"pronouns",title:"Personal pronouns",blurb:"I, you, we and you all, in every case.",t:[],
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
    {s:"Write the Latin personal pronoun for an English pronoun in a given case",b:[
     {"k":"la","p":"Write \"me\" as a direct object.","a":["mē"],"w":"Accusative of *ego*."},
     {"k":"la","p":"Write \"to you (one person)\".","a":["tibi"],"w":"Dative of *tū*."},
     {"k":"la","p":"Write \"to me\".","a":["mihi"],"w":"Dative of *ego*."},
     {"k":"la","p":"Write \"with me\".","a":["mēcum"],"w":"*cum* attaches to the end."},
     {"k":"la","p":"Write \"with us\".","a":["nōbīscum"],"w":"*cum* attaches to the end."},
     {"k":"la","p":"Write \"you (one person)\" as a direct object.","a":["tē"],"w":"Accusative of *tū*."},
     {"k":"la","p":"Write \"to us\".","a":["nōbīs"],"w":"Dative of *nōs*."},
     {"k":"la","p":"Write \"with you all\".","a":["vōbīscum"],"w":"*cum* attaches to the end."},
     {"k":"la","p":"Write \"we\" as an emphatic subject.","a":["nōs"],"w":"Nominative plural."},
     {"k":"la","p":"Write \"to you all\".","a":["vōbīs"],"w":"Dative of *vōs*."},
    ]},
    {s:"Translate a sentence with a personal pronoun",b:[
     {"k":"en","p":"Translate into English: *Mē videt.*","a":["He sees me.","He is seeing me.","He does see me.","She sees me.","She is seeing me.","She does see me."],"w":"Pronouns use case endings of their own. Nominative pronouns add emphasis."},
     {"k":"la","p":"Translate into Latin: I give you a gift.","a":["Tibi dōnum dō."],"w":"Pronouns use case endings of their own. Nominative pronouns add emphasis."},
     {"k":"en","p":"Translate into English: *Ego labōrō, tū dormīs.*","a":["I work, you sleep.","I work, you are sleeping.","I work, you do sleep.","I am working, you sleep.","I am working, you are sleeping.","I am working, you do sleep.","I do work, you sleep.","I do work, you are sleeping.","I do work, you do sleep."],"w":"Pronouns use case endings of their own. Nominative pronouns add emphasis."},
     {"k":"la","p":"Translate into Latin: They call us.","a":["Nōs vocant."],"w":"Pronouns use case endings of their own. Nominative pronouns add emphasis."},
     {"k":"en","p":"Translate into English: *Mēcum ambulat.*","a":["He walks with me.","He is walking with me.","He does walk with me.","She walks with me.","She is walking with me.","She does walk with me."],"w":"Pronouns use case endings of their own. Nominative pronouns add emphasis."},
     {"k":"la","p":"Translate into Latin: We praise you.","a":["Tē laudāmus."],"w":"Pronouns use case endings of their own. Nominative pronouns add emphasis."},
     {"k":"en","p":"Translate into English: *Nōbīs fābulam narrat.*","a":["He tells us a story.","He tells a story to us.","He is telling us a story.","He is telling a story to us.","He does tell us a story.","He does tell a story to us.","She tells us a story.","She tells a story to us.","She is telling us a story.","She is telling a story to us.","She does tell us a story.","She does tell a story to us."],"w":"Pronouns use case endings of their own. Nominative pronouns add emphasis."},
     {"k":"la","p":"Translate into Latin: I sail with you.","a":["Vōbīscum nāvigō."],"w":"Pronouns use case endings of their own. Nominative pronouns add emphasis."},
     {"k":"en","p":"Translate into English: *Mihi epistulam scrībit.*","a":["He writes me a letter.","He writes a letter to me.","He is writing me a letter.","He is writing a letter to me.","He does write me a letter.","He does write a letter to me.","She writes me a letter.","She writes a letter to me.","She is writing me a letter.","She is writing a letter to me.","She does write me a letter.","She does write a letter to me."],"w":"Pronouns use case endings of their own. Nominative pronouns add emphasis."},
     {"k":"la","p":"Translate into Latin: We warn you.","a":["Vōs monēmus."],"w":"Pronouns use case endings of their own. Nominative pronouns add emphasis."},
    ]},
   ]},
 ]},
]}]
};
