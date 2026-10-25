import { Language } from '../../translations';
import { LessonContent } from '../../lessonContent';

// Module « Choisir le bon outil IA gratuit et installer une IA open source » (outils-ia-gratuits) — leçon og1 (Choisir la bonne famille d'outils IA)
// Texte aligné sur le CLAUDE.md de production vidéo du cours 15 (docs/production-video/claude-md/).
// Trilingue FR / EN / HA. ⚠️ Traductions HA à faire valider par un locuteur natif haoussa.
export const ogLesson1: Record<Language, LessonContent> = {
  "fr": {
    "id": "og1",
    "lessonNumber": 1,
    "title": "Choisir la bonne famille d’outils IA pour chaque tâche",
    "objective": "À la fin de cette leçon, vous saurez relier chaque tâche à une famille d’outils IA. Vous saurez partir de la tâche plutôt que de l’outil, et reconnaître les cinq familles retenues dans ce cours : les assistants, la recherche sourcée, l’image, l’audio et vos propres documents. Vous saurez faire préparer une fiche de révision à NotebookLM avec une consigne RCTF, puis vérifier chaque point grâce à sa citation. Vous saurez aussi distinguer une application, comme ChatGPT ou Gemini, du modèle qui répond derrière elle.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Commencer par la tâche, pas par l’outil",
        "body": "Beaucoup de gens choisissent un outil IA comme on choisit un plat parce que tout le monde le commande : on installe l’application dont on parle, puis on cherche à quoi elle peut servir. C’est le cas de Koffi, étudiant en licence à Lomé, au Togo. Il a installé cinq applications d’IA le même jour. Son téléphone sature, ses données mobiles fondent, et pourtant il ouvre toujours la même application, pour tout. Pour réviser un long cours en PDF, il le colle page par page dans un assistant : c’est long, et il ne sait jamais de quelle page vient chaque phrase de la réponse.\n\nLe malentendu est là : choisir l’outil d’abord, la tâche ensuite. La bonne question vient avant : quelle est ma tâche ? Un menuisier ne prend pas son marteau pour scier une planche ; il regarde d’abord le travail à faire, puis il ouvre la bonne case de sa caisse à outils. Avec l’IA, la chaîne est la même : la tâche, puis la famille d’outils, puis l’outil, puis un plan B si cet outil ne répond plus.\n\nDans ce cours, nous retenons cinq familles : les assistants, la recherche sourcée, l’image, l’audio et vos propres documents. Ce n’est pas une norme officielle, c’est un classement pratique de Karatou, pensé pour décider vite. Une commerçante de Cotonou, au Bénin, qui veut rédiger une annonce, vérifier un tarif douanier récent et transcrire le message vocal d’un fournisseur a trois tâches, donc trois familles, et pas forcément trois applications de plus. Ces familles ne sont pas des murs : un même assistant peut couvrir plusieurs cases. Ce qui compte, c’est de savoir quelle case vous ouvrez, et pourquoi."
      },
      {
        "title": "Écrire, chercher, créer : les assistants, la recherche sourcée, l’image et l’audio",
        "body": "La première famille, ce sont les assistants : Gemini, ChatGPT, Claude, Copilot. Ils écrivent, expliquent, résument et traduisent un premier jet. Voyez-les comme un collègue rapide et cultivé, mais qui parle parfois avec trop d’assurance : il peut se tromper ou inventer un détail, et il ne dit pas toujours d’où vient son information. Un formateur de Bamako, au Mali, peut lui demander d’expliquer une notion de comptabilité avec un exemple tiré du marché ; il relira ensuite la réponse, comme il relirait le travail d’un stagiaire.\n\nLa deuxième famille, c’est la recherche sourcée : Perplexity, ou le mode recherche intégré à certains assistants. La réponse s’appuie sur des pages web numérotées, que vous pouvez ouvrir pour vérifier. C’est la famille à choisir pour une information récente ou datée : un calendrier d’inscription, une nouvelle réglementation, un appel à candidatures. Une source numérotée n’est pas forcément une bonne source : la Leçon 3 vous apprendra à les trier.\n\nTroisième et quatrième familles : l’image et l’audio. Gemini crée et retouche des images avec son outil d’image, et d’autres assistants le font aussi : une affiche d’atelier, une illustration pour un exposé. Côté audio, l’IA sait écrire ce que vous dictez, transcrire un enregistrement ou lire un texte à voix haute, ce qui aide à réviser en marchant ou à garder la trace d’une réunion d’association à Abidjan. Deux limites honnêtes : une image générée n’est jamais une photo, on ne la fait donc pas passer pour vraie ; et la transcription reste moins fiable dans les langues peu présentes en ligne, comme l’éwé ou le haoussa, ce qui impose une relecture."
      },
      {
        "title": "Travailler sur vos propres documents : NotebookLM (devenu Gemini Notebook) et la citation",
        "body": "La cinquième famille travaille sur vos documents à vous. NotebookLM, de Google, répond à partir des fichiers que vous déposez dans un notebook, c’est-à-dire un carnet de travail : un cours, un rapport, un règlement intérieur. Il ne cherche pas ailleurs, il lit vos pages. Et surtout, il cite le passage exact : chaque point de sa réponse porte un petit numéro qui renvoie à l’endroit du document d’où il vient.\n\nCe petit numéro change tout. Avec un assistant classique, vous devez croire la réponse sur parole ou tout relire. Ici, vous touchez le numéro et le passage s’affiche, surligné : vous vérifiez d’un seul geste, comme on retrouve une recette dans un cahier grâce à son numéro de page. Une agente de santé communautaire à Kisumu, au Kenya, qui dépose le guide officiel de son programme, peut ainsi retrouver la phrase exacte avant de répondre à une famille. Une précaution : ne déposez que des documents sans donnée personnelle ; la Leçon 4 expliquera pourquoi.\n\nCette force a son revers. Koffi veut maintenant connaître la date limite d’un concours de cette année : NotebookLM peut-il répondre ? Non. Il ne connaît que les documents déposés dans le carnet ; si l’information n’y est pas, il n’est pas fait pour aller la chercher ailleurs, et une bonne consigne lui demande même d’écrire « absent de mes sources ». Pour une information récente, il faut changer de famille et passer à la recherche sourcée. Voilà l’intérêt des familles : savoir ce qu’un outil fait bien, et ce qu’il ne peut pas faire."
      },
      {
        "title": "L’application n’est pas le modèle : ce qui répond derrière ChatGPT, Gemini et Claude",
        "body": "Un dernier repère, très utile pour la suite du cours : l’application n’est pas le modèle. L’application, c’est ce que vous voyez et touchez : l’icône, la zone où vous tapez, l’historique de vos conversations. Le modèle, c’est le moteur qui calcule la réponse, en coulisse. Pensez à une moto : vous voyez la selle, le guidon et le compteur, mais c’est le moteur, caché, qui la fait avancer.\n\nChatGPT est l’application ; GPT est le modèle qui répond derrière. Gemini est l’application, qui fonctionne avec des modèles Gemini de Google ; Google publie aussi des modèles ouverts, comme Gemma, mais ce ne sont pas eux qui répondent dans l’application Gemini. Claude, enfin, est à la fois le nom de l’application et celui des modèles qui tournent derrière. Ces modèles changent souvent de version, alors que l’application garde le même nom : raison de plus pour juger un outil sur votre tâche, plutôt que sur sa réputation.\n\nPourquoi ce repère compte-t-il ? Parce que certains modèles sont dits ouverts : leurs fichiers sont publiés et peuvent s’installer sur votre propre appareil, téléphone ou ordinateur. C’est le cas de familles comme Gemma, Llama, Qwen, Mistral ou DeepSeek. Une fois installé, un tel modèle peut répondre sans connexion, et vos données restent chez vous : un atout pour un étudiant dans un bus sans réseau, ou pour un cabinet comptable de Casablanca, au Maroc, qui manipule des dossiers sensibles. En contrepartie, ces modèles installés sont souvent plus petits, et leurs réponses plus simples que celles des grandes applications en ligne. Les Leçons 5 et 6 vous montreront comment faire ; pour l’instant, retenez que derrière chaque application se cache un modèle, et que certains peuvent venir chez vous."
      }
    ],
    "example": {
      "title": "Koffi, étudiant à Lomé : de cinq applications à une fiche de révision qui cite son cours",
      "challenge": "Koffi est étudiant en licence à Lomé, au Togo. Il parle français et éwé, et révise sur son téléphone, souvent sans réseau dans le bus. Il a installé cinq applications d’IA le même jour : son téléphone sature et ses données mobiles s’épuisent vite. Pour réviser un long cours en PDF, il le colle page par page dans un assistant. C’est long, et il ne sait jamais de quelle page vient chaque phrase de la réponse. Ses examens approchent, avec un téléphone limité et peu de données.",
      "solution": "Koffi part de sa tâche : réviser son propre cours. C’est la famille « documents ». Dans NotebookLM, version gratuite, il crée un notebook, c’est-à-dire un carnet de travail, et y dépose le PDF de son cours. Il tape une consigne RCTF en quatre blocs : « Rôle : tu es un tuteur de révision, rigoureux et clair. Contexte : je suis étudiant en licence et je prépare mes examens. Mes sources sont le cours déposé dans ce carnet ; je révise sur téléphone. Tâche : à partir de mes sources uniquement, fais une fiche de révision du chapitre 2 en 10 points courts. Pour chaque point, indique la citation de la source. Format : des points numérotés, une phrase chacun, en français. Termine par 5 questions pour me tester, sans les réponses. Si une information n’est pas dans mes sources, écris “absent de mes sources”. » La fiche arrive en dix points, chacun avec un petit numéro de citation. Il touche un numéro : le passage du cours s’affiche, surligné. Il enregistre la fiche dans son carnet.",
      "impact": "Koffi ne garde que trois applications, une par besoin, et libère de la place sur son téléphone. Il révise désormais avec ses propres sources : une fiche de dix points, chacun relié à la page exacte de son cours, qu’il vérifie d’un seul geste. Et quand il a besoin d’une information récente, comme la date limite d’un concours, il sait qu’il doit changer de famille d’outils."
    },
    "practice": {
      "title": "Dressez la carte de vos tâches et de leurs familles",
      "instructions": [
        "Sur une feuille ou dans les notes de votre téléphone, listez cinq tâches réelles de votre semaine où l’IA pourrait vous aider : un message à rédiger, une information récente à trouver, une affiche, un message vocal à transcrire, un document à réviser.",
        "À côté de chaque tâche, notez sa famille : assistant, recherche sourcée, image, audio ou documents. Si vous hésitez, demandez-vous d’où doit venir la réponse : de vos propres fichiers, d’une information récente sur le web, ou d’un premier jet à écrire.",
        "Testez la famille « documents » : dans NotebookLM, créez un carnet et déposez-y un cours ou un document de travail sans donnée personnelle. Collez cette consigne RCTF en remplissant les crochets : Rôle : tu es un tuteur de révision, rigoureux et clair. Contexte : je prépare [mon examen, ma formation, ma réunion]. Mes sources sont les documents déposés dans ce carnet ; je révise sur téléphone. Tâche : à partir de mes sources uniquement, fais une fiche de révision de [chapitre ou thème] en [10] points courts. Pour chaque point, indique la citation de la source. Format : des points numérotés, une phrase chacun, en français. Termine par [5] questions pour me tester, sans les réponses. Si une information n’est pas dans mes sources, écris « absent de mes sources ». Touchez ensuite deux numéros de citation et vérifiez que le passage affiché dit bien ce que la fiche affirme."
      ],
      "observation": "Vos cinq tâches ne relèvent pas toutes de la même famille : souvent, deux ou trois familles couvrent l’essentiel de votre semaine, et une application que vous n’ouvrez jamais peut quitter votre téléphone. Dans NotebookLM, chaque citation ouvre le passage exact de votre document : vous voyez d’un geste si la fiche est fidèle, ou si un point a été mal résumé. Si vous demandez une information absente du document, l’outil devrait, comme le demande votre consigne, répondre « absent de mes sources » ; s’il ne le fait pas, c’est un signal pour relire de près."
    },
    "quiz": [
      {
        "question": "Par quoi commencer pour choisir un outil IA ?",
        "options": [
          { "key": "A", "text": "Par l’outil dont tout le monde parle" },
          { "key": "B", "text": "Par la tâche à accomplir" },
          { "key": "C", "text": "Par l’application la plus récente" },
          { "key": "D", "text": "Par la couleur de l’icône" }
        ],
        "answer": "B",
        "explanation": "La tâche d’abord, l’outil ensuite. On part de ce qu’on veut faire, on en déduit la famille d’outils, puis on choisit un outil de cette famille, avec un plan B. Choisir l’outil à la mode, la plus récente application ou une jolie icône, c’est prendre le marteau avant de savoir si l’on doit clouer ou scier."
      },
      {
        "question": "Koffi veut réviser son cours en PDF et retrouver chaque passage. Quelle famille ?",
        "options": [
          { "key": "A", "text": "Image" },
          { "key": "B", "text": "Audio" },
          { "key": "C", "text": "Documents, par exemple NotebookLM" },
          { "key": "D", "text": "Recherche sourcée" }
        ],
        "answer": "C",
        "explanation": "Koffi travaille sur son propre document : c’est la famille « documents ». NotebookLM répond à partir du PDF déposé et cite le passage exact de chaque point. La recherche sourcée, elle, s’appuie sur des pages web, pas sur son cours."
      },
      {
        "question": "Hadiza veut une affiche pour son atelier. Quelle famille ?",
        "options": [
          { "key": "A", "text": "Image" },
          { "key": "B", "text": "Documents" },
          { "key": "C", "text": "Recherche sourcée" },
          { "key": "D", "text": "Audio" }
        ],
        "answer": "A",
        "explanation": "Une affiche est un visuel : c’est la famille « image ». Gemini, par exemple, crée et retouche des images avec son outil d’image, et d’autres assistants le font aussi. Elle relira tout de même les textes de l’affiche, qui peuvent contenir des fautes."
      },
      {
        "question": "Koffi veut la date limite d’un concours de cette année. Quelle famille ?",
        "options": [
          { "key": "A", "text": "Documents" },
          { "key": "B", "text": "Image" },
          { "key": "C", "text": "Audio" },
          { "key": "D", "text": "Recherche sourcée" }
        ],
        "answer": "D",
        "explanation": "Une date limite de cette année est une information récente : c’est la famille « recherche sourcée », dont la réponse renvoie à des pages web numérotées que l’on peut ouvrir. NotebookLM ne connaît que les documents déposés ; il ne peut pas aller chercher cette date ailleurs."
      },
      {
        "question": "Dans NotebookLM, à quoi sert le petit numéro après chaque point ?",
        "options": [
          { "key": "A", "text": "À noter la réponse" },
          { "key": "B", "text": "À ouvrir le passage exact du document déposé" },
          { "key": "C", "text": "À compter les mots" },
          { "key": "D", "text": "À partager la fiche" }
        ],
        "answer": "B",
        "explanation": "Ce petit numéro est la citation. En le touchant, on ouvre le passage exact du document déposé, surligné, d’où vient le point. C’est ce qui permet de vérifier la fiche d’un seul geste, au lieu de croire la réponse sur parole."
      }
    ],
    "reflection": "Parmi les applications d’IA de votre téléphone, laquelle ouvrez-vous par habitude pour tout, et pour quelle tâche de votre semaine une autre famille d’outils serait-elle plus adaptée ?",
    "glossary": [
      {
        "term": "Famille d’outils IA",
        "definition": "Un groupe d’outils qui servent au même type de tâche. Ce cours en retient cinq : assistants, recherche sourcée, image, audio et documents. Comme les cases d’une caisse à outils, on choisit la case selon le travail à faire."
      },
      {
        "term": "Assistant IA",
        "definition": "Une application de conversation, comme Gemini, ChatGPT, Claude ou Copilot, qui écrit, explique, résume ou traduit un premier jet. Ses réponses se relisent : il peut se tromper avec assurance."
      },
      {
        "term": "Recherche sourcée",
        "definition": "Une famille d’outils, comme Perplexity ou le mode recherche de certains assistants, dont la réponse s’appuie sur des pages web numérotées que l’on peut ouvrir. À choisir pour une information récente."
      },
      {
        "term": "Citation",
        "definition": "Dans NotebookLM, le petit numéro placé après chaque point de la réponse. En le touchant, on ouvre le passage exact du document déposé d’où vient l’information, comme un renvoi à une page de cahier."
      },
      {
        "term": "Modèle",
        "definition": "Le moteur qui calcule les réponses derrière une application. ChatGPT est l’application, GPT le modèle ; l’application Gemini fonctionne avec des modèles Gemini de Google."
      },
      {
        "term": "Modèle ouvert",
        "definition": "Un modèle dont les fichiers sont publiés et qui peut s’installer sur votre propre appareil, comme ceux des familles Gemma (publiée par Google), Llama, Qwen, Mistral ou DeepSeek. Une fois installé, il peut fonctionner sans connexion."
      }
    ]
  },
  "en": {
    "id": "og1",
    "lessonNumber": 1,
    "title": "Choosing the right AI tool family for each task",
    "objective": "By the end of this lesson, you will know how to match each task to an AI tool family. You will know how to start from the task rather than the tool, and recognise the five families used in this course: assistants, sourced search, image, audio and your own documents. You will be able to have NotebookLM prepare a revision sheet with an RCTF prompt, then check each point using its citation. You will also be able to tell an app, such as ChatGPT or Gemini, apart from the model that answers behind it.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Start with the task, not the tool",
        "body": "Many people choose an AI tool the way you might choose a dish because everyone else is ordering it: they install the app everyone talks about, then look for something to do with it. That is what Koffi did. He is an undergraduate student in Lomé, Togo. He installed five AI apps on the same day. His phone is full, his mobile data runs out fast, and yet he always opens the same app, for everything. To revise a long course in PDF, he pastes it page by page into an assistant: it takes ages, and he never knows which page each sentence of the answer comes from.\n\nThat is the misunderstanding: choosing the tool first and the task second. The right question comes before: what is my task? A carpenter does not pick up a hammer to saw a plank; he first looks at the job, then opens the right compartment of his toolbox. With AI, the chain is the same: the task, then the tool family, then the tool, then a plan B if that tool stops working for you.\n\nIn this course, we use five families: assistants, sourced search, image, audio and your own documents. This is not an official standard; it is a practical Karatou classification, designed to help you decide quickly. A trader in Cotonou, Benin, who wants to write an advert, check a recent customs tariff and transcribe a supplier’s voice message has three tasks, so three families, and not necessarily three more apps. These families are not walls: one assistant can cover several compartments. What matters is knowing which compartment you are opening, and why."
      },
      {
        "title": "Write, search, create: assistants, sourced search, image and audio",
        "body": "The first family is the assistants: Gemini, ChatGPT, Claude, Copilot. They write, explain, summarise and translate a first draft. Think of them as a fast, well-read colleague who sometimes speaks with too much confidence: they can make mistakes or invent a detail, and they do not always say where their information comes from. A trainer in Bamako, Mali, can ask one to explain an accounting concept with an example from the market; he will then reread the answer, just as he would reread an intern’s work.\n\nThe second family is sourced search: Perplexity, or the search mode built into some assistants. The answer relies on numbered web pages that you can open to check. This is the family to choose for recent or dated information: an enrolment calendar, a new regulation, a call for applications. A numbered source is not necessarily a good source: Lesson 3 will teach you how to sort them.\n\nThe third and fourth families are image and audio. Gemini creates and edits images with its image tool, and other assistants do this too: a poster for a workshop, an illustration for a presentation. On the audio side, AI can type what you dictate, transcribe a recording or read a text aloud, which helps you revise while walking or keep a record of an association meeting in Abidjan. Two honest limits: a generated image is never a photo, so you must not pass it off as real; and transcription is less reliable in languages that are less present online, such as Ewe or Hausa, so it always needs proofreading."
      },
      {
        "title": "Working on your own documents: NotebookLM (now called Gemini Notebook) and the citation",
        "body": "The fifth family works on your own documents. NotebookLM, by Google, answers from the files you upload into a notebook, in other words a workbook: a course, a report, a set of internal rules. It does not look elsewhere; it reads your pages. Above all, it cites the exact passage: each point in its answer carries a small number that points to the place in the document it comes from.\n\nThat small number changes everything. With an ordinary assistant, you have to take the answer on trust or reread everything. Here, you tap the number and the passage appears, highlighted: you check it in a single gesture, the way you find a recipe in a notebook from its page number. A community health worker in Kisumu, Kenya, who uploads her programme’s official guide can find the exact sentence before answering a family. One precaution: only upload documents without personal data; Lesson 4 will explain why.\n\nThis strength has a flip side. Koffi now wants to know the deadline for a competitive exam this year: can NotebookLM answer? No. It only knows the documents uploaded to the notebook; if the information is not there, it is not built to look for it elsewhere, and a good prompt even asks it to write “not in my sources”. For recent information, you need to switch families and move to sourced search. That is the point of the families: knowing what a tool does well, and what it cannot do."
      },
      {
        "title": "The app is not the model: what answers behind ChatGPT, Gemini and Claude",
        "body": "One last landmark, very useful for the rest of the course: the app is not the model. The app is what you see and touch: the icon, the box where you type, the history of your conversations. The model is the engine that works out the answer behind the scenes. Think of a motorbike: you see the seat, the handlebars and the speedometer, but it is the hidden engine that makes it move.\n\nChatGPT is the app; GPT is the model that answers behind it. Gemini is the app, which runs on Google’s Gemini models; Google also publishes open models, such as Gemma, but they are not what answers inside the Gemini app. Claude, finally, is both the name of the app and the name of the models running behind it. These models often change version while the app keeps the same name: one more reason to judge a tool on your task rather than on its reputation.\n\nWhy does this landmark matter? Because some models are called open: their files are published and can be installed on your own device, phone or computer. This is the case for families such as Gemma, Llama, Qwen, Mistral or DeepSeek. Once installed, such a model can answer without a connection, and your data stays with you: an advantage for a student on a bus with no signal, or for an accounting firm in Casablanca, Morocco, that handles sensitive files. On the other hand, these installed models are often smaller, and their answers simpler than those of the big online apps. Lessons 5 and 6 will show you how; for now, just remember that behind every app there is a model, and that some can come and live on your own device."
      }
    ],
    "example": {
      "title": "Koffi, a student in Lomé: from five apps to a revision sheet that cites his course",
      "challenge": "Koffi is an undergraduate student in Lomé, Togo. He speaks French and Ewe, and revises on his phone, often with no signal on the bus. He installed five AI apps on the same day: his phone is full and his mobile data runs out quickly. To revise a long course in PDF, he pastes it page by page into an assistant. It takes ages, and he never knows which page each sentence of the answer comes from. His exams are coming up, and he has a limited phone and little data.",
      "solution": "Koffi starts from his task: revising his own course. That is the “documents” family. In NotebookLM, free version, he creates a notebook, in other words a workbook, and uploads the PDF of his course. He types an RCTF prompt in four blocks: “Role: you are a revision tutor, rigorous and clear. Context: I am an undergraduate student preparing for my exams. My sources are the course uploaded to this notebook; I revise on my phone. Task: using only my sources, make a revision sheet for chapter 2 in 10 short points. For each point, give the citation from the source. Format: numbered points, one sentence each, in French. End with 5 questions to test me, without the answers. If a piece of information is not in my sources, write ‘not in my sources’.” The sheet arrives in ten points, each with a small citation number. He taps a number: the passage from the course appears, highlighted. He saves the sheet in his notebook.",
      "impact": "Koffi keeps only three apps, one per need, and frees up space on his phone. He now revises with his own sources: a ten-point sheet, each point linked to the exact page of his course, which he checks in a single gesture. And when he needs recent information, such as the deadline for a competitive exam, he knows he has to switch tool families."
    },
    "practice": {
      "title": "Map your tasks and their families",
      "instructions": [
        "On a sheet of paper or in your phone’s notes, list five real tasks from your week where AI could help you: a message to write, a piece of recent information to find, a poster, a voice message to transcribe, a document to revise.",
        "Next to each task, write down its family: assistant, sourced search, image, audio or documents. If you hesitate, ask yourself where the answer should come from: your own files, recent information on the web, or a first draft to be written.",
        "Test the “documents” family: in NotebookLM, create a notebook and upload a course or a work document that contains no personal data. Paste this RCTF prompt, filling in the brackets: Role: you are a revision tutor, rigorous and clear. Context: I am preparing [my exam, my training, my meeting]. My sources are the documents uploaded to this notebook; I revise on my phone. Task: using only my sources, make a revision sheet on [chapter or topic] in [10] short points. For each point, give the citation from the source. Format: numbered points, one sentence each, in English. End with [5] questions to test me, without the answers. If a piece of information is not in my sources, write “not in my sources”. Then tap two citation numbers and check that the passage shown really says what the sheet claims."
      ],
      "observation": "Your five tasks do not all belong to the same family: often two or three families cover most of your week, and an app you never open can leave your phone. In NotebookLM, each citation opens the exact passage of your document: you can see in a single gesture whether the sheet is faithful, or whether a point was summarised badly. If you ask for information that is not in the document, the tool should, as your prompt requires, answer “not in my sources”; if it does not, that is a signal to reread carefully."
    },
    "quiz": [
      {
        "question": "Where should you start when choosing an AI tool?",
        "options": [
          { "key": "A", "text": "With the tool everyone is talking about" },
          { "key": "B", "text": "With the task to be done" },
          { "key": "C", "text": "With the most recent app" },
          { "key": "D", "text": "With the colour of the icon" }
        ],
        "answer": "B",
        "explanation": "The task first, the tool second. You start from what you want to do, work out the tool family, then choose a tool from that family, with a plan B. Choosing the fashionable tool, the newest app or a pretty icon is like picking up the hammer before knowing whether you need to nail or saw."
      },
      {
        "question": "Koffi wants to revise his course in PDF and find each passage. Which family?",
        "options": [
          { "key": "A", "text": "Image" },
          { "key": "B", "text": "Audio" },
          { "key": "C", "text": "Documents, for example NotebookLM" },
          { "key": "D", "text": "Sourced search" }
        ],
        "answer": "C",
        "explanation": "Koffi is working on his own document: that is the “documents” family. NotebookLM answers from the uploaded PDF and cites the exact passage for each point. Sourced search, on the other hand, relies on web pages, not on his course."
      },
      {
        "question": "Hadiza wants a poster for her workshop. Which family?",
        "options": [
          { "key": "A", "text": "Image" },
          { "key": "B", "text": "Documents" },
          { "key": "C", "text": "Sourced search" },
          { "key": "D", "text": "Audio" }
        ],
        "answer": "A",
        "explanation": "A poster is a visual: that is the “image” family. Gemini, for example, creates and edits images with its image tool, and other assistants do this too. She should still reread the text on the poster, which may contain mistakes."
      },
      {
        "question": "Koffi wants the deadline for a competitive exam this year. Which family?",
        "options": [
          { "key": "A", "text": "Documents" },
          { "key": "B", "text": "Image" },
          { "key": "C", "text": "Audio" },
          { "key": "D", "text": "Sourced search" }
        ],
        "answer": "D",
        "explanation": "This year’s deadline is recent information: that is the “sourced search” family, whose answer points to numbered web pages you can open. NotebookLM only knows the uploaded documents; it cannot go and find that date elsewhere."
      },
      {
        "question": "In NotebookLM, what is the small number after each point for?",
        "options": [
          { "key": "A", "text": "To grade the answer" },
          { "key": "B", "text": "To open the exact passage of the uploaded document" },
          { "key": "C", "text": "To count the words" },
          { "key": "D", "text": "To share the sheet" }
        ],
        "answer": "B",
        "explanation": "That small number is the citation. Tapping it opens the exact passage of the uploaded document, highlighted, where the point comes from. This is what lets you check the sheet in a single gesture instead of taking the answer on trust."
      }
    ],
    "reflection": "Among the AI apps on your phone, which one do you open out of habit for everything, and for which task in your week would another tool family be a better fit?",
    "glossary": [
      {
        "term": "AI tool family",
        "definition": "A group of tools used for the same kind of task. This course uses five: assistants, sourced search, image, audio and documents. Like the compartments of a toolbox, you choose the compartment according to the job."
      },
      {
        "term": "AI assistant",
        "definition": "A chat app, such as Gemini, ChatGPT, Claude or Copilot, that writes, explains, summarises or translates a first draft. Its answers need rereading: it can be wrong with confidence."
      },
      {
        "term": "Sourced search",
        "definition": "A tool family, such as Perplexity or the search mode of some assistants, whose answer relies on numbered web pages that you can open. The one to choose for recent information."
      },
      {
        "term": "Citation",
        "definition": "In NotebookLM, the small number placed after each point of the answer. Tapping it opens the exact passage of the uploaded document the information comes from, like a reference to a page in a notebook."
      },
      {
        "term": "Model",
        "definition": "The engine that works out the answers behind an app. ChatGPT is the app, GPT the model; the Gemini app runs on Google’s Gemini models."
      },
      {
        "term": "Open model",
        "definition": "A model whose files are published and that can be installed on your own device, such as those from the Gemma (published by Google), Llama, Qwen, Mistral or DeepSeek families. Once installed, it can work without a connection."
      }
    ]
  },
  "ha": {
    "id": "og1",
    "lessonNumber": 1,
    "title": "Zabar nau’in kayan aikin AI da ya dace da kowane aiki",
    "objective": "A karshen wannan darasi, za ku san yadda ake hada kowane aiki da nau’in kayan aikin AI da ya dace da shi. Za ku san yadda ake farawa daga aikin, ba daga kayan aikin ba, kuma ku gane nau’o’i biyar da wannan kwas ya zaba: mataimakan AI, bincike mai tushe, hoto, sauti da takardunku na kanku. Za ku iya sa NotebookLM ya shirya takardar bita da umarnin RCTF, sannan ku duba kowane batu ta hanyar lambar nuninsa. Za ku kuma iya bambance manhaja, kamar ChatGPT ko Gemini, da model din da ke amsawa a bayanta.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Fara da aikin, ba da kayan aikin ba",
        "body": "Mutane da yawa suna zabar kayan aikin AI kamar yadda ake zabar abinci saboda kowa yana odarsa: suna saukar da manhajar da ake magana a kai, sannan su nemi abin da za ta iya yi. Haka Koffi ya yi, dalibin jami’a a Lomé, kasar Togo. Ya saukar da manhajojin AI guda biyar a rana daya. Wayarsa ta cika, data dinsa tana karewa da sauri, amma duk da haka kullum manhaja daya yake budewa, don komai. Don ya yi bitar wani dogon darasi a PDF, yana manna shi shafi bayan shafi a cikin mataimakin AI: aiki ne mai tsawo, kuma bai taba sanin daga wane shafi kowace jumla ta amsar ta fito ba.\n\nKuskuren a nan yake: zabar kayan aiki da farko, aikin daga baya. Tambayar da ta dace tana zuwa kafin haka: mene ne aikina? Kafinta ba ya daukar guduma don ya yanka katako; yana fara duba aikin da zai yi, sannan ya bude gidan da ya dace a cikin akwatin kayan aikinsa. Da AI ma haka ne: aikin, sannan nau’in kayan aiki, sannan kayan aikin kansa, sannan wani madadin idan wannan bai yi aiki ba.\n\nA wannan kwas, mun zabi nau’o’i biyar: mataimakan AI, bincike mai tushe, hoto, sauti da takardunku na kanku. Wannan ba ka’idar hukuma ba ce, tsari ne mai amfani na Karatou, don a yanke shawara da sauri. Wata ’yar kasuwa a Cotonou, kasar Benin, da ke son rubuta talla, duba sabon kudin kwastam, da mayar da sakon murya na mai kawo mata kaya zuwa rubutu, tana da ayyuka uku, wato nau’o’i uku, ba lallai sai karin manhajoji uku ba. Wadannan nau’o’i ba katanga ba ne: mataimaki daya zai iya rufe gidaje da dama. Abin da ke da muhimmanci shi ne ku san wane gida kuke budewa, da kuma dalili."
      },
      {
        "title": "Rubutu, bincike, kirkira: mataimakan AI, bincike mai tushe, hoto da sauti",
        "body": "Nau’i na farko shi ne mataimakan AI: Gemini, ChatGPT, Claude, Copilot. Suna rubutu, suna bayani, suna takaitawa, suna kuma fassara daftarin farko. Ku dauke su kamar abokin aiki mai sauri kuma mai ilimi, amma wanda wani lokaci yake magana da tabbaci fiye da kima: zai iya yin kuskure ko ya kirkiri wani bayani, kuma ba kullum yake fadin inda bayaninsa ya fito ba. Wani malamin koyar da sana’a a Bamako, kasar Mali, zai iya tambayarsa ya bayyana wata ka’idar lissafin kudi da misali daga kasuwa; sannan ya sake karanta amsar, kamar yadda zai duba aikin almajirin koyon aiki.\n\nNau’i na biyu shi ne bincike mai tushe: Perplexity, ko yanayin bincike da ke cikin wasu mataimakan AI. Amsar tana dogara ne kan shafukan yanar gizo masu lamba, wadanda za ku iya budewa don dubawa. Wannan shi ne nau’in da za a zaba don bayani na baya-bayan nan ko mai kwanan wata: jadawalin rajista, sabuwar doka, kiran neman takara. Tushe mai lamba ba lallai ne ya zama tushe mai kyau ba: Darasi 3 zai koya muku yadda ake tace su.\n\nNau’i na uku da na hudu: hoto da sauti. Gemini yana kirkira da gyara hotuna da kayan aikinsa na hoto, kuma wasu mataimakan ma suna yin haka: fastar bita, hoton gabatarwa a makaranta. Ta bangaren sauti, AI na iya rubuta abin da kuke fada, mayar da rikodi zuwa rubutu, ko karanta rubutu da murya, abin da ke taimakawa wajen bita ana tafiya, ko ajiye bayanan taron wata kungiya a Abidjan. Iyakoki biyu na gaskiya: hoton da AI ya kirkira ba hoto na gaske ba ne, don haka kada a gabatar da shi a matsayin na gaske; kuma mayar da murya zuwa rubutu ba ta da inganci sosai a harsunan da ba a cika samu a intanet ba, kamar Ewe ko Hausa, don haka dole a sake karantawa."
      },
      {
        "title": "Aiki a kan takardunku: NotebookLM (yanzu ana kiransa Gemini Notebook) da lambar nuni (citation)",
        "body": "Nau’i na biyar yana aiki ne a kan takardunku na kanku. NotebookLM, na Google, yana amsawa daga fayilolin da kuka saka a cikin notebook, wato littafin aiki: darasi, rahoto, ka’idojin cikin gida. Ba ya neman bayani a wani wuri, shafukanku yake karantawa. Fiye da haka, yana nuna ainihin wurin da ya dauko bayani: kowane batu na amsarsa yana da karamar lamba da ke kai ku wurin da ya fito a cikin takardar.\n\nWannan karamar lamba tana canza komai. Da mataimakin AI na yau da kullum, dole ne ku amince da amsar haka nan, ko ku sake karanta komai. A nan kuwa, kuna taba lambar sai sashen ya bayyana, an haska shi: kuna dubawa da taba daya, kamar yadda ake samun wani girke-girke a cikin littafi ta lambar shafinsa. Wata ma’aikaciyar lafiya ta al’umma a Kisumu, kasar Kenya, da ta saka jagorar hukuma ta shirinta, za ta iya samun ainihin jumlar kafin ta amsa wa wani iyali. Kariya daya: ku saka takardun da ba su da bayanan sirri na mutane kawai; Darasi 4 zai bayyana dalili.\n\nWannan karfi yana da iyakarsa. Yanzu Koffi yana son sanin ranar karshe ta wata gasar shiga makaranta ta bana: shin NotebookLM zai iya amsawa? A’a. Yana sanin takardun da aka saka a cikin littafin aikin ne kawai; idan bayanin ba ya ciki, ba a yi shi don ya nemo shi a wani wuri ba, kuma umarni mai kyau ma yana tambayarsa ya rubuta « babu a cikin tushena ». Don bayani na baya-bayan nan, sai a canza nau’i, a koma ga bincike mai tushe. Wannan shi ne amfanin nau’o’in: sanin abin da kayan aiki ke yi da kyau, da abin da ba zai iya yi ba."
      },
      {
        "title": "Manhaja ba ita ce model ba: abin da ke amsawa a bayan ChatGPT, Gemini da Claude",
        "body": "Wata alama ta karshe, mai matukar amfani ga sauran kwas din: manhaja ba ita ce model ba. Manhaja ita ce abin da kuke gani kuke tabawa: alamar manhajar, wurin da kuke rubutu, tarihin hirarrakinku. Model kuwa shi ne injin da ke lissafa amsar a baya. Ku yi tunanin babur: kuna ganin kujera, sitiyari da ma’aunin gudu, amma injin, wanda yake boye, shi ne ke tura shi gaba.\n\nChatGPT manhaja ce; GPT shi ne model din da ke amsawa a bayanta. Gemini manhaja ce, wadda ke aiki da modelolin Gemini na Google; Google kuma yana wallafa budaddun modeloli, kamar Gemma, amma ba su ne ke amsawa a cikin manhajar Gemini ba. Claude kuwa sunan manhajar ne, kuma sunan modelolin da ke aiki a bayanta. Wadannan modeloli suna canza sigarsu sau da yawa, alhali manhajar tana rike da sunanta: wannan wani dalili ne na yin hukunci a kan kayan aiki bisa aikinku, ba bisa sunansa ba.\n\nMe ya sa wannan alama ke da muhimmanci? Saboda ana kiran wasu modeloli budaddu: ana wallafa fayilolinsu, kuma za a iya saka su a na’urarku ta kanku, waya ko kwamfuta. Haka yake ga iyalan modeloli kamar Gemma, Llama, Qwen, Mistral ko DeepSeek. Idan aka saka shi, irin wannan model zai iya amsawa ba tare da intanet ba, kuma bayananku suna zama a wurinku: wannan fa’ida ce ga dalibi a cikin mota babu network, ko ga ofishin lissafin kudi a Casablanca, kasar Maroko, da ke rike da fayiloli masu muhimmanci. A daya bangaren, wadannan modeloli da ake sakawa galibi sun fi kanana, kuma amsoshinsu sun fi sauki fiye da na manyan manhajojin intanet. Darasi 5 da 6 za su nuna muku yadda ake yi; a yanzu, ku rike kawai cewa a bayan kowace manhaja akwai model, kuma wasu za su iya zuwa wurinku."
      }
    ],
    "example": {
      "title": "Koffi, dalibi a Lomé: daga manhajoji biyar zuwa takardar bita da ke nuna darasinsa",
      "challenge": "Koffi dalibin jami’a ne a Lomé, kasar Togo. Yana jin Faransanci da Ewe, kuma yana bita a wayarsa, sau da yawa babu network a cikin mota. Ya saukar da manhajojin AI guda biyar a rana daya: wayarsa ta cika, kuma data dinsa tana karewa da sauri. Don ya yi bitar wani dogon darasi a PDF, yana manna shi shafi bayan shafi a cikin mataimakin AI. Aiki ne mai tsawo, kuma bai taba sanin daga wane shafi kowace jumla ta amsar ta fito ba. Jarrabawarsa ta kusa, da waya mai iyaka da data kadan.",
      "solution": "Koffi ya fara daga aikinsa: bitar darasinsa na kansa. Wannan shi ne nau’in « takardu ». A cikin NotebookLM, sigar kyauta, ya kirkiri notebook, wato littafin aiki, ya saka PDF din darasinsa a ciki. Ya rubuta umarnin RCTF a tubala hudu: « Rawa: kai ne malamin bita, mai tsanani kuma mai bayyanawa. Mahalli: ni dalibin jami’a ne, ina shirin jarrabawata. Tushena shi ne darasin da aka saka a cikin wannan littafin aiki; ina bita a waya. Aiki: daga tushena kawai, yi takardar bita ta babi na 2 a cikin gajerun batutuwa 10. Ga kowane batu, nuna lambar nuni ta tushen. Tsari: batutuwa masu lamba, jumla daya kowanne, cikin Faransanci. Ka karkare da tambayoyi 5 don gwada ni, ba tare da amsoshi ba. Idan wani bayani ba ya cikin tushena, rubuta “babu a cikin tushena”. » Takardar ta zo da batutuwa goma, kowanne da karamar lambar nuni. Ya taba wata lamba: sashen darasin ya bayyana, an haska shi. Ya adana takardar a cikin littafin aikinsa.",
      "impact": "Koffi ya rike manhajoji uku kawai, daya don kowace bukata, kuma ya samu karin wuri a wayarsa. Yanzu yana bita da tushensa na kansa: takarda mai batutuwa goma, kowanne yana hade da ainihin shafin darasinsa, wanda yake dubawa da taba daya. Kuma idan yana bukatar bayani na baya-bayan nan, kamar ranar karshe ta wata gasar shiga makaranta, ya san cewa dole ne ya canza nau’in kayan aiki."
    },
    "practice": {
      "title": "Zana taswirar ayyukanku da nau’o’insu",
      "instructions": [
        "A kan takarda ko a cikin bayanan wayarku, rubuta ayyuka biyar na gaske na wannan mako inda AI zai iya taimaka muku: sakon da za a rubuta, bayani na baya-bayan nan da za a nema, fasta, sakon murya da za a mayar zuwa rubutu, takardar da za a yi bitarta.",
        "A gefen kowane aiki, rubuta nau’insa: mataimakin AI, bincike mai tushe, hoto, sauti ko takardu. Idan kuna shakka, ku tambayi kanku daga ina amsar za ta fito: daga fayilolinku na kanku, daga bayani na baya-bayan nan a yanar gizo, ko daga daftarin farko da za a rubuta.",
        "Ku gwada nau’in « takardu »: a cikin NotebookLM, ku kirkiri littafin aiki ku saka darasi ko takardar aiki da ba ta da bayanan sirri na mutane. Ku manna wannan umarnin RCTF, kuna cike abin da ke cikin baka: Rawa: kai ne malamin bita, mai tsanani kuma mai bayyanawa. Mahalli: ina shirin [jarrabawata, horona, taronmu]. Tushena su ne takardun da aka saka a cikin wannan littafin aiki; ina bita a waya. Aiki: daga tushena kawai, yi takardar bita ta [babi ko maudu’i] a cikin gajerun batutuwa [10]. Ga kowane batu, nuna lambar nuni ta tushen. Tsari: batutuwa masu lamba, jumla daya kowanne, cikin Hausa. Ka karkare da tambayoyi [5] don gwada ni, ba tare da amsoshi ba. Idan wani bayani ba ya cikin tushena, rubuta « babu a cikin tushena ». Sannan ku taba lambobin nuni biyu ku duba ko sashen da ya bayyana yana fadin abin da takardar ta fada."
      ],
      "observation": "Ayyukanku biyar ba duka ne suke cikin nau’i daya ba: sau da yawa nau’o’i biyu ko uku sun isa su rufe mafi yawan makonku, kuma manhajar da ba ku taba budewa ba za ta iya barin wayarku. A cikin NotebookLM, kowace lambar nuni tana bude ainihin sashen takardarku: kuna gani da taba daya ko takardar bitar daidai take, ko an takaita wani batu ba daidai ba. Idan kuka nemi bayanin da ba ya cikin takardar, ya kamata kayan aikin ya amsa « babu a cikin tushena », kamar yadda umarninku ya bukata; idan bai yi haka ba, alama ce ta a sake karantawa da kyau."
    },
    "quiz": [
      {
        "question": "Da me ya kamata a fara don zabar kayan aikin AI?",
        "options": [
          { "key": "A", "text": "Da kayan aikin da kowa ke magana a kai" },
          { "key": "B", "text": "Da aikin da za a yi" },
          { "key": "C", "text": "Da manhajar da ta fi sabunta" },
          { "key": "D", "text": "Da launin alamar manhajar" }
        ],
        "answer": "B",
        "explanation": "Aikin da farko, kayan aikin daga baya. Ana farawa daga abin da ake son yi, a gano nau’in kayan aiki, sannan a zabi kayan aiki daga wannan nau’i, tare da madadi. Zabar kayan aikin da ake ta yayi, sabuwar manhaja ko kyakkyawar alama, kamar daukar guduma ne kafin a san ko za a kafa kusa ko za a yanka."
      },
      {
        "question": "Koffi yana son yin bitar darasinsa a PDF kuma ya sami kowane sashe. Wane nau’i?",
        "options": [
          { "key": "A", "text": "Hoto" },
          { "key": "B", "text": "Sauti" },
          { "key": "C", "text": "Takardu, misali NotebookLM" },
          { "key": "D", "text": "Bincike mai tushe" }
        ],
        "answer": "C",
        "explanation": "Koffi yana aiki a kan takardarsa ta kansa: wannan shi ne nau’in « takardu ». NotebookLM yana amsawa daga PDF din da aka saka, kuma yana nuna ainihin sashen kowane batu. Bincike mai tushe kuwa yana dogara ne kan shafukan yanar gizo, ba kan darasinsa ba."
      },
      {
        "question": "Hadiza tana son fasta don bitar dinkinta. Wane nau’i?",
        "options": [
          { "key": "A", "text": "Hoto" },
          { "key": "B", "text": "Takardu" },
          { "key": "C", "text": "Bincike mai tushe" },
          { "key": "D", "text": "Sauti" }
        ],
        "answer": "A",
        "explanation": "Fasta abu ne na gani: wannan shi ne nau’in « hoto ». Gemini, misali, yana kirkira da gyara hotuna da kayan aikinsa na hoto, kuma wasu mataimakan ma suna yin haka. Duk da haka, za ta sake karanta rubutun da ke kan fastar, domin yana iya kunsar kurakurai."
      },
      {
        "question": "Koffi yana son ranar karshe ta wata gasar shiga makaranta ta bana. Wane nau’i?",
        "options": [
          { "key": "A", "text": "Takardu" },
          { "key": "B", "text": "Hoto" },
          { "key": "C", "text": "Sauti" },
          { "key": "D", "text": "Bincike mai tushe" }
        ],
        "answer": "D",
        "explanation": "Ranar karshe ta bana bayani ne na baya-bayan nan: wannan shi ne nau’in « bincike mai tushe », wanda amsarsa ke nuna shafukan yanar gizo masu lamba da za a iya budewa. NotebookLM yana sanin takardun da aka saka ne kawai; ba zai iya zuwa ya nemo wannan rana a wani wuri ba."
      },
      {
        "question": "A cikin NotebookLM, mene ne amfanin karamar lambar da ke bayan kowane batu?",
        "options": [
          { "key": "A", "text": "Don ba amsar maki" },
          { "key": "B", "text": "Don bude ainihin sashen takardar da aka saka" },
          { "key": "C", "text": "Don kirga kalmomi" },
          { "key": "D", "text": "Don raba takardar bitar" }
        ],
        "answer": "B",
        "explanation": "Wannan karamar lamba ita ce lambar nuni. Idan aka taba ta, tana bude ainihin sashen takardar da aka saka, an haska shi, inda batun ya fito. Wannan shi ne abin da ke ba da damar duba takardar bitar da taba daya, maimakon amincewa da amsar haka nan."
      }
    ],
    "reflection": "Daga cikin manhajojin AI da ke wayarku, wace kuke budewa saboda al’ada don komai, kuma ga wane aiki na makonku wani nau’in kayan aiki zai fi dacewa?",
    "glossary": [
      {
        "term": "Famille d’outils IA (nau’in kayan aikin AI)",
        "definition": "Rukunin kayan aiki da ake amfani da su don irin aiki daya. Wannan kwas ya zabi biyar: mataimakan AI, bincike mai tushe, hoto, sauti da takardu. Kamar gidajen akwatin kayan aiki, ana zabar gida bisa aikin da za a yi."
      },
      {
        "term": "Assistant IA (mataimakin AI)",
        "definition": "Manhajar hira, kamar Gemini, ChatGPT, Claude ko Copilot, da ke rubutu, bayani, takaitawa ko fassara daftarin farko. Dole a sake karanta amsoshinsa: zai iya yin kuskure da tabbaci."
      },
      {
        "term": "Recherche sourcée (bincike mai tushe)",
        "definition": "Nau’in kayan aiki, kamar Perplexity ko yanayin bincike na wasu mataimakan AI, wanda amsarsa ke dogara kan shafukan yanar gizo masu lamba da za a iya budewa. Shi ne za a zaba don bayani na baya-bayan nan."
      },
      {
        "term": "Citation (lambar nuni)",
        "definition": "A cikin NotebookLM, karamar lambar da ke bayan kowane batu na amsar. Idan aka taba ta, tana bude ainihin sashen takardar da aka saka inda bayanin ya fito, kamar nuni zuwa shafin wani littafi."
      },
      {
        "term": "Modèle / model (injin AI)",
        "definition": "Injin da ke lissafa amsoshi a bayan manhaja. ChatGPT manhaja ce, GPT kuma model; manhajar Gemini tana aiki da modelolin Gemini na Google."
      },
      {
        "term": "Modèle ouvert / open model (budadden model)",
        "definition": "Model wanda ake wallafa fayilolinsa kuma za a iya saka shi a na’urarku ta kanku, kamar na iyalan Gemma (wanda Google ke wallafawa), Llama, Qwen, Mistral ko DeepSeek. Idan aka saka shi, zai iya aiki ba tare da intanet ba."
      }
    ]
  }
};
