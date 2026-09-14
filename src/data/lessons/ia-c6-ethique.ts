import { Language } from '../translations';
import { LessonContent } from '../lessonContent';

// Module 1 « Intelligence Artificielle » — leçon c6 (Éthique, biais et protection des données — utiliser l'IA de façon responsable)
// Trilingue FR / EN / HA. ⚠️ Traductions HA à faire valider par un locuteur natif haoussa.
export const iaLessonC6: Record<Language, LessonContent> = {
  "fr": {
    "id": "c6",
    "lessonNumber": 6,
    "title": "Éthique, biais et protection des données — utiliser l'IA de façon responsable",
    "objective": "À l'issue de cette leçon, vous serez capable d'identifier les principales sources de biais dans les systèmes d'IA et leurs effets concrets sur des groupes de personnes très différents, partout dans le monde. Vous saurez protéger les données personnelles des personnes dont vous traitez les dossiers — clients, patients, élèves, usagers, candidats, collègues, bénéficiaires — en appliquant les principes de confidentialité et de consentement éclairé. Vous pourrez détecter la désinformation générée par l'IA et adopter les bonnes pratiques de vérification. Vous mettrez en place des garde-fous pour éviter un usage non encadré de l'IA dans votre équipe, votre entreprise, votre école ou votre association.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "D'où viennent les biais dans l'IA ?",
        "body": "Un système d'IA apprend à partir de données. Si ces données ne reflètent pas la diversité du monde réel, le système reproduit — et parfois amplifie — les inégalités existantes. C'est comme un cuisinier qui n'a goûté que la cuisine d'une seule région : ses plats seront bons pour ses voisins, mais moins adaptés aux autres. Le problème n'est donc réservé ni à un métier, ni à un pays, ni à un continent : il apparaît partout où les données d'entraînement ne racontent qu'une partie du monde.\n\nLes formes que prend le biais se ressemblent d'un contexte à l'autre. Un outil de tri de candidatures entraîné sur les recrutements passés d'une entreprise peut écarter les femmes d'un métier historiquement masculin, simplement parce qu'il a appris à reproduire cette histoire. Un modèle qui n'a vu que des profils de jeunes diplômés évalue mal les parcours de candidats plus âgés ou autodidactes. Un outil d'aide à la décision nourri de données de grandes villes fonctionne mal en zone rurale, où les distances, les services et les habitudes sont différents. Et une langue régionale peu écrite — qu'il s'agisse du quechua en Amérique du Sud, d'une langue minorisée d'Europe ou d'Asie, du haoussa, du wolof ou du bambara — est mal comprise par les assistants vocaux, non parce qu'elle serait complexe, mais parce qu'elle est absente des données.\n\nCertains de ces biais ont été particulièrement documentés en Afrique. Des outils de reconnaissance faciale entraînés principalement sur des visages européens ou nord-américains ont montré des taux d'erreur nettement plus élevés sur les peaux foncées. Un algorithme de crédit entraîné sur des données bancaires classiques pénalise des personnes qui utilisent la tontine ou l'argent mobile — des formes de finance tout à fait solides, mais absentes des données d'entraînement. Concrètement, cela peut vouloir dire qu'une patiente reçoit des recommandations inadaptées à son contexte, qu'un agriculteur se voit refuser un micro-crédit, ou qu'une candidate compétente ne dépasse jamais le premier filtre automatique. Reconnaître le biais, c'est la première étape pour le corriger."
      },
      {
        "title": "Confidentialité et souveraineté des données",
        "body": "Quand vous tapez le nom, l'état de santé ou la situation familiale d'une personne — un client, un patient, un élève, un candidat, un collègue — dans un outil d'IA en ligne, où vont ces données ? La plupart du temps, elles partent vers des serveurs situés dans un autre pays, elles peuvent servir à améliorer le modèle, et elles relèvent des lois du pays hébergeur, pas nécessairement des vôtres. C'est la question de la souveraineté des données, et elle se pose à Niamey comme à Lisbonne, à Manille ou à Montréal.\n\nBeaucoup de pays se sont dotés d'un cadre juridique. Le RGPD s'applique dans l'Union européenne et à toute organisation qui traite les données de personnes qui y résident. La loi nigérienne sur la protection des données personnelles joue ce rôle au Niger. Le Brésil a sa LGPD, l'Afrique du Sud sa POPIA, l'Inde sa loi DPDP, le Canada sa loi PIPEDA, et la liste s'allonge d'année en année. Les détails diffèrent d'un texte à l'autre, mais tous posent le même principe simple : une personne doit savoir quelles données sont collectées sur elle, pourquoi, et avoir donné son accord. C'est le consentement éclairé. Renseignez-vous sur le cadre qui s'applique là où vous travaillez : c'est celui-là qui fait foi pour vous.\n\nDans la pratique, avant d'utiliser un outil d'IA pour traiter des informations sur d'autres personnes, posez-vous trois questions : qui peut lire ces données ? Où sont-elles stockées ? Ont-elles été anonymisées ? Un agent de terrain qui saisit des noms et des adresses dans un chatbot public, un comptable qui y colle les bulletins de paie de ses clients, un enseignant qui y dépose les résultats de sa classe : tous exposent des tiers sans le vouloir. Préférez des outils validés par votre organisation, et anonymisez systématiquement les données sensibles."
      },
      {
        "title": "Désinformation et vérification — ne pas croire sur parole",
        "body": "L'IA générative peut produire des textes, des images, des vidéos et des voix d'une qualité convaincante. Ce n'est pas forcément un problème — mais cela devient dangereux quand le contenu est faux et difficile à détecter. On parle de deepfakes pour les images ou vidéos manipulées, et d'hallucinations pour les affirmations incorrectes mais formulées avec assurance par un modèle de langage.\n\nLes dégâts ne sont pas réservés aux grandes crises. Un faux message qui semble venir de votre banque et vous demande de confirmer un code, une fausse annonce d'inscription attribuée à une école, une voix imitant celle d'un employeur qui réclame un virement urgent, une rumeur de quartier relayée dans un groupe familial : tout cela circule désormais avec une qualité de fabrication qui trompe des gens prudents. En contexte humanitaire, les conséquences peuvent être graves : un faux communiqué d'ONG annonçant une évacuation inexistante peut provoquer la panique, et un rapport de situation fabriqué peut influencer des décisions de financement. En période d'élection ou de crise, ces contenus se propagent très vite dans les messageries.\n\nLa règle d'or : vérifiez toute information importante auprès de deux sources indépendantes avant de la partager ou d'en tirer une décision. Face à une demande urgente qui semble venir d'une banque, d'un employeur ou d'une administration, rappelez par le canal officiel que vous connaissez déjà, jamais par le numéro ou le lien fournis dans le message. Pour les images, des outils gratuits comme FotoForensics ou la recherche d'image inversée de Google aident à repérer des manipulations. Pour les textes, interrogez-vous : l'auteur est-il identifiable ? La date est-elle claire ? Un organe de presse reconnu confirme-t-il l'information ? Ne partagez jamais un contenu douteux sans vérification préalable."
      },
      {
        "title": "Bonnes pratiques et responsabilité collective",
        "body": "Utiliser l'IA de façon responsable ne dépend pas uniquement de chaque individu — c'est aussi une responsabilité collective. La Shadow AI désigne l'utilisation d'outils d'IA non approuvés : un salarié qui résume des rapports confidentiels dans un chatbot grand public, un indépendant qui y colle le contrat d'un client, un stagiaire qui y dépose un fichier interne, sans en informer personne. C'est une pratique risquée, même si elle part d'une bonne intention de gagner du temps.\n\nLa transparence est un pilier central : si vous avez utilisé l'IA pour produire un document, signalez-le. Cela permet à vos collègues et à vos partenaires d'exercer leur esprit critique sur le résultat. La supervision humaine reste indispensable — l'IA propose, l'humain décide et assume la responsabilité. Un médecin peut utiliser l'IA pour obtenir une liste de symptômes, mais c'est lui qui examine le patient et pose le diagnostic. Un recruteur peut s'aider d'un outil pour trier des candidatures, mais c'est lui qui répond au candidat et assume le refus.\n\nSur votre lieu de travail, quelques gestes concrets font la différence : établir une liste des outils d'IA autorisés, former les équipes aux risques de base, inclure une clause de confidentialité IA dans les contrats avec les partenaires, et prévoir une relecture humaine systématique pour tout document destiné à des clients, des élèves, des patients, des usagers, des candidats, des bénéficiaires ou des bailleurs. Si vous travaillez seul, comme indépendant ou comme bénévole, ces règles valent aussi : écrivez-les pour vous-même. Ces pratiques ne ralentissent pas le travail — elles protègent la confiance que vous avez mise des années à construire."
      }
    ],
    "example": {
      "title": "Quand un algorithme ne reconnaît pas les visages — et comment corriger cela",
      "challenge": "Une organisation humanitaire au Sahel déploie un système biométrique d'IA pour identifier les bénéficiaires d'une distribution alimentaire. Sur le terrain, les agents constatent que le système échoue à reconnaître environ 30 % des bénéficiaires — presque exclusivement des femmes aux teintes de peau plus foncées et des personnes âgées. La distribution prend deux fois plus de temps, certains bénéficiaires repartent sans aide, et la confiance de la communauté s'érode. L'outil a été entraîné sur des bases de données photographiques majoritairement nord-américaines et européennes.",
      "solution": "L'organisation suspend temporairement le système automatique et revient à une vérification manuelle assistée. Elle documente tous les cas d'échec avec photographies et métadonnées. Elle contacte le fournisseur et lui fournit un jeu de données supplémentaires représentatif de la population locale, collecté avec consentement éclairé. En parallèle, elle met en place un protocole de supervision humaine obligatoire : tout rejet du système doit être confirmé par un agent avant de refuser l'accès à un bénéficiaire. Elle forme ses équipes à identifier les biais et à signaler tout écart.",
      "impact": "Après correction et réentraînement sur des données plus représentatives, le taux d'erreur de reconnaissance chute de 30 % à moins de 4 %. Le temps de distribution revient à son niveau normal, divisé par deux. Aucun bénéficiaire éligible n'est plus refusé sans intervention humaine. La communauté retrouve confiance dans le processus, et l'organisation dispose désormais d'un protocole documenté réutilisable pour d'autres déploiements technologiques."
    },
    "practice": {
      "title": "Cartographier les données sensibles de votre activité",
      "instructions": [
        "Choisissez un cas d'usage réel dans votre travail ou votre activité où l'IA pourrait être ou est déjà utilisée (exemple : synthèse de comptes rendus, traduction, tri de candidatures, analyse de dossiers de clients, d'élèves, de patients ou de bénéficiaires). Notez ce cas d'usage dans votre téléphone.",
        "Listez toutes les données sensibles impliquées dans ce cas : noms, coordonnées, localisations, états de santé, situations familiales, salaires, résultats scolaires, photos. Pour chaque donnée, notez ce qui pourrait se passer si elle était exposée ou utilisée sans autorisation.",
        "Pour chaque donnée sensible identifiée, proposez au moins un garde-fou concret : anonymisation avant saisie (remplacer les noms par des codes), recueil d'un consentement écrit, utilisation d'un outil approuvé par votre organisation, ou relecture humaine avant partage. Prenez une capture d'écran ou une note de votre liste, pour la partager lors de la prochaine réunion d'équipe ou pour la relire seul si vous travaillez à votre compte."
      ],
      "observation": "Vous constaterez probablement que certains risques étaient invisibles avant cet exercice. C'est normal : on ne voit les dangers d'un outil qu'en posant les bonnes questions. Cette cartographie simple peut devenir la base d'une politique IA pour votre organisation, ou votre propre règle de conduite si vous travaillez seul."
    },
    "quiz": [
      {
        "question": "Un assistant vocal ne comprend ni le haoussa, ni une langue régionale peu écrite d'un autre continent. Quelle est la cause principale de ce problème ?",
        "options": [
          {
            "key": "A",
            "text": "Ces langues sont trop complexes pour être traitées par l'IA."
          },
          {
            "key": "B",
            "text": "Les données d'entraînement de l'outil ne contenaient pas suffisamment d'exemples de ces langues."
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
        "explanation": "Les biais de l'IA proviennent principalement des données d'entraînement. Qu'une langue soit parlée en Afrique, en Amérique du Sud, en Europe ou en Asie, si elle est peu représentée dans ces données, le modèle sera peu performant sur elle. Ce n'est pas une limite intrinsèque de la langue, mais un manque de représentation dans les données."
      },
      {
        "question": "Un salarié saisit les noms et adresses de clients dans un chatbot grand public pour rédiger un compte rendu. Quel est le principal risque ?",
        "options": [
          {
            "key": "A",
            "text": "Le compte rendu sera de mauvaise qualité car l'IA ne comprend pas le métier."
          },
          {
            "key": "B",
            "text": "Le salarié risque de perdre du temps en recopiant les informations."
          },
          {
            "key": "C",
            "text": "Les données personnelles de ces clients pourraient être transmises à des serveurs tiers sans consentement."
          },
          {
            "key": "D",
            "text": "Le chatbot pourrait reformuler les noms de façon incorrecte."
          }
        ],
        "answer": "C",
        "explanation": "Les outils d'IA grand public envoient les données saisies vers des serveurs souvent situés hors du pays, potentiellement utilisées pour l'entraînement du modèle. Saisir les données personnelles d'autres personnes — clients, patients, élèves ou bénéficiaires — dans ces outils constitue une violation de confidentialité, même involontaire."
      },
      {
        "question": "Quelle est la meilleure définition du consentement éclairé dans le contexte de la collecte de données ?",
        "options": [
          {
            "key": "A",
            "text": "La personne concernée signe un formulaire sans en connaître le contenu exact."
          },
          {
            "key": "B",
            "text": "L'organisation décide des données à collecter selon ses propres besoins."
          },
          {
            "key": "C",
            "text": "La personne concernée est informée de façon compréhensible et donne son accord libre avant toute collecte."
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
        "question": "Vous recevez par messagerie une vidéo montrant un responsable d'ONG annoncer l'annulation d'une distribution alimentaire. Que faites-vous en premier ?",
        "options": [
          {
            "key": "A",
            "text": "Vous transférez immédiatement la vidéo à vos collègues pour les prévenir."
          },
          {
            "key": "B",
            "text": "Vous ignorez la vidéo car les informations reçues par messagerie sont toujours fausses."
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
        "explanation": "Face à une information importante reçue par un canal informel, la première étape est toujours de vérifier à la source officielle. Les deepfakes et la désinformation circulent très facilement dans les messageries. Le même réflexe vaut pour un message urgent qui semble venir de votre banque, de votre employeur ou de l'école de vos enfants : transférer sans vérifier peut causer des dommages graves."
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
            "text": "L'utilisation d'outils d'IA non approuvés, souvent sans en informer personne dans l'organisation."
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
        "explanation": "La Shadow AI désigne l'usage non encadré d'outils d'IA au sein d'une organisation, qu'il s'agisse d'une entreprise, d'une école, d'une administration ou d'une association. Même bien intentionné, cet usage expose la structure à des risques de confidentialité, de conformité et de qualité. La solution n'est pas d'interdire l'IA, mais d'établir un cadre clair d'utilisation approuvée."
      }
    ],
    "reflection": "Pensez à une activité de votre travail qui implique des données sur des personnes réelles — clients, patients, élèves, usagers, candidats, collègues ou bénéficiaires. Si l'IA y était utilisée, quels seraient les trois risques éthiques les plus importants ? Et quel garde-fou simple pourriez-vous mettre en place dès demain, sans budget supplémentaire, pour protéger ces personnes ?",
    "glossary": [
      {
        "term": "Biais",
        "definition": "Erreur systématique dans les résultats d'un système d'IA, causée par des données d'entraînement non représentatives ou des choix de conception qui favorisent certains groupes au détriment d'autres : un genre, une tranche d'âge, une région, une langue."
      },
      {
        "term": "Données personnelles",
        "definition": "Toute information permettant d'identifier directement ou indirectement une personne : nom, adresse, numéro de téléphone, photo, localisation GPS, état de santé, salaire, résultats scolaires, situation familiale."
      },
      {
        "term": "Souveraineté des données",
        "definition": "Principe selon lequel les données collectées dans un pays ou sur une communauté doivent rester sous le contrôle de ce pays ou de cette communauté, et non transférées sans accord vers des serveurs étrangers."
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
        "definition": "Usage d'outils d'IA non approuvés par une organisation, souvent à titre personnel et sans en informer qui que ce soit, exposant la structure à des risques de sécurité, de confidentialité et de conformité réglementaire."
      }
    ]
  },
  "en": {
    "id": "c6",
    "lessonNumber": 6,
    "title": "Ethics, Bias, and Data Protection — Using AI Responsibly",
    "objective": "By the end of this lesson, you will be able to identify the main sources of bias in AI systems and their concrete effects on very different groups of people, anywhere in the world. You will know how to protect the personal data of the people whose records you handle — customers, patients, students, service users, job applicants, colleagues, beneficiaries — by applying the principles of confidentiality and informed consent. You will be able to detect AI-generated misinformation and adopt good verification practices. You will put safeguards in place to prevent uncontrolled use of AI in your team, your company, your school, or your association.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Where Does AI Bias Come From?",
        "body": "An AI system learns from data. If that data does not reflect the diversity of the real world, the system reproduces — and sometimes amplifies — existing inequalities. Think of it like a cook who has only ever tasted food from one region: their dishes will suit their neighbors well, but may not work for everyone else. The problem therefore belongs to no single profession, no single country, and no single continent: it appears wherever the training data tells only part of the world's story.\n\nThe shapes bias takes look similar from one context to the next. A resume screening tool trained on a company's past hires may filter out women from a historically male profession, simply because it learned to reproduce that history. A model that has only seen the profiles of young graduates poorly assesses the paths of older or self-taught applicants. A decision support tool fed with big-city data works badly in rural areas, where distances, services, and habits are different. And a regional language that is seldom written — whether Quechua in South America, a minoritized language of Europe or Asia, Hausa, Wolof, or Bambara — is poorly understood by voice assistants, not because it is complex, but because it is missing from the data.\n\nSome of these biases have been particularly well documented in Africa. Facial recognition tools trained mainly on European or North American faces have shown significantly higher error rates on darker skin tones. A credit-scoring algorithm trained on traditional banking data penalizes people who use tontines or mobile money — perfectly sound financial practices that are simply absent from the training data. In practice, this can mean that a patient receives recommendations poorly suited to her context, that a farmer is denied a microloan, or that a capable applicant never gets past the first automated filter. Recognizing bias is the first step toward correcting it."
      },
      {
        "title": "Confidentiality and Data Sovereignty",
        "body": "When you type a person's name, health status, or family situation — a customer, a patient, a student, an applicant, a colleague — into an online AI tool, where does that data go? Most of the time, it is sent to servers located in another country, it may be used to improve the model, and it falls under the laws of the host country, not necessarily your own. This is the question of data sovereignty, and it arises in Niamey just as it does in Lisbon, Manila, or Montreal.\n\nMany countries have adopted a legal framework. The GDPR applies in the European Union and to any organization processing the data of people residing there. Niger's personal data protection law plays that role in Niger. Brazil has its LGPD, South Africa its POPIA, India its DPDP law, Canada its PIPEDA, and the list grows longer year after year. The details differ from one text to another, but they all set out the same simple principle: a person must know what data is collected about them, why, and must have given their agreement. This is informed consent. Find out which framework applies where you work: that is the one that governs you.\n\nIn practice, before using an AI tool to process information about other people, ask yourself three questions: Who can read this data? Where is it stored? Has it been anonymized? A field agent who enters names and addresses into a public chatbot, an accountant who pastes clients' payslips into one, a teacher who uploads a class's results: all of them expose third parties without meaning to. Prefer tools validated by your organization, and systematically anonymize sensitive data."
      },
      {
        "title": "Misinformation and Verification — Do Not Take Things at Face Value",
        "body": "Generative AI can produce text, images, videos, and voices of convincing quality. This is not inherently a problem — but it becomes dangerous when the content is false and difficult to detect. We speak of deepfakes for manipulated images or videos, and hallucinations for incorrect claims stated with confidence by a language model.\n\nThe damage is not reserved for major crises. A fake message that seems to come from your bank asking you to confirm a code, a false enrollment announcement attributed to a school, a voice imitating an employer demanding an urgent transfer, a neighborhood rumor passed around in a family group: all of this now circulates with a level of craft that fools careful people. In humanitarian settings, the consequences can be severe: a fake NGO communiqué announcing a non-existent evacuation can cause panic, and a fabricated situation report can influence funding decisions. During elections or crises, such content spreads very quickly through messaging apps.\n\nThe golden rule: verify any important information against two independent sources before sharing it or basing a decision on it. When faced with an urgent request that appears to come from a bank, an employer, or a government office, call back through the official channel you already know, never through the number or link supplied in the message. For images, free tools such as FotoForensics or Google's reverse image search help spot manipulation. For texts, ask yourself: is the author identifiable? Is the date clear? Does a recognized news outlet confirm the information? Never share doubtful content without prior verification."
      },
      {
        "title": "Good Practices and Collective Responsibility",
        "body": "Using AI responsibly is not solely an individual matter — it is also a collective responsibility. Shadow AI refers to the use of AI tools that have not been approved: an employee summarizing confidential reports in a public chatbot, a freelancer pasting in a client's contract, an intern uploading an internal file, without telling anyone. This is a risky practice, even when motivated by a genuine desire to save time.\n\nTransparency is a central pillar: if you used AI to produce a document, say so. This allows colleagues and partners to apply critical thinking to the result. Human oversight remains essential — AI proposes, and humans decide and take responsibility. A doctor may use AI to get a list of symptoms, but it is the doctor who examines the patient and makes the diagnosis. A recruiter may use a tool to sort applications, but it is the recruiter who answers the applicant and owns the rejection.\n\nIn your workplace, a few concrete actions make a real difference: establish a list of approved AI tools, train teams on basic risks, include an AI confidentiality clause in partner contracts, and require systematic human review of any document intended for customers, students, patients, service users, applicants, beneficiaries, or donors. If you work alone, as a freelancer or a volunteer, these rules apply too: write them down for yourself. These practices do not slow down work — they protect the trust you have spent years building."
      }
    ],
    "example": {
      "title": "When an Algorithm Fails to Recognize Faces — and How to Fix It",
      "challenge": "A humanitarian organization in the Sahel deploys a biometric AI system to identify beneficiaries during a food distribution. In the field, agents notice that the system fails to recognize about 30% of beneficiaries — almost exclusively women with darker skin tones and elderly people. The distribution takes twice as long, some beneficiaries leave without assistance, and community trust erodes. The tool was trained on photographic databases that were predominantly North American and European.",
      "solution": "The organization temporarily suspends the automatic system and returns to manual assisted verification. It documents all failure cases with photographs and metadata. It contacts the vendor and provides an additional dataset representative of the local population, collected with informed consent. In parallel, it establishes a mandatory human supervision protocol: any rejection by the system must be confirmed by a human agent before denying a beneficiary access. It trains its teams to identify biases and report any discrepancy.",
      "impact": "After correction and retraining on more representative data, the recognition error rate drops from 30% to less than 4%. Distribution time is halved, back to its normal level. No eligible beneficiary is refused without human intervention. The community regains trust in the process, and the organization now has a documented protocol reusable for future technology deployments."
    },
    "practice": {
      "title": "Mapping the Sensitive Data in Your Work",
      "instructions": [
        "Choose a real use case in your job or your activity where AI could be or is already being used (for example: summarizing meeting notes, translation, screening applications, analyzing records of customers, students, patients, or beneficiaries). Write down this use case on your phone.",
        "List all sensitive data involved in this use case: names, contact details, locations, health status, family situations, salaries, school results, photos. For each data type, note what could happen if it were exposed or used without authorization.",
        "For each sensitive data item identified, propose at least one concrete safeguard: anonymization before entry (replacing names with codes), collecting written consent, using a tool approved by your organization, or human review before sharing. Take a screenshot or a note of your list, to share at the next team meeting or to read back on your own if you are self-employed."
      ],
      "observation": "You will likely find that some risks were invisible before this exercise. That is normal: the dangers of a tool only become clear when you ask the right questions. This simple mapping can become the foundation of an AI policy for your organization, or your own rule of conduct if you work alone."
    },
    "quiz": [
      {
        "question": "A voice assistant understands neither Hausa nor a seldom-written regional language from another continent. What is the main cause of this problem?",
        "options": [
          {
            "key": "A",
            "text": "These languages are too complex to be processed by AI."
          },
          {
            "key": "B",
            "text": "The tool's training data did not contain enough examples of these languages."
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
        "explanation": "AI bias mainly comes from training data. Whether a language is spoken in Africa, South America, Europe, or Asia, if it is underrepresented in that data the model will perform poorly on it. This is not an inherent limitation of the language, but a lack of representation in the training data."
      },
      {
        "question": "An employee enters customers' names and addresses into a public chatbot to write up a report. What is the main risk?",
        "options": [
          {
            "key": "A",
            "text": "The report will be of poor quality because AI does not understand the profession."
          },
          {
            "key": "B",
            "text": "The employee risks wasting time recopying information."
          },
          {
            "key": "C",
            "text": "Those customers' personal data could be transmitted to third-party servers without consent."
          },
          {
            "key": "D",
            "text": "The chatbot might reformulate names incorrectly."
          }
        ],
        "answer": "C",
        "explanation": "Public AI tools send entered data to servers often located outside the country, potentially used for model training. Entering other people's personal data — customers, patients, students, or beneficiaries — into these tools constitutes a privacy violation, even if unintentional."
      },
      {
        "question": "What is the best definition of informed consent in the context of data collection?",
        "options": [
          {
            "key": "A",
            "text": "The person concerned signs a form without knowing its exact content."
          },
          {
            "key": "B",
            "text": "The organization decides which data to collect based on its own needs."
          },
          {
            "key": "C",
            "text": "The person concerned is informed in a comprehensible way and gives free agreement before any collection."
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
        "question": "You receive through a messaging app a video showing an NGO leader announcing the cancellation of a food distribution. What do you do first?",
        "options": [
          {
            "key": "A",
            "text": "You immediately forward the video to your colleagues to warn them."
          },
          {
            "key": "B",
            "text": "You ignore the video because information received through messaging apps is always false."
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
        "explanation": "When you receive important information through an informal channel, the first step is always to verify it through an official source. Deepfakes and misinformation spread very easily in messaging apps. The same reflex applies to an urgent message that seems to come from your bank, your employer, or your children's school: forwarding without verifying can cause serious harm."
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
            "text": "The use of AI tools that have not been approved, often without telling anyone in the organization."
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
        "explanation": "Shadow AI refers to the uncontrolled use of AI tools within an organization, whether a company, a school, a public office, or an association. Even when well-intentioned, it exposes the organization to risks of confidentiality, compliance, and quality. The solution is not to ban AI, but to establish a clear framework for approved use."
      }
    ],
    "reflection": "Think of an activity in your work that involves data about real people — customers, patients, students, service users, applicants, colleagues, or beneficiaries. If AI were used there, what would be the three most important ethical risks? And what simple safeguard could you put in place by tomorrow, without any additional budget, to protect those people?",
    "glossary": [
      {
        "term": "Bias",
        "definition": "A systematic error in the results of an AI system, caused by unrepresentative training data or design choices that favor certain groups at the expense of others: a gender, an age group, a region, a language."
      },
      {
        "term": "Personal data",
        "definition": "Any information that directly or indirectly identifies a person: name, address, phone number, photo, GPS location, health status, salary, school results, or family situation."
      },
      {
        "term": "Data sovereignty",
        "definition": "The principle that data collected in a country or about a community should remain under the control of that country or community, and not be transferred without agreement to foreign servers."
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
        "definition": "The use of AI tools not approved by an organization, often for personal use and without telling anyone, exposing the organization to security, privacy, and regulatory compliance risks."
      }
    ]
  },
  "ha": {
    "id": "c6",
    "lessonNumber": 6,
    "title": "Dabi'a, Nuna Bambanci, da Kare Bayanan Sirri — Amfani da AI da Hikima",
    "objective": "A karshen wannan darasin, za ku iya gane manyan abubuwan da ke haifar da nuna bambanci a cikin tsarin AI da tasirinsu kai tsaye kan kungiyoyin mutane mabambanta a duk fadin duniya. Za ku san yadda za ku kare bayanan sirri na mutanen da kuke sarrafa bayanansu — abokan ciniki, marasa lafiya, dalibai, masu amfani da sabis, masu neman aiki, abokan aiki, masu amfani da taimako — ta hanyar aiwatar da ka'idodin asiri da yarda da sani. Za ku iya gano karya da AI ke kirkira da kuma amfani da hanyoyin tabbatarwa masu kyau. Za ku aza tsare-tsare don hana amfani da AI ba tare da kulawa ba a kungiyarku, kamfaninku, makarantarku ko kungiyar sa kai.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Daga Ina Nuna Bambanci a AI ke Fitowa?",
        "body": "Tsarin AI yana koyo daga bayanan da ake ba shi. Idan wadannan bayanai ba su wakilci bambancin duniya ta ainihi ba, tsarin zai sake nuna — kuma wani lokaci zai kara — rashin daidaito da ke wanzu. Kamar mai girki ne da bai taba dandanar abincin wani yanki ba sai nasa: abincinsa zai yi kyau ga makwabtansa, amma ba zai dace da kowa ba. Don haka matsalar ba ta wata sana'a ce kadai ba, ba ta wata kasa ba, ba ta wata nahiya ba: tana bayyana duk inda bayanan horo ke ba da labarin wani bangare na duniya kawai.\n\nSiffofin nuna bambanci suna kama da juna daga wannan yanayi zuwa wancan. Kayan aiki na tantance takardun neman aiki da aka horar da tarihin daukar ma'aikata na wani kamfani na iya ware mata daga sana'ar da maza suka mamaye tun dadewa, saboda kawai ya koyi sake maimaita wannan tarihi. Tsarin da bai gani sai bayanan matasa masu digiri ba yana yin kuskure wajen kimanta hanyoyin masu shekaru da yawa ko wadanda suka koyi da kansu. Kayan aikin taimakon yanke shawara da aka ciyar da bayanan manyan birane yana aiki mara kyau a yankunan karkara, inda nisa, ayyuka da al'adu suka bambanta. Kuma harshen yanki da ba a rubuta shi sosai — ko Quechua ne a Kudancin Amurka, wani harshe mai rauni a Turai ko Asiya, Hausa, Wolof, ko Bambara — mataimakan murya ba sa fahimtar sa, ba don yana da wuya ba, amma don ba shi da wakilci a cikin bayanai.\n\nAn rubuta wasu daga cikin wadannan nuna bambanci musamman a Afirka. Kayan aiki na gane fuska da aka horar musamman da fuskokin Turai ko Arewacin Amurka sun nuna yawan kurakurai mafi girma a kan fata masu duhu. Algorithm din bayar da bashi da aka horar da bayanan banki na al'ada yana hukunta mutanen da ke amfani da tontine ko kudin waya — hanyoyin kudi masu kyau amma ba su da wakilci a cikin bayanan horo. A aikace, wannan na iya nufin cewa wata mara lafiya tana karbar shawarwarin da ba su dace da yanayinta ba, wani manomi an ki masa karamin bashi, ko kuma wata mai neman aiki mai iyawa ba ta taba wuce tacewar atomatik ta farko ba. Gane nuna bambanci shi ne mataki na farko na gyara shi."
      },
      {
        "title": "Asiri da Ikon Mallakan Bayanai",
        "body": "Lokacin da kuka rubuta suna, yanayin lafiya, ko halin iyali na wani mutum — abokin ciniki, mara lafiya, dalibi, mai neman aiki, abokin aiki — a cikin kayan aiki na AI a kan layi, ina wadannan bayanai ke tafiya? Yawancin lokaci, ana aika su zuwa sabobin da ke wata kasa, ana iya amfani da su don inganta tsarin, kuma suna karkashin dokokin kasar mai masaukinsu, ba lallai naku ba. Wannan shi ne tambayar ikon mallakan bayanai, kuma tana tasowa a Yamai kamar yadda take tasowa a Lisbon, Manila ko Montreal.\n\nKasashe da yawa sun kafa nasu tsarin doka. RGPD tana aiki a Kungiyar Turai da kuma ga duk wata kungiya da ke sarrafa bayanan mutanen da ke zaune a can. Dokar Nijar game da kare bayanan sirri tana wannan aikin a Nijar. Brazil tana da LGPD, Afirka ta Kudu tana da POPIA, Indiya tana da dokar DPDP, Kanada tana da dokar PIPEDA, kuma jerin yana karuwa shekara bayan shekara. Bayanan sun bambanta daga wata doka zuwa wata, amma duk suna kafa ka'ida daya mai sauki: mutum dole ya san wane bayanai ake tattarawa game da shi, me yasa, kuma ya ba da yarjejeniyarsa. Wannan shi ne yarda da sani. Ku nemi sanin tsarin da ke aiki inda kuke aiki: shi ne mai iko a kanku.\n\nA aikace, kafin ku yi amfani da kayan aiki na AI don sarrafa bayanai game da wasu mutane, ku tambayi kanku tambayoyi uku: wa zai iya karanta wadannan bayanai? Ina aka ajiye su? An boye sunayensu ne? Wakili a filin da ke rubuta sunaye da adiresoshi a cikin chatbot na jama'a, ma'aikacin lissafi da ke manna takardun albashin abokan cinikinsa a can, malamin da ke sanya sakamakon ajinsa: duk suna fallasa wasu mutane ba tare da son ransu ba. Ku fifita kayan aikin da kungiyarku ta amince da su, kuma ku boye bayanan sirri koyaushe."
      },
      {
        "title": "Karya ta AI da Tabbatarwa — Kar a Gaskata Kawai",
        "body": "AI mai kirkira na iya samar da rubutu, hotuna, bidiyo, da murya masu inganci mai gamsarwa. Wannan ba matsala ce a kanta ba — amma yana zama hadari lokacin da abin da aka samar karya ne kuma yana da wuyar ganewa. Muna kiran deepfakes hotuna ko bidiyo da aka gyaggyara, da hallucinations maganganu marasa daidai da tsarin harshe ke fadi da tabbaci.\n\nCutarwar ba ta manyan rikice-rikice kadai ba ce. Sakon karya da ke kama da ya fito daga bankinku yana neman ku tabbatar da lamba ta sirri, sanarwar rajista ta karya da aka dangana ga wata makaranta, murya da ke kwaikwayon ta shugaban aiki tana neman turawar kudi cikin gaggawa, jita-jitar unguwa da aka yada a cikin kungiyar iyali: duk wannan yana yaduwa yanzu da ingancin kera da ke yaudarar mutane masu hankali. A yanayin taimakon dan adam, sakamakon na iya zama mai tsanani: sanarwa ta karya daga wata NGO da ke bayyana ficewa da ba ta wanzu ba na iya haifar da firgici, kuma rahoton yanayi da aka kirkira na iya shafar yanke shawarar kudin shiga. A lokacin zabe ko rikici, wadannan abubuwa suna yaduwa cikin sauri a manhajojin sakonni.\n\nKa'ida ta zinariya: ku tabbatar da duk wata mahimmiyar bayanai ta hanyar tushe biyu masu zaman kansu kafin ku raba ta ko ku yanke shawara da ita. Ga bukata ta gaggawa da ke kama da ta fito daga banki, daga shugaban aiki, ko daga hukuma, ku sake kira ta hanyar hukuma da kuka riga kuka sani, ba ta lambar ko hanyar da ke cikin sakon ba. Ga hotuna, kayan aiki kyauta kamar FotoForensics ko binciken hoto na baya na Google suna taimakawa wajen gano gyaggyarawa. Ga rubutu, ku tambayi kanku: shin ana iya gane marubucin? Kwanan wata ta bayyana? Shin kafar labarai da aka amince da ita ta tabbatar da bayanan? Kar ku taba raba abin da ke da shakku ba tare da tabbatarwa ba."
      },
      {
        "title": "Hanyoyin Kyau da Alhakin Jama'a",
        "body": "Amfani da AI da hikima ba alhakin mutum daya ba ne kawai — alhakin jama'a ne ma. Shadow AI na nufin amfani da kayan aikin AI da ba a amince da su ba: ma'aikaci da ke takaita rahotanni masu asiri a cikin chatbot na jama'a, mai sana'a mai zaman kansa da ke manna kwangilar abokin ciniki a can, dalibi mai koyon aiki da ke sanya fayil na cikin gida, ba tare da sanar da kowa ba. Wannan aiki yana da hadari, ko da ya fito daga niyyar kwarai na adana lokaci.\n\nGaskiya ita ce ginshikin tsakiya: idan kun yi amfani da AI don samar da wata takarda, ku fada hakan. Wannan yana ba wa abokan aikinku da abokan tarayya damar yin amfani da tunani mai zurfin bincike kan sakamakon. Kulawa ta dan adam ta kasance dole — AI tana ba da shawara, dan adam ne ke yanke shawara kuma ke daukar alhakin. Likita na iya amfani da AI don samun jerin alamomin cuta, amma shi ne ke binciken mara lafiya kuma ke yanke hukunci. Mai daukar ma'aikata na iya amfani da kayan aiki don tantance takardun neman aiki, amma shi ne ke amsa wa mai nema kuma ke daukar alhakin kin yarda.\n\nA wurin aikinku, kananan ayyuka masu ma'ana suna yin babban bambanci: kafa jerin kayan aikin AI da aka amince da su, horar da kungiyoyi kan hadari na asali, hada takardar asiri ta AI a cikin kwangila da abokan tarayya, da saita bitar dan adam koyaushe ga duk wata takarda da aka nufa ga abokan ciniki, dalibai, marasa lafiya, masu amfani da sabis, masu neman aiki, masu amfani da taimako ko masu ba da kudin shiga. Idan kuna aiki kai kadai, a matsayin mai zaman kansa ko mai aikin sa kai, wadannan ka'idoji suna aiki ma: ku rubuta su domin kanku. Wadannan hanyoyin ba sa rage aiki — suna kare amincin da kuka shafe shekaru kuna ginawa."
      }
    ],
    "example": {
      "title": "Lokacin da Algorithm ba ta Gane Fuska — da Yadda Ake Gyara Hakan",
      "challenge": "Wata kungiyar taimakon dan adam a Sahel ta dauki tsarin biometric na AI don gane masu amfani da taimakon su lokacin rarraba abinci. A filin, wakilan sun lura cewa tsarin ya kasa gane kusan kashi 30 cikin dari na masu amfani da taimakon su — kusan kawai matan da ke da fata masu duhu da tsofaffi. Rarrabawa na daukar lokaci ninki biyu, wasu masu amfani da taimakon sun tafi ba tare da taimakon ba, kuma amincin al'umma ya ragu. An horar da kayan aikin da tarihin hoto da ya kasance musamman na Arewacin Amurka da Turai.",
      "solution": "Kungiyar ta dakatar da tsarin atomatik na dan lokaci kuma ta koma ga tabbatarwa ta hannu mai taimako. Ta rubuta duk lokuta na kuskure tare da hotuna da metadata. Ta sadar da mai sayar da kayan aiki kuma ta ba shi karin bayanan da ke wakilci yawan jama'ar yankin, da aka tattara tare da yarda da sani. A lokaci guda, ta kafa ka'idar kulawa ta dan adam dole ne: kowane kin yarda daga tsarin dole ya tabbata ta wakili mutum kafin a ki mara amfani da taimakon damar shiga. Ta horar da kungiyoyinta gane nuna bambanci da ba da rahoto game da kowane bambanci.",
      "impact": "Bayan gyara da sake horarwa akan bayanai mafi wakilci, yawan kurakuran gane fuska ya fado daga kashi 30 zuwa kasa da kashi 4 cikin dari. Lokacin rarrabawa ya koma rabin abin da yake, kamar yadda ya saba. Babu wanda ya cancanci amfani da taimako ya ki ba tare da shiga tsakani na dan adam ba. Al'ummar ta sake samun amincewar tsarin, kuma kungiyar yanzu tana da ka'idar da aka rubuta da za a iya sake amfani da ita don sauran aiwatar da fasaha."
    },
    "practice": {
      "title": "Zana Taswirar Bayanan Sirri na Aikinku",
      "instructions": [
        "Zabi wani amfani na ainihi a aikinku ko harkarku inda AI za ta iya amfani ko ana amfani da ita riga (misali: takaita rahotanni, fassara, tantance takardun neman aiki, nazarin bayanan abokan ciniki, dalibai, marasa lafiya ko masu amfani da taimako). Rubuta wannan amfani a wayarku.",
        "Jera duk bayanan sirri da ke cikin wannan amfani: sunaye, adiresoshi, wuraren zama, yanayin lafiya, halin iyali, albashi, sakamakon karatu, hotuna. Ga kowane nau'in bayanai, rubuta abin da zai iya faruwa idan an fallasa shi ko an yi amfani da shi ba tare da izini ba.",
        "Ga kowane bayanan sirri da kuka gano, ba da shawarar akalla tsari daya na ainihi: boye sunaye kafin shigar da bayanai (maye gurbin sunaye da lambar sirri), tattara yarda a rubuce, amfani da kayan aikin da kungiyarku ta amince da shi, ko bitar dan adam kafin raba. Dauki hoton allo ko wata lura ta jerin naku, don raba shi a taron kungiya mai zuwa ko don sake karanta shi kai kadai idan kuna aiki da kanku."
      ],
      "observation": "Watakila za ku gano cewa wasu hadari ba su bayyana kafin wannan aiki ba. Hakan al'ada ne: hadarin kayan aiki yana bayyana kawai lokacin da kuka yi tambayoyin da suka dace. Wannan taswira mai sauki na iya zama tushen ka'idar AI ta kungiyarku, ko jagorar ku idan kuna aiki kai kadai."
    },
    "quiz": [
      {
        "question": "Mataimakin murya bai fahimci Hausa ba, kuma bai fahimci wani harshen yanki da ba a rubuta shi sosai a wata nahiya ba. Menene babban dalilin wannan matsala?",
        "options": [
          {
            "key": "A",
            "text": "Wadannan harsuna suna da rikitarwa sosai don AI ta sarrafa su."
          },
          {
            "key": "B",
            "text": "Bayanan horo na kayan aikin ba su kunshi isassun misalan wadannan harsuna ba."
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
        "explanation": "Nuna bambanci na AI galibi yana fitowa daga bayanan horo. Ko ana magana da harshe a Afirka, a Kudancin Amurka, a Turai ko a Asiya, idan ba shi da isasshen wakilci a cikin wadannan bayanai, tsarin zai yi aiki mara kyau a kansa. Wannan ba iyaka ta halitta ta harshen ba ce, amma rashin wakilci ne a cikin bayanan horo."
      },
      {
        "question": "Wani ma'aikaci ya rubuta sunaye da adiresoshin abokan ciniki a cikin chatbot na jama'a don rubuta rahoto. Menene babban hadari?",
        "options": [
          {
            "key": "A",
            "text": "Rahoton zai zama mara inganci saboda AI ba ta fahimtar sana'ar ba."
          },
          {
            "key": "B",
            "text": "Ma'aikacin na iya bata lokaci wajen sake rubuta bayanai."
          },
          {
            "key": "C",
            "text": "Bayanan sirri na wadannan abokan ciniki na iya wucewa zuwa sabobin na waje ba tare da yarda ba."
          },
          {
            "key": "D",
            "text": "Chatbot din na iya sake rubuta sunayen ba daidai ba."
          }
        ],
        "answer": "C",
        "explanation": "Kayan aikin AI na jama'a suna aika bayanan da aka shigar zuwa sabobin da yawancin lokaci suna wajen kasar, kuma ana iya amfani da su don horar da tsarin. Shigar da bayanan sirri na wasu mutane — abokan ciniki, marasa lafiya, dalibai ko masu amfani da taimako — a cikin wadannan kayan aikin take hakkin asiri ne, ko da ba da gangan ba."
      },
      {
        "question": "Menene mafi kyawun ma'anar yarda da sani a yanayin tattara bayanai?",
        "options": [
          {
            "key": "A",
            "text": "Mutumin da abin ya shafa ya sanya hannu a takarda ba tare da sanin abin da ke cikinta ba."
          },
          {
            "key": "B",
            "text": "Kungiyar ta yanke shawarar wane bayanai za a tattara bisa bukatunta."
          },
          {
            "key": "C",
            "text": "An sanar da mutumin da abin ya shafa ta hanyar da za a fahimta kuma ya ba da yarjejeniyarsa ba tare da tilastawa ba kafin duk wani tattarawa."
          },
          {
            "key": "D",
            "text": "Ana tattara bayanai ba tare da bayyana sunaye ba, don haka babu bukatar yarda."
          }
        ],
        "answer": "C",
        "explanation": "Yarda da sani na nufin cewa mutumin da abin ya shafa yana fahimta bayyananniya wane bayanai ake tattarawa, me yasa, da kuma ta waye, kuma yana yarda da yardar rai ba tare da tilastawa ba. Boye sunaye yana rage hadari amma ba ya maye gurbin yarda don tattara farko."
      },
      {
        "question": "Kun karbi bidiyo ta manhajar sakonni da ke nuna wani shugaban NGO yana sanar da soke rarraba abinci. Menene kuke yi da farko?",
        "options": [
          {
            "key": "A",
            "text": "Nan da nan kuna aikawa da bidiyon zuwa abokan aikinku don gargade su."
          },
          {
            "key": "B",
            "text": "Kuna watsi da bidiyon saboda bayanan da ake samu ta manhajojin sakonni koyaushe karya ne."
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
        "explanation": "Lokacin da kuka karbi mahimmiyar bayanai ta hanyar da ba ta hukuma ba, mataki na farko koyaushe shine tabbatar da ita ta hanyar tushe na hukuma. Deepfakes da karya suna yaduwa cikin sauki a manhajojin sakonni. Wannan dabi'a guda tana aiki ga sakon gaggawa da ke kama da ya fito daga bankinku, daga shugaban aikinku, ko daga makarantar yaranku: aikawa ba tare da tabbatarwa ba na iya haifar da babbar cutarwa."
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
            "text": "Amfani da kayan aikin AI da ba a amince da su ba, galibi ba tare da sanar da kowa a cikin kungiyar ba."
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
        "explanation": "Shadow AI na nufin amfani da kayan aikin AI ba tare da kulawa a cikin wata kungiya ba, ko kamfani ne, makaranta, ofishin hukuma, ko kungiyar sa kai. Ko da niyyar ta kyau, wannan yana fallasa kungiyar ga hadari na asiri, bin ka'ida, da inganci. Maganin ba haramta AI ba ne, amma kafa tsari bayyananne na amfani da amintaccen shi."
      }
    ],
    "reflection": "Ku yi tunanin wani aiki na yau da kullum da ke kunshe da bayanan mutane na ainihi — abokan ciniki, marasa lafiya, dalibai, masu amfani da sabis, masu neman aiki, abokan aiki ko masu amfani da taimako. Idan AI ta yi amfani a wurin, wane hadari uku na dabi'a mafi muhimmanci za su kasance? Kuma wane tsari mai sauki za ku iya aza gobe, ba tare da karin kasafin kudi ba, don kare wadannan mutane?",
    "glossary": [
      {
        "term": "Nuna Bambanci (Bias)",
        "definition": "Kuskure na tsari a cikin sakamakon tsarin AI, wanda ke fitowa daga bayanan horo mara wakilci ko zabubbukan kira da ke fifita wasu kungiyoyi akan wasu: jinsi, rukunin shekaru, yanki, ko harshe."
      },
      {
        "term": "Bayanan Sirri (Données personnelles)",
        "definition": "Duk wani bayanai da ke gane mutum kai tsaye ko a kaikaice: suna, adireshi, lambar wayar tarho, hoto, wurin GPS, yanayin lafiya, albashi, sakamakon karatu, ko halin iyali."
      },
      {
        "term": "Ikon Mallakan Bayanai (Souveraineté des données)",
        "definition": "Ka'idar da ta ce bayanan da aka tattara a wata kasa ko game da wata al'umma dole su kasance karkashin ikon wannan kasa ko al'umma, kuma ba a canja su ba tare da yarjejeniya zuwa sabobin na kasashen waje."
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
        "definition": "Amfani da kayan aikin AI da kungiya ba ta amince da su ba, galibi don amfanin kai kuma ba tare da sanar da kowa ba, wanda ke fallasa kungiyar ga hadari na tsaro, asiri, da bin ka'idodin doka."
      }
    ]
  }
};
