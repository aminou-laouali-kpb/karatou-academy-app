import { Language } from '../../translations';
import { LessonContent } from '../../lessonContent';

// Module « Comment créer des agents IA » (creer-agents-ia) — leçon ag5 (Méthode 4 : workflows avec n8n)
// Texte aligné sur le CLAUDE.md de production vidéo du cours 2 (docs/production-video/claude-md/).
// Trilingue FR / EN / HA. ⚠️ Traductions HA à faire valider par un locuteur natif haoussa.
export const agLesson5: Record<Language, LessonContent> = {
  "fr": {
    "id": "ag5",
    "lessonNumber": 5,
    "title": "Méthode 4 : automatiser une suite de tâches avec n8n",
    "objective": "À la fin de cette leçon, vous saurez construire un workflow d’agent qui démarre seul quand un événement arrive : un formulaire envoyé, un e-mail reçu, une ligne ajoutée dans un tableau. Vous saurez relier dans n8n un déclencheur, un bloc agent IA guidé par une consigne RCTF, un tableau Google Sheets, un brouillon Gmail et un rappel programmé. Vous saurez aussi garder l’humain aux commandes : l’agent prépare, vous relisez et vous envoyez, et le workflow vérifie le statut de la demande avant chaque relance.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Choisir la Méthode 4 : une tâche fréquente, aux étapes fixes, qui démarre par un événement",
        "body": "Les trois premières méthodes agissent quand vous leur parlez (Méthode 1), à heure fixe (Méthode 2) ou en allant lire vos outils quand vous le demandez (Méthode 3). La Méthode 4 change de logique : elle démarre seule, dès qu’un événement arrive, puis enchaîne plusieurs étapes sans vous. Pensez à la chaîne de service d’une cantine scolaire : dès qu’un plateau arrive, chacun fait son geste, toujours dans le même ordre, sans que le chef ait à donner le signal.\n\nTrois critères permettent de la choisir : la tâche revient souvent ; elle suit toujours les mêmes étapes ; elle commence par un événement précis. Une école privée de Cotonou (Bénin) qui reçoit des demandes d’inscription en ligne, une PME de Casablanca (Maroc) qui reçoit des demandes de devis par e-mail, une association de Lomé (Togo) qui enregistre de nouveaux bénévoles : voilà de bons candidats. À l’inverse, pour une question ponctuelle, un projet Claude (Méthode 1) suffit largement ; pour un résumé chaque matin, une tâche planifiée (Méthode 2) est plus simple. On ne sort pas une bétonnière pour gâcher un seau de ciment.\n\nSoyons honnêtes : cette méthode est plus technique que les précédentes, et il vous faut un ordinateur avec un navigateur récent, car l’éditeur de n8n est pénible à utiliser sur téléphone. La bonne nouvelle : vous n’écrivez pas de code, vous reliez des blocs. Pour n8n, deux voies existent : l’essai de la version en ligne, limité dans le temps, ou l’installation sur votre propre ordinateur ou serveur, gratuite mais plus technique. Zapier et Make, deux autres outils du même genre, reposent sur le même principe si votre organisation les utilise déjà."
      },
      {
        "title": "Construire un workflow dans n8n : des blocs reliés, lancés par un déclencheur d’événement",
        "body": "Un workflow, c’est une suite de blocs reliés. Sur la toile de n8n (l’espace de travail où l’on pose les blocs), chaque bloc fait une seule chose : recevoir un formulaire, écrire une ligne, créer un brouillon, attendre. On les relie dans l’ordre, de gauche à droite, et les données passent de l’un à l’autre comme des briques qui passent de main en main sur un chantier. Le premier bloc est toujours le déclencheur ; le dernier, la dernière action.\n\nLe déclencheur d’événement est ce qui fait démarrer le workflow. Avec la Méthode 2, une horloge lançait l’agent : « chaque lundi à 7 h ». Ici, c’est un événement : un partenaire envoie un formulaire, un e-mail arrive dans une boîte, une ligne s’ajoute dans un tableau. Le workflow part le soir, le dimanche ou pendant une mission de terrain, sans que personne ait besoin d’y penser. Un centre de formation de Ouagadougou (Burkina Faso) peut ainsi traiter chaque inscription à la minute où elle arrive, même quand le secrétariat est fermé.\n\nQuand vous testez, n8n montre l’exécution bloc par bloc : chaque bloc réussi passe au vert ; un bloc qui échoue devient rouge et affiche l’erreur. C’est votre tableau de bord : vous voyez exactement où les données se sont arrêtées. Les libellés de l’interface sont en anglais (« On form submission » pour le déclencheur formulaire, « Wait » pour l’attente, « If » pour la condition), mais leur rôle se comprend vite une fois qu’on a relié ses premiers blocs."
      },
      {
        "title": "Le bloc agent IA : l’IA résume, classe et rédige, dans des limites que vous fixez",
        "body": "Dans un workflow d’agent, la plupart des étapes restent fixes. L’IA intervient à un seul endroit, le bloc agent IA : elle lit la demande, la résume, la classe parmi des catégories que vous avez choisies et rédige un brouillon de réponse. Elle ne choisit ni les étapes ni les destinataires. C’est ce qui distingue un workflow d’agent d’un flux automatique classique, où chaque action est identique quoi qu’il arrive : ici, il y a un moment de jugement, mais bien encadré, comme un réceptionniste qui trie le courrier dans des casiers déjà étiquetés.\n\nPour fonctionner, ce bloc a besoin d’un modèle d’IA, par exemple Gemini, et d’une clé d’API : un long mot de passe qui relie n8n au modèle. Dans la démonstration, elle se crée dans Google AI Studio. Gardez-la secrète comme le code de votre compte mobile money : ne la collez jamais dans un e-mail ou un groupe de discussion, et floutez-la sur une capture d’écran. Avant de commencer, vérifiez sur la page officielle les conditions d’usage et la liste des pays pris en charge, car elles évoluent.\n\nLa consigne du bloc, appelée message système, suit la méthode RCTF. Rôle : l’agent de tri des demandes de votre organisation. Contexte : votre activité, les champs du formulaire, les catégories possibles (par exemple financement, partenariat, information, plainte, à trier) et le fait qu’une personne relit chaque réponse. Tâche : résumer en deux phrases, choisir une seule catégorie, indiquer l’urgence, rédiger un brouillon d’accusé de réception. Format : quatre rubriques dans un ordre fixe, six lignes au plus, et la règle « n’invente rien : aucun engagement, aucune date, aucun montant ». La catégorie « à trier » sert de soupape : une demande inattendue n’est pas rangée de force dans la mauvaise case."
      },
      {
        "title": "Un brouillon plutôt qu’un envoi, un rappel à trois jours et une vérification du statut",
        "body": "L’agent n’envoie rien au partenaire. Il prépare un brouillon dans Gmail ; la personne responsable le relit, le corrige et l’envoie elle-même. C’est la règle de tout ce cours : l’humain reste aux commandes. Une réponse maladroite à un bailleur ou à un client de Kinshasa (RDC) peut abîmer une relation ; un brouillon relu en deux minutes ne coûte presque rien. Pour éviter l’oubli, un bloc d’attente (« Wait ») patiente trois jours, puis envoie un rappel à la personne responsable : « Demande de [organisation] toujours à traiter ».\n\nAttention pourtant à un piège. Si la réponse est partie dès le lendemain, le rappel part-il quand même trois jours plus tard ? Oui. Le workflow ne sait pas que vous avez répondu : il exécute exactement ce que vous avez construit, rien de plus. Un workflow ressemble à un employé très fidèle mais sans initiative : il ne devine rien de ce qu’on ne lui a pas dit.\n\nLa correction tient en deux blocs. Avant le rappel, un bloc Google Sheets relit la ligne de la demande dans le tableau ; puis un bloc de condition (« If ») vérifie le statut : s’il vaut « Répondu », le workflow s’arrête. La seule discipline demandée à l’humain est de changer le statut après chaque réponse. Une coopérative de producteurs de thé au Kenya ou un cabinet comptable de Conakry (Guinée) peuvent appliquer la même règle à leurs relances : brouillon d’abord, et statut vérifié avant chaque relance."
      }
    ],
    "example": {
      "title": "Les demandes des partenaires d’une ONG de Bamako, lues et préparées dès leur arrivée",
      "challenge": "Fatoumata est chargée de programme dans une ONG fictive de Bamako (Mali) qui accompagne des groupements de maraîchères. Les partenaires écrivent à l’ONG par le formulaire de son site, mais les messages tombent dans une boîte que personne ne surveille quand elle est sur le terrain. Certains attendent une semaine avant d’avoir une réponse ; une coopérative a fini par s’adresser à une autre ONG. Son enjeu : ne plus laisser une demande sans réponse, sans que tout repose sur sa mémoire. (Cas fictif.)",
      "solution": "Elle construit dans n8n le workflow « Demandes partenaires ». Un déclencheur formulaire à quatre champs (organisation, pays, e-mail, demande) ; un bloc agent IA relié à Gemini par une clé d’API gardée secrète, avec une consigne RCTF qui résume, classe parmi cinq catégories, indique l’urgence et rédige un brouillon de six lignes au plus, sans engagement inventé ; une ligne ajoutée dans Google Sheets avec le statut « À répondre » ; un brouillon créé dans Gmail, sans aucun envoi automatique ; une attente de trois jours, puis un rappel. Elle teste avec une coopérative fictive de Ziguinchor (Sénégal) qui propose un partenariat sur l’irrigation goutte à goutte : chaque bloc passe au vert, la demande est classée « partenariat », non urgente, et le brouillon attend dans Gmail. Elle ajoute ensuite, avant le rappel, la relecture de la ligne et un bloc « If » qui arrête tout si le statut vaut « Répondu », puis elle active le workflow.",
      "impact": "Un mardi, une demande arrive pendant sa visite à un groupement. À son retour, la ligne est rangée dans le tableau et le brouillon est prêt : elle corrige une phrase et l’envoie le jour même. Chaque demande a désormais sa ligne et son statut, aucune ne dort plus dans une boîte oubliée, et aucune réponse ne part sans sa relecture."
    },
    "practice": {
      "title": "Construisez votre workflow d’agent avec n8n",
      "instructions": [
        "Sur un ordinateur avec un navigateur récent, choisissez une demande qui arrive souvent dans votre travail (formulaire, e-mail, inscription) et écrivez ses catégories, sans oublier une catégorie « à trier » pour les cas qui n’entrent nulle part.",
        "Construisez le workflow dans n8n (essai en ligne ou installation sur votre ordinateur), ou importez le modèle Karatou et adaptez-le : déclencheur formulaire, bloc agent IA, ligne dans Google Sheets, brouillon dans Gmail, attente, vérification du statut, rappel. Comme message système du bloc agent IA, collez et adaptez cette consigne RCTF : Rôle : tu es l’agent de tri des demandes de [nom de l’organisation], à [ville]. Contexte : [nous accompagnons des groupements de maraîchères]. Les demandes arrivent par notre formulaire : organisation, pays, e-mail, demande. Les catégories possibles sont : financement, partenariat, information, plainte, à trier. Une personne de l’équipe relit chaque réponse avant envoi. Tâche : résume la demande en deux phrases, choisis une seule catégorie, indique si la demande est urgente (oui ou non), puis rédige un brouillon de réponse poli qui accuse réception et annonce une réponse détaillée de [prénom du responsable]. Format : quatre rubriques, dans cet ordre : Résumé, Catégorie, Urgence, Brouillon. Brouillon de six lignes au plus, en [français]. N’invente rien : aucun engagement, aucune date, aucun montant. Si la demande ne correspond à aucune catégorie, choisis « à trier ».",
        "Testez avec trois demandes fictives, dont une qui n’entre dans aucune catégorie : réglez l’attente sur une minute le temps du test, suivez l’exécution bloc par bloc, vérifiez chaque ligne du tableau et chaque brouillon dans Gmail, puis remettez l’attente à trois jours et activez le workflow."
      ],
      "observation": "Vous devez constater une exécution entièrement verte, une ligne par demande avec la bonne catégorie (et « à trier » pour la demande hors cadre), des brouillons courts sans promesse inventée, et aucun message envoyé au demandeur sans votre relecture. Si vous passez le statut d’une demande à « Répondu », son rappel ne doit plus partir."
    },
    "quiz": [
      {
        "question": "Qu’est-ce qui lance le workflow de Fatoumata ?",
        "options": [
          { "key": "A", "text": "Une horloge, chaque lundi à sept heures" },
          { "key": "B", "text": "L’envoi du formulaire par un partenaire" },
          { "key": "C", "text": "Fatoumata, quand elle ouvre n8n" },
          { "key": "D", "text": "Le modèle d’IA, quand il le décide" }
        ],
        "answer": "B",
        "explanation": "La Méthode 4 part d’un événement : dès qu’un partenaire envoie le formulaire, le déclencheur lance le workflow, le soir comme le dimanche. L’horloge, c’était la Méthode 2. Fatoumata n’a pas besoin d’ouvrir n8n, et l’IA ne décide pas quand le workflow démarre."
      },
      {
        "question": "Dans ce workflow, que fait l’IA ?",
        "options": [
          { "key": "A", "text": "Elle choisit les étapes et les destinataires" },
          { "key": "B", "text": "Elle envoie les réponses aux partenaires" },
          { "key": "C", "text": "Elle résume, classe la demande et rédige un brouillon" },
          { "key": "D", "text": "Elle installe n8n sur l’ordinateur" }
        ],
        "answer": "C",
        "explanation": "L’IA intervient à un seul endroit, le bloc agent IA : elle résume, classe parmi des catégories fixées et rédige un brouillon. Les étapes et les destinataires sont fixés par vous, et l’envoi reste une décision humaine."
      },
      {
        "question": "Fatoumata a déjà répondu, mais rien ne vérifie le statut avant le rappel. Que se passe-t-il ?",
        "options": [
          { "key": "A", "text": "Le rappel part quand même" },
          { "key": "B", "text": "Le rappel est annulé tout seul" },
          { "key": "C", "text": "Le partenaire reçoit le rappel" },
          { "key": "D", "text": "Le workflow s’efface" }
        ],
        "answer": "A",
        "explanation": "Le workflow ne sait pas qu’elle a répondu : il exécute exactement ce qu’on a construit. Le rappel lui parvient donc quand même (il lui est adressé, pas au partenaire). La correction : relire la ligne du tableau et s’arrêter avec un bloc « If » si le statut vaut « Répondu »."
      },
      {
        "question": "Pour quel besoin choisir la Méthode 4 ?",
        "options": [
          { "key": "A", "text": "Poser une question ponctuelle à l’IA" },
          { "key": "B", "text": "Recevoir un résumé chaque matin à heure fixe" },
          { "key": "C", "text": "Parler à un agent sur messagerie à toute heure" },
          { "key": "D", "text": "Une tâche fréquente, aux étapes fixes, qui démarre par un événement" }
        ],
        "answer": "D",
        "explanation": "Les trois critères de la Méthode 4 sont réunis en D. Une question ponctuelle relève de la Méthode 1, un résumé à heure fixe de la Méthode 2, et un agent joignable à toute heure sur messagerie de la Méthode 5."
      },
      {
        "question": "Que dire honnêtement de n8n à un collègue ?",
        "options": [
          { "key": "A", "text": "L’essai en ligne est limité dans le temps ; l’installation sur son ordinateur est gratuite mais plus technique" },
          { "key": "B", "text": "Il faut savoir coder" },
          { "key": "C", "text": "Il ne fonctionne qu’avec Gemini" },
          { "key": "D", "text": "Il envoie tout seul les réponses, sans réglage" }
        ],
        "answer": "A",
        "explanation": "C’est la présentation honnête des deux voies. On n’écrit pas de code, on relie des blocs ; Gemini n’est qu’un modèle possible ; et rien ne part sans qu’on l’ait construit et réglé, ici un brouillon relu par un humain."
      }
    ],
    "reflection": "Quelle demande revient souvent dans votre travail, au point qu’une réponse en retard vous a déjà coûté un client, un partenaire ou une occasion, et quelles catégories utiliseriez-vous pour la trier ?",
    "glossary": [
      {
        "term": "Workflow",
        "definition": "Suite de blocs reliés dans l’ordre, du déclencheur à la dernière action. Comme une chaîne de service où chacun fait un seul geste, toujours dans le même ordre."
      },
      {
        "term": "Déclencheur d’événement",
        "definition": "Premier bloc du workflow, qui le fait démarrer quand quelque chose arrive : un formulaire envoyé, un e-mail reçu, une ligne ajoutée. Il remplace l’horloge de la Méthode 2."
      },
      {
        "term": "Bloc agent IA",
        "definition": "Le seul endroit du workflow où l’IA décide : elle résume, classe parmi des catégories fixées et rédige un brouillon, sans choisir les étapes ni les destinataires."
      },
      {
        "term": "Clé d’API",
        "definition": "Long mot de passe qui relie n8n à un modèle d’IA comme Gemini. Elle se garde secrète, comme le code d’un compte mobile money."
      },
      {
        "term": "Bloc d’attente (« Wait »)",
        "definition": "Bloc qui met le workflow en pause pendant une durée choisie, par exemple trois jours, avant l’étape suivante, comme l’envoi d’un rappel."
      },
      {
        "term": "Bloc de condition (« If »)",
        "definition": "Bloc qui vérifie une règle et choisit la suite : par exemple, si le statut vaut « Répondu », le workflow s’arrête et le rappel ne part pas."
      }
    ]
  },
  "en": {
    "id": "ag5",
    "lessonNumber": 5,
    "title": "Method 4: automate a sequence of tasks with n8n",
    "objective": "By the end of this lesson, you will know how to build an agent workflow that starts on its own when an event happens: a form submitted, an email received, a row added to a spreadsheet. You will know how to connect, in n8n, a trigger, an AI agent block guided by an RCTF prompt, a Google Sheets spreadsheet, a Gmail draft and a scheduled reminder. You will also know how to keep a human in control: the agent prepares, you review and you send, and the workflow checks the request’s status before every reminder.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Choosing Method 4: a frequent task, with fixed steps, that starts with an event",
        "body": "The first three methods act when you talk to them (Method 1), at a fixed time (Method 2), or by reading your tools when you ask (Method 3). Method 4 works differently: it starts on its own as soon as an event happens, then runs several steps in a row without you. Think of the serving line in a school canteen: as soon as a tray arrives, everyone does their one task, always in the same order, without the head cook having to give a signal.\n\nThree criteria tell you when to choose it: the task comes back often; it always follows the same steps; it begins with a specific event. A private school in Cotonou (Benin) receiving online enrolment requests, a small business in Casablanca (Morocco) receiving quote requests by email, an association in Lomé (Togo) registering new volunteers: these are good candidates. On the other hand, for a one-off question, a Claude project (Method 1) is more than enough; for a summary every morning, a scheduled task (Method 2) is simpler. You don’t bring out a cement mixer to mix one bucket of cement.\n\nLet’s be honest: this method is more technical than the previous ones, and you need a computer with a recent web browser, because the n8n editor is painful to use on a phone. The good news: you don’t write code, you connect blocks. For n8n, there are two routes: the trial of the online version, limited in time, or installing it on your own computer or server, free but more technical. Zapier and Make, two other tools of the same kind, work on the same principle if your organisation already uses them."
      },
      {
        "title": "Building a workflow in n8n: connected blocks, launched by an event trigger",
        "body": "A workflow is a sequence of connected blocks. On the n8n canvas (the workspace where you place the blocks), each block does one thing only: receive a form, write a row, create a draft, wait. You connect them in order, from left to right, and the data passes from one to the next like bricks passed from hand to hand on a building site. The first block is always the trigger; the last one is the final action.\n\nThe event trigger is what starts the workflow. With Method 2, a clock launched the agent: “every Monday at 7 a.m.” Here, it is an event: a partner submits a form, an email lands in an inbox, a row is added to a spreadsheet. The workflow runs in the evening, on Sunday or during a field mission, without anyone having to think about it. A training centre in Ouagadougou (Burkina Faso) can thus handle each registration the minute it arrives, even when the office is closed.\n\nWhen you test, n8n shows the execution block by block: each successful block turns green; a block that fails turns red and displays the error. This is your dashboard: you see exactly where the data stopped. The interface labels are in English (“On form submission” for the form trigger, “Wait” for the pause, “If” for the condition), and their role becomes clear quickly once you have connected your first blocks."
      },
      {
        "title": "The AI agent block: the AI summarises, classifies and drafts, within limits you set",
        "body": "In an agent workflow, most steps stay fixed. The AI steps in at one single point, the AI agent block: it reads the request, summarises it, classifies it into categories you have chosen, and drafts a reply. It chooses neither the steps nor the recipients. That is what sets an agent workflow apart from a classic automated flow, where every action is identical whatever happens: here there is a moment of judgement, but a well-framed one, like a receptionist sorting mail into pigeonholes that are already labelled.\n\nTo work, this block needs an AI model, for example Gemini, and an API key: a long password that connects n8n to the model. In the demonstration, it is created in Google AI Studio. Keep it secret like the PIN of your mobile money account: never paste it into an email or a chat group, and blur it on a screenshot. Before you start, check the terms of use and the list of supported countries on the official page, because they change.\n\nThe block’s prompt, called the system message, follows the RCTF method. Role: the request-sorting agent of your organisation. Context: your activity, the form fields, the possible categories (for example funding, partnership, information, complaint, to sort) and the fact that a person reviews every reply. Task: summarise in two sentences, choose a single category, state the urgency, draft an acknowledgement of receipt. Format: four sections in a fixed order, six lines at most, and the rule “invent nothing: no commitment, no date, no amount.” The “to sort” category acts as a safety valve: an unexpected request is not forced into the wrong box."
      },
      {
        "title": "A draft rather than a send, a three-day reminder and a status check",
        "body": "The agent sends nothing to the partner. It prepares a draft in Gmail; the person in charge reviews it, corrects it and sends it themselves. That is the rule of this whole course: the human stays in control. A clumsy reply to a donor or to a customer in Kinshasa (DRC) can damage a relationship; a draft reviewed in two minutes costs almost nothing. To avoid forgetting, a wait block (“Wait”) pauses for three days, then sends a reminder to the person in charge: “Request from [organisation] still to be handled.”\n\nBut watch out for a trap. If the reply went out the very next day, does the reminder still go out three days later? Yes. The workflow does not know you replied: it does exactly what you built, nothing more. A workflow is like a very loyal employee with no initiative: it guesses nothing it has not been told.\n\nThe fix takes two blocks. Before the reminder, a Google Sheets block reads the request’s row in the spreadsheet again; then a condition block (“If”) checks the status: if it says “Replied”, the workflow stops. The only discipline asked of the human is to change the status after each reply. A tea growers’ cooperative in Kenya or an accounting firm in Conakry (Guinea) can apply the same rule to their follow-ups: draft first, and status checked before every reminder."
      }
    ],
    "example": {
      "title": "Partner requests to an NGO in Bamako, read and prepared as soon as they arrive",
      "challenge": "Fatoumata is a programme officer at a fictional NGO in Bamako (Mali) that supports groups of women market gardeners. Partners write to the NGO through the form on its website, but the messages land in an inbox nobody monitors when she is in the field. Some wait a week for a reply; one cooperative ended up turning to another NGO. Her goal: never leave a request unanswered again, without everything depending on her memory. (Fictional case.)",
      "solution": "She builds the “Partner requests” workflow in n8n. A form trigger with four fields (organisation, country, email, request); an AI agent block connected to Gemini with an API key kept secret, with an RCTF prompt that summarises, classifies into five categories, states the urgency and drafts a reply of six lines at most, with no invented commitment; a row added to Google Sheets with the status “To reply”; a draft created in Gmail, with no automatic sending; a three-day wait, then a reminder. She tests it with a fictional cooperative from Ziguinchor (Senegal) proposing a partnership on drip irrigation: every block turns green, the request is classified “partnership”, not urgent, and the draft waits in Gmail. She then adds, before the reminder, a re-read of the row and an “If” block that stops everything if the status says “Replied”, and she activates the workflow.",
      "impact": "One Tuesday, a request arrives during her visit to a group of growers. When she gets back, the row is filed in the spreadsheet and the draft is ready: she corrects one sentence and sends it the same day. Every request now has its row and its status, none sleeps in a forgotten inbox any more, and no reply goes out without her review."
    },
    "practice": {
      "title": "Build your agent workflow with n8n",
      "instructions": [
        "On a computer with a recent web browser, choose a request that often comes up in your work (form, email, registration) and write down its categories, without forgetting a “to sort” category for cases that fit nowhere.",
        "Build the workflow in n8n (online trial or installation on your computer), or import the Karatou template and adapt it: form trigger, AI agent block, row in Google Sheets, draft in Gmail, wait, status check, reminder. As the system message of the AI agent block, paste and adapt this RCTF prompt: Role: you are the request-sorting agent of [organisation name], in [city]. Context: [we support groups of women market gardeners]. Requests arrive through our form: organisation, country, email, request. The possible categories are: funding, partnership, information, complaint, to sort. A team member reviews every reply before it is sent. Task: summarise the request in two sentences, choose a single category, state whether the request is urgent (yes or no), then draft a polite reply that acknowledges receipt and announces a detailed answer from [first name of the person in charge]. Format: four sections, in this order: Summary, Category, Urgency, Draft. Draft of six lines at most, in [English]. Invent nothing: no commitment, no date, no amount. If the request matches no category, choose “to sort”.",
        "Test with three fictional requests, including one that fits no category: set the wait to one minute for the test, follow the execution block by block, check every row in the spreadsheet and every draft in Gmail, then set the wait back to three days and activate the workflow."
      ],
      "observation": "You should see a fully green execution, one row per request with the right category (and “to sort” for the out-of-scope request), short drafts with no invented promise, and no message sent to the requester without your review. If you set a request’s status to “Replied”, its reminder must no longer go out."
    },
    "quiz": [
      {
        "question": "What launches Fatoumata’s workflow?",
        "options": [
          { "key": "A", "text": "A clock, every Monday at seven o’clock" },
          { "key": "B", "text": "A partner submitting the form" },
          { "key": "C", "text": "Fatoumata, when she opens n8n" },
          { "key": "D", "text": "The AI model, when it decides to" }
        ],
        "answer": "B",
        "explanation": "Method 4 starts from an event: as soon as a partner submits the form, the trigger launches the workflow, in the evening as well as on Sunday. The clock was Method 2. Fatoumata does not need to open n8n, and the AI does not decide when the workflow starts."
      },
      {
        "question": "In this workflow, what does the AI do?",
        "options": [
          { "key": "A", "text": "It chooses the steps and the recipients" },
          { "key": "B", "text": "It sends the replies to the partners" },
          { "key": "C", "text": "It summarises, classifies the request and drafts a reply" },
          { "key": "D", "text": "It installs n8n on the computer" }
        ],
        "answer": "C",
        "explanation": "The AI steps in at one single point, the AI agent block: it summarises, classifies into fixed categories and drafts a reply. You set the steps and the recipients, and sending remains a human decision."
      },
      {
        "question": "Fatoumata has already replied, but nothing checks the status before the reminder. What happens?",
        "options": [
          { "key": "A", "text": "The reminder goes out anyway" },
          { "key": "B", "text": "The reminder cancels itself" },
          { "key": "C", "text": "The partner receives the reminder" },
          { "key": "D", "text": "The workflow deletes itself" }
        ],
        "answer": "A",
        "explanation": "The workflow does not know she replied: it does exactly what was built. So the reminder still reaches her (it is addressed to her, not to the partner). The fix: read the spreadsheet row again and stop with an “If” block if the status says “Replied”."
      },
      {
        "question": "For which need should you choose Method 4?",
        "options": [
          { "key": "A", "text": "Asking the AI a one-off question" },
          { "key": "B", "text": "Receiving a summary every morning at a fixed time" },
          { "key": "C", "text": "Talking to an agent on a messaging app at any hour" },
          { "key": "D", "text": "A frequent task, with fixed steps, that starts with an event" }
        ],
        "answer": "D",
        "explanation": "The three criteria of Method 4 are all in D. A one-off question belongs to Method 1, a summary at a fixed time to Method 2, and an agent reachable at any hour on a messaging app to Method 5."
      },
      {
        "question": "What should you honestly tell a colleague about n8n?",
        "options": [
          { "key": "A", "text": "The online trial is limited in time; installing it on your own computer is free but more technical" },
          { "key": "B", "text": "You need to know how to code" },
          { "key": "C", "text": "It only works with Gemini" },
          { "key": "D", "text": "It sends the replies on its own, with no setup" }
        ],
        "answer": "A",
        "explanation": "That is the honest presentation of the two routes. You don’t write code, you connect blocks; Gemini is only one possible model; and nothing goes out unless you built and set it up, here a draft reviewed by a human."
      }
    ],
    "reflection": "Which request comes up often in your work, to the point that a late reply has already cost you a customer, a partner or an opportunity, and which categories would you use to sort it?",
    "glossary": [
      {
        "term": "Workflow",
        "definition": "A sequence of blocks connected in order, from the trigger to the final action. Like a serving line where everyone does one task, always in the same order."
      },
      {
        "term": "Event trigger",
        "definition": "The first block of the workflow, which starts it when something happens: a form submitted, an email received, a row added. It replaces the clock of Method 2."
      },
      {
        "term": "AI agent block",
        "definition": "The only point in the workflow where the AI decides: it summarises, classifies into fixed categories and drafts a reply, without choosing the steps or the recipients."
      },
      {
        "term": "API key",
        "definition": "A long password that connects n8n to an AI model such as Gemini. It must be kept secret, like the PIN of a mobile money account."
      },
      {
        "term": "Wait block (“Wait”)",
        "definition": "A block that pauses the workflow for a chosen length of time, for example three days, before the next step, such as sending a reminder."
      },
      {
        "term": "Condition block (“If”)",
        "definition": "A block that checks a rule and chooses what happens next: for example, if the status says “Replied”, the workflow stops and the reminder does not go out."
      }
    ]
  },
  "ha": {
    "id": "ag5",
    "lessonNumber": 5,
    "title": "Hanya ta 4: sarrafa jerin ayyuka kai tsaye da n8n",
    "objective": "A karshen wannan darasi, za ku san yadda ake gina workflow na wakili da ke farawa da kansa idan wani abu ya faru: an aiko fom, an karbi e-mail, an kara layi a tebur. Za ku san yadda ake hada a cikin n8n mai farawa, bulon wakilin AI da umurnin RCTF ke jagoranta, teburin Google Sheets, daftarin Gmail da tunatarwa da aka tsara. Za ku kuma san yadda ake barin dan Adam a matsayin mai iko: wakilin yana shiryawa, ku kuna dubawa kuma ku ne kuke aikawa, kuma workflow yana duba matsayin bukatar kafin kowace tunatarwa.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Zabar Hanya ta 4: aiki mai yawan maimaituwa, mai matakai iri daya, da ke farawa da wani abu da ya faru",
        "body": "Hanyoyi uku na farko suna aiki ne idan kun yi musu magana (Hanya ta 1), a lokaci da aka kayyade (Hanya ta 2), ko kuma ta hanyar karanta kayan aikinku idan kun nema (Hanya ta 3). Hanya ta 4 ta bambanta: tana farawa da kanta da zarar wani abu ya faru, sannan ta bi matakai da yawa a jere ba tare da ku ba. Ku yi tunanin layin raba abinci a dakin cin abinci na makaranta: da zarar tire ya iso, kowa yana yin aikinsa guda, kullum a tsari daya, ba tare da shugaban girki ya ba da alama ba.\n\nAkwai sharudda uku don zabar ta: aikin yana maimaituwa sau da yawa; kullum yana bin matakai iri daya; yana farawa da wani abu takamaimai da ya faru. Makaranta mai zaman kanta a Cotonou (Benin) da ke karbar bukatun rajista ta intanet, karamin kamfani a Casablanca (Maroko) da ke karbar bukatun farashi ta e-mail, kungiya a Lomé (Togo) da ke rubuta sababbin masu aikin sa kai: wadannan misalai ne masu kyau. A daya bangaren, don tambaya guda daya, projet na Claude (Hanya ta 1) ya isa sosai; don takaitaccen bayani kowace safiya, aikin da aka tsara (Hanya ta 2) ya fi sauki. Ba a fito da injin kwaba siminti don kwaba bokiti daya ba.\n\nBari mu fadi gaskiya: wannan hanya ta fi na baya wahala ta fannin fasaha, kuma kuna bukatar kwamfuta mai burauza na zamani, domin editan n8n yana da wahalar amfani a waya. Labari mai dadi: ba ku rubuta code, kuna hada bulo-bulo ne kawai. Don n8n, akwai hanyoyi biyu: gwajin sigar intanet, wanda lokacinsa yake da iyaka, ko girka shi a kan kwamfutarku ko sabar ku, kyauta ne amma ya fi wahala ta fannin fasaha. Zapier da Make, wasu kayan aiki biyu irinsa, suna aiki da ka’ida iri daya idan kungiyarku tana amfani da su tuni."
      },
      {
        "title": "Gina workflow a cikin n8n: bulo-bulo da aka hada, da mai farawa ke kunnawa idan wani abu ya faru",
        "body": "Workflow jerin bulo-bulo ne da aka hada. A kan zanen n8n (wurin aiki inda ake ajiye bulo-bulon), kowane bulo yana yin abu daya kawai: karbar fom, rubuta layi, kirkiro daftari, jira. Ana hada su a tsari, daga hagu zuwa dama, kuma bayanai suna wucewa daga daya zuwa na gaba kamar tubalin da ake mika wa juna hannu da hannu a wurin gini. Bulo na farko kullum shi ne mai farawa; na karshe shi ne aikin karshe.\n\nMai farawa idan wani abu ya faru shi ne abin da ke kunna workflow. A Hanya ta 2, agogo ne ke kunna wakilin: « kowace Litinin da karfe 7 na safe ». A nan, wani abu ne da ya faru: abokin hulda ya aiko fom, e-mail ya iso cikin akwati, an kara layi a tebur. Workflow yana tafiya da dare, ranar Lahadi ko lokacin aikin fili, ba tare da kowa ya bukaci tunawa ba. Cibiyar horo a Ouagadougou (Burkina Faso) za ta iya kula da kowace rajista a minti dayan da ta iso, ko da ofishin sakatariya a rufe yake.\n\nIdan kuna gwaji, n8n yana nuna aiwatarwa bulo bayan bulo: kowane bulo da ya yi nasara yana zama kore; bulon da ya kasa yana zama ja kuma yana nuna kuskuren. Wannan shi ne allon sa idonku: kuna ganin daidai inda bayanai suka tsaya. Sunayen da ke cikin manhajar da Turanci suke (« On form submission » don mai farawa na fom, « Wait » don jira, « If » don sharadi), amma aikinsu yana fahimtuwa da sauri da zarar kun hada bulo-bulonku na farko."
      },
      {
        "title": "Bulon wakilin AI: AI yana takaitawa, yana rarrabawa kuma yana rubuta daftari, cikin iyakokin da kuka shata",
        "body": "A cikin workflow na wakili, yawancin matakai suna nan daram. AI yana shiga ne a wuri daya kawai, bulon wakilin AI: yana karanta bukatar, yana takaita ta, yana sanya ta a cikin rukunonin da kuka zaba, kuma yana rubuta daftarin amsa. Ba ya zabar matakai ko wadanda za a aika wa. Wannan shi ne abin da ke bambanta workflow na wakili da tsarin sarrafa kai na yau da kullum, inda kowane mataki iri daya ne ko me ya faru: a nan akwai lokacin yanke hukunci, amma an tsara shi sosai, kamar mai karbar baki da ke rarraba wasiku cikin akwatuna da aka riga aka rubuta wa suna.\n\nDon yin aiki, wannan bulo yana bukatar samfurin AI, misali Gemini, da makullin API: dogon kalmar sirri da ke hada n8n da samfurin. A cikin nunin, ana kirkiro shi a Google AI Studio. Ku boye shi kamar lambar sirri ta asusun kudi ta waya (mobile money): kada ku taba manna shi a e-mail ko a rukunin hira, kuma ku dusashe shi a hoton allo. Kafin ku fara, ku duba a shafin hukuma sharuddan amfani da jerin kasashen da ake tallafa wa, domin suna canzawa.\n\nUmurnin bulon, wanda ake kira sakon tsari (system message), yana bin hanyar RCTF. Rawa: wakilin rarraba bukatun kungiyarku. Mahallin: ayyukanku, filayen fom din, rukunonin da ake iya zaba (misali tallafin kudi, hadin gwiwa, bayani, korafi, a rarraba) da kuma cewa mutum yana duba kowace amsa. Aiki: takaitawa a jimloli biyu, zabar rukuni daya kawai, nuna ko akwai gaggawa, rubuta daftarin tabbatar da karba. Tsari: kanun bayani hudu a tsari kayyadadde, layi shida a mafi yawa, da ka’idar « kada ka kirkiri komai: babu alkawari, babu kwanan wata, babu adadin kudi ». Rukunin « a rarraba » yana aiki kamar bawul na tsaro: ba a tilasta bukatar da ba a zata ba cikin akwatin da bai dace ba."
      },
      {
        "title": "Daftari maimakon aikawa, tunatarwa bayan kwana uku da duba matsayi",
        "body": "Wakilin ba ya aika komai ga abokin hulda. Yana shirya daftari a cikin Gmail; mai alhakin yana dubawa, yana gyarawa kuma shi da kansa yake aikawa. Wannan ita ce ka’idar wannan kwas gaba daya: dan Adam yana ci gaba da zama mai iko. Amsar da ba ta dace ba ga mai bayar da tallafi ko ga abokin ciniki a Kinshasa (RDC) za ta iya bata dangantaka; daftarin da aka duba a minti biyu kusan ba ya kashe komai. Don kauce wa mantuwa, bulon jira (« Wait ») yana dakata kwana uku, sannan ya aika wa mai alhakin tunatarwa: « Bukatar [kungiya] har yanzu tana jiran a kula da ita ».\n\nAmma ku yi hattara da wani tarko. Idan an aika amsar tun washegari, shin tunatarwar za ta tafi duk da haka bayan kwana uku? Eh. Workflow bai san cewa kun amsa ba: yana yin daidai abin da kuka gina, ba fiye ba. Workflow kamar ma’aikaci ne mai aminci sosai amma ba shi da dabarar kansa: ba ya hasashen komai da ba a fada masa ba.\n\nGyaran yana bukatar bulo biyu. Kafin tunatarwa, bulon Google Sheets yana sake karanta layin bukatar a cikin tebur; sannan bulon sharadi (« If ») yana duba matsayin: idan an rubuta « An amsa », workflow yana tsayawa. Abin da kawai ake bukata daga dan Adam shi ne canza matsayin bayan kowace amsa. Kungiyar hadin gwiwa ta masu noman shayi a Kenya ko ofishin akanta a Conakry (Guinea) za su iya amfani da wannan ka’ida don bibiyarsu: daftari tukuna, kuma a duba matsayi kafin kowace tunatarwa."
      }
    ],
    "example": {
      "title": "Bukatun abokan hulda na wata ONG a Bamako, ana karanta su kuma ana shirya su da zarar sun iso",
      "challenge": "Fatoumata jami’ar shiri ce a wata ONG ta kirkira a Bamako (Mali) da ke tallafa wa kungiyoyin mata masu lambu. Abokan hulda suna rubuta wa ONG ta fom din shafinta na intanet, amma sakonnin suna fadawa cikin akwatin da babu mai sa ido a kai idan tana fili. Wasu suna jira mako guda kafin su sami amsa; wata kungiyar hadin gwiwa ta karshe ta koma wata ONG. Burinta: kada ta sake barin wata bukata ba tare da amsa ba, ba tare da komai ya dogara ga tunaninta ba. (Labari na kirkira.)",
      "solution": "Ta gina workflow « Bukatun abokan hulda » a cikin n8n. Mai farawa na fom mai filaye hudu (kungiya, kasa, e-mail, bukata); bulon wakilin AI da aka hada da Gemini ta makullin API da aka boye, tare da umurnin RCTF da ke takaitawa, yana rarrabawa cikin rukunoni biyar, yana nuna gaggawa kuma yana rubuta daftarin layi shida a mafi yawa, ba tare da alkawarin kirkira ba; layin da aka kara a Google Sheets da matsayin « A amsa »; daftarin da aka kirkiro a Gmail, ba tare da aikawa kai tsaye ba; jira na kwana uku, sannan tunatarwa. Ta gwada da wata kungiyar hadin gwiwa ta kirkira daga Ziguinchor (Senegal) da ke ba da shawarar hadin gwiwa kan ban ruwa digo-digo: kowane bulo ya zama kore, an rarraba bukatar a « hadin gwiwa », ba ta gaggawa ba, kuma daftarin yana jira a Gmail. Daga nan ta kara, kafin tunatarwa, sake karanta layin da bulon « If » da ke dakatar da komai idan matsayin ya zama « An amsa », sannan ta kunna workflow.",
      "impact": "Wata ranar Talata, wata bukata ta iso lokacin da take ziyarar wata kungiyar masu lambu. Da ta dawo, layin yana nan a cikin tebur kuma daftarin a shirye yake: ta gyara jimla daya ta aika shi a ranar. Yanzu kowace bukata tana da layinta da matsayinta, babu wadda ke kwance cikin akwatin da aka manta, kuma babu amsar da ke tafiya ba tare da ta duba ta ba."
    },
    "practice": {
      "title": "Ku gina workflow na wakilinku da n8n",
      "instructions": [
        "A kan kwamfuta mai burauza na zamani, ku zabi bukatar da ke yawan zuwa a aikinku (fom, e-mail, rajista) kuma ku rubuta rukunoninta, ba tare da mantawa da rukunin « a rarraba » ba don abubuwan da ba su shiga ko’ina ba.",
        "Ku gina workflow a cikin n8n (gwajin intanet ko girkawa a kwamfutarku), ko ku shigo da samfurin Karatou ku daidaita shi: mai farawa na fom, bulon wakilin AI, layi a Google Sheets, daftari a Gmail, jira, duba matsayi, tunatarwa. A matsayin sakon tsari na bulon wakilin AI, ku manna kuma ku daidaita wannan umurnin RCTF: Rawa: kai ne wakilin rarraba bukatun [sunan kungiya], a [gari]. Mahallin: [muna tallafa wa kungiyoyin mata masu lambu]. Bukatu suna zuwa ta fom dinmu: kungiya, kasa, e-mail, bukata. Rukunonin da ake iya zaba su ne: tallafin kudi, hadin gwiwa, bayani, korafi, a rarraba. Wani mutum a cikin kungiyar yana duba kowace amsa kafin a aika. Aiki: takaita bukatar a jimloli biyu, zabi rukuni daya kawai, nuna ko bukatar ta gaggawa ce (eh ko a’a), sannan ka rubuta daftarin amsa mai ladabi da ke tabbatar da karba kuma ke sanar da cikakkiyar amsa daga [sunan mai alhakin]. Tsari: kanun bayani hudu, a wannan tsari: Takaitawa, Rukuni, Gaggawa, Daftari. Daftari na layi shida a mafi yawa, da [Hausa]. Kada ka kirkiri komai: babu alkawari, babu kwanan wata, babu adadin kudi. Idan bukatar ba ta dace da kowane rukuni ba, zabi « a rarraba ».",
        "Ku gwada da bukatu uku na kirkira, ciki har da daya da ba ta shiga kowane rukuni: ku saita jira zuwa minti daya lokacin gwajin, ku bi aiwatarwa bulo bayan bulo, ku duba kowane layi a tebur da kowane daftari a Gmail, sannan ku mayar da jira zuwa kwana uku ku kunna workflow."
      ],
      "observation": "Ya kamata ku ga aiwatarwa da ta zama kore gaba daya, layi daya ga kowace bukata da rukunin da ya dace (da « a rarraba » ga bukatar da ba ta cikin tsari), gajerun daftarori ba tare da alkawarin kirkira ba, kuma babu sakon da aka aika wa mai bukata ba tare da kun duba ba. Idan kun canza matsayin wata bukata zuwa « An amsa », tunatarwarta kada ta sake tafiya."
    },
    "quiz": [
      {
        "question": "Me ke kunna workflow na Fatoumata?",
        "options": [
          { "key": "A", "text": "Agogo, kowace Litinin da karfe bakwai" },
          { "key": "B", "text": "Aikowar fom daga abokin hulda" },
          { "key": "C", "text": "Fatoumata, idan ta bude n8n" },
          { "key": "D", "text": "Samfurin AI, idan ya yanke shawara" }
        ],
        "answer": "B",
        "explanation": "Hanya ta 4 tana farawa da wani abu da ya faru: da zarar abokin hulda ya aiko fom, mai farawa yana kunna workflow, da dare ko ranar Lahadi. Agogo na Hanya ta 2 ne. Fatoumata ba ta bukatar bude n8n, kuma AI ba ya yanke shawarar lokacin da workflow zai fara."
      },
      {
        "question": "A cikin wannan workflow, me AI yake yi?",
        "options": [
          { "key": "A", "text": "Yana zabar matakai da wadanda za a aika wa" },
          { "key": "B", "text": "Yana aika amsoshi ga abokan hulda" },
          { "key": "C", "text": "Yana takaitawa, yana rarraba bukatar kuma yana rubuta daftari" },
          { "key": "D", "text": "Yana girka n8n a kan kwamfuta" }
        ],
        "answer": "C",
        "explanation": "AI yana shiga a wuri daya kawai, bulon wakilin AI: yana takaitawa, yana rarrabawa cikin rukunoni kayyadaddu kuma yana rubuta daftari. Ku ne kuke kayyade matakai da wadanda za a aika wa, kuma aikawa ta ci gaba da zama shawarar dan Adam."
      },
      {
        "question": "Fatoumata ta riga ta amsa, amma babu abin da ke duba matsayi kafin tunatarwa. Me zai faru?",
        "options": [
          { "key": "A", "text": "Tunatarwar za ta tafi duk da haka" },
          { "key": "B", "text": "Tunatarwar za ta soke kanta" },
          { "key": "C", "text": "Abokin hulda zai karbi tunatarwar" },
          { "key": "D", "text": "Workflow zai goge kansa" }
        ],
        "answer": "A",
        "explanation": "Workflow bai san cewa ta amsa ba: yana yin daidai abin da aka gina. Don haka tunatarwar za ta iso mata duk da haka (ita ake aika wa, ba abokin hulda ba). Gyaran: sake karanta layin tebur kuma a tsaya da bulon « If » idan matsayin ya zama « An amsa »."
      },
      {
        "question": "Don wace bukata za a zabi Hanya ta 4?",
        "options": [
          { "key": "A", "text": "Yi wa AI tambaya guda daya" },
          { "key": "B", "text": "Karbar takaitaccen bayani kowace safiya a lokaci kayyadadde" },
          { "key": "C", "text": "Yin magana da wakili ta manhajar sako a kowane lokaci" },
          { "key": "D", "text": "Aiki mai yawan maimaituwa, mai matakai iri daya, da ke farawa da wani abu da ya faru" }
        ],
        "answer": "D",
        "explanation": "Sharudda uku na Hanya ta 4 duka suna cikin D. Tambaya guda daya ta Hanya ta 1 ce, takaitaccen bayani a lokaci kayyadadde na Hanya ta 2 ne, kuma wakilin da ake iya samu a kowane lokaci ta manhajar sako na Hanya ta 5 ne."
      },
      {
        "question": "Me za a fada wa abokin aiki da gaskiya game da n8n?",
        "options": [
          { "key": "A", "text": "Gwajin intanet yana da iyakar lokaci; girka shi a kan kwamfutarka kyauta ne amma ya fi wahala ta fannin fasaha" },
          { "key": "B", "text": "Dole ne a iya rubuta code" },
          { "key": "C", "text": "Yana aiki ne da Gemini kawai" },
          { "key": "D", "text": "Yana aika amsoshi da kansa, ba tare da saiti ba" }
        ],
        "answer": "A",
        "explanation": "Wannan shi ne bayanin gaskiya na hanyoyin biyu. Ba a rubuta code, ana hada bulo-bulo; Gemini samfuri daya ne kawai daga cikin da yawa; kuma babu abin da ke tafiya sai idan kun gina shi kuma kun saita shi, a nan daftari ne da dan Adam ke dubawa."
      }
    ],
    "reflection": "Wace bukata ce ke yawan zuwa a aikinku, har ta kai ga jinkirin amsa ya taba sa ku rasa abokin ciniki, abokin hulda ko wata dama, kuma wadanne rukunoni za ku yi amfani da su don rarraba ta?",
    "glossary": [
      {
        "term": "Workflow (jerin ayyuka masu bin juna)",
        "definition": "Jerin bulo-bulo da aka hada a tsari, daga mai farawa zuwa aikin karshe. Kamar layin raba abinci inda kowa yake yin aiki guda, kullum a tsari daya."
      },
      {
        "term": "Déclencheur d’événement / Event trigger (mai farawa idan wani abu ya faru)",
        "definition": "Bulo na farko na workflow, wanda ke kunna shi idan wani abu ya faru: an aiko fom, an karbi e-mail, an kara layi. Yana maye gurbin agogon Hanya ta 2."
      },
      {
        "term": "Bloc agent IA / AI agent block (bulon wakilin AI)",
        "definition": "Wuri daya tilo a cikin workflow inda AI ke yanke shawara: yana takaitawa, yana rarrabawa cikin rukunoni kayyadaddu kuma yana rubuta daftari, ba tare da zabar matakai ko wadanda za a aika wa ba."
      },
      {
        "term": "Clé d’API / API key (makullin API)",
        "definition": "Dogon kalmar sirri da ke hada n8n da samfurin AI kamar Gemini. Dole a boye shi, kamar lambar sirri ta asusun kudi ta waya."
      },
      {
        "term": "Wait (bulon jira)",
        "definition": "Bulo da ke dakatar da workflow na tsawon lokacin da aka zaba, misali kwana uku, kafin mataki na gaba, kamar aika tunatarwa."
      },
      {
        "term": "If (bulon sharadi)",
        "definition": "Bulo da ke duba wata ka’ida kuma ya zabi abin da zai biyo baya: misali, idan matsayin ya zama « An amsa », workflow yana tsayawa kuma tunatarwar ba ta tafiya."
      }
    ]
  }
};
