import { Language } from '../../translations';
import { LessonContent } from '../../lessonContent';

// Module « Choisir le bon outil IA gratuit et installer une IA open source » (outils-ia-gratuits) — leçon og7 (Projet final : la boîte à outils IA)
// Texte aligné sur le CLAUDE.md de production vidéo du cours 15 (docs/production-video/claude-md/).
// Trilingue FR / EN / HA. ⚠️ Traductions HA à faire valider par un locuteur natif haoussa.
export const ogLesson7: Record<Language, LessonContent> = {
  "fr": {
    "id": "og7",
    "lessonNumber": 7,
    "title": "Projet final : construire votre boîte à outils IA, en ligne et installée",
    "objective": "À la fin de cette leçon, vous saurez construire et justifier votre boîte à outils IA : une fiche d’une page qui relie cinq tâches réelles à une famille d’outils, un outil, une raison et un plan B, avec au moins un outil installé sur votre téléphone ou votre ordinateur. Vous saurez appuyer chaque choix sur trois preuves (un test à consigne égale, une source vérifiée, une capture de protection) et sur une règle de données tenue en une phrase. Vous saurez vérifier votre dossier avec les cinq critères du certificat, puis l’exporter en un seul PDF et le déposer. Ce projet final reprend le fil des Leçons 1 à 6 et, avec le quiz cumulatif, débloque votre certificat numérique vérifiable.",
    "video": {
      "fr": "https://www.youtube.com/embed/JySYIN6diRs",
      "en": "",
      "ha": ""
    },
    "content": [
      {
        "title": "Les trois livrables du projet : une fiche justifiée, pas une longue liste d’applications",
        "body": "Ce projet final rassemble tout le cours dans un seul dossier. Un malentendu revient souvent : croire qu’une bonne boîte à outils, c’est une longue liste d’applications. Pensez à la caisse d’un menuisier : il n’y range pas vingt marteaux, mais un outil par usage, qu’il sait manier, et un outil de rechange pour le jour où le premier casse. Votre boîte à outils IA suit la même logique : pour chaque tâche, un outil, une raison et un plan B. Ce qui est évalué, c’est votre raisonnement, pas le nombre de vos applications.\n\nLe dossier compte trois livrables, c’est-à-dire trois pièces à rendre. Un : la fiche d’une page, avec cinq tâches réelles de votre semaine ; pour chacune, la famille d’outils, l’outil choisi, la raison de ce choix et le plan B. Au moins un de ces outils est installé sur votre propre appareil, téléphone ou ordinateur. Deux : trois preuves, une pour chaque grand geste du cours : tester, sourcer, protéger. Trois : une règle de données, écrite en une phrase.\n\nLe cours vous a donné deux volets pour remplir cette fiche. Le volet en ligne, des Leçons 1 à 4 : choisir la famille, comparer les assistants, vérifier les sources, protéger vos données. Le volet installé, avec les Leçons 5 et 6 : faire tourner un modèle open source sur votre téléphone ou votre ordinateur, hors connexion. Un commerçant de Cotonou, au Bénin, qui a douze applications d’IA sur son téléphone n’a pas encore de boîte à outils ; avec cinq lignes justifiées, il en a une."
      },
      {
        "title": "Remplir chaque ligne avec les outils en ligne : famille, test à consigne égale, source ouverte",
        "body": "Chaque ligne commence par la tâche, jamais par l’outil (Leçon 1). Vous la reliez ensuite à l’une des cinq familles : les assistants pour écrire et expliquer, la recherche sourcée pour une information récente, l’image, l’audio, et les outils qui travaillent sur vos propres documents, comme NotebookLM, qui cite le passage exact. Gardez aussi le repère de la Leçon 1 : l’application n’est pas le modèle. ChatGPT, Gemini et Claude sont des applications ; derrière elles tournent des modèles d’IA, qui produisent les réponses. C’est ce repère qui permet ensuite d’installer un modèle sur votre propre appareil.\n\nDans une même famille, c’est le test qui choisit (Leçon 2). Vous collez la même consigne RCTF, mot pour mot, dans plusieurs assistants, chacun dans une nouvelle conversation, et vous remplissez la grille des quatre critères : consigne respectée, aucune information inventée, clarté pour le public, langue correcte. Pas de score total ni de classement : vous choisissez pour cette tâche, et un autre assistant déjà essayé devient votre plan B. Comme les réponses varient d’une fois à l’autre et que les outils changent avec leurs mises à jour, refaites ce test de temps en temps.\n\nPour une information récente, comme une date, un concours ou un programme, la colonne « raison » renvoie à une source ouverte (Leçon 3). Un moteur de réponse comme Perplexity numérote ses sources ; vous ouvrez chacune et posez trois questions : qui parle, quand la page a-t-elle été publiée, et est-ce bien écrit dedans ? Une agente d’ONG de Bamako, au Mali, qui note la date limite d’un appel à projets garde la page de l’organisme qui le finance, avec son lien et le jour de sa vérification, et écarte un article d’une année passée."
      },
      {
        "title": "Protéger vos données et ajouter un outil installé sur votre téléphone ou votre ordinateur",
        "body": "La version gratuite d’un assistant se paie en données et en attention ; la version payante ajoute des fonctions, mais elle ne protège pas automatiquement (Leçon 4). La confidentialité dépend de vos réglages et de ce que vous tapez. Trois gestes vous protègent : couper l’usage de vos conversations pour améliorer l’outil, utiliser la conversation temporaire, supprimer ce qui doit disparaître. Et surtout, une règle de données en une phrase, par exemple : « aucun nom, numéro ni photo de client dans un assistant en ligne ». Vous l’écrivez, puis vous la respectez, comme une règle d’atelier affichée au mur.\n\nL’outil installé est la ligne qui fait la particularité de ce cours. Sur téléphone (Leçon 5), une application comme Google AI Edge Gallery ou PocketPal AI télécharge un modèle open source, par exemple de la famille Gemma, Qwen, Llama ou Mistral. Vous prenez le plus petit modèle proposé, téléchargé une seule fois en wifi ; ensuite, il répond en mode avion, et vos questions restent dans le téléphone. Sur ordinateur (Leçon 6), LM Studio fait la même chose : vous lisez le « B » du modèle (« 4B » signifie environ quatre milliards de paramètres) et vous le comparez à la mémoire vive libre de votre machine avant de télécharger.\n\nSoyez honnête dans la colonne « raison ». Un petit modèle installé donne des réponses plus simples, parfois fausses ; il n’a pas accès à Internet et ne connaît pas l’actualité ; seul, il n’enregistre aucun fichier. Le meilleur modèle est celui que votre appareil supporte et qui correspond à votre usage. Un gérant de cybercafé de Kinshasa, en RDC, dont l’ordinateur a environ 8 Go de mémoire vive, choisit un petit modèle pour rédiger ses annonces de services hors connexion, et garde la recherche sourcée en ligne pour tout ce qui est récent."
      },
      {
        "title": "Les trois preuves, les cinq critères du certificat et le dépôt du dossier",
        "body": "Chaque preuve répond à une question que se pose le correcteur. Le choix est-il testé ? Votre grille remplie, avec la même consigne dans plusieurs assistants (Leçon 2). L’information est-elle vérifiée ? Une source avec son lien et sa date (Leçon 3). Vos données sont-elles protégées ? Une capture de vos réglages de données (Leçon 4), ou de votre IA installée qui répond en mode avion (Leçons 5 et 6). Imaginez qu’une recruteuse d’Abidjan, en Côte d’Ivoire, lise votre dossier : elle doit retrouver, derrière chaque choix, la preuve qui le justifie. Ces preuves sont réelles et ne contiennent aucune donnée personnelle : pas de nom de client, pas de numéro, pas de conversation non anonymisée.\n\nCinq critères comptent pour le certificat : des tâches réelles, celles de votre semaine ; un choix testé, avec la même consigne et la même grille ; des sources ouvertes, avec une date et un lien ; des données protégées, par vos réglages ou par une IA installée ; un plan B, c’est-à-dire un deuxième outil pour chaque tâche. Prenez un contre-exemple : un dossier liste vingt applications, dont trois IA installées, sans test ni plan B. Est-il recevable ? Non. Une liste n’est pas un choix : sans test, sans raison et sans plan B, le dossier revient pour être complété.\n\nPour la mise en page, un assistant peut transformer vos cinq lignes en tableau, avec une consigne RCTF qui lui interdit d’ajouter un outil ou une information. Vous exportez ensuite le tout en un seul fichier PDF, d’une à deux pages, et vous le déposez sur la page du projet final. La réussite de ce projet et du quiz cumulatif débloque votre certificat numérique vérifiable : il porte un QR code que toute personne (un employeur, un enseignant, un partenaire) peut scanner pour vérifier qu’il est authentique, et il reste valable 12 mois. Le certificat récompense votre méthode, pas vos applications."
      }
    ],
    "example": {
      "title": "La boîte à outils de Hadiza, couturière à Maradi, justifiée ligne par ligne",
      "challenge": "Koffi, étudiant en licence à Lomé (Togo), Hadiza, couturière qui tient un atelier près du grand marché de Maradi (Niger), et Mariam, formatrice dans un centre de formation professionnelle de Ouagadougou (Burkina Faso), montent chacun leur boîte à outils IA pour le certificat. Chacun doit prouver chaque choix : testé, sourcé, réglé, avec un plan B, et au moins un outil installé sur son appareil. Hadiza vend ses tenues à ses clientes sur WhatsApp, en français et en haoussa ; elle veut une boîte qui serve vraiment à son atelier, sans jamais faire sortir les coordonnées de ses clientes. Sa fiche sert d’exemple complet. Ces trois cas sont fictifs.",
      "solution": "Dans un outil de documents comme Google Docs, Hadiza remplit sa fiche de cinq tâches. Annoncer ses modèles de fête : un assistant en ligne, choisi avec sa grille de la Leçon 2. Vérifier les dates des Jeux olympiques de la jeunesse de Dakar, pour préparer des tenues à leurs couleurs : la recherche sourcée, avec Perplexity. Illustrer une affiche pour son atelier : un outil d’image, comme Gemini. Résumer le règlement d’un marché : un outil de documents, comme NotebookLM. Préparer hors connexion ses rappels de commande, avec des [prénoms] entre crochets : une IA installée sur son téléphone, Google AI Edge Gallery. Dans la colonne « raison », chaque choix renvoie à un test ; pour l’outil installé, elle écrit « répond en mode avion, rien ne sort du téléphone », avec PocketPal AI comme plan B. Chaque autre ligne a aussi son plan B, un deuxième outil déjà essayé. Elle ajoute ses trois preuves : sa grille remplie, une source avec son lien et sa date, la capture de son IA installée en mode avion. Puis sa règle de données : « aucun nom, numéro ni photo de cliente dans un assistant en ligne ». Koffi et Mariam suivent la même méthode ; leur ligne « outil installé » : réviser hors connexion sur son téléphone pour Koffi, préparer ses sessions avec LM Studio pour Mariam. Hadiza exporte enfin son dossier en PDF et le dépose sur la page du projet final.",
      "impact": "Les trois boîtes sont prêtes : chaque outil est choisi, testé et réglé, et les trois dossiers sont déposés. Celui de Hadiza tient en une à deux pages, sans aucune donnée personnelle : pour chaque tâche de l’atelier, on y lit l’outil, une raison qui renvoie à un test et un deuxième outil déjà essayé. Elle prépare ses rappels de commande même sans réseau, et sa fiche n’affiche aucun nom réel."
    },
    "practice": {
      "title": "Construisez votre boîte à outils et déposez votre dossier",
      "instructions": [
        "Remplissez la fiche : cinq tâches réelles de votre semaine, avec pour chacune la famille, l’outil, la raison et le plan B, dont au moins un outil installé sur votre téléphone ou votre ordinateur. Pour la mise en page, copiez cette consigne dans un assistant, avec vos lignes sans aucune donnée personnelle : « Rôle : tu es un assistant de mise en page. Contexte : voici ma boîte à outils IA pour un projet de formation : [tâche – famille – outil – raison – plan B ; …]. Ce texte ne contient aucune donnée personnelle. Tâche : mets ces cinq lignes en tableau d’une page, avec un titre court. N’ajoute aucun outil et aucune information. Format : un tableau de cinq colonnes (tâche, famille, outil, raison, plan B) ; laisse vide toute case que je n’ai pas remplie. »",
        "Ajoutez les trois preuves (votre grille de test remplie, une source vérifiée avec son lien et sa date, une capture de vos réglages de données ou de votre IA installée qui répond en mode avion) et votre règle de données, en une phrase.",
        "Relisez votre dossier avec les cinq critères (tâches réelles, choix testé, sources ouvertes, données protégées, plan B), puis exportez le tout en un seul fichier PDF et déposez-le sur la page du projet final."
      ],
      "observation": "Vous devez constater que l’assistant met vos lignes en tableau sans rien ajouter : s’il invente un outil ou remplit une case vide, vous corrigez. Chaque ligne de votre fiche doit renvoyer à une preuve : un test, une source ou un réglage. Si une ligne n’a ni raison ni plan B, ou si une donnée personnelle apparaît quelque part, le dossier n’est pas prêt. Le dépôt de ce dossier et la réussite du quiz cumulatif débloquent votre certificat numérique vérifiable."
    },
    "quiz": [
      {
        "question": "Pour remplir une ligne de votre fiche, par quoi commencez-vous ?",
        "options": [
          { "key": "A", "text": "Par l’outil dont tout le monde parle" },
          { "key": "B", "text": "Par la tâche réelle, puis sa famille d’outils" },
          { "key": "C", "text": "Par l’application la plus récente" },
          { "key": "D", "text": "Par un abonnement" }
        ],
        "answer": "B",
        "explanation": "La Leçon 1 l’a posé : la tâche d’abord. Une tâche réelle de votre semaine se relie à une famille (assistants, recherche sourcée, image, audio, documents), et c’est seulement ensuite que l’on choisit un outil dans cette famille. Partir de l’outil à la mode, de la nouveauté ou d’un abonnement, c’est choisir avant de savoir ce dont on a besoin."
      },
      {
        "question": "ChatGPT, Gemini et Claude sont des applications. Qu’est-ce qui tourne derrière elles ?",
        "options": [
          { "key": "A", "text": "Un moteur de recherche" },
          { "key": "B", "text": "Un réseau social" },
          { "key": "C", "text": "Des modèles d’IA, que l’application utilise pour répondre" },
          { "key": "D", "text": "Une liste de clients" }
        ],
        "answer": "C",
        "explanation": "L’application n’est pas le modèle (Leçon 1). L’application est la fenêtre dans laquelle vous tapez ; le modèle d’IA est ce qui produit la réponse, derrière. Ce repère explique les Leçons 5 et 6 : certains modèles ouverts se téléchargent et tournent sur votre propre appareil, sans l’application en ligne."
      },
      {
        "question": "Quelle preuve montre qu’un choix d’assistant a été testé ?",
        "options": [
          { "key": "A", "text": "La même consigne dans plusieurs assistants, chacun dans une nouvelle conversation, avec la grille des quatre critères remplie" },
          { "key": "B", "text": "Le nombre de téléchargements" },
          { "key": "C", "text": "Un avis lu en ligne" },
          { "key": "D", "text": "Le conseil d’un ami" }
        ],
        "answer": "A",
        "explanation": "La Leçon 2 a montré la méthode : une seule consigne, mot pour mot, dans une nouvelle conversation à chaque fois, puis la grille (consigne respectée, rien d’inventé, clarté, langue). Le nombre de téléchargements, un avis ou un conseil disent ce qui plaît aux autres, pas ce qui marche pour votre tâche."
      },
      {
        "question": "Dans Perplexity, une source de votre dossier est un article d’une année passée. Que faites-vous ?",
        "options": [
          { "key": "A", "text": "Vous la gardez, puisqu’elle est numérotée" },
          { "key": "B", "text": "Vous la traduisez" },
          { "key": "C", "text": "Vous la supprimez sans rien dire" },
          { "key": "D", "text": "Vous la remplacez par la page officielle, avec son lien et sa date" }
        ],
        "answer": "D",
        "explanation": "Un numéro ne prouve rien (Leçon 3) : on ouvre la source et on se demande qui parle, quand, et si c’est bien écrit dedans. Un article ancien peut donner une date périmée. Votre preuve doit être la page officielle de l’organisme concerné, notée avec son lien et sa date de vérification."
      },
      {
        "question": "Quelle règle de données est correcte ?",
        "options": [
          { "key": "A", "text": "Tout est permis si le compte est payant" },
          { "key": "B", "text": "Aucun nom, numéro ni photo de client dans un assistant en ligne" },
          { "key": "C", "text": "Les numéros, mais pas les noms" },
          { "key": "D", "text": "Les photos, mais pas les numéros" }
        ],
        "answer": "B",
        "explanation": "La Leçon 4 l’a montré : payer ajoute des fonctions, pas une protection automatique. Une bonne règle de données tient en une phrase et ne laisse aucune exception : ni nom, ni numéro, ni photo de client dans un assistant en ligne. Vous l’écrivez dans votre dossier, puis vous la respectez."
      },
      {
        "question": "Koffi installe une IA sur un téléphone qui a peu d’espace libre. Quel est le bon choix ?",
        "options": [
          { "key": "A", "text": "Le plus gros modèle, pour de meilleures réponses" },
          { "key": "B", "text": "Un modèle téléchargé à chaque question" },
          { "key": "C", "text": "Un modèle prévu pour ordinateur" },
          { "key": "D", "text": "Le plus petit modèle proposé, téléchargé une seule fois en wifi" }
        ],
        "answer": "D",
        "explanation": "Le meilleur modèle est celui que votre appareil supporte (Leçon 5). Sur un téléphone limité, on prend le plus petit modèle proposé et on le télécharge une seule fois, en wifi, pour économiser ses données. Ensuite, il répond en mode avion. Un gros modèle saturerait le téléphone ou ne tournerait pas."
      },
      {
        "question": "Que signifie « 4B », et que faut-il vérifier avant de l’installer avec LM Studio ?",
        "options": [
          { "key": "A", "text": "Quatre milliards de paramètres ; la mémoire vive libre de l’ordinateur" },
          { "key": "B", "text": "Quatrième version ; la couleur de l’écran" },
          { "key": "C", "text": "Quatre gigaoctets ; la vitesse d’Internet" },
          { "key": "D", "text": "Quatre langues ; le clavier" }
        ],
        "answer": "A",
        "explanation": "Le « B » vient de l’anglais billion, milliard (Leçon 6) : « 4B » signifie environ quatre milliards de paramètres. Plus ce nombre est grand, plus le modèle demande de mémoire vive. Avant de télécharger, vous vérifiez donc la mémoire vive libre de votre ordinateur ; si elle manque, le modèle devient lent ou ne se charge pas."
      },
      {
        "question": "Un dossier liste vingt applications, dont trois IA installées, sans test ni plan B. Est-il recevable ?",
        "options": [
          { "key": "A", "text": "Oui, il est complet" },
          { "key": "B", "text": "Oui, s’il contient des IA installées" },
          { "key": "C", "text": "Non : une liste n’est pas un choix, il revient pour test, raison et plan B" },
          { "key": "D", "text": "Oui, si les outils sont connus" }
        ],
        "answer": "C",
        "explanation": "Le projet évalue un raisonnement, pas une collection. Même avec des IA installées, un dossier sans test, sans raison et sans plan B ne remplit pas les critères « choix testé » et « plan B ». Il revient pour être complété : peu d’outils bien choisis valent mieux qu’une longue liste."
      }
    ],
    "reflection": "Parmi les tâches de votre semaine, laquelle confieriez-vous à une IA installée sur votre propre appareil plutôt qu’à un assistant en ligne, et quelle règle de données écririez-vous pour la protéger ?",
    "glossary": [
      {
        "term": "Boîte à outils IA",
        "definition": "Votre sélection personnelle d’outils d’IA : un outil par tâche réelle, chacun avec une raison et un plan B. Comme la caisse d’un artisan : peu d’outils, mais chacun a son usage."
      },
      {
        "term": "Famille d’outils",
        "definition": "Groupe d’outils qui font le même type de travail : assistants, recherche sourcée, image, audio, documents. On choisit la famille avant l’outil."
      },
      {
        "term": "Grille de test",
        "definition": "Tableau de quatre critères (consigne respectée, rien d’inventé, clarté, langue) rempli pour chaque réponse quand on donne la même consigne à plusieurs assistants. Elle sert à choisir pour une tâche, jamais à classer les outils."
      },
      {
        "term": "Source vérifiée",
        "definition": "Page ouverte et contrôlée avec trois questions : qui parle, quand, et est-ce bien écrit dedans ? On la note avec son lien et sa date."
      },
      {
        "term": "Règle de données",
        "definition": "Une phrase qui dit ce que vous ne taperez jamais dans un assistant en ligne, par exemple aucun nom, numéro ni photo de client. On l’écrit, puis on la respecte."
      },
      {
        "term": "IA installée",
        "definition": "Modèle open source téléchargé sur votre téléphone ou votre ordinateur, avec une application comme Google AI Edge Gallery, PocketPal AI ou LM Studio. Il répond hors connexion, et vos questions restent sur votre appareil."
      },
      {
        "term": "Plan B",
        "definition": "Deuxième outil, déjà essayé, prévu pour une tâche si le premier change, ne répond plus ou n’est plus disponible. Comme une roue de secours : on l’espère inutile, mais on la vérifie avant de partir."
      }
    ]
  },
  "en": {
    "id": "og7",
    "lessonNumber": 7,
    "title": "Final project: build your AI toolkit, online and installed",
    "objective": "By the end of this lesson, you will know how to build and justify your AI toolkit: a one-page sheet that links five real tasks to a tool family, a tool, a reason and a plan B, with at least one tool installed on your phone or computer. You will know how to back each choice with three pieces of evidence (a same-prompt test, a verified source, a protection screenshot) and with a one-sentence data rule. You will know how to check your file against the five certificate criteria, then export it as a single PDF and submit it. This final project pulls together the thread of Lessons 1 to 6 and, with the cumulative quiz, unlocks your verifiable digital certificate.",
    "video": {
      "fr": "https://www.youtube.com/embed/JySYIN6diRs",
      "en": "",
      "ha": ""
    },
    "content": [
      {
        "title": "The three project deliverables: a justified sheet, not a long list of apps",
        "body": "This final project brings the whole course together in a single file. A common misunderstanding is to think that a good toolkit is a long list of apps. Think of a carpenter’s toolbox: it does not hold twenty hammers, but one tool per use, which the carpenter knows how to handle, and a spare for the day the first one breaks. Your AI toolkit follows the same logic: for each task, one tool, one reason and a plan B. What is assessed is your reasoning, not the number of your apps.\n\nThe file has three deliverables, that is, three items to hand in. One: the one-page sheet, with five real tasks from your week; for each, the tool family, the chosen tool, the reason for that choice and the plan B. At least one of these tools is installed on your own device, phone or computer. Two: three pieces of evidence, one for each key habit of the course: testing, sourcing, protecting. Three: a data rule, written in one sentence.\n\nThe course gave you two parts to fill in this sheet. The online part, Lessons 1 to 4: choosing the family, comparing assistants, checking sources, protecting your data. The installed part, Lessons 5 and 6: running an open-source model on your phone or computer, offline. A shopkeeper in Cotonou, Benin, with twelve AI apps on his phone does not yet have a toolkit; with five justified lines, he has one."
      },
      {
        "title": "Filling each line with online tools: family, same-prompt test, open source",
        "body": "Each line starts with the task, never with the tool (Lesson 1). You then link it to one of the five families: assistants to write and explain, sourced search for recent information, image, audio, and tools that work on your own documents, such as NotebookLM, which cites the exact passage. Also keep the landmark from Lesson 1: the app is not the model. ChatGPT, Gemini and Claude are apps; behind them run AI models, which produce the answers. This landmark is what later lets you install a model on your own device.\n\nWithin a family, the test decides (Lesson 2). You paste the same RCTF prompt, word for word, into several assistants, each in a new conversation, and you fill in the four-criteria grid: prompt followed, no invented information, clarity for the audience, correct language. No total score and no ranking: you choose for this task, and another assistant you have already tried becomes your plan B. Since answers vary from one time to the next and tools change with their updates, repeat this test from time to time.\n\nFor recent information, such as a date, a competitive exam or a programme, the “reason” column points to an open source (Lesson 3). An answer engine such as Perplexity numbers its sources; you open each one and ask three questions: who is speaking, when was the page published, and is it really written there? An NGO officer in Bamako, Mali, noting the deadline of a call for proposals keeps the page of the organisation that funds it, with its link and the day she checked it, and sets aside an article from a past year."
      },
      {
        "title": "Protecting your data and adding a tool installed on your phone or computer",
        "body": "The free version of an assistant is paid for with data and attention; the paid version adds features, but it does not protect you automatically (Lesson 4). Privacy depends on your settings and on what you type. Three actions protect you: turn off the use of your conversations to improve the tool, use the temporary chat, delete what must disappear. Above all, a one-sentence data rule, for example: “no customer name, number or photo in an online assistant”. You write it, then you stick to it, like a workshop rule pinned on the wall.\n\nThe installed tool is the line that makes this course distinctive. On a phone (Lesson 5), an app such as Google AI Edge Gallery or PocketPal AI downloads an open-source model, for example from the Gemma, Qwen, Llama or Mistral family. You take the smallest model offered, downloaded only once over wifi; after that, it answers in airplane mode, and your questions stay on the phone. On a computer (Lesson 6), LM Studio does the same: you read the model’s “B” (“4B” means about four billion parameters) and compare it with your machine’s free RAM before downloading.\n\nBe honest in the “reason” column. A small installed model gives simpler answers, sometimes wrong ones; it has no Internet access and does not know current events; on its own, it saves no files. The best model is the one your device can handle and that fits your use. An Internet café manager in Kinshasa, DRC, whose computer has about 8 GB of RAM, picks a small model to write his service announcements offline, and keeps online sourced search for anything recent."
      },
      {
        "title": "The three pieces of evidence, the five certificate criteria and submitting the file",
        "body": "Each piece of evidence answers a question the assessor asks. Was the choice tested? Your completed grid, with the same prompt in several assistants (Lesson 2). Is the information verified? A source with its link and date (Lesson 3). Is your data protected? A screenshot of your data settings (Lesson 4), or of your installed AI answering in airplane mode (Lessons 5 and 6). Imagine a recruiter in Abidjan, Côte d’Ivoire, reading your file: behind each choice, she must find the evidence that justifies it. This evidence is real and contains no personal data: no customer name, no number, no conversation that has not been anonymised.\n\nFive criteria count for the certificate: real tasks, the ones from your week; a tested choice, with the same prompt and the same grid; open sources, with a date and a link; protected data, through your settings or an installed AI; a plan B, that is, a second tool for each task. Take a counter-example: a file lists twenty apps, including three installed AIs, with no test and no plan B. Is it acceptable? No. A list is not a choice: without a test, a reason and a plan B, the file is sent back to be completed.\n\nFor the layout, an assistant can turn your five lines into a table, with an RCTF prompt that forbids it to add any tool or information. You then export everything as a single PDF file, one to two pages long, and submit it on the final project page. Passing this project and the cumulative quiz unlocks your verifiable digital certificate: it carries a QR code that anyone (an employer, a teacher, a partner) can scan to check that it is genuine, and it remains valid for 12 months. The certificate rewards your method, not your apps."
      }
    ],
    "example": {
      "title": "Hadiza’s toolkit, a dressmaker in Maradi, justified line by line",
      "challenge": "Koffi, an undergraduate student in Lomé (Togo), Hadiza, a dressmaker who runs a workshop near the main market in Maradi (Niger), and Mariam, a trainer at a vocational training centre in Ouagadougou (Burkina Faso), each build their AI toolkit for the certificate. Each must prove every choice: tested, sourced, configured, with a plan B, and at least one tool installed on their device. Hadiza sells her outfits to her customers on WhatsApp, in French and in Hausa; she wants a toolkit that truly serves her workshop, without ever letting her customers’ contact details leave her hands. Her sheet serves as the complete example. All three cases are fictional.",
      "solution": "In a documents tool such as Google Docs, Hadiza fills in her sheet with five tasks. Announcing her festive designs: an online assistant, chosen with her grid from Lesson 2. Checking the dates of the Dakar Youth Olympic Games, to prepare outfits in their colours: sourced search, with Perplexity. Illustrating a poster for her workshop: an image tool, such as Gemini. Summarising a market’s rules: a documents tool, such as NotebookLM. Preparing her order reminders offline, with [first names] in brackets: an AI installed on her phone, Google AI Edge Gallery. In the “reason” column, each choice points to a test; for the installed tool, she writes “answers in airplane mode, nothing leaves the phone”, with PocketPal AI as plan B. Every other line also has its plan B, a second tool already tried. She adds her three pieces of evidence: her completed grid, a source with its link and date, the screenshot of her installed AI in airplane mode. Then her data rule: “no customer name, number or photo in an online assistant”. Koffi and Mariam follow the same method; their “installed tool” line: revising offline on his phone for Koffi, preparing her sessions with LM Studio for Mariam. Finally, Hadiza exports her file as a PDF and submits it on the final project page.",
      "impact": "All three toolkits are ready: every tool is chosen, tested and configured, and all three files are submitted. Hadiza’s fits on one to two pages, with no personal data: for each workshop task, you can read the tool, a reason that points to a test and a second tool already tried. She prepares her order reminders even without a network, and her sheet shows no real name."
    },
    "practice": {
      "title": "Build your toolkit and submit your file",
      "instructions": [
        "Fill in the sheet: five real tasks from your week, each with its family, tool, reason and plan B, including at least one tool installed on your phone or computer. For the layout, copy this prompt into an assistant, with your lines and no personal data: “Role: you are a layout assistant. Context: here is my AI toolkit for a training project: [task – family – tool – reason – plan B; …]. This text contains no personal data. Task: put these five lines into a one-page table, with a short title. Do not add any tool or any information. Format: a five-column table (task, family, tool, reason, plan B); leave blank any cell I have not filled in.”",
        "Add the three pieces of evidence (your completed test grid, a verified source with its link and date, a screenshot of your data settings or of your installed AI answering in airplane mode) and your data rule, in one sentence.",
        "Review your file against the five criteria (real tasks, tested choice, open sources, protected data, plan B), then export everything as a single PDF file and submit it on the final project page."
      ],
      "observation": "You should notice that the assistant puts your lines into a table without adding anything: if it invents a tool or fills in a blank cell, you correct it. Each line of your sheet must point to a piece of evidence: a test, a source or a setting. If a line has no reason or no plan B, or if personal data appears anywhere, the file is not ready. Submitting this file and passing the cumulative quiz unlock your verifiable digital certificate."
    },
    "quiz": [
      {
        "question": "To fill in a line of your sheet, where do you start?",
        "options": [
          { "key": "A", "text": "With the tool everyone talks about" },
          { "key": "B", "text": "With the real task, then its tool family" },
          { "key": "C", "text": "With the newest app" },
          { "key": "D", "text": "With a subscription" }
        ],
        "answer": "B",
        "explanation": "Lesson 1 set the rule: the task first. A real task from your week links to a family (assistants, sourced search, image, audio, documents), and only then do you choose a tool within that family. Starting from the trendy tool, the newest app or a subscription means choosing before knowing what you need."
      },
      {
        "question": "ChatGPT, Gemini and Claude are apps. What runs behind them?",
        "options": [
          { "key": "A", "text": "A search engine" },
          { "key": "B", "text": "A social network" },
          { "key": "C", "text": "AI models, which the app uses to answer" },
          { "key": "D", "text": "A customer list" }
        ],
        "answer": "C",
        "explanation": "The app is not the model (Lesson 1). The app is the window you type into; the AI model is what produces the answer, behind it. This landmark explains Lessons 5 and 6: some open models can be downloaded and run on your own device, without the online app."
      },
      {
        "question": "Which piece of evidence shows that a choice of assistant was tested?",
        "options": [
          { "key": "A", "text": "The same prompt in several assistants, each in a new conversation, with the four-criteria grid filled in" },
          { "key": "B", "text": "The number of downloads" },
          { "key": "C", "text": "A review read online" },
          { "key": "D", "text": "A friend’s advice" }
        ],
        "answer": "A",
        "explanation": "Lesson 2 showed the method: a single prompt, word for word, in a new conversation each time, then the grid (prompt followed, nothing invented, clarity, language). The number of downloads, a review or advice tell you what others like, not what works for your task."
      },
      {
        "question": "In Perplexity, one source in your file is an article from a past year. What do you do?",
        "options": [
          { "key": "A", "text": "You keep it, since it is numbered" },
          { "key": "B", "text": "You translate it" },
          { "key": "C", "text": "You delete it without saying anything" },
          { "key": "D", "text": "You replace it with the official page, with its link and date" }
        ],
        "answer": "D",
        "explanation": "A number proves nothing (Lesson 3): you open the source and ask who is speaking, when, and whether it is really written there. An old article may give an outdated date. Your evidence must be the official page of the organisation concerned, noted with its link and the date you checked it."
      },
      {
        "question": "Which data rule is correct?",
        "options": [
          { "key": "A", "text": "Anything goes if the account is paid" },
          { "key": "B", "text": "No customer name, number or photo in an online assistant" },
          { "key": "C", "text": "Numbers, but not names" },
          { "key": "D", "text": "Photos, but not numbers" }
        ],
        "answer": "B",
        "explanation": "Lesson 4 showed it: paying adds features, not automatic protection. A good data rule fits in one sentence and leaves no exception: no customer name, number or photo in an online assistant. You write it in your file, then you stick to it."
      },
      {
        "question": "Koffi installs an AI on a phone with little free space. What is the right choice?",
        "options": [
          { "key": "A", "text": "The biggest model, for better answers" },
          { "key": "B", "text": "A model downloaded for each question" },
          { "key": "C", "text": "A model meant for a computer" },
          { "key": "D", "text": "The smallest model offered, downloaded only once over wifi" }
        ],
        "answer": "D",
        "explanation": "The best model is the one your device can handle (Lesson 5). On a limited phone, you take the smallest model offered and download it only once, over wifi, to save your mobile data. After that, it answers in airplane mode. A big model would fill up the phone or would not run."
      },
      {
        "question": "What does “4B” mean, and what must you check before installing it with LM Studio?",
        "options": [
          { "key": "A", "text": "Four billion parameters; the computer’s free RAM" },
          { "key": "B", "text": "Fourth version; the screen colour" },
          { "key": "C", "text": "Four gigabytes; the Internet speed" },
          { "key": "D", "text": "Four languages; the keyboard" }
        ],
        "answer": "A",
        "explanation": "The “B” stands for billion (Lesson 6): “4B” means about four billion parameters. The bigger this number, the more RAM the model needs. Before downloading, you therefore check your computer’s free RAM; if there is not enough, the model becomes slow or does not load."
      },
      {
        "question": "A file lists twenty apps, including three installed AIs, with no test and no plan B. Is it acceptable?",
        "options": [
          { "key": "A", "text": "Yes, it is complete" },
          { "key": "B", "text": "Yes, if it contains installed AIs" },
          { "key": "C", "text": "No: a list is not a choice, it is sent back for a test, a reason and a plan B" },
          { "key": "D", "text": "Yes, if the tools are well known" }
        ],
        "answer": "C",
        "explanation": "The project assesses reasoning, not a collection. Even with installed AIs, a file with no test, no reason and no plan B does not meet the “tested choice” and “plan B” criteria. It is sent back to be completed: a few well-chosen tools are worth more than a long list."
      }
    ],
    "reflection": "Among the tasks in your week, which one would you hand to an AI installed on your own device rather than to an online assistant, and what data rule would you write to protect it?",
    "glossary": [
      {
        "term": "AI toolkit",
        "definition": "Your personal selection of AI tools: one tool per real task, each with a reason and a plan B. Like a craftsman’s toolbox: few tools, but each has its use."
      },
      {
        "term": "Tool family",
        "definition": "A group of tools that do the same kind of work: assistants, sourced search, image, audio, documents. You choose the family before the tool."
      },
      {
        "term": "Test grid",
        "definition": "A table of four criteria (prompt followed, nothing invented, clarity, language) filled in for each answer when you give the same prompt to several assistants. It is used to choose for a task, never to rank tools."
      },
      {
        "term": "Verified source",
        "definition": "A page opened and checked with three questions: who is speaking, when, and is it really written there? You note it with its link and date."
      },
      {
        "term": "Data rule",
        "definition": "One sentence stating what you will never type into an online assistant, for example no customer name, number or photo. You write it, then you stick to it."
      },
      {
        "term": "Installed AI",
        "definition": "An open-source model downloaded onto your phone or computer, with an app such as Google AI Edge Gallery, PocketPal AI or LM Studio. It answers offline, and your questions stay on your device."
      },
      {
        "term": "Plan B",
        "definition": "A second tool, already tried, kept ready for a task in case the first one changes, stops answering or is no longer available. Like a spare tyre: you hope not to need it, but you check it before setting off."
      }
    ]
  },
  "ha": {
    "id": "og7",
    "lessonNumber": 7,
    "title": "Aikin karshe: ku gina akwatin kayan aikin AI naku, na kan layi da wanda aka girka",
    "objective": "A karshen wannan darasi, za ku iya ginawa da kuma bayyana dalilan akwatin kayan aikin AI naku: takarda shafi daya da ke danganta ayyuka biyar na gaske da rukunin kayan aiki, kayan aiki, dalili da zabi na biyu (plan B), tare da akalla kayan aiki daya da aka girka a wayarku ko kwamfutarku. Za ku iya tallafa wa kowane zabi da hujjoji uku (gwaji da umarni iri daya, majiya da aka tantance, hoton allo na kariya) da kuma dokar bayanai a jumla daya. Za ku iya duba fayil dinku da ma’auni biyar na takardar shaida, sannan ku fitar da shi a PDF guda daya ku mika shi. Wannan aikin karshe yana tattara zaren Darasi 1 zuwa 6, kuma tare da tambayoyin jarrabawa na tattarawa, yana bude muku takardar shaida ta dijital da za a iya tantancewa.",
    "video": {
      "fr": "https://www.youtube.com/embed/JySYIN6diRs",
      "en": "",
      "ha": ""
    },
    "content": [
      {
        "title": "Abubuwa uku da za a mika a aikin: takarda mai dalilai, ba dogon jerin manhajoji ba",
        "body": "Wannan aikin karshe yana tattara dukan kwas din a cikin fayil guda. Akwai kuskuren fahimta da ake yawan yi: tunanin cewa akwatin kayan aiki mai kyau shi ne dogon jerin manhajoji. Ku yi tunanin akwatin kafinta: ba ya ajiye gudumomi ashirin a ciki, sai dai kayan aiki daya ga kowane amfani, wanda ya iya sarrafawa, da na ajiya don ranar da na farko ya karye. Akwatin kayan aikin AI naku yana bin wannan tunani: ga kowane aiki, kayan aiki daya, dalili daya da zabi na biyu. Abin da ake kimantawa shi ne tunaninku, ba yawan manhajojinku ba.\n\nFayil din yana da abubuwa uku da za a mika. Na daya: takarda shafi daya, da ayyuka biyar na gaske daga makon ku; ga kowane aiki, rukunin kayan aiki, kayan aikin da aka zaba, dalilin zabin da zabi na biyu. Akalla daya daga cikin wadannan kayan aiki an girka shi a na’urarku, waya ko kwamfuta. Na biyu: hujjoji uku, daya ga kowane babban mataki na kwas din: gwadawa, nuna majiya, karewa. Na uku: dokar bayanai, a rubuce cikin jumla daya.\n\nKwas din ya ba ku bangarori biyu don cike wannan takarda. Bangaren kan layi, Darasi 1 zuwa 4: zabar rukuni, kwatanta mataimakan AI, tantance majiyoyi, kare bayananku. Bangaren da aka girka, Darasi 5 da 6: sarrafa samfurin AI na budadden tushe (open source) a wayarku ko kwamfutarku, ba tare da intanet ba. Dan kasuwa a Cotonou, a Benin, wanda ke da manhajojin AI goma sha biyu a wayarsa bai riga ya mallaki akwatin kayan aiki ba; da layuka biyar masu dalilai, ya mallaka."
      },
      {
        "title": "Cike kowane layi da kayan aikin kan layi: rukuni, gwaji da umarni iri daya, majiya a bude",
        "body": "Kowane layi yana farawa da aikin, ba da kayan aiki ba (Darasi 1). Sannan ku danganta shi da daya daga cikin rukunoni biyar: mataimakan AI don rubutu da bayani, bincike mai majiya don sabon labari, hoto, sauti, da kayan aikin da ke aiki a kan takardunku, kamar NotebookLM, wanda ke ambaton ainihin wurin da aka samo bayanin. Ku tuna kuma alamar Darasi 1: manhaja ba ita ce samfurin AI ba. ChatGPT, Gemini da Claude manhajoji ne; a bayansu samfuran AI ne ke aiki, su ne ke samar da amsoshi. Wannan alama ce ke ba ku damar girka samfuri a na’urarku daga baya.\n\nA cikin rukuni daya, gwaji ne ke yanke shawara (Darasi 2). Kuna manna umarnin RCTF iri daya, kalma bayan kalma, a cikin mataimakan AI da dama, kowanne a sabuwar tattaunawa, sannan ku cike teburin ma’auni hudu: an bi umarni, babu bayanin kirkira, saukin fahimta ga masu karatu, harshe daidai. Babu jimillar maki, babu jeri na matsayi: kuna zabi don wannan aikin, kuma wani mataimaki da kuka riga kuka gwada ya zama zabinku na biyu. Tun da amsoshi suna canzawa daga lokaci zuwa lokaci, kuma kayan aiki suna canzawa da sabuntawarsu, ku sake yin wannan gwaji lokaci-lokaci.\n\nGa sabon bayani, kamar kwanan wata, jarrabawar shiga ko wani shiri, ginshikin « dalili » yana nuna majiya a bude (Darasi 3). Injin amsa kamar Perplexity yana sanya lambobi a majiyoyinsa; kuna bude kowace majiya ku yi tambayoyi uku: wa ke magana, yaushe aka wallafa shafin, kuma shin da gaske an rubuta haka a ciki? Ma’aikaciyar kungiya mai zaman kanta a Bamako, a Mali, da ke rubuta ranar karshe ta neman tallafin aiki tana ajiye shafin kungiyar da ke ba da kudin, tare da mahadarsa da ranar da ta tantance shi, kuma tana watsi da labarin wata shekarar da ta wuce."
      },
      {
        "title": "Kare bayananku da kara kayan aikin da aka girka a wayarku ko kwamfutarku",
        "body": "Ana biyan sigar kyauta ta mataimakin AI da bayanai da hankali; sigar biya tana kara ayyuka, amma ba ta karewa kai tsaye (Darasi 4). Sirrin bayanai ya dogara ne da saitunanku da abin da kuke rubutawa. Matakai uku suna kare ku: kashe amfani da tattaunawarku don inganta kayan aikin, amfani da tattaunawa ta wucin gadi, goge abin da dole ne ya bace. Fiye da komai, dokar bayanai a jumla daya, misali: « babu sunan abokin ciniki, lambarsa ko hotonsa a cikin mataimakin AI na kan layi ». Kuna rubuta ta, sannan ku bi ta, kamar dokar bita da aka manna a bango.\n\nKayan aikin da aka girka shi ne layin da ya bambanta wannan kwas. A waya (Darasi 5), manhaja kamar Google AI Edge Gallery ko PocketPal AI tana sauke samfurin AI na budadden tushe, misali daga rukunin Gemma, Qwen, Llama ko Mistral. Kuna daukar mafi kankantar samfurin da aka gabatar, wanda ake saukewa sau daya kawai ta wifi; bayan haka, yana amsawa a yanayin jirgin sama, kuma tambayoyinku suna zama a cikin wayar. A kwamfuta (Darasi 6), LM Studio yana yin haka: kuna karanta « B » na samfurin (« 4B » na nufin kusan biliyan hudu na sigogi) kuma ku kwatanta shi da sararin RAM (memori) na kwamfutarku kafin sauke shi.\n\nKu fadi gaskiya a ginshikin « dalili ». Karamin samfurin da aka girka yana ba da amsoshi masu sauki, wani lokaci kuma kuskure; ba shi da damar shiga intanet kuma bai san labaran yau ba; shi kadai, ba ya ajiye kowane fayil. Mafi kyawun samfuri shi ne wanda na’urarku za ta iya dauka kuma ya dace da amfaninku. Manajan cibiyar intanet a Kinshasa, a RDC, wanda kwamfutarsa ke da kusan 8 Go na RAM, yana zabar karamin samfuri don rubuta sanarwar ayyukansa ba tare da intanet ba, kuma yana ajiye bincike mai majiya na kan layi don duk wani sabon abu."
      },
      {
        "title": "Hujjoji uku, ma’auni biyar na takardar shaida da mika fayil",
        "body": "Kowace hujja tana amsa tambayar da mai kimantawa ke yi. An gwada zabin? Teburin gwajinku da aka cike, da umarni iri daya a cikin mataimakan AI da dama (Darasi 2). An tantance bayanin? Majiya tare da mahadarta da kwanan watanta (Darasi 3). An kare bayananku? Hoton allo na saitunan bayananku (Darasi 4), ko na AI dinku da aka girka tana amsawa a yanayin jirgin sama (Darasi 5 da 6). Ku yi tunanin wata mai daukar ma’aikata a Abidjan, a Côte d’Ivoire, tana karanta fayil dinku: a bayan kowane zabi, dole ne ta sami hujjar da ta tabbatar da shi. Wadannan hujjoji na gaske ne kuma ba su dauke da wani bayanin sirri na mutum: babu sunan abokin ciniki, babu lamba, babu tattaunawar da ba a boye sunaye ba.\n\nMa’auni biyar ne ke da muhimmanci ga takardar shaida: ayyuka na gaske, na makon ku; zabin da aka gwada, da umarni iri daya da tebur iri daya; majiyoyi a bude, da kwanan wata da mahada; bayanan da aka kare, ta saitunanku ko ta AI da aka girka; zabi na biyu, wato kayan aiki na biyu ga kowane aiki. Ga misali na abin da bai kamata ba: wani fayil yana lissafa manhajoji ashirin, ciki har da AI uku da aka girka, ba tare da gwaji ko zabi na biyu ba. Za a karbe shi? A’a. Jeri ba zabi ba ne: ba tare da gwaji, dalili da zabi na biyu ba, fayil din zai dawo don a cika shi.\n\nDon tsara shafi, mataimakin AI zai iya mayar da layukanku biyar zuwa tebur, da umarnin RCTF da ya hana shi kara wani kayan aiki ko wani bayani. Sannan kuna fitar da komai a fayil PDF guda daya, shafi daya zuwa biyu, ku mika shi a shafin aikin karshe. Nasarar wannan aikin da tambayoyin jarrabawa na tattarawa tana bude muku takardar shaida ta dijital da za a iya tantancewa: tana dauke da QR code wanda kowa (mai daukar aiki, malami, abokin hulda) zai iya duba shi don tabbatar da sahihancinta, kuma tana aiki har watanni 12. Takardar shaidar tana ba da lada ga hanyarku, ba ga manhajojinku ba."
      }
    ],
    "example": {
      "title": "Akwatin kayan aikin Hadiza, tela a Maradi, da dalilan kowane layi",
      "challenge": "Koffi, dalibin digiri na farko a Lomé (Togo), Hadiza, tela da ke da bita kusa da babbar kasuwar Maradi (Niger), da Mariam, mai horarwa a cibiyar koyon sana’o’i ta Ouagadougou (Burkina Faso), kowannensu yana gina akwatin kayan aikin AI nasa don takardar shaida. Kowannensu dole ne ya tabbatar da kowane zabi: an gwada, an nuna majiya, an saita, tare da zabi na biyu, da akalla kayan aiki daya da aka girka a na’urarsa. Hadiza tana sayar da kayan sawa ga abokan cinikinta ta WhatsApp, da Faransanci da Hausa; tana son akwati da zai yi wa bitarta amfani da gaske, ba tare da bayanan tuntubar abokan cinikinta sun fita ba. Takardarta ita ce cikakken misali. Wadannan labarai uku na kirkira ne.",
      "solution": "A cikin kayan aikin takardu kamar Google Docs, Hadiza tana cike takardarta da ayyuka biyar. Sanar da sababbin samfuran kayan biki: mataimakin AI na kan layi, wanda ta zaba da teburin gwajinta na Darasi 2. Tabbatar da ranakun wasannin Olympics na matasa na Dakar, don shirya tufafi masu launukansu: bincike mai majiya, da Perplexity. Zana fosta don bitarta: kayan aikin hoto, kamar Gemini. Takaita dokokin wata kasuwa: kayan aikin takardu, kamar NotebookLM. Shirya tunasarwar oda ba tare da intanet ba, da [sunaye] a cikin baka: AI da aka girka a wayarta, Google AI Edge Gallery. A ginshikin « dalili », kowane zabi yana nuna wani gwaji; ga kayan aikin da aka girka, ta rubuta « yana amsawa a yanayin jirgin sama, babu abin da ke fita daga wayar », da PocketPal AI a matsayin zabi na biyu. Kowane sauran layi ma yana da zabinsa na biyu, kayan aiki na biyu da aka riga aka gwada. Ta kara hujjojinta uku: teburin gwajinta da aka cike, majiya tare da mahadarta da kwanan watanta, hoton allo na AI dinta da aka girka a yanayin jirgin sama. Sannan dokar bayananta: « babu sunan abokiyar ciniki, lambarta ko hotonta a cikin mataimakin AI na kan layi ». Koffi da Mariam suna bin wannan hanya; layinsu na « kayan aikin da aka girka »: yin bita ba tare da intanet ba a wayarsa ga Koffi, shirya zamannin horo da LM Studio ga Mariam. A karshe, Hadiza ta fitar da fayil dinta a PDF ta mika shi a shafin aikin karshe.",
      "impact": "Akwatuna ukun sun shirya: kowane kayan aiki an zaba shi, an gwada shi kuma an saita shi, kuma an mika fayiloli ukun. Na Hadiza yana cikin shafi daya zuwa biyu, ba tare da wani bayanin sirri ba: ga kowane aikin bita, ana karanta kayan aikin, dalilin da ke nuna gwaji da kayan aiki na biyu da aka riga aka gwada. Tana shirya tunasarwar oda ko babu network, kuma takardarta ba ta nuna sunan gaske ko daya ba."
    },
    "practice": {
      "title": "Ku gina akwatin kayan aikinku kuma ku mika fayil dinku",
      "instructions": [
        "Ku cike takardar: ayyuka biyar na gaske daga makon ku, kowanne da rukuninsa, kayan aikinsa, dalilinsa da zabinsa na biyu, ciki har da akalla kayan aiki daya da aka girka a wayarku ko kwamfutarku. Don tsara shafi, ku kwafi wannan umarni a cikin mataimakin AI, tare da layukanku ba tare da wani bayanin sirri ba: « Rawa: kai mataimakin tsara shafi ne. Mahalli: ga akwatin kayan aikin AI na don aikin horo: [aiki – rukuni – kayan aiki – dalili – zabi na biyu ; …]. Wannan rubutu ba ya dauke da wani bayanin sirri na mutum. Aiki: sanya wadannan layuka biyar a tebur na shafi daya, da gajeren take. Kada ka kara wani kayan aiki ko wani bayani. Tsari: tebur mai ginshikai biyar (aiki, rukuni, kayan aiki, dalili, zabi na biyu); bar duk akwatin da ban cike ba babu komai. »",
        "Ku kara hujjoji uku (teburin gwajinku da aka cike, majiya da aka tantance tare da mahadarta da kwanan watanta, hoton allo na saitunan bayananku ko na AI dinku da aka girka tana amsawa a yanayin jirgin sama) da dokar bayananku, a jumla daya.",
        "Ku sake karanta fayil dinku da ma’auni biyar (ayyuka na gaske, zabin da aka gwada, majiyoyi a bude, bayanan da aka kare, zabi na biyu), sannan ku fitar da komai a fayil PDF guda daya ku mika shi a shafin aikin karshe."
      ],
      "observation": "Ya kamata ku lura cewa mataimakin AI yana sanya layukanku a tebur ba tare da kara komai ba: idan ya kirkiri wani kayan aiki ko ya cike akwatin da babu komai, ku gyara. Kowane layi na takardarku dole ne ya nuna wata hujja: gwaji, majiya ko saiti. Idan wani layi ba shi da dalili ko zabi na biyu, ko kuma wani bayanin sirri ya bayyana a ko’ina, fayil din bai shirya ba. Mika wannan fayil da nasara a tambayoyin jarrabawa na tattarawa suna bude muku takardar shaida ta dijital da za a iya tantancewa."
    },
    "quiz": [
      {
        "question": "Don cike layi daya na takardarku, da me kuke farawa?",
        "options": [
          { "key": "A", "text": "Da kayan aikin da kowa ke magana a kai" },
          { "key": "B", "text": "Da aikin gaske, sannan rukunin kayan aikinsa" },
          { "key": "C", "text": "Da manhaja mafi sabo" },
          { "key": "D", "text": "Da biyan kudin rajista" }
        ],
        "answer": "B",
        "explanation": "Darasi 1 ya kafa ka’idar: aikin farko. Aikin gaske daga makon ku yana danganta da rukuni (mataimakan AI, bincike mai majiya, hoto, sauti, takardu), sannan kawai ake zabar kayan aiki a cikin wannan rukuni. Farawa da kayan aikin da ake yayi, sabuwar manhaja ko biyan kudin rajista yana nufin zabi kafin a san abin da ake bukata."
      },
      {
        "question": "ChatGPT, Gemini da Claude manhajoji ne. Me ke aiki a bayansu?",
        "options": [
          { "key": "A", "text": "Injin bincike" },
          { "key": "B", "text": "Kafar sada zumunta" },
          { "key": "C", "text": "Samfuran AI, wadanda manhajar ke amfani da su don amsawa" },
          { "key": "D", "text": "Jerin abokan ciniki" }
        ],
        "answer": "C",
        "explanation": "Manhaja ba ita ce samfurin AI ba (Darasi 1). Manhaja ita ce tagar da kuke rubutu a ciki; samfurin AI shi ne ke samar da amsa, a baya. Wannan alama tana bayyana Darasi 5 da 6: wasu samfura na budadden tushe ana iya sauke su su yi aiki a na’urarku, ba tare da manhajar kan layi ba."
      },
      {
        "question": "Wace hujja ce ke nuna cewa an gwada zabin mataimakin AI?",
        "options": [
          { "key": "A", "text": "Umarni iri daya a cikin mataimakan AI da dama, kowanne a sabuwar tattaunawa, tare da teburin ma’auni hudu da aka cike" },
          { "key": "B", "text": "Yawan saukewa" },
          { "key": "C", "text": "Ra’ayin da aka karanta a intanet" },
          { "key": "D", "text": "Shawarar aboki" }
        ],
        "answer": "A",
        "explanation": "Darasi 2 ya nuna hanyar: umarni guda, kalma bayan kalma, a sabuwar tattaunawa kowane lokaci, sannan teburin (an bi umarni, babu kirkira, saukin fahimta, harshe). Yawan saukewa, ra’ayi ko shawara suna nuna abin da wasu ke so, ba abin da ke aiki ga aikinku ba."
      },
      {
        "question": "A cikin Perplexity, daya daga cikin majiyoyin fayil dinku labari ne na wata shekarar da ta wuce. Me za ku yi?",
        "options": [
          { "key": "A", "text": "Ku ajiye ta, tun da tana da lamba" },
          { "key": "B", "text": "Ku fassara ta" },
          { "key": "C", "text": "Ku goge ta ba tare da cewa komai ba" },
          { "key": "D", "text": "Ku maye gurbinta da shafin hukuma, tare da mahadarsa da kwanan watansa" }
        ],
        "answer": "D",
        "explanation": "Lamba ba ta tabbatar da komai ba (Darasi 3): kuna bude majiyar ku tambayi wa ke magana, yaushe, kuma shin da gaske an rubuta haka a ciki. Tsohon labari na iya ba da kwanan watan da ya wuce. Hujjarku dole ne ta zama shafin hukuma na kungiyar da abin ya shafa, tare da mahadarsa da ranar da kuka tantance shi."
      },
      {
        "question": "Wace dokar bayanai ce daidai?",
        "options": [
          { "key": "A", "text": "Komai ya halatta idan asusun na biya ne" },
          { "key": "B", "text": "Babu sunan abokin ciniki, lambarsa ko hotonsa a cikin mataimakin AI na kan layi" },
          { "key": "C", "text": "Lambobi, amma ba sunaye ba" },
          { "key": "D", "text": "Hotuna, amma ba lambobi ba" }
        ],
        "answer": "B",
        "explanation": "Darasi 4 ya nuna: biya yana kara ayyuka, ba kariya ta kai tsaye ba. Dokar bayanai mai kyau tana cikin jumla daya kuma ba ta barin wani kebewa: babu suna, lamba ko hoton abokin ciniki a cikin mataimakin AI na kan layi. Kuna rubuta ta a fayil dinku, sannan ku bi ta."
      },
      {
        "question": "Koffi yana girka AI a wayar da ke da karancin sarari. Menene zabi daidai?",
        "options": [
          { "key": "A", "text": "Mafi girman samfuri, don samun amsoshi mafi kyau" },
          { "key": "B", "text": "Samfurin da ake saukewa a kowace tambaya" },
          { "key": "C", "text": "Samfurin da aka tanada don kwamfuta" },
          { "key": "D", "text": "Mafi kankantar samfurin da aka gabatar, wanda ake saukewa sau daya kawai ta wifi" }
        ],
        "answer": "D",
        "explanation": "Mafi kyawun samfuri shi ne wanda na’urarku za ta iya dauka (Darasi 5). A waya mai iyakantaccen sarari, ana daukar mafi kankantar samfurin da aka gabatar a sauke shi sau daya kawai, ta wifi, don tattalin data. Bayan haka, yana amsawa a yanayin jirgin sama. Babban samfuri zai cika wayar ko ba zai yi aiki ba."
      },
      {
        "question": "Me « 4B » ke nufi, kuma me ya kamata a duba kafin a girka shi da LM Studio?",
        "options": [
          { "key": "A", "text": "Biliyan hudu na sigogi; sararin RAM na kwamfutar" },
          { "key": "B", "text": "Siga ta hudu; launin allo" },
          { "key": "C", "text": "Gigabyte hudu; saurin intanet" },
          { "key": "D", "text": "Harsuna hudu; madannin rubutu" }
        ],
        "answer": "A",
        "explanation": "« B » ya fito ne daga kalmar Turanci billion, wato biliyan (Darasi 6): « 4B » na nufin kusan biliyan hudu na sigogi. Idan wannan adadi ya fi girma, samfurin yana bukatar karin RAM. Kafin sauke shi, saboda haka, kuna duba sararin RAM na kwamfutarku; idan bai isa ba, samfurin zai yi jinkiri ko ba zai loda ba."
      },
      {
        "question": "Wani fayil yana lissafa manhajoji ashirin, ciki har da AI uku da aka girka, ba tare da gwaji ko zabi na biyu ba. Za a karbe shi?",
        "options": [
          { "key": "A", "text": "E, ya cika" },
          { "key": "B", "text": "E, idan yana da AI da aka girka" },
          { "key": "C", "text": "A’a: jeri ba zabi ba ne, zai dawo don gwaji, dalili da zabi na biyu" },
          { "key": "D", "text": "E, idan kayan aikin sanannu ne" }
        ],
        "answer": "C",
        "explanation": "Aikin yana kimanta tunani, ba tarin abubuwa ba. Ko da akwai AI da aka girka, fayil ba tare da gwaji, dalili da zabi na biyu ba bai cika ma’aunin « zabin da aka gwada » da « zabi na biyu » ba. Zai dawo don a cika shi: kayan aiki kadan da aka zaba da kyau sun fi dogon jeri."
      }
    ],
    "reflection": "Daga cikin ayyukan makon ku, wanne za ku ba wa AI da aka girka a na’urarku maimakon mataimakin AI na kan layi, kuma wace dokar bayanai za ku rubuta don kare shi?",
    "glossary": [
      {
        "term": "Boîte à outils IA (akwatin kayan aikin AI)",
        "definition": "Zabinku na kanku na kayan aikin AI: kayan aiki daya ga kowane aiki na gaske, kowanne da dalili da zabi na biyu. Kamar akwatin mai sana’a: kayan aiki kadan, amma kowanne yana da amfaninsa."
      },
      {
        "term": "Famille d’outils (rukunin kayan aiki)",
        "definition": "Rukunin kayan aiki da ke yin irin aiki daya: mataimakan AI, bincike mai majiya, hoto, sauti, takardu. Ana zabar rukuni kafin kayan aiki."
      },
      {
        "term": "Grille de test (teburin gwaji)",
        "definition": "Tebur na ma’auni hudu (an bi umarni, babu kirkira, saukin fahimta, harshe) da ake cikewa ga kowace amsa idan aka ba mataimakan AI da dama umarni iri daya. Ana amfani da shi don zabi ga wani aiki, ba don jera kayan aiki ba."
      },
      {
        "term": "Source vérifiée (majiya da aka tantance)",
        "definition": "Shafin da aka bude aka duba da tambayoyi uku: wa ke magana, yaushe, kuma shin da gaske an rubuta haka a ciki? Ana rubuta shi tare da mahadarsa da kwanan watansa."
      },
      {
        "term": "Règle de données (dokar bayanai)",
        "definition": "Jumla daya da ke fadin abin da ba za ku taba rubutawa a cikin mataimakin AI na kan layi ba, misali babu sunan abokin ciniki, lambarsa ko hotonsa. Ana rubuta ta, sannan a bi ta."
      },
      {
        "term": "IA installée (AI da aka girka a na’ura)",
        "definition": "Samfurin AI na budadden tushe da aka sauke a wayarku ko kwamfutarku, da manhaja kamar Google AI Edge Gallery, PocketPal AI ko LM Studio. Yana amsawa ba tare da intanet ba, kuma tambayoyinku suna zama a na’urarku."
      },
      {
        "term": "Plan B (zabi na biyu)",
        "definition": "Kayan aiki na biyu, da aka riga aka gwada, da aka tanada don wani aiki idan na farko ya canza, ya daina amsawa ko ba a samunsa. Kamar tayar ajiya: ana fatan ba za a bukace ta ba, amma ana duba ta kafin tafiya."
      }
    ]
  }
};
