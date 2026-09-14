import { Language } from '../translations';
import { LessonContent } from '../lessonContent';

// Module 1 « Intelligence Artificielle » — leçon c8 (Évaluation finale — validez vos acquis et obtenez votre certificat)
// Trilingue FR / EN / HA. ⚠️ Traductions HA à faire valider par un locuteur natif haoussa.
export const iaLessonC8: Record<Language, LessonContent> = {
  "fr": {
    "id": "c8",
    "lessonNumber": 8,
    "title": "Évaluation finale — validez vos acquis et obtenez votre certificat",
    "objective": "À l'issue de cette leçon, vous serez capable de mobiliser l'ensemble des connaissances acquises dans les leçons 1 à 7 pour répondre à des situations concrètes du secteur humanitaire et du développement. Vous démontrerez votre compréhension de l'intelligence artificielle, des grands modèles de langage, des cas d'usage pratiques et des enjeux éthiques. Cette évaluation valide votre maîtrise du module complet et débloque votre certificat numérique vérifiable Karatou Academy.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "L'essentiel de l'IA — définition, machine learning et IA générative",
        "body": "L'intelligence artificielle, c'est la capacité d'une machine à réaliser des tâches qui nécessitent normalement l'intelligence humaine : reconnaître une image, comprendre un texte, prendre une décision. Ce n'est pas de la magie ; c'est de la statistique et des données. Pensez à un agent de santé communautaire qui apprend à identifier les signes de malnutrition en examinant des centaines de cas : la machine fait exactement cela, mais avec des millions d'exemples.\n\nLe machine learning (apprentissage automatique) est le moteur principal de l'IA moderne. Au lieu de programmer des règles à la main, on fournit des exemples au système — comme des données de récolte de manioc sur dix saisons — et il apprend tout seul à repérer des tendances. Plus les données sont représentatives de vos réalités locales, meilleur est le résultat.\n\nL'IA générative va plus loin : elle ne se contente pas de classer ou prédire, elle crée — du texte, des images, du code. Les outils comme les LLM (grands modèles de langage) appartiennent à cette catégorie. Ils sont utiles pour rédiger des rapports, traduire vers le haoussa ou le français, ou résumer des procès-verbaux de réunion de terrain. Mais ils ont des limites : ils peuvent se tromper avec confiance, et leurs données d'entraînement s'arrêtent à une date précise."
      },
      {
        "title": "LLM et prompts — tirer le meilleur des modèles de langage",
        "body": "Un LLM, c'est comme un assistant très cultivé qui a lu une bibliothèque entière mais qui n'a jamais mis les pieds sur le terrain. Il connaît beaucoup de choses de façon générale, mais il ne connaît pas votre village, votre budget ni vos bénéficiaires. C'est à vous de lui donner ce contexte.\n\nUn bon prompt, c'est une instruction claire, contextualisée et précise. Comparez : « Écris un rapport » versus « Tu es un chargé de suivi-évaluation dans une ONG au Niger. Rédige un résumé d'une page du rapport de terrain du mois de mars, destiné à un bailleur de fonds institutionnel, en insistant sur les indicateurs de nutrition infantile. » Le second prompt produit un résultat dix fois plus utile. Donnez le rôle, le contexte, le format attendu et les contraintes.\n\nLes limites des LLM sont réelles : hallucinations (inventions présentées comme des faits), biais liés aux données d'entraînement souvent occidentales, impossibilité d'accéder à des données récentes ou confidentielles sans outils spécifiques. La règle d'or : vérifiez toujours les informations critiques auprès de sources officielles avant de les utiliser dans un document officiel ou une décision qui affecte des bénéficiaires."
      },
      {
        "title": "Déployer et automatiser — cas d'usage, priorisation et human-in-the-loop",
        "body": "Identifier le bon cas d'usage, c'est la moitié du travail. La méthode consiste à choisir des tâches répétitives, chronophages, à faible risque pour commencer — comme la saisie de données de distribution de vivres, la traduction de formulaires, ou la génération de modèles de comptes rendus. On priorise avec une grille simple : impact potentiel versus faisabilité et risque. Ce n'est pas l'outil le plus sophistiqué qui gagne, c'est celui qui convient à votre contexte, y compris en zone de faible connectivité.\n\nL'automatisation ne signifie pas « sans humain ». Le principe du human-in-the-loop (humain dans la boucle) est fondamental : un outil IA peut préparer un premier jet, classer des données ou envoyer une alerte, mais une personne qualifiée doit valider avant toute action importante. C'est comme un transfert Orange Money : le système traite la transaction, mais vous vérifiez le montant et le destinataire avant de confirmer.\n\nDans les contextes humanitaires, les décisions qui affectent des bénéficiaires — attribution d'aide, signalement de protection, orientation médicale — ne doivent jamais être entièrement déléguées à une machine. L'IA peut aider à traiter l'information plus vite ; le jugement éthique reste humain."
      },
      {
        "title": "Responsabilité et choix d'outils — biais, données et éthique en pratique",
        "body": "Les biais dans l'IA ne sont pas une anomalie technique abstraite : ce sont les inégalités du monde réel encodées dans les données. Un modèle entraîné sur des données de santé essentiellement urbaines et occidentales donnera de moins bons résultats pour une communauté rurale du Sahel. Identifier ces biais est une responsabilité professionnelle, pas optionnelle.\n\nLa protection des données des bénéficiaires est non négociable. Avant d'utiliser un outil IA avec des données personnelles — noms, statuts de vulnérabilité, localisations — posez ces trois questions : Où sont stockées ces données ? Qui y a accès ? Sont-elles conformes aux réglementations locales et aux principes humanitaires ? Ne collez jamais de données sensibles dans un outil grand public non sécurisé, de la même façon que vous ne laisseriez pas un dossier médical sur une table de marché.\n\nChoisir un outil IA, c'est aussi choisir un fournisseur. Évaluez : la politique de confidentialité, la disponibilité hors ligne, le coût réel (y compris en données mobiles), le support dans vos langues de travail, et la capacité à fonctionner sur les appareils disponibles dans votre organisation. Un outil parfait sur papier mais inutilisable en zone rurale sans WiFi n'est pas le bon outil. Privilégiez toujours l'outil adapté à votre contexte réel."
      }
    ],
    "example": {
      "title": "Cas transversal — La coordination régionale de l'ONG SahelAid déploie l'IA de bout en bout",
      "challenge": "SahelAid coordonne la réponse nutritionnelle dans trois régions du Niger avec 45 agents de terrain. Chaque semaine, les agents remplissent des fiches papier de 120 enfants chacun. La saisie, la traduction (haoussa → français) et la rédaction du rapport hebdomadaire pour le bailleur prennent 14 heures de travail cumulées au coordinateur. Les erreurs de saisie représentent environ 12 % des données. Le coordinateur se demande comment l'IA peut l'aider sans mettre en danger les données des bénéficiaires.",
      "solution": "L'équipe suit une démarche en quatre étapes. Étape 1 — Choix du cas d'usage : ils priorisent la transcription et la traduction automatique des fiches, tâche répétitive et à faible risque immédiat. Étape 2 — Prompt structuré : le coordinateur rédige un prompt précis — « Tu es un assistant de suivi nutritionnel. Traduis cette fiche de terrain du haoussa vers le français, préserve tous les chiffres, signale toute donnée manquante ou incohérente par [?]. » Étape 3 — Automatisation avec human-in-the-loop : un outil de traitement de formulaires génère le brouillon ; le coordinateur valide chaque fiche avant intégration dans la base de données. Les données ne quittent jamais le serveur local sécurisé de l'ONG. Étape 4 — Choix d'outil responsable : l'outil retenu fonctionne hors ligne, est hébergé localement, et son fournisseur a signé un accord de traitement de données conforme aux normes CICR.",
      "impact": "Après huit semaines de déploiement : le temps de traitement hebdomadaire est passé de 14 heures à 4 heures, soit une réduction de 71 %. Le taux d'erreur de saisie est tombé à moins de 3 %. Le coordinateur consacre désormais 10 heures supplémentaires par semaine à l'analyse et à la décision. Aucune donnée bénéficiaire n'a quitté le périmètre sécurisé. Le rapport bailleur est produit le mardi au lieu du vendredi, accélérant les décisions d'approvisionnement."
    },
    "practice": {
      "title": "Mon plan personnel d'adoption de l'IA — 30 jours pour commencer",
      "instructions": [
        "Identifiez dans votre travail quotidien UNE tâche répétitive et chronophage (rédaction, traduction, résumé, saisie de données) qui serait un bon premier cas d'usage pour l'IA. Notez pourquoi vous l'avez choisie et quel gain de temps vous espérez.",
        "Choisissez UN outil IA adapté à votre contexte (fonctionnel hors ligne si nécessaire, compatible avec vos appareils, respectueux de la confidentialité des données) et formulez UN prompt structuré que vous utiliserez pour ce cas d'usage. Testez-le et notez ce qui fonctionne bien et ce qui nécessite un ajustement.",
        "Définissez UNE règle éthique concrète pour votre usage (ex. : « Je ne saisis jamais de données nominatives bénéficiaires dans cet outil ») et UN indicateur de succès mesurable à 30 jours (ex. : « Le rapport hebdomadaire est produit en moins de 2 heures »). Partagez ce plan avec un collègue pour un regard extérieur."
      ],
      "observation": "Un plan d'adoption réaliste vaut mieux qu'un projet ambitieux jamais mis en œuvre. Commencez petit, mesurez, ajustez. La confiance dans l'IA se construit par l'expérience directe, pas par la théorie. Notez vos observations dans un carnet — elles seront précieuses pour former vos collègues à leur tour."
    },
    "quiz": [
      {
        "question": "Leçon 1 — Quelle est la définition la plus juste de l'intelligence artificielle ?",
        "options": [
          {
            "key": "A",
            "text": "Un robot humanoïde capable de penser comme un être humain."
          },
          {
            "key": "B",
            "text": "Un ensemble de techniques permettant à une machine d'effectuer des tâches qui nécessitent normalement l'intelligence humaine, à partir de données et d'algorithmes."
          },
          {
            "key": "C",
            "text": "Un logiciel qui remplace entièrement le travail humain dans tous les domaines."
          },
          {
            "key": "D",
            "text": "Une base de données très grande qui stocke toutes les connaissances humaines."
          }
        ],
        "answer": "B",
        "explanation": "L'IA désigne des techniques — notamment le machine learning — qui permettent aux machines d'accomplir des tâches cognitives à partir de données. Ce n'est pas un robot humanoïde universel ni un remplacement total de l'humain. C'est un ensemble d'outils puissants mais limités et contextuels."
      },
      {
        "question": "Leçon 1 — Un modèle de prédiction des rendements agricoles au Sahel est entraîné uniquement sur des données de cultures européennes. Quel est le risque principal ?",
        "options": [
          {
            "key": "A",
            "text": "Le modèle sera trop lent à calculer."
          },
          {
            "key": "B",
            "text": "Le modèle produira des prédictions peu fiables pour les cultures sahéliennes, car les données d'entraînement ne reflètent pas les réalités locales."
          },
          {
            "key": "C",
            "text": "Le modèle consommera trop d'électricité."
          },
          {
            "key": "D",
            "text": "Le modèle ne pourra pas fonctionner sur téléphone mobile."
          }
        ],
        "answer": "B",
        "explanation": "La qualité d'un modèle de machine learning dépend directement de la représentativité de ses données d'entraînement. Des données européennes ne capturent pas les variétés locales, les cycles saisonniers sahéliens ni les pratiques agronomiques africaines. Le résultat sera biaisé et peu fiable pour ce contexte."
      },
      {
        "question": "Leçon 2 — Parmi les caractéristiques suivantes, laquelle est propre aux grands modèles de langage (LLM) ?",
        "options": [
          {
            "key": "A",
            "text": "Ils accèdent en temps réel à internet pour vérifier chaque information."
          },
          {
            "key": "B",
            "text": "Ils garantissent que toutes leurs réponses sont exactes et vérifiées."
          },
          {
            "key": "C",
            "text": "Ils génèrent du texte en prédisant le mot le plus probable à partir du contexte, ce qui peut produire des erreurs présentées avec confiance."
          },
          {
            "key": "D",
            "text": "Ils fonctionnent uniquement en anglais et ne peuvent pas traiter d'autres langues."
          }
        ],
        "answer": "C",
        "explanation": "Les LLM génèrent du texte par prédiction statistique, pas par raisonnement logique vérifié. Ils peuvent produire des affirmations fausses — appelées hallucinations — avec un ton assuré. Il est donc indispensable de vérifier les informations critiques auprès de sources fiables avant de les utiliser."
      },
      {
        "question": "Leçon 3 — Un coordinateur humanitaire veut utiliser un LLM pour rédiger un rapport de terrain. Quel prompt est le plus efficace ?",
        "options": [
          {
            "key": "A",
            "text": "« Rédige un rapport. »"
          },
          {
            "key": "B",
            "text": "« Aide-moi s'il te plaît. »"
          },
          {
            "key": "C",
            "text": "« Écris quelque chose sur la nutrition. »"
          },
          {
            "key": "D",
            "text": "« Tu es un chargé de suivi-évaluation dans une ONG au Niger. Rédige un résumé d'une page du rapport de terrain de mars, destiné à un bailleur institutionnel, en soulignant les indicateurs de nutrition infantile et les écarts par rapport aux cibles. »"
          }
        ],
        "answer": "D",
        "explanation": "Un prompt efficace précise le rôle attribué à l'IA, le contexte spécifique, le format attendu, le destinataire et les informations à mettre en avant. Le prompt D contient tous ces éléments. Les options A, B et C sont trop vagues pour produire un résultat exploitable."
      },
      {
        "question": "Leçon 4 — Quelle méthode est recommandée pour choisir un premier cas d'usage IA dans une organisation humanitaire ?",
        "options": [
          {
            "key": "A",
            "text": "Commencer par le cas d'usage le plus complexe pour montrer la puissance de l'IA."
          },
          {
            "key": "B",
            "text": "Choisir une tâche répétitive, chronophage et à faible risque immédiat, puis mesurer les gains avant d'élargir."
          },
          {
            "key": "C",
            "text": "Attendre que tous les collègues soient formés avant de démarrer."
          },
          {
            "key": "D",
            "text": "Utiliser l'outil le plus populaire sur le marché, indépendamment du contexte."
          }
        ],
        "answer": "B",
        "explanation": "La bonne pratique consiste à débuter par un cas d'usage simple, mesurable et peu risqué — par exemple la traduction de formulaires ou la génération de modèles de rapport. Cela permet d'apprendre, de construire la confiance de l'équipe et de démontrer la valeur avant de passer à des usages plus complexes."
      },
      {
        "question": "Leçon 5 — Que signifie le principe « human-in-the-loop » dans un contexte d'automatisation humanitaire ?",
        "options": [
          {
            "key": "A",
            "text": "L'IA prend toutes les décisions automatiquement sans intervention humaine pour gagner du temps."
          },
          {
            "key": "B",
            "text": "Un humain qualifié valide ou supervise les décisions importantes avant qu'elles ne soient appliquées, même si l'IA a préparé le travail."
          },
          {
            "key": "C",
            "text": "Les humains entrent les données manuellement sans utiliser d'outil numérique."
          },
          {
            "key": "D",
            "text": "L'IA ne peut fonctionner que si un humain est physiquement présent devant l'écran à tout moment."
          }
        ],
        "answer": "B",
        "explanation": "Le human-in-the-loop signifie que l'IA assiste mais ne décide pas seule sur les questions importantes. Un agent ou coordinateur valide les sorties de l'IA avant action. C'est particulièrement essentiel dans les contextes humanitaires où les erreurs peuvent avoir des conséquences directes sur des bénéficiaires vulnérables."
      },
      {
        "question": "Leçon 6 — Un outil IA produit systématiquement de meilleures recommandations pour les ménages urbains que pour les ménages ruraux dans une enquête de vulnérabilité. Quelle en est la cause la plus probable ?",
        "options": [
          {
            "key": "A",
            "text": "L'outil est délibérément programmé pour favoriser les zones urbaines."
          },
          {
            "key": "B",
            "text": "Les ménages ruraux ont refusé de participer à l'enquête."
          },
          {
            "key": "C",
            "text": "Les données d'entraînement du modèle surreprésentent les contextes urbains, créant un biais de représentativité."
          },
          {
            "key": "D",
            "text": "Les appareils mobiles fonctionnent moins bien en zone rurale."
          }
        ],
        "answer": "C",
        "explanation": "Les biais dans l'IA proviennent le plus souvent des données d'entraînement. Si ces données surreprésentent les contextes urbains, le modèle sera moins précis pour les réalités rurales. Identifier et corriger ces biais est une responsabilité éthique et professionnelle dans tout déploiement d'IA humanitaire."
      },
      {
        "question": "Leçon 6 — Vous devez analyser des listes de bénéficiaires avec noms et statuts de vulnérabilité. Quelle pratique est correcte ?",
        "options": [
          {
            "key": "A",
            "text": "Copier-coller les données dans n'importe quel outil IA gratuit disponible en ligne pour gagner du temps."
          },
          {
            "key": "B",
            "text": "Anonymiser ou pseudonymiser les données avant tout traitement par un outil IA, et utiliser uniquement des outils conformes à votre politique de protection des données."
          },
          {
            "key": "C",
            "text": "Partager les données avec un outil IA si l'interface est en HTTPS, cela suffit à garantir la confidentialité."
          },
          {
            "key": "D",
            "text": "Envoyer les données par email à l'outil IA pour un traitement plus sécurisé."
          }
        ],
        "answer": "B",
        "explanation": "Les données des bénéficiaires sont sensibles et protégées par les principes humanitaires et les réglementations applicables. Il faut anonymiser ou pseudonymiser avant traitement, et n'utiliser que des outils dont la politique de confidentialité et le stockage des données sont conformes à vos obligations. Le HTTPS seul ne suffit pas."
      },
      {
        "question": "Leçon 7 — Vous travaillez dans une zone avec une connectivité internet limitée et un budget de données mobiles restreint. Quel critère doit primer dans le choix d'un outil IA ?",
        "options": [
          {
            "key": "A",
            "text": "Le nombre d'abonnés sur les réseaux sociaux du fournisseur."
          },
          {
            "key": "B",
            "text": "Le fait que l'outil soit le plus récent sur le marché."
          },
          {
            "key": "C",
            "text": "La capacité de l'outil à fonctionner hors ligne ou avec une faible consommation de données, ainsi que sa compatibilité avec les appareils disponibles dans l'organisation."
          },
          {
            "key": "D",
            "text": "La popularité de l'outil auprès des équipes basées à Paris ou New York."
          }
        ],
        "answer": "C",
        "explanation": "Dans les contextes de faible connectivité, le premier critère de sélection d'un outil est son fonctionnement hors ligne ou en mode faible bande passante, et sa compatibilité avec les appareils réellement disponibles. Un outil inutilisable sur le terrain n'a aucune valeur, quelle que soit sa sophistication technique."
      }
    ],
    "reflection": "Vous venez de parcourir les sept leçons du module : ce qu'est l'IA et ce qu'elle ne sait pas faire, le fonctionnement des modèles de langage, l'écriture de consignes claires, le choix d'un cas d'usage, l'automatisation avec un humain dans la boucle, l'éthique et le choix des outils. Parmi tout cela, quelle est la seule chose que vous mettrez réellement en pratique dans les trente prochains jours ? Quelle tâche confierez-vous à l'IA, quel garde-fou poserez-vous pour protéger les données des personnes concernées, et à quel signe concret saurez-vous, dans un mois, que c'était le bon choix ?",
    "glossary": [
      {
        "term": "Intelligence artificielle (IA)",
        "definition": "Ensemble de techniques permettant à une machine d'accomplir des tâches qui nécessitent normalement l'intelligence humaine, comme reconnaître des images, comprendre du texte ou prendre des décisions, à partir de données et d'algorithmes."
      },
      {
        "term": "Machine learning (apprentissage automatique)",
        "definition": "Branche de l'IA où le système apprend à partir d'exemples et de données, sans être explicitement programmé pour chaque règle. Plus les données sont représentatives, plus le modèle est précis."
      },
      {
        "term": "IA générative",
        "definition": "Catégorie d'IA capable de créer de nouveaux contenus — textes, images, code — à partir d'une instruction. Les outils de rédaction automatique et de traduction appartiennent à cette catégorie."
      },
      {
        "term": "LLM (Grand modèle de langage)",
        "definition": "Modèle d'IA générative entraîné sur de très grandes quantités de texte pour comprendre et produire du langage naturel. Il peut rédiger, résumer, traduire, mais peut aussi halluciner — inventer des informations incorrectes avec confiance."
      },
      {
        "term": "Prompt",
        "definition": "Instruction ou consigne donnée à un outil d'IA pour obtenir un résultat précis. Un bon prompt précise le rôle, le contexte, le format attendu et les contraintes. La qualité du prompt détermine largement la qualité de la réponse."
      },
      {
        "term": "Human-in-the-loop (Humain dans la boucle)",
        "definition": "Principe selon lequel un humain qualifié supervise, valide ou corrige les décisions ou productions de l'IA avant qu'elles ne soient appliquées, en particulier sur des décisions à fort enjeu."
      },
      {
        "term": "Biais algorithmique",
        "definition": "Erreur systématique dans les résultats d'un modèle IA due à des données d'entraînement non représentatives ou à des choix de conception inéquitables. Ces biais peuvent reproduire ou amplifier des inégalités existantes, par exemple entre zones urbaines et rurales."
      }
    ]
  },
  "en": {
    "id": "c8",
    "lessonNumber": 8,
    "title": "Final Assessment — Validate Your Learning and Earn Your Certificate",
    "objective": "By the end of this lesson, you will be able to draw on all the knowledge acquired in lessons 1 through 7 to respond to concrete situations in the humanitarian and development sector. You will demonstrate your understanding of artificial intelligence, large language models, practical use cases, and ethical issues. This assessment validates your mastery of the complete module and unlocks your verifiable digital certificate from Karatou Academy.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "AI Essentials — Definition, Machine Learning, and Generative AI",
        "body": "Artificial intelligence is a machine's ability to perform tasks that normally require human intelligence: recognizing an image, understanding text, making a decision. It is not magic; it is statistics and data. Think of a community health worker who learns to identify signs of malnutrition by examining hundreds of cases: the machine does exactly that, but with millions of examples.\n\nMachine learning is the main engine of modern AI. Instead of manually programming rules, you feed the system examples — such as cassava harvest data over ten seasons — and it learns on its own to spot patterns. The more representative the data is of your local realities, the better the result.\n\nGenerative AI goes further: it does not just classify or predict, it creates — text, images, code. Tools such as LLMs (large language models) belong to this category. They are useful for drafting reports, translating into Hausa or French, or summarizing field meeting minutes. But they have limits: they can be wrong with confidence, and their training data stops at a specific date."
      },
      {
        "title": "LLMs and Prompts — Getting the Most from Language Models",
        "body": "An LLM is like a very well-read assistant who has read an entire library but has never been in the field. It knows a great deal in general, but it does not know your village, your budget, or your beneficiaries. It is up to you to provide that context.\n\nA good prompt is a clear, contextualized, and precise instruction. Compare: 'Write a report' versus 'You are a monitoring and evaluation officer at an NGO in Niger. Write a one-page summary of the March field report, aimed at an institutional donor, emphasizing child nutrition indicators.' The second prompt produces a result ten times more useful. Give the role, the context, the expected format, and the constraints.\n\nThe limits of LLMs are real: hallucinations (fabrications presented as facts), biases linked to predominantly Western training data, inability to access recent or confidential data without specific tools. The golden rule: always verify critical information against official sources before using it in an official document or a decision that affects beneficiaries."
      },
      {
        "title": "Deploying and Automating — Use Cases, Prioritization, and Human-in-the-Loop",
        "body": "Identifying the right use case is half the work. The approach is to start with repetitive, time-consuming, low-risk tasks — such as entering food distribution data, translating forms, or generating report templates. Prioritization uses a simple grid: potential impact versus feasibility and risk. The most sophisticated tool does not win; the one that fits your context does, including in low-connectivity areas.\n\nAutomation does not mean 'without humans.' The human-in-the-loop principle is fundamental: an AI tool can prepare a first draft, classify data, or send an alert, but a qualified person must validate before any important action. It is like an Orange Money transfer: the system processes the transaction, but you check the amount and the recipient before confirming.\n\nIn humanitarian contexts, decisions affecting beneficiaries — aid allocation, protection referrals, medical triage — must never be entirely delegated to a machine. AI can help process information faster; ethical judgment remains human."
      },
      {
        "title": "Responsibility and Tool Selection — Bias, Data, and Ethics in Practice",
        "body": "Bias in AI is not an abstract technical anomaly: it is the real-world inequalities encoded in data. A model trained on predominantly urban and Western health data will perform worse for a rural Sahel community. Identifying these biases is a professional responsibility, not optional.\n\nProtecting beneficiary data is non-negotiable. Before using an AI tool with personal data — names, vulnerability statuses, locations — ask these three questions: Where is this data stored? Who has access to it? Does it comply with local regulations and humanitarian principles? Never paste sensitive data into an unsecured public tool, just as you would not leave a medical file on a market table.\n\nChoosing an AI tool also means choosing a provider. Evaluate: the privacy policy, offline availability, real cost (including mobile data usage), support in your working languages, and the ability to run on devices available in your organization. A tool that is perfect on paper but unusable in a rural area without WiFi is not the right tool. Always prioritize the tool that fits your actual context."
      }
    ],
    "example": {
      "title": "Transversal Case Study — The NGO SahelAid's Regional Coordination Deploys AI End-to-End",
      "challenge": "SahelAid coordinates the nutrition response across three regions of Niger with 45 field agents. Each week, agents fill out paper forms for 120 children each. Data entry, translation (Hausa to French), and drafting the weekly donor report take a cumulative 14 hours of the coordinator's time. Data entry errors account for approximately 12% of the data. The coordinator wonders how AI can help without putting beneficiary data at risk.",
      "solution": "The team follows a four-step approach. Step 1 — Use case selection: they prioritize automatic transcription and translation of forms, a repetitive task with low immediate risk. Step 2 — Structured prompt: the coordinator drafts a precise prompt — 'You are a nutrition monitoring assistant. Translate this field form from Hausa to French, preserve all figures, flag any missing or inconsistent data with [?].' Step 3 — Automation with human-in-the-loop: a form processing tool generates a draft; the coordinator validates each form before it is integrated into the database. Data never leaves the NGO's secure local server. Step 4 — Responsible tool selection: the chosen tool works offline, is locally hosted, and its provider has signed a data processing agreement compliant with ICRC standards.",
      "impact": "After eight weeks of deployment: weekly processing time dropped from 14 hours to 4 hours — a 71% reduction. The data entry error rate fell to under 3%. The coordinator now dedicates 10 additional hours per week to analysis and decision-making. No beneficiary data left the secure perimeter. The donor report is produced on Tuesday instead of Friday, accelerating procurement decisions."
    },
    "practice": {
      "title": "My Personal AI Adoption Plan — 30 Days to Get Started",
      "instructions": [
        "Identify ONE repetitive and time-consuming task in your daily work (drafting, translating, summarizing, data entry) that would be a good first AI use case. Write down why you chose it and what time savings you expect.",
        "Choose ONE AI tool suited to your context (functional offline if needed, compatible with your devices, respectful of data confidentiality) and draft ONE structured prompt you will use for this use case. Test it and note what works well and what needs adjustment.",
        "Define ONE concrete ethical rule for your usage (e.g., 'I never enter beneficiary names into this tool') and ONE measurable success indicator at 30 days (e.g., 'The weekly report is produced in under 2 hours'). Share this plan with a colleague for an outside perspective."
      ],
      "observation": "A realistic adoption plan is worth more than an ambitious project that never gets implemented. Start small, measure, adjust. Confidence in AI is built through direct experience, not theory. Keep notes in a journal — they will be valuable when training your colleagues in turn."
    },
    "quiz": [
      {
        "question": "Lesson 1 — Which is the most accurate definition of artificial intelligence?",
        "options": [
          {
            "key": "A",
            "text": "A humanoid robot capable of thinking like a human being."
          },
          {
            "key": "B",
            "text": "A set of techniques enabling a machine to perform tasks that normally require human intelligence, using data and algorithms."
          },
          {
            "key": "C",
            "text": "Software that completely replaces human work in all fields."
          },
          {
            "key": "D",
            "text": "A very large database that stores all human knowledge."
          }
        ],
        "answer": "B",
        "explanation": "AI refers to techniques — particularly machine learning — that enable machines to accomplish cognitive tasks using data. It is not a universal humanoid robot or a total replacement for humans. It is a set of powerful but limited and context-dependent tools."
      },
      {
        "question": "Lesson 1 — An agricultural yield prediction model for the Sahel is trained only on European crop data. What is the main risk?",
        "options": [
          {
            "key": "A",
            "text": "The model will be too slow to calculate."
          },
          {
            "key": "B",
            "text": "The model will produce unreliable predictions for Sahelian crops because the training data does not reflect local realities."
          },
          {
            "key": "C",
            "text": "The model will consume too much electricity."
          },
          {
            "key": "D",
            "text": "The model will not be able to run on a mobile phone."
          }
        ],
        "answer": "B",
        "explanation": "The quality of a machine learning model depends directly on how representative its training data is. European data does not capture local varieties, Sahelian seasonal cycles, or African agronomic practices. The result will be biased and unreliable for this context."
      },
      {
        "question": "Lesson 2 — Which of the following characteristics is specific to large language models (LLMs)?",
        "options": [
          {
            "key": "A",
            "text": "They access the internet in real time to verify every piece of information."
          },
          {
            "key": "B",
            "text": "They guarantee that all their answers are accurate and verified."
          },
          {
            "key": "C",
            "text": "They generate text by predicting the most likely word from context, which can produce errors presented with confidence."
          },
          {
            "key": "D",
            "text": "They only work in English and cannot process other languages."
          }
        ],
        "answer": "C",
        "explanation": "LLMs generate text through statistical prediction, not verified logical reasoning. They can produce false statements — called hallucinations — in a confident tone. It is therefore essential to verify critical information against reliable sources before using it."
      },
      {
        "question": "Lesson 3 — A humanitarian coordinator wants to use an LLM to write a field report. Which prompt is most effective?",
        "options": [
          {
            "key": "A",
            "text": "'Write a report.'"
          },
          {
            "key": "B",
            "text": "'Please help me.'"
          },
          {
            "key": "C",
            "text": "'Write something about nutrition.'"
          },
          {
            "key": "D",
            "text": "'You are a monitoring and evaluation officer at an NGO in Niger. Write a one-page summary of the March field report, aimed at an institutional donor, highlighting child nutrition indicators and gaps against targets.'"
          }
        ],
        "answer": "D",
        "explanation": "An effective prompt specifies the role assigned to the AI, the specific context, the expected format, the audience, and the key information to highlight. Option D contains all these elements. Options A, B, and C are too vague to produce a usable result."
      },
      {
        "question": "Lesson 4 — Which approach is recommended for selecting a first AI use case in a humanitarian organization?",
        "options": [
          {
            "key": "A",
            "text": "Start with the most complex use case to demonstrate the power of AI."
          },
          {
            "key": "B",
            "text": "Choose a repetitive, time-consuming task with low immediate risk, then measure gains before expanding."
          },
          {
            "key": "C",
            "text": "Wait until all colleagues are trained before starting."
          },
          {
            "key": "D",
            "text": "Use the most popular tool on the market, regardless of context."
          }
        ],
        "answer": "B",
        "explanation": "Best practice is to start with a simple, measurable, and low-risk use case — such as translating forms or generating report templates. This allows learning, building team confidence, and demonstrating value before moving to more complex uses."
      },
      {
        "question": "Lesson 5 — What does the 'human-in-the-loop' principle mean in a humanitarian automation context?",
        "options": [
          {
            "key": "A",
            "text": "AI makes all decisions automatically without human intervention to save time."
          },
          {
            "key": "B",
            "text": "A qualified human validates or supervises important decisions before they are applied, even if AI has prepared the work."
          },
          {
            "key": "C",
            "text": "Humans enter data manually without using any digital tools."
          },
          {
            "key": "D",
            "text": "AI can only operate if a human is physically present in front of the screen at all times."
          }
        ],
        "answer": "B",
        "explanation": "Human-in-the-loop means AI assists but does not decide alone on important matters. An agent or coordinator validates AI outputs before action. This is especially essential in humanitarian contexts where errors can have direct consequences for vulnerable beneficiaries."
      },
      {
        "question": "Lesson 6 — An AI tool consistently produces better recommendations for urban households than for rural households in a vulnerability survey. What is the most likely cause?",
        "options": [
          {
            "key": "A",
            "text": "The tool is deliberately programmed to favor urban areas."
          },
          {
            "key": "B",
            "text": "Rural households refused to participate in the survey."
          },
          {
            "key": "C",
            "text": "The model's training data over-represents urban contexts, creating a representativeness bias."
          },
          {
            "key": "D",
            "text": "Mobile devices perform less well in rural areas."
          }
        ],
        "answer": "C",
        "explanation": "Biases in AI most often come from training data. If that data over-represents urban contexts, the model will be less accurate for rural realities. Identifying and correcting these biases is an ethical and professional responsibility in any humanitarian AI deployment."
      },
      {
        "question": "Lesson 6 — You need to analyze beneficiary lists with names and vulnerability statuses. Which practice is correct?",
        "options": [
          {
            "key": "A",
            "text": "Copy and paste the data into any free AI tool available online to save time."
          },
          {
            "key": "B",
            "text": "Anonymize or pseudonymize the data before any AI tool processing, and only use tools compliant with your data protection policy."
          },
          {
            "key": "C",
            "text": "Sharing data with an AI tool is safe as long as the interface uses HTTPS."
          },
          {
            "key": "D",
            "text": "Send the data by email to the AI tool for more secure processing."
          }
        ],
        "answer": "B",
        "explanation": "Beneficiary data is sensitive and protected by humanitarian principles and applicable regulations. You must anonymize or pseudonymize before processing, and only use tools whose privacy policy and data storage meet your obligations. HTTPS alone is not sufficient."
      },
      {
        "question": "Lesson 7 — You work in an area with limited internet connectivity and a restricted mobile data budget. Which criterion should take priority when choosing an AI tool?",
        "options": [
          {
            "key": "A",
            "text": "The number of followers the provider has on social media."
          },
          {
            "key": "B",
            "text": "Whether the tool is the newest on the market."
          },
          {
            "key": "C",
            "text": "The tool's ability to work offline or with low data consumption, and its compatibility with devices available in the organization."
          },
          {
            "key": "D",
            "text": "The tool's popularity among teams based in Paris or New York."
          }
        ],
        "answer": "C",
        "explanation": "In low-connectivity contexts, the primary selection criterion for a tool is its ability to work offline or in low-bandwidth mode, and its compatibility with devices actually available in the field. A tool that cannot be used in the field has no value, regardless of its technical sophistication."
      }
    ],
    "reflection": "You have now worked through the seven lessons of this module: what AI is and what it cannot do, how language models work, writing clear instructions, choosing a use case, automating with a human in the loop, ethics, and picking your tools. Out of all of that, what is the one thing you will actually put into practice over the next thirty days? Which task will you hand to AI, which safeguard will you put in place to protect the data of the people involved, and what concrete sign will tell you, a month from now, that it was the right call?",
    "glossary": [
      {
        "term": "Artificial Intelligence (AI)",
        "definition": "A set of techniques that enable a machine to perform tasks normally requiring human intelligence — such as recognizing images, understanding text, or making decisions — using data and algorithms."
      },
      {
        "term": "Machine Learning",
        "definition": "A branch of AI in which the system learns from examples and data without being explicitly programmed for each rule. The more representative the data, the more accurate the model."
      },
      {
        "term": "Generative AI",
        "definition": "A category of AI capable of creating new content — texts, images, code — from an instruction. Automatic writing and translation tools belong to this category."
      },
      {
        "term": "LLM (Large Language Model)",
        "definition": "A generative AI model trained on very large amounts of text to understand and produce natural language. It can write, summarize, and translate, but can also hallucinate — inventing incorrect information with confidence."
      },
      {
        "term": "Prompt",
        "definition": "An instruction or directive given to an AI tool to obtain a specific result. A good prompt specifies the role, context, expected format, and constraints. Prompt quality largely determines response quality."
      },
      {
        "term": "Human-in-the-loop",
        "definition": "The principle by which a qualified human supervises, validates, or corrects AI decisions or outputs before they are applied, particularly on high-stakes decisions."
      },
      {
        "term": "Algorithmic Bias",
        "definition": "A systematic error in an AI model's results caused by non-representative training data or inequitable design choices. These biases can reproduce or amplify existing inequalities, for example between urban and rural areas."
      }
    ]
  },
  "ha": {
    "id": "c8",
    "lessonNumber": 8,
    "title": "Karshen Jarrabawa — Tabbatar da Abin da Ka Koya kuma Ka Sami Takardar Shedar Ka",
    "objective": "Bayan kammala wannan darasin, za ku iya amfani da dukan ilimin da kuka samu a darussan 1 zuwa 7 don magance matsalolin aiki na gaske a fannin agaji da ci gaban al'umma. Za ku nuna fahimtarku game da hankali na wucin gadi, manyan samfuran harshe, amfani na aiki, da tambayoyin da'a. Wannan jarrabawa tana tabbatar da cewa kun kware a dukan sashen, kuma tana bude takardar shedar dijital da za a iya tabbatar da ita ta Karatou Academy.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Abubuwan da suka fi muhimmanci game da AI — Ma'ana, koyon na'ura, da AI mai kirkirowa",
        "body": "Hankali na wucin gadi (AI) shi ne ikon na'ura ta aikata ayyuka da yawanci suna bukatar hankali na dan adam — kamar gane hoto, fahimtar rubutu, ko yanke shawara. Ba sihiri ba ne; lissafi ne da bayanai. Ku yi tunani game da ma'aikacin lafiya na al'umma wanda ya koyi gane alamomin karancin abinci ta hanyar duba daruruwan yanayi — na'ura tana yin haka daidai, amma da miliyoyin misalai.\n\nKoyon na'ura (machine learning) shi ne injin farko na AI na zamani. Maimakon rubuta dokokin a hannu, ana ba tsarin misalai — kamar bayanai na girbi rogo akan lokuta goma — kuma yana koyo da kansa don gano tsarin. Yadda bayanai suka zama wakilin gaskiyar ku ta wurin, haka sakamako yake kyau.\n\nAI mai kirkirowa ta wuce haka — ba ta rarrabawa ko hasashe kawai ba, tana kirkiro abubuwa — rubutu, hotuna, lambar kwamfuta. Kayan aiki kamar LLM (manyan samfuran harshe) na cikin wannan rukunin. Suna da amfani wajen rubuta rahotanni, fassara zuwa Hausa ko Faransanci, ko takaita bayanan taron filin aiki. Amma suna da iyakoki: suna iya yin kuskure da tabbaci, kuma bayanai da aka horar da su suna tsayawa a wani takamaiman kwanan wata."
      },
      {
        "title": "LLM da Prompts — Samun mafi kyau daga samfuran harshe",
        "body": "LLM ya yi kama da mataimaki mai ilimi wanda ya karanta dakin karatu duka amma bai taba zuwa filin aiki ba. Yana san abu mai yawa gaba daya, amma bai san kauyenku, kasafin kudinku, ko masu amfana da ku ba. Ku ne za ku ba shi wannan mahallin.\n\nPrompt mai kyau umarni ne a bayyane, tare da mahallin da ya dace, kuma na takamaiman bukata. Kwatanta: 'Rubuta rahoto' da 'Kai jami'in sa ido da kimantawa ne a wata NGO da ke Niger. Rubuta takaitaccen shafi daya na rahaton filin Maris, nufin mai ba da kudin waje, yana mai nuni ga alkaluman abinci na yara.' Prompt na biyu yana samar da sakamako mai amfani goma sau fiye. Ku ba shi rawa, mahallin, tsarin da ake tsammani, da iyakoki.\n\nIyakokin LLM suna gaske — hallucinations (kirkirar bayanai da aka gabatar a matsayin gaskiya), son zuciya saboda bayanai da aka horar da su da yawa daga Yamma, rashin iya samun bayanai na kwanan nan ko na sirri ba tare da kayan aiki na musamman ba. Ka'idar zinariya: ku koyaushe tabbatar da bayanan da suke da mahimmanci daga hukumomi kafin amfani da su a cikin wata takarda ta hukuma ko yanke shawara da ta shafi masu amfana."
      },
      {
        "title": "Tura da Atomatik — Amfani, Fifiko, da Dan Adam a cikin tsarin",
        "body": "Gano amfani da ya dace shi ne rabin aikin. Hanyar ita ce fara da ayyukan da ake maimaita su, da ke daukar lokaci, kuma masu hadarin kasa — kamar shigar da bayanai na rarraba abinci, fassara fom, ko kirkirar samfuran rahoto. Ana bada fifiko ta amfani da tsari mai sauki — tasirin da ake tsammani a kan yiwuwar aiwatarwa da hadari. Ba kayan aikin da ya fi inganci shi ne ya ci nasara ba; shi ne wanda ya dace da yanayin ku, ciki har da yankuna da hadin intanet yake kasa.\n\nAtomatik ba yana nufin 'ba tare da dan adam' ba. Ka'idar 'dan adam a cikin tsarin' (human-in-the-loop) tana da matukar muhimmanci — kayan aikin AI na iya shirya daftari na farko, rarrabawa bayanai, ko aika gargadi, amma wanda ya cancanta dole ne ya tabbatar kafin wani aikin da ya fi muhimmanci. Kamar canja wurin Orange Money — tsarin yana aiwatar da ma'amala, amma ku tabbatar da adadin kudin da mai karba kafin ku tabbatar.\n\nA yanayin agaji, yanke shawara da ta shafi masu amfana — ba da taimako, nuna kariya, ko kula da lafiya — ba za a bar su gaba daya a hannun na'ura ba. AI na iya taimakawa wajen sarrafa bayanai da sauri; hukunci na da'a yana kasancewa na dan adam."
      },
      {
        "title": "Alhakin da zabin kayan aiki — Son zuciya, bayanai, da da'a a aikace",
        "body": "Son zuciya a cikin AI ba wata matsalar fasaha ce mai wuyar fahimta ba — su ne rashin daidaiton duniya na gaske da aka rubuta a cikin bayanai. Samfuri da aka horar akan bayanai na lafiya da yawa daga birane na Yamma zai ba da sakamako mafi muni ga al'umma ta karkara a Sahel. Gano son zuciya na alhakin kwararru ne, ba zabi ba.\n\nKiyaye bayanai na masu amfana ba za a iya cinikin su ba. Kafin amfani da kayan aikin AI tare da bayanai na sirri — sunaye, yanayin rauni, wurare — ku tambayi wadannan tambayoyi guda uku: Ina aka adana wannan bayanan? Wa zai iya samun damar gani? Shin suna bin ka'idodin gida da ka'idodin agaji? Kada ku taba manne bayanai masu mahimmanci a cikin kayan aikin jama'a da ba su da tsaro — kamar yadda ba za ku bar fayil na kiwon lafiya a kan tebur na kasuwa ba.\n\nZabar kayan aikin AI yana nufin zabar mai samar da hidimomin ma. Kimanta — manufar sirri, samuwa ba tare da intanet ba, farashin ainihi (ciki har da amfanin bayanan waya), tallafi a cikin harsunanku na aiki, da ikon aiwatarwa akan na'urorin da suke samuwa a kungiyarku. Kayan aiki da ya kasance cikakke a takarda amma ba za a iya amfani da shi a karkara ba tare da WiFi ba, ba shi ne kayan aikin da ya dace ba. Ku koyaushe fifita kayan aikin da ya dace da yanayin ku na gaske."
      }
    ],
    "example": {
      "title": "Nazarin Hali na Hadin Kai — Hukumar NGO ta SahelAid ta tura AI daga farko zuwa karshe",
      "challenge": "SahelAid tana daidaita amsar abinci a yankuna uku na Niger tare da jami'ai 45 na filin aiki. Kowane mako, jami'ai suna cike fom na takarda don yara 120 kowane daya. Shigar bayanai, fassara (Hausa zuwa Faransanci), da rubuta rahoto mako-mako ga mai ba da kudi suna daukar awowi 14 da aka hada na mai daidaitawa. Kuskuren shigar bayanai sun kai kusan kashi 12 cikin dari na bayanai. Mai daidaitawa yana tambayar yadda AI zai iya taimaka ba tare da sanya bayanai na masu amfana cikin hadari ba.",
      "solution": "Kungiyar tana bin tsari mai matakai hudu. Matakin 1 — Zabin amfani: suna fifita fassarar atomatik da rubutun fom, aikin da ake maimaita shi tare da hadarin kasa nan take. Matakin 2 — Prompt tsararre: mai daidaitawa yana rubuta takamaiman prompt — 'Kai mataimakiyar sa ido ta abinci ne. Fassara wannan fom na filin daga Hausa zuwa Faransanci, kiyaye dukan lambobi, nuna duk bayanai da suka bace ko mara daidai da [?].' Matakin 3 — Atomatik tare da dan adam a cikin tsarin: kayan aikin sarrafa fom yana kirkirar daftari; mai daidaitawa yana tabbatar da kowane fom kafin a shigar da shi a cikin bayanan. Bayanai ba su taba barin uwar garken na gida masu aminci na NGO ba. Matakin 4 — Zabin kayan aiki mai alhakin: kayan aikin da aka zaba yana aiki ba tare da intanet ba, ana daukar sa a gida, kuma mai samar da shi ya sanya hannu kan yarjejeniyar sarrafa bayanai da ta dace da ka'idodin CICR.",
      "impact": "Bayan makonni takwas na tura: lokacin sarrafawa na mako-mako ya sauka daga awowi 14 zuwa 4 — raguwa ta kashi 71 cikin dari. Kimar kuskuren shigar bayanai ta fadi zuwa kasa da kashi 3 cikin dari. Mai daidaitawa yanzu yana karawa awowi 10 a mako don nazari da yanke shawara. Babu bayanai na masu amfana da suka bar kewayen mai aminci. Rahoto ga mai ba da kudi ana samar da shi ranar Talata maimakon Jumma'a, yana gaggauta yanke shawarwari na samar da kayan aiki."
    },
    "practice": {
      "title": "Tsarin Daukar AI na Sirri — Kwanaki 30 don Farawa",
      "instructions": [
        "Gano AIKIN daya na maimaita shi kuma mai daukar lokaci a aikinku na yau da kullun (rubuta, fassara, takaitawa, shigar bayanai) wanda zai kasance kyakkyawar farkon amfani da AI. Rubuta dalilin da ya sa kuka zabe shi da kuma adadin lokaci da kuke tsammani za ku cece.",
        "Zabi KAYAN AIKI daya na AI da ya dace da yanayin ku (yana aiki ba tare da intanet ba idan ana bukata, ya dace da na'urorinku, yana mutunta asirin bayanai) kuma rubuta PROMPT daya tsararre da za ku yi amfani da shi don wannan amfani. Ku gwada shi kuma ku rubuta abin da ke aiki da kyau da kuma abin da ke bukatan gyara.",
        "Ku ayyana KA'IDA daya na da'a a bayyane don amfaninku (misali: 'Ba zan taba shigar da sunaye na masu amfana a cikin wannan kayan aikin ba') da ALAMAR SUCCESS daya da za a iya auna a kwanaki 30 (misali: 'Rahoto na mako-mako ana kirkirar sa a kasa da awowi 2'). Ku raba wannan shirin tare da abokin aiki don neman ra'ayi daga waje."
      ],
      "observation": "Tsarin daukar da yake da gaskiya yana da daraja fiye da shirin mai tsanani da ba a taba aiwatar da shi ba. Fara kanana, auna, daidaita. Amincewa da AI ana gina ta ta hanyar gogewa ta kai tsaye, ba ka'ida kawai ba. Ku rubuta bayananku a cikin littafi — za su kasance masu daraja lokacin da kuke horar da abokan aikin ku."
    },
    "quiz": [
      {
        "question": "Darasin 1 — Wace ce ma'anar da ta fi daidai na hankali na wucin gadi?",
        "options": [
          {
            "key": "A",
            "text": "Wata na'ura mai kamannin dan adam wanda zai iya tunani kamar dan adam."
          },
          {
            "key": "B",
            "text": "Jerin hanyoyin da ke ba na'ura damar aikata ayyuka da yawanci suna bukatar hankali na dan adam, ta hanyar amfani da bayanai da algorithms."
          },
          {
            "key": "C",
            "text": "Shirye-shirye da ke maye gurbin aikin dan adam gaba daya a dukkan fannonin."
          },
          {
            "key": "D",
            "text": "Babban bayanan da ke adana dukan ilimin dan adam."
          }
        ],
        "answer": "B",
        "explanation": "AI tana nufin hanyoyi — musamman machine learning — da ke ba na'urori damar aikata ayyuka na fahimta ta amfani da bayanai. Ba ta'aziya ta duniya ba ce kuma ba cikakkiyar maye gurbin dan adam ba ce. Jerin kayan aiki ne masu karfi amma masu iyakoki kuma suna dogaro da yanayin da ake amfani da su."
      },
      {
        "question": "Darasin 1 — An horar da samfurin hasashen girbin noma a Sahel akan bayanan noma na Turai kawai. Menene mafi girman hadarin?",
        "options": [
          {
            "key": "A",
            "text": "Samfurin zai yi jinkiri wajen kididdiga."
          },
          {
            "key": "B",
            "text": "Samfurin zai samar da hasashe mara aminci ga noman Sahel, domin bayanai da aka yi amfani da su wajen horas da shi ba su wakilci gaskiyar gida ba."
          },
          {
            "key": "C",
            "text": "Samfurin zai cinye wutar lantarki mai yawa."
          },
          {
            "key": "D",
            "text": "Samfurin ba zai iya aiki a wayar hannu ba."
          }
        ],
        "answer": "B",
        "explanation": "Ingancin samfurin machine learning ya dogara kai tsaye akan yadda bayanai na horarwa suka wakilci gaskiya. Bayanai na Turai ba sa kama nau'ukan gida, lokutan damina na Sahel, ko ayyukan noma na Afirka. Sakamakon zai kasance mai son zuciya kuma mara aminci ga wannan yanayi."
      },
      {
        "question": "Darasin 2 — Daga cikin wadannan halaye, wanne ne na musamman ga manyan samfuran harshe (LLM)?",
        "options": [
          {
            "key": "A",
            "text": "Suna shiga intanet a ainihin lokaci don tabbatar da kowane bayani."
          },
          {
            "key": "B",
            "text": "Suna ba da tabbacin cewa dukkan amsunansu daidai ne kuma an tabbatar da su."
          },
          {
            "key": "C",
            "text": "Suna kirkirar rubutu ta hanyar hasashen kalmar da ta fi yiwuwa daga mahallin, wanda zai iya samar da kuskure da aka gabatar da su da tabbaci."
          },
          {
            "key": "D",
            "text": "Suna aiki ne kawai a Turanci kuma ba za su iya sarrafa wasu harsunan ba."
          }
        ],
        "answer": "C",
        "explanation": "LLM suna kirkirar rubutu ta hanyar hasashen lissafi, ba hujja ta dabaru mai tabbaci ba. Suna iya samar da fada karya — wanda ake kira hallucinations — da sautin da yake da yakini. Don haka yana da muhimmanci a tabbatar da bayanan da suka fi muhimmanci daga hukumomi kafin amfani da su."
      },
      {
        "question": "Darasin 3 — Mai daidaita agaji yana son amfani da LLM don rubuta rahoto na filin aiki. Wane prompt ne mafi inganci?",
        "options": [
          {
            "key": "A",
            "text": "'Rubuta rahoto.'"
          },
          {
            "key": "B",
            "text": "'Don Allah ka taimake ni.'"
          },
          {
            "key": "C",
            "text": "'Rubuta wani abu game da abinci.'"
          },
          {
            "key": "D",
            "text": "'Kai jami'in sa ido da kimantawa ne a wata NGO da ke Niger. Rubuta takaitaccen shafi daya na rahaton filin Maris, nufin mai ba da kudin waje, yana mai nuni ga alkaluman abinci na yara da gibin da ke akwai daga ga makasudai.'"
          }
        ],
        "answer": "D",
        "explanation": "Prompt mai inganci yana fayyace rawa da aka ba AI, takamaiman mahallin, tsarin da ake tsammani, mai sauraro, da bayanan da ya fi muhimmanci don nuni. Zabi D yana dauke da dukkan wadannan abubuwa. Zabubbukan A, B, da C sun yi kasa da kyau don samar da sakamako mai amfani."
      },
      {
        "question": "Darasin 4 — Wace hanya aka ba da shawarar don zabar farkon amfani da AI a kungiyar agaji?",
        "options": [
          {
            "key": "A",
            "text": "Fara da mafi hadaddun amfani don nuna karfin AI."
          },
          {
            "key": "B",
            "text": "Zabi aikin da ake maimaita shi, mai daukar lokaci, kuma mara hadarin kasa nan take, sannan a auna riba kafin a fadada."
          },
          {
            "key": "C",
            "text": "Jira har dukkan abokan aiki sun samu horo kafin fara."
          },
          {
            "key": "D",
            "text": "Yi amfani da kayan aikin da ya fi shahara a kasuwa, ba tare da la'akari da yanayi ba."
          }
        ],
        "answer": "B",
        "explanation": "Ka'idar da ta fi kyau ita ce fara da amfani mai sauki, za a iya aunawa, kuma mara hadari — kamar fassara fom ko kirkirar samfuran rahoto. Wannan yana ba damar koyo, gina amincin kungiya, da nuna daraja kafin tafiya zuwa amfani mai hadaddun yanayi."
      },
      {
        "question": "Darasin 5 — Menene ma'anar ka'idar 'dan adam a cikin tsarin' a yanayin atomatik na agaji?",
        "options": [
          {
            "key": "A",
            "text": "AI tana yanke dukkan shawarwari ta atomatik ba tare da sa hannun dan adam don adanawa lokaci ba."
          },
          {
            "key": "B",
            "text": "Dan adam mai cancanta yana tabbatar ko kula da muhimman shawarwari kafin a aiwatar da su, ko da AI ta shirya aiki."
          },
          {
            "key": "C",
            "text": "Dan adam yana shigar da bayanai da hannu ba tare da amfani da kayan aiki na dijital ba."
          },
          {
            "key": "D",
            "text": "AI na iya aiki ne kawai idan dan adam yana a gaban allon koyaushe."
          }
        ],
        "answer": "B",
        "explanation": "Human-in-the-loop yana nufin AI tana taimakawa amma ba ta yanke shawara kadai a kan muhimman al'amura ba. Jami'i ko mai daidaitawa yana tabbatar da abubuwan da AI ta samar kafin aiki. Wannan ya fi muhimmanci musamman a yanayin agaji inda kuskure zai iya yin tasiri kai tsaye a kan masu amfana masu rauni."
      },
      {
        "question": "Darasin 6 — Kayan aikin AI yana koyaushe kirkirar shawarwari mafi kyau ga gidaje na birane fiye da na karkara a binciken rauni. Menene mafi yiwuwar dalilin?",
        "options": [
          {
            "key": "A",
            "text": "An shirya kayan aikin da gangan don fifita yankunan birane."
          },
          {
            "key": "B",
            "text": "Gidaje na karkara sun ki shiga binciken."
          },
          {
            "key": "C",
            "text": "Bayanai da aka yi amfani da su wajen horar da samfurin suna wakiltar yanayin birane fiye da kima, suna kirkirar son zuciya na wakilci."
          },
          {
            "key": "D",
            "text": "Na'urori na waya ba sa aiki da kyau a yankunan karkara."
          }
        ],
        "answer": "C",
        "explanation": "Son zuciya a cikin AI yawanci yana fitowa daga bayanai na horarwa. Idan wadancan bayanai sun wakilci yanayin birane fiye da kima, samfurin ba zai yi daidai ba ga gaskiyar karkara. Gano da gyara wadannan son zuciya alhakin da'a ne na kwararru a kowace tura AI ta agaji."
      },
      {
        "question": "Darasin 6 — Kuna bukatar nazarin jerin masu amfana tare da sunaye da yanayin rauni. Wace ka'ida ce ta daidai?",
        "options": [
          {
            "key": "A",
            "text": "Kwafe kuma manna bayanai a cikin kowace kayan aikin AI ta kyauta da ake samu kan layi don adana lokaci."
          },
          {
            "key": "B",
            "text": "Cire sunayen ko sauya su kafin kowace sarrafa ta kayan aikin AI, kuma amfani kawai da kayan aikin da suka dace da manufar kiyaye bayananku."
          },
          {
            "key": "C",
            "text": "Raba bayanai tare da kayan aikin AI yana da aminci muddin allon yana amfani da HTTPS."
          },
          {
            "key": "D",
            "text": "Aika bayanai ta imel zuwa kayan aikin AI don sarrafa da ya fi aminci."
          }
        ],
        "answer": "B",
        "explanation": "Bayanai na masu amfana suna da matukar mahimmanci kuma ka'idodin agaji da dokokin da ake amfani da su suna kare su. Dole ne a cire sunayen ko sauya su kafin sarrafa, kuma a yi amfani kawai da kayan aikin da manufar sirri da adana bayanansu suka dace da alhakinku. HTTPS kadai bai isa ba."
      },
      {
        "question": "Darasin 7 — Kuna aiki a yankin da hadin intanet ke da iyaka kuma kasafin kudi na bayanan waya yana karami. Wane ma'auni ya kamata ya yi fifiko wajen zabar kayan aikin AI?",
        "options": [
          {
            "key": "A",
            "text": "Adadin mabiya da mai samar da kayan aikin yake da su a kafofin watsa labarai na zamani."
          },
          {
            "key": "B",
            "text": "Ko kayan aikin na sabon abu ne a kasuwa."
          },
          {
            "key": "C",
            "text": "Ikon kayan aikin na aiki ba tare da intanet ba ko tare da karancin amfanin bayanai, da kuma dacewarsa da na'urori da suke samuwa a kungiya."
          },
          {
            "key": "D",
            "text": "Shahararriyar kayan aikin a tsakanin kungiyoyi da ke Paris ko New York."
          }
        ],
        "answer": "C",
        "explanation": "A yanayin hadin intanet kasa, ma'aunin zabe na farko na kayan aiki shi ne ikon aiki ba tare da intanet ba ko a cikin karancin bandwidth, da kuma dacewarsa da na'urori da suke samuwa a filin aiki. Kayan aiki da ba za a iya amfani da shi a filin aiki ba yana da daraja sifili, ba tare da la'akari da ingancin fasaharsa ba."
      }
    ],
    "reflection": "Ka gama darussa bakwai na wannan sashe: menene AI da abin da ba ya iya yi, yadda samfuran harshe ke aiki, rubuta umarni bayyananne, zabar amfani da ya dace, sarrafa aiki tare da mutum a cikin da'irar, da'a, da zabar kayan aiki. Daga cikin duk wannan, menene abu daya da za ka aiwatar da gaske a cikin kwanaki talatin masu zuwa? Wane aiki za ka mika wa AI, wace kariya za ka sanya don kare bayanan mutanen da abin ya shafa, kuma wace alama bayyananniya za ta nuna maka, bayan wata daya, cewa zabinka ya yi daidai?",
    "glossary": [
      {
        "term": "Hankali na Wucin Gadi (AI)",
        "definition": "Jerin hanyoyi da ke ba na'ura damar aikata ayyuka da yawanci suna bukatar hankali na dan adam — kamar gane hotuna, fahimtar rubutu, ko yanke shawara — ta hanyar amfani da bayanai da algorithms."
      },
      {
        "term": "Machine Learning (Koyon Na'ura)",
        "definition": "Reshe na AI inda tsarin yake koyo daga misalai da bayanai ba tare da a shirya shi kai tsaye ga kowane doka ba. Yadda bayanai suka fi wakilci gaskiya, haka samfurin yake daidai."
      },
      {
        "term": "AI mai Kirkirowa (Generative AI)",
        "definition": "Nau'in AI wanda zai iya kirkirar sabon abun ciki — rubutu, hotuna, lambar kwamfuta — daga umarni. Kayan aiki na rubuta atomatik da fassara na cikin wannan rukunin."
      },
      {
        "term": "LLM (Babban Samfurin Harshe)",
        "definition": "Samfurin AI mai kirkirowa da aka horar akan adadi mai yawa na rubutu don fahimtar da samar da yaren halitta. Zai iya rubuta, takaita, da fassara, amma kuma zai iya hallucinate — kirkirar bayanan da ba daidai ba da tabbaci."
      },
      {
        "term": "Prompt",
        "definition": "Umarni ko jagorar da aka ba kayan aikin AI don samun takamaiman sakamako. Prompt mai kyau yana fayyace rawa, mahallin, tsarin da ake tsammani, da iyakoki. Ingancin prompt shi ne yake kayyade ingancin amsa."
      },
      {
        "term": "Dan Adam a Cikin Tsarin (Human-in-the-loop)",
        "definition": "Ka'idar da dan adam mai cancanta ke kula, tabbatarwa, ko gyara shawarwari ko abubuwan da AI ta samar kafin a aiwatar da su, musamman a kan shawarwari masu muhimmancin matuka."
      },
      {
        "term": "Son Zuciya na Algorithms (Algorithmic Bias)",
        "definition": "Kuskure na tsari a sakamakon samfurin AI saboda bayanai na horarwa da ba su wakilci gaskiya ko zabubbukan kira mara adalci. Wadannan son zuciya na iya maimaita ko kara rashin daidaiton da ke akwai, misali tsakanin birane da karkara."
      }
    ]
  }
};
