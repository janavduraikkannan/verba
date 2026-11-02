const {tr,mc,ty,spot,enQs,laQs,parseQs}=require('./lib.js');
const all=['portāre','vidēre','dūcere','capere','audīre','laudāre','monēre','mittere','iacere','custōdīre'];
module.exports=[{title:'The genitive',lessons:[
{id:'genposs',title:'The genitive of possession',blurb:'Showing whose something is, and telling -ae apart.',body:`
The **genitive** connects one noun to another. Its main meaning is *of*, or *'s*.

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

?2
`,q:[mc('Decide if a form in -ae is genitive or dative',[
['*Equus **puellae** currit*: what case is *puellae*?','genitive',['dative','nominative'],'It goes with *equus*: the horse of the girl.'],['*Nauta **puellae** rosam dat*: what case is *puellae*?','dative',['genitive','nominative'],'The rose is given to the girl.'],['*Liber **fēminae** puerum dēlectat*: what case is *fēminae*?','genitive',['dative','nominative'],'The book of the woman.'],['*Magister **discipulae** fābulam narrat*: what case is *discipulae*?','dative',['genitive','nominative'],'The story is told to the student.'],['***Puellae** ambulant*: what case is *puellae*?','nominative',['genitive','dative'],'The plural verb needs a plural subject.'],['*Agricola **rēgīnae** equum videt*: what is the most natural reading of *rēgīnae*?','genitive: the queen’s horse',['dative: gives to the queen','nominative: the queens'],'*videt* isn’t a verb of giving.'],['*Fīlia **nautae** labōrat*: what case is *nautae*?','genitive',['dative','nominative'],'The daughter of the sailor.'],['*Servus **rēgīnae** pecūniam trādit*: what case is *rēgīnae*?','dative',['genitive','nominative'],'The money is handed to the queen.'],['*Dōna **deae** laudant*: what is the most natural reading of *deae*?','genitive: the goddess’s gifts',['dative: gives to the goddess','nominative plural: goddesses'],'*laudant* doesn’t take a receiver.'],['*Puer **amīcae** epistulam scrībit*: what case is *amīcae*?','dative',['genitive','nominative'],'He writes a letter to his friend.']]),
tr('Translate a sentence with a genitive of possession',[
['Equus puellae currit.','The [girl’s horse|horse of the girl] <run>.'],['Amīcus agricolae venit.','The [farmer’s friend|friend of the farmer] <come>.'],['Dōna rēgīnae spectāmus.','We <watch:p> the [queen’s gifts|gifts of the queen].'],['Liber magistrī puerum dēlectat.','The [teacher’s book|book of the teacher] <delight> the boy.'],['Fīlia nautae labōrat.','The [sailor’s daughter|daughter of the sailor] <work>.'],['Equum virī videō.','I <see:p> the [man’s horse|horse of the man].'],['Agrōs agricolārum spectant.','They <watch:p> the [farmers’ fields|fields of the farmers].'],['Servī dominōrum labōrant.','The [masters’ slaves|slaves of the masters] <work:p>.'],['Templum deae laudant.','They <praise:p> the [goddess’s temple|temple of the goddess].'],['Epistulās puerōrum legimus.','We <read:p> the [boys’ letters|letters of the boys].']],'The genitive shows whose something is: of, or ’s.')]},

{id:'genpart',title:'The partitive genitive',blurb:'A part taken from a whole.',body:`
The **partitive genitive** names the whole that a part comes from.

: multī nautārum = many of the sailors
: {pars|part} aquae = part of the water
: paucī puerōrum = few of the boys

Latin can say the same thing with **ex** (or **ē**) and the ablative.

: multī ex nautīs = many of the sailors

The two mean the same, so *multī nautārum* and *multī ex nautīs* are interchangeable.

?1

?2
`,q:[mc('Recognize and rewrite a partitive expression',[
['Rewrite *multī nautārum* with *ex*.','*multī ex nautīs*',['*multī ex nautās*','*multī ex nautae*','*multī nautīs*'],'*ex* takes the ablative.'],['Rewrite *paucī puerōrum* with *ex*.','*paucī ex puerīs*',['*paucī ex puerōs*','*paucī ex puerōrum*','*paucī puerīs*'],'*ex* takes the ablative.'],['Rewrite *multī ex virīs* with a genitive.','*multī virōrum*',['*multī virī*','*multī virōs*','*multī ex virōrum*'],'Genitive plural -ōrum.'],['Rewrite *paucae ex fēminīs* with a genitive.','*paucae fēminārum*',['*paucae fēminae*','*paucae fēminās*','*paucae ex fēminārum*'],'Genitive plural -ārum.'],['In *paucī agricolārum*, what is the whole?','the farmers',['a few','the part','no one'],'The genitive names the whole.'],['In *multī nautārum*, what is the part?','many',['the sailors','the sea','none'],'The genitive is the whole, and *multī* is the part.'],['*{Pars|part} aquae* means...','part of the water',['the water’s owner','water for a part','part by water'],'A part of a whole.'],['What case does *ex* take?','ablative',['genitive','accusative','dative'],'*ex* always takes the ablative.'],['*Multae puellārum* means...','many of the girls',['the girls’ many things','many girls’ things','many to the girls'],'A partitive genitive.'],['*Paucī ex amīcīs* means...','few of the friends',['few friends’ things','out of few friends','friends of few'],'*ex* + ablative here means of.']]),
tr('Translate a sentence with a partitive expression',[
['Multī nautārum veniunt.','Many of the sailors <come:p>.'],['Paucī puerōrum currunt.','Few of the boys <run:p>.'],['Multī ex virīs pugnant.','Many of the men <fight:p>.'],['Paucae fēminārum nāvigant.','Few of the women <sail:p>.'],['Multae ex puellīs ambulant.','Many of the girls <walk:p>.'],['Paucī ex agricolīs labōrant.','Few of the farmers <work:p>.'],['Multī discipulōrum legunt.','Many of the students <read:p>.'],['Paucī servōrum dormiunt.','Few of the slaves <sleep:p>.'],['Multī poētārum scrībunt.','Many of the poets <write:p>.'],['Paucī ex nautīs manent.','Few of the sailors <stay:p>.']],'The genitive, or ex with the ablative, names the whole.')]},

{id:'gensubj',title:'Subjective, objective and material genitives',blurb:'Three more jobs for the genitive.',body:`
# Subjective and objective

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

?2
`,q:[mc('Name the use of a genitive: possession, subjective, objective or material',[
['*corōna aurī*','material',['possession','subjective','objective'],'What it is made of.'],['*pōculum argentī*','material',['possession','subjective','objective'],'What it is made of.'],['*equus agricolae*','possession',['material','subjective','objective'],'Who owns it.'],['*cūra rēgīnae* meaning the care the queen gives','subjective',['objective','material','possession'],'The queen does the caring.'],['*cūra rēgīnae* meaning care felt for the queen','objective',['subjective','material','possession'],'The queen receives the care.'],['*gaudium puellārum* meaning the joy the girls feel','subjective',['objective','material','possession'],'The girls feel the joy.'],['*liber magistrī*','possession',['material','subjective','objective'],'Whose book it is.'],['*corōnae aurī* (plural)','material',['possession','subjective','objective'],'Crowns of gold.'],['*īra deī* meaning the god’s anger','subjective',['objective','material','possession'],'The god feels the anger.'],['*cūra equōrum* meaning looking after horses','objective',['subjective','material','possession'],'The horses receive the care.']]),
tr('Translate a sentence with a subjective, objective or material genitive',[
['Corōna aurī puellam dēlectat.','The crown of gold <delight> the girl.'],['Cūra rēgīnae puerōs servat.','The care of the queen <save> the boys.'],['Pōcula argentī custōdiunt.','They <guard:p> the cups of silver.'],['Gaudium puellārum nautās dēlectat.','The joy of the girls <delight> the sailors.'],['Vir pōculum aurī portat.','The man <carry> a cup of gold.'],['Īra deī virōs terret.','The anger of the god <frighten> the men.'],['Corōnam argentī spectāmus.','We <watch:p> the crown of silver.'],['Cūra agricolae equum servat.','The care of the farmer <save> the horse.'],['Rēgīna corōnās aurī dat.','The queen <give> crowns of gold.'],['Gaudium poētae fēminās dēlectat.','The joy of the poet <delight> the women.']],'Translate these genitives with of. Context tells you who does the action.')]},
]},
{title:'The past and commands',lessons:[
{id:'impf',title:'The continuous past (imperfect) active',blurb:'What was happening, or used to happen.',body:`
The **imperfect**, or continuous past, describes an action in the past that was going on or kept happening. Its signal is **-bā-**.

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

?2
`,q:[spot('Translate an imperfect active verb into English',enQs(all,'impf','act')),spot('Write an imperfect active verb in Latin',laQs(all,'impf','act'))]},
{id:'impfpass',title:'The continuous past passive',blurb:'What was being done.',body:`
The imperfect passive keeps the same vowels and uses passive endings after *-bā-*.

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

?2
`,q:[spot('Translate an imperfect passive verb into English',enQs(all,'impf','pass')),spot('Write an imperfect passive verb in Latin',laQs(all,'impf','pass'))]},
{id:'indstat2',title:'Indirect statement II',blurb:'Reported speech after a past verb.',body:`
When the main verb is past, a present infinitive still means something happening **at the same time** as that verb. In English, this becomes a past verb.

: Dīcit puellam labōrāre. = He says that the girl is working.
: Dīcēbat puellam labōrāre. = He was saying that the girl was working.

The Latin infinitive didn't change, and only the main verb did. English shifts the reported verb to match.

: Sciēbāmus nautās venīre. = We knew that the sailors were coming.
: Putābant rēgīnam laudārī. = They thought that the queen was being praised.

?1

?2
`,q:[mc('Translate the infinitive correctly after a past main verb',[
['After *dīcēbat*, *labōrāre* means...','was working',['is working','will work','worked yesterday'],'The action happens at the same time as the past verb.'],['After *dīcit*, *labōrāre* means...','is working',['was working','will work','has worked'],'A present main verb, so a present in English.'],['After *sciēbāmus*, *venīre* means...','were coming',['are coming','will come','came long ago'],'The same time as the past verb.'],['After *putant*, *venīre* means...','are coming',['were coming','will come','had come'],'A present main verb.'],['After *putābant*, *laudārī* means...','was being praised',['is being praised','praised','will praise'],'-rī is passive, at the same time as the past verb.'],['Did the Latin infinitive change between *dīcit puellam labōrāre* and *dīcēbat puellam labōrāre*?','No',['Yes, it became past','Yes, it became passive','Yes, it became future'],'Only the main verb changed.'],['*Crēdēbat nautam nāvigāre* means...','He believed that the sailor was sailing.',['He believes that the sailor sails.','He believed that the sailor sails tomorrow.','The sailor believed him.'],'Past main verb.'],['*Vidēbant puerōs currere* means...','They saw that the boys were running.',['They see that the boys are running.','The boys saw them running.','They will see the boys run.'],'Past main verb.'],['*Audiēbam amīcum venīre* means...','I heard that the friend was coming.',['I hear that the friend is coming.','The friend heard me.','I will hear the friend.'],'Past main verb.'],['Which main verb is past?','*spērābat*',['*spērat*','*spērābit*','*spērāre*'],'-bā- marks the imperfect.']]),
tr('Translate an indirect statement with a past main verb',[
['Dīcēbat puellam labōrāre.','[He|She] <say:i> [that|] the girl was working.'],['Sciēbāmus nautās venīre.','We <know:ip> [that|] the sailors were coming.'],['Putābant virum dormīre.','They <think:ip> [that|] the man was sleeping.'],['Rēgīna dīcēbat puerum currere.','The queen <say:i> [that|] the boy was running.'],['Vidēbam agricolās labōrāre.','I <see:i> [that|] the farmers were working.'],['Audiēbant amīcum venīre.','They <hear:ip> [that|] the friend was coming.'],['Crēdēbās deam audīre.','You <believe:ip> [that|] the goddess was hearing.'],['Nūntiābat rēgīnam venīre.','[He|She] <announce:i> [that|] the queen was coming.'],['Spērābāmus nautās nāvigāre.','We <hope:ip> [that|] the sailors were sailing.'],['Dīcēbant puellam laudārī.','They <say:ip> [that|] the girl was being praised.']],'A present infinitive after a past main verb is translated as a past action at the same time.')]},
{id:'imperative',title:'The imperative',blurb:'Giving commands.',body:`
The **imperative** gives a command. It has singular and plural forms, in the active and the passive.

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

?2
`,q:[ty('Write an imperative form',[['Write the active singular imperative of *portāre*.','portā','Drop -re.'],['Write the active plural imperative of *portāre*.','portāte','-re becomes -te.'],['Write the active singular imperative of *sedēre*.','sedē','Drop -re.'],['Write the active plural imperative of *currere*.','currite','3rd conjugation plural uses -ite.'],['Write the active singular imperative of *currere*.','curre','Drop -re.'],['Write the active plural imperative of *capere*.','capite','3rd -iō plural uses -ite.'],['Write the active singular imperative of *audīre*.','audī','Drop -re.'],['Write the active plural imperative of *audīre*.','audīte','-re becomes -te.'],['Write the passive plural imperative of *portāre*.','portāminī','The -minī form.'],['Write the passive singular imperative of *audīre*.','audīre','It looks like the active infinitive.']],'la'),
tr('Translate a command',[
['Portā rosam!','Carry the rose!'],['Audīte, puellae!','Listen, girls!'],['Curre, puer!','Run, boy!'],['Nautam vocāte!','Call the sailor!'],['Labōrā, serve!','Work, slave!'],['Capite gladiōs!','Take the swords!'],['Sedē, amīce!','Sit, friend!'],['Legite librōs!','Read the books!'],['Equum dūc!','Lead the horse!'],['Vidēte templum!','See the temple!']],'Singular commands drop -re, and plural commands end in -te or -ite.')]},
{id:'medsum',title:'medius and summus',blurb:'Adjectives that mean "the middle of" and "the top of".',body:`
*Medius -a -um* and *summus -a -um* are adjectives, so they agree with their nouns. English often translates them with *of*.

: media silva = the middle of the forest
: in mediā silvā = in the middle of the forest
: summus mōns = the top of the mountain
: ad summum montem = to the top of the mountain
: summa aqua = the surface of the water

The Latin doesn't use a genitive here, even though English says *of*. Read *in mediā silvā* as *in the mid forest*, then say it in natural English.

?1
`,q:[tr('Translate a phrase with medius or summus',[
['Puella in mediā silvā ambulat.','The girl <walk> in the middle of the forest.'],['Nauta ad summum montem currit.','The sailor <run> to the top of the mountain.'],['Agricola in mediō agrō labōrat.','The farmer <work> in the middle of the field.'],['In summā casā sedet.','[He|She] <sit> [in|on] the top of the house.'],['Virī in mediā viā pugnant.','The men <fight:p> in the middle of the road.'],['In mediō oppidō habitat.','[He|She] <live> in the middle of the town.'],['Puerī ad mediam īnsulam ambulant.','The boys <walk:p> to the middle of the island.'],['Dominus in mediā casā sedet.','The master <sit> in the middle of the house.'],['Ad summam vīllam currimus.','We <run:p> to the top of the farmhouse.'],['Puella in mediā tabernā labōrat.','The girl <work> in the middle of the inn.']],'medius and summus agree with their noun, and English adds of.')]},
]}];
