# STORYBOARD — `introduction-claude-ai` / `cl3` — « Travailler avec ses propres documents »

Plan de frames de l'épisode. Fait foi pour le découpage ; `BRIEF.md` fait foi en cas de divergence de fond. Toutes les frames sont en `status: outline`.

**Conventions du tableau.**

- `début` est exprimé sur **l'horloge des beats**, dont le `0:00` tombe après la carte d'ouverture ; le `data-start` de l'hôte vaut `3,60 + début` pour toute frame de contenu. Les cartes, additives, portent `—`.
- `duration` est en secondes, point décimal, valeur passée telle quelle à la composition.
- `transition_in` : `none` = coupe franche ; `fade` = fondu plein cadre 300 ms, réservé aux six frontières de beats.
- `poster` : chemin du snapshot de recette produit par `hyperframes snapshot --at`, pris au milieu de la fenêtre de la frame. Non livré ; ne se confond ni avec la vignette `<nom>_cover.jpg` (t = 5,700 s du master), ni avec le snapshot du harnais de la carte présentateur (t = 2,000 s).
- `voiceover` : contenu parlé **résumé ou cité**, pas le script final ; `SCRIPT.md` fait foi. Les silences imputés au budget sans parole sont marqués `[silence n,n s]`.
- Les cartes `00` et `99` sont **additives** : elles n'entrent pas dans les 300,0 s de beats.

## Frames

| # | beat | début | src | duration | transition_in | poster | plan_type | status | voiceover |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 00 | — | — | `compositions/frames/00-presenter-card.html` | 3.60 | none | `recette/snapshots/00.png` | D | outline | « Bonjour, je suis Aminou Laouali Abdou. » (600 → 3 000 ms ; aucun sous-titre incrusté, premier bloc du `.srt`) |
| 01 | B1 | 0.00 | `compositions/frames/01-rappel-cl2.html` | 7.00 | fade | `recette/snapshots/01.png` | A | outline | Rappel de l'artefact de `cl2`, avant `0:10` : la consigne enrichie de l'offre d'emploi, à l'écran. Amorce ≤ 6 mots. |
| 02 | B1 | 7.00 | `compositions/frames/02-promesse.html` | 10.00 | none | `recette/snapshots/02.png` | B | outline | Promesse énoncée avant `0:12` de beats : « Vous saurez faire lire vos documents, en extraire ce qui compte, et vérifier le résultat. » Reprise mot pour mot en `26`. |
| 03 | B1 | 17.00 | `compositions/frames/03-situation-fiches.html` | 5.00 | none | `recette/snapshots/03.png` | E | outline | Situation : la pile de soixante fiches d'évaluation manuscrites que personne ne dépouille. `[silence 1,0 s]` |
| 04 | B2 | 22.00 | `compositions/frames/04-malentendu-joindre.html` | 8.00 | fade | `recette/snapshots/04.png` | B | outline | Le malentendu démonté : joindre un fichier ne suffit pas. Ce qui compte, c'est ce qu'on donne à lire et dans quel état. |
| 05 | B2 | 30.00 | `compositions/frames/05-depot-pdf.html` | 10.00 | none | `recette/snapshots/05.png` | A | outline | Première capture réelle, à `0:31` de beats, très avant `1:10` : un PDF déposé dans la conversation. Le geste est verbalisé. |
| 06 | B2 | 40.00 | `compositions/frames/06-photo-nette-vs-floue.html` | 12.00 | none | `recette/snapshots/06.png` | A | outline | Deux photos de la même page, côte à côte : nette, puis floue. La lecture de la seconde est fausse — et rien ne le signale. `[silence 2,0 s]` |
| 07 | B2 | 52.00 | `compositions/frames/07-schema-pdf-prime.html` | 10.00 | none | `recette/snapshots/07.png` | C | outline | Schéma animé : netteté, cadrage, lumière. Quand le PDF existe, on dépose le PDF ; la photo est pour ce qui n'existe que sur papier. |
| 08 | B3 | 62.00 | `compositions/frames/08-u1-carte.html` | 8.00 | fade | `recette/snapshots/08.png` | B | outline | Ouvre l'unité 1, « Résumer et extraire », et annonce que les deux se commandent. |
| 09 | B3 | 70.00 | `compositions/frames/09-u1-resume-commande.html` | 14.00 | none | `recette/snapshots/09.png` | A | outline | Résumé commandé : pour qui, en combien de points, sous quel angle. Le chapitre 2 s'applique intégralement. `[silence 3,0 s]` |
| 10 | B3 | 84.00 | `compositions/frames/10-u1-extraction-tableau.html` | 12.00 | none | `recette/snapshots/10.png` | A | outline | Extraction : les localités et les effectifs sortent en tableau à deux colonnes. On passe d'un document que personne ne dépouille à une donnée triable. |
| 11 | B3 | 96.00 | `compositions/frames/11-u2-carte.html` | 8.00 | none | `recette/snapshots/11.png` | B | outline | Ouvre l'unité 2, « Interroger et exiger la citation », et prévient que c'est le point le plus important du chapitre. |
| 12 | B3 | 104.00 | `compositions/frames/12-u2-question-citation.html` | 16.00 | none | `recette/snapshots/12.png` | A | outline | Question posée au document, avec l'exigence : « Cite le passage exact. » Les trois derniers mots sont l'essentiel. `[silence 4,0 s]` |
| 13 | B3 | 120.00 | `compositions/frames/13-u2-verification-citation.html` | 12.00 | none | `recette/snapshots/13.png` | A | outline | La citation est retrouvée dans le document, au mot près. Vérifier cinq citations remplace relire quarante pages. Annotation validée + coche. |
| 14 | B3 | 132.00 | `compositions/frames/14-u3-carte.html` | 8.00 | none | `recette/snapshots/14.png` | B | outline | Ouvre l'unité 3, « Ce qui ne se dépose jamais ». |
| 15 | B3 | 140.00 | `compositions/frames/15-u3-masquage.html` | 16.00 | none | `recette/snapshots/15.png` | A | outline | Ce que l'écran masque et pourquoi : noms, contacts, dossiers. Verbalise l'aplat — seule occurrence signifiante du masquage dans l'épisode. Annotation erreur + croix, tenue ≥ 2,5 s. |
| 16 | B3 | 156.00 | `compositions/frames/16-u3-schema-document-entier.html` | 10.00 | none | `recette/snapshots/16.png` | C | outline | Schéma animé : un document part en entier, on ne peut pas en retenir la moitié. Redit la règle autrement. |
| 17 | B4 | 166.00 | `compositions/frames/17-appli-photographier.html` | 12.00 | fade | `recette/snapshots/17.png` | A | outline | Le cas de B1 joué en entier. Premier pas : les fiches photographiées par lots de dix, à plat, près d'une fenêtre. |
| 18 | B4 | 178.00 | `compositions/frames/18-appli-consigne.html` | 16.00 | none | `recette/snapshots/18.png` | A | outline | Deuxième pas : la consigne tapée en entier, citée mot pour mot du texte de la leçon — tableau à quatre colonnes, puis les trois reproches les plus fréquents, et « si une écriture est illisible, écris illisible plutôt que de deviner ». Tenue ≥ 4,0 s après la dernière frappe. |
| 19 | B4 | 194.00 | `compositions/frames/19-appli-tableau.html` | 14.00 | none | `recette/snapshots/19.png` | A | outline | Troisième pas : le tableau sort, triable. Annotation neutre + cadre sur la colonne des notes. |
| 20 | B4 | 208.00 | `compositions/frames/20-appli-verification.html` | 12.00 | none | `recette/snapshots/20.png` | A | outline | Quatrième pas, le seul qui compte : cinq fiches reprises au hasard et comparées. Deux erreurs de lecture corrigées, quatre cases marquées illisible saisies à la main. Annotation erreur + croix. |
| 21 | B4 | 220.00 | `compositions/frames/21-appli-gain.html` | 10.00 | none | `recette/snapshots/21.png` | B | outline | Le gain nommé : deux jours de saisie deviennent une heure de vérification. Le contrôle n'a pas disparu, il a changé de nature. |
| 22 | B5 | 230.00 | `compositions/frames/22-contre-exemple-flou.html` | 12.00 | fade | `recette/snapshots/22.png` | A | outline | Contre-exemple : la photo floue relue sans méfiance. La lecture est fausse, l'échec n'est pas signalé, la donnée part quand même. `[silence 2,0 s]` |
| 23 | B5 | 242.00 | `compositions/frames/23-prediction.html` | 8.00 | none | `recette/snapshots/23.png` | B | outline | Rappel actif : « Qu'est-ce qui aurait démasqué l'erreur ? » `[silence 2,5 s]` |
| 24 | B5 | 250.00 | `compositions/frames/24-reponse-citation.html` | 14.00 | none | `recette/snapshots/24.png` | A | outline | Réponse montrée : la citation exigée fait apparaître le passage introuvable. C'est le geste qui rattrape, pas la relecture intégrale. |
| 25 | B5 | 264.00 | `compositions/frames/25-projects.html` | 14.00 | none | `recette/snapshots/25.png` | A | outline | Les Projects : le contexte déposé une fois, les instructions permanentes. Et l'avertissement — on y dépose une fois, puis on oublie ce qui s'y trouve. |
| 26 | B6 | 278.00 | `compositions/frames/26a-rappel-promesse.html` | 6.00 | fade | `recette/snapshots/26.png` | B | outline | Rappel actif avant la carte : « Que faut-il exiger d'un résumé ? » `[silence 2,0 s]` Puis la promesse réaffichée mot pour mot. 1 titre + 1 ligne. |
| 27 | B6 | 284.00 | `compositions/frames/26b-carte-rappel.html` | 7.00 | none | `recette/snapshots/27.png` | B | outline | Carte de rappel, un mot par point, révélés au rythme de la voix : « Déposer. Extraire. Citer. » Les trois tenus ensemble ≥ 4,0 s. |
| 28 | B6 | 291.00 | `compositions/frames/27-renvoi-exercice.html` | 6.00 | none | `recette/snapshots/28.png` | B | outline | Dernière phrase de voix off, à l'impératif : le titre de l'exercice du chapitre. Rien après, sauf les mentions légales et la carte de clôture. |
| 29 | B6 | 297.00 | `compositions/frames/28-mentions-legales.html` | 3.00 | none | `recette/snapshots/29.png` | B | outline | Aucune voix off. `[silence 3,0 s]` Mentions légales, 3 lignes, plan muet par obligation. |
| 99 | — | — | `compositions/frames/99-end-card.html` | 2.40 | none | `recette/snapshots/99.png` | D | outline | Aucune voix off. CTA écrit, seule apparition de l'or : « Passez à l'exercice du chapitre. » Fondu au noir 2 000 → 2 400 ms. |

## Vérification de la durée

```
B1  7 + 10 + 5                                                =   22.0
B2  8 + 10 + 12 + 10                                          =   40.0
B3  8 + 14 + 12 + 8 + 16 + 12 + 8 + 16 + 10                   =  104.0
B4  12 + 16 + 14 + 12 + 10                                    =   64.0
B5  12 + 8 + 14 + 14                                          =   48.0
B6  6 + 7 + 6 + 3                                             =   22.0
                                                              total   =  300.0
```

**Master :** 3,600 (carte `00`) + 300,0 (frames de contenu) + 2,400 (carte `99`) = **306,000 s**, dans la tolérance 301,0–311,0 s. La carte de clôture démarre à 303,600 s du master.

## Conformité aux contraintes de beats

| Contrainte (§ 2.1) | Valeur | Verdict |
| --- | --- | --- |
| B1 = 20–25 s | 22,0 s | conforme |
| B2 = 25–50 s | 40,0 s | conforme |
| B3 = 90–120 s | 104,0 s | conforme |
| B4 = 50–80 s | 64,0 s | conforme |
| B5 = 40–55 s | 48,0 s | conforme |
| B6 = 20–25 s | 22,0 s | conforme |
| **B1 + B2 ≤ 75 s** | **62,0 s** | conforme |
| **B3 + B4 = 170 ± 15 s** | **168,0 s** | conforme |
| **B1 + B6 ≤ 50 s** | **44,0 s** | conforme |
| Total hors cartes = 300 ± 5 s | **300,0 s** | conforme (exact) |
| Aucune frame de contenu < 2,5 s | minimum = frame `29`, 3,0 s | conforme ; cartes `00` (3,60 s) et `99` (2,40 s) fixées par le § 4, hors plancher |
| Mentions légales = 3,00 s sur B6 | après la dernière phrase de voix off | conforme |

Unités de B3 (20–60 s chacune) : résumer et extraire = **34,0 s** · interroger et citer = **36,0 s** · ce qui ne se dépose jamais = **34,0 s**.

## Conformité aux parts de plans

| Type | Frames | Total | Part des 300,0 s | Plafond / plancher (§ 2.5) |
| --- | --- | --- | --- | --- |
| **A** capture réelle annotée | `01` `05` `06` `09` `10` `12` `13` `15` `17` `18` `19` `20` `22` `24` `25` (15 frames) | **193,0 s** | **64.3 %** | ≥ 50 %, cible 60–65 % — conforme |
| **B** carte typographique | `02` `04` `08` `11` `14` `21` `23` `26` `27` `28` `29` (11 frames) | **82,0 s** | **27.3 %** | ≤ 40 % — conforme |
| **C** schéma animé | `07` `16` (2 frames) | **20,0 s** | **6.7 %** | ≤ 15 % — conforme |
| **E** situation | `03` (1 frames) | **5,0 s** | **1.7 %** | ≤ 20 s et B1 seulement — conforme |
| **D** cartes présentateur | `00` `99` | 6,0 s | additif, hors 300,0 s | conforme |

Contrôle : 193,0 + 82,0 + 20,0 + 5,0 = **300,0 s**. Le plancher A ≥ 50 % est opposable : tout arbitrage de durée impose de recalculer cette table.

## Transitions plein cadre

Six seulement, aux six frontières de beats ; toutes les autres liaisons sont des coupes franches.

| # | Frame entrante | Frontière | t master |
| --- | --- | --- | --- |
| 1 | `01-rappel-cl2` | carte d’ouverture → B1 | 3,6 s |
| 2 | `04-malentendu-joindre` | B1 → B2 | 25,6 s |
| 3 | `08-u1-carte` | B2 → B3 | 65,6 s |
| 4 | `17-appli-photographier` | B3 → B4 | 169,6 s |
| 5 | `22-contre-exemple-flou` | B4 → B5 | 233,6 s |
| 6 | `26a-rappel-promesse` | B5 → B6 | 281,6 s |

Aucun flash (WCAG 2.3.1).

## Repères de recette

- **Promesse** énoncée dans la frame `02`, avant le plafond de `0:12` de beats. `SCRIPT.md` verrouille l'amorce de ce plan à **six mots maximum**.
- **Rappel de l'artefact du chapitre précédent** dans la frame `01`, avant `0:10` de beats.
- **Première capture réelle** : frame `05`, très avant le plafond de `1:10`.
- **Vignette livrée** à t = **5,700 s** du master.
- **Snapshots de contrôle** avant rendu : `--at 3.6,25.6,65.6,169.6,233.6,281.6,303.6` — les six frontières de beats plus l'entrée de la carte de clôture.
- **Frames sans sous-titre incrusté** : `00`, les deux plans de carte de rappel de B6, le plan de mentions légales, `99`.
- **Carte de rappel** : « Déposer. Extraire. Citer. »
- **Statuts** : les 29 frames de contenu et les deux cartes sont en `outline`. Le passage à `built` puis `animated` se fait frame par frame, après `lint` et `check` à 0 finding.
