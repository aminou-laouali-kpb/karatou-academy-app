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
    "L'objectif de cette leçon est de démystifier l'intelligence artificielle en définissant ses principes de base, son fonctionnement simplifié et ses applications concrètes — dans la vie quotidienne, au travail et dans les projets de développement, partout dans le monde.",
  video: {
    fr: "https://www.youtube.com/embed/OlHLuouQCP8",
    en: "https://www.youtube.com/embed/BOLBYpEU190",
    ha: "https://www.youtube.com/embed/oeWtnEDdgeg",
  },
  content: [
    {
      title: "L'IA n'est pas de la science-fiction",
      body: "L'intelligence artificielle n'est pas un robot venu du futur, c'est un outil qui travaille déjà à vos côtés pour résoudre des problèmes concrets. Contrairement aux logiciels traditionnels qui suivent des règles fixes, l'IA désigne des systèmes informatiques capables d'effectuer des tâches nécessitant une forme d'intelligence humaine : comprendre le langage, reconnaître des images ou prendre des décisions.\n\nImaginez la personne qui tient une caisse d'épargne rotative — une tontine en Afrique de l'Ouest, une tanda au Mexique, un chit fund en Inde. Au fil des années, elle prédit qui paiera à l'heure et qui risque d'avoir des difficultés, simplement en observant les habitudes passées. C'est exactement ce que fait l'IA. Elle n'est pas \"magique\" ; elle traite des informations pour identifier des modèles (ou \"patterns\").\n\nCette technologie est déjà une réalité de terrain : dans une enquête menée en 2025 auprès de professionnels humanitaires de 144 pays, 93 % déclarent utiliser ou avoir utilisé l'IA dans leur travail. Elle ne remplace pas l'empathie humaine, mais elle agit comme un assistant puissant capable de trier des milliers de listes de bénéficiaires ou de traduire instantanément des besoins urgents dans des zones reculées.",
    },
    {
      title: "Comment l'IA apprend",
      body: "Apprendre à une machine ne demande pas de formules mathématiques complexes pour l'utilisateur, mais énormément de données de qualité. Si l'IA est le moteur, les données sont son carburant. Le processus principal, appelé \"Machine Learning\" (apprentissage automatique), permet à l'ordinateur d'apprendre sans être explicitement programmé pour chaque détail.\n\nImaginez que vous montriez à un enfant des milliers de photos de feuilles de manioc saines et de feuilles malades. À force de répétition, l'enfant finit par reconnaître les signes d'une infection sans que vous n'ayez à lui expliquer chaque nervure. L'IA fonctionne de la même manière : elle \"vectorise\" les informations, c'est-à-dire qu'elle transforme des textes ou des images en représentations numériques pour les comparer.\n\nAttention : si les exemples ne montrent qu'une partie du monde, le modèle hérite de ce déséquilibre. Un système entraîné uniquement sur des feuilles de vigne européennes sera médiocre sur du manioc ou du caféier. C'est ce qu'on appelle un biais, et nous y reviendrons en détail à la leçon 6.\n\nPour être fiable, ce système nécessite un \"pipeline\" de données robuste — une chaîne de nettoyage et de préparation qui garantit que l'information est fraîche et sans erreurs. Sans données propres, même le modèle le plus sophistiqué reste une coquille vide, incapable de produire des résultats pertinents pour votre communauté.",
    },
    {
      title: "L'IA que vous utilisez déjà",
      body: "Vous avez probablement déjà utilisé l'IA aujourd'hui sans même vous en rendre compte, car elle est intégrée dans vos applications préférées. Sur WhatsApp, les filtres antispam et les suggestions de mots reposent sur des modèles de langage. Lorsque vous utilisez Google Maps ou des outils SIG pour trouver l'itinéraire le plus rapide entre deux quartiers, une IA analyse en temps réel les flux de données pour optimiser votre trajet.\n\nPlus important encore, les systèmes de paiement — M-Pesa au Kenya, Orange Money en Afrique de l'Ouest, UPI en Inde, Pix au Brésil ou votre carte bancaire — utilisent l'IA pour détecter les fraudes et sécuriser vos transactions en analysant des millions d'opérations en continu.\n\nDans le secteur humanitaire, 70 % des praticiens sondés intègrent désormais des outils comme ChatGPT ou Claude dans leurs flux de travail quotidiens ou hebdomadaires pour rédiger des rapports ou polir des communications professionnelles. Ces outils, dits \"IA générative\", ne font pas que traiter l'information : ils créent du contenu (texte, audio ou image) pour vous faire gagner un temps précieux dans vos tâches administratives et techniques.",
    },
    {
      title: "L'IA sur le terrain aujourd'hui",
      body: "L'IA ne sert pas qu'à discuter : elle transforme déjà l'agriculture, la santé et l'éducation, et souvent là où les moyens sont les plus rares.\n\nDans le secteur agricole, des équipes de terrain utilisent l'imagerie satellite et la reconnaissance de modèles pour cartographier les points d'eau et planifier la maintenance des pompes avant la panne ; ailleurs, une simple photo de feuille prise au téléphone suffit à détecter une maladie de la culture. Dans le domaine de la santé, des assistants conversationnels épaulent les soignants — conseils sur la gestion du stress, soutien psychologique, tri des symptômes — particulièrement là où les médecins sont rares. L'éducation n'est pas en reste : des applications comme aprendIA en République Démocratique du Congo utilisent des agents conversationnels pour la formation continue des enseignants.\n\nCes solutions vont plus loin que les outils commerciaux classiques parce qu'elles s'adaptent aux réalités locales : fonctionnement hors ligne, compréhension des langues et dialectes du terrain. Car le principal obstacle n'est pas l'algorithme, c'est l'infrastructure : connexion instable, électricité intermittente, coût des données mobiles. Dans les zones reculées — d'Afrique rurale, d'Asie du Sud ou d'Amazonie — c'est cette réalité matérielle, bien avant la performance des modèles, qui décide de ce qui fonctionne vraiment. Et c'est précisément cette contrainte qui pousse à créer des systèmes plus sobres, plus agiles et mieux ciblés.",
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
        { key: "B", text: "Une méthode pour supprimer Internet d'un ordinateur." },
        { key: "C", text: "Le nom d'un nouveau processeur de smartphone." },
        { key: "D", text: "Un processus où l'IA apprend à partir de données pour identifier des tendances." },
      ],
      answer: "D",
      explanation: "Le Machine Learning permet aux systèmes de s'améliorer et d'apprendre à partir de vastes jeux de données sans programmation rigide.",
    },
    {
      question: "Dans quel service financier du quotidien l'IA est-elle déjà utilisée pour la sécurité ?",
      options: [
        { key: "A", text: "L'impression des billets de banque." },
        { key: "B", text: "Le comptage manuel des pièces de monnaie." },
        { key: "C", text: "La détection de fraude dans les systèmes de paiement (M-Pesa, Orange Money, UPI, carte bancaire)." },
        { key: "D", text: "La décoration des agences bancaires." },
      ],
      answer: "C",
      explanation: "L'IA analyse les flux de transactions en temps réel pour repérer des comportements suspects et protéger les utilisateurs.",
    },
    {
      question: "Quel est le principal obstacle au déploiement de l'IA dans les zones reculées ?",
      options: [
        { key: "A", text: "Les limitations d'infrastructure (internet faible, électricité)." },
        { key: "B", text: "Les gens n'aiment pas la technologie." },
        { key: "C", text: "L'IA ne fonctionne que dans une seule langue." },
        { key: "D", text: "Les téléphones sont interdits dans les zones rurales." },
      ],
      answer: "A",
      explanation: "Les défis de connectivité et d'infrastructure sont les barrières majeures identifiées pour le déploiement efficace de l'IA.",
    },
    {
      question: "Que signifie le terme \"IA Générative\" ?",
      options: [
        { key: "A", text: "Une IA qui génère de l'électricité." },
        { key: "B", text: "Une IA qui appartient à la même génération que ses utilisateurs." },
        { key: "C", text: "Un système capable de créer du nouveau contenu (texte, images, audio)." },
        { key: "D", text: "Un programme qui supprime automatiquement les anciens fichiers." },
      ],
      answer: "C",
      explanation: "L'IA générative, comme ChatGPT, est capable de produire de nouveaux contenus originaux à partir de commandes textuelles.",
    },
  ],
  reflection:
    "L'enquête \"How are humanitarians using artificial intelligence in 2025?\" (Data Friendly Space et Humanitarian Leadership Academy, 2 539 répondants dans 144 pays) montre que 93 % des professionnels humanitaires sondés utilisent ou ont utilisé l'IA, mais que seulement 8 % des organisations déclarent une intégration généralisée de l'IA. À votre avis, pourquoi existe-t-il un tel écart entre l'usage individuel et l'adoption institutionnelle, et comment cela affecte-t-il la sécurité de vos données personnelles ?",
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
