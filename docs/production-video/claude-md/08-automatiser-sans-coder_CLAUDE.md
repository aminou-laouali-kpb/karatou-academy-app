# CLAUDE.md — Karatou Academy · Production vidéo
# Cours 8 — Automatiser son travail sans coder

> **Pour l'owner — mode d'emploi**
> 1. Créez un dossier vide sur votre ordinateur, par exemple `karatou-automatiser-sans-coder`.
> 2. Copiez-y ce fichier et renommez-le exactement `CLAUDE.md`.
> 3. Ouvrez Claude Code dans ce dossier (dans un terminal : `cd karatou-automatiser-sans-coder` puis `claude`).
> 4. Écrivez : **« On démarre. »**
>
> Claude vous demande d'abord le **design system de Karatou Academy**, puis vos fichiers (logo, photo, voix).
> Ensuite il produit les vidéos **une par une** et s'arrête à chaque validation. Pour reprendre plus tard,
> écrivez « On continue. » : l'avancement est noté dans `PROGRESS.md`.

| | |
|---|---|
| Format | Motion graphics et captures d'écran, voix off clonée de l'owner |
| Owner | Judicael |
| Vidéos | 5 vidéos · 3 à 5 min (cible 4:00) chacune |
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
  `faceless-explainer` (le workflow de ce cours).
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
audio/<id>/<langue>/          voix off découpées par scène : 01.wav, 02.wav…
videos/<id>/                  projet HyperFrames de la version FR (BRIEF.md, STORYBOARD.md, SCRIPT.md, frame.md…)
videos/<id>-en/ · -ha/ · -dje/   une copie du projet par langue
livraison/automatiser-sans-coder/<id>/      fichiers livrés · livraison/automatiser-sans-coder/INTEGRATION.md
```

`<id>` est l'identifiant de la leçon (`au1`, `au2`…). Langues : `fr`, `en`, `ha`, `dje`.

## 4. La chaîne de production d'une vidéo

Workflow HyperFrames : **`faceless-explainer`**, avec les substitutions Karatou listées en M3.

**M1 · Préparer.** Lis la leçon (Partie 2). Vérifie par recherche web les outils et les gestes montrés. Liste les
captures réelles nécessaires (section « Captures à fournir par l'owner ») et demande-les tout de suite : dépôt dans
`lecons/L0N/captures/`, en MP4 pour un geste, en PNG pour un écran fixe. Tu peux avancer sans elles sur les autres
scènes.

**M2 · Script FR final.** Pars du « Script v1 » de la leçon. Ajuste-le aux règles (§ 5.10) : 340 à 460 mots, promesse
avant 0:12 et reprise mot pour mot sur la carte de rappel, phrases de 18 mots au plus, dernière phrase = titre de
l'exercice à l'impératif. Écris `videos/<id>/SCRIPT.md` (une section `## Line N — <temps> (Frame N)` par scène,
texte dit en bloc indenté) et `STORYBOARD.md`. Présente le script et le découpage. ⛔ VALIDATION.

**M3 · Projet.** `npx hyperframes init videos/<id> --non-interactive --example=blank --skill=faceless-explainer`,
puis écris `BRIEF.md` :

```yaml
---
workflow: faceless-explainer
flow: automation
storyboard: yes
message: "<promesse de la leçon>"
destination: website
aspect: 1920x1080
language: fr
audience: "<public du cours>"
length: 240s
---
```

Dans le corps de `BRIEF.md` : `## Intent` (objectif de la leçon), `## Assets` (logo, photo, polices, captures),
`## Notes` (« Charte Karatou : brand/frame.md fait foi. Pas de preset. VO_MODE verbatim. »). Copie dans le projet :
`brand/frame.md` → `frame.md`, `brand/caption-skin.html` → `.hyperframes/caption-skin.html`, polices, logo, photo,
cartes. Puis suis le skill, **sauf** :
- étape « Brief » : la source est `lecons/L0N/LECON.md`, copiée dans `capture/extracted/visible-text.txt` ;
- étape « Design System » : **pas de preset**, `frame.md` = celui de la charte Karatou ;
- étape « Storyboard and Script » : le script validé en M2, en **verbatim** ;
- étape « Audio » : **remplacée par M4**.

**M4 · Voix FR.** Génère la voix scène par scène selon `config/voix.json` (§ 6) → `audio/<id>/fr/NN.wav`. Contrôle
chaque fichier (durée, débit, prononciation). Écris `audio_meta.json` (§ 6.6), copie les fichiers dans
`assets/voice/`, puis lance la synchronisation des durées du skill (au 18/10/2026 :
`node <dossier du skill faceless-explainer>/scripts/audio.mjs sync-durations --audio-meta ./audio_meta.json --storyboard ./STORYBOARD.md`).

**M5 · Construction.** Suis les étapes « Frame Visual Design » et « Build Frames » du skill (un sous-agent par scène
est permis), avec la charte § 5 comme contrainte absolue. La carte d'ouverture est la première scène, la carte de
mentions légales (si des marques sont citées) puis la carte de clôture sont les dernières. Tous les textes visibles
vont dans `copy/fr.json` et sont injectés par variables de composition (voir `hyperframes-core`, variables) : les
autres langues ne changeront que ce fichier et l'audio. Sous-titres : § 5.7.

**M6 · Contrôle.** `npx hyperframes lint`, puis `npx hyperframes check` (zéro erreur), puis
`npx hyperframes snapshot --at <milieu de chaque scène>`. Regarde chaque image. Déroule la recette (§ 8).

**M7 · Preview.** `npx hyperframes preview --background`, vérifie que l'adresse répond, donne-la à l'owner.
⛔ VALIDATION. Corrige et recommence M6–M7 jusqu'à l'accord.

**M8 · Rendu FR.** `npx hyperframes render --quality delivery --output renders/<nom>.mp4`, contrôle `ffprobe`,
post-encodage et fichiers annexes (§ 9.1–9.2).

**M9 · Langues.** Traduis le script et `copy/fr.json` vers EN, HA, DJE (§ 7). ⛔ VALIDATION des textes HA et DJE par
l'owner (ou un locuteur natif qu'il désigne) **avant** toute génération de voix. Pour chaque langue : copie
`videos/<id>` vers `videos/<id>-<langue>`, remplace `copy/` et la voix, resynchronise les durées, reconstruis les
sous-titres, assemble, `check`, preview (⛔ VALIDATION), rendu.

**M10 · Livraison.** Range les fichiers (§ 9), mets à jour `INTEGRATION.md`. L'owner met en ligne et te donne les
URL ; tu les vérifies et tu les consignes. Mets `PROGRESS.md` à jour, puis propose la leçon suivante.

## 5. Charte vidéo Karatou Academy — normative

### 5.1 Format et contrainte fondatrice

- Master **1920 × 1080, 30 images/s, 16:9**. Une vidéo par leçon. Durée : 3 à 5 min (cible 4:00).
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
- Débit : 115 à 120 mots par minute, soit 340 à 460 mots par vidéo. Hors fourchette, on coupe du texte (avec l'accord de l'owner), on n'accélère pas la voix.

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

### 9.2 Nommage et contenu de `livraison/automatiser-sans-coder/<id>/`

`automatiser-sans-coder_<id>_<langue>_v<n>.mp4` · `…-360.mp4` · `….srt` · `….vtt` · `…_cover.jpg` (1920 × 1080, qualité 85,
première image stable de B1) · `…_transcript.md` (un titre par temps, texte dit + actions à l'écran entre
crochets) · `RECETTE.md`.

### 9.3 Mise en ligne

Chaîne YouTube **Karatou Academy**, vidéos **non répertoriées**, une vidéo par langue, sous-titres `.srt` ajoutés
comme piste. Titre : « Karatou Academy — Automatiser son travail sans coder — Leçon N : <titre> (<LANGUE>) ». Le site lit des **URL
d'intégration** : `https://www.youtube.com/embed/<ID>` (jamais `watch?v=` ni `youtu.be/`). Teste chaque URL dans un
navigateur avant de la consigner.

### 9.4 Intégration au site — `livraison/automatiser-sans-coder/INTEGRATION.md`

Le site lit, pour chaque leçon, un champ `video: { fr, en, ha }` dans les fichiers TypeScript du dépôt
`karatou-academy-app` (registre `authoredLessons`). Chaque leçon y a aussi un texte (objectif, quatre sections,
exemple, exercice, quiz de cinq questions, réflexion, glossaire), rédigé par l'équipe avec le skill
`karatou-course-creator`, et des lignes Supabase (module, leçons) pour la progression et les certificats.

Ton rôle : tenir `INTEGRATION.md` à jour, leçon par leçon : module `automatiser-sans-coder`, id, titre, promesse (objectif), cas
réel (exemple), exercice (titre et étapes), carte de rappel, quiz, marques citées, URL FR / EN / HA, et URL DJE
« en attente ». Ce fichier est remis à l'équipe technique ; tu ne modifies pas le dépôt du site.

### 9.5 Corrections après publication

Une URL publiée est figée. Pour corriger : nouvelle version `v2` → mise en ligne → nouvelle URL testée →
`INTEGRATION.md` mis à jour → l'équipe technique remplace l'URL → l'ancienne vidéo est rendue privée, jamais
supprimée. Consigne chaque version dans le journal de `PROGRESS.md`.

## 10. `PROGRESS.md` — modèle

```markdown
# PROGRESS — Cours 8 · Automatiser son travail sans coder
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
| Numéro | 8 |
| Titre | Automatiser son travail sans coder |
| Format | Motion graphics + captures d'écran, voix off (voix clonée de l'owner) |
| Owner / voix | Judicael — nom complet et titre exact demandés au premier lancement |
| Rubrique | Culture numérique |
| Public | Professionnels, assistantes et assistants administratifs, agents d'ONG et de projets qui refont chaque semaine les mêmes gestes : formulaires, tableaux, e-mails, rapports |
| Slug du module (provisoire) | `automatiser-sans-coder` |
| Préfixe des leçons | `au` |
| Nombre de vidéos | 5 (dont la dernière = projet final certifiant) |
| Durée par vidéo | 3–5 min (cible 4:00) |
| Langues | FR (référence) · EN · HA · DJE |
| Prérequis | Un compte Google (Gmail, Google Forms, Google Sheets) ; un ordinateur avec navigateur pour construire les flux (le téléphone suffit pour remplir le formulaire et recevoir les alertes) ; savoir saisir dans un tableur. Recommandé : la leçon 5 du module « Intelligence artificielle » (« Automatiser sans perdre le contrôle »). |
| Promesse du cours | Vous saurez construire, sans coder, un flux automatique qui collecte, résume et transmet vos informations, sous votre contrôle. |
| Positionnement | Passe à la pratique là où la leçon c5 du module `intelligence-artificielle` pose les principes (quoi automatiser, humain dans la boucle). Se distingue du cours 2 (agents IA) : ici, des **flux prévisibles**, les mêmes étapes à chaque exécution ; l'IA n'y fait que des tâches de texte bornées (classer, résumer, rédiger un brouillon) et ne décide de rien. Outil des démos : **Make**, parce qu'il a une version gratuite, que sa nouvelle application Gmail se connecte à un compte Gmail personnel sans console Google Cloud et que ses étapes d'IA (Make AI Toolkit) fonctionnent sans clé d'API [conditions à vérifier au moment de la production]. **n8n** est présenté comme l'alternative libre : gratuit si l'organisation l'héberge elle-même, version en ligne payante après un essai ; c'est l'outil du cours 2. Renvoie au cours 11 (Excel + IA) pour analyser les données collectées. |
| Fil rouge | **Mariama**, chargée de suivi dans une ONG de nutrition à Zinder (ONG fictive, jamais nommée). Chaque lundi, elle recopie à la main les remontées de douze animateurs de terrain envoyées par WhatsApp, pour **Ibrahim**, coordinateur du projet, qui rend compte au bailleur. Leçon après leçon, elle construit son flux : fiche (L1), formulaire → tableau → e-mail (L2), étape d'IA (L3), rapport du lundi surveillé (L4), dossier certifiant (L5). Personnage ponctuel : **Abdoul-Aziz**, assistant dans un cabinet comptable à Niamey (contre-exemples, transfert hors ONG). |
| Marques citées | Make ; n8n ; Google (Gmail, Google Forms, Google Sheets, Gemini) ; Telegram ; WhatsApp (Meta) |

## 2.2 Ce que l'apprenant saura faire

- Repérer dans son travail une tâche répétitive automatisable et la découper en flux : déclencheur, actions, données, point de contrôle humain.
- Construire dans Make un flux formulaire → tableau → e-mail, avec un filtre qui n'alerte que pour les cas signalés.
- Ajouter au flux une étape d'IA bornée qui classe et résume des textes, sans y faire entrer de données personnelles.
- Programmer un rapport hebdomadaire préparé en brouillon, validé par un humain, annoncé par un message Telegram.
- Prévoir les pannes : alerte d'erreur, historique des exécutions, plan B manuel.
- Tester et documenter un flux pour qu'un collègue puisse le comprendre et le relancer.

## 2.3 Plan du cours

| Leçon | Id | Titre | Promesse (objectif) | Cas réel (B1) | Démo (B4) | Durée cible |
|---|---|---|---|---|---|---|
| 1 | `au1` | Penser en flux : déclencheur, actions, contrôle | Découper une tâche en flux | Le lundi de Mariama : douze remontées WhatsApp recopiées à la main | Un assistant (Gemini) produit la fiche de flux ; Mariama la complète | 4:00 |
| 2 | `au2` | Premier flux : formulaire, tableau, e-mail | Relier formulaire, tableau et e-mail | Les remontées arrivent dans le désordre, sans accusé de réception | Make : Google Forms → Google Sheets → Gmail, avec un filtre d'alerte | 4:00 |
| 3 | `au3` | Ajouter l'IA : classer et résumer | Classer et résumer avec l'IA | Une rupture de stock cachée dans une longue observation | Make AI Toolkit : catégorie et résumé écrits dans le tableau, alerte élargie | 4:00 |
| 4 | `au4` | Le rapport du lundi, prêt et surveillé | Programmer un rapport hebdomadaire fiable | Le lundi où la connexion Gmail a expiré sans que personne le sache | Make : chaque lundi, brouillon Gmail + message Telegram + route d'erreur | 4:00 |
| 5 | `au5` | Projet final : votre flux, testé et documenté | Livrer un flux documenté et testé | Ibrahim veut confier le flux de Mariama à une autre équipe | Le dossier de Mariama : fiche, flux, journal de tests, note données | 4:00 |

## 2.4 Direction artistique du cours

- **Motif récurrent : « la fiche de flux ».** Une carte à quatre lignes — Déclencheur · Actions · Données · Contrôle — posée en bas à droite de l'écran comme une fiche épinglée. Elle se remplit au fil du cours : vide puis complétée (L1) ; la ligne Actions s'allume (L2) ; une étiquette « IA » s'ajoute aux Actions (L3) ; une horloge et une cloche s'ajoutent (L4) ; la fiche complète reçoit un tampon « Testé » (L5).
- **Schéma type 1 : « le rail ».** Des blocs reliés de gauche à droite par une ligne, de petits points (les données) circulent dessus. Code de **formes**, jamais de couleur seule : déclencheur = cercle ; action = carré arrondi ; étape d'IA = losange ; contrôle humain = cadre épais avec une main ; erreur = triangle. Le même rail sert dans toutes les leçons : seuls les blocs changent.
- **Schéma type 2 : « la balance ».** Deux plateaux : « À automatiser » (coche) / « À garder pour l'humain » (main). Utilisé en L1 (B5) et rappelé en L3.
- **Schéma type 3 : « la frise du lundi ».** Une ligne horaire 7 h → 9 h : brouillon prêt, relecture de Mariama, validation d'Ibrahim, envoi au bailleur ; une case « plan B » sous la ligne. Utilisé en L4 et L5.
- **Personas** : illustrations en aplats, formes simples, sans photoréalisme ni visage généré imitant une vraie personne. Mariama à son bureau de Zinder (classeurs, ventilateur, téléphone posé) ; Ibrahim, coordinateur ; les animateurs à moto entre les villages, vus de loin ; Abdoul-Aziz dans un petit cabinet de Niamey (piles de factures).
- **Captures** : Make (interface en anglais, annotations en français), Google Forms, Google Sheets, Gmail, Telegram sur téléphone dans un cadre de téléphone neutre. Données toutes fictives (communes réelles de la région de Zinder, chiffres inventés, aucune personne réelle), adresses e-mail floutées.
- **Iconographie** : pictogrammes au trait d'épaisseur constante : formulaire, tableau, enveloppe, horloge, cloche, bouclier (données), triangle (erreur), main (contrôle). Pas de logos hors des captures réelles.
- **Fixe d'une leçon à l'autre** : le rail, le code de formes, la place de la fiche de flux, le cadre de téléphone. **Ce qui change** : la ligne de la fiche mise en avant et le bloc ajouté au rail.
- **Son** : aucune musique sous la voix ; un court habillage sonore possible sur les cartes uniquement.

## 2.5 Les leçons

### Leçon 1 — Penser en flux : déclencheur, actions, contrôle (`au1`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez découper une tâche en flux. »
- **Cas réel (B1 → B6)** : Mariama, chargée de suivi dans une ONG de nutrition à Zinder. Chaque lundi matin, elle recopie dans un tableur les messages WhatsApp de douze animateurs (commune, séances, participants, problèmes), relance les retardataires et rédige un résumé pour Ibrahim, qui rend compte au bailleur. Enjeu : un rapport en retard et des erreurs de recopie. En B6, Mariama a sa fiche de flux complète (déclencheur : le formulaire de l'animateur ; actions : ligne, accusé de réception, alerte ; données : des nombres, pas de noms ; contrôle : sa relecture, puis la validation d'Ibrahim). Lundi prochain, elle la construit.
- **Unités de notion (B3)** : 1. Le test des trois questions — souvent, mêmes règles, erreur rattrapable : trois oui avant d'automatiser. · 2. Le déclencheur, top départ du flux — un événement (formulaire reçu) ou une heure (lundi, 7 h). · 3. Actions et données : le strict utile — ce que l'outil fait, et les seules informations nécessaires qui circulent. · 4. Le point de contrôle humain — l'étape où une personne vérifie avant l'envoi.
- **Démo (B4)** : Gemini (version gratuite, navigateur). 1. Ouvrir une nouvelle conversation. 2. Coller la consigne, complétée par la description de la tâche de Mariama (texte exact dans « Captures »). 3. Lire la fiche rendue en tableau : déclencheur, actions, données, contrôle, risques. 4. Vérifier la ligne Données : communes et nombres, aucun nom. 5. Envoyer la relance qui ajoute le point de contrôle. 6. Résultat à l'écran : la fiche de flux complète. En ouverture (B2), deux captures fixes du même flux dans Make et dans n8n.
- **Consolidation (B5)** : prédiction. « Abdoul-Aziz, assistant dans un cabinet comptable à Niamey, veut automatiser l'accord des délais de paiement. Bonne idée ? » Réponse : non. La relance avant l'échéance suit une règle : elle s'automatise. La décision du délai demande un jugement et engage la relation client : elle reste humaine.
- **Consigne à copier** :

```text
Vous êtes conseiller en organisation du travail. Voici une tâche que je fais chaque [semaine / jour] :
[décrivez la tâche en 5 à 8 lignes : d'où viennent les informations, ce que vous en faites,
ce que vous produisez, pour qui. N'écrivez aucun nom de personne, aucun numéro de téléphone.]

Découpez cette tâche en flux automatisable, sous forme de tableau :
1. Déclencheur : l'événement ou l'heure qui lance le flux.
2. Actions : ce que l'outil fait, dans l'ordre.
3. Données : les informations qui circulent, en gardant le strict nécessaire, sans noms de personnes.
4. Point de contrôle : où un humain vérifie avant l'envoi.
5. Risques : ce qui peut échouer, et que faire dans ce cas.
Dites aussi ce qui ne doit PAS être automatisé, et pourquoi.
Si un point n'est pas clair, posez-moi d'abord deux questions.
```

- **Exercice** : « Dessinez la fiche de flux de votre tâche » — 1. Choisissez une tâche de votre semaine qui obtient trois oui au test. 2. Décrivez-la sans aucun nom ni numéro, puis collez la consigne dans un assistant. 3. Corrigez la fiche : un déclencheur, des actions, le strict utile en données, un point de contrôle. Gardez-la : elle sert jusqu'au projet final.
- **Carte de rappel** *(titre de la carte = la promesse, mot pour mot, sans « À la fin de cette leçon »)* : 1. Découper une tâche en flux · 2. Trois oui, puis automatiser · 3. Toujours un contrôle humain
- **Quiz** :
  1. Laquelle de ces tâches obtient « trois oui » au test ? — A) Décider d'accorder un délai de paiement à un client B) Envoyer chaque semaine un accusé de réception aux animateurs C) Choisir les familles qui recevront une aide D) Répondre à une plainte délicate — **Réponse : B**
  2. Dans un flux, à quoi sert le déclencheur ? — A) À valider le résultat final B) À stocker les données C) À lancer le flux : un événement ou une heure D) À corriger les erreurs — **Réponse : C**
  3. Quelles sont les trois questions du test ? — A) Est-ce rapide, gratuit, moderne ? B) Qui paie, qui décide, qui contrôle ? C) Combien de clics, d'outils, de personnes ? D) Revient-elle souvent, suit-elle les mêmes règles, une erreur est-elle rattrapable ? — **Réponse : D**
  4. Un animateur veut envoyer le nom des enfants orientés vers le centre de santé. Que garde le flux ? — A) Le nombre d'enfants orientés, sans nom B) Les noms, pour être précis C) Les noms et l'âge D) Rien : on supprime l'information — **Réponse : A**
  5. Dans le flux de Mariama, où se place le point de contrôle humain ? — A) Quand l'animateur remplit le formulaire B) Avant l'envoi du rapport : Mariama relit, Ibrahim valide C) Après l'envoi au bailleur D) Nulle part : le flux est fiable — **Réponse : B**
- **Marques citées** : Make ; n8n ; Google (Gemini, Gmail)

#### Script v1 (à valider par l'owner)

Durée estimée : 3:35 · Mots de voix off : 396

**Scène 1 — B1 Accroche · 0:00–0:05 · E**
- Visuel : illustration en aplats. Mariama à son bureau de Zinder, lundi matin ; son téléphone vibre, des bulles de messages anonymes s'empilent ; à côté, un tableur ouvert. Entrée en fondu.
- Écran : « Zinder · lundi, 8 h »
- VO : « Zinder, lundi matin. Mariama recopie les messages de douze animateurs. »

**Scène 2 — B1 Accroche · 0:05–0:16 · B**
- Visuel : carte promesse ; la fiche de flux vide glisse en bas à droite et y reste épinglée.
- Écran : « Découper une tâche en flux »
- VO : « À la fin de cette leçon, vous saurez découper une tâche en flux. Comme Mariama, partez d'une corvée réelle. »

**Scène 3 — B2 Cadrage · 0:16–0:25 · A**
- Visuel : capture réelle de Make : le flux de la leçon 2, trois blocs ronds reliés. Cadre autour des trois blocs, puis coche.
- Écran : « Automatiser ≠ programmer »
- VO : « Automatiser, ce n'est pas programmer. Voici un vrai flux : trois blocs reliés, sans une ligne de code. »

**Scène 4 — B2 Cadrage · 0:25–0:38 · C**
- Visuel : le rail. Cercle « Formulaire reçu » → carré « Ligne ajoutée » → carré « E-mail envoyé » ; des points circulent de gauche à droite.
- Écran : « Un flux : quand ceci arrive, l'outil fait cela »
- VO : « Un flux, c'est une recette. Quand ceci arrive, l'outil fait cela, toujours dans le même ordre. En anglais, on dit « workflow ». »

**Scène 5 — B2 Cadrage · 0:38–0:46 · A**
- Visuel : capture réelle de n8n (le même flux en trois nœuds rectangulaires) à côté de la capture Make. Cadre sur Make, puis sur n8n.
- Écran : « Make · n8n : la même logique »
- VO : « Make et n8n fonctionnent ainsi. La forme des blocs change, la logique reste la même. »

**Scène 6 — B3 Notion · 0:46–1:07 · B**
- Visuel : carte ; les trois questions apparaissent une à une, chacune suivie d'une case cochée.
- Écran : « 1. Souvent ? 2. Mêmes règles ? 3. Erreur rattrapable ? »
- VO : « D'abord, choisir la bonne tâche. Posez trois questions. Revient-elle souvent ? Suit-elle toujours les mêmes règles ? Une erreur serait-elle rattrapable ? Trois oui : la tâche peut devenir un flux. Pour Mariama, compiler les remontées coche les trois cases. »

**Scène 7 — B3 Notion · 1:07–1:24 · C**
- Visuel : le rail ; le cercle du déclencheur s'allume. Deux variantes apparaissent dessous : un formulaire (événement), puis une horloge « lun. 7:00 » (heure).
- Écran : « Déclencheur : un événement ou une heure »
- VO : « Ensuite, le déclencheur : c'est le top départ du flux. Un événement, comme un formulaire reçu. Ou une heure fixe, comme chaque lundi à sept heures. Sans déclencheur, rien ne bouge. »

**Scène 8 — B3 Notion · 1:24–1:43 · C**
- Visuel : le rail : deux carrés « Ajouter une ligne », « Envoyer un e-mail ». Des points étiquetés circulent : « Commune », « Séances », « Observation ». Un point « Nom d'enfant » est arrêté par un bouclier marqué d'une croix.
- Écran : « Actions : ce que l'outil fait · Données : le strict utile »
- VO : « Puis les actions : ajouter une ligne, envoyer un e-mail, prévenir quelqu'un. Les données, ce sont les informations qui voyagent d'un bloc à l'autre. Faites circuler le strict utile : des nombres, jamais le nom d'un bénéficiaire. »

**Scène 9 — B3 Notion · 1:43–1:59 · A**
- Visuel : capture réelle de Gmail : un brouillon « Rapport hebdomadaire » (celui de la leçon 4), mention « Brouillon » encadrée ; pictogramme de main en surimpression.
- Écran : « Contrôle : un humain vérifie avant l'envoi »
- VO : « Enfin, le point de contrôle : l'étape où un humain vérifie avant l'envoi. Le flux prépare, vous décidez. Chez Mariama, le rapport arrivera en brouillon, et elle le relira. »

**Scène 10 — B4 Application · 1:59–2:11 · A**
- Visuel : capture réelle de Gemini : la consigne collée, avec la description de la tâche de Mariama. Cadre sur « aucun nom de personne ».
- Écran : « La consigne : votre tâche, sans données personnelles »
- VO : « Démonstration. Mariama ouvre un assistant, ici Gemini. Elle colle la consigne et décrit sa tâche du lundi, sans aucun nom de personne. »

**Scène 11 — B4 Application · 2:11–2:27 · A**
- Visuel : la réponse en tableau. Cadre sur la ligne Déclencheur, puis sur la ligne Actions (une annotation à la fois).
- Écran : « Déclencheur : le formulaire de l'animateur »
- VO : « L'assistant rend une fiche de flux. Déclencheur : chaque animateur remplit un formulaire. Actions : une ligne dans le tableau, un accusé de réception, une alerte en cas de problème. »

**Scène 12 — B4 Application · 2:27–2:37 · A**
- Visuel : même réponse ; cadre sur la ligne Données, puis coche.
- Écran : « Données : des nombres, pas des noms »
- VO : « Regardez la ligne Données : des communes et des nombres, pas de noms. C'est voulu : la consigne l'exige. »

**Scène 13 — B4 Application · 2:37–2:50 · A**
- Visuel : Mariama envoie la relance ; la fiche mise à jour affiche la ligne Contrôle, encadrée. La fiche de flux épinglée se remplit.
- Écran : « Contrôle : Mariama relit, Ibrahim valide »
- VO : « Mariama complète ce que l'assistant ignore. Elle relit le rapport, puis Ibrahim le valide avant l'envoi au bailleur. Sa fiche de flux est prête. »

**Scène 14 — B5 Consolidation · 2:50–3:05 · B**
- Visuel : carte question, pictogramme de facture.
- Écran : « Accorder un délai de paiement : on automatise ? »
- VO : « À vous. Abdoul-Aziz est assistant dans un cabinet comptable à Niamey. Il veut automatiser l'accord des délais de paiement. Bonne idée ? » [silence 3 s]

**Scène 15 — B5 Consolidation · 3:05–3:20 · B**
- Visuel : carte en deux colonnes : « Relance » avec une coche, « Décision » avec la main.
- Écran : « Relance : oui · Décision : non »
- VO : « Non. La relance avant l'échéance, oui : elle suit une règle. La décision du délai, non : elle demande un jugement et engage la relation avec le client. »

**Scène 16 — B6 Clôture · 3:20–3:35 · B (carte de rappel)**
- Visuel : carte de rappel, points révélés au rythme de la voix ; la fiche de flux complète en fond.
- Écran : « Vous saurez découper une tâche en flux » « 1. Découper une tâche en flux » « 2. Trois oui, puis automatiser » « 3. Toujours un contrôle humain »
- VO : « Mariama a son plan : lundi prochain, elle le construit. Retenez : trois oui, un déclencheur, des actions, un contrôle humain. Dessinez la fiche de flux de votre tâche. »

#### Captures à fournir par l'owner

1. **Make — le flux de la leçon 2 (scène 3)** · ordinateur, navigateur. À faire une fois le flux de la leçon 2 construit. zoom du navigateur agrandi, éditeur en plein écran, panneaux latéraux repliés. Capture fixe (Claude anime le zoom). Masquer : nom de l'organisation Make, avatar, adresses e-mail.
2. **n8n — le même flux (scène 5)** · ordinateur. Dans un compte d'essai n8n ou une instance existante : nouveau flux, placer trois nœuds sans les configurer — « On form submission », « Google Sheets » (ajouter une ligne), « Gmail » (envoyer un message) —, les relier, capture fixe. Masquer : nom de l'espace de travail, e-mail. [Noms exacts des nœuds à vérifier au moment de la production]
3. **Gmail — un brouillon (scène 9)** · ordinateur. Capture fixe du brouillon « Rapport hebdomadaire » créé par le flux de la leçon 4, mention « Brouillon » visible. À faire après la leçon 4. Masquer : adresses e-mail.
4. **Gemini — la fiche de flux (scènes 10 à 13)** · ordinateur, navigateur, compte de démonstration, interface en français. Nouvelle conversation. Coller la consigne ci-dessus en remplaçant les crochets par : « semaine » et le texte suivant : *« Chaque lundi, je reçois sur WhatsApp les remontées hebdomadaires de douze animateurs de terrain d'un projet de nutrition, dans douze communes de la région de Zinder. Chacun envoie : sa commune, le nombre de séances de sensibilisation, le nombre de participants, le nombre d'enfants orientés vers le centre de santé, un problème éventuel et une observation libre. Je recopie tout dans un tableur, je relance ceux qui n'ont pas envoyé, puis j'écris un résumé pour mon coordinateur, qui rend compte au bailleur. »* Enregistrer l'écran de l'envoi à la fin de la réponse (environ 40 s utiles). Puis taper la relance : *« Ajoutez un point de contrôle : je relis le rapport, puis mon coordinateur le valide avant l'envoi au bailleur. »* Enregistrer la réponse mise à jour (environ 20 s). Masquer : nom du compte, historique des conversations. Si la réponse n'est pas en tableau, garder la réponse réelle : Claude adapte les annotations.

#### Notes de script

- Prononciation : n8n = « ène-huit-ène » ; Make = « mèïk » ; Gemini = « jé-mi-ni » ; Gmail = « dji-mèïl ».
- « workflow » est dit une seule fois (scène 4), puis toujours « flux ». Ne pas dire « trigger » : « déclencheur », redit en « top départ ».
- Le test des trois questions prolonge la leçon 5 du module « Intelligence artificielle » ; ne jamais afficher l'identifiant `c5`.
- Le brouillon Gmail de la scène 9 annonce la leçon 4 : si la capture n'est pas encore disponible au montage, utiliser provisoirement une carte B « Brouillon → relecture → envoi ».
- Pas de chiffre de temps gagné : « elle y passe sa matinée » décrit la situation, pas un gain.
- Abdoul-Aziz : ton neutre, sans moquerie ; la relance automatique reste polie.
- Notes d'adaptation : EN — « flux » → « workflow » (usage courant en anglais), « top départ » → « starting signal ». HA / DJE — trouver avec le traducteur une image locale pour « flux » (l'eau qui suit un canal d'irrigation, par exemple) ; « bailleur » est un terme d'ONG : le garder ou l'expliquer (« celui qui finance le projet ») ; garder les noms Make, n8n, Gemini, Gmail tels quels.

### Leçon 2 — Premier flux : formulaire, tableau, e-mail (`au2`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez relier un formulaire, un tableau et un e-mail dans Make. »
- **Cas réel (B1 → B6)** : Mariama, à Zinder, a sa fiche de flux (leçon 1) mais ses animateurs envoient encore leurs remontées en vrac sur WhatsApp. Elle crée un formulaire, un tableau et un flux qui l'avertit par e-mail dès qu'un animateur signale un problème. En B6, le premier flux tourne : les remontées arrivent déjà rangées, et seuls les problèmes lui envoient un e-mail.
- **Unités de notion (B3)** : 1. Le formulaire remplit le tableau — une réponse égale une ligne, sans recopier. · 2. Make surveille le tableau — chaque nouvelle ligne déclenche le flux. · 3. Un filtre trie ce qui passe — seules les lignes avec un problème envoient l'alerte.
- **Démo (B4)** : Google Sheets + Make + Gmail, sur ordinateur. 1. Dans Make, créer un scénario (le flux). 2. Premier bloc : Google Sheets, « Watch New Rows » (surveiller les nouvelles lignes), choisir le tableau des réponses. 3. Deuxième bloc : Gmail, envoyer un e-mail ; connexion avec le compte Google ; remplir objet et message avec les colonnes du tableau. 4. Cliquer sur le lien entre les deux blocs : filtre « Problème » existe. 5. Remplir le formulaire avec un problème, lancer un essai : l'e-mail arrive. 6. Remplir sans problème : rien n'est envoyé. 7. Activer le flux. [Noms exacts des blocs, de l'application Gmail récente de Make et connexion d'un compte Gmail personnel à vérifier au moment de la production]
- **Consolidation (B5)** : prédiction. « Un animateur envoie un formulaire sans problème. La ligne arrive-t-elle dans le tableau ? » Réponse : oui, c'est le formulaire qui remplit le tableau ; Make ne gère que l'alerte. Conclusion : testez toujours avant d'activer.
- **Consigne à copier** :

```text
Vous êtes spécialiste du suivi de projets de terrain. Je prépare un formulaire hebdomadaire
pour [nombre] animateurs d'un projet de [domaine : nutrition, éducation, agriculture…].
Proposez les questions du formulaire, sous forme de tableau : intitulé de la question,
type de réponse (liste déroulante, nombre, texte court), obligatoire ou non.
Règles : mettez une liste déroulante pour la commune ; des nombres pour les séances et
les participants ; une seule question libre, « Problème à signaler » (facultative) ;
aucune question qui demande le nom d'une personne ou un numéro de téléphone.
Ajoutez la liste de mes noms de colonnes à copier dans le tableau.
```

- **Exercice** : « Construisez votre premier flux » — 1. Créez un formulaire à cinq questions au plus, sans nom de personne, relié à un tableau. 2. Dans Make, reliez le tableau à Gmail avec un filtre sur la colonne « Problème ». 3. Testez avec et sans problème, puis activez.
- **Carte de rappel** *(titre de la carte = la promesse, mot pour mot, sans « À la fin de cette leçon »)* : 1. Relier un formulaire, un tableau et un e-mail · 2. Un filtre évite les alertes inutiles · 3. Testez avant d'activer
- **Quiz** :
  1. Qu'est-ce qui remplit le tableau à chaque réponse ? — A) Le formulaire, directement B) Gmail C) Le filtre D) Vous, chaque lundi — **Réponse : A**
  2. Dans ce flux, qu'est-ce qui lance Make ? — A) Un appel téléphonique B) Une nouvelle ligne dans le tableau C) L'ouverture de Gmail D) Un clic sur « Envoyer » — **Réponse : B**
  3. À quoi sert le filtre « Problème existe » ? — A) À supprimer les lignes B) À corriger les fautes C) À cacher le tableau D) À envoyer l'alerte seulement quand un problème est signalé — **Réponse : D**
  4. Que faire avant d'activer un flux ? — A) L'essayer avec un cas avec problème et un cas sans problème B) Rien : il marchera C) Prévenir toute l'organisation D) Acheter la version payante — **Réponse : A**
  5. Quels comptes faut-il pour ce flux ? — A) Aucun compte B) Un compte Google et un compte Make C) Un serveur et un informaticien D) Un compte bancaire — **Réponse : B**
- **Marques citées** : Make ; Google (Google Forms, Google Sheets, Gmail, Gemini) ; WhatsApp (Meta)

#### Script v1 (à valider par l'owner)

Durée estimée : 3:27 · Mots de voix off : 382

**Scène 1 — B1 Accroche · 0:00–0:12 · E**
- Visuel : illustration en aplats. Mariama à son bureau de Zinder, sa fiche de flux de la semaine dernière épinglée au mur ; son téléphone affiche des messages en vrac.
- Écran : « Zinder · lundi »
- VO : « Zinder, lundi. Mariama a dessiné sa fiche de flux : un déclencheur, des actions, un contrôle. Mais les remontées arrivent toujours en vrac. »

**Scène 2 — B1 Accroche · 0:12–0:25 · B**
- Visuel : carte promesse ; la fiche de flux se range en bas à droite.
- Écran : « Relier formulaire, tableau, e-mail »
- VO : « À la fin de cette leçon, vous saurez relier un formulaire, un tableau et un e-mail dans Make. Aujourd'hui, Mariama construit son premier flux. »

**Scène 3 — B2 Cadrage · 0:25–0:47 · B**
- Visuel : carte à deux lignes : « Il faut un serveur ? » barré d'une croix ; « Deux comptes » coché.
- Écran : « Deux comptes : Google et Make (version gratuite) »
- VO : « Faut-il un serveur ou un informaticien ? Non. Il vous faut deux comptes : Google, et Make en version gratuite. Ses limites peuvent changer : vérifiez-les sur son site. Le téléphone suffit pour remplir le formulaire ; l'ordinateur sert à construire le flux. »

**Scène 4 — B2 Cadrage · 0:47–1:05 · A**
- Visuel : capture réelle de l'éditeur Make, scénario vide, gros bouton plus encadré.
- Écran : « Make : un bloc = une étape »
- VO : « Voici Make. Un écran presque vide, et un bouton plus. Chaque étape est un bloc, que Make appelle « module ». Ne cherchez pas à tout comprendre : suivez Mariama, bloc après bloc. »

**Scène 5 — B3 Notion · 1:05–1:15 · C**
- Visuel : le rail : formulaire → tableau ; chaque réponse devient une ligne qui glisse dans le tableau.
- Écran : « Une réponse = une ligne »
- VO : « Un : le formulaire remplit le tableau. Une réponse, une ligne, sans recopier. Google Forms fait cela tout seul. »

**Scène 6 — B3 Notion · 1:15–1:35 · C**
- Visuel : le rail : le cercle déclencheur « Nouvelle ligne » s'allume, une horloge à côté.
- Écran : « Make surveille le tableau »
- VO : « Deux : Make surveille le tableau. Chaque nouvelle ligne lance le flux. Dans la version gratuite, il regarde à intervalles réguliers, pas à la seconde. C'est le déclencheur de la leçon dernière : ici, une nouvelle ligne. »

**Scène 7 — B3 Notion · 1:35–1:47 · C**
- Visuel : le rail avec un losange-filtre entre les blocs ; une ligne « Problème : vide » s'arrête, une ligne « Problème : rupture » passe.
- Écran : « Filtre : seulement si « Problème » est rempli »
- VO : « Trois : le filtre trie. Il laisse passer les lignes où la colonne Problème est remplie. Les autres s'arrêtent là. Pas d'alerte inutile. »

**Scène 8 — B4 Application · 1:47–1:58 · A**
- Visuel : capture réelle de Make : ajout du premier bloc Google Sheets, choix du tableau des réponses. Cadre sur le nom du tableau.
- Écran : « Bloc 1 : surveiller les nouvelles lignes »
- VO : « Démonstration. Mariama ajoute un premier bloc : Google Sheets, pour surveiller les nouvelles lignes. Elle choisit son tableau de réponses. »

**Scène 9 — B4 Application · 1:58–2:18 · A**
- Visuel : capture réelle : second bloc Gmail, connexion avec le compte Google, champs objet et message remplis avec des colonnes du tableau. Cadre sur les colonnes insérées.
- Écran : « Bloc 2 : envoyer un e-mail »
- VO : « Deuxième bloc : Gmail, envoyer un e-mail. Elle connecte son compte Google, puis écrit l'objet. Les noms de colonnes se glissent dans le message. Make demande votre autorisation, que vous pouvez retirer plus tard dans votre compte Google. »

**Scène 10 — B4 Application · 2:18–2:27 · A**
- Visuel : capture réelle : clic sur le lien entre les blocs, fenêtre du filtre, condition « Problème » existe. Coche.
- Écran : « Filtre : Problème existe »
- VO : « Elle clique sur le lien entre les deux blocs et crée le filtre : Problème existe. »

**Scène 11 — B4 Application · 2:27–2:36 · A**
- Visuel : capture réelle : formulaire rempli avec un problème, puis l'e-mail reçu dans Gmail. Un cadre sur l'objet de l'e-mail.
- Écran : « Essai 1 : avec un problème → e-mail reçu »
- VO : « Premier essai. Elle signale une rupture de farine à Mirriah. Elle lance Make : l'e-mail arrive. »

**Scène 12 — B4 Application · 2:36–2:49 · A**
- Visuel : capture réelle : deuxième formulaire sans problème ; historique Make : exécution arrêtée au filtre ; interrupteur « On » encadré.
- Écran : « Essai 2 : sans problème → aucun e-mail »
- VO : « Second essai, sans problème. Le flux s'arrête au filtre : aucun e-mail. Mariama l'active, et garde l'historique ouvert : chaque exécution y laisse une trace. »

**Scène 13 — B5 Consolidation · 2:49–3:01 · B**
- Visuel : carte question ; formulaire « Problème : vide » en pictogramme.
- Écran : « Sans problème : la ligne arrive-t-elle dans le tableau ? »
- VO : « À vous. Un animateur envoie un formulaire sans problème. La ligne arrive-t-elle dans le tableau ? » [silence 3 s]

**Scène 14 — B5 Consolidation · 3:01–3:17 · B**
- Visuel : carte réponse : « Oui » ; flèche formulaire → tableau en gras ; Make en pointillé.
- Écran : « Oui : le formulaire remplit le tableau »
- VO : « Oui. C'est le formulaire qui remplit le tableau. Make ne gère que l'alerte. Testez toujours avant d'activer. Si l'e-mail n'arrive pas, l'historique de Make montre où le flux s'est arrêté. »

**Scène 15 — B6 Clôture · 3:17–3:27 · B (carte de rappel)**
- Visuel : carte de rappel, points révélés au rythme de la voix ; le rail complet en fond.
- Écran : « Vous saurez relier un formulaire, un tableau et un e-mail dans Make » « 1. Relier formulaire, tableau, e-mail » « 2. Un filtre évite les alertes inutiles » « 3. Testez avant d'activer »
- VO : « Le premier flux de Mariama tourne. Les remontées arrivent rangées, et les problèmes lui écrivent. Construisez votre premier flux. »

#### Captures à fournir par l'owner

1. **Google Forms + Google Sheets (préparation, scènes 8 à 12)** · ordinateur. Créer le formulaire « Remontée hebdomadaire » : Commune (liste : Mirriah, Magaria, Matamèye, Tanout, Gouré), Séances (nombre), Participants (nombre), Problème à signaler (texte court, facultatif). Lier à un tableau (onglet Réponses). Remplir deux fausses réponses. Masquer : e-mail du compte.
2. **Make — construction du flux (scènes 4, 8, 9, 10)** · ordinateur, navigateur, zoom du navigateur agrandi. Enregistrer l'écran (environ 90 s utiles au total) : bouton plus → Google Sheets, surveiller les nouvelles lignes → choisir le tableau → ajouter Gmail, envoyer un e-mail → remplir. Objet à taper : *« Problème signalé : [commune] »* ; message : *« [commune] signale : [problème] »* en insérant les colonnes. Cliquer le lien entre blocs → condition « Problème » existe. Masquer : avatar, organisation, adresses. [Libellés exacts à vérifier au moment de la production]
3. **Les deux essais (scènes 11 et 12)** · remplir le formulaire une fois avec « Rupture de farine enrichie » comme problème, lancer l'essai, montrer l'e-mail reçu dans Gmail (10 s) ; puis une fois sans problème, montrer l'historique (10 s) et l'interrupteur d'activation. Masquer : adresses.

#### Notes de script

- Prononciation : Make « mèïk » ; Google Forms « goul fôrmz » ; module « mo-dul ».
- Dire « flux » pour le scénario Make ; « module » est dit une seule fois (scène 4), puis « bloc ».
- Honnêteté : deux comptes (Google, Make) ; version gratuite limitée, sans chiffre ; l'accusé de réception aux animateurs n'est pas montré (beaucoup n'ont pas d'e-mail) : l'alerte vise Mariama. Ne pas annoncer « sans carte bancaire ».
- La connexion de Gmail dans Make peut demander des étapes supplémentaires pour un compte Gmail personnel selon l'application choisie : si le tournage les rencontre, les montrer, ne pas les cacher [à vérifier au moment de la production].
- Notes d'adaptation : EN — « bloc » → « step » pour le grand public. HA / DJE — « tableau » = la feuille de calcul ; garder « Make », « Gmail », « Google Forms » tels quels ; « farine enrichie » est un produit de nutrition : vérifier le terme local.

### Leçon 3 — Ajouter l'IA : classer et résumer (`au3`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez faire classer et résumer vos textes par une étape d'IA. »
- **Cas réel (B1 → B6)** : Mariama, à Zinder. Le flux de la leçon 2 n'alerte que si la colonne « Problème » est remplie. Or une animatrice a écrit dans « Observation » : « plus de farine enrichie depuis deux semaines ». Rien n'a été signalé. Mariama ajoute une étape d'IA qui classe chaque observation et en fait un résumé. En B6, la rupture de stock déclenche l'alerte, avec son résumé ; Mariama relit chaque semaine un échantillon de lignes.
- **Unités de notion (B3)** : 1. Un texte entre, une catégorie sort — vous fixez la liste, l'IA choisit dedans. · 2. Le résumé, lisible d'un coup d'œil — l'observation devient une phrase dans l'e-mail. · 3. Aucune donnée personnelle dans l'étape d'IA — seule la colonne « Observation » y entre, sans nom ni numéro.
- **Démo (B4)** : Google Sheets + Make (Make AI Toolkit) + Gmail. 1. Ajouter au tableau les colonnes « Catégorie » et « Résumé ». 2. Dans le flux, insérer un bloc d'IA « classer un texte » : texte = colonne « Observation », catégories = Rupture de stock, Santé, Sécurité, Logistique, Rien à signaler. 3. Ajouter un bloc « résumer un texte ». 4. Ajouter Google Sheets, « mettre à jour une ligne » : écrire catégorie et résumé. 5. Changer le filtre : alerte pour toute catégorie sauf « Rien à signaler ». 6. Mettre le résumé dans l'e-mail. 7. Essayer avec trois observations inventées. Résultat : la ligne « farine » est classée « Rupture de stock », l'e-mail arrive avec le résumé. [Noms exacts des blocs d'IA, fournisseur utilisé par Make, limites de la version gratuite et consommation de crédits à vérifier au moment de la production]
- **Consolidation (B5)** : prédiction. « Un jour, l'IA classe « Rien à signaler » un vrai problème. Comment s'en protéger ? » Réponse : on ne peut pas l'exclure à coup sûr. Garder l'observation d'origine à côté et relire un échantillon de lignes chaque semaine : le contrôle humain reste.
- **Consigne à copier** :

```text
Vous m'aidez à tester une étape de classement avant de l'installer dans un flux automatique.
Voici ma liste de catégories : [Rupture de stock, Santé, Sécurité, Logistique, Rien à signaler].
Voici six observations inventées, sans nom de personne :
1. [observation]  2. [observation]  3. [observation]
4. [observation]  5. [observation]  6. [observation]
Pour chacune, donnez : la catégorie (une seule, choisie dans ma liste), un résumé d'une
phrase, et votre niveau de certitude (sûr / hésitant). Ne tirez aucune conclusion médicale.
Terminez par les observations où vous hésitez, et dites pourquoi.
```

- **Exercice** : « Classez six textes avec l'IA » — 1. Écrivez six observations inventées de votre travail, sans aucun nom. 2. Collez la consigne dans un assistant et comparez avec votre propre classement. 3. Notez ce qui diffère : ce sont vos points de contrôle humain.
- **Carte de rappel** *(titre de la carte = la promesse, mot pour mot, sans « À la fin de cette leçon »)* : 1. L'IA classe et résume, vous décidez · 2. Aucune donnée personnelle dans l'étape d'IA · 3. Relisez un échantillon chaque semaine
- **Quiz** :
  1. Dans un flux, que fait l'étape d'IA de cette leçon ? — A) Elle décide des actions de l'ONG B) Elle classe un texte dans vos catégories et le résume C) Elle remplace le formulaire D) Elle paie les animateurs — **Réponse : B**
  2. Qui fixe la liste des catégories ? — A) L'IA B) Make C) Vous D) Google — **Réponse : C**
  3. Que faut-il envoyer à l'étape d'IA ? — A) Tout le tableau avec les noms B) Les numéros de téléphone C) Les dossiers des enfants D) Seulement la colonne « Observation », sans nom ni numéro — **Réponse : D**
  4. Pourquoi garder l'observation d'origine à côté du résumé ? — A) Pour pouvoir vérifier si l'IA s'est trompée B) Pour faire plus long C) Parce que Make l'exige D) Pour supprimer le résumé — **Réponse : A**
  5. Que faire chaque semaine pour se protéger d'une erreur de classement ? — A) Rien B) Changer d'outil C) Relire un échantillon de lignes, observation d'origine à côté D) Supprimer le filtre — **Réponse : C**
- **Marques citées** : Make ; Google (Google Sheets, Gmail, Gemini) ; WhatsApp (Meta)

#### Script v1 (à valider par l'owner)

Durée estimée : 3:21 · Mots de voix off : 369

**Scène 1 — B1 Accroche · 0:00–0:15 · E**
- Visuel : illustration en aplats. Mariama devant son tableau ; une cellule « Observation » surlignée par un cadre ; la colonne « Problème » vide à côté.
- Écran : « Zinder · mercredi »
- VO : « La semaine dernière, le flux de Mariama a appris à alerter quand la colonne Problème est remplie. Mais une animatrice a écrit tout autre chose, dans la colonne Observation. »

**Scène 2 — B1 Accroche · 0:15–0:30 · B**
- Visuel : carte promesse ; le losange « IA » apparaît sur le rail en bas à droite.
- Écran : « Faire classer et résumer ses textes »
- VO : « À la fin de cette leçon, vous saurez faire classer et résumer vos textes par une étape d'IA. Voyons d'abord ce qu'elle fait, et ce qu'elle ne fait pas. »

**Scène 3 — B2 Cadrage · 0:30–0:50 · B**
- Visuel : carte à deux colonnes : « L'IA : classer · résumer · brouillon » (coche) / « Vous : décider » (main).
- Écran : « L'IA travaille le texte. Vous décidez. »
- VO : « L'IA ne décide pas. Dans un flux, elle fait un travail de texte précis : classer, résumer, écrire un brouillon. La décision reste à vous. Et l'IA peut se tromper : un humain garde la main. »

**Scène 4 — B2 Cadrage · 0:50–1:03 · C**
- Visuel : le rail : un losange « IA » entre « Nouvelle ligne » et « E-mail » ; un texte entre, une étiquette sort.
- Écran : « Étape d'IA : un texte entre, un texte sort »
- VO : « Voici le losange de notre schéma : l'étape d'IA. Elle reçoit un texte, elle rend un texte. Rien d'autre. Elle se place entre deux blocs ordinaires. »

**Scène 5 — B3 Notion · 1:03–1:18 · C**
- Visuel : un texte « plus de farine depuis deux semaines » entre dans le losange ; une liste fermée de cinq étiquettes ; l'étiquette « Rupture de stock » est choisie.
- Écran : « Vous fixez la liste. L'IA choisit dedans. »
- VO : « Un : un texte entre, une catégorie sort. Vous fixez la liste : rupture de stock, santé, sécurité, logistique, rien à signaler. L'IA choisit dans votre liste. »

**Scène 6 — B3 Notion · 1:18–1:29 · C**
- Visuel : une observation de six lignes se réduit à une phrase dans une enveloppe.
- Écran : « Un résumé lisible d'un coup d'œil »
- VO : « Deux : le résumé. Une observation de six lignes devient une phrase, que vous lisez d'un coup d'œil dans l'e-mail. »

**Scène 7 — B3 Notion · 1:29–1:43 · C**
- Visuel : le tableau ; seule la colonne « Observation » passe dans le losange ; la colonne « Nom » est arrêtée par un bouclier.
- Écran : « Étape d'IA : seulement « Observation », jamais de noms »
- VO : « Trois : aucune donnée personnelle dans l'étape d'IA. Le texte part chez un fournisseur d'IA. Seule la colonne Observation y entre : ni nom, ni numéro. »

**Scène 8 — B4 Application · 1:43–1:49 · A**
- Visuel : capture réelle du tableau : deux colonnes ajoutées, « Catégorie » et « Résumé » encadrées.
- Écran : « Deux colonnes : Catégorie et Résumé »
- VO : « Démonstration. Mariama ajoute deux colonnes à son tableau : Catégorie et Résumé. »

**Scène 9 — B4 Application · 1:49–2:07 · A**
- Visuel : capture réelle de Make : insertion d'un bloc Make AI Toolkit, classer un texte ; champ texte relié à « Observation » ; liste de catégories. Cadre sur le champ texte.
- Écran : « Bloc d'IA : classer un texte »
- VO : « Dans Make, elle insère un bloc d'IA : classer un texte. Elle y place la colonne Observation et sa liste de catégories. Make fournit l'étape d'IA ; la version gratuite l'autorise, avec des limites. »

**Scène 10 — B4 Application · 2:07–2:19 · A**
- Visuel : capture réelle : bloc « résumer un texte », puis Google Sheets « mettre à jour une ligne » avec les deux sorties dans les colonnes.
- Écran : « Puis : mettre à jour la ligne »
- VO : « Deuxième bloc d'IA : résumer. Puis Google Sheets, mettre à jour une ligne : catégorie et résumé s'écrivent dans le tableau. »

**Scène 11 — B4 Application · 2:19–2:29 · A**
- Visuel : capture réelle : fenêtre du filtre, condition « Catégorie » différente de « Rien à signaler » ; message de l'e-mail avec le résumé inséré.
- Écran : « Alerte : tout sauf « Rien à signaler » »
- VO : « Le filtre change : on alerte pour toute catégorie, sauf Rien à signaler. Et l'e-mail contient maintenant le résumé. »

**Scène 12 — B4 Application · 2:29–2:44 · A**
- Visuel : capture réelle : tableau avec trois lignes classées ; la ligne « farine » encadrée ; e-mail reçu.
- Écran : « Essai : la farine manquante → Rupture de stock »
- VO : « Essai avec trois observations inventées. La farine manquante est classée rupture de stock. L'alerte part, avec son résumé. Mariama lit aussi l'observation d'origine, à côté, pour vérifier. »

**Scène 13 — B5 Consolidation · 2:44–2:56 · B**
- Visuel : carte question, point d'interrogation sur une cellule « Rien à signaler ».
- Écran : « Et si l'IA se trompe ? »
- VO : « À vous. Un jour, l'IA classe « rien à signaler » un vrai problème. Comment s'en protéger ? » [silence 3 s]

**Scène 14 — B5 Consolidation · 2:56–3:10 · C**
- Visuel : la frise ; une case « Lundi : 10 lignes au hasard » avec la main ; observation d'origine à côté du résumé.
- Écran : « Relire un échantillon, observation d'origine à côté »
- VO : « On ne peut pas l'exclure à coup sûr. Alors, chaque semaine, Mariama relit dix lignes au hasard, avec l'observation d'origine à côté. Le contrôle humain reste. »

**Scène 15 — B6 Clôture · 3:10–3:21 · B (carte de rappel)**
- Visuel : carte de rappel, points révélés au rythme de la voix.
- Écran : « Vous saurez faire classer et résumer vos textes par une étape d'IA » « 1. L'IA classe et résume, vous décidez » « 2. Aucune donnée personnelle dans l'étape d'IA » « 3. Relisez un échantillon chaque semaine »
- VO : « Le flux de Mariama sait maintenant lire. La farine manquante ne passe plus inaperçue. Classez six textes avec l'IA. »

#### Captures à fournir par l'owner

1. **Google Sheets (scènes 8 et 12)** · ordinateur. Ajouter au tableau de la leçon 2 les colonnes « Catégorie » et « Résumé ». Capture fixe, colonnes encadrées par Claude. Masquer : e-mail du compte.
2. **Make — étapes d'IA (scènes 9 à 11)** · ordinateur, zoom du navigateur agrandi. Enregistrer l'écran (environ 60 s utiles) : insérer un bloc Make AI Toolkit « classer un texte » entre Sheets et Gmail ; texte = « Observation » ; catégories à saisir : *Rupture de stock, Santé, Sécurité, Logistique, Rien à signaler* ; bloc « résumer un texte » ; Google Sheets « mettre à jour une ligne » ; modifier le filtre. Masquer : avatar, organisation. [Libellés exacts à vérifier au moment de la production]
3. **Essai avec trois observations inventées (scène 12)** · remplir le formulaire trois fois, observation seule renseignée : *« Séance bien passée à Magaria, les mères ont posé beaucoup de questions sur l'allaitement. »* · *« Depuis deux semaines, plus de farine enrichie au centre, les mères repartent sans. »* · *« Le local de la séance est fermé à clé, séance reportée. »* Montrer le tableau complété (10 s) et l'e-mail d'alerte reçu (10 s). Masquer : adresses.

#### Notes de script

- Prononciation : « Make AI Toolkit » = « mèïk éï-aï toul-kit ». Dire « étape d'IA » ; le mot « module » n'est pas repris.
- Honnêteté : l'étape d'IA consomme des crédits de la version gratuite et a des limites d'usage ; ne pas chiffrer [à vérifier au moment de la production]. Le texte envoyé à l'IA quitte le tableau : d'où la règle « Observation seule, sans nom ». Les clés d'IA personnelles peuvent demander une version payante [à vérifier].
- Santé : la catégorie « Santé » ne sert qu'à alerter un humain ; l'IA n'interprète rien, la référence au centre de santé suit le protocole officiel. Ne pas ajouter d'exemple médical détaillé.
- Notes d'adaptation : EN — « d'un coup d'œil » → « at a glance ». HA / DJE — « catégorie » : choisir un mot courant (« rukuni » en haoussa, à confirmer par le traducteur) ; « farine enrichie » : terme local à vérifier ; garder « Make », « Gmail », « Google Sheets ».

### Leçon 4 — Le rapport du lundi, prêt et surveillé (`au4`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez programmer un rapport hebdomadaire qui vous prévient quand il échoue. »
- **Cas réel (B1 → B6)** : Mariama, à Zinder. Son flux classe et résume les remontées (leçon 3). Mais un lundi, la connexion Gmail du flux a expiré : aucun brouillon, et personne ne l'a su avant qu'Ibrahim demande le rapport. Elle programme le rapport du lundi à heure fixe, en brouillon, avec un message Telegram et une alerte en cas d'échec. En B6, chaque lundi à sept heures, un brouillon l'attend ; si le flux échoue, elle le sait aussitôt.
- **Unités de notion (B3)** : 1. Le déclencheur horaire — le flux part à heure fixe, chaque lundi. · 2. Le flux prépare, vous envoyez — un brouillon Gmail, un message Telegram, jamais d'envoi automatique. · 3. Prévoir la panne, avoir un plan B — route d'erreur, historique, remplaçant nommé.
- **Démo (B4)** : Make + Google Sheets + Gmail + Telegram. 1. Régler le déclencheur : chaque lundi, sept heures. 2. Premier bloc : lire les lignes de la semaine dans le tableau. 3. Bloc d'IA : rédiger le brouillon avec la consigne ci-dessous (uniquement communes, nombres, catégories, résumés). 4. Gmail : créer un brouillon. 5. Telegram : envoyer « Brouillon prêt ». 6. Sur le premier bloc, ajouter un gestionnaire d'erreur : message Telegram « Le rapport a échoué ». 7. Lancer un essai, puis un essai en panne (onglet inexistant). Résultat : le message « Brouillon prêt » sur téléphone, puis le message d'échec. [Noms exacts des blocs, création du brouillon dans l'application Gmail récente, réglages des notifications d'erreur de Make et de la connexion Telegram à vérifier au moment de la production]
- **Consolidation (B5)** : prédiction. « Lundi prochain, Mariama est malade. Le brouillon est prêt à sept heures. Que se passe-t-il ? » Réponse : rien, personne ne l'envoie. Solution : un remplaçant reçoit aussi le message, et le plan B est écrit.
- **Consigne à copier** :

```text
Vous préparez le brouillon d'un rapport hebdomadaire pour un coordinateur de projet.
Voici les données de la semaine (communes, nombres, catégories, résumés ; aucun nom) :
[collez ici les lignes de la semaine]
Rédigez : 1. une synthèse en trois phrases ; 2. un tableau par commune (séances, participants) ;
3. la liste des problèmes signalés, classés par catégorie ; 4. une section « À vérifier par un humain ».
N'inventez aucun chiffre : si une donnée manque, écrivez « donnée manquante ».
Ton neutre, phrases courtes, en français.
```

- **Exercice** : « Programmez votre rapport du lundi » — 1. Réglez un déclencheur horaire, un brouillon et un message Telegram. 2. Ajoutez un message d'erreur et testez une panne volontaire. 3. Écrivez votre plan B : qui relit, qui remplace, que faire à la main.
- **Carte de rappel** *(titre de la carte = la promesse, mot pour mot, sans « À la fin de cette leçon »)* : 1. Le flux prépare, un humain envoie · 2. Prévoyez l'alerte d'erreur · 3. Écrivez un plan B nommé
- **Quiz** :
  1. Qui envoie le rapport au bailleur ? — A) Make, seul B) Telegram C) L'assistant d'IA D) Un humain, après relecture du brouillon — **Réponse : D**
  2. Qu'est-ce qui fait partir le flux chaque lundi ? — A) Un déclencheur horaire B) Une nouvelle ligne C) Un appel D) Le filtre — **Réponse : A**
  3. Pourquoi ajouter un gestionnaire d'erreur ? — A) Pour accélérer le flux B) Pour être prévenu quand le flux échoue C) Pour supprimer l'historique D) Pour changer de compte — **Réponse : B**
  4. Pourquoi essayer une panne volontaire ? — A) Pour casser le flux B) Pour économiser des crédits C) Pour vérifier que le message d'erreur arrive vraiment D) Pour tester Telegram seulement — **Réponse : C**
  5. Que contient un bon plan B ? — A) Un nouvel outil B) Un abonnement payant C) Rien : le flux est fiable D) Qui relit, qui remplace, et ce qu'on fait à la main — **Réponse : D**
- **Marques citées** : Make ; Google (Google Sheets, Gmail, Gemini) ; Telegram ; WhatsApp (Meta)

#### Script v1 (à valider par l'owner)

Durée estimée : 3:29 · Mots de voix off : 378

**Scène 1 — B1 Accroche · 0:00–0:11 · E**
- Visuel : illustration en aplats. Mariama, lundi, sept heures, devant un écran sans brouillon ; Ibrahim au téléphone en arrière-plan.
- Écran : « Zinder · lundi, 7 h »
- VO : « Le flux de Mariama sait classer et résumer. Mais un lundi, sa connexion Gmail a expiré, et personne ne l'a su. »

**Scène 2 — B1 Accroche · 0:11–0:21 · B**
- Visuel : carte promesse ; sur le rail, l'horloge et le triangle d'erreur s'ajoutent.
- Écran : « Un rapport qui vous prévient s'il échoue »
- VO : « À la fin de cette leçon, vous saurez programmer un rapport hebdomadaire qui vous prévient quand il échoue. »

**Scène 3 — B2 Cadrage · 0:21–0:41 · B**
- Visuel : carte : « Automatique » barré d'une croix devant « sans surveillance ».
- Écran : « Automatique ≠ sans surveillance »
- VO : « Automatique ne veut pas dire sans surveillance. Un flux sans alerte tombe en panne en silence. Le plus grave : on croit qu'il marche. Chez Mariama, ce silence a duré jusqu'à l'appel d'Ibrahim. »

**Scène 4 — B2 Cadrage · 0:41–0:57 · A**
- Visuel : capture réelle de l'historique d'un scénario Make : une exécution réussie, une exécution en échec marquée d'une croix et encadrée.
- Écran : « L'historique : une ligne par exécution »
- VO : « Voici l'historique de Make. Chaque exécution y laisse une ligne. Mais il faut penser à le regarder. Un rapport important mérite mieux qu'un coup d'œil de temps en temps. »

**Scène 5 — B3 Notion · 0:57–1:09 · C**
- Visuel : le rail ; le cercle déclencheur devient une horloge « lun. 7:00 ».
- Écran : « Déclencheur horaire : chaque lundi, 7 h »
- VO : « Un : le déclencheur horaire. Le flux n'attend plus une ligne. Il part à heure fixe : chaque lundi, à sept heures. »

**Scène 6 — B3 Notion · 1:09–1:23 · C**
- Visuel : la frise du lundi : brouillon prêt 7:00 → relecture Mariama → validation Ibrahim → envoi par un humain (cadre épais, main).
- Écran : « Le flux prépare. Vous envoyez. »
- VO : « Deux : le flux prépare, vous envoyez. Il écrit un brouillon et vous prévient par message. Vous relisez, Ibrahim valide, et c'est un humain qui envoie. »

**Scène 7 — B3 Notion · 1:23–1:33 · B**
- Visuel : carte comparaison en deux lignes : « WhatsApp : compte entreprise vérifié, modèles approuvés, coûts possibles » / « Telegram : un essai gratuit ».
- Écran : « WhatsApp : démarches · Telegram : simple à essayer »
- VO : « Pourquoi Telegram ? WhatsApp demande un compte entreprise vérifié, des modèles de messages approuvés, et peut coûter. Telegram s'essaie gratuitement. »

**Scène 8 — B3 Notion · 1:33–1:46 · C**
- Visuel : le rail ; un triangle d'erreur sur le premier bloc ouvre une branche « Message : le rapport a échoué » ; une case « Plan B » sous la frise.
- Écran : « Route d'erreur + plan B nommé »
- VO : « Trois : prévoir la panne. Si un bloc échoue, une route d'erreur envoie un message. Et un plan B existe, avec un remplaçant nommé. »

**Scène 9 — B4 Application · 1:46–1:58 · A**
- Visuel : capture réelle de Make : réglage du déclencheur horaire, « chaque semaine, lundi, 7:00 » encadré ; premier bloc Google Sheets qui lit les lignes.
- Écran : « Chaque lundi, 7 h : lire la semaine »
- VO : « Démonstration. Mariama règle le flux : chaque lundi, sept heures. Un premier bloc lit les lignes de la semaine dans le tableau. »

**Scène 10 — B4 Application · 1:58–2:09 · G**
- Visuel : carte de consigne sur fond clair : la consigne du rapport, lisible.
- Écran : « Consigne : synthèse, tableau, problèmes, à vérifier »
- VO : « Un bloc d'IA rédige le brouillon, avec cette consigne. Elle n'y envoie que communes, nombres, catégories et résumés. Aucun nom. »

**Scène 11 — B4 Application · 2:09–2:23 · A**
- Visuel : capture réelle : bloc Gmail « créer un brouillon », puis bloc Telegram « envoyer un message » avec le texte « Brouillon prêt ».
- Écran : « Gmail : brouillon · Telegram : message »
- VO : « Gmail : créer un brouillon. Puis Telegram : envoyer le message « Brouillon prêt ». Le brouillon attend dans Gmail : rien ne part sans elle. »

**Scène 12 — B4 Application · 2:23–2:36 · A**
- Visuel : capture réelle : clic droit sur le premier bloc, « ajouter un gestionnaire d'erreur », bloc Telegram « Le rapport a échoué » branché. Cadre sur le nouveau bloc.
- Écran : « Gestionnaire d'erreur : message Telegram »
- VO : « Clic droit sur le premier bloc : ajouter un gestionnaire d'erreur. Elle y branche un second message : « Le rapport a échoué ». »

**Scène 13 — B4 Application · 2:36–2:50 · A**
- Visuel : capture réelle sur téléphone : message Telegram « Brouillon prêt » ; puis, après essai en panne, message « Le rapport a échoué ».
- Écran : « Essai réussi · Essai en panne : l'alerte arrive »
- VO : « Elle lance un essai : le message arrive sur son téléphone. Puis une panne volontaire : l'alerte arrive aussi. Elle remet ensuite le bon nom d'onglet. »

**Scène 14 — B5 Consolidation · 2:50–3:03 · B**
- Visuel : carte question, pictogramme de lit et d'horloge.
- Écran : « Mariama est malade lundi. Que se passe-t-il ? »
- VO : « À vous. Lundi prochain, Mariama est malade. Le brouillon est prêt à sept heures. Que se passe-t-il ? » [silence 3 s]

**Scène 15 — B5 Consolidation · 3:03–3:19 · B**
- Visuel : carte réponse : « Rien » ; une seconde cloche apparaît au nom de « Remplaçant ».
- Écran : « Un remplaçant reçoit aussi le message »
- VO : « Rien : personne ne l'envoie. La solution : un remplaçant reçoit aussi le message. Et le plan B est écrit : qui relit, qui remplace, que faire à la main. »

**Scène 16 — B6 Clôture · 3:19–3:29 · B (carte de rappel)**
- Visuel : carte de rappel, points révélés au rythme de la voix.
- Écran : « Vous saurez programmer un rapport hebdomadaire qui vous prévient quand il échoue » « 1. Le flux prépare, un humain envoie » « 2. Prévoyez l'alerte d'erreur » « 3. Écrivez un plan B nommé »
- VO : « Chaque lundi, le brouillon de Mariama l'attend, et le flux la prévient s'il échoue. Programmez votre rapport du lundi. »

#### Captures à fournir par l'owner

1. **Make — historique d'un scénario (scène 4)** · ordinateur. Onglet « History » du flux : une exécution réussie et une en échec (provoquer l'échec avec l'essai de la scène 13). Capture fixe. Masquer : organisation, avatar.
2. **Make — construction (scènes 9 à 12)** · ordinateur, zoom du navigateur agrandi. Enregistrer l'écran (environ 75 s utiles) : régler la programmation (chaque lundi, 7:00) ; bloc Google Sheets qui lit les lignes ; bloc d'IA avec la consigne de la fiche ; bloc Gmail « créer un brouillon » ; bloc Telegram avec le texte *Brouillon prêt* ; clic droit sur le premier bloc → gestionnaire d'erreur → Telegram avec le texte *Le rapport a échoué*. Masquer : jeton du bot Telegram, identifiant de discussion, adresses. [Libellés à vérifier au moment de la production]
3. **Telegram — préparation (hors vidéo)** · téléphone. Créer un bot avec @BotFather (envoyer /newbot, suivre les questions), noter le jeton sans le montrer ; ouvrir le bot, lui écrire « bonjour » ; relever l'identifiant de discussion pour Make. Ne jamais filmer le jeton.
4. **Téléphone — les deux messages (scène 13)** · téléphone, capture d'écran de la discussion Telegram après l'essai réussi (« Brouillon prêt ») et après l'essai en panne (« Le rapport a échoué »). Panne volontaire : écrire un nom d'onglet qui n'existe pas dans le premier bloc, lancer l'essai, puis remettre le bon nom. Masquer : nom du bot si personnel.

#### Notes de script

- Prononciation : Telegram « télé-gramme » ; Gmail « dji-mèïl ».
- Honnêteté : les connexions peuvent expirer et demander une nouvelle autorisation [à vérifier au moment de la production] ; la version gratuite de Make a des limites d'usage, notamment sur la fréquence de vérification, sans chiffre. WhatsApp : exigences de Meta (compte entreprise, vérification, modèles de messages, coûts possibles) [à vérifier au moment de la production] ; ne rien promettre.
- Données : le bloc d'IA ne reçoit ni noms ni numéros ; le jeton du bot est un secret : il ne se montre ni ne se partage.
- Le rapport n'est jamais envoyé automatiquement au bailleur : c'est le point de contrôle humain de la leçon 1.
- Notes d'adaptation : EN — « bailleur » → « donor ». HA / DJE — « brouillon » = un texte pas encore envoyé : choisir une image locale ; garder « Telegram », « Gmail », « Make ».

### Leçon 5 — Projet final : votre flux, testé et documenté (`au5`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez livrer un flux documenté et testé, qu'un collègue peut reprendre. »
- **Cas réel (B1 → B6)** : Zinder. Mariama a écrit son plan B la semaine dernière. Ibrahim veut maintenant confier son flux à l'équipe de Tahoua. Pour cela, Mariama prépare un dossier que personne n'aura besoin de lui expliquer. En B6, l'équipe de Tahoua reprend le flux et le relance sans appeler Mariama.
- **Unités de notion (B3)** : 1. Les quatre pièces du dossier — fiche de flux, capture du flux, journal de tests, note données et plan B. · 2. Six critères d'évaluation — tâche justifiée, contrôle humain, données protégées, alerte testée, plan B nommé, flux compréhensible. · 3. Un flux qu'un collègue peut reprendre — il lit, regarde, relance les tests, sans vous appeler.
- **Démo (B4)** : exemple de projet réussi, le dossier de Mariama, pièce par pièce. 1. La fiche de flux d'une page (leçon 1). 2. La capture du flux dans Make, du formulaire au brouillon, route d'erreur comprise. 3. Le journal de tests : trois lignes (avec problème, sans problème, en panne), attendu et obtenu. 4. La note d'une page : données qui circulent, ce qui part vers l'IA, remplaçante, plan B manuel. Résultat à l'écran : les quatre pièces ouvertes l'une après l'autre.
- **Consolidation (B5)** : prédiction. « Un journal ne contient que des essais réussis. Que manque-t-il ? » Réponse : le cas sans problème et la panne. Un flux n'est fiable que s'il a été testé quand il échoue.
- **Consigne à copier** :

```text
Relisez mon dossier de flux comme un évaluateur, sans le réécrire à ma place.
Voici ma fiche de flux (déclencheur, actions, données, contrôle) : [collez la fiche, sans aucun nom].
Voici mon journal de tests : [collez le tableau].
Voici ma note données et plan B : [collez la note].
Critères : 1. tâche répétitive justifiée ; 2. un point de contrôle humain ; 3. aucune donnée
personnelle dans l'étape d'IA ; 4. alerte d'erreur testée ; 5. plan B avec un remplaçant nommé ;
6. un collègue peut reprendre le flux seul.
Pour chaque critère : « acquis », « partiel » ou « absent », avec une phrase d'explication.
Terminez par les trois corrections les plus utiles.
```

- **Exercice** : « Déposez votre dossier de flux » — 1. Rassemblez les quatre pièces : fiche de flux, capture du flux, journal de tests, note données et plan B. 2. Faites-les relire avec la consigne, corrigez, puis vérifiez qu'un collègue comprend sans vous. 3. Déposez le dossier sur la plateforme. [Modalités de dépôt à confirmer à l'intégration dans le site]
- **Carte de rappel** *(titre de la carte = la promesse, mot pour mot, sans « À la fin de cette leçon »)* : 1. Découpez en flux : déclencheur, actions, contrôle · 2. Formulaire, tableau, e-mail : testez avant d'activer · 3. L'IA classe, vous décidez, sans données personnelles · 4. Le flux prépare, un humain envoie
- **Quiz** :
  1. Quelle pièce décrit déclencheur, actions, données et contrôle ? — A) Le journal de tests B) La note de plan B C) La fiche de flux D) La capture — **Réponse : C**
  2. Quels essais le journal doit-il contenir ? — A) Avec problème, sans problème, en panne B) Uniquement des essais réussis C) Un seul essai D) Aucun, le flux est fiable — **Réponse : A**
  3. Que peut-on envoyer à l'étape d'IA ? — A) Le tableau complet B) Seulement le texte nécessaire, sans nom ni numéro C) Les numéros de téléphone D) Les dossiers de bénéficiaires — **Réponse : B**
  4. Qui envoie le rapport final ? — A) Make, seul B) Le bot Telegram C) Un humain, après relecture D) L'assistant d'IA — **Réponse : C**
  5. Que prouve un collègue qui reprend le flux sans vous appeler ? — A) Que le flux est secret B) Que le dossier est assez clair C) Que le flux est gratuit D) Que l'IA a décidé — **Réponse : B**
- **Marques citées** : Make ; Google (Google Sheets, Gmail, Gemini) ; Telegram

#### Script v1 (à valider par l'owner)

Durée estimée : 3:18 · Mots de voix off : 362

**Scène 1 — B1 Accroche · 0:00–0:10 · E**
- Visuel : illustration en aplats. Mariama et Ibrahim devant une carte de la région ; un trait relie Zinder à Tahoua.
- Écran : « Zinder · projet final »
- VO : « Mariama a écrit son plan B la semaine dernière. Aujourd'hui, Ibrahim veut confier son flux à l'équipe de Tahoua. »

**Scène 2 — B1 Accroche · 0:10–0:20 · B**
- Visuel : carte promesse ; la fiche de flux apparaît tamponnée « Testé ».
- Écran : « Un flux documenté, testé, repris par un collègue »
- VO : « À la fin de cette leçon, vous saurez livrer un flux documenté et testé, qu'un collègue peut reprendre. »

**Scène 3 — B2 Cadrage · 0:20–0:37 · B**
- Visuel : carte : « Marche chez moi » barré ; « Marche chez eux » coché.
- Écran : « Marcher chez vous ≠ être livré »
- VO : « Un flux qui marche chez vous n'est pas un flux livré. Sans explication, personne d'autre ne peut le reprendre. Pensez au collègue qui ouvre votre dossier un lundi, pressé, sans pouvoir vous joindre. »

**Scène 4 — B3 Notion · 0:37–0:52 · C**
- Visuel : quatre pièces se posent côte à côte : fiche, capture, journal, note.
- Écran : « Fiche · Capture · Journal · Note »
- VO : « Le dossier contient quatre pièces. La fiche de flux. La capture du flux. Le journal de tests. Et une note sur les données et le plan B. »

**Scène 5 — B3 Notion · 0:52–1:01 · B**
- Visuel : carte critères, trois premières lignes, cochées une à une.
- Écran : « 1. Tâche répétitive justifiée 2. Contrôle humain 3. Données protégées »
- VO : « Six critères comptent. Une tâche répétitive, justifiée. Un point de contrôle humain. Aucune donnée personnelle dans l'étape d'IA. »

**Scène 6 — B3 Notion · 1:01–1:12 · B**
- Visuel : carte critères, trois dernières lignes, cochées une à une.
- Écran : « 4. Alerte testée 5. Plan B nommé 6. Flux compréhensible »
- VO : « Puis : une alerte d'erreur testée. Un plan B avec un remplaçant nommé. Un flux qu'un collègue comprend seul. »

**Scène 7 — B3 Notion · 1:12–1:27 · C**
- Visuel : la frise : un collègue lit la fiche, regarde la capture, relance un test ; un téléphone barré d'une croix reste sur la table.
- Écran : « Reprendre sans vous appeler »
- VO : « Le test final : un collègue lit la fiche, regarde la capture, relance les essais. Sans vous appeler. Ce collègue peut être l'équipe de Tahoua, ou vous-même, longtemps après. »

**Scène 8 — B4 Application · 1:27–1:37 · A**
- Visuel : capture réelle de la fiche de flux de Mariama (document d'une page) : quatre lignes encadrées une à une.
- Écran : « Pièce 1 : la fiche de flux »
- VO : « Voici le dossier de Mariama. D'abord la fiche de flux : déclencheur, actions, données, contrôle. Une page. »

**Scène 9 — B4 Application · 1:37–1:50 · A**
- Visuel : capture réelle du flux Make complet, du formulaire au brouillon, avec le gestionnaire d'erreur. Cadre sur la route d'erreur.
- Écran : « Pièce 2 : la capture du flux »
- VO : « Ensuite la capture de son flux dans Make : du formulaire jusqu'au brouillon, avec la route d'erreur. Chaque bloc est visible, rien n'est caché. »

**Scène 10 — B4 Application · 1:50–2:02 · A**
- Visuel : capture réelle du journal de tests (tableau de trois lignes) ; colonnes « Attendu » et « Obtenu » encadrées.
- Écran : « Pièce 3 : le journal de tests »
- VO : « Le journal de tests : trois lignes. Avec un problème. Sans problème. En panne. Pour chacune, ce qu'on attendait et ce qu'on a obtenu. »

**Scène 11 — B4 Application · 2:02–2:15 · A**
- Visuel : capture réelle de la note d'une page ; les rubriques « Données », « Vers l'IA », « Remplaçante », « Plan B » encadrées une à une.
- Écran : « Pièce 4 : données et plan B »
- VO : « Enfin la note d'une page. Les données qui circulent. Ce qui part vers l'IA. Qui remplace Mariama, et que faire à la main. »

**Scène 12 — B5 Consolidation · 2:15–2:25 · B**
- Visuel : carte question : un journal de tests dont les trois lignes portent la même coche.
- Écran : « Journal : uniquement des essais réussis. Que manque-t-il ? »
- VO : « À vous. Un journal ne contient que des essais réussis. Que manque-t-il ? » [silence 3 s]

**Scène 13 — B5 Consolidation · 2:25–2:43 · B**
- Visuel : carte réponse : deux lignes ajoutées au journal, « Sans problème » et « En panne ».
- Écran : « Il manque : le cas sans problème et la panne »
- VO : « Les cas difficiles : le cas sans problème, et la panne. Un flux n'est fiable que s'il a été testé quand il échoue. Mariama l'a fait : son journal contient les trois cas. »

**Scène 14 — B6 Clôture · 2:43–2:55 · E**
- Visuel : illustration : l'équipe de Tahoua devant le dossier ouvert ; Mariama, au loin, à son bureau, sans téléphone en main.
- Écran : « Tahoua · le flux est repris »
- VO : « À Tahoua, l'équipe reprend le flux de Mariama. Elle ne l'a pas appelée une seule fois. Le dossier a fait le travail d'explication. »

**Scène 15 — B6 Clôture · 2:55–3:06 · B (carte de rappel)**
- Visuel : carte de rappel, quatre points révélés au rythme de la voix, un par leçon.
- Écran : « Vous saurez livrer un flux documenté et testé, qu'un collègue peut reprendre » « 1. Découpez en flux : déclencheur, actions, contrôle » « 2. Testez avant d'activer » « 3. L'IA classe, vous décidez » « 4. Le flux prépare, un humain envoie »
- VO : « Quatre leçons, quatre réflexes. Découpez en flux. Testez avant d'activer. L'IA classe, vous décidez. Le flux prépare, un humain envoie. »

**Scène 16 — B6 Clôture · 3:06–3:18 · B**
- Visuel : carte de suite : deux pastilles « Agents IA » et « Excel + IA » ; puis carte de dépôt.
- Écran : « Pour aller plus loin : Agents IA · Excel + IA »
- VO : « Pour aller plus loin : le cours sur les agents IA, et celui sur Excel et l'IA. Déposez votre dossier de flux. »

#### Captures à fournir par l'owner

1. **Dossier de Mariama, pièce 1 : fiche de flux (scène 8)** · ordinateur. Document d'une page (Google Docs ou Sheets) avec quatre lignes, à saisir : *Déclencheur : un animateur remplit le formulaire hebdomadaire ; chaque lundi, 7 h, le rapport est préparé* · *Actions : ajouter une ligne, classer et résumer l'observation, alerter, préparer un brouillon et un message* · *Données : commune, séances, participants, observation, aucune donnée personnelle* · *Contrôle : Mariama relit, Ibrahim valide, un humain envoie*. Capture fixe.
2. **Pièce 2 : le flux complet (scène 9)** · ordinateur, Make, zoom du navigateur agrandi. Capture fixe du flux final : tableau → classer → résumer → mettre à jour → filtre → Gmail ; et la branche du lundi avec la route d'erreur (deux scénarios si besoin). Masquer : organisation, avatar, adresses, jetons.
3. **Pièce 3 : journal de tests (scène 10)** · Google Sheets. Colonnes : N° · Test · Attendu · Obtenu. Ligne 1 : *Formulaire avec le problème « Rupture de farine enrichie » (Mirriah)* · *E-mail d'alerte avec résumé* · *E-mail reçu*. Ligne 2 : *Formulaire sans problème, « Séance bien passée » (Magaria)* · *Classé « Rien à signaler », aucun e-mail* · *Conforme*. Ligne 3 : *Panne volontaire, onglet inexistant* · *Message Telegram « Le rapport a échoué »* · *Message reçu*. Capture fixe.
4. **Pièce 4 : note données et plan B (scène 11)** · Google Docs. Quatre rubriques : *Données : communes, nombres, observations ; aucun nom* · *Vers l'IA : seulement la colonne Observation* · *Remplaçante : Hadiza (adjointe)* · *Plan B : copier le tableau de la semaine, rédiger avec la consigne, envoi après validation d'Ibrahim*. Capture fixe.

#### Notes de script

- Leçon finale : B3 présente livrables et critères ; B4 montre un dossier réussi ; B6 récapitule une leçon par point (4 points) puis donne la consigne de dépôt.
- Les modalités de dépôt et la grille de notation réelles seront confirmées à l'intégration dans le site : ne pas annoncer de délai ni de note [à vérifier au moment de la production].
- Les renvois « agents IA » (cours 2) et « Excel et l'IA » (cours 11) restent au nom du cours, sans numéro à l'écran.
- Notes d'adaptation : EN — « dépôt » → « submit ». HA / DJE — « dossier » : choisir un terme administratif courant ; garder « Make », « Telegram », « Gmail ».

## 2.6 Captures et éléments à préparer

| Leçon | Élément | Comment l'obtenir | Qui |
|---|---|---|---|
| 1 | Capture Make (flux de la leçon 2, trois blocs) | Après la leçon 2 : éditeur plein écran, zoom du navigateur agrandi, capture fixe ; masquer organisation et adresses | owner |
| 1 | Capture n8n (trois nœuds reliés, non configurés) | Compte d'essai ou instance n8n : « On form submission », Google Sheets, Gmail ; capture fixe [noms à vérifier] | owner |
| 1 | Capture Gmail : brouillon « Rapport hebdomadaire » | Après la leçon 4 ; mention « Brouillon » visible ; masquer adresses | owner |
| 1 | Enregistrement Gemini (consigne + fiche de flux + relance) | Compte de démonstration, interface en français ; texte exact dans la fiche (Captures, leçon 1) | owner |
| 2 | Formulaire « Remontée hebdomadaire » + tableau lié + deux fausses réponses | Google Forms : communes en liste, nombres, « Problème à signaler » ; aucune donnée réelle | owner |
| 2 | Enregistrement Make : Sheets → Gmail + filtre « Problème existe » | Environ 90 s utiles ; objet et message avec colonnes insérées | owner |
| 2 | Essais avec et sans problème (e-mail reçu, historique, interrupteur) | Deux remplissages du formulaire ; capture de Gmail et de l'historique | owner |
| 3 | Tableau avec colonnes « Catégorie » et « Résumé » | Ajouter les colonnes ; capture fixe | owner |
| 3 | Enregistrement Make : classer, résumer, mettre à jour, filtre modifié | Environ 60 s utiles ; catégories : Rupture de stock, Santé, Sécurité, Logistique, Rien à signaler [libellés à vérifier] | owner |
| 3 | Essai avec trois observations inventées | Texte exact dans la fiche (Captures, leçon 3) ; tableau et e-mail d'alerte | owner |
| 4 | Historique Make avec une exécution réussie et une en échec | Après l'essai en panne volontaire ; capture fixe | owner |
| 4 | Enregistrement Make : déclencheur du lundi, Sheets, IA, brouillon Gmail, Telegram, gestionnaire d'erreur | Environ 75 s utiles ; jeton et identifiant de discussion masqués | owner |
| 4 | Création du bot Telegram (hors vidéo) | @BotFather, /newbot ; jeton gardé secret ; identifiant de discussion relevé | owner |
| 4 | Captures du téléphone : « Brouillon prêt » et « Le rapport a échoué » | Capture d'écran de la discussion Telegram après chaque essai | owner |
| 5 | Dossier de Mariama : fiche, flux complet, journal de tests, note données et plan B | Quatre documents fictifs, textes exacts dans la fiche (Captures, leçon 5) | owner |
| 1–5 | Illustrations de personas (Mariama, Ibrahim, animateurs, Abdoul-Aziz, équipe de Tahoua) | Aplats, formes simples, sans visage photoréaliste | Claude |
| 1–5 | Schémas : rail, balance, frise du lundi, fiche de flux | Animations HyperFrames selon la direction artistique | Claude |
| 1–5 | Vérification des libellés et conditions des outils (Make, Gmail, n8n, Telegram) | Contrôle sur les écrans réels avant tournage ; mentions « à vérifier » levées | owner |
