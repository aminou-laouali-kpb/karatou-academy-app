import { Language } from '../../translations';
import { LessonContent } from '../../lessonContent';

// Module "Introduction a Claude AI" - chapitre 4.
// Video FR publiee ; EN et HA restent vides (placeholder affiche par le lecteur).
// Le lecteur rend les paragraphes en texte brut : aucun markdown dans les body.

const lessonCl4Fr: LessonContent = {
  id: 'cl4',
  lessonNumber: 4,
  title: 'Les usages concrets au quotidien',
  objective:
    "À la fin de ce chapitre, vous saurez mobiliser Claude sur les quatre familles de tâches qui reviennent chaque semaine dans un travail de bureau — rédiger, adapter le registre, préparer, lire un petit tableau — et vous saurez distinguer les tâches où le gain est réel de celles où il n'est qu'apparent.",
  video: {
    fr: 'https://www.youtube.com/embed/eCPEcAWCM-8',
    en: '',
    ha: '',
  },
  content: [
    {
      title: 'Une règle simple pour savoir quoi lui confier',
      body:
        "Vous savez maintenant formuler une demande et lui donner vos documents. Reste la question qui décide de tout : sur quelles tâches vaut-il la peine de s'en servir ?\n\nLa règle tient en deux critères, et ils se combinent. Premier critère : la tâche vous prend-elle du temps sans mobiliser votre expertise ? Deuxième critère : êtes-vous capable de juger le résultat ?\n\nQuand les deux réponses sont oui, le gain est réel et immédiat. Un mail de relance, un compte rendu à partir de vos notes, une traduction que vous pouvez relire : vous récupérez du temps sur une tâche dont vous restez juge.\n\nQuand la deuxième réponse est non, le gain est une illusion dangereuse. Sur un sujet que vous ne maîtrisez pas, vous ne verrez pas l'erreur, et vous signerez un texte que vous ne pouvez pas défendre. Ce n'est pas du temps gagné, c'est du risque acheté.\n\nEt quand la tâche est déjà rapide, écrire la consigne prend plus de temps que de faire la tâche vous-même. Une réponse de deux lignes s'écrit à la main.\n\nGardez cette grille en tête pendant tout ce chapitre : chacun des usages qui suivent la respecte, et c'est ce qui les rend fiables.",
    },
    {
      title: 'Rédiger : le mail, le compte rendu, la note',
      body:
        "C'est la famille la plus fréquente, et celle où le temps gagné se mesure le plus vite.\n\nLe mail difficile. Relancer un partenaire silencieux, refuser une demande sans fermer la porte, réclamer un paiement en retard, répondre à une réclamation. Ce sont des textes courts qu'on repousse parfois plusieurs jours parce qu'on ne sait pas comment les commencer. Faites-en produire trois versions de tons différents et choisissez.\n\nLe compte rendu. Vous sortez d'une réunion avec des notes désordonnées : trois abréviations, deux noms, une décision, quatre points en suspens. Collez-les telles quelles et demandez la structure. Le passage des notes brutes au document lisible est un travail mécanique — exactement ce qu'il faut déléguer.\n\nLa note de service, la circulaire, l'annonce interne. Format contraint, ton contraint, contenu que vous connaissez déjà.\n\nUn piège commun à ces trois cas : le texte produit sort un peu trop long et un peu trop poli. Une consigne de format le réduit, sans le supprimer tout à fait — couper reste votre travail. Un compte rendu de réunion qui commence par « Nous avons eu le plaisir de nous réunir » n'a pas été relu.",
    },
    {
      title: 'Adapter le registre, plus utile que traduire',
      body:
        "La traduction est l'usage auquel tout le monde pense en premier. Français vers anglais pour un bailleur, anglais vers français pour un document technique. Elle fonctionne bien, et elle se relit toujours — en priorité sur les noms propres, les chiffres et les sigles, qui sont les endroits où une traduction se casse.\n\nMais l'usage le plus rentable pour votre travail n'est pas la traduction entre deux langues : c'est l'adaptation de registre à l'intérieur du français.\n\nUne circulaire administrative de quatre pages doit devenir un message de dix lignes que des producteurs, des parents d'élèves ou des artisans liront vraiment. « Réécris ce texte en français simple, phrases courtes, sans vocabulaire administratif, pour des personnes qui lisent le français mais pas le français de l'administration. Garde les dates, les montants et les obligations exactes. » Cette dernière phrase est indispensable : c'est en simplifiant qu'on perd les informations qui engagent.\n\nSur les langues locales, soyez prudent. La qualité varie beaucoup d'une langue à l'autre, et elle est difficile à évaluer si vous n'êtes pas locuteur natif. Testez sur un texte dont vous connaissez la traduction avant de vous y fier. Et pour un message qui engage — une convocation, une consigne de sécurité, une information sanitaire — la relecture par un locuteur natif n'est pas une précaution, c'est une obligation.",
    },
    {
      title: 'Préparer une réunion, lire un petit tableau',
      body:
        "Préparer. C'est l'usage le moins spontané et l'un des plus utiles. Un ordre du jour à partir de trois objectifs. Un argumentaire pour défendre une demande de budget, avec les objections probables et une réponse à chacune. Une liste de questions d'entretien pour un poste. Un plan de formation à partir de la liste des compétences à couvrir.\n\nLe point commun : vous savez où vous voulez arriver, mais mettre la structure en place prend du temps. C'est le cas idéal — vous êtes pleinement juge du résultat.\n\nLire un petit tableau. Vous collez vingt ou trente lignes de chiffres — fréquentation mensuelle, ventes par produit, présences par site — et vous demandez trois constats, plus ce qui manquerait pour conclure. Cette deuxième partie est celle qui a le plus de valeur : elle vous dit ce que vos données ne permettent pas encore d'affirmer.\n\nLa limite n'est pas qu'il serait incapable de calculer : il peut écrire et exécuter un petit programme pour le faire. La limite, c'est que vous ne voyez pas toujours s'il a calculé ou estimé, et que vous restez responsable du chiffre. Un calcul dont dépend une décision — un total à reporter, un pourcentage à communiquer, un budget à engager — se refait à la main. Servez-vous en pour voir ce que disent vos chiffres, pas pour produire le chiffre que vous allez signer.",
    },
  ],
  example: {
    title: 'Cas type : le comité mensuel du centre de santé',
    challenge:
      "La responsable d'un centre de santé communautaire dans la région de Maradi prépare chaque mois un comité de gestion. Trois choses l'attendent le même week-end : l'ordre du jour, un argumentaire pour demander le financement d'un réfrigérateur à vaccins, et la lecture du tableau de fréquentation des trois derniers mois. Elle fait les trois dans l'urgence du dimanche soir, et l'argumentaire est toujours le premier sacrifié.",
    solution:
      "Elle traite les trois dans une même conversation, dans l'ordre. D'abord l'ordre du jour, à partir de ses trois objectifs et de la durée disponible. Ensuite l'argumentaire : « Rédige un argumentaire d'une page pour demander le financement d'un réfrigérateur à vaccins au comité de gestion. Structure : le problème constaté, ce que coûte l'inaction, la solution, ce qu'elle coûte. Ajoute les trois objections les plus probables et une réponse à chacune. Ton factuel. » Enfin, elle colle son tableau de fréquentation et demande trois constats, plus ce qui manquerait pour conclure.",
    impact:
      "L'ordre du jour et l'argumentaire sortent en vingt minutes, et l'argumentaire est meilleur que d'habitude parce que les objections ont été anticipées au lieu d'être découvertes en séance. Sur le tableau, deux constats lui étaient déjà connus ; le troisième — une chute de fréquentation concentrée sur un seul jour de la semaine — ne l'était pas, et c'est celui qui ouvre la discussion. Elle recalcule à la main les deux pourcentages qu'elle va citer devant le comité.",
  },
  practice: {
    title: 'Traitez de bout en bout une vraie tâche de votre semaine',
    instructions: [
      "Listez les tâches écrites de votre semaine et passez-les à la grille : celle-ci me prend-elle du temps sans mobiliser mon expertise, et suis-je capable de juger le résultat ? Gardez-en une qui répond oui deux fois.",
      "Traitez-la de bout en bout, avec les quatre ingrédients du chapitre 2 et, si un document est en jeu, la méthode du chapitre 3.",
      "Faites produire une seconde version dans un registre différent — plus simple, ou plus direct, ou destinée à un autre public — et comparez les deux.",
      "Chronométrez. Notez le temps réellement passé, corrections comprises, et comparez-le à ce que la tâche vous prend d'habitude.",
    ],
    observation:
      "Regardez ce que vous avez dû corriger. Si vos corrections portent sur la longueur et le ton, la tâche est bien choisie : c'est le travail normal de relecture. Si elles portent sur le fond — un fait faux, une nuance perdue, une information qui engage et qui a disparu au passage — alors vous étiez sur une tâche que vous n'êtes pas en mesure de juger, celle où vous devez rester aux commandes. Cette distinction est le vrai acquis du chapitre.",
  },
  quiz: [
    {
      question: "Parmi ces tâches, laquelle offre le gain le plus fiable ?",
      options: [
        { key: 'A', text: "Rédiger un avis technique dans un domaine que vous ne connaissez pas." },
        { key: 'B', text: "Transformer vos notes de réunion désordonnées en compte rendu structuré." },
        { key: 'C', text: 'Répondre « oui, c’est noté » à un collègue.' },
        { key: 'D', text: "Produire le montant exact d'une taxe entrée en vigueur le mois dernier." },
      ],
      answer: 'B',
      explanation:
        "Le compte rendu coche les deux critères : il prend du temps sans mobiliser votre expertise, et vous êtes pleinement capable de juger le résultat puisque vous étiez à la réunion. A vous ferait signer un texte indéfendable, C est plus rapide à la main, D est le terrain où l'erreur est invisible.",
    },
    {
      question: "Vous devez transformer une circulaire administrative en message lisible par des parents d'élèves. Qu'est-ce qui manque le plus souvent à la consigne ?",
      options: [
        { key: 'A', text: "Préciser qu'il faut être poli." },
        { key: 'B', text: "Exiger que les dates, montants et obligations exactes soient conservés." },
        { key: 'C', text: 'Demander un texte plus long.' },
        { key: 'D', text: "Indiquer la police de caractères." },
      ],
      answer: 'B',
      explanation:
        "C'est en simplifiant qu'on perd les informations qui engagent. Une date d'échéance ou un montant qui disparaît dans la reformulation transforme un message clair en message faux.",
    },
    {
      question: "Vous avez collé un tableau de chiffres et obtenu trois constats. Que faites-vous du pourcentage que vous allez citer en réunion ?",
      options: [
        { key: 'A', text: 'Vous le citez tel quel : il vient de vos propres données.' },
        { key: 'B', text: 'Vous le recalculez à la main avant de le communiquer.' },
        { key: 'C', text: 'Vous demandez le calcul une deuxième fois pour confirmer.' },
        { key: 'D', text: 'Vous arrondissez pour réduire le risque.' },
      ],
      answer: 'B',
      explanation:
        "Vous ne voyez pas toujours s'il a calculé ou estimé, et c'est vous qui répondez du chiffre devant le comité. Redemander le calcul dans la conversation ne vérifie rien : vous lisez une deuxième réponse au lieu de contrôler la première.",
    },
  ],
  reflection:
    "Reprenez la liste des tâches écrites de votre semaine et rangez-les en deux colonnes : celles que vous pouvez juger, et celles que vous ne pouvez pas. Qu'est-ce que la deuxième colonne dit de ce que vous devriez apprendre, plutôt que déléguer ?",
  glossary: [
    {
      term: 'Registre de langue',
      definition:
        "Le niveau de langue d'un texte : administratif, professionnel courant, simple. Changer de registre sans changer de langue est souvent plus utile que traduire.",
    },
    {
      term: 'Adaptation',
      definition:
        "Réécriture d'un texte pour un autre public ou un autre support, en conservant les informations qui engagent — dates, montants, obligations.",
    },
    {
      term: 'Argumentaire',
      definition:
        "Texte court qui défend une demande : le problème, le coût de l'inaction, la solution, son coût, et une réponse aux objections probables.",
    },
    {
      term: 'Constat',
      definition:
        "Ce qu'un tableau permet d'affirmer. À distinguer de ce qu'il ne permet pas encore de conclure : cela, vous devez le demander explicitement dans votre consigne.",
    },
    {
      term: 'Relecture native',
      definition:
        "Vérification d'une traduction par un locuteur natif. Obligatoire dès qu'un message engage : convocation, consigne de sécurité, information sanitaire.",
    },
  ],
};

const lessonCl4En: LessonContent = {
  ...lessonCl4Fr,
  title: 'Everyday practical uses',
  objective:
    'By the end of this chapter you will be able to use Claude on the four families of tasks that come back every week in office work — drafting, shifting register, preparing, reading a small table — and to tell the tasks where the gain is real from those where it only looks real.',
  content: [
    {
      title: 'A simple rule for what to hand over',
      body:
        "You now know how to write a request and how to give it your documents. What remains is the question that decides everything: which tasks are worth it?\n\nTwo criteria, combined. Does the task take your time without using your expertise? And are you able to judge the result?\n\nWhen both answers are yes, the gain is real and immediate: a follow-up email, a summary from your own notes, a translation you can proofread. You get time back on a task you remain the judge of.\n\nWhen the second answer is no, the gain is a dangerous illusion. On a subject you do not master you will not see the error, and you will sign a text you cannot defend. That is not time saved, it is risk bought.\n\nAnd when the task is already quick, writing the instruction costs more than doing it. A two-line reply is written by hand.",
    },
    {
      title: 'Drafting: the email, the minutes, the memo',
      body:
        "The most frequent family, and the one where saved time shows fastest.\n\nThe difficult email. Chasing a silent partner, refusing without closing the door, claiming a late payment, answering a complaint. Short texts that get postponed for days because you cannot find the angle. Ask for three versions in different tones and choose.\n\nThe minutes. You leave a meeting with disordered notes: three abbreviations, two names, one decision, four open points. Paste them as they are and ask for structure. Turning raw notes into a readable document is mechanical work — exactly what should be delegated.\n\nThe memo, the circular, the internal announcement: constrained format, constrained tone, content you already know.\n\nOne trap common to all three: the output comes out slightly too long and slightly too polite. A format instruction shrinks it without removing it entirely — cutting remains your job. Minutes that open with \"We had the pleasure of gathering\" have not been proofread.",
    },
    {
      title: 'Shifting register beats translating',
      body:
        "Translation is what everyone thinks of first. It works well, and it always gets proofread — starting with proper nouns, figures and acronyms, which is where a translation breaks.\n\nBut the most profitable use is not translation between two languages: it is shifting register inside the same one.\n\nA four-page administrative circular has to become a ten-line message that producers, parents or artisans will actually read. \"Rewrite this in plain French, short sentences, no administrative vocabulary, for people who read French but not the French of administration. Keep the exact dates, amounts and obligations.\" That last sentence is essential: simplifying is precisely when binding information gets lost.\n\nOn local languages, be careful. Quality varies a lot between languages and is hard to assess if you are not a native speaker. Test on a text whose translation you know before relying on it. And for a message that binds — a summons, a safety instruction, a health notice — native proofreading is not a precaution, it is an obligation.",
    },
    {
      title: 'Preparing a meeting, reading a small table',
      body:
        "Preparing. The least spontaneous use and one of the most useful. An agenda from three objectives. A case for a budget request, with the likely objections and an answer to each. Interview questions for a role. A training plan from a framework.\n\nWhat they share: you know where you want to end up, but building the structure takes time. That is the ideal case — you are fully the judge of the result.\n\nReading a small table. Paste twenty or thirty rows — monthly attendance, sales by product, presence by site — and ask for three findings plus what would be missing to conclude. That second part carries the most value: it tells you what your data does not yet allow you to claim.\n\nThe limit is not that it cannot calculate: it can write and run a small program to do it. The limit is that you cannot always see whether it computed or estimated, and you remain answerable for the figure. A calculation a decision depends on — a total to report, a percentage to communicate, a budget to commit — is redone by hand. Use it to see what your figures say, not to produce the figure you will sign.",
    },
  ],
  example: {
    title: 'Typical case: the health centre monthly committee',
    challenge:
      'The manager of a community health centre in the Maradi region prepares a management committee every month. Three things land on the same weekend: the agenda, a case for funding a vaccine refrigerator, and the reading of the last three months of attendance figures. All three get done in Sunday-evening panic, and the funding case is always sacrificed first.',
    solution:
      'She handles all three in one conversation, in order. First the agenda, from her three objectives and the time available. Then the case: "Write a one-page case to ask the management committee to fund a vaccine refrigerator. Structure: the observed problem, the cost of inaction, the solution, its cost. Add the three most likely objections and an answer to each. Factual tone." Finally she pastes her attendance table and asks for three findings plus what would be missing to conclude.',
    impact:
      'Agenda and case are out in twenty minutes, and the case is better than usual because objections were anticipated instead of discovered in the room. On the table, two findings she already knew; the third — a drop concentrated on a single weekday — she did not, and that is the one that opens the discussion. She recomputes by hand the two percentages she will quote to the committee.',
  },
  practice: {
    title: 'Take one real task from your week end to end',
    instructions: [
      'List your written tasks for the week and run them through the grid: does this take my time without using my expertise, and can I judge the result? Keep one that answers yes twice.',
      "Take it end to end, with chapter 2's four ingredients and, if a document is involved, chapter 3's method.",
      'Ask for a second version in a different register — simpler, or more direct, or for another audience — and compare.',
      'Time it. Note the time actually spent including corrections, and compare it with what the task usually costs you.',
    ],
    observation:
      'Look at what you had to correct. If your corrections are about length and tone, the task was well chosen: that is normal proofreading. If they are about substance — a wrong fact, a lost nuance, binding information that disappeared — you were on a task you are not able to judge, the kind where you must stay in control. That distinction is the real takeaway.',
  },
  quiz: [
    {
      question: 'Which of these tasks offers the most reliable gain?',
      options: [
        { key: 'A', text: 'Writing a technical opinion in a field you do not know.' },
        { key: 'B', text: 'Turning your disordered meeting notes into structured minutes.' },
        { key: 'C', text: 'Replying "yes, noted" to a colleague.' },
        { key: 'D', text: 'Producing the exact amount of a tax introduced last month.' },
      ],
      answer: 'B',
      explanation:
        'The minutes tick both criteria: they take time without using your expertise, and you can fully judge the result since you were in the meeting. A makes you sign something indefensible, C is faster by hand, D is where the error is invisible.',
    },
    {
      question: 'You must turn an administrative circular into a message parents can read. What is most often missing from the instruction?',
      options: [
        { key: 'A', text: 'Saying it should be polite.' },
        { key: 'B', text: 'Requiring the exact dates, amounts and obligations to be kept.' },
        { key: 'C', text: 'Asking for a longer text.' },
        { key: 'D', text: 'Specifying the typeface.' },
      ],
      answer: 'B',
      explanation:
        'Simplifying is precisely when binding information gets lost. A deadline or an amount that vanishes in the rewrite turns a clear message into a false one.',
    },
    {
      question: 'You pasted a table of figures and got three findings. What do you do with the percentage you will quote in the meeting?',
      options: [
        { key: 'A', text: 'Quote it as is: it comes from your own data.' },
        { key: 'B', text: 'Recompute it by hand before communicating it.' },
        { key: 'C', text: 'Ask for the calculation a second time to confirm.' },
        { key: 'D', text: 'Round it to reduce the risk.' },
      ],
      answer: 'B',
      explanation:
        'You cannot always see whether it computed or estimated, and you are the one answering for the figure in front of the committee. Asking for the calculation again in the conversation verifies nothing: you are reading a second answer instead of checking the first.',
    },
  ],
  reflection:
    'Take your list of written tasks for the week and sort them into two columns: those you can judge, and those you cannot. What does the second column tell you about what you should learn rather than delegate?',
  glossary: [
    { term: 'Register', definition: 'The language level of a text: administrative, everyday professional, plain. Changing register without changing language is often more useful than translating.' },
    { term: 'Adaptation', definition: 'Rewriting a text for another audience or channel while keeping binding information — dates, amounts, obligations.' },
    { term: 'Case (argument)', definition: 'A short text defending a request: the problem, the cost of inaction, the solution, its cost, and an answer to likely objections.' },
    { term: 'Finding', definition: 'What a table lets you claim. To be distinguished from what it does not yet let you conclude: that, you must ask for explicitly in your instruction.' },
    { term: 'Native proofreading', definition: 'Checking a translation with a native speaker. Mandatory as soon as a message binds: summons, safety instruction, health notice.' },
  ],
};

const lessonCl4Ha: LessonContent = {
  ...lessonCl4Fr,
  title: 'Amfani na yau da kullum',
  objective:
    'Bayan wannan darasi za ka iya amfani da Claude a kan iyalai hudu na ayyukan da ke dawowa duk mako a aikin ofis — rubutu, sauya salon magana, shirya, da karanta karamin tebur — kuma za ka iya bambanta ayyukan da ribar take gaskiya da wadanda ribar take kamar gaskiya kawai.',
  content: [
    {
      title: 'Doka mai sauki ta abin da za ka mika',
      body:
        'Yanzu ka san yadda za ka rubuta bukata da yadda za ka ba shi takardunka. Sauran tambaya ita ce mafi muhimmanci: wane aiki ne ya cancanci?\n\nMizani biyu, hade. Aikin yana daukar lokacinka ba tare da bukatar kwarewarka ba? Kuma kana iya hukunta sakamakon?\n\nIdan amsoshin biyu eh ne, ribar gaskiya ce kuma nan take: sako na tunatarwa, takaitaccen rahoto daga rubutunka, fassarar da za ka iya dubawa.\n\nIdan amsa ta biyu a’a ce, ribar rudi ce mai hadari. A kan batun da ba ka kware ba, ba za ka ga kuskuren ba, sannan za ka sa hannu kan rubutun da ba za ka iya karewa ba. Wannan ba lokaci ne aka tanada ba, hadari ne aka saya.\n\nKuma idan aikin ya riga ya yi sauri, rubuta umarni ya fi tsada fiye da yin sa. Amsa ta layi biyu ana rubuta ta da hannu.',
    },
    {
      title: 'Rubutu: sako, takaitaccen rahoto, sanarwa',
      body:
        'Wannan shi ne iyali mafi yawa, kuma inda lokacin da aka tanada ke bayyana da sauri.\n\nSako mai wuya. Tunatar da abokin hulda mai shiru, ki amincewa ba tare da rufe kofa ba, neman biyan kudi da ya makara, amsa korafi. Gajerun rubutu da ake jinkirtawa kwanaki. Nemi sigogi uku da salo daban ka zaba.\n\nTakaitaccen rahoto. Ka fito daga taro da rubutu mara tsari: gajerun kalmomi uku, sunaye biyu, shawara daya, batutuwa hudu a rataye. Ka manna su yadda suke ka nemi tsari. Mai da rubutu na kwance zuwa takarda mai karantuwa aiki ne na injina — daidai abin da ya kamata a mika.\n\nSanarwa, wasika ta cikin gida: tsari kayyade, salo kayyade, abin da ka riga ka sani.\n\nTarko daya na kowannensu, kuma ba ya tafiya: rubutun da ke fitowa koyaushe ya dan yi tsawo kuma ya dan yi ladabi da yawa. Rage shi aikinka ne.',
    },
    {
      title: 'Sauya salo ya fi fassara amfani',
      body:
        'Fassara ita ce abin da kowa ke tunani da farko. Tana aiki da kyau, kuma koyaushe sai an duba ta — musamman sunaye, lambobi da gajerun kalmomi, inda fassara ke karyewa.\n\nAmma amfani mafi riba ba fassara tsakanin harsuna biyu ba ne: sauya salo ne a cikin harshe daya.\n\nWasika ta hukuma mai shafi hudu sai ta zama sako na layi goma da manoma, iyayen dalibai ko masu sana’a za su karanta da gaske. “Sake rubuta wannan da faransanci mai sauki, gajerun jimloli, ba kalmomin hukuma ba, ga mutanen da ke karanta faransanci amma ba faransancin hukuma ba. Ka rike ainihin kwanan wata, adadi da wajibai.” Jimla ta karshe tana da muhimmanci: a lokacin saukakawa ne ake rasa bayanan da ke daure mutum.\n\nA kan harsunan gida, ka yi hankali. Inganci ya bambanta sosai tsakanin harsuna. Ka gwada a kan rubutun da ka san fassararsa kafin ka dogara. Kuma ga sakon da ke daure — kira zuwa taro, umarnin tsaro, bayanin lafiya — dubawar mai magana da harshen ba taka-tsantsan ba ce, wajibi ce.',
    },
    {
      title: 'Shirya taro, karanta karamin tebur',
      body:
        'Shirya. Shi aka fi rashin tunani a kai, kuma daya daga cikin masu amfani. Ajanda daga buri uku. Hujja don neman kasafin kudi, da hamayyar da ake tsammani da amsa ga kowace. Tambayoyin hira. Tsarin horo.\n\nAbin da suka hade: ka san inda kake son isa, amma gina tsarin yana daukar lokaci. Wannan shi ne yanayi mafi kyau — kai ne cikakken alkali kan sakamakon.\n\nKaranta karamin tebur. Ka manna layi ashirin ko talatin — halartar wata-wata, sayarwa bisa kaya, halarta bisa wuri — ka nemi bincike uku, da abin da ya rasa don a yanke shawara. Sashi na biyu shi ya fi daraja: yana gaya maka abin da bayananka ba su bari ka fada ba tukuna.\n\nIyakar ba ita ce ba zai iya lissafi ba: yana iya rubuta karamin shiri ya gudanar da shi. Iyakar ita ce ba koyaushe kake gani ko ya lissafa ko ya kiyasta ba, kuma kai ne ke da alhakin lambar. Lissafin da shawara ta dogara a kansa — jimla, kaso, kasafi — sai an sake yin sa da hannu.',
    },
  ],
  example: {
    title: 'Misali: kwamitin wata-wata na cibiyar lafiya',
    challenge:
      'Shugabar cibiyar lafiya ta al’umma a yankin Maradi tana shirya kwamitin gudanarwa duk wata. Abubuwa uku suna zuwa a karshen mako daya: ajanda, hujja don neman kudin firji na alluran rigakafi, da karanta teburin halarta na watanni uku. Tana yin ukun cikin gaggawa ranar Lahadi da yamma, kuma hujjar ita ce ta farko da ake sadaukarwa.',
    solution:
      'Tana yin ukun a tattaunawa daya, bi da bi. Da farko ajanda, daga buri uku da lokacin da ake da shi. Sannan hujjar: “Rubuta hujja ta shafi daya don neman kwamitin gudanarwa ya biya kudin firji na alluran rigakafi. Tsari: matsalar da aka gani, kudin rashin aiki, mafita, kudinta. Ka kara hamayya uku da suka fi yiwuwa da amsa ga kowace. Salo na gaskiya.” A karshe ta manna teburin halarta ta nemi bincike uku, da abin da ya rasa don a yanke shawara.',
    impact:
      'Ajanda da hujja sun fito cikin mintuna ashirin, kuma hujjar ta fi ta baya kyau domin an yi tsammanin hamayya kafin taro. A kan tebur, bincike biyu ta riga ta san su; na uku — raguwar halarta a rana daya ta mako — ba ta sani ba, kuma shi ne ya bude tattaunawa. Ta sake lissafa da hannu kaso biyu da za ta ambata a gaban kwamitin.',
  },
  practice: {
    title: 'Ka gudanar da aiki daya na gaske na makonka gaba daya',
    instructions: [
      'Ka lissafa ayyukan rubutu na makonka ka gwada su da mizanin: wannan yana daukar lokacina ba tare da kwarewata ba, kuma zan iya hukunta sakamakon? Ka rike daya da amsarsa eh sau biyu.',
      'Ka gudanar da shi gaba daya, da sinadarai hudu na darasi na 2, kuma idan akwai takarda, da hanyar darasi na 3.',
      'Ka nemi siga ta biyu a salo daban — mai sauki, ko kai tsaye, ko ga wasu masu sauraro — ka kwatanta.',
      'Ka auna lokaci. Ka lura lokacin da ka kashe da gaske, gyara ciki, ka kwatanta da lokacin da aikin ke daukar maka a al’ada.',
    ],
    observation:
      'Ka duba abin da ka gyara. Idan gyaran ya shafi tsawo da salo, aikin ya dace: dubawa ce ta al’ada. Idan ya shafi ainihin abu — bayanin karya, ma’ana da ta bata, bayanin da ke daure da ya bace — to kana kan aiki na nau’i na biyu, inda dole ka rike ragamar. Wannan bambanci shi ne ainihin darasin.',
  },
  quiz: [
    {
      question: 'Wane daga cikin wadannan ayyuka ne ke bayar da riba mafi aminci?',
      options: [
        { key: 'A', text: 'Rubuta ra’ayi na fasaha a fannin da ba ka sani ba.' },
        { key: 'B', text: 'Mai da rubutun taronka mara tsari zuwa takaitaccen rahoto mai tsari.' },
        { key: 'C', text: 'Amsa “eh, na gane” ga abokin aiki.' },
        { key: 'D', text: 'Fitar da ainihin adadin harajin da aka fara wata da ya gabata.' },
      ],
      answer: 'B',
      explanation:
        'Takaitaccen rahoto ya cika mizani biyu: yana daukar lokaci ba tare da kwarewarka ba, kuma kana iya hukunta sakamakon tunda kana taron. A zai sa ka sa hannu kan abin da ba za ka kare ba, C ya fi sauri da hannu, D shi ne inda kuskure ba ya bayyana.',
    },
    {
      question: 'Sai ka mai da wasikar hukuma zuwa sako da iyayen dalibai za su karanta. Me ya fi rasawa a umarnin?',
      options: [
        { key: 'A', text: 'Fadin cewa ya kamata ya zama mai ladabi.' },
        { key: 'B', text: 'Nema a rike ainihin kwanan wata, adadi da wajibai.' },
        { key: 'C', text: 'Neman rubutu mai tsawo.' },
        { key: 'D', text: 'Fadin nau’in rubutu.' },
      ],
      answer: 'B',
      explanation:
        'A lokacin saukakawa ne ake rasa bayanan da ke daure. Wa’adi ko adadin da ya bace a sake rubutawa yana mai da sako bayyananne ya zama sako na karya.',
    },
    {
      question: 'Ka manna tebur ka samu bincike uku. Me za ka yi da kason da za ka ambata a taro?',
      options: [
        { key: 'A', text: 'Ka ambace shi yadda yake: daga bayananka ya fito.' },
        { key: 'B', text: 'Ka sake lissafa shi da hannu kafin ka sanar.' },
        { key: 'C', text: 'Ka sake neman lissafin karo na biyu don tabbatarwa.' },
        { key: 'D', text: 'Ka zagaye shi don rage hadari.' },
      ],
      answer: 'B',
      explanation:
        'Wannan ba tebur na lissafi ba ne. Lambar da shawara ta dogara a kanta sai an sake yin ta da hannu. Sake tambaya ba ya tabbatar da komai: kuskure daya na iya maimaituwa.',
    },
  ],
  reflection:
    'Ka sake duba jerin ayyukan rubutu na makonka ka raba su ginshiki biyu: wadanda za ka iya hukuntawa, da wadanda ba za ka iya ba. Me ginshiki na biyu ke gaya maka game da abin da ya kamata ka koya, maimakon ka mika?',
  glossary: [
    { term: 'Salon magana', definition: 'Matakin harshe na rubutu: na hukuma, na aiki na yau da kullum, mai sauki. Sauya salo ba tare da sauya harshe ba yakan fi fassara amfani.' },
    { term: 'Daidaitawa', definition: 'Sake rubuta rubutu ga wasu masu sauraro ko wata hanya, tare da rike bayanan da ke daure — kwanan wata, adadi, wajibai.' },
    { term: 'Hujja', definition: 'Gajeren rubutu da ke kare bukata: matsalar, kudin rashin aiki, mafita, kudinta, da amsa ga hamayyar da ake tsammani.' },
    { term: 'Bincike', definition: 'Abin da tebur ya bari ka fada. A banbanta shi da abin da bai bari ka yanke shawara ba tukuna, wanda ake nema a fili.' },
    { term: 'Dubawar mai harshe', definition: 'Duba fassara da mai magana da harshen. Wajibi ne duk lokacin da sako ke daure: kira zuwa taro, umarnin tsaro, bayanin lafiya.' },
  ],
};

export const claudeLesson4ByLanguage: Record<Language, LessonContent> = {
  fr: lessonCl4Fr,
  en: lessonCl4En,
  ha: lessonCl4Ha,
};
