import { Language } from '../../translations';
import { LessonContent } from '../../lessonContent';

// Module « Choisir le bon outil IA gratuit et installer une IA open source » (outils-ia-gratuits) — leçon og5 (IA open source sur téléphone, hors connexion)
// Texte aligné sur le CLAUDE.md de production vidéo du cours 15 (docs/production-video/claude-md/).
// Trilingue FR / EN / HA. ⚠️ Traductions HA à faire valider par un locuteur natif haoussa.
export const ogLesson5: Record<Language, LessonContent> = {
  "fr": {
    "id": "og5",
    "lessonNumber": 5,
    "title": "Installer une IA open source sur votre téléphone, pour l’utiliser hors connexion",
    "objective": "À la fin de cette leçon, vous saurez installer une IA open source sur votre téléphone et l’utiliser sans connexion, même en mode avion. Vous saurez expliquer pourquoi un modèle installé garde vos questions dans votre téléphone, choisir le plus petit modèle que votre appareil supporte et le télécharger une seule fois, en wifi. Vous connaîtrez aussi ses limites : des réponses plus simples, à vérifier, de la place et de la batterie consommées, et aucune information récente sans Internet.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Sans réseau, une IA installée sur votre téléphone continue de répondre",
        "body": "Quand vous écrivez à Gemini, ChatGPT ou Claude, votre question quitte votre téléphone. Elle voyage par le réseau jusqu’à un serveur, un grand ordinateur installé loin de vous, qui calcule la réponse et vous la renvoie. C’est comme commander un plat par téléphone à un restaurant de l’autre côté de la ville : tant que la ligne passe, tout va bien ; si elle coupe, rien n’arrive. Dans un bus entre deux villes, dans un village mal couvert ou pendant une panne de réseau, l’assistant en ligne reste muet.\n\nD’où un malentendu répandu : « sans réseau, pas d’IA ». C’est faux. Un modèle d’IA peut aussi tourner directement dans votre téléphone, comme un cuisinier qui travaille dans votre propre cuisine. La question ne sort pas de l’appareil, la réponse est calculée sur place, et le réseau n’est plus nécessaire une fois tout installé.\n\nPensez à une étudiante de Bouaké, en Côte d’Ivoire, qui révise dans un quartier où le réseau va et vient, à un animateur d’association au Kasaï, en RDC, qui prépare une causerie entre deux villages, ou à un enseignant de Ségou, au Mali, qui prépare ses cours sans forfait de données. Tous ont le même besoin : une aide qui ne dépend ni du réseau ni du crédit internet. C’est exactement ce que permet une IA installée."
      },
      {
        "title": "Un modèle open source est un fichier que vous téléchargez sur votre téléphone",
        "body": "Souvenez-vous de la Leçon 1 : l’application n’est pas le modèle. L’application, c’est la vitrine, l’écran où vous tapez ; le modèle, c’est le cerveau qui fabrique la réponse. Ce cerveau est en réalité un gros fichier. Certains modèles restent enfermés chez l’entreprise qui les a créés. D’autres sont « open source », c’est-à-dire ouverts : leurs fichiers se téléchargent librement, comme une recette publiée que chacun peut recopier et cuisiner chez soi.\n\nPlusieurs familles de modèles ouverts existent : Gemma, publiée par Google, mais aussi Qwen, Llama ou Mistral. Attention à une confusion fréquente : Gemma n’est pas le modèle qui répond dans l’application Gemini. C’est une famille à part, que Google met à disposition pour qu’on l’installe soi-même. Chaque famille a sa propre licence d’utilisation ; nous en reparlerons à la Leçon 6.\n\nUne fois installé, un modèle ouvert vous apporte trois avantages. Vos questions restent dans votre téléphone : rien ne part vers un serveur, ce qui prolonge la protection des données vue à la Leçon 4. Il est gratuit : pas d’abonnement, et pas de données mobiles consommées à chaque question. Et il répond sans connexion, même en mode avion. Pour le faire tourner, il faut une application qui sert d’atelier : Google AI Edge Gallery, gratuite, sur Android et sur iPhone, ou PocketPal AI, elle aussi sur les deux."
      },
      {
        "title": "Choisir le plus petit modèle que votre téléphone supporte, puis le télécharger en wifi",
        "body": "Un modèle prend de la place. Un petit modèle prévu pour téléphone pèse environ 2,5 Go, autant que des centaines de photos ou qu’un long film. Et il ne se contente pas de dormir dans le stockage : quand il travaille, il occupe aussi la mémoire vive du téléphone, cet espace de travail temporaire où l’appareil pose ce qu’il est en train de faire. C’est la table de l’atelier : si elle est trop petite pour l’ouvrage du jour, tout ralentit.\n\nD’où la règle : le meilleur modèle, c’est celui que votre appareil supporte et qui correspond à votre usage. Avant tout, ouvrez les réglages, rubrique stockage, et regardez l’espace libre ; gardez de la marge pour vos photos et vos mises à jour. Puis, dans l’application, prenez le plus petit modèle proposé. Les plus gros donnent parfois de meilleures réponses, mais sur un téléphone modeste ils peuvent ramer, faire chauffer l’appareil ou fermer l’application. Fermez aussi les autres applications avant de discuter avec le modèle.\n\nLe téléchargement se fait une seule fois, en wifi : à la maison, chez un ami, à l’université ou dans un espace numérique. Un commerçant de Cotonou, au Bénin, peut ainsi télécharger son modèle un samedi au cybercafé, puis l’utiliser toute la semaine sans toucher à son forfait. Ensuite, le modèle reste dans le téléphone : vous passez en mode avion, vous ouvrez une conversation, et il répond."
      },
      {
        "title": "Les limites d’une IA installée : réponses plus simples, place, batterie et pas d’actualité",
        "body": "Soyons honnêtes : un petit modèle n’a pas la puissance des grands assistants en ligne. Ses réponses sont plus simples, plus courtes, et parfois fausses, même quand elles sonnent juste. C’est comme un répétiteur débutant : utile pour expliquer une notion ou vous interroger, mais pas une référence absolue. Vérifiez toujours avec votre cours, votre manuel ou un document de référence, surtout pour un chiffre, une date ou une définition.\n\nIl a aussi un coût matériel. Il occupe environ 2,5 Go de stockage tant que vous le gardez, et il consomme de la batterie quand il réfléchit, d’autant plus que la réponse est longue. Pour un long trajet, partez avec un téléphone chargé, ou une batterie externe. Si vous ne vous en servez plus, supprimez le modèle dans l’application pour libérer la place.\n\nDernière limite, la plus importante : en mode avion, votre IA n’a pas accès à Internet, et ses connaissances s’arrêtent à son entraînement. Demandez-lui la date limite d’une bourse de cette année ou les résultats d’un concours publiés hier : elle peut vous donner une date ancienne, ou carrément inventée. Pour une information récente, faites une recherche sourcée, comme à la Leçon 3, une fois connecté. L’IA installée sert à comprendre, reformuler et s’entraîner ; pas à connaître l’actualité."
      }
    ],
    "example": {
      "title": "Koffi révise dans le bus entre Lomé et son village, téléphone en mode avion",
      "challenge": "Koffi est étudiant en licence à Lomé, au Togo. Quand il rentre dans son village, il profite du trajet en bus pour réviser ses examens sur son téléphone. Mais le réseau disparaît souvent en route : son assistant en ligne tourne dans le vide, puis ne répond plus. Il veut pouvoir réviser partout, sans dépendre du réseau ni de son forfait de données.",
      "solution": "Chez lui, Koffi vérifie l’espace libre de son téléphone Android, installe Google AI Edge Gallery depuis le Play Store et choisit le plus petit modèle Gemma proposé. Il le télécharge une seule fois, en wifi. Dans le bus, il passe en mode avion, ouvre une conversation et tape sa consigne en quatre blocs RCTF : « Rôle : tu es un tuteur patient pour un étudiant en licence. Contexte : je révise mon examen d’économie sur mon téléphone, sans connexion. Tâche : explique la loi de l’offre et de la demande avec un exemple simple tiré d’un marché, puis pose-moi 3 questions pour me tester. Format : 10 lignes au plus, phrases courtes, sans les réponses aux questions. » La réponse arrive, toujours en mode avion : une explication simple, un exemple de marché, puis trois questions. Il la compare ensuite à son cours. Un camarade équipé d’un iPhone fait de même avec PocketPal AI.",
      "impact": "Koffi révise désormais dans le bus, téléphone en mode avion : son IA installée lui explique son cours et lui pose des questions, sans réseau et sans toucher à son forfait. Ses questions restent dans son téléphone. Il a pris l’habitude de vérifier chaque réponse avec son cours, et de garder les questions d’actualité, comme les dates limites de bourse, pour une recherche sourcée une fois connecté."
    },
    "practice": {
      "title": "Installez une IA sur votre téléphone et testez-la en mode avion",
      "instructions": [
        "Vérifiez l’espace libre de votre téléphone (réglages, rubrique stockage), puis installez Google AI Edge Gallery ou PocketPal AI depuis le Play Store ou l’App Store.",
        "En wifi, ouvrez l’application et téléchargez le plus petit modèle proposé, une seule fois.",
        "Passez en mode avion, ouvrez une conversation et posez une question de révision ou de travail avec cette consigne RCTF, en remplaçant les crochets (adaptez le rôle et le contexte si vous n’êtes pas étudiant) : Rôle : tu es un tuteur patient pour un étudiant en licence. Contexte : je révise mon examen de [matière] sur mon téléphone, sans connexion. Tâche : explique [la notion, par exemple la loi de l’offre et de la demande] avec un exemple simple tiré d’un marché, puis pose-moi [3] questions pour me tester. Format : [10] lignes au plus, phrases courtes, sans les réponses aux questions. Vérifiez ensuite la réponse avec votre cours ou un document de référence."
      ],
      "observation": "Vous constatez que la réponse arrive alors que l’icône du mode avion est affichée : le modèle tourne bien dans votre téléphone. La réponse est plus simple que celle d’un grand assistant en ligne, et votre vérification montre ce qui est juste, incomplet ou faux. Vous voyez aussi, dans les réglages de stockage, la place occupée par le modèle."
    },
    "quiz": [
      {
        "question": "Quel avantage apporte une IA installée sur votre téléphone ?",
        "options": [
          { "key": "A", "text": "Elle connaît l’actualité du jour" },
          { "key": "B", "text": "Vos questions restent dans votre téléphone, et elle répond sans connexion" },
          { "key": "C", "text": "Elle crée des vidéos" },
          { "key": "D", "text": "Elle remplace votre professeur" }
        ],
        "answer": "B",
        "explanation": "Le modèle tourne dans le téléphone : vos questions ne partent vers aucun serveur, et il répond même en mode avion. Il ne connaît pas l’actualité, ne fabrique pas de vidéos et ne remplace pas un enseignant : c’est un outil de révision, à vérifier."
      },
      {
        "question": "Le téléphone de Koffi a peu d’espace libre. Quel modèle choisit-il ?",
        "options": [
          { "key": "A", "text": "Le plus gros, pour avoir de meilleures réponses" },
          { "key": "B", "text": "Tous les modèles proposés, pour comparer" },
          { "key": "C", "text": "Le plus petit modèle proposé par l’application" },
          { "key": "D", "text": "Un modèle prévu pour ordinateur" }
        ],
        "answer": "C",
        "explanation": "Le meilleur modèle, c’est celui que votre appareil supporte. Un petit modèle pèse déjà environ 2,5 Go et a besoin de mémoire pour tourner. Un gros modèle, plusieurs modèles à la fois ou un modèle prévu pour ordinateur risquent de remplir le téléphone, de le ralentir ou de faire fermer l’application."
      },
      {
        "question": "Quand Koffi doit-il télécharger le modèle ?",
        "options": [
          { "key": "A", "text": "Une seule fois, en wifi, avant de partir" },
          { "key": "B", "text": "À chaque nouvelle question" },
          { "key": "C", "text": "Une fois en mode avion" },
          { "key": "D", "text": "Chaque matin, avec ses données mobiles" }
        ],
        "answer": "A",
        "explanation": "Le modèle se télécharge une seule fois, en wifi, puis il reste dans le téléphone. En mode avion, aucun téléchargement n’est possible, et le refaire chaque matin avec les données mobiles viderait inutilement le forfait."
      },
      {
        "question": "La réponse du petit modèle paraît juste, mais très simple. Que fait Koffi ?",
        "options": [
          { "key": "A", "text": "Il la recopie sans la relire" },
          { "key": "B", "text": "Il supprime l’application" },
          { "key": "C", "text": "Il la partage à toute sa classe" },
          { "key": "D", "text": "Il la vérifie avec son cours" }
        ],
        "answer": "D",
        "explanation": "Un petit modèle donne des réponses plus simples, et parfois fausses même quand elles sonnent juste. La bonne habitude est de vérifier avec son cours ou un document de référence avant de s’en servir ou de la partager. Inutile pour autant de supprimer l’outil : il reste utile pour s’entraîner."
      },
      {
        "question": "En mode avion, Koffi demande la date limite d’une bourse de cette année. Que se passe-t-il ?",
        "options": [
          { "key": "A", "text": "L’IA installée va chercher la date sur Internet" },
          { "key": "B", "text": "La réponse est forcément exacte" },
          { "key": "C", "text": "Sans Internet, la réponse peut être ancienne ou inventée : il fera une recherche sourcée une fois connecté" },
          { "key": "D", "text": "L’application refuse de s’ouvrir" }
        ],
        "answer": "C",
        "explanation": "En mode avion, l’IA installée n’a pas accès à Internet : ses connaissances s’arrêtent à son entraînement. Elle peut répondre, mais avec une date ancienne ou inventée. Pour une information récente, on fait une recherche sourcée, comme à la Leçon 3, une fois connecté."
      }
    ],
    "reflection": "Dans quelle situation de votre quotidien (un trajet, une panne de réseau, une question que vous préférez garder pour vous) une IA installée sur votre téléphone vous rendrait-elle le plus service, et comment vérifieriez-vous ses réponses ?",
    "glossary": [
      { "term": "Modèle", "definition": "Le « cerveau » qui fabrique les réponses d’une IA. C’est un gros fichier, distinct de l’application, qui ne sert que d’écran pour lui parler." },
      { "term": "Open source", "definition": "Se dit d’un modèle ouvert, dont les fichiers se téléchargent librement pour être installés sur son propre appareil, comme une recette publiée que chacun peut cuisiner chez soi. Exemples de familles : Gemma, Qwen, Llama, Mistral." },
      { "term": "IA installée", "definition": "Une IA dont le modèle tourne directement dans votre téléphone ou votre ordinateur, sans serveur distant. Vos questions restent sur l’appareil et elle répond sans connexion. On parle aussi d’IA locale." },
      { "term": "Espace de stockage", "definition": "La place disponible dans votre téléphone pour garder applications, photos et fichiers, mesurée en gigaoctets (Go). Un petit modèle pour téléphone en occupe environ 2,5 Go." },
      { "term": "Mémoire vive", "definition": "L’espace de travail temporaire du téléphone, comme la table d’un atelier où l’on pose l’ouvrage en cours. Un modèle en a besoin pour tourner ; s’il en manque, tout ralentit." },
      { "term": "Mode avion", "definition": "Réglage du téléphone qui coupe le réseau mobile et le wifi (vérifiez que le wifi est bien éteint). Si une IA répond en mode avion, c’est la preuve qu’elle tourne dans le téléphone." }
    ]
  },
  "en": {
    "id": "og5",
    "lessonNumber": 5,
    "title": "Install an open source AI on your phone, to use it offline",
    "objective": "By the end of this lesson, you will know how to install an open source AI on your phone and use it without a connection, even in airplane mode. You will be able to explain why an installed model keeps your questions on your phone, choose the smallest model your device can handle and download it only once, over wifi. You will also know its limits: simpler answers that need checking, storage and battery use, and no recent information without the Internet.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "With no network, an AI installed on your phone keeps answering",
        "body": "When you write to Gemini, ChatGPT or Claude, your question leaves your phone. It travels over the network to a server, a large computer located far away, which works out the answer and sends it back. It is like ordering a meal by phone from a restaurant across town: as long as the line holds, all is well; if it drops, nothing arrives. On a bus between two towns, in a village with poor coverage or during a network outage, the online assistant goes silent.\n\nHence a common misunderstanding: “no network, no AI”. That is wrong. An AI model can also run directly on your phone, like a cook working in your own kitchen. The question never leaves the device, the answer is worked out on the spot, and the network is no longer needed once everything is installed.\n\nThink of a student in Bouaké, Côte d’Ivoire, revising in a neighbourhood where the signal comes and goes, an association worker in Kasai, DR Congo, preparing a community talk between two villages, or a teacher in Ségou, Mali, preparing lessons without a data bundle. They all share the same need: help that depends neither on the network nor on mobile data credit. That is exactly what an installed AI makes possible."
      },
      {
        "title": "An open source model is a file you download to your phone",
        "body": "Remember Lesson 1: the app is not the model. The app is the shop window, the screen where you type; the model is the brain that produces the answer. That brain is actually a large file. Some models stay locked inside the company that created them. Others are “open source”, meaning open: their files can be downloaded freely, like a published recipe that anyone can copy and cook at home.\n\nSeveral families of open models exist: Gemma, released by Google, as well as Qwen, Llama or Mistral. Beware of a common confusion: Gemma is not the model that answers in the Gemini app. It is a separate family that Google makes available for people to install themselves. Each family has its own licence; we will come back to this in Lesson 6.\n\nOnce installed, an open model gives you three advantages. Your questions stay on your phone: nothing goes to a server, which extends the data protection you saw in Lesson 4. It is free: no subscription, and no mobile data used for each question. And it answers without a connection, even in airplane mode. To run it, you need an app that acts as a workshop: Google AI Edge Gallery, free, on Android and iPhone, or PocketPal AI, also on both."
      },
      {
        "title": "Choose the smallest model your phone can handle, then download it over wifi",
        "body": "A model takes up space. A small model designed for phones weighs about 2.5 GB, as much as hundreds of photos or a long film. And it does not just sit in storage: when it works, it also uses the phone’s RAM, the temporary workspace where the device puts whatever it is doing. Think of it as the workshop table: if it is too small for the day’s work, everything slows down.\n\nHence the rule: the best model is the one your device can handle and that fits your use. First, open the settings, storage section, and check the free space; leave a margin for your photos and updates. Then, in the app, pick the smallest model on offer. Bigger ones sometimes give better answers, but on a modest phone they can lag, heat up the device or make the app close. Also close other apps before chatting with the model.\n\nThe download happens only once, over wifi: at home, at a friend’s, at university or in a digital hub. A shopkeeper in Cotonou, Benin, can download the model at a cybercafé on a Saturday, then use it all week without touching their data bundle. After that, the model stays on the phone: you switch to airplane mode, open a conversation, and it answers."
      },
      {
        "title": "The limits of an installed AI: simpler answers, storage, battery and no news",
        "body": "Let us be honest: a small model does not have the power of the big online assistants. Its answers are simpler, shorter, and sometimes wrong, even when they sound right. It is like a beginner tutor: useful to explain an idea or quiz you, but not an absolute reference. Always check against your course notes, your textbook or a reference document, especially for a figure, a date or a definition.\n\nIt also has a hardware cost. It takes up about 2.5 GB of storage as long as you keep it, and it drains the battery while it thinks, all the more so when the answer is long. For a long trip, set off with a charged phone or a power bank. If you no longer use it, delete the model in the app to free up space.\n\nThe last limit is the most important: in airplane mode, your AI has no access to the Internet, and its knowledge stops at its training. Ask it for this year’s deadline for a scholarship or the results of an exam published yesterday: it may give you an old date, or simply make one up. For recent information, do a sourced search, as in Lesson 3, once you are connected. An installed AI is for understanding, rephrasing and practising; not for keeping up with the news."
      }
    ],
    "example": {
      "title": "Koffi revises on the bus between Lomé and his village, phone in airplane mode",
      "challenge": "Koffi is an undergraduate student in Lomé, Togo. When he goes back to his village, he uses the bus ride to revise for his exams on his phone. But the network often disappears along the way: his online assistant spins in the void, then stops answering. He wants to be able to revise anywhere, without depending on the network or on his data bundle.",
      "solution": "At home, Koffi checks the free space on his Android phone, installs Google AI Edge Gallery from the Play Store and picks the smallest Gemma model on offer. He downloads it only once, over wifi. On the bus, he switches to airplane mode, opens a conversation and types his prompt in the four RCTF blocks: “Role: you are a patient tutor for an undergraduate student. Context: I am revising for my economics exam on my phone, offline. Task: explain the law of supply and demand with a simple example taken from a market, then ask me 3 questions to test me. Format: 10 lines at most, short sentences, without the answers to the questions.” The answer arrives, still in airplane mode: a simple explanation, a market example, then three questions. He then compares it with his course notes. A classmate with an iPhone does the same with PocketPal AI.",
      "impact": "Koffi now revises on the bus with his phone in airplane mode: his installed AI explains his course and asks him questions, with no network and without touching his data bundle. His questions stay on his phone. He has got into the habit of checking every answer against his course notes, and of keeping current-affairs questions, such as scholarship deadlines, for a sourced search once he is connected."
    },
    "practice": {
      "title": "Install an AI on your phone and test it in airplane mode",
      "instructions": [
        "Check the free space on your phone (settings, storage section), then install Google AI Edge Gallery or PocketPal AI from the Play Store or the App Store.",
        "Over wifi, open the app and download the smallest model on offer, only once.",
        "Switch to airplane mode, open a conversation and ask a revision or work question with this RCTF prompt, replacing the brackets (adapt the role and context if you are not a student): Role: you are a patient tutor for an undergraduate student. Context: I am revising for my [subject] exam on my phone, offline. Task: explain [the concept, for example the law of supply and demand] with a simple example taken from a market, then ask me [3] questions to test me. Format: [10] lines at most, short sentences, without the answers to the questions. Then check the answer against your course notes or a reference document."
      ],
      "observation": "You notice that the answer arrives while the airplane mode icon is showing: the model really is running on your phone. The answer is simpler than a big online assistant’s, and your check shows what is right, incomplete or wrong. You also see, in the storage settings, how much space the model takes up."
    },
    "quiz": [
      {
        "question": "What advantage does an AI installed on your phone bring?",
        "options": [
          { "key": "A", "text": "It knows today’s news" },
          { "key": "B", "text": "Your questions stay on your phone, and it answers without a connection" },
          { "key": "C", "text": "It creates videos" },
          { "key": "D", "text": "It replaces your teacher" }
        ],
        "answer": "B",
        "explanation": "The model runs on the phone: your questions go to no server, and it answers even in airplane mode. It does not know the news, does not make videos and does not replace a teacher: it is a revision tool whose answers need checking."
      },
      {
        "question": "Koffi’s phone has little free space. Which model does he choose?",
        "options": [
          { "key": "A", "text": "The biggest one, to get better answers" },
          { "key": "B", "text": "All the models on offer, to compare" },
          { "key": "C", "text": "The smallest model offered by the app" },
          { "key": "D", "text": "A model designed for computers" }
        ],
        "answer": "C",
        "explanation": "The best model is the one your device can handle. A small model already weighs about 2.5 GB and needs memory to run. A big model, several models at once or a model designed for computers may fill the phone, slow it down or make the app close."
      },
      {
        "question": "When should Koffi download the model?",
        "options": [
          { "key": "A", "text": "Only once, over wifi, before leaving" },
          { "key": "B", "text": "With every new question" },
          { "key": "C", "text": "Once in airplane mode" },
          { "key": "D", "text": "Every morning, with his mobile data" }
        ],
        "answer": "A",
        "explanation": "The model is downloaded only once, over wifi, then it stays on the phone. In airplane mode no download is possible, and doing it again every morning with mobile data would drain the bundle for nothing."
      },
      {
        "question": "The small model’s answer seems right, but very simple. What does Koffi do?",
        "options": [
          { "key": "A", "text": "He copies it without rereading it" },
          { "key": "B", "text": "He deletes the app" },
          { "key": "C", "text": "He shares it with his whole class" },
          { "key": "D", "text": "He checks it against his course notes" }
        ],
        "answer": "D",
        "explanation": "A small model gives simpler answers, sometimes wrong even when they sound right. The good habit is to check against your course notes or a reference document before using or sharing the answer. There is no need to delete the tool, though: it remains useful for practice."
      },
      {
        "question": "In airplane mode, Koffi asks for this year’s deadline for a scholarship. What happens?",
        "options": [
          { "key": "A", "text": "The installed AI looks up the date on the Internet" },
          { "key": "B", "text": "The answer is bound to be correct" },
          { "key": "C", "text": "Without the Internet, the answer may be old or made up: he will do a sourced search once connected" },
          { "key": "D", "text": "The app refuses to open" }
        ],
        "answer": "C",
        "explanation": "In airplane mode, the installed AI has no access to the Internet: its knowledge stops at its training. It may answer, but with an old or invented date. For recent information, do a sourced search, as in Lesson 3, once connected."
      }
    ],
    "reflection": "In which situation of your daily life (a journey, a network outage, a question you would rather keep to yourself) would an AI installed on your phone help you most, and how would you check its answers?",
    "glossary": [
      { "term": "Model", "definition": "The “brain” that produces an AI’s answers. It is a large file, separate from the app, which is only a screen for talking to it." },
      { "term": "Open source", "definition": "Describes an open model whose files can be downloaded freely and installed on your own device, like a published recipe anyone can cook at home. Example families: Gemma, Qwen, Llama, Mistral." },
      { "term": "Installed AI", "definition": "An AI whose model runs directly on your phone or computer, with no remote server. Your questions stay on the device and it answers without a connection. Also called a local AI." },
      { "term": "Storage space", "definition": "The room available on your phone to keep apps, photos and files, measured in gigabytes (GB). A small phone model takes up about 2.5 GB of it." },
      { "term": "RAM", "definition": "The phone’s temporary workspace, like the table in a workshop where the current job is laid out. A model needs it to run; if there is not enough, everything slows down." },
      { "term": "Airplane mode", "definition": "A phone setting that cuts off the mobile network and wifi (check that wifi is really off). If an AI answers in airplane mode, it proves the AI is running on the phone." }
    ]
  },
  "ha": {
    "id": "og5",
    "lessonNumber": 5,
    "title": "Shigar da AI na open source a wayarku, don amfani da ita ba tare da intanet ba",
    "objective": "A karshen wannan darasi, za ku san yadda ake shigar da AI na open source a wayarku, ku kuma yi amfani da ita ba tare da intanet ba, har ma a cikin mode avion (yanayin jirgin sama). Za ku iya bayyana dalilin da ya sa samfurin da aka shigar yake barin tambayoyinku a cikin wayarku, ku zabi mafi karamin samfurin da wayarku za ta iya dauka, ku kuma sauke shi sau daya kawai, ta wifi. Za ku kuma san iyakokinsa: amsoshi masu sauki da dole a tantance su, wurin ajiya da batir da yake cinyewa, kuma babu sabon labari idan babu intanet.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Babu sadarwa, AI da aka shigar a wayarku tana ci gaba da amsawa",
        "body": "Idan kuka rubuta wa Gemini, ChatGPT ko Claude, tambayarku tana barin wayarku. Tana tafiya ta hanyar sadarwa zuwa wata babbar kwamfuta mai nisa (server), wadda take lissafa amsar ta mayar muku. Kamar yin odar abinci ta waya daga gidan abinci da ke daya bangaren gari ne: muddin layin yana aiki, komai lafiya; idan ya yanke, babu abin da zai iso. A cikin bas tsakanin garuruwa biyu, a kauyen da sadarwa ba ta da karfi, ko lokacin da sadarwa ta dauke, mataimakin intanet yakan yi shiru.\n\nDaga nan ne aka samu wani kuskuren tunani da ya yadu: « babu sadarwa, babu AI ». Wannan ba gaskiya ba ne. Samfurin AI zai iya aiki kai tsaye a cikin wayarku, kamar mai dafa abinci da ke aiki a cikin dakin girkinku. Tambayar ba ta fita daga wayar, ana lissafa amsar a nan take, kuma ba a bukatar sadarwa bayan an gama shigar da komai.\n\nKu yi tunanin wata daliba a Bouaké, a Côte d’Ivoire, da ke bitar darasi a unguwar da sadarwa ke zuwa tana tafiya, ko wani mai aikin kungiya a Kasaï, a RDC, da ke shirya jawabin wayar da kai tsakanin kauyuka biyu, ko wani malami a Ségou, a Mali, da ke shirya darussansa ba tare da data ba. Dukkansu suna da bukata daya: taimakon da bai dogara da sadarwa ko kudin data ba. Wannan shi ne ainihin abin da AI da aka shigar take bayarwa."
      },
      {
        "title": "Samfurin open source fayil ne da kuke saukewa a wayarku",
        "body": "Ku tuna da Darasi 1: manhaja ba ita ce samfuri ba. Manhaja ita ce kanti, allon da kuke rubutu a kai; samfuri kuwa shi ne kwakwalwar da ke kirkirar amsa. Wannan kwakwalwa a zahiri babban fayil ne. Wasu samfura suna kulle a hannun kamfanin da ya kirkire su. Wasu kuma « open source » ne, wato a bude suke: ana iya sauke fayilolinsu kyauta, kamar girke-girken da aka wallafa wanda kowa zai iya kwafa ya dafa a gida.\n\nAkwai iyalan samfura a bude da dama: Gemma, wadda Google ya fitar, da kuma Qwen, Llama ko Mistral. Ku kula da wani rudani da ake yawan yi: Gemma ba ita ce samfurin da ke amsawa a cikin manhajar Gemini ba. Iyali ne na daban, wanda Google ya bayar don mutane su shigar da shi da kansu. Kowane iyali yana da lasisinsa na amfani; za mu dawo kan wannan a Darasi 6.\n\nIdan aka shigar da shi, samfuri a bude yana ba ku fa’idodi uku. Tambayoyinku suna zama a cikin wayarku: babu abin da ke tafiya zuwa server, wanda ke kara kare bayanai kamar yadda muka gani a Darasi 4. Kyauta ne: babu biyan kudin wata-wata, kuma ba a cin data a kowace tambaya. Kuma yana amsawa ba tare da intanet ba, har ma a cikin mode avion. Don ya yi aiki, ana bukatar manhajar da za ta zama masa bita: Google AI Edge Gallery, kyauta, a Android da iPhone, ko PocketPal AI, ita ma a dukkan biyun."
      },
      {
        "title": "Zabar mafi karamin samfurin da wayarku za ta iya dauka, sannan a sauke shi ta wifi",
        "body": "Samfuri yana daukar wuri. Karamin samfurin da aka yi don waya yana da nauyin kusan 2,5 Go (gigaoctet), daidai da daruruwan hotuna ko wani dogon fim. Kuma ba wai yana kwance a wurin ajiya kawai ba ne: idan yana aiki, yana kuma amfani da memori mai aiki (RAM) na wayar, wato wurin aiki na wucin gadi inda wayar ke ajiye abin da take yi. Kamar teburin bita ne: idan ya yi kankanta ga aikin yini, komai yakan yi tafiyar hawainiya.\n\nDon haka ka’idar ita ce: mafi kyawun samfuri shi ne wanda wayarku za ta iya dauka kuma ya dace da bukatarku. Da farko, ku bude saituna, bangaren wurin ajiya, ku duba sararin da ya rage; ku bar wuri don hotunanku da sabuntawa. Sannan, a cikin manhajar, ku dauki mafi karamin samfurin da aka bayar. Manyan samfura wani lokaci suna ba da amsoshi mafi kyau, amma a waya mai matsakaicin karfi suna iya yin jinkiri, su sa wayar ta yi zafi, ko su sa manhajar ta rufe. Ku kuma rufe sauran manhajoji kafin ku yi hira da samfurin.\n\nAna sauke shi sau daya kawai, ta wifi: a gida, wurin aboki, a jami’a ko a cibiyar fasahar zamani. Wani dan kasuwa a Cotonou, a Bénin, zai iya sauke samfurinsa a gidan intanet ranar Asabar, sannan ya yi amfani da shi duk mako ba tare da ya taba datarsa ba. Bayan haka, samfurin yana zama a cikin wayar: kuna kunna mode avion, ku bude hira, kuma yana amsawa."
      },
      {
        "title": "Iyakokin AI da aka shigar: amsoshi masu sauki, wurin ajiya, batir, babu sabon labari",
        "body": "Bari mu fadi gaskiya: karamin samfuri ba shi da karfin manyan mataimakan intanet. Amsoshinsa sun fi sauki, sun fi gajarta, kuma wani lokaci ba daidai ba ne, ko da sun yi kama da daidai. Kamar malamin bita mai farawa ne: yana da amfani wajen bayyana wani ra’ayi ko yi muku tambayoyi, amma ba shi ne cikakken madogara ba. Kullum ku tantance da littafin darasinku, ko wani takardar madogara, musamman idan akwai lamba, kwanan wata ko ma’ana.\n\nYana kuma da tasiri a kan na’urar. Yana daukar kusan 2,5 Go na wurin ajiya muddin kuna rike da shi, kuma yana cin batir idan yana tunani, musamman idan amsar doguwa ce. Don doguwar tafiya, ku tashi da waya mai cikakken caji, ko batir na waje (power bank). Idan ba ku amfani da shi kuma, ku goge samfurin a cikin manhajar don ku samu wuri.\n\nIyaka ta karshe, kuma mafi muhimmanci: a cikin mode avion, AI dinku ba ta da damar shiga intanet, kuma iliminta ya tsaya ne a lokacin da aka horar da ita. Ku tambaye ta ranar karshe ta neman wani tallafin karatu na bana, ko sakamakon jarrabawar da aka fitar jiya: tana iya ba ku tsohuwar rana, ko ma ta kirkiro wata. Don sabon bayani, ku yi bincike mai madogara, kamar a Darasi 3, idan kun samu intanet. AI da aka shigar tana taimakawa wajen fahimta, sake fasalta bayani da motsa jiki; ba don sanin labaran yau ba."
      }
    ],
    "example": {
      "title": "Koffi yana bitar darasi a cikin bas tsakanin Lomé da kauyensu, waya a cikin mode avion",
      "challenge": "Koffi dalibi ne na digiri na farko a Lomé, a Togo. Idan zai koma kauyensu, yakan yi amfani da tafiyar bas don bitar jarrabawarsa a wayarsa. Amma sadarwa takan dauke a hanya: mataimakinsa na intanet yana ta juyawa, sannan ya daina amsawa. Yana so ya iya yin bita a ko’ina, ba tare da dogaro da sadarwa ko datarsa ba.",
      "solution": "A gida, Koffi ya duba sararin da ya rage a wayarsa ta Android, ya shigar da Google AI Edge Gallery daga Play Store, ya kuma zabi mafi karamin samfurin Gemma da aka bayar. Ya sauke shi sau daya kawai, ta wifi. A cikin bas, ya kunna mode avion, ya bude hira, ya rubuta umurninsa cikin bangarori hudu na RCTF: « Rawa: kai malami ne mai hakuri ga dalibin digiri na farko. Mahalli: ina bitar jarrabawar tattalin arziki a wayata, ba tare da intanet ba. Aiki: bayyana ka’idar wadata da bukata (offre et demande) da misali mai sauki daga kasuwa, sannan ka yi min tambayoyi 3 don gwada ni. Tsari: layuka 10 a mafi yawa, gajerun jimloli, ba tare da amsoshin tambayoyin ba. » Amsar ta iso, har yanzu a cikin mode avion: bayani mai sauki, misalin kasuwa, sannan tambayoyi uku. Daga nan ya kwatanta ta da littafin darasinsa. Wani abokin karatunsa mai iPhone ya yi haka da PocketPal AI.",
      "impact": "Yanzu Koffi yana bitar darasi a cikin bas, waya a cikin mode avion: AI da ya shigar tana bayyana masa darasinsa kuma tana yi masa tambayoyi, babu sadarwa kuma ba tare da ya taba datarsa ba. Tambayoyinsa suna zama a cikin wayarsa. Ya saba tantance kowace amsa da littafin darasinsa, ya kuma bar tambayoyin labaran yau, kamar ranar karshe ta tallafin karatu, don bincike mai madogara idan ya samu intanet."
    },
    "practice": {
      "title": "Shigar da AI a wayarku ku gwada ta a cikin mode avion",
      "instructions": [
        "Ku duba sararin da ya rage a wayarku (saituna, bangaren wurin ajiya), sannan ku shigar da Google AI Edge Gallery ko PocketPal AI daga Play Store ko App Store.",
        "Ta wifi, ku bude manhajar ku sauke mafi karamin samfurin da aka bayar, sau daya kawai.",
        "Ku kunna mode avion, ku bude hira ku yi tambayar bita ko ta aiki da wannan umurnin RCTF, kuna maye gurbin abin da ke cikin baka (ku daidaita rawa da mahalli idan ba dalibi ba ne ku): Rawa: kai malami ne mai hakuri ga dalibin digiri na farko. Mahalli: ina bitar jarrabawar [darasi] a wayata, ba tare da intanet ba. Aiki: bayyana [ra’ayin, misali ka’idar wadata da bukata] da misali mai sauki daga kasuwa, sannan ka yi min tambayoyi [3] don gwada ni. Tsari: layuka [10] a mafi yawa, gajerun jimloli, ba tare da amsoshin tambayoyin ba. Sannan ku tantance amsar da littafin darasinku ko wata takardar madogara."
      ],
      "observation": "Za ku lura cewa amsar tana isowa alhali alamar mode avion tana nan a saman allo: samfurin yana aiki a cikin wayarku da gaske. Amsar ta fi ta babban mataimakin intanet sauki, kuma tantancewarku tana nuna abin da yake daidai, wanda bai cika ba, ko wanda ba daidai ba. Za ku kuma ga, a cikin saitunan wurin ajiya, wurin da samfurin ya dauka."
    },
    "quiz": [
      {
        "question": "Wace fa’ida AI da aka shigar a wayarku take bayarwa?",
        "options": [
          { "key": "A", "text": "Tana sanin labaran yau" },
          { "key": "B", "text": "Tambayoyinku suna zama a cikin wayarku, kuma tana amsawa ba tare da intanet ba" },
          { "key": "C", "text": "Tana kirkirar bidiyo" },
          { "key": "D", "text": "Tana maye gurbin malaminku" }
        ],
        "answer": "B",
        "explanation": "Samfurin yana aiki a cikin wayar: tambayoyinku ba sa zuwa wani server, kuma yana amsawa har a cikin mode avion. Ba ya sanin labaran yau, ba ya yin bidiyo, kuma ba ya maye gurbin malami: kayan aikin bita ne, wanda dole a tantance amsoshinsa."
      },
      {
        "question": "Wayar Koffi tana da karancin sarari. Wane samfuri zai zaba?",
        "options": [
          { "key": "A", "text": "Mafi girma, don samun amsoshi mafi kyau" },
          { "key": "B", "text": "Dukkan samfuran da aka bayar, don kwatantawa" },
          { "key": "C", "text": "Mafi karamin samfurin da manhajar ta bayar" },
          { "key": "D", "text": "Samfurin da aka yi don kwamfuta" }
        ],
        "answer": "C",
        "explanation": "Mafi kyawun samfuri shi ne wanda wayarku za ta iya dauka. Karamin samfuri ma yana da nauyin kusan 2,5 Go kuma yana bukatar memori don yin aiki. Babban samfuri, samfura da dama a lokaci daya, ko samfurin kwamfuta na iya cika wayar, su rage mata sauri, ko su sa manhajar ta rufe."
      },
      {
        "question": "Yaushe ya kamata Koffi ya sauke samfurin?",
        "options": [
          { "key": "A", "text": "Sau daya kawai, ta wifi, kafin ya tafi" },
          { "key": "B", "text": "A kowace sabuwar tambaya" },
          { "key": "C", "text": "Sau daya a cikin mode avion" },
          { "key": "D", "text": "Kowace safiya, da datar wayarsa" }
        ],
        "answer": "A",
        "explanation": "Ana sauke samfurin sau daya kawai, ta wifi, sannan ya zauna a cikin wayar. A cikin mode avion ba za a iya sauke komai ba, kuma sake saukewa kowace safiya da data zai cinye kudin data a banza."
      },
      {
        "question": "Amsar karamin samfurin tana kama da daidai, amma ta yi sauki sosai. Me Koffi zai yi?",
        "options": [
          { "key": "A", "text": "Zai kwafe ta ba tare da ya sake karanta ta ba" },
          { "key": "B", "text": "Zai goge manhajar" },
          { "key": "C", "text": "Zai raba ta ga dukkan ajinsu" },
          { "key": "D", "text": "Zai tantance ta da littafin darasinsa" }
        ],
        "answer": "D",
        "explanation": "Karamin samfuri yana ba da amsoshi masu sauki, wani lokaci ba daidai ba ko da sun yi kama da daidai. Dabi’a mai kyau ita ce a tantance da littafin darasi ko wata takardar madogara kafin a yi amfani da amsar ko a raba ta. Amma ba dole ne a goge kayan aikin ba: yana da amfani wajen motsa jiki."
      },
      {
        "question": "A cikin mode avion, Koffi ya tambayi ranar karshe ta wani tallafin karatu na bana. Me zai faru?",
        "options": [
          { "key": "A", "text": "AI da aka shigar za ta je ta nemo ranar a intanet" },
          { "key": "B", "text": "Amsar dole ce ta zama daidai" },
          { "key": "C", "text": "Ba tare da intanet ba, amsar na iya zama tsohuwa ko kirkirarriya: zai yi bincike mai madogara idan ya samu intanet" },
          { "key": "D", "text": "Manhajar za ta ki budewa" }
        ],
        "answer": "C",
        "explanation": "A cikin mode avion, AI da aka shigar ba ta da damar shiga intanet: iliminta ya tsaya a lokacin horar da ita. Tana iya amsawa, amma da tsohuwar rana ko kirkirarriya. Don sabon bayani, ana yin bincike mai madogara, kamar a Darasi 3, idan an samu intanet."
      }
    ],
    "reflection": "A wane yanayi na rayuwarku ta yau da kullum (tafiya, daukewar sadarwa, tambayar da kuka fi so ku rike wa kanku) AI da aka shigar a wayarku za ta fi taimaka muku, kuma ta yaya za ku tantance amsoshinta?",
    "glossary": [
      { "term": "Samfuri (model)", "definition": "« Kwakwalwar » da ke kirkirar amsoshin AI. Babban fayil ne, daban da manhaja, wadda allo ce kawai don yin magana da shi." },
      { "term": "Open source (a bude ga kowa)", "definition": "Ana fadin haka game da samfuri a bude, wanda ake iya sauke fayilolinsa kyauta a shigar da su a na’urar mutum, kamar girke-girken da aka wallafa wanda kowa zai iya dafawa a gida. Misalan iyalai: Gemma, Qwen, Llama, Mistral." },
      { "term": "AI da aka shigar (IA installée)", "definition": "AI wadda samfurinta yake aiki kai tsaye a cikin wayarku ko kwamfutarku, ba tare da server mai nisa ba. Tambayoyinku suna zama a cikin na’urar kuma tana amsawa ba tare da intanet ba. Ana kuma kiranta AI ta gida (IA locale)." },
      { "term": "Wurin ajiya (stockage)", "definition": "Sararin da ke cikin wayarku don ajiye manhajoji, hotuna da fayiloli, wanda ake auna shi da gigaoctet (Go). Karamin samfurin waya yana daukar kusan 2,5 Go daga ciki." },
      { "term": "Memori mai aiki (RAM)", "definition": "Wurin aiki na wucin gadi na wayar, kamar teburin bita inda ake ajiye aikin da ake yi. Samfuri yana bukatarsa don yin aiki; idan bai isa ba, komai yakan yi tafiyar hawainiya." },
      { "term": "Mode avion (yanayin jirgin sama)", "definition": "Saitin waya da ke katse sadarwar waya da wifi (ku tabbatar cewa wifi a kashe yake). Idan AI ta amsa a cikin mode avion, hujja ce cewa tana aiki a cikin wayar." }
    ]
  }
};
