import { Language } from '../../translations';
import { LessonContent } from '../../lessonContent';

// Module « Comment créer des agents IA » (creer-agents-ia) — leçon ag4 (Méthode 3 : connecteurs et MCP)
// Texte aligné sur le CLAUDE.md de production vidéo du cours 2 (docs/production-video/claude-md/).
// Trilingue FR / EN / HA. ⚠️ Traductions HA à faire valider par un locuteur natif haoussa.
export const agLesson4: Record<Language, LessonContent> = {
  "fr": {
    "id": "ag4",
    "lessonNumber": 4,
    "title": "Méthode 3 : connecter votre agent à Gmail, à l’agenda et à Drive",
    "objective": "À la fin de cette leçon, vous saurez brancher un agent sur vos outils de travail — Gmail, Google Agenda et Google Drive — grâce aux connecteurs, en lui donnant seulement l’accès dont il a besoin. Vous saurez expliquer simplement ce qu’est le MCP, cette prise universelle entre l’IA et vos outils. Vous saurez aussi régler votre agent pour qu’il prépare le travail sans rien envoyer, partager ni supprimer sans votre accord, et pour qu’il signale à part les e-mails sensibles.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Un connecteur : l’accès de l’agent à Gmail, à l’agenda et à Drive",
        "body": "Jusqu’ici, vos agents travaillaient dans leur bulle. Un projet Claude connaît les fichiers que vous lui avez confiés ; une tâche planifiée cherche sur le web. Mais aucun des deux ne voit vos e-mails ni votre agenda. Or beaucoup de tâches utiles — préparer une réunion, retrouver une pièce jointe, faire le point sur un dossier — demandent vos vraies données. C’est le rôle de la Méthode 3, troisième cran sur l’échelle des cinq méthodes : brancher l’agent sur vos outils. Choisissez-la quand l’agent a besoin de ce qui se trouve dans votre boîte e-mail, votre agenda ou vos documents.\n\nUn connecteur relie l’assistant à un outil précis : Gmail, Google Agenda, Google Drive. Une fois branché, l’agent peut chercher un e-mail, lire un rendez-vous, ouvrir un document. Pensez au comptable d’un cabinet de Lomé, au Togo, à qui l’on remet la clé de l’armoire des factures : il ne devine plus, il consulte. Dans les six pièces d’un agent (objectif, instructions, outils, mémoire, déclencheur, garde-fous), les connecteurs sont de nouveaux outils. Vous les activez une fois, dans les réglages de l’assistant, en autorisant votre compte. Ensuite, vos conversations peuvent s’en servir.\n\nBrancher l’IA sur sa boîte e-mail fait peur, et c’est une saine prudence. Il ne s’agit pas de tout lui ouvrir. Deux règles encadrent cette méthode : donner l’accès minimum, et garder pour vous les actions sensibles. Avec elles, l’agent ne devine plus : il sait, et vous restez aux commandes. Claude propose ces connecteurs ; ChatGPT et Gemini peuvent aussi se relier à vos outils, avec des noms et des menus qui varient d’un assistant à l’autre."
      },
      {
        "title": "Le MCP : une prise universelle entre l’IA et vos outils",
        "body": "Derrière beaucoup de connecteurs se trouve le MCP, pour « Model Context Protocol », que l’on peut traduire par « protocole de contexte pour les modèles d’IA ». Le nom est technique, l’idée est simple. C’est une norme commune : une règle partagée qui permet à une IA et à un outil de se comprendre, sans que chaque éditeur invente son propre branchement.\n\nPensez à une prise universelle. Dans une boutique d’électroménager de Cotonou, au Bénin, le vendeur ne fabrique pas un câble spécial pour chaque appareil : la télévision, le ventilateur et le chargeur se branchent sur la même prise murale. Le MCP joue ce rôle. Un outil compatible — messagerie, agenda, fichiers, tableur, logiciel de gestion — se branche sur l’IA sans montage sur mesure. Une prise, plusieurs appareils. Cette norme a été lancée par Anthropic, l’entreprise qui crée Claude ; elle est ouverte, et d’autres acteurs l’ont adoptée.\n\nVous n’avez pas besoin de programmer quoi que ce soit, ni de savoir comment le MCP fonctionne à l’intérieur. Retenez l’image, et une précaution : une prise transporte du vrai courant. Brancher un outil, c’est donner à l’IA un accès réel à vos données. Préférez les connecteurs proposés par l’assistant lui-même ou par l’éditeur officiel de l’outil, et méfiez-vous d’un branchement venu d’une source inconnue, comme vous refuseriez une rallonge électrique bricolée."
      },
      {
        "title": "L’accès minimum : seulement ce dont l’agent a besoin",
        "body": "Avant d’activer chaque connecteur, posez une question : de quoi l’agent a-t-il vraiment besoin pour cette tâche ? Pour préparer une réunion : l’agenda, les e-mails du client, le dossier du projet. Pas la comptabilité, pas la banque en ligne, pas la boîte d’un collègue. C’est le principe du gardien d’immeuble à qui l’on confie la clé du local technique, et non celle de chaque appartement.\n\nQuatre réflexes complètent cette règle. Commencez si possible avec un compte de test, rempli de données fictives, le temps de voir comment l’agent se comporte. Lisez l’écran d’autorisation avant d’accepter : vérifiez l’adresse du compte et la liste des accès demandés. Ne donnez jamais un mot de passe dans une conversation : l’autorisation passe par la page officielle de l’outil, jamais par le chat. Et débranchez ce qui ne sert plus, comme on récupère la clé d’un prestataire à la fin d’un chantier. Une directrice d’école de Ouagadougou, au Burkina Faso, qui teste un agent pour préparer ses conseils de classe, peut lui ouvrir le dossier des bulletins sans lui ouvrir ses échanges avec les parents.\n\nComparez deux réglages pour le même agent. Réglage A : tout le compte Google, avec l’envoi automatique. Réglage B : l’agenda, les e-mails du client, le dossier du projet, et aucun envoi. Le B fait le même travail avec moins de risques. Un accès en trop ne sert à rien, sauf en cas d’erreur, et là il coûte cher : un e-mail parti au mauvais destinataire, un document partagé par erreur. L’accès minimum est votre premier garde-fou."
      },
      {
        "title": "L’agent prépare, il n’envoie rien sans vous",
        "body": "Lire, c’est une chose. Envoyer, partager, supprimer, c’en est une autre. Une erreur de lecture se rattrape à la relecture ; un e-mail parti ne revient pas. Par défaut, Claude demande votre accord avant d’envoyer, de répondre ou de transférer un message. Gardez ce réglage, et ne cliquez pas sur « accepter » par réflexe : lisez ce que l’agent s’apprête à faire.\n\nDoublez cette protection dans vos instructions, avec la méthode RCTF. Dans le bloc Format, écrivez noir sur blanc : « N’envoie, ne transfère et ne supprime aucun e-mail. » Ajoutez : « Si un e-mail est sensible (plainte, litige, données personnelles), signale-le à part sans le résumer en détail. » Et la règle d’honnêteté : « N’invente rien : écris “non disponible” si une information manque. » Ainsi, même si un réglage change un jour, votre consigne garde la même limite.\n\nLe partage des rôles est clair. Une gérante de PME à Nairobi, au Kenya, laisse son agent trier et résumer les demandes de devis ; c’est elle qui répond aux clients et qui fixe les prix. L’agent lit, croise, prépare ; vous décidez et vous parlez. Gardez aussi un réflexe de vérification : un agent connecté peut mal lire une date ou confondre deux échanges. Avant la réunion, contrôlez chaque fait important dans l’e-mail ou le document d’origine."
      }
    ],
    "example": {
      "title": "Aïssa prépare sa réunion client avec un agent branché sur Gmail, l’agenda et Drive",
      "challenge": "Aïssa, consultante indépendante à Abidjan, en Côte d’Ivoire (cas fictif), rencontre un client demain matin. Les échanges sont éparpillés : des e-mails, une invitation dans l’agenda, une proposition dans Drive. La dernière fois, elle est arrivée sans avoir tout relu, et le client lui a rappelé une demande qu’elle avait oubliée. Son agent de veille ne peut rien pour elle ici : il ne voit ni ses e-mails ni son agenda. L’enjeu : sa crédibilité face au client.",
      "solution": "Sur un compte Google de démonstration, Aïssa active dans les réglages de Claude trois connecteurs : Gmail, Google Agenda et Google Drive. Sur l’écran d’autorisation de Google, elle vérifie l’adresse du compte et lit les accès demandés avant d’accepter. Elle colle une consigne RCTF. Rôle : un assistant de préparation de réunions, précis et discret. Contexte : une consultante à Abidjan, ses trois outils, des données confidentielles. Tâche : préparer la réunion de demain avec ce client. Format : une page en quatre parties, aucun envoi, les e-mails sensibles signalés à part. Claude ouvre l’agenda et trouve la réunion « Point mensuel » de demain à 10 h, cherche les e-mails du client, puis ouvre la proposition dans Drive. Il rend le contexte en trois lignes, les derniers échanges, les points ouverts — dont un budget de quinze millions de FCFA à confirmer — et trois questions à poser. Un e-mail où le client conteste une facture est signalé à part, sans résumé détaillé ni réponse préparée.",
      "impact": "Dans Gmail, le dossier des messages envoyés est vide : rien n’est parti. Le lendemain, Aïssa entre en réunion avec une page claire, pose ses trois questions et garde pour elle la facture contestée, qu’elle traitera elle-même. Le client voit qu’elle connaît son dossier. Elle conserve ce réglage pour ses prochains rendez-vous, avec seulement les trois accès utiles."
    },
    "practice": {
      "title": "Préparez votre prochaine réunion avec un agent connecté",
      "instructions": [
        "Listez les outils dont l’agent a vraiment besoin pour préparer une réunion, et seulement ceux-là (par exemple l’agenda, les e-mails d’un client, un dossier Drive). Activez ces connecteurs dans les réglages de votre assistant, de préférence sur un compte de test, et lisez l’écran d’autorisation (adresse du compte, accès demandés) avant d’accepter.",
        "Collez cette consigne RCTF, adaptée à votre prochaine réunion réelle : Rôle : tu es mon assistant de préparation de réunions, précis et discret. Contexte : je suis [votre métier] à [votre ville]. Tu as accès à mon agenda, à ma boîte Gmail et à mon Google Drive. Ces données sont confidentielles. Tâche : trouve dans mon agenda ma réunion de [demain] avec [le client ou le partenaire]. Relis les e-mails échangés avec lui depuis un mois et les documents du dossier [nom du dossier] dans Drive. Prépare ma réunion. Format : une page en quatre parties : contexte en trois lignes, derniers échanges, points ouverts, trois questions à poser. N’envoie, ne transfère et ne supprime aucun e-mail. Si un e-mail est sensible (plainte, litige, données personnelles), signale-le à part sans le résumer en détail. N’invente rien : écris « non disponible » si une information manque.",
        "Relisez la préparation et vérifiez chaque fait dans l’e-mail ou le document d’origine. Ouvrez ensuite le dossier des messages envoyés pour contrôler que rien n’est parti, puis débranchez les connecteurs dont vous ne vous servirez plus."
      ],
      "observation": "Vous devez constater que l’agent rend une page en quatre parties construite à partir de vos vraies données, sans rien inventer (« non disponible » quand une information manque), qu’un éventuel e-mail sensible est signalé à part sans réponse, et que le dossier des messages envoyés est vide. Vous constatez aussi que quelques accès précis suffisaient : l’agent n’a pas eu besoin du reste de votre compte."
    },
    "quiz": [
      {
        "question": "À quoi sert un connecteur ?",
        "options": [
          { "key": "A", "text": "À traduire les réponses de l’IA" },
          { "key": "B", "text": "À rendre l’IA plus intelligente" },
          { "key": "C", "text": "À donner à l’agent l’accès à un outil, comme Gmail ou l’agenda" },
          { "key": "D", "text": "À effacer les anciens e-mails" }
        ],
        "answer": "C",
        "explanation": "Un connecteur ne change pas l’intelligence de l’IA : il lui ouvre une porte vers un outil précis. Grâce à lui, l’agent peut chercher un e-mail, lire un rendez-vous ou ouvrir un document. Dans les six pièces d’un agent, c’est un nouvel outil."
      },
      {
        "question": "Quelle image résume le MCP ?",
        "options": [
          { "key": "A", "text": "Une prise universelle entre l’IA et vos outils" },
          { "key": "B", "text": "Un antivirus pour votre boîte e-mail" },
          { "key": "C", "text": "Un mot de passe partagé entre plusieurs comptes" },
          { "key": "D", "text": "Un nouveau réseau social" }
        ],
        "answer": "A",
        "explanation": "Le MCP est une norme commune : un outil compatible se branche sur l’IA sans montage sur mesure, comme plusieurs appareils sur une même prise. Ce n’est ni un antivirus, ni un mot de passe, ni un réseau social, et vous n’avez pas besoin de le programmer."
      },
      {
        "question": "Pour préparer ses réunions clients, quels accès Aïssa donne-t-elle à l’agent ?",
        "options": [
          { "key": "A", "text": "Tout son compte Google et sa banque en ligne" },
          { "key": "B", "text": "L’agenda, les e-mails du client et le dossier du projet" },
          { "key": "C", "text": "Aucun accès : l’agent devine" },
          { "key": "D", "text": "La boîte e-mail de son associé" }
        ],
        "answer": "B",
        "explanation": "C’est l’accès minimum : seulement ce dont l’agent a besoin pour la tâche. Tout le compte et la banque en ligne ajoutent des risques sans rien apporter ; sans aucun accès, l’agent ne peut que deviner ; la boîte d’un associé ne la regarde pas."
      },
      {
        "question": "Que ne faut-il jamais faire avec un agent connecté ?",
        "options": [
          { "key": "A", "text": "Commencer avec un compte de test" },
          { "key": "B", "text": "Débrancher un connecteur inutile" },
          { "key": "C", "text": "Lire les accès demandés avant d’accepter" },
          { "key": "D", "text": "Écrire un mot de passe dans la conversation" }
        ],
        "answer": "D",
        "explanation": "Un mot de passe ne se donne jamais dans une conversation : l’autorisation passe par l’écran officiel de l’outil. Les trois autres gestes sont, au contraire, de bons réflexes d’accès minimum."
      },
      {
        "question": "L’agent repère un e-mail où le client conteste une facture. Que prévoient les instructions d’Aïssa ?",
        "options": [
          { "key": "A", "text": "Il répond poliment au client" },
          { "key": "B", "text": "Il le signale à part, sans préparer de réponse" },
          { "key": "C", "text": "Il le supprime de la boîte" },
          { "key": "D", "text": "Il le transfère à un collègue" }
        ],
        "answer": "B",
        "explanation": "La consigne d’Aïssa dit : n’envoie, ne transfère et ne supprime aucun e-mail, et signale à part les e-mails sensibles sans les résumer en détail. Une contestation de facture est sensible : c’est Aïssa qui la traitera elle-même."
      }
    ],
    "reflection": "Quelle réunion ou quel rendez-vous de votre semaine prochaine gagnerait à être préparé par un agent connecté, et à quels outils, précisément, lui donneriez-vous accès — et à quoi, surtout pas ?",
    "glossary": [
      {
        "term": "Connecteur",
        "definition": "Lien qui donne à un agent l’accès à un outil précis, comme Gmail, Google Agenda ou Google Drive. On l’active une fois en autorisant son compte ; l’agent peut alors chercher, lire ou ouvrir dans cet outil."
      },
      {
        "term": "MCP (Model Context Protocol)",
        "definition": "Norme commune qui permet à une IA et à un outil compatible de se comprendre sans montage sur mesure. L’image à retenir : une prise universelle, plusieurs appareils."
      },
      {
        "term": "Accès minimum",
        "definition": "Règle qui consiste à ne donner à l’agent que les accès nécessaires à sa tâche, et rien de plus. C’est le premier garde-fou d’un agent connecté."
      },
      {
        "term": "Écran d’autorisation",
        "definition": "Page officielle de l’outil (par exemple Google) qui affiche le compte concerné et la liste des accès demandés avant que vous acceptiez. On le lit toujours avant de cliquer."
      },
      {
        "term": "Compte de test",
        "definition": "Compte séparé, rempli de données fictives, qui sert à essayer un agent sans exposer vos vraies données. On passe au vrai compte une fois le comportement vérifié."
      },
      {
        "term": "Action sensible",
        "definition": "Action difficile à annuler, comme envoyer, transférer, partager ou supprimer. L’agent peut la préparer, mais il ne l’exécute pas sans votre accord."
      }
    ]
  },
  "en": {
    "id": "ag4",
    "lessonNumber": 4,
    "title": "Method 3: connect your agent to Gmail, your calendar and Drive",
    "objective": "By the end of this lesson, you will know how to plug an agent into your work tools — Gmail, Google Calendar and Google Drive — using connectors, giving it only the access it needs. You will be able to explain simply what MCP is: a universal socket between AI and your tools. You will also know how to set up your agent so that it prepares the work without sending, sharing or deleting anything without your approval, and so that it flags sensitive e-mails separately.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "A connector: the agent's access to Gmail, your calendar and Drive",
        "body": "Until now, your agents worked in their own bubble. A Claude project knows the files you gave it; a scheduled task searches the web. But neither of them can see your e-mails or your calendar. Yet many useful tasks — preparing a meeting, finding an attachment, catching up on a file — need your real data. That is the job of Method 3, the third step on the scale of five methods: plugging the agent into your tools. Choose it when the agent needs what sits in your inbox, your calendar or your documents.\n\nA connector links the assistant to one specific tool: Gmail, Google Calendar, Google Drive. Once it is plugged in, the agent can search for an e-mail, read an appointment, open a document. Think of the accountant at a firm in Lomé, Togo, who is handed the key to the invoice cabinet: he no longer guesses, he checks. Among the six parts of an agent (goal, instructions, tools, memory, trigger, guardrails), connectors are new tools. You turn them on once, in the assistant's settings, by authorising your account. After that, your conversations can use them.\n\nPlugging AI into your inbox is scary, and that is healthy caution. The point is not to open everything to it. Two rules frame this method: give the minimum access, and keep sensitive actions for yourself. With them, the agent no longer guesses: it knows, and you stay in control. Claude offers these connectors; ChatGPT and Gemini can also link to your tools, with names and menus that vary from one assistant to another."
      },
      {
        "title": "MCP: a universal socket between AI and your tools",
        "body": "Behind many connectors is MCP, short for « Model Context Protocol ». The name is technical, the idea is simple. It is a common standard: a shared rule that lets an AI and a tool understand each other, without every software maker inventing its own way of plugging in.\n\nThink of a universal socket. In an electronics shop in Cotonou, Benin, the seller does not make a special cable for every appliance: the TV, the fan and the phone charger all plug into the same wall socket. MCP plays that role. A compatible tool — messaging, calendar, files, spreadsheet, management software — plugs into the AI without custom wiring. One socket, many appliances. This standard was launched by Anthropic, the company that makes Claude; it is open, and other companies have adopted it.\n\nYou do not need to program anything, or to know how MCP works inside. Remember the picture, and one precaution: a socket carries real current. Plugging in a tool gives the AI real access to your data. Prefer connectors offered by the assistant itself or by the tool's official maker, and be wary of a connection from an unknown source, just as you would refuse a home-made extension cord."
      },
      {
        "title": "Minimum access: only what the agent needs",
        "body": "Before turning on each connector, ask one question: what does the agent really need for this task? To prepare a meeting: the calendar, the client's e-mails, the project folder. Not the accounts, not online banking, not a colleague's inbox. It is the principle of the building caretaker who is given the key to the utility room, not the key to every flat.\n\nFour habits complete this rule. If possible, start with a test account filled with fictitious data, while you see how the agent behaves. Read the authorisation screen before accepting: check the account address and the list of requested permissions. Never give a password in a conversation: authorisation goes through the tool's official page, never through the chat. And unplug what you no longer use, the way you take back the key from a contractor at the end of a job. A school head in Ouagadougou, Burkina Faso, testing an agent to prepare her staff meetings on pupils' results, can open the report-card folder to it without opening her exchanges with parents.\n\nCompare two settings for the same agent. Setting A: the whole Google account, with automatic sending. Setting B: the calendar, the client's e-mails, the project folder, and no sending. B does the same work with fewer risks. An extra permission is useless, except when something goes wrong, and then it costs a lot: an e-mail sent to the wrong person, a document shared by mistake. Minimum access is your first guardrail."
      },
      {
        "title": "The agent prepares, it sends nothing without you",
        "body": "Reading is one thing. Sending, sharing, deleting is another. A reading mistake can be caught when you reread; a sent e-mail does not come back. By default, Claude asks for your approval before sending, replying to or forwarding a message. Keep that setting, and do not click « accept » out of habit: read what the agent is about to do.\n\nDouble this protection in your instructions, using the RCTF method. In the Format block, write it in black and white: « Do not send, forward or delete any e-mail. » Add: « If an e-mail is sensitive (complaint, dispute, personal data), flag it separately without summarising it in detail. » And the honesty rule: « Do not make anything up: write “not available” if a piece of information is missing. » That way, even if a setting changes one day, your instruction keeps the same limit.\n\nThe division of roles is clear. A small-business manager in Nairobi, Kenya, lets her agent sort and summarise quote requests; she is the one who answers clients and sets prices. The agent reads, cross-checks, prepares; you decide and you speak. Also keep a habit of checking: a connected agent can misread a date or mix up two threads. Before the meeting, check every important fact in the original e-mail or document."
      }
    ],
    "example": {
      "title": "Aïssa prepares her client meeting with an agent plugged into Gmail, the calendar and Drive",
      "challenge": "Aïssa, an independent consultant in Abidjan, Côte d'Ivoire (fictional case), is meeting a client tomorrow morning. The exchanges are scattered: e-mails, an invitation in the calendar, a proposal in Drive. Last time, she arrived without rereading everything, and the client reminded her of a request she had forgotten. Her monitoring agent cannot help her here: it sees neither her e-mails nor her calendar. What is at stake: her credibility with the client.",
      "solution": "On a demo Google account, Aïssa turns on three connectors in Claude's settings: Gmail, Google Calendar and Google Drive. On Google's authorisation screen, she checks the account address and reads the requested permissions before accepting. She pastes an RCTF instruction. Role: a meeting-preparation assistant, precise and discreet. Context: a consultant in Abidjan, her three tools, confidential data. Task: prepare tomorrow's meeting with this client. Format: one page in four parts, no sending, sensitive e-mails flagged separately. Claude opens the calendar and finds tomorrow's « Monthly review » meeting at 10 a.m., searches for the client's e-mails, then opens the proposal in Drive. It returns the context in three lines, the latest exchanges, the open points — including a budget of fifteen million CFA francs still to be confirmed — and three questions to ask. An e-mail in which the client disputes an invoice is flagged separately, with no detailed summary and no reply drafted.",
      "impact": "In Gmail, the sent folder is empty: nothing has gone out. The next day, Aïssa walks into the meeting with a clear page, asks her three questions and keeps the disputed invoice for herself, to handle personally. The client sees that she knows the file. She keeps this setting for her next appointments, with only the three useful permissions."
    },
    "practice": {
      "title": "Prepare your next meeting with a connected agent",
      "instructions": [
        "List the tools the agent really needs to prepare a meeting, and only those (for example the calendar, a client's e-mails, a Drive folder). Turn on these connectors in your assistant's settings, preferably on a test account, and read the authorisation screen (account address, requested permissions) before accepting.",
        "Paste this RCTF instruction, adapted to your next real meeting: Role: you are my meeting-preparation assistant, precise and discreet. Context: I am a [your job] in [your city]. You have access to my calendar, my Gmail inbox and my Google Drive. This data is confidential. Task: find in my calendar my meeting [tomorrow] with [the client or partner]. Reread the e-mails exchanged with them over the past month and the documents in the [folder name] folder in Drive. Prepare my meeting. Format: one page in four parts: context in three lines, latest exchanges, open points, three questions to ask. Do not send, forward or delete any e-mail. If an e-mail is sensitive (complaint, dispute, personal data), flag it separately without summarising it in detail. Do not make anything up: write « not available » if a piece of information is missing.",
        "Reread the preparation and check every fact in the original e-mail or document. Then open the sent folder to make sure nothing has gone out, and unplug the connectors you will no longer use."
      ],
      "observation": "You should see that the agent returns a four-part page built from your real data, without making anything up (« not available » when information is missing), that any sensitive e-mail is flagged separately with no reply, and that the sent folder is empty. You also see that a few precise permissions were enough: the agent did not need the rest of your account."
    },
    "quiz": [
      {
        "question": "What is a connector for?",
        "options": [
          { "key": "A", "text": "To translate the AI's answers" },
          { "key": "B", "text": "To make the AI smarter" },
          { "key": "C", "text": "To give the agent access to a tool, such as Gmail or the calendar" },
          { "key": "D", "text": "To erase old e-mails" }
        ],
        "answer": "C",
        "explanation": "A connector does not change how smart the AI is: it opens a door to one specific tool. Thanks to it, the agent can search for an e-mail, read an appointment or open a document. Among the six parts of an agent, it is a new tool."
      },
      {
        "question": "Which picture sums up MCP?",
        "options": [
          { "key": "A", "text": "A universal socket between AI and your tools" },
          { "key": "B", "text": "An antivirus for your inbox" },
          { "key": "C", "text": "A password shared between several accounts" },
          { "key": "D", "text": "A new social network" }
        ],
        "answer": "A",
        "explanation": "MCP is a common standard: a compatible tool plugs into the AI without custom wiring, like several appliances on the same socket. It is not an antivirus, a password or a social network, and you do not need to program it."
      },
      {
        "question": "To prepare her client meetings, what access does Aïssa give the agent?",
        "options": [
          { "key": "A", "text": "Her whole Google account and her online bank" },
          { "key": "B", "text": "The calendar, the client's e-mails and the project folder" },
          { "key": "C", "text": "No access: the agent guesses" },
          { "key": "D", "text": "Her business partner's inbox" }
        ],
        "answer": "B",
        "explanation": "This is minimum access: only what the agent needs for the task. The whole account and online banking add risks without adding anything; with no access, the agent can only guess; a partner's inbox is none of its business."
      },
      {
        "question": "What should you never do with a connected agent?",
        "options": [
          { "key": "A", "text": "Start with a test account" },
          { "key": "B", "text": "Unplug a connector you no longer need" },
          { "key": "C", "text": "Read the requested permissions before accepting" },
          { "key": "D", "text": "Type a password into the conversation" }
        ],
        "answer": "D",
        "explanation": "A password is never given in a conversation: authorisation goes through the tool's official screen. The other three actions are, on the contrary, good minimum-access habits."
      },
      {
        "question": "The agent spots an e-mail in which the client disputes an invoice. What do Aïssa's instructions say?",
        "options": [
          { "key": "A", "text": "It replies politely to the client" },
          { "key": "B", "text": "It flags it separately, without drafting a reply" },
          { "key": "C", "text": "It deletes it from the inbox" },
          { "key": "D", "text": "It forwards it to a colleague" }
        ],
        "answer": "B",
        "explanation": "Aïssa's instruction says: do not send, forward or delete any e-mail, and flag sensitive e-mails separately without summarising them in detail. An invoice dispute is sensitive: Aïssa will handle it herself."
      }
    ],
    "reflection": "Which meeting or appointment in your coming week would benefit from being prepared by a connected agent, and which tools, precisely, would you give it access to — and which ones, above all, not?",
    "glossary": [
      {
        "term": "Connector",
        "definition": "A link that gives an agent access to one specific tool, such as Gmail, Google Calendar or Google Drive. You turn it on once by authorising your account; the agent can then search, read or open things in that tool."
      },
      {
        "term": "MCP (Model Context Protocol)",
        "definition": "A common standard that lets an AI and a compatible tool understand each other without custom wiring. The picture to remember: one universal socket, many appliances."
      },
      {
        "term": "Minimum access",
        "definition": "The rule of giving the agent only the permissions its task requires, and nothing more. It is the first guardrail of a connected agent."
      },
      {
        "term": "Authorisation screen",
        "definition": "The tool's official page (for example Google's) that shows the account concerned and the list of requested permissions before you accept. Always read it before clicking."
      },
      {
        "term": "Test account",
        "definition": "A separate account filled with fictitious data, used to try out an agent without exposing your real data. You move to your real account once the behaviour has been checked."
      },
      {
        "term": "Sensitive action",
        "definition": "An action that is hard to undo, such as sending, forwarding, sharing or deleting. The agent may prepare it, but does not carry it out without your approval."
      }
    ]
  },
  "ha": {
    "id": "ag4",
    "lessonNumber": 4,
    "title": "Hanya ta 3: hada agent dinku da Gmail, kalanda da Drive",
    "objective": "A karshen wannan darasi, za ku san yadda ake hada agent da kayan aikinku na yau da kullum — Gmail, Google Calendar (kalanda) da Google Drive — ta hanyar connecteurs, tare da ba shi izinin da yake bukata kawai. Za ku iya bayyana a saukake mene ne MCP: soket na bai daya tsakanin AI da kayan aikinku. Za ku kuma san yadda ake saita agent dinku ta yadda zai shirya aiki ba tare da aikawa, rabawa ko goge komai ba sai da izininku, kuma ya nuna e-mail masu sarkakiya a gefe.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Connecteur: hanyar da agent ke shiga Gmail, kalanda da Drive",
        "body": "Har zuwa yanzu, agents dinku suna aiki a cikin kumfarsu. Project na Claude ya san fayilolin da kuka ba shi; aikin da aka tsara yana bincike a yanar gizo. Amma babu daya daga cikinsu da ke ganin e-mail dinku ko kalandarku. Kuma ayyuka masu amfani da yawa — shirya taro, nemo fayil da aka hada da sako, duba halin da wani aiki ke ciki — suna bukatar bayananku na gaske. Wannan shi ne aikin Hanya ta 3, mataki na uku a cikin hanyoyi biyar: hada agent da kayan aikinku. Ku zabe ta lokacin da agent ke bukatar abin da ke cikin akwatin e-mail dinku, kalandarku ko takardunku.\n\nConnecteur yana hada mataimakin AI da wani kayan aiki na musamman: Gmail, Google Calendar, Google Drive. Da zarar an hada, agent na iya neman e-mail, karanta alkawari a kalanda, bude takarda. Ku yi tunanin akawu na wani ofishi a Lomé, kasar Togo, wanda aka ba shi makullin kabad din takardun biyan kudi: ba ya sake hasashe, yana dubawa. Cikin sassa shida na agent (makasudi, umarni, kayan aiki, tunawa, abin da ke tayar da shi, kariya), connecteurs sababbin kayan aiki ne. Kuna kunna su sau daya, a cikin saitunan mataimakin, ta hanyar ba da izini ga asusunku. Bayan haka, tattaunawarku na iya amfani da su.\n\nHada AI da akwatin e-mail yana ba da tsoro, kuma wannan taka-tsantsan ne mai kyau. Ba batun bude masa komai ba ne. Dokoki biyu ne ke tsara wannan hanya: ba da mafi karancin izini, da rike ayyuka masu hadari a hannunku. Da su, agent ba ya sake hasashe: ya sani, kuma ku ne ke rike da ragamar aiki. Claude yana ba da wadannan connecteurs; ChatGPT da Gemini ma suna iya hadewa da kayan aikinku, da sunaye da menu da suka bambanta daga wani mataimaki zuwa wani."
      },
      {
        "title": "MCP: soket na bai daya tsakanin AI da kayan aikinku",
        "body": "Bayan connecteurs da yawa akwai MCP, wato « Model Context Protocol » (ka’idar musayar bayani tsakanin AI da kayan aiki). Sunan na fasaha ne, amma ma’anar mai sauki ce. Ka’ida ce ta bai daya: doka guda da ke ba AI da wani kayan aiki damar fahimtar juna, ba tare da kowane kamfani ya kirkiri nasa salon hadawa ba.\n\nKu yi tunanin soket na bango. A wani shagon kayan lantarki a Cotonou, kasar Benin, mai sayarwa ba ya kera waya ta musamman ga kowace na’ura: talabijin, fanka da cajar waya duk suna shiga soket daya na bango. MCP yana taka wannan rawa. Kayan aiki da ya dace da shi — sakonni, kalanda, fayiloli, tebur na lissafi, manhajar gudanarwa — yana shiga AI ba tare da hadawa ta musamman ba. Soket daya, na’urori da yawa. Kamfanin Anthropic, wanda ke kera Claude, ne ya kaddamar da wannan ka’ida; a bude take, kuma wasu kamfanoni sun karbe ta.\n\nBa kwa bukatar rubuta wata manhaja, ko sanin yadda MCP ke aiki a ciki. Ku rike hoton kawai, da wani gargadi: soket yana dauke da wutar lantarki ta gaske. Hada kayan aiki yana nufin ba AI damar shiga bayananku na gaske. Don haka ku fifita connecteurs da mataimakin kansa ya bayar ko kamfanin kayan aikin a hukumance, kuma ku yi hattara da hadawa daga wurin da ba ku sani ba, kamar yadda za ku ki wayar karin wuta da aka hada ta kowane hali."
      },
      {
        "title": "Accès minimum: abin da agent ke bukata kawai",
        "body": "Kafin ku kunna kowane connecteur, ku yi tambaya daya: me agent ke bukata da gaske don wannan aiki? Don shirya taro: kalanda, e-mail na abokin ciniki, fayil din aikin. Ba lissafin kudi ba, ba bankin yanar gizo ba, ba akwatin e-mail na abokin aiki ba. Kamar mai gadin gini da aka ba makullin dakin kayan aiki, ba makullin kowane gida ba.\n\nDabi’u hudu ne ke cika wannan doka. Idan zai yiwu, ku fara da asusun gwaji mai cike da bayanan kirkira, har ku ga yadda agent ke aiki. Ku karanta shafin ba da izini kafin ku amince: ku duba adireshin asusun da jerin izinin da ake nema. Kada ku taba rubuta kalmar sirri a cikin tattaunawa: izini yana bi ta shafin hukuma na kayan aikin, ba ta cikin hira ba. Kuma ku cire abin da ba a amfani da shi, kamar yadda ake karbar makulli daga dan kwangila a karshen aiki. Shugabar wata makaranta a Ouagadougou, kasar Burkina Faso, da ke gwada agent don shirya taron malamai kan sakamakon dalibai, za ta iya bude masa fayil din katin sakamako ba tare da bude masa sakonninta da iyaye ba.\n\nKu kwatanta saiti biyu na agent daya. Saiti A: dukan asusun Google, tare da aikawa kai tsaye. Saiti B: kalanda, e-mail na abokin ciniki, fayil din aikin, babu aikawa. Saiti B yana yin aiki iri daya da karancin hadari. Izinin da ya wuce kima ba shi da amfani, sai idan an yi kuskure, kuma a lokacin yana da tsada: e-mail da ya tafi ga wanda bai dace ba, takarda da aka raba bisa kuskure. Mafi karancin izini shi ne kariyarku ta farko."
      },
      {
        "title": "Agent yana shiryawa, ba ya aika komai sai da ku",
        "body": "Karantawa abu daya ne. Aikawa, rabawa, gogewa wani abu ne daban. Kuskuren karantawa ana gyara shi lokacin sake dubawa; e-mail da ya tafi ba ya dawowa. A tsarin farko, Claude yana neman izininku kafin ya aika, ya amsa ko ya tura sako. Ku bar wannan saiti, kuma kada ku danna « amince » ba tare da tunani ba: ku karanta abin da agent ke shirin yi.\n\nKu kara wannan kariya a cikin umarninku, da hanyar RCTF. A bangaren Tsari (Format), ku rubuta a fili: « Kada ka aika, ka tura ko ka goge kowane e-mail. » Ku kara: « Idan e-mail yana da sarkakiya (korafi, rikici, bayanan sirri), nuna shi a gefe ba tare da takaita shi dalla-dalla ba. » Da dokar gaskiya: « Kada ka kirkiri komai: rubuta “babu shi” idan wani bayani ya rasa. » Ta haka, ko da wani saiti ya canza wata rana, umarninku zai rike iyaka iri daya.\n\nRarraba ayyuka a bayyane yake. Wata mai gudanar da karamin kamfani a Nairobi, kasar Kenya, tana barin agent dinta ya tsara kuma ya takaita bukatun farashi; ita ce ke amsa wa abokan ciniki kuma ke sanya farashi. Agent yana karantawa, yana kwatantawa, yana shiryawa; ku ne ke yanke shawara kuma ke magana. Kuma ku rike dabi’ar tantancewa: agent da aka hada na iya karanta kwanan wata ba daidai ba ko ya hade sakonni biyu. Kafin taro, ku duba kowane muhimmin bayani a cikin e-mail ko takardar asali."
      }
    ],
    "example": {
      "title": "Aïssa tana shirya taronta da abokin ciniki tare da agent da aka hada da Gmail, kalanda da Drive",
      "challenge": "Aïssa, mai ba da shawara mai zaman kanta a Abidjan, kasar Côte d’Ivoire (labari na kirkira), za ta gana da wani abokin ciniki gobe da safe. Sakonnin sun warwatsu: e-mail, gayyata a kalanda, shawarar aiki a Drive. A karo na karshe, ta isa taro ba tare da ta sake karanta komai ba, kuma abokin ciniki ya tunatar da ita wata bukata da ta manta. Agent dinta na sa ido ba zai iya taimaka mata a nan ba: ba ya ganin e-mail dinta ko kalandarta. Abin da ke cikin hadari: amincewar abokin ciniki da ita.",
      "solution": "A kan asusun Google na nunawa, Aïssa ta kunna connecteurs uku a cikin saitunan Claude: Gmail, Google Calendar da Google Drive. A shafin ba da izini na Google, ta duba adireshin asusun kuma ta karanta izinin da ake nema kafin ta amince. Ta manna umarni na RCTF. Rawa: mataimakin shirya taro, mai daidaito da rufin asiri. Mahallin: mai ba da shawara a Abidjan, kayan aikinta uku, bayanai na sirri. Aiki: shirya taron gobe da wannan abokin ciniki. Tsari: shafi daya mai sassa hudu, babu aikawa, e-mail masu sarkakiya a nuna su a gefe. Claude ya bude kalanda ya sami taron « Point mensuel » na gobe da karfe 10 na safe, ya nemi e-mail na abokin ciniki, sannan ya bude shawarar aikin a Drive. Ya dawo da mahallin a layi uku, sakonnin karshe, batutuwan da ke a bude — ciki har da kasafin kudi na FCFA miliyan goma sha biyar da ake jiran tabbatarwa — da tambayoyi uku da za a yi. Wani e-mail da abokin ciniki ke kalubalantar takardar biyan kudi an nuna shi a gefe, ba tare da takaitawa dalla-dalla ko shirya amsa ba.",
      "impact": "A cikin Gmail, fayil din sakonnin da aka aika babu komai: babu abin da ya tafi. Washegari, Aïssa ta shiga taro da shafi mai bayyana, ta yi tambayoyinta uku, kuma ta rike maganar takardar biyan kudin da aka kalubalanta don ta warware ta da kanta. Abokin ciniki ya ga ta san fayil dinsa. Ta ajiye wannan saiti don tarurrukanta na gaba, da izini uku masu amfani kawai."
    },
    "practice": {
      "title": "Ku shirya taronku na gaba da agent da aka hada",
      "instructions": [
        "Ku lissafa kayan aikin da agent ke bukata da gaske don shirya taro, wadannan kawai (misali kalanda, e-mail na wani abokin ciniki, wani fayil a Drive). Ku kunna wadannan connecteurs a cikin saitunan mataimakinku, zai fi kyau a kan asusun gwaji, kuma ku karanta shafin ba da izini (adireshin asusu, izinin da ake nema) kafin ku amince.",
        "Ku manna wannan umarni na RCTF, bayan kun daidaita shi da taronku na gaba na gaske: Rawa: kai ne mataimakina na shirya taro, mai daidaito da rufin asiri. Mahallin: ni [sana’arku] ne a [garinku]. Kana da damar shiga kalandata, akwatin Gmail dina da Google Drive dina. Wadannan bayanai na sirri ne. Aiki: nemo a kalandata taron [gobe] da [abokin ciniki ko abokin hulda]. Sake karanta e-mail da muka yi musaya da shi cikin wata daya da ya wuce da kuma takardun fayil din [sunan fayil] a Drive. Shirya min taron. Tsari: shafi daya mai sassa hudu: mahallin a layi uku, sakonnin karshe, batutuwan da ke a bude, tambayoyi uku da zan yi. Kada ka aika, ka tura ko ka goge kowane e-mail. Idan e-mail yana da sarkakiya (korafi, rikici, bayanan sirri), nuna shi a gefe ba tare da takaita shi dalla-dalla ba. Kada ka kirkiri komai: rubuta « babu shi » idan wani bayani ya rasa.",
        "Ku sake karanta shirin kuma ku tantance kowane bayani a cikin e-mail ko takardar asali. Sannan ku bude fayil din sakonnin da aka aika don tabbatar da cewa babu abin da ya tafi, kuma ku cire connecteurs da ba za ku sake amfani da su ba."
      ],
      "observation": "Ya kamata ku lura cewa agent ya dawo da shafi mai sassa hudu daga bayananku na gaske, ba tare da kirkiro komai ba (« babu shi » idan bayani ya rasa), cewa e-mail mai sarkakiya, idan akwai, an nuna shi a gefe ba tare da amsa ba, kuma fayil din sakonnin da aka aika babu komai. Za ku kuma lura cewa ’yan izini kadan madaidaita sun isa: agent bai bukaci sauran asusunku ba."
    },
    "quiz": [
      {
        "question": "Mene ne amfanin connecteur?",
        "options": [
          { "key": "A", "text": "Fassara amsoshin AI" },
          { "key": "B", "text": "Sa AI ya kara wayo" },
          { "key": "C", "text": "Ba agent damar shiga wani kayan aiki, kamar Gmail ko kalanda" },
          { "key": "D", "text": "Goge tsofaffin e-mail" }
        ],
        "answer": "C",
        "explanation": "Connecteur ba ya canza wayon AI: yana bude masa kofa zuwa wani kayan aiki na musamman. Da shi, agent na iya neman e-mail, karanta alkawari ko bude takarda. Cikin sassa shida na agent, sabon kayan aiki ne."
      },
      {
        "question": "Wane hoto ne ke takaita MCP?",
        "options": [
          { "key": "A", "text": "Soket na bai daya tsakanin AI da kayan aikinku" },
          { "key": "B", "text": "Maganin kwayar cuta (antivirus) don akwatin e-mail" },
          { "key": "C", "text": "Kalmar sirri da ake rabawa tsakanin asusu da yawa" },
          { "key": "D", "text": "Sabuwar kafar sada zumunta" }
        ],
        "answer": "A",
        "explanation": "MCP ka’ida ce ta bai daya: kayan aiki da ya dace da shi yana shiga AI ba tare da hadawa ta musamman ba, kamar na’urori da yawa a soket daya. Ba antivirus ba ne, ba kalmar sirri ba, ba kafar sada zumunta ba, kuma ba kwa bukatar rubuta masa manhaja."
      },
      {
        "question": "Don shirya tarurrukanta da abokan ciniki, wane izini Aïssa ke ba agent?",
        "options": [
          { "key": "A", "text": "Dukan asusunta na Google da bankinta na yanar gizo" },
          { "key": "B", "text": "Kalanda, e-mail na abokin ciniki da fayil din aikin" },
          { "key": "C", "text": "Babu izini: agent yana hasashe" },
          { "key": "D", "text": "Akwatin e-mail na abokin tarayyarta" }
        ],
        "answer": "B",
        "explanation": "Wannan shi ne mafi karancin izini: abin da agent ke bukata don aikin kawai. Dukan asusu da bankin yanar gizo suna kara hadari ba tare da wani amfani ba; ba tare da izini ba, agent sai dai ya yi hasashe; akwatin abokin tarayya ba ruwansa da shi."
      },
      {
        "question": "Me bai kamata a taba yi da agent da aka hada ba?",
        "options": [
          { "key": "A", "text": "Farawa da asusun gwaji" },
          { "key": "B", "text": "Cire connecteur da ba shi da amfani" },
          { "key": "C", "text": "Karanta izinin da ake nema kafin amincewa" },
          { "key": "D", "text": "Rubuta kalmar sirri a cikin tattaunawa" }
        ],
        "answer": "D",
        "explanation": "Ba a taba ba da kalmar sirri a cikin tattaunawa: izini yana bi ta shafin hukuma na kayan aikin. Sauran ayyuka ukun, akasin haka, dabi’u ne masu kyau na mafi karancin izini."
      },
      {
        "question": "Agent ya ga wani e-mail da abokin ciniki ke kalubalantar takardar biyan kudi. Me umarnin Aïssa suka tanada?",
        "options": [
          { "key": "A", "text": "Ya amsa wa abokin ciniki cikin ladabi" },
          { "key": "B", "text": "Ya nuna shi a gefe, ba tare da shirya amsa ba" },
          { "key": "C", "text": "Ya goge shi daga akwatin" },
          { "key": "D", "text": "Ya tura shi ga abokin aiki" }
        ],
        "answer": "B",
        "explanation": "Umarnin Aïssa sun ce: kada ka aika, ka tura ko ka goge kowane e-mail, kuma ka nuna e-mail masu sarkakiya a gefe ba tare da takaita su dalla-dalla ba. Kalubalantar takardar biyan kudi abu ne mai sarkakiya: Aïssa ce za ta warware shi da kanta."
      }
    ],
    "reflection": "Wane taro ko alkawari a cikin makonku mai zuwa ne zai amfana idan agent da aka hada ya shirya shi, kuma wadanne kayan aiki ne, daidai, za ku ba shi damar shiga — kuma wadanne ne ba za ku taba ba shi ba?",
    "glossary": [
      {
        "term": "Connecteur (mahadi)",
        "definition": "Hanyar da ke ba agent damar shiga wani kayan aiki na musamman, kamar Gmail, Google Calendar ko Google Drive. Ana kunna shi sau daya ta hanyar ba da izini ga asusu; sannan agent na iya nema, karantawa ko budewa a cikin wannan kayan aiki."
      },
      {
        "term": "MCP (Model Context Protocol)",
        "definition": "Ka’ida ta bai daya da ke ba AI da kayan aiki da ya dace da ita damar fahimtar juna ba tare da hadawa ta musamman ba. Hoton da za a rike: soket daya na bai daya, na’urori da yawa."
      },
      {
        "term": "Accès minimum (mafi karancin izini)",
        "definition": "Dokar ba agent izinin da aikinsa ke bukata kawai, ba fiye da haka ba. Ita ce kariya ta farko ga agent da aka hada."
      },
      {
        "term": "Écran d’autorisation (shafin ba da izini)",
        "definition": "Shafin hukuma na kayan aikin (misali na Google) da ke nuna asusun da abin ya shafa da jerin izinin da ake nema kafin ku amince. A koyaushe ana karanta shi kafin a danna."
      },
      {
        "term": "Compte de test (asusun gwaji)",
        "definition": "Asusu daban, mai cike da bayanan kirkira, da ake amfani da shi don gwada agent ba tare da fallasa bayananku na gaske ba. Ana komawa ga asusun gaske bayan an tabbatar da yadda agent ke aiki."
      },
      {
        "term": "Action sensible (aiki mai hadari)",
        "definition": "Aikin da ke da wuyar sokewa, kamar aikawa, turawa, rabawa ko gogewa. Agent na iya shirya shi, amma ba ya aiwatar da shi sai da izininku."
      }
    ]
  }
};
