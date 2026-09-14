# Contexte général de production vidéo — Karatou Academy

**Document de référence unique**, remis à HyperFrames pour la production de **toutes** les vidéos de
cours de la plateforme. Il se lit une fois et fait autorité ensuite : un `BRIEF.md` par épisode s'y
accroche et ne répète rien de ce qui suit.

| | |
| --- | --- |
| Format des cours | style DataCamp : une vidéo courte (~5 min) par chapitre + le texte intégral de la leçon |
| Canvas de référence | 1920 × 1080, 30 i/s |
| Langues | français (référence), anglais, haoussa |
| Charte | design system Karatou Academy — `index.css` et `tailwind.config.js` font foi pour toute valeur |
| Ouverture imposée | photo encadrée du présentateur, « Aminou Laouali Abdou », puis « Consultant en IA et Innovation — Google Generative AI Leader » |
| Statut | opérationnel, sous réserve des points de la section 13 |

**Conventions de lecture.** Une valeur suivie de `[à valider]` est une convention professionnelle non
déductible des fichiers du projet : elle s'applique jusqu'à décision contraire. Une valeur suivie de
`[à fournir]` manque et bloque tout ou partie de la production ; la section 13 en tient la liste.

**Hiérarchie des règles.** La charte tranche contre toute valeur inventée. L'échelle ×5 tranche contre
toute taille hors palier. La lisibilité mobile prime sur l'esthétique ; l'accessibilité prime sur la
densité d'information.

## Table des matières

1. [Le produit, le public, la contrainte fondatrice](#1-le-produit-le-public-la-contrainte-fondatrice)
2. [Le format pédagogique : la vidéo de chapitre](#2-le-format-pédagogique--la-vidéo-de-chapitre)
3. [La charte graphique convertie au format vidéo](#3-la-charte-graphique-convertie-au-format-vidéo)
4. [La carte présentateur](#4-la-carte-présentateur)
5. [Lisibilité mobile et zones de sécurité](#5-lisibilité-mobile-et-zones-de-sécurité)
6. [Sous-titres](#6-sous-titres)
7. [Voix off](#7-voix-off)
8. [Trilinguisme FR / EN / HA](#8-trilinguisme-fr--en--ha)
9. [Accessibilité et alignement pédagogique](#9-accessibilité-et-alignement-pédagogique)
10. [Interdits éditoriaux et conformité](#10-interdits-éditoriaux-et-conformité)
11. [Le contrat technique HyperFrames](#11-le-contrat-technique-hyperframes)
12. [Livraison, intégration, versions](#12-livraison-intégration-versions)
13. [Points à trancher / à fournir par le client](#13-points-à-trancher--à-fournir-par-le-client)

---

## 1. Le produit, le public, la contrainte fondatrice

Karatou Academy est une plateforme de formation en ligne francophone pour un public d'Afrique de l'Ouest et du Centre : étudiants, jeunes actifs, professionnels en reconversion. Niveau supposé : aucune connaissance technique.

### Format imposé

Chaque chapitre = une vidéo courte + le texte intégral de la leçon dans l'app, consommables indépendamment. Le texte n'est pas un sous-produit de la vidéo.

### Contrainte fondatrice : la bande passante

Connexion 3G, mobile, forfait data compté. Conséquences non négociables :

- Le sens passe sans le son : toute information de la voix off est aussi à l'écran.
- Sous-titres français incrustés et `.srt` livré pour chaque vidéo.
- Lisibilité mobile d'abord : corps calculés au pire cas mobile (§5).
- Poids maîtrisé : aplats et typographie plutôt que vidéo pleine largeur.
- Rien d'essentiel dans une animation rapide : l'élément tient à l'écran le temps d'être lu sur un affichage saccadé.

### Ouverture obligatoire de chaque vidéo

Photo encadrée du présentateur, dessous « Aminou Laouali Abdou », puis « Consultant en IA et Innovation — Google Generative AI Leader ». Séparateur : espace insécable U+00A0 + tiret cadratin U+2014, posé par `.presenter-role-line-1::after { content: "\00A0—"; }`, dans les trois langues et les quinze vidéos.

---

## 2. Le format pédagogique : la vidéo de chapitre

Vidéo 5 min + texte + exercice + quiz ; la vidéo ne double pas le texte.

### 2.1 Six beats, 300 s

Cartes additives : ouverture 3,60 s (`0:00` des beats), clôture 2,40 s. **Master MP4 : 306,0 s (5:06,0) = 3,60 + 300,0 + 2,40 ; tolérance ±5 s héritée des beats : 301,0 à 311,0 s.**

- **B1 Accroche** 20–25 s — cas réel + promesse 2ᵉ pers. ; dès ch. 2, rappel d'un artefact du ch. précédent avant `0:10`
- **B2 Cadrage** 25–50 s — malentendu démonté ; première capture réelle avant `1:10`
- **B3 Notion** 90–120 s — 2 à 4 unités nommées de 20–60 s, une carte chacune, titre ≤ 8 mots
- **B4 Application** 50–80 s — un seul cas de bout en bout, écran réel, aucune étape escamotée
- **B5 Consolidation** 40–55 s — un contre-exemple ou une relance, avec son effet
- **B6 Clôture** 20–25 s — carte de rappel + renvoi à l'exercice ; le cas de B1 y est refermé

`B1+B2 ≤ 75 s` ; `B3+B4 = 170 ± 15 s` ; `B1+B6 ≤ 50 s` ; total `300 ± 5 s` hors cartes. Beat « accès » optionnel ≤ 30 s, imputé sur B4. Plan de mentions légales 3,00 s imputé sur B6, après la dernière phrase de voix off, avant la clôture.

### 2.2 Vidéo / texte

- Non-recouvrement : n-grammes n = 12 entre le texte seul du `.srt` (timecodes retirés) et `content[]`, `example`, `practice` ; minuscules, sans ponctuation, espaces réduits, seuil 0 ; exclus : consignes citées, promesse, `practice.title` ; résultat dans `RECETTE.md`.
- Toute consigne tapée à l'écran figure mot pour mot dans le texte : seule duplication admise.
- Le cas de B1 est celui du champ `example` ; chaque support tient seul, jamais « comme vu dans… ».

### 2.3 Rétention

1. **Promesse** avant `0:12`, 2ᵉ pers., dérivée d'`objective`, reprise mot pour mot sur la carte de rappel.
2. **Montrer, pas énoncer** : toute notion démontrable est tapée à l'écran, tout geste montré est verbalisé.
3. **Carte de rappel** : un point par unité de B3 (2 à 4), ≤ 10 mots, couvert par un item du quiz ; révélés au rythme de la voix, ≥ 4 s ensemble ; gabarit sans sous-titre.
4. **Renvoi** : dernière phrase de la voix off = `practice.title`, à l'impératif ; rien après, sauf mentions légales et carte de clôture.
5. **Rappel actif** : prédiction en B5 (question, 2–3 s de silence, réponse) ; rappel en B6 avant la carte.

### 2.4 Densité

- ≤ 5 blocs entre B2 et B5 ; ≤ 1 terme technique nouveau par minute ; ≤ 90 caractères visibles à la fois hors sous-titres et hors plan de mentions légales (plafonné, lui, à 130 caractères sur 3 lignes), en syntagmes. Sous un sous-titre : ≤ 8 mots, aucun texte nouveau ; cartes denses hors parole.
- Un plan = une idée : ≤ 1 surtitre + 1 titre + 3 lignes, 3 niveaux typo, une emphase (dégradé bleu sur 1–4 mots ou bloc surligné).
- Durées mini : titre 2,5 s ; bandeau ≤ 4 mots 2,5 s ; consigne B4 ≥ 4 s après la dernière frappe.
- **Temps de lecture** prioritaire : prononciation + 1,5 s ; 2,5 s si muet ; aucun plan < 2,5 s ; animations finies avant lisibilité.

### 2.5 Cinq types de plans

**A** capture réelle annotée **≥ 50 %**, cible 60–65 % · **B** carte typographique ≤ 40 % · **C** schéma animé ≤ 15 % · **D** cartes présentateur 3,60 s et 2,40 s · **E** situation ≤ 20 s (B1 seulement). **Jamais de maquette** : captures réelles anonymisées, § 9.

Annotations sur A, paire clair / navy : erreur `#DC2626` / `#FCA5A5` ; validé `#059669` / `#10B981` ; neutre `#1A73E8` / `#8EC5FF` ; masquage `#111827`. Or interdit. Une annotation à la fois, ≥ 2,5 s. **Jamais d'information par la couleur seule** : doublement par une forme obligatoire (coche, croix, cadre).

---

## 3. La charte graphique convertie au format vidéo

**Conversion ×5** : `px_vidéo = rem × 16 × 5`, `cqw = px ÷ 1920 × 100`. Lecteur de référence 328 px CSS, facteur 0,171 (rapport réel 5,85) ; un lecteur de 360 px ne fait qu'agrandir et reste conforme.

### 3.1 Palette

Fonds : `#FFFFFF`, `#F9FAFB`, `#F0F7FF`, `#0A1628`, `#0D2245`. `rgba(10,22,40,0.6)` assombrit une image, jamais du texte ; plaque `rgba(10,22,40,0.95)` sous tout texte posé sur image (16,02:1).

Texte sur `#FFFFFF` : `#111827` 17,74:1 · `#374151` 10,31 · `#6B7280` 4,83 · `#1035A0` 10,30 · `#1A73E8` 4,51.
Texte sur `--gradient-dark`, au pire cas `#0D2245` : `#FFFFFF` 15,77:1 · `#D1D5DB` 10,68 · `#8EC5FF` 8,70, admis en texte porteur ; `#9CA3AF` 6,18, surtitre ou secondaire seulement, **jamais en texte porteur**.

Emphase `.text-gradient-blue` : 1 à 4 mots, un par plan, jamais sur un sous-titre.

**Or : une seule apparition par vidéo**, le CTA de la carte de clôture, `#FAC55A` (`--gold-300`) sur navy, 9,9:1 au pire cas `#0D2245`. `#F5A623`, `--gradient-gold`, `--shadow-gold-md`, `#C47D0A` : non employés. `--rose-*`, `--cyan-*`, `--orange-*` : pastilles et repères, **jamais de texte**.

### 3.2 Typographie

Titres en Literata, le reste en Inter ; secours `Georgia, serif` et `system-ui, -apple-system, sans-serif`. Graisses : Inter 400/500/600/700, Literata 400→700. **woff2 auto-hébergées dans `assets/fonts/`, `@font-face` local, `font-display: block`** (sinon échec fermé en rendu cloud).

Échelle — taille/interligne/graisse/interlettrage (px) :

- Literata : `display` 200/220/700/−4,0 · `h1` 160/184/700/−2,4 · `h2` 120/150/700/−1,2 · `h3` 100/130/600/−0,5
- Inter : `title` 85/119/600/−0,51 · `body-lg` 85/140/400/0 · `body` 75/120/400/0 · `body-sm` 65/98/400/0 · `label` 65/88/500/0 · `meta` 60/81/400/0 · `eyebrow` 55/80/600/+4,4

**Planchers** : texte porteur 80 px, texte secondaire 55 px (palier `eyebrow`) ; aucun élément ne passe sous 55 px. **Plancher serif 100 px** : Literata en `h3` et au-dessus seulement, en dessous tout passe en Inter, **y compris le nom du présentateur**. `.text-eyebrow` : un par plan, `#6B7280` sur clair, `#9CA3AF` sur navy.

### 3.3 Dégradés, rayons, ombres, mouvement

Dégradés : `linear-gradient(135deg, #1A73E8, #1A52CC)` et `linear-gradient(135deg, #0A1628, #0D2245)` (fond plein cadre). **Anti-banding obligatoire** sur tout `--gradient-dark` plein cadre : **grain 1,5 %** — le master est en `yuv420p` 8 bits (§11), le rendu 10 bits n'est pas une option. Implémentation : `<svg>` inline `feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="1" seed="1"` en calque plein cadre, `opacity: 0.015`, `mix-blend-mode: overlay`, statique, inclus dans le `<template>` de la sous-composition (ni `Math.random()` non graine, ni requête réseau). Filets et halos : `--hairline-white`, `--hairline-white-subtle`, `--surface-white-10`, `--glow-blue`.

Rayons de `frame.md` : `rounded: [40, 60, 64, 80, 120, 124, 9999]` — 40 petit bloc · 60 vignette · **80 carte** · 120 panneau et cadre photo · 9999 cercle ; 64 et 124 = seuls dérivés concentriques admis (intérieur + filet 4 px).

Ombres teintées, **jamais noires ni grises**, sur `rgba(26,115,232,α)` : `0 10px 40px` α 0,08 · `0 20px 80px` α 0,12 · `0 40px 160px` α 0,16 · `0 60px 240px` α 0,2. Flou maximal 240 px. Sur navy, séparer par un filet, jamais par une ombre. Exception : l'anneau à flou 0 `0 0 0 8px var(--surface-white-10)` vaut filet, pas ombre.

**Geste d'entrée standard** : `opacity 0→1` + `translateY(32px)→0`, **300 ms, `cubic-bezier(0, 0, 0.58, 1)`**, cascade 120 ms. Les 32 px dérogent en permanence à la conversion ×5 (qui donnerait 80 px) : plafond d'accessibilité, ne pas « corriger ».

**Dérogation unique, « ouverture / clôture carte présentateur »** : le cadre photo seul entre en 600 ms, échelle 0,94→1 (`power2.out`), sort en 400 ms, échelle 1→1,02 (`power1.in`) ; nom, rôle, CTA et logo suivent le geste standard (§4).

Interdits : rebond, rotation, zoom élastique, machine à écrire, glisse, parallaxe. Plafonds (`prefers-reduced-motion` inclus) : translation ≤ 32 px, échelle ≤ 6 %, rotation 0, aucun flash (WCAG 2.3.1), une transition plein cadre toutes les 8 s au plus.

### 3.4 Logo et espacements

Logomark en `<img>` — **jamais redessiné en SVG, CSS ou JSX**, jamais déformé (ratio 1:1), recoloré, tourné ni ombré ; `alt` = `Karatou Academy`. Fichier : PNG 32 bits alpha, ≥ 720 × 720, sans aplat blanc [à fournir].

**Mot-symbole 100 px dans tous les lockups** (plancher serif) : Literata bold, `letter-spacing: -0.02em` soit −2,0 px ; « Karatou » `#111827` / « Academy » `#1A73E8` sur clair, `#FFFFFF` / `#8EC5FF` sur navy. Lockup de clôture : tuile 140 px, rayon 40 px, écart 50 px. Lockup `lg` (tuile 240, rayon 80, écart 50) réservé aux plans pleine page. Filigrane : tuile seule 140 px, rayon 40 px, `x = 120, y = 120`.

Espacements (×5), seules gouttières : 10, 20, 30, 40, 50, 60, 70, 80, 100, 120, 140, 160, 180, 200, 240, 320, 400, 480 px.

---

## 4. La carte présentateur

Deux objets : la **carte d'ouverture** (3,60 s, en tête de vidéo) et la **carte de clôture** (2,40 s). « Carte finale » est proscrit ; la synthèse de B6 est la **carte de rappel** (§2). Sous-compositions `compositions/frames/00-presenter-card.html` et `99-end-card.html` ; aucun fetch réseau. Fond `--gradient-dark` plein cadre, opaque dès la frame 0, grain **1,5 %**. Aucun logo à l'ouverture : le filigrane (tuile seule 140 px, rayon 40 px, x 120 y 120) commence au premier plan de contenu B1.

### 4.1 Carte d'ouverture — géométrie (1920 × 1080, colonne sur x 960)

| Élément | x | y | L | H |
| --- | --- | --- | --- | --- |
| Cadre photo | 776 | 160 | 368 | 368 |
| Nom, 1 ligne | 360 | 578 | 1200 | 115 |
| Rôle, 2 lignes | 360 | 723 | 1200 | 210 |

Écarts 50 px (cadre → nom) et 30 px (nom → rôle) ; bas de pile y 933 ; marges 160 / 147 px. Contrastes calculés sur `#0D2245`, pire cas du dégradé ; en gris clair, `#D1D5DB` (10,68:1) est porteur, `#9CA3AF` (6,18:1) secondaire seulement.

**Cadre photo** : coins arrondis CSS, ni superellipse ni `clip-path`. Image 360 × 360, `border-radius` intérieur **120 px**, filet **4 px `#8EC5FF`** (`--blue-300`, 8,70:1), extérieur **124 px**, halo `box-shadow: 0 0 0 8px var(--surface-white-10)`, fond `#F3F4F6` (`--gray-100`), `box-sizing: content-box`. Rayons `frame.md` : `rounded: [40, 60, 64, 80, 120, 124, 9999]`, 64 et 124 dérivés concentriques (rayon + filet).

**Nom** `Aminou Laouali Abdou` — Literata 700, **100 px**, interligne 1,15 = 115 px, interlettrage −0,015 em, `#FFFFFF` (15,77:1), **1 ligne**. **Rôle** — Inter 500, **75 px**, interligne 1,4 = 105 px, interlettrage −0,006 em, `#BFDBFE` (`--blue-200`, 11,10:1), **2 lignes maximum**, bloc 210 px, deux `<span>` blocs, **jamais de `<br>`** : `Consultant en IA et Innovation` / `Google Generative AI Leader`. Séparateur (trois langues) :

```css
.presenter-role-line-1::after { content: "\00A0—"; }
```

### 4.2 Carte d'ouverture — timing, 3 600 ms

| t (ms) | Événement |
| --- | --- |
| 0 → 600 | Cadre : opacité 0→1, échelle 0,94→1, y +32→0 (`power2.out`) |
| 400 → 700 | Nom : opacité 0→1, y +32→0 |
| 520 → 820 | Rôle : opacité 0→1, y +32→0 |
| 600 → 3 000 | Voix off « Bonjour, je suis Aminou Laouali Abdou. » |
| 820 → 3 150 | Tenue statique |
| 3 150 → 3 550 | Sortie : opacité 1→0, échelle 1→1,02 (`power1.in`) |
| 3 550 → 3 600 | Écran à 0 |

Nom et rôle : geste standard (300 ms, `cubic-bezier(0, 0, 0.58, 1)`, cascade 120 ms) ; le cadre relève de la dérogation du §3. **Aucun sous-titre incrusté** : la voix off est le premier bloc du `.srt`.

### 4.3 Photo

**1:1 exact**, ≥ 1080 × 1080, sans upscaling ; JPEG q90 sRGB < 400 Ko ; EXIF supprimé ; plan poitrine, fond uni `#F3F4F6`. `object-fit: cover` (**jamais `contain`**) ; `object-position` piloté par `presenterPhotoPosition`, défaut `50% 30%`, déclaré dans `data-composition-variables` et les trois `copy/cl1.<lang>.json`.

### 4.4 Implémentation

- **Tout dans le `<template>`**, `@font-face` compris — Literata variable 400→700 (`opsz`), Inter 400/500/600/700, `assets/fonts/*.woff2`, `font-display: block` ; sinon lint `font_family_without_font_face`.
- Timeline **synchrone au parse**, enregistrée en dernier dans `window.__timelines["presenter-card"]` ; aucun `transform` initial en CSS.
- `data-composition-variables` sur le `<html>` de la sous-composition, surchargé par `data-variable-values` de l'hôte ; identifiants hôte / template / `__timelines` **identiques**.
- Hôte : `data-start="0" data-duration="3.6" data-track-index="0"`, classe `clip`.
- `pretext.measureLineStats`, colonne 1200 px : **toute ligne de rôle dépassant 1200 px à 75 px** bascule les **deux** lignes à **65 px** ; jamais trois lignes.
- Recette sur `videos/_presenter-card-harness/` : `hyperframes check` à 0 finding, `snapshot --at 0.4,2.0,3.4` ; t = 2,00 s est le **poster** de recette, pas la vignette livrée (§12).

### 4.5 Variantes

**Décision client : le nom et le titre restent en français dans les trois versions.** `presenterName` « Aminou Laouali Abdou » et `presenterRole` « Consultant en IA et Innovation — Google Generative AI Leader » ne sont **jamais traduits ni adaptés** (`Google Generative AI Leader` est une certification). La carte d'ouverture est donc **strictement identique en FR, EN et HA** : une seule sous-composition, aucun rendu par langue, aucune clé de traduction. Glyphes ɓ ɗ ƙ ƴ (U+0253, U+0257, U+0199, U+01B4) testés au build ; s'ils manquent, la piste HA passe en **Noto Sans** (Inter) et **Noto Serif** (Literata), woff2 auto-hébergées, repli déclaré dans `BRIEF.md`.

### 4.6 Carte de clôture — 2,40 s

Après le plan de mentions légales ; même fond, mêmes polices.

| Élément | x | y | L | H |
| --- | --- | --- | --- | --- |
| Cadre photo (image 180, rayons 60 / 64) | 866 | 100 | 188 | 188 |
| Nom | 360 | 338 | 1200 | 115 |
| Rôle + certification | 360 | 483 | 1200 | 180 |
| CTA | 360 | 713 | 1200 | 84 |
| Lockup (L ≈ 1014) | 453 | 837 | — | 140 |

Écarts 50 / 30 / 50 / 40 px, bas de pile y 977. Nom : Literata 700, 100 px, interligne 115 px. Rôle + certification : Inter 500, **60 px**, interligne 1,5 = 90 px, 2 lignes. **CTA** : Inter 600, 60 px, interligne 1,4 = 84 px, `#FAC55A` (`--gold-300`, 9,9:1 sur `#0D2245`, pire cas), **seule apparition de l'or de la vidéo** — `fr` « Passez à l'exercice du chapitre. », `en` « Now take the chapter exercise. », `ha` [à fournir]. Lockup : tuile 140 px, rayon 40 px, écart 50 px, mot-symbole 100 px.

Timing : entrée 0 → 780 ms, cinq éléments de 300 ms en cascade de 120 ms (cadre 0, nom 120, rôle 240, CTA 360, logo 480) ; tenue 780 → 2 000 ; fondu au noir 2 000 → 2 400.

Montage : `data-composition-id="end-card"`, timeline `window.__timelines["end-card"]`, hôte `class="clip" data-start="303.6" data-duration="2.4" data-track-index="0"` (303,6 = 306,0 − 2,40).

---

## 5. Lisibilité mobile et zones de sécurité

### 5.1 Planchers
Lecteur de référence 328 px CSS, facteur 0,171 ; 80 px = 13,7 px CSS ; 360 px agrandit. Texte porteur **≥ 80 px** ; secondaire **≥ 55 px** (eyebrow ×5), aussi dit en voix off ; **< 55 px interdit, sans exception**. Translation d'entrée 32 px, plafond d'accessibilité, jamais converti en 80 px.

### 5.2 Zones de sécurité
| Zone | Valeur |
| --- | --- |
| Sécurité | 100 px × 4 côtés (`--spacing-5` ×5), utile 1720×880 |
| Bandeau haut | y 120→300 |
| Composition | x 180→1740, y 300→700 |
| Sous-titres | y 700→1080, exclusif |

Sous-titres : Inter 600, 85 px, interligne 119 px, interlettrage 0, #FFFFFF ; plaque ≤ 1600 px, marge interne 80 px (`--spacing-4` ×5), 1440 px utiles, bas y 980 ; 1 ligne 159 px (y 821→980), 2 lignes 278 px (y 702→980). **31 signes/ligne, 62/réplique.** Lint `--caption-zone "x0=0;y0=.648;x1=1;y1=1;severity=error"`.

### 5.3 Captures d'écran
1280×720, zoom 200 %, DPR 2× → PNG 2560×1440 ; deux tiers du cadre au plus, texte ≥ 80 px sur l'export. Toute ligne à lire est retapée en surimpression, Inter ≥ 80 px sur `--surface-navy-95`, langue de la version. Annotations clair/navy : erreur #DC2626 / #FCA5A5 ; validé #059669 / #10B981 ; désignation #1A73E8 / #8EC5FF ; masquage #111827 ; doublées d'une forme, une à la fois, ≥ 2,5 s.

### 5.4 Interdits
- Plan large navigateur ; texte sur image sans plaque ; `<br>` (→ `max-width`) ; tableau > 4×3 ; cellule < 55 px ; filet < 4 px, flèche < 6 px.
- Flash blanc ; > 1 transition plein cadre / 8 s ; texte animé pendant sa lecture (entrée ≤ 300 ms puis figé) ; musique sous la voix ; logos tiers.
- Or hors CTA de la carte de clôture ; #F5A623 et `--gradient-gold` jamais en vidéo.

### 5.5 Contraste
Cible 4,5:1, **≥ 7:1 en texte porteur**, vérifié sur #0D2245 (pire cas `--gradient-dark`). Validés : #FAC55A/#0D2245 9,9:1 · #D1D5DB/#0D2245 10,68:1 ; #9CA3AF 6,18:1 en surtitre ou secondaire seulement. Proscrit : #1A73E8/#0A1628 4,0:1 en trait seul.

---

## 6. Sous-titres

Incrustés dans les trois langues. L'application ne peut pas servir de piste (iframe), l'hébergeur si : livrer aussi les `.srt` en pistes CC activables. Une information portée seulement par la voix off n'existe pas.

### 6.1 Typographie et plaque

- **Texte** — Inter 600 (`--font-body`), 85 px (palier `title` / `body-lg` ×5), interligne 119 px, interlettrage 0, `#FFFFFF` (`--white`), contraste 16,02:1.
- **Plaque** — `rgba(10, 22, 40, 0.95)` (`--surface-navy-95`), rayon 60 px (`--radius-xl` ×5), marge interne 20 px vertical (`--spacing-1` ×5) et 80 px horizontal (`--spacing-4` ×5), largeur ajustée au texte, 1 600 px maximum (1 440 utiles), centrés.
- **Position** — bas de plaque `y = 980`, soit la marge de sécurité de 100 px (`--spacing-5` ×5). Bloc 1 ligne 159 px (y 821 → 980), 2 lignes 278 px (y 702 → 980). Zone réservée y 700 → 1080, exclusive.
- **Interdits** — contour, ombre portée, dégradé (dont `.text-gradient-blue`), italique, majuscules, couleur autre que blanc.

### 6.2 Découpage

2 lignes maximum par réplique ; 31 caractères par ligne (plafond normatif à 85 px sur 1 440 px utiles), 62 par réplique. Vitesse 12 c/s [a valider] : durée = max(1,20 s ; caractères ÷ 12), 5,2 s maximum. Écart entre répliques ≥ 2 images = 66,7 ms à 30 i/s. Ce débit impose de ralentir la voix off (§7).

Couper après une virgule, avant une conjonction ou un groupe verbal ; jamais entre article et nom, préposition et complément, auxiliaire et participe. Fin ≥ 2 images avant un raccord, début ≥ 2 après. Rien dans les 12 premières et dernières images. Nom propre, adresse (`claude.ai`) ou chiffre jamais coupés en fin de ligne. Pendant une réplique, aucun texte nouveau et titre de 8 mots maximum.

### 6.3 Chaîne et livrables

`.srt` FR = source de vérité (`npx hyperframes transcribe` ou import) ; incrustation = caption skin dérivé de 6.1, identique par construction. Lint : `--caption-zone "x0=0;y0=.648;x1=1;y1=1;severity=error"`, portent `data-layout-allow-caption-zone` : la plaque de sous-titres, et les blocs des sous-compositions `00-presenter-card.html` et `99-end-card.html`, dont les piles descendent sous y 700. EN et HA dérivent du `.srt` FR. Livrer `.srt` + `.vtt` FR/EN/HA (piste CC, indexation, régénération, transcription §9.3).

---

## 7. Voix off

### 7.1 Débit
245,0 s parlées sur les 300,0 s de beats. 55,0 s sans parole = récap 12 s + démos 30 s + respirations 7 s + prédiction et rappel 6 s. À 6 signes par mot et 12 signes/s : **470 à 490 mots, 115 à 120 mots/min**, mesurés par timecodes sur les segments parlés. Hors plage, on coupe du texte, on ne ralentit pas.

### 7.2 Ton et termes
Vouvoiement, présent, voix active. 18 mots maximum par phrase, vérifié sur le script. Toute notion nouvelle est dite deux fois, la seconde autrement. Nombres en toutes lettres. Tout geste et tout résultat montré est verbalisé (critère de verbalisation, §9). Interdits : rhétorique en série, remplissage, terme non glosé, ton publicitaire, humour intraduisible.

Anglais dit une fois, glosé, puis abandonné : prompt → **consigne** ; chatbot → assistant conversationnel ; upload → déposer ; machine learning → apprentissage automatique ; feedback → retour ; template → modèle. **hallucination** gardé, glosé « réponse fausse donnée avec assurance ». **Projects** jamais traduit (« dossiers de contexte réutilisable »).

### 7.3 Prononciation et voix
Claude /klod/ en FR. claude.ai = « claude point a i ». **Aminou Laouali Abdou** : prise de référence par lui-même, réutilisée en EN et HA. `pronunciation.md` par module, validé avant enregistrement. FR : voix humaine. EN : humaine ou synthèse haut de gamme avec relecture intégrale. HA : humaine, locuteur natif, obligatoire ; relecteur, orthographe Boko (Niger ou Nigeria), budget et délai [à fournir].

### 7.4 Enregistrement
48 kHz / 24 bits / mono WAV, une prise par séquence, 30 s de silence de salle. Coupe-bas 80 Hz à 12 dB/oct ; dé-esseur centré 6–8 kHz, réduction max 4 dB ; compression 3:1, seuil −18 dBFS, attaque 10 ms, relâchement 100 ms ; limiteur plafond −1,5 dBTP. Voix −16 LUFS, crête vraie −1,5 dBTP [à valider]. Musique −30 LUFS. Aucun effet sonore sous la parole.

---

## 8. Trilinguisme FR / EN / HA

| Langue | cl1 | cl2 |
| --- | --- | --- |
| fr | 9 501 signes (100 %) | 10 231 (100 %) |
| en | 6 541 (69 %) | 7 411 (72 %) |
| ha | 5 591 (59 %) | 6 241 (61 %) |

Ce déficit ne se reporte pas sur la vidéo : la piste HA couvre 100 % des beats et des consignes montrées ; condensation admise sur les seuls exemples, chacune consignée dans `BRIEF.md`. Relecteur HA, orthographe Boko, budget voix HA : [à fournir].

**Polices HA.** Test de glyphes au build sur ɓ ɗ ƙ ƴ (U+0253, U+0257, U+0199, U+01B4) ; en cas de manque, la piste HA passe d'Inter à Noto Sans (400/500/600/700) et de Literata à Noto Serif (400→700), woff2 auto-hébergées, repli déclaré dans `BRIEF.md`.

**Carte présentateur exclue du trilinguisme** : nom et titre restent en français dans les trois versions (décision client, §4), donc une seule sous-composition d'ouverture, sans clé de traduction.

**Trois rendus** — textes écran, sous-titres, voix off — d'une composition unique, sans chaîne en dur : tout vient de `copy/cl1.<fr|en|ha>.json`, passé à `render --variables-file`.

- Toute clé déclarée dans `data-composition-variables`, sinon `--strict-variables` échoue le rendu ; `presenterPhotoPosition` (défaut `50% 30%`) figure dans les trois fichiers.
- Toutes les clés dans chaque fichier ; chaîne non traduite recopiée, jamais omise ; relecture native.
- ±40 % de longueur : ni largeur fixe, ni césure manuelle ; tester la plus longue des trois.

Une entrée par langue, `index-fr/-en/-ha.html`, chacune avec son `<audio id="vo" src="assets/voix/cl1-XX.wav">` : `--batch` ne varie pas l'audio, sans `id` le rendu est muet.

**Ordre.** Script FR validé → rendu muet → voix FR → recette FR → traduction `.srt` et JSON → voix EN/HA → rendus.

---

## 9. Accessibilité et alignement pédagogique

**WCAG 2.1 AA.** 1.2.2 : incrustation + CC activables. 1.2.3 : transcription. **1.2.5 audiodescription : non atteint.** 1.4.6 : 7:1 sur texte porteur, contrôle manuel. 2.3.1 : aucun flash, 1 transition plein cadre/8 s max.

- **Verbalisation (opposable)** : geste, état d'écran et résultat montré sont dits en voix off, avant et après chaque silence. Contrôle P1 : piste voix seule, sans image, 2 écoutes max, table d'alignement remplie ; ligne non reconstituable à l'oreille = non-conformité, avis signé joint à `RECETTE.md`.
- **Transcription** : `introduction-claude-ai_cl<n>_<lang>_v<n>_transcript.md`, un h2 par beat, texte prononcé + actions à l'écran entre crochets.
- **Langue** : B1 CECRL, A2 pour consignes et carte de rappel [à valider]. Mot hors liste du module : glosé. Notion nouvelle dite deux fois, la seconde autrement. 18 mots/phrase maximum, vérifié automatiquement.
- **Table d'alignement**, 1 ligne/point de la carte de rappel : `objective` | beat | unité B3 | libellé carte | item du quiz cl6. Point non évalué : retiré ; sans table, l'épisode ne démarre pas.
- **Poids** : 640×360 ≤ 15,5 Mo sur toute la tolérance de durée, total ≤ 398 kbit/s (§11).
- **Portes de paiement** : P1, fond validé sur script et montage par expert-métier hors prestataire ; P2, cl1 testée sur téléphone par 3-5 apprenants cibles, bloquante pour cl2-cl5.
- **Cibles [à valider]** : 60 % arrivent à 4:00 ; décrochage ≤ 10 pts/beat ; 70 % de réussite/item ; 50 % de passage à l'exercice ; relevés J+30, J+90.

---

## 10. Interdits éditoriaux et conformité

Liste opposable ; rendu refusé.

**Fond.** Ni montant, devise, palier ni limite d'usage chiffrée ; capture tarifaire masquée. Formulation admise : celle du texte cl1. Ni version ni nom de modèle : on dit « Claude ». Aucun chiffre sans source, hors descriptif du visible ; statistique : organisme et année affichés en continu, ≥ 80 px, et dits en voix off, sinon elle saute. Ni promesse de résultat, gain de temps chiffré, superlatif, comparaison nommée, appel à l'abonnement.

**Anonymisation.** Jamais à l'image : panneau de compte, nom réel, donnée identifiante, logo ou document d'organisation réelle, tiers sans consentement écrit. Navigateur propre (sans favoris, extensions, notifications), aucune URL à jeton, barre d'état masquée. Autorisation image et voix signée [à fournir]. Cas montrés = personas du champ `example`.

**Obligatoire.** Logo en `<img>`, jamais redessiné, `alt` = `Karatou Academy`. Filigrane (tuile seule 140 px, rayon 40 px, x 120 y 120) de B1 à B6, jamais sur la carte d'ouverture ; lockup de clôture (tuile 140 px, écart 50 px, mot-symbole 100 px) sur la carte de clôture. Mentions légales : 3,00 s imputées sur B6, après la voix off, avant la carte de clôture ; 80 px, sans sous-titre : « Claude et Anthropic sont des marques de leurs détenteurs. Karatou Academy n'est pas affiliée à Anthropic. », + mois et année de production.

**Forme.** `.srt` relu intégralement ; pas de musique sous la voix ; plans ≥ 2,5 s ; pas de texte mobile à lire ; pas de logo tiers.

[à fournir] : CGU Anthropic ; lecteur sans cookies tiers.

---

## 11. Le contrat technique HyperFrames

Un projet par chapitre (`videos/cl1/`…) ; `data-duration` de la racine verrouillé à la compilation. Racine : `BRIEF.md`, `STORYBOARD.md`, `frame.md`, `SCRIPT.md`, `hyperframes.json` ; plans dans `compositions/frames/NN-*.html`, cartes comprises (`00-presenter-card.html`, `99-end-card.html`) ; assets sous `assets/`, en chemins relatifs.

Front-matter de `frame.md` seul normatif (prime sur `design.md`) : `colors`, `typography`, `spacing`, `rounded` (40, 60, 64, 80, 120, 124, 9999 ; 64 et 124 = dérivés concentriques, rayon intérieur + filet 4 px), `shadows`, `motion`, `safe_areas`.

`BRIEF.md` verrouillé : `workflow: general-video`, `flow: companion`, `storyboard: yes`, `aspect: 1920x1080`, `narration: yes`, `destination: website`, `language: fr|en|ha`. Corps : `## Intent`, `## Assets`, `## Customizations`, `## Notes` seulement, aucun `data-*` ; fait foi en cas de divergence.

`STORYBOARD.md` obligatoire avant tout build ; par frame : `status` (outline→built→animated), `src`, `duration`, `transition_in`, `poster`, `voiceover`, `plan_type` A–E. `SCRIPT.md` alimente le TTS : seuls ses blocs indentés sont extraits ; durées resynchronisées jamais retouchées.

- Racine : `data-composition-id`, `data-width`, `data-height`, `data-fps="30"`, `position: relative`, `overflow: hidden`.
- Une seule `gsap.timeline({ paused: true })` par composition, exposée sur `window.__timelines[<data-composition-id>]`.
- `data-start` fait le clip, avec `class="clip"` (`position:absolute; inset:0`) ; fenêtre `[start, start+duration)`, état final juste avant la fin.
- Sous-composition : markup, `<style>`, `<script>`, `@font-face` dans le `<template>` ; racine stylée par `#root` ; `data-composition-variables` sur son `<html>`, surchargés par `data-variable-values` sur l'hôte.
- Literata et Inter auto-hébergées en woff2. Test de glyphes au build sur ɓ ɗ ƙ ƴ (U+0253, U+0257, U+0199, U+01B4) ; s'ils manquent, la piste `ha` passe en Noto Sans (400/500/600/700) et Noto Serif (400→700), repli déclaré dans `BRIEF.md`.
- Déterminisme : aucune horloge, `Math.random()` non graine, fetch réseau au rendu, survol/scroll/focus ni `repeat: -1` ; jamais deux timelines sur une même propriété.
- Interdits : `<audio>` sans `id` ; `data-start` sur la vidéo *et* un ancêtre ; tween de `display`/`visibility` (utiliser `autoAlpha`) ; `video.play()` ; fond sur la racine (le poser sur un enfant `inset:0`).

Boucle : `preview --background` → build → `lint` → `check` → `snapshot --at t1,t2,t3` → `render --quality high --output <nom>.mp4` après approbation explicite. `check` relance lint et refuse `--variables` ; une erreur de lint désactive les audits layout et contraste.

30 i/s (rendu local : 24|30|60 seulement). Post-encodage ffmpeg hors CLI, consigné dans `RECETTE.md`. Master : MP4 `+faststart`, H.264 High 4.0, yuv420p, 1920×1080, CRF 18 preset slow, GOP 60, AAC-LC 128 kbit/s 48 kHz mono, 306,0 s (tolérance 301,0 à 311,0 s). Variante : 640×360 Main 3.0, CRF 28, `-maxrate 350k -bufsize 700k`, AAC-LC 48 kbit/s, débit total ≤ 398 kbit/s, ≤ 15,5 Mo sur toute la tolérance. Loudness : `loudnorm` deux passes, `I=-16:TP=-1.5:LRA=11`.

---

## 12. Livraison, intégration, versions

### 12.1 Une URL embarquable, jamais un fichier
`lesson.video[videoLang]` alimente le `src` d'une `<iframe>` : un `.mp4` seul ne fonctionne pas. Conformes : `youtube-nocookie.com/embed/<ID>`, `player.vimeo.com/video/<ID>`. Refusés : `watch?v=`, `youtu.be/`, `.mp4`. Hébergeur : ABR, compte Karatou Academy, URL stable, média remplaçable derrière l'identifiant, 3 pistes CC, sans pub ni cookie.

### 12.2 Périmètre, nommage, intégration
15 vidéos, `cl6` exclu. Par couple : master `.mp4` 1920×1080 de 306,0 s (5:06,0 ; tolérance 301,0 à 311,0 s), variante 640×360, `.srt` + `.vtt`, transcription `.md`, vignette `<nom>_cover.jpg` 1920×1080 q85 à t = 5,70 s du master (1re image stable de B1). Par chapitre : source `.zip` + `RECETTE.md`. « Poster » ne désigne que le snapshot de recette du harnais, à t = 2,00 s de la carte présentateur, non livré.
Nommage `<module-slug>_<chapitre>_<langue>_v<n>.<ext>`, suffixes `-360`, `_transcript`, `_cover`, `_source`.
URL testée puis renseignée dans `video: { fr, en, ha }` de `lessonCl1Fr` (`src/data/lessons/introduction-claude-ai/cl1.ts`) ; entrée `authoredLessons` obligatoire, sinon l'URL n'est jamais lue.

### 12.3 Versions
URL gelée dès publication (code compilé) : corriger en remplaçant le média derrière l'identifiant ; sinon v2 en ligne → embed testé → code → déploiement → dépublication de la v1 (jamais suppression). Journal `v2 — <date> — <changement>`, péremption 18 mois, responsable [à fournir].

### 12.4 Recette
`RECETTE.md` coché par le prestataire, repassé par Karatou : une case non cochée = refus et non-paiement.
Master H.264 High 4.0, yuv420p, 30 i/s, GOP 60, `+faststart` ; ffmpeg et `loudnorm` consignés ; `.zip` re-rendu à l'identique sur un poste tiers. Variante 640×360 : débit total ≤ 398 kbit/s (vidéo `-maxrate 350k`, AAC-LC 48k), soit ≤ 15,5 Mo sur toute la tolérance.
Non-recouvrement : n-grammes n = 12 entre le texte du `.srt` (timecodes retirés) et `content[]`, `example`, `practice` ; minuscules, sans ponctuation, espaces réduits ; seuil 0 occurrence ; exclusions : consignes citées mot pour mot, promesse, `practice.title`. Résultat consigné dans `RECETTE.md`.
Verbalisation (P1) : l'expert-métier écoute la piste voix seule, sans image, deux fois au maximum, puis remplit la table d'alignement du §9 ; toute ligne non reconstituable à l'oreille = non-conformité, avis signé joint à `RECETTE.md`.

---

## 13. Points à trancher / à fournir par le client

Les grandeurs de la table de décisions sont arrêtées. Seuls les points ci-dessous restent ouverts. **B** = bloquant : aucune vidéo ne peut être rendue tant qu'il n'est pas fourni.

### 13.1 Bloquants
- **B** Logo `assets/brand/logo-karatou-academy.png` : PNG 32 bits alpha, ≥ 720×720, sans aplat blanc, lisible sur `#0A1628` et `#FFFFFF`. Ni redessin ni substitution.
- **B** Photo `assets/presenter/aminou-laouali-abdou.jpg` : 1:1 exact, ≥ 1080×1080, JPEG q90 sRGB < 400 Ko, EXIF appliqué puis supprimé, fond uni clair `#F3F4F6`, plan poitrine. Upscaling interdit.
- **B** Polices `.woff2` dans `assets/fonts/` : Inter 400/500/600/700 et Literata variable 400→700 (axe `opsz`). Sans fichiers locaux, le rendu échoue en `font_family_without_font_face`.
- **B** CTA haoussa de la carte de clôture, équivalent de « Passez à l'exercice du chapitre. ».
- **B** Voix off de la carte présentateur en EN et en HA (clé `presenter_vo`, pendant du FR « Bonjour, je suis Aminou Laouali Abdou. »).
- **B** Prise audio du nom par l'intéressé, une par langue ; `pronunciation.md` validé avant toute séance.
- **B** Haoussa : relecteur natif nommé, orthographe Boko de référence (Niger ou Nigeria), budget et délai de la voix HA, qui doit être humaine et native.
- **B** Autorisation écrite d'utilisation de l'image et de la voix du présentateur.
- **B** Captures anonymisées de `claude.ai` (bureau et mobile) dans `assets/captures/`, navigateur propre, sans donnée identifiante : les plans de type A valent ≥ 50 % de la durée et les maquettes sont interdites.

### 13.2 Arbitrages ordinaires
- Cadrage de la photo : valeur de `presenterPhotoPosition` si elle diffère du défaut `50% 30%`.
- Hébergeur vidéo et compte Karatou Academy : ABR, URL stable hors compte personnel, remplacement du média derrière un identifiant existant, 3 pistes CC, sans publicité ni cookie tiers, lecteur AA, statistiques de rétention.
- Analyse des CGU d'Anthropic sur la capture de l'interface `claude.ai`.
- `downloadUrl` et `downloadSizeMb` dans `LessonContent`, ou décision de retirer la variante 640×360.
- Identité de l'expert-métier P1 (avis signé) et du responsable éditorial de la revue annuelle et de la péremption à 18 mois.
- Panel P2 : 3 à 5 apprenants cibles testant cl1 sur leur propre téléphone, recrutés par le client.
