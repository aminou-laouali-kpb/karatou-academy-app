import { Language } from '../../translations';
import { LessonContent } from '../../lessonContent';

// Module « L'IA expliquée simplement » (ia-expliquee-simplement) — leçon is5 (Ce que l'IA change en Afrique)
// Texte aligné sur le CLAUDE.md de production vidéo du cours 1 (docs/production-video/claude-md/).
// Trilingue FR / EN / HA. ⚠️ Traductions HA à faire valider par un locuteur natif haoussa.
export const isLesson5: Record<Language, LessonContent> = {
  "fr": {
    "id": "is5",
    "lessonNumber": 5,
    "title": "Ce que l’IA change en Afrique — dire ce qu’elle change pour votre métier",
    "objective": "À la fin de cette leçon, vous saurez dire ce que l’IA change pour votre métier, ou pour celui que vous préparez. Vous saurez reconnaître des usages réels de l’IA déjà présents en Afrique, en santé, en agriculture et dans les études, et regarder ses risques en face. Vous saurez aussi demander à un assistant avec recherche sur le web un bilan chances et risques, vérifier ses sources une par une, puis le compléter avec votre propre expérience du terrain.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Ni rêve ni peur : des usages réels, déjà sur le terrain",
        "body": "On entend souvent deux discours. Le premier : « L’IA, c’est pour les pays riches, pas pour nous. » Le second : « L’IA va remplacer tout le monde. » Les deux sont faux. Ouvrez Google Traduction sur un téléphone : il traduit du français vers le haoussa. Pas parfaitement, mais réellement. Et en 2024, l’Union africaine a approuvé une stratégie continentale pour l’intelligence artificielle : le continent n’est pas spectateur. Rien n’est automatique pour autant. C’est comme la saison des pluies : elle arrive pour tout le monde, mais la récolte dépend de ce que chacun sème.\n\nEn santé, l’Organisation mondiale de la santé (OMS) recommande depuis 2021 des logiciels d’IA qui aident à lire les radios des poumons pour dépister la tuberculose. Le logiciel signale les images qui méritent un second regard ; le médecin garde la décision. En agriculture, des applications reconnaissent une maladie de plante sur une simple photo. Un planteur de cacao près de Daloa, en Côte d’Ivoire, ou une maraîchère près de Bobo-Dioulasso, au Burkina Faso, photographie une feuille tachée et obtient une piste. Une piste, pas un verdict : on confirme toujours avec un agent de vulgarisation agricole avant de traiter un champ.\n\nPour étudier, un assistant comme Gemini, ChatGPT ou Claude peut servir de répétiteur, à toute heure. Une étudiante de Cotonou, au Bénin, lui demande d’expliquer une notion de comptabilité avec un exemple du marché, puis de lui poser trois questions pour vérifier qu’elle a compris. Le répétiteur ne passe pas l’examen à sa place : il la fait travailler. Dans ces trois domaines, la règle est la même : l’IA aide, l’humain vérifie et décide."
      },
      {
        "title": "Nos langues : des progrès, pas encore gagnés",
        "body": "Le haoussa, le wolof ou le swahili sont déjà proposés par plusieurs outils de traduction et assistants. Le zarma, parlé au Niger, et beaucoup d’autres langues du continent le sont beaucoup moins. Ce n’est pas la langue qui est en cause : ce sont les données qui manquent. Souvenez-vous de la Leçon 2 : une IA apprend à partir d’exemples. Une langue peu écrite sur Internet lui donne peu d’exemples, donc des traductions plus fragiles.\n\nDes chercheurs et des communautés africaines construisent ces données qui manquent : ils enregistrent des voix, transcrivent des conversations, traduisent des textes. C’est comme remplir une bibliothèque, livre après livre : chaque phrase ajoutée aide la machine à mieux comprendre la langue suivante. Les progrès sont réels, mais ils avancent à des vitesses différentes selon les langues.\n\nEn attendant, une règle simple : une traduction automatique dans nos langues se fait toujours relire par quelqu’un qui la parle avant d’être diffusée. Un message de prévention en swahili pour un centre de santé de Mombasa, au Kenya, ou un avis aux parents d’élèves en wolof à Thiès : la machine fait le premier jet, une personne qui parle la langue valide. La qualité varie selon les langues, et parfois d’une phrase à l’autre."
      },
      {
        "title": "Le travail change d’abord par les tâches",
        "body": "Un métier, c’est un panier de tâches : rédiger, résumer, trier, traduire, conseiller, réparer, vendre. Selon l’Organisation internationale du Travail (OIT, 2023), l’IA générative transforme surtout des tâches, plus qu’elle ne supprime des métiers entiers. Pensez à la calculatrice : elle n’a pas fait disparaître les commerçants, elle a changé la façon de faire les comptes. Rédiger, résumer, trier, traduire : ces tâches se font de plus en plus avec l’IA.\n\nPetite prédiction : quels emplois l’IA générative touche-t-elle le plus, les métiers manuels ou les emplois de bureau ? Réponse de l’OIT (2023) : les emplois de bureau. Saisir, classer, rédiger des courriers : ces tâches changent en premier. Pourquoi ? L’IA générative travaille sur des mots et des chiffres, pas sur la terre, le bois ou le tissu. Une assistante administrative à Lomé, au Togo, verra changer la rédaction de ses courriers bien avant qu’un menuisier de Kinshasa, en RDC, ne voie changer son atelier. Et le plus souvent, l’IA transforme le travail plus qu’elle ne le supprime.\n\nCe qui prend de la valeur : savoir demander (la méthode RCTF de la Leçon 4), vérifier, et adapter au terrain. L’IA ne connaît ni vos sols, ni vos pluies, ni vos clients. Vous, si. À Thiès, à Niamey ou à Garoua, ce savoir de terrain associé à l’IA devient une force. Pour faire votre propre bilan, listez les tâches de votre métier une par une et demandez-vous lesquelles touchent surtout des mots ou des chiffres."
      },
      {
        "title": "Les risques, à regarder en face",
        "body": "Des escrocs imitent déjà des voix avec l’IA. Un vocal qui ressemble à celui d’un cousin réclame un transfert urgent par Orange Money, Wave, M-Pesa ou MTN MoMo. Le bon réflexe : ne rien envoyer et rappeler la personne sur son numéro habituel. On fabrique aussi de fausses images et de fausses vidéos très réalistes, qu’on appelle des « deepfakes » : un responsable politique, une star ou un commerçant connu semble dire ce qu’il n’a jamais dit. Avant de partager une vidéo choc dans un groupe WhatsApp, demandez-vous d’où elle vient.\n\nDeux autres risques sont moins visibles. D’abord, nos données partent souvent vers des serveurs lointains : ce que vous tapez dans un assistant ne reste pas dans votre téléphone. N’y mettez ni code mobile money, ni numéro de pièce d’identité, ni dossier de client ou de patient. Ensuite, nous dépendons d’outils conçus ailleurs, pour d’autres réalités : des conseils pensés pour d’autres sols, d’autres pluies ou d’autres lois. Un comptable à Casablanca, au Maroc, vérifie que la règle fiscale citée par l’IA est bien la règle marocaine.\n\nChances et risques arrivent ensemble, comme les deux colonnes d’un même tableau. Faire un bilan honnête, c’est remplir les deux colonnes, sans rêve ni peur. La Leçon 6 vous donnera trois réflexes simples pour faire face à ces limites au quotidien."
      }
    ],
    "example": {
      "title": "Moussa prépare un exposé : « L’IA et l’agriculture en Afrique : chances et risques »",
      "challenge": "Moussa, 21 ans, est étudiant en licence à l’université de Thiès, au Sénégal. Il veut devenir conseiller agricole ; sa famille cultive du mil et de l’oignon dans la zone des Niayes. Une question l’inquiète : avec l’IA, y aura-t-il encore du travail pour un conseiller agricole ? Son professeur lui demande justement un exposé : « L’IA et l’agriculture en Afrique : chances et risques ». L’enjeu, c’est son orientation. Moussa ne veut répéter ni le rêve (« l’IA va tout résoudre ») ni la peur (« l’IA va remplacer tout le monde ») : il lui faut des exemples réels, avec leurs sources.",
      "solution": "Dans Gemini, en version gratuite avec recherche sur le web, Moussa colle une consigne en quatre blocs, selon la méthode RCTF : « Rôle : tu es un conseiller agricole qui cite toujours ses sources. Contexte : je suis étudiant à Thiès, au Sénégal ; je veux devenir conseiller agricole. Ma famille cultive du mil et de l’oignon. Tâche : fais un tableau à deux colonnes : ce que l’IA peut améliorer dans l’agriculture en Afrique, et les risques. Format : 4 lignes par colonne, phrases courtes. Pour chaque exemple réel, donne ta source avec un lien. Si tu n’es pas sûr, dis-le. » Le tableau arrive, avec des liens sous certaines lignes. Moussa ne croit pas sur parole : il ouvre une source, cherche dans la page un mot de l’exemple et trouve la phrase qui le confirme. Si elle y est, la ligne reste ; sinon, il la retire. Il relance ensuite : « Quelles compétences dois-je apprendre pour en profiter ? Trois, concrètes. » Il en retient deux. Enfin, dans son application Notes, il écrit « Mon bilan IA — 4 chances · 4 risques · 2 compétences » et ajoute une ligne que l’IA n’avait pas : « Risque : des conseils pensés pour d’autres sols et d’autres pluies. »",
      "impact": "Le jour de l’exposé, Moussa présente un tableau sourcé : quatre chances, quatre risques et deux compétences à apprendre. Chaque ligne conservée a été vérifiée dans sa source, et une ligne vient de sa propre expérience du terrain. Sa conclusion : « L’IA va changer certaines de mes tâches. Je vais apprendre à m’en servir, et à la vérifier. » Il ne repart ni avec un rêve ni avec une peur, mais avec un plan concret pour son orientation."
    },
    "practice": {
      "title": "Faites le bilan de l’IA pour votre métier",
      "instructions": [
        "Ouvrez un assistant avec recherche sur le web (Gemini, ChatGPT ou Claude, en version gratuite) et envoyez cette consigne en remplaçant les crochets par votre métier, ou par celui que vous préparez : « Rôle : tu es un spécialiste de mon métier qui cite toujours ses sources. Contexte : je suis [votre métier ou vos études] à [votre ville] ([votre pays]). Je veux savoir ce que l’IA change pour mon travail. Tâche : fais un tableau à deux colonnes : ce que l’IA peut améliorer dans mon travail, et les risques. Format : 4 lignes par colonne, phrases courtes. Pour chaque exemple réel, donne ta source avec un lien. Si tu n’es pas sûr, dis-le. »",
        "Ouvrez au moins une des sources proposées, cherchez dans la page un mot de l’exemple (fonction « Rechercher dans la page ») et vérifiez qu’elle dit bien ce que l’IA affirme. Si c’est confirmé, gardez la ligne ; sinon, retirez-la.",
        "Dans une note, ajoutez une chance et un risque que vous connaissez, vous, sur le terrain. Puis choisissez deux compétences à apprendre et notez où les apprendre : un cours, une personne de votre entourage, une association professionnelle."
      ],
      "observation": "Vous constatez qu’un lien ne prouve rien tant qu’on ne l’a pas ouvert : certaines lignes se confirment, d’autres non. Votre bilan final mélange ce que l’IA a trouvé et ce que vous seul savez du terrain. Il montre aussi que l’IA change d’abord certaines tâches de votre métier, pas le métier entier."
    },
    "quiz": [
      {
        "question": "Selon l’OIT (2023), quels emplois l’IA générative touche-t-elle le plus ?",
        "options": [
          { "key": "A", "text": "Les métiers manuels" },
          { "key": "B", "text": "Les emplois de bureau" },
          { "key": "C", "text": "Uniquement l’agriculture" },
          { "key": "D", "text": "Aucun emploi" }
        ],
        "answer": "B",
        "explanation": "L’Organisation internationale du Travail (2023) montre que les emplois de bureau sont les plus exposés. L’IA générative travaille sur des mots et des chiffres : saisir, classer ou rédiger des courriers sont les tâches qui changent en premier, bien avant le travail de la terre, du bois ou du tissu."
      },
      {
        "question": "Quelle phrase résume le mieux l’effet de l’IA sur le travail, selon l’OIT (2023) ?",
        "options": [
          { "key": "A", "text": "Elle transforme surtout des tâches" },
          { "key": "B", "text": "Elle supprime la plupart des métiers" },
          { "key": "C", "text": "Elle n’a aucun effet en Afrique" },
          { "key": "D", "text": "Elle remplace tous les emplois de bureau" }
        ],
        "answer": "A",
        "explanation": "Un métier est un panier de tâches. Selon l’OIT (2023), l’IA générative transforme surtout certaines de ces tâches, plus qu’elle ne supprime des métiers entiers. Ce qui prend de la valeur : savoir demander, vérifier et adapter au terrain."
      },
      {
        "question": "Une application signale une maladie sur la photo d’une feuille de mil. Que faites-vous ?",
        "options": [
          { "key": "A", "text": "Vous traitez tout de suite le champ" },
          { "key": "B", "text": "Vous partagez le diagnostic dans le groupe du village" },
          { "key": "C", "text": "Vous confirmez avec un agent de vulgarisation agricole" },
          { "key": "D", "text": "Vous ignorez l’application" }
        ],
        "answer": "C",
        "explanation": "Le diagnostic sur photo est un vrai progrès, mais c’est une piste, pas un verdict. Traiter ou alerter tout le village sur une erreur coûte cher ; ignorer l’outil fait perdre une aide utile. On confirme toujours avec un agent de vulgarisation agricole avant d’agir."
      },
      {
        "question": "Pourquoi faire relire une traduction automatique en haoussa, en wolof ou en zarma ?",
        "options": [
          { "key": "A", "text": "Parce que c’est interdit" },
          { "key": "B", "text": "Parce que l’IA refuse ces langues" },
          { "key": "C", "text": "Ce n’est pas utile" },
          { "key": "D", "text": "Parce que la qualité varie selon les langues" }
        ],
        "answer": "D",
        "explanation": "Plusieurs outils proposent déjà le haoussa ou le wolof, beaucoup moins le zarma. Ce n’est pas la langue qui pose problème, ce sont les données qui manquent : la qualité varie donc selon les langues. Une personne qui parle la langue relit toujours avant la diffusion."
      },
      {
        "question": "Un vocal d’un « cousin » demande un transfert urgent par mobile money. Quel est le bon réflexe ?",
        "options": [
          { "key": "A", "text": "Envoyer vite, c’est urgent" },
          { "key": "B", "text": "Rappeler ce cousin sur son numéro habituel" },
          { "key": "C", "text": "Répondre par un vocal" },
          { "key": "D", "text": "Transférer le message à la famille" }
        ],
        "answer": "B",
        "explanation": "Des escrocs imitent déjà des voix avec l’IA, et l’urgence sert à vous empêcher de réfléchir. Répondre au même vocal ou faire circuler le message ne prouve rien. Rappeler la personne sur le numéro que vous connaissez permet de vérifier que c’est bien elle avant d’envoyer le moindre franc."
      }
    ],
    "reflection": "Dans votre métier, ou dans celui que vous préparez, quelle tâche confieriez-vous volontiers en partie à l’IA, et quelle part de votre savoir de terrain aucune machine ne pourra remplacer ?",
    "glossary": [
      {
        "term": "IA générative",
        "definition": "Une IA qui produit un contenu nouveau (texte, image, son) à partir d’une demande. Selon l’OIT (2023), elle touche surtout les tâches des emplois de bureau."
      },
      {
        "term": "Tâche",
        "definition": "Une activité précise à l’intérieur d’un métier : rédiger un courrier, trier des fiches, conseiller un client. Un métier est un panier de tâches, et l’IA en change d’abord certaines."
      },
      {
        "term": "Source",
        "definition": "Le document d’origine (rapport, article, page officielle) qui permet de vérifier une information. Un lien ne devient une preuve qu’une fois ouvert et lu."
      },
      {
        "term": "Agent de vulgarisation agricole",
        "definition": "Un professionnel qui conseille les agriculteurs sur le terrain. C’est lui qui confirme un diagnostic de maladie proposé par une application avant tout traitement."
      },
      {
        "term": "Traduction automatique",
        "definition": "Une traduction faite par une machine, par exemple Google Traduction. Sa qualité varie selon les langues : elle se fait toujours relire par quelqu’un qui parle la langue."
      },
      {
        "term": "Deepfake (hypertrucage)",
        "definition": "Une fausse image, vidéo ou voix très réaliste fabriquée avec l’IA, qui fait dire ou faire à quelqu’un ce qu’il n’a jamais dit ni fait."
      }
    ]
  },
  "en": {
    "id": "is5",
    "lessonNumber": 5,
    "title": "What AI Is Changing in Africa — saying what it changes for your job",
    "objective": "By the end of this lesson, you will be able to say what AI is changing for your job, or for the one you are training for. You will recognise real uses of AI already present in Africa, in health, farming and studying, and look its risks in the face. You will also be able to ask an assistant with web search for a balance sheet of opportunities and risks, check its sources one by one, then complete it with your own experience on the ground.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Neither dream nor fear: real uses, already on the ground",
        "body": "You often hear two stories. The first: “AI is for rich countries, not for us.” The second: “AI is going to replace everyone.” Both are wrong. Open Google Translate on a phone: it translates from French into Hausa. Not perfectly, but for real. And in 2024, the African Union approved a continental strategy for artificial intelligence: the continent is not a spectator. Still, nothing happens automatically. It is like the rainy season: it comes for everyone, but the harvest depends on what each person sows.\n\nIn health, the World Health Organization (WHO) has recommended since 2021 AI software that helps read lung X-rays to screen for tuberculosis. The software flags the images that deserve a second look; the doctor keeps the decision. In farming, apps can recognise a plant disease from a simple photo. A cocoa farmer near Daloa, in Côte d’Ivoire, or a market gardener near Bobo-Dioulasso, in Burkina Faso, photographs a spotted leaf and gets a lead. A lead, not a verdict: you always confirm with an agricultural extension officer before treating a field.\n\nFor studying, an assistant such as Gemini, ChatGPT or Claude can act as a tutor, at any hour. A student in Cotonou, Benin, asks it to explain an accounting idea with an example from the market, then to ask her three questions to check she has understood. The tutor does not sit the exam for her: it makes her work. In all three fields the rule is the same: AI helps, humans check and decide."
      },
      {
        "title": "Our languages: progress, but not yet won",
        "body": "Hausa, Wolof and Swahili are already offered by several translation tools and assistants. Zarma, spoken in Niger, and many other languages of the continent are offered far less. The language is not the problem: the missing data is. Remember Lesson 2: an AI learns from examples. A language that is rarely written on the Internet gives it few examples, and so more fragile translations.\n\nAfrican researchers and communities are building the missing data: they record voices, transcribe conversations and translate texts. It is like filling a library, book after book: every sentence added helps the machine understand the language a little better. The progress is real, but it moves at different speeds depending on the language.\n\nIn the meantime, one simple rule: a machine translation into our languages is always reread by someone who speaks the language before it is shared. A prevention message in Swahili for a health centre in Mombasa, Kenya, or a notice to parents in Wolof in Thiès: the machine writes the first draft, a speaker of the language approves it. Quality varies from one language to another, and sometimes from one sentence to the next."
      },
      {
        "title": "Work changes first through tasks",
        "body": "A job is a basket of tasks: writing, summarising, sorting, translating, advising, repairing, selling. According to the International Labour Organization (ILO, 2023), generative AI mainly transforms tasks rather than wiping out entire jobs. Think of the calculator: it did not make traders disappear, it changed the way they do their accounts. Writing, summarising, sorting, translating: these tasks are done more and more with AI.\n\nA quick prediction: which jobs does generative AI affect most, manual trades or office jobs? The ILO’s answer (2023): office jobs. Data entry, filing, writing letters: these tasks change first. Why? Generative AI works on words and numbers, not on soil, wood or fabric. An administrative assistant in Lomé, Togo, will see the way she writes letters change long before a carpenter in Kinshasa, DRC, sees his workshop change. And most of the time, AI transforms work more than it removes it.\n\nWhat gains value: knowing how to ask (the RCTF method from Lesson 4), how to check, and how to adapt to the realities on the ground. AI knows neither your soils, nor your rains, nor your customers. You do. In Thiès, Niamey or Garoua, that field knowledge combined with AI becomes a strength. To draw up your own balance sheet, list the tasks of your job one by one and ask yourself which ones are mostly about words or numbers."
      },
      {
        "title": "The risks, faced head-on",
        "body": "Scammers are already imitating voices with AI. A voice note that sounds like a cousin asks for an urgent transfer by Orange Money, Wave, M-Pesa or MTN MoMo. The right reflex: send nothing and call the person back on their usual number. People also produce fake images and fake videos that look very real, called “deepfakes”: a politician, a celebrity or a well-known trader appears to say something they never said. Before sharing a shocking video in a WhatsApp group, ask yourself where it comes from.\n\nTwo other risks are less visible. First, our data often travels to distant servers: what you type into an assistant does not stay in your phone. Never put a mobile money PIN, an ID number, or a customer’s or patient’s file into it. Second, we depend on tools designed elsewhere, for other realities: advice built for other soils, other rains or other laws. An accountant in Casablanca, Morocco, checks that the tax rule quoted by the AI really is the Moroccan rule.\n\nOpportunities and risks come together, like the two columns of the same table. An honest balance sheet fills in both columns, without dreams or fear. Lesson 6 will give you three simple reflexes to deal with these limits in daily life."
      }
    ],
    "example": {
      "title": "Moussa prepares a presentation: “AI and farming in Africa: opportunities and risks”",
      "challenge": "Moussa, 21, is an undergraduate at the University of Thiès, in Senegal. He wants to become an agricultural adviser; his family grows millet and onions in the Niayes area. One question worries him: with AI, will there still be work for an agricultural adviser? As it happens, his professor asks him for a presentation: “AI and farming in Africa: opportunities and risks”. What is at stake is his career choice. Moussa wants to repeat neither the dream (“AI will solve everything”) nor the fear (“AI will replace everyone”): he needs real examples, with their sources.",
      "solution": "In Gemini, in the free version with web search, Moussa pastes a four-block prompt following the RCTF method: “Role: you are an agricultural adviser who always cites your sources. Context: I am a student in Thiès, Senegal; I want to become an agricultural adviser. My family grows millet and onions. Task: make a two-column table: what AI can improve in farming in Africa, and the risks. Format: 4 rows per column, short sentences. For each real example, give your source with a link. If you are not sure, say so.” The table arrives, with links under some rows. Moussa does not take it on trust: he opens a source, searches the page for a word from the example and finds the sentence that confirms it. If it is there, the row stays; if not, he removes it. Then he follows up: “Which skills should I learn to benefit from this? Three, concrete ones.” He keeps two. Finally, in his Notes app, he writes “My AI balance sheet — 4 opportunities · 4 risks · 2 skills” and adds a row the AI did not have: “Risk: advice designed for other soils and other rains.”",
      "impact": "On the day of the presentation, Moussa presents a sourced table: four opportunities, four risks and two skills to learn. Every row he kept was checked in its source, and one row comes from his own experience on the ground. His conclusion: “AI will change some of my tasks. I am going to learn how to use it, and how to check it.” He leaves with neither a dream nor a fear, but with a concrete plan for his career."
    },
    "practice": {
      "title": "Draw up the AI balance sheet for your job",
      "instructions": [
        "Open an assistant with web search (Gemini, ChatGPT or Claude, free version) and send this prompt, replacing the brackets with your job, or the one you are training for: “Role: you are a specialist in my field who always cites your sources. Context: I am [your job or your studies] in [your city] ([your country]). I want to know what AI is changing for my work. Task: make a two-column table: what AI can improve in my work, and the risks. Format: 4 rows per column, short sentences. For each real example, give your source with a link. If you are not sure, say so.”",
        "Open at least one of the sources suggested, search the page for a word from the example (the “Find in page” function) and check that it really says what the AI claims. If it is confirmed, keep the row; if not, remove it.",
        "In a note, add one opportunity and one risk that you yourself know from the ground. Then choose two skills to learn and write down where to learn them: a course, someone you know, a professional association."
      ],
      "observation": "You notice that a link proves nothing until you have opened it: some rows are confirmed, others are not. Your final balance sheet mixes what the AI found with what only you know from the ground. It also shows that AI first changes some tasks of your job, not the whole job."
    },
    "quiz": [
      {
        "question": "According to the ILO (2023), which jobs does generative AI affect most?",
        "options": [
          { "key": "A", "text": "Manual trades" },
          { "key": "B", "text": "Office jobs" },
          { "key": "C", "text": "Only farming" },
          { "key": "D", "text": "No jobs at all" }
        ],
        "answer": "B",
        "explanation": "The International Labour Organization (2023) shows that office jobs are the most exposed. Generative AI works on words and numbers: data entry, filing or writing letters are the tasks that change first, long before work with soil, wood or fabric."
      },
      {
        "question": "Which sentence best sums up the effect of AI on work, according to the ILO (2023)?",
        "options": [
          { "key": "A", "text": "It mainly transforms tasks" },
          { "key": "B", "text": "It wipes out most jobs" },
          { "key": "C", "text": "It has no effect in Africa" },
          { "key": "D", "text": "It replaces all office jobs" }
        ],
        "answer": "A",
        "explanation": "A job is a basket of tasks. According to the ILO (2023), generative AI mainly transforms some of those tasks rather than wiping out entire jobs. What gains value: knowing how to ask, how to check and how to adapt to the realities on the ground."
      },
      {
        "question": "An app detects a disease on the photo of a millet leaf. What do you do?",
        "options": [
          { "key": "A", "text": "You treat the field straight away" },
          { "key": "B", "text": "You share the diagnosis in the village group" },
          { "key": "C", "text": "You confirm with an agricultural extension officer" },
          { "key": "D", "text": "You ignore the app" }
        ],
        "answer": "C",
        "explanation": "Diagnosis from a photo is real progress, but it is a lead, not a verdict. Treating a field or alerting the whole village on the basis of a mistake is costly; ignoring the tool wastes useful help. You always confirm with an agricultural extension officer before acting."
      },
      {
        "question": "Why should a machine translation into Hausa, Wolof or Zarma be reread?",
        "options": [
          { "key": "A", "text": "Because it is forbidden" },
          { "key": "B", "text": "Because AI refuses these languages" },
          { "key": "C", "text": "It is not useful" },
          { "key": "D", "text": "Because quality varies from one language to another" }
        ],
        "answer": "D",
        "explanation": "Several tools already offer Hausa or Wolof, far fewer offer Zarma. The language is not the problem, the missing data is: so quality varies from one language to another. Someone who speaks the language always rereads before the text is shared."
      },
      {
        "question": "A voice note from a “cousin” asks for an urgent mobile money transfer. What is the right reflex?",
        "options": [
          { "key": "A", "text": "Send it fast, it is urgent" },
          { "key": "B", "text": "Call this cousin back on their usual number" },
          { "key": "C", "text": "Reply with a voice note" },
          { "key": "D", "text": "Forward the message to the family" }
        ],
        "answer": "B",
        "explanation": "Scammers are already imitating voices with AI, and urgency is used to stop you thinking. Replying to the same voice note or passing the message around proves nothing. Calling the person back on the number you know lets you check it really is them before you send a single coin."
      }
    ],
    "reflection": "In your job, or the one you are training for, which task would you gladly hand over in part to AI, and which part of your field knowledge will no machine ever be able to replace?",
    "glossary": [
      {
        "term": "Generative AI",
        "definition": "An AI that produces new content (text, image, sound) from a request. According to the ILO (2023), it mainly affects the tasks of office jobs."
      },
      {
        "term": "Task",
        "definition": "A specific activity within a job: writing a letter, sorting records, advising a customer. A job is a basket of tasks, and AI changes some of them first."
      },
      {
        "term": "Source",
        "definition": "The original document (report, article, official page) that lets you check a piece of information. A link only becomes proof once it has been opened and read."
      },
      {
        "term": "Agricultural extension officer",
        "definition": "A professional who advises farmers in the field. They are the one who confirms a disease diagnosis suggested by an app before any treatment."
      },
      {
        "term": "Machine translation",
        "definition": "A translation done by a machine, for example Google Translate. Its quality varies from one language to another: it is always reread by someone who speaks the language."
      },
      {
        "term": "Deepfake",
        "definition": "A very realistic fake image, video or voice made with AI, which shows someone saying or doing something they never said or did."
      }
    ]
  },
  "ha": {
    "id": "is5",
    "lessonNumber": 5,
    "title": "Abin da AI ke canzawa a Afirka — fadin abin da yake canzawa a sana’arku",
    "objective": "A karshen wannan darasi, za ku iya fadin abin da AI ke canzawa a sana’arku, ko a sana’ar da kuke shiryawa. Za ku gane hanyoyin amfani da AI na gaske da suka riga suka iso Afirka, a fannin lafiya, noma da karatu, kuma ku fuskanci hadurransa ba tare da boyewa ba. Za ku kuma iya tambayar mataimaki mai bincike a yanar gizo ya hada muku jadawalin damarmaki da hadurra, ku tantance madogararsa daya bayan daya, sannan ku cika shi da naku kwarewar a fage.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Ba mafarki ba, ba tsoro ba: amfani na gaske, tuni a fage",
        "body": "Ana yawan jin maganganu biyu. Na farko: « AI na kasashe masu arziki ne, ba namu ba. » Na biyu: « AI zai maye gurbin kowa. » Dukansu ba gaskiya ba ne. Bude Google Translate a waya: yana fassara daga Faransanci zuwa Hausa. Ba cikakke ba, amma da gaske. Kuma a 2024, Tarayyar Afirka ta amince da dabarun nahiyar baki daya kan fasahar AI: nahiyarmu ba ’yar kallo ba ce. Duk da haka, babu abin da ke faruwa da kansa. Kamar damina ce: tana zuwa wa kowa, amma girbi ya dogara da abin da kowa ya shuka.\n\nA fannin lafiya, Hukumar Lafiya ta Duniya (WHO) tana ba da shawarar amfani da manhajojin AI tun 2021, wadanda ke taimakawa wajen karanta hoton huhu (X-ray) don gano tarin fuka. Manhajar tana nuna hotunan da ke bukatar karin dubawa; likita ne ke yanke shawara. A fannin noma, wasu manhajoji suna gane cutar shuka daga hoto kawai. Manomin koko kusa da Daloa, a Côte d’Ivoire, ko mai lambun kayan lambu kusa da Bobo-Dioulasso, a Burkina Faso, yana daukar hoton ganye mai tabo ya sami alama. Alama ce, ba hukunci ba: kullum ana tabbatarwa da jami’in fadakar da manoma kafin a yi wa gona magani.\n\nDon karatu, mataimaki kamar Gemini, ChatGPT ko Claude zai iya zama malamin gida, a kowane lokaci. Wata daliba a Cotonou, a Benin, tana tambayarsa ya bayyana mata wani darasin lissafin kudi da misali daga kasuwa, sannan ya yi mata tambayoyi uku don tabbatar da ta fahimta. Malamin gida ba ya rubuta jarrabawa a madadinta: yana sa ta yi aiki. A wadannan fannoni uku, ka’ida daya ce: AI yana taimakawa, mutum ne ke tantancewa da yanke shawara."
      },
      {
        "title": "Harsunanmu: an sami ci gaba, amma ba a gama ba",
        "body": "Hausa, Wolof ko Swahili tuni wasu manhajojin fassara da mataimaka suna ba da su. Zarma, wanda ake magana da shi a Nijar, da wasu harsuna da yawa na nahiyar, ba su samu irin wannan ba sosai. Ba harshen ne matsalar ba: bayanan da ake bukata ne ba su isa ba. Ku tuna da Darasi na 2: AI yana koyo ne daga misalai. Harshen da ba a cika rubutawa a Intanet ba yana ba shi misalai kadan, don haka fassarorinsa ba su da karfi sosai.\n\nMasu bincike da al’ummomin Afirka suna gina wadannan bayanai da suka rasa: suna nadar muryoyi, suna rubuta tattaunawa, suna fassara rubuce-rubuce. Kamar cika dakin karatu ne, littafi bayan littafi: kowace jumla da aka kara tana taimaka wa na’urar ta kara fahimtar harshen. Ci gaban na gaske ne, amma yana tafiya da gudu daban-daban ya danganta da harshe.\n\nKafin nan, ga ka’ida mai sauki: duk fassarar na’ura a harsunanmu, sai wanda ke jin harshen ya sake karantawa kafin a yada ta. Sakon rigakafi da Swahili don cibiyar lafiya a Mombasa, a Kenya, ko sanarwa ga iyayen dalibai da Wolof a Thiès: na’urar tana rubuta daftarin farko, mai jin harshen ne ke amincewa. Inganci yana bambanta daga harshe zuwa harshe, wani lokaci ma daga jumla zuwa jumla."
      },
      {
        "title": "Aiki yana canzawa da farko ta kananan ayyuka",
        "body": "Sana’a kamar kwando ce cike da ayyuka: rubutu, takaitawa, tacewa, fassara, ba da shawara, gyara, sayarwa. A cewar Kungiyar Kwadago ta Duniya (ILO, 2023), AI mai kirkira (generative AI) yana canza ayyuka ne galibi, fiye da shafe sana’o’i baki daya. Ku yi tunanin na’urar lissafi: ba ta kawar da ’yan kasuwa ba, ta canza yadda suke yin lissafi. Rubutu, takaitawa, tacewa, fassara: ana kara yin wadannan ayyuka da AI.\n\nKaramin hasashe: wadanne ayyuka ne AI mai kirkira ya fi shafa, sana’o’in hannu ko ayyukan ofis? Amsar ILO (2023): ayyukan ofis. Shigar da bayanai, tsara takardu, rubuta wasiku: wadannan ayyuka ne ke fara canzawa. Me ya sa? AI mai kirkira yana aiki ne a kan kalmomi da lambobi, ba a kan kasa, itace ko yadi ba. Mataimakiyar ofis a Lomé, a Togo, za ta ga yadda take rubuta wasiku ya canza tun kafin kafinta a Kinshasa, a Kongo (RDC), ya ga bitarsa ta canza. Kuma galibi, AI yana canza aiki fiye da yadda yake kawar da shi.\n\nAbin da ke kara daraja: iya tambaya (hanyar RCTF ta Darasi na 4), iya tantancewa, da iya daidaitawa da yanayin fage. AI bai san kasarku ba, ko ruwan saman yankinku, ko abokan cinikinku. Ku kun sani. A Thiès, a Niamey ko a Garoua, wannan ilimin fage idan aka hada shi da AI ya zama karfi. Don yin naku jadawalin, ku lissafa ayyukan sana’arku daya bayan daya, ku tambayi kanku wadanne ne suka fi shafar kalmomi ko lambobi."
      },
      {
        "title": "Hadurra: a fuskance su ba tare da boyewa ba",
        "body": "’Yan damfara tuni suna kwaikwayon muryoyi da AI. Sakon murya da ke kama da na wani dan uwa yana neman a tura kudi cikin gaggawa ta Orange Money, Wave, M-Pesa ko MTN MoMo. Abin da ya dace: kada ku tura komai, ku kira mutumin a lambarsa da kuka saba. Ana kuma kera hotuna da bidiyo na bogi masu kama da na gaske, wadanda ake kira « deepfakes »: dan siyasa, fitaccen mutum ko sanannen dan kasuwa yana bayyana kamar yana fadin abin da bai taba fada ba. Kafin ku yada bidiyo mai ban mamaki a rukunin WhatsApp, ku tambayi kanku daga ina ya fito.\n\nAkwai wasu hadurra biyu da ba a ganinsu sosai. Na farko, bayananmu galibi suna zuwa sabobin (servers) da ke nesa: abin da kuke rubutawa a mataimaki ba ya tsayawa a cikin wayarku. Kada ku saka lambar sirrin kudin waya, lambar katin shaida, ko fayil din abokin ciniki ko na mara lafiya. Na biyu, muna dogara ga kayan aikin da aka kera a wasu wurare, don wasu yanayi: shawarwarin da aka tsara don wata kasa, wani ruwan sama ko wasu dokoki. Akanta a Casablanca, a Maroko, yana tabbatar da cewa dokar haraji da AI ya ambata, ta Maroko ce da gaske.\n\nDamarmaki da hadurra suna zuwa tare, kamar ginshikai biyu na jadawali guda. Jadawali na gaskiya yana cike ginshikan biyu, ba tare da mafarki ko tsoro ba. Darasi na 6 zai ba ku dabi’u uku masu sauki don fuskantar wadannan iyakoki a rayuwar yau da kullum."
      }
    ],
    "example": {
      "title": "Moussa yana shirya gabatarwa: « AI da noma a Afirka: damarmaki da hadurra »",
      "challenge": "Moussa, mai shekaru 21, dalibin digiri na farko ne a jami’ar Thiès, a Senegal. Yana son zama mai ba da shawara kan noma; iyalinsa suna noman gero da albasa a yankin Niayes. Wata tambaya tana damunsa: da zuwan AI, shin za a sami aiki ga mai ba da shawara kan noma? Sai malaminsa ya ba shi aikin gabatarwa: « AI da noma a Afirka: damarmaki da hadurra ». Abin da ke cikin hadari shi ne zabin makomarsa. Moussa ba ya son maimaita mafarki (« AI zai warware komai ») ko tsoro (« AI zai maye gurbin kowa »): yana bukatar misalai na gaske, tare da madogararsu.",
      "solution": "A cikin Gemini, sigar kyauta mai bincike a yanar gizo, Moussa ya manna umurni mai bangarori hudu bisa hanyar RCTF: « Rawa: kai mai ba da shawara ne kan noma wanda kullum yake ambaton madogararsa. Mahalli: ni dalibi ne a Thiès, a Senegal; ina son zama mai ba da shawara kan noma. Iyalina suna noman gero da albasa. Aiki: yi jadawali mai ginshikai biyu: abin da AI zai iya inganta a noma a Afirka, da hadurra. Tsari: layuka 4 a kowane ginshiki, jumloli gajeru. Ga kowane misali na gaske, ba da madogararka tare da hanyar shiga (link). Idan ba ka da tabbas, fada. » Jadawalin ya zo, tare da hanyoyin shiga a karkashin wasu layuka. Moussa bai yarda da magana kawai ba: ya bude madogara daya, ya nemi wata kalma ta misalin a shafin, ya sami jumlar da ke tabbatar da ita. Idan tana nan, layin ya tsaya; idan ba ta nan, ya cire shi. Sai ya sake tambaya: « Wadanne kwarewa ya kamata in koya don in amfana? Guda uku, na zahiri. » Ya rike guda biyu. A karshe, a manhajar Notes, ya rubuta « Jadawalin AI na — damarmaki 4 · hadurra 4 · kwarewa 2 », ya kara wani layi da AI bai kawo ba: « Hadari: shawarwarin da aka tsara don wata kasa da wani ruwan sama. »",
      "impact": "A ranar gabatarwa, Moussa ya gabatar da jadawali mai madogara: damarmaki hudu, hadurra hudu da kwarewa biyu da zai koya. Kowane layi da ya rike an tantance shi a madogararsa, kuma layi daya ya fito daga kwarewarsa ta fage. Abin da ya kammala da shi: « AI zai canza wasu daga cikin ayyukana. Zan koyi yadda zan yi amfani da shi, da yadda zan tantance shi. » Bai tafi da mafarki ko tsoro ba, sai da tsari na zahiri don makomarsa."
    },
    "practice": {
      "title": "Ku yi jadawalin AI don sana’arku",
      "instructions": [
        "Bude mataimaki mai bincike a yanar gizo (Gemini, ChatGPT ko Claude, sigar kyauta) ku aika wannan umurni, kuna maye gurbin abubuwan da ke cikin baka da sana’arku, ko wadda kuke shiryawa: « Rawa: kai kwararre ne a sana’ata wanda kullum yake ambaton madogararsa. Mahalli: ni [sana’arku ko karatunku] ne a [garinku] ([kasarku]). Ina son sanin abin da AI ke canzawa a aikina. Aiki: yi jadawali mai ginshikai biyu: abin da AI zai iya inganta a aikina, da hadurra. Tsari: layuka 4 a kowane ginshiki, jumloli gajeru. Ga kowane misali na gaske, ba da madogararka tare da hanyar shiga (link). Idan ba ka da tabbas, fada. »",
        "Bude a kalla daya daga cikin madogarar da aka ba ku, ku nemi wata kalma ta misalin a shafin (aikin « Nemo a shafi ») ku tabbatar cewa tana fadin abin da AI ya ce. Idan an tabbatar, ku rike layin; idan ba haka ba, ku cire shi.",
        "A cikin wata takarda (note), ku kara wata dama da wani hadari da ku kanku kuka sani a fage. Sannan ku zabi kwarewa biyu da za ku koya, ku rubuta inda za ku koye su: wani kwas, wani mutum a kusa da ku, wata kungiyar sana’a."
      ],
      "observation": "Za ku lura cewa hanyar shiga (link) ba ta tabbatar da komai har sai an bude ta: wasu layuka suna tabbata, wasu ba sa tabbata. Jadawalinku na karshe yana hada abin da AI ya samo da abin da ku kadai kuka sani daga fage. Yana kuma nuna cewa AI yana fara canza wasu ayyuka na sana’arku ne, ba sana’ar baki daya ba."
    },
    "quiz": [
      {
        "question": "A cewar ILO (2023), wadanne ayyuka ne AI mai kirkira ya fi shafa?",
        "options": [
          { "key": "A", "text": "Sana’o’in hannu" },
          { "key": "B", "text": "Ayyukan ofis" },
          { "key": "C", "text": "Noma kawai" },
          { "key": "D", "text": "Babu wani aiki" }
        ],
        "answer": "B",
        "explanation": "Kungiyar Kwadago ta Duniya (2023) ta nuna cewa ayyukan ofis ne suka fi fuskantar tasiri. AI mai kirkira yana aiki ne a kan kalmomi da lambobi: shigar da bayanai, tsara takardu ko rubuta wasiku su ne ayyukan da ke fara canzawa, tun kafin aikin kasa, itace ko yadi."
      },
      {
        "question": "Wace jumla ce ta fi takaita tasirin AI a kan aiki, a cewar ILO (2023)?",
        "options": [
          { "key": "A", "text": "Yana canza ayyuka ne galibi" },
          { "key": "B", "text": "Yana shafe yawancin sana’o’i" },
          { "key": "C", "text": "Ba shi da wani tasiri a Afirka" },
          { "key": "D", "text": "Yana maye gurbin duk ayyukan ofis" }
        ],
        "answer": "A",
        "explanation": "Sana’a kwando ce ta ayyuka. A cewar ILO (2023), AI mai kirkira yana canza wasu daga cikin wadannan ayyuka ne galibi, fiye da shafe sana’o’i baki daya. Abin da ke kara daraja: iya tambaya, iya tantancewa da iya daidaitawa da yanayin fage."
      },
      {
        "question": "Wata manhaja ta nuna cuta a hoton ganyen gero. Me za ku yi?",
        "options": [
          { "key": "A", "text": "Za ku yi wa gonar magani nan take" },
          { "key": "B", "text": "Za ku yada sakamakon a rukunin kauye" },
          { "key": "C", "text": "Za ku tabbatar da jami’in fadakar da manoma" },
          { "key": "D", "text": "Za ku yi watsi da manhajar" }
        ],
        "answer": "C",
        "explanation": "Gano cuta daga hoto ci gaba ne na gaske, amma alama ce, ba hukunci ba. Yi wa gona magani ko tayar da hankalin kauye baki daya bisa kuskure yana da tsada; yin watsi da manhajar kuma yana hana taimako mai amfani. Kullum ana tabbatarwa da jami’in fadakar da manoma kafin a dauki mataki."
      },
      {
        "question": "Me ya sa ake sake karanta fassarar na’ura a Hausa, Wolof ko Zarma?",
        "options": [
          { "key": "A", "text": "Saboda an haramta" },
          { "key": "B", "text": "Saboda AI yana kin wadannan harsuna" },
          { "key": "C", "text": "Ba shi da amfani" },
          { "key": "D", "text": "Saboda inganci yana bambanta daga harshe zuwa harshe" }
        ],
        "answer": "D",
        "explanation": "Wasu manhajoji tuni suna ba da Hausa ko Wolof, amma Zarma ba sosai ba. Ba harshen ne matsalar ba, bayanan da ake bukata ne ba su isa ba: don haka inganci yana bambanta daga harshe zuwa harshe. Wanda ke jin harshen ne kullum yake sake karantawa kafin a yada."
      },
      {
        "question": "Sakon murya daga wani « dan uwa » yana neman a tura kudi ta kudin waya cikin gaggawa. Mene ne abin da ya dace?",
        "options": [
          { "key": "A", "text": "A tura da sauri, gaggawa ce" },
          { "key": "B", "text": "A kira wannan dan uwan a lambarsa da aka saba" },
          { "key": "C", "text": "A amsa da sakon murya" },
          { "key": "D", "text": "A tura sakon ga iyali" }
        ],
        "answer": "B",
        "explanation": "’Yan damfara tuni suna kwaikwayon muryoyi da AI, kuma ana amfani da gaggawa don hana ku tunani. Amsa wa sakon murya iri daya ko yada sakon ba ya tabbatar da komai. Kiran mutumin a lambar da kuka sani yana ba ku damar tabbatar da cewa shi ne kafin ku tura ko sisi."
      }
    ],
    "reflection": "A sana’arku, ko a wadda kuke shiryawa, wane aiki za ku so ku ba AI wani bangare nasa, kuma wane bangare na ilimin fagenku ne babu wata na’ura da za ta iya maye gurbinsa?",
    "glossary": [
      {
        "term": "IA générative (AI mai kirkira)",
        "definition": "AI da ke samar da sabon abu (rubutu, hoto, sauti) bisa ga bukata. A cewar ILO (2023), ya fi shafar ayyukan ofis."
      },
      {
        "term": "Tâche (karamin aiki)",
        "definition": "Wani takamaiman aiki a cikin sana’a: rubuta wasika, tace takardu, ba abokin ciniki shawara. Sana’a kwando ce ta ayyuka, kuma AI yana fara canza wasu daga cikinsu."
      },
      {
        "term": "Source (madogara)",
        "definition": "Asalin takarda (rahoto, makala, shafin hukuma) da ke ba da damar tantance wani bayani. Hanyar shiga (link) ba ta zama hujja ba sai an bude ta an karanta."
      },
      {
        "term": "Agent de vulgarisation agricole (jami’in fadakar da manoma)",
        "definition": "Kwararre ne da ke ba manoma shawara a fage. Shi ne ke tabbatar da cutar da wata manhaja ta nuna kafin a yi kowane magani."
      },
      {
        "term": "Traduction automatique (fassarar na’ura)",
        "definition": "Fassarar da na’ura ke yi, misali Google Translate. Ingancinta yana bambanta daga harshe zuwa harshe: kullum sai wanda ke jin harshen ya sake karanta ta."
      },
      {
        "term": "Deepfake (hoto, bidiyo ko murya na bogi)",
        "definition": "Hoto, bidiyo ko murya na bogi mai kama da na gaske da aka kera da AI, wanda ke nuna wani yana fadin ko yin abin da bai taba fada ko yi ba."
      }
    ]
  }
};
