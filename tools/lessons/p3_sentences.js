const {tr,mc,ty}=require('./lib.js');
module.exports={title:'Sentence patterns',lessons:[
{id:'questions',title:'Questions: -ne and quis',blurb:'Asking yes or no questions, and asking who.',body:`
# Yes or no questions

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

?2
`,q:[mc('Identify how a Latin question is formed',[
['How do you turn *Puella venit* into a question?','*Venitne puella?*',['*Puella venit ne*','*Quis puella venit?*','*Ne puella venit*'],'-ne attaches to the first word.'],['What does -ne translate to in English?','Nothing: it only marks a question',['not','who','and'],'-ne is a question signal.'],['What does *quis* mean?','who',['what kind','why','where'],'*quis* asks who.'],['Which is correct for "Who is walking?"','*Quis ambulat?*',['*Quisne ambulat?*','*Quis ambulant?*','*Ambulatne quis?*'],'*quis* takes a singular verb, without -ne.'],['In *Audīsne puellam?*, what is the subject?','you',['the girl','she','we'],'-s in *audīs* means you.'],['*Dormitne puer?* means...','Is the boy sleeping?',['The boy is sleeping.','Who is sleeping?','The boy is not sleeping.'],'-ne makes a yes or no question.'],['Where does -ne usually go?','On the first word of the sentence',['On the last word','On the subject only','On the verb only'],'Any first word can take it.'],['Which is correct for "Does the farmer work?"','*Labōratne agricola?*',['*Labōrat agricola ne?*','*Quis labōrat agricola?*','*Labōrantne agricola?*'],'A singular verb with -ne on the first word.'],['*Quis portat?* means...','Who carries?',['Does he carry?','What carries him?','Why does he carry?'],'*quis* means who.'],['What is -ne called, since it attaches to another word?','an enclitic',['an infinitive','a declension','a vocative'],'An enclitic leans on the word before it.']]),
tr('Translate a Latin question',[
['Venitne puella?','[Is the girl coming|Does the girl come]?'],['Quis venit?','Who [comes|is coming]?'],['Nautamne vidēs?','[Do you see|Are you seeing] the sailor?'],['Quis nautam vocat?','Who [calls|is calling] the sailor?'],['Dormitne puer?','[Is the boy sleeping|Does the boy sleep]?'],['Quis labōrat?','Who [works|is working]?'],['Audiuntne puellae?','[Are the girls listening|Are the girls hearing|Do the girls hear]?'],['Quis agricolam monet?','Who [warns|is warning] the farmer?'],['Rosamne portās?','[Are you carrying|Do you carry] the rose?'],['Quis fābulam scrībit?','Who [writes|is writing] the story?']],'-ne marks a yes or no question and quis asks who.')]},

{id:'andque',title:'And: et and -que',blurb:'Two ways to join words.',body:`
Latin has two common ways to say *and*.

**Et** goes between the two words, just like English.

: puella et nauta = the girl and the sailor

**-que** is an enclitic, like *-ne*. It attaches to the end of the **second** word.

: puella nautaque = the girl and the sailor
: Senātus Populusque Rōmānus = the Senate and the Roman People

The two mean the same thing here. When you see *-que*, translate *and* before the word it is attached to.

! Two singular subjects joined by *and* take a plural verb: *Puella et nauta ambulant*.

?1

?2
`,q:[mc('Use et and -que',[
['Rewrite *puella et nauta* with -que.','*puella nautaque*',['*puellaque nauta*','*que puella nauta*','*puella que nauta*'],'-que goes on the second word.'],['In *fēminae virīque*, what does -que mean?','and',['also not','but','or'],'-que means and.'],['*Amīcus et servus* needs what kind of verb?','plural',['singular','passive','infinitive'],'Two subjects make a plural.'],['Where do you put "and" in *agrōs silvāsque*?','fields and forests',['and fields forests','forests and fields','fields forests and'],'Translate and before the word with -que.'],['*Puer puellaque* means...','the boy and the girl',['the boy of the girl','the boy or the girl','the girl and the boy of'],'-que joins the two.'],['Which is correct?','*Nautae agricolaeque labōrant*',['*Nautaeque que agricolae labōrant*','*Nautae agricolae et que labōrant*','*Que nautae agricolae labōrant*'],'One -que on the second word.'],['How does *et* differ from -que in position?','*et* goes between the words, -que goes on the second word',['*et* goes on the first word','-que goes on the first word','They are always the same'],'That is their only difference here.'],['Does *rosam corōnamque* have the same case on both nouns?','Yes, both are accusative',['No, one is dative','No, one is nominative','No, -que changes the case'],'Joined nouns share a job.'],['*Vir fēminaque* as a subject would need which verb ending?','-nt',['-t','-s','-mus'],'Two subjects need a plural verb.'],['-que is an example of...','an enclitic',['a preposition','a declension','an infinitive'],'It attaches to a word.']]),
tr('Translate a sentence with et or -que',[
['Puella et nauta ambulant.','The girl and the sailor <walk:p>.'],['Puer puellaque currunt.','The boy and the girl <run:p>.'],['Agricola equum et servum vocat.','The farmer <call> the horse and the slave.'],['Rēgīna nautās agricolāsque laudat.','The queen <praise> the sailors and the farmers.'],['Fēminae et virī veniunt.','The women and the men <come:p>.'],['Amīcus rosam corōnamque portat.','The friend <carry> the rose and the crown.'],['Magister et discipulī labōrant.','The teacher and the students <work:p>.'],['Puellae puerīque audiunt.','The girls and the boys <hear:p>.'],['Dominus servum et equum videt.','The master <see> the slave and the horse.'],['Vir fēminaque nāvigant.','The man and the woman <sail:p>.']],'et goes between the words, and -que attaches to the second word. Both mean and.')]},

{id:'gapping',title:'Gapping',blurb:'When Latin leaves a word out and expects you to fill it in.',body:`
**Gapping** means leaving out a word that can be understood from the rest of the sentence. A verb is the usual word to go. The verb appears once and is shared by two clauses.

: Puella rosam, puer librum portat. = The girl carries a rose, the boy a book.

The verb *portat* belongs to both clauses, so in English you can repeat it: *the boy carries a book*. Both versions are correct.

The verb can sit in either clause.

: Fēmina hastam portat, vir gladium. = The woman carries a spear, the man a sword.

! When a clause seems to have no verb, match its nouns to the other clause: nominative with nominative, accusative with accusative.

?1

?2
`,q:[mc('Find what has been gapped and how to read it',[
['In *Puella rosam, puer librum portat*, what is the verb for *puer*?','*portat*',['*rosam*','*librum*','There is none'],'One verb serves both clauses.'],['In *Nauta aquam, agricola cibum portat*, what does the farmer carry?','food',['water','a sailor','nothing'],'*cibum* is the accusative in his clause.'],['What word is usually gapped?','the verb',['the subject','the preposition','the adjective'],'The verb is the word most often left out.'],['In *Fēmina epistulam, vir librum legit*, who reads the book?','the man',['the woman','both of them equally','no one'],'*vir* is nominative in the clause with *librum*.'],['What kind of noun does *puer* pair with in *Puella rosam, puer librum portat*?','the other nominative, *puella*',['the accusative *rosam*','the verb','the accusative *librum*'],'Parallel clauses match case by case.'],['In *Dominus equum, servus hastam tenet*, what does the slave hold?','a spear',['a horse','the master','nothing'],'*hastam* goes with *servus*.'],['Does the English need the verb repeated?','It may be repeated or left out',['It must be left out','It must be changed','Only with a plural'],'Both English versions are correct.'],['In *Puerī librōs, puellae rosās portant*, what do the girls carry?','roses',['books','boys','nothing'],'*rosās* follows *puellae*.'],['Which sentence shows gapping?','*Nauta aquam, puer cibum portat*',['*Nauta aquam portat*','*Puer cibum portat*','*Nauta et puer veniunt*'],'Two clauses share a single verb.'],['In *Fēmina hastam portat, vir gladium*, what is gapped?','*portat*, in the second clause',['*fēmina*','*hastam*','*vir*'],'The verb is understood after *gladium*.']]),
tr('Translate a sentence with gapping',[
['Puella rosam, puer librum portat.','The girl <carry> the rose, the boy the book.'],['Fēmina hastam portat, vir gladium.','The woman <carry> the spear, the man the sword.'],['Nauta aquam, agricola cibum portat.','The sailor <carry> the water, the farmer the food.'],['Fēmina epistulam, vir librum legit.','The woman <read> the letter, the man the book.'],['Dominus equum, servus hastam tenet.','The master <hold> the horse, the slave the spear.'],['Puerī librōs, puellae rosās portant.','The boys <carry:p> the books, the girls the roses.'],['Rēgīna nautās, dominus servōs laudat.','The queen <praise> the sailors, the master the slaves.'],['Agricola agrum spectat, nauta aquam.','The farmer <watch> the field, the sailor the water.'],['Poēta fābulam, magister epistulam scrībit.','The poet <write> the story, the teacher the letter.'],['Dominus fīliō, rēgīna fīliae dōnum dat.','The master <give> a gift to the son, the queen to the daughter.']],'One verb is shared by both clauses.')]},

{id:'adverbs',title:'Adverbs in -ē',blurb:'Words that describe how an action is done.',body:`
An **adverb** describes a verb, and it often answers *how*. In English many adverbs end in *-ly*. In Latin, adjectives like *laetus -a -um* form an adverb by adding **-ē** to the stem.

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

?2
`,q:[ty('Form an adverb from an adjective',[['Write the adverb from *laetus*.','laetē','Stem plus -ē.'],['Write the adverb from *lentus*.','lentē','Stem plus -ē.'],['Write the adverb from *bonus*.','bene','This one is irregular.'],['Write the adverb from *malus*.','male','This one is irregular.'],['Write the adverb from *miser*.','miserē','Stem plus -ē.'],['Write the adverb from *pulcher*.','pulchrē','The stem is *pulchr-*.'],['Write the adverb from *saevus*.','saevē','Stem plus -ē.'],['Write the adverb from *probus*.','probē','Stem plus -ē.'],['Write the adverb from *maestus*.','maestē','Stem plus -ē.'],['Write the adverb from *avārus*.','avārē','Stem plus -ē.']],'la'),
tr('Translate a sentence with an adverb',[
['Nauta lentē ambulat.','The sailor <walk> slowly.'],['Puer bene legit.','The boy <read> well.'],['Puella laetē labōrat.','The girl <work> happily.'],['Fēmina saepe nāvigat.','The woman <sail> often.'],['Agricolae male labōrant.','The farmers <work:p> badly.'],['Poēta pulchrē scrībit.','The poet <write> beautifully.'],['Virī saevē pugnant.','The men <fight:p> fiercely.'],['Semper labōrāmus.','We always work.'],['Puellae maestē ambulant.','The girls <walk:p> sadly.'],['Hodiē venit.','[He|She] <come> today.']],'An adverb describes the verb and never changes form.')]},

{id:'conditions',title:'Open conditions',blurb:'If this happens, then that happens.',body:`
A **condition** has two parts: the *if* clause, starting with **sī**, and the main clause that gives the result. An **open** condition leaves the question open: it may or may not be true.

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

?2
`,q:[mc('Identify the tense of a condition and how to translate it',[
['*Sī labōrās, laudāris* is a...','present condition',['future condition'],'Both verbs are present.'],['*Sī labōrābis, laudāberis* is a...','future condition',['present condition'],'Both verbs are future.'],['What does *sī* mean?','if',['and','who','so'],'*sī* opens the condition.'],['How is *sī veniet* best translated?','if he comes',['if he came','if he is coming from','he will come if'],'English uses a present for a Latin future here.'],['Choose the main verb for *Sī puella labōrābit, nauta ___* (the sailor will praise).','*laudābit*',['*laudat*','*laudābat*','*laudāre*'],'A future condition has future verbs in both clauses.'],['*Sī dormīs, nōn labōrās*: what tense are the verbs?','present',['future','imperfect','perfect'],'Both are present.'],['*Sī mittent, vidēbimus*: what tense are the verbs?','future',['present','imperfect','perfect'],'*mittent* is 3rd conjugation future and *vidēbimus* has -bi-.'],['Which clause does *sī* start?','the if clause',['the main clause','neither clause','both clauses'],'*sī* starts the if clause.'],['Which is a future condition?','*Sī veniēs, puellam vidēbō*',['*Sī venīs, puellam videō*','*Sī venit, puellam videt*','*Sī venīmus, puellam vidēmus*'],'Both verbs have future forms.'],['An open condition means...','It may or may not be true',['It is false','It happened in the past','It is a command'],'The speaker leaves it open.']]),
tr('Translate an open condition',[
['Sī labōrās, laudāris.','If you <work:p>, you <praise:xp>.'],['Sī labōrābis, laudāberis.','If you [work|will work], you <praise:xf>.'],['Sī puella venit, nauta labōrat.','If the girl <come>, the sailor <work>.'],['Sī nautae venient, puellae ambulābunt.','If the sailors [come|will come], the girls <walk:f>.'],['Sī dūcit, audīmus.','If [he|she] <lead>, we <hear:p>.'],['Sī portābō, vidēbis.','If I [carry|will carry], you <see:f>.'],['Sī puer legit, magister laudat.','If the boy <read>, the teacher <praise>.'],['Sī rēgīna vocābit, veniēmus.','If the queen [calls|will call], we <come:f>.'],['Sī servus currit, dominus videt.','If the slave <run>, the master <see>.'],['Sī amīcum vidēbimus, laudābimus.','If we [see|will see] the friend, we <praise:f>.']],'Sī means if. In a future condition, both Latin verbs are future, but the if clause is usually a present in English.')]},

{id:'indstat',title:'Indirect statement',blurb:'Reporting what someone says, thinks or sees.',body:`
A **direct statement** gives the exact words: *The girl is working.* An **indirect statement** reports them after a verb of saying, thinking, knowing or perceiving: *He says that the girl is working.*

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

?2
`,q:[mc('Recognize the parts of an indirect statement',[
['In *Dīcit puellam labōrāre*, what case is *puellam*?','accusative, the subject of the infinitive',['accusative, the object of *dīcit*','nominative','dative'],'The subject of an indirect statement is accusative.'],['In *Putat nautam venīre*, what form is *venīre*?','infinitive',['present indicative','future','imperative'],'The reported verb is an infinitive.'],['What English word do you add?','that',['because','if','who'],'Latin has no word for it here.'],['Which is correct for "She says that the boy is sleeping"?','*Dīcit puerum dormīre*',['*Dīcit puer dormit*','*Dīcit puerō dormīre*','*Dīcit puerum dormit*'],'Accusative plus infinitive.'],['Which verb can introduce an indirect statement?','*putāre*',['*portāre*','*ambulāre*','*nāvigāre*'],'*putāre* is a verb of thinking.'],['In *Crēdimus deōs audīre*, who hears?','the gods',['we','no one','the believers'],'*deōs* is the subject of *audīre*.'],['In *Videt rosās portārī*, what does *portārī* mean?','to be carried: are carried',['to carry: are carrying','carrying away','will carry'],'-rī is passive.'],['How do you say "We know that the sailors are working"?','*Scīmus nautās labōrāre*',['*Scīmus nautae labōrant*','*Scīmus nautīs labōrāre*','*Scīmus nautās labōrant*'],'Accusative plus infinitive.'],['In *Audīs servum venīre*, who is coming?','the slave',['you','the hearer','no one'],'*servum* is the subject of *venīre*.'],['Why is the subject of the reported verb not nominative?','Because indirect statement puts it in the accusative',['Because it is a direct object of the main verb','Because it follows a preposition','Because the verb is passive'],'That is the rule of this construction.']]),
tr('Translate an indirect statement',[
['Dīcit puellam labōrāre.','[He|She] <say> [that|] the girl [works|is working].'],['Putant nautam venīre.','They <think:p> [that|] the sailor [comes|is coming].'],['Scīmus virōs pugnāre.','We <know:p> [that|] the men [fight|are fighting].'],['Rēgīna dīcit puerum dormīre.','The queen <say> [that|] the boy [sleeps|is sleeping].'],['Videt agricolās labōrāre.','[He|She] <see> [that|] the farmers [work|are working].'],['Audīmus amīcum venīre.','We <hear:p> [that|] the friend [comes|is coming].'],['Crēdis deās audīre.','You <believe:p> [that|] the goddesses [hear|are hearing].'],['Rōmānus dīcit puellam laudārī.','The Roman <say> [that|] the girl [is praised|is being praised].'],['Nūntiat rēgīnam venīre.','[He|She] <announce> [that|] the queen [comes|is coming].'],['Spērāmus nautās nāvigāre.','We <hope:p> [that|] the sailors [sail|are sailing].']],'After a verb of saying or thinking, the subject is accusative and the verb is an infinitive. Add that in English.')]},
]};
