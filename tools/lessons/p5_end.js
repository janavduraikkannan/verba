const {tr,mc,ty,spot,enQs,laQs,parseQs,nq}=require('./lib.js');
const pf=['laudāre','monēre','dūcere','capere','audīre','vidēre','mittere','scrībere','portāre','vincere'];
module.exports={title:'Finishing Latin I',lessons:[
{id:'sum',title:'sum: the verb "to be"',blurb:'The most common irregular verb, and the predicate nominative.',body:`
*Esse*, to be, is irregular, so learn its forms by heart.

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

?2
`,q:[ty('Write a form of esse',[['Write "they are" in Latin.','sunt','3rd person plural present.'],['Write "I am" in Latin.','sum','1st person singular present.'],['Write "you (one person) are" in Latin.','es','2nd person singular present.'],['Write "we were" in Latin.',['erāmus'],'Imperfect.'],['Write "he was" in Latin.','erat','Imperfect.'],['Write "they will be" in Latin.','erunt','Future.'],['Write "I will be" in Latin.','erō','Future.'],['Write "you all are" in Latin.','estis','2nd person plural present.'],['Write "she is" in Latin.','est','3rd person singular present.'],['Write "we will be" in Latin.','erimus','Future.']],'la'),
tr('Translate a sentence with esse',[
['Puella laeta est.','The girl is happy.'],['Agricolae fessī sunt.','The farmers are tired.'],['Nauta bonus erat.','The sailor was good.'],['Dōna pulchra sunt.','The gifts are beautiful.'],['Rēgīna clāra erit.','The queen will be famous.'],['Puerī laetī erant.','The boys were happy.'],['Marcus poēta est.','Marcus is a poet.'],['Discipulī sumus.','We are students.'],['Amīca bona est.','The friend is good.'],['Fēminae īrātae erunt.','The women will be angry.']],'esse links the subject to a nominative word.')]},
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
`,q:[mc('Choose a form of possum',[
['Choose "we can".','*possumus*',['*potumus*','*possimus*','*poteramus*'],'*t* becomes *s* before *s*.'],['Choose "they can".','*possunt*',['*potunt*','*poterunt*','*potest*'],'*t* becomes *s* before *s*.'],['Choose "she can".','*potest*',['*possit*','*possunt*','*potes*'],'*pot-* + *est*.'],['Choose "you (one person) can".','*potes*',['*posses*','*potest*','*possum*'],'*pot-* + *es*.'],['Choose "I could".','*poteram*',['*possum*','*poterō*','*potuit*'],'*pot-* + *eram*.'],['Choose "they will be able".','*poterunt*',['*poterant*','*possunt*','*potērunt*'],'*pot-* + *erunt*.'],['Choose "you all can".','*potestis*',['*possetis*','*potes*','*possumus*'],'*pot-* + *estis*.'],['Choose "I can".','*possum*',['*potum*','*potes*','*poterō*'],'*t* becomes *s* before *s*.'],['What does *possum* take?','a complementary infinitive',['a dative','an ablative','a vocative'],'*Possum* needs another verb.'],['Choose "we could".','*poterāmus*',['*possumus*','*poterimus*','*poteramur*'],'*pot-* + *erāmus*.']]),
tr('Translate a sentence with possum',[
['Nāvigāre possumus.','We [can sail|are able to sail].'],['Vidēre poterat.','[He|She] [could see|was able to see].'],['Venīre poterunt.','They will be able to come.'],['Puella scrībere potest.','The girl [can write|is able to write].'],['Nautae pugnāre possunt.','The sailors [can fight|are able to fight].'],['Currere nōn possum.','I [cannot|can not|am not able to] run.'],['Legere potes.','You [can read|are able to read].'],['Agricola labōrāre poterat.','The farmer [could work|was able to work].'],['Dormīre poterimus.','We will be able to sleep.'],['Puerī audīre possunt.','The boys [can hear|are able to hear].']],'possum is translated can or be able, with an infinitive.')]},
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
`,q:[ty('Write the Latin personal pronoun for an English pronoun in a given case',[['Write "me" as a direct object.','mē','Accusative of *ego*.'],['Write "to you (one person)".','tibi','Dative of *tū*.'],['Write "to me".','mihi','Dative of *ego*.'],['Write "with me".','mēcum','*cum* attaches to the end.'],['Write "with us".','nōbīscum','*cum* attaches to the end.'],['Write "you (one person)" as a direct object.','tē','Accusative of *tū*.'],['Write "to us".','nōbīs','Dative of *nōs*.'],['Write "with you all".','vōbīscum','*cum* attaches to the end.'],['Write "we" as an emphatic subject.','nōs','Nominative plural.'],['Write "to you all".','vōbīs','Dative of *vōs*.']],'la'),
tr('Translate a sentence with a personal pronoun',[
['Mē videt.','[He|She] <see> me.'],['Tibi dōnum dō.','I <give:p> [you a gift|a gift to you].'],['Ego labōrō, tū dormīs.','I <work:p>, you <sleep:p>.'],['Nōs vocant.','They <call:p> us.'],['Mēcum ambulat.','[He|She] <walk> with me.'],['Tē laudāmus.','We <praise:p> you.'],['Nōbīs fābulam narrat.','[He|She] <tell> [us a story|a story to us].'],['Vōbīscum nāvigō.','I <sail:p> with you.'],['Mihi epistulam scrībit.','[He|She] <write> [me a letter|a letter to me].'],['Vōs monēmus.','We <warn:p> you.']],'Pronouns use case endings of their own. Nominative pronouns add emphasis.')]},
]};
