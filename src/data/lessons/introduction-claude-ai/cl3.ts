import { Language } from '../../translations';
import { LessonContent } from '../../lessonContent';

// Module "Introduction a Claude AI" - chapitre 3.
// Video FR publiee ; EN et HA restent vides (placeholder affiche par le lecteur).
// Le lecteur rend les paragraphes en texte brut : aucun markdown dans les body.

const lessonCl3Fr: LessonContent = {
  id: 'cl3',
  lessonNumber: 3,
  title: 'Travailler avec ses propres documents',
  objective:
    "À la fin de ce chapitre, vous saurez déposer un document dans Claude — un PDF, une photo de page papier, un tableau — en obtenir un résumé commandé, en extraire une information précise sous forme exploitable, et vérifier ce qui en sort. Vous saurez aussi ce qu'un document ne doit jamais contenir avant d'y être déposé.",
  video: {
    fr: 'https://www.youtube.com/embed/0X9gOS2048Q',
    en: '',
    ha: '',
  },
  content: [
    {
      title: 'Déposer un document change la nature de la conversation',
      body:
        "Jusqu'ici, vous avez tapé vos demandes. À partir de maintenant, vous fournissez la matière. C'est le moment où l'outil cesse d'être une curiosité pour devenir utile sur vos vrais dossiers.\n\nCe que vous pouvez déposer : un PDF, une image, un tableau, ou simplement du texte collé dans la conversation. L'image compte plus qu'il n'y paraît. Le document qui vous encombre est souvent du papier — un rapport imprimé, une note de service, une fiche remplie à la main, un tableau griffonné. Vous le photographiez avec votre téléphone, vous l'envoyez, et il devient lisible.\n\nUne limite qu'il faut connaître avant de s'y fier : la qualité de la lecture dépend entièrement de la qualité de l'image. Document posé à plat, lumière uniforme sans ombre portée, texte net, cadrage complet. Une photo floue, prise de biais ou coupée donne une lecture fausse — et Claude ne vous préviendra pas toujours qu'il n'a pas réussi à lire. Il complétera : là où il n'a pas pu lire, il devine un texte plausible et vous le donne comme le reste.\n\nD'où une règle simple : quand le PDF existe, on dépose le PDF. La photo est une solution pour ce qui n'existe que sur papier, pas un raccourci.",
    },
    {
      title: 'Quatre usages qui couvrent presque tous vos besoins',
      body:
        "Résumer. C'est le premier réflexe, et le plus mal utilisé. « Résume ce rapport » donne un résumé passe-partout. Le chapitre 2 s'applique intégralement ici : dites pour qui, en combien de points, et sous quel angle. « Résume ce rapport en cinq points pour un comité de direction qui doit décider s'il prolonge le programme. » Ce n'est pas le même texte.\n\nExtraire. C'est l'usage le plus sous-estimé, et souvent le plus rentable. « Sors-moi la liste des localités citées, avec le nombre de bénéficiaires pour chacune, sous forme de tableau à deux colonnes. » Vous passez d'un document que personne ne dépouille à une donnée que vous pouvez trier, additionner et comparer.\n\nTraduire. Un document entier, ou mieux : une adaptation. Un rapport technique en français devient une note d'une page en anglais pour un bailleur. La traduction se relit toujours, en priorité sur les noms propres et les chiffres.\n\nInterroger. Le moins connu des quatre, et celui qui change le plus de choses. Au lieu de demander un résumé, posez des questions au document : « Ce contrat prévoit-il une clause de résiliation ? Cite le passage exact. » Ces quatre derniers mots sont l'essentiel — nous y revenons dans la section suivante.",
    },
    {
      title: "Vérifier ce qui sort d'un document",
      body:
        "Le risque du chapitre 1 ne disparaît pas, il change de forme. Sur une question générale, Claude peut inventer une réponse. Sur un document que vous lui avez fourni, il se trompe autrement, et plus discrètement : il attribue un chiffre à la mauvaise ligne, confond deux colonnes d'un tableau, lit 2019 là où la photo dit 2018, ou résume une réserve prudente en affirmation nette.\n\nCes erreurs sont plus dangereuses que les précédentes, parce que le document est là, sous vos yeux, et que sa présence donne un sentiment de sécurité. Vous croyez lire le document ; vous lisez ce que l'outil en a compris.\n\nLa parade tient en une habitude, et elle change tout : exigez la source. « Pour chaque point, cite la phrase du document d'origine. » Votre vérification cesse d'être « relire quarante pages » pour devenir « contrôler cinq citations ». C'est la différence entre une vérification que vous ferez et une vérification que vous ne ferez pas.\n\nDeux règles qui ne se négocient pas. Les chiffres se recalculent à la main — un total, une somme, un pourcentage. Et vous ne déposez jamais un document que vous n'avez pas le droit de faire sortir de votre organisation : un fichier de bénéficiaires nominatif, un dossier RH, un dossier médical, un contrat sous clause de confidentialité. Un document se dépose en entier ; vous ne pouvez pas en retenir la moitié.",
    },
    {
      title: 'Les Projects : arrêter de recoller le même contexte',
      body:
        "La mémoire vue au chapitre 1 reprend ce qu'elle juge utile, d'une conversation à l'autre. C'est pratique, mais ce n'est pas un engagement : elle peut retenir un détail et laisser de côté ce qui compte pour vous, et vous ne décidez pas à sa place. Si vous travaillez chaque semaine sur le même programme, vous finissez quand même par réexpliquer qui vous êtes, ce qu'est ce programme, et comment vous voulez qu'on vous réponde.\n\nUn Project est un dossier qui garde ce contexte une fois pour toutes. Vous y déposez des documents de référence et vous y écrivez des instructions permanentes, qui s'appliqueront à toutes les conversations ouvertes depuis ce dossier.\n\nCe qu'on y met utilement : la note de cadrage du programme, le glossaire maison, le modèle de rapport que votre organisation impose, et la consigne de fond — « réponds toujours en français, ton factuel, pas de jargon administratif, cite toujours ta source ». La consigne réutilisable du chapitre 2 cesse d'être un fichier que vous recopiez : elle devient une instruction permanente.\n\nCe qu'on n'y met pas : exactement ce qu'on ne met nulle part ailleurs — les documents confidentiels de la section précédente. Un Project ne modifie en rien la règle de confidentialité. Il la rend même plus délicate, parce qu'on y dépose une fois, puis on oublie ce qui s'y trouve. Prenez l'habitude de rouvrir vos Projects de temps en temps et de regarder ce que vous y avez laissé.",
    },
  ],
  example: {
    title: 'Cas type : soixante fiches d’évaluation qui ne sont jamais dépouillées',
    challenge:
      "Le responsable pédagogique d'un centre de formation professionnelle à Lomé reçoit, à la fin de chaque session, une soixantaine de fiches d'évaluation remplies à la main par les stagiaires. Tout le monde s'accorde à dire qu'elles sont précieuses. Personne ne les dépouille : la saisie représente deux jours de travail que personne n'a. Les retours des stagiaires se perdent, session après session.",
    solution:
      "Il photographie les fiches par lots de dix, à plat sur une table près d'une fenêtre, et dépose les photos dans une même conversation. Sa demande : « Voici soixante fiches d'évaluation remplies à la main par des stagiaires. Produis un tableau à quatre colonnes : numéro de fiche, note globale sur 10, point fort cité, point faible cité. Ensuite, liste les trois reproches les plus fréquents, avec le nombre de fiches concernées pour chacun. Si une écriture est illisible, écris illisible plutôt que de deviner. »",
    impact:
      "Il obtient en une heure un tableau qu'il peut trier. Il ne s'y fie pas d'emblée : il reprend cinq fiches au hasard et les compare au tableau. Deux erreurs de lecture sur des écritures difficiles, qu'il corrige à la main, plus quatre cases marquées illisible qu'il saisit lui-même. Le gain n'est pas d'avoir supprimé le contrôle : c'est d'être passé de deux jours de saisie à une heure de vérification. Pour la session suivante, il range la consigne et le modèle de fiche dans un Project.",
  },
  practice: {
    title: 'Faites lire, extraire et citer un vrai document de votre travail',
    instructions: [
      "Choisissez un document réel que vous avez le droit de partager — aucune donnée personnelle identifiante. S'il n'existe que sur papier, photographiez-le à plat, en pleine lumière, cadrage complet, sans ombre portée.",
      "Déposez-le et demandez un résumé commandé : pour qui, en combien de points, sous quel angle. Pas « résume ce document ».",
      "Demandez ensuite une extraction précise sous forme de tableau : les dates, les montants, les localités, les échéances — ce que votre document contient d'exploitable.",
      "Enfin, posez-lui une question dont vous connaissez déjà la réponse, en exigeant la preuve : « Le document dit-il que … ? Cite le passage exact. »",
    ],
    observation:
      "Vérifiez les citations une par une : existent-elles vraiment dans le document, au mot près ? Recalculez un chiffre à la main. Notez ce qui a été mal lu — dans la grande majorité des cas, l'erreur vient de la qualité de l'image ou d'une mise en page complexe : tableau à plusieurs niveaux, colonnes serrées, écriture manuscrite. C'est cette observation qui vous dira quels documents vous pouvez confier, et lesquels demandent encore vos yeux.",
  },
  quiz: [
    {
      question: "Vous photographiez une page papier pour la faire lire. Quel est le principal risque ?",
      options: [
        { key: 'A', text: "Claude refuse les images et n'accepte que les PDF." },
        { key: 'B', text: "Une photo floue, de biais ou coupée produit une lecture fausse, et l'échec de lecture n'est pas toujours signalé." },
        { key: 'C', text: 'La photo est trop lourde pour être envoyée.' },
        { key: 'D', text: "Il n'y a pas de risque particulier : une photo vaut un PDF." },
      ],
      answer: 'B',
      explanation:
        "La lecture d'image dépend directement de la netteté et du cadrage. Quand la lecture échoue partiellement, la réponse complète les trous au lieu de s'arrêter. Quand le PDF existe, on dépose le PDF.",
    },
    {
      question: "Quelle est la façon la plus efficace de rendre un résumé vérifiable ?",
      options: [
        { key: 'A', text: 'Relire tout le document en le comparant au résumé.' },
        { key: 'B', text: "Demander que chaque point cite la phrase du document d'origine." },
        { key: 'C', text: 'Demander trois résumés et comparer les trois.' },
        { key: 'D', text: 'Demander un résumé beaucoup plus court.' },
      ],
      answer: 'B',
      explanation:
        "Exiger la citation transforme la vérification : au lieu de relire l'ensemble, vous contrôlez quelques phrases précises. C'est la différence entre une vérification que vous ferez réellement et une que vous remettrez à plus tard.",
    },
    {
      question: "À quoi sert un Project ?",
      options: [
        { key: 'A', text: "À stocker les documents de votre organisation à la place de son serveur." },
        { key: 'B', text: "À garder un contexte et des instructions permanentes réutilisables d'une conversation à l'autre." },
        { key: 'C', text: 'À obtenir des réponses plus rapides.' },
        { key: 'D', text: "À déposer des données sensibles, qui y sont protégées." },
      ],
      answer: 'B',
      explanation:
        "Un Project évite de recoller le même contexte chaque semaine : documents de référence et instructions permanentes s'appliquent à toutes les conversations du dossier. Il ne change rien à la règle de confidentialité — il demande même plus de vigilance, puisqu'on y dépose une fois et qu'on oublie ensuite.",
    },
  ],
  reflection:
    "Quel document revient régulièrement dans votre travail sous une forme difficile à exploiter — du papier, un scan, un tableau mal structuré ? Qu'est-ce qu'il faudrait en extraire pour qu'il devienne utile, et à qui cela servirait-il en premier ?",
  glossary: [
    {
      term: 'Déposer un document',
      definition:
        "Joindre un fichier à la conversation — PDF, image, tableau — pour que Claude travaille dessus au lieu de travailler de mémoire.",
    },
    {
      term: "Lecture d'image",
      definition:
        "Capacité à lire le texte d'une photo ou d'un scan. Sa fiabilité dépend directement de la netteté, de l'éclairage et du cadrage de l'image.",
    },
    {
      term: 'Extraction',
      definition:
        "Faire ressortir d'un document une information précise sous une forme exploitable — le plus souvent un tableau que l'on peut trier et additionner.",
    },
    {
      term: 'Citation de source',
      definition:
        "Exiger que chaque affirmation soit accompagnée de la phrase du document d'origine. C'est la méthode de vérification la plus rapide sur un document long.",
    },
    {
      term: 'Project',
      definition:
        "Dossier qui conserve un contexte réutilisable — documents de référence et instructions permanentes — appliqué à toutes les conversations ouvertes depuis lui.",
    },
    {
      term: 'Instruction permanente',
      definition:
        "Consigne de fond enregistrée dans un Project (langue, ton, format, obligation de citer ses sources) qui s'applique sans être retapée à chaque fois.",
    },
  ],
};

const lessonCl3En: LessonContent = {
  ...lessonCl3Fr,
  title: 'Working with your own documents',
  objective:
    'By the end of this chapter you will be able to upload a document — a PDF, a photo of a paper page, a table — get a summary made to your specification — who it is for, how many points, from what angle — extract precise information in a usable form, and check what comes out. You will also know what a document must never contain before you upload it.',
  content: [
    {
      title: 'Uploading a document changes the conversation',
      body:
        "So far you have typed your requests. From now on you supply the raw material. This is where the tool stops being a curiosity and starts being useful on your real files.\n\nYou can upload a PDF, an image, a table, or simply pasted text. The image matters more than it seems: the document clogging your desk is often paper — a printed report, a memo, a hand-filled form, a scribbled table. You photograph it with your phone and it becomes readable.\n\nOne limit to know before relying on it: reading quality depends entirely on image quality. Document flat, even light, sharp text, whole page in frame. A blurred, angled or cropped photo produces a false reading — and you will not always be told the reading failed. The gaps get filled: where Claude could not read, it guesses plausible text and gives it to you like the rest.\n\nHence a simple rule: when a PDF exists, upload the PDF. The photo is for what exists only on paper, not a shortcut.",
    },
    {
      title: 'Four uses that cover almost everything',
      body:
        "Summarize. The first reflex and the worst used. \"Summarize this report\" gives a one-size-fits-all text. Chapter 2 applies in full: say who it is for, in how many points, from what angle.\n\nExtract. The most underrated use, and often the most profitable. \"List the localities mentioned, with the number of beneficiaries for each, as a two-column table.\" You move from a document nobody processes to data you can sort, add up and compare.\n\nTranslate. A whole document, or better, an adaptation: a technical report in French becomes a one-page note in English for a donor. Always proofread the translation, starting with proper nouns and figures.\n\nInterrogate. The least known of the four and the one that changes the most. Instead of asking for a summary, put questions to the document: \"Does this contract include a termination clause? Quote the exact passage.\" Those last four words are the whole point.",
    },
    {
      title: 'Checking what comes out of a document',
      body:
        "The chapter 1 risk does not disappear, it changes shape. On a general question Claude can invent an answer. On a document you supplied it errs differently, and more quietly: it attaches a figure to the wrong row, confuses two columns, reads 2019 where the photo says 2018, or turns a careful reservation into a flat claim.\n\nThese errors are more dangerous, because the document is right there in front of you and its presence feels like safety. You think you are reading the document; you are reading what the tool understood of it.\n\nThe defence is one habit: demand the source. \"For each point, quote the sentence from the original document.\" Your check stops being \"reread forty pages\" and becomes \"verify five quotations\" — the difference between a check you will actually do and one you will not.\n\nTwo non-negotiables. Recompute figures by hand — totals, sums, percentages. And never upload a document you are not entitled to send outside your organization: a named beneficiary list, an HR file, a medical record, a contract under a confidentiality clause. A document goes up whole; you cannot hold half of it back.",
    },
    {
      title: 'Projects: stop pasting the same context',
      body:
        "The memory seen in chapter 1 carries over what it judges useful from one conversation to the next. Handy, but not a commitment: it may keep a detail and drop what matters to you, and you do not choose for it. Working on the same programme every week, you still end up re-explaining who you are, what the programme is and how you want to be answered.\n\nA Project is a folder that keeps that context once and for all. You put reference documents in it and write permanent instructions that apply to every conversation opened from it.\n\nWhat belongs there: the programme framing note, the in-house glossary, your organization's report template, and the standing instruction — \"always answer in English, factual tone, no administrative jargon, always cite your source\". Chapter 2's reusable instruction stops being a file you copy and becomes a permanent setting.\n\nWhat does not belong there: exactly what does not belong anywhere else. A Project changes nothing about confidentiality. It makes it trickier, because you upload once and then forget what is in there. Reopen your Projects from time to time and look at what you left behind.",
    },
  ],
  example: {
    title: 'Typical case: sixty evaluation forms nobody ever processes',
    challenge:
      'The training manager of a vocational centre in Lomé receives about sixty hand-filled evaluation forms at the end of each session. Everyone agrees they are valuable. Nobody processes them: data entry is two days of work nobody has. Trainee feedback is lost, session after session.',
    solution:
      'He photographs the forms in batches of ten, flat on a table near a window, and uploads them into one conversation: "Here are sixty hand-filled trainee evaluation forms. Produce a four-column table: form number, overall score out of 10, strength mentioned, weakness mentioned. Then list the three most frequent complaints with the number of forms concerned for each. If handwriting is illegible, write illegible rather than guessing."',
    impact:
      'In an hour he has a table he can sort. He does not trust it blindly: he takes five forms at random and compares them with the table. Two misreadings on difficult handwriting, which he fixes, plus four cells marked illegible that he enters himself. The gain is not that checking disappeared — it is going from two days of data entry to one hour of verification. For the next session he stores the instruction and the form template in a Project.',
  },
  practice: {
    title: 'Have a real work document read, extracted and quoted',
    instructions: [
      'Pick a real document you are entitled to share — no identifying personal data. If it exists only on paper, photograph it flat, in full light, whole page in frame, no cast shadow.',
      'Upload it and ask for a summary made to your specification: who for, how many points, from what angle. Not "summarize this document".',
      'Then ask for a precise extraction as a table: dates, amounts, localities, deadlines — whatever your document holds that is usable.',
      'Finally, ask a question whose answer you already know, and demand proof: "Does the document say that…? Quote the exact passage."',
    ],
    observation:
      'Check the quotations one by one: do they really exist in the document, word for word? Recompute one figure by hand. Note what was misread — in most cases the error comes from image quality or a complex layout: multi-level tables, tight columns, handwriting. That observation tells you which documents you can hand over and which still need your own eyes.',
  },
  quiz: [
    {
      question: 'You photograph a paper page to have it read. What is the main risk?',
      options: [
        { key: 'A', text: 'Claude refuses images and only accepts PDFs.' },
        { key: 'B', text: 'A blurred, angled or cropped photo produces a false reading, and the failure is not always reported.' },
        { key: 'C', text: 'The photo is too heavy to send.' },
        { key: 'D', text: 'There is no particular risk: a photo is as good as a PDF.' },
      ],
      answer: 'B',
      explanation:
        'Image reading depends directly on sharpness and framing. When reading partly fails, the answer fills the gaps instead of stopping. When a PDF exists, upload the PDF.',
    },
    {
      question: 'What is the most effective way to make a summary verifiable?',
      options: [
        { key: 'A', text: 'Reread the whole document against the summary.' },
        { key: 'B', text: 'Require each point to quote the sentence from the original document.' },
        { key: 'C', text: 'Ask for three summaries and compare them.' },
        { key: 'D', text: 'Ask for a much shorter summary.' },
      ],
      answer: 'B',
      explanation:
        'Demanding quotations transforms the check: instead of rereading everything you verify a few precise sentences. That is the difference between a check you will actually do and one you will postpone.',
    },
    {
      question: 'What is a Project for?',
      options: [
        { key: 'A', text: "To store your organization's documents instead of its own server." },
        { key: 'B', text: 'To keep a reusable context and permanent instructions across conversations.' },
        { key: 'C', text: 'To get faster answers.' },
        { key: 'D', text: 'To upload sensitive data, which is protected there.' },
      ],
      answer: 'B',
      explanation:
        'A Project saves you pasting the same context every week: reference documents and permanent instructions apply to every conversation in the folder. It changes nothing about confidentiality — it demands more vigilance, since you upload once and then forget.',
    },
  ],
  reflection:
    'Which document keeps coming back in your work in a form that is hard to use — paper, a scan, a badly structured table? What would need to be extracted from it to make it useful, and who would benefit first?',
  glossary: [
    { term: 'Upload a document', definition: 'Attach a file to the conversation — PDF, image, table — so Claude works on it instead of from memory.' },
    { term: 'Image reading', definition: 'The ability to read text from a photo or scan. Its reliability depends directly on sharpness, lighting and framing.' },
    { term: 'Extraction', definition: 'Pulling precise information out of a document in a usable form — usually a table you can sort and add up.' },
    { term: 'Source quotation', definition: 'Requiring every claim to come with the sentence from the original document. The fastest way to verify a long document.' },
    { term: 'Project', definition: 'A folder holding a reusable context — reference documents and permanent instructions — applied to every conversation opened from it.' },
    { term: 'Permanent instruction', definition: 'A standing setting saved in a Project (language, tone, format, obligation to cite sources) that applies without being retyped.' },
  ],
};

const lessonCl3Ha: LessonContent = {
  ...lessonCl3Fr,
  title: 'Aiki da takardunka',
  objective:
    'Bayan wannan darasi za ka iya aika takarda ga Claude — PDF, hoton shafi na takarda, ko tebur — ka samu takaitawa bisa umarninka, ka ciro bayani madaidaici a siffar da za a iya amfani da ita, kuma ka tantance sakamakon. Za ka kuma san abin da bai kamata takarda ta kunsa ba kafin ka aika ta.',
  content: [
    {
      title: 'Aika takarda yana sauya yanayin tattaunawa',
      body:
        'Zuwa yanzu kana rubuta bukatunka. Daga yau kana bayar da kayan aiki. Nan ne kayan aikin ya daina zama abin sha’awa ya zama mai amfani a kan fayilolinka na gaske.\n\nKana iya aika PDF, hoto, tebur, ko rubutu da ka manna. Hoto ya fi muhimmanci fiye da yadda ake tsammani: takardar da ke damunka galibi takarda ce ta hannu — rahoto da aka buga, sanarwa, fom da aka cika da hannu, tebur da aka rubuta da alkalami. Kana daukar hotonta da wayarka, sai ta zama abin karantawa.\n\nIyaka daya da ya kamata ka sani: ingancin karatun ya dogara gaba daya kan ingancin hoton. Takarda a shimfide, haske daidai, rubutu bayyananne, dukkan shafin a cikin hoto. Hoto mai duhu, na gefe ko yankakke yana bayar da karatu na karya — kuma ba koyaushe za a gaya maka cewa karatun bai yi nasara ba. Za a cike gurbin.\n\nDon haka doka mai sauki: idan PDF yana nan, aika PDF. Hoto na abin da ke kan takarda kadai ne, ba gajeriyar hanya ba.',
    },
    {
      title: 'Amfani hudu da suka kunshi kusan komai',
      body:
        'Takaitawa. Shi ne na farko, kuma shi aka fi amfani da shi ba daidai ba. “Takaita wannan rahoto” yana bayar da rubutun kowa. Darasi na 2 ya shafi nan gaba daya: fada wa wa ne, a maki nawa, daga wace fuska.\n\nCiro bayani. Shi aka fi rena, kuma shi ya fi riba. “Ka fitar mini jerin garuruwan da aka ambata, da adadin masu amfana ga kowanne, a tebur mai ginshiki biyu.” Ka tashi daga takardar da babu wanda ke duba ta zuwa bayanan da za ka iya tsarawa da kirgawa.\n\nFassara. Takarda gaba daya, ko mafi kyau, daidaitawa: rahoto na fasaha da faransanci ya zama takarda shafi daya da turanci ga mai bayar da tallafi. Koyaushe sai ka duba fassarar, musamman sunaye da lambobi.\n\nTambaya. Shi aka fi rashin sani a cikin hudun, kuma shi ya fi sauya komai. Maimakon neman takaitawa, ka yi wa takardar tambaya: “Wannan kwantiragi yana da sashin dakatarwa? Ka kawo ainihin jimlar.” Kalmomi hudu na karshe su ne ainihin abin.',
    },
    {
      title: 'Tantance abin da ya fito daga takarda',
      body:
        'Hadarin ba shi ne na darasi na 1 ba. A kan tambaya ta gaba daya, Claude na iya kirkiro amsa. A kan takardar da ka bayar, yana kuskure ta wata hanya, cikin nutsuwa: yana danganta lamba ga layi mara kyau, ya rikita ginshikai biyu, ya karanta 2019 inda hoton ke cewa 2018, ko ya juya taka-tsantsan zuwa tabbaci.\n\nWadannan kurakurai sun fi hadari, domin takardar tana nan a gabanka, kuma kasancewarta na bayar da jin tsaro. Kana tsammanin kana karanta takardar; kana karanta abin da kayan aikin ya fahimta.\n\nKariyar ta ta’allaka a al’ada daya: nemi tushe. “Ga kowane maki, ka kawo jimlar da ke cikin takardar asali.” Tantancewarka ta daina zama “sake karanta shafuka arba’in” ta zama “duba jimloli biyar”.\n\nDoka biyu marasa sassauci. Lambobi sai an sake lissafa su da hannu. Kuma kar ka taba aika takardar da ba ka da ikon fitar da ita daga kungiyarka: jerin sunayen masu amfana, fayil na ma’aikata, bayanan lafiya, kwantiragi mai sirri. Takarda tana tafiya gaba daya; ba za ka iya rike rabinta ba.',
    },
    {
      title: 'Projects: daina sake manna mahalli daya',
      body:
        'Tunanin da aka gani a darasi na 1 yana daukar abin da ya ga ya dace daga wannan tattaunawa zuwa waccan. Yana da amfani, amma ba alkawari ba ne: yana iya rike karamin abu ya bar abin da ke da muhimmanci a gare ka, kuma ba kai ke zaba masa ba. Idan kana aiki kan shiri daya duk mako, za ka ci gaba da sake bayyana wane ne kai, menene shirin, da yadda kake son a amsa maka.\n\nProject fayil ne da ke rike da wannan mahalli har abada. Kana sanya takardun tushe a ciki kuma kana rubuta umarni na dindindin da za su shafi kowace tattaunawa da aka bude daga ciki.\n\nAbin da ya dace a ciki: takardar tsarin shirin, kamus na cikin gida, samfurin rahoto da kungiyarka ta sanya, da umarnin gaba daya — “koyaushe ka amsa da faransanci, salo na gaskiya, ba jargon ba, koyaushe ka kawo tushe”. Umarnin sake amfani na darasi na 2 ya daina zama fayil da kake kwafa: ya zama saitin dindindin.\n\nAbin da bai dace ba: daidai abin da bai dace ko’ina ba. Project bai sauya dokar sirri ba ko kadan. Yana ma sa ta zama mai wahala, domin kana aika sau daya sannan ka manta abin da ke ciki. Ka saba sake bude Projects lokaci zuwa lokaci ka duba abin da ka bari.',
    },
  ],
  example: {
    title: 'Misali: fom sittin na kimantawa da ba a taba duba su',
    challenge:
      'Shugaban horo a cibiyar koyar da sana’a a Lomé yana karbar kusan fom sittin na kimantawa da aka cika da hannu a karshen kowane zango. Kowa ya yarda suna da amfani. Babu wanda ke duba su: shigar da bayanai aiki ne na kwana biyu da babu wanda ke da shi. Ra’ayoyin dalibai suna bata, zango bayan zango.',
    solution:
      'Ya dauki hoton fom goma-goma, a shimfide kan tebur kusa da taga, ya aika hotunan a tattaunawa daya: “Ga fom sittin na kimantawa da dalibai suka cika da hannu. Ka yi tebur mai ginshiki hudu: lambar fom, maki gaba daya bisa 10, karfin da aka ambata, raunin da aka ambata. Sannan ka lissafa korafe-korafe uku da suka fi yawa, da adadin fom ga kowanne. Idan rubutu bai karantu ba, ka rubuta ba a karanta ba maimakon hasashe.”',
    impact:
      'Cikin sa’a daya ya samu tebur da zai iya tsarawa. Bai amince kai tsaye ba: ya dauki fom biyar bazuwar ya kwatanta da tebur. Kurakurai biyu na karatu kan rubutun hannu masu wuya, da ya gyara, da akwatuna hudu da aka yiwa alama ba a karanta ba da ya shigar da kansa. Ribar ba shine an cire dubawa ba: shine an tashi daga kwana biyu na shigarwa zuwa sa’a daya na tantancewa. Ga zango na gaba, ya ajiye umarnin da samfurin fom a cikin Project.',
  },
  practice: {
    title: 'Ka sa a karanta, a ciro, a kuma kawo tushe daga takardarka ta gaske',
    instructions: [
      'Zabi takarda ta gaske da kake da ikon rabawa — babu bayanan sirri masu gano mutum. Idan tana kan takarda kadai, ka dauki hotonta a shimfide, cikin cikakken haske, dukkan shafin, ba tare da inuwa ba.',
      'Ka aika ta ka nemi takaitawa bisa umarni: ga wa, a maki nawa, daga wace fuska. Ba “takaita wannan takarda” ba.',
      'Sannan ka nemi ciro bayani madaidaici a siffar tebur: kwanan wata, adadi, garuruwa, wa’adi — duk abin da takardarka ke da shi mai amfani.',
      'A karshe, ka yi tambaya da ka riga ka san amsarta, ka nemi hujja: “Takardar ta ce…? Ka kawo ainihin jimlar.”',
    ],
    observation:
      'Ka duba jimlolin da aka kawo daya bayan daya: suna nan a cikin takardar, kalma da kalma? Ka sake lissafa lamba daya da hannu. Ka lura abin da aka karanta ba daidai ba — galibi kuskuren yana zuwa daga ingancin hoto ko tsari mai rikitarwa: tebur mai matakai, ginshikai matsatstsu, rubutun hannu. Wannan lura ce za ta gaya maka wace takarda za ka iya bayarwa, wace kuma tana bukatar idanunka.',
  },
  quiz: [
    {
      question: 'Ka dauki hoton shafi na takarda don a karanta shi. Menene babban hadari?',
      options: [
        { key: 'A', text: 'Claude ba ya karbar hoto, PDF kadai yake karba.' },
        { key: 'B', text: 'Hoto mai duhu, na gefe ko yankakke yana bayar da karatu na karya, kuma ba koyaushe ake sanar da gazawar ba.' },
        { key: 'C', text: 'Hoton ya yi nauyi don aikawa.' },
        { key: 'D', text: 'Babu wani hadari: hoto daidai yake da PDF.' },
      ],
      answer: 'B',
      explanation:
        'Karatun hoto ya dogara kai tsaye kan bayyanuwa da tsarin hoto. Idan karatu ya gaza a wani sashe, amsar tana cike gurbin maimakon tsayawa. Idan PDF yana nan, aika PDF.',
    },
    {
      question: 'Wace hanya ce ta fi tasiri wajen sa takaitawa ta zama abin tantancewa?',
      options: [
        { key: 'A', text: 'Sake karanta dukkan takardar tare da kwatanta da takaitawar.' },
        { key: 'B', text: 'Nema kowane maki ya kawo jimlar da ke cikin takardar asali.' },
        { key: 'C', text: 'Nemi takaitawa uku ka kwatanta su.' },
        { key: 'D', text: 'Nemi takaitawa mafi gajarta.' },
      ],
      answer: 'B',
      explanation:
        'Neman tushe yana sauya tantancewa: maimakon sake karanta komai, kana duba jimloli kadan madaidaita. Wannan shi ne bambanci tsakanin tantancewar da za ka yi da wadda za ka jinkirta.',
    },
    {
      question: 'Menene amfanin Project?',
      options: [
        { key: 'A', text: 'Ajiye takardun kungiyarka maimakon uwar garkenta.' },
        { key: 'B', text: 'Rike mahalli da umarni na dindindin da za a sake amfani da su a kowace tattaunawa.' },
        { key: 'C', text: 'Samun amsoshi cikin sauri.' },
        { key: 'D', text: 'Aika bayanai masu muhimmanci, wadanda ake karewa a can.' },
      ],
      answer: 'B',
      explanation:
        'Project yana hana ka sake manna mahalli daya duk mako: takardun tushe da umarni na dindindin suna shafar kowace tattaunawa a cikin fayil. Bai sauya dokar sirri ba — yana ma bukatar karin taka-tsantsan, tunda kana aika sau daya sannan ka manta.',
    },
  ],
  reflection:
    'Wace takarda ce ke dawowa a aikinka a siffar da ke da wuyar amfani — takarda ta hannu, sikanin, ko tebur maras tsari? Me ya kamata a ciro daga cikinta don ta zama mai amfani, kuma wa zai fara amfana?',
  glossary: [
    { term: 'Aika takarda', definition: 'Hada fayil da tattaunawa — PDF, hoto, tebur — don Claude ya yi aiki a kanta maimakon daga tunani.' },
    { term: 'Karatun hoto', definition: 'Ikon karanta rubutu daga hoto ko sikanin. Amincinsa ya dogara kai tsaye kan bayyanuwa, haske da tsarin hoto.' },
    { term: 'Ciro bayani', definition: 'Fitar da bayani madaidaici daga takarda a siffar da za a iya amfani da ita — galibi tebur da za a iya tsarawa da kirgawa.' },
    { term: 'Kawo tushe', definition: 'Neman kowace magana ta zo da jimlar da ke cikin takardar asali. Hanya mafi sauri ta tantance dogon takarda.' },
    { term: 'Project', definition: 'Fayil da ke rike da mahalli mai sake amfani — takardun tushe da umarni na dindindin — da ake amfani da shi a kowace tattaunawa da aka bude daga ciki.' },
    { term: 'Umarni na dindindin', definition: 'Umarni da aka ajiye a cikin Project (harshe, salo, tsari, wajibcin kawo tushe) da ke aiki ba tare da sake rubuta shi ba.' },
  ],
};

export const claudeLesson3ByLanguage: Record<Language, LessonContent> = {
  fr: lessonCl3Fr,
  en: lessonCl3En,
  ha: lessonCl3Ha,
};
