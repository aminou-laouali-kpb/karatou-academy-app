import { Language } from '../../translations';
import { LessonContent } from '../../lessonContent';

// Module « Comment créer des agents IA » (creer-agents-ia) — leçon ag1 (Agent ou assistant, et les 5 méthodes)
// Texte aligné sur le CLAUDE.md de production vidéo du cours 2 (docs/production-video/claude-md/).
// Trilingue FR / EN / HA. ⚠️ Traductions HA à faire valider par un locuteur natif haoussa.
export const agLesson1: Record<Language, LessonContent> = {
  "fr": {
    "id": "ag1",
    "lessonNumber": 1,
    "title": "Agent IA ou simple assistant : la différence, et les 5 méthodes pour créer un agent",
    "objective": "À la fin de cette leçon, vous saurez reconnaître un agent IA et le distinguer d’un simple assistant : l’un répond, l’autre agit pour un objectif, avec des outils et en boucle. Vous saurez décrire n’importe quel agent avec ses six pièces : objectif, instructions, outils, mémoire, déclencheur et garde-fous. Vous saurez juger, avec trois questions, si une tâche mérite un agent, puis choisir parmi les cinq méthodes la plus simple qui suffit. Enfin, vous saurez faire concevoir la fiche de votre agent par l’IA avec la consigne « architecte d’agents », en gardant pour vous la décision finale.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Un assistant répond, un agent agit pour atteindre un objectif",
        "body": "Le mot « agent » est partout, et on le présente souvent comme un employé numérique qui ferait tout, tout seul. C’est faux. Un agent IA exécute une mission précise, avec des outils, dans des limites que vous fixez. Il peut se tromper : c’est pour cela que vous restez aux commandes. Avec un assistant, comme Claude, Gemini ou ChatGPT dans une conversation ordinaire, vous posez une question et il répond ; le reste du travail, c’est vous qui le faites. Avec un agent, vous fixez un objectif, il agit pour l’atteindre, puis il vous rend compte.\n\nPour agir, l’agent dispose d’outils. Un outil, c’est une capacité donnée à l’IA : chercher sur le web, lire un fichier, écrire un e-mail, ajouter une ligne dans un tableau. Pensez à la différence entre demander conseil à un vendeur du marché et envoyer un coursier faire vos achats. Le vendeur vous dit où trouver le riz le moins cher. Le coursier part avec votre liste et votre budget, compare les étals, achète, puis revient avec la monnaie et un compte rendu. Le premier informe ; le second agit.\n\nEnfin, l’agent travaille en boucle : il observe la situation, il décide de la prochaine étape, il agit, il vérifie le résultat, puis il recommence, jusqu’à atteindre l’objectif ou jusqu’à la limite que vous avez fixée. Prenez la gestionnaire d’une pharmacie à Lomé, au Togo, qui se demande quels médicaments commander. Un assistant lui explique comment faire un inventaire. Un agent qui a accès à son tableau des stocks lit les quantités, repère les produits sous le seuil, vérifie les ventes des dernières semaines et lui propose une liste de commande. Elle valide ou elle corrige. Cette boucle n’a rien de magique : c’est une méthode de travail, qui peut produire des erreurs qu’il faut savoir repérer."
      },
      {
        "title": "Les six pièces d’un agent : objectif, instructions, outils, mémoire, déclencheur, garde-fous",
        "body": "Tout agent, du plus simple au plus puissant, se décrit avec six pièces. C’est un peu la fiche de poste que vous rédigeriez pour un nouveau stagiaire : sans elle, même la personne la plus brillante ne sait pas ce qu’on attend d’elle. L’objectif, c’est le résultat attendu, en une phrase. Les instructions disent comment travailler : la démarche, le ton, les règles. Les outils sont les capacités dont la tâche a besoin, et seulement celles-là : un agent qui doit lire vos e-mails n’a pas besoin de pouvoir en envoyer.\n\nLa mémoire, c’est ce que l’agent garde d’une fois à l’autre et les documents qu’il consulte : un catalogue, une liste de partenaires, un modèle de rapport. Le déclencheur, c’est ce qui le met en marche : vous qui lui parlez, une heure fixe (« chaque lundi à 7 h ») ou un événement (un formulaire reçu, un message arrivé). Les garde-fous, enfin, disent ce que l’agent ne fera jamais et à quel moment il passe la main à un humain : ne rien inventer, ne rien envoyer sans validation, alerter une personne en cas de plainte.\n\nImaginez une gérante de boutique de tissus à Cotonou, au Bénin, qui veut un agent pour relancer les clients qui n’ont pas encore réglé leurs achats, en espèces ou par MTN MoMo. Objectif : chaque vendredi, la liste des factures en retard, avec un message de relance prêt. Instructions : un ton courtois, en français, une seule relance par semaine. Outils : la lecture de son tableau des ventes. Mémoire : la liste des clients et leurs habitudes de paiement. Déclencheur : le vendredi matin. Garde-fous : aucun message envoyé sans son accord, et jamais de relance à un client qui conteste une facture. Décrit ainsi, l’agent devient concret, vérifiable et, surtout, discutable avant même d’être construit."
      },
      {
        "title": "Les 5 méthodes pour créer un agent, de la plus simple à la plus puissante",
        "body": "Il existe cinq méthodes pour créer un agent, rangées de la plus simple à la plus puissante. Méthode 1, projets et skills : vous créez un projet Claude, un GPT personnalisé ou un Gem, avec vos instructions et vos fichiers posés une fois pour toutes ; l’agent agit quand vous lui parlez. Une enseignante de Ouagadougou, au Burkina Faso, peut ainsi disposer d’un agent qui prépare ses fiches d’exercices à partir du programme qu’elle lui a confié. Méthode 2, agents planifiés : une tâche et un horaire ; l’agent travaille seul, chaque jour ou chaque semaine, sans que vous ayez à le lancer, comme le gérant d’une quincaillerie à Conakry, en Guinée, qui reçoit chaque matin un point de trois lignes sur ses e-mails et son agenda.\n\nMéthode 3, connecteurs et MCP : vous branchez l’agent sur vos e-mails, votre agenda et vos fichiers. Le MCP est une norme technique qui joue le rôle d’une prise universelle entre l’IA et vos outils de travail. Méthode 4, workflows : un workflow est une suite d’étapes qui démarre seule quand un événement arrive, par exemple une demande reçue par formulaire, résumée, classée puis rangée dans un tableau, avec un outil comme n8n. Méthode 5, agents persistants : un agent qui tourne en permanence et que l’on peut joindre jour et nuit sur une messagerie comme Telegram ou WhatsApp ; c’est aussi la porte vers des équipes d’agents coordonnées par un chef d’orchestre.\n\nSoyons honnêtes : les méthodes 4 et 5 sont plus techniques. Elles demandent un ordinateur, un peu de patience et parfois une installation. Les trois premières, en revanche, se font dans un assistant que vous connaissez déjà. Plus on monte dans l’échelle, plus l’agent peut faire de choses seul, mais plus il y a de réglages, de risques et de points à surveiller. C’est pourquoi ce cours consacre une leçon à chacune des cinq méthodes, puis une leçon entière aux garde-fous."
      },
      {
        "title": "Choisir sa méthode : le test des trois questions, puis la méthode la plus simple qui suffit",
        "body": "Avant de créer un agent, posez-vous trois questions. La tâche revient-elle souvent ? Ses étapes changent-elles d’une fois à l’autre ? Pouvez-vous vérifier le résultat facilement ? Trois « oui » : un agent peut vous aider. Écrire une seule fois un discours d’anniversaire échoue à la première question : un assistant suffit. Une tâche dont les étapes ne changent jamais relève plutôt d’une automatisation simple, sans IA qui décide. Et une décision lourde, comme fixer les salaires d’une équipe ou choisir un partenaire financier, ne se délègue pas : le résultat ne se vérifie pas d’un coup d’œil, et la responsabilité reste humaine.\n\nUne fois la tâche retenue, prenez la méthode la plus simple qui fait le travail, comme on prend une moto-taxi pour une course en ville plutôt qu’un camion. Faites ensuite un test de prédiction : une semaine chargée, vous oubliez de relancer votre recherche habituelle. Avec un assistant, il ne se passe rien, car son déclencheur, c’est vous. Avec un agent planifié, le résultat arrive quand même à l’heure prévue. La différence ne vient pas de l’intelligence de l’IA : elle vient du déclencheur et des outils.\n\nPour aller plus vite, il existe un raccourci : faire concevoir l’agent par l’IA elle-même, avec la consigne « architecte d’agents », écrite selon la méthode RCTF (Rôle, Contexte, Tâche, Format). L’IA vous pose d’abord trois questions, puis rédige la fiche de votre agent en six rubriques, recommande la méthode la plus simple qui suffit et fournit des instructions prêtes à copier. Un responsable de coopérative à Kinshasa, en RDC, ou un comptable indépendant à Casablanca, au Maroc, l’utilise exactement de la même manière. Mais l’architecte propose, il ne décide pas : relisez chaque rubrique et ajoutez les règles propres à votre organisation, que l’IA ne pouvait pas deviner."
      }
    ],
    "example": {
      "title": "Fatoumata, à Bamako : de la recherche manuelle du vendredi à la fiche de son agent de veille",
      "challenge": "Fatoumata (cas fictif) est chargée de programme dans une ONG de Bamako, au Mali, qui accompagne des groupements de maraîchères. Chaque vendredi après-midi, elle ouvre un à un les sites des bailleurs de fonds, note les dates limites dans un carnet, et en rate parfois une. Or une date ratée, c’est un financement perdu pour les groupements. On lui conseille de « prendre un agent IA », mais elle ne sait ni ce que c’est, ni par où commencer.",
      "solution": "Elle ouvre d’abord Claude, recherche web activée, et envoie une consigne RCTF. Rôle : un chargé de veille sur les financements des ONG, rigoureux. Contexte : son ONG de Bamako, les maraîchères, des appels à projets ouverts sur la sécurité alimentaire au Mali ou au Sahel. Tâche : trouver trois appels à projets ouverts, en ouvrant leurs pages officielles avant de répondre. Format : un tableau avec le bailleur, le titre, la date limite et le lien officiel, et « non vérifié » si une date ne peut pas être confirmée. Claude cherche, ouvre des pages, relance une recherche, puis rend trois appels sourcés ; Fatoumata retrouve la première date sur la page officielle. C’est utile, mais il faudra tout redemander le vendredi suivant : c’est encore un assistant. Dans une nouvelle conversation, elle colle la consigne « architecte d’agents ». Claude lui pose trois questions : quels bailleurs suivre, quand recevoir le résultat, qui décide de postuler. Elle répond en une ligne chacune. Claude rend la fiche de son agent de veille en six rubriques et recommande la Méthode 2, une tâche planifiée. Fatoumata relit chaque rubrique et ajoute une règle que l’IA ne pouvait pas deviner : la directrice valide chaque candidature.",
      "impact": "Sa tâche a passé le test des trois questions : elle revient chaque semaine, elle varie, elle se vérifie. Fatoumata repart avec une fiche d’une page qui décrit son agent de veille (objectif, instructions, outils, mémoire, déclencheur, garde-fous), une méthode identifiée et justifiée, et une règle claire : l’agent cherche et signale, mais la décision de postuler reste à elle et à sa directrice. Elle construira cet agent à la Leçon 3. Dans ce cours, vous suivrez aussi Aïssa, consultante indépendante à Abidjan (Côte d’Ivoire), et Ibrahim, commerçant de pièces détachées de motos à Niamey (Niger)."
    },
    "practice": {
      "title": "Faites concevoir votre agent par l’architecte d’agents",
      "instructions": [
        "Listez trois tâches répétitives de votre semaine et passez-les au test des trois questions : revient-elle souvent ? ses étapes changent-elles d’une fois à l’autre ? pouvez-vous vérifier le résultat facilement ? Gardez celle qui obtient trois « oui ».",
        "Copiez la consigne « architecte d’agents » ci-après, remplacez les crochets par votre métier, votre ville et cette tâche, envoyez-la à Claude, Gemini ou ChatGPT, puis répondez à ses trois questions. Rôle : tu es un architecte d’agents IA, clair et prudent. Contexte : je suis [votre métier] à [votre ville]. Je veux confier à un agent cette tâche : [décrivez-la en trois phrases : quoi, quand, avec quels documents]. Je connais cinq méthodes : 1. un projet ou une skill (l’agent agit quand je lui parle) ; 2. une tâche planifiée (il agit seul à heure fixe) ; 3. des connecteurs (il accède à mes e-mails, mon agenda, mes fichiers) ; 4. un workflow n8n (il démarre seul quand un événement arrive) ; 5. un agent persistant (il est joignable sur une messagerie). Tâche : pose-moi d’abord trois questions pour bien comprendre mon besoin. Ensuite, rédige la fiche de l’agent en six rubriques : objectif, instructions, outils, mémoire, déclencheur, garde-fous. Recommande la méthode la plus simple qui suffit, et explique pourquoi. Termine par les instructions exactes de l’agent, prêtes à copier, au format Rôle, Contexte, Tâche, Format. Format : une page, phrases courtes, en français. N’invente rien : si une information manque, écris « non disponible ». N’utilise aucune donnée personnelle.",
        "Relisez la fiche rubrique par rubrique, ajoutez au moins deux garde-fous propres à votre organisation et notez la méthode recommandée. Gardez cette fiche : elle vous servira à chaque leçon de ce cours et dans le projet final."
      ],
      "observation": "Vous constatez que l’IA ne répond pas tout de suite : elle vous pose d’abord des questions, puis rend une fiche structurée en six pièces, avec une méthode recommandée et sa justification. Vous constatez aussi qu’elle ne peut pas deviner certaines règles de votre organisation : c’est vous qui les ajoutez. L’architecte propose, vous décidez. Si la méthode recommandée vous paraît trop lourde, demandez-lui pourquoi une méthode plus simple ne suffirait pas."
    },
    "quiz": [
      {
        "question": "Qu’est-ce qui distingue d’abord un agent d’un assistant ?",
        "options": [
          { "key": "A", "text": "Il écrit plus vite" },
          { "key": "B", "text": "Il utilise des outils pour atteindre un objectif, en boucle" },
          { "key": "C", "text": "Il ne se trompe jamais" },
          { "key": "D", "text": "Il fonctionne sans connexion Internet" }
        ],
        "answer": "B",
        "explanation": "Un assistant répond ; un agent agit. Ce qui le distingue, ce sont les outils (chercher, lire, écrire) et la boucle observer, décider, agir, vérifier, au service d’un objectif. Il n’écrit pas forcément plus vite, il peut se tromper, et il a généralement besoin d’une connexion pour utiliser ses outils."
      },
      {
        "question": "« Chaque lundi à sept heures. » Dans la fiche d’un agent, quelle pièce reconnaissez-vous ?",
        "options": [
          { "key": "A", "text": "Le déclencheur" },
          { "key": "B", "text": "L’objectif" },
          { "key": "C", "text": "Les outils" },
          { "key": "D", "text": "Les garde-fous" }
        ],
        "answer": "A",
        "explanation": "« Chaque lundi à sept heures » dit ce qui met l’agent en marche : c’est le déclencheur. L’objectif serait le résultat attendu, les outils les capacités qu’il utilise, et les garde-fous les limites qu’il ne franchit jamais."
      },
      {
        "question": "Fatoumata veut recevoir chaque lundi, sans rien demander, la liste des nouveaux appels à projets. Quelle est la méthode la plus simple qui suffit ?",
        "options": [
          { "key": "A", "text": "Méthode 5 : un agent persistant sur une messagerie" },
          { "key": "B", "text": "Méthode 1 : un projet, utilisé à la demande" },
          { "key": "C", "text": "Méthode 2 : une tâche planifiée" },
          { "key": "D", "text": "Aucun agent : un carnet suffit" }
        ],
        "answer": "C",
        "explanation": "Fatoumata veut un résultat à heure fixe, sans rien demander : une tâche planifiée (Méthode 2) suffit. Un projet (Méthode 1) l’obligerait à relancer elle-même la recherche ; un agent persistant (Méthode 5) serait bien plus technique que nécessaire ; et le carnet, c’est justement ce qui lui fait rater des dates."
      },
      {
        "question": "Quelle tâche passe le test des trois questions ?",
        "options": [
          { "key": "A", "text": "Écrire une seule fois le discours d’anniversaire de l’ONG" },
          { "key": "B", "text": "Repérer chaque semaine des appels à projets et vérifier leurs dates" },
          { "key": "C", "text": "Décider seul des salaires de l’équipe" },
          { "key": "D", "text": "Choisir un nouveau partenaire financier" }
        ],
        "answer": "B",
        "explanation": "Repérer des appels à projets revient chaque semaine, varie d’une fois à l’autre et se vérifie sur les pages officielles : trois « oui ». Le discours est ponctuel ; les salaires et le choix d’un partenaire sont des décisions lourdes, qui restent humaines et ne se vérifient pas facilement."
      },
      {
        "question": "Que fait d’abord la consigne « architecte d’agents » ?",
        "options": [
          { "key": "A", "text": "Elle crée l’agent et l’active toute seule" },
          { "key": "B", "text": "Elle envoie la fiche à votre direction" },
          { "key": "C", "text": "Elle choisit toujours la méthode la plus puissante" },
          { "key": "D", "text": "Elle vous pose trois questions pour comprendre votre besoin" }
        ],
        "answer": "D",
        "explanation": "L’architecte d’agents commence par trois questions pour comprendre votre besoin, puis rédige la fiche et recommande la méthode la plus simple qui suffit, pas la plus puissante. Il ne crée ni n’active rien, et n’envoie rien à personne : c’est vous qui relisez et qui décidez."
      }
    ],
    "reflection": "Parmi les tâches qui reviennent chaque semaine dans votre travail, laquelle confieriez-vous en premier à un agent, et quelle décision tiendriez-vous à garder pour vous ?",
    "glossary": [
      {
        "term": "Assistant IA",
        "definition": "Outil d’IA qui répond à vos questions dans une conversation, comme Claude, Gemini ou ChatGPT. Il produit une réponse, mais c’est vous qui faites le reste du travail et qui relancez chaque demande."
      },
      {
        "term": "Agent IA",
        "definition": "Programme d’IA qui agit pour atteindre un objectif : il utilise des outils et travaille en boucle (observer, décider, agir, vérifier) jusqu’à l’objectif ou à la limite fixée. Il peut se tromper : l’humain reste aux commandes."
      },
      {
        "term": "Outil",
        "definition": "Capacité donnée à l’IA pour agir : chercher sur le web, lire un fichier, écrire un e-mail, remplir un tableau. Un agent ne reçoit que les outils dont sa tâche a besoin."
      },
      {
        "term": "Déclencheur",
        "definition": "Ce qui met l’agent en marche : vous qui lui parlez, une heure fixe (« chaque lundi à 7 h ») ou un événement (un formulaire reçu, un message arrivé)."
      },
      {
        "term": "Garde-fou",
        "definition": "Règle que l’agent ne franchit jamais, et moment où il passe la main à un humain : ne rien inventer, ne rien envoyer sans validation, alerter une personne en cas de doute."
      },
      {
        "term": "Consigne « architecte d’agents »",
        "definition": "Consigne écrite en RCTF qui fait concevoir votre agent par l’IA : elle pose trois questions, rédige la fiche en six rubriques et recommande la méthode la plus simple qui suffit. Elle propose ; vous décidez."
      }
    ]
  },
  "en": {
    "id": "ag1",
    "lessonNumber": 1,
    "title": "AI agent or simple assistant: the difference, and the 5 methods to create an agent",
    "objective": "By the end of this lesson, you will be able to recognise an AI agent and tell it apart from a simple assistant: one answers, the other acts towards a goal, with tools and in a loop. You will be able to describe any agent with its six parts: goal, instructions, tools, memory, trigger and guardrails. You will be able to judge, with three questions, whether a task deserves an agent, then choose among the five methods the simplest one that does the job. Finally, you will be able to have AI design your agent sheet with the “agent architect” prompt, while keeping the final decision for yourself.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "An assistant answers, an agent acts to reach a goal",
        "body": "The word “agent” is everywhere, and it is often presented as a digital employee who would do everything, all alone. That is false. An AI agent carries out a precise mission, with tools, within limits that you set. It can make mistakes: that is why you stay in control. With an assistant, such as Claude, Gemini or ChatGPT in an ordinary conversation, you ask a question and it answers; the rest of the work is up to you. With an agent, you set a goal, it acts to reach it, then it reports back to you.\n\nTo act, the agent has tools. A tool is a capability given to the AI: searching the web, reading a file, writing an e-mail, adding a row to a spreadsheet. Think of the difference between asking a market trader for advice and sending a runner to do your shopping. The trader tells you where to find the cheapest rice. The runner leaves with your list and your budget, compares the stalls, buys, then comes back with the change and a report. The first informs; the second acts.\n\nFinally, the agent works in a loop: it observes the situation, decides on the next step, acts, checks the result, then starts again, until it reaches the goal or the limit you have set. Take the manager of a pharmacy in Lomé, Togo, who wonders which medicines to order. An assistant explains how to take an inventory. An agent with access to her stock spreadsheet reads the quantities, spots the products below the threshold, checks the sales of the last few weeks and proposes an order list. She approves or corrects it. There is nothing magical about this loop: it is a way of working, and it can produce errors that you need to know how to spot."
      },
      {
        "title": "The six parts of an agent: goal, instructions, tools, memory, trigger, guardrails",
        "body": "Every agent, from the simplest to the most powerful, can be described with six parts. It is a bit like the job description you would write for a new intern: without it, even the brightest person does not know what is expected. The goal is the expected result, in one sentence. The instructions say how to work: the approach, the tone, the rules. The tools are the capabilities the task needs, and only those: an agent that must read your e-mails does not need to be able to send any.\n\nThe memory is what the agent keeps from one time to the next and the documents it consults: a catalogue, a list of partners, a report template. The trigger is what sets it in motion: you talking to it, a set time (“every Monday at 7 a.m.”) or an event (a form received, a message arriving). Finally, the guardrails say what the agent will never do and when it hands over to a human: invent nothing, send nothing without approval, alert a person in case of a complaint.\n\nImagine the manager of a fabric shop in Cotonou, Benin, who wants an agent to follow up with customers who have not yet paid for their purchases, in cash or by MTN MoMo. Goal: every Friday, the list of overdue invoices, with a reminder message ready. Instructions: a polite tone, in French, only one reminder per week. Tools: reading her sales spreadsheet. Memory: the customer list and their payment habits. Trigger: Friday morning. Guardrails: no message sent without her approval, and never a reminder to a customer who disputes an invoice. Described this way, the agent becomes concrete, checkable and, above all, open to discussion before it is even built."
      },
      {
        "title": "The 5 methods to create an agent, from the simplest to the most powerful",
        "body": "There are five methods to create an agent, ranked from the simplest to the most powerful. Method 1, projects and skills: you create a Claude project, a custom GPT or a Gem, with your instructions and files set once and for all; the agent acts when you talk to it. A teacher in Ouagadougou, Burkina Faso, can have an agent that prepares her exercise sheets from the curriculum she has given it. Method 2, scheduled agents: one task and one schedule; the agent works on its own, every day or every week, without you having to start it, like the owner of a hardware store in Conakry, Guinea, who receives a three-line summary of his e-mails and calendar every morning.\n\nMethod 3, connectors and MCP: you plug the agent into your e-mails, your calendar and your files. MCP is a technical standard that acts as a universal plug between the AI and your work tools. Method 4, workflows: a workflow is a sequence of steps that starts on its own when an event happens, for example a request received through a form, summarised, sorted, then filed in a spreadsheet, with a tool such as n8n. Method 5, persistent agents: an agent that runs permanently and can be reached day and night on a messaging app such as Telegram or WhatsApp; it is also the door to teams of agents coordinated by a conductor.\n\nLet us be honest: methods 4 and 5 are more technical. They require a computer, a little patience and sometimes an installation. The first three, on the other hand, are done in an assistant you already know. The higher you climb the ladder, the more the agent can do on its own, but the more settings, risks and points to watch there are. That is why this course devotes one lesson to each of the five methods, then a whole lesson to guardrails."
      },
      {
        "title": "Choosing your method: the three-question test, then the simplest method that does the job",
        "body": "Before creating an agent, ask yourself three questions. Does the task come back often? Do its steps change from one time to the next? Can you check the result easily? Three “yes” answers: an agent can help you. Writing a birthday speech just once fails the first question: an assistant is enough. A task whose steps never change is better suited to simple automation, with no AI making decisions. And a heavy decision, such as setting a team’s salaries or choosing a funding partner, cannot be delegated: the result cannot be checked at a glance, and the responsibility remains human.\n\nOnce you have chosen the task, take the simplest method that does the job, just as you would take a motorbike taxi for a trip across town rather than a lorry. Then run a prediction test: in a busy week, you forget to rerun your usual search. With an assistant, nothing happens, because its trigger is you. With a scheduled agent, the result still arrives at the planned time. The difference does not come from how intelligent the AI is: it comes from the trigger and the tools.\n\nTo go faster, there is a shortcut: have the AI itself design the agent, with the “agent architect” prompt, written with the RCTF method (Role, Context, Task, Format). The AI first asks you three questions, then writes your agent sheet in six sections, recommends the simplest method that does the job and provides instructions ready to copy. A cooperative manager in Kinshasa, DRC, or a freelance accountant in Casablanca, Morocco, uses it in exactly the same way. But the architect proposes; it does not decide: reread each section and add the rules specific to your organisation that the AI could not guess."
      }
    ],
    "example": {
      "title": "Fatoumata in Bamako: from the manual Friday search to the sheet for her monitoring agent",
      "challenge": "Fatoumata (a fictional case) is a programme officer in an NGO in Bamako, Mali, that supports groups of women market gardeners. Every Friday afternoon, she opens the donors’ websites one by one, writes the deadlines in a notebook, and sometimes misses one. Yet a missed deadline means lost funding for the groups. She is advised to “get an AI agent”, but she does not know what that is, or where to start.",
      "solution": "She first opens Claude, with web search turned on, and sends an RCTF prompt. Role: a rigorous monitoring officer for NGO funding. Context: her NGO in Bamako, the market gardeners, open calls for proposals on food security in Mali or the Sahel. Task: find three open calls for proposals, opening their official pages before answering. Format: a table with the donor, the title, the deadline and the official link, and “not verified” if a date cannot be confirmed. Claude searches, opens pages, runs another search, then returns three sourced calls; Fatoumata finds the first deadline on the official page. It is useful, but she will have to ask for everything again the following Friday: it is still an assistant. In a new conversation, she pastes the “agent architect” prompt. Claude asks her three questions: which donors to follow, when to receive the result, who decides to apply. She answers each in one line. Claude returns the sheet for her monitoring agent in six sections and recommends Method 2, a scheduled task. Fatoumata rereads each section and adds a rule the AI could not guess: the director approves every application.",
      "impact": "Her task passed the three-question test: it comes back every week, it varies, it can be checked. Fatoumata leaves with a one-page sheet describing her monitoring agent (goal, instructions, tools, memory, trigger, guardrails), a method identified and justified, and a clear rule: the agent searches and flags, but the decision to apply stays with her and her director. She will build this agent in Lesson 3. In this course, you will also follow Aïssa, a freelance consultant in Abidjan (Côte d’Ivoire), and Ibrahim, a motorbike spare-parts trader in Niamey (Niger)."
    },
    "practice": {
      "title": "Have the agent architect design your agent",
      "instructions": [
        "List three repetitive tasks from your week and put them through the three-question test: does it come back often? do its steps change from one time to the next? can you check the result easily? Keep the one that gets three “yes” answers.",
        "Copy the “agent architect” prompt below, replace the brackets with your job, your city and this task, send it to Claude, Gemini or ChatGPT, then answer its three questions. Role: you are an AI agent architect, clear and careful. Context: I am a [your job] in [your city]. I want to hand this task to an agent: [describe it in three sentences: what, when, with which documents]. I know five methods: 1. a project or a skill (the agent acts when I talk to it); 2. a scheduled task (it acts on its own at a set time); 3. connectors (it accesses my e-mails, my calendar, my files); 4. an n8n workflow (it starts on its own when an event happens); 5. a persistent agent (it can be reached on a messaging app). Task: first ask me three questions to fully understand my need. Then write the agent sheet in six sections: goal, instructions, tools, memory, trigger, guardrails. Recommend the simplest method that does the job, and explain why. End with the agent’s exact instructions, ready to copy, in the Role, Context, Task, Format layout. Format: one page, short sentences, in English. Invent nothing: if a piece of information is missing, write “not available”. Use no personal data.",
        "Reread the sheet section by section, add at least two guardrails specific to your organisation and note the recommended method. Keep this sheet: you will use it in every lesson of this course and in the final project."
      ],
      "observation": "You notice that the AI does not answer straight away: it first asks you questions, then returns a sheet structured in six parts, with a recommended method and its justification. You also notice that it cannot guess some of your organisation’s rules: you are the one who adds them. The architect proposes, you decide. If the recommended method seems too heavy, ask it why a simpler method would not be enough."
    },
    "quiz": [
      {
        "question": "What first distinguishes an agent from an assistant?",
        "options": [
          { "key": "A", "text": "It writes faster" },
          { "key": "B", "text": "It uses tools to reach a goal, in a loop" },
          { "key": "C", "text": "It never makes mistakes" },
          { "key": "D", "text": "It works without an Internet connection" }
        ],
        "answer": "B",
        "explanation": "An assistant answers; an agent acts. What sets it apart are the tools (searching, reading, writing) and the loop of observing, deciding, acting and checking, in the service of a goal. It does not necessarily write faster, it can make mistakes, and it generally needs a connection to use its tools."
      },
      {
        "question": "“Every Monday at seven o’clock.” In an agent sheet, which part do you recognise?",
        "options": [
          { "key": "A", "text": "The trigger" },
          { "key": "B", "text": "The goal" },
          { "key": "C", "text": "The tools" },
          { "key": "D", "text": "The guardrails" }
        ],
        "answer": "A",
        "explanation": "“Every Monday at seven o’clock” says what sets the agent in motion: that is the trigger. The goal would be the expected result, the tools the capabilities it uses, and the guardrails the limits it never crosses."
      },
      {
        "question": "Fatoumata wants to receive the list of new calls for proposals every Monday, without asking for anything. What is the simplest method that does the job?",
        "options": [
          { "key": "A", "text": "Method 5: a persistent agent on a messaging app" },
          { "key": "B", "text": "Method 1: a project, used on demand" },
          { "key": "C", "text": "Method 2: a scheduled task" },
          { "key": "D", "text": "No agent: a notebook is enough" }
        ],
        "answer": "C",
        "explanation": "Fatoumata wants a result at a set time, without asking for anything: a scheduled task (Method 2) is enough. A project (Method 1) would force her to rerun the search herself; a persistent agent (Method 5) would be far more technical than needed; and the notebook is precisely what makes her miss deadlines."
      },
      {
        "question": "Which task passes the three-question test?",
        "options": [
          { "key": "A", "text": "Writing the NGO’s anniversary speech just once" },
          { "key": "B", "text": "Spotting calls for proposals every week and checking their deadlines" },
          { "key": "C", "text": "Deciding the team’s salaries alone" },
          { "key": "D", "text": "Choosing a new funding partner" }
        ],
        "answer": "B",
        "explanation": "Spotting calls for proposals comes back every week, varies from one time to the next and can be checked on the official pages: three “yes” answers. The speech is a one-off; salaries and the choice of a partner are heavy decisions that remain human and are not easy to check."
      },
      {
        "question": "What does the “agent architect” prompt do first?",
        "options": [
          { "key": "A", "text": "It creates the agent and activates it on its own" },
          { "key": "B", "text": "It sends the sheet to your management" },
          { "key": "C", "text": "It always chooses the most powerful method" },
          { "key": "D", "text": "It asks you three questions to understand your need" }
        ],
        "answer": "D",
        "explanation": "The agent architect starts with three questions to understand your need, then writes the sheet and recommends the simplest method that does the job, not the most powerful one. It creates and activates nothing, and sends nothing to anyone: you are the one who rereads and decides."
      }
    ],
    "reflection": "Among the tasks that come back every week in your work, which one would you hand to an agent first, and which decision would you insist on keeping for yourself?",
    "glossary": [
      {
        "term": "AI assistant",
        "definition": "An AI tool that answers your questions in a conversation, such as Claude, Gemini or ChatGPT. It produces an answer, but you do the rest of the work and restart every request."
      },
      {
        "term": "AI agent",
        "definition": "An AI program that acts to reach a goal: it uses tools and works in a loop (observe, decide, act, check) until it reaches the goal or the set limit. It can make mistakes: the human stays in control."
      },
      {
        "term": "Tool",
        "definition": "A capability given to the AI so it can act: searching the web, reading a file, writing an e-mail, filling in a spreadsheet. An agent only receives the tools its task needs."
      },
      {
        "term": "Trigger",
        "definition": "What sets the agent in motion: you talking to it, a set time (“every Monday at 7 a.m.”) or an event (a form received, a message arriving)."
      },
      {
        "term": "Guardrail",
        "definition": "A rule the agent never crosses, and the moment it hands over to a human: invent nothing, send nothing without approval, alert a person when in doubt."
      },
      {
        "term": "“Agent architect” prompt",
        "definition": "A prompt written in RCTF that has the AI design your agent: it asks three questions, writes the sheet in six sections and recommends the simplest method that does the job. It proposes; you decide."
      }
    ]
  },
  "ha": {
    "id": "ag1",
    "lessonNumber": 1,
    "title": "Agent na AI ko mataimaki kawai: bambancin, da hanyoyi 5 na kirkirar agent",
    "objective": "A karshen wannan darasi, za ku iya gane agent na AI (shiri mai aiki a madadinku) kuma ku bambanta shi da mataimaki kawai: daya yana amsawa, dayan yana aiki don cimma manufa, da kayan aiki kuma a zagaye. Za ku iya bayyana kowane agent da sassansa shida: manufa, umurnai, kayan aiki, tunawa, mai farawa da shinge. Za ku iya auna, da tambayoyi uku, ko wani aiki ya cancanci agent, sannan ku zabi daga cikin hanyoyi biyar wadda ta fi sauki kuma ta isa. A karshe, za ku iya sa AI ya tsara takardar bayanin agent dinku da umurnin « architecte d’agents » (mai tsara agents), tare da rike yanke shawara ta karshe a hannunku.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Mataimaki yana amsawa, agent yana aiki don cimma manufa",
        "body": "Kalmar « agent » tana ko’ina, kuma ana yawan gabatar da ita kamar ma’aikacin dijital wanda zai yi komai shi kadai. Wannan ba gaskiya ba ne. Agent na AI yana aiwatar da takamaiman aiki, da kayan aiki, cikin iyakokin da kuka shata. Yana iya yin kuskure: shi ya sa ku ne kuke rike da ragamar aiki. Da mataimaki, kamar Claude, Gemini ko ChatGPT a cikin hira ta yau da kullum, kuna yin tambaya sai ya amsa; sauran aikin, ku ne kuke yi. Da agent kuwa, kuna shata manufa, yana aiki don cimma ta, sannan ya kawo muku rahoto.\n\nDon ya yi aiki, agent yana da kayan aiki. Kayan aiki wata dama ce da aka ba AI: bincike a yanar gizo, karanta fayil, rubuta e-mail, kara layi a cikin tebur. Ku yi tunanin bambanci tsakanin neman shawara daga wani dan kasuwa a kasuwa da aika dan aike ya yi muku sayayya. Dan kasuwar yana gaya muku inda za ku sami shinkafa mafi araha. Dan aiken kuwa yana tafiya da jerin kayanku da kasafin kudinku, yana kwatanta rumfuna, yana saye, sannan ya dawo da canji da rahoto. Na farko yana ba da labari; na biyu yana aiki.\n\nA karshe, agent yana aiki a zagaye: yana lura da halin da ake ciki, yana yanke shawara kan mataki na gaba, yana aiki, yana duba sakamakon, sannan ya sake farawa, har sai ya cimma manufa ko ya kai iyakar da kuka sa. Ku dauki mai kula da wani kantin magani a Lomé, kasar Togo, wadda take tunanin wadanne magunguna za ta yi oda. Mataimaki yana bayyana mata yadda ake kidayar kaya. Agent wanda ke da damar shiga teburin kayanta yana karanta yawan kowane magani, yana gano wadanda suka ragu kasa da iyaka, yana duba sayarwar makonnin baya, sannan ya ba ta shawarar jerin oda. Ita ce ke amincewa ko ta gyara. Wannan zagaye ba sihiri ba ne: hanyar aiki ce, kuma tana iya haifar da kurakurai da ya kamata a san yadda ake gano su."
      },
      {
        "title": "Sassa shida na agent: manufa, umurnai, kayan aiki, tunawa, mai farawa, shinge",
        "body": "Kowane agent, daga mafi sauki zuwa mafi karfi, ana bayyana shi da sassa shida. Yana kama da bayanin aikin da za ku rubuta wa sabon dalibin koyon aiki: ba tare da shi ba, ko mutum mafi hazaka ba zai san abin da ake tsammani daga gare shi ba. Manufa ita ce sakamakon da ake tsammani, a jimla daya. Umurnai suna bayyana yadda za a yi aiki: hanya, salon magana, dokoki. Kayan aiki su ne damar da aikin ke bukata, kuma su kadai: agent da zai karanta e-mail dinku ba ya bukatar damar aika e-mail.\n\nTunawa ita ce abin da agent yake adanawa daga wani lokaci zuwa wani, da takardun da yake dubawa: kundin kaya, jerin abokan hulda, samfurin rahoto. Mai farawa shi ne abin da ke tayar da agent: ku da kuke yi masa magana, lokaci kayyadadde (« kowace Litinin karfe 7 na safe ») ko wani abu da ya faru (fom da aka karba, sako da ya iso). A karshe, shinge suna bayyana abin da agent ba zai taba yi ba da lokacin da zai mika aikin ga mutum: kada ya kirkiro komai, kada ya aika komai ba tare da amincewa ba, ya sanar da wani mutum idan an yi korafi.\n\nKu yi tunanin mai shagon yadudduka a Cotonou, kasar Benin, wadda take son agent da zai tunatar da abokan ciniki da ba su biya kudin sayayyarsu ba tukuna, a tsabar kudi ko ta MTN MoMo. Manufa: kowace Juma’a, jerin takardun biyan kudi da suka wuce lokaci, tare da sakon tunatarwa a shirye. Umurnai: salon ladabi, da Faransanci, tunatarwa daya kawai a mako. Kayan aiki: karanta teburin sayarwarta. Tunawa: jerin abokan ciniki da dabi’unsu na biya. Mai farawa: safiyar Juma’a. Shinge: babu sakon da za a aika ba tare da amincewarta ba, kuma ba za a taba tunatar da abokin ciniki da ke jayayya kan wani bashi ba. Idan aka bayyana shi haka, agent ya zama a fili, ana iya duba shi, kuma mafi muhimmanci, ana iya tattauna shi kafin ma a gina shi."
      },
      {
        "title": "Hanyoyi 5 na kirkirar agent, daga mafi sauki zuwa mafi karfi",
        "body": "Akwai hanyoyi biyar na kirkirar agent, an jera su daga mafi sauki zuwa mafi karfi. Hanya ta 1, projects da skills: kuna kirkirar project na Claude, GPT na musamman ko Gem, da umurnanku da fayilolinku da aka ajiye sau daya tak; agent yana aiki idan kun yi masa magana. Wata malama a Ouagadougou, kasar Burkina Faso, za ta iya samun agent da ke shirya mata takardun atisaye daga manhajar karatun da ta ba shi. Hanya ta 2, agents da aka tsara lokacinsu: aiki daya da lokaci daya; agent yana aiki shi kadai, kowace rana ko kowane mako, ba tare da kun tayar da shi ba, kamar mai shagon kayan gini a Conakry, kasar Guinea, wanda ke karbar takaitaccen bayani na layi uku kan e-mail dinsa da ajandarsa kowace safiya.\n\nHanya ta 3, connecteurs da MCP: kuna hada agent da e-mail dinku, ajandarku da fayilolinku. MCP wani ma’aunin fasaha ne da ke aiki kamar soket na duniya baki daya tsakanin AI da kayan aikinku. Hanya ta 4, workflows: workflow jerin matakai ne da ke farawa da kansa idan wani abu ya faru, misali bukatar da aka karba ta fom, aka takaita ta, aka rarraba ta, sannan aka ajiye ta a cikin tebur, da kayan aiki kamar n8n. Hanya ta 5, agents na dindindin: agent da ke aiki koyaushe, wanda ake iya samunsa dare da rana ta manhajar aika sako kamar Telegram ko WhatsApp; kuma kofa ce zuwa kungiyoyin agents da wani jagora ke tsara su.\n\nBari mu fadi gaskiya: hanyoyi na 4 da na 5 sun fi bukatar fasaha. Suna bukatar kwamfuta, dan hakuri, wani lokaci kuma sai an girka wani abu. Amma hanyoyi uku na farko, ana yin su ne a cikin mataimakin da kuka riga kuka sani. Yayin da kuke hawa matakala, agent yana iya yin abubuwa da yawa shi kadai, amma saituna, hadari da abubuwan da ya kamata a sa ido a kansu suna karuwa. Shi ya sa wannan kwas ya ware darasi daya ga kowace daga cikin hanyoyi biyar, sannan darasi guda cikakke ga shinge."
      },
      {
        "title": "Zabar hanyarku: gwajin tambayoyi uku, sannan hanya mafi sauki da ta isa",
        "body": "Kafin ku kirkiri agent, ku yi wa kanku tambayoyi uku. Shin aikin yana dawowa akai-akai? Shin matakansa suna canzawa daga wani lokaci zuwa wani? Shin za ku iya duba sakamakon cikin sauki? Amsar « eh » sau uku: agent zai iya taimaka muku. Rubuta jawabin bikin cika shekaru sau daya tak bai wuce tambaya ta farko ba: mataimaki ya isa. Aikin da matakansa ba sa canzawa ko kadan ya fi dacewa da sarrafa kai mai sauki, ba tare da AI mai yanke shawara ba. Kuma babban hukunci, kamar kayyade albashin ma’aikata ko zabar abokin hulda na kudi, ba a mika shi: ba a iya duba sakamakon da kallo daya, kuma alhakin ya rage a hannun mutum.\n\nBayan kun zabi aikin, ku dauki hanya mafi sauki da ke yin aikin, kamar yadda ake hawa achaba don zagaya gari maimakon babbar mota. Sannan ku yi gwajin hasashe: a makon da aiki ya yi yawa, kun manta ku sake neman bincikenku na yau da kullum. Da mataimaki, babu abin da zai faru, domin mai farawarsa ku ne. Da agent da aka tsara lokacinsa, sakamakon zai iso duk da haka a lokacin da aka sa. Bambancin ba ya fitowa daga basirar AI: yana fitowa ne daga mai farawa da kayan aiki.\n\nDon yin sauri, akwai gajeriyar hanya: a sa AI da kansa ya tsara agent, da umurnin « architecte d’agents » (mai tsara agents), wanda aka rubuta da hanyar RCTF (Rawa, Mahallin, Aiki, Tsari). AI yana fara yi muku tambayoyi uku, sannan ya rubuta takardar bayanin agent dinku a sassa shida, ya ba da shawarar hanya mafi sauki da ta isa, kuma ya ba ku umurnai shirye don kwafa. Shugaban wata kungiyar hadin gwiwa a Kinshasa, kasar RDC, ko wani akawu mai zaman kansa a Casablanca, kasar Maroko, yana amfani da shi daidai haka. Amma mai tsarawa yana ba da shawara ne, ba ya yanke hukunci: ku sake karanta kowane sashe, ku kara dokokin kungiyarku da AI ba zai iya hasashe ba."
      }
    ],
    "example": {
      "title": "Fatoumata a Bamako: daga binciken hannu na ranar Juma’a zuwa takardar bayanin agent dinta na sa ido",
      "challenge": "Fatoumata (labarin kirkira) jami’ar shiri ce a wata kungiya mai zaman kanta (ONG) a Bamako, kasar Mali, wadda ke tallafa wa kungiyoyin mata masu noman lambu. Kowace Juma’a da yamma, tana bude shafukan masu bayar da tallafi daya bayan daya, tana rubuta ranakun karshe a cikin littafi, kuma wani lokaci takan manta da daya. Alhali rana daya da aka rasa tana nufin tallafin da kungiyoyin suka rasa. Ana ba ta shawarar ta « dauki agent na AI », amma ba ta san mene ne shi ba, ko ta ina za ta fara.",
      "solution": "Da farko ta bude Claude, tare da kunna binciken yanar gizo, ta aika umurni a tsarin RCTF. Rawa: jami’in sa ido kan tallafin kungiyoyi masu zaman kansu, mai tsantseni. Mahallin: kungiyarta a Bamako, matan lambu, kiran neman ayyuka (appels à projets) da ke bude kan wadatar abinci a Mali ko yankin Sahel. Aiki: nemo kiran neman ayyuka guda uku da ke bude, tare da bude shafukansu na hukuma kafin amsa. Tsari: tebur mai dauke da mai bayar da tallafi, taken, ranar karshe da mahadar hukuma, da « ba a tabbatar ba » idan ba a iya tabbatar da wata rana ba. Claude yana bincike, yana bude shafuka, yana sake bincike, sannan ya kawo kira uku tare da tushensu; Fatoumata ta sami ranar karshe ta farko a shafin hukuma. Yana da amfani, amma za ta sake neman komai a Juma’a mai zuwa: har yanzu mataimaki ne. A cikin sabuwar hira, ta manna umurnin « architecte d’agents ». Claude ya yi mata tambayoyi uku: wadanne masu bayar da tallafi za a bi, yaushe za ta karbi sakamakon, wa ke yanke shawarar neman tallafi. Ta amsa kowace a layi daya. Claude ya kawo takardar bayanin agent dinta na sa ido a sassa shida, kuma ya ba da shawarar Hanya ta 2, aikin da aka tsara lokacinsa. Fatoumata ta sake karanta kowane sashe, ta kara wata doka da AI ba zai iya hasashe ba: darakta ce ke amincewa da kowace bukatar tallafi.",
      "impact": "Aikinta ya wuce gwajin tambayoyi uku: yana dawowa kowane mako, yana canzawa, kuma ana iya duba shi. Fatoumata ta tafi da takarda mai shafi daya da ke bayyana agent dinta na sa ido (manufa, umurnai, kayan aiki, tunawa, mai farawa, shinge), hanyar da aka gano tare da dalilinta, da doka bayyananniya: agent yana bincike kuma yana sanarwa, amma yanke shawarar neman tallafi ya rage a hannunta da na daraktarta. Za ta gina wannan agent a Darasi na 3. A cikin wannan kwas, za ku kuma bi Aïssa, mai ba da shawara mai zaman kanta a Abidjan (Côte d’Ivoire), da Ibrahim, dan kasuwar kayan gyaran babura a Niamey (Yamai, Niger)."
    },
    "practice": {
      "title": "Ku sa mai tsara agents ya tsara muku agent dinku",
      "instructions": [
        "Ku rubuta ayyuka uku da ke maimaituwa a makonku, ku sa su cikin gwajin tambayoyi uku: shin yana dawowa akai-akai? shin matakansa suna canzawa daga wani lokaci zuwa wani? shin za ku iya duba sakamakon cikin sauki? Ku rike wanda ya sami « eh » sau uku.",
        "Ku kwafi umurnin « architecte d’agents » da ke kasa, ku maye gurbin baka-bakan da sana’arku, garinku da wannan aiki, ku aika shi ga Claude, Gemini ko ChatGPT, sannan ku amsa tambayoyinsa uku. Rawa: kai ne mai tsara agents na AI, mai bayyana abubuwa a fili kuma mai hankali. Mahallin: ni [sana’arku] ne a [garinku]. Ina so in ba wa agent wannan aiki: [ku bayyana shi a jimloli uku: me, yaushe, da wadanne takardu]. Na san hanyoyi biyar: 1. project ko skill (agent yana aiki idan na yi masa magana); 2. aikin da aka tsara lokacinsa (yana aiki shi kadai a lokaci kayyadadde); 3. connecteurs (yana shiga e-mail dina, ajandata, fayiloli na); 4. workflow na n8n (yana farawa shi kadai idan wani abu ya faru); 5. agent na dindindin (ana iya samunsa ta manhajar aika sako). Aiki: da farko ka yi mini tambayoyi uku don ka fahimci bukatata sosai. Sannan ka rubuta takardar bayanin agent a sassa shida: manufa, umurnai, kayan aiki, tunawa, mai farawa, shinge. Ka ba da shawarar hanya mafi sauki da ta isa, kuma ka bayyana dalili. Ka kammala da ainihin umurnan agent, shirye don kwafa, a tsarin Rawa, Mahallin, Aiki, Tsari. Tsari: shafi daya, gajerun jimloli, da Hausa. Kada ka kirkiro komai: idan wani bayani ya rasa, rubuta « babu shi ». Kada ka yi amfani da kowane bayanin sirri na mutum.",
        "Ku sake karanta takardar sashe bayan sashe, ku kara akalla shinge biyu na musamman na kungiyarku, kuma ku rubuta hanyar da aka ba da shawara. Ku ajiye wannan takarda: za ta yi muku amfani a kowane darasi na wannan kwas da kuma a aikin karshe."
      ],
      "observation": "Za ku lura cewa AI ba ya amsawa nan take: yana fara yi muku tambayoyi, sannan ya kawo takarda mai tsari a sassa shida, tare da hanyar da ya ba da shawara da dalilinta. Za ku kuma lura cewa ba zai iya hasashen wasu dokokin kungiyarku ba: ku ne kuke kara su. Mai tsarawa yana ba da shawara, ku ne kuke yanke hukunci. Idan hanyar da ya ba da shawara ta yi muku nauyi, ku tambaye shi dalilin da ya sa hanya mafi sauki ba za ta isa ba."
    },
    "quiz": [
      {
        "question": "Me ya fara bambanta agent da mataimaki?",
        "options": [
          { "key": "A", "text": "Yana rubutu da sauri" },
          { "key": "B", "text": "Yana amfani da kayan aiki don cimma manufa, a zagaye" },
          { "key": "C", "text": "Ba ya taba yin kuskure" },
          { "key": "D", "text": "Yana aiki ba tare da intanet ba" }
        ],
        "answer": "B",
        "explanation": "Mataimaki yana amsawa; agent yana aiki. Abin da ya bambanta shi su ne kayan aiki (bincike, karatu, rubutu) da zagayen lura, yanke shawara, aiki da dubawa, domin cimma manufa. Ba lallai ne ya fi rubutu da sauri ba, yana iya yin kuskure, kuma yawanci yana bukatar intanet don amfani da kayan aikinsa."
      },
      {
        "question": "« Kowace Litinin karfe bakwai. » A cikin takardar bayanin agent, wane sashe kuka gane?",
        "options": [
          { "key": "A", "text": "Mai farawa" },
          { "key": "B", "text": "Manufa" },
          { "key": "C", "text": "Kayan aiki" },
          { "key": "D", "text": "Shinge" }
        ],
        "answer": "A",
        "explanation": "« Kowace Litinin karfe bakwai » yana bayyana abin da ke tayar da agent: shi ne mai farawa. Manufa za ta zama sakamakon da ake tsammani, kayan aiki damar da yake amfani da su, shinge kuma iyakokin da ba ya taba ketarewa."
      },
      {
        "question": "Fatoumata tana son ta karbi jerin sababbin kiran neman ayyuka kowace Litinin, ba tare da ta nemi komai ba. Wace ce hanya mafi sauki da ta isa?",
        "options": [
          { "key": "A", "text": "Hanya ta 5: agent na dindindin a manhajar aika sako" },
          { "key": "B", "text": "Hanya ta 1: project, da ake amfani da shi idan an bukata" },
          { "key": "C", "text": "Hanya ta 2: aikin da aka tsara lokacinsa" },
          { "key": "D", "text": "Babu agent: littafi ya isa" }
        ],
        "answer": "C",
        "explanation": "Fatoumata tana son sakamako a lokaci kayyadadde, ba tare da ta nemi komai ba: aikin da aka tsara lokacinsa (Hanya ta 2) ya isa. Project (Hanya ta 1) zai tilasta mata ta sake fara binciken da kanta; agent na dindindin (Hanya ta 5) zai fi bukatar fasaha fiye da yadda ake bukata; kuma littafin shi ne ainihin abin da ke sa ta rasa ranaku."
      },
      {
        "question": "Wane aiki ne ya wuce gwajin tambayoyi uku?",
        "options": [
          { "key": "A", "text": "Rubuta jawabin bikin cika shekarun ONG sau daya tak" },
          { "key": "B", "text": "Gano kiran neman ayyuka kowane mako da duba ranakun karshensu" },
          { "key": "C", "text": "Yanke shawarar albashin ma’aikata shi kadai" },
          { "key": "D", "text": "Zabar sabon abokin hulda na kudi" }
        ],
        "answer": "B",
        "explanation": "Gano kiran neman ayyuka yana dawowa kowane mako, yana canzawa daga wani lokaci zuwa wani, kuma ana iya duba shi a shafukan hukuma: « eh » sau uku. Jawabin abu ne na sau daya; albashi da zabar abokin hulda manyan hukunce-hukunce ne da suke rage a hannun mutum kuma ba a iya duba su cikin sauki."
      },
      {
        "question": "Me umurnin « architecte d’agents » yake fara yi?",
        "options": [
          { "key": "A", "text": "Yana kirkirar agent kuma ya kunna shi da kansa" },
          { "key": "B", "text": "Yana aika takardar ga shugabancinku" },
          { "key": "C", "text": "Kullum yana zabar hanya mafi karfi" },
          { "key": "D", "text": "Yana yi muku tambayoyi uku don fahimtar bukatarku" }
        ],
        "answer": "D",
        "explanation": "Mai tsara agents yana farawa da tambayoyi uku don fahimtar bukatarku, sannan ya rubuta takardar kuma ya ba da shawarar hanya mafi sauki da ta isa, ba mafi karfi ba. Ba ya kirkira ko kunna komai, kuma ba ya aika wa kowa komai: ku ne kuke sake karantawa kuma kuke yanke hukunci."
      }
    ],
    "reflection": "Daga cikin ayyukan da ke dawowa kowane mako a aikinku, wanne za ku fara ba wa agent, kuma wane hukunci za ku dage ku rike a hannunku?",
    "glossary": [
      {
        "term": "Assistant IA (mataimakin AI)",
        "definition": "Kayan aikin AI da ke amsa tambayoyinku a cikin hira, kamar Claude, Gemini ko ChatGPT. Yana ba da amsa, amma ku ne kuke yin sauran aikin kuma kuke sake fara kowace bukata."
      },
      {
        "term": "Agent IA (shirin AI mai aiki a madadinku)",
        "definition": "Shirin AI da ke aiki don cimma manufa: yana amfani da kayan aiki kuma yana aiki a zagaye (lura, yanke shawara, aiki, dubawa) har ya cimma manufa ko ya kai iyakar da aka sa. Yana iya yin kuskure: mutum ne ke rike da ragamar aiki."
      },
      {
        "term": "Outil (kayan aiki)",
        "definition": "Damar da aka ba AI domin ya yi aiki: bincike a yanar gizo, karanta fayil, rubuta e-mail, cike tebur. Agent yana karbar kayan aikin da aikinsa ke bukata kawai."
      },
      {
        "term": "Déclencheur (mai farawa)",
        "definition": "Abin da ke tayar da agent: ku da kuke yi masa magana, lokaci kayyadadde (« kowace Litinin karfe 7 na safe ») ko wani abu da ya faru (fom da aka karba, sako da ya iso)."
      },
      {
        "term": "Garde-fou (shinge)",
        "definition": "Dokar da agent ba ya taba ketarewa, da lokacin da yake mika aiki ga mutum: kada ya kirkiro komai, kada ya aika komai ba tare da amincewa ba, ya sanar da wani mutum idan akwai shakka."
      },
      {
        "term": "Umurnin « architecte d’agents » (mai tsara agents)",
        "definition": "Umurnin da aka rubuta a tsarin RCTF wanda ke sa AI ya tsara agent dinku: yana yin tambayoyi uku, yana rubuta takardar bayani a sassa shida, kuma yana ba da shawarar hanya mafi sauki da ta isa. Yana ba da shawara; ku ne kuke yanke hukunci."
      }
    ]
  }
};
