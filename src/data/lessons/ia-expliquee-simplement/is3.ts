import { Language } from '../../translations';
import { LessonContent } from '../../lessonContent';

// Module « L'IA expliquée simplement » (ia-expliquee-simplement) — leçon is3 (Votre première conversation avec un assistant IA)
// Texte aligné sur le CLAUDE.md de production vidéo du cours 1 (docs/production-video/claude-md/).
// Trilingue FR / EN / HA. ⚠️ Traductions HA à faire valider par un locuteur natif haoussa.
export const isLesson3: Record<Language, LessonContent> = {
  "fr": {
    "id": "is3",
    "lessonNumber": 3,
    "title": "Votre première conversation avec un assistant IA — parler, relancer, obtenir un résultat utile",
    "objective": "À la fin de cette leçon, vous saurez dialoguer avec un assistant IA. Vous saurez choisir un assistant gratuit, lui parler à l’écrit, en dictée ou à la voix, et le relancer dans la même conversation jusqu’à obtenir un résultat utile. Vous saurez aussi quelles informations vous devez lui apporter vous-même : les dates, les lieux, les noms et les décisions locales.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Un assistant n’est pas un moteur de recherche",
        "body": "Beaucoup de personnes utilisent un assistant IA comme un moteur de recherche : elles tapent deux mots, puis attendent. Essayez « salubrité Garoua » : la réponse est générale et polie, mais elle ne sait rien de votre samedi, de votre quartier ni de vos volontaires. Un moteur de recherche vous renvoie vers des pages qui existent déjà. Un assistant, lui, rédige une réponse pour vous, à partir de ce que vous lui dites.\n\nUn assistant IA est un programme avec qui l’on dialogue, comme avec une personne. Vous parlez en phrases complètes. Vous donnez votre situation : qui vous êtes, où vous êtes, ce que vous devez faire. Les fautes d’orthographe ne le gênent pas beaucoup, et vous n’avez besoin d’aucun mot technique. Pensez à un nouveau collègue à qui vous confiez une mission : plus vous lui expliquez la situation, plus son aide est juste.\n\nPrenons un enseignant de Bouaké, en Côte d’Ivoire, qui prépare une réunion de parents d’élèves. S’il tape « réunion parents », il obtient des conseils vagues. S’il écrit « Tu es un assistant scolaire organisé. Je suis enseignant en CM2 à Bouaké et je réunis trente parents jeudi pour parler des examens. Prépare l’ordre du jour de la réunion. Réponds par une liste de cinq points, une ligne chacun. », la réponse devient utilisable. Et surtout, il peut continuer : demander plus court, plus simple, ou une version à lire à voix haute."
      },
      {
        "title": "Un assistant gratuit suffit pour commencer",
        "body": "Gemini, ChatGPT, Claude et Copilot ont tous une version gratuite, et tous comprennent le français. Selon les pays, Meta AI est aussi disponible directement dans WhatsApp. Ces assistants existent en application sur Android et sur iPhone, et s’ouvrent aussi dans le navigateur du téléphone. Vous n’avez rien à payer pour tenir votre première conversation.\n\nIl vous faut un compte : le plus souvent votre adresse e-mail ou votre compte Google. C’est comme ouvrir un compte de mobile money : une fois l’inscription faite, vous retrouvez vos échanges à chaque connexion. Ne cherchez pas le « meilleur » assistant avant de commencer. Un seul suffit. Choisissez celui qui s’installe et fonctionne bien sur votre téléphone, avec votre réseau.\n\nUne couturière apprentie de Cotonou, au Bénin, n’a pas besoin de comparer quatre applications pour demander des idées de messages à ses clientes. Elle installe celle que sa sœur utilise déjà, se connecte avec son adresse e-mail, et commence. Les versions gratuites ont leurs limites (nombre de messages, certaines fonctions réservées), mais pour apprendre à dialoguer, elles suffisent largement."
      },
      {
        "title": "Écrire, dicter ou parler : trois façons de demander",
        "body": "Première façon : écrire, avec le clavier, comme dans un SMS. Deuxième façon : dicter. Vous appuyez sur le micro, vous parlez, et votre phrase s’écrit toute seule à l’écran. Vous la relisez, vous corrigez un mot si besoin, puis vous envoyez. C’est pratique quand on marche, quand on a les mains occupées, ou quand on écrit mal sur un petit écran.\n\nTroisième façon : converser à la voix, en direct, comme au téléphone. L’assistant vous écoute et vous répond à voix haute. C’est très naturel, mais attention au forfait : la conversation vocale consomme plus de données que l’écrit. En 3G ou avec un petit forfait, préférez la dictée : vous gardez la facilité de la voix, la légèreté de l’écrit, et une trace que vous pouvez relire.\n\nUn maraîcher de Bobo-Dioulasso, au Burkina Faso, dicte ses questions entre deux planches de légumes, sans poser son arrosoir. Vous pouvez aussi essayer de dicter dans votre langue : selon l’assistant et la langue, la voix est plus ou moins bien reconnue. Relisez toujours le texte dicté avant de l’envoyer, car un mot mal compris peut changer toute la demande."
      },
      {
        "title": "Relancer, et apporter vos faits locaux",
        "body": "La troisième idée est la plus utile : relancer. Dans une même conversation, l’assistant tient compte de tout ce qui a été dit avant. Vous pouvez donc corriger sans tout répéter : « Plus court. » « Plus simple. » « Donne un exemple. » « Explique-moi ce mot. » « Pose-moi des questions. » La première réponse est un brouillon ; c’est vous qui la faites grandir, comme avec un collègue. Pour un nouveau sujet, ouvrez une nouvelle conversation : vos échanges restent clairs et bien rangés.\n\nFaites maintenant une prédiction. Hadiza demande : « Quelle est la date de la prochaine journée de salubrité à Garoua ? » L’assistant ne peut pas le savoir : la date n’a été publiée nulle part. Soit il le dit honnêtement, soit il invente une date plausible, avec assurance. Souvenez-vous de la Leçon 2 : une IA prédit la réponse la plus probable, pas forcément la vraie. Méfiez-vous d’une date donnée avec aplomb.\n\nD’où une règle simple. Les dates, les lieux, les noms, les décisions locales : c’est vous qui les apportez. L’assistant vous aide à les mettre en forme. Une association de jeunes de Lomé, au Togo, qui prépare un tournoi de football de quartier, donne elle-même le jour, le terrain et l’heure ; l’assistant rédige l’affiche et le message d’invitation autour de ces faits."
      }
    ],
    "example": {
      "title": "Hadiza, à la mairie de Garoua : une journée de salubrité préparée à la voix",
      "challenge": "Hadiza est agente à la mairie de Garoua, au Cameroun, chargée de l’information aux habitants ; sa langue maternelle est le haoussa. Samedi, la mairie organise une journée de salubrité dans un quartier, avec vingt volontaires. Elle doit répartir les tâches et prévenir les habitants. Elle n’a jamais parlé à une IA, elle a peu de temps et préfère parler qu’écrire. (Cas fictif.)",
      "solution": "Sur son téléphone Android, Hadiza ouvre Gemini, en version gratuite, et commence une nouvelle conversation. Elle appuie sur le micro et dicte : « Je travaille à la mairie de Garoua. Samedi, nous organisons une journée de salubrité dans un quartier, avec vingt volontaires. Aide-moi à préparer la liste des tâches. » La réponse est complète, mais trop longue pour des volontaires. Première relance dictée : « Plus court : cinq tâches au maximum, une phrase chacune. » L’assistant raccourcit sans qu’elle ait rien à répéter. Deuxième relance : « Maintenant, écris un message WhatsApp pour inviter les habitants. Rendez-vous samedi à sept heures, devant l’école du quartier. Ton simple et chaleureux. » L’heure et le lieu viennent de Hadiza, pas de l’IA. Elle copie le message et le colle dans un groupe WhatsApp de test, sans l’envoyer.",
      "impact": "En une seule conversation, à la voix, depuis son téléphone, Hadiza obtient une liste de cinq tâches claires à confier aux volontaires et un message d’invitation prêt, collé dans WhatsApp. Elle ne l’envoie pas tout de suite : elle le relira d’abord, avec la méthode que vous découvrirez dans la Leçon 6."
    },
    "practice": {
      "title": "Tenez votre première conversation avec un assistant",
      "instructions": [
        "Ouvrez un assistant gratuit (Gemini, ChatGPT, Claude ou Copilot), dans l’application ou dans le navigateur de votre téléphone, et connectez-vous avec votre adresse e-mail ou votre compte Google.",
        "Appuyez sur le micro et dictez cette consigne, en remplaçant les crochets par votre situation : « Tu es un assistant organisé et pratique. Je travaille comme [votre métier] à [votre ville]. Je dois [votre tâche, par exemple : organiser une réunion samedi]. Aide-moi à préparer les étapes de cette tâche. Réponds par une liste de 5 étapes simples. Si une information te manque, pose-moi d’abord une question. » Si l’assistant vous pose une question, répondez-lui.",
        "Relancez au moins deux fois dans la même conversation, par exemple « Plus court », puis « Donne un exemple ». Copiez le résultat dans vos notes, puis écrivez une chose utile et une chose à corriger."
      ],
      "observation": "Vous constatez que l’assistant tient compte de ce que vous avez dit avant : à chaque relance, il ajuste sa réponse sans que vous répétiez votre situation. La réponse devient plus utile à mesure que vous précisez. Vous remarquez aussi que les détails locaux justes (dates, lieux, noms) viennent de vous : s’il en invente, c’est à vous de les corriger."
    },
    "quiz": [
      {
        "question": "Quelle est la différence entre un assistant IA et un moteur de recherche ?",
        "options": [
          { "key": "A", "text": "Aucune" },
          { "key": "B", "text": "Un assistant ne fonctionne qu’en anglais" },
          { "key": "C", "text": "Avec un assistant, on dialogue en phrases complètes et on relance" },
          { "key": "D", "text": "Un moteur de recherche écrit des textes à votre place" }
        ],
        "answer": "C",
        "explanation": "Un moteur de recherche vous renvoie, à partir de quelques mots-clés, vers des pages qui existent déjà. Un assistant IA dialogue : vous lui parlez en phrases, vous donnez votre situation, et vous le relancez pour améliorer sa réponse. Il comprend d’ailleurs le français et bien d’autres langues."
      },
      {
        "question": "Hadiza tape seulement « salubrité Garoua ». Que risque-t-elle d’obtenir ?",
        "options": [
          { "key": "A", "text": "Une réponse générale, peu utile" },
          { "key": "B", "text": "La date exacte de la prochaine journée" },
          { "key": "C", "text": "Un message prêt à envoyer" },
          { "key": "D", "text": "La liste de ses volontaires" }
        ],
        "answer": "A",
        "explanation": "Deux mots ne disent rien de sa situation : ni le quartier, ni le samedi, ni les vingt volontaires. L’assistant ne peut donc produire qu’une réponse générale. Pour obtenir un résultat utile, il faut parler en phrases et donner son contexte."
      },
      {
        "question": "La liste proposée par l’assistant est trop longue. Que faites-vous ?",
        "options": [
          { "key": "A", "text": "Vous fermez l’application" },
          { "key": "B", "text": "Vous recopiez tout à la main" },
          { "key": "C", "text": "Vous changez de téléphone" },
          { "key": "D", "text": "Vous relancez : « Plus court, cinq tâches au maximum. »" }
        ],
        "answer": "D",
        "explanation": "Inutile de tout recommencer : dans la même conversation, l’assistant se souvient de votre demande. Une relance courte et précise suffit pour qu’il ajuste sa liste. La première réponse est un brouillon que vous faites grandir."
      },
      {
        "question": "Hadiza demande la date de la prochaine journée de salubrité, qui n’a été publiée nulle part. Que peut faire l’assistant ?",
        "options": [
          { "key": "A", "text": "Donner la date officielle" },
          { "key": "B", "text": "Dire qu’il ne sait pas, ou inventer une date plausible" },
          { "key": "C", "text": "Appeler la mairie" },
          { "key": "D", "text": "Lire les affiches du quartier" }
        ],
        "answer": "B",
        "explanation": "La date n’a été publiée nulle part : l’assistant ne peut pas la connaître, et il n’appelle personne ni ne lit les affiches. Soit il le dit honnêtement, soit il invente une date plausible, parce qu’il prédit le plus probable, pas le vrai. Les faits locaux viennent de vous."
      },
      {
        "question": "Dans une même conversation, que se passe-t-il quand vous relancez ?",
        "options": [
          { "key": "A", "text": "L’assistant tient compte de ce qui a été dit avant" },
          { "key": "B", "text": "L’assistant oublie tout" },
          { "key": "C", "text": "Il faut tout répéter depuis le début" },
          { "key": "D", "text": "L’assistant change de langue" }
        ],
        "answer": "A",
        "explanation": "Dans une même conversation, l’assistant garde en mémoire les échanges précédents. C’est ce qui permet de corriger ou de préciser sans tout répéter. Pour un nouveau sujet, mieux vaut ouvrir une nouvelle conversation."
      }
    ],
    "reflection": "Quelle tâche de votre semaine pourriez-vous préparer en conversant avec un assistant, et quels faits locaux devrez-vous lui apporter vous-même pour que sa réponse soit juste ?",
    "glossary": [
      {
        "term": "Assistant IA",
        "definition": "Programme avec qui l’on dialogue en langage courant, à l’écrit ou à la voix, comme avec une personne. Gemini, ChatGPT, Claude et Copilot en sont des exemples ; tous ont une version gratuite."
      },
      {
        "term": "Moteur de recherche",
        "definition": "Outil qui, à partir de quelques mots-clés, vous renvoie vers des pages web qui existent déjà. Il ne rédige pas de réponse adaptée à votre situation et ne se relance pas comme une conversation."
      },
      {
        "term": "Dictée vocale",
        "definition": "Façon de demander où vous appuyez sur le micro et parlez : votre phrase s’écrit à l’écran, vous la relisez, puis vous l’envoyez. Elle consomme peu de données, comme l’écrit."
      },
      {
        "term": "Conversation vocale en direct",
        "definition": "Mode où vous parlez à l’assistant et où il vous répond à voix haute, comme au téléphone. Très naturel, mais plus gourmand en données que l’écrit ou la dictée."
      },
      {
        "term": "Relance",
        "definition": "Nouvelle demande, dans la même conversation, pour améliorer la réponse précédente : « Plus court », « Plus simple », « Donne un exemple ». L’assistant tient compte de ce qui a déjà été dit."
      },
      {
        "term": "Faits locaux",
        "definition": "Les informations que vous seul connaissez : dates, lieux, noms, décisions de votre quartier ou de votre organisation. L’assistant ne peut pas les deviner ; vous les apportez, il les met en forme."
      }
    ]
  },
  "en": {
    "id": "is3",
    "lessonNumber": 3,
    "title": "Your First Conversation with an AI Assistant — Talk, Follow Up, Get a Useful Result",
    "objective": "By the end of this lesson, you will know how to hold a conversation with an AI assistant. You will be able to choose a free assistant, talk to it by typing, dictating or speaking, and follow up within the same conversation until you get a useful result. You will also know which information you must bring yourself: dates, places, names and local decisions.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "An assistant is not a search engine",
        "body": "Many people use an AI assistant like a search engine: they type two words and wait. Try “clean-up Garoua”: the answer is general and polite, but it knows nothing about your Saturday, your neighbourhood or your volunteers. A search engine points you to pages that already exist. An assistant, on the other hand, writes an answer for you, based on what you tell it.\n\nAn AI assistant is a program you hold a conversation with, as you would with a person. You speak in full sentences. You describe your situation: who you are, where you are, what you need to do. Spelling mistakes do not bother it much, and you need no technical words. Think of a new colleague you are handing a job to: the more you explain the situation, the better their help.\n\nTake a teacher in Bouaké, Côte d’Ivoire, who is preparing a parents’ meeting. If he types “parents meeting”, he gets vague advice. If he writes “You are an organised school assistant. I teach the final year of primary school in Bouaké and I am meeting thirty parents on Thursday to talk about the exams. Prepare the meeting agenda. Answer with a list of five points, one line each.”, the answer becomes usable. Above all, he can keep going: ask for something shorter, simpler, or a version to read aloud."
      },
      {
        "title": "A free assistant is enough to get started",
        "body": "Gemini, ChatGPT, Claude and Copilot all have a free version, and they all understand French and English. Depending on the country, Meta AI is also available directly inside WhatsApp. These assistants come as apps on Android and iPhone, and also open in your phone’s browser. You have nothing to pay to hold your first conversation.\n\nYou need an account: usually your email address or your Google account. It is like opening a mobile money account: once you have signed up, you find your conversations again each time you log in. Do not look for the “best” assistant before you start. One is enough. Choose the one that installs and works well on your phone, with your network.\n\nAn apprentice seamstress in Cotonou, Benin, does not need to compare four apps to ask for message ideas for her customers. She installs the one her sister already uses, logs in with her email address, and starts. Free versions have their limits (number of messages, some features reserved), but for learning to hold a conversation, they are more than enough."
      },
      {
        "title": "Type, dictate or speak: three ways to ask",
        "body": "First way: type, with the keyboard, as in a text message. Second way: dictate. You press the microphone, you speak, and your sentence writes itself on the screen. You read it back, fix a word if needed, then send. It is handy when you are walking, when your hands are busy, or when typing on a small screen is hard for you.\n\nThird way: talk out loud, live, as on a phone call. The assistant listens and answers you aloud. It feels very natural, but watch your data plan: a voice conversation uses more data than text. On 3G or with a small data plan, prefer dictation: you keep the ease of speaking, the lightness of text, and a written record you can read again.\n\nA market gardener in Bobo-Dioulasso, Burkina Faso, dictates his questions between two vegetable beds, without putting down his watering can. You can also try dictating in your own language: depending on the assistant and the language, speech is recognised more or less well. Always read the dictated text before sending it, because one misheard word can change the whole request."
      },
      {
        "title": "Follow up, and bring your local facts",
        "body": "The third idea is the most useful: follow up. Within the same conversation, the assistant takes into account everything that was said before. So you can correct without repeating everything: “Shorter.” “Simpler.” “Give an example.” “Explain this word to me.” “Ask me questions.” The first answer is a draft; you are the one who makes it grow, as you would with a colleague. For a new topic, open a new conversation: your exchanges stay clear and tidy.\n\nNow make a prediction. Hadiza asks: “What is the date of the next clean-up day in Garoua?” The assistant cannot know: the date has not been published anywhere. Either it says so honestly, or it invents a plausible date, confidently. Remember Lesson 2: an AI predicts the most likely answer, not necessarily the true one. Be wary of a date given with great confidence.\n\nHence a simple rule. Dates, places, names, local decisions: you are the one who brings them. The assistant helps you put them into shape. A youth association in Lomé, Togo, preparing a neighbourhood football tournament, gives the day, the pitch and the time itself; the assistant writes the poster and the invitation message around those facts."
      }
    ],
    "example": {
      "title": "Hadiza, at Garoua town hall: a clean-up day prepared by voice",
      "challenge": "Hadiza works at Garoua town hall, in Cameroon, in charge of informing residents; her mother tongue is Hausa. On Saturday, the town hall is organising a clean-up day in one neighbourhood, with twenty volunteers. She has to share out the tasks and let residents know. She has never talked to an AI, she has little time and prefers speaking to writing. (Fictional case.)",
      "solution": "On her Android phone, Hadiza opens Gemini, in its free version, and starts a new conversation. She presses the microphone and dictates: “I work at Garoua town hall. On Saturday, we are organising a clean-up day in one neighbourhood, with twenty volunteers. Help me prepare the list of tasks.” The answer is complete, but too long for volunteers. First dictated follow-up: “Shorter: five tasks at most, one sentence each.” The assistant shortens it without her repeating anything. Second follow-up: “Now write a WhatsApp message to invite residents. Meeting point on Saturday at seven o’clock, in front of the neighbourhood school. Simple and warm tone.” The time and the place come from Hadiza, not from the AI. She copies the message and pastes it into a test WhatsApp group, without sending it.",
      "impact": "In a single conversation, by voice, from her phone, Hadiza gets a list of five clear tasks to give the volunteers and a ready invitation message, pasted into WhatsApp. She does not send it straight away: she will read it over first, using the method you will discover in Lesson 6."
    },
    "practice": {
      "title": "Hold your first conversation with an assistant",
      "instructions": [
        "Open a free assistant (Gemini, ChatGPT, Claude or Copilot), in the app or in your phone’s browser, and log in with your email address or your Google account.",
        "Press the microphone and dictate this instruction, replacing the brackets with your own situation: “You are an organised and practical assistant. I work as [your job] in [your town]. I need to [your task, for example: organise a meeting on Saturday]. Help me prepare the steps for this task. Answer with a list of 5 simple steps. If any information is missing, ask me a question first.” If the assistant asks you a question, answer it.",
        "Follow up at least twice in the same conversation, for example “Shorter”, then “Give an example”. Copy the result into your notes, then write down one useful thing and one thing to correct."
      ],
      "observation": "You notice that the assistant takes into account what you said before: with each follow-up, it adjusts its answer without you repeating your situation. The answer becomes more useful as you add detail. You also notice that the correct local details (dates, places, names) come from you: if it invents any, it is up to you to correct them."
    },
    "quiz": [
      {
        "question": "What is the difference between an AI assistant and a search engine?",
        "options": [
          { "key": "A", "text": "There is none" },
          { "key": "B", "text": "An assistant only works in English" },
          { "key": "C", "text": "With an assistant, you hold a conversation in full sentences and follow up" },
          { "key": "D", "text": "A search engine writes texts for you" }
        ],
        "answer": "C",
        "explanation": "A search engine uses a few keywords to point you to pages that already exist. An AI assistant holds a conversation: you speak to it in sentences, describe your situation, and follow up to improve its answer. It also understands French, English and many other languages."
      },
      {
        "question": "Hadiza only types “clean-up Garoua”. What is she likely to get?",
        "options": [
          { "key": "A", "text": "A general answer, not very useful" },
          { "key": "B", "text": "The exact date of the next clean-up day" },
          { "key": "C", "text": "A message ready to send" },
          { "key": "D", "text": "The list of her volunteers" }
        ],
        "answer": "A",
        "explanation": "Two words say nothing about her situation: not the neighbourhood, not the Saturday, not the twenty volunteers. So the assistant can only produce a general answer. To get a useful result, you need to speak in sentences and give your context."
      },
      {
        "question": "The list suggested by the assistant is too long. What do you do?",
        "options": [
          { "key": "A", "text": "You close the app" },
          { "key": "B", "text": "You copy everything out by hand" },
          { "key": "C", "text": "You change phones" },
          { "key": "D", "text": "You follow up: “Shorter, five tasks at most.”" }
        ],
        "answer": "D",
        "explanation": "No need to start over: within the same conversation, the assistant remembers your request. A short, precise follow-up is enough for it to adjust its list. The first answer is a draft that you make grow."
      },
      {
        "question": "Hadiza asks for the date of the next clean-up day, which has not been published anywhere. What can the assistant do?",
        "options": [
          { "key": "A", "text": "Give the official date" },
          { "key": "B", "text": "Say it does not know, or invent a plausible date" },
          { "key": "C", "text": "Call the town hall" },
          { "key": "D", "text": "Read the posters in the neighbourhood" }
        ],
        "answer": "B",
        "explanation": "The date has not been published anywhere: the assistant cannot know it, and it neither calls anyone nor reads posters. Either it says so honestly, or it invents a plausible date, because it predicts the most likely answer, not the true one. Local facts come from you."
      },
      {
        "question": "Within the same conversation, what happens when you follow up?",
        "options": [
          { "key": "A", "text": "The assistant takes into account what was said before" },
          { "key": "B", "text": "The assistant forgets everything" },
          { "key": "C", "text": "You have to repeat everything from the start" },
          { "key": "D", "text": "The assistant switches language" }
        ],
        "answer": "A",
        "explanation": "Within the same conversation, the assistant keeps the earlier exchanges in memory. That is what lets you correct or refine without repeating everything. For a new topic, it is better to open a new conversation."
      }
    ],
    "reflection": "Which task in your week could you prepare by talking with an assistant, and which local facts will you need to bring yourself so that its answer is correct?",
    "glossary": [
      {
        "term": "AI assistant",
        "definition": "A program you converse with in everyday language, by text or by voice, as you would with a person. Gemini, ChatGPT, Claude and Copilot are examples; all of them have a free version."
      },
      {
        "term": "Search engine",
        "definition": "A tool that uses a few keywords to point you to web pages that already exist. It does not write an answer tailored to your situation and you cannot follow up with it as in a conversation."
      },
      {
        "term": "Voice dictation",
        "definition": "A way of asking where you press the microphone and speak: your sentence appears on the screen, you read it back, then send it. It uses little data, like typing."
      },
      {
        "term": "Live voice conversation",
        "definition": "A mode where you speak to the assistant and it answers you aloud, as on a phone call. Very natural, but it uses more data than typing or dictation."
      },
      {
        "term": "Follow-up",
        "definition": "A new request, in the same conversation, to improve the previous answer: “Shorter”, “Simpler”, “Give an example”. The assistant takes into account what has already been said."
      },
      {
        "term": "Local facts",
        "definition": "Information only you know: dates, places, names, decisions in your neighbourhood or organisation. The assistant cannot guess them; you bring them, and it puts them into shape."
      }
    ]
  },
  "ha": {
    "id": "is3",
    "lessonNumber": 3,
    "title": "Tattaunawarku ta farko da mataimakin AI — magana, sake tambaya, samun sakamako mai amfani",
    "objective": "A karshen wannan darasi, za ku san yadda ake tattaunawa da mataimakin AI. Za ku iya zaben mataimaki na kyauta, ku yi masa magana ta rubutu, ta furta rubutu da murya, ko kai tsaye ta murya, kuma ku sake tambayarsa a cikin tattaunawa daya har sai kun samu sakamako mai amfani. Za ku kuma san bayanan da dole ne ku kawo da kanku: kwanaki, wurare, sunaye da shawarwarin yankinku.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Mataimakin AI ba injin bincike ba ne",
        "body": "Mutane da yawa suna amfani da mataimakin AI kamar injin bincike: suna rubuta kalmomi biyu, sannan su jira. Gwada « tsaftar muhalli Garoua »: amsar za ta zama ta gaba daya, mai ladabi, amma ba ta san komai game da ranar Asabar dinku, unguwarku ko masu aikin sa kai ba. Injin bincike yana kai ku zuwa shafukan da ke nan tun tuni. Mataimaki kuwa yana rubuta muku amsa, bisa abin da kuka gaya masa.\n\nMataimakin AI shiri ne da ake tattaunawa da shi, kamar da mutum. Kuna magana da cikakkun jimloli. Kuna bayyana halin da kuke ciki: ko ku wane ne, a ina kuke, me kuke bukatar yi. Kurakuran rubutu ba sa damunsa sosai, kuma ba kwa bukatar kalmomin fasaha. Ku dauke shi kamar sabon abokin aiki da kuke ba shi wani aiki: yawan bayanin da kuka yi masa, haka taimakonsa zai fi dacewa.\n\nMisali, wani malami a Bouaké, a Côte d’Ivoire, yana shirya taron iyayen dalibai. Idan ya rubuta « taron iyaye » kawai, zai samu shawarwari marasa tabbas. Amma idan ya rubuta « Kai mataimakin makaranta ne mai tsari. Ni malami ne na aji shida a firamare a Bouaké, kuma zan tara iyaye talatin ranar Alhamis don maganar jarrabawa. Shirya ajandar taron. Ka amsa da jerin abubuwa biyar, layi daya kowanne. », amsar za ta zama mai amfani. Kuma mafi muhimmanci, zai iya ci gaba: ya nemi a takaita, a saukaka, ko a ba shi sigar da zai karanta da babbar murya."
      },
      {
        "title": "Mataimaki na kyauta ya isa don farawa",
        "body": "Gemini, ChatGPT, Claude da Copilot duk suna da sigar kyauta, kuma duk suna fahimtar Faransanci da Turanci. A wasu kasashe, Meta AI ma yana nan kai tsaye a cikin WhatsApp. Wadannan mataimakan suna da manhaja a Android da iPhone, kuma ana iya bude su a burauzar waya. Ba za ku biya komai ba don yin tattaunawarku ta farko.\n\nKuna bukatar asusu: galibi adireshin imel dinku ko asusun Google. Kamar bude asusun kudi ta waya (mobile money) ne: da zarar kun yi rajista, za ku sami tattaunawarku duk lokacin da kuka shiga. Kada ku nemi « mafi kyawun » mataimaki kafin ku fara. Daya ya isa. Ku zabi wanda ke sauka kuma yake aiki da kyau a wayarku, da hanyar sadarwarku.\n\nWata mai koyon dinki a Cotonou, a Benin, ba ta bukatar kwatanta manhajoji hudu don neman ra’ayoyin sakonnin da za ta aika wa kwastomominta. Tana sauke wadda ’yar uwarta ke amfani da ita, ta shiga da adireshin imel dinta, ta fara. Sigogin kyauta suna da iyakarsu (yawan sakonni, wasu ayyuka da aka kebe), amma don koyon tattaunawa, sun isa sosai."
      },
      {
        "title": "Rubutu, furtawa ko magana: hanyoyi uku na tambaya",
        "body": "Hanya ta farko: rubutu, da madannin rubutu, kamar SMS. Hanya ta biyu: furta rubutu da murya. Kuna danna makirufo, ku yi magana, sai jimlarku ta rubuta kanta a allo. Kuna karanta ta, ku gyara wata kalma idan akwai bukata, sannan ku aika. Yana da sauki idan kuna tafiya, idan hannayenku sun shagala, ko idan rubutu a karamin allo yana muku wuya.\n\nHanya ta uku: tattaunawa kai tsaye ta murya, kamar a waya. Mataimakin yana sauraronku kuma yana amsa muku da murya. Abu ne mai saukin gaske, amma ku kula da kunshin intanet dinku: tattaunawa ta murya tana cin data fiye da rubutu. Idan kuna kan 3G ko kunshinku karami ne, ku fi son furta rubutu: kuna samun saukin murya, da saukin data na rubutu, da kuma rubutaccen abin da za ku iya sake karantawa.\n\nWani manomin kayan lambu a Bobo-Dioulasso, a Burkina Faso, yana furta tambayoyinsa tsakanin gadajen kayan lambu, ba tare da ajiye bokitin ban ruwa ba. Kuna iya gwada furta rubutu da harshenku: ya danganta da mataimakin da harshen, ana gane murya da kyau ko kasa da haka. Ku rika karanta rubutun da aka furta kafin ku aika, domin kalma daya da aka ji ba daidai ba na iya canza duk bukatar."
      },
      {
        "title": "Sake tambaya, da kawo bayanan yankinku",
        "body": "Ra’ayi na uku shi ne mafi amfani: sake tambaya. A cikin tattaunawa daya, mataimakin yana la’akari da duk abin da aka fada a baya. Don haka kuna iya gyarawa ba tare da maimaita komai ba: « A takaita. » « A saukaka. » « Ba ni misali. » « Bayyana min wannan kalma. » « Yi min tambayoyi. » Amsa ta farko kamar daftari ce; ku ne kuke inganta ta, kamar tare da abokin aiki. Don sabon batu, ku bude sabuwar tattaunawa: tattaunawarku za su kasance a fili kuma a tsare.\n\nYanzu ku yi hasashe. Hadiza ta tambaya: « Wace rana ce ranar tsaftar muhalli ta gaba a Garoua? » Mataimakin ba zai iya sani ba: ba a buga ranar a ko’ina ba. Ko dai ya fada da gaskiya cewa bai sani ba, ko kuma ya kirkiri wata rana mai kama da gaskiya, cikin kwarin gwiwa. Ku tuna da Darasi 2: AI tana hasashen amsar da ta fi yiwuwa, ba lallai ta gaskiya ba. Ku yi hattara da ranar da aka bayar cikin tabbaci.\n\nDaga nan akwai doka mai sauki. Kwanaki, wurare, sunaye, shawarwarin yanki: ku ne ke kawo su. Mataimakin yana taimaka muku ku tsara su. Wata kungiyar matasa a Lomé, a Togo, da ke shirya gasar kwallon kafa ta unguwa, ita da kanta take bayar da ranar, filin wasa da lokaci; mataimakin yana rubuta fosta da sakon gayyata bisa wadannan bayanai."
      }
    ],
    "example": {
      "title": "Hadiza, a ofishin magajin garin Garoua: ranar tsaftar muhalli da aka shirya da murya",
      "challenge": "Hadiza ma’aikaciya ce a ofishin magajin garin Garoua, a Kamaru, mai kula da yada bayanai ga mazauna; harshen haihuwarta Hausa ne. Ranar Asabar, ofishin magajin gari zai shirya ranar tsaftar muhalli a wata unguwa, tare da masu aikin sa kai ashirin. Dole ne ta raba ayyuka kuma ta sanar da mazauna. Ba ta taba magana da AI ba, lokacinta kadan ne, kuma ta fi son magana fiye da rubutu. (Labarin kirkira ne.)",
      "solution": "A wayarta ta Android, Hadiza ta bude Gemini, a sigar kyauta, ta fara sabuwar tattaunawa. Ta danna makirufo ta furta: « Ina aiki a ofishin magajin garin Garoua. Ranar Asabar, za mu shirya ranar tsaftar muhalli a wata unguwa, tare da masu aikin sa kai ashirin. Taimake ni in shirya jerin ayyuka. » Amsar ta zo cikakkiya, amma ta yi tsawo ga masu aikin sa kai. Sake tambaya ta farko da murya: « A takaita: ayyuka biyar a mafi yawa, jimla daya kowanne. » Mataimakin ya takaita ba tare da ta maimaita komai ba. Sake tambaya ta biyu: « Yanzu, rubuta sakon WhatsApp don gayyatar mazauna. Taron ranar Asabar karfe bakwai na safe, a gaban makarantar unguwa. Salo mai sauki da armashi. » Lokaci da wurin daga Hadiza suka fito, ba daga AI ba. Ta kwafi sakon ta manna shi a wani rukunin WhatsApp na gwaji, ba tare da aikawa ba.",
      "impact": "A tattaunawa daya, da murya, daga wayarta, Hadiza ta samu jerin ayyuka biyar bayyanannu da za ta ba masu aikin sa kai, da sakon gayyata a shirye, a manne a WhatsApp. Ba ta aika shi nan take ba: za ta fara sake karanta shi, da hanyar da za ku gano a Darasi 6."
    },
    "practice": {
      "title": "Ku yi tattaunawarku ta farko da mataimaki",
      "instructions": [
        "Ku bude mataimaki na kyauta (Gemini, ChatGPT, Claude ko Copilot), a manhaja ko a burauzar wayarku, sannan ku shiga da adireshin imel dinku ko asusun Google.",
        "Ku danna makirufo ku furta wannan umarni, kuna maye gurbin kalmomin da ke cikin baka da bayananku: « Kai mataimaki ne mai tsari kuma mai amfani. Ina aiki a matsayin [sana’arku] a [garinku]. Dole ne in [aikinku, misali: shirya taro ranar Asabar]. Taimake ni in shirya matakan wannan aiki. Ka amsa da jerin matakai 5 masu sauki. Idan wani bayani ya rasa, ka fara yi min tambaya. » Idan mataimakin ya yi muku tambaya, ku amsa masa.",
        "Ku sake tambaya akalla sau biyu a cikin tattaunawa daya, misali « A takaita », sannan « Ba ni misali ». Ku kwafi sakamakon a cikin bayananku, sannan ku rubuta abu daya mai amfani da abu daya da za a gyara."
      ],
      "observation": "Za ku lura cewa mataimakin yana la’akari da abin da kuka fada a baya: a kowace sake tambaya, yana daidaita amsarsa ba tare da kun maimaita halin da kuke ciki ba. Amsar tana kara amfani yayin da kuke kara bayani. Za ku kuma lura cewa ingantattun bayanan yanki (kwanaki, wurare, sunaye) daga gare ku suke fitowa: idan ya kirkiri wasu, ku ne za ku gyara su."
    },
    "quiz": [
      {
        "question": "Mene ne bambanci tsakanin mataimakin AI da injin bincike?",
        "options": [
          { "key": "A", "text": "Babu bambanci" },
          { "key": "B", "text": "Mataimaki yana aiki ne da Turanci kawai" },
          { "key": "C", "text": "Da mataimaki, ana tattaunawa da cikakkun jimloli kuma ana sake tambaya" },
          { "key": "D", "text": "Injin bincike yana rubuta muku rubutu" }
        ],
        "answer": "C",
        "explanation": "Injin bincike yana amfani da wasu kalmomi kadan don kai ku zuwa shafukan da ke nan tun tuni. Mataimakin AI kuwa yana tattaunawa: kuna yi masa magana da jimloli, kuna bayyana halin da kuke ciki, kuma kuna sake tambayarsa don inganta amsarsa. Yana kuma fahimtar Faransanci, Turanci da wasu harsuna da yawa."
      },
      {
        "question": "Hadiza ta rubuta « tsaftar muhalli Garoua » kawai. Me za ta iya samu?",
        "options": [
          { "key": "A", "text": "Amsa ta gaba daya, mara amfani sosai" },
          { "key": "B", "text": "Ainihin ranar tsaftar muhalli ta gaba" },
          { "key": "C", "text": "Sako a shirye don aikawa" },
          { "key": "D", "text": "Jerin masu aikin sa kai nata" }
        ],
        "answer": "A",
        "explanation": "Kalmomi biyu ba sa bayyana komai game da halin da take ciki: ba unguwar ba, ba ranar Asabar ba, ba masu aikin sa kai ashirin ba. Don haka mataimakin zai iya bayar da amsa ta gaba daya kawai. Don samun sakamako mai amfani, sai a yi magana da jimloli kuma a bayar da bayanan yanayi."
      },
      {
        "question": "Jerin da mataimakin ya bayar ya yi tsawo. Me za ku yi?",
        "options": [
          { "key": "A", "text": "Ku rufe manhajar" },
          { "key": "B", "text": "Ku sake rubuta komai da hannu" },
          { "key": "C", "text": "Ku canza waya" },
          { "key": "D", "text": "Ku sake tambaya: « A takaita, ayyuka biyar a mafi yawa. »" }
        ],
        "answer": "D",
        "explanation": "Ba sai kun sake farawa ba: a cikin tattaunawa daya, mataimakin yana tuna bukatarku. Sake tambaya gajeriya kuma takamaimai ta isa ya daidaita jerinsa. Amsa ta farko daftari ce da ku ke inganta ta."
      },
      {
        "question": "Hadiza ta tambayi ranar tsaftar muhalli ta gaba, wadda ba a buga ko’ina ba. Me mataimakin zai iya yi?",
        "options": [
          { "key": "A", "text": "Ya bayar da ranar hukuma" },
          { "key": "B", "text": "Ya ce bai sani ba, ko ya kirkiri wata rana mai kama da gaskiya" },
          { "key": "C", "text": "Ya kira ofishin magajin gari" },
          { "key": "D", "text": "Ya karanta fostocin unguwa" }
        ],
        "answer": "B",
        "explanation": "Ba a buga ranar a ko’ina ba: mataimakin ba zai iya saninta ba, kuma ba ya kiran kowa ko karanta fosta. Ko dai ya fada da gaskiya, ko ya kirkiri wata rana mai kama da gaskiya, saboda yana hasashen abin da ya fi yiwuwa, ba gaskiya ba. Bayanan yanki daga gare ku suke fitowa."
      },
      {
        "question": "A cikin tattaunawa daya, me ke faruwa idan kuka sake tambaya?",
        "options": [
          { "key": "A", "text": "Mataimakin yana la’akari da abin da aka fada a baya" },
          { "key": "B", "text": "Mataimakin yana manta komai" },
          { "key": "C", "text": "Dole ne a maimaita komai tun daga farko" },
          { "key": "D", "text": "Mataimakin yana canza harshe" }
        ],
        "answer": "A",
        "explanation": "A cikin tattaunawa daya, mataimakin yana rike da musayar maganganun da suka gabata. Wannan ne ke ba ku damar gyarawa ko kara bayani ba tare da maimaita komai ba. Don sabon batu, ya fi kyau a bude sabuwar tattaunawa."
      }
    ],
    "reflection": "Wane aiki ne na makon nan za ku iya shiryawa ta hanyar tattaunawa da mataimaki, kuma wadanne bayanan yanki ne za ku kawo da kanku don amsarsa ta zama daidai?",
    "glossary": [
      {
        "term": "Assistant IA (mataimakin AI)",
        "definition": "Shiri ne da ake tattaunawa da shi da harshen yau da kullum, ta rubutu ko ta murya, kamar da mutum. Gemini, ChatGPT, Claude da Copilot misalai ne; duk suna da sigar kyauta."
      },
      {
        "term": "Moteur de recherche (injin bincike)",
        "definition": "Kayan aiki ne da ke amfani da wasu kalmomi kadan don kai ku zuwa shafukan intanet da ke nan tun tuni. Ba ya rubuta amsa da ta dace da halin da kuke ciki, kuma ba a sake tambayarsa kamar a tattaunawa."
      },
      {
        "term": "Dictée vocale (furta rubutu da murya)",
        "definition": "Hanyar tambaya inda kuke danna makirufo ku yi magana: jimlarku tana bayyana a allo, ku karanta ta, sannan ku aika. Ba ta cin data sosai, kamar rubutu."
      },
      {
        "term": "Conversation vocale en direct (tattaunawa kai tsaye ta murya)",
        "definition": "Yanayin da kuke yi wa mataimakin magana, shi kuma yana amsa muku da murya, kamar a waya. Yana da saukin gaske, amma yana cin data fiye da rubutu ko furta rubutu."
      },
      {
        "term": "Relance (sake tambaya)",
        "definition": "Sabuwar bukata, a cikin tattaunawa daya, don inganta amsar da ta gabata: « A takaita », « A saukaka », « Ba ni misali ». Mataimakin yana la’akari da abin da aka riga aka fada."
      },
      {
        "term": "Faits locaux (bayanan yanki)",
        "definition": "Bayanan da ku kadai kuka sani: kwanaki, wurare, sunaye, shawarwarin unguwarku ko kungiyarku. Mataimakin ba zai iya hasashensu ba; ku ne ke kawo su, shi kuma yana tsara su."
      }
    ]
  }
};
