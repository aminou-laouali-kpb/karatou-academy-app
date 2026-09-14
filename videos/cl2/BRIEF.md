---
workflow: general-video
flow: companion
storyboard: yes
aspect: 1920x1080
narration: yes
destination: website
language: fr
---

## Intent

Épisode `cl2` du module `introduction-claude-ai` — « Bien formuler sa demande ».

**Ce que la vidéo doit obtenir.** À la fin des 300 s de beats, l'apprenant doit être capable
d'écrire, sur une tâche à lui, une consigne de quatre à six lignes contenant les quatre
ingrédients (contexte, tâche, format, exemple), puis d'envoyer une relance au lieu d'accepter la
première réponse. Le comportement visé est un geste, pas une connaissance : il est vérifié par
l'exercice du chapitre, auquel la dernière phrase de voix off renvoie.

**Promesse, énoncée à `0:09,5` de beats au plus tard (master 13,1 s), frame `02-promesse`, plafond `0:12`.**
La phrase d'amorce « Le problème n'est pas l'outil. » la précède dans le même plan ; `SCRIPT.md` la verrouille
à **six mots maximum**, sous peine de faire franchir le plafond à la promesse.
Formulation gelée, dérivée d'`objective`, reprise **mot pour mot** sur la carte de rappel de B6 :

> Vous saurez écrire une consigne précise, puis corriger la réponse.

**Le fil narratif est unique et vient du champ `example`** : le responsable RH d'une PME de vingt
personnes à Cotonou qui doit publier une offre pour un poste de comptable. Ce cas ouvre B1, porte
les quatre ingrédients de B3, est joué de bout en bout en B4 et est refermé en B6. Aucun second cas
n'est introduit. L'artefact du chapitre précédent rappelé avant 0:10 est la réponse fade obtenue à
l'exercice de `cl1` (« Rédige un mail poli pour relancer un partenaire qui n'a pas répondu depuis
deux semaines. ») : c'est le seul emprunt à `cl1`.

**Principe de mise en scène.** Les quatre ingrédients ne sont pas racontés : ils sont **tapés à
l'écran, un par un, dans la même conversation**, et la consigne grandit sous les yeux de
l'apprenant. Quatorze des vingt-neuf plans de contenu sont des captures réelles de `claude.ai`,
soit 186,5 s sur 300,0 s (62,2 %). Aucune maquette.

**Ce que la vidéo ne fait pas, parce que le texte de la leçon s'en charge.**

- Elle ne traite pas le second cas de la leçon (la coopérative de riziculteurs près de Bamako,
  `content[2]`) : ce avant/après reste au texte, et son absence à l'écran protège le seuil de
  non-recouvrement à n = 12.
- Elle ne déroule pas les quatre relances de `content[3]` (raccourcir, changer de ton, rectifier un
  fait, demander trois versions) : elle n'en montre **qu'une**, la plus rentable, celle qui précède
  la rédaction, et son effet à l'écran.
- Elle n'énumère pas le glossaire (six entrées), ne développe pas la constitution d'un fichier de
  consignes réutilisables au-delà d'une phrase en B6, et ne reprend ni le quiz ni la question de
  réflexion.
- Elle ne pose aucun chiffre de gain de temps. Le texte de la leçon en contient trois (« deux heures
  par semaine », « quarante secondes de plus », « cinq minutes ») : aucun n'est prononcé ni affiché,
  § 10 du document de référence les interdisant en vidéo.

## Assets

Chemins relatifs à la racine du projet `videos/cl2/`. Tout est en dur dans le paquet : aucun fetch
réseau au rendu.

### Marque et présentateur

| Fichier | Spécification | Statut |
| --- | --- | --- |
| `assets/brand/logo-karatou-academy.png` | PNG 32 bits alpha, ≥ 720 × 720, ratio 1:1, sans aplat blanc, lisible sur `#0A1628` et sur `#FFFFFF`. Employé en `<img>`, `alt = Karatou Academy`. Filigrane (tuile seule 140 px, rayon 40 px, x 120, y 120) de la frame `01` à la frame `28` ; lockup de clôture sur `99-end-card`. | [à fournir] |
| `assets/presenter/aminou-laouali-abdou.jpg` | 1:1 exact, ≥ 1080 × 1080, JPEG q90 sRGB < 400 Ko, EXIF supprimé, plan poitrine, fond uni `#F3F4F6`, sans upscaling. Sert aux deux cartes (`00` image 360 px, `99` image 180 px). | [à fournir] |

### Polices

| Fichier | Spécification |
| --- | --- |
| `assets/fonts/Inter-Regular.woff2` | Inter 400 |
| `assets/fonts/Inter-Medium.woff2` | Inter 500 |
| `assets/fonts/Inter-SemiBold.woff2` | Inter 600 |
| `assets/fonts/Inter-Bold.woff2` | Inter 700 |
| `assets/fonts/Literata-Variable.woff2` | Literata variable 400→700, axe `opsz` |
| `assets/fonts/NotoSans-{Regular,Medium,SemiBold,Bold}.woff2` | Repli piste `ha` si le test de glyphes ɓ ɗ ƙ ƴ échoue au build |
| `assets/fonts/NotoSerif-Variable.woff2` | Repli piste `ha` de Literata |

`@font-face` local dans chaque `<template>`, `font-display: block`. Sans ces fichiers, le lint
échoue en `font_family_without_font_face` et le rendu cloud échoue fermé.

### Plan de situation (type E, unique)

| Fichier | Ce qu'il faut photographier |
| --- | --- |
| `assets/situations/cl2-e01-bureau-recrutement.jpg` | JPEG q90 sRGB, 1920 × 1080 exactement, EXIF supprimé. Plan fixe, légèrement plongeant, sur un poste de travail : une pile de candidatures imprimées à gauche, un ordinateur portable allumé mais illisible à droite (écran hors foyer ou éteint), un stylo. **Aucun visage, aucune main reconnaissable, aucun logo, aucun texte lisible sur les feuilles.** Lumière naturelle, fond neutre. Assombri à la composition par `rgba(10,22,40,0.6)` ; tout texte posé dessus reçoit une plaque `rgba(10,22,40,0.95)`. | [à fournir] |

### Captures d'écran de `claude.ai` (type A)

Treize captures, **toutes réelles**, PNG. Protocole commun, § 5.3 du document de référence :
fenêtre 1280 × 720, zoom navigateur 200 %, DPR 2× → export **2560 × 1440**. Le contenu occupe au
plus deux tiers du cadre à la composition ; toute ligne à lire est **retapée en surimpression**
(Inter ≥ 80 px sur `--surface-navy-95`) dans la langue de la version, la capture ne servant que de
preuve. Navigateur propre : pas de favoris, pas d'extensions, pas de notification, pas de barre
d'état, pas de panneau de compte, pas de barre latérale des conversations, aucune URL à jeton.

Les captures `02` à `09` proviennent d'**une seule session ininterrompue**, même fenêtre, même zoom,
même position de défilement, la consigne grandissant ligne par ligne : elles s'empilent au montage
sans saut de cadre.

| Fichier | Frame(s) | Ce qui doit être à l'écran |
| --- | --- | --- |
| `assets/captures/cl2-01-mail-relance-ch1.png` | `01` | Conversation du chapitre 1 rejouée. En haut, la consigne mot pour mot : « Rédige un mail poli pour relancer un partenaire qui n'a pas répondu depuis deux semaines. » Dessous, les deux premiers paragraphes de la réponse, cadrés serré, dont une formule de politesse standard type « nous nous permettons de revenir vers vous ». Aucun nom de destinataire, aucune organisation. |
| `assets/captures/cl2-02-offre-consigne-vague.png` | `04` | Zone de saisie seule, zoomée, curseur visible, bouton d'envoi visible, aucune suggestion affichée. Contenu : « Rédige une offre d'emploi pour un comptable. » — une ligne, rien d'autre. |
| `assets/captures/cl2-03-offre-generique.png` | `05`, `19` (moitié gauche) | L'annonce produite par cette consigne vague : titre générique, paragraphe d'accroche interchangeable, liste de qualités passe-partout. Doivent être visibles à l'image l'absence de secteur, l'absence de taille d'entreprise et l'absence de contrainte de poste. Cadrer l'annonce entière, quitte à réduire le zoom d'un cran — même cadrage exact que `cl2-09` pour le split de la frame `19`. |
| `assets/captures/cl2-04-consigne-contexte.png` | `09` | Même conversation, nouveau message en cours de frappe. Seule la ligne de contexte est tapée : « Je recrute pour une PME béninoise de 20 personnes qui distribue du matériel agricole, poste de comptable unique, donc la personne sera seule sur la fonction et devra être autonome. » Rien d'autre dans la zone de saisie. |
| `assets/captures/cl2-05-consigne-tache.png` | `11` | La même zone de saisie, une ligne de plus : « Rédige l'offre d'emploi. » Le bloc de contexte reste visible au-dessus, inchangé. |
| `assets/captures/cl2-06-consigne-format.png` | `13` | Une ligne de plus : « Format : une page maximum, structurée en quatre parties — l'entreprise, la mission, le profil, comment postuler. Ton : direct, concret, pas de langue de bois RH. » Les deux blocs précédents restent visibles. |
| `assets/captures/cl2-07-consigne-exemple.png` | `15` | Une ligne de plus : « Voici notre offre de l'an dernier pour un poste de logisticien, qui nous avait amené de bons profils : » suivie du bloc collé. **Le bloc collé est masqué à l'image par un aplat `#111827`** : il n'est jamais lu. Prévoir la marge du masque à la prise de vue. |
| `assets/captures/cl2-08-consigne-complete.png` | `16` | La consigne entière, six lignes, relue avant envoi, zone de saisie cadrée en entier, bouton d'envoi visible. Bloc collé toujours masquable au même endroit. |
| `assets/captures/cl2-09-offre-enrichie.png` | `17`, `19` (moitié droite) | L'annonce produite par la consigne complète, cadrée sur ses quatre parties nommées (l'entreprise, la mission, le profil, comment postuler) et sur la phrase qui décrit le poste réel — être seul sur la fonction comptable. Même cadrage exact que `cl2-03`. |
| `assets/captures/cl2-10-offre-mobile.png` | `18` | **Capture de l'application mobile**, écran 1080 × 2400 [à valider], même conversation, l'annonce relue en défilement. Barre d'état masquée, aucune notification, aucun avatar de compte. Cadrer la partie « le profil ». |
| `assets/captures/cl2-11-relance-informations-manquantes.png` | `22` | Retour au bureau, même conversation. Zone de saisie contenant, seule, la relance mot pour mot : « Avant de rédiger, dis-moi quelles informations te manquent. » |
| `assets/captures/cl2-12-questions-de-claude.png` | `23` | La réponse à cette relance : la liste des questions posées par Claude. Trois questions au moins doivent être lisibles, chacune correspondant à un trou réel de la consigne (fourchette de rémunération, date de prise de poste, canal de candidature). Aucune donnée identifiante dans les questions. |
| `assets/captures/cl2-13-corrections-empilees.png` | `24` | **Contre-exemple.** Un fil réel où sept corrections successives ont été empilées sur une réponse hors sujet : la colonne de messages courts est visible, et le dernier résultat contredit la première demande. Cadrer sur l'enchaînement, pas sur le texte final. |

### Voix off

| Fichier | Spécification |
| --- | --- |
| `assets/voix/cl2-fr.wav` | 48 kHz / 24 bits / mono. Voix humaine. 245,0 s parlées, 470 à 490 mots. Chaîne de traitement § 7.4. |
| `assets/voix/cl2-en.wav` | Idem. Humaine ou synthèse haut de gamme relue intégralement. |
| `assets/voix/cl2-ha.wav` | Idem. **Humaine, locuteur natif obligatoire.** Budget, délai et relecteur : [à fournir]. |

Un `<audio id="vo">` par entrée `index-fr.html` / `index-en.html` / `index-ha.html` : sans `id`, le
rendu est muet et `--batch` ne fait pas varier la piste.

## Customizations

Ne figure ici que ce qui dévie du gabarit commun pour cet épisode.

1. **Quatre unités en B3, et une carte de rappel scindée en deux plans.** Le § 2.3 autorise deux à
   quatre unités ; les quatre ingrédients imposent le maximum. Réunir sur un seul plan la promesse
   (78 signes) et les quatre points aurait donné 111 signes sur 5 lignes, au-dessus du plafond de
   90 signes et de la limite de 3 lignes du § 2.4. **Aucune dérogation n'est demandée** : B6 porte
   deux plans consécutifs, chacun sous les deux plafonds.
   - frame `26a`, 6,0 s — rappel actif exigé par le § 2.3.5 (« Quels étaient les quatre
     ingrédients ? », 2,0 s de silence), puis la promesse réaffichée mot pour mot : 1 titre +
     1 ligne, **78 signes**.
   - frame `26b`, 7,0 s — les quatre points révélés au rythme de la voix, un mot chacun :
     « Contexte. Tâche. Format. Exemple. », 2 lignes, **33 signes**. Les quatre restent visibles
     ensemble **≥ 4,0 s** (de 2,5 s à 7,0 s du plan), au-delà du minimum du § 2.3.3.
   Les deux plans sont sans sous-titre incrusté : le texte affiché *est* le texte prononcé, donc
   aucune information n'est portée par la seule voix off (§ 6). Les blocs correspondants figurent
   au `.srt` livré en piste CC.

1 bis. **Dérogation bornée au plafond de 90 signes visibles (§ 2.4), pour les seules surimpressions
   de capture.** Le § 5.3 impose de retaper en surimpression toute ligne à lire, et le principe de
   mise en scène de l'épisode est précisément de taper les quatre ingrédients à l'écran. Sur les
   frames `09`, `13` et `15`, ce bloc dépasse 90 signes. Le plafond du § 2.4 s'applique au **texte de
   composition** — surtitre, titre, lignes, cartes, annotations — et non au **bloc de citation** que
   forme la consigne retapée. Régime imposé en compensation, sur ces trois plans seulement : bloc
   posé entier et figé (entrée ≤ 300 ms puis immobile), lecture guidée par surlignage progressif,
   **une seule ligne appelée à la fois, tenue ≥ 2,5 s**, **au plus deux appels par plan**, et tenue
   ≥ 4,0 s après la dernière frappe sur `15`. Hors bloc de citation, aucun plan de l'épisode ne
   dépasse 90 signes.

2. **Le plan de type E est placé en fin de B1, pas en tête.** L'ordre imposé du beat est inversé :
   rappel de l'artefact de `cl1` (frame `01`), puis promesse (frame `02`), puis situation (frame
   `03`). Motif : la promesse doit être énoncée avant 0:12 et le rappel de `cl1` avant 0:10 ; les
   placer d'abord libère la situation, qui sert alors de rampe vers la consigne vague de B2. Durée E
   : 4,5 s sur un plafond de 20 s.

3. **Un seul plan de type C dans l'épisode** (frame `06`, 9,0 s, soit 3,0 % contre un plafond de
   15 %) : le schéma « demande vague → moyenne ». Trois états successifs, chacun ≥ 2,5 s, aucun
   mouvement pendant la lecture. Le reste de l'explication passe par des captures.

4. **Masquage `#111827` sur le bloc d'exemple collé**, frames `15` et `16`. C'est le seul masquage
   de l'épisode et il est éditorial autant que légal : l'apprenant doit comprendre qu'on colle un
   texte à soi, pas lire celui-là. Le masque est un aplat plein, doublé d'un cadre, jamais un flou.

5. **Split avant/après en frame `19`.** Deux captures réelles côte à côte, chacune sur une moitié de
   cadre, séparées par un filet 4 px `--hairline-white` et non par une ombre. Cadrages identiques
   obligatoires (`cl2-03` et `cl2-09`), sans quoi la comparaison ne se lit pas. Deux surtitres
   Inter 65 px, « Avant » et « Après ». Le pictogramme de validation `#10B981` doublé d'une coche
   n'apparaît que sur la moitié droite, une seule fois, 4,0 s.

6. **Prédiction de B5 avec silence tenu**, frame `21` : question affichée, **2,5 s sans parole**,
   puis réponse. Le silence est décompté du budget de 55,0 s sans parole et ne doit pas être
   comblé au montage.

7. **Capture mobile unique**, frame `18`. Le reste de l'épisode est en bureau. L'insert mobile est
   verbalisé (« la même annonce, relue sur téléphone ») pour ne pas passer pour un changement
   d'outil.

8. **Piste `ha` — condensation consignée.** Le § 8 n'admet la condensation que sur les exemples.
   La ligne de format de la frame `13` est une **consigne**, pas un exemple : elle est donc retapée
   intégralement en haoussa, la contrainte de place étant réglée par le régime de lecture guidée du
   point 1 bis. La seule condensation admise porte sur le **bloc collé de la frame `15`**, qui est le
   seul véritable exemple de l'épisode. Elle sera consignée ici avant rendu, avec son libellé exact.
   Les consignes tapées à l'écran restent couvertes à 100 % dans les trois langues.

9. **Aucun chiffre de durée ni de gain n'est prononcé ni affiché**, alors que le texte de la leçon en
   porte trois. Les cartes `20` et `26` sont rédigées sans quantité. Cette contrainte est propre à
   l'épisode parce que son argumentaire naturel est un argumentaire de temps gagné.

10. **`presenterPhotoPosition`** : défaut `50% 30%`, déclaré comme variable de composition et dans
    les trois fichiers `copy/cl2.<fr|en|ha>.json`. À corriger si le cadrage de la photo
    livrée le demande [à valider].

11. **Mentions légales, frame `28`** : « Claude et Anthropic sont des marques de leurs détenteurs.
    Karatou Academy n'est pas affiliée à Anthropic. » suivi du mois et de l'année de production
    [à fournir]. 80 px, trois lignes, sans sous-titre, sans voix off, 3,00 s exactes imputées sur B6.

## Notes

### Tournage des captures

- **Une seule session pour la série `02` → `09`.** La conversation est jouée d'un trait, du premier
  message vague jusqu'à l'annonce enrichie. Si la fenêtre est redimensionnée, si le zoom bouge ou
  si la page défile entre deux prises, l'empilement des frames `09` → `17` saute et la démonstration
  s'effondre. Refaire la série entière plutôt que raccorder ; ne jamais réduire le zoom pour faire
  tenir un texte : cadrer les deux moitiés au même zoom. `cl2-09` doit rester cadré à l'identique
  de `cl2-03`, sans quoi la frame `19` est perdue en plus de la série.
- **Le compte utilisé pour la prise de vue est un compte de tournage**, sans historique, sans nom
  réel, sans document déposé. Vérifier avant chaque export : pas de panneau de compte, pas de barre
  latérale, pas d'URL à jeton, pas de notification système, pas de favori.
- **Le texte collé en frame `15` est fabriqué pour le tournage** (une fausse offre de logisticien),
  et il est masqué à l'image de toute façon. Ne jamais coller un document d'organisation réelle,
  même masqué : le masque peut sauter au recadrage.
- La PME de Cotonou et son responsable RH sont des **personas du champ `example`**. Aucun nom
  d'entreprise, aucune ville autre que Cotonou, aucun montant de salaire ne doit apparaître à
  l'écran — y compris dans les questions de Claude en frame `23`, à relire avant export.
- **Aucune capture tarifaire.** Si un bandeau de limite d'usage ou d'abonnement apparaît pendant la
  session, la prise est perdue : refaire, ne pas masquer.

### Pièges de montage

- **Le seuil de non-recouvrement est le risque principal de cet épisode.** Le texte de `cl2` est
  dense et le sujet invite à le paraphraser. Règle de travail : le script de voix off dit ce que la
  capture montre, il ne redit pas ce que le texte explique. Les seuls emprunts mot pour mot admis
  sont les consignes tapées à l'écran, la promesse et `practice.title`. Contrôle n = 12 à passer sur
  le `.srt` avant enregistrement des versions EN et HA, pas après.
- **Une annotation à la fois, ≥ 2,5 s, doublée d'une forme.** La frame `05` en porte trois
  successives sur 12,0 s : elles ne doivent jamais coexister. Idem frame `23`, trois questions
  désignées l'une après l'autre sur 14,0 s.
- **Or interdit partout sauf sur le CTA de `99-end-card`.** L'épisode parle de « bonne » consigne :
  aucune tentation de marquer la réussite en doré. Le validé est `#059669` sur clair,
  `#10B981` sur navy, toujours doublé d'une coche.
- **Rien d'essentiel dans une animation.** Les lignes de consigne apparaissent en geste standard
  (300 ms, `cubic-bezier(0, 0, 0.58, 1)`, cascade 120 ms) puis restent figées. Aucune machine à
  écrire, malgré la tentation évidente sur un épisode qui montre de la frappe.
- **Zone de sous-titres exclusive, y 700 → 1080.** Les captures des frames `15`, `17` et `19` sont
  les plus hautes de l'épisode : vérifier qu'aucune ligne retapée ne descend sous y 700.
- Six transitions plein cadre seulement, aux frontières de beats : t = 3,6 · 25,6 · 63,6 · 165,6 ·
  235,6 · 281,6 s. Écarts 22,0 / 38,0 / 102,0 / 70,0 / 46,0 s, tous au-dessus du minimum de 8 s.
  Toutes les autres liaisons sont des coupes franches.

### Voix off et sous-titres

- Budget : **245,0 s parlées, 470 à 490 mots, 115 à 120 mots/min**, mesuré par timecodes sur les
  segments parlés. Les 55,0 s sans parole se répartissent en démonstrations 30 s, respirations 9 s,
  récapitulation 7 s (frames `26a` et `26b`), prédiction et rappel actif 6 s, mentions légales 3 s —
  la frame `28` étant muette par obligation (§ 10). Hors plage, on coupe du texte : on ne ralentit
  pas la diction.
- Termes anglais : **deux**, dits une fois chacun, glosés, puis abandonnés — **prompt** → « consigne »
  (frame `09`) et **briefing** glosé sur place « ce qu'on donne à un collègue qui découvre le dossier »
  (frame `07`). Chacun doit figurer explicitement au `voiceover` de sa frame dans `SCRIPT.md`. Comptage des termes techniques nouveaux : consigne, relance, consigne réutilisable —
  trois sur cinq minutes, sous le plafond d'un par minute.
- Claude se prononce /klod/. Aucun nom ni numéro de modèle n'est prononcé ni affiché.
- 18 mots maximum par phrase, vérifié sur `SCRIPT.md`. Chaque ingrédient est dit deux fois, la
  seconde autrement : une fois sur la carte de l'unité, une fois pendant la frappe.
- 31 signes par ligne de sous-titre, 62 par réplique. Ne jamais couper `claude.ai` en fin de ligne.
  Frames `26` et `28` : aucun sous-titre incrusté.

### Recette

- **Durée.** Somme des vingt-neuf frames de contenu = **300,0 s exactes**. Master = 3,60 + 300,0 +
  2,40 = **306,0 s**. La carte de clôture démarre à 303,600 s du master. Toute dérive se corrige sur les
  frames `09` (17,0 s), `15` (20,0 s), `17` (17,0 s) et `19` (19,0 s), qui ont de la marge de lecture,
  jamais sur `28` (3,00 s gelées) ni sur `26a`, `26b` et les cartes.
- **Parts de plans.** A = 186,5 s (62,2 %, cible 60–65 %) · B = 100,0 s (33,3 %) · C = 9,0 s (3,0 %)
  · E = 4,5 s (1,5 %). Recalculer après tout arbitrage de durée : le plancher A ≥ 50 % est opposable.
- **Vignette livrée** `introduction-claude-ai_cl2_fr_v1_cover.jpg`, prise à t = 5,70 s du master,
  soit +2,10 s dans la frame `01` : la capture du mail de relance doit y être stable et entièrement
  révélée. Ne pas confondre avec le poster de recette du harnais de la carte présentateur.
- **Contrôle de verbalisation (P1).** L'épisode est presque entièrement composé de captures : c'est
  celui qui risque le plus l'échec à l'écoute seule. Chaque geste montré — la ligne qu'on ajoute,
  l'envoi, la question que Claude renvoie — est dit avant et après le silence qui l'entoure. Les
  frames `09`, `11`, `13`, `15`, `17` et `23` sont à écouter en priorité, piste voix seule.
- **Table d'alignement** à joindre : quatre lignes, une par point de la carte de rappel, chacune
  reliée à son unité de B3 et à un **item nommément désigné** du quiz de `cl6`. Le quiz de `cl2` ne
  compte que trois items : si aucun item de `cl6` n'évalue l'unité « tâche », il faut en créer un ou
  ramener B3 à trois unités. Sans cette table, l'épisode ne démarre pas. [à fournir]
- **Test de glyphes** ɓ ɗ ƙ ƴ au build. En cas d'échec, bascule Inter → Noto Sans et Literata →
  Noto Serif sur la seule piste `ha`, repli à reconsigner ici.
- Boucle avant rendu : `preview --background` → build → `lint` → `check` (0 finding) → `snapshot`
  aux frontières de beats → `render --quality high` après approbation explicite.