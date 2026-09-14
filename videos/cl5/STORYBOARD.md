# STORYBOARD — `introduction-claude-ai` / `cl5` — « Limites, vérification et confidentialité »

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
| 01 | B1 | 0.00 | `compositions/frames/01-rappel-cl4.html` | 7.00 | fade | `recette/snapshots/01.png` | A | outline | Rappel de l'artefact de `cl4`, avant `0:10` : l'argumentaire produit pour le comité. Amorce ≤ 6 mots. |
| 02 | B1 | 7.00 | `compositions/frames/02-promesse.html` | 10.00 | none | `recette/snapshots/02.png` | B | outline | Promesse énoncée avant `0:12` : « Vous saurez repérer ce qui doit être vérifié, et ce qui ne doit jamais être envoyé. » Reprise mot pour mot en `27`. |
| 03 | B1 | 17.00 | `compositions/frames/03-situation-note.html` | 5.00 | none | `recette/snapshots/03.png` | E | outline | Situation : une note prête à partir vers un ministère, impeccable à la lecture. `[silence 1,0 s]` |
| 04 | B2 | 22.00 | `compositions/frames/04-malentendu-es-tu-sur.html` | 9.00 | fade | `recette/snapshots/04.png` | B | outline | Le malentendu démonté : non, on ne vérifie pas en demandant « es-tu sûr ? ». |
| 05 | B2 | 31.00 | `compositions/frames/05-confirmation.html` | 12.00 | none | `recette/snapshots/05.png` | A | outline | Première capture réelle, à `0:31` de beats : la question « es-tu sûr ? » posée, et la confirmation obtenue avec la même assurance. `[silence 3,0 s]` |
| 06 | B2 | 43.00 | `compositions/frames/06-changement-avis.html` | 11.00 | none | `recette/snapshots/06.png` | A | outline | La même question reposée : la réponse change, sans raison. La confirmation ne prouve rien. Annotation erreur + croix. |
| 07 | B2 | 54.00 | `compositions/frames/07-schema-mecanisme.html` | 10.00 | none | `recette/snapshots/07.png` | C | outline | Schéma animé : il produit ce qui est le plus plausible, mot après mot. Aucun signal interne ne distingue « je sais » de « je comble un trou ». Terme neuf du jour : erreur plausible. |
| 08 | B3 | 64.00 | `compositions/frames/08-u1-carte.html` | 8.00 | fade | `recette/snapshots/08.png` | B | outline | Ouvre l'unité 1, « Où l'erreur est la plus probable ». |
| 09 | B3 | 72.00 | `compositions/frames/09-u1-reference-decret.html` | 16.00 | none | `recette/snapshots/09.png` | A | outline | Une référence réglementaire produite avec numéro et date. Le style est celui d'une note juridique, rien n'accroche à la lecture. `[silence 4,0 s]` |
| 10 | B3 | 88.00 | `compositions/frames/10-u1-zones-risque.html` | 12.00 | none | `recette/snapshots/10.png` | A | outline | Les zones nommées et montrées : chiffres précis, dates, références, noms, actualité — et par-dessus tout ce qui est local. Plus c'est précis et récent, moins c'est fiable. |
| 11 | B3 | 100.00 | `compositions/frames/11-u2-carte.html` | 8.00 | none | `recette/snapshots/11.png` | B | outline | Ouvre l'unité 2, « Les trois questions », et annonce qu'elles prennent moins d'une minute. |
| 12 | B3 | 108.00 | `compositions/frames/12-u2-schema-questions.html` | 10.00 | none | `recette/snapshots/12.png` | C | outline | Schéma animé des trois questions : est-ce vérifiable, qu'est-ce qui casse si c'est faux, ai-je une source indépendante ? |
| 13 | B3 | 118.00 | `compositions/frames/13-u2-application.html` | 18.00 | none | `recette/snapshots/13.png` | A | outline | Les trois questions appliquées à une affirmation, à l'écran. La décision qui en découle : utiliser tel quel, vérifier ces points-là seulement, ou ne pas utiliser. `[silence 4,0 s]` |
| 14 | B3 | 136.00 | `compositions/frames/14-u3-carte.html` | 8.00 | none | `recette/snapshots/14.png` | B | outline | Ouvre l'unité 3, « Ce qui ne sort jamais ». |
| 15 | B3 | 144.00 | `compositions/frames/15-u3-liste-masquee.html` | 16.00 | none | `recette/snapshots/15.png` | A | outline | La liste montrée et verbalisée, aplat de masquage à l'appui — seule occurrence signifiante du masquage dans l'épisode. Le test : l'enverrais-je à un prestataire sans contrat ? Annotation erreur + croix, tenue ≥ 2,5 s. |
| 16 | B3 | 160.00 | `compositions/frames/16-u3-anonymiser.html` | 12.00 | none | `recette/snapshots/16.png` | A | outline | Anonymiser avant : les noms remplacés par des rôles, ce qui localise retiré. Même travail, même résultat. Annotation validée + coche. |
| 17 | B4 | 172.00 | `compositions/frames/17-appli-note-impeccable.html` | 14.00 | fade | `recette/snapshots/17.png` | A | outline | Le cas de B1 joué en entier. La note citant le décret, relue : cohérente, bien écrite, aucun signe d'hésitation. |
| 18 | B4 | 186.00 | `compositions/frames/18-appli-journal-officiel.html` | 16.00 | none | `recette/snapshots/18.png` | A | outline | Vérification à la source : le décret existe, mais le numéro est faux et la date décalée de deux ans. Annotation erreur + croix, tenue ≥ 2,5 s. `[silence 3,0 s]` |
| 19 | B4 | 202.00 | `compositions/frames/19-appli-reference-inexistante.html` | 14.00 | none | `recette/snapshots/19.png` | A | outline | Troisième point cité : il n'existe pas du tout. Le contraste entre l'assurance du texte et le résultat de la vérification est le cœur du plan. |
| 20 | B4 | 216.00 | `compositions/frames/20-appli-note-corrigee.html` | 10.00 | none | `recette/snapshots/20.png` | A | outline | La note part corrigée, avec les références exactes — et meilleure que ce qui aurait été écrit seul : la structure et l'argumentation tenaient. |
| 21 | B4 | 226.00 | `compositions/frames/21-appli-invisible.html` | 6.00 | none | `recette/snapshots/21.png` | B | outline | Ce qui est instructif n'est pas l'erreur : c'est qu'elle était strictement invisible à la lecture. |
| 22 | B5 | 232.00 | `compositions/frames/22-condoleances.html` | 8.00 | fade | `recette/snapshots/22.png` | B | outline | Quand ne pas s'en servir, premier cas : des condoléances. Le destinataire évalue le temps que vous lui avez consacré. |
| 23 | B5 | 240.00 | `compositions/frames/23-prediction.html` | 8.00 | none | `recette/snapshots/23.png` | B | outline | Rappel actif : « Qu'est-ce que le lecteur lit vraiment, ici ? » `[silence 2,5 s]` |
| 24 | B5 | 248.00 | `compositions/frames/24-reponse-relation.html` | 12.00 | none | `recette/snapshots/24.png` | A | outline | Réponse : pas seulement des phrases. Un texte impeccable produit en dix secondes est parfois pire que trois lignes maladroites de votre main. |
| 25 | B5 | 260.00 | `compositions/frames/25-responsabilite.html` | 12.00 | none | `recette/snapshots/25.png` | A | outline | Deuxième cas : la responsabilité réellement engagée — avis médical, interprétation juridique, diagnostic dont dépend une sécurité. Ce sont des actes professionnels, pas des tâches de rédaction. |
| 26 | B5 | 272.00 | `compositions/frames/26-texte-assume.html` | 6.00 | none | `recette/snapshots/26.png` | B | outline | La règle qui décide de votre réputation : ne présentez pas comme votre travail ce que vous n'avez pas relu. |
| 27 | B6 | 278.00 | `compositions/frames/27a-rappel-promesse.html` | 6.00 | fade | `recette/snapshots/27.png` | B | outline | Rappel actif avant la carte : « Quelles sont les trois questions ? » `[silence 2,0 s]` Puis la promesse réaffichée mot pour mot. 1 titre + 1 ligne. |
| 28 | B6 | 284.00 | `compositions/frames/27b-carte-rappel.html` | 7.00 | none | `recette/snapshots/28.png` | B | outline | Carte de rappel, un mot par point, révélés au rythme de la voix : « Vérifiable. Enjeu. Source. » Les trois tenus ensemble ≥ 4,0 s. |
| 29 | B6 | 291.00 | `compositions/frames/28-renvoi-exercice.html` | 6.00 | none | `recette/snapshots/29.png` | B | outline | Dernière phrase de voix off, à l'impératif : le titre de l'exercice du chapitre. |
| 30 | B6 | 297.00 | `compositions/frames/29-mentions-legales.html` | 3.00 | none | `recette/snapshots/30.png` | B | outline | Aucune voix off. `[silence 3,0 s]` Mentions légales, 3 lignes, plan muet par obligation. |
| 99 | — | — | `compositions/frames/99-end-card.html` | 2.40 | none | `recette/snapshots/99.png` | D | outline | Aucune voix off. CTA écrit, seule apparition de l'or : « Passez à l'exercice du chapitre. » Fondu au noir 2 000 → 2 400 ms. |

## Vérification de la durée

```
B1  7 + 10 + 5                                                =   22.0
B2  9 + 12 + 11 + 10                                          =   42.0
B3  8 + 16 + 12 + 8 + 10 + 18 + 8 + 16 + 12                   =  108.0
B4  14 + 16 + 14 + 10 + 6                                     =   60.0
B5  8 + 8 + 12 + 12 + 6                                       =   46.0
B6  6 + 7 + 6 + 3                                             =   22.0
                                                              total   =  300.0
```

**Master :** 3,600 (carte `00`) + 300,0 (frames de contenu) + 2,400 (carte `99`) = **306,000 s**, dans la tolérance 301,0–311,0 s. La carte de clôture démarre à 303,600 s du master.

## Conformité aux contraintes de beats

| Contrainte (§ 2.1) | Valeur | Verdict |
| --- | --- | --- |
| B1 = 20–25 s | 22,0 s | conforme |
| B2 = 25–50 s | 42,0 s | conforme |
| B3 = 90–120 s | 108,0 s | conforme |
| B4 = 50–80 s | 60,0 s | conforme |
| B5 = 40–55 s | 46,0 s | conforme |
| B6 = 20–25 s | 22,0 s | conforme |
| **B1 + B2 ≤ 75 s** | **64,0 s** | conforme |
| **B3 + B4 = 170 ± 15 s** | **168,0 s** | conforme |
| **B1 + B6 ≤ 50 s** | **44,0 s** | conforme |
| Total hors cartes = 300 ± 5 s | **300,0 s** | conforme (exact) |
| Aucune frame de contenu < 2,5 s | minimum = frame `30`, 3,0 s | conforme ; cartes `00` (3,60 s) et `99` (2,40 s) fixées par le § 4, hors plancher |
| Mentions légales = 3,00 s sur B6 | après la dernière phrase de voix off | conforme |

Unités de B3 (20–60 s chacune) : où l'erreur est la plus probable = **36,0 s** · les trois questions = **36,0 s** · ce qui ne sort jamais = **36,0 s**.

## Conformité aux parts de plans

| Type | Frames | Total | Part des 300,0 s | Plafond / plancher (§ 2.5) |
| --- | --- | --- | --- | --- |
| **A** capture réelle annotée | `01` `05` `06` `09` `10` `13` `15` `16` `17` `18` `19` `20` `24` `25` (14 frames) | **182,0 s** | **60.7 %** | ≥ 50 %, cible 60–65 % — conforme |
| **B** carte typographique | `02` `04` `08` `11` `14` `21` `22` `23` `26` `27` `28` `29` `30` (13 frames) | **93,0 s** | **31.0 %** | ≤ 40 % — conforme |
| **C** schéma animé | `07` `12` (2 frames) | **20,0 s** | **6.7 %** | ≤ 15 % — conforme |
| **E** situation | `03` (1 frames) | **5,0 s** | **1.7 %** | ≤ 20 s et B1 seulement — conforme |
| **D** cartes présentateur | `00` `99` | 6,0 s | additif, hors 300,0 s | conforme |

Contrôle : 182,0 + 93,0 + 20,0 + 5,0 = **300,0 s**. Le plancher A ≥ 50 % est opposable : tout arbitrage de durée impose de recalculer cette table.

## Transitions plein cadre

Six seulement, aux six frontières de beats ; toutes les autres liaisons sont des coupes franches.

| # | Frame entrante | Frontière | t master |
| --- | --- | --- | --- |
| 1 | `01-rappel-cl4` | carte d’ouverture → B1 | 3,6 s |
| 2 | `04-malentendu-es-tu-sur` | B1 → B2 | 25,6 s |
| 3 | `08-u1-carte` | B2 → B3 | 67,6 s |
| 4 | `17-appli-note-impeccable` | B3 → B4 | 175,6 s |
| 5 | `22-condoleances` | B4 → B5 | 235,6 s |
| 6 | `27a-rappel-promesse` | B5 → B6 | 281,6 s |

Aucun flash (WCAG 2.3.1).

## Repères de recette

- **Promesse** énoncée dans la frame `02`, avant le plafond de `0:12` de beats. `SCRIPT.md` verrouille l'amorce de ce plan à **six mots maximum**.
- **Rappel de l'artefact du chapitre précédent** dans la frame `01`, avant `0:10` de beats.
- **Première capture réelle** : frame `05`, très avant le plafond de `1:10`.
- **Vignette livrée** à t = **5,700 s** du master.
- **Snapshots de contrôle** avant rendu : `--at 3.6,25.6,67.6,175.6,235.6,281.6,303.6` — les six frontières de beats plus l'entrée de la carte de clôture.
- **Frames sans sous-titre incrusté** : `00`, les deux plans de carte de rappel de B6, le plan de mentions légales, `99`.
- **Carte de rappel** : « Vérifiable. Enjeu. Source. »
- **Statuts** : les 30 frames de contenu et les deux cartes sont en `outline`. Le passage à `built` puis `animated` se fait frame par frame, après `lint` et `check` à 0 finding.
