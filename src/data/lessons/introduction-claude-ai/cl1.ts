import { Language } from '../../translations';
import { LessonContent } from '../../lessonContent';

// Module "Introduction a Claude AI" - chapitre 1.
// Video FR publiee ; EN et HA restent vides (placeholder affiche par le lecteur).
// Voir docs/module-introduction-claude-ai.md et
// docs/brief-video-introduction-claude-ai-cl1.md.

const lessonCl1Fr: LessonContent = {
  id: 'cl1',
  lessonNumber: 1,
  title: "Qu'est-ce que Claude ?",
  objective:
    "À la fin de ce chapitre, vous saurez dire ce qu'est Claude et ce qu'il n'est pas, où y accéder depuis un téléphone ou un ordinateur, ce que permet la version gratuite, et vous aurez mené votre première vraie conversation sur un sujet de votre travail.",
  video: {
    fr: 'https://www.youtube.com/embed/9YfmYPV7Pe0',
    en: '',
    ha: '',
  },
  content: [
    {
      title: "Claude, c'est quoi exactement ?",
      body:
        "Claude est un assistant conversationnel développé par l'entreprise Anthropic. Concrètement : vous écrivez une demande en français courant, et il vous répond en texte. Pas de code à écrire, pas de formation technique préalable, pas de menu compliqué. Une zone de texte, votre question, une réponse.\n\nCe qui le distingue d'un logiciel classique, c'est qu'il n'a pas été programmé pour une tâche unique. Un tableur calcule, un traitement de texte met en forme. Claude, lui, a appris à partir d'énormes quantités de textes, et il peut donc aussi bien reformuler un mail, résumer un rapport de 40 pages, traduire un message, structurer un ordre du jour ou vous expliquer une notion administrative.\n\nUne image utile : Claude ressemble à un collègue stagiaire très rapide, très cultivé, disponible à toute heure — mais qui n'a jamais mis les pieds dans votre organisation. Il travaille vite et bien à condition qu'on lui explique le contexte. Et comme tout stagiaire, vous devez relire son travail vous-même avant de l'envoyer.",
    },
    {
      title: "Ce qu'il fait bien, et ce qu'il ne fait pas",
      body:
        "Claude est particulièrement à l'aise sur tout ce qui touche au texte : rédiger, reformuler, raccourcir, traduire, résumer, structurer, expliquer, comparer, corriger. Il lit aussi les documents que vous lui déposez — un PDF, une photo de document, un tableau — et il peut vous en extraire ce qui vous intéresse.\n\nMais il faut être clair sur ses limites, dès maintenant, avant même de commencer :\n\nCe n'est pas un moteur de recherche, même s'il peut consulter le web. Sa connaissance de base vient de son apprentissage et s'arrête à une certaine date ; quand il cherche en ligne, il dépend de ce qu'il trouve et de la façon dont il le lit. Sur une actualité récente, un décret publié le mois dernier ou le prix du sac de riz sur votre marché, il peut se tromper avec beaucoup d'assurance — avec ou sans recherche. Une réponse sourcée se vérifie aussi : on ouvre le lien.\n\nCe n'est pas une source d'autorité. Il peut produire une réponse fausse mais parfaitement crédible, bien écrite, sans jamais signaler qu'il hésite : on appelle cela une hallucination. C'est le risque principal, et le chapitre 5 y est entièrement consacré.\n\nCe n'est pas un coffre-fort. Ce que vous y écrivez sort de votre organisation. On n'y colle donc jamais un fichier de bénéficiaires nominatif, un dossier médical, un mot de passe ou un numéro de compte.\n\nCe n'est pas un décideur. Il propose, vous tranchez. La responsabilité de ce que vous envoyez reste la vôtre.",
    },
    {
      title: 'Où trouver Claude, et à quel prix',
      body:
        "Trois portes d'entrée, la même conversation derrière :\n\nLe site claude.ai, dans le navigateur de votre téléphone ou de votre ordinateur. C'est le chemin le plus simple, rien à installer.\n\nL'application mobile, sur Android et iPhone. Plus confortable au quotidien, et pratique pour envoyer directement une photo d'un document.\n\nL'application bureau, sur Windows et Mac, pour ceux qui travaillent surtout sur ordinateur.\n\nDans les trois cas, il faut créer un compte et une connexion internet : Claude ne fonctionne pas hors ligne. Prévoyez une connexion correcte, surtout si vous envoyez des documents.\n\nCôté tarif, il existe une version gratuite, suffisante pour tout ce que nous ferons dans ce module, avec une limite d'utilisation qui se recharge après quelques heures. Si vous atteignez cette limite, ce n'est pas une panne : vous reprendrez plus tard. Des abonnements payants existent pour un usage intensif ; les montants et les paliers évoluent régulièrement, vérifiez-les sur le site plutôt que de vous fier à un chiffre entendu ailleurs.",
    },
    {
      title: 'Votre première conversation',
      body:
        "Le premier réflexe de la plupart des gens est de tester l'outil avec une question de culture générale : « qui a écrit tel livre ? ». C'est le meilleur moyen de repartir déçu. Vous ne mesurerez rien de sa vraie utilité, et vous vous exposez précisément au terrain où il se trompe.\n\nCommencez plutôt par une tâche que vous savez évaluer, parce que vous connaissez déjà la bonne réponse. Un mail que vous auriez écrit vous-même. Un paragraphe de rapport que vous maîtrisez. Vous êtes alors capable de juger la qualité de ce qui sort.\n\nDeux points de mécanique à connaître dès la première minute :\n\nOn peut relancer. La première réponse n'est pas un verdict. « Trop long, refais en 5 lignes », « plus direct », « ajoute une phrase de remerciement à la fin » : la conversation se corrige au fil de l'échange, exactement comme avec un collègue.\n\nClaude garde une mémoire d'une conversation à l'autre. Sur les comptes personnels — gratuit, Pro et Max — elle est activée par défaut : ce que vous avez expliqué la semaine dernière peut être repris aujourd'hui, sans que vous ayez à le recoller. C'est commode, et cela a une conséquence qu'il faut voir tout de suite : une information sensible glissée dans une conversation peut ressortir dans une autre. Vous pouvez la mettre en pause, l'effacer, ou regarder ce qu'elle contient dans les réglages. Sur les comptes d'organisation, elle est désactivée par défaut.",
    },
  ],
  example: {
    title: "Cas type : la note de synthèse du lundi matin",
    challenge:
      "Une chargée de programme dans une ONG à Niamey reçoit chaque vendredi cinq rapports d'activité de ses équipes terrain, entre trois et huit pages chacun. Elle doit en tirer une note d'une page pour la réunion de direction du lundi. L'exercice lui prend systématiquement sa matinée du samedi.",
    solution:
      "Elle ouvre Claude, dépose les cinq rapports dans la même conversation, et demande : « Voici cinq rapports hebdomadaires de nos équipes terrain au Niger. Rédige une note de synthèse d'une page pour ma direction, structurée en trois parties : avancées de la semaine, blocages, décisions attendues. Reste factuel et cite le rapport d'origine pour chaque point. »",
    impact:
      "Elle obtient une première version en quelques minutes, qu'elle relit et corrige — le brouillon a manqué une alerte sécurité qu'elle réintègre, et elle reformule deux passages au ton trop neutre. Le gain n'est pas d'avoir supprimé son travail : il est d'être passée de la page blanche à la relecture. La compétence qui reste indispensable, c'est sa capacité à repérer ce que la synthèse a raté.",
  },
  practice: {
    title: "Ouvrez Claude et testez-le sur votre propre travail",
    instructions: [
      "Rendez-vous sur claude.ai depuis votre téléphone ou votre ordinateur, ou installez l'application mobile, et créez votre compte.",
      "Posez une première demande liée à une tâche réelle de votre travail, dont vous connaissez déjà la bonne réponse. Par exemple : « Rédige un mail poli pour relancer un partenaire qui n'a pas répondu depuis deux semaines. »",
      "Relancez au moins deux fois pour affiner : demandez une version plus courte, puis un changement de ton (plus formel, ou plus direct).",
      "Posez ensuite une question volontairement piégeuse sur un sujet local et récent que vous maîtrisez — un texte réglementaire de votre pays, un prix actuel, un événement du mois dernier — et vérifiez la réponse.",
    ],
    observation:
      "Comparez les deux expériences. Sur la tâche de rédaction, notez le temps gagné et ce que vous avez dû corriger. Sur la question locale, notez si la réponse était juste, fausse, ou fausse avec assurance. Ce contraste est le vrai enseignement du chapitre : Claude est fort là où vous pouvez le relire, et risqué là où vous ne pouvez pas.",
  },
  quiz: [
    {
      question: "Quelle est la meilleure description de Claude ?",
      options: [
        { key: 'A', text: 'Un moteur de recherche qui trouve des pages web à jour.' },
        { key: 'B', text: "Un assistant conversationnel qui comprend et produit du texte à partir d'une demande écrite." },
        { key: 'C', text: 'Un logiciel de comptabilité automatisée.' },
        { key: 'D', text: "Une base de données qui stocke les documents de l'organisation." },
      ],
      answer: 'B',
      explanation:
        "Claude est un assistant conversationnel : on lui écrit une demande en langage courant, il répond en texte. Il ne fonctionne pas comme un moteur de recherche, qui renvoie une liste de pages à ouvrir soi-même, et il ne stocke pas les documents de votre organisation.",
    },
    {
      question: "Vous devez vérifier le montant exact d'une taxe entrée en vigueur le mois dernier dans votre pays. Que faire ?",
      options: [
        { key: 'A', text: "Demander à Claude et utiliser sa réponse telle quelle, elle est bien formulée." },
        { key: 'B', text: "Demander à Claude, puis vérifier le montant sur la source officielle avant de l'utiliser." },
        { key: 'C', text: "Demander trois fois à Claude : si la réponse est identique, elle est forcément juste." },
        { key: 'D', text: 'Ne jamais utiliser Claude pour un sujet administratif.' },
      ],
      answer: 'B',
      explanation:
        "Sur une information récente, précise et locale, Claude peut se tromper avec assurance. Répéter la question ne prouve rien : Claude peut répéter la même erreur. La réponse peut servir de point de départ, jamais de preuve.",
    },
    {
      question: "Laquelle de ces informations ne doit jamais être collée dans Claude ?",
      options: [
        { key: 'A', text: "Un brouillon de mail à un partenaire." },
        { key: 'B', text: "Le plan d'une formation que vous préparez." },
        { key: 'C', text: "La liste nominative des bénéficiaires d'un programme, avec leurs contacts." },
        { key: 'D', text: "Une question sur la structure d'un rapport." },
      ],
      answer: 'C',
      explanation:
        "Ce que vous écrivez à Claude sort de votre organisation. Les données personnelles identifiantes — noms, contacts, dossiers médicaux, identifiants — n'y ont pas leur place. Anonymisez avant, ou n'envoyez pas.",
    },
  ],
  reflection:
    "Pensez à une tâche écrite qui vous prend du temps chaque semaine sans vous demander de véritable expertise. Qu'est-ce qui, dans cette tâche, pourrait être confié à un assistant — et quelle part devrait rester impérativement entre vos mains ?",
  glossary: [
    {
      term: 'Claude',
      definition:
        "Assistant conversationnel développé par Anthropic, accessible sur claude.ai, sur application mobile et sur ordinateur.",
    },
    {
      term: 'Assistant conversationnel',
      definition:
        "Outil avec lequel on échange en langage courant, par écrit, plutôt qu'en remplissant des formulaires ou en écrivant du code.",
    },
    {
      term: 'Conversation (ou fil)',
      definition:
        "Un échange continu avec Claude. Le contexte y est gardé d'un bout à l'autre, et la mémoire peut aussi le reporter d'une conversation à la suivante.",
    },
    {
      term: 'Mémoire',
      definition:
        "Capacité de Claude à se souvenir d'une conversation à l'autre. Activée par défaut sur les comptes personnels, désactivable dans les réglages. Elle évite de recoller le contexte, et impose de faire attention à ce qu'on y laisse.",
    },
    {
      term: 'Relance',
      definition:
        "Message qui corrige ou précise la demande après une première réponse : raccourcir, changer de ton, ajouter un élément.",
    },
    {
      term: 'Hallucination',
      definition:
        "Réponse fausse mais formulée avec assurance. Ce n'est pas un mensonge intentionnel, c'est une limite structurelle de ces outils — d'où la vérification systématique.",
    },
  ],
};

const lessonCl1En: LessonContent = {
  ...lessonCl1Fr,
  title: 'What is Claude?',
  objective:
    "By the end of this chapter you will know what Claude is and is not, how to reach it from a phone or a computer, what the free plan allows, and you will have run your first real conversation on a work topic.",
  content: [
    {
      title: 'What Claude actually is',
      body:
        "Claude is a conversational assistant built by Anthropic. You write a request in plain language and it answers in text. No code, no technical training, no complicated menus.\n\nUnlike a spreadsheet or a word processor, it was not programmed for one single task. It can rewrite an email, summarize a 40-page report, translate a message, structure an agenda or explain an administrative concept.\n\nA useful image: Claude is like a fast, well-read intern available at any hour, who has never set foot in your organization. It works well when you explain the context, and you must always read its output yourself before you send it.",
    },
    {
      title: 'What it does well, and what it does not do',
      body:
        "Claude is strong on anything made of text: drafting, rewriting, shortening, translating, summarizing, structuring, explaining, comparing, correcting. It also reads documents you upload — a PDF, a photo of a document, a table.\n\nIts limits matter from day one. It is not a search engine, though it can browse the web: its base knowledge stops at a certain date, and when it searches it depends on what it finds and how it reads it. It can still be wrong about recent events or local prices — a sourced answer is verified by opening the link. It is not an authority: it can produce a false but perfectly credible answer without signalling any doubt — this is called a hallucination. It is not a vault: never paste named beneficiary lists, medical files, passwords or account numbers. And it is not the decision maker — it proposes, you decide.",
    },
    {
      title: 'Where to find Claude, and what it costs',
      body:
        "Three entry points, one same assistant behind them: the claude.ai website in your phone or computer browser, the mobile app on Android and iPhone, and the desktop app on Windows and Mac.\n\nAll three need an account and an internet connection — Claude does not work offline. A free plan is enough for everything in this module, with a usage limit that resets after a few hours. Paid plans exist for heavy use; amounts and tiers change regularly, so check them on the site rather than trusting a figure heard elsewhere.",
    },
    {
      title: 'Your first conversation',
      body:
        "Most people test the tool with a general knowledge question. That is the fastest way to be disappointed, and it lands exactly where the tool is weakest.\n\nStart instead with a task you can judge, because you already know the right answer: an email you would have written yourself, a paragraph you master.\n\nTwo mechanics to know immediately. You can push back — \"too long, make it five lines\", \"more direct\" — the conversation improves through exchange. And Claude remembers across conversations: on personal accounts — Free, Pro and Max — memory is on by default, so what you explained last week can come back today without re-pasting it. That is convenient, and it cuts both ways: something sensitive dropped into one conversation can resurface in another. You can pause it, clear it, or review what it holds in Settings. On organization accounts it is off by default.",
    },
  ],
  example: {
    title: 'Typical case: the Monday morning summary note',
    challenge:
      'A programme officer in an NGO in Niamey receives five field activity reports every Friday, three to eight pages each, and must turn them into a one-page note for the Monday management meeting. It costs her every Saturday morning.',
    solution:
      'She uploads the five reports into one Claude conversation and asks for a one-page summary structured in three parts — progress, blockers, decisions needed — factual, with the source report cited for each point.',
    impact:
      'She gets a first version in minutes, then reviews and corrects it: the draft missed a security alert she puts back, and two passages were too neutral. The gain is not that her work disappeared — it is that she moved from a blank page to a review. Her ability to spot what the summary missed is exactly the skill that stays essential.',
  },
  practice: {
    title: 'Open Claude and test it on your own work',
    instructions: [
      'Go to claude.ai from your phone or computer, or install the mobile app, and create your account.',
      'Ask for something from a real work task whose right answer you already know, for example a polite follow-up email to a partner who has not replied for two weeks.',
      'Ask for changes at least twice: ask for a shorter version, then for a different tone (more formal, or more direct).',
      'Then ask a deliberately tricky question about a recent local topic you master — a regulation in your country, a current price, last month’s event — and check the answer.',
    ],
    observation:
      'Compare the two experiences: on the drafting task, note the time saved and what you had to fix; on the local question, note whether the answer was right, wrong, or confidently wrong. That contrast is the lesson: Claude is strong where you can review it, risky where you cannot.',
  },
  quiz: [
    {
      question: 'Which description of Claude is the most accurate?',
      options: [
        { key: 'A', text: 'A search engine that finds up-to-date web pages.' },
        { key: 'B', text: 'A conversational assistant that understands and produces text from a written request.' },
        { key: 'C', text: 'An automated accounting package.' },
        { key: 'D', text: "A database that stores the organization's documents." },
      ],
      answer: 'B',
      explanation:
        'Claude is a conversational assistant: you write a request in plain language and it answers in text. It does not index the web and does not store your organization’s documents.',
    },
    {
      question: 'You need the exact amount of a tax introduced last month in your country. What should you do?',
      options: [
        { key: 'A', text: 'Use Claude’s answer as it is, since it is well written.' },
        { key: 'B', text: 'Ask Claude, then verify the amount against the official source before using it.' },
        { key: 'C', text: 'Ask three times: if the answer repeats, it must be right.' },
        { key: 'D', text: 'Never use Claude for administrative topics.' },
      ],
      answer: 'B',
      explanation:
        'On recent, precise, local information Claude can be confidently wrong, and repeating the question proves nothing. The answer can be a starting point, never a proof.',
    },
    {
      question: 'Which of these must never be pasted into Claude?',
      options: [
        { key: 'A', text: 'A draft email to a partner.' },
        { key: 'B', text: 'The outline of a training you are preparing.' },
        { key: 'C', text: 'A named list of programme beneficiaries with their contact details.' },
        { key: 'D', text: 'A question about how to structure a report.' },
      ],
      answer: 'C',
      explanation:
        'What you write to Claude leaves your organization. Identifying personal data — names, contacts, medical files, credentials — does not belong there. Anonymize first, or do not send it.',
    },
  ],
  reflection:
    'Think of a written task that takes your time every week without requiring real expertise. What part of it could be handed to an assistant, and what part must stay firmly in your hands?',
  glossary: [
    { term: 'Claude', definition: 'Conversational assistant built by Anthropic, available on claude.ai, on mobile and on desktop.' },
    { term: 'Conversational assistant', definition: 'A tool you interact with in plain written language rather than through forms or code.' },
    { term: 'Conversation (thread)', definition: 'One continuous exchange with Claude. Context is kept throughout, and memory can carry it into later conversations.' },
    { term: 'Memory', definition: 'Claude remembering across conversations. On by default on personal accounts, switchable off in Settings. It saves re-pasting context, and demands care about what you leave in it.' },
    { term: 'Follow-up prompt', definition: 'A message that corrects or refines the request after a first answer: shorten, change tone, add an element.' },
    { term: 'Hallucination', definition: 'A false answer stated with confidence. It is a structural limit of these tools, which is why verification is systematic.' },
  ],
};

const lessonCl1Ha: LessonContent = {
  ...lessonCl1Fr,
  title: 'Menene Claude?',
  objective:
    'Bayan wannan darasi za ka san menene Claude da abin da ba shi ba, inda za ka same shi a waya ko kwamfuta, abin da sigar kyauta ke bayarwa, kuma za ka yi tattaunawa ta farko a kan aikinka.',
  content: [
    {
      title: 'Menene Claude',
      body:
        'Claude mataimaki ne na tattaunawa da kamfanin Anthropic ya kera. Kana rubuta bukatarka da harshe mai sauki, shi kuma ya amsa maka da rubutu. Ba sai ka san code ba.\n\nBa a tsara shi don aiki daya ba: yana iya sake rubuta sako, takaita rahoto mai shafuka da yawa, fassara, ko tsara ajandar taro.\n\nKa dauke shi kamar sabon ma’aikaci mai hanzari da ilimi, amma bai taba shiga kungiyarka ba. Sai ka bayyana masa mahallin aikin, kuma koyaushe sai ka duba aikinsa kafin ka aika.',
    },
    {
      title: 'Abin da yake iya yi da abin da ba ya yi',
      body:
        'Claude yana da karfi a duk abin da ya shafi rubutu: rubutawa, takaitawa, fassara, tsarawa, bayyanawa da gyara. Yana kuma iya karanta takardun da ka aika masa, kamar PDF ko hoton takarda.\n\nAmma ka san iyakarsa tun yau. Ba injin bincike ba ne, ko da yake yana iya duba yanar gizo: iliminsa na asali yana tsayawa a wani lokaci, kuma idan ya bincika, ya dogara ne kan abin da ya samu da yadda ya karanta shi. Yana iya kuskure a kan sabon labari ko farashin gida — da bincike ko babu. Amsa mai tushe ma sai an tabbatar da ita: sai ka bude hanyar. Ba tushen gaskiya ba ne: yana iya bayar da amsa karya amma mai kyan gani. Ba wurin ajiye sirri ba ne: kar ka taba manna sunayen masu amfana, bayanan lafiya, kalmar sirri ko lambar asusu. Kuma ba shi ne mai yanke shawara ba — kai ne.',
    },
    {
      title: 'Inda za ka same shi da kudinsa',
      body:
        'Hanyoyi uku, mataimaki daya: shafin claude.ai a browser na waya ko kwamfuta, manhajar waya a Android da iPhone, da manhajar kwamfuta a Windows da Mac.\n\nDuk suna bukatar asusu da intanet — Claude ba ya aiki ba tare da intanet ba. Akwai sigar kyauta wadda ta isa ga duk abin da za mu yi a wannan module, tare da iyaka da ke sabuntawa bayan ‘yan sa’o‘i. Akwai kuma biyan kudi don amfani mai yawa; farashi na sauyawa, sai ka duba a shafin.',
    },
    {
      title: 'Tattaunawarka ta farko',
      body:
        'Mutane da yawa suna gwada shi da tambayar ilimi na gaba daya. Wannan hanya ce ta baci, kuma daidai inda yake yin kuskure.\n\nGara ka fara da aiki da ka riga ka san amsarsa: sako da da kanka za ka rubuta, ko sakin layi da ka kware a kai.\n\nAbubuwa biyu masu muhimmanci: kana iya sake tambaya — “ya yi tsawo, ka rage zuwa layi biyar” — tattaunawar na gyaruwa a hankali. Kuma Claude yana rike da tunani daga wannan tattaunawa zuwa waccan: a asusun mutum — kyauta, Pro da Max — an kunna wannan tunani tun asali, don haka abin da ka bayyana makon jiya na iya dawowa yau ba tare da ka sake mannawa ba. Wannan yana da sauki, kuma yana da wata fuska: bayanin sirri da ka sa a tattaunawa daya na iya fitowa a wata. Kana iya dakatar da shi, share shi, ko duba abin da ke ciki a cikin saituna. A asusun kungiya, an kashe shi tun asali.',
    },
  ],
  example: {
    title: 'Misali: takaitaccen rahoto na safiyar Litinin',
    challenge:
      'Wata ma’aikaciyar shirye-shirye a kungiya a Yamai tana karbar rahotanni biyar daga tawagogin fili duk Juma’a, kuma sai ta mayar da su shafi daya kafin taron Litinin. Wannan yana daukar safiyar Asabar dinta.',
    solution:
      'Ta aika rahotannin biyar a tattaunawa daya, ta nemi takaitaccen rubutu na shafi daya cikin kashi uku: ci gaba, matsaloli, da shawarwarin da ake bukata, tare da ambaton rahoton da kowanne ya fito.',
    impact:
      'Ta samu daftarin farko cikin ‘yan mintuna, sannan ta duba ta gyara: an manta wata sanarwar tsaro da ta mayar. Ribar ba shine an cire aikinta ba, shine ta tashi daga farar shafi zuwa dubawa.',
  },
  practice: {
    title: 'Bude Claude ka gwada shi a kan aikinka',
    instructions: [
      'Je claude.ai a waya ko kwamfuta, ko sanya manhajar waya, sannan ka bude asusu.',
      'Ka nemi wani abu na aikinka da ka riga ka san amsarsa, misali sako na tunatarwa ga abokin hulda da bai amsa ba tsawon makonni biyu.',
      'Ka sake tambaya sau biyu: ka nemi gajeriyar sigar, sannan ka nemi sauya salon magana.',
      'Sannan ka yi tambaya mai wuya a kan sabon batu na gida da ka kware a kai, ka duba amsar.',
    ],
    observation:
      'Ka kwatanta gwaje-gwajen biyu: a rubutu, lokacin da ka tanada da abin da ka gyara; a tambayar gida, ko amsar gaskiya ce ko karya. Wannan bambanci shi ne darasin: Claude yana da karfi inda za ka iya dubawa, mai hadari inda ba za ka iya ba.',
  },
  quiz: [
    {
      question: 'Wane bayani ne ya fi dacewa da Claude?',
      options: [
        { key: 'A', text: 'Injin bincike da ke gano sabbin shafuka a yanar gizo.' },
        { key: 'B', text: 'Mataimaki na tattaunawa da ke fahimta da samar da rubutu daga bukatar da aka rubuta.' },
        { key: 'C', text: 'Manhajar lissafin kudi ta atomatik.' },
        { key: 'D', text: 'Ma’ajiyar takardun kungiya.' },
      ],
      answer: 'B',
      explanation:
        'Claude mataimaki ne na tattaunawa: kana rubuta bukata da harshe mai sauki, shi ya amsa da rubutu. Ko da yake yana iya duba yanar gizo, ba ya tsara ta kamar injin bincike, kuma ba shi ne ma’ajiyar takardun kungiyarka ba.',
    },
    {
      question: 'Kana bukatar ainihin adadin wani haraji da aka fara wata da ya gabata a kasarka. Me za ka yi?',
      options: [
        { key: 'A', text: 'Ka yi amfani da amsar Claude kai tsaye, tunda tana da kyan rubutu.' },
        { key: 'B', text: 'Ka tambayi Claude, sannan ka tabbatar da adadin a tushen hukuma kafin amfani.' },
        { key: 'C', text: 'Ka tambaya sau uku: idan amsar ta maimaitu, to gaskiya ce.' },
        { key: 'D', text: 'Kar ka taba amfani da Claude a batun hukuma.' },
      ],
      answer: 'B',
      explanation:
        'A kan sabon bayani na gida, Claude na iya yin kuskure da tabbaci, kuma maimaita tambaya ba ya tabbatar da komai. Amsar na iya zama farawa, ba hujja ba.',
    },
    {
      question: 'Wanne daga cikin wadannan ba za a taba manna shi a Claude ba?',
      options: [
        { key: 'A', text: 'Daftarin sako ga abokin hulda.' },
        { key: 'B', text: 'Tsarin horon da kake shirya.' },
        { key: 'C', text: 'Jerin sunayen masu amfana da lambobin waya nasu.' },
        { key: 'D', text: 'Tambaya a kan yadda za a tsara rahoto.' },
      ],
      answer: 'C',
      explanation:
        'Abin da ka rubuta wa Claude yana fita daga kungiyarka. Bayanan sirri masu gano mutum — sunaye, lambobi, bayanan lafiya — ba su da wuri a can. Ka cire sunayen tukuna, ko kar ka aika.',
    },
  ],
  reflection:
    'Ka yi tunanin aikin rubutu da ke daukar lokacinka duk mako amma ba ya bukatar kwarewa ta musamman. Wane sashe ne za a iya bai wa mataimaki, wane sashe kuma dole ya rage a hannunka?',
  glossary: [
    { term: 'Claude', definition: 'Mataimaki na tattaunawa da Anthropic ya kera, a claude.ai, a manhajar waya da ta kwamfuta.' },
    { term: 'Mataimaki na tattaunawa', definition: 'Kayan aiki da ake magana da shi da harshe mai sauki, ba da form ko code ba.' },
    { term: 'Tattaunawa (fil)', definition: 'Zance daya mai ci gaba da Claude. Ana rike mahalli daga farko zuwa karshe, kuma tunani na iya kai shi zuwa tattaunawa ta gaba.' },
    { term: 'Tunani (memory)', definition: 'Ikon Claude na tunawa daga wannan tattaunawa zuwa waccan. An kunna shi tun asali a asusun mutum, ana iya kashe shi a saituna. Yana hana sake manna mahalli, kuma yana bukatar hankali kan abin da ka bari a ciki.' },
    { term: 'Sake tambaya', definition: 'Sako da ke gyara ko fayyace bukata bayan amsa ta farko: rage tsawo, sauya salo, kara wani abu.' },
    { term: 'Hallucination', definition: 'Amsa karya da aka bayar da tabbaci. Iyaka ce ta wadannan kayan aiki, shi ya sa dole a tantance.' },
  ],
};

export const claudeLesson1ByLanguage: Record<Language, LessonContent> = {
  fr: lessonCl1Fr,
  en: lessonCl1En,
  ha: lessonCl1Ha,
};
