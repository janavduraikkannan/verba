/* ---------- Verba: everything about this site that isn't grammar ----------
   The shared code (index.html, keys.html, getkey.html, css/ and js/) is identical on every practice site.
   This folder, site/, holds what differs: this file (names, text, lists), cat.js (the tutor cat and its AI prompts),
   language.js (how the language behaves in the shared code), engine.js (sentences and grading), uses.js and theme.css. */
const SITE={
  id:"verba", // the folder name; prefix for this language's saved progress (verba.xp) and for keys like verba-onboarded
  name:"Verba", title:"Verba · Latin practice with Fēlix",
  langKey:null, // where this language's progress sits in the shared account document (Verba: null, the top level)
  cat:"Fēlix", catDir:"felix", catV:"9", // the tutor cat: name, img/<catDir>/, and the image version (bump it to refresh caches)
  proudFace:"fish", // the face shown when setup is done
  board:"board", otherBoard:"boardes", // this site's Firestore leaderboard, and the one checked before freeing a username
  acctIcon:"centurion-helmet", // game-icons symbol on the Account button (the sprite in index.html has them all)
  limitDefault:true, // whether the bar's checkbox (#limit) starts ticked
  confetti:['#A9442A','#2E5E66','#946A10','#5A7A2C','#E9DEC7'],
  laurea:["Laurea", "laurel crown: completed AP Latin"], honors:["Honōrēs", "honors"], // [word, meaning] for the AP tag and the honors heading
  pageAccent:"#2E5E66", pageButton:"#A9442A" // link and button colours on keys.html and getkey.html
};
const LANG_NAME="Latin";
/* text the shared code drops into its messages; {word|meaning} marks a hover definition */
const TXT={
  onbHello:"{Salvē|hello}! I’m {Fēlix|lucky (my name; fēlēs means cat)}, your Latin tutor cat. Let’s get you set up. It takes about 5 minutes.",
  onbAlso:"",
  onbLogin:"I have a Verba account: log in",
  onbDone:"{Euge|well done}! You’re all set. Here are a few tricks before you start.",
  onbTyping:"",
  onbBack:"{Salvē iterum|hello again}! Log in and I’ll bring back your XP, streak and settings.",
  helloAgain:"{Salvē iterum|hello again}!",
  useOf:"use of the ",
  wellDone:"{Euge|well done}",
  onFire:"{Iō|hooray!}, you're on fire!",
  whoIsnt:"Verba",
  loginHint:"Capital letters and macrons don’t matter: “Fēlīx” can log in as “felix”.",
  sameAccount:"The same account works on Palabras (Spanish).",
  famous:"Famous Romans",
  usernameHint:"Macrons and capitals are fine: “Mārcus” and “marcus” count as the same name.",
  mottoEg:"e.g. Fēstīnā lentē (make haste slowly)",
  apToast:"{Laurea|laurel crown} earned! You finished AP Latin. {Euge|well done}!",
  usePlaceholder:"Type the use, like “means” or “possession”",
  xcHint:"Name the use of one word for bonus XP.",
  marks:"macrons",
  markMatters:"the macron",
  diffForm:"a different form of this word",
  anyOrder:" Any word order is accepted.",
  award:()=>`<b>${LWS('Laurea Latīna','the Latin laurel crown')}</b><br>For completing AP Latin. Your laurel crown shows beside your name on the leaderboard and your profile.`
};
/* pieces of index.html (filled in by js/site-fill.js) */
const HTML={
  nav:"<a class=\"brand\" href=\"./\" aria-label=\"Verba home\"><svg class=\"gi\" aria-hidden=\"true\"><use href=\"#gi-greek-temple\"/></svg><b class=\"lw\" data-en=\"words\">Verba</b><span>Latin</span></a><a class=\"langsw alllang\" href=\"../linguae/\" title=\"Linguae: every language site, with one account\">All languages</a><a class=\"langsw\" href=\"../palabras/\" title=\"Same account, separate XP: practice Spanish on Palabras\">Español ↗</a>",
  boardTitle:"Leaderboard",
  heroP:"Sentences built fresh from Latin I Honors through AP Latin. Earn XP, keep your streak alive, and ask Fēlix when you're stuck.",
  heroBubble:"<span class=\"lw\" tabindex=\"0\" data-en=\"hello!\">Salvē</span>! I'm <span class=\"lw\" tabindex=\"0\" data-en=\"lucky (my name; fēlēs means cat)\">Fēlix</span>. Pick some topics and let's go.",
  usesTab:"Identify the use",
  chartsTitle:"Ending charts",
  usesHead:"Uses of the cases <span class=\"hint\">Closed on every new problem. Opening one voids extra credit for that case.</span>",
  macLabel:"Insert a long vowel",
  macHint:"or type - after a vowel: a- becomes ā",
  credits:"Icons by Lorc and Delapouite from <a href=\"https://game-icons.net\" target=\"_blank\" rel=\"noopener\">game-icons.net</a> (CC BY 3.0). Theme switch after Adam Argyle (web.dev, Apache 2.0) with Feather Icons. Confetti by <a href=\"https://github.com/catdad/canvas-confetti\" target=\"_blank\" rel=\"noopener\">canvas-confetti</a>.",
  limit:"<label><input type=\"checkbox\" id=\"limit\" checked> Only 1st and 2nd declension nouns and adjectives</label>"
};
/* ---------- courses and topics ---------- */
const LEVELS=[['I','Latin I Honors'],['II','Latin II Honors'],['III','Latin III Honors'],['AP','AP Latin']];
const TAUGHT=new Set('imp medsum impf ipas indst2 gen gendat genpart genso genmat cause nom acc placeTo dat datref placeFrom sep means accomp manner placeWhere agent town voc appos d1 d2 adj12 tricky adv pa1 pa2 pa3 pa3i pa4 ppas fut fpas inf pinf ques conj gap indst pcond fcond'.split(' '));
const COURSE={I:'Latin I Honors',II:'Latin II Honors',III:'Latin III Honors',AP:'AP Latin'};
const COURSES=[['','Not set'],['I','Latin I Honors'],['I+','Latin I Honors – completed'],['II','Latin II Honors'],['II+','Latin II Honors – completed'],['III','Latin III Honors'],['III+','Latin III Honors – completed'],['AP','AP Latin'],['AP+','AP Latin – completed']];
const COURSE_SHORT={I:'Latin I',II:'Latin II',III:'Latin III',AP:'AP Latin'};
/* ---------- ranks and badges ---------- */
const RANKS=[['Discipulus','student'],['Tīrō','recruit'],['Mīles','soldier'],['Decuriō','squad leader'],['Centuriō','centurion'],['Tribūnus','tribune'],['Lēgātus','general'],['Praetor','judge'],['Cōnsul','consul'],['Imperātor','emperor']];
const RANK_INFO=['Every Latinist starts here.','A new recruit, just signed up for the legion.','A full soldier of the legion.','Leader of a decuria, a squad of ten.','Commands a century of about 80 soldiers.','A senior officer of the legion.','Commands a whole legion.','A high judge and magistrate of Rome.','One of the two consuls, the highest office of the Republic.','Emperor, the top rank on Verba. Levels keep going from here.'];
/* [icon, word, meaning, what earns it, earned?] for a profile's honors */
const BADGES=(r,place,wplace,lv,best)=>[['laurel-crown','Laurea','laurel crown','Completed AP Latin',r.course==='AP+'],['trophy','Victor hebdomadis','winner of the week','#1 on this week’s leaderboard',wplace===1],['trophy','Podium','the platform of honor','Top 3 of all time',place>0&&place<=3],
    ['centurion-helmet','Centuriō','centurion','Reached Level 5',lv>=5],['centurion-helmet','Cōnsul','consul','Reached Level 9',lv>=9],['laurel-crown','Imperātor','emperor','Reached Level 10',lv>=10],
    ['fluffy-flame','Trīduum','three days','A 3-day streak',best>=3],['fluffy-flame','Septimāna','a week','A 7-day streak',best>=7],['fluffy-flame','Mēnsis','a month','A 30-day streak',best>=30],['fluffy-flame','Centum diēs','a hundred days','A 100-day streak',best>=100],
    ['round-star','Mīlle','a thousand','1,000 XP',r.xp>=1000],['round-star','Decem mīlia','ten thousand','10,000 XP',r.xp>=10000]];
/* ---------- profiles: animal names, pictures and banners ---------- */
const ANIMALS=[['Lupus','wolf'],['Vulpēs','fox'],['Ursus','bear'],['Aquila','eagle'],['Leō','lion'],['Equus','horse'],['Corvus','raven'],['Columba','dove'],['Delphīnus','dolphin'],['Cervus','stag'],['Noctua','owl'],['Taurus','bull'],['Lepus','hare'],['Anser','goose'],['Fēlēs','cat'],['Apis','bee']];
/* Profile pictures: freely licensed photos from Wikimedia Commons (credits are loaded live from Commons), or your own upload. */
const PICS=[
  {id:'caesar',n:'Julius Caesar',g:'fig',f:['Bust of Gaius Iulius Caesar in Naples.jpg'],pos:'50% 22%'},
  {id:'augustus',n:'Augustus',g:'fig',f:['Statue-Augustus (cropped).jpg','Statue-Augustus.jpg'],pos:'50% 8%'},
  {id:'cicero',n:'Cicero',g:'fig',f:['M-T-Cicero.jpg'],pos:'50% 30%'},
  {id:'trajan',n:'Trajan',g:'fig',f:['Traianus Glyptothek Munich 336.jpg'],pos:'50% 30%'},
  {id:'hadrian',n:'Hadrian',g:'fig',f:['Bust Hadrian Musei Capitolini MC817.jpg'],pos:'50% 30%'},
  {id:'marcus',n:'Marcus Aurelius',g:'fig',f:['Marcus Aurelius Glyptothek Munich.jpg'],pos:'50% 30%'},
  {id:'constantine',n:'Constantine',g:'fig',f:['Rome-Capitole-StatueConstantin.jpg'],pos:'50% 30%'},
  {id:'cleopatra',n:'Cleopatra',g:'fig',f:['Kleopatra-VII.-Altes-Museum-Berlin1.jpg'],pos:'50% 30%'},
  {id:'lupa',n:'Romulus and Remus',g:'fig',f:['Capitoline she-wolf Musei Capitolini MC1181.jpg'],pos:'50% 50%'},
  {id:'colosseum',n:'Colosseum',g:'place',f:['Colosseum in Rome, Italy - April 2007.jpg'],pos:'50% 50%'},
  {id:'pantheon',n:'Pantheon',g:'place',f:['Pantheon (Rome) front 2.jpg'],pos:'50% 50%'},
  {id:'forum',n:'Roman Forum',g:'place',f:['Forum romanum 6k (5760x2097).jpg'],pos:'50% 50%'},
  {id:'arch',n:'Arch of Constantine',g:'place',f:['Arch of Constantine (Rome) - South side, from Via Triumphalis.jpg'],pos:'50% 50%'},
  {id:'pontdugard',n:'Pont du Gard',g:'place',f:['Pont du Gard BLS.jpg'],pos:'50% 50%'},
  {id:'hadwall',n:'Hadrian’s Wall',g:'place',f:['Milecastle 39 on Hadrian\'s Wall.jpg'],pos:'50% 50%'}];
const BANNERS=[['c:purple','#66023C','Tyrian purple'],['c:red','#A9442A','Roman red'],['c:teal','#2E5E66','Teal'],['c:gold','#A87A22','Gold'],['c:green','#5A7A2C','Laurel green'],['c:stone','#8C8273','Marble grey']];
