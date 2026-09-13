# STORYBOARD — `introduction-claude-ai` / `cl4` — « Les usages concrets au quotidien »

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
| 01 | B1 | 0.00 | `compositions/frames/01-rappel-cl3.html` | 7.00 | fade | `recette/snapshots/01.png` | A | outline | Rappel de l'artefact de `cl3`, avant `0:10` : le tableau extrait des fiches d'évaluation. Amorce ≤ 6 mots. |
| 02 | B1 | 7.00 | `compositions/frames/02-promesse.html` | 10.00 | none | `recette/snapshots/02.png` | B | outline | Promesse énoncée avant `0:12` : « Vous saurez reconnaître les tâches où le gain est réel, et celles où il ne l'est pas. » Reprise mot pour mot en `27`. |
| 03 | B1 | 17.00 | `compositions/frames/03-situation-dimanche.html` | 5.00 | none | `recette/snapshots/03.png` | E | outline | Situation : le dimanche soir avant le comité mensuel, trois livrables et une matinée. `[silence 1,0 s]` |
| 04 | B2 | 22.00 | `compositions/frames/04-malentendu-tout.html` | 9.00 | fade | `recette/snapshots/04.png` | B | outline | Le malentendu démonté : non, le gain n'est pas le même sur toutes les tâches. Sur certaines, il est négatif. |
| 05 | B2 | 31.00 | `compositions/frames/05-schema-grille.html` | 11.00 | none | `recette/snapshots/05.png` | C | outline | Schéma animé de la grille à deux critères : la tâche prend-elle du temps sans mobiliser votre expertise, et pouvez-vous juger le résultat ? Terme neuf du jour : aucun. |
| 06 | B2 | 42.00 | `compositions/frames/06-mail-trois-versions.html` | 10.00 | none | `recette/snapshots/06.png` | A | outline | Première capture réelle, à `0:42` de beats, avant `1:10` : trois versions d'un mail difficile demandées en une fois. `[silence 2,0 s]` |
| 07 | B2 | 52.00 | `compositions/frames/07-choix-version.html` | 8.00 | none | `recette/snapshots/07.png` | B | outline | Le choix se fait à l'œil, en quelques secondes. Produire des options coûte moins cher que chercher la consigne parfaite. |
| 08 | B3 | 60.00 | `compositions/frames/08-u1-carte.html` | 8.00 | fade | `recette/snapshots/08.png` | B | outline | Ouvre l'unité 1, « Rédiger », la famille la plus fréquente. |
| 09 | B3 | 68.00 | `compositions/frames/09-u1-notes-brutes.html` | 15.00 | none | `recette/snapshots/09.png` | A | outline | Notes de réunion désordonnées collées telles quelles, puis la structure demandée. Le passage des notes brutes au document lisible est un travail mécanique. `[silence 3,0 s]` |
| 10 | B3 | 83.00 | `compositions/frames/10-u1-couper.html` | 12.00 | none | `recette/snapshots/10.png` | A | outline | Le piège nommé et montré : le texte sort toujours un peu trop long et un peu trop poli. Couper reste votre travail. Annotation erreur + croix sur la formule d'ouverture. |
| 11 | B3 | 95.00 | `compositions/frames/11-u2-carte.html` | 8.00 | none | `recette/snapshots/11.png` | B | outline | Ouvre l'unité 2, « Adapter le registre », et annonce qu'elle rapporte plus que la traduction. |
| 12 | B3 | 103.00 | `compositions/frames/12-u2-circulaire.html` | 16.00 | none | `recette/snapshots/12.png` | A | outline | Une circulaire administrative de quatre pages devient dix lignes lisibles. La consigne est tapée en entier, citée du texte de la leçon. `[silence 4,0 s]` |
| 13 | B3 | 119.00 | `compositions/frames/13-u2-infos-engagent.html` | 11.00 | none | `recette/snapshots/13.png` | A | outline | Le point qui décide : dates, montants et obligations exacts conservés. C'est en simplifiant qu'on perd ce qui engage. Annotation validée + coche. |
| 14 | B3 | 130.00 | `compositions/frames/14-u3-carte.html` | 8.00 | none | `recette/snapshots/14.png` | B | outline | Ouvre l'unité 3, « Préparer et lire », l'usage le moins spontané. |
| 15 | B3 | 138.00 | `compositions/frames/15-u3-argumentaire.html` | 14.00 | none | `recette/snapshots/15.png` | A | outline | Argumentaire structuré : problème, coût de l'inaction, solution, coût. Puis les trois objections probables et une réponse à chacune. |
| 16 | B3 | 152.00 | `compositions/frames/16-u3-tableau-constats.html` | 13.00 | none | `recette/snapshots/16.png` | A | outline | Un tableau collé, trois constats, et surtout ce qui manquerait pour conclure. Cette seconde demande est celle qui a le plus de valeur. `[silence 3,0 s]` |
| 17 | B4 | 165.00 | `compositions/frames/17-appli-ordre-du-jour.html` | 12.00 | fade | `recette/snapshots/17.png` | A | outline | Le cas de B1 joué en entier. Premier pas : l'ordre du jour, à partir de trois objectifs et de la durée disponible. |
| 18 | B4 | 177.00 | `compositions/frames/18-appli-consigne-argumentaire.html` | 16.00 | none | `recette/snapshots/18.png` | A | outline | Deuxième pas : la consigne de l'argumentaire tapée en entier, citée mot pour mot du texte de la leçon. Tenue ≥ 4,0 s après la dernière frappe. |
| 19 | B4 | 193.00 | `compositions/frames/19-appli-objections.html` | 14.00 | none | `recette/snapshots/19.png` | A | outline | Troisième pas : les trois objections anticipées au lieu d'être découvertes en séance. Annotation neutre + cadre. |
| 20 | B4 | 207.00 | `compositions/frames/20-appli-troisieme-constat.html` | 12.00 | none | `recette/snapshots/20.png` | A | outline | Quatrième pas : sur le tableau de fréquentation, deux constats déjà connus, un troisième qui ne l'était pas — la chute concentrée sur un seul jour. |
| 21 | B4 | 219.00 | `compositions/frames/21-appli-gain.html` | 8.00 | none | `recette/snapshots/21.png` | B | outline | Le gain nommé : vingt minutes au lieu d'un dimanche soir, et un argumentaire meilleur parce que les objections ont été anticipées. |
| 22 | B5 | 227.00 | `compositions/frames/22-contre-exemple-avis.html` | 12.00 | fade | `recette/snapshots/22.png` | A | outline | Contre-exemple : un avis technique demandé dans un domaine que l'on ne maîtrise pas. Le texte est impeccable et indéfendable. `[silence 2,0 s]` |
| 23 | B5 | 239.00 | `compositions/frames/23-prediction.html` | 8.00 | none | `recette/snapshots/23.png` | B | outline | Rappel actif : « Lequel des deux critères manque ici ? » `[silence 2,5 s]` |
| 24 | B5 | 247.00 | `compositions/frames/24-reponse-critere.html` | 14.00 | none | `recette/snapshots/24.png` | A | outline | Réponse : le second. Vous ne pouvez pas juger le résultat, donc vous signeriez un texte que vous ne pouvez pas défendre. Ce n'est pas du temps gagné, c'est du risque acheté. |
| 25 | B5 | 261.00 | `compositions/frames/25-recalcul-pourcentage.html` | 12.00 | none | `recette/snapshots/25.png` | A | outline | Le pourcentage qui va être cité en réunion est recalculé à la main, à l'écran. Redemander le calcul ne prouve rien. |
| 26 | B5 | 273.00 | `compositions/frames/26-pas-un-tableur.html` | 5.00 | none | `recette/snapshots/26.png` | B | outline | La limite en une phrase : ce n'est pas un tableur. |
| 27 | B6 | 278.00 | `compositions/frames/27a-rappel-promesse.html` | 6.00 | fade | `recette/snapshots/27.png` | B | outline | Rappel actif avant la carte : « Quels sont les deux critères ? » `[silence 2,0 s]` Puis la promesse réaffichée mot pour mot. 1 titre + 1 ligne. |
| 28 | B6 | 284.00 | `compositions/frames/27b-carte-rappel.html` | 7.00 | none | `recette/snapshots/28.png` | B | outline | Carte de rappel, un mot par point, révélés au rythme de la voix : « Rédiger. Adapter. Préparer. » Les trois tenus ensemble ≥ 4,0 s. |
| 29 | B6 | 291.00 | `compositions/frames/28-renvoi-exercice.html` | 6.00 | none | `recette/snapshots/29.png` | B | outline | Dernière phrase de voix off, à l'impératif : le titre de l'exercice du chapitre. |
| 30 | B6 | 297.00 | `compositions/frames/29-mentions-legales.html` | 3.00 | none | `recette/snapshots/30.png` | B | outline | Aucune voix off. `[silence 3,0 s]` Mentions légales, 3 lignes, plan muet par obligation. |
| 99 | — | — | `compositions/frames/99-end-card.html` | 2.40 | none | `recette/snapshots/99.png` | D | outline | Aucune voix off. CTA écrit, seule apparition de l'or : « Passez à l'exercice du chapitre. » Fondu au noir 2 000 → 2 400 ms. |

## Vérification de la durée

```
B1  7 + 10 + 5                                                =   22.0
B2  9 + 11 + 10 + 8                                           =   38.0
B3  8 + 15 + 12 + 8 + 16 + 11 + 8 + 14 + 13                   =  105.0
B4  12 + 16 + 14 + 12 + 8                                     =   62.0
B5  12 + 8 + 14 + 12 + 5                                      =   51.0
B6  6 + 7 + 6 + 3                                             =   22.0
                                                              total   =  300.0
```

**Master :** 3,600 (carte `00`) + 300,0 (frames de contenu) + 2,400 (carte `99`) = **306,000 s**, dans la tolérance 301,0–311,0 s. La carte de clôture démarre à 303,600 s du master.

## Conformité aux contraintes de beats

| Contrainte (§ 2.1) | Valeur | Verdict |
| --- | --- | --- |
| B1 = 20–25 s | 22,0 s | conforme |
| B2 = 25–50 s | 38,0 s | conforme |
| B3 = 90–120 s | 105,0 s | conforme |
| B4 = 50–80 s | 62,0 s | conforme |
| B5 = 40–55 s | 51,0 s | conforme |
| B6 = 20–25 s | 22,0 s | conforme |
| **B1 + B2 ≤ 75 s** | **60,0 s** | conforme |
| **B3 + B4 = 170 ± 15 s** | **167,0 s** | conforme |
| **B1 + B6 ≤ 50 s** | **44,0 s** | conforme |
| Total hors cartes = 300 ± 5 s | **300,0 s** | conforme (exact) |
| Aucune frame de contenu < 2,5 s | minimum = frame `30`, 3,0 s | conforme ; cartes `00` (3,60 s) et `99` (2,40 s) fixées par le § 4, hors plancher |
| Mentions légales = 3,00 s sur B6 | après la dernière phrase de voix off | conforme |

Unités de B3 (20–60 s chacune) : rédiger = **35,0 s** · adapter le registre = **35,0 s** · préparer et lire = **35,0 s**.

## Conformité aux parts de plans

| Type | Frames | Total | Part des 300,0 s | Plafond / plancher (§ 2.5) |
| --- | --- | --- | --- | --- |
| **A** capture réelle annotée | `01` `06` `09` `10` `12` `13` `15` `16` `17` `18` `19` `20` `22` `24` `25` (15 frames) | **190,0 s** | **63.3 %** | ≥ 50 %, cible 60–65 % — conforme |
| **B** carte typographique | `02` `04` `07` `08` `11` `14` `21` `23` `26` `27` `28` `29` `30` (13 frames) | **94,0 s** | **31.3 %** | ≤ 40 % — conforme |
| **C** schéma animé | `05` (1 frames) | **11,0 s** | **3.7 %** | ≤ 15 % — conforme |
| **E** situation | `03` (1 frames) | **5,0 s** | **1.7 %** | ≤ 20 s et B1 seulement — conforme |
| **D** cartes présentateur | `00` `99` | 6,0 s | additif, hors 300,0 s | conforme |

Contrôle : 190,0 + 94,0 + 11,0 + 5,0 = **300,0 s**. Le plancher A ≥ 50 % est opposable : tout arbitrage de durée impose de recalculer cette table.

## Transitions plein cadre

Six seulement, aux six frontières de beats ; toutes les autres liaisons sont des coupes franches.

| # | Frame entrante | Frontière | t master |
| --- | --- | --- | --- |
| 1 | `01-rappel-cl3` | carte d’ouverture → B1 | 3,6 s |
| 2 | `04-malentendu-tout` | B1 → B2 | 25,6 s |
| 3 | `08-u1-carte` | B2 → B3 | 63,6 s |
| 4 | `17-appli-ordre-du-jour` | B3 → B4 | 168,6 s |
| 5 | `22-contre-exemple-avis` | B4 → B5 | 230,6 s |
| 6 | `27a-rappel-promesse` | B5 → B6 | 281,6 s |

Aucun flash (WCAG 2.3.1).

## Repères de recette

- **Promesse** énoncée dans la frame `02`, avant le plafond de `0:12` de beats. `SCRIPT.md` verrouille l'amorce de ce plan à **six mots maximum**.
- **Rappel de l'artefact du chapitre précédent** dans la frame `01`, avant `0:10` de beats.
- **Première capture réelle** : frame `06`, très avant le plafond de `1:10`.
- **Vignette livrée** à t = **5,700 s** du master.
- **Snapshots de contrôle** avant rendu : `--at 3.6,25.6,63.6,168.6,230.6,281.6,303.6` — les six frontières de beats plus l'entrée de la carte de clôture.
- **Frames sans sous-titre incrusté** : `00`, les deux plans de carte de rappel de B6, le plan de mentions légales, `99`.
- **Carte de rappel** : « Rédiger. Adapter. Préparer. »
- **Statuts** : les 30 frames de contenu et les deux cartes sont en `outline`. Le passage à `built` puis `animated` se fait frame par frame, après `lint` et `check` à 0 finding.
