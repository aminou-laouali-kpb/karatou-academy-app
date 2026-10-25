import { Language } from '../../translations';
import { LessonContent } from '../../lessonContent';

// Module « Comment créer des agents IA » (creer-agents-ia) — leçon ag8 (Projet final : créer, tester et documenter votre propre agent)
// Texte aligné sur le CLAUDE.md de production vidéo du cours 2 (docs/production-video/claude-md/).
// Trilingue FR / EN / HA. ⚠️ Traductions HA à faire valider par un locuteur natif haoussa.
export const agLesson8: Record<Language, LessonContent> = {
  "fr": {
    "id": "ag8",
    "lessonNumber": 8,
    "title": "Projet final : créer, tester et documenter votre propre agent",
    "objective": "À la fin de cette leçon, vous saurez créer, tester et documenter votre propre agent, avec la méthode adaptée. Vous saurez assembler un dossier en six pièces qui prouve que votre agent mérite confiance, et choisir parmi les cinq méthodes du cours la plus simple qui fait le travail. Vous saurez évaluer votre projet avec cinq critères (utile, juste, sûr, testé, honnête) en reliant chacun à une preuve. Ce projet final reprend tout le fil des Leçons 1 à 7 et, avec le quiz cumulatif, ouvre l’accès à votre certificat numérique vérifiable.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Un dossier en six pièces pour prouver que votre agent mérite confiance",
        "body": "Quand vous présentez un agent à une directrice, à un client ou à un collègue, une seule question compte : « Comment savoir qu’on peut lui faire confiance ? » On croit souvent qu’un bon projet, c’est un agent impressionnant, avec beaucoup d’outils et la méthode la plus puissante. Ce n’est pas ce qui est évalué. Un petit agent utile et bien testé vaut mieux qu’un grand agent jamais vérifié. Pensez à un menuisier qui livre une armoire : il montre le plan, les essais des portes et la garantie, pas seulement le bois. Des comptes gratuits et des données fictives suffisent : ni WhatsApp, ni agent persistant, ni version payante ne sont exigés.\n\nVotre dossier compte six pièces. Un : la fiche agent, avec ses six rubriques vues en Leçon 1 (objectif, instructions, outils, mémoire, déclencheur, garde-fous). Deux : la méthode choisie, et pourquoi. Trois : des captures de l’agent, ou l’export du workflow si vous avez utilisé n8n. Quatre : le tableau des dix tests, avec au moins une correction, comme en Leçon 7. Cinq : les garde-fous, écrits noir sur blanc. Six : un bilan en cinq lignes.\n\nLe bilan est la pièce la plus souvent bâclée, et pourtant la plus rassurante. Il dit ce qui marche, les limites connues, les coûts possibles (sans avancer de montant : le temps de surveillance, par exemple), qui surveille l’agent, et comment l’arrêter. C’est le mode d’emploi d’un groupe électrogène : on sait ce qu’il alimente, qui le démarre et où se trouve le bouton d’arrêt. La gérante d’une coopérative de karité à Bobo-Dioulasso, au Burkina Faso, écrirait par exemple : « Si l’agent se trompe, la responsable des ventes désactive la tâche et prévient l’équipe. »"
      },
      {
        "title": "Choisir la méthode la plus simple qui fait le travail : le fil des Leçons 1 à 6",
        "body": "La Leçon 1 a posé la base : un assistant répond, un agent agit pour un objectif. Il utilise des outils et travaille en boucle (observer, décider, agir, vérifier) jusqu’à l’objectif ou à la limite fixée. Avant de construire, trois questions : la tâche revient-elle souvent ? ses étapes changent-elles d’une fois à l’autre ? le résultat se vérifie-t-il facilement ? Puis la consigne « architecte d’agents », rédigée en RCTF (Rôle, Contexte, Tâche, Format), vous pose trois questions et rend la fiche de votre agent avec la méthode recommandée.\n\nLes cinq méthodes vont de la plus simple à la plus puissante. Méthode 1 (Leçon 2) : un projet Claude, un GPT personnalisé ou un Gem, où l’on pose une fois pour toutes des instructions et des fichiers ; l’agent agit quand vous lui parlez. Méthode 2 (Leçon 3) : une tâche planifiée, qui s’exécute seule à heure fixe. Méthode 3 (Leçon 4) : des connecteurs vers Gmail, l’agenda et Drive ; le MCP est une prise universelle entre l’IA et vos outils, et l’on applique l’accès minimum. Méthode 4 (Leçon 5) : un workflow n8n qu’un événement, comme un formulaire envoyé, met en marche. Méthode 5 (Leçon 6) : un agent persistant, joignable jour et nuit sur une messagerie ; on le prototype sur Telegram, et la version WhatsApp officielle exige WhatsApp Business, un numéro dédié, des modèles de messages et un premier message transparent : « Vous parlez à un assistant automatique. »\n\nRegardez nos trois personnages. Fatoumata reçoit sa veille à heure fixe : méthode 2. Aïssa prépare ses réunions avec Gmail et l’agenda : méthode 3. Ibrahim répond à ses clients sur Telegram, avec n8n et une validation humaine : méthode 4. Trois besoins, trois méthodes, et aucune n’est « meilleure ». Une pharmacienne de Cotonou, au Bénin, qui veut seulement résumer à la demande les notices de ses fournisseurs, n’a besoin que de la méthode 1. Prendre la méthode 5 « parce que c’est la plus puissante », c’est louer un camion pour porter un sac de riz. Votre dossier doit expliquer votre choix en deux phrases."
      },
      {
        "title": "Garde-fous et dix tests : les preuves de sécurité vues en Leçon 7",
        "body": "Un garde-fou ne se promet pas, il se pose. Tout ce qui engage votre organisation (commande, remise, remboursement, envoi d’un e-mail, paiement) attend l’accord d’un humain : c’est la validation humaine de la Leçon 7. Une phrase comme « sois prudent » dans les instructions peut se contourner ; une validation humaine, elle, bloque l’action. Ajoutez la règle « n’invente rien » : si une information manque, l’agent écrit « non disponible » et prévient un humain. Côté données, appliquez l’accès minimum de la Leçon 4, ne confiez jamais de données sensibles (pièce d’identité, santé, numéro de compte) et, pour ce projet, n’utilisez que des données fictives.\n\nEnsuite, prouvez. Dix tests : six cas normaux et quatre pièges. Les pièges classiques : une question dont la réponse n’est pas dans les documents de l’agent, une plainte ou une demande de remboursement, une tentative de changer ses règles (« ignore tes instructions », une remise imaginaire), une question sans rapport avec l’activité. Adaptez-les à votre agent : pour une veille, ce sera une semaine sans appel, un appel hors zone, une date limite absente, une page web qui contient « ignore tes instructions ». Pour chaque test, notez la réponse attendue, la réponse obtenue, puis OK ou KO, et reportez chaque KO dans un tableau de suivi des erreurs.\n\nUne correction ne clôt pas le travail. Après avoir corrigé une règle, on relance les dix tests, car une correction peut en casser une autre, comme un mécanicien qui refait un tour complet après avoir changé les freins. L’agent de réponse d’une auto-école de Lomé, au Togo, peut devenir si prudent après une correction qu’il ne donne plus les horaires des cours : seule la relance complète le révèle. Relancez à chaque changement d’instructions, d’outil ou de modèle, et datez la feuille."
      },
      {
        "title": "Les cinq critères d’évaluation : utile, juste, sûr, testé, honnête",
        "body": "Votre projet est évalué sur cinq critères. Utile : l’agent répond à un vrai besoin, qui passe le test des trois questions de la Leçon 1. Juste : c’est la méthode la plus simple qui fait le travail, et le choix est expliqué. Sûr : validation humaine sur les actions sensibles, données minimales, uniquement des données fictives. Testé : dix tests dont quatre pièges, au moins une correction, une relance complète. Honnête : un bilan sans détour, et aucune promesse de remplacer quelqu’un. Chaque critère est noté « atteint », « partiel » ou « non atteint ». On cherche une preuve dans le dossier, pas une promesse.\n\nVoici un contre-exemple. Un dossier fictif annonce : « Mon agent remplace la secrétaire. » Il choisit la méthode 5 « parce que c’est la plus puissante », ne présente aucun test, utilise de vrais noms de bénéficiaires dans ses essais, et laisse l’agent envoyer seul des e-mails aux bailleurs. Combien de critères atteint-il ? Un seul, au mieux : utile. Il échoue sur juste (la méthode la plus lourde sans raison), sûr (données réelles, aucune validation), testé (aucun test) et honnête (promesse de remplacement). Ce n’est pas l’outil qui échoue, c’est la conception : on corrige la fiche, on ajoute la validation humaine, on remplace les vrais noms, puis on teste.\n\nAvant de déposer, faites relire votre dossier par une IA avec la consigne d’évaluateur de la pratique : elle pointe les preuves manquantes, et vous gardez la décision. Le dépôt de votre dossier et la réussite du quiz cumulatif de cette leçon débloquent votre certificat numérique vérifiable. Il porte un QR code que toute personne (un employeur, un partenaire, un bailleur) peut scanner pour vérifier qu’il est authentique, et il reste valable 12 mois."
      }
    ],
    "example": {
      "title": "Le dossier de Fatoumata passé à la grille : un agent de veille adopté sur preuves",
      "challenge": "Fatoumata est chargée de programme dans une ONG fictive de Bamako, au Mali, qui accompagne des groupements de maraîchères. Lundi, elle présente à sa directrice son agent de veille des appels à projets. La directrice ne pose qu’une question : « Comment savoir qu’on peut lui faire confiance ? » Le même jour, Aïssa, consultante indépendante à Abidjan (Côte d’Ivoire), présente son agent de préparation de réunion, et Ibrahim, commerçant de pièces détachées de motos à Niamey (Niger), son agent de réponse aux clients. L’enjeu est le même pour les trois : faire adopter un agent sur des preuves, pas sur une impression. Ces cas sont fictifs.",
      "solution": "Fatoumata ouvre son dossier en six pièces. La fiche agent : chaque lundi à 7 h, les nouveaux appels à projets sur le maraîchage et la sécurité alimentaire au Mali et au Sahel, avec date limite et lien ; des instructions en RCTF ; un seul outil, la recherche web ; aucune mémoire en dehors des instructions et de la liste des bailleurs suivis ; des garde-fous (rien d’inventé, « date à vérifier », « Rien de nouveau cette semaine », et Fatoumata vérifie chaque lien avant de transmettre). La méthode : la méthode 2, une tâche planifiée (Leçon 3), parce que la tâche revient à heure fixe, s’appuie sur des sources publiques et n’a besoin d’aucun accès à ses e-mails ; le workflow n8n (Leçon 5) a été écarté, plus technique sans bénéfice ici. Les captures montrent la tâche et un bulletin reçu un lundi. Le tableau des dix tests compte six semaines normales et quatre pièges ; une ligne est passée de KO à OK : l’agent avait inventé une date limite, et la règle « date à vérifier » l’a corrigé. La page contenant « ignore tes instructions » a été traitée comme un simple texte. Le bilan dit sans détour : « L’agent ne voit que les pages publiques trouvées par la recherche ; il peut rater un appel diffusé par e-mail. » Enfin, pour chaque critère de la grille, Fatoumata pointe la preuve dans son dossier.",
      "impact": "La grille est remplie : cinq critères « atteint », chacun relié à une preuve précise du dossier. La directrice accepte un essai suivi de l’agent, avec Fatoumata comme responsable, et la décision de postuler reste entre les mains de l’équipe. Aïssa (méthode 3) et Ibrahim (méthode 4, avec validation humaine) montrent qu’un autre besoin appelle une autre méthode, avec la même exigence de preuves."
    },
    "practice": {
      "title": "Créez, testez et documentez votre propre agent",
      "instructions": [
        "Reprenez la tâche et la fiche agent obtenues en Leçon 1 avec la consigne « architecte d’agents ». Choisissez, parmi les cinq méthodes, la plus simple qui fait le travail, et écrivez pourquoi en deux phrases (par exemple : « Méthode 2, car la tâche revient à heure fixe et n’a besoin que de pages publiques. »).",
        "Construisez l’agent avec des comptes gratuits et uniquement des données fictives. Faites-lui passer dix tests, dont quatre pièges (la consigne de testeur de la Leçon 7 vous aide à les écrire), notez OK ou KO pour chacun, corrigez au moins une fois, puis relancez les dix tests.",
        "Assemblez le dossier en six pièces (fiche agent, méthode et pourquoi, captures, tableau des tests, garde-fous, bilan en cinq lignes) et faites-le relire par Claude, Gemini ou ChatGPT avec cette consigne : « Rôle : tu es un évaluateur bienveillant mais exigeant de projets d’agents IA. Contexte : voici le dossier de mon agent : [collez la fiche agent, la méthode choisie et pourquoi, les instructions, le tableau des dix tests, les garde-fous et le bilan]. La grille compte cinq critères : utile, juste, sûr, testé, honnête. Tâche : évalue le dossier critère par critère. Pour chacun, cite l’élément du dossier qui le prouve, ou écris “preuve manquante”. Puis propose les trois corrections les plus importantes. Format : un tableau à trois colonnes (critère, preuve, niveau : atteint, partiel ou non atteint), puis une liste numérotée de trois corrections, par ordre de priorité. Ne réécris pas le dossier à ma place. » Appliquez les corrections, puis déposez votre dossier dans cette leçon, sur Karatou Academy."
      ],
      "observation": "Vous devez constater que chaque critère se juge sur une preuve concrète de votre dossier, et qu’une « preuve manquante » se corrige presque toujours dans la conception (la fiche, les garde-fous, les tests), pas en changeant d’outil. Si l’évaluateur trouve vos cinq critères « atteint », vérifiez vous-même chaque preuve : c’est vous, pas l’IA, qui signez le dossier. Le dépôt de ce dossier et la réussite du quiz cumulatif débloquent votre certificat numérique vérifiable."
    },
    "quiz": [
      {
        "question": "Leçon 1 — Qu’est-ce qui distingue un agent d’un simple assistant ?",
        "options": [
          { "key": "A", "text": "L’agent écrit plus vite." },
          { "key": "B", "text": "L’assistant n’utilise jamais Internet." },
          { "key": "C", "text": "L’agent reçoit un objectif et agit avec des outils, étape par étape." },
          { "key": "D", "text": "L’agent coûte toujours plus cher." }
        ],
        "answer": "C",
        "explanation": "Un assistant répond quand on lui parle. Un agent reçoit un objectif, utilise des outils (recherche web, fichiers, e-mails) et travaille en boucle : observer, décider, agir, vérifier. La vitesse d’écriture ou le coût ne font pas la différence."
      },
      {
        "question": "Leçon 1 — Avec la consigne « architecte d’agents », que fait l’IA avant de proposer la fiche ?",
        "options": [
          { "key": "A", "text": "Elle pose trois questions pour comprendre le besoin." },
          { "key": "B", "text": "Elle crée l’agent sans rien demander." },
          { "key": "C", "text": "Elle envoie un e-mail à votre équipe." },
          { "key": "D", "text": "Elle choisit toujours la méthode 5." }
        ],
        "answer": "A",
        "explanation": "La consigne demande d’abord trois questions, pour bien cerner le besoin, puis la fiche en six rubriques et la méthode la plus simple qui suffit. L’IA conçoit, vous décidez : elle ne crée ni n’envoie rien toute seule."
      },
      {
        "question": "Leçon 2 — Dans un projet Claude, un GPT personnalisé ou un Gem, que pose-t-on une fois pour toutes ?",
        "options": [
          { "key": "A", "text": "Un horaire d’exécution." },
          { "key": "B", "text": "Des instructions et des fichiers." },
          { "key": "C", "text": "Un numéro WhatsApp." },
          { "key": "D", "text": "Une clé d’API." }
        ],
        "answer": "B",
        "explanation": "La méthode 1 évite de réexpliquer son contexte à chaque conversation : les instructions et les fichiers de référence sont posés une fois, et l’agent s’en sert à chaque demande. L’horaire relève de la méthode 2, le numéro de messagerie de la méthode 5."
      },
      {
        "question": "Leçon 3 — Qu’est-ce qui lance un agent planifié ?",
        "options": [
          { "key": "A", "text": "Un message de client." },
          { "key": "B", "text": "Un formulaire envoyé." },
          { "key": "C", "text": "Une heure fixe, chaque jour ou chaque semaine." },
          { "key": "D", "text": "Un collègue, à la main." }
        ],
        "answer": "C",
        "explanation": "Le déclencheur de la méthode 2, c’est l’horloge : « chaque lundi à 7 h », par exemple. Même une semaine chargée, le résultat arrive. Un formulaire envoyé déclenche plutôt un workflow (méthode 4), un message de client un agent persistant (méthode 5)."
      },
      {
        "question": "Leçon 4 — Vous branchez un agent sur Gmail, l’agenda et Drive. Quelle règle appliquez-vous ?",
        "options": [
          { "key": "A", "text": "Donner tous les accès, pour aller plus vite." },
          { "key": "B", "text": "L’accès minimum : seulement ce dont la tâche a besoin." },
          { "key": "C", "text": "Partager vos mots de passe avec l’agent." },
          { "key": "D", "text": "Laisser l’agent envoyer seul tous les e-mails." }
        ],
        "answer": "B",
        "explanation": "Moins l’agent a d’accès, moins une erreur ou un détournement peut faire de dégâts. On lui donne seulement ce que la tâche exige, comme on confie à un livreur la clé du portail, pas celle de la maison. On ne partage jamais ses mots de passe."
      },
      {
        "question": "Leçon 5 — Qu’est-ce qui démarre un workflow d’agent dans n8n, comme celui de Fatoumata ?",
        "options": [
          { "key": "A", "text": "Un événement, par exemple un formulaire envoyé." },
          { "key": "B", "text": "Uniquement vous, à la main." },
          { "key": "C", "text": "Le modèle d’IA, quand il le décide." },
          { "key": "D", "text": "Une mise à jour de n8n." }
        ],
        "answer": "A",
        "explanation": "Un workflow de la méthode 4 démarre seul quand un événement arrive : un partenaire remplit le formulaire, et la suite d’étapes s’enchaîne (résumé, classement, ligne dans Google Sheets, brouillon, rappel). L’IA décide de certaines étapes, pas du démarrage."
      },
      {
        "question": "Leçon 6 — Sur WhatsApp, que dit l’agent dès son premier message ?",
        "options": [
          { "key": "A", "text": "Rien de particulier." },
          { "key": "B", "text": "Qu’il est Ibrahim." },
          { "key": "C", "text": "Qu’il accorde une remise de bienvenue." },
          { "key": "D", "text": "Que le client parle à un assistant automatique." }
        ],
        "answer": "D",
        "explanation": "La transparence est une exigence de la version WhatsApp officielle et une question de confiance : le client doit savoir qu’il parle à un assistant automatique. Se faire passer pour Ibrahim ou promettre une remise serait trompeur."
      },
      {
        "question": "Leçon 7 — Avant d’enregistrer une commande ou une remise, que se passe-t-il ?",
        "options": [
          { "key": "A", "text": "L’agent décide seul." },
          { "key": "B", "text": "Un humain approuve d’abord." },
          { "key": "C", "text": "Le client valide lui-même." },
          { "key": "D", "text": "Rien, c’est automatique." }
        ],
        "answer": "B",
        "explanation": "Tout ce qui engage la boutique passe par une validation humaine : Ibrahim reçoit la demande et approuve ou refuse. Une instruction peut se contourner ; la validation humaine bloque l’action tant que personne n’a dit oui."
      },
      {
        "question": "Leçon 8 — Laquelle de ces pièces fait partie du dossier du projet final ?",
        "options": [
          { "key": "A", "text": "La méthode choisie, et pourquoi." },
          { "key": "B", "text": "Vos mots de passe." },
          { "key": "C", "text": "De vrais noms de clients." },
          { "key": "D", "text": "Un abonnement payant." }
        ],
        "answer": "A",
        "explanation": "Les six pièces sont : la fiche agent, la méthode choisie et pourquoi, des captures, le tableau des dix tests, les garde-fous et le bilan. Des comptes gratuits et des données fictives suffisent ; mots de passe et vrais noms n’ont rien à faire dans un dossier."
      },
      {
        "question": "Leçon 8 — Un dossier utilise de vrais noms de bénéficiaires dans ses tests. Quel critère échoue d’abord ?",
        "options": [
          { "key": "A", "text": "Utile." },
          { "key": "B", "text": "Juste." },
          { "key": "C", "text": "Honnête." },
          { "key": "D", "text": "Sûr." }
        ],
        "answer": "D",
        "explanation": "Le critère « sûr » exige des données minimales et uniquement fictives dans les essais. Utiliser de vrais noms expose des personnes qui n’ont rien demandé, même si l’agent est utile et bien choisi."
      }
    ],
    "reflection": "À qui, dans votre organisation ou votre activité, présenteriez-vous votre agent, quelle question cette personne vous poserait-elle avant de lui faire confiance, et quelle pièce de votre dossier y répondrait ?",
    "glossary": [
      {
        "term": "Agent IA",
        "definition": "Programme d’IA qui reçoit un objectif et agit avec des outils, étape par étape, en boucle (observer, décider, agir, vérifier), jusqu’à l’objectif ou à la limite fixée. Un assistant, lui, se contente de répondre quand on lui parle."
      },
      {
        "term": "Fiche agent",
        "definition": "Description d’un agent sur une page, en six rubriques : objectif, instructions, outils, mémoire, déclencheur, garde-fous. C’est la première pièce du dossier du projet final."
      },
      {
        "term": "Déclencheur",
        "definition": "Ce qui met l’agent en marche : vous (méthode 1), une heure fixe (méthode 2), un événement comme un formulaire envoyé (méthode 4) ou un message reçu sur une messagerie (méthode 5)."
      },
      {
        "term": "Accès minimum",
        "definition": "Règle qui consiste à ne donner à un agent que les accès dont sa tâche a besoin, comme on confie à un livreur la clé du portail, pas celle de la maison."
      },
      {
        "term": "Validation humaine",
        "definition": "Étape où un humain approuve une action sensible (commande, remise, envoi, paiement) avant qu’elle soit exécutée. Elle bloque l’action, là où une simple instruction peut se contourner."
      },
      {
        "term": "Test piège",
        "definition": "Message de test conçu pour faire échouer l’agent : information absente, plainte, tentative de changer ses règles (« ignore tes instructions »), question hors sujet. Le projet final en demande quatre sur dix tests."
      },
      {
        "term": "Grille d’évaluation",
        "definition": "Les cinq critères du projet final (utile, juste, sûr, testé, honnête), chacun noté « atteint », « partiel » ou « non atteint » à partir d’une preuve tirée du dossier."
      }
    ]
  },
  "en": {
    "id": "ag8",
    "lessonNumber": 8,
    "title": "Final project: build, test and document your own agent",
    "objective": "By the end of this lesson, you will know how to build, test and document your own agent, using the right method. You will know how to put together a six-part file that proves your agent deserves trust, and how to choose, among the course's five methods, the simplest one that does the job. You will know how to assess your project against five criteria (useful, right-sized, safe, tested, honest), linking each one to a piece of evidence. This final project pulls together the whole thread of Lessons 1 to 7 and, together with the cumulative quiz, gives you access to your verifiable digital certificate.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "A six-part file to prove your agent deserves trust",
        "body": "When you present an agent to a director, a client or a colleague, only one question matters: “How do we know we can trust it?” People often think a good project means an impressive agent, with lots of tools and the most powerful method. That is not what is assessed. A small, useful, well-tested agent is worth more than a big agent that was never checked. Think of a carpenter delivering a wardrobe: he shows the plan, the door tests and the guarantee, not just the wood. Free accounts and fictional data are enough: neither WhatsApp, nor a persistent agent, nor a paid version is required.\n\nYour file has six parts. One: the agent sheet, with the six sections you saw in Lesson 1 (goal, instructions, tools, memory, trigger, guardrails). Two: the method you chose, and why. Three: screenshots of the agent, or the workflow export if you used n8n. Four: the table of ten tests, with at least one correction, as in Lesson 7. Five: the guardrails, written in black and white. Six: a five-line review.\n\nThe review is the part most often rushed, yet it is the most reassuring. It says what works, the known limits, possible costs (without giving any amount: the time spent monitoring, for example), who monitors the agent, and how to stop it. It is like the manual for a generator: you know what it powers, who starts it and where the off switch is. The manager of a shea butter cooperative in Bobo-Dioulasso, Burkina Faso, might write, for example: “If the agent makes a mistake, the sales manager switches off the task and tells the team.”"
      },
      {
        "title": "Choosing the simplest method that does the job: the thread of Lessons 1 to 6",
        "body": "Lesson 1 laid the foundation: an assistant answers, an agent acts towards a goal. It uses tools and works in a loop (observe, decide, act, check) until it reaches the goal or the limit you set. Before building, three questions: does the task come back often? do its steps change from one time to the next? is the result easy to check? Then the “agent architect” prompt, written in RCTF (Role, Context, Task, Format), asks you three questions and returns your agent sheet with the recommended method.\n\nThe five methods go from the simplest to the most powerful. Method 1 (Lesson 2): a Claude project, a custom GPT or a Gem, where you set instructions and files once and for all; the agent acts when you talk to it. Method 2 (Lesson 3): a scheduled task, which runs on its own at a fixed time. Method 3 (Lesson 4): connectors to Gmail, the calendar and Drive; MCP is a universal plug between the AI and your tools, and you apply minimum access. Method 4 (Lesson 5): an n8n workflow that an event, such as a submitted form, sets in motion. Method 5 (Lesson 6): a persistent agent, reachable day and night on a messaging app; you prototype it on Telegram, and the official WhatsApp version requires WhatsApp Business, a dedicated number, message templates and a transparent first message: “You are talking to an automated assistant.”\n\nLook at our three characters. Fatoumata receives her watch at a fixed time: method 2. Aïssa prepares her meetings with Gmail and the calendar: method 3. Ibrahim answers his customers on Telegram, with n8n and human approval: method 4. Three needs, three methods, and none is “better”. A pharmacist in Cotonou, Benin, who only wants to summarise her suppliers' leaflets on request needs nothing more than method 1. Picking method 5 “because it is the most powerful” is like renting a truck to carry one bag of rice. Your file must explain your choice in two sentences."
      },
      {
        "title": "Guardrails and ten tests: the safety evidence from Lesson 7",
        "body": "A guardrail is not promised, it is put in place. Anything that commits your organisation (an order, a discount, a refund, sending an e-mail, a payment) waits for a human's approval: this is the human approval from Lesson 7. A sentence like “be careful” in the instructions can be bypassed; human approval, on the other hand, blocks the action. Add the rule “invent nothing”: if a piece of information is missing, the agent writes “not available” and alerts a human. On data, apply the minimum access from Lesson 4, never hand over sensitive data (ID documents, health, account numbers) and, for this project, use fictional data only.\n\nThen, prove it. Ten tests: six normal cases and four traps. The classic traps: a question whose answer is not in the agent's documents, a complaint or a refund request, an attempt to change its rules (“ignore your instructions”, an imaginary discount), a question unrelated to the activity. Adapt them to your agent: for a watch agent, that means a week with no call, a call outside the area, a missing deadline, a web page that contains “ignore your instructions”. For each test, note the expected answer, the answer obtained, then OK or KO, and record every KO in an error log.\n\nOne fix does not end the work. After correcting a rule, you rerun all ten tests, because one fix can break something else, like a mechanic who takes a full test drive after changing the brakes. The reply agent of a driving school in Lomé, Togo, can become so cautious after a fix that it no longer gives lesson times: only a full rerun reveals it. Rerun at every change of instructions, tool or model, and date the sheet."
      },
      {
        "title": "The five assessment criteria: useful, right-sized, safe, tested, honest",
        "body": "Your project is assessed on five criteria. Useful: the agent meets a real need, one that passes the three-question test from Lesson 1. Right-sized: it is the simplest method that does the job, and the choice is explained. Safe: human approval on sensitive actions, minimal data, fictional data only. Tested: ten tests including four traps, at least one correction, one full rerun. Honest: a straightforward review, and no promise to replace anyone. Each criterion is rated “met”, “partly met” or “not met”. We look for evidence in the file, not a promise.\n\nHere is a counter-example. A fictional file announces: “My agent replaces the secretary.” It picks method 5 “because it is the most powerful”, shows no tests, uses real beneficiaries' names in its trials, and lets the agent send e-mails to funders on its own. How many criteria does it meet? One at best: useful. It fails on right-sized (the heaviest method for no reason), safe (real data, no approval), tested (no tests) and honest (a promise of replacement). It is not the tool that fails, it is the design: you fix the sheet, add human approval, replace the real names, then test.\n\nBefore submitting, have an AI review your file with the assessor prompt from the practice: it points out missing evidence, and you keep the decision. Submitting your file and passing this lesson's cumulative quiz unlock your verifiable digital certificate. It carries a QR code that anyone (an employer, a partner, a funder) can scan to check that it is genuine, and it remains valid for 12 months."
      }
    ],
    "example": {
      "title": "Fatoumata's file put through the grid: a watch agent adopted on evidence",
      "challenge": "Fatoumata is a programme officer at a fictional NGO in Bamako, Mali, which supports groups of women market gardeners. On Monday, she presents her call-for-proposals watch agent to her director. The director asks only one question: “How do we know we can trust it?” The same day, Aïssa, an independent consultant in Abidjan (Côte d'Ivoire), presents her meeting preparation agent, and Ibrahim, a motorbike spare parts trader in Niamey (Niger), presents his customer reply agent. The stakes are the same for all three: getting an agent adopted on evidence, not on an impression. These cases are fictional.",
      "solution": "Fatoumata opens her six-part file. The agent sheet: every Monday at 7 a.m., the new calls for proposals on market gardening and food security in Mali and the Sahel, with deadline and link; instructions in RCTF; a single tool, web search; no memory beyond the instructions and the list of funders she follows; guardrails (nothing invented, “date to be checked”, “Nothing new this week”, and Fatoumata checks every link before passing it on). The method: method 2, a scheduled task (Lesson 3), because the task comes back at a fixed time, relies on public sources and needs no access to her e-mails; the n8n workflow (Lesson 5) was ruled out, more technical with no benefit here. The screenshots show the task and a bulletin received on a Monday. The table of ten tests has six normal weeks and four traps; one line went from KO to OK: the agent had invented a deadline, and the “date to be checked” rule fixed it. The page containing “ignore your instructions” was treated as plain text. The review says plainly: “The agent only sees the public pages found by the search; it can miss a call sent out by e-mail.” Finally, for each criterion on the grid, Fatoumata points to the evidence in her file.",
      "impact": "The grid is filled in: five criteria “met”, each linked to a precise piece of evidence in the file. The director agrees to a monitored trial of the agent, with Fatoumata in charge, and the decision to apply stays in the team's hands. Aïssa (method 3) and Ibrahim (method 4, with human approval) show that a different need calls for a different method, with the same demand for evidence."
    },
    "practice": {
      "title": "Build, test and document your own agent",
      "instructions": [
        "Go back to the task and the agent sheet you obtained in Lesson 1 with the “agent architect” prompt. Among the five methods, choose the simplest one that does the job, and write why in two sentences (for example: “Method 2, because the task comes back at a fixed time and only needs public pages.”).",
        "Build the agent with free accounts and fictional data only. Run it through ten tests, including four traps (the tester prompt from Lesson 7 helps you write them), mark each one OK or KO, make at least one correction, then rerun all ten tests.",
        "Put together the six-part file (agent sheet, method and why, screenshots, test table, guardrails, five-line review) and have it reviewed by Claude, Gemini or ChatGPT with this prompt: “Role: you are a kind but demanding assessor of AI agent projects. Context: here is my agent's file: [paste the agent sheet, the chosen method and why, the instructions, the table of ten tests, the guardrails and the review]. The grid has five criteria: useful, right-sized, safe, tested, honest. Task: assess the file criterion by criterion. For each one, quote the element of the file that proves it, or write ‘evidence missing’. Then suggest the three most important corrections. Format: a three-column table (criterion, evidence, level: met, partly met or not met), then a numbered list of three corrections, in order of priority. Do not rewrite the file for me.” Apply the corrections, then submit your file in this lesson, on Karatou Academy."
      ],
      "observation": "You should notice that each criterion is judged on concrete evidence from your file, and that “evidence missing” is almost always fixed in the design (the sheet, the guardrails, the tests), not by changing tools. If the assessor rates all five criteria “met”, check each piece of evidence yourself: you, not the AI, sign the file. Submitting this file and passing the cumulative quiz unlock your verifiable digital certificate."
    },
    "quiz": [
      {
        "question": "Lesson 1 — What distinguishes an agent from a simple assistant?",
        "options": [
          { "key": "A", "text": "The agent writes faster." },
          { "key": "B", "text": "The assistant never uses the Internet." },
          { "key": "C", "text": "The agent receives a goal and acts with tools, step by step." },
          { "key": "D", "text": "The agent always costs more." }
        ],
        "answer": "C",
        "explanation": "An assistant answers when you talk to it. An agent receives a goal, uses tools (web search, files, e-mails) and works in a loop: observe, decide, act, check. Writing speed or cost is not what makes the difference."
      },
      {
        "question": "Lesson 1 — With the “agent architect” prompt, what does the AI do before proposing the sheet?",
        "options": [
          { "key": "A", "text": "It asks three questions to understand the need." },
          { "key": "B", "text": "It creates the agent without asking anything." },
          { "key": "C", "text": "It sends an e-mail to your team." },
          { "key": "D", "text": "It always chooses method 5." }
        ],
        "answer": "A",
        "explanation": "The prompt first asks for three questions, to pin down the need, then the six-section sheet and the simplest method that is enough. The AI designs, you decide: it does not create or send anything on its own."
      },
      {
        "question": "Lesson 2 — In a Claude project, a custom GPT or a Gem, what do you set once and for all?",
        "options": [
          { "key": "A", "text": "A run schedule." },
          { "key": "B", "text": "Instructions and files." },
          { "key": "C", "text": "A WhatsApp number." },
          { "key": "D", "text": "An API key." }
        ],
        "answer": "B",
        "explanation": "Method 1 saves you from re-explaining your context in every conversation: the instructions and reference files are set once, and the agent uses them with every request. A schedule belongs to method 2, a messaging number to method 5."
      },
      {
        "question": "Lesson 3 — What starts a scheduled agent?",
        "options": [
          { "key": "A", "text": "A customer's message." },
          { "key": "B", "text": "A submitted form." },
          { "key": "C", "text": "A fixed time, every day or every week." },
          { "key": "D", "text": "A colleague, by hand." }
        ],
        "answer": "C",
        "explanation": "The trigger of method 2 is the clock: “every Monday at 7 a.m.”, for example. Even in a busy week, the result arrives. A submitted form rather triggers a workflow (method 4), and a customer's message a persistent agent (method 5)."
      },
      {
        "question": "Lesson 4 — You connect an agent to Gmail, the calendar and Drive. Which rule do you apply?",
        "options": [
          { "key": "A", "text": "Give full access, to go faster." },
          { "key": "B", "text": "Minimum access: only what the task needs." },
          { "key": "C", "text": "Share your passwords with the agent." },
          { "key": "D", "text": "Let the agent send all e-mails on its own." }
        ],
        "answer": "B",
        "explanation": "The less access the agent has, the less damage a mistake or a hijack can do. You give it only what the task requires, just as you hand a delivery person the gate key, not the house key. You never share your passwords."
      },
      {
        "question": "Lesson 5 — What starts an agent workflow in n8n, like Fatoumata's?",
        "options": [
          { "key": "A", "text": "An event, for example a submitted form." },
          { "key": "B", "text": "Only you, by hand." },
          { "key": "C", "text": "The AI model, when it decides to." },
          { "key": "D", "text": "An n8n update." }
        ],
        "answer": "A",
        "explanation": "A method 4 workflow starts on its own when an event occurs: a partner fills in the form, and the chain of steps follows (summary, sorting, a row in Google Sheets, a draft, a reminder). The AI decides some of the steps, not the start."
      },
      {
        "question": "Lesson 6 — On WhatsApp, what does the agent say in its very first message?",
        "options": [
          { "key": "A", "text": "Nothing in particular." },
          { "key": "B", "text": "That it is Ibrahim." },
          { "key": "C", "text": "That it grants a welcome discount." },
          { "key": "D", "text": "That the customer is talking to an automated assistant." }
        ],
        "answer": "D",
        "explanation": "Transparency is a requirement of the official WhatsApp version and a matter of trust: the customer must know they are talking to an automated assistant. Pretending to be Ibrahim or promising a discount would be misleading."
      },
      {
        "question": "Lesson 7 — Before an order or a discount is recorded, what happens?",
        "options": [
          { "key": "A", "text": "The agent decides alone." },
          { "key": "B", "text": "A human approves first." },
          { "key": "C", "text": "The customer approves it themselves." },
          { "key": "D", "text": "Nothing, it is automatic." }
        ],
        "answer": "B",
        "explanation": "Anything that commits the shop goes through human approval: Ibrahim receives the request and approves or refuses it. An instruction can be bypassed; human approval blocks the action until someone says yes."
      },
      {
        "question": "Lesson 8 — Which of these parts belongs in the final project file?",
        "options": [
          { "key": "A", "text": "The chosen method, and why." },
          { "key": "B", "text": "Your passwords." },
          { "key": "C", "text": "Real customer names." },
          { "key": "D", "text": "A paid subscription." }
        ],
        "answer": "A",
        "explanation": "The six parts are: the agent sheet, the chosen method and why, screenshots, the table of ten tests, the guardrails and the review. Free accounts and fictional data are enough; passwords and real names have no place in a file."
      },
      {
        "question": "Lesson 8 — A file uses real beneficiaries' names in its tests. Which criterion fails first?",
        "options": [
          { "key": "A", "text": "Useful." },
          { "key": "B", "text": "Right-sized." },
          { "key": "C", "text": "Honest." },
          { "key": "D", "text": "Safe." }
        ],
        "answer": "D",
        "explanation": "The “safe” criterion requires minimal data and fictional data only in the trials. Using real names exposes people who asked for nothing, even if the agent is useful and well chosen."
      }
    ],
    "reflection": "Who, in your organisation or your activity, would you present your agent to, what question would that person ask before trusting it, and which part of your file would answer it?",
    "glossary": [
      {
        "term": "AI agent",
        "definition": "An AI program that receives a goal and acts with tools, step by step, in a loop (observe, decide, act, check), until it reaches the goal or the limit set. An assistant, by contrast, simply answers when you talk to it."
      },
      {
        "term": "Agent sheet",
        "definition": "A one-page description of an agent, in six sections: goal, instructions, tools, memory, trigger, guardrails. It is the first part of the final project file."
      },
      {
        "term": "Trigger",
        "definition": "What sets the agent in motion: you (method 1), a fixed time (method 2), an event such as a submitted form (method 4) or a message received on a messaging app (method 5)."
      },
      {
        "term": "Minimum access",
        "definition": "The rule of giving an agent only the access its task needs, just as you hand a delivery person the gate key, not the house key."
      },
      {
        "term": "Human approval",
        "definition": "A step where a human approves a sensitive action (order, discount, sending, payment) before it is carried out. It blocks the action, whereas a simple instruction can be bypassed."
      },
      {
        "term": "Trap test",
        "definition": "A test message designed to make the agent fail: missing information, a complaint, an attempt to change its rules (“ignore your instructions”), an off-topic question. The final project requires four out of ten tests."
      },
      {
        "term": "Assessment grid",
        "definition": "The five criteria of the final project (useful, right-sized, safe, tested, honest), each rated “met”, “partly met” or “not met” based on evidence taken from the file."
      }
    ]
  },
  "ha": {
    "id": "ag8",
    "lessonNumber": 8,
    "title": "Aikin karshe: kirkira, gwadawa da rubuta bayanin agent naku",
    "objective": "Bayan kammala wannan darasi, za ku iya kirkira, gwadawa da rubuta bayanin agent naku, da hanyar da ta dace. Za ku iya hada fayil mai sassa shida wanda ke tabbatar da cewa agent naku ya cancanci amincewa, kuma ku zabi, cikin hanyoyi biyar na wannan kwas, mafi saukin hanyar da ke yin aikin. Za ku iya kimanta aikinku da ma’auni biyar (mai amfani, daidai gwargwado, amintacce, an gwada, mai gaskiya), kuna hada kowane da hujja. Wannan aikin karshe yana tattara dukkan zaren Darasi 1 zuwa 7, kuma tare da tambayoyin jarrabawa na tattarawa, yana bude muku hanyar samun takardar shaida ta dijital mai tabbatarwa.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Fayil mai sassa shida don tabbatar da cewa agent naku ya cancanci amincewa",
        "body": "Idan kuna gabatar da agent ga darakta, ga abokin ciniki ko ga abokin aiki, tambaya daya ce kawai ke da muhimmanci: « Ta yaya za mu san cewa za mu iya amincewa da shi? » Mutane da yawa suna tsammanin aiki mai kyau shi ne agent mai ban sha’awa, mai kayan aiki da yawa da hanya mafi karfi. Ba wannan ake kimantawa ba. Karamin agent mai amfani wanda aka gwada sosai ya fi babban agent da ba a taba dubawa ba. Ku yi tunanin kafinta da ke kawo kabad: yana nuna zane, gwajin kofofin da garanti, ba katako kawai ba. Asusun kyauta da bayanan kirkira sun isa: ba a bukatar WhatsApp, ko agent na dindindin, ko sigar biya.\n\nFayil dinku yana da sassa shida. Na daya: takardar bayanin agent, da rubrik shida da kuka gani a Darasi 1 (manufa, umarni, kayan aiki, ajiya, abin da ke tayar da shi, matakan kariya). Na biyu: hanyar da kuka zaba, da dalili. Na uku: hotunan allo na agent, ko fitar da workflow idan kun yi amfani da n8n. Na hudu: teburin gwaje-gwaje goma, da akalla gyara daya, kamar a Darasi 7. Na biyar: matakan kariya, a rubuce a fili. Na shida: kimantawa a layi biyar.\n\nKimantawar ita ce bangaren da aka fi yi da gaggawa, amma ita ce ta fi kwantar da hankali. Tana fadin abin da ke aiki, iyakokin da aka sani, kudaden da za a iya kashewa (ba tare da ambaton adadi ba: lokacin sa ido, misali), wanda ke sa ido kan agent, da yadda ake dakatar da shi. Kamar littafin jagorar janareta ne: an san abin da yake ba wa wuta, wanda ke kunna shi, da inda maballin kashe shi yake. Shugabar kungiyar hadin gwiwa ta man kade a Bobo-Dioulasso, a Burkina Faso, za ta iya rubuta misali: « Idan agent ya yi kuskure, jami’ar tallace-tallace za ta kashe aikin kuma ta sanar da kungiyar. »"
      },
      {
        "title": "Zabar mafi saukin hanyar da ke yin aikin: zaren Darasi 1 zuwa 6",
        "body": "Darasi 1 ya kafa tushe: mataimaki yana amsawa, agent yana aiki don cimma manufa. Yana amfani da kayan aiki kuma yana aiki a zagaye (lura, yanke shawara, aiki, dubawa) har ya kai ga manufar ko iyakar da aka sa. Kafin gini, tambayoyi uku: aikin yana yawan dawowa? matakansa suna canzawa daga wannan lokaci zuwa wancan? ana iya duba sakamakon cikin sauki? Sannan umarnin « architecte d’agents » (mai tsara agent), da aka rubuta da RCTF (Matsayi, Mahalli, Aiki, Tsari), yana yi muku tambayoyi uku kuma yana dawo da takardar bayanin agent naku tare da hanyar da ya ba da shawara.\n\nHanyoyi biyar suna farawa daga mafi sauki zuwa mafi karfi. Hanya ta 1 (Darasi 2): projet na Claude, GPT na musamman ko Gem, inda ake sa umarni da fayiloli sau daya tak; agent yana aiki idan kun yi masa magana. Hanya ta 2 (Darasi 3): aikin da aka tsara lokacinsa, wanda ke gudana da kansa a lokaci kayyadadde. Hanya ta 3 (Darasi 4): masu hadawa zuwa Gmail, ajanda da Drive; MCP kamar soket ne na duniya tsakanin AI da kayan aikinku, kuma ana bin mafi karancin damar shiga. Hanya ta 4 (Darasi 5): workflow na n8n da wani abu da ya faru, kamar fom da aka aiko, ke tayar da shi. Hanya ta 5 (Darasi 6): agent na dindindin, da ake samu dare da rana a manhajar sako; ana gwada samfurinsa a Telegram, kuma sigar WhatsApp ta hukuma tana bukatar WhatsApp Business, lamba ta musamman, samfuran sakonni da sako na farko a bayyane: « Kuna magana da mataimaki na atomatik. »\n\nKu dubi mutanenmu uku. Fatoumata tana karbar bincikenta a lokaci kayyadadde: hanya ta 2. Aïssa tana shirya tarurrukanta da Gmail da ajanda: hanya ta 3. Ibrahim yana amsa wa kwastomominsa a Telegram, da n8n da amincewar dan adam: hanya ta 4. Bukatu uku, hanyoyi uku, kuma babu wadda « ta fi ». Wata mai kantin magani a Cotonou, a Benin, da take son takaita takardun bayanin magungunan masu kawo mata kaya kawai idan ta nema, hanya ta 1 ce kawai take bukata. Zabar hanya ta 5 « saboda ita ce mafi karfi » kamar yin hayar babbar mota ne don daukar buhun shinkafa daya. Fayil dinku dole ya bayyana zabinku a jimloli biyu."
      },
      {
        "title": "Matakan kariya da gwaje-gwaje goma: hujjojin tsaro na Darasi 7",
        "body": "Ba a yin alkawarin matakin kariya, ana sanya shi. Duk abin da ya shafi kungiyarku (oda, rangwame, mayar da kudi, aika imel, biya) yana jiran amincewar dan adam: wannan ita ce amincewar dan adam ta Darasi 7. Jimla kamar « ka yi hankali » a cikin umarni za a iya kauce mata; amma amincewar dan adam tana toshe aikin. Ku kara dokar « kada ka kirkiri komai »: idan wani bayani ya rasa, agent yana rubuta « babu shi » kuma yana sanar da dan adam. Game da bayanai, ku bi mafi karancin damar shiga ta Darasi 4, kada ku taba ba da bayanai masu muhimmanci (katin shaida, lafiya, lambar asusu) kuma, don wannan aikin, ku yi amfani da bayanan kirkira kawai.\n\nSannan, ku tabbatar. Gwaje-gwaje goma: yanayi shida na yau da kullum da tarko hudu. Tarkunan da aka saba: tambayar da amsarta ba ta cikin takardun agent, korafi ko neman mayar da kudi, kokarin canza dokokinsa (« ka manta da umarninka », rangwamen da ba a taba bayarwa ba), tambayar da ba ta shafi aikin ba. Ku daidaita su da agent naku: don agent na bincike, za su zama mako ba tare da sanarwar neman aiki ba, sanarwa a wajen yankin, ranar karshe da ba ta nan, shafin yanar gizo da ke dauke da « ka manta da umarninka ». Ga kowane gwaji, ku rubuta amsar da ake tsammani, amsar da aka samu, sannan OK ko KO, kuma ku sa kowane KO a cikin teburin bin diddigin kurakurai.\n\nGyara daya ba ya kawo karshen aikin. Bayan gyara wata doka, ana sake gudanar da gwaje-gwaje goma duka, domin gyara daya zai iya bata wani abu, kamar makanike da ke sake gwada mota gaba daya bayan ya canza birki. Agent na amsa na makarantar koyon tukin mota a Lomé, a Togo, zai iya zama mai taka tsantsan sosai bayan gyara har ya daina ba da lokutan darussa: sake gwaji gaba daya ne kawai ke nuna haka. Ku sake gwadawa a duk lokacin da aka canza umarni, kayan aiki ko samfuri, kuma ku sa kwanan wata a takardar."
      },
      {
        "title": "Ma’auni biyar na kimantawa: mai amfani, daidai gwargwado, amintacce, an gwada, mai gaskiya",
        "body": "Ana kimanta aikinku da ma’auni biyar. Mai amfani: agent yana biyan bukata ta gaske, wadda ta wuce gwajin tambayoyi uku na Darasi 1. Daidai gwargwado: hanyar ita ce mafi sauki da ke yin aikin, kuma an bayyana zabin. Amintacce: amincewar dan adam a kan ayyuka masu muhimmanci, bayanai kadan, bayanan kirkira kawai. An gwada: gwaje-gwaje goma ciki har da tarko hudu, akalla gyara daya, da sake gwaji gaba daya. Mai gaskiya: kimantawa ba tare da boye-boye ba, kuma babu alkawarin maye gurbin kowa. Ana ba kowane ma’auni « an cimma », « an cimma rabi » ko « ba a cimma ba ». Ana neman hujja a cikin fayil, ba alkawari ba.\n\nGa misali na abin da bai kamata ba. Wani fayil na kirkira yana cewa: « Agent na zai maye gurbin sakatariya. » Ya zabi hanya ta 5 « saboda ita ce mafi karfi », bai nuna ko gwaji daya ba, yana amfani da sunayen gaske na masu cin gajiya a gwaje-gwajensa, kuma yana barin agent ya aika imel ga masu ba da tallafi da kansa. Ma’auni nawa ya cimma? Daya kawai, a mafi kyau: mai amfani. Ya kasa a daidai gwargwado (hanya mafi nauyi ba tare da dalili ba), amintacce (bayanan gaske, babu amincewa), an gwada (babu gwaji) da mai gaskiya (alkawarin maye gurbi). Ba kayan aikin ne suka kasa ba, tsarin ne: ana gyara takardar bayanin, ana kara amincewar dan adam, ana maye gurbin sunayen gaske, sannan a gwada.\n\nKafin mikawa, ku sa AI ta sake karanta fayil dinku da umarnin mai kimantawa na aikin motsa jiki: tana nuna hujjojin da suka rasa, kuma ku ne ke yanke shawara. Mika fayil dinku da nasara a tambayoyin jarrabawa na tattarawa na wannan darasi suna bude muku takardar shaida ta dijital mai tabbatarwa. Tana dauke da QR code wanda kowa (mai daukar aiki, abokin hulda, mai ba da tallafi) zai iya duba shi don tabbatar da sahihancinta, kuma tana aiki har watanni 12."
      }
    ],
    "example": {
      "title": "An auna fayil din Fatoumata da jadawalin kimantawa: agent na bincike da aka karba bisa hujjoji",
      "challenge": "Fatoumata jami’ar shiri ce a wata kungiya mai zaman kanta ta kirkira a Bamako, a Mali, wadda ke tallafa wa kungiyoyin mata masu lambu. A ranar Litinin, tana gabatar wa daraktarta da agent dinta na binciken sanarwar neman ayyuka. Daraktar ba ta yi tambaya fiye da daya ba: « Ta yaya za mu san cewa za mu iya amincewa da shi? » A ranar, Aïssa, mai ba da shawara mai zaman kanta a Abidjan (Côte d’Ivoire), tana gabatar da agent dinta na shirya taro, kuma Ibrahim, dan kasuwar kayan gyaran babura a Niamey (Niger), yana gabatar da agent dinsa na amsa wa kwastomomi. Abin da ke cikin hadari daya ne ga dukkansu uku: a sa a karbi agent bisa hujjoji, ba bisa ra’ayi ba. Wadannan labarai na kirkira ne.",
      "solution": "Fatoumata ta bude fayil dinta mai sassa shida. Takardar bayanin agent: kowace Litinin da karfe 7 na safe, sabbin sanarwar neman ayyuka kan noman lambu da wadatar abinci a Mali da Sahel, tare da ranar karshe da mahada; umarni da RCTF; kayan aiki daya tak, binciken yanar gizo; babu ajiya sai umarni da jerin masu ba da tallafi da take bi; matakan kariya (ba a kirkiri komai, « a duba ranar », « Babu sabon abu a wannan mako », kuma Fatoumata tana duba kowace mahada kafin ta tura). Hanyar: hanya ta 2, aikin da aka tsara lokacinsa (Darasi 3), domin aikin yana dawowa a lokaci kayyadadde, yana dogara ga majiyoyin jama’a kuma ba ya bukatar shiga imel dinta; an ajiye workflow na n8n (Darasi 5), domin ya fi wahala ba tare da wani amfani a nan ba. Hotunan allo suna nuna aikin da wata sanarwa da aka karba a ranar Litinin. Teburin gwaje-gwaje goma yana da makonni shida na yau da kullum da tarko hudu; layi daya ya koma daga KO zuwa OK: agent ya kirkiri ranar karshe, kuma dokar « a duba ranar » ta gyara shi. Shafin da ke dauke da « ka manta da umarninka » an dauke shi a matsayin rubutu kawai. Kimantawar ta fada a fili: « Agent yana ganin shafukan jama’a da binciken ya samu kawai; zai iya rasa sanarwar da aka aika ta imel. » A karshe, ga kowane ma’auni na jadawalin, Fatoumata tana nuna hujjar a cikin fayil dinta.",
      "impact": "An cike jadawalin: ma’auni biyar « an cimma », kowanne yana hade da takamaiman hujja a cikin fayil. Daraktar ta amince da gwajin agent da ake sa ido a kai, tare da Fatoumata a matsayin mai kula da shi, kuma shawarar neman tallafi tana hannun kungiyar. Aïssa (hanya ta 3) da Ibrahim (hanya ta 4, da amincewar dan adam) suna nuna cewa wata bukata daban tana kiran wata hanya daban, da irin wannan bukatar hujjoji."
    },
    "practice": {
      "title": "Ku kirkira, ku gwada kuma ku rubuta bayanin agent naku",
      "instructions": [
        "Ku koma ga aikin da takardar bayanin agent da kuka samu a Darasi 1 da umarnin « architecte d’agents » (mai tsara agent). Cikin hanyoyi biyar, ku zabi mafi saukin wadda ke yin aikin, kuma ku rubuta dalili a jimloli biyu (misali: « Hanya ta 2, domin aikin yana dawowa a lokaci kayyadadde kuma yana bukatar shafukan jama’a kawai. »).",
        "Ku gina agent da asusun kyauta da bayanan kirkira kawai. Ku sa shi ya wuce gwaje-gwaje goma, ciki har da tarko hudu (umarnin mai gwaji na Darasi 7 zai taimaka muku rubuta su), ku rubuta OK ko KO ga kowane, ku yi gyara akalla sau daya, sannan ku sake gudanar da gwaje-gwaje goma duka.",
        "Ku hada fayil mai sassa shida (takardar bayanin agent, hanya da dalili, hotunan allo, teburin gwaje-gwaje, matakan kariya, kimantawa a layi biyar) kuma ku sa Claude, Gemini ko ChatGPT su sake karanta shi da wannan umarni: « Matsayi: kai mai kimanta ayyukan agent na AI ne, mai tausayi amma mai tsauri. Mahalli: ga fayil din agent dina: [ku manna takardar bayanin agent, hanyar da aka zaba da dalili, umarnin, teburin gwaje-gwaje goma, matakan kariya da kimantawar]. Jadawalin yana da ma’auni biyar: mai amfani, daidai gwargwado, amintacce, an gwada, mai gaskiya. Aiki: ka kimanta fayil din ma’auni bayan ma’auni. Ga kowane, ka ambaci abin da ke cikin fayil wanda ya tabbatar da shi, ko ka rubuta “babu hujja”. Sannan ka ba da shawarar gyare-gyare uku mafi muhimmanci. Tsari: tebur mai ginshikai uku (ma’auni, hujja, mataki: an cimma, an cimma rabi ko ba a cimma ba), sannan jerin gyare-gyare uku masu lamba, bisa muhimmancinsu. Kada ka sake rubuta fayil din a madadina. » Ku yi gyare-gyaren, sannan ku mika fayil dinku a wannan darasi, a Karatou Academy."
      ],
      "observation": "Ya kamata ku lura cewa ana yanke hukunci kan kowane ma’auni bisa hujja ta zahiri daga fayil dinku, kuma « babu hujja » kusan kullum ana gyara shi a cikin tsarin (takardar bayanin, matakan kariya, gwaje-gwaje), ba ta hanyar canza kayan aiki ba. Idan mai kimantawa ya ba ma’auni biyar duka « an cimma », ku duba kowace hujja da kanku: ku ne, ba AI ba, ke sa hannu a fayil din. Mika wannan fayil da nasara a tambayoyin jarrabawa na tattarawa suna bude muku takardar shaida ta dijital mai tabbatarwa."
    },
    "quiz": [
      {
        "question": "Darasi 1 — Me ke bambanta agent da mataimaki kawai?",
        "options": [
          { "key": "A", "text": "Agent yana rubutu da sauri." },
          { "key": "B", "text": "Mataimaki ba ya taba amfani da Intanet." },
          { "key": "C", "text": "Agent yana karbar manufa kuma yana aiki da kayan aiki, mataki bayan mataki." },
          { "key": "D", "text": "Agent kullum ya fi tsada." }
        ],
        "answer": "C",
        "explanation": "Mataimaki yana amsawa idan an yi masa magana. Agent yana karbar manufa, yana amfani da kayan aiki (binciken yanar gizo, fayiloli, imel) kuma yana aiki a zagaye: lura, yanke shawara, aiki, dubawa. Saurin rubutu ko tsada ba su ne bambancin ba."
      },
      {
        "question": "Darasi 1 — Da umarnin « architecte d’agents » (mai tsara agent), me AI ke yi kafin ta gabatar da takardar bayanin?",
        "options": [
          { "key": "A", "text": "Tana yin tambayoyi uku don fahimtar bukatar." },
          { "key": "B", "text": "Tana kirkirar agent ba tare da tambayar komai ba." },
          { "key": "C", "text": "Tana aika imel ga kungiyarku." },
          { "key": "D", "text": "Kullum tana zabar hanya ta 5." }
        ],
        "answer": "A",
        "explanation": "Umarnin yana neman tambayoyi uku da farko, don fahimtar bukatar sosai, sannan takardar bayanin mai rubrik shida da mafi saukin hanyar da ta isa. AI tana tsarawa, ku ne ke yanke shawara: ba ta kirkira ko aika komai da kanta."
      },
      {
        "question": "Darasi 2 — A cikin projet na Claude, GPT na musamman ko Gem, me ake sa wa sau daya tak?",
        "options": [
          { "key": "A", "text": "Lokacin gudanarwa." },
          { "key": "B", "text": "Umarni da fayiloli." },
          { "key": "C", "text": "Lambar WhatsApp." },
          { "key": "D", "text": "Makullin API." }
        ],
        "answer": "B",
        "explanation": "Hanya ta 1 tana hana ku sake bayyana mahallinku a kowace tattaunawa: ana sa umarni da fayilolin tunani sau daya, kuma agent yana amfani da su a kowace bukata. Lokacin gudanarwa na hanya ta 2 ne, lambar manhajar sako kuma na hanya ta 5."
      },
      {
        "question": "Darasi 3 — Me ke tayar da agent da aka tsara lokacinsa?",
        "options": [
          { "key": "A", "text": "Sakon kwastoma." },
          { "key": "B", "text": "Fom da aka aiko." },
          { "key": "C", "text": "Lokaci kayyadadde, kowace rana ko kowane mako." },
          { "key": "D", "text": "Abokin aiki, da hannu." }
        ],
        "answer": "C",
        "explanation": "Abin da ke tayar da hanya ta 2 shi ne agogo: « kowace Litinin da karfe 7 », misali. Ko a mako mai cike da aiki, sakamakon yana zuwa. Fom da aka aiko yana tayar da workflow (hanya ta 4), sakon kwastoma kuma agent na dindindin (hanya ta 5)."
      },
      {
        "question": "Darasi 4 — Kuna hada agent da Gmail, ajanda da Drive. Wace doka kuke bi?",
        "options": [
          { "key": "A", "text": "Ba da dukkan damar shiga, don a yi sauri." },
          { "key": "B", "text": "Mafi karancin damar shiga: abin da aikin ke bukata kawai." },
          { "key": "C", "text": "Raba kalmomin sirrinku da agent." },
          { "key": "D", "text": "Barin agent ya aika dukkan imel da kansa." }
        ],
        "answer": "B",
        "explanation": "Idan agent yana da karancin damar shiga, kuskure ko kwace ba za su iya yin barna mai yawa ba. Ana ba shi abin da aikin ke bukata kawai, kamar yadda ake ba mai kawo kaya makullin kofar gida ta waje, ba na cikin gida ba. Ba a taba raba kalmomin sirri."
      },
      {
        "question": "Darasi 5 — Me ke fara workflow na agent a n8n, kamar na Fatoumata?",
        "options": [
          { "key": "A", "text": "Wani abu da ya faru, misali fom da aka aiko." },
          { "key": "B", "text": "Ku kadai, da hannu." },
          { "key": "C", "text": "Samfurin AI, idan ya ga dama." },
          { "key": "D", "text": "Sabunta n8n." }
        ],
        "answer": "A",
        "explanation": "Workflow na hanya ta 4 yana farawa da kansa idan wani abu ya faru: abokin hulda ya cike fom, kuma jerin matakai suna biyo baya (takaitawa, rarrabawa, layi a Google Sheets, daftari, tunatarwa). AI tana yanke shawara kan wasu matakai, ba farawar ba."
      },
      {
        "question": "Darasi 6 — A WhatsApp, me agent ke fada a sakonsa na farko?",
        "options": [
          { "key": "A", "text": "Babu wani abu na musamman." },
          { "key": "B", "text": "Cewa shi ne Ibrahim." },
          { "key": "C", "text": "Cewa yana ba da rangwamen maraba." },
          { "key": "D", "text": "Cewa kwastoma yana magana da mataimaki na atomatik." }
        ],
        "answer": "D",
        "explanation": "Bayyana gaskiya bukata ce ta sigar WhatsApp ta hukuma kuma batun amincewa ne: dole kwastoma ya san cewa yana magana da mataimaki na atomatik. Yin kamar shi ne Ibrahim ko alkawarin rangwame zai zama yaudara."
      },
      {
        "question": "Darasi 7 — Kafin a rubuta oda ko rangwame, me ke faruwa?",
        "options": [
          { "key": "A", "text": "Agent yana yanke shawara shi kadai." },
          { "key": "B", "text": "Dan adam yana amincewa da farko." },
          { "key": "C", "text": "Kwastoma yana amincewa da kansa." },
          { "key": "D", "text": "Babu komai, atomatik ne." }
        ],
        "answer": "B",
        "explanation": "Duk abin da ya shafi shagon yana wucewa ta amincewar dan adam: Ibrahim yana karbar bukatar kuma yana amincewa ko ya ki. Za a iya kauce wa umarni; amincewar dan adam tana toshe aikin har sai wani ya ce i."
      },
      {
        "question": "Darasi 8 — Wanne daga cikin wadannan sassa ne ke cikin fayil din aikin karshe?",
        "options": [
          { "key": "A", "text": "Hanyar da aka zaba, da dalili." },
          { "key": "B", "text": "Kalmomin sirrinku." },
          { "key": "C", "text": "Sunayen gaske na kwastomomi." },
          { "key": "D", "text": "Biyan kudin rajista." }
        ],
        "answer": "A",
        "explanation": "Sassa shida su ne: takardar bayanin agent, hanyar da aka zaba da dalili, hotunan allo, teburin gwaje-gwaje goma, matakan kariya da kimantawa. Asusun kyauta da bayanan kirkira sun isa; kalmomin sirri da sunayen gaske ba su da wuri a cikin fayil."
      },
      {
        "question": "Darasi 8 — Wani fayil yana amfani da sunayen gaske na masu cin gajiya a gwaje-gwajensa. Wane ma’auni ne ya fara kasawa?",
        "options": [
          { "key": "A", "text": "Mai amfani." },
          { "key": "B", "text": "Daidai gwargwado." },
          { "key": "C", "text": "Mai gaskiya." },
          { "key": "D", "text": "Amintacce." }
        ],
        "answer": "D",
        "explanation": "Ma’aunin « amintacce » yana bukatar bayanai kadan da bayanan kirkira kawai a gwaje-gwaje. Amfani da sunayen gaske yana fallasa mutanen da ba su nemi komai ba, ko da agent yana da amfani kuma an zabe shi da kyau."
      }
    ],
    "reflection": "Ga wa, a cikin kungiyarku ko sana’arku, za ku gabatar da agent naku, wace tambaya mutumin zai yi muku kafin ya amince da shi, kuma wane bangare na fayil dinku zai amsa ta?",
    "glossary": [
      {
        "term": "Agent IA (wakilin AI)",
        "definition": "Shirin AI da ke karbar manufa kuma yana aiki da kayan aiki, mataki bayan mataki, a zagaye (lura, yanke shawara, aiki, dubawa), har ya kai ga manufar ko iyakar da aka sa. Mataimaki kuwa yana amsawa ne kawai idan an yi masa magana."
      },
      {
        "term": "Fiche agent (takardar bayanin agent)",
        "definition": "Bayanin agent a shafi daya, a rubrik shida: manufa, umarni, kayan aiki, ajiya, abin da ke tayar da shi, matakan kariya. Ita ce bangare na farko na fayil din aikin karshe."
      },
      {
        "term": "Déclencheur (abin da ke tayar da agent)",
        "definition": "Abin da ke sa agent ya fara aiki: ku (hanya ta 1), lokaci kayyadadde (hanya ta 2), wani abu da ya faru kamar fom da aka aiko (hanya ta 4) ko sakon da aka karba a manhajar sako (hanya ta 5)."
      },
      {
        "term": "Accès minimum (mafi karancin damar shiga)",
        "definition": "Dokar ba wa agent damar shiga da aikinsa ke bukata kawai, kamar yadda ake ba mai kawo kaya makullin kofar gida ta waje, ba na cikin gida ba."
      },
      {
        "term": "Validation humaine (amincewar dan adam)",
        "definition": "Mataki inda dan adam ke amincewa da wani aiki mai muhimmanci (oda, rangwame, aikawa, biya) kafin a aiwatar da shi. Tana toshe aikin, alhali za a iya kauce wa umarni kawai."
      },
      {
        "term": "Test piège (gwajin tarko)",
        "definition": "Sakon gwaji da aka tsara don sa agent ya kasa: bayanin da ba ya nan, korafi, kokarin canza dokokinsa (« ka manta da umarninka »), tambayar da ba ta shafi aikin ba. Aikin karshe yana bukatar hudu cikin gwaje-gwaje goma."
      },
      {
        "term": "Grille d’évaluation (jadawalin kimantawa)",
        "definition": "Ma’auni biyar na aikin karshe (mai amfani, daidai gwargwado, amintacce, an gwada, mai gaskiya), kowanne ana ba shi « an cimma », « an cimma rabi » ko « ba a cimma ba » bisa hujjar da aka dauko daga fayil."
      }
    ]
  }
};
