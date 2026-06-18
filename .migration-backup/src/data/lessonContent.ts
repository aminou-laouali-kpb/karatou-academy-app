export interface QuizQuestion {
  question: string;
  options: { key: string; text: string }[];
  answer: string;
  explanation: string;
}

export interface GlossaryItem {
  term: string;
  definition: string;
}

export interface LessonContent {
  id: string;
  lessonNumber: number;
  title: string;
  objective: string;
  video: {
    fr: string;
    en: string;
    ha: string;
  };
  content: {
    title: string;
    body: string;
  }[];
  example: {
    title: string;
    challenge: string;
    solution: string;
    impact: string;
  };
  practice: {
    title: string;
    instructions: string[];
    observation: string;
  };
  quiz: QuizQuestion[];
  reflection: string;
  glossary: GlossaryItem[];
}

export const lesson1: LessonContent = {
  id: "c1",
  lessonNumber: 1,
  title: "Introduction à l'IA — Qu'est-ce que c'est vraiment ?",
  objective:
    "L'objectif de cette leçon est de démystifier l'intelligence artificielle en définissant ses principes de base, son fonctionnement simplifié et ses applications concrètes dans le contexte du développement et de la vie quotidienne sur le continent africain.",
  video: {
    fr: "https://www.youtube.com/embed/kmSmJwpZAmY",
    en: "https://www.youtube.com/embed/BOLBYpEU190",
    ha: "https://www.youtube.com/embed/oeWtnEDdgeg",
  },
  content: [
    {
      title: "L'IA n'est pas de la science-fiction",
      body: "L'intelligence artificielle n'est pas un robot venu du futur, c'est un outil qui travaille déjà à vos côtés pour résoudre des problèmes concrets. Contrairement aux logiciels traditionnels qui suivent des règles fixes, l'IA désigne des systèmes informatiques capables d'effectuer des tâches nécessitant une forme d'intelligence humaine : comprendre le langage, reconnaître des images ou prendre des décisions.\n\nImaginez un gestionnaire de tontine qui, au fil des années, est capable de prédire qui sera ponctuel ou qui risque d'avoir des difficultés, simplement en observant les habitudes passées. C'est exactement ce que fait l'IA. Elle n'est pas \"magique\" ; elle traite des informations pour identifier des modèles (ou \"patterns\").\n\nEn Afrique, cette technologie est déjà une réalité utilisée par 93 % des professionnels humanitaires sondés en 2025 pour améliorer l'efficacité de leurs actions. Elle ne remplace pas l'empathie humaine, mais elle agit comme un assistant puissant capable de trier des milliers de listes de bénéficiaires ou de traduire instantanément des besoins urgents dans des zones reculées.",
    },
    {
      title: "Comment l'IA apprend",
      body: "Apprendre à une machine ne demande pas de formules mathématiques complexes pour l'utilisateur, mais énormément de données de qualité. Si l'IA est le moteur, les données sont son carburant. Le processus principal, appelé \"Machine Learning\" (apprentissage automatique), permet à l'ordinateur d'apprendre sans être explicitement programmé pour chaque détail.\n\nImaginez que vous montriez à un enfant des milliers de photos de feuilles de manioc saines et de feuilles malades. À force de répétition, l'enfant finit par reconnaître les signes d'une infection sans que vous n'ayez à lui expliquer chaque nervure. L'IA fonctionne de la même manière : elle \"vectorise\" les informations, c'est-à-dire qu'elle transforme des textes ou des images en représentations numériques pour les comparer.\n\nPour être fiable, ce système nécessite un \"pipeline\" de données robuste — une chaîne de nettoyage et de préparation qui garantit que l'information est fraîche et sans erreurs. Sans données propres, même le modèle le plus sophistiqué reste une coquille vide, incapable de produire des résultats pertinents pour votre communauté.",
    },
    {
      title: "L'IA que vous utilisez déjà",
      body: "Vous avez probablement déjà utilisé l'IA aujourd'hui sans même vous en rendre compte, car elle est intégrée dans vos applications préférées. Sur WhatsApp, les filtres antispam et les suggestions de mots reposent sur des modèles de langage. Lorsque vous utilisez Google Maps ou des outils SIG pour trouver l'itinéraire le plus rapide entre deux quartiers, une IA analyse en temps réel les flux de données pour optimiser votre trajet.\n\nPlus important encore, les services de Mobile Money comme M-Pesa ou Orange Money utilisent l'IA pour détecter les fraudes et sécuriser vos transactions en analysant des millions de transferts par seconde.\n\nDans le secteur humanitaire, 70 % des praticiens intègrent désormais des outils comme ChatGPT ou Claude dans leurs flux de travail quotidiens pour rédiger des rapports ou polir des communications professionnelles. Ces outils, dits \"IA générative\", ne font pas que traiter l'information : ils créent du contenu (texte, audio ou image) pour vous faire gagner un temps précieux dans vos tâches administratives et techniques.",
    },
    {
      title: "L'IA en Afrique aujourd'hui",
      body: "En Afrique, l'IA ne sert pas qu'à discuter ; elle transforme l'agriculture, la santé et l'éducation de manière vitale.\n\nDans le secteur agricole, des équipes de terrain utilisent l'imagerie satellite et la reconnaissance de modèles par l'IA pour cartographier les points d'eau et planifier la maintenance prédictive des pompes dans les zones rurales.\n\nDans le domaine de la santé, des chatbots d'IA soutiennent les soignants en offrant des conseils sur la gestion du stress ou le soutien psychologique, particulièrement là où les médecins sont rares.\n\nL'éducation n'est pas en reste : des applications comme aprendIA en République Démocratique du Congo utilisent des agents conversationnels pour la formation continue des enseignants.\n\nCes solutions spécialisées permettent d'aller au-delà des outils commerciaux classiques en s'adaptant aux réalités locales, comme le fonctionnement hors ligne ou la compréhension des dialectes. L'Afrique est un terrain d'innovation majeur où les contraintes de ressources stimulent la création de systèmes plus agiles et mieux ciblés pour les populations vulnérables.",
    },
  ],
  example: {
    title: "Chatbot d'IA pour la formation des soignants en Afrique",
    challenge:
      "Les soignants en zones isolées manquaient de formation sur la sauvegarde des enfants et la santé mentale, avec peu d'accès aux formateurs physiques.",
    solution:
      "Un chatbot construit sur Microsoft Copilot, capable de répondre anonymement aux questions complexes des adultes et des jeunes sur des sujets sensibles.",
    impact:
      "Après avoir renforcé la transparence sur la protection des données et l'anonymat du système, l'organisation a constaté une augmentation de 600 % de l'adoption de l'outil. Ce succès démontre que l'IA peut combler les lacunes éducatives massives lorsqu'elle est adaptée culturellement et qu'elle instaure une relation de confiance avec ses utilisateurs.",
  },
  practice: {
    title: "Testez l'IA de traduction sur votre téléphone",
    instructions: [
      "Ouvrez une application de traduction (comme Google Translate) ou un assistant (comme ChatGPT) sur votre téléphone.",
      "Utilisez la fonction \"Audio\" ou \"Micro\" pour dire une phrase complexe dans votre langue locale ou en français familier utilisé dans votre région.",
      "Demandez à l'outil de traduire cette phrase en anglais, puis de la transformer en un e-mail professionnel formel.",
    ],
    observation:
      "L'IA a-t-elle capté les nuances de votre expression ? Notez une erreur ou une réussite frappante. Cela vous montre comment l'IA peut servir de pont entre votre réalité locale et les standards administratifs globaux.",
  },
  quiz: [
    {
      question: "Quelle est la définition simple de l'intelligence artificielle ?",
      options: [
        { key: "A", text: "Un robot qui pense exactement comme un humain." },
        { key: "B", text: "Un système informatique capable de reconnaître des modèles et de prendre des décisions." },
        { key: "C", text: "Une base de données qui stocke uniquement des numéros de téléphone." },
        { key: "D", text: "Un programme qui ne peut fonctionner que si un humain lui donne chaque instruction." },
      ],
      answer: "B",
      explanation: "L'IA se distingue par sa capacité à traiter des informations pour effectuer des tâches complexes comme la reconnaissance de formes ou la compréhension du langage.",
    },
    {
      question: "Qu'est-ce que le \"Machine Learning\" ?",
      options: [
        { key: "A", text: "Une machine qui apprend à réparer d'autres machines." },
        { key: "B", text: "Un processus où l'IA apprend à partir de données pour identifier des tendances." },
        { key: "C", text: "Le nom d'un nouveau processeur de smartphone." },
        { key: "D", text: "Une méthode pour supprimer Internet d'un ordinateur." },
      ],
      answer: "B",
      explanation: "Le Machine Learning permet aux systèmes de s'améliorer et d'apprendre à partir de vastes jeux de données sans programmation rigide.",
    },
    {
      question: "Dans quel service financier africain l'IA est-elle déjà activement utilisée pour la sécurité ?",
      options: [
        { key: "A", text: "L'impression des billets de banque." },
        { key: "B", text: "La détection de fraude dans le Mobile Money (M-Pesa, Orange Money)." },
        { key: "C", text: "Le comptage manuel des pièces de monnaie." },
        { key: "D", text: "La décoration des agences bancaires." },
      ],
      answer: "B",
      explanation: "L'IA analyse les flux de transactions en temps réel pour repérer des comportements suspects et protéger les utilisateurs.",
    },
    {
      question: "Quel est le principal obstacle à l'IA dans les zones reculées d'Afrique ?",
      options: [
        { key: "A", text: "Les gens n'aiment pas la technologie." },
        { key: "B", text: "Les limitations d'infrastructure (internet faible, électricité)." },
        { key: "C", text: "L'IA ne sait pas parler français." },
        { key: "D", text: "Il est interdit d'utiliser des téléphones dans les champs." },
      ],
      answer: "B",
      explanation: "Les défis de connectivité et d'infrastructure sont les barrières majeures identifiées pour le déploiement efficace de l'IA.",
    },
    {
      question: "Que signifie le terme \"IA Générative\" ?",
      options: [
        { key: "A", text: "Une IA qui génère de l'électricité." },
        { key: "B", text: "Un système capable de créer du nouveau contenu (texte, images, audio)." },
        { key: "C", text: "Une IA qui appartient à la même génération que ses utilisateurs." },
        { key: "D", text: "Un programme qui supprime automatiquement les anciens fichiers." },
      ],
      answer: "B",
      explanation: "L'IA générative, comme ChatGPT, est capable de produire de nouveaux contenus originaux à partir de commandes textuelles.",
    },
  ],
  reflection:
    "L'étude \"Humanitarian AI 2025\" montre que 93 % des individus utilisent l'IA, mais que seulement 8 % des organisations l'ont officiellement intégrée. À votre avis, pourquoi existe-t-il un tel écart entre l'usage personnel et l'adoption par les institutions, et comment cela affecte-t-il la sécurité de vos données personnelles ?",
  glossary: [
    {
      term: "Intelligence Artificielle (IA)",
      definition: "Systèmes capables d'imiter l'intelligence humaine pour comprendre le langage, reconnaître des images et prendre des décisions basées sur des données.",
    },
    {
      term: "Machine Learning",
      definition: "Une méthode d'IA où l'ordinateur apprend à partir d'exemples et de données au lieu de suivre des instructions programmées ligne par ligne.",
    },
    {
      term: "IA Générative (Gen AI)",
      definition: "Une catégorie d'IA capable de créer de nouveaux contenus, comme rédiger un texte, générer une image ou transformer une voix en texte.",
    },
    {
      term: "Biais",
      definition: "Erreurs ou préjugés dans les résultats d'une IA, souvent causés par des données d'entraînement incomplètes ou non représentatives d'une population.",
    },
    {
      term: "Souveraineté des données",
      definition: "Le droit et le contrôle des individus ou des pays sur la manière dont leurs données sont collectées, stockées et utilisées par les technologies.",
    },
    {
      term: "IA Fantôme (Shadow AI)",
      definition: "L'utilisation d'outils d'IA par des employés de manière non officielle, sans que leur organisation n'ait mis en place de règles ou de supervision.",
    },
  ],
};
