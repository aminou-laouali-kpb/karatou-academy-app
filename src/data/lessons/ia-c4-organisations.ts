import { Language } from '../translations';
import { LessonContent } from '../lessonContent';

// Module 1 « Intelligence Artificielle » — leçon c4 (L'IA dans votre organisation — choisir les bons cas d'usage)
// Trilingue FR / EN / HA. ⚠️ Traductions HA à faire valider par un locuteur natif haoussa.
export const iaLessonC4: Record<Language, LessonContent> = {
  "fr": {
    "id": "c4",
    "lessonNumber": 4,
    "title": "L'IA dans votre organisation — choisir les bons cas d'usage",
    "objective": "À la fin de cette leçon, vous serez capable d'identifier les activités de votre organisation où l'IA peut apporter une réelle valeur. Vous saurez évaluer la faisabilité de chaque opportunité en tenant compte des données disponibles, des contraintes du terrain et du niveau de risque. Vous pourrez prioriser un premier cas d'usage pilote et préparer votre équipe à l'adopter progressivement.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Cartographier les cas d'usage : où l'IA fait vraiment la différence",
        "body": "Avant d'adopter un outil d'IA, la première question n'est pas «quelle technologie choisir ?» mais «où avons-nous des problèmes que l'IA peut résoudre ?». Pensez à votre journée de travail : quelles tâches répétitives vous prennent beaucoup de temps ? Quels rapports reviennent chaque mois avec les mêmes tableaux à remplir ? Quelles informations cherchez-vous souvent en cherchant dans des dizaines de fichiers ?\n\nL'IA crée de la valeur de trois façons principales. Elle fait gagner du temps sur des tâches répétitives, comme traduire des formulaires du français vers le haoussa ou résumer de longs comptes rendus de réunion. Elle améliore la qualité, par exemple en détectant des erreurs dans une liste de bénéficiaires avant l'envoi d'une aide d'urgence. Elle élargit l'accès, en permettant à un agent de santé communautaire en zone rurale de consulter des conseils médicaux en langue locale sans connexion permanente.\n\nImaginez un magasinier qui trie chaque matin des centaines de fiches papier pour retrouver les stocks disponibles. Un simple système de recherche automatisée lui ferait gagner deux heures par jour. C'est exactement cela : l'IA comme assistant intelligent, pas comme remplacement du travail humain. Dans votre organisation, commencez par lister cinq tâches qui vous épuisent. Ce sont vos premiers candidats."
      },
      {
        "title": "Prioriser : choisir le bon cas d'usage avant de se lancer",
        "body": "Toutes les idées ne se valent pas. Une matrice simple vous aide à choisir : placez chaque idée sur deux axes — la valeur qu'elle apporte (gain de temps, qualité, portée) et l'effort qu'elle demande (données disponibles, coût, compétences nécessaires). Les meilleurs candidats pilotes sont ceux à haute valeur et faible effort.\n\nLa disponibilité des données est cruciale. Si vous souhaitez automatiser le tri de listes de bénéficiaires, avez-vous déjà ces listes sous forme numérique ? Sont-elles cohérentes et complètes ? Une ONG au Sahel qui voulait utiliser l'IA pour analyser les données de nutrition a découvert que 40 % de ses données étaient saisies différemment selon le collecteur. Il a fallu d'abord nettoyer les données avant toute automatisation.\n\nLe niveau de risque compte aussi. Utiliser l'IA pour rédiger un premier brouillon de rapport interne est peu risqué : un humain relit et corrige. Utiliser l'IA pour décider seule qui reçoit une aide alimentaire est très risqué : des erreurs peuvent priver des familles vulnérables de leur droit. Gardez toujours un humain responsable pour les décisions qui touchent directement des personnes. C'est comme le contrôle qualité dans une coopérative de cacao : on vérifie avant d'exporter."
      },
      {
        "title": "Contraintes locales : tenir compte de la réalité du terrain",
        "body": "Un outil d'IA qui fonctionne parfaitement à Dakar ou Abidjan peut être inutilisable dans un bureau de district sans électricité stable. Avant de choisir une solution, posez-vous quatre questions pratiques : Y a-t-il une connexion internet fiable ? L'outil fonctionne-t-il hors ligne ou sur une connexion 2G ? Les agents de terrain ont-ils des smartphones ou seulement des téléphones basiques ?\n\nLa langue est une contrainte majeure souvent sous-estimée. La plupart des outils d'IA performent bien en français ou en anglais, mais beaucoup moins en haoussa, en mooré ou en bambara. Si vos bénéficiaires et vos agents s'expriment principalement en langue locale, vérifiez que l'outil choisi supporte cette langue ou prévoyez une étape de traduction dans votre processus. Des projets d'IA pour la santé au Niger ont montré l'importance d'intégrer le haoussa dès la conception.\n\nLe coût est souvent oublié dans les projets pilotes. Un abonnement à un outil d'IA peut sembler abordable en euros, mais représenter une part importante du budget d'une organisation locale. Explorez d'abord les versions gratuites ou les offres destinées aux ONG. Enfin, évaluez honnêtement les compétences disponibles dans votre équipe : même le meilleur outil est inutile si personne ne sait l'utiliser et si aucune formation n'est prévue. Un téléphone avec Orange Money ne sert à rien si on ne sait pas s'en servir — l'IA, c'est pareil."
      },
      {
        "title": "Conduite du changement : faire adopter l'IA par votre équipe",
        "body": "Introduire un outil d'IA dans une organisation, c'est d'abord un défi humain, pas technologique. Les résistances sont normales et légitimes : peur de perdre son travail, inquiétude face à quelque chose d'inconnu, méfiance envers un outil «qui se trompe parfois». Votre rôle de leader est d'écouter ces craintes, de les prendre au sérieux et de montrer par l'exemple.\n\nCommencez petit avec un pilote limité : une équipe, une tâche, un mois. Documentez les résultats honnêtement — ce qui a fonctionné et ce qui n'a pas fonctionné. Impliquez les utilisateurs finaux dès le début : ce sont eux qui connaissent le mieux les problèmes à résoudre. Une infirmière qui utilise l'IA pour rédiger ses rapports quotidiens sera la meilleure ambassadrice si elle a été associée au choix de l'outil.\n\nLa gouvernance légère est essentielle : définissez clairement qui a le droit d'utiliser l'outil, pour quelles tâches, avec quelles données, et qui vérifie les résultats. Ce n'est pas de la bureaucratie — c'est de la responsabilité. Pensez à une tontine bien organisée : chacun connaît son rôle, les règles sont claires et la confiance se construit au fil des cycles. Le passage à l'échelle vient naturellement une fois que le pilote a prouvé sa valeur et que l'équipe est à l'aise."
      }
    ],
    "example": {
      "title": "L'ONG SahelAction choisit son premier cas d'usage IA",
      "challenge": "SahelAction coordonne la distribution d'aide alimentaire dans trois régions du Niger. Chaque mois, l'équipe passe en moyenne 18 heures à trier manuellement des listes de bénéficiaires Excel pour éliminer les doublons, corriger les noms mal orthographiés et vérifier les critères d'éligibilité. Des erreurs passent parfois inaperçues, entraînant des doublons de distribution ou des exclusions injustes.",
      "solution": "L'équipe cartographie ses tâches chronophages et identifie le tri des listes comme candidat prioritaire : haute valeur (gain de temps important, réduction des erreurs), faible effort (les données existent déjà sous format Excel, une seule personne doit apprendre l'outil). Elle choisit un outil d'IA de nettoyage de données disponible en version gratuite pour les ONG. Un pilote d'un mois est lancé sur une seule région avec deux agents formés en une demi-journée. Un responsable valide manuellement un échantillon de 10 % des résultats chaque semaine.",
      "impact": "Au bout du premier mois, le temps de traitement des listes passe de 18 heures à 4 heures, soit un gain de 14 heures par cycle. Le taux d'erreurs détectées augmente de 60 % par rapport au tri manuel. Fort de ces résultats, SahelAction étend le pilote aux deux autres régions le mois suivant. En six mois, l'organisation économise l'équivalent de plus de 80 heures de travail, qu'elle redirige vers des visites terrain."
    },
    "practice": {
      "title": "Construire votre mini-matrice valeur / effort",
      "instructions": [
        "Sur votre téléphone, ouvrez une application de notes (Notes, Keep ou même un SMS à vous-même) et listez trois tâches répétitives de votre travail quotidien — par exemple : rédiger des comptes rendus, saisir des données de terrain, traduire des documents, chercher des informations dans des fichiers.",
        "Pour chacune des trois tâches, attribuez un score de 1 à 3 sur deux critères : Valeur (1 = peu utile, 3 = très utile si automatisée) et Effort (1 = facile à automatiser, 3 = très difficile). Notez ces scores à côté de chaque tâche dans votre application de notes.",
        "Identifiez la tâche avec le score Valeur le plus élevé et le score Effort le plus bas — c'est votre meilleur candidat pilote. Notez en une phrase pourquoi vous la choisissez et quelle donnée vous auriez besoin de rassembler pour commencer."
      ],
      "observation": "En faisant cet exercice, vous remarquerez peut-être que les tâches les plus répétitives ne sont pas toujours les plus faciles à automatiser — et que certaines tâches apparemment simples cachent des contraintes de données ou de langue. Cette prise de conscience est déjà une étape clé dans l'adoption responsable de l'IA."
    },
    "quiz": [
      {
        "question": "Quelle est la première question à se poser avant d'adopter un outil d'IA dans une organisation ?",
        "options": [
          {
            "key": "A",
            "text": "Quel est le coût mensuel de l'abonnement ?"
          },
          {
            "key": "B",
            "text": "Quelle technologie est la plus populaire sur le marché ?"
          },
          {
            "key": "C",
            "text": "Quels problèmes concrets de l'organisation l'IA peut-elle aider à résoudre ?"
          },
          {
            "key": "D",
            "text": "Combien d'employés savent déjà utiliser ce type d'outil ?"
          }
        ],
        "answer": "C",
        "explanation": "La bonne démarche part toujours des besoins réels de l'organisation, pas de la technologie disponible. Identifier les problèmes concrets permet de choisir le bon outil et d'éviter d'adopter une solution à la recherche d'un problème."
      },
      {
        "question": "Dans une matrice valeur / effort, quel type de cas d'usage faut-il prioriser en premier ?",
        "options": [
          {
            "key": "A",
            "text": "Effort élevé et valeur élevée"
          },
          {
            "key": "B",
            "text": "Effort faible et valeur faible"
          },
          {
            "key": "C",
            "text": "Effort élevé et valeur faible"
          },
          {
            "key": "D",
            "text": "Valeur élevée et effort faible"
          }
        ],
        "answer": "D",
        "explanation": "Les cas d'usage à haute valeur et faible effort sont les meilleurs candidats pour un pilote : ils offrent un retour rapide et visible avec un minimum de ressources et de risques. C'est la logique des «victoires rapides» qui créent de la confiance avant les projets plus ambitieux."
      },
      {
        "question": "Une ONG souhaite utiliser l'IA pour décider automatiquement et sans validation humaine qui reçoit une aide alimentaire d'urgence. Quelle est la principale raison de s'en méfier ?",
        "options": [
          {
            "key": "A",
            "text": "L'IA n'est pas capable de traiter des listes de noms."
          },
          {
            "key": "B",
            "text": "Ce cas d'usage présente un risque élevé : des erreurs peuvent priver des personnes vulnérables de leur droit à l'aide."
          },
          {
            "key": "C",
            "text": "Les outils d'IA sont trop coûteux pour ce type de tâche."
          },
          {
            "key": "D",
            "text": "Il faut d'abord disposer d'une connexion internet haut débit."
          }
        ],
        "answer": "B",
        "explanation": "Lorsqu'une décision touche directement des personnes vulnérables, le niveau de risque est élevé. L'IA peut assister la prise de décision, mais un humain doit rester responsable de la validation finale pour éviter des erreurs aux conséquences graves."
      },
      {
        "question": "Parmi les contraintes locales suivantes, laquelle est souvent sous-estimée lors du choix d'un outil d'IA en Afrique subsaharienne ?",
        "options": [
          {
            "key": "A",
            "text": "La langue des bénéficiaires et des agents de terrain"
          },
          {
            "key": "B",
            "text": "La couleur de l'interface de l'outil"
          },
          {
            "key": "C",
            "text": "Le nombre de fonctionnalités disponibles dans l'outil"
          },
          {
            "key": "D",
            "text": "La notoriété internationale du fournisseur de l'outil"
          }
        ],
        "answer": "A",
        "explanation": "La langue est une contrainte majeure souvent négligée. La plupart des outils d'IA sont optimisés pour le français ou l'anglais, et fonctionnent mal en haoussa, mooré ou bambara. Si vos équipes ou bénéficiaires travaillent en langue locale, cela doit être vérifié avant tout déploiement."
      },
      {
        "question": "Quelle approche est recommandée pour introduire un outil d'IA dans une équipe qui n'en a jamais utilisé ?",
        "options": [
          {
            "key": "A",
            "text": "Déployer immédiatement l'outil dans toute l'organisation pour maximiser l'impact."
          },
          {
            "key": "B",
            "text": "Attendre que tous les membres de l'équipe aient suivi une formation longue avant de commencer."
          },
          {
            "key": "C",
            "text": "Commencer par un pilote limité (une tâche, une équipe, une période courte) en impliquant les utilisateurs."
          },
          {
            "key": "D",
            "text": "Laisser chaque agent choisir librement son propre outil d'IA sans coordination."
          }
        ],
        "answer": "C",
        "explanation": "Un pilote limité permet de tester, d'apprendre et d'ajuster avec peu de risques. Impliquer les utilisateurs dès le début crée de la confiance et améliore l'adoption. Le passage à l'échelle vient naturellement une fois les résultats prouvés et l'équipe formée."
      }
    ],
    "reflection": "Pensez à une tâche dans votre organisation que vous jugez fastidieuse et qui revient régulièrement. Si vous deviez la confier à un assistant IA, quelles données lui fourniriez-vous ? Qui vérifierait son travail ? Et comment sauriez-vous que le résultat est fiable ? Répondre à ces trois questions, c'est déjà penser en responsable de l'IA.",
    "glossary": [
      {
        "term": "Cas d'usage",
        "definition": "Une situation concrète dans laquelle un outil ou une technologie est utilisé pour résoudre un problème précis. Par exemple : «utiliser l'IA pour détecter les doublons dans une liste de bénéficiaires» est un cas d'usage."
      },
      {
        "term": "ROI (Retour sur investissement)",
        "definition": "Mesure du bénéfice obtenu par rapport aux ressources investies (temps, argent, formation). Un ROI positif signifie que le projet rapporte plus qu'il ne coûte. En contexte ONG, le ROI peut inclure des gains non financiers comme du temps libéré pour le terrain."
      },
      {
        "term": "Pilote (POC)",
        "definition": "Un test à petite échelle d'une solution, avant de la déployer largement. Le pilote permet de vérifier que l'outil fonctionne dans votre contexte réel, d'identifier les problèmes tôt et de convaincre les équipes par des résultats concrets."
      },
      {
        "term": "Conduite du changement",
        "definition": "L'ensemble des actions menées pour accompagner une équipe ou une organisation à adopter une nouvelle pratique ou un nouvel outil. Inclut la communication, la formation, l'écoute des résistances et la célébration des succès."
      },
      {
        "term": "Gouvernance des données",
        "definition": "Les règles et responsabilités définissant comment les données sont collectées, stockées, utilisées et protégées dans une organisation. Une bonne gouvernance précise qui a accès à quelles données, pour quelles finalités et avec quelles mesures de sécurité."
      },
      {
        "term": "Passage à l'échelle",
        "definition": "Le processus par lequel un projet pilote réussi est étendu à un plus grand nombre d'utilisateurs, de régions ou de tâches. Le passage à l'échelle doit s'appuyer sur des résultats prouvés et une préparation suffisante des équipes et des systèmes."
      }
    ]
  },
  "en": {
    "id": "c4",
    "lessonNumber": 4,
    "title": "AI in Your Organization — Choosing the Right Use Cases",
    "objective": "By the end of this lesson, you will be able to identify the activities in your organization where AI can bring real value. You will know how to assess the feasibility of each opportunity, taking into account available data, field constraints, and level of risk. You will be able to prioritize a first pilot use case and prepare your team to adopt it gradually.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Mapping Use Cases: Where AI Truly Makes a Difference",
        "body": "Before adopting an AI tool, the first question is not «which technology should we choose?» but «where do we have problems that AI can solve?». Think about your working day: which repetitive tasks take up a lot of your time? Which reports come back every month with the same tables to fill in? Which information do you spend time searching for across dozens of files?\n\nAI creates value in three main ways. It saves time on repetitive tasks, such as translating forms from French into Hausa or summarizing long meeting minutes. It improves quality — for example, detecting errors in a beneficiary list before emergency aid is sent out. It broadens access, enabling a community health worker in a rural area to consult medical guidance in a local language without a permanent internet connection.\n\nImagine a storekeeper who spends every morning sorting hundreds of paper forms to find available stock. A simple automated search system would save them two hours a day. That is exactly it: AI as an intelligent assistant, not as a replacement for human work. In your organization, start by listing five tasks that drain your energy. Those are your first candidates."
      },
      {
        "title": "Prioritizing: Choosing the Right Use Case Before You Start",
        "body": "Not all ideas are equal. A simple matrix helps you choose: place each idea on two axes — the value it brings (time saved, quality, reach) and the effort it requires (available data, cost, skills needed). The best pilot candidates are those with high value and low effort.\n\nData availability is crucial. If you want to automate the sorting of beneficiary lists, do you already have those lists in digital form? Are they consistent and complete? An NGO in the Sahel that wanted to use AI to analyze nutrition data discovered that 40% of its data had been entered differently depending on the data collector. The data had to be cleaned before any automation could take place.\n\nThe level of risk also matters. Using AI to draft a first version of an internal report is low risk: a human reviews and corrects it. Using AI to decide alone who receives food assistance is very high risk: errors can deprive vulnerable families of their right to aid. Always keep a human responsible for decisions that directly affect people. It is like quality control in a cocoa cooperative: you check before you export."
      },
      {
        "title": "Local Constraints: Accounting for Field Realities",
        "body": "An AI tool that works perfectly in Dakar or Abidjan may be unusable in a district office without reliable electricity. Before choosing a solution, ask yourself four practical questions: Is there a reliable internet connection? Does the tool work offline or on a 2G connection? Do field agents have smartphones, or only basic phones?\n\nLanguage is a major constraint that is often underestimated. Most AI tools perform well in French or English, but far less so in Hausa, Mooré, or Bambara. If your beneficiaries and agents primarily communicate in a local language, verify that the chosen tool supports that language, or plan a translation step in your process. AI projects for health in Niger have shown how important it is to integrate Hausa from the design stage onward.\n\nCost is often overlooked in pilot projects. An AI tool subscription may seem affordable in euros, but can represent a significant share of a local organization's budget. First explore free versions or offers aimed at NGOs. Finally, honestly assess the skills available in your team: even the best tool is useless if no one knows how to use it and no training is planned. A phone with M-Pesa or Orange Money is useless if you do not know how to use it — AI is the same."
      },
      {
        "title": "Change Management: Getting Your Team to Adopt AI",
        "body": "Introducing an AI tool into an organization is first and foremost a human challenge, not a technological one. Resistance is normal and legitimate: fear of losing one's job, anxiety about something unknown, distrust of a tool that «sometimes makes mistakes». Your role as a leader is to listen to these concerns, take them seriously, and lead by example.\n\nStart small with a limited pilot: one team, one task, one month. Document results honestly — what worked and what did not. Involve end users from the start: they know the problems to be solved best. A nurse who uses AI to write her daily reports will be the best ambassador if she was involved in choosing the tool.\n\nLight governance is essential: clearly define who is allowed to use the tool, for which tasks, with which data, and who checks the results. This is not bureaucracy — it is accountability. Think of a well-organized tontine: everyone knows their role, the rules are clear, and trust builds with each cycle. Scaling up comes naturally once the pilot has proven its value and the team is comfortable."
      }
    ],
    "example": {
      "title": "The NGO SahelAction Chooses Its First AI Use Case",
      "challenge": "SahelAction coordinates food aid distribution across three regions of Niger. Each month, the team spends an average of 18 hours manually sorting Excel beneficiary lists to remove duplicates, correct misspelled names, and verify eligibility criteria. Errors sometimes go unnoticed, leading to duplicate distributions or unjust exclusions.",
      "solution": "The team maps its time-consuming tasks and identifies list sorting as the priority candidate: high value (significant time savings, error reduction), low effort (the data already exists in Excel format, only one person needs to learn the tool). They choose an AI data-cleaning tool available in a free version for NGOs. A one-month pilot is launched in a single region with two agents trained in half a day. A supervisor manually validates a 10% sample of results each week.",
      "impact": "After the first month, list processing time drops from 18 hours to 4 hours — a saving of 14 hours per cycle. The error detection rate increases by 60% compared to manual sorting. Encouraged by these results, SahelAction extends the pilot to the two other regions the following month. Over six months, the organization saves the equivalent of more than 80 hours of work, which it redirects toward field visits."
    },
    "practice": {
      "title": "Building Your Mini Value / Effort Matrix",
      "instructions": [
        "On your phone, open a notes application (Notes, Keep, or even a text message to yourself) and list three repetitive tasks from your daily work — for example: writing meeting minutes, entering field data, translating documents, searching for information across files.",
        "For each of the three tasks, assign a score from 1 to 3 on two criteria: Value (1 = not very useful, 3 = very useful if automated) and Effort (1 = easy to automate, 3 = very difficult). Write these scores next to each task in your notes application.",
        "Identify the task with the highest Value score and the lowest Effort score — this is your best pilot candidate. Write one sentence explaining why you chose it and what data you would need to gather to get started."
      ],
      "observation": "As you do this exercise, you may notice that the most repetitive tasks are not always the easiest to automate — and that some apparently simple tasks hide data or language constraints. This awareness is already a key step in the responsible adoption of AI."
    },
    "quiz": [
      {
        "question": "What is the first question to ask before adopting an AI tool in an organization?",
        "options": [
          {
            "key": "A",
            "text": "What is the monthly subscription cost?"
          },
          {
            "key": "B",
            "text": "Which technology is most popular on the market?"
          },
          {
            "key": "C",
            "text": "Which concrete problems in the organization can AI help solve?"
          },
          {
            "key": "D",
            "text": "How many employees already know how to use this type of tool?"
          }
        ],
        "answer": "C",
        "explanation": "The right approach always starts from the organization's real needs, not from the available technology. Identifying concrete problems allows you to choose the right tool and avoid adopting a solution looking for a problem."
      },
      {
        "question": "In a value / effort matrix, which type of use case should be prioritized first?",
        "options": [
          {
            "key": "A",
            "text": "High effort and high value"
          },
          {
            "key": "B",
            "text": "Low effort and low value"
          },
          {
            "key": "C",
            "text": "High effort and low value"
          },
          {
            "key": "D",
            "text": "High value and low effort"
          }
        ],
        "answer": "D",
        "explanation": "Use cases with high value and low effort are the best pilot candidates: they deliver quick, visible results with minimal resources and risk. This is the logic of 'quick wins' that build confidence before more ambitious projects."
      },
      {
        "question": "An NGO wants to use AI to automatically decide — with no human validation — who receives emergency food aid. What is the main reason to be cautious?",
        "options": [
          {
            "key": "A",
            "text": "AI is not capable of processing lists of names."
          },
          {
            "key": "B",
            "text": "This use case carries high risk: errors can deprive vulnerable people of their right to aid."
          },
          {
            "key": "C",
            "text": "AI tools are too expensive for this type of task."
          },
          {
            "key": "D",
            "text": "A high-speed internet connection is required first."
          }
        ],
        "answer": "B",
        "explanation": "When a decision directly affects vulnerable people, the risk level is high. AI can assist decision-making, but a human must remain responsible for the final validation to avoid errors with serious consequences."
      },
      {
        "question": "Among the following local constraints, which one is most often underestimated when choosing an AI tool in sub-Saharan Africa?",
        "options": [
          {
            "key": "A",
            "text": "The language of beneficiaries and field agents"
          },
          {
            "key": "B",
            "text": "The color of the tool's interface"
          },
          {
            "key": "C",
            "text": "The number of features available in the tool"
          },
          {
            "key": "D",
            "text": "The international reputation of the tool's provider"
          }
        ],
        "answer": "A",
        "explanation": "Language is a major constraint that is often overlooked. Most AI tools are optimized for French or English and perform poorly in Hausa, Mooré, or Bambara. If your teams or beneficiaries work in a local language, this must be verified before any deployment."
      },
      {
        "question": "What approach is recommended for introducing an AI tool to a team that has never used one?",
        "options": [
          {
            "key": "A",
            "text": "Deploy the tool immediately across the entire organization to maximize impact."
          },
          {
            "key": "B",
            "text": "Wait until all team members have completed a long training course before starting."
          },
          {
            "key": "C",
            "text": "Start with a limited pilot (one task, one team, a short period) involving the users."
          },
          {
            "key": "D",
            "text": "Let each agent freely choose their own AI tool without coordination."
          }
        ],
        "answer": "C",
        "explanation": "A limited pilot allows you to test, learn, and adjust with little risk. Involving users from the start builds trust and improves adoption. Scaling up comes naturally once results are proven and the team is trained."
      }
    ],
    "reflection": "Think of a task in your organization that you find tedious and that comes up regularly. If you were to hand it over to an AI assistant, what data would you give it? Who would check its work? And how would you know the result is reliable? Answering these three questions is already thinking like a responsible AI manager.",
    "glossary": [
      {
        "term": "Use Case",
        "definition": "A concrete situation in which a tool or technology is used to solve a specific problem. For example: 'using AI to detect duplicates in a beneficiary list' is a use case."
      },
      {
        "term": "ROI (Return on Investment)",
        "definition": "A measure of the benefit obtained relative to resources invested (time, money, training). A positive ROI means the project returns more than it costs. In an NGO context, ROI can include non-financial gains such as time freed up for fieldwork."
      },
      {
        "term": "Pilot (POC)",
        "definition": "A small-scale test of a solution before it is deployed widely. The pilot verifies that the tool works in your real-world context, identifies problems early, and convinces teams through concrete results."
      },
      {
        "term": "Change Management",
        "definition": "The set of actions taken to help a team or organization adopt a new practice or tool. Includes communication, training, listening to resistance, and celebrating successes."
      },
      {
        "term": "Data Governance",
        "definition": "The rules and responsibilities defining how data is collected, stored, used, and protected in an organization. Good governance specifies who has access to which data, for what purposes, and with what security measures."
      },
      {
        "term": "Scaling Up",
        "definition": "The process by which a successful pilot project is extended to a larger number of users, regions, or tasks. Scaling up must be based on proven results and adequate preparation of teams and systems."
      }
    ]
  },
  "ha": {
    "id": "c4",
    "lessonNumber": 4,
    "title": "AI a Cikin Ƙungiyarku — Zaɓar Ayyukan da Suka Dace",
    "objective": "A ƙarshen wannan darasi, za ku iya gano ayyukan da ke cikin ƙungiyarku inda AI zai iya kawo fa'ida ta gaske. Za ku san yadda ake kimanta yiwuwar kowane dama, tare da la'akari da bayanan da ake da su, ƙalubalen filin aiki, da matakin haɗari. Za ku iya zaɓar harka ta farko ta jarrabawa kuma ku shirya ƙungiyarku don karɓar canjin a hankali.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Zana Taswira ta Ayyuka: Inda AI Ke Canza Al'amura Gaske",
        "body": "Kafin ku karɓi kayan aiki na AI, tambayar farko ba ita ce «wace fasaha za mu zaɓa?» ba, sai dai «ina muke da matsaloli da AI zai iya taimaka wajen warware su?». Yi tunani game da yini naku na aiki: wane ayyuka masu maimaituwa suna ɗaukar lokaci mai yawa? Wane rahotoni ke dawowa kowane wata tare da teburin da ake cika su da hannu? Wane bayani kuke nema a cikin fayiloli da yawa?\n\nAI yana kawo fa'ida ta hanyoyi uku masu muhimmanci. Yana ɗaukar lokaci a ayyukan maimaituwa, kamar fassara fomoci daga Faransanci zuwa Hausa ko taƙaita bayanan taruka masu tsawo. Yana inganta inganci — misali, gano kurakurai a listan masu karɓar taimako kafin a aika agajin gaggawa. Yana faɗaɗa damar samun hidima, yana ba ma'aikacin kiwon lafiya na al'umma a yankin karkara damar samun jagoran likita a harshen gida ba tare da haɗin intanet na dindindin ba.\n\nKai wa a hankali wajen tunanin mai adana kayan da ke rarraba takardu ɗari da ɗari kowace safiya don neman kayan da ake da su. Tsarin neman ta atomatik mai sauƙi zai iya ceton shi sa'o'i biyu a rana. Wannan shi ne komai: AI a matsayin mataimaki mai hankali, ba maye gurbin aikin ɗan adam ba. A cikin ƙungiyarku, fara da jera ayyuka biyar da ke sa ku gajiya. Waɗannan su ne 'yan takara na farko."
      },
      {
        "title": "Fifita Zaɓi: Zaɓar Aikin da Ya Dace Kafin Farawa",
        "body": "Duk ra'ayoyi ba su da nauyi ɗaya. Teburin sauƙi yana taimakonku wajen zaɓa: sanya kowane ra'ayi a kan gatari biyu — fa'idar da yake kawo (lokaci da aka ceta, inganci, faɗin aiki) da ƙoƙarin da yake bukata (bayanan da ake da su, farashi, ƙwarewa da ake bukata). Mafi kyawun 'yan takara na jarrabawa su ne waɗanda ke da fa'ida mai girma da ƙoƙari kaɗan.\n\nSamuwar bayanan yana da matuƙar muhimmanci. Idan kuna son atomatik rarraban listan masu karɓar taimako, shin kuna da waɗannan listeddin a tsarin dijital? Shin sun dace kuma cikakku ne? Wata NGO a Sahel da ta so ta yi amfani da AI don nazarin bayanan abinci ta gano cewa 40% na bayanan ta an shigar da su daban-daban dangane da mai tattara bayanai. Dole ne a tsaftace bayanan kafin duk wani atomatik.\n\nMatakin haɗari ma yana da muhimmanci. Amfani da AI don rubuta daftarin farko na rahoto na ciki yana da haɗarin ƙasa: ɗan adam yana nazari kuma yana gyara. Amfani da AI don yanke shawara shi kaɗai game da wanda ya karɓi taimako na abinci yana da haɗari mai yawa: kurakurai na iya hana iyalai marasa ƙarfi daga haƙƙinsu na taimako. Koyaushe ku kiyaye ɗan adam ya zama mai alhakin yanke shawara da ke shafar mutane kai tsaye. Kamar binciken inganci a wata ƙungiyar goro ta cacao: ana duba kafin fitar da kaya."
      },
      {
        "title": "Ƙalubalen Gida: La'akari da Gaskiyar Filin Aiki",
        "body": "Kayan aiki na AI da ke aiki da kyau a Dakar ko Abidjan na iya zama bai amfana ba a ofishin gundumar da ba ta da wutar lantarki mai daidaito. Kafin zaɓar mafita, yi wa kanku waɗannan tambayoyi huɗu masu amfani: Shin akwai haɗin intanet mai inganci? Shin kayan aikin yana aiki ba tare da intanet ba ko a haɗin 2G? Shin ma'aikata a filin suna da wayoyin hannu (smartphones) ko kawai tarho na yau da kullum?\n\nHarshene babban ƙalubale ne da ake ƙasƙantar da shi sosai. Yawancin kayan aiki na AI suna aiki da kyau a Faransanci ko Ingilishi, amma sun yi ƙasa da yawa a Hausa, Mooré, ko Bambara. Idan masu karɓar taimakonku da ma'aikatanku suna yin magana da farko a harshen gida, tabbatar cewa kayan aikin da aka zaɓa yana goyan bayan wannan harshe, ko kuma shirya matakin fassara a cikin tsarinku. Ayyukan AI don kiwon lafiya a Nijar sun nuna muhimmancin haɗa Hausa tun daga matakin tsarawa.\n\nFarashi yawanci ana manta da shi a cikin ayyukan jarrabawa. Biyan kuɗin yabo ga kayan aiki na AI na iya zama mai araha a Yuro, amma na iya wakiltar wani muhimmin ɓangare na kasafin ƙungiyar gida. Da farko ku binciki sigogin kyauta ko tayin da aka nufa ga NGOs. A ƙarshe, kimanta ƙwarewar da ake da ita a cikin ƙungiyarku da gaskiya: ko da mafi kyawun kayan aiki yana da amfani idan babu wanda ya san yadda ake amfani da shi kuma babu horon da aka tsara. Wayar da M-Pesa ko Orange Money ba ta da amfani idan ba ka san yadda ake amfani da ita ba — AI shi ma haka yake."
      },
      {
        "title": "Gudanar da Canjin: Sa Ƙungiyarku Ta Karɓi AI",
        "body": "Gabatar da kayan aiki na AI a cikin ƙungiya, da farko dai ƙalubale ne na ɗan adam, ba na fasaha ba. Juriya abu ne na al'ada kuma na dacewar: tsoro na rasa aikin mutum, damuwa game da wani abu da ba a sani ba, rashin amana ga kayan aiki da «wani lokaci ke yin kuskure». Rawar ku a matsayin jagora ita ce sauraron waɗannan damuwa, ɗaukar su da muhimmanci, da nuna misali ta aikin da ku kanku.\n\nFara da ƙarami tare da jarrabawa iyakantacciya: ƙungiya ɗaya, aiki ɗaya, wata ɗaya. Rubuta sakamako da aminci — abin da ya yi aiki da abin da bai yi ba. Haɗa masu amfani na ƙarshe tun daga farko: su ne mafi sanin matsalolin da za a warware. Ma'aikaciyar jinya da ke amfani da AI don rubuta rahotonta na yau da kullum za ta zama mafi kyawun jakada idan an haɗa ta a zaɓin kayan aikin.\n\nGovernansi mai sauƙi yana da matuƙar muhimmanci: a bayyana wa zai iya amfani da kayan aikin, don wane ayyuka, da wane bayani, kuma wa zai duba sakamako. Wannan ba hukuma ba ne — alhakin ne. Yi tunani da tontine da aka tsara da kyau: kowa ya san rawarsa, ƙa'idoji sun bayyana, kuma amana tana gina kanta tare da kowane zagaye. Faɗaɗa ya zo da kansa lokacin da jarrabawa ta tabbatar da ƙimarsa kuma ƙungiyar ta saba da ita."
      }
    ],
    "example": {
      "title": "NGO SahelAction Na Zaɓar Aikin AI Na Farko",
      "challenge": "SahelAction tana daidaita rarraban agajin abinci a yankuna uku na Nijar. Kowane wata, ƙungiyar tana ɗaukar matsakaicin sa'o'i 18 wajen rarraba listan masu karɓar taimako na Excel da hannu don cire maimaitawa, gyara sunaye da aka rubuta kuskure, da tabbatar da sharuɗɗan cancanta. Wani lokaci kurakurai sun wuce ba a gane su ba, wanda ke haifar da rarraban maimaituwa ko keɓancewar da ba ta dace ba.",
      "solution": "Ƙungiyar tana zana ayyukanta masu ɗaukar lokaci kuma tana gano rarraban listan a matsayin 'dan takara mafi fifiko: fa'ida mai girma (adadin lokaci mai yawa, rage kurakurai), ƙoƙari kaɗan (bayanan sun riga sun wanzu a tsarin Excel, mutumin ɗaya kawai ya koya yin amfani da kayan aikin). Sun zaɓi kayan aiki na AI na tsaftace bayanan da ake samu a sigar kyauta ga NGOs. An kaddamar da jarrabawa ta wata ɗaya a yanki ɗaya tare da ma'aikata biyu da aka horar da su a cikin rabin rana. Mai kula yana tabbatar da samfuri na 10% na sakamako da hannu kowane mako.",
      "impact": "Bayan watan farko, lokacin sarrafa listan ya ragu daga sa'o'i 18 zuwa sa'o'i 4 — ceton sa'o'i 14 a kowane zagaye. Adadin kurakurai da aka gano ya ƙaru da 60% idan aka kwatanta da rarraba da hannu. Tare da waɗannan sakamako, SahelAction ta faɗaɗa jarrabawa zuwa wasu yankuna biyu a watan mai zuwa. A cikin watanni shida, ƙungiyar ta adana aiki mai daidaituwa da sa'o'i sama da 80, wanda take sake kai zuwa ziyarar filin."
    },
    "practice": {
      "title": "Gina Ƙananan Teburin Fa'ida / Ƙoƙari",
      "instructions": [
        "A wayarku, bude aikace-aikacen bayanin kula (Notes, Keep, ko ko da saƙon rubutu zuwa kanku) kuma jera ayyuka uku masu maimaituwa daga aikin yau da kullum — misali: rubuta rahotoni na taruka, shigar da bayanai daga filin, fassara takardu, neman bayani a cikin fayiloli.",
        "Ga kowane ɗayan ayyuka uku, ba da maki daga 1 zuwa 3 akan ma'auni biyu: Fa'ida (1 = ba ta da amfani sosai, 3 = mai amfani sosai idan aka atomatize) da Ƙoƙari (1 = sauƙi na atomatize, 3 = yana da wahala sosai). Rubuta waɗannan makiya kusa da kowane aiki a cikin aikace-aikacen bayanan kulanku.",
        "Gano aikin da ke da mafi girman maki na Fa'ida da ƙarancin maki na Ƙoƙari — wannan shine mafi kyawun 'dan takara na jarrabawarka. Rubuta jumla ɗaya da ke bayyana dalilin da ya sa ka zaɓe shi da kuma wane bayani kake bukata ka tara don farawa."
      ],
      "observation": "Yayin da kuke yin wannan atisaye, za ku iya lura cewa ayyukan mafi maimaituwa ba koyaushe suke mafi sauƙi na atomatize ba — kuma wasu ayyukan da suke bayyana sauƙi suna ɓoye ƙalubalen bayanan ko harshe. Wannan fahimta ta riga ta zama matakin muhimmi a karɓar AI da alhakin."
    },
    "quiz": [
      {
        "question": "Menene tambayar farko da za a yi kafin karɓar kayan aiki na AI a cikin ƙungiya?",
        "options": [
          {
            "key": "A",
            "text": "Menene farashi na biyan kuɗi na wata-wata?"
          },
          {
            "key": "B",
            "text": "Wace fasaha ce mafi shahara a kasuwa?"
          },
          {
            "key": "C",
            "text": "Wane matsaloli na gaske na ƙungiyar AI zai iya taimaka wajen warware su?"
          },
          {
            "key": "D",
            "text": "Yaya ma'aikata da suka riga suka san yadda ake amfani da irin wannan kayan aiki?"
          }
        ],
        "answer": "C",
        "explanation": "Hanyar da ta dace koyaushe tana farawa daga bukatun gaske na ƙungiyar, ba daga fasahar da ake da ita ba. Gano matsalolin gaske yana ba ka damar zaɓar kayan aikin da ya dace da gujewa karɓar mafita da ke neman matsala."
      },
      {
        "question": "A cikin teburin fa'ida / ƙoƙari, wane irin aiki ne ya kamata a fifita da farko?",
        "options": [
          {
            "key": "A",
            "text": "Ƙoƙari mai girma da fa'ida mai girma"
          },
          {
            "key": "B",
            "text": "Ƙoƙari kaɗan da fa'ida kaɗan"
          },
          {
            "key": "C",
            "text": "Ƙoƙari mai girma da fa'ida kaɗan"
          },
          {
            "key": "D",
            "text": "Fa'ida mai girma da ƙoƙari kaɗan"
          }
        ],
        "answer": "D",
        "explanation": "Ayyukan da ke da fa'ida mai girma da ƙoƙari kaɗan su ne mafi kyawun 'yan takara na jarrabawa: suna ba da sakamako mai sauri kuma bayyananne tare da ƙarancin albarkatu da haɗari. Wannan shine ma'anar 'nasarori masu sauri' da ke gina amana kafin ayyukan mafi girma."
      },
      {
        "question": "Wata NGO tana son amfani da AI don yanke shawara kai tsaye — ba tare da tabbatarwa ta ɗan adam ba — game da wanda ya karɓi agajin abinci na gaggawa. Menene babban dalilin yin hankali?",
        "options": [
          {
            "key": "A",
            "text": "AI ba zai iya sarrafa listan sunayen mutane ba."
          },
          {
            "key": "B",
            "text": "Wannan aiki yana da haɗari mai girma: kurakurai na iya hana mutane masu rauni daga haƙƙinsu na taimako."
          },
          {
            "key": "C",
            "text": "Kayan aiki na AI sun yi tsada sosai don irin wannan aiki."
          },
          {
            "key": "D",
            "text": "Da farko ana bukata haɗin intanet mai sauri."
          }
        ],
        "answer": "B",
        "explanation": "Lokacin da yanke shawara ke shafar mutane masu rauni kai tsaye, matakin haɗari yana da girma. AI na iya taimakawa wajen yanke shawara, amma ɗan adam dole ne ya kasance mai alhakin tabbatarwa ta ƙarshe don guje wa kurakurai masu sakamakon tsanani."
      },
      {
        "question": "Daga cikin ƙalubalen gida masu zuwa, wanne ake ƙasƙantar da shi sosai lokacin zaɓar kayan aiki na AI a Afirka ta Kudu da Sahara?",
        "options": [
          {
            "key": "A",
            "text": "Harshan masu karɓar taimako da ma'aikata a filin"
          },
          {
            "key": "B",
            "text": "Launi na fuskar kayan aikin"
          },
          {
            "key": "C",
            "text": "Adadin fasaloli da ake da su a cikin kayan aikin"
          },
          {
            "key": "D",
            "text": "Shahara ta duniya ta mai ba da kayan aikin"
          }
        ],
        "answer": "A",
        "explanation": "Harshe babban ƙalubale ne da ake ƙasƙantar da shi sosai. Yawancin kayan aiki na AI an inganta su don Faransanci ko Ingilishi kuma suna aiki da ƙasa sosai a Hausa, Mooré, ko Bambara. Idan ƙungiyarku ko masu karɓar taimakon suna aiki a harshen gida, dole ne a tabbatar da wannan kafin duk wani tura."
      },
      {
        "question": "Wace hanya ake ba da shawara don gabatar da kayan aiki na AI ga ƙungiyar da ba ta taɓa amfani da shi ba?",
        "options": [
          {
            "key": "A",
            "text": "Tura kayan aikin nan da nan a cikin dukkan ƙungiyar don ƙara tasiri."
          },
          {
            "key": "B",
            "text": "Jira har duk membobin ƙungiyar sun kammala horon mai tsawo kafin farawa."
          },
          {
            "key": "C",
            "text": "Fara da jarrabawa iyakantacciya (aiki ɗaya, ƙungiya ɗaya, lokaci ɗan gajere) tare da haɗa masu amfani."
          },
          {
            "key": "D",
            "text": "Bar kowane ma'aikaci ya zaɓi kayan aiki nasa na AI ba tare da daidaitawa ba."
          }
        ],
        "answer": "C",
        "explanation": "Jarrabawa iyakantacciya tana ba ka damar gwaji, koyo, da daidaitawa tare da ƙarancin haɗari. Haɗa masu amfani tun daga farko yana gina amana kuma yana inganta karɓa. Faɗaɗa yana zuwa da kansa lokacin da sakamakon ya tabbata kuma ƙungiyar ta samu horo."
      }
    ],
    "reflection": "Yi tunani game da wani aiki a cikin ƙungiyarku da kuke gani yana gajiye kuma yana dawowa akai-akai. Idan za ku ba mataimaki na AI wannan aiki, wane bayani za ku ba shi? Wa zai duba aikinsa? Kuma ta yaya za ku san cewa sakamakon yana da inganci? Amsawa waɗannan tambayoyi uku ta riga ta nufin tunani kamar mai alhakin AI.",
    "glossary": [
      {
        "term": "Aiki (Cas d'usage)",
        "definition": "Yanayi na gaske wanda ake amfani da kayan aiki ko fasaha don warware wata matsala ta musamman. Misali: 'amfani da AI don gano maimaitawa a cikin listan masu karɓar taimako' wani aiki ne."
      },
      {
        "term": "ROI (Dawowar Jari)",
        "definition": "Auna amfanin da aka samu dangane da albarkatu da aka zuba (lokaci, kuɗi, horo). ROI mai kyau yana nufin aikin yana dawo da fiye da farashinta. A mahallin NGO, ROI na iya haɗa fa'idodin da ba na kuɗi ba kamar lokaci da aka 'yantar don aiki a filin."
      },
      {
        "term": "Jarrabawa (Pilote / POC)",
        "definition": "Gwajin mafita a ƙaramin sikeli kafin tura ta ko'ina. Jarrabawa tana tabbatar da cewa kayan aikin yana aiki a yanayin gaske, gano matsaloli da wuri, kuma ta gamsar da ƙungiyoyi ta hanyar sakamakon gaske."
      },
      {
        "term": "Gudanar da Canjin (Conduite du changement)",
        "definition": "Dukkan ayyukan da aka ɗauka don taimaka wa ƙungiya ko organizeyshan karɓar sabuwar al'ada ko kayan aiki. Yana haɗa sadarwa, horo, sauraren juriya, da bikin nasarori."
      },
      {
        "term": "Governance na Bayanai (Gouvernance des données)",
        "definition": "Ka'idoji da alhakai da ke bayyana yadda ake tattara, adana, amfani da, da kare bayanan a cikin ƙungiya. Governance mai kyau tana bayyana wa zai iya samun dama ga wane bayani, don wane manufofi, da tare da wane matakan tsaro."
      },
      {
        "term": "Faɗaɗa (Passage à l'échelle)",
        "definition": "Tsarin da aikin jarrabawa mai nasara ke faɗaɗa zuwa yawan masu amfani, yankuna, ko ayyuka mafi yawa. Faɗaɗa dole ne ya dogara da sakamakon da aka tabbatar da kuma shirye-shiryen isasshe na ƙungiyoyi da tsarukan."
      }
    ]
  }
};
