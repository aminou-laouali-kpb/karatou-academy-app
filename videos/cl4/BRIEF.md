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

Épisode `cl4` du module `introduction-claude-ai`, chapitre « Les usages concrets au quotidien ». Le rappel d'un artefact du chapitre précédent est obligatoire avant `0:10` de beats.

**Ce que la vidéo doit obtenir de l'apprenant.** Qu'il classe ses propres tâches en deux colonnes — celles qu'il peut juger, celles qu'il ne peut pas — et qu'il traite dans la semaine une tâche de la première colonne de bout en bout. C'est le seul chapitre du module dont l'acquis est un **critère de tri**, pas un geste.

**Promesse**, énoncée dans la frame `02`, avant `0:12` de beats, reprise mot pour mot sur la frame `27` :

> Vous saurez reconnaître les tâches où le gain est réel, et celles où il ne l'est pas.

**Fil narratif.** Le cas du champ `example` — le comité mensuel d'un centre de santé communautaire dans la région de Maradi, trois livrables sur un même dimanche soir — ouvre en B1 et se referme en B6. Il est joué de bout en bout en B4 : ordre du jour, argumentaire avec objections anticipées, lecture du tableau de fréquentation.

**Ce que la vidéo ne fait pas, parce que le texte de la leçon s'en charge.**

- Elle ne dresse pas le catalogue des mails difficiles ni des formats de note : elle montre un cas de chaque famille.
- Elle ne traite pas les langues locales à l'écran : la prudence et l'obligation de relecture native restent au texte, qui est le bon support pour une règle de ce poids.
- Elle ne redéveloppe pas les quatre ingrédients de `cl2` ni la méthode documentaire de `cl3` : elle les emploie sans les réexpliquer.
- Elle n'expose pas la vérification générale, qui est `cl5` : elle montre le seul recalcul manuel d'un pourcentage.
- Aucun tarif, aucun nom de modèle, aucun chiffre de gain de temps qui ne soit visible à l'image.

**Contrainte de non-recouvrement.** Aucun n-gramme de 12 mots commun entre le texte du `.srt` et `content[]`, `example`, `practice`. Exclusions admises : la consigne tapée en frame `18`, la promesse, et le titre de l'exercice en frame `29`.

## Assets

Chemins relatifs à la racine du projet `videos/cl4/`. Aucun fetch réseau au rendu.

### Communs à tous les épisodes

Logo, photo du présentateur, polices, repli haoussa : section 13 du contexte général. **[à fournir]**, bloquants.

### Voix off

- `assets/voix/cl4-fr.wav` — **[à fournir]**. `assets/voix/cl4-en.wav`, `assets/voix/cl4-ha.wav` — **[à fournir]** après recette FR.

### Plan de situation (type E, B1, frame `03`)

- `assets/situation/cl4-01-dimanche-soir.jpg` — **[à fournir]** 1920 × 1080, JPEG q85 sRGB. Un plan de travail en fin de journée, lumière artificielle, documents et ordinateur, **aucun texte déchiffrable, aucun visage**. Repli déclaré : bascule en carte de type B ; A passe à 63,3 %, B à 33,0 %, bornes tenues.

### Captures d'écran réelles (type A)

**[à fournir]** — protocole commun dans les Notes.

| Fichier | Frame(s) | Ce qui doit être à l'écran |
| --- | --- | --- |
| `assets/captures/cl4-01-tableau-cl3.png` | `01` | Le tableau à quatre colonnes extrait des fiches dans `cl3`. Cadrage identique à celui de `cl3-12`. |
| `assets/captures/cl4-02-mail-trois-versions.png` | `06` | Une demande de trois versions d'un mail difficile, et les trois versions obtenues, de tons distincts. |
| `assets/captures/cl4-03-notes-brutes.png` | `09` | Des notes de réunion désordonnées collées telles quelles — abréviations, noms, points en suspens — puis le compte rendu structuré. |
| `assets/captures/cl4-04-trop-poli.png` | `10` | Un compte rendu ouvrant sur une formule creuse, **annotée en erreur**, et la version coupée à côté. |
| `assets/captures/cl4-05-circulaire.png` | `12` | Une circulaire administrative fictive de quatre pages et la consigne d'adaptation tapée en entier. |
| `assets/captures/cl4-06-dix-lignes.png` | `13` | Le message de dix lignes obtenu, avec dates, montants et obligations **surlignés comme conservés**. |
| `assets/captures/cl4-07-argumentaire.png` | `15` | Un argumentaire structuré en quatre parties, à l'écran. |
| `assets/captures/cl4-08-objections.png` | `19` | Les trois objections probables et leurs réponses. |
| `assets/captures/cl4-09-tableau-constats.png` | `16` | Un tableau de chiffres collé et les trois constats obtenus, plus la ligne « ce qui manquerait pour conclure ». |
| `assets/captures/cl4-10-ordre-du-jour.png` | `17` | L'ordre du jour produit à partir de trois objectifs et d'une durée. |
| `assets/captures/cl4-11-consigne-argumentaire.png` | `18` | La consigne complète du champ `example.solution`, tapée en entier, entièrement lisible. |
| `assets/captures/cl4-12-troisieme-constat.png` | `20` | Le constat inattendu : la chute de fréquentation concentrée sur un seul jour de la semaine. |
| `assets/captures/cl4-13-avis-hors-competence.png` | `22`, `24` | Un avis technique impeccablement rédigé dans un domaine spécialisé — le plan sert à montrer qu'il est **indéfendable faute de pouvoir être jugé**, pas à en discuter le contenu. |
| `assets/captures/cl4-14-recalcul.png` | `25` | Un pourcentage recalculé à la main, calculatrice ou papier à l'image, à côté du chiffre affiché. |

## Customizations

1. **Trois unités en B3**, alignées sur les trois familles réellement démontrables : rédiger (35,0 s), adapter le registre (35,0 s), préparer et lire (35,0 s). La quatrième famille du texte — la traduction entre langues — n'a pas d'unité : elle est mentionnée en une phrase dans l'unité 2 et laissée au texte.
2. **La carte de rappel est portée par deux plans consécutifs**, `27` puis `28` : rappel actif du § 2.3.5 puis promesse réaffichée, puis « Rédiger. Adapter. Préparer. » (32 signes, 2 lignes), tenus ensemble ≥ 4,0 s. Gabarit sans sous-titre incrusté sur les deux.
3. **Un seul plan de type C** (`05`, 11,0 s), qui porte la grille à deux critères. C'est l'idée centrale du chapitre et la seule qui ne se montre pas à l'écran réel : elle mérite un schéma, pas une carte de texte.
4. **La frame `07` est une carte de type B, pas une capture.** Le choix entre trois versions est un geste de jugement humain : le montrer à l'écran n'apporterait rien de plus qu'un curseur qui bouge. Ce choix maintient aussi la part de A dans la cible 60–65 %.
5. **Le contre-exemple de B5 ne discute pas de technique.** La capture `cl4-13` sert à montrer qu'un texte peut être impeccable et indéfendable ; le domaine choisi doit être assez spécialisé pour que le spectateur constate lui-même qu'il ne saurait pas juger.
6. **Aucun chiffre de gain n'est prononcé**, alors que le texte de la leçon en contient trois. L'argumentaire naturel de ce chapitre est un argumentaire de temps gagné : l'énoncer inviterait à des comparaisons non vérifiables. Le gain est **montré** — vingt minutes à l'écran contre un dimanche soir en situation — jamais chiffré à la voix.
7. **Termes techniques nouveaux** : **registre**, **adaptation**, **constat** — trois sur cinq minutes.
8. **`presenterPhotoPosition`** : défaut `50% 30%`, déclaré comme variable de composition et dans les trois `copy/cl4.<fr|en|ha>.json` **[à valider]**.

## Notes

### Tournage des captures

- **Une seule session pour la série `cl4-05` → `cl4-06`** : la circulaire et son adaptation sont la même conversation, jouée d'un trait. Idem pour `cl4-10` → `cl4-12`, qui forment la démonstration de B4 et doivent s'empiler sans saut de cadre.
- La circulaire de `cl4-05` est **fabriquée pour le tournage** : elle doit avoir l'aspect d'un texte administratif réel — numérotation, considérants, échéances — sans reprendre le texte d'une administration existante.
- Navigateur propre, chrome recadré hors champ, fenêtre 1280 × 720 à zoom 200 %, export PNG 2560 × 1440. Aucun panneau de compte, aucune barre latérale, aucune URL à jeton.

### Pièges de cet épisode

- **La frame `13` est le point qui décide du chapitre.** Il ne suffit pas de montrer un texte simplifié : il faut que le spectateur voie les dates et les montants **conservés**, surlignés. Sans ce plan, l'épisode enseigne à simplifier sans enseigner ce que simplifier coûte.
- **La frame `25` doit montrer un vrai recalcul manuel**, à l'image — pas une seconde demande à l'écran. C'est la différence entre la règle telle qu'elle est écrite et la règle telle qu'elle est appliquée.
- **La frame `20` porte le seul effet de surprise de l'épisode.** Le troisième constat doit être réellement inattendu à la lecture du tableau : prévoir des données de tournage construites pour cela.

### Budget de voix off

245,0 s parlées + 55,0 s sans parole = 300,0 s, soit **470 à 490 mots** à 115–120 mots/min. Ventilation des 55,0 s : démonstrations 30,0 · récapitulation 7,0 (frames `27` et `28`) · mentions légales 3,0 · prédiction et rappel actif 6,0 · respirations 9,0.

### À vérifier en recette

- Somme des 30 frames de contenu = 300,00 s exactes ; master = 306,00 s.
- Parts de plans : A = 190,0 s (63,3 %) · B = 94,0 s (31,3 %) · C = 11,0 s (3,7 %) · E = 5,0 s (1,7 %).
- Promesse avant `0:12` de beats ; rappel de `cl3` avant `0:10`.
- Aucun chiffre de gain de temps prononcé ni affiché hors de ce que les captures montrent.
- Anonymisation vérifiée capture par capture avant export.
