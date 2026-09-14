# Videos NotebookLM — Module 1 « Intelligence Artificielle » (c1 → c8)

> **Fichier genere.** Il est produit par `node scripts/build-notebooklm-module-1.mjs` a partir du
> contenu reel des lecons. Ne le modifiez pas a la main : corrigez la lecon, puis relancez le script.
> Le script resout chaque lecon comme le lecteur : la base de donnees d'abord (texte publie depuis
> `/admin/lecons`), le registre du depot ensuite. Sans variables d'environnement Supabase, il ne voit
> que le registre et vous en avertit.

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
À la fin de cette leçon, vous saurez expliquer ce qu'est un grand modèle de langage (LLM) et comment il génère du texte par prédiction. Vous serez capable d'identifier ses forces et ses limites, notamment les hallucinations et la date de coupure. Vous saurez l'utiliser avec discernement dans votre travail, quel que soit votre pays ou votre secteur, en protégeant les données sensibles des personnes que vous servez : bénéficiaires, clients, patients, élèves ou usagers.

## Qu'est-ce qu'un LLM ? Ni encyclopédie, ni oracle
ChatGPT, Claude, Gemini — ces outils font partie de la famille des Grands Modèles de Langage, ou LLM (Large Language Models). Un LLM est un programme informatique entraîné sur des milliards de pages de texte : articles de presse, livres, forums, sites web, documentation technique, rapports d'organisations. Grâce à cet entraînement massif, il a appris des régularités dans le langage — un peu comme un enfant qui apprend à parler en écoutant des milliers de conversations.

Mais attention : un LLM ne « sait » rien au sens humain du mot. Il ne consulte pas une base de données encyclopédique pour vous répondre. Il prédit le mot le plus probable à chaque étape, comme si vous demandiez à quelqu'un de compléter une phrase commencée. Imaginez un conteur très éloquent — un griot au Sahel, un ancien du village, un guide de musée — qui a mémorisé des milliers d'histoires : il peut en raconter de nouvelles de façon convaincante, mais il peut aussi mélanger des détails ou en inventer.

Concrètement, quand vous demandez à un LLM de rédiger un texte — un rapport sur la nutrition au Sahel, une note de service, un plan de cours, une réponse à un client —, il ne consulte aucune base de données officielle. Il génère du texte qui ressemble à ce que ce type de document devrait contenir, selon les textes sur lesquels il a été entraîné. C'est puissant — et c'est aussi la source de ses limites.

## Comment il « lit » votre message — tokens et fenêtre de contexte
Avant de vous répondre, le LLM découpe votre message en petits morceaux appelés tokens. Un token correspond environ à un mot court, ou à une partie de mot long. Par exemple, « manioc » sera découpé en deux tokens, et « bonjour » en un seul. Ce découpage est invisible pour vous, mais il est fondamental pour la machine.

Le LLM ne peut traiter qu'un certain nombre de tokens à la fois : c'est ce qu'on appelle la fenêtre de contexte. Pensez-y comme à la mémoire de travail d'un collègue : si vous lui donnez un document de 200 pages à lire en même temps qu'une conversation, il va commencer à oublier les premières pages pendant qu'il lit les dernières. De la même façon, si votre échange avec le LLM devient très long, il peut « oublier » ce que vous lui avez dit au début.

Dans la pratique, cela vaut pour toute personne qui travaille sur un téléphone ou avec une connexion limitée — agent de terrain, commerçante, étudiant, agent d'accueil : gardez vos messages concis et structurés. Si vous posez une question complexe — l'organisation d'une distribution alimentaire dans un village du Niger, la refonte d'un processus de facturation, la préparation d'un cours —, donnez le contexte essentiel dans la même requête plutôt que de le faire en dix messages séparés. Le LLM sera plus précis et vous gagnerez de la bande passante.

## Forces et limites — fluidité oui, mais vérification toujours
Les LLMs ont des forces réelles : ils rédigent rapidement, reformulent dans plusieurs langues, résument de longs documents, et s'adaptent à des styles variés. Pour une coordinatrice d'ONG à Niamey qui doit rédiger un rapport bailleur en anglais alors que sa langue de travail est le français — comme pour une comptable à Manille ou un enseignant à Lima qui doivent produire un document dans une langue qui n'est pas la leur —, c'est un gain de temps considérable : plusieurs heures économisées sur un seul document, comme le montre l'exemple de cette leçon.

Mais les LLMs ont aussi des limites sérieuses. La première est l'hallucination : le modèle peut générer des informations fausses avec une apparente confiance. Il peut citer un article scientifique qui n'existe pas, ou donner un chiffre — nombre de bénéficiaires, part de marché, effectif d'une classe — qui ne correspond à aucune réalité. Confiance ne signifie pas exactitude — c'est la règle d'or à retenir. La deuxième limite est la date de coupure (knowledge cutoff) : le modèle ne connaît pas les événements survenus après sa dernière mise à jour. Si une épidémie, une réforme réglementaire ou un changement de tarif est survenu récemment dans votre pays, le LLM pourrait vous donner des informations obsolètes.

Il existe aussi des biais : les LLMs ont été entraînés principalement sur des textes en anglais, produits majoritairement par des auteurs du Nord global. Leurs réponses sur les réalités peu documentées en ligne — les tontines d'Afrique de l'Ouest, les tandas mexicaines, les pratiques agricoles locales, les langues comme le haoussa, le bambara, le quechua ou le tagalog — peuvent être moins précises, incomplètes, voire stéréotypées. Cela ne les rend pas inutiles, mais cela impose une vigilance supplémentaire.

## Bien utiliser un LLM — vérifier les faits et protéger les données
Pour tirer le meilleur d'un LLM dans votre travail, trois principes sont essentiels. Premier principe : vérifiez systématiquement les faits. Comme vous le feriez avec un brouillon rédigé par un stagiaire motivé mais peu expérimenté, relisez chaque affirmation importante. Si le LLM cite un taux de malnutrition, un montant, une date ou un nombre de personnes concernées, croisez l'information avec une source officielle : institut national de statistique, ministère compétent, OMS, Banque mondiale, OCHA.

Deuxième principe : ne saisissez jamais de données personnelles identifiables sur les personnes dont vous avez la charge — bénéficiaires, clients, patients, élèves, usagers. Les noms, adresses, états de santé, situations familiales ou dossiers individuels ne doivent pas être copiés dans un LLM public. La plupart de ces outils stockent vos conversations pour améliorer leurs modèles. Si vous travaillez avec des données sensibles — un agent de terrain qui gère des distributions, un secrétariat médical, un enseignant, un service des ressources humaines —, utilisez des données anonymisées ou des cas fictifs représentatifs.

Troisième principe : soyez prudent avec les langues peu représentées en ligne. Si vous essayez de générer un message en haoussa, en mooré, en quechua ou en créole pour vous adresser à une communauté, à une clientèle ou à des familles d'élèves, le résultat peut paraître correct sans l'être vraiment. Le LLM a été beaucoup moins entraîné sur ces langues que sur le français ou l'anglais. Faites toujours valider le contenu par un locuteur natif avant diffusion. De la même façon qu'on ne distribue pas un médicament sans notice vérifiée, on ne diffuse pas un message à un public sans validation locale.

## Cas concret — L'ONG SahelAid et le rapport bailleur : entre gain de temps et vigilance
Le probleme : L'équipe de coordination de SahelAid (ONG basée à Agadez) doit soumettre un rapport trimestriel à son bailleur européen dans 48 heures. La coordinatrice doit rédiger 15 pages en anglais, croisant des données de terrain en français et en haoussa. Elle n'a jamais utilisé de LLM auparavant et craint de manquer de temps.
La solution : Elle utilise Claude pour structurer et rédiger une première version en anglais à partir de ses notes de terrain en français. Elle fournit au LLM uniquement des données agrégées et anonymisées (pas de noms de bénéficiaires). Elle demande ensuite au LLM de reformuler les sections techniques dans un registre adapté aux bailleurs institutionnels. En parallèle, elle demande à son collègue haoussa-phone de vérifier les termes culturels traduits.
L'impact : Le rapport est produit en 6 heures au lieu de 18 heures habituellement — un gain de 12 heures de travail. Lors de la relecture humaine, l'équipe identifie un chiffre de couverture vaccinale halluciné (87 % au lieu de 62 % selon les données terrain). La correction est faite avant soumission. Suite à cet épisode, SahelAid adopte une procédure systématique : tout chiffre généré par IA est surligné en jaune et vérifié par une deuxième personne avant validation du rapport. La même procédure fonctionnerait dans une entreprise, une administration ou une école.

## Mise en pratique — Repérer une hallucination en situation réelle
1. Ouvrez un assistant IA (Claude, ChatGPT ou autre) sur votre téléphone et posez-lui une question factuelle précise sur votre métier, votre secteur ou votre pays — par exemple : « Quel est le taux de couverture en eau potable au Niger ? », « Quel est le salaire moyen dans mon secteur ? » ou « Combien d'élèves compte l'enseignement secondaire dans mon pays ? »
2. Notez la réponse donnée par l'IA, en particulier les chiffres, les sources citées et les dates mentionnées. Observez si le modèle exprime une incertitude ou s'il répond avec une confiance totale.
3. Vérifiez au moins un fait clé de la réponse en consultant une source fiable accessible sur mobile : le site de votre institut national de statistique, le portail d'un ministère, les données de l'OMS ou de la Banque mondiale, ou le site OCHA (reliefweb.int). Notez si l'information est confirmée, approximative ou incorrecte, et réfléchissez à ce que cela implique pour votre usage professionnel.
A observer : Dans la plupart des cas, vous constaterez que le LLM donne une réponse fluide et confiante — même si un ou plusieurs éléments sont inexacts ou légèrement dépassés. Cette expérience illustre la règle fondamentale : la fluidité du langage ne garantit pas la fiabilité de l'information. Adoptez dès maintenant le réflexe de la double vérification pour tout chiffre ou fait utilisé dans un document professionnel.

## Glossaire
- LLM (Grand Modèle de Langage) : Programme d'intelligence artificielle entraîné sur d'immenses quantités de texte pour générer du langage humain. ChatGPT, Claude et Gemini sont des exemples de LLMs.
- Token : La plus petite unité de texte traitée par un LLM, correspondant environ à un mot court ou une partie de mot. Le LLM prédit les tokens les uns après les autres pour construire sa réponse.
- Hallucination : Phénomène où un LLM génère une information fausse ou inventée avec un ton assuré, sans avertissement. Par exemple, citer un rapport qui n'existe pas ou donner un chiffre erroné.
- Fenêtre de contexte : Limite de la mémoire de travail d'un LLM : la quantité maximale de texte qu'il peut prendre en compte dans un échange. Au-delà, il peut « oublier » les informations anciennes de la conversation.
- Date de coupure (Knowledge Cutoff) : Date après laquelle le LLM n'a plus reçu de nouvelles données d'entraînement. Les événements survenus après cette date lui sont inconnus, ce qui peut rendre ses réponses obsolètes.
- Fine-tuning : Technique consistant à entraîner un LLM général sur un ensemble de données spécialisées (par exemple, des textes médicaux, des documents juridiques ou des rapports de terrain) pour l'adapter à un domaine précis et améliorer sa précision dans ce contexte.
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
By the end of this lesson, you will be able to explain what a large language model (LLM) is and how it generates text through prediction. You will be able to identify its strengths and limitations, including hallucinations and the knowledge cutoff. You will know how to use it wisely in your own work, whatever your country or sector, while protecting the sensitive data of the people you serve: beneficiaries, clients, patients, students or service users.

## What is an LLM? Neither an encyclopedia nor an oracle
ChatGPT, Claude, Gemini — these tools belong to the family of Large Language Models, or LLMs. An LLM is a computer program trained on billions of pages of text: news articles, books, forums, websites, technical documentation, organizational reports. Through this massive training, it has learned patterns in language — much like a child who learns to speak by listening to thousands of conversations.

But be careful: an LLM does not "know" anything in the human sense. It does not consult an encyclopedic database to answer you. It predicts the most likely word at each step, as if you asked someone to complete a sentence you had started. Imagine a very eloquent storyteller — a griot in the Sahel, a village elder, a museum guide — who has memorized thousands of stories: he can tell new ones convincingly, but he may also mix up details or invent some.

In practice, when you ask an LLM to write a text — a report on nutrition in the Sahel, an internal memo, a lesson plan, a reply to a customer — it does not consult any official database. It generates text that looks like what that kind of document should contain, based on the texts it was trained on. This is powerful — and it is also the source of its limitations.

## How it "reads" your message — tokens and context window
Before responding to you, the LLM splits your message into small pieces called tokens. One token corresponds roughly to a short word, or to part of a longer word. For example, "cassava" might be split into two tokens, while "hello" is just one. This splitting is invisible to you, but it is fundamental for the machine.

The LLM can only process a certain number of tokens at a time: this is called the context window. Think of it as a colleague's working memory: if you give them a 200-page document to read while also holding a conversation, they will start forgetting the first pages while reading the last ones. In the same way, if your exchange with the LLM becomes very long, it may "forget" what you told it at the beginning.

In practice, this matters for anyone working on a phone or with limited connectivity — a field agent, a shopkeeper, a student, a front-desk officer: keep your messages concise and structured. If you are asking a complex question — organizing a food distribution in a village in Niger, redesigning an invoicing process, preparing a course — provide the essential context in the same request rather than spreading it across ten separate messages. The LLM will be more accurate and you will save bandwidth.

## Strengths and limitations — fluency yes, but always verify
LLMs have real strengths: they write quickly, rephrase in multiple languages, summarize long documents, and adapt to various styles. For an NGO coordinator in Niamey who must write a donor report in English when her working language is French — just as for an accountant in Manila or a teacher in Lima who must produce a document in a language that is not their own — this represents a significant time saving: several hours saved on a single document, as the example in this lesson shows.

But LLMs also have serious limitations. The first is hallucination: the model can generate false information with apparent confidence. It may cite a scientific article that does not exist, or give a figure — a number of beneficiaries, a market share, a class size — that corresponds to no reality. Confidence does not mean accuracy — that is the golden rule to remember. The second limitation is the knowledge cutoff: the model does not know about events that occurred after its last update. If an epidemic, a regulatory reform or a price change happened recently in your country, the LLM might give you outdated information.

There are also biases: LLMs were trained primarily on English-language texts, produced mainly by authors from the Global North. Their responses about realities that are poorly documented online — West African tontines, Mexican tandas, local agricultural practices, languages such as Hausa, Bambara, Quechua or Tagalog — may be less accurate, incomplete, or even stereotyped. This does not make them useless, but it requires extra vigilance.

## Using an LLM well — verifying facts and protecting data
To get the best from an LLM in your work, three principles are essential. First principle: systematically verify facts. Just as you would with a draft written by a motivated but inexperienced intern, re-read each important claim. If the LLM cites a malnutrition rate, an amount, a date or a number of people concerned, cross-check the information against an official source: your national statistics institute, the relevant ministry, WHO, the World Bank, OCHA.

Second principle: never enter personally identifiable data about the people in your care — beneficiaries, clients, patients, students, service users. Names, addresses, health statuses, family situations or individual case files must not be copied into a public LLM. Most of these tools store your conversations to improve their models. If you work with sensitive data — a field agent managing distributions, a medical secretary, a teacher, a human resources department — use anonymized data or representative fictional cases.

Third principle: be cautious with languages that are poorly represented online. If you try to generate a message in Hausa, Mooré, Quechua or a Creole language to address a community, a customer base or the families of your students, the result may appear correct without actually being so. The LLM has been trained far less on these languages than on French or English. Always have the content validated by a native speaker before distribution. Just as you would not distribute a medication without a verified label, do not broadcast a message to an audience without local validation.

## Real case — SahelAid NGO and the donor report: between time savings and vigilance
Challenge : The coordination team at SahelAid (an NGO based in Agadez) must submit a quarterly report to their European donor within 48 hours. The coordinator must write 15 pages in English, combining field data in French and Hausa. She has never used an LLM before and fears she will not have enough time.
Solution : She uses Claude to structure and draft a first version in English from her French-language field notes. She provides the LLM only with aggregated, anonymized data (no beneficiary names). She then asks the LLM to rephrase technical sections in a register appropriate for institutional donors. In parallel, she asks her Hausa-speaking colleague to verify the translated cultural terms.
Impact : The report is produced in 6 hours instead of the usual 18 hours — a saving of 12 working hours. During human review, the team identifies a hallucinated vaccination coverage figure (87% instead of the actual 62% from field data). The correction is made before submission. Following this episode, SahelAid adopts a systematic procedure: every AI-generated figure is highlighted in yellow and verified by a second person before the report is approved. The same procedure would work just as well in a company, a public administration or a school.

## Practice — Spotting a hallucination in a real situation
1. Open an AI assistant (Claude, ChatGPT, or another) on your phone and ask it a specific factual question about your job, your sector or your country — for example: "What is the safe drinking water coverage rate in Niger?", "What is the average salary in my sector?" or "How many students are enrolled in secondary education in my country?"
2. Note the answer given by the AI, paying particular attention to the figures, cited sources, and dates mentioned. Observe whether the model expresses any uncertainty or responds with complete confidence.
3. Verify at least one key fact from the response by consulting a reliable source accessible on mobile: your national statistics institute, a ministry portal, WHO or World Bank data, or the OCHA website (reliefweb.int). Note whether the information is confirmed, approximate, or incorrect, and reflect on what this means for your professional use.
What to notice : In most cases, you will find that the LLM gives a fluent and confident answer — even if one or more elements are inaccurate or slightly outdated. This exercise illustrates the fundamental rule: fluency of language does not guarantee reliability of information. Adopt the habit of double-checking any figure or fact used in a professional document from this point forward.

## Glossary
- LLM (Large Language Model) : An artificial intelligence program trained on vast amounts of text to generate human language. ChatGPT, Claude, and Gemini are examples of LLMs.
- Token : The smallest unit of text processed by an LLM, roughly equivalent to a short word or part of a word. The LLM predicts tokens one after another to build its response.
- Hallucination : A phenomenon where an LLM generates false or invented information with an assured tone and no warning — for example, citing a report that does not exist or giving an incorrect figure.
- Context Window : The working memory limit of an LLM: the maximum amount of text it can take into account in an exchange. Beyond this limit, it may "forget" earlier information in the conversation.
- Knowledge Cutoff : The date after which the LLM received no new training data. Events that occurred after this date are unknown to it, which may make its responses outdated.
- Fine-tuning : A technique of training a general LLM on a specialized dataset (for example, medical texts, legal documents or field reports) to adapt it to a specific domain and improve its accuracy in that context.
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
À la fin de cette leçon, vous saurez rédiger des consignes (prompts) structurées et efficaces pour obtenir des résultats fiables, professionnels et directement utilisables. Vous maîtriserez les quatre composantes clés d'un bon prompt : le rôle, le contexte, la tâche et le format. Vous serez capable d'améliorer vos prompts par itération et de les adapter aux situations concrètes de votre métier, que vous soyez salarié, étudiant, indépendant, agent d'une administration ou bénévole.

## Anatomie d'un bon prompt : Rôle, Contexte, Tâche, Format
Imaginez que vous accueillez un nouvel assistant dans votre équipe. Si vous lui dites simplement « fais un rapport », il ne sait pas quoi mettre dedans. Mais si vous précisez « tu es assistant pédagogique dans un collège, voici les résultats des évaluations de la semaine, rédige un bilan de deux paragraphes pour la réunion des professeurs », il peut travailler efficacement. C'est exactement le principe du prompt structuré.

Un bon prompt repose sur quatre piliers : le Rôle (comment doit se comporter l'IA ?), le Contexte (quelle est la situation ?), la Tâche (qu'attendez-vous précisément ?), et le Format (quelle forme doit avoir la réponse ?). Voyons la différence en pratique :
— Prompt vague : « Écris un e-mail à un client. »
— Prompt structuré : « Tu es gérante d'un atelier de menuiserie. Un client nous a commandé douze chaises et demande où en est la fabrication : huit sont terminées, les quatre dernières partiront la semaine prochaine. Rédige un e-mail de suivi de 150 mots maximum, ton courtois et professionnel, avec une phrase d'excuse pour le retard et une proposition de date de livraison. »

Le second prompt prend 30 secondes de plus à rédiger, mais il vous économise plusieurs allers-retours et produit un résultat quasi prêt à envoyer.

## Techniques qui marchent : exemples, étape par étape, contraintes de format
La première technique puissante s'appelle le few-shot : vous donnez un ou deux exemples du résultat que vous attendez. C'est comme montrer à un nouveau collègue un formulaire déjà rempli avant de lui en confier dix. Par exemple : « Voici un résumé que j'aime : [exemple]. Maintenant résume ce compte rendu de réunion dans le même style. » L'IA comprend immédiatement votre tonalité, votre niveau de détail, votre langue de travail.

La deuxième technique : demandez à l'IA de raisonner étape par étape (« think step by step »). Pour des tâches complexes comme vérifier le budget d'un projet, comparer deux devis de fournisseurs ou décomposer l'énoncé d'un exercice, cela réduit les erreurs. C'est comparable à relire à voix haute les chiffres d'un paiement avant de valider l'envoi.

La troisième technique : contraindre le format de sortie. Un agent d'une administration municipale qui prépare une note pour le conseil gagnera à préciser « réponds sous forme de tableau à 3 colonnes », « rédige une liste à puces de 5 points maximum », ou « structure ta réponse avec les titres : Constat, Recommandation, Prochaine étape ». Quand le format est fixé à l'avance, la réponse est directement utilisable dans votre rapport ou votre présentation, sans reformatage.

## Itérer et corriger : un prompt se travaille en 2–3 allers-retours
Personne ne règle un appareil neuf du premier coup : on essaie, on observe, on ajuste. Avec l'IA, c'est pareil. Le premier prompt est rarement parfait, et c'est normal. L'objectif est d'arriver à un bon résultat en deux ou trois échanges, pas en un seul.

Comment reformuler efficacement ? Soyez précis sur ce qui ne va pas. Ne dites pas « c'est nul ». Dites : « La réponse est trop longue. Raccourcis à 100 mots. » Ou : « Le ton est trop formel pour une réunion de parents d'élèves. Utilise un langage plus simple. » Ou encore : « Tu n'as pas repris le chiffre de fréquentation que je t'ai donné plus haut. Intègre-le dans le deuxième paragraphe. »

Gardez une trace de vos meilleurs prompts dans un carnet (numérique ou papier). Une équipe de terrain d'une organisation humanitaire, un service municipal ou une petite entreprise de services se constituent ainsi des bibliothèques de prompts réutilisables pour les rapports hebdomadaires, les réponses aux clients ou les comptes rendus de réunion. Un bon prompt est un outil de travail, au même titre qu'un modèle de document.

## Prompts pour le travail réel : synthèse, traduction, e-mail professionnel, compte rendu
Quatre cas d'usage couvrent l'essentiel du travail documentaire, quel que soit votre métier. Le premier : la note de synthèse. Collez un long document (article de recherche, rapport annuel, dossier de projet) et demandez : « En tant qu'étudiant en master, résume cet article en 5 points clés pour mon groupe de travail. Format : liste numérotée. Langue : français. »

Le deuxième cas : la traduction et l'adaptation d'une langue vers une autre, y compris vers une langue locale peu représentée en ligne. « Traduis ce message d'information sur les horaires du service, du français vers la langue parlée par les habitants du quartier, en gardant un niveau de langage accessible. » L'IA n'est pas également performante dans toutes les langues : elle produit une première version, qu'un locuteur natif doit relire avant diffusion, ce qui reste beaucoup plus rapide que de partir de zéro.

Le troisième cas : l'e-mail professionnel. Donnez les faits, les montants, les résultats et le destinataire — client, partenaire, direction, financeur — puis demandez un e-mail formel de compte rendu. Le quatrième cas : le compte rendu de réunion. Collez vos notes brutes ou dictez-les vocalement (via une application de transcription), puis demandez : « Structure ces notes en : Participants, Points discutés, Décisions prises, Actions à suivre avec responsables et échéances. » Le résultat est prêt à partager avec vos collègues, votre direction ou vos partenaires.

## Cas concret — Du prompt vague au prompt structuré : le compte rendu client d'une petite entreprise
Le probleme : Lucía dirige une petite entreprise de transport et de livraison à Medellín, en Colombie. Chaque mois, elle doit envoyer un compte rendu d'activité à son principal client. Elle demande à un outil IA : « Écris un compte rendu pour mon client. » Elle obtient un texte générique de deux pages, sans aucune donnée réelle, qu'elle doit entièrement réécrire. Elle passe 90 minutes sur ce document.
La solution : Elle reformule avec la structure Rôle/Contexte/Tâche/Format : « Tu es gérante d'une petite entreprise de transport et de livraison. Le client est un distributeur de fournitures de bureau. Période couverte : le mois écoulé. Données à intégrer : 140 livraisons réalisées, 3 livraisons en retard de plus de 24 heures, toutes dues à des routes coupées par les pluies. Rédige un compte rendu mensuel structuré avec les sections suivantes : Contexte, Activité du mois, Incidents et causes, Recommandations. Maximum 400 mots. Ton professionnel, langue espagnole. »
L'impact : Le nouveau résultat est utilisable directement après une relecture de 10 minutes. Le temps total de travail passe de 90 minutes à environ 25 minutes, soit un gain de temps d'environ 70 %. Le client juge le document plus clair que les précédents et le valide sans demander de correction majeure.

## Mise en pratique — Exercice : rédigez et améliorez votre premier prompt structuré
1. Choisissez une tâche réelle de votre quotidien (rédiger un e-mail, résumer un document, traduire un message, préparer un cours). Sur votre téléphone ou votre ordinateur, rédigez un prompt complet en quatre parties : commencez par « Tu es [votre rôle] », ajoutez le contexte (lieu, activité, données clés), décrivez la tâche précisément, puis précisez le format souhaité (nombre de mots, langue, structure). Soumettez ce prompt à un outil IA (ChatGPT, Claude, Gemini).
2. Lisez attentivement le résultat obtenu. Identifiez un point précis qui n'est pas satisfaisant : le ton, la longueur, un élément manquant, la structure. Reformulez uniquement cette partie et soumettez une deuxième version du prompt. Comparez les deux réponses côte à côte.
3. Copiez votre prompt final (la version améliorée) dans un document ou une note sur votre téléphone, avec un titre court qui décrit son usage (exemple : « Prompt compte rendu mensuel client »). Vous commencez ainsi votre bibliothèque personnelle de prompts réutilisables.
A observer : Vous constaterez que la deuxième version du prompt produit une réponse nettement plus proche de vos attentes, souvent sans nécessiter de troisième reformulation. L'effort de rédiger un prompt précis se rentabilise dès le premier usage : moins de corrections, moins de frustration, un résultat professionnel plus rapide.

## Glossaire
- Prompt : La consigne ou instruction que vous donnez à un outil d'IA pour obtenir un résultat. Un prompt bien rédigé est précis, structuré et contextuel. Exemple : « En tant que responsable d'une boutique, rédige un résumé de 150 mots de ce rapport en français. »
- Contexte : Les informations de situation que vous fournissez à l'IA pour qu'elle comprenne l'environnement de la tâche : votre organisation ou votre activité, le projet concerné, le public visé (clients, élèves, usagers, collègues), les données disponibles. Sans contexte, l'IA produit des réponses génériques.
- Few-shot (exemples) : Technique consistant à inclure un ou plusieurs exemples du résultat attendu directement dans votre prompt. Cela permet à l'IA d'imiter le ton, le style et la structure que vous souhaitez, comme montrer un modèle rempli à un nouveau collègue.
- Rôle / System prompt : La persona ou fonction que vous assignez à l'IA au début de votre prompt (ex : « Tu es un traducteur spécialisé dans les documents administratifs »). Définir un rôle cadre le comportement de l'IA et améliore la pertinence de ses réponses.
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
By the end of this lesson, you will know how to write structured, effective prompts to get reliable, professional, and directly usable results. You will master the four key components of a good prompt: role, context, task, and format. You will be able to improve your prompts through iteration and adapt them to the real situations of your own work, whether you are an employee, a student, self-employed, a public administration officer, or a volunteer.

## Anatomy of a Good Prompt: Role, Context, Task, Format
Imagine you are welcoming a new assistant onto your team. If you simply say "write a report," they don't know what to include. But if you specify "you are a teaching assistant in a secondary school, here are this week's assessment results, write a two-paragraph summary for the staff meeting," they can work effectively. This is exactly the principle behind a structured prompt.

A good prompt rests on four pillars: the Role (how should the AI behave?), the Context (what is the situation?), the Task (what exactly do you expect?), and the Format (what form should the answer take?). Let's see the difference in practice:
— Vague prompt: "Write an email to a customer."
— Structured prompt: "You are the manager of a furniture workshop. A customer ordered twelve chairs and is asking how the work is going: eight are finished, the last four will ship next week. Write a follow-up email of no more than 150 words, courteous and professional in tone, with a sentence apologizing for the delay and a proposed delivery date."

The second prompt takes 30 extra seconds to write, but it saves you several back-and-forth exchanges and produces a result that is nearly ready to send.

## Techniques That Work: Examples, Step by Step, Format Constraints
The first powerful technique is called few-shot: you provide one or two examples of the result you expect. It is like showing a new colleague a completed form before handing them ten to fill in. For example: "Here is a summary I like: [example]. Now summarize this meeting report in the same style." The AI immediately understands your tone, your level of detail, and your working language.

The second technique: ask the AI to reason step by step ("think step by step"). For complex tasks such as checking a project budget, comparing two supplier quotes, or breaking down an exam question, this reduces errors. It is comparable to reading the figures of a payment aloud before confirming it.

The third technique: constrain the output format. An officer in a municipal administration preparing a note for the council will gain from specifying "respond in a 3-column table," "write a bullet list of no more than 5 points," or "structure your response with the following headings: Finding, Recommendation, Next Step." When the format is fixed in advance, the response is directly usable in your report or presentation, without any reformatting.

## Iterate and Improve: A Prompt Takes 2–3 Rounds of Refinement
Nobody sets up a new device perfectly on the first try: you try, you observe, you adjust. With AI, it is the same. The first prompt is rarely perfect, and that is completely normal. The goal is to reach a good result in two or three exchanges, not in one.

How do you reformulate effectively? Be specific about what is wrong. Do not say "this is bad." Say: "The response is too long. Shorten it to 100 words." Or: "The tone is too formal for a parents' meeting. Use simpler language." Or: "You did not use the attendance figure I gave you above. Include it in the second paragraph."

Keep a record of your best prompts in a notebook (digital or paper). A humanitarian field team, a municipal department, or a small service business all build libraries of reusable prompts for weekly reports, customer replies, or meeting minutes. A good prompt is a work tool, just like a document template.

## Prompts for Real Work: Summaries, Translations, Professional Emails, Meeting Notes
Four use cases cover most of the documentary work you do, whatever your job. The first: the briefing note. Paste a long document (a research article, an annual report, a project file) and ask: "As a master's student, summarize this article in 5 key points for my study group. Format: numbered list. Language: English."

The second case: translating and adapting from one language into another, including into a local language that is poorly represented online. "Translate this information message about opening hours from English into the language spoken by the residents of this neighbourhood, keeping the wording accessible." AI does not perform equally well in every language: it produces a first version that a native speaker must review before it is shared, which is still far faster than starting from scratch.

The third case: the professional email. Provide the facts, the amounts, the results, and the recipient — customer, partner, management, funder — then ask for a formal report email. The fourth case: the meeting summary. Paste your raw notes or dictate them verbally (via a transcription app), then ask: "Structure these notes into: Participants, Points Discussed, Decisions Made, Follow-up Actions with responsible persons and deadlines." The result is ready to share with your colleagues, your management, or your partners.

## Real case — From a Vague Prompt to a Structured Prompt: A Small Company's Client Report
Challenge : Lucía runs a small transport and delivery company in Medellín, Colombia. Every month she has to send an activity report to her main client. She asks an AI tool: "Write a report for my client." She gets a generic two-page text with no real data, which she has to rewrite entirely. She spends 90 minutes on this document.
Solution : She reformulates using the Role/Context/Task/Format structure: "You are the manager of a small transport and delivery company. The client is an office supplies distributor. Period covered: the past month. Data to include: 140 deliveries completed, 3 deliveries delayed by more than 24 hours, all caused by roads cut off by the rains. Write a structured monthly report with the following sections: Background, Activity for the Month, Incidents and Causes, Recommendations. Maximum 400 words. Professional tone, Spanish language."
Impact : The new result is directly usable after a 10-minute review. Total working time drops from 90 minutes to approximately 25 minutes — a time saving of about 70%. The client finds the document clearer than the previous ones and approves it without requesting major corrections.

## Practice — Exercise: Write and Improve Your First Structured Prompt
1. Choose a real task from your everyday work (writing an email, summarizing a document, translating a message, preparing a class). On your phone or computer, write a complete prompt in four parts: start with "You are [your role]," add the context (location, activity, key data), describe the task precisely, then specify the desired format (word count, language, structure). Submit this prompt to an AI tool (ChatGPT, Claude, Gemini).
2. Read the result carefully. Identify one specific point that is not satisfactory: the tone, the length, a missing element, the structure. Reformulate only that part and submit a second version of the prompt. Compare both responses side by side.
3. Copy your final prompt (the improved version) into a document or note on your phone, with a short title describing its use (example: "Monthly client report prompt"). You are now starting your personal library of reusable prompts.
What to notice : You will notice that the second version of the prompt produces a response much closer to your expectations, often without needing a third reformulation. The effort of writing a precise prompt pays off from the very first use: fewer corrections, less frustration, and a professional result delivered faster.

## Glossary
- Prompt : The instruction or command you give an AI tool to get a result. A well-written prompt is precise, structured, and contextual. Example: "As a shop manager, write a 150-word summary of this report in English."
- Context : The situational information you provide to the AI so it understands the environment of the task: your organization or your business, the project involved, the target audience (customers, pupils, service users, colleagues), the available data. Without context, AI produces generic responses.
- Few-shot (examples) : A technique that involves including one or more examples of the expected result directly in your prompt. This allows the AI to mirror the tone, style, and structure you want — like showing a completed sample form to a new colleague.
- Role / System prompt : The persona or function you assign to the AI at the start of your prompt (e.g., "You are a translator specialized in administrative documents"). Defining a role frames the AI's behavior and improves the relevance of its responses.
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
À la fin de cette leçon, vous serez capable d'identifier les activités où l'IA peut apporter une réelle valeur, dans l'organisation qui est la vôtre : entreprise, administration, école, hôpital, coopérative, association, ONG ou activité indépendante. Vous saurez évaluer la faisabilité de chaque opportunité en tenant compte des données disponibles, des contraintes concrètes de votre environnement de travail et du niveau de risque. Vous pourrez prioriser un premier cas d'usage pilote et préparer votre équipe à l'adopter progressivement.

## Cartographier les cas d'usage : où l'IA fait vraiment la différence
Avant d'adopter un outil d'IA, la première question n'est pas « quelle technologie choisir ? » mais « où avons-nous des problèmes que l'IA peut résoudre ? ». Le mot organisation désigne ici tout endroit où l'on travaille ensemble : une entreprise, une administration, une école, un hôpital, une coopérative, une association, une ONG, une équipe de bénévoles, ou même un cabinet d'une seule personne. Pensez à votre journée de travail : quelles tâches répétitives vous prennent beaucoup de temps ? Quels rapports reviennent chaque mois avec les mêmes tableaux à remplir ? Quelles informations cherchez-vous en fouillant des dizaines de fichiers ?

L'IA crée de la valeur de trois façons principales. Elle fait gagner du temps sur des tâches répétitives : traduire un formulaire du français vers le haoussa, résumer un long compte rendu de réunion, préparer un devis à partir d'un modèle. Elle améliore la qualité : repérer des erreurs dans une liste de clients, d'élèves ou de bénéficiaires avant un envoi important. Elle élargit l'accès : un agent de santé communautaire consulte des conseils en langue locale sans connexion permanente, un artisan rédige une offre dans une langue qu'il maîtrise mal, un étudiant révise avec un tuteur disponible à toute heure.

Imaginez un magasinier qui trie chaque matin des centaines de fiches papier pour retrouver les stocks disponibles. Un simple système de recherche automatisée lui ferait gagner deux heures par jour. Le même raisonnement vaut pour une secrétaire de mairie, un comptable de petite entreprise ou un enseignant qui prépare ses cours. C'est exactement cela : l'IA comme assistant intelligent, pas comme remplacement du travail humain. Commencez par lister cinq tâches qui vous épuisent. Ce sont vos premiers candidats.

## Prioriser : choisir le bon cas d'usage avant de se lancer
Toutes les idées ne se valent pas. Une matrice simple vous aide à choisir : placez chaque idée sur deux axes — la valeur qu'elle apporte (gain de temps, qualité, portée) et l'effort qu'elle demande (données disponibles, coût, compétences nécessaires). Les meilleurs candidats pilotes sont ceux à haute valeur et faible effort.

La disponibilité des données est cruciale. Si vous souhaitez automatiser le tri d'une liste — clients, élèves, adhérents ou bénéficiaires — l'avez-vous déjà sous forme numérique ? Est-elle cohérente et complète ? Une ONG au Sahel qui voulait utiliser l'IA pour analyser des données de nutrition a découvert que 40 % de ses données étaient saisies différemment selon le collecteur. Il a fallu d'abord nettoyer les données avant toute automatisation. Le même piège attend la boutique dont l'historique des ventes vit dans des carnets papier, ou l'école dont les notes sont dispersées dans dix classeurs.

Le niveau de risque compte aussi. Utiliser l'IA pour rédiger un premier brouillon de rapport interne est peu risqué : un humain relit et corrige. La laisser décider seule qui reçoit une aide alimentaire, qui obtient un crédit ou qui est recruté est très risqué : une erreur peut priver quelqu'un d'un droit. Gardez toujours un humain responsable pour les décisions qui touchent directement des personnes. C'est comme le contrôle qualité dans une coopérative de cacao, de café ou de riz : on vérifie avant d'expédier.

## Contraintes concrètes : tenir compte de la réalité de votre terrain
Un outil d'IA qui fonctionne parfaitement au siège, à Dakar, Abidjan, Lima ou Manille, peut être inutilisable dans un bureau de district sans électricité stable, dans un atelier où six personnes partagent un seul ordinateur, ou dans une école où le réseau ne passe que près de la fenêtre. Avant de choisir une solution, posez-vous trois questions pratiques : la connexion internet est-elle fiable ? L'outil fonctionne-t-il hors ligne ou sur une connexion lente ? Les personnes qui l'utiliseront ont-elles un ordinateur, un smartphone récent, ou seulement un téléphone basique partagé ?

La langue est une contrainte majeure souvent sous-estimée. La plupart des outils d'IA performent bien en français, en anglais ou en espagnol, beaucoup moins en haoussa, en bambara, en quechua ou en créole haïtien. Si vos collègues, vos clients ou vos bénéficiaires s'expriment d'abord dans une langue peu représentée, vérifiez que l'outil choisi la prend en charge ou prévoyez une étape de traduction et de relecture dans votre processus. Des projets d'IA pour la santé au Niger ont montré l'importance d'intégrer le haoussa dès la conception.

Le coût est souvent oublié dans les projets pilotes. Un abonnement peut sembler abordable vu de loin et représenter une part importante du budget d'une petite structure : une association de quartier, une clinique privée, une école communautaire, un atelier de couture. Explorez d'abord les versions gratuites, les tarifs réduits pour l'éducation ou les offres destinées aux associations et aux ONG. Enfin, évaluez honnêtement les compétences disponibles dans votre équipe : même le meilleur outil est inutile si personne ne sait l'utiliser et si aucune formation n'est prévue. Un téléphone avec Orange Money, M-Pesa, bKash ou Pix ne sert à rien si on ne sait pas s'en servir — l'IA, c'est pareil.

## Conduite du changement : faire adopter l'IA par votre équipe
Introduire un outil d'IA, c'est d'abord un défi humain, pas technologique. Les résistances sont normales et légitimes : peur de perdre son emploi, inquiétude face à quelque chose d'inconnu, méfiance envers un outil « qui se trompe parfois ». Votre rôle, que vous dirigiez un service, une classe, une boutique ou une équipe de terrain, est d'écouter ces craintes, de les prendre au sérieux et de montrer par l'exemple.

Commencez petit avec un pilote limité : une équipe, une tâche, un mois. Documentez les résultats honnêtement — ce qui a fonctionné et ce qui n'a pas fonctionné. Impliquez les utilisateurs finaux dès le début : ce sont eux qui connaissent le mieux les problèmes à résoudre. Une infirmière, un enseignant ou un chargé de clientèle qui utilise l'IA pour rédiger ses comptes rendus quotidiens sera le meilleur ambassadeur s'il a été associé au choix de l'outil.

La gouvernance légère est essentielle : définissez clairement qui a le droit d'utiliser l'outil, pour quelles tâches, avec quelles données, et qui vérifie les résultats. Ce n'est pas de la bureaucratie — c'est de la responsabilité. Pensez à une caisse d'épargne rotative bien organisée, tontine en Afrique de l'Ouest, tanda au Mexique ou chit fund en Inde : chacun connaît son rôle, les règles sont claires et la confiance se construit au fil des cycles. Le passage à l'échelle vient naturellement une fois que le pilote a prouvé sa valeur et que l'équipe est à l'aise.

## Cas concret — L'ONG SahelAction choisit son premier cas d'usage IA
Le probleme : SahelAction coordonne la distribution d'aide alimentaire dans trois régions du Niger. Chaque mois, l'équipe passe en moyenne 18 heures à trier manuellement des listes de bénéficiaires Excel pour éliminer les doublons, corriger les noms mal orthographiés et vérifier les critères d'éligibilité. Des erreurs passent parfois inaperçues, entraînant des doublons de distribution ou des exclusions injustes.
La solution : L'équipe cartographie ses tâches chronophages et identifie le tri des listes comme candidat prioritaire : haute valeur (gain de temps important, réduction des erreurs), faible effort (les données existent déjà sous format Excel, une seule personne doit apprendre l'outil). Elle choisit un outil d'IA de nettoyage de données disponible en version gratuite pour les ONG. Un pilote d'un mois est lancé sur une seule région avec deux agents formés en une demi-journée. Un responsable valide manuellement un échantillon de 10 % des résultats chaque semaine.
L'impact : Au bout du premier mois, le temps de traitement des listes passe de 18 heures à 4 heures, soit un gain de 14 heures par cycle. Le taux d'erreurs détectées augmente de 60 % par rapport au tri manuel. Fort de ces résultats, SahelAction étend le pilote aux deux autres régions le mois suivant. En six mois, l'organisation économise l'équivalent de plus de 200 heures de travail, qu'elle redirige vers des visites terrain.

## Mise en pratique — Construire votre mini-matrice valeur / effort
1. Sur votre téléphone, ouvrez une application de notes (Notes, Keep ou même un SMS à vous-même) et listez trois tâches répétitives de votre travail, de vos études ou de votre activité — par exemple : rédiger des comptes rendus, saisir des données, répondre aux mêmes questions de clients, traduire des documents, préparer un cours, chercher une information dans des fichiers.
2. Pour chacune des trois tâches, attribuez un score de 1 à 3 sur deux critères : Valeur (1 = peu utile, 3 = très utile si automatisée) et Effort (1 = facile à automatiser, 3 = très difficile). Notez ces scores à côté de chaque tâche dans votre application de notes.
3. Identifiez la tâche avec le score Valeur le plus élevé et le score Effort le plus bas — c'est votre meilleur candidat pilote. Notez en une phrase pourquoi vous la choisissez et quelle donnée vous auriez besoin de rassembler pour commencer.
A observer : En faisant cet exercice, vous remarquerez peut-être que les tâches les plus répétitives ne sont pas toujours les plus faciles à automatiser — et que certaines tâches apparemment simples cachent des contraintes de données ou de langue. Cette prise de conscience est déjà une étape clé dans l'adoption responsable de l'IA.

## Glossaire
- Cas d'usage : Une situation concrète dans laquelle un outil ou une technologie est utilisé pour résoudre un problème précis. Par exemple : « utiliser l'IA pour détecter les doublons dans une liste de clients ou de bénéficiaires » est un cas d'usage.
- ROI (Retour sur investissement) : Mesure du bénéfice obtenu par rapport aux ressources investies (temps, argent, formation). Un ROI positif signifie que le projet rapporte plus qu'il ne coûte. Dans une entreprise, une école ou une association, le ROI peut inclure des gains non financiers : du temps libéré, moins d'erreurs, un service rendu plus vite.
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
By the end of this lesson, you will be able to identify the activities where AI can bring real value in whichever organization is yours: a company, a public administration, a school, a hospital, a cooperative, an association, an NGO, or your own independent practice. You will know how to assess the feasibility of each opportunity, taking into account available data, the concrete constraints of your working environment, and the level of risk. You will be able to prioritize a first pilot use case and prepare your team to adopt it gradually.

## Mapping Use Cases: Where AI Truly Makes a Difference
Before adopting an AI tool, the first question is not "which technology should we choose?" but "where do we have problems that AI can solve?". The word organization here means any place where people work together: a company, a public administration, a school, a hospital, a cooperative, an association, an NGO, a team of volunteers, or even a one-person practice. Think about your working day: which repetitive tasks take up a lot of your time? Which reports come back every month with the same tables to fill in? Which information do you hunt for across dozens of files?

AI creates value in three main ways. It saves time on repetitive tasks: translating a form from French into Hausa, summarizing a long meeting report, drafting a quote from a template. It improves quality: spotting errors in a list of customers, students, or beneficiaries before an important mailing. It broadens access: a community health worker consults guidance in a local language without a permanent connection, a craftsperson writes an offer in a language they barely master, a student revises with a tutor available at any hour.

Imagine a storekeeper who spends every morning sorting hundreds of paper forms to find available stock. A simple automated search system would save them two hours a day. The same reasoning applies to a town hall secretary, an accountant in a small business, or a teacher preparing lessons. That is exactly it: AI as an intelligent assistant, not as a replacement for human work. Start by listing five tasks that drain your energy. Those are your first candidates.

## Prioritizing: Choosing the Right Use Case Before You Start
Not all ideas are equal. A simple matrix helps you choose: place each idea on two axes — the value it brings (time saved, quality, reach) and the effort it requires (available data, cost, skills needed). The best pilot candidates are those with high value and low effort.

Data availability is crucial. If you want to automate the sorting of a list — customers, students, members, or beneficiaries — do you already have it in digital form? Is it consistent and complete? An NGO in the Sahel that wanted to use AI to analyze nutrition data discovered that 40% of its data had been entered differently depending on the data collector. The data had to be cleaned before any automation could take place. The same trap awaits the shop whose sales history lives in paper notebooks, or the school whose grades are scattered across ten binders.

The level of risk also matters. Using AI to draft a first version of an internal report is low risk: a human reviews and corrects it. Letting it decide alone who receives food assistance, who gets a loan, or who is hired is very high risk: one error can deprive someone of a right. Always keep a human responsible for decisions that directly affect people. It is like quality control in a cocoa, coffee, or rice cooperative: you check before you ship.

## Practical Constraints: Accounting for Your Own Working Reality
An AI tool that works perfectly at headquarters, in Dakar, Abidjan, Lima, or Manila, may be unusable in a district office without reliable electricity, in a workshop where six people share a single computer, or in a school where the signal only reaches near the window. Before choosing a solution, ask yourself three practical questions: Is the internet connection reliable? Does the tool work offline or on a slow connection? Do the people who will use it have a computer, a recent smartphone, or only a shared basic phone?

Language is a major constraint that is often underestimated. Most AI tools perform well in French, English, or Spanish, but far less so in Hausa, Bambara, Quechua, or Haitian Creole. If your colleagues, your customers, or your beneficiaries mainly speak an under-represented language, verify that the chosen tool supports it, or plan a translation and review step in your process. AI projects for health in Niger have shown how important it is to integrate Hausa from the design stage onward.

Cost is often overlooked in pilot projects. A subscription may look affordable from a distance and still represent a significant share of a small organization's budget: a neighborhood association, a private clinic, a community school, a tailoring workshop. First explore free versions, reduced education pricing, or offers aimed at associations and NGOs. Finally, honestly assess the skills available in your team: even the best tool is useless if no one knows how to use it and no training is planned. A phone with Orange Money, M-Pesa, bKash, or Pix is useless if you do not know how to use it — AI is the same.

## Change Management: Getting Your Team to Adopt AI
Introducing an AI tool is first and foremost a human challenge, not a technological one. Resistance is normal and legitimate: fear of losing one's job, anxiety about something unknown, distrust of a tool that "sometimes makes mistakes". Your role — whether you lead a department, a class, a shop, or a field team — is to listen to these concerns, take them seriously, and lead by example.

Start small with a limited pilot: one team, one task, one month. Document results honestly — what worked and what did not. Involve end users from the start: they know the problems to be solved best. A nurse, a teacher, or a customer service officer who uses AI to write daily reports will be the best ambassador if they were involved in choosing the tool.

Light governance is essential: clearly define who is allowed to use the tool, for which tasks, with which data, and who checks the results. This is not bureaucracy — it is accountability. Think of a well-organized rotating savings group, a tontine in West Africa, a tanda in Mexico, or a chit fund in India: everyone knows their role, the rules are clear, and trust builds with each cycle. Scaling up comes naturally once the pilot has proven its value and the team is comfortable.

## Real case — The NGO SahelAction Chooses Its First AI Use Case
Challenge : SahelAction coordinates food aid distribution across three regions of Niger. Each month, the team spends an average of 18 hours manually sorting Excel beneficiary lists to remove duplicates, correct misspelled names, and verify eligibility criteria. Errors sometimes go unnoticed, leading to duplicate distributions or unjust exclusions.
Solution : The team maps its time-consuming tasks and identifies list sorting as the priority candidate: high value (significant time savings, error reduction), low effort (the data already exists in Excel format, only one person needs to learn the tool). They choose an AI data-cleaning tool available in a free version for NGOs. A one-month pilot is launched in a single region with two agents trained in half a day. A supervisor manually validates a 10% sample of results each week.
Impact : After the first month, list processing time drops from 18 hours to 4 hours — a saving of 14 hours per cycle. The error detection rate increases by 60% compared to manual sorting. Encouraged by these results, SahelAction extends the pilot to the two other regions the following month. Over six months, the organization saves the equivalent of more than 200 hours of work, which it redirects toward field visits.

## Practice — Building Your Mini Value / Effort Matrix
1. On your phone, open a notes application (Notes, Keep, or even a text message to yourself) and list three repetitive tasks from your work, your studies, or your own activity — for example: writing meeting minutes, entering data, answering the same customer questions, translating documents, preparing a lesson, searching for information across files.
2. For each of the three tasks, assign a score from 1 to 3 on two criteria: Value (1 = not very useful, 3 = very useful if automated) and Effort (1 = easy to automate, 3 = very difficult). Write these scores next to each task in your notes application.
3. Identify the task with the highest Value score and the lowest Effort score — this is your best pilot candidate. Write one sentence explaining why you chose it and what data you would need to gather to get started.
What to notice : As you do this exercise, you may notice that the most repetitive tasks are not always the easiest to automate — and that some apparently simple tasks hide data or language constraints. This awareness is already a key step in the responsible adoption of AI.

## Glossary
- Use Case : A concrete situation in which a tool or technology is used to solve a specific problem. For example: 'using AI to detect duplicates in a list of customers or beneficiaries' is a use case.
- ROI (Return on Investment) : A measure of the benefit obtained relative to resources invested (time, money, training). A positive ROI means the project returns more than it costs. In a company, a school, or an association, ROI can include non-financial gains: time freed up, fewer errors, a service delivered faster.
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
À l'issue de cette leçon, vous serez capable d'identifier les tâches répétitives de votre quotidien — au bureau, en classe, en boutique, dans un cabinet ou sur le terrain — qui se prêtent à l'automatisation. Vous saurez choisir des outils simples et accessibles pour mettre en place un premier workflow automatisé. Vous apprendrez à maintenir un contrôle humain sur les étapes sensibles et à mesurer honnêtement le temps gagné par rapport aux risques introduits.

## Quoi automatiser — et ce qu'il vaut mieux laisser à l'humain
Imaginez une personne qui remplit chaque matin le même tableau : des noms, des quantités, une date, un lieu. Ce peut être une assistante qui saisit des commandes, un enseignant qui reporte les présences, une comptable indépendante qui prépare ses factures ou un agent de terrain qui note une distribution. Copier-coller, reformater, envoyer par e-mail. C'est répétitif, c'est à règles claires — c'est exactement ce qu'une automatisation peut prendre en charge à votre place.

Une tâche est bonne candidate à l'automatisation si elle suit toujours les mêmes étapes, si les données d'entrée sont structurées (formulaire en ligne, tableur partagé, e-mail standardisé) et si une erreur n'a pas de conséquence grave et irréversible. Par exemple : trier les demandes reçues par messagerie selon leur type, relancer des factures impayées, confirmer des inscriptions à une session de formation, préparer un planning d'équipe à partir des disponibilités déclarées, ou générer un rapport hebdomadaire à partir d'un formulaire de collecte comme Google Forms ou KoboToolbox.

En revanche, certaines tâches ne doivent pas être automatisées sans surveillance étroite : les décisions qui touchent directement une personne (refuser une inscription, suspendre un compte client, orienter un patient), la validation de paiements importants vers des centaines de destinataires, ou toute situation où le contexte humain est décisif. Automatiser sans réfléchir, c'est comme confier le volant à quelqu'un qui ne connaît pas la route.

## Outils accessibles — combiner IA, no-code et tableur
Pas besoin d'être développeur pour automatiser. Un formulaire en ligne, un tableur partagé, une messagerie et un assistant IA couvrent déjà une grande partie des besoins. Des outils comme Google Sheets ou Excel avec des formules avancées, des plateformes no-code comme Zapier ou Make (anciennement Integromat), ou encore un assistant IA comme ChatGPT peuvent être combinés pour créer des flux de travail puissants, accessibles même depuis un téléphone avec une connexion modeste.

Concrètement : la personne qui gère les inscriptions d'un centre de formation peut configurer un déclencheur (trigger) dans son tableur — dès qu'une nouvelle ligne arrive depuis le formulaire d'inscription, un récapitulatif est généré par une formule ou une requête IA, puis envoyé par e-mail au responsable. Le même montage sert à un commerçant qui suit ses commandes, à un cabinet indépendant qui relance ses factures ou à un coordinateur qui compile les remontées de ses équipes. Tout cela sans écrire une seule ligne de code.

Pour les environnements à faible connectivité, il existe des solutions hors ligne : des macros de tableur qui s'exécutent localement, ou des formulaires ODK et KoboToolbox collectés en mode déconnecté puis synchronisés dès que le réseau revient. Un rappel peut aussi partir par SMS via un service opérateur comme Orange SMS API quand la messagerie internet n'est pas fiable. L'important est de choisir des outils adaptés à votre réalité, pas les plus sophistiqués du marché.

## Garder l'humain dans la boucle — validation, qualité, responsabilité
Automatiser ne signifie pas abandonner le volant. Pensez à un taxi-moto qui emprunte un itinéraire connu : il peut aller vite sur le tronçon qu'il connaît bien, mais il ralentit et regarde lui-même aux carrefours dangereux. C'est le principe du human-in-the-loop : la machine fait le travail prévisible, l'humain intervient aux points critiques.

Concrètement, identifiez dans votre workflow au moins un point de contrôle humain. Par exemple : l'automatisation trie les demandes reçues et pré-remplit un tableau de synthèse, mais c'est le responsable qui valide ce tableau avant qu'il parte à la direction, au client ou au bailleur. Pour les cas signalés comme « sensibles » (un usager en difficulté, un élève en décrochage, un dossier aux données incohérentes), le système doit alerter un humain plutôt que de traiter automatiquement.

La responsabilité ne se délègue pas à une machine. Si une erreur survient dans un processus automatisé — un rapport mal généré, une facture envoyée au mauvais client, une personne oubliée dans une liste — c'est toujours un être humain qui en répond. Cette conscience doit guider la conception de chaque automatisation, dans une entreprise comme dans une école, un cabinet ou une organisation de terrain.

## Mesurer gain et risques — temps gagné, erreurs possibles, dépendance
Avant de déployer une automatisation, posez-vous trois questions simples : combien de temps cette tâche prend-elle aujourd'hui ? Quelle est la probabilité qu'une erreur automatisée passe inaperçue ? Si l'outil tombe en panne, que se passe-t-il ? C'est comme évaluer si un lave-vaisselle vaut vraiment l'investissement pour un petit restaurant : il faut comparer le coût, la fiabilité et la dépendance au réparateur.

Des estimations raisonnables suggèrent qu'une automatisation bien conçue peut réduire de 40 à 70 % le temps consacré à des tâches de saisie ou de compilation répétitives. Mais ce gain doit être mis en regard du temps nécessaire pour configurer, tester et maintenir l'automatisation — souvent sous-estimé. Une règle pratique : si une tâche prend moins de 5 minutes par semaine, l'automatiser n'est probablement pas prioritaire.

Surveiller les risques de dépendance est essentiel. Si votre équipe dépend entièrement d'un outil gratuit dont les conditions changent du jour au lendemain, vous êtes vulnérable. Documentez toujours votre workflow, gardez une procédure manuelle de secours, et testez régulièrement que l'automatisation produit bien les résultats attendus. Une chaîne de paie automatisée qui s'arrête le jour du versement des salaires, c'est une catastrophe évitable.

## Cas concret — Consolidation hebdomadaire dans un réseau de boutiques en Asie du Sud-Est
Le probleme : Un réseau de quinze boutiques reçoit chaque semaine entre 80 et 120 fiches de remontée remplies par les équipes de vente : ventes marquantes, réclamations de clients, ruptures de stock. La consolidation manuelle prenait environ 6 heures par semaine à une assistante administrative : récupérer les fiches dans les e-mails, les coller dans un tableur, vérifier les doublons, préparer le tableau de synthèse du comité du lundi.
La solution : Le réseau remplace les envois par e-mail par un formulaire en ligne unique relié à un tableur partagé. Un scénario no-code (de type Zapier ou Make) complété par un petit script de tableur détecte les nouvelles lignes, calcule les totaux par boutique et par indicateur, puis envoie chaque lundi matin un tableau de synthèse pré-formaté au responsable des opérations. Les fiches marquées « cas sensible » (incident avec un client, problème de sécurité, rupture critique) déclenchent une alerte immédiate vers le responsable régional — sans attendre la synthèse hebdomadaire.
L'impact : Le temps de consolidation est passé d'environ 6 heures à moins d'1 heure par semaine (réduction d'environ 85 %), l'assistante consacrant ce temps libéré à l'analyse des tendances. Les alertes sur cas sensibles sont transmises en moins de 15 minutes au lieu de parfois 48 heures. Le responsable des opérations relit et valide le tableau avant son envoi à la direction — le point de contrôle humain est maintenu.

## Mise en pratique — Cartographier votre premier workflow automatisable
1. Ouvrez le bloc-notes ou une application de notes sur votre téléphone. Décrivez en 5 à 8 lignes une tâche répétitive que vous faites au moins une fois par semaine — au travail, dans vos études, dans votre activité indépendante ou dans un engagement bénévole : précisez les données d'entrée (d'où viennent-elles ?), les étapes que vous réalisez, et le résultat final produit.
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
By the end of this lesson, you will be able to identify the repetitive tasks in your daily life — in an office, a classroom, a shop, a practice, or out in the field — that are suitable for automation. You will know how to choose simple, accessible tools to set up your first automated workflow. You will learn to maintain human oversight at sensitive steps and to honestly measure the time saved against the risks introduced.

## What to Automate — and What Is Better Left to Humans
Imagine someone filling in the same table every morning: names, quantities, a date, a place. It could be an assistant entering orders, a teacher recording attendance, a freelance accountant preparing invoices, or a field agent logging a distribution. Copy-paste, reformat, send by email. It is repetitive, rule-based — exactly the kind of task an automation can handle on your behalf.

A task is a good candidate for automation if it always follows the same steps, if the input data is structured (an online form, a shared spreadsheet, a standardized email), and if an error would not have serious, irreversible consequences. Examples include: sorting incoming messages by request type, chasing unpaid invoices, confirming registrations for a training session, building a team schedule from declared availability, or generating a weekly report from a data-collection form such as Google Forms or KoboToolbox.

On the other hand, some tasks must not be automated without close oversight: decisions that directly affect a person (turning down an application, suspending a customer account, referring a patient), validating large payments to hundreds of recipients, or any situation where human context is decisive. Automating without thinking is like handing the wheel to someone who does not know the road.

## Accessible Tools — Combining AI, No-Code Platforms, and Spreadsheets
You do not need to be a developer to automate. An online form, a shared spreadsheet, a messaging app, and an AI assistant already cover a large share of everyday needs. Tools such as Google Sheets or Excel with advanced formulas, no-code platforms like Zapier or Make (formerly Integromat), or an AI assistant like ChatGPT can be combined to create powerful workflows, accessible even from a phone on a modest connection.

In practice: the person handling registrations at a training centre can configure a trigger in their spreadsheet — as soon as a new row arrives from the registration form, a summary is generated by a formula or an AI query, then emailed to the manager. The same setup serves a shopkeeper tracking orders, a freelance practice chasing invoices, or a coordinator compiling reports from field teams. All of this without writing a single line of code.

For low-connectivity environments, there are offline solutions: spreadsheet macros that run locally, or ODK and KoboToolbox forms collected in disconnected mode and synchronized as soon as the network returns. A reminder can also go out by SMS through a carrier service such as the Orange SMS API when internet messaging is unreliable. The important thing is to choose tools suited to your reality, not the most sophisticated ones on the market.

## Keeping the Human in the Loop — Validation, Quality, Accountability
Automating does not mean letting go of the wheel. Think of a motorbike taxi driver following a familiar route: he can go fast on the stretch he knows well, but he slows down and looks carefully at dangerous crossroads. That is the human-in-the-loop principle: the machine handles the predictable work, the human intervenes at critical points.

In practice, identify at least one human checkpoint in your workflow. For example: the automation sorts incoming requests and pre-fills a summary table, but it is the manager who validates that table before it goes to the leadership team, the client, or the donor. For cases flagged as "sensitive" (a service user in difficulty, a student dropping out, a file with inconsistent data), the system must alert a human rather than processing automatically.

Accountability cannot be delegated to a machine. If an error occurs in an automated process — a mis-generated report, an invoice sent to the wrong client, a person left off a list — it is always a human being who is responsible. This awareness must guide the design of every automation, in a company as much as in a school, a practice, or a field organization.

## Measuring Gains and Risks — Time Saved, Possible Errors, Dependency
Before deploying an automation, ask yourself three simple questions: How much time does this task take today? How likely is it that an automated error would go unnoticed? If the tool breaks down, what happens? It is like assessing whether a dishwasher is really worth the investment for a small restaurant: you must compare cost, reliability, and dependency on the repair technician.

Reasonable estimates suggest that a well-designed automation can reduce time spent on repetitive data-entry or compilation tasks by 40 to 70 per cent. But this gain must be weighed against the time needed to configure, test, and maintain the automation — often underestimated. A practical rule: if a task takes less than five minutes per week, automating it is probably not a priority.

Monitoring dependency risks is essential. If your team relies entirely on a free tool whose terms can change overnight, you are vulnerable. Always document your workflow, keep a manual backup procedure, and regularly test that the automation produces the expected results. An automated payroll run that stops on payday is a preventable disaster.

## Real case — Weekly Consolidation Across a Network of Shops in Southeast Asia
Challenge : A network of fifteen shops receives between 80 and 120 report forms each week, filled in by the sales teams: notable sales, customer complaints, stock shortages. Manual consolidation took an administrative assistant approximately 6 hours per week: retrieving forms from emails, pasting them into a spreadsheet, checking for duplicates, and preparing the summary table for the Monday meeting.
Solution : The network replaces email submissions with a single online form connected to a shared spreadsheet. A no-code scenario (of the Zapier or Make kind) combined with a small spreadsheet script detects new rows, calculates totals by shop and by indicator, then emails a pre-formatted summary table to the operations manager every Monday morning. Forms marked "sensitive case" (an incident with a customer, a safety problem, a critical shortage) trigger an immediate alert to the regional manager — without waiting for the weekly synthesis.
Impact : Consolidation time dropped from roughly 6 hours to under 1 hour per week (about an 85 per cent reduction), with the assistant using the freed time to analyse trends. Alerts on sensitive cases are now transmitted in under 15 minutes instead of sometimes 48 hours. The operations manager reviews and validates the table before it is sent to the leadership team — the human checkpoint is maintained.

## Practice — Map Your First Automatable Workflow
1. Open your phone's notes app. Describe in 5 to 8 lines a repetitive task you perform at least once a week — at work, in your studies, in your freelance activity, or in a volunteer commitment: specify the input data (where does it come from?), the steps you carry out, and the final result produced.
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
À l'issue de cette leçon, vous serez capable d'identifier les principales sources de biais dans les systèmes d'IA et leurs effets concrets sur des groupes de personnes très différents, partout dans le monde. Vous saurez protéger les données personnelles des personnes dont vous traitez les dossiers — clients, patients, élèves, usagers, candidats, collègues, bénéficiaires — en appliquant les principes de confidentialité et de consentement éclairé. Vous pourrez détecter la désinformation générée par l'IA et adopter les bonnes pratiques de vérification. Vous mettrez en place des garde-fous pour éviter un usage non encadré de l'IA dans votre équipe, votre entreprise, votre école ou votre association.

## D'où viennent les biais dans l'IA ?
Un système d'IA apprend à partir de données. Si ces données ne reflètent pas la diversité du monde réel, le système reproduit — et parfois amplifie — les inégalités existantes. C'est comme un cuisinier qui n'a goûté que la cuisine d'une seule région : ses plats seront bons pour ses voisins, mais moins adaptés aux autres. Le problème n'est donc réservé ni à un métier, ni à un pays, ni à un continent : il apparaît partout où les données d'entraînement ne racontent qu'une partie du monde.

Les formes que prend le biais se ressemblent d'un contexte à l'autre. Un outil de tri de candidatures entraîné sur les recrutements passés d'une entreprise peut écarter les femmes d'un métier historiquement masculin, simplement parce qu'il a appris à reproduire cette histoire. Un modèle qui n'a vu que des profils de jeunes diplômés évalue mal les parcours de candidats plus âgés ou autodidactes. Un outil d'aide à la décision nourri de données de grandes villes fonctionne mal en zone rurale, où les distances, les services et les habitudes sont différents. Et une langue régionale peu écrite — qu'il s'agisse du quechua en Amérique du Sud, d'une langue minorisée d'Europe ou d'Asie, du haoussa, du wolof ou du bambara — est mal comprise par les assistants vocaux, non parce qu'elle serait complexe, mais parce qu'elle est absente des données.

Certains de ces biais ont été particulièrement documentés en Afrique. Des outils de reconnaissance faciale entraînés principalement sur des visages européens ou nord-américains ont montré des taux d'erreur nettement plus élevés sur les peaux foncées. Un algorithme de crédit entraîné sur des données bancaires classiques pénalise des personnes qui utilisent la tontine ou l'argent mobile — des formes de finance tout à fait solides, mais absentes des données d'entraînement. Concrètement, cela peut vouloir dire qu'une patiente reçoit des recommandations inadaptées à son contexte, qu'un agriculteur se voit refuser un micro-crédit, ou qu'une candidate compétente ne dépasse jamais le premier filtre automatique. Reconnaître le biais, c'est la première étape pour le corriger.

## Confidentialité et souveraineté des données
Quand vous tapez le nom, l'état de santé ou la situation familiale d'une personne — un client, un patient, un élève, un candidat, un collègue — dans un outil d'IA en ligne, où vont ces données ? La plupart du temps, elles partent vers des serveurs situés dans un autre pays, elles peuvent servir à améliorer le modèle, et elles relèvent des lois du pays hébergeur, pas nécessairement des vôtres. C'est la question de la souveraineté des données, et elle se pose à Niamey comme à Lisbonne, à Manille ou à Montréal.

Beaucoup de pays se sont dotés d'un cadre juridique. Le RGPD s'applique dans l'Union européenne et à toute organisation qui traite les données de personnes qui y résident. La loi nigérienne sur la protection des données personnelles joue ce rôle au Niger. Le Brésil a sa LGPD, l'Afrique du Sud sa POPIA, l'Inde sa loi DPDP, le Canada sa loi PIPEDA, et la liste s'allonge d'année en année. Les détails diffèrent d'un texte à l'autre, mais tous posent le même principe simple : une personne doit savoir quelles données sont collectées sur elle, pourquoi, et avoir donné son accord. C'est le consentement éclairé. Renseignez-vous sur le cadre qui s'applique là où vous travaillez : c'est celui-là qui fait foi pour vous.

Dans la pratique, avant d'utiliser un outil d'IA pour traiter des informations sur d'autres personnes, posez-vous trois questions : qui peut lire ces données ? Où sont-elles stockées ? Ont-elles été anonymisées ? Un agent de terrain qui saisit des noms et des adresses dans un chatbot public, un comptable qui y colle les bulletins de paie de ses clients, un enseignant qui y dépose les résultats de sa classe : tous exposent des tiers sans le vouloir. Préférez des outils validés par votre organisation, et anonymisez systématiquement les données sensibles.

## Désinformation et vérification — ne pas croire sur parole
L'IA générative peut produire des textes, des images, des vidéos et des voix d'une qualité convaincante. Ce n'est pas forcément un problème — mais cela devient dangereux quand le contenu est faux et difficile à détecter. On parle de deepfakes pour les images ou vidéos manipulées, et d'hallucinations pour les affirmations incorrectes mais formulées avec assurance par un modèle de langage.

Les dégâts ne sont pas réservés aux grandes crises. Un faux message qui semble venir de votre banque et vous demande de confirmer un code, une fausse annonce d'inscription attribuée à une école, une voix imitant celle d'un employeur qui réclame un virement urgent, une rumeur de quartier relayée dans un groupe familial : tout cela circule désormais avec une qualité de fabrication qui trompe des gens prudents. En contexte humanitaire, les conséquences peuvent être graves : un faux communiqué d'ONG annonçant une évacuation inexistante peut provoquer la panique, et un rapport de situation fabriqué peut influencer des décisions de financement. En période d'élection ou de crise, ces contenus se propagent très vite dans les messageries.

La règle d'or : vérifiez toute information importante auprès de deux sources indépendantes avant de la partager ou d'en tirer une décision. Face à une demande urgente qui semble venir d'une banque, d'un employeur ou d'une administration, rappelez par le canal officiel que vous connaissez déjà, jamais par le numéro ou le lien fournis dans le message. Pour les images, des outils gratuits comme FotoForensics ou la recherche d'image inversée de Google aident à repérer des manipulations. Pour les textes, interrogez-vous : l'auteur est-il identifiable ? La date est-elle claire ? Un organe de presse reconnu confirme-t-il l'information ? Ne partagez jamais un contenu douteux sans vérification préalable.

## Bonnes pratiques et responsabilité collective
Utiliser l'IA de façon responsable ne dépend pas uniquement de chaque individu — c'est aussi une responsabilité collective. La Shadow AI désigne l'utilisation d'outils d'IA non approuvés : un salarié qui résume des rapports confidentiels dans un chatbot grand public, un indépendant qui y colle le contrat d'un client, un stagiaire qui y dépose un fichier interne, sans en informer personne. C'est une pratique risquée, même si elle part d'une bonne intention de gagner du temps.

La transparence est un pilier central : si vous avez utilisé l'IA pour produire un document, signalez-le. Cela permet à vos collègues et à vos partenaires d'exercer leur esprit critique sur le résultat. La supervision humaine reste indispensable — l'IA propose, l'humain décide et assume la responsabilité. Un médecin peut utiliser l'IA pour obtenir une liste de symptômes, mais c'est lui qui examine le patient et pose le diagnostic. Un recruteur peut s'aider d'un outil pour trier des candidatures, mais c'est lui qui répond au candidat et assume le refus.

Sur votre lieu de travail, quelques gestes concrets font la différence : établir une liste des outils d'IA autorisés, former les équipes aux risques de base, inclure une clause de confidentialité IA dans les contrats avec les partenaires, et prévoir une relecture humaine systématique pour tout document destiné à des clients, des élèves, des patients, des usagers, des candidats, des bénéficiaires ou des bailleurs. Si vous travaillez seul, comme indépendant ou comme bénévole, ces règles valent aussi : écrivez-les pour vous-même. Ces pratiques ne ralentissent pas le travail — elles protègent la confiance que vous avez mise des années à construire.

## Cas concret — Quand un algorithme ne reconnaît pas les visages — et comment corriger cela
Le probleme : Une organisation humanitaire au Sahel déploie un système biométrique d'IA pour identifier les bénéficiaires d'une distribution alimentaire. Sur le terrain, les agents constatent que le système échoue à reconnaître environ 30 % des bénéficiaires — presque exclusivement des femmes aux teintes de peau plus foncées et des personnes âgées. La distribution prend deux fois plus de temps, certains bénéficiaires repartent sans aide, et la confiance de la communauté s'érode. L'outil a été entraîné sur des bases de données photographiques majoritairement nord-américaines et européennes.
La solution : L'organisation suspend temporairement le système automatique et revient à une vérification manuelle assistée. Elle documente tous les cas d'échec avec photographies et métadonnées. Elle contacte le fournisseur et lui fournit un jeu de données supplémentaires représentatif de la population locale, collecté avec consentement éclairé. En parallèle, elle met en place un protocole de supervision humaine obligatoire : tout rejet du système doit être confirmé par un agent avant de refuser l'accès à un bénéficiaire. Elle forme ses équipes à identifier les biais et à signaler tout écart.
L'impact : Après correction et réentraînement sur des données plus représentatives, le taux d'erreur de reconnaissance chute de 30 % à moins de 4 %. Le temps de distribution revient à son niveau normal, divisé par deux. Aucun bénéficiaire éligible n'est plus refusé sans intervention humaine. La communauté retrouve confiance dans le processus, et l'organisation dispose désormais d'un protocole documenté réutilisable pour d'autres déploiements technologiques.

## Mise en pratique — Cartographier les données sensibles de votre activité
1. Choisissez un cas d'usage réel dans votre travail ou votre activité où l'IA pourrait être ou est déjà utilisée (exemple : synthèse de comptes rendus, traduction, tri de candidatures, analyse de dossiers de clients, d'élèves, de patients ou de bénéficiaires). Notez ce cas d'usage dans votre téléphone.
2. Listez toutes les données sensibles impliquées dans ce cas : noms, coordonnées, localisations, états de santé, situations familiales, salaires, résultats scolaires, photos. Pour chaque donnée, notez ce qui pourrait se passer si elle était exposée ou utilisée sans autorisation.
3. Pour chaque donnée sensible identifiée, proposez au moins un garde-fou concret : anonymisation avant saisie (remplacer les noms par des codes), recueil d'un consentement écrit, utilisation d'un outil approuvé par votre organisation, ou relecture humaine avant partage. Prenez une capture d'écran ou une note de votre liste, pour la partager lors de la prochaine réunion d'équipe ou pour la relire seul si vous travaillez à votre compte.
A observer : Vous constaterez probablement que certains risques étaient invisibles avant cet exercice. C'est normal : on ne voit les dangers d'un outil qu'en posant les bonnes questions. Cette cartographie simple peut devenir la base d'une politique IA pour votre organisation, ou votre propre règle de conduite si vous travaillez seul.

## Glossaire
- Biais : Erreur systématique dans les résultats d'un système d'IA, causée par des données d'entraînement non représentatives ou des choix de conception qui favorisent certains groupes au détriment d'autres : un genre, une tranche d'âge, une région, une langue.
- Données personnelles : Toute information permettant d'identifier directement ou indirectement une personne : nom, adresse, numéro de téléphone, photo, localisation GPS, état de santé, salaire, résultats scolaires, situation familiale.
- Souveraineté des données : Principe selon lequel les données collectées dans un pays ou sur une communauté doivent rester sous le contrôle de ce pays ou de cette communauté, et non transférées sans accord vers des serveurs étrangers.
- Consentement éclairé : Accord libre et informé donné par une personne avant que ses données soient collectées ou utilisées. La personne doit comprendre clairement ce à quoi elle consent, dans une langue qu'elle maîtrise.
- Transparence : Obligation de signaler clairement quand un document, une décision ou une communication a été produit ou assisté par un système d'IA, afin que les destinataires puissent exercer leur esprit critique.
- Shadow AI : Usage d'outils d'IA non approuvés par une organisation, souvent à titre personnel et sans en informer qui que ce soit, exposant la structure à des risques de sécurité, de confidentialité et de conformité réglementaire.
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
By the end of this lesson, you will be able to identify the main sources of bias in AI systems and their concrete effects on very different groups of people, anywhere in the world. You will know how to protect the personal data of the people whose records you handle — customers, patients, students, service users, job applicants, colleagues, beneficiaries — by applying the principles of confidentiality and informed consent. You will be able to detect AI-generated misinformation and adopt good verification practices. You will put safeguards in place to prevent uncontrolled use of AI in your team, your company, your school, or your association.

## Where Does AI Bias Come From?
An AI system learns from data. If that data does not reflect the diversity of the real world, the system reproduces — and sometimes amplifies — existing inequalities. Think of it like a cook who has only ever tasted food from one region: their dishes will suit their neighbors well, but may not work for everyone else. The problem therefore belongs to no single profession, no single country, and no single continent: it appears wherever the training data tells only part of the world's story.

The shapes bias takes look similar from one context to the next. A resume screening tool trained on a company's past hires may filter out women from a historically male profession, simply because it learned to reproduce that history. A model that has only seen the profiles of young graduates poorly assesses the paths of older or self-taught applicants. A decision support tool fed with big-city data works badly in rural areas, where distances, services, and habits are different. And a regional language that is seldom written — whether Quechua in South America, a minoritized language of Europe or Asia, Hausa, Wolof, or Bambara — is poorly understood by voice assistants, not because it is complex, but because it is missing from the data.

Some of these biases have been particularly well documented in Africa. Facial recognition tools trained mainly on European or North American faces have shown significantly higher error rates on darker skin tones. A credit-scoring algorithm trained on traditional banking data penalizes people who use tontines or mobile money — perfectly sound financial practices that are simply absent from the training data. In practice, this can mean that a patient receives recommendations poorly suited to her context, that a farmer is denied a microloan, or that a capable applicant never gets past the first automated filter. Recognizing bias is the first step toward correcting it.

## Confidentiality and Data Sovereignty
When you type a person's name, health status, or family situation — a customer, a patient, a student, an applicant, a colleague — into an online AI tool, where does that data go? Most of the time, it is sent to servers located in another country, it may be used to improve the model, and it falls under the laws of the host country, not necessarily your own. This is the question of data sovereignty, and it arises in Niamey just as it does in Lisbon, Manila, or Montreal.

Many countries have adopted a legal framework. The GDPR applies in the European Union and to any organization processing the data of people residing there. Niger's personal data protection law plays that role in Niger. Brazil has its LGPD, South Africa its POPIA, India its DPDP law, Canada its PIPEDA, and the list grows longer year after year. The details differ from one text to another, but they all set out the same simple principle: a person must know what data is collected about them, why, and must have given their agreement. This is informed consent. Find out which framework applies where you work: that is the one that governs you.

In practice, before using an AI tool to process information about other people, ask yourself three questions: Who can read this data? Where is it stored? Has it been anonymized? A field agent who enters names and addresses into a public chatbot, an accountant who pastes clients' payslips into one, a teacher who uploads a class's results: all of them expose third parties without meaning to. Prefer tools validated by your organization, and systematically anonymize sensitive data.

## Misinformation and Verification — Do Not Take Things at Face Value
Generative AI can produce text, images, videos, and voices of convincing quality. This is not inherently a problem — but it becomes dangerous when the content is false and difficult to detect. We speak of deepfakes for manipulated images or videos, and hallucinations for incorrect claims stated with confidence by a language model.

The damage is not reserved for major crises. A fake message that seems to come from your bank asking you to confirm a code, a false enrollment announcement attributed to a school, a voice imitating an employer demanding an urgent transfer, a neighborhood rumor passed around in a family group: all of this now circulates with a level of craft that fools careful people. In humanitarian settings, the consequences can be severe: a fake NGO communiqué announcing a non-existent evacuation can cause panic, and a fabricated situation report can influence funding decisions. During elections or crises, such content spreads very quickly through messaging apps.

The golden rule: verify any important information against two independent sources before sharing it or basing a decision on it. When faced with an urgent request that appears to come from a bank, an employer, or a government office, call back through the official channel you already know, never through the number or link supplied in the message. For images, free tools such as FotoForensics or Google's reverse image search help spot manipulation. For texts, ask yourself: is the author identifiable? Is the date clear? Does a recognized news outlet confirm the information? Never share doubtful content without prior verification.

## Good Practices and Collective Responsibility
Using AI responsibly is not solely an individual matter — it is also a collective responsibility. Shadow AI refers to the use of AI tools that have not been approved: an employee summarizing confidential reports in a public chatbot, a freelancer pasting in a client's contract, an intern uploading an internal file, without telling anyone. This is a risky practice, even when motivated by a genuine desire to save time.

Transparency is a central pillar: if you used AI to produce a document, say so. This allows colleagues and partners to apply critical thinking to the result. Human oversight remains essential — AI proposes, and humans decide and take responsibility. A doctor may use AI to get a list of symptoms, but it is the doctor who examines the patient and makes the diagnosis. A recruiter may use a tool to sort applications, but it is the recruiter who answers the applicant and owns the rejection.

In your workplace, a few concrete actions make a real difference: establish a list of approved AI tools, train teams on basic risks, include an AI confidentiality clause in partner contracts, and require systematic human review of any document intended for customers, students, patients, service users, applicants, beneficiaries, or donors. If you work alone, as a freelancer or a volunteer, these rules apply too: write them down for yourself. These practices do not slow down work — they protect the trust you have spent years building.

## Real case — When an Algorithm Fails to Recognize Faces — and How to Fix It
Challenge : A humanitarian organization in the Sahel deploys a biometric AI system to identify beneficiaries during a food distribution. In the field, agents notice that the system fails to recognize about 30% of beneficiaries — almost exclusively women with darker skin tones and elderly people. The distribution takes twice as long, some beneficiaries leave without assistance, and community trust erodes. The tool was trained on photographic databases that were predominantly North American and European.
Solution : The organization temporarily suspends the automatic system and returns to manual assisted verification. It documents all failure cases with photographs and metadata. It contacts the vendor and provides an additional dataset representative of the local population, collected with informed consent. In parallel, it establishes a mandatory human supervision protocol: any rejection by the system must be confirmed by a human agent before denying a beneficiary access. It trains its teams to identify biases and report any discrepancy.
Impact : After correction and retraining on more representative data, the recognition error rate drops from 30% to less than 4%. Distribution time is halved, back to its normal level. No eligible beneficiary is refused without human intervention. The community regains trust in the process, and the organization now has a documented protocol reusable for future technology deployments.

## Practice — Mapping the Sensitive Data in Your Work
1. Choose a real use case in your job or your activity where AI could be or is already being used (for example: summarizing meeting notes, translation, screening applications, analyzing records of customers, students, patients, or beneficiaries). Write down this use case on your phone.
2. List all sensitive data involved in this use case: names, contact details, locations, health status, family situations, salaries, school results, photos. For each data type, note what could happen if it were exposed or used without authorization.
3. For each sensitive data item identified, propose at least one concrete safeguard: anonymization before entry (replacing names with codes), collecting written consent, using a tool approved by your organization, or human review before sharing. Take a screenshot or a note of your list, to share at the next team meeting or to read back on your own if you are self-employed.
What to notice : You will likely find that some risks were invisible before this exercise. That is normal: the dangers of a tool only become clear when you ask the right questions. This simple mapping can become the foundation of an AI policy for your organization, or your own rule of conduct if you work alone.

## Glossary
- Bias : A systematic error in the results of an AI system, caused by unrepresentative training data or design choices that favor certain groups at the expense of others: a gender, an age group, a region, a language.
- Personal data : Any information that directly or indirectly identifies a person: name, address, phone number, photo, GPS location, health status, salary, school results, or family situation.
- Data sovereignty : The principle that data collected in a country or about a community should remain under the control of that country or community, and not be transferred without agreement to foreign servers.
- Informed consent : A free and informed agreement given by a person before their data is collected or used. The person must clearly understand what they are consenting to, in a language they understand.
- Transparency : The obligation to clearly indicate when a document, decision, or communication was produced or assisted by an AI system, so that recipients can apply critical thinking.
- Shadow AI : The use of AI tools not approved by an organization, often for personal use and without telling anyone, exposing the organization to security, privacy, and regulatory compliance risks.
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
À l'issue de cette leçon, vous serez capable de comparer plusieurs outils IA selon vos besoins concrets, votre budget et vos contraintes pratiques. Vous saurez choisir un outil adapté à votre langue de travail, à votre connexion et à la sensibilité de vos données. Vous serez également en mesure de combiner plusieurs outils dans un flux de travail simple pour gagner du temps sur les tâches administratives. Enfin, vous pourrez démarrer gratuitement et progresser à votre rythme.

## Panorama des outils IA disponibles
Imaginez une boîte à outils de menuisier : il y a le marteau, la scie, le mètre. Chaque outil a sa fonction précise. Les outils IA fonctionnent de la même façon — il en existe plusieurs catégories, et chacune répond à un besoin différent.

Les assistants conversationnels (comme ChatGPT, Claude ou Gemini) répondent à vos questions, rédigent des textes, résument des documents et vous aident à préparer des réunions. Un étudiant peut leur faire expliquer un chapitre de cours qu'il n'a pas compris, un indépendant leur faire dégrossir un devis, une enseignante leur demander trois variantes d'un exercice. Les outils de transcription et de traduction (comme Whisper ou DeepL) convertissent la parole en texte ou traduisent un document du français vers le haoussa, l'anglais ou l'espagnol. C'est utile pour une petite entreprise qui traduit sa page de vente, comme pour une réunion communautaire en milieu rural où les échanges se font en langue locale.

Les outils de génération d'images (comme DALL·E ou Canva IA) créent des visuels : l'affiche d'une association culturelle, le support d'un cours, une image pour une campagne de sensibilisation. Les outils d'analyse de documents, comme NotebookLM de Google, vous permettent de poser des questions directement sur un rapport de 80 pages, comme si vous parliez à un collègue qui l'aurait lu pour vous. Pour un agent d'une administration qui traite chaque mois des dizaines de dossiers, ou pour une équipe qui reçoit autant de rapports de terrain, le gain de temps est considérable.

## Critères pour bien choisir son outil
Choisir un outil IA sans critères clairs, c'est comme aller au marché sans liste de courses : on risque de repartir avec des choses inutiles ou de dépasser son budget. Quatre critères essentiels doivent guider votre choix.

Premier critère : le coût. La plupart des outils proposent une version gratuite (freemium) avec des fonctionnalités limitées, et une version payante. Pour un étudiant, un indépendant, une petite association ou une équipe qui débute, la version gratuite suffit largement pour démarrer. Deuxième critère : le fonctionnement hors ligne. Dans les zones à faible connectivité — un village du Sahel, une vallée andine, une île éloignée, mais aussi un train, un sous-sol ou un quartier mal couvert d'une grande ville — un outil qui exige une connexion permanente devient inutilisable. Certains outils permettent un usage partiel sans internet.

Troisième critère : la confidentialité. Si vos données concernent des personnes — clients, usagers, élèves, patients, adhérents, et à plus forte raison des personnes en situation de vulnérabilité — vous devez vérifier où ces données sont stockées et qui y a accès. Ne jamais saisir de données personnelles identifiables dans un outil grand public sans vérifier sa politique de confidentialité. Quatrième critère : les langues supportées. Un outil excellent en anglais peut être médiocre en haoussa, en bambara ou dans toute autre langue peu présente en ligne. Testez toujours l'outil dans la langue de votre travail réel avant de l'adopter.

## Combiner les outils dans un flux de travail
Un seul outil IA peut vous aider. Plusieurs outils bien combinés peuvent transformer votre façon de travailler. Pensez à une chaîne de production artisanale : chaque artisan fait une étape, et ensemble ils produisent un résultat que personne n'aurait pu faire seul.

Voici un exemple concret de flux de travail, valable pour une réunion d'équipe, un conseil de classe ou un entretien client : Étape 1 — vous enregistrez la rencontre sur votre téléphone, après avoir prévenu les participants. Étape 2 — vous utilisez un outil de transcription (comme Whisper) pour convertir l'audio en texte. Étape 3 — vous collez ce texte dans un assistant conversationnel (Claude ou ChatGPT) pour en extraire un résumé structuré et les points d'action. Étape 4 — vous traduisez ce résumé dans la langue de vos destinataires avec DeepL ou Google Translate. Étape 5 — vous déposez le document dans NotebookLM pour l'archiver et permettre à votre équipe de le retrouver et de l'interroger plus tard.

Ce travail, qui aurait pris une journée entière à rédiger manuellement, peut se faire en une à deux heures. Le gain réel dépend de la longueur de la réunion, de la qualité de l'enregistrement et de la langue parlée : mesurez-le sur vos propres documents plutôt que de vous fier à une moyenne annoncée ailleurs. L'essentiel est de définir votre flux en avance et de tester chaque étape avant de l'utiliser sur des données sensibles.

## Démarrer gratuitement et monter en compétence
Apprendre à utiliser les outils IA ressemble à apprendre à cultiver un nouveau légume : au début on tâtonne, on fait quelques erreurs, puis on trouve le bon rythme. La bonne nouvelle, c'est que la plupart des ressources pour apprendre sont gratuites et accessibles depuis un smartphone.

Pour démarrer sans budget, vous pouvez utiliser les versions gratuites de ChatGPT, Claude, Gemini ou Perplexity pour vos questions quotidiennes. Whisper d'OpenAI est disponible en ligne gratuitement pour la transcription. NotebookLM de Google est gratuit pour analyser vos documents. DeepL propose une traduction de qualité avec une limite mensuelle raisonnable en version gratuite. Des plateformes comme YouTube, Coursera (avec audit gratuit) ou des communautés WhatsApp d'apprentissage permettent de progresser à son rythme, même avec une connexion limitée.

La pratique régulière est plus efficace que les longues sessions rares. Consacrez dix à quinze minutes par jour à tester un outil sur une tâche réelle de votre travail ou de vos études — rédiger un courriel, résumer un rapport, préparer un ordre du jour. En un mois, vous aurez une vraie maîtrise pratique. Commencez par la tâche la plus simple : une enseignante peut faire relire l'énoncé d'un exercice, un indépendant reformuler un devis, un agent de santé communautaire transcrire ses notes de visite. Chaque petit pas compte.

## Cas concret — Un petit réseau d'écoles de langues à Porto compose sa boîte à outils IA gratuite
Le probleme : Le réseau Aprender Juntos réunit trois écoles de langues à Porto, au Portugal. Chaque mois, l'équipe produit une vingtaine de comptes rendus de conseils pédagogiques, de notes d'entretien avec les familles et de courriers bilingues portugais-anglais. Trois responsables pédagogiques passaient en moyenne douze heures par semaine chacune sur ces tâches administratives, au détriment du suivi des élèves.
La solution : L'équipe a mis en place un flux en quatre étapes, entièrement avec des outils gratuits : (1) enregistrement audio des réunions sur téléphone, avec l'accord des participants, (2) transcription avec Whisper via une interface web gratuite, (3) résumé et extraction des points d'action avec Claude en version gratuite, (4) traduction portugais-anglais avec Google Translate pour les courriers destinés aux familles anglophones. NotebookLM a été ajouté pour archiver les comptes rendus et les retrouver rapidement.
L'impact : En six semaines, le temps consacré aux tâches administratives a été réduit d'environ 40 %, soit un gain estimé à cinq heures par semaine et par responsable. Les comptes rendus circulent désormais deux jours plus tôt, ce qui libère du temps pour recevoir les familles. La qualité des comptes rendus a également progressé, car les transcriptions sont plus fidèles que les notes prises à la main en réunion.

## Mise en pratique — Comparer deux outils IA pour une tâche de votre travail
1. Choisissez une tâche administrative récurrente dans votre travail ou vos études (exemple : rédiger un résumé de réunion, traduire un court formulaire, transcrire des notes vocales). Notez-la en une phrase sur votre téléphone.
2. Testez cette tâche avec deux outils différents disponibles gratuitement sur mobile (exemples : Claude et ChatGPT, ou Google Translate et DeepL). Pour chaque outil, notez en quelques mots : le coût (gratuit ou payant), la langue qu'il supporte le mieux, et si vous seriez à l'aise d'y saisir des données concernant vos clients, usagers, élèves ou patients (confidentialité).
3. Choisissez l'outil qui correspond le mieux à vos trois critères et justifiez votre choix en deux phrases. Partagez cette justification avec un collègue ou un camarade, ou notez-la dans un mémo pour votre équipe.
A observer : Vous remarquerez que deux outils peuvent réaliser la même tâche avec des résultats très différents selon la langue ou la sensibilité des données. Il n'existe pas d'outil universel parfait : le bon outil est celui qui correspond à votre contexte spécifique.

## Glossaire
- Assistant conversationnel : Programme IA capable de comprendre vos questions en langage naturel et d'y répondre par écrit, comme un collègue disponible à toute heure. Exemples : ChatGPT, Claude, Gemini.
- Transcription : Conversion automatique d'un enregistrement audio ou vidéo en texte écrit. Utile pour retranscrire des réunions, des entretiens ou des messages vocaux sans les saisir manuellement.
- NotebookLM : Outil d'analyse de documents de Google qui permet de charger des fichiers (PDF, textes) et de poser des questions dessus, comme si un assistant avait lu le document à votre place.
- Outil no-code : Outil numérique utilisable sans écrire de code informatique. Accessible via une interface visuelle simple, il permet à des non-développeurs de créer des automatisations ou des workflows.
- Freemium : Modèle économique proposant une version gratuite de base et une version payante avec plus de fonctionnalités. Permet de démarrer sans budget et d'évoluer selon les besoins.
- API : Interface de programmation permettant à deux logiciels de communiquer entre eux. Par exemple, une entreprise ou une association peut connecter son logiciel de gestion à un outil IA via une API pour automatiser des tâches sans intervention manuelle.
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
By the end of this lesson, you will be able to compare several AI tools based on your concrete needs, budget, and practical constraints. You will know how to select a tool suited to your working language, connectivity level, and data sensitivity. You will also be able to combine several tools into a simple workflow to save time on administrative tasks. Finally, you will be ready to start for free and progress at your own pace.

## Overview of Available AI Tools
Think of a carpenter's toolbox: there is the hammer, the saw, the tape measure. Each tool has its precise function. AI tools work the same way — there are several categories, and each addresses a different need.

Conversational assistants (such as ChatGPT, Claude or Gemini) answer your questions, draft texts, summarise documents and help you prepare meetings. A student can have them explain a course chapter they did not understand, a freelancer can have them rough out a quote, a teacher can ask them for three variants of an exercise. Transcription and translation tools (such as Whisper or DeepL) convert speech to text or translate a document from French into Hausa, English or Spanish. This is useful for a small business translating its sales page, just as it is for a community meeting in a rural area where exchanges happen in a local language.

Image-generation tools (such as DALL·E or Canva AI) create visuals: a poster for a cultural association, a handout for a class, an image for an awareness campaign. Document analysis tools, such as Google's NotebookLM, let you ask questions directly about an 80-page report, as if you were talking to a colleague who had read it on your behalf. For a public administration officer processing dozens of case files each month, or a team receiving as many field reports, the time saving is considerable.

## Criteria for Choosing the Right Tool
Selecting an AI tool without clear criteria is like going to market without a shopping list: you risk coming back with unnecessary items or overspending. Four essential criteria should guide your choice.

First criterion: cost. Most tools offer a free (freemium) version with limited features and a paid version. For a student, a freelancer, a small association or a team just getting started, the free version is more than enough to begin. Second criterion: offline capability. In low-connectivity areas — a village in the Sahel, an Andean valley, a remote island, but also a train, a basement or a poorly covered neighbourhood in a large city — a tool that requires a permanent connection becomes unusable. Some tools allow partial use without internet.

Third criterion: privacy. If your data concerns people — clients, service users, pupils, patients, members, and all the more so people in vulnerable situations — you must check where that data is stored and who has access to it. Never enter personally identifiable information into a general-purpose tool without checking its privacy policy. Fourth criterion: supported languages. A tool that excels in English may perform poorly in Hausa, Bambara or any other language with little presence online. Always test the tool in the language of your actual work before adopting it.

## Combining Tools in a Workflow
A single AI tool can help you. Several tools well combined can transform the way you work. Think of a craft production chain: each artisan handles one step, and together they produce a result that none could have achieved alone.

Here is a concrete workflow example, valid for a team meeting, a school staff meeting or a client interview: Step 1 — record the session on your phone, after informing the participants. Step 2 — use a transcription tool (such as Whisper) to convert the audio to text. Step 3 — paste that text into a conversational assistant (Claude or ChatGPT) to extract a structured summary and action points. Step 4 — translate that summary into the language of your recipients using DeepL or Google Translate. Step 5 — upload the document to NotebookLM to archive it and allow your team to retrieve and query it later.

This work, which would have taken a full day to write manually, can be done in one to two hours. The actual saving depends on the length of the meeting, the quality of the recording and the language spoken: measure it on your own documents rather than relying on an average announced elsewhere. The key is to define your workflow in advance and test each step before using it with sensitive data.

## Starting for Free and Building Skills
Learning to use AI tools is like learning to grow a new crop: at first you fumble, make a few mistakes, then find your rhythm. The good news is that most learning resources are free and accessible from a smartphone.

To get started without a budget, you can use the free versions of ChatGPT, Claude, Gemini or Perplexity for your daily questions. OpenAI's Whisper is available online for free for transcription. Google's NotebookLM is free for document analysis. DeepL offers quality translation with a reasonable monthly limit in its free version. Platforms such as YouTube, Coursera (with free audit) or WhatsApp learning communities allow you to progress at your own pace, even with limited connectivity.

Regular practice is more effective than rare long sessions. Spend ten to fifteen minutes a day testing a tool on a real task from your work or your studies — drafting an email, summarising a report, preparing an agenda. Within a month, you will have genuine practical mastery. Start with the simplest task: a teacher can have an exercise prompt reviewed, a freelancer can have a quote reworded, a community health worker can transcribe visit notes. Every small step counts.

## Real case — A small network of language schools in Porto builds its free AI toolkit
Challenge : The Aprender Juntos network brings together three language schools in Porto, Portugal. Each month, the team produces around twenty sets of staff meeting minutes, family interview notes and bilingual Portuguese-English letters. Three academic coordinators were each spending an average of twelve hours per week on these administrative tasks, at the expense of student follow-up.
Solution : The team set up a four-step workflow using entirely free tools: (1) audio recording of meetings on a phone, with the participants' agreement, (2) transcription with Whisper via a free web interface, (3) summarisation and extraction of action points with Claude in its free version, (4) Portuguese-to-English translation with Google Translate for letters intended for English-speaking families. NotebookLM was added to archive the minutes and retrieve them quickly.
Impact : Within six weeks, time spent on administrative tasks was reduced by approximately 40%, representing an estimated saving of five hours per week per coordinator. Minutes now circulate two days earlier, freeing time to meet families. The quality of the minutes also improved, as transcriptions are more accurate than handwritten notes taken during meetings.

## Practice — Compare Two AI Tools for a Task in Your Work
1. Choose a recurring administrative task in your work or your studies (example: writing a meeting summary, translating a short form, transcribing voice notes). Write it down in one sentence on your phone.
2. Test this task with two different tools available for free on mobile (examples: Claude and ChatGPT, or Google Translate and DeepL). For each tool, note in a few words: the cost (free or paid), the language it supports best, and whether you would be comfortable entering data about your clients, service users, pupils or patients into it (privacy).
3. Choose the tool that best matches your three criteria and justify your choice in two sentences. Share this justification with a colleague or a fellow learner, or note it in a memo for your team.
What to notice : You will notice that two tools can perform the same task with very different results depending on the language or data sensitivity. There is no perfect universal tool: the right tool is the one that fits your specific context.

## Glossary
- Conversational assistant : An AI programme capable of understanding your questions in natural language and responding in writing, like a colleague available at any hour. Examples: ChatGPT, Claude, Gemini.
- Transcription : Automatic conversion of an audio or video recording into written text. Useful for capturing meetings, interviews or voice messages without typing them manually.
- NotebookLM : Google's document analysis tool that lets you upload files (PDFs, texts) and ask questions about them, as if an assistant had read the document on your behalf.
- No-code tool : A digital tool usable without writing computer code. Accessible via a simple visual interface, it allows non-developers to create automations or workflows.
- Freemium : A business model offering a free basic version and a paid version with more features. Allows you to start without a budget and scale up according to your needs.
- API : Application Programming Interface: a bridge that lets two pieces of software communicate. For example, a company or an association can connect its management software to an AI tool via an API to automate tasks without manual intervention.
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
À l'issue de cette leçon, vous serez capable de mobiliser l'ensemble des connaissances acquises dans les leçons 1 à 7 pour répondre à des situations concrètes de votre travail, quel que soit votre métier : entreprise, administration, école, association, activité indépendante ou terrain humanitaire. Vous démontrerez votre compréhension de l'intelligence artificielle, des grands modèles de langage, des cas d'usage pratiques et des enjeux éthiques. Cette évaluation valide votre maîtrise du module complet et débloque votre certificat numérique vérifiable Karatou Academy.

## L'essentiel de l'IA — définition, machine learning et IA générative
L'intelligence artificielle, c'est la capacité d'une machine à réaliser des tâches qui nécessitent normalement l'intelligence humaine : reconnaître une image, comprendre un texte, prendre une décision. Ce n'est pas de la magie ; c'est de la statistique et des données. Pensez à un agent de santé qui apprend à reconnaître les signes de malnutrition après des centaines de consultations, ou à un comptable qui repère une facture douteuse au premier coup d'œil : la machine fait la même chose, mais avec des millions d'exemples.

Le machine learning (apprentissage automatique) est le moteur principal de l'IA moderne. Au lieu de programmer des règles à la main, on fournit des exemples au système — des données de récolte sur dix saisons, l'historique des ventes d'une boutique, les copies corrigées d'une classe — et il apprend tout seul à repérer des tendances. Plus les données ressemblent à votre réalité, meilleur est le résultat.

L'IA générative va plus loin : elle ne se contente pas de classer ou prédire, elle crée — du texte, des images, du code. Les outils comme les LLM (grands modèles de langage) appartiennent à cette catégorie. Ils sont utiles pour rédiger un compte rendu, traduire vers le haoussa, le français ou l'anglais, ou résumer une note de service. Mais ils ont des limites : ils peuvent se tromper avec confiance, et leurs données d'entraînement s'arrêtent à une date précise.

## LLM et prompts — tirer le meilleur des modèles de langage
Un LLM, c'est comme un assistant très cultivé qui a lu une bibliothèque entière mais qui n'a jamais mis les pieds chez vous. Il connaît beaucoup de choses de façon générale, mais il ne connaît ni votre organisation, ni votre budget, ni les personnes que vous servez — clients, usagers, patients, élèves ou bénéficiaires. C'est à vous de lui donner ce contexte.

Un bon prompt, c'est une instruction claire, contextualisée et précise. Comparez : « Écris un rapport » et « Tu es responsable du service client d'une entreprise de distribution. Rédige un résumé d'une page des réclamations du mois de mars, destiné à la direction, en insistant sur les trois motifs les plus fréquents et sur les délais de traitement. » Le second prompt produit un résultat dix fois plus utile. Donnez le rôle, le contexte, le format attendu et les contraintes. La même recette vaut pour un rapport bailleur, un compte rendu de conseil de classe ou une note de synthèse administrative.

Les limites des LLM sont réelles : hallucinations (inventions présentées comme des faits), biais liés aux données d'entraînement souvent occidentales, impossibilité d'accéder à des données récentes ou confidentielles sans outils spécifiques. La règle d'or : vérifiez toujours les informations critiques auprès de sources officielles avant de les utiliser dans un document qui engage votre organisation ou dans une décision qui touche quelqu'un.

## Déployer et automatiser — cas d'usage, priorisation et human-in-the-loop
Identifier le bon cas d'usage, c'est la moitié du travail. La méthode consiste à choisir des tâches répétitives, chronophages, à faible risque pour commencer — la saisie d'un cahier de commandes, la traduction d'un formulaire, la mise au propre de notes de réunion, la génération d'un modèle de compte rendu ou la saisie de données de distribution de vivres. On priorise avec une grille simple : impact potentiel versus faisabilité et risque. Ce n'est pas l'outil le plus sophistiqué qui gagne, c'est celui qui convient à votre contexte, y compris en zone de faible connectivité.

L'automatisation ne signifie pas « sans humain ». Le principe du human-in-the-loop (humain dans la boucle) est fondamental : un outil IA peut préparer un premier jet, classer des données ou envoyer une alerte, mais une personne qualifiée doit valider avant toute action importante. C'est comme un transfert d'argent mobile : le système traite la transaction, mais vous vérifiez le montant et le destinataire avant de confirmer.

Partout où une décision touche directement une personne — accorder un crédit, écarter une candidature, orienter un patient, noter un élève, attribuer une aide ou signaler un cas de protection — elle ne doit jamais être entièrement déléguée à une machine. L'IA peut aider à traiter l'information plus vite ; le jugement éthique reste humain, et la responsabilité aussi.

## Responsabilité et choix d'outils — biais, données et éthique en pratique
Les biais dans l'IA ne sont pas une anomalie technique abstraite : ce sont les inégalités du monde réel encodées dans les données. Un outil de présélection de candidatures entraîné sur les profils déjà recrutés reproduira les habitudes de recrutement passées. Un modèle de santé entraîné sur des données essentiellement urbaines et occidentales donnera de moins bons résultats pour une communauté rurale du Sahel. Identifier ces biais est une responsabilité professionnelle, pas une option.

La protection des données des personnes est non négociable, qu'il s'agisse d'un fichier clients, d'un dossier médical, d'un bulletin scolaire ou d'une liste de bénéficiaires. Avant d'utiliser un outil IA avec des données personnelles — noms, salaires, états de santé, statuts de vulnérabilité, localisations — posez ces trois questions : Où sont stockées ces données ? Qui y a accès ? Sont-elles conformes aux règles de votre organisation et à la réglementation applicable ? Ne collez jamais de données sensibles dans un outil grand public non sécurisé, de la même façon que vous ne laisseriez pas un dossier médical sur une table de marché.

Choisir un outil IA, c'est aussi choisir un fournisseur. Évaluez : la politique de confidentialité, la disponibilité hors ligne, le coût réel (y compris en données mobiles), le support dans vos langues de travail, et la capacité à fonctionner sur les appareils dont vous disposez réellement. Un outil parfait sur papier mais inutilisable depuis votre bureau, votre boutique ou votre zone d'intervention n'est pas le bon outil. Privilégiez toujours l'outil adapté à votre contexte réel.

## Cas concret — Cas transversal — La coordination régionale de l'ONG SahelAid déploie l'IA de bout en bout
Le probleme : SahelAid coordonne la réponse nutritionnelle dans trois régions du Niger avec 45 agents de terrain. Chaque semaine, les agents remplissent des fiches papier de 120 enfants chacun. La saisie, la traduction (haoussa → français) et la rédaction du rapport hebdomadaire pour le bailleur prennent 14 heures de travail cumulées au coordinateur. Les erreurs de saisie représentent environ 12 % des données. Le coordinateur se demande comment l'IA peut l'aider sans mettre en danger les données des bénéficiaires.
La solution : L'équipe suit une démarche en quatre étapes. Étape 1 — Choix du cas d'usage : ils priorisent la transcription et la traduction automatique des fiches, tâche répétitive et à faible risque immédiat. Étape 2 — Prompt structuré : le coordinateur rédige un prompt précis — « Tu es un assistant de suivi nutritionnel. Traduis cette fiche de terrain du haoussa vers le français, préserve tous les chiffres, signale toute donnée manquante ou incohérente par [?]. » Étape 3 — Automatisation avec human-in-the-loop : un outil de traitement de formulaires génère le brouillon ; le coordinateur valide chaque fiche avant intégration dans la base de données. Les données ne quittent jamais le serveur local sécurisé de l'ONG. Étape 4 — Choix d'outil responsable : l'outil retenu fonctionne hors ligne, est hébergé localement, et son fournisseur a signé un accord de traitement de données conforme aux normes CICR.
L'impact : Après huit semaines de déploiement : le temps de traitement hebdomadaire est passé de 14 heures à 4 heures, soit une réduction de 71 %. Le taux d'erreur de saisie est tombé à moins de 3 %. Le coordinateur consacre désormais 10 heures supplémentaires par semaine à l'analyse et à la décision. Aucune donnée bénéficiaire n'a quitté le périmètre sécurisé. Le rapport bailleur est produit le mardi au lieu du vendredi, accélérant les décisions d'approvisionnement. La démarche en quatre étapes — cas d'usage, prompt, validation humaine, choix d'outil — se transpose telle quelle à un service client, un secrétariat d'école ou un cabinet indépendant.

## Mise en pratique — Mon plan personnel d'adoption de l'IA — 30 jours pour commencer
1. Identifiez dans votre travail quotidien UNE tâche répétitive et chronophage — rédaction, traduction, résumé, saisie de données, mise en forme — qui serait un bon premier cas d'usage pour l'IA. Notez pourquoi vous l'avez choisie et quel gain de temps vous espérez.
2. Choisissez UN outil IA adapté à votre contexte (fonctionnel hors ligne si nécessaire, compatible avec vos appareils, respectueux de la confidentialité des données) et formulez UN prompt structuré que vous utiliserez pour ce cas d'usage. Testez-le et notez ce qui fonctionne bien et ce qui nécessite un ajustement.
3. Définissez UNE règle éthique concrète pour votre usage (par exemple : « Je ne saisis jamais le nom d'une personne dans cet outil ») et UN indicateur de succès mesurable à 30 jours (par exemple : « Mon compte rendu hebdomadaire est prêt en moins de deux heures »). Faites relire ce plan par un collègue, un camarade de promotion ou une personne de votre métier.
A observer : Un plan d'adoption réaliste vaut mieux qu'un projet ambitieux jamais mis en œuvre. Commencez petit, mesurez, ajustez. La confiance dans l'IA se construit par l'expérience directe, pas par la théorie. Notez vos observations dans un carnet — elles seront précieuses quand ce sera à vous de former les autres.

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
By the end of this lesson, you will be able to draw on all the knowledge acquired in lessons 1 through 7 to respond to concrete situations in your own work, whatever your field: a company, a public administration, a school, an association, an independent practice, or humanitarian field work. You will demonstrate your understanding of artificial intelligence, large language models, practical use cases, and ethical issues. This assessment validates your mastery of the complete module and unlocks your verifiable digital certificate from Karatou Academy.

## AI Essentials — Definition, Machine Learning, and Generative AI
Artificial intelligence is a machine's ability to perform tasks that normally require human intelligence: recognizing an image, understanding text, making a decision. It is not magic; it is statistics and data. Think of a health worker who learns to recognize signs of malnutrition after hundreds of consultations, or an accountant who spots a questionable invoice at a glance: the machine does the same thing, but with millions of examples.

Machine learning is the main engine of modern AI. Instead of manually programming rules, you feed the system examples — harvest data over ten seasons, a shop's sales history, a class's marked papers — and it learns on its own to spot patterns. The closer the data is to your own reality, the better the result.

Generative AI goes further: it does not just classify or predict, it creates — text, images, code. Tools such as LLMs (large language models) belong to this category. They are useful for drafting a report, translating into Hausa, French, or English, or summarizing an internal memo. But they have limits: they can be wrong with confidence, and their training data stops at a specific date.

## LLMs and Prompts — Getting the Most from Language Models
An LLM is like a very well-read assistant who has read an entire library but has never set foot where you work. It knows a great deal in general, but it does not know your organization, your budget, or the people you serve — customers, users, patients, students, or beneficiaries. It is up to you to provide that context.

A good prompt is a clear, contextualized, and precise instruction. Compare: 'Write a report' with 'You are the customer service manager of a distribution company. Write a one-page summary of March's complaints, addressed to management, emphasizing the three most frequent reasons and the handling times.' The second prompt produces a result ten times more useful. Give the role, the context, the expected format, and the constraints. The same recipe works for a donor report, a school board summary, or an administrative briefing note.

The limits of LLMs are real: hallucinations (fabrications presented as facts), biases linked to predominantly Western training data, inability to access recent or confidential data without specific tools. The golden rule: always verify critical information against official sources before using it in a document that commits your organization or in a decision that affects someone.

## Deploying and Automating — Use Cases, Prioritization, and Human-in-the-Loop
Identifying the right use case is half the work. The approach is to start with repetitive, time-consuming, low-risk tasks — entering an order book, translating a form, cleaning up meeting notes, generating a report template, or entering food distribution data. Prioritization uses a simple grid: potential impact versus feasibility and risk. The most sophisticated tool does not win; the one that fits your context does, including in low-connectivity areas.

Automation does not mean 'without humans.' The human-in-the-loop principle is fundamental: an AI tool can prepare a first draft, classify data, or send an alert, but a qualified person must validate before any important action. It is like a mobile money transfer: the system processes the transaction, but you check the amount and the recipient before confirming.

Wherever a decision directly affects a person — granting credit, rejecting an application, referring a patient, grading a student, allocating aid, or making a protection referral — it must never be entirely delegated to a machine. AI can help process information faster; ethical judgment remains human, and so does accountability.

## Responsibility and Tool Selection — Bias, Data, and Ethics in Practice
Bias in AI is not an abstract technical anomaly: it is the real-world inequalities encoded in data. A screening tool trained on the profiles already hired will reproduce past recruitment habits. A health model trained on predominantly urban and Western data will perform worse for a rural Sahel community. Identifying these biases is a professional responsibility, not an option.

Protecting people's data is non-negotiable, whether it is a customer file, a medical record, a school report, or a beneficiary list. Before using an AI tool with personal data — names, salaries, health conditions, vulnerability statuses, locations — ask these three questions: Where is this data stored? Who has access to it? Does it comply with your organization's rules and the applicable regulations? Never paste sensitive data into an unsecured public tool, just as you would not leave a medical file on a market table.

Choosing an AI tool also means choosing a provider. Evaluate: the privacy policy, offline availability, real cost (including mobile data usage), support in your working languages, and the ability to run on the devices you actually have. A tool that is perfect on paper but unusable from your office, your shop, or your operating area is not the right tool. Always prioritize the tool that fits your actual context.

## Real case — Transversal Case Study — The NGO SahelAid's Regional Coordination Deploys AI End-to-End
Challenge : SahelAid coordinates the nutrition response across three regions of Niger with 45 field agents. Each week, agents fill out paper forms for 120 children each. Data entry, translation (Hausa to French), and drafting the weekly donor report take a cumulative 14 hours of the coordinator's time. Data entry errors account for approximately 12% of the data. The coordinator wonders how AI can help without putting beneficiary data at risk.
Solution : The team follows a four-step approach. Step 1 — Use case selection: they prioritize automatic transcription and translation of forms, a repetitive task with low immediate risk. Step 2 — Structured prompt: the coordinator drafts a precise prompt — 'You are a nutrition monitoring assistant. Translate this field form from Hausa to French, preserve all figures, flag any missing or inconsistent data with [?].' Step 3 — Automation with human-in-the-loop: a form processing tool generates a draft; the coordinator validates each form before it is integrated into the database. Data never leaves the NGO's secure local server. Step 4 — Responsible tool selection: the chosen tool works offline, is locally hosted, and its provider has signed a data processing agreement compliant with ICRC standards.
Impact : After eight weeks of deployment: weekly processing time dropped from 14 hours to 4 hours — a 71% reduction. The data entry error rate fell to under 3%. The coordinator now dedicates 10 additional hours per week to analysis and decision-making. No beneficiary data left the secure perimeter. The donor report is produced on Tuesday instead of Friday, accelerating procurement decisions. The same four-step approach — use case, prompt, human validation, tool selection — transfers as is to a customer service desk, a school office, or an independent practice.

## Practice — My Personal AI Adoption Plan — 30 Days to Get Started
1. Identify ONE repetitive and time-consuming task in your daily work — drafting, translating, summarizing, data entry, formatting — that would be a good first AI use case. Write down why you chose it and what time savings you expect.
2. Choose ONE AI tool suited to your context (functional offline if needed, compatible with your devices, respectful of data confidentiality) and draft ONE structured prompt you will use for this use case. Test it and note what works well and what needs adjustment.
3. Define ONE concrete ethical rule for your usage (for example, 'I never enter a person's name into this tool') and ONE measurable success indicator at 30 days (for example, 'My weekly summary is ready in under two hours'). Have this plan reviewed by a colleague, a fellow student, or someone in your line of work.
What to notice : A realistic adoption plan is worth more than an ambitious project that never gets implemented. Start small, measure, adjust. Confidence in AI is built through direct experience, not theory. Keep notes in a journal — they will be valuable when it is your turn to train others.

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
