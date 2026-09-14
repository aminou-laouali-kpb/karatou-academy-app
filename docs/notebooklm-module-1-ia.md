# Videos NotebookLM — Module 1 « Intelligence Artificielle » (c1 → c8)

> **Fichier genere.** Il est produit par `node scripts/build-notebooklm-module-1.mjs` a partir du
> contenu reel des lecons. Ne le modifiez pas a la main : corrigez la lecon, puis relancez le script.

Pour chaque lecon vous trouverez ci-dessous **la source a charger dans NotebookLM** (version francaise
et version anglaise) et **le prompt de generation** correspondant. Une video par lecon et par langue,
soit 16 videos, plus une video d'introduction du module (optionnelle).

## Cadrage editorial

Karatou Academy s'adresse a **toute personne curieuse de l'IA**, quel que soit son pays et son metier :
salaries, etudiants, independants, agents de terrain, benevoles. Les lecons s'appuient sur des exemples
africains et humanitaires parce qu'ils sont concrets et sous-representes ailleurs — **ce ne sont pas des
limites de public**. Chaque prompt ci-dessous contient donc une consigne explicite : garder ces exemples
comme illustrations, mais ouvrir a d'autres contextes et d'autres regions, et ne jamais presenter le
cours comme reserve a l'Afrique ou au secteur humanitaire.

Deux autres regles figurent dans chaque prompt :

- **aucun chiffre invente** — le module enseigne la verification des sources, ses propres videos doivent
  s'y tenir : rien qui ne soit dans le document source ;
- **chaque terme technique explique a sa premiere apparition**.

## Mode d'emploi (une fois par lecon et par langue)

1. Creer un notebook NotebookLM dedie a la lecon.
2. Coller la source de la section correspondante (ou l'enregistrer en `.md` et l'uploader).
3. **Video Overview** → **Customize**, coller le prompt.
4. Regler la langue de sortie du notebook sur **Francais** ou **English** *avant* de generer.
5. Generer, telecharger le MP4.
6. Publier sur YouTube en **non repertorie**, recuperer l'identifiant apres `watch?v=`.
7. Coller `https://www.youtube.com/embed/IDENTIFIANT` dans le champ `video.fr` / `video.en` de la lecon
   — depuis `/admin/lecons` (aucun deploiement necessaire) ou directement dans le fichier source.
8. Verifier l'onglet **Video** de la lecon dans l'application.

### Haoussa

NotebookLM ne genere pas de voix haoussa fiable. `video.ha` reste vide par defaut ; les trois options
possibles (laisser vide, reutiliser la video FR, ajouter des sous-titres haoussa sur YouTube) restent
une decision projet. Le texte de la lecon, lui, est integralement disponible en haoussa dans l'application.

## Etat des videos

| Lecon | Titre | Duree cible | Fichier a mettre a jour |
|---|---|---|---|
| c1 | Introduction à l'IA — Qu'est-ce que c'est vraiment ? | 5 min | `src/data/lessonContent.ts (FR) + src/data/localizedContent.ts (EN et HA)` |
| c2 | Comprendre les LLMs — comment ChatGPT et Claude « parlent » vraiment | 5 a 6 min | `src/data/lessons/ia-c2-llms.ts` |
| c3 | Prompt Engineering — donner les bonnes consignes à l'IA | 5 a 6 min | `src/data/lessons/ia-c3-prompting.ts` |
| c4 | L'IA dans votre organisation — choisir les bons cas d'usage | 5 a 6 min | `src/data/lessons/ia-c4-organisations.ts` |
| c5 | Automatiser sans perdre le contrôle — l'humain dans la boucle | 5 min | `src/data/lessons/ia-c5-automatisation.ts` |
| c6 | Éthique, biais et protection des données — utiliser l'IA de façon responsable | 5 a 6 min | `src/data/lessons/ia-c6-ethique.ts` |
| c7 | Votre boîte à outils IA — choisir et combiner les bons outils | 5 min | `src/data/lessons/ia-c7-outils.ts` |
| c8 | Évaluation finale — validez vos acquis et obtenez votre certificat | 5 a 6 min | `src/data/lessons/ia-c8-evaluation.ts` |

---

## Video d'introduction du module (optionnelle)

**Source** : la liste des huit lecons et la description du module (page du module dans l'application).

### Prompt FR

```text
Cree une video de 3 a 4 minutes qui presente le module « Intelligence Artificielle » de Karatou Academy. Public : toute personne curieuse de l'IA — salarie, etudiant, independant, agent de terrain, benevole — sans aucun prerequis technique, partout dans le monde. La source contient surtout des exemples africains et humanitaires : garde-en un ou deux comme illustrations concretes, mais ouvre a d'autres contextes (entreprise, administration, ecole, petite structure) et a d'autres regions. Ne presente jamais ce cours comme reserve a l'Afrique ni au secteur humanitaire. Explique le parcours en huit lecons : comprendre ce qu'est l'IA, comment fonctionnent les modeles de langage, ecrire de bonnes consignes, choisir un cas d'usage, automatiser sans perdre le controle, utiliser l'IA de facon responsable, choisir ses outils, puis valider ses acquis. Insiste sur le fait qu'aucun prerequis technique n'est necessaire et que tout est faisable depuis un telephone. Termine en invitant a commencer par la premiere lecon. Ton clair et chaleureux, vouvoiement, phrases courtes. Explique chaque terme technique la premiere fois. N'invente aucun chiffre, aucune date et aucune source qui ne figure pas dans le document source.
```

### Prompt EN

```text
Create a 3 to 4 minute video introducing the Karatou Academy "Artificial Intelligence" module. Audience: anyone curious about AI — employees, students, freelancers, field workers, volunteers — with no technical background, anywhere in the world. The source leans on African and humanitarian examples: keep one or two as concrete illustrations, but open up to other settings (business, public sector, school, small organisation) and other regions. Never present this course as being only for Africa or only for the humanitarian sector. Explain the eight-lesson path: understand what AI is, how language models work, write good instructions, choose a use case, automate without losing control, use AI responsibly, choose your tools, then validate what you learned. Stress that no technical background is required and everything can be done from a phone. End by inviting the viewer to start with the first lesson. Clear, warm tone, short sentences. Explain every technical term the first time it appears. Do not invent any figure, date or source that is not in the source document.
```

---

# Lecon 1 — Introduction à l'IA — Qu'est-ce que c'est vraiment ?

**Duree cible** : 5 minutes · **Fichier** : `src/data/lessonContent.ts (FR) + src/data/localizedContent.ts (EN et HA)`

### Prompt FR

```text
Cree une video explicative de 5 minutes a partir du document source.
Public : toute personne curieuse de l'IA — salarie, etudiant, independant, agent de terrain, benevole — sans aucun prerequis technique, partout dans le monde. La source contient surtout des exemples africains et humanitaires : garde-en un ou deux comme illustrations concretes, mais ouvre a d'autres contextes (entreprise, administration, ecole, petite structure) et a d'autres regions. Ne presente jamais ce cours comme reserve a l'Afrique ni au secteur humanitaire.
Objectif : comprendre ce qu'est vraiment l'IA, ce qu'elle sait faire et ce qu'elle ne sait pas faire.
Couvre dans l'ordre : 1) une definition simple, sans jargon : l'IA reconnait des modeles dans des donnees, ce n'est pas de la magie (analogie de la caisse d'epargne rotative) ; 2) comment elle apprend : des exemples en quantite, et le risque de biais quand ces exemples ne representent qu'une partie du monde ; 3) l'IA que l'on utilise deja sans le savoir : filtres anti-spam, itineraires, detection de fraude sur les paiements, IA generative ; 4) l'IA sur le terrain aujourd'hui (agriculture, sante, education) et le vrai frein : l'infrastructure, pas l'algorithme.
Sois honnete sur ce point : l'IA ne remplace pas le jugement humain et ne vaut que ce que valent ses donnees.
Termine par : inviter a reperer, dans sa propre journee, une IA qu'on utilise sans y penser.
Ton clair et chaleureux, vouvoiement, phrases courtes. Explique chaque terme technique la premiere fois. N'invente aucun chiffre, aucune date et aucune source qui ne figure pas dans le document source.
```

### Source FR (a charger dans le notebook)

```markdown
# Introduction à l'IA — Qu'est-ce que c'est vraiment ?

## Objectif
L'objectif de cette leçon est de démystifier l'intelligence artificielle en définissant ses principes de base, son fonctionnement simplifié et ses applications concrètes — dans la vie quotidienne, au travail et dans les projets de développement, partout dans le monde.

## L'IA n'est pas de la science-fiction
L'intelligence artificielle n'est pas un robot venu du futur, c'est un outil qui travaille déjà à vos côtés pour résoudre des problèmes concrets. Contrairement aux logiciels traditionnels qui suivent des règles fixes, l'IA désigne des systèmes informatiques capables d'effectuer des tâches nécessitant une forme d'intelligence humaine : comprendre le langage, reconnaître des images ou prendre des décisions.

Imaginez la personne qui tient une caisse d'épargne rotative — une tontine en Afrique de l'Ouest, une tanda au Mexique, un chit fund en Inde. Au fil des années, elle prédit qui paiera à l'heure et qui risque d'avoir des difficultés, simplement en observant les habitudes passées. C'est exactement ce que fait l'IA. Elle n'est pas "magique" ; elle traite des informations pour identifier des modèles (ou "patterns").

Cette technologie est déjà une réalité de terrain : dans une enquête menée en 2025 auprès de professionnels humanitaires de 144 pays, 93 % déclarent utiliser ou avoir utilisé l'IA dans leur travail. Elle ne remplace pas l'empathie humaine, mais elle agit comme un assistant puissant capable de trier des milliers de listes de bénéficiaires ou de traduire instantanément des besoins urgents dans des zones reculées.

## Comment l'IA apprend
Apprendre à une machine ne demande pas de formules mathématiques complexes pour l'utilisateur, mais énormément de données de qualité. Si l'IA est le moteur, les données sont son carburant. Le processus principal, appelé "Machine Learning" (apprentissage automatique), permet à l'ordinateur d'apprendre sans être explicitement programmé pour chaque détail.

Imaginez que vous montriez à un enfant des milliers de photos de feuilles de manioc saines et de feuilles malades. À force de répétition, l'enfant finit par reconnaître les signes d'une infection sans que vous n'ayez à lui expliquer chaque nervure. L'IA fonctionne de la même manière : elle "vectorise" les informations, c'est-à-dire qu'elle transforme des textes ou des images en représentations numériques pour les comparer.

Attention : si les exemples ne montrent qu'une partie du monde, le modèle hérite de ce déséquilibre. Un système entraîné uniquement sur des feuilles de vigne européennes sera médiocre sur du manioc ou du caféier. C'est ce qu'on appelle un biais, et nous y reviendrons en détail à la leçon 6.

Pour être fiable, ce système nécessite un "pipeline" de données robuste — une chaîne de nettoyage et de préparation qui garantit que l'information est fraîche et sans erreurs. Sans données propres, même le modèle le plus sophistiqué reste une coquille vide, incapable de produire des résultats pertinents pour votre communauté.

## L'IA que vous utilisez déjà
Vous avez probablement déjà utilisé l'IA aujourd'hui sans même vous en rendre compte, car elle est intégrée dans vos applications préférées. Sur WhatsApp, les filtres antispam et les suggestions de mots reposent sur des modèles de langage. Lorsque vous utilisez Google Maps ou des outils SIG pour trouver l'itinéraire le plus rapide entre deux quartiers, une IA analyse en temps réel les flux de données pour optimiser votre trajet.

Plus important encore, les systèmes de paiement — M-Pesa au Kenya, Orange Money en Afrique de l'Ouest, UPI en Inde, Pix au Brésil ou votre carte bancaire — utilisent l'IA pour détecter les fraudes et sécuriser vos transactions en analysant des millions d'opérations en continu.

Dans le secteur humanitaire, 70 % des praticiens sondés intègrent désormais des outils comme ChatGPT ou Claude dans leurs flux de travail quotidiens ou hebdomadaires pour rédiger des rapports ou polir des communications professionnelles. Ces outils, dits "IA générative", ne font pas que traiter l'information : ils créent du contenu (texte, audio ou image) pour vous faire gagner un temps précieux dans vos tâches administratives et techniques.

## L'IA sur le terrain aujourd'hui
L'IA ne sert pas qu'à discuter : elle transforme déjà l'agriculture, la santé et l'éducation, et souvent là où les moyens sont les plus rares.

Dans le secteur agricole, des équipes de terrain utilisent l'imagerie satellite et la reconnaissance de modèles pour cartographier les points d'eau et planifier la maintenance des pompes avant la panne ; ailleurs, une simple photo de feuille prise au téléphone suffit à détecter une maladie de la culture. Dans le domaine de la santé, des assistants conversationnels épaulent les soignants — conseils sur la gestion du stress, soutien psychologique, tri des symptômes — particulièrement là où les médecins sont rares. L'éducation n'est pas en reste : des applications comme aprendIA en République Démocratique du Congo utilisent des agents conversationnels pour la formation continue des enseignants.

Ces solutions vont plus loin que les outils commerciaux classiques parce qu'elles s'adaptent aux réalités locales : fonctionnement hors ligne, compréhension des langues et dialectes du terrain. Car le principal obstacle n'est pas l'algorithme, c'est l'infrastructure : connexion instable, électricité intermittente, coût des données mobiles. Dans les zones reculées — d'Afrique rurale, d'Asie du Sud ou d'Amazonie — c'est cette réalité matérielle, bien avant la performance des modèles, qui décide de ce qui fonctionne vraiment. Et c'est précisément cette contrainte qui pousse à créer des systèmes plus sobres, plus agiles et mieux ciblés.

## Cas concret — Chatbot d'IA pour la formation des soignants en Afrique
Le probleme : Les soignants en zones isolées manquaient de formation sur la sauvegarde des enfants et la santé mentale, avec peu d'accès aux formateurs physiques.
La solution : Un chatbot construit sur Microsoft Copilot, capable de répondre anonymement aux questions complexes des adultes et des jeunes sur des sujets sensibles.
L'impact : Après avoir renforcé la transparence sur la protection des données et l'anonymat du système, l'organisation a constaté une augmentation de 600 % de l'adoption de l'outil. Ce succès démontre que l'IA peut combler les lacunes éducatives massives lorsqu'elle est adaptée culturellement et qu'elle instaure une relation de confiance avec ses utilisateurs.

## Mise en pratique — Testez l'IA de traduction sur votre téléphone
1. Ouvrez une application de traduction (comme Google Translate) ou un assistant (comme ChatGPT) sur votre téléphone.
2. Utilisez la fonction "Audio" ou "Micro" pour dire une phrase complexe dans votre langue locale ou en français familier utilisé dans votre région.
3. Demandez à l'outil de traduire cette phrase en anglais, puis de la transformer en un e-mail professionnel formel.
A observer : L'IA a-t-elle capté les nuances de votre expression ? Notez une erreur ou une réussite frappante. Cela vous montre comment l'IA peut servir de pont entre votre réalité locale et les standards administratifs globaux.

## Glossaire
- Intelligence Artificielle (IA) : Systèmes capables d'imiter l'intelligence humaine pour comprendre le langage, reconnaître des images et prendre des décisions basées sur des données.
- Machine Learning : Une méthode d'IA où l'ordinateur apprend à partir d'exemples et de données au lieu de suivre des instructions programmées ligne par ligne.
- IA Générative (Gen AI) : Une catégorie d'IA capable de créer de nouveaux contenus, comme rédiger un texte, générer une image ou transformer une voix en texte.
- Biais : Erreurs ou préjugés dans les résultats d'une IA, souvent causés par des données d'entraînement incomplètes ou non représentatives d'une population.
- Souveraineté des données : Le droit et le contrôle des individus ou des pays sur la manière dont leurs données sont collectées, stockées et utilisées par les technologies.
- IA Fantôme (Shadow AI) : L'utilisation d'outils d'IA par des employés de manière non officielle, sans que leur organisation n'ait mis en place de règles ou de supervision.
```

### Prompt EN

```text
Create a 5 minute explainer video from the source document.
Audience: anyone curious about AI — employees, students, freelancers, field workers, volunteers — with no technical background, anywhere in the world. The source leans on African and humanitarian examples: keep one or two as concrete illustrations, but open up to other settings (business, public sector, school, small organisation) and other regions. Never present this course as being only for Africa or only for the humanitarian sector.
Goal: understand what AI really is, what it can do and what it cannot.
Cover in this order: 1) a simple, jargon-free definition: AI finds patterns in data, it is not magic (the rotating savings group analogy); 2) how it learns: lots of examples, and the bias risk when those examples only show part of the world; 3) the AI you already use without noticing: spam filters, route planning, payment fraud detection, generative AI; 4) AI in the field today (agriculture, health, education) and the real bottleneck: infrastructure, not the algorithm.
Be honest about this: AI does not replace human judgement and is only as good as its data.
End with: invite the viewer to spot one AI they use in their own day without thinking about it.
Clear, warm tone, short sentences. Explain every technical term the first time it appears. Do not invent any figure, date or source that is not in the source document.
```

### Source EN (to load in the notebook)

```markdown
# Introduction to AI — what it really is

## Objective
This lesson demystifies artificial intelligence: what it is, how it learns in simple terms, and where it already shows up in daily life, at work and in development projects, anywhere in the world.

## AI is not science fiction
Artificial intelligence is not a robot from the future. It is a tool already working alongside you on concrete problems. Unlike traditional software that follows fixed rules, AI describes computer systems able to perform tasks that normally require a form of human intelligence: understanding language, recognizing images, or supporting decisions.

Picture the person who runs a rotating savings group — a tontine in West Africa, a tanda in Mexico, a chit fund in India. Over the years they can predict who will pay on time and who may struggle, simply from watching past habits. That is exactly what AI does. It is not "magic"; it processes information to identify patterns.

This is already an everyday reality: in a 2025 survey of humanitarian professionals across 144 countries, 93 % said they use or have used AI in their work. It does not replace human empathy, but it acts as a powerful assistant that can sort through thousands of beneficiary records or instantly translate urgent needs reported from remote areas.

## How AI learns
Teaching a machine does not require complex mathematics from you, the user — it requires a large amount of good data. If AI is the engine, data is the fuel. The main process, called machine learning, lets a computer learn without being explicitly programmed for every detail.

Imagine showing a child thousands of photos of healthy and diseased cassava leaves. Through repetition, the child learns to recognize an infection without you explaining every vein. AI works the same way: it "vectorizes" information, turning text or images into numerical representations it can compare.

Be careful: if the examples only show one part of the world, the model inherits that imbalance. A system trained only on European grapevine leaves will perform poorly on cassava or coffee. This is what we call bias, and lesson 6 covers it in depth.

To be reliable, such a system needs a solid data "pipeline" — a chain of cleaning and preparation that keeps information fresh and error-free. Without clean data, even the most sophisticated model is an empty shell, unable to produce results that mean anything for your community.

## The AI you already use
You have probably used AI today without noticing, because it is built into the apps you already open. On WhatsApp, spam filters and word suggestions rely on language models. When you use a maps app to find the fastest route across town, an AI analyses live traffic data to optimize your trip.

More importantly, payment systems — M-Pesa in Kenya, Orange Money in West Africa, UPI in India, Pix in Brazil, or your bank card — use AI to detect fraud and secure your transactions by analysing millions of operations continuously.

In the humanitarian sector, 70 % of surveyed practitioners now use tools such as ChatGPT or Claude in their daily or weekly workflow to draft reports or polish professional communication. These tools, known as "generative AI", do more than process information: they create content — text, audio or images — saving you valuable time on administrative and technical work.

## AI in the field today
AI is not only for conversation: it is already transforming agriculture, health and education, often precisely where resources are scarcest.

In agriculture, field teams use satellite imagery and pattern recognition to map water points and service pumps before they break down; elsewhere, a single leaf photo taken on a phone is enough to detect a crop disease. In health, conversational assistants support care workers — stress management advice, psychological support, symptom triage — especially where doctors are scarce. Education follows: applications such as aprendIA in the Democratic Republic of Congo use conversational agents for ongoing teacher training.

These solutions go further than off-the-shelf commercial tools because they adapt to local realities: offline operation, and understanding of the languages and dialects actually spoken. The main obstacle is not the algorithm, it is infrastructure: unstable connectivity, intermittent electricity, the cost of mobile data. In remote areas — rural Africa, South Asia, the Amazon — that material reality, far more than model performance, decides what actually works. And it is exactly that constraint which pushes people to build leaner, more agile, better targeted systems.

## Real case — An AI chatbot for training care workers
Challenge : Care workers in isolated areas had little training on child safeguarding and mental health, with almost no access to in-person trainers.
Solution : A chatbot built on Microsoft Copilot, able to answer complex questions from adults and young people anonymously, including on sensitive topics.
Impact : After the organization strengthened transparency about data protection and the anonymity of the system, adoption of the tool rose by 600 %. This shows that AI can close massive training gaps when it is culturally adapted and builds a relationship of trust with its users.

## Practice — Test AI translation on your phone
1. Open a translation app (such as Google Translate) or an assistant (such as ChatGPT) on your phone.
2. Use the audio or microphone function to say a complex sentence in your local language, or in the informal register you actually speak.
3. Ask the tool to translate that sentence into English, then to rewrite it as a formal professional email.
What to notice : Did the AI capture the nuance of what you said? Note one clear mistake and one striking success. This shows you how AI can bridge your everyday reality and formal written standards.

## Glossary
- Artificial Intelligence (AI) : Systems able to imitate human abilities in order to understand language, recognize images and support decisions based on data.
- Machine Learning : An AI method where the computer learns from examples and data instead of following instructions written line by line.
- Generative AI (Gen AI) : A category of AI able to create new content: writing a text, generating an image, or turning speech into text.
- Bias : Errors or prejudice in an AI's results, usually caused by training data that is incomplete or not representative of a population.
- Data sovereignty : The right and control that individuals or countries hold over how their data is collected, stored and used by technology.
- Shadow AI : The use of AI tools by employees unofficially, without their organization having set any rules or oversight.
```


---

# Lecon 2 — Comprendre les LLMs — comment ChatGPT et Claude « parlent » vraiment

**Duree cible** : 5 a 6 minutes · **Fichier** : `src/data/lessons/ia-c2-llms.ts`

### Prompt FR

```text
Cree une video explicative de 5 a 6 minutes a partir du document source.
Public : toute personne curieuse de l'IA — salarie, etudiant, independant, agent de terrain, benevole — sans aucun prerequis technique, partout dans le monde. La source contient surtout des exemples africains et humanitaires : garde-en un ou deux comme illustrations concretes, mais ouvre a d'autres contextes (entreprise, administration, ecole, petite structure) et a d'autres regions. Ne presente jamais ce cours comme reserve a l'Afrique ni au secteur humanitaire.
Objectif : comprendre comment un grand modele de langage (ChatGPT, Claude, Gemini) produit du texte.
Couvre dans l'ordre : 1) un LLM predit le mot suivant, il ne « sait » rien (analogie du conteur tres eloquent) ; 2) tokens et fenetre de contexte expliques simplement : la memoire de travail du modele ; 3) forces et limites : hallucinations, date de coupure, biais — la confiance n'est pas l'exactitude ; 4) bien s’en servir : verifier les faits, ne jamais saisir de donnees personnelles, se mefier des langues peu representees.
Sois honnete sur ce point : un LLM peut se tromper avec assurance, y compris sur un chiffre ou une source.
Termine par : la regle d’or : toute information importante se verifie a la source avant usage.
Ton clair et chaleureux, vouvoiement, phrases courtes. Explique chaque terme technique la premiere fois. N'invente aucun chiffre, aucune date et aucune source qui ne figure pas dans le document source.
```

### Source FR (a charger dans le notebook)

```markdown
# Comprendre les LLMs — comment ChatGPT et Claude « parlent » vraiment

## Objectif
À la fin de cette leçon, vous saurez expliquer ce qu'est un grand modèle de langage (LLM) et comment il génère du texte par prédiction. Vous serez capable d'identifier ses forces et ses limites, notamment les hallucinations et la date de coupure. Vous saurez l'utiliser avec discernement dans votre contexte professionnel africain, en protégeant les données sensibles de vos bénéficiaires.

## Qu'est-ce qu'un LLM ? Ni encyclopédie, ni oracle
ChatGPT, Claude, Gemini — ces outils font partie de la famille des Grands Modèles de Langage, ou LLM (Large Language Models). Un LLM est un programme informatique entraîné sur des milliards de pages de texte : articles, livres, forums, sites web, rapports d'ONG. Grâce à cet entraînement massif, il a appris des régularités dans le langage — un peu comme un enfant qui apprend à parler en écoutant des milliers de conversations.

Mais attention : un LLM ne « sait » rien au sens humain du mot. Il ne consulte pas une base de données encyclopédique pour vous répondre. Il prédit le mot le plus probable à chaque étape, comme si vous demandiez à quelqu'un de compléter une phrase commencée. Imaginez un griot très éloquent qui a mémorisé des milliers d'histoires : il peut en raconter de nouvelles de façon convaincante, mais il peut aussi mélanger des détails ou en inventer.

Concrètement, quand vous demandez à Claude de rédiger un rapport sur la nutrition au Sahel, il ne cherche pas dans une base de données officielle de la FAO. Il génère du texte qui ressemble à ce qu'un rapport sur ce sujet devrait contenir, selon les textes sur lesquels il a été entraîné. C'est puissant — et c'est aussi la source de ses limites.

## Comment il « lit » votre message — tokens et fenêtre de contexte
Avant de vous répondre, le LLM découpe votre message en petits morceaux appelés tokens. Un token correspond environ à un mot court, ou à une partie de mot long. Par exemple, « manioc » sera découpé en deux tokens, et « bonjour » en un seul. Ce découpage est invisible pour vous, mais il est fondamental pour la machine.

Le LLM ne peut traiter qu'un certain nombre de tokens à la fois : c'est ce qu'on appelle la fenêtre de contexte. Pensez-y comme à la mémoire de travail d'un collègue : si vous lui donnez un document de 200 pages à lire en même temps qu'une conversation, il va commencer à oublier les premières pages pendant qu'il lit les dernières. De la même façon, si votre échange avec le LLM devient très long, il peut « oublier » ce que vous lui avez dit au début.

Dans la pratique, cela signifie que pour les agents de terrain qui travaillent sur mobile avec une connexion limitée : gardez vos messages concis et structurés. Si vous posez une question complexe sur la distribution alimentaire dans un village du Niger, donnez le contexte essentiel dans la même requête plutôt que de le faire en dix messages séparés. Le LLM sera plus précis et vous gagnerez de la bande passante.

## Forces et limites — fluidité oui, mais vérification toujours
Les LLMs ont des forces réelles : ils rédigent rapidement, reformulent dans plusieurs langues, résument de longs documents, et s'adaptent à des styles variés. Pour une coordinatrice d'ONG à Niamey qui doit rédiger un rapport bailleur en anglais alors que sa langue de travail est le français, c'est un gain de temps considérable : plusieurs heures économisées sur un seul document, comme le montre l'exemple de cette leçon.

Mais les LLMs ont aussi des limites sérieuses. La première est l'hallucination : le modèle peut générer des informations fausses avec une apparente confiance. Il peut citer un article scientifique qui n'existe pas, ou donner un chiffre de bénéficiaires qui ne correspond à aucune réalité. Confiance ne signifie pas exactitude — c'est la règle d'or à retenir. La deuxième limite est la date de coupure (knowledge cutoff) : le modèle ne connaît pas les événements survenus après sa dernière mise à jour. Si une épidémie ou une crise humanitaire a éclaté récemment au Tchad, le LLM pourrait vous donner des informations obsolètes.

Il existe aussi des biais : les LLMs ont été entraînés principalement sur des textes en anglais, produits majoritairement par des auteurs du Nord global. Leurs réponses sur les réalités africaines — les systèmes de tontine, les pratiques agricoles locales, les langues comme le haoussa ou le bambara — peuvent être moins précises, incomplètes, voire stéréotypées. Cela ne les rend pas inutiles, mais cela impose une vigilance supplémentaire.

## Bien utiliser un LLM en contexte africain — vérification et protection des données
Pour tirer le meilleur d'un LLM dans votre contexte professionnel, trois principes sont essentiels. Premier principe : vérifiez systématiquement les faits. Comme vous le feriez avec un rapport préliminaire rédigé par un stagiaire motivé mais peu expérimenté, relisez chaque affirmation importante. Si le LLM cite un taux de malnutrition ou un nombre de bénéficiaires, croisez l'information avec une source officielle (OCHA, PNUD, Ministère de la Santé).

Deuxième principe : ne saisissez jamais de données personnelles identifiables sur vos bénéficiaires. Les noms, villages, états de santé, situations familiales de personnes vulnérables ne doivent pas être copiés dans un LLM public. La plupart de ces outils stockent vos conversations pour améliorer leurs modèles. Si vous travaillez avec des données sensibles — comme c'est souvent le cas pour les agents de terrain qui gèrent des distributions alimentaires ou des dossiers de protection — utilisez des données anonymisées ou des cas fictifs représentatifs.

Troisième principe : soyez prudent avec les langues locales. Si vous essayez de générer un message en haoussa ou en mooré pour communiquer avec des communautés rurales, le résultat peut paraître correct sans l'être vraiment. Le LLM a été beaucoup moins entraîné sur ces langues que sur le français ou l'anglais. Faites toujours valider le contenu par un locuteur natif avant diffusion. De la même façon qu'on ne distribue pas un médicament sans notice vérifiée, on ne diffuse pas un message communautaire sans validation locale.

## Cas concret — L'ONG SahelAid et le rapport bailleur : entre gain de temps et vigilance
Le probleme : L'équipe de coordination de SahelAid (ONG basée à Agadez) doit soumettre un rapport trimestriel à son bailleur européen dans 48 heures. La coordinatrice doit rédiger 15 pages en anglais, croisant des données de terrain en français et en haoussa. Elle n'a jamais utilisé de LLM auparavant et craint de manquer de temps.
La solution : Elle utilise Claude pour structurer et rédiger une première version en anglais à partir de ses notes de terrain en français. Elle fournit au LLM uniquement des données agrégées et anonymisées (pas de noms de bénéficiaires). Elle demande ensuite au LLM de reformuler les sections techniques dans un registre adapté aux bailleurs institutionnels. En parallèle, elle demande à son collègue haoussa-phone de vérifier les termes culturels traduits.
L'impact : Le rapport est produit en 6 heures au lieu de 18 heures habituellement — un gain de 12 heures de travail. Lors de la relecture humaine, l'équipe identifie un chiffre de couverture vaccinale halluciné (87 % au lieu de 62 % selon les données terrain). La correction est faite avant soumission. Suite à cet épisode, SahelAid adopte une procédure systématique : tout chiffre généré par IA est surligné en jaune et vérifié par une deuxième personne avant validation du rapport.

## Mise en pratique — Repérer une hallucination en situation réelle
1. Ouvrez un assistant IA (Claude, ChatGPT ou autre) sur votre téléphone et posez-lui une question factuelle précise sur votre secteur ou votre pays — par exemple : « Quel est le taux de couverture en eau potable au Niger en 2023 ? » ou « Combien de bénéficiaires le PAM a-t-il assisté au Mali en 2024 ? »
2. Notez la réponse donnée par l'IA, en particulier les chiffres, les sources citées et les dates mentionnées. Observez si le modèle exprime une incertitude ou s'il répond avec une confiance totale.
3. Vérifiez au moins un fait clé de la réponse en consultant une source fiable accessible sur mobile : le site OCHA (reliefweb.int), le site du PNUD, ou un rapport officiel d'un ministère. Notez si l'information est confirmée, approximative ou incorrecte, et réfléchissez à ce que cela implique pour votre usage professionnel.
A observer : Dans la plupart des cas, vous constaterez que le LLM donne une réponse fluide et confiante — même si un ou plusieurs éléments sont inexacts ou légèrement dépassés. Cette expérience illustre la règle fondamentale : la fluidité du langage ne garantit pas la fiabilité de l'information. Adoptez dès maintenant le réflexe de la double vérification pour tout chiffre ou fait utilisé dans un document professionnel.

## Glossaire
- LLM (Grand Modèle de Langage) : Programme d'intelligence artificielle entraîné sur d'immenses quantités de texte pour générer du langage humain. ChatGPT, Claude et Gemini sont des exemples de LLMs.
- Token : La plus petite unité de texte traitée par un LLM, correspondant environ à un mot court ou une partie de mot. Le LLM prédit les tokens les uns après les autres pour construire sa réponse.
- Hallucination : Phénomène où un LLM génère une information fausse ou inventée avec un ton assuré, sans avertissement. Par exemple, citer un rapport qui n'existe pas ou donner un chiffre erroné.
- Fenêtre de contexte : Limite de la mémoire de travail d'un LLM : la quantité maximale de texte qu'il peut prendre en compte dans un échange. Au-delà, il peut « oublier » les informations anciennes de la conversation.
- Date de coupure (Knowledge Cutoff) : Date après laquelle le LLM n'a plus reçu de nouvelles données d'entraînement. Les événements survenus après cette date lui sont inconnus, ce qui peut rendre ses réponses obsolètes.
- Fine-tuning : Technique consistant à entraîner un LLM général sur un ensemble de données spécialisées (par exemple, des textes médicaux ou des rapports humanitaires) pour l'adapter à un domaine précis et améliorer sa précision dans ce contexte.
```

### Prompt EN

```text
Create a 5 to 6 minute explainer video from the source document.
Audience: anyone curious about AI — employees, students, freelancers, field workers, volunteers — with no technical background, anywhere in the world. The source leans on African and humanitarian examples: keep one or two as concrete illustrations, but open up to other settings (business, public sector, school, small organisation) and other regions. Never present this course as being only for Africa or only for the humanitarian sector.
Goal: understand how a large language model (ChatGPT, Claude, Gemini) produces text.
Cover in this order: 1) an LLM predicts the next word, it does not "know" anything (the eloquent storyteller analogy); 2) tokens and the context window in plain terms: the model’s working memory; 3) strengths and limits: hallucinations, knowledge cutoff, bias — confidence is not accuracy; 4) using it well: check the facts, never paste personal data, be careful with under-represented languages.
Be honest about this: an LLM can be confidently wrong, including about a figure or a source.
End with: the golden rule: every important claim gets checked at the source before you use it.
Clear, warm tone, short sentences. Explain every technical term the first time it appears. Do not invent any figure, date or source that is not in the source document.
```

### Source EN (to load in the notebook)

```markdown
# Understanding LLMs — how ChatGPT and Claude really "speak"

## Objective
By the end of this lesson, you will be able to explain what a large language model (LLM) is and how it generates text through prediction. You will be able to identify its strengths and limitations, including hallucinations and the knowledge cutoff. You will know how to use it wisely in your African professional context, protecting the sensitive data of your beneficiaries.

## What is an LLM? Neither an encyclopedia nor an oracle
ChatGPT, Claude, Gemini — these tools belong to the family of Large Language Models, or LLMs. An LLM is a computer program trained on billions of pages of text: articles, books, forums, websites, NGO reports. Through this massive training, it has learned patterns in language — much like a child who learns to speak by listening to thousands of conversations.

But be careful: an LLM does not "know" anything in the human sense. It does not consult an encyclopedic database to answer you. It predicts the most likely word at each step, as if you asked someone to complete a sentence you had started. Imagine a very eloquent griot who has memorized thousands of stories: he can tell new ones convincingly, but he may also mix up details or invent some.

In practice, when you ask Claude to write a report on nutrition in the Sahel, it does not search an official FAO database. It generates text that looks like what a report on that topic should contain, based on the texts it was trained on. This is powerful — and it is also the source of its limitations.

## How it "reads" your message — tokens and context window
Before responding to you, the LLM splits your message into small pieces called tokens. One token corresponds roughly to a short word, or to part of a longer word. For example, "cassava" might be split into two tokens, while "hello" is just one. This splitting is invisible to you, but it is fundamental for the machine.

The LLM can only process a certain number of tokens at a time: this is called the context window. Think of it as a colleague's working memory: if you give them a 200-page document to read while also holding a conversation, they will start forgetting the first pages while reading the last ones. In the same way, if your exchange with the LLM becomes very long, it may "forget" what you told it at the beginning.

In practice, for field agents working on mobile phones with limited connectivity: keep your messages concise and structured. If you are asking a complex question about food distribution in a village in Niger, provide the essential context in the same request rather than spreading it across ten separate messages. The LLM will be more accurate and you will save bandwidth.

## Strengths and limitations — fluency yes, but always verify
LLMs have real strengths: they write quickly, rephrase in multiple languages, summarize long documents, and adapt to various styles. For an NGO coordinator in Niamey who must write a donor report in English when her working language is French, this represents a significant time saving: several hours saved on a single document, as the example in this lesson shows.

But LLMs also have serious limitations. The first is hallucination: the model can generate false information with apparent confidence. It may cite a scientific article that does not exist, or give a beneficiary figure that corresponds to no reality. Confidence does not mean accuracy — that is the golden rule to remember. The second limitation is the knowledge cutoff: the model does not know about events that occurred after its last update. If an epidemic or humanitarian crisis recently broke out in Chad, the LLM might give you outdated information.

There are also biases: LLMs were trained primarily on English-language texts, produced mainly by authors from the Global North. Their responses about African realities — tontine savings systems, local agricultural practices, languages like Hausa or Bambara — may be less accurate, incomplete, or even stereotyped. This does not make them useless, but it requires extra vigilance.

## Using an LLM effectively in the African context — verification and data protection
To get the best from an LLM in your professional context, three principles are essential. First principle: systematically verify facts. Just as you would with a preliminary report written by a motivated but inexperienced intern, re-read each important claim. If the LLM cites a vaccination coverage rate or a number of beneficiaries, cross-check the information against an official source (OCHA, UNDP, Ministry of Health).

Second principle: never enter personally identifiable data about your beneficiaries. The names, villages, health statuses, and family situations of vulnerable people must not be copied into a public LLM. Most of these tools store your conversations to improve their models. If you work with sensitive data — as is often the case for field agents managing food distributions or protection case files — use anonymized data or representative fictional cases.

Third principle: be cautious with local languages. If you try to generate a message in Hausa or Mooré to communicate with rural communities, the result may appear correct without actually being so. The LLM has been trained far less on these languages than on French or English. Always have the content validated by a native speaker before distribution. Just as you would not distribute a medication without a verified label, do not broadcast a community message without local validation.

## Real case — SahelAid NGO and the donor report: between time savings and vigilance
Challenge : The coordination team at SahelAid (an NGO based in Agadez) must submit a quarterly report to their European donor within 48 hours. The coordinator must write 15 pages in English, combining field data in French and Hausa. She has never used an LLM before and fears she will not have enough time.
Solution : She uses Claude to structure and draft a first version in English from her French-language field notes. She provides the LLM only with aggregated, anonymized data (no beneficiary names). She then asks the LLM to rephrase technical sections in a register appropriate for institutional donors. In parallel, she asks her Hausa-speaking colleague to verify the translated cultural terms.
Impact : The report is produced in 6 hours instead of the usual 18 hours — a saving of 12 working hours. During human review, the team identifies a hallucinated vaccination coverage figure (87% instead of the actual 62% from field data). The correction is made before submission. Following this episode, SahelAid adopts a systematic procedure: every AI-generated figure is highlighted in yellow and verified by a second person before the report is approved.

## Practice — Spotting a hallucination in a real situation
1. Open an AI assistant (Claude, ChatGPT, or another) on your phone and ask it a specific factual question about your sector or country — for example: "What is the safe drinking water coverage rate in Niger in 2023?" or "How many beneficiaries did WFP assist in Mali in 2024?"
2. Note the answer given by the AI, paying particular attention to the figures, cited sources, and dates mentioned. Observe whether the model expresses any uncertainty or responds with complete confidence.
3. Verify at least one key fact from the response by consulting a reliable source accessible on mobile: the OCHA website (reliefweb.int), the UNDP website, or an official ministry report. Note whether the information is confirmed, approximate, or incorrect, and reflect on what this means for your professional use.
What to notice : In most cases, you will find that the LLM gives a fluent and confident answer — even if one or more elements are inaccurate or slightly outdated. This exercise illustrates the fundamental rule: fluency of language does not guarantee reliability of information. Adopt the habit of double-checking any figure or fact used in a professional document from this point forward.

## Glossary
- LLM (Large Language Model) : An artificial intelligence program trained on vast amounts of text to generate human language. ChatGPT, Claude, and Gemini are examples of LLMs.
- Token : The smallest unit of text processed by an LLM, roughly equivalent to a short word or part of a word. The LLM predicts tokens one after another to build its response.
- Hallucination : A phenomenon where an LLM generates false or invented information with an assured tone and no warning — for example, citing a report that does not exist or giving an incorrect figure.
- Context Window : The working memory limit of an LLM: the maximum amount of text it can take into account in an exchange. Beyond this limit, it may "forget" earlier information in the conversation.
- Knowledge Cutoff : The date after which the LLM received no new training data. Events that occurred after this date are unknown to it, which may make its responses outdated.
- Fine-tuning : A technique of training a general LLM on a specialized dataset (for example, medical texts or humanitarian reports) to adapt it to a specific domain and improve its accuracy in that context.
```


---

# Lecon 3 — Prompt Engineering — donner les bonnes consignes à l'IA

**Duree cible** : 5 a 6 minutes · **Fichier** : `src/data/lessons/ia-c3-prompting.ts`

### Prompt FR

```text
Cree une video explicative de 5 a 6 minutes a partir du document source.
Public : toute personne curieuse de l'IA — salarie, etudiant, independant, agent de terrain, benevole — sans aucun prerequis technique, partout dans le monde. La source contient surtout des exemples africains et humanitaires : garde-en un ou deux comme illustrations concretes, mais ouvre a d'autres contextes (entreprise, administration, ecole, petite structure) et a d'autres regions. Ne presente jamais ce cours comme reserve a l'Afrique ni au secteur humanitaire.
Objectif : savoir rediger une consigne (prompt) qui donne un resultat utilisable du premier coup.
Couvre dans l'ordre : 1) l'anatomie d'un bon prompt : Role + Contexte + Tache + Format, avec un avant/apres concret ; 2) les techniques qui marchent : donner un exemple, demander un raisonnement etape par etape, imposer le format de sortie ; 3) iterer : corriger un point precis plutot que tout reecrire, en deux ou trois allers-retours ; 4) quatre usages reels : note de synthese, traduction, courriel formel, compte-rendu de reunion.
Sois honnete sur ce point : un bon prompt fait gagner du temps, il ne dispense jamais de relire le resultat.
Termine par : donner un modele de prompt reutilisable que le spectateur peut noter tout de suite.
Ton clair et chaleureux, vouvoiement, phrases courtes. Explique chaque terme technique la premiere fois. N'invente aucun chiffre, aucune date et aucune source qui ne figure pas dans le document source.
```

### Source FR (a charger dans le notebook)

```markdown
# Prompt Engineering — donner les bonnes consignes à l'IA

## Objectif
À la fin de cette leçon, vous saurez rédiger des consignes (prompts) structurées et efficaces pour obtenir des résultats fiables, professionnels et directement utilisables. Vous maîtriserez les quatre composantes clés d'un bon prompt : le rôle, le contexte, la tâche et le format. Vous serez capable d'améliorer vos prompts par itération et de les adapter aux situations concrètes de votre travail humanitaire ou de développement.

## Anatomie d'un bon prompt : Rôle, Contexte, Tâche, Format
Imaginez que vous recrutez un assistant pour une mission de terrain. Si vous lui dites simplement « fais un rapport », il ne sait pas quoi mettre dedans. Mais si vous précisez « tu es chargé de suivi-évaluation au PNUD Niger, voici les données de la semaine, rédige un résumé de deux paragraphes pour le coordinateur », il peut travailler efficacement. C'est exactement le principe du prompt structuré.

Un bon prompt repose sur quatre piliers : le Rôle (qui doit se comporter l'IA ?), le Contexte (quelle est la situation ?), la Tâche (qu'attendez-vous précisément ?), et le Format (quelle forme doit avoir la réponse ?). Voyons la différence en pratique :

— Prompt vague : « Écris un e-mail à un bailleur. »
— Prompt structuré : « Tu es coordinateur de projet dans une ONG sahélienne. Nous avons livré 200 kits nutritionnels dans le district de Tillabéri la semaine dernière. Rédige un e-mail de compte rendu à notre bailleur (UNICEF), en anglais, en 150 mots maximum, avec un ton formel et une phrase de remerciement en conclusion. »

Le second prompt prend 30 secondes de plus à rédiger, mais il vous économise plusieurs allers-retours et produit un résultat quasi prêt à envoyer.

## Techniques qui marchent : exemples, étape par étape, contraintes de format
La première technique puissante s'appelle le few-shot : vous donnez un ou deux exemples du résultat que vous attendez. C'est comme montrer à un agent de santé communautaire comment remplir une fiche avant de lui demander d'en remplir dix. Par exemple : « Voici un résumé que j'aime : [exemple]. Maintenant résume ce compte rendu de réunion dans le même style. » L'IA comprend immédiatement votre tonalité, votre niveau de détail, votre langue de travail.

La deuxième technique : demandez à l'IA de raisonner étape par étape (« think step by step »). Pour des tâches complexes comme analyser un budget de projet ou comparer deux propositions techniques, cela réduit les erreurs. C'est comparable à demander à quelqu'un de vérifier un transfert Mobile Money en lisant les chiffres à voix haute avant de valider.

La troisième technique : contraindre le format de sortie. Précisez « réponds sous forme de tableau à 3 colonnes », « rédige une liste à puces de 5 points maximum », ou « structure ta réponse avec les titres : Constat, Recommandation, Prochaine étape ». Quand le format est fixé à l'avance, la réponse est directement utilisable dans votre rapport ou votre présentation, sans reformatage.

## Itérer et corriger : un prompt se travaille en 2–3 allers-retours
Dans une tontine, on ne fixe pas les règles une fois pour toutes le premier jour : on ajuste selon ce qui marche pour le groupe. Avec l'IA, c'est pareil. Le premier prompt est rarement parfait, et c'est normal. L'objectif est d'arriver à un bon résultat en deux ou trois échanges, pas en un seul.

Comment reformuler efficacement ? Soyez précis sur ce qui ne va pas. Ne dites pas « c'est nul ». Dites : « La réponse est trop longue. Raccourcis à 100 mots. » Ou : « Le ton est trop formel pour une réunion communautaire. Utilise un langage plus simple. » Ou encore : « Tu n'as pas mentionné les données de couverture vaccinale. Intègre ce chiffre : environ 67 % dans la région de Dosso. »

Gardez une trace de vos meilleurs prompts dans un carnet (numérique ou papier). Les agents de terrain de MSF ou du PAM, par exemple, créent des bibliothèques de prompts réutilisables pour les rapports hebdomadaires, les fiches bénéficiaires ou les alertes de situation. Un bon prompt est un outil de travail, au même titre qu'un formulaire de collecte de données.

## Prompts pour le travail réel : synthèse, traduction, e-mail bailleur, compte-rendu terrain
Quatre cas d'usage couvrent l'essentiel du travail documentaire dans le secteur humanitaire et du développement. Le premier : la note de synthèse. Collez un long document (rapport de mission, étude de base) et demandez : « En tant que chargé de programme, résume ce document en 5 points clés pour une réunion de coordination. Format : liste numérotée. Langue : français. »

Le deuxième cas : la traduction et adaptation FR ↔ EN ↔ langue locale. « Traduis ce message de sensibilisation sur le choléra du français vers le haoussa parlé au Niger, en gardant un niveau de langage accessible à des communautés rurales. » L'IA n'est pas parfaite pour toutes les langues locales, mais elle peut produire une première version à faire valider par un locuteur natif, ce qui réduit le temps de traduction d'environ 50 %.

Le troisième cas : l'e-mail bailleur. Donnez les faits, le montant, les résultats, le nom du bailleur, et demandez un e-mail formel de compte rendu en anglais. Le quatrième cas : le compte-rendu de réunion terrain. Collez vos notes brutes ou dictez-les vocalement (via une application de transcription), puis demandez : « Structure ces notes en : Participants, Points discutés, Décisions prises, Actions à suivre avec responsables et échéances. » Le résultat est prêt à partager avec votre superviseur.

## Cas concret — Du prompt vague au prompt structuré : le cas du rapport de mission
Le probleme : Aminata, coordinatrice d'une ONG à Niamey, demande à un outil IA : « Écris un rapport de mission. » Elle obtient un texte générique de deux pages, sans aucune donnée réelle, qu'elle doit entièrement réécrire. Elle passe 90 minutes sur ce document.
La solution : Elle reformule avec la structure Rôle/Contexte/Tâche/Format : « Tu es coordinatrice de projet dans une ONG de santé au Niger. La mission s'est déroulée du 10 au 14 juin 2025 dans le district de Maradi. Objectif : évaluation des stocks de médicaments dans 8 centres de santé. Résultats principaux : 6 centres sur 8 ont des stocks suffisants ; 2 centres signalent une rupture en amoxicilline. Rédige un rapport de mission structuré avec les sections suivantes : Contexte, Déroulement, Résultats, Recommandations. Maximum 400 mots. Ton professionnel, langue française. »
L'impact : Le nouveau résultat est utilisable directement après une relecture de 10 minutes. Le temps total de travail passe de 90 minutes à environ 25 minutes, soit un gain de temps d'environ 70 %. La qualité est jugée supérieure par le superviseur, qui valide le rapport sans demande de révision majeure.

## Mise en pratique — Exercice : rédigez et améliorez votre premier prompt structuré
1. Choisissez une tâche réelle de votre travail (rédiger un e-mail, résumer un document, traduire un message). Sur votre téléphone ou ordinateur, rédigez un prompt complet en quatre parties : commencez par « Tu es [votre rôle] », ajoutez le contexte (lieu, projet, données clés), décrivez la tâche précisément, puis précisez le format souhaité (nombre de mots, langue, structure). Soumettez ce prompt à un outil IA (ChatGPT, Claude, Gemini).
2. Lisez attentivement le résultat obtenu. Identifiez un point précis qui n'est pas satisfaisant : le ton, la longueur, un élément manquant, la structure. Reformulez uniquement cette partie et soumettez une deuxième version du prompt. Comparez les deux réponses côte à côte.
3. Copiez votre prompt final (la version améliorée) dans un document ou une note sur votre téléphone, avec un titre court qui décrit son usage (exemple : « Prompt rapport de mission terrain »). Vous commencez ainsi votre bibliothèque personnelle de prompts réutilisables.
A observer : Vous constaterez que la deuxième version du prompt produit une réponse nettement plus proche de vos attentes, souvent sans nécessiter de troisième reformulation. L'effort de rédiger un prompt précis se rentabilise dès le premier usage : moins de corrections, moins de frustration, un résultat professionnel plus rapide.

## Glossaire
- Prompt : La consigne ou instruction que vous donnez à un outil d'IA pour obtenir un résultat. Un prompt bien rédigé est précis, structuré et contextuel. Exemple : « En tant que chargé de programme, rédige un résumé de 150 mots de ce rapport en français. »
- Contexte : Les informations de situation que vous fournissez à l'IA pour qu'elle comprenne l'environnement de la tâche : votre organisation, le projet concerné, le public visé, les données disponibles. Sans contexte, l'IA produit des réponses génériques.
- Few-shot (exemples) : Technique consistant à inclure un ou plusieurs exemples du résultat attendu directement dans votre prompt. Cela permet à l'IA d'imiter le ton, le style et la structure que vous souhaitez, comme montrer un modèle rempli à un collègue.
- Rôle / System prompt : La persona ou fonction que vous assignez à l'IA au début de votre prompt (ex : « Tu es un traducteur spécialisé en santé publique »). Définir un rôle cadre le comportement de l'IA et améliore la pertinence de ses réponses.
- Itération : Le processus d'amélioration progressive d'un prompt par allers-retours successifs. On identifie ce qui ne va pas dans la première réponse, on corrige ce point précis, et on resoumet. En général, 2 à 3 itérations suffisent pour obtenir un résultat professionnel.
- Format de sortie : La forme que vous souhaitez donner à la réponse de l'IA : liste à puces, tableau, e-mail formel, paragraphes numérotés, nombre de mots limite. Préciser le format évite les reformatages manuels et rend la réponse directement utilisable.
```

### Prompt EN

```text
Create a 5 to 6 minute explainer video from the source document.
Audience: anyone curious about AI — employees, students, freelancers, field workers, volunteers — with no technical background, anywhere in the world. The source leans on African and humanitarian examples: keep one or two as concrete illustrations, but open up to other settings (business, public sector, school, small organisation) and other regions. Never present this course as being only for Africa or only for the humanitarian sector.
Goal: write an instruction (prompt) that gives a usable result the first time.
Cover in this order: 1) the anatomy of a good prompt: Role + Context + Task + Format, with a concrete before/after; 2) techniques that work: give an example, ask for step-by-step reasoning, constrain the output format; 3) iterate: fix one precise thing instead of rewriting everything, in two or three rounds; 4) four real uses: briefing note, translation, formal email, meeting minutes.
Be honest about this: a good prompt saves time, it never removes the need to read the result.
End with: give a reusable prompt template the viewer can write down straight away.
Clear, warm tone, short sentences. Explain every technical term the first time it appears. Do not invent any figure, date or source that is not in the source document.
```

### Source EN (to load in the notebook)

```markdown
# Prompt Engineering — Giving the Right Instructions to AI

## Objective
By the end of this lesson, you will know how to write structured, effective prompts to get reliable, professional, and directly usable results. You will master the four key components of a good prompt: role, context, task, and format. You will be able to improve your prompts through iteration and adapt them to real situations in your humanitarian or development work.

## Anatomy of a Good Prompt: Role, Context, Task, Format
Imagine you are hiring a field assistant for a mission. If you simply say "write a report," they don't know what to include. But if you specify "you are a monitoring and evaluation officer at UNDP Niger, here is this week's data, write a two-paragraph summary for the coordinator," they can work effectively. This is exactly the principle behind a structured prompt.

A good prompt rests on four pillars: the Role (how should the AI behave?), the Context (what is the situation?), the Task (what exactly do you expect?), and the Format (what form should the answer take?). Let's see the difference in practice:

— Vague prompt: "Write an email to a donor."
— Structured prompt: "You are a project coordinator at a Sahelian NGO. Last week we delivered 200 nutrition kits in the Tillabéri district. Write an activity report email to our donor (UNICEF), in English, maximum 150 words, with a formal tone and a thank-you sentence in the conclusion."

The second prompt takes 30 extra seconds to write, but it saves you several back-and-forth exchanges and produces a result that is nearly ready to send.

## Techniques That Work: Examples, Step by Step, Format Constraints
The first powerful technique is called few-shot: you provide one or two examples of the result you expect. It is like showing a community health worker how to fill out a form before asking them to fill out ten. For example: "Here is a summary I like: [example]. Now summarize this meeting report in the same style." The AI immediately understands your tone, your level of detail, and your working language.

The second technique: ask the AI to reason step by step ("think step by step"). For complex tasks like analyzing a project budget or comparing two technical proposals, this reduces errors. It is comparable to asking someone to verify an M-Pesa transfer by reading the figures aloud before confirming.

The third technique: constrain the output format. Specify "respond in a 3-column table," "write a bullet list of no more than 5 points," or "structure your response with the following headings: Finding, Recommendation, Next Step." When the format is fixed in advance, the response is directly usable in your report or presentation, without any reformatting.

## Iterate and Improve: A Prompt Takes 2–3 Rounds of Refinement
In a tontine savings group, the rules are not set in stone on the first day — they are adjusted based on what works for the group. With AI, it is the same. The first prompt is rarely perfect, and that is completely normal. The goal is to reach a good result in two or three exchanges, not in one.

How do you reformulate effectively? Be specific about what is wrong. Do not say "this is bad." Say: "The response is too long. Shorten it to 100 words." Or: "The tone is too formal for a community meeting. Use simpler language." Or: "You did not mention the vaccination coverage data. Include this figure: approximately 67% in the Dosso region."

Keep a record of your best prompts in a notebook (digital or paper). Field agents at organizations like MSF or WFP, for example, build libraries of reusable prompts for weekly reports, beneficiary forms, or situation alerts. A good prompt is a work tool, just like a data collection form.

## Prompts for Real Work: Summaries, Translations, Donor Emails, Field Meeting Notes
Four use cases cover most of the documentary work in the humanitarian and development sector. The first: the briefing note. Paste a long document (mission report, baseline study) and ask: "As a program officer, summarize this document in 5 key points for a coordination meeting. Format: numbered list. Language: English."

The second case: translation and adaptation FR ↔ EN ↔ local language. "Translate this cholera awareness message from French into Hausa spoken in Niger, keeping the language accessible for rural communities." AI is not perfect for all local languages, but it can produce a first version to be validated by a native speaker, which reduces translation time by approximately 50%.

The third case: the donor email. Provide the facts, the amount, the results, the donor's name, and request a formal activity report email in English. The fourth case: the field meeting summary. Paste your raw notes or dictate them verbally (via a transcription app), then ask: "Structure these notes into: Participants, Points Discussed, Decisions Made, Follow-up Actions with responsible persons and deadlines." The result is ready to share with your supervisor.

## Real case — From a Vague Prompt to a Structured Prompt: The Mission Report Case
Challenge : Aminata, a coordinator at an NGO in Niamey, asks an AI tool: "Write a mission report." She gets a generic two-page text with no real data, which she has to rewrite entirely. She spends 90 minutes on this document.
Solution : She reformulates using the Role/Context/Task/Format structure: "You are a project coordinator at a health NGO in Niger. The mission took place from June 10 to 14, 2025, in the Maradi district. Objective: assessment of drug stocks in 8 health centers. Main results: 6 out of 8 centers have sufficient stocks; 2 centers report a shortage of amoxicillin. Write a structured mission report with the following sections: Background, Activities, Results, Recommendations. Maximum 400 words. Professional tone, French language."
Impact : The new result is directly usable after a 10-minute review. Total working time drops from 90 minutes to approximately 25 minutes — a time saving of about 70%. The quality is judged superior by the supervisor, who approves the report without requesting major revisions.

## Practice — Exercise: Write and Improve Your First Structured Prompt
1. Choose a real task from your work (writing an email, summarizing a document, translating a message). On your phone or computer, write a complete prompt in four parts: start with "You are [your role]," add the context (location, project, key data), describe the task precisely, then specify the desired format (word count, language, structure). Submit this prompt to an AI tool (ChatGPT, Claude, Gemini).
2. Read the result carefully. Identify one specific point that is not satisfactory: the tone, the length, a missing element, the structure. Reformulate only that part and submit a second version of the prompt. Compare both responses side by side.
3. Copy your final prompt (the improved version) into a document or note on your phone, with a short title describing its use (example: "Field mission report prompt"). You are now starting your personal library of reusable prompts.
What to notice : You will notice that the second version of the prompt produces a response much closer to your expectations, often without needing a third reformulation. The effort of writing a precise prompt pays off from the very first use: fewer corrections, less frustration, and a professional result delivered faster.

## Glossary
- Prompt : The instruction or command you give an AI tool to get a result. A well-written prompt is precise, structured, and contextual. Example: "As a program officer, write a 150-word summary of this report in English."
- Context : The situational information you provide to the AI so it understands the environment of the task: your organization, the project involved, the target audience, the available data. Without context, AI produces generic responses.
- Few-shot (examples) : A technique that involves including one or more examples of the expected result directly in your prompt. This allows the AI to mirror the tone, style, and structure you want — like showing a completed sample form to a colleague.
- Role / System prompt : The persona or function you assign to the AI at the start of your prompt (e.g., "You are a translator specialized in public health"). Defining a role frames the AI's behavior and improves the relevance of its responses.
- Iteration : The process of progressively improving a prompt through successive exchanges. You identify what is wrong in the first response, correct that specific point, and resubmit. Generally, 2 to 3 iterations are enough to obtain a professional result.
- Output format : The form you want the AI's response to take: bullet list, table, formal email, numbered paragraphs, word count limit. Specifying the format avoids manual reformatting and makes the response directly usable.
```


---

# Lecon 4 — L'IA dans votre organisation — choisir les bons cas d'usage

**Duree cible** : 5 a 6 minutes · **Fichier** : `src/data/lessons/ia-c4-organisations.ts`

### Prompt FR

```text
Cree une video explicative de 5 a 6 minutes a partir du document source.
Public : toute personne curieuse de l'IA — salarie, etudiant, independant, agent de terrain, benevole — sans aucun prerequis technique, partout dans le monde. La source contient surtout des exemples africains et humanitaires : garde-en un ou deux comme illustrations concretes, mais ouvre a d'autres contextes (entreprise, administration, ecole, petite structure) et a d'autres regions. Ne presente jamais ce cours comme reserve a l'Afrique ni au secteur humanitaire.
Objectif : choisir le bon premier cas d'usage de l'IA dans une organisation.
Couvre dans l'ordre : 1) partir des problemes reels, pas de la technologie : ou l'IA fait gagner du temps, ameliore la qualite, elargit l'acces ; 2) prioriser avec une matrice valeur / effort, en tenant compte des donnees disponibles et du niveau de risque ; 3) les contraintes concretes : connexion, electricite, langues, cout, competences de l’equipe ; 4) faire adopter : commencer par un pilote limite, impliquer les utilisateurs, poser une gouvernance legere.
Sois honnete sur ce point : une decision qui touche directement une personne ne se delegue jamais entierement a une machine.
Termine par : choisir cette semaine une tache a forte valeur et faible effort comme premier pilote.
Ton clair et chaleureux, vouvoiement, phrases courtes. Explique chaque terme technique la premiere fois. N'invente aucun chiffre, aucune date et aucune source qui ne figure pas dans le document source.
```

### Source FR (a charger dans le notebook)

```markdown
# L'IA dans votre organisation — choisir les bons cas d'usage

## Objectif
À la fin de cette leçon, vous serez capable d'identifier les activités de votre organisation où l'IA peut apporter une réelle valeur. Vous saurez évaluer la faisabilité de chaque opportunité en tenant compte des données disponibles, des contraintes du terrain et du niveau de risque. Vous pourrez prioriser un premier cas d'usage pilote et préparer votre équipe à l'adopter progressivement.

## Cartographier les cas d'usage : où l'IA fait vraiment la différence
Avant d'adopter un outil d'IA, la première question n'est pas « quelle technologie choisir ? » mais « où avons-nous des problèmes que l'IA peut résoudre ? ». Pensez à votre journée de travail : quelles tâches répétitives vous prennent beaucoup de temps ? Quels rapports reviennent chaque mois avec les mêmes tableaux à remplir ? Quelles informations cherchez-vous souvent en cherchant dans des dizaines de fichiers ?

L'IA crée de la valeur de trois façons principales. Elle fait gagner du temps sur des tâches répétitives, comme traduire des formulaires du français vers le haoussa ou résumer de longs comptes rendus de réunion. Elle améliore la qualité, par exemple en détectant des erreurs dans une liste de bénéficiaires avant l'envoi d'une aide d'urgence. Elle élargit l'accès, en permettant à un agent de santé communautaire en zone rurale de consulter des conseils médicaux en langue locale sans connexion permanente.

Imaginez un magasinier qui trie chaque matin des centaines de fiches papier pour retrouver les stocks disponibles. Un simple système de recherche automatisée lui ferait gagner deux heures par jour. C'est exactement cela : l'IA comme assistant intelligent, pas comme remplacement du travail humain. Dans votre organisation, commencez par lister cinq tâches qui vous épuisent. Ce sont vos premiers candidats.

## Prioriser : choisir le bon cas d'usage avant de se lancer
Toutes les idées ne se valent pas. Une matrice simple vous aide à choisir : placez chaque idée sur deux axes — la valeur qu'elle apporte (gain de temps, qualité, portée) et l'effort qu'elle demande (données disponibles, coût, compétences nécessaires). Les meilleurs candidats pilotes sont ceux à haute valeur et faible effort.

La disponibilité des données est cruciale. Si vous souhaitez automatiser le tri de listes de bénéficiaires, avez-vous déjà ces listes sous forme numérique ? Sont-elles cohérentes et complètes ? Une ONG au Sahel qui voulait utiliser l'IA pour analyser les données de nutrition a découvert que 40 % de ses données étaient saisies différemment selon le collecteur. Il a fallu d'abord nettoyer les données avant toute automatisation.

Le niveau de risque compte aussi. Utiliser l'IA pour rédiger un premier brouillon de rapport interne est peu risqué : un humain relit et corrige. Utiliser l'IA pour décider seule qui reçoit une aide alimentaire est très risqué : des erreurs peuvent priver des familles vulnérables de leur droit. Gardez toujours un humain responsable pour les décisions qui touchent directement des personnes. C'est comme le contrôle qualité dans une coopérative de cacao : on vérifie avant d'exporter.

## Contraintes locales : tenir compte de la réalité du terrain
Un outil d'IA qui fonctionne parfaitement à Dakar ou Abidjan peut être inutilisable dans un bureau de district sans électricité stable. Avant de choisir une solution, posez-vous trois questions pratiques : Y a-t-il une connexion internet fiable ? L'outil fonctionne-t-il hors ligne ou sur une connexion 2G ? Les agents de terrain ont-ils des smartphones ou seulement des téléphones basiques ?

La langue est une contrainte majeure souvent sous-estimée. La plupart des outils d'IA performent bien en français ou en anglais, mais beaucoup moins en haoussa, en mooré ou en bambara. Si vos bénéficiaires et vos agents s'expriment principalement en langue locale, vérifiez que l'outil choisi supporte cette langue ou prévoyez une étape de traduction dans votre processus. Des projets d'IA pour la santé au Niger ont montré l'importance d'intégrer le haoussa dès la conception.

Le coût est souvent oublié dans les projets pilotes. Un abonnement à un outil d'IA peut sembler abordable en euros, mais représenter une part importante du budget d'une organisation locale. Explorez d'abord les versions gratuites ou les offres destinées aux ONG. Enfin, évaluez honnêtement les compétences disponibles dans votre équipe : même le meilleur outil est inutile si personne ne sait l'utiliser et si aucune formation n'est prévue. Un téléphone avec Orange Money ne sert à rien si on ne sait pas s'en servir — l'IA, c'est pareil.

## Conduite du changement : faire adopter l'IA par votre équipe
Introduire un outil d'IA dans une organisation, c'est d'abord un défi humain, pas technologique. Les résistances sont normales et légitimes : peur de perdre son travail, inquiétude face à quelque chose d'inconnu, méfiance envers un outil « qui se trompe parfois ». Votre rôle de leader est d'écouter ces craintes, de les prendre au sérieux et de montrer par l'exemple.

Commencez petit avec un pilote limité : une équipe, une tâche, un mois. Documentez les résultats honnêtement — ce qui a fonctionné et ce qui n'a pas fonctionné. Impliquez les utilisateurs finaux dès le début : ce sont eux qui connaissent le mieux les problèmes à résoudre. Une infirmière qui utilise l'IA pour rédiger ses rapports quotidiens sera la meilleure ambassadrice si elle a été associée au choix de l'outil.

La gouvernance légère est essentielle : définissez clairement qui a le droit d'utiliser l'outil, pour quelles tâches, avec quelles données, et qui vérifie les résultats. Ce n'est pas de la bureaucratie — c'est de la responsabilité. Pensez à une tontine bien organisée : chacun connaît son rôle, les règles sont claires et la confiance se construit au fil des cycles. Le passage à l'échelle vient naturellement une fois que le pilote a prouvé sa valeur et que l'équipe est à l'aise.

## Cas concret — L'ONG SahelAction choisit son premier cas d'usage IA
Le probleme : SahelAction coordonne la distribution d'aide alimentaire dans trois régions du Niger. Chaque mois, l'équipe passe en moyenne 18 heures à trier manuellement des listes de bénéficiaires Excel pour éliminer les doublons, corriger les noms mal orthographiés et vérifier les critères d'éligibilité. Des erreurs passent parfois inaperçues, entraînant des doublons de distribution ou des exclusions injustes.
La solution : L'équipe cartographie ses tâches chronophages et identifie le tri des listes comme candidat prioritaire : haute valeur (gain de temps important, réduction des erreurs), faible effort (les données existent déjà sous format Excel, une seule personne doit apprendre l'outil). Elle choisit un outil d'IA de nettoyage de données disponible en version gratuite pour les ONG. Un pilote d'un mois est lancé sur une seule région avec deux agents formés en une demi-journée. Un responsable valide manuellement un échantillon de 10 % des résultats chaque semaine.
L'impact : Au bout du premier mois, le temps de traitement des listes passe de 18 heures à 4 heures, soit un gain de 14 heures par cycle. Le taux d'erreurs détectées augmente de 60 % par rapport au tri manuel. Fort de ces résultats, SahelAction étend le pilote aux deux autres régions le mois suivant. En six mois, l'organisation économise l'équivalent de plus de 200 heures de travail, qu'elle redirige vers des visites terrain.

## Mise en pratique — Construire votre mini-matrice valeur / effort
1. Sur votre téléphone, ouvrez une application de notes (Notes, Keep ou même un SMS à vous-même) et listez trois tâches répétitives de votre travail quotidien — par exemple : rédiger des comptes rendus, saisir des données de terrain, traduire des documents, chercher des informations dans des fichiers.
2. Pour chacune des trois tâches, attribuez un score de 1 à 3 sur deux critères : Valeur (1 = peu utile, 3 = très utile si automatisée) et Effort (1 = facile à automatiser, 3 = très difficile). Notez ces scores à côté de chaque tâche dans votre application de notes.
3. Identifiez la tâche avec le score Valeur le plus élevé et le score Effort le plus bas — c'est votre meilleur candidat pilote. Notez en une phrase pourquoi vous la choisissez et quelle donnée vous auriez besoin de rassembler pour commencer.
A observer : En faisant cet exercice, vous remarquerez peut-être que les tâches les plus répétitives ne sont pas toujours les plus faciles à automatiser — et que certaines tâches apparemment simples cachent des contraintes de données ou de langue. Cette prise de conscience est déjà une étape clé dans l'adoption responsable de l'IA.

## Glossaire
- Cas d'usage : Une situation concrète dans laquelle un outil ou une technologie est utilisé pour résoudre un problème précis. Par exemple : « utiliser l'IA pour détecter les doublons dans une liste de bénéficiaires » est un cas d'usage.
- ROI (Retour sur investissement) : Mesure du bénéfice obtenu par rapport aux ressources investies (temps, argent, formation). Un ROI positif signifie que le projet rapporte plus qu'il ne coûte. En contexte ONG, le ROI peut inclure des gains non financiers comme du temps libéré pour le terrain.
- Pilote (POC) : Un test à petite échelle d'une solution, avant de la déployer largement. Le pilote permet de vérifier que l'outil fonctionne dans votre contexte réel, d'identifier les problèmes tôt et de convaincre les équipes par des résultats concrets.
- Conduite du changement : L'ensemble des actions menées pour accompagner une équipe ou une organisation à adopter une nouvelle pratique ou un nouvel outil. Inclut la communication, la formation, l'écoute des résistances et la célébration des succès.
- Gouvernance des données : Les règles et responsabilités définissant comment les données sont collectées, stockées, utilisées et protégées dans une organisation. Une bonne gouvernance précise qui a accès à quelles données, pour quelles finalités et avec quelles mesures de sécurité.
- Passage à l'échelle : Le processus par lequel un projet pilote réussi est étendu à un plus grand nombre d'utilisateurs, de régions ou de tâches. Le passage à l'échelle doit s'appuyer sur des résultats prouvés et une préparation suffisante des équipes et des systèmes.
```

### Prompt EN

```text
Create a 5 to 6 minute explainer video from the source document.
Audience: anyone curious about AI — employees, students, freelancers, field workers, volunteers — with no technical background, anywhere in the world. The source leans on African and humanitarian examples: keep one or two as concrete illustrations, but open up to other settings (business, public sector, school, small organisation) and other regions. Never present this course as being only for Africa or only for the humanitarian sector.
Goal: choose the right first AI use case in an organisation.
Cover in this order: 1) start from real problems, not technology: where AI saves time, improves quality, widens access; 2) prioritise with a value / effort matrix, factoring in data availability and risk level; 3) the concrete constraints: connectivity, electricity, languages, cost, team skills; 4) drive adoption: start with a small pilot, involve users, set light governance.
Be honest about this: a decision that directly affects a person is never fully delegated to a machine.
End with: pick one high-value, low-effort task this week as a first pilot.
Clear, warm tone, short sentences. Explain every technical term the first time it appears. Do not invent any figure, date or source that is not in the source document.
```

### Source EN (to load in the notebook)

```markdown
# AI in Your Organization — Choosing the Right Use Cases

## Objective
By the end of this lesson, you will be able to identify the activities in your organization where AI can bring real value. You will know how to assess the feasibility of each opportunity, taking into account available data, field constraints, and level of risk. You will be able to prioritize a first pilot use case and prepare your team to adopt it gradually.

## Mapping Use Cases: Where AI Truly Makes a Difference
Before adopting an AI tool, the first question is not « which technology should we choose? » but « where do we have problems that AI can solve? ». Think about your working day: which repetitive tasks take up a lot of your time? Which reports come back every month with the same tables to fill in? Which information do you spend time searching for across dozens of files?

AI creates value in three main ways. It saves time on repetitive tasks, such as translating forms from French into Hausa or summarizing long meeting minutes. It improves quality — for example, detecting errors in a beneficiary list before emergency aid is sent out. It broadens access, enabling a community health worker in a rural area to consult medical guidance in a local language without a permanent internet connection.

Imagine a storekeeper who spends every morning sorting hundreds of paper forms to find available stock. A simple automated search system would save them two hours a day. That is exactly it: AI as an intelligent assistant, not as a replacement for human work. In your organization, start by listing five tasks that drain your energy. Those are your first candidates.

## Prioritizing: Choosing the Right Use Case Before You Start
Not all ideas are equal. A simple matrix helps you choose: place each idea on two axes — the value it brings (time saved, quality, reach) and the effort it requires (available data, cost, skills needed). The best pilot candidates are those with high value and low effort.

Data availability is crucial. If you want to automate the sorting of beneficiary lists, do you already have those lists in digital form? Are they consistent and complete? An NGO in the Sahel that wanted to use AI to analyze nutrition data discovered that 40% of its data had been entered differently depending on the data collector. The data had to be cleaned before any automation could take place.

The level of risk also matters. Using AI to draft a first version of an internal report is low risk: a human reviews and corrects it. Using AI to decide alone who receives food assistance is very high risk: errors can deprive vulnerable families of their right to aid. Always keep a human responsible for decisions that directly affect people. It is like quality control in a cocoa cooperative: you check before you export.

## Local Constraints: Accounting for Field Realities
An AI tool that works perfectly in Dakar or Abidjan may be unusable in a district office without reliable electricity. Before choosing a solution, ask yourself three practical questions: Is there a reliable internet connection? Does the tool work offline or on a 2G connection? Do field agents have smartphones, or only basic phones?

Language is a major constraint that is often underestimated. Most AI tools perform well in French or English, but far less so in Hausa, Mooré, or Bambara. If your beneficiaries and agents primarily communicate in a local language, verify that the chosen tool supports that language, or plan a translation step in your process. AI projects for health in Niger have shown how important it is to integrate Hausa from the design stage onward.

Cost is often overlooked in pilot projects. An AI tool subscription may seem affordable in euros, but can represent a significant share of a local organization's budget. First explore free versions or offers aimed at NGOs. Finally, honestly assess the skills available in your team: even the best tool is useless if no one knows how to use it and no training is planned. A phone with M-Pesa or Orange Money is useless if you do not know how to use it — AI is the same.

## Change Management: Getting Your Team to Adopt AI
Introducing an AI tool into an organization is first and foremost a human challenge, not a technological one. Resistance is normal and legitimate: fear of losing one's job, anxiety about something unknown, distrust of a tool that « sometimes makes mistakes ». Your role as a leader is to listen to these concerns, take them seriously, and lead by example.

Start small with a limited pilot: one team, one task, one month. Document results honestly — what worked and what did not. Involve end users from the start: they know the problems to be solved best. A nurse who uses AI to write her daily reports will be the best ambassador if she was involved in choosing the tool.

Light governance is essential: clearly define who is allowed to use the tool, for which tasks, with which data, and who checks the results. This is not bureaucracy — it is accountability. Think of a well-organized tontine: everyone knows their role, the rules are clear, and trust builds with each cycle. Scaling up comes naturally once the pilot has proven its value and the team is comfortable.

## Real case — The NGO SahelAction Chooses Its First AI Use Case
Challenge : SahelAction coordinates food aid distribution across three regions of Niger. Each month, the team spends an average of 18 hours manually sorting Excel beneficiary lists to remove duplicates, correct misspelled names, and verify eligibility criteria. Errors sometimes go unnoticed, leading to duplicate distributions or unjust exclusions.
Solution : The team maps its time-consuming tasks and identifies list sorting as the priority candidate: high value (significant time savings, error reduction), low effort (the data already exists in Excel format, only one person needs to learn the tool). They choose an AI data-cleaning tool available in a free version for NGOs. A one-month pilot is launched in a single region with two agents trained in half a day. A supervisor manually validates a 10% sample of results each week.
Impact : After the first month, list processing time drops from 18 hours to 4 hours — a saving of 14 hours per cycle. The error detection rate increases by 60% compared to manual sorting. Encouraged by these results, SahelAction extends the pilot to the two other regions the following month. Over six months, the organization saves the equivalent of more than 200 hours of work, which it redirects toward field visits.

## Practice — Building Your Mini Value / Effort Matrix
1. On your phone, open a notes application (Notes, Keep, or even a text message to yourself) and list three repetitive tasks from your daily work — for example: writing meeting minutes, entering field data, translating documents, searching for information across files.
2. For each of the three tasks, assign a score from 1 to 3 on two criteria: Value (1 = not very useful, 3 = very useful if automated) and Effort (1 = easy to automate, 3 = very difficult). Write these scores next to each task in your notes application.
3. Identify the task with the highest Value score and the lowest Effort score — this is your best pilot candidate. Write one sentence explaining why you chose it and what data you would need to gather to get started.
What to notice : As you do this exercise, you may notice that the most repetitive tasks are not always the easiest to automate — and that some apparently simple tasks hide data or language constraints. This awareness is already a key step in the responsible adoption of AI.

## Glossary
- Use Case : A concrete situation in which a tool or technology is used to solve a specific problem. For example: 'using AI to detect duplicates in a beneficiary list' is a use case.
- ROI (Return on Investment) : A measure of the benefit obtained relative to resources invested (time, money, training). A positive ROI means the project returns more than it costs. In an NGO context, ROI can include non-financial gains such as time freed up for fieldwork.
- Pilot (POC) : A small-scale test of a solution before it is deployed widely. The pilot verifies that the tool works in your real-world context, identifies problems early, and convinces teams through concrete results.
- Change Management : The set of actions taken to help a team or organization adopt a new practice or tool. Includes communication, training, listening to resistance, and celebrating successes.
- Data Governance : The rules and responsibilities defining how data is collected, stored, used, and protected in an organization. Good governance specifies who has access to which data, for what purposes, and with what security measures.
- Scaling Up : The process by which a successful pilot project is extended to a larger number of users, regions, or tasks. Scaling up must be based on proven results and adequate preparation of teams and systems.
```


---

# Lecon 5 — Automatiser sans perdre le contrôle — l'humain dans la boucle

**Duree cible** : 5 minutes · **Fichier** : `src/data/lessons/ia-c5-automatisation.ts`

### Prompt FR

```text
Cree une video explicative de 5 minutes a partir du document source.
Public : toute personne curieuse de l'IA — salarie, etudiant, independant, agent de terrain, benevole — sans aucun prerequis technique, partout dans le monde. La source contient surtout des exemples africains et humanitaires : garde-en un ou deux comme illustrations concretes, mais ouvre a d'autres contextes (entreprise, administration, ecole, petite structure) et a d'autres regions. Ne presente jamais ce cours comme reserve a l'Afrique ni au secteur humanitaire.
Objectif : automatiser une tache repetitive sans perdre le controle humain.
Couvre dans l'ordre : 1) ce qui s'automatise (repetitif, regles claires, donnees structurees) et ce qui ne s'automatise pas ; 2) les outils accessibles : tableur, outils no-code, assistant IA, et les solutions qui marchent hors ligne ; 3) l'humain dans la boucle : au moins un point de controle avant que le resultat parte ; 4) mesurer honnetement : temps gagne contre temps de mise en place, erreurs possibles, dependance a un outil.
Sois honnete sur ce point : la responsabilite ne se delegue pas a une machine : en cas d'erreur, c'est un humain qui repond.
Termine par : identifier une tache repetitive de sa semaine et le point de controle qu’on ne supprimera jamais.
Ton clair et chaleureux, vouvoiement, phrases courtes. Explique chaque terme technique la premiere fois. N'invente aucun chiffre, aucune date et aucune source qui ne figure pas dans le document source.
```

### Source FR (a charger dans le notebook)

```markdown
# Automatiser sans perdre le contrôle — l'humain dans la boucle

## Objectif
À l'issue de cette leçon, vous serez capable d'identifier les tâches répétitives de votre quotidien qui se prêtent à l'automatisation. Vous saurez choisir des outils simples et accessibles pour mettre en place un premier workflow automatisé. Vous apprendrez à maintenir un contrôle humain sur les étapes sensibles et à mesurer honnêtement le temps gagné par rapport aux risques introduits.

## Quoi automatiser — et ce qu'il vaut mieux laisser à l'humain
Imaginez un agent de terrain qui remplit chaque matin le même tableau Excel : noms de bénéficiaires, quantités distribuées, village, date. Copier-coller, reformater, envoyer par e-mail. C'est répétitif, c'est à règles claires — c'est exactement ce qu'une automatisation peut prendre en charge à votre place.

Une tâche est bonne candidate à l'automatisation si elle suit toujours les mêmes étapes, si les données d'entrée sont structurées (formulaire, tableur, e-mail standardisé) et si une erreur n'a pas de conséquence grave et irréversible. Par exemple : trier des e-mails par type de demande, générer un rapport hebdomadaire à partir d'un formulaire KoboToolbox, ou envoyer un SMS de rappel via un outil comme Orange SMS API.

En revanche, certaines tâches ne doivent pas être automatisées sans surveillance étroite : décisions affectant directement un bénéficiaire vulnérable, validation de paiements importants (comme un virement M-Pesa vers des centaines de personnes), ou toute situation où le contexte local et humain est décisif. Automatiser sans réfléchir, c'est comme confier les clés de la moto à quelqu'un qui ne connaît pas la piste.

## Outils accessibles — combiner IA, no-code et tableur
Pas besoin d'être développeur pour automatiser. Des outils comme Google Sheets avec des formules avancées, des plateformes no-code comme Zapier ou Make (anciennement Integromat), ou encore un assistant IA comme ChatGPT, peuvent être combinés pour créer des flux de travail puissants et accessibles même depuis un téléphone Android avec une connexion 3G.

Concrètement : un coordinateur PNUD au Niger peut configurer un déclencheur (trigger) dans Google Sheets — dès qu'une nouvelle ligne est ajoutée par un agent terrain via un formulaire Google Forms, un résumé automatique est généré par une formule ou une requête IA, puis envoyé par e-mail au superviseur. Tout cela sans écrire une seule ligne de code.

Pour les environnements à faible connectivité, il existe des solutions hors ligne : des scripts Excel (macros) qui s'exécutent localement, ou des formulaires ODK collectés en mode déconnecté et synchronisés dès que le réseau revient. L'important est de choisir des outils adaptés à votre réalité terrain, pas les plus sophistiqués du marché.

## Garder l'humain dans la boucle — validation, qualité, responsabilité
Automatiser ne signifie pas abandonner le volant. Pensez à un taxi-moto qui emprunte un itinéraire connu : il peut aller vite sur le tronçon qu'il connaît bien, mais il ralentit et regarde lui-même aux carrefours dangereux. C'est le principe du human-in-the-loop : la machine fait le travail prévisible, l'humain intervient aux points critiques.

Concrètement, identifiez dans votre workflow au moins un point de contrôle humain. Par exemple : l'automatisation trie les formulaires terrain et pré-remplit un tableau de synthèse, mais c'est le responsable de programme qui valide ce tableau avant qu'il parte au bailleur. Pour les cas signalés comme « sensibles » (bénéficiaire en situation de détresse, données incohérentes), le système doit alerter un humain plutôt que de traiter automatiquement.

La responsabilité ne se délègue pas à une machine. Si une erreur survient dans un processus automatisé — un rapport mal généré, un bénéficiaire oublié — c'est toujours un être humain qui en répond. Cette conscience doit guider la conception de chaque automatisation dans votre organisation.

## Mesurer gain et risques — temps gagné, erreurs possibles, dépendance
Avant de déployer une automatisation, posez-vous trois questions simples : Combien de temps cette tâche prend-elle aujourd'hui ? Quelle est la probabilité qu'une erreur automatisée passe inaperçue ? Si l'outil tombe en panne, que se passe-t-il ? C'est comme évaluer si acheter un moulin à manioc collectif est vraiment plus efficace que de piler manuellement — il faut comparer coût, fiabilité et dépendance au mécanicien.

Des estimations raisonnables suggèrent qu'une automatisation bien conçue peut réduire de 40 à 70 % le temps consacré à des tâches de saisie ou de compilation répétitives. Mais ce gain doit être mis en regard du temps nécessaire pour configurer, tester et maintenir l'automatisation — souvent sous-estimé. Une règle pratique : si une tâche prend moins de 5 minutes par semaine, l'automatiser n'est probablement pas prioritaire.

Surveiller les risques de dépendance est essentiel. Si votre organisation dépend entièrement d'un outil gratuit dont les conditions changent du jour au lendemain, vous êtes vulnérable. Documentez toujours votre workflow, gardez une procédure manuelle de secours, et testez régulièrement que l'automatisation produit bien les résultats attendus. Une tontine numérique qui plante le jour du remboursement, c'est une catastrophe évitable.

## Cas concret — Synthèse automatisée des formulaires terrain au PNUD Niger
Le probleme : Une équipe de coordination reçoit chaque semaine entre 80 et 120 formulaires terrain remplis par des agents dans 12 régions du Niger. La consolidation manuelle prenait environ 6 heures par semaine à une assistante de programme : copier les données depuis les e-mails, les coller dans un tableur, vérifier les doublons, générer un tableau de synthèse pour le rapport hebdomadaire.
La solution : L'équipe configure un formulaire KoboToolbox connecté à Google Sheets via une exportation automatique quotidienne. Un script Google Apps Script (sans connaissance avancée en programmation) détecte les nouvelles lignes, génère automatiquement les totaux par région et par indicateur, et envoie par e-mail un tableau de synthèse pré-formaté au coordinateur chaque lundi matin. Les formulaires signalant des incidents critiques (champ « cas sensible » coché) déclenchent une alerte immédiate vers le responsable de protection — sans attendre la synthèse hebdomadaire.
L'impact : Le temps de consolidation est passé de 6 heures à moins d'1 heure par semaine (réduction d'environ 85 %), l'assistante consacrant ce temps libéré à l'analyse qualitative des données. Les alertes sur cas sensibles sont transmises en moins de 15 minutes au lieu de parfois 48 heures. Le responsable de programme valide le tableau avant envoi au bailleur — le point de contrôle humain est maintenu.

## Mise en pratique — Cartographier votre premier workflow automatisable
1. Ouvrez le bloc-notes ou une application de notes sur votre téléphone. Décrivez en 5 à 8 lignes une tâche répétitive que vous faites au moins une fois par semaine : précisez les données d'entrée (d'où viennent-elles ?), les étapes que vous réalisez, et le résultat final produit.
2. Relisez votre description et entourez (ou mettez en majuscules) l'étape qui pourrait être faite automatiquement par un outil ou un assistant IA — c'est votre étape automatisable. Puis identifiez l'étape où une erreur serait grave ou où un jugement humain est indispensable — c'est votre point de contrôle humain.
3. Estimez honnêtement : combien de minutes cette tâche vous prend-elle chaque semaine ? Si vous économisiez 70 % de ce temps, qu'en feriez-vous ? Notez votre réponse. Cela devient votre critère de succès pour évaluer si l'automatisation vaut l'effort de mise en place.
A observer : Vous réaliserez probablement que la plupart des tâches répétitives ont une structure claire une fois qu'on les écrit noir sur blanc — et que le point de contrôle humain est souvent plus évident qu'on ne le pensait. Gardez cette note : elle sera votre point de départ si vous décidez de mettre en place l'automatisation.

## Glossaire
- Automatisation : Le fait de configurer un système pour qu'il exécute une tâche répétitive de façon autonome, selon des règles définies à l'avance, sans intervention humaine à chaque occurrence.
- Human-in-the-loop : Principe de conception selon lequel un être humain reste impliqué dans un processus automatisé, notamment pour valider les résultats aux étapes critiques ou traiter les cas exceptionnels.
- Workflow : Séquence ordonnée d'étapes ou de tâches permettant d'accomplir un processus ou d'atteindre un résultat. Un workflow peut être partiellement ou totalement automatisé.
- No-code : Catégorie d'outils qui permettent de créer des applications, des automatisations ou des intégrations sans écrire de code informatique, via des interfaces visuelles accessibles à tous.
- Déclencheur (trigger) : Événement spécifique qui lance automatiquement une action ou un workflow. Par exemple : la réception d'un e-mail, l'ajout d'une ligne dans un tableur, ou l'arrivée d'un certain moment de la journée.
- Point de contrôle : Étape d'un processus automatisé où un humain intervient pour vérifier, valider ou corriger le résultat avant que le processus ne continue. C'est le filet de sécurité de l'automatisation.
```

### Prompt EN

```text
Create a 5 minute explainer video from the source document.
Audience: anyone curious about AI — employees, students, freelancers, field workers, volunteers — with no technical background, anywhere in the world. The source leans on African and humanitarian examples: keep one or two as concrete illustrations, but open up to other settings (business, public sector, school, small organisation) and other regions. Never present this course as being only for Africa or only for the humanitarian sector.
Goal: automate a repetitive task without losing human control.
Cover in this order: 1) what can be automated (repetitive, clear rules, structured data) and what cannot; 2) accessible tools: spreadsheets, no-code tools, an AI assistant, and options that work offline; 3) human in the loop: at least one checkpoint before anything goes out; 4) measure honestly: time saved versus setup time, possible errors, dependence on one tool.
Be honest about this: responsibility is never delegated to a machine: when something goes wrong, a human answers for it.
End with: name one repetitive task from your week and the checkpoint you would never remove.
Clear, warm tone, short sentences. Explain every technical term the first time it appears. Do not invent any figure, date or source that is not in the source document.
```

### Source EN (to load in the notebook)

```markdown
# Automating Without Losing Control — Keeping the Human in the Loop

## Objective
By the end of this lesson, you will be able to identify the repetitive tasks in your daily work that are suitable for automation. You will know how to choose simple, accessible tools to set up your first automated workflow. You will learn to maintain human oversight at sensitive steps and to honestly measure the time saved against the risks introduced.

## What to Automate — and What Is Better Left to Humans
Imagine a field agent who fills in the same Excel spreadsheet every morning: beneficiary names, quantities distributed, village, date. Copy-paste, reformat, send by email. It is repetitive, rule-based — exactly the kind of task an automation can handle on your behalf.

A task is a good candidate for automation if it always follows the same steps, if the input data is structured (a form, a spreadsheet, a standardized email), and if an error would not have serious, irreversible consequences. Examples include: sorting emails by request type, generating a weekly report from a KoboToolbox form, or sending a reminder SMS via a tool like the Orange SMS API.

On the other hand, some tasks must not be automated without close oversight: decisions directly affecting a vulnerable beneficiary, validating large payments (such as an M-Pesa transfer to hundreds of people), or any situation where local and human context is decisive. Automating without thinking is like handing the motorbike keys to someone who does not know the track.

## Accessible Tools — Combining AI, No-Code Platforms, and Spreadsheets
You do not need to be a developer to automate. Tools such as Google Sheets with advanced formulas, no-code platforms like Zapier or Make (formerly Integromat), or an AI assistant like ChatGPT can be combined to create powerful workflows accessible even from an Android phone on a 3G connection.

In practice: a UNDP coordinator in Niger can configure a trigger in Google Sheets — as soon as a field agent adds a new row via a Google Forms survey, an automatic summary is generated by a formula or an AI query, then emailed to the supervisor. All of this without writing a single line of code.

For low-connectivity environments, there are offline solutions: Excel scripts (macros) that run locally, or ODK forms collected in disconnected mode and synchronized as soon as the network returns. The important thing is to choose tools suited to your field reality, not the most sophisticated ones on the market.

## Keeping the Human in the Loop — Validation, Quality, Accountability
Automating does not mean letting go of the wheel. Think of a motorbike taxi driver following a familiar route: he can go fast on the stretch he knows well, but he slows down and looks carefully at dangerous crossroads. That is the human-in-the-loop principle: the machine handles the predictable work, the human intervenes at critical points.

In practice, identify at least one human checkpoint in your workflow. For example: the automation sorts field forms and pre-fills a summary table, but it is the programme manager who validates that table before it goes to the donor. For forms flagged as 'sensitive' (a beneficiary in distress, inconsistent data), the system must alert a human rather than processing automatically.

Accountability cannot be delegated to a machine. If an error occurs in an automated process — a mis-generated report, a missing beneficiary — it is always a human being who is responsible. This awareness must guide the design of every automation in your organization.

## Measuring Gains and Risks — Time Saved, Possible Errors, Dependency
Before deploying an automation, ask yourself three simple questions: How much time does this task take today? How likely is it that an automated error would go unnoticed? If the tool breaks down, what happens? It is like evaluating whether buying a collective cassava mill is really more efficient than pounding by hand — you must compare cost, reliability, and dependency on the mechanic.

Reasonable estimates suggest that a well-designed automation can reduce time spent on repetitive data-entry or compilation tasks by 40 to 70 per cent. But this gain must be weighed against the time needed to configure, test, and maintain the automation — often underestimated. A practical rule: if a task takes less than five minutes per week, automating it is probably not a priority.

Monitoring dependency risks is essential. If your organization relies entirely on a free tool whose terms can change overnight, you are vulnerable. Always document your workflow, keep a manual backup procedure, and regularly test that the automation produces the expected results. A digital tontine that crashes on repayment day is a preventable disaster.

## Real case — Automated Synthesis of Field Forms at UNDP Niger
Challenge : A coordination team receives between 80 and 120 field forms each week, filled in by agents across 12 regions of Niger. Manual consolidation took a programme assistant approximately 6 hours per week: copying data from emails, pasting it into a spreadsheet, checking for duplicates, and generating a summary table for the weekly report.
Solution : The team sets up a KoboToolbox form connected to Google Sheets via a daily automatic export. A Google Apps Script (requiring no advanced programming knowledge) detects new rows, automatically generates totals by region and indicator, and emails a pre-formatted summary table to the coordinator every Monday morning. Forms flagging critical incidents (the 'sensitive case' field checked) trigger an immediate alert to the protection manager — without waiting for the weekly synthesis.
Impact : Consolidation time dropped from 6 hours to under 1 hour per week (roughly 85% reduction), with the assistant using the freed time for qualitative data analysis. Alerts on sensitive cases are now transmitted in under 15 minutes instead of sometimes 48 hours. The programme manager validates the table before sending it to the donor — the human checkpoint is maintained.

## Practice — Map Your First Automatable Workflow
1. Open your phone's notes app. Describe in 5 to 8 lines a repetitive task you perform at least once a week: specify the input data (where does it come from?), the steps you carry out, and the final result produced.
2. Re-read your description and circle (or write in capitals) the step that could be done automatically by a tool or an AI assistant — that is your automatable step. Then identify the step where an error would be serious or where human judgment is indispensable — that is your human checkpoint.
3. Estimate honestly: how many minutes does this task take you each week? If you saved 70 per cent of that time, what would you do with it? Write down your answer. This becomes your success criterion for evaluating whether the automation is worth the effort of setting up.
What to notice : You will probably find that most repetitive tasks have a clear structure once written down — and that the human checkpoint is often more obvious than you thought. Keep this note: it will be your starting point if you decide to implement the automation.

## Glossary
- Automation : Configuring a system to execute a repetitive task autonomously, according to pre-defined rules, without human intervention at each occurrence.
- Human-in-the-loop : A design principle in which a human remains involved in an automated process, particularly to validate results at critical steps or to handle exceptional cases.
- Workflow : An ordered sequence of steps or tasks for completing a process or achieving an outcome. A workflow can be partially or fully automated.
- No-code : A category of tools that allow you to create applications, automations, or integrations without writing computer code, through visual interfaces accessible to everyone.
- Trigger : A specific event that automatically launches an action or workflow. Examples: receiving an email, adding a row to a spreadsheet, or reaching a certain time of day.
- Checkpoint : A step in an automated process where a human intervenes to verify, validate, or correct the result before the process continues. It is the safety net of automation.
```


---

# Lecon 6 — Éthique, biais et protection des données — utiliser l'IA de façon responsable

**Duree cible** : 5 a 6 minutes · **Fichier** : `src/data/lessons/ia-c6-ethique.ts`

### Prompt FR

```text
Cree une video explicative de 5 a 6 minutes a partir du document source.
Public : toute personne curieuse de l'IA — salarie, etudiant, independant, agent de terrain, benevole — sans aucun prerequis technique, partout dans le monde. La source contient surtout des exemples africains et humanitaires : garde-en un ou deux comme illustrations concretes, mais ouvre a d'autres contextes (entreprise, administration, ecole, petite structure) et a d'autres regions. Ne presente jamais ce cours comme reserve a l'Afrique ni au secteur humanitaire.
Objectif : utiliser l'IA de facon responsable : biais, donnees personnelles, desinformation.
Couvre dans l'ordre : 1) d'ou viennent les biais : des donnees d'entrainement, et ce que cela change pour les personnes mal representees ; 2) confidentialite et souverainete des donnees : ou partent les informations que vous saisissez, et le consentement eclaire ; 3) desinformation : deepfakes et hallucinations, et le reflexe de verification a deux sources independantes ; 4) responsabilite collective : outils autorises, transparence sur l'usage de l'IA, relecture humaine systematique.
Sois honnete sur ce point : un outil biaise peut exclure des personnes reelles sans que personne ne s'en apercoive.
Termine par : une mini-checklist ethique en trois questions a se poser avant de saisir la moindre donnee.
Ton clair et chaleureux, vouvoiement, phrases courtes. Explique chaque terme technique la premiere fois. N'invente aucun chiffre, aucune date et aucune source qui ne figure pas dans le document source.
```

### Source FR (a charger dans le notebook)

```markdown
# Éthique, biais et protection des données — utiliser l'IA de façon responsable

## Objectif
À l'issue de cette leçon, vous serez capable d'identifier les principales sources de biais dans les systèmes d'IA et leurs effets concrets sur les populations africaines. Vous saurez protéger les données personnelles des bénéficiaires en appliquant les principes de confidentialité et de consentement éclairé. Vous pourrez détecter la désinformation générée par l'IA et adopter les bonnes pratiques de vérification. Vous mettrez en place des garde-fous organisationnels pour éviter un usage non encadré de l'IA dans votre structure.

## D'où viennent les biais dans l'IA ?
Un système d'IA apprend à partir de données. Si ces données ne reflètent pas la diversité du monde réel, le système reproduit — et parfois amplifie — les inégalités existantes. C'est comme un cuisinier qui n'a goûté que la cuisine d'une seule région : ses plats seront bons pour ses voisins, mais moins adaptés aux autres.

En Afrique, ce problème est particulièrement visible. Des outils de reconnaissance faciale entraînés principalement sur des visages européens ou nord-américains ont montré des taux d'erreur nettement plus élevés sur les peaux foncées. Des assistants vocaux ne comprennent pas le haoussa, le wolof ou le bambara. Un algorithme de crédit entraîné sur des données bancaires classiques pénalise des populations qui utilisent la tontine ou Orange Money — des formes de finance tout à fait solides mais absentes des données d'entraînement.

Concrètement, cela peut signifier qu'une bénéficiaire de programme de santé maternelle reçoit des recommandations inadaptées à son contexte, ou qu'un agriculteur de manioc au Niger se voit refuser un micro-crédit par un algorithme qui ne connaît pas ses pratiques. Reconnaître le biais, c'est la première étape pour le corriger.

## Confidentialité et souveraineté des données
Quand vous tapez le nom, l'état de santé ou la situation familiale d'un bénéficiaire dans un outil d'IA en ligne, où vont ces données ? La plupart du temps, elles sont envoyées vers des serveurs situés hors d'Afrique, potentiellement utilisées pour améliorer le modèle, et soumises aux lois du pays hébergeur — pas nécessairement aux vôtres. C'est la question de la souveraineté des données.

Plusieurs cadres s'appliquent : le RGPD européen (si votre organisation reçoit des financements européens ou travaille avec des partenaires UE), mais aussi des lois nationales émergentes comme la loi nigérienne sur la protection des données personnelles. Ces cadres posent un principe simple : une personne doit savoir quelles données sont collectées sur elle, pourquoi, et avoir donné son accord — c'est le consentement éclairé.

Dans la pratique, avant d'utiliser un outil d'IA pour traiter des informations sur des bénéficiaires, posez-vous trois questions : Qui peut lire ces données ? Où sont-elles stockées ? Ont-elles été anonymisées ? Un agent de terrain du PNUD qui saisit des noms et des adresses dans un chatbot public expose ses bénéficiaires sans le vouloir. Préférez des outils validés par votre organisation, et anonymisez systématiquement les données sensibles.

## Désinformation et vérification — ne pas croire sur parole
L'IA générative peut produire des textes, des images, des vidéos et des voix d'une qualité convaincante. Ce n'est pas forcément un problème — mais cela devient dangereux quand le contenu est faux et difficile à détecter. On parle de deepfakes pour les images ou vidéos manipulées, et d'hallucinations pour les affirmations incorrectes mais formulées avec assurance par un modèle de langage.

Dans le contexte humanitaire, les conséquences peuvent être graves. Un faux communiqué d'une ONG qui appelle à une évacuation inexistante peut provoquer la panique. Un rapport de situation fabriqué par IA peut influencer des décisions de financement. En période d'élection ou de crise, des rumeurs amplifiées par des outils d'IA circulent rapidement via WhatsApp dans des communautés déjà fragilisées.

La règle d'or : vérifiez toute information importante à deux sources indépendantes avant de la partager ou de l'utiliser pour une décision. Pour les images, des outils gratuits comme FotoForensics ou l'outil de vérification de Google Images permettent de détecter des manipulations. Pour les textes, interrogez-vous : l'auteur est-il identifiable ? La date est-elle claire ? Un organe de presse reconnu confirme-t-il l'information ? Ne partagez jamais un contenu douteux en contexte professionnel sans vérification préalable.

## Bonnes pratiques et responsabilité organisationnelle
Utiliser l'IA de façon responsable ne dépend pas uniquement de chaque individu — c'est aussi une responsabilité collective. La Shadow AI désigne l'utilisation d'outils d'IA non approuvés par l'organisation : un agent qui utilise un chatbot grand public pour synthétiser des rapports confidentiels, sans en informer sa hiérarchie. C'est une pratique risquée, même si elle part d'une bonne intention de gagner du temps.

La transparence est un pilier central : si vous avez utilisé l'IA pour produire un document, signalez-le. Cela permet à vos collègues et à vos partenaires d'exercer leur esprit critique sur le résultat. La supervision humaine reste indispensable — l'IA propose, l'humain décide et assume la responsabilité. Un médecin de santé communautaire peut utiliser l'IA pour obtenir une liste de symptômes, mais c'est lui qui examine le patient et pose le diagnostic.

Dans votre organisation, quelques gestes concrets font la différence : établir une liste des outils d'IA autorisés, former les équipes aux risques de base, inclure une clause de confidentialité IA dans les contrats avec les partenaires, et prévoir une relecture humaine systématique pour tout document destiné à des bénéficiaires ou à des bailleurs. Ces pratiques ne ralentissent pas le travail — elles protègent la confiance que vous avez mise des années à construire.

## Cas concret — Quand un algorithme ne reconnaît pas les visages — et comment corriger cela
Le probleme : Une organisation humanitaire au Sahel déploie un système biométrique d'IA pour identifier les bénéficiaires d'une distribution alimentaire. Sur le terrain, les agents constatent que le système échoue à reconnaître environ 30 % des bénéficiaires — presque exclusivement des femmes aux teintes de peau plus foncées et des personnes âgées. La distribution prend deux fois plus de temps, certains bénéficiaires repartent sans aide, et la confiance de la communauté s'érode. L'outil a été entraîné sur des bases de données photographiques majoritairement nord-américaines et européennes.
La solution : L'organisation suspend temporairement le système automatique et revient à une vérification manuelle assistée. Elle documente tous les cas d'échec avec photographies et métadonnées. Elle contacte le fournisseur et lui fournit un jeu de données supplémentaires représentatif de la population locale, collecté avec consentement éclairé. En parallèle, elle met en place un protocole de supervision humaine obligatoire : tout rejet du système doit être confirmé par un agent avant de refuser l'accès à un bénéficiaire. Elle forme ses équipes à identifier les biais et à signaler tout écart.
L'impact : Après correction et réentraînement sur des données plus représentatives, le taux d'erreur de reconnaissance chute de 30 % à moins de 4 %. Le temps de distribution revient à son niveau normal, divisé par deux. Aucun bénéficiaire éligible n'est plus refusé sans intervention humaine. La communauté retrouve confiance dans le processus, et l'organisation dispose désormais d'un protocole documenté réutilisable pour d'autres déploiements technologiques.

## Mise en pratique — Cartographier les données sensibles de votre organisation
1. Choisissez un cas d'usage réel dans votre organisation où l'IA pourrait être ou est déjà utilisée (exemple : synthèse de rapports terrain, traduction, analyse de données bénéficiaires). Notez ce cas d'usage dans votre téléphone.
2. Listez toutes les données sensibles impliquées dans ce cas : noms, localisations, états de santé, situations familiales, coordonnées GPS, photos. Pour chaque donnée, notez ce qui pourrait se passer si elle était exposée ou utilisée sans autorisation.
3. Pour chaque donnée sensible identifiée, proposez au moins un garde-fou concret : anonymisation avant saisie (remplacer les noms par des codes), recueil d'un consentement écrit, utilisation d'un outil approuvé par votre organisation, ou relecture humaine avant partage. Prenez une capture d'écran ou une note de votre liste pour la partager lors de la prochaine réunion d'équipe.
A observer : Vous constaterez probablement que certains risques étaient invisibles avant cet exercice. C'est normal : on ne voit les dangers d'un outil qu'en posant les bonnes questions. Cette cartographie simple peut devenir la base d'une politique IA de votre organisation.

## Glossaire
- Biais : Erreur systématique dans les résultats d'un système d'IA, causée par des données d'entraînement non représentatives ou des choix de conception qui favorisent certains groupes au détriment d'autres.
- Données personnelles : Toute information permettant d'identifier directement ou indirectement une personne : nom, adresse, numéro de téléphone, photo, localisation GPS, état de santé, situation familiale.
- Souveraineté des données : Principe selon lequel les données collectées dans un pays ou sur une communauté doivent rester sous le contrôle de cette communauté ou de ce pays, et non transférées sans accord vers des serveurs étrangers.
- Consentement éclairé : Accord libre et informé donné par une personne avant que ses données soient collectées ou utilisées. La personne doit comprendre clairement ce à quoi elle consent, dans une langue qu'elle maîtrise.
- Transparence : Obligation de signaler clairement quand un document, une décision ou une communication a été produit ou assisté par un système d'IA, afin que les destinataires puissent exercer leur esprit critique.
- Shadow AI : Usage d'outils d'IA non approuvés par une organisation, souvent à titre personnel et sans en informer la hiérarchie, exposant l'organisation à des risques de sécurité, de confidentialité et de conformité réglementaire.
```

### Prompt EN

```text
Create a 5 to 6 minute explainer video from the source document.
Audience: anyone curious about AI — employees, students, freelancers, field workers, volunteers — with no technical background, anywhere in the world. The source leans on African and humanitarian examples: keep one or two as concrete illustrations, but open up to other settings (business, public sector, school, small organisation) and other regions. Never present this course as being only for Africa or only for the humanitarian sector.
Goal: use AI responsibly: bias, personal data, disinformation.
Cover in this order: 1) where bias comes from: the training data, and what that means for under-represented people; 2) privacy and data sovereignty: where the information you type actually goes, and informed consent; 3) disinformation: deepfakes and hallucinations, and the reflex of checking two independent sources; 4) collective responsibility: approved tools, transparency about AI use, systematic human review.
Be honest about this: a biased tool can exclude real people without anyone noticing.
End with: a three-question ethics checklist to run before typing any data into a tool.
Clear, warm tone, short sentences. Explain every technical term the first time it appears. Do not invent any figure, date or source that is not in the source document.
```

### Source EN (to load in the notebook)

```markdown
# Ethics, Bias, and Data Protection — Using AI Responsibly

## Objective
By the end of this lesson, you will be able to identify the main sources of bias in AI systems and their concrete effects on African populations. You will know how to protect beneficiaries' personal data by applying the principles of confidentiality and informed consent. You will be able to detect AI-generated misinformation and adopt good verification practices. You will put in place organizational safeguards to prevent uncontrolled use of AI within your organization.

## Where Does AI Bias Come From?
An AI system learns from data. If that data does not reflect the diversity of the real world, the system reproduces — and sometimes amplifies — existing inequalities. Think of it like a cook who has only ever tasted food from one region: their dishes will suit their neighbors well, but may not work for everyone else.

In Africa, this problem is particularly visible. Facial recognition tools trained mainly on European or North American faces have shown significantly higher error rates on darker skin tones. Voice assistants fail to understand Hausa, Wolof, or Bambara. A credit-scoring algorithm trained on traditional banking data penalizes populations who use tontines or Orange Money — perfectly sound financial practices that are simply absent from the training data.

In practice, this can mean that a beneficiary in a maternal health program receives recommendations that are poorly suited to her context, or that a cassava farmer in Niger is denied a microloan by an algorithm that does not recognize his financial practices. Recognizing bias is the first step toward correcting it.

## Confidentiality and Data Sovereignty
When you type a beneficiary's name, health status, or family situation into an online AI tool, where does that data go? Most of the time, it is sent to servers located outside Africa, potentially used to improve the model, and governed by the laws of the host country — not necessarily your own. This is the question of data sovereignty.

Several frameworks apply: the European GDPR (if your organization receives European funding or works with EU partners), but also emerging national laws such as Niger's personal data protection law. These frameworks share a simple principle: a person must know what data is collected about them, why, and must have given their agreement — this is informed consent.

In practice, before using an AI tool to process information about beneficiaries, ask yourself three questions: Who can read this data? Where is it stored? Has it been anonymized? A UNDP field agent who enters names and addresses into a public chatbot unknowingly exposes their beneficiaries. Prefer tools validated by your organization, and systematically anonymize sensitive data.

## Misinformation and Verification — Do Not Take Things at Face Value
Generative AI can produce text, images, videos, and voices of convincing quality. This is not inherently a problem — but it becomes dangerous when the content is false and difficult to detect. We speak of deepfakes for manipulated images or videos, and hallucinations for incorrect claims stated with confidence by a language model.

In the humanitarian context, the consequences can be serious. A fake communiqué from an NGO calling for a non-existent evacuation can cause panic. An AI-generated situation report can influence funding decisions. During elections or crises, rumors amplified by AI tools spread rapidly via WhatsApp in already vulnerable communities.

The golden rule: verify any important information against two independent sources before sharing it or using it for a decision. For images, free tools such as FotoForensics or Google's reverse image search can detect manipulation. For texts, ask yourself: is the author identifiable? Is the date clear? Does a recognized news outlet confirm the information? Never share doubtful content in a professional context without prior verification.

## Good Practices and Organizational Responsibility
Using AI responsibly is not solely an individual responsibility — it is also a collective one. Shadow AI refers to the use of AI tools not approved by the organization: a staff member who uses a public chatbot to summarize confidential reports without informing their supervisor. This is a risky practice, even when motivated by a genuine desire to save time.

Transparency is a central pillar: if you used AI to produce a document, say so. This allows colleagues and partners to apply critical thinking to the result. Human oversight remains essential — AI proposes, and humans decide and take responsibility. A community health worker may use AI to get a list of symptoms, but it is the worker who examines the patient and makes the diagnosis.

Within your organization, a few concrete actions make a real difference: establish a list of approved AI tools, train teams on basic risks, include an AI confidentiality clause in partner contracts, and require systematic human review of any document intended for beneficiaries or donors. These practices do not slow down work — they protect the trust you have spent years building.

## Real case — When an Algorithm Fails to Recognize Faces — and How to Fix It
Challenge : A humanitarian organization in the Sahel deploys a biometric AI system to identify beneficiaries during a food distribution. In the field, agents notice that the system fails to recognize about 30% of beneficiaries — almost exclusively women with darker skin tones and elderly people. The distribution takes twice as long, some beneficiaries leave without assistance, and community trust erodes. The tool was trained on photographic databases that were predominantly North American and European.
Solution : The organization temporarily suspends the automatic system and returns to manual assisted verification. It documents all failure cases with photographs and metadata. It contacts the vendor and provides an additional dataset representative of the local population, collected with informed consent. In parallel, it establishes a mandatory human supervision protocol: any rejection by the system must be confirmed by a human agent before denying a beneficiary access. It trains its teams to identify biases and report any discrepancy.
Impact : After correction and retraining on more representative data, the recognition error rate drops from 30% to less than 4%. Distribution time is halved, back to its normal level. No eligible beneficiary is refused without human intervention. The community regains trust in the process, and the organization now has a documented protocol reusable for future technology deployments.

## Practice — Mapping Your Organization's Sensitive Data
1. Choose a real use case in your organization where AI could be or is already being used (for example: summarizing field reports, translation, beneficiary data analysis). Write down this use case on your phone.
2. List all sensitive data involved in this use case: names, locations, health status, family situations, GPS coordinates, photos. For each data type, note what could happen if it were exposed or used without authorization.
3. For each sensitive data item identified, propose at least one concrete safeguard: anonymization before entry (replacing names with codes), collecting written consent, using a tool approved by your organization, or human review before sharing. Take a screenshot or a note of your list to share at the next team meeting.
What to notice : You will likely find that some risks were invisible before this exercise. That is normal: the dangers of a tool only become clear when you ask the right questions. This simple mapping can become the foundation of your organization's AI policy.

## Glossary
- Bias : A systematic error in the results of an AI system, caused by unrepresentative training data or design choices that favor certain groups at the expense of others.
- Personal data : Any information that directly or indirectly identifies a person: name, address, phone number, photo, GPS location, health status, or family situation.
- Data sovereignty : The principle that data collected in a country or about a community should remain under the control of that community or country, and not be transferred without agreement to foreign servers.
- Informed consent : A free and informed agreement given by a person before their data is collected or used. The person must clearly understand what they are consenting to, in a language they understand.
- Transparency : The obligation to clearly indicate when a document, decision, or communication was produced or assisted by an AI system, so that recipients can apply critical thinking.
- Shadow AI : The use of AI tools not approved by an organization, often for personal use and without informing management, exposing the organization to security, privacy, and regulatory compliance risks.
```


---

# Lecon 7 — Votre boîte à outils IA — choisir et combiner les bons outils

**Duree cible** : 5 minutes · **Fichier** : `src/data/lessons/ia-c7-outils.ts`

### Prompt FR

```text
Cree une video explicative de 5 minutes a partir du document source.
Public : toute personne curieuse de l'IA — salarie, etudiant, independant, agent de terrain, benevole — sans aucun prerequis technique, partout dans le monde. La source contient surtout des exemples africains et humanitaires : garde-en un ou deux comme illustrations concretes, mais ouvre a d'autres contextes (entreprise, administration, ecole, petite structure) et a d'autres regions. Ne presente jamais ce cours comme reserve a l'Afrique ni au secteur humanitaire.
Objectif : choisir et combiner les outils IA adaptes a son besoin et a son budget.
Couvre dans l'ordre : 1) les grandes familles d'outils : assistants conversationnels, transcription et traduction, generation d'images, analyse de documents ; 2) quatre criteres de choix : cout, fonctionnement hors ligne, confidentialite, langues supportees ; 3) combiner les outils en un flux simple : enregistrer, transcrire, resumer, traduire, archiver ; 4) demarrer gratuitement et progresser par une pratique courte et reguliere.
Sois honnete sur ce point : il n'existe pas d'outil universel parfait : le bon outil est celui qui correspond a votre contexte.
Termine par : choisir un seul outil a tester cette semaine sur une tache reelle.
Ton clair et chaleureux, vouvoiement, phrases courtes. Explique chaque terme technique la premiere fois. N'invente aucun chiffre, aucune date et aucune source qui ne figure pas dans le document source.
```

### Source FR (a charger dans le notebook)

```markdown
# Votre boîte à outils IA — choisir et combiner les bons outils

## Objectif
À l'issue de cette leçon, vous serez capable de comparer plusieurs outils IA selon vos besoins concrets, votre budget et vos contraintes de terrain. Vous saurez choisir un outil adapté à votre langue de travail, à votre connexion et à la sensibilité de vos données. Vous serez également en mesure de combiner plusieurs outils dans un flux de travail simple pour gagner du temps sur les tâches administratives. Enfin, vous pourrez démarrer gratuitement et progresser à votre rythme.

## Panorama des outils IA disponibles
Imaginez une boîte à outils de menuisier : il y a le marteau, la scie, le mètre. Chaque outil a sa fonction précise. Les outils IA fonctionnent de la même façon — il en existe plusieurs catégories, et chacune répond à un besoin différent.

Les assistants conversationnels (comme ChatGPT, Claude ou Gemini) répondent à vos questions, rédigent des textes, résument des documents et vous aident à préparer des réunions. Les outils de transcription et de traduction (comme Whisper ou DeepL) convertissent la parole en texte ou traduisent vos rapports du français au haoussa ou à l'anglais. C'est particulièrement utile lors des réunions communautaires en milieu rural, où les échanges se font souvent en langue locale.

Les outils de génération d'images (comme DALL·E ou Canva IA) créent des visuels pour vos supports de sensibilisation ou vos affiches de santé communautaire. Les outils d'analyse de documents, comme NotebookLM de Google, vous permettent de poser des questions directement sur un rapport de 80 pages, comme si vous parliez à un collègue qui l'aurait lu pour vous. Pour une équipe PNUD au Niger traitant des dizaines de rapports de terrain chaque mois, c'est un gain de temps considérable.

## Critères pour bien choisir son outil
Choisir un outil IA sans critères clairs, c'est comme aller au marché sans liste de courses : on risque de repartir avec des choses inutiles ou de dépasser son budget. Quatre critères essentiels doivent guider votre choix.

Premier critère : le coût. La plupart des outils proposent une version gratuite (freemium) avec des fonctionnalités limitées, et une version payante. Pour beaucoup d'organisations locales et d'ONG en Afrique subsaharienne, la version gratuite suffit pour démarrer. Deuxième critère : le fonctionnement hors ligne. Dans les zones rurales du Sahel où la connexion 3G est intermittente, un outil qui nécessite une connexion permanente peut devenir inutilisable. Certains outils permettent un usage partiel sans internet.

Troisième critère : la confidentialité. Si vos données concernent des bénéficiaires vulnérables — réfugiés, patients, victimes de violence — vous devez vérifier où sont stockées ces données et qui y a accès. Ne jamais saisir de données personnelles identifiables dans un outil grand public sans vérifier sa politique de confidentialité. Quatrième critère : les langues supportées. Un outil excellent en anglais peut être médiocre en haoussa ou en bambara. Testez toujours l'outil dans la langue de votre travail réel avant de l'adopter.

## Combiner les outils dans un flux de travail
Un seul outil IA peut vous aider. Plusieurs outils bien combinés peuvent transformer votre façon de travailler. Pensez à une chaîne de production artisanale : chaque artisan fait une étape, et ensemble ils produisent un résultat que personne n'aurait pu faire seul.

Voici un exemple concret de flux de travail pour une équipe de terrain : Étape 1 — vous enregistrez votre réunion communautaire sur votre téléphone. Étape 2 — vous utilisez un outil de transcription (comme Whisper) pour convertir l'audio en texte. Étape 3 — vous collez ce texte dans un assistant conversationnel (Claude ou ChatGPT) pour en extraire un résumé structuré et les points d'action. Étape 4 — vous traduisez ce résumé en français ou en anglais pour votre rapport avec DeepL ou Google Translate. Étape 5 — vous intégrez ce rapport dans NotebookLM pour l'archiver et permettre à votre équipe de le retrouver et de l'interroger plus tard.

Ce flux, qui aurait pris une journée entière à rédiger manuellement, peut se faire en une à deux heures. Des équipes humanitaires au Sahel ont signalé des gains de temps similaires sur leurs rapports de monitoring. L'essentiel est de définir votre flux en avance et de tester chaque étape avant de l'utiliser sur des données sensibles.

## Démarrer gratuitement et monter en compétence
Apprendre à utiliser les outils IA ressemble à apprendre à cultiver un nouveau légume : au début on tâtonne, on fait quelques erreurs, puis on trouve le bon rythme. La bonne nouvelle, c'est que la plupart des ressources pour apprendre sont gratuites et accessibles depuis un smartphone.

Pour démarrer sans budget, vous pouvez utiliser les versions gratuites de ChatGPT, Claude, Gemini ou Perplexity pour vos questions quotidiennes. Whisper d'OpenAI est disponible en ligne gratuitement pour la transcription. NotebookLM de Google est gratuit pour analyser vos documents. DeepL propose une traduction de qualité avec une limite mensuelle raisonnable en version gratuite. Des plateformes comme YouTube, Coursera (avec audit gratuit) ou des communautés WhatsApp d'apprentissage permettent de progresser à son rythme, même avec une connexion limitée.

La pratique régulière est plus efficace que les longues sessions rares. Consacrez dix à quinze minutes par jour à tester un outil sur une tâche réelle de votre travail — rédiger un courriel, résumer un rapport, préparer un ordre du jour. En un mois, vous aurez une vraie maîtrise pratique. Des agents de santé communautaire au Niger ont commencé par transcrire leurs notes de visite sur WhatsApp Business, avant de progresser vers des outils plus complets. Chaque petit pas compte.

## Cas concret — L'équipe terrain de l'ONG SantéSahel compose sa boîte à outils IA gratuite
Le probleme : L'équipe de coordination de SantéSahel, basée à Tahoua au Niger, produit chaque mois une vingtaine de rapports de visite terrain, de comptes rendus de réunions communautaires et de traductions de formulaires. Trois coordinatrices passaient en moyenne douze heures par semaine chacune sur ces tâches administratives, au détriment du suivi des bénéficiaires.
La solution : L'équipe a mis en place un flux en quatre étapes, entièrement avec des outils gratuits : (1) enregistrement audio des réunions sur téléphone Android, (2) transcription avec Whisper via une interface web gratuite, (3) résumé et extraction des points d'action avec Claude (version gratuite), (4) traduction français-haoussa avec Google Translate pour les formulaires destinés aux agents de santé locaux. NotebookLM a été ajouté pour archiver et retrouver rapidement les rapports passés.
L'impact : En six semaines, le temps consacré aux tâches administratives a été réduit d'environ 40 %, soit un gain estimé à cinq heures par semaine et par coordinatrice. Les rapports mensuels sont désormais produits deux jours plus tôt, libérant du temps pour les visites de terrain supplémentaires. La qualité des comptes rendus a également progressé, car les transcriptions sont plus fidèles que les notes prises à la main en réunion.

## Mise en pratique — Comparer deux outils IA pour une tâche de votre travail
1. Choisissez une tâche administrative récurrente dans votre travail (exemple : rédiger un résumé de réunion, traduire un court formulaire, transcrire des notes vocales). Notez-la en une phrase sur votre téléphone.
2. Testez cette tâche avec deux outils différents disponibles gratuitement sur mobile (exemples : Claude et ChatGPT, ou Google Translate et DeepL). Pour chaque outil, notez en quelques mots : le coût (gratuit ou payant), la langue qu'il supporte le mieux, et si vous seriez à l'aise d'y entrer des données de bénéficiaires (confidentialité).
3. Choisissez l'outil qui correspond le mieux à vos trois critères et justifiez votre choix en deux phrases. Partagez cette justification avec un collègue ou notez-la dans un mémo pour votre équipe.
A observer : Vous remarquerez que deux outils peuvent réaliser la même tâche avec des résultats très différents selon la langue ou la sensibilité des données. Il n'existe pas d'outil universel parfait : le bon outil est celui qui correspond à votre contexte spécifique.

## Glossaire
- Assistant conversationnel : Programme IA capable de comprendre vos questions en langage naturel et d'y répondre par écrit, comme un collègue disponible à toute heure. Exemples : ChatGPT, Claude, Gemini.
- Transcription : Conversion automatique d'un enregistrement audio ou vidéo en texte écrit. Utile pour retranscrire des réunions, des entretiens ou des messages vocaux sans les saisir manuellement.
- NotebookLM : Outil d'analyse de documents de Google qui permet de charger des fichiers (PDF, textes) et de poser des questions dessus, comme si un assistant avait lu le document à votre place.
- Outil no-code : Outil numérique utilisable sans écrire de code informatique. Accessible via une interface visuelle simple, il permet à des non-développeurs de créer des automatisations ou des workflows.
- Freemium : Modèle économique proposant une version gratuite de base et une version payante avec plus de fonctionnalités. Permet de démarrer sans budget et d'évoluer selon les besoins.
- API : Interface de programmation permettant à deux logiciels de communiquer entre eux. Par exemple, une ONG peut connecter son système de gestion de données à un outil IA via une API pour automatiser des tâches sans intervention manuelle.
```

### Prompt EN

```text
Create a 5 minute explainer video from the source document.
Audience: anyone curious about AI — employees, students, freelancers, field workers, volunteers — with no technical background, anywhere in the world. The source leans on African and humanitarian examples: keep one or two as concrete illustrations, but open up to other settings (business, public sector, school, small organisation) and other regions. Never present this course as being only for Africa or only for the humanitarian sector.
Goal: choose and combine the AI tools that fit your need and your budget.
Cover in this order: 1) the main tool families: conversational assistants, transcription and translation, image generation, document analysis; 2) four selection criteria: cost, offline use, privacy, supported languages; 3) combine tools into a simple flow: record, transcribe, summarise, translate, archive; 4) start for free and improve through short, regular practice.
Be honest about this: there is no perfect universal tool: the right tool is the one that fits your context.
End with: pick one tool to try this week on a real task.
Clear, warm tone, short sentences. Explain every technical term the first time it appears. Do not invent any figure, date or source that is not in the source document.
```

### Source EN (to load in the notebook)

```markdown
# Your AI Toolkit — Choosing and Combining the Right Tools

## Objective
By the end of this lesson, you will be able to compare several AI tools based on your concrete needs, budget, and field constraints. You will know how to select a tool suited to your working language, connectivity level, and data sensitivity. You will also be able to combine several tools into a simple workflow to save time on administrative tasks. Finally, you will be ready to start for free and progress at your own pace.

## Overview of Available AI Tools
Think of a carpenter's toolbox: there is the hammer, the saw, the tape measure. Each tool has its precise function. AI tools work the same way — there are several categories, and each addresses a different need.

Conversational assistants (such as ChatGPT, Claude or Gemini) answer your questions, draft texts, summarise documents and help you prepare meetings. Transcription and translation tools (such as Whisper or DeepL) convert speech to text or translate your reports from French to Hausa or English. This is especially useful during community meetings in rural areas, where exchanges often happen in local languages.

Image-generation tools (such as DALL·E or Canva AI) create visuals for your awareness materials or community health posters. Document analysis tools, such as Google's NotebookLM, let you ask questions directly about an 80-page report, as if you were talking to a colleague who had read it on your behalf. For a UNDP team in Niger processing dozens of field reports each month, this represents a considerable time saving.

## Criteria for Choosing the Right Tool
Selecting an AI tool without clear criteria is like going to market without a shopping list: you risk coming back with unnecessary items or overspending. Four essential criteria should guide your choice.

First criterion: cost. Most tools offer a free (freemium) version with limited features and a paid version. For many local organisations and NGOs in sub-Saharan Africa, the free version is enough to get started. Second criterion: offline capability. In rural areas of the Sahel where 3G connectivity is intermittent, a tool that requires a permanent connection can become unusable. Some tools allow partial use without internet.

Third criterion: privacy. If your data concerns vulnerable beneficiaries — refugees, patients, survivors of violence — you must check where that data is stored and who has access to it. Never enter personally identifiable information into a general-purpose tool without checking its privacy policy. Fourth criterion: supported languages. A tool that excels in English may perform poorly in Hausa or Bambara. Always test the tool in the language of your actual work before adopting it.

## Combining Tools in a Workflow
A single AI tool can help you. Several tools well combined can transform the way you work. Think of a craft production chain: each artisan handles one step, and together they produce a result that none could have achieved alone.

Here is a concrete workflow example for a field team: Step 1 — record your community meeting on your phone. Step 2 — use a transcription tool (such as Whisper) to convert the audio to text. Step 3 — paste that text into a conversational assistant (Claude or ChatGPT) to extract a structured summary and action points. Step 4 — translate that summary into French or English for your report using DeepL or Google Translate. Step 5 — upload the report to NotebookLM to archive it and allow your team to retrieve and query it later.

This workflow, which would have taken a full day to complete manually, can be done in one to two hours. Humanitarian teams in the Sahel have reported similar time savings on their monitoring reports. The key is to define your workflow in advance and test each step before using it with sensitive data.

## Starting for Free and Building Skills
Learning to use AI tools is like learning to grow a new crop: at first you fumble, make a few mistakes, then find your rhythm. The good news is that most learning resources are free and accessible from a smartphone.

To get started without a budget, you can use the free versions of ChatGPT, Claude, Gemini or Perplexity for your daily questions. OpenAI's Whisper is available online for free for transcription. Google's NotebookLM is free for document analysis. DeepL offers quality translation with a reasonable monthly limit in its free version. Platforms such as YouTube, Coursera (with free audit) or WhatsApp learning communities allow you to progress at your own pace, even with limited connectivity.

Regular practice is more effective than rare long sessions. Spend ten to fifteen minutes a day testing a tool on a real task from your work — drafting an email, summarising a report, preparing an agenda. Within a month, you will have genuine practical mastery. Community health workers in Niger began by transcribing their visit notes via WhatsApp Business before moving on to more complete tools. Every small step counts.

## Real case — The SantéSahel NGO field team builds its free AI toolkit
Challenge : The coordination team of SantéSahel, based in Tahoua, Niger, produces around twenty field visit reports, community meeting minutes and form translations every month. Three coordinators were spending an average of twelve hours each per week on these administrative tasks, at the expense of beneficiary follow-up.
Solution : The team implemented a four-step workflow using entirely free tools: (1) audio recording of meetings on Android phones, (2) transcription with Whisper via a free web interface, (3) summarisation and extraction of action points with Claude (free version), (4) French-to-Hausa translation with Google Translate for forms intended for local health workers. NotebookLM was added to archive and quickly retrieve past reports.
Impact : Within six weeks, time spent on administrative tasks was reduced by approximately 40%, representing an estimated saving of five hours per week per coordinator. Monthly reports are now produced two days earlier, freeing time for additional field visits. The quality of meeting minutes also improved, as transcriptions are more accurate than handwritten notes taken during meetings.

## Practice — Compare Two AI Tools for a Task in Your Work
1. Choose a recurring administrative task in your work (example: writing a meeting summary, translating a short form, transcribing voice notes). Write it down in one sentence on your phone.
2. Test this task with two different tools available for free on mobile (examples: Claude and ChatGPT, or Google Translate and DeepL). For each tool, note in a few words: the cost (free or paid), the language it supports best, and whether you would be comfortable entering beneficiary data into it (privacy).
3. Choose the tool that best matches your three criteria and justify your choice in two sentences. Share this justification with a colleague or note it in a memo for your team.
What to notice : You will notice that two tools can perform the same task with very different results depending on the language or data sensitivity. There is no perfect universal tool: the right tool is the one that fits your specific context.

## Glossary
- Conversational assistant : An AI programme capable of understanding your questions in natural language and responding in writing, like a colleague available at any hour. Examples: ChatGPT, Claude, Gemini.
- Transcription : Automatic conversion of an audio or video recording into written text. Useful for capturing meetings, interviews or voice messages without typing them manually.
- NotebookLM : Google's document analysis tool that lets you upload files (PDFs, texts) and ask questions about them, as if an assistant had read the document on your behalf.
- No-code tool : A digital tool usable without writing computer code. Accessible via a simple visual interface, it allows non-developers to create automations or workflows.
- Freemium : A business model offering a free basic version and a paid version with more features. Allows you to start without a budget and scale up according to your needs.
- API : Application Programming Interface: a bridge that lets two pieces of software communicate. For example, an NGO can connect its data management system to an AI tool via an API to automate tasks without manual intervention.
```


---

# Lecon 8 — Évaluation finale — validez vos acquis et obtenez votre certificat

**Duree cible** : 5 a 6 minutes · **Fichier** : `src/data/lessons/ia-c8-evaluation.ts`

### Prompt FR

```text
Cree une video explicative de 5 a 6 minutes a partir du document source.
Public : toute personne curieuse de l'IA — salarie, etudiant, independant, agent de terrain, benevole — sans aucun prerequis technique, partout dans le monde. La source contient surtout des exemples africains et humanitaires : garde-en un ou deux comme illustrations concretes, mais ouvre a d'autres contextes (entreprise, administration, ecole, petite structure) et a d'autres regions. Ne presente jamais ce cours comme reserve a l'Afrique ni au secteur humanitaire.
Objectif : recapituler le module avant l'evaluation finale et donner envie de passer a la pratique.
Couvre dans l'ordre : 1) l'essentiel de l'IA : definition, apprentissage automatique, IA generative et leurs limites ; 2) modeles de langage et consignes claires : le role, le contexte, la tache, le format ; 3) deployer et automatiser : choisir un cas d'usage, garder un humain dans la boucle ; 4) responsabilite et choix des outils : biais, protection des donnees, criteres de selection.
Sois honnete sur ce point : le certificat valide des acquis, il ne remplace pas la pratique reguliere.
Termine par : expliquer que l'evaluation finale valide les acquis et debloque le certificat numerique verifiable, puis encourager a choisir une seule chose a mettre en pratique ce mois-ci.
Ton clair et chaleureux, vouvoiement, phrases courtes. Explique chaque terme technique la premiere fois. N'invente aucun chiffre, aucune date et aucune source qui ne figure pas dans le document source.
```

### Source FR (a charger dans le notebook)

```markdown
# Évaluation finale — validez vos acquis et obtenez votre certificat

## Objectif
À l'issue de cette leçon, vous serez capable de mobiliser l'ensemble des connaissances acquises dans les leçons 1 à 7 pour répondre à des situations concrètes du secteur humanitaire et du développement. Vous démontrerez votre compréhension de l'intelligence artificielle, des grands modèles de langage, des cas d'usage pratiques et des enjeux éthiques. Cette évaluation valide votre maîtrise du module complet et débloque votre certificat numérique vérifiable Karatou Academy.

## L'essentiel de l'IA — définition, machine learning et IA générative
L'intelligence artificielle, c'est la capacité d'une machine à réaliser des tâches qui nécessitent normalement l'intelligence humaine : reconnaître une image, comprendre un texte, prendre une décision. Ce n'est pas de la magie ; c'est de la statistique et des données. Pensez à un agent de santé communautaire qui apprend à identifier les signes de malnutrition en examinant des centaines de cas : la machine fait exactement cela, mais avec des millions d'exemples.

Le machine learning (apprentissage automatique) est le moteur principal de l'IA moderne. Au lieu de programmer des règles à la main, on fournit des exemples au système — comme des données de récolte de manioc sur dix saisons — et il apprend tout seul à repérer des tendances. Plus les données sont représentatives de vos réalités locales, meilleur est le résultat.

L'IA générative va plus loin : elle ne se contente pas de classer ou prédire, elle crée — du texte, des images, du code. Les outils comme les LLM (grands modèles de langage) appartiennent à cette catégorie. Ils sont utiles pour rédiger des rapports, traduire vers le haoussa ou le français, ou résumer des procès-verbaux de réunion de terrain. Mais ils ont des limites : ils peuvent se tromper avec confiance, et leurs données d'entraînement s'arrêtent à une date précise.

## LLM et prompts — tirer le meilleur des modèles de langage
Un LLM, c'est comme un assistant très cultivé qui a lu une bibliothèque entière mais qui n'a jamais mis les pieds sur le terrain. Il connaît beaucoup de choses de façon générale, mais il ne connaît pas votre village, votre budget ni vos bénéficiaires. C'est à vous de lui donner ce contexte.

Un bon prompt, c'est une instruction claire, contextualisée et précise. Comparez : « Écris un rapport » versus « Tu es un chargé de suivi-évaluation dans une ONG au Niger. Rédige un résumé d'une page du rapport de terrain du mois de mars, destiné à un bailleur de fonds institutionnel, en insistant sur les indicateurs de nutrition infantile. » Le second prompt produit un résultat dix fois plus utile. Donnez le rôle, le contexte, le format attendu et les contraintes.

Les limites des LLM sont réelles : hallucinations (inventions présentées comme des faits), biais liés aux données d'entraînement souvent occidentales, impossibilité d'accéder à des données récentes ou confidentielles sans outils spécifiques. La règle d'or : vérifiez toujours les informations critiques auprès de sources officielles avant de les utiliser dans un document officiel ou une décision qui affecte des bénéficiaires.

## Déployer et automatiser — cas d'usage, priorisation et human-in-the-loop
Identifier le bon cas d'usage, c'est la moitié du travail. La méthode consiste à choisir des tâches répétitives, chronophages, à faible risque pour commencer — comme la saisie de données de distribution de vivres, la traduction de formulaires, ou la génération de modèles de comptes rendus. On priorise avec une grille simple : impact potentiel versus faisabilité et risque. Ce n'est pas l'outil le plus sophistiqué qui gagne, c'est celui qui convient à votre contexte, y compris en zone de faible connectivité.

L'automatisation ne signifie pas « sans humain ». Le principe du human-in-the-loop (humain dans la boucle) est fondamental : un outil IA peut préparer un premier jet, classer des données ou envoyer une alerte, mais une personne qualifiée doit valider avant toute action importante. C'est comme un transfert Orange Money : le système traite la transaction, mais vous vérifiez le montant et le destinataire avant de confirmer.

Dans les contextes humanitaires, les décisions qui affectent des bénéficiaires — attribution d'aide, signalement de protection, orientation médicale — ne doivent jamais être entièrement déléguées à une machine. L'IA peut aider à traiter l'information plus vite ; le jugement éthique reste humain.

## Responsabilité et choix d'outils — biais, données et éthique en pratique
Les biais dans l'IA ne sont pas une anomalie technique abstraite : ce sont les inégalités du monde réel encodées dans les données. Un modèle entraîné sur des données de santé essentiellement urbaines et occidentales donnera de moins bons résultats pour une communauté rurale du Sahel. Identifier ces biais est une responsabilité professionnelle, pas optionnelle.

La protection des données des bénéficiaires est non négociable. Avant d'utiliser un outil IA avec des données personnelles — noms, statuts de vulnérabilité, localisations — posez ces trois questions : Où sont stockées ces données ? Qui y a accès ? Sont-elles conformes aux réglementations locales et aux principes humanitaires ? Ne collez jamais de données sensibles dans un outil grand public non sécurisé, de la même façon que vous ne laisseriez pas un dossier médical sur une table de marché.

Choisir un outil IA, c'est aussi choisir un fournisseur. Évaluez : la politique de confidentialité, la disponibilité hors ligne, le coût réel (y compris en données mobiles), le support dans vos langues de travail, et la capacité à fonctionner sur les appareils disponibles dans votre organisation. Un outil parfait sur papier mais inutilisable en zone rurale sans WiFi n'est pas le bon outil. Privilégiez toujours l'outil adapté à votre contexte réel.

## Cas concret — Cas transversal — La coordination régionale de l'ONG SahelAid déploie l'IA de bout en bout
Le probleme : SahelAid coordonne la réponse nutritionnelle dans trois régions du Niger avec 45 agents de terrain. Chaque semaine, les agents remplissent des fiches papier de 120 enfants chacun. La saisie, la traduction (haoussa → français) et la rédaction du rapport hebdomadaire pour le bailleur prennent 14 heures de travail cumulées au coordinateur. Les erreurs de saisie représentent environ 12 % des données. Le coordinateur se demande comment l'IA peut l'aider sans mettre en danger les données des bénéficiaires.
La solution : L'équipe suit une démarche en quatre étapes. Étape 1 — Choix du cas d'usage : ils priorisent la transcription et la traduction automatique des fiches, tâche répétitive et à faible risque immédiat. Étape 2 — Prompt structuré : le coordinateur rédige un prompt précis — « Tu es un assistant de suivi nutritionnel. Traduis cette fiche de terrain du haoussa vers le français, préserve tous les chiffres, signale toute donnée manquante ou incohérente par [?]. » Étape 3 — Automatisation avec human-in-the-loop : un outil de traitement de formulaires génère le brouillon ; le coordinateur valide chaque fiche avant intégration dans la base de données. Les données ne quittent jamais le serveur local sécurisé de l'ONG. Étape 4 — Choix d'outil responsable : l'outil retenu fonctionne hors ligne, est hébergé localement, et son fournisseur a signé un accord de traitement de données conforme aux normes CICR.
L'impact : Après huit semaines de déploiement : le temps de traitement hebdomadaire est passé de 14 heures à 4 heures, soit une réduction de 71 %. Le taux d'erreur de saisie est tombé à moins de 3 %. Le coordinateur consacre désormais 10 heures supplémentaires par semaine à l'analyse et à la décision. Aucune donnée bénéficiaire n'a quitté le périmètre sécurisé. Le rapport bailleur est produit le mardi au lieu du vendredi, accélérant les décisions d'approvisionnement.

## Mise en pratique — Mon plan personnel d'adoption de l'IA — 30 jours pour commencer
1. Identifiez dans votre travail quotidien UNE tâche répétitive et chronophage (rédaction, traduction, résumé, saisie de données) qui serait un bon premier cas d'usage pour l'IA. Notez pourquoi vous l'avez choisie et quel gain de temps vous espérez.
2. Choisissez UN outil IA adapté à votre contexte (fonctionnel hors ligne si nécessaire, compatible avec vos appareils, respectueux de la confidentialité des données) et formulez UN prompt structuré que vous utiliserez pour ce cas d'usage. Testez-le et notez ce qui fonctionne bien et ce qui nécessite un ajustement.
3. Définissez UNE règle éthique concrète pour votre usage (ex. : « Je ne saisis jamais de données nominatives bénéficiaires dans cet outil ») et UN indicateur de succès mesurable à 30 jours (ex. : « Le rapport hebdomadaire est produit en moins de 2 heures »). Partagez ce plan avec un collègue pour un regard extérieur.
A observer : Un plan d'adoption réaliste vaut mieux qu'un projet ambitieux jamais mis en œuvre. Commencez petit, mesurez, ajustez. La confiance dans l'IA se construit par l'expérience directe, pas par la théorie. Notez vos observations dans un carnet — elles seront précieuses pour former vos collègues à leur tour.

## Glossaire
- Intelligence artificielle (IA) : Ensemble de techniques permettant à une machine d'accomplir des tâches qui nécessitent normalement l'intelligence humaine, comme reconnaître des images, comprendre du texte ou prendre des décisions, à partir de données et d'algorithmes.
- Machine learning (apprentissage automatique) : Branche de l'IA où le système apprend à partir d'exemples et de données, sans être explicitement programmé pour chaque règle. Plus les données sont représentatives, plus le modèle est précis.
- IA générative : Catégorie d'IA capable de créer de nouveaux contenus — textes, images, code — à partir d'une instruction. Les outils de rédaction automatique et de traduction appartiennent à cette catégorie.
- LLM (Grand modèle de langage) : Modèle d'IA générative entraîné sur de très grandes quantités de texte pour comprendre et produire du langage naturel. Il peut rédiger, résumer, traduire, mais peut aussi halluciner — inventer des informations incorrectes avec confiance.
- Prompt : Instruction ou consigne donnée à un outil d'IA pour obtenir un résultat précis. Un bon prompt précise le rôle, le contexte, le format attendu et les contraintes. La qualité du prompt détermine largement la qualité de la réponse.
- Human-in-the-loop (Humain dans la boucle) : Principe selon lequel un humain qualifié supervise, valide ou corrige les décisions ou productions de l'IA avant qu'elles ne soient appliquées, en particulier sur des décisions à fort enjeu.
- Biais algorithmique : Erreur systématique dans les résultats d'un modèle IA due à des données d'entraînement non représentatives ou à des choix de conception inéquitables. Ces biais peuvent reproduire ou amplifier des inégalités existantes, par exemple entre zones urbaines et rurales.
```

### Prompt EN

```text
Create a 5 to 6 minute explainer video from the source document.
Audience: anyone curious about AI — employees, students, freelancers, field workers, volunteers — with no technical background, anywhere in the world. The source leans on African and humanitarian examples: keep one or two as concrete illustrations, but open up to other settings (business, public sector, school, small organisation) and other regions. Never present this course as being only for Africa or only for the humanitarian sector.
Goal: recap the module before the final assessment and make the viewer want to practise.
Cover in this order: 1) AI essentials: definition, machine learning, generative AI and their limits; 2) language models and clear instructions: role, context, task, format; 3) deploying and automating: choosing a use case, keeping a human in the loop; 4) responsibility and tool choice: bias, data protection, selection criteria.
Be honest about this: the certificate validates knowledge, it does not replace regular practice.
End with: explain that the final assessment validates the learning and unlocks the verifiable digital certificate, then encourage picking one single thing to practise this month.
Clear, warm tone, short sentences. Explain every technical term the first time it appears. Do not invent any figure, date or source that is not in the source document.
```

### Source EN (to load in the notebook)

```markdown
# Final Assessment — Validate Your Learning and Earn Your Certificate

## Objective
By the end of this lesson, you will be able to draw on all the knowledge acquired in lessons 1 through 7 to respond to concrete situations in the humanitarian and development sector. You will demonstrate your understanding of artificial intelligence, large language models, practical use cases, and ethical issues. This assessment validates your mastery of the complete module and unlocks your verifiable digital certificate from Karatou Academy.

## AI Essentials — Definition, Machine Learning, and Generative AI
Artificial intelligence is a machine's ability to perform tasks that normally require human intelligence: recognizing an image, understanding text, making a decision. It is not magic; it is statistics and data. Think of a community health worker who learns to identify signs of malnutrition by examining hundreds of cases: the machine does exactly that, but with millions of examples.

Machine learning is the main engine of modern AI. Instead of manually programming rules, you feed the system examples — such as cassava harvest data over ten seasons — and it learns on its own to spot patterns. The more representative the data is of your local realities, the better the result.

Generative AI goes further: it does not just classify or predict, it creates — text, images, code. Tools such as LLMs (large language models) belong to this category. They are useful for drafting reports, translating into Hausa or French, or summarizing field meeting minutes. But they have limits: they can be wrong with confidence, and their training data stops at a specific date.

## LLMs and Prompts — Getting the Most from Language Models
An LLM is like a very well-read assistant who has read an entire library but has never been in the field. It knows a great deal in general, but it does not know your village, your budget, or your beneficiaries. It is up to you to provide that context.

A good prompt is a clear, contextualized, and precise instruction. Compare: 'Write a report' versus 'You are a monitoring and evaluation officer at an NGO in Niger. Write a one-page summary of the March field report, aimed at an institutional donor, emphasizing child nutrition indicators.' The second prompt produces a result ten times more useful. Give the role, the context, the expected format, and the constraints.

The limits of LLMs are real: hallucinations (fabrications presented as facts), biases linked to predominantly Western training data, inability to access recent or confidential data without specific tools. The golden rule: always verify critical information against official sources before using it in an official document or a decision that affects beneficiaries.

## Deploying and Automating — Use Cases, Prioritization, and Human-in-the-Loop
Identifying the right use case is half the work. The approach is to start with repetitive, time-consuming, low-risk tasks — such as entering food distribution data, translating forms, or generating report templates. Prioritization uses a simple grid: potential impact versus feasibility and risk. The most sophisticated tool does not win; the one that fits your context does, including in low-connectivity areas.

Automation does not mean 'without humans.' The human-in-the-loop principle is fundamental: an AI tool can prepare a first draft, classify data, or send an alert, but a qualified person must validate before any important action. It is like an Orange Money transfer: the system processes the transaction, but you check the amount and the recipient before confirming.

In humanitarian contexts, decisions affecting beneficiaries — aid allocation, protection referrals, medical triage — must never be entirely delegated to a machine. AI can help process information faster; ethical judgment remains human.

## Responsibility and Tool Selection — Bias, Data, and Ethics in Practice
Bias in AI is not an abstract technical anomaly: it is the real-world inequalities encoded in data. A model trained on predominantly urban and Western health data will perform worse for a rural Sahel community. Identifying these biases is a professional responsibility, not optional.

Protecting beneficiary data is non-negotiable. Before using an AI tool with personal data — names, vulnerability statuses, locations — ask these three questions: Where is this data stored? Who has access to it? Does it comply with local regulations and humanitarian principles? Never paste sensitive data into an unsecured public tool, just as you would not leave a medical file on a market table.

Choosing an AI tool also means choosing a provider. Evaluate: the privacy policy, offline availability, real cost (including mobile data usage), support in your working languages, and the ability to run on devices available in your organization. A tool that is perfect on paper but unusable in a rural area without WiFi is not the right tool. Always prioritize the tool that fits your actual context.

## Real case — Transversal Case Study — The NGO SahelAid's Regional Coordination Deploys AI End-to-End
Challenge : SahelAid coordinates the nutrition response across three regions of Niger with 45 field agents. Each week, agents fill out paper forms for 120 children each. Data entry, translation (Hausa to French), and drafting the weekly donor report take a cumulative 14 hours of the coordinator's time. Data entry errors account for approximately 12% of the data. The coordinator wonders how AI can help without putting beneficiary data at risk.
Solution : The team follows a four-step approach. Step 1 — Use case selection: they prioritize automatic transcription and translation of forms, a repetitive task with low immediate risk. Step 2 — Structured prompt: the coordinator drafts a precise prompt — 'You are a nutrition monitoring assistant. Translate this field form from Hausa to French, preserve all figures, flag any missing or inconsistent data with [?].' Step 3 — Automation with human-in-the-loop: a form processing tool generates a draft; the coordinator validates each form before it is integrated into the database. Data never leaves the NGO's secure local server. Step 4 — Responsible tool selection: the chosen tool works offline, is locally hosted, and its provider has signed a data processing agreement compliant with ICRC standards.
Impact : After eight weeks of deployment: weekly processing time dropped from 14 hours to 4 hours — a 71% reduction. The data entry error rate fell to under 3%. The coordinator now dedicates 10 additional hours per week to analysis and decision-making. No beneficiary data left the secure perimeter. The donor report is produced on Tuesday instead of Friday, accelerating procurement decisions.

## Practice — My Personal AI Adoption Plan — 30 Days to Get Started
1. Identify ONE repetitive and time-consuming task in your daily work (drafting, translating, summarizing, data entry) that would be a good first AI use case. Write down why you chose it and what time savings you expect.
2. Choose ONE AI tool suited to your context (functional offline if needed, compatible with your devices, respectful of data confidentiality) and draft ONE structured prompt you will use for this use case. Test it and note what works well and what needs adjustment.
3. Define ONE concrete ethical rule for your usage (e.g., 'I never enter beneficiary names into this tool') and ONE measurable success indicator at 30 days (e.g., 'The weekly report is produced in under 2 hours'). Share this plan with a colleague for an outside perspective.
What to notice : A realistic adoption plan is worth more than an ambitious project that never gets implemented. Start small, measure, adjust. Confidence in AI is built through direct experience, not theory. Keep notes in a journal — they will be valuable when training your colleagues in turn.

## Glossary
- Artificial Intelligence (AI) : A set of techniques that enable a machine to perform tasks normally requiring human intelligence — such as recognizing images, understanding text, or making decisions — using data and algorithms.
- Machine Learning : A branch of AI in which the system learns from examples and data without being explicitly programmed for each rule. The more representative the data, the more accurate the model.
- Generative AI : A category of AI capable of creating new content — texts, images, code — from an instruction. Automatic writing and translation tools belong to this category.
- LLM (Large Language Model) : A generative AI model trained on very large amounts of text to understand and produce natural language. It can write, summarize, and translate, but can also hallucinate — inventing incorrect information with confidence.
- Prompt : An instruction or directive given to an AI tool to obtain a specific result. A good prompt specifies the role, context, expected format, and constraints. Prompt quality largely determines response quality.
- Human-in-the-loop : The principle by which a qualified human supervises, validates, or corrects AI decisions or outputs before they are applied, particularly on high-stakes decisions.
- Algorithmic Bias : A systematic error in an AI model's results caused by non-representative training data or inequitable design choices. These biases can reproduce or amplify existing inequalities, for example between urban and rural areas.
```


---

## Checklist de fin

- [ ] 8 videos FR generees, publiees en non repertorie, URL d'embed collee dans `video.fr`
- [ ] 8 videos EN generees, publiees, URL collee dans `video.en`
- [ ] `video.ha` : decision prise (vide, reprise de la video FR, ou sous-titres)
- [ ] Commentaire `/* TODO: URL NotebookLM/YouTube ... */` retire des lecons remplies
- [ ] Onglet Video verifie dans l'application pour chaque lecon
- [ ] `npm run typecheck && npm test && npm run build` verts avant commit
