# CLAUDE.md — Karatou Academy · Production vidéo
# Cours 3 — Vibe coding : créer un site web avec l'IA, sans coder

> **Pour l'owner — mode d'emploi**
> 1. Créez un dossier vide sur votre ordinateur, par exemple `karatou-vibe-coding`.
> 2. Copiez-y ce fichier et renommez-le exactement `CLAUDE.md`.
> 3. Ouvrez Claude Code dans ce dossier (dans un terminal : `cd karatou-vibe-coding` puis `claude`).
> 4. Écrivez : **« On démarre. »**
>
> Claude vous demande d'abord le **design system de Karatou Academy**, puis vos fichiers (logo, photo, voix).
> Ensuite il produit les vidéos **une par une** et s'arrête à chaque validation. Pour reprendre plus tard,
> écrivez « On continue. » : l'avancement est noté dans `PROGRESS.md`.

| | |
|---|---|
| Format | Filmé — face caméra, captures d'écran et motion graphics |
| Owner | Aminou Laouali Abdou |
| Vidéos | 5 vidéos · 4 à 6:30 min (≈ 25 min au total) chacune |
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
livraison/vibe-coding/<id>/      fichiers livrés · livraison/vibe-coding/INTEGRATION.md
```

`<id>` est l'identifiant de la leçon (`vc1`, `vc2`…). Langues : `fr`, `en`, `ha`, `dje`.

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

- Master **1920 × 1080, 30 images/s, 16:9**. Une vidéo par leçon. Durée : 4 à 6:30 min (≈ 25 min au total).
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

### 9.2 Nommage et contenu de `livraison/vibe-coding/<id>/`

`vibe-coding_<id>_<langue>_v<n>.mp4` · `…-360.mp4` · `….srt` · `….vtt` · `…_cover.jpg` (1920 × 1080, qualité 85,
première image stable de B1) · `…_transcript.md` (un titre par temps, texte dit + actions à l'écran entre
crochets) · `RECETTE.md`.

### 9.3 Mise en ligne

Chaîne YouTube **Karatou Academy**, vidéos **non répertoriées**, une vidéo par langue, sous-titres `.srt` ajoutés
comme piste. Titre : « Karatou Academy — Vibe coding : créer un site web avec l'IA, sans coder — Leçon N : <titre> (<LANGUE>) ». Le site lit des **URL
d'intégration** : `https://www.youtube.com/embed/<ID>` (jamais `watch?v=` ni `youtu.be/`). Teste chaque URL dans un
navigateur avant de la consigner.

### 9.4 Intégration au site — `livraison/vibe-coding/INTEGRATION.md`

Le site lit, pour chaque leçon, un champ `video: { fr, en, ha }` dans les fichiers TypeScript du dépôt
`karatou-academy-app` (registre `authoredLessons`). Chaque leçon y a aussi un texte (objectif, quatre sections,
exemple, exercice, quiz de cinq questions, réflexion, glossaire), rédigé par l'équipe avec le skill
`karatou-course-creator`, et des lignes Supabase (module, leçons) pour la progression et les certificats.

Ton rôle : tenir `INTEGRATION.md` à jour, leçon par leçon : module `vibe-coding`, id, titre, promesse (objectif), cas
réel (exemple), exercice (titre et étapes), carte de rappel, quiz, marques citées, URL FR / EN / HA, et URL DJE
« en attente ». Ce fichier est remis à l'équipe technique ; tu ne modifies pas le dépôt du site.

### 9.5 Corrections après publication

Une URL publiée est figée. Pour corriger : nouvelle version `v2` → mise en ligne → nouvelle URL testée →
`INTEGRATION.md` mis à jour → l'équipe technique remplace l'URL → l'ancienne vidéo est rendue privée, jamais
supprimée. Consigne chaque version dans le journal de `PROGRESS.md`.

## 10. `PROGRESS.md` — modèle

```markdown
# PROGRESS — Cours 3 · Vibe coding : créer un site web avec l'IA, sans coder
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
| Numéro | 3 |
| Titre | Vibe coding : créer un site web avec l'IA, sans coder |
| Format | Filmé (humain face caméra + captures + motion graphics) |
| Owner / présentateur | Aminou — Aminou Laouali Abdou ; titre exact à confirmer au premier lancement |
| Rubrique | Culture numérique |
| Public | Commerçants, artisans, étudiants, jeunes entrepreneurs et agents d'ONG francophones (Niger, Afrique de l'Ouest), sans aucune formation en programmation, qui veulent un site pour leur activité et savent utiliser un navigateur et un téléphone |
| Slug du module (provisoire) | `vibe-coding` |
| Préfixe des leçons | `vc` (ex. `vc1` … `vc5`) |
| Nombre de vidéos | 5 (dont la dernière = projet final certifiant) |
| Durée par vidéo | 4:00 à 6:30 (cibles : vc1 4:00 · vc2 4:30 · vc3 6:00 · vc4 6:30 · vc5 4:00 ; ≈ 25 min au total) |
| Langues | FR (tournage, référence) · EN · HA · DJE |
| Prérequis | Une adresse e-mail ; un compte gratuit Canva et un compte gratuit Lovable ; un assistant conversationnel gratuit (Claude ou Gemini) ; de préférence un ordinateur avec un navigateur récent, et un téléphone pour vérifier le site. Aucune connaissance en programmation. |
| Promesse du cours | Vous saurez décrire votre site à une IA, le construire avec Canva ou Lovable, le vérifier sur téléphone et le publier. |
| Positionnement | Premier cours de la série vibe coding (niveau 1 : un site web). Le niveau 2 portera sur les applications : comptes, données, base de données (Replit y est approfondi). Ce cours ne connecte donc ni base de données ni clé. Il ne refait pas le cours de consignes du module `intelligence-artificielle` : ici, la consigne sert à construire. Pour aller plus loin : cours 10 (sécurité des comptes), cours 4 (lancer une activité). |
| Fil rouge | **Hadiza**, couturière à Maradi, veut un site pour son atelier « Hadiza Couture » ; ses clientes la trouvent aujourd'hui sur WhatsApp. Elle choisit son site (vc1), écrit sa fiche avec l'IA (vc2), la colle dans Canva (vc3) puis dans Lovable (vc4) pour comparer les deux résultats, puis vérifie et publie (vc5). Toutes ses données sont fictives ; numéro affiché : `+227 00 00 00 00`. |
| Marques citées | Canva (Canva Code), Lovable, Bolt, Replit, Claude, Gemini, WhatsApp. |

## 2.2 Ce que l'apprenant saura faire

- Expliquer le vibe coding : vous décrivez, l'IA construit, vous vérifiez et vous corrigez.
- Choisir l'outil adapté à son site : Canva pour un site simple, Lovable ou Bolt pour un site plus riche.
- Écrire avec l'IA la fiche de son site à partir de cinq questions : qui, quoi, sections, contenu réel, style.
- Créer et publier un site d'une page avec Canva Code, en corrigeant une demande à la fois.
- Créer avec Lovable un site à plusieurs sections avec un formulaire de commande, vérifié en vue téléphone.
- Vérifier son site publié sur téléphone avec une check-list, puis présenter le lien pour le projet final.

## 2.3 Plan du cours

| Leçon | Id | Titre | Promesse (objectif) | Cas réel (B1) | Démo (B4) | Durée cible |
|---|---|---|---|---|---|---|
| 1 | `vc1` | Le vibe coding : vous décrivez, l'IA construit | Savoir ce qu'est le vibe coding et quel outil choisir pour votre premier site | Hadiza, couturière à Maradi, n'a pas de site : un développeur coûte trop cher, apprendre à coder prend trop de temps | Panorama à l'écran des pages d'accueil de Canva (rubrique Code), Lovable, Bolt et Replit | 4:00 |
| 2 | `vc2` | Avant d'ouvrir l'outil : la fiche de votre site | Savoir écrire la fiche qui fait réussir votre site du premier coup | « Fais-moi un site pour mon atelier » : l'IA devine, et elle devine mal | Claude (ou Gemini) interviewe Hadiza question par question → fiche finale prête à coller | 4:30 |
| 3 | `vc3` | Démo Canva : votre site en quelques minutes | Savoir créer et publier un site gratuit avec Canva, à partir de votre fiche | Hadiza a sa fiche : que va en faire Canva ? | Canva Code : fiche collée → génération → une correction par la parole → aperçu → publication → lien ouvert | 6:00 |
| 4 | `vc4` | Démo Lovable : un site plus riche, avec formulaire | Savoir créer avec Lovable un site à plusieurs sections, avec un formulaire de commande | Hadiza veut que ses clientes envoient leurs mesures par un formulaire | Lovable : fiche + formulaire → plan → construction → vue téléphone → deux corrections → test du formulaire | 6:30 |
| 5 | `vc5` | Projet final : corriger, publier, partager | Savoir publier votre site, le vérifier et le présenter pour obtenir votre certificat | Avant d'envoyer son site à ses clientes, Hadiza fait trois vérifications | Lovable → Publier → lien ouvert sur un téléphone → check-list en quatre questions | 4:00 |

## 2.4 Plan de tournage idéal

### Matériel et réglages

- **A-cam** : téléphone récent sur trépied (objectif principal, jamais l'ultra grand-angle) ou hybride. 16:9, 1080p minimum (4K si possible). Exposition, mise au point et balance des blancs verrouillées ; HDR, mode portrait et stabilisation désactivés. Mode avion.
- **B-cam** (optionnelle) : second téléphone à 30–45°, plan taille, mêmes réglages. Elle sert aux questions de consolidation (B5) et à masquer les coupes.
- **Son** : micro-cravate ou micro proche ; enregistrement de secours sur un second appareil. **Un clap des mains au début de chaque prise** (synchro A-cam, B-cam, micro, écran).
- **Lumière** : deux panneaux LED avec diffuseur, même température de couleur ; lumière face au présentateur. Essai de 10 s pour vérifier l'absence de scintillement.
- **Écran** : un ordinateur, enregistrement 1920 × 1080, curseur visible. Le téléphone de démonstration pour la vidéo 5 (insert filmé ou miroir d'écran).
- **Énergie et réseau** : batterie externe, onduleur pour l'ordinateur et la box ; partage de connexion 4G en secours.
- **Dépôt des rushes pour HyperFrames** : `lecons/L0N/rushes/camA-<n>.mp4` (face caméra) et `lecons/L0N/rushes/ecran-<n>.mp4` (écran), N = numéro de la vidéo (1 à 5).

### Décor, lumière, son

- **Décor « atelier de couture »** cohérent avec le fil rouge : derrière Aminou, à 1,5–2 m, quelques pagnes pliés ou un rouleau de tissu, un mètre ruban, une plante. Un ordinateur portable fermé ou affichant une image neutre (logo masqué). Couleurs Karatou par petites touches (charte en Partie 1). Aucun logo de marque.
- **Lumière** : principale face au présentateur, un peu au-dessus des yeux ; fond calme, sans contre-jour de fenêtre.
- **Son** : pièce calme et meublée ; ventilateur et climatisation coupés pendant les prises ; téléphones en silencieux ; éviter les heures de forte circulation et les appels à la prière.

### Cadrages

- **A-cam** : plan poitrine 16:9, regard caméra, visage dans le tiers haut. Le bas du cadre reste libre : il est réservé aux sous-titres. Même côté du cadre pendant tout le cours, pour laisser la place aux incrustations.
- **B-cam** : plan taille de trois quarts, pour les questions de B5.
- **Inserts** (5–8 s, en fin de session) : mains qui collent la fiche au clavier ; pouce qui fait défiler le site sur le téléphone ; doigt qui touche le bouton « Commander sur WhatsApp » ; mètre ruban et tissu (couverture pour le fil rouge). On ne filme jamais un écran d'ordinateur à la caméra pour le lire : les écrans passent par les captures (type A). Seule exception : le téléphone de la vidéo 5, en insert, si le miroir d'écran n'est pas possible.

### Captures d'écran

- **Navigateur propre** : profil Chrome dédié, sans favoris, sans extensions visibles, notifications coupées, aucun onglet personnel. **Zoom du navigateur à 125 %.** Thème clair.
- **Comptes prêts et connectés** avant d'enregistrer : Canva (compte Karatou), Lovable, Claude ou Gemini. Dans Lovable, on part de la page d'accueil, jamais d'un projet vide déjà ouvert.
- **À masquer** : le solde de crédits ou le plan d'abonnement s'ils s'affichent. Sinon, flou au montage.
- **Données** : uniquement fictives. Atelier « Hadiza Couture », Maradi ; numéro `+227 00 00 00 00` ; aucune vraie donnée personnelle dans le formulaire de test (vidéo 4).
- **Pas de tarif à l'écran**, pas de numéro de version, pas de page de prix.
- **Note pour l'owner** : l'abonnement Canva ONG de Karatou couvre une équipe restreinte ; ce n'est pas un moyen de donner un compte à chaque apprenant. La création de site fonctionne en version gratuite. Ne promettez aucun accès offert dans les vidéos tant que le dispositif n'est pas défini.
- Liste détaillée par leçon : section 2.6.

### Organisation du tournage

Une seule session d'environ une heure, plus dix minutes de préparation.

1. **0:00–0:15 — Toutes les parties face caméra** (CAM), vidéos 1 à 5 à la suite : même lumière, même tenue.
2. **0:15–0:20 — Vidéo 1, écran** : tour rapide des quatre pages d'accueil.
3. **0:20–0:28 — Vidéo 2, écran** : la fiche générée dans Claude ou Gemini. **Garder la fiche** : elle sert ensuite.
4. **0:28–0:40 — Vidéo 3, écran** : Canva, en parlant pendant les gestes.
5. **0:40–0:55 — Vidéos 4 et 5, écran** : Lovable, puis correction et publication, puis le site sur téléphone.
6. **0:55–1:00 — Prises de secours** : relire à voix haute la carte de rappel de chaque vidéo.

- **Pendant les démos, parler en faisant.** Les attentes de génération seront accélérées au montage : ne pas meubler, dire simplement « L'IA construit, on attend » et laisser tourner.
- **Le présentateur improvise un peu** à partir des points des scripts : les scripts ci-dessous sont la référence. Le sens et les phrases clés (promesse, carte de rappel, dernière phrase) restent mot pour mot.
- **À ne jamais dire** : un prix, une limite chiffrée, un numéro de version de modèle, aucun superlatif sur un outil. On dit « version gratuite », « version payante ».
- **Prises de sécurité** : une seconde prise des promesses et des dernières phrases ; 1 s de silence avant et après chaque bloc ; annoncer le bloc (« vc3, accroche, prise 2 ») puis clap.
- **Ton constant** : calme, direct, chaleureux ; même distance au micro ; tenue unie, sans rayures fines ni logo.
- **Langues** : ouvertures et conclusions EN, HA, DJE juste après la session, même tenue, même décor (environ vingt minutes).

### Checklist du jour J

- [ ] Batteries chargées, batterie externe, onduleur ; stockage libre sur les caméras.
- [ ] Mode avion sur les caméras ; notifications coupées sur l'ordinateur et le téléphone de démonstration.
- [ ] Micro testé ; clap prévu à chaque prise ; ventilateur et climatisation coupés.
- [ ] Cadrage vérifié : visage dans le tiers haut, bas du cadre libre.
- [ ] Profil Chrome dédié ouvert, zoom à 125 %, aucun onglet personnel, rien de personnel sur le bureau.
- [ ] Comptes Canva, Lovable, Claude ou Gemini connectés ; Lovable sur sa page d'accueil.
- [ ] Solde de crédits et plan d'abonnement masqués ou repérés pour le flou.
- [ ] Réponses fictives d'Hadiza prêtes (vidéo 2) ; faux numéro `+227 00 00 00 00`.
- [ ] Mentions « [à vérifier au moment du tournage] » contrôlées dans l'interface du jour (libellés, version gratuite, publication gratuite).
- [ ] Téléphone de démonstration prêt pour la vidéo 5 (miroir d'écran ou insert).
- [ ] Eau, poudre matifiante.

## 2.5 Les leçons

### Leçon 1 — Le vibe coding : vous décrivez, l'IA construit (`vc1`)

#### Fiche

- **Promesse** : « À la fin de cette vidéo, vous saurez ce qu'est le vibe coding et quel outil choisir pour créer votre premier site. »
- **Cas réel (B1 → B6)** : Hadiza, couturière à Maradi. Ses clientes la trouvent sur WhatsApp, mais elle n'a pas de site. Un développeur coûte trop cher ; apprendre à coder prend trop de temps. Enjeu : peut-elle créer son site en le décrivant, et avec quel outil ? En B6, la réponse est posée : pour une page de présentation de son atelier, Canva suffit ; la prochaine vidéo prépare la fiche de son site.
- **Unités de notion (B3)** : 1. Vous décrivez, l'IA construit — Vous dites ce que vous voulez avec vos mots ; l'IA écrit le code ; vous regardez et vous corrigez en parlant. · 2. Canva : le plus simple pour commencer — Connu pour les affiches, il crée aussi des sites à partir d'une simple description. · 3. Lovable et Bolt : des sites plus riches — Formulaires, pages multiples ; Bolt fait le même travail que Lovable et marche surtout sur ordinateur. · 4. Replit : vers les vraies applications — Il va plus loin ; on le verra dans un prochain cours.
- **Démo (B4)** : pas de construction dans cette vidéo (elle arrive en vidéo 3). Le panorama à l'écran tient lieu de démonstration. 1. Page d'accueil de canva.com, rubrique Code [à vérifier au moment du tournage : libellé exact]. 2. lovable.dev. 3. bolt.new. 4. replit.com. Pour chacune : 10 s immobile, puis un léger défilement. Pas de connexion, pas de tarif à l'écran. Résultat attendu : l'apprenant reconnaît les quatre outils et sait lequel ouvrir pour un site simple.
- **Consolidation (B5)** : prédiction. « Pour une page de présentation de son atelier, Hadiza a-t-elle besoin de Lovable ? » [2 s de silence] Réponse : non, Canva suffit. Lovable sert quand on veut plus : un formulaire, plusieurs pages, une base de données.
- **Consigne à copier** : pas de consigne à construire dans cette vidéo ; la phrase de l'exercice sert de point de départ pour la vidéo 2.

```text
Mon site sera pour [qui : mes clients, mon association, mon école…].
Il servira à [ce que les visiteurs doivent pouvoir faire : voir mes services, me contacter, commander…].
```

- **Exercice** : « Choisissez le site que vous allez créer » — 1. Pensez à une personne ou à une activité réelle : la vôtre, celle d'un proche, d'une association. 2. Écrivez une phrase : pour qui est le site, et pour quoi faire. 3. Décidez : site simple (Canva) ou site riche (Lovable) ? Gardez cette phrase pour la vidéo 2.
- **Carte de rappel** : 1. Vous décrivez, l'IA construit, vous corrigez. 2. Site simple : Canva. 3. Site riche : Lovable ou Bolt.
- **Quiz** :
  1. Qu'est-ce que le vibe coding ? — A) Apprendre un langage de programmation pas à pas B) Décrire ce que vous voulez avec vos mots, pendant que l'IA écrit le code C) Copier le code d'un autre site D) Acheter un site tout fait — **Réponse : B**
  2. Le premier résultat de l'IA ne vous convient pas. Que faites-vous ? — A) Vous abandonnez B) Vous attendez une mise à jour de l'outil C) Vous regardez le résultat et vous corrigez en décrivant ce que vous voulez D) Vous recommencez avec exactement la même phrase — **Réponse : C**
  3. Quel outil choisir pour une simple page de présentation d'un atelier ? — A) Canva B) Replit C) Un tableur D) Aucun, il faut un développeur — **Réponse : A**
  4. Hadiza veut que ses clientes remplissent un formulaire de commande. Quel type d'outil lui faut-il ? — A) Un outil d'affiches seulement B) Un appareil photo C) Un outil pour sites plus riches, comme Lovable ou Bolt D) Une imprimante — **Réponse : C**
  5. L'IA a construit le site. Qui décide s'il est prêt ? — A) L'IA B) L'outil C) Personne, c'est automatique D) Vous — **Réponse : D**
- **Marques citées** : Canva, Lovable, Bolt, Replit, WhatsApp.

#### Script

Durée estimée : 4:00 · Mots dits : ≈ 460 (format court : environ 100 s de captures avec temps immobiles)

**[B1 — Accroche · 0:00–0:25]**

**[E · SITUATION]** « Maradi — Hadiza, couturière » — VO : Hadiza est couturière à Maradi.

**[F · CAM A]** Ses clientes la trouvent sur WhatsApp. Mais elle n'a pas de site. À la fin de cette vidéo, vous saurez ce qu'est le vibe coding et quel outil choisir pour créer votre premier site. Un développeur ? Trop cher pour elle. Apprendre à coder ? Trop long. Aujourd'hui, elle peut décrire son site en français. Et l'IA le construit.

[PAUSE 1 s]

**[B2 — Cadrage · 0:25–1:00]**

**[F · CAM A]** Le vibe coding, c'est ça. Vous décrivez ce que vous voulez, avec vos mots. L'IA écrit le code à votre place. Le code, c'est le texte qui fait fonctionner un site. Vous n'avez pas besoin de le lire.

**[B · CARTE]** « Vibe coding = vous décrivez, l'IA code » — VO : Vous, vous regardez le résultat. Et vous corrigez en parlant. Comme vous le feriez avec une apprentie : « Plus grand, ici. Change cette couleur. »

**[F · CAM A]** Attention : ce n'est pas de la magie. L'IA se trompe parfois. C'est vous qui vérifiez. C'est vous qui décidez.

[PAUSE 1 s]

**[B3/B4 — Notion et panorama des outils · 1:00–2:40]**

**[C · SCHÉMA]** « Quatre outils · Canva · Lovable · Bolt · Replit » — VO : Voyons quatre outils, un par un.

**[A · ÉCRAN]** Canva. Vous connaissez Canva pour les affiches. Il crée aussi des sites, à partir d'une simple description. Cela se passe dans la rubrique Code. Vous écrivez ce que vous voulez, et la page apparaît. Pour commencer, c'est le plus simple.

**[A · ÉCRAN]** Lovable. Lovable crée des sites et des applications plus riches. Par exemple, un formulaire de commande, ou plusieurs pages. Vous lui parlez, et il construit. Il demande un peu plus de précision, mais il va plus loin.

**[A · ÉCRAN]** Bolt. Bolt fait le même travail que Lovable. Il marche surtout sur ordinateur. C'est une autre porte vers le même résultat.

**[A · ÉCRAN]** Replit. Replit va plus loin, vers les vraies applications. Avec des comptes, des données, des utilisateurs. On le verra dans un prochain cours.

**[B · CARTE]** « Canva : site simple · Lovable : site riche » — VO : Retenez ce tableau. Pour un site simple, Canva. Pour un site riche, Lovable. Ou Bolt, qui fait le même travail.

[PAUSE 1 s]

**[B5 — Consolidation · 2:40–3:20]**

**[F · CAM B]** Une question pour vous. Hadiza veut une page qui présente son atelier. Ses tenues, ses services, son contact. A-t-elle besoin de Lovable ?

**[SILENCE 2 s]**

**[F · CAM B]** Non. Canva suffit. Lovable sert quand on veut plus. Un formulaire, plusieurs pages, une base de données. Commencez simple. Un site simple, en ligne, vaut mieux qu'un grand projet jamais fini. Vous pourrez toujours aller plus loin.

[PAUSE 1 s]

**[B6 — Clôture · 3:20–4:00]**

**[B · CARTE DE RAPPEL]** « 1. Vous décrivez, l'IA construit, vous corrigez. » « 2. Site simple : Canva. » « 3. Site riche : Lovable ou Bolt. » — VO : Trois points à retenir. Vous décrivez, l'IA construit, vous corrigez. Pour un site simple, Canva. Pour un site riche, Lovable ou Bolt.

**[F · CAM A]** Hadiza a fait son choix : une page pour son atelier, avec Canva. Dans la prochaine vidéo, on prépare la fiche de son site. Et vous ? Pour qui sera votre site, et pour quoi faire ? Écrivez-le en une phrase. Votre exercice : choisissez le site que vous allez créer.

#### Liste des plans

| # | Type | Cadre / source | Contenu | Durée | Notes |
|---|---|---|---|---|---|
| 1 | E | Photo mise en scène ou illustration | Hadiza dans son atelier à Maradi, tissu et machine à coudre ; surtitre « Maradi — Hadiza, couturière » | 4 s | B1. Pas de faux écran WhatsApp |
| 2 | F | CAM A, plan poitrine | Clientes sur WhatsApp, promesse (avant 0:12), « Trop cher ? Trop long ? » | 21 s | B1 |
| 3 | F | CAM A | Définition du vibe coding | 12 s | B2 |
| 4 | B | Carte | « Vibe coding = vous décrivez, l'IA code » | 6 s | B2 |
| 5 | F | CAM A | « Ce n'est pas de la magie… c'est vous qui décidez » | 10 s | B2 |
| 6 | C | Schéma | Quatre cartes-noms en texte : Canva · Lovable · Bolt · Replit (pas de logo tiers) | 4 s | B3 |
| 7 | A | canva.com, rubrique Code | 10 s immobile + léger défilement | 22 s | B3. Sans connexion, sans tarif |
| 8 | A | lovable.dev | 10 s immobile + léger défilement | 20 s | B3 |
| 9 | A | bolt.new | 10 s immobile + léger défilement | 18 s | B3 |
| 10 | A | replit.com | 10 s immobile + léger défilement | 20 s | B3 |
| 11 | B | Carte tableau | « Canva : site simple · Lovable : site riche » | 12 s | B3 |
| 12 | F | CAM B | Question sur Hadiza, 2 s de silence, réponse | 38 s | B5. Respiration gardée avant « Non » |
| 13 | B | Carte de rappel | Trois points révélés un par un | 15 s | B6 |
| 14 | F | CAM A | Choix d'Hadiza, annonce de la vidéo 2, exercice | 22 s | B6 |
| 15 | B | Carte mentions légales | Texte des marques (voir Montage idéal) | 3 s | Fin de vidéo |

#### Montage idéal

| Temps | Timecode cible | Image principale | Habillage (motion graphics) | Texte à l'écran | Son | Transition |
|---|---|---|---|---|---|---|
| B1 | 0:00–0:25 | E (Hadiza), puis F CAM A | Surtitre persona ; promesse en incrustation discrète sur le côté libre | « Maradi — Hadiza, couturière » ; promesse | voix seule | coupe |
| B2 | 0:25–1:00 | F CAM A ; B (carte définition) ; F CAM A | Carte typographique ; flèche « décrire → l'IA code → corriger » | « Vibe coding = vous décrivez, l'IA code » | voix seule | coupe |
| B3/B4 | 1:00–2:40 | C (4 noms), A (4 pages d'accueil), B (tableau) | Nom de l'outil en surtitre sur chaque capture ; indicateur 1/4 → 4/4 ; tableau à deux lignes | « Canva », « Lovable », « Bolt », « Replit » ; « Canva : site simple / Lovable : site riche » | voix ; nappe discrète sous les captures (Partie 1) | coupe ; glissement entre outils |
| B5 | 2:40–3:20 | F CAM B | Question en surtitre pendant le silence | « Hadiza a-t-elle besoin de Lovable ? » | voix ; silence total 2 s | coupe |
| B6 | 3:20–4:00 | B (carte de rappel), F CAM A, B (mentions) | Points révélés au rythme de la voix ; dernière phrase en incrustation | 3 points ; « Exercice : choisissez le site que vous allez créer » | voix seule | coupe, mentions légales 3 s, puis carte de clôture (Partie 1) |

**Notes de montage** : couper le plan E dès « Maradi » ; la promesse doit tomber avant 0:12. Changer d'image toutes les 4 à 8 s sans agitation. Sur chaque page d'accueil : garder les 10 s immobiles en entier, puis le défilement ; zoom ≤ 6 % sur la zone de saisie de Canva et de Lovable. Aucun logo tiers en carte : noms en texte seulement. Flouter tout tarif ou bandeau de prix visible. Couper les hésitations et les redites ; garder la respiration avant « Non. Canva suffit. » **Carte de rappel** à 3:20, avant la dernière phrase face caméra. **Mentions légales** (3 s) après la dernière phrase, avant la carte de clôture : « Canva, Lovable, Bolt, Replit, Claude et Gemini sont des marques de leurs détenteurs. Karatou Academy n'est affiliée à aucun de ces éditeurs. » + mois et année (ajouter WhatsApp, cité dans la vidéo). Plans de couverture : inserts tissu et mètre ruban, B-cam.

#### Versions EN / HA / DJE

- **À re-filmer dans la langue** (≈ 30 s) : ouverture (plan 2) — « Ses clientes la trouvent sur WhatsApp. Mais elle n'a pas de site. À la fin de cette vidéo, vous saurez ce qu'est le vibe coding et quel outil choisir pour créer votre premier site. » ; conclusion (plan 14) — « Hadiza a fait son choix… Votre exercice : choisissez le site que vous allez créer. »
- **Doublé en voix clonée** : B2 (plans 3 et 5) → couverts par la carte « Vibe coding = vous décrivez, l'IA code » prolongée et un insert tissu ; B5 (plan 12) → carte question, puis tableau « Canva : site simple » ; fin de B1 (« Un développeur ? ») → plan E prolongé.
- **Notes d'adaptation** : garder « vibe coding » en anglais dans les trois langues ; en HA et DJE, le gloser par une périphrase validée par un locuteur (« on décrit le site avec des mots, l'IA écrit le code »). « Une autre porte vers le même résultat » : image simple, à garder ou remplacer par « fait la même chose ». Les noms d'outils ne se traduisent pas.

### Leçon 2 — Avant d'ouvrir l'outil : la fiche de votre site (`vc2`)

#### Fiche

- **Promesse** : « À la fin de cette vidéo, vous saurez écrire la fiche qui fait réussir votre site du premier coup. »
- **Cas réel (B1 → B6)** : Hadiza a choisi son site : une page pour « Hadiza Couture ». Si elle écrit seulement « fais-moi un site pour mon atelier », l'IA devine, et elle devine mal. Enjeu : décrire son site avant d'ouvrir l'outil. En B6, Hadiza a sa fiche finale, qu'elle collera dans Canva (vidéo 3) puis dans Lovable (vidéo 4).
- **Unités de notion (B3)** : 1. Pour qui ? — Les clientes d'Hadiza, sur téléphone. · 2. Pour faire quoi ? — Voir les modèles, commander sur WhatsApp. · 3. Quelles sections ? — Accueil, services, galerie, avis, contact. · 4. Quel contenu réel, quel style ? — Textes, photos, numéro, horaires ; couleurs et ambiance.
- **Démo (B4)** : Claude (ou Gemini), version gratuite, navigateur, compte de démonstration. 1. Nouvelle conversation ; coller la consigne ci-dessous. 2. Répondre à trois ou quatre questions comme Hadiza (réponses fictives) : « Atelier Hadiza Couture, Maradi » · « tenues de mariage, pagnes cousus sur mesure, retouches » · « commander sur WhatsApp » · « tons chauds, élégant ». Numéro : `+227 00 00 00 00` (jamais un vrai numéro). 3. Obtenir la fiche finale. 4. La relire : les cinq questions ont-elles une réponse ? 5. La copier dans un fichier texte : elle sert en vidéos 3 et 4. Résultat attendu : une fiche courte, prête à coller dans Canva ou Lovable. Adapter la voix off au déroulé réel (nombre et ordre des questions de l'IA).
- **Consolidation (B5)** : contre-exemple. À l'écran, côte à côte : A « Fais-moi un site de couture » / B la fiche d'Hadiza. « Laquelle donnera un site qui ressemble vraiment à Hadiza ? » [2 s] Réponse : la B. La A laisse l'IA tout inventer : le nom, les services, le style.
- **Consigne à copier** :

```text
Je veux créer un site web simple avec un outil d'IA. Pose-moi une question à la fois pour remplir une fiche :
pour qui est le site, ce qu'il doit permettre de faire, les sections, le contenu réel (textes, contact,
horaires), le style. Quand tu as tout, écris la fiche finale en moins de 200 mots, prête à être collée dans
un outil comme Canva ou Lovable.
```

- **Exercice** : « Écrivez la fiche de votre site avec l'IA » — 1. Copiez la consigne dans Claude ou Gemini (version gratuite). 2. Répondez aux questions une par une, avec votre phrase de la vidéo 1 comme point de départ. 3. Relisez la fiche : qui, quoi, sections, contenu, style. Gardez-la pour la vidéo 3.
- **Carte de rappel** : 1. La demande compte plus que l'outil. 2. Cinq questions : qui, quoi, sections, contenu, style. 3. Faites-vous interviewer par l'IA.
- **Quiz** :
  1. Qu'est-ce qui fait le plus réussir un site créé avec l'IA ? — A) La demande que vous écrivez B) L'outil le plus connu C) La vitesse de votre connexion D) Le nombre de couleurs — **Réponse : A**
  2. Laquelle de ces questions fait partie de la fiche du site ? — A) Quel serveur utiliser ? B) Quel langage de programmation ? C) Quelles sections ? D) Combien de lignes de code ? — **Réponse : C**
  3. « Tons chauds, élégant » répond à quelle question de la fiche ? — A) Pour qui ? B) Quel style ? C) Pour faire quoi ? D) Quelles sections ? — **Réponse : B**
  4. Pourquoi demander à l'IA de vous interviewer, une question à la fois ? — A) Pour qu'elle écrive le site sans vous B) Pour ne rien oublier et répondre avec précision C) Pour aller plus vite en sautant des étapes D) Parce que c'est obligatoire — **Réponse : B**
  5. Quel numéro Aminou utilise-t-il dans la démonstration ? — A) Le sien B) Celui d'une vraie couturière C) Un faux numéro, `+227 00 00 00 00` D) Aucun, le site n'a pas de contact — **Réponse : C**
- **Marques citées** : Claude, Gemini, Canva, Lovable, WhatsApp.

#### Script

Durée estimée : 4:30 · Mots dits : ≈ 490 (format court ; réponses de l'IA accélérées sans voix)

**[B1 — Accroche · 0:00–0:25]**

**[F · CAM A]** La dernière fois, vous avez choisi votre site. À la fin de cette vidéo, vous saurez écrire la fiche qui fait réussir votre site du premier coup. Pourquoi une fiche ? Si vous écrivez juste « fais-moi un site pour mon atelier », l'IA va deviner. Et elle devine mal.

[PAUSE 1 s]

**[B2 — Cadrage · 0:25–0:50]**

**[F · CAM A]** Le secret n'est pas l'outil. C'est la demande. Une bonne demande tient sur une page. Pas besoin d'un gros document. C'est la fiche de votre site. Elle répond à cinq questions. Prenons celles d'Hadiza.

[PAUSE 1 s]

**[B3 — Notion : les cinq questions · 0:50–1:50]**

**[B · CARTE]** « 1. Pour qui ? » — VO : Première question : pour qui ? Pour les clientes d'Hadiza. Et elles regardent sur leur téléphone.

**[B · CARTE]** « 2. Pour faire quoi ? » — VO : Deuxième question : pour faire quoi ? Voir ses modèles, et commander sur WhatsApp.

**[B · CARTE]** « 3. Quelles sections ? » — VO : Troisième : quelles sections ? Une section, c'est une partie de la page. Ici : accueil, services, galerie, avis, contact.

**[B · CARTE]** « 4. Quel contenu réel ? » — VO : Quatrième : quel contenu réel ? Les vrais textes, les photos, le numéro, les horaires. Sinon, l'IA invente.

**[B · CARTE]** « 5. Quel style ? » — VO : Cinquième : quel style ? Les couleurs, l'ambiance. Pour Hadiza : des tons chauds, un style élégant.

[PAUSE 1 s]

**[B4 — Démo : la fiche avec l'IA · 1:50–3:20]**

**[A · ÉCRAN]** Je n'écris pas la fiche seul. Je demande à Claude de m'interviewer. Gemini fait aussi l'affaire. Je colle cette consigne.

**[G · CONSIGNE]** « Je veux créer un site web simple avec un outil d'IA. Pose-moi une question à la fois pour remplir une fiche : pour qui est le site, ce qu'il doit permettre de faire, les sections, le contenu réel (textes, contact, horaires), le style. Quand tu as tout, écris la fiche finale en moins de 200 mots, prête à être collée dans un outil comme Canva ou Lovable. » — VO : Mettez la vidéo en pause pour la recopier.

**[A · ÉCRAN]** Claude pose sa première question. Je réponds comme Hadiza : « Atelier Hadiza Couture, à Maradi. » Question suivante. « Tenues de mariage, pagnes cousus sur mesure, retouches. » Ensuite : « Les clientes doivent pouvoir commander sur WhatsApp. » Et le style : « Tons chauds, élégant. » Pour le contact, je mets un faux numéro : c'est une démonstration. Voici la fiche finale. Je la relis. Pour qui, pour quoi, sections, contenu, style : tout y est. Si une réponse est fausse, je la corrige tout de suite dans la conversation. Je copie la fiche et je la garde. Elle servira dans Canva, puis dans Lovable.

[PAUSE 1 s]

**[B5 — Consolidation · 3:20–3:55]**

**[B · CARTE]** « A — Fais-moi un site de couture · B — La fiche d'Hadiza » — VO : Comparez ces deux demandes. Laquelle donnera un site qui ressemble vraiment à Hadiza ?

**[SILENCE 2 s]**

**[F · CAM B]** La B, bien sûr. Avec la A, l'IA invente tout : le nom, les services, les couleurs. Avec la B, elle construit le site d'Hadiza. Une bonne fiche, c'est moins de corrections ensuite.

[PAUSE 1 s]

**[B6 — Clôture · 3:55–4:30]**

**[B · CARTE DE RAPPEL]** « 1. La demande compte plus que l'outil. » « 2. Cinq questions : qui, quoi, sections, contenu, style. » « 3. Faites-vous interviewer par l'IA. » — VO : À retenir. La demande compte plus que l'outil. Cinq questions : qui, quoi, sections, contenu, style. Et faites-vous interviewer par l'IA.

**[F · CAM A]** Hadiza a sa fiche. Dans la prochaine vidéo, on la colle dans Canva. Votre exercice : écrivez la fiche de votre site avec l'IA.

#### Liste des plans

| # | Type | Cadre / source | Contenu | Durée | Notes |
|---|---|---|---|---|---|
| 1 | F | CAM A | Rappel vidéo 1, promesse, « l'IA devine mal » | 25 s | B1. Promesse avant 0:12 |
| 2 | F | CAM A | « Le secret n'est pas l'outil… cinq questions » | 18 s | B2 |
| 3 | B | Cinq cartes | « 1. Pour qui ? » … « 5. Quel style ? », avec l'exemple d'Hadiza en ligne 2 | 60 s | B3. Une carte par question, ≈ 12 s chacune |
| 4 | A | Claude (ou Gemini), navigateur | Nouvelle conversation, collage de la consigne | 10 s | B4 |
| 5 | G | Carte de consigne | Consigne exacte | 14 s | B4. Fond clair, lisible sur téléphone |
| 6 | A | Claude (ou Gemini) | Questions et réponses d'Hadiza, fiche finale, relecture, copie | 60 s | B4. Réponses longues de l'IA accélérées |
| 7 | B | Carte comparaison | A « Fais-moi un site de couture » / B extrait de la fiche | 12 s | B5 |
| 8 | F | CAM B | « La B, bien sûr… » | 15 s | B5 |
| 9 | B | Carte de rappel | Trois points | 18 s | B6 |
| 10 | F | CAM A | Annonce de la vidéo 3, exercice | 10 s | B6 |
| 11 | B | Carte mentions légales | Texte des marques | 3 s | Fin de vidéo |

#### Montage idéal

| Temps | Timecode cible | Image principale | Habillage (motion graphics) | Texte à l'écran | Son | Transition |
|---|---|---|---|---|---|---|
| B1 | 0:00–0:25 | F CAM A | Citation « fais-moi un site pour mon atelier » en incrustation barrée d'une croix | Promesse ; « Fais-moi un site pour mon atelier » | voix seule | coupe |
| B2 | 0:25–0:50 | F CAM A | Mot « La demande » mis en valeur | « Le secret : la demande » | voix seule | coupe |
| B3 | 0:50–1:50 | B (5 cartes) | Compteur 1/5 → 5/5 ; la fiche se remplit ligne par ligne en vignette | Les cinq questions + réponse d'Hadiza sous chacune | voix ; nappe discrète | glissement de carte |
| B4 | 1:50–3:20 | A (Claude), G (consigne), A | Cadre sur chaque question de l'IA, puis sur chaque réponse ; coche sur les 5 rubriques de la fiche finale ; pictogramme « accéléré » | Consigne (G) ; « Accéléré » ; « Numéro fictif » sur `+227 00 00 00 00` | voix ; nappe légère pendant l'accéléré | coupe |
| B5 | 3:20–3:55 | B (A/B), F CAM B | Croix sur A, coche sur B, après le silence | « A — Fais-moi un site de couture » ; « B — La fiche d'Hadiza » | voix ; silence total 2 s | coupe |
| B6 | 3:55–4:30 | B (carte de rappel), F CAM A, B (mentions) | Points révélés un par un | 3 points ; « Exercice : écrivez la fiche de votre site avec l'IA » | voix seule | coupe, mentions légales 3 s, carte de clôture (Partie 1) |

**Notes de montage** : accélérer l'écriture des réponses de l'IA (×4 à ×8, mention « Accéléré » visible) ; garder en vitesse réelle le collage de la consigne, chaque réponse d'Hadiza et la fiche finale. Zoom ≤ 6 % sur la question en cours et sur la fiche finale. Si la fiche finale déborde, la faire défiler lentement plutôt que la réduire. Annotations une à la fois, ≥ 2,5 s, toujours doublées d'une forme. Flouter tout solde ou plan d'abonnement visible dans Claude ou Gemini. **Carte de rappel** à 3:55. **Mentions légales** (3 s) après la dernière phrase : texte standard (voir vc1) + mois et année. Plans de couverture : inserts mains au clavier, B-cam.

#### Versions EN / HA / DJE

- **À re-filmer dans la langue** (≈ 25 s) : ouverture (plan 1, deux premières phrases) et conclusion (plan 10) — « Hadiza a sa fiche… Votre exercice : écrivez la fiche de votre site avec l'IA. »
- **Doublé en voix clonée** : fin de B1 (« Si vous écrivez juste… ») → incrustation de la phrase barrée en plein écran ; B2 (plan 2) → carte « Le secret : la demande » ; B5 (plan 8) → carte A/B avec la coche sur B.
- **Notes d'adaptation** : la consigne (plan 5) est traduite intégralement dans chaque langue, et la démo garde l'interface en français : préciser en VO que la consigne marche dans toutes les langues. « Pagnes cousus sur mesure » : en EN « tailor-made wrappers / outfits » ; en HA et DJE, termes locaux du métier à valider par un locuteur. « Fiche » : en EN « site brief ».

### Leçon 3 — Démo Canva : votre site en quelques minutes (`vc3`)

#### Fiche

- **Promesse** : « À la fin de cette vidéo, vous saurez créer et publier un site gratuit avec Canva, à partir de votre fiche. »
- **Cas réel (B1 → B6)** : Hadiza a sa fiche. Que va en faire Canva ? Enjeu : obtenir une vraie page en ligne, gratuite, adaptée au téléphone, avec un bouton pour commander sur WhatsApp. En B6, le site d'Hadiza est publié et son lien s'ouvre dans un nouvel onglet.
- **Unités de notion (B3)** : 1. Canva Code : site simple, gratuit, en ligne — La fonction existe dans la version gratuite ; les utilisations de l'IA y sont limitées. · 2. Une correction à la fois — Dix changements d'un coup, l'IA en oublie la moitié. · 3. Publier, puis tester le lien — Le site n'existe pour vos clientes que quand le lien s'ouvre.
- **Démo (B4)** : Canva, compte Karatou, navigateur. 1. Page d'accueil Canva → **Code** (ou Canva AI → option Code) [à vérifier au moment du tournage : libellé et emplacement]. 2. Coller la fiche d'Hadiza et ajouter : « Crée un site d'une page, adapté au téléphone, avec un bouton "Commander sur WhatsApp". » 3. Laisser générer : « L'IA construit. On attend. » 4. Regarder le résultat et le commenter : ce qui va, ce qui ne va pas. 5. Une correction par la parole : « Remplace la couleur principale par un orange chaud et agrandis le bouton WhatsApp. » 6. Vérifier l'aperçu (version téléphone si disponible). 7. **Publier** (bouton en haut à droite) → domaine Canva gratuit → copier le lien. 8. Ouvrir le lien dans un nouvel onglet : le site est en ligne. Toute la séquence en une prise. Si une génération échoue, la garder : « Ça arrive. On reformule. » Résultat attendu : une page en tons chauds, un bouton WhatsApp bien visible, en ligne à une adresse Canva gratuite.
- **Consolidation (B5)** : prédiction. « Hadiza envoie dix changements dans le même message. Que va faire l'IA ? » [2 s] Réponse : elle en oublie une partie. Une correction à la fois, et on vérifie après chacune.
- **Consigne à copier** :

```text
[Collez ici la fiche de votre site.]
Crée un site d'une page, adapté au téléphone, avec un bouton "[Commander sur WhatsApp / Me contacter / …]".
```

- **Exercice** : « Créez et publiez votre site avec Canva » — 1. Ouvrez Canva (version gratuite), rubrique Code, et collez votre fiche avec la phrase ci-dessus. 2. Faites une seule correction à la fois, puis vérifiez l'aperçu sur téléphone. 3. Publiez, copiez le lien et ouvrez-le dans un nouvel onglet.
- **Carte de rappel** : 1. Canva Code : site simple, gratuit, en ligne. 2. Une correction à la fois. 3. Publier, puis tester le lien.
- **Quiz** :
  1. Que permet Canva Code dans sa version gratuite ? — A) Rien, il faut payer B) Créer et publier un site simple à partir d'une description C) Seulement imprimer des affiches D) Créer une application avec comptes et base de données — **Réponse : B**
  2. Pourquoi garder vos demandes à l'IA pour les vraies corrections ? — A) Parce que les utilisations de l'IA sont limitées dans la version gratuite B) Parce que l'IA se fatigue C) Parce que c'est interdit D) Parce que le site se supprime — **Réponse : A**
  3. Vous voulez changer la couleur, le titre et dix autres détails. Que faites-vous ? — A) Tout dans un seul message B) Vous recommencez le site C) Une correction à la fois, en vérifiant après chacune D) Vous ne changez rien — **Réponse : C**
  4. Après avoir cliqué sur Publier, que faites-vous ? — A) Vous fermez Canva B) Vous attendez le lendemain C) Vous supprimez le brouillon D) Vous copiez le lien et l'ouvrez dans un nouvel onglet — **Réponse : D**
  5. Une génération échoue pendant la démo. Que dit Aminou ? — A) « L'outil ne marche pas » B) « Ça arrive, on reformule » C) « Il faut un développeur » D) « Passez à un autre outil » — **Réponse : B**
- **Marques citées** : Canva (Canva Code), WhatsApp.

#### Script

Durée estimée : 6:00 · Mots dits : ≈ 510 (plus environ 60 s d'attentes accélérées et de gestes sans voix ; le présentateur complète en parlant pendant les gestes)

**[B1 — Accroche · 0:00–0:25]**

**[F · CAM A]** Vous avez votre fiche. Voyons ce que Canva en fait. À la fin de cette vidéo, vous saurez créer et publier un site gratuit avec Canva, à partir de votre fiche. Je reprends celle d'Hadiza, la couturière de Maradi.

[PAUSE 1 s]

**[B2 — Cadrage · 0:25–0:55]**

**[F · CAM A]** Une bonne nouvelle d'abord. Canva propose cette fonction dans sa version gratuite. Mais le nombre d'utilisations de l'IA y est limité. Alors gardez vos demandes pour les vraies corrections. Pas de demande au hasard.

[PAUSE 1 s]

**[B3 — Notion · 0:55–1:15]**

**[B · CARTE]** « Générer · Corriger · Publier » — VO : Le chemin tient en trois gestes. Générer le site avec votre fiche. Corriger, une demande à la fois. Puis publier, et tester le lien.

[PAUSE 1 s]

**[B4 — Démo Canva · 1:15–4:45]**

**[A · ÉCRAN]** Je suis sur la page d'accueil de Canva. Je choisis Code. Selon votre écran, cela peut passer par Canva AI. Cette zone attend ma description.

**[A · ÉCRAN]** Je colle la fiche d'Hadiza, celle de la vidéo précédente. Je ne la réécris pas : je la reprends telle quelle. Et j'ajoute une phrase.

**[G · CONSIGNE]** « [Collez ici la fiche de votre site.] Crée un site d'une page, adapté au téléphone, avec un bouton "Commander sur WhatsApp". » — VO : Une page, adaptée au téléphone, avec un bouton WhatsApp. Ses clientes commandent déjà par là.

**[A · ÉCRAN]** J'envoie. L'IA construit. On attend. Cela prend un peu de temps : c'est normal.

**[A · ÉCRAN]** Voici le résultat. Regardons ensemble. Le nom de l'atelier est là. Les services aussi : tenues de mariage, pagnes sur mesure, retouches. Le bouton WhatsApp existe. Ce qui ne va pas ? La couleur principale est trop froide pour Hadiza. Et le bouton WhatsApp est petit. On le voit mal sur un téléphone. Or c'est le bouton le plus important : c'est lui qui apporte les commandes.

**[A · ÉCRAN]** Je corrige en parlant. Une seule demande : « Remplace la couleur principale par un orange chaud et agrandis le bouton WhatsApp. » Je ne demande rien d'autre. J'envoie. On attend.

**[A · ÉCRAN]** Voilà. Les tons sont chauds. Le bouton se voit tout de suite. Je vérifie l'aperçu en version téléphone. Les textes sont lisibles. Le bouton tombe sous le pouce.

**[A · ÉCRAN]** Maintenant, je publie. Le bouton est en haut à droite. Je choisis le domaine Canva gratuit. Pas besoin d'acheter un nom de domaine pour commencer. Je publie, puis je copie le lien.

**[A · ÉCRAN]** Dernier geste, le plus important. J'ouvre le lien dans un nouvel onglet. Le site d'Hadiza est en ligne. N'importe qui peut l'ouvrir avec ce lien. Hadiza peut le mettre dans son statut WhatsApp, ou l'envoyer à ses clientes.

[PAUSE 1 s]

**[B5 — Consolidation · 4:45–5:25]**

**[F · CAM B]** Une question. Hadiza a dix changements en tête. Elle les envoie tous dans le même message. Que va faire l'IA ?

**[SILENCE 2 s]**

**[F · CAM B]** Elle en oublie la moitié. Une correction à la fois. Vous vérifiez, puis vous passez à la suivante. Et si une génération échoue ? Ça arrive. On reformule, simplement.

[PAUSE 1 s]

**[B6 — Clôture · 5:25–6:00]**

**[B · CARTE DE RAPPEL]** « 1. Canva Code : site simple, gratuit, en ligne. » « 2. Une correction à la fois. » « 3. Publier, puis tester le lien. » — VO : À retenir. Canva Code : un site simple, gratuit, en ligne. Une correction à la fois. Et après la publication, testez toujours le lien.

**[F · CAM A]** Hadiza a son site. Il est joli, et il est en ligne. Mais elle voudra bientôt plus. On le verra avec Lovable. Votre exercice : créez et publiez votre site avec Canva.

#### Liste des plans

| # | Type | Cadre / source | Contenu | Durée | Notes |
|---|---|---|---|---|---|
| 1 | F | CAM A | « Vous avez votre fiche… », promesse | 25 s | B1. Promesse avant 0:12 |
| 2 | F | CAM A | Version gratuite, utilisations de l'IA limitées | 28 s | B2. Aucun chiffre |
| 3 | B | Carte | « Générer · Corriger · Publier » | 18 s | B3 |
| 4 | A | Canva, page d'accueil → Code | Choix de Code, zone de saisie | 12 s | B4. Zoom ≤ 6 % sur la zone de saisie |
| 5 | A + G | Canva + carte de consigne | Collage de la fiche, phrase ajoutée | 20 s | B4. Carte G en surimpression |
| 6 | A | Canva | Génération | 25 s à l'écran (accéléré) | B4. ×4 à ×8, « Accéléré » |
| 7 | A | Canva | Résultat commenté : ce qui va, ce qui ne va pas | 35 s | B4. Coche sur ce qui va, cadre sur ce qui ne va pas |
| 8 | A | Canva | Correction par la parole, génération | 25 s | B4. Attente accélérée |
| 9 | A | Canva | Nouvelle version, aperçu téléphone | 25 s | B4 |
| 10 | A | Canva | Publier → domaine gratuit → copier le lien | 30 s | B4. Zoom ≤ 6 % sur le bouton Publier |
| 11 | A | Navigateur, nouvel onglet | Site en ligne, défilement complet | 20 s | B4 |
| 12 | F | CAM B | Question des dix changements, silence, réponse | 40 s | B5 |
| 13 | B | Carte de rappel | Trois points | 18 s | B6 |
| 14 | F | CAM A | « Hadiza a son site… », exercice | 17 s | B6 |
| 15 | B | Carte mentions légales | Texte des marques | 3 s | Fin de vidéo |

#### Montage idéal

| Temps | Timecode cible | Image principale | Habillage (motion graphics) | Texte à l'écran | Son | Transition |
|---|---|---|---|---|---|---|
| B1 | 0:00–0:25 | F CAM A | Vignette de la fiche d'Hadiza en incrustation | Promesse | voix seule | coupe |
| B2 | 0:25–0:55 | F CAM A | Étiquette « Version gratuite » | « Version gratuite · IA limitée : gardez vos demandes » | voix seule | coupe |
| B3 | 0:55–1:15 | B (3 gestes) | Trois étapes révélées au rythme de la voix | « Générer · Corriger · Publier » | voix ; nappe discrète | glissement |
| B4 | 1:15–4:45 | A (Canva), G (consigne) | Compteur d'étapes 1/8 → 8/8 ; pictogramme « accéléré » ; coches et cadres sur le résultat ; flèche vers le bouton Publier | Consigne (G) ; « Accéléré » ; « Correction 1 » ; « Vue téléphone » ; « En ligne » | voix ; nappe légère pendant l'accéléré | coupe |
| B5 | 4:45–5:25 | F CAM B | « 10 changements → la moitié oubliée » (pictogramme liste barrée) | « Une correction à la fois » | voix ; silence total 2 s | coupe |
| B6 | 5:25–6:00 | B (carte de rappel), F CAM A, B (mentions) | Points révélés un par un | 3 points ; « Exercice : créez et publiez votre site avec Canva » | voix seule | coupe, mentions légales 3 s, carte de clôture (Partie 1) |

**Notes de montage** : accélérer chaque attente de génération ×4 à ×8, avec la mention « Accéléré » visible tant que l'accéléré dure ; garder en vitesse réelle le collage, la phrase ajoutée, la correction, le clic sur Publier et l'ouverture du lien. Zooms ≤ 6 % : sur le champ de saisie et sur le bouton Publier. Si une génération a échoué au tournage, la garder (raccourcie) avec la VO « Ça arrive. On reformule. » Flouter tout bandeau de crédits, de plan d'abonnement ou de mise à niveau. Pendant l'aperçu téléphone (bas de l'écran occupé), réduire la capture à 85 % dans un cadre et garder les sous-titres en bas. **Carte de rappel** à 5:25. **Mentions légales** (3 s) après la dernière phrase : texte standard + mois et année. Plans de couverture : insert mains qui collent la fiche, B-cam.

#### Versions EN / HA / DJE

- **À re-filmer dans la langue** (≈ 30 s) : ouverture (plan 1) et conclusion (plan 14), textes FR ci-dessus.
- **Doublé en voix clonée** : B2 (plan 2) → carte « Version gratuite · IA limitée » prolongée, ou plan 4 (page d'accueil Canva) ; B5 (plan 12) → carte « Une correction à la fois » avec le pictogramme de liste barrée.
- **Notes d'adaptation** : la démo reste filmée en français ; en EN, HA et DJE, la VO précise que la consigne peut être écrite dans la langue de l'apprenant, mais que le contenu du site doit être dans la langue de ses clientes. Le libellé du bouton (« Commander sur WhatsApp ») est traduit à l'écran par un sous-titre. « Le bouton tombe sous le pouce » : image à garder si elle passe, sinon « on le touche facilement ».

### Leçon 4 — Démo Lovable : un site plus riche, avec formulaire (`vc4`)

#### Fiche

- **Promesse** : « À la fin de cette vidéo, vous saurez créer avec Lovable un site à plusieurs sections, avec un formulaire de commande. »
- **Cas réel (B1 → B6)** : Le site Canva d'Hadiza est joli. Mais elle veut plus : que ses clientes envoient leurs mesures par un formulaire. Enjeu : un site plus riche, toujours sans coder. En B6, Hadiza a un site Lovable avec galerie et formulaire testé, et sait quand choisir Canva ou Lovable.
- **Unités de notion (B3)** : 1. Lovable : formulaires et sites plus riches — Il écrit un vrai code de site ; vous ne le lisez pas, vous parlez avec lui. · 2. Demander le plan avant de construire — L'IA annonce ce qu'elle va faire ; vous validez ou vous corrigez. · 3. Toujours vérifier en vue téléphone — Les clientes d'Hadiza regardent sur leur téléphone.
- **Démo (B4)** : Lovable, compte de démonstration, navigateur, en partant de la page d'accueil. 1. lovable.dev → zone de saisie de la page d'accueil. 2. Coller la fiche d'Hadiza + : « Ajoute un formulaire de commande : nom, téléphone, type de tenue, mesures, date souhaitée. Le site doit être parfait sur téléphone. » 3. Si disponible, **mode Plan** : « Je lui demande d'abord son plan, avant de construire. » Lire et valider le plan [à vérifier au moment du tournage : disponibilité du mode Plan]. 4. Laisser construire ; commenter l'aperçu. 5. Basculer en **vue téléphone**. 6. Deux corrections par la parole, une à la fois : « Dans la galerie, mets six emplacements de photos avec une légende. » puis « Après l'envoi du formulaire, affiche "Merci, Hadiza vous rappelle sous 24 heures". » 7. Tester le formulaire avec de fausses données. Puis 10 s du site Canva et 10 s du site Lovable, côte à côte. **Ne connecter ni base de données ni clé** (c'est le niveau 2). Résultat attendu : un site à plusieurs sections, une galerie légendée, un formulaire qui affiche le message de remerciement.
- **Consolidation (B5)** : comparaison. « Canva ou Lovable ? » Les deux sites côte à côte. Réponse : pour une vitrine, Canva. Pour un formulaire, plusieurs pages ou des données, Lovable.
- **Consigne à copier** :

```text
[Collez ici la fiche de votre site.]
Ajoute un formulaire de [commande / inscription / contact] : [champ 1], [champ 2], [champ 3]…
Le site doit être parfait sur téléphone.
```

- **Exercice** : « Ajoutez un formulaire à votre site avec Lovable » — 1. Ouvrez Lovable (version gratuite) depuis sa page d'accueil et collez votre fiche avec la consigne ci-dessus. 2. Demandez le plan avant de construire, si l'option existe, puis validez-le. 3. Vérifiez en vue téléphone et testez le formulaire avec de fausses données.
- **Carte de rappel** : 1. Lovable : formulaires et sites plus riches. 2. Demander le plan avant de construire. 3. Toujours vérifier en vue téléphone.
- **Quiz** :
  1. Pourquoi Hadiza passe-t-elle de Canva à Lovable ? — A) Canva ne publie pas B) Elle veut un formulaire pour recevoir les mesures de ses clientes C) Lovable est obligatoire D) Elle veut changer de couleur — **Réponse : B**
  2. À quoi sert le mode Plan ? — A) À voir ce que l'IA va construire, avant qu'elle construise B) À payer moins cher C) À supprimer le site D) À écrire le code soi-même — **Réponse : A**
  3. Pourquoi basculer en vue téléphone ? — A) Pour publier plus vite B) Parce que l'ordinateur ne montre rien C) Pour changer d'outil D) Parce que les clientes regardent le site sur leur téléphone — **Réponse : D**
  4. Avec quelles données teste-t-on le formulaire ? — A) Les vraies mesures d'une cliente B) Son propre numéro de carte C) De fausses données inventées D) Le mot de passe de Lovable — **Réponse : C**
  5. Pour une simple vitrine de son atelier, quel outil suffit ? — A) Canva B) Lovable avec base de données C) Un développeur D) Replit — **Réponse : A**
- **Marques citées** : Lovable, Canva, WhatsApp.

#### Script

Durée estimée : 6:30 · Mots dits : ≈ 500 (plus environ 70 s d'attentes accélérées, de lecture du plan et de saisie sans voix ; le présentateur complète en parlant pendant les gestes)

**[B1 — Accroche · 0:00–0:25]**

**[F · CAM A]** Le site Canva d'Hadiza est joli. Mais elle veut plus. À la fin de cette vidéo, vous saurez créer avec Lovable un site à plusieurs sections, avec un formulaire de commande. Hadiza veut que ses clientes envoient leurs mesures par un formulaire. Pour ça, on passe à Lovable.

[PAUSE 1 s]

**[B2 — Cadrage · 0:25–0:55]**

**[F · CAM A]** Lovable écrit un vrai code de site. Vous ne le lisez pas : vous parlez avec lui. Comme avec Canva, vous décrivez, et il construit. Il a une version gratuite pour essayer. La différence avec Canva ? Lovable va plus loin : formulaires, plusieurs sections, plusieurs pages.

[PAUSE 1 s]

**[B3 — Notion · 0:55–1:20]**

**[B · CARTE]** « Fiche + formulaire · Plan · Vue téléphone » — VO : Trois réflexes aujourd'hui. Ajouter le formulaire à votre fiche. Demander le plan avant de construire. Et vérifier sur téléphone.

[PAUSE 1 s]

**[B4 — Démo Lovable · 1:20–5:10]**

**[A · ÉCRAN]** Je suis sur la page d'accueil de Lovable. Voici la zone de saisie. Je colle la même fiche que dans Canva. Puis j'ajoute le formulaire.

**[G · CONSIGNE]** « [Collez ici la fiche de votre site.] Ajoute un formulaire de commande : nom, téléphone, type de tenue, mesures, date souhaitée. Le site doit être parfait sur téléphone. » — VO : Cinq champs : nom, téléphone, type de tenue, mesures, date souhaitée. Un champ, c'est une case à remplir.

**[A · ÉCRAN]** Avant d'envoyer, j'active le mode Plan. Je lui demande d'abord son plan, avant de construire. Voici son plan. Je le lis. Les sections sont là. Le formulaire aussi, avec ses cinq champs. C'est bon : je valide.

**[A · ÉCRAN]** L'IA construit. On attend.

**[A · ÉCRAN]** Voici l'aperçu. Accueil, services, galerie, avis, contact. Et le formulaire de commande. Les tons chauds de la fiche sont repris. Je compare avec la fiche : rien ne manque.

**[A · ÉCRAN]** Je bascule en vue téléphone. C'est là que les clientes d'Hadiza le verront. Le menu se replie. Le formulaire tient sur l'écran.

**[A · ÉCRAN]** Première correction. Une seule à la fois. « Dans la galerie, mets six emplacements de photos avec une légende. » On attend. Voilà : six emplacements, chacun avec sa légende. Hadiza y mettra ses photos de tenues. Ses propres photos, prises dans son atelier.

**[A · ÉCRAN]** Deuxième correction. « Après l'envoi du formulaire, affiche : Merci, Hadiza vous rappelle sous vingt-quatre heures. » On attend.

**[A · ÉCRAN]** Je teste le formulaire. Avec de fausses données, jamais les vraies mesures d'une cliente. Un nom inventé. Le faux numéro. Une robe de mariage. J'envoie. Le message de remerciement s'affiche. Le formulaire marche. Dans ce cours, on s'arrête là : on ne branche ni base de données ni clé. Ce sera pour le niveau deux.

[PAUSE 1 s]

**[B5 — Consolidation · 5:10–5:55]**

**[A · ÉCRAN]** Voici les deux sites d'Hadiza, côte à côte. À gauche, Canva. À droite, Lovable.

**[F · CAM B]** Alors, Canva ou Lovable ? Pour une vitrine, Canva. Pour un formulaire, plusieurs pages, ou des données : Lovable. Le bon outil dépend de ce que votre site doit faire.

[PAUSE 1 s]

**[B6 — Clôture · 5:55–6:30]**

**[B · CARTE DE RAPPEL]** « 1. Lovable : formulaires et sites plus riches. » « 2. Demander le plan avant de construire. » « 3. Toujours vérifier en vue téléphone. » — VO : À retenir. Lovable pour les formulaires et les sites plus riches. Demandez le plan avant de construire. Et vérifiez toujours en vue téléphone.

**[F · CAM A]** Hadiza peut maintenant recevoir des commandes. Dans la dernière vidéo, on corrige, on publie, on partage. Votre exercice : ajoutez un formulaire à votre site avec Lovable.

#### Liste des plans

| # | Type | Cadre / source | Contenu | Durée | Notes |
|---|---|---|---|---|---|
| 1 | F | CAM A | Site Canva joli, promesse, besoin du formulaire | 25 s | B1. Promesse avant 0:12 |
| 2 | F | CAM A | « Lovable écrit un vrai code de site… version gratuite » | 25 s | B2. [à vérifier au moment du tournage : version gratuite et publication gratuite] |
| 3 | B | Carte | « Fiche + formulaire · Plan · Vue téléphone » | 15 s | B3 |
| 4 | A | lovable.dev, page d'accueil | Zone de saisie, collage de la fiche | 15 s | B4. Partir de la page d'accueil, jamais d'un projet ouvert |
| 5 | G | Carte de consigne | Consigne exacte | 15 s | B4 |
| 6 | A | Lovable | Mode Plan, lecture et validation du plan | 30 s | B4. Si le mode Plan est absent, couper et adapter la VO |
| 7 | A | Lovable | Construction | 20 s à l'écran (accéléré) | B4. ×4 à ×8 |
| 8 | A | Lovable | Aperçu commenté | 20 s | B4 |
| 9 | A | Lovable | Vue téléphone | 15 s | B4 |
| 10 | A | Lovable | Correction 1 (galerie), attente, résultat | 30 s | B4 |
| 11 | A | Lovable | Correction 2 (message de remerciement), attente | 20 s | B4 |
| 12 | A | Lovable | Test du formulaire avec fausses données, message affiché | 30 s | B4. Aucune donnée réelle |
| 13 | A | Deux captures côte à côte | 10 s site Canva + 10 s site Lovable | 12 s | B5 |
| 14 | F | CAM B | « Canva ou Lovable ? … » | 25 s | B5 |
| 15 | B | Carte de rappel | Trois points | 18 s | B6 |
| 16 | F | CAM A | « Hadiza peut maintenant… », exercice | 15 s | B6 |
| 17 | B | Carte mentions légales | Texte des marques | 3 s | Fin de vidéo |

#### Montage idéal

| Temps | Timecode cible | Image principale | Habillage (motion graphics) | Texte à l'écran | Son | Transition |
|---|---|---|---|---|---|---|
| B1 | 0:00–0:25 | F CAM A | Vignette du site Canva d'Hadiza | Promesse | voix seule | coupe |
| B2 | 0:25–0:55 | F CAM A | Étiquette « Version gratuite pour essayer » | « Vous ne lisez pas le code : vous parlez avec lui » | voix seule | coupe |
| B3 | 0:55–1:20 | B (3 réflexes) | Trois réflexes révélés un par un | « Fiche + formulaire · Plan · Vue téléphone » | voix ; nappe discrète | glissement |
| B4 | 1:20–5:10 | A (Lovable), G (consigne) | Compteur d'étapes 1/7 → 7/7 ; cadre sur le plan, puis sur chaque section ; pictogramme « accéléré » ; cadres successifs sur les 5 champs du formulaire | Consigne (G) ; « Mode Plan » ; « Accéléré » ; « Vue téléphone » ; « Correction 1 » ; « Correction 2 » ; « Données fictives » | voix ; nappe légère pendant l'accéléré | coupe |
| B5 | 5:10–5:55 | A (deux sites côte à côte), F CAM B | Écran partagé avec étiquettes ; tableau « Vitrine : Canva / Formulaire, pages, données : Lovable » | « Canva » / « Lovable » ; tableau | voix seule | coupe |
| B6 | 5:55–6:30 | B (carte de rappel), F CAM A, B (mentions) | Points révélés un par un | 3 points ; « Exercice : ajoutez un formulaire à votre site avec Lovable » | voix seule | coupe, mentions légales 3 s, carte de clôture (Partie 1) |

**Notes de montage** : accélérer la construction et chaque attente de correction ×4 à ×8, mention « Accéléré » visible ; garder en vitesse réelle le collage, l'activation du mode Plan, la lecture du plan (raccourcie si longue, avec cadre sur les sections et le formulaire), la bascule en vue téléphone et l'envoi du formulaire. Zooms ≤ 6 % : sur le plan, sur le formulaire et sur le message de remerciement. Flouter le solde de crédits, le plan d'abonnement et tout identifiant de projet visible. Vérifier qu'aucune invitation à connecter une base de données ou une clé n'est mise en avant ; si elle apparaît, ne pas l'annoter. En vue téléphone, réduire la capture à 85 % dans un cadre pour garder les sous-titres en bas. **Carte de rappel** à 5:55. **Mentions légales** (3 s) après la dernière phrase : texte standard + mois et année. Plans de couverture : insert mètre ruban (mesures), B-cam.

#### Versions EN / HA / DJE

- **À re-filmer dans la langue** (≈ 30 s) : ouverture (plan 1) et conclusion (plan 16).
- **Doublé en voix clonée** : B2 (plan 2) → plan 4 (page d'accueil Lovable) avancé ; B5 (plan 14) → écran partagé des deux sites (plan 13) prolongé, puis tableau.
- **Notes d'adaptation** : « mesures » (de couture) : en EN « measurements » ; en HA et DJE, terme du métier à valider. Le message « Merci, Hadiza vous rappelle sous 24 heures » est sous-titré dans chaque langue. « Champ » : en EN « field », gloser une fois. « Vitrine » : en EN « showcase site ».

### Leçon 5 — Projet final : corriger, publier, partager (`vc5`)

#### Fiche

- **Promesse** : « À la fin de cette vidéo, vous saurez publier votre site, le vérifier et le présenter pour obtenir votre certificat. »
- **Cas réel (B1 → B6)** : Hadiza a son site. Avant de l'envoyer à ses clientes, trois vérifications. Enjeu : un site publié, qui marche vraiment sur téléphone, sans faute ni donnée personnelle. En B6, le site d'Hadiza est en ligne et vérifié ; l'apprenant connaît son projet final et les cinq points du cours.
- **Unités de notion (B3)** : 1. Publier et ouvrir le lien sur téléphone — Le site doit marcher là où vos clients le regardent. · 2. La check-list en quatre questions — Lisible ? Textes vrais, sans faute ? Bouton et formulaire qui marchent ? Aucune donnée personnelle ni mot de passe ? · 3. Le projet final — Un site publié pour une personne ou une activité réelle ; à déposer : le lien, la fiche, trois phrases sur ce que vous avez corrigé.
- **Démo (B4)** : Lovable, projet d'Hadiza de la vidéo 4, puis téléphone. 1. Lovable → **Publier** → adresse en lovable.app → copier le lien [à vérifier au moment du tournage : publication gratuite]. 2. Ouvrir le lien **sur un téléphone** (insert filmé ou miroir d'écran). 3. La check-list, en parlant : tout est lisible sur téléphone ? les textes sont vrais, sans faute ? le bouton WhatsApp et le formulaire marchent ? aucune donnée personnelle ni mot de passe dans le site ? Défilement complet, test du bouton WhatsApp. Résultat attendu : le site d'Hadiza ouvert sur un téléphone, les quatre questions cochées.
- **Consolidation (B5)** : le projet final, livrables et critères. « Un site publié, pour une personne ou une activité réelle. Vous déposez : le lien, votre fiche, et trois phrases sur ce que vous avez corrigé. » [mode de dépôt à préciser]
- **Consigne à copier** (pour rédiger les trois phrases du dépôt) :

```text
Voici les corrections que j'ai faites sur mon site : [listez vos corrections].
Aide-moi à les résumer en trois phrases simples : ce qui n'allait pas, ce que j'ai demandé, ce qui a changé.
N'invente rien.
```

- **Exercice** : « Publiez votre site et partagez le lien » — 1. Publiez votre site (Canva ou Lovable) et ouvrez le lien sur un téléphone. 2. Passez la check-list des quatre questions et corrigez ce qui ne va pas. 3. Déposez le lien, votre fiche et trois phrases sur vos corrections [mode de dépôt à préciser].
- **Carte de rappel (récap du cours)** : 1. Vous décrivez, l'IA construit. 2. Une bonne fiche avant l'outil. 3. Canva pour un site simple. 4. Lovable pour un site riche. 5. Vérifier sur téléphone, puis publier.
- **Quiz** :
  1. Après avoir publié, où vérifier d'abord votre site ? — A) Sur un téléphone, là où vos clients le regardent B) Seulement dans l'éditeur C) Nulle part, c'est inutile D) Sur une imprimante — **Réponse : A**
  2. Laquelle de ces questions fait partie de la check-list ? — A) Le site a-t-il beaucoup de couleurs ? B) Y a-t-il une donnée personnelle ou un mot de passe dans le site ? C) Le site a-t-il coûté cher ? D) Combien de lignes de code ? — **Réponse : B**
  3. Que déposez-vous pour le projet final ? — A) Seulement une capture d'écran B) Votre mot de passe Lovable C) Le lien, votre fiche, et trois phrases sur ce que vous avez corrigé D) Le code du site — **Réponse : C**
  4. Que faut-il faire avant d'ouvrir l'outil ? — A) Payer une version B) Écrire une bonne fiche de son site C) Appeler un développeur D) Choisir un nom de domaine payant — **Réponse : B**
  5. Quel outil pour un site simple, et lequel pour un site riche ? — A) Lovable pour les deux B) Replit puis Canva C) Canva pour le simple, Lovable pour le riche D) Aucun des deux — **Réponse : C**
- **Marques citées** : Lovable, Canva, WhatsApp.

#### Script

Durée estimée : 4:00 · Mots dits : ≈ 385 (format court ; défilements et tests sur téléphone en partie sans voix)

**[B1 — Accroche · 0:00–0:20]**

**[F · CAM A]** Hadiza a son site. Avant de l'envoyer à ses clientes, trois vérifications. À la fin de cette vidéo, vous saurez publier votre site, le vérifier et le présenter pour obtenir votre certificat.

[PAUSE 1 s]

**[B2/B3 — Cadrage et notion : publier, puis vérifier · 0:20–0:35]**

**[F · CAM A]** Publier, ce n'est pas la fin. Un site publié avec une faute, ou un bouton cassé, fait fuir les clientes. Alors on publie, puis on vérifie.

[PAUSE 1 s]

**[B4 — Démo : publier et vérifier · 0:35–2:30]**

**[A · ÉCRAN]** Je suis dans Lovable, sur le site d'Hadiza. Je clique sur Publier. Le site reçoit une adresse en lovable.app. Je copie le lien. C'est ce lien que Hadiza partagera.

**[A · ÉCRAN]** Maintenant, je l'ouvre sur un téléphone. C'est là que les clientes le verront.

**[B · CARTE]** « Check-list · 4 questions » — VO : Et je passe la check-list. Quatre questions.

**[A · ÉCRAN]** Un : tout est lisible sur téléphone ? Je fais défiler. Les titres, les textes, la galerie : oui.

**[A · ÉCRAN]** Deux : les textes sont vrais, sans faute ? Je relis. Les services, les horaires. Tout ce qui est écrit doit être vrai. L'IA invente parfois un avis ou un horaire : supprimez-le.

**[A · ÉCRAN]** Trois : le bouton WhatsApp et le formulaire marchent ? Je touche le bouton. WhatsApp s'ouvre. Le formulaire a été testé dans la vidéo précédente : je le revérifie.

**[A · ÉCRAN]** Quatre : aucune donnée personnelle ni mot de passe dans le site ? Je cherche. Rien. Si vous trouvez un problème, corrigez-le dans l'outil, une demande à la fois. Puis publiez à nouveau.

[PAUSE 1 s]

**[B5 — Le projet final · 2:30–3:15]**

**[F · CAM A]** Maintenant, votre projet final. Un site publié, pour une personne ou une activité réelle. La vôtre, celle d'un proche, d'une association.

**[B · CARTE]** « À déposer · Le lien · Votre fiche · 3 phrases sur vos corrections » — VO : Vous déposez trois choses. Le lien de votre site. Votre fiche. Et trois phrases sur ce que vous avez corrigé.

**[F · CAM A]** Ces trois phrases montrent votre travail. Ce qui n'allait pas, ce que vous avez demandé, ce qui a changé. Le mode de dépôt est indiqué sur la page du cours.

[PAUSE 1 s]

**[B6 — Clôture · 3:15–4:00]**

**[B · CARTE DE RAPPEL]** « 1. Vous décrivez, l'IA construit. » « 2. Une bonne fiche avant l'outil. » « 3. Canva pour un site simple. » « 4. Lovable pour un site riche. » « 5. Vérifier sur téléphone, puis publier. » — VO : Le cours en cinq points. Vous décrivez, l'IA construit. Une bonne fiche avant l'outil. Canva pour un site simple. Lovable pour un site riche. Et vérifier sur téléphone, puis publier.

**[F · CAM A]** Hadiza peut envoyer son lien à ses clientes. Prochain cours : transformer un site en vraie application. Votre exercice : publiez votre site et partagez le lien.

#### Liste des plans

| # | Type | Cadre / source | Contenu | Durée | Notes |
|---|---|---|---|---|---|
| 1 | F | CAM A | « Hadiza a son site… », promesse | 20 s | B1. Promesse avant 0:12 |
| 2 | F | CAM A | « Publier, ce n'est pas la fin… » | 15 s | B2/B3 |
| 3 | A | Lovable | Publier → adresse lovable.app → copier le lien | 20 s | B4. Zoom ≤ 6 % sur le bouton Publier |
| 4 | A | Téléphone (miroir d'écran) ou insert filmé | Ouverture du lien sur le téléphone | 10 s | B4 |
| 5 | B | Carte | « Check-list · 4 questions » | 4 s | B4 |
| 6 | A | Téléphone | Question 1 : défilement complet | 18 s | B4 |
| 7 | A | Téléphone | Question 2 : relecture des textes | 18 s | B4 |
| 8 | A | Téléphone + insert doigt | Question 3 : bouton WhatsApp touché, formulaire | 22 s | B4. Ne pas montrer de conversation WhatsApp réelle : couper à l'ouverture |
| 9 | A | Téléphone | Question 4 : recherche de données personnelles | 22 s | B4 |
| 10 | F | CAM A | Projet final : pour qui | 12 s | B5 |
| 11 | B | Carte | « À déposer : le lien · votre fiche · 3 phrases » | 12 s | B5 |
| 12 | F | CAM A | « Ces trois phrases montrent votre travail… » | 18 s | B5. [mode de dépôt à préciser] |
| 13 | B | Carte récap du cours | Cinq points | 30 s | B6 |
| 14 | F | CAM A | « Hadiza peut envoyer son lien… », annonce du niveau 2, exercice | 15 s | B6 |
| 15 | B | Carte mentions légales | Texte des marques | 3 s | Fin de vidéo |

#### Montage idéal

| Temps | Timecode cible | Image principale | Habillage (motion graphics) | Texte à l'écran | Son | Transition |
|---|---|---|---|---|---|---|
| B1 | 0:00–0:20 | F CAM A | Vignette du site d'Hadiza | Promesse | voix seule | coupe |
| B2/B3 | 0:20–0:35 | F CAM A | « Publier → vérifier » | « Publier, puis vérifier » | voix seule | coupe |
| B4 | 0:35–2:30 | A (Lovable, puis téléphone), B (check-list) | Check-list en colonne latérale, chaque question cochée à son tour ; cadre sur l'adresse lovable.app ; téléphone dans un cadre de smartphone | « Publier » ; « Question 1/4 » … « 4/4 » ; « Lisible ? » « Vrai, sans faute ? » « Bouton et formulaire ? » « Aucune donnée personnelle ? » | voix ; nappe discrète | coupe |
| B5 | 2:30–3:15 | F CAM A, B (livrables) | Trois livrables en pictogrammes (lien, fiche, texte) | « À déposer : le lien · votre fiche · 3 phrases » | voix seule | coupe |
| B6 | 3:15–4:00 | B (récap du cours), F CAM A, B (mentions) | Cinq points révélés un par un ; mention « Prochain cours : du site à l'application » | 5 points ; « Exercice : publiez votre site et partagez le lien » | voix ; nappe de fin (Partie 1) | coupe, mentions légales 3 s, carte de clôture (Partie 1) |

**Notes de montage** : pas d'accéléré nécessaire, sauf l'éventuelle attente de publication (×4 à ×8, « Accéléré »). Pour le téléphone : préférer le miroir d'écran, intégré dans un cadre de smartphone sobre ; à défaut, l'insert filmé, stabilisé, sans reflet. Couper avant l'ouverture d'une vraie conversation WhatsApp. Zooms ≤ 6 % sur le bouton Publier et sur l'adresse du site. Flouter crédits, plan d'abonnement et identifiants de projet. Garder la check-list visible en colonne pendant toute la démo, la question en cours mise en valeur par un cadre et une coche (jamais par la seule couleur). **Carte récap** (carte de rappel finale, cinq points) à 3:15. **Mentions légales** (3 s) après la dernière phrase : texte standard + mois et année. Plans de couverture : inserts pouce qui fait défiler, doigt sur le bouton WhatsApp.

#### Versions EN / HA / DJE

- **À re-filmer dans la langue** (≈ 30 s) : ouverture (plan 1) et conclusion (plan 14), dont l'annonce « Prochain cours : transformer un site en vraie application ».
- **Doublé en voix clonée** : B2/B3 (plan 2) → plan 3 (Lovable, bouton Publier) avancé ; B5 (plans 10 et 12) → carte des livrables prolongée et pictogrammes ; ou insert du téléphone.
- **Notes d'adaptation** : la check-list est traduite à l'écran dans chaque langue. « Certificat » : préciser en HA et DJE le terme utilisé par la plateforme. Le mode de dépôt doit être le même dans toutes les langues : mettre à jour les quatre versions dès qu'il est fixé.

## 2.6 Captures et éléments à préparer

| Leçon | Élément | Comment l'obtenir | Qui |
|---|---|---|---|
| 1 | Photo ou illustration : Hadiza dans son atelier à Maradi | Photo mise en scène (autorisation écrite) ou illustration ; pas de faux écran WhatsApp | owner / Claude |
| 1 | Captures : pages d'accueil de canva.com (rubrique Code), lovable.dev, bolt.new, replit.com | Profil Chrome dédié, zoom 125 % ; 10 s immobile + léger défilement chacune ; sans connexion, sans tarif | owner |
| 2 | Capture : conversation complète dans Claude (ou Gemini), du collage de la consigne à la fiche finale | Compte de démo, version gratuite ; réponses fictives d'Hadiza (fiche vc2) ; numéro `+227 00 00 00 00` | owner |
| 2 | Fiche finale d'Hadiza en fichier texte | Copiée à la fin de la démo ; réutilisée en vc3 et vc4 | owner |
| 3 | Capture : séquence Canva complète, étapes 1 à 8, en une prise | Compte Canva Karatou ; garder une éventuelle génération ratée | owner |
| 4 | Capture : séquence Lovable complète, étapes 1 à 7, en une prise, depuis la page d'accueil | Compte de démo ; fausses données dans le formulaire ; aucune base de données ni clé | owner |
| 4 | Captures : 10 s du site Canva et 10 s du site Lovable, pour l'écran partagé | Liens publiés (Canva) et aperçu ou lien (Lovable) | owner |
| 5 | Capture : publication dans Lovable, adresse lovable.app, copie du lien | Projet d'Hadiza de vc4 | owner |
| 5 | Capture téléphone : le site ouvert, défilement complet, test du bouton WhatsApp | Miroir d'écran ou insert filmé ; téléphone en « Ne pas déranger » | owner |
| 5 | Page ou formulaire de dépôt du projet final | Plateforme Karatou [mode de dépôt à préciser] | owner |
| Toutes | Inserts : mains qui collent la fiche, pouce qui fait défiler, doigt sur le bouton WhatsApp, tissu et mètre ruban | Fin de la session | owner |
| Toutes | Cartes (B, G), schémas (C), cartes de rappel, check-list, écran partagé, mentions légales | HyperFrames, selon la Partie 1 | Claude |
| Toutes | Rushes déposés : `lecons/L0N/rushes/camA-<n>.mp4` et `lecons/L0N/rushes/ecran-<n>.mp4` | Après la session | owner |
