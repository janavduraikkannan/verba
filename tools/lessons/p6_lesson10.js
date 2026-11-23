/* SPDX-License-Identifier: CC-BY-SA-4.0
 * Copyright (C) 2026 janavduraikkannan and Linguae contributors */
/* Lesson 10, from the class notes "How to Be in Latin II" and "Posse (to be able)", "Negative Commands" and "The Third Declension".
   decl3 and possum used to sit in Finishing Latin I: they keep their ids here so an account's saved progress still finds them. */
const {tr,mc,ty,spot,nq,nn}=require('./lib.js');

/* "Find the stem of ..." questions, written from the engine's own nouns so the stems can't disagree with the practice mode */
const stemQs=list=>ty('Find the stem of a 3rd declension noun from its genitive',list.map(x=>{const n=nn(x);
  return[`Find the stem of *${n.nom}, ${n.gen}*.`,[n.stem+'-',n.stem],`Remove *-is* from the genitive *${n.gen}*: the stem is *${n.stem}-*.`]}));

module.exports={title:'Lesson 10',lessons:[

/* ---------------------------------------------------------------- there is, es and este */
{id:'sum2',title:'esse II: there is, and es / este',blurb:'Putting est first to say there is, and giving commands with esse.',body:`
You already know *esse* as an equals sign. It has two more jobs.

# There is, there are

Latin can use *esse* to say that something **exists or is present**:

: Est casa prope silvam. = There is a house near the forest.
: Sunt casae prope silvam. = There are houses near the forest.

Compare the same words in a different order:

: Casa est prope silvam. = The house is near the forest.
: Casae sunt prope silvam. = The houses are near the forest.

Notice what each sentence is doing.

- *Casa est…* starts with a house we are already talking about, and tells us something about it.
- *Est casa…* introduces a house into the scene: **there is a house…**

In this use Latin often places *est* or *sunt* **before** the noun being introduced. English says the same thing with *there is* or *there are*. The other tenses work the same way: *Erat casa prope silvam* means *there was a house near the forest*.

?1

# Saying "Be!": es and este

*Esse* has its own forms for giving a command, and they do not follow the "drop -re" rule you learned for other verbs.

|~ The imperative of esse
|Form|Spoken to|Meaning|
|*es*|one person|be!|
|*este*|more than one person|be!|

: Es laeta! = Be happy!

The adjective agrees with the person (or people) spoken to, and the verb tells you whether it is one or more than one.

: Es laetus! = Be happy! (said to a boy)
: Es laeta! = Be happy! (said to a girl)
: Este laetī! = Be happy! (said to several people)

Don't mix up *es* and *est*. *Es* is a command to one person, while *est* says that someone else *is*.

?2

# Putting it together

?3
`,q:[
mc('Tell a sentence that introduces something (there is) from one that describes something we know',[
['Choose the Latin for "There is a temple near the town."','*Est templum prope oppidum.*',['*Templum est prope oppidum.*','*Sunt templa prope oppidum.*','*Est oppidum prope templum.*'],'A new temple is introduced into the scene, so *est* comes first.'],
['Choose the Latin for "There are horses in the field."','*Sunt equī in agrō.*',['*Equī sunt in agrō.*','*Est equus in agrō.*','*Sunt equus in agrō.*'],'The horses are new to the scene and there is more than one, so *sunt* comes first.'],
['Choose the Latin for "The sailors are in the forest."','*Nautae sunt in silvā.*',['*Sunt nautae in silvā.*','*Nautae est in silvā.*','*Nauta sunt in silvā.*'],'We already know about the sailors, so the sentence starts with them. *Sunt nautae…* would mean there are sailors.'],
['What does *Est vīlla prope viam* mean?','There is a farmhouse near the road.',['There are farmhouses near the road.','The farmhouse is near the road.','The road is near the farmhouse.'],'*Est* comes first and the farmhouse is singular: there is a farmhouse.'],
['What does *Sunt incolae in oppidō* mean?','There are inhabitants in the town.',['The inhabitants are in the town.','There is an inhabitant in the town.','The inhabitants are near the town.'],'*Sunt* comes first and *incolae* is plural: there are inhabitants.'],
['What does *Fēmina est in hortō* mean?','The woman is in the garden.',['There is a woman in the garden.','There are women in the garden.','The woman is near the garden.'],'The sentence starts with the woman, so it tells us about someone we already know.'],
['Which sentence introduces new water into the scene?','*Est aqua in viā.*',['*Aqua est in viā.*','*Aqua in viā est.*','*In viā aqua est.*'],'*Est* first means there is. With the noun first, the sentence describes something we already know.'],
['Why is *sunt* used in *Sunt casae in silvā*?','The thing being introduced is plural',['The thing being introduced is feminine','The sentence is a question','The verb is in the future'],'*Casae* is plural, so the verb is *sunt*.'],
['Choose the Latin for "There was a wolf in the forest."','*Erat lupus in silvā.*',['*Est lupus in silvā.*','*Erant lupī in silvā.*','*Lupus erat in silvā.*'],'It is past and singular, and the wolf is new to the scene: *Erat lupus…*'],
['Choose the Latin for "There will be water in the field."','*Erit aqua in agrō.*',['*Erat aqua in agrō.*','*Aqua erit in agrō.*','*Erunt aquae in agrō.*'],'It is future and singular, and the water is new to the scene: *Erit aqua…*']]),
mc('Give a command with es or este',[
['Choose the Latin for "Girl, be happy!"','*Puella, es laeta!*',['*Puella, este laeta!*','*Puella, est laeta!*','*Puella, es laetus!*'],'One person, so *es*. *Laeta* agrees with the girl.'],
['Choose the Latin for "Boys, be good!"','*Puerī, este bonī!*',['*Puerī, es bonī!*','*Puerī, este bonus!*','*Puerī, sunt bonī!*'],'More than one person, so *este*. *Bonī* agrees with *puerī*.'],
['Choose the Latin for "Sailor, be good!"','*Nauta, es bonus!*',['*Nauta, este bonus!*','*Nauta, est bonus!*','*Nauta, es bona!*'],'One person, so *es*. *Nauta* is masculine, so the adjective is *bonus*.'],
['What does *Fēminae, este laetae!* mean?','Women, be happy!',['Woman, be happy!','The women are happy.','Women, you are happy.'],'*Este* is a command to more than one person.'],
['What does *Amīce, es laetus!* mean?','Friend, be happy!',['Friends, be happy!','Friend, you are happy.','Friend, he is happy.'],'*Es* is a command to one person.'],
['In *Discipulī, este bonī!*, how many people are spoken to?','More than one',['One','Exactly two','It cannot be told'],'*Este* is the command for more than one person.'],
['What is the difference between *es* and *est*?','es tells one person to be; est says that someone is',['es is plural and est is singular','es is past and est is present','There is no difference'],'*Es* is a command. *Est* is a statement about he, she or it.'],
['Choose the Latin for "Girls, be good!"','*Puellae, este bonae!*',['*Puellae, es bonae!*','*Puellae, este bonī!*','*Puellae, estis bonae!*'],'More than one person, so *este*. *Bonae* is feminine plural.'],
['Why is the adjective *laetī* masculine plural in *Amīcī, este laetī!*?','It agrees with the people spoken to',['It agrees with the verb','It is always masculine','It is the direct object'],'The adjective agrees with *amīcī*, the people being told to be happy.'],
['Choose the Latin for "Farmer, be famous!"','*Agricola, es clārus!*',['*Agricola, este clārus!*','*Agricola, est clārus!*','*Agricola, es clāra!*'],'One person, so *es*. *Agricola* is masculine, so the adjective is *clārus*.']]),
tr('Translate sentences with there is and es or este',[
['Est templum in oppidō.','There is a temple in the town.'],
['Sunt puellae in hortō.','There are girls in the garden.'],
['Nauta, es bonus!','Sailor, be good!'],
['Poētae, este laetī!','Poets, be happy!'],
['Erat lupus in silvā.','There was a wolf in the forest.'],
['Erunt agricolae in agrō.','There will be farmers in the field.'],
['Amīca, es laeta!','Friend, be happy!'],
['Dea est in templō.','The goddess is in the temple.'],
['Est aqua in viā.','There is water in the road.'],
['Discipulī, este bonī!','Students, be good!']],'Est or sunt first means there is or there are. Es is a command to one person and este to more than one.')]},

/* ---------------------------------------------------------------- posse */
{id:'possum',title:'From “to be” to “to be able”: esse → posse',blurb:'possum is pot- plus esse, and the t turns into s.',body:`
Like *adsum* and *absum*, the verb *posse* (to be able, can) is built on forms of *esse* (to be).

It was originally formed by putting **pot-** before forms of *esse*. The element *pot-* comes from the adjective *potis*, meaning able or capable.

|~ posse, present
|Latin|English|
|possum|I am able, I can|
|potes|you are able, you can|
|potest|he, she or it is able, can|
|possumus|we are able, we can|
|potestis|you (all) are able, can|
|possunt|they are able, they can|

# Assimilation

When the form of *esse* begins with **s**, the **t** of *pot-* changes to **s** to match the following sound:

|~ pot- + a form of esse
|Pieces|Joined|After the change|
|pot + sum|potsum|possum|
|pot + sunt|potsunt|possunt|

This is called **assimilation**: one sound becomes more like a neighboring sound.

The infinitive *posse* developed in the same way: pot + esse → posse.

?1

# Past and future

Once the form of *esse* begins with a vowel rather than **s**, the original **pot-** is visible again.

|~ posse: present, continuous past and future
|Person|Present|Continuous past|Future|
|I|possum|poteram|poterō|
|you|potes|poterās|poteris|
|he/she/it|potest|poterat|poterit|
|we|possumus|poterāmus|poterimus|
|you all|potestis|poterātis|poteritis|
|they|possunt|poterant|poterunt|

Notice that the *pot-* seen in *potes* and *potest* appears throughout the continuous past and the future. Compare the forms of *esse* that you already know:

|~ esse and posse
|esse|posse|
|eram|poteram|
|erās|poterās|
|erat|poterat|
|erō|poterō|
|eris|poteris|
|erit|poterit|

?2

# possum with an infinitive

*Possum* takes a complementary infinitive.

: Nāvigāre possumus. = We can sail.
: Vidēre poterat. = She could see.
: Venīre poterunt. = They will be able to come.

?3

?4
`,q:[
mc('Explain how possum is built from pot- and esse',[
['Why does *possum* have a double *s* instead of *ts*?','The t of pot- became s before the s of sum',['The t of pot- was dropped by accident','Possum comes from a different verb','The ending is always doubled'],'*pot* + *sum* → *potsum* → *possum*. This is assimilation.'],
['What is the name for one sound becoming more like its neighbor, as in pot + sum → possum?','assimilation',['conjugation','declension','agreement'],'Assimilation: the *t* becomes an *s* to match the *s* after it.'],
['Which two pieces make up *possunt*, and which one is *pot-*?','pot + sunt',['pos + unt','pot + unt','posse + nt'],'*pot* + *sunt* → *potsunt* → *possunt*.'],
['*Possum* is made from *pot-* and which form of *esse*?','sum',['sim','est','esse'],'*pot* + *sum*.'],
['Which sentence has a form of *possum* in which the *t* of *pot-* has become *s*?','*Currere possunt.*',['*Currere poterant.*','*Currere poterit.*','*Currere potest.*'],'*Possunt* is *pot* + *sunt*, and the *t* has become *s*.'],
['Which sentence has a form of *possum* in which the *t* of *pot-* does not change?','*Dormīre potestis.*',['*Dormīre possumus.*','*Dormīre possum.*','*Dormīre possunt.*'],'*Potestis* is *pot* + *estis*. The next sound is *e*, not *s*, so the *t* stays.'],
['The infinitive *posse* is built from *pot-* and which verb form?','esse',['sum','est','ere'],'*pot* + *esse* → *posse*.'],
['Why does *potest* keep the *t* of *pot-*?','The next sound is e, not s',['It is the past tense','It is plural','It has no ending'],'Only a following *s* changes the *t*. *Potest* is *pot* + *est*.'],
['What does the element pot- come from?','The adjective potis, meaning able',['The verb ponere, meaning put','The preposition prō, meaning for','The adverb post, meaning after'],'*Potis* means able or capable.'],
['Which verb is also built on forms of esse?','adsum',['amō','videō','mittō'],'*Adsum*, *absum* and *possum* are all *esse* with something in front.']]),
mc('Read the person, number and tense of a form of possum',[
['What does *Venīre poterō.* mean?','I will be able to come.',['I am able to come.','I was able to come.','You will be able to come.'],'*Poterō* is *pot* + *erō*, future, I.'],
['What does *Dormīre poterātis.* mean?','You (all) were able to sleep.',['You (all) are able to sleep.','You (all) will be able to sleep.','They were able to sleep.'],'*Poterātis* is *pot* + *erātis*, the continuous past, you all.'],
['What does *Manēre potestis.* mean?','You (all) can stay.',['You (all) could stay.','You (all) will be able to stay.','We can stay.'],'*Potestis* is the present, you all.'],
['What does *Scrībere poterunt.* mean?','They will be able to write.',['They were able to write.','They are able to write.','We will be able to write.'],'*Poterunt* is *pot* + *erunt*, future, they.'],
['What does *Legere poteris.* mean?','You (one person) will be able to read.',['You (one person) were able to read.','You (one person) can read.','He will be able to read.'],'*Poteris* is *pot* + *eris*, future, you.'],
['What does *Pugnāre poterant.* mean?','They were able to fight.',['They will be able to fight.','They are able to fight.','We were able to fight.'],'*Poterant* is *pot* + *erant*, the continuous past, they.'],
['What does *Nāvigāre poterimus.* mean?','We will be able to sail.',['We were able to sail.','We can sail.','They will be able to sail.'],'*Poterimus* is *pot* + *erimus*, future, we.'],
['What does *Currere poterās.* mean?','You (one person) were able to run.',['You (one person) will be able to run.','You (one person) can run.','I was able to run.'],'*Poterās* is *pot* + *erās*, the continuous past, you.'],
['What does *Vidēre poterit.* mean?','He or she will be able to see.',['He or she was able to see.','He or she can see.','They will be able to see.'],'*Poterit* is *pot* + *erit*, future, he or she.'],
['What does *Audīre poteram.* mean?','I was able to hear.',['I am able to hear.','I will be able to hear.','We were able to hear.'],'*Poteram* is *pot* + *eram*, the continuous past, I.']]),
mc('Choose the sentence with the right form of possum',[
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

/* ---------------------------------------------------------------- nōlī and nōlīte */
{id:'negcmd',title:'Negative commands: nōlī and nōlīte',blurb:'Don’t be willing to…: how Latin says don’t.',body:`
Latin has a special way of giving a **negative command**, telling someone **not** to do something. It uses the imperative of *nōlle* (to be unwilling, not to want) followed by an infinitive.

|~ Negative commands
|Form|Spoken to|Meaning|
|*nōlī* + infinitive|one person|don't …!|
|*nōlīte* + infinitive|more than one person|don't …!|

Literally, the construction means **don't be willing to …** or **don't want to …**:

: Nōlī audīre! = Don't listen! (literally, don't be willing to listen!)
: Nōlīte audīre! = Don't listen! (literally, don't be willing to listen!)

Because *nōlī* and *nōlīte* already carry the negative idea, no additional word for **not** is needed.

! Compare a command with a negative command: *Audī!* means listen, and *Nōlī audīre!* means don't listen. The negative command is two words, a form of *nōlle* and an infinitive.

?1

# Negative passive commands

The infinitive can also be passive:

: Nōlī audīrī! = Don't be heard!
: Nōlīte audīrī! = Don't be heard!

The structure is exactly the same:

|~ Active and passive
|Pattern|Meaning|
|*nōlī* + active infinitive|don't do …|
|*nōlī* + passive infinitive|don't be …-ed|

?2

> You may also see *nē* with the imperative as a negative command in poetry, like *Nē timē* (don't be afraid). In your own Latin, use *nōlī* and *nōlīte*.

?3
`,q:[
mc('Choose the right negative command for one person or for several',[
['Choose the Latin for "Don\'t run!" (said to one boy).','*Nōlī currere!*',['*Nōlīte currere!*','*Nōn curre!*','*Nōlī currit!*'],'One person, so *nōlī*, followed by the infinitive *currere*.'],
['Choose the Latin for "Don\'t sleep!" (said to several sailors).','*Nōlīte dormīre!*',['*Nōlī dormīre!*','*Nōn dormīte!*','*Nōlīte dormiunt!*'],'More than one person, so *nōlīte*, followed by the infinitive *dormīre*.'],
['Choose the Latin for "Don\'t stay!" (said to one girl).','*Nōlī manēre!*',['*Nōlīte manēre!*','*Nōlī manē!*','*Nōn manēre!*'],'One person, so *nōlī*, followed by the infinitive *manēre*.'],
['Choose the Latin for "Boys, don\'t fight!"','*Puerī, nōlīte pugnāre!*',['*Puerī, nōlī pugnāre!*','*Puerī, nōn pugnāte!*','*Puerī, nōlīte pugnant!*'],'The boys are more than one person, so *nōlīte* and an infinitive.'],
['What does *Nōlī labōrāre!* mean?','Don\'t work!',['I don\'t want to work.','Work!','You are not working.'],'*Nōlī* plus an infinitive is a negative command.'],
['What does *Nōlīte scrībere!* mean?','Don\'t write, all of you!',['Don\'t write, you alone!','They don\'t write.','Write, all of you!'],'*Nōlīte* is the command for more than one person.'],
['Which word already carries the idea of "not" in *Nōlī vidēre!*?','nōlī',['vidēre','There is none','nōn'],'*Nōlī* is a form of *nōlle*, to be unwilling, so no extra *nōn* is needed.'],
['Why is there no *nōn* in *Nōlī dūcere!*?','Nōlī already carries the negative idea',['Nōn is only used with nouns','Latin has no word for not','Nōn is added after the verb'],'*Nōlī* means *don\'t be willing*, so it is already negative.'],
['The literal meaning of *Nōlī dīcere!* is...','Don\'t be willing to say!',['Be willing to say!','I am unwilling to say.','You will not say.'],'*Nōlī* means *don\'t be willing*, and the infinitive tells you to what.'],
['Which form is used to tell several people not to do something?','nōlīte + infinitive',['nōlī + infinitive','nōn + imperative','nē + infinitive'],'*Nōlīte* is the plural command, followed by an infinitive.']]),
tr('Translate a negative command',[
['Nōlī portāre rosam!','Don\'t carry the rose!'],
['Nōlīte spectāre lupum!','Don\'t watch the wolf!'],
['Nōlī mittere epistulam!','Don\'t send the letter!'],
['Puer, nōlī vocāre canem!','Boy, don\'t call the dog!'],
['Nōlīte relinquere oppidum!','Don\'t abandon the town!'],
['Nōlī tenēre gladium!','Don\'t hold the sword!'],
['Puellae, nōlīte timēre!','Girls, don\'t [fear|be afraid]!'],
['Nōlī laudārī!','Don\'t be praised!'],
['Nōlīte pūnīrī!','Don\'t be punished!'],
['Nōlī vocārī!','Don\'t be called!']],'Nōlī (one person) or nōlīte (more than one) plus an infinitive. A passive infinitive means don\'t be …-ed.',{alt:{1:['Nōlī spectāre lupum!'],7:['Nōlīte laudārī!'],9:['Nōlīte vocārī!']}}),
mc('Tell a command from a negative command, active from passive',[
['Choose the Latin for "Look!" (said to one person).','*Spectā!*',['*Nōlī spectāre!*','*Spectāte!*','*Nōlīte spectāre!*'],'A plain command to one person drops the *-re*: *spectā*.'],
['Choose the Latin for "Don\'t look!" (said to one person).','*Nōlī spectāre!*',['*Spectā!*','*Nōlīte spectāre!*','*Nōlī spectā!*'],'A negative command to one person is *nōlī* plus the infinitive.'],
['What follows *nōlī* or *nōlīte* in a negative command?','An infinitive',['An imperative','A genitive','The word nōn'],'*Nōlī* and *nōlīte* take an infinitive: *nōlī* + *spectāre*.'],
['What does *Nōlī capī!* mean?','Don\'t be captured!',['Don\'t capture!','Capture!','You are not captured.'],'*Capī* is the passive infinitive, so the command is don\'t be captured.'],
['What does *Nōlīte capere hostēs!* mean?','Don\'t capture the enemies!',['Don\'t be captured by the enemies!','Capture the enemies!','They don\'t capture the enemies.'],'*Capere* is active and *hostēs* is the direct object.'],
['The infinitive in *Nōlīte dēfendī!* is...','passive',['active','future','perfect'],'*Dēfendī* ends in *-ī*, the passive infinitive of *dēfendere*.'],
['How is *Nōlī monēre!* different from *Nōlī monērī!*?','The first means don\'t warn, and the second means don\'t be warned',['The first is to one person and the second to several','The first is past and the second is future','They mean the same thing'],'*Monēre* is active and *monērī* is passive.'],
['Choose the Latin for "Don\'t be seen!" (said to several people).','*Nōlīte vidērī!*',['*Nōlī vidērī!*','*Nōlīte vidēre!*','*Nōn vidērī!*'],'Several people, so *nōlīte*, and "be seen" is the passive infinitive *vidērī*.'],
['The forms *nōlī* and *nōlīte* come from which verb?','nōlle',['velle','posse','esse'],'*Nōlle* means to be unwilling.'],
['Choose the Latin for "Don\'t be punished!" (said to one person).','*Nōlī pūnīrī!*',['*Nōlīte pūnīrī!*','*Nōlī pūnīre!*','*Pūnīrī!*'],'One person, so *nōlī*, and the passive infinitive *pūnīrī*.']])]},

/* ---------------------------------------------------------------- the third declension */
{id:'decl3',title:'The 3rd declension: finding the hidden stem',blurb:'The nominative can disguise the stem, so use the genitive.',body:`
Third-declension nouns can look very different from one another in the nominative singular:

: urbs, urbis (f.) = city
: prīnceps, prīncipis (m.) = chief
: tempus, temporis (n.) = time
: homō, hominis (m.) = person, human being
: iter, itineris (n.) = journey

At first it may not be obvious that these nouns belong to the same declension. That is because the nominative singular of a third-declension noun can undergo changes that **disguise its stem**.

Fortunately you do not have to guess the stem. **The genitive singular reveals it.**

# Finding the stem

The genitive singular of third-declension nouns ends in *-is*. Remove this ending to find the stem:

|~ Remove -is from the genitive
|Nominative, genitive|Remove -is|Stem|
|*urbs, urbis*|urb-is|[[urb-]]|
|*prīnceps, prīncipis*|prīncip-is|[[prīncip-]]|
|*tempus, temporis*|tempor-is|[[tempor-]]|
|*homō, hominis*|homin-is|[[homin-]]|

The other case endings are then added to this stem.

**The nominative may disguise the stem. The genitive reveals it.**

You have already done something similar with second-declension nouns ending in *-er*: *ager, agrī* has the stem *agr-*. With third-declension nouns, however, this happens much more often. Do not try to guess the stem from the nominative. Look at the genitive.

# The genitive tells you the declension

The genitive singular also tells you which declension a noun belongs to:

|~ Genitive singular
|Declension|Genitive|Example|
|1st|-ae|*porta, portae*|
|2nd|-ī|*amīcus, amīcī*|
|3rd|-is|*urbs, urbis*|

So the genitive gives you two important pieces of information at once:

- **-is** → third declension
- **remove -is** → find the stem

?1

?2

# Third-declension endings

Third-declension masculine and feminine nouns use these endings, and neuters follow the same pattern with the neuter rule you already know.

|~ 3rd declension endings
|Case|Sing. m./f.|Sing. n.|Plur. m./f.|Plur. n.|
|Nom./Voc.|-s (varies)|(varies)|[[-ēs]]|[[-a]]|
|Acc.|[[-em]]|same as nom.|[[-ēs]]|[[-a]]|
|Dat.|[[-ī]]|[[-ī]]|[[-ibus]]|[[-ibus]]|
|Abl.|[[-e]]|[[-e]]|[[-ibus]]|[[-ibus]]|
|Gen.|[[-is]]|[[-is]]|[[-um]]|[[-um]]|

The original masculine and feminine nominative singular ending was **-s**. When this *-s* came into contact with the final consonant of a stem, the combination of sounds could change over time. That is why the nominative singular now appears in such a variety of forms.

For now, remember that **the nominative singular is given in the vocabulary entry**. You do not need to work it out for yourself. The other forms are much more predictable: find the stem from the genitive and add the ending.

## An example: prīnceps

*prīnceps, prīncipis*, m. means chief. Remove *-is* from *prīncipis* to get the stem *prīncip-*, then add the case endings.

|~ prīnceps, prīncipis, m.
|Case|Singular|Plural|
|Nom./Voc.|prīnceps|prīncip[[ēs]]|
|Acc.|prīncip[[em]]|prīncip[[ēs]]|
|Dat.|prīncip[[ī]]|prīncip[[ibus]]|
|Abl.|prīncip[[e]]|prīncip[[ibus]]|
|Gen.|prīncip[[is]]|prīncip[[um]]|

The stem *prīncip-* appears throughout the declension. The nominative singular *prīnceps* is the form in which historical sound changes have disguised it.

?3

## Neuter nouns

Third-declension neuter nouns follow the same pattern, with the neuter rule you already know: **the accusative of a neuter noun is always the same as its nominative.** In the plural, both the nominative and the accusative end in *-a*.

*iter, itineris*, n. means journey. Remove *-is* from *itineris* to get the stem *itiner-*.

|~ iter, itineris, n.
|Case|Singular|Plural|
|Nom./Voc.|iter|itiner[[a]]|
|Acc.|iter|itiner[[a]]|
|Dat.|itiner[[ī]]|itiner[[ibus]]|
|Abl.|itiner[[e]]|itiner[[ibus]]|
|Gen.|itiner[[is]]|itiner[[um]]|

The neuter accusative therefore does **not** take the masculine and feminine ending *-em*:

: prīncipem = masculine accusative singular
: iter = neuter accusative singular

Again, the unusual nominative *iter* does not cause a problem. The genitive *itineris* reveals the stem *itiner-*.

?4

# Why does the nominative look so different?

The different nominative forms are **not random**. Many masculine and feminine third-declension nouns originally formed their nominative singular by adding *-s* to the stem:

**stem + -s → nominative singular**

Sometimes the stem and the *-s* are still easy to see: *urb-* + *-s* → *urbs*. But when *-s* met certain consonants at the end of a stem, the sounds interacted and changed over time.

|~ How -s disguised the stem
|Stem|Joined|Nominative|
|noct-|nocs|*nox, noctis*|
|mont-|monts|*mōns, montis*|

The nominative *-s* caused sound changes that disguised part of the stem. Sometimes the historical changes were more extensive: *homō, hominis* has the stem *homin-*, and *arbor, arboris* has the stem *arbor-*.

The general process is: **stem + -s → sounds collide → sounds change → stem becomes harder to see.**

These examples are only meant to show that the nominative forms are not random. For practical purposes, simply look at the genitive:

|~ Always look at the genitive
|Nominative|Genitive|Stem|
|*nox*|noct-is|[[noct-]]|
|*mōns*|mont-is|[[mont-]]|
|*prīnceps*|prīncip-is|[[prīncip-]]|

## Third-declension forms in English

Some English words borrowed from Latin or Greek preserve changes like these: **appendix** → **appendices**, **matrix** → **matrices**, **synopsis** → **synopses**, **parenthesis** → **parentheses**. You may already be used to words whose form changes considerably when a different ending is added.

?5

# Practice

?6
`,q:[
stemQs(['rēx','mīles','pater','māter','dux','soror','corpus','flūmen','cīvis','nāvis']),
mc('Tell the declension from the genitive singular',[
['Which declension has the genitive singular *mīlitis*?','3rd declension',['1st declension','2nd declension'],'A genitive ending in *-is* is third declension.'],
['Which declension has the genitive singular *rēgīnae*?','1st declension',['2nd declension','3rd declension'],'A genitive ending in *-ae* is first declension.'],
['Which declension has the genitive singular *equī*?','2nd declension',['1st declension','3rd declension'],'A genitive ending in *-ī* is second declension.'],
['Which declension has the genitive singular *patris*?','3rd declension',['1st declension','2nd declension'],'A genitive ending in *-is* is third declension.'],
['Which declension has the genitive singular *oppidī*?','2nd declension',['1st declension','3rd declension'],'A genitive ending in *-ī* is second declension.'],
['Which declension has the genitive singular *nautae*?','1st declension',['2nd declension','3rd declension'],'A genitive ending in *-ae* is first declension.'],
['Which declension has the genitive singular *corporis*?','3rd declension',['1st declension','2nd declension'],'A genitive ending in *-is* is third declension.'],
['A vocabulary entry reads *flūmen, flūminis, n.* Which declension is the noun?','3rd declension',['1st declension','2nd declension'],'The genitive *flūminis* ends in *-is*.'],
['Which declension has the genitive singular *sorōris*?','3rd declension',['1st declension','2nd declension'],'A genitive ending in *-is* is third declension.'],
['What does a genitive singular ending in -is tell you?','The noun is 3rd declension, and removing -is gives the stem',['The noun is 1st declension','The noun is plural','The noun is feminine'],'Two pieces of information at once: the declension, and (once *-is* is removed) the stem.']]),
nq('Write a named case and number of a 3rd declension noun',[['homō',3,0],['mīles',0,1],['pater',2,0],['māter',4,0],['flūmen',3,1],['corpus',0,1],['dux',1,0],['soror',2,1],['rēx',1,1],['tempus',4,1]]),
mc('Use the neuter rule and the 3rd declension neuter endings',[
['What is the accusative singular of the neuter noun *flūmen*?','*flūmen*',['*flūminem*','*flūmina*','*flūminis*'],'The accusative of a neuter noun is the same as its nominative.'],
['What is the nominative plural of the neuter noun *corpus*?','*corpora*',['*corporēs*','*corpus*','*corporibus*'],'Neuter nominative plurals end in *-a*, added to the stem *corpor-*.'],
['A neuter noun\'s accusative singular is...','the same as its nominative',['the nominative plus -em','the genitive without -is','the same as its ablative'],'The neuter rule: the accusative is always the same as the nominative.'],
['What ending do 3rd declension neuter nouns take in the nominative and accusative plural?','-a',['-ēs','-ibus','-um'],'Neuter plurals end in *-a* in both the nominative and the accusative.'],
['What is the dative plural of *corpus, corporis*, n.?','*corporibus*',['*corporēs*','*corpora*','*corporum*'],'The dative plural ends in *-ibus*, added to the stem *corpor-*.'],
['Which form could be either the nominative or the accusative singular?','*flūmen*',['*flūminis*','*flūminī*','*flūmine*'],'For a neuter, the two forms are the same.'],
['What is the genitive plural of *corpus*?','*corporum*',['*corporis*','*corporēs*','*corporibus*'],'The genitive plural ends in *-um*, added to the stem *corpor-*.'],
['What is the ablative singular of *flūmen*?','*flūmine*',['*flūminī*','*flūmen*','*flūminis*'],'The ablative singular ends in *-e*, added to the stem *flūmin-*.'],
['What is the dative singular of *flūmen*?','*flūminī*',['*flūmine*','*flūminis*','*flūmina*'],'The dative singular ends in *-ī*, added to the stem *flūmin-*.'],
['How does a neuter 3rd declension accusative singular differ from the masculine accusative singular?','It has no -em ending',['It ends in -ēs','It ends in -ibus','There is no difference'],'A neuter accusative is the same as its nominative and does not take *-em*.']]),
mc('Explain why the nominative looks different from the stem',[
['What was the original masculine and feminine nominative singular ending of 3rd declension nouns?','-s',['-is','-em','-ēs'],'The nominative was formed by adding *-s* to the stem.'],
['*dux, ducis*: what is the stem?','*duc-*',['*dux-*','*ducis-*','*du-*'],'Remove *-is* from the genitive *ducis*.'],
['What is the stem of *rēx, rēgis*?','*rēg-*',['*rēx-*','*rēgis-*','*rēgī-*'],'Remove *-is* from the genitive *rēgis*. The nominative *rēx* is *rēg-* + *-s*, disguised.'],
['Where should you look to find the stem of a 3rd declension noun?','The genitive singular',['The nominative singular','The accusative plural','The vocative singular'],'The nominative may disguise the stem. The genitive reveals it.'],
['Why is the nominative singular given in the vocabulary entry?','You cannot always work it out from the stem',['It is the only form with an ending','It is always the same as the genitive','It is the stem'],'Sound changes disguise the stem, so the nominative is listed for you.'],
['Which description fits how the nominative singular can disguise a 3rd declension stem?','The nominative -s met the end of the stem, and the sounds changed',['The stem was lost when -is was added','3rd declension nouns have two stems','The accusative changes the stem'],'Stem + -s → sounds collide → sounds change → the stem is harder to see.'],
['Which English plural keeps a Latin-style change in the word?','matrix → matrices',['dog → dogs','book → books','table → tables'],'The English plural of *matrix* keeps its Latin form, and the ending changes the word, as in the 3rd declension.'],
['What is the plural of the English word parenthesis?','parentheses',['parenthesises','parenthesis','parenthesies'],'Like Latin and Greek words, it changes its ending to form the plural.'],
['Do you need to work out the nominative singular for yourself?','No, it is given in the vocabulary entry',['Yes, from the stem','Yes, by adding -s to the genitive','Only for neuter nouns'],'The nominative is in the vocabulary entry. The other forms come from the stem.'],
['Which is correct? The stem of a 3rd declension noun is found by...','removing -is from the genitive',['removing -s from the nominative','removing -em from the accusative','removing -ēs from the plural'],'The genitive singular ends in *-is*, and removing it gives the stem.']]),
tr('Translate a sentence with 3rd declension nouns',[
['Rēx mīlitēs laudat.','The king <praise> the soldiers.'],['Māter fīliam vocat.','The mother <call> the daughter.'],['Pater fīliō librum dat.','The father <give> [the son a book|a book to the son].'],['Mīlitēs ducem audiunt.','The soldiers <hear:p> the leader.'],['Soror frātrem videt.','The sister <see> the brother.'],['Prīnceps hominēs vocat.','The chief <call> the people.'],['Dux cum mīlitibus venit.','The leader <come> with the soldiers.'],['Homō itinera spectat.','The person <watch> the journeys.'],['Corpus virī portant.','They <carry:p> the body of the man.'],['Mātrēs fīliīs labōrant.','The mothers <work:p> for the sons.']],'Find the stem from the genitive, then read the ending for the case.')]},
]};
