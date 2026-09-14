import { Language } from '../../translations';
import { LessonContent } from '../../lessonContent';

// Module "Introduction a Claude AI" - chapitre 6, evaluation finale.
// Pas de video pour ce chapitre (decision de decoupage) : les trois URLs
// restent vides et le lecteur affiche le placeholder.

const lessonCl6Fr: LessonContent = {
  id: 'cl6',
  lessonNumber: 6,
  title: 'Évaluation finale',
  objective:
    "Cette évaluation valide les acquis des cinq chapitres et donne lieu au certificat numérique. Elle vérifie moins votre mémoire que votre jugement : savoir quoi confier à Claude, comment le lui demander, et surtout quand ne pas s'y fier.",
  video: {
    fr: '',
    en: '',
    ha: '',
  },
  content: [
    {
      title: "Ce que l'évaluation vérifie",
      body:
        "Dix questions couvrent les cinq chapitres, à raison de deux par chapitre. Aucune ne porte sur une définition à réciter : toutes vous placent devant une situation et vous demandent la bonne décision.\n\nC'est volontaire. Un module comme celui-ci ne sert à rien si vous savez expliquer ce qu'est un assistant conversationnel mais que vous envoyez un chiffre non vérifié à un bailleur de fonds. Les trois compétences réellement évaluées sont : formuler une demande exploitable, faire travailler l'outil sur vos propres documents en gardant la main, et calibrer votre vérification sur l'enjeu.\n\nS'y ajoute un exercice pratique que vous faites seul : il n'y a rien à envoyer, personne ne le corrige et il ne compte pas dans votre score, mais c'est lui qui vous dira si le module a servi : elle vous demande de traiter une vraie tâche de votre travail en mobilisant les cinq chapitres à la suite.",
    },
    {
      title: 'Déroulement et suite',
      body:
        "Répondez aux dix questions sans revenir en arrière dans les chapitres. L'idée n'est pas d'obtenir un bon score, mais de savoir où vous en êtes : une question ratée vous indique précisément le chapitre à relire, et c'est une information utile.\n\nChaque réponse est accompagnée d'une explication, y compris quand vous avez juste. Lisez-les : plusieurs contiennent la nuance qui distingue une bonne pratique d'une pratique dangereuse.\n\nLe certificat numérique est émis à votre nom une fois toutes les leçons du module terminées, avec une référence de vérification qu'un employeur peut contrôler en ligne. Il n'y a pas de note minimale : votre score vous sert à vous, pas à l'application.\n\nUn mot sur la suite. Ce module vous rend autonome sur les usages courants, pas expert. Ce qui fera la différence dans six mois n'est pas ce que vous retenez aujourd'hui, c'est l'habitude que vous aurez prise : conserver vos bonnes consignes, exiger les sources, anonymiser avant d'envoyer, et relire ce que vous signez.",
    },
  ],
  example: {
    title: "Mise en situation de référence : la demande de financement",
    challenge:
      "Vous coordonnez un petit programme. Votre direction vous demande, pour vendredi, une note de trois pages appuyant une demande de financement : le contexte du programme, les résultats obtenus depuis un an, et le budget prévisionnel. Vous disposez de quatre rapports d'activité en PDF, d'un tableau de suivi rempli à la main puis photographié, et de la circulaire administrative qui encadre ce type de demande.",
    solution:
      "Le traitement complet mobilise les cinq chapitres, dans l'ordre. Vous ouvrez une conversation unique et vous y restez (chapitre 1). Vous écrivez une consigne avec les quatre ingrédients, en collant une note de financement acceptée l'an dernier comme modèle (chapitre 2). Vous déposez les quatre rapports et la photo du tableau, et vous exigez que chaque résultat cité renvoie à sa source (chapitre 3). Vous demandez l'adaptation de la circulaire en une page lisible, en conservant les échéances et les montants exacts (chapitre 4). Enfin, vous passez chaque chiffre du budget aux trois questions, vous recalculez les totaux à la main, et vous vérifiez la référence de la circulaire au journal officiel (chapitre 5).",
    impact:
      "Le point à retenir n'est pas la note obtenue, c'est la répartition du travail. L'outil a pris en charge la mise en forme, la structuration et l'extraction — ce qui vous prenait vos soirées. Vous avez gardé la sélection de ce qui compte, le jugement sur ce qui est défendable, et la vérification de ce qui engage. C'est exactement la ligne de partage que ce module cherchait à installer.",
  },
  practice: {
    title: 'Traitez une vraie demande de votre travail en mobilisant les cinq chapitres',
    instructions: [
      "Choisissez une tâche réelle et prochaine, qui suppose au moins un document et au moins une information à vérifier. Écartez tout ce qui contient des données personnelles non anonymisées.",
      "Rédigez la consigne avec les quatre ingrédients — contexte, tâche, format, exemple — puis lancez la relance « avant de rédiger, dis-moi quelles informations te manquent ».",
      "Déposez vos documents et exigez que chaque affirmation qui engage cite sa source. Faites l'extraction dont vous avez besoin sous forme de tableau.",
      "Appliquez les trois questions à chaque affirmation de la réponse, recalculez à la main les chiffres que vous allez communiquer, et notez ce que vous avez dû corriger.",
    ],
    observation:
      "Regardez la nature de vos corrections. Si elles portent sur la longueur, le ton et l'ordre, l'outil a fait son travail et vous avez fait le vôtre. Si elles portent sur un fait faux ou une information qui engage et qui avait disparu, notez précisément où cela s'est produit : c'est votre point de vigilance personnel, et il ne sera pas le même que celui de votre voisin. Conservez la consigne qui a fonctionné.",
  },
  quiz: [
    {
      question: "Vous avez expliqué en détail votre programme dans une conversation lundi. Vendredi, vous ouvrez une nouvelle conversation pour une tâche liée. Sur quoi pouvez-vous compter ?",
      options: [
        { key: 'A', text: "Sur rien : chaque conversation repart de zéro, il faut tout recoller." },
        { key: 'B', text: "Sur une mémoire qui peut reprendre le contexte, sans garantir de retenir ce qui compte pour vous : un Project reste le moyen fiable de figer un contexte." },
        { key: 'C', text: "Sur une reprise intégrale et à l'identique de la conversation de lundi." },
        { key: 'D', text: 'Sur une reprise valable sept jours, puis effacée.' },
      ],
      answer: 'B',
      explanation:
        "La mémoire entre conversations est activée par défaut sur les comptes personnels : le contexte de lundi peut donc revenir. Mais elle retient ce qu'elle juge utile, pas ce que vous auriez choisi — et elle est désactivable. Pour un contexte qui doit être là à chaque fois, c'est le Project qui fait foi.",
    },
    {
      question: "Vous êtes en déplacement, sans réseau, et vous voulez faire relire un texte. Que pouvez-vous faire ?",
      options: [
        { key: 'A', text: "Utiliser l'application mobile, qui fonctionne hors ligne." },
        { key: 'B', text: "Rien : une connexion internet est nécessaire, que vous passiez par le site, par l'application mobile ou par l'application bureau." },
        { key: 'C', text: "Utiliser l'application bureau, qui garde une version locale." },
        { key: 'D', text: 'Envoyer la demande par SMS.' },
      ],
      answer: 'B',
      explanation:
        "Site, application mobile et application bureau mènent au même service et exigent tous une connexion. Anticiper ce point fait partie de l'organisation du travail sur le terrain.",
    },
    {
      question: "« Rédige un compte rendu de la réunion d'hier. » Quel ingrédient manque le plus cruellement ?",
      options: [
        { key: 'A', text: "Le contexte : il ne sait pas ce qui s'est dit à cette réunion." },
        { key: 'B', text: 'Le format : il faut préciser la longueur.' },
        { key: 'C', text: "L'exemple : il faut coller un compte rendu précédent." },
        { key: 'D', text: 'La tâche : le verbe est trop vague.' },
      ],
      answer: 'A',
      explanation:
        "Format et exemple amélioreraient le résultat, mais ici l'obstacle est premier : la matière est absente. Sans vos notes, il ne peut qu'inventer une réunion plausible. Le contexte est l'ingrédient le plus souvent oublié.",
    },
    {
      question: "Quelle relance rapporte le plus, et à quel moment l'employer ?",
      options: [
        { key: 'A', text: '« Es-tu sûr de toi ? », après la réponse.' },
        { key: 'B', text: '« Avant de rédiger, dis-moi quelles informations te manquent », avant la rédaction.' },
        { key: 'C', text: '« Fais mieux », après la réponse.' },
        { key: 'D', text: '« Sois plus professionnel », avant la rédaction.' },
      ],
      answer: 'B',
      explanation:
        "Elle renverse l'échange et fait apparaître les trous de votre consigne avant qu'ils ne produisent un texte à refaire. « Es-tu sûr ? » ne vaut rien, et « fais mieux » ou « sois plus professionnel » ne disent pas ce qu'il faut changer.",
    },
    {
      question: "Vous avez fait résumer un rapport de quarante pages. Pourquoi exiger que chaque point cite sa phrase d'origine ?",
      options: [
        { key: 'A', text: 'Pour rendre le résumé plus long et plus complet.' },
        { key: 'B', text: "Pour transformer la vérification : contrôler cinq citations au lieu de relire quarante pages." },
        { key: 'C', text: "Parce que la citation empêche toute erreur de lecture." },
        { key: 'D', text: 'Pour respecter le droit d’auteur du rapport.' },
      ],
      answer: 'B',
      explanation:
        "La citation ne supprime pas l'erreur, elle la rend contrôlable en quelques minutes. C'est la différence entre une vérification que vous ferez réellement et une que vous remettrez à plus tard.",
    },
    {
      question: "Vous devez faire traiter un document qui existe à la fois en PDF et en version papier. Que déposez-vous ?",
      options: [
        { key: 'A', text: 'La photo du papier, plus fidèle à l’original.' },
        { key: 'B', text: "Le PDF : la lecture d'image dépend de la netteté et du cadrage, et son échec n'est pas toujours signalé." },
        { key: 'C', text: 'Les deux, pour que la lecture soit recoupée.' },
        { key: 'D', text: "Peu importe : le résultat est identique." },
      ],
      answer: 'B',
      explanation:
        "La photo est la solution pour ce qui n'existe que sur papier, pas un équivalent. Quand Claude n'arrive à lire qu'une partie de l'image, il comble les passages manquants au lieu de vous signaler qu'il n'a pas pu les lire.",
    },
    {
      question: "Un collègue vous demande de produire un avis technique dans un domaine que vous ne connaissez pas. Que dit la grille du chapitre 4 ?",
      options: [
        { key: 'A', text: "C'est le cas idéal : la tâche prend du temps, donc le gain est maximal." },
        { key: 'B', text: "Le gain est illusoire : vous ne pourrez pas juger le résultat, donc vous signeriez un texte indéfendable." },
        { key: 'C', text: 'Il faut simplement demander trois versions et choisir la meilleure.' },
        { key: 'D', text: "Il faut le faire, mais en prévenant que le texte vient d'une IA." },
      ],
      answer: 'B',
      explanation:
        "Les deux critères doivent être réunis : que la tâche prenne du temps sans mobiliser votre expertise, et que vous soyez capable de juger le résultat. Ici le second manque — ce n'est pas du temps gagné, c'est du risque acheté.",
    },
    {
      question: "Vous simplifiez une circulaire administrative pour des parents d'élèves. Qu'est-ce qui doit impérativement figurer dans la consigne ?",
      options: [
        { key: 'A', text: 'Le nombre de paragraphes souhaité.' },
        { key: 'B', text: "L'exigence de conserver les dates, montants et obligations exacts." },
        { key: 'C', text: 'Une demande de ton chaleureux.' },
        { key: 'D', text: 'La mention du public visé, qui suffit.' },
      ],
      answer: 'B',
      explanation:
        "C'est en simplifiant qu'on perd les informations qui engagent. Une échéance ou un montant qui disparaît dans la reformulation transforme un message clair en message faux.",
    },
    {
      question: "Sur laquelle de ces demandes le risque d'erreur est-il le plus élevé ?",
      options: [
        { key: 'A', text: 'Reformuler en cinq lignes un paragraphe que vous fournissez.' },
        { key: 'B', text: 'Proposer un plan pour un atelier de formation.' },
        { key: 'C', text: "Donner le barème en vigueur d'une taxe locale entrée en application le mois dernier." },
        { key: 'D', text: 'Traduire en anglais un mail que vous avez écrit.' },
      ],
      answer: 'C',
      explanation:
        "Précis, récent et local : les trois facteurs de risque sont réunis. Les trois autres demandes portent sur une matière que vous fournissez ou sur une forme que vous jugez vous-même.",
    },
    {
      question: "Vous voulez faire analyser un cas concernant « le seul agent agricole de tel village ». Est-ce acceptable ?",
      options: [
        { key: 'A', text: "Oui : aucun nom n'apparaît." },
        { key: 'B', text: "Non : une fonction unique associée à un lieu identifie la personne. Il faut neutraliser le rôle et retirer ce qui localise." },
        { key: 'C', text: "Oui, à condition de le déposer dans un Project." },
        { key: 'D', text: "Oui, si la personne ne l'apprend jamais." },
      ],
      answer: 'B',
      explanation:
        "C'est une donnée identifiante indirecte : le recoupement suffit. L'anonymisation prend quelques secondes et donne exactement le même travail. Un Project ne protège rien — on y dépose une fois, puis on oublie ce qui s'y trouve.",
    },
  ],
  reflection:
    "Une semaine après cette évaluation, quelle habitude aurez-vous réellement adoptée ? Nommez-en une seule, précise et vérifiable — conserver vos consignes qui fonctionnent, exiger les sources, anonymiser avant d'envoyer, ou recalculer les chiffres que vous communiquez — et décidez sur quelle tâche vous l'appliquerez dès lundi.",
  glossary: [
    {
      term: 'Les quatre ingrédients',
      definition: "Contexte, tâche, format, exemple. Le contexte est le plus souvent oublié, l'exemple le plus efficace.",
    },
    {
      term: 'Citation de source',
      definition: "Exiger que chaque affirmation renvoie à la phrase du document d'origine. Rend la vérification faisable en quelques minutes.",
    },
    {
      term: 'Les trois questions',
      definition: "Est-ce vérifiable ? Qu'est-ce qui casse si c'est faux ? Ai-je une source indépendante ? Elles calibrent l'effort de vérification sur l'enjeu.",
    },
    {
      term: 'La grille des deux critères',
      definition: "Confier une tâche seulement si elle prend du temps sans mobiliser votre expertise et si vous êtes capable de juger le résultat.",
    },
    {
      term: 'Texte assumé',
      definition: "Texte que vous pouvez défendre ligne à ligne. Un document non relu n'est pas votre document.",
    },
  ],
};

const lessonCl6En: LessonContent = {
  ...lessonCl6Fr,
  title: 'Final assessment',
  objective:
    'This assessment validates the five chapters and issues the digital certificate. It tests your judgement more than your memory: knowing what to hand over to Claude, how to ask for it, and above all when not to rely on it.',
  content: [
    {
      title: 'What the assessment checks',
      body:
        "Ten questions cover the five chapters, two per chapter. None asks you to recite a definition: each puts you in a situation and asks for the right decision.\n\nThat is deliberate. A module like this is worthless if you can explain what a conversational assistant is but send an unverified figure to a donor. The three skills actually assessed are: writing a usable request, working on your own documents while staying in control, and calibrating verification to the stakes.\n\nA situational exercise comes on top, for you to produce. It is not automatically marked, but it is the one that will tell you whether the module worked: it asks you to handle a real work task using all five chapters in sequence.",
    },
    {
      title: 'How it runs, and what comes next',
      body:
        "Answer the ten questions without going back into the chapters. The point is not a good score but knowing where you stand: a missed question points precisely at the chapter to reread.\n\nEvery answer comes with an explanation, including when you were right. Read them: several carry the nuance that separates good practice from dangerous practice.\n\nOnce every lesson in the module is completed, the digital certificate is issued in your name with a verification reference an employer can check online. There is no minimum score: your score is for you, not for the application.\n\nA word on what follows. This module makes you self-sufficient on everyday uses, not an expert. What will make the difference in six months is not what you remember today but the habit you will have formed: keeping your good instructions, demanding sources, anonymizing before sending, and rereading what you sign.",
    },
  ],
  example: {
    title: 'Reference situation: the funding request',
    challenge:
      'You coordinate a small programme. Your management wants, by Friday, a three-page note supporting a funding request: programme context, results over the past year, and a draft budget. You have four activity reports in PDF, a hand-filled tracking table you photographed, and the administrative circular governing this type of request.',
    solution:
      'The full treatment uses all five chapters in order. You open one conversation and stay in it (chapter 1). You write an instruction with the four ingredients, pasting last year\'s accepted funding note as a model (chapter 2). You upload the four reports and the photo of the table, requiring every result cited to point at its source (chapter 3). You ask for the circular to be adapted into one readable page, keeping exact deadlines and amounts (chapter 4). Finally you run every budget figure through the three questions, recompute the totals by hand, and check the circular reference against the official gazette (chapter 5).',
    impact:
      'The takeaway is not the note itself but how the work divided. The tool handled formatting, structuring and extraction — what used to cost you your evenings. You kept the selection of what matters, the judgement of what is defensible, and the verification of what binds. That is exactly the dividing line this module set out to install.',
  },
  practice: {
    title: 'Handle a real request from your work using all five chapters',
    instructions: [
      'Pick a real, upcoming task involving at least one document and at least one fact to verify. Exclude anything containing personal data that is not anonymized.',
      'Write the instruction with the four ingredients — context, task, format, example — then add "before you write, tell me what information you are missing".',
      'Upload your documents and require every load-bearing claim to cite its source. Get the extraction you need as a table.',
      'Run the three questions on every claim in the answer, recompute by hand the figures you will communicate, and note what you had to correct.',
    ],
    observation:
      'Look at the nature of your corrections. If they concern length, tone and order, the tool did its job and you did yours. If they concern a wrong fact or binding information that vanished, note exactly where it happened: that is your personal watchpoint, and it will not be the same as your neighbour\'s. Keep the instruction that worked.',
  },
  quiz: [
    {
      question: 'You explained your programme in detail on Monday. On Friday you open a new conversation for a related task. What can you rely on?',
      options: [
        { key: 'A', text: 'Nothing: every conversation starts from zero, you must re-paste everything.' },
        { key: 'B', text: 'A memory that may carry the context over, without guaranteeing it keeps what matters to you: a Project is still the reliable way to fix a context.' },
        { key: 'C', text: "A full, identical replay of Monday's conversation." },
        { key: 'D', text: 'A carry-over valid for seven days, then erased.' },
      ],
      answer: 'B',
      explanation:
        'Memory across conversations is on by default on personal accounts, so Monday\'s context can come back. But it keeps what it judges useful, not what you would have chosen — and it can be switched off. For context that must be there every time, the Project is what counts.',
    },
    {
      question: 'You are travelling with no network and want a text reviewed. What can you do?',
      options: [
        { key: 'A', text: 'Use the mobile app, which works offline.' },
        { key: 'B', text: 'Nothing: an internet connection is required, whichever entry point you use.' },
        { key: 'C', text: 'Use the desktop app, which keeps a local copy.' },
        { key: 'D', text: 'Send the request by SMS.' },
      ],
      answer: 'B',
      explanation:
        'Website, mobile app and desktop app reach the same service and all require a connection. Anticipating this is part of organizing field work.',
    },
    {
      question: '"Write minutes for yesterday\'s meeting." Which ingredient is most critically missing?',
      options: [
        { key: 'A', text: 'Context: it does not know what was said in that meeting.' },
        { key: 'B', text: 'Format: the length should be specified.' },
        { key: 'C', text: 'Example: previous minutes should be pasted.' },
        { key: 'D', text: 'Task: the verb is too vague.' },
      ],
      answer: 'A',
      explanation:
        'Format and example would improve the result, but the obstacle here comes first: the raw material is absent. Without your notes it can only invent a plausible meeting.',
    },
    {
      question: 'Which follow-up pays off most, and when should it be used?',
      options: [
        { key: 'A', text: '"Are you sure?", after the answer.' },
        { key: 'B', text: '"Before you write, tell me what information you are missing", before drafting.' },
        { key: 'C', text: '"Do better", after the answer.' },
        { key: 'D', text: '"Be more professional", before drafting.' },
      ],
      answer: 'B',
      explanation:
        'It flips the exchange and exposes the holes in your instruction before they produce a text to redo. "Are you sure?" is worth nothing, and the other two do not say what to change.',
    },
    {
      question: 'You had a forty-page report summarized. Why require each point to quote its source sentence?',
      options: [
        { key: 'A', text: 'To make the summary longer and more complete.' },
        { key: 'B', text: 'To transform verification: checking five quotations instead of rereading forty pages.' },
        { key: 'C', text: 'Because quoting prevents any misreading.' },
        { key: 'D', text: "To respect the report's copyright." },
      ],
      answer: 'B',
      explanation:
        'Quoting does not remove the error, it makes it checkable in minutes. That is the difference between a check you will actually do and one you will postpone.',
    },
    {
      question: 'A document exists both as a PDF and on paper. Which do you upload?',
      options: [
        { key: 'A', text: 'The photo of the paper, closer to the original.' },
        { key: 'B', text: 'The PDF: image reading depends on sharpness and framing, and its failure is not always reported.' },
        { key: 'C', text: 'Both, so the reading is cross-checked.' },
        { key: 'D', text: 'It makes no difference.' },
      ],
      answer: 'B',
      explanation:
        'The photo is for what exists only on paper, not an equivalent. When image reading partly fails, gaps get filled instead of flagged.',
    },
    {
      question: 'A colleague asks you for a technical opinion in a field you do not know. What does chapter 4\'s grid say?',
      options: [
        { key: 'A', text: 'Ideal case: the task takes time, so the gain is maximal.' },
        { key: 'B', text: 'The gain is illusory: you cannot judge the result, so you would sign an indefensible text.' },
        { key: 'C', text: 'Just ask for three versions and pick the best.' },
        { key: 'D', text: 'Do it, but say the text came from an AI.' },
      ],
      answer: 'B',
      explanation:
        'Both criteria must hold: the task takes time without using your expertise, and you can judge the result. The second is missing — that is not time saved, it is risk bought.',
    },
    {
      question: 'You are simplifying an administrative circular for parents. What must the instruction include?',
      options: [
        { key: 'A', text: 'The number of paragraphs wanted.' },
        { key: 'B', text: 'The requirement to keep exact dates, amounts and obligations.' },
        { key: 'C', text: 'A request for a warm tone.' },
        { key: 'D', text: 'The target audience, which is enough on its own.' },
      ],
      answer: 'B',
      explanation:
        'Simplifying is precisely when binding information gets lost. A deadline or amount that disappears turns a clear message into a false one.',
    },
    {
      question: 'On which request is the risk of error highest?',
      options: [
        { key: 'A', text: 'Rewriting a paragraph you supply into five lines.' },
        { key: 'B', text: 'Proposing an outline for a training workshop.' },
        { key: 'C', text: 'Giving the current rate of a local tax introduced last month.' },
        { key: 'D', text: 'Translating into English an email you wrote.' },
      ],
      answer: 'C',
      explanation:
        'Precise, recent and local: all three risk factors at once. The other three rest on material you supply or on a form you judge yourself.',
    },
    {
      question: 'You want a case analysed about "the only agricultural officer in such-and-such village". Is that acceptable?',
      options: [
        { key: 'A', text: 'Yes: no name appears.' },
        { key: 'B', text: 'No: a unique role tied to a place identifies the person. Neutralize the role and remove what locates.' },
        { key: 'C', text: 'Yes, provided it goes into a Project.' },
        { key: 'D', text: 'Yes, if the person never finds out.' },
      ],
      answer: 'B',
      explanation:
        'This is an indirect identifier: cross-referencing is enough. Anonymizing takes seconds and gives exactly the same work. A Project protects nothing — you upload once, then forget.',
    },
  ],
  reflection:
    'One week after this assessment, which habit will you actually have adopted? Name one, precise and checkable — keeping your instructions that work, demanding sources, anonymizing before sending, or recomputing the figures you communicate — and decide which task you will apply it to on Monday.',
  glossary: [
    { term: 'The four ingredients', definition: 'Context, task, format, example. Context is the most often skipped, example the most effective.' },
    { term: 'Source quotation', definition: 'Requiring every claim to point at the sentence in the original document. Makes verification feasible in minutes.' },
    { term: 'The three questions', definition: 'Is it verifiable? What breaks if it is wrong? Do I have an independent source? They calibrate effort to stakes.' },
    { term: 'The two-criteria grid', definition: 'Hand over a task only if it takes time without using your expertise and you can judge the result.' },
    { term: 'Owned text', definition: 'A text you can defend line by line. A document you have not read is not your document.' },
  ],
};

const lessonCl6Ha: LessonContent = {
  ...lessonCl6Fr,
  title: 'Jarabawar karshe',
  objective:
    'Wannan jarabawa tana tabbatar da darussa biyar kuma tana ba da takardar shaida ta dijital. Tana auna hukuncinka fiye da tunaninka: sanin abin da za ka mika wa Claude, yadda za ka nema, kuma sama da duka, lokacin da bai kamata ka dogara ba.',
  content: [
    {
      title: 'Abin da jarabawar ke auna',
      body:
        'Tambayoyi goma sun kunshi darussa biyar, biyu ga kowane darasi. Babu wanda ke neman ka maimaita ma’ana: kowace tana sanya ka a wani yanayi tana neman shawara madaidaiciya.\n\nDa gangan ne. Module irin wannan ba shi da amfani idan za ka iya bayyana menene mataimaki na tattaunawa amma ka aika lamba mara tabbatarwa ga mai bayar da tallafi. Kwarewa uku da ake auna su ne: rubuta bukata mai amfani, aiki da takardunka tare da rike ragama, da daidaita tantancewa da girman abin.\n\nAkwai kuma aikin yanayi da za ka samar da kanka. Ba a ba shi maki kai tsaye ba, amma shi zai gaya maka ko module ya yi amfani: yana neman ka gudanar da aiki na gaske da darussa biyar bi da bi.',
    },
    {
      title: 'Yadda ake gudanarwa da abin da ke biyowa',
      body:
        'Ka amsa tambayoyi goma ba tare da komawa cikin darussa ba. Manufar ba samun maki mai kyau ba ce, sanin inda kake ne: tambayar da ka rasa tana nuna maka darasin da ya kamata ka sake karantawa.\n\nKowace amsa tana zuwa da bayani, har ma idan ka yi daidai. Ka karanta su: da yawa suna dauke da bambancin da ke raba kyakkyawan aiki da aiki mai hadari.\n\nDa zarar an kammala dukkan darussan module, ana ba da takardar shaida ta dijital da sunanka, da lambar tantancewa da ma’aikaci zai iya duba a yanar gizo. Babu mafi karancin maki: makinka na kanka ne, ba na manhajar ba.\n\nGame da abin da ke biyowa. Wannan module yana sa ka iya tsayawa da kanka a amfani na yau da kullum, ba masani ba. Abin da zai bambanta bayan wata shida ba abin da ka tuna yau ba ne, al’adar da ka dauka ce: ajiye umarnanka masu kyau, neman tushe, cire sunaye kafin aikawa, da sake karanta abin da ka sa hannu a kai.',
    },
  ],
  example: {
    title: 'Yanayin tunani: neman tallafi',
    challenge:
      'Kana tafiyar da karamin shiri. Shugabanninka na neman, kafin Juma’a, takarda ta shafi uku don goyon bayan neman tallafi: mahallin shirin, sakamakon shekara daya, da kasafin kudi. Kana da rahotanni hudu na PDF, tebur na bibiya da aka cika da hannu aka dauki hotonsa, da wasikar hukuma da ke tafiyar da irin wannan neman.',
    solution:
      'Cikakken aiki yana amfani da darussa biyar bi da bi. Ka bude tattaunawa daya ka zauna a ciki (darasi na 1). Ka rubuta umarni da sinadarai hudu, ka manna takardar tallafi da aka amince da ita bara a matsayin abin koyi (darasi na 2). Ka aika rahotanni hudu da hoton tebur, ka nemi kowane sakamako ya kawo tushensa (darasi na 3). Ka nemi a daidaita wasikar zuwa shafi daya mai karantuwa, tare da rike ainihin wa’adi da adadi (darasi na 4). A karshe ka gwada kowace lambar kasafi da tambayoyi uku, ka sake lissafa jimloli da hannu, ka tabbatar da nassin wasikar a jaridar hukuma (darasi na 5).',
    impact:
      'Abin darasi ba takardar ba ce, rabon aikin ne. Kayan aikin ya dauki tsari, shiryawa da ciro bayani — abin da ke kwace maka daren. Ka rike zaben abin da ke da muhimmanci, hukunci kan abin da za a iya karewa, da tantance abin da ke daure. Wannan shi ne ainihin layin rabuwa da module ya nema ya kafa.',
  },
  practice: {
    title: 'Ka gudanar da bukata ta gaske ta aikinka da darussa biyar',
    instructions: [
      'Zabi aiki na gaske mai zuwa, wanda ya kunshi akalla takarda daya da akalla bayani daya na tabbatarwa. Ka cire duk abin da ke da bayanan sirri da ba a cire sunaye ba.',
      'Ka rubuta umarni da sinadarai hudu — mahalli, aiki, tsari, misali — sannan ka kara “kafin ka rubuta, ka gaya mini wane bayani ya rasa”.',
      'Ka aika takardunka ka nemi kowace magana mai muhimmanci ta kawo tushenta. Ka yi ciro bayanin da kake bukata a siffar tebur.',
      'Ka yi amfani da tambayoyi uku kan kowace magana da ake iya tabbatarwa, ka sake lissafa da hannu lambobin da za ka sanar, ka lura abin da ka gyara.',
    ],
    observation:
      'Ka duba nau’in gyare-gyarenka. Idan sun shafi tsawo, salo da tsari, kayan aikin ya yi aikinsa kuma ka yi naka. Idan sun shafi bayanin karya ko bayanin da ke daure da ya bace, ka lura inda hakan ya faru: wannan shi ne wurin taka-tsantsanka na kanka. Ka ajiye umarnin da ya yi aiki.',
  },
  quiz: [
    {
      question: 'Ka bayyana shirinka dalla-dalla a tattaunawa ranar Litinin. Ranar Juma’a ka bude sabuwar tattaunawa kan aiki mai alaka. A kan me za ka dogara?',
      options: [
        { key: 'A', text: 'A kan komai: kowace tattaunawa tana farawa daga sifili, sai ka sake manna komai.' },
        { key: 'B', text: 'A kan tunani da zai iya dawo da mahalli, ba tare da tabbatar da rike abin da ke da muhimmanci a gare ka ba: Project shi ne hanya abin dogaro ta kafa mahalli.' },
        { key: 'C', text: 'A kan maimaita tattaunawar Litinin gaba daya kamar yadda take.' },
        { key: 'D', text: 'A kan riko na kwana bakwai sannan a share.' },
      ],
      answer: 'B',
      explanation:
        'An kunna tunani tsakanin tattaunawa tun asali a asusun mutum, don haka mahallin Litinin na iya dawowa. Amma yana rike abin da ya ga ya dace, ba abin da kai za ka zaba ba — kuma ana iya kashe shi. Ga mahallin da dole ya kasance kowane lokaci, Project shi ne abin dogaro.',
    },
    {
      question: 'Kana tafiya babu hanyar sadarwa kana son a duba rubutunka. Me za ka iya yi?',
      options: [
        { key: 'A', text: 'Yi amfani da manhajar waya, tana aiki ba tare da intanet ba.' },
        { key: 'B', text: 'Babu komai: ana bukatar intanet, ta kowace kofa.' },
        { key: 'C', text: 'Yi amfani da manhajar kwamfuta, tana rike da kwafi na gida.' },
        { key: 'D', text: 'Aika bukatar ta SMS.' },
      ],
      answer: 'B',
      explanation:
        'Shafi, manhajar waya da manhajar kwamfuta suna kaiwa ga sabis daya kuma duk suna bukatar intanet. Yin tsammanin wannan wani bangare ne na tsara aikin fili.',
    },
    {
      question: '“Rubuta takaitaccen rahoton taron jiya.” Wane sinadari ne ya fi rasawa?',
      options: [
        { key: 'A', text: 'Mahalli: bai san abin da aka fada a taron ba.' },
        { key: 'B', text: 'Tsari: sai a fadi tsawo.' },
        { key: 'C', text: 'Misali: sai a manna rahoton da ya gabata.' },
        { key: 'D', text: 'Aiki: kalmar aikin ta yi rashin tabbas.' },
      ],
      answer: 'A',
      explanation:
        'Tsari da misali za su inganta sakamako, amma cikas na farko shi ne: babu kayan aiki. Ba tare da rubutunka ba, sai ya kirkiro taro mai kyan gani.',
    },
    {
      question: 'Wace sake tambaya ce ta fi riba, kuma yaushe za a yi amfani da ita?',
      options: [
        { key: 'A', text: '“Ka tabbata?”, bayan amsar.' },
        { key: 'B', text: '“Kafin ka rubuta, ka gaya mini wane bayani ya rasa”, kafin rubutu.' },
        { key: 'C', text: '“Ka yi mafi kyau”, bayan amsar.' },
        { key: 'D', text: '“Ka zama mai sana’a”, kafin rubutu.' },
      ],
      answer: 'B',
      explanation:
        'Tana juya musaya tana fitar da gurbin umarninka kafin su samar da rubutun da za a sake yi. “Ka tabbata?” ba ta da daraja, sauran biyu ba sa fadin abin da za a sauya.',
    },
    {
      question: 'Ka sa a takaita rahoto na shafuka arba’in. Me ya sa za ka nemi kowane maki ya kawo jimlarsa ta asali?',
      options: [
        { key: 'A', text: 'Don takaitawar ta yi tsawo kuma ta cika.' },
        { key: 'B', text: 'Don sauya tantancewa: duba jimloli biyar maimakon sake karanta shafuka arba’in.' },
        { key: 'C', text: 'Domin kawo tushe yana hana kuskuren karatu.' },
        { key: 'D', text: 'Don girmama hakkin mallakar rahoton.' },
      ],
      answer: 'B',
      explanation:
        'Kawo tushe ba ya cire kuskure, yana sa a iya duba shi cikin mintuna. Wannan shi ne bambanci tsakanin tantancewar da za ka yi da wadda za ka jinkirta.',
    },
    {
      question: 'Takarda tana nan a matsayin PDF da kuma a takarda ta hannu. Wace za ka aika?',
      options: [
        { key: 'A', text: 'Hoton takardar, ya fi kusa da asali.' },
        { key: 'B', text: 'PDF: karatun hoto ya dogara kan bayyanuwa da tsari, kuma ba koyaushe ake sanar da gazawarsa ba.' },
        { key: 'C', text: 'Duka biyu, don a kwatanta karatun.' },
        { key: 'D', text: 'Babu bambanci.' },
      ],
      answer: 'B',
      explanation:
        'Hoto na abin da ke kan takarda kadai ne, ba daidai da PDF ba. Idan karatun hoto ya gaza a wani sashe, ana cike gurbin maimakon sanarwa.',
    },
    {
      question: 'Abokin aiki ya nemi ka ba da ra’ayi na fasaha a fannin da ba ka sani ba. Me mizanin darasi na 4 ke cewa?',
      options: [
        { key: 'A', text: 'Yanayi ne mafi kyau: aikin yana daukar lokaci, don haka riba ta fi girma.' },
        { key: 'B', text: 'Ribar rudi ce: ba za ka iya hukunta sakamakon ba, don haka za ka sa hannu kan rubutun da ba za ka kare ba.' },
        { key: 'C', text: 'Sai kawai ka nemi sigogi uku ka zabi mafi kyau.' },
        { key: 'D', text: 'Ka yi shi, amma ka sanar da cewa rubutun daga AI ya fito.' },
      ],
      answer: 'B',
      explanation:
        'Mizani biyu sai sun hadu: aikin ya dauki lokaci ba tare da kwarewarka ba, kuma kana iya hukunta sakamakon. Na biyu ya rasa — wannan ba lokaci ne aka tanada ba, hadari ne aka saya.',
    },
    {
      question: 'Kana saukaka wasikar hukuma ga iyayen dalibai. Me dole ya kasance a cikin umarnin?',
      options: [
        { key: 'A', text: 'Adadin sakin layi da ake so.' },
        { key: 'B', text: 'Bukatar rike ainihin kwanan wata, adadi da wajibai.' },
        { key: 'C', text: 'Neman salo mai dumi.' },
        { key: 'D', text: 'Ambaton masu sauraro, wanda ya isa.' },
      ],
      answer: 'B',
      explanation:
        'A lokacin saukakawa ne ake rasa bayanan da ke daure. Wa’adi ko adadin da ya bace yana mai da sako bayyananne ya zama na karya.',
    },
    {
      question: 'A kan wace bukata hadarin kuskure ya fi girma?',
      options: [
        { key: 'A', text: 'Sake rubuta sakin layi da ka bayar zuwa layi biyar.' },
        { key: 'B', text: 'Bayar da tsarin bitar horo.' },
        { key: 'C', text: 'Bayar da jadawalin harajin gida da aka fara amfani da shi wata da ya gabata.' },
        { key: 'D', text: 'Fassara zuwa turanci sakon da ka rubuta.' },
      ],
      answer: 'C',
      explanation:
        'Madaidaici, sabo kuma na gida: abubuwa uku na hadari sun hadu. Sauran ukun sun dogara kan kayan da ka bayar ko siffar da kai kanka ke hukuntawa.',
    },
    {
      question: 'Kana son a yi nazari kan “ma’aikacin noma daya tilo na kauyen kaza”. Ya halatta?',
      options: [
        { key: 'A', text: 'Eh: babu suna da ya bayyana.' },
        { key: 'B', text: 'A’a: mukami daya tilo hade da wuri yana gano mutumin. Sai a sauya mukamin a cire abin da ke nuna wuri.' },
        { key: 'C', text: 'Eh, muddin an sanya shi a cikin Project.' },
        { key: 'D', text: 'Eh, idan mutumin bai taba sani ba.' },
      ],
      answer: 'B',
      explanation:
        'Shaida ce ta kaikaice: hadewa ya isa. Cire sunaye yana daukar dakiku kuma yana bayar da aiki iri daya. Project ba ya kare komai — kana aika sau daya sannan ka manta.',
    },
  ],
  reflection:
    'Bayan mako daya da wannan jarabawa, wace al’ada ce za ka dauka da gaske? Ka ambaci daya kadai, madaidaiciya kuma abin dubawa — ajiye umarnanka masu aiki, neman tushe, cire sunaye kafin aikawa, ko sake lissafa lambobin da kake sanarwa — ka yanke shawarar wane aiki za ka fara da shi ranar Litinin.',
  glossary: [
    { term: 'Sinadarai hudu', definition: 'Mahalli, aiki, tsari, misali. Mahalli shi aka fi mantawa, misali shi ya fi tasiri.' },
    { term: 'Kawo tushe', definition: 'Neman kowace magana ta kawo jimlar takardar asali. Yana sa tantancewa ta yiwu cikin mintuna.' },
    { term: 'Tambayoyi uku', definition: 'Ana iya tabbatarwa? Me zai lalace idan karya ce? Ina da tushe mai zaman kansa? Suna daidaita kokari da girman abin.' },
    { term: 'Mizanin abubuwa biyu', definition: 'Ka mika aiki kadai idan yana daukar lokaci ba tare da kwarewarka ba kuma kana iya hukunta sakamakon.' },
    { term: 'Rubutun da aka dauki alhakinsa', definition: 'Rubutun da za ka iya karewa layi bayan layi. Takardar da ba ka karanta ba ba takardarka ba ce.' },
  ],
};

export const claudeLesson6ByLanguage: Record<Language, LessonContent> = {
  fr: lessonCl6Fr,
  en: lessonCl6En,
  ha: lessonCl6Ha,
};
