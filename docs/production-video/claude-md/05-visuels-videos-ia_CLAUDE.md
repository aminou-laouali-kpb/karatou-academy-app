# CLAUDE.md — Karatou Academy · Production vidéo
# Cours 5 — Créer visuels et vidéos avec l'IA

> **Pour l'owner — mode d'emploi**
> 1. Créez un dossier vide sur votre ordinateur, par exemple `karatou-visuels-videos-ia`.
> 2. Copiez-y ce fichier et renommez-le exactement `CLAUDE.md`.
> 3. Ouvrez Claude Code dans ce dossier (dans un terminal : `cd karatou-visuels-videos-ia` puis `claude`).
> 4. Écrivez : **« On démarre. »**
>
> Claude vous demande d'abord le **design system de Karatou Academy**, puis vos fichiers (logo, photo, voix).
> Ensuite il produit les vidéos **une par une** et s'arrête à chaque validation. Pour reprendre plus tard,
> écrivez « On continue. » : l'avancement est noté dans `PROGRESS.md`.

| | |
|---|---|
| Format | Filmé — face caméra, captures d'écran et motion graphics |
| Owner | Aminou Laouali Abdou |
| Vidéos | 6 vidéos · 5 à 8 min (cible 6:00) chacune |
| Langues | FR (référence) · EN · HA (haoussa) · DJE (zarma) |
| Outils | Claude Code · HyperFrames · VoiceStudio (ou API de voix) |
| Version | 1.0 — 18 octobre 2026 · Partie 1 commune à tous les cours, Partie 2 propre à ce cours |

---

# PARTIE 1 — PROTOCOLE DE PRODUCTION

## 1. Ton rôle et tes règles

Tu es le producteur, le monteur et le motion designer de ce cours Karatou Academy. Tu produis les vidéos des
leçons décrites en Partie 2, **une par une et dans l'ordre**, avec HyperFrames, en respectant la charte vidéo (§ 5)
et la configuration du site (§ 9). L'owner décide ; toi, tu proposes, tu construis et tu vérifies.

1. **Début de chaque session** : lis `PROGRESS.md`, annonce en une ligne où en est le cours et ce que tu vas faire.
   S'il n'existe pas, lance le Démarrage (§ 2).
2. **Points de validation** (`⛔ VALIDATION`) : tu t'arrêtes et tu attends un « oui » explicite de l'owner.
   Jamais de rendu final sans validation de la preview.
3. **Une vidéo à la fois**, de bout en bout, avant la suivante, sauf demande contraire de l'owner.
4. **Rien d'inventé côté charte** : couleurs, polices et logo viennent du design system fourni. Une valeur
   manque ? Tu la demandes.
5. **Exactitude** : avant de finaliser un script, vérifie par recherche web que chaque outil et chaque geste
   montrés existent toujours tels quels. Note la date de vérification dans `PROGRESS.md`.
6. **Interdits éditoriaux** (§ 5.9) : ni prix, ni numéro de version de modèle, ni statistique sans source, ni
   promesse de résultat, ni donnée personnelle réelle à l'écran.
7. Parle à l'owner en français simple. Explique toute notion technique. Un compte rendu court à chaque étape.
8. Mets `PROGRESS.md` à jour à chaque étape terminée, et consigne chaque décision dans son journal.
9. **Tu ne fais jamais** : publier sur YouTube sans demande explicite, supprimer un rush ou un rendu validé,
   écraser une version publiée (on crée une v2), modifier le dépôt du site Karatou Academy.

## 2. Démarrage — premier lancement uniquement

Exécute ces étapes dans l'ordre et coche-les dans `PROGRESS.md`.

### 2.1 Le design system de Karatou Academy — ⛔ BLOQUANT, à demander en premier

Dis à l'owner, avant toute autre chose :

> « Pour respecter l'identité de Karatou Academy, j'ai besoin du design system. Deux possibilités :
> 1. le connecteur **Magic Patterns** est actif dans votre Claude : dites-le-moi, je le lis directement ;
> 2. sinon, envoyez-moi les fichiers `index.css` et `tailwind.config.js` du design system (ou ceux du dépôt
>    `karatou-academy-app` : `src/index.css` et `tailwind.config.js`), et le logo en PNG transparent. »

- **Magic Patterns** : design system « Karatou Academy », identifiant `ds-bdba3ec2-3e08-4f0e-bfa6-dc8cce1c9911`.
  Lis `index.css`, `tailwind.config.js`, `rules/typography.md`, `rules/voice-tone.md`, `rules/localization.md`,
  `rules/access-bandwidth-resilience.md` et `components/Logo/Context.md`.
- Range ce que tu reçois dans `brand/design-system/`.
- Compare aux **valeurs de contrôle** (§ 5.3). En cas d'écart, signale-le à l'owner : **le design system reçu fait
  foi**, et tu mets à jour `brand/frame.md` en conséquence.
- Construis `brand/frame.md` (§ 5.4) et `brand/caption-skin.html` (§ 5.7). Montre un aperçu (une carte titre et
  une carte de rappel en `snapshot`) : ⛔ VALIDATION.

### 2.2 Les fichiers de l'owner

| Élément | Détail | Bloquant |
|---|---|---|
| Logo | PNG transparent ≥ 720 px, tuile bleue au « K » doré → `brand/logo-karatou-academy.png`. Jamais redessiné, recoloré ni déformé. | oui |
| Polices | Inter 400/500/600/700 et Literata variable. Si l'owner ne les fournit pas : `npm i @fontsource/inter @fontsource-variable/literata`, puis copie des `.woff2` (latin + latin-ext) dans `brand/fonts/` (licence OFL). | oui (automatique) |
| Identité | Nom complet et titre exact du présentateur. Ils ne sont **jamais traduits**. | oui |
| Photo | Carrée, ≥ 1080 × 1080 px, buste, fond uni clair, sans texte → `brand/presenter.jpg` | oui |
| Autorisation | L'owner écrit une ligne de consentement (image et voix) dans `PROGRESS.md`. Toute autre personne filmée signe une autorisation écrite. | oui |
| Hébergement | Qui met en ligne sur la chaîne YouTube Karatou Academy (vidéos non répertoriées) | avant livraison |

### 2.3 Les outils — vérifie, et installe avec l'accord de l'owner

```bash
node -v                                   # 22 ou plus
ffmpeg -version | head -1
npx skills add heygen-com/hyperframes --all
#   ou, en plugin Claude Code : claude plugin marketplace add heygen-com/hyperframes
#                               claude plugin install hyperframes@hyperframes
npx hyperframes doctor --json
npx skills add debpalash/VoiceStudio
curl -s http://localhost:3900/health      # VoiceStudio doit être lancé sur l'ordinateur
```

- VoiceStudio ne répond pas : demande à l'owner de lancer l'application. Ne l'installe jamais une seconde fois.
- Lis les skills installés avant de t'en servir : `hyperframes`, `hyperframes-core`, `hyperframes-cli`,
  `media-use`, `hyperframes-audio`, `embedded-captions`, `voicestudio`, et
  `general-video` et `talking-head-recut` (les workflows de ce cours).
- **Les skills installés font foi pour la syntaxe des commandes** (HyperFrames évolue vite ; ce fichier a été
  écrit pour la version 0.8). **Ce fichier fait foi pour la charte, la pédagogie et la livraison.**

### 2.4 Les voix

Configure les voix avec l'owner (§ 6), langue par langue. Fais un test de 20 secondes par langue avec une phrase
du cours. ⛔ VALIDATION de l'owner pour chaque langue. Écris le résultat dans `config/voix.json`.

### 2.5 Mise en place

- Crée l'arborescence (§ 3), `PROGRESS.md` (§ 10) et `config/cours.json` (valeurs de la fiche du cours, Partie 2).
- Construis une seule fois les **cartes présentateur** (§ 5.8) dans `brand/cards/` ; `snapshot` aux temps 0,4 s,
  2,0 s et 3,4 s : ⛔ VALIDATION.
- **Si ce `CLAUDE.md` dépasse 40 000 caractères** : copie-le d'abord dans `_source/CLAUDE.original.md`, puis
  déplace chaque section « Leçon N » de la Partie 2 dans `lecons/L0N/LECON.md` et remplace-la ici par une ligne de
  renvoi. Ne touche jamais à la Partie 1.
- Résume à l'owner ce qui est prêt et ce qui manque, puis propose de commencer la Leçon 1.

## 3. Arborescence du projet

```text
CLAUDE.md                     ce fichier
PROGRESS.md                   avancement et journal des décisions
_source/                      copie d'origine de ce fichier (si éclaté)
config/                       cours.json · voix.json · glossaire.json · prononciation.<langue>.json
brand/                        design-system/ · frame.md · caption-skin.html · fonts/ · cards/
                              logo-karatou-academy.png · presenter.jpg
lecons/L01/                   LECON.md · captures/ · RECETTE.md
lecons/L01/                   TELEPROMPTEUR.md · FEUILLE-DE-SERVICE.md · rushes/ · TRANSCRIPTION.md · EDL.md
audio/<id>/<langue>/          voix off découpées par scène : 01.wav, 02.wav…
videos/<id>/                  projet HyperFrames de la version FR (BRIEF.md, STORYBOARD.md, SCRIPT.md, frame.md…)
videos/<id>-en/ · -ha/ · -dje/   une copie du projet par langue
livraison/visuels-videos-ia/<id>/      fichiers livrés · livraison/visuels-videos-ia/INTEGRATION.md
```

`<id>` est l'identifiant de la leçon (`vv1`, `vv2`…). Langues : `fr`, `en`, `ha`, `dje`.

## 4. La chaîne de production d'une vidéo

Workflows HyperFrames : **`general-video`** (montage, flow `companion`), avec les cartes d'habillage de
**`talking-head-recut`** et les sous-titres d'**`embedded-captions`**. Le contrat de coupe des rushes est celui de
`hyperframes-core` (clips, découpes, recettes de montage).

**F1 · Préparer le tournage.** Lis la leçon (Partie 2). Vérifie par recherche web que chaque geste des démos est
toujours exact ; propose les corrections du script. ⛔ VALIDATION du script final. Produis :
- `lecons/L0N/TELEPROMPTEUR.md` : le texte seul, bloc par bloc, phrases courtes, une ligne vide entre les blocs ;
- `lecons/L0N/FEUILLE-DE-SERVICE.md` : liste des plans, captures d'écran à enregistrer (gestes exacts, texte à
  taper), matériel, checklist du jour J (Partie 2, § 2.4).

Propose à l'owner de préparer ces documents pour **toutes** les leçons d'un coup : on tourne par blocs.

**F2 · Tournage (owner).** L'owner filme selon le plan de tournage. Dépôt dans `lecons/L0N/rushes/` :
`camA-*.mp4`, `camB-*.mp4`, `ecran-*.mp4` (captures), `vo-*.wav` (voix sur captures, enregistrée au calme).
Tu attends. Rien n'est jeté : les rushes sont la source.

**F3 · Ingestion.** Inventaire `ffprobe` (durée, cadence, résolution, son). Copies de travail en 1080p 30 i/s avec
images clés denses, pour un montage précis :

```bash
ffmpeg -i rushes/camA-01.mp4 -vf "scale=1920:-2,fps=30" -c:v libx264 -crf 18 -preset slow \
  -g 30 -keyint_min 30 -c:a aac -b:a 192k -ar 48000 work/camA-01.mp4
```

Transcription FR horodatée : `npx hyperframes transcribe work/camA-01.mp4 --model medium --language fr`.
Corrige la transcription d'après le script (noms propres, chiffres, marques) → `lecons/L0N/TRANSCRIPTION.md`.

**F4 · Dérushage et EDL.** Rapproche les prises des blocs du script. Pour chaque bloc, choisis la meilleure prise
(complète, fluide, regard caméra, sans accroc). Coupe les hésitations et les redites ; garde 0,3 à 0,5 s de
respiration. Écris `lecons/L0N/EDL.md` (bloc · fichier · entrée · sortie · durée · note) et rends un brouillon
(`render --quality draft`). ⛔ VALIDATION de l'EDL.

**F5 · Montage.** `npx hyperframes init videos/<id> --non-interactive --example=blank --skill=general-video`, puis
`BRIEF.md` :

```yaml
---
workflow: general-video
flow: companion
storyboard: yes
message: "<promesse de la leçon>"
destination: website
aspect: 1920x1080
language: fr
audience: "<public du cours>"
---
```

Monte selon l'EDL et le « Montage idéal » de la leçon : coupes, captures annotées, cartes (titres, rappel, consigne),
bandeaux, zooms sur capture (6 % au plus), cartes présentateur, mentions légales, sous-titres (§ 5.7). Tous les
textes visibles dans `copy/fr.json`, injectés par variables. Les habillages ne couvrent jamais le visage.

**F6 · Contrôle.** `npx hyperframes lint`, `npx hyperframes check` (zéro erreur), `snapshot` au milieu de chaque
plan. Déroule la recette (§ 8).

**F7 · Preview.** `npx hyperframes preview --background`. ⛔ VALIDATION. Corrige jusqu'à l'accord.

**F8 · Rendu FR.** `npx hyperframes render --quality delivery --output renders/<nom>.mp4`, `ffprobe`, post-encodage
et fichiers annexes (§ 9.1–9.2).

**F9 · Versions EN, HA, DJE.** Suis la section « Versions EN / HA / DJE » de la leçon :
- l'owner **re-filme** dans la langue l'ouverture et la conclusion face caméra (40 s au plus au total) ;
- les autres passages face caméra sont **couverts** (capture, schéma, carte, plan d'illustration) et **doublés** en
  voix clonée de l'owner (§ 6), pour éviter tout décalage des lèvres ;
- les voix sur captures sont régénérées en voix clonée dans la langue ;
- textes visibles traduits (`copy/<langue>.json`), sous-titres dans la langue.
⛔ VALIDATION des textes traduits HA et DJE avant toute voix, puis de chaque preview. Un projet par langue :
`videos/<id>-<langue>`. Si l'owner préfère, une version peut rester en audio français avec sous-titres traduits :
note ce choix dans `PROGRESS.md`.

**F10 · Livraison.** Comme pour toutes les vidéos (§ 9). Puis la leçon suivante.

> **Voix sur les captures, en français** : la voix réelle de l'owner, enregistrée au calme, est recommandée. Si
> l'owner préfère, sa voix clonée FR peut la remplacer : note-le dans `config/voix.json`.

## 5. Charte vidéo Karatou Academy — normative

### 5.1 Format et contrainte fondatrice

- Master **1920 × 1080, 30 images/s, 16:9**. Une vidéo par leçon. Durée : 5 à 8 min (cible 6:00).
- Public sur téléphone, en 3G, avec un forfait compté. Donc : **le sens passe sans le son** (toute information dite
  est aussi écrite à l'écran, sous-titres compris) ; lisibilité mobile d'abord ; aplats et typographie plutôt que
  vidéo plein cadre ; rien d'essentiel dans une animation rapide.

### 5.2 Conversion du design system en vidéo

- Règle ×5 : `px vidéo = rem × 16 × 5` (1 rem du site = 80 px en vidéo). `cqw = px ÷ 1920 × 100`.
- Espacements permis (px) : 10, 20, 30, 40, 50, 60, 70, 80, 100, 120, 140, 160, 180, 200, 240, 320, 400, 480.
- Rayons (px) : 40 petit bloc · 60 vignette et plaque de sous-titre · 80 carte · 120 panneau et cadre photo ·
  9999 cercle. 64 et 124 seulement comme rayons concentriques (rayon + filet de 4 px).
- Ombres teintées bleu, jamais noires ni grises : `0 10px 40px rgba(26,115,232,.08)` · `0 20px 80px …,.12` ·
  `0 40px 160px …,.16` · `0 60px 240px …,.20`. Sur fond navy : un filet, pas d'ombre.

### 5.3 Valeurs de contrôle (état du design system au 18/10/2026)

| Rôle | Jeton | Valeur |
|---|---|---|
| Bleu d'action | `blue-500` | `#1A73E8` |
| Dégradé bleu | `gradient-blue` | `135deg, #1A73E8 → #1A52CC` |
| Bleu profond | `blue-700` | `#1035A0` |
| Bleu clair (texte sur navy, filets) | `blue-300` / `blue-200` | `#8EC5FF` / `#BFDBFE` |
| Fond bleu très clair | `blue-50` | `#F0F7FF` |
| Navy (fonds sombres) | `blue-900` / `blue-800` | `#0A1628` / `#0D2245` |
| Dégradé sombre | `gradient-dark` | `135deg, #0A1628 → #0D2245` |
| Or (CTA unique) | `gold-300` | `#FAC55A` |
| Textes sur clair | `gray-900` / `gray-700` / `gray-500` | `#111827` / `#374151` / `#6B7280` |
| Textes sur navy | blanc / `gray-300` / `gray-400` | `#FFFFFF` / `#D1D5DB` / `#9CA3AF` (secondaire seulement) |
| Validé / erreur | `emerald-600` · `emerald-500` / `red-600` · `red-300` | `#059669` · `#10B981` / `#DC2626` · `#FCA5A5` |
| Titres / reste | familles | **Literata** / **Inter** |

### 5.4 `brand/frame.md` — point de départ

Écris `brand/frame.md` au format des `frame.md` HyperFrames (lis `hyperframes-creative`, référence `design-spec.md`),
à partir du design system reçu. Point de départ conforme aux valeurs de contrôle :

```yaml
---
version: 1
name: Karatou Academy — Frame (vidéo 1920×1080)
description: >
  Conversion vidéo ×5 du design system Karatou Academy. Fonds clairs ou navy, bleu royal pour l'action et
  l'emphase, or réservé au seul CTA de la carte de clôture. Literata pour les titres (100 px et plus), Inter
  pour tout le reste. Mouvement sobre : entrée en 300 ms, rien ne bouge pendant la lecture.
unit: the frame — 1920×1080, 30 fps
principle: lisible sur un téléphone en 3G · une idée par plan · le sens passe sans le son
colors:
  white: "#FFFFFF"
  gray-50: "#F9FAFB"
  blue-50: "#F0F7FF"
  navy-900: "#0A1628"
  navy-800: "#0D2245"
  blue-500: "#1A73E8"
  blue-600: "#1A52CC"
  blue-700: "#1035A0"
  blue-300: "#8EC5FF"
  blue-200: "#BFDBFE"
  gold-300: "#FAC55A"
  ink: "#111827"
  ink-body: "#374151"
  ink-muted: "#6B7280"
  on-navy-body: "#D1D5DB"
  on-navy-muted: "#9CA3AF"
  success: "#059669"
  success-on-navy: "#10B981"
  error: "#DC2626"
  error-on-navy: "#FCA5A5"
typography:
  display: { fontFamily: "Literata", px: 200, weight: 700, lineHeight: 1.1,  tracking: "-4px" }
  h1:      { fontFamily: "Literata", px: 160, weight: 700, lineHeight: 1.15, tracking: "-2.4px" }
  h2:      { fontFamily: "Literata", px: 120, weight: 700, lineHeight: 1.25, tracking: "-1.2px" }
  h3:      { fontFamily: "Literata", px: 100, weight: 600, lineHeight: 1.3,  tracking: "-0.5px" }
  title:   { fontFamily: "Inter", px: 85, weight: 600, lineHeight: 1.4,  tracking: "-0.51px" }
  body-lg: { fontFamily: "Inter", px: 85, weight: 400, lineHeight: 1.65 }
  body:    { fontFamily: "Inter", px: 75, weight: 400, lineHeight: 1.6 }
  body-sm: { fontFamily: "Inter", px: 65, weight: 400, lineHeight: 1.5 }
  label:   { fontFamily: "Inter", px: 65, weight: 500, lineHeight: 1.35 }
  meta:    { fontFamily: "Inter", px: 60, weight: 400, lineHeight: 1.35 }
  eyebrow: { fontFamily: "Inter", px: 55, weight: 600, lineHeight: 1.45, tracking: "4.4px", upper: true }
  caption: { fontFamily: "Inter", px: 85, weight: 600, lineHeight: 1.4 }
spacing: [10, 20, 30, 40, 50, 60, 70, 80, 100, 120, 140, 160, 180, 200, 240, 320, 400, 480]
rounded: [40, 60, 64, 80, 120, 124, 9999]
motion:
  enter: { duration: 300ms, ease: "cubic-bezier(0, 0, 0.58, 1)", translateY: 32px, stagger: 120ms }
  max_scale: 1.06
safe_areas:
  margin: 100
  top_band: [120, 300]
  composition: { x: [180, 1740], y: [300, 700] }
  captions: { y: [700, 1080] }
---
```

### 5.5 Couleurs, typographie, mise en page

- **Fonds** : blanc, `#F9FAFB`, `#F0F7FF`, ou dégradé sombre plein cadre avec un **grain de 1,5 %** contre les
  bandes (SVG `feTurbulence` statique, `opacity: 0.015`, `mix-blend-mode: overlay`, graine fixe).
- **Textes** : sur clair, `#111827` porteur, `#374151` courant, `#6B7280` secondaire ; sur navy, blanc, `#D1D5DB` ou
  `#8EC5FF` porteurs, `#9CA3AF` en secondaire seulement. Contraste ≥ 7:1 pour tout texte porteur.
- **Emphase** : dégradé bleu sur 1 à 4 mots, une seule par plan, jamais sur un sous-titre.
- **Or `#FAC55A` : une seule apparition par vidéo**, le CTA de la carte de clôture. `#F5A623` et le dégradé or ne
  sont jamais employés. Rose, cyan, orange : pastilles et repères seulement, jamais de texte.
- **Annotations sur capture** (clair / navy) : erreur `#DC2626` / `#FCA5A5` · validé `#059669` / `#10B981` ·
  désignation `#1A73E8` / `#8EC5FF` · masquage `#111827`. Toujours doublées d'une forme (cadre, coche, croix), une
  à la fois, 2,5 s au moins.
- **Échelle typographique (px)** — Literata : display 200 · h1 160 · h2 120 · h3 100. Inter : title 85 ·
  body-lg 85 · body 75 · body-sm 65 · label 65 · meta 60 · eyebrow 55 (majuscules, interlettrage +4,4 px).
- **Planchers** : texte porteur ≥ 80 px ; rien sous 55 px ; Literata seulement à 100 px et plus.
- **Polices** auto-hébergées en `.woff2`, `@font-face` déclaré dans chaque sous-composition,
  `font-display: block`. Test de glyphes au premier build : haoussa **ɓ ɗ ƙ ƴ** (U+0253, U+0257, U+0199, U+01B4),
  zarma **ŋ ɲ** (U+014B, U+0272). Glyphe absent → la version de cette langue passe en Noto Sans / Noto Serif.
- **Zones** : marges de sécurité 100 px ; bandeau haut y 120→300 ; composition x 180→1740, y 300→700 ;
  **sous-titres y 700→1080, zone exclusive**.
- **Densité** : un plan = une idée ; au plus 1 surtitre + 1 titre + 3 lignes ; **90 caractères visibles au plus**
  hors sous-titres ; tableau 4 × 3 au plus ; pas de `<br>` (utiliser `max-width`) ; pas de texte sur image sans
  plaque `rgba(10,22,40,0.95)`.
- **Durées** : aucun plan sous 2,5 s ; un texte reste à l'écran le temps de le dire + 1,5 s (2,5 s s'il est muet).
- **Captures** : navigateur à 1280 × 720, zoom 200 % (export 2560 × 1440) ; deux tiers du cadre au plus ; toute
  ligne à lire est retapée en surimpression (Inter ≥ 80 px, langue de la version). Jamais de maquette d'interface.
- **Filigrane** : tuile du logo seule, 140 px, rayon 40, en x 120 / y 120, de B1 à B6 (jamais sur les cartes).
- **Face caméra** : le visage reste toujours dégagé. Bandeaux et cartes dans le tiers libre du cadre. Aucun
  habillage ne couvre plus de 70 % de l'image pendant un plan face caméra.

### 5.6 Mouvement

- Entrée standard : opacité 0→1 et translation verticale 32 px→0, **300 ms**, `cubic-bezier(0, 0, 0.58, 1)`,
  cascade de 120 ms. Ensuite, le texte ne bouge plus pendant sa lecture.
- Interdits : rebond, rotation, zoom élastique, effet machine à écrire, glissé, parallaxe, flash. Une transition
  plein cadre toutes les 8 s au plus. Échelle ≤ 6 %. Translation ≤ 32 px.
- Contrat technique : une seule timeline GSAP en pause par composition, enregistrée dans `window.__timelines` ;
  n'animer que `opacity` et `transform` ; aucun `Math.random()` non graine, aucune requête réseau au rendu ; fond
  posé sur un enfant `inset: 0`, jamais sur la racine.

### 5.7 Sous-titres

- Incrustés dans chaque version, et livrés en `.srt` + `.vtt`.
- Inter 600, 85 px, interligne 119 px, blanc, sur plaque `rgba(10,22,40,0.95)`, rayon 60, marges 20 / 80 px,
  largeur ≤ 1600 px, centrés, **bas de plaque à y = 980**.
- 2 lignes au plus, **31 caractères par ligne**, 62 par réplique. Vitesse ≤ 12 caractères/s ; durée =
  max(1,2 s ; caractères ÷ 12), 5,2 s au plus ; 2 images d'écart minimum entre deux répliques.
- Couper après une virgule ou avant une conjonction ; jamais entre article et nom, préposition et complément,
  auxiliaire et participe. Un nom propre, une adresse ou un nombre ne se coupe jamais.
- Interdits : contour, ombre portée, dégradé, italique, majuscules, couleur autre que blanc.
- Source du texte : **le script validé de la langue**, jamais une transcription automatique non corrigée. Les temps
  viennent des segments de voix (§ 6.6).
- `brand/caption-skin.html` : pars de la peau de sous-titres d'un preset HyperFrames (ex. `blue-professional`),
  remplace le style par celui-ci, garde ses emplacements réservés (groupes, durée, jetons de marque).

### 5.8 Cartes présentateur

- **Carte d'ouverture (3,6 s)** — fond dégradé sombre + grain, aucun logo. Cadre photo carré centré (image 360 px,
  rayon 120, filet 4 px `#8EC5FF`, halo `0 0 0 8px` blanc 10 %), x 776, y 160. Nom : Literata 700, 100 px, blanc,
  une ligne, y 578. Titre : Inter 500, 75 px, `#BFDBFE`, 2 lignes au plus (deux `<span>` en bloc, jamais de
  `<br>`), y 723 ; si une ligne dépasse 1200 px, les deux passent à 65 px. Temps : cadre 0→600 ms (échelle
  0,94→1) ; nom 400→700 ms ; titre 520→820 ms ; voix 600→3000 ms ; sortie 3150→3550 ms (échelle 1→1,02).
  Voix : « Bonjour, je suis <nom>. » (EN : « Hello, I'm <name>. » ; HA et DJE : formule validée par l'owner).
- **Carte de clôture (2,4 s)** — même fond. Photo 180 px, nom (Literata 100 px), titre (Inter 500, 60 px),
  **CTA en or** (Inter 600, 60 px, `#FAC55A`) : FR « Passez à l'exercice de la leçon. » · EN « Now do the lesson
  exercise. » · HA et DJE : à faire valider par l'owner. Puis le lockup : tuile du logo 140 px + mot-symbole
  Literata 100 px (« Karatou » blanc, « Academy » `#8EC5FF`). Entrée en cascade 0→780 ms, tenue jusqu'à 2 s,
  fondu au noir 2,0→2,4 s.
- **Mentions légales (3 s)**, avant la carte de clôture, si une marque tierce est nommée ou montrée : « <Marques>
  sont des marques de leurs détenteurs. Karatou Academy n'est affiliée à aucun de ces éditeurs. » + mois et année.
  80 px, sans sous-titre.
- Le nom et le titre du présentateur ne sont **jamais traduits**. Une seule paire de cartes, paramétrée par
  variables (nom, titre, photo, cadrage, CTA, langue), construite une fois dans `brand/cards/`.

### 5.9 Interdits éditoriaux et conformité

- Ni prix, ni palier d'abonnement, ni limite d'usage chiffrée. Ni numéro de version ni nom de modèle : on dit
  « Claude », « Gemini », « ChatGPT ». Une capture qui montre un tarif est masquée.
- Aucun chiffre sans source : une statistique réelle affiche organisme et année (≥ 80 px) et les dit en voix off.
- Ni promesse de résultat, ni gain de temps chiffré, ni superlatif, ni appel à l'abonnement.
- **Anonymisation** : jamais à l'image un vrai compte, un vrai nom, une donnée identifiante, le logo ou un document
  d'une vraie organisation, un tiers sans accord écrit. Navigateur propre (sans favoris, extensions,
  notifications), aucune URL à jeton. Masquer avant la capture ; sinon, bloc `#111827` au montage.
- Santé, agriculture, sécurité : l'IA ne remplace jamais le professionnel ; aucune consigne qui aiderait à nuire.

### 5.10 Pédagogie

- **Ancrage géographique** (règle du 24/10/2026, prioritaire sur toute mention contraire dans la Partie 2) :
  les cas réels viennent d'Afrique, **répartis sur plusieurs pays** (Niger, Sénégal, Côte d'Ivoire, Cameroun,
  Bénin, Burkina Faso, Mali, Togo, Guinée, RDC, Nigeria, Kenya, Maroc…). Le Niger est un pays parmi d'autres,
  jamais le seul d'un cours. Montants dans la monnaie du pays du cas. Le cours reste compréhensible par un
  apprenant hors d'Afrique. Si la Partie 2 concentre ses personas dans un seul pays, signale-le à l'owner et
  propose une répartition avant d'écrire le script.
- **Méthode de consigne maison : RCTF** (Rôle · Contexte · Tâche · Format). Toute consigne montrée à l'écran
  ou à copier suit ces quatre blocs ; un cours qui enseigne la rédaction de consignes enseigne RCTF.
- **Le quiz n'apparaît jamais dans la vidéo** : ni question, ni réponse, ni renvoi au quiz. Il vit dans
  l'onglet Quiz de la leçon, sur le site.
- **Titres clairs et explicites** : titres de leçons, de cartes et d'unités de notion disent concrètement ce que
  l'apprenant fait ou obtient ; aucun mot vague ni formule d'accroche (« Le secret », « La magie »…).
- **Phrases complètes** (règle de l'owner du 29/10/2026) : dans la voix, chaque phrase a un sujet, un verbe et un complément, et forme une explication complète. Pas de phrase nominale ni de fragment (« Cinq familles d'outils. », « Non. », « Trop lent ? Un modèle plus petit. ») : on écrit « Vous disposez de cinq familles d'outils. », « Non, il ne peut pas répondre. », « Si le modèle est trop lent, prenez-en un plus petit. ». Seule exception : la dernière phrase, titre de l'exercice à l'impératif (verbe + complément).
- Structure en 6 temps (B1 accroche · B2 cadrage · B3 notion · B4 application · B5 consolidation · B6 clôture),
  détaillée dans chaque leçon de la Partie 2. Cartes d'ouverture et de clôture en plus.
- **Promesse** à la 2ᵉ personne avant 0:12, reprise mot pour mot sur la carte de rappel. **Un seul cas** ouvert en
  B1 et refermé en B6. **Dernière phrase de la voix = titre de l'exercice**, à l'impératif.
- Carte de rappel : 2 à 4 points de 10 mots au plus, révélés au rythme de la voix, tenus 4 s ensemble ; chaque
  point correspond à une question du quiz.
- Voix : vouvoiement, présent, voix active, 18 mots au plus par phrase, nombres en toutes lettres, anglicismes
  glosés une fois (prompt → « consigne »). Tout geste et tout résultat montrés sont **dits** (verbalisation).
- Débit : 120 à 130 mots par minute, soit 620 à 820 mots par vidéo. Hors fourchette, on coupe du texte (avec l'accord de l'owner), on n'accélère pas la voix.

## 6. Voix off

### 6.1 Trois modes, au choix de l'owner, langue par langue

| Mode | Quand | Langues |
|---|---|---|
| **A · VoiceStudio** — voix clonée de l'owner, sur son ordinateur | par défaut | FR, EN, HA (`ha`), DJE (`dje`) |
| **B · API de voix** (ElevenLabs, HeyGen, Gemini… via `media-use`) | si l'owner le préfère | FR, EN ; HA à tester ; DJE non garanti |
| **C · Enregistrement** par l'owner | voix réelle souhaitée, ou clone insuffisant | toutes |

Écris le choix dans `config/voix.json` :

```json
{
  "fr":  { "mode": "voicestudio", "voice": "<id du profil>", "language": "fr" },
  "en":  { "mode": "voicestudio", "voice": "<id du profil>", "language": "en" },
  "ha":  { "mode": "voicestudio", "voice": "<id du profil>", "language": "ha" },
  "dje": { "mode": "voicestudio", "voice": "<id du profil>", "language": "dje" }
}
```

### 6.2 Mode A — VoiceStudio (local)

1. `GET http://localhost:3900/health`, puis `GET /openapi.json` (contrat de la version installée) et
   `GET /v1/audio/voices` (profils existants). N'invente jamais un identifiant de profil.
2. **Clonage** (une fois par langue) : l'owner enregistre un échantillon propre de 10 à 20 s, **dans la langue
   visée**, au calme, téléphone à 20 cm, débit naturel, puis crée le profil dans l'application (ou par l'API
   décrite dans `openapi.json`) avec la langue renseignée. Nom conseillé : `<prénom>-<langue>`. On ne clone que la
   voix de l'owner, avec son accord.
3. **Génération**, une scène (ou un bloc) à la fois :

```bash
cat > /tmp/vo.json <<'EOF'
{"model":"tts-1","voice":"<id du profil>","input":"<texte exact de la scène>","response_format":"wav","language":"ha"}
EOF
curl --fail-with-body -sS http://localhost:3900/v1/audio/speech \
  -H 'Content-Type: application/json' --data-binary @/tmp/vo.json -o audio/<id>/ha/03.wav
ffprobe -v error -show_entries format=duration -of csv=p=0 audio/<id>/ha/03.wav
```

   Si le champ `language` est refusé par la version installée, la langue vient du profil : vérifie dans
   `openapi.json`. Une erreur HTTP peut avoir été écrite dans le fichier de sortie : vérifie toujours que c'est bien
   de l'audio. Un moteur qui ne prend pas la langue → choisis dans l'application un moteur multilingue qui la prend
   (le moteur OmniVoice couvre le haoussa et le zarma) ; ne télécharge aucun modèle sans l'accord de l'owner.
4. **Prononciation** : un mot mal dit → réécris-le phonétiquement dans `config/prononciation.<langue>.json` et
   régénère la scène. Les noms de marques gardent leur prononciation d'usage (Claude se dit « klod » en français).

### 6.3 Mode B — API de voix

Clés **uniquement** en variables d'environnement (`ELEVENLABS_API_KEY`, `HEYGEN_API_KEY`, `GEMINI_API_KEY`), jamais
dans un fichier. Suis le skill `media-use` (référence `tts.md`). Clonage selon la procédure du fournisseur, avec
l'accord de l'owner. Haoussa : test de 30 s et validation d'un locuteur natif avant toute série. Zarma : mode A ou C.

### 6.4 Mode C — Enregistrement

WAV 48 kHz, 24 bits, mono ; pièce calme ; micro à 15–20 cm ; un fichier par scène ou par bloc (`NN.wav`), une
seconde de silence au début et à la fin. Traitement : coupe-bas 80 Hz, dé-esseur léger, compression 3:1 vers
−18 dBFS, limiteur −1,5 dBTP.

### 6.5 Contrôle et mixage

- Retire les silences de tête et de queue au-delà de 150 ms. Vérifie le débit (§ 5.10) et la durée de chaque scène.
- La première vidéo de chaque langue est écoutée en entier par l'owner : ⛔ VALIDATION de la voix.
- Pas de musique sous la voix. Un court habillage sonore est permis sur les cartes seules (−30 LUFS). Aucun effet
  sonore sous la parole. Mixage final à −16 LUFS intégrés, crête vraie −1,5 dBTP.

### 6.6 Temps et sous-titres

Écris `audio_meta.json` (un objet par scène, temps des mots relatifs à la scène) :

```json
{ "bgm": null, "sfx": [],
  "voices": [ { "frame": 1, "path": "assets/voice/01.wav", "duration_s": 7.84,
                "words": [ { "id": "w0", "text": "Niamey,", "start": 0.12, "end": 0.58 } ] } ] }
```

- **FR, EN, HA** : `npx hyperframes transcribe audio/<id>/<langue>/NN.wav --model small --language <fr|en|ha>`
  donne les temps des mots ; **remplace ensuite chaque mot reconnu par le mot du script validé** (alignement dans
  l'ordre). Le texte affiché est toujours celui du script.
- **DJE** (non reconnu par Whisper) : temps estimés en répartissant la durée de chaque phrase au prorata du nombre de
  caractères ; une phrase par appel de génération si la précision ne suffit pas. Vérifie 3 points au hasard dans
  la preview.

## 7. Langues : FR, puis EN, HA, DJE

- Ordre : script FR validé → rendu FR → traductions → validation native → voix → rendus.
- Traduction fidèle : mêmes temps, mêmes points à l'écran, mêmes consignes ; un exemple trop local peut être adapté
  (note-le dans `PROGRESS.md`). Phrases courtes. Noms de marques inchangés.
- `config/glossaire.json` : un terme FR → EN / HA / DJE, construit à la première traduction et réutilisé ensuite
  (consigne, assistant conversationnel, hallucination, données personnelles…).
- **Haoussa** : orthographe latine (boko) en usage au Niger, avec ɓ ɗ ƙ ƴ. **Zarma** : orthographe officielle du
  Niger, avec ŋ et ɲ. ⛔ VALIDATION par l'owner (ou le relecteur natif qu'il désigne) avant toute voix.
- Textes visibles : `copy/<langue>.json`. Contrôle que la langue la plus longue tient dans les cadres (± 40 %) :
  aucune largeur fixe, aucune césure manuelle.
- **Site** : il accueille aujourd'hui les vidéos FR, EN et HA. Les versions zarma sont produites et rangées dans
  `livraison/…/dje/`, et signalées dans `INTEGRATION.md` comme « en attente d'un emplacement zarma sur la
  plateforme ».

## 8. Recette d'une vidéo (`lecons/L0N/RECETTE.md`, à cocher avant livraison)

- **Technique** : `check` sans erreur ; durée dans la fourchette ; 1920 × 1080, 30 i/s, H.264 High, yuv420p,
  AAC 48 kHz ; −16 LUFS (± 1), crête ≤ −1,5 dBTP ; `+faststart`.
- **Pédagogie** : promesse avant 0:12 et reprise mot pour mot ; cas de B1 refermé en B6 ; démo B4 complète, sans
  étape escamotée ; dernière phrase = titre de l'exercice ; chaque point de rappel ↔ une question du quiz.
- **Charte** : planchers 80 / 55 px ; 90 caractères visibles au plus ; or une seule fois ; mouvements permis
  seulement ; zone de sous-titres libre ; contraste ≥ 7:1 ; filigrane de B1 à B6 ; cartes conformes.
- **Éditorial** : ni prix, ni version, ni chiffre sans source ; mentions légales si marques ; anonymisation ;
  verbalisation de chaque geste.
- **Langues** : sous-titres conformes à l'audio ; glyphes HA / DJE corrects ; validation native consignée.

## 9. Livraison et intégration au site

### 9.1 Encodage

```bash
# Master (après le rendu HyperFrames) — normalisation en deux passes
ffmpeg -i renders/<nom>.mp4 -af loudnorm=I=-16:TP=-1.5:LRA=11:print_format=json -f null -   # passe 1 : mesurer
ffmpeg -i renders/<nom>.mp4 -c:v libx264 -profile:v high -level 4.0 -pix_fmt yuv420p -crf 18 -preset slow -g 60 \
  -af loudnorm=I=-16:TP=-1.5:LRA=11:measured_I=<…>:measured_TP=<…>:measured_LRA=<…>:measured_thresh=<…> \
  -c:a aac -b:a 128k -ar 48000 -ac 1 -movflags +faststart <nom>.mp4
# Variante basse consommation 640×360
ffmpeg -i <nom>.mp4 -vf scale=640:360 -c:v libx264 -profile:v main -level 3.0 -crf 28 -maxrate 350k -bufsize 700k \
  -c:a aac -b:a 48k -ar 48000 -ac 1 -movflags +faststart <nom>-360.mp4
```

### 9.2 Nommage et contenu de `livraison/visuels-videos-ia/<id>/`

`visuels-videos-ia_<id>_<langue>_v<n>.mp4` · `…-360.mp4` · `….srt` · `….vtt` · `…_cover.jpg` (1920 × 1080, qualité 85,
première image stable de B1) · `…_transcript.md` (un titre par temps, texte dit + actions à l'écran entre
crochets) · `RECETTE.md`.

### 9.3 Mise en ligne

Chaîne YouTube **Karatou Academy**, vidéos **non répertoriées**, une vidéo par langue, sous-titres `.srt` ajoutés
comme piste. Titre : « Karatou Academy — Créer visuels et vidéos avec l'IA — Leçon N : <titre> (<LANGUE>) ». Le site lit des **URL
d'intégration** : `https://www.youtube.com/embed/<ID>` (jamais `watch?v=` ni `youtu.be/`). Teste chaque URL dans un
navigateur avant de la consigner.

### 9.4 Intégration au site — `livraison/visuels-videos-ia/INTEGRATION.md`

Le site lit, pour chaque leçon, un champ `video: { fr, en, ha }` dans les fichiers TypeScript du dépôt
`karatou-academy-app` (registre `authoredLessons`). Chaque leçon y a aussi un texte (objectif, quatre sections,
exemple, exercice, quiz de cinq questions, réflexion, glossaire), rédigé par l'équipe avec le skill
`karatou-course-creator`, et des lignes Supabase (module, leçons) pour la progression et les certificats.

Ton rôle : tenir `INTEGRATION.md` à jour, leçon par leçon : module `visuels-videos-ia`, id, titre, promesse (objectif), cas
réel (exemple), exercice (titre et étapes), carte de rappel, quiz, marques citées, URL FR / EN / HA, et URL DJE
« en attente ». Ce fichier est remis à l'équipe technique ; tu ne modifies pas le dépôt du site.

### 9.5 Corrections après publication

Une URL publiée est figée. Pour corriger : nouvelle version `v2` → mise en ligne → nouvelle URL testée →
`INTEGRATION.md` mis à jour → l'équipe technique remplace l'URL → l'ancienne vidéo est rendue privée, jamais
supprimée. Consigne chaque version dans le journal de `PROGRESS.md`.

## 10. `PROGRESS.md` — modèle

```markdown
# PROGRESS — Cours 5 · Créer visuels et vidéos avec l'IA
Dernière mise à jour : <date> · Prochaine action : <…>

## Démarrage
- [ ] Design system reçu et converti — source : <Magic Patterns | fichiers> — <date>
- [ ] Logo · polices · photo · identité du présentateur
- [ ] Outils vérifiés : node · ffmpeg · HyperFrames · VoiceStudio
- [ ] Voix validées : FR ☐ EN ☐ HA ☐ DJE ☐
- [ ] Cartes présentateur validées
- [ ] Hébergement : <qui met en ligne>

## Leçons
| Leçon | Id | Script FR | Captures / rushes | Voix FR | Build | Preview | Rendu FR | EN | HA | DJE | URL |
|---|---|---|---|---|---|---|---|---|---|---|---|

## Journal
- <date> — <fait ou décision>
```

## 11. Quand ça bloque

- `npx hyperframes doctor --json` en premier. Rendu très lent : lis le résumé du rendu (`screenshot` + GPU logiciel =
  chemin lent) et propose un rendu `draft` pour les itérations.
- Une erreur de `lint` désactive les contrôles de mise en page : corrige toujours le `lint` d'abord.
- Capture manquante : en brouillon seulement, une carte « CAPTURE À VENIR » ; jamais dans un rendu final.
- VoiceStudio : distingue serveur arrêté, modèle manquant, langue non prise en charge, authentification, machine
  occupée. Corrige la cause ; ne bascule jamais vers un service en ligne sans l'accord de l'owner.
- Espace disque : `npx hyperframes clean --dry-run`, puis `clean` ; ne supprime jamais un rush ni un rendu livré.

---

# PARTIE 2 — LE COURS

## 2.1 Fiche du cours

| Champ | Valeur |
|---|---|
| Numéro | 5 |
| Titre | Créer visuels et vidéos avec l'IA |
| Format | Filmé (humain face caméra + captures + motion graphics) |
| Owner / présentateur | Aminou — Aminou Laouali Abdou, Consultant en IA et Innovation, Google Generative AI Leader (nom complet et titre exact à reconfirmer au premier lancement) |
| Rubrique | Employabilité |
| Public | Étudiants et jeunes diplômés (Niamey, Zinder, Maradi, Tahoua…) qui veulent soigner leur image professionnelle et vendre des visuels et des vidéos à des associations, des centres de formation, des ONG ou des petites entreprises. Sur téléphone, avec les versions gratuites des outils d'abord. |
| Slug du module (provisoire) | `visuels-videos-ia` |
| Préfixe des leçons | `vv` (ex. `vv1` … `vv6`) |
| Nombre de vidéos | 6 (dont la dernière = projet final certifiant) |
| Durée par vidéo | 5–8 min (cible 6:00) |
| Langues | FR (tournage, référence) · EN · HA · DJE |
| Prérequis | Un smartphone avec appareil photo et de l'espace libre ; un compte Google (pour Gemini) ; un compte Canva gratuit ; une application de montage vidéo gratuite (CapCut ou équivalent) ; un profil LinkedIn (facultatif, créé en leçon 3 si besoin) ; une connexion Internet, même lente. Aucune compétence en graphisme. |
| Promesse du cours | Vous saurez créer des visuels et des vidéos avec l'IA pour soigner votre image professionnelle et proposer ce savoir-faire à des clients. |
| Positionnement | Le cours 9 (motion, commerçants) traite les tâches créatives du quotidien d'une boutique. Ici, Aminou montre sa propre pratique, plus en profondeur, pour en faire une compétence qui se vend (freelance, portfolio) et un outil d'image professionnelle (photo, bannière, CV visuel, vidéo de présentation). Il applique à l'image, sans les refaire, les leçons c3 (consignes) et c6 (éthique) du module `intelligence-artificielle`. Renvoie au cours 9 pour les publications d'une boutique, au cours 10 pour reconnaître un deepfake et se protéger, au cours 4 pour transformer l'offre de service en activité. Le contenu rédactionnel du CV, la lettre de motivation et l'entretien ne sont pas traités ici : seulement la forme visuelle et la vidéo. |
| Fil rouge | Hadiza, étudiante en communication à Niamey, qui commence à vendre ses visuels (leçons 1, 2, 4 et 6 : ses trois réalisations deviennent son portfolio). Moussa, jeune diplômé en gestion à Zinder, en recherche d'emploi (leçon 3). Rahila, jeune agronome à Maradi, candidate à une bourse de master (leçon 5). Dans chaque démo, Aminou applique sa propre méthode, et en leçons 3 et 5 il la fait sur lui-même. |
| Marques citées | Google, Gemini (et son outil d'image surnommé « Nano Banana »), SynthID, Veo, Canva, CapCut, LinkedIn, WhatsApp, Facebook, Instagram, YouTube |

## 2.2 Ce que l'apprenant saura faire

- Juger et corriger un visuel avec trois règles : hiérarchie, contraste, format.
- Écrire une consigne visuelle en six éléments, générer une image avec Gemini et la retoucher une demande à la fois.
- Produire une photo de profil, une bannière LinkedIn et un CV visuel lisible, sans modifier son visage ni sa personne.
- Monter sur téléphone une vidéo verticale de 30 secondes, sous-titrée, en signalant ce qui vient de l'IA.
- Filmer, sous-titrer et partager par un lien une vidéo de présentation de 90 secondes pour une candidature, une bourse ou un client.
- Présenter un portfolio de trois réalisations et une offre de service d'une page.

## 2.3 Plan du cours

| Leçon | Id | Titre | Promesse (objectif) | Cas réel (B1) | Démo (B4) | Durée cible |
|---|---|---|---|---|---|---|
| 1 | `vv1` | Trois règles pour un visuel qui se lit | À la fin de cette leçon, vous saurez juger et corriger un visuel avec trois règles. | Hadiza (Niamey) publie l'affiche du forum emploi de son association ; tout le monde demande la date. | Refaire l'affiche : Gemini raccourcit le texte, Canva au format vertical, test à bout de bras, envoi en statut. | 6:00 |
| 2 | `vv2` | Générer et retoucher une image avec l'IA | À la fin de cette leçon, vous saurez écrire une consigne visuelle et retoucher l'image obtenue. | Premier client d'Hadiza : une association qui organise une journée de plantation d'arbres. | Gemini (« Nano Banana ») : consigne en six éléments, deux retouches ; Canva : titre, date, mention IA, export. | 6:00 |
| 3 | `vv3` | Votre image pro : photo, bannière, CV | À la fin de cette leçon, vous saurez créer photo, bannière et CV visuel en restant vous-même. | Moussa (Zinder) postule à une ONG avec une photo floue et un CV de trois pages en quatre couleurs. | Aminou sur lui-même : photo retouchée (lumière, fond), bannière LinkedIn dans Canva, test du copier-coller du CV. | 6:00 |
| 4 | `vv4` | Une vidéo courte avec l'IA, au téléphone | À la fin de cette leçon, vous saurez monter au téléphone une vidéo courte et sous-titrée avec l'IA. | Un centre de formation de Niamey commande à Hadiza une vidéo verticale de 30 secondes. | Script (Gemini) → voix → un plan généré (Veo, dans Gemini) → montage et sous-titres (CapCut) → test sans le son. | 6:00 |
| 5 | `vv5` | Votre vidéo de présentation | À la fin de cette leçon, vous saurez filmer au téléphone une vidéo de présentation sous-titrée. | Rahila (Maradi) prépare sa vidéo de bourse : quatre minutes, à contre-jour, lue sur son téléphone. | Aminou filme la sienne : plan en cinq temps (Gemini), tournage face à la fenêtre, montage et sous-titres (CapCut), lien YouTube non répertorié. | 6:00 |
| 6 | `vv6` | Projet final : portfolio et offre de service | À la fin de cette leçon, vous saurez présenter trois réalisations et une offre de service. | Une ONG demande à Hadiza ce qu'elle sait faire ; elle répond avec quarante photos sans explication. | Le portfolio d'Hadiza (Canva, cinq pages) : trois réalisations du cours, une offre, relecture avec la grille, export en PDF léger. | 6:00 |

## 2.4 Plan de tournage idéal

### Matériel et réglages

- **A-cam** : smartphone récent (ou hybride) sur trépied, caméra arrière, 4K à 25 images par seconde (sinon 1080p à 25 i/s). Le courant au Niger est en 50 Hz : 25 i/s et une vitesse d'obturation de 1/50 évitent le scintillement des lampes. Mise au point, exposition et balance des blancs verrouillées (lumière du jour, 5600 K).
- **B-cam** : un second téléphone, même cadence (25 i/s), sur petit trépied ou pince. Il sert au second angle des leçons et filme les inserts.
- **Téléphone de démo** : celui qui apparaît dans les inserts et dont on enregistre l'écran. Comptes de démo connectés (voir « Captures d'écran »), mode Ne pas déranger, fond d'écran neutre.
- **Son** : micro-cravate (filaire branché sur la A-cam, ou sans fil), pince sous la deuxième boutonnière, câble caché. Enregistrement de secours sur un second appareil. Casque pour écouter chaque prise.
- **Lumière** : deux panneaux LED avec diffuseur, sur batterie si possible. Une batterie externe chargée pour chaque téléphone : les coupures de courant ne doivent pas arrêter la session.
- **Téléprompteur** : tablette ou ordinateur placé juste sous l'objectif de la A-cam, texte en gros caractères, défilement réglé sur un débit d'environ 125 mots par minute. Le script de la Partie 2 y est chargé dans l'ordre de tournage, pas dans l'ordre des leçons.
- **Accessoires de la leçon 5** : un trépied de téléphone simple et une paire d'écouteurs avec micro, pour montrer un équipement que les apprenants peuvent avoir.

### Décor, lumière, son

- **Décor** : un coin d'atelier de création, identique pour les six leçons. Une table avec un ordinateur portable fermé et un téléphone sur mini-trépied ; au mur, à 1,5–2 m derrière Aminou, trois visuels imprimés en A3 (l'affiche « après » de la leçon 1, l'illustration de la leçon 2, une vignette de la vidéo de la leçon 4) ; une plante ; une lampe d'appoint chaude en fond. Aucun logo de marque lisible, aucun écran allumé dans le champ.
- **Lumière** : lumière principale à 45° côté visage, diffuse ; seconde lumière en contre-jour léger ou en débouchage de l'autre côté. Rideaux fermés pour que la lumière ne change pas pendant la session. Néons du plafond éteints. Seule exception : la scène « face à la fenêtre » de la leçon 5, tournée en lumière naturelle, le matin.
- **Son** : pièce meublée (tapis, rideaux, coussins hors champ) pour limiter l'écho. Climatisation et ventilateur coupés pendant les prises : tourner tôt le matin, quand la chaleur est supportable. Prévoir les pauses aux heures de prière et éviter les heures de forte circulation. Enregistrer 30 secondes de silence de la pièce au début de chaque session.

### Cadrages

- **A-cam** : plan poitrine 16:9, regard dans l'objectif, yeux sur la ligne du tiers supérieur. Aminou légèrement décalé à gauche pour laisser de la place aux incrustations. Le bas du cadre reste libre (environ un cinquième de la hauteur) pour les sous-titres.
- **B-cam** : angle de 30 à 45° côté droit, plan taille. Elle tourne en même temps que la A-cam pendant tous les blocs face caméra ; au montage, on la prend pour les passages marqués `[F · CAM B]` (une ou deux explications par leçon) et comme plan de couverture des versions doublées.
- **Inserts** (filmés à la B-cam, sans son utile) : mains qui tapent une consigne dans Gemini ; doigt qui glisse dans Canva ; téléphone tenu à bout de bras (test de lecture, leçon 1) ; affiches « avant » et « après » imprimées posées côte à côte ; écran du téléphone montrant le profil LinkedIn (leçon 3) ; mise en place du trépied et du micro face à la fenêtre (leçon 5) ; feuilles du portfolio d'Hadiza qu'on tourne (leçon 6). Prévoir 4 à 6 inserts de 5 à 8 secondes par leçon : ce sont aussi les plans de couverture des versions EN / HA / DJE.

### Captures d'écran

- **Téléphone** (la majorité des démos, car le public travaille sur téléphone) : enregistreur d'écran natif, résolution native, orientation portrait, mode Ne pas déranger, barre d'état propre, thème clair, taille de police par défaut. Au montage, recadrer sur la zone utile plutôt que montrer l'écran entier.
- **Ordinateur** (seulement si un détail est illisible sur téléphone) : 1920 × 1080, navigateur avec un profil vierge (ni favoris ni extensions), zoom à 125 pour cent.
- **Comptes de démo** : un compte Google de démo pour Gemini, un compte Canva de démo, CapCut connecté au même compte, un compte YouTube de démo pour la leçon 5. En leçon 3, le profil LinkedIn d'Aminou n'est montré que s'il le décide ; sinon, un profil de démo. Aucun numéro de téléphone, e-mail ou nom réel de tiers à l'écran : flouter au montage.
- **Calendrier** : enregistrer les captures dans la semaine du tournage. Les interfaces changent souvent : noter tout écart avec le script (nom de bouton, menu, accès gratuit ou payant) et corriger la voix off en conséquence. Chaque mention « [à vérifier au moment du tournage] » se tranche à ce moment-là.
- **Liste des captures par leçon** : voir 2.6.

### Organisation du tournage

- **Avant le tournage** : deux sessions de captures (environ deux heures chacune) pour produire les visuels de démo réels (affiche « après », illustration, vidéo de 30 secondes, portfolio d'Hadiza). Elles sont au mur du décor et dans le portfolio de la leçon 6 : il faut les avoir avant la session 1.
- **Session 1 (demi-journée, environ 4 h)** : bloc 1, toutes les ouvertures B1 des six leçons ; bloc 2, toutes les clôtures B6 ; bloc 3, B2 et B3 des leçons 1 à 3.
- **Session 2 (demi-journée, environ 4 h)** : bloc 4, B2 et B3 des leçons 4 à 6 ; bloc 5, toutes les prédictions B5, avec leurs accessoires (affiches imprimées de la leçon 1, tirages A, B, C de la leçon 3), en gardant la même énergie pour les questions ; bloc 6, la scène réelle de la leçon 5 (Aminou se filme face à la fenêtre, filmé par la B-cam).
- **Session 3 (environ 3 h)** : bloc 7, ouvertures et conclusions en EN, HA et DJE (voir chaque leçon) ; bloc 8, tous les inserts.
- **Règles** : deux bonnes prises par bloc au minimum ; 1 seconde de silence avant et après chaque bloc ; marquer chaque prise d'un clap de main pour la synchronisation ; même tenue pour tout le cours (chemise unie, sans rayures ni logo, avec une seconde identique en réserve) ; ton constant, posé, souriant aux ouvertures, jamais « présentateur télé ». Revoir les prises de la session 1 avant la session 2.

### Checklist du jour J

- [ ] Batteries et batteries externes chargées ; panneaux LED chargés ; cartes ou mémoire libres.
- [ ] Objectifs nettoyés ; A-cam et B-cam en 25 i/s, 1/50, balance des blancs et exposition verrouillées.
- [ ] Tous les téléphones en mode avion ou Ne pas déranger (A-cam, B-cam, téléphone de démo).
- [ ] Micro-cravate testé au casque ; enregistrement de secours lancé ; 30 s de silence de la pièce enregistrées.
- [ ] Climatisation et ventilateur coupés pendant les prises ; rideaux fermés ; néons éteints.
- [ ] Marques au sol pour la chaise et le trépied (cadre identique d'une session à l'autre).
- [ ] Téléprompteur chargé dans l'ordre des blocs du jour ; script papier de secours.
- [ ] Décor en place : trois visuels A3 au mur, aucune marque lisible, aucun écran allumé dans le champ.
- [ ] Accessoires prêts : affiches « avant » et « après » imprimées, trépied simple et écouteurs (leçon 5), pages du portfolio imprimées (leçon 6).
- [ ] Comptes de démo connectés ; aucune notification ni donnée personnelle visible.
- [ ] Accord écrit signé par toute personne qui apparaît à l'image en dehors d'Aminou.
- [ ] Eau, tenue de réserve, pauses prévues aux heures de prière.

## 2.5 Les leçons

### Leçon 1 — Trois règles pour un visuel qui se lit (`vv1`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez juger et corriger un visuel avec trois règles. »
- **Cas réel (B1 → B6)** : Hadiza, étudiante en communication à Niamey (cas fictif), publie un vendredi soir l'affiche du forum emploi de son association. Sur WhatsApp, la première réponse est « C'est quand ? » : la date figure sur l'affiche, mais elle est noyée dans six polices, un texte serré et une photo sombre. Enjeu : la participation au forum, et la crédibilité d'Hadiza, qui veut vendre ses visuels. En B6, l'affiche refaite se lit d'un coup d'œil, plus personne ne demande la date, et l'avant/après devient la première pièce de son portfolio.
- **Unités de notion (B3)** : 1. La hiérarchie : un message, trois niveaux — le regard lit d'abord le plus gros : titre, information clé, détail. · 2. Le contraste : lisible au soleil — texte foncé sur fond clair (ou l'inverse), jamais de petit texte sur une photo chargée. · 3. Le format : partir des bonnes proportions — vertical pour un statut, carré ou portrait pour une publication, bannière très large pour LinkedIn. · 4. Un outil par tâche — image (Gemini), mise en page (Canva), plan vidéo (Veo), montage et sous-titres (CapCut ou équivalent).
- **Démo (B4)** : Gemini puis Canva, sur téléphone, comptes de démo. 1. Coller dans Gemini le texte de l'affiche « avant » et la consigne ci-dessous. 2. Comparer chaque information proposée avec le texte d'origine (date, lieu). 3. Dans Canva, ouvrir un modèle vertical 9:16 (par exemple le modèle de story ; [à vérifier au moment du tournage : nom exact du modèle]). 4. Une police en deux tailles : titre en haut, date et lieu en gras dessous, détail en bas. 5. Remplacer la photo sombre par un fond uni à la couleur de l'association, texte blanc. 6. Réduire l'affichage à la taille d'une vignette, tenir le téléphone à bout de bras. 7. Exporter en image (PNG) et publier en statut WhatsApp. Résultat attendu à l'écran : l'affiche « après », dont le titre et la date se lisent en vignette.
- **Consolidation (B5)** : prédiction, avec les deux affiches imprimées en main. A : une belle photo de foule, texte posé dessus. B : un fond uni et un grand titre. Question : « Laquelle se lit le mieux en statut WhatsApp ? » Réponse : B. Beau ne veut pas dire lisible.
- **Consigne à copier** :

```text
Tu es graphiste. Voici le texte d'une affiche : [collez le texte].
Elle sera vue [en statut WhatsApp / sur Facebook], sur un petit écran.
1. Écris le message principal en 6 mots maximum.
2. Garde seulement les informations utiles : [date, lieu, contact].
3. Classe-les en trois niveaux : titre, information clé, détail.
4. Propose le texte final de l'affiche : 25 mots maximum au total.
N'ajoute aucune information qui n'est pas dans mon texte.
```

- **Exercice** : « Refaites une affiche avec les trois règles » — 1. Choisissez une affiche reçue cette semaine, ou l'une des vôtres. 2. Avec la consigne, classez son texte en trois niveaux et vérifiez chaque information. 3. Refaites-la dans Canva au bon format, en appliquant hiérarchie, contraste et format. 4. Faites le test à bout de bras et gardez l'avant et l'après. Si l'affiche n'est pas la vôtre, demandez l'accord de son auteur avant de publier l'avant/après.
- **Carte de rappel** : 1. Juger et corriger un visuel avec trois règles. 2. Hiérarchie, contraste, format : dans cet ordre. 3. Testez à bout de bras, sur téléphone. 4. Un outil par tâche : image, page, vidéo, montage.
- **Quiz** :
  1. Quelles sont les trois règles d'un visuel qui se lit ? — A) Couleur, police, logo B) Hiérarchie, contraste, format C) Photo, slogan, signature D) Titre, cadre, bordure — **Réponse : B**
  2. Votre affiche sera publiée en statut WhatsApp. Quel format choisissez-vous dès le départ ? — A) Paysage B) Bannière très large C) Vertical D) Peu importe, on recadre après — **Réponse : C**
  3. Votre texte est posé sur une photo chargée. Que faites-vous ? — A) Vous glissez un bandeau uni derrière le texte B) Vous écrivez plus petit C) Vous ajoutez une troisième couleur D) Rien, la photo est belle — **Réponse : A**
  4. Comment vérifier qu'un visuel se lit sur téléphone ? — A) Le regarder en grand sur un ordinateur B) Demander à l'IA s'il est beau C) Compter les couleurs D) Le regarder en petit, téléphone à bout de bras — **Réponse : D**
  5. Vous devez placer un titre, une date et un logo sur une affiche. Quel outil convient ? — A) Un générateur de vidéo B) Une application de montage C) Un outil de mise en page comme Canva D) Un générateur d'image, à qui l'on dicte le texte — **Réponse : C**
- **Marques citées** : Gemini et son outil d'image surnommé « Nano Banana » (Google), Veo (Google), Canva, CapCut, WhatsApp, Facebook, LinkedIn, Instagram (si le nom du modèle Canva est visible)

#### Script

Durée estimée : 6:00 · Mots dits : 707

**[B1 — Accroche · 0:00–0:24]**

**[E · SITUATION]** « Niamey, un vendredi soir » — VO : Hadiza publie l'affiche du forum emploi de son association. Première réponse : « C'est quand ? »

**[F · CAM A]** À la fin de cette leçon, vous saurez juger et corriger un visuel avec trois règles. La date était pourtant sur l'affiche. Personne ne l'a vue. Hadiza étudie la communication, et elle veut en faire son métier.

[PAUSE 1 s]

**[B2 — Cadrage · 0:24–1:08]**

**[A · ÉCRAN]** Voici son affiche. Six polices, un texte serré, une photo sombre. Tout y est, mais rien ne ressort.

**[F · CAM A]** On entend souvent : « Avec l'IA, tout le monde fait de belles images. » Et donc : « Ce métier ne vaut plus rien. » C'est un malentendu. L'IA fabrique une image en quelques secondes. Mais elle ne choisit pas le message. Elle ne sait pas sur quel écran votre affiche sera vue. Elle ne vérifie pas que la date se lit. Ce jugement, c'est votre travail. Et c'est lui que le client paie.

[PAUSE 1 s]

**[B3 — Notion · 1:08–3:18]**

**[C · SCHÉMA]** « Règle 1 · La hiérarchie » « Titre · Information clé · Détail » — VO : Première règle : la hiérarchie. Un visuel porte un seul message. Le regard lit d'abord le plus gros, puis il descend. Prévoyez donc trois niveaux : le titre, l'information clé, le détail. Pour Hadiza : « Forum emploi jeunes », puis la date et le lieu, puis le reste, en petit. Autrement dit, vous décidez ce qu'on lit en premier, avant de choisir une couleur.

**[B · CARTE]** « Règle 2 · Le contraste » « Foncé sur clair, ou clair sur foncé » — VO : Deuxième règle : le contraste.

**[F · CAM B]** Votre affiche sera vue sur un petit écran, parfois en plein soleil. Mettez un texte foncé sur un fond clair, ou l'inverse. Jamais de petit texte posé sur une photo chargée. Si la photo compte, glissez un bandeau uni derrière le texte. En clair : le texte doit se détacher, même de loin.

**[C · SCHÉMA]** « Règle 3 · Le format » « 1:1 · 4:5 · 9:16 · bannière » — VO : Troisième règle : le format, c'est-à-dire les proportions de l'image. Un statut WhatsApp est vertical. Une publication Facebook passe bien en carré ou en portrait. Une bannière LinkedIn est très large et peu haute. Partez du bon format dès le début. Recadrer après coup coupe souvent la date, ou un visage.

**[F · CAM A]** Ces trois règles se vérifient d'un coup d'œil. Dans ma pratique, je regarde chaque visuel en petit, téléphone à bout de bras. Si je ne lis pas le message, je recommence.

**[A · ÉCRAN]** Reste le choix des outils. Retenez quatre familles, une par tâche. Pour créer ou retoucher une image : l'outil d'image de Gemini, que le public surnomme « Nano Banana ». Pour mettre en page le texte et les images : Canva. Pour générer un court plan vidéo : Veo, l'outil vidéo de Google, souvent réservé aux versions payantes. Pour monter et sous-titrer sur téléphone : CapCut, ou une application équivalente. Nous les utiliserons tous dans ce cours. [à vérifier au moment du tournage : nom affiché de l'outil vidéo dans Gemini et accès en version gratuite]

[PAUSE 1 s]

**[B4 — Application · 3:18–4:56]**

**[G · CONSIGNE]** « Tu es graphiste. Voici le texte d'une affiche : [collez le texte]… » (texte complet de la consigne à copier) — VO : Refaisons l'affiche d'Hadiza, de bout en bout. D'abord le texte. J'ouvre Gemini et je colle cette consigne. En anglais, on dit un « prompt ». Elle demande un message court, trois niveaux, et aucune information inventée.

**[A · ÉCRAN]** Gemini propose un titre : « Forum emploi jeunes ». Puis la date et le lieu, puis l'entrée libre. Je compare chaque information avec le texte d'origine. Une IA peut se tromper de date. C'est à moi de vérifier.

**[A · ÉCRAN]** Maintenant, Canva. Je choisis un modèle vertical, au format d'un statut. Une seule police, en deux tailles. Le titre en très gros, en haut. La date et le lieu dessous, en gras. Le reste en petit, en bas.

**[A · ÉCRAN]** La photo sombre gêne la lecture. Je la remplace par un fond uni, à la couleur de l'association. Texte blanc sur fond foncé : le contraste est net.

**[A · ÉCRAN]** Le test, maintenant. Je réduis l'affichage à la taille d'une vignette WhatsApp. Puis je tiens le téléphone à bout de bras. Le titre et la date se lisent. J'exporte en image, et je publie en statut. Même contenu, même association. Seul le jugement a changé.

[PAUSE 1 s]

**[B5 — Consolidation · 4:56–5:32]**

**[F · CAM A]** [Aminou tient les deux affiches imprimées.] Deux versions de la même affiche. À gauche, une belle photo de foule, avec le texte posé dessus. À droite, un fond uni et un grand titre. Laquelle se lit le mieux en statut WhatsApp ?

[SILENCE 2 s]

**[F · CAM A]** La version de droite. La photo de gauche est belle, mais le texte s'y perd. Beau ne veut pas dire lisible. Un client veut d'abord qu'on lise son message. La beauté vient ensuite.

[PAUSE 1 s]

**[B6 — Clôture · 5:32–6:00]**

**[B · CARTE DE RAPPEL]** « 1. Juger et corriger un visuel avec trois règles » « 2. Hiérarchie, contraste, format : dans cet ordre » « 3. Testez à bout de bras, sur téléphone » « 4. Un outil par tâche : image, page, vidéo, montage » — VO : Retenez trois règles : hiérarchie, contraste, format. Testez toujours sur téléphone, à bout de bras. Et choisissez un outil par tâche.

**[F · CAM A]** Hadiza a refait son affiche. Cette fois, personne n'a demandé la date. Elle garde l'avant et l'après : c'est la première pièce de son portfolio. À vous, maintenant. Refaites une affiche avec les trois règles.

#### Liste des plans

| # | Type | Cadre / source | Contenu | Durée | Notes |
|---|---|---|---|---|---|
| 1 | E | illustration à plat (Claude) | Niamey le soir, Hadiza publie l'affiche depuis son téléphone | 6 s | carton « Niamey, un vendredi soir » ; pas de visage photoréaliste |
| 2 | F | CAM A | Promesse, puis l'enjeu | 18 s | promesse dite avant 0:12 |
| 3 | A | téléphone, WhatsApp (compte de démo) | Affiche « avant » en statut, réponse « C'est quand ? » | 9 s | contacts fictifs ; cercle + cadre sur la date noyée |
| 4 | F | CAM A | Le malentendu démonté | 34 s | coupe possible sur insert « affiches imprimées » |
| 5 | C | schéma (Claude) | Hiérarchie : trois niveaux dessinés sur l'affiche « avant » | 34 s | flèche du regard, du plus gros au plus petit |
| 6 | B | carte | « Règle 2 · Le contraste » | 3 s | — |
| 7 | F | CAM B | Le contraste, le bandeau uni | 24 s | second angle |
| 8 | C | schéma (Claude) | Les formats 1:1, 4:5, 9:16, bannière, posés sur un même visuel | 27 s | proportions exactes, sans pixels dans la voix |
| 9 | F | CAM A | Le test à bout de bras, pratique d'Aminou | 14 s | insert possible : bras tendu, téléphone |
| 10 | A | téléphone | Écrans d'accueil de Gemini (création d'image), Canva, outil vidéo de Gemini, CapCut | 28 s | un écran par famille ; [à vérifier au moment du tournage : accès vidéo gratuit ou payant] |
| 11 | G | carte de consigne | La consigne de la leçon, texte complet | 18 s | fond clair, lisible pour recopier |
| 12 | A | téléphone, Gemini puis Canva | Réponse de Gemini vérifiée ; mise en page ; fond uni ; vignette ; export ; statut publié | 80 s | une annotation à la fois ; zoom de 6 pour cent au plus |
| 13 | F | CAM A | Prédiction avec les deux affiches imprimées, silence, réponse | 35 s | A à gauche de l'image et B à droite, vu du spectateur |
| 14 | B | carte de rappel | Les quatre points | 14 s | points révélés au rythme de la voix |
| 15 | F | CAM A | Le cas d'Hadiza se referme ; titre de l'exercice | 16 s | dernière phrase = titre de l'exercice |

#### Montage idéal

| Temps | Timecode cible | Image principale | Habillage (motion graphics) | Texte à l'écran | Son | Transition |
|---|---|---|---|---|---|---|
| B1 | 0:00–0:24 | Illustration E, puis CAM A | Carton de lieu ; bulle de message « C'est quand ? » | « Niamey, un vendredi soir » ; « C'est quand ? » | voix + ambiance de rue légère sous E | coupe |
| B2 | 0:24–1:08 | Capture de l'affiche « avant », puis CAM A | Cercle et cadre sur la date noyée | « Le client paie le jugement » (en bas, 3 s) | voix seule | coupe |
| B3 | 1:08–3:18 | Schémas hiérarchie et formats, CAM B, CAM A, captures des quatre outils | Surtitre « Règle 1/2/3 » ; flèche de lecture ; gabarits de format superposés ; quatre vignettes d'outils | Titres des règles ; noms des quatre familles d'outils | voix seule | coupe ; glissement court entre deux règles |
| B4 | 3:18–4:56 | Carte de consigne, puis captures Gemini et Canva | Une annotation à la fois : cadre sur le titre, coche sur la date, cadre sur la vignette | « Une police, deux tailles » ; « Test : à bout de bras » | voix seule | coupe |
| B5 | 4:56–5:32 | CAM A, Aminou tient les deux affiches | Lettres A et B incrustées sur les affiches ; coche sur B et croix sur A après la réponse | « Laquelle se lit le mieux ? » ; « Beau ≠ lisible » | voix ; silence de 2 s gardé | coupe |
| B6 | 5:32–6:00 | Carte de rappel, puis CAM A | Points révélés au rythme de la voix | Les quatre points ; titre de l'exercice en bas | voix seule | coupe, puis carte de clôture |

**Notes de montage** : un changement visuel toutes les 4 à 8 secondes, sans agitation. Couper les hésitations et les redites, garder une respiration avant chaque règle. Dans les captures, zooms lents de 6 pour cent au plus, une annotation à la fois (au moins 2,5 s), toujours doublée d'une forme. Quand la capture du téléphone occupe le bas de l'écran, remonter les sous-titres au-dessus de la capture. Le plan 12 est long : alterner capture plein cadre et capture recadrée sur la zone utile. Plans de couverture disponibles : affiches « avant » et « après » imprimées, mains sur Canva, téléphone à bout de bras, écran WhatsApp en vignette.

#### Versions EN / HA / DJE

- **À re-filmer dans la langue** (environ 34 s, l'owner face caméra) : B1 (plan 2) — « À la fin de cette leçon, vous saurez juger et corriger un visuel avec trois règles. La date était pourtant sur l'affiche. Personne ne l'a vue. Hadiza étudie la communication, et elle veut en faire son métier. » ; B6 (plan 15) — « Hadiza a refait son affiche. Cette fois, personne n'a demandé la date. Elle garde l'avant et l'après : c'est la première pièce de son portfolio. À vous, maintenant. Refaites une affiche avec les trois règles. »
- **Doublé en voix clonée** : plan 4 (malentendu, 34 s) → capture de l'affiche « avant » prolongée, puis insert des affiches imprimées et carte « Le client paie le jugement » ; plan 7 (contraste, 24 s) → insert du téléphone au soleil puis carte « Foncé sur clair » ; plan 9 (bout de bras, 14 s) → insert du bras tendu avec le téléphone ; plan 13 (prédiction, 35 s) → insert des deux affiches posées sur la table (B-cam, sans visage), lettres A/B, coche et croix.
- **Notes d'adaptation** : en EN, supprimer la phrase de glose sur le mot anglais (c'est le terme courant en anglais) ; « statut WhatsApp » = « WhatsApp Status » (en HA et DJE, garder le mot courant « status »). « À bout de bras » = « at arm's length » ; en HA et DJE, montrer le geste plutôt que traduire l'image. « Nano Banana » reste tel quel, avec l'explication « surnom ». Le terme qui remplace « consigne » en HA et DJE est à valider avec le traducteur. L'affiche de démo reste en français à l'écran (c'est le visuel du cas) : ajouter une traduction en sous-titre. Les cartes et les schémas, eux, sont traduits.

### Leçon 2 — Générer et retoucher une image avec l'IA (`vv2`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez écrire une consigne visuelle et retoucher l'image obtenue. »
- **Cas réel (B1 → B6)** : Hadiza décroche son premier client payant (cas fictif) : une association de jeunes de Niamey qui organise une journée de plantation d'arbres au bord du fleuve. Aucune photo n'existe encore. Sa première demande, « Fais une belle affiche pour notre journée de reboisement », donne une forêt tropicale, des tenues et des paysages étrangers au Niger, et un titre qu'elle n'a pas choisi. Enjeu : livrer une affiche juste, sans tromper le public. En B6, elle livre une illustration signalée « créée avec l'IA », que l'association publie telle quelle : deuxième pièce de son portfolio.
- **Unités de notion (B3)** : 1. Six éléments d'une consigne visuelle — qui, quoi, où, style, cadrage, format : chaque élément oublié, l'outil le choisit à votre place. · 2. Une retouche à la fois — une seule modification par message, suivie de « Garde tout le reste identique ». · 3. Le texte se pose dans Canva — date, nom et accents restent exacts et modifiables, hors de l'image générée. · 4. Droits, visages, mention de l'IA — ni logo d'autrui, ni « à la manière de » un artiste vivant, ni photo déposée sans accord ; mention et marques de l'outil conservées.
- **Démo (B4)** : Gemini (compte Google de démo, téléphone) puis Canva (compte de démo). 1. Ouvrir Gemini et choisir la création d'images ([à vérifier au moment du tournage : libellé exact du bouton]). 2. Coller la consigne en six éléments. 3. Contrôler le résultat : tenues, fleuve, arbres, mains. 4. Retouche 1 : « Remplace les grands arbres par de jeunes plants. Garde tout le reste identique. » 5. Retouche 2 : « Laisse plus d'espace vide en haut, pour le titre. » 6. Télécharger l'image. 7. Canva : modèle portrait 4:5, déposer l'image, poser titre, date et lieu avec les trois règles de la leçon 1, ajouter « Illustration créée avec l'IA », exporter. 8. Montrer l'entrée de la génération d'images de Canva, comme alternative. Résultat attendu à l'écran : l'affiche finale de la journée de plantation, marque visible de Gemini conservée si elle existe.
- **Consolidation (B5)** : prédiction. Le client demande « une vraie photo de la journée, avec la foule », alors qu'elle n'a pas encore eu lieu. Que répondre ? Réponse : une illustration, pas une fausse photo ; une photo réaliste d'un événement qui n'a pas eu lieu trompe le public. Le jour venu, de vraies photos, avec l'accord des participants.
- **Consigne à copier** :

```text
Crée une image au format [portrait 4:5].
Qui : [des jeunes femmes et des jeunes hommes nigériens, 20 à 25 ans, en tenue de tous les jours].
Quoi : [ils plantent de jeunes arbres et les arrosent].
Où : [au bord du fleuve Niger, sol sableux, quelques acacias, ciel dégagé].
Style : [illustration à plat, couleurs chaudes, lumière de fin d'après-midi].
Cadrage : [plan large ; laisse un espace vide en haut pour un titre].
N'ajoute aucun texte, aucun logo, aucune marque.

Retouche (une seule par message) :
Remplace [les grands arbres] par [de jeunes plants]. Garde tout le reste identique.
```

- **Exercice** : « Créez une illustration en six éléments » — 1. Partez d'un vrai besoin : une association, un club, un événement de votre école ou de votre quartier. 2. Écrivez la consigne en six éléments, sans texte ni logo dans l'image. 3. Faites au moins deux retouches, une à la fois, en gardant le reste identique. 4. Posez le texte dans Canva et ajoutez la mention « Illustration créée avec l'IA ».
- **Carte de rappel** : 1. Écrire une consigne visuelle et retoucher l'image obtenue. 2. Qui, quoi, où, style, cadrage, format. 3. Une retouche à la fois ; le texte dans Canva. 4. Ni logo d'autrui, ni visage sans accord, ni fausse photo.
- **Quiz** :
  1. Pourquoi la première image d'Hadiza était-elle ratée ? — A) L'outil était en panne B) Sa consigne était vague C) Il fallait une version payante D) Son téléphone était trop ancien — **Réponse : B**
  2. Lequel de ces éléments fait partie des six éléments d'une consigne visuelle ? — A) Le cadrage B) Le nom du client C) Le nom de l'outil D) L'heure de publication — **Réponse : A**
  3. L'image est presque bonne, mais les arbres sont trop grands. Que faites-vous ? — A) Vous relancez une image entièrement nouvelle B) Vous demandez cinq changements à la fois C) Vous l'acceptez telle quelle D) Vous demandez ce seul changement, en gardant le reste identique — **Réponse : D**
  4. Où placer la date et le lieu de l'événement ? — A) Dans la consigne, pour que l'IA les écrive dans l'image B) Nulle part, l'image suffit C) Dans Canva, en texte modifiable D) Dans le nom du fichier — **Réponse : C**
  5. Laquelle de ces pratiques est acceptable pour l'affiche d'un client ? — A) Ajouter le logo d'une marque connue sans accord B) Déposer dans Gemini la photo d'une amie sans lui demander C) Une illustration signalée « créée avec l'IA » D) Une photo réaliste générée d'un événement qui n'a pas eu lieu — **Réponse : C**
- **Marques citées** : Gemini et son outil d'image surnommé « Nano Banana » (Google), SynthID (Google), Canva

#### Script

Durée estimée : 6:00 · Mots dits : 708

**[B1 — Accroche · 0:00–0:27]**

**[E · SITUATION]** « Niamey, un premier client » — VO : Une association demande à Hadiza une affiche pour sa journée de plantation d'arbres.

**[F · CAM A]** À la fin de cette leçon, vous saurez écrire une consigne visuelle et retoucher l'image obtenue. Dans la leçon un, vous avez appris à juger un visuel. Maintenant, il faut le fabriquer. Hadiza tape : « Fais une belle affiche pour notre journée de reboisement. »

[PAUSE 1 s]

**[B2 — Cadrage · 0:27–1:10]**

**[A · ÉCRAN]** Voici ce qu'elle obtient. Une forêt tropicale. Des tenues et des paysages qui ne ressemblent pas au Niger. Et un titre qu'elle n'a pas choisi. [à vérifier au moment du tournage : décrire le résultat réellement obtenu]

**[F · CAM A]** Elle se dit : « L'IA, c'est une loterie. Je relance jusqu'à ce que ça tombe bien. » C'est un malentendu. L'image suit la consigne, c'est-à-dire la description que vous donnez à l'outil. Une consigne vague donne une image moyenne, qui ressemble à tout. Une consigne précise donne l'image dont vous avez besoin. Et si un détail cloche, on ne relance pas tout. On corrige.

[PAUSE 1 s]

**[B3 — Notion · 1:10–3:18]**

**[C · SCHÉMA]** « Six éléments » « Qui · Quoi · Où · Style · Cadrage · Format » — VO : Première règle : une consigne visuelle a six éléments. Qui est dans l'image. Ce qu'il fait. Où cela se passe. Le style : photo, illustration, dessin. Le cadrage : de près ou de loin. Et le format. Pour Hadiza : des jeunes du quartier plantent des arbres, au bord du fleuve. Illustration, plan large, format portrait. Dit autrement : chaque élément que vous oubliez, l'outil le choisit à votre place. Souvent à côté.

**[B · CARTE]** « Une retouche à la fois » « … et gardez le reste identique » — VO : Deuxième règle : une retouche à la fois.

**[F · CAM B]** L'outil d'image de Gemini, surnommé « Nano Banana », sait modifier une image existante. Demandez une seule modification par message. Puis ajoutez : « Garde tout le reste identique. » Cinq changements d'un coup, et vous perdez ce qui était réussi. Une retouche, un contrôle, puis la suivante. Dans ma pratique, je garde mes consignes réussies dans une note, pour les réutiliser.

**[B · CARTE]** « Le texte se pose dans Canva » — VO : Troisième règle : le texte se pose dans Canva, pas dans l'image générée.

**[A · ÉCRAN]** Regardez : dans Canva, je touche la date et je la corrige. Les outils d'image écrivent de mieux en mieux. Mais une date, un nom, un accent doivent être exacts. Dans une image générée, chaque correction peut abîmer le reste. Donc l'image d'un côté, le texte de l'autre.

**[C · SCHÉMA]** « Ni logo d'autrui · Ni visage sans accord · IA signalée » — VO : Quatrième règle : respectez les droits et les personnes. Pas de logo ni de marque qui n'appartiennent pas à votre client. Pas d'image « à la manière de » un artiste vivant : c'est son travail, pas le vôtre. Pas de photo d'une personne déposée sans son accord. Et signalez l'IA : « Illustration créée avec l'IA ». En version gratuite, Gemini ajoute aussi une marque visible. Toutes ses images portent une marque invisible, appelée SynthID. Ne les effacez pas. [à vérifier au moment du tournage : présence de la marque visible selon la version]

[PAUSE 1 s]

**[B4 — Application · 3:18–4:54]**

**[G · CONSIGNE]** « Crée une image au format portrait 4:5. Qui : … » (texte complet de la consigne à copier) — VO : Reprenons la commande d'Hadiza, de la consigne à l'affiche. Voici la consigne en six éléments. Notez la dernière ligne : aucun texte, aucun logo.

**[A · ÉCRAN]** J'ouvre Gemini et je choisis la création d'images. Je colle la consigne. Voici le résultat. Je contrôle les tenues, le fleuve, les arbres. Et les mains : l'IA s'y trompe encore. [à vérifier au moment du tournage : libellé du bouton de création d'images]

**[A · ÉCRAN]** Les arbres sont trop grands pour une plantation. Première retouche : « Remplace les grands arbres par de jeunes plants. Garde tout le reste identique. » Le reste n'a pas bougé.

**[A · ÉCRAN]** Deuxième retouche : « Laisse plus d'espace vide en haut, pour le titre. » C'est bon. Je télécharge l'image.

**[A · ÉCRAN]** Dans Canva, j'ouvre un modèle au format portrait et je dépose l'image. J'ajoute le titre, la date et le lieu, avec les trois règles de la leçon un. En bas, en petit : « Illustration créée avec l'IA ». J'exporte. Je vérifie l'affiche sur mon téléphone, en petit, à bout de bras. Le titre se lit.

**[A · ÉCRAN]** Vous préférez rester dans Canva ? Ses fonctions d'IA génèrent aussi des images, selon votre version. La méthode reste la même : six éléments, une retouche à la fois. [à vérifier au moment du tournage : nom et accès gratuit de la génération d'images dans Canva]

[PAUSE 1 s]

**[B5 — Consolidation · 4:54–5:28]**

**[F · CAM A]** Une question. Le client vous dit : « Faites plutôt une vraie photo de la journée, avec la foule. On l'annonce comme ça. » Mais la journée n'a pas encore eu lieu. Que répondez-vous ?

[SILENCE 2 s]

**[F · CAM A]** Une illustration, pas une fausse photo. Une photo réaliste d'un événement qui n'a pas eu lieu trompe le public. Le jour venu, prenez de vraies photos, avec l'accord des participants. Elles serviront pour la suite.

[PAUSE 1 s]

**[B6 — Clôture · 5:28–6:00]**

**[B · CARTE DE RAPPEL]** « 1. Écrire une consigne visuelle et retoucher l'image obtenue » « 2. Qui, quoi, où, style, cadrage, format » « 3. Une retouche à la fois ; le texte dans Canva » « 4. Ni logo d'autrui, ni visage sans accord, ni fausse photo » — VO : Retenez les six éléments. Une retouche à la fois, et le texte dans Canva. Pas de logo d'autrui, pas de visage sans accord, pas de fausse photo.

**[F · CAM A]** Hadiza a livré son affiche, avec la mention « Illustration créée avec l'IA ». L'association l'a publiée telle quelle. C'est sa deuxième pièce de portfolio. À vous. Créez une illustration en six éléments.

#### Liste des plans

| # | Type | Cadre / source | Contenu | Durée | Notes |
|---|---|---|---|---|---|
| 1 | E | illustration à plat (Claude) | Bord du fleuve à Niamey, l'association et Hadiza | 6 s | carton « Niamey, un premier client » |
| 2 | F | CAM A | Promesse, rappel de la leçon 1, la consigne vague | 21 s | promesse dite avant 0:12 |
| 3 | A | téléphone, Gemini (compte de démo) | Consigne vague et image ratée | 12 s | décrire le résultat réel ; cadre sur les défauts, un à la fois |
| 4 | F | CAM A | Le malentendu de la loterie | 30 s | — |
| 5 | C | schéma (Claude) | Les six éléments, appliqués à la commande d'Hadiza | 33 s | chaque élément s'allume quand il est dit |
| 6 | B | carte | « Une retouche à la fois » | 4 s | — |
| 7 | F | CAM B | Retouche pas à pas, pratique d'Aminou | 27 s | second angle |
| 8 | B | carte | « Le texte se pose dans Canva » | 6 s | — |
| 9 | A | téléphone, Canva | Correction d'une date dans une zone de texte | 23 s | cadre sur la zone de texte |
| 10 | C | schéma (Claude) | Droits, visages, mention de l'IA, marques visible et invisible | 35 s | trois icônes avec croix ou coche, jamais la seule couleur |
| 11 | G | carte de consigne | La consigne en six éléments, texte complet | 11 s | fond clair |
| 12 | A | téléphone, Gemini puis Canva | Génération, deux retouches, téléchargement, mise en page, mention IA, export, test, entrée IA de Canva | 85 s | une annotation à la fois ; zoom de 6 pour cent au plus ; [à vérifier au moment du tournage : libellés] |
| 13 | F | CAM A | Prédiction « vraie photo ? », silence, réponse | 34 s | — |
| 14 | B | carte de rappel | Les quatre points | 15 s | points révélés au rythme de la voix |
| 15 | F | CAM A | Le cas d'Hadiza se referme ; titre de l'exercice | 15 s | dernière phrase = titre de l'exercice |

#### Montage idéal

| Temps | Timecode cible | Image principale | Habillage (motion graphics) | Texte à l'écran | Son | Transition |
|---|---|---|---|---|---|---|
| B1 | 0:00–0:27 | Illustration E, puis CAM A | Carton de lieu ; la consigne vague en bulle de texte | « Niamey, un premier client » ; « Fais une belle affiche… » | voix + ambiance légère (fleuve, oiseaux) sous E | coupe |
| B2 | 0:27–1:10 | Capture de l'image ratée, puis CAM A | Cadres successifs sur les défauts | « Consigne vague = image moyenne » | voix seule | coupe |
| B3 | 1:10–3:18 | Schéma des six éléments, CAM B, capture Canva, schéma des droits | Les six mots s'allument un par un ; titres de règles en surtitre | « Qui · Quoi · Où · Style · Cadrage · Format » ; titres des règles | voix seule | coupe ; glissement court entre deux règles |
| B4 | 3:18–4:54 | Carte de consigne, puis captures Gemini et Canva | Avant/après de chaque retouche en volet vertical ; cadre sur la mention IA | « Retouche 1 » ; « Retouche 2 » ; « Illustration créée avec l'IA » | voix seule | coupe ; volet pour les avant/après |
| B5 | 4:54–5:28 | CAM A | Rien pendant la question ; carte réponse en bas après le silence | « Une vraie photo d'un événement à venir ? » ; « Illustration, pas fausse photo » | voix ; silence de 2 s gardé | coupe |
| B6 | 5:28–6:00 | Carte de rappel, puis CAM A | Points révélés au rythme de la voix | Les quatre points ; titre de l'exercice en bas | voix seule | coupe, puis carte de clôture |

**Notes de montage** : un changement visuel toutes les 4 à 8 secondes. Pour chaque retouche, montrer l'avant et l'après côte à côte au moins 3 secondes : c'est la preuve de la méthode. Couper les temps d'attente de génération (garder 1 seconde de l'animation d'attente, puis couper). Zooms sur capture de 6 pour cent au plus. Quand la capture occupe le bas de l'écran, remonter les sous-titres. Ne jamais flouter ni recadrer la marque visible de Gemini dans les images de démo : la leçon demande de la garder. Plans de couverture disponibles : mains qui tapent la consigne, image finale imprimée, téléphone posé sur la table avec l'affiche à l'écran.

#### Versions EN / HA / DJE

- **À re-filmer dans la langue** (environ 36 s, l'owner face caméra) : B1 (plan 2) — « À la fin de cette leçon, vous saurez écrire une consigne visuelle et retoucher l'image obtenue. Dans la leçon un, vous avez appris à juger un visuel. Maintenant, il faut le fabriquer. Hadiza tape : "Fais une belle affiche pour notre journée de reboisement." » ; B6 (plan 15) — « Hadiza a livré son affiche, avec la mention "Illustration créée avec l'IA". L'association l'a publiée telle quelle. C'est sa deuxième pièce de portfolio. À vous. Créez une illustration en six éléments. »
- **Doublé en voix clonée** : plan 4 (malentendu, 30 s) → l'image ratée et l'image réussie côte à côte, puis carte « Consigne vague = image moyenne » ; plan 7 (retouche, 27 s) → capture d'une retouche (avant/après) et insert des mains qui tapent ; plan 13 (prédiction, 34 s) → carte question, illustration finale avec sa mention, puis carte réponse « Illustration, pas fausse photo ».
- **Notes d'adaptation** : « nigériens » désigne le Niger : dans la version EN, la carte de consigne est traduite et dit « young people from Niger », jamais « Nigerian ». Dans les versions HA et DJE, la carte de consigne reste en français, et l'on précise à l'oral qu'on peut l'écrire en français ou en anglais [à vérifier au moment du tournage : qualité des résultats avec une consigne en haoussa]. « À la manière de » = « in the style of ». « Reboisement » = « tree planting ». « Nano Banana » et « SynthID » restent tels quels.

### Leçon 3 — Votre image pro : photo, bannière, CV (`vv3`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez créer photo, bannière et CV visuel en restant vous-même. »
- **Cas réel (B1 → B6)** : Moussa, jeune diplômé en gestion à Zinder (cas fictif), postule à une ONG. Sa photo de profil est floue, découpée dans une photo de mariage ; son CV fait trois pages, quatre couleurs, deux colonnes, avec des étoiles pour chaque compétence. Un ami lui propose une application qui le met en costume dans un grand bureau. Enjeu : le recruteur regarde son profil avant de l'appeler, puis le rencontre en entretien. En B6, Moussa garde son visage et change sa lumière ; sa bannière dit ce qu'il cherche ; son CV tient sur une page claire : même personne, profil lisible.
- **Unités de notion (B3)** : 1. La photo : vous, mieux éclairé — une vraie photo au téléphone, face à une fenêtre, visage et épaules, fond simple ; l'IA corrige ensuite la lumière ou le fond. · 2. La règle du miroir — « À l'entretien, me reconnaîtra-t-on ? » ; visage, âge, corps et teint ne se retouchent pas. · 3. La bannière : une phrase, à droite — l'image large du profil LinkedIn, dont la photo masque la partie gauche ; une seule phrase : ce que vous faites ou cherchez. · 4. Le CV : clair et lisible par logiciel — une colonne, des titres clairs, du vrai texte, pas de jauges ; le test du copier-coller.
- **Démo (B4)** : Aminou sur lui-même (on ne retouche pas le visage d'un autre sans son accord). Téléphone, comptes de démo pour Gemini et Canva ; profil LinkedIn d'Aminou ou profil de démo, selon son choix. 1. Photo réelle prise le matin face à une fenêtre (par un tiers, à hauteur des yeux). 2. Gemini : déposer la photo avec la consigne ci-dessous. 3. Comparer côte à côte l'original et le résultat (règle du miroir). 4. Canva : modèle « Bannière LinkedIn » ([à vérifier au moment du tournage : nom du modèle]) ; fond uni ; une phrase à droite. 5. Exporter, remplacer l'image de fond du profil LinkedIn, vérifier sur téléphone que la photo ne masque pas le texte ([à vérifier au moment du tournage : zone masquée sur ordinateur et sur téléphone]). 6. CV d'une colonne exporté en PDF ; sélectionner tout le texte, le coller dans une note ; il arrive dans l'ordre. Résultat attendu à l'écran : photo retouchée fidèle, bannière en place, texte du CV collé dans l'ordre. Les coordonnées personnelles du CV sont floutées.
- **Consolidation (B5)** : prédiction avec trois tirages papier de la photo d'Aminou. A : l'originale. B : lumière et fond corrigés. C : peau lissée, visage rajeuni, costume ajouté. « Laquelle puis-je mettre sur LinkedIn ? » Réponse : A ou B ; la C n'est plus lui, et un recruteur se demanderait ce qui a été retouché d'autre.
- **Consigne à copier** :

```text
Voici ma photo. Améliore seulement la lumière et l'arrière-plan.
Arrière-plan : [mur uni gris clair / bureau flou].
Lumière : douce, naturelle, venant de face.
Ne modifie pas mon visage, mon teint, ma coiffure, mes vêtements ni ma silhouette.
Cadrage carré : visage et épaules, centrés.
```

- **Exercice** : « Refaites votre kit : photo, bannière, CV » — 1. Faites-vous prendre en photo face à une fenêtre, à hauteur des yeux. 2. Retouchez seulement la lumière et le fond avec la consigne, puis appliquez la règle du miroir. 3. Créez votre bannière dans le modèle LinkedIn de Canva : une phrase, à droite. 4. Mettez votre CV sur une colonne, exportez-le en PDF et faites le test du copier-coller. Déposez uniquement votre propre photo, jamais celle d'un autre.
- **Carte de rappel** : 1. Créer photo, bannière et CV visuel en restant vous-même. 2. Photo : vraie, nette, lumière de fenêtre. 3. Bannière : une phrase, texte à droite. 4. CV : une colonne, test du copier-coller.
- **Quiz** :
  1. Que signifie « rester vous-même » sur votre photo de profil ? — A) Ne jamais retoucher la photo B) Corriger la lumière et le fond, sans changer votre visage C) Utiliser une photo d'il y a dix ans D) Porter un costume ajouté par l'IA — **Réponse : B**
  2. Où vous placer pour une photo de profil prise au téléphone ? — A) Dos à une fenêtre B) Sous une ampoule, le soir C) Face à une fenêtre D) En plein soleil de midi — **Réponse : C**
  3. Qu'est-ce que la règle du miroir ? — A) Se photographier dans un miroir B) Inverser l'image avant de la publier C) Vérifier que le fond est symétrique D) Vérifier que le recruteur vous reconnaîtra à l'entretien — **Réponse : D**
  4. Sur la bannière LinkedIn, où placer votre phrase ? — A) À droite, loin de la photo de profil B) En bas à gauche C) Partout, en petit D) Nulle part, une image suffit — **Réponse : A**
  5. Comment vérifier qu'un logiciel de tri peut lire votre CV ? — A) Ajouter des étoiles pour chaque compétence B) L'exporter en PDF, copier tout le texte et le coller dans une note C) Enregistrer le CV en image D) Le mettre sur trois colonnes — **Réponse : B**
- **Marques citées** : Gemini (Google), Canva, LinkedIn

#### Script

Durée estimée : 6:00 · Mots dits : 703

**[B1 — Accroche · 0:00–0:31]**

**[E · SITUATION]** « Zinder, un soir de candidatures » — VO : Moussa, jeune diplômé à Zinder, postule à une ONG avec une photo floue, découpée d'un mariage.

**[F · CAM A]** À la fin de cette leçon, vous saurez créer photo, bannière et CV visuel en restant vous-même. Dans la leçon deux, vous avez appris à retoucher une image, une demande à la fois. Un ami propose à Moussa une application qui le met en costume, dans un grand bureau.

[PAUSE 1 s]

**[B2 — Cadrage · 0:31–1:11]**

**[A · ÉCRAN]** Voici le CV de Moussa. Trois pages, quatre couleurs, deux colonnes, des étoiles pour chaque compétence. Et en haut, la photo floue.

**[F · CAM A]** Son ami lui dit : « Une photo pro, c'est une photo parfaite. Peau lisse, costume, bureau de luxe. L'IA te la fait. » C'est un malentendu. Une photo pro est nette, bien éclairée, et l'on vous y reconnaît. Le recruteur vous rencontrera en entretien. Il doit voir la même personne. L'IA peut améliorer l'image. Elle ne doit jamais changer la personne.

[PAUSE 1 s]

**[B3 — Notion · 1:11–3:20]**

**[B · CARTE]** « Pièce 1 · La photo : vous, mieux éclairé » — VO : Première pièce : la photo.

**[F · CAM B]** Partez d'une vraie photo, prise au téléphone. Placez-vous face à une fenêtre, jamais dos à elle. Cadrez le visage et les épaules, sur un fond simple. Demandez à quelqu'un de prendre la photo, à hauteur des yeux. Évitez le flash et le contre-jour. Prenez dix photos, gardez la plus naturelle. Ensuite seulement, l'IA peut corriger la lumière ou calmer le fond.

**[C · SCHÉMA]** « La règle du miroir » « À l'entretien, me reconnaîtra-t-on ? » — VO : Avant de publier, appliquez la règle du miroir. Posez-vous une question : à l'entretien, le recruteur me reconnaîtra-t-il ? Si la réponse est non, la retouche va trop loin. Votre visage, votre âge, votre corps, votre teint ne se retouchent pas. Les filtres « beauté » des applications font la même erreur, sans vous prévenir. En deux mots : vous, en mieux éclairé.

**[C · SCHÉMA]** « Pièce 2 · La bannière » « 1584 × 396 px · texte à droite » — VO : Deuxième pièce : la bannière, cette image large en haut de votre profil LinkedIn. Votre photo de profil en masque la partie gauche. Placez donc votre texte à droite. Une seule phrase : ce que vous faites, ou ce que vous cherchez. Par exemple : « Gestion et suivi de projets · Zinder · Disponible ». Pas de liste de vingt mots-clés : une phrase se lit, une liste se saute. [à vérifier au moment du tournage : zone masquée par la photo, sur ordinateur et sur téléphone]

**[B · CARTE]** « Pièce 3 · Le CV : clair, et lisible par un logiciel » — VO : Troisième pièce : le CV visuel.

**[A · ÉCRAN]** Certaines organisations trient les candidatures avec un logiciel. Ces logiciels peuvent mal lire les colonnes, les images et les jauges. Gardez donc une seule colonne, des titres clairs, du vrai texte. Oubliez les étoiles « anglais : quatre sur cinq ». Elles ne prouvent rien. Le beau, ici, c'est la clarté : une page ou deux, aérées. Gardez votre version visuelle pour un envoi direct, par e-mail ou en main propre. Et une version simple pour les plateformes en ligne.

[PAUSE 1 s]

**[B4 — Application · 3:20–4:50]**

**[G · CONSIGNE]** « Voici ma photo. Améliore seulement la lumière et l'arrière-plan… » (texte complet de la consigne à copier) — VO : Je vais le faire sur moi. On ne retouche pas le visage de quelqu'un sans son accord. Voici ma consigne. Elle dit ce qu'il faut améliorer. Et surtout, ce qu'il ne faut pas toucher.

**[A · ÉCRAN]** Voici ma photo, prise ce matin face à la fenêtre. Je la dépose dans Gemini, avec la consigne. Voici le résultat. Je compare côte à côte. Même visage, même teint, même chemise. Le fond est plus calme. La règle du miroir est respectée.

**[A · ÉCRAN]** Maintenant, la bannière. Dans Canva, je prends le modèle « Bannière LinkedIn » : la taille est déjà la bonne. Un fond uni. À droite, une phrase : « Consultant en IA et Innovation ». [à vérifier au moment du tournage : nom du modèle et phrase validée par l'owner]

**[A · ÉCRAN]** J'exporte, puis sur LinkedIn, je remplace l'image de fond. Je vérifie sur téléphone : ma photo ne masque pas le texte.

**[A · ÉCRAN]** Dernier test, le CV. Je l'exporte en PDF. Je sélectionne tout le texte, et je le colle dans une note. S'il arrive dans l'ordre, un logiciel peut le lire. C'est le test du copier-coller.

[PAUSE 1 s]

**[B5 — Consolidation · 4:50–5:24]**

**[F · CAM A]** [Aminou tient trois tirages de sa photo, marqués A, B et C.] Trois versions de ma photo. A : l'originale. B : la lumière et le fond corrigés. C : peau lissée, visage rajeuni, costume ajouté. Laquelle puis-je mettre sur LinkedIn ?

[SILENCE 2 s]

**[F · CAM A]** A ou B. La C, ce n'est plus moi. Un recruteur qui me rencontre verrait la différence. Et il se demanderait ce que j'ai retouché d'autre, dans mon CV. Une retouche excessive ne vous aide pas : elle vous expose.

[PAUSE 1 s]

**[B6 — Clôture · 5:24–6:00]**

**[B · CARTE DE RAPPEL]** « 1. Créer photo, bannière et CV visuel en restant vous-même » « 2. Photo : vraie, nette, lumière de fenêtre » « 3. Bannière : une phrase, texte à droite » « 4. CV : une colonne, test du copier-coller » — VO : Retenez : une vraie photo, face à la fenêtre. Une bannière avec une phrase, à droite. Un CV sur une colonne, qui passe le test du copier-coller.

**[F · CAM A]** Moussa a gardé son visage, et changé sa lumière. Sa bannière dit ce qu'il cherche. Son CV tient sur une page claire. Même personne, même parcours, mais un profil qui parle. À vous. Refaites votre kit : photo, bannière, CV.

#### Liste des plans

| # | Type | Cadre / source | Contenu | Durée | Notes |
|---|---|---|---|---|---|
| 1 | E | illustration à plat (Claude) | Zinder le soir, Moussa devant son téléphone, une liste de candidatures | 8 s | carton « Zinder, un soir de candidatures » |
| 2 | F | CAM A | Promesse, rappel de la leçon 2, la proposition de l'ami | 23 s | promesse dite avant 0:12 |
| 3 | A | Canva (compte de démo) | Le CV « avant » de Moussa : trois pages, deux colonnes, étoiles | 11 s | document fictif ; silhouette à la place de la photo |
| 4 | F | CAM A | Le malentendu de la « photo parfaite » | 29 s | — |
| 5 | B | carte | « Pièce 1 · La photo : vous, mieux éclairé » | 3 s | — |
| 6 | F | CAM B | Prendre la vraie photo : fenêtre, cadrage, dix essais | 29 s | second angle |
| 7 | C | schéma (Claude) | La règle du miroir : « améliorer l'image » contre « changer la personne » | 28 s | deux colonnes, coche et croix |
| 8 | C | schéma (Claude) | Anatomie de la bannière : zone masquée par la photo, zone du texte | 30 s | « 1584 × 396 px » à l'écran ; [à vérifier au moment du tournage : zone masquée] |
| 9 | B | carte | « Pièce 3 · Le CV : clair, et lisible par un logiciel » | 3 s | — |
| 10 | A | Canva | CV « avant » puis « après » (une colonne, titres, sans jauges) | 37 s | cadre sur les colonnes, croix sur les étoiles |
| 11 | G | carte de consigne | La consigne de retouche, texte complet | 16 s | fond clair |
| 12 | A | téléphone : Gemini, Canva, LinkedIn, lecteur PDF, bloc-notes | Photo retouchée et comparée, bannière créée et posée, test du copier-coller | 73 s | coordonnées floutées ; une annotation à la fois |
| 13 | F | CAM A | Prédiction avec trois tirages A, B, C ; silence ; réponse | 34 s | tirages papier format A5 tenus face caméra |
| 14 | B | carte de rappel | Les quatre points | 15 s | points révélés au rythme de la voix |
| 15 | F | CAM A | Le cas de Moussa se referme ; titre de l'exercice | 19 s | dernière phrase = titre de l'exercice |

#### Montage idéal

| Temps | Timecode cible | Image principale | Habillage (motion graphics) | Texte à l'écran | Son | Transition |
|---|---|---|---|---|---|---|
| B1 | 0:00–0:31 | Illustration E, puis CAM A | Carton de lieu | « Zinder, un soir de candidatures » | voix + ambiance légère sous E | coupe |
| B2 | 0:31–1:11 | Capture du CV « avant », puis CAM A | Cadres sur les colonnes et les étoiles | « Améliorer l'image ≠ changer la personne » | voix seule | coupe |
| B3 | 1:11–3:20 | Cartes des trois pièces, CAM B, schémas miroir et bannière, capture CV | Surtitre « Pièce 1/2/3 » ; zone masquée de la bannière en hachures | « La règle du miroir » ; « 1584 × 396 px » ; « Une colonne » | voix seule | coupe ; glissement court entre deux pièces |
| B4 | 3:20–4:50 | Carte de consigne, puis captures Gemini, Canva, LinkedIn, PDF | Avant/après de la photo en volet vertical ; cadre sur la phrase de la bannière ; coche quand le texte collé est dans l'ordre | « Règle du miroir : respectée » ; « Test du copier-coller » | voix seule | coupe ; volet pour l'avant/après |
| B5 | 4:50–5:24 | CAM A, trois tirages en main | Lettres A, B, C incrustées ; coches sur A et B, croix sur C après la réponse | « Laquelle sur LinkedIn ? » | voix ; silence de 2 s gardé | coupe |
| B6 | 5:24–6:00 | Carte de rappel, puis CAM A | Points révélés au rythme de la voix | Les quatre points ; titre de l'exercice en bas | voix seule | coupe, puis carte de clôture |

**Notes de montage** : un changement visuel toutes les 4 à 8 secondes. L'avant/après de la photo d'Aminou reste au moins 4 secondes à l'écran, sans zoom sur le visage (on compare, on ne scrute pas). Ne jamais montrer la version C seule ni en grand : seulement en main, dans la prédiction, avec la croix. Flouter téléphone, e-mail et adresse sur le CV et le profil. Zooms sur capture de 6 pour cent au plus ; sous-titres remontés quand la capture occupe le bas. Plans de couverture disponibles : séance photo d'Aminou face à la fenêtre (B-cam), tirages A/B/C posés sur la table, profil LinkedIn sur téléphone, CV imprimé d'une page.

#### Versions EN / HA / DJE

- **À re-filmer dans la langue** (environ 32 s, l'owner face caméra) : B1 (plan 2, deux premières phrases) — « À la fin de cette leçon, vous saurez créer photo, bannière et CV visuel en restant vous-même. Dans la leçon deux, vous avez appris à retoucher une image, une demande à la fois. » ; B6 (plan 15) — « Moussa a gardé son visage, et changé sa lumière. Sa bannière dit ce qu'il cherche. Son CV tient sur une page claire. Même personne, même parcours, mais un profil qui parle. À vous. Refaites votre kit : photo, bannière, CV. »
- **Doublé en voix clonée** : plan 2, dernière phrase (l'ami et l'application) → illustration E prolongée, avec une bulle « costume, grand bureau » ; plan 4 (malentendu, 29 s) → capture du CV « avant », puis carte « Améliorer l'image ≠ changer la personne » ; plan 6 (photo, 29 s) → séance photo d'Aminou face à la fenêtre filmée à la B-cam ; plan 13 (prédiction, 34 s) → tirages A, B, C posés sur la table (B-cam, plan serré), lettres et coches incrustées.
- **Notes d'adaptation** : « règle du miroir » = « mirror test » en EN ; en HA et DJE, garder la question (« me reconnaîtra-t-on à l'entretien ? ») plutôt que l'image du miroir. La phrase d'exemple de la bannière reste en français ou en anglais, langue du profil LinkedIn ; en EN : « Project management & monitoring · Zinder · Available ». « Filtres beauté » = « beauty filters ». « Test du copier-coller » = « copy-paste test ». Le sujet du teint est sensible : en HA et DJE, garder une formulation neutre et respectueuse, sans exemple.

### Leçon 4 — Une vidéo courte avec l'IA, au téléphone (`vv4`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez monter au téléphone une vidéo courte et sous-titrée avec l'IA. »
- **Cas réel (B1 → B6)** : un centre de formation en informatique de Niamey (cas fictif) commande à Hadiza une vidéo verticale de 30 secondes pour annoncer ses inscriptions, à publier en statut WhatsApp et sur Facebook. Hadiza a des photos du centre et une idée : « tout générer avec l'IA ». Enjeu : une vidéo juste (dates, adresse), compréhensible sans le son, qui ne montre rien de faux. En B6, elle livre une vidéo faite de vraies images, avec un seul plan généré, signalé : troisième pièce de son portfolio.
- **Unités de notion (B3)** : 1. Le script d'abord : quatre temps — accroche, message, preuve, action ; environ 70 mots pour 30 secondes ; l'IA propose, vous retirez le faux. · 2. Du vrai d'abord : voix et images — votre voix, enregistrée au calme ; de vraies images du lieu, avec l'accord des personnes ; un plan généré seulement en transition, signalé. · 3. Monter pour le sans-son — couper au rythme de la voix ; sous-titres automatiques ou script collé ; chaque sous-titre relu.
- **Démo (B4)** : téléphone, comptes de démo. Photos et vidéos d'une vraie salle de formation, sans visage ou avec accord écrit. 1. Gemini : coller la consigne du script ; corriger les dates ; retirer la promesse « emploi garanti à la sortie ». 2. CapCut : enregistrer la voix off, deux prises ([à vérifier au moment du tournage : nom de la fonction]). 3. Gemini : générer un plan de quelques secondes avec Veo (« mains sur un clavier, salle lumineuse, mouvement lent ») ; marque visible conservée ([à vérifier au moment du tournage : nom affiché de l'outil vidéo, accès gratuit ou payant ; sinon, le montrer depuis le compte payant d'Aminou et le dire]). 4. CapCut : poser la voix, puis une photo par phrase ; le plan généré en transition, mention « Plan généré par IA ». 5. Sous-titres générés (ou script collé), relus un par un ; corriger « Nia mai » en « Niamey » (exemple à remplacer par l'erreur réellement obtenue). 6. Musique de la bibliothèque autorisée pour un usage commercial, très bas ([à vérifier au moment du tournage : mention dans l'application]). 7. Export vertical 9:16. 8. Lecture complète sans le son. Résultat attendu à l'écran : la vidéo de 30 secondes, lisible sans le son.
- **Consolidation (B5)** : prédiction. Un ami propose de faire dire au directeur du centre une phrase qu'il n'a jamais dite, avec sa voix imitée par l'IA, « pour rire ». Réponse : non ; c'est un deepfake, une fausse vidéo ou une fausse voix d'une vraie personne. Sans accord écrit, c'est non ; avec accord, on le signale. Renvoi au cours 10.
- **Consigne à copier** :

```text
Écris le script d'une vidéo verticale de 30 secondes pour [nom du client], à [ville].
Objectif : [annoncer les inscriptions de la prochaine session].
Public : [jeunes de 18 à 30 ans].
Structure : une accroche, le message, une preuve concrète, ce que le spectateur doit faire.
70 mots maximum, phrases courtes, français simple.
Utilise seulement ces informations vérifiées : [collez-les]. N'invente rien : aucun superlatif, aucune promesse.
Propose aussi un texte court à afficher pour chaque phrase.
```

- **Exercice** : « Montez une vidéo de trente secondes, sous-titrée » — 1. Choisissez un vrai besoin (un client, une association, votre propre offre) et écrivez le script avec la consigne. 2. Enregistrez votre voix dans un endroit calme. 3. Montez avec vos vraies images, avec au plus un plan généré, signalé « Plan généré par IA ». 4. Relisez chaque sous-titre, puis regardez la vidéo sans le son. Demandez l'accord de toute personne visible.
- **Carte de rappel** : 1. Monter au téléphone une vidéo courte et sous-titrée avec l'IA. 2. Script d'abord : 30 secondes, quatre temps. 3. Vraies images d'abord ; plan généré signalé. 4. Relisez chaque sous-titre, regardez sans le son.
- **Quiz** :
  1. Dans quel ordre fabrique-t-on une vidéo courte ? — A) Montage, images, script, voix B) Images générées, puis tout le reste C) Script, voix, images, montage D) Voix, montage, script, images — **Réponse : C**
  2. Combien de mots, environ, pour un script de trente secondes ? — A) Soixante-dix B) Deux cents C) Quinze D) Cinq cents — **Réponse : A**
  3. À quoi sert un plan généré par l'IA dans la vidéo du centre ? — A) À prouver que le centre est plein B) À remplacer toutes les vraies images C) À montrer le directeur D) À faire une transition, signalée « Plan généré par IA » — **Réponse : D**
  4. Les sous-titres automatiques ont écrit « Nia mai ». Que faites-vous ? — A) Rien, l'outil a sûrement raison B) Vous relisez et corrigez chaque sous-titre C) Vous supprimez tous les sous-titres D) Vous montez le volume — **Réponse : B**
  5. Faire dire au directeur, avec sa voix imitée, une phrase qu'il n'a jamais dite, c'est… — A) Acceptable si c'est pour rire B) Un simple montage C) Un deepfake : non, sans son accord écrit D) Autorisé si la vidéo est courte — **Réponse : C**
- **Marques citées** : Gemini (Google), Veo (Google), CapCut

#### Script

Durée estimée : 6:03 · Mots dits : 708

**[B1 — Accroche · 0:00–0:30]**

**[E · SITUATION]** « Niamey, un centre de formation » — VO : Un centre de formation commande à Hadiza une vidéo verticale de trente secondes.

**[F · CAM A]** À la fin de cette leçon, vous saurez monter au téléphone une vidéo courte et sous-titrée avec l'IA. Dans la leçon trois, vous avez vu la règle du miroir : l'IA améliore l'image, pas la personne. Hadiza a des photos du centre, et une idée : tout générer avec l'IA.

[PAUSE 1 s]

**[B2 — Cadrage · 0:30–1:05]**

**[A · ÉCRAN]** Regardez ce plan, généré en une phrase. Les touches du clavier ne ressemblent à rien. L'enseigne au mur est illisible. [à vérifier au moment du tournage : choisir un plan généré qui montre un défaut réel, et le décrire]

**[F · CAM A]** C'est le malentendu courant : « Une phrase, et l'IA fait tout le film. » En réalité, un générateur vidéo produit de courts plans de quelques secondes. Ils sont souvent beaux, mais ils inventent des détails. Et cette fonction est souvent réservée aux versions payantes. Une vidéo utile se construit autrement : étape par étape.

[PAUSE 1 s]

**[B3 — Notion · 1:05–3:06]**

**[C · SCHÉMA]** « Script → Voix → Images → Montage » « Accroche · Message · Preuve · Action » — VO : Quatre étapes : le script, la voix, les images, le montage. L'IA aide à chaque étape, mais elle ne fait pas le travail seule. Première étape : le script. Trente secondes, c'est environ soixante-dix mots. Quatre temps : une accroche, le message, une preuve, puis ce que le spectateur doit faire. Dit simplement : pourquoi regarder, quoi retenir, pourquoi y croire, quoi faire. Gemini peut proposer ce script. Vous le relisez, et vous retirez tout ce qui est faux.

**[B · CARTE]** « Du vrai d'abord » « Votre voix · Vos images · Un plan généré, signalé » — VO : Deuxième et troisième étapes : la voix et les images. Une règle : du vrai d'abord.

**[F · CAM B]** Enregistrez votre voix au téléphone, dans une pièce calme. Une astuce : parlez devant une armoire pleine de vêtements, ou sous un pagne. Le tissu absorbe l'écho. Une voix de synthèse est possible, mais dites-le. N'imitez jamais la voix d'une vraie personne.

**[F · CAM A]** Pour les images, filmez le vrai lieu : la salle, les écrans, les mains au clavier. Si des visages apparaissent, demandez l'accord des personnes. Pour un mineur, celui de ses parents. Un plan généré peut servir de transition, pour l'ambiance. Jamais comme preuve. Et signalez-le à l'écran : « Plan généré par IA ».

**[B · CARTE]** « Monter pour le sans-son » — VO : Quatrième étape : le montage.

**[A · ÉCRAN]** Je monte sur téléphone, avec CapCut ; une application équivalente fait l'affaire. On coupe au rythme de la voix. Coupez les silences et les hésitations : la vidéo doit avancer. Puis les sous-titres : automatiques si votre version les propose, sinon vous collez votre script. Prévoyez qu'on regarde sans le son, au bureau ou dans un taxi. Les sous-titres portent alors tout le message. [à vérifier au moment du tournage : sous-titres automatiques en version gratuite]

[PAUSE 1 s]

**[B4 — Application · 3:06–4:53]**

**[G · CONSIGNE]** « Écris le script d'une vidéo verticale de 30 secondes… » (texte complet de la consigne à copier) — VO : Voici la consigne du script, pour le centre de formation. Elle impose les quatre temps. Et elle interdit d'inventer.

**[A · ÉCRAN]** Gemini propose un script court. Je corrige les dates. Je retire « emploi garanti à la sortie » : personne ne peut le promettre. J'envoie le script au client pour validation, avant de monter.

**[A · ÉCRAN]** J'enregistre ma voix dans CapCut, téléphone près de la bouche. Deux prises. Je garde la plus naturelle. [à vérifier au moment du tournage : nom de la fonction d'enregistrement]

**[A · ÉCRAN]** Un plan généré, maintenant. Dans Gemini, j'ouvre la création de vidéos, avec Veo. Je décris : « Mains sur un clavier, salle lumineuse, mouvement lent. » Le plan dure quelques secondes. La marque visible reste. [à vérifier au moment du tournage : nom affiché de l'outil vidéo et accès en version gratuite]

**[A · ÉCRAN]** Dans CapCut, je pose la voix. Puis les photos du centre, une par phrase. Le plan généré sert de transition, avec la mention « Plan généré par IA ».

**[A · ÉCRAN]** Les sous-titres : je les génère, puis je les relis un par un. L'outil a écrit « Nia mai » au lieu de « Niamey ». Je corrige. [remplacer par l'erreur réellement obtenue]

**[A · ÉCRAN]** Une musique de la bibliothèque, autorisée pour un usage commercial, très bas sous la voix. J'exporte au format vertical. Puis je regarde la vidéo entière, sans le son. Les dates et l'adresse passent. J'envoie au client un lien, et je garde le fichier en haute qualité. [à vérifier au moment du tournage : mention d'usage commercial dans la bibliothèque]

[PAUSE 1 s]

**[B5 — Consolidation · 4:53–5:33]**

**[F · CAM A]** Une question. Un ami vous propose une idée : faire dire au directeur du centre une phrase qu'il n'a jamais dite. Avec sa voix, imitée par l'IA. « C'est pour rire. » Bonne idée ?

[SILENCE 2 s]

**[F · CAM A]** Non. C'est un deepfake : une fausse vidéo, ou une fausse voix, d'une vraie personne. Même pour rire, elle peut circuler, tromper et nuire. Sans l'accord écrit de la personne, c'est non. Et avec son accord, on le signale clairement. Pour reconnaître ces fausses vidéos, suivez le cours dix.

[PAUSE 1 s]

**[B6 — Clôture · 5:33–6:03]**

**[B · CARTE DE RAPPEL]** « 1. Monter au téléphone une vidéo courte et sous-titrée avec l'IA » « 2. Script d'abord : 30 secondes, quatre temps » « 3. Vraies images d'abord ; plan généré signalé » « 4. Relisez chaque sous-titre, regardez sans le son » — VO : Retenez : le script d'abord. De vraies images, et un plan généré seulement en appoint, signalé. Puis chaque sous-titre relu, et un test sans le son.

**[F · CAM A]** Hadiza a livré sa vidéo de trente secondes. De vraies images du centre, un seul plan généré, signalé. Elle l'ajoute à son portfolio. À vous. Montez une vidéo de trente secondes, sous-titrée.

#### Liste des plans

| # | Type | Cadre / source | Contenu | Durée | Notes |
|---|---|---|---|---|---|
| 1 | E | illustration à plat (Claude) | Façade d'un centre de formation à Niamey, Hadiza et le responsable | 6 s | carton « Niamey, un centre de formation » |
| 2 | F | CAM A | Promesse, rappel de la leçon 3, l'idée « tout générer » | 24 s | promesse dite avant 0:12 |
| 3 | A | téléphone, Gemini | Un plan généré avec un défaut visible | 10 s | cadre sur le défaut ; [à vérifier au moment du tournage : défaut réel] |
| 4 | F | CAM A | Le malentendu « une phrase, un film » | 25 s | — |
| 5 | C | schéma (Claude) | La chaîne en quatre étapes, puis les quatre temps du script | 37 s | chaque étape s'allume quand elle est dite |
| 6 | B | carte | « Du vrai d'abord » | 7 s | — |
| 7 | F | CAM B | La voix : pièce calme, armoire ou pagne | 20 s | second angle |
| 8 | F | CAM A | Les images : vrai lieu, accord, plan généré signalé | 24 s | — |
| 9 | B | carte | « Monter pour le sans-son » | 3 s | — |
| 10 | A | téléphone, CapCut | Vue d'ensemble : ligne de temps, coupe, sous-titres | 30 s | [à vérifier au moment du tournage : sous-titres automatiques en version gratuite] |
| 11 | G | carte de consigne | La consigne du script, texte complet | 10 s | fond clair |
| 12 | A | téléphone : Gemini puis CapCut | Script corrigé, voix, plan Veo, montage, sous-titres relus, musique, export, lecture sans le son | 97 s | une annotation à la fois ; zoom de 6 pour cent au plus |
| 13 | F | CAM A | Prédiction « deepfake pour rire ? », silence, réponse | 40 s | — |
| 14 | B | carte de rappel | Les quatre points | 14 s | points révélés au rythme de la voix |
| 15 | F | CAM A | Le cas d'Hadiza se referme ; titre de l'exercice | 16 s | dernière phrase = titre de l'exercice |

#### Montage idéal

| Temps | Timecode cible | Image principale | Habillage (motion graphics) | Texte à l'écran | Son | Transition |
|---|---|---|---|---|---|---|
| B1 | 0:00–0:30 | Illustration E, puis CAM A | Carton de lieu | « Niamey, un centre de formation » ; « 30 secondes, vertical » | voix + ambiance légère sous E | coupe |
| B2 | 0:30–1:05 | Plan généré défectueux, puis CAM A | Cadre sur le défaut, puis croix | « Une phrase ≠ un film » | voix seule | coupe |
| B3 | 1:05–3:06 | Schéma de la chaîne, cartes, CAM B, CAM A, capture CapCut | Les quatre étapes en frise, reprise en fil conducteur en haut de l'écran | « Script → Voix → Images → Montage » ; « Plan généré par IA » | voix seule | coupe |
| B4 | 3:06–4:53 | Carte de consigne, puis captures Gemini et CapCut | Frise des quatre étapes en haut, l'étape en cours surlignée et cochée | « Corrigé : Niamey » ; « Test sans le son » | voix ; musique de démo seulement quand on l'entend dans la capture, très bas | coupe |
| B5 | 4:53–5:33 | CAM A | Rien pendant la question ; carte définition après le silence | « Deepfake = fausse vidéo ou fausse voix d'une vraie personne » | voix ; silence de 2 s gardé | coupe |
| B6 | 5:33–6:03 | Carte de rappel, puis CAM A | Points révélés au rythme de la voix | Les quatre points ; titre de l'exercice en bas | voix seule | coupe, puis carte de clôture |

**Notes de montage** : un changement visuel toutes les 4 à 8 secondes. Dans le plan 12, couper les temps de génération et d'export (garder une seconde de l'animation d'attente). Montrer la vidéo finale du centre en entier une fois, en vertical au centre du cadre, avec le son coupé et un pictogramme « son coupé » doublé du texte. Zooms sur capture de 6 pour cent au plus ; sous-titres de la leçon remontés au-dessus de la capture quand la vidéo du centre a ses propres sous-titres en bas. Aucune vraie personne ne doit apparaître dans un exemple de deepfake : B5 reste en face caméra et en carte. Plans de couverture disponibles : salle de formation vide, mains au clavier, téléphone devant une armoire de vêtements, téléphone sur la table avec CapCut ouvert.

#### Versions EN / HA / DJE

- **À re-filmer dans la langue** (environ 33 s, l'owner face caméra) : B1 (plan 2, deux premières phrases) — « À la fin de cette leçon, vous saurez monter au téléphone une vidéo courte et sous-titrée avec l'IA. Dans la leçon trois, vous avez vu la règle du miroir : l'IA améliore l'image, pas la personne. » ; B6 (plan 15) — « Hadiza a livré sa vidéo de trente secondes. De vraies images du centre, un seul plan généré, signalé. Elle l'ajoute à son portfolio. À vous. Montez une vidéo de trente secondes, sous-titrée. »
- **Doublé en voix clonée** : plan 2, dernière phrase → illustration E prolongée ; plan 4 (malentendu, 25 s) → plan généré défectueux prolongé, puis carte « Une phrase ≠ un film » ; plan 7 (voix, 20 s) → insert du téléphone devant une armoire de vêtements, puis sous un pagne ; plan 8 (images, 24 s) → photos réelles de la salle sans visage, puis la mention « Plan généré par IA » à l'écran ; plan 13 (prédiction, 40 s) → carte question, puis carte définition du deepfake et renvoi au cours 10.
- **Notes d'adaptation** : « deepfake » se garde en EN ; en HA et DJE, garder le mot et l'expliquer (« une fausse vidéo ou une fausse voix d'une vraie personne »). « Pagne » = « wrapper cloth » en EN. L'erreur de sous-titre « Nia mai » est propre au français : dans les autres versions, montrer la même capture et expliquer l'erreur en sous-titre. Une voix doublée par l'IA fait partie du sujet de la leçon : dans les versions doublées, la mention de la Partie 1 qui signale la voix de synthèse doit être visible.

### Leçon 5 — Votre vidéo de présentation (`vv5`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez filmer au téléphone une vidéo de présentation sous-titrée. »
- **Cas réel (B1 → B6)** : Rahila, jeune agronome à Maradi (cas fictif), est candidate à une bourse de master dont l'appel (fictif) demande une vidéo de présentation de 90 secondes. La veille de la date limite, son premier essai dure quatre minutes : filmé dos à la fenêtre, texte lu sur le téléphone. Enjeu : le jury veut la voir et l'entendre, elle, dans la durée demandée. En B6, elle refilme le lendemain matin face à la fenêtre : 90 secondes, sous-titrées, avec ses mots, envoyées avant la date limite.
- **Unités de notion (B3)** : 1. Cinq temps, écrits avec vos mots — qui je suis, une preuve, mon projet, pourquoi ce programme, une phrase de fin ; dans la durée demandée ; l'IA structure, vous réécrivez pour l'oral. · 2. Fenêtre devant, silence autour — lumière de face, téléphone posé à hauteur des yeux, pièce calme, regard dans l'objectif, horizontal sauf demande contraire. · 3. Ce que l'IA ne fait pas à votre place — ni avatar, ni voix clonée, ni filtre qui change le visage : doubler une candidature, c'est tromper.
- **Démo (B4)** : Aminou filme sa propre vidéo de présentation de 90 secondes, pour un client. Téléphone sur trépied face à une fenêtre, micro-cravate ou écouteurs ; comptes de démo Gemini, CapCut et YouTube. 1. Gemini : notes d'Aminou + consigne ci-dessous ; plan en cinq temps. 2. Réécrire la première phrase à voix haute ; retirer un chiffre non prouvable. 3. Mode avion, appui long sur le visage pour bloquer mise au point et exposition ([à vérifier au moment du tournage : geste selon le téléphone]) ; deux prises. 4. CapCut : couper début, fin et blancs ; sous-titres générés ou texte collé ([à vérifier au moment du tournage : sous-titres automatiques en version gratuite]) ; corriger les noms propres ; export en haute définition. 5. YouTube : mise en ligne en « non répertoriée » ; copier le lien ; l'ouvrir depuis un autre téléphone. Résultat attendu à l'écran : la vidéo d'Aminou, sous-titrée, lue depuis le lien sur un second téléphone.
- **Consolidation (B5)** : prédiction. La bourse demande une vidéo en anglais ; votre anglais est correct, sans plus ; une application propose de doubler votre vidéo française avec votre voix clonée. Réponse : vous parlez vous-même, en anglais simple et préparé ; le jury évalue aussi votre anglais, une voix doublée le trompe, et la différence s'entendra à l'entretien.
- **Consigne à copier** :

```text
Aide-moi à préparer ma vidéo de présentation de [90 secondes] pour [la bourse / le poste / le client].
Consigne officielle de l'appel : [collez-la].
Mes notes : [formation, une expérience concrète, mon projet].
1. Propose un plan en cinq temps : qui je suis, une preuve, mon projet, pourquoi ce programme, une phrase de fin.
2. Écris-le pour l'oral : phrases courtes, 200 mots maximum.
3. N'invente aucune expérience, aucun résultat, aucun chiffre.
4. Dis-moi ce qui manque ou ce qui est flou.
```

- **Exercice** : « Filmez votre vidéo de présentation » — 1. Préparez le plan en cinq temps avec la consigne, puis réécrivez-le avec vos mots, à voix haute. 2. Filmez face à une fenêtre, dans une pièce calme, téléphone posé à hauteur des yeux ; faites deux prises. 3. Coupez, sous-titrez et corrigez les noms propres. 4. Partagez-la par un lien (YouTube en « non répertoriée » ou Google Drive) et vérifiez qu'il s'ouvre sur un autre téléphone.
- **Carte de rappel** : 1. Filmer au téléphone une vidéo de présentation sous-titrée. 2. Cinq temps, dans la durée demandée. 3. Fenêtre devant, silence autour, regard dans l'objectif. 4. Ni avatar, ni voix clonée : vous.
- **Quiz** :
  1. Quel plan suivre pour une vidéo de présentation ? — A) Qui je suis, une preuve, mon projet, pourquoi ce programme, une phrase de fin B) Mon enfance, mes diplômes, mes loisirs C) La lecture de mon CV D) Des photos avec de la musique — **Réponse : A**
  2. L'appel demande quatre-vingt-dix secondes. Votre vidéo dure quatre minutes. Que faites-vous ? — A) Vous l'envoyez : plus, c'est mieux B) Vous l'accélérez C) Vous coupez pour respecter la durée demandée D) Vous envoyez deux vidéos — **Réponse : C**
  3. Où placer la fenêtre quand vous filmez ? — A) Derrière vous B) Devant vous C) Sur le côté, rideaux fermés D) Peu importe — **Réponse : B**
  4. Pendant la prise, où regardez-vous ? — A) Votre image sur l'écran B) Vos notes C) Le plafond D) L'objectif — **Réponse : D**
  5. La bourse demande une vidéo en anglais. Que faites-vous ? — A) Un avatar parle à votre place B) Vous doublez votre vidéo française avec votre voix clonée C) Vous parlez vous-même, en anglais simple et préparé D) Vous renoncez à postuler — **Réponse : C**
- **Marques citées** : Gemini (Google), CapCut, YouTube

#### Script

Durée estimée : 5:55 · Mots dits : 685

**[B1 — Accroche · 0:00–0:31]**

**[E · SITUATION]** « Maradi, la veille de la date limite » — VO : Rahila, jeune agronome à Maradi, doit envoyer une vidéo de présentation pour une bourse.

**[F · CAM A]** À la fin de cette leçon, vous saurez filmer au téléphone une vidéo de présentation sous-titrée. Dans la leçon quatre, vous avez monté une vidéo courte : script, voix, images, sous-titres. Le premier essai de Rahila dure quatre minutes. Elle est dos à la fenêtre, et elle lit son téléphone.

[PAUSE 1 s]

**[B2 — Cadrage · 0:31–1:11]**

**[A · ÉCRAN]** [Essai raté rejoué par Aminou, filmé au téléphone.] Voici un premier essai typique, que j'ai rejoué moi-même. Trop long. À contre-jour. Lu sur le téléphone, pas dit.

**[F · CAM A]** Et deux idées fausses circulent. La première : il faudrait du matériel coûteux. Non : un téléphone, une fenêtre et une pièce calme donnent une image propre. La seconde : un avatar, c'est-à-dire un personnage virtuel, ferait mieux que vous. Ou une copie de votre voix par l'IA. Non plus. Le jury veut vous voir, vous entendre, et juger votre parole. Une vidéo fabriquée le trompe.

[PAUSE 1 s]

**[B3 — Notion · 1:11–3:16]**

**[C · SCHÉMA]** « Cinq temps » « Qui je suis · Une preuve · Mon projet · Pourquoi vous · Une phrase de fin » — VO : D'abord, le plan, en cinq temps. Qui vous êtes, en une phrase. Une preuve concrète : un stage, un projet, un résultat que l'on peut vérifier. Votre projet. Pourquoi ce programme, ou ce client, précisément. Puis une phrase de fin. Et respectez la durée demandée. Si l'appel dit quatre-vingt-dix secondes, c'est quatre-vingt-dix, pas quatre minutes.

**[F · CAM B]** Pour écrire ces cinq temps, l'IA peut proposer un plan à partir de vos notes. Elle peut couper ce qui dépasse. Mais réécrivez chaque phrase avec vos mots, à voix haute. Un texte écrit sonne faux à l'oral. Répétez trois fois. Ne lisez pas : gardez cinq mots-clés, en gros, près de l'objectif. Dans ma pratique, je dis mon texte à quelqu'un avant de filmer. S'il décroche, je coupe.

**[B · CARTE]** « Fenêtre devant, silence autour » — VO : Deuxième point : l'image et le son.

**[A · ÉCRAN]** [Deux essais d'Aminou côte à côte : dos à la fenêtre, puis face à elle.] À gauche, dos à la fenêtre : le visage est sombre. À droite, face à elle : il s'éclaire. Posez le téléphone à hauteur des yeux, sur un trépied ou une pile de livres. Choisissez une pièce calme, et coupez le ventilateur pendant la prise. Testez le son : réécoutez dix secondes au casque avant la vraie prise. Regardez l'objectif, pas l'écran : c'est là que se trouvent les yeux du jury. Filmez à l'horizontale, sauf si l'appel demande autre chose.

**[B · CARTE]** « Ni avatar · Ni voix clonée · Ni filtre visage » — VO : Troisième point : les limites.

**[F · CAM A]** Ici, l'IA vous aide à préparer, couper et sous-titrer. Elle ne parle pas à votre place. Pas d'avatar. Pas de voix clonée. Pas de filtre qui change votre visage. Doubler un cours, en le disant, c'est diffuser. Doubler une candidature, c'est tromper.

[PAUSE 1 s]

**[B4 — Application · 3:16–4:48]**

**[G · CONSIGNE]** « Aide-moi à préparer ma vidéo de présentation… » (texte complet de la consigne à copier) — VO : Je fais la mienne, devant vous : une vidéo de présentation pour un client. Je donne à Gemini mes notes et cette consigne. Notez la ligne trois : n'invente rien.

**[A · ÉCRAN]** Gemini propose cinq temps. Je réécris la première phrase à voix haute, avec mes mots. Je retire un chiffre que je ne peux pas prouver.

**[A · ÉCRAN]** Le téléphone est posé face à la fenêtre, en mode avion. Un micro-cravate, ou simplement les écouteurs du téléphone. J'appuie longuement sur mon visage, à l'écran : la mise au point et la lumière se bloquent. Deux prises. Je garde la plus vivante, pas la plus parfaite. [à vérifier au moment du tournage : geste selon le téléphone]

**[A · ÉCRAN]** Dans CapCut, je coupe le début, la fin et les blancs. Les sous-titres : je les génère, ou je colle mon texte. Je corrige les noms propres. Je relis les sous-titres une dernière fois, en entier. J'exporte en haute définition.

**[A · ÉCRAN]** Je mets la vidéo sur YouTube, en « non répertoriée » : seules les personnes qui ont le lien la voient. Je copie le lien. Je l'ouvre depuis un autre téléphone, pour vérifier.

[PAUSE 1 s]

**[B5 — Consolidation · 4:48–5:22]**

**[F · CAM A]** Une question. La bourse demande une vidéo en anglais. Votre anglais est correct, sans plus. Une application propose de doubler votre vidéo française, avec votre voix clonée, en anglais parfait. Que faites-vous ?

[SILENCE 2 s]

**[F · CAM A]** Vous parlez vous-même, en anglais simple. Le jury évalue aussi votre anglais. Une voix doublée lui ment. Et à l'entretien, la différence s'entendra. Des phrases courtes, bien préparées, valent mieux qu'un anglais emprunté.

[PAUSE 1 s]

**[B6 — Clôture · 5:22–5:55]**

**[B · CARTE DE RAPPEL]** « 1. Filmer au téléphone une vidéo de présentation sous-titrée » « 2. Cinq temps, dans la durée demandée » « 3. Fenêtre devant, silence autour, regard dans l'objectif » « 4. Ni avatar, ni voix clonée : vous » — VO : Retenez : cinq temps, dans la durée demandée. La fenêtre devant, le silence autour, le regard dans l'objectif. Et personne d'autre que vous à l'écran.

**[F · CAM A]** Rahila a refilmé sa vidéo le lendemain matin, face à la fenêtre. Quatre-vingt-dix secondes, sous-titrées, avec ses mots. Elle l'a envoyée avant la date limite. À vous. Filmez votre vidéo de présentation.

#### Liste des plans

| # | Type | Cadre / source | Contenu | Durée | Notes |
|---|---|---|---|---|---|
| 1 | E | illustration à plat (Claude) | Maradi le soir, Rahila face à son téléphone, l'appel de bourse à l'écran | 7 s | carton « Maradi, la veille de la date limite » |
| 2 | F | CAM A | Promesse, rappel de la leçon 4, le premier essai de Rahila | 24 s | promesse dite avant 0:12 |
| 3 | A | vidéo filmée au téléphone | Essai raté rejoué par Aminou : contre-jour, lecture du téléphone | 10 s | trois cadres successifs : durée, contre-jour, regard baissé |
| 4 | F | CAM A | Les deux idées fausses : matériel coûteux, avatar ou voix clonée | 30 s | — |
| 5 | C | schéma (Claude) | Les cinq temps, avec la durée demandée en jauge | 27 s | chaque temps s'allume quand il est dit |
| 6 | F | CAM B | Écrire avec l'IA, réécrire à voix haute, mots-clés près de l'objectif | 33 s | insert possible : feuille de cinq mots-clés scotchée sous l'objectif |
| 7 | B | carte | « Fenêtre devant, silence autour » | 3 s | — |
| 8 | A | deux vidéos filmées au téléphone | Dos à la fenêtre / face à la fenêtre, côte à côte ; réglages | 38 s | croix sur la gauche, coche sur la droite |
| 9 | B | carte | « Ni avatar · Ni voix clonée · Ni filtre visage » | 2 s | — |
| 10 | F | CAM A | Les limites : diffuser contre tromper | 20 s | — |
| 11 | G | carte de consigne | La consigne de préparation, texte complet | 14 s | fond clair |
| 12 | A | téléphone : Gemini, appareil photo, CapCut, YouTube | Plan en cinq temps, prise, montage, sous-titres, mise en ligne non répertoriée, test du lien | 77 s | une annotation à la fois ; zoom de 6 pour cent au plus ; compte YouTube de démo |
| 13 | F | CAM A | Prédiction « doublage en anglais ? », silence, réponse | 33 s | — |
| 14 | B | carte de rappel | Les quatre points | 14 s | points révélés au rythme de la voix |
| 15 | F | CAM A | Le cas de Rahila se referme ; titre de l'exercice | 16 s | dernière phrase = titre de l'exercice |

#### Montage idéal

| Temps | Timecode cible | Image principale | Habillage (motion graphics) | Texte à l'écran | Son | Transition |
|---|---|---|---|---|---|---|
| B1 | 0:00–0:31 | Illustration E, puis CAM A | Carton de lieu ; compteur « 4:00 » barré, « 1:30 » demandé | « Maradi, la veille de la date limite » | voix + ambiance légère sous E | coupe |
| B2 | 0:31–1:11 | Essai raté, puis CAM A | Trois cadres successifs sur les erreurs | « Trop long · À contre-jour · Lu, pas dit » | voix ; le son de l'essai raté coupé | coupe |
| B3 | 1:11–3:16 | Schéma des cinq temps, CAM B, deux essais côte à côte, CAM A | Jauge de durée ; coche et croix sur les essais | « Cinq temps » ; « Fenêtre devant » ; « Ni avatar · Ni voix clonée » | voix seule | coupe ; volet vertical pour les deux essais |
| B4 | 3:16–4:48 | Carte de consigne, puis captures Gemini, appareil photo, CapCut, YouTube | Cadre sur « non répertoriée » ; coche quand le lien s'ouvre sur le second téléphone | « Non répertoriée = visible avec le lien » | voix ; extrait de 3 s de la vidéo d'Aminou avec son propre son | coupe |
| B5 | 4:48–5:22 | CAM A | Rien pendant la question ; carte réponse après le silence | « Vous, en anglais simple » | voix ; silence de 2 s gardé | coupe |
| B6 | 5:22–5:55 | Carte de rappel, puis CAM A | Points révélés au rythme de la voix | Les quatre points ; titre de l'exercice en bas | voix seule | coupe, puis carte de clôture |

**Notes de montage** : un changement visuel toutes les 4 à 8 secondes. Les deux essais (plan 8) restent côte à côte au moins 5 secondes, même cadrage, même tenue : seule la lumière change. L'essai raté (plan 3) est montré sans son, pour ne pas fatiguer l'oreille. Dans le plan 12, garder 3 secondes de la vidéo finale d'Aminou avec son propre son et ses sous-titres, puis reprendre la voix off. Masquer l'adresse du compte YouTube de démo. Zooms sur capture de 6 pour cent au plus ; sous-titres de la leçon remontés quand la vidéo montrée a ses propres sous-titres. Plans de couverture disponibles : Aminou qui installe le trépied face à la fenêtre (B-cam), pince du micro-cravate, feuille de mots-clés sous l'objectif, second téléphone qui ouvre le lien.

#### Versions EN / HA / DJE

- **À re-filmer dans la langue** (environ 32 s, l'owner face caméra) : B1 (plan 2, deux premières phrases) — « À la fin de cette leçon, vous saurez filmer au téléphone une vidéo de présentation sous-titrée. Dans la leçon quatre, vous avez monté une vidéo courte : script, voix, images, sous-titres. » ; B6 (plan 15) — « Rahila a refilmé sa vidéo le lendemain matin, face à la fenêtre. Quatre-vingt-dix secondes, sous-titrées, avec ses mots. Elle l'a envoyée avant la date limite. À vous. Filmez votre vidéo de présentation. »
- **Doublé en voix clonée** : plan 2, fin (premier essai de Rahila) → illustration E prolongée ; plan 4 (idées fausses, 30 s) → essai raté prolongé, puis carte « Téléphone + fenêtre + calme » et carte « Ni avatar, ni voix clonée » ; plan 6 (écriture, 33 s) → capture du plan en cinq temps dans Gemini, puis insert de la feuille de mots-clés sous l'objectif ; plan 10 (limites, 20 s) → carte « Doubler un cours en le disant : diffuser · Doubler une candidature : tromper » ; plan 13 (prédiction, 33 s) → carte question, puis carte réponse.
- **Notes d'adaptation** : cette leçon dit que doubler une candidature, c'est tromper. Les versions doublées doivent donc afficher clairement, dès l'ouverture, la mention de la Partie 1 qui signale la voix de synthèse d'Aminou. En EN, adapter B5 : « La bourse demande une vidéo en français » (langue moins maîtrisée par l'apprenant anglophone). En HA et DJE, garder « en français ou en anglais ». « Non répertoriée » = « Unlisted » dans l'interface anglaise de YouTube. « Avatar » se garde, avec l'explication « personnage virtuel ».

### Leçon 6 — Projet final : portfolio et offre de service (`vv6`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez présenter trois réalisations et une offre de service. »
- **Cas réel (B1 → B6)** : une ONG de Niamey (cas fictif) écrit à Hadiza : « Montrez-nous ce que vous savez faire. » Elle répond en envoyant quarante photos sur WhatsApp, sans un mot d'explication. Enjeu : un premier travail pour une organisation. En B6, elle renvoie un PDF de cinq pages, trois réalisations expliquées et une offre d'une page : l'ONG sait exactement ce qu'elle peut lui confier.
- **Unités de notion (B3 : livrables et critères)** : 1. Livrable 1 : trois réalisations expliquées — au moins une image et une vidéo, la troisième au choix (autre image, kit photo et bannière) ; pour chacune : besoin, résultat, part de l'IA, votre part, accord du client ou mention « projet d'entraînement ». · 2. Livrable 2 : une offre d'une page — pour qui, problème réglé, trois offres au plus (livrable et délai), besoins, règles (IA signalée, droits, accord des personnes), tarif fixé par l'apprenant, contact. · 3. Cinq critères d'évaluation — lisible, juste, honnête, clair, complet. · 4. Le format de dépôt — un PDF léger ou un lien qui s'ouvre sans compte ; les vidéos toujours en lien.
- **Démo (B4)** : exemple de projet réussi de bout en bout : le portfolio d'Hadiza (cas fictif), construit dans Canva par l'owner avec les réalisations réelles des démos des leçons 1, 2 et 4. 1. Gemini : la consigne d'offre ci-dessous ; la case tarif reste à remplir par l'apprenant. 2. Page de garde : portrait (illustration de la persona, jamais la photo d'une vraie personne), nom, une phrase. 3. Réalisation 1 : affiche du forum emploi, avant et après ; besoin, résultat, démarche. 4. Réalisation 2 : illustration de la journée de plantation ; consigne citée ; mention IA ; accord de l'association noté. 5. Réalisation 3 : vidéo du centre de formation ; lien et code QR ; « Un plan généré par IA, signalé à l'écran ». 6. Page d'offre : trois services, un délai chacun, règles, contact ; le montant du tarif est masqué. 7. Export en PDF standard ([à vérifier au moment du tournage : options d'export de Canva]), ouverture sur téléphone, relecture avec la grille des cinq critères. Résultat attendu à l'écran : un PDF de cinq pages, léger, lisible sur téléphone.
- **Consolidation (B5)** : prédiction. Une offre dit : « Je fais tout : logos, vidéos, sites, photos, montages, affiches. » Que comprend le client ? Réponse : rien de précis ; une offre claire choisit un public, trois services, un délai.
- **Consigne à copier** :

```text
Aide-moi à rédiger mon offre de service d'une page.
Mes services : [ex. affiches pour associations ; kit photo + bannière LinkedIn ; vidéos courtes sous-titrées].
Mon public : [associations, centres de formation, jeunes diplômés de ma ville].
Mes trois réalisations : [décrivez-les en une ligne chacune].
Structure : pour qui ; le problème que je règle ; trois offres au maximum (ce qui est livré, délai) ; ce dont j'ai besoin du client ; mes règles (IA signalée, droits respectés, accord des personnes visibles, nombre de retouches) ; tarif : [je le complète moi-même] ; contact.
Une page, phrases courtes, aucune promesse de résultat.
```

- **Exercice** : « Déposez votre portfolio et votre offre » — 1. Choisissez trois réalisations variées, dont au moins une image et une vidéo. 2. Pour chacune, une page : besoin, résultat, part de l'IA, votre part, accord du client ou mention « projet d'entraînement ». 3. Rédigez votre offre d'une page avec la consigne, et fixez vous-même votre tarif. 4. Relisez avec la grille des cinq critères, exportez un PDF léger (ou un lien qui s'ouvre sans compte) et déposez-le dans l'espace du projet final de la plateforme ([à vérifier au moment du tournage : mode de dépôt sur le site]).
- **Carte de rappel** : précédée de la carte « Le cours en cinq gestes » (1. Hiérarchie, contraste, format : un visuel qui se lit. 2. Six éléments, une retouche à la fois. 3. L'IA améliore l'image, jamais la personne. 4. Script d'abord, vraies images, sous-titres relus. 5. Votre vidéo : vous, avec vos mots.) — puis : 1. Présenter trois réalisations et une offre de service. 2. Chaque réalisation : besoin, résultat, part de l'IA. 3. Une offre : pour qui, quoi, quel délai. 4. Un PDF léger ou un lien, déposé.
- **Quiz** :
  1. Que contient le projet final ? — A) Trois réalisations expliquées et une offre de service d'une page B) Quarante images C) Un CV et une lettre de motivation D) Une seule vidéo — **Réponse : A**
  2. Pour chaque réalisation, qu'indiquez-vous ? — A) Seulement le résultat B) Le nom de l'outil le plus récent C) Le besoin, le résultat, la part de l'IA et la vôtre D) Le nombre d'heures passées — **Réponse : C**
  3. Que doit dire une offre de service ? — A) « Je fais tout » B) Pour qui, quoi, dans quel délai C) La liste de vos outils D) Vos diplômes — **Réponse : B**
  4. Comment déposer votre projet ? — A) En quarante fichiers séparés B) Avec les vidéos dans le PDF C) Par message vocal D) Un PDF léger ou un lien, avec les vidéos en lien — **Réponse : D**
  5. Quel point relève du critère « honnête » ? — A) Le PDF fait cinq pages B) Les couleurs sont vives C) L'IA est signalée et les personnes visibles ont donné leur accord D) Le texte est long — **Réponse : C**
- **Marques citées** : Gemini (Google), Canva, WhatsApp

#### Script

Durée estimée : 6:06 · Mots dits : 720

**[B1 — Accroche · 0:00–0:28]**

**[E · SITUATION]** « Niamey, un message d'une ONG » — VO : Une ONG écrit à Hadiza : « Montrez-nous ce que vous savez faire. »

**[F · CAM A]** À la fin de cette leçon, vous saurez présenter trois réalisations et une offre de service. Dans la leçon cinq, vous avez filmé votre vidéo de présentation. Elle trouvera sa place ici. Hadiza, elle, répond en envoyant quarante photos sur WhatsApp. Sans un mot d'explication.

[PAUSE 1 s]

**[B2 — Cadrage · 0:28–1:02]**

**[A · ÉCRAN]** [Conversation WhatsApp de démo : quarante photos envoyées d'affilée.] Quarante photos, sans un mot. Le client fait défiler, puis il abandonne.

**[F · CAM A]** C'est le malentendu du débutant : montrer tout ce qu'on a fait. Un portfolio, ce n'est pas un album. C'est une sélection. Trois réalisations bien expliquées parlent plus que quarante images. Le client veut comprendre trois choses : le besoin, le résultat, et votre façon de travailler. Avec l'IA, il veut aussi savoir ce que vous avez fait vous-même.

[PAUSE 1 s]

**[B3 — Notion · 1:02–3:05]**

**[C · SCHÉMA]** « Livrable 1 · Trois réalisations » « Besoin · Résultat · Part de l'IA · Votre part » — VO : Premier livrable : trois réalisations variées. Au moins une image, comme une affiche ou une illustration. Au moins une vidéo, en lien. La troisième, au choix : une autre image, ou votre kit photo et bannière. Pour chacune, une page : le besoin, le résultat, ce que l'IA a fait, ce que vous avez fait. Ajoutez l'accord du client, ou la mention « projet d'entraînement ». Votre vidéo de présentation peut ouvrir le portfolio, en lien.

**[B · CARTE]** « Livrable 2 · Une offre d'une page » — VO : Deuxième livrable : votre offre de service.

**[F · CAM B]** Une page, pas plus. Pour qui vous travaillez. Le problème que vous réglez. Trois offres au maximum, avec ce que vous livrez, et dans quel délai. Ce dont vous avez besoin du client. Vos règles : IA signalée, droits respectés, accord des personnes filmées. Votre tarif, que vous fixez vous-même. Et votre contact. Une offre claire rassure : le client sait ce qu'il paie, et ce qu'il recevra.

**[C · SCHÉMA]** « Lisible · Juste · Honnête · Clair · Complet » — VO : Votre projet sera évalué sur cinq critères. Lisible : les trois règles de la leçon un sont appliquées. Juste : rien d'inventé, aucune faute dans les noms et les dates. Honnête : l'IA est signalée, et les personnes visibles ont donné leur accord. Clair : on comprend votre offre en une minute. Complet : les deux livrables sont là.

**[B · CARTE]** « Dépôt · Un PDF léger ou un lien » — VO : Dernier point : le format de dépôt.

**[A · ÉCRAN]** Dans Canva, j'exporte en PDF, en qualité standard. Je vérifie le poids du fichier sur mon téléphone. Il doit rester léger, pour s'ouvrir même avec une connexion lente. Les vidéos restent en lien, jamais dans le PDF. Vous pouvez aussi partager un lien qui s'ouvre sans compte. [à vérifier au moment du tournage : options d'export de Canva]

[PAUSE 1 s]

**[B4 — Application · 3:05–4:39]**

**[G · CONSIGNE]** « Aide-moi à rédiger mon offre de service d'une page… » (texte complet de la consigne à copier) — VO : Voici un exemple de projet réussi : celui d'Hadiza. Pour son offre, elle a utilisé cette consigne. Notez la fin : aucune promesse de résultat. Le tarif, c'est elle qui l'écrit.

**[A · ÉCRAN]** Son portfolio réunit trois réalisations de ce cours. Page de garde : un portrait, son nom, une phrase. « Visuels et vidéos courtes pour associations et centres de formation, à Niamey. »

**[A · ÉCRAN]** Réalisation un : l'affiche du forum emploi, avant et après. Le besoin, en une ligne. Le résultat. Sa démarche : Gemini pour raccourcir le texte, Canva pour la mise en page.

**[A · ÉCRAN]** Réalisation deux : l'illustration de la journée de plantation. La consigne en six éléments est citée. La mention « Illustration créée avec l'IA » est visible, et l'accord de l'association est noté.

**[A · ÉCRAN]** Réalisation trois : la vidéo du centre de formation. Un lien, et un code QR. Une ligne précise : « Un plan généré par IA, signalé à l'écran. »

**[A · ÉCRAN]** Dernière page : l'offre. Trois services, un délai pour chacun, ses règles, et son contact. Elle exporte en PDF léger, l'ouvre sur son téléphone, et relit la grille des cinq critères. Rien de spectaculaire. Mais tout est clair, vrai, et vérifiable.

[PAUSE 1 s]

**[B5 — Consolidation · 4:39–5:14]**

**[F · CAM A]** Une question. Une offre dit : « Je fais tout : logos, vidéos, sites, photos, montages, affiches. » Que comprend le client ?

[SILENCE 2 s]

**[F · CAM A]** Rien de précis. Il ne sait pas ce qu'il achète, ni si vous savez vraiment le faire. Une offre claire choisit : un public, trois services, un délai. Vous élargirez plus tard, quand vos réalisations le montreront. Dans ma pratique, chaque nouveau service arrive après une première réalisation réussie.

[PAUSE 1 s]

**[B6 — Clôture · 5:14–6:06]**

**[B · CARTE]** « Le cours en cinq gestes » « 1. Hiérarchie, contraste, format : un visuel qui se lit » « 2. Six éléments, une retouche à la fois » « 3. L'IA améliore l'image, jamais la personne » « 4. Script d'abord, vraies images, sous-titres relus » « 5. Votre vidéo : vous, avec vos mots » — VO : Récapitulons le cours. Trois règles pour un visuel qui se lit. Six éléments pour une image, et une retouche à la fois. L'IA améliore l'image, jamais la personne. Une vidéo commence par un script, et ses sous-titres se relisent. Et votre vidéo de présentation, c'est vous, avec vos mots.

**[B · CARTE DE RAPPEL]** « 1. Présenter trois réalisations et une offre de service » « 2. Chaque réalisation : besoin, résultat, part de l'IA » « 3. Une offre : pour qui, quoi, quel délai » « 4. Un PDF léger ou un lien, déposé » — VO : Pour le projet : trois réalisations expliquées, une offre d'une page, un seul fichier. Déposez-le dans l'espace du projet final, sur la plateforme. [à vérifier au moment du tournage : mode de dépôt sur le site]

**[F · CAM A]** Hadiza a renvoyé un PDF de cinq pages. Cette fois, l'ONG sait exactement ce qu'elle peut lui confier. À vous, maintenant. Déposez votre portfolio et votre offre.

#### Liste des plans

| # | Type | Cadre / source | Contenu | Durée | Notes |
|---|---|---|---|---|---|
| 1 | E | illustration à plat (Claude) | Hadiza reçoit le message de l'ONG sur son téléphone | 6 s | carton « Niamey, un message d'une ONG » |
| 2 | F | CAM A | Promesse, rappel de la leçon 5, les quarante photos | 22 s | promesse dite avant 0:12 |
| 3 | A | téléphone, WhatsApp (compte de démo) | Quarante photos envoyées d'affilée | 7 s | défilement rapide ; contacts fictifs |
| 4 | F | CAM A | Le malentendu : album contre sélection | 27 s | — |
| 5 | C | schéma (Claude) | Livrable 1 : trois réalisations, et pour chacune quatre rubriques | 34 s | gabarit de page « besoin · résultat · part de l'IA · votre part » |
| 6 | B | carte | « Livrable 2 · Une offre d'une page » | 3 s | — |
| 7 | F | CAM B | Contenu de l'offre, tarif fixé par l'apprenant | 32 s | second angle |
| 8 | C | schéma (Claude) | Grille des cinq critères | 26 s | une coche par critère, avec son libellé |
| 9 | B | carte | « Dépôt · Un PDF léger ou un lien » | 3 s | — |
| 10 | A | téléphone, Canva et gestionnaire de fichiers | Export PDF standard, poids du fichier vérifié | 22 s | [à vérifier au moment du tournage : options d'export] |
| 11 | G | carte de consigne | La consigne d'offre, texte complet | 14 s | fond clair |
| 12 | A | Canva (portfolio d'Hadiza) puis téléphone | Les cinq pages, l'offre, l'export, la relecture avec la grille | 81 s | montant du tarif masqué ; une annotation à la fois |
| 13 | F | CAM A | Prédiction « Je fais tout », silence, réponse | 34 s | — |
| 14 | B | carte, puis carte de rappel | « Le cours en cinq gestes », puis les quatre points du projet | 38 s | points révélés au rythme de la voix |
| 15 | F | CAM A | Le cas d'Hadiza se referme ; titre de l'exercice | 13 s | dernière phrase = titre de l'exercice |

#### Montage idéal

| Temps | Timecode cible | Image principale | Habillage (motion graphics) | Texte à l'écran | Son | Transition |
|---|---|---|---|---|---|---|
| B1 | 0:00–0:28 | Illustration E, puis CAM A | Carton de lieu ; bulle du message de l'ONG | « Montrez-nous ce que vous savez faire. » | voix + ambiance légère sous E | coupe |
| B2 | 0:28–1:02 | Capture WhatsApp, puis CAM A | Compteur « 40 photos » qui défile | « Un portfolio est une sélection » | voix seule | coupe |
| B3 | 1:02–3:05 | Schémas des livrables et des critères, CAM B, capture d'export | Gabarit de page de réalisation ; grille des cinq critères ; poids du fichier encadré | « Livrable 1 » ; « Livrable 2 » ; « Lisible · Juste · Honnête · Clair · Complet » | voix seule | coupe ; glissement court entre livrables |
| B4 | 3:05–4:39 | Carte de consigne, puis les pages du portfolio d'Hadiza | Numéro de page en surtitre ; cadre sur chaque rubrique ; coches de la grille à la fin | « Réalisation 1/2/3 » ; « Offre » | voix ; 3 s de la vidéo du centre avec son propre son | coupe ; tourne-page discret |
| B5 | 4:39–5:14 | CAM A | Carte « Je fais tout » barrée après le silence | « Un public · Trois services · Un délai » | voix ; silence de 2 s gardé | coupe |
| B6 | 5:14–6:06 | Carte récapitulative, carte de rappel, puis CAM A | Un point par leçon, révélé au rythme de la voix | Les cinq gestes ; les quatre points ; titre de l'exercice en bas | voix seule | coupe, puis carte de clôture |

**Notes de montage** : un changement visuel toutes les 4 à 8 secondes. Le plan 12 montre les pages du portfolio en entier puis recadrées sur chaque rubrique, sans zoom de plus de 6 pour cent. Ne jamais afficher de montant dans la case tarif. Le récapitulatif de B6 reprend les icônes et les couleurs de chaque leçon pour que l'apprenant reconnaisse le parcours. Sous-titres remontés quand une page de portfolio occupe le bas de l'écran. Plans de couverture disponibles : pages du portfolio imprimées qu'on tourne, téléphone qui ouvre le PDF, code QR scanné par un second téléphone.

#### Versions EN / HA / DJE

- **À re-filmer dans la langue** (environ 27 s, l'owner face caméra) : B1 (plan 2, deux premières phrases) — « À la fin de cette leçon, vous saurez présenter trois réalisations et une offre de service. Dans la leçon cinq, vous avez filmé votre vidéo de présentation. » ; B6 (plan 15) — « Hadiza a renvoyé un PDF de cinq pages. Cette fois, l'ONG sait exactement ce qu'elle peut lui confier. À vous, maintenant. Déposez votre portfolio et votre offre. »
- **Doublé en voix clonée** : plan 2, fin (les quarante photos) → capture WhatsApp du plan 3 prolongée ; plan 4 (malentendu, 27 s) → capture WhatsApp, puis carte « Album ≠ portfolio » ; plan 7 (offre, 32 s) → page d'offre d'Hadiza (issue du plan 12), rubrique par rubrique ; plan 13 (prédiction, 34 s) → carte « Je fais tout » barrée, puis carte « Un public · Trois services · Un délai ».
- **Notes d'adaptation** : « ONG » = « NGO » en EN ; en HA et DJE, garder « ONG », d'usage courant. « Projet d'entraînement » = « practice project ». « Code QR » = « QR code ». Les pages du portfolio d'Hadiza restent en français à l'écran : ajouter une traduction en sous-titre. Dans aucune version ne dire ni montrer de montant de tarif.

## 2.6 Captures et éléments à préparer

| Leçon | Élément | Comment l'obtenir | Qui |
|---|---|---|---|
| Toutes | Comptes de démo : Google (Gemini), Canva, CapCut, YouTube, deux comptes WhatsApp | Créer avant la première session de captures, avec des prénoms fictifs ; aucune donnée personnelle, aucun contact réel | owner |
| Toutes | Illustrations E des personas et des lieux (Hadiza à Niamey, Moussa à Zinder, Rahila à Maradi) | Style à plat, formes simples, sans photoréalisme qui imite une vraie personne | Claude |
| Toutes | Inserts et plans de couverture listés en 2.4 et dans chaque « Montage idéal » | B-cam, session 3 | owner |
| Toutes | Formulaires d'accord à l'image | Modèle d'une page, signé par toute personne filmée en dehors d'Aminou (salle de formation, aide au tournage) | owner |
| Toutes | Relevé des libellés réels des outils | Pendant les captures, noter les noms de boutons, de menus et l'accès gratuit ou payant de chaque fonction montrée ; trancher chaque « [à vérifier au moment du tournage] » et corriger la voix off | owner, puis Claude |
| 1 | Affiche « avant » du forum emploi (fictive, volontairement ratée) | Canva : six polices, texte serré, photo sombre ; texte fictif (titre, date, lieu, entrée libre, contact générique) | owner |
| 1 | Capture : statut WhatsApp avec l'affiche « avant » et la réponse « C'est quand ? » | Deux comptes WhatsApp de démo | owner |
| 1 | Capture : Gemini, la consigne de la leçon et sa réponse | Téléphone, compte de démo ; garder la réponse réelle obtenue | owner |
| 1 | Capture : Canva, refonte de l'affiche (modèle vertical, une police, fond uni, vignette, export, statut publié) | Téléphone, compte de démo | owner |
| 1 | Captures : écrans d'accueil des quatre outils (création d'image de Gemini, Canva, outil vidéo de Gemini, CapCut) | Téléphone ; [à vérifier au moment du tournage : nom affiché et accès de l'outil vidéo] | owner |
| 1 | Affiches imprimées A (photo de foule, texte posé dessus) et B (fond uni, grand titre) ; affiche « après » en A3 pour le décor | Canva puis impression ; photo de foule prise par l'owner avec accord, ou image libre de droits dont la licence est vérifiée | owner |
| 1 | Schémas : hiérarchie en trois niveaux ; formats 1:1, 4:5, 9:16 et bannière | HyperFrames | Claude |
| 2 | Capture : Gemini, consigne vague et image ratée | Téléphone ; décrire le résultat réellement obtenu dans la voix off | owner |
| 2 | Capture : Gemini, consigne en six éléments, deux retouches, téléchargement | Téléphone, compte de démo ; garder la marque visible si elle apparaît | owner |
| 2 | Capture : Canva, correction d'une date, mise en page, mention « Illustration créée avec l'IA », export, entrée de la génération d'images de Canva | Téléphone ; [à vérifier au moment du tournage : nom et accès gratuit de la génération d'images de Canva] | owner |
| 2 | Illustration finale imprimée en A3 (décor et portfolio d'Hadiza) | Export Canva puis impression | owner |
| 2 | Schémas : les six éléments ; droits, visages et mention de l'IA | HyperFrames | Claude |
| 3 | Photo réelle d'Aminou face à une fenêtre, prise par un tiers | Téléphone, le matin, à hauteur des yeux | owner |
| 3 | Capture : Gemini, retouche lumière et fond avec la consigne, comparaison côte à côte | Téléphone, compte de démo | owner |
| 3 | Version C de la photo (peau lissée, visage rajeuni, costume ajouté) et tirages A5 des versions A, B, C | Générée sur la photo d'Aminou, pour la démonstration seulement ; jamais publiée ailleurs | owner |
| 3 | CV « avant » de Moussa (trois pages, deux colonnes, étoiles) et CV « après » (une colonne) | Texte fictif rédigé par Claude ; mise en page dans Canva par l'owner | Claude, puis owner |
| 3 | Capture : Canva, modèle « Bannière LinkedIn », bannière d'Aminou ; LinkedIn, remplacement de l'image de fond, vue sur téléphone | Profil réel d'Aminou s'il le choisit, sinon profil de démo ; [à vérifier au moment du tournage : nom du modèle et zone masquée par la photo] | owner |
| 3 | Capture : export PDF d'un CV d'une colonne, sélection du texte, collage dans une note | Téléphone ; coordonnées floutées au montage | owner |
| 3 | Schémas : règle du miroir ; anatomie de la bannière (1584 × 396 px, zone masquée, zone du texte) | HyperFrames | Claude |
| 4 | Photos et vidéos d'une vraie salle de formation | Avec l'autorisation du lieu ; sans visage, ou avec accord écrit des personnes | owner |
| 4 | Plan généré présentant un défaut visible (clavier, enseigne) | Gemini ; faire plusieurs essais et garder un défaut réel | owner |
| 4 | Capture : Gemini, consigne du script, script corrigé | Téléphone, compte de démo | owner |
| 4 | Capture : Gemini, génération d'un plan avec Veo | [à vérifier au moment du tournage : accès en version gratuite ; sinon compte payant d'Aminou, et le dire dans la voix off] | owner |
| 4 | Capture : CapCut, voix off, montage, sous-titres (erreur réelle corrigée), musique autorisée pour un usage commercial, export vertical | Téléphone ; [à vérifier au moment du tournage : fonctions disponibles en version gratuite] | owner |
| 4 | Vidéo finale de 30 secondes du centre (troisième réalisation du portfolio d'Hadiza) et vignette imprimée en A3 pour le décor | Export CapCut ; mise en ligne non répertoriée pour obtenir un lien et un code QR | owner |
| 4 | Inserts : téléphone devant une armoire de vêtements, sous un pagne | B-cam | owner |
| 4 | Schéma de la chaîne en quatre étapes ; carte de définition du deepfake | HyperFrames ; aucune vraie personne dans un exemple de deepfake | Claude |
| 5 | Essai raté rejoué par Aminou (contre-jour, texte lu) | Téléphone, le soir, dos à la fenêtre | owner |
| 5 | Deux essais comparables : dos à la fenêtre, puis face à la fenêtre | Même cadrage, même tenue, à quelques minutes d'intervalle | owner |
| 5 | Capture : Gemini, notes d'Aminou et consigne, plan en cinq temps | Téléphone, compte de démo ; notes sans donnée personnelle | owner |
| 5 | Capture de l'écran pendant la prise (appui long, verrouillage) | [à vérifier au moment du tournage : geste selon le téléphone, et possibilité d'enregistrer l'écran pendant que l'appareil photo filme ; sinon, filmer l'écran à la B-cam] | owner |
| 5 | Vidéo de présentation de 90 secondes d'Aminou (prises brutes et version finale) | Téléphone sur trépied face à la fenêtre, micro-cravate ou écouteurs | owner |
| 5 | Capture : CapCut (coupe, sous-titres, correction, export) puis YouTube (mise en ligne non répertoriée, lien ouvert sur un second téléphone) | Compte YouTube de démo ; adresse du compte masquée | owner |
| 5 | Schéma des cinq temps avec la jauge de durée | HyperFrames | Claude |
| 6 | Capture : WhatsApp, quarante photos envoyées d'affilée | Deux comptes WhatsApp de démo | owner |
| 6 | Portfolio d'Hadiza (fictif), cinq pages : page de garde (portrait illustré), affiche de la leçon 1, illustration de la leçon 2, vidéo de la leçon 4 (lien et code QR), offre | Textes fictifs rédigés par Claude avec la consigne d'offre ; mise en page dans Canva ; case tarif sans montant | Claude, puis owner |
| 6 | Capture : Gemini, consigne d'offre et réponse | Téléphone, compte de démo | owner |
| 6 | Capture : Canva, export PDF standard et poids du fichier vérifié sur téléphone | [à vérifier au moment du tournage : options d'export de Canva] | owner |
| 6 | Pages du portfolio imprimées (insert) | Impression A4 | owner |
| 6 | Schémas : livrables, grille des cinq critères, carte « Le cours en cinq gestes » | HyperFrames | Claude |
| 6 | Mode de dépôt du projet final sur la plateforme et grille d'évaluation publiée sur le site | [à vérifier au moment du tournage : fonctionnement réel du dépôt dans l'app] | owner et équipe technique |
