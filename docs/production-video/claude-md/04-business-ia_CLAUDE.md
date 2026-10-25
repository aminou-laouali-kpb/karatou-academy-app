# CLAUDE.md — Karatou Academy · Production vidéo
# Cours 4 — Lancer et développer son business avec l'IA

> **Pour l'owner — mode d'emploi**
> 1. Créez un dossier vide sur votre ordinateur, par exemple `karatou-business-ia`.
> 2. Copiez-y ce fichier et renommez-le exactement `CLAUDE.md`.
> 3. Ouvrez Claude Code dans ce dossier (dans un terminal : `cd karatou-business-ia` puis `claude`).
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
livraison/business-ia/<id>/      fichiers livrés · livraison/business-ia/INTEGRATION.md
```

`<id>` est l'identifiant de la leçon (`bz1`, `bz2`…). Langues : `fr`, `en`, `ha`, `dje`.

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

### 9.2 Nommage et contenu de `livraison/business-ia/<id>/`

`business-ia_<id>_<langue>_v<n>.mp4` · `…-360.mp4` · `….srt` · `….vtt` · `…_cover.jpg` (1920 × 1080, qualité 85,
première image stable de B1) · `…_transcript.md` (un titre par temps, texte dit + actions à l'écran entre
crochets) · `RECETTE.md`.

### 9.3 Mise en ligne

Chaîne YouTube **Karatou Academy**, vidéos **non répertoriées**, une vidéo par langue, sous-titres `.srt` ajoutés
comme piste. Titre : « Karatou Academy — Lancer et développer son business avec l'IA — Leçon N : <titre> (<LANGUE>) ». Le site lit des **URL
d'intégration** : `https://www.youtube.com/embed/<ID>` (jamais `watch?v=` ni `youtu.be/`). Teste chaque URL dans un
navigateur avant de la consigner.

### 9.4 Intégration au site — `livraison/business-ia/INTEGRATION.md`

Le site lit, pour chaque leçon, un champ `video: { fr, en, ha }` dans les fichiers TypeScript du dépôt
`karatou-academy-app` (registre `authoredLessons`). Chaque leçon y a aussi un texte (objectif, quatre sections,
exemple, exercice, quiz de cinq questions, réflexion, glossaire), rédigé par l'équipe avec le skill
`karatou-course-creator`, et des lignes Supabase (module, leçons) pour la progression et les certificats.

Ton rôle : tenir `INTEGRATION.md` à jour, leçon par leçon : module `business-ia`, id, titre, promesse (objectif), cas
réel (exemple), exercice (titre et étapes), carte de rappel, quiz, marques citées, URL FR / EN / HA, et URL DJE
« en attente ». Ce fichier est remis à l'équipe technique ; tu ne modifies pas le dépôt du site.

### 9.5 Corrections après publication

Une URL publiée est figée. Pour corriger : nouvelle version `v2` → mise en ligne → nouvelle URL testée →
`INTEGRATION.md` mis à jour → l'équipe technique remplace l'URL → l'ancienne vidéo est rendue privée, jamais
supprimée. Consigne chaque version dans le journal de `PROGRESS.md`.

## 10. `PROGRESS.md` — modèle

```markdown
# PROGRESS — Cours 4 · Lancer et développer son business avec l'IA
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
| Numéro | 4 |
| Titre | Lancer et développer son business avec l'IA |
| Format | Filmé (humain face caméra + captures + motion graphics) |
| Owner / présentateur | Aminou — Aminou Laouali Abdou, Consultant en IA et Innovation — Google Generative AI Leader (nom complet et titre à reconfirmer au premier lancement) |
| Rubrique | Entrepreneuriat |
| Public | Entrepreneurs et commerçants du Niger et d'Afrique de l'Ouest qui lancent ou font grandir une petite activité : boutique, restauration, couture, transformation agroalimentaire, services. Souvent sur téléphone uniquement, sans formation en gestion. |
| Slug du module (provisoire) | `business-ia` |
| Préfixe des leçons | `bz` (ex. `bz1` … `bz6`) |
| Nombre de vidéos | 6 (dont la dernière = projet final certifiant) |
| Durée par vidéo | 5–8 min (cible 6:00) |
| Langues | FR (tournage, référence) · EN · HA · DJE |
| Prérequis | Un smartphone avec WhatsApp ; un compte gratuit sur un assistant IA (Gemini, ChatGPT ou Claude) ; un compte Google gratuit (Google Sheets, Google Docs) ; l'application WhatsApp Business (gratuite) installée en leçon 4, idéalement sur un numéro réservé à l'activité ; un cahier et un stylo. Savoir envoyer une photo et copier-coller un texte. Aucune connaissance en gestion. |
| Promesse du cours | À la fin de ce cours, vous saurez tester une idée, la chiffrer, la vendre sur WhatsApp et suivre votre caisse, avec l'IA comme assistant. |
| Positionnement | Le parcours complet d'un petit commerce, de la première idée à la caisse de la semaine, sur téléphone et avec des outils gratuits. Il applique sans les refaire le module `intelligence-artificielle` (bases, consignes), `introduction-claude-ai` (un outil) et `data-analysis` (tableur avancé). Il effleure les visuels et renvoie aux cours 5 « Créer visuels et vidéos avec l'IA » et 9 « L'IA pour les tâches créatives » ; au cours 2 « Agents IA » pour l'agent qui répond seul sur WhatsApp ; au cours 11 « Excel + IA » pour aller plus loin dans le tableur ; au cours 10 « Arnaques, deepfakes et sécurité numérique » pour les fraudes au paiement mobile. L'IA y est un assistant de réflexion, de calcul et de rédaction : les décisions, les chiffres et la relation client restent ceux de l'entrepreneur. |
| Fil rouge | **Hadiza**, 31 ans, Niamey (quartier Talladjé), transforme gingembre et bissap en jus et veut livrer les bureaux du Plateau : elle porte les six démonstrations, de l'idée testée au dossier de lancement déposé à une agence de microfinance. Quatre personnages reviennent en miroir, un par métier du public : **Moussa** (boutique de quartier, Maradi : L1, L4, L5), **Rahila** (couturière, Zinder : L1, L4), **Ibrahim** (petit restaurant près de la gare routière, Tahoua : L2, L6), **Souleymane** (réparation de téléphones, Dosso : L1, L3). Tous les montants en FCFA sont fictifs et annoncés comme tels. |
| Marques citées | WhatsApp, WhatsApp Business (Meta) · Gemini, Google Sheets, Google Docs, Mode IA de Google Search (Google) · ChatGPT (OpenAI) · Claude (Anthropic) · Business Model Canvas (Strategyzer, mention à l'écran seulement) |

## 2.2 Ce que l'apprenant saura faire

- Mener cinq entretiens de découverte sur des faits passés, puis organiser un test de vente à petite échelle (précommande ou petit lot).
- Réaliser une étude de marché express : relevé de prix chez trois concurrents ou plus, recherche web avec sources ouvertes et datées, estimation écrite avec ses hypothèses.
- Rédiger et chiffrer la page de son projet : neuf cases, coût de revient d'une unité, marge, seuil de rentabilité, chaque calcul refait à la calculatrice.
- Configurer WhatsApp Business (profil, catalogue, messages d'accueil et d'absence, réponses rapides, étiquettes) avec des textes rédigés par l'IA, relus et corrigés.
- Tenir chaque semaine un tableau ventes, stock et caisse dans Google Sheets et le faire analyser par l'IA, sans aucune donnée personnelle, en vérifiant ses totaux.
- Assembler un dossier de lancement de quatre pièces avec un plan d'action de 30 jours daté et mesurable.

## 2.3 Plan du cours

| Leçon | Id | Titre | Promesse (objectif) | Cas réel (B1) | Démo (B4) | Durée cible |
|---|---|---|---|---|---|---|
| 1 | `bz1` | Trouver une idée et la tester avant d'investir | Tester une idée auprès de vrais clients, avant d'investir | Hadiza veut livrer ses jus aux bureaux du Plateau ; avant d'acheter glacière et bouteilles, elle veut une preuve | Gemini : questions d'entretien sur des faits passés → synthèse de cinq entretiens anonymisés → test de précommande | 6:00 |
| 2 | `bz2` | L'étude de marché express, sans chiffres inventés | Faire une étude de marché express, avec des sources vérifiées | Hadiza cherche qui vend déjà des jus près des bureaux, à quel prix, et quelles règles s'appliquent | Gemini avec recherche web : tableau de quatre concurrents → règles et sources → ouverture des liens → fiche « je sais / je suppose / je vérifie » | 6:00 |
| 3 | `bz3` | Votre projet sur une page, chiffres compris | Résumer et chiffrer votre projet sur une seule page | Une agence de microfinance demande à Hadiza son projet sur une page, avec ses chiffres | Gemini : page en neuf cases → coût de revient, marge et seuil vérifiés à la calculatrice → questions d'un agent de crédit → Google Docs | 6:00 |
| 4 | `bz4` | Vendre sur WhatsApp Business avec l'aide de l'IA | Préparer votre WhatsApp Business pour vendre, avec l'aide de l'IA | Les commandes de Hadiza arrivent en désordre, la nuit, et l'une a été oubliée | Gemini rédige profil, fiches produits, messages et réponses rapides → configuration de WhatsApp Business → test depuis un second téléphone | 6:00 |
| 5 | `bz5` | Suivre ventes, stock et caisse chaque semaine | Suivre ventes, stock et caisse chaque semaine, avec l'IA | Hadiza ne sait pas si elle gagne de l'argent ; sa caisse ne tombe jamais juste | Google Sheets (saisie, stock, somme) → point de la semaine avec Gemini → vérification des totaux → commande de bouteilles | 6:00 |
| 6 | `bz6` | Projet final : votre dossier de lancement | Bâtir votre dossier de lancement et son plan d'action | L'agence attend le dossier complet de Hadiza ; ses pièces sont éparpillées | Dossier de Hadiza page par page → plan de 30 jours avec Gemini → relecture selon les quatre critères → corrections → PDF | 6:00 |

## 2.4 Plan de tournage idéal

### Matériel et réglages

- **Caméra A** : téléphone récent sur trépied avec pince, objectif principal (jamais le grand-angle), 4K 30 i/s si possible, sinon 1080p 30 i/s. Exposition, mise au point et balance des blancs verrouillées (mode manuel ou « Pro » de l'appareil photo), vitesse 1/60 s, ISO au plus bas.
- **Caméra B** (optionnelle) : second téléphone ou hybride, 1080p 30 i/s, même balance des blancs, pour le second angle et les inserts.
- **Son** : micro-cravate filaire branché sur la caméra A (ou kit sans fil), 48 kHz ; enregistrement de secours sur la caméra B.
- **Lumière** : deux panneaux LED avec diffuseur, en lumière du jour. Lumière principale à 45°, un peu au-dessus des yeux ; lumière d'appoint de l'autre côté, plus faible (ou réflecteur blanc). Néons du plafond éteints (scintillement).
- **Téléprompteur** : tablette ou téléphone avec une application de téléprompteur, au plus près de l'objectif (support à miroir si possible), vitesse calée sur 120–130 mots par minute.
- **Téléphones de démonstration** : téléphone « Hadiza » (SIM de démonstration, WhatsApp Business, compte Google de démonstration) et téléphone « client » (compte d'un membre de l'équipe consentant, enregistré sous le nom « Client test »).
- **Accessoires** : batteries externes chargées (coupures de courant), stockage libre, chiffon pour objectif, ruban adhésif pour marquer les positions, clap de synchronisation.

### Décor, lumière, son

- **Décor** : un coin « atelier-boutique » qui parle aux commerçants : étagère en bois avec bouteilles de jus sans marque (étiquette factice « Les jus de Hadiza »), bocaux de gingembre et de bissap, un tissu wax plié (clin d'œil à la couture), un cahier de caisse, une calculatrice, un téléphone sur support. Au moins 1,5 m de profondeur derrière l'owner, pas de motif serré derrière la tête, aucun logo ni marque lisible. Un objet bleu discret peut rappeler la charte.
- **Continuité** : même décor et même tenue (unie, sans rayures fines ni logo) pour les six leçons, afin de pouvoir mélanger les prises ; photos de référence du décor prises en début de chaque session.
- **Lumière** : pas de soleil direct par la fenêtre ; si la fenêtre sert de lumière principale, la diffuser (voilage) et compléter avec les LED, sans mélanger avec des ampoules chaudes.
- **Son** : pièce meublée (tapis, natte, rideaux) contre l'écho ; climatiseur, ventilateur, réfrigérateur et groupe électrogène coupés pendant les prises ; tourner tôt le matin (moins de chaleur, moins de circulation) ; suspendre les prises pendant l'appel à la prière ; silence de salle enregistré en début de session.

### Cadrages

- **A-cam** : plan poitrine 16:9, yeux sur la ligne du tiers supérieur, regard objectif, peu d'air au-dessus de la tête. Le tiers inférieur du cadre ne porte aucun élément important : il reçoit les sous-titres.
- **B-cam** : angle de 30 à 45° par rapport à l'axe A, un peu plus large, même hauteur d'objectif ; sert dans les unités de B3 et pour les respirations.
- **Inserts (CAM B)** : vues de dessus des cahiers (L2, L5), mains sur le téléphone, calculatrice, bouteilles alignées. Un écran de téléphone n'est jamais lu en insert : tout texte à lire passe par une capture.
- **Valeurs de plan** : resserrer par recadrage de l'image 4K au montage, en coupe franche, jamais par zoom animé.

### Captures d'écran

- **Source** : enregistrement d'écran natif du téléphone (vertical, définition native, 30 i/s). Thème clair, taille d'affichage et taille de police augmentées d'un cran, mode « Ne pas déranger », aucune autre application ouverte, fond d'écran neutre.
- **Comptes de démonstration** : compte Google « Karatou Démo » (Gemini, Google Sheets, Google Docs) sans photo ni historique ; WhatsApp Business sur une SIM de démonstration, entreprise « Les jus de Hadiza (démo) » ; contacts limités à l'équipe. Aucune donnée réelle : notes, tableaux et montants sont fictifs et fournis dans chaque fiche (champ Démo).
- **Gestes** : lents ; chaque écran tenu au moins 3 s avant d'appuyer ; frappe au clavier visible, sans faute à corriger.
- **Réponses de l'IA** : 2 ou 3 essais par capture, on garde le plus clair. Jamais de retouche d'une réponse : si elle diffère du script, on refait la capture ou on adapte la voix off. Noter la date de chaque capture (les interfaces changent).
- **Navigateur** (sources, leçon 2) : ouvert depuis l'application, sans onglets, favoris ni compte visibles.
- **Montage** : n'afficher que la zone utile de l'écran (recadrage fixe sur le message ou le champ concerné), le téléphone au-dessus de la zone des sous-titres. Liste complète par leçon : voir 2.6.

### Organisation du tournage

- **Session 1** (matinée, environ 3 h) : toutes les ouvertures et clôtures face caméra (B1, B6) des six leçons, puis leurs versions EN, HA et DJE (40 s au plus par leçon et par langue).
- **Session 2** (matinée, environ 3 h) : blocs face caméra B2 à B5 des leçons 1 à 3.
- **Session 3** (matinée, environ 3 h) : blocs face caméra B2 à B5 des leçons 4 à 6.
- **Session 4** (environ 2 h, CAM B seule) : inserts (cahiers, calculatrice, mains, bouteilles, téléphones).
- **Session 5** (environ 4 h, sans caméra) : captures de 2.6, puis voix off des passages `[A · ÉCRAN]`, dans la même pièce et avec le même micro.
- **Par bloc** : deux prises complètes, plus une prise de sécurité un peu plus lente ; 1 s de silence, regard caméra, avant et après chaque bloc ; bonnes prises notées sur le script.
- **Ton** : même énergie et même distance au micro d'une session à l'autre ; relire à voix haute l'ouverture de la leçon 1 avant chaque session pour se recaler.

### Checklist du jour J

- [ ] Caméras, micro, téléprompteur et batteries externes chargés ; stockage libre.
- [ ] SIM de démonstration active, données mobiles ou Wi-Fi ; « Ne pas déranger » sur tous les téléphones.
- [ ] Décor conforme aux photos de référence ; aucune marque lisible ; positions marquées au sol.
- [ ] Tenue identique aux sessions précédentes.
- [ ] Balance des blancs, exposition et mise au point verrouillées ; 30 s de test son écoutées au casque.
- [ ] Climatiseur, ventilateur, réfrigérateur coupés ; horaires de prière notés.
- [ ] Pages de cahier fictives écrites à la main (L1 notes d'entretien, L2 relevé de prix, L5 page de ventes).
- [ ] Classeur Google Sheets et dossier Google Docs de démonstration préremplis (données des fiches Démo).
- [ ] Autorisation écrite signée pour toute personne filmée ou dont le compte apparaît.
- [ ] Script imprimé, blocs numérotés ; silence de salle enregistré.

## 2.5 Les leçons

### Leçon 1 — Trouver une idée et la tester avant d'investir (`bz1`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez tester une idée auprès de vrais clients, avant d'investir. »
- **Cas réel (B1 → B6)** : Hadiza, 31 ans, prépare des jus de gingembre à Niamey et les vend devant sa maison, à Talladjé. Elle pense que les employés des bureaux du Plateau manquent d'une boisson fraîche et propre à midi, et voudrait les livrer. Avant d'acheter une glacière et cent bouteilles, elle prépare cinq questions sur leurs habitudes de la veille, interroge cinq employés, fait trier ses notes par l'IA et propose vingt bouteilles en précommande. En B6, le lot est écoulé avant le mardi midi et trois bureaux redemandent : l'idée a passé son premier test sans dépense lourde.
- **Unités de notion (B3)** : 1. Partir d'un problème, pas d'un produit — un client paie pour régler un problème qu'il a déjà · 2. Interroger sur le passé, pas sur l'avenir — les faits d'hier disent plus que les intentions · 3. Tester petit avant d'investir — précommande ou petit lot ; un vrai signal coûte quelque chose au client · 4. L'IA prépare, vous écoutez — elle prépare les questions et trie les notes, jamais avec un nom ou un numéro.
- **Démo (B4)** : Gemini (application, compte « Karatou Démo »). 1. Coller la consigne, idée et clients remplis. 2. Lire les cinq questions proposées ; en remplacer une par la question de Hadiza : « Hier, qu'avez-vous bu à midi, et où ? ». 3. Saisir les notes fictives des cinq entretiens (ci-dessous). 4. Obtenir le tableau de synthèse : problème, solution actuelle, signal d'achat. 5. Demander un test faisable en sept jours ; Hadiza fixe elle-même le nombre (vingt bouteilles) et la date (mardi midi). Résultat attendu à l'écran : un tableau de cinq lignes où quatre clients citent le manque d'une boisson fraîche et propre, puis une proposition de précommande. Notes fictives à saisir : « Client 1 — employée de bureau : hier midi, sachet d'eau du vendeur ambulant ; jamais frais ; aime le gingembre. Client 2 — comptable : rien bu à midi, pas le temps de sortir ; boit du bissap le soir. Client 3 — agent d'accueil : jus en sachet du vendeur ambulant ; doute de la propreté ; préfère une bouteille fermée. Client 4 — secrétaire : boisson gazeuse du kiosque ; trop sucrée ; cherche une boisson locale. Client 5 — chauffeur : apporte sa bouteille de la maison ; pas intéressé. » [à vérifier au moment du tournage : réponse réelle de Gemini ; adapter la voix off si le tableau diffère.]
- **Consolidation (B5)** : prédiction. Moussa, boutiquier à Maradi, demande à dix voisins s'ils achèteraient du pain chez lui ; les dix disent oui ; il commande soixante pains. Question : combien en vend-il ? Réponse : douze, car ses voisins achètent déjà leur pain sur la route du travail ; la bonne question portait sur hier.
- **Consigne à copier** :

```text
Tu es un conseiller en création d'entreprise au Niger. Je veux tester une idée avant d'investir.
Mon idée : [votre produit ou service, en une phrase].
Mes clients visés : [qui, où, quand — ex. employés de bureau du Plateau, à Niamey, à midi].
Le problème que je crois résoudre : [votre hypothèse].

1. Propose 5 questions pour des entretiens de 10 minutes. Elles portent sur des faits passés (« La dernière fois que… »), jamais sur l'avenir (« Achèteriez-vous… ? »).
2. Quand je te donnerai mes notes (Client 1 à Client 5, sans nom ni numéro), fais un tableau : problème cité, solution utilisée aujourd'hui, signal d'achat.
3. Propose un test de vente simple, faisable en 7 jours avec un petit budget.
Réponds en français simple, en phrases courtes.
```

- **Exercice** : « Menez cinq entretiens clients cette semaine » — 1. Écrivez votre idée en une phrase : pour qui, quel problème, quelle solution. 2. Avec la consigne, préparez cinq questions sur des faits passés ; supprimez toute question du type « Achèteriez-vous… ? ». 3. Interrogez cinq clients possibles, dix minutes chacun ; notez leurs mots exacts, sans nom ni numéro. 4. Faites synthétiser vos notes par l'IA, lancez un test de sept jours (précommande ou petit lot) et notez le résultat : il servira au projet final.
- **Carte de rappel** : 1. Tester une idée auprès de vrais clients, avant d'investir 2. Demander des faits passés, pas des promesses 3. Un vrai signal coûte quelque chose au client 4. Jamais de nom ni de numéro dans une consigne
- **Quiz** :
  1. Avant d'acheter du matériel pour une nouvelle idée, que faites-vous d'abord ? — A) Vous demandez à l'IA si l'idée est bonne B) Vous testez l'idée auprès de vrais clients C) Vous imprimez des étiquettes D) Vous empruntez de l'argent — **Réponse : B**
  2. Quelle question donne l'information la plus fiable ? — A) « Achèteriez-vous mon jus ? » B) « Aimez-vous le gingembre ? » C) « Hier à midi, qu'avez-vous bu, et où ? » D) « Mon idée vous plaît-elle ? » — **Réponse : C**
  3. Lequel de ces retours est un vrai signal d'achat ? — A) « Bonne idée, bravo ! » B) Un cœur sous votre statut C) « Je vous dirai » D) Une précommande payée — **Réponse : D**
  4. Pour faire synthétiser vos entretiens par l'IA, que mettez-vous dans la consigne ? — A) Les notes, avec « Client 1 », « Client 2 »… B) Les noms et numéros des clients C) Les photos des clients D) Les adresses exactes des clients — **Réponse : A**
  5. Pourquoi un assistant IA ne peut-il pas dire seul si votre idée est bonne ? — A) Il ne comprend pas le français B) Il refuse les questions sur le commerce C) Il ne répond qu'en anglais D) Il ne connaît ni vos clients ni votre quartier — **Réponse : D**
- **Marques citées** : Gemini (Google), ChatGPT (OpenAI), Claude (Anthropic)

#### Script

Durée estimée : 6:05 · Mots dits : 724

**[B1 — Accroche · 0:00–0:28]**

**[E · SITUATION]** « Niamey, quartier Talladjé » — VO : Hadiza fait des jus de gingembre.
**[F · CAM A]** À la fin de cette leçon, vous saurez tester une idée auprès de vrais clients, avant d'investir. Hadiza rêve de livrer les bureaux du Plateau, chaque midi. Pour cela, elle doit acheter une glacière et cent bouteilles. Avant de dépenser, elle veut une preuve : les bureaux en veulent-ils vraiment ?

[PAUSE 1 s]

**[B2 — Cadrage · 0:28–1:05]**

**[F · CAM A]** Beaucoup d'entrepreneurs pensent qu'une bonne idée suffit. D'autres demandent à l'IA si leur idée est bonne. Essayons.
**[A · ÉCRAN]** Gemini, sur téléphone. Je tape : « Mon idée de livrer des jus aux bureaux est-elle bonne ? » La réponse m'encourage et ajoute quelques conseils. Un assistant va souvent dans votre sens. Et il ne connaît ni vos clients, ni votre quartier.
**[F · CAM A]** Seuls vos futurs clients peuvent juger votre idée. Et pas avec leurs paroles : avec leurs actes.

[PAUSE 1 s]

**[B3 — Notion · 1:05–3:15]**

**[B · CARTE]** « Unité 1 · Partir d'un problème, pas d'un produit » — VO : Premier principe : partez d'un problème, pas d'un produit.
**[F · CAM A]** Un client paie pour régler un problème qu'il a déjà. Le produit vient ensuite. À Zinder, Rahila est couturière. Ses clientes ne se plaignent pas de ses modèles. Elles se plaignent des tenues livrées en retard, la veille des fêtes. Son vrai service, c'est donc la date tenue. Pour Hadiza, le problème supposé : à midi, rien de frais près du bureau. C'est une hypothèse, c'est-à-dire une idée encore à vérifier.

**[B · CARTE]** « Unité 2 · Interroger sur le passé, pas sur l'avenir » — VO : Deuxième principe : interrogez sur le passé, pas sur l'avenir.
**[C · SCHÉMA]** « ✗ Vous achèteriez ? → ✓ Hier à midi, qu'avez-vous bu ? Où ? » — VO : À la question « Vous achèteriez ? », on vous répond souvent oui, par politesse. Demandez plutôt ce qui s'est passé la dernière fois. « Hier à midi, qu'avez-vous bu ? Où ? À qui l'avez-vous acheté ? » Le passé montre des habitudes ; l'avenir, seulement des intentions. Commencez par cinq entretiens de dix minutes.

**[B · CARTE]** « Unité 3 · Tester petit avant d'investir » — VO : Troisième principe : testez petit avant d'investir.
**[F · CAM B]** Un test, c'est une vente réelle, à petite échelle. Une précommande : le client réserve, et parfois paie, avant que vous produisiez. Ou un petit lot, vendu au marché un samedi. À Dosso, Souleymane a proposé la réparation à domicile pendant un mois, avant d'acheter une moto. Un compliment n'est pas un signal. Un vrai signal coûte quelque chose au client : de l'argent, du temps, un rendez-vous.

**[B · CARTE]** « Unité 4 · L'IA prépare, vous écoutez » — VO : Quatrième principe : l'IA prépare, vous écoutez.
**[A · ÉCRAN]** L'IA vous aide à deux moments. Avant : elle prépare vos questions. Après : elle trie vos notes et repère ce qui revient. Pour cela, vous lui donnez une consigne, ce qu'on appelle un « prompt » en anglais. Une consigne, c'est une demande écrite et précise, avec votre contexte. Une règle : jamais de nom ni de numéro de client dans une consigne. Écrivez « Client un », « Client deux ».

[PAUSE 1 s]

**[B4 — Application · 3:15–4:55]**

**[G · CONSIGNE]** « Consigne de Hadiza — texte complet dans la leçon » — VO : Voici la consigne de Hadiza. Elle est écrite dans le texte de la leçon. Hadiza utilise Gemini ; ChatGPT ou Claude feraient le même travail.
**[A · ÉCRAN]** Étape un : elle colle la consigne et décrit son idée en une phrase. Gemini propose cinq questions sur les habitudes de midi. Hadiza les relit une par une. Elle en remplace une par sa propre question : « Hier, qu'avez-vous bu à midi, et où ? » Étape deux : elle mène ses cinq entretiens, à l'heure du déjeuner. Ses notes sont écrites à la main, sans aucun nom. Étape trois : elle tape ses notes, de « Client un » à « Client cinq ». Elle demande : quels problèmes reviennent, avec quels mots ? Gemini dresse un tableau : problème, solution actuelle, signal d'achat. Quatre clients sur cinq citent le même manque : une boisson fraîche et propre. Deux achètent déjà des sachets au vendeur ambulant. Étape quatre : elle demande un test simple, faisable en une semaine. Gemini suggère une précommande. Hadiza fixe elle-même le nombre et la date : vingt bouteilles, livrées mardi à midi. Résultat à l'écran : un tableau clair, et un test daté.

[PAUSE 1 s]

**[B5 — Consolidation · 4:55–5:35]**

**[F · CAM A]** À Maradi, Moussa tient une boutique de quartier. Il veut vendre du pain frais. Il demande à dix voisins : « Vous achèteriez du pain chez moi ? » Les dix répondent oui. Il commande soixante pains pour le lundi. Combien en vend-il, à votre avis ?
[SILENCE 2 s]
**[C · SCHÉMA]** « 10 « oui » → 60 pains → 12 vendus » — VO : Douze. Ses voisins ont été polis. Mais ils achètent déjà leur pain à la boulangerie, sur la route du travail. La bonne question était : « Hier, où avez-vous acheté votre pain ? » Moussa a payé cher une simple politesse.

[PAUSE 1 s]

**[B6 — Clôture · 5:35–6:05]**

**[B · CARTE DE RAPPEL]** « 1. Tester une idée auprès de vrais clients, avant d'investir » « 2. Demander des faits passés, pas des promesses » « 3. Un vrai signal coûte quelque chose au client » « 4. Jamais de nom ni de numéro dans une consigne » — VO : Retenez quatre points. Tester une idée auprès de vrais clients, avant d'investir. Demander des faits passés, pas des promesses. Un vrai signal coûte quelque chose au client. Et jamais de nom ni de numéro dans une consigne.
**[F · CAM A]** Et Hadiza ? Ses vingt bouteilles sont parties avant mardi midi. Trois bureaux en veulent déjà pour la semaine suivante. Maintenant, à vous. Menez cinq entretiens clients cette semaine.

#### Liste des plans

| # | Type | Cadre / source | Contenu | Durée | Notes |
|---|---|---|---|---|---|
| 1 | E | photo de mise en scène ou illustration | Hadiza devant sa porte, glacière de jus ; surtitre « Niamey, quartier Talladjé » | 5 s | autorisation écrite si personne réelle ; aucune marque visible |
| 2 | F | CAM A, plan poitrine | B1 : promesse puis enjeu (glacière, cent bouteilles) | 23 s | promesse terminée avant 0:12 |
| 3 | F | CAM A | B2 : « une bonne idée suffit ? », avant et après la capture | 17 s | deux parties, même axe |
| 4 | A | capture téléphone, Gemini | question « Mon idée… est-elle bonne ? » et réponse réelle | 19 s | réponse non retouchée ; cadre sur la phrase encourageante |
| 5 | B | cartes-titres | quatre cartes d'unité (4 × 4 s) | 16 s | une emphase par carte |
| 6 | F | CAM A, coupes CAM B | U1 : le problème avant le produit ; Rahila (Zinder) ; hypothèse de Hadiza | 34 s | changer d'angle toutes les 2 ou 3 phrases |
| 7 | C | schéma animé | U2 : question sur l'avenir barrée → question sur hier cochée | 24 s | croix et coche, jamais la couleur seule |
| 8 | F | CAM B | U3 : précommande, petit lot, Souleymane (Dosso), vrai signal | 25 s | insert possible : main qui tend des billets |
| 9 | A | capture téléphone, Gemini | U4 : consigne avec notes « Client 1 », « Client 2 » | 29 s | aucune donnée réelle |
| 10 | G | carte de consigne | consigne de la leçon (version écran abrégée) | 12 s | texte complet dans la leçon |
| 11 | A | capture téléphone, Gemini | B4 : questions → question remplacée → notes → tableau → test | 86 s | notes fictives de la fiche ; annotations une à la fois |
| 12 | F | CAM A | B5 : Moussa, dix « oui », soixante pains, question | 23 s | silence de 2 s inclus, regard caméra tenu |
| 13 | C | schéma animé | B5 : 10 « oui » → 60 pains → 12 vendus ; la bonne question | 18 s | pictogrammes de pain, chiffres à l'écran |
| 14 | B | carte de rappel | quatre points révélés au rythme de la voix | 18 s | gabarit sans sous-titre |
| 15 | F | CAM A | B6 : lot écoulé, trois bureaux ; titre de l'exercice | 14 s | dernière phrase = titre de l'exercice |

#### Montage idéal

| Temps | Timecode cible | Image principale | Habillage (motion graphics) | Texte à l'écran | Son | Transition |
|---|---|---|---|---|---|---|
| B1 | 0:00–0:28 | E puis F CAM A | surtitre de lieu ; filigrane dès le premier plan | « Niamey, quartier Talladjé » ; bandeau « Tester une idée avant d'investir » | voix seule | coupe |
| B2 | 0:28–1:05 | F CAM A → A Gemini → F CAM A | cadre sur la réponse de l'IA | question tapée, retapée en surimpression | voix seule | coupe |
| B3 | 1:05–3:15 | cartes d'unité, F (A et B), C, A | schéma « avenir ✗ / passé ✓ » ; cadre sur « Client 1 » | titres d'unité ; « Hier à midi, qu'avez-vous bu ? » | voix seule | coupe ; une seule transition plein cadre, à l'entrée de B3 |
| B4 | 3:15–4:55 | G puis A Gemini | numéros d'étape 1 à 4 ; cadre sur la question remplacée, puis sur le tableau | « Étape 1 » … « Étape 4 » ; « 20 bouteilles · mardi midi » | voix seule ; respiration de 1 s après le tableau | coupe |
| B5 | 4:55–5:35 | F CAM A puis C | compteur 10 → 60 → 12 | « Hier, où avez-vous acheté votre pain ? » | voix, silence 2 s, voix | coupe sèche après le silence |
| B6 | 5:35–6:05 | B carte de rappel puis F CAM A | points révélés au rythme de la voix ; mentions légales 3 s après la dernière phrase (Partie 1) | quatre points ; titre de l'exercice | voix seule | coupe vers les mentions, puis carte de clôture |

**Notes de montage** : changer d'image toutes les 4 à 8 s (alternance CAM A / CAM B, recadrage 4K en coupe franche), sans effet. Couper hésitations et redites ; garder une respiration après la promesse et après le tableau de B4. Zooms sur capture limités à 6 %, une annotation à la fois (cadre, coche ou croix). Pendant les captures, le téléphone reste au-dessus de la zone des sous-titres et seules les lignes utiles sont recadrées. Plans de couverture disponibles : cahier de notes d'entretien, mains sur le téléphone, bouteilles alignées.

#### Versions EN / HA / DJE

- **À re-filmer dans la langue** (≈ 36 s, l'owner face caméra) : B1 `[F · CAM A]` (≈ 22 s) — « À la fin de cette leçon, vous saurez tester une idée auprès de vrais clients, avant d'investir. Hadiza rêve de livrer les bureaux du Plateau, chaque midi. Pour cela, elle doit acheter une glacière et cent bouteilles. Avant de dépenser, elle veut une preuve : les bureaux en veulent-ils vraiment ? » ; B6 `[F · CAM A]` (≈ 14 s) — « Et Hadiza ? Ses vingt bouteilles sont parties avant mardi midi. Trois bureaux en veulent déjà pour la semaine suivante. Maintenant, à vous. Menez cinq entretiens clients cette semaine. »
- **Doublé en voix clonée** : B2 `[F · CAM A]` (deux parties) → capture Gemini prolongée, puis carte « Seuls vos clients jugent votre idée » ; U1 `[F · CAM A]` → illustrations de Rahila (atelier, tenues de fête) et carte « Problème → produit » ; U3 `[F · CAM B]` → inserts (cahier de précommandes, bouteilles, main qui paie) ; B5 `[F · CAM A]` → illustration de la boutique de Moussa et compteur du schéma.
- **Notes d'adaptation** : EN : garder le mot anglais d'origine à la place de « consigne », sans glose ; HA et DJE : rendre « consigne » par l'équivalent local d'« instruction écrite », à valider par le relecteur natif. La question « Vous achèteriez ? » doit rester une question polie sur l'avenir dans chaque langue. « Vendeur ambulant », « sachet », « boulangerie » : réalités communes au Niger, à garder. Plateau et Talladjé ne se traduisent pas ; montants absents de cette leçon.

### Leçon 2 — L'étude de marché express, sans chiffres inventés (`bz2`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez faire une étude de marché express, avec des sources vérifiées. »
- **Cas réel (B1 → B6)** : Avec vingt bouteilles déjà prévendues, Hadiza veut savoir qui sert aujourd'hui les employés du Plateau, à quel prix, avec quels défauts, et quelles règles encadrent la vente d'une boisson en bouteille à Niamey. Elle relève dans un carnet les prix de quatre vendeurs (A à D), fait comparer ses notes par l'IA, lui fait chercher les règles avec leurs sources, ouvre chaque lien et trie ce qui est sûr, supposé ou à vérifier. En B6, sa place est claire : personne ne livre les bureaux en bouteille fermée ; une règle reste à confirmer à la mairie.
- **Unités de notion (B3)** : 1. Trois questions : qui, où, combien — votre marché, c'est votre zone et les clients que vous pouvez servir · 2. Le terrain d'abord : relever les prix — visiter, noter, compter les clients d'un concurrent pendant une heure · 3. L'IA cherche, vous vérifiez la source — organisme, date, lien, sinon le chiffre ne compte pas · 4. Estimer avec des hypothèses écrites — un calcul simple dont chaque nombre est une supposition à vérifier.
- **Démo (B4)** : Gemini avec recherche web (application, compte « Karatou Démo »), puis navigateur. 1. Coller la consigne avec les notes de terrain fictives (ci-dessous). 2. Obtenir le tableau comparatif des quatre vendeurs. 3. Demander les règles et autorisations pour vendre une boisson en bouteille à Niamey, avec organisme, date et lien de chaque source. 4. Ouvrir chaque lien ; écarter ce qui est ancien, sans auteur ou hors sujet ; garder les pages officielles datées ; noter « À confirmer auprès de la mairie » quand les sources manquent ou divergent. 5. Ajouter l'estimation (six bureaux, vingt employés, un sur quatre, deux fois par semaine : soixante bouteilles, hypothèses écrites). 6. Demander la fiche finale en trois parties. Résultat attendu à l'écran : le tableau, puis la fiche « Ce que je sais (avec sources) / Ce que je suppose / Ce que je dois vérifier ». Notes fictives à saisir (montants fictifs) : « Vendeur A — ambulant, Plateau : bissap et gingembre en sachet, 100 F ; 11 h–14 h ; frais le matin, tiède l'après-midi ; pas de livraison. Vendeur B — kiosque près d'un ministère : jus local en bouteilles réutilisées, 300 F ; propreté moyenne ; pas de livraison. Vendeur C — supérette : jus industriels, de 500 à 1 000 F ; propre, cher ; pas de livraison. Vendeur D — vendeuse du Petit Marché : gingembre en bouteille, 250 F ; très bon goût ; loin des bureaux ; pas de livraison. » [à vérifier au moment du tournage : affichage des sources dans Gemini ; s'il est peu lisible, faire l'étape 3 dans le Mode IA de Google. Adapter la voix off des étapes 3 et 4 aux sources réellement obtenues, sans jamais présenter une règle non confirmée comme acquise.]
- **Consolidation (B5)** : prédiction. Un assistant donne, sans aucun lien, le nombre de litres de jus bus chaque jour à Niamey : que faire de ce chiffre ? Réponse : ne pas l'utiliser ; demander la source ; à défaut, écrire « inconnu » et faire sa propre estimation avec des hypothèses écrites.
- **Consigne à copier** :

```text
Tu es un conseiller en étude de marché pour les petits commerces au Niger.
Mon activité : [produit ou service], à [ville, quartier].
Mes clients visés : [qui, où, quand].
Mes notes de terrain, concurrents nommés A, B, C… (aucun nom réel) : [prix, format, horaires, points forts, points faibles].

1. Fais un tableau comparatif des concurrents à partir de mes notes. N'invente rien : si une information manque, écris « inconnu ».
2. Cherche sur le web [votre question : règles ou autorisations pour vendre mon produit à ma ville, saison de forte demande, fournisseurs…]. Pour chaque source, donne l'organisme, la date et le lien.
3. Ne donne aucun chiffre sans source. Si tu n'en trouves pas, dis-le.
4. Termine par une fiche en 3 parties : ce que je sais (avec sources), ce que je suppose, ce que je dois vérifier sur le terrain.
Réponds en français simple.
```

- **Exercice** : « Comparez trois concurrents et vérifiez deux sources » — 1. Visitez au moins trois concurrents ; notez prix, format, horaires, points forts et points faibles ; comptez pendant une heure les clients de l'un d'eux. 2. Avec la consigne, faites dresser le tableau comparatif et posez une question de recherche utile (règle, saison, fournisseur), sources exigées. 3. Ouvrez au moins deux sources : notez l'organisme, la date et ce que vous gardez. 4. Rédigez votre fiche « je sais / je suppose / je vérifie » et une estimation avec ses hypothèses écrites.
- **Carte de rappel** : 1. Faire une étude de marché express, avec des sources vérifiées 2. Relever prix et clients chez trois concurrents 3. Pas de source, pas de chiffre 4. Estimer avec des hypothèses écrites
- **Quiz** :
  1. Pour un petit commerce, une étude de marché express répond d'abord à quoi ? — A) À la taille du marché mondial B) Qui achète, où et quand, et combien C) Au nombre d'habitants du pays D) Aux tendances des réseaux sociaux — **Réponse : B**
  2. Ibrahim veut connaître ses concurrents. Que fait-il en premier ? — A) Il demande un rapport complet à l'IA B) Il copie des prix trouvés sur internet C) Il relève prix et clients chez des restaurants voisins D) Il attend la fin du mois — **Réponse : C**
  3. Un assistant vous donne un chiffre précis, sans aucun lien. Que faites-vous ? — A) Vous demandez la source ; sans source, vous écrivez « inconnu » B) Vous l'utilisez s'il paraît logique C) Vous l'arrondissez D) Vous le mettez dans votre dossier — **Réponse : A**
  4. Six bureaux de vingt employés ; un employé sur quatre achète deux fois par semaine. Combien de bouteilles par semaine ? — A) 30 B) 40 C) 120 D) 60 — **Réponse : D**
  5. Quelle source gardez-vous en priorité ? — A) Un message transféré sur WhatsApp B) Une page officielle datée, d'un organisme connu C) Un article sans date ni auteur D) Une réponse de l'IA sans lien — **Réponse : B**
- **Marques citées** : Gemini, Mode IA de Google Search (Google), ChatGPT (OpenAI), Claude (Anthropic), WhatsApp (quiz)

#### Script

Durée estimée : 5:55 · Mots dits : 694

**[B1 — Accroche · 0:00–0:28]**

**[E · SITUATION]** « Niamey, Petit Marché » — VO : Hadiza a déjà prévendu vingt bouteilles.
**[F · CAM A]** À la fin de cette leçon, vous saurez faire une étude de marché express, avec des sources vérifiées. Hadiza veut maintenant savoir qui vend déjà des jus près des bureaux. À quel prix ? Avec quels défauts ? Et quelles règles faut-il respecter pour vendre une boisson en bouteille ?

[PAUSE 1 s]

**[B2 — Cadrage · 0:28–1:00]**

**[F · CAM A]** Une étude de marché fait peur. On imagine un rapport épais, plein de graphiques et de chiffres géants. Pour un petit commerce, c'est plus simple : trois questions, posées dans votre zone. Et attention : l'IA peut inventer un chiffre, avec un ton très sûr.
**[F · CAM B]** Voici le carnet de terrain de Hadiza : quatre vendeurs, leurs prix, leurs horaires.
**[F · CAM A]** Ce carnet vaut plus qu'un chiffre trouvé au hasard sur internet.

[PAUSE 1 s]

**[B3 — Notion · 1:00–3:12]**

**[B · CARTE]** « Unité 1 · Trois questions : qui, où, combien » — VO : Premier outil : trois questions.
**[C · SCHÉMA]** « Qui achète ? · Où et quand ? · Combien, et à qui ? » — VO : Qui achète ? Des employés de bureau, des élèves, des familles ? Où et quand ? Au bureau à midi, au marché le soir ? Combien paient-ils aujourd'hui, et à qui ? Votre marché, c'est votre zone de vente, pas tout le pays. Autrement dit : les clients que vous pouvez vraiment servir.

**[B · CARTE]** « Unité 2 · Le terrain d'abord : relever les prix » — VO : Deuxième outil : le terrain d'abord.
**[F · CAM A]** À Tahoua, Ibrahim tient un petit restaurant près de la gare routière. Avant de changer ses menus, il a visité quatre restaurants voisins. Il a noté les prix, les plats, l'attente, la propreté. Il a aussi compté les clients d'un concurrent, de midi à treize heures. Cela s'appelle un relevé de prix, puis un comptage. Une heure d'observation en dit beaucoup sur un marché.

**[B · CARTE]** « Unité 3 · L'IA cherche, vous vérifiez la source » — VO : Troisième outil : l'IA cherche, vous vérifiez.
**[A · ÉCRAN]** Certains assistants cherchent sur internet et citent leurs sources. Par exemple Gemini, ChatGPT, Claude, ou le Mode IA de Google. Une source, c'est une page qui existe : un organisme, une date, un lien. Ouvrez au moins deux liens, et lisez la date. Préférez les sources officielles : Institut national de la statistique, mairie, chambre de commerce. Un chiffre sans source n'est pas une information. C'est peut-être une hallucination : une réponse fausse, donnée avec assurance.

**[B · CARTE]** « Unité 4 · Estimer avec des hypothèses écrites » — VO : Quatrième outil : une estimation honnête.
**[F · CAM A]** Souvent, personne n'a publié le chiffre dont vous avez besoin. Alors, estimez vous-même, et écrivez chaque hypothèse.
**[C · SCHÉMA]** « 6 bureaux × 20 employés × 1 sur 4 × 2 fois = 60 bouteilles par semaine · exemple fictif » — VO : Exemple fictif : six bureaux, vingt employés chacun. Si un employé sur quatre achète deux fois par semaine, cela fait soixante bouteilles par semaine. Chaque nombre de ce calcul est une supposition, à vérifier sur le terrain.

[PAUSE 1 s]

**[B4 — Application · 3:12–4:45]**

**[G · CONSIGNE]** « Consigne de Hadiza — texte complet dans la leçon » — VO : Voici la consigne. Elle est dans le texte de la leçon.
**[A · ÉCRAN]** Étape un : Hadiza colle sa consigne dans Gemini, avec ses notes de terrain. Les vendeurs y sont nommés A, B, C et D : aucun nom réel. Étape deux : Gemini dresse un tableau des quatre concurrents. Prix, format, horaires, points forts, points faibles. Une ligne saute aux yeux : aucun ne livre les bureaux. Étape trois : elle demande quelles règles s'appliquent pour vendre une boisson en bouteille à Niamey. Elle exige l'organisme, la date et le lien de chaque source. Gemini répond et liste ses sources. Étape quatre : Hadiza ouvre chaque lien. Une page ancienne, sans auteur : elle l'écarte. Une page officielle et datée : elle la garde. Sur un point, les sources ne suffisent pas. Elle écrit : « À confirmer auprès de la mairie. » Étape cinq : elle ajoute son estimation, hypothèses comprises. Puis elle demande une fiche en trois parties. Ce que je sais, avec sources. Ce que je suppose. Ce que je dois vérifier. Résultat : une étude courte, honnête, et une liste de vérifications.

[PAUSE 1 s]

**[B5 — Consolidation · 4:45–5:26]**

**[F · CAM A]** Faisons un test. Vous demandez à un assistant : « Combien de litres de jus se boivent chaque jour à Niamey ? » Il répond un chiffre précis, sans aucun lien. Que faites-vous de ce chiffre ?
[SILENCE 2 s]
**[C · SCHÉMA]** « Chiffre sans source → « inconnu » → estimation avec hypothèses » — VO : Vous ne l'utilisez pas. Vous demandez d'abord la source. S'il n'y en a pas, vous écrivez « inconnu ». Puis vous faites votre propre estimation, avec vos hypothèses. Un partenaire sérieux préfère un petit chiffre expliqué à un grand chiffre inventé. Et une décision prise sur un faux chiffre coûte cher.

[PAUSE 1 s]

**[B6 — Clôture · 5:26–5:55]**

**[B · CARTE DE RAPPEL]** « 1. Faire une étude de marché express, avec des sources vérifiées » « 2. Relever prix et clients chez trois concurrents » « 3. Pas de source, pas de chiffre » « 4. Estimer avec des hypothèses écrites » — VO : Retenez quatre points. Faire une étude de marché express, avec des sources vérifiées. Relever prix et clients chez trois concurrents. Pas de source, pas de chiffre. Estimer avec des hypothèses écrites.
**[F · CAM A]** Hadiza a trouvé sa place : la livraison aux bureaux, en bouteille fermée. Il lui reste à vérifier une règle à la mairie. À vous maintenant. Comparez trois concurrents et vérifiez deux sources.

#### Liste des plans

| # | Type | Cadre / source | Contenu | Durée | Notes |
|---|---|---|---|---|---|
| 1 | E | photo ou illustration | étals de boissons au Petit Marché ; surtitre « Niamey, Petit Marché » | 5 s | aucun visage reconnaissable sans autorisation ; aucune marque |
| 2 | F | CAM A | B1 : promesse, puis les questions de Hadiza | 23 s | promesse terminée avant 0:12 |
| 3 | F | CAM A, insert CAM B | B2 : la peur de l'étude de marché ; carnet de terrain de Hadiza | 32 s | insert en vue de dessus, montants fictifs lisibles |
| 4 | B | cartes-titres | quatre cartes d'unité (4 × 4 s) | 16 s | une emphase par carte |
| 5 | C | schéma animé | U1 : qui ? où et quand ? combien, et à qui ? | 24 s | trois pictogrammes révélés un à un |
| 6 | F | CAM A, coupes CAM B | U2 : Ibrahim (Tahoua), relevé de prix et comptage | 30 s | couverture possible : illustration de la gare routière |
| 7 | A | capture téléphone, assistant avec sources | U3 : réponse avec sources ; organisme, date, lien | 37 s | cadre sur une source ; option : capture du Mode IA de Google |
| 8 | F | CAM A | U4 : estimer soi-même, écrire ses hypothèses | 10 s | — |
| 9 | C | schéma animé | U4 : 6 × 20 × 1/4 × 2 = 60 bouteilles par semaine | 15 s | « exemple fictif » affiché |
| 10 | G | carte de consigne | consigne de la leçon (version écran abrégée) | 8 s | texte complet dans la leçon |
| 11 | A | capture téléphone, Gemini puis navigateur | B4 : tableau → règles et sources → liens ouverts → fiche en trois parties | 85 s | notes fictives de la fiche ; une annotation à la fois |
| 12 | F | CAM A | B5 : la question du chiffre sans lien | 18 s | silence de 2 s inclus |
| 13 | C | schéma animé | B5 : chiffre isolé barré → « inconnu » → estimation cochée | 23 s | croix et coche doublent la couleur |
| 14 | B | carte de rappel | quatre points révélés au rythme de la voix | 14 s | gabarit sans sous-titre |
| 15 | F | CAM A | B6 : la place de Hadiza ; titre de l'exercice | 15 s | dernière phrase = titre de l'exercice |

#### Montage idéal

| Temps | Timecode cible | Image principale | Habillage (motion graphics) | Texte à l'écran | Son | Transition |
|---|---|---|---|---|---|---|
| B1 | 0:00–0:28 | E puis F CAM A | surtitre de lieu ; filigrane | « Niamey, Petit Marché » ; bandeau « Étude de marché express » | voix seule | coupe |
| B2 | 0:28–1:00 | F CAM A, insert carnet, F CAM A | cadre sur une ligne du carnet | « 4 vendeurs · prix · horaires » | voix seule | coupe |
| B3 | 1:00–3:12 | cartes, C, F, A, C | trois questions ; cadre sur une source ; calcul posé ligne à ligne | titres d'unité ; « Organisme · date · lien » ; « exemple fictif » | voix seule | coupe ; une transition plein cadre à l'entrée de B3 |
| B4 | 3:12–4:45 | G puis A Gemini et navigateur | numéros d'étape 1 à 5 ; croix sur la page écartée, coche sur la page gardée | « Je sais · Je suppose · Je vérifie » | voix seule ; respiration de 1 s sur la fiche finale | coupe |
| B5 | 4:45–5:26 | F CAM A puis C | chiffre isolé qui se barre | « Pas de source → « inconnu » » | voix, silence 2 s, voix | coupe sèche après le silence |
| B6 | 5:26–5:55 | B carte de rappel puis F CAM A | points révélés au rythme de la voix ; mentions légales 3 s (Partie 1) | quatre points ; titre de l'exercice | voix seule | coupe vers les mentions, puis carte de clôture |

**Notes de montage** : rythme de 4 à 8 s par image, sans agitation ; l'insert du carnet tient au moins 3 s pour être lu. Couper redites et hésitations, garder la respiration après « Une ligne saute aux yeux ». Sur les captures de sources, recadrer sur l'organisme et la date (zoom ≤ 6 %) ; masquer toute donnée de compte du navigateur. Quand la capture occupe le bas de l'écran, la remonter au-dessus de la zone des sous-titres plutôt que de déplacer ceux-ci. Plans de couverture : carnet, étals du marché, mains qui notent un prix.

#### Versions EN / HA / DJE

- **À re-filmer dans la langue** (≈ 38 s, l'owner face caméra) : B1 `[F · CAM A]` (≈ 23 s) — « À la fin de cette leçon, vous saurez faire une étude de marché express, avec des sources vérifiées. Hadiza veut maintenant savoir qui vend déjà des jus près des bureaux. À quel prix ? Avec quels défauts ? Et quelles règles faut-il respecter pour vendre une boisson en bouteille ? » ; B6 `[F · CAM A]` (≈ 15 s) — « Hadiza a trouvé sa place : la livraison aux bureaux, en bouteille fermée. Il lui reste à vérifier une règle à la mairie. À vous maintenant. Comparez trois concurrents et vérifiez deux sources. »
- **Doublé en voix clonée** : B2 `[F · CAM A]` → carte « Un rapport épais ? Non : trois questions » puis insert du carnet ; U2 `[F · CAM A]` → illustration du restaurant d'Ibrahim près de la gare routière et carte « Relevé de prix · comptage » ; U4 `[F · CAM A]` → schéma du calcul affiché plus tôt ; B5 `[F · CAM A]` → carte reprenant la question posée à l'assistant.
- **Notes d'adaptation** : EN : « hallucination » sans glose, « CFA francs », « Google AI Mode », « National Institute of Statistics (INS) ». HA : le Mode IA de Google accepte le haoussa depuis 2026 au Nigeria [à vérifier au moment du tournage : disponibilité en haoussa au Niger]. HA et DJE : expliquer « hallucination » par la périphrase (« réponse fausse, donnée avec assurance ») plutôt que par un mot isolé. « Petit Marché », « gare routière », « Plateau » ne se traduisent pas.

### Leçon 3 — Votre projet sur une page, chiffres compris (`bz3`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez résumer et chiffrer votre projet sur une seule page. »
- **Cas réel (B1 → B6)** : Pour produire davantage, Hadiza a besoin d'un congélateur et sollicite un petit crédit auprès d'une agence de microfinance de Niamey. L'agente veut voir le projet résumé sur une page, chiffres compris. Hadiza fait rédiger par l'IA une page en neuf cases à partir de ses entretiens et de son relevé de concurrents, calcule coût de revient, marge et seuil (montants fictifs), vérifie chaque opération à la calculatrice et s'entraîne avec l'IA dans le rôle de l'agent de crédit. En B6, au rendez-vous, elle répond sans hésiter et repart avec la liste des pièces à fournir : le point de départ du projet final.
- **Unités de notion (B3)** : 1. Neuf cases sur une page — clients, problème, offre, prix, canaux, ressources, coûts, revenus, hypothèses à vérifier · 2. Le coût de revient d'une unité — tout ce qu'une bouteille coûte, étiquette et livraison comprises · 3. Le seuil : combien vendre par mois — charges fixes divisées par la marge par unité · 4. L'IA rédige et questionne, vous décidez — elle met en forme et joue l'agent de crédit ; vous refaites les calculs.
- **Démo (B4)** : Gemini (compte « Karatou Démo »), calculatrice du téléphone, Google Docs. 1. Coller la consigne avec la synthèse des entretiens (L1), le tableau des concurrents (L2) et les coûts fictifs. 2. Obtenir les neuf cases ; corriger « Clients » (« les bureaux du Plateau », pas « tout Niamey ») ; vérifier « Canaux » (commandes sur WhatsApp, livraison à moto). 3. Demander coût de revient, marge et seuil, opérations détaillées. 4. Refaire les calculs à la calculatrice. 5. Lancer le rôle d'agent de crédit (cinq questions) ; taper les réponses ; ajouter aux hypothèses la question restée sans réponse. 6. Copier la page dans Google Docs, la relire, l'enregistrer en PDF. Données fictives : gingembre 120, sucre 40, eau et arômes 20, bouteille 70, étiquette 20, livraison 30, soit 300 FCFA par bouteille ; prix 500 FCFA ; marge 200 FCFA ; charges fixes 40 000 FCFA par mois (téléphone et internet 10 000, entretien de la moto 15 000, remboursement du congélateur 15 000) ; seuil 200 bouteilles par mois. Résultat attendu à l'écran : la page en neuf cases dans Google Docs et le PDF. [à vérifier au moment du tournage : questions réellement posées par Gemini ; si un calcul de Gemini est faux, le montrer et le corriger à l'écran plutôt que refaire la prise.]
- **Consolidation (B5)** : prédiction. Souleymane, réparateur de téléphones à Dosso, copie le prix de son voisin (15 000 FCFA l'écran, exemple fictif) alors que l'écran lui coûte 13 000 et le transport 2 500. Gagne-t-il de l'argent ? Réponse : non, il perd 500 FCFA par réparation, sans compter son temps ; un prix se fixe à partir de son coût de revient.
- **Consigne à copier** :

```text
Tu es un conseiller en création d'entreprise au Niger.
Voici mes notes : [collez la synthèse de vos entretiens, votre tableau des concurrents et vos coûts — sans nom ni numéro de client].

1. Remplis une page de projet en 9 cases : clients, problème, offre, prix, canaux, ressources, coûts, revenus, hypothèses à vérifier.
2. Calcule en montrant chaque opération : le coût de revient d'une unité, la marge par unité, le seuil (charges fixes ÷ marge par unité).
3. Joue ensuite un agent de crédit exigeant : pose-moi 5 questions difficiles sur ce projet, une par une, et attends ma réponse à chacune.
Si une information manque, écris « à compléter » au lieu d'inventer.
```

- **Exercice** : « Remplissez votre page de projet » — 1. Rassemblez vos notes des leçons 1 et 2. 2. Avec la consigne, faites remplir les neuf cases, puis réécrivez chaque case avec vos propres mots. 3. Calculez coût de revient, marge et seuil, et refaites chaque calcul à la calculatrice. 4. Faites-vous poser cinq questions difficiles ; ajoutez aux hypothèses ce que vous ne savez pas encore. Enregistrez la page : c'est la pièce 1 du projet final.
- **Carte de rappel** : 1. Résumer et chiffrer votre projet sur une seule page 2. Coût de revient : tout ce qu'une unité coûte 3. Seuil = charges fixes ÷ marge par unité 4. Refaire soi-même chaque calcul de l'IA
- **Quiz** :
  1. Que contient la page du projet présentée dans cette leçon ? — A) Quarante pages de texte B) Neuf cases, dont les hypothèses à vérifier C) Uniquement les prix D) Le logo et les couleurs — **Réponse : B**
  2. Le coût de revient d'une bouteille comprend… — A) Seulement les ingrédients B) Seulement la bouteille vide C) Tout ce qu'elle coûte : ingrédients, emballage, étiquette, livraison D) Son prix de vente — **Réponse : C**
  3. Charges fixes : 40 000 FCFA par mois ; marge : 200 FCFA par bouteille (exemple fictif). Quel est le seuil ? — A) 2 000 bouteilles B) 20 bouteilles C) 400 bouteilles D) 200 bouteilles — **Réponse : D**
  4. L'IA calcule votre marge. Que faites-vous ? — A) Vous refaites le calcul vous-même B) Vous recopiez le résultat C) Vous demandez seulement à une autre IA D) Vous arrondissez le résultat — **Réponse : A**
  5. Souleymane copie le prix de son voisin sans calculer son coût. Quel est le risque ? — A) Aucun : le voisin connaît le marché B) Vendre à perte sans le savoir C) Avoir trop de clients D) Payer moins cher ses pièces — **Réponse : B**
- **Marques citées** : Gemini, Google Docs (Google), WhatsApp (Meta), Business Model Canvas (Strategyzer, mention à l'écran)

#### Script

Durée estimée : 5:59 · Mots dits : 696

**[B1 — Accroche · 0:00–0:27]**

**[E · SITUATION]** « Niamey, une agence de microfinance » — VO : Hadiza sait : personne ne livre les bureaux.
**[F · CAM A]** À la fin de cette leçon, vous saurez résumer et chiffrer votre projet sur une seule page. Hadiza veut un congélateur pour produire davantage. Elle demande un petit crédit à une agence de microfinance. L'agente lui répond : « Montrez-moi votre projet sur une page, avec vos chiffres. »

[PAUSE 1 s]

**[B2 — Cadrage · 0:27–1:00]**

**[F · CAM A]** On croit souvent qu'il faut un business plan de quarante pages. Business plan, en français : plan d'affaires. Pour démarrer, une page claire vaut mieux. Et un long document écrit par l'IA ne prouve rien. Ce qui compte : des chiffres que vous savez expliquer.
**[A · ÉCRAN]** Voici la page de Hadiza, dans Google Docs : neuf cases, une seule page. Chaque case répond à une question simple.

[PAUSE 1 s]

**[B3 — Notion · 1:00–3:10]**

**[B · CARTE]** « Unité 1 · Neuf cases sur une page » — VO : Premier outil : la page du projet.
**[C · SCHÉMA]** « Clients · Problème · Offre · Prix · Canaux · Ressources · Coûts · Revenus · Hypothèses à vérifier — inspiré du Business Model Canvas » — VO : Neuf cases. Vos clients, leur problème, votre offre, votre prix. Puis vos canaux, c'est-à-dire comment le client vous trouve et achète. Vos ressources, vos coûts, vos revenus. La neuvième case est la plus importante : les hypothèses à vérifier. Autrement dit, tout ce que vous croyez sans l'avoir encore prouvé.

**[B · CARTE]** « Unité 2 · Le coût de revient d'une unité » — VO : Deuxième outil : le coût de revient.
**[F · CAM A]** Le coût de revient, c'est tout ce qu'une unité vous coûte. Autrement dit : ce que vous dépensez pour fabriquer et livrer une bouteille. Les montants de Hadiza sont fictifs : remplacez-les par les vôtres.
**[C · SCHÉMA]** « Gingembre 120 · Sucre 40 · Eau et arômes 20 · Bouteille 70 · Étiquette 20 · Livraison 30 = 300 FCFA · Prix 500 · Marge 200 · exemple fictif » — VO : Gingembre, sucre, eau, bouteille, étiquette, livraison. Total : trois cents francs CFA par bouteille. Elle la vend cinq cents francs. Sa marge par bouteille : deux cents francs. Oublier la livraison ou l'étiquette, c'est vendre à perte sans le savoir.

**[B · CARTE]** « Unité 3 · Le seuil : combien vendre par mois » — VO : Troisième outil : le seuil de rentabilité.
**[F · CAM B]** Certains coûts ne bougent pas, même sans vente : ce sont les charges fixes. Téléphone, entretien de la moto, remboursement du congélateur. Pour Hadiza, toujours fictivement, quarante mille francs par mois. Le seuil, c'est le nombre de ventes qui couvre ces charges. Quarante mille divisé par deux cents : deux cents bouteilles par mois. En dessous, elle perd de l'argent ; au-dessus, elle en gagne.

**[B · CARTE]** « Unité 4 · L'IA rédige et questionne, vous décidez » — VO : Quatrième outil : l'IA rédige et questionne.
**[A · ÉCRAN]** L'IA transforme vos notes en page claire. Elle peut aussi jouer un rôle : l'agent de crédit exigeant. Ici, sa première question s'affiche à l'écran. Elle vous entraîne avant le vrai rendez-vous. Mais refaites chaque calcul vous-même, à la calculatrice. Une IA peut se tromper, même dans une simple division.

[PAUSE 1 s]

**[B4 — Application · 3:10–4:44]**

**[G · CONSIGNE]** « Consigne de Hadiza — texte complet dans la leçon » — VO : Voici la consigne, à recopier depuis le texte de la leçon.
**[A · ÉCRAN]** Étape un : Hadiza colle ses notes des deux leçons précédentes. Synthèse des entretiens, tableau des concurrents, coûts fictifs. Étape deux : Gemini remplit les neuf cases. Hadiza corrige la case « Clients » : les bureaux du Plateau, pas « tout Niamey ». La case « Canaux » indique : commandes sur WhatsApp, livraison à moto. Elle garde ce choix : ses clients utilisent déjà WhatsApp. Étape trois : elle demande le coût de revient, la marge et le seuil. Gemini affiche trois cents francs, deux cents francs, et deux cents bouteilles par mois. Elle vérifie à la calculatrice du téléphone : les calculs sont justes. Trois cents de coût, plus deux cents de marge : cinq cents, son prix de vente. Étape quatre : « Joue l'agent de crédit. Pose-moi cinq questions difficiles. » Hadiza tape ses réponses, une par une. À une question, elle n'a pas de réponse : elle l'ajoute aux hypothèses à vérifier. Étape cinq : elle copie la page dans Google Docs et la relit. Elle l'enregistre en PDF pour l'agence. Résultat : une page, neuf cases, trois chiffres qu'elle sait expliquer.

[PAUSE 1 s]

**[B5 — Consolidation · 4:44–5:25]**

**[F · CAM A]** À Dosso, Souleymane répare des téléphones. Pour fixer ses prix, il copie son voisin : quinze mille francs pour changer un écran. Montants fictifs, encore une fois. L'écran lui coûte treize mille francs. Le transport depuis Niamey, deux mille cinq cents. Gagne-t-il de l'argent sur chaque réparation ?
[SILENCE 2 s]
**[C · SCHÉMA]** « 15 000 − 13 000 − 2 500 = − 500 FCFA · exemple fictif » — VO : Non. Il perd cinq cents francs par écran, sans compter son temps. Son voisin achète peut-être ses pièces moins cher. Copier un prix sans connaître son coût de revient, c'est travailler pour perdre.

[PAUSE 1 s]

**[B6 — Clôture · 5:25–5:59]**

**[B · CARTE DE RAPPEL]** « 1. Résumer et chiffrer votre projet sur une seule page » « 2. Coût de revient : tout ce qu'une unité coûte » « 3. Seuil = charges fixes ÷ marge par unité » « 4. Refaire soi-même chaque calcul de l'IA » — VO : Retenez quatre points. Résumer et chiffrer votre projet sur une seule page. Coût de revient : tout ce qu'une unité coûte. Seuil : charges fixes divisées par la marge par unité. Refaire soi-même chaque calcul de l'IA.
**[F · CAM A]** À l'agence, Hadiza présente sa page. L'agente pose ses questions : Hadiza connaît déjà les réponses. Elle repart avec la liste des pièces à fournir. À votre tour. Remplissez votre page de projet.

#### Liste des plans

| # | Type | Cadre / source | Contenu | Durée | Notes |
|---|---|---|---|---|---|
| 1 | E | photo ou illustration | guichet d'une agence de microfinance ; surtitre « Niamey, une agence de microfinance » | 5 s | aucun logo d'établissement réel |
| 2 | F | CAM A | B1 : promesse et demande de l'agente ; B2 : « quarante pages ? » | 45 s | même axe ; promesse terminée avant 0:12 |
| 3 | A | capture téléphone, Google Docs | B2 : la page de Hadiza, neuf cases | 10 s | page produite en B4, capturée ensuite |
| 4 | B | cartes-titres | quatre cartes d'unité (4 × 4 s) | 16 s | une emphase par carte |
| 5 | C | schéma animé | U1 : les neuf cases ; mention « inspiré du Business Model Canvas » | 26 s | case « Hypothèses à vérifier » en emphase |
| 6 | F | CAM A | U2 : définition du coût de revient ; montants fictifs | 16 s | — |
| 7 | C | schéma animé | U2 : addition des coûts = 300 FCFA ; prix 500 ; marge 200 | 18 s | « exemple fictif » affiché en continu |
| 8 | F | CAM B | U3 : charges fixes, seuil de deux cents bouteilles | 29 s | insert possible : calculatrice |
| 9 | A | capture téléphone, Gemini | U4 : Gemini dans le rôle de l'agent de crédit | 21 s | question réelle, non retouchée |
| 10 | G | carte de consigne | consigne de la leçon (version écran abrégée) | 8 s | texte complet dans la leçon |
| 11 | A | captures Gemini, calculatrice, Google Docs | B4 : notes → neuf cases → calculs → vérification → questions → PDF | 86 s | données fictives de la fiche ; une annotation à la fois |
| 12 | F | CAM A | B5 : Souleymane copie le prix du voisin | 25 s | silence de 2 s inclus |
| 13 | C | schéma animé | B5 : 15 000 − 13 000 − 2 500 = − 500 FCFA | 16 s | « exemple fictif » ; signe moins en emphase |
| 14 | B | carte de rappel | quatre points révélés au rythme de la voix | 18 s | gabarit sans sous-titre |
| 15 | F | CAM A | B6 : le rendez-vous à l'agence ; titre de l'exercice | 16 s | dernière phrase = titre de l'exercice |

#### Montage idéal

| Temps | Timecode cible | Image principale | Habillage (motion graphics) | Texte à l'écran | Son | Transition |
|---|---|---|---|---|---|---|
| B1 | 0:00–0:27 | E puis F CAM A | surtitre de lieu ; filigrane | « Niamey, une agence de microfinance » ; bandeau « Votre projet sur une page » | voix seule | coupe |
| B2 | 0:27–1:00 | F CAM A puis A Google Docs | cadre sur la page entière | « 40 pages ? → 1 page claire » | voix seule | coupe |
| B3 | 1:00–3:10 | cartes, C, F A et B, A | grille des neuf cases ; addition posée ligne à ligne ; division du seuil | titres d'unité ; montants avec « exemple fictif » | voix seule | coupe ; une transition plein cadre à l'entrée de B3 |
| B4 | 3:10–4:44 | G puis A (Gemini, calculatrice, Docs) | numéros d'étape 1 à 5 ; coche sur chaque calcul vérifié | « 300 · 200 · 200 bouteilles/mois » | voix seule ; respiration de 1 s sur la page finale | coupe |
| B5 | 4:44–5:25 | F CAM A puis C | soustraction animée terme à terme | « − 500 FCFA par écran (exemple fictif) » | voix, silence 2 s, voix | coupe sèche après le silence |
| B6 | 5:25–5:59 | B carte de rappel puis F CAM A | points révélés au rythme de la voix ; mentions légales 3 s (Partie 1) | quatre points ; titre de l'exercice | voix seule | coupe vers les mentions, puis carte de clôture |

**Notes de montage** : un changement d'image toutes les 4 à 8 s ; les schémas de calcul se construisent terme à terme, au rythme de la voix, puis restent figés au moins 2,5 s. La mention « exemple fictif » reste visible tant qu'un montant est à l'écran. Couper redites et hésitations ; garder la respiration avant « Non. » en B5. Sur les captures, recadrer sur la case ou le calcul concerné (zoom ≤ 6 %), téléphone au-dessus de la zone des sous-titres. Plans de couverture : calculatrice, cahier de coûts, bouteilles et étiquettes.

#### Versions EN / HA / DJE

- **À re-filmer dans la langue** (≈ 38 s, l'owner face caméra) : B1 `[F · CAM A]` (≈ 22 s) — « À la fin de cette leçon, vous saurez résumer et chiffrer votre projet sur une seule page. Hadiza veut un congélateur pour produire davantage. Elle demande un petit crédit à une agence de microfinance. L'agente lui répond : « Montrez-moi votre projet sur une page, avec vos chiffres. » » ; B6 `[F · CAM A]` (≈ 16 s) — « À l'agence, Hadiza présente sa page. L'agente pose ses questions : Hadiza connaît déjà les réponses. Elle repart avec la liste des pièces à fournir. À votre tour. Remplissez votre page de projet. »
- **Doublé en voix clonée** : B2 `[F · CAM A]` → carte « 40 pages ? Non : 1 page claire », puis capture de la page ; U2 `[F · CAM A]` → schéma des coûts affiché plus tôt ; U3 `[F · CAM B]` → insert calculatrice et carte « Seuil = charges fixes ÷ marge » ; B5 `[F · CAM A]` → illustration de l'atelier de Souleymane et schéma de la soustraction.
- **Notes d'adaptation** : EN : « unit cost », « break-even point », « microfinance institution », « CFA francs » ; « business plan » sans glose. HA : pistes à valider par le relecteur natif, « riba » (bénéfice), « jari » (capital). DJE : termes de gestion à faire proposer par le relecteur natif. Les montants restent identiques dans les trois langues, toujours présentés comme fictifs. « Business Model Canvas » reste en anglais à l'écran.

### Leçon 4 — Vendre sur WhatsApp Business avec l'aide de l'IA (`bz4`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez préparer votre WhatsApp Business pour vendre, avec l'aide de l'IA. »
- **Cas réel (B1 → B6)** : Sa page de projet a désigné WhatsApp comme canal de vente, et Hadiza reçoit maintenant des commandes à toute heure : messages vocaux tard le soir, mêmes questions de prix, et une commande oubliée la semaine passée. Elle fait rédiger par l'IA la description de son profil, ses fiches produits, ses messages d'accueil et d'absence et trois réponses rapides, retire une promesse qu'elle ne pourrait pas tenir, configure WhatsApp Business et teste le parcours depuis un second téléphone. En B6, un client qui écrit à 23 h reçoit une réponse et trouve le catalogue ; au matin, sa commande attend, étiquetée.
- **Unités de notion (B3)** : 1. Un profil qui répond avant vous — nom, description, adresse, horaires, photo ; les horaires pilotent le message d'absence · 2. Le catalogue, une vitrine de poche — photo, nom, prix, description courte ; WhatsApp vérifie chaque article · 3. Accueil, absence, réponses rapides — messages automatiques, et textes enregistrés appelés par la barre oblique · 4. Une étiquette par étape de commande — nouvelle commande, payé, livré (« listes » sur les versions récentes).
- **Démo (B4)** : Gemini (compte « Karatou Démo »), WhatsApp Business sur la SIM de démonstration, téléphone « client ». 1. Coller la consigne remplie dans Gemini. 2. Relire les textes ; effacer toute promesse impossible (ex. « livraison en dix minutes ») ; demander une version en haoussa, affichée seulement après relecture par un locuteur natif. 3. Dans WhatsApp Business, onglet Outils : coller la description du profil ; ajouter un article au catalogue (photo, nom, prix, description) ; activer le message d'accueil et coller le texte ; créer la réponse rapide « livraison ». 4. Depuis le téléphone « client », écrire « Bonjour » : le message d'accueil arrive ; ouvrir le catalogue depuis le profil. 5. Côté Hadiza : taper « / », choisir « livraison », puis poser l'étiquette « Nouvelle commande ». Données fictives : « Jus de gingembre 50 cl — 500 FCFA », « Jus de bissap 50 cl — 500 FCFA », « Pack bureau, 10 bouteilles — 4 500 FCFA » ; horaires : lundi à vendredi, 8 h–17 h ; livraison au Plateau, commandes avant 10 h, livrées à midi ; paiement en espèces ou par paiement mobile à la livraison. Résultat attendu à l'écran : côté client, l'accueil reçu et le catalogue visible ; côté Hadiza, la réponse rapide envoyée et la discussion étiquetée. [à vérifier au moment du tournage : libellés exacts des menus en français (« Outils », « Profil d'entreprise », « Catalogue », « Message d'accueil », « Message d'absence », « Réponses rapides », « Étiquettes » ou « Listes ») ; créer l'article du catalogue la veille, car il passe par une vérification de WhatsApp ; si l'IA n'invente aucune promesse, montrer la correction réellement faite et adapter la voix off.] Note : l'agent IA de WhatsApp (Meta Business Agent) n'est pas disponible dans tous les pays et désactive le message d'accueil quand il est connecté : ne pas l'activer sur le compte de démonstration ; pour aller plus loin, cours 2 « Agents IA ».
- **Consolidation (B5)** : prédiction. Hadiza veut envoyer une promotion trois fois par jour à ses trois cents contacts, par liste de diffusion : que va-t-il se passer ? Réponse : seuls les contacts qui ont enregistré son numéro la reçoivent ; les envois répétés entraînent blocages et signalements ; un compte signalé pour messages indésirables peut être restreint. Mieux vaut un message par semaine, à ceux qui l'ont accepté.
- **Consigne à copier** :

```text
Tu es un spécialiste de la vente sur WhatsApp pour les petits commerces au Niger.
Mon activité : [ce que vous vendez], à [ville, quartier].
Mes produits et prix : [liste].
Mes horaires : [jours et heures]. Ma zone et mes conditions de livraison : [précisez].
Moyens de paiement acceptés : [espèces, paiement mobile…].

Rédige en français simple et chaleureux, avec le vouvoiement :
1. une description de profil courte ;
2. une description courte et honnête pour chaque produit ;
3. un message d'accueil ;
4. un message d'absence ;
5. trois réponses rapides : prix, livraison, paiement.
N'invente aucune promesse (délai, qualité, réduction) que je ne t'ai pas donnée.
[Option : ajoute une version en haoussa ou en zarma, que je ferai relire par un locuteur natif.]
```

- **Exercice** : « Préparez votre vitrine WhatsApp Business » — 1. Installez WhatsApp Business, de préférence sur un numéro réservé à l'activité, et remplissez le profil : nom, description, adresse, horaires, photo. 2. Avec la consigne, faites rédiger vos textes ; supprimez toute promesse que vous ne pouvez pas tenir. 3. Ajoutez trois articles au catalogue, activez les messages d'accueil et d'absence, créez trois réponses rapides et trois étiquettes. 4. Testez depuis le téléphone d'un proche et faites trois captures (profil, catalogue, message d'accueil) : elles serviront au projet final.
- **Carte de rappel** : 1. Préparer votre WhatsApp Business pour vendre, avec l'aide de l'IA 2. Profil complet et catalogue clair, prix compris 3. Messages automatiques rédigés par l'IA, relus par vous 4. Une étiquette par étape de commande
- **Quiz** :
  1. Gemini écrit « livraison en dix minutes » dans votre message d'accueil, mais vous ne pouvez pas tenir ce délai. Que faites-vous ? — A) Vous gardez la phrase : elle fait vendre B) Vous ajoutez « environ » C) Vous laissez l'IA décider D) Vous effacez la promesse avant de publier — **Réponse : D**
  2. Que doit montrer chaque article du catalogue ? — A) Une photo, un nom, un prix et une description courte B) Uniquement une photo C) Les numéros de vos clients D) Une promesse de livraison rapide — **Réponse : A**
  3. Quand le message d'accueil part-il ? — A) À chaque message reçu B) Seulement la nuit C) Au premier message d'un client, ou après quatorze jours sans échange D) Jamais automatiquement — **Réponse : C**
  4. À quoi servent les étiquettes, appelées « listes » sur les versions récentes ? — A) À bloquer des clients B) À classer chaque discussion selon l'étape de la commande C) À envoyer de la publicité D) À traduire les messages — **Réponse : B**
  5. Qui reçoit un message envoyé par liste de diffusion ? — A) Seulement les contacts qui ont enregistré votre numéro B) Tous vos contacts C) Tous les utilisateurs de votre ville D) Seulement vos groupes — **Réponse : A**
- **Marques citées** : WhatsApp, WhatsApp Business (Meta), Gemini (Google)

#### Script

Durée estimée : 6:03 · Mots dits : 680

**[B1 — Accroche · 0:00–0:25]**

**[E · SITUATION]** « Niamey, 23 h » — VO : Hadiza a choisi WhatsApp pour vendre.
**[F · CAM A]** À la fin de cette leçon, vous saurez préparer votre WhatsApp Business pour vendre, avec l'aide de l'IA. Aujourd'hui, ses commandes arrivent dans le désordre. Des messages vocaux à minuit, le même prix demandé dix fois. Et la semaine dernière, une commande oubliée.

[PAUSE 1 s]

**[B2 — Cadrage · 0:25–1:02]**

**[F · CAM A]** WhatsApp Business est une application gratuite, différente de WhatsApp. Certaines options sont payantes, mais tout ce que montre cette leçon est gratuit. Ce n'est pas seulement WhatsApp avec un logo. C'est une vitrine, et un carnet de commandes.
**[A · ÉCRAN]** Voici le profil de Hadiza, vu par un client : description, horaires, catalogue.
**[F · CAM A]** Et l'IA ? Elle ne parle pas à votre place. Elle écrit des brouillons, c'est-à-dire des premières versions. Vous les relisez, vous les corrigez, puis vous les publiez.

[PAUSE 1 s]

**[B3 — Notion · 1:02–3:11]**

**[B · CARTE]** « Unité 1 · Un profil qui répond avant vous » — VO : Premier réglage : un profil complet.
**[A · ÉCRAN]** Dans l'onglet Outils, ouvrez le profil d'entreprise. Nom, description courte, adresse, horaires d'ouverture. Ajoutez une photo nette de vos produits, ou votre logo. Un client sait tout de suite ce que vous vendez, où, et quand. Les horaires servent aussi au message d'absence, que nous verrons.

**[B · CARTE]** « Unité 2 · Le catalogue, une vitrine de poche » — VO : Deuxième réglage : le catalogue.
**[F · CAM A]** Le catalogue, c'est votre vitrine dans le téléphone du client. Chaque article : une photo, un nom, un prix, une description courte. À Zinder, Rahila y montre ses modèles de couture, avec prix et délais. Pour de belles photos, suivez nos cours sur les visuels. WhatsApp vérifie chaque article avant de l'afficher.

**[B · CARTE]** « Unité 3 · Accueil, absence, réponses rapides » — VO : Troisième réglage : les messages qui partent tout seuls.
**[C · SCHÉMA]** « 1er message → message d'accueil · hors horaires → message d'absence · « / » → réponse rapide » — VO : Le message d'accueil part au premier message d'un client. Il repart après quatorze jours sans échange. Le message d'absence répond en dehors de vos horaires. Les réponses rapides, enfin : vous tapez une barre oblique, et vos textes enregistrés apparaissent. Prix, livraison, paiement : écrits une fois, envoyés en deux gestes. WhatsApp propose aussi, dans certains pays, un agent IA qui répond à votre place. Commencez par des messages que vous contrôlez.

**[B · CARTE]** « Unité 4 · Une étiquette par étape de commande » — VO : Quatrième réglage : les étiquettes.
**[F · CAM B]** Une étiquette classe une discussion : nouvelle commande, payé, livré. Sur les versions récentes, elles s'appellent des « listes ». D'un coup d'œil, vous voyez qui attend sa livraison. À Maradi, Moussa en a une pour les clients qui achètent à crédit.

[PAUSE 1 s]

**[B4 — Application · 3:11–4:45]**

**[G · CONSIGNE]** « Consigne de Hadiza — texte complet dans la leçon » — VO : Voici la consigne de Hadiza, dans le texte de la leçon.
**[A · ÉCRAN]** Étape un : dans Gemini, elle décrit ses produits, ses prix, ses horaires, sa zone de livraison. Gemini rédige la description du profil, trois fiches produits, l'accueil, l'absence et trois réponses rapides. Étape deux : elle relit tout. Une phrase promet une livraison « en dix minutes ». Elle ne peut pas tenir cette promesse : elle l'efface. Elle demande aussi une version en haoussa, que sa sœur relira. Étape trois : WhatsApp Business, onglet Outils. Elle colle la description dans le profil. Elle ajoute un article au catalogue : jus de gingembre, cinquante centilitres, photo, prix fictif. Elle active le message d'accueil et colle le texte. Elle crée la réponse rapide « livraison ». Étape quatre : le test. Depuis un second téléphone, une collègue écrit « Bonjour ». Le message d'accueil arrive aussitôt. La collègue ouvre le catalogue depuis le profil. Hadiza tape une barre oblique et choisit « livraison ». Puis elle pose l'étiquette « Nouvelle commande ». Résultat : chaque client est accueilli, même la nuit, et chaque commande est classée.

[PAUSE 1 s]

**[B5 — Consolidation · 4:45–5:30]**

**[F · CAM A]** Hadiza a trois cents contacts dans son téléphone. Elle prépare une promotion. Elle pense l'envoyer trois fois par jour, à tout le monde, par liste de diffusion. Que va-t-il se passer ?
[SILENCE 2 s]
**[C · SCHÉMA]** « 300 contacts → seuls ceux qui ont enregistré le numéro reçoivent → blocages, signalements → compte restreint » — VO : D'abord, une partie de ses contacts ne la recevra pas. Une liste de diffusion n'arrive qu'aux personnes qui ont enregistré votre numéro. Ensuite, ceux qui la reçoivent trois fois par jour risquent de bloquer ou de signaler. Et un compte signalé pour messages indésirables peut être restreint par WhatsApp. Mieux vaut un message par semaine, à ceux qui ont dit oui.

[PAUSE 1 s]

**[B6 — Clôture · 5:30–6:03]**

**[B · CARTE DE RAPPEL]** « 1. Préparer votre WhatsApp Business pour vendre, avec l'aide de l'IA » « 2. Profil complet et catalogue clair, prix compris » « 3. Messages automatiques rédigés par l'IA, relus par vous » « 4. Une étiquette par étape de commande » — VO : Retenez quatre points. Préparer votre WhatsApp Business pour vendre, avec l'aide de l'IA. Profil complet et catalogue clair, prix compris. Messages automatiques rédigés par l'IA, relus par vous. Une étiquette par étape de commande.
**[F · CAM A]** Cette nuit, un client écrit à Hadiza à vingt-trois heures. Il reçoit le message d'absence, puis consulte le catalogue. Le matin, sa commande l'attend, étiquetée. À vous. Préparez votre vitrine WhatsApp Business.

#### Liste des plans

| # | Type | Cadre / source | Contenu | Durée | Notes |
|---|---|---|---|---|---|
| 1 | E | illustration ou photo de mise en scène | Hadiza endormie, téléphone qui s'allume sur la table de nuit ; surtitre « Niamey, 23 h » | 5 s | aucun écran d'application visible (pas d'interface inventée) |
| 2 | F | CAM A | B1 : promesse et désordre des commandes ; B2 : une application gratuite, une vitrine | 36 s | même axe ; promesse terminée avant 0:12 |
| 3 | A | capture du téléphone « client » | B2 : le profil de Hadiza vu par un client | 8 s | profil de démonstration complet |
| 4 | F | CAM A | B2 : l'IA écrit des brouillons, vous publiez | 13 s | — |
| 5 | B | cartes-titres | quatre cartes d'unité (4 × 4 s) | 16 s | une emphase par carte |
| 6 | A | capture WhatsApp Business, onglet Outils | U1 : profil d'entreprise, champs remplis | 23 s | cadre sur le champ « horaires » |
| 7 | F | CAM A, coupes CAM B | U2 : le catalogue ; Rahila (Zinder) ; renvoi aux cours sur les visuels | 27 s | titres des cours 5 et 9 affichés en bandeau |
| 8 | C | schéma animé | U3 : premier message → accueil ; hors horaires → absence ; « / » → réponse rapide | 39 s | pictogrammes, aucune interface redessinée |
| 9 | F | CAM B | U4 : étiquettes ; Moussa (Maradi) et ses clients à crédit | 22 s | insert possible : cahier de crédit |
| 10 | G | carte de consigne | consigne de la leçon (version écran abrégée) | 8 s | texte complet dans la leçon |
| 11 | A | captures Gemini, WhatsApp Business, téléphone « client » | B4 : textes → relecture → profil, catalogue, accueil, réponse rapide → test → étiquette | 86 s | données fictives de la fiche ; une annotation à la fois |
| 12 | F | CAM A | B5 : trois cents contacts, trois envois par jour, question | 17 s | silence de 2 s inclus |
| 13 | C | schéma animé | B5 : diffusion partielle → blocages et signalements → compte restreint | 28 s | croix doublées d'une forme |
| 14 | B | carte de rappel | quatre points révélés au rythme de la voix | 17 s | gabarit sans sous-titre |
| 15 | F | CAM A | B6 : le client de 23 h ; titre de l'exercice | 16 s | dernière phrase = titre de l'exercice |

#### Montage idéal

| Temps | Timecode cible | Image principale | Habillage (motion graphics) | Texte à l'écran | Son | Transition |
|---|---|---|---|---|---|---|
| B1 | 0:00–0:25 | E puis F CAM A | surtitre « Niamey, 23 h » ; filigrane | bandeau « Vendre sur WhatsApp Business » | voix seule | coupe |
| B2 | 0:25–1:02 | F CAM A, A profil client, F CAM A | cadre sur description, horaires, catalogue | « Vitrine + carnet de commandes » | voix seule | coupe |
| B3 | 1:02–3:11 | cartes, A Outils, F A et B, C | chronologie des messages automatiques ; touche « / » en emphase | titres d'unité ; « 14 jours sans échange » | voix seule | coupe ; une transition plein cadre à l'entrée de B3 |
| B4 | 3:11–4:45 | G puis A (Gemini, WhatsApp Business, téléphone client) | numéros d'étape 1 à 4 ; croix sur la promesse effacée ; coche sur l'accueil reçu | « Étape 1 » … « Étape 4 » ; « prix fictif » | voix seule ; respiration de 1 s quand l'accueil arrive | coupe ; écran partagé client / Hadiza autorisé pour le test |
| B5 | 4:45–5:30 | F CAM A puis C | compteur de contacts qui se réduit ; croix « bloqué », « signalé » | « Une promotion par semaine, à ceux qui ont dit oui » | voix, silence 2 s, voix | coupe sèche après le silence |
| B6 | 5:30–6:03 | B carte de rappel puis F CAM A | points révélés au rythme de la voix ; mentions légales 3 s (Partie 1) | quatre points ; titre de l'exercice | voix seule | coupe vers les mentions, puis carte de clôture |

**Notes de montage** : rythme de 4 à 8 s par image ; dans B4, chaque réglage reste à l'écran au moins 2,5 s après le geste, et le test côté client est monté en écran partagé fixe (deux téléphones côte à côte, au-dessus de la zone des sous-titres). Couper les temps d'attente du réseau ; garder le petit silence quand le message d'accueil arrive. Recadrer sur le champ utile (zoom ≤ 6 %) ; masquer le numéro de la SIM de démonstration. Plans de couverture : photos des bouteilles, mains qui tapent « / », cahier de crédit de Moussa.

#### Versions EN / HA / DJE

- **À re-filmer dans la langue** (≈ 35 s, l'owner face caméra) : B1 `[F · CAM A]` (≈ 20 s) — « À la fin de cette leçon, vous saurez préparer votre WhatsApp Business pour vendre, avec l'aide de l'IA. Aujourd'hui, ses commandes arrivent dans le désordre. Des messages vocaux à minuit, le même prix demandé dix fois. Et la semaine dernière, une commande oubliée. » ; B6 `[F · CAM A]` (≈ 15 s) — « Cette nuit, un client écrit à Hadiza à vingt-trois heures. Il reçoit le message d'absence, puis consulte le catalogue. Le matin, sa commande l'attend, étiquetée. À vous. Préparez votre vitrine WhatsApp Business. »
- **Doublé en voix clonée** : B2 `[F · CAM A]` (deux parties) → capture du profil côté client prolongée, puis carte « L'IA écrit des brouillons, vous publiez » ; U2 `[F · CAM A]` → capture du catalogue et illustrations des modèles de Rahila ; U4 `[F · CAM B]` → capture des étiquettes et insert du cahier de crédit ; B5 `[F · CAM A]` → schéma de la diffusion, affiché dès la question.
- **Notes d'adaptation** : EN : reprendre les libellés officiels de l'interface anglaise (« greeting message », « away message », « quick replies », « labels », « lists », « broadcast list »). HA et DJE : l'interface de WhatsApp Business n'existe probablement pas dans ces langues [à vérifier au moment du tournage] ; nommer le menu tel qu'il apparaît à l'écran, puis l'expliquer. La version haoussa des messages de Hadiza doit être relue par le relecteur natif avant affichage. « Vendre à crédit » est une pratique courante, à garder telle quelle.

### Leçon 5 — Suivre ventes, stock et caisse chaque semaine (`bz5`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez suivre ventes, stock et caisse chaque semaine, avec l'IA. »
- **Cas réel (B1 → B6)** : Les commandes de Hadiza sont désormais classées, mais en fin de mois elle ignore si son activité rapporte : son cahier déborde et le compte de sa caisse ne correspond jamais à ses notes. Elle passe à un tableau Google Sheets en trois onglets, note chaque vente, suit son stock de bouteilles et, chaque dimanche, confie à l'IA les lignes de la semaine avec le montant compté en caisse. Elle contrôle le total, retrouve un paiement mobile oublié dans son comptage et commande des bouteilles avant la rupture. En B6, sa caisse tombe juste et elle sait où elle en est.
- **Unités de notion (B3)** : 1. Trois registres : ventes, stock, caisse — ce qui se vend, ce qui reste, l'argent qui entre et sort (espèces et paiement mobile) · 2. Du cahier au tableau, par une photo — l'assistant transcrit la page ; vous relisez chaque ligne · 3. Le point de la semaine en trois questions — articles les plus vendus, rupture à venir, écart de caisse · 4. Devis, reçu, facture : chacun son rôle — l'IA rédige devis et reçus ; la facture certifiée suit les règles des impôts.
- **Démo (B4)** : Google Sheets (application, compte « Karatou Démo ») puis Gemini. Classeur fictif prérempli — onglet Ventes : lundi gingembre 8, bissap 6 ; mardi gingembre 14, bissap 5, pack bureau 1 ; mercredi gingembre 9, bissap 7 ; jeudi gingembre 15, bissap 6, pack bureau 1 ; vendredi gingembre 10, bissap 8 ; prix 500 FCFA la bouteille, 4 500 FCFA le pack de dix ; total 53 000 FCFA. Onglet Stock (bouteilles vides) : départ 120, entrées 0, sorties 108, reste 12. Caisse comptée : 52 500 FCFA (un paiement mobile de 500 FCFA oublié dans le comptage). 1. Saisir la ligne du jeudi (gingembre, 15, 500) : la colonne Total calcule quantité × prix. 2. Onglet Stock : formule « départ + entrées − sorties ». 3. Sélectionner la colonne Total : la somme s'affiche en bas de l'écran. 4. Copier les lignes de la semaine, les coller dans Gemini avec la consigne (étape 2) et le montant compté. 5. Comparer le total de Gemini à la somme du tableau ; retrouver l'écart ; commander cent bouteilles vides pour lundi. Résultat attendu à l'écran : la réponse de Gemini aux trois questions (gingembre en tête mardi et jeudi, rupture de bouteilles avant mercredi, caisse inférieure de 500 FCFA au tableau) et deux totaux identiques. [à vérifier au moment du tournage : collage des lignes de Google Sheets vers Gemini sur téléphone ; séparateur des formules selon la langue du classeur ; si le total de Gemini diffère, le montrer et le corriger à l'écran : c'est le cas de B5.]
- **Consolidation (B5)** : prédiction sur un cas imaginé (montants fictifs) : l'assistant annonce 86 500 FCFA pour la semaine, la somme du tableau affiche 91 500 FCFA. Lequel croire ? Réponse : aucun avant vérification ; la comparaison ligne par ligne montre que l'assistant a sauté une ligne du collage ; le tableau rempli à partir du cahier reste la référence.
- **Consigne à copier** :

```text
Tu m'aides à suivre mon petit commerce. Je vends [vos produits], à [ville].
Étape 1 (une seule fois) : propose-moi un tableau simple pour Google Sheets, en 3 onglets : Ventes (date, article, quantité, prix, total), Stock (article, départ, entrées, sorties, reste), Caisse (date, entrée, sortie, solde). Explique chaque formule ligne par ligne.
Étape 2 (chaque semaine) : voici mes lignes de la semaine [collez vos lignes — sans nom ni numéro de client] et le montant compté dans ma caisse, espèces et paiement mobile : [montant].
Réponds à 3 questions : qu'est-ce qui s'est le mieux vendu ? qu'est-ce qui va manquer en stock ? la caisse correspond-elle au tableau ?
Montre tes calculs. Si une ligne est illisible ou incomplète, signale-la au lieu de deviner.
```

- **Exercice** : « Tenez votre tableau de caisse pendant sept jours » — 1. Avec l'étape 1 de la consigne, créez votre tableau Google Sheets en trois onglets (ou gardez votre cahier et photographiez chaque page). 2. Chaque jour, notez ventes, entrées et sorties de stock, entrées et sorties d'argent, en espèces et en paiement mobile. 3. Le septième jour, faites le point avec l'étape 2 de la consigne, sans aucun nom de client. 4. Comparez le total de l'IA à la somme du tableau, notez l'écart de caisse et sa cause, et gardez une capture : elle servira au projet final.
- **Carte de rappel** : 1. Suivre ventes, stock et caisse chaque semaine, avec l'IA 2. Noter chaque jour, faire le point chaque dimanche 3. Vérifier les totaux de l'IA avec le tableau 4. Facture officielle : suivre les règles des impôts
- **Quiz** :
  1. Quels sont les trois registres d'un petit commerce présentés dans cette leçon ? — A) Clients, amis, famille B) Publicité, logo, prix C) Ventes, stock, caisse D) Banque, crédit, impôts — **Réponse : C**
  2. À quel rythme Hadiza fait-elle le point avec l'IA ? — A) Une fois par an B) Seulement quand la caisse est vide C) Jamais D) Chaque semaine, le dimanche — **Réponse : D**
  3. Le total donné par l'IA diffère de la somme de votre tableau. Que faites-vous ? — A) Vous croyez l'IA B) Vous comparez ligne par ligne avec le tableau C) Vous prenez la moyenne des deux D) Vous effacez le tableau — **Réponse : B**
  4. Au Niger, une entreprise soumise à la TVA doit émettre… — A) Un reçu rédigé par l'IA B) Un simple message WhatsApp C) Aucun document D) Une facture certifiée, selon les règles des impôts — **Réponse : D**
  5. Un client vous envoie la capture d'écran de son paiement mobile. Que faites-vous ? — A) Vous vérifiez le paiement dans votre propre compte B) Vous livrez tout de suite C) Vous transférez la capture à l'IA D) Vous notez la vente sans vérifier — **Réponse : A**
- **Marques citées** : Google Sheets, Gemini (Google), WhatsApp (quiz)

#### Script

Durée estimée : 5:58 · Mots dits : 691

**[B1 — Accroche · 0:00–0:25]**

**[E · SITUATION]** « Niamey, dimanche soir » — VO : Ses étiquettes WhatsApp : plus aucune commande perdue.
**[F · CAM A]** À la fin de cette leçon, vous saurez suivre ventes, stock et caisse chaque semaine, avec l'IA. Pourtant, à la fin du mois, Hadiza ne sait pas si elle gagne de l'argent. Son cahier est plein. Et sa caisse ne tombe jamais juste.

[PAUSE 1 s]

**[B2 — Cadrage · 0:25–0:57]**

**[F · CAM A]** Gérer ne veut pas dire faire de la comptabilité compliquée. Gérer, c'est noter chaque jour, puis regarder chaque semaine.
**[F · CAM B]** Voici une page de son cahier : les ventes sont notées, les achats de sucre oubliés.
**[F · CAM A]** Et l'IA n'est pas votre comptable. Elle lit, trie et résume ; vous vérifiez et décidez. Pour la comptabilité officielle, faites-vous aider par un professionnel. Ce suivi-là, vous pouvez le tenir seul, sur votre téléphone.

[PAUSE 1 s]

**[B3 — Notion · 0:57–3:05]**

**[B · CARTE]** « Unité 1 · Trois registres : ventes, stock, caisse » — VO : Premier outil : trois registres.
**[C · SCHÉMA]** « Ventes : date, article, quantité, prix · Stock : entrées, sorties, reste · Caisse : entrées, sorties, solde » — VO : Les ventes : date, article, quantité, prix. Le stock : ce qui entre, ce qui sort, ce qui reste. La caisse : l'argent qui entre, l'argent qui sort, et le solde. Comptez les espèces et le mobile money, c'est-à-dire l'argent sur téléphone. Un paiement mobile se vérifie dans votre propre compte, jamais sur une capture envoyée. À Maradi, Moussa tient ces trois registres dans un seul cahier, page par page.

**[B · CARTE]** « Unité 2 · Du cahier au tableau, par une photo » — VO : Deuxième outil : du cahier au tableau.
**[A · ÉCRAN]** Vous préférez le papier ? Photographiez la page du jour. Envoyez la photo à l'assistant, et demandez un tableau. Les assistants lisent les photos, souvent même l'écriture à la main. Mais un chiffre mal écrit peut être mal lu. Relisez chaque ligne avec le cahier sous les yeux. Puis gardez le tableau dans Google Sheets, gratuit sur téléphone.

**[B · CARTE]** « Unité 3 · Le point de la semaine en trois questions » — VO : Troisième outil : le point de la semaine.
**[F · CAM A]** Chaque dimanche, posez trois questions. Qu'est-ce qui s'est le mieux vendu ? Qu'est-ce qui va manquer en stock ? La caisse correspond-elle au tableau ? Copiez les lignes de la semaine et collez-les dans l'assistant. Sans noms de clients : « Bureau A » ou « Client trois » suffisent.

**[B · CARTE]** « Unité 4 · Devis, reçu, facture : chacun son rôle » — VO : Quatrième outil : devis, reçu et facture.
**[F · CAM B]** Le devis annonce un prix avant la vente. Le reçu prouve qu'un client a payé. L'IA vous aide à rédiger les deux, clairs et complets. Mais attention à la facture. Au Niger, les entreprises soumises à la TVA doivent émettre des factures certifiées par les impôts. Un document fait avec l'IA ne les remplace pas : renseignez-vous auprès des impôts.

[PAUSE 1 s]

**[B4 — Application · 3:05–4:42]**

**[G · CONSIGNE]** « Consigne de Hadiza — texte complet dans la leçon » — VO : Voici la consigne de Hadiza, dans le texte de la leçon.
**[A · ÉCRAN]** Étape un : dans Google Sheets, Hadiza note une vente du jeudi. Jus de gingembre, quinze bouteilles, cinq cents francs l'une, montant fictif. La colonne Total se calcule seule : quantité fois prix. Étape deux : l'onglet Stock. Stock restant égale stock de départ, plus entrées, moins sorties. L'IA lui a expliqué cette formule, ligne par ligne. Étape trois : dimanche, elle sélectionne la colonne Total. En bas de l'écran, Google Sheets affiche la somme. Étape quatre : elle copie les lignes de la semaine et les colle dans Gemini. Elle ajoute le montant compté dans sa caisse. Gemini répond aux trois questions. Le gingembre se vend le mieux le mardi et le jeudi. Les bouteilles vides vont manquer avant mercredi. Et la caisse affiche cinq cents francs de moins que le tableau. Étape cinq : Hadiza compare le total de Gemini avec la somme de Google Sheets. Ils sont identiques. Elle retrouve l'écart : un paiement reçu par téléphone, oublié dans son comptage. Elle commande cent bouteilles vides pour lundi.

[PAUSE 1 s]

**[B5 — Consolidation · 4:42–5:26]**

**[F · CAM A]** Imaginez. L'assistant annonce : « Total de la semaine : quatre-vingt-six mille cinq cents francs. » La somme de Google Sheets affiche quatre-vingt-onze mille cinq cents. Montants fictifs. Lequel des deux croyez-vous ?
[SILENCE 2 s]
**[C · SCHÉMA]** « IA : 86 500 · Tableau : 91 500 → comparer ligne par ligne · exemple fictif » — VO : Aucun, tant que vous n'avez pas vérifié. Comparez ligne par ligne. Ici, l'assistant a sauté une ligne en lisant le collage. Votre tableau, rempli à partir du cahier, reste la référence. L'IA aide à lire et à résumer ; elle ne remplace pas votre addition. Une erreur de cinq mille francs par semaine pèse lourd sur une année.

[PAUSE 1 s]

**[B6 — Clôture · 5:26–5:58]**

**[B · CARTE DE RAPPEL]** « 1. Suivre ventes, stock et caisse chaque semaine, avec l'IA » « 2. Noter chaque jour, faire le point chaque dimanche » « 3. Vérifier les totaux de l'IA avec le tableau » « 4. Facture officielle : suivre les règles des impôts » — VO : Retenez quatre points. Suivre ventes, stock et caisse chaque semaine, avec l'IA. Noter chaque jour, faire le point chaque dimanche. Vérifier les totaux de l'IA avec le tableau. Facture officielle : suivre les règles des impôts.
**[F · CAM A]** Ce dimanche, Hadiza sait enfin où elle en est. Sa caisse tombe juste, et ses bouteilles arrivent lundi. À vous de jouer. Tenez votre tableau de caisse pendant sept jours.

#### Liste des plans

| # | Type | Cadre / source | Contenu | Durée | Notes |
|---|---|---|---|---|---|
| 1 | E | photo de mise en scène ou illustration | Hadiza à sa table, cahier ouvert, glacière ; surtitre « Niamey, dimanche soir » | 5 s | aucune marque visible |
| 2 | F | CAM A, insert CAM B | B1 : promesse, mois flou ; B2 : gérer = noter puis regarder ; page de cahier ; l'IA n'est pas votre comptable | 51 s | insert en vue de dessus, données fictives |
| 3 | B | cartes-titres | quatre cartes d'unité (4 × 4 s) | 16 s | une emphase par carte |
| 4 | C | schéma animé | U1 : trois registres ; espèces + paiement mobile ; vérifier dans son propre compte ; Moussa (Maradi) | 32 s | pictogrammes cahier, carton, billets |
| 5 | A | capture téléphone : photo du cahier → Gemini → tableau | U2 : transcription d'une page manuscrite | 27 s | page fictive écrite par l'équipe |
| 6 | F | CAM A | U3 : les trois questions du dimanche ; aucun nom de client | 22 s | — |
| 7 | F | CAM B | U4 : devis, reçu, facture certifiée | 29 s | bandeau « Facture certifiée : renseignez-vous aux impôts » |
| 8 | G | carte de consigne | consigne de la leçon (étapes 1 et 2, version écran abrégée) | 8 s | texte complet dans la leçon |
| 9 | A | captures Google Sheets puis Gemini | B4 : saisie → stock → somme → collage → trois réponses → comparaison des totaux | 89 s | classeur fictif de la fiche ; une annotation à la fois |
| 10 | F | CAM A | B5 : deux totaux différents, question | 17 s | silence de 2 s inclus |
| 11 | C | schéma animé | B5 : 86 500 contre 91 500 → comparaison ligne par ligne → ligne sautée | 27 s | « exemple fictif » affiché |
| 12 | B | carte de rappel | quatre points révélés au rythme de la voix | 18 s | gabarit sans sous-titre |
| 13 | F | CAM A | B6 : caisse juste, bouteilles commandées ; titre de l'exercice | 14 s | dernière phrase = titre de l'exercice |

#### Montage idéal

| Temps | Timecode cible | Image principale | Habillage (motion graphics) | Texte à l'écran | Son | Transition |
|---|---|---|---|---|---|---|
| B1 | 0:00–0:25 | E puis F CAM A | surtitre « Niamey, dimanche soir » ; filigrane | bandeau « Ventes, stock, caisse » | voix seule | coupe |
| B2 | 0:25–0:57 | F CAM A, insert cahier, F CAM A | cadre sur la ligne « sucre » absente | « Noter chaque jour · regarder chaque semaine » | voix seule | coupe |
| B3 | 0:57–3:05 | cartes, C, A, F (A et B) | trois colonnes des registres ; cadre sur un chiffre mal lu | titres d'unité ; « Facture certifiée : règles des impôts » | voix seule | coupe ; une transition plein cadre à l'entrée de B3 |
| B4 | 3:05–4:42 | G puis A (Google Sheets, Gemini) | numéros d'étape 1 à 5 ; cadre sur la somme en bas d'écran ; coche sur les totaux identiques | « Étape 1 » … « Étape 5 » ; « montants fictifs » | voix seule ; respiration de 1 s sur les deux totaux | coupe |
| B5 | 4:42–5:26 | F CAM A puis C | deux totaux face à face, puis ligne manquante qui s'allume (cadre) | « Comparer ligne par ligne » | voix, silence 2 s, voix | coupe sèche après le silence |
| B6 | 5:26–5:58 | B carte de rappel puis F CAM A | points révélés au rythme de la voix ; mentions légales 3 s (Partie 1) | quatre points ; titre de l'exercice | voix seule | coupe vers les mentions, puis carte de clôture |

**Notes de montage** : rythme de 4 à 8 s par image ; les captures de tableur sont recadrées sur trois ou quatre lignes à la fois, jamais sur la feuille entière. La somme en bas d'écran reste visible au moins 3 s. Couper les défilements inutiles ; garder la respiration après « Ils sont identiques ». Zoom sur capture ≤ 6 %, une annotation à la fois ; masquer le nom du compte Google. Plans de couverture : pages de cahier, calculatrice, billets et téléphone posés sur la table, carton de bouteilles vides.

#### Versions EN / HA / DJE

- **À re-filmer dans la langue** (≈ 33 s, l'owner face caméra) : B1 `[F · CAM A]` (≈ 20 s) — « À la fin de cette leçon, vous saurez suivre ventes, stock et caisse chaque semaine, avec l'IA. Pourtant, à la fin du mois, Hadiza ne sait pas si elle gagne de l'argent. Son cahier est plein. Et sa caisse ne tombe jamais juste. » ; B6 `[F · CAM A]` (≈ 13 s) — « Ce dimanche, Hadiza sait enfin où elle en est. Sa caisse tombe juste, et ses bouteilles arrivent lundi. À vous de jouer. Tenez votre tableau de caisse pendant sept jours. »
- **Doublé en voix clonée** : B2 `[F · CAM A]` (deux parties) → insert de la page de cahier prolongé, puis carte « L'IA lit et résume ; vous vérifiez et décidez » ; U3 `[F · CAM A]` → carte des trois questions, puis capture de Google Sheets ; U4 `[F · CAM B]` → carte « Devis · Reçu · Facture certifiée » ; B5 `[F · CAM A]` → schéma des deux totaux affiché dès la question.
- **Notes d'adaptation** : EN : « VAT », « certified invoice issued under the rules of Niger's tax administration (DGI) », « mobile money » sans glose. HA et DJE : « mobile money » se dit souvent tel quel au Niger, à confirmer par le relecteur ; « devis », « reçu », « facture » doivent rester trois mots distincts. Les captures restent en français, avec les lignes clés retapées dans la langue de la version. Montants identiques et toujours présentés comme fictifs.

### Leçon 6 — Projet final : votre dossier de lancement (`bz6`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez bâtir votre dossier de lancement et son plan d'action. »
- **Cas réel (B1 → B6)** : Un mois après le premier rendez-vous, l'agence de microfinance attend le dossier complet de Hadiza. Ses pièces existent mais sont dispersées : notes d'entretiens, tableau des concurrents, page chiffrée, captures WhatsApp, tableau de caisse. Elle les rassemble en quatre pages, prépare avec l'IA un plan de trente jours daté et mesurable, fait relire l'ensemble selon les quatre critères, corrige les deux faiblesses repérées et ajoute sa note d'usage de l'IA. En B6, le PDF est déposé et l'agence lui fixe un rendez-vous : elle sait défendre chaque ligne.
- **Unités de notion (B3)** : 1. Quatre pièces, un seul dossier — page du projet chiffrée ; preuves ; vitrine et gestion ; plan de 30 jours ; un PDF de quatre pages, captures en annexe · 2. Trente jours, semaine par semaine — trois actions au plus par semaine, chacune datée, avec un responsable ; un indicateur par semaine · 3. Quatre critères d'évaluation — preuves réelles ; chiffres cohérents et sourcés ; plan daté et mesurable ; usage responsable de l'IA · 4. L'IA relit, vous signez — relecture selon les critères ; chaque phrase doit pouvoir être défendue par l'apprenant.
- **Démo (B4)** : Google Docs et Gemini (compte « Karatou Démo »). 1. Parcourir le dossier de Hadiza page par page : page du projet (L3), preuves (L1, L2), vitrine et gestion (L4, L5), plan. 2. Partie A de la consigne : Gemini propose le plan de 30 jours à partir de la page et des hypothèses ; Hadiza fixe dates et indicateurs. 3. Partie B : relecture selon les quatre critères ; Gemini signale deux faiblesses volontairement laissées dans la version de démonstration (une action sans date, une source sans lien). 4. Corriger dans Google Docs ; ajouter la note d'usage de l'IA. 5. Exporter en PDF. Plan fictif : semaine 1, livrer les 3 bureaux réguliers (indicateur : 40 commandes) ; semaine 2, visiter 5 nouveaux bureaux avec un échantillon (indicateur : 5 visites, 2 nouveaux clients) ; semaine 3, confirmer à la mairie la règle de vente des boissons (indicateur : réponse obtenue) ; semaine 4, point de caisse du mois et décision sur le congélateur (indicateur : seuil de 200 bouteilles atteint ou non). Note d'usage de l'IA (exemple) : « L'IA a mis en forme mes notes, proposé le plan et relu le dossier. J'ai refait chaque calcul, ouvert chaque source et corrigé les textes. Aucune donnée personnelle de client n'a été saisie. » Résultat attendu à l'écran : le dossier corrigé, puis le PDF de quatre pages. [à vérifier au moment du tournage : réponse réelle de Gemini à la relecture ; export PDF depuis l'application Google Docs sur téléphone.]
- **Consolidation (B5)** : prédiction. Ibrahim (Tahoua) rend un premier dossier de vingt pages écrites par l'IA, avec « un marché de plusieurs milliards » sans source et un plan sans date : passe-t-il les critères ? Réponse : non, trois critères sur quatre manquent ; il le reprend avec ses vrais relevés de la gare routière et aboutit à quatre pages vérifiables.
- **Consigne à copier** :

```text
Partie A — Mon plan de 30 jours
Tu es un conseiller en création d'entreprise au Niger. Voici ma page de projet et mes hypothèses à vérifier : [collez-les, sans nom ni numéro de client].
Propose un plan de 30 jours : 4 semaines, 3 actions au plus par semaine. Pour chaque action : une date, un responsable, un indicateur chiffré.

Partie B — Relecture de mon dossier
Tu es le jury d'un programme d'appui aux entrepreneurs au Niger. Voici mon dossier : [collez le texte des 4 pièces].
1. Évalue-le avec ces 4 critères : preuves réelles ; chiffres cohérents et sourcés ; plan daté et mesurable ; usage responsable de l'IA. Pour chaque critère : atteint ou non, et pourquoi, en citant la phrase concernée.
2. Liste les 3 corrections les plus importantes, par ordre de priorité.
Ne réécris pas le dossier à ma place.
```

- **Exercice** : « Assemblez et déposez votre dossier de lancement » — 1. Rassemblez vos quatre pièces : page du projet chiffrée (leçon 3) ; preuves : synthèse des entretiens, résultat du test, tableau des concurrents avec sources (leçons 1 et 2) ; vitrine et gestion : trois captures WhatsApp Business et une semaine de tableau de caisse (leçons 4 et 5) ; plan de 30 jours. 2. Avec la partie A de la consigne, rédigez le plan : quatre semaines, trois actions datées au plus par semaine, un indicateur par semaine. 3. Avec la partie B, faites relire le dossier, corrigez-le, ajoutez une note d'usage de l'IA de trois lignes et vérifiez qu'aucune donnée personnelle n'apparaît. 4. Exportez un seul PDF (quatre pages au plus, captures en annexe) et déposez-le dans l'espace « Projet final » du cours [modalité de dépôt à confirmer par l'owner]. Évaluation : chaque critère est jugé « atteint » ou « non atteint » ; le projet est validé quand les quatre critères sont atteints [barème à confirmer par l'owner].
- **Carte de rappel** : 1. Bâtir votre dossier de lancement et son plan d'action 2. Quatre pièces, un seul PDF, un plan daté — suivie de la carte récapitulative du cours (un point par leçon) : 1. Tester l'idée auprès de vrais clients 2. Pas de source, pas de chiffre 3. Une page : coût, prix, seuil 4. WhatsApp Business : vitrine et messages relus 5. Chaque semaine : ventes, stock, caisse
- **Quiz** :
  1. Combien de pièces contient le dossier de lancement ? — A) Une seule page B) Quatre : page chiffrée, preuves, vitrine et gestion, plan de 30 jours C) Vingt pages rédigées par l'IA D) Seulement le plan d'action — **Réponse : B**
  2. Quelle action est bien écrite pour le plan de 30 jours ? — A) « Trouver plus de clients » B) « Être plus visible » C) « Semaine 2 : visiter 5 bureaux du Plateau avec un échantillon — indicateur : 5 visites » D) « Améliorer la qualité » — **Réponse : C**
  3. Le dossier d'Ibrahim annonce « un marché de plusieurs milliards », sans source. Quel critère n'est pas atteint ? — A) Chiffres cohérents et sourcés B) Mise en page C) Longueur du texte D) Choix de la police — **Réponse : A**
  4. Que contient la note d'usage de l'IA ? — A) Les noms de vos clients B) Le mot de passe de votre compte C) Rien : elle est facultative D) Ce que l'IA a fait, et ce que vous avez vérifié — **Réponse : D**
  5. Sous quelle forme déposez-vous votre dossier ? — A) Un seul PDF de quatre pages au plus, captures en annexe B) Des photos envoyées une par une C) Un message vocal D) Un lien vers une discussion WhatsApp — **Réponse : A**
- **Marques citées** : Google Docs, Gemini (Google), WhatsApp, WhatsApp Business (Meta)

#### Script

Durée estimée : 5:42 · Mots dits : 681

**[B1 — Accroche · 0:00–0:28]**

**[E · SITUATION]** « Niamey, un mois plus tard » — VO : La caisse de Hadiza tombe enfin juste.
**[F · CAM A]** À la fin de cette leçon, vous saurez bâtir votre dossier de lancement et son plan d'action. L'agence de microfinance attend maintenant son dossier complet. Hadiza a toutes les pièces, mais éparpillées : un cahier, des captures, des tableaux. Il faut les rassembler, et dire ce qu'elle fera ensuite.

[PAUSE 1 s]

**[B2 — Cadrage · 0:28–1:00]**

**[F · CAM A]** Un dossier de lancement n'est pas un texte parfait écrit par l'IA. C'est la preuve de ce que vous avez déjà fait. Et la liste datée de ce que vous ferez ensuite.
**[A · ÉCRAN]** Voici la couverture du dossier de Hadiza, dans Google Docs : quatre pages, pas plus.
**[F · CAM A]** Ce dossier est votre projet final. Il valide le cours, et il vous sert pour de vrai : banque, partenaire, associé.

[PAUSE 1 s]

**[B3 — Notion · 1:00–2:58]**

**[B · CARTE]** « Unité 1 · Quatre pièces, un seul dossier » — VO : D'abord, les livrables : quatre pièces.
**[A · ÉCRAN]** Voici le modèle de dossier, encore vide, dans Google Docs. Pièce un : votre page du projet, chiffrée. Pièce deux : vos preuves. La synthèse de cinq entretiens, le résultat de votre test, le tableau des concurrents, avec sources. Pièce trois : votre vitrine et votre gestion. Trois captures de WhatsApp Business, et une semaine de votre tableau de caisse. Pièce quatre : votre plan d'action de trente jours. Le tout dans un seul fichier PDF : quatre pages au plus, captures en annexe.

**[B · CARTE]** « Unité 2 · Trente jours, semaine par semaine » — VO : Ensuite, le plan de trente jours.
**[F · CAM A]** Quatre semaines, trois actions au plus par semaine. Chaque action a une date et un responsable. Chaque semaine a un indicateur : un nombre que vous suivez. Par exemple : nombre de commandes, nouveaux bureaux servis, solde de caisse. Une action floue, comme « trouver des clients », ne se mesure pas. Un plan, c'est un calendrier, pas une liste de souhaits.

**[B · CARTE]** « Unité 3 · Quatre critères d'évaluation » — VO : Voici comment votre dossier sera évalué.
**[C · SCHÉMA]** « 1. Preuves réelles · 2. Chiffres cohérents et sourcés · 3. Plan daté et mesurable · 4. IA utilisée de façon responsable » — VO : Un : des preuves réelles, issues du terrain. Deux : des chiffres cohérents, calculés et sourcés. Trois : un plan daté et mesurable. Quatre : un usage responsable de l'IA. Aucune donnée personnelle dans le dossier. Et une courte note : ce que l'IA a fait, ce que vous avez vérifié.

**[B · CARTE]** « Unité 4 · L'IA relit, vous signez » — VO : Dernier conseil : l'IA relit, vous signez.
**[F · CAM B]** Demandez à l'assistant de relire votre dossier avec ces quatre critères. Il repère ce qui manque. Mais c'est votre dossier : chaque phrase doit pouvoir être défendue par vous. Un dossier que vous ne comprenez pas se voit au premier rendez-vous.

[PAUSE 1 s]

**[B4 — Application · 2:58–4:28]**

**[G · CONSIGNE]** « Consigne de Hadiza, parties A et B — texte complet dans la leçon » — VO : Voici la consigne de Hadiza, en deux parties, dans le texte de la leçon.
**[A · ÉCRAN]** Voici le dossier de Hadiza, page par page. Page un : sa page du projet, avec coût de revient, prix et seuil. Montants fictifs, bien signalés. Page deux : ses preuves. Cinq entretiens résumés, vingt bouteilles prévendues, quatre concurrents comparés, deux sources datées. Page trois : trois captures de sa vitrine WhatsApp, et sa première semaine de caisse. Page quatre : son plan de trente jours, préparé avec Gemini à partir de sa page. Semaine un : livrer les trois bureaux réguliers ; indicateur, quarante commandes. Semaine deux : visiter cinq nouveaux bureaux, avec un échantillon. Semaine trois : confirmer à la mairie la règle de vente des boissons. Semaine quatre : point de caisse du mois, et décision sur le congélateur. Puis elle colle la consigne de relecture. Gemini signale deux faiblesses : une action sans date, et une source sans lien. Hadiza corrige les deux. Elle ajoute sa note d'usage de l'IA, en trois lignes. Elle exporte en PDF : le dossier est prêt.

[PAUSE 1 s]

**[B5 — Consolidation · 4:28–5:10]**

**[F · CAM A]** À Tahoua, Ibrahim prépare aussi son dossier, pour agrandir son restaurant. Son premier essai : vingt pages écrites par l'IA en une soirée. Un marché « de plusieurs milliards », sans source. Et un plan sans aucune date. Ce dossier passe-t-il les critères ?
[SILENCE 2 s]
**[C · SCHÉMA]** « Preuves ✗ · Chiffres sourcés ✗ · Plan daté ✗ · IA responsable ? » — VO : Non. Trois critères sur quatre manquent : pas de preuve, un chiffre sans source, un plan sans date. Ibrahim reprend tout avec ses vrais relevés de la gare routière. Son nouveau dossier fait quatre pages. Il est plus court, mais chaque ligne se vérifie.

[PAUSE 1 s]

**[B6 — Clôture · 5:10–5:42]**

**[B · CARTE DE RAPPEL]** « 1. Bâtir votre dossier de lancement et son plan d'action » « 2. Quatre pièces, un seul PDF, un plan daté » — VO : Retenez deux points. Bâtir votre dossier de lancement et son plan d'action. Quatre pièces, un seul PDF, un plan daté.
**[B · CARTE RÉCAPITULATIVE]** « Le cours en 5 points » « 1. Tester l'idée auprès de vrais clients » « 2. Pas de source, pas de chiffre » « 3. Une page : coût, prix, seuil » « 4. WhatsApp Business : vitrine et messages relus » « 5. Chaque semaine : ventes, stock, caisse » — VO : Et tout le cours en cinq gestes : tester, vérifier, chiffrer, vendre, suivre.
**[F · CAM A]** Hadiza a déposé son dossier. L'agence lui donne rendez-vous, et elle sait quoi répondre. Déposez votre PDF dans l'espace « Projet final » du cours. Assemblez et déposez votre dossier de lancement.

#### Liste des plans

| # | Type | Cadre / source | Contenu | Durée | Notes |
|---|---|---|---|---|---|
| 1 | E | photo de mise en scène ou illustration | Hadiza devant l'agence, chemise cartonnée à la main ; surtitre « Niamey, un mois plus tard » | 5 s | aucun logo d'établissement réel |
| 2 | F | CAM A | B1 : promesse, pièces éparpillées ; B2 : pas un texte parfait, mais des preuves et des dates | 38 s | même axe ; promesse terminée avant 0:12 |
| 3 | A | capture Google Docs | B2 : couverture du dossier de Hadiza | 8 s | — |
| 4 | F | CAM A | B2 : un projet final qui valide le cours et sert pour de vrai | 9 s | — |
| 5 | B | cartes-titres | quatre cartes d'unité (4 × 4 s) | 16 s | une emphase par carte |
| 6 | A | capture Google Docs, modèle vide | U1 : les quatre pièces, titre par titre | 34 s | modèle fourni aux apprenants avec la leçon |
| 7 | F | CAM A, coupes CAM B | U2 : plan de trente jours, actions datées, indicateurs | 26 s | bandeau « 3 actions max · 1 date · 1 indicateur » |
| 8 | C | schéma animé | U3 : les quatre critères d'évaluation | 24 s | numéros et pictogrammes, pas de couleur seule |
| 9 | F | CAM B | U4 : l'IA relit, vous signez | 18 s | — |
| 10 | G | carte de consigne | consigne en deux parties (version écran abrégée) | 8 s | texte complet dans la leçon |
| 11 | A | captures Google Docs puis Gemini | B4 : dossier page par page → plan → relecture → corrections → PDF | 82 s | dossier fictif avec deux faiblesses volontaires |
| 12 | F | CAM A | B5 : premier dossier d'Ibrahim, question | 22 s | silence de 2 s inclus |
| 13 | C | schéma animé | B5 : grille des critères, trois croix, puis dossier refait | 20 s | croix et coches doublées d'une forme |
| 14 | B | carte de rappel puis carte récapitulative | deux points, puis le cours en cinq points | 17 s | gabarit sans sous-titre ; cinq points ≥ 4 s ensemble |
| 15 | F | CAM A | B6 : dossier déposé, rendez-vous ; consigne de dépôt ; titre de l'exercice | 15 s | dernière phrase = titre de l'exercice |

#### Montage idéal

| Temps | Timecode cible | Image principale | Habillage (motion graphics) | Texte à l'écran | Son | Transition |
|---|---|---|---|---|---|---|
| B1 | 0:00–0:28 | E puis F CAM A | surtitre de lieu ; filigrane | bandeau « Projet final : dossier de lancement » | voix seule | coupe |
| B2 | 0:28–1:00 | F CAM A, A couverture, F CAM A | cadre sur « 4 pages » | « Des preuves + un plan daté » | voix seule | coupe |
| B3 | 1:00–2:58 | cartes, A modèle vide, F (A et B), C | quatre pièces qui s'empilent ; grille des quatre critères | titres d'unité ; « 4 pages max · 1 PDF » | voix seule | coupe ; une transition plein cadre à l'entrée de B3 |
| B4 | 2:58–4:28 | G puis A (Google Docs, Gemini) | numéro de page 1 à 4 ; cadre sur chaque faiblesse signalée, puis coche après correction | « Semaine 1 » … « Semaine 4 » ; « montants fictifs » | voix seule ; respiration de 1 s sur le PDF final | coupe |
| B5 | 4:28–5:10 | F CAM A puis C | trois croix sur la grille, puis quatre coches sur le dossier refait | « 20 pages sans preuve → 4 pages vérifiables » | voix, silence 2 s, voix | coupe sèche après le silence |
| B6 | 5:10–5:42 | B carte de rappel, B carte récapitulative, F CAM A | points révélés au rythme de la voix ; mentions légales 3 s (Partie 1) | deux points ; le cours en cinq points ; titre de l'exercice | voix seule | coupe vers les mentions, puis carte de clôture |

**Notes de montage** : rythme de 4 à 8 s par image ; en B4, chaque page du dossier reste à l'écran au moins 4 s, recadrée sur son titre et une ligne clé. La carte récapitulative tient au moins 4 s une fois les cinq points affichés. Couper les défilements ; garder la respiration avant « Non. » en B5. Zoom ≤ 6 %, une annotation à la fois ; masquer le nom du compte Google. Plans de couverture : chemise cartonnée, pages imprimées du dossier, mains qui tournent les pages.

#### Versions EN / HA / DJE

- **À re-filmer dans la langue** (≈ 36 s, l'owner face caméra) : B1 `[F · CAM A]` (≈ 23 s) — « À la fin de cette leçon, vous saurez bâtir votre dossier de lancement et son plan d'action. L'agence de microfinance attend maintenant son dossier complet. Hadiza a toutes les pièces, mais éparpillées : un cahier, des captures, des tableaux. Il faut les rassembler, et dire ce qu'elle fera ensuite. » ; B6 `[F · CAM A]` (≈ 13 s) — « Hadiza a déposé son dossier. L'agence lui donne rendez-vous, et elle sait quoi répondre. Déposez votre PDF dans l'espace « Projet final » du cours. Assemblez et déposez votre dossier de lancement. »
- **Doublé en voix clonée** : B2 `[F · CAM A]` (deux parties) → capture de la couverture prolongée, puis carte « Des preuves + un plan daté » ; U2 `[F · CAM A]` → capture de la page 4 du dossier de Hadiza (plan) ; U4 `[F · CAM B]` → capture de la relecture par Gemini ; B5 `[F · CAM A]` → illustration du restaurant d'Ibrahim et grille des critères.
- **Notes d'adaptation** : EN : « launch file », « 30-day action plan », « indicator », « microfinance institution ». HA et DJE : les cinq verbes du récapitulatif (tester, vérifier, chiffrer, vendre, suivre) doivent rester cinq verbes courts ; le nom de l'espace de dépôt reprend exactement le libellé de la plateforme dans chaque langue [à confirmer par l'owner]. « Plusieurs milliards » reste une citation du mauvais dossier, jamais un chiffre présenté comme vrai.

## 2.6 Captures et éléments à préparer

| Leçon | Élément | Comment l'obtenir | Qui |
|---|---|---|---|
| Toutes | Comptes de démonstration : Google « Karatou Démo » (Gemini, Google Sheets, Google Docs) ; SIM et WhatsApp Business « Les jus de Hadiza (démo) » ; téléphone « client » | créer les comptes une semaine avant le tournage ; aucun historique ; contacts limités à l'équipe | équipe |
| Toutes | Cartes d'unité, cartes de rappel, cartes de consigne, schémas animés | produits avec HyperFrames à partir des scripts et des fiches | Claude |
| Toutes | Plans E (Talladjé, Petit Marché, agence de microfinance, 23 h, dimanche soir, un mois plus tard) | photo de mise en scène avec autorisation écrite, ou illustration ; aucune marque ni logo d'établissement | équipe ou Claude (choix de l'owner) |
| Toutes | Autorisations écrites (image, voix, comptes visibles à l'écran) | formulaire signé par chaque personne concernée | owner |
| 1 | Capture : Gemini, « Mon idée de livrer des jus aux bureaux est-elle bonne ? » et sa réponse | enregistrement d'écran, 2 ou 3 essais, réponse non retouchée | owner |
| 1 | Capture : consigne avec des notes « Client 1 », « Client 2 » (U4) | enregistrement d'écran | owner |
| 1 | Capture : démo B4 (questions, question remplacée, notes, tableau, test) | consigne et notes fictives de la fiche | owner |
| 1 | Insert : cahier de notes d'entretien manuscrites, sans aucun nom | recopier à la main les cinq notes fictives de la fiche | équipe |
| 2 | Insert : carnet de relevé de prix (vendeurs A à D) | recopier à la main les notes fictives de la fiche | équipe |
| 2 | Capture : réponse d'un assistant avec ses sources (U3) | Gemini ; à défaut, Mode IA de Google | owner |
| 2 | Capture : démo B4 (tableau, règles et sources, liens ouverts dans le navigateur, fiche en trois parties) | navigateur sans onglets, favoris ni compte visibles | owner |
| 3 | Capture : page du projet en neuf cases dans Google Docs (B2) | issue de la démo B4, capturée après | owner |
| 3 | Capture : Gemini dans le rôle de l'agent de crédit (U4) | enregistrement d'écran | owner |
| 3 | Capture : démo B4 (neuf cases, calculs, calculatrice du téléphone, questions, PDF) | données fictives de la fiche | owner |
| 4 | Capture : profil vu par un client (B2) et onglet Outils (U1) | téléphone « client » ; profil de démonstration complet | owner |
| 4 | Capture : démo B4 (Gemini, WhatsApp Business, test depuis le téléphone « client ») | article du catalogue créé la veille ; numéro de la SIM masqué au montage | owner + un membre de l'équipe |
| 4 | Photos produits : bouteilles « Les jus de Hadiza » sans marque réelle | photo au téléphone, fond neutre, lumière du jour | équipe |
| 4 | Version haoussa des messages de démonstration | relecture par un locuteur natif avant tout affichage | relecteur HA |
| 5 | Insert : page de cahier de ventes (ventes notées, achats de sucre oubliés) | écrire à la main, données fictives | équipe |
| 5 | Capture : photo d'une page manuscrite → Gemini → tableau (U2) | page fictive écrite par l'équipe | owner |
| 5 | Classeur Google Sheets prérempli (Ventes, Stock, Caisse) | saisir les données fictives de la fiche | équipe |
| 5 | Capture : démo B4 (saisie, stock, somme, collage dans Gemini, comparaison des totaux) | enregistrement d'écran | owner |
| 6 | Modèle de dossier vide (Google Docs, quatre titres de pièces) | créer le document ; le joindre aussi à la leçon pour les apprenants | équipe |
| 6 | Dossier fictif complet de Hadiza (quatre pages, deux faiblesses volontaires) | texte rédigé à partir des fiches des leçons 1 à 5, puis mis en page dans Google Docs | Claude (texte) + équipe (mise en page) |
| 6 | Capture : démo B4 (dossier, plan avec Gemini, relecture, corrections, export PDF) | enregistrement d'écran | owner |
| 6 | Modalité de dépôt du projet final (espace « Projet final ») et barème | à confirmer sur la plateforme avant le tournage de B6 | owner |
