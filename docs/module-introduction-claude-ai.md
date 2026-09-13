# Module — Introduction a Claude AI (plan)

Statut : decoupage **valide**. Les six chapitres sont rediges et branches dans l'app en FR/EN/HA
(module en `status: 'draft'`). Restent les videos. Format pedagogique : style DataCamp
= 1 chapitre ≈ 1 video courte (~5 min, produite avec Hyperframes) + texte lisible
+ 1 exercice pratique + 1 quiz.

## 1. Fiche module

| Champ | Valeur proposee |
| --- | --- |
| `slug` | `introduction-claude-ai` |
| `rubriqueId` | `rubrique-ai-data` (IA & Donnees) |
| Titre | Introduction a Claude AI |
| Sous-titre | Utiliser un assistant IA au quotidien |
| Niveau | Debutant (aucun prerequis technique) |
| Chapitres | 6 (5 chapitres + evaluation) |
| Duree totale | ~1h 15min |
| Gratuit | oui |
| Certificat | oui (a la reussite de l'evaluation finale) |

Public : etudiants et professionnels francophones d'Afrique de l'Ouest et du Centre,
souvent sur mobile, connexion limitee. Promesse : **a la fin du module, l'apprenant
sait ouvrir Claude, formuler une demande claire, lui faire traiter ses propres
documents, et verifier le resultat avant de l'utiliser.**

## 2. Structure des chapitres

Chaque chapitre suit le meme gabarit :
video 5 min -> 3 a 4 sections de texte -> exemple concret -> exercice guide ->
quiz 2-3 questions -> question de reflexion -> glossaire.

### cl1 — Qu'est-ce que Claude ? (12 min)
- Ce qu'est Claude (assistant conversationnel d'Anthropic) et ce qu'il n'est pas
  (ni moteur de recherche, ni oracle, ni humain).
- Les 3 facons d'y acceder : claude.ai, application mobile, application bureau.
- Gratuit vs payant : ce qu'on peut faire sans payer.
- Premiere conversation : ouvrir, ecrire, relancer.
- **Exercice** : creer un compte et poser 3 questions liees a son propre metier.

### cl2 — Bien formuler sa demande (15 min)
- Les 4 ingredients d'une bonne consigne : **contexte, tache, format, exemple**.
- Avant/apres : la meme demande, vague puis precise, avec les 2 resultats.
- Relancer et corriger : "reformule plus court", "ajoute un tableau".
- **Exercice** : reecrire une demande floue avec les 4 ingredients et comparer.

### cl3 — Travailler avec ses propres documents (15 min)
- Deposer un PDF, une image, un tableau ; ce que Claude peut en faire.
- 3 usages : resumer, extraire des informations precises, traduire.
- Les Projects : ranger un contexte reutilisable au lieu de tout recoller.
- **Exercice** : faire resumer un vrai document de travail en 5 points.

### cl4 — Les usages concrets au quotidien (15 min)
- Redaction : mail, compte rendu, note de service.
- Traduction et adaptation de ton (francais / anglais / langues locales).
- Preparation : ordre du jour, argumentaire, plan de formation.
- Petite analyse : lire un tableau simple et en tirer 3 constats.
- **Exercice** : produire un livrable reel de son travail, de bout en bout.

### cl5 — Limites, verification et confidentialite (13 min)
- Les erreurs plausibles (hallucinations) : pourquoi et comment les reperer.
- Information datee : ce que Claude ne sait pas.
- Donnees a ne jamais coller (identites, dossiers medicaux, mots de passe).
- Le reflexe de verification en 3 questions avant d'utiliser une reponse.
- Quand ne PAS utiliser l'IA.
- **Exercice** : faire produire un texte a Claude et verifier 2 affirmations.

### cl6 — Evaluation finale (10 min, sans video)
- 10 questions couvrant les 5 chapitres + 1 mise en situation.
- Emission du certificat numerique.

## 3. Briefs video (Hyperframes)

> **Base de production : [docs/hyperframes/CONTEXTE-VIDEO.md](hyperframes/CONTEXTE-VIDEO.md).**
> Ce document de reference fait autorite pour toutes les videos (charte convertie au format video,
> carte presentateur, sous-titres, contrat HyperFrames, livraison). Les briefs par episode
> ci-dessous s'y accrochent et ne repetent pas ce qu'il contient — ils sont anterieurs et doivent
> etre realignes dessus avant tournage.

Format commun : 16:9, ~5 min, voix off FR, sous-titres incrustes, captures d'ecran
reelles de Claude annotees, charte Karatou. Livrable : MP4 + SRT.

| # | Titre video | Duree | Fil narratif |
| --- | --- | --- | --- |
| cl1 | Rencontrer Claude | 5:00 | probleme quotidien -> demo ouverture -> 1re reponse -> ce qu'il ne faut pas en attendre |
| cl2 | Une bonne demande en 4 ingredients | 5:00 | prompt vague + resultat decevant -> ajout des 4 ingredients a l'ecran -> resultat exploitable |
| cl3 | Vos documents, vos reponses | 5:00 | depot d'un PDF -> resume -> extraction -> Project |
| cl4 | 4 taches, 4 gains de temps | 5:00 | 4 mini-demos chronometrees |
| cl5 | Verifier avant de croire | 5:00 | une reponse fausse mais credible -> methode de verification -> regles de confidentialite |

## 4. Points d'implementation (a faire apres validation)

- Ajouter le module dans `src/data/mockData.ts` (`modules[]`, `courses[]`) —
  attention : les chaines de ce fichier sont ecrites **sans accents**.
- Ecrire les lecons au format `LessonContent` (`src/data/lessonContent.ts`) dans
  `src/data/lessons/introduction-claude-ai/` (un fichier par chapitre), puis les
  enregistrer dans
  `authoredLessons` (`src/data/localizedContent.ts`) sous les cles
  `introduction-claude-ai/cl1` ... `cl6`.
- Les trois langues (`fr`, `en`, `ha`) sont obligatoires par le type : demarrer en
  FR et dupliquer temporairement pour EN/HA.
- Les videos Hyperframes devront etre hebergees avec une URL **embarquable**
  (le champ `video` attend une URL d'embed, pas un fichier local).
