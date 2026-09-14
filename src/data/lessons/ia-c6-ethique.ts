import { Language } from '../translations';
import { LessonContent } from '../lessonContent';

// Module 1 « Intelligence Artificielle » — leçon c6 (Éthique, biais et protection des données — utiliser l'IA de façon responsable)
// Trilingue FR / EN / HA. ⚠️ Traductions HA à faire valider par un locuteur natif haoussa.
export const iaLessonC6: Record<Language, LessonContent> = {
  "fr": {
    "id": "c6",
    "lessonNumber": 6,
    "title": "Éthique, biais et protection des données — utiliser l'IA de façon responsable",
    "objective": "À l'issue de cette leçon, vous serez capable d'identifier les principales sources de biais dans les systèmes d'IA et leurs effets concrets sur les populations africaines. Vous saurez protéger les données personnelles des bénéficiaires en appliquant les principes de confidentialité et de consentement éclairé. Vous pourrez détecter la désinformation générée par l'IA et adopter les bonnes pratiques de vérification. Vous mettrez en place des garde-fous organisationnels pour éviter un usage non encadré de l'IA dans votre structure.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "D'où viennent les biais dans l'IA ?",
        "body": "Un système d'IA apprend à partir de données. Si ces données ne reflètent pas la diversité du monde réel, le système reproduit — et parfois amplifie — les inégalités existantes. C'est comme un cuisinier qui n'a goûté que la cuisine d'une seule région : ses plats seront bons pour ses voisins, mais moins adaptés aux autres.\n\nEn Afrique, ce problème est particulièrement visible. Des outils de reconnaissance faciale entraînés principalement sur des visages européens ou nord-américains ont montré des taux d'erreur nettement plus élevés sur les peaux foncées. Des assistants vocaux ne comprennent pas le haoussa, le wolof ou le bambara. Un algorithme de crédit entraîné sur des données bancaires classiques pénalise des populations qui utilisent la tontine ou Orange Money — des formes de finance tout à fait solides mais absentes des données d'entraînement.\n\nConcrètement, cela peut signifier qu'une bénéficiaire de programme de santé maternelle reçoit des recommandations inadaptées à son contexte, ou qu'un agriculteur de manioc au Niger se voit refuser un micro-crédit par un algorithme qui ne connaît pas ses pratiques. Reconnaître le biais, c'est la première étape pour le corriger."
      },
      {
        "title": "Confidentialité et souveraineté des données",
        "body": "Quand vous tapez le nom, l'état de santé ou la situation familiale d'un bénéficiaire dans un outil d'IA en ligne, où vont ces données ? La plupart du temps, elles sont envoyées vers des serveurs situés hors d'Afrique, potentiellement utilisées pour améliorer le modèle, et soumises aux lois du pays hébergeur — pas nécessairement aux vôtres. C'est la question de la souveraineté des données.\n\nPlusieurs cadres s'appliquent : le RGPD européen (si votre organisation reçoit des financements européens ou travaille avec des partenaires UE), mais aussi des lois nationales émergentes comme la loi nigérienne sur la protection des données personnelles. Ces cadres posent un principe simple : une personne doit savoir quelles données sont collectées sur elle, pourquoi, et avoir donné son accord — c'est le consentement éclairé.\n\nDans la pratique, avant d'utiliser un outil d'IA pour traiter des informations sur des bénéficiaires, posez-vous trois questions : Qui peut lire ces données ? Où sont-elles stockées ? Ont-elles été anonymisées ? Un agent de terrain du PNUD qui saisit des noms et des adresses dans un chatbot public expose ses bénéficiaires sans le vouloir. Préférez des outils validés par votre organisation, et anonymisez systématiquement les données sensibles."
      },
      {
        "title": "Désinformation et vérification — ne pas croire sur parole",
        "body": "L'IA générative peut produire des textes, des images, des vidéos et des voix d'une qualité convaincante. Ce n'est pas forcément un problème — mais cela devient dangereux quand le contenu est faux et difficile à détecter. On parle de deepfakes pour les images ou vidéos manipulées, et d'hallucinations pour les affirmations incorrectes mais formulées avec assurance par un modèle de langage.\n\nDans le contexte humanitaire, les conséquences peuvent être graves. Un faux communiqué d'une ONG qui appelle à une évacuation inexistante peut provoquer la panique. Un rapport de situation fabriqué par IA peut influencer des décisions de financement. En période d'élection ou de crise, des rumeurs amplifiées par des outils d'IA circulent rapidement via WhatsApp dans des communautés déjà fragilisées.\n\nLa règle d'or : vérifiez toute information importante à deux sources indépendantes avant de la partager ou de l'utiliser pour une décision. Pour les images, des outils gratuits comme FotoForensics ou l'outil de vérification de Google Images permettent de détecter des manipulations. Pour les textes, interrogez-vous : l'auteur est-il identifiable ? La date est-elle claire ? Un organe de presse reconnu confirme-t-il l'information ? Ne partagez jamais un contenu douteux en contexte professionnel sans vérification préalable."
      },
      {
        "title": "Bonnes pratiques et responsabilité organisationnelle",
        "body": "Utiliser l'IA de façon responsable ne dépend pas uniquement de chaque individu — c'est aussi une responsabilité collective. La Shadow AI désigne l'utilisation d'outils d'IA non approuvés par l'organisation : un agent qui utilise un chatbot grand public pour synthétiser des rapports confidentiels, sans en informer sa hiérarchie. C'est une pratique risquée, même si elle part d'une bonne intention de gagner du temps.\n\nLa transparence est un pilier central : si vous avez utilisé l'IA pour produire un document, signalez-le. Cela permet à vos collègues et à vos partenaires d'exercer leur esprit critique sur le résultat. La supervision humaine reste indispensable — l'IA propose, l'humain décide et assume la responsabilité. Un médecin de santé communautaire peut utiliser l'IA pour obtenir une liste de symptômes, mais c'est lui qui examine le patient et pose le diagnostic.\n\nDans votre organisation, quelques gestes concrets font la différence : établir une liste des outils d'IA autorisés, former les équipes aux risques de base, inclure une clause de confidentialité IA dans les contrats avec les partenaires, et prévoir une relecture humaine systématique pour tout document destiné à des bénéficiaires ou à des bailleurs. Ces pratiques ne ralentissent pas le travail — elles protègent la confiance que vous avez mise des années à construire."
      }
    ],
    "example": {
      "title": "Quand un algorithme ne reconnaît pas les visages — et comment corriger cela",
      "challenge": "Une organisation humanitaire au Sahel déploie un système biométrique d'IA pour identifier les bénéficiaires d'une distribution alimentaire. Sur le terrain, les agents constatent que le système échoue à reconnaître environ 30 % des bénéficiaires — presque exclusivement des femmes aux teintes de peau plus foncées et des personnes âgées. La distribution prend deux fois plus de temps, certains bénéficiaires repartent sans aide, et la confiance de la communauté s'érode. L'outil a été entraîné sur des bases de données photographiques majoritairement nord-américaines et européennes.",
      "solution": "L'organisation suspend temporairement le système automatique et revient à une vérification manuelle assistée. Elle documente tous les cas d'échec avec photographies et métadonnées. Elle contacte le fournisseur et lui fournit un jeu de données supplémentaires représentatif de la population locale, collecté avec consentement éclairé. En parallèle, elle met en place un protocole de supervision humaine obligatoire : tout rejet du système doit être confirmé par un agent avant de refuser l'accès à un bénéficiaire. Elle forme ses équipes à identifier les biais et à signaler tout écart.",
      "impact": "Après correction et réentraînement sur des données plus représentatives, le taux d'erreur de reconnaissance chute de 30 % à moins de 4 %. Le temps de distribution revient à son niveau normal, divisé par deux. Aucun bénéficiaire éligible n'est plus refusé sans intervention humaine. La communauté retrouve confiance dans le processus, et l'organisation dispose désormais d'un protocole documenté réutilisable pour d'autres déploiements technologiques."
    },
    "practice": {
      "title": "Cartographier les données sensibles de votre organisation",
      "instructions": [
        "Choisissez un cas d'usage réel dans votre organisation où l'IA pourrait être ou est déjà utilisée (exemple : synthèse de rapports terrain, traduction, analyse de données bénéficiaires). Notez ce cas d'usage dans votre téléphone.",
        "Listez toutes les données sensibles impliquées dans ce cas : noms, localisations, états de santé, situations familiales, coordonnées GPS, photos. Pour chaque donnée, notez ce qui pourrait se passer si elle était exposée ou utilisée sans autorisation.",
        "Pour chaque donnée sensible identifiée, proposez au moins un garde-fou concret : anonymisation avant saisie (remplacer les noms par des codes), recueil d'un consentement écrit, utilisation d'un outil approuvé par votre organisation, ou relecture humaine avant partage. Prenez une capture d'écran ou une note de votre liste pour la partager lors de la prochaine réunion d'équipe."
      ],
      "observation": "Vous constaterez probablement que certains risques étaient invisibles avant cet exercice. C'est normal : on ne voit les dangers d'un outil qu'en posant les bonnes questions. Cette cartographie simple peut devenir la base d'une politique IA de votre organisation."
    },
    "quiz": [
      {
        "question": "Un algorithme de reconnaissance vocale ne comprend pas le haoussa ni le wolof. Quelle est la cause principale de ce problème ?",
        "options": [
          {
            "key": "A",
            "text": "Ces langues sont trop complexes pour être traitées par l'IA."
          },
          {
            "key": "B",
            "text": "Les données d'entraînement de l'algorithme ne contenaient pas suffisamment d'exemples de ces langues."
          },
          {
            "key": "C",
            "text": "L'IA ne peut traiter que les langues écrites, pas les langues orales."
          },
          {
            "key": "D",
            "text": "Ces langues manquent d'un alphabet standardisé utilisable par l'IA."
          }
        ],
        "answer": "B",
        "explanation": "Les biais de l'IA proviennent principalement des données d'entraînement. Si des langues africaines comme le haoussa ou le wolof sont peu représentées dans ces données, le modèle sera peu performant sur celles-ci. Ce n'est pas une limite intrinsèque de ces langues, mais un manque de représentation dans les données."
      },
      {
        "question": "Un agent terrain saisit les noms et adresses de bénéficiaires dans un chatbot grand public pour rédiger un rapport. Quel est le principal risque ?",
        "options": [
          {
            "key": "A",
            "text": "Le rapport sera de mauvaise qualité car l'IA ne comprend pas le contexte humanitaire."
          },
          {
            "key": "B",
            "text": "L'agent risque de perdre du temps en recopiant les informations."
          },
          {
            "key": "C",
            "text": "Les données personnelles des bénéficiaires pourraient être transmises à des serveurs tiers sans consentement."
          },
          {
            "key": "D",
            "text": "Le chatbot pourrait reformuler les noms de façon incorrecte."
          }
        ],
        "answer": "C",
        "explanation": "Les outils d'IA grand public envoient les données saisies vers des serveurs souvent situés hors du pays, potentiellement utilisées pour l'entraînement du modèle. Saisir des données personnelles de bénéficiaires dans ces outils constitue une violation de confidentialité, même involontaire."
      },
      {
        "question": "Quelle est la meilleure définition du consentement éclairé dans le contexte de la collecte de données ?",
        "options": [
          {
            "key": "A",
            "text": "Le bénéficiaire signe un formulaire sans en connaître le contenu exact."
          },
          {
            "key": "B",
            "text": "L'organisation décide des données à collecter selon ses propres besoins."
          },
          {
            "key": "C",
            "text": "Le bénéficiaire est informé de façon compréhensible et donne son accord libre avant toute collecte."
          },
          {
            "key": "D",
            "text": "Les données sont collectées anonymement, donc aucun consentement n'est nécessaire."
          }
        ],
        "answer": "C",
        "explanation": "Le consentement éclairé signifie que la personne concernée comprend clairement quelles données sont collectées, pourquoi et par qui, et qu'elle accepte librement sans contrainte. L'anonymisation réduit les risques mais ne remplace pas le consentement pour la collecte initiale."
      },
      {
        "question": "Vous recevez via WhatsApp une vidéo montrant un responsable d'ONG annonçant l'annulation d'une distribution alimentaire. Que faites-vous en premier ?",
        "options": [
          {
            "key": "A",
            "text": "Vous transférez immédiatement la vidéo à vos collègues pour les prévenir."
          },
          {
            "key": "B",
            "text": "Vous ignorez la vidéo car les informations via WhatsApp sont toujours fausses."
          },
          {
            "key": "C",
            "text": "Vous contactez directement l'ONG concernée via un canal officiel pour vérifier l'information."
          },
          {
            "key": "D",
            "text": "Vous publiez la vidéo sur les réseaux sociaux pour alerter un maximum de personnes."
          }
        ],
        "answer": "C",
        "explanation": "Face à une information importante reçue via un canal informel, la première étape est toujours de vérifier à la source officielle. Les deepfakes et la désinformation circulent facilement sur WhatsApp. Transférer sans vérifier peut causer des dommages graves, comme priver des bénéficiaires d'une aide réelle."
      },
      {
        "question": "Qu'est-ce que la Shadow AI dans une organisation ?",
        "options": [
          {
            "key": "A",
            "text": "Un système d'IA conçu pour opérer sans connexion internet, en mode hors ligne."
          },
          {
            "key": "B",
            "text": "L'utilisation d'outils d'IA non approuvés par l'organisation, souvent à l'insu de la hiérarchie."
          },
          {
            "key": "C",
            "text": "Un logiciel d'IA réservé aux équipes de sécurité informatique."
          },
          {
            "key": "D",
            "text": "Une IA qui imite le style d'écriture d'un auteur existant."
          }
        ],
        "answer": "B",
        "explanation": "La Shadow AI désigne l'usage non encadré d'outils d'IA au sein d'une organisation. Même bien intentionné, cet usage expose l'organisation à des risques de confidentialité, de conformité et de qualité. La solution n'est pas d'interdire l'IA, mais d'établir un cadre clair d'utilisation approuvée."
      }
    ],
    "reflection": "Pensez à un projet ou une activité de votre organisation qui implique des données sur des personnes réelles — bénéficiaires, communautés, patients. Si l'IA était utilisée dans ce projet, quels seraient les trois risques éthiques les plus importants ? Et quel garde-fou simple pourriez-vous mettre en place dès demain, sans budget supplémentaire, pour protéger ces personnes ?",
    "glossary": [
      {
        "term": "Biais",
        "definition": "Erreur systématique dans les résultats d'un système d'IA, causée par des données d'entraînement non représentatives ou des choix de conception qui favorisent certains groupes au détriment d'autres."
      },
      {
        "term": "Données personnelles",
        "definition": "Toute information permettant d'identifier directement ou indirectement une personne : nom, adresse, numéro de téléphone, photo, localisation GPS, état de santé, situation familiale."
      },
      {
        "term": "Souveraineté des données",
        "definition": "Principe selon lequel les données collectées dans un pays ou sur une communauté doivent rester sous le contrôle de cette communauté ou de ce pays, et non transférées sans accord vers des serveurs étrangers."
      },
      {
        "term": "Consentement éclairé",
        "definition": "Accord libre et informé donné par une personne avant que ses données soient collectées ou utilisées. La personne doit comprendre clairement ce à quoi elle consent, dans une langue qu'elle maîtrise."
      },
      {
        "term": "Transparence",
        "definition": "Obligation de signaler clairement quand un document, une décision ou une communication a été produit ou assisté par un système d'IA, afin que les destinataires puissent exercer leur esprit critique."
      },
      {
        "term": "Shadow AI",
        "definition": "Usage d'outils d'IA non approuvés par une organisation, souvent à titre personnel et sans en informer la hiérarchie, exposant l'organisation à des risques de sécurité, de confidentialité et de conformité réglementaire."
      }
    ]
  },
  "en": {
    "id": "c6",
    "lessonNumber": 6,
    "title": "Ethics, Bias, and Data Protection — Using AI Responsibly",
    "objective": "By the end of this lesson, you will be able to identify the main sources of bias in AI systems and their concrete effects on African populations. You will know how to protect beneficiaries' personal data by applying the principles of confidentiality and informed consent. You will be able to detect AI-generated misinformation and adopt good verification practices. You will put in place organizational safeguards to prevent uncontrolled use of AI within your organization.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Where Does AI Bias Come From?",
        "body": "An AI system learns from data. If that data does not reflect the diversity of the real world, the system reproduces — and sometimes amplifies — existing inequalities. Think of it like a cook who has only ever tasted food from one region: their dishes will suit their neighbors well, but may not work for everyone else.\n\nIn Africa, this problem is particularly visible. Facial recognition tools trained mainly on European or North American faces have shown significantly higher error rates on darker skin tones. Voice assistants fail to understand Hausa, Wolof, or Bambara. A credit-scoring algorithm trained on traditional banking data penalizes populations who use tontines or Orange Money — perfectly sound financial practices that are simply absent from the training data.\n\nIn practice, this can mean that a beneficiary in a maternal health program receives recommendations that are poorly suited to her context, or that a cassava farmer in Niger is denied a microloan by an algorithm that does not recognize his financial practices. Recognizing bias is the first step toward correcting it."
      },
      {
        "title": "Confidentiality and Data Sovereignty",
        "body": "When you type a beneficiary's name, health status, or family situation into an online AI tool, where does that data go? Most of the time, it is sent to servers located outside Africa, potentially used to improve the model, and governed by the laws of the host country — not necessarily your own. This is the question of data sovereignty.\n\nSeveral frameworks apply: the European GDPR (if your organization receives European funding or works with EU partners), but also emerging national laws such as Niger's personal data protection law. These frameworks share a simple principle: a person must know what data is collected about them, why, and must have given their agreement — this is informed consent.\n\nIn practice, before using an AI tool to process information about beneficiaries, ask yourself three questions: Who can read this data? Where is it stored? Has it been anonymized? A UNDP field agent who enters names and addresses into a public chatbot unknowingly exposes their beneficiaries. Prefer tools validated by your organization, and systematically anonymize sensitive data."
      },
      {
        "title": "Misinformation and Verification — Do Not Take Things at Face Value",
        "body": "Generative AI can produce text, images, videos, and voices of convincing quality. This is not inherently a problem — but it becomes dangerous when the content is false and difficult to detect. We speak of deepfakes for manipulated images or videos, and hallucinations for incorrect claims stated with confidence by a language model.\n\nIn the humanitarian context, the consequences can be serious. A fake communiqué from an NGO calling for a non-existent evacuation can cause panic. An AI-generated situation report can influence funding decisions. During elections or crises, rumors amplified by AI tools spread rapidly via WhatsApp in already vulnerable communities.\n\nThe golden rule: verify any important information against two independent sources before sharing it or using it for a decision. For images, free tools such as FotoForensics or Google's reverse image search can detect manipulation. For texts, ask yourself: is the author identifiable? Is the date clear? Does a recognized news outlet confirm the information? Never share doubtful content in a professional context without prior verification."
      },
      {
        "title": "Good Practices and Organizational Responsibility",
        "body": "Using AI responsibly is not solely an individual responsibility — it is also a collective one. Shadow AI refers to the use of AI tools not approved by the organization: a staff member who uses a public chatbot to summarize confidential reports without informing their supervisor. This is a risky practice, even when motivated by a genuine desire to save time.\n\nTransparency is a central pillar: if you used AI to produce a document, say so. This allows colleagues and partners to apply critical thinking to the result. Human oversight remains essential — AI proposes, and humans decide and take responsibility. A community health worker may use AI to get a list of symptoms, but it is the worker who examines the patient and makes the diagnosis.\n\nWithin your organization, a few concrete actions make a real difference: establish a list of approved AI tools, train teams on basic risks, include an AI confidentiality clause in partner contracts, and require systematic human review of any document intended for beneficiaries or donors. These practices do not slow down work — they protect the trust you have spent years building."
      }
    ],
    "example": {
      "title": "When an Algorithm Fails to Recognize Faces — and How to Fix It",
      "challenge": "A humanitarian organization in the Sahel deploys a biometric AI system to identify beneficiaries during a food distribution. In the field, agents notice that the system fails to recognize about 30% of beneficiaries — almost exclusively women with darker skin tones and elderly people. The distribution takes twice as long, some beneficiaries leave without assistance, and community trust erodes. The tool was trained on photographic databases that were predominantly North American and European.",
      "solution": "The organization temporarily suspends the automatic system and returns to manual assisted verification. It documents all failure cases with photographs and metadata. It contacts the vendor and provides an additional dataset representative of the local population, collected with informed consent. In parallel, it establishes a mandatory human supervision protocol: any rejection by the system must be confirmed by a human agent before denying a beneficiary access. It trains its teams to identify biases and report any discrepancy.",
      "impact": "After correction and retraining on more representative data, the recognition error rate drops from 30% to less than 4%. Distribution time is halved, back to its normal level. No eligible beneficiary is refused without human intervention. The community regains trust in the process, and the organization now has a documented protocol reusable for future technology deployments."
    },
    "practice": {
      "title": "Mapping Your Organization's Sensitive Data",
      "instructions": [
        "Choose a real use case in your organization where AI could be or is already being used (for example: summarizing field reports, translation, beneficiary data analysis). Write down this use case on your phone.",
        "List all sensitive data involved in this use case: names, locations, health status, family situations, GPS coordinates, photos. For each data type, note what could happen if it were exposed or used without authorization.",
        "For each sensitive data item identified, propose at least one concrete safeguard: anonymization before entry (replacing names with codes), collecting written consent, using a tool approved by your organization, or human review before sharing. Take a screenshot or a note of your list to share at the next team meeting."
      ],
      "observation": "You will likely find that some risks were invisible before this exercise. That is normal: the dangers of a tool only become clear when you ask the right questions. This simple mapping can become the foundation of your organization's AI policy."
    },
    "quiz": [
      {
        "question": "A voice recognition algorithm does not understand Hausa or Wolof. What is the main cause of this problem?",
        "options": [
          {
            "key": "A",
            "text": "These languages are too complex to be processed by AI."
          },
          {
            "key": "B",
            "text": "The algorithm's training data did not contain enough examples of these languages."
          },
          {
            "key": "C",
            "text": "AI can only process written languages, not spoken ones."
          },
          {
            "key": "D",
            "text": "These languages lack a standardized alphabet usable by AI."
          }
        ],
        "answer": "B",
        "explanation": "AI bias mainly comes from training data. If African languages such as Hausa or Wolof are underrepresented in that data, the model will perform poorly on them. This is not an inherent limitation of these languages, but a lack of representation in the training data."
      },
      {
        "question": "A field agent enters beneficiaries' names and addresses into a public chatbot to write a report. What is the main risk?",
        "options": [
          {
            "key": "A",
            "text": "The report will be of poor quality because AI does not understand the humanitarian context."
          },
          {
            "key": "B",
            "text": "The agent risks wasting time recopying information."
          },
          {
            "key": "C",
            "text": "Beneficiaries' personal data could be transmitted to third-party servers without consent."
          },
          {
            "key": "D",
            "text": "The chatbot might reformulate names incorrectly."
          }
        ],
        "answer": "C",
        "explanation": "Public AI tools send entered data to servers often located outside the country, potentially used for model training. Entering beneficiaries' personal data into these tools constitutes a privacy violation, even if unintentional."
      },
      {
        "question": "What is the best definition of informed consent in the context of data collection?",
        "options": [
          {
            "key": "A",
            "text": "The beneficiary signs a form without knowing its exact content."
          },
          {
            "key": "B",
            "text": "The organization decides which data to collect based on its own needs."
          },
          {
            "key": "C",
            "text": "The beneficiary is informed in a comprehensible way and gives free agreement before any collection."
          },
          {
            "key": "D",
            "text": "Data is collected anonymously, so no consent is needed."
          }
        ],
        "answer": "C",
        "explanation": "Informed consent means that the person concerned clearly understands what data is collected, why, and by whom, and freely agrees without any coercion. Anonymization reduces risks but does not replace consent for the initial collection."
      },
      {
        "question": "You receive a video via WhatsApp showing an NGO leader announcing the cancellation of a food distribution. What do you do first?",
        "options": [
          {
            "key": "A",
            "text": "You immediately forward the video to your colleagues to warn them."
          },
          {
            "key": "B",
            "text": "You ignore the video because information via WhatsApp is always false."
          },
          {
            "key": "C",
            "text": "You contact the NGO directly through an official channel to verify the information."
          },
          {
            "key": "D",
            "text": "You post the video on social media to alert as many people as possible."
          }
        ],
        "answer": "C",
        "explanation": "When you receive important information through an informal channel, the first step is always to verify it through an official source. Deepfakes and misinformation spread easily on WhatsApp. Forwarding without verification can cause serious harm, such as preventing beneficiaries from receiving real assistance."
      },
      {
        "question": "What is Shadow AI in an organization?",
        "options": [
          {
            "key": "A",
            "text": "An AI system designed to work without internet connection, in offline mode."
          },
          {
            "key": "B",
            "text": "The use of AI tools not approved by the organization, often without the knowledge of management."
          },
          {
            "key": "C",
            "text": "AI software reserved for IT security teams."
          },
          {
            "key": "D",
            "text": "An AI that mimics the writing style of an existing author."
          }
        ],
        "answer": "B",
        "explanation": "Shadow AI refers to the uncontrolled use of AI tools within an organization. Even when well-intentioned, this exposes the organization to risks of confidentiality, compliance, and quality. The solution is not to ban AI, but to establish a clear framework for approved use."
      }
    ],
    "reflection": "Think of a project or activity in your organization that involves data about real people — beneficiaries, communities, patients. If AI were used in this project, what would be the three most important ethical risks? And what simple safeguard could you put in place by tomorrow, without any additional budget, to protect those people?",
    "glossary": [
      {
        "term": "Bias",
        "definition": "A systematic error in the results of an AI system, caused by unrepresentative training data or design choices that favor certain groups at the expense of others."
      },
      {
        "term": "Personal data",
        "definition": "Any information that directly or indirectly identifies a person: name, address, phone number, photo, GPS location, health status, or family situation."
      },
      {
        "term": "Data sovereignty",
        "definition": "The principle that data collected in a country or about a community should remain under the control of that community or country, and not be transferred without agreement to foreign servers."
      },
      {
        "term": "Informed consent",
        "definition": "A free and informed agreement given by a person before their data is collected or used. The person must clearly understand what they are consenting to, in a language they understand."
      },
      {
        "term": "Transparency",
        "definition": "The obligation to clearly indicate when a document, decision, or communication was produced or assisted by an AI system, so that recipients can apply critical thinking."
      },
      {
        "term": "Shadow AI",
        "definition": "The use of AI tools not approved by an organization, often for personal use and without informing management, exposing the organization to security, privacy, and regulatory compliance risks."
      }
    ]
  },
  "ha": {
    "id": "c6",
    "lessonNumber": 6,
    "title": "Dabi'a, Nuna Bambanci, da Kare Bayanan Sirri — Amfani da AI da Hikima",
    "objective": "A karshen wannan darasin, za ku iya gane manyan abubuwan da ke haifar da nuna bambanci a cikin tsarin AI da tasirin su kai tsaye kan al'ummomin Afirka. Za ku san yadda za ku kare bayanan sirri na masu amfani da taimakon ku ta hanyar aiwatar da ka'idodin asiri da yarda da sani. Za ku iya gano fadan karya da AI ke kirkira da kuma amfani da hanyoyin tabbatarwa masu kyau. Za ku aza tsare-tsare a cikin kungiyarku don hana amfani da AI ba tare da kulawa ba.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Daga Ina Nuna Bambanci a AI ke Fitowa?",
        "body": "Tsarin AI yana koyo daga bayanan da ake ba shi. Idan wadannan bayanai ba su wakilci bambancin duniya ta ainihi ba, tsarin zai sake nuna — kuma wani lokaci zai kara — rashin daidaito da ke wanzu. Kamar girki ne da bai taba dandanar abincin wani yanki ba sai nashi: abincinsa zai yi kyau ga makwabtansa, amma ba zai dace da duk kowa ba.\n\nA Afirka, wannan matsala tana bayyane sosai. Kayan aiki na gane fuska da aka horar da su musamman da fuska na Turai ko Arewacin Amurka sun nuna yawan kurakurai mafi yawa a kan fata masu duhu. Mataimakan murya ba sa fahimtar Hausa, Wolof, ko Bambara. Algorithm din bayar da bashi da aka horar da bayanai na banki na al'ada yana hukunta jama'ar da ke amfani da tontine ko Orange Money — hanyoyin kudi masu kyau amma ba su da wakilci a cikin bayanan horo.\n\nA aikace, wannan na iya nufin cewa wata mai amfani da shirin lafiya ta uwa tana karbar shawarwari da ba su dace da yanayin ta ba, ko kuma wani manomi na rogo a Nijar ya ki masa karamin bashi ta wata algorithm da ba ta san hanyoyin aikin kudinsa ba. Gane nuna bambanci shi ne mataki na farko na gyara shi."
      },
      {
        "title": "Asiri da Ikon Mallakan Bayanai",
        "body": "Lokacin da kuka rubuta suna, lafiyar jiki, ko halin iyalin wanda kuke taimakawa a cikin kayan aiki na AI a kan layi, ina wadannan bayanai ke tafiya? Yawancin lokaci, ana aika su zuwa sabobin da ke wajen Afirka, ana iya amfani da su don inganta tsarin, kuma suna karkashin dokokin kasar mai masaukin su — ba lallai ba dokokin ku. Wannan shi ne tambayar ikon mallakan bayanai.\n\nKa'idodi da yawa sun shafi wannan: RGPD na Turai (idan kungiyarku tana karbar kudin shiga na Turai ko tana aiki tare da abokan tarayya na EU), amma kuma dokokin kasa masu tasowa kamar dokar Nijar game da kare bayanan sirri. Wadannan ka'idodi suna da ka'ida mai sauki: mutum dole ya san wane bayanan ake tattara game da shi, me yasa, kuma ya ba da yarjejeniyarsa — wannan shi ne yarda da sani.\n\nA aikace, kafin ku yi amfani da kayan aiki na AI don sarrafa bayanai game da masu amfani da taimakon ku, ku tambaye kanku tambayoyi uku: Wa zai iya karanta wadannan bayanai? Ina aka ajiye su? An boye sunayensu ne? Wakili a filin na UNDP da ke rubuta sunayen da adresoshin mutane a cikin chatbot na jama'a yana fallasa masu amfani da taimakonsa ba tare da son rai ba. Ku fifita kayan aikin da kungiyarku ta amince da su, kuma ku boye bayanan sirri koyaushe."
      },
      {
        "title": "Karya ta AI da Tabbatarwa — Kar a Gaskata Kawai",
        "body": "AI mai kirkira na iya samar da rubutu, hotuna, bidiyo, da murya na inganci mai ban sha'awa. Wannan ba matsala ce a kanta ba — amma yana zama hadari lokacin da abun ciki ya karya kuma yana da wahalar gano shi. Muna kiran deepfakes hotuna ko bidiyo da aka gyaggyara, da hallucinations kurarren maganganu mara daidai da ake bayyanawa da tabbaci ta hanyar kira na yare.\n\nA yanayin taimakon dan adam, sakamakon na iya zama mai tsanani. Wata sanarwa ta karya daga wata NGO da ke kiran ficewa da ba ta wanzu ba na iya haifar da firgici. Rahoto na yanayi da AI ta kirkira na iya shafar yanke shawarwari na kudin shiga. A lokacin zabe ko rikici, jita-jita da kayan aikin AI suka kara suka bazu cikin sauri ta WhatsApp a cikin al'ummomi masu rauni.\n\nKa'ida ta zinariya: ku tabbatar da duk wata mahimmiyar bayanai ta hanyar tushe biyu masu zaman kansu kafin ku raba ta ko ku yi amfani da ita don yanke shawara. Ga hotuna, kayan aiki kyauta kamar FotoForensics ko kayan tabbatarwa na hotuna na Google na iya gano gyaggyarana. Ga rubutu, ku tambayi kanku: shin marubucin ana iya ganewa? Kwanan wata ta bayyana? Shin kafar labarai da aka amince da ita ta tabbatar da bayanan? Kar ku taba raba abun ciki mai shakku a yanayin sana'a ba tare da tabbatarwa da ta gabata ba."
      },
      {
        "title": "Hanyoyin Kyau da Alhakin Kungiya",
        "body": "Amfani da AI da hikima ba alhakin mutum daya ba ne kawai — alhakin jama'a ne ma. Shadow AI na nufin amfani da kayan aikin AI da kungiyar ba ta amince da su ba: ma'aikaci da ke amfani da chatbot na jama'a don takaita rahotanni masu asiri ba tare da sanar da shugabancinta ba. Wannan aikin yana da hadari, ko da ya fito daga niyyar kwarai na adana lokaci.\n\nGaskiya ita ce ginshikin tsakiya: idan kun yi amfani da AI don samar da wata takarda, ku fada hakan. Wannan yana ba wa abokan aikinku da abokan tarayya damar yin amfani da tunani mai zurfin bincike kan sakamakon. Kulawa ta dan adam ta kasance dole ne — AI tana ba da shawara, kuma dan adam ne ke yanke shawara da daukar alhakin. Ma'aikacin lafiya na al'umma na iya amfani da AI don samun jerin alamomin cuta, amma shi ne ke binciken mai hakuri kuma ke yanke hukunci.\n\nA cikin kungiyarku, kananan ayyuka masu ma'ana suna yin babban bambanci: kafa jerin kayan aikin AI da aka amince da su, horar da kungiyoyi kan hadari na asali, hada takardar asiri na AI a cikin kwangilolinku tare da abokan tarayya, da kuma saita bitar dan adam koyaushe ga duk wata takarda da aka nufa ga masu amfani da taimakon ku ko masu ba da kudin shiga. Wadannan hanyoyin ba sa rage aiki — suna kare amincin da kuka shafe shekaru masu yawa a gina."
      }
    ],
    "example": {
      "title": "Lokacin da Algorithm ba ta Gane Fuska — da Yadda Ake Gyara Hakan",
      "challenge": "Wata kungiyar taimakon dan adam a Sahel ta dauki tsarin biometric na AI don gane masu amfani da taimakon su lokacin rarraba abinci. A filin, wakilan sun lura cewa tsarin ya kasa gane kusan kashi 30 cikin dari na masu amfani da taimakon su — kusan kawai matan da ke da fata masu duhu da tsofaffi. Rarrabawa na daukar lokaci ninki biyu, wasu masu amfani da taimakon sun tafi ba tare da taimakon ba, kuma amincin al'umma ya ragu. An horar da kayan aikin da tarihin hoto da ya kasance musamman na Arewacin Amurka da Turai.",
      "solution": "Kungiyar ta dakatar da tsarin atomatik na dan lokaci kuma ta koma ga tabbatarwa ta hannu mai taimako. Ta rubuta duk lokuta na kuskure tare da hotuna da metadata. Ta sadar da mai sayar da kayan aiki kuma ta ba shi karin bayanan da ke wakilci yawan jama'ar yankin, da aka tattara tare da yarda da sani. A lokaci guda, ta kafa ka'idar kulawa ta dan adam dole ne: kowane kin yarda daga tsarin dole ya tabbata ta wakili mutum kafin a ki mara amfani da taimakon damar shiga. Ta horar da kungiyoyinta gane nuna bambanci da ba da rahoto game da kowane bambanci.",
      "impact": "Bayan gyara da sake horarwa akan bayanai mafi wakilci, yawan kurakuran gane fuska ya fado daga kashi 30 zuwa kasa da kashi 4 cikin dari. Lokacin rarrabawa ya koma rabin abin da yake, kamar yadda ya saba. Babu wanda ya cancanci amfani da taimako ya ki ba tare da shiga tsakani na dan adam ba. Al'ummar ta sake samun amincewar tsarin, kuma kungiyar yanzu tana da ka'idar da aka rubuta da za a iya sake amfani da ita don sauran aiwatar da fasaha."
    },
    "practice": {
      "title": "Zana Taswira na Bayanan Sirri na Kungiyarku",
      "instructions": [
        "Zabi wani lokaci na ainihi a kungiyarku inda AI za ta iya amfani ko ana amfani da ita ta riga (misali: takaita rahotanni na filin, fassara, nazarin bayanan masu amfani da taimako). Rubuta wannan lokaci a wayarku.",
        "Jera duk bayanan sirri da ke cikin wannan lokaci: sunayen mutane, wuraren zama, yanayin lafiya, halin iyali, daidaiton GPS, hotuna. Ga kowane nau'in bayana, rubuta abin da zai iya faruwa idan an fallasa shi ko an yi amfani da shi ba tare da izini ba.",
        "Ga kowane bayanan sirri da kuka gano, ba da shawarar akalla daya daga cikin tsare-tsare na ainihi: boye sunaye kafin shigar da bayana (maye gurbin sunayen da lambar sirri), tattara yarda da rubuce-rubuce, amfani da kayan aikin da kungiyarku ta amince da su, ko bitar dan adam kafin raba. Dauki screenshot ko wata lura ta jerin naku don raba shi a taron kungiya mai zuwa."
      ],
      "observation": "Watakila za ku gano cewa wasu hadari ba su bayyana kafin wannan aiki ba. Hakan al'ada ne: hadarin kayan aiki yana bayyana kawai lokacin da kuka yi tambayoyin da suka dace. Wannan taswira mai sauki na iya zama tushen manufofin AI na kungiyarku."
    },
    "quiz": [
      {
        "question": "Wata algorithm ta gane murya ba ta fahimtar Hausa ko Wolof. Menene babban dalilin wannan matsala?",
        "options": [
          {
            "key": "A",
            "text": "Wadannan harsuna suna da rikitarwa sosai don AI ta sarrafa su."
          },
          {
            "key": "B",
            "text": "Bayanan horo na algorithm ba su kunshi isassun misalan wadannan harsuna ba."
          },
          {
            "key": "C",
            "text": "AI na iya sarrafa harsuna masu rubutu ne kawai, ba na baki ba."
          },
          {
            "key": "D",
            "text": "Wadannan harsuna ba su da haruffan da aka daidaita wanda AI za ta iya amfani da su."
          }
        ],
        "answer": "B",
        "explanation": "Nuna bambanci na AI galibi yana fitowa daga bayanan horo. Idan harsuna na Afirka kamar Hausa ko Wolof ba su da wakilci a cikin wadannan bayanai, tsarin zai yi aikin da bai dace ba a kansu. Wannan ba iyaka ta halitta na wadannan harsuna ba ne, amma rashin wakilci ne a cikin bayanan horo."
      },
      {
        "question": "Wani wakili a filin ya rubuta sunayen da adresoshin masu amfani da taimako a cikin chatbot na jama'a don rubuta rahoto. Menene babban hadari?",
        "options": [
          {
            "key": "A",
            "text": "Rahoton zai zama mara inganci saboda AI ba ta fahimtar yanayin taimakon dan adam ba."
          },
          {
            "key": "B",
            "text": "Wakilin na iya bata lokaci wajen sake rubuta bayanai."
          },
          {
            "key": "C",
            "text": "Bayanan sirri na masu amfani da taimako na iya wucewa zuwa sabobin na waje ba tare da yarda ba."
          },
          {
            "key": "D",
            "text": "Chatbot din na iya sake rubuta sunayen ba daidai ba."
          }
        ],
        "answer": "C",
        "explanation": "Kayan aikin AI na jama'a suna aika bayanan da aka shigar zuwa sabobin da yawancin lokaci suna wajen kasar, ana iya amfani da su don horar da tsarin. Shigar da bayanan sirri na masu amfani da taimako a cikin wadannan kayan aikin yana wakiltar take hakkin asiri, ko da ba da gangan ba."
      },
      {
        "question": "Menene mafi kyawun ma'anar yarda da sani a yanayin tattara bayanai?",
        "options": [
          {
            "key": "A",
            "text": "Wanda ake taimakon ya sanya hannu a takardar ba tare da sanin abinda ke cikinta ba."
          },
          {
            "key": "B",
            "text": "Kungiyar ta yanke shawarar wane bayanai za a tattara bisa bukatunta."
          },
          {
            "key": "C",
            "text": "An sanar da wanda ake taimakon ta hanyar da za a fahimta kuma ya ba da yarjejeniyarsa ta ka'ida kafin duk wani tattara."
          },
          {
            "key": "D",
            "text": "Ana tattara bayanai ba tare da bayyana sunayen ba, don haka babu bukatar yarda."
          }
        ],
        "answer": "C",
        "explanation": "Yarda da sani na nufin cewa mutumin da ke da sha'awar yana fahimtar bayyananniya wane bayanai ake tattara, me yasa, da kuma ta waye, kuma yana yarda da yardar rai ba tare da tilastawa ba. Boye sunaye yana rage hadari amma ba ya maye gurbin yarda don tattara farko."
      },
      {
        "question": "Kun karbi bidiyo ta WhatsApp da ke nuna wani shugaban NGO yana sanar da soke rarrabawa na abinci. Menene kuke yi da farko?",
        "options": [
          {
            "key": "A",
            "text": "Nan da nan kuna aikawa da bidiyon zuwa abokan aikinku don gargade su."
          },
          {
            "key": "B",
            "text": "Kuna watsi da bidiyon saboda bayanai ta WhatsApp koyaushe karya ne."
          },
          {
            "key": "C",
            "text": "Kuna sadar da NGO kai tsaye ta hanyar tashar hukuma don tabbatar da bayanai."
          },
          {
            "key": "D",
            "text": "Kuna buga bidiyon a kafofin sada zumunta don fadakar da mutane mafi yawa."
          }
        ],
        "answer": "C",
        "explanation": "Lokacin da kuka karbi mahimmiyar bayanai ta hanyar da ba ta hukuma ba, mataki na farko koyaushe shine tabbatar da ita ta hanyar tushe na hukuma. Deepfakes da karya suna yaduwa cikin sauki a WhatsApp. Aikawa ba tare da tabbatarwa ba na iya haifar da babbar cutarwa, kamar hana masu amfani da taimako daga samun taimakon na ainihi."
      },
      {
        "question": "Menene Shadow AI a cikin wata kungiya?",
        "options": [
          {
            "key": "A",
            "text": "Tsarin AI da aka kera don aiki ba tare da hadin intanet ba, a yanayin ware layi."
          },
          {
            "key": "B",
            "text": "Amfani da kayan aikin AI da kungiyar ba ta amince da su ba, galibi ba tare da ilimin shugabanci ba."
          },
          {
            "key": "C",
            "text": "Software na AI da aka kebe don kungiyoyin tsaro na fasaha ta bayanai."
          },
          {
            "key": "D",
            "text": "AI da ke kwaikwayon salon rubutu na wani marubucin da ke wanzu."
          }
        ],
        "answer": "B",
        "explanation": "Shadow AI na nufin amfani da kayan aikin AI ba tare da kulawa a cikin wata kungiya ba. Ko da niyyar ta kyau, wannan yana fallasa kungiyar ga hadari na asiri, bin ka'ida, da inganci. Maganin ba haramta AI ba ne, amma kafa tsari bayyananne na amfani da amintaccen shi."
      }
    ],
    "reflection": "Ku yi tunanin wani aiki ko wata muhimmar aiki a kungiyarku da ke kunshe da bayanan mutanen ainihi — masu amfani da taimako, al'ummomi, marasa lafiya. Idan AI ta yi amfani a wannan aiki, wane hadari na dabi'a guda uku mafi muhimmanci za su kasance? Kuma wane tsari mai sauki za ku iya aza kafin gobe, ba tare da karin kasafin kudi ba, don kare wadannan mutane?",
    "glossary": [
      {
        "term": "Nuna Bambanci (Bias)",
        "definition": "Kuskure na tsari a cikin sakamakon tsarin AI, wanda ke fitowa daga bayanan horo mara wakilci ko zabubbukan kira da ke fifita wasu kungiyoyi akan wasu."
      },
      {
        "term": "Bayanan Sirri (Données personnelles)",
        "definition": "Duk wani bayanai da ke gane mutum kai tsaye ko a kaikaice: suna, adireshi, lambar wayar tarho, hoto, wurin GPS, yanayin lafiya, ko halin iyali."
      },
      {
        "term": "Ikon Mallakan Bayanai (Souveraineté des données)",
        "definition": "Ka'idar da ta ce bayanan da aka tattara a wata kasa ko game da wata al'umma dole su kasance karkashin ikon wannan al'umma ko kasar, kuma ba a canja su ba tare da yarjejeniya zuwa sabobin na kasashen waje."
      },
      {
        "term": "Yarda da Sani (Consentement éclairé)",
        "definition": "Yarjejeniya ta ka'ida da aka bayar ta wani mutum kafin a tattara ko a yi amfani da bayanansu. Mutumin dole ya fahimci bayyananniya abin da yake yarda da shi, a harshe da ya fahimta."
      },
      {
        "term": "Gaskiya (Transparence)",
        "definition": "Wajibin sanar da bayyananniya lokacin da wata takarda, yanke shawara, ko sadarwa aka samar da ita ko an taimaka mata ta hanyar tsarin AI, domin masu karba su iya amfani da tunani mai zurfin bincike."
      },
      {
        "term": "Shadow AI",
        "definition": "Amfani da kayan aikin AI da kungiya ba ta amince da su ba, galibi don amfanin kai kuma ba tare da sanar da shugabanci ba, wanda ke fallasa kungiyar ga hadari na tsaro, asiri, da bin ka'idodin doka."
      }
    ]
  }
};
