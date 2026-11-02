const {tr,mc,ty,nq}=require('./lib.js');
const C4=['nominative','accusative','dative','ablative'];
const others=c=>C4.filter(x=>x!==c);
const cq=(s,c,y)=>[s,c,others(c),y];
module.exports={title:'Nouns and cases',lessons:[
{id:'cases',title:'What is a case? The nominative',blurb:'How Latin nouns change their endings, and the case that names the subject.',body:`
You've spent the first lessons on verbs. Now for the other half of a sentence: nouns. This is the biggest difference between Latin and English, so take your time here.

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
|vertebra, vertebrae|radius, radiī|bacterium, bacteria|
`,q:[mc('Choose the verb ending that agrees with a nominative subject',[
['If *oppidum* (town) is the subject, should the verb end in -t or -nt?','-t',['-nt'],'*oppidum* is singular.'],['If *puellae* (girls) is the subject, should the verb end in -t or -nt?','-nt',['-t'],'-ae is nominative plural here.'],['If *amīcī* (friends) is the subject, should the verb end in -t or -nt?','-nt',['-t'],'-ī is nominative plural in the 2nd declension.'],['If *dōna* (gifts) is the subject, should the verb end in -t or -nt?','-nt',['-t'],'-a is plural for 2nd declension neuters.'],['If *rēgīna* (queen) is the subject, should the verb end in -t or -nt?','-t',['-nt'],'-a is singular in the 1st declension.'],['If *servus* (slave) is the subject, should the verb end in -t or -nt?','-t',['-nt'],'-us is singular.'],['If *templa* (temples) is the subject, should the verb end in -t or -nt?','-nt',['-t'],'-a is plural for 2nd declension neuters.'],['If *nautae* (sailors) is the subject, should the verb end in -t or -nt?','-nt',['-t'],'-ae is plural.'],['If *dōnum* (gift) is the subject, should the verb end in -t or -nt?','-t',['-nt'],'-um is singular.'],['If *fīliī* (sons) is the subject, should the verb end in -t or -nt?','-nt',['-t'],'-ī is plural.']]),
tr('Translate a short sentence with a nominative subject',[
['Puella laudat.','The girl <praise>.'],['Amīcī ambulant.','The friends <walk:p>.'],['Nauta nāvigat.','The sailor <sail>.'],['Puellae dormiunt.','The girls <sleep:p>.'],['Servus labōrat.','The slave <work>.'],['Fēminae veniunt.','The women <come:p>.'],['Equus currit.','The horse <run>.'],['Agricolae labōrant.','The farmers <work:p>.'],['Rēgīna sedet.','The queen <sit>.'],['Virī pugnant.','The men <fight:p>.']],'The nominative is the subject, and the verb ending agrees with it.')]},

{id:'accusative',title:'The accusative: direct objects',blurb:'The case for the person or thing that receives the action.',body:`
The **accusative** marks the **direct object**: the person or thing that receives the action of the verb.

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

?2
`,q:[mc('Identify the case of a marked noun in a sentence (nominative or accusative)',[
['In *Puella **rosam** portat*, what case is *rosam*?','accusative',['nominative'],'-am marks the accusative singular.'],['In ***Nauta** puellam vocat*, what case is *nauta*?','nominative',['accusative'],'*nauta* is the subject, the one calling.'],['In *Agricolae **equōs** spectant*, what case is *equōs*?','accusative',['nominative'],'-ōs marks the accusative plural.'],['In ***Servī** templum vident*, what case is *servī*?','nominative',['accusative'],'-ī is the nominative plural of the 2nd declension.'],['In *Rēgīna **nautās** laudat*, what case is *nautās*?','accusative',['nominative'],'-ās marks the accusative plural.'],['In ***Puellae** fābulam audiunt*, what case is *puellae*?','nominative',['accusative'],'The plural verb -nt matches the plural subject.'],['In *Puer **librum** legit*, what case is *librum*?','accusative',['nominative'],'The boy is the subject, so *librum* is the object.'],['In *Nauta **dōna** portat*, what case is *dōna*?','accusative',['nominative'],'*nauta* is the subject, so the neuter *dōna* is the object.'],['In ***Dōna** puellam dēlectant*, what case is *dōna*?','nominative',['accusative'],'-nt is plural, *puellam* is clearly accusative, so *dōna* is the subject.'],['In *Fēmina **amīcum** videt*, what case is *amīcum*?','accusative',['nominative'],'-um on a masculine noun is accusative.']]),
tr('Translate a sentence with a subject and a direct object',[
['Puella rosam portat.','The girl <carry> the rose.'],['Nauta puellās vocat.','The sailor <call> the girls.'],['Agricolae equōs spectant.','The farmers <watch:p> the horses.'],['Puer librum legit.','The boy <read> the book.'],['Fēmina dōna portat.','The woman <carry> the gifts.'],['Servī templum vident.','The slaves <see:p> the temple.'],['Amīcus puerum audit.','The friend <hear> the boy.'],['Rēgīna nautās laudat.','The queen <praise> the sailors.'],['Magister discipulōs docet.','The teacher <teach> the students.'],['Puellae fābulās scrībunt.','The girls <write:p> the stories.']],'The nominative is the subject and the accusative is the direct object.')]},

{id:'dative',title:'The dative: to and for',blurb:'Indirect objects, and the person an action is done for.',body:`
The **dative** marks someone who is interested in or affected by an action. In English you usually translate it with *to* or *for*.

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

?2
`,q:[mc('Identify whether a form ending in -ae or -īs is dative or something else, using the sentence',[
['In *Puella **nautae** rosam dat*, what case is *nautae*?','dative',['nominative','accusative'],'*puella* is the singular subject, so *nautae* is the receiver.'],['In ***Nautae** rosam portant*, what case is *nautae*?','nominative',['dative','accusative'],'The plural verb needs a plural subject.'],['In *Magister **puerīs** fābulam narrat*, what case is *puerīs*?','dative',['nominative','accusative'],'-īs is dative plural here: told to the boys.'],['In *Rēgīna **agricolīs** aurum dat*, what case is *agricolīs*?','dative',['nominative','accusative'],'-īs is dative plural.'],['In ***Puellae** dormiunt*, what case is *puellae*?','nominative',['dative','accusative'],'The plural verb needs a plural subject.'],['In *Servus **dominō** equum trādit*, what case is *dominō*?','dative',['nominative','accusative'],'-ō on a noun receiving something is dative.'],['In *Fēmina **fīliae** pecūniam dat*, what case is *fīliae*?','dative',['nominative','accusative'],'The singular subject *fēmina* matches *dat*, so *fīliae* is the receiver.'],['In *Agricola **amīcō** labōrat*, how should *amīcō* be translated?','for a friend',['a friend','of a friend'],'This is a dative of reference.'],['In *Puer **puellae** cibum parat*, how should *puellae* be translated?','for the girl',['the girls','of the girls'],'*puer* is the subject and *cibum* the object, so *puellae* is dative.'],['In *Puer amīcīs fābulam narrat*, who hears the story?','the friends',['the boy','the story'],'*amīcīs* is dative plural.']]),
tr('Translate a sentence with a dative',[
['Puella nautae rosam dat.','The girl <give> [the sailor a rose|a rose to the sailor].'],['Magister puerīs fābulam narrat.','The teacher <tell> [the boys a story|a story to the boys].'],['Fēmina amīcae pecūniam mōnstrat.','The woman <show> [the friend the money|the money to the friend].'],['Servus dominō equum trādit.','The slave <hand> over the horse to the master.'],['Rēgīna agricolīs aurum dat.','The queen <give> [the farmers gold|gold to the farmers].'],['Nautae puellīs dōna dant.','The sailors <give:p> [the girls gifts|gifts to the girls].'],['Agricola fīliō labōrat.','The farmer <work> for the son.'],['Puella amīcae cibum parat.','The girl <prepare> food for the friend.'],['Vir fēminae epistulam scrībit.','The man <write> a letter [to|for] the woman.'],['Puerī amīcō equum servant.','The boys <save:p> the horse for the friend.']],'The dative is translated with to or for.')]},

{id:'ablative',title:'The ablative and prepositions',blurb:'A new case, and the small words that use it.',body:`
The **ablative** tells you things like where, how and with whom something happens. You will learn its uses in later lessons. Start with its forms.

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

?2
`,q:[mc('Choose the correct noun form after a preposition',[
['Pick the right form: *cum ___* (with a friend)','*amīcō*',['*amīcum*','*amīcus*','*amīcī*'],'*cum* takes the ablative.'],['Pick the right form: *ad ___* (to the forest)','*silvam*',['*silvā*','*silva*','*silvae*'],'*ad* takes the accusative.'],['Pick the right form: *sine ___* (without water)','*aquā*',['*aquam*','*aqua*','*aquae*'],'*sine* takes the ablative.'],['Pick the right form: *in ___* (in the town)','*oppidō*',['*oppidum*','*oppida*','*oppidī*'],'Location uses *in* with the ablative.'],['Pick the right form: *in ___* (into the town)','*oppidum*',['*oppidō*','*oppidī*','*oppidīs*'],'Motion into uses *in* with the accusative.'],['Pick the right form: *per ___* (through the roads)','*viās*',['*viīs*','*viae*','*viā*'],'*per* takes the accusative.'],['Pick the right form: *ex ___* (out of the garden)','*hortō*',['*hortum*','*hortus*','*hortī*'],'*ex* takes the ablative.'],['Pick the right form: *ab ___* (away from the island)','*īnsulā*',['*īnsulam*','*īnsula*','*īnsulae*'],'*ab* takes the ablative.'],['Pick the right form: *trāns ___* (across the fields)','*agrōs*',['*agrīs*','*agrī*','*agrō*'],'*trāns* takes the accusative.'],['Pick the right form: *cum ___* (with the girls)','*puellīs*',['*puellās*','*puellae*','*puellā*'],'*cum* takes the ablative.']]),
tr('Translate a phrase or sentence using a preposition',[
['Nauta ad īnsulam nāvigat.','The sailor <sail> to the island.'],['Puella in silvā ambulat.','The girl <walk> in the forest.'],['Agricola ex agrō venit.','The farmer <come> out of the field.'],['Puerī in silvam currunt.','The boys <run:p> into the forest.'],['Fēmina cum amīcā ambulat.','The woman <walk> with the friend.'],['Servus sine equō venit.','The slave <come> without the horse.'],['Virī per viās ambulant.','The men <walk:p> through the roads.'],['Nautae ab īnsulā nāvigant.','The sailors <sail:p> away from the island.'],['Equus trāns agrum currit.','The horse <run> across the field.'],['Puella prope casam sedet.','The girl <sit> near the house.']],'The preposition decides the case of the noun after it.')]},

{id:'decl12',title:'The 1st and 2nd declensions in full',blurb:'Every ending together, including -er nouns and the genitive forms.',body:`
Here are all the endings together. The genitive forms are included so the chart is complete. Their uses come in a later lesson.

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

?2
`,q:[nq('Write a named case and number of a 1st or 2nd declension noun',[['puella',3,1],['amīcus',3,0],['dōnum',0,1],['nauta',2,0],['ager',3,0],['puer',4,1],['via',4,0],['magister',0,1],['fēmina',1,1],['templum',1,1]]),
mc('Identify the possible cases of an ambiguous noun form',[
['*puellae* could be...','genitive singular, dative singular or nominative plural',['only nominative plural','accusative plural or dative plural','ablative singular or accusative singular'],'1st declension -ae has three uses.'],['*amīcī* could be...','genitive singular or nominative plural',['dative singular or accusative plural','only nominative plural','ablative plural or dative plural'],'2nd declension -ī has two uses.'],['*dōna* could be...','nominative plural or accusative plural',['nominative singular','ablative singular','genitive plural'],'Neuter plural nominative and accusative end in -a.'],['*amīcō* could be...','dative singular or ablative singular',['accusative plural','nominative singular','genitive plural'],'2nd declension -ō has two uses.'],['*puellīs* could be...','dative plural or ablative plural',['accusative plural','genitive singular','nominative plural'],'-īs has two uses.'],['*dōnum* could be...','nominative singular or accusative singular',['only accusative singular','genitive plural','dative singular'],'Neuter nominative and accusative match.'],['*puellārum* is...','genitive plural',['dative plural','accusative plural','ablative plural'],'-ārum is 1st declension genitive plural.'],['*virōrum* is...','genitive plural',['accusative plural','dative plural','nominative plural'],'-ōrum is 2nd declension genitive plural.'],['*nautam* is...','accusative singular',['nominative singular','genitive plural','accusative plural'],'-am is accusative singular, even for a masculine noun.'],['*agrōs* is...','accusative plural',['dative plural','nominative plural','genitive plural'],'-ōs is accusative plural.']])]},

{id:'agreement',title:'Noun-adjective agreement',blurb:'How adjectives match the nouns they describe.',body:`
An **adjective** describes a noun. In Latin it must **agree** with its noun in three ways: **gender**, **number** and **case**.

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

?2
`,q:[mc('Choose the adjective form that agrees with a noun',[
['Choose: *puella ___* (good)','*bona*',['*bonus*','*bonum*','*bonam*'],'Feminine nominative singular.'],['Choose: *nauta ___* (good)','*bonus*',['*bona*','*bonum*','*bonam*'],'*nauta* is masculine.'],['Choose: *dōna ___* (good)','*bona*',['*bonae*','*bonī*','*bonum*'],'Neuter plural nominative or accusative.'],['Choose: *amīcōs ___* (happy)','*laetōs*',['*laetās*','*laetī*','*laetīs*'],'Masculine accusative plural.'],['Choose: *agricolam ___* (tired)','*fessum*',['*fessam*','*fessa*','*fessus*'],'*agricola* is masculine, so accusative -um.'],['Choose: *puellīs ___* (happy)','*laetīs*',['*laetās*','*laetae*','*laetōrum*'],'Dative or ablative plural.'],['Choose: *viā ___* (wide)','*lātā*',['*lātam*','*lātō*','*lātus*'],'Feminine ablative singular.'],['Choose: *poētae ___* (famous, nominative plural)','*clārī*',['*clārae*','*clāra*','*clārōs*'],'*poēta* is masculine.'],['Choose: *templum ___* (ancient)','*antīquum*',['*antīquus*','*antīqua*','*antīquam*'],'Neuter singular.'],['Choose: *vīrus ___* (bad)','*malum*',['*malus*','*mala*','*malī*'],'*vīrus* is neuter despite its -us.']]),
tr('Translate a sentence with an adjective',[
['Puella bona rosam portat.','The good girl <carry> the rose.'],['Nauta fessus dormit.','The tired sailor <sleep>.'],['Agricolae laetī labōrant.','The happy farmers <work:p>.'],['Fēmina novum librum legit.','The woman <read> the new book.'],['Puer parvus magnum equum spectat.','The small boy <watch> the [great|big] horse.'],['Rēgīna clāra nautās probōs laudat.','The famous queen <praise> the honest sailors.'],['Virī īrātī pugnant.','The angry men <fight:p>.'],['Poēta miser fābulam scrībit.','The wretched poet <write> a story.'],['Dea pulchra templum antīquum servat.','The beautiful goddess <save> the ancient temple.'],['Amīcī bonī puellae dōna dant.','The good friends <give:p> [the girl gifts|gifts to the girl].']],'Each adjective agrees with its noun in gender, number and case.')]},

{id:'vocative',title:'The vocative and apposition',blurb:'Calling someone by name, and renaming a noun.',body:`
# The vocative

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

?2
`,q:[ty('Write the vocative of a noun',[['Write the vocative singular of *Marcus*.','Marce','-us becomes -e.'],['Write the vocative singular of *amīcus*.','amīce','-us becomes -e.'],['Write the vocative singular of *fīlius*.','fīlī','*fīlius* becomes *fīlī*.'],['Write the vocative singular of *Vergilius*.','Vergilī','Names in -ius become -ī.'],['Write the vocative singular of *puella*.','puella','Same as the nominative.'],['Write the vocative singular of *servus*.','serve','-us becomes -e.'],['Write the vocative singular of *puer*.','puer','Same as the nominative.'],['Write the vocative plural of *amīcus*.','amīcī','Plurals match the nominative.'],['Write the vocative singular of *dominus*.','domine','-us becomes -e.'],['Write the vocative singular of *Tiberius*.','Tiberī','Names in -ius become -ī.']],'la'),
tr('Translate a sentence with a vocative or a noun in apposition',[
['Amīce, puellam vidēs.','Friend, you <see:p> the girl.'],['Marcus, nauta, labōrat.','Marcus, the sailor, <work>.'],['Puellae, rosās portātis.','Girls, you <carry:p> the roses.'],['Marcum, servum, vocant.','They <call:p> Marcus, the slave.'],['Serve, labōrās.','Slave, you <work:p>.'],['Iūliae, amīcae, rosam dō.','I <give:p> [Julia, the friend, a rose|a rose to Julia, the friend].'],['Fīlī, epistulam legis.','Son, you <read:p> the letter.'],['Vergilius, poēta, scrībit.','Vergil, the poet, <write>.'],['Domine, equum servō.','Master, I <save:p> the horse.'],['Flāviam, rēgīnam, laudāmus.','We <praise:p> Flavia, the queen.']],'A vocative names the person spoken to. A noun in apposition matches the case of the noun it renames.')]},

{id:'ablfrom',title:'Ablative: place from which and separation',blurb:'Two uses that mean "away from".',body:`
The ablative's oldest meaning is **away from**. Two uses come from this.

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

?2
`,q:[mc('Tell place from which apart from separation',[
['*ex silvā venit*: which use?','place from which',['separation'],'Coming out of a place is motion.'],['*nautās culpā līberat*: which use?','separation',['place from which'],'Freeing from blame is separation.'],['*Rōmā venit*: which use?','place from which',['separation'],'Motion from a town, with no preposition.'],['*agricolam perīculō prohibet*: which use?','separation',['place from which'],'Keeping from danger is separation.'],['*ab īnsulā nāvigant*: which use?','place from which',['separation'],'Sailing away from a place is motion.'],['*puellam cūrā līberant*: which use?','separation',['place from which'],'Freeing from worry is separation.'],['*ā casā ambulat*: which use?','place from which',['separation'],'Walking away from a place is motion.'],['*puerōs īrā prohibet*: which use?','separation',['place from which'],'Keeping from anger is separation.'],['*Corinthō discēdunt*: which use?','place from which',['separation'],'Leaving a town, with no preposition.'],['*servōs perīculō līberāmus*: which use?','separation',['place from which'],'Freeing from danger is separation.']]),
tr('Translate a sentence with an ablative of place from which or separation',[
['Agricola ex silvā venit.','The farmer <come> out of the forest.'],['Rēgīna nautās culpā līberat.','The queen <free> the sailors from blame.'],['Nautae ab īnsulā nāvigant.','The sailors <sail:p> away from the island.'],['Dea puerum perīculō prohibet.','The goddess <keep> the boy from danger.'],['Servī ā casā currunt.','The slaves <run:p> away from the house.'],['Puellam cūrā līberāmus.','We <free:p> the girl from care.'],['Rōmā discēdit.','[He|She] <depart> from Rome.'],['Fēmina fīlium perīculō prohibet.','The woman <keep> the son from danger.'],['Virī ex oppidō ambulant.','The men <walk:p> out of the town.'],['Magister discipulōs culpā līberat.','The teacher <free> the students from blame.']],'Both uses mean away from. Separation with things usually has no preposition.')]},

{id:'ablby',title:'Ablative: personal agent and means',blurb:'Two ways to say "by", one for people and one for things.',body:`
English uses *by* or *with* for both people and things. Latin keeps them apart.

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

?2
`,q:[mc('Choose ablative of agent or means',[
['Choose: The girl is praised by the queen.','*ā rēgīnā*',['*rēgīnā*','*cum rēgīnā*'],'A person with a passive verb takes *ā/ab*.'],['Choose: He fights with a sword.','*gladiō*',['*ā gladiō*','*cum gladiō*'],'A tool takes no preposition.'],['Choose: They are frightened by arrows.','*sagittīs*',['*ā sagittīs*','*cum sagittīs*'],'A thing takes no preposition.'],['Choose: The boy is called by a friend.','*ab amīcō*',['*amīcō*','*cum amīcō*'],'A person takes *ā/ab*.'],['*Puer ā magistrō docētur*: what does *ā magistrō* show?','personal agent',['means','accompaniment'],'A person doing a passive action.'],['*Hastā terret*: what does *hastā* show?','means',['personal agent','accompaniment'],'A thing used as a tool.'],['*Puella ā nautā servātur*: what does *ā nautā* show?','personal agent',['means','accompaniment'],'A person doing a passive action.'],['*Tēlīs superantur*: what does *tēlīs* show?','means',['personal agent','place where'],'Spears are the tools.'],['Choose: The town is defended by the sailors.','*ā nautīs*',['*nautīs*','*cum nautīs*'],'People take *ā/ab*.'],['Choose: The farmer is frightened by the sword.','*gladiō*',['*ā gladiō*','*cum gladiō*'],'A thing takes no preposition.']]),
tr('Translate a sentence with an ablative of agent or means',[
['Puella ā rēgīnā laudātur.','The girl <praise:x> by the queen.'],['Vir gladiō pugnat.','The man <fight> [with|by means of] a sword.'],['Nautae ab amīcīs vocantur.','The sailors <call:xp> by the friends.'],['Fēminae sagittīs terrentur.','The women <frighten:xp> by arrows.'],['Puer ā magistrō docētur.','The boy <teach:x> by the teacher.'],['Agricola hastā oppidum dēfendit.','The farmer <defend> the town [with|by means of] a spear.'],['Servī ā dominō pūniuntur.','The slaves <punish:xp> by the master.'],['Rōmānī barbarōs tēlīs superant.','The Romans <overcome:p> the barbarians [with|by means of] spears.'],['Equus ab agricolā servātur.','The horse <save:x> by the farmer.'],['Īnsula ā nautīs custōdītur.','The island <guard:x> by the sailors.']],'A person with a passive verb takes ā/ab. A thing takes no preposition.')]},

{id:'ablwith',title:'Ablative: accompaniment, manner, place where and cause',blurb:'With whom, how, where and why.',body:`
Four more uses complete the ablative for this course.

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

?2
`,q:[mc('Name the use of an ablative: accompaniment, manner, place where, cause or means',[
['*cum amīcō ambulat*','accompaniment',['manner','means','cause'],'A person who goes along.'],['*cum cūrā labōrat*','manner',['accompaniment','means','cause'],'How she works.'],['*in silvā habitat*','place where',['place from which','manner','cause'],'Where he lives.'],['*gaudiō currit*','cause',['means','manner','place where'],'Why he runs, with no preposition.'],['*gladiō pugnat*','means',['cause','manner','accompaniment'],'A tool, with no preposition.'],['*cum puellīs nāvigant*','accompaniment',['manner','means','cause'],'People who go along.'],['*īrā pugnat*','cause',['means','manner','accompaniment'],'Why he fights.'],['*cum gaudiō scrībit*','manner',['cause','accompaniment','means'],'How she writes.'],['*Athēnīs labōrat*','place where',['place from which','cause','means'],'In a plural-named town.'],['*in agrō labōrant*','place where',['place from which','means','manner'],'Where they work.']]),
tr('Translate a sentence using accompaniment, manner, place where or cause',[
['Puer cum amīcō ambulat.','The boy <walk> with the friend.'],['Fēmina cum cūrā labōrat.','The woman <work> with care.'],['Agricola in agrō labōrat.','The farmer <work> in the field.'],['Puella gaudiō currit.','The girl <run> from joy.'],['Nauta cum puellīs nāvigat.','The sailor <sail> with the girls.'],['Vir īrā pugnat.','The man <fight> from anger.'],['Virī in silvā habitant.','The men <live:p> in the forest.'],['Poēta cum gaudiō scrībit.','The poet <write> with joy.'],['Athēnīs labōrāmus.','We <work:p> in Athens.'],['Rōmae habitat.','[He|She] <live> [at|in] Rome.']],'Cum with a person is accompaniment, cum with an abstract noun is manner, in with a place is place where, and a noun with no preposition giving the reason is cause.')]},

{id:'placeto',title:'Accusative: place to which, and towns',blurb:'Going to places, with and without a preposition.',body:`
Motion toward a place uses the accusative, usually with *ad* (to) or *in* (into).

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

?2
`,q:[mc('Choose the right form for going to, from or staying in a place',[
['Choose: to Rome','*Rōmam*',['*Rōmā*','*Rōmae*','*ad Rōmā*'],'Town name, accusative, no preposition.'],['Choose: from Rome','*Rōmā*',['*Rōmam*','*Rōmae*','*ab Rōmam*'],'Town name, ablative, no preposition.'],['Choose: at Rome','*Rōmae*',['*Rōmam*','*Rōmā*','*ad Rōmam*'],'The locative.'],['Choose: to the forest','*ad silvam*',['*silvam*','*ad silvā*','*in silvā*'],'Ordinary places need a preposition.'],['Choose: into the cave','*in cavernam*',['*in cavernā*','*cavernam*','*ad cavernā*'],'Motion into takes the accusative.'],['Choose: in the cave','*in cavernā*',['*in cavernam*','*cavernā*','*ad cavernam*'],'Location takes the ablative.'],['Choose: to Athens','*Athēnās*',['*Athēnīs*','*ad Athēnīs*','*Athēnārum*'],'*Athēnae* is plural: accusative -ās.'],['Choose: in Athens','*Athēnīs*',['*Athēnās*','*Athēnae*','*in Athēnās*'],'A plural town name takes the ablative alone.'],['Choose: to Crete','*Crētam*',['*Crētā*','*Crētae*','*in Crētā*'],'A small island works like a town.'],['Choose: from Corinth','*Corinthō*',['*Corinthum*','*Corinthī*','*ab Corinthum*'],'Town name, ablative, no preposition.']]),
tr('Translate a sentence about going to or coming from a place',[
['Nauta Rōmam nāvigat.','The sailor <sail> to Rome.'],['Puella ad cavernam ambulat.','The girl <walk> to the cave.'],['Virī Athēnās festīnant.','The men <hurry:p> to Athens.'],['Puerī in silvam currunt.','The boys <run:p> into the forest.'],['Fēminae Crētam nāvigant.','The women <sail:p> to Crete.'],['Agricola ad vīllam venit.','The farmer <come> to the farmhouse.'],['Corinthum ambulāmus.','We <walk:p> to Corinth.'],['Nautae in īnsulam nāvigant.','The sailors <sail:p> [into|to] the island.'],['Rēgīna Thēbās venit.','The queen <come> to Thebes.'],['Servus in tabernam currit.','The slave <run> into the inn.']],'Place to which uses the accusative, with no preposition for towns and small islands.')]},
]};
