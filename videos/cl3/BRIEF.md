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

Épisode `cl3` du module `introduction-claude-ai`, chapitre « Travailler avec ses propres documents ». Troisième chapitre : le rappel d'un artefact du chapitre précédent est obligatoire avant `0:10` de beats.

**Ce que la vidéo doit obtenir de l'apprenant.** Qu'il dépose, dans la semaine, un document réel de son travail et en tire une extraction exploitable — en ayant pris, dès le premier essai, l'habitude d'exiger la citation. La vidéo ne vise pas la mémorisation des quatre usages ; elle vise un geste et un réflexe.

**Promesse**, énoncée dans la frame `02`, avant `0:12` de beats, deuxième personne, dérivée d'`objective`, reprise mot pour mot sur la frame `26` :

> Vous saurez faire lire vos documents, en extraire ce qui compte, et vérifier le résultat.

**Fil narratif.** Le cas du champ `example` — soixante fiches d'évaluation manuscrites que personne ne dépouille dans un centre de formation à Lomé — ouvre en B1 et se referme en B6. Il est joué de bout en bout en B4, sans étape escamotée : photographier, taper la consigne en entier, obtenir le tableau, reprendre cinq fiches au hasard. Rien d'autre n'est démontré intégralement.

**Ce que la vidéo ne fait pas, parce que le texte de la leçon s'en charge.**

- Elle n'énumère pas les quatre usages comme une liste : elle en démontre trois à l'écran réel et laisse la traduction au texte.
- Elle n'expose pas la méthode de vérification générale : c'est `cl5`. Elle installe le seul geste de la citation.
- Elle ne développe pas la mécanique des Projects au-delà d'un plan : dépôt du contexte, instruction permanente, et l'avertissement sur l'oubli.
- Elle ne prononce aucun nom ni numéro de modèle, aucun tarif, aucun chiffre de limite d'usage.
- Elle n'avance aucun chiffre que la capture à l'image ne montre pas.

**Contrainte de non-recouvrement.** Le script est écrit en paraphrase délibérée du texte de la leçon : aucun n-gramme de 12 mots commun entre le texte du `.srt` et `content[]`, `example`, `practice`. Exclusions admises : la consigne tapée en frame `18`, la promesse, et le titre de l'exercice en frame `28`.

## Assets

Chemins relatifs à la racine du projet `videos/cl3/`. Aucun fetch réseau au rendu.

### Communs à tous les épisodes

Logo, photo du présentateur, polices Inter et Literata en woff2 auto-hébergées, repli haoussa Noto : voir la section 13 du contexte général. **[à fournir]**, bloquants.

### Voix off

- `assets/voix/cl3-fr.wav` — **[à fournir]** 48 kHz / 24 bits / mono, une prise par séquence.
- `assets/voix/cl3-en.wav`, `assets/voix/cl3-ha.wav` — **[à fournir]** après recette FR. HA : voix humaine native obligatoire.

### Plan de situation (type E, B1, frame `03`)

- `assets/situation/cl3-01-pile-fiches.jpg` — **[à fournir]** 1920 × 1080, JPEG q85 sRGB. Une pile de formulaires manuscrits sur un plan de travail, lumière du jour latérale, faible profondeur de champ, **aucune ligne de texte déchiffrable, aucune écriture identifiable**. Repli déclaré : si la vue n'est pas fournie, la frame `03` bascule en carte de type B ; A passe alors à 64,3 %, B à 29,0 %, toutes les bornes restent tenues.

### Captures d'écran réelles (type A)

**[à fournir]** — protocole commun décrit dans les Notes. Les documents utilisés sont des pièces fictives préparées pour le tournage.

| Fichier | Frame(s) | Ce qui doit être à l'écran |
| --- | --- | --- |
| `assets/captures/cl3-01-consigne-cl2.png` | `01` | La consigne enrichie de l'offre d'emploi du chapitre 2, telle qu'elle a été montrée dans `cl2`. Cadrage identique à celui de `cl2-06`. |
| `assets/captures/cl3-02-depot-pdf.png` | `05` | Un PDF joint à une conversation neuve, vignette du fichier visible, nom de fichier neutre. |
| `assets/captures/cl3-03-photo-nette.png` | `06` | Photo d'une page à plat, nette, cadrage complet, et la lecture correcte qui en sort. |
| `assets/captures/cl3-04-photo-floue.png` | `06`, `22` | La **même** page photographiée de biais et floue, et la lecture fausse qui en sort — sans aucune mention d'échec de lecture. Le contraste est l'objet du plan. |
| `assets/captures/cl3-05-resume-commande.png` | `09` | La consigne de résumé commandé et les cinq points obtenus. |
| `assets/captures/cl3-06-extraction-tableau.png` | `10` | Le tableau à deux colonnes issu de l'extraction. |
| `assets/captures/cl3-07-question-citation.png` | `12` | La question posée au document, avec « Cite le passage exact. » visible dans la zone de saisie. |
| `assets/captures/cl3-08-citation-retrouvee.png` | `13`, `24` | La citation confrontée au document d'origine, au mot près. |
| `assets/captures/cl3-09-liste-masquee.png` | `15` | Une zone de saisie contenant des données à ne pas déposer, **masquée à l'aplat `#111827`**. Seule occurrence signifiante du masquage dans l'épisode. |
| `assets/captures/cl3-10-photographier.png` | `17` | Des fiches photographiées par lots, à plat près d'une fenêtre. Aucune écriture lisible. |
| `assets/captures/cl3-11-consigne-fiches.png` | `18` | La consigne complète du champ `example.solution`, tapée en entier, entièrement lisible. |
| `assets/captures/cl3-12-tableau-fiches.png` | `19` | Le tableau à quatre colonnes obtenu, dont des cases marquées `illisible`. |
| `assets/captures/cl3-13-verification.png` | `20` | Deux corrections manuelles sur des lignes du tableau, annotées. |
| `assets/captures/cl3-14-project.png` | `25` | Un Project ouvert : documents de référence et instructions permanentes visibles, sans contenu identifiant. |

## Customizations

1. **Trois unités en B3, pas quatre.** Le § 2.3 autorise deux à quatre unités. Le texte de la leçon présente quatre usages ; la vidéo en regroupe deux — résumer et extraire — dans une seule unité, parce que ce sont les deux usages qui **produisent** un livrable, et parce qu'une carte de rappel à quatre points ne tiendrait pas sous le plafond de 90 signes et de 3 lignes du § 2.4. La traduction n'est pas montrée : elle reste au texte.
2. **La carte de rappel est portée par deux plans consécutifs**, `26` puis `27`, chacun sous les deux plafonds : `26` porte le rappel actif exigé par le § 2.3.5 puis la promesse réaffichée (1 titre + 1 ligne) ; `27` porte les trois mots « Déposer. Extraire. Citer. » (33 signes, 2 lignes), tenus ensemble ≥ 4,0 s. Gabarit sans sous-titre incrusté sur les deux : le texte affiché **est** le texte prononcé.
3. **Le plan de type E est placé en fin de B1**, après le rappel de `cl2` et la promesse. Motif : les deux plafonds de `0:10` et `0:12` de beats ne laissent pas d'autre ordre possible.
4. **Deux plans de type C** (`07` et `16`), soit 20,0 s : le premier porte le compromis PDF / photo, le second le fait qu'un document part en entier. Ce sont les deux seules idées de l'épisode qui ne se montrent pas à l'écran réel.
5. **Masquage `#111827`, deux régimes.** Régime signifiant, **une seule occurrence** : la capture `cl3-09` en frame `15`, où l'aplat est l'objet de la démonstration, verbalisé et annoté, tenu ≥ 2,5 s. Régime d'anonymisation, appliqué à l'export et jamais commenté : sélecteur et nom de modèle, bannières de limite d'usage, mentions tarifaires, sur toutes les captures.
6. **Le mot « téléverser » n'est pas employé.** La vidéo dit « déposer », comme le glossaire de la leçon. Termes techniques nouveaux de l'épisode : **extraction**, **citation de source**, **Project** — trois sur cinq minutes, sous le plafond d'un par minute.
7. **Aucune condensation d'exemple n'est prévue sur la piste haoussa.** Toute condensation décidée à la traduction sera consignée ici avant rendu.
8. **`presenterPhotoPosition`** : défaut `50% 30%`, déclaré comme variable de composition et dans les trois fichiers `copy/cl3.<fr|en|ha>.json`. À corriger si le cadrage de la photo livrée le demande **[à valider]**.

## Notes

### Tournage des captures

- **Une seule session ininterrompue pour la série `cl3-05` → `cl3-08`** : même fenêtre, même zoom, même position de défilement, la conversation étant jouée d'un trait du résumé jusqu'à la vérification de la citation. Si la fenêtre bouge entre deux prises, l'empilement des frames `09` → `13` saute : refaire la série entière plutôt que raccorder.
- **`cl3-03` et `cl3-04` sont la même page**, prise deux fois. Le décadrage et le flou de la seconde doivent être visibles à l'œil sur un téléphone, sans être caricaturaux : c'est une photo qu'un utilisateur pressé prendrait réellement.
- Navigateur propre, chrome entièrement recadré hors champ, fenêtre 1280 × 720 à zoom 200 %, export PNG 2560 × 1440. Aucun panneau de compte, aucune barre latérale de conversations, aucune URL à jeton.
- Le compte utilisé est un compte de tournage, sans historique et sans document déposé.

### Pièges de cet épisode

- **Ne jamais photographier un vrai document de bénéficiaire**, même flouté. Les fiches du tournage sont fabriquées pour l'occasion, avec des écritures manuscrites volontairement variées, dont deux difficiles à lire — ce sont elles qui produisent les cases `illisible` de la frame `19`.
- **La frame `06` est le cœur pédagogique de B2** : si le spectateur ne voit pas que la lecture floue est fausse **et** qu'aucun avertissement n'apparaît, le chapitre a manqué son but. Prévoir le temps de lecture, silence de 2,0 s compris.
- **La frame `18` dépasse 90 signes visibles** : la consigne d'`example.solution` est un bloc de citation à lecture guidée, régime déclaré au § 2.4 du contexte général — bloc posé entier et figé, un seul appel par surlignage, tenue ≥ 4,0 s après la dernière frappe.

### Budget de voix off

245,0 s parlées + 55,0 s sans parole = 300,0 s, soit **470 à 490 mots** à 115–120 mots/min, arrêtés dans `SCRIPT.md`. Ventilation des 55,0 s : démonstrations 30,0 · récapitulation 7,0 (frames `26` et `27`) · mentions légales 3,0 · prédiction et rappel actif 6,0 · respirations 9,0.

### À vérifier en recette

- Somme des 29 frames de contenu = 300,00 s exactes ; master = 306,00 s.
- Parts de plans : A = 193,0 s (64,3 %) · B = 82,0 s (27,3 %) · C = 20,0 s (6,7 %) · E = 5,0 s (1,7 %). Recalculer après tout arbitrage de durée.
- Promesse prononcée avant `0:12` de beats ; rappel de `cl2` avant `0:10`.
- Chaque capture repassée une par une sur le contrôle d'anonymisation avant export.
- Aucun tarif, aucun palier, aucun chiffre de limite d'usage à l'image ni à la voix.
