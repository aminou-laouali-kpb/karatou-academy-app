# CLAUDE.md — Karatou Academy · Production vidéo
# Cours 1 — L'IA expliquée simplement

> **Pour l'owner — mode d'emploi**
> 1. Créez un dossier vide sur votre ordinateur, par exemple `karatou-ia-expliquee-simplement`.
> 2. Copiez-y ce fichier et renommez-le exactement `CLAUDE.md`.
> 3. Ouvrez Claude Code dans ce dossier (dans un terminal : `cd karatou-ia-expliquee-simplement` puis `claude`).
> 4. Écrivez : **« On démarre. »**
>
> Claude vous demande d'abord le **design system de Karatou Academy**, puis vos fichiers (logo, photo, voix).
> Ensuite il produit les vidéos **une par une** et s'arrête à chaque validation. Pour reprendre plus tard,
> écrivez « On continue. » : l'avancement est noté dans `PROGRESS.md`.

| | |
|---|---|
| Format | Filmé — face caméra, captures d'écran et motion graphics |
| Owner | Idriss |
| Vidéos | 7 vidéos · 5 à 8 min (cible 6:00) chacune |
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
livraison/ia-expliquee-simplement/<id>/      fichiers livrés · livraison/ia-expliquee-simplement/INTEGRATION.md
```

`<id>` est l'identifiant de la leçon (`is1`, `is2`…). Langues : `fr`, `en`, `ha`, `dje`.

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

### 9.2 Nommage et contenu de `livraison/ia-expliquee-simplement/<id>/`

`ia-expliquee-simplement_<id>_<langue>_v<n>.mp4` · `…-360.mp4` · `….srt` · `….vtt` · `…_cover.jpg` (1920 × 1080, qualité 85,
première image stable de B1) · `…_transcript.md` (un titre par temps, texte dit + actions à l'écran entre
crochets) · `RECETTE.md`.

### 9.3 Mise en ligne

Chaîne YouTube **Karatou Academy**, vidéos **non répertoriées**, une vidéo par langue, sous-titres `.srt` ajoutés
comme piste. Titre : « Karatou Academy — L'IA expliquée simplement — Leçon N : <titre> (<LANGUE>) ». Le site lit des **URL
d'intégration** : `https://www.youtube.com/embed/<ID>` (jamais `watch?v=` ni `youtu.be/`). Teste chaque URL dans un
navigateur avant de la consigner.

### 9.4 Intégration au site — `livraison/ia-expliquee-simplement/INTEGRATION.md`

Le site lit, pour chaque leçon, un champ `video: { fr, en, ha }` dans les fichiers TypeScript du dépôt
`karatou-academy-app` (registre `authoredLessons`). Chaque leçon y a aussi un texte (objectif, quatre sections,
exemple, exercice, quiz de cinq questions, réflexion, glossaire), rédigé par l'équipe avec le skill
`karatou-course-creator`, et des lignes Supabase (module, leçons) pour la progression et les certificats.

Ton rôle : tenir `INTEGRATION.md` à jour, leçon par leçon : module `ia-expliquee-simplement`, id, titre, promesse (objectif), cas
réel (exemple), exercice (titre et étapes), carte de rappel, quiz, marques citées, URL FR / EN / HA, et URL DJE
« en attente ». Ce fichier est remis à l'équipe technique ; tu ne modifies pas le dépôt du site.

### 9.5 Corrections après publication

Une URL publiée est figée. Pour corriger : nouvelle version `v2` → mise en ligne → nouvelle URL testée →
`INTEGRATION.md` mis à jour → l'équipe technique remplace l'URL → l'ancienne vidéo est rendue privée, jamais
supprimée. Consigne chaque version dans le journal de `PROGRESS.md`.

## 10. `PROGRESS.md` — modèle

```markdown
# PROGRESS — Cours 1 · L'IA expliquée simplement
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
| Numéro | 1 |
| Titre | L'IA expliquée simplement |
| Format | Filmé (humain face caméra + captures + motion graphics) |
| Owner / présentateur | Idriss — nom complet et titre exact demandés au premier lancement |
| Rubrique | IA & Données |
| Public | Grand public francophone d'Afrique, sans se limiter à un pays ni à une région, sans aucune base technique : commerçants, étudiants, agents publics, curieux. Sur téléphone, en 3G, avec des outils gratuits. Le cours reste compréhensible par un apprenant hors d'Afrique. |
| Slug du module (provisoire) | `ia-expliquee-simplement` |
| Préfixe des leçons | `is` (ex. `is1` … `is7`) |
| Nombre de vidéos | 7 (dont la dernière = projet final certifiant) |
| Durée par vidéo | 5–8 min (cible 6:00) |
| Langues | FR (tournage, référence) · EN · HA · DJE |
| Prérequis | Un téléphone (Android ou iPhone) avec Internet, la 3G suffit. WhatsApp. Un compte Google gratuit ou une adresse e-mail pour ouvrir un compte d'assistant. Aucune connaissance technique. Facultatif : un ordinateur avec webcam pour l'activité bonus de la leçon 2. |
| Promesse du cours | Vous saurez ce qu'est l'IA, l'utiliser pour un vrai besoin de votre quotidien et éviter ses pièges. |
| Positionnement | Cours vitrine et porte d'entrée de la plateforme, pensé pour être partagé sur WhatsApp : zéro jargon, des personnes et des lieux de plusieurs pays d'Afrique, une démonstration réelle par leçon. Il précède le module en ligne `intelligence-artificielle` (c1–c8), plus dense, et y renvoie : `is2` → c2 (comprendre les LLMs), `is3` → c7 (outils), `is4` → c3 (consignes), `is5` → c4 (IA dans votre organisation), `is6` → c6 (éthique, biais, données), `is7` → c8 (évaluation). Il ne remplace ni le cours 15 (choisir son outil gratuit) ni le cours 10 (arnaques et deepfakes) : il les annonce (`is3`, `is5`). Différent de `introduction-claude-ai`, centré sur un seul outil. |
| Fil rouge | Trois personas suivis d'une leçon à l'autre. **Aïcha**, la quarantaine, vend des pagnes wax et du bazin au Grand Marché de Niamey (Niger) et sur WhatsApp ; sa nièce Zeinabou, étudiante, lit le haoussa (leçons 1, 4, 7). **Moussa**, 21 ans, étudiant en licence à l'université de Thiès (Sénégal), veut devenir conseiller agricole ; sa famille cultive du mil et de l'oignon dans la zone des Niayes (leçons 2, 5). **Hadiza**, agente à la mairie de Garoua (Cameroun), chargée de l'information aux habitants, de langue maternelle haoussa, issue de la communauté haoussa du Nord-Cameroun (leçons 3, 6). Leçon 7 : les trois apportent chacun un vrai problème ; le projet d'Aïcha sert d'exemple complet. Tous les cas sont fictifs. |
| Marques citées | Google (Gemini, Google Photos, Google Lens, Google Traduction, Teachable Machine, Chrome, Android, Google Play) · Apple (iPhone) · OpenAI (ChatGPT) · Anthropic (Claude) · Microsoft (Copilot) · Meta (WhatsApp, WhatsApp Business, Meta AI). Sources institutionnelles citées à l'écran (pas des marques) : OMS (2021), OIT (2023), Union africaine (2024). |

## 2.2 Ce que l'apprenant saura faire

- Repérer l'IA dans son téléphone et l'expliquer en une phrase, avec trois verbes : reconnaître, prédire, produire.
- Expliquer comment une IA apprend à partir d'exemples, et pourquoi elle donne la réponse la plus probable, pas forcément la vraie.
- Dialoguer avec un assistant IA gratuit sur son téléphone, à l'écrit ou à la voix, et le relancer jusqu'à obtenir un résultat utile.
- Rédiger une consigne claire avec la méthode RCTF, en quatre blocs : rôle, contexte, tâche, format.
- Dresser, sources à l'appui, le bilan de ce que l'IA change pour son métier : chances et risques.
- Appliquer trois réflexes (vérifier, protéger, questionner) et documenter la résolution d'un vrai problème avec l'IA.

## 2.3 Plan du cours

| Leçon | Id | Titre | Promesse (objectif) | Cas réel (B1) | Démo (B4) | Durée cible |
|---|---|---|---|---|---|---|
| 1 | `is1` | L'IA, vous l'utilisez déjà | Vous saurez repérer l'IA et l'expliquer simplement. | Aïcha, commerçante à Niamey, jure qu'elle n'a jamais utilisé l'IA. | Inventaire des IA du téléphone d'Aïcha : galerie photos, clavier, assistant Gemini, note de synthèse. | 6:00 |
| 2 | `is2` | Comment une IA apprend | Vous saurez expliquer comment une IA apprend. | Moussa, étudiant à Thiès (Sénégal), se demande comment une machine peut apprendre. | Teachable Machine : entraîner une mini-IA à distinguer un oignon d'une tomate, puis la tester. | 6:00 |
| 3 | `is3` | Votre première conversation avec un assistant IA | Vous saurez dialoguer avec un assistant IA. | Hadiza, agente à la mairie de Garoua (Cameroun), n'a jamais parlé à une IA et doit organiser une journée de salubrité. | Gemini sur téléphone, à la voix : liste de tâches, deux relances, message d'invitation copié dans WhatsApp. | 6:00 |
| 4 | `is4` | Bien demander : la méthode RCTF | Vous saurez rédiger une consigne claire pour l'IA. | La publicité demandée par Aïcha invente une promotion qu'elle n'a jamais faite. | ChatGPT : consigne RCTF en quatre blocs (rôle, contexte, tâche, format), deux relances, message publié en statut WhatsApp. | 6:00 |
| 5 | `is5` | Ce que l'IA change en Afrique | Vous saurez dire ce que l'IA change pour votre métier. | Moussa s'inquiète pour son futur travail et prépare un exposé sur l'IA et l'agriculture. | Assistant avec recherche web : tableau chances / risques sourcé, ouverture d'une source, ajout de son expérience. | 6:00 |
| 6 | `is6` | Les limites de l'IA : trois réflexes | Vous saurez appliquer trois réflexes face aux limites de l'IA. | Une affiche préparée avec l'IA a failli envoyer des habitants de Garoua chercher un papier inutile. | Message de Hadiza passé aux trois réflexes : données retirées, ajouts de l'IA repérés et vérifiés, version haoussa relue. | 6:00 |
| 7 | `is7` | Projet final : résoudre un vrai problème avec l'IA | Vous saurez résoudre un vrai problème avec l'IA et le documenter. | Aïcha, Moussa et Hadiza apportent chacun un problème réel de leur quotidien. | Le projet complet d'Aïcha : réponses types pour ses clientes, de la fiche projet au bilan. | 6:00 |

## 2.4 Plan de tournage idéal

### Matériel et réglages

- **A-cam** : un téléphone récent (ou un hybride) sur trépied, objectif principal (pas le grand-angle). Vidéo 4K 30 i/s ; en 1080p 30 i/s si le téléphone chauffe. Exposition et mise au point verrouillées (appui long sur le visage), balance des blancs fixe, stabilisation coupée sur trépied. Mode avion et « Ne pas déranger » activés.
- **B-cam** : un second téléphone, même cadence (30 i/s), sur un petit trépied ou une pince. Il sert au second angle (`[F · CAM B]`) et aux inserts de mains.
- **Son** : un micro-cravate (filaire branché sur la A-cam, ou sans fil), capsule à une main sous le menton, câble caché sous le vêtement. Son témoin enregistré par la B-cam pour la synchronisation.
- **Lumière** : deux panneaux LED diffusés. Lumière principale à 45° côté visage, à hauteur des yeux ; lumière d'appoint de l'autre côté, nettement plus faible. Sans panneaux : une fenêtre de côté et un drap blanc comme réflecteur.
- **Téléprompteur** : une application gratuite sur une tablette ou un téléphone placé juste sous l'objectif, défilement réglé à environ cent vingt-cinq mots par minute. Le script est aussi imprimé, bloc par bloc.
- **Énergie** : délestages possibles. Batteries pleines, deux batteries externes, une rallonge. Rien ne dépend du courant secteur pendant une prise.
- **Ordinateur** (leçon 2 seulement) : un portable avec webcam et le navigateur Chrome, pour Teachable Machine.
- **Accessoires par leçon** : `is1` deux pagnes wax pliés et un rouleau de tissu avec étiquette en anglais ; `is2` un oignon violet, une tomate, une pomme de terre ; `is4` un pagne déplié ; `is5` un épi de mil ; `is6` une « fiche d'organisation » et une liste de volontaires imprimées (fictives, noms et numéros inventés) ; `is7` une fiche projet imprimée et remplie (fictive).

### Décor, lumière, son

- **Décor unique pour les sept leçons**, cohérent avec « l'IA du quotidien » : un coin de travail simple et lumineux, une table avec un cahier et un téléphone, une étagère à 1,5–2 m derrière Idriss avec quelques livres, une plante et un pagne wax plié (clin d'œil à Aïcha). Aucun logo visible, aucun écran allumé derrière, aucun document lisible.
- **Lumière** : tourner le matin, rideaux tirés, pour éviter les variations du soleil. Ne pas mélanger lumière du jour directe et LED de couleurs différentes. Pendant l'harmattan, nettoyer les objectifs avant chaque bloc.
- **Son** : couper ventilateur et climatiseur pendant les prises ; aérer entre les blocs. Suspendre le tournage pendant l'appel à la prière et les bruits de groupe électrogène. Enregistrer trente secondes de silence de la pièce au début de chaque session.
- **Tenue** : la même pour tout le tournage (les blocs sont tournés dans le désordre). Couleurs unies, pas de fines rayures, pas de logo, pas de blanc pur. Poudre anti-brillance à portée de main : il fait chaud.

### Cadrages

- **A-cam** : plan poitrine 16:9, regard caméra, yeux sur la ligne du tiers supérieur, un peu d'air au-dessus de la tête. Idriss centré en B1 et B6 ; décalé sur le tiers gauche en B2–B5 pour laisser à droite la place des cartes et schémas incrustés. Le bas du cadre reste libre (environ un cinquième de la hauteur) pour les sous-titres : ni mains, ni objet important.
- **B-cam** : trois quarts, à 30–45° de l'axe, plan poitrine un peu plus large. Utilisée une à deux fois par leçon pour relancer l'attention, et comme plan de couverture au montage.
- **Inserts** (B-cam, plan serré) : mains qui tapent ou dictent sur le téléphone (écran non lisible, l'écran réel vient des captures), mains qui tiennent l'oignon et la tomate (`is2`), mains qui déplient le pagne (`is4`), mains qui cochent la fiche (`is6`, `is7`). Ces inserts servent aussi à couvrir les passages doublés en EN / HA / DJE.

### Captures d'écran

- **Téléphone de démonstration** : Android en français, compte Google créé pour le cours, sans contacts réels, sans photos personnelles. Taille d'affichage et de police augmentées d'un cran pour la lisibilité. Notifications coupées, écran d'accueil épuré, fond d'écran uni.
- **Enregistrement** : enregistreur d'écran intégré du téléphone, résolution native, 30 i/s, sans son. Afficher les appuis à l'écran si l'option existe sur l'appareil [à vérifier au moment du tournage]. Laisser chaque résultat affiché au moins trois secondes avant le geste suivant. Faire deux prises de chaque capture.
- **Ordinateur** (`is2`) : Chrome avec un profil neuf, barre de favoris masquée, zoom du navigateur augmenté de deux crans, écran en 1920 × 1080.
- **Anonymisation** : contacts et groupes de test uniquement (« Cliente test », « Groupe quartier (test) »). Aucun numéro réel. Tout élément personnel visible par erreur est masqué au montage.
- **Les réponses de l'IA varient d'une fois à l'autre** : on enregistre d'abord la capture, puis on cale la voix off de B4 sur le résultat réel (les scripts donnent la version attendue ; ajuster un mot si l'écran diffère). Ne jamais refaire une réponse à la main.
- La liste complète des captures, leçon par leçon, est en 2.6.

### Organisation du tournage

- **Session 0 — captures (une demi-journée)** : toutes les captures de 2.6, puis enregistrement immédiat des voix off `[A · ÉCRAN]` avec le même micro, en relisant chaque capture.
- **Session 1 — face caméra, matin** : bloc 1, les sept ouvertures B1 (énergie maximale) ; bloc 2, les sept clôtures B6 (avec cartes de rappel annoncées) ; bloc 3, B2, B3 et B5 des leçons 1 à 3.
- **Session 2 — face caméra, matin** : bloc 4, B2, B3 et B5 des leçons 4 à 7 ; bloc 5, angles B-cam et inserts de mains ; bloc 6, prises de sécurité et rattrapages.
- **Session 3 — langues (une demi-journée)** : ouvertures et clôtures re-filmées en anglais, haoussa et zarma (≤ 40 s par leçon et par langue), même décor, même tenue, mêmes réglages.
- **Durée estimée** : environ quatre demi-journées au total, pauses comprises.
- **Rythme de B1** : enchaîner le plan E et la promesse sans pause ; la promesse doit être terminée avant 0:12. Les timecodes des scripts sont calculés à environ cent vingt-deux mots par minute, démonstrations comprises.
- **Méthode** : un clap des mains au début de chaque prise (synchronisation des deux caméras et du micro). Annoncer à voix haute « is3, B2, prise 2 ». Deux bonnes prises par bloc. Une seconde de silence, regard caméra, avant et après chaque bloc.
- **Ton constant** : énergique mais posé, sourire dans la voix, même distance à la caméra, rythme d'environ cent vingt-cinq mots par minute. Les prédictions de B5 se jouent avec un vrai silence, regard caméra.

### Checklist du jour J

- [ ] Batteries chargées, batteries externes pleines, cartes et mémoires vidées.
- [ ] Mode avion et « Ne pas déranger » sur les deux caméras et le téléprompteur.
- [ ] Micro testé, trente secondes de silence de la pièce enregistrées.
- [ ] Ventilateur et climatiseur coupés, voisinage prévenu, horaires de prière notés.
- [ ] Lumières en place, balance des blancs et exposition verrouillées.
- [ ] Cadre vérifié : tiers supérieur, bas du cadre libre, arrière-plan sans logo ni document.
- [ ] Tenue unique, poudre anti-brillance, eau.
- [ ] Script imprimé, téléprompteur chargé, ordre des blocs affiché.
- [ ] Accessoires de la session (voir « Matériel et réglages »).
- [ ] Téléphone de démonstration chargé, compte de démonstration ouvert, contacts de test prêts.
- [ ] Copie des fichiers sur deux supports à la pause et en fin de journée.

## 2.5 Les leçons

### Leçon 1 — L'IA, vous l'utilisez déjà (`is1`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez repérer l'IA et l'expliquer simplement. »
- **Cas réel (B1 → B6)** : Aïcha, la quarantaine, vend des pagnes wax et du bazin au Grand Marché de Niamey, et beaucoup par WhatsApp. Elle jure qu'elle n'a « jamais utilisé l'IA » : pour elle, c'est une affaire d'ingénieurs, loin de son étal. Enjeu : ses clientes et son neveu en parlent, et elle se sent exclue d'un sujet qui la concerne. En B6, le soir même, elle explique l'IA en une phrase à son neveu, avec les trois IA trouvées dans son propre téléphone.
- **Unités de notion (B3)** : 1. L'IA apprend à partir d'exemples — une IA est un programme qui a appris à partir de nombreux exemples, au lieu de suivre seulement des règles écrites à la main. · 2. Elle reconnaît — elle identifie ce qu'il y a dans une image ou un son (texte d'une étiquette, voix dictée). · 3. Elle prédit — elle devine la suite la plus probable (mot suivant, vidéo suivante, message douteux). · 4. Elle produit — elle fabrique un contenu nouveau, texte ou image : c'est l'IA « générative ».
- **Démo (B4)** : téléphone Android de démonstration, en français, compte Google de démonstration. 1. Google Photos : taper « pagne » dans la recherche ; les photos de tissus préparées s'affichent → « reconnaît » [à vérifier au moment du tournage : la recherche par contenu peut exiger la sauvegarde des photos]. 2. WhatsApp, conversation « Cliente test » : taper « Les nouveaux pagnes sont » ; le clavier propose des mots → « prédit » (si le clavier ne propose pas « arrivés », dire dans la voix off le mot réellement affiché). 3. Application Gemini, version gratuite : appuyer sur le micro, dicter la consigne ci-dessous adaptée à Aïcha (« Tu es un formateur patient. Je suis commerçante à Niamey… ») ; la réponse s'affiche → « produit » [à vérifier au moment du tournage : disponibilité de l'application Gemini au Niger et emplacement du bouton micro]. 4. Application Notes : écrire « Mes 3 IA — Galerie : reconnaît · Clavier : prédit · Gemini : produit ». Résultat attendu à l'écran : la note de trois lignes.
- **Consolidation (B5)** : prédiction. « La calculatrice de votre téléphone, est-ce de l'IA ? » Réponse : non, elle applique des règles fixes écrites par des programmeurs ; elle n'a rien appris d'exemples. Même test avec le réveil : pas d'IA.
- **Consigne à copier** :

```text
Tu es un formateur patient.
Je suis [votre métier] à [votre ville].
Explique-moi ce qu'est l'intelligence artificielle, avec un exemple tiré de mon quotidien.
Réponds en 5 phrases simples, sans mots techniques.
```

- **Exercice** : « Faites l'inventaire des IA de votre téléphone » — 1. Trouvez trois IA dans votre téléphone (galerie, clavier, traduction, vidéos proposées, assistant…). 2. Pour chacune, notez son geste : reconnaître, prédire ou produire. 3. Trouvez aussi un programme qui n'est pas de l'IA, parce qu'il suit une règle fixe. 4. Expliquez l'IA en une phrase à un proche, avec vos mots.
- **Carte de rappel** : 1. Repérer l'IA et l'expliquer simplement · 2. Elle reconnaît, prédit, produit · 3. Règle fixe : pas d'IA
- **Quiz** :
  1. Quelle phrase décrit le mieux une IA ? — A) Un robot qui pense comme un humain B) Un programme qui a appris à partir d'exemples C) Un site qui contient toutes les réponses D) Une machine réservée aux ingénieurs — **Réponse : B**
  2. Votre clavier propose « arrivés » après « Les nouveaux pagnes sont ». Quel geste de l'IA est-ce ? — A) Reconnaître B) Produire C) Prédire D) Aucun, c'est une règle fixe — **Réponse : C**
  3. Vous tapez « pagne » et la galerie retrouve vos photos de tissus. Quel geste de l'IA est-ce ? — A) Reconnaître B) Prédire C) Produire D) Traduire — **Réponse : A**
  4. La calculatrice de votre téléphone est-elle une IA ? — A) Oui, elle calcule très vite B) Oui, elle ne se trompe jamais C) Non, parce qu'elle est gratuite D) Non, elle suit des règles fixes — **Réponse : D**
  5. Un voisin vous dit : « L'IA, ce n'est pas pour nous. » Quelle réponse est juste ? — A) Il a raison, c'est pour les ingénieurs B) L'IA n'existe pas encore en Afrique C) Nous l'utilisons déjà : clavier, photos, assistants D) Seuls les ordinateurs contiennent de l'IA — **Réponse : C**
- **Marques citées** : Google Photos, Google Lens, Gemini, ChatGPT, Claude, WhatsApp.

#### Script

Durée estimée : 6:01 · Mots dits : 698

**[B1 — Accroche · 0:00–0:23]**

**[E · SITUATION]** « Grand Marché de Niamey » — VO : Aïcha, commerçante à Niamey, le jure : « L'IA ? Jamais. »
**[F · CAM A]** À la fin de cette leçon, vous saurez repérer l'IA et l'expliquer simplement. Car Aïcha se trompe. Elle utilise l'IA tous les jours, sur son téléphone. Comme beaucoup d'entre nous. Aujourd'hui, nous allons la trouver ensemble.
[PAUSE 1 s]

**[B2 — Cadrage · 0:23–1:03]**

**[F · CAM A]** Quand on dit « intelligence artificielle », beaucoup imaginent un robot. Ou une machine réservée aux ingénieurs. C'est un malentendu.
**[A · ÉCRAN]** *(clavier du téléphone : on tape « Je passe au marché », trois mots sont proposés au-dessus des touches)* — VO : Regardez le clavier de votre téléphone. Vous tapez un début de phrase. Il vous propose le mot suivant. Ce clavier a appris à partir d'énormément de textes. C'est déjà de l'IA. Pas de robot. Juste un programme qui a appris.
**[F · CAM A]** L'IA n'est donc pas un objet. C'est une façon de fabriquer des programmes. On les fait apprendre, au lieu de tout leur dicter.
[PAUSE 1 s]

**[B3 — Notion · 1:03–2:54]**

**[B · CARTE]** « 1. L'IA apprend à partir d'exemples » — VO : Première idée. Une IA est un programme qui apprend à partir d'exemples. On ne lui écrit pas toutes les règles. On lui montre beaucoup de cas, et elle en tire ses propres repères.
**[F · CAM B]** Pensez à un apprenti tailleur. Il regarde son patron coudre, encore et encore. Un jour, il coud seul. Personne ne lui a dicté chaque geste.
**[F · CAM A]** Dit autrement : un programme classique obéit à des règles. Une IA, elle, a appris par l'exemple. Et ce qu'elle apprend lui sert à faire trois gestes.
**[B · CARTE]** « 2. Elle reconnaît » — VO : Premier geste : reconnaître.
**[A · ÉCRAN]** *(Google Lens vise l'étiquette en anglais d'un rouleau de tissu ; le texte est lu, puis traduit en français)* — VO : Visez une étiquette en anglais avec Google Lens. Il lit le texte, puis le traduit. L'IA reconnaît les lettres dans l'image. Elle reconnaît aussi votre voix, quand vous dictez un message. Et parfois votre visage, quand le téléphone se déverrouille.
**[B · CARTE]** « 3. Elle prédit » — VO : Deuxième geste : prédire. Le clavier devine votre prochain mot. Votre application de vidéos devine ce que vous aimerez regarder. Votre boîte e-mail range seule les messages douteux dans les indésirables. Prédire, c'est deviner la suite la plus probable.
**[B · CARTE]** « 4. Elle produit » — VO : Troisième geste, le plus récent : produire.
**[A · ÉCRAN]** *(application Gemini : une question écrite, puis une réponse rédigée qui s'affiche)* — VO : Des assistants comme Gemini, ChatGPT ou Claude écrivent des textes. Ils répondent à vos questions, ils résument, ils traduisent. D'autres outils créent des images. On parle d'IA « générative ». Une IA qui génère, c'est-à-dire qui fabrique un contenu nouveau.
**[C · SCHÉMA]** « Reconnaître · Prédire · Produire » — VO : Retenez ces trois verbes : reconnaître, prédire, produire. C'est votre grille pour repérer l'IA partout.
[PAUSE 1 s]

**[B4 — Application · 2:54–4:40]**

**[F · CAM A]** Passons à la pratique, avec le téléphone d'Aïcha. Sa mission : trouver trois IA, et les classer avec nos trois verbes. Faites-le en même temps qu'elle, sur votre téléphone.
**[A · ÉCRAN]** *(Google Photos : la recherche « pagne » affiche les photos de tissus)* — VO : Étape un : la galerie photos. Aïcha tape « pagne » dans la recherche. Ses photos de tissus apparaissent, sans qu'elle les ait jamais classées. Verdict : l'IA reconnaît.
**[A · ÉCRAN]** *(WhatsApp, conversation « Cliente test » : « Les nouveaux pagnes sont », le clavier propose « arrivés »)* — VO : Étape deux : WhatsApp. Elle écrit à une cliente : « Les nouveaux pagnes sont… ». Le clavier propose « arrivés ». Verdict : l'IA prédit.
**[A · ÉCRAN]** *(application Gemini : appui sur le micro, la demande dictée s'écrit, puis la réponse s'affiche)* — VO : Étape trois : un assistant. Aïcha ouvre l'application Gemini, dans sa version gratuite. Elle appuie sur le micro et dicte sa demande. Elle lui demande d'être un formateur patient. Elle donne son métier, sa ville, et ce qu'elle veut comprendre. L'assistant rédige une réponse en cinq phrases. Verdict : l'IA produit.
**[G · CONSIGNE]** « Tu es un formateur patient. Je suis [votre métier] à [votre ville]. Explique-moi ce qu'est l'intelligence artificielle, avec un exemple tiré de mon quotidien. Réponds en 5 phrases simples, sans mots techniques. » — VO : Voici sa demande, à recopier. Une demande écrite à une IA s'appelle une consigne. En anglais, on dit « prompt ». Remplacez simplement les crochets par votre situation.
**[A · ÉCRAN]** *(application Notes : « Mes 3 IA — Galerie : reconnaît · Clavier : prédit · Gemini : produit »)* — VO : Étape quatre : Aïcha note son inventaire. Galerie : reconnaît. Clavier : prédit. Gemini : produit. Puis elle relit la réponse de l'assistant. Elle la trouve claire, et la redit avec ses propres mots. Trois IA dans un seul téléphone. Et le vôtre en cache sans doute d'autres.
[PAUSE 1 s]

**[B5 — Consolidation · 4:40–5:25]**

**[F · CAM A]** À vous de prédire, maintenant. La calculatrice de votre téléphone : est-ce de l'IA ?
**[B · CARTE]** « La calculatrice : IA ou pas ? » [SILENCE 2 s]
**[F · CAM A]** Non. La calculatrice suit des règles fixes, écrites par des programmeurs. Deux plus deux donnent toujours quatre. Elle n'a rien appris d'exemples. Elle ne devine rien.
**[F · CAM B]** Et le réveil qui sonne à six heures ? Pas d'IA non plus. Il suit une règle : l'heure que vous avez choisie. Le réveil obéit. Le clavier, lui, a appris.
**[B · CARTE]** « Règle fixe : pas d'IA · Appris d'exemples : IA » — VO : Voilà votre test. Une règle fixe, ce n'est pas de l'IA. Un programme qui a appris d'exemples, si.
[PAUSE 1 s]

**[B6 — Clôture · 5:25–6:01]**

**[F · CAM A]** Revenons à Aïcha. Ce soir, son neveu lui demande ce qu'est l'IA. Elle répond sans hésiter : « Un programme qui a appris d'exemples. Il reconnaît, il prédit ou il produit. »
**[B · CARTE DE RAPPEL]** « 1. Repérer l'IA et l'expliquer simplement » « 2. Elle reconnaît, prédit, produit » « 3. Règle fixe : pas d'IA » — VO : À retenir. Vous savez repérer l'IA et l'expliquer simplement. Elle reconnaît, prédit, produit. Et une règle fixe, ce n'est pas de l'IA.
**[F · CAM A]** Dans la prochaine leçon, nous verrons comment une IA apprend. D'ici là, un petit exercice. Faites l'inventaire des IA de votre téléphone.

#### Liste des plans

| # | Type | Cadre / source | Contenu | Durée | Notes |
|---|---|---|---|---|---|
| 1 | E | Photo réelle d'une allée de tissus du Grand Marché (sans visage reconnaissable) + illustration d'Aïcha à son étal | « L'IA ? Jamais. » | 5 s | Aïcha en illustration simple, jamais en visage photoréaliste généré |
| 2 | F | CAM A, plan poitrine centré | Promesse, puis « Aïcha se trompe » | 17 s | Promesse terminée avant 0:12 |
| 3 | F | CAM A, tiers gauche | Malentendu du robot, puis « une façon de fabriquer des programmes » | 18 s | Deux passages, même axe |
| 4 | A | Capture téléphone | Clavier : « Je passe au marché » et trois mots proposés | 18 s | Cadre sur la barre de suggestions |
| 5 | B | Carte | « 1. L'IA apprend à partir d'exemples » | 13 s | Reste à l'écran pendant toute la phrase |
| 6 | F | CAM B, trois quarts | L'apprenti tailleur | 9 s | Relance visuelle |
| 7 | F | CAM A, tiers gauche | « Dit autrement… trois gestes » | 10 s | |
| 8 | B + A | Carte « 2. Elle reconnaît » puis capture Google Lens | Étiquette en anglais lue, puis traduite | 17 s | Étiquette réelle du rouleau ; cadre sur la traduction |
| 9 | B | Carte « 3. Elle prédit » + trois pictogrammes | Mot suivant · vidéo suivante · message douteux | 18 s | Pictogrammes révélés un par un |
| 10 | B + A | Carte « 4. Elle produit » puis capture Gemini | Une question, une réponse rédigée | 22 s | Masquer l'adresse du compte |
| 11 | C | Schéma | « Reconnaître · Prédire · Produire » | 8 s | Trois pastilles qui s'allument au rythme de la voix |
| 12 | A + G | Captures téléphone (Photos, WhatsApp, Gemini, Notes) + carte de consigne | Inventaire d'Aïcha en quatre étapes ; consigne à recopier | 108 s | Coche + verdict à chaque étape ; carte G au moins 8 s |
| 13 | F + B + A | CAM A, carte question, CAM B, carte test ; capture de la calculatrice du téléphone | Prédiction, silence, réponse, réveil | 45 s | Silence de 2 s regard caméra ; capture calculatrice pour la couverture |
| 14 | F + B | CAM A centré, carte de rappel, CAM A | Aïcha et son neveu, rappel, exercice | 30 s | Points révélés au rythme de la voix, au moins 4 s ensemble |
| 15 | F | CAM B, inserts serrés | Mains qui tapent sur le téléphone ; mains qui plient un pagne | 25 s de rushes | Plans de couverture (montage et versions doublées) |

#### Montage idéal

| Temps | Timecode cible | Image principale | Habillage (motion graphics) | Texte à l'écran | Son | Transition |
|---|---|---|---|---|---|---|
| B1 | 0:00–0:23 | Plan E, puis CAM A centré | Bandeau de lieu sur le plan E | « Grand Marché de Niamey » | voix seule | coupe |
| B2 | 0:23–1:03 | CAM A, capture du clavier, CAM A | Cadre sur la barre de suggestions | aucun hors sous-titres | voix seule | coupe ; la capture entre par un fondu court |
| B3 | 1:03–2:54 | Cartes 1 à 4, CAM A et B, captures Lens et Gemini, schéma | Cartes numérotées, pictogrammes, schéma à trois pastilles | Titres des quatre unités | voix seule | coupes ; une seule transition plein cadre, vers le schéma |
| B4 | 2:54–4:40 | Captures du téléphone en séquence | Coche et verdict (« reconnaît », « prédit », « produit ») à chaque étape ; carte G | Verdicts ; consigne complète | voix seule | coupe à chaque changement d'application |
| B5 | 4:40–5:25 | CAM A, carte question, CAM A, CAM B, carte test | Carte question ; carte « Règle fixe : pas d'IA · Appris d'exemples : IA » | « La calculatrice : IA ou pas ? » | voix, puis 2 s de silence total | coupe sèche après le silence |
| B6 | 5:25–6:01 | CAM A centré, carte de rappel, CAM A | Carte de rappel | Trois points de rappel | voix seule | coupe, puis carte de clôture (Partie 1) |

**Notes de montage** : un changement d'image toutes les 4 à 8 secondes, sans effet gratuit ; en B4, laisser l'action du téléphone dicter le rythme. Couper les hésitations, les redites et les « euh », mais garder la respiration avant la promesse et le sourire après « Aïcha se trompe ». Zoom lent sur capture limité à 6 %, une annotation à la fois. Captures verticales placées à droite du cadre : les sous-titres restent sous la colonne de gauche ; pendant le plan clavier, remonter les sous-titres au-dessus de la capture. Plans de couverture disponibles : plan 15 (inserts), plan 6 (CAM B), capture de la calculatrice.

#### Versions EN / HA / DJE

- **À re-filmer dans la langue** (≤ 40 s au total, l'owner face caméra) : B1, `[F · CAM A]` (environ 17 s) : « À la fin de cette leçon, vous saurez repérer l'IA et l'expliquer simplement. Car Aïcha se trompe. Elle utilise l'IA tous les jours, sur son téléphone. Comme beaucoup d'entre nous. Aujourd'hui, nous allons la trouver ensemble. » · B6, dernier `[F · CAM A]` (environ 9 s) : « Dans la prochaine leçon, nous verrons comment une IA apprend. D'ici là, un petit exercice. Faites l'inventaire des IA de votre téléphone. »
- **Doublé en voix clonée** : B2 « Quand on dit… malentendu » → plan 15 (mains sur le téléphone) · B2 « L'IA n'est donc pas un objet… » → plan 4 prolongé · B3 apprenti tailleur → plan 15 (mains qui plient un pagne) · B3 « Dit autrement… » → plan 5 prolongé · B4 « Passons à la pratique… » → plan 12, écran d'accueil du téléphone · B5 question et réponse → carte question puis capture de la calculatrice · B5 réveil → carte test · B6 « Revenons à Aïcha… » → plan 15, puis carte de rappel.
- **Notes d'adaptation** : « pagne » et « bazin » : employer les mots courants de chaque langue, validés par le traducteur. Choisir avec le traducteur un terme stable pour « IA » en haoussa et en zarma, puis le garder dans tout le cours. Les captures restent en français : la voix dit le sens (« le clavier propose le mot suivant ») sans lire le mot affiché. En anglais, « consigne » se dit simplement « prompt » : supprimer la phrase « En anglais, on dit prompt ». L'image de l'apprenti tailleur fonctionne dans les trois langues.

### Leçon 2 — Comment une IA apprend (`is2`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez expliquer comment une IA apprend. »
- **Cas réel (B1 → B6)** : Moussa, 21 ans, étudiant en licence à l'université de Thiès (Sénégal), veut devenir conseiller agricole ; sa famille cultive du mil et de l'oignon dans la zone des Niayes. Sa petite sœur Fatou lui a demandé comment le clavier « devine » ses mots, et il n'a pas su répondre. Pour lui, soit c'est magique, soit quelqu'un a tout programmé. Enjeu : sans comprendre, on croit l'IA sur parole, ou on la rejette en bloc. En B6, Moussa a entraîné sa propre mini-IA en salle informatique et explique le clavier à Fatou avec ses mots.
- **Unités de notion (B3)** : 1. Des exemples, avec la bonne réponse — on montre à la machine beaucoup d'exemples accompagnés de la bonne réponse ; cette période s'appelle l'entraînement. · 2. Elle trouve ses propres repères — pendant l'entraînement, elle repère seule les régularités qui distinguent les cas. · 3. Elle prédit la réponse la plus probable — face à un cas nouveau, elle calcule la réponse la plus probable ; un assistant prédit ainsi la suite d'un texte. · 4. La qualité dépend des exemples — peu d'exemples, ou de mauvais exemples, donnent de mauvaises prédictions ; d'où des résultats plus faibles dans nos langues. *Simplification assumée : un assistant prédit par petits morceaux de mots, pas par mots entiers ; le module `intelligence-artificielle` (c2) détaille.*
- **Démo (B4)** : Teachable Machine (Google), gratuit, dans Chrome, sur l'ordinateur de démonstration, sans compte [à vérifier au moment du tournage : disponibilité du site, libellés exacts des boutons, absence de connexion obligatoire]. 1. Ouvrir le site, « Get Started », puis « Image Project », puis « Standard image model ». 2. Renommer « Class 1 » en « Oignon » ; « Webcam » ; maintenir « Hold to Record » en tournant l'oignon violet devant la caméra, sur fond uni : des dizaines d'images s'ajoutent. 3. Renommer « Class 2 » en « Tomate » ; même geste. 4. « Train Model » ; attendre la fin, onglet ouvert. 5. « Preview » : l'oignon fait monter la barre « Oignon », la tomate la barre « Tomate ». Résultat attendu à l'écran : la mini-IA reconnaît les deux légumes en direct. Garder le même fond et la même lumière entre l'enregistrement et le test.
- **Consolidation (B5)** : prédiction. « Moussa montre une pomme de terre à sa mini-IA. Que répond-elle ? » Réponse : « oignon » ou « tomate », jamais « pomme de terre » ; elle ne connaît que ce qu'on lui a montré, et elle répond quand même. Faire le test avant le tournage ; la voix off couvre les deux cas.
- **Consigne à copier** :

```text
Tu es un professeur patient.
Je suis [votre métier ou vos études] à [votre ville], et je découvre l'intelligence artificielle.
Explique-moi comment une IA apprend, avec un exemple pris au marché de ma ville. Ensuite, pose-moi 3 questions, une par une, pour vérifier que j'ai compris.
Réponds avec des mots simples, comme à un élève de 12 ans.
```

- **Exercice** : « Jouez au jeu de la prédiction » — 1. Dans votre application de notes, tapez « Demain, je », puis touchez dix fois de suite le mot proposé au milieu par le clavier [à vérifier au moment du tournage : la place des suggestions varie selon les claviers]. 2. Lisez la phrase obtenue : elle montre ce que votre clavier a appris. 3. Écrivez en deux phrases comment une IA apprend, puis expliquez-le à quelqu'un. 4. Bonus, avec un ordinateur et une webcam : entraînez une mini-IA sur Teachable Machine avec deux objets de chez vous.
- **Carte de rappel** : 1. Expliquer comment une IA apprend · 2. Des exemples, pas des règles · 3. Elle prédit le plus probable
- **Quiz** :
  1. Comment une IA apprend-elle à reconnaître un oignon ? — A) Un programmeur écrit la définition d'un oignon B) Elle cherche « oignon » sur Internet à chaque fois C) On lui montre beaucoup de photos marquées « oignon » D) Elle le devine sans aucun exemple — **Réponse : C**
  2. Comment appelle-t-on la période où l'IA étudie ses exemples ? — A) L'entraînement B) La prédiction C) La traduction D) La sauvegarde — **Réponse : A**
  3. Quand un assistant comme ChatGPT vous répond, que fait-il ? — A) Il recopie une page web B) Il demande à un humain C) Il consulte une liste de règles D) Il prédit la suite la plus probable — **Réponse : D**
  4. La mini-IA de Moussa ne connaît que « oignon » et « tomate ». Il lui montre une pomme de terre. Que répond-elle ? — A) « Oignon » ou « tomate » B) « Pomme de terre » C) « Je ne sais pas » D) Rien du tout — **Réponse : A**
  5. Pourquoi une IA est-elle souvent moins bonne en zarma qu'en français ? — A) Le zarma est trop difficile B) Elle a vu beaucoup moins d'exemples en zarma C) Elle refuse les langues africaines D) Le zarma ne s'écrit pas — **Réponse : B**
- **Marques citées** : Teachable Machine (Google), Chrome, ChatGPT.

#### Script

Durée estimée : 5:55 · Mots dits : 685

**[B1 — Accroche · 0:00–0:29]**

**[E · SITUATION]** « Thiès, salle informatique » — VO : Moussa, étudiant à Thiès, se demande comment une machine peut apprendre.
**[F · CAM A]** À la fin de cette leçon, vous saurez expliquer comment une IA apprend. La petite sœur de Moussa lui a demandé comment le clavier devine ses mots. Dans la première leçon, vous avez repéré l'IA autour de vous. Aujourd'hui, Moussa va entraîner sa propre IA, sans programmer.
[PAUSE 1 s]

**[B2 — Cadrage · 0:29–1:09]**

**[F · CAM A]** Beaucoup pensent que l'IA a un cerveau, comme nous. D'autres pensent qu'un programmeur lui a tout écrit, règle par règle. Les deux idées sont fausses.
**[F · CAM B]** *(Idriss tient un oignon violet et une tomate, insert serré sur les mains)* Regardez. Comment savez-vous que ceci est un oignon ? Personne ne vous a donné de définition. Enfant, vous en avez vu beaucoup, au marché, à la cuisine. Vous avez appris par l'exemple.
**[F · CAM A]** L'IA apprend un peu de la même façon. Avec une grande différence : pour apprendre à partir de rien, il lui faut énormément d'exemples.
[PAUSE 1 s]

**[B3 — Notion · 1:09–3:02]**

**[B · CARTE]** « 1. Des exemples, avec la bonne réponse » — VO : Première étape : les exemples. On montre à la machine beaucoup de photos d'oignons, chacune marquée « oignon ». Et beaucoup de photos de tomates, marquées « tomate ».
**[C · SCHÉMA]** « Exemples → Entraînement → Prédiction » — VO : Cette période où la machine étudie ses exemples s'appelle l'entraînement. Dit autrement : l'entraînement, c'est l'école de l'IA.
**[B · CARTE]** « 2. Elle trouve ses propres repères » — VO : Deuxième étape : les repères. Personne ne dit à la machine : « regarde la couleur ». Elle compare les exemples, encore et encore. Elle trouve seule ce qui distingue un oignon d'une tomate. Ce sont des régularités, pas des règles écrites. Autrement dit : des habitudes qu'elle a remarquées.
**[B · CARTE]** « 3. Elle prédit la réponse la plus probable » — VO : Troisième étape : la prédiction. On lui montre une photo qu'elle n'a jamais vue. Elle ne « sait » pas. Elle calcule la réponse la plus probable. Par exemple : oignon, avec une forte confiance.
**[F · CAM A]** Les assistants comme ChatGPT suivent le même principe. Ils ont été entraînés sur d'énormes quantités de textes. Quand ils vous répondent, ils prédisent la suite. Une réponse entière se construit ainsi, mot après mot.
**[C · SCHÉMA]** « Ce soir, nous mangeons du… tô ? riz ? pain ? » — VO : Par exemple : « Ce soir, nous mangeons du… ». Tô ? Riz ? Pain ? L'assistant choisit la suite la plus probable. Puis il recommence, pour le mot suivant.
**[B · CARTE]** « 4. La qualité dépend des exemples » — VO : Dernière idée, la plus importante. Une IA ne vaut que ce que valent ses exemples. Peu d'exemples, ou de mauvais exemples : de mauvaises prédictions.
**[F · CAM A]** C'est pour cela que l'IA est souvent moins bonne dans nos langues. Elle a vu beaucoup moins de textes en wolof ou en zarma qu'en français. Retenez-le : nous en reparlerons.
[PAUSE 1 s]

**[B4 — Application · 3:02–4:38]**

**[F · CAM A]** Passons à la pratique. Moussa ouvre Teachable Machine, un outil gratuit de Google, sur l'ordinateur de la salle informatique. Pas besoin de compte.
**[A · ÉCRAN]** *(Teachable Machine : page d'accueil, « Get Started », « Image Project », « Standard image model »)* — VO : Il choisit un projet d'images. Le site est en anglais, mais trois clics suffisent.
**[A · ÉCRAN]** *(première catégorie renommée « Oignon » ; bouton « Webcam » ; l'oignon tourne devant la caméra, les images s'ajoutent)* — VO : Étape un : les exemples. Il nomme la première catégorie « Oignon ». Il allume la webcam. Il maintient le bouton, et tourne l'oignon devant la caméra. Des dizaines de photos s'ajoutent. Il varie les angles : de face, de côté, de près.
**[A · ÉCRAN]** *(deuxième catégorie « Tomate », même geste avec la tomate)* — VO : Même geste pour la deuxième catégorie : « Tomate ». Autant d'exemples, même fond, même lumière.
**[A · ÉCRAN]** *(bouton « Train Model », barre de progression)* — VO : Étape deux : l'entraînement. Un clic sur « Train Model ». La machine étudie les exemples et cherche ses repères. Moussa laisse l'onglet ouvert.
**[A · ÉCRAN]** *(aperçu « Preview » : l'oignon devant la caméra, la barre « Oignon » se remplit ; puis la tomate, la barre « Tomate »)* — VO : Étape trois : la prédiction. Moussa montre l'oignon. La barre « Oignon » se remplit presque entièrement. Il montre la tomate. La barre « Tomate » prend le dessus. Sa mini-IA reconnaît les deux, en direct.
**[F · CAM A]** Pourquoi si peu d'exemples suffisent-ils ici ? Parce que Teachable Machine part d'une IA qui a déjà vu énormément d'images. Moussa lui apprend seulement la différence entre ses deux légumes.
[PAUSE 1 s]

**[B5 — Consolidation · 4:38–5:18]**

**[F · CAM A]** Maintenant, prédisez. Moussa montre une pomme de terre à sa mini-IA. Que va-t-elle répondre ?
**[B · CARTE]** « Une pomme de terre : que répond la mini-IA ? » [SILENCE 2 s]
**[A · ÉCRAN]** *(la pomme de terre devant la webcam ; l'une des deux barres monte)* — VO : Elle répond « oignon », ou « tomate ». Jamais « pomme de terre ». Elle ne connaît que ce qu'on lui a montré. Elle n'a pas de case « je ne sais pas ». Alors elle répond quand même, parfois avec assurance.
**[F · CAM A]** Gardez cette image en tête. Un assistant, lui aussi, prédit toujours une suite. Parfois, cette suite est fausse. Nous y reviendrons dans la leçon sur les limites.
[PAUSE 1 s]

**[B6 — Clôture · 5:18–5:55]**

**[F · CAM A]** Le soir, Moussa retrouve Fatou, sa petite sœur. Il lui explique : « Le clavier a appris avec énormément de messages. Maintenant, il devine ton prochain mot. » Fatou essaie aussitôt sur son téléphone.
**[B · CARTE DE RAPPEL]** « 1. Expliquer comment une IA apprend » « 2. Des exemples, pas des règles » « 3. Elle prédit le plus probable » — VO : À retenir. Vous savez expliquer comment une IA apprend. Avec des exemples, pas des règles. Puis elle prédit le plus probable.
**[F · CAM A]** Dans la prochaine leçon, vous parlerez vous-même à une IA. Avant cela, testez votre clavier. Jouez au jeu de la prédiction.

#### Liste des plans

| # | Type | Cadre / source | Contenu | Durée | Notes |
|---|---|---|---|---|---|
| 1 | E | Illustration : Moussa devant un ordinateur, salle informatique d'université | « Comment une machine peut apprendre ? » | 5 s | Illustration simple, pas de photo d'un vrai lieu identifiable |
| 2 | F | CAM A, plan poitrine centré | Promesse, la question de la petite sœur, rappel de la leçon 1 | 23 s | Promesse terminée avant 0:12 |
| 3 | F | CAM A, tiers gauche | Malentendu : cerveau ou règles écrites | 11 s | |
| 4 | F | CAM B, insert serré sur les mains | Oignon violet et tomate tenus face caméra | 15 s | Légumes réels, fond du décor ; rushes longs pour la couverture |
| 5 | F | CAM A, tiers gauche | « Il lui faut énormément d'exemples » | 9 s | |
| 6 | B + C | Carte 1 puis schéma « Exemples → Entraînement → Prédiction » | Photos étiquetées, puis l'école de l'IA | 24 s | Grille de photos d'oignons et de tomates prises par l'équipe |
| 7 | B | Carte « 2. Elle trouve ses propres repères » | Comparaison couleur, forme, peau | 20 s | Pictogrammes révélés un par un |
| 8 | B | Carte « 3. Elle prédit la réponse la plus probable » | Photo inconnue, réponse « oignon » avec une jauge sans chiffre | 15 s | Jauge sans pourcentage affiché |
| 9 | F + C | CAM A, puis schéma plein cadre | Assistants ; « Ce soir, nous mangeons du… tô ? riz ? pain ? » | 25 s | Trois mots candidats, le plus probable surligné |
| 10 | B + F | Carte 4 puis CAM A | La qualité dépend des exemples ; nos langues | 22 s | |
| 11 | F | CAM A | Introduction de la démo Teachable Machine | 8 s | |
| 12 | A | Capture ordinateur (Chrome, Teachable Machine) | Accueil, catégories « Oignon » et « Tomate », webcam, entraînement, aperçu | 85 s | Une annotation à la fois : cadre sur chaque bouton cliqué |
| 13 | F | CAM A | « Pourquoi si peu d'exemples suffisent-ils ? » | 12 s | |
| 14 | F + B + A | CAM A, carte question, capture de l'aperçu avec la pomme de terre, CAM A | Prédiction, silence, réponse, lien avec les limites | 45 s | Silence de 2 s regard caméra |
| 15 | F + B | CAM A centré, carte de rappel, CAM A | Moussa et sa sœur, rappel, exercice | 30 s | Points révélés au rythme de la voix |

#### Montage idéal

| Temps | Timecode cible | Image principale | Habillage (motion graphics) | Texte à l'écran | Son | Transition |
|---|---|---|---|---|---|---|
| B1 | 0:00–0:29 | Plan E, puis CAM A centré | Bandeau de lieu | « Thiès, salle informatique » | voix seule | coupe |
| B2 | 0:29–1:09 | CAM A, insert mains (CAM B), CAM A | aucun | aucun hors sous-titres | voix seule | coupe franche sur l'insert |
| B3 | 1:09–3:02 | Cartes 1 à 4, schémas, CAM A | Grille de photos étiquetées ; flèche « Exemples → Entraînement → Prédiction » ; mots candidats | Titres des unités ; « tô ? riz ? pain ? » | voix seule | coupes ; une transition plein cadre vers le schéma des mots candidats |
| B4 | 3:02–4:38 | Capture Teachable Machine | Cadre sur chaque bouton ; étiquettes « Étape 1 · 2 · 3 » | « Exemples », « Entraînement », « Prédiction » | voix seule | coupe à chaque étape ; accélérer l'attente de l'entraînement (fondu « quelques instants plus tard ») |
| B5 | 4:38–5:18 | CAM A, carte question, capture pomme de terre, CAM A | Carte question | « Une pomme de terre : que répond la mini-IA ? » | voix, puis 2 s de silence total | coupe sèche après le silence |
| B6 | 5:18–5:55 | CAM A centré, carte de rappel, CAM A | Carte de rappel | Trois points de rappel | voix seule | coupe, puis carte de clôture (Partie 1) |

**Notes de montage** : B3 est la partie la plus abstraite : changer d'image toutes les 5 secondes environ, en s'appuyant sur les photos réelles d'oignons et de tomates. Couper les hésitations ; garder le petit temps après « Regardez. » pendant que les mains montrent les légumes. Ne jamais afficher de pourcentage : sur les captures de Teachable Machine, masquer ou flouter les chiffres et ne garder que les barres. Zoom sur capture limité à 6 % ; sur l'ordinateur, la capture est en 16:9 plein cadre : sous-titres dans le bandeau bas, sur plaque sombre. Plans de couverture : plan 4 (rushes longs), plan 12, cartes.

#### Versions EN / HA / DJE

- **À re-filmer dans la langue** (≤ 40 s au total, l'owner face caméra) : B1, `[F · CAM A]` (environ 22 s) : « À la fin de cette leçon, vous saurez expliquer comment une IA apprend. La petite sœur de Moussa lui a demandé comment le clavier devine ses mots. Dans la première leçon, vous avez repéré l'IA autour de vous. Aujourd'hui, Moussa va entraîner sa propre IA, sans programmer. » · B6, dernier `[F · CAM A]` (environ 8 s) : « Dans la prochaine leçon, vous parlerez vous-même à une IA. Avant cela, testez votre clavier. Jouez au jeu de la prédiction. »
- **Doublé en voix clonée** : B2 « Beaucoup pensent… » et « L'IA apprend un peu de la même façon… » → plan 4 (mains et légumes) · B3 « Les assistants comme ChatGPT… » → schéma des mots candidats (plan 9) en plein cadre · B3 « C'est pour cela que l'IA est souvent moins bonne… » → carte 4 prolongée · B4 introduction et « Pourquoi si peu d'exemples… » → plan 12 (accueil, puis aperçu) · B5 question → carte question ; B5 « Gardez cette image en tête… » → capture de la pomme de terre prolongée · B6 « Le soir, Moussa… » → plan 4, puis carte de rappel.
- **Notes d'adaptation** : la phrase « Ce soir, nous mangeons du… » se réécrit dans chaque langue pour garder un vrai jeu de prédiction, avec un plat courant (« tô » en français du Niger, « tuwo » en haoussa ; en zarma, le mot courant validé par le traducteur) ; le schéma est relocalisé. Pour les versions HA et DJE, la phrase sur le wolof et le zarma reste vraie mais se dit avec tact : la langue n'est pas « faible », ce sont les données qui manquent. Teachable Machine se prononce à l'anglaise. Le site reste en anglais à l'écran : la voix décrit le geste, pas le libellé.

### Leçon 3 — Votre première conversation avec un assistant IA (`is3`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez dialoguer avec un assistant IA. »
- **Cas réel (B1 → B6)** : Hadiza, agente à la mairie de Garoua (Cameroun), chargée de l'information aux habitants, de langue maternelle haoussa. Samedi, la mairie organise une journée de salubrité dans un quartier, avec vingt volontaires (cas fictif). Elle doit répartir les tâches et prévenir les habitants. Elle n'a jamais parlé à une IA, elle a peu de temps et préfère parler qu'écrire. Enjeu : un samedi bien organisé, des habitants bien informés. En B6, depuis son téléphone et à la voix, elle a une liste de cinq tâches et un message d'invitation prêt ; elle le relira avant de l'envoyer (suite en leçon 6).
- **Unités de notion (B3)** : 1. Un assistant gratuit suffit pour commencer — Gemini, ChatGPT, Claude et Copilot ont une version gratuite ; il faut un compte ; un seul assistant suffit. · 2. Écrire, dicter ou parler — taper, dicter avec le micro (le texte s'écrit et se relit), ou converser à la voix en direct ; en 3G, l'écrit et la dictée consomment moins de données. · 3. Relancer : la conversation continue — dans une même conversation, l'assistant tient compte de ce qui précède ; on relance pour raccourcir, préciser, corriger. [à vérifier au moment du tournage : disponibilité de Meta AI dans WhatsApp au Cameroun, au Niger et au Sénégal]
- **Démo (B4)** : téléphone Android de démonstration, application Gemini, version gratuite [à vérifier au moment du tournage : disponibilité de Gemini et de la saisie vocale en français au Cameroun, au Niger et au Sénégal, nom et place du bouton micro]. 1. Ouvrir Gemini, nouvelle conversation. 2. Appuyer sur le micro et dicter : « Je travaille à la mairie de Garoua. Samedi, nous organisons une journée de salubrité dans un quartier, avec vingt volontaires. Aide-moi à préparer la liste des tâches. » 3. Laisser la réponse s'afficher en entier. 4. Relance dictée : « Plus court : cinq tâches au maximum, une phrase chacune. » 5. Relance dictée : « Maintenant, écris un message WhatsApp pour inviter les habitants. Rendez-vous samedi à sept heures, devant l'école du quartier. Ton simple et chaleureux. » 6. Copier le message ; ouvrir WhatsApp, « Groupe quartier (test) », coller sans envoyer. Résultat attendu à l'écran : la liste de cinq tâches dans Gemini, puis le message collé dans WhatsApp. Pour B3, capturer aussi le mode de conversation vocale en direct de Gemini [à vérifier au moment du tournage : nom actuel du mode et accès en version gratuite].
- **Consolidation (B5)** : prédiction. « Quelle est la date de la prochaine journée de salubrité à Garoua ? » Réponse : l'assistant ne peut pas le savoir, la date n'a été publiée nulle part ; soit il le dit, soit il invente une date plausible. Les faits locaux viennent de vous.
- **Consigne à copier** :

```text
Tu es un assistant organisé et pratique.
Je travaille comme [votre métier] à [votre ville]. Je dois [votre tâche, par exemple : organiser une réunion samedi].
Aide-moi à préparer les étapes de cette tâche.
Réponds par une liste de 5 étapes simples. Si une information te manque, pose-moi d'abord une question.
```

- **Exercice** : « Tenez votre première conversation avec un assistant » — 1. Ouvrez un assistant gratuit (Gemini, ChatGPT, Claude ou Copilot) et connectez-vous. 2. Dictez la consigne de la leçon, avec votre propre tâche. 3. Relancez au moins deux fois : « plus court », « donne un exemple ». 4. Copiez le résultat dans vos notes, puis notez une chose utile et une chose à corriger.
- **Carte de rappel** : 1. Dialoguer avec un assistant IA · 2. Parlez en phrases, puis relancez · 3. Apportez vos faits locaux
- **Quiz** :
  1. Quelle est la différence entre un assistant IA et un moteur de recherche ? — A) Aucune B) Un assistant ne fonctionne qu'en anglais C) Avec un assistant, on dialogue en phrases complètes et on relance D) Un moteur de recherche écrit des textes à votre place — **Réponse : C**
  2. Hadiza tape seulement « salubrité Garoua ». Que risque-t-elle d'obtenir ? — A) Une réponse générale, peu utile B) La date exacte de la prochaine journée C) Un message prêt à envoyer D) La liste de ses volontaires — **Réponse : A**
  3. La liste proposée par l'assistant est trop longue. Que faites-vous ? — A) Vous fermez l'application B) Vous recopiez tout à la main C) Vous changez de téléphone D) Vous relancez : « Plus court, cinq tâches au maximum. » — **Réponse : D**
  4. Hadiza demande la date de la prochaine journée de salubrité, qui n'a été publiée nulle part. Que peut faire l'assistant ? — A) Donner la date officielle B) Dire qu'il ne sait pas, ou inventer une date plausible C) Appeler la mairie D) Lire les affiches du quartier — **Réponse : B**
  5. Dans une même conversation, que se passe-t-il quand vous relancez ? — A) L'assistant tient compte de ce qui a été dit avant B) L'assistant oublie tout C) Il faut tout répéter depuis le début D) L'assistant change de langue — **Réponse : A**
- **Marques citées** : Gemini, ChatGPT, Claude, Copilot, Meta AI, WhatsApp, Google Play, Android, iPhone.

#### Script

Durée estimée : 6:04 · Mots dits : 703

**[B1 — Accroche · 0:00–0:30]**

**[E · SITUATION]** « Garoua, la mairie » — VO : Hadiza, agente municipale à Garoua, n'a jamais parlé à une IA.
**[F · CAM A]** À la fin de cette leçon, vous saurez dialoguer avec un assistant IA. Vous savez maintenant qu'une IA prédit la suite la plus probable. Aujourd'hui, vous allez lui parler. Hadiza organise samedi une journée de salubrité. Vingt volontaires, un quartier, des habitants à prévenir. Et très peu de temps.
[PAUSE 1 s]

**[B2 — Cadrage · 0:30–1:07]**

**[F · CAM A]** Beaucoup utilisent un assistant comme un moteur de recherche. Ils tapent deux mots, et attendent.
**[A · ÉCRAN]** *(Gemini : « salubrité Garoua » tapé seul ; une réponse générale s'affiche)* — VO : Regardez. « Salubrité Garoua ». La réponse est générale. Elle ne sait rien de votre samedi.
**[F · CAM A]** Un assistant n'est pas un moteur de recherche. C'est un programme avec qui l'on dialogue, comme avec une personne. Vous parlez en phrases. Vous donnez votre situation. Les fautes d'orthographe ne le gênent pas beaucoup. Et vous pouvez le relancer, autant que nécessaire.
[PAUSE 1 s]

**[B3 — Notion · 1:07–2:54]**

**[B · CARTE]** « 1. Un assistant gratuit suffit pour commencer » — VO : Première idée : choisir un assistant. Gemini, ChatGPT, Claude, Copilot : tous ont une version gratuite. Tous comprennent le français. Selon les pays, Meta AI existe aussi dans WhatsApp.
**[A · ÉCRAN]** *(boutique d'applications : les fiches de Gemini, ChatGPT, Claude et Copilot)* — VO : Ces applications existent sur Android et sur iPhone. Il vous faut un compte, souvent votre adresse e-mail ou votre compte Google. Un seul assistant suffit pour commencer. Choisissez celui qui marche bien sur votre téléphone.
**[B · CARTE]** « 2. Écrire, dicter ou parler » — VO : Deuxième idée : trois façons de demander. Vous pouvez écrire. Vous pouvez dicter : appuyez sur le micro, parlez, et le texte s'écrit. Vous relisez avant d'envoyer. C'est pratique quand on marche, ou quand on écrit mal sur un petit écran.
**[A · ÉCRAN]** *(Gemini : le mode de conversation vocale en direct, l'écran s'anime pendant qu'on parle)* — VO : Vous pouvez aussi converser à la voix, en direct, comme au téléphone. C'est très naturel. Mais avec un petit forfait, attention : la conversation vocale consomme plus de données que l'écrit. En trois G, préférez la dictée.
**[B · CARTE]** « 3. Relancer : la conversation continue » — VO : Troisième idée, la plus utile : relancer. Dans une même conversation, l'assistant se souvient de ce que vous avez dit. Vous pouvez donc corriger, sans tout répéter.
**[F · CAM A]** Dites-lui : « Plus court. » « Plus simple. » « Donne un exemple. » « Explique-moi ce mot. » Vous pouvez même lui demander : « Pose-moi des questions. » Dit autrement : la première réponse est un brouillon. C'est vous qui la faites grandir, comme avec un collègue.
**[F · CAM B]** Une précaution : pour un nouveau sujet, ouvrez une nouvelle conversation. Vos échanges restent ainsi clairs et bien rangés.
[PAUSE 1 s]

**[B4 — Application · 2:54–4:41]**

**[F · CAM A]** Suivons Hadiza. Elle ouvre Gemini sur son téléphone Android. Elle parle, elle ne tape pas.
**[A · ÉCRAN]** *(Gemini : appui sur le micro, la demande dictée s'écrit à l'écran)* — VO : Elle appuie sur le micro et dicte : « Je travaille à la mairie de Garoua. Samedi, nous organisons une journée de salubrité dans un quartier, avec vingt volontaires. Aide-moi à préparer la liste des tâches. »
**[A · ÉCRAN]** *(la réponse : une longue liste de tâches)* — VO : La réponse arrive : une liste complète. Utile, mais trop longue pour des volontaires.
**[A · ÉCRAN]** *(relance dictée : « Plus court : cinq tâches au maximum, une phrase chacune. » ; nouvelle liste)* — VO : Première relance : « Plus court : cinq tâches au maximum, une phrase chacune. » L'assistant n'a pas oublié la journée de salubrité. Il raccourcit. Vous voyez ? Hadiza n'a rien répété.
**[A · ÉCRAN]** *(relance dictée sur le message d'invitation ; le message s'affiche)* — VO : Deuxième relance : « Maintenant, écris un message WhatsApp pour inviter les habitants. Rendez-vous samedi à sept heures, devant l'école du quartier. Ton simple et chaleureux. » Remarquez : l'heure et le lieu viennent de Hadiza. Pas de l'IA.
**[A · ÉCRAN]** *(appui sur « Copier » ; WhatsApp, « Groupe quartier (test) » ; le message collé, pas encore envoyé)* — VO : Elle copie le message et le colle dans WhatsApp. Elle ne l'envoie pas encore : elle le relira d'abord.
**[G · CONSIGNE]** « Tu es un assistant organisé et pratique. Je travaille comme [votre métier] à [votre ville]. Je dois [votre tâche]. Aide-moi à préparer les étapes de cette tâche. Réponds par une liste de 5 étapes simples. Si une information te manque, pose-moi d'abord une question. » — VO : Voici la consigne de départ, à adapter. Elle donne à l'assistant un rôle, votre situation, la tâche et la forme de la réponse. La dernière phrase est précieuse. Elle invite l'assistant à vous questionner, au lieu de deviner. S'il vous pose une question, répondez-lui : c'est une vraie conversation.
[PAUSE 1 s]

**[B5 — Consolidation · 4:41–5:27]**

**[F · CAM A]** À vous de prédire. Hadiza demande : « Quelle est la date de la prochaine journée de salubrité à Garoua ? » Que va faire l'assistant ?
**[B · CARTE]** « La prochaine journée de salubrité : l'assistant le sait-il ? » [SILENCE 2 s]
**[F · CAM A]** Il ne peut pas le savoir : la date n'a été publiée nulle part. Soit il le dit honnêtement. Soit il invente une date plausible. Souvenez-vous : il prédit le plus probable, pas le vrai. Méfiez-vous d'une date donnée avec assurance.
**[F · CAM B]** La règle est simple. Les dates, les lieux, les noms, les décisions locales : c'est vous qui les apportez. L'assistant, lui, vous aide à les mettre en forme.
[PAUSE 1 s]

**[B6 — Clôture · 5:27–6:04]**

**[F · CAM A]** Revenons à Hadiza. En une seule conversation, à la voix, elle a sa liste de cinq tâches et son message d'invitation. Avant de l'envoyer, elle le relira. Nous verrons comment dans la leçon six.
**[B · CARTE DE RAPPEL]** « 1. Dialoguer avec un assistant IA » « 2. Parlez en phrases, puis relancez » « 3. Apportez vos faits locaux » — VO : À retenir. Vous savez dialoguer avec un assistant IA. Parlez en phrases, puis relancez. Et apportez vos faits locaux.
**[F · CAM A]** Dans la prochaine leçon, une méthode simple pour bien demander. Mais d'abord, prenez votre téléphone. Tenez votre première conversation avec un assistant.

#### Liste des plans

| # | Type | Cadre / source | Contenu | Durée | Notes |
|---|---|---|---|---|---|
| 1 | E | Illustration : Hadiza à son bureau de la mairie de Garoua, téléphone en main | « Hadiza n'a jamais parlé à une IA » | 5 s | Illustration simple ; aucun bâtiment officiel reconnaissable |
| 2 | F | CAM A, plan poitrine centré | Promesse, rappel de la leçon 2, enjeu du samedi | 25 s | Promesse terminée avant 0:12 |
| 3 | F | CAM A, tiers gauche | Malentendu du moteur de recherche, puis « un programme avec qui l'on dialogue » | 25 s | Deux passages encadrant le plan 4 |
| 4 | A | Capture Gemini | « salubrité Garoua » et sa réponse générale | 9 s | Cadre sur les deux mots tapés |
| 5 | B + A | Carte 1 puis capture de la boutique d'applications | Fiches de Gemini, ChatGPT, Claude, Copilot | 30 s | Ne montrer ni note, ni avis, ni prix |
| 6 | B + A | Carte 2, capture de la dictée, capture de la conversation vocale | Écrire, dicter, parler ; alerte données en 3G | 35 s | Pictogramme « réseau » doublé du mot « données » |
| 7 | B | Carte « 3. Relancer : la conversation continue » | Se souvenir dans une même conversation | 13 s | |
| 8 | F | CAM A puis CAM B | Exemples de relances ; nouvelle conversation pour un nouveau sujet | 22 s | Les quatre relances s'incrustent une à une à droite |
| 9 | F | CAM B, insert serré | Mains qui tiennent le téléphone près de la bouche, pouce sur le micro | 20 s de rushes | Écran non lisible ; plan de couverture |
| 10 | A | Capture Gemini | Dictée de la demande, première réponse trop longue | 30 s | Laisser le texte dicté s'écrire en entier |
| 11 | A | Capture Gemini | Relance 1, liste courte ; relance 2, message d'invitation | 40 s | Cadre sur « sept heures » et « devant l'école » (faits apportés par Hadiza) |
| 12 | A | Capture WhatsApp | Message collé dans « Groupe quartier (test) », non envoyé | 10 s | Masquer le nom réel du compte |
| 13 | G | Carte de consigne | Consigne de départ à adapter | 20 s | Fond clair, au moins 8 s lisible sans voix |
| 14 | F + B | CAM A, carte question, CAM A, CAM B | Prédiction sur la date, silence, réponse, règle des faits locaux | 42 s | Silence de 2 s regard caméra |
| 15 | F + B | CAM A centré, carte de rappel, CAM A | Hadiza, rappel, exercice | 32 s | Points révélés au rythme de la voix |

#### Montage idéal

| Temps | Timecode cible | Image principale | Habillage (motion graphics) | Texte à l'écran | Son | Transition |
|---|---|---|---|---|---|---|
| B1 | 0:00–0:30 | Plan E, puis CAM A centré | Bandeau de lieu | « Garoua, la mairie » | voix seule | coupe |
| B2 | 0:30–1:07 | CAM A, capture « salubrité Garoua », CAM A | Cadre sur les deux mots ; croix sur la réponse générale | aucun hors sous-titres | voix seule | coupe |
| B3 | 1:07–2:54 | Cartes 1 à 3, captures boutique, dictée, voix ; CAM A et B | Cartes numérotées ; relances incrustées une à une | Titres des unités ; « Plus court. » « Plus simple. » « Donne un exemple. » | voix seule | coupes ; une transition plein cadre vers la carte 3 |
| B4 | 2:54–4:41 | Captures Gemini puis WhatsApp ; carte G | Étiquettes « Demande », « Relance 1 », « Relance 2 » ; cadre sur les faits d'Hadiza | Consigne G | voix seule | coupe à chaque relance |
| B5 | 4:41–5:27 | CAM A, carte question, CAM A, CAM B | Carte question | « La prochaine journée de salubrité : l'assistant le sait-il ? » | voix, puis 2 s de silence total | coupe sèche après le silence |
| B6 | 5:27–6:04 | CAM A centré, carte de rappel, CAM A | Carte de rappel | Trois points de rappel | voix seule | coupe, puis carte de clôture (Partie 1) |

**Notes de montage** : leçon de démonstration : en B4, ne rien couper dans la dictée ni dans l'apparition des réponses, mais accélérer légèrement l'attente si elle dépasse trois secondes (fondu discret). Couper les hésitations en face caméra ; garder le sourire sur « Et très peu de temps ». Zoom lent sur capture limité à 6 %, une annotation à la fois. Captures verticales à droite, sous-titres sous la colonne gauche ; quand le clavier occupe le bas de la capture, ne pas superposer les sous-titres au texte dicté. Plans de couverture : plan 9 (mains et micro), plan 4, cartes.

#### Versions EN / HA / DJE

- **À re-filmer dans la langue** (≤ 40 s au total, l'owner face caméra) : B1, `[F · CAM A]` (environ 25 s) : « À la fin de cette leçon, vous saurez dialoguer avec un assistant IA. Vous savez maintenant qu'une IA prédit la suite la plus probable. Aujourd'hui, vous allez lui parler. Hadiza organise samedi une journée de salubrité. Vingt volontaires, un quartier, des habitants à prévenir. Et très peu de temps. » · B6, dernier `[F · CAM A]` (environ 9 s) : « Dans la prochaine leçon, une méthode simple pour bien demander. Mais d'abord, prenez votre téléphone. Tenez votre première conversation avec un assistant. »
- **Doublé en voix clonée** : B2 « Beaucoup utilisent un assistant… » → plan 9 · B2 « Un assistant n'est pas un moteur de recherche… » → plan 4 prolongé, puis plan 9 · B3 relances et nouvelle conversation → les quatre relances en carte plein cadre, puis plan 9 · B4 « Suivons Hadiza… » → plan 10, écran d'accueil de Gemini · B5 question → carte question ; B5 réponse et règle → plan 11 (cadre sur les faits d'Hadiza) · B6 « Revenons à Hadiza… » → plan 12 (message collé), puis carte de rappel.
- **Notes d'adaptation** : « journée de salubrité » : employer l'expression locale courante dans chaque langue. Les captures restent en français ; en haoussa et en zarma, ajouter une phrase : « Vous pouvez aussi essayer de dicter dans votre langue ; selon l'assistant, la voix est plus ou moins bien reconnue » [à vérifier au moment du tournage pour le haoussa et le zarma]. Les relances (« Plus court », « Donne un exemple ») se traduisent et s'incrustent dans la langue de la version. En anglais, « moteur de recherche » = « search engine », sans autre adaptation.

### Leçon 4 — Bien demander : la méthode RCTF (`is4`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez rédiger une consigne claire pour l'IA. »
- **Cas réel (B1 → B6)** : Aïcha reçoit un nouvel arrivage de pagnes wax, en bleu et en orange. Elle a demandé à un assistant : « Écris une pub pour mes pagnes. » Résultat : un texte long et pompeux, qui annonce une remise et une livraison gratuite qu'elle n'a jamais proposées. Enjeu : publier ce texte, c'est promettre ce qu'elle ne peut pas tenir et perdre la confiance de ses clientes. En B6, son message de quatre lignes, vrai et chaleureux, est publié en statut WhatsApp, et une cliente répond qu'elle passera voir le bleu.
- **Unités de notion (B3)** — la méthode RCTF, quatre blocs : 1. R — Le rôle : qui l'IA doit incarner — « Tu es une vendeuse expérimentée et honnête », « Tu es un formateur patient » ; le rôle donne un point de vue, un vocabulaire et un ton de départ. · 2. C — Le contexte : la situation, le public, les contraintes — qui vous êtes, où, pour qui est le texte, ce qu'il faut éviter, et surtout les faits exacts que l'IA ne connaît pas. · 3. T — La tâche : l'action précise — un verbe clair (écris, résume, traduis, liste, explique), une tâche par consigne. · 4. F — Le format : longueur, structure, ton, langue — nombre de lignes, liste ou paragraphe, ton, langue, plus la phrase de sécurité « N'invente aucune information », qui réduit le risque sans le supprimer. Après les quatre blocs, un geste : relancer, car la première réponse est un brouillon ; on garde les consignes qui marchent.
- **Démo (B4)** : téléphone de démonstration, application ChatGPT, version gratuite, compte de démonstration [à vérifier au moment du tournage : disponibilité au Niger, interface actuelle de l'application et de l'onglet des statuts de WhatsApp]. 1. Ouvrir ChatGPT, nouvelle conversation. 2. Coller depuis Notes la consigne RCTF d'Aïcha (texte de la carte G ci-dessous). 3. Lire la réponse et vérifier : aucun prix, aucune promotion, les bonnes couleurs. 4. Relance : « Termine par une question qui invite la cliente à répondre. » 5. Relance : « Donne aussi une version en haoussa simple. » 6. Copier la version française ; WhatsApp, onglet des statuts, nouveau statut texte, coller, publier (compte de démonstration). Résultat attendu à l'écran : le statut publié. Pour la capture de B2 : envoyer la demande vague « Écris une pub pour mes pagnes. » dans une conversation séparée et garder une réponse réelle qui ajoute des détails non fournis (remise, livraison, prix) ; si aucune réponse n'en contient, adapter la voix off à ce qui est réellement ajouté.
- **Consolidation (B5)** : prédiction. Consigne A : « Écris une pub pour mes pagnes. » Consigne B : la consigne RCTF complète d'Aïcha. « Laquelle risque d'inventer une promotion ? » Réponse : la A ; sans contexte ni faits, l'IA comble les trous avec du probable, pas avec du vrai.
- **Consigne à copier** :

```text
Rôle : tu es [le rôle utile, par exemple : un vendeur expérimenté et honnête, un formateur patient].
Contexte : je suis [votre métier] à [votre ville]. [Votre situation, avec les faits exacts.] Le texte est pour [qui va le lire]. [Ce qu'il faut éviter.]
Tâche : écris [un message, une liste, un résumé…].
Format : [longueur], [liste ou paragraphe], ton [chaleureux / formel], en [langue]. N'invente aucune information.
```

- **Exercice** : « Écrivez votre consigne avec la méthode RCTF » — 1. Choisissez une vraie tâche de votre semaine (message, liste, lettre, résumé). 2. Écrivez la consigne en quatre blocs : rôle, contexte avec vos faits, tâche, format, et la phrase « N'invente aucune information ». 3. Envoyez-la à un assistant, puis relancez au moins une fois. 4. Gardez la meilleure version de votre consigne dans vos notes, pour la réutiliser.
- **Carte de rappel** : 1. Rédiger une consigne claire pour l'IA · 2. Rôle, contexte, tâche, format : RCTF · 3. Vos faits dans le contexte : moins d'inventions
- **Quiz** :
  1. Dans quel ordre écrit-on les quatre blocs de la méthode RCTF ? — A) Format, tâche, contexte, rôle B) Rôle, contexte, tâche, format C) Tâche, rôle, format, contexte D) Contexte, format, rôle, tâche — **Réponse : B**
  2. « Tu es une vendeuse expérimentée et honnête. » Quel bloc de la consigne reconnaissez-vous ? — A) Le contexte B) La tâche C) Le format D) Le rôle — **Réponse : D**
  3. Aïcha écrit seulement : « Écris une pub pour mes pagnes. » Sans contexte ni faits, quel est le risque principal ? — A) L'assistant invente des détails, comme une promotion B) L'assistant refuse de répondre C) Le texte sera forcément en anglais D) Aucun risque — **Réponse : A**
  4. Dans « 4 lignes maximum, ton chaleureux, en français », quel bloc reconnaissez-vous ? — A) Le rôle B) Le contexte C) Le format D) La tâche — **Réponse : C**
  5. Laquelle de ces phrases est une tâche claire ? — A) Fais quelque chose de bien B) Écris un message WhatsApp pour annoncer l'arrivage C) Je vends des pagnes à Niamey D) Quatre lignes maximum — **Réponse : B**
- **Marques citées** : ChatGPT, WhatsApp.

#### Script

Durée estimée : 6:33 · Mots dits : 759

**[B1 — Accroche · 0:00–0:32]**

**[E · SITUATION]** « Grand Marché de Niamey, nouvel arrivage » — VO : Aïcha demande une publicité à l'IA. Résultat : une fausse promotion.
**[F · CAM A]** À la fin de cette leçon, vous saurez rédiger une consigne claire pour l'IA. Dans la leçon précédente, vous avez tenu votre première conversation. Aujourd'hui, une méthode en quatre blocs pour être bien compris. Le texte d'Aïcha annonce une remise et une livraison gratuite. Elle n'a jamais proposé ni l'une ni l'autre.
[PAUSE 1 s]

**[B2 — Cadrage · 0:32–1:14]**

**[A · ÉCRAN]** *(ChatGPT : « Écris une pub pour mes pagnes. » ; la réponse longue, la remise et la livraison gratuite barrées d'une croix)* — VO : Voici ce qu'elle a demandé : « Écris une pub pour mes pagnes. » Et voici la réponse. Un texte long, un ton de publicité télévisée. Une remise inventée. Une livraison gratuite inventée.
**[F · CAM A]** Beaucoup pensent qu'il existe des formules magiques pour parler à l'IA. Ou qu'il faut écrire en anglais. C'est faux. Vous écrivez comme vous parlez, en français simple. Une bonne consigne ressemble à une bonne explication donnée à un nouvel apprenti. Quel rôle, quelle situation, quelle tâche, quel résultat. Rien de plus.
[PAUSE 1 s]

**[B3 — Notion · 1:14–3:29]**

**[C · SCHÉMA]** « Rôle + Contexte + Tâche + Format → Réponse → Relance » — VO : La méthode s'appelle RCTF. Quatre lettres, quatre blocs : rôle, contexte, tâche, format. Puis un geste : relancer. Voyons-les un par un.
**[B · CARTE]** « 1. R · Le rôle : qui l'IA doit incarner » — VO : Premier bloc, R : le rôle. Dites à l'IA qui elle doit être. « Tu es une vendeuse expérimentée et honnête. » « Tu es un formateur patient. » Le rôle lui donne un point de vue, un vocabulaire et un ton de départ.
**[B · CARTE]** « 2. C · Le contexte : situation, public, contraintes » — VO : Deuxième bloc, C : le contexte. Dites qui vous êtes, où vous êtes, et la situation. « Je suis commerçante au Grand Marché de Niamey. » Dites pour qui est le texte, et ce qu'il faut éviter. Surtout, donnez vos faits : couleurs, dates, quantités. L'IA ne les connaît pas. Sans eux, elle devine.
**[B · CARTE]** « 3. T · La tâche : l'action précise » — VO : Troisième bloc, T : la tâche. Commencez par un verbe : écris, résume, traduis, liste, explique. Évitez les demandes floues, comme « fais quelque chose de bien ». Une tâche par consigne, c'est plus clair.
**[B · CARTE]** « 4. F · Le format : longueur, structure, ton, langue » — VO : Quatrième bloc, F : le format. Combien de lignes ? Une liste ou un paragraphe ? Quel ton : chaleureux, formel ? Quelle langue ? Ajoutez une phrase de sécurité : « N'invente aucune information. » Elle réduit le risque. Elle ne le supprime pas : vous relirez toujours.
**[F · CAM A]** Dit autrement : le rôle dit qui parle. Le contexte dit d'où vous partez. La tâche dit où vous allez. Le format dit comment le résultat doit arriver. Avec ces quatre blocs, l'IA a moins de trous à combler.
**[F · CAM B]** Enfin, le geste : relancer. La première réponse est un brouillon. Corrigez-la en une phrase : « Plus court. » « Termine par une question. » Et quand une consigne marche bien, gardez-la dans vos notes. Pour aller plus loin, le module Intelligence artificielle de Karatou Academy détaille d'autres techniques.
[PAUSE 1 s]

**[B4 — Application · 3:29–5:08]**

**[F · CAM A]** Reprenons la publicité d'Aïcha, avec la méthode RCTF. Cette fois, elle utilise ChatGPT, dans sa version gratuite. La méthode marche avec tous les assistants. Faites-le en même temps qu'elle.
**[G · CONSIGNE]** « Rôle : tu es une vendeuse de tissus expérimentée et honnête. Contexte : je suis commerçante au Grand Marché de Niamey. Je viens de recevoir des pagnes wax, en bleu et en orange. Le message est pour mes clientes. Je ne fais ni remise ni livraison gratuite. Tâche : écris un message WhatsApp pour annoncer l'arrivage. Format : 4 lignes maximum, ton chaleureux, en français. N'invente aucun prix ni aucune promotion. » — VO : Voici sa consigne, en quatre blocs. Le rôle : une vendeuse expérimentée et honnête. Le contexte, avec ses faits : l'arrivage, les couleurs, ses clientes, pas de remise. La tâche : un message WhatsApp. Le format : quatre lignes, chaleureux, en français. Et la phrase de sécurité.
**[A · ÉCRAN]** *(ChatGPT : la consigne collée, envoyée ; la réponse de quatre lignes s'affiche)* — VO : Elle colle la consigne et l'envoie. La réponse tient en quatre lignes. Aïcha vérifie : aucun prix, aucune promotion. Les couleurs sont les bonnes. Le texte est simple, et il lui ressemble. Si une information manquait, elle l'ajouterait dans une relance.
**[A · ÉCRAN]** *(relance : « Termine par une question qui invite la cliente à répondre. » ; nouvelle version)* — VO : Première relance : « Termine par une question qui invite la cliente à répondre. » Le message se termine maintenant par une question.
**[A · ÉCRAN]** *(relance : « Donne aussi une version en haoussa simple. » ; la version haoussa s'affiche)* — VO : Deuxième relance : « Donne aussi une version en haoussa simple. » Aïcha lit mal le haoussa. Elle enverra cette version à sa nièce Zeinabou, pour relecture, avant toute publication.
**[A · ÉCRAN]** *(copie du message français ; WhatsApp, onglet des statuts, texte collé, statut publié)* — VO : Elle copie la version française. Dans WhatsApp, elle crée un statut, colle le texte, et le publie. Elle garde aussi sa consigne dans ses notes. Au prochain arrivage, elle changera seulement les couleurs.
[PAUSE 1 s]

**[B5 — Consolidation · 5:08–5:51]**

**[F · CAM A]** À vous de prédire. Voici deux consignes.
**[B · CARTE]** « A : Écris une pub pour mes pagnes. · B : la consigne RCTF complète d'Aïcha » — VO : A : « Écris une pub pour mes pagnes. » B : la consigne complète d'Aïcha, en quatre blocs. Laquelle risque d'inventer une promotion ? [SILENCE 2 s]
**[F · CAM A]** La A. Sans contexte, sans vos faits, l'IA comble les trous. Avec quoi ? Avec du probable. Une publicité de pagnes contient souvent une remise : alors elle en invente une. Souvenez-vous de la leçon deux : l'IA prédit le plus probable, pas le vrai.
**[F · CAM B]** Vos faits sont votre premier garde-fou. Plus votre contexte est précis, moins l'IA invente.
[PAUSE 1 s]

**[B6 — Clôture · 5:51–6:33]**

**[F · CAM A]** Revenons à Aïcha. Son statut est publié : quatre lignes, vraies, à son image. Une heure plus tard, une cliente répond : « Je passe demain voir le bleu. »
**[B · CARTE DE RAPPEL]** « 1. Rédiger une consigne claire pour l'IA » « 2. Rôle, contexte, tâche, format : RCTF » « 3. Vos faits dans le contexte : moins d'inventions » — VO : À retenir. Vous savez rédiger une consigne claire pour l'IA. Rôle, contexte, tâche, format : la méthode RCTF. Et vos faits dans le contexte, pour moins d'inventions.
**[F · CAM A]** Dans la prochaine leçon, nous prendrons du recul : ce que l'IA change en Afrique. D'ici là, une tâche réelle vous attend. Écrivez votre consigne avec la méthode RCTF.

#### Liste des plans

| # | Type | Cadre / source | Contenu | Durée | Notes |
|---|---|---|---|---|---|
| 1 | E | Photo réelle d'un étal de pagnes wax bleus et orange (sans visage) + illustration d'Aïcha | « Une fausse promotion » | 5 s | Même illustration d'Aïcha qu'en leçon 1 |
| 2 | F | CAM A, plan poitrine centré | Promesse, rappel de la leçon 3, le problème d'Aïcha | 27 s | Promesse terminée avant 0:12 |
| 3 | A | Capture ChatGPT (conversation séparée) | Demande vague et réponse avec détails inventés | 16 s | Une croix sur chaque détail inventé, l'une après l'autre |
| 4 | F | CAM A, tiers gauche | Formules magiques, anglais, nouvel apprenti | 26 s | |
| 5 | C | Schéma | « Rôle + Contexte + Tâche + Format → Réponse → Relance » | 10 s | Quatre blocs R, C, T, F qui s'emboîtent, puis une flèche retour |
| 6 | B | Carte « 1. R · Le rôle : qui l'IA doit incarner » | Deux exemples de rôles | 20 s | Lettre R en grand ; les deux rôles s'incrustent un à un |
| 7 | B | Carte « 2. C · Le contexte : situation, public, contraintes » | Exemple d'Aïcha ; « couleurs, dates, quantités » | 26 s | |
| 8 | B | Carte « 3. T · La tâche : l'action précise » | Verbes : écris, résume, traduis, liste, explique | 16 s | Verbes révélés un à un |
| 9 | B | Carte « 4. F · Le format : longueur, structure, ton, langue » | Questions de format ; phrase de sécurité | 20 s | Phrase de sécurité dans un bloc surligné |
| 10 | F | CAM A, tiers gauche, puis CAM B | « Qui parle, d'où vous partez, où vous allez, comment » ; relancer, garder ses consignes, renvoi au module | 43 s | Les deux relances s'incrustent une à une |
| 11 | F | CAM B, inserts serrés | Mains qui déplient le pagne bleu et orange ; mains qui tapent sur le téléphone | 20 s de rushes | Plans de couverture |
| 12 | G | Carte de consigne | Consigne RCTF complète d'Aïcha | 24 s | Fond clair ; chaque bloc (R, C, T, F) souligné au moment où la voix le nomme |
| 13 | A | Captures ChatGPT puis WhatsApp | Envoi, réponse, deux relances, version haoussa, statut publié | 70 s | Cadre sur « aucun prix, aucune promotion » ; masquer le nom du compte |
| 14 | F + B | CAM A, carte des deux consignes, CAM A, CAM B | Prédiction, silence, réponse, garde-fou | 45 s | Silence de 2 s regard caméra |
| 15 | F + B | CAM A centré, carte de rappel, CAM A | Statut publié, réponse de la cliente, rappel, exercice | 40 s | Points révélés au rythme de la voix |

#### Montage idéal

| Temps | Timecode cible | Image principale | Habillage (motion graphics) | Texte à l'écran | Son | Transition |
|---|---|---|---|---|---|---|
| B1 | 0:00–0:32 | Plan E, puis CAM A centré | Bandeau de lieu | « Grand Marché de Niamey, nouvel arrivage » | voix seule | coupe |
| B2 | 0:32–1:14 | Capture de la réponse vague, puis CAM A | Croix sur les détails inventés | aucun hors sous-titres | voix seule | coupe |
| B3 | 1:14–3:29 | Schéma, cartes 1 à 4, CAM A et B | Schéma des quatre blocs RCTF ; lettres R, C, T, F ; verbes et relances incrustés | Titres des unités ; « N'invente aucune information. » | voix seule | coupes ; une transition plein cadre vers le schéma |
| B4 | 3:29–5:08 | Carte G, captures ChatGPT, capture WhatsApp | Soulignement des quatre blocs ; coches de vérification | Consigne G | voix seule | coupe à chaque relance |
| B5 | 5:08–5:51 | CAM A, carte des deux consignes, CAM A, CAM B | Carte A / B côte à côte | « A : Écris une pub pour mes pagnes. · B : la consigne RCTF complète d'Aïcha » | voix, puis 2 s de silence total | coupe sèche après le silence |
| B6 | 5:51–6:33 | CAM A centré, carte de rappel, CAM A | Carte de rappel | Trois points de rappel | voix seule | coupe, puis carte de clôture (Partie 1) |

**Notes de montage** : B3 enchaîne quatre cartes : alterner carte et visage pour éviter l'effet diaporama, et utiliser les inserts du pagne entre les cartes 2 et 3. Les lettres R, C, T, F gardent la même place et le même style sur le schéma, les cartes et la carte G, pour que l'apprenant les reconnaisse d'un plan à l'autre. Couper les redites ; garder la respiration avant « Rien de plus. » En B4, laisser la carte G lisible sans voix au moins huit secondes : c'est le texte que l'apprenant recopiera. Zoom lent limité à 6 % sur les réponses. Captures verticales à droite, sous-titres sous la colonne gauche. Plans de couverture : plan 11 (inserts), plan 13 (captures), cartes.

#### Versions EN / HA / DJE

- **À re-filmer dans la langue** (≤ 40 s au total, l'owner face caméra) : B1, `[F · CAM A]` (environ 26 s) : « À la fin de cette leçon, vous saurez rédiger une consigne claire pour l'IA. Dans la leçon précédente, vous avez tenu votre première conversation. Aujourd'hui, une méthode en quatre blocs pour être bien compris. Le texte d'Aïcha annonce une remise et une livraison gratuite. Elle n'a jamais proposé ni l'une ni l'autre. » · B6, dernier `[F · CAM A]` (environ 10 s) : « Dans la prochaine leçon, nous prendrons du recul : ce que l'IA change en Afrique. D'ici là, une tâche réelle vous attend. Écrivez votre consigne avec la méthode RCTF. »
- **Doublé en voix clonée** : B2 « Beaucoup pensent… » → plan 11 (mains sur le téléphone) · B3 « Dit autrement… » → schéma du plan 5 en plein cadre · B3 « Enfin, le geste : relancer… » → plan 11 (pagne) · B4 « Reprenons la publicité d'Aïcha… » → plan 12 (carte G) · B5 « À vous de prédire » et réponse → carte des deux consignes, puis plan 3 (détails inventés barrés) · B5 garde-fou → plan 11 · B6 « Revenons à Aïcha… » → plan 13, statut publié, puis carte de rappel.
- **Notes d'adaptation** : « pub » est familier : garder un mot familier équivalent dans chaque langue (« ad » en anglais). « Ton de publicité télévisée » se comprend partout. Les mots « Rôle, Contexte, Tâche, Format » deviennent les quatre mots-clés de la version : les choisir avec le traducteur et les garder identiques à l'écran, dans la voix et dans le quiz ; en anglais : « Role, Context, Task, Format », et le sigle RCTF reste le même. En haoussa et en zarma, garder le sigle RCTF à l'écran (c'est le nom de la méthode maison) et dire les quatre mots traduits ; si leurs initiales diffèrent, ne pas inventer un autre sigle. Les lettres R, C, T, F des cartes restent inchangées. Garder l'histoire telle quelle dans les trois versions : Aïcha demande une version haoussa et la fait relire par Zeinabou. Renvoi au module : nommer le module tel qu'il apparaît dans la langue de la plateforme.

### Leçon 5 — Ce que l'IA change en Afrique (`is5`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez dire ce que l'IA change pour votre métier. »
- **Cas réel (B1 → B6)** : Moussa s'inquiète : avec l'IA, y aura-t-il encore du travail pour un conseiller agricole ? Son professeur, à l'université de Thiès, lui demande un exposé : « L'IA et l'agriculture en Afrique : chances et risques ». Enjeu : son orientation, et ne répéter ni le rêve ni la peur. En B6, Moussa présente un tableau sourcé (quatre chances, quatre risques, deux compétences à apprendre) et conclut qu'il va apprendre à se servir de l'IA et à la vérifier.
- **Unités de notion (B3)** : 1. Des usages réels, déjà sur le terrain — santé (OMS, 2021 : logiciels d'aide à la lecture des radios pulmonaires pour le dépistage de la tuberculose, le médecin décide), agriculture (diagnostic de maladies sur photo, toujours confirmé par un agent de vulgarisation), études (un assistant comme répétiteur). · 2. Nos langues : des progrès, pas encore gagnés — le haoussa, le wolof ou le swahili sont proposés par plusieurs outils, d'autres langues comme le zarma beaucoup moins ; toute traduction se fait relire. · 3. Le travail change d'abord par les tâches — OIT, 2023 : l'IA générative transforme surtout des tâches ; les emplois de bureau sont les plus exposés ; ce qui prend de la valeur : demander, vérifier, adapter au terrain. · 4. Les risques, à regarder en face — voix imitées par des escrocs, fausses images et vidéos (« deepfakes »), données stockées loin, dépendance à des outils conçus ailleurs. [à vérifier au moment du tournage : libellés exacts de la recommandation OMS 2021 sur la tuberculose, de l'étude OIT 2023 sur l'IA générative et l'emploi, et de la stratégie continentale de l'Union africaine approuvée en 2024 ; présence du haoussa, du wolof, du swahili et du zarma dans Google Traduction]
- **Démo (B4)** : téléphone de démonstration, Gemini (version gratuite) avec recherche sur le web [à vérifier au moment du tournage : affichage des sources et des liens dans la version gratuite]. 1. Coller la consigne de Moussa (carte G). 2. Lire le tableau. 3. Toucher le lien d'une source ; la page s'ouvre ; « Rechercher dans la page » un mot de l'exemple ; la phrase qui confirme est surlignée. 4. Verdict : confirmé, la ligne reste ; sinon, elle est retirée. 5. Relance : « Quelles compétences dois-je apprendre pour en profiter ? Trois, concrètes. » 6. Application Notes : « Mon bilan IA — 4 chances · 4 risques · 2 compétences », plus la ligne ajoutée par Moussa. Résultat attendu à l'écran : la note-bilan. **Règle de publication** : tout exemple lisible à l'écran est vérifié par l'équipe avant la mise en ligne ; un exemple non vérifié est flouté.
- **Consolidation (B5)** : prédiction. « Quels emplois l'IA générative touche-t-elle le plus : les métiers manuels ou les emplois de bureau ? » Réponse : les emplois de bureau (OIT, 2023), et l'IA transforme le travail plus souvent qu'elle ne le supprime.
- **Consigne à copier** :

```text
Rôle : tu es un spécialiste de mon métier qui cite toujours ses sources.
Contexte : je suis [votre métier ou vos études] à [votre ville] ([votre pays]). Je veux savoir ce que l'IA change pour mon travail.
Tâche : fais un tableau à deux colonnes : ce que l'IA peut améliorer dans mon travail, et les risques.
Format : 4 lignes par colonne, phrases courtes. Pour chaque exemple réel, donne ta source avec un lien. Si tu n'es pas sûr, dis-le.
```

- **Exercice** : « Faites le bilan de l'IA pour votre métier » — 1. Envoyez la consigne avec votre métier, ou celui que vous préparez. 2. Ouvrez au moins une source et vérifiez qu'elle dit bien ce que l'IA affirme. 3. Ajoutez une chance et un risque que vous connaissez, vous, sur le terrain. 4. Choisissez deux compétences à apprendre, et notez où les apprendre.
- **Carte de rappel** : 1. Dire ce que l'IA change pour votre métier · 2. Chances et risques · 3. Les tâches changent d'abord
- **Quiz** :
  1. Selon l'OIT (2023), quels emplois l'IA générative touche-t-elle le plus ? — A) Les métiers manuels B) Les emplois de bureau C) Uniquement l'agriculture D) Aucun emploi — **Réponse : B**
  2. Quelle phrase résume le mieux l'effet de l'IA sur le travail, selon l'OIT (2023) ? — A) Elle transforme surtout des tâches B) Elle supprime la plupart des métiers C) Elle n'a aucun effet en Afrique D) Elle remplace tous les emplois de bureau — **Réponse : A**
  3. Une application signale une maladie sur la photo d'une feuille de mil. Que faites-vous ? — A) Vous traitez tout de suite le champ B) Vous partagez le diagnostic dans le groupe du village C) Vous confirmez avec un agent de vulgarisation agricole D) Vous ignorez l'application — **Réponse : C**
  4. Pourquoi faire relire une traduction automatique en haoussa, en wolof ou en zarma ? — A) Parce que c'est interdit B) Parce que l'IA refuse ces langues C) Ce n'est pas utile D) Parce que la qualité varie selon les langues — **Réponse : D**
  5. Un vocal d'un « cousin » demande un transfert urgent par mobile money. Quel est le bon réflexe ? — A) Envoyer vite, c'est urgent B) Rappeler ce cousin sur son numéro habituel C) Répondre par un vocal D) Transférer le message à la famille — **Réponse : B**
- **Marques citées** : Gemini, Google Traduction. Sources citées à l'écran : OMS (2021), OIT (2023), Union africaine (2024).

#### Script

Durée estimée : 6:07 · Mots dits : 710

**[B1 — Accroche · 0:00–0:30]**

**[E · SITUATION]** « Thiès, université » — VO : Moussa, à Thiès, s'inquiète pour son futur travail.
**[F · CAM A]** À la fin de cette leçon, vous saurez dire ce que l'IA change pour votre métier. Dans la leçon précédente, vous avez appris la méthode RCTF. Aujourd'hui, nous prenons du recul. Moussa veut devenir conseiller agricole. Son professeur lui demande un exposé : l'IA et l'agriculture en Afrique. Chances et risques.
[PAUSE 1 s]

**[B2 — Cadrage · 0:30–1:10]**

**[F · CAM A]** On entend deux discours. Le premier : « L'IA, c'est pour les pays riches. Pas pour nous. » Le second : « L'IA va remplacer tout le monde. » Les deux sont faux.
**[A · ÉCRAN]** *(Google Traduction sur le téléphone : une phrase traduite du français vers le haoussa)* — VO : Regardez ce téléphone. Il traduit du français vers le haoussa. Pas parfaitement, mais réellement. L'IA est déjà là, chez nous.
**[B · CARTE]** « Union africaine, 2024 : une stratégie continentale pour l'IA » [à vérifier au moment du tournage] — VO : En deux mille vingt-quatre, l'Union africaine a approuvé une stratégie continentale pour l'intelligence artificielle. Notre continent n'est pas spectateur. Mais rien n'est automatique : tout dépend de ce que nous en faisons.
[PAUSE 1 s]

**[B3 — Notion · 1:10–3:20]**

**[B · CARTE]** « 1. Des usages réels, déjà sur le terrain » — VO : Première idée : des usages réels existent déjà. En santé, l'Organisation mondiale de la santé recommande depuis deux mille vingt et un des logiciels d'IA. Ils aident à lire les radios des poumons, pour dépister la tuberculose. Le médecin garde la décision.
**[F · CAM A]** En agriculture, des applications reconnaissent des maladies de plantes sur une simple photo. C'est un vrai progrès. Mais confirmez toujours avec un agent de vulgarisation agricole. Et pour étudier, un assistant peut vous servir de répétiteur, à toute heure.
**[B · CARTE]** « 2. Nos langues : des progrès, pas encore gagnés » — VO : Deuxième idée : nos langues. Le haoussa, le wolof ou le swahili sont déjà proposés par plusieurs outils. Le zarma, beaucoup moins. Des chercheurs africains construisent les données qui manquent. En attendant, une traduction automatique dans nos langues se fait toujours relire par quelqu'un qui la parle.
**[B · CARTE]** « 3. Le travail change d'abord par les tâches » — VO : Troisième idée : le travail. L'IA change d'abord des tâches, plus que des métiers entiers. Rédiger, résumer, trier, traduire : ces tâches se font de plus en plus avec l'IA. Ce qui prend de la valeur : savoir demander, vérifier, et adapter au terrain.
**[F · CAM B]** Dit autrement : l'IA ne connaît ni vos sols, ni vos pluies, ni vos clients. Vous, si. À Thiès, à Niamey ou à Garoua, ce savoir de terrain, associé à l'IA, devient une force.
**[B · CARTE]** « 4. Les risques, à regarder en face » — VO : Quatrième idée : les risques. Des escrocs imitent déjà des voix avec l'IA. On fabrique aussi de fausses images et de fausses vidéos très réalistes. On les appelle des « deepfakes ». Nos données partent souvent vers des serveurs lointains. Et nous dépendons d'outils conçus ailleurs, pour d'autres réalités.
**[F · CAM A]** Karatou Academy consacre un cours entier à ces arnaques. Ici, retenez une chose : chances et risques arrivent ensemble.
[PAUSE 1 s]

**[B4 — Application · 3:20–4:46]**

**[F · CAM A]** Revenons à Moussa et à son exposé. Il veut des exemples réels, avec leurs sources. Il utilise la méthode RCTF de la leçon quatre, dans Gemini. Faites-le avec votre propre métier.
**[G · CONSIGNE]** « Rôle : tu es un conseiller agricole qui cite toujours ses sources. Contexte : je suis étudiant à Thiès, au Sénégal ; je veux devenir conseiller agricole. Ma famille cultive du mil et de l'oignon. Tâche : fais un tableau à deux colonnes : ce que l'IA peut améliorer dans l'agriculture en Afrique, et les risques. Format : 4 lignes par colonne, phrases courtes. Pour chaque exemple réel, donne ta source avec un lien. Si tu n'es pas sûr, dis-le. » — VO : Remarquez le rôle et la fin de la consigne. Moussa demande des sources. Et il autorise l'IA à dire : « je ne suis pas sûr ».
**[A · ÉCRAN]** *(Gemini : le tableau à deux colonnes, des liens sous certaines lignes)* — VO : Le tableau arrive. Quatre chances, quatre risques. Des liens apparaissent sous certaines lignes. Mais attention : un lien ne prouve rien tant qu'on ne l'a pas ouvert.
**[A · ÉCRAN]** *(appui sur un lien ; la page source s'ouvre ; recherche d'un mot dans la page ; la phrase est surlignée)* — VO : Moussa ne croit pas sur parole. Il ouvre une source. Il cherche la phrase qui confirme l'exemple. Si elle y est, il garde la ligne. Sinon, il la retire.
**[A · ÉCRAN]** *(relance : « Quelles compétences dois-je apprendre pour en profiter ? Trois, concrètes. » ; la réponse)* — VO : Puis il relance : « Quelles compétences dois-je apprendre pour en profiter ? Trois, concrètes. » Il en retient deux.
**[A · ÉCRAN]** *(application Notes : « Mon bilan IA — 4 chances · 4 risques · 2 compétences », et une ligne ajoutée par Moussa)* — VO : Enfin, il ajoute une ligne que l'IA n'avait pas. « Risque : des conseils pensés pour d'autres sols et d'autres pluies. » Son expérience complète la machine.
[PAUSE 1 s]

**[B5 — Consolidation · 4:46–5:29]**

**[F · CAM A]** À vous de prédire. Selon vous, quels emplois l'IA générative touche-t-elle le plus ? Les métiers manuels, ou les emplois de bureau ?
**[B · CARTE]** « Les plus exposés : métiers manuels ou emplois de bureau ? » [SILENCE 2 s]
**[B · CARTE]** « Source : OIT, 2023 » [à vérifier au moment du tournage] — VO : Les emplois de bureau. C'est ce que montre l'Organisation internationale du Travail, en deux mille vingt-trois. Saisir, classer, rédiger des courriers : ces tâches changent en premier. Et le plus souvent, l'IA transforme le travail, plus qu'elle ne le supprime.
**[F · CAM B]** Surprenant ? Pas tant que ça. L'IA générative travaille sur des mots et des chiffres. Pas sur la terre, le bois ou le tissu.
[PAUSE 1 s]

**[B6 — Clôture · 5:29–6:07]**

**[F · CAM A]** Revenons à Moussa. Le jour de l'exposé, il présente son tableau, sources à l'appui. Sa conclusion : « L'IA va changer certaines de mes tâches. Je vais apprendre à m'en servir, et à la vérifier. »
**[B · CARTE DE RAPPEL]** « 1. Dire ce que l'IA change pour votre métier » « 2. Chances et risques » « 3. Les tâches changent d'abord » — VO : À retenir. Vous savez dire ce que l'IA change pour votre métier. Chances et risques. Et les tâches changent d'abord.
**[F · CAM A]** Prochaine leçon : les limites de l'IA, et trois réflexes. Étudiant ? Prenez le métier que vous préparez. Faites le bilan de l'IA pour votre métier.

#### Liste des plans

| # | Type | Cadre / source | Contenu | Durée | Notes |
|---|---|---|---|---|---|
| 1 | E | Illustration : Moussa, cahier sous le bras, dans une cour d'université | « Moussa s'inquiète pour son futur travail » | 5 s | Même illustration de Moussa qu'en leçon 2 |
| 2 | F | CAM A, plan poitrine centré | Promesse, rappel de la leçon 4, l'exposé | 27 s | Promesse terminée avant 0:12 |
| 3 | F | CAM A, tiers gauche | Les deux discours, tous deux faux | 12 s | Les deux phrases s'incrustent à droite, puis sont barrées |
| 4 | A | Capture Google Traduction | Une phrase traduite du français vers le haoussa | 10 s | Phrase simple et neutre, vérifiée par un locuteur |
| 5 | B | Carte | « Union africaine, 2024 : une stratégie continentale pour l'IA » | 15 s | Source affichée et dite |
| 6 | B | Carte « 1. Des usages réels, déjà sur le terrain » | Santé : radios des poumons, tuberculose ; mention « Source : OMS, 2021 » | 22 s | Pictogramme de radio, aucune image médicale réelle |
| 7 | F | CAM A, tiers gauche | Agriculture, agent de vulgarisation, répétiteur | 18 s | |
| 8 | B | Carte « 2. Nos langues : des progrès, pas encore gagnés » | Haoussa, wolof, swahili, zarma, relecture | 22 s | |
| 9 | B + F | Carte « 3. Le travail change d'abord par les tâches » puis CAM B | Tâches ; savoir de terrain, de Thiès à Garoua | 34 s | Quatre verbes révélés un à un |
| 10 | B + F | Carte « 4. Les risques, à regarder en face » puis CAM A | Voix imitées, deepfakes, données, dépendance ; renvoi au cours sur les arnaques | 34 s | Pictogrammes, aucune fausse vidéo réelle montrée |
| 11 | F | CAM B, inserts serrés | Mains qui tiennent un épi de mil ; mains qui tapent sur le téléphone | 20 s de rushes | Plans de couverture |
| 12 | G | Carte de consigne | Consigne RCTF de Moussa | 16 s | Fond clair ; les quatre blocs soulignés ; « Si tu n'es pas sûr, dis-le » surligné |
| 13 | A | Captures Gemini, page source, Notes | Tableau, ouverture d'une source, relance, bilan | 80 s | Exemples vérifiés avant publication, sinon floutés |
| 14 | F + B | CAM A, carte question, carte « Source : OIT, 2023 », CAM B | Prédiction, silence, réponse sourcée | 45 s | Silence de 2 s regard caméra |
| 15 | F + B | CAM A centré, carte de rappel, CAM A | Exposé de Moussa, rappel, exercice | 28 s | Points révélés au rythme de la voix |

#### Montage idéal

| Temps | Timecode cible | Image principale | Habillage (motion graphics) | Texte à l'écran | Son | Transition |
|---|---|---|---|---|---|---|
| B1 | 0:00–0:30 | Plan E, puis CAM A centré | Bandeau de lieu | « Thiès, université » | voix seule | coupe |
| B2 | 0:30–1:10 | CAM A, capture Google Traduction, carte Union africaine | Phrases des deux discours barrées d'une croix | « Union africaine, 2024 : une stratégie continentale pour l'IA » | voix seule | coupe |
| B3 | 1:10–3:20 | Cartes 1 à 4, CAM A et B, inserts | Pictogrammes santé, champ, livre ; verbes des tâches ; pictogrammes des risques | Titres des unités ; « Source : OMS, 2021 » | voix seule | coupes ; une transition plein cadre vers la carte 4 (changement de ton) |
| B4 | 3:20–4:46 | Carte G, captures Gemini, page source, Notes | Cadre sur le lien ouvert ; surlignage de la phrase qui confirme ; coche ou croix par ligne | Consigne G | voix seule | coupe à chaque étape |
| B5 | 4:46–5:29 | CAM A, carte question, carte source, CAM B | Carte question ; carte source | « Les plus exposés : métiers manuels ou emplois de bureau ? » ; « Source : OIT, 2023 » | voix, puis 2 s de silence total | coupe sèche après le silence |
| B6 | 5:29–6:07 | CAM A centré, carte de rappel, CAM A | Carte de rappel | Trois points de rappel | voix seule | coupe, puis carte de clôture (Partie 1) |

**Notes de montage** : leçon de recul, plus dense : garder un rythme posé, un changement d'image toutes les 6 à 8 secondes en B3, et ne jamais illustrer les risques avec de vraies fausses vidéos ou de vraies arnaques (pictogrammes seulement). Les trois sources (Union africaine 2024, OMS 2021, OIT 2023) restent à l'écran au moins 3 secondes chacune. Couper les hésitations ; garder la respiration après « Les deux sont faux. » Zoom lent limité à 6 % sur le tableau ; sous-titres sous la colonne gauche quand la capture est à droite. Plans de couverture : plan 11 (inserts), cartes, plan 13.

#### Versions EN / HA / DJE

- **À re-filmer dans la langue** (≤ 40 s au total, l'owner face caméra) : B1, `[F · CAM A]` (environ 26 s) : « À la fin de cette leçon, vous saurez dire ce que l'IA change pour votre métier. Dans la leçon précédente, vous avez appris la méthode RCTF. Aujourd'hui, nous prenons du recul. Moussa veut devenir conseiller agricole. Son professeur lui demande un exposé : l'IA et l'agriculture en Afrique. Chances et risques. » · B6, dernier `[F · CAM A]` (environ 8 s) : « Prochaine leçon : les limites de l'IA, et trois réflexes. Étudiant ? Prenez le métier que vous préparez. Faites le bilan de l'IA pour votre métier. »
- **Doublé en voix clonée** : B2 « On entend deux discours… » → les deux phrases en carte plein cadre, barrées · B3 agriculture et répétiteur → plan 11 (épi de mil) · B3 « Dit autrement… » → plan 11 · B3 renvoi au cours sur les arnaques → carte 4 prolongée · B4 « Revenons à Moussa… » → plan 12 (carte G) · B5 question → carte question ; B5 « Surprenant ? » → carte source prolongée · B6 « Revenons à Moussa… » → plan 13 (note-bilan), puis carte de rappel.
- **Notes d'adaptation** : « répétiteur » est le mot ouest-africain pour un professeur particulier : en anglais, « tutor ». « Deepfake » reste tel quel en anglais ; en haoussa et en zarma, garder le mot et le gloser, comme en français. Les noms d'organisations se disent et s'affichent dans la langue de la version (« WHO », « ILO », « African Union » en anglais ; noms d'usage validés par le traducteur en haoussa et en zarma). « Thiès », « Niamey » et « Garoua » se disent tels quels dans toutes les langues. Dans la version zarma, dire la phrase sur le zarma avec tact : la langue n'est pas en cause, ce sont les données qui manquent. Le renvoi au cours sur les arnaques suppose qu'il soit publié : sinon, couper la phrase dans toutes les langues.

### Leçon 6 — Les limites de l'IA : trois réflexes (`is6`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez appliquer trois réflexes face aux limites de l'IA. »
- **Cas réel (B1 → B6)** : Hadiza, à la mairie de Garoua (Cameroun). La semaine dernière, elle a demandé à un assistant une affiche sur les papiers à fournir pour une démarche d'état civil. L'assistant a ajouté, avec assurance, un papier demandé ailleurs, pas au Cameroun (cas fictif) : un habitant aurait pu se déplacer pour rien. Aujourd'hui, elle doit envoyer le message de la journée de salubrité préparé en leçon 3. Enjeu : la confiance des habitants et la protection de leurs données. En B6, le message vérifié part dans le groupe du quartier, où beaucoup d'habitants parlent haoussa, en français et en haoussa, sans aucune donnée personnelle ; l'affiche a été corrigée avec le service.
- **Unités de notion (B3)** : 1. Hallucination : faux, mais dit avec assurance — réflexe « vérifier » : ce qui compte (dates, chiffres, noms, règles, santé, argent), auprès d'une source officielle ou d'une personne compétente ; ouvrir les liens. · 2. Données : ce que vous tapez peut être conservé — réflexe « protéger » : aucun nom, numéro, mot de passe ni information de santé ; « [Prénom] » à la place des noms ; réglages de confidentialité. · 3. Biais : l'IA reproduit ses exemples — réflexe « questionner » : « Est-ce vrai dans mon pays ? Qui est oublié ? », et donner son contexte dès le départ.
- **Démo (B4)** : téléphone de démonstration, Gemini, suite de la conversation enregistrée en leçon 3 (même compte de démonstration). 1. Protéger (insert) : la liste papier des volontaires, noms et numéros floutés, reste hors de l'assistant. 2. Vérifier : envoyer la consigne de contrôle (carte G), crochets remplis (« les habitants du quartier », « Garoua ») ; l'assistant liste ce qu'il a ajouté ; comparer avec la « fiche d'organisation » papier (fictive) et effacer ce qui n'y figure pas. 3. Questionner : lire le point 3 de la réponse, puis la question d'Hadiza : « Qui ce message oublie-t-il ? » ; relance : « Traduis ce message en haoussa simple. » ; Hadiza relit et corrige. 4. Coller les deux versions dans « Groupe quartier (test) » et envoyer. Résultat attendu à l'écran : le message vérifié, en français et en haoussa, envoyé dans le groupe de test. Pour B3, capturer l'écran des réglages de confidentialité d'un assistant (option d'utilisation des conversations pour améliorer le modèle) [à vérifier au moment du tournage : nom exact et emplacement de cette option dans ChatGPT, Gemini et Claude]. La version haoussa affichée est relue par un locuteur avant publication.
- **Consolidation (B5)** : prédiction. « Le boutiquier en face du château d'eau, qui doit des loyers à la mairie » : est-ce anonyme ? Réponse : non ; dans un quartier, ces détails suffisent à reconnaître la personne.
- **Consigne à copier** :

```text
Rôle : tu es un relecteur exigeant et prudent.
Contexte : ta réponse précédente sera lue par [qui va la lire], à [votre ville].
Tâche : relis ta réponse précédente et contrôle-la.
Format : une liste en 3 points.
1. Les informations qui ne viennent pas de moi.
2. Celles qu'il faut vérifier, et où.
3. Ce qui peut exclure ou caricaturer quelqu'un.
```

- **Exercice** : « Passez une réponse de l'IA aux trois réflexes » — 1. Reprenez une réponse obtenue dans une leçon précédente. 2. Vérifier : soulignez chaque fait (date, chiffre, nom, règle) et vérifiez-en au moins un auprès d'une source officielle ou d'une personne compétente. 3. Protéger : vérifiez qu'aucune donnée personnelle n'a été tapée, puis ouvrez les réglages de confidentialité de votre assistant. 4. Questionner : envoyez la consigne de contrôle, et demandez-vous : « Est-ce vrai dans mon pays ? Qui est oublié ? »
- **Carte de rappel** : 1. Appliquer trois réflexes face aux limites de l'IA · 2. Vérifier, protéger, questionner
- **Quiz** :
  1. Qu'est-ce qu'une hallucination de l'IA ? — A) Un bug d'affichage B) Une panne de connexion C) Une réponse fausse, donnée avec assurance D) Une image floue — **Réponse : C**
  2. L'assistant cite une source avec un lien. Que faites-vous ? — A) Vous le croyez : il y a un lien B) Vous ouvrez le lien et vérifiez qu'il dit bien la même chose C) Vous supprimez la réponse D) Vous demandez la réponse dans une autre langue — **Réponse : B**
  3. Pourquoi une IA peut-elle reproduire des clichés ? — A) Ses exemples contiennent des déséquilibres B) Elle a ses propres opinions C) Elle veut vexer certaines personnes D) Les clichés sont toujours vrais — **Réponse : A**
  4. Que pouvez-vous mettre dans une consigne ? — A) Le numéro de téléphone d'un habitant B) Le nom d'un élève et ses notes C) Votre mot de passe D) « [Prénom] » à la place d'un nom — **Réponse : D**
  5. « Le boutiquier en face du château d'eau, qui doit des loyers à la mairie » : est-ce anonyme ? — A) Oui, il n'y a pas de nom B) Oui, si on l'écrit en français C) Non, ces détails permettent de le reconnaître D) Oui, si l'assistant est gratuit — **Réponse : C**
- **Marques citées** : Gemini, ChatGPT, Claude, Teachable Machine (rappel de la leçon 2), WhatsApp.

#### Script

Durée estimée : 5:58 · Mots dits : 692

**[B1 — Accroche · 0:00–0:30]**

**[E · SITUATION]** « Garoua, service de l'état civil » — VO : Hadiza a failli diffuser une erreur aux habitants.
**[F · CAM A]** À la fin de cette leçon, vous saurez appliquer trois réflexes face aux limites de l'IA. Dans la leçon précédente, vous avez pesé chances et risques. La semaine dernière, Hadiza a demandé une affiche sur les papiers d'une démarche. L'assistant a ajouté, avec assurance, un papier qui n'est pas demandé au Cameroun.
[PAUSE 1 s]

**[B2 — Cadrage · 0:30–1:09]**

**[F · CAM A]** Une idée reçue est tenace : « Si l'IA le dit avec assurance, c'est vrai. » Une autre : « Une machine est neutre. » Les deux sont fausses.
**[A · ÉCRAN]** *(rappel de la leçon 2 : Teachable Machine, la pomme de terre devant la webcam, une barre monte)* — VO : Souvenez-vous de la pomme de terre. La mini-IA de Moussa a répondu « oignon » ou « tomate ». Sans hésiter.
**[F · CAM A]** L'assurance n'est pas une preuve. L'IA prédit le plus probable, pas le vrai. Et elle apprend de ses exemples, avec leurs qualités et leurs déséquilibres. Ces limites ne la rendent pas inutile. Elles demandent des réflexes.
[PAUSE 1 s]

**[B3 — Notion · 1:09–3:03]**

**[B · CARTE]** « 1. Hallucination : faux, mais dit avec assurance » — VO : Première limite : l'hallucination. Le mot est étrange, l'idée est simple. C'est une réponse fausse, donnée avec assurance. Une date inventée, un article de loi qui n'existe pas, une source imaginaire. Pourquoi ? Parce qu'elle prédit une suite plausible, même quand elle ne sait pas.
**[F · CAM A]** Premier réflexe : vérifier. Pas tout : ce qui compte. Les dates, les chiffres, les noms, les règles, la santé, l'argent. Vérifiez auprès d'une source officielle, ou d'une personne compétente. Demandez aussi à l'assistant d'où vient l'information. Et si l'IA donne un lien, ouvrez-le.
**[B · CARTE]** « 2. Données : ce que vous tapez peut être conservé » — VO : Deuxième limite : vos données. Ce que vous tapez peut être conservé. Selon vos réglages, cela peut aussi servir à améliorer l'outil.
**[A · ÉCRAN]** *(réglages de confidentialité d'un assistant : l'option d'utilisation des conversations pour améliorer le modèle, désactivée)* — VO : Deuxième réflexe : protéger. Ne tapez jamais de noms d'habitants, de numéros, de mots de passe, ni d'informations de santé. Remplacez les noms par « Prénom » entre crochets. Et ouvrez les réglages de confidentialité de votre assistant. Pour une information sensible, demandez-vous d'abord : ai-je vraiment besoin de l'IA ?
**[B · CARTE]** « 3. Biais : l'IA reproduit ses exemples » — VO : Troisième limite : le biais. Un biais, c'est un déséquilibre qui fausse le regard. L'IA a surtout appris avec des textes et des images venus d'ailleurs. Alors elle peut ignorer nos réalités, ou reproduire des clichés. L'affiche d'Hadiza en est un exemple : une règle d'un autre pays, appliquée au Cameroun.
**[F · CAM B]** Troisième réflexe : questionner. Demandez : « Est-ce vrai dans mon pays ? » « Qui est oublié dans ce texte ? » Et donnez votre contexte dès le départ.
**[C · SCHÉMA]** « Hallucination → Vérifier · Données → Protéger · Biais → Questionner » — VO : Trois limites, trois réflexes. Vérifier, protéger, questionner.
[PAUSE 1 s]

**[B4 — Application · 3:03–4:38]**

**[F · CAM A]** Revenons au message de la journée de salubrité, préparé dans la leçon trois. Avant de l'envoyer, Hadiza le passe aux trois réflexes.
**[F · CAM B]** *(insert : une liste papier de volontaires, noms et numéros floutés, que la main retourne face contre la table)* D'abord, protéger. Hadiza a la liste des volontaires, avec leurs numéros. Elle ne la colle pas dans l'assistant. Elle n'en a pas besoin.
**[G · CONSIGNE]** « Rôle : tu es un relecteur exigeant et prudent. Contexte : ta réponse précédente sera lue par [qui va la lire], à [votre ville]. Tâche : relis ta réponse précédente et contrôle-la. Format : une liste en 3 points. 1. Les informations qui ne viennent pas de moi. 2. Celles qu'il faut vérifier, et où. 3. Ce qui peut exclure ou caricaturer quelqu'un. » — VO : Ensuite, vérifier. Elle envoie cette consigne de contrôle, écrite avec la méthode RCTF. Recopiez-la : elle marche après n'importe quelle réponse.
**[A · ÉCRAN]** *(Gemini : la réponse de contrôle, la liste des ajouts de l'assistant ; à côté, la fiche d'organisation papier)* — VO : L'assistant liste ce qu'il a ajouté de lui-même. Hadiza compare avec sa fiche d'organisation. Ce qui n'y figure pas, elle l'efface. Elle ne promet rien que la mairie n'a pas décidé.
**[A · ÉCRAN]** *(Gemini : la réponse au point 3, puis la question d'Hadiza)* — VO : Puis, questionner. Hadiza lit le point trois. Elle ajoute sa propre question : qui ce message oublie-t-il ? Réponse : les habitants qui ne lisent pas le français.
**[A · ÉCRAN]** *(relance : « Traduis ce message en haoussa simple. » ; la version haoussa ; Hadiza corrige)* — VO : Elle demande une version en haoussa simple. Le haoussa est sa langue maternelle. Elle relit chaque phrase, et corrige ce qui sonne faux.
**[A · ÉCRAN]** *(WhatsApp, « Groupe quartier (test) » : le message en français et sa version haoussa, envoyés)* — VO : Le message vérifié part enfin dans le groupe du quartier, en français et en haoussa. Du début à la fin, Hadiza a gardé la main.
[PAUSE 1 s]

**[B5 — Consolidation · 4:38–5:20]**

**[F · CAM A]** À vous de prédire. Hadiza remplace les noms par « Prénom ». Mais elle écrit : « le boutiquier en face du château d'eau, qui doit des loyers à la mairie ». Est-ce anonyme ?
**[B · CARTE]** « Le boutiquier en face du château d'eau : anonyme ? » [SILENCE 2 s]
**[F · CAM A]** Non. Dans un quartier, ces détails suffisent pour reconnaître la personne. Anonyme ne veut pas dire seulement « sans nom ». Cela veut dire : impossible de savoir de qui l'on parle.
**[F · CAM B]** Retirez aussi les détails qui désignent quelqu'un : adresse, métier rare, histoire connue de tous. Dans le doute, n'écrivez rien sur la personne.
[PAUSE 1 s]

**[B6 — Clôture · 5:20–5:58]**

**[F · CAM A]** Revenons à Hadiza. Son message est parti, vérifié, en deux langues. Et l'affiche de la semaine dernière ? Elle l'a corrigée, en vérifiant chaque papier auprès du service. Désormais, avant chaque envoi, elle applique les trois réflexes.
**[B · CARTE DE RAPPEL]** « 1. Appliquer trois réflexes face aux limites de l'IA » « 2. Vérifier, protéger, questionner » — VO : À retenir. Vous savez appliquer trois réflexes face aux limites de l'IA. Vérifier, protéger, questionner.
**[F · CAM A]** Dans la prochaine leçon, votre projet final. Pour vous y préparer, reprenez une réponse obtenue dans ce cours. Passez une réponse de l'IA aux trois réflexes.

#### Liste des plans

| # | Type | Cadre / source | Contenu | Durée | Notes |
|---|---|---|---|---|---|
| 1 | E | Illustration : Hadiza devant une affiche ; un habitant qui attend au guichet | « Une erreur a failli partir » | 5 s | Même illustration d'Hadiza qu'en leçon 3 ; affiche illisible |
| 2 | F | CAM A, plan poitrine centré | Promesse, rappel de la leçon 5, l'affiche | 28 s | Promesse terminée avant 0:12 |
| 3 | F | CAM A, tiers gauche | Les deux idées reçues ; « L'assurance n'est pas une preuve » | 28 s | Deux passages encadrant le plan 4 |
| 4 | A | Capture réutilisée de la leçon 2 | La pomme de terre devant la webcam | 8 s | Même capture que le plan 14 de la leçon 2 |
| 5 | B | Carte « 1. Hallucination : faux, mais dit avec assurance » | Date inventée, article de loi inexistant, source imaginaire | 15 s | Trois pictogrammes barrés d'une croix |
| 6 | F | CAM A, tiers gauche | Réflexe « vérifier » | 22 s | Les mots « dates, chiffres, noms, règles, santé, argent » s'incrustent |
| 7 | B + A | Carte « 2. Données… » puis capture des réglages de confidentialité | Réflexe « protéger » | 32 s | Aucune adresse e-mail visible |
| 8 | B | Carte « 3. Biais : l'IA reproduit ses exemples » | Exemples venus d'ailleurs, clichés, l'affiche d'Hadiza | 25 s | |
| 9 | F | CAM B, trois quarts | Réflexe « questionner » | 11 s | Les deux questions s'incrustent |
| 10 | C | Schéma | « Hallucination → Vérifier · Données → Protéger · Biais → Questionner » | 6 s | Trois lignes qui s'allument au rythme de la voix |
| 11 | F | CAM B, insert serré | Liste papier retournée face contre la table ; fiche d'organisation cochée | 15 s | Noms et numéros fictifs, floutés quand même |
| 12 | G | Carte de consigne | Consigne de contrôle RCTF | 14 s | Fond clair, lisible au moins 8 s ; les quatre blocs soulignés |
| 13 | A | Captures Gemini puis WhatsApp | Ajouts listés, effacés ; question d'Hadiza ; version haoussa ; envoi | 70 s | Une annotation à la fois ; version haoussa relue avant publication |
| 14 | F + B | CAM A, carte question, CAM A, CAM B | Prédiction sur l'anonymat, silence, réponse | 42 s | Silence de 2 s regard caméra |
| 15 | F + B | CAM A centré, carte de rappel, CAM A | Message parti, affiche corrigée, rappel, exercice | 30 s | Points révélés au rythme de la voix |

#### Montage idéal

| Temps | Timecode cible | Image principale | Habillage (motion graphics) | Texte à l'écran | Son | Transition |
|---|---|---|---|---|---|---|
| B1 | 0:00–0:30 | Plan E, puis CAM A centré | Bandeau de lieu | « Garoua, service de l'état civil » | voix seule | coupe |
| B2 | 0:30–1:09 | CAM A, capture de la pomme de terre, CAM A | Les deux idées reçues barrées | aucun hors sous-titres | voix seule | coupe ; fondu court vers la capture rappel |
| B3 | 1:09–3:03 | Cartes 1 à 3, CAM A et B, capture des réglages, schéma | Pictogrammes barrés ; mots-clés incrustés ; schéma limites → réflexes | Titres des unités ; questions « Est-ce vrai dans mon pays ? » « Qui est oublié ? » | voix seule | coupes ; une transition plein cadre vers le schéma |
| B4 | 3:03–4:38 | Insert, carte G, captures Gemini et WhatsApp | Étiquettes « Protéger », « Vérifier », « Questionner » à chaque étape ; coches | Consigne de contrôle | voix seule | coupe à chaque réflexe |
| B5 | 4:38–5:20 | CAM A, carte question, CAM A, CAM B | Carte question | « Le boutiquier en face du château d'eau : anonyme ? » | voix, puis 2 s de silence total | coupe sèche après le silence |
| B6 | 5:20–5:58 | CAM A centré, carte de rappel, CAM A | Carte de rappel | Deux points de rappel | voix seule | coupe, puis carte de clôture (Partie 1) |

**Notes de montage** : leçon de vigilance, sans dramatiser : pas de son d'alerte, pas de rouge plein écran ; les croix et les coches suffisent, toujours doublées d'une forme. En B3, garder un vrai temps de respiration entre les trois limites. En B4, l'étiquette du réflexe en cours reste visible pendant toute l'étape. Zoom lent limité à 6 %. Sous-titres sous la colonne gauche quand la capture est à droite. Plans de couverture : plan 11 (inserts), plan 4, cartes.

#### Versions EN / HA / DJE

- **À re-filmer dans la langue** (≤ 40 s au total, l'owner face caméra) : B1, `[F · CAM A]` (environ 27 s) : « À la fin de cette leçon, vous saurez appliquer trois réflexes face aux limites de l'IA. Dans la leçon précédente, vous avez pesé chances et risques. La semaine dernière, Hadiza a demandé une affiche sur les papiers d'une démarche. L'assistant a ajouté, avec assurance, un papier qui n'est pas demandé au Cameroun. » · B6, dernier `[F · CAM A]` (environ 9 s) : « Dans la prochaine leçon, votre projet final. Pour vous y préparer, reprenez une réponse obtenue dans ce cours. Passez une réponse de l'IA aux trois réflexes. »
- **Doublé en voix clonée** : B2 idées reçues → les deux phrases en carte plein cadre, barrées · B2 « L'assurance n'est pas une preuve… » → plan 4 prolongé · B3 réflexe « vérifier » → mots-clés en carte plein cadre · B3 réflexe « questionner » → les deux questions en carte plein cadre · B4 « Revenons au message… » → plan 11 (fiche d'organisation) · B4 insert « D'abord, protéger » → déjà couvert (insert) · B5 question et réponse → carte question, puis plan 11 · B6 « Revenons à Hadiza… » → plan 13 (message envoyé), puis carte de rappel.
- **Notes d'adaptation** : « hallucination » et « biais » sont gardés et glosés dans chaque langue (en anglais, « hallucination » et « bias »). La consigne de contrôle est traduite et affichée dans la langue de la version, avec ses quatre blocs RCTF. « Château d'eau » est un repère courant dans beaucoup de villes d'Afrique, Garoua comprise : le garder. Les trois verbes « Vérifier, protéger, questionner » deviennent les mots-clés de la version et restent identiques à l'écran, dans la voix et dans le quiz. Dans la version haoussa, la phrase « Le haoussa est sa langue maternelle » reste vraie et se dit telle quelle.

### Leçon 7 — Projet final : résoudre un vrai problème avec l'IA (`is7`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez résoudre un vrai problème avec l'IA et le documenter. »
- **Cas réel (B1 → B6)** : Aïcha, Moussa et Hadiza apportent chacun un problème réel. Aïcha répond tard le soir aux mêmes questions de ses clientes sur WhatsApp. Moussa révise ses examens avec des notes en désordre. Hadiza doit informer les habitants en deux langues. Enjeu : passer d'essais isolés à une démarche complète, que l'on peut présenter. Le projet d'Aïcha sert d'exemple de bout en bout (B4). En B6, les trois ont déposé leur fiche projet ; c'est au tour de l'apprenant.
- **Unités de notion (B3)** — livrables et critères : 1. Une fiche projet en cinq parties — problème, consignes, résultat, vérification, bilan, sur une page. · 2. Cinq critères pour réussir — un problème réel et précis ; une consigne complète avec au moins une relance ; un résultat utilisable ; une vérification réelle, décrite ; aucune donnée personnelle. · 3. Petit, réel, honnête — un petit problème bien traité plutôt qu'un grand projet flou ; le bilan dit aussi ce qui n'a pas marché.
- **Démo (B4)** — exemple de projet réussi : la fiche projet d'Aïcha (document d'une page rédigé par l'équipe, cas fictif) et les captures correspondantes. 1. Problème : les mêmes questions chaque jour (horaires, livraison, paiement, retouches), des réponses tardives. 2. Consignes : dans ChatGPT, la consigne RCTF (rôle, contexte, tâche, format) avec les vraies informations d'Aïcha, puis la relance « Plus simple, et donne aussi une version en haoussa. » 3. Résultat : cinq réponses, enregistrées comme réponses rapides dans WhatsApp Business [à vérifier au moment du tournage : nom et emplacement de la fonction « réponses rapides » dans WhatsApp Business]. 4. Vérification : chaque réponse comparée à ses informations ; version haoussa relue par Zeinabou ; aucun nom de cliente tapé. 5. Bilan : ce qui a marché, ce qui n'a pas marché, ce qu'elle refera. Résultat attendu à l'écran : la fiche complète, lisible, partie par partie.
- **Consolidation (B5)** : contre-exemple. Souleymane dépose : « J'ai demandé un plan d'affaires à l'IA. Voici le texte. » Il manque presque tout : problème précis, consigne, vérification, bilan. Ce qu'on évalue, c'est la démarche.
- **Consigne à copier** :

```text
Rôle : tu es un conseiller patient qui aide à résoudre des problèmes du quotidien.
Contexte : je suis [votre métier] à [votre ville]. Mon problème : [décrivez-le en 2 phrases, sans nom ni donnée personnelle].
Tâche : propose-moi 3 façons dont un assistant IA pourrait m'aider. Ensuite, pose-moi 2 questions pour préciser mon problème.
Format : liste courte, phrases simples, en français.
```

- **Exercice** : « Résolvez un vrai problème avec l'IA, et documentez votre démarche » — 1. Choisissez un problème réel de votre quotidien, petit et précis. 2. Traitez-le avec un assistant : consigne RCTF (rôle, contexte, tâche, format), puis au moins une relance. 3. Appliquez les trois réflexes : vérifier, protéger, questionner. 4. Remplissez la fiche projet en cinq parties, sur une page, et déposez-la dans la leçon 7 [mode de dépôt à confirmer par l'owner : formulaire, fichier ou photo d'une page manuscrite].
- **Carte de rappel** : 1. Résoudre un vrai problème avec l'IA et le documenter · 2. Cinq parties, cinq critères *(précédée de deux cartes récapitulatives, un point par leçon : « 1. L'IA reconnaît, prédit, produit · 2. Elle apprend d'exemples · 3. Dialoguez et relancez » puis « 4. La méthode RCTF · 5. Chances et risques · 6. Vérifier, protéger, questionner »)*
- **Quiz** :
  1. Combien de parties compte la fiche projet ? — A) Deux B) Trois C) Cinq D) Dix — **Réponse : C**
  2. Laquelle de ces parties appartient à la fiche projet ? — A) La vérification d'au moins un fait B) Votre photo C) Le nom de vos clients D) Un texte de dix pages — **Réponse : A**
  3. Quel projet respecte les critères ? — A) « J'ai demandé un plan d'affaires à l'IA, voici le texte » B) Une liste d'outils IA C) Une capture d'écran sans explication D) Un problème précis, une consigne, une relance, une vérification et un bilan — **Réponse : D**
  4. Que faut-il éviter absolument dans le projet ? — A) Les relances B) Les données personnelles, comme des noms ou des numéros C) Le bilan D) Les consignes — **Réponse : B**
  5. Dans le bilan, qu'écrivez-vous ? — A) Seulement ce qui a marché B) Ce qui a marché, ce qui n'a pas marché, et ce que vous referez C) Le nom de l'assistant, rien d'autre D) Rien, le bilan est facultatif — **Réponse : B**
- **Marques citées** : ChatGPT, WhatsApp, WhatsApp Business.

#### Script

Durée estimée : 6:17 · Mots dits : 729

**[B1 — Accroche · 0:00–0:30]**

**[E · SITUATION]** « Niamey · Thiès · Garoua » — VO : Aïcha, Moussa, Hadiza : trois vrais problèmes.
**[F · CAM A]** À la fin de cette leçon, vous saurez résoudre un vrai problème avec l'IA et le documenter. Dans la leçon précédente, vous avez appris trois réflexes : vérifier, protéger, questionner. Aïcha répond tard le soir aux mêmes questions de ses clientes. Moussa révise avec des notes en désordre. Hadiza doit informer en deux langues.
[PAUSE 1 s]

**[B2 — Cadrage · 0:30–1:05]**

**[F · CAM A]** Un projet final fait souvent peur. On imagine un examen piège, ou un gros projet technique. Ce n'est ni l'un, ni l'autre.
**[B · CARTE]** « Un petit problème réel, bien traité, bien raconté » — VO : Il s'agit d'un petit problème réel de votre quotidien. Vous le traitez avec l'IA. Puis vous racontez honnêtement votre démarche.
**[F · CAM A]** Ce qui compte n'est pas la perfection du résultat. C'est votre démarche : comment vous avez demandé, vérifié, corrigé. Dit autrement : on regarde votre façon de travailler avec l'IA.
[PAUSE 1 s]

**[B3 — Notion · 1:05–3:01]**

**[B · CARTE]** « 1. Une fiche projet en cinq parties » — VO : Le livrable tient sur une page : la fiche projet. Elle a cinq parties.
**[C · SCHÉMA]** « Problème · Consignes · Résultat · Vérification · Bilan » — VO : Un : le problème. Qui, où, et pourquoi c'est important. Deux : les consignes. La première, et la meilleure version, après relance. Trois : le résultat. Ce que l'IA a produit, et ce que vous avez changé. Quatre : la vérification. Ce que vous avez vérifié, et auprès de qui. Cinq : le bilan. Ce qui a marché, ce qui n'a pas marché, ce que vous referez. Une page suffit. Des phrases simples suffisent.
**[B · CARTE]** « 2. Cinq critères pour réussir » — VO : Votre projet sera évalué sur cinq critères. Un problème réel et précis. Une consigne complète, avec au moins une relance. Un résultat utilisable. Une vérification réelle, décrite. Et aucune donnée personnelle.
**[F · CAM A]** Vous reconnaissez chaque critère : ils viennent tous des leçons précédentes. Rien de nouveau. Juste tout ensemble.
**[B · CARTE]** « 3. Petit, réel, honnête » — VO : Dernier conseil : choisissez petit. Un message, une liste, un plan de révision, une affiche : c'est largement assez. Un petit problème bien traité vaut mieux qu'un grand projet flou. Et dans le bilan, dites aussi ce qui n'a pas marché. C'est une preuve de sérieux.
**[F · CAM B]** Quelques bons sujets : les questions fréquentes de vos clients, une réunion à préparer. Ou un cours à réviser, une lettre à écrire. Vous pouvez rédiger la fiche sur votre téléphone, ou à la main. Gardez vos consignes et vos réponses : elles prouvent votre démarche.
**[G · CONSIGNE]** « Rôle : tu es un conseiller patient qui aide à résoudre des problèmes du quotidien. Contexte : je suis [votre métier] à [votre ville]. Mon problème : [en 2 phrases, sans nom ni donnée personnelle]. Tâche : propose-moi 3 façons dont un assistant IA pourrait m'aider. Ensuite, pose-moi 2 questions pour préciser mon problème. Format : liste courte, phrases simples, en français. » — VO : Pour trouver votre sujet, commencez par cette consigne RCTF. Elle vous aide à préciser votre problème.
[PAUSE 1 s]

**[B4 — Application · 3:01–4:47]**

**[F · CAM A]** Voici un projet réussi : celui d'Aïcha. Suivons sa fiche, partie par partie.
**[A · ÉCRAN]** *(la fiche projet d'Aïcha, partie 1 « Problème » surlignée)* — VO : Un : le problème. « Mes clientes me posent chaque jour les mêmes questions sur WhatsApp. Horaires, livraison, paiement, retouches. Je réponds tard le soir. »
**[A · ÉCRAN]** *(ChatGPT : la consigne RCTF, puis la relance)* — VO : Deux : les consignes, avec la méthode RCTF. Rôle : une vendeuse aimable et précise. Contexte : ses vraies informations sur les horaires, la livraison, le paiement. Tâche : une réponse courte pour chaque question. Format : deux lignes, ton chaleureux, en français. Puis une relance : « Plus simple, et donne aussi une version en haoussa. »
**[A · ÉCRAN]** *(WhatsApp Business : la liste des réponses rapides enregistrées)* — VO : Trois : le résultat. Cinq réponses prêtes, en français et en haoussa. Aïcha les enregistre comme réponses rapides dans WhatsApp Business. Une touche, et la réponse s'affiche.
**[A · ÉCRAN]** *(la fiche, partie 4 « Vérification », trois coches)* — VO : Quatre : la vérification. Chaque réponse est comparée à ses vraies informations. Zeinabou, sa nièce, a relu la version haoussa et corrigé deux tournures. Aucun nom de cliente n'a été tapé.
**[A · ÉCRAN]** *(la fiche, partie 5 « Bilan »)* — VO : Cinq : le bilan. « Ce qui a marché : des réponses claires, envoyées plus tôt. Ce qui n'a pas marché : le haoussa demandait une relecture. Je referai : une version en zarma, relue elle aussi. »
**[F · CAM A]** Une page, cinq parties, un vrai problème réglé. Voilà le niveau attendu. Ni plus, ni moins.
[PAUSE 1 s]

**[B5 — Consolidation · 4:47–5:29]**

**[F · CAM A]** Maintenant, un contre-exemple. Souleymane dépose ceci : « J'ai demandé un plan d'affaires à l'IA. Voici le texte. » Que lui manque-t-il ?
**[B · CARTE]** « Projet de Souleymane : que manque-t-il ? » [SILENCE 2 s]
**[F · CAM A]** Presque tout. Pas de problème précis. Pas de consigne. Pas de vérification. Pas de bilan. L'IA a travaillé. Lui, très peu. Souleymane n'a pas échoué : il n'a simplement pas commencé. Ce qu'on évalue, c'est votre démarche, pas le texte de la machine.
**[F · CAM B]** Pour s'en sortir, il lui suffit de reprendre la fiche. Un problème, une consigne, une relance, une vérification, un bilan.
[PAUSE 1 s]

**[B6 — Clôture · 5:29–6:17]**

**[F · CAM A]** Aïcha, Moussa et Hadiza ont déposé leur fiche. À votre tour. Récapitulons le cours, en six points.
**[B · CARTE]** « 1. L'IA reconnaît, prédit, produit » « 2. Elle apprend d'exemples » « 3. Dialoguez et relancez » — VO : Un : l'IA reconnaît, prédit, produit. Deux : elle apprend d'exemples. Trois : dialoguez avec elle, et relancez.
**[B · CARTE]** « 4. La méthode RCTF » « 5. Chances et risques » « 6. Vérifier, protéger, questionner » — VO : Quatre : la méthode RCTF, rôle, contexte, tâche, format. Cinq : chances et risques. Six : vérifier, protéger, questionner.
**[B · CARTE DE RAPPEL]** « 1. Résoudre un vrai problème avec l'IA et le documenter » « 2. Cinq parties, cinq critères » — VO : Et pour ce projet : résoudre un vrai problème avec l'IA et le documenter. Cinq parties, cinq critères.
**[F · CAM A]** Remplissez votre fiche, puis déposez-la dans la leçon sept, sur Karatou Academy. Pour aller plus loin, le module Intelligence artificielle vous attend. Résolvez un vrai problème avec l'IA, et documentez votre démarche.

#### Liste des plans

| # | Type | Cadre / source | Contenu | Durée | Notes |
|---|---|---|---|---|---|
| 1 | E | Trois vignettes illustrées côte à côte : Aïcha (Niamey, Niger), Moussa (Thiès, Sénégal), Hadiza (Garoua, Cameroun) | « Trois vrais problèmes » | 6 s | Mêmes illustrations que dans les leçons précédentes |
| 2 | F | CAM A, plan poitrine centré | Promesse, rappel de la leçon 6, les trois problèmes | 28 s | Promesse terminée avant 0:12 |
| 3 | F | CAM A, tiers gauche | La peur du projet final ; ce qui compte : la démarche | 25 s | Deux passages encadrant le plan 4 |
| 4 | B | Carte | « Un petit problème réel, bien traité, bien raconté » | 10 s | |
| 5 | B + C | Carte « 1. Une fiche projet en cinq parties » puis schéma | « Problème · Consignes · Résultat · Vérification · Bilan » | 40 s | Les cinq parties s'allument une à une, au rythme de la voix |
| 6 | B | Carte « 2. Cinq critères pour réussir » | Les cinq critères | 18 s | Critères révélés un à un, chacun avec une case à cocher |
| 7 | F | CAM A, tiers gauche | « Ils viennent tous des leçons précédentes » | 8 s | |
| 8 | B + F + G | Carte « 3. Petit, réel, honnête », CAM B, carte de consigne | Choisir petit ; exemples de sujets ; consigne pour trouver son sujet | 45 s | Carte G lisible au moins 8 s sans voix |
| 9 | A | Document : la fiche projet d'Aïcha (une page) | Parties 1, 4 et 5 | 45 s | Document propre, police large, données fictives |
| 10 | A | Capture ChatGPT | Consigne RCTF, puis relance | 30 s | Masquer le nom du compte |
| 11 | A | Capture WhatsApp Business | Liste des réponses rapides enregistrées | 18 s | Compte de démonstration ; aucun client réel |
| 12 | F | CAM A | « Une page, cinq parties… Ni plus, ni moins » | 8 s | |
| 13 | F + B | CAM A, carte question, CAM A, CAM B | Contre-exemple de Souleymane, silence, réponse | 38 s | Silence de 2 s regard caméra |
| 14 | B | Deux cartes récapitulatives puis carte de rappel | Six points du cours ; rappel du projet | 34 s | Chaque carte ≤ 90 caractères ; au moins 4 s par carte complète |
| 15 | F | CAM A centré ; CAM B, insert serré | Ouverture du récapitulatif, consigne de dépôt, dernière phrase ; insert : mains qui remplissent une fiche papier | 20 s + rushes | L'insert sert de couverture pour les versions doublées |

#### Montage idéal

| Temps | Timecode cible | Image principale | Habillage (motion graphics) | Texte à l'écran | Son | Transition |
|---|---|---|---|---|---|---|
| B1 | 0:00–0:30 | Trois vignettes (E), puis CAM A centré | Bandeau des trois villes | « Niamey · Thiès · Garoua » | voix seule | coupe |
| B2 | 0:30–1:05 | CAM A, carte, CAM A | aucun | « Un petit problème réel, bien traité, bien raconté » | voix seule | coupe |
| B3 | 1:05–3:01 | Cartes et schéma des cinq parties, cartes des critères, CAM A et B, carte G | Cinq parties numérotées ; cases à cocher des critères | Titres des unités ; les cinq parties ; les cinq critères ; consigne G | voix seule | coupes ; une transition plein cadre vers le schéma |
| B4 | 3:01–4:47 | Fiche d'Aïcha et captures | Surlignage de la partie en cours ; coches de la vérification | Numéro et nom de chaque partie | voix seule | coupe à chaque partie |
| B5 | 4:47–5:29 | CAM A, carte question, CAM A, CAM B | Carte question | « Projet de Souleymane : que manque-t-il ? » | voix, puis 2 s de silence total | coupe sèche après le silence |
| B6 | 5:29–6:17 | CAM A centré, deux cartes récapitulatives, carte de rappel, CAM A | Cartes récapitulatives ; carte de rappel | Six points du cours ; deux points de rappel | voix seule | coupe, puis carte de clôture (Partie 1) |

**Notes de montage** : leçon de synthèse et de passage à l'action : ton chaleureux, rythme un peu plus posé. En B4, la fiche d'Aïcha est le fil visuel : revenir à elle entre deux captures, avec la partie en cours surlignée. En B6, les deux cartes récapitulatives et la carte de rappel s'enchaînent sans visage, puis Idriss revient centré pour la consigne de dépôt et la dernière phrase. Couper les hésitations ; garder le sourire sur « À votre tour ». Zoom lent limité à 6 % sur la fiche. Sous-titres en bas sur plaque sombre quand la fiche occupe le cadre. Plans de couverture : plan 15 (insert), plan 9, cartes.

#### Versions EN / HA / DJE

- **À re-filmer dans la langue** (≤ 40 s au total, l'owner face caméra) : B1, deux premières phrases du `[F · CAM A]` (environ 13 s) : « À la fin de cette leçon, vous saurez résoudre un vrai problème avec l'IA et le documenter. Dans la leçon précédente, vous avez appris trois réflexes : vérifier, protéger, questionner. » · B6, dernier `[F · CAM A]` (environ 14 s) : « Remplissez votre fiche, puis déposez-la dans la leçon sept, sur Karatou Academy. Pour aller plus loin, le module Intelligence artificielle vous attend. Résolvez un vrai problème avec l'IA, et documentez votre démarche. »
- **Doublé en voix clonée** : B1 fin (« Aïcha répond tard… ») → plan 1 (trois vignettes) prolongé · B2 « Un projet final fait souvent peur… » → plan 4 · B2 « Ce qui compte… » → plan 15 (insert) · B3 « Vous reconnaissez chaque critère… » → plan 6 prolongé · B3 bons sujets → plan 15 · B4 « Voici un projet réussi… » et « Une page, cinq parties… » → plan 9 (fiche entière) · B5 → carte question, puis plan 15 · B6 « Aïcha, Moussa et Hadiza ont déposé… » → plan 1 réutilisé en petit format sur fond de carte, puis cartes récapitulatives.
- **Notes d'adaptation** : « plan d'affaires » = « business plan » en anglais. Les cinq parties de la fiche (Problème, Consignes, Résultat, Vérification, Bilan) et les six points du récapitulatif reprennent exactement les mots-clés choisis pour les leçons précédentes dans chaque langue. Le nom du module et le chemin de dépôt se disent tels qu'ils apparaissent sur la plateforme dans la langue de la version. La fiche projet modèle est traduite dans les trois langues.

## 2.6 Captures et éléments à préparer

| Leçon | Élément | Comment l'obtenir | Qui |
|---|---|---|---|
| Toutes | Téléphone Android de démonstration en français, compte Google de démonstration, comptes de démonstration ChatGPT et Gemini | Créer les comptes pour le cours uniquement ; aucune donnée personnelle ; noter les identifiants hors du dépôt | owner |
| Toutes | Contacts et groupes WhatsApp de test (« Cliente test », « Groupe quartier (test) ») ; WhatsApp Business installé sur le téléphone de démonstration | Numéros de l'équipe, renommés ; jamais de vrais clients ni de vrais habitants | owner |
| Toutes | Illustrations des personas : Aïcha (Niamey, Niger), Moussa (Thiès, Sénégal), Hadiza (Garoua, Cameroun), dans un style simple et constant | Dessinées pour le cours, jamais générées pour imiter une personne réelle ; réutilisées d'une leçon à l'autre | Claude (motion), validation owner |
| Toutes | Relecteurs haoussa et zarma | Pour les versions HA / DJE et pour tout texte haoussa visible dans les captures (`is4`, `is5`, `is6`, `is7`) | owner |
| Toutes | Vérification de l'état des outils montrés | Refaire chaque geste la veille du tournage ; lever chaque mention « à vérifier au moment du tournage » ; adapter la voix off si l'interface a changé | owner |
| 1 | Photo d'une allée de tissus du Grand Marché de Niamey | Prise sur place, sans visage reconnaissable, avec l'accord des commerçants ; sinon photo libre de droits | owner |
| 1 | Six à huit photos de pagnes dans la galerie du téléphone de démonstration | Photos prises par l'équipe, sauvegarde activée si la recherche par contenu l'exige | owner |
| 1 | Capture : clavier qui propose des mots après « Je passe au marché » | Enregistreur d'écran ; conversation de test | owner |
| 1 | Capture : Google Lens sur l'étiquette en anglais d'un rouleau de tissu, puis traduction | Rouleau réel ; lumière du jour | owner |
| 1 | Captures : Gemini (une question, une réponse) pour B3 ; séquence B4 complète (Photos « pagne », WhatsApp « Les nouveaux pagnes sont », Gemini dicté, Notes « Mes 3 IA ») ; calculatrice du téléphone | Une prise continue pour B4, une seconde de sécurité | owner |
| 1 | Pictogrammes « mot suivant · vidéo suivante · message douteux » et schéma « Reconnaître · Prédire · Produire » | Dessinés pour le cours | Claude (motion) |
| 2 | Oignon violet, tomate, pomme de terre ; ordinateur avec webcam et Chrome | Achat au marché la veille ; fond uni derrière les légumes | owner |
| 2 | Capture : Teachable Machine, de l'accueil à l'aperçu ; capture de la pomme de terre | Enregistreur d'écran de l'ordinateur ; même lumière pendant l'enregistrement et le test ; masquer les pourcentages au montage | owner |
| 2 | Grille de photos d'oignons et de tomates étiquetées (carte 1) | Photos prises par l'équipe | owner |
| 2 | Schémas « Exemples → Entraînement → Prédiction » et « Ce soir, nous mangeons du… tô ? riz ? pain ? » | Dessinés pour le cours, relocalisés pour chaque langue | Claude (motion) |
| 3 | Captures Gemini : « salubrité Garoua » seul ; dictée de la demande ; réponse longue ; deux relances ; mode de conversation vocale en direct | Téléphone de démonstration, micro-cravate coupé (la dictée passe par le téléphone) | owner |
| 3 | Capture de la boutique d'applications : fiches de Gemini, ChatGPT, Claude, Copilot | Recherche dans la boutique ; ne garder ni note, ni avis, ni prix à l'écran | owner |
| 3 | Capture WhatsApp : message collé dans « Groupe quartier (test) », non envoyé | Téléphone de démonstration | owner |
| 4 | Capture ChatGPT : demande vague « Écris une pub pour mes pagnes. » et réponse qui ajoute des détails non fournis | Conversation séparée ; garder une réponse réelle, jamais retouchée | owner |
| 4 | Captures ChatGPT : consigne RCTF d'Aïcha, réponse, deux relances, version haoussa ; WhatsApp : statut publié | Consigne collée depuis Notes ; version haoussa relue avant publication | owner, relecteur haoussa |
| 4 | Photo d'un étal de pagnes wax bleus et orange | Prise par l'équipe, sans visage | owner |
| 5 | Capture Google Traduction : une phrase simple du français vers le haoussa | Phrase neutre, traduction vérifiée par un locuteur | owner, relecteur haoussa |
| 5 | Captures Gemini avec recherche web : tableau chances / risques, lien ouvert, phrase surlignée, relance sur les compétences ; Notes « Mon bilan IA » | Tous les exemples lisibles vérifiés avant publication ; sinon floutés | owner |
| 5 | Références exactes des trois sources : stratégie continentale de l'Union africaine (2024), recommandation de l'OMS sur la tuberculose (2021), étude de l'OIT sur l'IA générative et l'emploi (2023) | Retrouver le titre, l'année et le lien officiel de chaque document ; corriger la carte si un libellé diffère | Claude (recherche), validation owner |
| 5 | Épi de mil (insert) | Marché ou champ familial | owner |
| 6 | Capture des réglages de confidentialité d'un assistant (option d'utilisation des conversations pour améliorer le modèle) | ChatGPT, Gemini ou Claude, sur le compte de démonstration ; aucune adresse visible | owner |
| 6 | Liste de volontaires et fiche d'organisation de la journée de salubrité (fictives, imprimées) | Rédigées pour le cours, noms et numéros inventés, floutés quand même | Claude (rédaction), owner (impression) |
| 6 | Captures Gemini : consigne de contrôle, ajouts listés, question d'Hadiza, version haoussa ; WhatsApp : envoi dans le groupe de test | Suite de la conversation de la leçon 3, même compte | owner, relecteur haoussa |
| 7 | Modèle de fiche projet d'une page en cinq parties (FR, EN, HA, DJE) | Rédigé pour le cours, téléchargeable depuis la leçon 7 | Claude (rédaction), validation owner |
| 7 | Fiche projet d'Aïcha remplie (cas fictif) | Rédigée pour le cours, mise en page lisible sur téléphone | Claude (rédaction), validation owner |
| 7 | Captures ChatGPT (consigne RCTF et relance d'Aïcha) et WhatsApp Business (réponses rapides enregistrées) | Compte de démonstration ; réponses relues, version haoussa comprise | owner, relecteur haoussa |
| 7 | Mode de dépôt du projet et grille des cinq critères | Décider du format accepté (formulaire, fichier, photo d'une page manuscrite) et de qui évalue ; aligner la phrase de dépôt du script | owner |
