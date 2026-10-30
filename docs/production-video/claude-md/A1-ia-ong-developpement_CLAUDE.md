# CLAUDE.md — Karatou Academy · Production vidéo
# Cours Alt — IA pour les ONG et le développement

> **Pour l'owner — mode d'emploi**
> 1. Créez un dossier vide sur votre ordinateur, par exemple `karatou-ia-ong-developpement`.
> 2. Copiez-y ce fichier et renommez-le exactement `CLAUDE.md`.
> 3. Ouvrez Claude Code dans ce dossier (dans un terminal : `cd karatou-ia-ong-developpement` puis `claude`).
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
livraison/ia-ong-developpement/<id>/      fichiers livrés · livraison/ia-ong-developpement/INTEGRATION.md
```

`<id>` est l'identifiant de la leçon (`on1`, `on2`…). Langues : `fr`, `en`, `ha`, `dje`.

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

### 9.2 Nommage et contenu de `livraison/ia-ong-developpement/<id>/`

`ia-ong-developpement_<id>_<langue>_v<n>.mp4` · `…-360.mp4` · `….srt` · `….vtt` · `…_cover.jpg` (1920 × 1080, qualité 85,
première image stable de B1) · `…_transcript.md` (un titre par temps, texte dit + actions à l'écran entre
crochets) · `RECETTE.md`.

### 9.3 Mise en ligne

Chaîne YouTube **Karatou Academy**, vidéos **non répertoriées**, une vidéo par langue, sous-titres `.srt` ajoutés
comme piste. Titre : « Karatou Academy — IA pour les ONG et le développement — Leçon N : <titre> (<LANGUE>) ». Le site lit des **URL
d'intégration** : `https://www.youtube.com/embed/<ID>` (jamais `watch?v=` ni `youtu.be/`). Teste chaque URL dans un
navigateur avant de la consigner.

### 9.4 Intégration au site — `livraison/ia-ong-developpement/INTEGRATION.md`

Le site lit, pour chaque leçon, un champ `video: { fr, en, ha }` dans les fichiers TypeScript du dépôt
`karatou-academy-app` (registre `authoredLessons`). Chaque leçon y a aussi un texte (objectif, quatre sections,
exemple, exercice, quiz de cinq questions, réflexion, glossaire), rédigé par l'équipe avec le skill
`karatou-course-creator`, et des lignes Supabase (module, leçons) pour la progression et les certificats.

Ton rôle : tenir `INTEGRATION.md` à jour, leçon par leçon : module `ia-ong-developpement`, id, titre, promesse (objectif), cas
réel (exemple), exercice (titre et étapes), carte de rappel, quiz, marques citées, URL FR / EN / HA, et URL DJE
« en attente ». Ce fichier est remis à l'équipe technique ; tu ne modifies pas le dépôt du site.

### 9.5 Corrections après publication

Une URL publiée est figée. Pour corriger : nouvelle version `v2` → mise en ligne → nouvelle URL testée →
`INTEGRATION.md` mis à jour → l'équipe technique remplace l'URL → l'ancienne vidéo est rendue privée, jamais
supprimée. Consigne chaque version dans le journal de `PROGRESS.md`.

## 10. `PROGRESS.md` — modèle

```markdown
# PROGRESS — Cours Alt · IA pour les ONG et le développement
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
| Numéro | Alt (A1) — cours alternatif aux cours 4 ou 5 |
| Titre | IA pour les ONG et le développement |
| Format | Filmé (humain face caméra + captures + motion graphics) |
| Owner / présentateur | Aminou — nom complet et titre exact demandés au premier lancement (indiqués par l'équipe : Aminou Laouali Abdou, Consultant en IA et Innovation, Google Generative AI Leader — à faire confirmer) |
| Rubrique | IA & Données |
| Public | Chargés de programme, responsables de suivi-évaluation, chargés de communication et coordinateurs d'ONG nationales et internationales, d'agences des Nations unies (dont le PNUD) et de projets de développement ; consultants du secteur. Ils connaissent le cycle de projet ; aucune compétence technique en IA n'est requise. |
| Slug du module (provisoire) | `ia-ong-developpement` |
| Préfixe des leçons | `on` (ex. `on1` … `on6`) |
| Nombre de vidéos | 6 (dont la dernière = projet final certifiant) |
| Durée par vidéo | 5–8 min (cible 6:00) |
| Langues | FR (tournage, référence) · EN · HA · DJE |
| Prérequis | Un ordinateur, conseillé dès la leçon 2 (un téléphone suffit pour regarder les vidéos) ; une connexion pour refaire les démonstrations ; un compte gratuit sur un assistant IA (Claude, Gemini, ChatGPT ou Copilot), ou l'outil validé par votre organisation ; un compte Google gratuit (NotebookLM, Google Sheets, Google Docs) ; un compte KoboToolbox gratuit. Connaître le cadre logique aide, sans être indispensable. |
| Promesse du cours | Vous utiliserez l'IA à chaque étape de vos projets, de la note conceptuelle au rapport, sans inventer un chiffre ni exposer un bénéficiaire. |
| Positionnement | Plus sectoriel que la leçon c4 « L'IA dans votre organisation » (choix des cas d'usage, toutes organisations) et que c6 (éthique, biais, protection des données) : ici, les gestes du métier de projet (proposition, rapport, suivi-évaluation, synthèse), sous les règles humanitaires de protection des données. Il applique la rédaction de consignes (c3, cl2) et la gestion de projet (p1–p5) sans les refaire. Pour aller plus loin : cours 11 « Excel + IA » (tableaux croisés), cours 8 « Automatiser son travail sans coder » (rapports automatiques), cours 2 « Agents IA » (veille automatisée), cours 13 « IA pour l'administration » (notes, PV), module `data-analysis`. |
| Fil rouge | L'ONG fictive Rônier, basée à Tillabéri, et son projet fictif de résilience Racines (maraîchage de contre-saison, petit élevage, groupes d'épargne de femmes) dans trois communes non nommées de la région, financé par un bailleur fictif, le Fonds Tamarinier. Personnages : Abdoul-Aziz, coordinateur (L1, L5) ; Hadiza, chargée de programme (L2, L3) ; Issoufou, responsable suivi-évaluation (L4) ; Mariama, chargée de communication (L5) ; Souleymane, animateur de terrain (L1). En parallèle, chaque apprenant construit son propre projet fictif, pièce par pièce, jusqu'au dossier final (L6), qui reprend le dossier Racines comme modèle. |
| Marques citées | Claude, Gemini, ChatGPT, Copilot, NotebookLM, Google, Google Drive, Google Docs, Google Sheets, Excel, KoboToolbox ; organisation nommée : PNUD. Aucun logo ni document réel d'organisation à l'écran : toutes les données, tous les documents et tous les personnages sont fictifs. |

## 2.2 Ce que l'apprenant saura faire

- Classer les tâches de son cycle de projet et les données qu'elles mobilisent (vert, orange, rouge) avant tout usage d'un assistant IA, et proposer une variante sans donnée nominative.
- Produire avec un assistant IA le premier jet d'une note conceptuelle (arbre à problèmes, théorie du changement, cadre logique), puis le corriger : indicateurs mesurables et datés, aucune valeur inventée.
- Rédiger une section de rapport narratif à partir d'un tableau d'indicateurs et de notes anonymisées, contrôler chaque chiffre dans un tableau de contrôle et distinguer extrants et effets.
- Concevoir un questionnaire KoboToolbox au format XLSForm (consentement, minimisation, libellés traduits relus) et analyser des réponses ouvertes avec une grille de codes, en comptant dans le tableur et en orientant tout signalement vers le mécanisme de plaintes.
- Rédiger avec NotebookLM une note de synthèse d'une page dont chaque message renvoie à une citation vérifiée (zone, année, projet), et entretenir une veille documentaire.
- Assembler un dossier de projet fictif complet avec sa note d'usage responsable, et l'auto-évaluer sur cinq critères : cohérence, exactitude, protection, traçabilité, clarté.

## 2.3 Plan du cours

| Leçon | Id | Titre | Promesse (objectif) | Cas réel (B1) | Démo (B4) | Durée cible |
|---|---|---|---|---|---|---|
| 1 | `on1` | Où l'IA aide votre projet, et où elle n'entre pas | Vous saurez situer l'IA dans le cycle de projet, sans exposer personne. | Abdoul-Aziz (coordinateur, Tillabéri) : l'équipe veut confier la liste nominative des ménages à un assistant pour trouver les doublons. | Claude (incognito) + Google Sheets : décrire les colonnes sans aucune ligne réelle, obtenir une formule, l'appliquer à une liste fictive, faire vérifier les doublons sur le terrain. | 6:00 |
| 2 | `on2` | Note conceptuelle : du problème au cadre logique | Vous saurez bâtir avec l'IA problème, théorie du changement et cadre logique. | Hadiza (chargée de programme) : dix jours pour une note conceptuelle de quatre pages au Fonds Tamarinier (fictif). | Claude : critères de l'appel + diagnostic anonymisé → arbre, théorie du changement, cadre logique ; corrections ; relance « évaluateur ». | 6:00 |
| 3 | `on3` | Rapport narratif : chaque chiffre a sa source | Vous saurez rédiger un rapport narratif où chaque chiffre a sa source. | Hadiza : partie narrative du rapport semestriel du projet Racines, à rendre dans quinze jours. | Claude : tableau d'indicateurs CSV + notes → section « Résultat 1 » → tableau de contrôle (un chiffre corrigé), écarts expliqués. | 6:00 |
| 4 | `on4` | Suivi-évaluation : KoboToolbox, verbatims et tableau de bord | Vous saurez préparer un questionnaire KoboToolbox et analyser des réponses ouvertes. | Issoufou (suivi-évaluation) : trois cents réponses ouvertes jamais exploitées, enquête de mi-parcours à préparer. | KoboToolbox → tableur (anonymisation) → Claude (grille, codage) → tableau croisé dynamique, échantillon vérifié, graphique au tableau de bord. | 6:00 |
| 5 | `on5` | Notes de synthèse et veille avec NotebookLM | Vous saurez résumer de longs documents en une note sourcée d'une page. | Mariama (communication) prépare la page d'Abdoul-Aziz pour une réunion de coordination à Niamey : quatre documents, environ deux cents pages. | NotebookLM : carnet, quatre PDF fictifs, questions, contradictions, citations ouvertes, note d'une page. | 6:00 |
| 6 | `on6` | Projet final : votre dossier de projet complet | Vous saurez assembler, vérifier et déposer votre dossier final. | Vous : cinq leçons, un projet fictif, un dossier à déposer. | Dossier exemple Racines : un indicateur suivi à travers les cinq pièces. | 6:00 |

## 2.4 Plan de tournage idéal

### Matériel et réglages

- **Caméra A** : smartphone récent ou hybride, 4K à 25 images par seconde (1080p si l'appareil ne suit pas), objectif principal (pas le grand-angle), sur trépied. Exposition, mise au point et balance des blancs verrouillées (5 600 K). Vitesse d'obturation 1/50 s : le réseau électrique nigérien est en 50 Hz, ce réglage évite le scintillement des lampes à l'image.
- **Caméra B** (optionnelle mais utile) : second smartphone, mêmes réglages, à 30–45° de l'axe. Elle sert aux relais de montage, aux inserts et à la couverture des passages doublés en EN, HA et DJE.
- **Son** : micro-cravate (filaire ou sans fil) enregistré sur la caméra A, plus un enregistrement de sécurité sur un second appareil ; 48 kHz ; crêtes vers −12 dB ; écoute au casque fermé.
- **Lumière** : deux panneaux LED diffusés (boîte à lumière ou tissu blanc). Principale à 45°, un peu au-dessus des yeux ; appoint de l'autre côté, à faible puissance. Option : une lampe de bureau allumée dans le décor.
- **Téléprompteur** : application sur tablette ou téléphone placé juste sous l'objectif (ou miroir de téléprompteur d'entrée de gamme) ; gros caractères ; un bloc de script par écran.
- **Énergie** : batteries chargées, batterie externe, onduleur pour les panneaux et l'ordinateur en cas de délestage.
- **Captures** : ordinateur portable en 1920 × 1080 avec un enregistreur d'écran gratuit (par exemple OBS Studio) ; enregistreur d'écran intégré d'Android pour le formulaire KoboToolbox sur téléphone.

### Décor, lumière, son

- **Décor** : un bureau de projet sobre et vraisemblable, à Niamey ou à Tillabéri. Une table, l'ordinateur, une carte murale du Niger par régions (sans logo), un tableau blanc où un cycle de projet est dessiné à la main (le même dans toutes les leçons), des classeurs étiquetés « Rapports — projet fictif », un téléphone Android sur support, une plante. Fond à 1,5–2 m pour qu'il soit flou.
- **Interdits à l'image** : logo d'une organisation réelle (gilet, sac, tasse, affiche, autocollant sur l'ordinateur), document réel lisible, photo de bénéficiaire, écran affichant des données réelles.
- **Tenue** : unie, couleurs moyennes, sans logo ni fines rayures ; la même pour tout le cours (photo de référence prise le premier jour).
- **Lumière** : rideaux tirés si une fenêtre est dans le champ ; pas de mélange de lumière du jour et de LED à des températures différentes ; positions des panneaux et du présentateur marquées au sol pour les retrouver à chaque session.
- **Son** : climatiseur et ventilateur coupés pendant les prises (rallumés entre les blocs) ; téléphones en mode avion ; portes fermées ; tapis et coussins contre l'écho ; tournage tôt le matin, quand la ville et la chaleur sont plus calmes ; 10 s de silence d'ambiance enregistrées à chaque session.

### Cadrages

- **CAM A** : plan poitrine 16:9, en 4K si possible (sinon 1080p), regard caméra, yeux au tiers supérieur, objectif à hauteur des yeux, à environ 1,5 m. Bas du cadre libre (environ 20 %) pour les sous-titres. En arrière-plan flou : le tableau blanc et la carte.
- **CAM B** : plan taille de trois quarts, même hauteur ; relais sur les blocs face caméra de plus de 20 s.
- **Inserts** (CAM B, 5 à 10 s chacun, tous fictifs) : mains sur le clavier ; téléphone affichant le formulaire KoboToolbox en aperçu ; tableau blanc avec un arbre à problèmes (L2) ; tableau de contrôle imprimé et surligneur (L3) ; écoute d'un résumé audio au téléphone avec des écouteurs (L5) ; pages du dossier final posées sur la table (L6).
- Recadrage au montage autorisé jusqu'à 120 % sur les images 4K.

### Captures d'écran

- 1920 × 1080, 30 images par seconde. Navigateur Chrome avec un profil dédié « Karatou Démo » : favoris masqués, extensions désactivées, notifications coupées, thème clair, interface en français, zoom à 125 % pour que le texte reste lisible sur téléphone.
- Comptes de démonstration : Claude (version gratuite) avec la mémoire désactivée et des conversations incognito ; un compte Google de démonstration (Drive, Docs, Sheets, NotebookLM) ; un compte KoboToolbox de démonstration. Ne jamais filmer un écran de connexion, une adresse e-mail personnelle ni un historique de conversations.
- Données : uniquement les fichiers fictifs listés en 2.6, générés par Claude et relus par l'owner. Même fictive, une liste nominative est floutée à l'image (L1).
- Les sorties d'IA varient d'une prise à l'autre. On filme la sortie réelle et on ajuste la voix off des plans A à ce qui est à l'écran ; le point pédagogique reste le même. On ne retouche jamais une sortie d'IA à l'image, et on n'invente aucune interface.
- Méthode : une prise continue par démonstration, souris lente, 2 s d'arrêt sur chaque résultat ; puis des captures fixes des étapes clés. Les intitulés de menus marqués « [à vérifier au moment du tournage] » sont relevés sur l'interface du jour et reportés dans les annotations.
- Liste détaillée, leçon par leçon : section 2.6.

### Organisation du tournage

- **Session 1** (matinée, environ 4 h) : les six ouvertures (B1) du cours d'abord, avec l'énergie du début de séance ; puis les autres blocs face caméra des leçons 1 à 3, dans l'ordre B2, B3, B4, B5, B6.
- **Session 2** (matinée, environ 4 h) : les blocs face caméra des leçons 4 à 6 ; puis les ouvertures et conclusions re-filmées en EN, HA et DJE (40 s au plus par leçon) ; puis les inserts CAM B.
- **Session 3** (une journée) : toutes les captures d'écran (2.6) et la voix off des plans A, enregistrée dans la même pièce, avec le même micro, à la même distance.
- Pour chaque bloc : 1 s de silence avant et après, au moins deux prises bonnes (dont une prise de sécurité), un clap de la main au début pour synchroniser CAM A, CAM B et le son ; numéros de prise notés sur le script imprimé.
- Ton constant : revoir la prise de référence (B1 de la leçon 1) au début de chaque session ; même débit, même énergie, même distance au micro.
- Volume utile : environ 36 minutes de vidéo finale pour les six leçons.

### Checklist du jour J

- [ ] Batteries chargées (caméras, micro, panneaux), batterie externe, onduleur testé
- [ ] Deux cartes mémoire vides par appareil ; espace libre sur les téléphones
- [ ] Mode avion sur tous les téléphones ; notifications coupées sur l'ordinateur
- [ ] Climatiseur et ventilateur coupés pendant les prises
- [ ] Tenue identique, sans logo ; photo de référence prise
- [ ] Décor vérifié : aucun logo, aucun document réel lisible, tableau blanc identique
- [ ] Réglages verrouillés : 25 images par seconde, 1/50 s, 5 600 K, mise au point, exposition
- [ ] Test de 30 s image et son, écouté au casque ; 10 s de silence d'ambiance enregistrées
- [ ] Téléprompteur chargé et vitesse testée ; script imprimé avec cases de prises
- [ ] Session captures : comptes de démonstration connectés et vidés, mémoire désactivée, fichiers fictifs prêts (2.6)
- [ ] Eau à portée de main, pause toutes les 45 minutes, marques au sol en place

## 2.5 Les leçons

### Leçon 1 — Où l'IA aide votre projet, et où elle n'entre pas (`on1`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez situer l'IA dans le cycle de projet, sans exposer personne. »
- **Cas réel (B1 → B6)** : Tillabéri, un lundi matin. Abdoul-Aziz coordonne l'ONG Rônier (fictive), qui mène le projet de résilience Racines. Avant une distribution, son équipe veut coller la liste des 1 200 ménages, avec noms et téléphones, dans un assistant IA pour repérer les doublons. L'enjeu : dans une zone d'insécurité, une liste de bénéficiaires peut exposer des familles, et une suppression automatique peut priver un ménage de son aide. En B6, la liste est propre sans qu'aucun nom soit sorti de l'organisation : l'IA a donné la méthode, le tableur l'a appliquée, Souleymane, l'animateur, a tranché sur le terrain, et deux homonymes sont restés sur la liste.
- **Unités de notion (B3)** : 1. Le cycle de projet : où l'IA aide — partout où il faut lire ou écrire : premier jet, résumé, structure, traduction, classement de réponses. · 2. Ce que l'IA ne décide jamais — qui reçoit l'aide, qui est éligible, quel chiffre part chez le bailleur : un humain décide et signe. · 3. Le feu tricolore des données — vert (public ou générique), orange (interne, agrégé, anonymisé), rouge (identifie une personne), sous trois principes : ne pas nuire, consentement, minimisation.
- **Démo (B4)** : Claude en version gratuite (compte de démonstration, conversation incognito) et Google Sheets (compte Google de démonstration), avec le fichier fictif « liste_menages_fictive » (60 ménages, dont 2 inscrits deux fois et 1 paire d'homonymes). 1. Classer la demande : liste nominative = rouge, elle n'entre pas dans l'assistant. 2. Ouvrir une conversation incognito, qui n'utilise ni n'alimente la mémoire de Claude (icône fantôme en haut à droite [à vérifier au moment du tournage]). 3. Coller la consigne : la structure des colonnes, aucune ligne réelle. 4. Lire la méthode proposée : une formule et une mise en forme conditionnelle. 5. Dans le tableur, en F2, appliquer la formule puis l'étendre ; formule de référence : `=SI(NB.SI.ENS($A$2:$A$61;A2;$B$2:$B$61;B2;$C$2:$C$61;C2)>1;"doublon possible";"")` (séparateur « ; » ou « , » selon les paramètres régionaux du classeur [à vérifier au moment du tournage]). 6. Colorer les lignes signalées (Format > Mise en forme conditionnelle). 7. Remplir la colonne G « Vérification terrain » : 4 lignes = 2 ménages inscrits deux fois (une ligne retirée pour chacun), 2 lignes = homonymes conservés. Résultat attendu à l'écran : six lignes colorées, colonne G remplie, aucune donnée réelle dans la conversation. Dans un autre assistant, utiliser l'équivalent (conversation temporaire, historique désactivé) [à vérifier au moment du tournage].
- **Consolidation (B5)** : prédiction. Question : la consigne « Résume les besoins de Fati, veuve, trois enfants, près du puits » est-elle verte, orange ou rouge ? Réponse : rouge, car un prénom, une situation et un lieu suffisent à reconnaître quelqu'un au village. Version orange : « 12 ménages dirigés par une femme, dans trois villages ».
- **Consigne à copier** :

```text
Tu es un assistant spécialisé dans la gestion de données d'ONG.
Je ne te donnerai aucune donnée réelle : seulement la structure de ma liste, dans [Google Sheets / Excel].
- Colonne A : [nom du chef de ménage]
- Colonne B : [village]
- Colonne C : [âge du chef de ménage]
- Colonne D : [taille du ménage]
- Colonne E : [téléphone]
Les données vont de la ligne 2 à la ligne [dernière ligne].
Objectif : repérer les doublons possibles, sans rien supprimer automatiquement.
1. Propose une formule pour la colonne F, qui écrit « doublon possible » quand le nom, le village et l'âge se répètent.
2. Explique comment colorer ces lignes.
3. Liste les cas à vérifier sur le terrain : homonymes, fautes d'orthographe, âges approximatifs.
Réponds en étapes numérotées, en français simple.
```

- **Exercice** : « Cartographiez l'IA dans votre projet fictif » — 1. Inventez en cinq lignes un projet fictif proche de votre terrain (zone, public, problème, bailleur fictif) et écrivez « projet fictif » en tête. 2. Listez huit tâches de son cycle, de l'identification à la capitalisation, et marquez pour chacune « l'IA aide » ou « l'IA n'entre pas », avec une raison. 3. Classez les données de chaque tâche en vert, orange ou rouge ; pour une tâche rouge, écrivez sa version orange (des totaux, ou la structure sans lignes réelles). Gardez ce document : il entre dans votre dossier final.
- **Carte de rappel** : 1. Situer l'IA dans le cycle de projet, sans exposer personne. 2. L'IA travaille les mots ; l'humain décide. 3. Vert, orange, rouge : classer avant de déposer. 4. Donner la structure, pas les personnes.
- **Quiz** :
  1. Votre équipe veut repérer les doublons d'une liste de bénéficiaires avec noms et téléphones. Que faites-vous ? — A) Vous collez la liste dans un assistant gratuit, en conversation incognito. B) Vous retirez les téléphones et collez seulement les noms. C) Vous décrivez les colonnes à l'assistant, sans aucune ligne réelle, et appliquez sa méthode dans votre tableur. D) Vous demandez à l'IA de supprimer les doublons automatiquement. — **Réponse : C**
  2. Laquelle de ces décisions ne doit jamais être laissée à l'IA ? — A) Choisir les ménages qui reçoivent l'aide. B) Proposer le plan d'un compte rendu. C) Résumer un rapport public. D) Traduire un courrier, avec relecture. — **Réponse : A**
  3. « Douze ménages dirigés par une femme, dans trois villages. » Selon le feu tricolore, cette information est : — A) Verte : elle est publique. B) Orange : interne, agrégée et anonymisée. C) Rouge : elle est nominative. D) Hors classement : ce n'est pas une donnée. — **Réponse : B**
  4. « Fati, veuve, trois enfants, près du puits. » Pourquoi est-ce rouge, sans nom de famille ni téléphone ? — A) Parce qu'un prénom, une situation et un lieu suffisent à reconnaître la personne. B) Parce que le texte contient un chiffre. C) Parce que le mot « veuve » est interdit. D) Ce n'est pas rouge : c'est vert. — **Réponse : A**
  5. La formule signale deux lignes au même nom, dans le même village. Que faites-vous ? — A) Vous supprimez la seconde ligne. B) Vous demandez à l'IA de trancher. C) Vous supprimez les deux, par prudence. D) Vous faites vérifier sur le terrain : ce sont peut-être deux familles différentes. — **Réponse : D**
- **Marques citées** : Claude, Gemini, ChatGPT, Copilot, Google Drive, Google Sheets, Excel (dans la consigne affichée) ; organisation nommée : PNUD.

#### Script

Durée estimée : 6:12 · Mots dits : 739

**[B1 — Accroche · 0:00–0:28]**

**[E · SITUATION]** « Tillabéri, lundi 8 h — ONG Rônier (fictive) » — VO : Tillabéri. Une liste de bénéficiaires. Un assistant IA.

**[F · CAM A]** À la fin de cette leçon, vous saurez situer l'IA dans le cycle de projet, sans exposer personne. Abdoul-Aziz coordonne l'ONG Rônier, une ONG fictive. Son équipe veut confier la liste des ménages à un assistant, pour trouver les doublons. L'intention est bonne. Le geste, beaucoup moins.

[PAUSE 1 s]

**[B2 — Cadrage · 0:28–1:17]**

**[F · CAM A]** Beaucoup pensent qu'un assistant IA fonctionne comme un tableur. Ce que vous y tapez resterait chez vous. C'est faux.

**[C · SCHÉMA]** « Votre ordinateur → serveurs de l'éditeur → conservé ? mémorisé ? réutilisé ? » — VO : Ce que vous tapez part sur les serveurs de l'entreprise qui fournit l'outil. Selon vos réglages, la conversation est conservée, mémorisée, parfois utilisée pour améliorer le modèle.

**[A · ÉCRAN]** *(paramètres de l'assistant : mémoire, historique, utilisation des conversations pour l'entraînement)* — VO : Ces réglages existent dans chaque assistant. Ouvrez-les une fois, et lisez-les vraiment.

**[F · CAM A]** Pour une liste de bénéficiaires, ce n'est pas un détail. Dans une zone d'insécurité, une liste peut exposer des familles. ONG locale, agence comme le PNUD, bureau d'études : la règle vaut pour tous. L'IA aide beaucoup. Mais pas partout, et pas avec tout.

[PAUSE 1 s]

**[B3 — Notion · 1:17–3:14]**

**[B · CARTE]** « Unité 1 — Le cycle de projet : où l'IA aide »

**[C · SCHÉMA]** « Identifier → Formuler → Mettre en œuvre → Suivre → Évaluer → Capitaliser » — VO : Prenez le cycle de votre projet. Identifier, formuler, mettre en œuvre, suivre, évaluer, capitaliser.

**[A · ÉCRAN]** *(dossier partagé fictif du projet Racines : diagnostic, note conceptuelle, rapports, comptes rendus)* — VO : À chaque étape, il y a des textes à lire ou à écrire. Diagnostics, notes conceptuelles, rapports, comptes rendus, évaluations. C'est là que l'IA aide. Elle rédige un premier jet, résume, structure, traduit, classe des réponses.

**[F · CAM A]** Autrement dit, elle travaille sur les mots. Vous gardez les décisions.

**[B · CARTE]** « Unité 2 — Ce que l'IA ne décide jamais »

**[F · CAM A]** Justement, les décisions. Qui reçoit l'aide ? Qui est éligible ? Quel chiffre part chez le bailleur ? Ces choix touchent des personnes, leurs droits, parfois leur sécurité. Or une IA peut se tromper sans prévenir. On appelle cela une hallucination : une réponse fausse, donnée avec assurance. Donc, partout où quelqu'un peut perdre un droit, un humain décide. Et un humain signe.

**[B · CARTE]** « Unité 3 — Le feu tricolore des données »

**[C · SCHÉMA]** « VERT : public · ORANGE : agrégé, anonymisé · ROUGE : identifie une personne » — VO : Avant chaque dépôt, classez vos données. Vert : ce qui est public ou générique. Orange : l'interne, agrégé et anonymisé. Des totaux, pas des personnes. Rouge : tout ce qui identifie quelqu'un.

**[A · ÉCRAN]** *(trois fichiers fictifs ouverts tour à tour : appel à propositions publié, totaux par commune, liste nominative floutée)* — VO : Un appel à propositions publié : vert. Un tableau de totaux par commune : orange, avec l'accord de votre organisation. Une liste avec noms, téléphones, photos ou positions GPS : rouge. Le rouge n'entre jamais dans un assistant grand public.

**[F · CAM A]** Trois principes guident ce tri. Ne pas nuire : qui serait exposé si ce texte fuitait ? Le consentement : les gens ont accepté un usage précis, pas tous les usages. La minimisation : donnez à l'IA le minimum utile, rien de plus.

[PAUSE 1 s]

**[B4 — Application · 3:14–4:57]**

**[F · CAM A]** Revenons à Abdoul-Aziz. Sa liste compte mille deux cents ménages, avec noms et téléphones. Feu rouge : elle n'entrera pas dans l'assistant. Mais l'IA peut quand même aider.

**[A · ÉCRAN]** *(assistant IA : nouvelle conversation incognito)* — VO : Il ouvre une conversation incognito, qui n'utilise pas la mémoire de l'outil. Puis il écrit sa consigne, ce qu'on appelle un prompt en anglais. La consigne décrit les colonnes de la liste. Pas une seule ligne réelle.

**[G · CONSIGNE]** « Consigne à copier de la fiche on1, texte intégral » — VO : Voici la consigne complète. Vous la retrouverez sous la vidéo. La même démarche fonctionne dans Gemini, ChatGPT ou Copilot.

**[A · ÉCRAN]** *(réponse de l'assistant : formule et étapes numérotées)* — VO : L'assistant propose une méthode. Une formule repère les lignes où le nom, le village et l'âge se répètent. Elle écrit alors : doublon possible.

**[A · ÉCRAN]** *(tableur : liste fictive de 60 ménages, formule en colonne F, six lignes colorées)* — VO : Abdoul-Aziz applique la formule dans son tableur, là où la liste est déjà rangée. Pour la démonstration, nous utilisons une liste fictive de soixante ménages. Six lignes ressortent.

**[F · CAM A]** Attention : doublon possible ne veut pas dire doublon. Dans un même village, deux voisins peuvent porter le même nom.

**[A · ÉCRAN]** *(colonne G « Vérification terrain » remplie)* — VO : Souleymane, l'animateur, vérifie chaque cas sur le terrain. Quatre lignes sont de vrais doublons : deux ménages inscrits deux fois. Les deux autres sont des homonymes, deux familles différentes. Elles restent sur la liste.

**[F · CAM A]** Résultat : une liste propre, et aucun nom n'est sorti de l'organisation. L'IA a donné la méthode. Les humains ont gardé les personnes.

[PAUSE 1 s]

**[B5 — Consolidation · 4:57–5:40]**

**[F · CAM A]** Testons votre réflexe.

**[A · ÉCRAN]** *(consigne tapée dans l'assistant, non envoyée)* — VO : Une collègue s'apprête à envoyer ceci : résume les besoins de Fati, veuve, trois enfants, près du puits. Ni nom de famille, ni téléphone. Vert, orange ou rouge ?

[SILENCE 2 s]

**[B · CARTE]** « ROUGE — prénom + situation + lieu = une personne reconnaissable » — VO : Rouge. Un prénom, une situation et un lieu suffisent à reconnaître quelqu'un. Au village, tout le monde saura de qui il s'agit. C'est un piège courant : pas de nom, mais une identité.

**[A · ÉCRAN]** *(la consigne est effacée, puis réécrite en version agrégée)* — VO : Pour passer à l'orange, regroupez : douze ménages dirigés par une femme, dans trois villages. Le besoin reste visible. La personne, non.

[PAUSE 1 s]

**[B6 — Clôture · 5:40–6:12]**

**[B · CARTE DE RAPPEL]** « 1. Situer l'IA dans le cycle de projet, sans exposer personne. » « 2. L'IA travaille les mots ; l'humain décide. » « 3. Vert, orange, rouge : classer avant de déposer. » « 4. Donner la structure, pas les personnes. » — VO : Retenez quatre points. Situer l'IA dans le cycle de projet, sans exposer personne. L'IA travaille les mots, l'humain décide. Vert, orange, rouge : classer avant de déposer. Et donner la structure, pas les personnes.

**[F · CAM A]** La liste d'Abdoul-Aziz est propre, et aucune famille n'a été exposée. À vous, maintenant. Inventez un projet fictif proche de votre terrain : il vous suivra jusqu'au projet final. Cartographiez l'IA dans votre projet fictif.

#### Liste des plans

| # | Type | Cadre / source | Contenu | Durée | Notes |
|---|---|---|---|---|---|
| 1 | E | illustration (dessin ou photo de décor sans personne identifiable) | B1 · Bureau d'ONG à Tillabéri ; un téléphone affiche une bulle de message générique : « On colle la liste dans l'IA pour les doublons ? » | 4 s | Surtitre « ONG Rônier (fictive) » ; aucune interface de messagerie réelle |
| 2 | F | CAM A, plan poitrine | B1 · Promesse, puis le cas d'Abdoul-Aziz | 23 s | Promesse entière avant 0:12 ; début re-filmé en EN, HA, DJE |
| 3 | F | CAM A, relais CAM B | B2 · Le malentendu « assistant = tableur », puis l'enjeu (zone d'insécurité ; ONG, PNUD, bureau d'études) | 30 s | Deux blocs ; CAM B sur le second |
| 4 | C | schéma animé | B2 · Ordinateur → serveurs de l'éditeur → « conservé ? mémorisé ? réutilisé ? » | 13 s | Les trois questions apparaissent une à une |
| 5 | A | capture : paramètres de Claude (compte de démonstration) | B2 · Mémoire, historique, utilisation des conversations pour l'entraînement | 6 s | Un cadre par réglage ; intitulés [à vérifier au moment du tournage] |
| 6 | B | cartes | B3 · Trois titres d'unités | 7,5 s | 3 × 2,5 s, sans voix |
| 7 | C | schémas animés | B3 · Cycle de projet en six étapes ; feu tricolore (VERT coche, ORANGE triangle, ROUGE croix) | 21 s | Jamais la couleur seule : forme + mot |
| 8 | A | capture : Google Drive puis trois fichiers fictifs | B3 · Dossier « Racines (fictif) » ; appel publié (vert), totaux par commune (orange), liste nominative floutée (rouge) | 35 s | Flou sur la liste, même fictive |
| 9 | F | CAM A, relais CAM B | B3 · « Elle travaille sur les mots » ; ce que l'IA ne décide jamais ; les trois principes | 52 s | Insert possible : une main qui signe un document fictif |
| 10 | F | CAM A | B4 · « Revenons à Abdoul-Aziz » ; « doublon possible » ; « Résultat » | 33 s | Trois blocs courts |
| 11 | A | capture : Claude (incognito) puis Google Sheets | B4 · Consigne ; formule proposée ; liste fictive, six lignes colorées ; colonne G « Vérification terrain » | 58 s | Zoom ≤ 6 % sur la formule ; coche ou croix sur chaque ligne de G |
| 12 | G | carte de consigne, fond clair | B4 · Consigne on1, texte intégral | 12 s | Lignes surlignées une à une pendant la voix |
| 13 | A | capture : Claude (incognito) | B5 · Consigne « Fati… » tapée, non envoyée ; puis effacée et réécrite en version agrégée | 25 s | Silence de 2 s sur ce plan ; la consigne rouge n'est jamais envoyée |
| 14 | B | cartes | B5 · « ROUGE — prénom + situation + lieu = une personne reconnaissable » ; B6 · carte de rappel | 31 s | Croix + mot ROUGE ; points du rappel au rythme de la voix |
| 15 | F | CAM A | B5 · « Testons votre réflexe » ; B6 · clôture et titre de l'exercice | 18 s | Fin re-filmée en EN, HA, DJE |

#### Montage idéal

| Temps | Timecode cible | Image principale | Habillage (motion graphics) | Texte à l'écran | Son | Transition |
|---|---|---|---|---|---|---|
| B1 | 0:00–0:28 | Illustration E (4 s), puis CAM A | Surtitre fictif ; légende du personnage sur l'illustration | « Tillabéri, lundi 8 h — ONG Rônier (fictive) » ; « Abdoul-Aziz, coordinateur (fictif) » | voix seule | coupe |
| B2 | 0:28–1:17 | CAM A → schéma de flux → capture des paramètres → CAM A / CAM B | Flèches animées ; trois « ? » successifs ; cadre sur chaque réglage | « Conservé ? Mémorisé ? Réutilisé ? » | voix seule | coupe ; fondu court vers le schéma |
| B3 | 1:17–3:14 | Cartes d'unité, schémas, captures, CAM A | Compteur d'unité 1/3, 2/3, 3/3 ; cycle en six pastilles ; feu en trois pastilles avec coche, triangle, croix | Titres d'unités ; « hallucination : une réponse fausse, donnée avec assurance » | voix seule ; cartes d'unité sans voix | coupe |
| B4 | 3:14–4:57 | Captures Claude et Sheets, carte G, CAM A | Numéros d'étape 1 → 4 ; cadre sur la formule ; coches et croix en colonne G | « Doublon possible ≠ doublon » | voix seule | coupe |
| B5 | 4:57–5:40 | Capture de la consigne non envoyée, carte réponse, capture réécrite | Barre de progression discrète pendant le silence | « Vert, orange ou rouge ? » puis « ROUGE » avec une croix | silence de 2 s (ambiance seule) | coupe sèche à la fin du silence |
| B6 | 5:40–6:12 | Carte de rappel, puis CAM A | Points qui apparaissent au rythme de la voix | Quatre points ; titre de l'exercice en bas | voix seule | coupe vers la carte de clôture |

**Notes de montage** : un changement visuel toutes les 4 à 8 s, sans agitation. Sur le bloc « Ce que l'IA ne décide jamais » (28 s), relais CAM B à mi-bloc ou insert de la main qui signe. Couper hésitations et redites ; garder une respiration après « Le geste, beaucoup moins. » et après « Et un humain signe. ». Zooms ≤ 6 % sur la formule et sur la colonne G. Quand le tableur occupe le bas de l'écran, sous-titres en haut. Annotations une à une, 2,5 s minimum, toujours avec une forme (cadre, coche, croix). Plans de couverture disponibles : mains sur le clavier, téléphone avec la bulle de message, tableau blanc du cycle de projet.

#### Versions EN / HA / DJE

- **À re-filmer dans la langue** (environ 25 s, l'owner face caméra) : B1 — « À la fin de cette leçon, vous saurez situer l'IA dans le cycle de projet, sans exposer personne. Abdoul-Aziz coordonne l'ONG Rônier, une ONG fictive. » ; B6 — « À vous, maintenant. Inventez un projet fictif proche de votre terrain : il vous suivra jusqu'au projet final. Cartographiez l'IA dans votre projet fictif. »
- **Doublé en voix clonée** : fin de B1 (« Son équipe veut… beaucoup moins ») sur l'illustration E prolongée par un zoom lent ; B2, les deux blocs face caméra sur CAM B (mains sur le clavier) puis sur le schéma de flux ; B3, « Autrement dit… » sur la carte d'unité 1 prolongée ; « Ce que l'IA ne décide jamais » sur l'insert de la main qui signe et une carte « Un humain décide. Un humain signe. » ; les trois principes sur trois cartes B successives ; B4, les trois blocs face caméra sur les captures du tableur ; B5, « Testons votre réflexe » sur la capture de la consigne ; B6, « La liste d'Abdoul-Aziz est propre… » sur la carte de rappel prolongée.
- **Notes d'adaptation** : « feu tricolore » se dit « traffic light » en EN ; en HA et en DJE, vérifier avec le traducteur le mot courant (souvent emprunté au français) et garder les trois formes à l'image. « Doublon possible » reste écrit en français dans le tableur filmé : le sous-titrer. « Bureau d'études » se dit « consultancy firm » en EN ; « PNUD » devient « UNDP » en EN. L'exemple des homonymes est valable dans les trois langues. Le prénom « Fati » peut rester.

### Leçon 2 — Note conceptuelle : du problème au cadre logique (`on2`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez bâtir avec l'IA problème, théorie du changement et cadre logique. »
- **Cas réel (B1 → B6)** : Tillabéri. Hadiza, chargée de programme à l'ONG Rônier (fictive), a dix jours pour déposer une note conceptuelle de quatre pages au Fonds Tamarinier, un bailleur fictif, pour le projet Racines : maraîchage de contre-saison, petit élevage, groupes d'épargne de femmes. L'enjeu : une note générique est écartée, et une note qui invente un chiffre décrédibilise l'ONG. En B6, Hadiza dépose une note ancrée dans son diagnostic : une cause non documentée retirée, un indicateur vague remplacé et ventilé par sexe, une hypothèse d'accès ajoutée après la critique « évaluateur », aucune valeur inventée.
- **Unités de notion (B3)** : 1. Le problème d'abord : votre diagnostic — l'IA met en arbre (causes, problème central, effets) ce que votre diagnostic établit, rien de plus. · 2. Si…, alors…, parce que… — la théorie du changement relie les activités au changement attendu et nomme les hypothèses hors de votre contrôle. · 3. Le cadre logique : tout se mesure — indicateurs mesurables et datés (valeur de référence, cible, échéance), sources de vérification, aucune valeur inventée.
- **Démo (B4)** : Claude en version gratuite (conversation incognito) et Google Docs, avec deux fichiers fictifs : « Appel à propositions — Fonds Tamarinier (fictif) » (deux pages : objectifs ; critères de pertinence, de logique d'intervention, de genre et d'inclusion, de faisabilité en zone d'accès difficile, de durabilité ; format de quatre pages) et « Diagnostic Racines (fictif) » (une page, anonymisée, chiffres marqués fictifs, aucune mention de migration). 1. Ouvrir une conversation incognito. 2. Déposer les deux fichiers (critères publiés = vert ; diagnostic anonymisé = orange). 3. Coller la consigne. 4. Lire la réponse (arbre, théorie du changement, cadre logique en tableau) ligne par ligne, le diagnostic à côté. 5. Retirer la cause « migration des jeunes », absente du diagnostic ; si l'IA ajoute une autre cause non documentée, montrer celle-là et adapter la voix off. 6. Remplacer l'indicateur « résilience des ménages améliorée » par « Part des ménages disposant de réserves alimentaires pendant la soudure, ventilée par sexe du chef de ménage — valeur de référence : [À COMPLÉTER : enquête de base] ». 7. Envoyer la relance « évaluateur » ; lire la note par critère et les trois faiblesses. 8. Corriger soi-même : ventilation par sexe, hypothèse « l'accès aux villages reste possible pour les équipes ». 9. Coller le tout dans le document de la note. Résultat attendu à l'écran : le cœur de la note, deux pages sur quatre, avec un cadre logique dont chaque valeur est sourcée ou « à compléter ».
- **Consolidation (B5)** : prédiction. Question : dans un autre essai, le cadre logique affiche une valeur de référence de 40 % ; Hadiza n'a donné aucun chiffre ; d'où vient-il ? Réponse : de nulle part, c'est une hallucination, précise et plausible ; une valeur de référence vient de l'enquête de base, sinon elle reste « à compléter ».
- **Consigne à copier** :

```text
Rôle : tu es spécialiste de la conception de projets de développement au Sahel.
Contexte : je prépare une note conceptuelle de [nombre] pages pour [bailleur], appel « [titre de l'appel] ».
Je te donne : (1) les critères publiés de l'appel ; (2) mon diagnostic de terrain, sans aucune donnée personnelle.
Tâche :
1. Construis l'arbre à problèmes (causes, problème central, effets), uniquement à partir de mon diagnostic.
2. Rédige la théorie du changement en phrases « Si…, alors…, parce que… », puis liste les hypothèses.
3. Propose un cadre logique en tableau : objectif global, objectif spécifique, résultats, activités ; avec indicateurs, sources de vérification, hypothèses.
Règles : chaque indicateur est mesurable et daté (valeur de référence, cible, échéance). N'invente aucun chiffre : écris [À COMPLÉTER : source] à la place. Signale ce qui manque dans mon diagnostic.
[Coller les critères de l'appel]
[Coller le diagnostic anonymisé]

Relance, une fois le premier jet relu :
Joue maintenant l'évaluateur de [bailleur]. Note ma note de 1 à 5 sur chaque critère de l'appel, puis cite les trois faiblesses les plus graves, avec une correction possible pour chacune. Ne réécris pas la note.
```

- **Exercice** : « Rédigez la note conceptuelle de votre projet fictif » — 1. Rédigez un diagnostic d'une page sans aucune donnée personnelle, et marquez « fictif » tout chiffre inventé pour l'exercice. 2. Utilisez la consigne pour obtenir l'arbre à problèmes, la théorie du changement et le cadre logique ; retirez toute cause absente de votre diagnostic. 3. Corrigez chaque indicateur (mesurable, daté, valeur de référence sourcée ou [À COMPLÉTER]), faites la relance « évaluateur », puis intégrez vous-même les corrections : deux pages au maximum.
- **Carte de rappel** : 1. Bâtir avec l'IA problème, théorie du changement et cadre logique. 2. Votre diagnostic d'abord ; l'IA structure. 3. Si…, alors…, parce que…, plus les hypothèses. 4. Chaque indicateur se mesure, chaque chiffre a sa source.
- **Quiz** :
  1. Quelle est la première source d'une bonne note conceptuelle préparée avec l'IA ? — A) Votre diagnostic de terrain, résumé et anonymisé. B) Les connaissances générales de l'assistant. C) La note d'une autre ONG, reprise telle quelle. D) Le site web du bailleur, seul. — **Réponse : A**
  2. Quelle phrase suit la logique « si…, alors…, parce que… » ? — A) « Le projet est innovant, inclusif et durable. » B) « Si les femmes ont de l'eau toute l'année, alors les jardins produisent en contre-saison, parce que l'arrosage ne dépend plus des pluies. » C) « Nous voulons améliorer la résilience des communautés. » D) « Les activités suivront le chronogramme. » — **Réponse : B**
  3. Laquelle de ces propositions est une hypothèse du cadre logique ? — A) Distribuer des semences maraîchères. B) Former quarante groupes d'épargne. C) Rédiger le rapport semestriel. D) L'accès aux villages reste possible pour les équipes. — **Réponse : D**
  4. L'IA propose l'indicateur « résilience des ménages améliorée ». Quel est le problème ? — A) Il est trop court. B) Il ne cite pas le bailleur. C) Il n'est ni mesurable ni daté. D) Aucun : il est clair. — **Réponse : C**
  5. Le cadre logique affiche une valeur de référence de 40 % que vous n'avez jamais fournie. Que faites-vous ? — A) Vous la remplacez par la donnée de votre enquête de base, ou par [À COMPLÉTER]. B) Vous la gardez : elle semble plausible. C) Vous demandez à l'IA si elle est sûre, puis vous la gardez. D) Vous l'arrondissez à 50 %. — **Réponse : A**
- **Marques citées** : Claude, Google Docs.

#### Script

Durée estimée : 5:55 · Mots dits : 703

**[B1 — Accroche · 0:00–0:28]**

**[E · SITUATION]** « Tillabéri — Hadiza, chargée de programme (fictive) » — VO : Dix jours. Quatre pages. Un appel à propositions.

**[F · CAM A]** À la fin de cette leçon, vous saurez bâtir avec l'IA problème, théorie du changement et cadre logique. Hadiza, chargée de programme à l'ONG Rônier, répond au Fonds Tamarinier, un bailleur fictif. Dans la leçon un, vous avez trié vos données par couleur : ce tri s'applique ici.

[PAUSE 1 s]

**[B2 — Cadrage · 0:28–1:11]**

**[F · CAM A]** On entend souvent que l'IA peut écrire la note conceptuelle à votre place. Essayons.

**[A · ÉCRAN]** *(consigne d'une ligne : « Écris une note conceptuelle sur la résilience au Niger » ; réponse générique, trois formules surlignées)* — VO : Une consigne d'une ligne donne ceci. Des populations vulnérables, des défis multiples, une approche holistique. Rien de faux. Rien d'utile non plus. Ce texte pourrait venir de n'importe quelle ONG, pour n'importe quelle région.

**[F · CAM A]** Un bailleur cherche votre terrain, vos données, votre logique. Il veut sentir que vous connaissez les villages, les saisons, les acteurs. L'IA ne connaît pas vos villages. Vous, oui. Elle structure ce que vous savez. Elle ne le remplace pas.

[PAUSE 1 s]

**[B3 — Notion · 1:11–2:59]**

**[B · CARTE]** « Unité 1 — Le problème d'abord : votre diagnostic »

**[F · CAM A]** Tout part de votre diagnostic. Pour Racines : maraîchage de contre-saison, petit élevage, groupes d'épargne de femmes. Enquête de base, visites de terrain, discussions avec les communautés. Résumez le tout en une page, sans aucune donnée personnelle.

**[C · SCHÉMA]** « Arbre à problèmes : causes → problème central → effets » — VO : Puis demandez à l'IA un arbre à problèmes. Les causes en bas, le problème central au milieu, les effets en haut. Vérifiez chaque cause : figure-t-elle dans votre diagnostic ? Sinon, elle sort de l'arbre, ou vous la documentez d'abord.

**[B · CARTE]** « Unité 2 — Si…, alors…, parce que… »

**[C · SCHÉMA]** « Si [activités] → alors [changement] → parce que [mécanisme] · + hypothèses » — VO : La théorie du changement explique comment vos activités produisent le changement. Une formule simple : si, alors, parce que. Si les femmes ont de l'eau toute l'année, alors les jardins produisent en contre-saison. Parce que l'arrosage ne dépend plus des pluies.

**[F · CAM A]** Ajoutez les hypothèses : ce qui doit rester vrai, hors de votre contrôle. L'accès aux villages, le prix des semences, l'entente entre usagers de l'eau. Ici, l'IA est utile : demandez-lui quelles hypothèses manquent, et lesquelles sont les plus risquées.

**[B · CARTE]** « Unité 3 — Le cadre logique : tout se mesure »

**[A · ÉCRAN]** *(cadre logique produit par l'assistant ; colonnes surlignées une à une)* — VO : Le cadre logique range cette logique dans un tableau. Objectif global, objectif spécifique, résultats, activités. En face : indicateurs, sources de vérification, hypothèses. L'IA le remplit vite. Votre travail, c'est la colonne des indicateurs. Chacun doit être mesurable et daté : une valeur de référence, une cible, une échéance. Et chaque valeur doit venir de vos données.

[PAUSE 1 s]

**[B4 — Application · 2:59–4:40]**

**[A · ÉCRAN]** *(conversation incognito ; dépôt de deux fichiers fictifs : critères de l'appel, diagnostic d'une page)* — VO : Hadiza ouvre une conversation incognito. Elle dépose deux fichiers. Les critères publiés du Fonds Tamarinier : vert. Son diagnostic d'une page, sans aucun nom : orange.

**[G · CONSIGNE]** « Consigne à copier de la fiche on2, texte intégral » — VO : Puis elle colle cette consigne. Rôle, contexte, tâche, règles. Retenez la règle clé : n'invente aucun chiffre.

**[A · ÉCRAN]** *(réponse : arbre à problèmes, théorie du changement, cadre logique en tableau)* — VO : Elle obtient l'arbre, la théorie du changement et un premier cadre logique. Elle relit ligne par ligne, son diagnostic à côté.

**[A · ÉCRAN]** *(arbre à problèmes : la cause « migration des jeunes » surlignée)* — VO : Dans l'arbre, une cause l'arrête : la migration des jeunes. Son diagnostic n'en parle pas. Elle la retire. Si elle compte vraiment, il faudra d'abord la documenter.

**[A · ÉCRAN]** *(indicateur « résilience des ménages améliorée » barré et remplacé)* — VO : Autre problème : un indicateur dit résilience des ménages améliorée. Comment le mesurer ? Impossible. Hadiza écrit : part des ménages qui ont des réserves pendant la soudure. Valeur de référence : à compléter, depuis l'enquête de base.

**[A · ÉCRAN]** *(relance « évaluateur » ; réponse avec une note par critère et trois faiblesses)* — VO : Ensuite, elle demande à l'IA de jouer l'évaluateur du bailleur. Trois faiblesses ressortent. La plus grave : les femmes sont dans le problème, mais absentes des indicateurs.

**[F · CAM A]** Hadiza corrige elle-même. Elle ventile l'indicateur par sexe. Elle ajoute une hypothèse sur l'accès aux villages. La critique vient de l'IA. La décision reste la sienne.

**[A · ÉCRAN]** *(document de note conceptuelle : deux pages, cadre logique final)* — VO : Elle colle le tout dans son document et ajuste la mise en forme. Résultat : le cœur de la note, deux pages sur quatre, prêt pour la relecture de l'équipe.

[PAUSE 1 s]

**[B5 — Consolidation · 4:40–5:24]**

**[F · CAM A]** Une prédiction. Dans un autre essai, le cadre logique affiche une valeur de référence : quarante pour cent. Hadiza n'a donné aucun chiffre. D'où vient-il ?

[SILENCE 2 s]

**[B · CARTE]** « 40 % — source : aucune → hallucination » — VO : De nulle part. C'est une hallucination, précise et plausible. Elle a l'air sérieuse parce qu'elle est précise : c'est justement le piège. Une valeur de référence vient de votre enquête de base. Sinon, elle reste à compléter. Jamais inventée.

**[F · CAM A]** Un évaluateur demandera la source. Ce jour-là, c'est vous qui répondez, pas l'outil. Et un seul chiffre inventé fait douter de tous les autres.

[PAUSE 1 s]

**[B6 — Clôture · 5:24–5:55]**

**[B · CARTE DE RAPPEL]** « 1. Bâtir avec l'IA problème, théorie du changement et cadre logique. » « 2. Votre diagnostic d'abord ; l'IA structure. » « 3. Si…, alors…, parce que…, plus les hypothèses. » « 4. Chaque indicateur se mesure, chaque chiffre a sa source. » — VO : Retenez quatre points. Bâtir avec l'IA problème, théorie du changement et cadre logique. Votre diagnostic d'abord, l'IA structure. Si, alors, parce que, plus les hypothèses. Chaque indicateur se mesure, chaque chiffre a sa source.

**[F · CAM A]** Hadiza dépose une note qui parle de son terrain, et dont chaque chiffre a une source. À votre tour, sur votre projet fictif. Rédigez la note conceptuelle de votre projet fictif.

#### Liste des plans

| # | Type | Cadre / source | Contenu | Durée | Notes |
|---|---|---|---|---|---|
| 1 | E | illustration | B1 · Bureau ; calendrier avec une échéance entourée ; chemise « Appel à propositions — Fonds Tamarinier (fictif) » | 4 s | Légende « Hadiza, chargée de programme (fictive) » |
| 2 | F | CAM A, plan poitrine | B1 · Promesse, cas, rappel de la leçon 1 | 23 s | Promesse entière avant 0:12 |
| 3 | F | CAM A, relais CAM B | B2 · « On entend souvent… Essayons. » ; « Un bailleur cherche votre terrain… » | 26 s | Deux blocs |
| 4 | A | capture : Claude | B2 · Consigne d'une ligne et réponse générique ; trois formules surlignées | 16 s | Citer en voix off les formules réellement obtenues |
| 5 | B | cartes | B3 · Trois titres d'unités | 7,5 s | 3 × 2,5 s, sans voix |
| 6 | F | CAM A, insert tableau blanc | B3 · Le diagnostic de Racines ; les hypothèses | 36 s | Insert : arbre à problèmes dessiné à la main |
| 7 | C | schémas animés | B3 · Arbre à problèmes (racines = causes, tronc = problème, branches = effets) ; « Si → alors → parce que », plus les hypothèses | 37 s | Chaque cause apparaît, puis reçoit une coche « dans le diagnostic » |
| 8 | A | capture : Claude | B3 · Cadre logique ; colonnes surlignées une à une | 26 s | Cadre sur la colonne des indicateurs |
| 9 | A | capture : Claude | B4 · Incognito et dépôt des deux fichiers ; réponse ; cause « migration des jeunes » ; indicateur barré et remplacé ; relance « évaluateur » | 63 s | Croix sur la cause retirée ; barré + nouveau texte sur l'indicateur |
| 10 | G | carte de consigne, fond clair | B4 · Consigne on2 et sa relance, texte intégral | 11 s | La règle « N'invente aucun chiffre » surlignée |
| 11 | F | CAM A | B4 · « Hadiza corrige elle-même… » | 13 s | |
| 12 | A | capture : Google Docs | B4 · Le cœur de la note, deux pages sur quatre, cadre logique final | 14 s | Défilement lent |
| 13 | F | CAM A | B5 · La question des 40 %, silence ; « Un évaluateur demandera la source… » | 25 s | Silence de 2 s regard caméra |
| 14 | B | cartes | B5 · « 40 % — source : aucune → hallucination » ; B6 · carte de rappel | 35 s | Croix sur « source » |
| 15 | F | CAM A | B6 · Clôture et titre de l'exercice | 15 s | Fin re-filmée en EN, HA, DJE |

#### Montage idéal

| Temps | Timecode cible | Image principale | Habillage (motion graphics) | Texte à l'écran | Son | Transition |
|---|---|---|---|---|---|---|
| B1 | 0:00–0:28 | Illustration E (4 s), puis CAM A | Légende du personnage sur l'illustration | « Tillabéri — Hadiza, chargée de programme (fictive) » | voix seule | coupe |
| B2 | 0:28–1:11 | CAM A → capture de la réponse générique → CAM A / CAM B | Trois formules surlignées une à une | « Rien de faux. Rien d'utile. » | voix seule | coupe |
| B3 | 1:11–2:59 | Cartes d'unité, CAM A, schémas, capture du cadre logique | Compteur 1/3, 2/3, 3/3 ; arbre qui pousse (causes, tronc, branches) ; flèches si → alors → parce que | Titres d'unités ; « mesurable et daté : référence, cible, échéance » | voix seule ; cartes d'unité sans voix | coupe ; fondu court entre les deux schémas |
| B4 | 2:59–4:40 | Captures Claude, carte G, CAM A, capture Docs | Numéros d'étape ; croix sur la cause retirée ; barré sur l'indicateur | « Valeur de référence : [À COMPLÉTER : enquête de base] » | voix seule | coupe |
| B5 | 4:40–5:24 | CAM A, carte réponse, CAM A | Barre discrète pendant le silence | « D'où vient ce 40 % ? » puis « Source : aucune » | silence de 2 s (ambiance seule) | coupe sèche à la fin du silence |
| B6 | 5:24–5:55 | Carte de rappel, puis CAM A | Points qui apparaissent au rythme de la voix | Quatre points ; titre de l'exercice en bas | voix seule | coupe vers la carte de clôture |

**Notes de montage** : changement visuel toutes les 4 à 8 s. Le plan 6 (36 s face caméra) est coupé par l'insert du tableau blanc. Couper les hésitations et les redites ; garder une respiration après « Vous, oui. » et après « La décision reste la sienne. ». Zooms ≤ 6 % sur l'indicateur corrigé et sur la réponse « évaluateur ». Quand le tableau du cadre logique occupe le bas de l'écran, sous-titres en haut. Annotations une à la fois, 2,5 s minimum, toujours avec une forme. Plans de couverture : tableau blanc avec l'arbre, mains sur le clavier, carte murale du Niger.

#### Versions EN / HA / DJE

- **À re-filmer dans la langue** (environ 22 s, l'owner face caméra) : B1 — « À la fin de cette leçon, vous saurez bâtir avec l'IA problème, théorie du changement et cadre logique. Hadiza, chargée de programme à l'ONG Rônier, répond au Fonds Tamarinier, un bailleur fictif. » ; B6 — « À votre tour, sur votre projet fictif. Rédigez la note conceptuelle de votre projet fictif. »
- **Doublé en voix clonée** : fin de B1 (rappel de la leçon 1) sur l'illustration E prolongée ; B2, « On entend souvent… » sur CAM B (mains sur le clavier) et « Un bailleur cherche… » sur la capture de la réponse générique prolongée, puis la carte murale ; B3, le diagnostic et les hypothèses sur l'insert du tableau blanc et le schéma « si, alors, parce que » ; B4, « Hadiza corrige elle-même… » sur la capture de l'indicateur ventilé par sexe ; B5, la question et la conclusion sur la carte « 40 % » ; B6, « Hadiza dépose une note… » sur la carte de rappel.
- **Notes d'adaptation** : « cadre logique » = « logframe » en EN ; en HA et en DJE, garder le terme français employé dans les ONG, avec une explication courte. « Théorie du changement » = « theory of change ». « Contre-saison » = « dry-season gardening » ; « soudure » = « lean season » ; en HA et en DJE, utiliser le terme local courant, à faire valider. La formule doit garder ses trois temps (« if… then… because… »). « Fonds Tamarinier » : nom propre fictif à garder tel quel ou à traduire (« Tamarind Fund ») ; même choix dans tout le cours.

### Leçon 3 — Rapport narratif : chaque chiffre a sa source (`on3`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez rédiger un rapport narratif où chaque chiffre a sa source. »
- **Cas réel (B1 → B6)** : Six mois plus tard, le projet Racines est financé (fiction). Hadiza a quinze jours pour rendre la partie narrative du rapport semestriel au Fonds Tamarinier. Elle dispose d'un tableau d'indicateurs (cible, réalisé, écart), de notes de terrain anonymisées et du plan imposé par le bailleur. L'enjeu : un chiffre faux ou un écart masqué abîme la confiance du bailleur. En B6, Hadiza envoie une section sobre et vérifiée : un chiffre arrondi corrigé, une donnée manquante complétée avec Issoufou, une cause d'écart demandée au terrain, chaque écart expliqué avec sa mesure, et le tableau de contrôle gardé au dossier interne.
- **Unités de notion (B3)** : 1. Les données d'abord, la plume ensuite — tableau d'indicateurs vérifié, notes anonymisées, plan du bailleur (et le rapport précédent validé) : l'IA n'écrit qu'à partir de ce dossier. · 2. Un chiffre, une source — pas d'arrondi, « à vérifier » quand une donnée manque, tableau de contrôle phrase par phrase. · 3. Expliquer les écarts — la cause, puis la mesure corrective, demandées explicitement à l'IA. · 4. Témoignages : consentement et dignité — consentement recueilli et noté, personne non reconnaissable, pas de misérabilisme.
- **Démo (B4)** : Claude en version gratuite (conversation incognito), Google Sheets (tableau de contrôle) et Google Docs, avec trois fichiers fictifs : « indicateurs_racines_S1.csv » (six indicateurs : ménages ayant reçu des semences 1 140 sur 1 200 ; part des ménages bénéficiaires ayant cultivé en contre-saison 87 % pour une cible de 80 % ; demi-lunes 96 ha sur 150 ; groupes d'épargne fonctionnels 43 sur 40 ; femmes membres 1 032 sur 1 000 ; petits ruminants remis 540 sur 600), « notes_terrain_S1 » (une page anonymisée : causes de l'écart sur les demi-lunes et sur les petits ruminants, rien sur les 60 ménages sans semences, un témoignage avec consentement) et « plan_rapport_Tamarinier ». 1. Ouvrir une conversation incognito. 2. Déposer le CSV et les notes (un CSV passe directement ; un classeur .xlsx demande d'activer l'exécution de code et la création de fichiers dans les paramètres [à vérifier au moment du tournage]). 3. Coller la consigne. 4. Lire la section « Résultat 1 » et la liste des chiffres ; repérer la mention [À VÉRIFIER] sur les quantités vendues. 5. Remplir le tableau de contrôle (phrase, chiffre, ligne source, OK ou corrigé) : cinq OK, un corrigé (« près de neuf ménages sur dix » → 87 %). 6. Vérifier que chaque écart a sa cause et sa mesure : demi-lunes (accès à deux villages suspendu un mois ; rattrapage avant l'hivernage) ; [CAUSE À DEMANDER] pour les 60 ménages sans semences → question envoyée à l'équipe terrain. 7. Compléter les quantités vendues avec Issoufou (donnée de suivi fictive). 8. Relire le ton, supprimer l'adjectif de trop, coller la section dans le rapport. Résultat attendu à l'écran : une section d'environ 250 mots, un tableau de contrôle complet, aucun chiffre sans source. Si la sortie réelle diffère (autre arrondi, autre oubli), filmer ce qui arrive et adapter la voix off.
- **Consolidation (B5)** : prédiction. Question : l'IA écrit « le projet a amélioré la sécurité alimentaire de 1 140 ménages », le tableau dit « 1 140 ménages ont reçu des semences » : où est le problème ? Réponse : recevoir des semences est un extrant (ce que le projet a livré) ; mieux manger pendant la soudure est un effet (ce qui change pour les ménages), qui se mesure par une enquête (leçon 4).
- **Consigne à copier** :

```text
Rôle : tu rédiges la partie narrative d'un rapport semestriel pour [bailleur].
Je te donne trois pièces : (1) le tableau des indicateurs (cible, réalisé, écart) ; (2) des notes de terrain anonymisées ; (3) le plan imposé par le bailleur.
Tâche : rédige la section « [Résultat 1 : intitulé] », en [250] mots au maximum.
Règles :
- N'utilise que les chiffres du tableau, sans les arrondir.
- Si une information manque, écris [À VÉRIFIER] au lieu de l'inventer.
- Distingue ce que le projet a livré (extrants) de ce qui a changé pour les ménages (effets).
- Pour chaque écart à la cible, donne la cause indiquée dans mes notes et la mesure corrective ; si la cause manque, écris [CAUSE À DEMANDER].
- Ton sobre et factuel, sans superlatifs.
À la fin, liste chaque chiffre utilisé, avec sa ligne dans le tableau.
```

- **Exercice** : « Rédigez une section vérifiée de votre rapport narratif » — 1. Créez un tableau d'indicateurs fictif (cible, réalisé, écart) pour un résultat de votre cadre logique, avec au moins un écart négatif, et marquez-le « fictif ». 2. Ajoutez une demi-page de notes de terrain anonymisées, puis utilisez la consigne. 3. Faites le tableau de contrôle (phrase, chiffre, ligne source, OK ou corrigé) et vérifiez que chaque écart a sa cause et sa mesure corrective.
- **Carte de rappel** : 1. Rédiger un rapport narratif où chaque chiffre a sa source. 2. Tableau, notes, plan : l'IA n'écrit qu'à partir d'eux. 3. Les écarts s'expliquent, ils ne se cachent pas. 4. Un extrant livré n'est pas un effet obtenu.
- **Quiz** :
  1. Avant de demander une section de rapport à l'IA, que rassemblez-vous ? — A) Rien : l'IA connaît le projet. B) La liste nominative des bénéficiaires. C) Le tableau d'indicateurs, des notes de terrain anonymisées et le plan du bailleur. D) Le rapport d'une autre ONG. — **Réponse : C**
  2. Le tableau indique 87 %. L'IA écrit « près de neuf ménages sur dix ». Que faites-vous ? — A) Vous remettez le chiffre exact du tableau. B) Vous gardez la formule : elle est plus parlante. C) Vous arrondissez à 90 %. D) Vous supprimez le chiffre. — **Réponse : A**
  3. Les demi-lunes atteignent 96 hectares sur 150 prévus. Que doit contenir le rapport ? — A) Rien : on ne montre que les réussites. B) L'écart, sa cause et la mesure corrective. C) La mention « cible presque atteinte ». D) Une critique de la cible. — **Réponse : B**
  4. « 1 140 ménages ont reçu des semences. » De quoi s'agit-il ? — A) D'un effet. B) D'un impact. C) D'une hypothèse. D) D'un extrant. — **Réponse : D**
  5. Un témoignage de bénéficiaire peut figurer dans le rapport si : — A) Il est émouvant. B) Il cite le nom complet, pour être crédible. C) La personne a donné son consentement et ne peut pas être reconnue. D) L'IA l'a reformulé. — **Réponse : C**
- **Marques citées** : Claude, Google Sheets, Google Docs.

#### Script

Durée estimée : 6:02 · Mots dits : 712

**[B1 — Accroche · 0:00–0:28]**

**[E · SITUATION]** « Tillabéri, six mois plus tard — rapport semestriel (fictif) » — VO : Six mois plus tard. Le bailleur attend le rapport.

**[F · CAM A]** À la fin de cette leçon, vous saurez rédiger un rapport narratif où chaque chiffre a sa source. Le projet Racines est financé. Hadiza a quinze jours pour la partie narrative du rapport semestriel. Dans la leçon deux, chaque indicateur de son cadre logique avait une source.

[PAUSE 1 s]

**[B2 — Cadrage · 0:28–1:07]**

**[F · CAM A]** Demandez un rapport à une IA, sans règles. Elle écrit avec enthousiasme.

**[A · ÉCRAN]** *(paragraphe généré ; « remarquables », « transformateur », « significatifs » surlignés puis barrés)* — VO : Des résultats remarquables, un impact transformateur, des progrès significatifs. Ces mots ne prouvent rien. Pire : ils cachent les écarts.

**[F · CAM A]** Un bailleur ne cherche pas un rapport parfait. Il cherche un rapport fiable. Ce qui a été fait, ce qui ne l'a pas été, et pourquoi. Son chargé de programme lit vite : il va droit aux écarts. L'IA peut écrire ce rapport-là. À une condition : lui donner des règles.

[PAUSE 1 s]

**[B3 — Notion · 1:07–3:03]**

**[B · CARTE]** « Unité 1 — Les données d'abord, la plume ensuite »

**[A · ÉCRAN]** *(dossier source fictif : tableau d'indicateurs, notes de terrain anonymisées, plan du bailleur)* — VO : Préparez un dossier source. Le tableau des indicateurs : cible, réalisé, écart. Vos notes de terrain, anonymisées. Le plan imposé par le bailleur. L'IA n'écrit qu'à partir de ces trois pièces. Ajoutez le rapport précédent, s'il a été validé : l'IA reprendra son vocabulaire. Vérifiez d'abord le tableau lui-même : un tableau faux donne un rapport faux.

**[B · CARTE]** « Unité 2 — Un chiffre, une source »

**[F · CAM A]** Votre consigne pose trois règles. N'utilise que les chiffres du tableau. N'arrondis pas. Si une information manque, écris : à vérifier. Ensuite, vous contrôlez chaque chiffre, phrase par phrase. Un tableau de contrôle suffit : la phrase, le chiffre, la ligne source. Gardez-le : il vous servira si le bailleur pose une question.

**[B · CARTE]** « Unité 3 — Expliquer les écarts »

**[F · CAM A]** Un écart à la cible n'est pas une faute. C'est une information. Le rapport donne la cause, puis la mesure corrective. Exemple : des animaux livrés en retard, parce que le fournisseur a manqué de stock. Mesure : un second fournisseur, déjà identifié. Un écart expliqué, avec sa mesure, rassure le bailleur. Un écart caché, découvert plus tard, abîme la confiance. Demandez-le explicitement à l'IA. Sinon, elle risque d'adoucir.

**[B · CARTE]** « Unité 4 — Témoignages : consentement et dignité »

**[A · ÉCRAN]** *(note de terrain fictive : témoignage, prénom modifié, mention « consentement recueilli »)* — VO : Une histoire de changement donne vie au rapport. Elle exige un consentement recueilli, et un prénom modifié si besoin. Gardez la trace de ce consentement dans vos notes. Aucun détail ne doit permettre de reconnaître la personne. Et pas de misérabilisme : décrivez quelqu'un qui agit, pas une victime.

[PAUSE 1 s]

**[B4 — Application · 3:03–4:46]**

**[A · ÉCRAN]** *(conversation incognito ; dépôt du tableau CSV fictif et des notes de terrain)* — VO : Hadiza ouvre une conversation incognito. Elle dépose le tableau des indicateurs au format CSV, un tableau en texte simple. Puis ses notes anonymisées.

**[G · CONSIGNE]** « Consigne à copier de la fiche on3, texte intégral » — VO : Elle colle la consigne. Regardez la dernière ligne : l'IA doit lister chaque chiffre utilisé, avec sa source.

**[A · ÉCRAN]** *(section « Résultat 1 » rédigée, liste des chiffres, mention [À VÉRIFIER])* — VO : La section arrive, sobre, suivie de la liste des chiffres. Une mention à vérifier apparaît : les quantités vendues au marché. Le tableau ne les contient pas. L'IA a respecté la règle.

**[A · ÉCRAN]** *(tableau de contrôle : cinq coches, une croix sur « près de neuf ménages sur dix »)* — VO : Hadiza contrôle. Cinq chiffres sont exacts. Le sixième pose problème : près de neuf ménages sur dix. Le tableau dit quatre-vingt-sept pour cent. Elle remet le chiffre exact.

**[F · CAM A]** Une règle bien écrite réduit les erreurs. Elle ne les supprime pas. Le contrôle n'est donc jamais facultatif. Et c'est vous qui signez le rapport.

**[A · ÉCRAN]** *(paragraphe sur les demi-lunes : écart, cause, mesure corrective)* — VO : Reste l'écart sur les demi-lunes : quatre-vingt-seize hectares sur cent cinquante. Le texte donne la cause : l'accès à deux villages, suspendu un mois. Puis la mesure : un rattrapage avant l'hivernage. Hadiza vérifie que chaque écart du tableau a sa cause et sa mesure. Il en manque une : elle la demande à l'équipe terrain. Elle complète aussi les quantités vendues avec Issoufou.

**[A · ÉCRAN]** *(relecture du ton : l'adjectif « important » supprimé ; section collée dans le rapport)* — VO : Dernière relecture : le ton. Un adjectif de trop disparaît. La section rejoint le rapport. Le tableau de contrôle reste dans le dossier interne.

[PAUSE 1 s]

**[B5 — Consolidation · 4:46–5:33]**

**[F · CAM A]** Une prédiction. L'IA écrit : le projet a amélioré la sécurité alimentaire de mille cent quarante ménages. Le tableau dit : mille cent quarante ménages ont reçu des semences. Où est le problème ?

[SILENCE 2 s]

**[C · SCHÉMA]** « Extrant : ce que le projet livre → Effet : ce qui change pour les ménages » — VO : Recevoir des semences, c'est un extrant : ce que le projet a livré. Mieux manger pendant la soudure, c'est un effet : ce qui change pour les ménages. L'IA glisse facilement de l'un à l'autre. Votre rapport peut dire ce qui a été livré. Pas encore ce qui a changé. Un effet se mesure par une enquête : c'est l'objet de la leçon quatre.

[PAUSE 1 s]

**[B6 — Clôture · 5:33–6:02]**

**[B · CARTE DE RAPPEL]** « 1. Rédiger un rapport narratif où chaque chiffre a sa source. » « 2. Tableau, notes, plan : l'IA n'écrit qu'à partir d'eux. » « 3. Les écarts s'expliquent, ils ne se cachent pas. » « 4. Un extrant livré n'est pas un effet obtenu. » — VO : Retenez quatre points. Rédiger un rapport narratif où chaque chiffre a sa source. Tableau, notes, plan : l'IA n'écrit qu'à partir d'eux. Les écarts s'expliquent, ils ne se cachent pas. Un extrant livré n'est pas un effet obtenu.

**[F · CAM A]** Hadiza envoie un rapport sobre, vérifié, où chaque écart est expliqué. À vous, maintenant. Rédigez une section vérifiée de votre rapport narratif.

#### Liste des plans

| # | Type | Cadre / source | Contenu | Durée | Notes |
|---|---|---|---|---|---|
| 1 | E | illustration | B1 · Bureau ; classeur « Rapport semestriel — projet Racines (fictif) » ; calendrier | 4 s | Surtitre « six mois plus tard » |
| 2 | F | CAM A, plan poitrine | B1 · Promesse, cas, rappel de la leçon 2 | 23 s | Promesse entière avant 0:12 |
| 3 | F | CAM A, relais CAM B | B2 · « Demandez un rapport… » ; « Un bailleur ne cherche pas un rapport parfait… » | 29 s | Deux blocs |
| 4 | A | capture : Claude | B2 · Paragraphe « enthousiaste » ; trois mots surlignés puis barrés | 9 s | Un mot à la fois |
| 5 | B | cartes | B3 · Quatre titres d'unités | 10 s | 4 × 2,5 s, sans voix |
| 6 | A | capture : Google Drive et Google Sheets | B3 · Dossier source : tableau d'indicateurs, notes anonymisées, plan du bailleur | 26 s | Cadre sur les colonnes cible, réalisé, écart |
| 7 | F | CAM A, insert CAM B | B3 · « Un chiffre, une source » ; « Expliquer les écarts » | 56 s | Insert : tableau de contrôle imprimé et surligneur |
| 8 | A | capture : Google Docs | B3 · Note de terrain fictive : témoignage, prénom modifié, « consentement recueilli » | 23 s | Cadre sur la mention de consentement |
| 9 | A | capture : Claude | B4 · Incognito, dépôt du CSV et des notes ; section rédigée ; liste des chiffres ; [À VÉRIFIER] | 26 s | Cadre sur la mention [À VÉRIFIER] |
| 10 | G | carte de consigne, fond clair | B4 · Consigne on3, texte intégral | 11 s | Dernière ligne surlignée |
| 11 | A | capture : Google Sheets et Docs | B4 · Tableau de contrôle (cinq coches, une croix) ; paragraphe sur les demi-lunes ; cause à demander ; relecture du ton | 53 s | Zoom ≤ 6 % sur la ligne corrigée |
| 12 | F | CAM A | B4 · « Une règle bien écrite… » | 12 s | |
| 13 | F | CAM A | B5 · La question extrant / effet, silence ; B6 · clôture et titre de l'exercice | 28 s | Fin re-filmée en EN, HA, DJE |
| 14 | C | schéma animé | B5 · « Extrant : ce que le projet livre → Effet : ce qui change pour les ménages » | 29 s | Deux colonnes, flèche barrée entre « semences reçues » et « mieux manger » |
| 15 | B | carte | B6 · Carte de rappel | 18 s | Points au rythme de la voix |

#### Montage idéal

| Temps | Timecode cible | Image principale | Habillage (motion graphics) | Texte à l'écran | Son | Transition |
|---|---|---|---|---|---|---|
| B1 | 0:00–0:28 | Illustration E (4 s), puis CAM A | Surtitre ; légende du personnage | « Tillabéri, six mois plus tard — rapport semestriel (fictif) » | voix seule | coupe |
| B2 | 0:28–1:07 | CAM A → capture du paragraphe enthousiaste → CAM A / CAM B | Mots surlignés puis barrés, un par un | « Remarquable ? Transformateur ? Significatif ? » | voix seule | coupe |
| B3 | 1:07–3:03 | Cartes d'unité, captures, CAM A, insert | Compteur 1/4 à 4/4 ; schéma en trois colonnes du tableau de contrôle | Titres d'unités ; « la phrase · le chiffre · la ligne source » | voix seule ; cartes d'unité sans voix | coupe |
| B4 | 3:03–4:46 | Captures Claude, carte G, captures Sheets et Docs, CAM A | Coches et croix dans le tableau de contrôle ; flèche « cause → mesure » | « 87 % » (corrigé) ; « [CAUSE À DEMANDER] » | voix seule | coupe |
| B5 | 4:46–5:33 | CAM A, puis schéma extrant / effet | Barre discrète pendant le silence ; deux colonnes | « Extrant ≠ effet » | silence de 2 s (ambiance seule) | coupe sèche à la fin du silence |
| B6 | 5:33–6:02 | Carte de rappel, puis CAM A | Points au rythme de la voix | Quatre points ; titre de l'exercice en bas | voix seule | coupe vers la carte de clôture |

**Notes de montage** : changement visuel toutes les 4 à 8 s. Le plan 7 (56 s face caméra) est rythmé par l'insert du tableau de contrôle imprimé et par une carte « Cause → mesure corrective ». Couper les hésitations ; garder une respiration après « Pire : ils cachent les écarts. » et après « Et c'est vous qui signez le rapport. ». Zooms ≤ 6 % sur les chiffres contrôlés. Quand le tableau occupe le bas de l'écran, sous-titres en haut. Les chiffres du tableau fictif restent en chiffres à l'écran. Plans de couverture : surligneur sur le tableau imprimé, mains sur le clavier, classeur « Rapports — projet fictif ».

#### Versions EN / HA / DJE

- **À re-filmer dans la langue** (environ 20 s, l'owner face caméra) : B1 — « À la fin de cette leçon, vous saurez rédiger un rapport narratif où chaque chiffre a sa source. Le projet Racines est financé. » ; B6 — « À vous, maintenant. Rédigez une section vérifiée de votre rapport narratif. »
- **Doublé en voix clonée** : fin de B1 (quinze jours ; rappel de la leçon 2) sur l'illustration E prolongée ; B2 sur la capture du paragraphe enthousiaste, puis CAM B ; B3, « Un chiffre, une source » sur l'insert du tableau de contrôle imprimé, « Expliquer les écarts » sur la carte « Cause → mesure corrective » ; B4, « Une règle bien écrite… » sur la capture du tableau de contrôle ; B5, la question sur une carte qui affiche les deux phrases (celle de l'IA, celle du tableau) ; B6, « Hadiza envoie un rapport… » sur la carte de rappel.
- **Notes d'adaptation** : « extrant » = « output » et « effet » = « outcome » en EN ; en HA et en DJE, garder les termes français des ONG et les expliquer par l'exemple (semences reçues ; mieux manger). « Hivernage » = « rainy season » ; « demi-lunes » = « half-moon pits » ; terme local à valider en HA et en DJE. « Misérabilisme » : en EN, dire « portraying people as helpless victims ». « Près de neuf ménages sur dix » doit rester une approximation reconnaissable dans chaque langue.

### Leçon 4 — Suivi-évaluation : KoboToolbox, verbatims et tableau de bord (`on4`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez préparer un questionnaire KoboToolbox et analyser des réponses ouvertes. »
- **Cas réel (B1 → B6)** : Issoufou est responsable du suivi-évaluation de l'ONG Rônier (fictive). Il prépare l'enquête de mi-parcours du projet Racines. L'enquête précédente a laissé trois cents réponses ouvertes à la question « Qu'est-ce qui devrait changer dans le projet ? », que personne n'a analysées. L'enjeu : écouter les ménages et en rendre compte, sans exposer personne ni publier un pourcentage faux. En B6, les trois cents réponses sont codées, comptées dans le tableur et vérifiées sur un échantillon ; un signalement est parti vers le mécanisme de plaintes ; le graphique a rejoint le tableau de bord, avec sa source et sa date.
- **Unités de notion (B3)** : 1. Le questionnaire : l'IA propose, vous tranchez — un brouillon au format XLSForm importé dans KoboToolbox ; le consentement en premier ; seulement les questions analysées ; libellés en haoussa ou en zarma relus par un locuteur ; aperçu testé avant de déployer. · 2. Une grille, puis un codage — cinq à sept codes définis en une phrase, proposés sur un échantillon, corrigés par vous, puis appliqués à chaque réponse. · 3. L'IA classe, le tableur compte — pourcentages calculés dans le tableur, échantillon vérifié à la main ; même règle pour l'analyse assistée des réponses audio proposée par KoboToolbox. · 4. Le tableau de bord : peu d'indicateurs, une date — cinq indicateurs du cadre logique, ventilés par sexe, avec cible, réalisé, source et date de mise à jour.
- **Démo (B4)** : KoboToolbox (compte de démonstration, projet « Racines — mi-parcours (fictif) » contenant quelques soumissions de test), Google Sheets et Claude en version gratuite (conversation incognito, création de fichiers activée dans les paramètres [à vérifier au moment du tournage]), avec le fichier fictif « reponses_ouvertes_fictives » (300 lignes : identifiant R001 à R300 ; colonnes nom, téléphone et GPS fictifs, à supprimer à l'écran ; réponse ouverte ; une réponse cite un nom, une autre relève d'un signalement). 1. KoboToolbox, onglet Données, Téléchargements : exporter au format XLS [à vérifier au moment du tournage : intitulés]. 2. Dans le tableur : supprimer les colonnes nom, téléphone et GPS ; garder l'identifiant et la réponse ; remplacer le nom cité par [NOM] ; enregistrer en CSV. 3. Claude : conversation incognito, dépôt du CSV. 4. Coller la consigne B ; étape 1 : une grille de six codes ; fusionner « puits en panne » et « accès à l'eau » ; valider. 5. Étape 2 : le fichier revient avec une colonne « code », dont une ligne SIGNALEMENT. 6. Dans le tableur : Insertion > Tableau croisé dynamique (lignes : code ; valeurs : nombre d'identifiants). 7. Tirer vingt réponses au hasard (colonne `=ALEA()`, puis tri), les coder à l'aveugle et comparer : dans notre exemple fictif, dix-sept concordent ; préciser une définition et relancer le codage ; noter la date, la consigne et la version de la grille dans le journal d'usage. 8. Insérer un graphique en barres dans l'onglet « Tableau de bord », avec la source et la date. 9. Hors écran : la ligne SIGNALEMENT est transmise au point focal du mécanisme de plaintes. Résultat attendu à l'écran : tableau croisé dynamique, échantillon vérifié, graphique daté au tableau de bord. Si la grille ou la concordance réelles diffèrent, filmer ce qui arrive et adapter la voix off.
- **Consolidation (B5)** : prédiction. Question : une réponse dit « le responsable du site garde une partie des semences » ; dans quel thème du graphique va-t-elle ? Réponse : dans aucun. C'est un signalement, pas une statistique : l'IA le repère grâce à la consigne, un humain prend le relais, et la réponse part vers le mécanisme de plaintes, selon la procédure de l'organisation, en toute confidentialité.
- **Consigne à copier** :

```text
— Consigne A : le questionnaire —
Rôle : tu es spécialiste de la collecte de données avec KoboToolbox.
Rédige un questionnaire au format XLSForm pour [objet de l'enquête], auprès de [public].
Contraintes :
- [12] questions au maximum, chacune liée à l'un des indicateurs ci-dessous.
- Première question : le consentement (oui / non). Si la réponse est non, le questionnaire s'arrête.
- Aucune question sur le nom, le téléphone ou la position GPS.
- Libellés en français et en [haoussa / zarma] ; je ferai relire la traduction par un locuteur.
Rends trois tableaux à copier dans un classeur : survey (type, name, label::Français (fr), label::[Hausa (ha)], required, relevant), choices, settings.
[Coller les indicateurs]

— Consigne B : les réponses ouvertes —
Rôle : tu es analyste en suivi-évaluation.
Je dépose un fichier anonymisé : colonne A = identifiant, colonne B = réponse à la question « [question exacte] ».
Étape 1 : à partir de [40] réponses tirées au hasard, propose une grille de 5 à 7 codes. Pour chaque code : un nom court, une définition d'une phrase, un exemple. Attends ma validation.
Étape 2 : attribue un seul code par réponse. Si aucun code ne convient, écris AUTRE.
Protection : si une réponse évoque un abus, une fraude, une violence ou un danger, écris SIGNALEMENT, sans résumer ni commenter la réponse.
Rends le même fichier avec une colonne C « code ». Ne calcule aucun pourcentage : je compterai moi-même.
```

- **Exercice** : « Préparez le questionnaire et la grille de codes de votre projet » — 1. Avec la consigne A, obtenez un XLSForm de douze questions au maximum, consentement en premier, lié à vos indicateurs ; importez-le dans KoboToolbox et corrigez-le jusqu'à ce que l'aperçu fonctionne. 2. Rédigez vingt réponses ouvertes fictives à l'une de vos questions et, avec la consigne B, obtenez puis corrigez une grille de cinq à sept codes. 3. Comptez les codes dans votre tableur avec un tableau croisé dynamique, et vérifiez vous-même cinq codages.
- **Carte de rappel** : 1. Préparer un questionnaire KoboToolbox et analyser des réponses ouvertes. 2. Consentement d'abord, et seulement les questions utiles. 3. L'IA classe, le tableur compte, vous vérifiez. 4. Un abus signalé n'est pas une statistique.
- **Quiz** :
  1. Qu'est-ce qu'un XLSForm ? — A) Un rapport Excel produit par KoboToolbox. B) Une application de collecte sur téléphone. C) Un tableau de bord en ligne. D) Un classeur qui décrit le formulaire, une ligne par question, importable dans KoboToolbox. — **Réponse : D**
  2. Quelle doit être la première question d'un questionnaire préparé avec l'IA ? — A) Le consentement, avec arrêt du questionnaire si la réponse est non. B) Le nom du répondant. C) Le numéro de téléphone. D) La position GPS du ménage. — **Réponse : A**
  3. L'IA annonce : « 38 % des répondants citent le retard des semences. » Avant de l'écrire dans un rapport : — A) Vous le copiez tel quel. B) Vous comptez dans le tableur et vérifiez un échantillon de réponses codées. C) Vous demandez à l'IA si elle est sûre. D) Vous l'arrondissez à 40 %. — **Réponse : B**
  4. Une réponse ouverte accuse un responsable de détourner des semences. Que faites-vous ? — A) Vous la comptez dans le thème « distribution ». B) Vous la supprimez du fichier. C) Vous la transmettez au mécanisme de plaintes, selon votre procédure, en toute confidentialité. D) Vous demandez à l'IA d'établir les faits. — **Réponse : C**
  5. Avant de déposer un export KoboToolbox dans un assistant, vous : — A) Gardez toutes les colonnes, pour le contexte. B) Supprimez noms, téléphones et positions GPS, et masquez tout nom cité dans les réponses. C) Renommez seulement le fichier. D) Supprimez les réponses ouvertes. — **Réponse : B**
- **Marques citées** : KoboToolbox, Claude, Google Sheets.

#### Script

Durée estimée : 5:58 · Mots dits : 701

**[B1 — Accroche · 0:00–0:26]**

**[E · SITUATION]** « Tillabéri — Issoufou, responsable suivi-évaluation (fictif) » — VO : Trois cents réponses ouvertes. Jamais lues.

**[F · CAM A]** À la fin de cette leçon, vous saurez préparer un questionnaire KoboToolbox et analyser des réponses ouvertes. Issoufou, responsable du suivi-évaluation, prépare l'enquête de mi-parcours du projet Racines. Dans la leçon trois, vous avez séparé l'extrant de l'effet. L'effet se mesure sur le terrain.

[PAUSE 1 s]

**[B2 — Cadrage · 0:26–1:07]**

**[F · CAM A]** L'enquête précédente a laissé trois cents réponses ouvertes. On croit souvent qu'elles sont inexploitables. Alors on ne les lit pas.

**[A · ÉCRAN]** *(export fictif : colonne de réponses ouvertes qui défile)* — VO : On les appelle des verbatims : les mots exacts des répondants. C'est là que les gens disent ce que les cases à cocher n'ont pas prévu. Le puits en panne. Le marché trop loin. La semence arrivée après les pluies.

**[F · CAM A]** L'IA peut vous aider à toutes les lire. À condition de garder trois réflexes : protéger, vérifier, compter vous-même. Vous les retrouverez à chaque étape.

[PAUSE 1 s]

**[B3 — Notion · 1:07–3:10]**

**[B · CARTE]** « Unité 1 — Le questionnaire : l'IA propose, vous tranchez »

**[A · ÉCRAN]** *(KoboToolbox : nouveau projet, import d'un XLSForm, aperçu du formulaire en français et en haoussa)* — VO : L'IA peut rédiger un brouillon de questionnaire au format XLSForm. C'est un classeur où chaque ligne décrit une question. KoboToolbox l'importe directement, et vous pouvez le corriger ligne par ligne. Un brouillon d'IA peut contenir des erreurs de format : l'aperçu les révèle. Exigez trois choses. Le consentement en première question. Seulement les questions que vous analyserez : chaque question prend du temps aux familles. Des libellés en haoussa ou en zarma, relus par un locuteur. Puis testez l'aperçu avant de déployer.

**[B · CARTE]** « Unité 2 — Une grille, puis un codage »

**[F · CAM A]** Pour analyser des verbatims, il faut une grille de codes. Cinq à sept thèmes, chacun défini en une phrase. Par exemple : accès à l'eau, calendrier des semences, marché et prix, formation, autre. L'IA propose la grille à partir d'un échantillon. Vous la corrigez. Ensuite seulement, elle classe chaque réponse.

**[B · CARTE]** « Unité 3 — L'IA classe, le tableur compte »

**[F · CAM A]** Ne demandez pas de pourcentages à l'IA. Elle classe, le tableur compte. Pourquoi ? Parce qu'un pourcentage annoncé doit pouvoir se refaire, devant le bailleur. Et vous vérifiez un échantillon tiré au hasard. À savoir : KoboToolbox propose aussi une analyse assistée des réponses audio, avec un statut de vérification. Même règle : un humain valide.

**[B · CARTE]** « Unité 4 — Le tableau de bord : peu d'indicateurs, une date »

**[A · ÉCRAN]** *(onglet « Tableau de bord » : cinq indicateurs, cible, réalisé, source, date)* — VO : Le tableau de bord tient sur un écran. Cinq indicateurs du cadre logique, ventilés par sexe. La cible, le réalisé, la source, la date de mise à jour. L'IA peut vous aider à le monter. Les chiffres, eux, viennent toujours des données. Et un tableau de bord sans date peut tromper.

[PAUSE 1 s]

**[B4 — Application · 3:10–4:44]**

**[A · ÉCRAN]** *(KoboToolbox : onglet Données, Téléchargements, export XLS)* — VO : Issoufou télécharge l'export de l'enquête depuis KoboToolbox.

**[A · ÉCRAN]** *(tableur : suppression des colonnes nom, téléphone, GPS ; noms cités masqués)* — VO : Avant tout dépôt, il supprime les colonnes nom, téléphone et position GPS. Il garde un identifiant et la réponse. Il parcourt les réponses, et masque tout nom cité.

**[A · ÉCRAN]** *(conversation incognito ; dépôt du fichier CSV anonymisé)* — VO : Il ouvre une conversation incognito et dépose le fichier nettoyé, au format CSV.

**[G · CONSIGNE]** « Consigne B à copier de la fiche on4, texte intégral » — VO : Il colle la consigne. Étape un : la grille. Étape deux : le codage. Et une règle de protection : on y revient.

**[A · ÉCRAN]** *(grille proposée : six codes ; fusion de deux codes)* — VO : L'IA propose six codes. Issoufou fusionne puits en panne et accès à l'eau : c'est le même problème. Il valide la grille.

**[A · ÉCRAN]** *(fichier rendu avec la colonne « code » ; tableau croisé dynamique)* — VO : L'IA rend le fichier avec une colonne de codes. Issoufou l'ouvre dans son tableur et insère un tableau croisé dynamique. C'est le tableur qui compte. L'accès à l'eau arrive en tête, puis le calendrier des semences.

**[A · ÉCRAN]** *(vingt lignes tirées au hasard ; colonne « code Issoufou » ; dix-sept coches)* — VO : Il tire vingt réponses au hasard et les code lui-même, sans regarder. Dix-sept concordent. Il précise une définition et relance le codage. Dans son journal, il note la date, la consigne et la version de la grille.

**[A · ÉCRAN]** *(graphique en barres ajouté au tableau de bord, avec source et date)* — VO : Le graphique rejoint le tableau de bord, avec sa source et sa date.

**[F · CAM A]** Trois cents voix, enfin entendues. Et aucune n'a quitté l'organisation avec un nom.

[PAUSE 1 s]

**[B5 — Consolidation · 4:44–5:26]**

**[F · CAM A]** Une prédiction. Une réponse dit : le responsable du site garde une partie des semences. Dans quel thème du graphique va-t-elle ?

[SILENCE 2 s]

**[B · CARTE]** « SIGNALEMENT → mécanisme de plaintes, en toute confidentialité » — VO : Dans aucun. Ce n'est pas une statistique, c'est un signalement. Voilà pourquoi la consigne prévoit le code signalement. L'IA ne juge pas l'accusation : elle la repère. Ensuite, un humain prend le relais. La réponse part vers votre mécanisme de plaintes, selon votre procédure. En toute confidentialité, et sans attendre.

**[F · CAM A]** Prévoyez-le dès la conception de l'enquête : qui reçoit ces réponses, et comment.

[PAUSE 1 s]

**[B6 — Clôture · 5:26–5:58]**

**[B · CARTE DE RAPPEL]** « 1. Préparer un questionnaire KoboToolbox et analyser des réponses ouvertes. » « 2. Consentement d'abord, et seulement les questions utiles. » « 3. L'IA classe, le tableur compte, vous vérifiez. » « 4. Un abus signalé n'est pas une statistique. » — VO : Retenez quatre points. Préparer un questionnaire KoboToolbox et analyser des réponses ouvertes. Consentement d'abord, et seulement les questions utiles. L'IA classe, le tableur compte, vous vérifiez. Un abus signalé n'est pas une statistique.

**[F · CAM A]** Les trois cents voix sont entendues, et aucune n'est exposée. Le prochain rapport dira enfin ce que pensent les ménages. À vous. Préparez le questionnaire et la grille de codes de votre projet.

#### Liste des plans

| # | Type | Cadre / source | Contenu | Durée | Notes |
|---|---|---|---|---|---|
| 1 | E | illustration | B1 · Bureau de suivi-évaluation : pile de questionnaires papier, téléphone Android affichant un formulaire | 4 s | Légende « Issoufou, suivi-évaluation (fictif) » ; écran du téléphone fictif |
| 2 | F | CAM A, plan poitrine | B1 · Promesse, cas, rappel de la leçon 3 | 21 s | Promesse entière avant 0:12 |
| 3 | F | CAM A, relais CAM B | B2 · Les trois cents réponses ; « L'IA peut vous aider… trois réflexes » | 21 s | Deux blocs |
| 4 | A | capture : Google Sheets | B2 · Export fictif : la colonne des réponses ouvertes défile | 19 s | Trois verbatims encadrés tour à tour |
| 5 | B | cartes | B3 · Quatre titres d'unités | 10 s | 4 × 2,5 s, sans voix |
| 6 | A | capture : KoboToolbox | B3 · Nouveau projet → importer un XLSForm → aperçu en français et en haoussa → question de consentement | 38 s | Intitulés des menus [à vérifier au moment du tournage] |
| 7 | F | CAM A, relais CAM B | B3 · La grille de codes ; « L'IA classe, le tableur compte » ; l'analyse audio de KoboToolbox | 49 s | Insert : téléphone avec le formulaire en aperçu |
| 8 | A | capture : Google Sheets | B3 · Onglet « Tableau de bord » : cinq indicateurs, cible, réalisé, source, date | 25 s | Cadre sur la date de mise à jour |
| 9 | A | capture : KoboToolbox puis Google Sheets | B4 · Export ; colonnes nom, téléphone, GPS supprimées ; nom cité masqué | 17 s | Croix sur chaque colonne supprimée |
| 10 | A | capture : Claude | B4 · Incognito et dépôt du CSV ; grille de six codes, fusion de deux | 16 s | Cadre sur les deux codes fusionnés |
| 11 | G | carte de consigne, fond clair | B4 · Consigne B on4, texte intégral | 13 s | Ligne « Protection » surlignée |
| 12 | A | capture : Google Sheets | B4 · Fichier codé ; tableau croisé dynamique ; échantillon de vingt ; graphique au tableau de bord | 41 s | Zoom ≤ 6 % sur le tableau croisé ; coches sur l'échantillon |
| 13 | F | CAM A | B4 · « Trois cents voix… » ; B5 · la question, silence | 18 s | Silence de 2 s regard caméra |
| 14 | B | cartes | B5 · « SIGNALEMENT → mécanisme de plaintes, en toute confidentialité » ; B6 · carte de rappel | 39 s | Pictogramme cadenas + mot SIGNALEMENT |
| 15 | F | CAM A | B5 · « Prévoyez-le… » ; B6 · clôture et titre de l'exercice | 22 s | Fin re-filmée en EN, HA, DJE |

#### Montage idéal

| Temps | Timecode cible | Image principale | Habillage (motion graphics) | Texte à l'écran | Son | Transition |
|---|---|---|---|---|---|---|
| B1 | 0:00–0:26 | Illustration E (4 s), puis CAM A | Légende du personnage | « Tillabéri — Issoufou, responsable suivi-évaluation (fictif) » | voix seule | coupe |
| B2 | 0:26–1:07 | CAM A → capture de l'export → CAM A / CAM B | Trois verbatims encadrés ; trois mots qui s'affichent : protéger, vérifier, compter | « Verbatims : les mots exacts des répondants » | voix seule | coupe |
| B3 | 1:07–3:10 | Cartes d'unité, captures KoboToolbox et Sheets, CAM A | Compteur 1/4 à 4/4 ; schéma « une ligne = une question » sur le XLSForm | Titres d'unités ; « L'IA classe, le tableur compte » | voix seule ; cartes d'unité sans voix | coupe |
| B4 | 3:10–4:44 | Captures KoboToolbox, Sheets et Claude, carte G, CAM A | Numéros d'étape 1 → 6 ; croix sur les colonnes supprimées ; coches sur l'échantillon | « 17 / 20 » (exemple fictif) | voix seule | coupe |
| B5 | 4:44–5:26 | CAM A, carte SIGNALEMENT, CAM A | Barre discrète pendant le silence ; cadenas | « Dans quel thème ? » puis « SIGNALEMENT » | silence de 2 s (ambiance seule) | coupe sèche à la fin du silence |
| B6 | 5:26–5:58 | Carte de rappel, puis CAM A | Points au rythme de la voix | Quatre points ; titre de l'exercice en bas | voix seule | coupe vers la carte de clôture |

**Notes de montage** : changement visuel toutes les 4 à 8 s ; les captures de B4 s'enchaînent sans temps mort, mais chaque résultat reste 2 s à l'écran. Le plan 7 (49 s face caméra) est coupé par l'insert du téléphone et par une carte listant les cinq codes d'exemple. Couper les hésitations ; garder une respiration après « Jamais lues. » et après « En toute confidentialité, et sans attendre. ». Zooms ≤ 6 % sur le tableau croisé et le graphique. Quand le tableur occupe le bas de l'écran, sous-titres en haut. Plans de couverture : téléphone avec le formulaire, pile de questionnaires papier, mains sur le clavier.

#### Versions EN / HA / DJE

- **À re-filmer dans la langue** (environ 18 s, l'owner face caméra) : B1 — « À la fin de cette leçon, vous saurez préparer un questionnaire KoboToolbox et analyser des réponses ouvertes. » ; B6 — « À vous. Préparez le questionnaire et la grille de codes de votre projet. »
- **Doublé en voix clonée** : fin de B1 (Issoufou ; rappel de la leçon 3) sur l'illustration E prolongée ; B2 sur la capture de l'export, puis CAM B ; B3, la grille de codes sur la carte des cinq codes d'exemple, « L'IA classe… » sur l'insert du téléphone puis le tableau croisé ; B4, « Trois cents voix… » sur le graphique ; B5, la question sur une carte qui cite la réponse, « Prévoyez-le… » sur la carte SIGNALEMENT ; B6, « Les trois cents voix… » sur la carte de rappel.
- **Notes d'adaptation** : « verbatims » = « open-ended answers » en EN ; « mécanisme de plaintes » = « complaints and feedback mechanism » ; en HA et en DJE, reprendre l'expression utilisée localement par les ONG (à valider). « Tableau croisé dynamique » = « pivot table ». Filmer si possible KoboToolbox et le tableur dans la langue de la version ; sinon, sous-titrer les menus. Version HA : montrer la colonne label::Hausa (ha) ; version DJE : label::Zarma (dje).

### Leçon 5 — Notes de synthèse et veille avec NotebookLM (`on5`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez résumer de longs documents en une note sourcée d'une page. »
- **Cas réel (B1 → B6)** : Jeudi, réunion de coordination à Niamey (fictive). Abdoul-Aziz doit y porter la position de l'ONG Rônier. Mariama, chargée de communication, a deux jours pour lui préparer une note d'une page à partir de quatre documents fictifs : une évaluation à mi-parcours, un plan régional, une note de politique et le compte rendu de la réunion précédente, soit environ deux cents pages. L'enjeu : arriver avec des messages justes et vérifiables, sans relayer un chiffre hors contexte. En B6, Abdoul-Aziz a sa page : trois messages et trois recommandations, chacun avec la page source ; un chiffre ancien et une contradiction entre sources sont signalés en vigilance.
- **Unités de notion (B3)** : 1. Un carnet, des sources choisies — NotebookLM répond à partir des sources du carnet ; seulement des documents publics ou internes autorisés, jamais de données nominatives ; le compte professionnel de l'organisation s'il existe. · 2. Chaque phrase porte sa citation — ouvrir la citation et lire autour : zone, année, projet ; signaler les contradictions au lieu de choisir en silence. · 3. Trois messages, trois recommandations — objet, contexte, trois messages sourcés, trois recommandations, points de vigilance ; les modèles de rapport de l'outil comme simple point de départ. · 4. La veille : ajouter, comparer, écouter — ajouter les nouveaux documents chaque semaine, demander ce qui a changé, un carnet par thème, résumé audio vérifié avant tout partage.
- **Démo (B4)** : NotebookLM en version gratuite (compte Google de démonstration) et Google Docs, avec quatre PDF fictifs générés pour le cours (voir 2.6). 1. Créer un carnet « Coordination Tillabéri (fictif) ». 2. Ajouter les quatre PDF. 3. Régler les réponses en français [à vérifier au moment du tournage : emplacement du réglage de langue]. 4. Poser la question : « Quels constats et quelles recommandations concernent la sécurité alimentaire dans notre zone ? ». 5. Poser la question : « Sur quels points les sources se contredisent-elles ? » (deux chiffres de production divergents, prévus dans les documents fictifs). 6. Coller la consigne. 7. Ouvrir trois citations : deux solides, une issue d'un rapport ancien, déplacée dans les points de vigilance. 8. Enregistrer la réponse en note [à vérifier au moment du tournage : intitulé de la commande] et la copier dans Google Docs ; ajouter la date et la liste des quatre sources. Résultat attendu à l'écran : une note d'une page dont chaque message renvoie à une citation ouverte et vérifiée. Pour B3 (unité 4), filmer à part : l'ajout d'un document à un carnet de veille, la question « Qu'est-ce qui a changé depuis le mois dernier ? » et la génération d'un résumé audio en français.
- **Consolidation (B5)** : prédiction. Question : NotebookLM écrit « les rendements ont doublé » ; la citation renvoie à une phrase sur une autre région, en 2022 ; le chiffre est-il faux ? Réponse : non, le chiffre est juste, mais il ne parle ni de la zone, ni de l'année ; une citation prouve d'où vient une phrase, pas qu'elle répond à votre question. Dans la note, ce chiffre va en vigilance, avec sa zone et son année.
- **Consigne à copier** :

```text
À partir de ces sources uniquement, rédige une note de synthèse d'une page pour [destinataire], en vue de [réunion ou décision].
Structure :
1. Objet, en une phrase.
2. Contexte, en deux phrases.
3. Trois messages clés, chacun avec sa citation.
4. Trois recommandations concrètes pour [notre organisation, notre zone].
5. Points de vigilance : contradictions entre sources, données anciennes, informations absentes.
Pour chaque chiffre, précise la zone et l'année concernées. Si les sources ne répondent pas à une question, dis-le au lieu de compléter.
```

- **Exercice** : « Rédigez une note de synthèse d'une page avec NotebookLM » — 1. Choisissez trois documents publics liés au thème de votre projet fictif (rapports, plans ou évaluations publiés) : aucun document confidentiel, aucune donnée personnelle. 2. Créez un carnet, posez trois questions, dont une sur les contradictions entre sources, et ouvrez chaque citation (zone, année, projet). 3. Avec la consigne, produisez la note d'une page, corrigez-la vous-même et complétez la rubrique de vigilance.
- **Carte de rappel** : 1. Résumer de longs documents en une note sourcée d'une page. 2. Vos sources seulement, jamais de données nominatives. 3. Ouvrir chaque citation : zone, année, projet. 4. Trois messages, trois recommandations, une page.
- **Quiz** :
  1. Sur quoi NotebookLM s'appuie-t-il pour répondre ? — A) Sur tout Internet. B) Sur les sources que vous avez ajoutées au carnet. C) Sur les carnets des autres utilisateurs. D) Sur une base de données des Nations unies. — **Réponse : B**
  2. Quel document ne doit pas entrer dans un carnet NotebookLM ? — A) Un plan de réponse publié. B) Une note de politique publique. C) L'export brut d'une enquête, avec noms et téléphones. D) Un compte rendu interne anonymisé, autorisé par votre organisation. — **Réponse : C**
  3. Une citation renvoie à un passage sur une autre région, en 2022. Que concluez-vous ? — A) Le chiffre est faux. B) NotebookLM a inventé la citation. C) Il faut supprimer la source. D) Le chiffre peut être juste, mais il ne répond pas à votre question sur votre zone. — **Réponse : D**
  4. Quelle structure convient à une note de synthèse d'une page ? — A) Objet, contexte, trois messages sourcés, trois recommandations, points de vigilance. B) Le résumé de chaque document, l'un après l'autre. C) Une liste de citations sans commentaire. D) La transcription du résumé audio. — **Réponse : A**
  5. Le résumé audio de vos sources est clair. Avant de le partager aux partenaires : — A) Vous l'envoyez tel quel. B) Vous l'écoutez en entier, vérifiez les points clés dans les sources et indiquez qu'il est produit par une IA. C) Vous le faites traduire par l'IA, sans relecture. D) Vous le publiez sur les réseaux sociaux. — **Réponse : B**
- **Marques citées** : NotebookLM, Google, Google Docs.

#### Script

Durée estimée : 5:54 · Mots dits : 695

**[B1 — Accroche · 0:00–0:27]**

**[E · SITUATION]** « Niamey, jeudi — réunion de coordination (fictive) » — VO : Jeudi, réunion de coordination. Quatre documents. Deux cents pages.

**[F · CAM A]** À la fin de cette leçon, vous saurez résumer de longs documents en une note sourcée d'une page. Mariama, chargée de communication, prépare cette page pour Abdoul-Aziz. Elle a deux jours. Dans la leçon quatre, Issoufou vérifiait avant de compter. Ici, on vérifie avant de citer.

[PAUSE 1 s]

**[B2 — Cadrage · 0:27–1:12]**

**[F · CAM A]** On croit qu'un bon résumé, c'est un texte court. Non. Un bon résumé, c'est un texte court dont chaque phrase se vérifie. Surtout quand il va guider une décision.

**[A · ÉCRAN]** *(NotebookLM : réponse avec citations numérotées ; clic sur une citation, passage source affiché)* — VO : C'est ce que permet NotebookLM, un outil de Google, utilisable en version gratuite. Il est conçu pour répondre à partir de vos documents. Ses réponses portent de petits numéros. Un clic, et vous lisez le passage d'origine.

**[F · CAM A]** Vous ne croyez pas l'outil sur parole. Vous le vérifiez, en un clic. Un assistant généraliste, lui, peut mêler vos documents et ses propres connaissances.

[PAUSE 1 s]

**[B3 — Notion · 1:12–3:01]**

**[B · CARTE]** « Unité 1 — Un carnet, des sources choisies »

**[A · ÉCRAN]** *(NotebookLM : création d'un carnet, panneau des sources)* — VO : Vous créez un carnet, appelé notebook dans l'outil. Vous y ajoutez vos sources : PDF, documents Google, pages web, vidéos. Le carnet garde vos sources ensemble : vous y revenez à chaque nouvelle question. Choisissez-les bien. Des documents publics, ou internes et autorisés. Jamais de données nominatives. Et si votre organisation fournit un compte professionnel, utilisez-le.

**[B · CARTE]** « Unité 2 — Chaque phrase porte sa citation »

**[F · CAM A]** La citation montre d'où vient une phrase. Ouvrez-la, et lisez autour. Quelle zone ? Quelle année ? Quel projet ? Trois questions, pour chaque chiffre. Et quand deux sources se contredisent, ne choisissez pas en silence : signalez-le.

**[B · CARTE]** « Unité 3 — Trois messages, trois recommandations »

**[C · SCHÉMA]** « Objet · Contexte · 3 messages sourcés · 3 recommandations · Vigilance » — VO : Une note de synthèse tient sur une page. L'objet, en une phrase. Le contexte, en deux. Trois messages clés, chacun avec sa source. Trois recommandations pour votre organisation. Et les points de vigilance : contradictions, données anciennes, informations absentes. NotebookLM propose aussi des modèles de rapport. Partez-en si vous voulez, puis imposez votre structure.

**[B · CARTE]** « Unité 4 — La veille : ajouter, comparer, écouter »

**[F · CAM A]** La veille, c'est la même méthode, chaque semaine.

**[A · ÉCRAN]** *(carnet de veille : ajout d'un nouveau document ; question « Qu'est-ce qui a changé depuis le mois dernier ? »)* — VO : Vous ajoutez les nouveaux documents. Vous demandez ce qui a changé depuis le mois dernier. Vous pouvez garder un carnet par thème : sécurité alimentaire, eau, protection.

**[F · CAM A]** Et sur la route de Tillabéri, vous écoutez un résumé audio en français. Pratique pour l'équipe, mais il n'affiche pas ses sources. Avant de le partager, vérifiez-le comme le reste.

[PAUSE 1 s]

**[B4 — Application · 3:01–4:37]**

**[A · ÉCRAN]** *(NotebookLM : nouveau carnet « Coordination Tillabéri (fictif) », ajout de quatre PDF fictifs)* — VO : Mariama crée un carnet. Elle y dépose quatre documents fictifs. Une évaluation à mi-parcours, un plan régional, une note de politique, un compte rendu de réunion.

**[A · ÉCRAN]** *(paramètres du carnet : langue des réponses en français)* — VO : Elle vérifie que les réponses sont réglées en français.

**[A · ÉCRAN]** *(question dans la discussion ; réponse avec citations)* — VO : Elle pose sa question. Quels constats et quelles recommandations concernent la sécurité alimentaire dans notre zone ? La réponse arrive, avec ses citations.

**[A · ÉCRAN]** *(deuxième question : « Sur quels points les sources se contredisent-elles ? »)* — VO : Elle ajoute une question : sur quels points les sources se contredisent-elles ? Deux chiffres de production divergent. Elle le notera.

**[G · CONSIGNE]** « Consigne à copier de la fiche on5, texte intégral » — VO : Puis elle demande la note avec cette consigne. La structure est imposée.

**[A · ÉCRAN]** *(note générée ; ouverture de trois citations, une par message)* — VO : Mariama ouvre trois citations, une par message clé. Deux sont solides. La troisième vient d'un rapport ancien. Elle la déplace dans les points de vigilance.

**[A · ÉCRAN]** *(note enregistrée, puis copiée dans un document)* — VO : Elle enregistre la note, la copie dans un document et la relit. Elle ajoute la date et la liste des quatre sources. Une page, sourcée. Elle l'envoie à Abdoul-Aziz la veille, pour qu'il pose ses questions.

**[F · CAM A]** Abdoul-Aziz part à la réunion avec trois messages et trois recommandations. Et, pour chacun, la page exacte où le vérifier. Si on le contredit, il répond, source en main.

[PAUSE 1 s]

**[B5 — Consolidation · 4:37–5:25]**

**[F · CAM A]** Une prédiction. NotebookLM écrit : les rendements ont doublé. Mariama ouvre la citation. La phrase parle d'une autre région, en deux mille vingt-deux. Le chiffre est-il faux ?

[SILENCE 2 s]

**[B · CARTE]** « Une citation prouve d'où vient une phrase, pas qu'elle répond à votre question » — VO : Non, le chiffre est juste. Mais il ne parle ni de votre zone, ni de cette année. Une citation prouve d'où vient une phrase. Pas qu'elle répond à votre question. Voilà pourquoi on lit autour. Le bon réflexe : noter la zone et l'année à côté de chaque chiffre.

**[F · CAM A]** Dans la note de Mariama, ce chiffre irait en vigilance, pas en message clé. Avec sa zone et son année.

[PAUSE 1 s]

**[B6 — Clôture · 5:25–5:54]**

**[B · CARTE DE RAPPEL]** « 1. Résumer de longs documents en une note sourcée d'une page. » « 2. Vos sources seulement, jamais de données nominatives. » « 3. Ouvrir chaque citation : zone, année, projet. » « 4. Trois messages, trois recommandations, une page. » — VO : Retenez quatre points. Résumer de longs documents en une note sourcée d'une page. Vos sources seulement, jamais de données nominatives. Ouvrir chaque citation : zone, année, projet. Trois messages, trois recommandations, une page.

**[F · CAM A]** Abdoul-Aziz a eu sa page, et chaque phrase se vérifie. À vous, avec trois documents publics de votre secteur. Rédigez une note de synthèse d'une page avec NotebookLM.

#### Liste des plans

| # | Type | Cadre / source | Contenu | Durée | Notes |
|---|---|---|---|---|---|
| 1 | E | illustration | B1 · Salle de réunion à Niamey ; pile de quatre rapports épais aux couvertures fictives ; calendrier « jeudi » | 4 s | Légende « Mariama, chargée de communication (fictive) » |
| 2 | F | CAM A, plan poitrine | B1 · Promesse, cas, rappel de la leçon 4 | 22 s | Promesse entière avant 0:12 |
| 3 | F | CAM A, relais CAM B | B2 · « Un bon résumé… » ; « Vous ne croyez pas l'outil sur parole… » | 26 s | Deux blocs |
| 4 | A | capture : NotebookLM | B2 · Réponse avec citations numérotées ; clic sur une citation, passage source affiché | 18 s | Cadre sur le numéro, puis sur le passage |
| 5 | B | cartes | B3 · Quatre titres d'unités | 10 s | 4 × 2,5 s, sans voix |
| 6 | A | capture : NotebookLM | B3 · Création d'un carnet ; panneau des sources | 26 s | Intitulés [à vérifier au moment du tournage] |
| 7 | F | CAM A, insert CAM B | B3 · La citation et ses trois questions ; la veille ; le résumé audio | 35 s | Insert : écoute d'un résumé audio au téléphone, avec écouteurs |
| 8 | C | schéma animé | B3 · Structure d'une note : objet, contexte, trois messages, trois recommandations, vigilance | 25 s | Page qui se remplit bloc par bloc |
| 9 | A | capture : NotebookLM | B3 · Carnet de veille : ajout d'un document ; question « Qu'est-ce qui a changé depuis le mois dernier ? » | 13 s | |
| 10 | A | capture : NotebookLM | B4 · Carnet « Coordination Tillabéri (fictif) » ; quatre PDF ; réglage de langue ; question ; contradictions | 42 s | Cadre sur les deux chiffres divergents |
| 11 | G | carte de consigne, fond clair | B4 · Consigne on5, texte intégral | 9 s | Ligne « zone et année » surlignée |
| 12 | A | capture : NotebookLM puis Google Docs | B4 · Note générée ; trois citations ouvertes ; note enregistrée et copiée | 29 s | Coche, coche, triangle « vigilance » |
| 13 | F | CAM A | B4 · « Abdoul-Aziz part à la réunion… » ; B5 · la question, silence | 29 s | Silence de 2 s regard caméra |
| 14 | B | cartes | B5 · « Une citation prouve d'où vient une phrase, pas qu'elle répond à votre question » ; B6 · carte de rappel | 38 s | |
| 15 | F | CAM A | B5 · « Dans la note de Mariama… » ; B6 · clôture et titre de l'exercice | 23 s | Fin re-filmée en EN, HA, DJE |

#### Montage idéal

| Temps | Timecode cible | Image principale | Habillage (motion graphics) | Texte à l'écran | Son | Transition |
|---|---|---|---|---|---|---|
| B1 | 0:00–0:27 | Illustration E (4 s), puis CAM A | Légende du personnage | « Niamey, jeudi — réunion de coordination (fictive) » ; « 4 documents · 200 pages » | voix seule | coupe |
| B2 | 0:27–1:12 | CAM A → capture des citations → CAM A / CAM B | Cadre sur un numéro de citation, puis sur le passage source | « Court, et vérifiable phrase par phrase » | voix seule | coupe |
| B3 | 1:12–3:01 | Cartes d'unité, captures NotebookLM, CAM A, schéma, insert | Compteur 1/4 à 4/4 ; « Zone ? Année ? Projet ? » en trois temps ; page de note qui se remplit | Titres d'unités ; « Jamais de données nominatives » | voix seule ; cartes d'unité sans voix | coupe |
| B4 | 3:01–4:37 | Captures NotebookLM et Google Docs, carte G, CAM A | Numéros d'étape ; coches sur deux citations, triangle « vigilance » sur la troisième | « Vigilance : rapport ancien » | voix seule | coupe |
| B5 | 4:37–5:25 | CAM A, carte réponse, CAM A | Barre discrète pendant le silence | « Le chiffre est-il faux ? » puis la phrase de la carte | silence de 2 s (ambiance seule) | coupe sèche à la fin du silence |
| B6 | 5:25–5:54 | Carte de rappel, puis CAM A | Points au rythme de la voix | Quatre points ; titre de l'exercice en bas | voix seule | coupe vers la carte de clôture |

**Notes de montage** : changement visuel toutes les 4 à 8 s. Le plan 7 (35 s face caméra) est coupé par l'insert du résumé audio écouté au téléphone. Couper les hésitations ; garder une respiration après « Ici, on vérifie avant de citer. » et après « Voilà pourquoi on lit autour. ». Zooms ≤ 6 % sur les citations et le passage source. Quand le panneau de discussion occupe le bas de l'écran, sous-titres en haut. Ne montrer aucun extrait sonore du résumé audio sans indiquer à l'écran « généré par IA ». Plans de couverture : pile de rapports fictifs, mains sur le clavier, téléphone avec écouteurs.

#### Versions EN / HA / DJE

- **À re-filmer dans la langue** (environ 22 s, l'owner face caméra) : B1 — « À la fin de cette leçon, vous saurez résumer de longs documents en une note sourcée d'une page. » ; B6 — « À vous, avec trois documents publics de votre secteur. Rédigez une note de synthèse d'une page avec NotebookLM. »
- **Doublé en voix clonée** : fin de B1 (Mariama ; rappel de la leçon 4) sur l'illustration E prolongée ; B2 sur la capture des citations, puis CAM B ; B3, la citation sur une carte « Zone ? Année ? Projet ? », la veille et le résumé audio sur l'insert du téléphone ; B4, « Abdoul-Aziz part à la réunion… » sur la capture de la note finale ; B5, la question sur une carte qui cite la phrase, la conclusion sur la carte réponse ; B6, « Abdoul-Aziz a eu sa page… » sur la carte de rappel.
- **Notes d'adaptation** : « carnet » = « notebook » en EN ; en HA et en DJE, garder « notebook », le mot affiché par l'outil. Résumé audio : vérifier si l'outil le propose dans la langue de la version (haoussa, zarma) [à vérifier au moment du tournage] ; sinon, le dire clairement dans la version concernée. « Note de synthèse » = « briefing note » en EN. Garder « sur la route de Tillabéri ».

### Leçon 6 — Projet final : votre dossier de projet complet (`on6`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez assembler, vérifier et déposer votre dossier final. »
- **Cas réel (B1 → B6)** : L'apprenant lui-même : cinq leçons, un projet fictif, un dossier à assembler. Son modèle est le dossier exemple du projet fictif Racines, construit par l'équipe de l'ONG Rônier (fictive) avec la méthode du cours. L'enjeu : valider le projet final certifiant avec un dossier court, cohérent, vérifié et traçable, qui pourra aussi servir de pièce à montrer à un recruteur ou à un partenaire. En B6, le dossier Racines est prêt ; l'apprenant reçoit la consigne de dépôt.
- **Unités de notion (B3)** : 1. Cinq pièces, un seul projet fictif — note conceptuelle (deux pages), section de rapport narratif avec son tableau de contrôle, questionnaire XLSForm avec sa grille de codes, note de synthèse d'une page, note d'usage responsable ; dix pages au maximum, page de garde comprise ; « projet fictif » sur chaque pièce. · 2. La note d'usage responsable — outils et réglages, ce que l'IA a produit, ce qui a été vérifié et corrigé, données exclues et pourquoi (feu tricolore), rédigée à partir d'un journal d'usage tenu au fil du travail. · 3. Cinq critères d'évaluation — cohérence (du problème à l'indicateur, puis à la question), exactitude (chaque chiffre sourcé ou marqué fictif), protection (aucune personne reconnaissable, consentement prévu), traçabilité (consignes et corrections visibles), clarté (un lecteur pressé comprend tout).
- **Démo (B4)** : lecteur PDF du navigateur et Google Sheets, avec « dossier_exemple_Racines.pdf » (fictif, neuf pages environ) et « racines_mi_parcours.xlsx » (XLSForm joint à part). 1. Page de garde : titre du projet, mention « projet fictif », nom de l'auteur. 2. Note conceptuelle : l'indicateur « Part des ménages disposant de réserves alimentaires pendant la soudure », ventilé par sexe, source : enquête de base. 3. XLSForm : la question qui mesure cet indicateur, juste après le consentement ; le fichier est aussi joint à part. 4. Section de rapport (mi-parcours) : la valeur fictive de l'indicateur, une seule fois, avec sa ligne dans le tableau de contrôle. 5. Note de synthèse : le message clé qui met ce chiffre en contexte, avec sa citation. 6. Note d'usage responsable, rubrique « Données exclues » : la liste des ménages est restée hors de l'IA ; seuls des totaux par commune ont servi. Résultat attendu à l'écran : le même indicateur, avec le même libellé, cohérent dans les cinq pièces.
- **Consolidation (B5)** : contre-exemple. Un autre dossier fictif à la mise en page soignée, mais avec une valeur de référence sans source et un verbatim qui cite un prénom et un village. Question : ce dossier est-il validé ? Réponse : non, deux critères tombent (exactitude et protection) ; la forme ne rattrape pas le fond ; les deux se corrigent en une relecture, grille en main.
- **Consigne à copier** :

```text
Voici mon journal d'usage de l'IA pour ce dossier : [dates, outils, réglages, consignes principales, corrections faites, données exclues].
Mets-le en forme en une note d'usage responsable d'une page, avec cinq rubriques :
1. Outils utilisés et réglages (mémoire, historique, conversation incognito).
2. Ce que l'IA a produit, pièce par pièce.
3. Ce que j'ai vérifié et corrigé, avec deux exemples précis.
4. Données exclues et pourquoi, selon le feu tricolore (vert, orange, rouge).
5. Limites et risques qui restent.
N'ajoute aucune information absente de mon journal. Si une rubrique est vide, pose-moi une question au lieu de la remplir.
```

- **Exercice** : « Assemblez et déposez votre dossier final » — 1. Rassemblez vos cinq pièces en un seul PDF de dix pages au maximum, page de garde comprise (titre, mention « projet fictif », votre nom), avec en annexe votre cartographie de la leçon 1. 2. Rédigez la note d'usage responsable à partir de votre journal d'usage, avec la consigne. 3. Relisez avec la grille des cinq critères, puis déposez le PDF et le fichier XLSForm à l'endroit indiqué sur la page de la leçon [à vérifier au moment du tournage : mode de dépôt sur la plateforme].
- **Carte de rappel** : 1. Assembler, vérifier et déposer votre dossier final. 2. Cinq pièces, un seul projet fictif. 3. Chaque chiffre sourcé, aucune personne exposée. — suivie du récapitulatif du cours (schéma C, un réflexe par leçon) : L1 Classer avant de déposer · L2 Diagnostic d'abord · L3 Un chiffre, une source · L4 L'IA classe, le tableur compte · L5 Ouvrir chaque citation.
- **Quiz** :
  1. Quelles sont les pièces du dossier final ? — A) Une seule : la note conceptuelle. B) Trois : budget, chronogramme, logo. C) Cinq : note conceptuelle, section de rapport, questionnaire et grille de codes, note de synthèse, note d'usage responsable. D) Un long rapport unique. — **Réponse : C**
  2. Que contient la note d'usage responsable ? — A) Les outils et réglages, ce que l'IA a produit, ce que vous avez vérifié et corrigé, les données exclues et pourquoi. B) Le CV de l'auteur. C) Seulement la liste des consignes. D) Une promesse de résultats. — **Réponse : A**
  3. Un dossier soigné contient une valeur de référence sans source. Quel critère tombe ? — A) Clarté. B) Exactitude. C) Traçabilité. D) Aucun, si la mise en page est soignée. — **Réponse : B**
  4. Dans votre dossier, un verbatim cite le prénom d'une personne et le nom d'un vrai village. Que faites-vous avant le dépôt ? — A) Rien : le projet est fictif, donc personne n'est exposé. B) Vous ajoutez le nom de famille, pour être précis. C) Vous supprimez tout le questionnaire. D) Vous anonymisez : [NOM], « un village de la zone ». — **Réponse : D**
  5. Pourquoi suivre un même indicateur à travers les cinq pièces avant de déposer ? — A) Pour vérifier la cohérence, du cadre logique à la question, au rapport et à la note. B) Pour allonger le dossier. C) Pour se dispenser de la note d'usage responsable. D) Pour que l'IA corrige le dossier. — **Réponse : A**
- **Marques citées** : Claude, NotebookLM, KoboToolbox (visibles dans le dossier exemple), Google Sheets.

#### Script

Durée estimée : 5:42 · Mots dits : 680

**[B1 — Accroche · 0:00–0:27]**

**[E · SITUATION]** « Projet final certifiant — dossier du projet fictif Racines » — VO : Cinq leçons. Un projet fictif. Un dossier.

**[F · CAM A]** À la fin de cette leçon, vous saurez assembler, vérifier et déposer votre dossier final. C'est votre projet final certifiant. Dans la leçon cinq, chaque phrase de la note portait sa citation. Votre dossier suit la même règle, de la première à la dernière page.

[PAUSE 1 s]

**[B2 — Cadrage · 0:27–1:13]**

**[F · CAM A]** On imagine qu'un bon projet final est un dossier long et brillant. C'est l'inverse. Ici, la longueur ne rapporte aucun point.

**[C · SCHÉMA]** « Court · Cohérent · Vérifié · Traçable » — VO : Un bon dossier est court, cohérent et vérifié. Et surtout traçable : on voit ce que l'IA a fait, et ce que vous avez fait. Rien de caché, rien d'enjolivé.

**[F · CAM A]** L'évaluateur ne note pas la mise en page. Il cherche un professionnel qui maîtrise ses outils et protège les personnes. Un dossier long noie ses faiblesses. Un dossier court les assume, et les corrige. Huit pages bien tenues valent mieux que trente pages fragiles.

[PAUSE 1 s]

**[B3 — Notion · 1:13–3:01]**

**[B · CARTE]** « Unité 1 — Cinq pièces, un seul projet fictif »

**[A · ÉCRAN]** *(dossier exemple Racines : sommaire, les cinq pièces surlignées une à une)* — VO : Le dossier compte cinq pièces, toutes sur votre projet fictif. Une note conceptuelle de deux pages. Une section de rapport narratif, avec son tableau de contrôle. Un questionnaire XLSForm et sa grille de codes. Une note de synthèse d'une page, sourcée. Et une note d'usage responsable. Dix pages au maximum, page de garde comprise. Sur chaque pièce, écrivez : projet fictif.

**[B · CARTE]** « Unité 2 — La note d'usage responsable »

**[F · CAM A]** Cette dernière pièce compte autant que les autres. C'est elle qui montre votre jugement : savoir quand ne pas utiliser l'IA fait partie du métier. En une page, elle dit quels outils vous avez utilisés, avec quels réglages. Ce que l'IA a produit. Ce que vous avez vérifié et corrigé. Les données exclues, et pourquoi.

**[A · ÉCRAN]** *(note d'usage responsable du dossier exemple : cinq rubriques ; journal d'usage en annexe)* — VO : Le plus simple : tenez un journal d'usage dès aujourd'hui. La date, l'outil, la consigne, ce que vous avez corrigé. La note se rédige ensuite à partir de ce journal. Pour les données exclues, reprenez votre feu tricolore de la leçon un.

**[B · CARTE]** « Unité 3 — Cinq critères d'évaluation »

**[C · SCHÉMA]** « Cohérence · Exactitude · Protection · Traçabilité · Clarté » — VO : Votre dossier est évalué sur cinq critères. Cohérence : du problème à l'indicateur, puis à la question. Exactitude : chaque chiffre a une source, ou il est marqué fictif. Protection : aucune personne reconnaissable, consentement prévu. Traçabilité : vos consignes et vos corrections sont visibles. Clarté : un lecteur pressé comprend tout. Cette grille est sous la vidéo.

[PAUSE 1 s]

**[B4 — Application · 3:01–4:26]**

**[F · CAM A]** Voici un dossier exemple, sur le projet fictif Racines. Il a été construit avec la méthode de ce cours. Suivons un seul indicateur à travers les cinq pièces.

**[A · ÉCRAN]** *(page de garde du dossier exemple)* — VO : D'abord, la page de garde : le titre du projet, la mention projet fictif, le nom de l'auteur.

**[A · ÉCRAN]** *(note conceptuelle : cadre logique, indicateur surligné)* — VO : Dans la note conceptuelle : part des ménages qui ont des réserves pendant la soudure. Ventilée par sexe. Source : l'enquête de base.

**[A · ÉCRAN]** *(XLSForm du dossier : ligne de la question surlignée)* — VO : Dans le questionnaire, une question mesure exactement cet indicateur, juste après le consentement. Le fichier est aussi joint à part, pour qu'on puisse l'importer.

**[A · ÉCRAN]** *(section de rapport et tableau de contrôle)* — VO : Dans le rapport, le chiffre apparaît une fois, avec sa ligne source dans le tableau de contrôle.

**[A · ÉCRAN]** *(note de synthèse : message clé et citation)* — VO : Dans la note de synthèse, un message clé le met en contexte, citation à l'appui.

**[A · ÉCRAN]** *(note d'usage responsable : rubrique « Données exclues »)* — VO : Enfin, la note d'usage responsable l'explique : la liste des ménages est restée hors de l'IA. Seuls des totaux par commune ont servi.

**[F · CAM A]** Un indicateur, cinq pièces, aucune contradiction. C'est cela, la cohérence. Faites le même exercice sur votre dossier, avec votre indicateur principal. Si une pièce le contredit, c'est elle qu'on corrige.

[PAUSE 1 s]

**[B5 — Consolidation · 4:26–5:09]**

**[A · ÉCRAN]** *(autre dossier fictif : mise en page soignée ; valeur de référence sans source et verbatim avec prénom et village, encadrés)* — VO : Un contre-exemple. Ce dossier a une superbe mise en page. Mais sa valeur de référence n'a pas de source. Et un verbatim cite un prénom et un village. Ce dossier est-il validé ?

[SILENCE 2 s]

**[B · CARTE]** « Exactitude : non · Protection : non → dossier à reprendre » — VO : Non. Deux critères tombent : exactitude et protection. La forme ne rattrape jamais le fond. Bonne nouvelle : les deux se corrigent en une relecture, grille en main.

**[F · CAM A]** Relisez donc comme un évaluateur : chiffre par chiffre, nom par nom. Avant de déposer, faites cette relecture, même rapide. Votre dossier n'en sera que plus solide.

[PAUSE 1 s]

**[B6 — Clôture · 5:09–5:42]**

**[B · CARTE DE RAPPEL]** « 1. Assembler, vérifier et déposer votre dossier final. » « 2. Cinq pièces, un seul projet fictif. » « 3. Chaque chiffre sourcé, aucune personne exposée. » — VO : Assembler, vérifier et déposer votre dossier final. Cinq pièces, un seul projet fictif. Chaque chiffre sourcé, aucune personne exposée.

**[C · SCHÉMA]** « Récapitulatif — L1 Classer avant de déposer · L2 Diagnostic d'abord · L3 Un chiffre, une source · L4 L'IA classe, le tableur compte · L5 Ouvrir chaque citation » — VO : Et cinq réflexes, un par leçon : classer, partir du diagnostic, sourcer, laisser le tableur compter, ouvrir chaque citation.

**[F · CAM A]** Le dossier Racines est prêt. Au tour du vôtre. Déposez un seul PDF et le fichier de votre questionnaire, à l'endroit indiqué sous cette vidéo. Assemblez et déposez votre dossier final.

#### Liste des plans

| # | Type | Cadre / source | Contenu | Durée | Notes |
|---|---|---|---|---|---|
| 1 | E | illustration | B1 · Table de travail : cinq documents fictifs posés en éventail, un carnet, un stylo | 4 s | Surtitre « Projet final certifiant » |
| 2 | F | CAM A, plan poitrine | B1 · Promesse, projet final, rappel de la leçon 5 | 22 s | Promesse entière avant 0:12 |
| 3 | F | CAM A, relais CAM B | B2 · « Un dossier long et brillant ? » ; « L'évaluateur ne note pas la mise en page… » | 31 s | Deux blocs |
| 4 | C | schéma animé | B2 · « Court · Cohérent · Vérifié · Traçable » | 14 s | Quatre mots, un pictogramme chacun |
| 5 | B | cartes | B3 · Trois titres d'unités | 7,5 s | 3 × 2,5 s, sans voix |
| 6 | A | capture : PDF du dossier exemple | B3 · Sommaire ; les cinq pièces surlignées une à une | 29 s | Mention « projet fictif » encadrée |
| 7 | F | CAM A | B3 · La note d'usage responsable | 26 s | |
| 8 | A | capture : PDF du dossier exemple | B3 · Note d'usage responsable (cinq rubriques) ; journal d'usage en annexe | 20 s | Cadre sur une ligne du journal |
| 9 | C | schéma animé | B3 · Cinq critères, chacun avec son pictogramme et sa définition | 25 s | Même libellé que la grille affichée sous la vidéo |
| 10 | F | CAM A | B4 · « Voici un dossier exemple… » ; « Un indicateur, cinq pièces… » | 28 s | |
| 11 | A | capture : PDF du dossier et Google Sheets (XLSForm) | B4 · Page de garde ; l'indicateur suivi dans les cinq pièces | 56 s | Même surlignage à chaque pièce |
| 12 | A | capture : PDF du contre-exemple | B5 · Valeur de référence sans source et verbatim nominatif, encadrés | 17 s | Silence de 2 s sur ce plan |
| 13 | B | cartes | B5 · « Exactitude : non · Protection : non → dossier à reprendre » ; B6 · carte de rappel | 22 s | Croix + mot « non » sur chaque critère |
| 14 | C | schéma animé | B6 · Récapitulatif : un réflexe par leçon | 9 s | Cinq pastilles L1 à L5 |
| 15 | F | CAM A | B5 · « Relisez donc comme un évaluateur… » ; B6 · consigne de dépôt et titre de l'exercice | 27 s | Fin re-filmée en EN, HA, DJE |

#### Montage idéal

| Temps | Timecode cible | Image principale | Habillage (motion graphics) | Texte à l'écran | Son | Transition |
|---|---|---|---|---|---|---|
| B1 | 0:00–0:27 | Illustration E (4 s), puis CAM A | Surtitre | « Projet final certifiant — dossier du projet fictif Racines » | voix seule | coupe |
| B2 | 0:27–1:13 | CAM A → schéma → CAM A / CAM B | Quatre mots qui s'allument un à un | « Court · Cohérent · Vérifié · Traçable » | voix seule | coupe |
| B3 | 1:13–3:01 | Cartes d'unité, captures du dossier, CAM A, schéma des critères | Compteur 1/3 à 3/3 ; cinq pièces numérotées ; cinq critères avec pictogrammes | Titres d'unités ; « Dix pages au maximum » ; « Projet fictif » | voix seule ; cartes d'unité sans voix | coupe |
| B4 | 3:01–4:26 | CAM A, captures du dossier exemple | Le même surlignage suit l'indicateur de pièce en pièce ; compteur 1/5 à 5/5 | Libellé de l'indicateur, identique à chaque pièce | voix seule | coupe |
| B5 | 4:26–5:09 | Capture du contre-exemple, carte réponse, CAM A | Cadres sur les deux défauts ; barre discrète pendant le silence | « Ce dossier est-il validé ? » puis « Exactitude : non · Protection : non » | silence de 2 s (ambiance seule) | coupe sèche à la fin du silence |
| B6 | 5:09–5:42 | Carte de rappel, schéma récapitulatif, CAM A | Points au rythme de la voix ; cinq pastilles de leçons | Trois points ; cinq réflexes ; consigne de dépôt et titre de l'exercice en bas | voix seule | coupe vers la carte de clôture |

**Notes de montage** : changement visuel toutes les 4 à 8 s. Le plan 11 (56 s de captures) garde un fil unique : le même surlignage, la même couleur et la même forme pour l'indicateur dans les cinq pièces. Couper les hésitations ; garder une respiration après « C'est l'inverse. » et après « La forme ne rattrape jamais le fond. ». Zooms ≤ 6 % sur l'indicateur. Les pages du dossier sont lisibles à l'arrêt sur image : 2 s minimum par page. La consigne de dépôt affichée en B6 doit correspondre exactement au mode de dépôt retenu sur la plateforme. Plans de couverture : pages du dossier posées sur la table, mains qui feuillettent, carnet du journal d'usage.

#### Versions EN / HA / DJE

- **À re-filmer dans la langue** (environ 25 s, l'owner face caméra) : B1 — « À la fin de cette leçon, vous saurez assembler, vérifier et déposer votre dossier final. C'est votre projet final certifiant. » ; B6 — « Le dossier Racines est prêt. Au tour du vôtre. Déposez un seul PDF et le fichier de votre questionnaire, à l'endroit indiqué sous cette vidéo. Assemblez et déposez votre dossier final. »
- **Doublé en voix clonée** : fin de B1 (rappel de la leçon 5) sur l'illustration E prolongée ; B2 sur le schéma « Court · Cohérent · Vérifié · Traçable », puis CAM B ; B3, la note d'usage responsable sur la capture de la note du dossier exemple ; B4, les deux blocs face caméra sur la page de garde puis sur l'indicateur surligné ; B5, « Relisez donc… » sur la carte réponse prolongée.
- **Notes d'adaptation** : « note d'usage responsable » = « responsible AI use statement » en EN ; « journal d'usage » = « AI use log ». Les cinq critères gardent les mêmes mots dans la voix, sur le schéma et dans la grille affichée sous la vidéo, dans chaque langue. La consigne de dépôt suit le mode de dépôt retenu pour chaque version linguistique.

## 2.6 Captures et éléments à préparer

| Leçon | Élément | Comment l'obtenir | Qui |
|---|---|---|---|
| Toutes | Profil Chrome « Karatou Démo » (favoris masqués, extensions désactivées, notifications coupées, thème clair, interface en français, zoom 125 %) | Créer le profil une fois, le réutiliser pour toutes les captures | owner |
| Toutes | Compte Claude de démonstration (version gratuite) | Mémoire désactivée ; conversations incognito ; réglage d'utilisation des conversations pour l'entraînement vérifié ; création de fichiers activée pour L3 et L4 [à vérifier au moment du tournage : intitulés exacts des réglages] | owner |
| Toutes | Compte Google de démonstration (Drive, Docs, Sheets, NotebookLM) | Compte dédié, sans historique ni contact réel | owner |
| Toutes | Six illustrations E (une par leçon : bureau à Tillabéri, chemise d'appel à propositions, rapport semestriel, poste de suivi-évaluation, salle de réunion à Niamey, table du dossier final) | Illustrations sans personne identifiable ni logo, avec la mention « fictif » ; validées par l'owner | Claude |
| Toutes | Cartes B, schémas C, cartes de consigne G | Composés dans HyperFrames à partir des textes du script et des fiches | Claude |
| 1 | « liste_menages_fictive » : 60 ménages fictifs (nom, village, âge, taille du ménage, téléphone fictif non attribuable), dont 2 ménages inscrits deux fois et 1 paire d'homonymes (même nom, même village, même âge déclaré ; taille du ménage et téléphone différents : deux familles distinctes) | Fichier CSV généré par Claude, importé dans Google Sheets par l'owner | Claude + owner |
| 1 | Dossier Google Drive « Racines (fictif) » : diagnostic, note conceptuelle, rapport semestriel, compte rendu, évaluation (documents courts, en-tête « fictif ») | Documents rédigés par Claude, déposés par l'owner | Claude + owner |
| 1 | Trois fichiers du feu tricolore : appel à propositions fictif (vert), totaux par commune (orange), liste nominative fictive (rouge, floutée à l'image) | Générés par Claude | Claude |
| 1 | Captures : paramètres de Claude (mémoire, historique, entraînement) ; conversation incognito et consigne on1 ; réponse avec la formule ; Sheets (formule en F, mise en forme conditionnelle, colonne G « Vérification terrain ») | Enregistrement d'écran continu, puis captures fixes des étapes | owner |
| 1 | Capture B5 : la consigne « Fati… » tapée mais jamais envoyée, puis effacée et réécrite en version agrégée | Enregistrement d'écran ; ne pas appuyer sur Envoyer | owner |
| 2 | « Appel à propositions — Fonds Tamarinier (fictif) » (deux pages : objectifs, cinq critères, format de quatre pages) | Rédigé par Claude, mis en PDF | Claude |
| 2 | « Diagnostic Racines (fictif) » (une page anonymisée ; chiffres marqués fictifs ; données sur les femmes ; aucune mention de migration) | Rédigé par Claude, relu par l'owner | Claude + owner |
| 2 | Captures : consigne d'une ligne et réponse générique (B2) ; cadre logique (B3) ; démonstration B4 complète, relance « évaluateur » comprise ; document Google Docs final | Enregistrement d'écran ; adapter la voix off à la sortie réelle | owner |
| 2 | Insert : arbre à problèmes dessiné à la main au tableau blanc | Tourné en CAM B pendant la session 2 | owner |
| 3 | « indicateurs_racines_S1.csv » (six indicateurs fictifs : 1 140 / 1 200 ménages avec semences ; 87 % / 80 % en contre-saison ; 96 / 150 ha de demi-lunes ; 43 / 40 groupes d'épargne ; 1 032 / 1 000 femmes membres ; 540 / 600 petits ruminants) | Généré par Claude ; chaque valeur marquée « fictif » dans l'en-tête | Claude |
| 3 | « notes_terrain_S1 » (une page anonymisée : causes des écarts sur les demi-lunes et les petits ruminants, rien sur les 60 ménages sans semences ; un témoignage avec prénom modifié et mention « consentement recueilli ») et « plan_rapport_Tamarinier » | Rédigés par Claude | Claude |
| 3 | Captures : paragraphe « enthousiaste » obtenu sans règles (B2) ; dossier source (B3) ; démonstration B4 (incognito, dépôt, section, liste des chiffres, tableau de contrôle dans Sheets, paragraphe sur les demi-lunes, relecture du ton) | Enregistrement d'écran | owner |
| 3 | Insert : tableau de contrôle imprimé et surligneur | Tourné en CAM B | owner |
| 4 | « racines_mi_parcours.xlsx » : XLSForm de douze questions au maximum, consentement en premier, libellés en français et en haoussa | Généré avec la consigne A, importé et testé dans KoboToolbox ; libellés haoussa relus par un locuteur | Claude + owner |
| 4 | Projet KoboToolbox de démonstration « Racines — mi-parcours (fictif) » avec cinq à dix soumissions de test | Soumissions saisies par l'owner dans l'aperçu du formulaire, pour que l'onglet Données ne soit pas vide | owner |
| 4 | « reponses_ouvertes_fictives » : 300 réponses courtes et réalistes (R001 à R300), colonnes nom, téléphone et GPS fictifs à supprimer à l'écran ; une réponse cite un nom ; une réponse relève d'un signalement (détournement de semences) | Généré par Claude ; aucun nom réel, aucune localité précise | Claude |
| 4 | Captures : KoboToolbox (nouveau projet, import du XLSForm, aperçu FR et HA, Données > Téléchargements) [à vérifier au moment du tournage : intitulés] ; Sheets (export qui défile, colonnes supprimées, nom masqué, tableau croisé dynamique, échantillon, onglet Tableau de bord, graphique) ; Claude (incognito, dépôt du CSV, grille, fichier codé) | Enregistrement d'écran ; adapter la voix off si la grille ou la concordance réelles diffèrent | owner |
| 4 | Vérification : disponibilité, sur le compte et le serveur utilisés, de l'analyse assistée par IA des réponses audio annoncée par KoboToolbox en mai 2026 | Consulter l'interface et l'aide de KoboToolbox avant le tournage [à vérifier au moment du tournage] | owner |
| 4 | Insert : téléphone Android affichant le formulaire en aperçu | Tourné en CAM B | owner |
| 5 | Quatre PDF fictifs (environ deux cents pages au total) : évaluation à mi-parcours d'un projet voisin, plan régional, note de politique, compte rendu de la réunion précédente ; ils contiennent une phrase « les rendements ont doublé » datée de 2022 et située dans une autre région, un chiffre issu d'un rapport ancien, et deux chiffres de production contradictoires | Rédigés et mis en page par Claude, relus par l'owner ; mention « document fictif » sur chaque page | Claude + owner |
| 5 | Captures NotebookLM : citations numérotées et passage source (B2) ; création d'un carnet et panneau des sources (B3) ; carnet de veille (B3) ; démonstration B4 (carnet, quatre PDF, réglage de langue, deux questions, note, trois citations, note enregistrée, copie dans Google Docs) | Enregistrement d'écran [à vérifier au moment du tournage : intitulés du réglage de langue et de l'enregistrement en note] | owner |
| 5 | Résumé audio en français généré à partir des quatre PDF (pour l'insert et la carte de B3) ; vérifier aussi si l'outil le propose en haoussa et en zarma | Génération dans NotebookLM, écoute complète avant usage | owner |
| 5 | Insert : écoute d'un résumé audio au téléphone, avec écouteurs | Tourné en CAM B | owner |
| 6 | « dossier_exemple_Racines.pdf » (neuf pages environ) : page de garde ; note conceptuelle ; section de rapport de mi-parcours et tableau de contrôle ; XLSForm et grille de codes ; note de synthèse ; note d'usage responsable et journal d'usage ; le même indicateur, avec le même libellé, dans chaque pièce | Assemblé par Claude à partir des éléments des leçons 2 à 5, validé par l'owner | Claude + owner |
| 6 | Contre-exemple PDF (deux pages) : mise en page soignée, valeur de référence sans source, verbatim avec un prénom et un village (fictifs) | Généré par Claude | Claude |
| 6 | Grille d'évaluation d'une page (cinq critères, mêmes mots que la vidéo, seuil de réussite) à publier sous la vidéo | Rédigée par Claude ; seuil de réussite fixé par l'owner | Claude + owner |
| 6 | Mode de dépôt du dossier (PDF + fichier XLSForm) : la plateforme n'offre pas aujourd'hui de dépôt de fichier (l'onglet Pratique est une zone de notes locale) | À décider avant le tournage de B6 : formulaire, adresse e-mail dédiée, dossier partagé ou fonction à développer | owner + équipe produit |
