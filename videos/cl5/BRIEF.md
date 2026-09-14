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

Épisode `cl5` du module `introduction-claude-ai`, chapitre « Limites, vérification et confidentialité ». Dernier chapitre avec vidéo : il referme ce que `cl1` avait ouvert en nommant l'hallucination sans l'expliquer.

**Ce que la vidéo doit obtenir de l'apprenant.** Qu'il applique les trois questions au prochain document qu'il fait sortir de son service, et qu'il anonymise avant d'envoyer. C'est le chapitre dont l'échec coûte le plus cher : un apprenant qui sort du module sans ce réflexe est plus dangereux qu'avant de l'avoir suivi.

**Promesse**, énoncée dans la frame `02`, avant `0:12` de beats, reprise mot pour mot sur la frame `27` :

> Vous saurez repérer ce qui doit être vérifié, et ce qui ne doit jamais être envoyé.

**Fil narratif.** Le cas du champ `example` — une note de plaidoyer destinée à un ministère, citant un décret dont le numéro est faux — ouvre en B1 et se referme en B6. Il est joué de bout en bout en B4 : la note impeccable, la vérification au journal officiel, la référence inexistante, la note corrigée. La conclusion est explicite : ce n'est pas l'erreur qui est instructive, c'est qu'elle était **invisible à la lecture**.

**Ce que la vidéo ne fait pas, parce que le texte de la leçon s'en charge.**

- Elle n'énumère pas la liste complète de ce qui ne sort jamais : elle la montre une fois, masquée à l'écran, et pose le test de l'envoi à un prestataire sans contrat.
- Elle ne développe pas les quatre situations où il ne faut pas s'en servir : elle en démontre deux, la relation et la responsabilité engagée, et laisse les deux autres au texte.
- Elle ne reprend pas le raisonnement sur les Projects, traité en `cl3`.
- Elle ne cite aucun texte réglementaire réel : le décret du cas type est fictif et identifié comme tel dans les Notes.

**Contrainte de non-recouvrement.** Aucun n-gramme de 12 mots commun entre le texte du `.srt` et `content[]`, `example`, `practice`. Exclusions admises : la promesse et le titre de l'exercice en frame `29`.

## Assets

Chemins relatifs à la racine du projet `videos/cl5/`. Aucun fetch réseau au rendu.

### Communs à tous les épisodes

Logo, photo du présentateur, polices, repli haoussa : section 13 du contexte général. **[à fournir]**, bloquants.

### Voix off

- `assets/voix/cl5-fr.wav` — **[à fournir]**. `assets/voix/cl5-en.wav`, `assets/voix/cl5-ha.wav` — **[à fournir]** après recette FR.

### Plan de situation (type E, B1, frame `03`)

- `assets/situation/cl5-01-note-prete.jpg` — **[à fournir]** 1920 × 1080, JPEG q85 sRGB. Un document imprimé posé près d'un clavier, prêt à partir, **aucune ligne déchiffrable, aucun en-tête d'organisation réelle**. Repli déclaré : bascule en carte de type B ; A passe à 60,7 %, B à 32,7 %, bornes tenues.

### Captures d'écran réelles (type A)

**[à fournir]** — protocole commun dans les Notes. **Le décret cité est fictif** : numéro, date et intitulé sont inventés pour le tournage et ne doivent correspondre à aucun texte réel.

| Fichier | Frame(s) | Ce qui doit être à l'écran |
| --- | --- | --- |
| `assets/captures/cl5-01-argumentaire-cl4.png` | `01` | L'argumentaire produit pour le comité dans `cl4`. Cadrage identique à celui de `cl4-07`. |
| `assets/captures/cl5-02-es-tu-sur.png` | `05` | La question « es-tu sûr ? » posée après une réponse, et la confirmation obtenue — **même ton, même assurance**. |
| `assets/captures/cl5-03-changement-avis.png` | `06` | La même question reposée dans une conversation neuve, et une réponse différente. Le contraste est l'objet du plan. |
| `assets/captures/cl5-04-reference-decret.png` | `09`, `17` | Les trois paragraphes citant le décret fictif avec numéro et date, dans un style de note juridique. |
| `assets/captures/cl5-05-zones-risque.png` | `10` | Une réponse contenant plusieurs types d'informations, **annotées par catégorie de risque** : chiffre, date, référence, nom, actualité, information locale. |
| `assets/captures/cl5-06-trois-questions.png` | `13` | Une affirmation isolée à l'écran et les trois questions appliquées l'une après l'autre, avec la décision qui en découle. |
| `assets/captures/cl5-07-liste-masquee.png` | `15` | Une zone de saisie contenant des données à ne jamais déposer, **masquée à l'aplat `#111827`**. Seule occurrence signifiante du masquage. |
| `assets/captures/cl5-08-anonymiser.png` | `16` | La même demande, réécrite avec des rôles à la place des noms et sans élément localisant. |
| `assets/captures/cl5-09-journal-officiel.png` | `18` | La source officielle ouverte à côté de la réponse : le décret existe, le numéro diffère, la date est décalée de deux ans. |
| `assets/captures/cl5-10-reference-inexistante.png` | `19` | La recherche du troisième point cité, sans résultat. |
| `assets/captures/cl5-11-note-corrigee.png` | `20` | La note finale, avec les références exactes rétablies. |
| `assets/captures/cl5-12-condoleances.png` | `24` | Un texte de condoléances impeccable produit en quelques secondes — le plan sert à montrer ce qui manque, pas à en louer la forme. |
| `assets/captures/cl5-13-responsabilite.png` | `25` | Une demande d'avis engageant une responsabilité professionnelle, et la préparation de questions à la place de l'avis lui-même. |

## Customizations

1. **Trois unités en B3** : où l'erreur est la plus probable (36,0 s), les trois questions (36,0 s), ce qui ne sort jamais (36,0 s). La quatrième section du texte — quand ne pas s'en servir du tout — est traitée en B5, pas en B3 : c'est une consolidation par contre-exemple, pas une notion à exposer.
2. **La carte de rappel est portée par deux plans consécutifs**, `27` puis `28` : rappel actif du § 2.3.5 puis promesse réaffichée, puis « Vérifiable. Enjeu. Source. » (28 signes, 2 lignes), tenus ensemble ≥ 4,0 s. Gabarit sans sous-titre incrusté sur les deux.
3. **Deux plans de type C** (`07` et `12`), soit 20,0 s. Le premier porte le mécanisme — pas de signal interne distinguant « je sais » de « je comble un trou » — qui est l'idée la plus abstraite de tout le module et ne se montre par aucune capture. Le second porte les trois questions, qui doivent rester à l'écran comme une structure mémorisable.
4. **La frame `06` est indispensable et ne peut pas être coupée.** Montrer une confirmation ne suffit pas : c'est le **changement de réponse sans raison** qui démontre que la confirmation ne vaut rien. Sans ce plan, B2 laisse croire qu'il suffit d'insister.
5. **Le décret du cas type est fictif.** Numéro, date et intitulé sont inventés. Aucune capture ne doit citer un texte réglementaire réel, ni un organisme identifiable : le propos est le mécanisme de l'erreur, pas un cas juridique.
6. **La liste de ce qui ne sort jamais n'est pas récitée.** Elle apparaît une fois à l'écran, masquée, et la voix off porte le test — l'enverrais-je à un prestataire sans contrat ? Un plan de liste lue serait le plus oubliable de l'épisode.
7. **Le terme « hallucination » n'est pas réintroduit à l'écran.** Il a été posé et glosé dans `cl1` ; l'épisode emploie **erreur plausible**, qui décrit le phénomène du point de vue de l'utilisateur. Termes techniques nouveaux : **erreur plausible**, **source indépendante**, **donnée identifiante indirecte** — trois sur cinq minutes.
8. **Aucune condensation d'exemple sur la piste haoussa n'est prévue.** Ce chapitre porte des règles qui engagent : toute condensation devra être consignée ici et validée par le relecteur natif avant rendu.
9. **`presenterPhotoPosition`** : défaut `50% 30%`, déclaré comme variable de composition et dans les trois `copy/cl5.<fr|en|ha>.json` **[à valider]**.

## Notes

### Tournage des captures

- **Une seule session pour `cl5-02` et `cl5-03`** est impossible par construction : la seconde exige une conversation neuve. Les deux prises doivent en revanche partager exactement le même cadrage et le même zoom, sans quoi le contraste de la frame `06` se lit comme un changement de plan et non comme un changement de réponse.
- **Une seule session pour la série `cl5-04` → `cl5-06`**, puis une seconde pour `cl5-09` → `cl5-11`, qui forment la démonstration de B4.
- Navigateur propre, chrome recadré hors champ, fenêtre 1280 × 720 à zoom 200 %, export PNG 2560 × 1440. Aucun panneau de compte, aucune barre latérale, aucune URL à jeton.

### Pièges de cet épisode

- **Le ton ne doit pas devenir accusateur.** L'objet est un mécanisme, pas une faute d'utilisateur. Chaque plan d'erreur se referme sur le geste qui la rattrape, jamais sur un reproche.
- **La frame `19` porte la charge émotionnelle de l'épisode.** Le contraste entre l'assurance du texte produit et le résultat vide de la recherche doit être laissé respirer : ne pas enchaîner, tenir le plan.
- **Ne jamais afficher de donnée personnelle réelle, même masquée à l'export.** L'aplat de masquage est appliqué **avant** l'enregistrement de la capture, pas au montage : une capture non masquée ne doit exister à aucun moment sur le disque.
- La frame `15` est la seule occurrence signifiante du masquage. Partout ailleurs, l'aplat est un traitement d'anonymisation muet et non commenté.

### Budget de voix off

245,0 s parlées + 55,0 s sans parole = 300,0 s, soit **470 à 490 mots** à 115–120 mots/min. Ventilation des 55,0 s : démonstrations 30,0 · récapitulation 7,0 (frames `27` et `28`) · mentions légales 3,0 · prédiction et rappel actif 6,0 · respirations 9,0.

### À vérifier en recette

- Somme des 30 frames de contenu = 300,00 s exactes ; master = 306,00 s.
- Parts de plans : A = 182,0 s (60,7 %) · B = 93,0 s (31,0 %) · C = 20,0 s (6,7 %) · E = 5,0 s (1,7 %).
- Promesse avant `0:12` de beats ; rappel de `cl4` avant `0:10`.
- Aucune référence réglementaire réelle citée ; le décret du cas type est fictif et vérifié comme tel.
- Aucune capture non masquée présente sur le disque de tournage.
