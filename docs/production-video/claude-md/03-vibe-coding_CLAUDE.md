# CLAUDE.md — Karatou Academy · Production vidéo
# Cours 3 — Vibe coding : créer une app sans savoir coder

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
| Vidéos | 6 vidéos · 5 à 8 min (cible 6:30) chacune |
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

- Master **1920 × 1080, 30 images/s, 16:9**. Une vidéo par leçon. Durée : 5 à 8 min (cible 6:30).
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

### 9.2 Nommage et contenu de `livraison/vibe-coding/<id>/`

`vibe-coding_<id>_<langue>_v<n>.mp4` · `…-360.mp4` · `….srt` · `….vtt` · `…_cover.jpg` (1920 × 1080, qualité 85,
première image stable de B1) · `…_transcript.md` (un titre par temps, texte dit + actions à l'écran entre
crochets) · `RECETTE.md`.

### 9.3 Mise en ligne

Chaîne YouTube **Karatou Academy**, vidéos **non répertoriées**, une vidéo par langue, sous-titres `.srt` ajoutés
comme piste. Titre : « Karatou Academy — Vibe coding : créer une app sans savoir coder — Leçon N : <titre> (<LANGUE>) ». Le site lit des **URL
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
# PROGRESS — Cours 3 · Vibe coding : créer une app sans savoir coder
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
| Titre | Vibe coding : créer une app sans savoir coder |
| Format | Filmé (humain face caméra + captures + motion graphics) |
| Owner / présentateur | Aminou — Aminou Laouali Abdou, Consultant en IA et Innovation, Google Generative AI Leader (nom et titre fournis par le brief, à confirmer au premier lancement) |
| Rubrique | Culture numérique |
| Public | Étudiants, jeunes entrepreneurs et professionnels francophones (Niger, Afrique de l'Ouest) sans formation en programmation, qui ont l'idée d'un outil simple pour leurs études ou leur activité, et savent utiliser un navigateur et un téléphone |
| Slug du module (provisoire) | `vibe-coding` |
| Préfixe des leçons | `vc` (ex. `vc1` … `vc6`) |
| Nombre de vidéos | 6 (dont la dernière = projet final certifiant) |
| Durée par vidéo | 5–8 min (cible 6:30) |
| Langues | FR (tournage, référence) · EN · HA · DJE |
| Prérequis | Une adresse e-mail ; un compte gratuit Lovable ou Bolt ; de préférence un ordinateur avec un navigateur récent (indispensable pour Bolt), sinon un téléphone avec l'application mobile de Lovable [à vérifier au moment du tournage : fonctions disponibles sur mobile] ; une connexion stable pendant les séances de construction ; un assistant conversationnel gratuit (leçons 2 et 6). Claude Code (leçon 5) : facultatif, version payante. Aucune connaissance en programmation. |
| Promesse du cours | Vous saurez décrire, construire, tester et publier une petite application utile, sans écrire de code, en connaissant ses limites. |
| Positionnement | Seul cours de la plateforme où l'on construit une application complète (écrans, données, comptes, publication). Il ne refait pas le module `intelligence-artificielle` (c3 Prompt engineering, c5 Automatisation) : la consigne y sert à construire. La leçon 2 applique `gestion-projet` (p1 Cadrer, p2 Prioriser le MVP) : y renvoyer. Il s'appuie sur `introduction-claude-ai` (cl2 Bien formuler sa demande, cl5 Limites, vérification, confidentialité). Différent du cours 8 (flux automatisés, sans application à soi) et du cours 2 (agents qui agissent seuls). Pour aller plus loin : cours 10 (sécurité des comptes), cours 8 (brancher des automatisations), cours 4 (lancer une activité). |
| Fil rouge | **Hadiza**, 24 ans, étudiante à Niamey, construit son application de suivi de bourses de la leçon 1 à la leçon 5. **Rahila**, sa camarade de promotion, conseille, teste et sert de seconde utilisatrice (leçons 3 à 5). **Moussa**, quincaillier à Zinder, choisit son projet en leçon 1 et sert d'exemple de projet final en leçon 6. **Ibrahim**, apprenant, sert de contre-exemple en leçon 6. Aminou montre son propre travail (Karatou Academy, développée avec Claude Code) en leçons 1 et 5. |
| Marques citées | Lovable (dont Lovable Cloud), Bolt, Claude, Claude Code, GitHub, WhatsApp, Collins (dictionnaire) ; Google (titre du présentateur sur la carte d'ouverture). Organisme cité, hors marques : HAPDP (Niger). Personne citée : Andrej Karpathy. |

## 2.2 Ce que l'apprenant saura faire

- Expliquer ce qu'est le vibe coding, ce qu'il permet et où il s'arrête, à partir d'une application réelle.
- Choisir un premier projet réaliste avec la grille des trois feux (nombre d'utilisateurs, argent, données sensibles).
- Rédiger le cahier des charges d'une page d'une application : problème, personne, écrans, données gardées et jamais gardées, version 1, critères testables.
- Construire dans Lovable ou Bolt un prototype, puis une application avec base de données et comptes, une étape par consigne, en revenant à une version antérieure si besoin.
- Tester son application et corriger un défaut en le décrivant (problème, attendu, étapes), faire le test des deux comptes, puis publier après le contrôle de sécurité.
- Livrer une mini-application utile avec son lien et sa fiche produit d'une page, en sachant quand passer à Claude Code ou faire appel à un développeur.

## 2.3 Plan du cours

| Leçon | Id | Titre | Promesse (objectif) | Cas réel (B1) | Démo (B4) | Durée cible |
|---|---|---|---|---|---|---|
| 1 | `vc1` | Vibe coding : ce que c'est, où ça s'arrête | Expliquer le vibe coding et choisir un premier projet réaliste | Hadiza (Niamey) a raté une bourse : date limite dépassée, informations éparpillées | Lovable : une consigne courte → page des échéances (données d'exemple) → une amélioration décrite → vue téléphone | 6:30 |
| 2 | `vc2` | Le cahier des charges d'une page | Écrire le cahier des charges d'une page de votre application | « Fais-moi une application de bourses » : Lovable devine à la place de Hadiza | Claude (version gratuite) interviewe Hadiza question par question → page de six rubriques, relue et corrigée | 6:30 |
| 3 | `vc3` | Premier prototype avec Lovable ou Bolt | Transformer votre cahier des charges en un premier prototype | Hadiza ouvre Lovable avec sa page et un quota gratuit limité | Lovable, mode Plan → plan vérifié → trois étapes (tableau de bord, fiche, formulaire), un test après chacune, vue téléphone | 6:30 |
| 4 | `vc4` | Démo complète : l'app de suivi de bourses | Construire étape par étape une application qui enregistre vos données | Sur le téléphone de sa sœur, les candidatures de Hadiza n'existent pas | Lovable : base intégrée (Lovable Cloud) → test de mémoire → connexion et règles d'accès → test sur deux appareils → test des deux comptes | 6:30 |
| 5 | `vc5` | Corriger, sécuriser, publier et aller plus loin | Corriger en décrivant, vérifier la sécurité et publier votre application | Rahila signale une bourse passée marquée « Urgent », avec des jours négatifs | Lovable : reproduire le défaut → signalement en trois parties → retest → contrôle de sécurité → publication → lien testé sur un autre téléphone | 6:30 |
| 6 | `vc6` | Projet final : livrer votre mini-application | Livrer une mini-application utile, avec son lien et sa fiche | Moussa (Zinder) a terminé le carnet de ses commandes aux fournisseurs | Le projet de Moussa de bout en bout : cahier des charges → Bolt → publication → test d'évaluateur → fiche produit → dépôt | 6:30 |

## 2.4 Plan de tournage idéal

### Matériel et réglages

- **A-cam** : téléphone récent sur trépied avec pince (objectif principal, jamais l'ultra grand-angle), ou hybride si disponible. Captation 4K si possible, sinon 1080p ; cadence fixée par la Partie 1 ; obturateur au double de la cadence (1/50 s en 25 i/s, 1/60 s en 30 i/s). Exposition, mise au point et balance des blancs verrouillées ; HDR, mode portrait et stabilisation désactivés. Mode avion. Au moins 64 Go libres.
- **B-cam** (optionnelle) : second téléphone à 30–45°, plan taille, mêmes réglages. Elle sert aux apartés de B5 et à masquer les coupes.
- **Son** : micro-cravate (filaire vers l'A-cam, ou kit sans fil) ; enregistrement de secours sur un second appareil ; 48 kHz ; crêtes vers −12 dBFS ; 30 s de silence de la pièce au début de chaque session.
- **Lumière** : deux panneaux LED avec diffuseur, même température de couleur (vers 5 600 K), sans scintillement ; un réflecteur blanc pour déboucher. Faire un essai de 10 s avant la première prise : aucune bande ni scintillement (réseau électrique à 50 Hz).
- **Écran** : un ordinateur pour Lovable (web), Bolt et Claude Code ; un logiciel gratuit d'enregistrement d'écran en 1920×1080 ; l'enregistrement d'écran natif du téléphone pour l'application mobile de Lovable et les tests de l'application publiée. Un second téléphone pour les tests « autre appareil » et « deux comptes ».
- **Téléprompteur** : application gratuite sur une tablette ou un téléphone placé contre l'objectif ; texte chargé bloc par bloc ; défilement réglé vers 125 mots par minute.
- **Énergie et réseau** : batterie externe, onduleur pour l'ordinateur et la box ; partage de connexion 4G en secours (délestages, coupures).

### Décor, lumière, son

- **Décor « atelier »** : un bureau avec l'ordinateur portable (logo masqué par une pastille neutre), un téléphone sur support, un carnet. Au mur, à 1,5–2 m derrière Aminou : un tableau en liège avec la page imprimée du cahier des charges de Hadiza (fictive) et cinq papillons « Problème · Personne · Écrans · Données · Critères » ; un calendrier mural avec trois dates entourées (fictives). Une plante, quelques livres. Couleurs Karatou par petites touches (charte en Partie 1). Aucun logo de marque non citée.
- Si l'écran de l'ordinateur est dans le champ, il affiche une image fixe neutre : jamais de contenu lisible (moiré, confidentialité).
- **Lumière** : principale à 45°, un peu au-dessus des yeux ; seconde en débouchage doux ou en contre-jour léger. Occulter la fenêtre si le soleil tourne pendant la session (raccords).
- **Son** : petite pièce meublée (tapis, rideaux, coussins). Ventilateur et climatisation coupés pendant les prises : aérer entre les blocs et tourner tôt le matin, quand il fait moins chaud. Groupe électrogène éteint ou éloigné. Prévoir les prises en dehors des appels à la prière et des heures de forte circulation. Téléphones en silencieux.

### Cadrages

- **A-cam** : plan poitrine 16:9, regard caméra, yeux sur la ligne du tiers supérieur. Aminou légèrement à droite du cadre, pour laisser la gauche aux incrustations (même côté pendant tout le cours). Le bas du cadre (environ 20 %) reste libre de gestes et d'objets importants : il est réservé aux sous-titres.
- **B-cam** : 30–45°, plan taille, pour les apartés (B5 de chaque leçon) et quelques phrases de B3 signalées dans les scripts.
- **Inserts** (5–8 s chacun, tournés en fin de session) : mains qui collent une consigne au clavier ; pouce qui coche une case sur le téléphone ; doigt qui entoure une date sur le calendrier ; page du cahier des charges posée à côté du clavier ; deux téléphones côte à côte (test « deux comptes »). Le contenu des écrans passe toujours par les captures (type A) : on ne filme jamais un écran à la caméra pour le lire.

### Captures d'écran

- **Ordinateur** : 1920×1080 (ou 2560×1440 réduit), navigateur en plein écran, zoom 125–150 % pour une lecture confortable sur téléphone, profil de navigateur dédié « Karatou démo » sans favoris, extensions ni notifications, curseur agrandi, thème clair.
- **Téléphone** : enregistrement natif, mode « Ne pas déranger », barre d'état sans notification (recadrer si besoin).
- **Comptes** : une adresse e-mail réservée au tournage ; comptes gratuits Lovable, Bolt et Claude ; Claude Code sur l'abonnement payant de l'owner. Comptes de test de l'application (« Hadiza », « Rahila », « Moussa », « évaluateur ») créés avec des adresses de test du tournage.
- **Données** : uniquement inventées et étiquetées « exemple » ; noms de bourses génériques (« Bourse de master en santé publique (exemple) », « Programme de recherche en agronomie (exemple) », « Bourse d'été en informatique (exemple) ») ; dates calculées à partir du jour du tournage. Aucune donnée d'apprenant, aucune clé, aucun fichier de configuration, aucun identifiant de projet visible (flouter au besoin).
- **Langue des interfaces** : elles peuvent être en anglais [à vérifier au moment du tournage]. On annote en français, une annotation à la fois, au moins 2,5 s, toujours doublée d'une forme (cadre, coche, croix).
- **Méthode** : chaque séquence de construction est enregistrée en continu (pour l'accéléré), puis les écrans clés sont rejoués lentement pour les annotations. Les réponses de l'IA varient d'un essai à l'autre : enregistrer d'abord, puis ajuster la voix off des captures au résultat réel (phrases signalées dans les fiches).
- Liste détaillée par leçon : section 2.6.

### Organisation du tournage

- **Ordre** : les captures d'abord, le face caméra ensuite. La voix des captures doit coller au résultat réel.
- **Session 1 — captures des leçons 1 à 3** (une demi-journée) : micro-application (L1) ; phrase vague et entretien avec Claude (L2) ; mode Plan et prototype (L3) ; écrans d'accueil de Lovable, Bolt, de l'application mobile de Lovable et de l'onglet Code de Claude ; session Claude Code sur Karatou Academy (L1 et L5).
- **Session 2 — captures des leçons 4 à 6** (une demi-journée) : base de données, connexion, deux comptes (L4) ; défaut, contrôle de sécurité, publication (L5) ; application de Moussa dans Bolt, publication, fiche, formulaire de dépôt (L6). L'application de Moussa est construite avant cette session.
- **Session 3 — face caméra** (une journée) : par blocs, toutes leçons confondues. Toutes les ouvertures B1 (énergie un cran au-dessus), puis les B2, les B3, les phrases de B4, les B5 en CAM B, les B6. Les inserts en fin de journée.
- **Session 4 — langues** (une à deux heures) : ouvertures et conclusions EN, HA, DJE, même tenue, même décor.
- **Prises de sécurité** : deux bonnes prises par bloc ; 1 s de silence avant et après chaque bloc ; annoncer le bloc avant la prise (« vc3, B2, prise 2 ») ; un clap des mains pour synchroniser A-cam, B-cam et micro.
- **Ton constant** : calme, direct, chaleureux ; même distance au micro ; même tenue pour tout le cours (couleur unie, sans rayures fines ni logo) ; repères au sol pour le siège et les pieds de lumière.
- **Durée estimée** : deux demi-journées de captures, une journée de face caméra, deux heures pour les langues, plus une demi-journée de réserve pour les reprises.

### Checklist du jour J

- [ ] Batteries chargées, batterie externe, onduleur ; stockage libre sur les deux caméras.
- [ ] Mode avion sur les caméras ; notifications coupées sur l'ordinateur et les téléphones de capture.
- [ ] Micro testé ; 30 s de silence de la pièce enregistrées ; ventilateur et climatisation coupés.
- [ ] Lumières à la même température ; essai anti-scintillement de 10 s.
- [ ] Repères au sol ; cadrage vérifié avec la zone des sous-titres libre.
- [ ] Téléprompteur chargé avec la dernière version des scripts (après ajustement aux captures).
- [ ] Profil de navigateur « Karatou démo » ouvert ; comptes connectés ; données d'exemple prêtes.
- [ ] Aucune clé, aucun fichier de configuration, aucune donnée réelle visible à l'écran.
- [ ] Mentions « [à vérifier au moment du tournage] » contrôlées dans l'interface du jour (libellés, versions gratuites).
- [ ] Autorisations écrites des personnes photographiées pour les plans E.
- [ ] Eau, tenue de rechange, poudre matifiante.

## 2.5 Les leçons

### Leçon 1 — Vibe coding : ce que c'est, où ça s'arrête (`vc1`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez expliquer le vibe coding et choisir un premier projet réaliste. »
- **Cas réel (B1 → B6)** : Hadiza, 24 ans, étudiante à Niamey, a raté une bourse l'an dernier : la date limite était passée de deux jours. Ses informations étaient éparpillées entre des messages WhatsApp, des captures d'écran et un cahier. Enjeu : peut-elle créer elle-même un outil de suivi, sans savoir coder, et lequel ? En B6, elle passe ses idées aux trois feux : le suivi de ses candidatures est au vert, c'est son projet pour tout le cours.
- **Unités de notion (B3)** : 1. Vous décrivez, l'IA écrit le code — Vous dites en langage courant ce que l'application doit faire ; l'IA écrit le texte que l'ordinateur exécute. · 2. Décrire, regarder, corriger — On avance par petites boucles, une demande à la fois ; la compétence, c'est décrire avec précision et tester. · 3. Trois outils, deux familles — Lovable et Bolt construisent dans le navigateur (version gratuite limitée ; Lovable a une application mobile ; Bolt fonctionne mieux sur ordinateur) ; Claude Code est un agent de code, payant, pour aller plus loin. · 4. Les trois feux pour choisir — Vert : peu d'utilisateurs, ni argent ni données sensibles ; orange : données personnelles simples ; rouge : argent, santé, identité, enfants, donc un développeur.
- **Démo (B4)** : Lovable (web, ordinateur), compte gratuit de démonstration du tournage. 1. Se connecter, ouvrir un nouveau projet. 2. Coller la consigne avec trois candidatures inventées (dates à J+3, J+12 et J+40 par rapport au jour du tournage). 3. Lancer ; laisser l'IA construire (accéléré au montage). 4. Lire l'aperçu ; vérifier à la main un nombre de jours restants. 5. Envoyer l'amélioration : « Trie de la plus urgente à la moins urgente. Sous sept jours, ajoute le mot Urgent et une icône. » 6. Vérifier la nouvelle version, puis passer en vue téléphone [à vérifier au moment du tournage : emplacement du sélecteur d'appareil dans l'aperçu]. Résultat attendu : trois cartes triées par échéance, la plus proche marquée « Urgent » avec une icône, lisibles en vue téléphone. Si le premier essai trie déjà ou signale déjà l'urgence, choisir une autre amélioration visible (par exemple les dates au format jour/mois/année) et adapter la phrase « Je veux voir l'urgence d'un coup d'œil ».
- **Consolidation (B5)** : prédiction. Moussa, quincaillier à Zinder, hésite entre deux idées : A, un carnet de ses commandes aux fournisseurs, pour lui seul ; B, un crédit client payé par mobile money, avec la pièce d'identité des clients. Laquelle choisir pour commencer ? Réponse : A (feu vert : un utilisateur, ni argent ni données sensibles) ; B est au rouge (argent et identité) et demande un développeur et le respect de la loi sur les données.
- **Consigne à copier** :

```text
Crée une page simple, lisible sur téléphone, qui affiche mes prochaines dates limites de candidature.
Pour chacune : le nom, la date limite et le nombre de jours restants.
Utilise ces données d'exemple, inventées : [candidature 1 – date], [candidature 2 – date], [candidature 3 – date].
```

- **Exercice** : « Choisissez votre premier projet » — 1. Copiez la consigne dans Lovable ou Bolt (version gratuite) avec trois candidatures inventées, puis demandez une amélioration de votre choix. 2. Notez trois tâches qui vous font perdre du temps chaque semaine. 3. Passez chaque idée aux trois feux et gardez une idée feu vert, décrite en une phrase.
- **Carte de rappel** : 1. Expliquer le vibe coding et choisir un premier projet réaliste 2. Décrire, regarder, corriger : on avance par petites boucles 3. Lovable et Bolt pour démarrer, Claude Code pour aller loin 4. Argent, santé, identité : feu rouge, appelez un développeur
- **Quiz** :
  1. Qu'est-ce que le vibe coding ? — A) Apprendre un langage de programmation pas à pas B) Copier le code d'une autre application C) Décrire en langage courant ce que l'application doit faire, pendant que l'IA écrit le code D) Télécharger une application toute faite — **Réponse : C**
  2. Votre premier essai ne donne pas tout à fait ce que vous voulez. Que faites-vous ? — A) Vous regardez le résultat et décrivez précisément l'amélioration voulue B) Vous abandonnez l'outil C) Vous recollez exactement la même consigne D) Vous attendez une mise à jour de l'outil — **Réponse : A**
  3. Quel outil est un agent de code, qui modifie les fichiers de votre projet avec votre accord et demande une version payante ? — A) Lovable B) Bolt C) Un tableur D) Claude Code — **Réponse : D**
  4. Quelle idée est « feu vert » pour un premier projet ? — A) Une application de paiement par mobile money B) Un carnet de commandes aux fournisseurs, pour soi seul C) Un registre des dossiers médicaux d'un centre de santé D) Un fichier des pièces d'identité des clients — **Réponse : B**
  5. Dans le vibe coding, qui reste responsable de l'application et de ses risques ? — A) L'IA qui écrit le code B) L'outil utilisé C) Vous D) Personne, tout est automatique — **Réponse : C**
- **Marques citées** : Lovable, Bolt, Claude, Claude Code, Collins (dictionnaire), WhatsApp.

#### Script

Durée estimée : 6:32 · Mots dits : 750

**[B1 — Accroche · 0:00–0:28]**

**[E · SITUATION]** « Niamey — Hadiza, 24 ans, étudiante » — VO : L'an dernier, Hadiza a raté une bourse.

**[F · CAM A]** À la fin de cette leçon, vous saurez expliquer le vibe coding et choisir un premier projet réaliste. Hadiza étudie à Niamey. Sa date limite était passée de deux jours. Ses informations étaient éparpillées : messages WhatsApp, captures, un cahier. Peut-elle créer sa propre application, sans savoir coder ?

[PAUSE 1 s]

**[B2 — Cadrage · 0:28–1:17]**

**[F · CAM A]** Je vous réponds par une preuve. Karatou Academy, la plateforme de ce cours, je la développe de cette façon.

**[A · ÉCRAN]** Je décris ce que je veux, en français. Une IA écrit le code. Je teste, puis je corrige. Parfois, ça échoue, et je recommence. Cette façon de faire a un nom : le vibe coding. L'expression vient du chercheur Andrej Karpathy, en février deux mille vingt-cinq. Le dictionnaire Collins en a fait son mot de l'année.

**[F · CAM A]** Attention à un malentendu. « Sans savoir coder » ne veut pas dire « sans travailler ». Vous restez le chef de projet. Vous décidez, vous testez, vous répondez des risques.

[PAUSE 1 s]

**[B3 — Notion · 1:17–3:39]**

**[C · SCHÉMA]** « 1. Vous décrivez, l'IA écrit le code » — VO : Première idée : vous décrivez, l'IA écrit le code.

**[F · CAM A]** Vous dites ce que l'application doit faire, en langage courant. L'IA écrit le code, c'est-à-dire le texte que l'ordinateur exécute. Autrement dit : vous parlez, l'IA programme. Par exemple : « Affiche mes candidatures, la plus urgente en haut. » L'IA en tire des pages de code.

**[C · SCHÉMA]** « 2. Décrire, regarder, corriger » — VO : Deuxième idée : la boucle. Décrire, regarder, corriger.

**[F · CAM A]** Le premier essai est rarement le bon. Vous regardez le résultat. Vous corrigez en décrivant mieux. Puis vous recommencez, une demande à la fois. Attention : l'IA peut annoncer « c'est corrigé » alors que rien n'a changé. Vérifiez toujours vous-même.

**[F · CAM B]** Votre vraie compétence est là : décrire avec précision, et tester sans complaisance.

[PAUSE 1 s]

**[C · SCHÉMA]** « 3. Trois outils, deux familles » — VO : Troisième idée : trois outils, deux familles.

**[A · ÉCRAN]** Lovable et Bolt construisent des applications dans le navigateur. Écrans, données, publication : tout est au même endroit. Les deux ont une version gratuite, limitée en nombre de messages. Chaque consigne en consomme : réfléchissez avant d'écrire. Lovable a aussi une application mobile. Bolt fonctionne mieux sur ordinateur.

**[A · ÉCRAN]** Claude Code est d'une autre famille : c'est un agent de code. Autrement dit, un programme qui modifie les fichiers de votre projet, avec votre accord. Il demande une version payante. On le retrouve en leçon cinq.

[PAUSE 1 s]

**[C · SCHÉMA]** « 4. Les trois feux pour choisir » — VO : Quatrième idée : passez votre projet aux trois feux. Vert : peu d'utilisateurs, pas d'argent, pas de données sensibles. Orange : des données personnelles simples, comme un nom ou un e-mail. Rouge : argent, santé, pièces d'identité, données d'enfants.

**[F · CAM A]** À l'orange, prudence : appliquez les règles de la leçon cinq. Au rouge, faites appel à un développeur. Pour un premier projet, visez le vert. Un outil pour vous, ou pour quelques personnes, qui règle un vrai problème. Vert ne veut pas dire inutile. Il veut dire : sans risque grave pour les autres. Passons à l'écran.

[PAUSE 1 s]

**[B4 — Application · 3:39–5:19]**

**[A · ÉCRAN]** Je construis un premier essai pour Hadiza. J'ouvre Lovable, avec un compte gratuit de démonstration. Je colle une consigne courte.

**[G · CONSIGNE]** « Crée une page simple, lisible sur téléphone, qui affiche mes prochaines dates limites de candidature. Pour chacune : le nom, la date limite et le nombre de jours restants. Utilise ces données d'exemple, inventées : [candidature 1 – date], [candidature 2 – date], [candidature 3 – date]. » — VO : La voici. Les candidatures sont des exemples inventés. Jamais de vraies données personnelles dans une consigne. Mettez la vidéo en pause pour la recopier.

**[A · ÉCRAN]** Je lance. L'IA écrit le code, et j'accélère l'image. Voici l'aperçu : trois candidatures, avec leurs jours restants. Je vérifie un calcul à la main : trois jours, c'est juste. Je regarde, et je décide d'une amélioration. Je veux voir l'urgence d'un coup d'œil. Je l'écris : « Trie de la plus urgente à la moins urgente. Sous sept jours, ajoute le mot Urgent et une icône. » Nouvelle version. La plus proche porte le mot Urgent, avec son icône. Je passe en vue téléphone : c'est lisible.

**[F · CAM A]** Ce n'est pas encore une vraie application. Rien n'est enregistré, rien n'est protégé. Mais vous avez vu la boucle entière : décrire, regarder, corriger. Le reste du cours fait de cet essai une vraie application, étape par étape.

[PAUSE 1 s]

**[B5 — Consolidation · 5:19–6:03]**

**[F · CAM B]** À vous de jouer. Moussa tient une quincaillerie à Zinder. Il hésite entre deux idées d'application.

**[B · CARTE]** « Quel premier projet ? · A — Ses commandes fournisseurs · B — Crédit client + mobile money » — VO : Idée A : un carnet de ses commandes aux fournisseurs, pour lui seul. Idée B : un crédit pour ses clients, payé par mobile money, avec leur pièce d'identité. Laquelle choisir pour commencer ?

**[SILENCE 2 s]**

**[F · CAM B]** L'idée A. Feu vert : un seul utilisateur, pas d'argent, pas de données sensibles. L'idée B touche à l'argent et à l'identité de ses clients. Feu rouge. Elle demande un développeur, et le respect de la loi sur les données.

[PAUSE 1 s]

**[B6 — Clôture · 6:03–6:32]**

**[B · CARTE DE RAPPEL]** « 1. Expliquer le vibe coding et choisir un premier projet réaliste » « 2. Décrire, regarder, corriger : on avance par petites boucles » « 3. Lovable et Bolt pour démarrer, Claude Code pour aller loin » « 4. Argent, santé, identité : feu rouge, appelez un développeur » — VO : Retenez quatre points. Le vibe coding : vous décrivez, l'IA code. On avance par petites boucles. Lovable et Bolt pour démarrer, Claude Code pour aller plus loin. Et au feu rouge, un développeur.

**[F · CAM A]** Et Hadiza ? Elle a passé ses idées aux trois feux. Le suivi de ses candidatures est au vert : c'est son projet. À votre tour. Choisissez votre premier projet.

#### Liste des plans

| # | Type | Cadre / source | Contenu | Durée | Notes |
|---|---|---|---|---|---|
| 1 | E | Photo mise en scène ou illustration | Hadiza à son bureau à Niamey, téléphone en main, papiers et captures épars ; surtitre « Niamey — Hadiza, 24 ans, étudiante » | 4 s | B1. Pas de faux écran de messagerie : l'éparpillement passe par les papiers et le geste |
| 2 | F | CAM A, plan poitrine | Promesse (dès 0:04), date limite dépassée, question de Hadiza | 24 s | B1 |
| 3 | F | CAM A | « Je vous réponds par une preuve… », puis le malentendu « sans savoir coder ≠ sans travailler » | 23 s | B2, deux passages |
| 4 | A | Navigateur + application Claude (onglet Code) + page Collins | Karatou Academy (pages publiques), session Claude Code réelle sur son dépôt, page du mot de l'année 2025 du dictionnaire Collins | 26 s | B2. Annoter « Source : Collins, 2025 ». Aucune clé, aucun fichier de configuration, aucune donnée d'apprenant |
| 5 | C | Schémas animés | Cartes des unités 1 et 2 : bulle de texte → lignes de code → écran ; boucle décrire → regarder → corriger | 8 s | B3, deux cartes |
| 6 | F | CAM A, puis CAM B | Explications des unités 1 et 2 ; « Votre vraie compétence est là… » en CAM B | 46 s | B3 |
| 7 | C | Schéma comparatif | Carte de l'unité 3 : « constructeurs dans le navigateur » (Lovable, Bolt) / « agent de code » (Claude Code) | 4 s | B3 |
| 8 | A | Navigateur + téléphone + application Claude | Accueils de Lovable (web), de l'application mobile de Lovable et de Bolt ; onglet Code de Claude | 40 s | B3. Annoter « version gratuite limitée », puis « version payante » |
| 9 | C | Schéma animé | Carte de l'unité 4 : trois feux, chacun avec pictogramme, mot (« Vert », « Orange », « Rouge ») et critères | 17 s | B3. Jamais la couleur seule |
| 10 | F | CAM A | Conclusion des trois feux, puis « Passons à l'écran » | 27 s | B3 |
| 11 | G | Carte de consigne | Consigne de la fiche, texte exact | 12 s | B4. Fond clair, lisible sur téléphone |
| 12 | A | Lovable web, compte de démo | Ouverture → consigne collée → génération accélérée → aperçu → calcul vérifié → amélioration → nouvelle version → vue téléphone | 69 s | B4. Environ 18 s d'accéléré sans voix ; cadre sur « Urgent » + icône |
| 13 | F | CAM A | Bilan de B4, puis clôture de B6 | 32 s | B4 et B6 |
| 14 | F | CAM B | Question de Moussa, puis réponse « L'idée A… » | 27 s | B5. Respiration gardée avant la réponse |
| 15 | B | Cartes | « Quel premier projet ? » (A/B) avec 2 s de silence ; carte de rappel (4 points révélés un par un) | 32 s | B5 et B6 |

#### Montage idéal

| Temps | Timecode cible | Image principale | Habillage (motion graphics) | Texte à l'écran | Son | Transition |
|---|---|---|---|---|---|---|
| B1 | 0:00–0:28 | E (Hadiza), puis F CAM A | Surtitre persona ; promesse en incrustation discrète à gauche | « Niamey — Hadiza, 24 ans, étudiante » ; promesse | voix seule | coupe |
| B2 | 0:28–1:17 | F CAM A ; A (Karatou Academy → Claude Code → page Collins) ; F CAM A | Cadre sur la demande en français, puis sur le code produit ; mention de source | « Vibe coding — Andrej Karpathy, février 2025 » ; « Source : Collins, 2025 » | voix ; nappe discrète sous les captures (Partie 1) | coupe |
| B3 | 1:17–3:39 | C (cartes des unités 1 à 4), F CAM A/B, A (accueils des outils, onglet Code de Claude) | Indicateur d'unité 1/4 → 4/4 ; boucle animée ; feux avec pictogrammes et mots | Titres des unités ; « Version gratuite limitée » ; « Version payante » | voix seule | coupe ; glissement de carte entre unités |
| B4 | 3:39–5:19 | A (démo Lovable), G (consigne), F CAM A | Compteur d'étapes ; pictogramme « accéléré » ; cadre sur « Urgent » + icône ; zoom ≤ 6 % sur l'aperçu | Consigne (G) ; « Accéléré » ; « Vue téléphone » | voix ; nappe légère pendant l'accéléré | coupe |
| B5 | 5:19–6:03 | F CAM B ; B (carte A/B) ; F CAM B | Carte A/B ; repère visuel pendant les 2 s de silence ; feu vert / feu rouge (pictogramme + mot) | « Quel premier projet ? » ; « A — Ses commandes fournisseurs » ; « B — Crédit client + mobile money » | voix ; silence total 2 s | coupe |
| B6 | 6:03–6:32 | B (carte de rappel), F CAM A | Points révélés un par un, au rythme de la voix | 4 points de la carte | voix seule | coupe, puis carte de clôture (Partie 1) |

**Notes de montage** : la promesse démarre vers 0:04 : couper le plan E dès la fin de sa phrase. Changer d'image toutes les 4 à 8 s sans agitation ; en B3, une carte-titre courte puis le face caméra ou la capture. Couper les hésitations et les redites ; garder la respiration avant « L'idée A ». Zooms sur capture limités à 6 %. Pendant les captures qui occupent le bas de l'écran (aperçu en vue téléphone), réduire la capture à 85 % dans un cadre et garder les sous-titres en bas. Plans de couverture disponibles : inserts mains et téléphone, B-cam, captures d'accueil des outils. L'accéléré est signalé à l'écran, jamais caché.

#### Versions EN / HA / DJE

- **À re-filmer dans la langue** (≈ 30 s) : ouverture (B1, plan 2) — « À la fin de cette leçon, vous saurez expliquer le vibe coding et choisir un premier projet réaliste. Peut-elle créer sa propre application, sans savoir coder ? » ; conclusion (B6) — « Et Hadiza ? Elle a passé ses idées aux trois feux. Le suivi de ses candidatures est au vert : c'est son projet. À votre tour. Choisissez votre premier projet. »
- **Doublé en voix clonée** : B2 (plan 3) → « Je vous réponds par une preuve » couvert par la capture Karatou Academy (plan 4), malentendu couvert par une carte « Sans savoir coder ≠ sans travailler » ; B3 unités 1–2 (plan 6) → schémas des unités 1 et 2 (plan 5) prolongés ; B3 conclusion des feux (plan 10) → schéma des trois feux (plan 9) prolongé ; B4 bilan (plan 13, première partie) → aperçu final en vue téléphone ; B5 (plan 14) → carte A/B, puis schéma des trois feux avec le vert allumé.
- **Notes d'adaptation** : garder « vibe coding » en anglais dans les trois langues ; en HA et en DJE, le gloser par une périphrase validée par un locuteur (« on décrit l'application avec des mots, l'IA écrit le code »). « Chef de projet » et « répondre des risques » : préférer « c'est vous qui décidez et qui êtes responsable ». En EN, dire « Collins English Dictionary ». « Quincaillerie » : en EN « hardware store ». « Mobile money » se dit ainsi dans les trois langues. Les trois feux sont une image universelle : la garder.

### Leçon 2 — Le cahier des charges d'une page (`vc2`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez écrire le cahier des charges d'une page de votre application. »
- **Cas réel (B1 → B6)** : Hadiza a tapé « Fais-moi une application de bourses » dans Lovable : le résultat est soigné mais générique, et l'essai a consommé une part de son quota gratuit. Enjeu : décrire son besoin avant de construire, pour que l'IA ne devine pas à sa place. En B6, elle a sa page de six rubriques, relue et corrigée, prête pour la leçon 3.
- **Unités de notion (B3)** : 1. Le problème et la personne — Une phrase chacun ; si le problème ne tient pas en une phrase, le projet n'est pas mûr. · 2. Les écrans et les actions — Deux ou trois écrans, décrits avec des verbes ; un croquis au crayon peut accompagner la consigne en photo [à vérifier au moment du tournage : dépôt d'image dans la version gratuite de Lovable et de Bolt]. · 3. Données gardées, données jamais gardées — Ce que l'application enregistre, et ce qu'elle ne garde jamais (pièces d'identité, copies de documents, mots de passe). · 4. La version 1 et ses critères — Ce qui attend la version 2, et trois critères vérifiables par oui ou par non.
- **Démo (B4)** : Claude, version gratuite (navigateur), compte de démo du tournage. 1. Nouvelle conversation ; coller la consigne avec l'idée de Hadiza : « Une application pour suivre mes candidatures de bourses : les échéances et les documents à fournir. » 2. Répondre aux questions une par une, avec les réponses préparées ci-dessous. 3. Recevoir la page. 4. Relire rubrique par rubrique : compléter la liste « jamais gardées », supprimer tout champ sensible proposé, rendre testable tout critère vague. 5. Copier la page dans un fichier texte pour la leçon 3. Résultat attendu (page de référence, à réutiliser en leçons 3 à 5) : **Problème** — je perds le fil de mes candidatures et je rate des dates limites. **Personne** — moi, Hadiza, étudiante, surtout sur mon téléphone. **Écrans** — 1) tableau de bord : candidatures triées par date limite, jours restants, mention « Urgent » sous 7 jours ; 2) fiche d'une candidature : informations, documents à fournir à cocher, progression ; 3) ajouter ou modifier une candidature. **Données gardées** — nom de la bourse, organisme, pays, lien officiel, date limite, statut (à préparer, envoyée, résultat), documents à fournir (cochés ou non), courte note. **Jamais gardées** — numéro de passeport ou de pièce d'identité, copies de documents, mots de passe, informations sur d'autres personnes. **Pas maintenant (version 2)** — rappels par SMS ou e-mail, partage, envoi de fichiers. **Critères** — 1) sur mon téléphone, je vois la candidature la plus urgente en premier, sans faire défiler ; 2) je coche un document en un seul geste ; 3) seuls le nom et la date limite sont obligatoires pour ajouter une candidature. Ne pas ajouter de critère sur les dates passées : ce cas oublié est le défaut de la leçon 5. Captures complémentaires pour B3 : la page finale affichée rubrique par rubrique (problème et personne, écrans, données). Adapter les phrases de VO « Quelques questions plus tard » et « Si l'assistant propose un champ sensible » au déroulé réel.
- **Consolidation (B5)** : prédiction. Dans son premier jet, Hadiza a écrit « L'application doit être simple et moderne. » L'IA va-t-elle comprendre ce qu'elle veut ? Réponse : non, elle devine ; il faut un critère vérifiable (« Je coche un document en un seul geste », « Je vois la date limite sans faire défiler »).
- **Consigne à copier** :

```text
Tu m'aides à écrire le cahier des charges d'une petite application web, en français simple.
Pose-moi une seule question à la fois, et attends ma réponse avant la suivante.
Couvre ces rubriques : le problème ; la personne qui utilise l'application ; les écrans et ce qu'on y fait ; les données gardées et celles qu'on ne garde jamais ; ce qui attend la version 2 ; trois critères de réussite que je peux tester moi-même.
Ne me demande aucune donnée personnelle réelle.
Quand tu as assez d'informations, rédige le tout sur une page, avec ces rubriques pour titres.
Mon idée en une phrase : [décrivez votre idée].
```

- **Exercice** : « Écrivez votre cahier des charges d'une page » — 1. Copiez la consigne dans un assistant conversationnel gratuit et répondez aux questions, une par une. 2. Relisez : supprimez tout champ sensible et complétez la liste « jamais gardées ». 3. Vérifiez que vos trois critères se testent par oui ou par non, puis gardez la page pour la leçon 3.
- **Carte de rappel** : 1. Écrire le cahier des charges d'une page de votre application 2. Problème, personne, écrans, données, version 1, critères 3. Notez aussi les données que l'app ne garde jamais 4. Un critère de réussite doit pouvoir se tester
- **Quiz** :
  1. Pourquoi écrire un cahier des charges avant la première consigne ? — A) Parce que l'outil l'exige B) Pour que l'IA ne devine pas à votre place, et pour ne pas gaspiller votre quota gratuit C) Pour éviter d'avoir à tester D) Pour remplacer la version 1 — **Réponse : B**
  2. Laquelle de ces rubriques fait partie du cahier des charges d'une page ? — A) Le logo définitif B) Le code à utiliser C) Les écrans et ce qu'on y fait D) Le nom du serveur — **Réponse : C**
  3. Quelle donnée l'application de Hadiza ne doit-elle jamais garder ? — A) Le numéro de son passeport B) La date limite de la bourse C) Le lien officiel de l'appel D) Le statut de la candidature — **Réponse : A**
  4. Lequel de ces critères de réussite peut se tester ? — A) « L'application doit être moderne. » B) « L'application doit être agréable. » C) « L'application doit être simple. » D) « Sur mon téléphone, je vois la candidature la plus urgente en premier. » — **Réponse : D**
  5. Où Hadiza range-t-elle « rappels par SMS » ? — A) Dans les données gardées B) Dans « Pas maintenant », pour la version 2 C) Dans les données jamais gardées D) Dans les critères de réussite — **Réponse : B**
- **Marques citées** : Lovable, Claude.

#### Script

Durée estimée : 6:41 · Mots dits : 755

**[B1 — Accroche · 0:00–0:28]**

**[E · SITUATION]** « Niamey — Hadiza devant son ordinateur » — VO : Hadiza a tapé : « Fais-moi une application de bourses. »

**[F · CAM A]** À la fin de cette leçon, vous saurez écrire le cahier des charges d'une page de votre application. Son essai dans Lovable ne répond pas à son besoin. En leçon un, vous avez choisi un projet feu vert. Maintenant, il faut le décrire, avant la première consigne.

[PAUSE 1 s]

**[B2 — Cadrage · 0:28–1:13]**

**[A · ÉCRAN]** Voici ce que Lovable a produit avec cette phrase. Une page soignée, mais générique. L'IA a deviné à la place de Hadiza. Et chaque essai consomme une part du quota gratuit.

**[F · CAM A]** Le malentendu, c'est de croire qu'un cahier des charges est un gros document d'ingénieur. Non. C'est une page, en langage simple. Elle dit à l'IA quoi construire, et pour qui. Autrement dit : c'est la description de votre application, avant le code. Si vous avez suivi le module de gestion de projet, c'est l'étape « Cadrer ».

**[B · CARTE]** « Le cahier des charges · Une page · Six rubriques » — VO : Une page, six rubriques. Voyons-les.

[PAUSE 1 s]

**[B3 — Notion · 1:13–3:41]**

**[C · SCHÉMA]** « 1. Le problème et la personne » — VO : Première rubrique : le problème et la personne, en une phrase chacun.

**[A · ÉCRAN]** Voici ces deux lignes sur la page de Hadiza. Le problème : « Je perds le fil de mes candidatures, et je rate des dates limites. » La personne : elle-même, sur son téléphone. Ce problème est précis : il parle de dates limites, pas de « gestion ».

**[F · CAM A]** Si le problème ne tient pas en une phrase, le projet n'est pas encore mûr. Attention au piège : « Je veux une application » n'est pas un problème. C'est déjà une solution.

**[C · SCHÉMA]** « 2. Les écrans et les actions » — VO : Deuxième rubrique : les écrans, et ce qu'on y fait.

**[A · ÉCRAN]** Utilisez des verbes. Écran un, le tableau de bord : voir la prochaine échéance. Écran deux, la fiche d'une candidature : cocher les documents fournis. Écran trois : ajouter ou modifier une candidature.

**[F · CAM A]** Trois écrans suffisent pour commencer. Dessinez-les au crayon, trois cases sur une feuille. Vous pouvez même joindre la photo du croquis à votre consigne.

[PAUSE 1 s]

**[C · SCHÉMA]** « 3. Données gardées, données jamais gardées » — VO : Troisième rubrique : les données. Ce sont les informations que l'application enregistre.

**[A · ÉCRAN]** Voici cette rubrique sur la page de Hadiza. L'application garde le nom de la bourse, l'organisme et le lien officiel. Puis la date limite, le statut, et les documents à fournir. Hadiza écrit aussi ce que l'application ne garde jamais. Pas de numéro de passeport. Pas de copie de diplôme. Pas de mot de passe.

**[F · CAM A]** Moins vous gardez, moins vous risquez. Une donnée que vous ne gardez pas ne peut pas fuiter.

[PAUSE 1 s]

**[C · SCHÉMA]** « 4. La version 1 et ses critères » — VO : Quatrième rubrique : la version un, et ses critères de réussite.

**[F · CAM B]** Listez ce qui attend la version deux : rappels par SMS, partage, envoi de fichiers. Ce qui part en version deux n'est pas abandonné. C'est rangé pour plus tard. Puis écrivez trois critères que vous pouvez tester vous-même. Un critère, c'est une phrase qu'on vérifie par oui ou par non. Par exemple : « Sur mon téléphone, je vois la candidature la plus urgente en premier. »

[PAUSE 1 s]

**[B4 — Application · 3:41–5:31]**

**[F · CAM A]** Écrivons celui de Hadiza. Je me fais aider par un assistant conversationnel gratuit, ici Claude. Il va m'interviewer, comme un ami qui pose les bonnes questions avant d'aider.

**[A · ÉCRAN]** Je colle la consigne. Elle demande une seule question à la fois, et une page à la fin.

**[G · CONSIGNE]** « Tu m'aides à écrire le cahier des charges d'une petite application web, en français simple. Pose-moi une seule question à la fois, et attends ma réponse avant la suivante. Couvre ces rubriques : le problème ; la personne qui utilise l'application ; les écrans et ce qu'on y fait ; les données gardées et celles qu'on ne garde jamais ; ce qui attend la version 2 ; trois critères de réussite que je peux tester moi-même. Ne me demande aucune donnée personnelle réelle. Quand tu as assez d'informations, rédige le tout sur une page, avec ces rubriques pour titres. Mon idée en une phrase : [décrivez votre idée]. » — VO : La voici. Mettez la vidéo en pause pour la recopier.

**[A · ÉCRAN]** Première question : qui utilise l'application ? Je réponds : Hadiza, seule, sur son téléphone. Deuxième question : quels écrans ? Je donne mes trois écrans. Troisième question : quelles données ne jamais garder ? Je réponds : aucun numéro de pièce d'identité, aucune copie de document. J'accélère. Quelques questions plus tard, la page arrive.

**[A · ÉCRAN]** Je relis, rubrique par rubrique. Le problème tient-il en une phrase ? Oui. Dans les données, je cherche la liste « jamais gardées ». Si l'assistant propose un champ sensible, je le supprime. Si un critère est vague, je le rends testable. Voilà la page de Hadiza. Je la garde dans un fichier texte, pour la leçon trois.

**[F · CAM A]** Remarquez : je n'ai pas encore ouvert Lovable. Réfléchir avec un assistant gratuit ne consomme aucun crédit de construction.

[PAUSE 1 s]

**[B5 — Consolidation · 5:31–6:12]**

**[F · CAM B]** Un petit test. Dans son premier jet, Hadiza avait écrit : « L'application doit être simple et moderne. »

**[B · CARTE]** « Simple et moderne : l'IA va-t-elle comprendre ? » — VO : L'IA va-t-elle comprendre ce qu'elle veut ?

**[SILENCE 2 s]**

**[F · CAM B]** Non. Elle va deviner. « Simple », pour vous et pour l'IA, ce n'est pas la même chose. Écrivez plutôt : « Je coche un document en un seul geste. » Ou : « Je vois la date limite sans faire défiler. » Ça, vous pouvez le vérifier. Même piège avec « rapide » ou « intuitive ». Remplacez-les par un geste que vous pouvez vérifier.

[PAUSE 1 s]

**[B6 — Clôture · 6:12–6:41]**

**[B · CARTE DE RAPPEL]** « 1. Écrire le cahier des charges d'une page de votre application » « 2. Problème, personne, écrans, données, version 1, critères » « 3. Notez aussi les données que l'app ne garde jamais » « 4. Un critère de réussite doit pouvoir se tester » — VO : Retenez quatre points. Une page avant la première consigne. Six rubriques. Les données jamais gardées. Et des critères qu'on peut tester.

**[F · CAM A]** Hadiza a maintenant sa page. Elle la relit d'un trait, et elle sait quoi demander. Ce qui attend la version deux est écrit, noir sur blanc. À vous. Écrivez votre cahier des charges d'une page.

#### Liste des plans

| # | Type | Cadre / source | Contenu | Durée | Notes |
|---|---|---|---|---|---|
| 1 | E | Photo mise en scène ou illustration | Hadiza devant son ordinateur, l'air déçu ; surtitre « Niamey — Hadiza devant son ordinateur » | 4 s | B1 |
| 2 | F | CAM A | Promesse, résultat décevant, rappel de la leçon 1 | 24 s | B1 |
| 3 | A | Lovable web, compte de démo | Résultat réel de la phrase vague « Fais-moi une application de bourses » | 15 s | B2. Adapter la VO si le résultat diffère ; croix sur ce qui ne répond pas au besoin |
| 4 | F | CAM A | Malentendu « gros document d'ingénieur » → « une page » ; renvoi au module de gestion de projet | 26 s | B2 |
| 5 | B | Carte | « Le cahier des charges · Une page · Six rubriques » | 5 s | B2 |
| 6 | C | Schémas animés | Cartes-titres des unités 1 à 4, sur une page stylisée dont les rubriques s'allument | 20 s | B3, quatre cartes |
| 7 | A | Éditeur de texte ou notes du téléphone | La page de Hadiza (résultat de la démo) : problème et personne, écrans, données gardées et jamais gardées | 60 s | B3. Surtitre « Résultat de la démo » ; coche sur « gardées », croix sur « jamais gardées » |
| 8 | F | CAM A | Commentaires des unités 1 à 3 : piège de la solution, croquis au crayon, « une donnée non gardée ne fuit pas » | 36 s | B3. Insert possible : croquis à trois cases |
| 9 | F | CAM B | Unité 4 : version 2 et critères testables | 31 s | B3 |
| 10 | F | CAM A | Annonce de la démo, puis remarque sur les crédits | 24 s | B4, deux passages |
| 11 | G | Carte de consigne | Consigne de la fiche, texte exact | 12 s | B4. Deux cartes successives si plus de 6 lignes |
| 12 | A | Claude, version gratuite, navigateur | Consigne collée → questions et réponses (accéléré) → page finale → relecture → copie dans un fichier texte | 75 s | B4. Environ 12 s d'accéléré sans voix ; une annotation à la fois |
| 13 | F | CAM B | Question « simple et moderne », puis réponse | 35 s | B5 |
| 14 | B | Cartes | « Simple et moderne : l'IA va-t-elle comprendre ? » (2 s de silence) ; carte de rappel (4 points) | 18 s | B5 et B6 |
| 15 | F | CAM A | Clôture : Hadiza a sa page ; titre de l'exercice | 17 s | B6 |

#### Montage idéal

| Temps | Timecode cible | Image principale | Habillage (motion graphics) | Texte à l'écran | Son | Transition |
|---|---|---|---|---|---|---|
| B1 | 0:00–0:28 | E (Hadiza devant son ordinateur), puis F CAM A | Surtitre persona ; la phrase vague tapée en surimpression sur l'image E | « Fais-moi une application de bourses » ; promesse | voix seule | coupe |
| B2 | 0:28–1:13 | A (résultat générique), F CAM A, B | Croix sur ce qui ne répond pas au besoin ; carte « une page, six rubriques » | « L'IA a deviné » ; « Une page · Six rubriques » | voix ; nappe discrète sous la capture | coupe |
| B3 | 1:13–3:41 | C (page stylisée qui se remplit), A (page de Hadiza), F CAM A/B | Rubriques qui s'allument une à une ; coche sur « gardées », croix sur « jamais gardées » | Titres des rubriques ; « Résultat de la démo » | voix seule | coupe ; glissement entre unités |
| B4 | 3:41–5:31 | F CAM A, A (Claude), G | Compteur de questions ; pictogramme « accéléré » ; cadre sur la rubrique « jamais gardées » | Consigne (G) ; « Accéléré » | voix ; nappe légère pendant l'accéléré | coupe |
| B5 | 5:31–6:12 | F CAM B, B, F CAM B | Carte de prédiction ; repère visuel pendant le silence ; critères testables en incrustation | « Simple et moderne ? » ; « Je coche un document en un seul geste » | voix ; silence total 2 s | coupe |
| B6 | 6:12–6:41 | B (carte de rappel), F CAM A | Points révélés un par un | 4 points de la carte | voix seule | coupe, puis carte de clôture (Partie 1) |

**Notes de montage** : rythme posé en B3 (une rubrique = une carte, puis la page réelle ou le face caméra). En B3, la page de Hadiza apparaît avant sa fabrication (B4) : le surtitre « Résultat de la démo » l'annonce. Couper les temps de saisie dans Claude ; garder lisibles au moins une question et une réponse (≥ 2,5 s chacune). Zooms ≤ 6 % sur la page finale. Quand la capture occupe tout l'écran, la réduire à 85 % pour garder les sous-titres en bas. Le résultat de la phrase vague doit rester réel : ne pas le retoucher. Plans de couverture : page imprimée, papillons au mur, croquis à trois cases.

#### Versions EN / HA / DJE

- **À re-filmer dans la langue** (≈ 25 s) : ouverture — « À la fin de cette leçon, vous saurez écrire le cahier des charges d'une page de votre application. En leçon un, vous avez choisi un projet feu vert. » ; conclusion — « Hadiza a maintenant sa page. Elle la relit d'un trait, et elle sait quoi demander. À vous. Écrivez votre cahier des charges d'une page. »
- **Doublé en voix clonée** : B2 malentendu (plan 4) → capture du résultat générique (plan 3) prolongée, puis carte « une page, six rubriques » (plan 5) ; B3 (plans 8 et 9) → page de Hadiza (plan 7) prolongée, croquis à trois cases, schéma de la page stylisée qui se remplit ; B4 (plan 10) → capture de la page finale ; B5 (plan 13) → carte de prédiction, puis incrustation des deux critères testables.
- **Notes d'adaptation** : « cahier des charges » : en EN « one-page brief » ou « spec » ; en HA et DJE, périphrase à valider (« la feuille qui décrit l'application »). « Feu vert » renvoie à la leçon 1 : garder l'image. « SMS » se dit ainsi partout. Le contraste « simple et moderne » / critère testable fonctionne dans toutes les langues ; traduire les deux critères d'exemple mot à mot.

### Leçon 3 — Premier prototype avec Lovable ou Bolt (`vc3`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez transformer votre cahier des charges en un premier prototype. »
- **Cas réel (B1 → B6)** : Hadiza ouvre Lovable, sa page de la leçon 2 posée à côté du clavier, avec un quota gratuit limité. Rahila, sa camarade, lui conseille de tout demander en une seule fois. Enjeu : obtenir un premier prototype sans gaspiller ses crédits. En B6, Hadiza montre à Rahila un prototype de trois écrans ; Rahila en veut un aussi, ce qui demande des comptes et une mémoire (leçon 4).
- **Unités de notion (B3)** : 1. Choisir l'outil selon son matériel — Même logique dans les deux outils ; Bolt fonctionne mieux sur ordinateur, Lovable sur ordinateur et sur téléphone (application mobile, consigne dictée possible). · 2. Le plan avant le code — Le mode Plan propose des étapes sans toucher à l'application ; on corrige, puis on fait exécuter. · 3. Une étape par consigne — Une demande, un test, une version ; l'historique permet de revenir en arrière. · 4. Tester avec des données d'exemple — Données inventées, vue téléphone, critères du cahier des charges.
- **Démo (B4)** : Lovable (web, ordinateur), même compte de démo. 1. Nouveau projet ; activer le mode Plan [à vérifier au moment du tournage : emplacement du sélecteur Plan / Agent]. 2. Coller la consigne puis le cahier des charges de la leçon 2. 3. Lire le plan ; vérifier qu'il ne prévoit ni connexion ni base de données (sinon, demander de les retirer). 4. Faire exécuter l'étape 1, le tableau de bord [à vérifier au moment du tournage : libellé du bouton d'exécution du plan]. 5. Tester le critère 1 dans l'aperçu. 6. Consigne de l'étape 2 : « Construis l'étape deux : la fiche d'une candidature, avec ses documents à cocher et une barre de progression. » ; tester en vue téléphone. 7. Étape 3, le formulaire d'ajout ; ajouter une candidature d'exemple. 8. Ouvrir l'historique des versions sans restaurer. Résultat attendu : prototype de trois écrans avec des données d'exemple, utilisable en vue téléphone ; trois versions visibles dans l'historique. Capture complémentaire pour B3 : le même cahier des charges en mode Plan dans Bolt, jusqu'au premier aperçu. Si le plan proposé diffère (ordre des étapes), suivre l'ordre de Lovable et adapter les noms d'étapes dans la VO.
- **Consolidation (B5)** : prédiction. Rahila conseille à Hadiza de tout demander en une seule consigne : connexion, rappels par SMS, envoi de fichiers, mode sombre. Que va-t-il se passer ? Réponse : l'IA tente tout à la fois ; une partie marche, une autre casse, on ne sait plus laquelle, et les crédits partent en réparations. Une étape, un test, puis la suivante.
- **Consigne à copier** :

```text
Voici le cahier des charges de mon application : [collez votre cahier des charges].
Ne code rien pour l'instant.
Propose-moi un plan de construction en étapes courtes, pour une première version avec des données d'exemple uniquement.
Pas de connexion ni de base de données à cette étape.
Commence par l'écran : [nom de l'écran principal].
```

- **Exercice** : « Construisez votre premier prototype » — 1. Choisissez Lovable ou Bolt selon votre matériel et créez un compte gratuit. 2. Collez la consigne et votre cahier des charges en mode Plan ; corrigez le plan, puis faites exécuter la première étape. 3. Construisez les étapes suivantes une par une, testez chacune en vue téléphone, et notez ce qui manque.
- **Carte de rappel** : 1. Transformer votre cahier des charges en un premier prototype 2. Demandez un plan avant le code 3. Une étape par consigne, un test après chaque étape 4. Le prototype utilise des données d'exemple, jamais de vraies
- **Quiz** :
  1. Qu'est-ce qu'un prototype ? — A) L'application finie, prête à publier B) Un brouillon qu'on peut toucher, avec des données d'exemple C) Le cahier des charges D) Une copie de sauvegarde — **Réponse : B**
  2. À quoi sert le mode Plan au début ? — A) L'IA propose des étapes sans toucher à l'application ; vous les corrigez avant de les faire exécuter B) À publier l'application C) À éviter de créer un compte D) À laisser l'IA travailler sans vous — **Réponse : A**
  3. Rahila conseille de tout demander en une seule consigne. Quel est le risque ? — A) Aucun B) L'IA refuse toujours C) Une partie marche, une autre casse, et on ne sait plus laquelle D) Le prototype devient public — **Réponse : C**
  4. Quelles données utiliser dans un prototype ? — A) Les vraies informations de ses camarades B) Ses numéros de documents officiels C) Ses mots de passe D) Des données d'exemple, inventées — **Réponse : D**
  5. Lequel de ces outils propose une application mobile pour construire depuis son téléphone ? — A) Bolt B) Lovable C) Un tableur D) Aucun — **Réponse : B**
- **Marques citées** : Lovable, Bolt.

#### Script

Durée estimée : 6:32 · Mots dits : 729

**[B1 — Accroche · 0:00–0:26]**

**[E · SITUATION]** « Niamey — Hadiza, sa page à côté du clavier » — VO : Ce soir, Hadiza ouvre Lovable.

**[F · CAM A]** À la fin de cette leçon, vous saurez transformer votre cahier des charges en un premier prototype. Sa page de la leçon deux est à côté du clavier : six rubriques, des critères testables. Son quota gratuit est limité : pas question de le gaspiller.

[PAUSE 1 s]

**[B2 — Cadrage · 0:26–1:06]**

**[F · CAM A]** Un malentendu d'abord. Un prototype n'est pas l'application finie. C'est un brouillon qu'on peut toucher : des écrans qui réagissent, avec des données d'exemple.

**[A · ÉCRAN]** Voici à quoi ressemble un prototype sur téléphone. Il sert à vérifier l'idée avant d'aller plus loin. Les écrans sont-ils les bons ? L'ordre est-il logique ? On le sait en touchant, pas en imaginant.

**[F · CAM A]** Un prototype se jette sans regret : c'est fait pour ça. Rien n'y est encore enregistré pour de bon. C'est le sujet de la leçon quatre.

[PAUSE 1 s]

**[B3 — Notion · 1:06–3:21]**

**[C · SCHÉMA]** « 1. Choisir l'outil selon son matériel » — VO : Première idée : choisissez l'outil selon votre matériel.

**[F · CAM A]** Lovable et Bolt suivent la même logique. Vous décrivez, ils construisent, vous voyez l'aperçu. Les deux comprennent une consigne en français.

**[A · ÉCRAN]** Les deux ont une version gratuite, limitée en messages. Bolt fonctionne mieux sur ordinateur, dans un navigateur récent. Lovable marche sur ordinateur, et propose une application mobile. On peut même y dicter sa consigne à la voix.

**[F · CAM A]** Il n'y a pas de bon choix absolu. Il y a l'outil qui marche avec votre matériel. Sur téléphone seulement ? Commencez avec Lovable. Avec un ordinateur, les deux conviennent. Ici, je montre Lovable. Les gestes sont les mêmes dans Bolt.

[PAUSE 1 s]

**[C · SCHÉMA]** « 2. Le plan avant le code » — VO : Deuxième idée : le plan avant le code.

**[A · ÉCRAN]** Les deux outils ont un mode Plan. L'IA y discute avec vous, sans toucher à l'application. Elle propose des étapes, vous les corrigez. Ensuite seulement, vous lui demandez d'exécuter.

**[F · CAM A]** Le plan, c'est votre cahier des charges découpé en petites marches. Lisez ce plan comme un devis. S'il prévoit une fonction absente de votre page, demandez de la retirer.

[PAUSE 1 s]

**[C · SCHÉMA]** « 3. Une étape par consigne » — VO : Troisième idée : une étape par consigne.

**[F · CAM B]** Vous demandez une seule chose. Vous testez. Puis vous passez à la suivante.

**[A · ÉCRAN]** Chaque étape crée une version. Si une étape casse la précédente, vous revenez à la version d'avant, dans l'historique. Notez sur papier la dernière version qui marche, avec sa date.

[PAUSE 1 s]

**[C · SCHÉMA]** « 4. Tester avec des données d'exemple » — VO : Quatrième idée : testez avec des données d'exemple.

**[F · CAM A]** Des bourses inventées, des dates inventées. Jamais vos vraies informations à ce stade. Et testez dans la vue téléphone : c'est là que Hadiza se sert de son application. Reprenez aussi les critères de votre page, un par un. Cochez ceux qui passent.

[PAUSE 1 s]

**[B4 — Application · 3:21–5:20]**

**[A · ÉCRAN]** J'ouvre Lovable avec un compte gratuit de démonstration. J'active le mode Plan. Je colle la consigne, puis le cahier des charges de Hadiza.

**[G · CONSIGNE]** « Voici le cahier des charges de mon application : [collez votre cahier des charges]. Ne code rien pour l'instant. Propose-moi un plan de construction en étapes courtes, pour une première version avec des données d'exemple uniquement. Pas de connexion ni de base de données à cette étape. Commence par l'écran : [nom de l'écran principal]. » — VO : Notez la phrase clé : « Ne code rien pour l'instant. » Mettez la vidéo en pause pour recopier.

**[A · ÉCRAN]** Lovable propose un plan en étapes. Je le lis. Je vérifie qu'il ne prévoit ni connexion ni base de données : c'est pour la leçon quatre. Je garde l'ordre proposé. Je fais exécuter la première étape : le tableau de bord. L'IA construit ; j'accélère. Voici l'aperçu, avec les bourses d'exemple. Je teste mon premier critère : la plus urgente est en haut.

**[A · ÉCRAN]** Deuxième consigne. « Construis l'étape deux : la fiche d'une candidature, avec ses documents à cocher et une barre de progression. » J'accélère. Je passe en vue téléphone. Je touche une candidature, je coche un document. La barre avance. Critère deux : je coche un document en un seul geste. Oui. Je vérifie aussi les dates : jour, mois, année. C'est bon. Étape trois, le formulaire d'ajout : même chemin, même test.

**[F · CAM A]** Trois étapes, trois tests, trois versions. Et je n'ai rien écrit de technique : seulement des phrases claires. Si une étape casse la précédente, je reviens à la version d'avant, dans l'historique.

[PAUSE 1 s]

**[B5 — Consolidation · 5:20–6:04]**

**[F · CAM B]** Rahila, une camarade de Hadiza, lui donne un conseil : « Demande tout d'un coup. La connexion, les rappels par SMS, l'envoi de fichiers, le mode sombre. »

**[B · CARTE]** « Tout demander en une consigne : que se passe-t-il ? » — VO : Que va-t-il se passer ?

**[SILENCE 2 s]**

**[F · CAM B]** L'IA tente tout à la fois. Une partie marche, une autre casse. Et Hadiza ne sait plus laquelle. Ses crédits partent en réparations. La règle reste la même : une étape, un test, puis la suivante. Rahila n'a pas tort sur le fond : ces fonctions ont leur place. Mais une par une.

[PAUSE 1 s]

**[B6 — Clôture · 6:04–6:32]**

**[B · CARTE DE RAPPEL]** « 1. Transformer votre cahier des charges en un premier prototype » « 2. Demandez un plan avant le code » « 3. Une étape par consigne, un test après chaque étape » « 4. Le prototype utilise des données d'exemple, jamais de vraies » — VO : Retenez quatre points. Le prototype, c'est un brouillon qu'on touche. Le plan avant le code. Une étape, un test. Et des données d'exemple.

**[F · CAM A]** Hadiza montre son prototype à Rahila. Rahila touche, coche, revient. Puis elle dit : « Je veux la même. » Pour cela, il faut des comptes et une mémoire : c'est la leçon quatre. Construisez votre premier prototype.

#### Liste des plans

| # | Type | Cadre / source | Contenu | Durée | Notes |
|---|---|---|---|---|---|
| 1 | E | Photo mise en scène ou illustration | Hadiza le soir, la page du cahier des charges à côté du clavier ; surtitre « Niamey — Hadiza, sa page à côté du clavier » | 4 s | B1 |
| 2 | F | CAM A | Promesse, rappel de la leçon 2, quota limité | 22 s | B1 |
| 3 | F | CAM A | Malentendu « prototype ≠ application finie », « se jette sans regret », « rien n'y est enregistré » | 24 s | B2, deux passages |
| 4 | A | Téléphone, enregistrement natif | Le prototype final de la leçon (tourné en session 1) parcouru au doigt | 16 s | B2. Annoter « données d'exemple » |
| 5 | C | Schémas animés | Cartes-titres des unités 1 à 4 (matériel, plan, étapes, données d'exemple) | 16 s | B3, quatre cartes |
| 6 | F | CAM A | Explications des unités 1, 2 et 4 | 66 s | B3 |
| 7 | A | Navigateur + téléphone | Bolt sur ordinateur et application mobile de Lovable (consigne dictée) ; mode Plan de Lovable avec un plan proposé ; historique des versions | 47 s | B3. Annoter « ordinateur » / « téléphone », puis « Plan », puis « Historique » |
| 8 | F | CAM B | Unité 3 : « Vous demandez une seule chose… » | 6 s | B3 |
| 9 | G | Carte de consigne | Consigne de la fiche, texte exact | 12 s | B4 |
| 10 | A | Lovable web, compte de démo | Mode Plan → consigne et cahier des charges → plan vérifié → étape 1 → critère 1 → étape 2 → vue téléphone, case cochée, dates vérifiées → étape 3 | 91 s | B4. Environ 20 s d'accéléré sans voix ; compteur d'étapes 1/3 → 3/3 |
| 11 | F | CAM A | Bilan « Trois étapes, trois tests, trois versions » | 16 s | B4 |
| 12 | F | CAM B | Conseil de Rahila, puis réponse | 37 s | B5 |
| 13 | B | Carte | « Tout demander en une consigne : que se passe-t-il ? » + 2 s de silence | 6 s | B5 |
| 14 | B | Carte de rappel | 4 points révélés un par un | 12 s | B6 |
| 15 | F | CAM A | Clôture : Rahila veut la même ; titre de l'exercice | 16 s | B6 |

#### Montage idéal

| Temps | Timecode cible | Image principale | Habillage (motion graphics) | Texte à l'écran | Son | Transition |
|---|---|---|---|---|---|---|
| B1 | 0:00–0:26 | E (Hadiza, sa page), puis F CAM A | Surtitre persona ; jauge stylisée « quota gratuit » (sans chiffre) | Promesse | voix seule | coupe |
| B2 | 0:26–1:06 | F CAM A, A (prototype sur téléphone), F CAM A | Cadre sur les données d'exemple | « Prototype = brouillon qu'on touche » | voix ; nappe discrète sous la capture | coupe |
| B3 | 1:06–3:21 | C (cartes des unités), F CAM A/B, A (Bolt, Lovable mobile, mode Plan, historique) | Comparaison ordinateur / téléphone avec pictogrammes ; escalier « petites marches » ; liste de versions | Titres des unités ; « Mode Plan » ; « Historique » | voix seule | coupe ; glissement entre unités |
| B4 | 3:21–5:20 | A (Lovable), G, F CAM A | Compteur d'étapes 1/3 → 3/3 ; pictogramme « accéléré » ; coches sur les critères vérifiés | Consigne (G) ; « Ne code rien pour l'instant » ; « Accéléré » | voix ; nappe légère pendant l'accéléré | coupe ; zoom ≤ 6 % sur le plan proposé |
| B5 | 5:20–6:04 | F CAM B, B, F CAM B | Les quatre demandes de Rahila s'empilent ; repère pendant le silence | « Tout d'un coup ? » | voix ; silence total 2 s | coupe |
| B6 | 6:04–6:32 | B (carte de rappel), F CAM A | Points révélés un par un | 4 points de la carte | voix seule | coupe, puis carte de clôture (Partie 1) |

**Notes de montage** : B4 est le cœur de la leçon : garder lisibles le plan proposé (≥ 4 s, zoom ≤ 6 %) et chaque test (≥ 2,5 s). Couper les temps d'attente de génération en accéléré signalé. Ne jamais montrer de vraies données. Les captures de Bolt et de l'application mobile de Lovable restent courtes : elles illustrent le choix de l'outil, pas une seconde démo. Quand l'aperçu en vue téléphone occupe le bas de l'écran, le placer dans un cadre à 85 % pour libérer les sous-titres. Plans de couverture : inserts du clavier et de la page, B-cam.

#### Versions EN / HA / DJE

- **À re-filmer dans la langue** (≈ 30 s) : ouverture — « À la fin de cette leçon, vous saurez transformer votre cahier des charges en un premier prototype. Son quota gratuit est limité : pas question de le gaspiller. » ; conclusion — « Hadiza montre son prototype à Rahila… Pour cela, il faut des comptes et une mémoire : c'est la leçon quatre. Construisez votre premier prototype. »
- **Doublé en voix clonée** : B2 (plan 3) → capture du prototype sur téléphone prolongée ; B3 (plans 6 et 8) → cartes des unités prolongées, captures de Bolt et de l'application mobile de Lovable, schéma de l'escalier pour le plan, capture de l'historique des versions ; B4 bilan (plan 11) → historique avec trois versions ; B5 (plan 12) → carte des demandes de Rahila qui s'empilent, puis carte « une étape, un test ».
- **Notes d'adaptation** : « prototype » se dit ainsi en EN ; en HA et DJE, périphrase « premier essai qu'on peut toucher ». « Mode Plan » : garder le nom de l'interface tel qu'il s'affiche. « Mode sombre » : en EN « dark mode ». L'expression « petites marches » est une image : la garder si elle existe dans la langue, sinon « petites étapes ».

### Leçon 4 — Démo complète : l'app de suivi de bourses (`vc4`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez construire étape par étape une application qui enregistre vos données. »
- **Cas réel (B1 → B6)** : Hadiza ouvre son prototype sur le téléphone de sa sœur : ses candidatures n'y sont pas, car rien n'est enregistré. Enjeu : une application qui se souvient, et où chacun garde ses données pour soi. En B6, ses candidatures la suivent d'un téléphone à l'autre, et Rahila, connectée avec son propre compte, ne voit que les siennes.
- **Unités de notion (B3)** : 1. La base de données, registre de l'app — Les informations sont rangées sur un serveur et suivent l'utilisatrice ; Lovable et Bolt en intègrent une. · 2. Les comptes : chacun ses données — Connexion par e-mail ; des règles d'accès disent qui peut lire ou modifier chaque ligne du registre. · 3. L'ordre : écrans, mémoire, comptes — Les écrans d'abord (prototype), puis la base de données, puis les comptes, une étape par consigne. · 4. Tester comme une vraie utilisatrice — Ajouter, modifier, supprimer, rouvrir, changer d'appareil, essayer les cas limites.
- **Démo (B4)** : Lovable (web), projet de la leçon 3, même compte de démo ; un second téléphone. 1. Envoyer la consigne 1 (base de données). 2. Accepter l'activation de Lovable Cloud [à vérifier au moment du tournage : forme exacte de la demande d'activation]. 3. Ouvrir l'onglet Cloud et montrer les tableaux créés (candidatures, documents) [à vérifier au moment du tournage : nom de l'onglet et des sections]. 4. Tester la mémoire : ajouter « Bourse de master en santé publique (exemple) », fermer, rouvrir. 5. Envoyer la consigne 2 (connexion et accès). 6. Montrer les règles d'accès créées, en lisant leur nom (pas le code) [à vérifier au moment du tournage : chemin vers les règles d'accès dans l'onglet Cloud]. 7. Créer le compte de test « Hadiza » (adresse de test du tournage) [à vérifier au moment du tournage : confirmation par e-mail demandée ou non]. 8. Sur ordinateur : ajouter une candidature, cocher deux documents. 9. Sur le second téléphone, même compte : tout est là. 10. (B5) Créer le compte « Rahila » : liste vide. Résultat attendu : application avec mémoire et connexion ; un compte ne voit que ses candidatures.
- **Consolidation (B5)** : prédiction. Rahila crée son propre compte sur l'application de Hadiza. Que doit-elle voir ? Réponse : une liste vide, rien de Hadiza. Si elle voit une seule candidature de Hadiza, on arrête tout et on corrige avant de partager. C'est le test des deux comptes.
- **Consigne à copier** :

```text
Consigne 1 :
Étape suivante, et seulement celle-ci : enregistre les [candidatures] dans la base de données intégrée, pour qu'elles restent après fermeture.
Garde exactement l'apparence actuelle des écrans.
À la fin, explique-moi en trois phrases simples ce qui est enregistré.

Consigne 2, après avoir testé la première :
Ajoute une connexion par e-mail et mot de passe.
Chaque personne ne voit, ne modifie et ne supprime que ses propres [candidatures].
Ne change rien d'autre.
```

- **Exercice** : « Donnez une mémoire à votre application » — 1. Envoyez la consigne 1, puis testez : fermez, rouvrez, changez d'appareil. 2. Envoyez la consigne 2 et lisez le nom des règles d'accès créées. 3. Faites le test des deux comptes : le second compte ne doit rien voir du premier.
- **Carte de rappel** : 1. Construire étape par étape une application qui enregistre vos données 2. La base de données est le registre de l'application 3. Chaque compte ne voit que ses propres données 4. Testez avec deux comptes avant de partager
- **Quiz** :
  1. Dans ce cours, qu'est-ce qu'une base de données ? — A) Le registre où l'application range ses informations, sur un serveur B) Un fichier sur votre téléphone C) La liste des écrans D) Un mot de passe — **Réponse : A**
  2. Dans quel ordre Hadiza construit-elle son application ? — A) Comptes, puis base de données, puis écrans B) Écrans avec données d'exemple, puis base de données, puis comptes C) Tout en une seule consigne D) Base de données seulement — **Réponse : B**
  3. À quoi servent les règles d'accès ? — A) À accélérer l'application B) À changer les couleurs C) À dire qui peut lire ou modifier chaque ligne du registre D) À publier l'application — **Réponse : C**
  4. Rahila se connecte avec son propre compte. Que doit-elle voir ? — A) Une liste vide B) Les candidatures de Hadiza C) Un message d'erreur D) Les candidatures de toute la promotion — **Réponse : A**
  5. Quel test faire avant de partager l'application ? — A) Aucun, si elle s'affiche bien B) Changer les couleurs C) Demander à l'IA si tout va bien D) Le test des deux comptes, et le test sur un autre appareil — **Réponse : D**
- **Marques citées** : Lovable (Lovable Cloud), Bolt.

#### Script

Durée estimée : 6:29 · Mots dits : 743

**[B1 — Accroche · 0:00–0:28]**

**[E · SITUATION]** « Niamey — Hadiza, deux téléphones » — VO : Hadiza change de téléphone.

**[F · CAM A]** À la fin de cette leçon, vous saurez construire étape par étape une application qui enregistre vos données. Sur le téléphone de sa sœur, son prototype n'affiche que les bourses d'exemple. En leçon trois, vous avez construit ce prototype. Aujourd'hui, on lui donne une mémoire et des comptes.

[PAUSE 1 s]

**[B2 — Cadrage · 0:28–1:10]**

**[F · CAM A]** Le malentendu du jour : une application, ce ne sont pas seulement des écrans. Derrière les écrans, il y a des données, et des règles. Une application sans mémoire, c'est un tableau effacé chaque soir.

**[C · SCHÉMA]** « Écrans · Base de données · Comptes » — VO : Les écrans montrent. La base de données garde. Les comptes disent qui voit quoi.

**[F · CAM A]** Sans base de données, ce que Hadiza saisit reste coincé sur un seul appareil, ou disparaît. Avec elle, ses candidatures la suivent partout.

**[C · SCHÉMA]** « Le cahier de crédit de la boutique » — VO : Pensez au cahier de crédit d'une boutique : sans lui, le commerçant oublie qui doit quoi.

[PAUSE 1 s]

**[B3 — Notion · 1:10–3:15]**

**[C · SCHÉMA]** « 1. La base de données, registre de l'app » — VO : Première idée : la base de données, le registre de l'application.

**[F · CAM A]** C'est là que l'application range ses informations. Ce registre est sur un serveur, pas dans votre téléphone. Vous ouvrez l'application ailleurs : tout est là.

**[A · ÉCRAN]** Imaginez un registre : chaque ligne est une candidature, chaque colonne une information. Lovable et Bolt ont chacun une base de données intégrée. Dans Lovable, elle s'appelle Lovable Cloud. Vous n'avez rien à installer. Leur part gratuite est limitée. Si votre application grandit, la base peut devenir payante.

[PAUSE 1 s]

**[C · SCHÉMA]** « 2. Les comptes : chacun ses données » — VO : Deuxième idée : les comptes. Chacun ses données.

**[F · CAM A]** Hadiza se connecte avec son e-mail, Rahila avec le sien. Chacune ne voit que ses candidatures. Ce sont des règles d'accès qui s'en chargent. Une règle d'accès dit qui peut lire ou modifier chaque ligne du registre. Sans ces règles, un compte peut lire les candidatures des autres. Sur une même application, chacun doit rester chez soi.

[PAUSE 1 s]

**[C · SCHÉMA]** « 3. L'ordre : écrans, mémoire, comptes » — VO : Troisième idée : l'ordre de construction.

**[F · CAM B]** D'abord les écrans, avec des données d'exemple : c'est le prototype. Puis la mémoire : la base de données. Puis les comptes. Toujours une étape par consigne, et un test après chaque étape. Pourquoi cet ordre ? Chaque étape s'appuie sur la précédente, comme les murs sur les fondations.

[PAUSE 1 s]

**[C · SCHÉMA]** « 4. Tester comme une vraie utilisatrice » — VO : Quatrième idée : testez comme une vraie utilisatrice. Ajoutez, modifiez, supprimez. Fermez, rouvrez, changez d'appareil.

**[F · CAM A]** Essayez les cas limites : une date limite aujourd'hui, une date déjà passée. Un test que vous ne faites pas, votre utilisatrice le fait à votre place. Notez chaque test et son résultat sur une feuille : réussi ou raté.

[PAUSE 1 s]

**[B4 — Application · 3:15–5:20]**

**[A · ÉCRAN]** Je reprends le prototype de la leçon trois, dans le même compte de démonstration. Première consigne : enregistrer les candidatures dans la base de données, sans changer l'apparence.

**[G · CONSIGNE]** « Consigne 1 : Étape suivante, et seulement celle-ci : enregistre les [candidatures] dans la base de données intégrée, pour qu'elles restent après fermeture. Garde exactement l'apparence actuelle des écrans. À la fin, explique-moi en trois phrases simples ce qui est enregistré. — Consigne 2, après avoir testé la première : Ajoute une connexion par e-mail et mot de passe. Chaque personne ne voit, ne modifie et ne supprime que ses propres [candidatures]. Ne change rien d'autre. » — VO : Les deux consignes sont ici. Mettez la vidéo en pause pour les recopier.

**[A · ÉCRAN]** Lovable propose d'activer Lovable Cloud. J'accepte, et j'accélère. Dans l'onglet Cloud, je vois les tableaux créés : les candidatures, et les documents. C'est le registre. Je lis l'explication de Lovable : trois phrases sur ce qui est enregistré. Rien de sensible. Je teste : j'ajoute une bourse de master en santé publique. C'est un exemple. Je ferme, je rouvre : elle est toujours là. Dans le registre, je la retrouve sur une ligne : nom, date limite, statut.

**[A · ÉCRAN]** Deuxième consigne : la connexion par e-mail. Chaque personne ne voit et ne modifie que ses candidatures. Lovable ajoute l'écran de connexion et les règles d'accès. Je vérifie ces règles dans l'onglet Cloud. Je ne lis pas le code : je lis le nom de chaque règle.

**[A · ÉCRAN]** Je crée le compte de Hadiza, et je me connecte sur ordinateur. J'ajoute une candidature, je coche deux documents. Puis j'ouvre l'application sur un téléphone, avec le même compte. Tout est là. Je supprime une candidature d'essai : elle disparaît aussi sur le téléphone.

**[F · CAM A]** Deux consignes, deux tests. L'application se souvient, et chacun a son compte. Et je n'ai pas lu une ligne de code : j'ai lu des résultats.

[PAUSE 1 s]

**[B5 — Consolidation · 5:20–6:02]**

**[F · CAM B]** Reste un test essentiel. Rahila crée son propre compte sur l'application de Hadiza.

**[B · CARTE]** « Rahila se connecte : que doit-elle voir ? » — VO : Que doit-elle voir ?

**[SILENCE 2 s]**

**[A · ÉCRAN]** Une liste vide. Rien de Hadiza. C'est exactement le résultat voulu.

**[F · CAM B]** Si Rahila voit une seule candidature de Hadiza, on arrête tout, et on corrige avant de partager. Ce test a un nom : le test des deux comptes. Refaites-le après chaque changement important. Si le test échoue, décrivez précisément ce que Rahila voit. Puis demandez de corriger les règles d'accès.

[PAUSE 1 s]

**[B6 — Clôture · 6:02–6:29]**

**[B · CARTE DE RAPPEL]** « 1. Construire étape par étape une application qui enregistre vos données » « 2. La base de données est le registre de l'application » « 3. Chaque compte ne voit que ses propres données » « 4. Testez avec deux comptes avant de partager » — VO : Retenez quatre points. Une étape par consigne. La base de données, c'est le registre. Chacun ne voit que ses données. Et le test des deux comptes.

**[F · CAM A]** Hadiza peut changer de téléphone : ses candidatures la suivent. Rahila a les siennes, et ne voit qu'elles. Leurs données restent séparées, comme prévu. Donnez une mémoire à votre application.

#### Liste des plans

| # | Type | Cadre / source | Contenu | Durée | Notes |
|---|---|---|---|---|---|
| 1 | E | Photo mise en scène ou illustration | Hadiza avec deux téléphones, l'un sans ses candidatures ; surtitre « Niamey — Hadiza, deux téléphones » | 4 s | B1 |
| 2 | F | CAM A | Promesse, prototype sur le téléphone de sa sœur, rappel de la leçon 3 | 24 s | B1 |
| 3 | F | CAM A | Malentendu « pas seulement des écrans », « tableau effacé chaque soir », « sans base de données… » | 27 s | B2, deux passages |
| 4 | C | Schémas animés | « Écrans · Base de données · Comptes » (montrer, garder, autoriser) ; « Le cahier de crédit de la boutique » | 15 s | B2 |
| 5 | C | Schémas animés | Cartes-titres des unités 1 à 4 ; unité 2 : registre dont chaque ligne porte un cadenas ; unité 4 : liste de tests cochée | 20 s | B3, quatre cartes |
| 6 | F | CAM A | Explications des unités 1, 2 et 4 | 59 s | B3 |
| 7 | A | Lovable web | Onglet Cloud d'un projet de démo, vue tableau (lignes et colonnes), sans donnée réelle | 24 s | B3. Annoter « une ligne = une candidature » |
| 8 | F | CAM B | Unité 3 : l'ordre écrans → mémoire → comptes | 23 s | B3 |
| 9 | G | Carte de consigne | Consignes 1 et 2, texte exact | 12 s | B4. Deux cartes successives |
| 10 | A | Lovable web, compte de démo | Consigne 1 → activation de Lovable Cloud → tableaux → explication → test de mémoire → ligne du registre → consigne 2 → écran de connexion → règles d'accès lues par leur nom | 78 s | B4. Environ 10 s d'accéléré sans voix ; une annotation à la fois |
| 11 | A | Ordinateur puis second téléphone | Compte « Hadiza » : ajout, deux documents cochés ; même compte sur le téléphone ; suppression ; puis (B5) compte « Rahila » : liste vide | 28 s | B4 et B5. Insert possible : deux téléphones côte à côte |
| 12 | F | CAM A | Bilan de B4, puis clôture de B6 | 27 s | B4 et B6 |
| 13 | F | CAM B | Annonce du test, puis « Si Rahila voit une seule candidature… » | 31 s | B5 |
| 14 | B | Cartes | « Rahila se connecte : que doit-elle voir ? » (2 s de silence) ; carte de rappel (4 points) | 18 s | B5 et B6 |

#### Montage idéal

| Temps | Timecode cible | Image principale | Habillage (motion graphics) | Texte à l'écran | Son | Transition |
|---|---|---|---|---|---|---|
| B1 | 0:00–0:28 | E (deux téléphones), puis F CAM A | Surtitre persona ; croix sur le téléphone sans les candidatures | Promesse | voix seule | coupe |
| B2 | 0:28–1:10 | F CAM A, C (trois blocs), F CAM A, C (cahier de crédit) | Trois blocs qui s'allument avec leur verbe ; cahier de crédit illustré | « Montrer · Garder · Autoriser » | voix seule | coupe |
| B3 | 1:10–3:15 | C (cartes des unités), F CAM A/B, A (onglet Cloud) | Registre à cadenas ; frise écrans → mémoire → comptes ; liste de tests cochée | Titres des unités ; « Une ligne = une candidature » ; « Règle d'accès : qui lit, qui modifie » | voix seule | coupe ; glissement entre unités |
| B4 | 3:15–5:20 | G, A (Lovable, puis second téléphone), F CAM A | Compteur « consigne 1/2 → 2/2 » ; pictogramme « accéléré » ; coche quand la candidature réapparaît | Consignes (G) ; « Accéléré » ; nom d'une règle d'accès encadré | voix ; nappe légère pendant l'accéléré | coupe ; zoom ≤ 6 % sur le nom des règles |
| B5 | 5:20–6:02 | F CAM B, B, A (liste vide), F CAM B | Repère pendant le silence ; coche sur la liste vide | « Que doit-elle voir ? » ; « Test des deux comptes » | voix ; silence total 2 s | coupe |
| B6 | 6:02–6:29 | B (carte de rappel), F CAM A | Points révélés un par un | 4 points de la carte | voix seule | coupe, puis carte de clôture (Partie 1) |

**Notes de montage** : la démo enchaîne beaucoup d'écrans : un écran clé toutes les 5 à 8 s, le reste en accéléré signalé. Le nom de chaque règle d'accès doit rester lisible au moins 3 s (zoom ≤ 6 %). Masquer toute adresse e-mail de test complète (ne garder que le prénom du compte). Le passage ordinateur → téléphone se fait par une coupe franche avec le pictogramme « autre appareil ». Plans de couverture : insert des deux téléphones côte à côte, B-cam.

#### Versions EN / HA / DJE

- **À re-filmer dans la langue** (≈ 25 s) : ouverture — « À la fin de cette leçon, vous saurez construire étape par étape une application qui enregistre vos données. Aujourd'hui, on lui donne une mémoire et des comptes. » ; conclusion — « Hadiza peut changer de téléphone : ses candidatures la suivent. Rahila a les siennes, et ne voit qu'elles. Leurs données restent séparées, comme prévu. Donnez une mémoire à votre application. »
- **Doublé en voix clonée** : B2 (plan 3) → schémas des trois blocs et du cahier de crédit (plan 4) prolongés ; B3 (plans 6 et 8) → registre à cadenas, capture de l'onglet Cloud, frise de l'ordre de construction ; B4 bilan (plan 12) → capture du second téléphone ; B5 (plan 13) → insert des deux téléphones côte à côte, puis liste vide.
- **Notes d'adaptation** : « registre » est l'image clé : la traduire par le mot du cahier de compte ou du registre de la mairie dans chaque langue. « Règle d'accès » : en EN « access rule » ; en HA et DJE, périphrase « qui a le droit de voir quoi ». « Le test des deux comptes » doit garder un nom court et mémorisable dans chaque langue.

### Leçon 5 — Corriger, sécuriser, publier et aller plus loin (`vc5`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez corriger en décrivant, vérifier la sécurité et publier votre application. »
- **Cas réel (B1 → B6)** : Rahila signale un défaut à Hadiza : une bourse de l'an dernier, dont la date est passée, s'affiche « Urgent » avec des jours négatifs. Le cahier des charges n'avait pas prévu ce cas. La promotion de Hadiza veut utiliser l'application. Enjeu : corriger, vérifier la sécurité et publier sans exposer de données. En B6, le lien circule dans le groupe WhatsApp de la promotion ; chacun crée son compte et ne voit que ses candidatures.
- **Unités de notion (B3)** : 1. Corriger : problème, attendu, étapes — Un signalement en trois parties ; revenir à la version d'avant si une correction casse autre chose. · 2. Les secrets et les données personnelles — Une clé d'API va dans l'espace des secrets, jamais dans une consigne ni dans le code ; on garde le minimum de données ; au Niger, la HAPDP veille à leur protection. · 3. Sauvegarder : versions, données, code — Historique des versions, bouton « Exporter » pour les données, copie du code sur GitHub [à vérifier au moment du tournage : copie vers GitHub disponible en version gratuite, dans Lovable et dans Bolt]. · 4. Aller plus loin : Claude Code — Un agent de code, en version payante, qui propose un plan et modifie les fichiers avec votre accord ; pour l'argent, la santé ou beaucoup d'utilisateurs, un développeur relit.
- **Démo (B4)** : Lovable (web), projet de la leçon 4 ; second téléphone. 1. Ajouter une candidature datée d'hier ; constater l'affichage. 2. Envoyer le signalement (consigne à copier, remplie). 3. Lire l'explication de Lovable ; retester ; refaire le test des deux comptes. 4. Cliquer sur le bouton de publication : adresse proposée en lovable.app, contrôle de sécurité de la base de données pendant l'ouverture de la fenêtre [à vérifier au moment du tournage : libellés de la fenêtre et du résultat du contrôle]. 5. Lire le résultat ; s'il signale un problème, demander la correction et relancer. 6. Publier ; ouvrir le lien sur le second téléphone ; se connecter avec un compte de test. Résultat attendu : la candidature passée affiche « Date passée », en bas de liste, en gris avec une icône ; l'application est publiée et fonctionne sur un autre téléphone. Si le défaut de date passée n'apparaît pas, prendre le premier vrai défaut trouvé pendant les tests de cas limites et adapter les phrases de VO correspondantes. Captures complémentaires pour B3 : historique des versions ; bouton « Exporter » ajouté à l'application ; espace des secrets de Lovable Cloud, vide de toute clé, comme plan de couverture des versions doublées [à vérifier au moment du tournage : emplacement] ; session Claude Code réelle sur le dépôt Karatou Academy (demande → plan → accord → modification → test).
- **Consolidation (B5)** : prédiction. Hadiza veut des rappels par e-mail ; l'application a besoin de la clé d'un service d'envoi. Elle colle sa clé directement dans la conversation avec l'IA. Bonne idée ? Réponse : non. Une clé se garde comme le code secret d'un compte mobile money : on la colle seulement dans l'espace prévu pour les secrets. Et si l'application touche un jour à l'argent, on fait appel à un développeur.
- **Consigne à copier** :

```text
Problème : [ce qui se passe, avec un exemple précis].
Résultat attendu : [ce qui devrait se passer].
Étapes pour reproduire : 1. [première action] 2. [deuxième action] 3. [ce que je vois].
Corrige seulement ce problème, sans rien changer d'autre.
Puis explique-moi en deux phrases ce que tu as modifié, et comment le vérifier.
```

- **Exercice** : « Vérifiez, puis publiez votre application » — 1. Testez trois cas limites (date du jour, date passée, champ vide) et corrigez un défaut avec le modèle Problème / Attendu / Étapes ; ajoutez ce cas à vos critères. 2. Vérifiez qu'aucune clé ni donnée sensible ne figure dans vos consignes ou votre application, ajoutez un bouton « Exporter », et refaites le test des deux comptes. 3. Publiez, lisez le contrôle de sécurité, ouvrez le lien sur un autre téléphone et notez l'adresse pour le projet final.
- **Carte de rappel** : 1. Corriger en décrivant, vérifier la sécurité et publier votre application 2. Signalez : problème, résultat attendu, étapes pour reproduire 3. Les clés vont dans le coffre des secrets, jamais ailleurs 4. Projet qui grandit : Claude Code ; données sensibles : un développeur
- **Quiz** :
  1. Quel signalement aide l'IA à corriger ? — A) « Ça ne marche pas. » B) « Problème : une date passée s'affiche en Urgent. Attendu : “Date passée”, en bas. Étapes : ajouter une candidature datée d'hier. » C) « Refais tout. » D) « Corrige les défauts. » — **Réponse : B**
  2. Que fait Lovable quand vous ouvrez la fenêtre de publication ? — A) Il supprime vos données de test B) Il envoie le lien à vos contacts C) Il double votre quota gratuit D) Il vérifie la sécurité de la base de données et signale les problèmes — **Réponse : D**
  3. Où ranger une clé d'API ? — A) Dans la consigne B) Dans le code C) Dans l'espace prévu pour les secrets de l'outil D) Dans le groupe WhatsApp de la promotion — **Réponse : C**
  4. Votre projet grandit et vous voulez qu'une IA travaille sur ses fichiers, avec votre accord à chaque étape. Quel outil ? — A) Claude Code, en version payante B) Un tableur C) Le mode sombre D) Aucun outil n'existe — **Réponse : A**
  5. Moussa veut ajouter le paiement par mobile money à son application. Que doit-il faire ? — A) L'ajouter seul, en une consigne B) Faire appel à un développeur C) Coller sa clé dans la conversation D) Publier sans tester — **Réponse : B**
- **Marques citées** : Lovable (Lovable Cloud), Bolt, GitHub, Claude, Claude Code, WhatsApp.

#### Script

Durée estimée : 6:41 · Mots dits : 760

**[B1 — Accroche · 0:00–0:29]**

**[E · SITUATION]** « Niamey — un message de Rahila » — VO : Un message de Rahila.

**[F · CAM A]** À la fin de cette leçon, vous saurez corriger en décrivant, vérifier la sécurité et publier votre application. Rahila a écrit : « Ta bourse de l'an dernier est marquée Urgent, avec des jours négatifs ! » En leçon quatre, l'application de Hadiza a gagné une mémoire et des comptes. Sa promotion veut l'utiliser.

[PAUSE 1 s]

**[B2 — Cadrage · 0:29–1:05]**

**[F · CAM A]** Le malentendu : « Ça marche sur mon téléphone, donc c'est prêt. » Non. Publier, c'est ouvrir votre porte à tout internet.

**[A · ÉCRAN]** Une fois en ligne, l'adresse peut circuler, et n'importe qui peut essayer d'entrer. Des programmes automatiques parcourent internet à la recherche de sites mal protégés. Votre application doit fonctionner. Elle doit aussi protéger ce qu'elle garde.

**[F · CAM A]** Donc trois gestes, dans cet ordre : corriger, vérifier, publier. Puis, quand le projet grandit, aller plus loin.

[PAUSE 1 s]

**[B3 — Notion · 1:05–3:26]**

**[C · SCHÉMA]** « 1. Corriger : problème, attendu, étapes » — VO : Première idée : corriger en décrivant.

**[F · CAM A]** Jamais « ça ne marche pas ». Dites le problème, le résultat attendu, et les étapes pour le reproduire. Comme chez le mécanicien : vous décrivez le bruit, et quand il apparaît. Si une correction casse autre chose, revenez à la version d'avant. Ajoutez aussi ce cas oublié à votre cahier des charges. La prochaine fois, il est prévu.

[PAUSE 1 s]

**[C · SCHÉMA]** « 2. Les secrets et les données personnelles » — VO : Deuxième idée : protéger les secrets et les données.

**[F · CAM A]** Une clé d'API, c'est le mot de passe qu'un service donne à votre application. Elle se range dans l'espace des secrets de l'outil. Jamais dans une consigne, jamais dans le code. Pour les données personnelles, gardez le minimum. Ne testez jamais avec les vraies données de vos camarades. Dites à vos utilisateurs, en une phrase, ce que l'application garde. Au Niger, la loi protège les données personnelles, et une autorité veille : la HAPDP.

[PAUSE 1 s]

**[C · SCHÉMA]** « 3. Sauvegarder : versions, données, code » — VO : Troisième idée : sauvegarder.

**[A · ÉCRAN]** L'historique garde chaque version de l'application. Pour vos données, demandez un bouton « Exporter », qui crée un fichier pour tableur. Une fois par mois, exportez vos données, et gardez le fichier ailleurs. Et Lovable comme Bolt peuvent copier votre code sur GitHub, un site qui garde l'historique du code.

[PAUSE 1 s]

**[C · SCHÉMA]** « 4. Aller plus loin : Claude Code » — VO : Quatrième idée : quand le projet grandit, Claude Code.

**[A · ÉCRAN]** C'est l'outil que j'utilise pour Karatou Academy. Je décris une fonction. Il propose un plan. Je valide. Il modifie les fichiers, avec mon accord. Puis je teste. Il demande une version payante. On y travaille sur les fichiers du projet, le plus souvent sur ordinateur.

**[F · CAM A]** Claude Code ne décide pas à votre place : vous validez chaque étape. Et pour l'argent, la santé, ou beaucoup d'utilisateurs : faites relire par un développeur. Ce n'est pas un échec. C'est le bon réflexe.

[PAUSE 1 s]

**[B4 — Application · 3:26–5:30]**

**[A · ÉCRAN]** Reprenons le défaut signalé par Rahila. Je le reproduis : j'ajoute une candidature datée d'hier. Elle s'affiche en haut, en Urgent, avec des jours négatifs.

**[A · ÉCRAN]** J'écris le signalement. Problème : une date passée s'affiche comme urgente. Attendu : la mention « Date passée », en bas de liste, en gris, avec une icône. Étapes : ajouter une candidature datée d'hier. J'ajoute aussi ce cas aux critères de la page de Hadiza.

**[G · CONSIGNE]** « Problème : [ce qui se passe, avec un exemple précis]. Résultat attendu : [ce qui devrait se passer]. Étapes pour reproduire : 1. [première action] 2. [deuxième action] 3. [ce que je vois]. Corrige seulement ce problème, sans rien changer d'autre. Puis explique-moi en deux phrases ce que tu as modifié, et comment le vérifier. » — VO : Voici le modèle. Mettez la vidéo en pause pour le recopier.

**[A · ÉCRAN]** Lovable corrige, et explique ce qu'il a changé. Je reteste : la candidature passée descend, avec sa mention. Je refais aussi le test des deux comptes.

**[A · ÉCRAN]** Maintenant, je publie. Lovable propose une adresse en lovable.app. Pendant ce temps, il vérifie la sécurité de la base de données. Je lis les alertes une par une. Je n'en ignore aucune sans la comprendre. S'il y a un problème, je demande la correction avant de publier. Ce contrôle attrape des erreurs courantes. Il ne remplace pas une vraie revue de sécurité.

**[A · ÉCRAN]** Je publie. J'ouvre le lien sur un autre téléphone. Je me connecte avec un compte de test. Tout fonctionne.

**[F · CAM A]** En version gratuite, l'adresse finit par lovable.app, ou par bolt.host chez Bolt. Un nom de domaine à vous demande une version payante. Et si l'application grandit, l'hébergement peut devenir payant.

[PAUSE 1 s]

**[B5 — Consolidation · 5:30–6:13]**

**[F · CAM B]** Hadiza veut maintenant des rappels par e-mail. Pour cela, l'application a besoin de la clé d'un service d'envoi.

**[B · CARTE]** « Coller la clé dans la conversation : bonne idée ? » — VO : Hadiza colle sa clé directement dans la conversation avec l'IA. Bonne idée ?

**[SILENCE 2 s]**

**[F · CAM B]** Non. Une clé, c'est comme le code secret de votre compte mobile money. On ne le donne à personne. Collez-la seulement dans l'espace prévu pour les secrets. Si une clé a fuité, changez-la tout de suite dans le service concerné. Et si un jour votre application touche à l'argent, appelez un développeur.

[PAUSE 1 s]

**[B6 — Clôture · 6:13–6:41]**

**[B · CARTE DE RAPPEL]** « 1. Corriger en décrivant, vérifier la sécurité et publier votre application » « 2. Signalez : problème, résultat attendu, étapes pour reproduire » « 3. Les clés vont dans le coffre des secrets, jamais ailleurs » « 4. Projet qui grandit : Claude Code ; données sensibles : un développeur » — VO : Retenez quatre points. Corriger, vérifier, publier. Un signalement en trois parties. Les clés au coffre. Et les bons renforts quand le projet grandit.

**[F · CAM A]** Le lien de Hadiza circule dans le groupe WhatsApp de sa promotion. Rahila a déjà ajouté ses trois bourses. Chacun crée son compte, et ne voit que ses candidatures. Vérifiez, puis publiez votre application.

#### Liste des plans

| # | Type | Cadre / source | Contenu | Durée | Notes |
|---|---|---|---|---|---|
| 1 | E | Photo mise en scène ou illustration | Hadiza lit un message sur son téléphone ; bulle de texte ajoutée en graphique (pas de fausse interface) ; surtitre « Niamey — un message de Rahila » | 4 s | B1 |
| 2 | F | CAM A | Promesse, message de Rahila, rappel de la leçon 4 | 25 s | B1 |
| 3 | F | CAM A | Malentendu « ça marche donc c'est prêt », puis « trois gestes » | 18 s | B2, deux passages |
| 4 | A | Navigateur | Application de Hadiza ouverte depuis un lien, écran de connexion | 17 s | B2. Annoter « en ligne : visible de partout » |
| 5 | C | Schémas animés | Cartes-titres des unités 1 à 4 (signalement en trois cases, coffre des secrets, trois sauvegardes, Claude Code) | 16 s | B3, quatre cartes |
| 6 | F | CAM A | Explications des unités 1 et 2, puis « Claude Code ne décide pas à votre place » et « faites relire par un développeur » | 80 s | B3. Carte HAPDP en incrustation (nom complet, « Niger »), au moins 4 s |
| 7 | A | Lovable web + compte GitHub de démo | Historique des versions ; bouton « Exporter » ajouté à l'application ; copie du code sur GitHub | 24 s | B3. Aucun identifiant de projet visible |
| 8 | A | Application Claude, onglet Code | Session réelle sur le dépôt Karatou Academy : demande → plan → accord → fichiers modifiés → test | 22 s | B3. Aucune clé, aucun fichier de configuration à l'écran |
| 9 | G | Carte de consigne | Modèle de signalement, texte exact | 12 s | B4 |
| 10 | A | Lovable web, compte de démo | Défaut reproduit → signalement → correction expliquée → retest → test des deux comptes → fenêtre de publication et contrôle de sécurité → alertes lues → publication | 86 s | B4. Environ 13 s d'accéléré sans voix ; cadre sur le résultat du contrôle |
| 11 | A | Second téléphone, enregistrement natif | Lien ouvert, connexion avec un compte de test, application fonctionnelle | 9 s | B4 |
| 12 | F | CAM A | Adresses gratuites, nom de domaine et hébergement payants | 16 s | B4 |
| 13 | F | CAM B | Rappels par e-mail et clé, puis réponse « Non. Une clé… » | 35 s | B5 |
| 14 | B | Cartes | « Coller la clé dans la conversation : bonne idée ? » (2 s de silence) ; carte de rappel (4 points) | 20 s | B5 et B6 |
| 15 | F | CAM A | Clôture : le lien circule ; titre de l'exercice | 16 s | B6 |

#### Montage idéal

| Temps | Timecode cible | Image principale | Habillage (motion graphics) | Texte à l'écran | Son | Transition |
|---|---|---|---|---|---|---|
| B1 | 0:00–0:29 | E (message de Rahila), puis F CAM A | Bulle de message animée (graphique, sans logo) ; surtitre | « Urgent… avec des jours négatifs ! » ; promesse | voix seule | coupe |
| B2 | 0:29–1:05 | F CAM A, A (lien ouvert), F CAM A | Porte qui s'ouvre sur une carte du monde stylisée ; puis les trois gestes | « Corriger · Vérifier · Publier » | voix seule | coupe |
| B3 | 1:05–3:26 | C (cartes), F CAM A, A (historique, export, GitHub, Claude Code) | Signalement en trois cases ; coffre pour les secrets ; incrustation HAPDP | Titres des unités ; « HAPDP — Haute Autorité de Protection des Données à caractère Personnel (Niger) » ; « Version payante » | voix seule | coupe ; glissement entre unités |
| B4 | 3:26–5:30 | A (Lovable), G, A (second téléphone), F CAM A | Signalement en trois cases rempli en direct ; pictogramme « accéléré » ; cadre sur l'adresse lovable.app et sur le résultat du contrôle | Modèle (G) ; « Problème · Attendu · Étapes » ; « Contrôle de sécurité » | voix ; nappe légère pendant l'accéléré | coupe ; zoom ≤ 6 % sur le résultat du contrôle |
| B5 | 5:30–6:13 | F CAM B, B, F CAM B | Clé qui va dans le coffre, et non dans la bulle de conversation (barrée d'une croix) | « Bonne idée ? » ; « Les clés au coffre » | voix ; silence total 2 s | coupe |
| B6 | 6:13–6:41 | B (carte de rappel), F CAM A | Points révélés un par un | 4 points de la carte | voix seule | coupe, puis carte de clôture (Partie 1) |

**Notes de montage** : B3 est dense : une carte courte par unité, puis le face caméra ou la capture ; ne jamais empiler deux annotations. La carte HAPDP reste au moins 4 s. Ne jamais montrer de clé réelle, même floutée : utiliser un compte sans clé, ou masquer la zone par une forme pleine. Dans la capture Claude Code, rester sur la conversation et la liste des fichiers modifiés. Garder la respiration avant « Non. » en B5. Plans de couverture : inserts téléphone, B-cam, captures de l'historique.

#### Versions EN / HA / DJE

- **À re-filmer dans la langue** (≈ 25 s) : ouverture — « À la fin de cette leçon, vous saurez corriger en décrivant, vérifier la sécurité et publier votre application. Sa promotion veut l'utiliser. » ; conclusion — « Le lien de Hadiza circule dans le groupe WhatsApp de sa promotion. Rahila a déjà ajouté ses trois bourses. Chacun crée son compte, et ne voit que ses candidatures. Vérifiez, puis publiez votre application. »
- **Doublé en voix clonée** : B2 (plan 3) → schéma de la porte ouverte, puis carte des trois gestes ; B3 (plan 6) → schéma du signalement en trois cases, schéma du coffre, carte HAPDP, capture Claude Code prolongée ; B4 (plan 12) → capture de l'application publiée sur téléphone avec l'adresse encadrée ; B5 (plan 13) → schéma de la clé et du coffre, puis carte « Les clés au coffre ».
- **Notes d'adaptation** : « clé d'API » : en EN « API key » ; en HA et DJE, garder « API » et gloser « mot de passe d'un service ». La comparaison avec le code secret du mobile money est locale et parlante : la garder telle quelle. « Mécanicien » : image universelle. HAPDP : en EN, dire « Niger's data protection authority (HAPDP) ». « Nom de domaine » : en EN « your own domain name ».

### Leçon 6 — Projet final : livrer votre mini-application (`vc6`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez livrer une mini-application utile, avec son lien et sa fiche. »
- **Cas réel (B1 → B6)** : À Zinder, Moussa, quincaillier, a terminé le carnet de ses commandes aux fournisseurs, l'idée « feu vert » choisie en leçon 1. Enjeu : livrer un projet certifiant que l'évaluateur peut ouvrir, tester et comprendre. Contre-exemple en B5 : Ibrahim, apprenant, dépose une application sans compte de test. En B6, Moussa et Hadiza ont déposé leur projet ; c'est au tour de l'apprenant.
- **Unités de notion (B3)** : 1. Livrable un : le lien publié — Il s'ouvre sur un téléphone ; si l'application demande une connexion, un compte de test avec des données inventées est donné au dépôt. · 2. Livrable deux : la fiche produit — Une page, huit rubriques : nom, problème, pour qui, trois fonctions, comment tester, données gardées et jamais gardées, limites connues, prochaine étape. · 3. Cinq critères d'évaluation — Utile, fonctionnel sur téléphone, prudent (aucune donnée sensible, aucune clé visible), testé (deux comptes s'il y a une connexion), honnête (limites écrites) ; causes d'échec : lien mort, fiche absente, vraies données d'autres personnes [à valider par l'owner : grille et seuil de réussite].
- **Démo (B4)** : le projet de Moussa, construit avant la session 2 dans Bolt (ordinateur), compte de démo. 1. Montrer son cahier des charges d'une page (problème : il oublie quelles commandes sont en route ; personne : lui seul ; données jamais gardées : rien sur ses clients). 2. Montrer en accéléré quelques moments de la construction dans Bolt : mode Plan, puis une étape par consigne. 3. Montrer la publication : adresse en bolt.host, contrôle de sécurité au moment de publier [à vérifier au moment du tournage : libellés]. 4. Tester comme un évaluateur sur un téléphone : ouvrir le lien, se connecter avec le compte de test, ajouter une commande d'exemple (montant en FCFA présenté comme fictif), la marquer « reçue », la voir passer dans l'historique. 5. Montrer la fiche produit d'une page (huit rubriques). 6. Montrer le dépôt dans l'espace du projet final : lien, fiche, compte de test [à vérifier au moment du tournage : mécanisme de dépôt sur la plateforme]. Résultat attendu : une mini-application publiée, testable, documentée, déposée.
- **Consolidation (B5)** : prédiction. Ibrahim dépose une application impressionnante, mais elle demande une connexion et il ne fournit aucun compte de test. Son projet peut-il être validé ? Réponse : non ; l'évaluateur ne peut pas entrer, donc rien tester. Il faut un compte de test avec des données inventées, donné dans le formulaire de dépôt, jamais dans une consigne d'IA.
- **Consigne à copier** :

```text
Aide-moi à rédiger la fiche produit d'une page de mon application, en français simple.
Rubriques : nom ; problème résolu ; pour qui ; trois fonctions principales ; comment la tester ; données gardées et données jamais gardées ; limites connues ; prochaine étape.
Voici mes notes : [collez vos notes et votre cahier des charges].
N'invente rien : si une information manque, pose-moi la question.
N'écris aucun mot de passe et aucune donnée personnelle.
```

- **Exercice** : « Livrez votre mini-application » — 1. Vérifiez que votre lien s'ouvre sur un autre téléphone ; si l'application demande une connexion, créez un compte de test avec des données inventées. 2. Rédigez votre fiche produit d'une page avec la consigne, puis relisez et corrigez chaque ligne. 3. Déposez le lien, la fiche et le compte de test dans l'espace du projet final [à vérifier au moment du tournage : mécanisme de dépôt].
- **Carte de rappel** : 1. Livrer une mini-application utile, avec son lien et sa fiche 2. Deux livrables : le lien publié et la fiche d'une page 3. Données inventées, compte de test, aucune clé visible
- **Quiz** :
  1. Quels sont les deux livrables du projet final ? — A) Une vidéo et un CV B) Le lien de l'application publiée et la fiche produit d'une page C) Le code complet et une facture D) Une capture d'écran et un mot de passe — **Réponse : B**
  2. Votre application demande une connexion. Que fournir à l'évaluateur ? — A) Votre mot de passe personnel B) Rien C) Un compte de test avec des données inventées, dans le formulaire de dépôt D) Les comptes de vos camarades — **Réponse : C**
  3. Laquelle de ces rubriques fait partie de la fiche produit ? — A) Les limites connues B) Le salaire visé C) La liste de vos contacts D) Le code complet — **Réponse : A**
  4. Lequel de ces éléments fait échouer un projet ? — A) Une application petite mais utile B) Des données inventées C) Une fiche d'une page D) De vraies données personnelles d'autres personnes, visibles dans l'application — **Réponse : D**
  5. Lequel de ces critères fait partie de l'évaluation ? — A) L'application est grande B) Le parcours principal fonctionne sur téléphone C) L'application utilise le plus d'outils possible D) La fiche fait au moins dix pages — **Réponse : B**
- **Marques citées** : Bolt (et l'assistant utilisé pour la fiche, s'il est visible à l'écran : Claude).

#### Script

Durée estimée : 6:23 · Mots dits : 732

**[B1 — Accroche · 0:00–0:28]**

**[E · SITUATION]** « Zinder — la quincaillerie de Moussa » — VO : À Zinder, Moussa a terminé son application.

**[F · CAM A]** À la fin de cette leçon, vous saurez livrer une mini-application utile, avec son lien et sa fiche. L'idée de Moussa était au vert dès la leçon un. En leçon cinq, Hadiza a vérifié, puis publié son application. Aujourd'hui, c'est votre projet final, celui qui mène au certificat.

[PAUSE 1 s]

**[B2 — Cadrage · 0:28–1:12]**

**[F · CAM A]** Un malentendu fréquent : un projet certifiant doit être gros et impressionnant. Non. Il doit être utile, fonctionner, et rester honnête sur ses limites. Un outil qui sert vraiment à une personne vaut plus qu'une démonstration que personne n'ouvre.

**[A · ÉCRAN]** Son carnet de commandes aux fournisseurs tient en trois écrans. Ses commandes en cours, les dates de livraison prévues, et ce qui est arrivé. C'est petit, mais il s'en sert chaque semaine. Celui de Hadiza aussi : trois écrans, et une promotion qui s'en sert.

**[F · CAM A]** Petit, utile, honnête : c'est ce qu'on attend de vous.

[PAUSE 1 s]

**[B3 — Notion · 1:12–3:02]**

**[C · SCHÉMA]** « 1. Livrable un : le lien publié » — VO : Premier livrable : le lien de votre application publiée.

**[F · CAM A]** Il doit s'ouvrir sur un téléphone. Si l'application demande une connexion, créez un compte de test, avec des données inventées. Vous le donnez au moment du dépôt. Le compte de test : une adresse et un mot de passe créés pour l'évaluation, jamais les vôtres. Testez ce lien sur un autre téléphone, avec une autre connexion, avant de déposer.

[PAUSE 1 s]

**[C · SCHÉMA]** « 2. Livrable deux : la fiche produit » — VO : Deuxième livrable : la fiche produit, sur une page. Huit rubriques. Le nom, le problème, et pour qui. Trois fonctions, et comment la tester. Les données gardées et jamais gardées. Les limites connues, et la prochaine étape.

**[F · CAM A]** C'est la carte d'identité de votre application. Écrivez-la pour quelqu'un qui ne vous connaît pas. En une lecture, il comprend à quoi sert votre application.

[PAUSE 1 s]

**[C · SCHÉMA]** « 3. Cinq critères d'évaluation » — VO : Troisième point : les cinq critères.

**[F · CAM B]** Un, utile : le problème est réel, et clairement décrit. Deux, fonctionnel : le parcours principal marche sur téléphone. Trois, prudent : aucune donnée sensible, aucune clé visible. Quatre, testé : avec deux comptes, s'il y a une connexion. Cinq, honnête : les limites sont écrites. Ces critères ne jugent pas la beauté. Ils jugent l'utilité, la prudence et l'honnêteté.

**[F · CAM A]** Ce qui fait échouer ? Un lien qui ne s'ouvre pas, une fiche absente, ou de vraies données personnelles d'autres personnes. Et choisissez votre propre problème, pas une copie de l'application de Hadiza.

[PAUSE 1 s]

**[B4 — Application · 3:02–5:04]**

**[A · ÉCRAN]** Voyons le projet de Moussa, du début à la fin. D'abord, son cahier des charges. Une page. Le problème : il oublie quelles commandes sont en route. La personne : lui seul. Données jamais gardées : rien sur ses clients.

**[A · ÉCRAN]** Il a construit dans Bolt, sur son ordinateur portable. Mode Plan, puis une étape par consigne. Dans le plan, il a retiré deux fonctions : les comptes clients et les paiements. Feu rouge. Avant de publier, il a fait le test des deux comptes et lu le contrôle de sécurité. Ensuite, il a publié : son adresse finit par bolt.host.

**[A · ÉCRAN]** Testons comme un évaluateur. J'ouvre le lien sur un téléphone. Je me connecte avec le compte de test. J'ajoute une commande, puis je la marque « reçue ». Elle passe dans l'historique. Le parcours principal fonctionne sur téléphone : critère deux, vérifié.

**[A · ÉCRAN]** Voici sa fiche produit. Huit rubriques, une page. Dans les limites, il a écrit : « Pas de sauvegarde automatique : j'exporte chaque fin de mois. » Et dans la prochaine étape : « Ajouter mes fournisseurs de Kano. »

**[G · CONSIGNE]** « Aide-moi à rédiger la fiche produit d'une page de mon application, en français simple. Rubriques : nom ; problème résolu ; pour qui ; trois fonctions principales ; comment la tester ; données gardées et données jamais gardées ; limites connues ; prochaine étape. Voici mes notes : [collez vos notes et votre cahier des charges]. N'invente rien : si une information manque, pose-moi la question. N'écris aucun mot de passe et aucune donnée personnelle. » — VO : Pour rédiger la vôtre, utilisez cette consigne avec un assistant gratuit. Puis vérifiez chaque ligne : c'est vous qui signez la fiche.

**[A · ÉCRAN]** Enfin, le dépôt. Dans l'espace du projet final, Moussa colle son lien, joint sa fiche, et indique son compte de test. Il relit tout une dernière fois, puis il envoie.

[PAUSE 1 s]

**[B5 — Consolidation · 5:04–5:50]**

**[F · CAM B]** Ibrahim, un autre apprenant, dépose une application impressionnante. Mais elle demande une connexion, et il ne fournit aucun compte de test.

**[B · CARTE]** « Aucun compte de test : projet validé ? » — VO : Son projet peut-il être validé ?

**[SILENCE 2 s]**

**[F · CAM B]** Non. L'évaluateur ne peut pas entrer, donc il ne peut rien tester. Donnez un compte de test, avec des données inventées. Dans le formulaire de dépôt, jamais dans une consigne d'IA. Pensez à l'évaluateur comme à un client : il doit pouvoir entrer tout seul. Faites le test vous-même : ouvrez le lien sur un téléphone qui n'est pas le vôtre.

[PAUSE 1 s]

**[B6 — Clôture · 5:50–6:23]**

**[C · SCHÉMA]** « Le parcours : 1. Choisir · 2. Décrire · 3. Prototyper · 4. Mémoriser · 5. Publier » — VO : Le parcours en cinq étapes. Choisir un projet feu vert. Le décrire sur une page. Prototyper, une étape par consigne. Lui donner une mémoire et des comptes. Corriger, vérifier, publier.

**[B · CARTE DE RAPPEL]** « 1. Livrer une mini-application utile, avec son lien et sa fiche » « 2. Deux livrables : le lien publié et la fiche d'une page » « 3. Données inventées, compte de test, aucune clé visible » — VO : Pour votre dépôt : le lien, la fiche, et un compte de test.

**[F · CAM A]** Moussa a déposé son projet. Hadiza aussi. Déposez votre lien et votre fiche dans l'espace du projet final. Livrez votre mini-application.

#### Liste des plans

| # | Type | Cadre / source | Contenu | Durée | Notes |
|---|---|---|---|---|---|
| 1 | E | Photo de lieu ou illustration | La quincaillerie de Moussa à Zinder (aucun visage identifiable sans autorisation) ; surtitre « Zinder — la quincaillerie de Moussa » | 4 s | B1 |
| 2 | F | CAM A | Promesse, idée feu vert de la leçon 1, rappel de la leçon 5 | 24 s | B1 |
| 3 | F | CAM A | Malentendu « gros et impressionnant », puis « Petit, utile, honnête » | 24 s | B2, deux passages |
| 4 | A | Téléphone, enregistrement natif | Les trois écrans de l'application de Moussa, puis un plan sur celle de Hadiza | 21 s | B2. Annoter « 3 écrans » |
| 5 | C | Schémas animés | Cartes des trois points : le lien ; la fiche (huit rubriques qui s'allument) ; les cinq critères | 25 s | B3, trois cartes |
| 6 | F | CAM A | Explications du lien et de la fiche, causes d'échec, choix de son propre problème | 58 s | B3 |
| 7 | F | CAM B | Les cinq critères, comptés sur les doigts | 26 s | B3. Incrustation des cinq mots : utile, fonctionnel, prudent, testé, honnête |
| 8 | A | Document + Bolt (ordinateur) | Cahier des charges de Moussa ; moments clés de la construction dans Bolt (mode Plan, fonctions retirées) ; publication en bolt.host | 56 s | B4. Environ 10 s d'accéléré sans voix |
| 9 | A | Téléphone, enregistrement natif | Test d'évaluateur : lien, connexion, commande ajoutée et marquée « reçue », historique | 23 s | B4. Montant en FCFA étiqueté « fictif » |
| 10 | A | Document PDF | Fiche produit de Moussa, rubrique par rubrique | 16 s | B4. Zoom ≤ 6 % sur « Limites connues » |
| 11 | G | Carte de consigne | Consigne de la fiche produit, texte exact | 12 s | B4 |
| 12 | A | Navigateur, Karatou Academy | Formulaire de dépôt du projet final rempli avec les éléments de Moussa | 15 s | B4. Mécanisme à confirmer |
| 13 | F | CAM B | Cas d'Ibrahim, puis réponse | 39 s | B5 |
| 14 | B / C | Cartes et schéma | « Aucun compte de test : projet validé ? » (2 s de silence) ; parcours en cinq étapes (une par leçon) ; carte de rappel (3 points) | 29 s | B5 et B6 |
| 15 | F | CAM A | Clôture, consigne de dépôt, titre de l'exercice | 10 s | B6 |

#### Montage idéal

| Temps | Timecode cible | Image principale | Habillage (motion graphics) | Texte à l'écran | Son | Transition |
|---|---|---|---|---|---|---|
| B1 | 0:00–0:28 | E (quincaillerie), puis F CAM A | Surtitre lieu ; rappel visuel du feu vert de la leçon 1 | Promesse | voix seule | coupe |
| B2 | 0:28–1:12 | F CAM A, A (écrans de Moussa, puis de Hadiza), F CAM A | Trois écrans alignés ; mots « petit · utile · honnête » | « Petit, utile, honnête » | voix seule | coupe |
| B3 | 1:12–3:02 | C (cartes), F CAM A/B | Fiche stylisée dont les huit rubriques s'allument ; cinq critères avec pictogramme et mot | « Livrable 1 · Livrable 2 » ; « Utile · Fonctionnel · Prudent · Testé · Honnête » | voix seule | coupe ; glissement entre points |
| B4 | 3:02–5:04 | A (document, Bolt, téléphone, fiche, dépôt), G | Frise du projet de Moussa (cahier → construction → publication → test → fiche → dépôt) ; pictogramme « accéléré » | Consigne (G) ; « Montant fictif » ; adresse bolt.host encadrée | voix ; nappe légère | coupe |
| B5 | 5:04–5:50 | F CAM B, B, F CAM B | Cadenas fermé sur l'application d'Ibrahim ; repère pendant le silence | « Projet validé ? » | voix ; silence total 2 s | coupe |
| B6 | 5:50–6:23 | C (parcours en cinq étapes), B (carte de rappel), F CAM A | Les cinq étapes s'allument une par une (une par leçon), puis les trois points | Parcours ; 3 points ; « Espace du projet final » | voix ; nappe de fin (Partie 1) | coupe, puis carte de clôture (Partie 1) |

**Notes de montage** : B4 doit montrer chaque livrable assez longtemps pour être compris (≥ 3 s par écran clé) sans devenir un tutoriel Bolt. Le récapitulatif de B6 reprend la frise du cours (même style que les cartes des unités). Aucune donnée réelle : clients, fournisseurs et montants de Moussa sont inventés et étiquetés. Si le mécanisme de dépôt change, remplacer le plan 12 sans toucher à la voix (formulation générique « l'espace du projet final »).

#### Versions EN / HA / DJE

- **À re-filmer dans la langue** (≈ 25 s) : ouverture — « À la fin de cette leçon, vous saurez livrer une mini-application utile, avec son lien et sa fiche. Aujourd'hui, c'est votre projet final, celui qui mène au certificat. » ; conclusion — « Moussa a déposé son projet. Hadiza aussi. Déposez votre lien et votre fiche dans l'espace du projet final. Livrez votre mini-application. »
- **Doublé en voix clonée** : B2 (plan 3) → les trois écrans de Moussa prolongés ; B3 (plans 6 et 7) → fiche stylisée aux huit rubriques, pictogrammes des cinq critères, schéma des causes d'échec ; B5 (plan 13) → cadenas sur l'application d'Ibrahim, puis carte « compte de test ».
- **Notes d'adaptation** : « fiche produit » : en EN « one-page product sheet » ; en HA et DJE, périphrase « la feuille qui présente l'application ». « Projet certifiant » : en EN « certification project ». Les cinq critères doivent rester cinq mots courts dans chaque langue, faciles à compter sur les doigts. FCFA se dit ainsi dans les trois langues.

## 2.6 Captures et éléments à préparer

| Leçon | Élément | Comment l'obtenir | Qui |
|---|---|---|---|
| 1 | Photo ou illustration : Hadiza à son bureau à Niamey, téléphone en main, papiers épars | Photo mise en scène avec une personne consentante (autorisation écrite), ou illustration selon la charte de la Partie 1 | owner / Claude |
| 1 | Capture : pages publiques de Karatou Academy | Navigateur, profil « Karatou démo », aucune donnée d'apprenant | owner |
| 1, 5 | Capture : session Claude Code réelle sur le dépôt Karatou Academy (demande en français → plan → accord → fichiers modifiés → test) | Application Claude, onglet Code, branche de travail ; aucune clé, aucun fichier de configuration, aucun identifiant de projet à l'écran | owner |
| 1 | Capture : page du dictionnaire Collins sur le mot de l'année 2025 (« vibe coding ») | Navigateur ; source affichée à l'écran | Claude ou owner |
| 1 | Captures : accueils de Lovable (web) et de Bolt, application mobile de Lovable, onglet Code de l'application Claude | Comptes de démo ; écrans d'accueil seulement | owner |
| 1 | Capture : démo micro-application (consigne → aperçu → amélioration → vue téléphone) | Lovable, compte gratuit de démo, enregistrement continu | owner |
| 2 | Photo ou illustration : Hadiza déçue devant son ordinateur | Comme en leçon 1 | owner / Claude |
| 2 | Capture : résultat réel de la phrase « Fais-moi une application de bourses » | Lovable, nouveau projet, compte de démo | owner |
| 2 | Capture : entretien avec Claude (consigne → questions → page finale → relecture) | Claude version gratuite ; réponses préparées (fiche de la leçon 2) | owner |
| 2 | Cahier des charges de Hadiza : fichier texte, capture rubrique par rubrique (B3) et version imprimée pour le décor | Issu de la démo, relu par l'owner ; capture dans un éditeur de texte ou les notes du téléphone | owner |
| 2 | Insert : croquis au crayon des trois écrans (trois cases sur une feuille) | Dessiné par l'owner, filmé en insert | owner |
| 3 | Captures : mode Plan, plan proposé, étapes 1 à 3, vue téléphone, historique des versions | Lovable, projet de démo | owner |
| 3 | Capture : même cahier des charges en mode Plan dans Bolt, jusqu'au premier aperçu | Bolt sur ordinateur, navigateur récent | owner |
| 3 | Capture : application mobile de Lovable, consigne dictée à la voix | Téléphone, enregistrement natif [à vérifier au moment du tournage : fonction disponible] | owner |
| 3 | Capture : le prototype terminé, parcouru au doigt sur téléphone (B2) | Enregistrement natif, à la fin de la démo | owner |
| 4 | Captures : activation de Lovable Cloud, tableaux, test de mémoire, écran de connexion, règles d'accès, compte « Hadiza » | Lovable, projet de démo ; adresses de test du tournage | owner |
| 4 | Captures : même compte sur un second téléphone ; compte « Rahila » avec liste vide | Second téléphone, enregistrement natif | owner |
| 5 | Photo ou illustration : Hadiza lit un message sur son téléphone | Comme en leçon 1 ; la bulle de message est ajoutée en graphique | owner / Claude |
| 5 | Captures : défaut de date passée, signalement, correction, retest, fenêtre de publication et contrôle de sécurité, publication | Lovable, projet de démo | owner |
| 5 | Capture : l'application de Hadiza ouverte depuis son lien, écran de connexion (B2) ; espace des secrets vide (couverture) | Navigateur, après publication ; Lovable Cloud [à vérifier au moment du tournage : emplacement des secrets] | owner |
| 5 | Captures : historique des versions, bouton « Exporter » ajouté, copie du code sur GitHub | Lovable + compte GitHub de démo [à vérifier au moment du tournage : disponible en version gratuite] | owner |
| 5 | Carte HAPDP : nom complet et pays | Vérifier l'intitulé sur le site officiel de l'autorité [à vérifier au moment du tournage : texte de loi en vigueur, sans le citer à l'écran] | Claude |
| 6 | Application de Moussa dans Bolt : cahier des charges, construction (moments clés), publication en bolt.host, compte de test, données inventées ; ses trois écrans sur téléphone (B2) | Construite avant la session 2 par l'owner | owner |
| 6 | Photo ou illustration : la quincaillerie de Moussa à Zinder | Photo de lieu sans visage identifiable, ou illustration | owner / Claude |
| 6 | Fiche produit de Moussa (PDF d'une page) | Rédigée avec la consigne de la leçon 6, relue | owner + Claude |
| 6 | Capture : formulaire de dépôt du projet final sur Karatou Academy | Plateforme, compte de démo [à vérifier au moment du tournage : mécanisme de dépôt] | owner |
| Toutes | Inserts : mains au clavier, pouce qui coche, calendrier, page imprimée, deux téléphones côte à côte | Fin de la session 3 | owner |
| Toutes | Cartes (B, G), schémas (C), cartes de rappel, frise du parcours | HyperFrames, selon la Partie 1 | Claude |
