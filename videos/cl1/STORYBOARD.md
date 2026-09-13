# STORYBOARD — introduction-claude-ai / cl1 — « Qu'est-ce que Claude ? »

Statut d'ensemble : **outline**. Aucune frame n'est encore construite ni animée.

Master 306,00 s = carte d'ouverture 3,60 s + contenu 300,00 s + carte de clôture 2,40 s.

La colonne `début` est exprimée sur l'horloge des beats, dont le `0:00` tombe après la carte d'ouverture. Le `data-start` de l'hôte vaut donc `3,60 + début` pour toute frame de contenu ; la carte d'ouverture est à `data-start="0" data-duration="3.6"`, la carte de clôture à `data-start="303.6" data-duration="2.4"`, toutes deux sur `data-track-index="0"`.

Convention `poster` : chemin du snapshot de recette produit par `hyperframes snapshot --at`, pris au milieu de la fenêtre de la frame. Ces images servent la relecture interne et ne sont pas livrées. Elles ne se confondent ni avec la vignette livrée `<nom>_cover.jpg` (t = 5,70 s du master), ni avec le snapshot du harnais de la carte présentateur (t = 2,00 s).

## Tableau des frames

| # | beat | début | src | duration | transition_in | poster | plan_type | status | voiceover |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 00 | — | — | `compositions/frames/00-presenter-card.html` | 3.60 | none | `recette/snapshots/00.png` | D | outline | « Bonjour, je suis Aminou Laouali Abdou. » (600 → 3 000 ms ; aucun sous-titre incrusté, premier bloc du `.srt`) |
| 01 | B1 | 0.00 | `compositions/frames/01-accroche-cinq-rapports.html` | 6.00 | none | `recette/snapshots/01.png` | E | outline | Pose le cas du champ `example` : le vendredi, cinq rapports de terrain arrivent ; le lundi, la direction attend une page. |
| 02 | B1 | 6.00 | `compositions/frames/02-accroche-samedi.html` | 5.00 | none | `recette/snapshots/02.png` | E | outline | Dit ce que l'exercice coûte : une matinée de samedi, chaque semaine, devant un document vide. |
| 03 | B1 | 11.00 | `compositions/frames/03-accroche-promesse.html` | 7.00 | none | `recette/snapshots/03.png` | B | outline | Énonce la promesse, en vous : « À la fin de ce chapitre, vous saurez ce qu'est Claude et où y accéder. » **Aucune respiration en tête de plan** : la première syllabe tombe à ≤ 12,00 s des beats (≤ 15,60 s master). Annonce qu'on repartira de ce cas. |
| 04 | B1 | 18.00 | `compositions/frames/04-accroche-titre-chapitre.html` | 6.00 | none | `recette/snapshots/04.png` | B | outline | Nomme le chapitre et annonce l'ordre : d'abord lever deux malentendus, ensuite regarder l'écran. |
| 05 | B2 | 24.00 | `compositions/frames/05-cadrage-deux-malentendus.html` | 8.00 | fade | `recette/snapshots/05.png` | B | outline | Démonte les deux malentendus symétriques : ce n'est ni magique, ni réservé à qui sait programmer. Aucun code, aucun menu. |
| 06 | B2 | 32.00 | `compositions/frames/06-cadrage-zone-de-saisie.html` | 9.00 | none | `recette/snapshots/06.png` | A | outline | Première capture réelle, à 0:32,00 des beats, bien avant 1:10. Décrit ce que l'écran montre : une zone de texte, et rien d'autre. Annotation neutre + cadre sur la zone. |
| 07 | B2 | 41.00 | `compositions/frames/07-cadrage-demande-tapee.html` | 10.00 | none | `recette/snapshots/07.png` | A | outline | Verbalise le geste : on écrit sa demande en français courant, comme on l'écrirait à un collègue. Silence de démonstration pendant la frappe. |
| 08 | B2 | 51.00 | `compositions/frames/08-cadrage-reponse-affichee.html` | 11.00 | none | `recette/snapshots/08.png` | A | outline | Verbalise le résultat : la réponse arrive en texte, dans la même page, et elle se relit. Annotation neutre + cadre sur la réponse. |
| 09 | B2 | 62.00 | `compositions/frames/09-cadrage-schema-anthropic.html` | 8.00 | none | `recette/snapshots/09.png` | C | outline | Schéma animé : Anthropic l'a entraîné sur d'immenses volumes de texte, il n'a été programmé pour aucune tâche unique — et il n'a jamais travaillé dans votre organisation. Terme neuf du jour : assistant conversationnel. |
| 10 | B3 | 70.00 | `compositions/frames/10-notion-u1-carte.html` | 7.00 | fade | `recette/snapshots/10.png` | B | outline | Ouvre l'unité 1, « Ce que Claude fait avec du texte », et annonce qu'on va le voir sur deux gestes seulement. |
| 11 | B3 | 77.00 | `compositions/frames/11-notion-u1-resume.html` | 12.00 | none | `recette/snapshots/11.png` | A | outline | Premier geste montré et dit : on demande un résumé en cinq points, on obtient cinq points. Les cinq points retapés en surimpression forment un **bloc de citation à lecture guidée** (dérogation du point 5 du BRIEF) : bloc posé entier et figé, deux appels au plus par surlignage progressif, ≥ 2,5 s chacun. Annotation validée + coche. |
| 12 | B3 | 89.00 | `compositions/frames/12-notion-u1-depot-pdf.html` | 11.00 | none | `recette/snapshots/12.png` | A | outline | Deuxième geste : un document déposé dans la conversation est lu, et on en fait ressortir ce qui intéresse. Reformule la notion autrement, deuxième énoncé. |
| 13 | B3 | 100.00 | `compositions/frames/13-notion-u2-carte.html` | 7.00 | fade | `recette/snapshots/13.png` | B | outline | Ouvre l'unité 2, « Il peut se tromper avec assurance », et prévient que c'est le point le plus important du chapitre. |
| 14 | B3 | 107.00 | `compositions/frames/14-notion-u2-question-locale.html` | 12.00 | none | `recette/snapshots/14.png` | A | outline | Verbalise la question posée : un sujet local et récent, dont la réponse officielle est connue. Sa connaissance s'arrête à une date. |
| 15 | B3 | 119.00 | `compositions/frames/15-notion-u2-reponse-fausse.html` | 13.00 | none | `recette/snapshots/15.png` | A | outline | Lit la réponse, puis nomme l'écart avec la source officielle. Insiste : elle est bien écrite, assurée, et fausse. Annotation erreur + croix, tenue ≥ 2,5 s. Silence de lecture au milieu du plan. |
| 16 | B3 | 132.00 | `compositions/frames/16-notion-u2-glose-hallucination.html` | 6.00 | none | `recette/snapshots/16.png` | B | outline | Pose le mot une fois et le glose : hallucination, réponse fausse donnée avec assurance. Renvoie au chapitre 5 pour la méthode, sans l'exposer. |
| 17 | B3 | 138.00 | `compositions/frames/17-notion-u3-carte.html` | 7.00 | fade | `recette/snapshots/17.png` | B | outline | Ouvre l'unité 3, « Ce que vous n'y collez jamais ». |
| 18 | B3 | 145.00 | `compositions/frames/18-notion-u3-liste-masquee.html` | 15.00 | none | `recette/snapshots/18.png` | A | outline | Dit ce que l'écran masque et pourquoi : noms, contacts, dossiers, identifiants n'entrent pas dans la zone de saisie. Verbalise l'aplat noir — seule occurrence signifiante du masquage dans l'épisode. Annotation erreur + croix sur la zone masquée, tenue ≥ 2,5 s. |
| 19 | B3 | 160.00 | `compositions/frames/19-notion-u3-schema-sortie.html` | 10.00 | none | `recette/snapshots/19.png` | C | outline | Schéma animé : ce que vous tapez quitte votre organisation. Redit la règle autrement — on anonymise avant, ou on n'envoie pas. |
| 20 | B4 | 170.00 | `compositions/frames/20-acces-trois-portes.html` | 10.00 | fade | `recette/snapshots/20.png` | A | outline | Beat « accès », 18,0 s imputées sur B4. Nomme les trois portes d'entrée et dit que la conversation est la même derrière : le site, l'application mobile, l'application bureau. Deux captures réelles côte à côte. |
| 21 | B4 | 180.00 | `compositions/frames/21-acces-compte-connexion.html` | 8.00 | none | `recette/snapshots/21.png` | B | outline | Deux conditions : un compte, une connexion — il ne fonctionne pas hors ligne. Une version gratuite existe et suffit pour ce module ; sa limite se recharge. Aucun montant, aucun palier, aucun chiffre. |
| 22 | B4 | 188.00 | `compositions/frames/22-appli-depot-rapports.html` | 11.00 | none | `recette/snapshots/22.png` | A | outline | Reprend le cas de B1 et le joue en entier. Premier pas verbalisé : les cinq rapports déposés dans une seule et même conversation. |
| 23 | B4 | 199.00 | `compositions/frames/23-appli-consigne-tapee.html` | 14.00 | none | `recette/snapshots/23.png` | A | outline | Deuxième pas : la consigne, tapée en entier à l'écran, citée mot pour mot du texte de la leçon — trois parties demandées, ton factuel, rapport d'origine cité. Le mot consigne est posé ici, en remplacement du terme anglais. **Bloc de citation à lecture guidée, 275 caractères** (dérogation du point 5 du BRIEF) : bloc figé, un seul appel par surlignage, puis tenue ≥ 4,0 s après la dernière frappe. Plan à mesurer en tête de la liste de recette. |
| 24 | B4 | 213.00 | `compositions/frames/24-appli-note-trois-parties.html` | 11.00 | none | `recette/snapshots/24.png` | A | outline | Troisième pas : la note revient structurée en trois parties. Les trois intertitres retapés en surimpression forment un **bloc de citation à lecture guidée** (dérogation du point 5 du BRIEF) : un appel unique, les trois pris comme un seul syntagme. Annotation neutre + cadre sur les trois intertitres, une seule, tenue ≥ 2,5 s. |
| 25 | B4 | 224.00 | `compositions/frames/25-appli-alerte-manquante.html` | 10.00 | none | `recette/snapshots/25.png` | A | outline | Quatrième pas, le seul qui compte : la relecture. Nomme le point de sécurité que le brouillon a laissé de côté et qui est réintégré à la main. Annotation erreur + croix. |
| 26 | B5 | 234.00 | `compositions/frames/26-conso-prediction.html` | 6.00 | fade | `recette/snapshots/26.png` | B | outline | Rappel actif : question posée à l'apprenant — la note qui revient est plus longue que ce que la réunion peut lire ; que faites-vous ? Deux à trois secondes de silence, puis la réponse : une première réponse n'est pas un verdict, on relance pour raccourcir. **Aucun nombre de lignes n'est prononcé ni affiché ici**, et aucune exigence chiffrée n'est prêtée à la direction : `example.challenge` ne demande qu'une note d'une page. Toute longueur décrite doit décrire la capture 13 et être consignée dans `RECETTE.md` (§10). |
| 27 | B5 | 240.00 | `compositions/frames/27-conso-relance-tapee.html` | 12.00 | none | `recette/snapshots/27.png` | A | outline | Verbalise la relance tapée à l'écran, citée du texte de la leçon : trop long, refais en cinq lignes. L'écran montre `5 lignes`, la voix dit « cinq lignes ». Silence pendant la frappe. |
| 28 | B5 | 252.00 | `compositions/frames/28-conso-reponse-raccourcie.html` | 12.00 | none | `recette/snapshots/28.png` | A | outline | Montre l'effet de la relance : cinq lignes à l'écran, décrites comme telles. Redit autrement — la conversation se corrige au fil de l'échange, comme avec un collègue. Annotation validée + coche. |
| 29 | B5 | 264.00 | `compositions/frames/29-conso-nouvelle-conversation.html` | 14.00 | none | `recette/snapshots/29.png` | A | outline | Contre-exemple, avec son effet : la même demande relancée dans une **nouvelle** conversation, qui ne sait rien de ce qui précède. Conclusion verbalisée : gardez la même conversation ouverte aussi longtemps que le sujet ne change pas. Formulation écrite pour ne reconstituer aucun n-gramme de 12 mots de la quatrième section du texte — point vérifié nommément au contrôle de non-recouvrement. Le mot « fil » n'est ni dit ni affiché. |
| 30 | B6 | 278.00 | `compositions/frames/30-cloture-cas-referme.html` | 4.00 | fade | `recette/snapshots/30.png` | B | outline | Referme le cas de B1 : la matinée de samedi n'a pas disparu, elle a changé de nature — de la page blanche à la relecture. Rappel actif avant la carte. |
| 31 | B6 | 282.00 | `compositions/frames/31-cloture-rappel-promesse.html` | 4.50 | none | `recette/snapshots/31.png` | B | outline | **Carte de rappel parlée, panneau 1** : la promesse **affichée** mot pour mot — « À la fin de ce chapitre, vous saurez ce qu'est Claude et où y accéder. » (70 caractères, §2.3.1). La voix off la rappelle en une ligne courte et ne la relit pas en entier : ses quinze mots demanderaient 7,6 s au débit de l'épisode, le plan en dure 4,50 ; elle a été prononcée à la frame `03`. Plaque de sous-titres incrustée omise, comme le prescrit le §2.3.3 pour la carte de rappel ; le bloc figure au `.srt` livré en piste CC. |
| 32 | B6 | 286.50 | `compositions/frames/32-cloture-rappel-points.html` | 6.50 | none | `recette/snapshots/32.png` | B | outline | **Carte de rappel parlée, panneau 2** : trois points révélés au rythme de la voix (§2.3.3), un par unité de B3 — « Vous écrivez, il répond en texte. » · « Récent ou local : vérifiez. » · « Aucun nom, aucun contact. » (6 · 4 · 4 mots, 85 caractères cumulés). Révélations à 0,0 / 1,0 / 2,0 s, la voix **nommant** chaque point d'un syntagme bref au moment où il paraît, le libellé complet restant à l'écran ; les trois visibles ensemble de 2,30 s à 6,50 s, soit 4,20 s ≥ 4,00 s. La voix finit avant la fin du plan : 2,0 s de tenue muette budgétées. Plaque de sous-titres incrustée omise (§2.3.3), blocs au `.srt`. |
| 33 | B6 | 293.00 | `compositions/frames/33-cloture-renvoi-exercice.html` | 4.00 | none | `recette/snapshots/33.png` | B | outline | **Dernière phrase de la voix off de la vidéo**, à l'impératif, égale à `practice.title` : « Ouvrez Claude et testez-le sur votre propre travail. » Rien n'est dit après. |
| 34 | B6 | 297.00 | `compositions/frames/34-mentions-legales.html` | 3.00 | none | `recette/snapshots/34.png` | B | outline | Aucune voix off, aucun sous-titre : 3,00 s intégralement muettes, budgétées comme telles au budget de voix off du BRIEF. Texte à 80 px : « Claude et Anthropic sont des marques de leurs détenteurs. Karatou Academy n'est pas affiliée à Anthropic. » + mois et année de production. |
| 99 | — | — | `compositions/frames/99-end-card.html` | 2.40 | none | `recette/snapshots/99.png` | D | outline | Aucune voix off. CTA « Passez à l'exercice du chapitre. », seule apparition de l'or de la vidéo. Entrée en cascade 0 → 780 ms, tenue 780 → 2 000, fondu au noir 2 000 → 2 400. |

## Vérification arithmétique

### Total de contenu

`6,00 + 5,00 + 7,00 + 6,00 + 8,00 + 9,00 + 10,00 + 11,00 + 8,00 + 7,00 + 12,00 + 11,00 + 7,00 + 12,00 + 13,00 + 6,00 + 7,00 + 15,00 + 10,00 + 10,00 + 8,00 + 11,00 + 14,00 + 11,00 + 10,00 + 6,00 + 12,00 + 12,00 + 14,00 + 4,00 + 4,50 + 6,50 + 4,00 + 3,00 = **300,00 s**` ✔ (34 frames de contenu)

Vérification par beat : `24,00 + 46,00 + 100,00 + 64,00 + 44,00 + 22,00 = 300,00 s` ✔

Continuité de la colonne `début` : chaque début est égal à la somme des durées précédentes, sans trou ni chevauchement ; la dernière frame ferme sur `297,00 + 3,00 = 300,00` ✔

Master : `3,60 + 300,00 + 2,40 = **306,00 s**` ✔ — dans la tolérance 301,0–311,0 s.

Aucune durée n'a été retouchée par la présente révision : les corrections portent sur le fond et sur les déclarations de contrat, pas sur le découpage. Le rebalancement n'était donc pas nécessaire, et l'addition ci-dessus est refaite intégralement.

### Total par beat

| Beat | Frames | Calcul | Total | Fenêtre du contexte | Verdict |
| --- | --- | --- | --- | --- | --- |
| B1 Accroche | 01–04 | 6,00 + 5,00 + 7,00 + 6,00 | **24,00 s** | 20–25 s | ✔ |
| B2 Cadrage | 05–09 | 8,00 + 9,00 + 10,00 + 11,00 + 8,00 | **46,00 s** | 25–50 s | ✔ |
| B3 Notion | 10–19 | 7,00 + 12,00 + 11,00 + 7,00 + 12,00 + 13,00 + 6,00 + 7,00 + 15,00 + 10,00 | **100,00 s** | 90–120 s | ✔ |
| B4 Application | 20–25 | 10,00 + 8,00 + 11,00 + 14,00 + 11,00 + 10,00 | **64,00 s** | 50–80 s | ✔ |
| B5 Consolidation | 26–29 | 6,00 + 12,00 + 12,00 + 14,00 | **44,00 s** | 40–55 s | ✔ |
| B6 Clôture | 30–34 | 4,00 + 4,50 + 6,50 + 4,00 + 3,00 | **22,00 s** | 20–25 s | ✔ |
| | | **Somme** | **300,00 s** | 300 s exactement | ✔ |

### Contraintes croisées entre beats

| Contrainte | Calcul | Résultat | Verdict |
| --- | --- | --- | --- |
| `B1 + B2 ≤ 75 s` | 24,00 + 46,00 | **70,00 s** (marge 5,00 s) | ✔ |
| `B3 + B4 = 170 ± 15 s` | 100,00 + 64,00 | **164,00 s** (écart 6,00 s, fenêtre 155,00–185,00) | ✔ |
| `B1 + B6 ≤ 50 s` | 24,00 + 22,00 | **46,00 s** (marge 4,00 s) | ✔ |

### Total par type de plan (sur les 300,00 s de beats)

| Type | Frames | Calcul | Total | Part | Contrainte | Verdict |
| --- | --- | --- | --- | --- | --- | --- |
| **A** capture réelle annotée | 06, 07, 08, 11, 12, 14, 15, 18, 20, 22, 23, 24, 25, 27, 28, 29 | (9 + 10 + 11) + (12 + 11 + 12 + 13 + 15) + (10 + 11 + 14 + 11 + 10) + (12 + 12 + 14) = 30,00 + 63,00 + 56,00 + 38,00 | **187,00 s** | **62,33 %** | ≥ 50 %, cible 60–65 % | ✔ |
| **B** carte typographique | 03, 04, 05, 10, 13, 16, 17, 21, 26, 30, 31, 32, 33, 34 | (7 + 6) + 8 + (7 + 7 + 6 + 7) + 8 + 6 + (4 + 4,5 + 6,5 + 4 + 3) = 13,00 + 8,00 + 27,00 + 8,00 + 6,00 + 22,00 | **84,00 s** | **28,00 %** | ≤ 40 % | ✔ |
| **C** schéma animé | 09, 19 | 8,00 + 10,00 | **18,00 s** | **6,00 %** | ≤ 15 % | ✔ |
| **E** situation | 01, 02 | 6,00 + 5,00 | **11,00 s** | **3,67 %** | ≤ 20 s, **B1 uniquement** | ✔ |
| | | **A + B + C + E** | **300,00 s** | **100,00 %** | | ✔ |
| **D** cartes présentateur | 00, 99 | 3,60 + 2,40 | **6,00 s** | additif, hors 300 s | 3,60 s + 2,40 s | ✔ |

Repli déclaré au BRIEF (frames `01` et `02` en type B faute de plans de situation) : A 187,00 s (62,33 %) · B 84,00 + 11,00 = **95,00 s (31,67 %)** · C 18,00 s (6,00 %) · E 0 s. Somme 300,00 s, toutes les bornes de la §2.5 restent tenues.

### Budget de voix off

| Poste | Durée | Plans |
| --- | --- | --- |
| Démonstration muette | 30,00 s | 07, 15, 23, 27 |
| Respirations | 14,00 s | raccords de beat et fins de plan, hors tête de la frame 03 |
| Prédiction et rappel actif | 6,00 s | 26 (2 à 3 s), reste en 30 |
| Mentions légales | 3,00 s | 34, plan intégralement muet |
| Tenue finale de la carte de rappel | 2,00 s | 32, après le troisième point |
| **Sans parole** | **55,00 s** | 30,00 + 14,00 + 6,00 + 3,00 + 2,00 |
| **Parlé** | **245,00 s** | 300,00 − 55,00 → 470 à 490 mots à 115–120 mots/min |

Aucun poste de « récapitulation muette » : les frames 31 et 32 sont parlées (§2.3.3). Le plan de mentions légales est budgété, il n'est plus hors compte.

### Autres contrôles chiffrés

| Contrôle | Valeur constatée | Contrainte | Verdict |
| --- | --- | --- | --- |
| Frame la plus courte | 3,00 s (frame 34) | aucun plan < 2,5 s | ✔ |
| Plan de mentions légales | 3,00 s, frame 34, 297,00 → 300,00, imputé sur B6, après la dernière voix off (frame 33) et avant la carte de clôture | 3,00 s sur B6, après la dernière voix off, avant la carte de clôture | ✔ |
| Promesse | frame 03, **0:11,00 sur l'horloge des beats** (= 0:14,60 sur l'horloge du master) ; aucune respiration en tête de plan, première syllabe à ≤ 0:12,00 des beats | avant 0:12 sur l'horloge des beats (§2.1) | ✔ (marge 1,00 s, mesurée au timecode en recette) |
| Première capture réelle | frame 06, débute à 0:32,00 des beats | avant 1:10 | ✔ |
| Beat « accès » | frames 20–21, 10,00 + 8,00 = 18,00 s, imputées sur B4 | ≤ 30 s sur B4 | ✔ |
| Unités nommées de B3 | U1 = 7 + 12 + 11 = 30,00 s · U2 = 7 + 12 + 13 + 6 = 38,00 s · U3 = 7 + 15 + 10 = 32,00 s · somme 100,00 s | 2 à 4 unités, 20–60 s chacune | ✔ (3 unités) |
| Titres d'unité de B3 | 7 mots · 6 mots · 6 mots | ≤ 8 mots | ✔ |
| Points de la carte de rappel | **3 points, 6 · 4 · 4 mots, 85 caractères cumulés** (33 + 27 + 25) | 2 à 4 points, ≤ 10 mots, ≤ 90 caractères visibles | ✔ (marge 5 caractères en FR ; recompté sur EN et HA) |
| Carte de rappel, tenue commune | révélations à 0,0 / 1,0 / 2,0 s sur la frame 32 (6,50 s) → les trois visibles de 2,30 s à 6,50 s = 4,20 s | ≥ 4 s ensemble, révélés au rythme de la voix (carte parlée) | ✔ |
| Caractères visibles, texte de composition | maximum de l'épisode : frame 31, 70 caractères ; frame 32, 85 caractères | ≤ 90 hors sous-titres | ✔ |
| Blocs de citation retapée | frames 11 (à mesurer), 23 (**275 caractères**), 24 (à mesurer) | plafond de 90 caractères non applicable : dérogation bornée déclarée au point 5 de `## Customizations` du BRIEF — bloc figé, lecture guidée, ≤ 2 appels par plan, ≥ 2,5 s chacun | ✔ (déclaré ; 23 en tête de la liste à mesurer en recette) |
| Voix off de la carte de rappel | frames 31 + 32 = 11,00 s − 2,00 s de tenue finale = **9,00 s de parole**, soit **17 mots au plus** à 115–120 mots/min | le texte de `SCRIPT.md` tient dans la fenêtre parlée des deux plans | ✔ (promesse affichée et non relue, points nommés en syntagmes brefs — point 4 du BRIEF) |
| Consigne de B4 | frame 23, 14,00 s : frappe puis tenue ≥ 4,00 s après la dernière frappe ; 275 caractères retapés, guillemets et leurs espaces compris | ≥ 4 s après la dernière frappe | ✔ |
| Chiffres prononcés | aucun en frame 26 ; « cinq lignes » en frames 27 et 28, descriptif du visible et cité du texte de la leçon | aucun chiffre sans source hors descriptif du visible (§10) | ✔ |
| Transitions plein cadre | 7, aux frames 05 (24,00), 10 (70,00), 13 (100,00), 17 (138,00), 20 (170,00), 26 (234,00), 30 (278,00). Intervalles : 46,00 · 30,00 · 38,00 · 32,00 · 64,00 · 44,00 s | ≤ 1 toutes les 8 s | ✔ (plus court intervalle 30,00 s) |
| Vignette livrée | t = 5,70 s du master = 2,10 s de la frame 01 (fenêtre 0,00–6,00), image stable de B1 | 1re image stable de B1 | ✔ |