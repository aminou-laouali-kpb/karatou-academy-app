import { Language } from '../translations';
import { LessonContent } from '../lessonContent';

// Module 1 « Intelligence Artificielle » — leçon c7 (Votre boîte à outils IA — choisir et combiner les bons outils)
// Trilingue FR / EN / HA. ⚠️ Traductions HA à faire valider par un locuteur natif haoussa.
export const iaLessonC7: Record<Language, LessonContent> = {
  "fr": {
    "id": "c7",
    "lessonNumber": 7,
    "title": "Votre boîte à outils IA — choisir et combiner les bons outils",
    "objective": "À l'issue de cette leçon, vous serez capable de comparer plusieurs outils IA selon vos besoins concrets, votre budget et vos contraintes de terrain. Vous saurez choisir un outil adapté à votre langue de travail, à votre connexion et à la sensibilité de vos données. Vous serez également en mesure de combiner plusieurs outils dans un flux de travail simple pour gagner du temps sur les tâches administratives. Enfin, vous pourrez démarrer gratuitement et progresser à votre rythme.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "1. Panorama des outils IA disponibles",
        "body": "Imaginez une boîte à outils de menuisier : il y a le marteau, la scie, le mètre. Chaque outil a sa fonction précise. Les outils IA fonctionnent de la même façon — il en existe plusieurs catégories, et chacune répond à un besoin différent.\n\nLes assistants conversationnels (comme ChatGPT, Claude ou Gemini) répondent à vos questions, rédigent des textes, résument des documents et vous aident à préparer des réunions. Les outils de transcription et de traduction (comme Whisper ou DeepL) convertissent la parole en texte ou traduisent vos rapports du français au haoussa ou à l'anglais. C'est particulièrement utile lors des réunions communautaires en milieu rural, où les échanges se font souvent en langue locale.\n\nLes outils de génération d'images (comme DALL·E ou Canva IA) créent des visuels pour vos supports de sensibilisation ou vos affiches de santé communautaire. Les outils d'analyse de documents, comme NotebookLM de Google, vous permettent de poser des questions directement sur un rapport de 80 pages, comme si vous parliez à un collègue qui l'aurait lu pour vous. Pour une équipe PNUD au Niger traitant des dizaines de rapports de terrain chaque mois, c'est un gain de temps considérable."
      },
      {
        "title": "2. Critères pour bien choisir son outil",
        "body": "Choisir un outil IA sans critères clairs, c'est comme aller au marché sans liste de courses : on risque de repartir avec des choses inutiles ou de dépasser son budget. Quatre critères essentiels doivent guider votre choix.\n\nPremier critère : le coût. La plupart des outils proposent une version gratuite (freemium) avec des fonctionnalités limitées, et une version payante. Pour beaucoup d'organisations locales et d'ONG en Afrique subsaharienne, la version gratuite suffit pour démarrer. Deuxième critère : le fonctionnement hors ligne. Dans les zones rurales du Sahel où la connexion 3G est intermittente, un outil qui nécessite une connexion permanente peut devenir inutilisable. Certains outils permettent un usage partiel sans internet.\n\nTroisième critère : la confidentialité. Si vos données concernent des bénéficiaires vulnérables — réfugiés, patients, victimes de violence — vous devez vérifier où sont stockées ces données et qui y a accès. Ne jamais saisir de données personnelles identifiables dans un outil grand public sans vérifier sa politique de confidentialité. Quatrième critère : les langues supportées. Un outil excellent en anglais peut être médiocre en haoussa ou en bambara. Testez toujours l'outil dans la langue de votre travail réel avant de l'adopter."
      },
      {
        "title": "3. Combiner les outils dans un flux de travail",
        "body": "Un seul outil IA peut vous aider. Plusieurs outils bien combinés peuvent transformer votre façon de travailler. Pensez à une chaîne de production artisanale : chaque artisan fait une étape, et ensemble ils produisent un résultat que personne n'aurait pu faire seul.\n\nVoici un exemple concret de flux de travail pour une équipe de terrain : Étape 1 — vous enregistrez votre réunion communautaire sur votre téléphone. Étape 2 — vous utilisez un outil de transcription (comme Whisper) pour convertir l'audio en texte. Étape 3 — vous collez ce texte dans un assistant conversationnel (Claude ou ChatGPT) pour en extraire un résumé structuré et les points d'action. Étape 4 — vous traduisez ce résumé en français ou en anglais pour votre rapport avec DeepL ou Google Translate. Étape 5 — vous intégrez ce rapport dans NotebookLM pour l'archiver et permettre à votre équipe de le retrouver et de l'interroger plus tard.\n\nCe flux, qui aurait pris une journée entière à rédiger manuellement, peut se faire en une à deux heures. Des équipes humanitaires au Sahel ont signalé des gains de temps similaires sur leurs rapports de monitoring. L'essentiel est de définir votre flux en avance et de tester chaque étape avant de l'utiliser sur des données sensibles."
      },
      {
        "title": "4. Démarrer gratuitement et monter en compétence",
        "body": "Apprendre à utiliser les outils IA ressemble à apprendre à cultiver un nouveau légume : au début on tâtonne, on fait quelques erreurs, puis on trouve le bon rythme. La bonne nouvelle, c'est que la plupart des ressources pour apprendre sont gratuites et accessibles depuis un smartphone.\n\nPour démarrer sans budget, vous pouvez utiliser les versions gratuites de ChatGPT, Claude, Gemini ou Perplexity pour vos questions quotidiennes. Whisper d'OpenAI est disponible en ligne gratuitement pour la transcription. NotebookLM de Google est gratuit pour analyser vos documents. DeepL propose une traduction de qualité avec une limite mensuelle raisonnable en version gratuite. Des plateformes comme YouTube, Coursera (avec audit gratuit) ou des communautés WhatsApp d'apprentissage permettent de progresser à son rythme, même avec une connexion limitée.\n\nLa pratique régulière est plus efficace que les longues sessions rares. Consacrez dix à quinze minutes par jour à tester un outil sur une tâche réelle de votre travail — rédiger un courriel, résumer un rapport, préparer un ordre du jour. En un mois, vous aurez une vraie maîtrise pratique. Des agents de santé communautaire au Niger ont commencé par transcrire leurs notes de visite sur WhatsApp Business, avant de progresser vers des outils plus complets. Chaque petit pas compte."
      }
    ],
    "example": {
      "title": "L'équipe terrain de l'ONG SantéSahel compose sa boîte à outils IA gratuite",
      "challenge": "L'équipe de coordination de SantéSahel, basée à Tahoua au Niger, produit chaque mois une vingtaine de rapports de visite terrain, de comptes rendus de réunions communautaires et de traductions de formulaires. Trois coordinatrices passaient en moyenne douze heures par semaine chacune sur ces tâches administratives, au détriment du suivi des bénéficiaires.",
      "solution": "L'équipe a mis en place un flux en quatre étapes, entièrement avec des outils gratuits : (1) enregistrement audio des réunions sur téléphone Android, (2) transcription avec Whisper via une interface web gratuite, (3) résumé et extraction des points d'action avec Claude (version gratuite), (4) traduction français-haoussa avec Google Translate pour les formulaires destinés aux agents de santé locaux. NotebookLM a été ajouté pour archiver et retrouver rapidement les rapports passés.",
      "impact": "En six semaines, le temps consacré aux tâches administratives a été réduit d'environ 40 %, soit un gain estimé à cinq heures par semaine et par coordinatrice. Les rapports mensuels sont désormais produits deux jours plus tôt, libérant du temps pour les visites de terrain supplémentaires. La qualité des comptes rendus a également progressé, car les transcriptions sont plus fidèles que les notes prises à la main en réunion."
    },
    "practice": {
      "title": "Comparer deux outils IA pour une tâche de votre travail",
      "instructions": [
        "Choisissez une tâche administrative récurrente dans votre travail (exemple : rédiger un résumé de réunion, traduire un court formulaire, transcrire des notes vocales). Notez-la en une phrase sur votre téléphone.",
        "Testez cette tâche avec deux outils différents disponibles gratuitement sur mobile (exemples : Claude et ChatGPT, ou Google Translate et DeepL). Pour chaque outil, notez en quelques mots : le coût (gratuit ou payant), la langue qu'il supporte le mieux, et si vous seriez à l'aise d'y entrer des données de bénéficiaires (confidentialité).",
        "Choisissez l'outil qui correspond le mieux à vos trois critères et justifiez votre choix en deux phrases. Partagez cette justification avec un collègue ou notez-la dans un mémo pour votre équipe."
      ],
      "observation": "Vous remarquerez que deux outils peuvent réaliser la même tâche avec des résultats très différents selon la langue ou la sensibilité des données. Il n'existe pas d'outil universel parfait : le bon outil est celui qui correspond à votre contexte spécifique."
    },
    "quiz": [
      {
        "question": "Un agent de santé communautaire en zone rurale souhaite transcrire ses entretiens enregistrés sur téléphone. Sa connexion internet est instable. Quel critère doit-il prioriser en choisissant son outil ?",
        "options": [
          {
            "key": "A",
            "text": "La qualité graphique de l'interface"
          },
          {
            "key": "B",
            "text": "Le nombre d'étoiles dans les avis en ligne"
          },
          {
            "key": "C",
            "text": "La capacité de l'outil à fonctionner sans connexion permanente"
          },
          {
            "key": "D",
            "text": "La présence d'un logo reconnu"
          }
        ],
        "answer": "C",
        "explanation": "En zone à faible connectivité, le fonctionnement hors ligne ou avec une connexion minimale est le critère décisif. Un outil graphiquement parfait mais inutilisable sans 4G ne convient pas au terrain sahélien."
      },
      {
        "question": "Quelle est la bonne définition d'un outil 'freemium' ?",
        "options": [
          {
            "key": "A",
            "text": "Un outil entièrement payant avec une période d'essai de 7 jours"
          },
          {
            "key": "B",
            "text": "Un outil uniquement disponible pour les grandes organisations"
          },
          {
            "key": "C",
            "text": "Un outil développé exclusivement par des gouvernements africains"
          },
          {
            "key": "D",
            "text": "Un outil avec une version de base gratuite et des fonctionnalités avancées payantes"
          }
        ],
        "answer": "D",
        "explanation": "Le modèle freemium offre une version gratuite suffisante pour débuter, et une version premium avec plus de fonctionnalités. C'est le modèle le plus courant parmi les outils IA grand public comme ChatGPT, Claude ou Canva."
      },
      {
        "question": "Une coordinatrice d'ONG veut analyser un rapport de 60 pages pour en extraire les recommandations clés. Quel type d'outil IA est le plus adapté ?",
        "options": [
          {
            "key": "A",
            "text": "Un outil de génération d'images"
          },
          {
            "key": "B",
            "text": "Un outil d'analyse de documents comme NotebookLM"
          },
          {
            "key": "C",
            "text": "Un outil de traduction automatique"
          },
          {
            "key": "D",
            "text": "Un outil de création de présentations visuelles"
          }
        ],
        "answer": "B",
        "explanation": "Les outils d'analyse de documents comme NotebookLM permettent de poser des questions sur un document long et d'en extraire des informations précises. C'est exactement le besoin décrit : synthétiser un rapport volumineux."
      },
      {
        "question": "Pourquoi ne faut-il pas saisir des données personnelles de bénéficiaires dans un outil IA grand public sans précaution ?",
        "options": [
          {
            "key": "A",
            "text": "Parce que l'outil risque de supprimer les données automatiquement"
          },
          {
            "key": "B",
            "text": "Parce que l'outil ne comprend pas les noms africains"
          },
          {
            "key": "C",
            "text": "Parce que ces données peuvent être stockées sur des serveurs tiers et utilisées pour entraîner des modèles"
          },
          {
            "key": "D",
            "text": "Parce que les outils IA refusent les données en langue locale"
          }
        ],
        "answer": "C",
        "explanation": "La plupart des outils grand public stockent les données saisies sur leurs serveurs et peuvent les utiliser pour améliorer leurs modèles. Pour des données sensibles (bénéficiaires vulnérables, patients), il faut vérifier la politique de confidentialité ou utiliser un outil prévu à cet effet."
      },
      {
        "question": "Dans un flux de travail combinant plusieurs outils IA, quelle est la première étape recommandée avant de traiter des données réelles ?",
        "options": [
          {
            "key": "A",
            "text": "Acheter immédiatement la version premium de chaque outil"
          },
          {
            "key": "B",
            "text": "Tester le flux complet avec des données fictives ou non sensibles"
          },
          {
            "key": "C",
            "text": "Demander l'autorisation à toute l'équipe pour chaque étape"
          },
          {
            "key": "D",
            "text": "Utiliser uniquement des outils développés en Afrique"
          }
        ],
        "answer": "B",
        "explanation": "Avant d'intégrer des données réelles et potentiellement sensibles dans un flux multi-outils, il est essentiel de tester l'ensemble du processus avec des données fictives. Cela permet de détecter les failles, les pertes de qualité ou les risques de confidentialité sans mettre en danger les bénéficiaires."
      }
    ],
    "reflection": "Parmi les quatre catégories d'outils présentées (assistants conversationnels, transcription, génération d'images, analyse de documents), laquelle répondrait le mieux à une tâche récurrente et chronophage dans votre travail actuel ? Quels seraient les deux principaux obstacles à son adoption dans votre organisation — et comment pourriez-vous les contourner ?",
    "glossary": [
      {
        "term": "Assistant conversationnel",
        "definition": "Programme IA capable de comprendre vos questions en langage naturel et d'y répondre par écrit, comme un collègue disponible à toute heure. Exemples : ChatGPT, Claude, Gemini."
      },
      {
        "term": "Transcription",
        "definition": "Conversion automatique d'un enregistrement audio ou vidéo en texte écrit. Utile pour retranscrire des réunions, des entretiens ou des messages vocaux sans les saisir manuellement."
      },
      {
        "term": "NotebookLM",
        "definition": "Outil d'analyse de documents de Google qui permet de charger des fichiers (PDF, textes) et de poser des questions dessus, comme si un assistant avait lu le document à votre place."
      },
      {
        "term": "Outil no-code",
        "definition": "Outil numérique utilisable sans écrire de code informatique. Accessible via une interface visuelle simple, il permet à des non-développeurs de créer des automatisations ou des workflows."
      },
      {
        "term": "Freemium",
        "definition": "Modèle économique proposant une version gratuite de base et une version payante avec plus de fonctionnalités. Permet de démarrer sans budget et d'évoluer selon les besoins."
      },
      {
        "term": "API",
        "definition": "Interface de programmation permettant à deux logiciels de communiquer entre eux. Par exemple, une ONG peut connecter son système de gestion de données à un outil IA via une API pour automatiser des tâches sans intervention manuelle."
      }
    ]
  },
  "en": {
    "id": "c7",
    "lessonNumber": 7,
    "title": "Your AI Toolkit — Choosing and Combining the Right Tools",
    "objective": "By the end of this lesson, you will be able to compare several AI tools based on your concrete needs, budget, and field constraints. You will know how to select a tool suited to your working language, connectivity level, and data sensitivity. You will also be able to combine several tools into a simple workflow to save time on administrative tasks. Finally, you will be ready to start for free and progress at your own pace.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "1. Overview of Available AI Tools",
        "body": "Think of a carpenter's toolbox: there is the hammer, the saw, the tape measure. Each tool has its precise function. AI tools work the same way — there are several categories, and each addresses a different need.\n\nConversational assistants (such as ChatGPT, Claude or Gemini) answer your questions, draft texts, summarise documents and help you prepare meetings. Transcription and translation tools (such as Whisper or DeepL) convert speech to text or translate your reports from French to Hausa or English. This is especially useful during community meetings in rural areas, where exchanges often happen in local languages.\n\nImage-generation tools (such as DALL·E or Canva AI) create visuals for your awareness materials or community health posters. Document analysis tools, such as Google's NotebookLM, let you ask questions directly about an 80-page report, as if you were talking to a colleague who had read it on your behalf. For a UNDP team in Niger processing dozens of field reports each month, this represents a considerable time saving."
      },
      {
        "title": "2. Criteria for Choosing the Right Tool",
        "body": "Selecting an AI tool without clear criteria is like going to market without a shopping list: you risk coming back with unnecessary items or overspending. Four essential criteria should guide your choice.\n\nFirst criterion: cost. Most tools offer a free (freemium) version with limited features and a paid version. For many local organisations and NGOs in sub-Saharan Africa, the free version is enough to get started. Second criterion: offline capability. In rural areas of the Sahel where 3G connectivity is intermittent, a tool that requires a permanent connection can become unusable. Some tools allow partial use without internet.\n\nThird criterion: privacy. If your data concerns vulnerable beneficiaries — refugees, patients, survivors of violence — you must check where that data is stored and who has access to it. Never enter personally identifiable information into a general-purpose tool without checking its privacy policy. Fourth criterion: supported languages. A tool that excels in English may perform poorly in Hausa or Bambara. Always test the tool in the language of your actual work before adopting it."
      },
      {
        "title": "3. Combining Tools in a Workflow",
        "body": "A single AI tool can help you. Several tools well combined can transform the way you work. Think of a craft production chain: each artisan handles one step, and together they produce a result that none could have achieved alone.\n\nHere is a concrete workflow example for a field team: Step 1 — record your community meeting on your phone. Step 2 — use a transcription tool (such as Whisper) to convert the audio to text. Step 3 — paste that text into a conversational assistant (Claude or ChatGPT) to extract a structured summary and action points. Step 4 — translate that summary into French or English for your report using DeepL or Google Translate. Step 5 — upload the report to NotebookLM to archive it and allow your team to retrieve and query it later.\n\nThis workflow, which would have taken a full day to complete manually, can be done in one to two hours. Humanitarian teams in the Sahel have reported similar time savings on their monitoring reports. The key is to define your workflow in advance and test each step before using it with sensitive data."
      },
      {
        "title": "4. Starting for Free and Building Skills",
        "body": "Learning to use AI tools is like learning to grow a new crop: at first you fumble, make a few mistakes, then find your rhythm. The good news is that most learning resources are free and accessible from a smartphone.\n\nTo get started without a budget, you can use the free versions of ChatGPT, Claude, Gemini or Perplexity for your daily questions. OpenAI's Whisper is available online for free for transcription. Google's NotebookLM is free for document analysis. DeepL offers quality translation with a reasonable monthly limit in its free version. Platforms such as YouTube, Coursera (with free audit) or WhatsApp learning communities allow you to progress at your own pace, even with limited connectivity.\n\nRegular practice is more effective than rare long sessions. Spend ten to fifteen minutes a day testing a tool on a real task from your work — drafting an email, summarising a report, preparing an agenda. Within a month, you will have genuine practical mastery. Community health workers in Niger began by transcribing their visit notes via WhatsApp Business before moving on to more complete tools. Every small step counts."
      }
    ],
    "example": {
      "title": "The SantéSahel NGO field team builds its free AI toolkit",
      "challenge": "The coordination team of SantéSahel, based in Tahoua, Niger, produces around twenty field visit reports, community meeting minutes and form translations every month. Three coordinators were spending an average of twelve hours each per week on these administrative tasks, at the expense of beneficiary follow-up.",
      "solution": "The team implemented a four-step workflow using entirely free tools: (1) audio recording of meetings on Android phones, (2) transcription with Whisper via a free web interface, (3) summarisation and extraction of action points with Claude (free version), (4) French-to-Hausa translation with Google Translate for forms intended for local health workers. NotebookLM was added to archive and quickly retrieve past reports.",
      "impact": "Within six weeks, time spent on administrative tasks was reduced by approximately 40%, representing an estimated saving of five hours per week per coordinator. Monthly reports are now produced two days earlier, freeing time for additional field visits. The quality of meeting minutes also improved, as transcriptions are more accurate than handwritten notes taken during meetings."
    },
    "practice": {
      "title": "Compare Two AI Tools for a Task in Your Work",
      "instructions": [
        "Choose a recurring administrative task in your work (example: writing a meeting summary, translating a short form, transcribing voice notes). Write it down in one sentence on your phone.",
        "Test this task with two different tools available for free on mobile (examples: Claude and ChatGPT, or Google Translate and DeepL). For each tool, note in a few words: the cost (free or paid), the language it supports best, and whether you would be comfortable entering beneficiary data into it (privacy).",
        "Choose the tool that best matches your three criteria and justify your choice in two sentences. Share this justification with a colleague or note it in a memo for your team."
      ],
      "observation": "You will notice that two tools can perform the same task with very different results depending on the language or data sensitivity. There is no perfect universal tool: the right tool is the one that fits your specific context."
    },
    "quiz": [
      {
        "question": "A community health worker in a rural area wants to transcribe interviews recorded on their phone. Their internet connection is unstable. Which criterion should they prioritise when choosing a tool?",
        "options": [
          {
            "key": "A",
            "text": "The graphic quality of the interface"
          },
          {
            "key": "B",
            "text": "The number of stars in online reviews"
          },
          {
            "key": "C",
            "text": "The tool's ability to work without a permanent connection"
          },
          {
            "key": "D",
            "text": "The presence of a recognised logo"
          }
        ],
        "answer": "C",
        "explanation": "In low-connectivity areas, offline or minimal-connection operation is the decisive criterion. A graphically perfect tool that is unusable without 4G is not suited to Sahelian fieldwork."
      },
      {
        "question": "What is the correct definition of a 'freemium' tool?",
        "options": [
          {
            "key": "A",
            "text": "A fully paid tool with a 7-day trial period"
          },
          {
            "key": "B",
            "text": "A tool available only to large organisations"
          },
          {
            "key": "C",
            "text": "A tool developed exclusively by African governments"
          },
          {
            "key": "D",
            "text": "A tool with a free basic version and paid advanced features"
          }
        ],
        "answer": "D",
        "explanation": "The freemium model offers a free version sufficient for getting started, and a premium version with more features. This is the most common model among general-purpose AI tools such as ChatGPT, Claude or Canva."
      },
      {
        "question": "An NGO coordinator wants to analyse a 60-page report to extract key recommendations. Which type of AI tool is most suitable?",
        "options": [
          {
            "key": "A",
            "text": "An image generation tool"
          },
          {
            "key": "B",
            "text": "A document analysis tool such as NotebookLM"
          },
          {
            "key": "C",
            "text": "An automatic translation tool"
          },
          {
            "key": "D",
            "text": "A visual presentation creation tool"
          }
        ],
        "answer": "B",
        "explanation": "Document analysis tools such as NotebookLM allow you to ask questions about a long document and extract specific information. This exactly matches the need described: synthesising a large report."
      },
      {
        "question": "Why should beneficiary personal data not be entered into a general-purpose AI tool without precaution?",
        "options": [
          {
            "key": "A",
            "text": "Because the tool may automatically delete the data"
          },
          {
            "key": "B",
            "text": "Because the tool does not understand African names"
          },
          {
            "key": "C",
            "text": "Because the data may be stored on third-party servers and used to train models"
          },
          {
            "key": "D",
            "text": "Because AI tools refuse data in local languages"
          }
        ],
        "answer": "C",
        "explanation": "Most general-purpose tools store entered data on their servers and may use it to improve their models. For sensitive data (vulnerable beneficiaries, patients), you must check the privacy policy or use a purpose-built tool."
      },
      {
        "question": "In a workflow combining several AI tools, what is the recommended first step before processing real data?",
        "options": [
          {
            "key": "A",
            "text": "Immediately purchase the premium version of each tool"
          },
          {
            "key": "B",
            "text": "Test the complete workflow with fictitious or non-sensitive data"
          },
          {
            "key": "C",
            "text": "Request permission from the entire team for each step"
          },
          {
            "key": "D",
            "text": "Only use tools developed in Africa"
          }
        ],
        "answer": "B",
        "explanation": "Before integrating real and potentially sensitive data into a multi-tool workflow, it is essential to test the entire process with fictitious data. This allows you to detect flaws, quality losses or privacy risks without endangering beneficiaries."
      }
    ],
    "reflection": "Among the four tool categories presented (conversational assistants, transcription, image generation, document analysis), which one would best address a recurring, time-consuming task in your current work? What would be the two main obstacles to its adoption in your organisation — and how might you overcome them?",
    "glossary": [
      {
        "term": "Conversational assistant",
        "definition": "An AI programme capable of understanding your questions in natural language and responding in writing, like a colleague available at any hour. Examples: ChatGPT, Claude, Gemini."
      },
      {
        "term": "Transcription",
        "definition": "Automatic conversion of an audio or video recording into written text. Useful for capturing meetings, interviews or voice messages without typing them manually."
      },
      {
        "term": "NotebookLM",
        "definition": "Google's document analysis tool that lets you upload files (PDFs, texts) and ask questions about them, as if an assistant had read the document on your behalf."
      },
      {
        "term": "No-code tool",
        "definition": "A digital tool usable without writing computer code. Accessible via a simple visual interface, it allows non-developers to create automations or workflows."
      },
      {
        "term": "Freemium",
        "definition": "A business model offering a free basic version and a paid version with more features. Allows you to start without a budget and scale up according to your needs."
      },
      {
        "term": "API",
        "definition": "Application Programming Interface: a bridge that lets two pieces of software communicate. For example, an NGO can connect its data management system to an AI tool via an API to automate tasks without manual intervention."
      }
    ]
  },
  "ha": {
    "id": "c7",
    "lessonNumber": 7,
    "title": "Kayan aikinku na AI — Zaɓar da haɗa kayan aiki masu dacewa",
    "objective": "Bayan wannan darasi, za ku iya kwatanta kayan aiki na AI da yawa bisa ga bukatunku na ainihi, kasafin kuɗi, da ƙuntatawa a filin aiki. Za ku san yadda ake zaɓar kayan aiki da ya dace da harshen aikinku, damar intanet, da sirrin bayananku. Hakanan za ku iya haɗa kayan aiki da yawa a cikin tsari mai sauki don adana lokaci akan ayyukan gudanarwa. A ƙarshe, za ku iya farawa kyauta kuma ku ci gaba a sauri naku.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "1. Duba kayan aiki na AI da ake da su",
        "body": "Ka yi tunanin akwatin kayan aikin masaƙi: akwai guduma, zarto, da ma'auni. Kowane kayan aiki yana da aikinsa na musamman. Kayan aiki na AI suna aiki haka — akwai nau'i da yawa, kuma kowannensu yana magance bukata daban-daban.\n\nMataimakan tattaunawa (kamar ChatGPT, Claude ko Gemini) suna amsa tambayoyinku, rubuta rubutu, taƙaita takaddun, kuma suna taimaka muku shirya tarurruka. Kayan aikin rubuta magana zuwa rubutu da fassara (kamar Whisper ko DeepL) suna canza magana zuwa rubutu ko fassara rahotanninku daga Faransanci zuwa Hausa ko Ingilishi. Wannan yana da amfani musamman a lokacin tarurrukan al'umma a yankunan karkara, inda tattaunawar kan yiwuwa ta kasance a harshen gida.\n\nKayan aikin ƙirƙirar hotuna (kamar DALL·E ko Canva AI) suna ƙirƙirar hotuna don kayan wayar da kan jama'a ko poster na lafiyar al'umma. Kayan aikin nazarin takaddun, kamar NotebookLM na Google, suna baku damar tambaya kai tsaye game da rahoto na shafuka 80, kamar dai kuna magana da abokin aiki wanda ya karanta shi a madadinku. Ga ƙungiyar PNUD a Niger da ke sarrafa dozin rahotanni na filin aiki kowace wata, wannan babbar tanadin lokaci ne."
      },
      {
        "title": "2. Ma'aunai don zaɓar kayan aiki mafi dacewa",
        "body": "Zaɓar kayan aiki na AI ba tare da ma'auni a fili ba, kamar zuwa kasuwa ba tare da jerin abubuwan siya ba: kuna iya dawowa da abubuwa marasa amfani ko kuma kuɗin ya wuce iyaka. Ma'aunai huɗu masu muhimmanci ya kamata su jagoranci zaɓinku.\n\nMa'aunin farko: farashin. Yawancin kayan aiki suna ba da sigar kyauta (freemium) mai iyakantaccen ayyuka, da kuma sigar da ake biya. Ga ƙungiyoyi na gida da yawa da NGO a Afirka ta kudu da hamadar Sahara, sigar kyauta ta isa don fara. Ma'aunin biyu: ikon aiki ba tare da intanet ba. A yankunan karkara na Sahel inda haɗin 3G ya katse-katse, kayan aiki da ke buƙatar haɗin dindindin na iya zama marar amfani. Wasu kayan aiki suna ba da damar amfani da su a bangare ba tare da intanet ba.\n\nMa'aunin uku: sirri. Idan bayananku sun shafi masu amfana da rauni — 'yan gudun hijira, majinyata, waɗanda suka tsira daga tashin hankali — dole ne ku bincika inda aka adana waɗannan bayanai kuma wanda ke da damar shiga su. Kada ku taɓa shigar da bayanan mutum-mutumi a cikin kayan aiki na jama'a ba tare da bincika manufar sirrinsa ba. Ma'aunin huɗu: harsunan da aka goyi baya. Kayan aiki mai kyau a Ingilishi na iya zama mara kyau a Hausa ko Bambara. Koyaushe gwada kayan aikin a harshen aikinku na ainihi kafin ɗaukarsa."
      },
      {
        "title": "3. Haɗa kayan aiki a cikin tsari na aiki",
        "body": "Kayan aiki guda ɗaya na AI na iya taimakonku. Kayan aiki da yawa da aka haɗa da kyau na iya canza yadda kuke aiki. Ka yi tunanin sarkar samarwa ta hannu: kowane mai sana'a yana sarrafa mataki ɗaya, kuma tare suna samar da sakamakon da babu wanda zai iya cimmawa shi kaɗai.\n\nGa misalin tsarin aiki na musamman ga ƙungiyar filin aiki: Mataki na 1 — yi rikodin taron al'ummarku a wayar hannu. Mataki na 2 — yi amfani da kayan aikin rubuta magana (kamar Whisper) don canza sauti zuwa rubutu. Mataki na 3 — liƙa wannan rubutu a cikin mataimakiyar tattaunawa (Claude ko ChatGPT) don fitar da taƙaitaccen rahoto da matakai na aiki. Mataki na 4 — fassara wannan taƙaitaccen rahoto zuwa Faransanci ko Ingilishi don rahotanninku ta amfani da DeepL ko Google Translate. Mataki na 5 — loda rahoton zuwa NotebookLM don adanawa kuma ku ba ƙungiyarku damar nemo shi da tambaya a baya.\n\nWannan tsari, wanda zai ɗauki dukan yini don kammala ta hannu, ana iya yi a cikin sa'a ɗaya zuwa biyu. Ƙungiyoyin agaji a Sahel sun ba da rahoton tanadin lokaci iri ɗaya a kan rahotanninsu na sa ido. Muhimmin abu shi ne a ayyana tsarinku a gaba da kuma gwada kowane mataki kafin amfani da shi tare da bayanan sirri."
      },
      {
        "title": "4. Farawa kyauta da bunƙasa ƙwarewa",
        "body": "Koyon amfani da kayan aiki na AI kamar koyon noman sabon amfanin gona ne: a farko kuna yawo-yawo, kuna yin kuskure kaɗan, sa'an nan kuna samun saurin daidai. Labari mai dadi shi ne cewa yawancin albarkatu don koyo kyauta ne kuma ana iya samun su daga wayar hannu.\n\nDon farawa ba tare da kasafin kuɗi ba, kuna iya amfani da sigogin kyauta na ChatGPT, Claude, Gemini ko Perplexity don tambayoyinku na yau da kullun. Whisper na OpenAI yana samu akan layi kyauta don rubuta magana. NotebookLM na Google kyauta ne don nazarin takaddun. DeepL yana ba da ingantacciyar fassara tare da iyakancin wata mai ma'ana a sigar kyautarsa. Dandamali kamar YouTube, Coursera (tare da audit kyauta) ko al'ummomin koyo na WhatsApp suna baku damar ci gaba a sauri naku, ko da haɗin intanet yana da iyaka.\n\nPractice na yau da kullun ya fi tasiri fiye da zamanai masu tsawo da wuya. Sadaukar da minti goma zuwa goma sha biyar kowace rana don gwada kayan aiki akan ainihin aikin ku — rubuta imel, taƙaita rahoto, shirya jerin abubuwa na taro. A cikin wata ɗaya, za ku sami ƙwarewar ainihi ta aiki. Ma'aikatan lafiya na al'umma a Niger sun fara ta rubuta bayanansu na ziyara ta WhatsApp Business kafin ci gaba zuwa ƙarin kayan aiki masu cikakken aiki. Kowane ƙaramin mataki yana ƙidaya."
      }
    ],
    "example": {
      "title": "Ƙungiyar filin aiki ta NGO SantéSahel tana ƙirƙirar akwatin kayan aiki na AI kyauta",
      "challenge": "Ƙungiyar daidaitawa ta SantéSahel, mai tushe a Tahoua, Niger, tana samar da kusan rahotanni ashirin na ziyartar filin aiki, bayanan tarurrukan al'umma da fassarar fom kowace wata. Masu daidaitawa uku suna kashe awowi goma sha biyu matsakaita kowanensu kowace mako akan waɗannan ayyukan gudanarwa, a maimakon bibiyar masu amfana.",
      "solution": "Ƙungiyar ta aiwatar da tsari mai matakai huɗu, gaba ɗaya tare da kayan aiki kyauta: (1) rikodin sauti na tarurruka a wayoyin Android, (2) rubuta magana da Whisper ta hanyar interface na yanar gizo kyauta, (3) taƙaitawa da fitar da matakai na aiki da Claude (sigar kyauta), (4) fassarar Faransanci-Hausa da Google Translate don fom da aka nufa ga ma'aikatan lafiya na gida. An ƙara NotebookLM don adana rahotanni na baya da samun su da sauri.",
      "impact": "A cikin makonni shida, lokacin da ake kashewa akan ayyukan gudanarwa ya ragu da kashi 40 cikin ɗari, wanda ke wakiltar tanadin awowi biyar kowace mako ga kowane mai daidaitawa. Rahotannin wata-wata yanzu ana samar da su kwana biyu da wuri, wanda ke 'yantar da lokaci don ƙarin ziyarar filin aiki. Ingancin bayanan tarurruka ya kuma inganta, tunda rubuce-rubucen magana sun fi daidai fiye da bayanan da aka rubuta da hannu a cikin taro."
    },
    "practice": {
      "title": "Kwatanta kayan aiki biyu na AI don aiki a cikin aikinku",
      "instructions": [
        "Zaɓi aikin gudanarwa mai maimaitawa a cikin aikinku (misali: rubuta taƙaitaccen taro, fassara gajeren fom, rubuta bayanan muryar sauti). Rubuta shi a cikin jimla ɗaya a wayar hannu.",
        "Gwada wannan aiki da kayan aiki biyu daban-daban da ake samu kyauta akan wayar hannu (misalai: Claude da ChatGPT, ko Google Translate da DeepL). Ga kowane kayan aiki, rubuta da kalmomi kaɗan: farashin (kyauta ko biyan kuɗi), harshen da yake goyan baya mafi kyau, da kuma ko da za ku ji daɗin shigar da bayanan masu amfana a ciki (sirri).",
        "Zaɓi kayan aikin da ya fi dacewa da ma'aunin ku guda uku kuma ku tabbatar da zaɓinku a cikin jimloli biyu. Raba wannan tabbatarwa da abokin aiki ko kuma rubuta shi a cikin memo ga ƙungiyarku."
      ],
      "observation": "Za ku lura cewa kayan aiki biyu na iya yin aiki iri ɗaya tare da sakamako daban-daban sosai dangane da harshe ko sirrin bayanai. Babu kayan aiki ɗaya na duniya mafi kyau: kayan aikin da ya dace shi ne wanda ya dace da yanayin ku na musamman."
    },
    "quiz": [
      {
        "question": "Ma'aikacin lafiya na al'umma a yankin karkara yana son rubuta magana daga hirarrakin da aka yi rikodin a wayar hannu. Haɗin intanet ɗinsa bai tsaya ba. Wane ma'auni ya kamata ya fifita lokacin zaɓan kayan aikin?",
        "options": [
          {
            "key": "A",
            "text": "Kyawun hotuna na interface"
          },
          {
            "key": "B",
            "text": "Adadin tauraron da ake samu a cikin ra'ayoyin kan layi"
          },
          {
            "key": "C",
            "text": "Ikon kayan aikin na aiki ba tare da haɗin dindindin ba"
          },
          {
            "key": "D",
            "text": "Kasancewar tambarin da aka sani"
          }
        ],
        "answer": "C",
        "explanation": "A yankunan da haɗin intanet ke da rauni, ikon aiki ba tare da intanet ko da haɗin kaɗan ba shi ne ma'aunin yanke hukunci. Kayan aiki mai kyau a hotuna amma ba za a iya amfani da shi ba tare da 4G ba bai dace da filin aiki na Sahel ba."
      },
      {
        "question": "Menene ma'anar daidai na kayan aiki 'freemium'?",
        "options": [
          {
            "key": "A",
            "text": "Kayan aiki da ake biya gaba ɗaya tare da lokacin gwaji na kwana 7"
          },
          {
            "key": "B",
            "text": "Kayan aiki da ake samu ne kawai ga manyan ƙungiyoyi"
          },
          {
            "key": "C",
            "text": "Kayan aiki da gwamnatocin Afirka ne kawai suka ƙera"
          },
          {
            "key": "D",
            "text": "Kayan aiki tare da sigar asali kyauta da ayyuka masu ci gaba da ake biya"
          }
        ],
        "answer": "D",
        "explanation": "Tsarin freemium yana ba da sigar kyauta mai isa don farawa, da kuma sigar premium mai ƙarin ayyuka. Wannan shi ne tsari mafi kowa a cikin kayan aiki na AI na jama'a kamar ChatGPT, Claude ko Canva."
      },
      {
        "question": "Mai daidaita NGO yana son nazarin rahoto mai shafuka 60 don fitar da shawarwarin da suka fi muhimmanci. Wane nau'i na kayan aiki na AI ya fi dacewa?",
        "options": [
          {
            "key": "A",
            "text": "Kayan aikin ƙirƙirar hotuna"
          },
          {
            "key": "B",
            "text": "Kayan aikin nazarin takaddun kamar NotebookLM"
          },
          {
            "key": "C",
            "text": "Kayan aikin fassara ta atomatik"
          },
          {
            "key": "D",
            "text": "Kayan aikin ƙirƙirar gabatarwar gani"
          }
        ],
        "answer": "B",
        "explanation": "Kayan aikin nazarin takaddun kamar NotebookLM suna baka damar tambaya game da dogon takarda kuma a fitar da takamaiman bayanai. Wannan daidai yake da bukata da aka bayyana: taƙaita babban rahoto."
      },
      {
        "question": "Me ya sa ba ya kamata a shigar da bayanan mutum-mutumi na masu amfana a cikin kayan aiki na AI na jama'a ba tare da tsaro ba?",
        "options": [
          {
            "key": "A",
            "text": "Domin kayan aikin na iya goge bayanan ta atomatik"
          },
          {
            "key": "B",
            "text": "Domin kayan aikin bai fahimci sunayen Afirka ba"
          },
          {
            "key": "C",
            "text": "Domin ana iya adana bayanai a kan sabobin waje kuma a yi amfani da su don horar da samfura"
          },
          {
            "key": "D",
            "text": "Domin kayan aiki na AI sun ƙi bayanan a harsunan gida"
          }
        ],
        "answer": "C",
        "explanation": "Yawancin kayan aiki na jama'a suna adana bayanan da aka shigar a kan sabobin su kuma na iya amfani da su don inganta samfuransu. Ga bayanan sirri (masu amfana masu rauni, majinyata), dole ne a bincika manufar sirri ko amfani da kayan aikin da aka yi wa musamman."
      },
      {
        "question": "A cikin tsari na aiki da ke haɗa kayan aiki da yawa na AI, menene matakin farko da aka ba da shawarar kafin sarrafa bayanan ainihi?",
        "options": [
          {
            "key": "A",
            "text": "Sayen sigar premium ta kowane kayan aiki nan take"
          },
          {
            "key": "B",
            "text": "Gwada tsarin gaba ɗaya da bayanan ƙirƙira ko marasa wuyar gaske"
          },
          {
            "key": "C",
            "text": "Neman izinin dukan ƙungiya ga kowane mataki"
          },
          {
            "key": "D",
            "text": "Amfani da kayan aiki da aka ƙera a Afirka ne kawai"
          }
        ],
        "answer": "B",
        "explanation": "Kafin haɗa bayanan ainihi da masu iya zama sirri a cikin tsari mai kayan aiki da yawa, yana da muhimmanci a gwada dukan tsarin da bayanan ƙirƙira. Wannan yana baka damar gano kurakurai, asarar inganci ko haɗarin sirri ba tare da barazana ga masu amfana ba."
      }
    ],
    "reflection": "Daga cikin nau'i huɗu na kayan aiki da aka gabatar (mataimakan tattaunawa, rubuta magana, ƙirƙirar hotuna, nazarin takaddun), wanne zai fi dacewa da aikin da ke maimaituwa kuma mai ɗaukar lokaci mai yawa a cikin aikinku na yanzu? Menene manyan cikas biyu ga ɗaukarsa a cikin ƙungiyarku — kuma ta yaya za ku iya shawo kan su?",
    "glossary": [
      {
        "term": "Mataimakiyar tattaunawa",
        "definition": "Shirin AI mai iya fahimtar tambayoyinku a harshen yau da kullun kuma amsa ta rubutu, kamar abokin aiki mai samuwa kowane lokaci. Misalai: ChatGPT, Claude, Gemini."
      },
      {
        "term": "Rubuta magana (Transcription)",
        "definition": "Canza rikodin sauti ko bidiyo zuwa rubutu ta atomatik. Yana da amfani don rubuta tarurruka, hirarraki ko saƙonni na murya ba tare da buga su da hannu ba."
      },
      {
        "term": "NotebookLM",
        "definition": "Kayan aikin nazarin takaddun na Google wanda ke baka damar loda fayiloli (PDF, rubutu) da tambaya game da su, kamar dai mataimaki ya karanta takardar a madadinka."
      },
      {
        "term": "Kayan aiki no-code",
        "definition": "Kayan aiki na dijital da ake iya amfani da shi ba tare da rubuta code na kwamfuta ba. Ana samun sa ta hanyar sauƙaƙen interface na gani, yana ba marasa masu fasaha damar ƙirƙirar atomatik ko tsarin aiki."
      },
      {
        "term": "Freemium",
        "definition": "Tsarin kasuwanci da ke ba da sigar asali kyauta da sigar da ake biya mai ƙarin ayyuka. Yana baka damar farawa ba tare da kasafin kuɗi ba kuma ka ci gaba gwargwadon bukatunka."
      },
      {
        "term": "API",
        "definition": "Mahaɗin shirye-shirye (Application Programming Interface): gadar da ke bawa software guda biyu damar sadarwa. Misali, NGO na iya haɗa tsarin gudanar da bayananta zuwa kayan aiki na AI ta API don atomatik ayyuka ba tare da tsoma baki na hannu ba."
      }
    ]
  }
};
