import { Language } from '../translations';
import { LessonContent } from '../lessonContent';

// Module 1 « Intelligence Artificielle » — leçon c2 (Comprendre les LLMs — comment ChatGPT et Claude « parlent » vraiment)
// Trilingue FR / EN / HA. ⚠️ Traductions HA à faire valider par un locuteur natif haoussa.
export const iaLessonC2: Record<Language, LessonContent> = {
  "fr": {
    "id": "c2",
    "lessonNumber": 2,
    "title": "Comprendre les LLMs — comment ChatGPT et Claude « parlent » vraiment",
    "objective": "À la fin de cette leçon, vous saurez expliquer ce qu'est un grand modèle de langage (LLM) et comment il génère du texte par prédiction. Vous serez capable d'identifier ses forces et ses limites, notamment les hallucinations et la date de coupure. Vous saurez l'utiliser avec discernement dans votre contexte professionnel africain, en protégeant les données sensibles de vos bénéficiaires.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Qu'est-ce qu'un LLM ? Ni encyclopédie, ni oracle",
        "body": "ChatGPT, Claude, Gemini — ces outils font partie de la famille des Grands Modèles de Langage, ou LLM (Large Language Models). Un LLM est un programme informatique entraîné sur des milliards de pages de texte : articles, livres, forums, sites web, rapports d'ONG. Grâce à cet entraînement massif, il a appris des régularités dans le langage — un peu comme un enfant qui apprend à parler en écoutant des milliers de conversations.\n\nMais attention : un LLM ne « sait » rien au sens humain du mot. Il ne consulte pas une base de données encyclopédique pour vous répondre. Il prédit le mot le plus probable à chaque étape, comme si vous demandiez à quelqu'un de compléter une phrase commencée. Imaginez un griot très éloquent qui a mémorisé des milliers d'histoires : il peut en raconter de nouvelles de façon convaincante, mais il peut aussi mélanger des détails ou en inventer.\n\nConcrètement, quand vous demandez à Claude de rédiger un rapport sur la nutrition au Sahel, il ne cherche pas dans une base de données officielle de la FAO. Il génère du texte qui ressemble à ce qu'un rapport sur ce sujet devrait contenir, selon les textes sur lesquels il a été entraîné. C'est puissant — et c'est aussi la source de ses limites."
      },
      {
        "title": "Comment il « lit » votre message — tokens et fenêtre de contexte",
        "body": "Avant de vous répondre, le LLM découpe votre message en petits morceaux appelés tokens. Un token correspond environ à un mot court, ou à une partie de mot long. Par exemple, « manioc » sera découpé en deux tokens, et « bonjour » en un seul. Ce découpage est invisible pour vous, mais il est fondamental pour la machine.\n\nLe LLM ne peut traiter qu'un certain nombre de tokens à la fois : c'est ce qu'on appelle la fenêtre de contexte. Pensez-y comme à la mémoire de travail d'un collègue : si vous lui donnez un document de 200 pages à lire en même temps qu'une conversation, il va commencer à oublier les premières pages pendant qu'il lit les dernières. De la même façon, si votre échange avec le LLM devient très long, il peut « oublier » ce que vous lui avez dit au début.\n\nDans la pratique, cela signifie que pour les agents de terrain qui travaillent sur mobile avec une connexion limitée : gardez vos messages concis et structurés. Si vous posez une question complexe sur la distribution alimentaire dans un village du Niger, donnez le contexte essentiel dans la même requête plutôt que de le faire en dix messages séparés. Le LLM sera plus précis et vous gagnerez de la bande passante."
      },
      {
        "title": "Forces et limites — fluidité oui, mais vérification toujours",
        "body": "Les LLMs ont des forces réelles : ils rédigent rapidement, reformulent dans plusieurs langues, résument de longs documents, et s'adaptent à des styles variés. Pour une coordinatrice d'ONG à Niamey qui doit rédiger un rapport bailleur en anglais alors que sa langue de travail est le français, c'est un gain de temps considérable : plusieurs heures économisées sur un seul document, comme le montre l'exemple de cette leçon.\n\nMais les LLMs ont aussi des limites sérieuses. La première est l'hallucination : le modèle peut générer des informations fausses avec une apparente confiance. Il peut citer un article scientifique qui n'existe pas, ou donner un chiffre de bénéficiaires qui ne correspond à aucune réalité. Confiance ne signifie pas exactitude — c'est la règle d'or à retenir. La deuxième limite est la date de coupure (knowledge cutoff) : le modèle ne connaît pas les événements survenus après sa dernière mise à jour. Si une épidémie ou une crise humanitaire a éclaté récemment au Tchad, le LLM pourrait vous donner des informations obsolètes.\n\nIl existe aussi des biais : les LLMs ont été entraînés principalement sur des textes en anglais, produits majoritairement par des auteurs du Nord global. Leurs réponses sur les réalités africaines — les systèmes de tontine, les pratiques agricoles locales, les langues comme le haoussa ou le bambara — peuvent être moins précises, incomplètes, voire stéréotypées. Cela ne les rend pas inutiles, mais cela impose une vigilance supplémentaire."
      },
      {
        "title": "Bien utiliser un LLM en contexte africain — vérification et protection des données",
        "body": "Pour tirer le meilleur d'un LLM dans votre contexte professionnel, trois principes sont essentiels. Premier principe : vérifiez systématiquement les faits. Comme vous le feriez avec un rapport préliminaire rédigé par un stagiaire motivé mais peu expérimenté, relisez chaque affirmation importante. Si le LLM cite un taux de malnutrition ou un nombre de bénéficiaires, croisez l'information avec une source officielle (OCHA, PNUD, Ministère de la Santé).\n\nDeuxième principe : ne saisissez jamais de données personnelles identifiables sur vos bénéficiaires. Les noms, villages, états de santé, situations familiales de personnes vulnérables ne doivent pas être copiés dans un LLM public. La plupart de ces outils stockent vos conversations pour améliorer leurs modèles. Si vous travaillez avec des données sensibles — comme c'est souvent le cas pour les agents de terrain qui gèrent des distributions alimentaires ou des dossiers de protection — utilisez des données anonymisées ou des cas fictifs représentatifs.\n\nTroisième principe : soyez prudent avec les langues locales. Si vous essayez de générer un message en haoussa ou en mooré pour communiquer avec des communautés rurales, le résultat peut paraître correct sans l'être vraiment. Le LLM a été beaucoup moins entraîné sur ces langues que sur le français ou l'anglais. Faites toujours valider le contenu par un locuteur natif avant diffusion. De la même façon qu'on ne distribue pas un médicament sans notice vérifiée, on ne diffuse pas un message communautaire sans validation locale."
      }
    ],
    "example": {
      "title": "L'ONG SahelAid et le rapport bailleur : entre gain de temps et vigilance",
      "challenge": "L'équipe de coordination de SahelAid (ONG basée à Agadez) doit soumettre un rapport trimestriel à son bailleur européen dans 48 heures. La coordinatrice doit rédiger 15 pages en anglais, croisant des données de terrain en français et en haoussa. Elle n'a jamais utilisé de LLM auparavant et craint de manquer de temps.",
      "solution": "Elle utilise Claude pour structurer et rédiger une première version en anglais à partir de ses notes de terrain en français. Elle fournit au LLM uniquement des données agrégées et anonymisées (pas de noms de bénéficiaires). Elle demande ensuite au LLM de reformuler les sections techniques dans un registre adapté aux bailleurs institutionnels. En parallèle, elle demande à son collègue haoussa-phone de vérifier les termes culturels traduits.",
      "impact": "Le rapport est produit en 6 heures au lieu de 18 heures habituellement — un gain de 12 heures de travail. Lors de la relecture humaine, l'équipe identifie un chiffre de couverture vaccinale halluciné (87 % au lieu de 62 % selon les données terrain). La correction est faite avant soumission. Suite à cet épisode, SahelAid adopte une procédure systématique : tout chiffre généré par IA est surligné en jaune et vérifié par une deuxième personne avant validation du rapport."
    },
    "practice": {
      "title": "Repérer une hallucination en situation réelle",
      "instructions": [
        "Ouvrez un assistant IA (Claude, ChatGPT ou autre) sur votre téléphone et posez-lui une question factuelle précise sur votre secteur ou votre pays — par exemple : « Quel est le taux de couverture en eau potable au Niger en 2023 ? » ou « Combien de bénéficiaires le PAM a-t-il assisté au Mali en 2024 ? »",
        "Notez la réponse donnée par l'IA, en particulier les chiffres, les sources citées et les dates mentionnées. Observez si le modèle exprime une incertitude ou s'il répond avec une confiance totale.",
        "Vérifiez au moins un fait clé de la réponse en consultant une source fiable accessible sur mobile : le site OCHA (reliefweb.int), le site du PNUD, ou un rapport officiel d'un ministère. Notez si l'information est confirmée, approximative ou incorrecte, et réfléchissez à ce que cela implique pour votre usage professionnel."
      ],
      "observation": "Dans la plupart des cas, vous constaterez que le LLM donne une réponse fluide et confiante — même si un ou plusieurs éléments sont inexacts ou légèrement dépassés. Cette expérience illustre la règle fondamentale : la fluidité du langage ne garantit pas la fiabilité de l'information. Adoptez dès maintenant le réflexe de la double vérification pour tout chiffre ou fait utilisé dans un document professionnel."
    },
    "quiz": [
      {
        "question": "Un LLM comme Claude génère du texte en :",
        "options": [
          {
            "key": "A",
            "text": "Consultant une encyclopédie en ligne mise à jour en temps réel"
          },
          {
            "key": "B",
            "text": "Prédisant le mot ou token le plus probable à chaque étape, selon son entraînement"
          },
          {
            "key": "C",
            "text": "Copiant directement des phrases depuis des documents officiels de l'ONU"
          },
          {
            "key": "D",
            "text": "Calculant la réponse mathématiquement correcte à partir de faits vérifiés"
          }
        ],
        "answer": "B",
        "explanation": "Un LLM génère du texte par prédiction statistique : à chaque étape, il choisit le token le plus probable selon les milliards de textes sur lesquels il a été entraîné. Il ne consulte pas de base de données en temps réel et ne garantit pas l'exactitude factuelle."
      },
      {
        "question": "Qu'est-ce qu'une hallucination dans le contexte d'un LLM ?",
        "options": [
          {
            "key": "A",
            "text": "Un bug technique qui fait planter l'application"
          },
          {
            "key": "B",
            "text": "Une réponse donnée dans une langue que l'utilisateur ne comprend pas"
          },
          {
            "key": "C",
            "text": "Une information fausse ou inventée générée avec apparente confiance par le modèle"
          },
          {
            "key": "D",
            "text": "Un message d'erreur quand la connexion internet est trop lente"
          }
        ],
        "answer": "C",
        "explanation": "Une hallucination est quand le LLM génère une affirmation fausse — un chiffre inventé, une source inexistante, un événement fictif — mais avec un ton assuré. C'est l'un des risques les plus importants pour un usage professionnel : la confiance apparente du modèle ne garantit pas l'exactitude."
      },
      {
        "question": "Pourquoi ne faut-il pas saisir les noms et données personnelles de vos bénéficiaires dans un LLM public ?",
        "options": [
          {
            "key": "A",
            "text": "Parce que le LLM ne peut pas lire les noms africains correctement"
          },
          {
            "key": "B",
            "text": "Parce que cela ralentit la génération de la réponse"
          },
          {
            "key": "C",
            "text": "Parce que la plupart des LLMs publics stockent les conversations, exposant les données sensibles"
          },
          {
            "key": "D",
            "text": "Parce que le LLM va publier ces informations automatiquement sur internet"
          }
        ],
        "answer": "C",
        "explanation": "Les LLMs publics comme ChatGPT stockent généralement les conversations pour améliorer leurs modèles. Saisir des données personnelles de bénéficiaires vulnérables (noms, villages, situations de santé) viole les principes de protection des données et expose ces personnes à des risques. Utilisez toujours des données anonymisées."
      },
      {
        "question": "La fenêtre de contexte d'un LLM correspond à :",
        "options": [
          {
            "key": "A",
            "text": "La taille maximale de l'écran sur lequel l'IA s'affiche"
          },
          {
            "key": "B",
            "text": "La vitesse de connexion internet nécessaire pour utiliser l'outil"
          },
          {
            "key": "C",
            "text": "Le nombre de langues différentes que le modèle peut comprendre"
          },
          {
            "key": "D",
            "text": "La quantité maximale de texte (tokens) que le modèle peut traiter en une seule fois"
          }
        ],
        "answer": "D",
        "explanation": "La fenêtre de contexte est la limite de mémoire de travail du LLM : au-delà d'un certain nombre de tokens (mots et parties de mots), le modèle ne peut plus tenir compte des informations plus anciennes de la conversation. C'est pourquoi des échanges très longs peuvent dégrader la qualité des réponses."
      },
      {
        "question": "Pourquoi faut-il être particulièrement prudent avec les réponses d'un LLM en haoussa ou en mooré ?",
        "options": [
          {
            "key": "A",
            "text": "Ces langues sont interdites d'utilisation dans les outils d'IA"
          },
          {
            "key": "B",
            "text": "Les LLMs ont été entraînés sur beaucoup moins de textes en langues africaines, ce qui rend leurs réponses moins fiables"
          },
          {
            "key": "C",
            "text": "Les téléphones africains ne peuvent pas afficher ces caractères correctement"
          },
          {
            "key": "D",
            "text": "La traduction automatique est toujours parfaite pour ces langues"
          }
        ],
        "answer": "B",
        "explanation": "Les LLMs ont été entraînés principalement sur des textes en anglais et dans les grandes langues européennes. Les langues africaines comme le haoussa, le mooré ou le bambara sont sous-représentées dans ces corpus, ce qui rend les réponses moins précises et potentiellement truffées d'erreurs. Une validation par un locuteur natif est indispensable."
      }
    ],
    "reflection": "Pensez à une tâche professionnelle que vous effectuez régulièrement — rédiger un rapport, traduire un message pour une communauté, analyser des données de terrain. Comment utiliseriez-vous un LLM pour vous aider dans cette tâche, et quelles précautions prendriez-vous pour vérifier ses résultats et protéger les informations sensibles ?",
    "glossary": [
      {
        "term": "LLM (Grand Modèle de Langage)",
        "definition": "Programme d'intelligence artificielle entraîné sur d'immenses quantités de texte pour générer du langage humain. ChatGPT, Claude et Gemini sont des exemples de LLMs."
      },
      {
        "term": "Token",
        "definition": "La plus petite unité de texte traitée par un LLM, correspondant environ à un mot court ou une partie de mot. Le LLM prédit les tokens les uns après les autres pour construire sa réponse."
      },
      {
        "term": "Hallucination",
        "definition": "Phénomène où un LLM génère une information fausse ou inventée avec un ton assuré, sans avertissement. Par exemple, citer un rapport qui n'existe pas ou donner un chiffre erroné."
      },
      {
        "term": "Fenêtre de contexte",
        "definition": "Limite de la mémoire de travail d'un LLM : la quantité maximale de texte qu'il peut prendre en compte dans un échange. Au-delà, il peut « oublier » les informations anciennes de la conversation."
      },
      {
        "term": "Date de coupure (Knowledge Cutoff)",
        "definition": "Date après laquelle le LLM n'a plus reçu de nouvelles données d'entraînement. Les événements survenus après cette date lui sont inconnus, ce qui peut rendre ses réponses obsolètes."
      },
      {
        "term": "Fine-tuning",
        "definition": "Technique consistant à entraîner un LLM général sur un ensemble de données spécialisées (par exemple, des textes médicaux ou des rapports humanitaires) pour l'adapter à un domaine précis et améliorer sa précision dans ce contexte."
      }
    ]
  },
  "en": {
    "id": "c2",
    "lessonNumber": 2,
    "title": "Understanding LLMs — how ChatGPT and Claude really \"speak\"",
    "objective": "By the end of this lesson, you will be able to explain what a large language model (LLM) is and how it generates text through prediction. You will be able to identify its strengths and limitations, including hallucinations and the knowledge cutoff. You will know how to use it wisely in your African professional context, protecting the sensitive data of your beneficiaries.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "What is an LLM? Neither an encyclopedia nor an oracle",
        "body": "ChatGPT, Claude, Gemini — these tools belong to the family of Large Language Models, or LLMs. An LLM is a computer program trained on billions of pages of text: articles, books, forums, websites, NGO reports. Through this massive training, it has learned patterns in language — much like a child who learns to speak by listening to thousands of conversations.\n\nBut be careful: an LLM does not \"know\" anything in the human sense. It does not consult an encyclopedic database to answer you. It predicts the most likely word at each step, as if you asked someone to complete a sentence you had started. Imagine a very eloquent griot who has memorized thousands of stories: he can tell new ones convincingly, but he may also mix up details or invent some.\n\nIn practice, when you ask Claude to write a report on nutrition in the Sahel, it does not search an official FAO database. It generates text that looks like what a report on that topic should contain, based on the texts it was trained on. This is powerful — and it is also the source of its limitations."
      },
      {
        "title": "How it \"reads\" your message — tokens and context window",
        "body": "Before responding to you, the LLM splits your message into small pieces called tokens. One token corresponds roughly to a short word, or to part of a longer word. For example, \"cassava\" might be split into two tokens, while \"hello\" is just one. This splitting is invisible to you, but it is fundamental for the machine.\n\nThe LLM can only process a certain number of tokens at a time: this is called the context window. Think of it as a colleague's working memory: if you give them a 200-page document to read while also holding a conversation, they will start forgetting the first pages while reading the last ones. In the same way, if your exchange with the LLM becomes very long, it may \"forget\" what you told it at the beginning.\n\nIn practice, for field agents working on mobile phones with limited connectivity: keep your messages concise and structured. If you are asking a complex question about food distribution in a village in Niger, provide the essential context in the same request rather than spreading it across ten separate messages. The LLM will be more accurate and you will save bandwidth."
      },
      {
        "title": "Strengths and limitations — fluency yes, but always verify",
        "body": "LLMs have real strengths: they write quickly, rephrase in multiple languages, summarize long documents, and adapt to various styles. For an NGO coordinator in Niamey who must write a donor report in English when her working language is French, this represents a significant time saving: several hours saved on a single document, as the example in this lesson shows.\n\nBut LLMs also have serious limitations. The first is hallucination: the model can generate false information with apparent confidence. It may cite a scientific article that does not exist, or give a beneficiary figure that corresponds to no reality. Confidence does not mean accuracy — that is the golden rule to remember. The second limitation is the knowledge cutoff: the model does not know about events that occurred after its last update. If an epidemic or humanitarian crisis recently broke out in Chad, the LLM might give you outdated information.\n\nThere are also biases: LLMs were trained primarily on English-language texts, produced mainly by authors from the Global North. Their responses about African realities — tontine savings systems, local agricultural practices, languages like Hausa or Bambara — may be less accurate, incomplete, or even stereotyped. This does not make them useless, but it requires extra vigilance."
      },
      {
        "title": "Using an LLM effectively in the African context — verification and data protection",
        "body": "To get the best from an LLM in your professional context, three principles are essential. First principle: systematically verify facts. Just as you would with a preliminary report written by a motivated but inexperienced intern, re-read each important claim. If the LLM cites a vaccination coverage rate or a number of beneficiaries, cross-check the information against an official source (OCHA, UNDP, Ministry of Health).\n\nSecond principle: never enter personally identifiable data about your beneficiaries. The names, villages, health statuses, and family situations of vulnerable people must not be copied into a public LLM. Most of these tools store your conversations to improve their models. If you work with sensitive data — as is often the case for field agents managing food distributions or protection case files — use anonymized data or representative fictional cases.\n\nThird principle: be cautious with local languages. If you try to generate a message in Hausa or Mooré to communicate with rural communities, the result may appear correct without actually being so. The LLM has been trained far less on these languages than on French or English. Always have the content validated by a native speaker before distribution. Just as you would not distribute a medication without a verified label, do not broadcast a community message without local validation."
      }
    ],
    "example": {
      "title": "SahelAid NGO and the donor report: between time savings and vigilance",
      "challenge": "The coordination team at SahelAid (an NGO based in Agadez) must submit a quarterly report to their European donor within 48 hours. The coordinator must write 15 pages in English, combining field data in French and Hausa. She has never used an LLM before and fears she will not have enough time.",
      "solution": "She uses Claude to structure and draft a first version in English from her French-language field notes. She provides the LLM only with aggregated, anonymized data (no beneficiary names). She then asks the LLM to rephrase technical sections in a register appropriate for institutional donors. In parallel, she asks her Hausa-speaking colleague to verify the translated cultural terms.",
      "impact": "The report is produced in 6 hours instead of the usual 18 hours — a saving of 12 working hours. During human review, the team identifies a hallucinated vaccination coverage figure (87% instead of the actual 62% from field data). The correction is made before submission. Following this episode, SahelAid adopts a systematic procedure: every AI-generated figure is highlighted in yellow and verified by a second person before the report is approved."
    },
    "practice": {
      "title": "Spotting a hallucination in a real situation",
      "instructions": [
        "Open an AI assistant (Claude, ChatGPT, or another) on your phone and ask it a specific factual question about your sector or country — for example: \"What is the safe drinking water coverage rate in Niger in 2023?\" or \"How many beneficiaries did WFP assist in Mali in 2024?\"",
        "Note the answer given by the AI, paying particular attention to the figures, cited sources, and dates mentioned. Observe whether the model expresses any uncertainty or responds with complete confidence.",
        "Verify at least one key fact from the response by consulting a reliable source accessible on mobile: the OCHA website (reliefweb.int), the UNDP website, or an official ministry report. Note whether the information is confirmed, approximate, or incorrect, and reflect on what this means for your professional use."
      ],
      "observation": "In most cases, you will find that the LLM gives a fluent and confident answer — even if one or more elements are inaccurate or slightly outdated. This exercise illustrates the fundamental rule: fluency of language does not guarantee reliability of information. Adopt the habit of double-checking any figure or fact used in a professional document from this point forward."
    },
    "quiz": [
      {
        "question": "An LLM like Claude generates text by:",
        "options": [
          {
            "key": "A",
            "text": "Consulting an online encyclopedia updated in real time"
          },
          {
            "key": "B",
            "text": "Predicting the most likely word or token at each step, based on its training"
          },
          {
            "key": "C",
            "text": "Copying sentences directly from official UN documents"
          },
          {
            "key": "D",
            "text": "Calculating the mathematically correct answer from verified facts"
          }
        ],
        "answer": "B",
        "explanation": "An LLM generates text through statistical prediction: at each step, it chooses the most likely token based on the billions of texts it was trained on. It does not consult a real-time database and does not guarantee factual accuracy."
      },
      {
        "question": "What is a hallucination in the context of an LLM?",
        "options": [
          {
            "key": "A",
            "text": "A technical bug that crashes the application"
          },
          {
            "key": "B",
            "text": "A response given in a language the user does not understand"
          },
          {
            "key": "C",
            "text": "False or invented information generated with apparent confidence by the model"
          },
          {
            "key": "D",
            "text": "An error message when the internet connection is too slow"
          }
        ],
        "answer": "C",
        "explanation": "A hallucination occurs when the LLM generates a false statement — an invented figure, a non-existent source, a fictional event — but with an assured tone. This is one of the most significant risks for professional use: the model's apparent confidence does not guarantee accuracy."
      },
      {
        "question": "Why should you never enter the personal names and data of your beneficiaries into a public LLM?",
        "options": [
          {
            "key": "A",
            "text": "Because the LLM cannot read African names correctly"
          },
          {
            "key": "B",
            "text": "Because it slows down the generation of the response"
          },
          {
            "key": "C",
            "text": "Because most public LLMs store conversations, exposing sensitive data"
          },
          {
            "key": "D",
            "text": "Because the LLM will automatically publish this information on the internet"
          }
        ],
        "answer": "C",
        "explanation": "Public LLMs like ChatGPT generally store conversations to improve their models. Entering personal data about vulnerable beneficiaries (names, villages, health situations) violates data protection principles and exposes these people to risks. Always use anonymized data."
      },
      {
        "question": "An LLM's context window refers to:",
        "options": [
          {
            "key": "A",
            "text": "The maximum screen size on which the AI is displayed"
          },
          {
            "key": "B",
            "text": "The internet connection speed required to use the tool"
          },
          {
            "key": "C",
            "text": "The number of different languages the model can understand"
          },
          {
            "key": "D",
            "text": "The maximum amount of text (tokens) the model can process at one time"
          }
        ],
        "answer": "D",
        "explanation": "The context window is the LLM's working memory limit: beyond a certain number of tokens (words and parts of words), the model can no longer take earlier information in the conversation into account. This is why very long exchanges can degrade the quality of responses."
      },
      {
        "question": "Why should you be especially cautious with an LLM's responses in Hausa or Mooré?",
        "options": [
          {
            "key": "A",
            "text": "These languages are prohibited from use in AI tools"
          },
          {
            "key": "B",
            "text": "LLMs were trained on far fewer texts in African languages, making their responses less reliable"
          },
          {
            "key": "C",
            "text": "African phones cannot display these characters correctly"
          },
          {
            "key": "D",
            "text": "Automatic translation is always perfect for these languages"
          }
        ],
        "answer": "B",
        "explanation": "LLMs were trained primarily on English texts and major European languages. African languages such as Hausa, Mooré, or Bambara are underrepresented in these training datasets, which makes responses less accurate and potentially full of errors. Validation by a native speaker is essential."
      }
    ],
    "reflection": "Think of a professional task you perform regularly — writing a report, translating a message for a community, analyzing field data. How would you use an LLM to help you with this task, and what precautions would you take to verify its results and protect sensitive information?",
    "glossary": [
      {
        "term": "LLM (Large Language Model)",
        "definition": "An artificial intelligence program trained on vast amounts of text to generate human language. ChatGPT, Claude, and Gemini are examples of LLMs."
      },
      {
        "term": "Token",
        "definition": "The smallest unit of text processed by an LLM, roughly equivalent to a short word or part of a word. The LLM predicts tokens one after another to build its response."
      },
      {
        "term": "Hallucination",
        "definition": "A phenomenon where an LLM generates false or invented information with an assured tone and no warning — for example, citing a report that does not exist or giving an incorrect figure."
      },
      {
        "term": "Context Window",
        "definition": "The working memory limit of an LLM: the maximum amount of text it can take into account in an exchange. Beyond this limit, it may \"forget\" earlier information in the conversation."
      },
      {
        "term": "Knowledge Cutoff",
        "definition": "The date after which the LLM received no new training data. Events that occurred after this date are unknown to it, which may make its responses outdated."
      },
      {
        "term": "Fine-tuning",
        "definition": "A technique of training a general LLM on a specialized dataset (for example, medical texts or humanitarian reports) to adapt it to a specific domain and improve its accuracy in that context."
      }
    ]
  },
  "ha": {
    "id": "c2",
    "lessonNumber": 2,
    "title": "Fahimtar LLMs — yadda ChatGPT da Claude suke 'magana' gaskiya",
    "objective": "A karshen wannan darasi, za ku iya bayyana abin da babban kirar harshe (LLM) yake da kuma yadda take haifar da rubutu ta hanyar hasashe. Za ku iya gane karfinta da iyakokinta, musamman hallucination da ranar yanke ilimi. Za ku san yadda ake amfani da ita da hikima a yanayin aikinku na kwararru a Afirka, inda kuke kare bayanai masu mahimmanci na masu amfana da ku.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Menene LLM? Ba encyclopedia ba ne, ba kuma mai annabta ba",
        "body": "ChatGPT, Claude, Gemini — wadannan kayan aiki suna cikin dangin Manyan Kirar Harshe, ko LLM (Large Language Models). LLM shiri ne na kwamfuta da aka horar da shi kan fiye da biliyoyin shafuka na rubutu: labarai, litattafai, tattaunawa, gidajen yanar gizo, rahotannin kungiyoyin agaji. Ta hanyar wannan horarwa mai yawa, ta koyi tsarin harshe — kamar yaro da ke koyon magana ta hanyar sauraron dubunnan tattaunawa.\n\nAma a lura: LLM ba ta 'sani' komai a ma'anar dan Adam. Ba ta tuntubar wata ma'ajiyar bayanai ta encyclopedia don amsa muku. Tana hasashen kalmar da ta fi yiwuwa a kowane matakai, kamar dai idan ka roki wani ya kammala jumla da ka fara. Ka yi tunanin wani dan tarihi mai fasaha wanda ya haddace dubunnan labarai: zai iya ba da sabon labari mai kayatarwa, amma kuma zai iya gauraya bayanai ko kirkira wasu.\n\nA aikace, lokacin da kuka roki Claude ya rubuta rahoto kan abinci mai gina jiki a yankin Sahel, ba ya nema a wata ma'ajiyar bayanai ta hukuma ta FAO. Yana haifar da rubutu da ya yi kama da abin da rahoto kan wannan batu ya kamata ya kunsa, bisa rubutun da aka horar da shi kansu. Wannan yana da karfi — kuma shine tushen iyakokinsa."
      },
      {
        "title": "Yadda yake 'karanta' sakonku — tokens da taga mahallin",
        "body": "Kafin ya amsa muku, LLM yana raba sakonku zuwa kananan guntaye da ake kira tokens. Token daya yayi daidai da kalma gajera ko wani bangare na dogon kalma. Misali, 'rogo' (cassava) na iya zama tokens biyu, yayin da 'salama' na iya zama daya. Wannan rarrabuwa ba a bayyane yake gare ku ba, amma yana da mahimmanci ga inji.\n\nLLM na iya sarrafa adadin tokens kawai a lokaci daya: ana kiran wannan taga mahallin (context window). Ku yi tunanin kwakwalwar aiki ta abokin aiki: idan kun ba shi takarda mai shafuka 200 don karatu yayin da kuke tattaunawa, zai fara manta shafukan farko yayin da yake karanta na karshe. Haka nan, idan tattaunawarku da LLM ta yi tsawo, yana iya 'mantawa' da abin da kun fada masa a farko.\n\nA aikace, ga wakilai na filin aiki wadanda ke amfani da wayar hannu tare da iyakantaccen hadin yanar gizo: ku sanya sakonku a takaice kuma a tsari. Idan kuna tambaya mai rikitarwa kan rarraba abinci a wata kauye a Nijar, ku ba da mahallin da ake bukata a cikin bukata daya maimakon a cikin sakonni goma daban-daban. LLM zai zama daidai kuma ku rage amfani da bayanai."
      },
      {
        "title": "Karfi da iyakoki — fasaha haka ne, amma duba koyaushe",
        "body": "LLMs suna da gaske karfi: suna rubuta da sauri, suna sake tsara a harsunan da dama, suna takaitawa manyan takaddun, kuma suna daidaitawa da salon daban-daban. Ga masu daidaita kungiyoyin agaji a Niamey wadanda dole ne su rubuta rahoto na masu ba da taimako a Turanci yayin da harshen aikinsu shi ne Faransanci, wannan yana nuna tasarrufin lokaci mai yawa: sa'o'i da dama da aka ceto kan takarda guda, kamar yadda misalin wannan darasi ya nuna.\n\nAma LLMs kuma suna da iyakoki masu muhimmanci. Na farko shine hallucination: kirar na iya haifar da bayanan karya tare da alama ta amincewa. Na iya ambaton wata takarda ta kimiyya da ba ta wanzu ba, ko ba da adadin masu amfana da bai dace da gaskiya ba. Amincewa baya nufin daidaito — wannan shi ne dokar zinariya da za a tuna. Iyaka ta biyu ita ce ranar yanke ilimi (knowledge cutoff): kirar ba ta san abubuwan da suka faru bayan sabunta ta na karshe ba. Idan annoba ko rikicin agaji ya barke kwanan nan a Chadi, LLM na iya ba ku bayanan da suka shude.\n\nAkwai kuma son zuciya: LLMs sun samu horarwa musamman a rubutun Turanci, wanda marubutan Arewacin duniya suka samar da yawa. Amsoshinsu game da gaskiyar Afirka — tsarin tontine na ajiya, ayyukan noma na gida, harsunan kamar Hausa ko Bambara — na iya zama kasa da daidaito, ba cikakke ba, ko kuma masu kunsar ra'ayin da ba daidai ba. Wannan ba ya sanya su banza, amma yana bukatar karin tsarki."
      },
      {
        "title": "Kyakkyawan amfani da LLM a yanayin Afirka — duba da kare bayanai",
        "body": "Don samun mafi kyau daga LLM a yanayin aikinku na kwararru, akwai ka'idodi guda uku masu mahimmanci. Ka'ida ta farko: ku tabbatar da gaskiyar bayanai koyaushe. Kamar yadda kuke yi da takaitaccen rahoto da wani mai horon aiki mai himma amma karancin kwarewa ya rubuta, ku sake karanta kowace muhimmiyar jigo. Idan LLM ya ambaci yawan allurar rigakafi ko adadin masu amfana, ku yi kwatankwacin bayanan da wata hukuma mai aminci (OCHA, PNUD, Ministiriyar Lafiya).\n\nKa'ida ta biyu: kada ku taba shigar da bayanai na musamman na masu amfana da ku. Sunayen, kauyuka, halin lafiya, da yanayin iyali na mutanen da suke cikin hadari ba za a kwafa su zuwa LLM na jama'a ba. Yawancin wadannan kayan aikin suna adana tattaunawarku don inganta kirarsu. Idan kuna aiki da bayanai masu mahimmanci — kamar yadda yawanci yake ga wakilai na filin aiki wadanda ke sarrafa rarrabar abinci ko fayilolin kare — ku yi amfani da bayanai marasa sunan ko wakilan misalai wadanda ba na gaskiya ba.\n\nKa'ida ta uku: ku yi hankali da harsunan gida. Idan kun yi kokarin haifar da sako a Hausa ko Mooré don sadarwa da al'ummomin karkara, sakamakon na iya bayyana daidai ba tare da kasancewa haka ba. LLM ya yi horarwa kadan sosai a wadannan harsunan fiye da Faransanci ko Turanci. Ku sanya wanda yake magana da harshen na asali ya tabbatar da abun cikin koyaushe kafin rarraba. Kamar yadda ba za ku raba magani ba tare da takarda mai tabbatarwa ba, kada ku yada sakon al'umma ba tare da tabbatarwa na gida ba."
      }
    ],
    "example": {
      "title": "Kungiyar agaji SahelAid da rahoto na masu ba da taimako: tsakanin tasarrufin lokaci da tsarki",
      "challenge": "Kungiyar daidaita SahelAid (kungiyar agaji mai hedikwata a Agadez) dole ne ta gabatar da rahoto na kwata-kwata ga mai ba da taimako na Turai a cikin sa'o'i 48. Mai daidaitawa dole ne ta rubuta shafuka 15 a Turanci, ta hada bayanai na filin aiki a Faransanci da Hausa. Ba ta taba amfani da LLM ba kafin kuma tana jin tsoron rashin lokaci.",
      "solution": "Tana amfani da Claude don tsara da rubuta farkon sigar a Turanci daga bayanan filin aikin da take da su a Faransanci. Tana ba da LLM kawai bayanai masu takaitawa kuma marasa sunan (babu sunayen masu amfana). Sannan tana roki LLM ya sake tsara sassan fasaha a cikin tsarin da ya dace da masu ba da taimako na hukuma. Haka kuma, tana roki abokin aikinta mai magana da Hausa ya duba kalmomin al'adu da aka fassara.",
      "impact": "Ana samar da rahoto a cikin sa'o'i 6 maimakon sa'o'i 18 na yau da kullun — tasarrufin sa'o'i 12 na aiki. A lokacin sake karanta dan adam, kungiyar ta gano wani lambar allurar rigakafi da aka hallucinate (kashi 87 bisa dari maimakon ainihin kashi 62 bisa dari daga bayanai na filin aiki). Ana gyara kafin gabatarwa. Bayan wannan lamari, SahelAid ta karbi tsari na yau da kullun: kowane lamba da AI ta samar an haskaka shi da rawaya kuma wani mutum na biyu ya tabbatar da shi kafin amincewa da rahoto."
    },
    "practice": {
      "title": "Ganowa hallucination a yanayi na gaskiya",
      "instructions": [
        "Ku bude mataimakan AI (Claude, ChatGPT, ko wani) a wayar hannu kuma ku yi masa tambaya ta gaskiya mai takaici game da sashenku ko kasarku — misali: 'Menene yawan ruwan sha mai tsafta a Nijar a 2023?' ko 'Masu amfana nawa ne PAM ta taimaka a Mali a 2024?'",
        "Ku rubuta amsar da AI ta ba, musamman lambobi, tushe da aka ambata, da kwanakin da aka ambata. Ku lura ko kirar ta nuna rashin tabbas ko ta amsa da cikakken amincewa.",
        "Ku tabbatar da akalla wani muhimmin gaskiya daga amsar ta hanyar duba tushe mai aminci da za a iya samun ta a wayar hannu: gidan yanar gizon OCHA (reliefweb.int), gidan yanar gizon PNUD, ko rahoto na hukuma na ministiriya. Ku lura ko bayanan an tabbatar da su, kusan daidai, ko ba daidai ba, kuma ku yi tunani game da abin da wannan ke nufi ga amfaninku na kwararru."
      ],
      "observation": "A mafi yawan lokuta, za ku gano cewa LLM yana ba da amsa mai ruwa ta baki da amincewa — ko da yake wani abu daya ko fiye ba daidai ba ne ko kusan ya shude. Wannan gwaji yana nuna dokar asali: ruwan tafsiri na harshe baya tabbatar da amincin bayanai. Ku karbi al'adar tabbatarwa biyu-biyu ga kowace lamba ko gaskiya da aka yi amfani da ita a cikin takarda ta kwararru daga yanzu."
    },
    "quiz": [
      {
        "question": "LLM kamar Claude yana haifar da rubutu ta hanyar:",
        "options": [
          {
            "key": "A",
            "text": "Tuntubar encyclopedia ta yanar gizo da ake sabuntawa a lokaci na gaskiya"
          },
          {
            "key": "B",
            "text": "Hasashen kalma ko token da ta fi yiwuwa a kowane mataki, bisa horarwarta"
          },
          {
            "key": "C",
            "text": "Kwafa jimloli kai tsaye daga takaddun hukuma na Majalisar Dinkin Duniya"
          },
          {
            "key": "D",
            "text": "Kididdige amsar da ta dace da lissafi daga gaskiyar da aka tabbatar"
          }
        ],
        "answer": "B",
        "explanation": "LLM yana haifar da rubutu ta hanyar hasashe na kididdiga: a kowane mataki, yana zabar token mafi yiwuwa bisa fiye da biliyoyin rubutun da aka horar da shi kansu. Ba ya tuntubar ma'ajiyar bayanai a lokaci na gaskiya kuma ba ya tabbatar da daidaiton gaskiya."
      },
      {
        "question": "Menene hallucination a mahallin LLM?",
        "options": [
          {
            "key": "A",
            "text": "Lalacewar fasaha da ke dakatar da manhaja"
          },
          {
            "key": "B",
            "text": "Amsa da aka ba a cikin harshe da mai amfani ba ya fahimta"
          },
          {
            "key": "C",
            "text": "Bayanan karya ko na kirkira da kirar ta samar tare da alama ta amincewa"
          },
          {
            "key": "D",
            "text": "Sakon kuskure lokacin da hadin yanar gizo ya yi kankanta"
          }
        ],
        "answer": "C",
        "explanation": "Hallucination ta faru ne lokacin da LLM ya samar da wata jigo ta karya — lamba da aka kirkira, wani tushe da ba ya wanzuwa, wani taron almara — amma da sautin amincewa. Wannan yana daya daga cikin hadurra mafi muhimmanci ga amfani da kwararru: alama ta amincewa ta kirar ba ta tabbatar da daidaito."
      },
      {
        "question": "Me ya sa ba za ku taba shigar da sunayen mutane da bayanai na musamman na masu amfana da ku cikin LLM na jama'a ba?",
        "options": [
          {
            "key": "A",
            "text": "Domin LLM ba zai iya karanta sunayen Afirka daidai ba"
          },
          {
            "key": "B",
            "text": "Domin yana rage sauri na haifar da amsar"
          },
          {
            "key": "C",
            "text": "Domin yawancin LLMs na jama'a suna adana tattaunawa, wanda ke fallasa bayanai masu mahimmanci"
          },
          {
            "key": "D",
            "text": "Domin LLM zai buga wadannan bayanai kai tsaye a yanar gizo"
          }
        ],
        "answer": "C",
        "explanation": "LLMs na jama'a kamar ChatGPT gaba daya suna adana tattaunawa don inganta kirarsu. Shigar da bayanai na mutane masu rauni (sunayen, kauyuka, yanayin lafiya) yana keta ka'idodin kare bayanai kuma yana fallasa wadannan mutane ga hadurra. Ku yi amfani da bayanai marasa sunan koyaushe."
      },
      {
        "question": "Taga mahallin (context window) na LLM yana nufin:",
        "options": [
          {
            "key": "A",
            "text": "Girman allon allo na iyaka da ake nuna AI a kansa"
          },
          {
            "key": "B",
            "text": "Sauri na hadin yanar gizo da ake bukata don amfani da kayan aiki"
          },
          {
            "key": "C",
            "text": "Yawan harsunan da kirar take iya fahimtarsu"
          },
          {
            "key": "D",
            "text": "Mafi yawan rubutu (tokens) da kirar za ta iya sarrafa a lokaci daya"
          }
        ],
        "answer": "D",
        "explanation": "Taga mahallin ita ce iyaka ta kwakwalwar aiki ta LLM: fiye da wani adadin tokens (kalmomi da sassan kalmomi), kirar ba za ta iya la'akari da bayanan da suka gabata a tattaunawar ba. Shi ya sa musayar tsayi sosai na iya ragewa ingancin amsoshi."
      },
      {
        "question": "Me ya sa ya kamata ku yi musamman hankali game da amsoshin LLM a Hausa ko Mooré?",
        "options": [
          {
            "key": "A",
            "text": "Wadannan harsunan an hana su amfani da su a kayan aiki na AI"
          },
          {
            "key": "B",
            "text": "LLMs an horar da su a rubutu kasa da yawa a harsunan Afirka, wanda ke sanya amsoshinsu kasa da aminci"
          },
          {
            "key": "C",
            "text": "Wayoyin hannu na Afirka ba za su iya nuna wadannan haruffa daidai ba"
          },
          {
            "key": "D",
            "text": "Fassarar ta atomatik koyaushe cikakkiya ce ga wadannan harsunan"
          }
        ],
        "answer": "B",
        "explanation": "An horar da LLMs musamman a rubutun Turanci da manyan harsunan Turai. Harsunan Afirka kamar Hausa, Mooré, ko Bambara ba su cika wakiltar ba a cikin wadannan kundin horarwa, wanda ke sanya amsoshi kasa da daidaito kuma mai yiwuwa cike da kuskure. Tabbatarwa da wanda yake magana da harshen na asali yana da mahimmanci."
      }
    ],
    "reflection": "Ku yi tunani kan ayyukan kwararru da kuke yin koyaushe — rubuta rahoto, fassara sako ga al'umma, nazarin bayanai na filin aiki. Ta yaya za ku yi amfani da LLM don taimakonku a wannan aiki, kuma wadanne matakan kariya za ku dauka don tabbatar da sakamakonsa da kare bayanan masu mahimmanci?",
    "glossary": [
      {
        "term": "LLM (Babban Kirar Harshe)",
        "definition": "Shirin hankali na wucin gadi da aka horar da shi a kan adadi mai yawa na rubutu don haifar da harshen dan Adam. ChatGPT, Claude, da Gemini sune misalai na LLMs."
      },
      {
        "term": "Token",
        "definition": "Mafi karamin naúrar rubutu da LLM ke sarrafa, kimanin daidai da gajeren kalma ko wani bangare na kalma. LLM yana hasashen tokens daya bayan daya don gina amsarsa."
      },
      {
        "term": "Hallucination",
        "definition": "Lamari da LLM ke haifar da bayanan karya ko na kirkira tare da sautin amincewa ba tare da gargadi ba — misali, ambaton rahoto da ba ya wanzuwa ko ba da lamba mara daidaito."
      },
      {
        "term": "Taga Mahallin (Context Window)",
        "definition": "Iyaka ta kwakwalwar aiki ta LLM: mafi yawan rubutu da za ta iya la'akari da shi a musayar. Fiye da wannan iyaka, na iya 'mantawa' da bayanan da suka gabata a tattaunawar."
      },
      {
        "term": "Ranar Yanke Ilimi (Knowledge Cutoff)",
        "definition": "Ranar bayan da LLM ba ta kara karbar sabbin bayanai na horarwa ba. Abubuwan da suka faru bayan wannan ranar ba ta san su ba, wanda na iya sanya amsoshinsa na tsufa."
      },
      {
        "term": "Fine-tuning",
        "definition": "Dabarar yin horarwa ga LLM na gaba daya a kan kundin bayanai na musamman (misali, rubutun likitanci ko rahotannin agaji na dan adam) don daidaita ta ga wani fanni na musamman da inganta daidaitonta a wannan mahallin."
      }
    ]
  }
};
