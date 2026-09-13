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

Épisode cl1 du module `introduction-claude-ai`, chapitre « Qu'est-ce que Claude ? ». Premier chapitre du module : aucun rappel d'artefact d'un chapitre précédent (règle réservée à partir du chapitre 2).

**Ce que la vidéo doit obtenir de l'apprenant.** Qu'il ouvre Claude dans l'heure et le teste sur une tâche de son propre travail, en sachant déjà deux choses : qu'une réponse bien écrite peut être fausse, et que ce qu'il tape sort de son organisation. La vidéo ne cherche pas à ce qu'il retienne une définition ; elle cherche à ce qu'il fasse l'exercice du chapitre avec les bons réflexes déjà en place.

**Promesse, énoncée à 0:11,00 sur l'horloge des beats (frame `03`), soit 0:14,60 sur l'horloge du master, avant la borne de 0:12 des beats.** La convention d'horloge est celle du §2.1 : le `0:00` des beats tombe après la carte d'ouverture de 3,60 s. Aucune respiration n'est placée en tête de la frame `03` : la première syllabe de la promesse tombe à ≤ 12,00 s des beats. Deuxième personne, dérivée d'`objective`, reprise mot pour mot sur la carte de rappel (frame `31`) :

> À la fin de ce chapitre, vous saurez ce qu'est Claude et où y accéder.

**Fil narratif.** Le cas du champ `example` — une chargée de programme d'ONG à Niamey, cinq rapports de terrain le vendredi, une note d'une page pour le lundi — ouvre en B1 et se referme en B6. C'est le même cas qui est joué de bout en bout à l'écran en B4, sans étape escamotée : dépôt des cinq documents, consigne tapée en entier, note en trois parties, puis relecture humaine qui rattrape ce que le brouillon a manqué. Rien d'autre n'est démontré de bout en bout.

**Ce que la vidéo ne fait pas, parce que le texte de la leçon s'en charge.**

- Elle n'énumère pas la liste des verbes que Claude sait traiter (rédiger, reformuler, raccourcir, traduire, résumer, structurer, expliquer, comparer, corriger) : elle en montre deux, à l'écran réel.
- Elle ne déroule pas les quatre « ce n'est pas » comme une liste : elle en démontre deux (l'erreur assurée, la donnée nominative) et laisse les deux autres au texte.
- Elle n'expose pas la méthode de vérification, ni le pourquoi des hallucinations : c'est le chapitre 5. Elle installe seulement le réflexe.
- Elle ne détaille ni les paliers, ni les abonnements, ni la limite d'usage chiffrée : aucun montant, aucune devise, aucun chiffre de limite n'est prononcé ni affiché (§10 du contexte).
- Elle ne développe pas l'analogie du stagiaire au-delà d'un plan de schéma, et ne reprend pas le glossaire ni la question de réflexion.
- Elle ne prononce jamais de nom ni de version de modèle : on dit « Claude ».
- Elle n'avance aucun chiffre que la capture à l'image ne montre pas — en particulier aucun nombre de lignes de la note de synthèse hors de ce que les captures `13` et `16` affichent réellement (§10).

**Contrainte de non-recouvrement.** Le script de voix off est écrit en paraphrase délibérée du texte de la leçon : aucun n-gramme de 12 mots commun entre le texte du `.srt` et `content[]`, `example`, `practice`. Seules duplications admises et exclues du contrôle : la consigne tapée à l'écran en frame `23`, la relance tapée en frame `27`, la promesse, et `practice.title` en frame `33`.

## Assets

Tous les chemins sont relatifs à la racine du projet `videos/cl1/`. Aucun fetch réseau ; tout est local au rendu.

### Marque, présentateur, polices

- `assets/brand/logo-karatou-academy.png` — **[à fournir]** PNG 32 bits alpha, ≥ 720 × 720, sans aplat blanc, lisible sur `#0A1628` et sur `#FFFFFF`. Employé en `<img>` uniquement, `alt` = `Karatou Academy`. Sert au filigrane (tuile seule 140 px, rayon 40 px, x 120 y 120) des frames `01` à `34`, et au lockup de la carte de clôture. Jamais sur la carte d'ouverture.
- `assets/presenter/aminou-laouali-abdou.jpg` — **[à fournir]** 1:1 exact, ≥ 1080 × 1080, JPEG q90 sRGB < 400 Ko, EXIF supprimé après cadrage, plan poitrine, fond uni `#F3F4F6`, aucun upscaling. Cadrage `presenterPhotoPosition` laissé au défaut `50% 30%` **[à valider]**.
- `assets/fonts/inter-400.woff2`, `assets/fonts/inter-500.woff2`, `assets/fonts/inter-600.woff2`, `assets/fonts/inter-700.woff2` — **[à fournir]** Inter auto-hébergée, `@font-face` local, `font-display: block`.
- `assets/fonts/literata-var.woff2` — **[à fournir]** Literata variable 400→700, axe `opsz`.
- `assets/fonts/noto-sans-{400,500,600,700}.woff2` et `assets/fonts/noto-serif-var.woff2` — **[à fournir, conditionnel]** repli de la piste haoussa si le test de glyphes ɓ ɗ ƙ ƴ (U+0253, U+0257, U+0199, U+01B4) échoue au build sur Inter/Literata.

### Voix off

- `assets/voix/cl1-fr.wav` — **[à fournir]** 48 kHz / 24 bits / mono, voix humaine, une prise par séquence. Référencé par `<audio id="vo">` dans `index-fr.html`.
- `assets/voix/cl1-en.wav`, `assets/voix/cl1-ha.wav` — **[à fournir]** après validation de la recette FR. HA : voix humaine native obligatoire.
- La voix off de la carte d'ouverture (« Bonjour, je suis Aminou Laouali Abdou. ») est portée par la clé `presenter_vo` des trois `copy/cl1.<lang>.json` ; les prises EN et HA sont **[à fournir]**.

### Plans de situation (type E, B1)

Photographies de production, sans texte lisible, sans logo, sans visage identifiable, sans document d'organisation réelle. Plaque `rgba(10,22,40,0.95)` sous tout texte posé dessus.

- `assets/situation/cl1-01-pile-rapports.jpg` — **[à fournir]** 1920 × 1080, JPEG q85 sRGB. Cinq chemises ou jeux de feuilles agrafées empilés sur un plan de travail, lumière du jour latérale, faible profondeur de champ, aucune ligne de texte déchiffrable. Employé en frame `01`.
- `assets/situation/cl1-02-page-blanche.jpg` — **[à fournir]** 1920 × 1080, JPEG q85 sRGB. Un traitement de texte ouvert sur un document vide, écran vu de trois quarts, curseur seul, aucune barre de titre ni nom de fichier lisible, aucune interface de marque identifiable. Employé en frame `02`.

Repli déclaré : si ces deux vues ne sont pas fournies, les frames `01` et `02` basculent en cartes typographiques de type B. Le tableau des types devient alors A 187,0 s (62,33 %), B 95,0 s (31,67 %), C 18,0 s (6,00 %), E 0 s — toutes les bornes de la §2.5 restent tenues.

### Captures d'écran réelles de Claude (type A)

**[à fournir]** — les dix-sept captures ci-dessous. Aucune maquette, aucun redessin. Protocole commun, identique pour toutes :

- Navigateur propre : aucun favori, aucune extension, aucune notification, aucun onglet secondaire. Chrome de navigateur **entièrement recadré hors champ** : ni barre d'URL, ni onglets, ni barre d'état, ni barre de favoris.
- Fenêtre 1280 × 720, zoom 200 %, DPR 2× → export PNG 2560 × 1440.
- Aucun panneau de compte, aucun avatar, aucune initiale, aucun nom réel, aucune adresse électronique, aucun historique de conversations lisible dans la barre latérale (barre repliée ou recadrée).
- **Aucun sélecteur ni nom de modèle visible** : masqué à l'aplat `#111827` ou recadré. Idem pour toute bannière de limite d'usage, tout bouton d'abonnement et toute mention tarifaire.
- Aucune URL à jeton, aucun identifiant de conversation lisible.
- Le contenu montré est celui des personas du champ `example` ; les documents utilisés sont des pièces fictives préparées pour le tournage.
- La capture n'occupe jamais plus de deux tiers du cadre 1920 × 1080. Toute ligne à lire est **retapée en surimpression** dans la langue de la version, Inter ≥ 80 px sur `--surface-navy-95`. Sur les frames `11`, `23` et `24`, cette surimpression dépasse 90 caractères : elle relève de la dérogation bornée déclarée au point 5 de `## Customizations`.

| Fichier | Contenu exact à capturer | Frame |
| --- | --- | --- |
| `assets/captures/cl1/01-zone-saisie-vide.png` | Conversation neuve et vide sur `claude.ai` en navigateur de bureau. Zone de saisie au centre, curseur dedans, texte d'invite par défaut visible. Rien d'autre dans le cadre. | `06` |
| `assets/captures/cl1/02-demande-tapee.png` | Même cadrage que 01, une demande en français courant tapée dans la zone de saisie, pas encore envoyée. | `07` |
| `assets/captures/cl1/03-reponse-affichee.png` | Même conversation, demande envoyée et réponse en texte affichée sous elle, quatre à six lignes visibles. | `08` |
| `assets/captures/cl1/04-resume-cinq-points.png` | Une demande de résumé en cinq points et la réponse en cinq points numérotés, entièrement visibles dans le cadre. | `11` |
| `assets/captures/cl1/05-depot-pdf.png` | Un fichier PDF fictif attaché à la conversation : vignette ou pastille de pièce jointe visible au-dessus de la zone de saisie, nom de fichier générique sans donnée identifiante. | `12` |
| `assets/captures/cl1/06-question-locale-tapee.png` | Une question tapée sur un sujet local et récent vérifiable (texte réglementaire, prix courant), pas encore envoyée. | `14` |
| `assets/captures/cl1/07-reponse-fausse-assuree.png` | **Capture d'une erreur réelle**, non provoquée par une consigne piégée : la réponse à la question 06, factuellement fausse, formulée avec assurance et sans réserve. Date de la prise consignée dans `RECETTE.md` ; l'écart avec la source officielle est établi et archivé avant montage. | `15` |
| `assets/captures/cl1/08-liste-nominative-masquee.png` | Zone de saisie contenant un extrait de liste de bénéficiaires **fictive** (noms + numéros), chaque champ identifiant recouvert d'un aplat `#111827` à l'export. La structure du tableau reste lisible, aucune valeur ne l'est. | `18` |
| `assets/captures/cl1/09-claude-ai-navigateur.png` | `claude.ai` en navigateur de bureau, conversation vide, recadré à la zone utile — porte d'entrée 1. | `20` |
| `assets/captures/cl1/10-application-mobile.png` | Capture de l'application mobile, écran de conversation vide, statut d'appareil (heure, réseau, batterie) masqué à l'aplat `#111827`. | `20` |
| `assets/captures/cl1/11-depot-cinq-rapports.png` | Cinq pièces jointes fictives dans **une seule et même conversation**, les cinq vignettes visibles ensemble. | `22` |
| `assets/captures/cl1/12-consigne-synthese-tapee.png` | La consigne du champ `example.solution` tapée **en entier** dans la zone de saisie, entièrement lisible, pas encore envoyée. Reproduire le texte au mot près (275 caractères, guillemets français et leurs espaces compris ; 271 hors guillemets). | `23` |
| `assets/captures/cl1/13-note-trois-parties.png` | La réponse structurée en trois parties, les trois intertitres visibles simultanément. La longueur réelle de cette note, telle qu'elle apparaît à l'image, est relevée et consignée dans `RECETTE.md` : c'est la seule longueur que la voix off a le droit de décrire. | `24` |
| `assets/captures/cl1/14-alerte-securite-manquante.png` | Même réponse, faisant apparaître qu'un point présent dans les pièces déposées n'a pas été repris. Le point manquant est identifiable par comparaison avec la pièce source, elle-même capturée pour la recette. | `25` |
| `assets/captures/cl1/15-relance-cinq-lignes.png` | La relance `Trop long, refais en 5 lignes` tapée dans la même conversation, sous la réponse précédente. Formulation reprise au mot près du texte de la leçon. | `27` |
| `assets/captures/cl1/16-reponse-raccourcie.png` | La réponse raccourcie à cinq lignes, les cinq lignes visibles ensemble. | `28` |
| `assets/captures/cl1/17-nouveau-fil-vide.png` | Une **nouvelle** conversation, vide, ouverte juste après la précédente : rien du contexte antérieur n'y figure. Barre latérale repliée ou recadrée. | `29` |

## Customizations

Ce qui dévie du gabarit commun pour cet épisode, et rien d'autre.

1. **Aucun rappel d'artefact du chapitre précédent** en ouverture de B1 : cl1 est le premier chapitre du module, la règle du contexte ne s'applique qu'à partir du chapitre 2.
2. **Le beat « accès » optionnel est employé** : 18,0 s (frames `20` et `21`), imputées sur B4, sous le plafond de 30 s. Elles couvrent la troisième section du texte, « Où trouver Claude ».
3. **Trois unités nommées en B3** sur les deux à quatre admises, une par point de la carte de rappel : `Ce que Claude fait avec du texte` (30,0 s), `Il peut se tromper avec assurance` (38,0 s), `Ce que vous n'y collez jamais` (32,0 s). Chaque titre tient en sept mots ou moins.
4. **La carte de rappel est parlée et portée par deux plans consécutifs** — `31` (la promesse reprise mot pour mot) puis `32` (les trois points, révélés au rythme de la voix). C'est le §2.3.3 qui commande : les points sont révélés *au rythme de la voix*, la carte ne peut donc pas être muette. La contrainte de tenue est la seule tenable et la seule mesurable : **≥ 4,00 s pendant lesquelles les trois points restent visibles ensemble** sur la frame `32`, soit de 2,30 s à 6,50 s de ce plan (4,20 s constatées). La voix off couvre les deux plans.
   Le « gabarit sans sous-titre » du §2.3.3 ne porte que sur la **plaque incrustée**, omise sur `31` et `32` parce que le §2.3.3 la proscrit sur la carte de rappel. Parlés, ces deux plans ont bien leurs blocs dans le `.srt` livré en piste CC activable. Aucune information n'y est portée par la seule voix off (§1) : tout ce qui est prononcé est affiché — le rappel de la promesse sur `31`, dont le texte intégral est à l'écran, et les trois points sur `32`, dont les libellés complets sont à l'écran.
   **Plafond de mots.** Les deux plans totalisent 11,00 s, dont 2,00 s de tenue finale muette : la voix off y dispose de **9,00 s**, soit **dix-sept mots au plus** au débit de l'épisode (115–120 mots/min). `SCRIPT.md` est écrit à ce plafond. Conséquences, opposables au montage : sur `31`, la promesse est *affichée* mot pour mot comme l'exige le §2.3.1 mais n'est pas relue en entier — ses quinze mots demanderaient 7,6 s quand le plan en dure 4,50 — elle a été prononcée à la frame `03` ; sur `32`, la voix **nomme** chaque point d'un syntagme bref au moment où il paraît (0,0 / 1,0 / 2,0 s), le libellé complet restant à l'écran et les trois y restant ensemble de 2,30 s à 6,50 s. Hors plage de débit, on coupe du texte de voix off : ni la tenue de 4,00 s ni les durées de plan ne servent de variable d'ajustement.
5. **Dérogation bornée au plafond de 90 caractères visibles (§2.4).** Le plafond de 90 caractères s'applique au **texte de composition** — surtitre, titre, lignes, cartes, annotations. Il ne s'applique pas au **bloc de citation** que forme la ligne de capture retapée en surimpression exigée par le §5.3, sur les trois seules frames où ce bloc dépasse 90 caractères :
   - frame `11` — les cinq points numérotés du résumé (longueur **[à mesurer sur la capture 04]**) ;
   - frame `23` — la consigne d'`example.solution`, **275 caractères**, guillemets français et leurs espaces compris ;
   - frame `24` — les trois intertitres de la note (longueur **[à mesurer sur la capture 13]**).
   Régime imposé sur ces trois plans : le bloc est posé entier et figé, jamais animé pendant sa lecture (entrée ≤ 300 ms puis figé) ; la lecture est guidée par surlignage progressif, **une seule ligne appelée à la fois, tenue ≥ 2,5 s**, et **au plus deux appels par plan** — ce que les durées retenues permettent (frame `11` : 12,0 s, deux appels ; frame `23` : 14,0 s, un appel puis la tenue ≥ 4,0 s après la dernière frappe ; frame `24` : 11,0 s, un appel unique, les trois intertitres pris comme un seul syntagme, conformément à la règle d'une annotation à la fois). Hors bloc de citation, aucun plan de l'épisode ne dépasse 90 caractères : le maximum est la frame `31`, à 70 caractères. Sans cette déclaration, les frames `11`, `23` et `24` seraient hors contrat.
6. **Plans de type E employés**, 11,0 s en B1 uniquement (frames `01` et `02`), avec le repli en type B déclaré dans `## Assets`.
7. **Masquage `#111827`, deux régimes distincts.**
   - *Régime signifiant, une seule occurrence dans l'épisode* : la capture `08` (frame `18`), où l'aplat est un objet de la démonstration — il est montré, verbalisé et traité comme annotation de plein droit, tenue ≥ 2,5 s, doublée d'une forme.
   - *Régime d'anonymisation, appliqué à l'export et jamais commenté* : sélecteur et nom de modèle sur toutes les captures concernées, statut d'appareil de la capture `10`, toute bannière de limite d'usage, tout bouton d'abonnement, toute mention tarifaire. Ce traitement n'apparaît dans aucune annotation, ne fait l'objet d'aucune ligne de voix off et n'est pas dénombré ici : il est vérifié capture par capture en recette.
8. **`presenterPhotoPosition` laissé au défaut `50% 30%`** dans les trois `copy/cl1.<lang>.json` **[à valider]** au vu du cadrage réel de la photo livrée.
9. **Repli de polices haoussa déclaré ici** conformément au contexte : si le test de glyphes ɓ ɗ ƙ ƴ échoue au build, la piste `ha` passe d'Inter à Noto Sans (400/500/600/700) et de Literata à Noto Serif (400→700), woff2 auto-hébergées.
10. **Le terme « fil » n'est pas introduit à l'écran** dans cet épisode. La frame `29` dit « une nouvelle conversation repart de zéro » : le budget d'un terme technique nouveau par minute est déjà consommé par « relance » dans la dernière minute. Le mot « fil » reste au texte de la leçon (quatrième section et glossaire). La conclusion de la frame `29` est écrite pour ne pas reconstituer la phrase de la quatrième section ; le contrôle de non-recouvrement le vérifie explicitement.
11. **Deux termes anglais seulement sont prononcés**, une fois chacun, glosés puis abandonnés : *prompt* → **consigne** (frame `23`), *hallucination* gardé et glosé « réponse fausse donnée avec assurance » (frame `16`).
12. **Ventilation du silence propre à cet épisode.** Le §7.1 pose une ventilation générique des 55,0 s sans parole qui compte 12 s de récapitulation muette ; elle ne s'applique pas ici, la carte de rappel étant parlée (point 4), et elle ne couvre pas le plan de mentions légales, muet par obligation (§10). La ventilation retenue pour cl1 figure dans `## Notes` → « Budget de voix off » : elle totalise les mêmes 55,0 s et le même temps parlé de 245,0 s, donc la même fourchette de 470 à 490 mots à 115–120 mots/min.
13. **Aucune condensation d'exemple sur la piste haoussa n'est prévue à ce stade** ; toute condensation décidée à la traduction sera consignée ici avant rendu, comme l'exige le contexte.

## Notes

### Contraintes de tournage

- La capture `07` (réponse fausse énoncée avec assurance) est la seule qui ne se commande pas : elle se constate. Prévoir une session dédiée sur trois à cinq sujets locaux récents dont la source officielle est disponible, jusqu'à obtenir une erreur nette. Interdiction de la provoquer par une consigne piégée ou de la mettre en scène : la démonstration perdrait sa valeur et tomberait sous l'interdit des maquettes.
- Les captures `11` à `14` forment **une seule prise continue** dans une même conversation : dépôt, consigne, réponse, point manquant. Les capturer dans le désordre produirait des états d'écran incohérents (compteur de pièces jointes, position de défilement) visibles au montage.
- Idem pour `15` → `16` (relance et réponse raccourcie) puis `17` (nouvelle conversation) : la continuité de session doit se voir.
- Préparer avant tournage cinq rapports d'activité fictifs de trois à huit pages, sans nom d'organisation réelle, sans logo, sans donnée identifiante, dont un contient le point de sécurité que la synthèse manquera en frame `25`. Ces pièces ne sont pas livrées avec le projet mais sont archivées dans la source `.zip` pour la recette.
- La consigne de la frame `23` est recopiée **au mot près** depuis `example.solution`, guillemets français inclus. C'est la seule duplication du texte de la leçon autorisée sur cette frame ; toute reformulation casserait la règle du contexte.
- **Relever la longueur réelle de la note produite** sur la capture `13`, en lignes et en écrans, et la consigner dans `RECETTE.md`. Ce relevé est la seule source autorisée si la voix off décrit une longueur ; à défaut de relevé, la voix off n'énonce aucun nombre de lignes avant la relance de la frame `27`.
- Filmer avant que l'autorisation écrite d'utilisation de l'image et de la voix du présentateur soit signée est exclu.

### Pièges de cet épisode

- **Le tarif.** La troisième section du texte parle de version gratuite, de limite qui se recharge et d'abonnements. À l'écran et en voix off : aucun montant, aucune devise, aucun palier, aucune limite chiffrée. La frame `21` s'en tient à « il existe une version gratuite, elle suffit pour ce module » et « la limite se recharge ». Toute capture qui laisserait apparaître un prix ou un bouton d'abonnement est reprise ou masquée.
- **Le chiffre inventé.** La frame `26` pose une question de prédiction sur la longueur de la note. Elle ne prête à la direction aucune exigence chiffrée : `example.challenge` ne demande qu'« une note d'une page », et la relance « Trop long, refais en 5 lignes » appartient à la quatrième section du texte, pas au cas de la note de synthèse. La frame `26` porte donc sur la mécanique — une première réponse n'est pas un verdict, on relance pour raccourcir — et non sur un nombre. Tout nombre de lignes prononcé décrit ce que la capture `13` montre, et rien d'autre (§10).
- **Le nom de modèle.** L'interface de `claude.ai` affiche un sélecteur de modèle sur presque tous les écrans. Il est masqué ou recadré sur les dix-sept captures, sans exception, y compris sur celles où il est en périphérie. Ce masquage relève du régime d'anonymisation du point 7 de `## Customizations` : il n'est jamais commenté à l'antenne.
- **Le contraste du rouge d'erreur.** L'annotation de la frame `15` porte sur une capture claire posée sur fond navy : employer `#DC2626` sur la capture, `#FCA5A5` si le repère déborde sur le navy. Doubler systématiquement d'une forme (croix, cadre) : jamais d'information par la couleur seule.
- **Une annotation à la fois.** Les frames `18`, `24` et `25` sont tentantes à surcharger. Une seule annotation par plan, tenue ≥ 2,5 s.
- **La transition plein cadre.** Sept transitions plein cadre seulement, aux frames `05`, `10`, `13`, `17`, `20`, `26`, `30`. Le plus court intervalle entre deux est de 30,0 s, très au-dessus du plafond d'une transition toutes les 8 s. Tous les autres raccords se font au geste d'entrée standard (opacité + 32 px, 300 ms, cascade 120 ms).
- **L'or.** Une seule apparition dans toute la vidéo : le CTA de la carte de clôture. Aucun accent doré ailleurs, y compris sur la carte de rappel.

### Budget de voix off

**245,0 s parlées sur les 300,0 s de beats**, soit **470 à 490 mots à 115–120 mots/min**. Les 55,0 s sans parole sont ventilées comme suit, chaque seconde étant rattachée à un plan, et sont à tenir au montage :

| Poste | Durée | Plans |
| --- | --- | --- |
| Démonstration muette | 30,0 s | `07` (frappe de la demande), `15` (lecture de la réponse fausse), `23` (frappe de la consigne, puis ≥ 4,0 s de tenue après la dernière frappe), `27` (frappe de la relance) |
| Respirations | 14,0 s | réparties aux six raccords de beat et en fin de plan, hors tête de la frame `03` |
| Prédiction et rappel actif | 6,0 s | `26` (2 à 3 s de silence entre la question et la réponse), le reste en `30` |
| Mentions légales | 3,0 s | `34`, intégralement muette, sans voix off ni sous-titre (§10) |
| Tenue finale de la carte de rappel | 2,0 s | `32`, après le troisième point, la voix ayant fini avant la fin du plan |
| **Total sans parole** | **55,0 s** | 30,0 + 14,0 + 6,0 + 3,0 + 2,0 |
| **Total parlé** | **245,0 s** | 300,0 − 55,0 |

Il n'y a **pas de poste « récapitulation muette »** : la carte de rappel est parlée (point 4 de `## Customizations`), et seules les 2,0 s de tenue finale de la frame `32` sont sans parole. Le plan de mentions légales, muet par obligation, est budgété ici et non laissé hors compte.

**Plafond de mots de la carte de rappel.** Les frames `31` et `32` offrent 9,00 s de parole (11,00 − 2,00). Au débit de l'épisode, cela plafonne leur voix off à **dix-sept mots**, promesse non relue et points nommés en syntagmes brefs (point 4 de `## Customizations`). Ce plafond est un contrôle de recette au timecode, pas une estimation.

**Contrainte de tête d'épisode.** Aucune respiration n'est placée en tête de la frame `03` : la première syllabe de la promesse tombe à ≤ 12,00 s sur l'horloge des beats, soit ≤ 15,60 s sur l'horloge du master. La marge est de 1,00 s ; le point est mesuré au timecode en recette, pas estimé.

Dix-huit mots maximum par phrase, vérifié sur `SCRIPT.md`. Toute notion nouvelle est dite deux fois, la seconde autrement. Nombres en toutes lettres à l'oral, y compris là où l'écran affiche un chiffre parce que la leçon l'écrit ainsi (frame `27` : l'écran montre `5 lignes`, la voix dit « cinq lignes »).

### À vérifier en recette

- **Table d'alignement — point bloquant.** Le contexte impose une ligne par point de la carte de rappel, reliant `objective`, le beat, l'unité de B3, le libellé de la carte et **un item du quiz de cl6**. Or cl6 n'est pas encore rédigé. Les trois items de couverture sont donc **[à fournir]** avant démarrage du build. À titre provisoire, les trois points se relient aux items du quiz de cl1 : point 1 → item 1 (« Quelle est la meilleure description de Claude ? »), point 2 → item 2 (montant d'une taxe récente), point 3 → item 3 (liste nominative). Sans la table définitive, l'épisode ne démarre pas.
- **Non-recouvrement.** Contrôle des n-grammes n = 12 entre le texte du `.srt` (timecodes retirés, minuscules, sans ponctuation, espaces réduits) et `content[]`, `example`, `practice` du fichier `src/data/lessons/introduction-claude-ai/cl1.ts`. Seuil 0 occurrence. Exclusions : consigne de la frame `23`, relance de la frame `27`, promesse, `practice.title`. **Point sensible à vérifier nommément** : la conclusion de la frame `29` ne doit pas reconstituer la phrase de la quatrième section du texte sur le fait de rester dans le même fil pour un même sujet. Résultat consigné dans `RECETTE.md`.
- **Verbalisation (P1).** L'expert-métier écoute la piste voix seule, sans image, deux fois au maximum. Points sensibles de cet épisode : la frame `18` (ce qui est masqué doit être dit), la frame `25` (le point manquant doit être nommé à l'oreille, pas seulement encadré) et la frame `29` (l'absence de contexte dans la nouvelle conversation n'est visible que par comparaison). Toute ligne non reconstituable à l'oreille est une non-conformité.
- **Zone de sous-titres.** Les frames `31`, `32` et `34` sont sans plaque de sous-titres incrustée. Vérifier que le lint `--caption-zone` ne remonte pas de faux positif sur ces trois plans, et que la dérogation de zone de sous-titres n'est accordée qu'à la plaque de sous-titres elle-même et aux blocs des deux cartes présentateur — ouverture et clôture. Aucun autre bloc de l'épisode ne la porte. Vérifier en outre que les frames `31` et `32`, muettes de plaque mais parlées, ont bien leurs blocs dans le `.srt` livré en piste CC.
- **Caractères visibles.** Contrôle plan par plan du plafond de 90 caractères hors sous-titres. **Plans à mesurer, dans cet ordre :**
  1. `23` — bloc de citation, 275 caractères mesurés : vérifier le régime de lecture guidée du point 5 de `## Customizations` (bloc figé, un appel, tenue ≥ 4,0 s après la dernière frappe) ;
  2. `11` — bloc de citation, cinq points numérotés, longueur à mesurer sur la capture : au plus deux appels, ≥ 2,5 s chacun ;
  3. `24` — bloc de citation, trois intertitres, longueur à mesurer sur la capture : un appel unique sur les trois pris ensemble ;
  4. `21` (accès et gratuité), `31` (promesse, 70 caractères) et `32` (les trois points, **85 caractères cumulés**) — texte de composition, plafond de 90 caractères applicable sans dérogation.
  La frame `34` est plafonnée à 130 caractères sur trois lignes. Le comptage des trois points de la carte de rappel est **refait sur les versions EN et HA**, où la marge sous 90 caractères est bien plus faible qu'en français.
- **Durées et arithmétique.** Les totaux par beat et par type de plan sont posés sous le tableau de `STORYBOARD.md` avec leur calcul ; les revérifier après toute retouche de durée, puisqu'une seconde déplacée sur B3 ou B4 peut sortir de la fenêtre `170 ± 15 s`.
- **Poids.** Variante 640 × 360 : débit total ≤ 398 kbit/s, soit ≤ 15,5 Mo sur toute la tolérance de durée 301,0–311,0 s. Les dix-sept captures étant des aplats d'interface, la cible est atteignable sans dégrader la lisibilité du texte retapé en surimpression.
- **Trilinguisme.** Toute chaîne d'écran vient de `copy/cl1.fr.json`, `copy/cl1.en.json`, `copy/cl1.ha.json`, aucune chaîne en dur. Toutes les clés présentes dans les trois fichiers, `presenterPhotoPosition` comprise ; `--strict-variables` échoue le rendu sinon. Tester la mise en page sur la plus longue des trois langues, en particulier les trois titres d'unité de B3 et les trois points de la carte de rappel.
- **Intégration.** L'URL embarquable est renseignée dans `video: { fr, en, ha }` de `lessonCl1Fr` (`src/data/lessons/introduction-claude-ai/cl1.ts`), aujourd'hui vide ; l'entrée `authoredLessons` correspondante doit exister, sinon l'URL n'est jamais lue.