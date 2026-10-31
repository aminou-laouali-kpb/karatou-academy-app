# CLAUDE.md — Karatou Academy · Production vidéo
# Cours 7 — IA et agriculture

> **Pour l'owner — mode d'emploi**
> 1. Créez un dossier vide sur votre ordinateur, par exemple `karatou-ia-agriculture`.
> 2. Copiez-y ce fichier et renommez-le exactement `CLAUDE.md`.
> 3. Ouvrez Claude Code dans ce dossier (dans un terminal : `cd karatou-ia-agriculture` puis `claude`).
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
livraison/ia-agriculture/<id>/      fichiers livrés · livraison/ia-agriculture/INTEGRATION.md
```

`<id>` est l'identifiant de la leçon (`ac1`, `ac2`…). Langues : `fr`, `en`, `ha`, `dje`.

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
- **Phrases complètes** (règle de l'owner du 29/10/2026) : dans la voix, chaque phrase a un sujet, un verbe et un complément, et forme une explication complète. Pas de phrase nominale ni de fragment (« Cinq familles d'outils. », « Non. », « Trop lent ? Un modèle plus petit. ») : on écrit « Vous disposez de cinq familles d'outils. », « Non, il ne peut pas répondre. », « Si le modèle est trop lent, prenez-en un plus petit. ». Seule exception : la dernière phrase, titre de l'exercice à l'impératif (verbe + complément).
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

### 9.2 Nommage et contenu de `livraison/ia-agriculture/<id>/`

`ia-agriculture_<id>_<langue>_v<n>.mp4` · `…-360.mp4` · `….srt` · `….vtt` · `…_cover.jpg` (1920 × 1080, qualité 85,
première image stable de B1) · `…_transcript.md` (un titre par temps, texte dit + actions à l'écran entre
crochets) · `RECETTE.md`.

### 9.3 Mise en ligne

Chaîne YouTube **Karatou Academy**, vidéos **non répertoriées**, une vidéo par langue, sous-titres `.srt` ajoutés
comme piste. Titre : « Karatou Academy — IA et agriculture — Leçon N : <titre> (<LANGUE>) ». Le site lit des **URL
d'intégration** : `https://www.youtube.com/embed/<ID>` (jamais `watch?v=` ni `youtu.be/`). Teste chaque URL dans un
navigateur avant de la consigner.

### 9.4 Intégration au site — `livraison/ia-agriculture/INTEGRATION.md`

Le site lit, pour chaque leçon, un champ `video: { fr, en, ha }` dans les fichiers TypeScript du dépôt
`karatou-academy-app` (registre `authoredLessons`). Chaque leçon y a aussi un texte (objectif, quatre sections,
exemple, exercice, quiz de cinq questions, réflexion, glossaire), rédigé par l'équipe avec le skill
`karatou-course-creator`, et des lignes Supabase (module, leçons) pour la progression et les certificats.

Ton rôle : tenir `INTEGRATION.md` à jour, leçon par leçon : module `ia-agriculture`, id, titre, promesse (objectif), cas
réel (exemple), exercice (titre et étapes), carte de rappel, quiz, marques citées, URL FR / EN / HA, et URL DJE
« en attente ». Ce fichier est remis à l'équipe technique ; tu ne modifies pas le dépôt du site.

### 9.5 Corrections après publication

Une URL publiée est figée. Pour corriger : nouvelle version `v2` → mise en ligne → nouvelle URL testée →
`INTEGRATION.md` mis à jour → l'équipe technique remplace l'URL → l'ancienne vidéo est rendue privée, jamais
supprimée. Consigne chaque version dans le journal de `PROGRESS.md`.

## 10. `PROGRESS.md` — modèle

```markdown
# PROGRESS — Cours 7 · IA et agriculture
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
| Numéro | 7 |
| Titre | IA et agriculture |
| Format | Motion graphics + captures d'écran, voix off (voix clonée de l'owner) |
| Owner / voix | Judicael — nom complet et titre exact demandés au premier lancement |
| Rubrique | IA & Données |
| Public | Agricultrices et agriculteurs, dont une partie lit peu ou pas ; responsables de coopératives ; agents de vulgarisation (conseillers agricoles). Au Niger et au Sahel, sur téléphone, en 3G, avec WhatsApp. |
| Slug du module (provisoire) | `ia-agriculture` |
| Préfixe des leçons | `ac` |
| Nombre de vidéos | 5 (dont la dernière = projet final certifiant) |
| Durée par vidéo | 3–5 min (cible 4:00) |
| Langues | FR (référence) · EN · HA · DJE — **HA prioritaire** : produite et relue juste après la FR, avant EN et DJE |
| Prérequis | Un téléphone avec appareil photo, WhatsApp et une connexion, même lente. Savoir envoyer une photo et un message vocal. Lire n'est pas indispensable : chaque geste est montré et dit. |
| Promesse du cours | Vous utiliserez l'IA au champ et au marché pour mieux observer, comprendre et vendre, sans jamais remplacer l'avis de votre agent de vulgarisation. |
| Positionnement | Premier cours agricole de Karatou Academy. Prolonge le cours 1 « L'IA expliquée simplement » (premiers usages) et applique la règle du cours 14 « IA et santé communautaire » : l'IA prépare, un humain qualifié valide. Ne remplace ni le conseil agricole ni les services officiels (service météorologique national, système d'information sur les marchés agricoles) : il apprend à mieux s'en servir. Pour choisir d'autres outils : cours 15. |
| Fil rouge | La coopérative fictive « Haɗin Kai », près de Tahoua. **Zeinabou**, productrice de mil et de niébé en saison des pluies, d'oignon en saison sèche ; elle lit peu et passe par la voix et les photos (leçons 1, 2 et 4). **Issoufou**, président de la coopérative, qui écoute la radio et envoie les messages vocaux aux membres (leçons 3 et 5). **Abdoul-Aziz**, l'agent de vulgarisation qui suit la coopérative et confirme chaque décision (toutes les leçons). |
| Marques citées | Gemini, Plantix, WhatsApp |

## 2.2 Ce que l'apprenant saura faire

- Poser à un assistant, à voix haute, une question agricole avec son contexte (lieu, culture, saison), et en tirer des questions pour l'agent de vulgarisation.
- Prendre trois photos utiles d'une plante malade, obtenir une piste avec une application de diagnostic, et préparer le message à l'agent, sans traiter avant son avis.
- Retrouver le bulletin météo officiel et se le faire expliquer en mots simples, sans demander de prévision à l'IA.
- Comparer des prix de même produit, même unité et même date, puis calculer sa marge avant de vendre et vérifier le calcul.
- Préparer avec l'IA un conseil vocal en haoussa, validé par l'agent et relu par un locuteur, puis l'enregistrer pour sa coopérative.

## 2.3 Plan du cours

| Leçon | Id | Titre | Promesse (objectif) | Cas réel (B1) | Démo (B4) | Durée cible |
|---|---|---|---|---|---|---|
| 1 | `ac1` | L'IA au champ : ce qu'elle sait, ce qu'elle ignore | Poser une bonne question à l'IA et vérifier sa réponse | Zeinabou, près de Tahoua, découvre un assistant sur son téléphone | Gemini à la voix : question avec lieu, culture, saison → réponse écoutée → deux questions envoyées à l'agent | 4:00 |
| 2 | `ac2` | Une photo pour comprendre une maladie | Utiliser une photo pour préparer l'avis de l'agent | Des taches sur les feuilles d'oignon de Zeinabou | Plantix : photo → piste ; Gemini : causes possibles et questions ; WhatsApp : photos et message vocal à l'agent | 4:00 |
| 3 | `ac3` | Météo : la source officielle d'abord | Comprendre le bulletin météo officiel avec l'IA | Issoufou entend la prévision de saison à la radio sans tout comprendre | Bulletin officiel reçu de l'agent → Gemini l'explique en phrases simples → questions pour l'agent | 4:00 |
| 4 | `ac4` | Prix du marché et calcul de marge | Comparer les prix et calculer votre marge avant de vendre | Un commerçant propose un prix pour le niébé de Zeinabou | Bulletin du SIMA → Gemini : tableau village / marché (chiffres fictifs) → calcul refait à la calculatrice | 4:00 |
| 5 | `ac5` | Projet final : un conseil vocal en haoussa | Préparer un conseil vocal en haoussa, vérifié, pour votre coopérative | Issoufou doit transmettre un conseil de l'agent aux quarante membres | Conseil de l'agent → texte simple → haoussa relu → message vocal WhatsApp → fiche d'une page | 4:00 |

## 2.4 Direction artistique du cours

- **Motif récurrent : le chemin vers l'agent.** Chaque leçon suit le même trajet visuel : le champ ou le marché → le téléphone → l'agent de vulgarisation (silhouette à casquette et carnet) → l'action. L'IA est toujours une étape du chemin, jamais l'arrivée. Le dernier plan de chaque leçon montre l'agent et la coche.
- **Pour un public qui lit peu** : une carte = un pictogramme + quatre mots au plus ; nombres à l'écran en chiffres, toujours avec un pictogramme (sac, billet, goutte, calendrier) ; tout ce qui est écrit est aussi dit ; débit lent, une seconde de pause entre deux idées ; jamais d'information portée par le seul texte ou la seule couleur.
- **Personas** : aplats, formes simples, scènes sahéliennes (champ de mil, planches d'oignon irriguées, cour avec sacs de niébé, marché, radio, réunion sous un arbre), tenues locales, visages stylisés. Jamais d'image générée qui imite une personne réelle. **Aucune image de maladie de plante générée** : les symptômes ne sont montrés que sur les photos réelles de l'owner ; dans les illustrations, des taches stylisées.
- **Pictogrammes fixes** (même dessin dans tout le cours) : téléphone, œil (photo), oreille (voix), agent, nuage de pluie, soleil, sac, billet, calculatrice, haut-parleur (message vocal), coche, croix, point d'interrogation.
- **Trois schémas types** : 1. *Le chemin vers l'agent* (champ → téléphone → agent → action). 2. *La balance* : deux options côte à côte (village / marché ; ce que dit l'IA / ce que dit la source). 3. *Les deux colonnes* : « L'IA aide » / « L'agent décide ».
- **Captures** : téléphone à la verticale, dans un cadre de téléphone neutre sans marque ; zoom fort sur la zone utile ; une annotation à la fois (cadre, flèche, coche, croix), au moins 2,5 s. Masqués : numéros de téléphone, noms de contacts, photos de profil, barre d'état, notifications.
- **Ce qui reste fixe** : le chemin vers l'agent, les pictogrammes, la carte de consigne (G) sur fond clair. **Ce qui change** : le persona, le lieu, la saison (ciel et sol, toujours doublés d'un pictogramme soleil ou pluie).
- **Son** : aucune musique sous la voix ; un court habillage sonore possible sur les cartes uniquement.
- **Minutage** : horloge des beats (0:00 = fin de la carte d'ouverture) ; cartes d'ouverture et de clôture et mention légale (Partie 1) en sus. Débit posé, environ 105–110 mots/min pauses comprises ; phrases de douze mots au plus, sauf la promesse.

## 2.5 Les leçons

### Leçon 1 — L'IA au champ : ce qu'elle sait, ce qu'elle ignore (`ac1`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez poser une bonne question à l'IA et vérifier sa réponse. »
- **Cas réel (B1 → B6)** : Zeinabou, productrice près de Tahoua (cas fictif) : mil et niébé en saison des pluies, oignon en saison sèche. Elle lit peu. Son fils lui montre un assistant sur son téléphone ; elle se demande s'il peut lui dire quoi faire au champ. Sa question du moment : comment garder ses oignons plus longtemps après la récolte. En B6, elle part voir Abdoul-Aziz, l'agent de vulgarisation, avec deux questions précises préparées par l'IA. Devient le champ `example` de la leçon.
- **Unités de notion (B3)** : 1. Ce que l'IA sait faire — écouter une question, regarder une photo, expliquer un texte, faire un calcul, répondre à voix haute. · 2. Dire où, quoi, quand — le lieu, la culture et la saison ; sans eux, elle répond pour n'importe quel pays. · 3. Une réponse courte, à écouter — cinq phrases simples, lues à voix haute, réécoutables. · 4. L'agent confirme avant d'agir — l'IA prépare deux questions ; l'agent, qui connaît vos champs et les règles du Niger, décide.
- **Démo (B4)** : Gemini, application gratuite sur téléphone, à la voix. 1. Ouvrir l'application, toucher le micro. 2. Dire la consigne de la carte G (productrice d'oignons près de Tahoua, après la récolte, question sur la conservation). 3. La réponse arrive : cinq phrases, une phrase sur ce que l'IA ne sait pas, deux questions pour l'agent. 4. L'écouter, lue à voix haute [fonction de lecture à voix haute et libellé à vérifier au moment de la production]. 5. Envoyer les deux questions à Abdoul-Aziz en message vocal WhatsApp. Résultat attendu à l'écran : une réponse courte et deux questions pour l'agent.
- **Consolidation (B5)** : prédiction. « Zeinabou demande : “Quel produit contre les insectes, et quelle dose ?” Que faire de la réponse ? » — 3 s de silence — « Ne rien acheter sur la seule parole de l'IA. Elle peut citer un produit interdit, ou une mauvaise dose. Le produit et la dose, c'est l'agent qui les donne. »
- **Consigne à copier** :

```text
Je suis [productrice / producteur] de [culture] près de [ville ou village], au Niger.
Nous sommes en [mois ou saison].
Ma question : [votre question].
Réponds en 5 phrases courtes et simples.
Dis-moi ce que tu ne sais pas sur mon champ.
Donne-moi 2 questions à poser à mon agent de vulgarisation.
```

- **Exercice** : « Posez votre première question à l'IA, à voix haute » — 1. Choisissez une vraie question sur votre champ ou vos récoltes. 2. Dites la consigne à l'assistant, avec votre lieu, votre culture et la saison. 3. Écoutez la réponse et gardez les deux questions pour l'agent. 4. Posez-les à votre agent de vulgarisation avant d'agir.
- **Carte de rappel** : 1. Poser une bonne question à l'IA et vérifier sa réponse · 2. Dire où, quoi, quand · 3. Une réponse courte, à écouter · 4. L'agent confirme avant d'agir
- **Quiz** :
  1. Que doit contenir votre question à l'IA ? — A) Seulement la question B) Votre lieu, votre culture et la saison C) Votre numéro de téléphone D) Le nom de votre agent — **Réponse : B**
  2. L'IA connaît-elle votre champ ? — A) Oui, grâce au téléphone B) Oui, si vous êtes au Niger C) Non : ni votre sol, ni la pluie d'hier chez vous D) Oui, après une seule question — **Réponse : C**
  3. Pourquoi demander une réponse courte, à écouter ? — A) Pour la comprendre et la retenir facilement B) Pour que l'IA travaille moins C) Parce que l'IA ne sait pas écrire D) Pour ne pas voir l'agent — **Réponse : A**
  4. L'IA vous conseille un produit et une dose. Que faites-vous ? — A) Vous l'achetez tout de suite B) Vous doublez la dose pour être sûr C) Vous demandez à un voisin D) Vous demandez d'abord à votre agent de vulgarisation — **Réponse : D**
  5. Qu'est-ce qu'une « hallucination » de l'IA ? — A) Une réponse fausse, dite avec assurance B) Une panne du téléphone C) Une réponse trop courte D) Un message vocal — **Réponse : A**
- **Marques citées** : Gemini, WhatsApp

#### Script v1 (à valider par l'owner)

Durée estimée : 3:59 · Mots de voix off : 390

**Scène 1 — B1 Accroche · 0:00–0:09 · E**
- Visuel : illustration à plat ; Zeinabou entre ses planches d'oignon, au lever du jour ; son fils lui tend un téléphone.
- Écran : « Tahoua · mil, niébé, oignon »
- VO : « Près de Tahoua, Zeinabou cultive le mil, le niébé et l'oignon. Son fils lui montre une IA. »

**Scène 2 — B1 Accroche · 0:09–0:20 · B**
- Visuel : carte typographique ; pictogrammes téléphone et coche ; la promesse s'inscrit.
- Écran : « Bien demander, puis vérifier »
- VO : « À la fin de cette leçon, vous saurez poser une bonne question à l'IA et vérifier sa réponse. »

**Scène 3 — B2 Cadrage · 0:20–0:41 · A**
- Visuel : capture réelle (téléphone) : la question « Mon champ d'oignons a-t-il besoin d'eau aujourd'hui ? » et la réponse obtenue ; cadre sur le passage où l'IA dit ne pas pouvoir savoir (ou croix si elle devine).
- Écran : « L'IA ne voit pas votre champ »
- VO : « Zeinabou demande : mon champ a-t-il besoin d'eau aujourd'hui ? L'IA ne peut pas le savoir. Elle ne voit pas votre champ. Elle ne connaît pas votre sol. Elle ne sait pas s'il a plu chez vous hier. »

**Scène 4 — B2 Cadrage · 0:41–0:55 · B**
- Visuel : carte ; pictogramme de bulle avec un point d'interrogation, puis une croix discrète.
- Écran : « Hallucination = réponse fausse, dite avec assurance »
- VO : « Elle répond avec des connaissances générales. Parfois, elle se trompe, sans le dire. On appelle cela une hallucination : une réponse fausse, dite avec assurance. »

**Scène 5 — B3 Notion · 0:55–1:15 · C**
- Visuel : schéma : quatre pictogrammes entrent un par un autour du téléphone : oreille, œil, page, calculatrice ; puis un haut-parleur.
- Écran : « Écouter · Regarder · Expliquer · Calculer »
- VO : « Voici ce que l'IA sait faire. Elle écoute une question, dite à voix haute. Elle regarde une photo. Elle explique un texte difficile. Elle fait un calcul. Et elle peut répondre à voix haute. »

**Scène 6 — B3 Notion · 1:15–1:36 · A**
- Visuel : capture réelle : la consigne dictée, transcrite dans la zone de saisie ; trois cadres successifs sur le lieu, la culture, la saison.
- Écran : « 1. Où ? Quoi ? Quand ? »
- VO : « Premier réflexe : dire où, quoi, quand. Où : près de Tahoua. Quoi : des oignons. Quand : juste après la récolte. Sans cela, elle répond pour n'importe quel pays. Plus vous donnez de détails, plus la réponse vous concerne. »

**Scène 7 — B3 Notion · 1:36–1:51 · A**
- Visuel : capture réelle : une réponse courte, puis le bouton de lecture à voix haute encadré, l'onde sonore qui défile (son coupé).
- Écran : « 2. Une réponse courte, à écouter »
- VO : « Deuxième réflexe : demander une réponse courte. Cinq phrases simples, pas plus. Puis l'écouter, lue à voix haute. Vous pouvez la réécouter autant de fois que nécessaire. »

**Scène 8 — B3 Notion · 1:51–2:11 · C**
- Visuel : schéma « le chemin vers l'agent » : champ → téléphone → agent → action ; la coche se pose sur l'agent.
- Écran : « 3. L'agent confirme avant d'agir »
- VO : « Troisième réflexe : l'agent confirme avant d'agir. Demandez à l'IA deux questions pour votre agent. Vous arrivez chez lui préparé. Lui connaît vos champs et les règles du Niger. Ses conseils passent avant ceux de l'IA. »

**Scène 9 — B4 Application · 2:11–2:27 · G**
- Visuel : carte de consigne sur fond clair, texte complet ; chaque ligne s'allume pendant qu'elle est lue.
- Écran : la consigne complète (bloc « Consigne à copier » de la fiche).
- VO : « Voici la consigne. Vous pouvez la dire à voix haute, ou la taper. Mettez la vidéo en pause pour la noter. »

**Scène 10 — B4 Application · 2:27–2:40 · A**
- Visuel : capture réelle (téléphone, Gemini) : le doigt touche le micro, la consigne dictée s'écrit, l'envoi.
- Écran : « Micro → consigne dictée »
- VO : « Zeinabou ouvre Gemini et touche le micro. Elle dit sa consigne. Sa question : comment garder ses oignons plus longtemps ? »

**Scène 11 — B4 Application · 2:40–2:54 · A**
- Visuel : capture réelle : la réponse ; cadre sur la phrase où l'IA dit ce qu'elle ne sait pas ; puis lecture à voix haute lancée (son coupé).
- Écran : « Ce que l'IA ne sait pas : dit clairement »
- VO : « La réponse arrive. Elle l'écoute, lue à voix haute. Cinq phrases simples. Et une phrase honnête : ce que l'IA ne sait pas. »

**Scène 12 — B4 Application · 2:54–3:05 · A**
- Visuel : capture réelle : les deux questions pour l'agent, encadrées ; puis WhatsApp, enregistrement d'un message vocal vers le contact « Agent (test) ».
- Écran : « 2 questions → message vocal à l'agent »
- VO : « Les deux questions pour l'agent sont à la fin. Zeinabou les envoie à Abdoul-Aziz, en message vocal. »

**Scène 13 — B5 Consolidation · 3:05–3:19 · B**
- Visuel : carte question ; pictogrammes bidon et seringue doseuse avec un point d'interrogation ; 3 s de silence après la question.
- Écran : « Quel produit ? Quelle dose ? »
- VO : « À vous de prédire. Zeinabou demande : quel produit contre les insectes, et quelle dose ? Que faire de la réponse ? »

**Scène 14 — B5 Consolidation · 3:19–3:36 · B**
- Visuel : carte en deux colonnes : « L'IA aide » (bulle) / « L'agent décide » (agent) ; le bidon passe dans la colonne de l'agent, coche.
- Écran : « Produit et dose : l'agent décide »
- VO : « Ne rien acheter sur la seule parole de l'IA. Elle peut citer un produit interdit, ou une mauvaise dose. Le produit et la dose, c'est l'agent qui les donne. »

**Scène 15 — B6 Clôture · 3:36–3:46 · B (carte de rappel 1/2)**
- Visuel : Zeinabou marche vers l'agent, téléphone en main ; la coche se pose ; la promesse s'inscrit.
- Écran : « Poser une bonne question à l'IA et vérifier sa réponse »
- VO : « Zeinabou part chez l'agent avec deux questions précises. Vous savez maintenant poser une bonne question, et vérifier. »

**Scène 16 — B6 Clôture · 3:46–3:59 · B (carte de rappel 2/2)**
- Visuel : carte de rappel, un pictogramme par point, révélés au rythme de la voix.
- Écran : « 2. Dire où, quoi, quand » « 3. Une réponse courte, à écouter » « 4. L'agent confirme avant d'agir »
- VO : « Retenez : où, quoi, quand. Une réponse courte, à écouter. L'agent confirme. Posez votre première question à l'IA, à voix haute. »

#### Captures à fournir par l'owner

Outils : application Gemini (gratuite) et WhatsApp, sur téléphone Android, en français. Compte de démonstration. À masquer : barre d'état, notifications, avatar du compte, numéros et photos de profil.

| Scène | Gestes exacts | Texte exact à dire ou taper | Durée utile |
|---|---|---|---|
| 3 | Nouvelle conversation ; dire ou taper la question ; filmer la réponse entière. | « Mon champ d'oignons a-t-il besoin d'eau aujourd'hui ? » | 10 s |
| 6, 10 | Nouvelle conversation ; toucher le micro ; dire la consigne lentement ; filmer la transcription puis l'envoi. | « Je suis productrice d'oignons près de Tahoua, au Niger. Nous sommes juste après la récolte. Ma question : comment garder mes oignons plus longtemps ? Réponds en cinq phrases courtes et simples. Dis-moi ce que tu ne sais pas sur mon champ. Donne-moi deux questions à poser à mon agent de vulgarisation. » | 20 s |
| 7, 11 | Filmer la réponse ; ouvrir l'option de lecture à voix haute et la lancer (son coupé au montage). | — | 12 s |
| 12 | Capture fixe des deux questions ; puis WhatsApp : ouvrir le contact de test « Agent (test) », maintenir le micro, enregistrer 5 s, envoyer. | Dire les deux questions obtenues | 10 s |

#### Notes de script

- Prononciation : Gemini « jé-mi-ni » ; Zeinabou « zé-ï-na-bou » ; Abdoul-Aziz « ab-doul-a-ziz » ; Tahoua « ta-houa ».
- Débit lent, une seconde de pause entre les phrases ; à l'écran, quatre mots au plus hors carte G.
- Scènes 3 et 11 : la VO suit la réponse réellement obtenue (si l'IA devine au lieu de dire qu'elle ne sait pas, croix et VO « Elle devine : elle ne peut pas le savoir »).
- La lecture à voix haute dépend de l'application et de la langue [à vérifier au moment de la production] ; ne rien promettre pour le haoussa à l'oral.
- Aucun nom de produit ni aucune dose à l'écran, même flouté dans une capture : choisir des captures qui n'en montrent pas.
- Terme glosé : « hallucination » (scène 4).
- Adaptation HA (prioritaire) : phrases encore plus courtes si besoin ; vocabulaire à faire valider par le relecteur HA : agent de vulgarisation (terme en usage localement ; au Nigeria, « malamin gona »), mil (gero), niébé (wake), oignon (albasa), récolte (girbi), saison des pluies (damina), saison sèche (rani). EN : « agent de vulgarisation » → « extension officer ». DJE : mêmes termes à faire valider par le relecteur zarma.

### Leçon 2 — Une photo pour comprendre une maladie (`ac2`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez utiliser une photo pour préparer l'avis de l'agent. »
- **Cas réel (B1 → B6)** : Zeinabou (suite, cas fictif). Saison sèche : des taches apparaissent sur les feuilles de ses oignons. Une voisine lui conseille un produit acheté au marché. Zeinabou préfère comprendre d'abord. En B6, Abdoul-Aziz reçoit ses trois photos et son message vocal sur WhatsApp ; il passe le lendemain, confirme la cause et dit quoi faire. Devient le champ `example` de la leçon.
- **Unités de notion (B3)** : 1. Trois photos nettes — la feuille de près, la plante entière, la parcelle ; en plein jour, sans ombre ni flou. · 2. Une piste, pas un diagnostic — une application comme Plantix compare la photo à une banque d'images et propose une hypothèse ; plusieurs problèmes se ressemblent. · 3. L'assistant prépare vos questions — un assistant comme Gemini décrit la photo, liste des causes possibles, dit quoi observer et quoi demander, sans conseiller de produit. · 4. Aucun traitement sans l'agent — photos, observations et questions partent chez l'agent ; lui seul confirme la cause et indique produit, dose et protection.
- **Démo (B4)** : 1. Plantix, application gratuite : la culture « oignon » choisie, photo de la feuille ; l'application affiche une piste, des photos de comparaison et des conseils [disponibilité au Niger, langues et libellés à vérifier au moment de la production]. 2. Gemini : joindre les trois photos, dire la consigne de la carte G ; la réponse décrit les taches, donne trois causes possibles, ce qu'il faut observer et les questions pour l'agent. 3. WhatsApp : envoyer les trois photos et un message vocal au contact de l'agent (contact de test pour la capture). Résultat attendu à l'écran : une piste, des questions, un message parti.
- **Consolidation (B5)** : prédiction. « Deux feuilles jaunies : l'une est malade, l'autre manque d'eau. L'application fait-elle toujours la différence ? » — 3 s de silence — « Pas toujours. Sur une seule feuille, les deux se ressemblent. Il faut la plante entière, la parcelle, et l'œil de l'agent. »
- **Consigne à copier** :

```text
Voici des photos de mes [culture], près de [lieu]. Depuis [nombre] jours, je vois : [ce que vous voyez].
Décris simplement ce que tu vois sur les photos.
Donne 3 causes possibles, sans choisir à la place de mon agent de vulgarisation.
Dis-moi quoi observer dans mon champ, et quelles questions lui poser.
Ne me conseille aucun produit et aucune dose.
```

- **Exercice** : « Photographiez une plante malade et préparez le message à l'agent » — 1. Prenez trois photos nettes : la feuille de près, la plante entière, la parcelle. 2. Demandez une piste à l'application, puis les causes possibles et les questions à l'assistant. 3. Envoyez photos, observations et questions à votre agent de vulgarisation. 4. Attendez son avis avant tout traitement.
- **Carte de rappel** : 1. Utiliser une photo pour préparer l'avis de l'agent · 2. Trois photos nettes · 3. Une piste, pas un diagnostic · 4. Aucun traitement sans l'agent
- **Quiz** :
  1. Quelles photos envoyer ? — A) Une seule photo, prise de loin B) La feuille de près, la plante entière et la parcelle C) Une photo à l'ombre, le soir D) La photo de l'emballage d'un produit — **Réponse : B**
  2. L'application annonce le nom d'une maladie. C'est… — A) un diagnostic sûr B) une ordonnance C) une piste, à faire confirmer par l'agent D) un résultat de laboratoire — **Réponse : C**
  3. Que demander à l'assistant, avec vos photos ? — A) Le produit le plus fort B) Une dose précise C) Le nom d'un vendeur D) Les causes possibles et les questions pour l'agent — **Réponse : D**
  4. Avant de traiter, il faut… — A) l'avis de l'agent de vulgarisation B) l'avis d'un voisin C) que deux applications soient d'accord D) attendre la pluie — **Réponse : A**
  5. Une feuille jaunie peut venir… — A) toujours d'une maladie B) d'une maladie, d'un manque d'eau ou d'autre chose : il faut voir toute la plante C) toujours d'un insecte D) d'une mauvaise photo seulement — **Réponse : B**
- **Marques citées** : Plantix, Gemini, WhatsApp

#### Script v1 (à valider par l'owner)

Durée estimée : 3:45 · Mots de voix off : 364

**Scène 1 — B1 Accroche · 0:00–0:09 · E**
- Visuel : illustration à plat ; les planches d'oignon de Zeinabou en saison sèche ; taches stylisées (formes simples) sur quelques feuilles ; une voisine montre un bidon.
- Écran : « Saison sèche · taches sur l'oignon »
- VO : « Leçon un : l'agent confirme avant d'agir. Saison sèche : des taches apparaissent sur les oignons de Zeinabou. »

**Scène 2 — B1 Accroche · 0:09–0:19 · B**
- Visuel : carte typographique ; pictogrammes œil et agent reliés par une flèche ; la promesse s'inscrit.
- Écran : « Une photo pour préparer l'avis de l'agent »
- VO : « À la fin de cette leçon, vous saurez utiliser une photo pour préparer l'avis de l'agent. »

**Scène 3 — B2 Cadrage · 0:19–0:33 · C**
- Visuel : schéma : trois feuilles tachées presque identiques ; sous chacune, un pictogramme différent apparaît : microbe, insecte, goutte barrée (manque d'eau).
- Écran : « Des taches qui se ressemblent »
- VO : « On croit souvent : une photo, et l'application donne la maladie. Pas si simple. Une maladie, un insecte, un manque d'eau : les taches se ressemblent. »

**Scène 4 — B2 Cadrage · 0:33–0:42 · B**
- Visuel : carte en deux colonnes : « Photo → piste » / « Agent → diagnostic ».
- Écran : « Photo = piste · Agent = diagnostic »
- VO : « La photo donne une piste. L'agent, lui, donne le diagnostic. Gardez cette différence en tête. »

**Scène 5 — B3 Notion · 0:42–0:56 · A**
- Visuel : capture réelle (appareil photo du téléphone) : trois prises successives, la feuille de près, la plante entière, la parcelle ; une coche sur chacune.
- Écran : « 1. Feuille · Plante · Parcelle »
- VO : « Première règle : trois photos nettes. La feuille, de près. La plante entière. Puis la parcelle. Prenez-les en plein jour, sans ombre et sans flou. »

**Scène 6 — B3 Notion · 0:56–1:15 · A**
- Visuel : capture réelle du résultat Plantix (image fixe) ; cadre sur le nom proposé, puis l'étiquette « piste » posée dessus avec un point d'interrogation.
- Écran : « 2. Une piste, pas un diagnostic »
- VO : « Deuxième règle : une piste, pas un diagnostic. Une application comme Plantix compare votre photo à une banque d'images. Elle propose un nom, avec des photos et des conseils. C'est une hypothèse, à confirmer. »

**Scène 7 — B3 Notion · 1:15–1:35 · B**
- Visuel : carte ; pictogramme bulle avec trois points d'interrogation qui deviennent une liste.
- Écran : « 3. L'assistant prépare vos questions »
- VO : « Troisième règle : l'assistant prépare vos questions. Montrez les photos à un assistant comme Gemini. Il décrit ce qu'il voit, et liste des causes possibles. Il vous dit quoi observer, et quoi demander à l'agent. »

**Scène 8 — B3 Notion · 1:35–1:52 · C**
- Visuel : schéma « le chemin vers l'agent » : photos → téléphone → agent ; le bidon reste bloqué avant l'agent, puis passe après sa coche.
- Écran : « 4. Aucun traitement sans l'agent »
- VO : « Quatrième règle : aucun traitement sans l'agent. Photos, observations et questions partent chez lui. Lui seul confirme la cause. Lui seul indique le produit, la dose et la protection. »

**Scène 9 — B4 Application · 1:52–2:02 · G**
- Visuel : carte de consigne sur fond clair, texte complet ; chaque ligne s'allume pendant qu'elle est lue.
- Écran : la consigne complète (bloc « Consigne à copier » de la fiche).
- VO : « Voici la consigne pour l'assistant. Mettez la vidéo en pause pour la noter. »

**Scène 10 — B4 Application · 2:02–2:15 · A**
- Visuel : capture réelle (téléphone, Plantix) : choix de la culture, prise de la photo, analyse, puis la piste et les photos de comparaison ; défilement lent.
- Écran : « Plantix : photo → piste »
- VO : « Zeinabou ouvre Plantix et choisit l'oignon. Elle photographie la feuille malade. Une piste s'affiche, avec des photos à comparer. »

**Scène 11 — B4 Application · 2:15–2:32 · A**
- Visuel : capture réelle (Gemini) : les trois photos jointes, la consigne dictée, puis la réponse ; cadre sur les causes possibles, puis sur les questions pour l'agent.
- Écran : « 3 causes possibles + questions pour l'agent »
- VO : « Puis elle montre ses trois photos à Gemini, et dit la consigne. Gemini décrit les taches, et donne trois causes possibles. Il ajoute les questions pour l'agent. »

**Scène 12 — B4 Application · 2:32–2:48 · A**
- Visuel : capture réelle (WhatsApp) : les trois photos envoyées au contact « Agent (test) », puis l'enregistrement d'un message vocal ; coche d'envoi.
- Écran : « 3 photos + message vocal → agent »
- VO : « Zeinabou envoie tout à Abdoul-Aziz, sur WhatsApp. Les trois photos, et un message vocal. Elle y dit depuis quand, et combien de plantes sont touchées. »

**Scène 13 — B5 Consolidation · 2:48–3:01 · B**
- Visuel : carte question ; deux feuilles jaunies côte à côte, l'une marquée d'un microbe, l'autre d'une goutte barrée, mais cachées ; 3 s de silence après la question.
- Écran : « Malade ou manque d'eau ? »
- VO : « À vous de prédire. Deux feuilles jaunies. L'une est malade, l'autre manque d'eau. L'application fait-elle toujours la différence ? »

**Scène 14 — B5 Consolidation · 3:01–3:22 · C**
- Visuel : schéma : les deux feuilles se superposent et se confondent ; le cadre s'élargit à la plante entière, puis à la parcelle ; l'agent apparaît avec sa coche.
- Écran : « Toute la plante · la parcelle · l'agent »
- VO : « Pas toujours. Sur une seule feuille, les deux se ressemblent. Il faut voir la plante entière, et la parcelle. Il faut savoir s'il a plu, et si on a arrosé. Et il faut l'œil de l'agent. »

**Scène 15 — B6 Clôture · 3:22–3:33 · B (carte de rappel 1/2)**
- Visuel : Abdoul-Aziz dans les planches d'oignon avec Zeinabou ; la coche se pose ; la promesse s'inscrit.
- Écran : « Utiliser une photo pour préparer l'avis de l'agent »
- VO : « Le lendemain, Abdoul-Aziz passe et confirme la cause. Vous savez utiliser une photo pour préparer l'avis de l'agent. »

**Scène 16 — B6 Clôture · 3:33–3:45 · B (carte de rappel 2/2)**
- Visuel : carte de rappel, un pictogramme par point, révélés au rythme de la voix.
- Écran : « 2. Trois photos nettes » « 3. Une piste, pas un diagnostic » « 4. Aucun traitement sans l'agent »
- VO : « Retenez : trois photos, une piste, rien sans l'agent. Photographiez une plante malade et préparez le message à l'agent. »

#### Captures à fournir par l'owner

Outils : Plantix, Gemini et WhatsApp sur téléphone Android, en français. À masquer : barre d'état, notifications, avatar, numéros, photos de profil, toute localisation précise.

Plante : une plante réelle aux feuilles visiblement tachées ou jaunies, dans un jardin, une pépinière ou un champ proche. Si ce n'est pas un oignon, remplacer « oignon » par la vraie culture dans les VO des scènes 1 et 10 et dans l'illustration : la culture choisie dans Plantix doit être celle de la photo. **Ne jamais utiliser d'image de maladie trouvée en ligne ni générée.**

| Scène | Gestes exacts | Texte exact à dire ou taper | Durée utile |
|---|---|---|---|
| 5 | Appareil photo du téléphone : trois prises, la feuille de près, la plante entière, la parcelle ; en plein jour, sans ombre. | — | 3 × 3 s |
| 6, 10 | Plantix : choisir la culture, photographier la feuille, attendre le résultat ; filmer tout le geste puis défilement lent du résultat. Ne pas filmer de nom de produit ni de dose : arrêter le défilement avant les traitements chimiques. | — | 20 s |
| 11 | Gemini : nouvelle conversation, joindre les trois photos, toucher le micro, dire la consigne, envoyer ; filmer la réponse. | « Voici des photos de mes oignons, près de Tahoua. Depuis cinq jours, je vois des taches sur les feuilles. Décris simplement ce que tu vois sur les photos. Donne trois causes possibles, sans choisir à la place de mon agent de vulgarisation. Dis-moi quoi observer dans mon champ, et quelles questions lui poser. Ne me conseille aucun produit et aucune dose. » | 20 s |
| 12 | WhatsApp : contact de test « Agent (test) » ; envoyer les trois photos, puis enregistrer un message vocal de 5 s. | Message vocal : « Bonjour, voici mes oignons. Les taches sont là depuis cinq jours, sur une dizaine de plantes. » | 10 s |

#### Notes de script

- Prononciation : Plantix « plan-tix ».
- Plantix : application gratuite de diagnostic par photo ; son éditeur annonce une vingtaine de langues, dont le français, et une liste de cultures où figurent l'oignon, le mil et le sorgho (le niébé n'y figurait pas lors de la vérification). Disponibilité au Niger et présence du haoussa non confirmées [à vérifier au moment de la production]. Si Plantix n'est pas disponible, faire la démonstration avec Gemini seul et adapter les scènes 6 et 10.
- Le résultat de Plantix peut proposer des traitements chimiques : ne jamais les filmer ni les lire.
- Scène 11 : la VO suit la réponse réelle ; si Gemini propose malgré tout un produit, croix sur ce passage et rappel de la règle 4.
- Illustrations : taches stylisées, jamais réalistes.
- Adaptation HA (prioritaire) : bien distinguer « piste » (indication) et « diagnostic » (confirmation de l'agent) avec deux mots simples et différents [à valider par le relecteur HA] ; oignon (albasa). EN : « une piste » → « a lead, not a diagnosis ». DJE : même distinction, relecteur zarma.

### Leçon 3 — Météo : la source officielle d'abord (`ac3`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez comprendre le bulletin météo officiel avec l'IA. »
- **Cas réel (B1 → B6)** : Issoufou, président de la coopérative (cas fictif). À la radio, il entend la prévision de la saison des pluies : « cumuls excédentaires », « fin de saison tardive ». Il ne comprend pas tout, et quarante membres attendent ses conseils pour semer. Il pense demander à l'IA s'il va pleuvoir. En B6, à la réunion sous l'arbre, il explique le bulletin en mots simples, puis Abdoul-Aziz donne ses conseils de semis. Devient le champ `example` de la leçon.
- **Unités de notion (B3)** : 1. La source officielle d'abord — le service météorologique national publie la prévision de la saison des pluies ; pendant la saison, des bulletins tous les dix jours ; la radio et l'agent les relaient. · 2. Une tendance, pas une date — la prévision de saison dit si la pluie sera plutôt abondante ou faible, si la saison commence ou finit tôt ou tard ; elle ne dit pas quel jour il pleuvra. · 3. L'IA explique, elle ne prévoit pas — on lui donne le bulletin, elle traduit les mots difficiles ; on ne lui demande pas de prévision. · 4. Les dates avec l'agent — date de semis et choix de la variété se décident avec l'agent, qui connaît les sols et les conseils officiels de l'année.
- **Démo (B4)** : 1. Issoufou reçoit de l'agent, sur WhatsApp, le dernier bulletin officiel en PDF (publié par le service météorologique national ; relayé notamment par le site du Réseau national des chambres d'agriculture du Niger, RECA) [dernier bulletin disponible et canal à vérifier au moment de la production]. 2. Gemini (téléphone) : joindre le PDF, dire la consigne de la carte G. 3. Réponse : cinq phrases simples, les mots difficiles expliqués (« excédentaire » : plus de pluie que d'habitude), trois questions pour l'agent, aucune prévision ajoutée. 4. Issoufou vérifie chaque phrase contre le bulletin. 5. Relance : « Redis-le en trois phrases, pour un message vocal. » Résultat attendu à l'écran : une explication courte et fidèle, trois questions.
- **Consolidation (B5)** : prédiction. « Le bulletin annonce plus de pluie que d'habitude. Faut-il semer dès la première pluie ? » — 3 s de silence — « Pas forcément. Une saison pluvieuse peut commencer tard, ou avoir des pauses sèches. Le bulletin donne une tendance ; la date de semis se décide avec l'agent. »
- **Consigne à copier** :

```text
Voici le bulletin météo officiel pour [région ou pays], publié le [date] par [organisme] :
"""
[collez le texte, ou joignez le fichier ou la photo du bulletin]
"""
Explique-le en 5 phrases simples, pour un agriculteur qui cultive [culture].
Explique les mots difficiles, comme [mot].
Ne fais aucune prévision toi-même : dis seulement ce que dit le bulletin.
Donne-moi 3 questions à poser à mon agent de vulgarisation.
```

- **Exercice** : « Expliquez le dernier bulletin météo à votre famille » — 1. Trouvez le dernier bulletin officiel (radio, agent de vulgarisation, chambre d'agriculture). 2. Faites-le expliquer par l'assistant avec la consigne, sans lui demander de prévision. 3. Posez les trois questions à votre agent. 4. Expliquez le bulletin et la réponse de l'agent à votre famille, en trois phrases.
- **Carte de rappel** : 1. Comprendre le bulletin météo officiel avec l'IA · 2. La source officielle d'abord · 3. Une tendance, pas une date · 4. Les dates avec l'agent
- **Quiz** :
  1. Où trouver la prévision de la saison des pluies ? — A) Dans une réponse de l'IA B) Auprès du service météorologique national, relayé par la radio et l'agent C) Dans un groupe de discussion inconnu D) Dans un jeu sur le téléphone — **Réponse : B**
  2. Une prévision de saison dit… — A) la tendance : plus ou moins de pluie que d'habitude, début et fin de saison B) le jour exact de chaque pluie C) la date de semis de chaque champ D) le prix du mil — **Réponse : A**
  3. Que demander à l'IA, avec le bulletin ? — A) Une prévision pour demain B) Le jour de la prochaine pluie C) Une explication en mots simples, sans prévision ajoutée D) De remplacer le bulletin — **Réponse : C**
  4. Avec qui fixer la date de semis ? — A) Avec l'IA B) Avec le bulletin seul C) Avec le premier voisin qui sème D) Avec votre agent de vulgarisation — **Réponse : D**
  5. Dans un bulletin, « excédentaire » veut dire… — A) plus de pluie que d'habitude B) moins de pluie que d'habitude C) pas de pluie du tout D) une pluie dangereuse — **Réponse : A**
- **Marques citées** : Gemini, WhatsApp

#### Script v1 (à valider par l'owner)

Durée estimée : 3:47 · Mots de voix off : 365

**Scène 1 — B1 Accroche · 0:00–0:09 · E**
- Visuel : illustration à plat ; Issoufou sous un arbre, un poste de radio à l'oreille ; ciel chargé de nuages, pictogramme pluie.
- Écran : « Radio · prévision de saison »
- VO : « Leçon deux : la photo donne une piste. Issoufou écoute la prévision de saison à la radio. »

**Scène 2 — B1 Accroche · 0:09–0:18 · B**
- Visuel : carte typographique ; pictogrammes nuage et page ; la promesse s'inscrit.
- Écran : « Comprendre le bulletin météo officiel »
- VO : « À la fin de cette leçon, vous saurez comprendre le bulletin météo officiel avec l'IA. »

**Scène 3 — B2 Cadrage · 0:18–0:31 · B**
- Visuel : carte ; deux bulles de radio avec les mots « excédentaires » et « tardive », puis un point d'interrogation au-dessus d'Issoufou.
- Écran : « « Excédentaire » ? « Tardive » ? »
- VO : « À la radio : cumuls excédentaires, fin de saison tardive. Issoufou ne comprend pas tout. Il pense demander à l'IA s'il va pleuvoir. »

**Scène 4 — B2 Cadrage · 0:31–0:50 · B**
- Visuel : carte en deux colonnes : la bulle de l'assistant, barrée ; la page du bulletin officiel, cochée.
- Écran : « Un assistant n'est pas un service météo »
- VO : « Mauvaise idée. Un assistant n'est pas un service météo. Il peut donner une prévision trouvée en ligne. Sans toujours dire d'où elle vient. La prévision officielle, elle, est faite pour le Niger. »

**Scène 5 — B3 Notion · 0:50–1:10 · A**
- Visuel : capture réelle : la première page du bulletin officiel ouverte sur le téléphone ; cadre sur l'en-tête de l'organisme, puis sur le titre.
- Écran : « 1. La source officielle d'abord »
- VO : « Première règle : la source officielle d'abord. Le service météo national publie la prévision de la saison des pluies. Pendant la saison, des bulletins arrivent tous les dix jours. La radio et l'agent les relaient. »

**Scène 6 — B3 Notion · 1:10–1:32 · C**
- Visuel : schéma « la balance » : trois niveaux de pluie (moins · comme d'habitude · plus), puis deux flèches début et fin de saison ; un calendrier dont les jours restent vides, barré d'une croix.
- Écran : « 2. Une tendance, pas une date »
- VO : « Deuxième règle : une tendance, pas une date. La prévision dit si la pluie sera plutôt abondante, ou faible. Elle dit si la saison commence ou finit tôt ou tard. Elle ne dit pas quel jour il pleuvra. »

**Scène 7 — B3 Notion · 1:32–1:49 · A**
- Visuel : capture réelle (Gemini) : le passage de la réponse qui explique un mot difficile du bulletin ; cadre sur le mot, puis sur son explication.
- Écran : « 3. L'IA explique, elle ne prévoit pas »
- VO : « Troisième règle : l'IA explique, elle ne prévoit pas. Vous lui donnez le bulletin. Elle traduit les mots difficiles en mots simples. Excédentaire, par exemple : plus de pluie que d'habitude. »

**Scène 8 — B3 Notion · 1:49–2:05 · A**
- Visuel : capture réelle (WhatsApp) : un message vocal envoyé au contact « Agent (test) » ; pictogrammes sac de semences et calendrier qui rejoignent l'agent.
- Écran : « 4. Les dates avec l'agent »
- VO : « Quatrième règle : les dates avec l'agent. Quand semer ? Quelle variété choisir ? C'est avec lui que vous décidez. Il connaît vos sols, et les conseils officiels de l'année. »

**Scène 9 — B4 Application · 2:05–2:14 · G**
- Visuel : carte de consigne sur fond clair, texte complet ; la ligne « Ne fais aucune prévision toi-même » est encadrée.
- Écran : la consigne complète (bloc « Consigne à copier » de la fiche).
- VO : « Voici la consigne. Mettez la vidéo en pause pour la noter. »

**Scène 10 — B4 Application · 2:14–2:26 · A**
- Visuel : capture réelle : le PDF reçu sur WhatsApp, puis joint dans Gemini ; le micro touché, la consigne dictée, l'envoi.
- Écran : « Bulletin joint + consigne dictée »
- VO : « Issoufou reçoit le bulletin de l'agent, sur WhatsApp. Il le joint dans Gemini. Puis il dit la consigne. »

**Scène 11 — B4 Application · 2:26–2:39 · A**
- Visuel : capture réelle : la réponse ; cadre sur les cinq phrases, puis sur les trois questions ; coche « aucune prévision ajoutée ».
- Écran : « 5 phrases simples · 3 questions »
- VO : « La réponse arrive : cinq phrases simples. Les mots difficiles sont expliqués. Puis trois questions pour l'agent. Aucune prévision ajoutée. »

**Scène 12 — B4 Application · 2:39–2:53 · A**
- Visuel : capture réelle : le bulletin et la réponse alternés, une coche par phrase vérifiée ; puis la relance et la version en trois phrases.
- Écran : « Chaque phrase vérifiée dans le bulletin »
- VO : « Issoufou vérifie : chaque phrase correspond-elle au bulletin ? Puis il demande une version en trois phrases. Pour un message vocal aux membres. »

**Scène 13 — B5 Consolidation · 2:53–3:06 · B**
- Visuel : carte question ; pictogramme pluie avec une flèche vers le haut, puis un sac de semences et un point d'interrogation ; 3 s de silence après la question.
- Écran : « Plus de pluie : semer tout de suite ? »
- VO : « À vous de prédire. Le bulletin annonce plus de pluie que d'habitude. Faut-il semer dès la première pluie ? »

**Scène 14 — B5 Consolidation · 3:06–3:23 · C**
- Visuel : schéma : une frise de saison ; un départ tardif, puis deux trous secs au milieu des pluies ; l'agent pose la date de semis sur la frise.
- Écran : « Départ tardif, pauses sèches : la date avec l'agent »
- VO : « Pas forcément. Une saison pluvieuse peut commencer tard. Elle peut aussi avoir des pauses sèches. Le bulletin donne une tendance. La date de semis se décide avec l'agent. »

**Scène 15 — B6 Clôture · 3:23–3:35 · B (carte de rappel 1/2)**
- Visuel : réunion sous l'arbre ; Issoufou parle, puis Abdoul-Aziz ; la coche se pose ; la promesse s'inscrit.
- Écran : « Comprendre le bulletin météo officiel avec l'IA »
- VO : « À la réunion, Issoufou explique le bulletin. Puis l'agent donne ses conseils. Vous savez comprendre le bulletin officiel avec l'IA. »

**Scène 16 — B6 Clôture · 3:35–3:47 · B (carte de rappel 2/2)**
- Visuel : carte de rappel, un pictogramme par point, révélés au rythme de la voix.
- Écran : « 2. La source officielle d'abord » « 3. Une tendance, pas une date » « 4. Les dates avec l'agent »
- VO : « Retenez : la source officielle, une tendance, les dates avec l'agent. Expliquez le dernier bulletin météo à votre famille. »

#### Captures à fournir par l'owner

Outils : WhatsApp et Gemini sur téléphone Android, en français. À masquer : barre d'état, notifications, avatar, numéros, photos de profil.

Document : le dernier bulletin officiel du service météorologique national du Niger en PDF (prévision saisonnière, ou bulletin décadaire pendant la saison des pluies), obtenu par un canal officiel : service météorologique, agent de vulgarisation, ou site du RECA qui le relaie [à vérifier au moment de la production]. Document public : rien à masquer.

| Scène | Gestes exacts | Texte exact à dire ou taper | Durée utile |
|---|---|---|---|
| 5 | Ouvrir le PDF sur le téléphone ; capture fixe de la première page (en-tête lisible). | — | 4 s |
| 10 | Envoyer le PDF depuis un second téléphone vers le compte de démonstration (contact « Agent (test) ») ; l'ouvrir dans WhatsApp ; ouvrir Gemini, joindre le fichier, toucher le micro, dire la consigne, envoyer. | « Voici le bulletin météo officiel du Niger. Explique-le en cinq phrases simples, pour un agriculteur qui cultive le mil. Explique les mots difficiles, comme “excédentaire”. Ne fais aucune prévision toi-même : dis seulement ce que dit le bulletin. Donne-moi trois questions à poser à mon agent de vulgarisation. » | 25 s |
| 7, 11 | Filmer la réponse en défilement lent ; capture fixe du passage qui explique le mot difficile. | — | 15 s |
| 12 | Relance tapée ou dite, envoi, filmer la version courte. | « Redis-le en trois phrases, pour un message vocal. » | 8 s |
| 8 | WhatsApp : contact « Agent (test) », enregistrer un message vocal de 5 s, envoyer. | Dire les trois questions obtenues | 6 s |

Si le mot « excédentaire » n'apparaît pas dans le bulletin utilisé, remplacer dans la consigne et dans la VO de la scène 7 par un autre mot difficile du bulletin, et garder son explication exacte.

#### Notes de script

- Nom de l'organisme : le bulletin de prévision saisonnière 2026 porte « Direction Nationale de la Météorologie » (Ministère des Transports et de l'Aviation civile), d'autres documents disent « Direction de la Météorologie Nationale ». La VO dit « le service météo national » ; à l'écran, « Météo nationale du Niger » [nom exact à vérifier au moment de la production].
- Pour l'owner (pas pour la VO) : la prévision saisonnière nationale s'appuie sur le forum régional PRESASS, coordonné par le centre AGRHYMET du CILSS avec les services météorologiques nationaux (édition 2026 tenue en avril) ; pendant la saison des pluies, un groupe de travail pluridisciplinaire publie un bulletin agro-hydro-météorologique tous les dix jours, en français.
- Le bulletin de 2026 précise lui-même que sa prévision est qualitative et ne donne pas la répartition des pluies dans le temps : c'est l'appui de l'unité 2.
- Aucune valeur de prévision dite à l'oral : la capture montre le vrai bulletin, la VO reste générale.
- Ne jamais demander de prévision à l'IA dans les captures.
- Terme glosé : « excédentaire » (scène 7) ; « pauses sèches » (scène 14) se comprend par le schéma.
- Adaptation HA (prioritaire) : expliquer « excédentaire » par une périphrase (« plus de pluie que d'habitude ») plutôt que par un mot savant ; saison des pluies (damina) [à valider par le relecteur HA]. EN : « seasonal forecast », « ten-day bulletin », « extension officer ». DJE : périphrase équivalente, relecteur zarma.

### Leçon 4 — Prix du marché et calcul de marge (`ac4`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez comparer les prix et calculer votre marge avant de vendre. »
- **Cas réel (B1 → B6)** : Zeinabou (cas fictif). Après la récolte, un commerçant passe au village et propose un prix pour ses sacs de niébé, « valable aujourd'hui seulement ». Elle ne sait pas si c'est un bon prix. En B6, elle compare avec le bulletin des prix du marché, calcule ce qu'il lui resterait en vendant à Tahoua, vérifie à la calculatrice, et décide en connaissance de cause avec la coopérative. Les montants de la leçon sont **fictifs**. Devient le champ `example` de la leçon.
- **Unités de notion (B3)** : 1. Comparer ce qui est comparable — même produit, même unité (le sac), même marché, même date ; sinon la comparaison est fausse. · 2. Les prix officiels d'abord — le système d'information sur les marchés agricoles (SIMA, Ministère du Commerce) publie les prix relevés sur les marchés ; la radio et l'agent les relaient. · 3. La marge : ce qui vous reste — prix de vente moins transport et frais ; l'IA aide à poser le calcul. · 4. Refaire le calcul soi-même — à la calculatrice du téléphone ; une IA peut se tromper dans un calcul.
- **Démo (B4)** : 1. Zeinabou ouvre le dernier bulletin des prix (PDF) reçu de l'agent ou de la coopérative [bulletin, canal de diffusion et fréquence à vérifier au moment de la production]. 2. Gemini (téléphone) : elle dit la consigne de la carte G avec ses chiffres fictifs. 3. La réponse : un tableau « vendre au village / vendre à Tahoua », avec le calcul détaillé. 4. Elle refait le calcul à la calculatrice du téléphone, ligne par ligne, une coche par ligne. 5. Elle ajoute ce que le calcul ne dit pas (jour de marché, risque, délai de paiement) et envoie le résultat à Issoufou en message vocal. Résultat attendu à l'écran : un tableau, un écart par sac, une décision à discuter.
- **Consolidation (B5)** : contre-exemple. « Le prix du bulletin est celui du marché de gros d'une autre région, pour un autre produit. Peut-on comparer ? » — 3 s de silence — « Non. Un prix n'est comparable que pour le même produit, la même unité, le même marché, la même période. Sinon, le calcul est exact et la conclusion fausse. »
- **Consigne à copier** :

```text
Je vends [produit] en sacs de [poids]. Un commerçant m'offre [prix proposé] FCFA le sac au village.
Le bulletin officiel des prix indique [prix du marché] FCFA le sac à [marché], pour la période [date].
Le transport coûte [transport] FCFA par sac et les frais de marché [frais] FCFA par sac.
Fais un tableau : vendre au village / vendre au marché.
Montre chaque calcul, ligne par ligne.
Dis-moi ce que ce calcul ne prend pas en compte.
```

- **Exercice** : « Calculez votre marge avant votre prochaine vente » — 1. Notez le prix qu'on vous propose, pour un produit, une unité et un jour précis. 2. Retrouvez le prix officiel du même produit, de la même unité, pour la même période. 3. Faites poser le tableau et la marge par l'assistant, puis refaites chaque ligne à la calculatrice. 4. Discutez la décision avec votre coopérative avant de vendre.
- **Carte de rappel** : 1. Comparer les prix et calculer votre marge avant de vendre · 2. Même produit, même unité, même jour · 3. La source officielle d'abord · 4. Refaire le calcul vous-même
- **Quiz** :
  1. Deux prix sont comparables si… — A) ils sont écrits sur le même papier B) ils concernent le même produit, la même unité, le même marché et la même période C) ils viennent de la même personne D) ils sont ronds — **Réponse : B**
  2. Où trouver les prix relevés sur les marchés ? — A) Dans un message transféré sans source B) Dans une réponse de l'IA sans source C) Dans le bulletin du système d'information sur les marchés agricoles, relayé par la radio et l'agent D) Auprès du commerçant qui achète — **Réponse : C**
  3. La marge, c'est… — A) le prix proposé B) le prix de vente moins le transport et les frais C) le prix du bulletin D) le poids du sac — **Réponse : B**
  4. L'IA a calculé la marge. Que faites-vous ? — A) Vous la croyez B) Vous lui demandez si elle est sûre C) Vous refaites le calcul à la calculatrice D) Vous vendez tout de suite — **Réponse : C**
  5. Que ne dit pas le tableau de l'IA ? — A) Le total des frais B) Le prix par sac C) Le risque, le jour de marché, le délai de paiement D) Le produit vendu — **Réponse : C**
- **Marques citées** : Gemini, WhatsApp

#### Script v1 (à valider par l'owner)

Durée estimée : 4:09 · Mots de voix off : 407

**Scène 1 — B1 Accroche · 0:00–0:09 · E**
- Visuel : illustration à plat ; cour de la maison ; sacs de niébé empilés ; un commerçant montre un billet à Zeinabou.
- Écran : « Après la récolte · un prix, aujourd'hui seulement »
- VO : « Leçon trois : le bulletin météo officiel. Après la récolte, un commerçant propose un prix à Zeinabou. »

**Scène 2 — B1 Accroche · 0:09–0:20 · B**
- Visuel : carte typographique ; pictogrammes sac, billet, calculatrice ; la promesse s'inscrit.
- Écran : « Comparer les prix, calculer votre marge »
- VO : « À la fin de cette leçon, vous saurez comparer les prix et calculer votre marge avant de vendre. »

**Scène 3 — B2 Cadrage · 0:20–0:35 · B**
- Visuel : carte ; un sac, deux billets de montants différents, un point d'interrogation.
- Écran : « Un bon prix ? Comparé à quoi ? »
- VO : « Il dit : prix valable aujourd'hui seulement. Zeinabou ne sait pas si c'est un bon prix. Un prix seul ne veut rien dire. Il faut le comparer. »

**Scène 4 — B2 Cadrage · 0:35–0:50 · B**
- Visuel : carte ; deux pictogrammes côte à côte, « village » avec un billet, « marché » avec un billet, un camion et une main de frais.
- Écran : « Village ou marché : ce qu'il reste »
- VO : « Vendre au marché rapporte souvent plus. Mais le transport coûte, et les frais aussi. Ce qui compte, c'est ce qu'il vous reste dans la main. »

**Scène 5 — B3 Notion · 0:50–1:08 · C**
- Visuel : schéma : quatre cases qui doivent correspondre : produit, unité, marché, date ; une coche quand elles correspondent, une croix quand une case diffère.
- Écran : « 1. Même produit · même unité · même marché · même date »
- VO : « Première règle : comparer ce qui est comparable. Le même produit. La même unité : le sac. Le même marché. La même période. Si une seule case change, la comparaison est fausse. »

**Scène 6 — B3 Notion · 1:08–1:30 · A**
- Visuel : capture réelle : la première page du bulletin des prix ouverte sur le téléphone ; cadre sur l'en-tête de l'organisme, puis sur la ligne du produit.
- Écran : « 2. Les prix officiels d'abord »
- VO : « Deuxième règle : les prix officiels d'abord. Au Niger, le système d'information sur les marchés agricoles relève les prix. Il publie des bulletins. La radio et votre agent les relaient. Vous pouvez aussi demander le bulletin à votre coopérative. »

**Scène 7 — B3 Notion · 1:30–1:46 · C**
- Visuel : schéma : prix de vente, puis deux soustractions successives, transport puis frais ; le reste s'encadre en couleur et en forme de pastille « marge ».
- Écran : « 3. Prix de vente − transport − frais = marge »
- VO : « Troisième règle : la marge. C'est le prix de vente, moins le transport, moins les frais. Le reste, c'est votre gain. L'IA peut poser ce calcul avec vous. »

**Scène 8 — B3 Notion · 1:46–2:04 · A**
- Visuel : capture réelle : une ligne de calcul dans la réponse de l'IA, cadre dessus ; puis la calculatrice du téléphone qui refait la même soustraction ; coche.
- Écran : « 4. Refaire le calcul vous-même »
- VO : « Quatrième règle : refaire le calcul vous-même. Avec la calculatrice du téléphone. Une IA peut se tromper dans un calcul, sans prévenir. Un chiffre faux coûte cher. Alors, on vérifie chaque ligne. »

**Scène 9 — B4 Application · 2:04–2:16 · G**
- Visuel : carte de consigne sur fond clair, texte complet ; mention « exemple fictif » en bas.
- Écran : la consigne complète (bloc « Consigne à copier » de la fiche).
- VO : « Voici la consigne. Les montants sont inventés pour l'exemple. Mettez la vidéo en pause pour la noter. »

**Scène 10 — B4 Application · 2:16–2:32 · A**
- Visuel : capture réelle : le bulletin des prix, puis Gemini avec la consigne dictée ; le tableau qui s'affiche. Mention « chiffres fictifs ».
- Écran : « Bulletin + consigne → tableau »
- VO : « Zeinabou lit le bulletin. Puis elle dit sa consigne à Gemini. Le commerçant offre trente mille francs le sac. Le marché de Tahoua, trente-huit mille. »

**Scène 11 — B4 Application · 2:32–2:50 · A**
- Visuel : capture réelle : le tableau « village / marché » ; cadre sur la ligne du reste net de chaque colonne.
- Écran : « Village : 30 000 · Marché : 34 000 (fictif) »
- VO : « Le tableau arrive. Au village : trente mille francs. Au marché, après trois mille de transport et mille de frais : trente-quatre mille. Un écart de quatre mille francs par sac. »

**Scène 12 — B4 Application · 2:50–3:11 · A**
- Visuel : capture réelle : la calculatrice du téléphone ; trois lignes refaites une à une, une coche chacune ; puis l'ajout « jour de marché, risque, délai de paiement ».
- Écran : « Calcul refait ✓ ✓ ✓ »
- VO : « Elle refait chaque ligne, à la calculatrice. Trois coches. Puis elle pense à ce que le calcul ne dit pas. Le jour du marché. Le risque. Le délai de paiement. Elle en parle à Issoufou. »

**Scène 13 — B5 Consolidation · 3:11–3:25 · C**
- Visuel : schéma : deux marchés de régions différentes, deux produits différents, reliés par un signe « = ? » ; 3 s de silence après la question.
- Écran : « Autre région, autre produit : comparer ? »
- VO : « À vous de prédire. Le prix du bulletin est celui d'une autre région, pour un autre produit. Peut-on comparer ? »

**Scène 14 — B5 Consolidation · 3:25–3:44 · B**
- Visuel : carte ; quatre pictogrammes produit, unité, marché, date ; deux sont barrés d'une croix ; puis une croix sur le résultat.
- Écran : « Calcul exact, conclusion fausse »
- VO : « Non. Un prix ne se compare que pour le même produit, la même unité. Et pour le même marché, la même période. Sinon, le calcul est exact. Mais la conclusion est fausse. »

**Scène 15 — B6 Clôture · 3:44–3:56 · B (carte de rappel 1/2)**
- Visuel : Zeinabou et Issoufou devant les sacs, le téléphone en main ; la coche se pose ; la promesse s'inscrit.
- Écran : « Comparer les prix et calculer votre marge avant de vendre »
- VO : « Zeinabou décide avec sa coopérative, chiffres en main. Vous savez comparer les prix et calculer votre marge avant de vendre. »

**Scène 16 — B6 Clôture · 3:56–4:09 · B (carte de rappel 2/2)**
- Visuel : carte de rappel, un pictogramme par point, révélés au rythme de la voix.
- Écran : « 2. Même produit, unité, jour » « 3. Source officielle » « 4. Calcul refait »
- VO : « Retenez : mêmes produit, unité et jour. La source officielle. Le calcul refait. Calculez votre marge avant votre prochaine vente. »

#### Captures à fournir par l'owner

Outils : Gemini, WhatsApp et la calculatrice du téléphone, Android, en français. À masquer : barre d'état, notifications, avatar, numéros. Les montants du tableau sont **fictifs** : le bulletin réel est montré pour son en-tête et la ligne du produit, la consigne utilise les montants fictifs de la fiche, et la mention « chiffres fictifs » est ajoutée au montage sur chaque plan concerné.

| Scène | Gestes exacts | Texte exact à dire ou taper | Durée utile |
|---|---|---|---|
| 6 | Ouvrir sur le téléphone le dernier bulletin officiel des prix des marchés agricoles (PDF obtenu de l'agent, de la coopérative ou du site de l'organisme) ; capture fixe de la première page, puis de la ligne du produit (niébé) [bulletin et canal à vérifier au moment de la production]. | — | 8 s |
| 10, 11 | Gemini : nouvelle conversation, toucher le micro, dire la consigne, envoyer ; filmer l'arrivée du tableau, puis capture fixe du tableau. | « Je vends du niébé en sacs de cent kilos. Un commerçant m'offre trente mille francs le sac au village. Le bulletin officiel indique trente-huit mille francs le sac à Tahoua, pour cette semaine. Le transport coûte trois mille francs par sac et les frais de marché mille francs par sac. Fais un tableau : vendre au village, vendre au marché. Montre chaque calcul, ligne par ligne. Dis-moi ce que ce calcul ne prend pas en compte. » | 25 s |
| 12 | Calculatrice du téléphone : taper 38000 − 3000 − 1000, résultat ; puis la même soustraction côté village. Filmer l'écran. | — | 10 s |
| 8 | Capture fixe d'une ligne de calcul de la réponse de Gemini (scène 11), puis calculatrice du téléphone refaisant la même soustraction. | — | 8 s |

#### Notes de script

- Prononciation : SIMA « si-ma » (dit « le système d'information sur les marchés agricoles » à la première mention, puis « le SIMA » si besoin) ; Tahoua « ta-houa ».
- Le SIMA est un système du Ministère du Commerce, qui relève les prix sur de nombreux marchés et publie des bulletins ; fréquence, canal actuel (site, radio, SMS) et état du service en 2026 [à vérifier au moment de la production]. Ne pas promettre de service SMS.
- Les montants dits (trente mille, trente-huit mille, trois mille, mille, trente-quatre mille, quatre mille) sont fictifs : la VO de la scène 9 le dit, l'écran le répète. Aucun prix réel de marché n'est cité ; la scène 6 montre le vrai bulletin sans le commenter.
- Scène 11 : refaire le calcul avant le tournage ; si Gemini donne autre chose, montrer l'erreur et la corriger, puis adapter la VO.
- Hors du cours : le prix du jour peut aussi se demander à un commerçant de confiance et à d'autres producteurs ; l'IA ne connaît pas le prix du jour.
- Adaptation HA (prioritaire) : « sac » (buhun), « marge » à dire par « abin da ya rage maka » ou équivalent simple [à valider par le relecteur HA] ; les chiffres haoussa sont dits en lettres par la voix HA. EN : « margin = what's left in your hand ». DJE : relecteur zarma.

### Leçon 5 — Projet final : un conseil vocal en haoussa (`ac5`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez préparer un conseil vocal en haoussa, vérifié, pour votre coopérative. »
- **Cas réel (B1 → B6)** : Issoufou, président de la coopérative « Haɗin Kai » (cas fictif). Après la récolte d'oignon, Abdoul-Aziz lui donne un conseil de conservation. Quarante membres doivent le recevoir ; beaucoup lisent peu, tous écoutent leurs messages vocaux. Issoufou le leur envoie en haoussa, après vérification. En B6, Zeinabou écoute le message au champ, puis le réécoute pour le répéter à sa voisine. Devient le champ `example` de la leçon.
- **Unités de notion (B3)** : 1. Les cinq livrables — le conseil validé par l'agent ; le texte simple en français ; la version haoussa relue ; le message vocal ; la fiche d'une page. · 2. Un conseil, une idée, quatre phrases — l'agent donne le contenu ; l'IA aide à le dire simplement ; rien n'est ajouté. · 3. Le haoussa relu par un locuteur — la traduction de l'IA est un brouillon ; un lecteur du haoussa corrige ; la voix et les mots restent les vôtres. · 4. Cinq critères — exact (confirmé par l'agent), simple, relu, audible, responsable (aucun produit ni dose, aucune donnée personnelle).
- **Démo (B4)** : un projet réussi de bout en bout. 1. Le conseil écrit par l'agent (conservation de l'oignon) [texte fictif, à faire valider par un vrai agent avant le tournage]. 2. Gemini (téléphone) : consigne de la carte G ; retour : quatre phrases simples, puis une proposition en haoussa. 3. Rahila, institutrice du village, lit le haoussa, corrige deux mots (visibles à l'écran). 4. Issoufou enregistre le message vocal dans WhatsApp, en haoussa, et le réécoute. 5. Il l'envoie au groupe de la coopérative, avec la fiche d'une page : sujet, source, validé par, relu par, date. Résultat attendu à l'écran : texte relu, message envoyé, fiche remplie.
- **Consolidation (B5)** : contre-exemple. « Issoufou envoie la traduction de l'IA, sans la faire relire, avec un nom de produit ajouté. Que risque-t-il ? » — 3 s de silence — « Un mot faux peut changer le sens du conseil. Un produit ajouté, sans l'agent, peut être dangereux. Un conseil vocal engage celui qui l'envoie : tout passe par l'agent et le lecteur. »
- **Consigne à copier** :

```text
Voici le conseil que mon agent de vulgarisation m'a donné :
"""
[conseil de l'agent, mot pour mot]
"""
1. Réécris-le en 4 phrases très courtes, en français simple, pour des producteurs qui lisent peu. N'ajoute rien. Ne cite aucun produit ni aucune dose.
2. Propose une version en haoussa, en mots du quotidien.
3. Liste les mots dont tu n'es pas sûr, pour que je les fasse relire par un locuteur.
```

- **Exercice** : « Enregistrez et déposez votre conseil vocal en haoussa » — 1. Obtenez un conseil précis auprès de votre agent de vulgarisation, par écrit ou à l'oral. 2. Faites écrire le texte simple et la version haoussa avec la consigne, puis faites-les relire par un locuteur. 3. Enregistrez le message vocal, réécoutez-le, puis envoyez-le à votre coopérative. 4. Remplissez la fiche d'une page et déposez-la avec l'enregistrement sur la page du projet final [modalité de dépôt à confirmer sur la plateforme].
- **Carte de rappel** : *(la promesse s'affiche en titre au plan 1/2)* 1. Où, quoi, quand (leçon 1) · 2. Une photo est une piste (leçon 2) · 3. Le bulletin officiel d'abord (leçon 3) · 4. Même produit, même unité, même jour (leçon 4)
- **Quiz** :
  1. Qui fournit le contenu du conseil vocal ? — A) L'IA B) Un voisin C) Un message transféré D) L'agent de vulgarisation — **Réponse : D**
  2. Pourquoi faire relire la version haoussa ? — A) Pour la rendre plus longue B) Parce que la traduction de l'IA est un brouillon qui peut contenir des mots faux C) Parce que l'IA refuse de la corriger D) Pour changer le conseil — **Réponse : B**
  3. Que faire d'une photo de plante malade, avant de traiter ? — A) Traiter vite B) La publier C) La montrer à l'agent avec les questions préparées : c'est une piste, pas un diagnostic D) Attendre sans rien dire — **Réponse : C**
  4. Où chercher d'abord la météo de la saison ? — A) Dans le bulletin officiel, que l'IA peut expliquer B) Dans une prévision de l'IA C) Dans une rumeur D) Dans un jeu — **Réponse : A**
  5. Avant de comparer deux prix de sacs, que vérifier ? — A) Le même produit, la même unité, le même marché et la même période B) La couleur du sac C) Le nom du vendeur D) Rien — **Réponse : A**
- **Marques citées** : Gemini, WhatsApp

#### Script v1 (à valider par l'owner)

Durée estimée : 3:46 · Mots de voix off : 368

**Scène 1 — B1 Accroche · 0:00–0:09 · E**
- Visuel : illustration à plat ; Issoufou sous l'arbre, téléphone en main, entouré de membres de la coopérative ; sacs d'oignon à l'arrière-plan.
- Écran : « Coopérative Haɗin Kai · 40 membres »
- VO : « Leçon quatre : le calcul de la marge. Issoufou a un conseil à transmettre à quarante membres. »

**Scène 2 — B1 Accroche · 0:09–0:20 · B**
- Visuel : carte typographique ; pictogrammes haut-parleur et agent ; la promesse s'inscrit.
- Écran : « Un conseil vocal en haoussa, vérifié »
- VO : « À la fin de cette leçon, vous saurez préparer un conseil vocal en haoussa, vérifié, pour votre coopérative. »

**Scène 3 — B2 Cadrage · 0:20–0:46 · B**
- Visuel : carte ; un papier écrit, barré d'une croix ; un haut-parleur, coché.
- Écran : « Beaucoup écoutent, peu lisent »
- VO : « Un papier ne sera pas lu par tous. Un message vocal, si. Il faut le dire dans la langue de la coopérative. Et il faut qu'il soit juste. C'est votre projet final. Il valide ce cours, et il réunit tout ce que vous avez appris. »

**Scène 4 — B3 Notion · 0:46–1:06 · C**
- Visuel : schéma : cinq pastilles reliées en chaîne : agent → texte simple → haoussa relu → message vocal → fiche, chacune cochée à son tour.
- Écran : « 1. Cinq livrables »
- VO : « Votre projet a cinq livrables. Le conseil validé par l'agent. Le texte simple en français. La version haoussa, relue. Le message vocal. Et la fiche d'une page. Chaque livrable reprend une leçon du cours. »

**Scène 5 — B3 Notion · 1:06–1:24 · A**
- Visuel : capture réelle (Gemini) : le texte en quatre phrases ; cadre sur le nombre de phrases, puis la croix sur une phrase ajoutée par l'IA (si elle existe).
- Écran : « 2. Un conseil, une idée, quatre phrases »
- VO : « L'agent donne le contenu. L'IA aide à le dire simplement, en quatre phrases très courtes. Elle n'ajoute rien. Pas de produit, pas de dose. Le conseil reste celui de l'agent. »

**Scène 6 — B3 Notion · 1:24–1:40 · A**
- Visuel : capture réelle : la version haoussa proposée, une liste de mots incertains ; cadre sur la liste ; pictogramme loupe.
- Écran : « 3. Un locuteur relit toujours »
- VO : « Ensuite, l'IA propose une version en haoussa. C'est un brouillon. Elle liste les mots dont elle n'est pas sûre. Un lecteur du haoussa relit tout, et corrige. »

**Scène 7 — B3 Notion · 1:40–1:58 · C**
- Visuel : schéma : cinq cases à cocher, chacune avec son pictogramme : agent, phrase courte, loupe, haut-parleur, cadenas.
- Écran : « 4. Exact · Simple · Relu · Audible · Responsable »
- VO : « Cinq critères. Exact : l'agent l'a confirmé. Simple : des phrases courtes. Relu par un locuteur. Audible : voix claire, sans bruit. Responsable : aucune donnée personnelle, aucun produit. Relisez cette liste avant d'envoyer. »

**Scène 8 — B4 Application · 1:58–2:08 · A**
- Visuel : capture réelle : le conseil de l'agent reçu sur WhatsApp (texte ou vocal), puis Gemini avec la consigne de la carte G dictée.
- Écran : « Conseil de l'agent → consigne dictée »
- VO : « Abdoul-Aziz donne un conseil pour conserver l'oignon. Issoufou le colle dans Gemini, avec la consigne. »

**Scène 9 — B4 Application · 2:08–2:17 · G**
- Visuel : carte de consigne sur fond clair, texte complet ; les trois étapes surlignées l'une après l'autre.
- Écran : la consigne complète (bloc « Consigne à copier » de la fiche).
- VO : « Voici la consigne. Mettez la vidéo en pause pour la noter. »

**Scène 10 — B4 Application · 2:17–2:27 · A**
- Visuel : capture réelle : le texte simple en quatre phrases, puis la version haoussa et les mots incertains.
- Écran : « 4 phrases · version haoussa · mots incertains »
- VO : « La réponse arrive : quatre phrases courtes. Puis une version en haoussa, avec trois mots incertains. »

**Scène 11 — B4 Application · 2:27–2:37 · A**
- Visuel : capture réelle : la version haoussa relue, deux mots barrés et corrigés ; l'étiquette « relu par Rahila ».
- Écran : « Relu et corrigé par un locuteur ✓ »
- VO : « Rahila, l'institutrice du village, lit le haoussa. Elle corrige deux mots. Elle signe sa relecture. »

**Scène 12 — B4 Application · 2:37–2:52 · A**
- Visuel : capture réelle (WhatsApp) : enregistrement d'un message vocal, écoute de contrôle, envoi au groupe ; puis la fiche d'une page remplie.
- Écran : « Enregistrer · réécouter · envoyer »
- VO : « Issoufou enregistre le message, avec sa voix. Il le réécoute. Il l'envoie au groupe. Avec la fiche : sujet, source, validé par, relu par. »

**Scène 13 — B5 Consolidation · 2:52–3:06 · B**
- Visuel : carte question ; une bulle haoussa non relue, un bidon ajouté, un point d'interrogation ; 3 s de silence après la question.
- Écran : « Non relu, avec un produit ajouté ? »
- VO : « À vous de prédire. Issoufou envoie la traduction de l'IA, sans relecture. Avec un nom de produit ajouté. Que risque-t-il ? »

**Scène 14 — B5 Consolidation · 3:06–3:23 · C**
- Visuel : schéma « le chemin vers l'agent » : croix sur la bulle et le bidon ; le chemin agent → lecteur → vocal s'allume avec une coche.
- Écran : « Tout passe par l'agent et le lecteur »
- VO : « Un mot faux peut changer le sens du conseil. Un produit ajouté peut être dangereux. Un conseil engage celui qui l'envoie. Tout passe par l'agent, et par le lecteur. »

**Scène 15 — B6 Clôture · 3:23–3:30 · B (carte de rappel 1/2)**
- Visuel : Zeinabou, au champ, écoute le message, le répète à sa voisine ; la coche se pose ; la promesse s'inscrit.
- Écran : « Un conseil vocal en haoussa, vérifié, pour votre coopérative »
- VO : « Au champ, Zeinabou écoute le message. Vous savez préparer un conseil vocal, vérifié. »

**Scène 16 — B6 Clôture · 3:30–3:46 · B (carte de rappel 2/2)**
- Visuel : carte de rappel, un point par leçon, révélés au rythme de la voix ; ligne de dépôt dessous.
- Écran : « 1. Où, quoi, quand » « 2. Photo : piste » « 3. Bulletin d'abord » « 4. Même unité, même jour »
- VO : « Le cours en quatre gestes : où, quoi, quand. Une photo, une piste. Le bulletin officiel. Même produit, même unité. Enregistrez et déposez votre conseil vocal en haoussa. »

#### Captures à fournir par l'owner

Outils : WhatsApp et Gemini, téléphone Android, en français. À masquer : barre d'état, notifications, avatar, numéros, photos de profil, noms réels des membres du groupe (utiliser un groupe de test « Coopérative (test) »).

Conseil de l'agent (texte d'exemple, à faire valider par un vrai agent de vulgarisation avant le tournage) : « Pour garder les oignons plus longtemps : faites-les sécher quelques jours après la récolte. Triez : mettez de côté les bulbes abîmés. Gardez les autres à l'ombre, dans un endroit aéré. Vérifiez le tas chaque semaine. »

| Scène | Gestes exacts | Texte exact à dire ou taper | Durée utile |
|---|---|---|---|
| 8 | WhatsApp : message de test reçu de « Agent (test) » avec le texte ci-dessus ; le copier ; ouvrir Gemini, nouvelle conversation, coller. | — | 10 s |
| 5, 10 | Gemini : coller la consigne de la carte G ; envoyer ; filmer les quatre phrases, puis la version haoussa et les mots incertains. La saisie vocale en haoussa n'est pas montrée [à vérifier au moment de la production]. | Consigne de la carte G complétée avec le conseil ci-dessus | 20 s |
| 6, 11 | Une locutrice ou un locuteur du haoussa lit la proposition, corrige deux mots ; capture de la version corrigée (mode suggestion, ou deux versions côte à côte) avec la mention « relu par Rahila ». | — | 10 s |
| 12 | WhatsApp : dans le groupe de test, maintenir le micro, dire le message en haoussa lu sur le texte relu, relâcher, réécouter, envoyer. Puis capture de la fiche d'une page remplie. | Message : texte haoussa relu | 20 s |

Fiche d'une page (modèle à fournir aux apprenants) : sujet du conseil · source (nom de l'agent, date) · texte français simple · texte haoussa relu · relu par · date d'envoi · coopérative · note d'usage en trois lignes (ce que l'IA a fait, ce que vous avez vérifié, ce que vous avez corrigé).

#### Notes de script

- Prononciation : Haɗin Kai « ha-din kaï » (ɗ : d implosif) ; Rahila « ra-hi-la ».
- Le haoussa affiché à l'écran est celui **relu par le locuteur** ; la proposition brute reste marquée « brouillon ». Ne jamais montrer un haoussa non relu comme correct.
- Pas de saisie vocale en haoussa dans l'assistant à l'écran : sa prise en charge dans les assistants gratuits n'est pas confirmée [à vérifier au moment de la production]. L'enregistrement final est fait dans WhatsApp, par un humain.
- Le conseil de l'agent est un exemple générique de conservation, sans produit ni dose ; l'owner le fait valider par un agent réel avant tournage.
- Modalité de dépôt (fichier, audio WhatsApp, lien) [à confirmer sur la plateforme] ; adapter la ligne d'écran de la scène 16.
- Le cas de B1 se referme en scène 15.
- Adaptation HA (prioritaire) : la voix HA de cette leçon est produite en premier ; vérifier particulièrement « coopérative », « message vocal », « agent de vulgarisation » et les cinq critères [à valider par le relecteur HA]. EN : « extension officer », « voice message ». DJE : variante zarma de l'exemple (consigne et relecture en zarma) [à valider avec le relecteur DJE].

## 2.6 Captures et éléments à préparer

| Leçon | Élément | Comment l'obtenir | Qui |
|---|---|---|---|
| 1–5 | Illustrations des personas (Zeinabou, Issoufou, Abdoul-Aziz, Rahila) et décors (champ, planches d'oignon, cour, marché, réunion sous l'arbre) | Aplats selon 2.4, taches stylisées, sans imiter une personne réelle | Claude |
| 1–5 | Pictogrammes fixes, schémas (chemin vers l'agent, balance, deux colonnes) | Composants HyperFrames réutilisés d'une leçon à l'autre | Claude |
| 1 | Captures Gemini et WhatsApp : question sans contexte, consigne dictée, réponse lue à voix haute, message vocal à l'agent | Tableau de la leçon 1 (téléphone Android) | owner |
| 2 | Photos d'une vraie plante tachée (feuille, plante, parcelle) ; captures Plantix, Gemini, WhatsApp | Tableau de la leçon 2 ; jamais d'image trouvée en ligne ni générée | owner |
| 2 | Vérification de la disponibilité de Plantix au Niger, de ses langues et des cultures | Installer l'application le jour des captures ; sinon démonstration avec Gemini seul | owner |
| 3 | Dernier bulletin météo officiel (prévision saisonnière ou bulletin décadaire) en PDF | Service météorologique national, agent de vulgarisation ou site du RECA [à vérifier au moment de la production] | owner |
| 3 | Captures WhatsApp et Gemini : PDF joint, consigne, réponse, relance | Tableau de la leçon 3 | owner |
| 4 | Dernier bulletin officiel des prix des marchés (SIMA) | Agent, coopérative ou site de l'organisme [bulletin, canal et état du service à vérifier au moment de la production] | owner |
| 4 | Captures Gemini et calculatrice avec les montants fictifs de la leçon ; mention « chiffres fictifs » au montage | Tableau de la leçon 4 | owner + Claude |
| 5 | Conseil de conservation de l'oignon validé par un vrai agent de vulgarisation | Un agent du service agricole local | owner |
| 5 | Relecture de la version haoussa, corrections visibles ; enregistrement du message vocal d'exemple | Locuteur du haoussa (idéalement institutrice ou instituteur) ; groupe WhatsApp de test | owner (relecteur HA) |
| 5 | Modèle de fiche d'une page et modalité de dépôt (fichier, audio) | Décision de l'équipe plateforme (skill `karatou-course-creator`) | équipe Karatou |
| 1–5 | Voix HA produite en premier, puis EN et DJE ; relecture des notes d'adaptation | Relecteurs natifs ; vocabulaire agricole listé dans chaque leçon | owner |
| 1–5 | Version zarma de l'exemple de la leçon 5 | Même protocole, relecteur zarma | owner (relecteur DJE) |
