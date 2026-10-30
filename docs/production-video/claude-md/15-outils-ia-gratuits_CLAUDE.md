# CLAUDE.md — Karatou Academy · Production vidéo
# Cours 15 — Choisir le bon outil IA gratuit et installer une IA open source

> **Pour l'owner — mode d'emploi**
> 1. Créez un dossier vide sur votre ordinateur, par exemple `karatou-outils-ia-gratuits`.
> 2. Copiez-y ce fichier et renommez-le exactement `CLAUDE.md`.
> 3. Ouvrez Claude Code dans ce dossier (dans un terminal : `cd karatou-outils-ia-gratuits` puis `claude`).
> 4. Écrivez : **« On démarre. »**
>
> Claude vous demande d'abord le **design system de Karatou Academy**, puis vos fichiers (logo, photo, voix).
> Ensuite il produit les vidéos **une par une** et s'arrête à chaque validation. Pour reprendre plus tard,
> écrivez « On continue. » : l'avancement est noté dans `PROGRESS.md`.

| | |
|---|---|
| Format | Motion graphics et captures d'écran, voix off clonée de l'owner |
| Owner | Idriss (son nom et sa photo figurent sur les cartes présentateur ; voix clonée) |
| Vidéos | 7 vidéos · 3 à 5 min (cible 4:00) chacune |
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
livraison/outils-ia-gratuits/<id>/      fichiers livrés · livraison/outils-ia-gratuits/INTEGRATION.md
```

`<id>` est l'identifiant de la leçon (`og1`, `og2`…). Langues : `fr`, `en`, `ha`, `dje`.

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

### 9.2 Nommage et contenu de `livraison/outils-ia-gratuits/<id>/`

`outils-ia-gratuits_<id>_<langue>_v<n>.mp4` · `…-360.mp4` · `….srt` · `….vtt` · `…_cover.jpg` (1920 × 1080, qualité 85,
première image stable de B1) · `…_transcript.md` (un titre par temps, texte dit + actions à l'écran entre
crochets) · `RECETTE.md`.

### 9.3 Mise en ligne

Chaîne YouTube **Karatou Academy**, vidéos **non répertoriées**, une vidéo par langue, sous-titres `.srt` ajoutés
comme piste. Titre : « Karatou Academy — Choisir le bon outil IA gratuit et installer une IA open source — Leçon N : <titre> (<LANGUE>) ». Le site lit des **URL
d'intégration** : `https://www.youtube.com/embed/<ID>` (jamais `watch?v=` ni `youtu.be/`). Teste chaque URL dans un
navigateur avant de la consigner.

### 9.4 Intégration au site — `livraison/outils-ia-gratuits/INTEGRATION.md`

Le site lit, pour chaque leçon, un champ `video: { fr, en, ha }` dans les fichiers TypeScript du dépôt
`karatou-academy-app` (registre `authoredLessons`). Chaque leçon y a aussi un texte (objectif, quatre sections,
exemple, exercice, quiz de cinq questions, réflexion, glossaire), rédigé par l'équipe avec le skill
`karatou-course-creator`, et des lignes Supabase (module, leçons) pour la progression et les certificats.

Ton rôle : tenir `INTEGRATION.md` à jour, leçon par leçon : module `outils-ia-gratuits`, id, titre, promesse (objectif), cas
réel (exemple), exercice (titre et étapes), carte de rappel, quiz, marques citées, URL FR / EN / HA, et URL DJE
« en attente ». Ce fichier est remis à l'équipe technique ; tu ne modifies pas le dépôt du site.

### 9.5 Corrections après publication

Une URL publiée est figée. Pour corriger : nouvelle version `v2` → mise en ligne → nouvelle URL testée →
`INTEGRATION.md` mis à jour → l'équipe technique remplace l'URL → l'ancienne vidéo est rendue privée, jamais
supprimée. Consigne chaque version dans le journal de `PROGRESS.md`.

## 10. `PROGRESS.md` — modèle

```markdown
# PROGRESS — Cours 15 · Choisir le bon outil IA gratuit et installer une IA open source
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
| Numéro | 15 (fusionné le 25/10/2026 avec « Comment installer une IA gratuite », ligne sans numéro du Sheet, même owner) |
| Titre | Choisir le bon outil IA gratuit et installer une IA open source |
| Format | Motion graphics + captures d'écran, voix off (voix clonée de l'owner). Aucun tournage face caméra. |
| Owner / voix | Idriss — nom complet et titre exact demandés au premier lancement |
| Rubrique | Culture numérique |
| Public | Grand public d'Afrique francophone et au-delà : étudiants, commerçants et artisans, formateurs, agents d'ONG, fonctionnaires, qui utilisent l'IA sur téléphone, souvent en 3G, avec des outils gratuits. |
| Slug du module (provisoire) | `outils-ia-gratuits` |
| Préfixe des leçons | `og` (ex. `og1` … `og7`) |
| Nombre de vidéos | 7 (dont la dernière = projet final certifiant) |
| Durée par vidéo | 3–5 min (cible 4:00, 340 à 460 mots de voix off ; les leçons 5 et 6, ciblées à 4:30, vont jusqu'à environ 500 mots) |
| Langues | FR (référence) · EN · HA · DJE |
| Prérequis | Un téléphone Android ou un iPhone connecté ; pour la leçon 6, un ordinateur avec au moins 8 Go de mémoire vive au total (un petit modèle, autres applications fermées ; 16 Go au total conseillés pour un modèle « quatre B ») et de l'espace disque libre ; une adresse e-mail pour créer des comptes ; savoir installer une application. Aucun abonnement, aucune compétence technique. Conseillé avant : le cours 1 « L'IA expliquée simplement ». |
| Promesse du cours | Vous choisirez, pour chacune de vos tâches, un outil IA gratuit adapté, testé et réglé pour protéger vos données, et vous saurez installer une IA open source sur votre téléphone ou votre ordinateur pour l'utiliser hors connexion. |
| Positionnement | Guide pratique en deux volets. **En ligne** (leçons 1 à 4) : choisir, comparer, vérifier les sources, protéger ses données. **Installée** (leçons 5 et 6) : faire tourner un modèle open source sur son propre appareil, hors connexion, ses données restant chez soi. Le volet installé reprend le Weekend IA du 24 octobre 2026 « Comment installer une IA gratuite et Open Source ? » (transcription : `course-sources/transcription-live-installer-ia-open-source-2026-10-24.txt` sur la machine de l'owner). Aucun classement, aucun « outil gagnant » : les outils changent vite, la méthode reste. Complète la leçon « Outils IA pratiques » du module en ligne « Intelligence artificielle » sans la répéter. Renvoie au cours 10 (sécurité des comptes), au cours 12 (recherche documentaire) et au cours 2 (brancher un modèle local à un agent). |
| Fil rouge | Trois personas fictifs, dans trois pays. **Koffi**, étudiant en licence à **Lomé (Togo)**, révise sur son téléphone, souvent sans réseau dans le bus (leçons 1, 3, 5). **Hadiza**, couturière qui tient un atelier près du grand marché de **Zinder (Niger)**, vend à ses clientes sur WhatsApp, en français et en haoussa (leçons 2, 4). **Mariam**, formatrice dans un centre de formation professionnelle de **Ouagadougou (Burkina Faso)**, avec une connexion instable et les dossiers confidentiels de ses stagiaires (leçon 6). Leçon 7 : chacun présente sa boîte à outils ; celle de Hadiza sert d'exemple complet. Cas fictifs. Monnaie : FCFA. |
| Noms de modèles (exceptions au §5.9) | Le sujet du volet installé impose de nommer des **familles** de modèles ouverts : Gemma (Google), Qwen (Alibaba), Llama (Meta), Mistral (Mistral AI), DeepSeek, GPT-OSS (OpenAI). On cite les familles, **jamais un numéro de version** dans la voix. Les captures du live montrent des noms de versions : accepté à l'écran, à condition que la voix ne les lise pas. Tailles et disponibilités : [à vérifier au moment de la production]. Seconde exception, limitée au repère « l'application n'est pas le modèle » de la leçon 1 (scène 9) : les familles **GPT** (OpenAI), **Gemini** (Google) et **Claude** (Anthropic) peuvent y être citées comme modèles, toujours sans numéro de version ; partout ailleurs, ces noms désignent les applications. |
| Marques citées | Gemini, NotebookLM / Gemini Notebook, Google, Android, Play Store, Google AI Edge Gallery (Google) ; ChatGPT, GPT (OpenAI) ; Claude (Anthropic) ; Copilot, Windows, Edge, Bing (Microsoft) ; iPhone, App Store, Mac (Apple) ; Linux ; Perplexity ; WhatsApp (Meta) ; LM Studio ; PocketPal AI ; Hugging Face ; familles de modèles ouverts ci-dessus ; l'outil de documents utilisé en leçon 7 (ex. Google Docs). |
| Réutilisation du live du 24/10/2026 | Les démonstrations des leçons 5 et 6 réutilisent les **captures d'écran du live** (fichier `~/Downloads/Video Weekend IA/Weekend-IA - Installer une IA Gratuite - 2026_10_24 21_23 WAT - Recording.mp4`, 1280 × 720) : diapositive « Démo 2 · Sur téléphone » (vers 46:20), démonstration LM Studio (19:00–39:00 : recherche de modèle, fiche du modèle, téléchargement, chargement, chat, mémoire utilisée), Google AI Edge Gallery (40:00–48:00), Hugging Face (54:50–58:30). Recadrer sur la zone de partage d'écran ; **masquer la vignette des participants et tout nom de participant** (§5.9) ; la voix off est **régénérée** avec la voix clonée à partir des scripts (la voix du live n'est pas réutilisée, sauf extrait court de l'owner validé par lui). Une capture neuve n'est nécessaire que si un détail est illisible une fois recadré. |

## 2.2 Ce que l'apprenant saura faire

- Relier une tâche à l'une des cinq familles d'outils IA (assistants, recherche sourcée, image, audio, documents) et distinguer l'application (ChatGPT, Gemini, Claude) du modèle qui tourne derrière.
- Tester plusieurs assistants avec la même consigne RCTF, dans de nouvelles conversations, et choisir pour une tâche donnée à l'aide d'une grille de quatre critères.
- Obtenir une réponse sourcée et vérifier chaque source : qui parle, quand, et est-ce bien écrit dedans.
- Expliquer ce que l'on échange contre une version gratuite (données, attention, limites) et régler un assistant pour protéger ses données.
- Installer une IA open source sur son téléphone, choisir un modèle adapté à sa mémoire et l'utiliser hors connexion.
- Installer LM Studio sur un ordinateur, lire la taille d'un modèle (le « B » des milliards de paramètres) au regard de la mémoire vive, télécharger, charger et tester un modèle ; connaître ses limites et savoir où trouver d'autres modèles (Hugging Face).
- Construire et justifier une boîte à outils personnelle d'une page, avec au moins un outil installé et un plan B pour chaque tâche.

## 2.3 Plan du cours

Règle de titrage (client) : des titres **clairs et explicites**, qui disent ce que l'apprenant fait ou obtient.

| Leçon | Id | Titre | Promesse (objectif) | Cas réel (B1) | Démo (B4) | Durée cible |
|---|---|---|---|---|---|---|
| 1 | `og1` | Choisir la bonne famille d'outils IA pour chaque tâche | Vous saurez relier chaque tâche à une famille d'outils IA. | Koffi a cinq applications d'IA ; pour réviser un long cours en PDF, il le colle page par page dans un assistant. | NotebookLM / Gemini Notebook : déposer le PDF du cours, demander une fiche de révision, toucher une citation pour voir le passage. Unité de notion : l'application n'est pas le modèle. | 4:00 |
| 2 | `og2` | Comparer Gemini, ChatGPT, Claude et Copilot sur votre propre tâche | Vous saurez tester plusieurs assistants sur votre propre tâche. | Hadiza veut annoncer ses modèles de fête à ses clientes, en français et en haoussa ; on lui dit de prendre « celui que tout le monde utilise ». | Même consigne RCTF dans Gemini, ChatGPT, Claude et Copilot, chacun dans une nouvelle conversation ; grille des quatre critères ; choix pour cette tâche et plan B. | 4:00 |
| 3 | `og3` | Obtenir une réponse sourcée avec l'IA et vérifier chaque source | Vous saurez obtenir une réponse sourcée et vérifier ses sources. | Koffi cherche une bourse de master et sa date limite ; un assistant lui donne une date, sans source. | Perplexity : question précise, sources numérotées, une source officielle retenue, une source ancienne écartée, relance, information notée avec lien et date. | 4:00 |
| 4 | `og4` | IA gratuite ou payante : ce que vous échangez vraiment, et comment protéger vos données | Vous saurez ce que vous échangez contre un outil IA gratuit, et comment protéger vos données. | Hadiza a collé la liste de ses clientes et leurs numéros dans un assistant ; une voisine lui conseille de payer « pour être protégée ». | Dans l'assistant de Hadiza : réglage d'amélioration du modèle désactivé, conversation sensible supprimée, conversation temporaire, demande refaite sans numéro. Ouverture : une IA installée sur son appareil garde les données chez soi (leçons 5 et 6). | 4:00 |
| 5 | `og5` | Installer une IA open source sur votre téléphone, pour l'utiliser hors connexion | Vous saurez installer une IA open source sur votre téléphone et l'utiliser sans connexion. | Koffi révise dans le bus entre Lomé et son village, souvent sans réseau ; son assistant en ligne ne répond plus. | Pourquoi une IA locale (données chez soi, gratuité, hors connexion) ; Google AI Edge Gallery : installer l'application, télécharger en wifi le plus petit modèle Gemma une seule fois, passer en mode avion, poser une question de révision ; alternative PocketPal AI ; limites (petit modèle, réponses plus simples, mémoire du téléphone). Captures : diapositive et démonstration du live (40:00–48:00). | 4:30 |
| 6 | `og6` | Installer une IA open source sur votre ordinateur avec LM Studio | Vous saurez installer LM Studio et faire tourner un modèle open source sur votre ordinateur. | Les coupures d'Internet interrompent Mariam pendant ses préparations, et elle ne veut pas confier les dossiers de ses stagiaires à un service en ligne. | Lire la taille d'un modèle (le « B ») et vérifier sa mémoire vive ; LM Studio : recherche de modèle, fiche (capacités), téléchargement, chargement, chat (formulaire d'inscription, script de présentation) ; mémoire utilisée ; limites (ni image ni vidéo, lenteur si la mémoire manque, pas d'accès à Internet ni aux fichiers sans outils) ; aller plus loin : Hugging Face (modèles et jeux de données) et brancher le modèle local à d'autres outils (cours 2). Captures du live (19:00–39:00, 54:50–58:30). | 4:30 |
| 7 | `og7` | Projet final : construire votre boîte à outils IA, en ligne et installée | Vous saurez construire et justifier votre boîte à outils IA. | Koffi, Hadiza et Mariam montent chacun leur boîte à outils pour le certificat. | La fiche réussie de Hadiza : cinq tâches, famille, outil (dont un installé), raison, plan B, règle de données ; trois preuves ; export et dépôt. | 4:00 |

## 2.4 Direction artistique du cours

- **Motif récurrent : la boîte à outils.** Une caisse à cinq compartiments étiquetés (Assistants · Recherche · Image · Audio · Documents), chacun avec son pictogramme. La leçon 1 la présente presque vide et ouvre les compartiments un par un. Les leçons 2 et 3 garnissent « Assistants » puis « Recherche » d'étiquettes (« choix », « plan B », « lien + date »). La leçon 4 pose un cadenas sur toute la boîte. **Les leçons 5 et 6 ajoutent, sous la caisse, un tiroir étiqueté « Installé sur mon appareil »** : la leçon 5 y range un téléphone (avec le cube « modèle » à l'intérieur), la leçon 6 y ajoute un ordinateur portable. La leçon 7 montre **les trois boîtes complètes** côte à côte, celles de Koffi, de Hadiza et de Mariam, chacune avec son tiroir garni ; celle de Hadiza passe au premier plan pour l'exemple. Sur les vues réduites (trois boîtes à l'écran), l'étiquette du tiroir peut se raccourcir en « Installée », jamais sous 55 px (§5.5).
- **Deuxième motif fixe : la grille de test.** Un tableau de quatre critères (consigne · rien d'inventé · clarté · langue), avec des coches et des croix par réponse (leçon 2), repris parmi les preuves de la leçon 7. La grille des cinq critères du certificat (leçon 7) suit le même dessin. Jamais de score total, jamais d'étoiles, de podium, de médaille ni de « n° 1 ». Coches et croix sont des formes, pas seulement des couleurs.
- **Personas.** Illustrations en aplats, formes simples, couleurs du §5.3 et tons de peau naturels ; sans photoréalisme, sans visage généré qui imite une personne réelle, sans logo, sans drapeau. Chaque persona a une fiche personnage (de face, de trois quarts, mains et accessoires) dessinée une seule fois, puis réutilisée telle quelle d'une leçon à l'autre. Repère de couleur par persona, en pastille seulement (§5.5) : cyan pour Koffi, orange pour Hadiza, rose pour Mariam ; il marque leur boîte en leçon 7.
  - **Koffi**, étudiant en licence à **Lomé (Togo)** — leçons 1, 3, 5, 7 : sac à dos, téléphone Android, cahier de cours ; assis dans le bus en leçon 5.
  - **Hadiza**, couturière près du grand marché de **Zinder (Niger)** — leçons 2, 4, 7 : mètre ruban autour du cou, machine à coudre, tissus de fête pliés, téléphone à la main.
  - **Mariam**, formatrice dans un centre de formation professionnelle de **Ouagadougou (Burkina Faso)** — leçons 6, 7 : ordinateur portable, salle de formation, pile de dossiers fermés (aucun nom lisible).
  - Le lieu est toujours écrit en texte à l'écran (« Ville (Pays) »), jamais suggéré par un drapeau ou un monument, et reste le même pour un persona dans tout le cours (§5.10 : trois pays, aucun pays unique).
- **Décors.** Deux ou trois plans d'aplats, sans enseigne lisible ni texte. Koffi : sa chambre d'étudiant à Lomé (L1), le tableau d'affichage de l'université (L3), l'intérieur d'un bus, la route par la fenêtre (L5). Hadiza : son atelier près du grand marché de Zinder, la machine à coudre au centre (L2, L4). Mariam : une salle du centre de formation, son bureau et son ordinateur portable (L6). Leçon 7 : les trois décors en vignettes, côte à côte.
- **Schémas types réutilisés.** (1) La chaîne de choix : Tâche → Famille → Outil → Plan B (L1, L2, et la fiche de L7). (2) La grille de test. (3) La balance « ce que vous payez » (L4) : d'un côté l'argent, de l'autre les données, l'attention et les limites ; sans aucun montant. (4) « L'application n'est pas le modèle » : une bulle (l'application) reliée par une flèche à un **cube** (le modèle) (L1 scène 9, rappel en L5 scène 5) ; ce cube est le même objet dans tout le cours (L5, L6, tiroir de L7). (5) En ligne ou installé : un téléphone relié par un pointillé à un serveur lointain, face à un téléphone qui contient le cube (L4 scène 14, L5 scène 4). (6) La jauge : espace du téléphone (L5) et mémoire vive de l'ordinateur (L6), même dessin, sans autre chiffre que ceux du script.
- **Iconographie.** Un pictogramme par famille : bulle (assistant), loupe et lien (recherche), cadre photo (image), onde sonore (audio), feuille (documents) ; cadenas, interrupteur (réglage), maillon (lien), calendrier (date). Pour le volet installé : cube (modèle), avion (mode avion), wifi, flèche de téléchargement, jauge, barrette de mémoire, fichier barré. Les logos n'apparaissent que dans les captures réelles ; sur les cartes, les noms d'outils (LM Studio, PocketPal AI compris) sont écrits en texte simple, sans numéro de version.
- **Captures neuves.** Versions gratuites, interface en français, mode clair, un seul téléphone Android pour tout le cours ; comptes de tournage sans historique ; le même jour pour toutes les captures d'une même comparaison (L2). Leçon 6, scène 7 : un PC Windows et un Mac, interface en français. Preuve du hors connexion (L5, scènes 12 à 14) : l'icône d'avion reste visible pendant toute la prise, sans coupe.
- **Captures recyclées du live du 24/10/2026** (leçons 5 et 6, vignette de la leçon 7) :
  - **Recadrage** : on ne garde que la zone de partage d'écran, sans le cadre ni la barre d'outils de la visioconférence, puis on recadre sur la zone utile du geste. La source fait 1280 × 720 : agrandissement de 2× au plus ; au-delà, ou si une ligne à lire reste floue, capture neuve du même geste (§2.1). L'extrait s'intègre comme toute capture : deux tiers du cadre au plus, rayon 60, ombre teintée bleu (§5.2, §5.5).
  - **Masquage** : vignettes des participants, liste et fenêtre de discussion, tout nom de participant (y compris dans un titre de fenêtre, un onglet, un nom de fichier ou un avatar), notifications, favoris et onglets du navigateur, agent personnel de l'owner : bloc opaque `#111827`, jamais un flou. Le bloc suit la zone pendant tout le plan ; on contrôle image par image chaque changement de disposition de la visioconférence. On masque avant d'annoter.
  - **Zoom** : un cadrage fixe par plan, et une coupe pour passer d'un cadrage à un autre ; un mouvement lent reste sous 6 % d'échelle (§5.6) ; jamais de zoom élastique.
  - **Annotations** : cadre, cercle, coche ou croix aux couleurs du §5.5, une à la fois, 2,5 s au moins. Les libellés anglais de LM Studio sont retapés en français en surimpression (Inter ≥ 80 px). Les noms de versions restent visibles, mais ne sont jamais lus ni retapés.
  - **Son** : celui du live est coupé ; la voix est régénérée (§2.1).
  - **Mention de source**, si l'owner le souhaite (décision prise une fois pour tout le cours, notée dans `PROGRESS.md`) : « Extrait du Weekend IA du 24 octobre 2026 », en Inter `meta` 60 px, `#6B7280` sur fond clair ou `#9CA3AF` sur navy, dans le bandeau haut, calée à droite (le filigrane occupe la gauche), hors zone de sous-titres, pendant chaque plan issu du live. Elle passe par `copy/<langue>.json` et se traduit avec le reste.
- **Ce qui reste fixe.** La caisse et ses pictogrammes, le tiroir dès qu'il apparaît, la grille, la chaîne de choix, le cube « modèle », le dessin des trois personas et leur lieu, le traitement des captures. **Ce qui change, leçon par leçon :**

| Leçon | Boîte à outils | Persona au premier plan · décor | Motif ou schéma dominant |
|---|---|---|---|
| 1 | Presque vide ; les cinq compartiments s'ouvrent un par un ; pas encore de tiroir | Koffi · chambre d'étudiant, Lomé | Cinq familles ; l'application n'est pas le modèle |
| 2 | « Assistants » éclairé, reçoit les étiquettes « choix » et « plan B » | Hadiza · atelier, Zinder | Grille de test |
| 3 | « Recherche » éclairé, reçoit l'étiquette « lien + date » | Koffi · tableau d'affichage de l'université, Lomé | Le numéro de source, une porte vers la page ; qui · quand · écrit dedans |
| 4 | Cadenas sur toute la boîte (s'ouvre en B1, se referme en B6) ; en ouverture, un appareil reçoit un cadenas fermé | Hadiza · à sa machine à coudre, Zinder | Balance ; en ligne ou installé |
| 5 | Le tiroir « Installé sur mon appareil » apparaît et reçoit le téléphone | Koffi · dans le bus, sac à dos | En ligne ou installé ; jauge d'espace ; extraits du live et captures neuves |
| 6 | Le tiroir reçoit l'ordinateur portable | Mariam · salle de formation, Ouagadougou | Le « B » et la jauge de mémoire vive ; extraits du live (LM Studio, Hugging Face) |
| 7 | Les trois boîtes complètes, tiroir garni ; celle de Hadiza au premier plan ; la boîte se referme en B6 | Koffi, Hadiza et Mariam côte à côte | Fiche « tâche · famille · outil · raison · plan B » ; grille des cinq critères |

- **Son.** Aucune musique sous la voix. Un court habillage sonore possible sur les cartes seulement (ouverture d'un compartiment ou du tiroir).

## 2.5 Les leçons

### Leçon 1 — Choisir la bonne famille d'outils IA pour chaque tâche (`og1`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez relier chaque tâche à une famille d'outils IA. »
- **Cas réel (B1 → B6)** : Koffi, étudiant en licence à Lomé (Togo), parle français et éwé ; il révise sur son téléphone, souvent sans réseau dans le bus. Il a installé cinq applications d'IA. Son téléphone sature. Pour réviser un long cours en PDF, il le colle page par page dans un assistant. Enjeu : réviser ses examens avec un téléphone limité et peu de données. B6 (champ `example`) : Koffi garde trois applications, une par besoin, et révise dans NotebookLM, qui renvoie au passage exact de son cours.
- **Unités de notion (B3)** : 1. Écrire et expliquer : les assistants — Gemini, ChatGPT, Claude, Copilot : ils écrivent, expliquent, résument, traduisent un premier jet. · 2. Chercher avec des sources — Perplexity, ou le mode recherche des assistants : une réponse appuyée sur des pages web numérotées, utile pour une information récente. · 3. Créer des images et du son — l'outil d'image de Gemini crée et retouche des images, d'autres assistants aussi ; côté audio : dicter, transcrire, écouter un texte. · 4. Travailler sur vos propres documents — NotebookLM, devenu Gemini Notebook, répond à partir des fichiers déposés et cite le passage exact. · 5. L'application n'est pas le modèle (repère issu du live du 24/10/2026, utile pour les leçons 5 et 6) — ChatGPT est l'application, GPT le modèle qui répond derrière ; Gemini est l'application, et Google publie aussi des modèles ouverts comme Gemma ; Claude est l'application, avec des modèles derrière ; certains modèles ouverts s'installent sur votre propre appareil.
- **Démo (B4)** : NotebookLM, version gratuite, sur téléphone Android (application ou navigateur). 1. Koffi crée un notebook (un carnet de travail). 2. Il y dépose le PDF de son cours. 3. Il tape sa consigne en quatre blocs (rôle, contexte, tâche, format) : fiche de révision du chapitre 2 en dix points, avec les citations. 4. La fiche arrive ; chaque point porte un numéro de citation. 5. Il touche un numéro : le passage du cours s'affiche, surligné. 6. Il enregistre la fiche. Résultat à l'écran : une fiche de dix points, chacun relié à sa page.
- **Consolidation (B5)** : prédiction. Koffi veut la date limite d'un concours de cette année : NotebookLM peut-il répondre ? Réponse : non. Il ne connaît que les documents déposés ; pour une information récente, il faut la recherche sourcée (leçon 3).
- **Consigne à copier** :

```text
Rôle : tu es un tuteur de révision, rigoureux et clair.
Contexte : je prépare [mon examen, ma formation, ma réunion]. Mes sources sont les documents déposés dans ce carnet ; je révise sur téléphone.
Tâche : à partir de mes sources uniquement, fais une fiche de révision de [chapitre ou thème] en [10] points courts. Pour chaque point, indique la citation de la source.
Format : des points numérotés, une phrase chacun, en français. Termine par [5] questions pour me tester, sans les réponses. Si une information n'est pas dans mes sources, écris « absent de mes sources ».
```

- **Exercice** : « Dressez la carte de vos tâches et de leurs familles » — 1. Listez cinq tâches réelles de votre semaine où l'IA pourrait vous aider. 2. Notez la famille de chacune : assistant, recherche sourcée, image, audio ou documents. 3. Testez la famille « documents » avec un cours ou un document de travail sans donnée personnelle, et vérifiez deux citations.
- **Carte de rappel** : 1. La tâche d'abord · 2. Cinq familles d'outils · 3. Sur vos documents, la citation
- **Quiz** *(5 questions ; chaque point de la carte de rappel est couvert)* :
  1. Par quoi commencer pour choisir un outil IA ? — A) Par l'outil dont tout le monde parle B) Par la tâche à accomplir C) Par l'application la plus récente D) Par la couleur de l'icône — **Réponse : B**
  2. Koffi veut réviser son cours en PDF et retrouver chaque passage. Quelle famille ? — A) Image B) Audio C) Documents, par exemple NotebookLM D) Recherche sourcée — **Réponse : C**
  3. Hadiza veut une affiche pour son atelier. Quelle famille ? — A) Image B) Documents C) Recherche sourcée D) Audio — **Réponse : A**
  4. Koffi veut la date limite d'un concours de cette année. Quelle famille ? — A) Documents B) Image C) Audio D) Recherche sourcée — **Réponse : D**
  5. Dans NotebookLM, à quoi sert le petit numéro après chaque point ? — A) À noter la réponse B) À ouvrir le passage exact du document déposé C) À compter les mots D) À partager la fiche — **Réponse : B**
- **Marques citées** : Gemini, Gemma, NotebookLM, Gemini Notebook, Android (Google) ; ChatGPT, GPT (OpenAI) ; Claude (Anthropic) ; Copilot (Microsoft) ; Perplexity.

#### Script v1 (à valider par l'owner)

Durée estimée : 4:00 (dont 3 s de mention légale, Partie 1) · Mots de voix off : 406

**Scène 1 — B1 Accroche · 0:00–0:09 · E**
- Visuel : la boîte à outils, fermée, s'ouvre sur une illustration en aplats : Koffi dans sa chambre d'étudiant à Lomé, un téléphone dont l'icône de mémoire est pleine, un cahier de cours ouvert.
- Écran : « Koffi · étudiant en licence · Lomé (Togo) »
- VO : « Koffi, étudiant en licence à Lomé, a cinq applications d'IA. Il colle son cours page par page. »

**Scène 2 — B1 Accroche · 0:09–0:18 · B**
- Visuel : carte promesse, texte révélé en deux temps.
- Écran : « À la fin de cette leçon, vous saurez relier chaque tâche à une famille d'outils IA. »
- VO : « À la fin de cette leçon, vous saurez relier chaque tâche à une famille d'outils IA. » *(promesse dite à 0:09)*

**Scène 3 — B2 Cadrage · 0:18–0:27 · B**
- Visuel : carte, surtitre « Le malentendu » ; deux étiquettes « Outil » et « Tâche » échangent leur place.
- Écran : « Le malentendu · L'outil d'abord ? »
- VO : « Son téléphone sature, et ses révisions avancent mal. Le malentendu : choisir l'outil d'abord, la tâche ensuite. »

**Scène 4 — B2 Cadrage · 0:27–0:42 · A**
- Visuel : capture réelle de l'écran d'accueil du téléphone : les cinq applications côte à côte ; un cadre les entoure, puis l'étiquette « Pour quelle tâche ? ».
- Écran : « Cinq applications… pour quelle tâche ? »
- VO : « Regardez son écran : cinq applications, installées le même jour. Il ouvre toujours la même, pour tout. La bonne question vient avant : quelle est ma tâche ? »

**Scène 5 — B3 Notion · 0:42–0:59 · C**
- Visuel : la boîte à outils et ses cinq compartiments étiquetés ; le compartiment « Assistants » s'éclaire, son pictogramme de bulle s'anime une fois.
- Écran : « 1 · Assistants : Gemini, ChatGPT, Claude, Copilot »
- VO : « Partez de la tâche, puis choisissez la famille. Nous en retenons cinq. Première famille : les assistants. Gemini, ChatGPT, Claude, Copilot. Ils écrivent, expliquent, résument, traduisent un premier jet. »

**Scène 6 — B3 Notion · 0:59–1:16 · C**
- Visuel : le compartiment « Recherche » s'éclaire ; une loupe parcourt trois pages web qui reçoivent les numéros 1, 2, 3.
- Écran : « 2 · Recherche sourcée : Perplexity, modes recherche »
- VO : « Deuxième famille : la recherche sourcée. Perplexity, ou le mode recherche des assistants. La réponse s'appuie sur des pages web, numérotées. Vous pouvez les ouvrir pour vérifier. Utile pour une information récente. »

**Scène 7 — B3 Notion · 1:16–1:36 · B**
- Visuel : carte en deux temps : le compartiment « Image » (cadre photo), puis « Audio » (onde sonore), chacun avec trois mots-clés.
- Écran : « 3 · Image : l'outil d'image de Gemini · 4 · Audio : dicter, transcrire »
- VO : « Troisième et quatrième familles : l'image et l'audio. L'outil d'image de Gemini crée et retouche des images. D'autres assistants le font aussi. Côté audio : dicter, transcrire, écouter un texte à voix haute. »

**Scène 8 — B3 Notion · 1:36–1:59 · A**
- Visuel : capture réelle de l'accueil de NotebookLM ; le compartiment « Documents » s'éclaire en vignette dans un coin.
- Écran : « 5 · Documents : NotebookLM (devenu Gemini Notebook) cite le passage »
- VO : « Cinquième famille : vos propres documents. NotebookLM, de Google, devenu Gemini Notebook, répond à partir des fichiers que vous déposez. Il cite le passage exact. Dit autrement : il ne cherche pas ailleurs, il lit vos pages. Utile pour un cours, un rapport, un règlement. »

**Scène 9 — B3 Notion · 1:59–2:23 · C**
- Visuel : surtitre « Repère : l'application n'est pas le modèle » ; trois lignes entrent l'une après l'autre, chacune avec à gauche une bulle étiquetée du nom de l'application, à droite un cube étiqueté du modèle, relié par une flèche ; puis un téléphone et un ordinateur reçoivent un cube « modèle ouvert » (le même cube que dans les leçons 5 à 7, §2.4). Noms en texte simple, sans logo ni numéro de version.
- Écran : « Repère : l'application n'est pas le modèle » « ChatGPT → GPT · Gemini → modèles de Google (et Gemma, ouvert) · Claude → modèles Claude » « Un modèle ouvert s'installe chez vous »
- VO : « Dernier repère, utile pour la suite : l'application n'est pas le modèle. ChatGPT est l'application ; GPT est le modèle qui répond derrière. Gemini est l'application ; Google publie aussi des modèles ouverts, comme Gemma. Claude aussi : une application, avec des modèles derrière. Certains modèles ouverts s'installent sur votre appareil. »

**Scène 10 — B4 Application · 2:23–2:34 · A**
- Visuel : capture réelle : création d'un notebook, puis ajout du PDF comme source ; cadre sur le nom du fichier.
- Écran : « Nouveau carnet + le PDF du cours »
- VO : « Koffi crée un notebook, c'est-à-dire un carnet de travail. Il y dépose le PDF de son cours. »

**Scène 11 — B4 Application · 2:34–2:47 · A**
- Visuel : capture réelle : la consigne s'écrit dans la zone de question (frappe accélérée), puis l'envoi ; en surimpression, les quatre blocs s'allument l'un après l'autre.
- Écran : « Rôle : tuteur de révision » « Contexte : mon cours, déposé dans le carnet » « Tâche : fiche du chapitre 2, 10 points, avec citations » « Format : points numérotés + 5 questions »
- VO : « Sa consigne a quatre blocs : un rôle, le contexte, la tâche, le format. La tâche : une fiche du chapitre deux, dix points, avec citations. »

**Scène 12 — B4 Application · 2:47–2:58 · A**
- Visuel : capture réelle : la fiche s'affiche ; un cercle entoure un numéro de citation.
- Écran : « Le petit numéro = la citation »
- VO : « La fiche arrive en dix points. Chaque point porte un petit numéro : la citation, qui renvoie au cours. »

**Scène 13 — B4 Application · 2:58–3:08 · A**
- Visuel : capture réelle : le doigt touche le numéro ; le passage du PDF s'affiche, surligné ; coche.
- Écran : « Le passage exact, surligné »
- VO : « Il touche un numéro : le passage du cours s'affiche, surligné. Il vérifie d'un seul geste. »

**Scène 14 — B4 Application · 3:08–3:14 · A**
- Visuel : capture réelle : la fiche enregistrée dans le carnet.
- Écran : « Fiche enregistrée »
- VO : « Une tâche, une famille, un outil qui cite ses pages. »

**Scène 15 — B5 Consolidation · 3:14–3:37 · B**
- Visuel : carte question : « Date limite d'un concours, cette année : NotebookLM ? » ; silence ; puis le compartiment « Recherche » s'éclaire avec une flèche vers « Leçon 3 ».
- Écran : « Date limite d'un concours : NotebookLM ? » « → Recherche sourcée (leçon 3) »
- VO : « Koffi veut maintenant la date limite d'un concours, cette année. NotebookLM peut-il répondre ? » *(silence, 3 s)* « Non. Il ne connaît que les documents déposés. Pour une information récente, il faut la recherche sourcée : leçon trois. »

**Scène 16 — B6 Clôture · 3:37–3:44 · B (carte de rappel, panneau 1)**
- Visuel : carte de rappel, panneau 1 : la promesse ; sous la carte, l'écran de Koffi ne garde que trois applications.
- Écran : « À la fin de cette leçon, vous saurez relier chaque tâche à une famille d'outils IA. »
- VO : « Koffi garde trois applications, une par besoin. Il révise avec ses sources. »

**Scène 17 — B6 Clôture · 3:44–3:57 · B (carte de rappel)**
- Visuel : carte de rappel, panneau 2 : trois points révélés au rythme de la voix.
- Écran : « 1. La tâche d'abord » « 2. Cinq familles d'outils » « 3. Sur vos documents, la citation »
- VO : « La tâche d'abord, l'outil ensuite. Cinq familles d'outils. Sur vos documents, exigez la citation. Dressez la carte de vos tâches et de leurs familles. »

#### Captures à fournir par l'owner

| Scène | Outil · appareil | Gestes exacts | Texte exact à taper | Durée utile | À masquer |
|---|---|---|---|---|---|
| 4 | Écran d'accueil · téléphone Android | Regrouper sur un même écran les cinq applications (Gemini, ChatGPT, Claude, Copilot, Perplexity) ; écran immobile. | Aucun | 10 s | Notifications, autres applications, fond d'écran personnel |
| 8 | NotebookLM, version gratuite (application Android ou navigateur), interface en français | Ouvrir l'accueil ; ne rien toucher. | Aucun | 10 s | Compte, titres des autres notebooks |
| 10–13 | NotebookLM · même téléphone | Créer un notebook ; ajouter une source et choisir le PDF ; taper la consigne ; attendre la réponse ; toucher un numéro de citation ; laisser le passage s'afficher. | « Rôle : tu es un tuteur de révision, rigoureux et clair. Contexte : je suis étudiant en licence et je prépare mes examens. Mes sources sont le cours déposé dans ce carnet ; je révise sur téléphone. Tâche : à partir de mes sources uniquement, fais une fiche de révision du chapitre 2 en 10 points courts. Pour chaque point, indique la citation de la source. Format : des points numérotés, une phrase chacun, en français. Termine par 5 questions pour me tester, sans les réponses. Si une information n'est pas dans mes sources, écris « absent de mes sources ». » | 50 s (frappe accélérée au montage) | Compte |
| 14 | NotebookLM | Enregistrer la réponse en note dans le notebook (ou la copier dans l'application de notes). | Aucun | 8 s | Compte |

#### Notes de script

- Prononciation : « Gemini » se dit « jé-mi-ni » ; « Gemma » se dit « jé-ma » ; « GPT » se dit « gé-pé-té » ; « NotebookLM » se dit « note-bouk-elle-emme » ; « Perplexity » se dit « per-plek-si-ti » ; « Copilot » se dit « co-pi-lote » ; « Gemini Notebook » se dit « jé-mi-ni note-bouk ».
- Les cinq familles sont un classement pédagogique de Karatou, pas une norme : la voix dit « nous en retenons cinq ».
- Scène 9 (repère « l'application n'est pas le modèle », repris du live du 24/10/2026) : GPT, Gemma et Claude sont cités comme **noms de famille** de modèles, jamais avec un numéro de version (exceptions du §2.1 : familles ouvertes pour Gemma ; seconde exception, limitée à ce repère, pour GPT, Gemini et Claude). Exactitude : l'application Gemini fonctionne avec des modèles Gemini de Google ; Gemma est la famille de modèles **ouverts** publiée par Google, qu'on installe soi-même (leçons 5 et 6), et non le modèle qui répond dans l'application Gemini. La voix le dit sans raccourci (« Google publie aussi des modèles ouverts, comme Gemma »). Pas de logo sur la carte : noms en texte simple. [à vérifier au moment de la production]
- Scène 7 : l'outil d'image de Gemini est désigné par sa fonction, jamais par un surnom ni un nom de modèle (§5.9). Vérifier que la création d'images reste disponible dans la version gratuite de Gemini, et dans au moins un autre assistant, pour garder « D'autres assistants le font aussi ». [à vérifier au moment de la production]
- Scène 8 : Gemini Notebook est le nouveau nom de NotebookLM (depuis le 16 juillet 2026, d'après le cours 13) ; il est dit une seule fois, puis la leçon garde « NotebookLM ». Si l'interface n'affiche plus que « Gemini Notebook » le jour du tournage, retenir ce nom dans toute la leçon. [à vérifier au moment de la production]
- Scènes 8 et 10 à 14 : vérifier les libellés exacts de NotebookLM en français (création d'un notebook, ajout d'une source, enregistrement en note) et la présence des citations numérotées dans la version gratuite. [à vérifier au moment de la production]
- PDF de la démo : un support public ou un document Karatou, sans donnée personnelle ; pas un cours sous droits sans accord de son auteur.
- Koffi parle français et éwé ; la démo reste en français (son cours est en français).
- Termes nouveaux : « notebook » (anglicisme dit une fois, glosé « carnet de travail », puis remplacé par « carnet ») ; « citation » (dit puis montré) ; « modèle » au sens technique (scène 9 : ce qui répond derrière l'application) ; les quatre blocs de consigne (scène 11 : rôle, contexte, tâche, format). « Déposer » remplace l'anglicisme courant pour l'envoi d'un fichier.
- Adaptation EN : « famille d'outils » = *tool family* ; « fiche de révision » = *revision sheet* ; « carnet » = *notebook* ; « l'application n'est pas le modèle » = *the app is not the model*.
- Adaptation HA / DJE : garder les noms de produits tels quels ; traduire « famille d'outils » par l'expression la plus simple possible (« type d'outil »).

### Leçon 2 — Comparer Gemini, ChatGPT, Claude et Copilot sur votre propre tâche (`og2`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez tester plusieurs assistants sur votre propre tâche. »
- **Cas réel (B1 → B6)** : Hadiza, couturière près du grand marché de Zinder, veut annoncer ses modèles de fête à ses clientes par un message WhatsApp, en français et en haoussa. Une amie commerçante lui conseille de prendre « celui que tout le monde utilise ». Enjeu : un message juste, clair, sans information inventée, dans les deux langues de ses clientes. B6 (champ `example`) : ses clientes reçoivent un message clair, en français et en haoussa ; Hadiza garde, pour cette tâche, l'assistant qui a passé sa grille, et note un plan B.
- **Unités de notion (B3)** : 1. Une seule consigne, mot pour mot — le même texte dans chaque assistant, dans une nouvelle conversation, avec les mêmes informations ; sinon on compare deux demandes, pas deux outils. · 2. Une grille de quatre critères — consigne respectée ; aucune information inventée ; clarté pour le public ; langue correcte (le haoussa relu par un locuteur). · 3. Des atouts, pas un classement — Gemini est relié aux services de Google et crée des images ; Copilot est intégré à Windows, au navigateur Edge et à Bing ; ChatGPT réunit voix, images, fichiers et recherche ; Claude se concentre sur l'écrit et l'analyse de documents [à vérifier au moment de la production] ; pour une tâche donnée, c'est le test qui décide.
- **Démo (B4)** : Gemini, ChatGPT, Claude et Copilot, versions gratuites, sur le même téléphone Android, le même jour. 1. Hadiza prépare sa consigne en quatre blocs, rôle, contexte, tâche, format (carte G). 2. Elle la colle, mot pour mot, dans les quatre assistants, chaque fois dans une nouvelle conversation. 3. Critère 1 : cinq lignes, le lieu et les horaires sont-ils là ? Coche ou croix, réponse par réponse. 4. Critère 2 : un prix, une promotion, une adresse inventés ? 5. Critères 3 et 4 : clarté, et haoussa relu par Hadiza elle-même. 6. Elle choisit pour cette tâche et note un plan B. Résultat à l'écran : la grille remplie, sans score total.
- **Consolidation (B5)** : prédiction. Le lendemain, Hadiza repose la même question au même assistant : aura-t-elle la même réponse ? Réponse : non. Les réponses varient d'une fois à l'autre, et les outils changent avec leurs mises à jour : refaites le test de temps en temps, gardez un plan B.
- **Consigne à copier** :

```text
Rôle : tu es un rédacteur de messages pour un petit commerce, chaleureux et précis.
Contexte : je suis [couturière] et je tiens [un atelier près du grand marché de ma ville]. Mes clientes lisent mes messages sur WhatsApp, en [français] et en [haoussa]. Informations à utiliser : [lieu] ; [horaires] ; [commander avant le …].
Tâche : écris un message pour annoncer [les nouveaux modèles de mon atelier pour la fête] à mes clientes. N'invente aucune autre information (ni prix, ni promotion, ni adresse).
Format : cinq lignes au plus, ton chaleureux. Une version en [français], puis une version en [haoussa].
```

- **Exercice** : « Testez trois assistants sur votre propre tâche » — 1. Choisissez une vraie tâche de votre semaine. 2. Collez la même consigne dans trois assistants, chacun dans une nouvelle conversation. 3. Remplissez la grille des quatre critères ; notez votre choix pour cette tâche et votre plan B.
- **Carte de rappel** : 1. Même consigne, nouvelle conversation · 2. Quatre critères · 3. Un choix par tâche
- **Quiz** *(5 questions ; chaque point de la carte de rappel est couvert)* :
  1. Pour comparer des assistants de façon juste, il faut : — A) adapter la consigne à chaque outil B) la même consigne, mot pour mot, dans une nouvelle conversation à chaque fois C) poser la question une seule fois, dans un seul outil D) comparer les icônes — **Réponse : B**
  2. Lequel de ces critères fait partie de la grille ? — A) La couleur de l'application B) Le nombre de téléchargements C) La réponse n'invente aucune information D) La vitesse de la connexion — **Réponse : C**
  3. Un assistant ajoute une promotion que Hadiza n'a jamais proposée. Pour le critère « rien d'inventé », vous mettez : — A) une croix B) une coche C) rien D) deux coches — **Réponse : A**
  4. Après le test, que retient Hadiza ? — A) Un seul outil, pour toutes ses tâches B) L'outil dont on parle le plus C) Un choix pour cette tâche, et un plan B D) Aucun outil — **Réponse : C**
  5. Hadiza repose la même question le lendemain. Que se passe-t-il ? — A) La réponse peut changer : il faut refaire le test de temps en temps B) La réponse est toujours identique C) L'assistant refuse de répondre D) La réponse devient payante — **Réponse : A**
- **Marques citées** : Gemini, Google (Google) ; ChatGPT (OpenAI) ; Claude (Anthropic) ; Copilot, Windows, Edge, Bing (Microsoft) ; WhatsApp (Meta).

#### Script v1 (à valider par l'owner)

Durée estimée : 4:00 (dont 3 s de mention légale, Partie 1) · Mots de voix off : 367

**Scène 1 — B1 Accroche · 0:00–0:09 · E**
- Visuel : le compartiment « Assistants » de la boîte s'ouvre sur une illustration : Hadiza dans son atelier, tissus de fête pliés, téléphone à la main.
- Écran : « Hadiza · couturière · près du grand marché de Zinder »
- VO : « Leçon précédente : la tâche d'abord, l'outil ensuite. Aujourd'hui, Hadiza veut annoncer ses modèles de fête. »

**Scène 2 — B1 Accroche · 0:09–0:18 · B**
- Visuel : carte promesse, texte révélé en deux temps.
- Écran : « À la fin de cette leçon, vous saurez tester plusieurs assistants sur votre propre tâche. »
- VO : « À la fin de cette leçon, vous saurez tester plusieurs assistants sur votre propre tâche. » *(promesse dite à 0:09)*

**Scène 3 — B2 Cadrage · 0:18–0:27 · B**
- Visuel : carte, surtitre « Le malentendu » ; un trophée dessiné au trait apparaît, puis reçoit une croix.
- Écran : « Le malentendu · Un outil qui gagne partout ? »
- VO : « Une amie lui dit : prends celui que tout le monde utilise. Le malentendu : un outil gagnerait partout. »

**Scène 4 — B2 Cadrage · 0:27–0:45 · A**
- Visuel : capture réelle : mosaïque des quatre assistants, chacun sur une nouvelle conversation vide ; un cadre passe de l'un à l'autre.
- Écran : « Quatre assistants · versions gratuites »
- VO : « Voici quatre assistants, en version gratuite : Gemini, ChatGPT, Claude et Copilot. Même zone de saisie, même allure. Pour savoir lequel convient, testez-les sur votre tâche. »

**Scène 5 — B3 Notion · 0:45–1:08 · C**
- Visuel : une carte de consigne se duplique en quatre et glisse vers quatre téléphones ; sur chacun, l'étiquette « nouvelle conversation ».
- Écran : « 1 · Une seule consigne, mot pour mot » « Nouvelle conversation à chaque fois »
- VO : « Première idée : une seule consigne, mot pour mot, dans chaque assistant. Ouvrez chaque fois une nouvelle conversation. Donnez les mêmes informations, ni plus ni moins. Sinon, vous comparez deux demandes différentes, pas deux outils. »

**Scène 6 — B3 Notion · 1:08–1:34 · C**
- Visuel : la grille de test se construit ligne par ligne, quatre critères avec leur pictogramme ; les colonnes restent vides.
- Écran : « 2 · Consigne · Rien d'inventé · Clarté · Langue »
- VO : « Deuxième idée : une grille de quatre critères. Un : la consigne est-elle respectée ? Deux : aucune information inventée ? Trois : le texte est-il clair pour votre public ? Quatre : la langue est-elle correcte ? Pour le haoussa, un locuteur relit. »

**Scène 7 — B3 Notion · 1:34–2:07 · B**
- Visuel : carte, surtitre « 3 · Des atouts, pas un classement » ; quatre lignes entrent l'une après l'autre (nom de l'outil + deux mots), chacune remplaçant la précédente, puis la phrase finale.
- Écran : « 3 · Des atouts, pas un classement » « Pour votre tâche, votre test décide »
- VO : « Troisième idée : des atouts, pas un classement. Gemini est relié aux services de Google, et crée des images. Copilot est intégré à Windows, au navigateur Edge et à Bing. ChatGPT réunit voix, images, fichiers et recherche. Claude se concentre sur l'écrit et l'analyse de documents. Pour votre tâche, c'est votre test qui décide. »

**Scène 8 — B4 Application · 2:07–2:19 · G**
- Visuel : carte de consigne sur fond clair, en deux panneaux successifs (la consigne complète figure dans la fiche, sous la vidéo).
- Écran : « Rôle : rédacteur de messages · Contexte : couturière, clientes en français et en haoussa, [lieu] · [horaires] · [commander avant le …] » « Tâche : annoncer les modèles de fête, n'invente rien · Format : 5 lignes max, ton chaleureux, français puis haoussa »
- VO : « Voici la consigne de Hadiza, en quatre blocs : rôle, contexte, tâche, format. Cinq lignes, français puis haoussa, et rien d'inventé. »

**Scène 9 — B4 Application · 2:19–2:33 · A**
- Visuel : capture réelle, en mosaïque : la même consigne collée et envoyée dans les quatre assistants, chacun dans une nouvelle conversation.
- Écran : « Même consigne · 4 nouvelles conversations »
- VO : « Hadiza colle la même consigne dans les quatre assistants. Chaque fois, dans une nouvelle conversation. Même jour, même téléphone, même réseau : le test reste équitable. »

**Scène 10 — B4 Application · 2:33–2:47 · A**
- Visuel : capture réelle : les quatre réponses côte à côte ; sous chacune, la ligne « Consigne » de la grille reçoit une coche ou une croix, l'une après l'autre.
- Écran : « Critère 1 : la consigne »
- VO : « Premier critère : la consigne. Cinq lignes demandées, avec le lieu et les horaires. Elle coche, réponse par réponse. »

**Scène 11 — B4 Application · 2:47–2:59 · A**
- Visuel : capture réelle : un cadre sur toute information absente de la consigne (prix, promotion, adresse), puis la ligne « Rien d'inventé » de la grille.
- Écran : « Critère 2 : rien d'inventé »
- VO : « Deuxième critère : rien d'inventé. Un prix, une promotion, une adresse qu'elle n'a pas donnés ? Croix. »

**Scène 12 — B4 Application · 2:59–3:12 · A**
- Visuel : capture réelle : les versions haoussa ; puis la grille complète, sans total ; une étiquette « Choix pour cette tâche » et une étiquette « Plan B ».
- Écran : « Critères 3 et 4 · choix pour cette tâche · plan B »
- VO : « Troisième et quatrième critères : clair, et bon haoussa. Hadiza lit elle-même le haoussa. Puis elle choisit pour cette tâche, avec un plan B. »

**Scène 13 — B5 Consolidation · 3:12–3:37 · A**
- Visuel : capture réelle : la même consigne recollée le lendemain dans l'assistant choisi ; silence ; puis les deux réponses côte à côte, différences encadrées.
- Écran : « Même question, autre réponse »
- VO : « Le lendemain, Hadiza repose la même question au même assistant. Même réponse ? » *(silence, 3 s)* « Non. Les réponses varient d'une fois à l'autre. Et les outils changent avec leurs mises à jour. Refaites le test de temps en temps. »

**Scène 14 — B6 Clôture · 3:37–3:44 · B (carte de rappel, panneau 1)**
- Visuel : carte de rappel, panneau 1 : la promesse ; le compartiment « Assistants » reçoit deux étiquettes : « choix » et « plan B ».
- Écran : « À la fin de cette leçon, vous saurez tester plusieurs assistants sur votre propre tâche. »
- VO : « Ses clientes reçoivent un message clair, en français et en haoussa. »

**Scène 15 — B6 Clôture · 3:44–3:57 · B (carte de rappel)**
- Visuel : carte de rappel, panneau 2 : trois points révélés au rythme de la voix.
- Écran : « 1. Même consigne, nouvelle conversation » « 2. Quatre critères » « 3. Un choix par tâche »
- VO : « Même consigne, nouvelle conversation. Quatre critères : consigne, exactitude, clarté, langue. Un choix par tâche, et un plan B. Testez trois assistants sur votre propre tâche. »

#### Captures à fournir par l'owner

| Scène | Outil · appareil | Gestes exacts | Texte exact à taper | Durée utile | À masquer |
|---|---|---|---|---|---|
| 4 | Gemini, ChatGPT, Claude, Copilot (applications Android, versions gratuites, interface en français) | Ouvrir chaque application sur une nouvelle conversation vide ; une capture immobile de chacune. | Aucun | 4 × 4 s (mosaïque 2 × 2 au montage) | Comptes, avatars, historiques |
| 9–12 | Les quatre mêmes applications · même téléphone, même jour, même réseau | Nouvelle conversation ; coller la consigne ; envoyer ; faire défiler toute la réponse, versions française et haoussa. | « Rôle : tu es un rédacteur de messages pour un petit commerce, chaleureux et précis. Contexte : je suis couturière et je tiens un atelier près du grand marché de Zinder. Mes clientes lisent mes messages sur WhatsApp, en français et en haoussa. Informations à utiliser : atelier près du grand marché de Zinder ; ouvert de 8 h à 18 h ; commander avant le 15 du mois. Tâche : écris un message pour annoncer les nouveaux modèles de mon atelier pour la fête à mes clientes. N'invente aucune autre information (ni prix, ni promotion, ni adresse). Format : cinq lignes au plus, ton chaleureux. Une version en français, puis une version en haoussa. » | 4 × 20 s | Comptes, historiques |
| 10–12 | Grille de test (papier ou tableau) | Remplir une vraie grille avec ce que montrent les quatre réponses, critère par critère ; faire relire les quatre versions haoussa par un locuteur pour le critère 4. | — | Reprise en schéma au montage | — |
| 13 | L'assistant choisi par Hadiza | Le lendemain : nouvelle conversation ; recoller exactement la même consigne ; envoyer ; faire défiler la réponse. | La même consigne | 20 s | Compte |

#### Notes de script

- Aucun classement : ne jamais afficher de total, d'étoiles, de podium ni de « gagnant ». À l'écran, le choix est toujours étiqueté « choix pour cette tâche ».
- Équité du test : versions gratuites, même jour, même téléphone, même réseau, nouvelles conversations. Si un outil n'est pas disponible au Niger ou en français au moment du tournage, le remplacer par un autre assistant et adapter la scène 4. [à vérifier au moment de la production]
- Scène 7 : chaque atout décrit une fonction, pas une qualité. Vérifier qu'il reste exact pour la version gratuite le jour du tournage (création d'images dans Gemini ; voix, images, fichiers et recherche dans ChatGPT ; intégration de Copilot à Windows, Edge et Bing ; absence de création d'images dans Claude). Retirer tout atout qui ne serait plus exact. [à vérifier au moment de la production]
- Scènes 10 à 12 : annoter seulement ce que montrent les captures. Si aucune réponse n'invente d'information, la voix de la scène 11 devient : « Deuxième critère : rien d'inventé. Ici, aucune invention : quatre coches. »
- Termes : « grille » et « critère » sont des mots courants ; « plan B » est glosé par l'image (un deuxième outil, en réserve).
- Adaptation EN : « grille de test » = *test grid* ; « plan B » = *backup option* ; « celui que tout le monde utilise » = *the one everybody uses*.
- Adaptation HA / DJE : dans la version HA, Hadiza lit le haoussa : le passage reste naturel. Dans la version DJE, garder la démo en haoussa (ce sont les clientes de Hadiza) et préciser à l'écran « version haoussa ».

### Leçon 3 — Obtenir une réponse sourcée avec l'IA et vérifier chaque source (`og3`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez obtenir une réponse sourcée et vérifier ses sources. »
- **Cas réel (B1 → B6)** : Koffi, étudiant en licence à Lomé (Togo), cherche une bourse de master ouverte aux étudiants togolais, et sa date limite de candidature. Un assistant lui donne une date nette, sans aucune source. Enjeu : rater la date, ou se fier à une page périmée. B6 (champ `example`) : Koffi dépose sa candidature avant la date, vérifiée sur la page officielle du programme.
- **Unités de notion (B3)** : 1. Un moteur de réponse cite ses pages — Perplexity lit des pages web, résume, et numérote ses sources ; Gemini, ChatGPT, Copilot et Claude ont aussi un mode recherche avec des liens [à vérifier au moment de la production pour chaque version gratuite]. · 2. Ouvrir la source, toujours — le numéro mène à une page ; on vérifie que la page dit bien ce que dit le résumé. · 3. Trois questions à chaque source — Qui parle ? Quand (date de publication) ? Est-ce écrit dedans ? Pour une bourse, la page de l'organisme qui la finance passe avant tout.
- **Démo (B4)** : Perplexity, version gratuite, sur téléphone Android (application ou navigateur). 1. Koffi tape une consigne précise en quatre blocs (rôle, contexte, tâche, format) : quelle bourse, pour qui, quelle année, avec des sources officielles datées. 2. La réponse arrive avec des sources numérotées. 3. Source 1 : la page officielle du programme ; la date limite y figure, publiée cette année : coche. 4. Source 2 : un article d'une année passée : croix. 5. Il relance : sources officielles seulement, avec leur date. 6. Il note la date limite, avec le lien. Résultat à l'écran : une note « date + lien + jour de vérification ».
- **Consolidation (B5)** : prédiction. Une réponse affiche cinq sources : est-elle donc juste ? Réponse : non. Le nombre ne prouve rien ; une source peut être ancienne, non officielle, ou dire autre chose : on les ouvre.
- **Consigne à copier** :

```text
Rôle : tu es un assistant de recherche rigoureux, qui cite ses sources.
Contexte : je cherche [quoi : une bourse, un concours, une démarche] pour [qui], pour [quelle année], à [où]. Je dois m'appuyer sur des sources officielles et récentes.
Tâche : [votre question précise]. Pour chaque information, cite la source officielle et sa date de publication. Signale toute source qui date d'une année précédente.
Format : cinq lignes au plus, puis la liste des sources, chacune avec son lien et sa date. Si tu ne peux pas confirmer une information, écris « non vérifié ». N'invente aucune date ni aucun lien.
```

- **Exercice** : « Vérifiez une réponse, source par source » — 1. Posez une question d'actualité utile pour vous (bourse, concours, démarche) dans Perplexity ou dans le mode recherche d'un assistant. 2. Ouvrez au moins deux sources et posez les trois questions : qui parle, quand, est-ce écrit dedans ? 3. Notez l'information retenue, avec le lien de la source officielle et sa date.
- **Carte de rappel** : 1. Un numéro, une page à ouvrir · 2. Qui ? Quand ? Écrit dedans ? · 3. La source, pas le résumé
- **Quiz** *(5 questions ; chaque point de la carte de rappel est couvert)* :
  1. Dans une réponse de Perplexity, que signifie le petit numéro après une phrase ? — A) Une note de qualité B) Un lien vers la page qui sert de source C) Le nombre de mots D) Le rang de l'outil — **Réponse : B**
  2. Avant de croire une date trouvée en ligne, que faites-vous ? — A) Vous ouvrez la source et retrouvez la date sur la page B) Vous la partagez tout de suite C) Vous la demandez à un autre assistant, sans source D) Vous la recopiez dans votre cahier — **Réponse : A**
  3. Une source est un article d'une année passée. Que faites-vous ? — A) Vous la croyez, puisqu'elle est en ligne B) Vous la gardez, puisqu'elle est numérotée C) Vous la mettez de côté et cherchez une source officielle et récente D) Vous la transférez à vos amis — **Réponse : C**
  4. Pour une bourse, quelle source passe avant les autres ? — A) Un blog inconnu B) Un message transféré sur WhatsApp C) Un commentaire sur un réseau social D) La page officielle de l'organisme qui finance la bourse — **Réponse : D**
  5. Une réponse affiche cinq sources. Est-elle forcément juste ? — A) Non : il faut ouvrir les sources et vérifier qui parle, quand, et si c'est écrit dedans B) Oui : cinq sources suffisent C) Oui, si elle est longue D) Non : il en faut au moins dix — **Réponse : A**
- **Marques citées** : Perplexity ; Gemini (Google) ; ChatGPT (OpenAI) ; Copilot (Microsoft) ; Claude (Anthropic) ; WhatsApp (Meta).

#### Script v1 (à valider par l'owner)

Durée estimée : 4:00 (dont 3 s de mention légale, Partie 1) · Mots de voix off : 361

**Scène 1 — B1 Accroche · 0:00–0:09 · E**
- Visuel : le compartiment « Recherche » s'ouvre sur une illustration : Koffi devant un tableau d'affichage de l'université, à Lomé, une affiche de bourse floue, son téléphone à la main.
- Écran : « Koffi · Lomé (Togo) · une bourse de master · date limite ? »
- VO : « Leçon précédente : un choix par tâche, après un test. Aujourd'hui, Koffi cherche une bourse de master. »

**Scène 2 — B1 Accroche · 0:09–0:18 · B**
- Visuel : carte promesse, texte révélé en deux temps.
- Écran : « À la fin de cette leçon, vous saurez obtenir une réponse sourcée et vérifier ses sources. »
- VO : « À la fin de cette leçon, vous saurez obtenir une réponse sourcée et vérifier ses sources. » *(promesse dite à 0:09)*

**Scène 3 — B2 Cadrage · 0:18–0:27 · B**
- Visuel : carte, surtitre « Le malentendu » ; « Précis = vérifié ? » ; le signe « = » est barré.
- Écran : « Le malentendu · Précis = vérifié ? »
- VO : « Un assistant lui donne une date, sans source. Le malentendu : précis veut dire vérifié. »

**Scène 4 — B2 Cadrage · 0:27–0:45 · A**
- Visuel : capture réelle : la réponse d'un assistant avec une date précise et aucun lien ; un cadre sur la date, puis l'étiquette « D'où vient cette date ? ».
- Écran : « D'où vient cette date ? »
- VO : « Regardez : une date, nette et assurée. Mais d'où vient-elle ? Aucun lien ne permet de le savoir. Si elle est fausse, Koffi rate sa candidature. »

**Scène 5 — B3 Notion · 0:45–1:12 · C**
- Visuel : schéma : une question entre dans une loupe qui parcourt trois pages web ; un résumé sort, chaque phrase marquée 1, 2 ou 3 et reliée par un fil à sa page.
- Écran : « 1 · Un moteur de réponse cite ses pages » « Un résumé, avec ses preuves »
- VO : « Première idée : un moteur de réponse cite ses pages. Perplexity, par exemple, lit des pages web, puis résume. Chaque phrase porte un numéro : c'est la source. Autrement dit : un résumé, avec ses preuves. Gemini, ChatGPT, Copilot et Claude ont aussi un mode recherche, avec des liens. »

**Scène 6 — B3 Notion · 1:12–1:40 · B**
- Visuel : carte, surtitre « 2 · Ouvrez la source, toujours » ; un numéro devient une porte qui s'ouvre sur une page.
- Écran : « 2 · Ouvrez la source, toujours »
- VO : « Deuxième idée : ouvrez la source, toujours. Le numéro est une porte : touchez-le. Vérifiez que la page dit bien ce que dit le résumé. Parfois, le résumé déforme, ou la page parle d'autre chose. Une source qu'on n'ouvre pas ne prouve rien. »

**Scène 7 — B3 Notion · 1:40–2:12 · C**
- Visuel : trois pictogrammes entrent l'un après l'autre : une personne (qui parle ?), un calendrier (quand ?), une loupe sur une phrase (est-ce écrit dedans ?).
- Écran : « 3 · Qui parle ? Quand ? Est-ce écrit dedans ? »
- VO : « Troisième idée : trois questions à chaque source. Qui parle ? Un organisme officiel, une université, ou un blog inconnu ? Quand ? Cherchez la date de publication. Est-ce écrit dedans ? Retrouvez la phrase exacte sur la page. Pour une bourse, la page de l'organisme qui la finance passe avant tout. »

**Scène 8 — B4 Application · 2:12–2:25 · A**
- Visuel : capture réelle : Perplexity ; la consigne s'écrit (frappe accélérée), puis l'envoi ; en surimpression, les quatre blocs s'allument l'un après l'autre.
- Écran : « Rôle : assistant de recherche » « Contexte : étudiant au Togo, bourse de master » « Tâche : conditions et date limite, sources officielles datées » « Format : 5 lignes + liens et dates »
- VO : « Koffi ouvre Perplexity. Sa consigne en quatre blocs précise quelle bourse, pour qui, quelle année, et exige des sources datées. »

**Scène 9 — B4 Application · 2:25–2:37 · A**
- Visuel : capture réelle : la réponse s'affiche avec ses numéros ; cercle sur la rangée des sources.
- Écran : « Sources numérotées : on les ouvre »
- VO : « La réponse arrive avec des sources numérotées. Il ne s'arrête pas au résumé : il ouvre les sources. »

**Scène 10 — B4 Application · 2:37–2:50 · A**
- Visuel : capture réelle : la page officielle du programme ; défilement jusqu'à la date limite et à la date de publication ; cadre puis coche.
- Écran : « Source officielle · publiée cette année ✓ »
- VO : « Source un : la page officielle du programme. La date limite y figure, publiée cette année. Coche. »

**Scène 11 — B4 Application · 2:50–3:02 · A**
- Visuel : capture réelle : un article plus ancien ; cadre sur sa date ; croix.
- Écran : « Article d'une année passée ✗ »
- VO : « Source deux : un article d'une année passée. Les dates ont pu changer depuis. Croix. »

**Scène 12 — B4 Application · 3:02–3:12 · A**
- Visuel : capture réelle : la relance dans Perplexity, puis l'application de notes : date limite, lien, jour de vérification.
- Écran : « Date + lien + jour de vérification »
- VO : « Il relance : sources officielles seulement, avec leur date. Puis il note la date limite, avec le lien. »

**Scène 13 — B5 Consolidation · 3:12–3:37 · A**
- Visuel : capture réelle : une autre réponse qui affiche au moins cinq sources ; silence ; puis trois d'entre elles s'ouvrent en vignettes : une ancienne, une non officielle, une qui parle d'autre chose.
- Écran : « Cinq sources = réponse juste ? »
- VO : « Une autre réponse affiche cinq sources. Elle est donc juste ? » *(silence, 3 s)* « Non. Le nombre ne prouve rien. Une source peut être ancienne, non officielle, ou dire autre chose. Ouvrez-les. Une seule source officielle vaut plus que cinq copies. »

**Scène 14 — B6 Clôture · 3:37–3:44 · B (carte de rappel, panneau 1)**
- Visuel : carte de rappel, panneau 1 : la promesse ; le compartiment « Recherche » reçoit une étiquette « lien + date ».
- Écran : « À la fin de cette leçon, vous saurez obtenir une réponse sourcée et vérifier ses sources. »
- VO : « Koffi dépose sa candidature avant la date, vérifiée sur la page officielle. »

**Scène 15 — B6 Clôture · 3:44–3:57 · B (carte de rappel)**
- Visuel : carte de rappel, panneau 2 : trois points révélés au rythme de la voix.
- Écran : « 1. Un numéro, une page à ouvrir » « 2. Qui ? Quand ? Écrit dedans ? » « 3. La source, pas le résumé »
- VO : « Un numéro, une page à ouvrir. Qui, quand, et est-ce écrit dedans ? Retenez la source, pas le résumé. Vérifiez une réponse, source par source. »

#### Captures à fournir par l'owner

| Scène | Outil · appareil | Gestes exacts | Texte exact à taper | Durée utile | À masquer |
|---|---|---|---|---|---|
| 4 | Un assistant au choix, version gratuite · téléphone Android | Nouvelle conversation ; envoyer la consigne ; garder une réponse qui donne une date sans lien visible. | « Rôle : tu es un conseiller d'orientation. Contexte : je suis étudiant en licence au Togo et je vise une bourse de master. Tâche : quelle est la date limite de candidature à la bourse [nom du programme] cette année ? Format : une phrase. » (consigne en quatre blocs, mais qui ne demande aucune source : c'est ce manque que la leçon corrige) | 15 s | Compte, historique |
| 8–12 | Perplexity, version gratuite (application Android ou navigateur), interface en français · même téléphone | Taper la consigne ; envoyer ; faire défiler ; toucher la source officielle et défiler jusqu'aux dates ; revenir ; toucher une source ancienne et montrer sa date ; envoyer la relance ; ouvrir l'application de notes et taper la date limite, le lien et le jour de vérification. | 1) « Rôle : tu es un assistant de recherche rigoureux, qui cite ses sources. Contexte : je suis étudiant en licence au Togo et je cherche une bourse de master pour [année]. Tâche : quelles sont les conditions de la bourse [nom du programme] pour les étudiants togolais, et sa date limite de candidature ? Pour chaque information, cite la source officielle et sa date de publication. Signale toute source qui date d'une année précédente. Format : cinq lignes au plus, puis la liste des sources, chacune avec son lien et sa date. Si tu ne peux pas confirmer une information, écris « non vérifié ». » 2) Relance, dans la même conversation (rôle et contexte déjà posés) : « Tâche : ne garde que les sources officielles. Format : chaque source avec son lien et sa date de publication. » | 60 s (frappe accélérée au montage) | Compte, historique |
| 13 | Perplexity · même téléphone | Poser une question d'actualité qui produit au moins cinq sources ; ouvrir trois sources l'une après l'autre. | Consigne en quatre blocs (rôle, contexte, tâche, format) sur une question d'actualité d'un autre pays, sans donnée personnelle ; par exemple : « Rôle : tu es un assistant de recherche. Contexte : je prépare un concours au Sénégal. Tâche : quelles sont les dates du concours d'entrée [nom de l'école] cette année ? Format : trois lignes, avec les sources. » | 20 s | Compte, historique |

#### Notes de script

- Prononciation : « Perplexity » se dit « per-plek-si-ti ».
- Choisir au moment du tournage un programme de bourse réel, en cours et ouvert aux étudiants togolais, avec une page officielle datée. La voix reste générique (« la bourse ») ; le nom du programme n'apparaît que dans les captures. Ne jamais présenter ce programme comme une recommandation.
- Scène 4 : beaucoup d'assistants cherchent désormais sur le web d'eux-mêmes et affichent des liens. S'il est impossible d'obtenir une réponse sans lien, la voix devient : « Regardez : une date, et des liens. Les a-t-il ouverts ? Si la date est fausse, Koffi rate sa candidature. » [à vérifier au moment de la production]
- Scène 5 : vérifier que la recherche web avec liens est bien disponible dans la version gratuite de chacun des quatre assistants cités ; retirer de la phrase tout outil qui ne l'offre pas. [à vérifier au moment de la production]
- Scènes 10 et 11 : annoter les sources réellement obtenues. Si aucune source ancienne n'apparaît, refaire la recherche sur un autre programme, ou adapter la voix à ce que montre l'écran.
- Si une page demande de l'argent pour « réserver » une bourse, c'est un signal d'alerte : renvoyer au cours 10, sans le développer ici.
- Termes nouveaux : « moteur de réponse » (scène 5, redit « un résumé, avec ses preuves »). « Source » est un mot courant, montré à l'écran.
- Adaptation EN : « moteur de réponse » = *answer engine* ; « réponse sourcée » = *sourced answer* ; « date de publication » = *publication date*.
- Adaptation HA / DJE : garder « Perplexity » tel quel ; pour « source », employer le mot local le plus simple (« l'endroit d'où vient l'information »), puis le garder. Koffi parle français et éwé ; ses consignes et ses sources restent en français.

### Leçon 4 — IA gratuite ou payante : ce que vous échangez vraiment, et comment protéger vos données (`og4`)

#### Fiche

- **Promesse** : « Vous saurez ce que vous échangez contre un outil IA gratuit, et comment protéger vos données. »
- **Cas réel (B1 → B6)** : Hadiza, couturière près du grand marché de Zinder (Niger), a collé dans un assistant la liste de ses clientes, avec leurs numéros, pour préparer un message (cas fictif). Une voisine lui dit : « Payez, vous serez protégée. » Enjeu : des données de clientes confiées à un outil, et une fausse sécurité. B6 (champ `example`) : Hadiza règle son assistant, supprime la conversation, et refait sa demande sans nom ni numéro ; elle garde la version gratuite.
- **Unités de notion (B3)** : 1. Gratuit : vous payez en données et en attention — vos conversations peuvent servir à améliorer le service, et des publicités peuvent apparaître selon la version et le pays [à vérifier au moment de la production]. · 2. Payant : des fonctions, pas une protection automatique — la version payante ajoute des fonctions et élargit des limites ; la confidentialité dépend des réglages, pas du paiement ; on commence par le gratuit. · 3. Trois gestes pour vous protéger — couper l'usage de vos conversations pour entraîner l'outil, utiliser la conversation temporaire, supprimer ce qui doit disparaître ; et ne jamais taper de nom, de numéro ni de photo de client.
- **Démo (B4)** : l'assistant de Hadiza (Gemini conseillé), version gratuite, sur téléphone Android. 1. Réglages, rubrique des données : l'option qui permet d'utiliser ses conversations pour améliorer le service est désactivée. 2. Lecture du texte d'explication : même réglé, certaines conversations peuvent encore être relues pour la sécurité du service [à vérifier au moment de la production]. 3. Ouverture d'une conversation temporaire pour un sujet sensible. 4. Suppression de la conversation qui contient la liste de clientes. 5. Nouvelle demande en quatre blocs (rôle, contexte, tâche, format), sans nom ni numéro : seulement le modèle de message. Résultat à l'écran : un réglage désactivé, une conversation supprimée, une demande propre.
- **Consolidation (B5)** : prédiction. Hadiza a supprimé sa liste de clientes de l'historique : ces noms sont-ils effacés partout ? Réponse : pas forcément. Supprimer retire la conversation de votre vue ; une copie peut rester un temps chez l'éditeur [à vérifier au moment de la production]. Il faut donc ne jamais taper ce qui ne doit pas sortir.
- **Ouverture (fin de la notion, avant B6)** : une autre voie existe : une IA installée sur votre appareil garde vos données chez vous ; ce sera l'objet des leçons 5 et 6.
- **Consigne à copier** :

```text
Rôle : tu es un assistant de rédaction pour un petit commerce, chaleureux et poli.
Contexte : je suis [couturière] et je préviens mes clientes sur WhatsApp. Je ne te donne volontairement aucune donnée de client.
Tâche : rédige un modèle de message pour prévenir une cliente que [sa commande est prête]. Laisse des crochets à la place du prénom : [prénom].
Format : cinq lignes au plus, ton chaleureux et poli. Ne me demande aucun nom, aucun numéro, aucune photo.
```

- **Exercice** : « Réglez votre assistant et nettoyez votre historique » — 1. Ouvrez les réglages de votre assistant principal, trouvez l'option sur l'usage de vos conversations et décidez de l'activer ou non. 2. Repérez la conversation temporaire et essayez-la avec une question sans donnée personnelle. 3. Relisez votre historique, supprimez toute conversation qui contient un nom, un numéro ou une photo, et écrivez votre règle de données en une phrase.
- **Carte de rappel** : 1. Gratuit : payé en données · 2. Payant : plus de fonctions · 3. Trois gestes de protection
- **Quiz** *(5 questions ; chaque point de la carte de rappel est couvert)* :
  1. Une version gratuite coûte : — A) rien du tout, sans contrepartie B) pas d'argent, mais vos données et votre attention peuvent servir C) toujours de l'argent caché D) votre téléphone — **Réponse : B**
  2. Que change une version payante ? — A) Elle garantit la confidentialité B) Elle supprime vos conversations C) Elle ajoute des fonctions ; les réglages restent à vérifier D) Elle rend l'IA toujours exacte — **Réponse : C**
  3. Quel geste limite l'usage de vos conversations pour entraîner l'outil ? — A) Changer de fond d'écran B) Écrire plus vite C) Fermer l'application D) Désactiver l'option dans les réglages de données — **Réponse : D**
  4. Pour un sujet sensible, que choisissez-vous ? — A) Une conversation temporaire, sans nom ni numéro B) L'historique habituel C) Un message WhatsApp D) Un groupe public — **Réponse : A**
  5. Hadiza a supprimé une conversation. Que sait-on ? — A) Tout est effacé partout, pour toujours B) Rien n'a changé C) Elle disparaît de votre vue, mais une copie peut rester un temps : ne tapez pas de données sensibles D) L'IA oublie son entraînement — **Réponse : C**
- **Marques citées** : Gemini (Google) ; WhatsApp (Meta).

#### Script v1 (à valider par l'owner)

Durée estimée : 4:00 (dont 3 s de mention légale, Partie 1) · Mots de voix off : 377

**Scène 1 — B1 Accroche · 0:00–0:09 · E**
- Visuel : le cadenas posé sur la boîte à outils s'ouvre sur une illustration : Hadiza à sa machine à coudre, dans son atelier de Zinder, un téléphone à la main, une liste de prénoms floue sur l'écran (aucun nom lisible).
- Écran : « Hadiza · couturière · Zinder (Niger) · la liste de ses clientes »
- VO : « Leçon précédente : ouvrez la source. Hadiza, elle, a collé la liste de ses clientes. »

**Scène 2 — B1 Accroche · 0:09–0:18 · B**
- Visuel : carte promesse, texte révélé en deux temps.
- Écran : « Vous saurez ce que vous échangez contre un outil IA gratuit, et comment protéger vos données. »
- VO : « Vous saurez ce que vous échangez contre un outil IA gratuit, et comment protéger vos données. » *(promesse dite à 0:09)*

**Scène 3 — B2 Cadrage · 0:18–0:27 · B**
- Visuel : carte, surtitre « Le malentendu » ; « Payer = protégé ? » ; le signe « = » est barré.
- Écran : « Le malentendu · Payer = protégé ? »
- VO : « Une voisine lui dit : payez, vous serez protégée. Le malentendu : payer règle tout. »

**Scène 4 — B2 Cadrage · 0:27–0:44 · A**
- Visuel : capture réelle : l'historique de l'assistant, titres de conversations fictifs ; un cadre sur la liste, puis l'étiquette « Gardé ».
- Écran : « Une version gratuite a un prix »
- VO : « Regardez l'historique de Hadiza : ses conversations sont gardées. Une version gratuite ne coûte pas d'argent, mais elle a un prix. Lequel ? On le découvre en trois idées. »

**Scène 5 — B3 Notion · 0:44–1:04 · C**
- Visuel : balance : le plateau « argent » reste vide ; l'autre plateau reçoit « données » et « attention » ; aucun chiffre.
- Écran : « 1 · Gratuit : vous payez en données et en attention »
- VO : « Première idée : gratuit ne veut pas dire sans prix. Vos conversations peuvent servir à améliorer le service. Des publicités peuvent aussi apparaître, selon la version et le pays. Vous payez avec vos données et votre attention. »

**Scène 6 — B3 Notion · 1:04–1:26 · C**
- Visuel : la balance, deuxième plateau : un nouveau pictogramme « fonctions » ; un cadenas reste ouvert à côté, avec la mention « réglages ».
- Écran : « 2 · Payant : des fonctions, pas de protection automatique »
- VO : « Deuxième idée : le payant ajoute des fonctions et élargit des limites. Il ne règle pas automatiquement la confidentialité. Vérifiez toujours les réglages, même après paiement. Commencez par le gratuit, et payez seulement si un vrai besoin apparaît. »

**Scène 7 — B3 Notion · 1:26–1:54 · B**
- Visuel : carte, surtitre « 3 · Trois gestes pour vous protéger » ; trois pictogrammes entrent un par un : interrupteur, bulle temporaire, corbeille.
- Écran : « 3 · Réglage · Conversation temporaire · Suppression »
- VO : « Troisième idée : trois gestes pour vous protéger. Un : coupez l'usage de vos conversations pour entraîner l'outil, dans les réglages. Deux : utilisez la conversation temporaire pour un sujet sensible. Trois : supprimez ce qui doit disparaître. Et surtout : ne tapez jamais un nom ou un numéro de client. »

**Scène 8 — B4 Application · 1:54–2:06 · A**
- Visuel : capture réelle : réglages de l'assistant, rubrique des données ; l'option est désactivée ; coche.
- Écran : « Réglages → données → usage des conversations : désactivé »
- VO : « Hadiza ouvre les réglages de son assistant, rubrique données. Elle désactive l'usage de ses conversations pour entraîner l'outil. »

**Scène 9 — B4 Application · 2:06–2:18 · A**
- Visuel : capture réelle : le texte d'explication de la rubrique ; cadre sur la phrase qui mentionne la relecture ou la sécurité du service.
- Écran : « Réglé ≠ invisible »
- VO : « Elle lit l'explication. Même réglée, la protection n'est pas totale. Certaines conversations peuvent encore être relues pour la sécurité du service. »

**Scène 10 — B4 Application · 2:18–2:30 · A**
- Visuel : capture réelle : ouverture d'une conversation temporaire ; le bandeau qui l'indique est encadré.
- Écran : « Conversation temporaire »
- VO : « Pour un sujet sensible, elle ouvre une conversation temporaire. Elle ne reste pas dans l'historique. »

**Scène 11 — B4 Application · 2:30–2:42 · A**
- Visuel : capture réelle : suppression d'une conversation de test ; confirmation ; la ligne disparaît de l'historique.
- Écran : « Conversation supprimée de l'historique »
- VO : « Puis elle supprime la conversation où figure la liste de clientes. Supprimer aide, mais ne remplace pas la prudence. »

**Scène 12 — B4 Application · 2:42–2:54 · A**
- Visuel : capture réelle : nouvelle conversation ; la consigne en quatre blocs est tapée, avec [prénom] à la place des noms ; envoi ; le modèle de message s'affiche.
- Écran : « Rôle · Contexte · Tâche · Format : [prénom] à la place des noms » « Un modèle de message : aucun client dedans »
- VO : « Enfin, elle refait sa demande sans nom ni numéro : seulement le modèle de message. L'outil n'en a pas besoin. »

**Scène 13 — B5 Consolidation · 2:54–3:19 · A**
- Visuel : capture réelle : l'historique après suppression, la conversation a disparu ; la question s'affiche en surimpression ; silence ; puis une copie fantôme apparaît derrière la corbeille.
- Écran : « Supprimé = effacé partout ? »
- VO : « Hadiza a supprimé sa liste de clientes de l'historique. Ces noms sont-ils effacés partout ? » *(silence, 3 s)* « Pas forcément. Supprimer retire la conversation de votre vue. Une copie peut rester un temps chez l'éditeur. Alors ne tapez jamais ce qui ne doit pas sortir. »

**Scène 14 — B5 Ouverture · 3:19–3:37 · C**
- Visuel : la boîte à outils, puis un téléphone et un ordinateur ; une bulle de données part vers un nuage, s'arrête et revient dans l'appareil, qui reçoit un cadenas fermé ; étiquette « Leçons 5 et 6 ». Aucun nom d'outil, aucun chiffre.
- Écran : « Une IA installée sur votre appareil : vos données restent chez vous » « → Leçons 5 et 6 »
- VO : « Autre voie : une IA installée sur votre appareil garde vos données chez vous. Ce sera l'objet des leçons cinq et six. »

**Scène 15 — B6 Clôture · 3:37–3:44 · B (carte de rappel, panneau 1)**
- Visuel : carte de rappel, panneau 1 : la promesse ; le cadenas se referme sur la boîte à outils.
- Écran : « Vous saurez ce que vous échangez contre un outil IA gratuit, et comment protéger vos données. »
- VO : « Hadiza garde le gratuit. Ses clientes restent anonymes pour l'outil. »

**Scène 16 — B6 Clôture · 3:44–3:57 · B (carte de rappel)**
- Visuel : carte de rappel, panneau 2 : trois points révélés au rythme de la voix.
- Écran : « 1. Gratuit : payé en données » « 2. Payant : plus de fonctions » « 3. Trois gestes de protection »
- VO : « Gratuit : vous payez en données. Payant : plus de fonctions, pas plus de protection. Trois gestes vous protègent. Réglez votre assistant et nettoyez votre historique. »

#### Captures à fournir par l'owner

| Scène | Outil · appareil | Gestes exacts | Texte exact à taper | Durée utile | À masquer |
|---|---|---|---|---|---|
| 4 | Assistant retenu (Gemini conseillé), version gratuite · téléphone Android | Ouvrir l'historique des conversations, après avoir créé trois conversations de test aux titres fictifs, dont « Liste clientes (test) » ; écran immobile. | Dans la conversation de test : « Voici ma liste : [prénom 1], [prénom 2], [prénom 3]. » (crochets compris, aucune donnée réelle) | 15 s | Compte, avatar, tout autre titre de conversation |
| 8–9 | Même assistant · même téléphone | Ouvrir les réglages, rubrique des données ou de l'activité ; désactiver l'option qui permet d'utiliser les conversations pour améliorer le service ; faire défiler le texte d'explication jusqu'à la phrase sur la relecture ou la sécurité. | Aucun | 25 s | Compte, adresse e-mail |
| 10 | Même assistant | Ouvrir une conversation temporaire (menu ou icône dédiée) ; laisser le bandeau visible. | Aucun | 10 s | Compte |
| 11 | Même assistant | Ouvrir l'historique ; supprimer la conversation « Liste clientes (test) » ; confirmer. | Aucun | 12 s | Compte, autres conversations |
| 13 | Même assistant | Rester sur l'historique après la suppression de la scène 11 ; écran immobile. | Aucun | 10 s | Compte, autres conversations |
| 12 | Même assistant | Nouvelle conversation ; taper la consigne ; envoyer ; laisser la réponse s'afficher. | « Rôle : tu es un assistant de rédaction pour un petit commerce, chaleureux et poli. Contexte : je suis couturière et je préviens mes clientes sur WhatsApp. Je ne te donne volontairement aucune donnée de client. Tâche : rédige un modèle de message pour prévenir une cliente que sa commande est prête. Laisse des crochets à la place du prénom : [prénom]. Format : cinq lignes au plus, ton chaleureux et poli. Ne me demande aucun nom, aucun numéro, aucune photo. » | 20 s | Compte, historique |

#### Notes de script

- Prononciation : « Gemini » se dit « jé-mi-ni ».
- Cette leçon ne cite aucun chiffre : ni durée de conservation, ni nombre de pays, ni montant. Ne pas en ajouter au montage.
- Vérifier le jour du tournage, dans l'assistant retenu : le nom et l'emplacement de l'option sur l'usage des conversations ; la valeur par défaut (qui diffère selon les outils et l'âge du compte) ; l'existence de la conversation temporaire ; la phrase d'explication sur la relecture. Adapter les scènes 8 à 11 au libellé réel. [à vérifier au moment de la production]
- Scène 5 : la présence de publicités dépend de la version, du pays et de l'outil ; si l'assistant retenu n'en montre pas, garder la phrase au conditionnel (« peuvent apparaître ») et ne pas l'illustrer. [à vérifier au moment de la production]
- Scène 13 : une conversation supprimée peut rester un temps chez l'éditeur, et certaines conversations relues par des personnes peuvent être conservées plus longtemps ; la durée varie selon l'outil, donc aucune durée n'est dite. [à vérifier au moment de la production]
- Scènes 4 et 8 à 12 : toutes les conversations de test sont fictives, avec des crochets à la place des noms et des numéros. Ne jamais filmer une vraie liste de clients.
- Cette leçon ne dit rien d'un outil en particulier : les réglages existent, sous des noms différents, dans les autres assistants. Si l'owner préfère un autre assistant, remplacer « Gemini » partout dans la fiche.
- Promesse : reprise mot pour mot du §2.3, sans la formule d'ouverture « À la fin de cette leçon » des autres leçons, pour rester sous dix-huit mots par phrase (avec la formule, la phrase en compterait vingt et un). Même texte sur la carte promesse (scène 2) et sur la carte de rappel (scène 15).
- Scène 14 (ouverture vers les leçons 5 et 6) : aucune promesse chiffrée, aucun nom d'outil ; la voix dit « une IA installée sur votre appareil », pas « hors connexion » ni « gratuite », que les leçons 5 et 6 développent.
- Termes nouveaux : « entraîner l'outil » (scène 5, glosé « améliorer le service »). « Modèle » au sens technique a été défini en leçon 1 (l'application n'est pas le modèle), mais cette leçon ne l'emploie pas : « modèle de message » est toujours dit en entier et désigne seulement un texte à réutiliser.
- Adaptation EN : « conversation temporaire » = *temporary chat* ; « historique » = *chat history* ; « entraîner l'outil » = *train the tool*.
- Adaptation HA / DJE : « gratuit mais il a un prix » est une formule imagée ; la rendre par l'idée « ce n'est pas payé en argent, mais en informations ». Garder « WhatsApp » et les noms de produits.

### Leçon 5 — Installer une IA open source sur votre téléphone, pour l'utiliser hors connexion (`og5`)

#### Fiche

- **Promesse** : « Vous saurez installer une IA open source sur votre téléphone et l'utiliser sans connexion. » *(phrase du §2.3 au mot près ; le préfixe « À la fin de cette leçon » est omis pour rester sous dix-huit mots, voir les notes)*
- **Cas réel (B1 → B6)** : Koffi, étudiant en licence à Lomé (Togo), révise dans le bus entre Lomé et son village. Le réseau disparaît souvent en route, et son assistant en ligne ne répond plus. Enjeu : réviser ses examens partout, sans dépendre du réseau ni de son forfait de données. B6 (champ `example`) : Koffi révise dans le bus, téléphone en mode avion ; l'IA installée sur son téléphone lui explique son cours et lui pose des questions.
- **Unités de notion (B3)** : 1. Un modèle open source s'installe — l'application n'est pas le modèle (leçon 1) ; le modèle est un fichier que l'on télécharge ; « open source » veut dire ouvert : ses fichiers se téléchargent librement (familles Gemma de Google, Qwen, Llama, Mistral). Installé, il apporte trois avantages : vos questions restent dans votre téléphone, il est gratuit, il répond sans connexion. · 2. Le bon modèle, c'est celui que votre téléphone supporte — un petit modèle de téléphone pèse environ 2,5 Go [à vérifier au moment de la production] ; il prend de la place, et de la mémoire pour tourner ; on vérifie l'espace libre et on prend le plus petit modèle proposé. « Le meilleur modèle, c'est celui que votre appareil supporte et qui correspond à votre usage. » · 3. Les limites, honnêtement — un petit modèle donne des réponses plus simples, parfois fausses : on les vérifie avec son cours ; il occupe de la place et consomme de la batterie.
- **Démo (B4)** : Google AI Edge Gallery (Google), gratuit, sur téléphone Android ; existe aussi sur iPhone (App Store). 1. Koffi installe Google AI Edge Gallery depuis le Play Store. 2. À l'ouverture, l'application propose plusieurs modèles ; il choisit le plus petit modèle Gemma. 3. Chez lui, en wifi, il le télécharge une seule fois. 4. Dans le bus, il passe en mode avion et ouvre la conversation. 5. Il tape sa question de révision en quatre blocs RCTF (carte G). 6. La réponse arrive en mode avion : une explication simple et trois questions ; il la vérifie avec son cours. 7. Alternative : PocketPal AI (Android et iPhone), même principe. Résultat à l'écran : une réponse affichée, icône du mode avion visible.
- **Consolidation (B5)** : prédiction. Toujours en mode avion, Koffi demande la date limite d'une bourse de cette année : son IA installée peut-elle répondre ? Réponse : pas de façon fiable. Elle n'a pas accès à Internet ; ses connaissances s'arrêtent à son entraînement ; elle peut donner une date ancienne ou inventée. Pour une information récente : la recherche sourcée (leçon 3), une fois connecté.
- **Consigne à copier** :

```text
Rôle : tu es un tuteur patient pour un étudiant en licence.
Contexte : je révise mon examen de [matière] sur mon téléphone, sans connexion.
Tâche : explique [la notion, par exemple la loi de l'offre et de la demande] avec un exemple simple tiré d'un marché, puis pose-moi [3] questions pour me tester.
Format : [10] lignes au plus, phrases courtes, sans les réponses aux questions.
```

- **Exercice** : « Installez une IA sur votre téléphone et testez-la en mode avion » — 1. Vérifiez l'espace libre de votre téléphone, puis installez Google AI Edge Gallery (ou PocketPal AI). 2. En wifi, téléchargez le plus petit modèle proposé, une seule fois. 3. Passez en mode avion, posez une question de révision ou de travail avec la consigne RCTF, et vérifiez la réponse avec votre cours ou un document de référence.
- **Carte de rappel** : 1. Installée : vos données restent chez vous · 2. Le plus petit modèle que supporte votre téléphone · 3. En wifi, une seule fois · 4. Réponses simples, à vérifier
- **Quiz** *(5 questions ; chaque point de la carte de rappel est couvert)* :
  1. Quel avantage apporte une IA installée sur votre téléphone ? — A) Elle connaît l'actualité du jour B) Vos questions restent dans votre téléphone, et elle répond sans connexion C) Elle crée des vidéos D) Elle remplace votre professeur — **Réponse : B**
  2. Le téléphone de Koffi a peu d'espace libre. Quel modèle choisit-il ? — A) Le plus gros, pour avoir de meilleures réponses B) Tous les modèles proposés, pour comparer C) Le plus petit modèle proposé par l'application D) Un modèle prévu pour ordinateur — **Réponse : C**
  3. Quand Koffi doit-il télécharger le modèle ? — A) Une seule fois, en wifi, avant de partir B) À chaque nouvelle question C) Une fois en mode avion D) Chaque matin, avec ses données mobiles — **Réponse : A**
  4. La réponse du petit modèle paraît juste, mais très simple. Que fait Koffi ? — A) Il la recopie sans la relire B) Il supprime l'application C) Il la partage à toute sa classe D) Il la vérifie avec son cours — **Réponse : D**
  5. En mode avion, Koffi demande la date limite d'une bourse de cette année. Que se passe-t-il ? — A) L'IA installée va chercher la date sur Internet B) La réponse est forcément exacte C) Sans Internet, la réponse peut être ancienne ou inventée : il fera une recherche sourcée une fois connecté D) L'application refuse de s'ouvrir — **Réponse : C**
- **Marques citées** : Google AI Edge Gallery, Gemma, Android, Play Store (Google) ; iPhone, App Store (Apple) ; PocketPal AI ; Qwen (Alibaba) ; Llama (Meta) ; Mistral (Mistral AI).

#### Script v1 (à valider par l'owner)

Durée estimée : 4:30 (dont 3 s de mention légale, Partie 1) · Mots de voix off : 465

**Scène 1 — B1 Accroche · 0:00–0:10 · E**
- Visuel : sous la boîte à outils, le nouveau tiroir « Installé sur mon appareil » s'ouvre sur une illustration en aplats : Koffi assis dans un bus, sac à dos, cahier de cours ouvert ; sur son téléphone, l'icône de réseau barrée.
- Écran : « Koffi · étudiant · Lomé (Togo) »
- VO : « Leçon précédente : une IA installée garde vos données chez vous. Koffi, étudiant à Lomé, révise dans le bus. »

**Scène 2 — B1 Accroche · 0:10–0:18 · B**
- Visuel : carte promesse, texte révélé en deux temps.
- Écran : « Vous saurez installer une IA open source sur votre téléphone et l'utiliser sans connexion. »
- VO : « Vous saurez installer une IA open source sur votre téléphone et l'utiliser sans connexion. » *(promesse dite à 0:10)*

**Scène 3 — B2 Cadrage · 0:18–0:28 · B**
- Visuel : carte, surtitre « Le malentendu » ; une bulle de conversation reste vide, puis l'étiquette « Sans réseau, pas d'IA ? ».
- Écran : « Le malentendu · Sans réseau, pas d'IA ? »
- VO : « Plus de réseau : son assistant en ligne ne répond plus. Le malentendu : sans connexion, pas d'IA possible. »

**Scène 4 — B2 Cadrage · 0:28–0:43 · C**
- Visuel : schéma en deux colonnes. À gauche, un téléphone relié par une ligne pointillée à un serveur lointain ; la ligne se coupe (croix). À droite, un téléphone avec un petit cube « modèle » à l'intérieur (coche).
- Écran : « En ligne : la question part au loin · Installé : tout reste dans le téléphone »
- VO : « Une application en ligne envoie votre question à un serveur, loin de vous. Sans réseau, rien ne revient. Mais un modèle d'IA peut aussi tourner dans votre téléphone. »

**Scène 5 — B3 Notion · 0:43–1:03 · C**
- Visuel : rappel de la leçon 1 : l'étiquette « Application » se détache d'un cube « Modèle » ; le cube devient une icône de fichier qui descend dans un téléphone ; quatre noms de familles s'inscrivent en texte simple autour.
- Écran : « 1 · Un modèle open source = un fichier à télécharger » « Gemma · Qwen · Llama · Mistral »
- VO : « Première idée : souvenez-vous, l'application n'est pas le modèle. Le modèle est un fichier, que l'on peut télécharger. Open source veut dire ouvert : ses fichiers se téléchargent librement. Gemma, de Google, Qwen, Llama ou Mistral en font partie. »

**Scène 6 — B3 Notion · 1:03–1:17 · C**
- Visuel : trois pictogrammes entrent un par un autour du téléphone : cadenas (données chez soi), étiquette « gratuit » sans montant, avion (hors connexion).
- Écran : « Données chez vous · Gratuit · Sans connexion »
- VO : « Installé, il apporte trois avantages. Vos questions restent dans votre téléphone. Le modèle est gratuit. Et il répond sans connexion, même en mode avion. »

**Scène 7 — B3 Notion · 1:17–1:42 · C**
- Visuel : une jauge d'espace de téléphone ; trois blocs « modèle » de tailles différentes tentent d'y entrer ; seul le plus petit tient, coche.
- Écran : « 2 · Le plus petit modèle que supporte votre téléphone » « Petit modèle ≈ 2,5 Go »
- VO : « Deuxième idée : choisissez le modèle selon votre téléphone. Un petit modèle pèse environ deux gigaoctets et demi. Il prend de la place, et de la mémoire pour tourner. Vérifiez votre espace libre, puis prenez le plus petit modèle proposé. Le meilleur modèle, c'est celui que votre appareil supporte. »

**Scène 8 — B3 Notion · 1:42–1:59 · B**
- Visuel : carte, surtitre « 3 · Les limites » ; trois pictogrammes entrent un par un : bulle simple avec point d'interrogation, jauge d'espace, batterie.
- Écran : « 3 · Réponses plus simples · place · batterie »
- VO : « Troisième idée : les limites, honnêtement. Un petit modèle donne des réponses plus simples, parfois fausses. Vérifiez-les avec votre cours. Il occupe de la place, et il consomme de la batterie. »

**Scène 9 — B4 Application · 1:59–2:14 · A**
- Visuel : extrait du live : la diapositive « Démo 2 · Sur téléphone » (plan fixe), puis la recherche de l'application dans le magasin d'applications ; cadre sur la fiche de Google AI Edge Gallery.
- Écran : « Google AI Edge Gallery · Play Store ou App Store »
- VO : « Place à la démonstration, avec Google AI Edge Gallery, une application gratuite de Google. Koffi l'installe depuis le Play Store. Elle existe aussi sur iPhone. »

**Scène 10 — B4 Application · 2:14–2:26 · A**
- Visuel : extrait du live : la liste des modèles proposés par l'application ; cadre sur le plus petit modèle Gemma ; les autres restent visibles.
- Écran : « Le plus petit modèle Gemma »
- VO : « À l'ouverture, l'application propose plusieurs modèles. Koffi choisit le plus petit modèle Gemma. Les autres sont plus gros. »

**Scène 11 — B4 Application · 2:26–2:37 · A**
- Visuel : capture neuve : l'icône wifi encadrée en haut de l'écran, le bouton de téléchargement touché, la barre de progression (accélérée au montage) jusqu'à la fin ; coche.
- Écran : « En wifi · une seule fois »
- VO : « Il le télécharge chez lui, en wifi, une seule fois. Ensuite, le modèle reste dans son téléphone. »

**Scène 12 — B4 Application · 2:37–2:49 · A**
- Visuel : capture neuve : le volet des réglages rapides s'ouvre, le mode avion s'active ; l'icône d'avion est encadrée ; retour dans l'application, nouvelle conversation.
- Écran : « Mode avion activé »
- VO : « Dans le bus, il passe en mode avion : plus de réseau, plus de wifi. Il ouvre la conversation. »

**Scène 13 — B4 Application · 2:49–3:07 · G**
- Visuel : carte de consigne sur fond clair, en deux panneaux successifs (la consigne complète figure dans la fiche, sous la vidéo).
- Écran : « Rôle : tuteur patient · Contexte : je révise sans connexion » « Tâche : expliquer l'offre et la demande + 3 questions · Format : 10 lignes, sans réponses »
- VO : « Il tape sa question de révision en quatre blocs. Rôle : un tuteur patient. Contexte : il révise sans connexion. Tâche : expliquer l'offre et la demande, puis trois questions. Format : dix lignes, sans les réponses. »

**Scène 14 — B4 Application · 3:07–3:21 · A**
- Visuel : capture neuve : la consigne envoyée, la réponse qui s'affiche ; l'icône d'avion reste encadrée en haut de l'écran ; cadre sur les trois questions ; coche.
- Écran : « Réponse en mode avion »
- VO : « La réponse arrive, toujours en mode avion. Une explication simple, un exemple de marché, puis trois questions. Koffi vérifie ensuite avec son cours. »

**Scène 15 — B4 Application · 3:21–3:32 · B**
- Visuel : carte, surtitre « Autre application » ; le nom écrit en texte simple, deux pictogrammes de téléphone (Android, iPhone) ; le cube « modèle » descend dans chacun.
- Écran : « Autre application : PocketPal AI · Android et iPhone »
- VO : « Autre application possible : PocketPal AI, sur Android et sur iPhone. Même principe : un petit modèle, téléchargé une seule fois. »

**Scène 16 — B5 Consolidation · 3:32–4:00 · B**
- Visuel : carte question : « Mode avion : la date limite d'une bourse ? » ; silence ; puis un calendrier barré d'un point d'interrogation, et une flèche vers « Recherche sourcée (leçon 3) ».
- Écran : « Mode avion : la date limite d'une bourse ? » « → Recherche sourcée, une fois connecté (leçon 3) »
- VO : « Toujours en mode avion, Koffi demande la date limite d'une bourse de cette année. Son IA peut-elle répondre ? » *(silence, 3 s)* « Pas de façon fiable. Elle n'a pas accès à Internet. Elle peut donner une date ancienne, ou inventée. Pour une information récente, faites une recherche sourcée, une fois connecté. »

**Scène 17 — B6 Clôture · 4:00–4:08 · B (carte de rappel, panneau 1)**
- Visuel : carte de rappel, panneau 1 : la promesse ; sous la carte, Koffi dans le bus, l'icône d'avion sur son téléphone, une bulle de réponse.
- Écran : « Vous saurez installer une IA open source sur votre téléphone et l'utiliser sans connexion. »
- VO : « Koffi révise dans le bus, en mode avion, et son IA lui répond. »

**Scène 18 — B6 Clôture · 4:08–4:27 · B (carte de rappel)**
- Visuel : carte de rappel, panneau 2 : quatre points révélés au rythme de la voix.
- Écran : « 1. Installée : vos données restent chez vous » « 2. Le plus petit modèle que supporte votre téléphone » « 3. En wifi, une seule fois » « 4. Réponses simples, à vérifier »
- VO : « Installée, l'IA garde vos données chez vous. Prenez le plus petit modèle que supporte votre téléphone. Téléchargez-le en wifi, une seule fois. Vérifiez ses réponses. Installez une IA sur votre téléphone et testez-la en mode avion. »

#### Captures à fournir par l'owner

Source par défaut : l'enregistrement du live du 24/10/2026 (`~/Downloads/Video Weekend IA/Weekend-IA - Installer une IA Gratuite - 2026_10_24 21_23 WAT - Recording.mp4`, 1280 × 720). Pour chaque extrait : recadrer sur la zone de partage d'écran (sans le cadre de l'outil de visioconférence) ; masquer la vignette des participants, la liste et la fenêtre de discussion, et tout nom de participant (bloc `#111827`) ; couper le son du live (voix régénérée, §2.1). Les timecodes sont ceux du fichier, à affiner à l'image près. Lignes « **À capturer à neuf** » : sur le téléphone Android du cours, interface en français, mode clair.

| Scène | Outil · appareil | Gestes exacts | Texte exact à taper | Durée utile | À masquer |
|---|---|---|---|---|---|
| 9 | Live · diapositive, puis téléphone de l'owner en partage d'écran | **46:15–46:25** : diapositive « Démo 2 · Sur téléphone », plan fixe. **41:30–41:56** : recherche « AI Edge Gallery » dans le magasin d'applications et fiche de l'application (à défaut : **46:02–46:37**, même manipulation sur iPhone). | Aucun (déjà dans le live) | 4 s + 8 s | Vignette des participants, discussion, noms ; barre de notifications du téléphone |
| 10 | Live · Google AI Edge Gallery | **46:37–47:28** : liste des modèles proposés, avec leurs tailles ; s'arrêter 3 s sur le plus petit modèle Gemma. Complément possible : **41:56–42:46** (modèle déjà téléchargé, plus petit que celui de l'ordinateur). | Aucun | 10 s | Idem ; les noms de versions restent visibles, la voix ne les lit pas |
| 11 | **À capturer à neuf** · Google AI Edge Gallery · téléphone Android du cours, en wifi | Le live ne montre aucun téléchargement en cours (modèle déjà installé). Ouvrir la liste des modèles ; toucher le téléchargement du plus petit modèle Gemma ; filmer la progression jusqu'à la fin (accélérée au montage). L'icône wifi doit rester visible. | Aucun | 15 s (après accélération) | Compte, notifications |
| 12 | **À capturer à neuf** · même téléphone | Le live ne coupe jamais le réseau (l'owner l'explique vers 43:34). Ouvrir le volet des réglages rapides ; activer le mode avion ; vérifier que wifi et données sont coupés ; revenir dans Google AI Edge Gallery ; ouvrir une nouvelle conversation avec le petit modèle Gemma. | Aucun | 10 s | Notifications, nom de l'opérateur |
| 14 | **À capturer à neuf** · même téléphone, toujours en mode avion | Taper la consigne ; envoyer ; laisser la réponse s'afficher en entier ; faire défiler jusqu'aux trois questions. L'icône d'avion doit rester visible pendant toute la prise. | « Rôle : tu es un tuteur patient pour un étudiant en licence. Contexte : je révise mon examen d'économie sur mon téléphone, sans connexion. Tâche : explique la loi de l'offre et de la demande avec un exemple simple tiré d'un marché, puis pose-moi 3 questions pour me tester. Format : 10 lignes au plus, phrases courtes, sans les réponses aux questions. » | 25 s (frappe accélérée au montage) | Notifications |

Aucune capture pour les scènes 4 à 8, 13, 15 et 16 (motion et cartes) ; PocketPal AI est nommé en texte simple, sans logo.

#### Notes de script

- Prononciation : « Google AI Edge Gallery » se dit « gougueul-a-i-èdj-ga-le-ri » ; « Gemma » se dit « jé-ma » ; « Qwen » se dit « tchouène » [à faire valider par l'owner] ; « Llama » se dit « la-ma » ; « PocketPal » se dit « po-kèt-pal » ; « open source » se dit « o-peune-source ».
- Promesse : la phrase du §2.3 est dite seule, sans le préfixe « À la fin de cette leçon », qui la porterait à vingt mots (plafond de dix-huit, §5.10). Même texte sur la carte promesse et sur la carte de rappel. Si l'owner préfère le préfixe, accepter l'exception pour cette seule phrase.
- Familles de modèles (exception §2.1) : la voix dit « Gemma », « Qwen », « Llama », « Mistral », jamais un numéro de version ni un suffixe de taille. Les captures du live affichent des noms de versions : accepté à l'écran, jamais lu ni retapé en surimpression.
- Taille du petit modèle (« environ deux gigaoctets et demi ») et modèle le plus petit proposé : ordres de grandeur pédagogiques tirés du live ; relever la taille réelle affichée dans l'application le jour du tournage et ajuster la voix et l'écran (« ≈ … Go »). [à vérifier au moment de la production]
- Vérifier le jour du tournage : disponibilité de Google AI Edge Gallery sur le Play Store et l'App Store au Togo et en français ; libellés exacts (liste des modèles, téléchargement, conversation) ; disponibilité de PocketPal AI sur Android et iPhone. [à vérifier au moment de la production]
- Scène 5 : exactitude, en cohérence avec le repère de la leçon 1 : Gemma est la famille de modèles **ouverts** publiée par Google, que l'on installe soi-même ; ce n'est pas le modèle qui répond dans l'application Gemini (contrairement à ce que laisse entendre le live vers 8:45). La voix dit seulement « Gemma, de Google ». « Open source » est glosé « ouvert : ses fichiers se téléchargent librement ». Plusieurs familles sont des modèles « à poids ouverts » avec leur propre licence ; la licence n'est pas abordée ici (voir la leçon 6, Hugging Face).
- Scène 11 : en voix, « en wifi, une seule fois » ; à l'écran, aucune taille de forfait ni aucun coût de données.
- Scènes 12 à 14 : la preuve du hors connexion repose sur l'icône d'avion visible pendant toute la prise ; ne pas couper entre l'activation du mode avion et l'affichage de la réponse. Annoter seulement ce que montre la réponse réelle : si elle ne donne pas exactement trois questions, adapter la voix de la scène 14 (« puis des questions pour se tester »).
- Scène 14 : la réponse est vérifiée par l'owner (exactitude économique simple) avant le montage ; si elle contient une erreur, la garder et la signaler à l'écran (croix + « à vérifier avec votre cours ») : c'est la limite de la scène 8.
- Scène 16 : relie la leçon 3 sans la refaire ; aucune bourse réelle n'est nommée.
- Batterie et place : formulées sans chiffre. Aucune promesse de vitesse : le live trouve le téléphone rapide sur cet appareil, ce n'est pas généralisable.
- Termes nouveaux : « open source » (glosé), « mode avion » (montré), « modèle » au sens technique (rappel de la leçon 1 : le cerveau derrière l'application).
- Adaptation EN : « hors connexion » = *offline* ; « mode avion » = *airplane mode* ; « le plus petit modèle » = *the smallest model*.
- Adaptation HA / DJE : garder « Google AI Edge Gallery », « PocketPal AI », « Gemma », « wifi » et « mode avion » tels qu'ils apparaissent dans l'interface du téléphone dans la langue ; rendre « open source » par l'idée « un modèle dont les fichiers sont ouverts à tous ».

### Leçon 6 — Installer une IA open source sur votre ordinateur avec LM Studio (`og6`)

#### Fiche

- **Promesse** : « Vous saurez installer LM Studio et faire tourner un modèle open source sur votre ordinateur. » *(phrase du §2.3 au mot près ; le préfixe « À la fin de cette leçon » est omis pour rester sous dix-huit mots)*
- **Cas réel (B1 → B6)** : Mariam, formatrice dans un centre de formation professionnelle de Ouagadougou (Burkina Faso), prépare ses sessions sur son ordinateur. Les coupures d'Internet l'interrompent, et elle ne veut pas confier les dossiers de ses stagiaires à un service en ligne. Enjeu : préparer un séminaire d'initiation à l'intelligence artificielle pour ses stagiaires, sans dépendre du réseau et sans faire sortir ses données. B6 (champ `example`) : pendant une coupure, Mariam prépare le formulaire d'inscription et le script de présentation de son séminaire avec un modèle installé ; rien ne quitte son ordinateur.
- **Unités de notion (B3)** : 1. Lire le « B » et vérifier sa mémoire vive — « 4B » = quatre milliards de paramètres (de l'anglais *billion*, milliard) ; plus ce nombre est grand, plus le modèle est gros et demande de mémoire vive. Ordres de grandeur (live) : avec 8 Go de mémoire vive au total, un petit modèle tourne si l'on ferme les autres applications ; un modèle 4B pèse environ 6 Go et demande environ 8 Go libres, d'où 16 Go au total conseillés [à vérifier au moment de la production]. Vérifier : Windows → Gestionnaire des tâches → Performances → Mémoire ; Mac → menu Pomme → À propos de ce Mac. · 2. Le meilleur modèle, c'est celui que votre appareil supporte et qui correspond à votre usage — pour écrire et résumer, un 4B suffit pour commencer ; inutile d'un modèle géant ou d'un modèle spécialisé en code pour du texte. · 3. Les limites — il écrit du texte : ni image ni vidéo ; pas d'accès à Internet ; lent si la mémoire manque ; il ne crée ni n'enregistre de fichiers sans outils ajoutés ; gros téléchargements, et chaque mise à jour du modèle se télécharge à nouveau.
- **Démo (B4)** : LM Studio, gratuit, sur ordinateur (captures du live). 1. LM Studio est installé depuis son site officiel. 2. Recherche de modèle : on tape le nom d'une famille ; la liste affiche Gemma, Qwen, GPT-OSS… 3. Fiche du modèle : capacités et taille ; choix d'un modèle de taille 4B. 4. Download (télécharger), la veille, au centre, quand la connexion tenait. 5. Le jour de la coupure, chargement du modèle dans la fenêtre de conversation ; salut ; réponse en français. 6. Consigne RCTF : le formulaire d'inscription du séminaire de Mariam ; puis le script de présentation. 7. Mémoire utilisée par le modèle : environ 8 Go [à vérifier au moment de la production]. 8. Aller plus loin : Hugging Face (modèles ouverts, licences, jeux de données) ; LM Studio peut servir le modèle à d'autres outils (cours 2). Résultat à l'écran : un formulaire d'inscription produit hors ligne, et la jauge de mémoire.
- **Consolidation (B5)** : prédiction. Mariam demande au modèle d'enregistrer le formulaire dans un fichier, sur son ordinateur : peut-il le faire ? Réponse : non. Seul, il écrit du texte, sans accès aux dossiers de l'ordinateur ; elle copie la réponse dans son traitement de texte. Des outils peuvent s'ajouter plus tard (cours 2).
- **Consigne à copier** :

```text
Rôle : tu es l'assistant d'une formatrice dans un centre de formation professionnelle.
Contexte : j'organise [un séminaire d'initiation à l'intelligence artificielle] pour [mes stagiaires], le [date], dans [mon centre].
Tâche : rédige le formulaire d'inscription : les champs à remplir, puis un message d'accueil de trois lignes.
Format : une liste numérotée « champ – type de réponse », en français simple ; laisse des crochets pour toute information que je n'ai pas donnée.
```

- **Exercice** : « Installez LM Studio et testez un modèle sur votre propre tâche » — 1. Vérifiez votre mémoire vive (Windows : Gestionnaire des tâches → Performances → Mémoire ; Mac : menu Pomme → À propos de ce Mac) et votre espace disque libre. 2. Installez LM Studio depuis son site officiel ; recherchez un modèle d'environ 4B (ou plus petit si vous avez 8 Go de mémoire vive ou moins), téléchargez-le en wifi et chargez-le dans la conversation. 3. Testez-le avec une consigne RCTF sur une vraie tâche ; notez la mémoire utilisée et une limite que vous avez constatée.
- **Carte de rappel** : 1. Le « B » face à votre mémoire vive · 2. Rechercher, télécharger, charger, tester · 3. Du texte, sans Internet ni fichiers · 4. Lent ? Modèle plus petit, applications fermées
- **Quiz** *(5 questions ; chaque point de la carte de rappel est couvert)* :
  1. Que signifie « 4B » dans le nom d'un modèle ? — A) Quatrième version du modèle B) Quatre milliards de paramètres C) Quatre gigaoctets de mémoire vive D) Quatre langues comprises — **Réponse : B**
  2. L'ordinateur de Mariam a 8 Go de mémoire vive au total. Quel choix est raisonnable pour commencer ? — A) Le plus gros modèle de la liste B) Un modèle 4B, qui demande à lui seul environ 8 Go libres C) Deux modèles chargés en même temps D) Un modèle plus petit que 4B, avec les autres applications fermées — **Réponse : D**
  3. Dans LM Studio, quel est le bon ordre ? — A) Rechercher le modèle, le télécharger, le charger dans la conversation, le tester B) Le charger, puis le rechercher, puis le télécharger C) Le tester, puis le rechercher D) Installer LM Studio et attendre que le modèle arrive seul — **Réponse : A**
  4. Mariam demande au modèle installé d'enregistrer le formulaire dans un fichier. Que se passe-t-il ? — A) Il crée le fichier sur le bureau B) Il l'envoie par e-mail C) Sans outils ajoutés, il ne peut pas : elle copie le texte elle-même D) Il le publie en ligne — **Réponse : C**
  5. Les réponses du modèle deviennent très lentes. Quelle est la cause probable, et que faire ? — A) Le modèle est trop récent : il faut attendre B) La mémoire vive manque : fermez des applications ou prenez un modèle plus petit C) Internet est coupé : il faut se reconnecter D) Le clavier est trop lent : il faut dicter — **Réponse : B**
- **Marques citées** : LM Studio ; Hugging Face ; Gemma (Google) ; Qwen (Alibaba) ; GPT-OSS (OpenAI) ; Windows (Microsoft) ; Mac (Apple).

#### Script v1 (à valider par l'owner)

Durée estimée : 4:30 (dont 3 s de mention légale, Partie 1) · Mots de voix off : 500

**Scène 1 — B1 Accroche · 0:00–0:09 · E**
- Visuel : la boîte à outils, tiroir « Installé sur mon appareil » ouvert (le téléphone de la leçon 5 y est déjà) ; un ordinateur portable y prend place, puis le tiroir s'ouvre sur une illustration en aplats : Mariam à son bureau, dans une salle du centre de formation ; ordinateur portable ouvert, pile de dossiers fermés (aucun nom lisible) ; l'icône wifi de l'écran se barre.
- Écran : « Mariam · formatrice · Ouagadougou (Burkina Faso) »
- VO : « Leçon précédente : une IA sur votre téléphone. Mariam, formatrice à Ouagadougou, prépare sa session. Internet vient de couper. »

**Scène 2 — B1 Accroche · 0:09–0:17 · B**
- Visuel : carte promesse, texte révélé en deux temps.
- Écran : « Vous saurez installer LM Studio et faire tourner un modèle open source sur votre ordinateur. »
- VO : « Vous saurez installer LM Studio et faire tourner un modèle open source sur votre ordinateur. » *(promesse dite à 0:09)*

**Scène 3 — B2 Cadrage · 0:17–0:30 · B**
- Visuel : carte, surtitre « Le malentendu » ; un cadenas sur les dossiers, puis l'étiquette « Réservé aux informaticiens ? » qui reçoit une croix.
- Écran : « Le malentendu · Réservé aux informaticiens ? »
- VO : « Et elle refuse de confier les dossiers de ses stagiaires à un service en ligne. Le malentendu : installer une IA, c'est réservé aux informaticiens. »

**Scène 4 — B2 Cadrage · 0:30–0:43 · A**
- Visuel : extrait du live : l'interface de LM Studio juste après l'installation ; un cadre suit la colonne de gauche, puis la zone de conversation.
- Écran : « LM Studio · gratuit · Windows, Mac, Linux »
- VO : « Voici LM Studio, une application gratuite pour ordinateur. Elle télécharge un modèle ouvert et le fait tourner chez vous. Pas besoin d'être informaticien. »

**Scène 5 — B3 Notion · 0:43–0:59 · C**
- Visuel : le nom d'un modèle fictif s'affiche (« Famille-4B ») ; le « 4B » est encadré et se déplie en « 4 milliards de paramètres » ; trois cubes de tailles croissantes (petit, moyen, grand) se placent à côté d'une jauge de mémoire.
- Écran : « 1 · 4B = 4 milliards de paramètres »
- VO : « Première idée : lisez le B dans le nom du modèle. B veut dire milliards de paramètres : les réglages appris par le modèle. Plus ce nombre est grand, plus le modèle est gros. »

**Scène 6 — B3 Notion · 0:59–1:17 · C**
- Visuel : une barrette de mémoire stylisée « 8 Go au total » : les autres applications en sortent, un petit bloc « petit modèle » y entre (coche) ; puis un bloc « modèle 4B ≈ 6 Go » demande « ≈ 8 Go libres » ; la barrette s'allonge à « 16 Go au total » (coche).
- Écran : « 8 Go : petit modèle · 4B ≈ 6 Go → 8 Go libres · 16 Go au total conseillés »
- VO : « La mémoire vive, c'est la mémoire de travail de l'ordinateur. Avec huit gigaoctets au total, un petit modèle tourne, applications fermées. Un modèle quatre B, environ six gigaoctets, demande huit gigaoctets libres. Prévoyez seize gigaoctets au total. »

**Scène 7 — B3 Notion · 1:17–1:28 · A**
- Visuel : capture neuve, en deux temps : sous Windows, le Gestionnaire des tâches, onglet Performances, Mémoire (cadre sur la mémoire totale et disponible) ; puis sur Mac, menu Pomme → À propos de ce Mac (cadre sur la ligne Mémoire).
- Écran : « Windows : Gestionnaire des tâches → Performances → Mémoire » « Mac : menu Pomme → À propos de ce Mac »
- VO : « Vérifiez la vôtre. Sous Windows : Gestionnaire des tâches, onglet Performances, puis Mémoire. Sur Mac : menu Pomme, puis À propos de ce Mac. »

**Scène 8 — B3 Notion · 1:28–1:42 · B**
- Visuel : carte, surtitre « 2 · Le bon modèle » ; un modèle géant ne passe pas la porte d'un ordinateur (croix), un modèle moyen y entre (coche) ; étiquette « pour du texte ».
- Écran : « 2 · Le meilleur modèle : celui que votre machine supporte »
- VO : « Deuxième idée : le meilleur modèle, c'est celui que votre appareil supporte et qui correspond à votre usage. Pour écrire et résumer, un modèle quatre B suffit pour commencer. »

**Scène 9 — B3 Notion · 1:42–1:55 · B**
- Visuel : carte, surtitre « 3 · Ses limites » ; quatre pictogrammes entrent un par un : cadre photo et caméra barrés, globe barré, flèche de téléchargement répétée.
- Écran : « 3 · Ni image ni vidéo · pas d'Internet · mise à jour = nouveau téléchargement »
- VO : « Troisième idée : ses limites. Il écrit du texte : ni image, ni vidéo. Il n'a pas accès à Internet. Et chaque mise à jour se télécharge à nouveau. »

**Scène 10 — B4 Application · 1:55–2:08 · A**
- Visuel : extrait du live : la page officielle de LM Studio, puis la recherche de modèles dans l'application ; la liste des familles s'affiche ; cadre sur la zone de recherche.
- Écran : « La veille, connexion stable · recherche de modèle → Gemma, Qwen… »
- VO : « La veille, au centre, la connexion tenait. Mariam installe LM Studio depuis son site officiel. Elle cherche une famille, comme Gemma. »

**Scène 11 — B4 Application · 2:08–2:18 · A**
- Visuel : extrait du live : la fiche d'un modèle ; cadre sur les capacités, puis sur la taille ; puis cadre sur un modèle de taille « 4B ».
- Écran : « Fiche : capacités · taille · modèle de taille 4B »
- VO : « Elle ouvre la fiche d'un modèle : ses capacités, et sa taille. Elle choisit un modèle de taille quatre B. »

**Scène 12 — B4 Application · 2:18–2:28 · A**
- Visuel : extrait du live : le bouton « Download » encadré ; puis le menu de chargement dans la fenêtre de conversation, et la barre de chargement.
- Écran : « Download = télécharger · le jour de la coupure : charger dans la conversation »
- VO : « Elle clique sur Download, c'est-à-dire télécharger. Le jour de la coupure, elle le charge dans la conversation. »

**Scène 13 — B4 Application · 2:28–2:35 · A**
- Visuel : extrait du live : le premier message envoyé, la réponse en français s'affiche ; coche.
- Écran : « Réponse en français, depuis l'ordinateur »
- VO : « Elle le salue. Le modèle répond en français, depuis l'ordinateur. »

**Scène 14 — B4 Application · 2:35–2:49 · G**
- Visuel : carte de consigne sur fond clair, en deux panneaux successifs (la consigne complète figure dans la fiche, sous la vidéo).
- Écran : « Rôle : assistant de formatrice · Contexte : séminaire d'initiation à l'IA, mon centre » « Tâche : formulaire d'inscription · Format : liste « champ – type de réponse » »
- VO : « Sa consigne suit les quatre blocs. Rôle : assistant de formatrice. Contexte : un séminaire d'initiation à l'IA, dans son centre. Tâche : le formulaire d'inscription. Format : une liste de champs. »

**Scène 15 — B4 Application · 2:49–3:02 · A**
- Visuel : extrait du live : la réponse défile, sections et champs du formulaire ; cadre sur deux sections ; puis la demande suivante et le début du script de présentation.
- Écran : « Formulaire : sections et champs · puis script de présentation »
- VO : « Le formulaire arrive, avec ses sections et ses champs. Elle demande ensuite le script de présentation du séminaire. Tout se passe sur l'ordinateur. »

**Scène 16 — B4 Application · 3:02–3:16 · A**
- Visuel : extrait du live : l'indicateur de mémoire utilisée par le modèle, encadré.
- Écran : « Mémoire utilisée par le modèle ≈ 8 Go »
- VO : « Ici, la mémoire utilisée : environ huit gigaoctets, pour le modèle seul. Si les réponses traînent, fermez les autres applications, ou prenez un modèle plus petit. »

**Scène 17 — B4 Application · 3:16–3:39 · A**
- Visuel : extrait du live : Hugging Face, la page d'accueil, puis la liste des modèles et l'onglet des jeux de données ; cadre sur la mention de licence d'un modèle ; puis une carte : « Brancher votre modèle à d'autres outils → cours 2 ».
- Écran : « Hugging Face : modèles · licences · jeux de données » « Brancher le modèle à d'autres outils : cours 2 »
- VO : « Pour aller plus loin : Hugging Face, une bibliothèque en ligne de modèles ouverts et de jeux de données. Vérifiez la licence de chaque modèle, surtout pour un usage commercial. Et LM Studio peut prêter votre modèle à d'autres outils : ce sera le cours deux. »

**Scène 18 — B5 Consolidation · 3:39–4:03 · A**
- Visuel : extrait du live : la demande d'enregistrer le résultat sur le disque, et la réponse du modèle qui explique qu'il ne peut pas ; silence ; puis un pictogramme de fichier barré, et une flèche « copier → traitement de texte ».
- Écran : « Enregistrer le formulaire dans un fichier ? » « Seul, il écrit du texte : copiez-le vous-même »
- VO : « Mariam demande au modèle d'enregistrer le formulaire dans un fichier. Peut-il le faire ? » *(silence, 3 s)* « Non. Seul, il écrit du texte, sans accès à vos dossiers. Elle copie la réponse dans son traitement de texte. Des outils pourront s'ajouter plus tard. »

**Scène 19 — B6 Clôture · 4:03–4:09 · B (carte de rappel, panneau 1)**
- Visuel : carte de rappel, panneau 1 : la promesse ; sous la carte, Mariam à son bureau, wifi toujours barré, le formulaire affiché à l'écran.
- Écran : « Vous saurez installer LM Studio et faire tourner un modèle open source sur votre ordinateur. »
- VO : « Pendant la coupure, Mariam prépare son séminaire. Rien ne quitte son ordinateur. »

**Scène 20 — B6 Clôture · 4:09–4:27 · B (carte de rappel)**
- Visuel : carte de rappel, panneau 2 : quatre points révélés au rythme de la voix.
- Écran : « 1. Le « B » face à votre mémoire vive » « 2. Rechercher, télécharger, charger, tester » « 3. Du texte, sans Internet ni fichiers » « 4. Lent ? Modèle plus petit, applications fermées »
- VO : « Lisez le B, face à votre mémoire vive. Rechercher, télécharger, charger, tester. Du texte seulement, sans Internet ni fichiers. Trop lent ? Un modèle plus petit. Installez LM Studio et testez un modèle sur votre propre tâche. »

#### Captures à fournir par l'owner

Source par défaut : l'enregistrement du live du 24/10/2026 (`~/Downloads/Video Weekend IA/Weekend-IA - Installer une IA Gratuite - 2026_10_24 21_23 WAT - Recording.mp4`, 1280 × 720). Pour chaque extrait : recadrer sur la zone de partage d'écran ; masquer la vignette des participants, la discussion et tout nom de participant (bloc `#111827`) ; couper le son du live (voix régénérée). L'interface de LM Studio du live est en anglais : chaque libellé lu est retapé en français en surimpression (§5.5). Les timecodes sont à affiner à l'image près. Une seule ligne « **À capturer à neuf** » : la vérification de la mémoire vive, absente du live.

| Scène | Outil · appareil | Gestes exacts | Texte exact à taper | Durée utile | À masquer |
|---|---|---|---|---|---|
| 4 | Live · LM Studio, ordinateur de l'owner | **20:04–20:12** : l'interface de LM Studio telle qu'elle apparaît après l'installation ; plan fixe. | Aucun | 8 s | Vignette des participants, discussion, noms ; noms de fichiers personnels dans les menus |
| 7 | **À capturer à neuf** · un PC Windows et un Mac, interface en français | Windows : clic droit sur la barre des tâches → Gestionnaire des tâches → onglet Performances → Mémoire ; écran immobile. Mac : menu Pomme → À propos de ce Mac ; écran immobile sur la ligne Mémoire. | Aucun | 2 × 8 s | Nom de l'ordinateur, numéro de série du Mac, compte |
| 10 | Live · navigateur, puis LM Studio | **19:13–19:55** : recherche « LM Studio » et page officielle (plan court, 4 s). **22:00–22:55** : recherche de modèle dans LM Studio, liste des familles (Gemma, Qwen, GPT-OSS). | Aucun | 4 s + 12 s | Favoris et onglets du navigateur, vignette, discussion |
| 11 | Live · LM Studio | **22:30–23:45** : fiche du modèle, capacités et taille ; s'arrêter 3 s sur un modèle de taille 4B (vers 23:30–23:45). | Aucun | 12 s | Idem ; versions visibles mais non lues |
| 12 | Live · LM Studio | **24:05–24:10** : bouton « Download ». **24:17–24:38** : chargement du modèle dans la conversation. | Aucun | 4 s + 8 s | Idem |
| 13 | Live · LM Studio | **24:38–25:10** : premier message et réponse du modèle en français. | Aucun | 10 s | Idem |
| 15 | Live · LM Studio | **28:10–28:37** : réponse au formulaire d'inscription (sections, champs). **28:40–29:25** : demande et début du script de présentation. La demande du formulaire, dictée vers 26:19, n'est pas au format RCTF : masquer sa bulle (bloc `#111827`) ou couper avant ; la consigne RCTF est celle de la carte G. | Aucun | 12 s + 8 s | Idem ; bulle de la demande dictée |
| 16 | Live · LM Studio | **37:43–37:58** : indicateur de mémoire utilisée par le modèle ; plan fixe, cadre au montage. | Aucun | 6 s | Idem |
| 17 | Live · navigateur, Hugging Face | **54:50–55:10** : page d'accueil de Hugging Face. **57:38–58:03** : liste des modèles, puis jeux de données ; cadre sur une mention de licence si elle est lisible une fois recadrée. | Aucun | 6 s + 10 s | Compte Hugging Face, onglets, vignette, discussion |
| 18 | Live · LM Studio | **35:22–35:50** : demande d'enregistrer le résultat sur le disque et réponse du modèle (il ne peut pas). | Aucun | 12 s | Idem |

Aucune capture pour les scènes 5, 6, 8, 9, 14, 19 et 20 (motion et cartes). Si un détail des scènes 11, 16 ou 17 est illisible une fois recadré, refaire seulement ce plan à neuf (même geste, interface en français si LM Studio le permet).

#### Notes de script

- Prononciation : « LM Studio » se dit « elle-emme stu-dio » ; « Hugging Face » se dit « heu-guigne féïsse » ; « Gemma » se dit « jé-ma » ; « Qwen » se dit « tchouène » [à faire valider par l'owner] ; « Download » se dit « daoune-lôde » .
- Promesse : dite sans le préfixe « À la fin de cette leçon », qui la porterait à vingt et un mots ; même texte sur les deux cartes.
- Le cas de Mariam est aligné sur la démonstration du live (un formulaire d'inscription à un séminaire autour de l'IA, puis un script de présentation) pour que les captures restent justes : son séminaire est un « séminaire d'initiation à l'intelligence artificielle » pour ses stagiaires. Une date affichée dans la réponse du live n'est pas lue.
- Ordres de grandeur (8 Go au total : un petit modèle, applications fermées ; modèle 4B ≈ 6 Go, environ 8 Go libres, 16 Go au total conseillés ; environ 8 Go utilisés) : tirés du live, dits avec « environ » ; relever les valeurs réelles affichées dans LM Studio et la mémoire indiquée sur la fiche du modèle le jour du tournage. [à vérifier au moment de la production]
- Familles de modèles (exception §2.1) : la voix dit « Gemma », « Qwen » ; jamais de numéro de version. « Quatre B » est une taille, pas une version : autorisé, et toujours dit en toutes lettres. Les captures montrent des versions : accepté à l'écran, jamais retapé en surimpression.
- Vérifier le jour du tournage : nom exact de l'application (le live évoque un possible changement de nom de LM Studio vers 38:58), libellés de la recherche, de la fiche, du téléchargement et du chargement, disponibilité d'une interface en français, systèmes pris en charge (Windows, Mac, Linux), configuration minimale annoncée par l'éditeur. [à vérifier au moment de la production]
- Scène 7 : sur Mac récent, la mémoire est unifiée et s'affiche sur la page « À propos de ce Mac » ; sur Windows, la mémoire « disponible » compte plus que la mémoire totale. Ne citer aucun modèle d'ordinateur.
- Scène 9 : « chaque mise à jour du modèle se télécharge à nouveau » (live, vers 1:09:19) ; aucune taille de téléchargement chiffrée en voix.
- Scène 15 : la phrase « Tout se passe sur l'ordinateur » s'appuie sur le live (vers 28:50 : le modèle ne va pas sur Internet) ; elle ne promet pas l'absence totale de connexion de l'application LM Studio elle-même (mises à jour, recherche de modèles). [à vérifier au moment de la production]
- Scène 17 : « surtout pour un usage commercial » reprend le live (vers 57:42 : les modèles sont gratuits « tant que vous n'allez pas les commercialiser ») ; la voix renvoie à la licence de chaque modèle, sans généraliser. La voix ne cite pas d'exemple de jeu de données ; si l'owner veut ajouter celui du live (jeux de données en haoussa ou en zarma), vérifier qu'ils existent au moment du tournage et rester sous dix-huit mots par phrase. [à vérifier au moment de la production] Le branchement à d'autres outils (serveur local, agents, compétences, MCP) n'est que nommé : il relève du cours 2.
- Scène 18 : ne pas montrer les essais de code et de site web du live (29:27–35:10), hors sujet pour cette leçon. L'essai d'affiche (35:53–36:10) peut illustrer « ni image » en vignette de la scène 9 si l'owner le souhaite.
- Anonymisation : le live contient des noms de participants dans la discussion et des échanges oraux ; aucun ne doit apparaître ni s'entendre. Ne pas montrer l'agent personnel de l'owner ni son interface de gestion (49:20–53:50).
- Termes nouveaux : « mémoire vive » (glosée « mémoire de travail de l'ordinateur ») ; « paramètres » (glosés « réglages appris par le modèle ») ; « B » (glosé « milliards de paramètres ») ; « Download » (glosé « télécharger ») ; « jeu de données » (montré).
- Adaptation EN : « mémoire vive » = *RAM* ; « B » = *billion parameters* ; « jeu de données » = *dataset*.
- Adaptation HA / DJE : garder « LM Studio », « Hugging Face », « Download », « Windows », « Mac » ; rendre « milliard » et « mémoire vive » par les termes validés par l'owner .

### Leçon 7 — Projet final : construire votre boîte à outils IA, en ligne et installée (`og7`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez construire et justifier votre boîte à outils IA. »
- **Cas réel (B1 → B6)** : Koffi (Lomé), Hadiza (Zinder) et Mariam (Ouagadougou) montent chacun leur boîte à outils IA pour le certificat. Ils doivent prouver chaque choix : testé, sourcé, réglé, avec un plan B, et au moins un outil installé sur leur appareil. B6 (champ `example`) : leurs trois boîtes sont prêtes ; chaque outil est choisi, testé et réglé ; les dossiers sont déposés.
- **Unités de notion (B3) — livrables et critères** : 1. Trois livrables — la fiche d'une page (cinq tâches réelles, avec famille, outil, raison, plan B ; au moins un outil installé, sur téléphone ou ordinateur) ; trois preuves (un test à consigne égale avec sa grille ; une source vérifiée, avec son lien et sa date ; une capture de protection : vos réglages de données ou votre IA installée qui répond en mode avion) ; une règle de données en une phrase. · 2. La règle de données — une phrase, par exemple « aucun nom, numéro ni photo de client dans un assistant en ligne », écrite puis respectée. · 3. Cinq critères — tâches réelles ; choix testé ; sources ouvertes ; données protégées (réglages faits, ou IA installée) ; plan B.
- **Démo (B4) — exemple de projet réussi, de bout en bout** : outil de documents (Google Docs ou équivalent). 1. La fiche de Hadiza : cinq tâches de son atelier — annoncer ses modèles de fête (assistant en ligne, choisi avec sa grille), chercher la date d'une foire artisanale (recherche sourcée), illustrer une affiche (image), résumer le règlement d'une foire (documents), préparer hors connexion ses rappels de commande avec des [prénoms] (assistant installé sur son téléphone, Google AI Edge Gallery). 2. Colonnes « raison » et « plan B » : chaque raison renvoie à un test ; pour l'outil installé, « répond en mode avion, rien ne sort du téléphone » ; plan B : PocketPal AI. 3. Les trois preuves : la grille remplie (leçon 2), une source avec son lien et sa date (leçon 3), la capture de son IA installée qui répond en mode avion (capture dédiée : un rappel de commande avec [prénom], dans Google AI Edge Gallery). 4. Sa règle de données, en une phrase. 5. Koffi et Mariam : même méthode ; leur ligne « outil installé » (Koffi : réviser hors connexion sur son téléphone ; Mariam : préparer ses sessions avec LM Studio). 6. Export en PDF et dépôt sur la page du projet final. Résultat à l'écran : un dossier d'une à deux pages, complet, sans aucune donnée personnelle.
- **Consolidation (B5)** : prédiction. Un autre dossier liste vingt applications, dont trois IA installées, sans test ni plan B : est-il recevable ? Réponse : non. Une liste n'est pas un choix ; sans test, sans raison et sans plan B, le dossier revient.
- **Consigne à copier** :

```text
Rôle : tu es un assistant de mise en page.
Contexte : voici ma boîte à outils IA pour un projet de formation : [tâche – famille – outil – raison – plan B ; …]. Ce texte ne contient aucune donnée personnelle.
Tâche : mets ces cinq lignes en tableau d'une page, avec un titre court. N'ajoute aucun outil et aucune information.
Format : un tableau de cinq colonnes (tâche, famille, outil, raison, plan B) ; laisse vide toute case que je n'ai pas remplie.
```

- **Exercice** : « Construisez votre boîte à outils et déposez votre dossier » — 1. Remplissez la fiche : cinq tâches réelles, avec famille, outil, raison et plan B, dont au moins un outil installé sur votre téléphone ou votre ordinateur. 2. Ajoutez les trois preuves (grille de test, source vérifiée avec lien et date, capture de vos réglages ou de votre IA installée en mode avion) et votre règle de données. 3. Exportez le tout en un seul fichier PDF et déposez-le sur la page du projet final.
- **Carte de rappel** *(récapitulatif du cours)* : 1. Tâche d'abord, même test pour tous · 2. Ouvrez la source · 3. Protégez vos données · 4. Installée : hors connexion, à votre mesure
- **Quiz** *(8 questions, cumulatif : leçons 1 à 6 et projet ; chaque point de la carte de rappel est couvert)* :
  1. *(Leçon 1)* Pour remplir une ligne de votre fiche, par quoi commencez-vous ? — A) Par l'outil dont tout le monde parle B) Par la tâche réelle, puis sa famille d'outils C) Par l'application la plus récente D) Par un abonnement — **Réponse : B**
  2. *(Leçon 1)* ChatGPT, Gemini et Claude sont des applications. Qu'est-ce qui tourne derrière elles ? — A) Un moteur de recherche B) Un réseau social C) Des modèles d'IA, que l'application utilise pour répondre D) Une liste de clients — **Réponse : C**
  3. *(Leçon 2)* Quelle preuve montre qu'un choix d'assistant a été testé ? — A) La même consigne dans plusieurs assistants, chacun dans une nouvelle conversation, avec la grille des quatre critères remplie B) Le nombre de téléchargements C) Un avis lu en ligne D) Le conseil d'un ami — **Réponse : A**
  4. *(Leçon 3)* Dans Perplexity, une source de votre dossier est un article d'une année passée. Que faites-vous ? — A) Vous la gardez, puisqu'elle est numérotée B) Vous la traduisez C) Vous la supprimez sans rien dire D) Vous la remplacez par la page officielle, avec son lien et sa date — **Réponse : D**
  5. *(Leçon 4)* Quelle règle de données est correcte ? — A) Tout est permis si le compte est payant B) Aucun nom, numéro ni photo de client dans un assistant en ligne C) Les numéros, mais pas les noms D) Les photos, mais pas les numéros — **Réponse : B**
  6. *(Leçon 5)* Koffi installe une IA sur un téléphone qui a peu d'espace libre. Quel est le bon choix ? — A) Le plus gros modèle, pour de meilleures réponses B) Un modèle téléchargé à chaque question C) Un modèle prévu pour ordinateur D) Le plus petit modèle proposé, téléchargé une seule fois en wifi — **Réponse : D**
  7. *(Leçon 6)* Que signifie « 4B », et que faut-il vérifier avant de l'installer avec LM Studio ? — A) Quatre milliards de paramètres ; la mémoire vive libre de l'ordinateur B) Quatrième version ; la couleur de l'écran C) Quatre gigaoctets ; la vitesse d'Internet D) Quatre langues ; le clavier — **Réponse : A**
  8. *(Projet)* Un dossier liste vingt applications, dont trois IA installées, sans test ni plan B. Est-il recevable ? — A) Oui, il est complet B) Oui, s'il contient des IA installées C) Non : une liste n'est pas un choix, il revient pour test, raison et plan B D) Oui, si les outils sont connus — **Réponse : C**
- **Marques citées** : Gemini, NotebookLM, Google, Google Docs, Google AI Edge Gallery (Google) ; ChatGPT (OpenAI) ; Claude (Anthropic) ; Perplexity ; PocketPal AI ; LM Studio.

#### Script v1 (à valider par l'owner)

Durée estimée : 4:00 (dont 3 s de mention légale, Partie 1) · Mots de voix off : 417

**Scène 1 — B1 Accroche · 0:00–0:09 · E**
- Visuel : la boîte à outils complète, cinq compartiments garnis, et un nouveau tiroir « Installée » ; elle s'ouvre sur trois illustrations côte à côte : Koffi (bus, Lomé), Hadiza (atelier, Zinder), Mariam (centre de formation, Ouagadougou), chacun tenant sa fiche.
- Écran : « Koffi · Hadiza · Mariam · leur boîte à outils IA »
- VO : « Leçon précédente : une IA sur votre ordinateur. Aujourd'hui, Koffi, Hadiza et Mariam présentent leur boîte à outils. »

**Scène 2 — B1 Accroche · 0:09–0:18 · B**
- Visuel : carte promesse, texte révélé en deux temps.
- Écran : « À la fin de cette leçon, vous saurez construire et justifier votre boîte à outils IA. »
- VO : « À la fin de cette leçon, vous saurez construire et justifier votre boîte à outils IA. » *(promesse dite à 0:09)*

**Scène 3 — B2 Cadrage · 0:18–0:27 · B**
- Visuel : carte, surtitre « Le malentendu » ; une longue liste d'icônes d'applications défile, puis reçoit un point d'interrogation.
- Écran : « Le malentendu · Longue liste = bonne boîte ? »
- VO : « C'est le projet final du cours. Le malentendu : une longue liste d'outils fait une bonne boîte. »

**Scène 4 — B2 Cadrage · 0:27–0:40 · C**
- Visuel : deux fiches côte à côte. À gauche : liste d'applications sans raison ni plan B (croix). À droite : tableau « tâche · outil · raison · plan B » (coche).
- Écran : « Sans raison ni plan B ✗ · Tâche, outil, raison, plan B ✓ »
- VO : « On évalue le raisonnement : pour chaque tâche, un outil, une raison, un plan B. Peu d'outils bien choisis valent mieux qu'une longue liste. »

**Scène 5 — B3 Notion · 0:40–1:09 · A**
- Visuel : capture réelle du modèle de dossier dans l'outil de documents ; défilement lent ; un cadre se pose sur chacun des trois livrables, l'un après l'autre ; la mention « dont 1 outil installé » est encadrée.
- Écran : « 1 Fiche (dont 1 outil installé) · 2 Trois preuves · 3 Règle de données »
- VO : « Le dossier compte trois livrables. Un : la fiche d'une page, cinq tâches réelles. Pour chacune : la famille, l'outil, la raison et le plan B. Au moins un outil est installé, sur téléphone ou ordinateur. Deux : trois preuves. Un test à consigne égale, une source vérifiée, une capture de protection. Trois : une règle de données. »

**Scène 6 — B3 Notion · 1:09–1:25 · B**
- Visuel : carte, surtitre « La règle de données » ; la phrase apparaît en deux temps.
- Écran : « Ma règle : aucun nom, numéro ni photo de client dans un assistant en ligne »
- VO : « La règle de données tient en une phrase. Par exemple : aucun nom, aucun numéro, aucune photo de client dans un assistant en ligne. Vous l'écrivez, puis vous la respectez. »

**Scène 7 — B3 Notion · 1:25–1:49 · C**
- Visuel : grille des cinq critères ; chaque critère entre avec son pictogramme (cible, grille, lien, cadenas, deuxième outil) et une case à cocher.
- Écran : « Réel · Testé · Sourcé · Protégé · Plan B »
- VO : « Cinq critères comptent pour le certificat. Tâches réelles : celles de votre semaine. Choix testé : même consigne, même grille. Sources ouvertes : une date, un lien. Données protégées : réglages faits, ou IA installée. Plan B : un deuxième outil pour chaque tâche. Le certificat récompense votre méthode, pas vos applications. »

**Scène 8 — B4 Application · 1:49–2:06 · A**
- Visuel : capture réelle de l'exemple de dossier ; la fiche de Hadiza ; un cadre sur les colonnes « tâche », « famille » et « outil ».
- Écran : « Cinq tâches · une famille et un outil pour chacune »
- VO : « Voici la fiche de Hadiza. Cinq tâches de son atelier : annoncer, chercher, illustrer, résumer un document, préparer ses rappels de commande. Chacune a sa famille et son outil. »

**Scène 9 — B4 Application · 2:06–2:21 · A**
- Visuel : capture réelle : cadre sur la ligne « rappels de commande » ; outil : Google AI Edge Gallery ; raison et plan B lisibles ; un pictogramme d'avion s'allume à côté.
- Écran : « Outil installé : répond en mode avion, rien ne sort du téléphone »
- VO : « Pour ses rappels de commande, elle a choisi une IA installée sur son téléphone. Raison : elle répond en mode avion, et rien ne sort du téléphone. »

**Scène 10 — B4 Application · 2:21–2:32 · A**
- Visuel : capture réelle : défilement vers les colonnes « raison » et « plan B » ; un cadre sur une ligne complète.
- Écran : « Raison : un test · Plan B : un deuxième outil »
- VO : « Colonne raison : chaque choix renvoie à un test. Colonne plan B : un deuxième outil, déjà essayé. »

**Scène 11 — B4 Application · 2:32–2:47 · A**
- Visuel : capture réelle : page des trois preuves ; la grille remplie, la source avec lien et date, la capture de l'IA installée en mode avion (rappel de commande avec [prénom]) ; cadre sur chacune, l'une après l'autre ; puis la dernière ligne, la règle de données, encadrée.
- Écran : « Grille · source + lien + date · IA en mode avion · règle de données »
- VO : « Puis les trois preuves : sa grille remplie, une source avec lien et date, son IA en mode avion. Et sa règle de données, en une phrase. »

**Scène 12 — B4 Application · 2:47–2:58 · B**
- Visuel : carte en deux panneaux : à gauche la ligne « outil installé » de Koffi (vignette de sa réponse en mode avion), à droite celle de Mariam (vignette de LM Studio) ; même tableau, autres tâches.
- Écran : « Koffi : réviser hors connexion · Mariam : préparer ses sessions avec LM Studio »
- VO : « Même méthode chez Koffi et Mariam. Koffi révise hors connexion, sur son téléphone. Mariam prépare ses sessions avec LM Studio. »

**Scène 13 — B4 Application · 2:58–3:08 · A**
- Visuel : capture réelle : export du document en PDF, puis la page de dépôt du projet final ; coche.
- Écran : « Un seul PDF, déposé »
- VO : « Hadiza exporte le dossier en PDF et le dépose sur la page du projet. »

**Scène 14 — B5 Consolidation · 3:08–3:28 · B**
- Visuel : carte : une très longue liste d'applications, dont trois marquées « installée », sans colonne « raison » ni « plan B ». Silence. Puis une croix sur les critères « testé » et « plan B » de la grille.
- Écran : « Vingt applications, sans test ni plan B ? »
- VO : « Un autre dossier liste vingt applications, dont trois installées, sans test ni plan B. Recevable ? » *(silence, 3 s)* « Non. Une liste n'est pas un choix. Sans test, sans raison et sans plan B, le dossier revient. »

**Scène 15 — B6 Clôture · 3:28–3:35 · B (carte de rappel, panneau 1)**
- Visuel : carte de rappel, panneau 1 : la promesse ; la boîte à outils complète se referme.
- Écran : « À la fin de cette leçon, vous saurez construire et justifier votre boîte à outils IA. »
- VO : « Leurs boîtes sont prêtes : chaque outil est choisi, testé et réglé. »

**Scène 16 — B6 Clôture · 3:35–3:41 · B**
- Visuel : carte de dépôt : un pictogramme de fichier PDF entre dans une boîte « Projet final ».
- Écran : « Dépôt : un seul PDF, sur la page du projet final »
- VO : « Votre dépôt : un seul PDF, sur la page du projet final. »

**Scène 17 — B6 Clôture · 3:41–3:57 · B (carte de rappel)**
- Visuel : carte de rappel du cours, panneau 2 : quatre points révélés au rythme de la voix.
- Écran : « 1. Tâche d'abord, même test pour tous » « 2. Ouvrez la source » « 3. Protégez vos données » « 4. Installée : hors connexion, à votre mesure »
- VO : « La tâche d'abord, un même test. La source ouverte. Les données protégées. Une IA installée, à la mesure de votre appareil. Construisez votre boîte à outils et déposez votre dossier. »

#### Captures à fournir par l'owner

Les preuves de Hadiza : la grille de la leçon 2 et la source de la leçon 3 ; sa preuve « IA installée en mode avion » est une capture dédiée (ligne « Preuve » ci-dessous). La vignette de Koffi reprend la réponse en mode avion de la leçon 5 (scène 14). La vignette de Mariam reprend l'extrait du live déjà utilisé en leçon 6 (24:38–25:10), recadré et anonymisé de la même façon. Aucun extrait supplémentaire du live n'est nécessaire.

| Scène | Outil · appareil | Gestes exacts | Texte exact à taper | Durée utile | À masquer |
|---|---|---|---|---|---|
| 5 | **À capturer à neuf** · outil de documents (Google Docs ou équivalent) · téléphone ou ordinateur | Ouvrir le modèle de dossier (voir 2.6) ; faire défiler lentement ses trois parties ; s'arrêter 2 s sur la mention « dont 1 outil installé ». | Aucun | 30 s | Compte, autres documents |
| Preuve (insérée dans le dossier, montrée en 11) | **À capturer à neuf** · Google AI Edge Gallery, plus petit modèle Gemma · téléphone Android du cours, en mode avion | Activer le mode avion ; ouvrir une nouvelle conversation ; taper la consigne ; envoyer ; laisser la réponse s'afficher en entier. L'icône d'avion reste visible pendant toute la prise. Capture d'écran de la réponse, insérée dans l'exemple de dossier. | « Rôle : tu es un assistant de rédaction pour un petit commerce, chaleureux et poli. Contexte : je suis couturière et je prépare hors connexion mes rappels de commande ; je ne te donne aucune donnée de client. Tâche : rédige un rappel pour prévenir une cliente que sa commande est prête. Laisse [prénom] à la place du prénom. Format : trois lignes au plus, ton chaleureux. » | 20 s | Notifications, nom de l'opérateur |
| 8–11 | **À capturer à neuf** · même outil | Ouvrir l'exemple de dossier rempli (cas fictif de Hadiza, avec les vrais résultats des leçons 2 et 3 et sa preuve dédiée en mode avion) ; défiler page par page ; s'arrêter 3 s sur les colonnes « tâche · famille · outil », sur la ligne de l'outil installé, sur « raison » et « plan B », sur chaque preuve, puis sur la règle. | Aucun | 50 s | Compte ; tout nom réel, toute adresse, tout numéro |
| 12 | Captures existantes | Vignettes : réponse en mode avion (leçon 5, scène 14) ; conversation LM Studio du live (24:38–25:10, déjà extraite pour la leçon 6). | — | Reprise en vignettes au montage | Comme en leçons 5 et 6 |
| 13 | **À capturer à neuf** · même outil, puis plateforme Karatou Academy | Menu « Télécharger » ou « Exporter » → PDF ; ouvrir la page du projet final ; déposer le fichier. | Aucun | 12 s | Nom et adresse e-mail du compte |

#### Notes de script

- L'exemple de dossier est fictif quant aux personas, mais ses preuves doivent être réelles : la grille vient de la leçon 2, la source de la leçon 3, et la capture en mode avion est une capture dédiée de la tâche de Hadiza (un rappel de commande avec [prénom], dans Google AI Edge Gallery, sur le téléphone du cours). Ne jamais inventer une preuve. La foire artisanale et son règlement : choisir un événement réel et public pour la source (leçon 3) ou rester sur une source déjà vérifiée ; sinon, remplacer ces deux tâches par des tâches dont les preuves existent. [à vérifier au moment de la production]
- Ligne « outil installé » de Hadiza : les rappels de commande utilisent des [prénoms] entre crochets dans l'exemple ; la règle de données vise les assistants en ligne. Ne pas suggérer qu'une IA installée rend toute donnée anodine : la fiche n'affiche toujours aucun nom réel.
- Scène 7 : les cinq critères doivent correspondre à la grille d'évaluation réellement utilisée pour le certificat, y compris l'exigence « au moins un outil installé » ; l'aligner avant l'enregistrement. [à vérifier au moment de la production]
- Scène 13 : capturer la vraie page de dépôt du projet final. Si elle n'existe pas encore, montrer seulement l'export en PDF et dire : « Hadiza exporte le dossier en PDF, prêt à déposer. » [à vérifier au moment de la production]
- Scène 12 : Koffi et Mariam n'ont qu'une scène ; leurs fiches complètes ne sont pas montrées. Pas de nom de version de modèle à l'écran sur ces vignettes.
- Le dossier ne doit contenir aucune donnée personnelle : pas de noms de clientes ou de stagiaires, pas de numéros, pas de captures de conversations réelles non anonymisées.
- Quiz : cumulatif, huit questions (deux pour la leçon 1, une pour chacune des leçons 2 à 6, une pour le projet) ; il vit dans l'onglet Quiz du site et n'apparaît jamais dans la vidéo.
- Termes : « livrable » est dit une fois et illustré par la liste ; « recevable » est glosé par la suite (« le dossier revient ») ; « capture de protection » est illustrée par la page des preuves (réglages ou mode avion).
- Adaptation EN : « boîte à outils » = *toolkit* ; « livrable » = *deliverable* ; « recevable » = *acceptable* ; « outil installé » = *installed tool*.
- Adaptation HA / DJE : « certificat » et « projet final » : reprendre les termes de l'interface de la plateforme dans la langue, s'ils existent.

## 2.6 Captures et éléments à préparer

Source des extraits du live : `~/Downloads/Video Weekend IA/Weekend-IA - Installer une IA Gratuite - 2026_10_24 21_23 WAT - Recording.mp4` (1280 × 720). Les timecodes sont ceux des tableaux « Captures à fournir par l'owner » du §2.5, à affiner à l'image près ; traitement visuel : §2.4.

| Leçon | Élément | Comment le produire | Qui |
|---|---|---|---|
| Toutes | Extraction des plans du live | Avec HyperFrames (le fichier du live posé en clip vidéo, découpé et recadré selon le skill `hyperframes-core`) ou avec ffmpeg. Mesurer une fois le rectangle du partage d'écran sur une image (`ffmpeg -ss 00:22:00 -i "<live>.mp4" -frames:v 1 cadre.png`), puis extraire chaque plan sans le son, recadré et conformé à 30 images/s (`ffmpeg -ss <début> -to <fin> -i "<live>.mp4" -an -vf "crop=<l>:<h>:<x>:<y>,fps=30" -c:v libx264 -crf 16 lecons/L0N/captures/live/sNN-<début>.mp4`). Masques `#111827` (filtre `drawbox=…:color=0x111827:t=fill`, ou bloc posé dans la composition), contrôlés image par image. Plans par leçon : lignes des leçons 5, 6 et 7 ci-dessous. | Claude (extraction, recadrage, masquage) ; Owner (contrôle qu'aucun nom ni participant n'est visible, et décision sur la mention « Extrait du Weekend IA du 24 octobre 2026 ») |
| Toutes | Illustrations des trois personas : Koffi (sac à dos, téléphone, bus, cahier), Hadiza (mètre ruban, machine à coudre, tissus), Mariam (salle de formation, ordinateur portable, dossiers fermés), et leurs décors | Fiches personnages en aplats, dessinées une fois et réutilisées telles quelles (§2.4) ; décors : chambre et université à Lomé, bus, atelier de Zinder, centre de formation de Ouagadougou | Claude ; Owner (validation des trois fiches avant la leçon 1) |
| Toutes | Motifs et schémas : boîte à outils et tiroir « Installé sur mon appareil », grille de test, chaîne de choix, balance, cadenas, application → modèle (cube), en ligne ou installé, jauges | Produits en motion selon le §2.4 | Claude |
| Toutes | Téléphone Android et comptes de tournage (Gemini, ChatGPT, Claude, Copilot, Perplexity, NotebookLM, Google AI Edge Gallery), versions gratuites, interface en français, mode clair, sans historique | Créer les comptes ; vérifier que chaque outil est disponible dans le pays de tournage et en français ; remplacer tout outil indisponible | Owner |
| Toutes | État réel des versions gratuites le jour du tournage (fonctions citées dans les scripts) | Vérifier dans chaque application ; retirer des scripts toute fonction qui ne serait plus exacte | Owner, puis Claude pour la mise à jour des scripts |
| 1 | PDF de cours de démonstration (support public ou document Karatou, sans donnée personnelle, avec au moins un chapitre 2) | Choisir ou préparer le document ; vérifier qu'on peut le montrer | Owner |
| 1 | Écran d'accueil avec les cinq applications d'IA (scène 4) | Installer les cinq applications sur un même écran ; capture immobile | Owner |
| 1 | NotebookLM : accueil (scène 8) ; création du carnet, dépôt du PDF, consigne, fiche, citation touchée (scènes 10 à 13) ; fiche enregistrée (scène 14) | Captures selon le tableau de la leçon 1, consigne exacte comprise ; relever les libellés français et vérifier les citations numérotées dans la version gratuite | Owner |
| 2 | Quatre assistants sur une nouvelle conversation vide (scène 4) | Une capture immobile de chacun ; mosaïque 2 × 2 au montage | Owner |
| 2 | La même consigne dans les quatre assistants (scènes 9 à 12), puis le lendemain dans l'assistant choisi (scène 13) | Même téléphone, même jour, même réseau ; consigne exacte de la leçon 2 (atelier près du grand marché de Zinder, de 8 h à 18 h, commander avant le 15) ; aucune donnée réelle de client | Owner |
| 2 | Grille de test réellement remplie (scènes 10 à 12), réutilisée en preuve en leçon 7 | Remplir la grille critère par critère d'après les quatre réponses | Owner ; Claude (reprise en schéma) |
| 2 | Relecture des quatre versions haoussa par un locuteur | Un locuteur consentant relit les quatre réponses pour le critère « langue » ; aucun nom affiché | Owner |
| 3 | Un programme de bourse réel, en cours, ouvert aux étudiants togolais, avec une page officielle datée, et un article d'une année passée | Choisir le programme et noter la page officielle ; vérifier la date limite | Owner |
| 3 | Réponse d'un assistant avec une date sans lien (scène 4) ; Perplexity : consigne, sources, source officielle, source ancienne, relance, note « date + lien + jour de vérification » (scènes 8 à 12) ; réponse à cinq sources ou plus (scène 13, concours au Sénégal) | Captures selon le tableau de la leçon 3, consignes exactes comprises | Owner |
| 4 | Trois conversations de test fictives, dont « Liste clientes (test) » (titres fictifs, crochets à la place des noms) | Les créer dans l'assistant retenu (Gemini conseillé), sans aucune donnée réelle | Owner |
| 4 | Historique (scènes 4 et 13), réglages de données et texte d'explication (scènes 8 et 9), conversation temporaire (scène 10), suppression (scène 11), demande sans nom ni numéro (scène 12) | Captures selon le tableau de la leçon 4 ; relever les libellés exacts et la valeur par défaut du réglage | Owner |
| 5 | Extraits du live : diapositive « Démo 2 · Sur téléphone » (**46:15–46:25**) et recherche de Google AI Edge Gallery dans le magasin d'applications (**41:30–41:56**, à défaut **46:02–46:37**) pour la scène 9 ; liste des modèles et plus petit modèle Gemma (**46:37–47:28**, complément **41:56–42:46**) pour la scène 10 | Extraction selon la première ligne ; masquer aussi la barre de notifications du téléphone de l'owner | Claude ; Owner (contrôle) |
| 5 | Capture neuve : téléchargement en wifi du plus petit modèle Gemma (scène 11) | Téléphone Android du cours ; icône wifi visible ; progression filmée jusqu'à la fin, accélérée au montage | Owner |
| 5 | Capture neuve : passage en mode avion, puis nouvelle conversation (scène 12) | Réglages rapides → mode avion ; wifi et données coupés ; retour dans Google AI Edge Gallery | Owner |
| 5 | Capture neuve : la question de Koffi en mode avion et la réponse (scène 14), réutilisée en leçon 7 | Consigne exacte de la leçon 5 (loi de l'offre et de la demande) ; icône d'avion visible sans coupe ; réponse vérifiée par l'owner avant le montage | Owner |
| 5 | Taille réelle du plus petit modèle Gemma ; disponibilité de Google AI Edge Gallery (Play Store, App Store, Togo, français) et de PocketPal AI | Relever dans l'application le jour du tournage ; ajuster la voix et l'écran (« ≈ … Go ») | Owner, puis Claude |
| 6 | Extraits du live : interface après l'installation (**20:04–20:12**, scène 4) ; page officielle (**19:13–19:55**) et recherche de modèle (**22:00–22:55**) (scène 10) ; fiche du modèle et modèle de taille 4B (**22:30–23:45**, arrêt vers **23:30–23:45**, scène 11) ; « Download » (**24:05–24:10**) et chargement (**24:17–24:38**) (scène 12) ; premier échange en français (**24:38–25:10**, scène 13) ; formulaire d'inscription (**28:10–28:37**) et script de présentation (**28:40–29:25**) (scène 15, bulle de la demande dictée vers 26:19 masquée ou coupée) ; mémoire utilisée (**37:43–37:58**, scène 16) ; Hugging Face, accueil (**54:50–55:10**) puis modèles et jeux de données (**57:38–58:03**) (scène 17) ; demande d'enregistrer un fichier et refus (**35:22–35:50**, scène 18). En option : l'essai d'affiche (**35:53–36:10**) en vignette de la scène 9. À ne jamais utiliser : **29:27–35:10** (code et site web), **49:20–53:50** (agent personnel de l'owner) | Extraction selon la première ligne ; libellés anglais retapés en français en surimpression ; si un détail des scènes 11, 16 ou 17 est illisible, refaire ce seul plan à neuf | Claude ; Owner (contrôle, et capture neuve si nécessaire) |
| 6 | Capture neuve : mémoire vive sous Windows et sur Mac (scène 7) | Windows : Gestionnaire des tâches → Performances → Mémoire ; Mac : menu Pomme → À propos de ce Mac ; interface en français ; nom de l'ordinateur et numéro de série masqués | Owner |
| 6 | Valeurs réelles : taille d'un modèle 4B, mémoire conseillée sur la fiche, mémoire utilisée ; nom exact de l'application et systèmes pris en charge | Relever dans LM Studio le jour du tournage ; ajuster la voix et l'écran | Owner, puis Claude |
| 7 | Modèle de dossier : la fiche (cinq lignes « tâche · famille · outil · raison · plan B », mention « dont 1 outil installé »), la page des trois preuves, la règle de données (scène 5) | Rédigé à partir des fiches des leçons 1 à 6 ; mis en page dans l'outil de documents (Google Docs ou équivalent) ; capture du défilement | Claude (rédaction) ; Owner (mise en page et capture) |
| 7 | Exemple rempli de Hadiza (scènes 8 à 11) : cinq tâches de son atelier, dont la ligne « rappels de commande » avec Google AI Edge Gallery (plan B : PocketPal AI) ; preuves réelles : grille de la leçon 2, source de la leçon 3, capture dédiée en mode avion (ligne suivante) ; règle de données | Choisir une foire artisanale réelle et publique, avec son règlement, ou remplacer ces deux tâches par des tâches dont les preuves existent ; [prénoms] entre crochets ; aucune donnée personnelle ; capture page par page | Claude (rédaction) ; Owner (mise en page, preuves et capture) |
| 7 | Capture neuve : preuve « IA installée en mode avion » de Hadiza (insérée dans le dossier, montrée en scène 11) | Google AI Edge Gallery, plus petit modèle Gemma, téléphone Android du cours en mode avion ; consigne exacte du tableau de la leçon 7 (rappel de commande avec [prénom]) ; icône d'avion visible ; aucune donnée de client | Owner |
| 7 | Vignettes de Koffi et de Mariam (scène 12) | Reprendre la réponse en mode avion (leçon 5, scène 14) et l'extrait du live **24:38–25:10** déjà extrait pour la leçon 6 ; aucun nom de version à l'écran | Claude |
| 7 | Export en PDF et dépôt sur la page du projet final (scène 13) | Menu « Télécharger » ou « Exporter » → PDF ; page de dépôt réelle de la plateforme Karatou Academy, nom et adresse e-mail du compte masqués ; si la page n'existe pas encore, montrer seulement l'export | Owner |
| 7 | Grille d'évaluation du certificat (cinq critères, dont « au moins un outil installé ») | L'obtenir auprès de la plateforme et aligner la scène 7 avant l'enregistrement | Owner |
