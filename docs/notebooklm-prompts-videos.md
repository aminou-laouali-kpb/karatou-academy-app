# Prompts NotebookLM — vidéos par leçon (Karatou Academy)

Ce document fournit, **pour chacune des 19 leçons** des 3 modules publiés, un prompt NotebookLM
prêt à coller pour générer la **vidéo explicative** (Video Overview) de la leçon, en **français**
et en **anglais**, plus un prompt **par cours** (vidéo d'introduction du module).

> Les leçons s'affichent déjà avec tout le texte trilingue. La vidéo est un **complément** :
> le champ `video` de chaque leçon est aujourd'hui vide (`{ "fr": "", "en": "", "ha": "" }`).
> Une fois la vidéo produite et publiée sur YouTube, on colle l'URL d'**embed** dans ce champ.
>
> **Depuis le studio des leçons (`/admin/lecons`), plus besoin de toucher au code** : la carte
> « Vidéos de la leçon » contient les trois champs FR / EN / HA, et « Enregistrer » publie
> immédiatement. Le mapping fichier ↔ leçon plus bas ne sert plus qu'à modifier une leçon
> directement dans le dépôt.

---

## 1. Mode d'emploi (à lire une fois)

**Pour chaque leçon :**

1. **Créer un notebook NotebookLM** dédié à la leçon.
2. **Charger la source** : copier-coller le texte de la leçon (idéalement les sections
   *Contenu* + *Exemple* + *Glossaire* ; l'*Objectif* aide aussi). Vous pouvez aussi exporter
   la leçon en `.txt`/`.md` et l'uploader. Plus la source est propre, meilleure est la vidéo.
3. Cliquer **« Video Overview »** → **« Customize »** (Personnaliser).
4. **Coller le prompt** de la leçon (section ci-dessous), dans la langue voulue.
5. **Régler la langue de sortie** du notebook sur **Français** ou **English** avant de générer.
6. **Générer**, puis **télécharger** la vidéo (MP4).
7. **Publier sur YouTube en « Non répertorié » (unlisted)**, récupérer l'ID de la vidéo
   (la partie après `watch?v=`).
8. **Coller l'URL d'embed** dans le champ `video` de la leçon (voir mapping fichier par leçon),
   au format : `https://www.youtube.com/embed/VIDEO_ID`.

**Format à respecter dans le code** (exemple) :

```ts
"video": {
  "fr": "https://www.youtube.com/embed/AbC123xyz",
  "en": "https://www.youtube.com/embed/Def456uvw",
  "ha": ""   // voir note langues ci-dessous
},
```

**Cible recommandée** : vidéos **courtes (≈ 4 à 6 min)**, langage simple, phrases courtes —
l'audience est souvent sur **mobile avec une connexion limitée**.

### Note langues (important)

- **FR et EN** : pris en charge par NotebookLM (Video/Audio Overview). Générez 2 vidéos par leçon.
- **Haoussa (HA)** : NotebookLM ne génère pas de façon fiable en haoussa. Trois options :
  1. **Laisser `video.ha` vide** (la leçon reste entièrement lisible en haoussa) — option par défaut.
  2. **Réutiliser la vidéo FR** dans le slot `ha` en attendant.
  3. Produire la voix-off à part (FR/EN) et **ajouter des sous-titres haoussa** manuellement sur YouTube.

### Astuce qualité du prompt
Les prompts ci-dessous suivent la même ossature : **audience → objectif → plan en points →
ton & exemples → honnêteté sur les limites → 1 action finale → éviter le jargon**. Ajustez la
durée ou ajoutez « insiste sur l'exemple … » si besoin.

---

## 2. Mapping leçon → fichier → champ vidéo

| Module | Leçon | Fichier à éditer | Champ |
|---|---|---|---|
| IA | c1 Introduction à l'IA | `src/data/lessonContent.ts` (objet `lesson1`) | `video.{fr,en,ha}` |
| IA | c2 Comprendre les LLMs | `src/data/lessons/ia-c2-llms.ts` | `video.{fr,en,ha}` |
| IA | c3 Prompt Engineering | `src/data/lessons/ia-c3-prompting.ts` | `video.{fr,en,ha}` |
| IA | c4 IA dans les organisations | `src/data/lessons/ia-c4-organisations.ts` | `video.{fr,en,ha}` |
| IA | c5 Automatisation de tâches | `src/data/lessons/ia-c5-automatisation.ts` | `video.{fr,en,ha}` |
| IA | c6 Éthique et biais | `src/data/lessons/ia-c6-ethique.ts` | `video.{fr,en,ha}` |
| IA | c7 Outils IA pratiques | `src/data/lessons/ia-c7-outils.ts` | `video.{fr,en,ha}` |
| IA | c8 Évaluation finale | `src/data/lessons/ia-c8-evaluation.ts` | `video.{fr,en,ha}` |
| Données | d1 Nettoyer un fichier Excel | `src/data/lessons/da-d1-nettoyage.ts` | `video.{fr,en,ha}` |
| Données | d2 Tableaux croisés & indicateurs | `src/data/lessons/da-d2-tableaux-croises.ts` | `video.{fr,en,ha}` |
| Données | d3 Introduction à Python | `src/data/lessons/da-d3-python.ts` | `video.{fr,en,ha}` |
| Données | d4 Visualiser les résultats | `src/data/lessons/da-d4-visualisation.ts` | `video.{fr,en,ha}` |
| Données | d5 Raconter une analyse | `src/data/lessons/da-d5-raconter.ts` | `video.{fr,en,ha}` |
| Données | d6 Mini-projet données | `src/data/lessons/da-d6-mini-projet.ts` | `video.{fr,en,ha}` |
| Projet | p1 Cadrer un projet | `src/data/lessons/pm-p1-cadrage.ts` | `video.{fr,en,ha}` |
| Projet | p2 Prioriser le MVP | `src/data/lessons/pm-p2-mvp.ts` | `video.{fr,en,ha}` |
| Projet | p3 Organiser un sprint | `src/data/lessons/pm-p3-sprint.ts` | `video.{fr,en,ha}` |
| Projet | p4 Suivre les risques | `src/data/lessons/pm-p4-risques.ts` | `video.{fr,en,ha}` |
| Projet | p5 Rétrospective & amélioration | `src/data/lessons/pm-p5-retrospective.ts` | `video.{fr,en,ha}` |

---

# MODULE 1 — Intelligence Artificielle

### Vidéo d'introduction du cours (optionnelle)
> **FR** : Crée une vidéo de 3–4 minutes qui présente le module « Intelligence Artificielle » à des professionnels africains débutants (ONG, coopératives, petites structures). Explique ce qu'ils vont apprendre (comprendre l'IA, les LLMs, écrire de bons prompts, choisir des cas d'usage, automatiser, rester éthique) et pourquoi c'est utile dans leur travail quotidien. Ton motivant et concret, exemples africains (rapports bailleurs, terrain, FCFA). Termine en invitant à commencer par la première leçon.
> **EN** : Create a 3–4 minute video introducing the “Artificial Intelligence” module to beginner African professionals (NGOs, cooperatives, small organizations). Explain what they'll learn (understanding AI and LLMs, writing good prompts, choosing use cases, automation, ethics) and why it matters in their daily work. Motivating, concrete tone with African examples. End by inviting them to start the first lesson.

> **Module 1 — voir [`notebooklm-module-1-ia.md`](notebooklm-module-1-ia.md).** Ce document-la est
> genere depuis le contenu reel des lecons : il contient la source a charger dans NotebookLM
> (FR et EN) en plus des prompts, et son cadrage d'audience n'est plus limite a l'Afrique.
> Les prompts ci-dessous sont conserves pour memoire et ne doivent plus servir de reference.

## Leçon c1 — Introduction à l'IA
**Source** : sections Contenu + Exemple + Glossaire de la leçon c1.
> **FR** : Crée une vidéo explicative de 4–6 minutes pour des professionnels africains débutants. Objectif : comprendre ce que l'IA peut faire et ce qu'elle ne peut PAS faire. Couvre dans l'ordre : 1) une définition simple de l'IA, sans jargon ; 2) la différence entre IA spécialisée (qui fait une tâche) et l'idée d'IA « générale » ; 3) des exemples concrets déjà utilisés en Afrique (traduction, prévisions, mobile money, agriculture) ; 4) les limites et les fausses idées. Langage simple, phrases courtes, exemples FCFA/terrain. Termine par 1 chose que l'apprenant peut observer dans sa propre journée. Évite tout jargon non expliqué.
> **EN** : Create a 4–6 minute explainer video for beginner African professionals. Goal: understand what AI can and cannot do. Cover in order: 1) a simple, jargon-free definition of AI; 2) narrow AI (one task) vs the idea of “general” AI; 3) concrete examples already used in Africa (translation, forecasting, mobile money, agriculture); 4) limits and common misconceptions. Simple language, short sentences, field/FCFA examples. End with one thing the learner can spot in their own day. Avoid unexplained jargon.

## Leçon c2 — Comprendre les LLMs
**Source** : sections Contenu + Exemple + Glossaire de la leçon c2.
> **FR** : Crée une vidéo explicative de 4–6 minutes pour des professionnels africains. Objectif : comprendre comment fonctionnent ChatGPT et Claude. Couvre : 1) un LLM prédit le mot suivant, il ne « sait » pas (analogie du griot éloquent) ; 2) tokens et fenêtre de contexte expliqués simplement ; 3) les hallucinations et la date de coupure — la confiance n'est pas l'exactitude ; 4) biais et protection des données des bénéficiaires en contexte africain. Langage simple, exemples (rapport sur la nutrition au Sahel, données sensibles). Termine par la règle d'or : toujours vérifier. Évite le jargon non expliqué.
> **EN** : Create a 4–6 minute explainer for African professionals. Goal: understand how ChatGPT and Claude work. Cover: 1) an LLM predicts the next word, it doesn't “know” (eloquent griot analogy); 2) tokens and context window in plain terms; 3) hallucinations and knowledge cutoff — confidence ≠ accuracy; 4) bias and protecting beneficiaries' data in an African context. Simple language, concrete examples (a Sahel nutrition report, sensitive data). End on the golden rule: always verify. Avoid unexplained jargon.

## Leçon c3 — Prompt Engineering
**Source** : sections Contenu + Exemple + Glossaire de la leçon c3.
> **FR** : Crée une vidéo de 4–6 minutes. Objectif : rédiger des consignes (prompts) efficaces pour des tâches professionnelles. Couvre : 1) pourquoi un bon prompt change tout ; 2) la recette CONTEXTE + RÔLE + TÂCHE + FORMAT ; 3) un exemple « avant/après » sur une vraie tâche (rédiger un rapport bailleur, traduire une note) ; 4) l'itération : ajuster le prompt jusqu'au bon résultat. Langage simple, exemples africains. Termine par un modèle de prompt réutilisable. Évite le jargon non expliqué.
> **EN** : Create a 4–6 minute video. Goal: write effective prompts for professional tasks. Cover: 1) why a good prompt changes everything; 2) the recipe CONTEXT + ROLE + TASK + FORMAT; 3) a before/after example on a real task (drafting a donor report, translating a note); 4) iteration: refine the prompt until the result is right. Simple language, African examples. End with a reusable prompt template. Avoid unexplained jargon.

## Leçon c4 — IA dans les organisations africaines
**Source** : sections Contenu + Exemple + Glossaire de la leçon c4.
> **FR** : Crée une vidéo de 4–6 minutes. Objectif : choisir les bons cas d'usage de l'IA dans une organisation locale. Couvre : 1) commencer par un problème réel, pas par la technologie ; 2) évaluer valeur vs faisabilité (et la disponibilité des données) ; 3) commencer petit avec un projet pilote à faible risque ; 4) les erreurs fréquentes (vouloir tout automatiser, ignorer l'équipe). Exemples ONG/coopérative, budget FCFA. Termine par : comment choisir son premier cas d'usage cette semaine. Évite le jargon non expliqué.
> **EN** : Create a 4–6 minute video. Goal: choose the right AI use cases in a local organization. Cover: 1) start from a real problem, not the technology; 2) weigh value vs feasibility (and data availability); 3) start small with a low-risk pilot; 4) common mistakes (automating everything, ignoring the team). NGO/cooperative examples, FCFA budgets. End with how to pick a first use case this week. Avoid unexplained jargon.

## Leçon c5 — Automatisation de tâches
**Source** : sections Contenu + Exemple + Glossaire de la leçon c5.
> **FR** : Crée une vidéo de 4–6 minutes. Objectif : automatiser un processus simple sans perdre le contrôle humain. Couvre : 1) ce qu'on peut automatiser (tâches répétitives) vs ce qu'on garde humain ; 2) le principe « human-in-the-loop » (l'humain valide) ; 3) un exemple concret (tri/réponse à des messages, préparation d'un rapport) ; 4) les risques et garde-fous. Langage simple, exemples terrain. Termine par 1 tâche répétitive que l'apprenant pourrait automatiser. Évite le jargon non expliqué.
> **EN** : Create a 4–6 minute video. Goal: automate a simple process without losing human control. Cover: 1) what to automate (repetitive tasks) vs what stays human; 2) the “human-in-the-loop” principle (a human validates); 3) a concrete example (sorting/answering messages, preparing a report); 4) risks and safeguards. Simple language, field examples. End with one repetitive task the learner could automate. Avoid unexplained jargon.

## Leçon c6 — Éthique et biais en IA
**Source** : sections Contenu + Exemple + Glossaire de la leçon c6.
> **FR** : Crée une vidéo de 4–6 minutes. Objectif : utiliser l'IA de façon responsable. Couvre : 1) ce qu'est un biais et d'où il vient (données d'entraînement) ; 2) un exemple de biais en contexte africain (rural vs urbain, genre) ; 3) la protection des données personnelles des bénéficiaires ; 4) les contrôles essentiels avant d'utiliser un résultat. Ton clair et responsabilisant, exemples humanitaires. Termine par une mini-checklist éthique. Évite le jargon non expliqué.
> **EN** : Create a 4–6 minute video. Goal: use AI responsibly. Cover: 1) what bias is and where it comes from (training data); 2) a bias example in an African context (rural vs urban, gender); 3) protecting beneficiaries' personal data; 4) essential checks before trusting a result. Clear, responsible tone, humanitarian examples. End with a short ethics checklist. Avoid unexplained jargon.

## Leçon c7 — Outils IA pratiques
**Source** : sections Contenu + Exemple + Glossaire de la leçon c7.
> **FR** : Crée une vidéo de 4–6 minutes. Objectif : comparer les outils IA utiles pour apprendre, produire et analyser. Couvre : 1) les grandes familles d'outils (assistants de texte, traduction, analyse, image) ; 2) comment choisir selon le besoin, le coût et la connectivité ; 3) un exemple de combinaison d'outils pour une tâche réelle ; 4) prudence (coût en données, confidentialité, hors-ligne). Exemples africains, budget FCFA. Termine par : quel outil tester en premier selon son métier. Évite le jargon non expliqué.
> **EN** : Create a 4–6 minute video. Goal: compare AI tools useful for learning, producing and analyzing. Cover: 1) the main tool families (text assistants, translation, analysis, image); 2) how to choose by need, cost and connectivity; 3) an example combining tools for a real task; 4) caution (data cost, privacy, offline). African examples, FCFA budgets. End with which tool to try first by job role. Avoid unexplained jargon.

## Leçon c8 — Évaluation finale (récapitulatif)
**Source** : sections Contenu + l'ensemble du module (c1–c7).
> **FR** : Crée une vidéo récapitulative motivante de 4–5 minutes qui résume le module IA avant l'évaluation finale. Reprends les idées clés des leçons 1 à 7 : ce qu'est l'IA et ses limites, les LLMs, écrire de bons prompts, choisir un cas d'usage, automatiser avec un humain dans la boucle, et l'éthique. Ton encourageant. Termine en expliquant que l'évaluation valide les acquis et débloque le certificat numérique vérifiable. Évite le jargon non expliqué.
> **EN** : Create a motivating 4–5 minute recap video summarizing the AI module before the final assessment. Revisit the key ideas from lessons 1 to 7: what AI is and its limits, LLMs, writing good prompts, choosing a use case, automating with a human in the loop, and ethics. Encouraging tone. End by explaining the assessment validates learning and unlocks the verifiable digital certificate. Avoid unexplained jargon.

---

# MODULE 2 — Analyse de Données (niveau intermédiaire)

### Vidéo d'introduction du cours (optionnelle)
> **FR** : Crée une vidéo de 3–4 minutes présentant le module « Analyse de Données » à des professionnels africains (suivi-évaluation, coordination, coopératives). Explique le parcours : nettoyer les données, construire des indicateurs, découvrir Python, visualiser, raconter, puis un mini-projet complet. Ton concret et rassurant (« pas besoin d'être informaticien »), exemples terrain. Invite à commencer par la première leçon.
> **EN** : Create a 3–4 minute video introducing the “Data Analysis” module to African professionals (M&E, coordination, cooperatives). Explain the path: clean data, build indicators, discover Python, visualize, tell the story, then a full mini-project. Concrete, reassuring tone (“no need to be a programmer”), field examples. Invite them to start the first lesson.

## Leçon d1 — Nettoyer un fichier Excel
**Source** : sections Contenu + Exemple + Glossaire de la leçon d1.
> **FR** : Crée une vidéo de 4–6 minutes. Objectif : obtenir des données propres avant toute analyse. Couvre : 1) « garbage in, garbage out » — pourquoi nettoyer d'abord ; 2) les erreurs fréquentes (valeurs manquantes, doublons, formats incohérents) ; 3) corriger pas à pas en gardant une copie de l'original ; 4) les valeurs aberrantes : erreur ou réalité ? Exemple : dédoublonner une liste de bénéficiaires avant distribution. Outils gratuits (Excel/Sheets). Termine par 1 réflexe de nettoyage. Évite le jargon non expliqué.
> **EN** : Create a 4–6 minute video. Goal: get clean data before any analysis. Cover: 1) “garbage in, garbage out” — why clean first; 2) common errors (missing values, duplicates, inconsistent formats); 3) fix step by step while keeping a copy of the original; 4) outliers: error or reality? Example: de-duplicating a beneficiary list before a distribution. Free tools (Excel/Sheets). End with one cleaning reflex. Avoid unexplained jargon.

## Leçon d2 — Tableaux croisés et indicateurs
**Source** : sections Contenu + Exemple + Glossaire de la leçon d2.
> **FR** : Crée une vidéo de 4–6 minutes. Objectif : faire parler les données avec des indicateurs lisibles. Couvre : 1) qu'est-ce qu'un indicateur utile (total, taux) ; 2) le tableau croisé dynamique = un résumé automatique qui regroupe et compte ; 3) moyenne vs médiane et le piège des grandes valeurs ; 4) désagréger par région/genre pour ne pas masquer les inégalités. Exemple : fréquentation d'un programme par genre. Outils gratuits. Termine par 1 indicateur à calculer. Évite le jargon non expliqué.
> **EN** : Create a 4–6 minute video. Goal: make data speak with readable indicators. Cover: 1) what a useful indicator is (total, rate); 2) a pivot table = an automatic summary that groups and counts; 3) mean vs median and the big-values trap; 4) disaggregate by region/gender so inequalities aren't hidden. Example: program attendance by gender. Free tools. End with one indicator to compute. Avoid unexplained jargon.

## Leçon d3 — Introduction à Python
**Source** : sections Contenu (avec le snippet pandas) + Exemple + Glossaire de la leçon d3.
> **FR** : Crée une vidéo de 5–6 minutes qui démystifie Python pour des utilisateurs d'Excel. Objectif : lire un CSV et calculer l'essentiel sans peur du code. Couvre : 1) pourquoi Python quand on a déjà Excel (gros fichiers, automatisation, reproductibilité, gratuit) ; 2) les bases sans jargon (variable, bibliothèque) avec l'analogie de la recette ; 3) lire un CSV avec pandas (montre `pd.read_csv(...)`) ; 4) calculer une moyenne et un comptage, et interpréter. Exemple : un CSV de 50 000 réponses qui faisait planter Excel. Mentionne Google Colab gratuit. Rassure : pas besoin d'être informaticien. Évite le jargon non expliqué.
> **EN** : Create a 5–6 minute video demystifying Python for Excel users. Goal: read a CSV and compute the essentials without fearing code. Cover: 1) why Python when you already have Excel (big files, automation, reproducibility, free); 2) the basics without jargon (variable, library) using a recipe analogy; 3) reading a CSV with pandas (show `pd.read_csv(...)`); 4) computing a mean and a count, and interpreting it. Example: a 50,000-row CSV that crashed Excel. Mention free Google Colab. Reassure: no need to be a programmer. Avoid unexplained jargon.

## Leçon d4 — Visualiser les résultats
**Source** : sections Contenu + Exemple + Glossaire de la leçon d4.
> **FR** : Crée une vidéo de 4–6 minutes. Objectif : choisir le bon graphique pour la bonne question. Couvre : 1) partir de la question (comparer ? évoluer ? répartir ?) ; 2) les 3 graphiques de base — barres, courbe, camembert (avec modération) ; 3) rendre lisible et honnête (titre, axes, échelle non trompeuse, lisible en noir & blanc) ; 4) les pièges (axe tronqué, camembert surchargé, 3D inutile). Exemple : remplacer un camembert illisible par des barres triées. Outils gratuits, lecture sur téléphone. Termine par la règle « 1 graphique = 1 question ». Évite le jargon non expliqué.
> **EN** : Create a 4–6 minute video. Goal: pick the right chart for the right question. Cover: 1) start from the question (compare? trend? share?); 2) the 3 base charts — bar, line, pie (sparingly); 3) make it readable and honest (title, axes, non-misleading scale, works in black & white); 4) pitfalls (truncated axis, overloaded pie, useless 3D). Example: replacing an unreadable pie with sorted bars. Free tools, phone-friendly. End with the rule “1 chart = 1 question.” Avoid unexplained jargon.

## Leçon d5 — Raconter une analyse
**Source** : sections Contenu + Exemple + Glossaire de la leçon d5.
> **FR** : Crée une vidéo de 4–6 minutes. Objectif : transformer un résultat en décision. Couvre : 1) un chiffre n'a de valeur que s'il éclaire un choix (« et donc, on fait quoi ? ») ; 2) le message clé d'abord (BLUF) pour un décideur pressé ; 3) adapter au public (technicien vs directeur) ; 4) honnêteté et limites (petit échantillon, corrélation ≠ causalité). Exemple : passer d'un tableau brut à une note d'une page qui débloque une décision. Termine par : message clé + preuve + recommandation. Évite le jargon non expliqué.
> **EN** : Create a 4–6 minute video. Goal: turn a result into a decision. Cover: 1) a number only matters if it informs a choice (“so what do we do?”); 2) key message first (BLUF) for a busy decision-maker; 3) adapt to the audience (technician vs director); 4) honesty and limits (small sample, correlation ≠ causation). Example: going from a raw table to a one-page note that unlocks a decision. End with: key message + evidence + recommendation. Avoid unexplained jargon.

## Leçon d6 — Mini-projet données (capstone)
**Source** : sections Contenu + Exemple + l'ensemble du module (d1–d5).
> **FR** : Crée une vidéo de 5–6 minutes qui montre comment mener une petite analyse de bout en bout. Objectif : produire un rapport complet, clair et vérifiable. Couvre le fil rouge : 1) partir d'une question claire ; 2) nettoyer les données et construire des indicateurs (rappel des leçons 1 et 2, éventuellement Python) ; 3) une visualisation adaptée et un message clé + recommandation (leçons 4 et 5) ; 4) rendre le travail vérifiable (sources, méthode, limites). Exemple : un rapport d'une page sur une enquête de satisfaction. Insiste sur la reproductibilité. Évite le jargon non expliqué.
> **EN** : Create a 5–6 minute video showing how to run a small end-to-end analysis. Goal: produce a complete, clear, verifiable report. Cover the thread: 1) start from a clear question; 2) clean data and build indicators (recap lessons 1 and 2, optionally Python); 3) a fitting visualization and a key message + recommendation (lessons 4 and 5); 4) make the work verifiable (sources, method, limits). Example: a one-page report on a satisfaction survey. Stress reproducibility. Avoid unexplained jargon.

---

# MODULE 3 — Gestion de Projet (agile, adapté au contexte africain)

### Vidéo d'introduction du cours (optionnelle)
> **FR** : Crée une vidéo de 3–4 minutes présentant le module « Gestion de Projet » à des professionnels africains. Explique le parcours : cadrer un projet, prioriser le MVP, organiser un sprint, suivre les risques, faire une rétrospective. Présente la gestion de projet comme « du bon sens outillé », pas une bureaucratie. Exemples ONG/coopératives. Invite à commencer par la première leçon.
> **EN** : Create a 3–4 minute video introducing the “Project Management” module to African professionals. Explain the path: frame a project, prioritize the MVP, run a sprint, track risks, hold a retrospective. Present project management as “common sense, tooled,” not bureaucracy. NGO/cooperative examples. Invite them to start the first lesson.

## Leçon p1 — Cadrer un projet
**Source** : sections Contenu + Exemple + Glossaire de la leçon p1.
> **FR** : Crée une vidéo de 4–6 minutes. Objectif : cadrer un projet avant de se lancer. Couvre : 1) pourquoi le cadrage évite l'échec (un chantier sans plan) ; 2) définir l'objectif (SMART) et le vrai problème, pas la solution ; 3) identifier les parties prenantes (qui bénéficie, décide, finance, est impacté) ; 4) lister les contraintes (budget FCFA, temps, connectivité) et les résultats mesurables. Exemple : une ONG qui cadre un projet (point d'eau, alphabétisation) avant de dépenser. Termine par la fiche de cadrage 1 page. Évite le jargon non expliqué.
> **EN** : Create a 4–6 minute video. Goal: frame a project before starting. Cover: 1) why framing prevents failure (a building site with no plan); 2) define the objective (SMART) and the real problem, not the solution; 3) identify stakeholders (who benefits, decides, funds, is impacted); 4) list constraints (FCFA budget, time, connectivity) and measurable outcomes. Example: an NGO framing a project (borehole, literacy) before spending. End with the one-page framing sheet. Avoid unexplained jargon.

## Leçon p2 — Prioriser le MVP
**Source** : sections Contenu + Exemple + Glossaire de la leçon p2.
> **FR** : Crée une vidéo de 4–6 minutes. Objectif : tester l'essentiel d'abord. Couvre : 1) ce qu'est un MVP (la version minimale qui prouve la valeur) ; 2) la méthode MoSCoW (Must/Should/Could/Won't) ; 3) prioriser par valeur et effort (commencer par fort impact / faible effort) ; 4) éviter le piège du « tout faire ». Exemple : une coopérative qui teste un service d'infos prix par SMS avant une appli. Termine par : comment trouver son MVP. Évite le jargon non expliqué.
> **EN** : Create a 4–6 minute video. Goal: test what matters first. Cover: 1) what an MVP is (the minimal version that proves value); 2) the MoSCoW method (Must/Should/Could/Won't); 3) prioritize by value and effort (start high-impact / low-effort); 4) avoid the “do everything” trap. Example: a cooperative testing an SMS price-info service before an app. End with how to find your MVP. Avoid unexplained jargon.

## Leçon p3 — Organiser un sprint
**Source** : sections Contenu + Exemple + Glossaire de la leçon p3.
> **FR** : Crée une vidéo de 4–6 minutes. Objectif : organiser un cycle court avec des livrables clairs. Couvre : 1) le principe du sprint (cycle court et régulier de 1–2 semaines) ; 2) l'objectif de sprint et le backlog (ce qu'on s'engage à livrer) ; 3) le tableau Kanban (À faire / En cours / Fait) avec des outils simples (tableau mural, WhatsApp) ; 4) les rituels (point quotidien court, revue de fin de sprint) adaptés au terrain et au hors-ligne. Exemple : une équipe terrain en sprints d'une semaine. Termine par : planifier son premier sprint. Évite le jargon non expliqué.
> **EN** : Create a 4–6 minute video. Goal: organize a short cycle with clear deliverables. Cover: 1) the sprint principle (a short, regular 1–2 week cycle); 2) the sprint goal and backlog (what you commit to deliver); 3) the Kanban board (To do / Doing / Done) using simple tools (wall board, WhatsApp); 4) rituals (short daily check-in, end-of-sprint review) adapted to the field and offline work. Example: a field team running one-week sprints. End with planning your first sprint. Avoid unexplained jargon.

## Leçon p4 — Suivre les risques
**Source** : sections Contenu + Exemple + Glossaire de la leçon p4.
> **FR** : Crée une vidéo de 4–6 minutes. Objectif : anticiper les blocages avant qu'ils n'arrivent. Couvre : 1) ce qu'est un risque (événement incertain) vs un problème ; 2) les risques courants en contexte africain (retard de décaissement bailleur, saison des pluies, connectivité, sécurité, disponibilité) ; 3) évaluer avec probabilité × impact pour prioriser ; 4) la mitigation et le suivi (un responsable par risque, un registre léger). Exemple : un projet de distribution menacé par la pluie et un retard de financement → un plan B sauve les délais. Termine par le mini-registre des risques. Évite le jargon non expliqué.
> **EN** : Create a 4–6 minute video. Goal: anticipate blockers before they hit. Cover: 1) what a risk is (an uncertain event) vs a problem; 2) common risks in an African context (donor disbursement delays, rainy season, connectivity, security, availability); 3) assessing with probability × impact to prioritize; 4) mitigation and tracking (one owner per risk, a light register). Example: a distribution project threatened by rain and a funding delay → a plan B saves the timeline. End with the mini risk register. Avoid unexplained jargon.

## Leçon p5 — Rétrospective et amélioration
**Source** : sections Contenu + Exemple + Glossaire de la leçon p5.
> **FR** : Crée une vidéo de 4–6 minutes. Objectif : progresser après chaque cycle. Couvre : 1) pourquoi la rétrospective (amélioration continue, comme le débriefing après un match) ; 2) un format simple et sans blâme (Ce qui a marché / Ce qui n'a pas marché / Ce qu'on change) dans un climat de confiance ; 3) passer des leçons aux actions (1–2 améliorations concrètes) ; 4) ancrer l'amélioration continue (suivre les actions, célébrer les progrès). Ton bienveillant, exemples d'équipe terrain. Termine par : animer sa première rétro. Évite le jargon non expliqué.
> **EN** : Create a 4–6 minute video. Goal: improve after each cycle. Cover: 1) why retrospectives (continuous improvement, like a post-match debrief); 2) a simple, blameless format (What worked / What didn't / What we change) in a climate of trust; 3) turning lessons into actions (1–2 concrete improvements); 4) anchoring continuous improvement (track actions, celebrate progress). Warm tone, field-team examples. End with running your first retro. Avoid unexplained jargon.

---

## 3. Après génération — checklist d'intégration

- [ ] Vidéo FR générée, publiée (YouTube *non répertorié*), URL d'embed collée dans `video.fr`
- [ ] Vidéo EN générée, publiée, URL collée dans `video.en`
- [ ] `video.ha` : laissé vide **ou** réutilise la vidéo FR (décision projet)
- [ ] Vérifier le rendu dans l'app (onglet **Vidéo** de la leçon)
- [ ] Supprimer le commentaire `// TODO` au-dessus du bloc `video` une fois rempli
- [ ] `npm run build` OK avant commit
