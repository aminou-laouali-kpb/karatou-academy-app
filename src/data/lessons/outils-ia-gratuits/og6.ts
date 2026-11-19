import { Language } from '../../translations';
import { LessonContent } from '../../lessonContent';

// Module « Choisir le bon outil IA gratuit et installer une IA open source » (outils-ia-gratuits) — leçon og6 (LM Studio sur ordinateur)
// Texte aligné sur le CLAUDE.md de production vidéo du cours 15 (docs/production-video/claude-md/).
// Trilingue FR / EN / HA. ⚠️ Traductions HA à faire valider par un locuteur natif haoussa.
export const ogLesson6: Record<Language, LessonContent> = {
  "fr": {
    "id": "og6",
    "lessonNumber": 6,
    "title": "Installer une IA open source sur votre ordinateur avec LM Studio",
    "objective": "À la fin de cette leçon, vous saurez installer LM Studio et faire tourner un modèle open source sur votre ordinateur, même sans connexion. Vous saurez lire le « B » dans le nom d’un modèle, vérifier votre mémoire vive et choisir un modèle que votre machine supporte. Vous saurez rechercher, télécharger, charger et tester ce modèle avec une consigne RCTF, en connaissant ses limites et les pistes pour aller plus loin.",
    "video": {
      "fr": "https://www.youtube.com/embed/nwyi4-qAFcw",
      "en": "",
      "ha": ""
    },
    "content": [
      {
        "title": "Faire tourner une IA chez vous avec LM Studio, sans être informaticien",
        "body": "Installer une IA sur son ordinateur, beaucoup pensent que c’est réservé aux informaticiens. C’est un malentendu. LM Studio est une application gratuite pour ordinateur, disponible pour Windows, Mac et Linux. Elle fait deux choses : elle télécharge un modèle ouvert, puis elle le fait tourner sur votre machine. Vous discutez ensuite avec lui dans une fenêtre de conversation qui ressemble à celle de ChatGPT ou de Gemini.\n\nRetenez la distinction vue en Leçon 1 : l’application n’est pas le modèle. LM Studio est comme un lecteur de musique, et le modèle est l’album que vous y chargez. Le lecteur ne chante pas tout seul : sans modèle téléchargé, LM Studio ne répond rien. Et un même lecteur peut accueillir plusieurs albums : des modèles des familles Gemma (Google), Qwen (Alibaba), Llama (Meta), Mistral ou DeepSeek. Attention, Gemma est un modèle ouvert de Google ; ce n’est pas le modèle de l’application Gemini.\n\nPourquoi s’en donner la peine ? Parce qu’une fois le modèle téléchargé, il répond sans connexion, et ce que vous tapez reste sur votre ordinateur. Un cabinet comptable de Cotonou (Bénin) qui manipule les bilans de ses clients, une association de Bukavu (RDC) qui recueille des témoignages confidentiels, une formatrice qui garde les dossiers de ses stagiaires : tous ont intérêt à ce que leurs textes ne partent pas sur un serveur lointain. C’est le prolongement, sur ordinateur, de ce que la Leçon 5 a fait sur le téléphone, avec un modèle plus grand et plus capable."
      },
      {
        "title": "Lire le « B » d’un modèle et vérifier votre mémoire vive",
        "body": "Dans la liste des modèles, vous verrez des noms suivis de « 2B », « 4B », « 9B », « 27B »… Le B vient de l’anglais billion, qui veut dire milliard. « 4B » signifie donc quatre milliards de paramètres. Les paramètres sont les réglages que le modèle a appris pendant son entraînement, un peu comme l’expérience accumulée dans les mains d’un artisan. Plus ce nombre est grand, plus le modèle est gros, plus il est capable, et plus il demande de mémoire. Ce n’est pas un numéro de version : « 4B » est une taille.\n\nLa mémoire vive (on dit aussi RAM) est la mémoire de travail de l’ordinateur. Pensez à un atelier de couture : le disque dur est l’armoire où l’on range les tissus, la mémoire vive est la table de coupe où l’on étale celui qu’on travaille. Le modèle doit tenir sur la table pendant qu’il répond. Ordre de grandeur : un modèle d’environ 4B pèse environ 6 Go à télécharger et demande au moins 8 Go de mémoire vive libres ; 16 Go au total sont conseillés, car le modèle n’est pas seul à tourner sur la machine. Prévoyez aussi de l’espace disque libre pour le fichier du modèle.\n\nVérifiez votre machine avant de télécharger quoi que ce soit. Sous Windows : ouvrez le Gestionnaire des tâches, onglet Performances, puis Mémoire ; regardez la mémoire totale, mais surtout la mémoire disponible. Sur Mac : menu Pomme, puis À propos de ce Mac, ligne Mémoire. Deux minutes de vérification vous évitent des heures de téléchargement pour un modèle que votre ordinateur ne pourra pas faire tourner, ou un ordinateur qui se fige parce que le modèle a pris toute la place."
      },
      {
        "title": "Choisir un modèle que votre ordinateur supporte, puis le télécharger, le charger et le tester",
        "body": "Quel est le meilleur modèle ? Celui que votre appareil supporte et qui correspond à votre usage. Les modèles ont souvent des spécialités : certains sont entraînés pour écrire du code, d’autres pour raisonner sur des problèmes longs. Si vous voulez écrire, résumer ou reformuler du texte, inutile d’aller chercher un modèle géant ou un modèle spécialisé en code : il ferait ramer votre machine pour un gain que vous ne verriez pas. Pour commencer, un modèle d’environ 4B suffit ; avec 8 Go de mémoire vive ou moins, prenez plus petit.\n\nDans LM Studio, le parcours tient en quatre gestes. Rechercher : ouvrez la recherche de modèles et tapez le nom d’une famille, par exemple Gemma ou Qwen. Lire la fiche : elle indique les capacités du modèle et sa taille ; choisissez une version d’environ 4B. Télécharger : cliquez sur Download (télécharger), de préférence en wifi, car le fichier pèse plusieurs gigaoctets. Charger, puis tester : sélectionnez le modèle dans la fenêtre de conversation, attendez la fin du chargement, saluez-le, puis donnez-lui une vraie tâche avec une consigne RCTF.\n\nPendant qu’il répond, LM Studio affiche la mémoire utilisée par le modèle : pour un modèle d’environ 4B, comptez environ 8 Go. Si les réponses arrivent mot par mot, très lentement, ce n’est pas Internet : c’est la mémoire vive qui manque. Fermez les autres applications (navigateur aux nombreux onglets, logiciel de montage) ou prenez un modèle plus petit. Un enseignant de Bamako (Mali) qui prépare ses fiches de lecture sur un portable de 8 Go travaillera mieux avec un petit modèle fluide qu’avec un gros modèle qui met une minute par phrase."
      },
      {
        "title": "Les limites d’un modèle installé, et où aller plus loin : Hugging Face et les outils branchés",
        "body": "Soyez lucide sur ce qu’il ne fait pas. Seul, un modèle installé écrit du texte : ni image ni vidéo. Il n’a pas accès à Internet : il ne connaît ni l’actualité ni les prix du jour, et ses connaissances s’arrêtent à la date de son entraînement. Il ne crée ni n’enregistre de fichier sur votre ordinateur : si vous lui demandez de sauvegarder un formulaire, il vous répondra qu’il ne peut pas, et c’est à vous de copier sa réponse dans votre traitement de texte. Enfin, les téléchargements sont lourds, et chaque mise à jour d’un modèle se télécharge à nouveau. Notez aussi que l’application LM Studio, elle, peut se connecter pour ses propres mises à jour et pour la recherche de modèles.\n\nPour aller plus loin, il existe Hugging Face, une grande bibliothèque en ligne de modèles ouverts. On y trouve des milliers de modèles, chacun avec sa fiche et sa licence, c’est-à-dire les règles d’utilisation fixées par son auteur. Beaucoup sont gratuits pour un usage personnel, mais vérifiez toujours la licence, surtout si vous comptez vendre un service construit dessus. Hugging Face héberge aussi des jeux de données : des collections de textes, de sons ou d’images qui servent à entraîner ou à adapter un modèle, y compris dans des langues africaines comme le swahili, le haoussa ou le wolof.\n\nDernière piste : LM Studio peut prêter votre modèle à d’autres outils installés sur la même machine, par exemple un assistant qui lit vos documents ou un agent qui enchaîne des tâches. C’est ainsi qu’on lui ajoute plus tard des capacités qu’il n’a pas seul, comme l’accès à des fichiers. Ce branchement est traité dans le cours « Comment créer des agents IA ». Pour aujourd’hui, l’essentiel est acquis : un modèle qui tourne chez vous, hors connexion, sur votre propre tâche."
      }
    ],
    "example": {
      "title": "Préparer un séminaire pendant une coupure d’Internet, sans faire sortir les dossiers des stagiaires",
      "challenge": "Mariam est formatrice dans un centre de formation professionnelle de Ouagadougou (Burkina Faso). Elle prépare ses sessions sur son ordinateur, mais les coupures d’Internet l’interrompent régulièrement. Elle doit organiser un séminaire d’initiation à l’intelligence artificielle pour ses stagiaires, et elle refuse de confier leurs dossiers à un service en ligne. Elle croit qu’installer une IA est réservé aux informaticiens.",
      "solution": "Elle vérifie d’abord sa mémoire vive dans le Gestionnaire des tâches. Puis elle installe LM Studio depuis son site officiel, recherche la famille Gemma, lit la fiche d’un modèle (capacités, taille) et choisit une version d’environ 4B. Elle la télécharge sur le wifi du centre, la charge dans la conversation et la salue : le modèle répond en français. Elle lui donne ensuite une consigne RCTF : « Rôle : tu es l’assistant d’une formatrice dans un centre de formation professionnelle. Contexte : j’organise un séminaire d’initiation à l’intelligence artificielle pour mes stagiaires, dans mon centre. Tâche : rédige le formulaire d’inscription : les champs à remplir, puis un message d’accueil de trois lignes. Format : une liste numérotée « champ – type de réponse », en français simple ; laisse des crochets pour toute information que je n’ai pas donnée. » Le formulaire arrive avec ses sections et ses champs ; elle demande ensuite le script de présentation du séminaire. Quand elle demande au modèle d’enregistrer le formulaire dans un fichier, il explique qu’il ne peut pas : elle copie elle-même le texte dans son traitement de texte.",
      "impact": "Pendant une coupure d’Internet, Mariam dispose d’un formulaire d’inscription et d’un script de présentation à relire et à ajuster. Aucun dossier de stagiaire n’a quitté son ordinateur. Elle sait maintenant surveiller la mémoire utilisée par le modèle, et passer à un modèle plus petit si les réponses ralentissent."
    },
    "practice": {
      "title": "Installez LM Studio et testez un modèle sur votre propre tâche",
      "instructions": [
        "Vérifiez votre mémoire vive et votre espace disque libre : sous Windows, Gestionnaire des tâches, onglet Performances, puis Mémoire (regardez la mémoire disponible) ; sur Mac, menu Pomme, puis À propos de ce Mac. Notez les deux chiffres.",
        "Installez LM Studio depuis son site officiel. Dans la recherche de modèles, choisissez un modèle d’environ 4B (ou plus petit si vous avez 8 Go de mémoire vive ou moins), lisez sa fiche, téléchargez-le en wifi, puis chargez-le dans la fenêtre de conversation.",
        "Testez-le sur une vraie tâche avec une consigne RCTF, en adaptant par exemple celle-ci : Rôle : tu es l’assistant d’une formatrice dans un centre de formation professionnelle. Contexte : j’organise [un séminaire d’initiation à l’intelligence artificielle] pour [mes stagiaires], le [date], dans [mon centre]. Tâche : rédige le formulaire d’inscription : les champs à remplir, puis un message d’accueil de trois lignes. Format : une liste numérotée « champ – type de réponse », en français simple ; laisse des crochets pour toute information que je n’ai pas donnée. Notez ensuite la mémoire utilisée par le modèle et une limite que vous avez constatée."
      ],
      "observation": "Vous constatez que le modèle répond depuis votre ordinateur, sans passer par un service en ligne, et que sa vitesse dépend de votre mémoire vive : fluide si elle suffit, lente si elle manque. Vous repérez au moins une limite réelle (pas d’image, pas d’actualité, pas de fichier enregistré, lenteur), et vous savez que le remède à la lenteur est un modèle plus petit ou des applications fermées, pas une meilleure connexion."
    },
    "quiz": [
      {
        "question": "Que signifie « 4B » dans le nom d’un modèle ?",
        "options": [
          { "key": "A", "text": "Quatrième version du modèle" },
          { "key": "B", "text": "Quatre milliards de paramètres" },
          { "key": "C", "text": "Quatre gigaoctets de mémoire vive" },
          { "key": "D", "text": "Quatre langues comprises" }
        ],
        "answer": "B",
        "explanation": "Le B vient de l’anglais billion, milliard : « 4B » veut dire quatre milliards de paramètres, les réglages appris par le modèle. C’est une taille, pas une version ni une quantité de mémoire. Plus ce nombre est grand, plus le modèle demande de mémoire vive."
      },
      {
        "question": "L’ordinateur de Mariam a 8 Go de mémoire vive au total. Quel choix est raisonnable pour commencer ?",
        "options": [
          { "key": "A", "text": "Le plus gros modèle de la liste" },
          { "key": "B", "text": "Un modèle 4B, qui demande à lui seul environ 8 Go libres" },
          { "key": "C", "text": "Deux modèles chargés en même temps" },
          { "key": "D", "text": "Un modèle plus petit que 4B, avec les autres applications fermées" }
        ],
        "answer": "D",
        "explanation": "Le meilleur modèle est celui que la machine supporte. Avec 8 Go au total, une partie de la mémoire sert déjà au système et aux autres applications : un modèle 4B, qui demande à lui seul environ 8 Go libres, est trop lourd : on prend un modèle plus petit que 4B et on ferme les autres applications. Pour un modèle 4B, prévoyez 16 Go au total."
      },
      {
        "question": "Dans LM Studio, quel est le bon ordre ?",
        "options": [
          { "key": "A", "text": "Rechercher le modèle, le télécharger, le charger dans la conversation, le tester" },
          { "key": "B", "text": "Le charger, puis le rechercher, puis le télécharger" },
          { "key": "C", "text": "Le tester, puis le rechercher" },
          { "key": "D", "text": "Installer LM Studio et attendre que le modèle arrive seul" }
        ],
        "answer": "A",
        "explanation": "On ne peut charger qu’un modèle déjà téléchargé, et on ne peut télécharger qu’un modèle trouvé dans la recherche. LM Studio ne contient aucun modèle au départ : c’est vous qui le choisissez, le téléchargez, le chargez dans la conversation, puis le testez sur une vraie tâche."
      },
      {
        "question": "Mariam demande au modèle installé d’enregistrer le formulaire dans un fichier. Que se passe-t-il ?",
        "options": [
          { "key": "A", "text": "Il crée le fichier sur le bureau" },
          { "key": "B", "text": "Il l’envoie par e-mail" },
          { "key": "C", "text": "Sans outils ajoutés, il ne peut pas : elle copie le texte elle-même" },
          { "key": "D", "text": "Il le publie en ligne" }
        ],
        "answer": "C",
        "explanation": "Seul, un modèle installé écrit du texte dans la fenêtre de conversation ; il n’a accès ni aux dossiers de l’ordinateur, ni à la messagerie, ni à Internet. Mariam copie la réponse dans son traitement de texte. Des outils peuvent s’ajouter plus tard pour lui donner ces capacités."
      },
      {
        "question": "Les réponses du modèle deviennent très lentes. Quelle est la cause probable, et que faire ?",
        "options": [
          { "key": "A", "text": "Le modèle est trop récent : il faut attendre" },
          { "key": "B", "text": "La mémoire vive manque : fermez des applications ou prenez un modèle plus petit" },
          { "key": "C", "text": "Internet est coupé : il faut se reconnecter" },
          { "key": "D", "text": "Le clavier est trop lent : il faut dicter" }
        ],
        "answer": "B",
        "explanation": "Un modèle installé ne dépend pas d’Internet pour répondre : sa vitesse dépend de la mémoire vive disponible. Si elle manque, libérez-en en fermant les autres applications, ou passez à un modèle plus petit."
      }
    ],
    "reflection": "Quelle tâche de votre travail ou de vos études, aujourd’hui confiée à un assistant en ligne, préféreriez-vous confier à un modèle installé sur votre ordinateur, et votre machine a-t-elle assez de mémoire vive pour cela ?",
    "glossary": [
      { "term": "LM Studio", "definition": "Application gratuite pour ordinateur (Windows, Mac, Linux) qui télécharge un modèle ouvert et le fait tourner sur votre machine. C’est le lecteur ; le modèle est l’album que vous y chargez." },
      { "term": "« B » (milliards de paramètres)", "definition": "Lettre qui suit la taille d’un modèle, de l’anglais billion, milliard. « 4B » veut dire quatre milliards de paramètres. Ce n’est pas un numéro de version." },
      { "term": "Paramètres", "definition": "Les réglages appris par un modèle pendant son entraînement. Plus il en a, plus il est gros, plus il est capable et plus il demande de mémoire vive." },
      { "term": "Mémoire vive (RAM)", "definition": "La mémoire de travail de l’ordinateur, comme la table de coupe d’un atelier où l’on étale l’ouvrage en cours. Le modèle doit y tenir pendant qu’il répond." },
      { "term": "Hugging Face", "definition": "Grande bibliothèque en ligne de modèles ouverts et de jeux de données. Chaque modèle y a sa fiche et sa licence, à vérifier avant tout usage commercial." },
      { "term": "Jeu de données", "definition": "Collection organisée de textes, de sons ou d’images qui sert à entraîner ou à adapter un modèle (en anglais, dataset)." }
    ]
  },
  "en": {
    "id": "og6",
    "lessonNumber": 6,
    "title": "Install an open-source AI on your computer with LM Studio",
    "objective": "By the end of this lesson, you will be able to install LM Studio and run an open-source model on your computer, even without a connection. You will know how to read the “B” in a model’s name, check your RAM and choose a model your machine can handle. You will be able to search for, download, load and test that model with an RCTF prompt, knowing its limits and where to go further.",
    "video": {
      "fr": "https://www.youtube.com/embed/nwyi4-qAFcw",
      "en": "",
      "ha": ""
    },
    "content": [
      {
        "title": "Run an AI at home with LM Studio, without being a computer expert",
        "body": "Many people think installing an AI on a computer is only for computer experts. That is a misunderstanding. LM Studio is a free desktop application, available for Windows, Mac and Linux. It does two things: it downloads an open model, then runs it on your machine. You then chat with it in a conversation window that looks like ChatGPT’s or Gemini’s.\n\nRemember the distinction from Lesson 1: the application is not the model. LM Studio is like a music player, and the model is the album you load into it. The player does not sing on its own: with no model downloaded, LM Studio answers nothing. And the same player can hold several albums: models from the Gemma (Google), Qwen (Alibaba), Llama (Meta), Mistral or DeepSeek families. Note that Gemma is an open model from Google; it is not the model behind the Gemini app.\n\nWhy bother? Because once the model is downloaded, it answers without a connection, and what you type stays on your computer. An accounting firm in Cotonou (Benin) handling its clients’ balance sheets, an association in Bukavu (DR Congo) collecting confidential testimonies, a trainer keeping her trainees’ files: all of them benefit from keeping their texts off a distant server. This is the computer version of what Lesson 5 did on the phone, with a bigger, more capable model."
      },
      {
        "title": "Read a model’s “B” and check your RAM",
        "body": "In the list of models, you will see names followed by “2B”, “4B”, “9B”, “27B”… The B stands for billion. So “4B” means four billion parameters. Parameters are the settings the model learned during its training, a bit like the experience stored in a craftsman’s hands. The bigger this number, the bigger the model, the more capable it is, and the more memory it needs. It is not a version number: “4B” is a size.\n\nRAM (random-access memory) is the computer’s working memory. Think of a tailoring workshop: the hard drive is the cupboard where fabrics are stored, the RAM is the cutting table where you spread out the piece you are working on. The model must fit on the table while it answers. As a rough guide: a model of about 4B weighs about 6 GB to download and needs at least 8 GB of free RAM; 16 GB in total is recommended, because the model is not the only thing running on the machine. Also plan for free disk space for the model file.\n\nCheck your machine before downloading anything. On Windows: open Task Manager, Performance tab, then Memory; look at total memory, but above all at available memory. On a Mac: Apple menu, then About This Mac, Memory line. Two minutes of checking saves you hours of downloading a model your computer cannot run, or a computer that freezes because the model took all the room."
      },
      {
        "title": "Choose a model your computer can handle, then download, load and test it",
        "body": "Which model is best? The one your device can handle and that fits your use. Models often have specialities: some are trained to write code, others to reason through long problems. If you want to write, summarise or rephrase text, there is no point looking for a giant model or a coding model: it would slow your machine down for a gain you would not notice. To start, a model of about 4B is enough; with 8 GB of RAM or less, go smaller.\n\nIn LM Studio, the path takes four moves. Search: open the model search and type a family name, for example Gemma or Qwen. Read the model card: it shows the model’s capabilities and size; choose a version of about 4B. Download: click Download, preferably on wifi, as the file weighs several gigabytes. Load, then test: select the model in the conversation window, wait for it to finish loading, say hello, then give it a real task with an RCTF prompt.\n\nWhile it answers, LM Studio shows the memory used by the model: for a model of about 4B, expect about 8 GB. If answers arrive word by word, very slowly, it is not the internet: RAM is running short. Close other applications (a browser with many tabs, video-editing software) or take a smaller model. A teacher in Bamako (Mali) preparing reading sheets on an 8 GB laptop will work better with a small, smooth model than with a big one that takes a minute per sentence."
      },
      {
        "title": "The limits of an installed model, and where to go further: Hugging Face and connected tools",
        "body": "Be clear-eyed about what it does not do. On its own, an installed model writes text: no images, no video. It has no internet access: it knows neither the news nor today’s prices, and its knowledge stops at the date of its training. It does not create or save files on your computer: if you ask it to save a form, it will tell you it cannot, and it is up to you to copy its answer into your word processor. Finally, downloads are heavy, and every update of a model is downloaded again. Note too that the LM Studio application itself may connect for its own updates and for model search.\n\nTo go further, there is Hugging Face, a large online library of open models. It holds thousands of models, each with its card and its licence, meaning the terms of use set by its author. Many are free for personal use, but always check the licence, especially if you plan to sell a service built on it. Hugging Face also hosts datasets: collections of texts, sounds or images used to train or adapt a model, including in African languages such as Swahili, Hausa or Wolof.\n\nOne last lead: LM Studio can lend your model to other tools installed on the same machine, such as an assistant that reads your documents or an agent that chains tasks. That is how you later add capabilities it lacks on its own, like access to files. This connection is covered in the course “How to create AI agents”. For today, the essential is in hand: a model running at home, offline, on your own task."
      }
    ],
    "example": {
      "title": "Preparing a seminar during an internet outage, without the trainees’ files leaving the computer",
      "challenge": "Mariam is a trainer at a vocational training centre in Ouagadougou (Burkina Faso). She prepares her sessions on her computer, but internet outages keep interrupting her. She has to organise an introductory seminar on artificial intelligence for her trainees, and she refuses to hand their files to an online service. She believes installing an AI is only for computer experts.",
      "solution": "She first checks her RAM in Task Manager. Then she installs LM Studio from its official website, searches for the Gemma family, reads a model card (capabilities, size) and chooses a version of about 4B. She downloads it on the centre’s wifi, loads it into the conversation and says hello: the model answers in French. She then gives it an RCTF prompt: “Role: you are the assistant of a trainer at a vocational training centre. Context: I am organising an introductory seminar on artificial intelligence for my trainees, at my centre. Task: write the registration form: the fields to fill in, then a three-line welcome message. Format: a numbered list ‘field – type of answer’, in plain French; leave square brackets for any information I have not given.” The form arrives with its sections and fields; she then asks for the seminar’s presentation script. When she asks the model to save the form to a file, it explains that it cannot: she copies the text into her word processor herself.",
      "impact": "During an internet outage, Mariam has a registration form and a presentation script ready to review and adjust. No trainee file has left her computer. She now knows how to watch the memory used by the model, and to switch to a smaller model if answers slow down."
    },
    "practice": {
      "title": "Install LM Studio and test a model on your own task",
      "instructions": [
        "Check your RAM and free disk space: on Windows, Task Manager, Performance tab, then Memory (look at available memory); on a Mac, Apple menu, then About This Mac. Write down both figures.",
        "Install LM Studio from its official website. In the model search, choose a model of about 4B (or smaller if you have 8 GB of RAM or less), read its card, download it on wifi, then load it into the conversation window.",
        "Test it on a real task with an RCTF prompt, adapting this one for example: Role: you are the assistant of a trainer at a vocational training centre. Context: I am organising [an introductory seminar on artificial intelligence] for [my trainees], on [date], at [my centre]. Task: write the registration form: the fields to fill in, then a three-line welcome message. Format: a numbered list ‘field – type of answer’, in plain English; leave square brackets for any information I have not given. Then write down the memory used by the model and one limit you noticed."
      ],
      "observation": "You see that the model answers from your computer, without going through an online service, and that its speed depends on your RAM: smooth if there is enough, slow if there is not. You spot at least one real limit (no images, no news, no saved file, slowness), and you know that the cure for slowness is a smaller model or closed applications, not a better connection."
    },
    "quiz": [
      {
        "question": "What does “4B” mean in a model’s name?",
        "options": [
          { "key": "A", "text": "Fourth version of the model" },
          { "key": "B", "text": "Four billion parameters" },
          { "key": "C", "text": "Four gigabytes of RAM" },
          { "key": "D", "text": "Four languages understood" }
        ],
        "answer": "B",
        "explanation": "The B stands for billion: “4B” means four billion parameters, the settings learned by the model. It is a size, not a version or an amount of memory. The bigger this number, the more RAM the model needs."
      },
      {
        "question": "Mariam’s computer has 8 GB of RAM in total. Which choice is reasonable to start with?",
        "options": [
          { "key": "A", "text": "The biggest model in the list" },
          { "key": "B", "text": "A 4B model, which alone needs about 8 GB free" },
          { "key": "C", "text": "Two models loaded at the same time" },
          { "key": "D", "text": "A model smaller than 4B, with other applications closed" }
        ],
        "answer": "D",
        "explanation": "The best model is the one the machine can handle. With 8 GB in total, part of the memory is already used by the system and other applications: a 4B model, which alone needs about 8 GB free, is too heavy: choose a model smaller than 4B and close other applications. For a 4B model, plan for 16 GB in total."
      },
      {
        "question": "In LM Studio, what is the right order?",
        "options": [
          { "key": "A", "text": "Search for the model, download it, load it into the conversation, test it" },
          { "key": "B", "text": "Load it, then search for it, then download it" },
          { "key": "C", "text": "Test it, then search for it" },
          { "key": "D", "text": "Install LM Studio and wait for the model to arrive on its own" }
        ],
        "answer": "A",
        "explanation": "You can only load a model that is already downloaded, and you can only download a model found in the search. LM Studio contains no model at the start: you choose it, download it, load it into the conversation, then test it on a real task."
      },
      {
        "question": "Mariam asks the installed model to save the form to a file. What happens?",
        "options": [
          { "key": "A", "text": "It creates the file on the desktop" },
          { "key": "B", "text": "It sends it by email" },
          { "key": "C", "text": "Without added tools, it cannot: she copies the text herself" },
          { "key": "D", "text": "It publishes it online" }
        ],
        "answer": "C",
        "explanation": "On its own, an installed model writes text in the conversation window; it has no access to the computer’s folders, to email or to the internet. Mariam copies the answer into her word processor. Tools can be added later to give it these capabilities."
      },
      {
        "question": "The model’s answers become very slow. What is the likely cause, and what should you do?",
        "options": [
          { "key": "A", "text": "The model is too recent: you have to wait" },
          { "key": "B", "text": "RAM is running short: close applications or take a smaller model" },
          { "key": "C", "text": "The internet is down: you need to reconnect" },
          { "key": "D", "text": "The keyboard is too slow: you should dictate" }
        ],
        "answer": "B",
        "explanation": "An installed model does not depend on the internet to answer: its speed depends on available RAM. If it runs short, free some up by closing other applications, or switch to a smaller model."
      }
    ],
    "reflection": "Which task in your work or studies, currently handed to an online assistant, would you rather give to a model installed on your computer, and does your machine have enough RAM for it?",
    "glossary": [
      { "term": "LM Studio", "definition": "A free desktop application (Windows, Mac, Linux) that downloads an open model and runs it on your machine. It is the player; the model is the album you load into it." },
      { "term": "“B” (billion parameters)", "definition": "The letter that follows a model’s size, from the English word billion. “4B” means four billion parameters. It is not a version number." },
      { "term": "Parameters", "definition": "The settings a model learned during its training. The more it has, the bigger and more capable it is, and the more RAM it needs." },
      { "term": "RAM (random-access memory)", "definition": "The computer’s working memory, like a workshop’s cutting table where the piece in progress is spread out. The model must fit in it while it answers." },
      { "term": "Hugging Face", "definition": "A large online library of open models and datasets. Each model has its card and its licence, to be checked before any commercial use." },
      { "term": "Dataset", "definition": "An organised collection of texts, sounds or images used to train or adapt a model." }
    ]
  },
  "ha": {
    "id": "og6",
    "lessonNumber": 6,
    "title": "Sanya AI mai budadden tushe (open source) a kwamfutarku da LM Studio",
    "objective": "A karshen wannan darasi, za ku iya sanya LM Studio kuma ku gudanar da samfurin AI mai budadden tushe a kwamfutarku, ko babu intanet. Za ku iya karanta « B » da ke cikin sunan samfuri, ku duba memorin aiki (RAM) na kwamfutarku, sannan ku zabi samfurin da na’urarku za ta iya dauka. Za ku iya nemo samfurin, ku sauke shi, ku loda shi, ku gwada shi da umarnin RCTF, tare da sanin iyakokinsa da hanyoyin zurfafa gaba.",
    "video": {
      "fr": "https://www.youtube.com/embed/nwyi4-qAFcw",
      "en": "",
      "ha": ""
    },
    "content": [
      {
        "title": "Gudanar da AI a gida da LM Studio, ba tare da zama kwararren kwamfuta ba",
        "body": "Mutane da yawa suna tunanin cewa sanya AI a kwamfuta aikin kwararrun kwamfuta ne kawai. Wannan kuskuren fahimta ne. LM Studio manhaja ce ta kyauta don kwamfuta, akwai ta a Windows, Mac da Linux. Tana yin abubuwa biyu: tana sauke budadden samfuri (model), sannan ta gudanar da shi a kan na’urarku. Daga nan kuna tattaunawa da shi a cikin tagar tattaunawa mai kama da ta ChatGPT ko Gemini.\n\nKu tuna bambancin da muka gani a Darasi 1: manhaja ba ita ce samfuri ba. LM Studio kamar na’urar kunna wakoki ce, samfuri kuma shi ne faifan wakokin da kuke sakawa a ciki. Na’urar ba ta waka da kanta: idan babu samfurin da aka sauke, LM Studio ba zai amsa komai ba. Kuma na’ura daya na iya daukar faifai da yawa: samfura daga dangin Gemma (Google), Qwen (Alibaba), Llama (Meta), Mistral ko DeepSeek. A kula, Gemma budadden samfuri ne na Google; ba shi ne samfurin manhajar Gemini ba.\n\nMe ya sa za a sha wannan wahala? Domin da zarar an sauke samfurin, yana amsawa ba tare da intanet ba, kuma abin da kuke rubutawa yana zama a kwamfutarku. Ofishin akanta a Cotonou (Benin) da ke sarrafa lissafin kudin abokan cinikinsa, wata kungiya a Bukavu (RDC) da ke karbar shaidu na sirri, malama mai horaswa da ke ajiye fayilolin dalibanta: dukkansu suna amfana idan rubuce-rubucensu ba su tafi wata uwar garke (server) mai nisa ba. Wannan shi ne ci gaban abin da Darasi 5 ya yi a waya, amma a kwamfuta, da samfuri mafi girma kuma mafi iyawa."
      },
      {
        "title": "Karanta « B » na samfuri kuma ku duba memorin aiki (RAM)",
        "body": "A cikin jerin samfura, za ku ga sunaye masu bin « 2B », « 4B », « 9B », « 27B »… Harafin B ya fito daga kalmar Turanci billion, wato biliyan. Saboda haka « 4B » na nufin sigogi (parameters) biliyan hudu. Sigogi su ne saitunan da samfurin ya koya a lokacin horonsa, kamar kwarewar da ta taru a hannun mai sana’a. Idan wannan lamba ta fi girma, samfurin ya fi girma, ya fi iyawa, kuma yana bukatar karin memori. Ba lambar siga (version) ba ce: « 4B » girma ne.\n\nMemorin aiki (RAM) shi ne memorin da kwamfuta ke aiki da shi a halin yanzu. Ku yi tunanin shagon dinki: rumbun ajiya (hard disk) shi ne kabad din da ake ajiye yaduka, memorin aiki kuma shi ne teburin yanka yadi inda ake shimfida yadin da ake aiki a kai. Dole samfurin ya dace a kan teburin yayin da yake amsawa. A kiyasce: samfuri na kusan 4B yana da nauyin kusan 6 GB idan za a sauke shi, kuma yana bukatar akalla 8 GB na memorin aiki a kyauta; ana ba da shawarar 16 GB gaba daya, domin ba samfurin kadai ke aiki a kan na’urar ba. Ku kuma tanadi wuri a rumbun ajiya don fayil din samfurin.\n\nKu duba na’urarku kafin ku sauke komai. A Windows: bude Task Manager (Gestionnaire des tâches), shafin Performance, sannan Memory; ku duba jimillar memori, amma musamman memorin da ke akwai a kyauta. A Mac: menu na Apple, sannan About This Mac (À propos de ce Mac), layin Memory. Mintuna biyu na dubawa suna kare ku daga sa’o’i na sauke samfurin da kwamfutarku ba za ta iya gudanarwa ba, ko kwamfutar da ta daskare saboda samfurin ya cinye dukkan wurin."
      },
      {
        "title": "Zabi samfurin da kwamfutarku za ta iya dauka, sannan ku sauke shi, ku loda shi, ku gwada shi",
        "body": "Wane samfuri ne mafi kyau? Wanda na’urarku za ta iya dauka kuma ya dace da bukatarku. Samfura sau da yawa suna da fannoni na musamman: wasu an horar da su don rubuta code, wasu don yin tunani kan matsaloli masu tsawo. Idan kuna son rubutu, takaitawa ko sake tsara rubutu, babu amfanin neman katon samfuri ko samfurin code: zai sa na’urarku ta yi jinkiri don ribar da ba za ku gani ba. Don farawa, samfuri na kusan 4B ya isa; idan kuna da 8 GB na memorin aiki ko kasa da haka, ku dauki karami.\n\nA LM Studio, hanyar tana da matakai hudu. Nema: bude binciken samfura kuma ku rubuta sunan wani dangi, misali Gemma ko Qwen. Karanta katin bayani: yana nuna iyawar samfurin da girmansa; ku zabi siga ta kusan 4B. Saukewa: danna Download (sauke), zai fi kyau da wifi, domin fayil din yana da nauyin gigabytes da dama. Lodawa, sannan gwadawa: zabi samfurin a tagar tattaunawa, ku jira ya gama lodawa, ku gaishe shi, sannan ku ba shi ainihin aiki da umarnin RCTF.\n\nYayin da yake amsawa, LM Studio yana nuna memorin da samfurin ke amfani da shi: ga samfuri na kusan 4B, ku yi tsammanin kusan 8 GB. Idan amsoshi suna zuwa kalma-kalma, a hankali sosai, ba intanet ba ne: memorin aiki ne ya yi karanci. Ku rufe sauran manhajoji (burauza mai shafuka da yawa, manhajar gyaran bidiyo) ko ku dauki karamin samfuri. Malamin makaranta a Bamako (Mali) da ke shirya takardun karatu a kwamfutar tafi-da-gidanka mai 8 GB zai fi samun sauki da karamin samfuri mai sauri fiye da babba da ke daukar minti daya kan kowace jumla."
      },
      {
        "title": "Iyakokin samfurin da aka sanya, da inda za a zurfafa: Hugging Face da kayan aikin da ake hadawa",
        "body": "Ku fadi gaskiya ga kanku game da abin da ba ya yi. Shi kadai, samfurin da aka sanya yana rubuta rubutu ne kawai: ba hoto, ba bidiyo. Ba shi da damar shiga intanet: bai san labarai ko farashin yau ba, kuma iliminsa ya tsaya a ranar da aka gama horar da shi. Ba ya kirkira ko ajiye fayil a kwamfutarku: idan kuka ce ya ajiye fom, zai ce muku ba zai iya ba, kuma ku ne za ku kwafi amsarsa zuwa manhajar rubutunku. A karshe, saukewa tana da nauyi, kuma duk sabuntawar samfuri ana sake sauke ta. Ku sani kuma cewa manhajar LM Studio ita kanta na iya amfani da intanet don sabuntawarta da kuma binciken samfura.\n\nDon zurfafa gaba, akwai Hugging Face, babban dakin karatu na yanar gizo na budaddun samfura. A can akwai dubban samfura, kowanne da katin bayaninsa da lasisinsa, wato ka’idojin amfani da mai shi ya gindaya. Da yawa kyauta ne don amfanin kai, amma ku duba lasisin koyaushe, musamman idan kuna shirin sayar da wani sabis da aka gina a kansa. Hugging Face yana kuma dauke da tarin bayanai (datasets): tarin rubuce-rubuce, sautuka ko hotuna da ake amfani da su don horar da samfuri ko daidaita shi, har da harsunan Afirka kamar Swahili, Hausa ko Wolof.\n\nHanya ta karshe: LM Studio na iya ba da rancen samfurinku ga wasu kayan aikin da aka sanya a kan na’ura daya, kamar mataimakin da ke karanta takardunku ko wakili (agent) da ke jera ayyuka. Ta haka ne daga baya ake kara masa iyawar da ba shi da ita shi kadai, kamar damar shiga fayiloli. Ana koyar da wannan hadin a kwas din « Yadda ake kirkirar wakilan AI (agents) ». Ga yau, abu mafi muhimmanci ya samu: samfurin da ke aiki a gidanku, ba tare da intanet ba, kan aikinku na kanku."
      }
    ],
    "example": {
      "title": "Shirya taron karawa juna sani lokacin da intanet ya dauke, ba tare da fayilolin dalibai sun fita daga kwamfuta ba",
      "challenge": "Mariam malama ce mai horaswa a wata cibiyar koyar da sana’o’i a Ouagadougou (Burkina Faso). Tana shirya darussanta a kwamfutarta, amma daukewar intanet tana katse mata aiki akai-akai. Dole ta shirya taron karawa juna sani na gabatarwa kan basirar na’ura (AI) ga dalibanta, kuma ta ki mika fayilolinsu ga wani sabis na yanar gizo. Tana tsammanin sanya AI aikin kwararrun kwamfuta ne kawai.",
      "solution": "Da farko ta duba memorin aikinta a Task Manager. Sannan ta sanya LM Studio daga shafinsa na hukuma, ta nemi dangin Gemma, ta karanta katin bayanin wani samfuri (iyawa, girma) kuma ta zabi siga ta kusan 4B. Ta sauke shi da wifi na cibiyar, ta loda shi a tattaunawa kuma ta gaishe shi: samfurin ya amsa da Faransanci. Daga nan ta ba shi umarnin RCTF: « Matsayi: kai mataimakin malama mai horaswa ne a cibiyar koyar da sana’o’i. Mahalli: ina shirya taron karawa juna sani na gabatarwa kan basirar na’ura ga dalibaina, a cibiyata. Aiki: rubuta fom din rajista: wuraren da za a cike, sannan sakon maraba na layi uku. Tsari: jerin lambobi ‘wuri – irin amsa’, da Faransanci mai sauki; ka bar baka-baka ga duk bayanin da ban bayar ba. » Fom din ya zo da sassansa da wuraren cikewa; sannan ta nemi rubutun gabatar da taron. Lokacin da ta ce wa samfurin ya ajiye fom din a fayil, ya bayyana cewa ba zai iya ba: ita da kanta ta kwafi rubutun zuwa manhajar rubutunta.",
      "impact": "Lokacin da intanet ya dauke, Mariam tana da fom din rajista da rubutun gabatarwa a shirye don ta sake karantawa ta gyara. Babu fayil din dalibi ko daya da ya fita daga kwamfutarta. Yanzu ta san yadda za ta lura da memorin da samfurin ke amfani da shi, kuma ta koma ga karamin samfuri idan amsoshi sun yi jinkiri."
    },
    "practice": {
      "title": "Ku sanya LM Studio kuma ku gwada samfuri kan aikinku na kanku",
      "instructions": [
        "Ku duba memorin aikinku da wurin ajiya da ke akwai: a Windows, Task Manager, shafin Performance, sannan Memory (ku duba memorin da ke akwai a kyauta); a Mac, menu na Apple, sannan About This Mac. Ku rubuta lambobin biyu.",
        "Ku sanya LM Studio daga shafinsa na hukuma. A binciken samfura, ku zabi samfuri na kusan 4B (ko karami idan kuna da 8 GB na memorin aiki ko kasa da haka), ku karanta katin bayaninsa, ku sauke shi da wifi, sannan ku loda shi a tagar tattaunawa.",
        "Ku gwada shi kan ainihin aiki da umarnin RCTF, kuna daidaita wannan misali: Matsayi: kai mataimakin malama mai horaswa ne a cibiyar koyar da sana’o’i. Mahalli: ina shirya [taron karawa juna sani na gabatarwa kan basirar na’ura] ga [dalibaina], ranar [kwanan wata], a [cibiyata]. Aiki: rubuta fom din rajista: wuraren da za a cike, sannan sakon maraba na layi uku. Tsari: jerin lambobi ‘wuri – irin amsa’, da Hausa mai sauki; ka bar baka-baka ga duk bayanin da ban bayar ba. Sannan ku rubuta memorin da samfurin ya yi amfani da shi da wata iyaka da kuka lura da ita."
      ],
      "observation": "Za ku ga cewa samfurin yana amsawa daga kwamfutarku, ba tare da ya bi ta wani sabis na yanar gizo ba, kuma saurinsa ya dogara da memorin aikinku: yana tafiya lafiya idan memorin ya isa, yana jinkiri idan ya yi karanci. Za ku gano akalla iyaka guda ta gaske (babu hoto, babu labarai, babu fayil da aka ajiye, jinkiri), kuma kun san cewa maganin jinkiri shi ne karamin samfuri ko rufe manhajoji, ba ingantaccen intanet ba."
    },
    "quiz": [
      {
        "question": "Me « 4B » ke nufi a cikin sunan samfuri?",
        "options": [
          { "key": "A", "text": "Siga ta hudu ta samfurin" },
          { "key": "B", "text": "Sigogi (parameters) biliyan hudu" },
          { "key": "C", "text": "Gigabytes hudu na memorin aiki" },
          { "key": "D", "text": "Harsuna hudu da yake fahimta" }
        ],
        "answer": "B",
        "explanation": "Harafin B ya fito daga Turanci billion, wato biliyan: « 4B » na nufin sigogi biliyan hudu, saitunan da samfurin ya koya. Girma ne, ba siga ba ce, kuma ba yawan memori ba ne. Idan wannan lamba ta fi girma, samfurin yana bukatar karin memorin aiki."
      },
      {
        "question": "Kwamfutar Mariam tana da 8 GB na memorin aiki gaba daya. Wane zabi ne mai hankali don farawa?",
        "options": [
          { "key": "A", "text": "Samfuri mafi girma a cikin jerin" },
          { "key": "B", "text": "Samfuri na 4B, wanda shi kadai yake bukatar kusan 8 GB a sarari" },
          { "key": "C", "text": "Samfura biyu da aka loda a lokaci guda" },
          { "key": "D", "text": "Samfuri karami fiye da 4B, tare da rufe sauran manhajoji" }
        ],
        "answer": "D",
        "explanation": "Samfuri mafi kyau shi ne wanda na’urar za ta iya dauka. Da 8 GB gaba daya, wani bangare na memorin tsarin kwamfuta da sauran manhajoji na amfani da shi tun farko: samfuri na 4B, wanda shi kadai yake bukatar kusan 8 GB a sarari, ya yi nauyi: a zabi samfuri karami fiye da 4B, a rufe sauran manhajoji. Don samfuri na 4B, a tanadi 16 GB gaba daya."
      },
      {
        "question": "A LM Studio, wane tsari ne daidai?",
        "options": [
          { "key": "A", "text": "Nemo samfurin, sauke shi, loda shi a tattaunawa, gwada shi" },
          { "key": "B", "text": "Loda shi, sannan nemo shi, sannan sauke shi" },
          { "key": "C", "text": "Gwada shi, sannan nemo shi" },
          { "key": "D", "text": "Sanya LM Studio kuma a jira samfurin ya zo da kansa" }
        ],
        "answer": "A",
        "explanation": "Ba za a iya loda samfurin da ba a sauke ba, kuma ba za a iya sauke samfurin da ba a samo a bincike ba. LM Studio ba shi da wani samfuri a farko: ku ne kuke zabarsa, ku sauke shi, ku loda shi a tattaunawa, sannan ku gwada shi kan ainihin aiki."
      },
      {
        "question": "Mariam ta ce wa samfurin da aka sanya ya ajiye fom din a fayil. Me zai faru?",
        "options": [
          { "key": "A", "text": "Zai kirkiri fayil din a kan tebur (desktop)" },
          { "key": "B", "text": "Zai aika shi ta imel" },
          { "key": "C", "text": "Ba tare da kara masa kayan aiki ba, ba zai iya ba: ita da kanta za ta kwafi rubutun" },
          { "key": "D", "text": "Zai wallafa shi a yanar gizo" }
        ],
        "answer": "C",
        "explanation": "Shi kadai, samfurin da aka sanya yana rubuta rubutu ne a tagar tattaunawa; ba shi da damar shiga manyan fayilolin kwamfuta, ko imel, ko intanet. Mariam za ta kwafi amsar zuwa manhajar rubutunta. Daga baya za a iya kara masa kayan aiki don ba shi wadannan iyawa."
      },
      {
        "question": "Amsoshin samfurin sun yi jinkiri sosai. Mene ne dalilin da ya fi yiwuwa, kuma me za a yi?",
        "options": [
          { "key": "A", "text": "Samfurin ya yi sabo da yawa: sai a jira" },
          { "key": "B", "text": "Memorin aiki ya yi karanci: ku rufe manhajoji ko ku dauki karamin samfuri" },
          { "key": "C", "text": "Intanet ya dauke: sai a sake hadawa" },
          { "key": "D", "text": "Madannin rubutu ya yi jinkiri: sai a yi magana maimakon rubutu" }
        ],
        "answer": "B",
        "explanation": "Samfurin da aka sanya ba ya dogara da intanet don amsawa: saurinsa ya dogara da memorin aiki da ke akwai. Idan ya yi karanci, ku samar da wuri ta hanyar rufe sauran manhajoji, ko ku koma ga karamin samfuri."
      }
    ],
    "reflection": "Wane aiki a cikin sana’arku ko karatunku, wanda yanzu kuke ba wa mataimakin yanar gizo, za ku fi so ku ba wa samfurin da aka sanya a kwamfutarku, kuma shin na’urarku tana da isasshen memorin aiki don haka?",
    "glossary": [
      { "term": "LM Studio", "definition": "Manhaja ce ta kyauta don kwamfuta (Windows, Mac, Linux) da ke sauke budadden samfuri kuma ta gudanar da shi a kan na’urarku. Ita ce na’urar kunnawa; samfuri kuma shi ne faifan da kuke sakawa a ciki." },
      { "term": "« B » (biliyan na sigogi)", "definition": "Harafin da ke bin girman samfuri, daga kalmar Turanci billion, wato biliyan. « 4B » na nufin sigogi biliyan hudu. Ba lambar siga (version) ba ce." },
      { "term": "Paramètres / Parameters (sigogi)", "definition": "Saitunan da samfuri ya koya a lokacin horonsa. Idan suna da yawa, samfurin ya fi girma, ya fi iyawa, kuma yana bukatar karin memorin aiki." },
      { "term": "Mémoire vive / RAM (memorin aiki)", "definition": "Memorin da kwamfuta ke aiki da shi a halin yanzu, kamar teburin yanka yadi a shagon dinki inda ake shimfida aikin da ake yi. Dole samfurin ya dace a ciki yayin da yake amsawa." },
      { "term": "Hugging Face", "definition": "Babban dakin karatu na yanar gizo na budaddun samfura da tarin bayanai. Kowane samfuri yana da katin bayaninsa da lasisinsa, wanda ya kamata a duba kafin kowane amfani na kasuwanci." },
      { "term": "Jeu de données / Dataset (tarin bayanai)", "definition": "Tarin rubuce-rubuce, sautuka ko hotuna da aka tsara, da ake amfani da shi don horar da samfuri ko daidaita shi." }
    ]
  }
};
