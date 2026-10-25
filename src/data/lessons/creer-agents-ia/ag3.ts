import { Language } from '../../translations';
import { LessonContent } from '../../lessonContent';

// Module « Comment créer des agents IA » (creer-agents-ia) — leçon ag3 (Méthode 2 : agents planifiés)
// Texte aligné sur le CLAUDE.md de production vidéo du cours 2 (docs/production-video/claude-md/).
// Trilingue FR / EN / HA. ⚠️ Traductions HA à faire valider par un locuteur natif haoussa.
export const agLesson3: Record<Language, LessonContent> = {
  "fr": {
    "id": "ag3",
    "lessonNumber": 3,
    "title": "Méthode 2 : programmer un agent qui travaille seul à heure fixe",
    "objective": "À la fin de cette leçon, vous saurez programmer un agent qui s’exécute seul, chaque jour ou chaque semaine. Vous saurez écrire une consigne RCTF qui tient seule, sans personne pour répondre aux questions de l’agent, et y prévoir le cas « Rien de nouveau ». Vous saurez choisir une fréquence et une heure adaptées, vérifier le fuseau horaire, puis lire et contrôler le résultat avant de décider vous-même.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Une tâche planifiée : une consigne complète et un horaire",
        "body": "Sur l’échelle des cinq méthodes, la Méthode 2 monte d’un cran par rapport aux projets de la Méthode 1. Elle n’ajoute qu’une seule chose : un horaire. Avec la Méthode 1, votre agent attend que vous lui parliez. Avec la Méthode 2, il se met au travail à l’heure dite, que vous y pensiez ou non. C’est la différence entre une marmite sur le feu, qu’il faut surveiller, et un réveil réglé la veille : le réveil sonne même si vous avez oublié l’heure du rendez-vous.\n\nReprenez les six pièces d’un agent vues à la Leçon 1 : objectif, instructions, outils, mémoire, déclencheur, garde-fous. Ici, une seule pièce change : le déclencheur. Avant, c’était votre demande. Maintenant, c’est l’horloge. À l’heure prévue, l’assistant lit la consigne, fait le travail (par exemple une recherche sur le web) et dépose le résultat, souvent avec une notification. Cette méthode convient aux tâches qui reviennent à date fixe : une veille hebdomadaire, un bilan du vendredi, un brief du matin. Une enseignante de Cotonou, au Bénin, peut ainsi recevoir chaque dimanche soir les nouveaux concours et bourses ouverts à ses élèves de terminale.\n\nOn croit souvent qu’un agent automatique exige un serveur ou du code. Pas avec cette méthode : plusieurs assistants, comme Claude, ChatGPT ou Gemini, proposent des tâches planifiées. Vous écrivez une consigne, vous choisissez un horaire, et c’est tout. Une réserve honnête : le nom de la fonction, son emplacement dans l’application et son ouverture varient d’un outil et d’un compte à l’autre, et ils changent souvent. Vérifiez ce que propose votre propre compte avant d’organiser votre travail autour."
      },
      {
        "title": "Écrire une consigne qui tient seule, sans personne pour répondre",
        "body": "Quand vous parlez à un assistant, il peut vous demander une précision et vous lui répondez. Une tâche planifiée, elle, s’exécute pendant que vous êtes en réunion, sur la route ou endormi. Personne ne sera là pour répondre aux questions de l’agent. La consigne doit donc tout dire, comme la note que vous laissez au collègue qui vous remplace pendant une mission : s’il lui manque une information, il devine, ou il s’arrête.\n\nÉcrivez-la avec la méthode RCTF, complète. Le Rôle : « tu es l’agent de veille de telle organisation, rigoureux ». Le Contexte : qui vous êtes, où vous êtes, et la phrase « cette tâche s’exécute seule : personne ne pourra répondre à tes questions ». La Tâche, avec une période précise : « les appels publiés depuis sept jours », et non « les appels récents », qui ne veut rien dire pour une machine. Le Format : combien de résultats au plus, dans quel ordre, en combien de lignes, avec quel lien. Le gérant d’une coopérative de Ouagadougou, au Burkina Faso, qui suit les prix des engrais, gagne à écrire « au plus cinq prix, avec la source et la date de chaque prix » plutôt que « dis-moi les prix ».\n\nAjoutez enfin la règle du cas vide : « Si tu ne trouves rien, écris seulement : Rien de nouveau cette semaine. » Sans cette phrase, l’agent risque de remplir le vide avec des résultats anciens, ou même inventés. C’est ce qu’on appelle une hallucination : une réponse fausse donnée avec assurance. Prévoyez toujours le cas où il n’y a rien : une phrase courte et honnête vaut mieux qu’une liste trompeuse."
      },
      {
        "title": "Choisir une fréquence, une heure et le bon fuseau horaire",
        "body": "Chaque jour ou chaque semaine ? Choisissez le rythme auquel vous lirez vraiment le résultat. Une veille des financements quotidienne remplirait votre assistant de listes que vous n’ouvririez pas ; une fois par semaine suffit souvent. À l’inverse, un brief du matin n’a de sens que s’il arrive chaque jour avant votre premier rendez-vous. Pensez au marché hebdomadaire de votre quartier : on y va le jour où il se tient, pas tous les jours.\n\nChoisissez aussi l’heure selon votre routine : le résultat doit être prêt avant le moment où vous vous en servez. Si vous faites le point chaque lundi à 8 h, réglez la tâche à 7 h. Puis vérifiez le fuseau horaire, c’est-à-dire l’heure de référence du pays. Sept heures à Bamako, ce n’est pas sept heures à Nairobi ni à Paris. Une consultante de Nairobi, au Kenya, dont l’application serait restée réglée sur un autre pays après un voyage, recevrait son brief au milieu de la nuit, ou trop tard.\n\nEnfin, testez avant d’attendre. Après avoir enregistré la tâche, lancez-la une fois à la main : vous voyez tout de suite si la consigne produit ce que vous voulez, sans patienter jusqu’au lundi suivant. Selon l’outil, vérifiez aussi les conditions d’exécution, par exemple si l’application doit rester ouverte, et la manière dont la notification vous parvient."
      },
      {
        "title": "Lire et vérifier le résultat, et connaître les limites de la Méthode 2",
        "body": "Le résultat arrive dans l’assistant, souvent accompagné d’une notification. L’agent cherche et résume. Il ne postule pas, il n’envoie rien, il ne répond à personne. C’est vous qui lisez, qui ouvrez les liens et qui décidez. Quand une date porte la mention « à vérifier », ouvrez la page officielle et contrôlez-la vous-même : une date limite mal recopiée peut faire rater un dossier. L’agent ressemble à l’apprenti qui prépare le matériel avant votre arrivée à l’atelier : le travail est avancé, mais la décision reste la vôtre.\n\nLa Méthode 2 a une limite claire : elle part à l’heure, pas sur un événement. Elle ne réagit pas à un message qui arrive ni à un formulaire rempli : ce sera la Méthode 4, avec n8n. Et si votre tâche doit lire vos e-mails ou votre agenda, comme le brief du matin (rôle : assistant de début de journée ; contexte : accès à votre boîte e-mail et à votre agenda ; tâche : lire les e-mails non lus et l’agenda du jour ; format : trois points au plus, sans répondre à aucun e-mail), elle a besoin des connecteurs de la Méthode 3.\n\nSi la fonction n’existe pas sur votre compte, ne renoncez pas. Créez un rappel récurrent dans votre agenda, avec la consigne complète dans la note : à l’heure dite, vous la collez dans votre assistant. C’est moins automatique, mais c’est régulier. Une association de Conakry, en Guinée, peut ainsi tenir sa veille hebdomadaire sans attendre l’outil idéal, puis passer plus tard à la Méthode 4."
      }
    ],
    "example": {
      "title": "Fatoumata, à Bamako : une veille des financements qui part seule chaque lundi à 7 h",
      "challenge": "Fatoumata est chargée de programme dans une ONG de Bamako, au Mali, qui accompagne des groupements de maraîchères (cas fictif). Depuis la Leçon 1, elle a la fiche de son agent de veille. Mais la semaine dernière a été chargée : une mission de terrain, trois réunions, un rapport à rendre. Elle n’a pas lancé sa recherche de financements. Son agent attendait qu’elle lui parle. Une veille qui dépend de sa mémoire, ce sont des appels à projets manqués.",
      "solution": "Dans son assistant, elle crée une tâche planifiée nommée « Veille financements du lundi » et colle une consigne RCTF complète : « Rôle : tu es l’agent de veille financements de notre ONG, rigoureux. Contexte : l’ONG est basée à Bamako et accompagne des groupements de maraîchères. Cette tâche s’exécute seule, chaque lundi : personne ne pourra répondre à tes questions. Tâche : cherche sur le web les appels à projets publiés depuis sept jours sur le maraîchage et l’autonomie économique des femmes, au Mali et en Afrique de l’Ouest. Ouvre chaque page officielle avant de répondre. Format : au plus cinq appels, du plus utile au moins utile, chacun en trois lignes : bailleur et titre, date limite, lien officiel. Si une date n’est pas confirmée, écris “date à vérifier”. N’invente rien. Si tu ne trouves rien, écris seulement : “Rien de nouveau cette semaine.” » Elle règle l’horaire sur chaque lundi à 7 h, vérifie le fuseau horaire de Bamako, enregistre, puis lance la tâche une fois à la main pour la tester. Le lundi suivant, à 7 h, le résultat arrive : quatre appels, chacun avec bailleur, date limite et lien, dont une date marquée « à vérifier ». Elle ouvre ce lien et contrôle la date sur la page officielle.",
      "impact": "Même après une semaine chargée, la liste est là le lundi matin, sans que Fatoumata ait eu à y penser. Elle lit, vérifie un lien, et choisit les appels à présenter à sa directrice. La veille ne dépend plus de sa mémoire ; la décision, elle, reste entre ses mains."
    },
    "practice": {
      "title": "Programmez votre premier agent planifié",
      "instructions": [
        "Choisissez une tâche qui revient à date fixe (une veille, le bilan de la semaine, la préparation du lundi), puis écrivez une consigne RCTF complète, qui tient seule : période, format, nombre maximum de résultats, et la phrase « Rien de nouveau » si la liste est vide. Vous pouvez partir de ce modèle en remplaçant les crochets : « Rôle : tu es l’agent de veille financements de [nom de l’organisation], rigoureux. Contexte : [l’organisation] est basée à [ville] et [ce qu’elle fait, pour qui]. Cette tâche s’exécute seule, chaque [lundi] : personne ne pourra répondre à tes questions. Tâche : cherche sur le web les appels à projets publiés depuis sept jours sur [vos thèmes], en [pays ou région]. Ouvre chaque page officielle avant de répondre. Format : au plus cinq appels, du plus utile au moins utile, chacun en trois lignes : bailleur et titre, date limite, lien officiel. Si une date n’est pas confirmée, écris “date à vérifier”. N’invente rien. Si tu ne trouves rien, écris seulement : “Rien de nouveau cette semaine.” »",
        "Créez la tâche planifiée dans votre assistant, réglez la fréquence et le fuseau horaire, puis lancez-la une fois à la main pour voir le résultat sans attendre. Si la fonction n’existe pas sur votre compte, programmez un rappel récurrent dans votre agenda avec la consigne dans la note, et gardez-la pour la Méthode 4 (n8n).",
        "Au premier résultat programmé, vérifiez au moins deux liens sur les pages officielles, puis corrigez la consigne si besoin (période, format, nombre de résultats, règle du cas vide)."
      ],
      "observation": "Vous constatez que l’agent travaille sans vous : le résultat arrive à l’heure prévue, même si vous n’y avez pas pensé. Vous voyez aussi que sa qualité dépend de la consigne : plus elle est complète, moins vous corrigez. Et vous remarquez que la vérification reste votre travail : un lien ouvert et une date contrôlée valent mieux qu’une liste acceptée les yeux fermés."
    },
    "quiz": [
      {
        "question": "De quoi se compose une tâche planifiée ?",
        "options": [
          { "key": "A", "text": "D’un horaire seulement" },
          { "key": "B", "text": "D’une consigne complète et d’un horaire" },
          { "key": "C", "text": "D’un connecteur Gmail obligatoire" },
          { "key": "D", "text": "D’un serveur à installer soi-même" }
        ],
        "answer": "B",
        "explanation": "Une tâche planifiée, c’est une consigne complète plus un horaire. L’horaire seul ne dit pas quoi faire. Aucun connecteur n’est obligatoire : il ne sert que si la tâche doit lire vos e-mails ou votre agenda. Et aucun serveur n’est à installer : l’assistant s’occupe de l’exécution."
      },
      {
        "question": "Pourquoi la consigne d’une tâche planifiée doit-elle tout dire ?",
        "options": [
          { "key": "A", "text": "Parce que personne ne sera là pour répondre aux questions de l’agent" },
          { "key": "B", "text": "Parce que l’assistant ne lit que la première ligne" },
          { "key": "C", "text": "Parce qu’une consigne longue s’exécute plus vite" },
          { "key": "D", "text": "Parce que l’horaire remplace le format" }
        ],
        "answer": "A",
        "explanation": "La tâche s’exécute pendant que vous êtes ailleurs. Si la consigne laisse un flou, l’agent ne peut pas vous demander de précision : il devine ou il s’arrête. D’où une consigne RCTF complète, avec une période précise, un format, un nombre maximum de résultats et la conduite à tenir s’il n’y a rien."
      },
      {
        "question": "Fatoumata règle sa veille « chaque lundi à sept heures ». Que vérifie-t-elle aussi ?",
        "options": [
          { "key": "A", "text": "La couleur de la notification" },
          { "key": "B", "text": "La langue de son clavier" },
          { "key": "C", "text": "Le nombre de ses contacts" },
          { "key": "D", "text": "Le fuseau horaire, celui de Bamako" }
        ],
        "answer": "D",
        "explanation": "Sept heures à Bamako ne sont pas sept heures dans un autre pays. Si le fuseau horaire est mal réglé, la tâche part au mauvais moment : en pleine nuit, ou trop tard pour être utile. C’est un réglage à vérifier chaque fois que vous créez une tâche."
      },
      {
        "question": "Lundi, aucun appel n’a été publié. Quelle règle garantit à Fatoumata une réponse honnête ?",
        "options": [
          { "key": "A", "text": "« Écris en français »" },
          { "key": "B", "text": "« Au plus cinq appels »" },
          { "key": "C", "text": "« Si tu ne trouves rien, écris seulement : Rien de nouveau cette semaine »" },
          { "key": "D", "text": "« Tu es l’agent de veille »" }
        ],
        "answer": "C",
        "explanation": "Sans règle pour le cas vide, l’agent risque de remplir la liste avec des appels anciens ou inventés : une hallucination, c’est-à-dire une réponse fausse donnée avec assurance. La phrase « Rien de nouveau cette semaine » lui donne une réponse honnête à rendre quand il n’y a rien."
      },
      {
        "question": "La liste du lundi contient une date « à vérifier ». Que fait Fatoumata ?",
        "options": [
          { "key": "A", "text": "Elle postule tout de suite" },
          { "key": "B", "text": "Elle ouvre le lien et contrôle la date sur la page officielle" },
          { "key": "C", "text": "Elle supprime la tâche planifiée" },
          { "key": "D", "text": "Elle transfère la liste aux bailleurs" }
        ],
        "answer": "B",
        "explanation": "L’agent cherche et résume ; c’est Fatoumata qui vérifie et qui décide. Une date « à vérifier » se contrôle sur la page officielle du bailleur avant toute décision : une date limite erronée peut faire rater un dossier."
      }
    ],
    "reflection": "Quelle tâche revient chez vous à date fixe, chaque jour ou chaque semaine, et que devrait dire sa consigne pour qu’un agent puisse la faire seul, sans jamais vous poser de question ?",
    "glossary": [
      {
        "term": "Tâche planifiée",
        "definition": "Une consigne associée à un horaire (chaque jour, chaque semaine) que l’assistant exécute seul à l’heure dite. C’est le cœur de la Méthode 2, comme un réveil que l’on règle une fois."
      },
      {
        "term": "Déclencheur",
        "definition": "Ce qui fait démarrer un agent. Avec la Méthode 1, c’est votre demande ; avec la Méthode 2, c’est l’horloge ; avec la Méthode 4, c’est un événement, comme un message qui arrive."
      },
      {
        "term": "Consigne qui tient seule",
        "definition": "Une consigne RCTF complète, qui dit tout parce que personne ne répondra aux questions de l’agent : période précise, format, nombre maximum de résultats et conduite à tenir s’il n’y a rien."
      },
      {
        "term": "Fuseau horaire",
        "definition": "L’heure de référence d’un pays ou d’une région. Sept heures à Bamako ne sont pas sept heures à Nairobi : ce réglage décide du moment réel où votre tâche démarre."
      },
      {
        "term": "Règle « Rien de nouveau »",
        "definition": "La phrase prévue dans la consigne qui dit à l’agent quoi écrire s’il ne trouve rien. Elle l’empêche de remplir le vide avec des résultats anciens ou inventés."
      },
      {
        "term": "Hallucination",
        "definition": "Une réponse fausse donnée avec assurance par une IA, par exemple un appel à projets qui n’existe pas ou une date limite erronée. D’où la règle du cas vide et la vérification des liens."
      }
    ]
  },
  "en": {
    "id": "ag3",
    "lessonNumber": 3,
    "title": "Method 2: Schedule an Agent That Works on Its Own at a Set Time",
    "objective": "By the end of this lesson, you will know how to schedule an agent that runs on its own, every day or every week. You will know how to write an RCTF instruction that stands on its own, with nobody there to answer the agent's questions, and how to plan for the “Nothing new” case. You will know how to choose a suitable frequency and time, check the time zone, then read and check the result before deciding for yourself.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "A Scheduled Task: A Complete Instruction Plus a Time",
        "body": "On the ladder of the five methods, Method 2 is one step up from the projects of Method 1. It adds just one thing: a time. With Method 1, your agent waits for you to talk to it. With Method 2, it gets to work at the set time, whether you think of it or not. It is the difference between a pot on the stove, which you have to watch, and an alarm clock set the night before: the alarm rings even if you forgot the time of your appointment.\n\nRecall the six parts of an agent from Lesson 1: goal, instructions, tools, memory, trigger, safeguards. Here, only one part changes: the trigger. Before, it was your request. Now, it is the clock. At the planned time, the assistant reads the instruction, does the work (for example a web search) and delivers the result, often with a notification. This method suits tasks that come back on a fixed date: a weekly watch, a Friday review, a morning brief. A teacher in Cotonou, Benin, can receive every Sunday evening the new competitions and scholarships open to her final-year students.\n\nPeople often think an automatic agent requires a server or code. Not with this method: several assistants, such as Claude, ChatGPT or Gemini, offer scheduled tasks. You write an instruction, you choose a time, and that's it. An honest caveat: the name of the feature, where it sits in the app and who can use it vary from one tool and one account to another, and they change often. Check what your own account offers before you organize your work around it."
      },
      {
        "title": "Write an Instruction That Stands on Its Own, With Nobody There to Answer",
        "body": "When you talk to an assistant, it can ask you for clarification and you answer. A scheduled task, however, runs while you are in a meeting, on the road or asleep. Nobody will be there to answer the agent's questions. So the instruction has to say everything, like the note you leave for the colleague who stands in for you during a field trip: if a piece of information is missing, they guess, or they stop.\n\nWrite it with the RCTF method, in full. The Role: “you are the funding-watch agent of such-and-such organization, thorough.” The Context: who you are, where you are, and the sentence “this task runs on its own: nobody will be able to answer your questions.” The Task, with a precise period: “calls published in the last seven days,” not “recent calls,” which means nothing to a machine. The Format: how many results at most, in what order, in how many lines, with which link. The manager of a cooperative in Ouagadougou, Burkina Faso, who tracks fertilizer prices, does better to write “at most five prices, with the source and date of each price” than “tell me the prices.”\n\nFinally, add the empty-case rule: “If you find nothing, write only: Nothing new this week.” Without that sentence, the agent may fill the gap with old results, or even made-up ones. This is called a hallucination: a false answer given with confidence. Always plan for the case where there is nothing: a short, honest sentence is better than a misleading list."
      },
      {
        "title": "Choose a Frequency, a Time and the Right Time Zone",
        "body": "Every day or every week? Choose the rhythm at which you will actually read the result. A daily funding watch would fill your assistant with lists you would never open; once a week is often enough. On the other hand, a morning brief only makes sense if it arrives every day before your first appointment. Think of the weekly market in your neighbourhood: you go on the day it is held, not every day.\n\nAlso choose the time according to your routine: the result must be ready before the moment you use it. If you review things every Monday at 8 a.m., set the task for 7 a.m. Then check the time zone, that is, the reference time of the country. Seven o'clock in Bamako is not seven o'clock in Nairobi or in Paris. A consultant in Nairobi, Kenya, whose app was still set to another country after a trip would receive her brief in the middle of the night, or too late.\n\nFinally, test before you wait. After saving the task, run it once by hand: you see straight away whether the instruction produces what you want, without waiting until the following Monday. Depending on the tool, also check the running conditions, for example whether the app has to stay open, and how the notification reaches you."
      },
      {
        "title": "Read and Check the Result, and Know the Limits of Method 2",
        "body": "The result arrives in the assistant, often with a notification. The agent searches and summarizes. It does not apply, it sends nothing, it replies to no one. You are the one who reads, opens the links and decides. When a date is marked “to be checked,” open the official page and check it yourself: a deadline copied wrongly can make you miss an application. The agent is like the apprentice who sets out the tools before you arrive at the workshop: the work is under way, but the decision remains yours.\n\nMethod 2 has a clear limit: it starts on time, not on an event. It does not react to an incoming message or a submitted form: that will be Method 4, with n8n. And if your task needs to read your email or your calendar, like the morning brief (role: start-of-day assistant; context: access to your inbox and your calendar; task: read unread emails and today's calendar; format: three points at most, without replying to any email), it needs the connectors of Method 3.\n\nIf the feature does not exist on your account, don't give up. Create a recurring reminder in your calendar, with the full instruction in the note: at the set time, you paste it into your assistant. It is less automatic, but it is regular. An association in Conakry, Guinea, can keep up its weekly watch this way without waiting for the ideal tool, then move to Method 4 later."
      }
    ],
    "example": {
      "title": "Fatoumata in Bamako: A Funding Watch That Starts on Its Own Every Monday at 7 a.m.",
      "challenge": "Fatoumata is a programme officer at an NGO in Bamako, Mali, that supports groups of women market gardeners (fictional case). Since Lesson 1, she has the sheet describing her watch agent. But last week was busy: a field mission, three meetings, a report to hand in. She did not launch her funding search. Her agent was waiting for her to talk to it. A watch that depends on her memory means missed calls for proposals.",
      "solution": "In her assistant, she creates a scheduled task called “Monday funding watch” and pastes a complete RCTF instruction: “Role: you are the funding-watch agent of our NGO, thorough. Context: the NGO is based in Bamako and supports groups of women market gardeners. This task runs on its own, every Monday: nobody will be able to answer your questions. Task: search the web for calls for proposals published in the last seven days on market gardening and women's economic independence, in Mali and West Africa. Open each official page before answering. Format: at most five calls, from most to least useful, each in three lines: funder and title, deadline, official link. If a date is not confirmed, write ‘date to be checked’. Do not make anything up. If you find nothing, write only: ‘Nothing new this week.’” She sets the schedule to every Monday at 7 a.m., checks the Bamako time zone, saves, then runs the task once by hand to test it. The following Monday, at 7 a.m., the result arrives: four calls, each with funder, deadline and link, one of them with a date marked “to be checked.” She opens that link and checks the date on the official page.",
      "impact": "Even after a busy week, the list is there on Monday morning, without Fatoumata having to think about it. She reads it, checks a link, and chooses the calls to present to her director. The watch no longer depends on her memory; the decision stays in her hands."
    },
    "practice": {
      "title": "Set Up Your First Scheduled Agent",
      "instructions": [
        "Choose a task that comes back on a fixed date (a watch, the weekly review, Monday preparation), then write a complete RCTF instruction that stands on its own: period, format, maximum number of results, and the “Nothing new” sentence if the list is empty. You can start from this template and replace the brackets: “Role: you are the funding-watch agent of [name of the organization], thorough. Context: [the organization] is based in [city] and [what it does, for whom]. This task runs on its own, every [Monday]: nobody will be able to answer your questions. Task: search the web for calls for proposals published in the last seven days on [your themes], in [country or region]. Open each official page before answering. Format: at most five calls, from most to least useful, each in three lines: funder and title, deadline, official link. If a date is not confirmed, write ‘date to be checked’. Do not make anything up. If you find nothing, write only: ‘Nothing new this week.’”",
        "Create the scheduled task in your assistant, set the frequency and the time zone, then run it once by hand to see the result without waiting. If the feature does not exist on your account, set a recurring reminder in your calendar with the instruction in the note, and keep it for Method 4 (n8n).",
        "When the first scheduled result arrives, check at least two links on the official pages, then correct the instruction if needed (period, format, number of results, empty-case rule)."
      ],
      "observation": "You notice that the agent works without you: the result arrives at the planned time, even if you did not think about it. You also see that its quality depends on the instruction: the more complete it is, the less you correct. And you notice that checking is still your job: an opened link and a verified date are worth more than a list accepted with your eyes closed."
    },
    "quiz": [
      {
        "question": "What does a scheduled task consist of?",
        "options": [
          { "key": "A", "text": "A time only" },
          { "key": "B", "text": "A complete instruction and a time" },
          { "key": "C", "text": "A mandatory Gmail connector" },
          { "key": "D", "text": "A server you install yourself" }
        ],
        "answer": "B",
        "explanation": "A scheduled task is a complete instruction plus a time. A time alone does not say what to do. No connector is mandatory: it is only needed if the task must read your email or your calendar. And there is no server to install: the assistant takes care of running it."
      },
      {
        "question": "Why must the instruction of a scheduled task say everything?",
        "options": [
          { "key": "A", "text": "Because nobody will be there to answer the agent's questions" },
          { "key": "B", "text": "Because the assistant only reads the first line" },
          { "key": "C", "text": "Because a long instruction runs faster" },
          { "key": "D", "text": "Because the time replaces the format" }
        ],
        "answer": "A",
        "explanation": "The task runs while you are elsewhere. If the instruction leaves something unclear, the agent cannot ask you for clarification: it guesses or it stops. Hence a complete RCTF instruction, with a precise period, a format, a maximum number of results and what to do if there is nothing."
      },
      {
        "question": "Fatoumata sets her watch for “every Monday at seven o'clock.” What else does she check?",
        "options": [
          { "key": "A", "text": "The colour of the notification" },
          { "key": "B", "text": "The language of her keyboard" },
          { "key": "C", "text": "The number of her contacts" },
          { "key": "D", "text": "The time zone, Bamako's" }
        ],
        "answer": "D",
        "explanation": "Seven o'clock in Bamako is not seven o'clock in another country. If the time zone is set wrongly, the task starts at the wrong moment: in the middle of the night, or too late to be useful. It is a setting to check every time you create a task."
      },
      {
        "question": "On Monday, no call has been published. Which rule guarantees Fatoumata an honest answer?",
        "options": [
          { "key": "A", "text": "“Write in French”" },
          { "key": "B", "text": "“At most five calls”" },
          { "key": "C", "text": "“If you find nothing, write only: Nothing new this week”" },
          { "key": "D", "text": "“You are the watch agent”" }
        ],
        "answer": "C",
        "explanation": "Without a rule for the empty case, the agent may fill the list with old or made-up calls: a hallucination, that is, a false answer given with confidence. The sentence “Nothing new this week” gives it an honest answer to return when there is nothing."
      },
      {
        "question": "Monday's list contains a date marked “to be checked.” What does Fatoumata do?",
        "options": [
          { "key": "A", "text": "She applies right away" },
          { "key": "B", "text": "She opens the link and checks the date on the official page" },
          { "key": "C", "text": "She deletes the scheduled task" },
          { "key": "D", "text": "She forwards the list to the funders" }
        ],
        "answer": "B",
        "explanation": "The agent searches and summarizes; Fatoumata is the one who checks and decides. A date “to be checked” is verified on the funder's official page before any decision: a wrong deadline can make you miss an application."
      }
    ],
    "reflection": "Which task comes back for you on a fixed date, every day or every week, and what should its instruction say so that an agent could do it on its own, without ever asking you a question?",
    "glossary": [
      {
        "term": "Scheduled task",
        "definition": "An instruction paired with a time (every day, every week) that the assistant runs on its own at the set time. It is the heart of Method 2, like an alarm clock you set once."
      },
      {
        "term": "Trigger",
        "definition": "What makes an agent start. With Method 1, it is your request; with Method 2, it is the clock; with Method 4, it is an event, such as an incoming message."
      },
      {
        "term": "Self-sufficient instruction",
        "definition": "A complete RCTF instruction that says everything because nobody will answer the agent's questions: precise period, format, maximum number of results and what to do if there is nothing."
      },
      {
        "term": "Time zone",
        "definition": "The reference time of a country or region. Seven o'clock in Bamako is not seven o'clock in Nairobi: this setting decides the actual moment your task starts."
      },
      {
        "term": "“Nothing new” rule",
        "definition": "The sentence written into the instruction that tells the agent what to write if it finds nothing. It stops it from filling the gap with old or made-up results."
      },
      {
        "term": "Hallucination",
        "definition": "A false answer given with confidence by an AI, for example a call for proposals that does not exist or a wrong deadline. Hence the empty-case rule and checking the links."
      }
    ]
  },
  "ha": {
    "id": "ag3",
    "lessonNumber": 3,
    "title": "Hanya ta 2: tsara wakilin AI da ke aiki shi kadai a lokaci kayyadadde",
    "objective": "A karshen wannan darasi, za ku san yadda ake tsara wakilin AI (agent) da ke aiki shi kadai, kowace rana ko kowane mako. Za ku san rubuta umurnin RCTF da ke tsaye da kansa, ba tare da wani da zai amsa tambayoyin wakilin ba, kuma ku tanadi halin « Babu sabon abu ». Za ku san zabar yawan maimaitawa da lokacin da ya dace, ku duba lokacin kasarku, sannan ku karanta kuma ku tabbatar da sakamakon kafin ku yanke shawara da kanku.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Aikin da aka tsara lokacinsa: cikakken umurni da lokaci",
        "body": "A kan matakan hanyoyi biyar, Hanya ta 2 ta haura mataki daya bisa ayyukan Hanya ta 1. Abu daya kawai take karawa: lokaci. Da Hanya ta 1, wakilinku yana jira har sai kun yi masa magana. Da Hanya ta 2, yana fara aiki a lokacin da aka kayyade, ko kun tuna ko ba ku tuna ba. Bambancin kamar na tukunya a kan wuta, wadda dole a rika dubawa, da agogon kararrawa da aka saita tun jiya: kararrawar tana bugawa ko da kun manta lokacin ganawar.\n\nKu tuna da sassa shida na wakili da muka gani a Darasi 1: manufa, umurnai, kayan aiki, ajiyar bayanai, abin da ke tayar da aiki, da matakan kariya. A nan, sashe daya ne kawai ke canzawa: abin da ke tayar da aiki. A da, bukatarku ce. Yanzu, agogo ne. A lokacin da aka tsara, mataimakin AI yana karanta umurnin, yana yin aikin (misali bincike a yanar gizo) kuma yana ajiye sakamakon, sau da yawa tare da sanarwa. Wannan hanya ta dace da ayyukan da ke dawowa a rana kayyadadda: bin diddigi na mako-mako, takaitaccen bayanin ranar Jumma’a, bayanin safiya. Misali, wata malama a Cotonou, kasar Benin, za ta iya karbar kowace Lahadi da yamma sabbin gasa da tallafin karatu da ke bude ga daliban ajin karshe.\n\nMutane da yawa suna tsammanin wakili mai aiki da kansa yana bukatar sabar kwamfuta (serveur) ko rubuta code. Ba haka ba ne da wannan hanya: mataimakan AI da dama, kamar Claude, ChatGPT ko Gemini, suna ba da ayyukan da aka tsara lokacinsu. Kuna rubuta umurni, kuna zabar lokaci, shi ke nan. Gargadi na gaskiya: sunan wannan aiki, wurinsa a cikin manhajar, da wadanda za su iya amfani da shi sun bambanta daga wani kayan aiki zuwa wani, da kuma daga wani asusu zuwa wani, kuma suna canzawa akai-akai. Ku duba abin da asusunku yake bayarwa kafin ku gina tsarin aikinku a kai."
      },
      {
        "title": "Rubuta umurnin da ke tsaye da kansa, ba tare da wanda zai amsa ba",
        "body": "Idan kuna magana da mataimakin AI, zai iya tambayarku karin bayani kuma ku amsa. Amma aikin da aka tsara lokacinsa yana gudana yayin da kuke cikin taro, a kan hanya, ko kuna barci. Ba wanda zai kasance don amsa tambayoyin wakilin. Saboda haka dole umurnin ya fadi komai, kamar takardar da kuke bari wa abokin aikin da zai maye gurbinku yayin tafiyar aiki: idan wani bayani ya bace masa, zai yi hasashe, ko kuma ya tsaya.\n\nKu rubuta shi da hanyar RCTF, cikakke. Rawa: « kai ne wakilin bin diddigin wannan kungiya, mai tsantseni ». Mahalli: ku wane ne, kuna ina, da jumlar « wannan aiki yana gudana shi kadai: ba wanda zai iya amsa tambayoyinka ». Aiki, tare da lokaci daidai: « sanarwar da aka wallafa cikin kwanaki bakwai da suka gabata », ba « sanarwar kwanan nan » ba, wadda ba ta da ma’ana ga na’ura. Tsari: sakamako nawa ne iyaka, a wane jeri, a layi nawa, tare da wane mahadi (lien). Manajan wata kungiyar hadin gwiwa a Ouagadougou, kasar Burkina Faso, da ke bin farashin takin zamani, zai fi amfana idan ya rubuta « farashi biyar a mafi yawa, tare da tushe da ranar kowane farashi » maimakon « fada min farashin ».\n\nA karshe, ku kara dokar halin babu komai: « Idan ba ka sami komai ba, rubuta kawai: Babu sabon abu a wannan mako. » Ba tare da wannan jumla ba, wakilin na iya cike gurbin da tsofaffin sakamako, ko ma wadanda ya kirkira. Wannan ake kira hallucination: amsar karya da aka bayar da tabbaci. Ku rika tanadin halin da babu komai: gajeriyar jumla ta gaskiya ta fi jerin abubuwa na yaudara."
      },
      {
        "title": "Zabar yawan maimaitawa, lokaci, da lokacin kasa da ya dace",
        "body": "Kowace rana ko kowane mako? Ku zabi yawan maimaitawar da za ku karanta sakamakon da gaske. Bin diddigin tallafi na kowace rana zai cika mataimakin AI dinku da jerin abubuwan da ba za ku bude ba; sau daya a mako ya isa sau da yawa. Akasin haka, bayanin safiya yana da ma’ana ne kawai idan ya iso kowace rana kafin ganawarku ta farko. Ku tuna da kasuwar mako ta unguwarku: ana zuwa ranar da ake cin ta, ba kowace rana ba.\n\nKu zabi lokaci kuma gwargwadon al’adar aikinku: dole sakamakon ya kasance a shirye kafin lokacin da za ku yi amfani da shi. Idan kuna duba ayyukanku kowace Litinin karfe takwas, ku saita aikin a karfe bakwai. Sannan ku duba lokacin kasarku (fuseau horaire), wato agogon da kasar ke bi. Karfe bakwai a Bamako ba karfe bakwai ne a Nairobi ko Paris ba. Wata mai ba da shawara a Nairobi, kasar Kenya, wadda manhajarta ta ci gaba da bin agogon wata kasa bayan tafiya, za ta karbi bayanin safiyarta a tsakar dare, ko a makare.\n\nA karshe, ku gwada kafin ku jira. Bayan kun ajiye aikin, ku kaddamar da shi sau daya da hannu: nan take za ku ga ko umurnin yana ba da abin da kuke so, ba tare da jiran Litinin mai zuwa ba. Gwargwadon kayan aikin, ku duba kuma sharuddan gudanarwa, misali ko dole manhajar ta kasance a bude, da yadda sanarwar ke isowa gare ku."
      },
      {
        "title": "Karanta da tabbatar da sakamakon, da sanin iyakokin Hanya ta 2",
        "body": "Sakamakon yana isowa cikin mataimakin AI, sau da yawa tare da sanarwa. Wakilin yana bincike yana takaitawa. Ba ya neman tallafi a madadinku, ba ya aika komai, ba ya amsa wa kowa. Ku ne kuke karantawa, kuke bude mahadai, kuke yanke shawara. Idan wata rana tana dauke da alamar « a tabbatar », ku bude shafin hukuma ku duba ta da kanku: ranar karewa da aka kwafa ba daidai ba na iya sa a rasa takardar neman tallafi. Wakilin yana kama da mai koyon sana’a da ke shirya kayan aiki kafin ku iso bita: aikin ya ci gaba, amma shawarar taku ce.\n\nHanya ta 2 tana da iyaka bayyananniya: tana farawa a kan lokaci, ba a kan wani abu da ya faru ba. Ba ta mayar da martani ga sakon da ya iso ko fom da aka cika: wannan zai zama Hanya ta 4, da n8n. Kuma idan aikinku yana bukatar karanta e-mail dinku ko kalandarku, kamar bayanin safiya (rawa: mataimakin farkon rana; mahalli: damar shiga akwatin e-mail da kalandarku; aiki: karanta e-mail da ba a karanta ba da jadawalin ranar; tsari: aya uku a mafi yawa, ba tare da amsa wani e-mail ba), yana bukatar masu hadawa (connecteurs) na Hanya ta 3.\n\nIdan wannan aiki babu shi a asusunku, kada ku karaya. Ku kirkiri tunatarwa mai maimaituwa a kalandarku, tare da cikakken umurnin a cikin bayanin kula: a lokacin da aka kayyade, ku manna shi a cikin mataimakin AI dinku. Ba shi da cikakken sarrafa kansa, amma yana da tsari. Wata kungiya a Conakry, kasar Guinea, za ta iya rike bin diddiginta na mako-mako haka ba tare da jiran kayan aiki mafi kyau ba, kuma daga baya ta koma Hanya ta 4."
      }
    ],
    "example": {
      "title": "Fatoumata a Bamako: bin diddigin tallafi da ke tashi shi kadai kowace Litinin karfe bakwai",
      "challenge": "Fatoumata jami’ar shirye-shirye ce a wata kungiya mai zaman kanta (ONG) a Bamako, kasar Mali, wadda ke tallafa wa kungiyoyin mata masu lambun kayan lambu (labarin kirkira ne). Tun Darasi 1, tana da takardar bayanin wakilinta na bin diddigi. Amma makon da ya gabata ya yi nauyi: tafiyar aiki a karkara, taruka uku, rahoto da za ta mika. Ba ta kaddamar da binciken tallafi ba. Wakilinta yana jira har sai ta yi masa magana. Bin diddigin da ya dogara da tunaninta yana nufin rasa sanarwar neman tallafi.",
      "solution": "A cikin mataimakin AI dinta, ta kirkiri aikin da aka tsara lokacinsa mai suna « Bin diddigin tallafi na Litinin » kuma ta manna cikakken umurnin RCTF: « Rawa: kai ne wakilin bin diddigin tallafi na kungiyarmu, mai tsantseni. Mahalli: kungiyar tana Bamako kuma tana tallafa wa kungiyoyin mata masu lambun kayan lambu. Wannan aiki yana gudana shi kadai, kowace Litinin: ba wanda zai iya amsa tambayoyinka. Aiki: nemo a yanar gizo sanarwar neman tallafi da aka wallafa cikin kwanaki bakwai da suka gabata kan noman kayan lambu da dogaro da kai na mata a fannin tattalin arziki, a Mali da Afirka ta Yamma. Bude kowane shafin hukuma kafin ka amsa. Tsari: sanarwa biyar a mafi yawa, daga mafi amfani zuwa mafi karancin amfani, kowace a layi uku: mai bayar da tallafi da take, ranar karewa, mahadin hukuma. Idan ba a tabbatar da wata rana ba, rubuta “a tabbatar da ranar”. Kada ka kirkiri komai. Idan ba ka sami komai ba, rubuta kawai: “Babu sabon abu a wannan mako.” » Ta saita lokaci a kowace Litinin karfe bakwai, ta duba lokacin kasar Bamako, ta ajiye, sannan ta kaddamar da aikin sau daya da hannu don gwadawa. A Litinin mai zuwa, karfe bakwai, sakamakon ya iso: sanarwa hudu, kowace da mai bayar da tallafi, ranar karewa da mahadi, kuma daya daga cikin ranakun tana da alamar « a tabbatar ». Ta bude wannan mahadi ta duba ranar a shafin hukuma.",
      "impact": "Ko bayan mako mai nauyi, jerin yana nan a safiyar Litinin, ba tare da Fatoumata ta tuna da shi ba. Tana karantawa, ta duba mahadi daya, kuma ta zabi sanarwar da za ta gabatar wa darektarta. Bin diddigin bai sake dogara da tunaninta ba; amma shawarar tana nan a hannunta."
    },
    "practice": {
      "title": "Ku tsara wakilinku na farko mai aiki a lokaci kayyadadde",
      "instructions": [
        "Ku zabi aikin da ke dawowa a rana kayyadadda (bin diddigi, takaitaccen bayanin mako, shirin ranar Litinin), sannan ku rubuta cikakken umurnin RCTF da ke tsaye da kansa: lokaci, tsari, iyakar adadin sakamako, da jumlar « Babu sabon abu » idan jerin babu komai. Kuna iya farawa daga wannan samfuri ku maye gurbin abin da ke cikin baka: « Rawa: kai ne wakilin bin diddigin tallafi na [sunan kungiya], mai tsantseni. Mahalli: [kungiyar] tana [birni] kuma [abin da take yi, ga su wa]. Wannan aiki yana gudana shi kadai, kowace [Litinin]: ba wanda zai iya amsa tambayoyinka. Aiki: nemo a yanar gizo sanarwar neman tallafi da aka wallafa cikin kwanaki bakwai da suka gabata kan [jigoginku], a [kasa ko yanki]. Bude kowane shafin hukuma kafin ka amsa. Tsari: sanarwa biyar a mafi yawa, daga mafi amfani zuwa mafi karancin amfani, kowace a layi uku: mai bayar da tallafi da take, ranar karewa, mahadin hukuma. Idan ba a tabbatar da wata rana ba, rubuta “a tabbatar da ranar”. Kada ka kirkiri komai. Idan ba ka sami komai ba, rubuta kawai: “Babu sabon abu a wannan mako.” »",
        "Ku kirkiri aikin da aka tsara lokacinsa a cikin mataimakin AI dinku, ku saita yawan maimaitawa da lokacin kasarku, sannan ku kaddamar da shi sau daya da hannu don ganin sakamakon ba tare da jira ba. Idan wannan aiki babu shi a asusunku, ku tsara tunatarwa mai maimaituwa a kalandarku tare da umurnin a cikin bayanin kula, ku ajiye shi don Hanya ta 4 (n8n).",
        "A sakamakon farko da aka tsara, ku duba akalla mahadai biyu a shafukan hukuma, sannan ku gyara umurnin idan da bukata (lokaci, tsari, adadin sakamako, dokar halin babu komai)."
      ],
      "observation": "Za ku lura cewa wakilin yana aiki ba tare da ku ba: sakamakon yana isowa a lokacin da aka tsara, ko ba ku tuna da shi ba. Za ku ga kuma cewa ingancinsa ya dogara da umurnin: idan ya fi cika, gyara yana raguwa. Kuma za ku lura cewa tabbatarwa aikinku ne har yanzu: mahadin da aka bude da ranar da aka duba sun fi jerin da aka karba ido rufe."
    },
    "quiz": [
      {
        "question": "Daga me aikin da aka tsara lokacinsa ya kunshi?",
        "options": [
          { "key": "A", "text": "Daga lokaci kawai" },
          { "key": "B", "text": "Daga cikakken umurni da lokaci" },
          { "key": "C", "text": "Daga mai hadawa da Gmail na tilas" },
          { "key": "D", "text": "Daga sabar kwamfuta da za ku girka da kanku" }
        ],
        "answer": "B",
        "explanation": "Aikin da aka tsara lokacinsa shi ne cikakken umurni tare da lokaci. Lokaci shi kadai ba ya fadin abin da za a yi. Babu mai hadawa da ya zama tilas: ana bukatarsa ne kawai idan aikin zai karanta e-mail dinku ko kalandarku. Kuma babu sabar kwamfuta da za a girka: mataimakin AI ne ke kula da gudanarwa."
      },
      {
        "question": "Me ya sa dole umurnin aikin da aka tsara lokacinsa ya fadi komai?",
        "options": [
          { "key": "A", "text": "Saboda ba wanda zai kasance don amsa tambayoyin wakilin" },
          { "key": "B", "text": "Saboda mataimakin AI yana karanta layin farko kawai" },
          { "key": "C", "text": "Saboda dogon umurni yana gudana da sauri" },
          { "key": "D", "text": "Saboda lokaci yana maye gurbin tsari" }
        ],
        "answer": "A",
        "explanation": "Aikin yana gudana yayin da kuke wani wuri. Idan umurnin ya bar wani abu a boye, wakilin ba zai iya tambayarku karin bayani ba: zai yi hasashe ko ya tsaya. Shi ya sa ake bukatar cikakken umurnin RCTF, tare da lokaci daidai, tsari, iyakar adadin sakamako da abin da za a yi idan babu komai."
      },
      {
        "question": "Fatoumata ta saita bin diddiginta « kowace Litinin karfe bakwai ». Me kuma take dubawa?",
        "options": [
          { "key": "A", "text": "Launin sanarwa" },
          { "key": "B", "text": "Harshen madannin rubutunta" },
          { "key": "C", "text": "Adadin abokan huldarta" },
          { "key": "D", "text": "Lokacin kasar, wato na Bamako" }
        ],
        "answer": "D",
        "explanation": "Karfe bakwai a Bamako ba karfe bakwai ne a wata kasa ba. Idan ba a saita lokacin kasa daidai ba, aikin zai tashi a lokacin da bai dace ba: a tsakar dare, ko a makare har ya rasa amfani. Saiti ne da za a duba duk lokacin da kuka kirkiri aiki."
      },
      {
        "question": "A ranar Litinin, ba a wallafa wata sanarwa ba. Wace doka ce ke tabbatar wa Fatoumata amsa ta gaskiya?",
        "options": [
          { "key": "A", "text": "« Rubuta da Faransanci »" },
          { "key": "B", "text": "« Sanarwa biyar a mafi yawa »" },
          { "key": "C", "text": "« Idan ba ka sami komai ba, rubuta kawai: Babu sabon abu a wannan mako »" },
          { "key": "D", "text": "« Kai ne wakilin bin diddigi »" }
        ],
        "answer": "C",
        "explanation": "Ba tare da doka don halin babu komai ba, wakilin na iya cike jerin da tsofaffin sanarwa ko na kirkira: hallucination, wato amsar karya da aka bayar da tabbaci. Jumlar « Babu sabon abu a wannan mako » tana ba shi amsa ta gaskiya da zai bayar idan babu komai."
      },
      {
        "question": "Jerin Litinin yana dauke da rana mai alamar « a tabbatar ». Me Fatoumata take yi?",
        "options": [
          { "key": "A", "text": "Tana neman tallafin nan take" },
          { "key": "B", "text": "Tana bude mahadin kuma tana duba ranar a shafin hukuma" },
          { "key": "C", "text": "Tana goge aikin da aka tsara lokacinsa" },
          { "key": "D", "text": "Tana tura jerin ga masu bayar da tallafi" }
        ],
        "answer": "B",
        "explanation": "Wakilin yana bincike yana takaitawa; Fatoumata ce ke tabbatarwa kuma ke yanke shawara. Ana duba rana mai alamar « a tabbatar » a shafin hukuma na mai bayar da tallafi kafin kowace shawara: ranar karewa da ba daidai ba na iya sa a rasa takardar neman tallafi."
      }
    ],
    "reflection": "Wane aiki ne ke dawowa gare ku a rana kayyadadda, kowace rana ko kowane mako, kuma me ya kamata umurninsa ya fada don wakili ya iya yin sa shi kadai, ba tare da ya taba tambayar ku wani abu ba?",
    "glossary": [
      {
        "term": "Tâche planifiée (aikin da aka tsara lokacinsa)",
        "definition": "Umurni da aka hada da lokaci (kowace rana, kowane mako) wanda mataimakin AI ke aiwatarwa shi kadai a lokacin da aka kayyade. Shi ne zuciyar Hanya ta 2, kamar agogon kararrawa da ake saitawa sau daya."
      },
      {
        "term": "Déclencheur (abin da ke tayar da aiki)",
        "definition": "Abin da ke sa wakili ya fara aiki. Da Hanya ta 1, bukatarku ce; da Hanya ta 2, agogo ne; da Hanya ta 4, wani abu ne da ya faru, kamar sakon da ya iso."
      },
      {
        "term": "Consigne qui tient seule (umurnin da ke tsaye da kansa)",
        "definition": "Cikakken umurnin RCTF da ke fadin komai saboda ba wanda zai amsa tambayoyin wakilin: lokaci daidai, tsari, iyakar adadin sakamako, da abin da za a yi idan babu komai."
      },
      {
        "term": "Fuseau horaire (lokacin kasarku)",
        "definition": "Agogon da wata kasa ko yanki ke bi. Karfe bakwai a Bamako ba karfe bakwai ne a Nairobi ba: wannan saiti ne ke tantance ainihin lokacin da aikinku zai tashi."
      },
      {
        "term": "Règle « Rien de nouveau » (dokar « Babu sabon abu »)",
        "definition": "Jumlar da aka saka a cikin umurni wadda ke gaya wa wakilin abin da zai rubuta idan bai sami komai ba. Tana hana shi cike gurbin da tsofaffin sakamako ko na kirkira."
      },
      {
        "term": "Hallucination (amsar karya da aka bayar da tabbaci)",
        "definition": "Amsar karya da AI ke bayarwa da tabbaci, misali sanarwar neman tallafi da babu ita ko ranar karewa da ba daidai ba. Shi ya sa ake tanadin halin babu komai kuma ake duba mahadai."
      }
    ]
  }
};
