import { Language } from '../../translations';
import { LessonContent } from '../../lessonContent';

// Module « L'IA expliquée simplement » (ia-expliquee-simplement) — leçon is4 (Bien demander : la méthode RCTF)
// Texte aligné sur le CLAUDE.md de production vidéo du cours 1 (docs/production-video/claude-md/).
// Trilingue FR / EN / HA. ⚠️ Traductions HA à faire valider par un locuteur natif haoussa.
export const isLesson4: Record<Language, LessonContent> = {
  "fr": {
    "id": "is4",
    "lessonNumber": 4,
    "title": "Bien demander : la méthode RCTF — rédiger une consigne claire pour l’IA",
    "objective": "À la fin de cette leçon, vous saurez rédiger une consigne claire pour l’IA avec la méthode RCTF, en quatre blocs écrits dans l’ordre : rôle, contexte, tâche, format. Vous saurez mettre vos faits exacts dans le contexte, pour que l’assistant invente moins. Vous saurez aussi relancer la première réponse en une phrase, puis garder les consignes qui marchent pour les réutiliser.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Une demande vague, une réponse inventée",
        "body": "Quand vous écrivez seulement « Écris une pub pour mes pagnes », l’assistant ne sait presque rien : ni qui vous êtes, ni ce que vous vendez exactement, ni ce que vous proposez vraiment. Il doit pourtant répondre. Alors il comble les trous avec ce qui est le plus fréquent dans une publicité : un ton de spot télévisé, une remise, une livraison gratuite. Souvenez-vous de la Leçon 2 : l’IA prédit le plus probable, pas le vrai. Ce qu’elle ajoute n’est pas un mensonge volontaire. C’est une supposition qui a l’air d’un fait.\n\nBeaucoup pensent qu’il existe des formules magiques pour parler à l’IA, ou qu’il faut écrire en anglais. C’est faux. Vous écrivez comme vous parlez, en français simple. Une bonne consigne ressemble à l’explication donnée à un nouvel apprenti, le premier jour à l’atelier. Un patron de garage à Lomé, au Togo, ne dit pas à son apprenti « fais quelque chose ». Il dit : « Tu es mon aide aujourd’hui. Cette moto freine mal et le client revient à midi. Change les plaquettes de frein. Montre-moi les anciennes quand tu as fini. »\n\nLa méthode RCTF met ces explications en ordre. Quatre lettres, quatre blocs : R pour le rôle, C pour le contexte, T pour la tâche, F pour le format. Puis un geste : relancer. Elle marche avec tous les assistants, Claude, Gemini ou ChatGPT, à l’écrit comme à la voix, et dans toutes les langues que l’assistant comprend."
      },
      {
        "title": "Le rôle et le contexte : qui parle, et d’où vous partez",
        "body": "Le rôle (R) dit à l’IA qui elle doit incarner : « Tu es une vendeuse expérimentée et honnête », « Tu es un formateur patient ». Comme un comédien à qui l’on confie un personnage, l’assistant adopte alors un point de vue, un vocabulaire et un ton de départ. Les mots du rôle comptent : « honnête » oriente vers un texte sobre, sans grandes promesses ; « patient » oriente vers des explications pas à pas.\n\nLe contexte (C) est le bloc le plus précieux. Il dit qui vous êtes, où vous êtes, pour qui est le texte et ce qu’il faut éviter. Surtout, il donne les faits exacts que l’IA ne peut pas connaître : couleurs, dates, quantités, horaires, ce que vous proposez et ce que vous ne proposez pas. Une restauratrice d’Abidjan, en Côte d’Ivoire, écrira par exemple : « Je tiens un maquis à Yopougon. Nouveau plat le vendredi : poisson braisé avec attiéké. Le message est pour mes clients habitués. Je ne livre pas. » Sans la dernière phrase, l’assistant pourrait très bien proposer une livraison.\n\nVos faits sont votre premier garde-fou. Plus votre contexte est précis, moins l’assistant a de trous à combler, donc moins il invente. Donnez cependant seulement ce qui sert la tâche : un contexte riche n’est pas un contexte privé, et un mot de passe ou un code mobile money n’a jamais sa place dans une consigne."
      },
      {
        "title": "La tâche et le format : où vous allez, et comment le résultat arrive",
        "body": "La tâche (T) est l’action précise que vous attendez. Commencez par un verbe clair : écris, résume, traduis, liste, explique. Évitez les demandes floues comme « fais quelque chose de bien », qui obligent l’IA à deviner. Une tâche par consigne : c’est comme chez le tailleur, on décrit bien une tenue avant de passer à la suivante. Si vous voulez un message puis une liste, demandez l’un, puis l’autre.\n\nLe format (F) dit comment le résultat doit arriver : la longueur (« 4 lignes maximum »), la structure (liste ou paragraphe), le ton (chaleureux, formel) et la langue. Terminez par une phrase de sécurité : « N’invente aucune information. » Elle réduit le risque d’inventions. Elle ne le supprime pas : vous relirez toujours.\n\nVoici une consigne complète pour un enseignant de Bobo-Dioulasso, au Burkina Faso : « Rôle : tu es un directeur d’école courtois. Contexte : je suis enseignant en CM2 à Bobo-Dioulasso. La réunion des parents a lieu samedi à 9 h, dans la classe. Le message est pour les parents, dont certains lisent peu. Évite les mots compliqués. Tâche : écris un message WhatsApp d’invitation. Format : 3 lignes maximum, ton chaleureux, en français simple. N’invente aucune information. » Dit autrement : le rôle dit qui parle, le contexte dit d’où vous partez, la tâche dit où vous allez, le format dit comment le résultat doit arriver."
      },
      {
        "title": "Relancer, puis garder les consignes qui marchent",
        "body": "Même avec quatre blocs bien remplis, la première réponse est un brouillon. Lisez-la et vérifiez d’abord vos faits : les bonnes couleurs, la bonne date, aucun prix ni aucune promesse que vous n’avez pas donnés. Puis corrigez en une phrase : « Plus court. » « Termine par une question. » « Donne aussi une version en anglais. » Inutile de tout réécrire : dans une même conversation, l’assistant tient compte de ce qui a déjà été dit. Si une information manquait, ajoutez-la dans la relance.\n\nUne traduction faite par l’IA est elle aussi un brouillon, surtout dans une langue moins présente sur Internet, comme le haoussa, le wolof ou le lingala. Avant de publier, faites-la relire par une personne qui parle bien cette langue.\n\nQuand une consigne donne un bon résultat, gardez-la dans vos notes. Elle devient un modèle : la fois suivante, vous changez seulement les faits. Un agent de santé communautaire à Kisumu, au Kenya, peut ainsi garder sa consigne de rappel de vaccination et ne modifier que la date et le lieu chaque mois. La méthode RCTF ne rend pas l’IA infaillible ; elle lui laisse moins de trous à combler et vous évite des allers-retours inutiles. Pour aller plus loin, le module Intelligence artificielle de Karatou Academy détaille d’autres techniques."
      }
    ],
    "example": {
      "title": "La publicité d’Aïcha : de la fausse promotion au statut WhatsApp fidèle",
      "challenge": "Aïcha vend des pagnes wax et du bazin au Grand Marché de Niamey, au Niger, et sur WhatsApp. Elle reçoit un nouvel arrivage de pagnes wax, en bleu et en orange. Elle demande à un assistant : « Écris une pub pour mes pagnes. » Elle obtient un texte long et pompeux, au ton de publicité télévisée, qui annonce une remise et une livraison gratuite qu’elle n’a jamais proposées. Publier ce texte, ce serait promettre ce qu’elle ne peut pas tenir et perdre la confiance de ses clientes.",
      "solution": "Dans l’application ChatGPT, en version gratuite, elle ouvre une nouvelle conversation et colle une consigne en quatre blocs : « Rôle : tu es une vendeuse de tissus expérimentée et honnête. Contexte : je suis commerçante au Grand Marché de Niamey. Je viens de recevoir des pagnes wax, en bleu et en orange. Le message est pour mes clientes. Je ne fais ni remise ni livraison gratuite. Tâche : écris un message WhatsApp pour annoncer l’arrivage. Format : 4 lignes maximum, ton chaleureux, en français. N’invente aucun prix ni aucune promotion. » La réponse tient en quatre lignes. Aïcha vérifie : aucun prix, aucune promotion, les bonnes couleurs. Première relance : « Termine par une question qui invite la cliente à répondre. » Deuxième relance : « Donne aussi une version en haoussa simple. » Aïcha lit mal le haoussa : elle enverra cette version à sa nièce Zeinabou pour relecture avant toute publication. Elle copie la version française, la publie en statut WhatsApp et garde sa consigne dans ses notes.",
      "impact": "Le statut publié tient en quatre lignes, vraies et à son image, sans aucune promesse qu’elle ne pourrait pas tenir. Une heure plus tard, une cliente répond : « Je passe demain voir le bleu. » Au prochain arrivage, Aïcha réutilisera la même consigne en changeant seulement les couleurs."
    },
    "practice": {
      "title": "Écrivez votre consigne avec la méthode RCTF",
      "instructions": [
        "Choisissez une vraie tâche de votre semaine : un message, une liste, une lettre ou un résumé. Écrivez votre consigne en quatre blocs en recopiant ce modèle et en remplaçant les crochets par vos informations : « Rôle : tu es [le rôle utile, par exemple : un vendeur expérimenté et honnête, un formateur patient]. Contexte : je suis [votre métier] à [votre ville]. [Votre situation, avec les faits exacts.] Le texte est pour [qui va le lire]. [Ce qu’il faut éviter.] Tâche : écris [un message, une liste, un résumé…]. Format : [longueur], [liste ou paragraphe], ton [chaleureux / formel], en [langue]. N’invente aucune information. »",
        "Envoyez la consigne à un assistant gratuit (Claude, Gemini ou ChatGPT). Lisez la réponse en vérifiant vos faits, puis relancez au moins une fois en une phrase, par exemple « Plus court. » ou « Termine par une question. »",
        "Gardez la meilleure version de votre consigne dans vos notes (application Notes, message envoyé à vous-même sur WhatsApp ou carnet papier), pour la réutiliser plus tard en changeant seulement les faits."
      ],
      "observation": "Par rapport à une demande vague, la réponse colle mieux à votre situation : le bon ton, la bonne longueur, et beaucoup moins de détails que vous n’avez pas donnés. Une seule relance suffit souvent à améliorer nettement le texte. Vous constatez aussi qu’il faut quand même tout relire : la phrase « N’invente aucune information » réduit le risque, elle ne le supprime pas."
    },
    "quiz": [
      {
        "question": "Dans quel ordre écrit-on les quatre blocs de la méthode RCTF ?",
        "options": [
          { "key": "A", "text": "Format, tâche, contexte, rôle" },
          { "key": "B", "text": "Rôle, contexte, tâche, format" },
          { "key": "C", "text": "Tâche, rôle, format, contexte" },
          { "key": "D", "text": "Contexte, format, rôle, tâche" }
        ],
        "answer": "B",
        "explanation": "Le sigle RCTF donne l’ordre : Rôle, Contexte, Tâche, Format. On dit d’abord qui parle, puis d’où l’on part, ensuite où l’on va, et enfin comment le résultat doit arriver."
      },
      {
        "question": "« Tu es une vendeuse expérimentée et honnête. » Quel bloc de la consigne reconnaissez-vous ?",
        "options": [
          { "key": "A", "text": "Le contexte" },
          { "key": "B", "text": "La tâche" },
          { "key": "C", "text": "Le format" },
          { "key": "D", "text": "Le rôle" }
        ],
        "answer": "D",
        "explanation": "« Tu es… » indique qui l’IA doit incarner : c’est le rôle. Il lui donne un point de vue, un vocabulaire et un ton de départ. Ici, le mot « honnête » oriente vers un texte sans fausses promesses."
      },
      {
        "question": "Aïcha écrit seulement : « Écris une pub pour mes pagnes. » Sans contexte ni faits, quel est le risque principal ?",
        "options": [
          { "key": "A", "text": "L’assistant invente des détails, comme une promotion" },
          { "key": "B", "text": "L’assistant refuse de répondre" },
          { "key": "C", "text": "Le texte sera forcément en anglais" },
          { "key": "D", "text": "Aucun risque" }
        ],
        "answer": "A",
        "explanation": "Sans vos faits, l’IA comble les trous avec du probable, pas avec du vrai. Une publicité de pagnes contient souvent une remise : elle en invente donc une. L’assistant ne refuse pas une demande aussi simple, et il répond en général dans la langue de la question."
      },
      {
        "question": "Dans « 4 lignes maximum, ton chaleureux, en français », quel bloc reconnaissez-vous ?",
        "options": [
          { "key": "A", "text": "Le rôle" },
          { "key": "B", "text": "Le contexte" },
          { "key": "C", "text": "Le format" },
          { "key": "D", "text": "La tâche" }
        ],
        "answer": "C",
        "explanation": "Longueur, ton et langue décrivent la forme du résultat : c’est le format. Il dit comment la réponse doit arriver, pas ce qu’il faut faire ni qui parle."
      },
      {
        "question": "Laquelle de ces phrases est une tâche claire ?",
        "options": [
          { "key": "A", "text": "Fais quelque chose de bien" },
          { "key": "B", "text": "Écris un message WhatsApp pour annoncer l’arrivage" },
          { "key": "C", "text": "Je vends des pagnes à Niamey" },
          { "key": "D", "text": "Quatre lignes maximum" }
        ],
        "answer": "B",
        "explanation": "Une tâche claire commence par un verbe précis et dit quoi produire. « Fais quelque chose de bien » est flou ; « Je vends des pagnes à Niamey » appartient au contexte ; « Quatre lignes maximum » appartient au format."
      }
    ],
    "reflection": "Quelle tâche de votre quotidien aimeriez-vous confier à un assistant IA, et quels faits devriez-vous mettre dans le contexte pour qu’il n’invente rien à votre place ?",
    "glossary": [
      {
        "term": "Méthode RCTF",
        "definition": "La méthode de consigne de Karatou Academy : quatre blocs écrits dans cet ordre, Rôle, Contexte, Tâche, Format. Une consigne est le message que vous écrivez à l’assistant pour lui demander quelque chose ; RCTF évite d’en oublier un morceau, comme une recette suivie étape par étape."
      },
      {
        "term": "Rôle",
        "definition": "Le premier bloc : la personne que l’IA doit incarner, par exemple « Tu es une vendeuse expérimentée et honnête ». Il lui donne un point de vue, un vocabulaire et un ton de départ."
      },
      {
        "term": "Contexte",
        "definition": "Le deuxième bloc : qui vous êtes, où, pour qui est le texte, ce qu’il faut éviter, et surtout vos faits exacts (couleurs, dates, quantités). C’est votre premier garde-fou contre les inventions."
      },
      {
        "term": "Tâche",
        "definition": "Le troisième bloc : l’action précise demandée, qui commence par un verbe clair (écris, résume, traduis, liste, explique). Une seule tâche par consigne."
      },
      {
        "term": "Format",
        "definition": "Le quatrième bloc : la forme du résultat (longueur, liste ou paragraphe, ton, langue), avec la phrase de sécurité « N’invente aucune information », qui réduit le risque sans le supprimer."
      },
      {
        "term": "Relance",
        "definition": "Une courte phrase envoyée après une réponse pour la corriger ou la compléter, comme « Plus court. » ou « Termine par une question. ». La première réponse est un brouillon ; la relance l’améliore."
      }
    ]
  },
  "en": {
    "id": "is4",
    "lessonNumber": 4,
    "title": "Asking Well: the RCTF Method — Writing a Clear Instruction for AI",
    "objective": "By the end of this lesson, you will know how to write a clear instruction for AI with the RCTF method, in four blocks written in order: role, context, task, format. You will know how to put your exact facts in the context, so the assistant makes up less. You will also know how to follow up on the first answer in one sentence, then keep the instructions that work so you can reuse them.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "A vague request, a made-up answer",
        "body": "When you write only “Write an ad for my fabrics,” the assistant knows almost nothing: not who you are, not exactly what you sell, not what you really offer. Yet it has to answer. So it fills the gaps with what is most common in an ad: a TV-commercial tone, a discount, free delivery. Remember Lesson 2: AI predicts what is most likely, not what is true. What it adds is not a deliberate lie. It is a guess that looks like a fact.\n\nMany people think there are magic formulas for talking to AI, or that you have to write in English. That is not true. You write the way you speak, in simple words, in your own language. A good instruction is like the explanation you give a new apprentice on their first day at the workshop. A garage owner in Lomé, Togo, does not tell his apprentice “do something.” He says: “You are my helper today. This motorbike brakes badly and the customer is back at noon. Change the brake pads. Show me the old ones when you are done.”\n\nThe RCTF method puts these explanations in order. Four letters, four blocks: R for role, C for context, T for task, F for format. Then one habit: follow up. It works with every assistant, Claude, Gemini or ChatGPT, in writing or by voice, and in every language the assistant understands."
      },
      {
        "title": "Role and context: who is speaking, and where you start from",
        "body": "The role (R) tells the AI who it should be: “You are an experienced and honest saleswoman,” “You are a patient trainer.” Like an actor given a character, the assistant then takes on a point of view, a vocabulary and a starting tone. The words of the role matter: “honest” steers towards a plain text without big promises; “patient” steers towards step-by-step explanations.\n\nThe context (C) is the most valuable block. It says who you are, where you are, who the text is for and what to avoid. Above all, it gives the exact facts the AI cannot know: colours, dates, quantities, opening hours, what you offer and what you do not. A restaurant owner in Abidjan, Côte d’Ivoire, might write: “I run a small eatery in Yopougon. New dish on Fridays: grilled fish with attiéké. The message is for my regular customers. I do not deliver.” Without that last sentence, the assistant could easily offer delivery.\n\nYour facts are your first safeguard. The more precise your context, the fewer gaps the assistant has to fill, so the less it makes up. Still, give only what the task needs: a rich context is not a private one, and a password or a mobile money PIN never belongs in an instruction."
      },
      {
        "title": "Task and format: where you are going, and how the result arrives",
        "body": "The task (T) is the precise action you expect. Start with a clear verb: write, summarize, translate, list, explain. Avoid vague requests such as “do something good,” which force the AI to guess. One task per instruction: it is like going to the tailor, you describe one outfit properly before moving on to the next. If you want a message and then a list, ask for one, then the other.\n\nThe format (F) says how the result should arrive: the length (“4 lines maximum”), the structure (list or paragraph), the tone (warm, formal) and the language. End with a safety sentence: “Do not make up any information.” It reduces the risk of made-up details. It does not remove it: you will always reread.\n\nHere is a complete instruction for a teacher in Bobo-Dioulasso, Burkina Faso: “Role: you are a courteous head teacher. Context: I teach the last year of primary school in Bobo-Dioulasso. The parents’ meeting is on Saturday at 9 a.m., in the classroom. The message is for the parents, some of whom read little. Avoid complicated words. Task: write a WhatsApp invitation message. Format: 3 lines maximum, warm tone, in simple French. Do not make up any information.” In other words: the role says who is speaking, the context says where you start from, the task says where you are going, and the format says how the result should arrive."
      },
      {
        "title": "Follow up, then keep the instructions that work",
        "body": "Even with four well-filled blocks, the first answer is a draft. Read it and check your facts first: the right colours, the right date, no price or promise you did not give. Then correct it in one sentence: “Shorter.” “End with a question.” “Also give a version in English.” No need to rewrite everything: within the same conversation, the assistant takes into account what has already been said. If a piece of information was missing, add it in the follow-up.\n\nA translation made by AI is also a draft, especially in a language less present on the Internet, such as Hausa, Wolof or Lingala. Before publishing, have it reread by someone who speaks that language well.\n\nWhen an instruction gives a good result, keep it in your notes. It becomes a template: next time, you change only the facts. A community health worker in Kisumu, Kenya, can keep a vaccination-reminder instruction and change only the date and place each month. The RCTF method does not make AI infallible; it leaves fewer gaps to fill and saves you pointless back-and-forth. To go further, Karatou Academy’s Artificial Intelligence module covers other techniques in detail."
      }
    ],
    "example": {
      "title": "Aïcha’s ad: from a fake promotion to a truthful WhatsApp status",
      "challenge": "Aïcha sells wax-print fabrics and bazin at the Grand Marché in Niamey, Niger, and on WhatsApp. She receives a new delivery of wax-print fabrics, in blue and orange. She asks an assistant: “Write an ad for my fabrics.” She gets a long, pompous text in a TV-commercial tone, announcing a discount and free delivery she has never offered. Publishing it would mean promising what she cannot deliver and losing her customers’ trust.",
      "solution": "In the ChatGPT app, free version, she opens a new conversation and pastes an instruction in four blocks: “Role: you are an experienced and honest fabric saleswoman. Context: I am a trader at the Grand Marché in Niamey. I have just received wax-print fabrics, in blue and orange. The message is for my customers. I offer no discount and no free delivery. Task: write a WhatsApp message announcing the new stock. Format: 4 lines maximum, warm tone, in French. Do not make up any price or any promotion.” The answer is four lines long. Aïcha checks: no price, no promotion, the right colours. First follow-up: “End with a question that invites the customer to reply.” Second follow-up: “Also give a version in simple Hausa.” Aïcha does not read Hausa well: she will send this version to her niece Zeinabou to check before anything is published. She copies the French version, posts it as a WhatsApp status and saves her instruction in her notes.",
      "impact": "The published status is four lines long, true and in her own voice, with no promise she could not keep. An hour later, a customer replies: “I’ll come by tomorrow to see the blue one.” With the next delivery, Aïcha will reuse the same instruction, changing only the colours."
    },
    "practice": {
      "title": "Write your instruction with the RCTF method",
      "instructions": [
        "Choose a real task from your week: a message, a list, a letter or a summary. Write your instruction in four blocks by copying this template and replacing the brackets with your own information: “Role: you are [the useful role, for example: an experienced and honest seller, a patient trainer]. Context: I am [your job] in [your town]. [Your situation, with the exact facts.] The text is for [who will read it]. [What to avoid.] Task: write [a message, a list, a summary…]. Format: [length], [list or paragraph], [warm / formal] tone, in [language]. Do not make up any information.”",
        "Send the instruction to a free assistant (Claude, Gemini or ChatGPT). Read the answer while checking your facts, then follow up at least once in one sentence, for example “Shorter.” or “End with a question.”",
        "Keep the best version of your instruction in your notes (Notes app, a WhatsApp message sent to yourself, or a paper notebook), so you can reuse it later by changing only the facts."
      ],
      "observation": "Compared with a vague request, the answer fits your situation better: the right tone, the right length, and far fewer details you never gave. A single follow-up is often enough to clearly improve the text. You also notice that you still have to reread everything: the sentence “Do not make up any information” reduces the risk, it does not remove it."
    },
    "quiz": [
      {
        "question": "In what order are the four blocks of the RCTF method written?",
        "options": [
          { "key": "A", "text": "Format, task, context, role" },
          { "key": "B", "text": "Role, context, task, format" },
          { "key": "C", "text": "Task, role, format, context" },
          { "key": "D", "text": "Context, format, role, task" }
        ],
        "answer": "B",
        "explanation": "The acronym RCTF gives the order: Role, Context, Task, Format. First you say who is speaking, then where you start from, then where you are going, and finally how the result should arrive."
      },
      {
        "question": "“You are an experienced and honest saleswoman.” Which block of the instruction do you recognize?",
        "options": [
          { "key": "A", "text": "The context" },
          { "key": "B", "text": "The task" },
          { "key": "C", "text": "The format" },
          { "key": "D", "text": "The role" }
        ],
        "answer": "D",
        "explanation": "“You are…” tells the AI who it should be: that is the role. It gives a point of view, a vocabulary and a starting tone. Here, the word “honest” steers towards a text without false promises."
      },
      {
        "question": "Aïcha writes only: “Write an ad for my fabrics.” Without context or facts, what is the main risk?",
        "options": [
          { "key": "A", "text": "The assistant makes up details, such as a promotion" },
          { "key": "B", "text": "The assistant refuses to answer" },
          { "key": "C", "text": "The text will necessarily be in English" },
          { "key": "D", "text": "No risk at all" }
        ],
        "answer": "A",
        "explanation": "Without your facts, AI fills the gaps with what is likely, not with what is true. A fabric ad often includes a discount, so it makes one up. The assistant does not refuse such a simple request, and it usually answers in the language of the question."
      },
      {
        "question": "In “4 lines maximum, warm tone, in French,” which block do you recognize?",
        "options": [
          { "key": "A", "text": "The role" },
          { "key": "B", "text": "The context" },
          { "key": "C", "text": "The format" },
          { "key": "D", "text": "The task" }
        ],
        "answer": "C",
        "explanation": "Length, tone and language describe the shape of the result: that is the format. It says how the answer should arrive, not what to do or who is speaking."
      },
      {
        "question": "Which of these sentences is a clear task?",
        "options": [
          { "key": "A", "text": "Do something good" },
          { "key": "B", "text": "Write a WhatsApp message announcing the new stock" },
          { "key": "C", "text": "I sell fabrics in Niamey" },
          { "key": "D", "text": "Four lines maximum" }
        ],
        "answer": "B",
        "explanation": "A clear task starts with a precise verb and says what to produce. “Do something good” is vague; “I sell fabrics in Niamey” belongs to the context; “Four lines maximum” belongs to the format."
      }
    ],
    "reflection": "Which task from your daily life would you like to hand over to an AI assistant, and which facts should you put in the context so that it makes nothing up for you?",
    "glossary": [
      {
        "term": "RCTF method",
        "definition": "Karatou Academy’s method for writing instructions: four blocks written in this order, Role, Context, Task, Format. An instruction is the message you write to the assistant to ask for something; RCTF keeps you from forgetting a part, like following a recipe step by step."
      },
      {
        "term": "Role",
        "definition": "The first block: the person the AI should be, for example “You are an experienced and honest saleswoman.” It gives a point of view, a vocabulary and a starting tone."
      },
      {
        "term": "Context",
        "definition": "The second block: who you are, where, who the text is for, what to avoid, and above all your exact facts (colours, dates, quantities). It is your first safeguard against made-up details."
      },
      {
        "term": "Task",
        "definition": "The third block: the precise action requested, starting with a clear verb (write, summarize, translate, list, explain). Only one task per instruction."
      },
      {
        "term": "Format",
        "definition": "The fourth block: the shape of the result (length, list or paragraph, tone, language), with the safety sentence “Do not make up any information,” which reduces the risk without removing it."
      },
      {
        "term": "Follow-up",
        "definition": "A short sentence sent after an answer to correct or complete it, such as “Shorter.” or “End with a question.” The first answer is a draft; the follow-up improves it."
      }
    ]
  },
  "ha": {
    "id": "is4",
    "lessonNumber": 4,
    "title": "Yadda ake tambaya da kyau: hanyar RCTF — rubuta umarni bayyananne ga AI",
    "objective": "A karshen wannan darasi, za ku san yadda ake rubuta umarni bayyananne ga AI da hanyar RCTF, a tubala hudu da ake rubutawa bisa jeri: rawa, mahalli, aiki, tsari. Za ku san yadda ake saka ainihin bayananku a cikin mahalli, don mataimakin AI ya rage kirkirar abubuwa. Za ku kuma san yadda ake sake tambaya kan amsar farko da jumla daya, sannan ku adana umarnin da suka yi aiki don sake amfani da su.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Tambaya maras bayani, amsa ta kirkira",
        "body": "Idan kun rubuta kawai « Rubuta talla don atamfofina », mataimakin AI kusan bai san komai ba: bai san ko ku wane ne ba, ko me kuke sayarwa daidai, ko me kuke bayarwa da gaske. Duk da haka dole ya amsa. Sai ya cike gibin da abin da aka fi gani a talla: salon tallar talabijin, rangwame, kai kaya kyauta. Ku tuna da Darasi 2: AI yana hasashen abin da ya fi yiwuwa, ba lallai abin da yake gaskiya ba. Abin da yake karawa ba karya ce da gangan ba. Zato ne da ke kama da gaskiya.\n\nMutane da yawa suna tunanin akwai wasu kalmomin sihiri don magana da AI, ko kuma sai an rubuta da Turanci. Ba haka ba ne. Kuna rubutu kamar yadda kuke magana, cikin sauki, da harshenku. Umarni mai kyau yana kama da bayanin da ake ba sabon almajiri a ranarsa ta farko a wurin sana’a. Mai garejin mota a Lomé, kasar Togo, ba ya ce wa almajirinsa « yi wani abu ». Yana cewa: « Kai ne mataimakina yau. Wannan babur ba ya tsayawa da kyau, kuma mai shi zai dawo da rana. Canza kayan birki. Ka nuna mini tsofaffin idan ka gama. »\n\nHanyar RCTF tana tsara wadannan bayanai. Harafi hudu, tubala hudu: R don Rôle (rawa), C don Contexte (mahalli), T don Tâche (aiki), F don Format (tsari). Sannan wata dabi’a: sake tambaya. Tana aiki da kowane mataimaki, Claude, Gemini ko ChatGPT, a rubuce ko da murya, kuma a kowane harshe da mataimakin ya fahimta."
      },
      {
        "title": "Rawa da mahalli: wa ke magana, kuma daga ina kuka fara",
        "body": "Rawa (R) tana gaya wa AI wanda zai zama: « Ke ce mai sayar da kaya gogaggiya mai gaskiya », « Kai ne malami mai hakuri ». Kamar dan wasan kwaikwayo da aka ba shi wani matsayi, mataimakin zai dauki ra’ayi, kalmomi da salon farko. Kalmomin rawa suna da muhimmanci: « mai gaskiya » na kai ga rubutu mai sauki ba tare da manyan alkawura ba; « mai hakuri » na kai ga bayani mataki-mataki.\n\nMahalli (C) shi ne tubali mafi daraja. Yana fadin ko ku wane ne, a ina kuke, don wa aka rubuta, da abin da za a guje wa. Fiye da komai, yana bayar da ainihin bayanan da AI ba zai iya sani ba: launuka, kwanaki, yawa, lokutan aiki, abin da kuke bayarwa da wanda ba ku bayarwa. Wata mai gidan abinci a Abidjan, kasar Côte d’Ivoire, za ta iya rubuta: « Ina da karamin gidan abinci a Yopougon. Sabon abinci a ranar Juma’a: gasasshen kifi da attiéké. Sakon na abokan cinikina na yau da kullum ne. Ba na kai abinci gida. » Ba tare da jumlar karshe ba, mataimakin zai iya bayar da kai abinci gida cikin sauki.\n\nBayananku su ne garkuwarku ta farko. Idan mahallinku ya fi daidai, mataimakin ba zai sami gibi da yawa da zai cike ba, don haka zai rage kirkira. Amma ku bayar da abin da aikin yake bukata kawai: mahalli mai yawan bayani ba yana nufin bayanan sirri ba, kuma kalmar sirri ko lambar sirri ta mobile money ba ta da wuri a cikin umarni."
      },
      {
        "title": "Aiki da tsari: ina za ku, kuma ta yaya sakamakon zai zo",
        "body": "Aiki (T) shi ne ainihin abin da kuke son a yi. Ku fara da fi’ili bayyananne: rubuta, takaita, fassara, jera, bayyana. Ku guji tambayoyi marasa bayani kamar « yi wani abu mai kyau », wadanda ke tilasta wa AI yin zato. Aiki daya a kowane umarni: kamar a wurin tela ne, ana bayyana kaya daya da kyau kafin a koma ga na gaba. Idan kuna son sako sannan jerin abubuwa, ku nemi daya, sannan dayan.\n\nTsari (F) yana fadin yadda sakamakon zai zo: tsawo (« layi 4 kacal »), fasali (jeri ko sakin layi), salo (mai dumi, na hukuma) da harshe. Ku karkare da jumlar kariya: « Kada ka kirkiri wani bayani. » Tana rage hadarin kirkira. Ba ta kawar da shi ba: kullum za ku sake karantawa.\n\nGa cikakken umarni na wani malami a Bobo-Dioulasso, kasar Burkina Faso: « Rawa: kai ne shugaban makaranta mai ladabi. Mahalli: ni malami ne na aji na karshe na firamare a Bobo-Dioulasso. Taron iyaye zai kasance ranar Asabar karfe 9 na safe, a cikin aji. Sakon na iyaye ne, wasunsu ba sa karatu sosai. Ka guji kalmomi masu wuya. Aiki: rubuta sakon WhatsApp na gayyata. Tsari: layi 3 kacal, salo mai dumi, cikin Faransanci mai sauki. Kada ka kirkiri wani bayani. » A takaice: rawa tana fadin wa ke magana, mahalli yana fadin daga ina kuka fara, aiki yana fadin ina za ku, tsari kuma yana fadin yadda sakamakon zai zo."
      },
      {
        "title": "Sake tambaya, sannan adana umarnin da suka yi aiki",
        "body": "Ko da tubala hudu sun cika da kyau, amsar farko daftari ce. Ku karanta ta, ku fara duba bayananku: launuka daidai, kwanan wata daidai, babu farashi ko alkawarin da ba ku bayar ba. Sannan ku gyara da jumla daya: « Ka gajarta. » « Ka karkare da tambaya. » « Ka bayar da sigar Turanci ma. » Ba sai kun sake rubuta komai ba: a cikin hira daya, mataimakin yana tuna abin da aka riga aka fada. Idan wani bayani ya rasa, ku kara shi a cikin sake tambayar.\n\nFassarar da AI ya yi ita ma daftari ce, musamman a harshen da ba a cika samu a Intanet ba, kamar Hausa, Wolof ko Lingala. Kafin a wallafa, ku sa wani da ya iya harshen sosai ya sake karanta ta.\n\nIdan wani umarni ya bayar da sakamako mai kyau, ku adana shi a cikin bayananku. Ya zama samfuri: a gaba, za ku canza bayanan kawai. Wani ma’aikacin lafiya na al’umma a Kisumu, kasar Kenya, zai iya adana umarninsa na tunatar da allurar rigakafi, ya canza kwanan wata da wuri kawai kowane wata. Hanyar RCTF ba ta sa AI ya zama marar kuskure ba; tana rage gibin da zai cike, kuma tana hana ku zirga-zirga marar amfani. Don zurfafawa, kwas din Intelligence artificielle na Karatou Academy yana bayani dalla-dalla kan wasu dabaru."
      }
    ],
    "example": {
      "title": "Tallar Aïcha: daga rangwamen karya zuwa status na WhatsApp na gaskiya",
      "challenge": "Aïcha tana sayar da atamfa da bazin a Grand Marché na Niamey, kasar Nijar, da kuma a WhatsApp. Ta karbi sabbin atamfofi, shudi da lemu. Ta tambayi wani mataimakin AI: « Rubuta talla don atamfofina. » Ta sami dogon rubutu mai cike da kambama, da salon tallar talabijin, wanda ke sanar da rangwame da kai kaya kyauta da ba ta taba bayarwa ba. Wallafa wannan rubutu zai zama alkawarin abin da ba za ta iya cikawa ba, kuma za ta rasa amincewar kwastomominta.",
      "solution": "A cikin manhajar ChatGPT, sigar kyauta, ta bude sabuwar hira ta manna umarni a tubala hudu: « Rawa: ke ce mai sayar da yadudduka gogaggiya mai gaskiya. Mahalli: ni yar kasuwa ce a Grand Marché na Niamey. Yanzu na karbi atamfofi, shudi da lemu. Sakon na kwastomomina ne. Ba na yin rangwame, kuma ba na kai kaya kyauta. Aiki: rubuta sakon WhatsApp don sanar da sabbin kaya. Tsari: layi 4 kacal, salo mai dumi, cikin Faransanci. Kada ki kirkiri wani farashi ko wani rangwame. » Amsar tana da layi hudu. Aïcha ta duba: babu farashi, babu rangwame, launuka daidai ne. Sake tambaya ta farko: « Ki karkare da tambayar da za ta sa kwastoma ta amsa. » Sake tambaya ta biyu: « Ki bayar da sigar Hausa mai sauki ma. » Aïcha ba ta iya karanta Hausa sosai ba: za ta aika wannan sigar ga yar yayarta Zeinabou don ta duba kafin a wallafa komai. Ta kwafi sigar Faransanci, ta wallafa ta a matsayin status na WhatsApp, kuma ta adana umarninta a cikin bayananta.",
      "impact": "Status din da aka wallafa yana da layi hudu, na gaskiya kuma irin nata, ba tare da wani alkawarin da ba za ta iya cikawa ba. Bayan awa daya, wata kwastoma ta amsa: « Gobe zan zo in ga shudin. » A sabbin kaya na gaba, Aïcha za ta sake amfani da wannan umarni, ta canza launuka kawai."
    },
    "practice": {
      "title": "Rubuta umarninka da hanyar RCTF",
      "instructions": [
        "Zabi aikin gaske na wannan mako: sako, jerin abubuwa, wasika ko takaitawa. Rubuta umarninka a tubala hudu ta hanyar kwafar wannan samfuri da maye gurbin abin da ke cikin [ ] da bayananka: « Rawa: kai ne [rawar da ta dace, misali: mai sayar da kaya gogagge mai gaskiya, malami mai hakuri]. Mahalli: ni [sana’arka] ne a [garinka]. [Halin da kake ciki, da ainihin bayanai.] Rubutun na [wanda zai karanta] ne. [Abin da za a guje wa.] Aiki: rubuta [sako, jerin abubuwa, takaitawa…]. Tsari: [tsawo], [jeri ko sakin layi], salo [mai dumi / na hukuma], cikin [harshe]. Kada ka kirkiri wani bayani. »",
        "Aika umarnin ga mataimakin AI na kyauta (Claude, Gemini ko ChatGPT). Karanta amsar kana duba bayananka, sannan ka sake tambaya akalla sau daya da jumla daya, misali « Ka gajarta. » ko « Ka karkare da tambaya. »",
        "Adana mafi kyawun sigar umarninka a cikin bayananka (manhajar Notes, sakon WhatsApp da ka aika wa kanka, ko littafin rubutu), don ka sake amfani da shi daga baya ta canza bayanan kawai."
      ],
      "observation": "Idan aka kwatanta da tambaya maras bayani, amsar ta fi dacewa da halin da kake ciki: salo daidai, tsawo daidai, kuma ba a kara bayanan da ba ka bayar ba sosai. Sake tambaya daya sau da yawa ya isa don inganta rubutun sosai. Za ka kuma lura cewa dole ne har yanzu ka sake karanta komai: jumlar « Kada ka kirkiri wani bayani » tana rage hadarin, ba ta kawar da shi ba."
    },
    "quiz": [
      {
        "question": "Da wane jeri ake rubuta tubala hudu na hanyar RCTF?",
        "options": [
          { "key": "A", "text": "Tsari, aiki, mahalli, rawa" },
          { "key": "B", "text": "Rawa, mahalli, aiki, tsari" },
          { "key": "C", "text": "Aiki, rawa, tsari, mahalli" },
          { "key": "D", "text": "Mahalli, tsari, rawa, aiki" }
        ],
        "answer": "B",
        "explanation": "Harufan RCTF suna nuna jerin: Rôle (rawa), Contexte (mahalli), Tâche (aiki), Format (tsari). Da farko a fadi wa ke magana, sannan daga ina aka fara, sannan ina za a je, a karshe kuma yadda sakamakon zai zo."
      },
      {
        "question": "« Ke ce mai sayar da kaya gogaggiya mai gaskiya. » Wane tubali na umarnin kuka gane?",
        "options": [
          { "key": "A", "text": "Mahalli" },
          { "key": "B", "text": "Aiki" },
          { "key": "C", "text": "Tsari" },
          { "key": "D", "text": "Rawa" }
        ],
        "answer": "D",
        "explanation": "« Ke ce… » yana gaya wa AI wanda zai zama: wannan ita ce rawa. Tana ba shi ra’ayi, kalmomi da salon farko. A nan, kalmar « mai gaskiya » tana kai ga rubutu ba tare da alkawuran karya ba."
      },
      {
        "question": "Aïcha ta rubuta kawai: « Rubuta talla don atamfofina. » Ba tare da mahalli ko bayanai ba, mene ne babban hadarin?",
        "options": [
          { "key": "A", "text": "Mataimakin zai kirkiri wasu bayanai, kamar rangwame" },
          { "key": "B", "text": "Mataimakin zai ki amsawa" },
          { "key": "C", "text": "Rubutun zai zama da Turanci dole" },
          { "key": "D", "text": "Babu wani hadari" }
        ],
        "answer": "A",
        "explanation": "Ba tare da bayananku ba, AI yana cike gibi da abin da ya fi yiwuwa, ba da gaskiya ba. Tallar atamfa sau da yawa tana da rangwame, don haka sai ya kirkiri daya. Mataimakin ba ya kin amsa tambaya mai sauki irin wannan, kuma galibi yana amsawa da harshen tambayar."
      },
      {
        "question": "A cikin « layi 4 kacal, salo mai dumi, cikin Faransanci », wane tubali kuka gane?",
        "options": [
          { "key": "A", "text": "Rawa" },
          { "key": "B", "text": "Mahalli" },
          { "key": "C", "text": "Tsari" },
          { "key": "D", "text": "Aiki" }
        ],
        "answer": "C",
        "explanation": "Tsawo, salo da harshe suna bayyana surar sakamakon: wannan shi ne tsari. Yana fadin yadda amsar za ta zo, ba abin da za a yi ba, ko wa ke magana ba."
      },
      {
        "question": "Wace daga cikin wadannan jumloli ce aiki bayyananne?",
        "options": [
          { "key": "A", "text": "Yi wani abu mai kyau" },
          { "key": "B", "text": "Rubuta sakon WhatsApp don sanar da sabbin kaya" },
          { "key": "C", "text": "Ina sayar da atamfa a Niamey" },
          { "key": "D", "text": "Layi hudu kacal" }
        ],
        "answer": "B",
        "explanation": "Aiki bayyananne yana farawa da fi’ili daidai kuma yana fadin abin da za a samar. « Yi wani abu mai kyau » ba shi da bayani; « Ina sayar da atamfa a Niamey » na mahalli ne; « Layi hudu kacal » na tsari ne."
      }
    ],
    "reflection": "Wane aiki na rayuwarku ta yau da kullum kuke so ku bai wa mataimakin AI, kuma wadanne bayanai ya kamata ku saka a cikin mahalli don kada ya kirkiri komai a madadinku?",
    "glossary": [
      {
        "term": "Méthode RCTF (hanyar RCTF)",
        "definition": "Hanyar rubuta umarni ta Karatou Academy: tubala hudu da ake rubutawa bisa wannan jeri, Rôle (rawa), Contexte (mahalli), Tâche (aiki), Format (tsari). Umarni shi ne sakon da kuke rubuta wa mataimakin AI don neman wani abu; RCTF tana hana ku manta wani bangare, kamar bin girke-girke mataki-mataki."
      },
      {
        "term": "Rôle (rawa)",
        "definition": "Tubali na farko: mutumin da AI zai zama, misali « Ke ce mai sayar da kaya gogaggiya mai gaskiya ». Tana ba shi ra’ayi, kalmomi da salon farko."
      },
      {
        "term": "Contexte (mahalli)",
        "definition": "Tubali na biyu: ko ku wane ne, a ina, don wa aka rubuta, abin da za a guje wa, kuma fiye da komai ainihin bayananku (launuka, kwanaki, yawa). Shi ne garkuwarku ta farko daga kirkira."
      },
      {
        "term": "Tâche (aiki)",
        "definition": "Tubali na uku: ainihin abin da ake nema a yi, wanda ke farawa da fi’ili bayyananne (rubuta, takaita, fassara, jera, bayyana). Aiki daya kawai a kowane umarni."
      },
      {
        "term": "Format (tsari)",
        "definition": "Tubali na hudu: surar sakamakon (tsawo, jeri ko sakin layi, salo, harshe), tare da jumlar kariya « Kada ka kirkiri wani bayani », wadda ke rage hadarin ba tare da kawar da shi ba."
      },
      {
        "term": "Relance (sake tambaya)",
        "definition": "Gajeriyar jumla da ake aikawa bayan amsa don gyara ko cika ta, kamar « Ka gajarta. » ko « Ka karkare da tambaya. ». Amsar farko daftari ce; sake tambaya tana inganta ta."
      }
    ]
  }
};
