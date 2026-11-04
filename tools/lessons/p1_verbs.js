const {tr,mc,ty,spot,parseQs,enQs,laQs}=require('./lib.js');
/* question verbs are never the ones a lesson conjugates in its own tables */
const a1=['vocāre','spectāre','amāre','servāre','superāre','parāre','mōnstrāre','dōnāre','narrāre','līberāre'];
const a2=['tenēre','terrēre','docēre','dēlēre','timēre','manēre','sedēre','prohibēre'];
const a3=['mittere','scrībere','legere','vincere','dēfendere','regere','relinquere','petere'];
const a3i=['iacere','accipere','cōnspicere','interficere','cupere'];
const a4=['custōdīre','invenīre','pūnīre','impedīre','mūnīre'];
const mix=['vocāre','spectāre','terrēre','tenēre','mittere','regere','iacere','accipere','custōdīre','pūnīre'];
module.exports={title:'Verbs: the present tense',lessons:[
{id:'verbs1',title:'Verbs and the 1st conjugation',blurb:'How a Latin verb tells you who is acting, and your first verb group.',body:`
Welcome to Latin. The first thing to know is that a Latin verb does much more work than an English verb. English needs two words to say *we* and *praise*. Latin packs both ideas into one word:

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

?3
`,q:[spot('Identify the person and number of a 1st conjugation present verb',parseQs(a1,'pres','act')),spot('Translate a 1st conjugation present verb into English',enQs(a1,'pres','act')),spot('Write a 1st conjugation present verb in Latin from English',laQs(a1,'pres','act'))]},

{id:'verbs2',title:'The 2nd conjugation',blurb:'A second verb family, marked by a long ē.',body:`
The **2nd conjugation** works almost exactly like the 1st. Its infinitive ends in **-ēre**, with a long *ē*, and that *ē* takes the place of the 1st conjugation's *ā*.

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

?3
`,q:[spot('Identify the person and number of a 2nd conjugation present verb',parseQs(a2,'pres','act')),spot('Translate a 2nd conjugation present verb into English',enQs(a2,'pres','act')),spot('Write a 2nd conjugation present verb in Latin from English',laQs(a2,'pres','act'))]},

{id:'verbs3',title:'The 3rd conjugation',blurb:'The family with a short e in its infinitive and a shifting vowel.',body:`
The **3rd conjugation** also has an infinitive in *-ere*, but the *e* is **short**. Compare them:

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

?3
`,q:[spot('Identify the person and number of a 3rd conjugation present verb',parseQs(a3,'pres','act')),spot('Translate a 3rd conjugation present verb into English',enQs(a3,'pres','act')),spot('Write a 3rd conjugation present verb in Latin from English',laQs(a3,'pres','act'))]},

{id:'verbs4',title:'The 3rd -iō and 4th conjugations',blurb:'Two families that keep an i, and how to tell them apart.',body:`
The last two families both have an **i** right before most endings.

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

?3
`,q:[mc('Identify which conjugation a verb belongs to from its infinitive and first form',[
['Which family is *portāre, portō*?','1st',['2nd','3rd','4th'],'-āre is the 1st conjugation.'],
['Which family is *tenēre, teneō*?','2nd',['1st','3rd','4th'],'A long -ēre with -eō is the 2nd conjugation.'],
['Which family is *mittere, mittō*?','3rd',['2nd','3rd -iō','4th'],'A short -ere with plain -ō is the 3rd conjugation.'],
['Which family is *iacere, iaciō*?','3rd -iō',['2nd','3rd','4th'],'A short -ere with -iō is the 3rd -iō conjugation.'],
['Which family is *pūnīre, pūniō*?','4th',['1st','2nd','3rd -iō'],'-īre is the 4th conjugation.'],
['Which family is *accipere, accipiō*?','3rd -iō',['3rd','4th','2nd'],'A short -ere with -iō is the 3rd -iō conjugation.'],
['Which family is *scrībere, scrībō*?','3rd',['2nd','3rd -iō','4th'],'A short -ere with plain -ō is the 3rd conjugation.'],
['Which family is *custōdīre, custōdiō*?','4th',['2nd','3rd','3rd -iō'],'-īre is the 4th conjugation.'],
['Which family is *terrēre, terreō*?','2nd',['1st','3rd','3rd -iō'],'A long -ēre with -eō is the 2nd conjugation.'],
['Which family is *amāre, amō*?','1st',['2nd','3rd','4th'],'-āre is the 1st conjugation.']]),
spot('Translate a 3rd -iō or 4th conjugation present verb into English',enQs([...a3i,...a4],'pres','act')),spot('Write a 3rd -iō or 4th conjugation present verb in Latin from English',laQs([...a4,...a3i],'pres','act'))]},

{id:'compinf',title:'The complementary infinitive',blurb:'Verbs like "wants to" that need another verb to finish the idea.',body:`
You already know the **infinitive**: the "to" form, such as *portāre*, to carry. Some verbs don't make sense alone and need an infinitive to complete them. In English: *I want to sail*. The second verb completes the first, so it is called a **complementary infinitive**.

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

?2
`,q:[mc('Pick out the complementary infinitive or finite verb in a short sentence',[
['In *Currere cupimus*, which word is the infinitive?','*currere*',['*cupimus*','Both','Neither'],'-āre marks the infinitive; *cupimus* has a personal ending.'],
['In *Ambulāre solent*, which word tells you who acts?','*solent*',['*ambulāre*','Both','Neither'],'-nt means they, and infinitives have no personal ending.'],
['In *Audīre dēbēmus*, who ought to listen?','we',['I','you','they'],'*dēbēmus* ends in -mus, we.'],
['In *Currere cupis*, who wants to run?','you (one person)',['we','they','you (more than one person)'],'*cupis* ends in -s.'],
['In *Scrībere cupit*, what does the word *scrībere* do?','It completes the verb *cupit*',['It says who is writing','It is the subject','It tells when'],'A complementary infinitive completes the main verb.'],
['Which word changes when the subject changes in *Dormīre cupiō*?','*cupiō*',['*dormīre*','Both','Neither'],'Only the main verb has personal endings.'],
['How do you say "they ought to work"?','*Labōrāre dēbent*',['*Labōrant dēbēre*','*Labōrāre dēbet*','*Labōrāmus dēbēre*'],'-nt on the main verb, and the infinitive stays the same.'],
['How do you say "we hope to sail"?','*Nāvigāre spērāmus*',['*Nāvigāmus spērāre*','*Nāvigāre spērant*','*Nāvigat spērāmus*'],'The main verb takes -mus, and *nāvigāre* stays an infinitive.'],
['What does *solēmus* add to *Ambulāre solēmus*?','We usually walk',['We walk alone','We want to walk','We ought to walk'],'*solēre* with an infinitive means to usually do something.'],
['*Scrībere dēbēs* means...','You ought to write.',['You want to write.','You usually write.','You hope to write.'],'With an infinitive, *dēbēre* means ought or should.']]),
tr('Translate a sentence with a complementary infinitive',[
['Labōrāre cupimus.','We <want:p> to work.'],['Ambulāre solent.','They usually walk.'],['Scrībere dēbēs.','You [ought to|should] write.'],['Labōrāre spērō.','I hope to work.'],['Currere cupiunt.','They <want:p> to run.'],['Audīre dēbētis.','You [ought to|should] listen.'],['Scrībere solet.','[He|She] usually writes.'],['Manēre cupit.','[He|She] <want> to stay.'],['Pugnāre dēbēmus.','We [ought to|should] fight.'],['Venīre spērās.','You hope to come.']],'Translate the main verb first, then add the infinitive.')]},

{id:'prespass',title:'The present passive',blurb:'When the subject receives the action.',body:`
So far every verb has been **active**: the subject does the action. In the **passive** voice, the subject receives the action.

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

?3
`,q:[spot('Identify the person and number of a present passive verb',parseQs(mix,'pres','pass')),spot('Translate a present passive verb into English',enQs(mix,'pres','pass')),spot('Write a present passive verb in Latin from English',laQs(mix,'pres','pass'))]},

{id:'passinf',title:'The passive infinitive',blurb:'How to say "to be carried".',body:`
The passive also has an infinitive, meaning *to be ...ed*.

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

?2
`,q:[ty('Write the passive infinitive of a verb',[
['Write the passive infinitive of *amāre*.','amārī','In the 1st conjugation, -āre becomes -ārī.'],['Write the passive infinitive of *regere*.','regī','In the 3rd conjugation, -ere becomes -ī.'],['Write the passive infinitive of *docēre*.','docērī','In the 2nd conjugation, -ēre becomes -ērī.'],['Write the passive infinitive of *accipere*.','accipī','In the 3rd -iō conjugation, -ere becomes -ī.'],['Write the passive infinitive of *pūnīre*.','pūnīrī','In the 4th conjugation, -īre becomes -īrī.'],['Write the passive infinitive of *vocāre*.','vocārī','In the 1st conjugation, -āre becomes -ārī.'],['Write the passive infinitive of *mittere*.','mittī','In the 3rd conjugation, -ere becomes -ī.'],['Write the passive infinitive of *vidēre*.','vidērī','In the 2nd conjugation, -ēre becomes -ērī.'],['Write the passive infinitive of *iacere*.','iacī','In the 3rd -iō conjugation, -ere becomes -ī.'],['Write the passive infinitive of *custōdīre*.','custōdīrī','In the 4th conjugation, -īre becomes -īrī.']],'la'),
tr('Translate a complementary passive infinitive sentence',[
['Amārī cupit.','[He|She] <want> to be loved.'],['Docērī dēbēmus.','We [ought to|should] be taught.'],['Invenīrī spērant.','They hope to be found.'],['Vidērī cupiō.','I <want:p> to be seen.'],['Servārī spērāmus.','We hope to be saved.'],['Vocārī dēbēs.','You [ought to|should] be called.'],['Dūcī cupiunt.','They <want:p> to be led.'],['Pūnīrī dēbent.','They [ought to|should] be punished.'],['Portārī solet.','[He|She] is usually carried.'],['Dēfendī spērō.','I hope to be defended.']],'The main verb has the personal ending, and the passive infinitive adds "to be ...ed".')]},
]};
