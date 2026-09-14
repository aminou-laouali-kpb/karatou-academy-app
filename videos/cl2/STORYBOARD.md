# STORYBOARD — `introduction-claude-ai` / `cl2` — « Bien formuler sa demande »

Plan de frames de l'épisode `cl2`. Fait foi pour le découpage ; `BRIEF.md` fait foi en cas de
divergence de fond. Aucune frame n'est construite à ce stade : toutes sont en `status: outline`.

**Conventions du tableau.**

- `début` est exprimé sur **l'horloge des beats**, dont le `0:00` tombe après la carte d'ouverture ;
  le `data-start` de l'hôte vaut donc `3,60 + début` pour toute frame de contenu. Les cartes,
  additives, portent `—`.
- `duration` est en secondes, point décimal, valeur passée telle quelle à la composition. Dans le
  corps de texte, les mêmes grandeurs sont écrites à la virgule.
- `transition_in` : `none` = coupe franche ; `fade` = fondu plein cadre 300 ms,
  `cubic-bezier(0, 0, 0.58, 1)`, réservé aux six frontières de beats.
- `poster` : chemin du snapshot de recette produit par `hyperframes snapshot --at`, pris au milieu
  de la fenêtre de la frame. Ces images servent la relecture interne et ne sont pas livrées ; elles
  ne se confondent ni avec la vignette livrée `<nom>_cover.jpg` (t = 5,700 s du master), ni avec le
  snapshot du harnais de la carte présentateur (t = 2,000 s).
- `voiceover` : contenu parlé **résumé ou cité**, pas le script final ; `SCRIPT.md` fait foi pour le
  texte mot pour mot et pour le décompte 470–490 mots. Les silences imputés au budget de 55,0 s sans
  parole sont marqués `[silence n,n s]`.
- Les cartes `00` et `99` sont **additives** : elles n'entrent pas dans les 300,0 s de beats.

## Frames

| # | beat | début | src | duration | transition_in | poster | plan_type | status | voiceover |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 00 | — | — | `compositions/frames/00-presenter-card.html` | 3.60 | none | `recette/snapshots/00.png` | D | outline | « Bonjour, je suis Aminou Laouali Abdou. » (600 → 3 000 ms). Aucun sous-titre incrusté ; premier bloc du `.srt`. |
| 01 | B1 | 0.00 | `compositions/frames/01-rappel-cl1.html` | 7.00 | fade | `recette/snapshots/01.png` | A | outline | Voici le mail de relance obtenu au chapitre précédent. Poli, correct, interchangeable. `[silence 1,0 s]` |
| 02 | B1 | 7.00 | `compositions/frames/02-promesse.html` | 10.50 | none | `recette/snapshots/02.png` | B | outline | Le problème n'est pas l'outil. Promesse citée mot pour mot : « Vous saurez transformer une demande vague en consigne précise, puis la corriger. » |
| 03 | B1 | 17.50 | `compositions/frames/03-situation-recrutement.html` | 4.50 | none | `recette/snapshots/03.png` | E | outline | À Cotonou, un responsable RH doit recruter un comptable. |
| 04 | B2 | 22.00 | `compositions/frames/04-consigne-vague.html` | 8.00 | fade | `recette/snapshots/04.png` | A | outline | Il écrit ce qui lui vient : « Rédige une offre d'emploi pour un comptable. » `[silence 1,0 s]` |
| 05 | B2 | 30.00 | `compositions/frames/05-offre-generique.html` | 12.00 | none | `recette/snapshots/05.png` | A | outline | L'annonce arrive, impeccable. Elle ne dit ni le secteur, ni la taille de la structure, ni la réalité du poste. `[silence 1,0 s]` — trois annotations désignées l'une après l'autre, jamais simultanées. |
| 06 | B2 | 42.00 | `compositions/frames/06-schema-moyenne.html` | 9.00 | none | `recette/snapshots/06.png` | C | outline | Quand la demande est vague, Claude ne devine pas. Il comble avec la moyenne. Une moyenne ne ressemble à personne. |
| 07 | B2 | 51.00 | `compositions/frames/07-consigne-briefing.html` | 9.00 | none | `recette/snapshots/07.png` | B | outline | Une consigne, c'est un briefing : ce que vous diriez à quelqu'un de compétent qui arrive sur le dossier. |
| 08 | B3 | 60.00 | `compositions/frames/08-unite-contexte.html` | 9.00 | fade | `recette/snapshots/08.png` | B | outline | Premier ingrédient, le contexte : qui parle, pour qui, dans quelle situation. Le plus souvent oublié. `[silence 1,0 s]` |
| 09 | B3 | 69.00 | `compositions/frames/09-frappe-contexte.html` | 17.00 | none | `recette/snapshots/09.png` | A | outline | Il tape le contexte : une PME béninoise de vingt personnes, matériel agricole, poste de comptable unique, donc une personne autonome. `[silence 4,0 s]` La première ligne est posée. |
| 10 | B3 | 86.00 | `compositions/frames/10-unite-tache.html` | 8.00 | none | `recette/snapshots/10.png` | B | outline | Deuxième ingrédient, la tâche : un verbe, une seule demande à la fois. Rédige. Résume. Compare. |
| 11 | B3 | 94.00 | `compositions/frames/11-frappe-tache.html` | 14.00 | none | `recette/snapshots/11.png` | A | outline | Il ajoute la tâche : « Rédige l'offre d'emploi. » `[silence 3,0 s]` Une seule tâche, pas trois empilées dans le même message. |
| 12 | B3 | 108.00 | `compositions/frames/12-unite-format.html` | 8.50 | none | `recette/snapshots/12.png` | B | outline | Troisième ingrédient, le format : longueur, structure, ton, support. Sans lui, Claude choisit, et il choisit long. |
| 13 | B3 | 116.50 | `compositions/frames/13-frappe-format.html` | 15.50 | none | `recette/snapshots/13.png` | A | outline | Il précise le format : « une page maximum, quatre parties — l'entreprise, la mission, le profil, comment postuler ». `[silence 3,5 s]` Puis le ton : direct, concret. |
| 14 | B3 | 132.00 | `compositions/frames/14-unite-exemple.html` | 10.00 | none | `recette/snapshots/14.png` | B | outline | Quatrième ingrédient, l'exemple : le plus puissant, le moins utilisé. Collez un texte à vous, demandez de s'en inspirer. |
| 15 | B3 | 142.00 | `compositions/frames/15-frappe-exemple.html` | 20.00 | none | `recette/snapshots/15.png` | A | outline | Il colle son offre de l'an dernier et demande de s'en inspirer. `[silence 5,0 s]` Le bloc collé est masqué à l'image : ce texte lui appartient, le vôtre sera le vôtre. |
| 16 | B4 | 162.00 | `compositions/frames/16-consigne-complete.html` | 14.00 | fade | `recette/snapshots/16.png` | A | outline | Six lignes, pas une page. Il relit les quatre ingrédients, puis il envoie. `[silence 3,0 s]` La réponse arrive. |
| 17 | B4 | 176.00 | `compositions/frames/17-offre-enrichie.html` | 17.00 | none | `recette/snapshots/17.png` | A | outline | L'annonce est là, en quatre parties nommées. Et surtout cette phrase : la personne sera seule sur la fonction comptable. `[silence 5,5 s]` Le poste réel apparaît, à la place du décor. |
| 18 | B4 | 193.00 | `compositions/frames/18-offre-mobile.html` | 10.00 | none | `recette/snapshots/18.png` | A | outline | La même annonce, relue sur téléphone. Le format tient : la partie « le profil » reste lisible. `[silence 1,0 s]` |
| 19 | B4 | 203.00 | `compositions/frames/19-split-avant-apres.html` | 19.00 | none | `recette/snapshots/19.png` | A | outline | Avant, après. À gauche, une annonce interchangeable. À droite, une annonce qui décrit ce poste-là. `[silence 3,0 s]` Rien de technique n'a changé : seulement l'émetteur, le destinataire, l'objet et la forme, tous nommés. |
| 20 | B5 | 222.00 | `compositions/frames/20-brouillon-pas-verdict.html` | 5.00 | fade | `recette/snapshots/20.png` | B | outline | La première réponse est un brouillon. `[silence 1,0 s]` |
| 21 | B5 | 227.00 | `compositions/frames/21-prediction.html` | 10.00 | none | `recette/snapshots/21.png` | B | outline | Question posée à l'apprenant : quelle relance envoyer avant même la rédaction ? `[silence 2,5 s]` Réponse : celle qui réclame ce qui manque. |
| 22 | B5 | 237.00 | `compositions/frames/22-relance-informations.html` | 8.00 | none | `recette/snapshots/22.png` | A | outline | Il tape la relance : « Avant de rédiger, dis-moi quelles informations te manquent. » Puis il envoie. |
| 23 | B5 | 245.00 | `compositions/frames/23-questions-de-claude.html` | 16.00 | none | `recette/snapshots/23.png` | A | outline | Claude renvoie ses questions : la rémunération, la date de prise de poste, le canal de candidature. `[silence 3,0 s]` Trois trous de la consigne, désignés un par un. |
| 24 | B5 | 261.00 | `compositions/frames/24-corrections-empilees.html` | 9.00 | none | `recette/snapshots/24.png` | A | outline | Contre-exemple : des corrections empilées sur une réponse hors sujet. `[silence 2,0 s]` Le fil se disperse. |
| 25 | B5 | 270.00 | `compositions/frames/25-reformuler-entier.html` | 5.00 | none | `recette/snapshots/25.png` | B | outline | Reformulez tout, dans un nouveau message. `[silence 1,5 s]` |
| 26a | B6 | 275.00 | `compositions/frames/26a-carte-rappel-promesse.html` | 6.00 | fade | `recette/snapshots/26a.png` | B | outline | Rappel actif avant la carte (§2.3.5) : « Quels étaient les quatre ingrédients ? » `[silence 2,0 s]` Puis la promesse réaffichée mot pour mot, dérivée d'`objective` et couvrant ses deux gestes : « Vous saurez écrire une consigne précise, puis corriger la réponse. » (66 signes, 1 titre + 1 ligne) |
| 26b | B6 | 281.00 | `compositions/frames/26b-carte-rappel-quatre-mots.html` | 7.00 | fade | `recette/snapshots/26b.png` | B | outline | Carte de rappel. Révélation au rythme de la voix, un mot par point : « Contexte. Tâche. Format. Exemple. » (33 signes, 2 lignes). Les quatre restent visibles ensemble **≥ 4,0 s**, de 2,5 s à 7,0 s de ce plan. |
| 27 | B6 | 288.00 | `compositions/frames/27-renvoi-exercice.html` | 9.00 | none | `recette/snapshots/27.png` | B | outline | La consigne du responsable RH est rangée : elle resservira. `[silence 1,0 s]` Dernière phrase de voix off de la vidéo, à l'impératif : « Réécrivez une de vos demandes avec les quatre ingrédients. » |
| 28 | B6 | 297.00 | `compositions/frames/28-mentions-legales.html` | 3.00 | none | `recette/snapshots/28.png` | B | outline | **Aucune voix off.** `[silence 3,0 s]` « Claude et Anthropic sont des marques de leurs détenteurs. Karatou Academy n'est pas affiliée à Anthropic. » + mois et année de production [à fournir]. Sans sous-titre incrusté. |
| 99 | — | — | `compositions/frames/99-end-card.html` | 2.40 | none | `recette/snapshots/99.png` | D | outline | Aucune voix off. CTA écrit, seule apparition de l'or : « Passez à l'exercice du chapitre. » Fondu au noir 2 000 → 2 400 ms. |

## Vérification de la durée

**Frames de contenu, somme des `duration` :**

```
B1  7 + 10.5 + 4.5                                            =   22.0
B2  8 + 12 + 9 + 9                                            =   38.0
B3  9 + 17 + 8 + 14 + 8.5 + 15.5 + 10 + 20                    =  102.0
B4  14 + 17 + 10 + 19                                         =   60.0
B5  5 + 10 + 8 + 16 + 9 + 5                                   =   53.0
B6  6 + 7 + 9 + 3                                             =   25.0
                                                              total   =  300.0
```

**Master :** 3,600 (carte `00`) + 300,0 (frames de contenu) + 2,400 (carte `99`) = **306,000 s**, dans la tolérance 301,0–311,0 s. La carte de clôture démarre à 303,600 s du master (306,0 − 2,40).

## Conformité aux contraintes de beats

| Contrainte (§ 2.1) | Valeur | Verdict |
| --- | --- | --- |
| B1 = 20–25 s | 22,0 s | conforme |
| B2 = 25–50 s | 38,0 s | conforme |
| B3 = 90–120 s | 102,0 s | conforme |
| B4 = 50–80 s | 60,0 s | conforme |
| B5 = 40–55 s | 53,0 s | conforme |
| B6 = 20–25 s | 25,0 s | conforme |
| **B1 + B2 ≤ 75 s** | **60,0 s** | conforme |
| **B3 + B4 = 170 ± 15 s** | **162,0 s** | conforme |
| **B1 + B6 ≤ 50 s** | **47,0 s** | conforme |
| Total hors cartes = 300 ± 5 s | **300,0 s** | conforme (exact) |
| Aucune frame de contenu < 2,5 s | minimum = frame `28`, 3,0 s | conforme ; cartes `00` (3,60 s) et `99` (2,40 s) fixées par le § 4, hors plancher |
| Mentions légales = 3,00 s sur B6 | frame `28`, après la dernière phrase de voix off | conforme |

Unités de B3 (20–60 s chacune) : contexte `08`+`09` = **26,0 s** · tâche `10`+`11` = **22,0 s** · format `12`+`13` = **24,0 s** · exemple `14`+`15` = **30,0 s**.

## Conformité aux parts de plans

| Type | Frames | Total | Part des 300,0 s | Plafond / plancher (§ 2.5) |
| --- | --- | --- | --- | --- |
| **A** capture réelle annotée | `01` `04` `05` `09` `11` `13` `15` `16` `17` `18` `19` `22` `23` `24` (14 frames) | **186,5 s** | **62.2 %** | ≥ 50 %, cible 60–65 % — conforme |
| **B** carte typographique | `02` `07` `08` `10` `12` `14` `20` `21` `25` `26a` `26b` `27` `28` (13 frames) | **100,0 s** | **33.3 %** | ≤ 40 % — conforme |
| **C** schéma animé | `06` (1 frames) | **9,0 s** | **3.0 %** | ≤ 15 % — conforme |
| **E** situation | `03` (1 frames) | **4,5 s** | **1.5 %** | ≤ 20 s et B1 seulement — conforme |
| **D** cartes présentateur | `00` `99` | 6,0 s | additif, hors 300,0 s | conforme |

Contrôle : 186,5 + 100,0 + 9,0 + 4,5 = **300,0 s**.

## Budget de parole (§ 7.1)

245,0 s parlées + 55,0 s sans parole = 300,0 s. Ventilation des 55,0 s, frame par frame, mentions légales comprises :

| Poste | Frames et durées | Total |
| --- | --- | --- |
| Démonstrations (frappe, envoi, lecture) | `09` 4,0 · `11` 3,0 · `13` 3,5 · `15` 5,0 · `16` 3,0 · `17` 5,5 · `19` 3,0 · `23` 3,0 | **30,0 s** |
| Récapitulation | `26a` 2,0 (silence de prédiction) · `26b` 5,0 (les quatre mots tenus ensemble) | **7,0 s** |
| Mentions légales | `28` 3,0, plan muet par obligation (§ 10) | **3,0 s** |
| Prédiction et rappel actif | `21` 2,5 · `24` 2,0 · `25` 1,5 | **6,0 s** |
| Respirations | `01` `04` `05` `08` `18` `20` `22` `23` `27`, 1,0 s chacune | **9,0 s** |
| | **somme** | **55,0 s** |

245,0 s parlées à 115–120 mots/min ⇒ **470 à 490 mots**, arrêtés dans `SCRIPT.md` et mesurés sur les seuls segments parlés. Hors plage, on coupe du texte ; on ne ralentit pas.

## Transitions plein cadre

Six seulement, aux six frontières de beats ; toutes les autres liaisons sont des coupes franches (`none`).

| # | Frame entrante | Frontière | t master |
| --- | --- | --- | --- |
| 1 | `01-rappel-cl1` | carte d’ouverture → B1 | 3,6 s |
| 2 | `04-consigne-vague` | B1 → B2 | 25,6 s |
| 3 | `08-unite-contexte` | B2 → B3 | 63,6 s |
| 4 | `16-consigne-complete` | B3 → B4 | 165,6 s |
| 5 | `20-brouillon-pas-verdict` | B4 → B5 | 225,6 s |
| 6 | `26a-carte-rappel-promesse` | B5 → B6 | 278,6 s |

Aucun flash (WCAG 2.3.1).

## Repères de recette

- **Promesse** énoncée à **`0:09,5` de beats au plus tard** (master **13,1 s**), dans la frame `02` : la phrase d'amorce « Le problème n'est pas l'outil. » la précède. Plafond `0:12` de beats (master 15,600 s), marge ≈ 2,5 s. `SCRIPT.md` verrouille cette amorce à **six mots maximum**, sous peine de faire franchir le plafond.
- **Promesse gelée**, couvrant les deux gestes d'`objective` : « Vous saurez écrire une consigne précise, puis corriger la réponse. » (66 signes). Reprise mot pour mot sur la frame `26a`.
- **Rappel de l'artefact de `cl1`** dans la frame `01`, avant `0:10` de beats.
- **Première capture réelle** : frame `01`, master 3,600 s, très avant le plafond de `1:10`.
- **Vignette livrée** à t = **5,700 s** du master : la capture du mail de relance doit y être stable et entièrement révélée.
- **Snapshots de contrôle** avant rendu : `--at 3.6,25.6,63.6,165.6,225.6,278.6,303.6` — les six frontières de beats plus l'entrée de la carte de clôture.
- **Marges d'ajustement** si une durée doit bouger : frames `09` (17,0 s), `15` (20,0 s), `17` (17,0 s) et `19` (19,0 s). Jamais sur `28`, gelée à 3,00 s, ni sur `03`, `26a`, `26b` et les cartes.
- **Frames sans sous-titre incrusté** : `00`, `26a`, `26b`, `28`, `99`.
- **Statuts** : les 29 frames de contenu et les deux cartes sont en `outline`. Le passage à `built` puis `animated` se fait frame par frame, après `lint` et `check` à 0 finding.
