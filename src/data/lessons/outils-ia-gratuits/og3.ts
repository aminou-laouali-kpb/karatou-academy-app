import { Language } from '../../translations';
import { LessonContent } from '../../lessonContent';

// Module « Choisir le bon outil IA gratuit et installer une IA open source » (outils-ia-gratuits) — leçon og3 (réponse sourcée et vérification des sources)
// Texte aligné sur le CLAUDE.md de production vidéo du cours 15 (docs/production-video/claude-md/).
// Trilingue FR / EN / HA. ⚠️ Traductions HA à faire valider par un locuteur natif haoussa.
export const ogLesson3: Record<Language, LessonContent> = {
  "fr": {
    "id": "og3",
    "lessonNumber": 3,
    "title": "Obtenir une réponse sourcée avec l’IA et vérifier chaque source",
    "objective": "À la fin de cette leçon, vous saurez obtenir de l’IA une réponse sourcée, c’est-à-dire un résumé dont chaque information renvoie à une page que vous pouvez ouvrir. Vous saurez rédiger une consigne RCTF qui exige des sources officielles et datées, puis vérifier chaque source avec trois questions : qui parle, quand, et est-ce bien écrit dedans. Vous saurez enfin écarter une source ancienne ou non officielle, et noter l’information retenue avec son lien et sa date.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Une date précise n’est pas une date vérifiée",
        "body": "Quand vous posez une question à un assistant IA, il répond presque toujours avec assurance : une date, un chiffre, un nom, sans hésiter. Le malentendu est là : on croit que précis veut dire vérifié. Or un assistant peut produire une date nette qui ne vient de nulle part, ou d’une page vieille de plusieurs années. C’est comme un passant qui vous indique le chemin avec beaucoup d’aplomb : son assurance ne prouve pas qu’il connaît la route.\n\nLe risque devient concret dès que l’information compte : la date limite d’une bourse, le calendrier d’un concours de la fonction publique en Côte d’Ivoire, les pièces à fournir pour une démarche administrative au Bénin, l’horaire d’un examen à Bamako. Une date fausse, et c’est une candidature ratée ou un déplacement inutile. Sans lien, impossible de savoir d’où vient l’information, donc impossible de la contrôler.\n\nLa bonne question n’est donc pas « la réponse a-t-elle l’air juste ? », mais « d’où vient-elle ? ». Cette leçon vous apprend à obtenir des réponses qui montrent leurs sources, puis à contrôler ces sources vous-même. L’IA fait le premier tri ; la vérification reste votre travail."
      },
      {
        "title": "Un moteur de réponse : un résumé avec ses preuves numérotées",
        "body": "Un moteur de réponse est un outil qui cherche sur le web, lit plusieurs pages, puis rédige un résumé. Sa particularité : chaque phrase porte un petit numéro qui renvoie à la page d’où vient l’information. Perplexity fonctionne ainsi, et Gemini, ChatGPT, Copilot ou Claude proposent aussi, selon les versions, un mode recherche qui affiche des liens. Pensez à un exposé d’étudiant suivi de sa bibliographie : le texte résume, les références permettent de contrôler. Aucun de ces outils n’est « le meilleur » : ce qui compte, c’est qu’il montre ses sources.\n\nPour obtenir de bonnes sources, demandez-les dans votre consigne. Avec la méthode RCTF, cela donne par exemple : « Rôle : tu es un assistant de recherche rigoureux, qui cite ses sources. Contexte : je prépare le concours d’entrée d’une école de santé à Conakry, pour cette année. Tâche : quelles sont les dates d’inscription ? Pour chaque information, cite la source officielle et sa date de publication. Format : cinq lignes au plus, puis la liste des sources avec lien et date ; si tu ne peux pas confirmer une information, écris « non vérifié ». »\n\nLes deux dernières précisions sont précieuses. Demander la date de chaque source vous aide à repérer les pages périmées. Autoriser l’outil à écrire « non vérifié » lui offre une sortie honnête, au lieu de l’inciter à combler un vide. Attention toutefois : même avec cette consigne, un outil peut se tromper ou citer une page qui ne dit pas ce qu’il affirme. Le numéro est un point de départ, pas une preuve."
      },
      {
        "title": "Ouvrir chaque source pour comparer la page et le résumé",
        "body": "Le numéro est une porte : touchez-le, et la page s’ouvre. Votre travail consiste alors à vérifier que la page dit bien ce que dit le résumé. Parfois, le résumé déforme : une date d’ouverture devient une date de clôture, une condition disparaît, un chiffre change. Parfois, la page parle d’autre chose, d’un autre programme ou d’un autre pays. Une source qu’on n’ouvre pas ne prouve rien.\n\nNe vous laissez pas impressionner par le nombre. Une réponse qui affiche cinq sources n’est pas forcément juste : trois d’entre elles peuvent recopier la même information erronée, une autre peut dater d’une année passée, une dernière venir d’un blog sans auteur. C’est comme une rumeur au marché : l’entendre de cinq personnes ne la rend pas vraie si toutes la tiennent du même voisin. Une seule source officielle vaut plus que cinq copies.\n\nSur téléphone, avec une connexion lente, ouvrir chaque lien peut sembler long. Allez à l’essentiel : ouvrez d’abord la source qui porte l’information décisive (la date, la condition, la liste des pièces), puis une deuxième pour confirmer. Si aucune source ne confirme, relancez l’outil en ne demandant que des sources officielles, ou allez directement sur le site de l’organisme concerné."
      },
      {
        "title": "Trois questions à chaque source : qui parle, quand, est-ce écrit dedans",
        "body": "Devant chaque page ouverte, posez trois questions. Qui parle ? Un ministère, une université, l’organisme qui finance un programme, ou bien un blog inconnu, un message transféré sur WhatsApp ? Quand ? Cherchez la date de publication ou de mise à jour, souvent en haut ou en bas de la page. Est-ce écrit dedans ? Retrouvez la phrase exacte qui contient l’information, au lieu de supposer qu’elle s’y trouve.\n\nPour une bourse, la page de l’organisme qui la finance passe avant tout. Pour un concours, c’est le site officiel de l’école ou du ministère ; pour une démarche, celui de l’administration concernée, par exemple le portail officiel d’un service public au Maroc ou au Kenya. Un article de presse ou un blog peut vous faire découvrir un programme, mais la date à retenir est celle de la source officielle de l’année en cours. Et si une page vous demande de l’argent pour « réserver » une bourse, c’est un signal d’alerte : méfiez-vous.\n\nUne fois l’information confirmée, notez-la avec trois éléments : le fait retenu (une date, une condition), le lien de la source officielle, et le jour où vous avez vérifié. Cette petite note vous permet de revérifier en un geste si la page change, et de montrer votre source à un camarade ou à un collègue. Retenez la source, pas le résumé."
      }
    ],
    "example": {
      "title": "Koffi vérifie la date limite d’une bourse de master sur la page officielle",
      "challenge": "Koffi, étudiant en licence à Lomé (Togo), cherche une bourse de master ouverte aux étudiants togolais, et surtout sa date limite de candidature. Il pose la question à un assistant IA, qui lui répond par une date nette et assurée, sans aucune source. D’où vient cette date ? Rien ne permet de le savoir. Si elle est fausse ou tirée d’une page périmée, Koffi risque de rater sa candidature.",
      "solution": "Koffi ouvre Perplexity, en version gratuite, sur son téléphone Android. Il tape une consigne en quatre blocs : « Rôle : tu es un assistant de recherche rigoureux, qui cite ses sources. Contexte : je suis étudiant en licence au Togo et je cherche une bourse de master pour l’an prochain. Tâche : quelles sont les conditions de cette bourse pour les étudiants togolais, et sa date limite de candidature ? Pour chaque information, cite la source officielle et sa date de publication. Signale toute source qui date d’une année précédente. Format : cinq lignes au plus, puis la liste des sources, chacune avec son lien et sa date. Si tu ne peux pas confirmer une information, écris « non vérifié ». » La réponse arrive avec des sources numérotées, et il les ouvre. Source 1 : la page officielle du programme, où figure la date limite, publiée cette année : il la retient. Source 2 : un article d’une année passée, dont les dates ont pu changer : il l’écarte. Il relance : « Tâche : ne garde que les sources officielles. Format : chaque source avec son lien et sa date de publication. » Puis il note dans son téléphone la date limite, le lien de la page officielle et le jour de sa vérification.",
      "impact": "Koffi dépose sa candidature avant la date limite, vérifiée sur la page officielle du programme. Sa note « date + lien + jour de vérification » lui permet de revérifier la page en un geste avant d’envoyer son dossier, et de partager une source fiable avec ses camarades de promotion plutôt qu’une date sans origine."
    },
    "practice": {
      "title": "Vérifiez une réponse, source par source",
      "instructions": [
        "Posez une question d’actualité utile pour vous (une bourse, un concours, une démarche) dans Perplexity ou dans le mode recherche d’un assistant, en copiant cette consigne et en remplaçant les crochets : Rôle : tu es un assistant de recherche rigoureux, qui cite ses sources. Contexte : je cherche [quoi : une bourse, un concours, une démarche] pour [qui], pour [quelle année], à [où]. Je dois m’appuyer sur des sources officielles et récentes. Tâche : [votre question précise]. Pour chaque information, cite la source officielle et sa date de publication. Signale toute source qui date d’une année précédente. Format : cinq lignes au plus, puis la liste des sources, chacune avec son lien et sa date. Si tu ne peux pas confirmer une information, écris « non vérifié ». N’invente aucune date ni aucun lien.",
        "Ouvrez au moins deux des sources citées et posez à chacune les trois questions : qui parle ? quand la page a-t-elle été publiée ? l’information est-elle bien écrite dedans ? Écartez toute source ancienne, non officielle, ou qui dit autre chose que le résumé.",
        "Notez l’information retenue, avec le lien de la source officielle, sa date de publication et le jour où vous avez vérifié, dans votre application de notes ou dans un cahier."
      ],
      "observation": "Vous constaterez que le résumé et les pages ne disent pas toujours la même chose : une source peut être ancienne, venir d’un site non officiel ou parler d’autre chose. Vous verrez aussi qu’une seule page officielle et datée suffit à trancher, alors qu’une longue liste de sources ne prouve rien tant qu’on ne les a pas ouvertes."
    },
    "quiz": [
      {
        "question": "Dans une réponse de Perplexity, que signifie le petit numéro après une phrase ?",
        "options": [
          { "key": "A", "text": "Une note de qualité" },
          { "key": "B", "text": "Un lien vers la page qui sert de source" },
          { "key": "C", "text": "Le nombre de mots" },
          { "key": "D", "text": "Le rang de l’outil" }
        ],
        "answer": "B",
        "explanation": "Dans un moteur de réponse, chaque numéro renvoie à la page d’où vient l’information. C’est une porte : on le touche pour ouvrir la page et vérifier qu’elle dit bien ce que dit le résumé. Ce n’est ni une note, ni un classement."
      },
      {
        "question": "Avant de croire une date trouvée en ligne, que faites-vous ?",
        "options": [
          { "key": "A", "text": "Vous ouvrez la source et retrouvez la date sur la page" },
          { "key": "B", "text": "Vous la partagez tout de suite" },
          { "key": "C", "text": "Vous la demandez à un autre assistant, sans source" },
          { "key": "D", "text": "Vous la recopiez dans votre cahier" }
        ],
        "answer": "A",
        "explanation": "Une date précise n’est pas une date vérifiée. Il faut ouvrir la source et retrouver la date écrite sur la page. Demander à un autre assistant sans source ne vérifie rien : vous obtenez seulement une deuxième affirmation sans preuve."
      },
      {
        "question": "Une source est un article d’une année passée. Que faites-vous ?",
        "options": [
          { "key": "A", "text": "Vous la croyez, puisqu’elle est en ligne" },
          { "key": "B", "text": "Vous la gardez, puisqu’elle est numérotée" },
          { "key": "C", "text": "Vous la mettez de côté et cherchez une source officielle et récente" },
          { "key": "D", "text": "Vous la transférez à vos amis" }
        ],
        "answer": "C",
        "explanation": "La question « quand ? » sert justement à repérer ce cas. D’une année à l’autre, les dates et les conditions d’une bourse ou d’un concours peuvent changer. Un article ancien peut aider à découvrir un programme, mais l’information à retenir vient d’une source officielle de l’année en cours."
      },
      {
        "question": "Pour une bourse, quelle source passe avant les autres ?",
        "options": [
          { "key": "A", "text": "Un blog inconnu" },
          { "key": "B", "text": "Un message transféré sur WhatsApp" },
          { "key": "C", "text": "Un commentaire sur un réseau social" },
          { "key": "D", "text": "La page officielle de l’organisme qui finance la bourse" }
        ],
        "answer": "D",
        "explanation": "La question « qui parle ? » place en premier l’organisme responsable de l’information. Pour une bourse, c’est celui qui la finance : sa page officielle fait foi. Un blog, un message transféré ou un commentaire peuvent recopier une information fausse ou périmée."
      },
      {
        "question": "Une réponse affiche cinq sources. Est-elle forcément juste ?",
        "options": [
          { "key": "A", "text": "Non : il faut ouvrir les sources et vérifier qui parle, quand, et si c’est écrit dedans" },
          { "key": "B", "text": "Oui : cinq sources suffisent" },
          { "key": "C", "text": "Oui, si elle est longue" },
          { "key": "D", "text": "Non : il en faut au moins dix" }
        ],
        "answer": "A",
        "explanation": "Le nombre de sources ne prouve rien. Une source peut être ancienne, non officielle, ou dire autre chose que le résumé ; plusieurs peuvent recopier la même erreur. Ce qui compte, c’est d’ouvrir les sources et de poser les trois questions : une seule source officielle vaut plus que cinq copies."
      }
    ],
    "reflection": "Quelle information importante pour vous (une date de concours, une démarche administrative, une consigne de santé) avez-vous déjà crue ou partagée sans ouvrir sa source, et quelle page officielle auriez-vous pu consulter à la place ?",
    "glossary": [
      {
        "term": "Réponse sourcée",
        "definition": "Une réponse dont chaque information renvoie à une page que vous pouvez ouvrir et contrôler. Elle s’oppose à une réponse nette donnée sans aucun lien, dont on ne sait pas d’où elle vient."
      },
      {
        "term": "Moteur de réponse",
        "definition": "Un outil qui cherche sur le web, lit plusieurs pages et rédige un résumé dont chaque phrase porte un numéro de source. Autrement dit : un résumé, avec ses preuves. Perplexity en est un exemple."
      },
      {
        "term": "Source numérotée",
        "definition": "Le petit numéro placé après une phrase dans un moteur de réponse. C’est un lien vers la page d’où vient l’information : on le touche pour l’ouvrir et vérifier ce qu’elle dit."
      },
      {
        "term": "Source officielle",
        "definition": "La page publiée par l’organisme responsable de l’information : ministère, université, organisme qui finance une bourse, administration. Elle passe avant les blogs, les articles et les messages transférés."
      },
      {
        "term": "Date de publication",
        "definition": "Le jour où une page a été mise en ligne ou mise à jour. Elle indique si l’information est récente ou si elle a pu changer depuis, par exemple d’une année à l’autre."
      },
      {
        "term": "Mode recherche",
        "definition": "Une fonction proposée, selon les versions, par des assistants comme Gemini, ChatGPT, Copilot ou Claude : l’assistant cherche sur le web et affiche des liens vers les pages qu’il a utilisées."
      }
    ]
  },
  "en": {
    "id": "og3",
    "lessonNumber": 3,
    "title": "Getting a Sourced Answer from AI and Checking Every Source",
    "objective": "By the end of this lesson, you will know how to get a sourced answer from AI, meaning a summary in which every piece of information points to a page you can open. You will know how to write an RCTF prompt that requires official, dated sources, then check each source with three questions: who is speaking, when, and is it really written there. Finally, you will know how to set aside an old or unofficial source, and note down the information you keep with its link and its date.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "A Precise Date Is Not a Verified Date",
        "body": "When you ask an AI assistant a question, it almost always answers with confidence: a date, a figure, a name, without hesitation. That is where the misunderstanding lies: we assume that precise means verified. Yet an assistant can produce a clear-cut date that comes from nowhere, or from a page that is several years old. It is like a passer-by who gives you directions with great self-assurance: their confidence does not prove they know the way.\n\nThe risk becomes real as soon as the information matters: the deadline for a scholarship, the schedule of a civil service exam in Côte d'Ivoire, the documents required for an administrative procedure in Benin, the time of an exam in Bamako. One wrong date, and it means a missed application or a wasted trip. Without a link, there is no way to know where the information comes from, and therefore no way to check it.\n\nSo the right question is not \"does the answer look right?\" but \"where does it come from?\". This lesson teaches you to get answers that show their sources, then to check those sources yourself. The AI does the first sorting; the checking remains your job."
      },
      {
        "title": "An Answer Engine: A Summary with Its Numbered Evidence",
        "body": "An answer engine is a tool that searches the web, reads several pages, then writes a summary. What makes it different: each sentence carries a small number that points to the page the information comes from. Perplexity works this way, and Gemini, ChatGPT, Copilot or Claude also offer, depending on the version, a search mode that displays links. Think of a student's presentation followed by its bibliography: the text summarizes, the references let you check. None of these tools is \"the best\": what matters is that it shows its sources.\n\nTo get good sources, ask for them in your prompt. With the RCTF method, this gives for example: \"Role: you are a rigorous research assistant who cites your sources. Context: I am preparing for the entrance exam of a health school in Conakry, for this year. Task: what are the registration dates? For each piece of information, cite the official source and its publication date. Format: five lines at most, then the list of sources with link and date; if you cannot confirm a piece of information, write 'not verified'.\"\n\nThe last two details are valuable. Asking for the date of each source helps you spot outdated pages. Allowing the tool to write \"not verified\" gives it an honest way out, instead of encouraging it to fill a gap. Be careful, though: even with this prompt, a tool can make mistakes or cite a page that does not say what it claims. The number is a starting point, not proof."
      },
      {
        "title": "Opening Each Source to Compare the Page with the Summary",
        "body": "The number is a door: tap it, and the page opens. Your job is then to check that the page really says what the summary says. Sometimes the summary distorts: an opening date becomes a closing date, a condition disappears, a figure changes. Sometimes the page is about something else, another programme or another country. A source you do not open proves nothing.\n\nDo not be impressed by the number. An answer that displays five sources is not necessarily correct: three of them may copy the same wrong information, another may date from a past year, and the last may come from a blog with no author. It is like a rumour at the market: hearing it from five people does not make it true if they all got it from the same neighbour. A single official source is worth more than five copies.\n\nOn a phone, with a slow connection, opening every link can seem long. Go straight to what matters: first open the source that carries the decisive information (the date, the condition, the list of documents), then a second one to confirm. If no source confirms it, ask the tool again for official sources only, or go directly to the website of the organization concerned."
      },
      {
        "title": "Three Questions for Every Source: Who Is Speaking, When, Is It Written There",
        "body": "In front of every page you open, ask three questions. Who is speaking? A ministry, a university, the organization that funds a programme, or an unknown blog, a message forwarded on WhatsApp? When? Look for the publication or update date, often at the top or bottom of the page. Is it written there? Find the exact sentence that contains the information, instead of assuming it is there.\n\nFor a scholarship, the page of the organization that funds it comes first. For an exam, it is the official website of the school or the ministry; for a procedure, that of the administration concerned, for example the official portal of a public service in Morocco or Kenya. A press article or a blog can help you discover a programme, but the date to keep is the one from the official source for the current year. And if a page asks you for money to \"reserve\" a scholarship, that is a warning sign: be wary.\n\nOnce the information is confirmed, write it down with three elements: the fact you keep (a date, a condition), the link to the official source, and the day you checked. This small note lets you re-check in one tap if the page changes, and show your source to a classmate or a colleague. Remember the source, not the summary."
      }
    ],
    "example": {
      "title": "Koffi Checks a Master's Scholarship Deadline on the Official Page",
      "challenge": "Koffi, an undergraduate student in Lomé (Togo), is looking for a master's scholarship open to Togolese students, and above all its application deadline. He asks an AI assistant, which answers with a clear, confident date, without any source. Where does this date come from? There is no way to tell. If it is wrong or taken from an outdated page, Koffi risks missing his application.",
      "solution": "Koffi opens Perplexity, in its free version, on his Android phone. He types a prompt in four blocks: \"Role: you are a rigorous research assistant who cites your sources. Context: I am an undergraduate student in Togo looking for a master's scholarship for next year. Task: what are the conditions of this scholarship for Togolese students, and what is its application deadline? For each piece of information, cite the official source and its publication date. Flag any source dating from a previous year. Format: five lines at most, then the list of sources, each with its link and date. If you cannot confirm a piece of information, write 'not verified'.\" The answer arrives with numbered sources, and he opens them. Source 1: the programme's official page, which shows the deadline, published this year: he keeps it. Source 2: an article from a past year, whose dates may have changed: he sets it aside. He follows up: \"Task: keep only the official sources. Format: each source with its link and publication date.\" Then he notes on his phone the deadline, the link to the official page and the day he checked it.",
      "impact": "Koffi submits his application before the deadline, verified on the programme's official page. His \"date + link + day checked\" note lets him re-check the page in one tap before sending his file, and share a reliable source with his classmates rather than a date of unknown origin."
    },
    "practice": {
      "title": "Check an Answer, Source by Source",
      "instructions": [
        "Ask a current question that is useful to you (a scholarship, an exam, a procedure) in Perplexity or in an assistant's search mode, by copying this prompt and replacing the brackets: Role: you are a rigorous research assistant who cites your sources. Context: I am looking for [what: a scholarship, an exam, a procedure] for [whom], for [which year], in [where]. I must rely on official and recent sources. Task: [your precise question]. For each piece of information, cite the official source and its publication date. Flag any source dating from a previous year. Format: five lines at most, then the list of sources, each with its link and date. If you cannot confirm a piece of information, write 'not verified'. Do not invent any date or link.",
        "Open at least two of the cited sources and ask each one the three questions: who is speaking? when was the page published? is the information really written there? Set aside any source that is old, unofficial, or says something different from the summary.",
        "Note down the information you keep, with the link to the official source, its publication date and the day you checked, in your notes app or in a notebook."
      ],
      "observation": "You will notice that the summary and the pages do not always say the same thing: a source may be old, come from an unofficial site, or talk about something else. You will also see that a single official, dated page is enough to settle the question, while a long list of sources proves nothing until you have opened them."
    },
    "quiz": [
      {
        "question": "In a Perplexity answer, what does the small number after a sentence mean?",
        "options": [
          { "key": "A", "text": "A quality rating" },
          { "key": "B", "text": "A link to the page used as a source" },
          { "key": "C", "text": "The number of words" },
          { "key": "D", "text": "The tool's ranking" }
        ],
        "answer": "B",
        "explanation": "In an answer engine, each number points to the page the information comes from. It is a door: you tap it to open the page and check that it really says what the summary says. It is neither a rating nor a ranking."
      },
      {
        "question": "Before believing a date found online, what do you do?",
        "options": [
          { "key": "A", "text": "You open the source and find the date on the page" },
          { "key": "B", "text": "You share it right away" },
          { "key": "C", "text": "You ask another assistant for it, without a source" },
          { "key": "D", "text": "You copy it into your notebook" }
        ],
        "answer": "A",
        "explanation": "A precise date is not a verified date. You need to open the source and find the date written on the page. Asking another assistant without a source verifies nothing: you only get a second claim without proof."
      },
      {
        "question": "One source is an article from a past year. What do you do?",
        "options": [
          { "key": "A", "text": "You believe it, since it is online" },
          { "key": "B", "text": "You keep it, since it is numbered" },
          { "key": "C", "text": "You set it aside and look for an official, recent source" },
          { "key": "D", "text": "You forward it to your friends" }
        ],
        "answer": "C",
        "explanation": "The question \"when?\" is there precisely to catch this case. From one year to the next, the dates and conditions of a scholarship or an exam can change. An old article can help you discover a programme, but the information to keep comes from an official source for the current year."
      },
      {
        "question": "For a scholarship, which source comes before the others?",
        "options": [
          { "key": "A", "text": "An unknown blog" },
          { "key": "B", "text": "A message forwarded on WhatsApp" },
          { "key": "C", "text": "A comment on a social network" },
          { "key": "D", "text": "The official page of the organization that funds the scholarship" }
        ],
        "answer": "D",
        "explanation": "The question \"who is speaking?\" puts first the organization responsible for the information. For a scholarship, that is the one that funds it: its official page is authoritative. A blog, a forwarded message or a comment can copy false or outdated information."
      },
      {
        "question": "An answer displays five sources. Is it necessarily correct?",
        "options": [
          { "key": "A", "text": "No: you need to open the sources and check who is speaking, when, and whether it is written there" },
          { "key": "B", "text": "Yes: five sources are enough" },
          { "key": "C", "text": "Yes, if it is long" },
          { "key": "D", "text": "No: you need at least ten" }
        ],
        "answer": "A",
        "explanation": "The number of sources proves nothing. A source may be old, unofficial, or say something different from the summary; several may copy the same mistake. What matters is opening the sources and asking the three questions: a single official source is worth more than five copies."
      }
    ],
    "reflection": "What important piece of information (an exam date, an administrative procedure, a health instruction) have you ever believed or shared without opening its source, and which official page could you have consulted instead?",
    "glossary": [
      {
        "term": "Sourced answer",
        "definition": "An answer in which every piece of information points to a page you can open and check. It is the opposite of a clear-cut answer given without any link, whose origin is unknown."
      },
      {
        "term": "Answer engine",
        "definition": "A tool that searches the web, reads several pages and writes a summary in which each sentence carries a source number. In other words: a summary, with its evidence. Perplexity is one example."
      },
      {
        "term": "Numbered source",
        "definition": "The small number placed after a sentence in an answer engine. It is a link to the page the information comes from: you tap it to open the page and check what it says."
      },
      {
        "term": "Official source",
        "definition": "The page published by the organization responsible for the information: ministry, university, organization funding a scholarship, administration. It comes before blogs, articles and forwarded messages."
      },
      {
        "term": "Publication date",
        "definition": "The day a page was put online or updated. It tells you whether the information is recent or may have changed since, for example from one year to the next."
      },
      {
        "term": "Search mode",
        "definition": "A feature offered, depending on the version, by assistants such as Gemini, ChatGPT, Copilot or Claude: the assistant searches the web and displays links to the pages it used."
      }
    ]
  },
  "ha": {
    "id": "og3",
    "lessonNumber": 3,
    "title": "Samun amsa mai majiya daga AI da duba kowace majiya",
    "objective": "A karshen wannan darasi, za ku san yadda ake samun amsa mai majiya daga AI, wato takaitaccen bayani wanda kowane labari a cikinsa yake nuna shafin da za ku iya budewa. Za ku san yadda ake rubuta umurnin RCTF da ke neman majiyoyin hukuma masu kwanan wata, sannan ku duba kowace majiya da tambayoyi uku: wa ke magana, yaushe, kuma shin an rubuta hakan a ciki. A karshe, za ku san yadda ake ajiye majiyar da ta tsufa ko wadda ba ta hukuma ba a gefe, ku kuma rubuta labarin da kuka rike tare da mahadarsa da kwanan watansa.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Kwanan wata mai daidaito ba kwanan wata da aka tabbatar ba ne",
        "body": "Idan kuka yi wa mataimakin AI tambaya, kusan kullum yana amsawa da tabbaci: kwanan wata, lamba, suna, ba tare da shakka ba. Kuskuren fahimta yana nan: ana tsammani cewa daidaito yana nufin an tabbatar. Amma mataimaki na iya bayar da kwanan wata bayyananne wanda bai fito daga ko’ina ba, ko kuma daga shafin da ya tsufa shekaru da dama. Kamar mai wucewa da ke nuna maka hanya da karfin hali: tabbacinsa ba ya nuna cewa ya san hanyar.\n\nHatsarin yana zama na gaske da zarar labarin yana da muhimmanci: ranar karshe ta neman tallafin karatu, jadawalin jarrabawar shiga aikin gwamnati a Côte d’Ivoire, takardun da ake bukata don wani aikin hukuma a Benin, ko lokacin jarrabawa a Bamako. Kwanan wata guda na karya, sai neman ya kubuce ko tafiya ta zama banza. Ba tare da mahada ba, ba za a iya sanin inda labarin ya fito ba, saboda haka ba za a iya duba shi ba.\n\nDon haka tambayar da ta dace ba « shin amsar tana kama da gaskiya? » ba ce, sai dai « daga ina ta fito? ». Wannan darasi yana koya muku yadda ake samun amsoshin da ke nuna majiyoyinsu, sannan ku duba wadannan majiyoyin da kanku. AI yana yin rarrabewar farko; dubawa ya rage aikinku."
      },
      {
        "title": "Injin amsa: takaitaccen bayani tare da hujjojinsa masu lamba",
        "body": "Injin amsa kayan aiki ne da ke bincike a yanar gizo, yana karanta shafuka da dama, sannan ya rubuta takaitaccen bayani. Abin da ya bambanta shi: kowace jumla tana dauke da karamar lamba da ke kai ga shafin da labarin ya fito. Perplexity yana aiki haka, kuma Gemini, ChatGPT, Copilot ko Claude suna da, gwargwadon sigarsu, yanayin bincike da ke nuna mahadodi. Ku yi tunanin jawabin dalibi da jerin littattafan da ya yi amfani da su a karshe: rubutun yana takaitawa, jerin majiyoyin kuma yana ba da damar dubawa. Babu daya daga cikin wadannan kayan aikin da yake « mafi kyau »: abin da ke da muhimmanci shi ne ya nuna majiyoyinsa.\n\nDon samun majiyoyi masu kyau, ku nemi su a cikin umurninku. Da hanyar RCTF, ga misali: « Rawa: kai mataimakin bincike ne mai tsanani, wanda ke ambaton majiyoyinsa. Mahallin: ina shirin jarrabawar shiga wata makarantar kiwon lafiya a Conakry, ta wannan shekarar. Aiki: yaushe ne ranakun rajista? Ga kowane labari, ka ambaci majiyar hukuma da kwanan watan da aka wallafa ta. Tsari: layi biyar a mafi yawa, sannan jerin majiyoyi tare da mahada da kwanan wata; idan ba za ka iya tabbatar da wani labari ba, ka rubuta « ba a tabbatar ba ». »\n\nWadannan bayanai biyu na karshe suna da daraja. Neman kwanan watan kowace majiya yana taimaka muku gano shafukan da suka tsufa. Ba wa kayan aikin izinin rubuta « ba a tabbatar ba » yana ba shi hanyar fita ta gaskiya, maimakon a tura shi ya cike gibi. Amma ku kula: ko da wannan umurni, kayan aiki na iya yin kuskure, ko ya ambaci shafin da bai fadi abin da yake cewa ba. Lambar mafari ce, ba hujja ba."
      },
      {
        "title": "Bude kowace majiya don kwatanta shafin da takaitaccen bayanin",
        "body": "Lambar kofa ce: ku taba ta, shafin zai bude. Aikinku a lokacin shi ne ku duba ko shafin yana fadin abin da takaitaccen bayanin ya fada. Wani lokaci takaitawar tana karkatar da labari: ranar budewa ta zama ranar rufewa, wani sharadi ya bace, wata lamba ta canza. Wani lokaci shafin yana magana kan wani abu daban, wani shiri ko wata kasa. Majiyar da ba a bude ba ba ta tabbatar da komai.\n\nKada yawan majiyoyi ya rude ku. Amsar da ke nuna majiyoyi biyar ba lallai ba ce ta zama daidai: uku daga cikinsu na iya kwafar labarin kuskure guda, wata na iya kasancewa ta shekarar da ta wuce, ta karshe kuma ta fito daga blog wanda ba a san marubucinsa ba. Kamar jita-jita a kasuwa: jin ta daga mutane biyar ba ya sa ta zama gaskiya idan dukansu sun ji ta daga makwabci guda. Majiyar hukuma guda ta fi kwafi biyar daraja.\n\nA waya, tare da intanet mai jinkiri, bude kowace mahada na iya zama kamar aiki mai tsawo. Ku je kai tsaye ga abin da ya fi muhimmanci: ku fara bude majiyar da ke dauke da labarin da zai yanke hukunci (kwanan wata, sharadi, jerin takardu), sannan ta biyu don tabbatarwa. Idan babu majiyar da ta tabbatar, ku sake tambayar kayan aikin, kuna neman majiyoyin hukuma kawai, ko ku je shafin hukumar da abin ya shafa kai tsaye."
      },
      {
        "title": "Tambayoyi uku ga kowace majiya: wa ke magana, yaushe, shin an rubuta a ciki",
        "body": "A gaban kowane shafin da kuka bude, ku yi tambayoyi uku. Wa ke magana? Ma’aikatar gwamnati, jami’a, hukumar da ke daukar nauyin wani shiri, ko kuwa blog wanda ba a sani ba, sakon da aka tura a WhatsApp? Yaushe? Ku nemi kwanan watan wallafawa ko na sabuntawa, wanda galibi yake a sama ko a kasan shafin. Shin an rubuta a ciki? Ku nemo ainihin jumlar da ke dauke da labarin, maimakon ku dauka cewa tana can.\n\nGa tallafin karatu, shafin hukumar da ke daukar nauyinsa shi ne ya fi komai muhimmanci. Ga jarrabawar shiga, shafin hukuma na makarantar ko na ma’aikatar ne; ga wani aikin hukuma, shafin gwamnatin da abin ya shafa, misali shafin hukuma na wani sabis na jama’a a Maroko ko a Kenya. Labarin jarida ko blog na iya taimaka muku gano wani shiri, amma kwanan watan da za a rike shi ne na majiyar hukuma ta wannan shekarar. Kuma idan wani shafi ya nemi kudi daga gare ku don « ajiye » muku tallafin karatu, wannan alamar hatsari ce: ku yi hankali.\n\nDa zarar an tabbatar da labarin, ku rubuta shi tare da abubuwa uku: labarin da kuka rike (kwanan wata, sharadi), mahadar majiyar hukuma, da ranar da kuka duba. Wannan karamin bayanin kula yana ba ku damar sake dubawa cikin sauki idan shafin ya canza, kuma ku nuna majiyarku ga abokin karatu ko abokin aiki. Ku rike majiyar, ba takaitaccen bayanin ba."
      }
    ],
    "example": {
      "title": "Koffi ya duba ranar karshe ta tallafin karatun digiri na biyu a shafin hukuma",
      "challenge": "Koffi, dalibin digiri na farko a Lomé (Togo), yana neman tallafin karatun digiri na biyu da aka bude wa daliban Togo, musamman ranar karshe ta neman sa. Ya tambayi wani mataimakin AI, wanda ya amsa masa da kwanan wata bayyananne kuma da tabbaci, ba tare da wata majiya ba. Daga ina wannan kwanan watan ya fito? Babu hanyar sani. Idan karya ne ko an dauko shi daga shafin da ya tsufa, Koffi na iya rasa damar neman tallafin.",
      "solution": "Koffi ya bude Perplexity, sigarsa ta kyauta, a wayarsa ta Android. Ya rubuta umurni mai bangarori hudu: « Rawa: kai mataimakin bincike ne mai tsanani, wanda ke ambaton majiyoyinsa. Mahallin: ni dalibin digiri na farko ne a Togo, kuma ina neman tallafin karatun digiri na biyu na shekara mai zuwa. Aiki: mene ne sharuddan wannan tallafi ga daliban Togo, kuma yaushe ne ranar karshe ta neman sa? Ga kowane labari, ka ambaci majiyar hukuma da kwanan watan da aka wallafa ta. Ka nuna duk majiyar da ta kasance ta shekarar da ta wuce. Tsari: layi biyar a mafi yawa, sannan jerin majiyoyi, kowace da mahadarta da kwanan watanta. Idan ba za ka iya tabbatar da wani labari ba, ka rubuta « ba a tabbatar ba ». » Amsar ta zo da majiyoyi masu lamba, kuma ya bude su. Majiya ta 1: shafin hukuma na shirin, inda ranar karshe take, an wallafa shi a wannan shekarar: ya rike ta. Majiya ta 2: labarin jarida na shekarar da ta wuce, wanda kwanakinsa sun iya canzawa: ya ajiye ta a gefe. Ya sake tambaya: « Aiki: ka rike majiyoyin hukuma kawai. Tsari: kowace majiya da mahadarta da kwanan watan wallafawa. » Sannan ya rubuta a wayarsa ranar karshe, mahadar shafin hukuma, da ranar da ya duba.",
      "impact": "Koffi ya mika takardun neman tallafinsa kafin ranar karshe, wadda ya tabbatar a shafin hukuma na shirin. Bayanin kulansa « kwanan wata + mahada + ranar dubawa » yana ba shi damar sake duba shafin cikin sauki kafin ya aika takardunsa, kuma ya raba majiya amintacciya da abokan karatunsa, maimakon kwanan wata da ba a san inda ya fito ba."
    },
    "practice": {
      "title": "Ku duba amsa, majiya bayan majiya",
      "instructions": [
        "Ku yi wata tambaya ta yanzu da take da amfani a gare ku (tallafin karatu, jarrabawar shiga, aikin hukuma) a Perplexity ko a yanayin bincike na wani mataimaki, ta hanyar kwafar wannan umurni da maye gurbin abubuwan da ke cikin baka: Rawa: kai mataimakin bincike ne mai tsanani, wanda ke ambaton majiyoyinsa. Mahallin: ina neman [me: tallafin karatu, jarrabawar shiga, aikin hukuma] ga [wa], na [wace shekara], a [ina]. Dole ne in dogara da majiyoyin hukuma na kwanan nan. Aiki: [tambayarku ta daidai]. Ga kowane labari, ka ambaci majiyar hukuma da kwanan watan da aka wallafa ta. Ka nuna duk majiyar da ta kasance ta shekarar da ta wuce. Tsari: layi biyar a mafi yawa, sannan jerin majiyoyi, kowace da mahadarta da kwanan watanta. Idan ba za ka iya tabbatar da wani labari ba, ka rubuta « ba a tabbatar ba ». Kada ka kirkiri kowane kwanan wata ko mahada.",
        "Ku bude akalla biyu daga cikin majiyoyin da aka ambata, ku yi wa kowace tambayoyi uku: wa ke magana? yaushe aka wallafa shafin? shin labarin an rubuta shi a ciki da gaske? Ku ajiye a gefe duk majiyar da ta tsufa, wadda ba ta hukuma ba, ko wadda take fadin wani abu daban da takaitaccen bayanin.",
        "Ku rubuta labarin da kuka rike, tare da mahadar majiyar hukuma, kwanan watan wallafawarta, da ranar da kuka duba, a cikin manhajar bayanin kula ko a cikin littafin rubutu."
      ],
      "observation": "Za ku lura cewa takaitaccen bayanin da shafukan ba koyaushe suke fadin abu daya ba: majiya na iya tsufa, ta fito daga shafin da ba na hukuma ba, ko ta yi magana kan wani abu daban. Za ku kuma ga cewa shafin hukuma guda mai kwanan wata ya isa ya warware batun, yayin da dogon jerin majiyoyi ba ya tabbatar da komai matukar ba a bude su ba."
    },
    "quiz": [
      {
        "question": "A cikin amsar Perplexity, me karamar lambar da ke bayan jumla take nufi?",
        "options": [
          { "key": "A", "text": "Makin inganci" },
          { "key": "B", "text": "Mahada zuwa shafin da yake majiya" },
          { "key": "C", "text": "Adadin kalmomi" },
          { "key": "D", "text": "Matsayin kayan aikin a jerin gwanaye" }
        ],
        "answer": "B",
        "explanation": "A cikin injin amsa, kowace lamba tana kai ga shafin da labarin ya fito. Kofa ce: ana taba ta don bude shafin a duba ko yana fadin abin da takaitaccen bayanin ya fada. Ba maki ba ce, ba kuma matsayi ba."
      },
      {
        "question": "Kafin ku yarda da kwanan watan da kuka samu a yanar gizo, me za ku yi?",
        "options": [
          { "key": "A", "text": "Ku bude majiyar ku nemo kwanan watan a shafin" },
          { "key": "B", "text": "Ku raba shi nan take" },
          { "key": "C", "text": "Ku tambayi wani mataimaki daban, ba tare da majiya ba" },
          { "key": "D", "text": "Ku kwafe shi a cikin littafinku" }
        ],
        "answer": "A",
        "explanation": "Kwanan wata mai daidaito ba kwanan wata da aka tabbatar ba ne. Dole a bude majiyar a nemo kwanan watan da aka rubuta a shafin. Tambayar wani mataimaki ba tare da majiya ba ba ta tabbatar da komai: za ku sami wata magana ta biyu ce kawai, ba tare da hujja ba."
      },
      {
        "question": "Wata majiya labarin jarida ne na shekarar da ta wuce. Me za ku yi?",
        "options": [
          { "key": "A", "text": "Ku yarda da ita, tunda tana yanar gizo" },
          { "key": "B", "text": "Ku rike ta, tunda tana da lamba" },
          { "key": "C", "text": "Ku ajiye ta a gefe ku nemi majiyar hukuma ta kwanan nan" },
          { "key": "D", "text": "Ku tura ta ga abokanku" }
        ],
        "answer": "C",
        "explanation": "Tambayar « yaushe? » tana nan ne daidai don gano irin wannan. Daga shekara zuwa shekara, kwanaki da sharuddan tallafin karatu ko jarrabawa na iya canzawa. Tsohon labari na iya taimakawa wajen gano wani shiri, amma labarin da za a rike yana fitowa ne daga majiyar hukuma ta wannan shekarar."
      },
      {
        "question": "Ga tallafin karatu, wace majiya ce ta fi sauran muhimmanci?",
        "options": [
          { "key": "A", "text": "Blog wanda ba a sani ba" },
          { "key": "B", "text": "Sakon da aka tura a WhatsApp" },
          { "key": "C", "text": "Sharhi a shafin sada zumunta" },
          { "key": "D", "text": "Shafin hukuma na hukumar da ke daukar nauyin tallafin" }
        ],
        "answer": "D",
        "explanation": "Tambayar « wa ke magana? » tana sa hukumar da ke da alhakin labarin a gaba. Ga tallafin karatu, ita ce wadda ke daukar nauyinsa: shafinta na hukuma shi ne abin dogaro. Blog, sakon da aka tura ko sharhi na iya kwafar labarin karya ko wanda ya tsufa."
      },
      {
        "question": "Wata amsa tana nuna majiyoyi biyar. Shin dole ne ta zama daidai?",
        "options": [
          { "key": "A", "text": "A’a: dole a bude majiyoyin a duba wa ke magana, yaushe, da ko an rubuta a ciki" },
          { "key": "B", "text": "Eh: majiyoyi biyar sun isa" },
          { "key": "C", "text": "Eh, idan tana da tsawo" },
          { "key": "D", "text": "A’a: ana bukatar akalla goma" }
        ],
        "answer": "A",
        "explanation": "Yawan majiyoyi ba ya tabbatar da komai. Majiya na iya tsufa, ta zama ba ta hukuma ba, ko ta fadi wani abu daban da takaitaccen bayanin; da dama na iya kwafar kuskure guda. Abin da ke da muhimmanci shi ne bude majiyoyin da yin tambayoyi uku: majiyar hukuma guda ta fi kwafi biyar daraja."
      }
    ],
    "reflection": "Wane muhimmin labari a gare ku (ranar jarrabawa, aikin hukuma, shawarar kiwon lafiya) kuka taba yarda da shi ko kuka raba shi ba tare da bude majiyarsa ba, kuma wane shafin hukuma ne za ku iya dubawa a maimakon haka?",
    "glossary": [
      {
        "term": "Amsa mai majiya (réponse sourcée)",
        "definition": "Amsa wadda kowane labari a cikinta yake nuna shafin da za ku iya budewa ku duba. Ita ce kishiyar amsa bayyananniya da aka bayar ba tare da wata mahada ba, wadda ba a san inda ta fito ba."
      },
      {
        "term": "Injin amsa (moteur de réponse)",
        "definition": "Kayan aiki da ke bincike a yanar gizo, yana karanta shafuka da dama, kuma yana rubuta takaitaccen bayani wanda kowace jumlarsa take dauke da lambar majiya. Wato: takaitaccen bayani tare da hujjojinsa. Perplexity misali ne."
      },
      {
        "term": "Majiya mai lamba (source numérotée)",
        "definition": "Karamar lambar da ake sanyawa bayan jumla a cikin injin amsa. Mahada ce zuwa shafin da labarin ya fito: ana taba ta don bude shafin a duba abin da yake fada."
      },
      {
        "term": "Majiyar hukuma (source officielle)",
        "definition": "Shafin da hukumar da ke da alhakin labarin ta wallafa: ma’aikata, jami’a, hukumar da ke daukar nauyin tallafin karatu, ofishin gwamnati. Tana gaban blog, labaran jarida da sakonnin da aka tura."
      },
      {
        "term": "Kwanan watan wallafawa (date de publication)",
        "definition": "Ranar da aka saka shafi a yanar gizo ko aka sabunta shi. Yana nuna ko labarin sabo ne, ko kuma ya iya canzawa tun lokacin, misali daga shekara zuwa shekara."
      },
      {
        "term": "Yanayin bincike (mode recherche)",
        "definition": "Wani zabi da wasu mataimaka kamar Gemini, ChatGPT, Copilot ko Claude suke bayarwa, gwargwadon sigarsu: mataimakin yana bincike a yanar gizo kuma yana nuna mahadodin shafukan da ya yi amfani da su."
      }
    ]
  }
};
