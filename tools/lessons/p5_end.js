const {tr,mc,ty,spot,enQs,laQs,parseQs,nq}=require('./lib.js');
const pf=['amāre','docēre','regere','iacere','custōdīre','tenēre','scrībere','vocāre','vincere','pūnīre'];
module.exports={title:'Finishing Latin I',lessons:[
{id:'sum',title:'esse: how to “be” in Latin',blurb:'The irregular verb “to be,” the = sign, there is, and adesse/abesse.',body:`
Not every English “is” means the verb *esse*. First ask: what is the **main idea** of the verb?

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

?4
`,q:[ty('Write a sentence in Latin using the right form of esse',[
['Translate into Latin: The girls are tired.','Puellae fessae sunt.','Plural subject, present: *sunt*. The adjective agrees with the subject.'],
['Translate into Latin: I am happy.',['Laetus sum.','Laeta sum.'],'"I" in the present is *sum*.'],
['Translate into Latin: You (one person) are a student.',['Discipulus es.','Discipula es.'],'"You" in the present is *es*.'],
['Translate into Latin: We were tired.',['Fessī erāmus.','Fessae erāmus.'],'"We" in the imperfect is *erāmus*.'],
['Translate into Latin: The farmer was angry.','Agricola īrātus erat.','Singular subject, imperfect: *erat*. *Agricola* is masculine.'],
['Translate into Latin: The boys will be happy.','Puerī laetī erunt.','Plural subject, future: *erunt*.'],
['Translate into Latin: I will be a poet.','Poēta erō.','"I" in the future is *erō*.'],
['Translate into Latin: You all are friends.',['Amīcī estis.','Amīcae estis.'],'"You all" in the present is *estis*.'],
['Translate into Latin: The road is wide.','Via lāta est.','Singular subject, present: *est*.'],
['Translate into Latin: We will be sailors.','Nautae erimus.','"We" in the future is *erimus*.']],'la'),
tr('Translate a sentence with esse',[
['Puella laeta est.','The girl is happy.'],['Agricolae fessī sunt.','The farmers are tired.'],['Nauta bonus erat.','The sailor was good.'],['Dōna pulchra sunt.','The gifts are beautiful.'],['Rēgīna clāra erit.','The queen will be famous.'],['Puerī laetī erant.','The boys were happy.'],['Marcus poēta est.','Marcus is a poet.'],['Discipulī sumus.','We are students.'],['Amīca bona est.','The friend is good.'],['Fēminae īrātae erunt.','The women will be angry.']],'esse links the subject to a nominative word.'),
mc('Use esse, or not?',[
['Choose the Latin for "The poets are working."','*Poētae labōrant.*',['*Poētae labōrant sunt.*','*Poētae sunt labōrāre.*','*Poētae labōrat.*'],'The main idea is working, so Latin uses the present tense of *labōrāre*, with no *esse*.'],
['Choose the Latin for "The poets are tired."','*Poētae fessī sunt.*',['*Poētae fessōs sunt.*','*Poētae fessae sunt.*','*Poētae fessī.*'],'Poets = tired, so the adjective is nominative and agrees with *poētae*, which is masculine.'],
['In "The queen is a girl," what case is “girl”?','nominative',['accusative','genitive','dative'],'Queen = girl, so both are nominative.'],
['In "The sailor praises the farmer," what case is “farmer”?','accusative',['nominative','genitive','dative'],'The farmer receives the action, so he is the direct object.'],
['In "The sailor is a farmer," what case is “farmer”?','nominative',['accusative','genitive','ablative'],'Sailor = farmer: a predicate nominative.'],
['In "The queen summons the farmer," what case is “farmer”?','accusative',['nominative','genitive','dative'],'The farmer receives the action of summoning.'],
['In "The queen of the island is happy," what case is “island”?','genitive',['nominative','accusative','ablative'],'“Of the island”: genitive.'],
['In "The queen of the island is happy," what case is “happy”?','nominative',['accusative','genitive','dative'],'Queen = happy: a predicate adjective, nominative like the subject.'],
['Why is *fessum* accusative in *Videō puerum fessum esse*?','It refers to *puerum*, the accusative subject of the indirect statement.',['It is a direct object.','*Esse* always takes the accusative.','Adjectives after *videō* are accusative.'],'The = sign keeps both sides in the same case, and the subject of an indirect statement is accusative.'],
['What does *Nautae aberant* mean?','The sailors were absent.',['The sailors were present.','The sailors were near.','The sailors will be away.'],'*Ab-* means away from: *abesse* is to be away, absent.']]),
tr('Translate esse in more ways',[
['Videō puerum fessum esse.','I see that the boy is tired.'],
['Dīcit puellam rēgīnam esse.','[He|She] says that the girl is a queen.'],
['Magister adest.','The teacher is [present|here].'],
['Discipulī absunt.','The students are [absent|away].'],
['Est vīlla prope agrum.','There is a farmhouse near the field.'],
['Sunt templa prope oppidum.','There are temples near the town.'],
['Vīlla est prope agrum.','The farmhouse is near the field.'],
['Putābat agricolās fessōs esse.','[He|She] [was thinking|thought] that the farmers were tired.'],
['Aderāmus.','We were [present|here].'],
['Nautae Graecī erant.','The sailors were Greeks.']],'In indirect statement both sides of esse are accusative; adesse and abesse work like esse; est or sunt first means there is or there are.',{alt:{1:['Dīcit puellam esse rēgīnam.'],7:['Putābat agricolās esse fessōs.']}})]},
{id:'possum',title:'possum: to be able',blurb:'esse with a prefix, and a verb that needs an infinitive.',body:`
*Possum* means *I am able* or *I can*. It is *pot-* plus *esse*. The *t* becomes *s* before another *s*.

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

?2
`,q:[mc('Choose the sentence with the right form of possum',[
['Choose "We can walk."','*Ambulāre possumus.*',['*Ambulāre potumus.*','*Ambulāre possimus.*','*Ambulāre poteramus.*'],'The *t* of *pot-* becomes *s* before *s*.'],
['Choose "They can run."','*Currere possunt.*',['*Currere potunt.*','*Currere poterunt.*','*Currere potest.*'],'The *t* of *pot-* becomes *s* before *s*.'],
['Choose "She can write."','*Scrībere potest.*',['*Scrībere possit.*','*Scrībere possunt.*','*Scrībere potes.*'],'*pot-* + *est*.'],
['Choose "You (one person) can stay."','*Manēre potes.*',['*Manēre posses.*','*Manēre potest.*','*Manēre possum.*'],'*pot-* + *es*.'],
['Choose "I could read."','*Legere poteram.*',['*Legere possum.*','*Legere poterō.*','*Legere potuit.*'],'*pot-* + *eram*.'],
['Choose "They will be able to work."','*Labōrāre poterunt.*',['*Labōrāre poterant.*','*Labōrāre possunt.*','*Labōrāre potērunt.*'],'*pot-* + *erunt*.'],
['Choose "You all can fight."','*Pugnāre potestis.*',['*Pugnāre possetis.*','*Pugnāre potes.*','*Pugnāre possumus.*'],'*pot-* + *estis*.'],
['Choose "I can sail."','*Nāvigāre possum.*',['*Nāvigāre potum.*','*Nāvigāre potes.*','*Nāvigāre poterō.*'],'The *t* of *pot-* becomes *s* before *s*.'],
['In *Puella legere potest*, what does *legere* do?','It completes the main verb',['It is the subject','It is a direct object','It names a place'],'A form of *possum* takes a complementary infinitive.'],
['Choose "We could sleep."','*Dormīre poterāmus.*',['*Dormīre possumus.*','*Dormīre poterimus.*','*Dormīre poteramur.*'],'*pot-* + *erāmus*.']]),
tr('Translate a sentence with possum',[
['Currere possumus.','We [can run|are able to run].'],['Audīre poterat.','[He|She] [could hear|was able to hear].'],['Manēre poterunt.','They will be able to stay.'],['Puella scrībere potest.','The girl [can write|is able to write].'],['Nautae pugnāre possunt.','The sailors [can fight|are able to fight].'],['Currere nōn possum.','I [cannot|can not|am not able to] run.'],['Legere potes.','You [can read|are able to read].'],['Agricola labōrāre poterat.','The farmer [could work|was able to work].'],['Dormīre poterimus.','We will be able to sleep.'],['Puerī audīre possunt.','The boys [can hear|are able to hear].']],'possum is translated can or be able, with an infinitive.')]},
{id:'perfect',title:'The perfect active',blurb:'What happened and is finished.',body:`
The **perfect** tells about a completed action. It has its own stem, so dictionaries give it as the third principal part.

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

?3
`,q:[spot('Identify the person and number of a perfect active verb',parseQs(pf,'perf','act')),spot('Translate a perfect active verb into English',enQs(pf,'perf','act')),spot('Write a perfect active verb in Latin',laQs(pf,'perf','act'))]},
{id:'decl3',title:'The 3rd declension',blurb:'A new noun group with a stem you find in the genitive.',body:`
The **3rd declension** has masculine, feminine and neuter nouns. You can't predict the stem from the nominative, so always use the genitive: drop *-is* to find the stem.

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

?2
`,q:[nq('Write a named case and number of a 3rd declension noun',[['rēx',3,0],['mīles',0,1],['pater',2,0],['māter',4,0],['frāter',3,1],['corpus',0,1],['dux',1,0],['soror',2,1],['flūmen',3,1],['rēx',1,1]]),
tr('Translate a sentence with 3rd declension nouns',[
['Rēx mīlitēs laudat.','The king <praise> the soldiers.'],['Māter fīliam vocat.','The mother <call> the daughter.'],['Pater fīliō librum dat.','The father <give> [the son a book|a book to the son].'],['Mīlitēs ducem audiunt.','The soldiers <hear:p> the leader.'],['Soror frātrem videt.','The sister <see> the brother.'],['Rēgēs oppidum dēfendunt.','The kings <defend:p> the town.'],['Dux cum mīlitibus venit.','The leader <come> with the soldiers.'],['Frāter sorōrī rosam dat.','The brother <give> [the sister a rose|a rose to the sister].'],['Corpus virī portant.','They <carry:p> the body of the man.'],['Mātrēs fīliīs labōrant.','The mothers <work:p> for the sons.']],'Find the stem from the genitive, then read the ending for the case.')]},
{id:'pronouns',title:'Personal pronouns',blurb:'I, you, we and you all, in every case.',body:`
Personal pronouns stand in for people. Latin only uses them in the nominative for emphasis, since the verb ending already shows the subject.

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

?2
`,q:[ty('Write a Latin sentence using the right personal pronoun',[
['Translate into Latin: The girl sees me.','Puella mē videt.','"Me" as a direct object is *mē*.'],
['Translate into Latin: The sailor gives a rose to you (one person).','Nauta tibi rosam dat.','"To you" is the dative *tibi*.'],
['Translate into Latin: The teacher tells a story to me.','Magister mihi fābulam narrat.','"To me" is the dative *mihi*.'],
['Translate into Latin: The boy walks with me.','Puer mēcum ambulat.','*cum* attaches to the end of *mē*.'],
['Translate into Latin: The farmers work with us.','Agricolae nōbīscum labōrant.','*cum* attaches to the end of *nōbīs*.'],
['Translate into Latin: The queen calls you (one person).','Rēgīna tē vocat.','"You" as a direct object is *tē*.'],
['Translate into Latin: The friend gives a gift to us.','Amīcus nōbīs dōnum dat.','"To us" is the dative *nōbīs*.'],
['Translate into Latin: The sailors sail with you all.','Nautae vōbīscum nāvigant.','*cum* attaches to the end of *vōbīs*.'],
['Translate into Latin: The master warns us.','Dominus nōs monet.','"Us" as a direct object is *nōs*.'],
['Translate into Latin: The woman shows the money to you all.','Fēmina vōbīs pecūniam mōnstrat.','"To you all" is the dative *vōbīs*.']],'la'),
tr('Translate a sentence with a personal pronoun',[
['Mē vocat.','[He|She] <call> me.'],['Tibi rosam dō.','I <give:p> [you a rose|a rose to you].'],['Ego ambulō, tū curris.','I <walk:p>, you <run:p>.'],['Nōs vocant.','They <call:p> us.'],['Mēcum ambulat.','[He|She] <walk> with me.'],['Tē laudāmus.','We <praise:p> you.'],['Nōbīs fābulam narrat.','[He|She] <tell> [us a story|a story to us].'],['Vōbīscum nāvigō.','I <sail:p> with you.'],['Mihi epistulam scrībit.','[He|She] <write> [me a letter|a letter to me].'],['Vōs monēmus.','We <warn:p> you.']],'Pronouns use case endings of their own. Nominative pronouns add emphasis.')]},
]};
