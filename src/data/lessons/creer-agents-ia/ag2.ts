import { Language } from '../../translations';
import { LessonContent } from '../../lessonContent';

// Module « Comment créer des agents IA » (creer-agents-ia) — leçon ag2 (Méthode 1 : projet Claude, GPT ou Gem)
// Texte aligné sur le CLAUDE.md de production vidéo du cours 2 (docs/production-video/claude-md/).
// Trilingue FR / EN / HA. ⚠️ Traductions HA à faire valider par un locuteur natif haoussa.
export const agLesson2: Record<Language, LessonContent> = {
  "fr": {
    "id": "ag2",
    "lessonNumber": 2,
    "title": "Méthode 1 : créer un agent avec un projet Claude, un GPT ou un Gem",
    "objective": "À la fin de cette leçon, vous saurez créer un agent à la demande, avec des instructions et des fichiers posés une fois pour toutes. Vous saurez rédiger ses instructions permanentes avec la méthode RCTF, y joindre vos documents de référence et des garde-fous comme « n’invente rien, cite tes sources ». Vous saurez distinguer un projet d’une skill et retrouver le même principe dans ChatGPT et dans Gemini. Enfin, vous connaîtrez la limite de cette méthode : l’agent n’agit que quand vous lui parlez.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Un projet Claude : des instructions et des fichiers posés une fois pour toutes",
        "body": "Beaucoup pensent qu’il faut un logiciel spécial pour créer un agent. Pour la Méthode 1, la plus simple des cinq, ce n’est pas le cas : pas de code, pas de nouvel outil. L’assistant que vous utilisez déjà suffit. Il lui manque seulement deux choses : des instructions permanentes et vos documents de référence. C’est comme un stagiaire à qui l’on remet, dès le premier jour, sa fiche de poste et le classeur des procédures : vous n’avez plus à tout lui réexpliquer chaque matin.\n\nDans Claude, un projet est un espace de travail qui garde ces deux choses. Chaque nouvelle conversation ouverte dans le projet part de cette base. Parmi les six pièces d’un agent vues en Leçon 1, le projet fournit les instructions et la mémoire, c’est-à-dire les documents que l’agent consulte. La règle : un projet par usage. Une enseignante de Cotonou, au Bénin, aura par exemple un projet « préparation de cours » avec le programme officiel, et un autre « messages aux parents » avec le règlement de l’école. Mélanger les deux brouillerait les consignes.\n\nLe même principe existe ailleurs. Dans ChatGPT, c’est un GPT personnalisé : des instructions et des fichiers, réglés dans l’onglet de configuration. Dans Gemini, c’est un Gem, que Google fait évoluer vers des skills. Les noms changent, les pièces restent les mêmes : un texte d’instructions et quelques fichiers. Vous pouvez donc recoller le même texte d’un assistant à l’autre."
      },
      {
        "title": "Écrire les instructions de l’agent avec la méthode RCTF",
        "body": "Les instructions d’un projet sont une consigne permanente : l’agent les applique avant chaque réponse. Écrivez-les avec la méthode RCTF. Le Rôle dit qui est l’agent, par exemple « tu es mon agent de veille et d’apprentissage, rigoureux et pédagogue ». Le Contexte décrit votre métier, votre ville, vos clients, une fois pour toutes. La Tâche dit ce que l’agent fait quand vous lui parlez. Le Format fixe la forme de chaque réponse.\n\nLe bloc Format est celui qui rend les réponses régulières d’un dossier à l’autre : cinq points courts, puis « À retenir », puis « Action à tester », puis les sources avec leurs liens. Un comptable de Ouagadougou, au Burkina Faso, qui écrit « un tableau à trois colonnes : poste, montant en FCFA, remarque » reçoit toujours le même tableau, prêt à coller dans son rapport mensuel. Sans ce bloc, chaque réponse prend une forme différente, et vous passez du temps à la remettre en ordre.\n\nAjoutez ensuite vos garde-fous : « n’invente rien, cite tes sources, écris “non disponible” si une information manque ». Un assistant peut affirmer une chose fausse avec assurance. Ces règles ne suppriment pas ce risque, mais elles vous donnent de quoi vérifier : vous ouvrez un lien et vous retrouvez l’information. Dernier réflexe : quand une réponse est mauvaise, corrigez les instructions, pas seulement la réponse, sinon le même défaut reviendra à la conversation suivante. Et gardez une copie de vos instructions dans un document à part."
      },
      {
        "title": "Une skill : le mode d’emploi d’une tâche précise",
        "body": "Une skill, en français une compétence, est un mode d’emploi pour une tâche précise. L’assistant l’applique quand cette tâche se présente. Par exemple : « rédiger une note de synthèse selon ma méthode », avec les étapes, l’ordre des parties, la longueur et le ton. Là où les instructions du projet décrivent l’agent en général, la skill décrit une procédure, pas à pas.\n\nRetenez la formule : le projet donne le cadre, la skill donne la procédure. Pensez à un atelier de couture. Le cadre, c’est l’atelier lui-même, ses clientes, ses tissus. La procédure, c’est la fiche « prendre les mesures d’une robe », que chaque apprenti suit de la même façon. Une juriste de Lomé, au Togo, peut ainsi avoir une skill « analyser un contrat de bail » : vérifier la durée, le loyer, le préavis et le dépôt de garantie, puis signaler les clauses inhabituelles.\n\nSoyons honnêtes : la disponibilité et l’emplacement des skills varient selon l’assistant et selon l’interface, qui évoluent souvent. Si vous ne trouvez pas les skills, écrivez votre procédure dans un fichier du projet, comme Aïssa avec sa méthode de note de synthèse : c’est moins automatique, mais le résultat est proche. Commencez par le projet, et ajoutez une skill quand une tâche précise revient souvent."
      },
      {
        "title": "Méthode 1 : l’agent agit quand vous lui parlez, et seulement dans son projet",
        "body": "Le déclencheur de cet agent, c’est vous. Il attend votre demande. Il ne travaille pas pendant votre sommeil : pour cela, il faudra la Méthode 2. Il ne touche pas non plus à vos e-mails, à votre agenda ni à vos documents en ligne : ce sera la Méthode 3. Pour apprendre, rédiger ou analyser, c’est pourtant souvent tout ce qu’il faut. Un commercial de Nairobi, au Kenya, qui prépare ses offres, ou un étudiant de Conakry, en Guinée, qui révise ses examens, n’a pas besoin de plus.\n\nFaites une prédiction. Aïssa ouvre une conversation hors de son projet et tape le même sujet. La réponse redevient générique : pas de profil, pas de méthode, pas de format fixe, peut-être même sans sources. L’agent ne vit pas dans l’assistant : il vit dans le projet. Le bon réflexe est donc d’ouvrir le projet avant de taper sa demande.\n\nDeux précautions. D’abord, ne mettez dans les fichiers aucune donnée personnelle ni confidentielle : pas de contrat client, pas de numéro de téléphone, pas de liste de bénéficiaires. Utilisez des documents fictifs ou anonymisés. Ensuite, le contenu d’une veille change d’un jour à l’autre : vérifiez toujours les sources avant de vous en servir. Et si vous oubliez de lancer votre agent, ou s’il doit lire vos e-mails, c’est le signe qu’il est temps de passer aux méthodes suivantes."
      }
    ],
    "example": {
      "title": "Aïssa, consultante à Abidjan : un agent de veille qui garde ses consignes",
      "challenge": "Aïssa est consultante indépendante à Abidjan, en Côte d’Ivoire (cas fictif). Chaque nouveau dossier client l’oblige à apprendre vite un sujet. Mais à chaque conversation avec l’IA, elle réexplique son métier, ses clients et sa façon de travailler, et ses meilleures consignes se perdent quelque part dans l’historique. Résultat : du temps perdu et des réponses inégales d’un dossier à l’autre. Ce lundi à 9 h, elle ouvre un nouveau dossier : le recyclage du plastique au Togo.",
      "solution": "Elle crée dans Claude un projet « Agent de veille et d’apprentissage » et colle dans ses instructions une consigne RCTF : « Rôle : tu es mon agent de veille et d’apprentissage, rigoureux et pédagogue. Contexte : je suis consultante indépendante à Abidjan ; je dois apprendre vite à chaque nouveau dossier client ; les fichiers du projet décrivent mon profil et ma méthode de travail. Tâche : quand je te donne un sujet, cherche les ressources les plus utiles et les plus récentes, puis résume-les pour moi. Format : un résumé en cinq points courts ; puis « À retenir » en deux lignes ; puis « Action à tester » en une ligne ; puis la liste des sources avec leurs liens. En français, phrases courtes. N’invente rien : cite tes sources, et écris « non disponible » si une information manque. » Elle ajoute deux fichiers : son profil (domaines, clients types, style, sans aucun client réel) et sa méthode de note de synthèse. La recherche web activée, elle ouvre une conversation dans le projet et tape une seule ligne : « Sujet : le recyclage du plastique au Togo. »",
      "impact": "La réponse arrive dans le format fixé : cinq points, ce qu’il faut retenir, une action à tester dans la semaine et les sources avec leurs liens. Aïssa ouvre un lien et retrouve l’information citée. Pour son dossier suivant, elle ouvre son projet et tape une ligne : elle ne réexplique plus rien et ses consignes ne se perdent plus. Elle garde aussi une copie de ses instructions dans un document à part, pour pouvoir les recoller si elle change d’assistant."
    },
    "practice": {
      "title": "Créez votre agent dans un projet, un GPT ou un Gem",
      "instructions": [
        "Reprenez la fiche de votre agent obtenue en Leçon 1 avec l’architecte d’agents, ou partez de cette consigne à adapter : Rôle : tu es mon agent de veille et d’apprentissage, rigoureux et pédagogue. Contexte : je suis [votre métier] à [votre ville]. [Pourquoi vous devez apprendre vite : nouveaux dossiers, nouveaux clients, nouveau poste.] Les fichiers du projet décrivent mon profil et ma méthode de travail. Tâche : quand je te donne un sujet, cherche les ressources les plus utiles et les plus récentes, puis résume-les pour moi. Format : un résumé en cinq points courts ; puis « À retenir » en deux lignes ; puis « Action à tester » en une ligne ; puis la liste des sources avec leurs liens. En français, phrases courtes. N’invente rien : cite tes sources, et écris « non disponible » si une information manque.",
        "Créez un projet dans Claude, un GPT personnalisé dans ChatGPT ou un Gem (ou une skill) dans Gemini, et collez-y vos instructions au format RCTF. Ajoutez un ou deux fichiers utiles, par exemple votre profil ou votre méthode de travail, sans aucune donnée personnelle ni confidentielle.",
        "Faites trois demandes réelles à votre agent. À chaque défaut, corrigez les instructions, pas seulement la réponse, puis refaites la demande. Gardez enfin une copie de vos instructions dans un document à part."
      ],
      "observation": "Vous devez constater que chaque nouvelle conversation dans votre agent part de vos instructions et de vos fichiers : vous ne réexpliquez plus votre contexte, et les réponses gardent le même format d’une demande à l’autre. Si vous posez la même demande hors de l’agent, la réponse redevient générique. Vous remarquerez aussi qu’une correction faite dans les instructions règle le défaut pour toutes les demandes suivantes."
    },
    "quiz": [
      {
        "question": "Dans un projet Claude, de quoi part chaque nouvelle conversation ?",
        "options": [
          { "key": "A", "text": "De rien : il faut tout réexpliquer" },
          { "key": "B", "text": "Des instructions et des fichiers du projet" },
          { "key": "C", "text": "Des conversations des autres utilisateurs" },
          { "key": "D", "text": "D’un modèle de réponse imposé par Claude" }
        ],
        "answer": "B",
        "explanation": "C’est tout l’intérêt d’un projet : il garde des instructions et des fichiers, et chaque nouvelle conversation ouverte dans le projet part de cette base. Vous n’avez plus à réexpliquer votre contexte. Le projet ne contient ni les conversations d’autres personnes ni un modèle imposé : c’est vous qui écrivez ses instructions."
      },
      {
        "question": "Dans les instructions de l’agent d’Aïssa, quelle phrase appartient au bloc Format ?",
        "options": [
          { "key": "A", "text": "« Tu es mon agent de veille et d’apprentissage »" },
          { "key": "B", "text": "« Je suis consultante indépendante à Abidjan »" },
          { "key": "C", "text": "« Cinq points courts, puis les sources avec leurs liens »" },
          { "key": "D", "text": "« Quand je te donne un sujet, cherche les ressources »" }
        ],
        "answer": "C",
        "explanation": "Le bloc Format fixe la forme de chaque réponse : cinq points, puis les sources avec leurs liens. « Tu es mon agent… » relève du Rôle, « Je suis consultante… » du Contexte, et « Quand je te donne un sujet… » de la Tâche. Repérer chaque bloc vous aide à savoir où corriger quand une réponse ne convient pas."
      },
      {
        "question": "Qu’est-ce qu’une skill ?",
        "options": [
          { "key": "A", "text": "Un mode d’emploi pour une tâche précise, que l’assistant applique quand elle se présente" },
          { "key": "B", "text": "Un accès à votre boîte e-mail" },
          { "key": "C", "text": "Une conversation archivée" },
          { "key": "D", "text": "Un réglage de la taille du texte" }
        ],
        "answer": "A",
        "explanation": "Une skill est une procédure réutilisable, par exemple « rédiger une note de synthèse selon ma méthode ». Le projet donne le cadre, la skill donne la procédure. L’accès à vos e-mails relève des connecteurs, que vous verrez avec la Méthode 3."
      },
      {
        "question": "Aïssa ouvre une conversation hors de son projet et tape le même sujet. Que se passe-t-il ?",
        "options": [
          { "key": "A", "text": "Exactement la même réponse que dans le projet" },
          { "key": "B", "text": "L’assistant refuse de répondre" },
          { "key": "C", "text": "Le projet est supprimé" },
          { "key": "D", "text": "Une réponse générique, sans son profil ni son format" }
        ],
        "answer": "D",
        "explanation": "Hors du projet, l’assistant n’a plus les instructions ni les fichiers d’Aïssa : la réponse redevient générique, sans profil, sans méthode, sans format fixe, et parfois sans sources. L’agent ne vit pas dans l’assistant, il vit dans le projet. Rien n’est supprimé pour autant : il suffit de revenir dans le projet."
      },
      {
        "question": "Avec la Méthode 1, quel est le déclencheur de l’agent ?",
        "options": [
          { "key": "A", "text": "Une heure fixe, chaque matin" },
          { "key": "B", "text": "Un e-mail qui arrive" },
          { "key": "C", "text": "Vous, quand vous lui parlez" },
          { "key": "D", "text": "Un formulaire rempli par un client" }
        ],
        "answer": "C",
        "explanation": "Avec la Méthode 1, l’agent attend votre demande : c’est vous qui le mettez en marche. Une heure fixe correspond à la Méthode 2, et un événement comme un e-mail ou un formulaire qui arrive relève des méthodes suivantes. Pour apprendre, rédiger ou analyser, un agent à la demande suffit souvent."
      }
    ],
    "reflection": "Quel contexte ou quel type de dossier réexpliquez-vous le plus souvent à un assistant IA, et quelles instructions et quels fichiers mettriez-vous dans un projet pour ne plus avoir à le faire ?",
    "glossary": [
      { "term": "Projet", "definition": "Espace de travail d’un assistant, par exemple Claude, qui garde des instructions et des fichiers. Chaque nouvelle conversation ouverte dans le projet part de cette base." },
      { "term": "Instructions permanentes", "definition": "Consigne écrite une fois pour toutes, que l’agent applique à chaque réponse. On la rédige avec la méthode RCTF (rôle, contexte, tâche, format), plus des garde-fous comme « n’invente rien, cite tes sources »." },
      { "term": "Fichiers de référence", "definition": "Documents ajoutés au projet (profil, méthode de travail, procédure) que l’agent consulte. Parmi les six pièces d’un agent, ils forment sa mémoire." },
      { "term": "Skill", "definition": "Mode d’emploi d’une tâche précise, que l’assistant applique quand cette tâche se présente. Le projet donne le cadre, la skill donne la procédure." },
      { "term": "GPT personnalisé et Gem", "definition": "Équivalents du projet Claude dans ChatGPT et dans Gemini : des instructions et des fichiers réunis dans un agent réutilisable. Google fait évoluer les Gems vers des skills." },
      { "term": "Déclencheur", "definition": "Ce qui met l’agent en marche. Avec la Méthode 1, c’est vous : l’agent agit seulement quand vous lui parlez." }
    ]
  },
  "en": {
    "id": "ag2",
    "lessonNumber": 2,
    "title": "Method 1: create an agent with a Claude project, a GPT or a Gem",
    "objective": "By the end of this lesson, you will know how to create an on-demand agent, with instructions and files set up once and for all. You will know how to write its standing instructions with the RCTF method, attach your reference documents and add safeguards such as “don’t make anything up, cite your sources”. You will be able to tell a project from a skill and recognise the same principle in ChatGPT and in Gemini. Finally, you will know the limit of this method: the agent only acts when you talk to it.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "A Claude project: instructions and files set up once and for all",
        "body": "Many people think you need special software to create an agent. For Method 1, the simplest of the five, you don’t: no code, no new tool. The assistant you already use is enough. It is only missing two things: standing instructions and your reference documents. It is like giving a new intern, on day one, their job description and the binder of procedures: you no longer have to explain everything again every morning.\n\nIn Claude, a project is a workspace that keeps those two things. Every new conversation opened inside the project starts from that base. Among the six parts of an agent seen in Lesson 1, the project provides the instructions and the memory, meaning the documents the agent consults. The rule: one project per use. A teacher in Cotonou, Benin, might have one project for “lesson preparation” with the official curriculum, and another for “messages to parents” with the school rules. Mixing the two would blur the instructions.\n\nThe same principle exists elsewhere. In ChatGPT, it is a custom GPT: instructions and files, set in the configuration tab. In Gemini, it is a Gem, which Google is evolving into skills. The names change, the parts stay the same: a text of instructions and a few files. So you can paste the same text from one assistant to another."
      },
      {
        "title": "Writing the agent’s instructions with the RCTF method",
        "body": "A project’s instructions are a standing prompt: the agent applies them before every answer. Write them with the RCTF method. The Role says who the agent is, for example “you are my monitoring and learning agent, rigorous and good at explaining”. The Context describes your job, your city, your clients, once and for all. The Task says what the agent does when you talk to it. The Format sets the shape of every answer.\n\nThe Format block is what makes answers consistent from one file to the next: five short points, then “Key takeaway”, then “Action to try”, then the sources with their links. An accountant in Ouagadougou, Burkina Faso, who writes “a three-column table: item, amount in CFA francs, remark” always gets the same table, ready to paste into a monthly report. Without this block, every answer takes a different shape, and you spend time putting it back in order.\n\nThen add your safeguards: “don’t make anything up, cite your sources, write ‘not available’ if a piece of information is missing”. An assistant can state something false with confidence. These rules don’t remove that risk, but they give you a way to check: you open a link and find the information. One last habit: when an answer is bad, fix the instructions, not just the answer, otherwise the same flaw will come back in the next conversation. And keep a copy of your instructions in a separate document."
      },
      {
        "title": "A skill: the user manual for one specific task",
        "body": "A skill is a user manual for one specific task. The assistant applies it when that task comes up. For example: “write a briefing note following my method”, with the steps, the order of the sections, the length and the tone. Where the project’s instructions describe the agent in general, the skill describes a procedure, step by step.\n\nRemember the formula: the project gives the framework, the skill gives the procedure. Think of a tailoring workshop. The framework is the workshop itself, its customers, its fabrics. The procedure is the sheet “taking measurements for a dress”, which every apprentice follows the same way. A lawyer in Lomé, Togo, could have a skill “review a lease agreement”: check the duration, the rent, the notice period and the deposit, then flag any unusual clauses.\n\nTo be honest: whether skills are available, and where to find them, varies by assistant and by interface, and both change often. If you cannot find skills, write your procedure in a project file, as Aïssa does with her briefing-note method: it is less automatic, but the result is close. Start with the project, and add a skill when a specific task keeps coming back."
      },
      {
        "title": "Method 1: the agent acts when you talk to it, and only inside its project",
        "body": "The trigger for this agent is you. It waits for your request. It does not work while you sleep: for that, you will need Method 2. Nor does it touch your emails, your calendar or your online documents: that will be Method 3. Yet for learning, writing or analysing, it is often all you need. A sales rep in Nairobi, Kenya, preparing offers, or a student in Conakry, Guinea, revising for exams, does not need more.\n\nMake a prediction. Aïssa opens a conversation outside her project and types the same topic. The answer becomes generic again: no profile, no method, no fixed format, maybe not even sources. The agent does not live in the assistant: it lives in the project. So the right habit is to open the project before typing your request.\n\nTwo precautions. First, put no personal or confidential data in the files: no client contract, no phone number, no list of beneficiaries. Use fictional or anonymised documents. Second, monitoring content changes from one day to the next: always check the sources before using them. And if you forget to run your agent, or if it needs to read your emails, that is a sign it is time to move on to the next methods."
      }
    ],
    "example": {
      "title": "Aïssa, consultant in Abidjan: a monitoring agent that keeps her instructions",
      "challenge": "Aïssa is an independent consultant in Abidjan, Côte d’Ivoire (fictional case). Every new client file forces her to learn a topic quickly. But in every conversation with the AI, she explains her job, her clients and her way of working all over again, and her best prompts get lost somewhere in the history. The result: wasted time and uneven answers from one file to the next. This Monday at 9 a.m., she opens a new file: plastic recycling in Togo.",
      "solution": "She creates a Claude project called “Monitoring and learning agent” and pastes an RCTF prompt into its instructions: “Role: you are my monitoring and learning agent, rigorous and good at explaining. Context: I am an independent consultant in Abidjan; I must learn fast for every new client file; the project files describe my profile and my working method. Task: when I give you a topic, find the most useful and most recent resources, then summarise them for me. Format: a summary in five short points; then ‘Key takeaway’ in two lines; then ‘Action to try’ in one line; then the list of sources with their links. In French, short sentences. Don’t make anything up: cite your sources, and write ‘not available’ if a piece of information is missing.” She adds two files: her profile (fields, typical clients, style, with no real client) and her briefing-note method. With web search turned on, she opens a conversation in the project and types a single line: “Topic: plastic recycling in Togo.”",
      "impact": "The answer comes back in the set format: five points, the key takeaway, one action to try this week and the sources with their links. Aïssa opens a link and finds the information cited. For her next file, she opens her project and types one line: she no longer explains anything again and her instructions no longer get lost. She also keeps a copy of her instructions in a separate document, so she can paste them again if she switches assistant."
    },
    "practice": {
      "title": "Create your agent in a project, a GPT or a Gem",
      "instructions": [
        "Take the agent sheet you got in Lesson 1 with the agent architect, or start from this prompt and adapt it: Role: you are my monitoring and learning agent, rigorous and good at explaining. Context: I am [your job] in [your city]. [Why you need to learn fast: new files, new clients, new position.] The project files describe my profile and my working method. Task: when I give you a topic, find the most useful and most recent resources, then summarise them for me. Format: a summary in five short points; then “Key takeaway” in two lines; then “Action to try” in one line; then the list of sources with their links. In English, short sentences. Don’t make anything up: cite your sources, and write “not available” if a piece of information is missing.",
        "Create a project in Claude, a custom GPT in ChatGPT or a Gem (or a skill) in Gemini, and paste your instructions in RCTF format. Add one or two useful files, for example your profile or your working method, with no personal or confidential data.",
        "Make three real requests to your agent. Each time something is wrong, fix the instructions, not just the answer, then make the request again. Finally, keep a copy of your instructions in a separate document."
      ],
      "observation": "You should see that every new conversation in your agent starts from your instructions and your files: you no longer explain your context again, and answers keep the same format from one request to the next. If you make the same request outside the agent, the answer becomes generic again. You will also notice that a fix made in the instructions solves the flaw for all the following requests."
    },
    "quiz": [
      {
        "question": "In a Claude project, what does every new conversation start from?",
        "options": [
          { "key": "A", "text": "From nothing: you have to explain everything again" },
          { "key": "B", "text": "From the project’s instructions and files" },
          { "key": "C", "text": "From other users’ conversations" },
          { "key": "D", "text": "From an answer template imposed by Claude" }
        ],
        "answer": "B",
        "explanation": "That is the whole point of a project: it keeps instructions and files, and every new conversation opened in the project starts from that base. You no longer need to explain your context again. The project contains neither other people’s conversations nor an imposed template: you are the one who writes its instructions."
      },
      {
        "question": "In the instructions of Aïssa’s agent, which sentence belongs to the Format block?",
        "options": [
          { "key": "A", "text": "“You are my monitoring and learning agent”" },
          { "key": "B", "text": "“I am an independent consultant in Abidjan”" },
          { "key": "C", "text": "“Five short points, then the sources with their links”" },
          { "key": "D", "text": "“When I give you a topic, find the resources”" }
        ],
        "answer": "C",
        "explanation": "The Format block sets the shape of every answer: five points, then the sources with their links. “You are my agent…” belongs to the Role, “I am a consultant…” to the Context, and “When I give you a topic…” to the Task. Spotting each block helps you know where to fix things when an answer is not right."
      },
      {
        "question": "What is a skill?",
        "options": [
          { "key": "A", "text": "A user manual for a specific task, which the assistant applies when that task comes up" },
          { "key": "B", "text": "Access to your email inbox" },
          { "key": "C", "text": "An archived conversation" },
          { "key": "D", "text": "A setting for text size" }
        ],
        "answer": "A",
        "explanation": "A skill is a reusable procedure, for example “write a briefing note following my method”. The project gives the framework, the skill gives the procedure. Access to your emails comes from connectors, which you will see with Method 3."
      },
      {
        "question": "Aïssa opens a conversation outside her project and types the same topic. What happens?",
        "options": [
          { "key": "A", "text": "Exactly the same answer as in the project" },
          { "key": "B", "text": "The assistant refuses to answer" },
          { "key": "C", "text": "The project is deleted" },
          { "key": "D", "text": "A generic answer, without her profile or her format" }
        ],
        "answer": "D",
        "explanation": "Outside the project, the assistant no longer has Aïssa’s instructions or files: the answer becomes generic again, with no profile, no method, no fixed format, and sometimes no sources. The agent does not live in the assistant, it lives in the project. Nothing is deleted, though: she only needs to go back into the project."
      },
      {
        "question": "With Method 1, what is the agent’s trigger?",
        "options": [
          { "key": "A", "text": "A fixed time, every morning" },
          { "key": "B", "text": "An incoming email" },
          { "key": "C", "text": "You, when you talk to it" },
          { "key": "D", "text": "A form filled in by a client" }
        ],
        "answer": "C",
        "explanation": "With Method 1, the agent waits for your request: you are the one who sets it in motion. A fixed time corresponds to Method 2, and an event such as an incoming email or form belongs to the later methods. For learning, writing or analysing, an on-demand agent is often enough."
      }
    ],
    "reflection": "What context or type of file do you most often explain again to an AI assistant, and which instructions and files would you put in a project so that you never have to do it again?",
    "glossary": [
      { "term": "Project", "definition": "A workspace in an assistant, such as Claude, that keeps instructions and files. Every new conversation opened in the project starts from that base." },
      { "term": "Standing instructions", "definition": "A prompt written once and for all, which the agent applies to every answer. It is written with the RCTF method (role, context, task, format), plus safeguards such as “don’t make anything up, cite your sources”." },
      { "term": "Reference files", "definition": "Documents added to the project (profile, working method, procedure) that the agent consults. Among the six parts of an agent, they form its memory." },
      { "term": "Skill", "definition": "A user manual for one specific task, which the assistant applies when that task comes up. The project gives the framework, the skill gives the procedure." },
      { "term": "Custom GPT and Gem", "definition": "The equivalents of a Claude project in ChatGPT and in Gemini: instructions and files gathered into a reusable agent. Google is evolving Gems into skills." },
      { "term": "Trigger", "definition": "What sets the agent in motion. With Method 1, it is you: the agent only acts when you talk to it." }
    ]
  },
  "ha": {
    "id": "ag2",
    "lessonNumber": 2,
    "title": "Hanya ta 1: kirkirar wakilin AI da project na Claude, GPT ko Gem",
    "objective": "A karshen wannan darasi, za ku san yadda ake kirkirar wakilin AI da ke aiki idan kun kira shi, tare da umarnai da fayiloli da aka ajiye sau daya tak. Za ku iya rubuta umarnansa na dindindin da hanyar RCTF, ku hada da takardunku na tunani, da kuma matakan kariya kamar « kada ka kirkiri komai, ambaci majiyoyinka ». Za ku san bambancin project da skill, kuma ku gane wannan ka’ida a ChatGPT da Gemini. A karshe, za ku san iyakar wannan hanya: wakilin yana aiki ne kawai idan kun yi masa magana.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Project na Claude: umarnai da fayiloli da aka ajiye sau daya tak",
        "body": "Mutane da yawa suna tunanin sai da wata manhaja ta musamman ake kirkirar wakili. A Hanya ta 1, mafi sauki cikin hanyoyi biyar, ba haka ba ne: babu lamba (code), babu sabon kayan aiki. Mataimakin AI da kuke amfani da shi yanzu ya isa. Abubuwa biyu ne kawai suka rage masa: umarnai na dindindin da takardunku na tunani. Kamar sabon dalibin koyon aiki ne da aka ba shi, tun ranar farko, takardar aikinsa da kundin hanyoyin aiki: ba sai kun sake bayyana masa komai kowace safiya ba.\n\nA Claude, project wurin aiki ne da ke ajiye wadannan abubuwa biyu. Duk sabuwar tattaunawa da aka bude a cikin project tana farawa daga wannan tushe. Cikin sassa shida na wakili da muka gani a Darasi 1, project yana ba da umarnai da kuma ajiyar bayanai, wato takardun da wakilin yake dubawa. Ka’idar ita ce: project daya don kowane amfani. Malama a Cotonou, a Benin, za ta iya samun project daya na « shirya darasi » tare da tsarin karatu na hukuma, da wani na « sakonni ga iyaye » tare da dokokin makaranta. Hada su biyu zai rikita umarnan.\n\nWannan ka’ida tana nan a wasu wurare. A ChatGPT, ana kiranta GPT na musamman (custom GPT): umarnai da fayiloli, a shafin saiti (configuration). A Gemini, ana kiranta Gem, wanda Google ke canza shi zuwa skills. Sunaye suna canzawa, amma sassan iri daya ne: rubutun umarnai da wasu fayiloli. Don haka za ku iya manna rubutu daya daga wani mataimaki zuwa wani."
      },
      {
        "title": "Rubuta umarnan wakili da hanyar RCTF",
        "body": "Umarnan project umarni ne na dindindin: wakilin yana bin su kafin kowace amsa. Ku rubuta su da hanyar RCTF (Rawa, Mahallin, Aiki, Tsari). Rawa tana fadin ko wane ne wakilin, misali « kai ne wakilina na sa ido da koyo, mai tsanaki kuma mai bayyanawa da kyau ». Mahallin yana bayyana sana’arku, garinku, abokan cinikinku, sau daya tak. Aiki yana fadin abin da wakilin zai yi idan kun yi masa magana. Tsari yana kayyade siffar kowace amsa.\n\nBangaren Tsari shi ne ke sa amsoshi su zama daidai daga wani fayil zuwa wani: batutuwa biyar gajeru, sannan « Abin tunawa », sannan « Mataki na gwadawa », sannan majiyoyi tare da hanyoyin sadarwarsu (links). Akanta a Ouagadougou, a Burkina Faso, wanda ya rubuta « tebur mai ginshikai uku: abu, adadin kudi a FCFA, lura » kullum yana samun tebur iri daya, a shirye don ya manna shi a rahotonsa na wata. Ba tare da wannan bangare ba, kowace amsa tana daukar siffa daban, kuma kuna bata lokaci wajen sake tsara ta.\n\nSannan ku kara matakan kariya: « kada ka kirkiri komai, ambaci majiyoyinka, rubuta “babu shi” idan wani bayani ya rasa ». Mataimakin AI zai iya fadin abin da ba gaskiya ba cikin kwarin gwiwa. Wadannan dokoki ba sa kawar da wannan hadari, amma suna ba ku hanyar dubawa: kuna bude link, kuna samun bayanin. Dabi’a ta karshe: idan amsa ba ta yi kyau ba, ku gyara umarnan, ba amsar kadai ba, in ba haka ba kuskuren zai dawo a tattaunawa ta gaba. Kuma ku ajiye kwafin umarnanku a wata takarda daban."
      },
      {
        "title": "Skill: littafin bayanin yadda ake yin wani aiki na musamman",
        "body": "Skill (wato gwaninta) littafin bayanin yadda ake yin wani aiki na musamman ne. Mataimakin yana amfani da shi idan wannan aiki ya taso. Misali: « rubuta takaitaccen rahoto bisa ga hanyata », tare da matakai, jerin sassa, tsawo da salo. Inda umarnan project ke bayyana wakilin gaba daya, skill tana bayyana hanyar aiki, mataki-mataki.\n\nKu tuna wannan dabara: project yana ba da tsarin aiki, skill tana ba da hanyar yin aikin. Ku yi tunanin bitar dinki. Tsarin aikin shi ne bitar kanta, abokan cinikinta, yadudduka. Hanyar aikin ita ce takardar « auna riga », wadda kowane dalibin koyo yake bi iri daya. Haka lauya a Lomé, a Togo, za ta iya samun skill « nazarin yarjejeniyar haya »: duba tsawon lokaci, kudin haya, sanarwar barin gida da kudin jingina, sannan ta nuna sharuddan da ba a saba gani ba.\n\nBari mu fadi gaskiya: samuwar skills da inda ake samunsu sun bambanta bisa ga mataimaki da kuma fuskar manhaja, kuma suna canzawa sau da yawa. Idan ba ku sami skills ba, ku rubuta hanyar aikinku a cikin fayil na project, kamar yadda Aïssa ta yi da hanyarta ta takaitaccen rahoto: ba ta da sauki kamar skill, amma sakamakon yana kusa. Ku fara da project, kuma ku kara skill idan wani aiki na musamman yana yawan dawowa."
      },
      {
        "title": "Hanya ta 1: wakilin yana aiki idan kun yi masa magana, kuma a cikin project dinsa kawai",
        "body": "Abin da ke tayar da wannan wakili shi ne ku. Yana jiran bukatarku. Ba ya aiki lokacin da kuke barci: don haka, sai Hanya ta 2. Haka kuma ba ya taba e-mail dinku, kalandarku ko takardunku na yanar gizo: wannan shi ne Hanya ta 3. Amma don koyo, rubutu ko nazari, sau da yawa wannan ya isa. Dan kasuwa a Nairobi, a Kenya, da ke shirya tayinsa, ko dalibi a Conakry, a Guinea, da ke bitar jarrabawa, ba ya bukatar fiye da haka.\n\nKu yi hasashe. Aïssa ta bude tattaunawa a wajen project dinta kuma ta rubuta batu daya. Amsar ta sake zama ta gaba daya: babu bayanin kanta, babu hanyar aikinta, babu tsari kayyadadde, wata kila ma babu majiyoyi. Wakilin ba ya zaune a cikin mataimakin: yana zaune a cikin project. Don haka dabi’ar da ta dace ita ce bude project kafin rubuta bukatarku.\n\nMatakan kiyayewa guda biyu. Na farko, kada ku saka bayanan sirri ko na kashin kai a cikin fayiloli: babu yarjejeniyar abokin ciniki, babu lambar waya, babu jerin masu cin gajiya. Ku yi amfani da takardu na kirkira ko wadanda aka boye sunaye. Na biyu, bayanan sa ido suna canzawa daga rana zuwa rana: kullum ku duba majiyoyi kafin amfani da su. Kuma idan kuna mantawa da kunna wakilinku, ko idan yana bukatar karanta e-mail dinku, wannan alama ce cewa lokaci ya yi na matsawa zuwa hanyoyi na gaba."
      }
    ],
    "example": {
      "title": "Aïssa, mai ba da shawara a Abidjan: wakilin sa ido da ke ajiye umarnanta",
      "challenge": "Aïssa mai ba da shawara ce mai zaman kanta a Abidjan, a Côte d’Ivoire (labari na kirkira). Kowane sabon fayil na abokin ciniki yana tilasta mata ta koyi wani batu da sauri. Amma a kowace tattaunawa da AI, tana sake bayyana sana’arta, abokan cinikinta da yadda take aiki, kuma kyawawan umarnanta suna bata a cikin tarihin tattaunawa. Sakamakon: bata lokaci da amsoshi marasa daidaito daga wani fayil zuwa wani. Wannan Litinin da karfe 9 na safe, ta bude sabon fayil: sake sarrafa robobi (plastic) a Togo.",
      "solution": "Ta kirkiri project a Claude mai suna « Wakilin sa ido da koyo » kuma ta manna umarnin RCTF a cikin umarnansa: « Rawa: kai ne wakilina na sa ido da koyo, mai tsanaki kuma mai bayyanawa da kyau. Mahallin: ni mai ba da shawara ce mai zaman kanta a Abidjan; dole in koyi da sauri a kowane sabon fayil na abokin ciniki; fayilolin project suna bayyana bayanin kaina da hanyar aikina. Aiki: idan na ba ka wani batu, nemo albarkatu mafi amfani kuma mafi sabo, sannan ka takaita mini su. Tsari: takaitawa a batutuwa biyar gajeru; sannan « Abin tunawa » a layi biyu; sannan « Mataki na gwadawa » a layi daya; sannan jerin majiyoyi tare da links dinsu. Da Faransanci, jimloli gajeru. Kada ka kirkiri komai: ambaci majiyoyinka, kuma rubuta « babu shi » idan wani bayani ya rasa. » Ta kara fayiloli biyu: bayanin kanta (fannoninta, irin abokan cinikinta, salonta, ba tare da wani abokin ciniki na gaske ba) da hanyarta ta takaitaccen rahoto. Bayan ta kunna binciken yanar gizo, ta bude tattaunawa a cikin project kuma ta rubuta layi daya kawai: « Batu: sake sarrafa robobi a Togo. »",
      "impact": "Amsar ta zo a cikin tsarin da aka kayyade: batutuwa biyar, abin tunawa, mataki daya na gwadawa a wannan mako, da majiyoyi tare da links dinsu. Aïssa ta bude wani link kuma ta sami bayanin da aka ambata. Don fayil dinta na gaba, ta bude project dinta kuma ta rubuta layi daya: ba ta sake bayyana komai, kuma umarnanta ba sa bata. Ta kuma ajiye kwafin umarnanta a wata takarda daban, don ta iya sake manna su idan ta canza mataimaki."
    },
    "practice": {
      "title": "Ku kirkiri wakilinku a cikin project, GPT ko Gem",
      "instructions": [
        "Ku dauki takardar wakilinku da kuka samu a Darasi 1 tare da mai tsara wakilai, ko ku fara daga wannan umarni ku daidaita shi: Rawa: kai ne wakilina na sa ido da koyo, mai tsanaki kuma mai bayyanawa da kyau. Mahallin: ni [sana’arku] ne a [garinku]. [Dalilin da ya sa dole ku koyi da sauri: sababbin fayiloli, sababbin abokan ciniki, sabon matsayi.] Fayilolin project suna bayyana bayanin kaina da hanyar aikina. Aiki: idan na ba ka wani batu, nemo albarkatu mafi amfani kuma mafi sabo, sannan ka takaita mini su. Tsari: takaitawa a batutuwa biyar gajeru; sannan « Abin tunawa » a layi biyu; sannan « Mataki na gwadawa » a layi daya; sannan jerin majiyoyi tare da links dinsu. Da Hausa, jimloli gajeru. Kada ka kirkiri komai: ambaci majiyoyinka, kuma rubuta « babu shi » idan wani bayani ya rasa.",
        "Ku kirkiri project a Claude, GPT na musamman a ChatGPT ko Gem (ko skill) a Gemini, kuma ku manna umarnanku a tsarin RCTF. Ku kara fayil daya ko biyu masu amfani, misali bayanin kanku ko hanyar aikinku, ba tare da wani bayanin sirri ko na kashin kai ba.",
        "Ku yi bukatu uku na gaske ga wakilinku. Duk lokacin da aka sami kuskure, ku gyara umarnan, ba amsar kadai ba, sannan ku sake yin bukatar. A karshe, ku ajiye kwafin umarnanku a wata takarda daban."
      ],
      "observation": "Ya kamata ku lura cewa kowace sabuwar tattaunawa a cikin wakilinku tana farawa daga umarnanku da fayilolinku: ba ku sake bayyana mahallinku, kuma amsoshi suna rike tsari daya daga wata bukata zuwa wata. Idan kun yi bukata daya a wajen wakilin, amsar tana sake zama ta gaba daya. Za ku kuma lura cewa gyaran da aka yi a cikin umarnai yana warware kuskuren ga duk bukatun da ke biye."
    },
    "quiz": [
      {
        "question": "A cikin project na Claude, daga ina kowace sabuwar tattaunawa take farawa?",
        "options": [
          { "key": "A", "text": "Daga babu komai: dole a sake bayyana komai" },
          { "key": "B", "text": "Daga umarnai da fayilolin project" },
          { "key": "C", "text": "Daga tattaunawar sauran masu amfani" },
          { "key": "D", "text": "Daga samfurin amsa da Claude ya tilasta" }
        ],
        "answer": "B",
        "explanation": "Wannan shi ne amfanin project: yana ajiye umarnai da fayiloli, kuma kowace sabuwar tattaunawa da aka bude a cikinsa tana farawa daga wannan tushe. Ba sai kun sake bayyana mahallinku ba. Project ba ya dauke da tattaunawar wasu mutane ko samfurin da aka tilasta: ku ne kuke rubuta umarnansa."
      },
      {
        "question": "A cikin umarnan wakilin Aïssa, wace jimla ce ta bangaren Tsari?",
        "options": [
          { "key": "A", "text": "« Kai ne wakilina na sa ido da koyo »" },
          { "key": "B", "text": "« Ni mai ba da shawara ce mai zaman kanta a Abidjan »" },
          { "key": "C", "text": "« Batutuwa biyar gajeru, sannan majiyoyi tare da links dinsu »" },
          { "key": "D", "text": "« Idan na ba ka wani batu, nemo albarkatu »" }
        ],
        "answer": "C",
        "explanation": "Bangaren Tsari yana kayyade siffar kowace amsa: batutuwa biyar, sannan majiyoyi tare da links dinsu. « Kai ne wakilina… » na Rawa ne, « Ni mai ba da shawara ce… » na Mahallin ne, kuma « Idan na ba ka wani batu… » na Aiki ne. Gane kowane bangare yana taimaka muku sanin inda za ku gyara idan amsa ba ta dace ba."
      },
      {
        "question": "Mene ne skill?",
        "options": [
          { "key": "A", "text": "Littafin bayanin yadda ake yin wani aiki na musamman, wanda mataimakin ke amfani da shi idan aikin ya taso" },
          { "key": "B", "text": "Damar shiga akwatin e-mail dinku" },
          { "key": "C", "text": "Tattaunawa da aka ajiye a tarihi" },
          { "key": "D", "text": "Saitin girman rubutu" }
        ],
        "answer": "A",
        "explanation": "Skill hanyar aiki ce da za a iya sake amfani da ita, misali « rubuta takaitaccen rahoto bisa ga hanyata ». Project yana ba da tsarin aiki, skill tana ba da hanyar yin aikin. Damar shiga e-mail dinku ta hanyar masu hadawa (connectors) take, wadanda za ku gani a Hanya ta 3."
      },
      {
        "question": "Aïssa ta bude tattaunawa a wajen project dinta kuma ta rubuta batu daya. Me zai faru?",
        "options": [
          { "key": "A", "text": "Amsa daya daidai da ta cikin project" },
          { "key": "B", "text": "Mataimakin zai ki amsawa" },
          { "key": "C", "text": "Za a goge project din" },
          { "key": "D", "text": "Amsa ta gaba daya, ba tare da bayanin kanta ko tsarinta ba" }
        ],
        "answer": "D",
        "explanation": "A wajen project, mataimakin ba shi da umarnai ko fayilolin Aïssa: amsar tana sake zama ta gaba daya, babu bayanin kanta, babu hanyar aiki, babu tsari kayyadadde, wani lokaci ma babu majiyoyi. Wakilin ba ya zaune a cikin mataimakin, yana zaune a cikin project. Amma ba a goge komai ba: sai ta koma cikin project kawai."
      },
      {
        "question": "A Hanya ta 1, mene ne ke tayar da wakilin?",
        "options": [
          { "key": "A", "text": "Lokaci kayyadadde, kowace safiya" },
          { "key": "B", "text": "E-mail da ya iso" },
          { "key": "C", "text": "Ku, idan kun yi masa magana" },
          { "key": "D", "text": "Fom da abokin ciniki ya cika" }
        ],
        "answer": "C",
        "explanation": "A Hanya ta 1, wakilin yana jiran bukatarku: ku ne kuke tayar da shi. Lokaci kayyadadde na Hanya ta 2 ne, kuma wani abu da ya faru kamar e-mail ko fom da ya iso yana cikin hanyoyi na gaba. Don koyo, rubutu ko nazari, wakili mai aiki idan an kira shi sau da yawa ya isa."
      }
    ],
    "reflection": "Wane mahallin aiki ko irin fayil ne kuka fi yawan sake bayyanawa ga mataimakin AI, kuma wadanne umarnai da fayiloli za ku saka a cikin project don kada ku sake yin haka?",
    "glossary": [
      { "term": "Project (wurin aikin wakili)", "definition": "Wurin aiki a cikin mataimakin AI, kamar Claude, da ke ajiye umarnai da fayiloli. Kowace sabuwar tattaunawa da aka bude a cikin project tana farawa daga wannan tushe." },
      { "term": "Umarnai na dindindin", "definition": "Umarni da aka rubuta sau daya tak, wanda wakilin ke bi a kowace amsa. Ana rubuta shi da hanyar RCTF (rawa, mahallin, aiki, tsari), tare da matakan kariya kamar « kada ka kirkiri komai, ambaci majiyoyinka »." },
      { "term": "Fayilolin tunani", "definition": "Takardu da aka kara a cikin project (bayanin kai, hanyar aiki, hanyar yin wani aiki) wadanda wakilin ke dubawa. Cikin sassa shida na wakili, su ne ajiyar bayanansa." },
      { "term": "Skill (littafin bayanin wani aiki)", "definition": "Littafin bayanin yadda ake yin wani aiki na musamman, wanda mataimakin ke amfani da shi idan aikin ya taso. Project yana ba da tsarin aiki, skill tana ba da hanyar yin aikin." },
      { "term": "Custom GPT da Gem (GPT na musamman da Gem)", "definition": "Abin da ya yi daidai da project na Claude a ChatGPT da a Gemini: umarnai da fayiloli da aka hada a cikin wakili da za a iya sake amfani da shi. Google yana canza Gems zuwa skills." },
      { "term": "Mai tayarwa (trigger)", "definition": "Abin da ke tayar da wakilin ya fara aiki. A Hanya ta 1, ku ne: wakilin yana aiki ne kawai idan kun yi masa magana." }
    ]
  }
};
