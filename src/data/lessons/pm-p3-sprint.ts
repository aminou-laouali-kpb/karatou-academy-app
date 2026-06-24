import { Language } from '../translations';
import { LessonContent } from '../lessonContent';

// Module « Gestion de Projet » — leçon p3 (Organiser un sprint — une semaine de travail, des livrables clairs)
// Trilingue FR / EN / HA. ⚠️ Traductions HA à faire valider par un locuteur natif haoussa.
export const pmLessonP3: Record<Language, LessonContent> = {
  "fr": {
    "id": "p3",
    "lessonNumber": 3,
    "title": "Organiser un sprint — une semaine de travail, des livrables clairs",
    "objective": "À la fin de cette leçon, vous saurez planifier un cycle court de travail — appelé sprint — avec un objectif clair, une liste de tâches et des livrables concrets. Vous saurez le faire même dans une petite équipe et avec peu d’outils, en utilisant un simple tableau mural ou votre téléphone. Vous saurez aussi animer un point quotidien court et une revue de fin de sprint adaptés au terrain et au travail hors-ligne.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Le principe du sprint",
        "body": "Un sprint, c’est un cycle de travail court et régulier — généralement une à deux semaines — au bout duquel vous obtenez quelque chose de concret et de fini. Au lieu de vous lancer dans un projet de six mois sans repère, vous découpez le travail en petites étapes que vous pouvez réellement terminer. Pensez à une campagne agricole : on ne plante pas, n’arrose pas et ne récolte pas tout en même temps. On avance par étapes, et chaque étape a son moment et son résultat visible.\n\nLe sprint apporte deux choses précieuses. D’abord un rythme : l’équipe sait que chaque vendredi, par exemple, on fait le point sur ce qui a été livré. Ensuite de la régularité : au lieu de tout reporter à la fin, on produit un petit résultat utile à chaque cycle. Pour une équipe terrain qui sensibilise des villages, cela veut dire qu’à la fin de la première semaine, on a déjà couvert deux villages — pas seulement des promesses.\n\nSoyons honnêtes : pour une tâche minuscule, faite seul en une journée, organiser un sprint serait excessif. La méthode prend tout son sens quand plusieurs personnes travaillent ensemble sur plusieurs semaines. Le sprint n’est pas une règle rigide imposée d’en haut ; c’est du bon sens outillé, une façon simple de garder le cap et de voir l’avancement."
      },
      {
        "title": "L’objectif de sprint et le backlog",
        "body": "Avant de commencer un sprint, l’équipe répond à une question simple : « Qu’est-ce qu’on s’engage à livrer cette semaine ? » La réponse, c’est l’objectif de sprint. Il doit être clair, réaliste et utile. Par exemple : « Sensibiliser trois villages et collecter les coordonnées de cinquante familles intéressées. » Un bon objectif tient en une phrase et tout le monde le comprend.\n\nPour choisir cet objectif, on s’appuie sur le backlog. Le backlog, c’est tout simplement la liste de tout ce qui reste à faire dans le projet, classée par ordre d’importance. Imaginez le carnet d’une gérante de coopérative : elle y note toutes les commandes et tâches en attente, et elle traite d’abord les plus urgentes. Le backlog joue le même rôle — c’est la réserve de travail dans laquelle on pioche.\n\nLe geste essentiel, c’est de choisir. On ne met pas tout le backlog dans un sprint : on prend seulement ce que l’équipe peut vraiment terminer en une semaine. Mieux vaut promettre peu et livrer, que promettre beaucoup et décevoir. Si vous débutez, prenez deux ou trois tâches de moins que ce que vous croyez possible : les imprévus du terrain — une moto en panne, une pluie, un agent malade — sont la règle, pas l’exception."
      },
      {
        "title": "Le tableau Kanban (À faire / En cours / Fait)",
        "body": "Une fois l’objectif et les tâches choisis, il faut rendre le travail visible. Le tableau Kanban sert exactement à cela. C’est un tableau divisé en trois colonnes : « À faire », « En cours » et « Fait ». Chaque tâche est écrite sur une petite carte — un bout de papier, un pense-bête — et passe d’une colonne à l’autre au fur et à mesure qu’elle avance. D’un seul coup d’œil, toute l’équipe voit où en est le travail.\n\nLe grand avantage, c’est que cela ne demande aucun logiciel payant. Un tableau mural avec trois colonnes tracées à la craie et des feuilles collées fonctionne très bien dans un bureau de terrain. Sans mur disponible, un cahier partagé ou un message épinglé sur un groupe WhatsApp fait l’affaire : on liste les tâches sous trois titres et on déplace les lignes. Si l’équipe a une bonne connexion et veut un outil numérique, Trello est une option gratuite — mais elle reste facultative.\n\nLe Kanban a aussi une vertu cachée : il révèle les blocages. Si trois cartes restent coincées en « En cours » depuis plusieurs jours, c’est le signe qu’une personne est surchargée ou qu’une tâche attend quelque chose. Voir le problème, c’est déjà commencer à le résoudre. Pour une équipe dispersée sur le terrain, prendre une photo du tableau et l’envoyer le soir sur WhatsApp permet à chacun de rester informé, même hors-ligne une partie de la journée."
      },
      {
        "title": "Les rituels essentiels",
        "body": "Un sprint tient grâce à deux rituels simples. Le premier est le point quotidien, souvent appelé stand-up. C’est une réunion très courte — cinq à dix minutes — où chacun répond à trois questions : qu’est-ce que j’ai fait hier, qu’est-ce que je fais aujourd’hui, qu’est-ce qui me bloque. Le but n’est pas de tout discuter, mais de se synchroniser vite et de repérer les obstacles. On l’appelle « stand-up » parce qu’en restant debout, on garde la réunion courte.\n\nSur le terrain, ce point quotidien s’adapte. Une équipe dispersée dans plusieurs villages peut le tenir par un appel téléphonique groupé de cinq minutes le matin, ou par un court message vocal chacun son tour sur WhatsApp. Hors-ligne une partie de la journée ? Chacun envoie ses trois réponses le soir quand le réseau revient. L’important, c’est la régularité, pas la forme.\n\nLe second rituel est la revue de fin de sprint. À la fin du cycle, l’équipe se réunit et regarde honnêtement ce qui a été livré par rapport à l’objectif. On célèbre ce qui a marché et on note ce qui a coincé, sans chercher de coupable. Ces enseignements alimentent le sprint suivant : on ajuste le nombre de tâches, on règle les blocages récurrents. C’est ainsi que l’équipe apprend à mieux estimer son rythme — ce qu’on appellera plus loin la vélocité."
      }
    ],
    "example": {
      "title": "L’équipe terrain de l’ONG Yelen et sa campagne de sensibilisation en sprints",
      "challenge": "L’ONG Yelen doit sensibiliser quinze villages d’une zone rurale du Mali à l’hygiène de l’eau en six semaines. L’équipe compte quatre agents, une seule moto partagée, et un réseau téléphonique capricieux. Au premier essai, sans organisation, les agents se dispersent : certains villages sont visités deux fois, d’autres oubliés, et personne ne sait vraiment où en est la campagne.",
      "solution": "La coordinatrice découpe la campagne en sprints d’une semaine. Chaque lundi, l’équipe fixe un objectif clair — par exemple « couvrir trois villages et former un relais communautaire dans chacun ». Les tâches sont écrites sur un tableau mural à trois colonnes au bureau, et une photo en est envoyée chaque soir sur le groupe WhatsApp. Chaque matin, un appel groupé de cinq minutes sert de point quotidien : qui va où, quel village reste à faire, quel blocage signaler. Le vendredi, une courte revue fait le bilan de la semaine.",
      "impact": "En suivant ce rythme, l’équipe a couvert les quinze villages en cinq semaines au lieu des six prévues, sans aucun village oublié ni visité deux fois. Le point quotidien a permis de repérer dès le mardi qu’un agent était bloqué faute de moto, et de réorganiser les trajets le jour même. Ces chiffres restent propres à ce contexte et dépendent de la saison et de l’état des pistes, mais le gain principal est ailleurs : l’équipe savait en permanence où elle en était."
    },
    "practice": {
      "title": "Planifier votre premier sprint d’une semaine",
      "instructions": [
        "Choisissez un projet réel sur lequel vous travaillez et écrivez en une seule phrase un objectif de sprint réaliste pour la semaine qui vient — par exemple : « Préparer et tester le questionnaire d’enquête auprès de cinq familles. » Notez-le en haut d’une feuille de papier ou d’une note sur votre téléphone.",
        "Sous cet objectif, listez exactement cinq tâches concrètes nécessaires pour l’atteindre. Chaque tâche doit être assez petite pour être terminée en une journée ou deux, et commencer par un verbe d’action (rédiger, appeler, vérifier, imprimer…).",
        "Tracez trois colonnes — « À faire », « En cours », « Fait » — sur la même feuille ou dans une note, et placez vos cinq tâches dans la colonne « À faire ». Pendant la semaine, déplacez chaque tâche vers la droite à mesure qu’elle avance, et prenez une photo du tableau chaque soir."
      ],
      "observation": "À la fin de la semaine, regardez votre tableau : combien de tâches ont atteint la colonne « Fait » ? Vous découvrirez sans doute que terminer cinq tâches est plus difficile que prévu, à cause des imprévus du terrain. C’est normal et précieux : cette première mesure vous indique le rythme réel de votre travail. Au prochain sprint, ajustez le nombre de tâches en conséquence — c’est ainsi qu’on apprend à planifier juste."
    },
    "quiz": [
      {
        "question": "Qu’est-ce qui caractérise le mieux un sprint ?",
        "options": [
          {
            "key": "A",
            "text": "Un projet long de six mois planifié en une seule fois du début à la fin"
          },
          {
            "key": "B",
            "text": "Un cycle de travail court et régulier (une à deux semaines) au bout duquel on livre un résultat concret"
          },
          {
            "key": "C",
            "text": "Une réunion d’urgence convoquée seulement quand un problème grave survient"
          },
          {
            "key": "D",
            "text": "Un logiciel payant que toute l’équipe doit installer sur son téléphone"
          }
        ],
        "answer": "B",
        "explanation": "Un sprint est un cycle de travail court et régulier, généralement d’une à deux semaines, qui se termine par un livrable concret. Ce rythme régulier permet à l’équipe d’avancer par étapes et de voir son progrès, comme une campagne agricole menée étape par étape."
      },
      {
        "question": "À quoi sert le backlog dans la préparation d’un sprint ?",
        "options": [
          {
            "key": "A",
            "text": "C’est la liste de tout ce qui reste à faire dans le projet, classée par importance, dans laquelle on pioche les tâches du sprint"
          },
          {
            "key": "B",
            "text": "C’est le compte rendu rédigé une fois le sprint terminé"
          },
          {
            "key": "C",
            "text": "C’est le nom donné à la salle où se tient la réunion d’équipe"
          },
          {
            "key": "D",
            "text": "C’est la liste des personnes absentes pendant la semaine"
          }
        ],
        "answer": "A",
        "explanation": "Le backlog est la réserve de travail du projet : la liste de toutes les tâches restantes, classées par ordre d’importance. Au début de chaque sprint, l’équipe y choisit ce qu’elle s’engage à livrer, comme une gérante de coopérative qui traite d’abord les commandes les plus urgentes de son carnet."
      },
      {
        "question": "Que représentent les trois colonnes d’un tableau Kanban ?",
        "options": [
          {
            "key": "A",
            "text": "Lundi, Mercredi et Vendredi"
          },
          {
            "key": "B",
            "text": "Le budget, le temps et les ressources humaines"
          },
          {
            "key": "C",
            "text": "« À faire », « En cours » et « Fait » — l’avancement de chaque tâche"
          },
          {
            "key": "D",
            "text": "Le chef d’équipe, les agents et les bénéficiaires"
          }
        ],
        "answer": "C",
        "explanation": "Un tableau Kanban se divise en trois colonnes — « À faire », « En cours » et « Fait » — et chaque tâche, écrite sur une carte, passe de gauche à droite à mesure qu’elle avance. D’un coup d’œil, l’équipe voit l’état du travail. Un simple tableau mural ou un message WhatsApp suffit, sans logiciel payant."
      },
      {
        "question": "Quel est le but principal du point quotidien (stand-up) ?",
        "options": [
          {
            "key": "A",
            "text": "Discuter en détail tous les problèmes du projet pendant une heure"
          },
          {
            "key": "B",
            "text": "Se synchroniser rapidement (cinq à dix minutes) et repérer les blocages de chacun"
          },
          {
            "key": "C",
            "text": "Rédiger le rapport final destiné au bailleur de fonds"
          },
          {
            "key": "D",
            "text": "Décider du salaire de chaque membre de l’équipe"
          }
        ],
        "answer": "B",
        "explanation": "Le point quotidien est une réunion très courte où chacun répond à trois questions : ce que j’ai fait, ce que je fais aujourd’hui, ce qui me bloque. Le but est de se synchroniser vite et de repérer les obstacles, pas de tout discuter. Sur le terrain, il peut se faire par appel groupé ou message vocal WhatsApp."
      },
      {
        "question": "Pourquoi vaut-il mieux choisir moins de tâches que prévu pour un sprint ?",
        "options": [
          {
            "key": "A",
            "text": "Parce que livrer ce qu’on a promis vaut mieux que promettre beaucoup et décevoir, surtout avec les imprévus du terrain"
          },
          {
            "key": "B",
            "text": "Parce que le tableau Kanban ne peut contenir que trois cartes au maximum"
          },
          {
            "key": "C",
            "text": "Parce qu’un sprint doit toujours durer moins d’une journée"
          },
          {
            "key": "D",
            "text": "Parce que le bailleur interdit de planifier plus de deux tâches à la fois"
          }
        ],
        "answer": "A",
        "explanation": "Un livrable est un résultat concret et fini, pas une simple promesse. Mieux vaut s’engager sur peu de tâches et les terminer que d’en promettre trop et décevoir. Les imprévus du terrain — moto en panne, pluie, agent malade — sont la règle ; prévoir une marge permet de tenir sa cadence et de finir ce qu’on a annoncé."
      }
    ],
    "reflection": "Pensez à un projet réel sur lequel vous travaillez en ce moment. Comment pourriez-vous le découper en sprints d’une ou deux semaines, et quel serait l’objectif clair de votre tout premier sprint ? Quels imprévus du terrain devriez-vous anticiper pour rester réaliste dans vos engagements ?",
    "glossary": [
      {
        "term": "Sprint",
        "definition": "Cycle de travail court et régulier, généralement d’une à deux semaines, qui se termine par un livrable concret. Il donne un rythme à l’équipe et permet d’avancer par étapes."
      },
      {
        "term": "Backlog",
        "definition": "Liste de tout ce qui reste à faire dans un projet, classée par ordre d’importance. C’est la réserve de travail dans laquelle l’équipe choisit les tâches de chaque sprint."
      },
      {
        "term": "Kanban",
        "definition": "Tableau divisé en trois colonnes — « À faire », « En cours », « Fait » — sur lequel chaque tâche, écrite sur une carte, avance de gauche à droite. Il rend le travail visible d’un seul coup d’œil."
      },
      {
        "term": "Stand-up (point quotidien)",
        "definition": "Réunion très courte (cinq à dix minutes) où chacun dit ce qu’il a fait, ce qu’il fait aujourd’hui et ce qui le bloque. Elle sert à synchroniser l’équipe et à repérer vite les obstacles."
      },
      {
        "term": "Livrable",
        "definition": "Résultat concret et fini produit à la fin d’un sprint — un document, un village sensibilisé, un questionnaire testé. C’est ce qu’on s’est engagé à livrer, pas une simple promesse."
      },
      {
        "term": "Vélocité",
        "definition": "Quantité de travail qu’une équipe parvient réellement à terminer pendant un sprint. En l’observant sprint après sprint, l’équipe apprend à mieux estimer ce qu’elle peut promettre."
      }
    ]
  },
  "en": {
    "id": "p3",
    "lessonNumber": 3,
    "title": "Organize a sprint — one week of work, clear deliverables",
    "objective": "By the end of this lesson, you will be able to plan a short work cycle — called a sprint — with a clear goal, a list of tasks, and concrete deliverables. You will be able to do this even in a small team and with few tools, using a simple wall board or your phone. You will also be able to run a short daily check-in and an end-of-sprint review adapted to fieldwork and offline conditions.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "The principle of the sprint",
        "body": "A sprint is a short, regular work cycle — usually one to two weeks — at the end of which you have something concrete and finished. Instead of diving into a six-month project with no landmarks, you break the work into small steps that you can actually complete. Think of a farming season: you do not plant, water, and harvest all at the same time. You move forward step by step, and each step has its moment and its visible result.\n\nThe sprint brings two valuable things. First, a rhythm: the team knows that every Friday, for example, they review what has been delivered. Second, regularity: instead of postponing everything to the end, you produce a small useful result each cycle. For a field team raising awareness in villages, this means that by the end of the first week, two villages have already been covered — not just promises.\n\nLet us be honest: for a tiny task done alone in a single day, organizing a sprint would be overkill. The method makes full sense when several people work together over several weeks. The sprint is not a rigid rule imposed from above; it is common sense with simple tools — an easy way to stay on course and see progress."
      },
      {
        "title": "The sprint goal and the backlog",
        "body": "Before starting a sprint, the team answers a simple question: \"What do we commit to delivering this week?\" The answer is the sprint goal. It must be clear, realistic, and useful. For example: \"Raise awareness in three villages and collect contact details from fifty interested families.\" A good goal fits in one sentence and everyone understands it.\n\nTo choose this goal, you draw on the backlog. The backlog is simply the list of everything left to do in the project, ranked by importance. Picture a cooperative manager's notebook: she writes down all pending orders and tasks, and handles the most urgent ones first. The backlog plays the same role — it is the reserve of work you draw from.\n\nThe essential act is to choose. You do not put the whole backlog into a sprint: you take only what the team can truly finish in one week. It is better to promise little and deliver than to promise a lot and disappoint. If you are just starting, take two or three fewer tasks than you think possible: field surprises — a broken-down motorbike, rain, a sick agent — are the rule, not the exception."
      },
      {
        "title": "The Kanban board (To Do / In Progress / Done)",
        "body": "Once the goal and tasks are chosen, you need to make the work visible. The Kanban board does exactly that. It is a board divided into three columns: \"To Do,\" \"In Progress,\" and \"Done.\" Each task is written on a small card — a slip of paper, a sticky note — and moves from one column to the next as it advances. At a single glance, the whole team sees where the work stands.\n\nThe great advantage is that it requires no paid software. A wall board with three columns drawn in chalk and sheets stuck on works very well in a field office. With no wall available, a shared notebook or a pinned message in a WhatsApp group does the job: you list tasks under three headings and move the lines around. If the team has a good connection and wants a digital tool, Trello is a free option — but it remains optional.\n\nThe Kanban board also has a hidden virtue: it reveals blockages. If three cards stay stuck in \"In Progress\" for several days, it is a sign that someone is overloaded or that a task is waiting for something. Seeing the problem is already starting to solve it. For a team scattered in the field, taking a photo of the board and sending it on WhatsApp in the evening keeps everyone informed, even when offline part of the day."
      },
      {
        "title": "The essential rituals",
        "body": "A sprint holds together thanks to two simple rituals. The first is the daily check-in, often called the stand-up. It is a very short meeting — five to ten minutes — where each person answers three questions: what did I do yesterday, what am I doing today, what is blocking me. The aim is not to discuss everything, but to synchronize quickly and spot obstacles. It is called a \"stand-up\" because staying on your feet keeps the meeting short.\n\nIn the field, this daily check-in adapts. A team spread across several villages can hold it through a five-minute group phone call in the morning, or through a short voice message from each person in turn on WhatsApp. Offline part of the day? Each person sends their three answers in the evening when the network returns. What matters is regularity, not the form.\n\nThe second ritual is the end-of-sprint review. At the end of the cycle, the team gathers and looks honestly at what was delivered against the goal. You celebrate what worked and note what got stuck, without looking for someone to blame. These lessons feed the next sprint: you adjust the number of tasks, you address recurring blockages. This is how the team learns to better estimate its rhythm — what we will later call velocity."
      }
    ],
    "example": {
      "title": "The Yelen NGO field team and its awareness campaign in sprints",
      "challenge": "The Yelen NGO must raise awareness about water hygiene in fifteen villages of a rural area of Mali within six weeks. The team has four agents, a single shared motorbike, and an unreliable phone network. On the first attempt, with no organization, the agents scatter: some villages are visited twice, others forgotten, and no one really knows where the campaign stands.",
      "solution": "The coordinator breaks the campaign into one-week sprints. Every Monday, the team sets a clear goal — for example, \"cover three villages and train one community relay in each.\" The tasks are written on a three-column wall board at the office, and a photo of it is sent every evening to the WhatsApp group. Every morning, a five-minute group call serves as the daily check-in: who is going where, which village remains to be done, what blockage to report. On Friday, a short review takes stock of the week.",
      "impact": "By following this rhythm, the team covered the fifteen villages in five weeks instead of the planned six, with no village forgotten or visited twice. The daily check-in made it possible to spot as early as Tuesday that one agent was stuck for lack of a motorbike, and to reorganize the routes the same day. These figures remain specific to this context and depend on the season and the state of the tracks, but the main gain lies elsewhere: the team always knew where it stood."
    },
    "practice": {
      "title": "Plan your first one-week sprint",
      "instructions": [
        "Choose a real project you are working on and write, in a single sentence, a realistic sprint goal for the coming week — for example: \"Prepare and test the survey questionnaire with five families.\" Note it at the top of a sheet of paper or a note on your phone.",
        "Under this goal, list exactly five concrete tasks needed to reach it. Each task should be small enough to be finished in one or two days, and start with an action verb (write, call, check, print…).",
        "Draw three columns — \"To Do,\" \"In Progress,\" \"Done\" — on the same sheet or in a note, and place your five tasks in the \"To Do\" column. During the week, move each task to the right as it advances, and take a photo of the board every evening."
      ],
      "observation": "At the end of the week, look at your board: how many tasks reached the \"Done\" column? You will probably discover that finishing five tasks is harder than expected, because of field surprises. This is normal and valuable: this first measurement tells you the real rhythm of your work. In the next sprint, adjust the number of tasks accordingly — this is how you learn to plan accurately."
    },
    "quiz": [
      {
        "question": "What best characterizes a sprint?",
        "options": [
          {
            "key": "A",
            "text": "A long six-month project planned all at once from start to finish"
          },
          {
            "key": "B",
            "text": "A short, regular work cycle (one to two weeks) at the end of which you deliver a concrete result"
          },
          {
            "key": "C",
            "text": "An emergency meeting called only when a serious problem arises"
          },
          {
            "key": "D",
            "text": "A paid piece of software that the whole team must install on their phones"
          }
        ],
        "answer": "B",
        "explanation": "A sprint is a short, regular work cycle, usually one to two weeks, that ends with a concrete deliverable. This steady rhythm lets the team move forward step by step and see its progress, like a farming season carried out stage by stage."
      },
      {
        "question": "What is the backlog used for when preparing a sprint?",
        "options": [
          {
            "key": "A",
            "text": "It is the list of everything left to do in the project, ranked by importance, from which the sprint tasks are drawn"
          },
          {
            "key": "B",
            "text": "It is the report written once the sprint is over"
          },
          {
            "key": "C",
            "text": "It is the name given to the room where the team meeting is held"
          },
          {
            "key": "D",
            "text": "It is the list of people absent during the week"
          }
        ],
        "answer": "A",
        "explanation": "The backlog is the project's reserve of work: the list of all remaining tasks, ranked by importance. At the start of each sprint, the team chooses from it what it commits to delivering, like a cooperative manager who handles the most urgent orders in her notebook first."
      },
      {
        "question": "What do the three columns of a Kanban board represent?",
        "options": [
          {
            "key": "A",
            "text": "Monday, Wednesday, and Friday"
          },
          {
            "key": "B",
            "text": "Budget, time, and human resources"
          },
          {
            "key": "C",
            "text": "\"To Do,\" \"In Progress,\" and \"Done\" — the progress of each task"
          },
          {
            "key": "D",
            "text": "The team leader, the agents, and the beneficiaries"
          }
        ],
        "answer": "C",
        "explanation": "A Kanban board is divided into three columns — \"To Do,\" \"In Progress,\" and \"Done\" — and each task, written on a card, moves from left to right as it advances. At a glance, the team sees the state of the work. A simple wall board or a WhatsApp message is enough, with no paid software."
      },
      {
        "question": "What is the main purpose of the daily check-in (stand-up)?",
        "options": [
          {
            "key": "A",
            "text": "To discuss all the project's problems in detail for an hour"
          },
          {
            "key": "B",
            "text": "To synchronize quickly (five to ten minutes) and spot each person's blockages"
          },
          {
            "key": "C",
            "text": "To write the final report for the funder"
          },
          {
            "key": "D",
            "text": "To decide each team member's salary"
          }
        ],
        "answer": "B",
        "explanation": "The daily check-in is a very short meeting where each person answers three questions: what I did, what I am doing today, what is blocking me. The aim is to synchronize quickly and spot obstacles, not to discuss everything. In the field, it can be done by group call or WhatsApp voice message."
      },
      {
        "question": "Why is it better to choose fewer tasks than expected for a sprint?",
        "options": [
          {
            "key": "A",
            "text": "Because delivering what you promised is better than promising a lot and disappointing, especially with field surprises"
          },
          {
            "key": "B",
            "text": "Because the Kanban board can hold a maximum of three cards"
          },
          {
            "key": "C",
            "text": "Because a sprint must always last less than one day"
          },
          {
            "key": "D",
            "text": "Because the funder forbids planning more than two tasks at a time"
          }
        ],
        "answer": "A",
        "explanation": "A deliverable is a concrete, finished result, not a mere promise. It is better to commit to few tasks and finish them than to promise too many and disappoint. Field surprises — a broken-down motorbike, rain, a sick agent — are the rule; leaving a margin lets you keep your cadence and finish what you announced."
      }
    ],
    "reflection": "Think of a real project you are working on right now. How could you break it into one- or two-week sprints, and what would be the clear goal of your very first sprint? What field surprises should you anticipate to stay realistic in your commitments?",
    "glossary": [
      {
        "term": "Sprint",
        "definition": "A short, regular work cycle, usually one to two weeks, that ends with a concrete deliverable. It gives the team a rhythm and allows it to move forward step by step."
      },
      {
        "term": "Backlog",
        "definition": "The list of everything left to do in a project, ranked by importance. It is the reserve of work from which the team chooses the tasks for each sprint."
      },
      {
        "term": "Kanban",
        "definition": "A board divided into three columns — \"To Do,\" \"In Progress,\" \"Done\" — on which each task, written on a card, moves from left to right. It makes the work visible at a single glance."
      },
      {
        "term": "Stand-up (daily check-in)",
        "definition": "A very short meeting (five to ten minutes) where each person says what they did, what they are doing today, and what is blocking them. It serves to synchronize the team and spot obstacles quickly."
      },
      {
        "term": "Deliverable",
        "definition": "A concrete, finished result produced at the end of a sprint — a document, a village made aware, a tested questionnaire. It is what you committed to delivering, not a mere promise."
      },
      {
        "term": "Velocity",
        "definition": "The amount of work a team actually manages to finish during a sprint. By observing it sprint after sprint, the team learns to better estimate what it can promise."
      }
    ]
  },
  "ha": {
    "id": "p3",
    "lessonNumber": 3,
    "title": "Shirya sprint — mako ɗaya na aiki, sakamako bayyananne",
    "objective": "A ƙarshen wannan darasi, za ku iya tsara gajeren zagayowar aiki — wadda ake kira sprint — tare da manufa bayyananne, jerin ayyuka, da sakamako na zahiri. Za ku iya yin haka ko da a ƙaramar ƙungiya kuma da ƙalilan kayan aiki, ta amfani da allo na bango ko wayar hannunku. Za ku kuma iya gudanar da gajeren taro na yau da kullun da bita na ƙarshen sprint da suka dace da aikin filin da yanayin rashin yanar gizo.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Ƙa’idar sprint",
        "body": "Sprint gajeren zagayowar aiki ne mai tsari — yawanci mako ɗaya zuwa biyu — wanda a ƙarshensa kuke samun wani abu na zahiri da aka gama. Maimakon shiga aikin watanni shida ba tare da alama ba, kuna rarraba aikin zuwa ƙananan matakai da za ku iya gama da gaske. Ku yi tunanin lokacin noma: ba a shuka, ban ruwa da girbi a lokaci ɗaya ba. Ana ci gaba mataki-mataki, kuma kowane mataki yana da lokacinsa da sakamakonsa a bayyane.\n\nSprint yana kawo abubuwa biyu masu daraja. Da farko, salo: ƙungiyar ta san cewa kowace Jumma’a, misali, ana yin bita kan abin da aka samar. Na biyu, tsari: maimakon a jinkirta komai zuwa ƙarshe, ana samar da ƙaramin sakamako mai amfani a kowane zagayowa. Ga ƙungiyar filin da ke wayar da kai a ƙauyuka, wannan na nufin cewa a ƙarshen makon farko, an riga an rufe ƙauyuka biyu — ba alkawura kawai ba.\n\nMu yi gaskiya: ga ƙaramin aiki da aka yi shi kaɗai a rana ɗaya, shirya sprint zai zama wuce gona da iri. Hanyar tana da ma’ana sosai lokacin da mutane da yawa suke aiki tare a cikin makonni da dama. Sprint ba doka ce mai tsauri da aka ɗora daga sama ba; hankali ne mai kayan aiki — hanya mai sauƙi ta riƙe shugabanci da ganin ci gaba."
      },
      {
        "title": "Manufar sprint da backlog",
        "body": "Kafin fara sprint, ƙungiyar tana amsa tambaya mai sauƙi: « Me muke ɗaukar alkawari za mu samar a wannan makon? » Amsar ita ce manufar sprint. Dole ne ta kasance bayyananne, mai yiwuwa, kuma mai amfani. Misali: « Wayar da kai a ƙauyuka uku da tattara lambobin iyalai hamsin masu sha’awa. » Manufa mai kyau tana cikin jumla ɗaya kuma kowa ya fahimce ta.\n\nDon zaɓar wannan manufa, kuna dogara da backlog. Backlog kawai jerin duk abin da ya rage a yi a aikin ne, an tsara shi bisa muhimmanci. Ku yi tunanin littafin gudanar da haɗin gwiwa: tana rubuta duk umarni da ayyukan da ke jira, kuma tana fara magance mafi gaggawa. Backlog yana taka rawa irin wannan — shi ne ma’ajiyar aiki da ake ɗauka daga ciki.\n\nMuhimmin abu shi ne zaɓi. Ba a saka dukkan backlog a cikin sprint ba: ana ɗaukar abin da ƙungiyar za ta iya gamawa da gaske a mako ɗaya kawai. Ya fi kyau a yi alkawarin kaɗan a samar, fiye da yin alkawarin yawa a baci wa mutane rai. Idan kuna farawa, ku ɗauki ayyuka biyu ko uku ƙasa da abin da kuke ganin zai yiwu: abubuwan da ba a tsammani na filin — babur ya lalace, ruwan sama, wakili ya yi rashin lafiya — su ne ƙa’ida, ba banbanci ba."
      },
      {
        "title": "Allon Kanban (Za a yi / Ana yi / An gama)",
        "body": "Da zarar an zaɓi manufa da ayyuka, dole ne a sanya aikin a bayyane. Allon Kanban yana yin daidai wannan. Allo ne da aka raba zuwa ginshiƙai uku: « Za a yi », « Ana yi » da « An gama ». Kowane aiki an rubuta shi a ƙaramar katin — guntun takarda, takardar tunatarwa — kuma yana wucewa daga ginshiƙi zuwa wani yayin da yake ci gaba. A kallo ɗaya, dukkan ƙungiyar tana ganin inda aikin yake.\n\nBabban fa’ida shi ne cewa wannan ba ya buƙatar wani manhaja mai biyan kuɗi. Allon bango mai ginshiƙai uku da aka zana da alli da takardun da aka manne yana aiki sosai a ofishin filin. Idan babu bango, littafin da ake raba ko saƙon da aka manne a rukunin WhatsApp ya wadatar: ana lissafa ayyuka ƙarƙashin kanun layi uku kuma ana matsar da layukan. Idan ƙungiyar tana da kyakkyawan yanar gizo kuma tana son kayan aiki na dijital, Trello zaɓi ne na kyauta — amma ya rage na zaɓi.\n\nKanban yana da kuma kyau ɓoyayye: yana bayyana matsaloli. Idan katuna uku suka tsaya cak a « Ana yi » na kwanaki da dama, alama ce cewa wani mutum ya cika da aiki ko kuma wani aiki yana jiran wani abu. Ganin matsalar shi ne fara warware ta. Ga ƙungiyar da ta watsu a filin, ɗaukar hoton allon da aika shi da yamma a WhatsApp yana ba kowa damar ci gaba da sani, ko da yake babu yanar gizo wani ɓangare na rana."
      },
      {
        "title": "Muhimman al’adu",
        "body": "Sprint yana tsayawa saboda al’adu biyu masu sauƙi. Na farko shi ne taron yau da kullun, wanda ake kira stand-up. Taro ne gajere sosai — minti biyar zuwa goma — inda kowa yana amsa tambayoyi uku: me na yi jiya, me nake yi yau, me ke hana ni. Manufa ba ta tattauna komai ba, sai dai a daidaita da sauri da gano matsaloli. Ana kiransa « stand-up » domin tsayawa a ƙafa yana sa taron ya zama gajere.\n\nA filin, wannan taron yau da kullun yana daidaitawa. Ƙungiyar da ta watsu a ƙauyuka da dama za ta iya yin sa ta hanyar kiran tarho na rukuni na minti biyar da safe, ko ta gajeren saƙon murya kowa bi da bi a WhatsApp. Babu yanar gizo wani ɓangare na rana? Kowa ya aika amsoshinsa uku da yamma lokacin da yanar gizo ya dawo. Abin da ke da muhimmanci shi ne tsari, ba siga ba.\n\nAl’ada ta biyu ita ce bita na ƙarshen sprint. A ƙarshen zagayowa, ƙungiyar tana taruwa kuma tana duban da gaskiya abin da aka samar dangane da manufa. Ana murnar abin da ya yi nasara kuma ana lura da abin da ya makale, ba tare da neman wanda za a zarga ba. Waɗannan darussa suna ciyar da sprint na gaba: ana daidaita yawan ayyuka, ana magance matsalolin da ke maimaituwa. Haka ƙungiyar take koyon ƙididdige salonta da kyau — abin da za mu kira daga baya vélocité (saurin aiki)."
      }
    ],
    "example": {
      "title": "Ƙungiyar filin ta ONG Yelen da yaƙin neman wayar da kai a cikin sprints",
      "challenge": "Ƙungiyar Yelen dole ne ta wayar da kai kan tsabtar ruwa a ƙauyuka goma sha biyar na wani yanki na karkara a Mali a cikin makonni shida. Ƙungiyar tana da wakilai huɗu, babur ɗaya kawai da ake rabawa, da hanyar sadarwa ta tarho da ba ta da aminci. A ƙoƙarin farko, ba tare da tsari ba, wakilan sun watsu: an ziyarci wasu ƙauyuka sau biyu, an manta da wasu, kuma babu wanda ya san da gaske inda yaƙin neman yake.",
      "solution": "Mai daidaitawa ta rarraba yaƙin neman zuwa sprints na mako ɗaya. Kowace Litinin, ƙungiyar tana sanya manufa bayyananne — misali « rufe ƙauyuka uku da horar da wani jagora na al’umma a kowanne ». An rubuta ayyukan a allon bango mai ginshiƙai uku a ofishin, kuma ana aika hoton sa kowace yamma a rukunin WhatsApp. Kowace safiya, kiran rukuni na minti biyar yana zama taron yau da kullun: wa zai je ina, wane ƙauye ya rage a yi, wace matsala za a bayar. Ranar Jumma’a, gajeriyar bita tana ƙididdige makon.",
      "impact": "Ta hanyar bin wannan salon, ƙungiyar ta rufe ƙauyuka goma sha biyar a cikin makonni biyar maimakon shida da aka tsara, ba tare da an manta da wani ƙauye ko an ziyarce shi sau biyu ba. Taron yau da kullun ya ba da damar gano tun ranar Talata cewa wani wakili ya makale saboda rashin babur, da sake tsara hanyoyin a rana ɗaya. Waɗannan lambobi sun rage na wannan yanayin kuma sun dogara da lokacin shekara da yanayin hanyoyi, amma babbar riba tana wani wuri: ƙungiyar ta san koyaushe inda take."
    },
    "practice": {
      "title": "Tsara sprint ɗinku na farko na mako ɗaya",
      "instructions": [
        "Ku zaɓi aiki na gaskiya da kuke yi kuma ku rubuta a jumla ɗaya manufar sprint mai yiwuwa ga makon da ke zuwa — misali: « Shirya da gwada tambayoyin bincike tare da iyalai biyar. » Ku rubuta ta a saman takarda ko a wata bayanin kula a wayarku.",
        "Ƙarƙashin wannan manufa, ku lissafa ayyuka biyar na zahiri da ake bukata don cimma ta. Kowane aiki dole ne ya zama ƙarami isa a gama shi a rana ɗaya ko biyu, kuma ya fara da kalmar aiki (rubuta, kira, duba, buga…).",
        "Ku zana ginshiƙai uku — « Za a yi », « Ana yi », « An gama » — a kan takarda ɗaya ko a wata bayanin kula, kuma ku saka ayyukanku biyar a ginshiƙin « Za a yi ». A cikin makon, ku matsar da kowane aiki zuwa dama yayin da yake ci gaba, kuma ku ɗauki hoton allon kowace yamma."
      ],
      "observation": "A ƙarshen makon, ku duba allonku: ayyuka nawa ne suka kai ginshiƙin « An gama »? Tabbas za ku gano cewa gama ayyuka biyar yana da wahala fiye da yadda ake tsammani, saboda abubuwan da ba a tsammani na filin. Wannan al’ada ce kuma mai daraja: wannan awo na farko yana nuna muku ainihin salon aikinku. A sprint na gaba, ku daidaita yawan ayyuka daidai da haka — haka ake koyon tsarawa daidai."
    },
    "quiz": [
      {
        "question": "Me ya fi siffanta sprint?",
        "options": [
          {
            "key": "A",
            "text": "Doguwar aikin watanni shida da aka tsara gaba ɗaya a lokaci ɗaya daga farko zuwa ƙarshe"
          },
          {
            "key": "B",
            "text": "Gajeren zagayowar aiki mai tsari (mako ɗaya zuwa biyu) wanda a ƙarshensa kuke samar da sakamako na zahiri"
          },
          {
            "key": "C",
            "text": "Taron gaggawa da ake kira kawai lokacin da matsala mai tsanani ta taso"
          },
          {
            "key": "D",
            "text": "Manhaja mai biyan kuɗi da dukkan ƙungiyar dole ta sanya a wayarsu"
          }
        ],
        "answer": "B",
        "explanation": "Sprint gajeren zagayowar aiki ne mai tsari, yawanci mako ɗaya zuwa biyu, wanda ke ƙarewa da sakamako na zahiri. Wannan salon mai tsari yana barin ƙungiyar ta ci gaba mataki-mataki da ganin ci gabanta, kamar lokacin noma da ake gudanarwa mataki-mataki."
      },
      {
        "question": "Don me ake amfani da backlog wajen shirya sprint?",
        "options": [
          {
            "key": "A",
            "text": "Shi ne jerin duk abin da ya rage a yi a aikin, an tsara shi bisa muhimmanci, daga inda ake ɗaukar ayyukan sprint"
          },
          {
            "key": "B",
            "text": "Shi ne rahoton da aka rubuta da zarar sprint ya ƙare"
          },
          {
            "key": "C",
            "text": "Shi ne sunan da aka ba ɗakin da ake yin taron ƙungiyar"
          },
          {
            "key": "D",
            "text": "Shi ne jerin mutanen da ba su nan a cikin makon"
          }
        ],
        "answer": "A",
        "explanation": "Backlog shi ne ma’ajiyar aiki ta aikin: jerin duk sauran ayyuka, an tsara su bisa muhimmanci. A farkon kowane sprint, ƙungiyar tana zaɓa daga ciki abin da ta ɗauki alkawari za ta samar, kamar mai gudanar da haɗin gwiwa wadda take fara magance umarni mafi gaggawa a littafinta."
      },
      {
        "question": "Me ginshiƙai uku na allon Kanban suke wakilta?",
        "options": [
          {
            "key": "A",
            "text": "Litinin, Laraba da Jumma’a"
          },
          {
            "key": "B",
            "text": "Kasafin kuɗi, lokaci da albarkatun ɗan adam"
          },
          {
            "key": "C",
            "text": "« Za a yi », « Ana yi » da « An gama » — ci gaban kowane aiki"
          },
          {
            "key": "D",
            "text": "Shugaban ƙungiya, wakilai da masu amfana"
          }
        ],
        "answer": "C",
        "explanation": "Allon Kanban an raba shi zuwa ginshiƙai uku — « Za a yi », « Ana yi » da « An gama » — kuma kowane aiki, da aka rubuta a katin, yana matsawa daga hagu zuwa dama yayin da yake ci gaba. A kallo ɗaya, ƙungiyar tana ganin halin aikin. Allon bango mai sauƙi ko saƙon WhatsApp ya wadatar, ba tare da manhaja mai biyan kuɗi ba."
      },
      {
        "question": "Menene babbar manufar taron yau da kullun (stand-up)?",
        "options": [
          {
            "key": "A",
            "text": "Tattauna duk matsalolin aikin daki-daki na tsawon sa’a ɗaya"
          },
          {
            "key": "B",
            "text": "Daidaitawa da sauri (minti biyar zuwa goma) da gano matsalolin kowane mutum"
          },
          {
            "key": "C",
            "text": "Rubuta rahoton ƙarshe ga mai ba da taimako"
          },
          {
            "key": "D",
            "text": "Yanke shawarar albashin kowane memba na ƙungiya"
          }
        ],
        "answer": "B",
        "explanation": "Taron yau da kullun taro ne gajere sosai inda kowa yake amsa tambayoyi uku: me na yi, me nake yi yau, me ke hana ni. Manufa ita ce daidaitawa da sauri da gano matsaloli, ba tattauna komai ba. A filin, ana iya yin sa ta kiran rukuni ko saƙon murya na WhatsApp."
      },
      {
        "question": "Me ya sa ya fi kyau a zaɓi ayyuka ƙasa da abin da ake tsammani ga sprint?",
        "options": [
          {
            "key": "A",
            "text": "Domin samar da abin da ka yi alkawari ya fi yin alkawarin yawa a baci wa mutane rai, musamman da abubuwan da ba a tsammani na filin"
          },
          {
            "key": "B",
            "text": "Domin allon Kanban yana iya ɗaukar katuna uku kawai mafi yawa"
          },
          {
            "key": "C",
            "text": "Domin sprint dole ne koyaushe ya ɗauki ƙasa da rana ɗaya"
          },
          {
            "key": "D",
            "text": "Domin mai ba da taimako ya hana tsara ayyuka fiye da biyu a lokaci ɗaya"
          }
        ],
        "answer": "A",
        "explanation": "Sakamako (livrable) abu ne na zahiri da aka gama, ba alkawari kawai ba. Ya fi kyau a ɗauki alkawarin ayyuka kaɗan a gama su fiye da yin alkawarin yawa a baci wa mutane rai. Abubuwan da ba a tsammani na filin — babur ya lalace, ruwan sama, wakili ya yi rashin lafiya — su ne ƙa’ida; barin gibi yana barin ku riƙe salonku da gama abin da kuka sanar."
      }
    ],
    "reflection": "Ku yi tunani kan aiki na gaskiya da kuke yi a yanzu. Ta yaya za ku iya rarraba shi zuwa sprints na mako ɗaya ko biyu, kuma menene manufa bayyananne na sprint ɗinku na farko? Wadanne abubuwan da ba a tsammani na filin ya kamata ku yi tsammaninsu don zama masu gaskiya a alkawuranku?",
    "glossary": [
      {
        "term": "Sprint",
        "definition": "Gajeren zagayowar aiki mai tsari, yawanci mako ɗaya zuwa biyu, wanda ke ƙarewa da sakamako na zahiri. Yana ba ƙungiyar salo kuma yana barin ta ci gaba mataki-mataki."
      },
      {
        "term": "Backlog",
        "definition": "Jerin duk abin da ya rage a yi a aiki, an tsara shi bisa muhimmanci. Shi ne ma’ajiyar aiki da ƙungiyar take zaɓar ayyukan kowane sprint daga ciki."
      },
      {
        "term": "Kanban",
        "definition": "Allo da aka raba zuwa ginshiƙai uku — « Za a yi », « Ana yi », « An gama » — wanda kowane aiki, da aka rubuta a katin, yake matsawa daga hagu zuwa dama. Yana sanya aikin a bayyane a kallo ɗaya."
      },
      {
        "term": "Stand-up (taron yau da kullun)",
        "definition": "Taro gajere sosai (minti biyar zuwa goma) inda kowa yake faɗi abin da ya yi, abin da yake yi yau, da abin da ke hana shi. Yana hidima don daidaita ƙungiyar da gano matsaloli da sauri."
      },
      {
        "term": "Livrable (sakamako)",
        "definition": "Sakamako na zahiri da aka gama da aka samar a ƙarshen sprint — takarda, ƙauye da aka wayar da kai, tambayoyin da aka gwada. Shi ne abin da aka ɗauki alkawari za a samar, ba alkawari kawai ba."
      },
      {
        "term": "Vélocité (saurin aiki)",
        "definition": "Yawan aikin da ƙungiya take gama da gaske a lokacin sprint. Ta hanyar lura da shi sprint bayan sprint, ƙungiyar tana koyon ƙididdige abin da za ta iya yin alkawari da kyau."
      }
    ]
  }
};
