# CLAUDE.md — Karatou Academy · Production vidéo
# Cours 15 — Choisir le bon outil IA gratuit

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
| Owner | à désigner (son nom et sa photo figureront sur les cartes présentateur) |
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
comme piste. Titre : « Karatou Academy — Choisir le bon outil IA gratuit — Leçon N : <titre> (<LANGUE>) ». Le site lit des **URL
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
# PROGRESS — Cours 15 · Choisir le bon outil IA gratuit
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
| Numéro | 15 |
| Titre | Choisir le bon outil IA gratuit |
| Format | Motion graphics + captures d'écran, voix off (voix clonée de l'owner) |
| Owner / voix | à désigner — nom complet et titre exact demandés au premier lancement |
| Rubrique | Culture numérique |
| Public | Grand public : étudiants, commerçants et artisans, agents d'ONG, fonctionnaires, qui utilisent l'IA sur téléphone, souvent en 3G, avec des outils gratuits. |
| Slug du module (provisoire) | `outils-ia-gratuits` |
| Préfixe des leçons | `og` |
| Nombre de vidéos | 5 (dont la dernière = projet final certifiant) |
| Durée par vidéo | 3–5 min (cible 4:00) |
| Langues | FR (référence) · EN · HA · DJE |
| Prérequis | Un téléphone Android (ou un ordinateur) connecté ; une adresse e-mail pour créer des comptes ; savoir installer une application. Aucun abonnement, aucune compétence technique. Conseillé avant : le cours 1 « L'IA expliquée simplement ». |
| Promesse du cours | Vous choisirez, pour chacune de vos tâches, un outil IA gratuit adapté, testé et réglé pour protéger vos données. |
| Positionnement | Guide de choix pratique, fondé sur des tests à refaire soi-même. Il complète la leçon « Outils IA pratiques » du module en ligne « Intelligence artificielle » (panorama et critères) sans la répéter : ici, on teste plusieurs outils sur la même tâche, on ouvre les sources, on règle ses données et on construit sa boîte à outils. Aucun classement, aucun « outil gagnant » : les outils changent vite, la méthode reste. Renvoie au cours 10 pour la sécurité des comptes et au cours 12 pour la recherche documentaire. |
| Fil rouge | Ibrahim, étudiant en licence à Zinder, et sa sœur aînée Hadiza, couturière qui tient un atelier près du grand marché de Zinder. Chaque leçon remplit un compartiment de leur boîte à outils ; en leçon 5, chacun présente la sienne. |
| Marques citées | Gemini, NotebookLM, Google, Android (Google) ; ChatGPT (OpenAI) ; Claude (Anthropic) ; Copilot, Windows, Edge, Bing (Microsoft) ; Perplexity ; WhatsApp (Meta) ; « Nano Banana » (surnom de l'outil d'image de Gemini) ; l'outil de documents utilisé en leçon 5 (ex. Google Docs). |

## 2.2 Ce que l'apprenant saura faire

- Relier une tâche à l'une des cinq familles d'outils IA : assistants, recherche sourcée, image, audio, documents.
- Tester plusieurs assistants avec la même consigne, dans de nouvelles conversations, et choisir pour une tâche donnée à l'aide d'une grille de quatre critères.
- Obtenir une réponse sourcée et vérifier chaque source : qui parle, quand, et est-ce bien écrit dedans.
- Expliquer ce que l'on échange contre une version gratuite (données, attention, limites) et ce qu'une version payante apporte, ou n'apporte pas.
- Régler un assistant pour limiter l'usage de ses conversations, utiliser la conversation temporaire et supprimer les conversations sensibles.
- Construire et justifier une boîte à outils personnelle d'une page, avec un plan B pour chaque tâche.

## 2.3 Plan du cours

| Leçon | Id | Titre | Promesse (objectif) | Cas réel (B1) | Démo (B4) | Durée cible |
|---|---|---|---|---|---|---|
| 1 | `og1` | Les cinq familles d'outils IA | À la fin de cette leçon, vous saurez relier chaque tâche à une famille d'outils IA. | Ibrahim a cinq applications d'IA ; pour réviser un long cours en PDF, il le colle page par page dans un assistant. | NotebookLM : déposer le PDF du cours, demander une fiche de révision, toucher une citation pour voir le passage. | 4:00 |
| 2 | `og2` | Les grands assistants face à la même tâche | À la fin de cette leçon, vous saurez tester plusieurs assistants sur votre propre tâche. | Hadiza veut annoncer ses modèles de fête à ses clientes, en français et en haoussa ; on lui dit de prendre « celui que tout le monde utilise ». | Même consigne dans Gemini, ChatGPT, Claude et Copilot, chacun dans une nouvelle conversation ; grille des quatre critères ; choix pour cette tâche et plan B. | 4:00 |
| 3 | `og3` | La recherche sourcée : ouvrir les sources | À la fin de cette leçon, vous saurez obtenir une réponse sourcée et vérifier ses sources. | Ibrahim cherche une bourse de master et sa date limite ; un assistant lui donne une date, sans source. | Perplexity : question précise, sources numérotées, une source officielle retenue, une source ancienne écartée, relance, information notée avec lien et date. | 4:00 |
| 4 | `og4` | Gratuit ou payant : ce que vous payez vraiment | À la fin de cette leçon, vous saurez ce que vous échangez contre un outil IA gratuit. | Hadiza a collé la liste de ses clientes et leurs numéros dans un assistant ; une voisine lui conseille de payer « pour être protégée ». | Dans l'assistant de Hadiza : réglage d'amélioration du modèle désactivé, conversation sensible supprimée, conversation temporaire, demande refaite sans numéro. | 4:00 |
| 5 | `og5` | Projet final : votre boîte à outils IA | À la fin de cette leçon, vous saurez construire et justifier votre boîte à outils IA. | Hadiza et Ibrahim montent chacun leur boîte à outils pour le certificat. | La fiche réussie de Hadiza : cinq tâches, famille, outil, raison, plan B, règle de données ; trois preuves ; export et dépôt. | 4:00 |

## 2.4 Direction artistique du cours

- **Motif récurrent : la boîte à outils.** Une caisse à cinq compartiments étiquetés (Assistants · Recherche · Image · Audio · Documents). La leçon 1 la présente presque vide ; chaque leçon remplit ou éclaire un compartiment ; la leçon 5 montre les boîtes complètes de Hadiza et d'Ibrahim.
- **Deuxième motif fixe : la grille de test.** Un tableau de quatre critères (consigne · rien d'inventé · clarté · langue), avec des coches et des croix par réponse. Jamais de score total, jamais d'étoiles, de podium, de médaille ni de « n° 1 ». Coches et croix sont des formes, pas seulement des couleurs.
- **Personas.** Illustrations en aplats, formes simples, sans photoréalisme ni visage généré qui imite une personne réelle. Ibrahim : sac à dos, téléphone Android, cahier de cours. Hadiza : mètre ruban autour du cou, machine à coudre, tissus. Décors : chambre d'étudiant, atelier près du grand marché de Zinder.
- **Trois schémas types réutilisés.** (1) La chaîne de choix : Tâche → Famille → Outil → Plan B. (2) La grille de test. (3) La balance « ce que vous payez » : d'un côté l'argent, de l'autre les données, l'attention et les limites ; sans aucun montant.
- **Iconographie.** Un pictogramme par famille : bulle (assistant), loupe et lien (recherche), cadre photo (image), onde sonore (audio), feuille (documents) ; cadenas, interrupteur (réglage), maillon (lien), calendrier (date). Les logos n'apparaissent que dans les captures réelles ; sur les cartes, les noms d'outils sont écrits en texte simple.
- **Captures.** Versions gratuites, interface en français, mode clair, un seul téléphone Android pour tout le cours ; comptes de tournage sans historique. Toujours le même jour pour les captures d'une même comparaison.
- **Ce qui reste fixe.** La boîte à outils, la grille, la chaîne de choix, les deux personas. **Ce qui change.** Le compartiment éclairé (L1 tous, L2 Assistants, L3 Recherche, L4 le cadenas sur toute la boîte, L5 la boîte complète) et le persona au premier plan (L1 Ibrahim, L2 Hadiza, L3 Ibrahim, L4 Hadiza, L5 les deux).
- **Son.** Aucune musique sous la voix. Un court habillage sonore possible sur les cartes seulement (ouverture de compartiment).

## 2.5 Les leçons

### Leçon 1 — Les cinq familles d'outils IA (`og1`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez relier chaque tâche à une famille d'outils IA. »
- **Cas réel (B1 → B6)** : Ibrahim, étudiant en licence à Zinder, a installé cinq applications d'IA. Son téléphone sature. Pour réviser un long cours en PDF, il le colle page par page dans un assistant. Enjeu : réviser ses examens avec un téléphone limité et peu de données. B6 (champ `example`) : Ibrahim garde trois applications, une par besoin, et révise dans NotebookLM, qui renvoie au passage exact de son cours.
- **Unités de notion (B3)** : 1. Écrire et expliquer : les assistants — Gemini, ChatGPT, Claude, Copilot : ils écrivent, expliquent, résument, traduisent un premier jet. · 2. Chercher avec des sources — Perplexity, ou le mode recherche des assistants : une réponse appuyée sur des pages web numérotées, utile pour une information récente. · 3. Créer des images et du son — Gemini crée et retouche des images avec un outil surnommé « Nano Banana », d'autres assistants aussi ; côté audio : dicter, transcrire, écouter un texte. · 4. Travailler sur vos propres documents — NotebookLM répond à partir des fichiers déposés et cite le passage exact.
- **Démo (B4)** : NotebookLM, version gratuite, sur téléphone Android (application ou navigateur). 1. Ibrahim crée un notebook (un carnet de travail). 2. Il y dépose le PDF de son cours. 3. Il tape la consigne : fiche de révision du chapitre 2 en dix points, avec les citations. 4. La fiche arrive ; chaque point porte un numéro de citation. 5. Il touche un numéro : le passage du cours s'affiche, surligné. 6. Il enregistre la fiche. Résultat à l'écran : une fiche de dix points, chacun relié à sa page.
- **Consolidation (B5)** : prédiction. Ibrahim veut la date limite d'un concours de cette année : NotebookLM peut-il répondre ? Réponse : non. Il ne connaît que les documents déposés ; pour une information récente, il faut la recherche sourcée (leçon 3).
- **Consigne à copier** :

```text
À partir de mes sources uniquement, fais une fiche de révision de [chapitre ou thème] en [10] points courts.
Pour chaque point, indique la citation de la source.
Termine par [5] questions pour me tester, sans les réponses.
```

- **Exercice** : « Dressez la carte de vos tâches et de leurs familles » — 1. Listez cinq tâches réelles de votre semaine où l'IA pourrait vous aider. 2. Notez la famille de chacune : assistant, recherche sourcée, image, audio ou documents. 3. Testez la famille « documents » avec un cours ou un document de travail sans donnée personnelle, et vérifiez deux citations.
- **Carte de rappel** : 1. La tâche d'abord · 2. Cinq familles d'outils · 3. Sur vos documents, la citation
- **Quiz** *(5 questions ; chaque point de la carte de rappel est couvert)* :
  1. Par quoi commencer pour choisir un outil IA ? — A) Par l'outil dont tout le monde parle B) Par la tâche à accomplir C) Par l'application la plus récente D) Par la couleur de l'icône — **Réponse : B**
  2. Ibrahim veut réviser son cours en PDF et retrouver chaque passage. Quelle famille ? — A) Image B) Audio C) Documents, par exemple NotebookLM D) Recherche sourcée — **Réponse : C**
  3. Hadiza veut une affiche pour son atelier. Quelle famille ? — A) Image B) Documents C) Recherche sourcée D) Audio — **Réponse : A**
  4. Ibrahim veut la date limite d'un concours de cette année. Quelle famille ? — A) Documents B) Image C) Audio D) Recherche sourcée — **Réponse : D**
  5. Dans NotebookLM, à quoi sert le petit numéro après chaque point ? — A) À noter la réponse B) À ouvrir le passage exact du document déposé C) À compter les mots D) À partager la fiche — **Réponse : B**
- **Marques citées** : Gemini, NotebookLM, Android (Google) ; ChatGPT (OpenAI) ; Claude (Anthropic) ; Copilot (Microsoft) ; Perplexity ; « Nano Banana ».

#### Script v1 (à valider par l'owner)

Durée estimée : 4:00 (dont 3 s de mention légale, Partie 1) · Mots de voix off : 362

**Scène 1 — B1 Accroche · 0:00–0:09 · E**
- Visuel : la boîte à outils, fermée, s'ouvre sur une illustration en aplats : Ibrahim dans sa chambre d'étudiant, un téléphone dont l'icône de mémoire est pleine, un cahier de cours ouvert.
- Écran : « Ibrahim · étudiant · Zinder »
- VO : « Ibrahim, étudiant à Zinder, a cinq applications d'IA. Il colle son cours page par page. »

**Scène 2 — B1 Accroche · 0:09–0:18 · B**
- Visuel : carte promesse, texte révélé en deux temps.
- Écran : « À la fin de cette leçon, vous saurez relier chaque tâche à une famille d'outils IA. »
- VO : « À la fin de cette leçon, vous saurez relier chaque tâche à une famille d'outils IA. » *(promesse dite à 0:09)*

**Scène 3 — B2 Cadrage · 0:18–0:27 · B**
- Visuel : carte, surtitre « Le malentendu » ; deux étiquettes « Outil » et « Tâche » échangent leur place.
- Écran : « Le malentendu · L'outil d'abord ? »
- VO : « Son téléphone sature, et ses révisions avancent mal. Le malentendu : choisir l'outil d'abord, la tâche ensuite. »

**Scène 4 — B2 Cadrage · 0:27–0:45 · A**
- Visuel : capture réelle de l'écran d'accueil du téléphone : les cinq applications côte à côte ; un cadre les entoure, puis l'étiquette « Pour quelle tâche ? ».
- Écran : « Cinq applications… pour quelle tâche ? »
- VO : « Regardez son écran : cinq applications, installées le même jour. Il ouvre toujours la même, pour tout. La bonne question vient avant : quelle est ma tâche ? »

**Scène 5 — B3 Notion · 0:45–1:05 · C**
- Visuel : la boîte à outils et ses cinq compartiments étiquetés ; le compartiment « Assistants » s'éclaire, son pictogramme de bulle s'anime une fois.
- Écran : « 1 · Assistants : Gemini, ChatGPT, Claude, Copilot »
- VO : « Partez de la tâche, puis choisissez la famille. Nous en retenons cinq. Première famille : les assistants. Gemini, ChatGPT, Claude, Copilot. Ils écrivent, expliquent, résument, traduisent un premier jet. »

**Scène 6 — B3 Notion · 1:05–1:25 · C**
- Visuel : le compartiment « Recherche » s'éclaire ; une loupe parcourt trois pages web qui reçoivent les numéros 1, 2, 3.
- Écran : « 2 · Recherche sourcée : Perplexity, modes recherche »
- VO : « Deuxième famille : la recherche sourcée. Perplexity, ou le mode recherche des assistants. La réponse s'appuie sur des pages web, numérotées. Vous pouvez les ouvrir pour vérifier. Utile pour une information récente. »

**Scène 7 — B3 Notion · 1:25–1:47 · B**
- Visuel : carte en deux temps : le compartiment « Image » (cadre photo), puis « Audio » (onde sonore), chacun avec trois mots-clés.
- Écran : « 3 · Image : “Nano Banana” dans Gemini · 4 · Audio : dicter, transcrire »
- VO : « Troisième et quatrième familles : l'image et l'audio. Gemini crée et retouche des images avec un outil surnommé Nano Banana. D'autres assistants le font aussi. Côté audio : dicter, transcrire un enregistrement, écouter un texte à voix haute. »

**Scène 8 — B3 Notion · 1:47–2:12 · A**
- Visuel : capture réelle de l'accueil de NotebookLM ; le compartiment « Documents » s'éclaire en vignette dans un coin.
- Écran : « 5 · Documents : NotebookLM cite le passage »
- VO : « Cinquième famille : vos propres documents. NotebookLM, de Google, répond à partir des fichiers que vous déposez. Il cite le passage exact. Dit autrement : il ne cherche pas ailleurs, il lit vos pages. Utile pour un cours, un rapport, un règlement. »

**Scène 9 — B4 Application · 2:12–2:24 · A**
- Visuel : capture réelle : création d'un notebook, puis ajout du PDF comme source ; cadre sur le nom du fichier.
- Écran : « Nouveau carnet + le PDF du cours »
- VO : « Ibrahim crée un notebook, c'est-à-dire un carnet de travail. Il y dépose le PDF de son cours. »

**Scène 10 — B4 Application · 2:24–2:38 · A**
- Visuel : capture réelle : la consigne s'écrit dans la zone de question (frappe accélérée), puis l'envoi.
- Écran : « Fiche de révision · 10 points · avec citations »
- VO : « Sa consigne : une fiche de révision du chapitre deux, en dix points, avec les citations. Il précise : à partir de ses sources uniquement. »

**Scène 11 — B4 Application · 2:38–2:52 · A**
- Visuel : capture réelle : la fiche s'affiche ; un cercle entoure un numéro de citation.
- Écran : « Le petit numéro = la citation »
- VO : « La fiche arrive en dix points. Chaque point porte un petit numéro : c'est la citation. Elle renvoie au cours. »

**Scène 12 — B4 Application · 2:52–3:04 · A**
- Visuel : capture réelle : le doigt touche le numéro ; le passage du PDF s'affiche, surligné ; coche.
- Écran : « Le passage exact, surligné »
- VO : « Il touche un numéro : le passage du cours s'affiche, surligné. Il vérifie d'un seul geste. »

**Scène 13 — B4 Application · 3:04–3:12 · A**
- Visuel : capture réelle : la fiche enregistrée dans le carnet.
- Écran : « Fiche enregistrée »
- VO : « Une tâche, une famille, un outil qui cite ses pages. »

**Scène 14 — B5 Consolidation · 3:12–3:37 · B**
- Visuel : carte question : « Date limite d'un concours, cette année : NotebookLM ? » ; silence ; puis le compartiment « Recherche » s'éclaire avec une flèche vers « Leçon 3 ».
- Écran : « Date limite d'un concours : NotebookLM ? » « → Recherche sourcée (leçon 3) »
- VO : « Ibrahim veut maintenant la date limite d'un concours, cette année. NotebookLM peut-il répondre ? » *(silence, 3 s)* « Non. Il ne connaît que les documents déposés. Pour une information récente, il faut la recherche sourcée : ce sera la leçon trois. »

**Scène 15 — B6 Clôture · 3:37–3:44 · B (carte de rappel, panneau 1)**
- Visuel : carte de rappel, panneau 1 : la promesse ; sous la carte, l'écran d'Ibrahim ne garde que trois applications.
- Écran : « À la fin de cette leçon, vous saurez relier chaque tâche à une famille d'outils IA. »
- VO : « Ibrahim garde trois applications, une par besoin. Il révise avec ses sources. »

**Scène 16 — B6 Clôture · 3:44–3:57 · B (carte de rappel)**
- Visuel : carte de rappel, panneau 2 : trois points révélés au rythme de la voix.
- Écran : « 1. La tâche d'abord » « 2. Cinq familles d'outils » « 3. Sur vos documents, la citation »
- VO : « La tâche d'abord, l'outil ensuite. Cinq familles d'outils. Sur vos documents, exigez la citation. Dressez la carte de vos tâches et de leurs familles. »

#### Captures à fournir par l'owner

| Scène | Outil · appareil | Gestes exacts | Texte exact à taper | Durée utile | À masquer |
|---|---|---|---|---|---|
| 4 | Écran d'accueil · téléphone Android | Regrouper sur un même écran les cinq applications (Gemini, ChatGPT, Claude, Copilot, Perplexity) ; écran immobile. | Aucun | 10 s | Notifications, autres applications, fond d'écran personnel |
| 8 | NotebookLM, version gratuite (application Android ou navigateur), interface en français | Ouvrir l'accueil ; ne rien toucher. | Aucun | 10 s | Compte, titres des autres notebooks |
| 9–12 | NotebookLM · même téléphone | Créer un notebook ; ajouter une source et choisir le PDF ; taper la consigne ; attendre la réponse ; toucher un numéro de citation ; laisser le passage s'afficher. | « À partir de mes sources uniquement, fais une fiche de révision du chapitre 2 en 10 points courts. Pour chaque point, indique la citation de la source. Termine par 5 questions pour me tester, sans les réponses. » | 50 s (frappe accélérée au montage) | Compte |
| 13 | NotebookLM | Enregistrer la réponse en note dans le notebook (ou la copier dans l'application de notes). | Aucun | 8 s | Compte |

#### Notes de script

- Prononciation : « Gemini » se dit « jé-mi-ni » ; « NotebookLM » se dit « note-bouk-elle-emme » ; « Perplexity » se dit « per-plek-si-ti » ; « Copilot » se dit « co-pi-lote » ; « Nano Banana » se dit « na-no ba-na-na ».
- Les cinq familles sont un classement pédagogique de Karatou, pas une norme : la voix dit « nous en retenons cinq ».
- Scène 7 : « Nano Banana » est le surnom grand public de l'outil d'image de Gemini ; toujours le présenter comme tel. Vérifier que la création d'images reste disponible dans la version gratuite de Gemini, et dans au moins un autre assistant, pour garder « D'autres assistants le font aussi ». [à vérifier au moment de la production]
- Scènes 8 à 13 : vérifier les libellés exacts de NotebookLM en français (création d'un notebook, ajout d'une source, enregistrement en note) et la présence des citations numérotées dans la version gratuite. [à vérifier au moment de la production]
- PDF de la démo : un support public ou un document Karatou, sans donnée personnelle ; pas un cours sous droits sans accord de son auteur.
- Termes nouveaux : « notebook » (anglicisme dit une fois, glosé « carnet de travail », puis remplacé par « carnet ») ; « citation » (dit puis montré). « Déposer » remplace l'anglicisme courant pour l'envoi d'un fichier.
- Adaptation EN : « famille d'outils » = *tool family* ; « fiche de révision » = *revision sheet* ; « carnet » = *notebook*.
- Adaptation HA / DJE : garder les noms de produits tels quels ; traduire « famille d'outils » par l'expression la plus simple possible (« type d'outil ») ; éviter tout jeu de mots sur « Nano Banana ».

### Leçon 2 — Les grands assistants face à la même tâche (`og2`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez tester plusieurs assistants sur votre propre tâche. »
- **Cas réel (B1 → B6)** : Hadiza, couturière près du grand marché de Zinder, veut annoncer ses modèles de fête à ses clientes par un message WhatsApp, en français et en haoussa. Son frère Ibrahim lui conseille de prendre « celui que tout le monde utilise ». Enjeu : un message juste, clair, sans information inventée, dans les deux langues de ses clientes. B6 (champ `example`) : ses clientes reçoivent un message clair, en français et en haoussa ; Hadiza garde, pour cette tâche, l'assistant qui a passé sa grille, et note un plan B.
- **Unités de notion (B3)** : 1. Une seule consigne, mot pour mot — le même texte dans chaque assistant, dans une nouvelle conversation, avec les mêmes informations ; sinon on compare deux demandes, pas deux outils. · 2. Une grille de quatre critères — consigne respectée ; aucune information inventée ; clarté pour le public ; langue correcte (le haoussa relu par un locuteur). · 3. Des atouts, pas un classement — Gemini est relié aux services de Google et crée des images ; Copilot est intégré à Windows, au navigateur Edge et à Bing ; ChatGPT réunit voix, images, fichiers et recherche ; Claude se concentre sur l'écrit et l'analyse de documents [à vérifier au moment de la production] ; pour une tâche donnée, c'est le test qui décide.
- **Démo (B4)** : Gemini, ChatGPT, Claude et Copilot, versions gratuites, sur le même téléphone Android, le même jour. 1. Hadiza prépare sa consigne (carte G). 2. Ibrahim la colle, mot pour mot, dans les quatre assistants, chaque fois dans une nouvelle conversation. 3. Critère 1 : cinq lignes, le lieu et les horaires sont-ils là ? Coche ou croix, réponse par réponse. 4. Critère 2 : un prix, une promotion, une adresse inventés ? 5. Critères 3 et 4 : clarté, et haoussa relu par Hadiza elle-même. 6. Elle choisit pour cette tâche et note un plan B. Résultat à l'écran : la grille remplie, sans score total.
- **Consolidation (B5)** : prédiction. Le lendemain, Hadiza repose la même question au même assistant : aura-t-elle la même réponse ? Réponse : non. Les réponses varient d'une fois à l'autre, et les outils changent avec leurs mises à jour : refaites le test de temps en temps, gardez un plan B.
- **Consigne à copier** :

```text
Écris un message WhatsApp pour annoncer [les nouveaux modèles de mon atelier de couture pour la fête] à mes clientes.
Informations à utiliser : [lieu] ; [horaires] ; [commander avant le …].
N'invente aucune autre information (ni prix, ni promotion, ni adresse).
Cinq lignes au plus, ton chaleureux. Donne une version en français, puis une version en haoussa.
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

Durée estimée : 4:00 (dont 3 s de mention légale, Partie 1) · Mots de voix off : 363

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
- VO : « Son frère lui dit : prends celui que tout le monde utilise. Le malentendu : un outil gagnerait partout. »

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
- Écran : « Message WhatsApp · mes clientes · [lieu] · [horaires] · [commander avant le …] » « 5 lignes max · ton chaleureux · français puis haoussa · n'invente rien »
- VO : « Voici la consigne de Hadiza : ses vraies informations, cinq lignes, français puis haoussa. Et : n'invente rien. »

**Scène 9 — B4 Application · 2:19–2:33 · A**
- Visuel : capture réelle, en mosaïque : la même consigne collée et envoyée dans les quatre assistants, chacun dans une nouvelle conversation.
- Écran : « Même consigne · 4 nouvelles conversations »
- VO : « Ibrahim colle la même consigne dans les quatre assistants. Chaque fois, dans une nouvelle conversation. Même jour, même téléphone, même réseau : le test reste équitable. »

**Scène 10 — B4 Application · 2:33–2:47 · A**
- Visuel : capture réelle : les quatre réponses côte à côte ; sous chacune, la ligne « Consigne » de la grille reçoit une coche ou une croix, l'une après l'autre.
- Écran : « Critère 1 : la consigne »
- VO : « Premier critère : la consigne. Cinq lignes demandées, avec le lieu et les horaires. Ils cochent, réponse par réponse. »

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
| 9–12 | Les quatre mêmes applications · même téléphone, même jour, même réseau | Nouvelle conversation ; coller la consigne ; envoyer ; faire défiler toute la réponse, versions française et haoussa. | « Écris un message WhatsApp pour annoncer les nouveaux modèles de mon atelier de couture pour la fête à mes clientes. Informations à utiliser : atelier près du grand marché de Zinder ; ouvert de 8 h à 18 h ; commander avant le 15 du mois. N'invente aucune autre information (ni prix, ni promotion, ni adresse). Cinq lignes au plus, ton chaleureux. Donne une version en français, puis une version en haoussa. » | 4 × 20 s | Comptes, historiques |
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

### Leçon 3 — La recherche sourcée : ouvrir les sources (`og3`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez obtenir une réponse sourcée et vérifier ses sources. »
- **Cas réel (B1 → B6)** : Ibrahim cherche une bourse de master ouverte aux étudiants nigériens, et sa date limite de candidature. Un assistant lui donne une date nette, sans aucune source. Enjeu : rater la date, ou se fier à une page périmée. B6 (champ `example`) : Ibrahim dépose sa candidature avant la date, vérifiée sur la page officielle du programme.
- **Unités de notion (B3)** : 1. Un moteur de réponse cite ses pages — Perplexity lit des pages web, résume, et numérote ses sources ; Gemini, ChatGPT, Copilot et Claude ont aussi un mode recherche avec des liens [à vérifier au moment de la production pour chaque version gratuite]. · 2. Ouvrir la source, toujours — le numéro mène à une page ; on vérifie que la page dit bien ce que dit le résumé. · 3. Trois questions à chaque source — Qui parle ? Quand (date de publication) ? Est-ce écrit dedans ? Pour une bourse, la page de l'organisme qui la finance passe avant tout.
- **Démo (B4)** : Perplexity, version gratuite, sur téléphone Android (application ou navigateur). 1. Ibrahim tape une question précise : quelle bourse, pour qui, quelle année. 2. La réponse arrive avec des sources numérotées. 3. Source 1 : la page officielle du programme ; la date limite y figure, publiée cette année : coche. 4. Source 2 : un article d'une année passée : croix. 5. Il relance : sources officielles seulement, avec leur date. 6. Il note la date limite, avec le lien. Résultat à l'écran : une note « date + lien + jour de vérification ».
- **Consolidation (B5)** : prédiction. Une réponse affiche cinq sources : est-elle donc juste ? Réponse : non. Le nombre ne prouve rien ; une source peut être ancienne, non officielle, ou dire autre chose : on les ouvre.
- **Consigne à copier** :

```text
[Votre question précise : quoi, pour qui, quand, où].
Réponds en 5 lignes au plus.
Pour chaque information, cite la source officielle et sa date de publication.
Signale toute source qui date d'une année précédente.
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

Durée estimée : 4:00 (dont 3 s de mention légale, Partie 1) · Mots de voix off : 355

**Scène 1 — B1 Accroche · 0:00–0:09 · E**
- Visuel : le compartiment « Recherche » s'ouvre sur une illustration : Ibrahim devant un tableau d'affichage de l'université, une affiche de bourse floue, son téléphone à la main.
- Écran : « Ibrahim · une bourse de master · date limite ? »
- VO : « Leçon précédente : un choix par tâche, après un test. Aujourd'hui, Ibrahim cherche une bourse de master. »

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
- VO : « Regardez : une date, nette et assurée. Mais d'où vient-elle ? Aucun lien ne permet de le savoir. Si elle est fausse, Ibrahim rate sa candidature. »

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
- Visuel : capture réelle : Perplexity ; la question s'écrit (frappe accélérée), puis l'envoi.
- Écran : « Question précise : quelle bourse, pour qui, quelle année »
- VO : « Ibrahim ouvre Perplexity et tape une question précise : quelle bourse, pour qui, quelle année. »

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
- VO : « Ibrahim dépose sa candidature avant la date, vérifiée sur la page officielle. »

**Scène 15 — B6 Clôture · 3:44–3:57 · B (carte de rappel)**
- Visuel : carte de rappel, panneau 2 : trois points révélés au rythme de la voix.
- Écran : « 1. Un numéro, une page à ouvrir » « 2. Qui ? Quand ? Écrit dedans ? » « 3. La source, pas le résumé »
- VO : « Un numéro, une page à ouvrir. Qui, quand, et est-ce écrit dedans ? Retenez la source, pas le résumé. Vérifiez une réponse, source par source. »

#### Captures à fournir par l'owner

| Scène | Outil · appareil | Gestes exacts | Texte exact à taper | Durée utile | À masquer |
|---|---|---|---|---|---|
| 4 | Un assistant au choix, version gratuite · téléphone Android | Nouvelle conversation ; poser la question ; garder une réponse qui donne une date sans lien visible. | « Quelle est la date limite de candidature à la bourse [nom du programme] cette année ? » | 15 s | Compte, historique |
| 8–12 | Perplexity, version gratuite (application Android ou navigateur), interface en français · même téléphone | Taper la question ; envoyer ; faire défiler ; toucher la source officielle et défiler jusqu'aux dates ; revenir ; toucher une source ancienne et montrer sa date ; envoyer la relance ; ouvrir l'application de notes et taper la date limite, le lien et le jour de vérification. | 1) « Bourse [nom du programme] : conditions pour les étudiants nigériens et date limite de candidature pour [année]. Cite les sources officielles avec leur date. » 2) « Ne garde que les sources officielles, avec leur date de publication. » | 60 s (frappe accélérée au montage) | Compte, historique |
| 13 | Perplexity · même téléphone | Poser une question d'actualité qui produit au moins cinq sources ; ouvrir trois sources l'une après l'autre. | Question au choix, sans donnée personnelle | 20 s | Compte, historique |

#### Notes de script

- Prononciation : « Perplexity » se dit « per-plek-si-ti ».
- Choisir au moment du tournage un programme de bourse réel, en cours et ouvert aux étudiants nigériens, avec une page officielle datée. La voix reste générique (« la bourse ») ; le nom du programme n'apparaît que dans les captures. Ne jamais présenter ce programme comme une recommandation.
- Scène 4 : beaucoup d'assistants cherchent désormais sur le web d'eux-mêmes et affichent des liens. S'il est impossible d'obtenir une réponse sans lien, la voix devient : « Regardez : une date, et des liens. Les a-t-il ouverts ? Si la date est fausse, Ibrahim rate sa candidature. » [à vérifier au moment de la production]
- Scène 5 : vérifier que la recherche web avec liens est bien disponible dans la version gratuite de chacun des quatre assistants cités ; retirer de la phrase tout outil qui ne l'offre pas. [à vérifier au moment de la production]
- Scènes 10 et 11 : annoter les sources réellement obtenues. Si aucune source ancienne n'apparaît, refaire la recherche sur un autre programme, ou adapter la voix à ce que montre l'écran.
- Si une page demande de l'argent pour « réserver » une bourse, c'est un signal d'alerte : renvoyer au cours 10, sans le développer ici.
- Termes nouveaux : « moteur de réponse » (scène 5, redit « un résumé, avec ses preuves »). « Source » est un mot courant, montré à l'écran.
- Adaptation EN : « moteur de réponse » = *answer engine* ; « réponse sourcée » = *sourced answer* ; « date de publication » = *publication date*.
- Adaptation HA / DJE : garder « Perplexity » tel quel ; pour « source », employer le mot local le plus simple (« l'endroit d'où vient l'information »), puis le garder.

### Leçon 4 — Gratuit ou payant : ce que vous payez vraiment (`og4`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez ce que vous échangez contre un outil IA gratuit. »
- **Cas réel (B1 → B6)** : Hadiza a collé dans un assistant la liste de ses clientes, avec leurs numéros, pour préparer un message (cas fictif). Une voisine lui dit : « Payez, vous serez protégée. » Enjeu : des données de clientes confiées à un outil, et une fausse sécurité. B6 (champ `example`) : Hadiza règle son assistant, supprime la conversation, et refait sa demande sans nom ni numéro ; elle garde la version gratuite.
- **Unités de notion (B3)** : 1. Gratuit : vous payez en données et en attention — vos conversations peuvent servir à améliorer le service, et des publicités peuvent apparaître selon la version et le pays [à vérifier au moment de la production]. · 2. Payant : des fonctions, pas une protection automatique — la version payante ajoute des fonctions et élargit des limites ; la confidentialité dépend des réglages, pas du paiement ; on commence par le gratuit. · 3. Trois gestes pour vous protéger — couper l'usage de vos conversations pour entraîner l'outil, utiliser la conversation temporaire, supprimer ce qui doit disparaître ; et ne jamais taper de nom, de numéro ni de photo de client.
- **Démo (B4)** : l'assistant de Hadiza (Gemini conseillé), version gratuite, sur téléphone Android. 1. Réglages, rubrique des données : l'option qui permet d'utiliser ses conversations pour améliorer le service est désactivée. 2. Lecture du texte d'explication : même réglé, certaines conversations peuvent encore être relues pour la sécurité du service [à vérifier au moment de la production]. 3. Ouverture d'une conversation temporaire pour un sujet sensible. 4. Suppression de la conversation qui contient la liste de clientes. 5. Nouvelle demande, sans nom ni numéro : seulement le modèle de message. Résultat à l'écran : un réglage désactivé, une conversation supprimée, une demande propre.
- **Consolidation (B5)** : prédiction. Hadiza a supprimé sa liste de clientes de l'historique : ces noms sont-ils effacés partout ? Réponse : pas forcément. Supprimer retire la conversation de votre vue ; une copie peut rester un temps chez l'éditeur [à vérifier au moment de la production]. Il faut donc ne jamais taper ce qui ne doit pas sortir.
- **Consigne à copier** :

```text
Rédige un modèle de message WhatsApp pour prévenir mes clientes que [leur commande est prête].
Laisse des crochets à la place du prénom : [prénom].
Cinq lignes au plus, ton chaleureux et poli.
Je n'ai fourni aucune donnée de client : n'en demande pas.
```

- **Exercice** : « Réglez votre assistant et nettoyez votre historique » — 1. Ouvrez les réglages de votre assistant principal, trouvez l'option sur l'usage de vos conversations et décidez de l'activer ou non. 2. Repérez la conversation temporaire et essayez-la avec une question sans donnée personnelle. 3. Relisez votre historique, supprimez toute conversation qui contient un nom, un numéro ou une photo, et écrivez votre règle de données en une phrase.
- **Carte de rappel** : 1. Gratuit : payé en données · 2. Payant : plus de fonctions · 3. Trois gestes de protection
- **Quiz** *(5 questions ; chaque point de la carte de rappel est couvert)* :
  1. Une version gratuite coûte : — A) rien du tout, sans contrepartie B) pas d'argent, mais vos données et votre attention peuvent servir C) toujours de l'argent caché D) votre téléphone — **Réponse : B**
  2. Que change une version payante ? — A) Elle garantit la confidentialité B) Elle supprime vos conversations C) Elle ajoute des fonctions ; les réglages restent à vérifier D) Elle rend l'IA toujours exacte — **Réponse : C**
  3. Quel geste limite l'usage de vos conversations pour entraîner l'outil ? — A) Changer de fond d'écran B) Écrire plus vite C) Fermer l'application D) Désactiver l'option dans les réglages de données — **Réponse : D**
  4. Pour un sujet sensible, que choisissez-vous ? — A) Une conversation temporaire, sans nom ni numéro B) L'historique habituel C) Un message WhatsApp D) Un groupe public — **Réponse : A**
  5. Hadiza a supprimé une conversation. Que sait-on ? — A) Tout est effacé partout, pour toujours B) Rien n'a changé C) Elle disparaît de votre vue, mais une copie peut rester un temps : ne tapez pas de données sensibles D) L'IA oublie son entraînement — **Réponse : C**
- **Marques citées** : Gemini (Google).

#### Script v1 (à valider par l'owner)

Durée estimée : 4:00 (dont 3 s de mention légale, Partie 1) · Mots de voix off : 376

**Scène 1 — B1 Accroche · 0:00–0:09 · E**
- Visuel : le cadenas posé sur la boîte à outils s'ouvre sur une illustration : Hadiza à sa machine à coudre, un téléphone à la main, une liste de prénoms floue sur l'écran (aucun nom lisible).
- Écran : « Hadiza · couturière · la liste de ses clientes »
- VO : « Leçon précédente : ouvrez la source. Hadiza, elle, a collé la liste de ses clientes. »

**Scène 2 — B1 Accroche · 0:09–0:18 · B**
- Visuel : carte promesse, texte révélé en deux temps.
- Écran : « À la fin de cette leçon, vous saurez ce que vous échangez contre un outil IA gratuit. »
- VO : « À la fin de cette leçon, vous saurez ce que vous échangez contre un outil IA gratuit. » *(promesse dite à 0:09)*

**Scène 3 — B2 Cadrage · 0:18–0:27 · B**
- Visuel : carte, surtitre « Le malentendu » ; « Payer = protégé ? » ; le signe « = » est barré.
- Écran : « Le malentendu · Payer = protégé ? »
- VO : « Une voisine lui dit : payez, vous serez protégée. Le malentendu : payer règle tout. »

**Scène 4 — B2 Cadrage · 0:27–0:45 · A**
- Visuel : capture réelle : l'historique de l'assistant, titres de conversations fictifs ; un cadre sur la liste, puis l'étiquette « Gardé ».
- Écran : « Une version gratuite a un prix »
- VO : « Regardez l'historique de Hadiza : ses conversations sont gardées. Une version gratuite ne coûte pas d'argent, mais elle a un prix. Lequel ? On le découvre en trois idées. »

**Scène 5 — B3 Notion · 0:45–1:08 · C**
- Visuel : balance : le plateau « argent » reste vide ; l'autre plateau reçoit « données » et « attention » ; aucun chiffre.
- Écran : « 1 · Gratuit : vous payez en données et en attention »
- VO : « Première idée : gratuit ne veut pas dire sans prix. Vos conversations peuvent servir à améliorer le service. Des publicités peuvent aussi apparaître, selon la version et le pays. Vous payez avec vos données et votre attention. »

**Scène 6 — B3 Notion · 1:08–1:36 · C**
- Visuel : la balance, deuxième plateau : un nouveau pictogramme « fonctions » ; un cadenas reste ouvert à côté, avec la mention « réglages ».
- Écran : « 2 · Payant : des fonctions, pas de protection automatique »
- VO : « Deuxième idée : le payant ajoute des fonctions et élargit des limites. Il ne règle pas automatiquement la confidentialité. Autrement dit, payer achète des fonctions, pas une promesse. Vérifiez toujours les réglages, même après paiement. Commencez par le gratuit, et payez seulement si un vrai besoin apparaît. »

**Scène 7 — B3 Notion · 1:36–2:12 · B**
- Visuel : carte, surtitre « 3 · Trois gestes pour vous protéger » ; trois pictogrammes entrent un par un : interrupteur, bulle temporaire, corbeille.
- Écran : « 3 · Réglage · Conversation temporaire · Suppression »
- VO : « Troisième idée : trois gestes pour vous protéger. Un : coupez l'usage de vos conversations pour entraîner l'outil, dans les réglages. Deux : utilisez la conversation temporaire pour un sujet sensible. Trois : supprimez ce qui doit disparaître. Et surtout : ne tapez jamais ce que vous ne voudriez pas voir relu. Les noms et numéros de clients n'y entrent jamais. »

**Scène 8 — B4 Application · 2:12–2:24 · A**
- Visuel : capture réelle : réglages de l'assistant, rubrique des données ; l'option est désactivée ; coche.
- Écran : « Réglages → données → usage des conversations : désactivé »
- VO : « Hadiza ouvre les réglages de son assistant, rubrique données. Elle désactive l'usage de ses conversations pour entraîner l'outil. »

**Scène 9 — B4 Application · 2:24–2:36 · A**
- Visuel : capture réelle : le texte d'explication de la rubrique ; cadre sur la phrase qui mentionne la relecture ou la sécurité du service.
- Écran : « Réglé ≠ invisible »
- VO : « Elle lit l'explication. Même réglée, la protection n'est pas totale. Certaines conversations peuvent encore être relues pour la sécurité du service. »

**Scène 10 — B4 Application · 2:36–2:48 · A**
- Visuel : capture réelle : ouverture d'une conversation temporaire ; le bandeau qui l'indique est encadré.
- Écran : « Conversation temporaire »
- VO : « Pour un sujet sensible, elle ouvre une conversation temporaire. Elle ne reste pas dans l'historique. »

**Scène 11 — B4 Application · 2:48–3:00 · A**
- Visuel : capture réelle : suppression d'une conversation de test ; confirmation ; la ligne disparaît de l'historique.
- Écran : « Conversation supprimée de l'historique »
- VO : « Puis elle supprime la conversation où figure la liste de clientes. Supprimer aide, mais ne remplace pas la prudence. »

**Scène 12 — B4 Application · 3:00–3:12 · A**
- Visuel : capture réelle : nouvelle conversation ; la consigne est tapée, avec [prénom] à la place des noms ; envoi ; le modèle de message s'affiche.
- Écran : « Un modèle, avec [prénom] : aucun client dedans »
- VO : « Enfin, elle refait sa demande sans nom ni numéro : seulement le modèle de message. L'outil n'en a pas besoin. »

**Scène 13 — B5 Consolidation · 3:12–3:37 · A**
- Visuel : capture réelle : l'historique après suppression, la conversation a disparu ; la question s'affiche en surimpression ; silence ; puis une copie fantôme apparaît derrière la corbeille.
- Écran : « Supprimé = effacé partout ? »
- VO : « Hadiza a supprimé sa liste de clientes de l'historique. Ces noms sont-ils effacés partout ? » *(silence, 3 s)* « Pas forcément. Supprimer retire la conversation de votre vue. Une copie peut rester un temps chez l'éditeur. Alors ne tapez jamais ce qui ne doit pas sortir. »

**Scène 14 — B6 Clôture · 3:37–3:44 · B (carte de rappel, panneau 1)**
- Visuel : carte de rappel, panneau 1 : la promesse ; le cadenas se referme sur la boîte à outils.
- Écran : « À la fin de cette leçon, vous saurez ce que vous échangez contre un outil IA gratuit. »
- VO : « Hadiza garde le gratuit. Ses clientes restent anonymes pour l'outil. »

**Scène 15 — B6 Clôture · 3:44–3:57 · B (carte de rappel)**
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
| 12 | Même assistant | Nouvelle conversation ; taper la consigne ; envoyer ; laisser la réponse s'afficher. | « Rédige un modèle de message WhatsApp pour prévenir mes clientes que leur commande est prête. Laisse des crochets à la place du prénom : [prénom]. Cinq lignes au plus, ton chaleureux et poli. Je n'ai fourni aucune donnée de client : n'en demande pas. » | 20 s | Compte, historique |

#### Notes de script

- Prononciation : « Gemini » se dit « jé-mi-ni ».
- Cette leçon ne cite aucun chiffre : ni durée de conservation, ni nombre de pays, ni montant. Ne pas en ajouter au montage.
- Vérifier le jour du tournage, dans l'assistant retenu : le nom et l'emplacement de l'option sur l'usage des conversations ; la valeur par défaut (qui diffère selon les outils et l'âge du compte) ; l'existence de la conversation temporaire ; la phrase d'explication sur la relecture. Adapter les scènes 8 à 11 au libellé réel. [à vérifier au moment de la production]
- Scène 5 : la présence de publicités dépend de la version, du pays et de l'outil ; si l'assistant retenu n'en montre pas, garder la phrase au conditionnel (« peuvent apparaître ») et ne pas l'illustrer. [à vérifier au moment de la production]
- Scène 13 : une conversation supprimée peut rester un temps chez l'éditeur, et certaines conversations relues par des personnes peuvent être conservées plus longtemps ; la durée varie selon l'outil, donc aucune durée n'est dite. [à vérifier au moment de la production]
- Scènes 4 et 8 à 12 : toutes les conversations de test sont fictives, avec des crochets à la place des noms et des numéros. Ne jamais filmer une vraie liste de clients.
- Cette leçon ne dit rien d'un outil en particulier : les réglages existent, sous des noms différents, dans les autres assistants. Si l'owner préfère un autre assistant, remplacer « Gemini » partout dans la fiche.
- Termes nouveaux : « entraîner l'outil » (scène 5, glosé « améliorer le service »). On évite « modèle » au sens technique ; « modèle de message » désigne seulement un texte à réutiliser.
- Adaptation EN : « conversation temporaire » = *temporary chat* ; « historique » = *chat history* ; « entraîner l'outil » = *train the tool*.
- Adaptation HA / DJE : « gratuit mais il a un prix » est une formule imagée ; la rendre par l'idée « ce n'est pas payé en argent, mais en informations ». Garder « WhatsApp » et les noms de produits.

### Leçon 5 — Projet final : votre boîte à outils IA (`og5`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez construire et justifier votre boîte à outils IA. »
- **Cas réel (B1 → B6)** : Hadiza et Ibrahim présentent chacun leur boîte à outils IA pour le certificat. Ils doivent prouver chaque choix : testé, sourcé, réglé, avec un plan B. B6 (champ `example`) : leurs boîtes sont prêtes ; chaque outil est choisi, testé et réglé ; les dossiers sont déposés.
- **Unités de notion (B3) — livrables et critères** : 1. Trois livrables — la fiche d'une page (cinq tâches réelles, avec famille, outil, raison, plan B) ; trois preuves (un test à consigne égale, une source vérifiée avec son lien et sa date, une capture de vos réglages) ; une règle de données en une phrase. · 2. La règle de données — une phrase, par exemple « aucun nom, numéro ni photo de client dans un assistant », écrite puis respectée. · 3. Cinq critères — tâches réelles ; choix testé ; sources ouvertes ; données protégées ; plan B.
- **Démo (B4) — exemple de projet réussi, de bout en bout** : outil de documents (Google Docs ou équivalent). 1. La fiche de Hadiza : cinq tâches de son atelier (annoncer, traduire, chercher, illustrer, résumer un document), chacune avec sa famille et son outil. 2. Colonnes « raison » et « plan B » : chaque raison renvoie à un test. 3. Les trois preuves : la grille remplie (leçon 2), une source avec son lien et sa date (leçon 3), la capture de ses réglages (leçon 4). 4. Sa règle de données, en une phrase. 5. Export en PDF et dépôt sur la page du projet final. Résultat à l'écran : un dossier d'une à deux pages, complet, sans aucune donnée personnelle.
- **Consolidation (B5)** : prédiction. Un autre dossier liste vingt applications, sans test ni plan B : est-il recevable ? Réponse : non. Une liste n'est pas un choix ; sans test, sans raison et sans plan B, le dossier revient.
- **Consigne à copier** :

```text
Voici mes cinq tâches et mes choix : [tâche – famille – outil – raison – plan B ; …].
Mets-les en tableau d'une page, avec un titre court.
N'ajoute aucun outil et aucune information. Laisse vide toute case que je n'ai pas remplie.
Ce texte ne contient aucune donnée personnelle.
```

- **Exercice** : « Construisez votre boîte à outils et déposez votre dossier » — 1. Remplissez la fiche : cinq tâches réelles, avec famille, outil, raison et plan B. 2. Ajoutez les trois preuves (grille de test, source vérifiée avec lien et date, capture de vos réglages) et votre règle de données. 3. Exportez le tout en un seul fichier PDF et déposez-le sur la page du projet final.
- **Carte de rappel** *(récapitulatif du cours, un point par leçon)* : 1. Tâche d'abord · 2. Même test pour tous · 3. Ouvrez la source · 4. Protégez vos données
- **Quiz** *(5 questions ; chaque point de la carte de rappel est couvert)* :
  1. Pour chaque tâche de la fiche, que doit-on trouver ? — A) L'outil le plus connu B) Une famille, un outil, une raison et un plan B C) Cinq outils identiques D) Un abonnement — **Réponse : B**
  2. Quelle preuve montre qu'un choix a été testé ? — A) Le nombre de téléchargements B) Un avis lu en ligne C) La même consigne essayée dans plusieurs assistants, avec la grille remplie D) Le conseil d'un ami — **Réponse : C**
  3. Une source de votre dossier est un article ancien. Que faites-vous ? — A) Vous la gardez B) Vous la remplacez par la page officielle, avec son lien et sa date C) Vous la supprimez sans rien dire D) Vous la traduisez — **Réponse : B**
  4. Quelle règle de données est correcte ? — A) Aucun nom, numéro ni photo de client dans un assistant B) Les numéros, mais pas les noms C) Les photos, mais pas les noms D) Tout, si le compte est payant — **Réponse : A**
  5. Un dossier liste vingt applications sans test ni plan B. Est-il recevable ? — A) Oui, il est complet B) Oui, s'il est joli C) Oui, si les outils sont connus D) Non : une liste n'est pas un choix, il revient pour test, raison et plan B — **Réponse : D**
- **Marques citées** : Gemini, NotebookLM, Google, Google Docs (Google) ; ChatGPT (OpenAI) ; Claude (Anthropic) ; Copilot (Microsoft) ; Perplexity.

#### Script v1 (à valider par l'owner)

Durée estimée : 4:00 (dont 3 s de mention légale, Partie 1) · Mots de voix off : 368

**Scène 1 — B1 Accroche · 0:00–0:09 · E**
- Visuel : la boîte à outils complète, cinq compartiments garnis ; elle s'ouvre sur Hadiza et Ibrahim devant l'atelier, chacun tenant sa fiche.
- Écran : « Hadiza et Ibrahim · leur boîte à outils IA »
- VO : « Leçon précédente : réglez votre assistant. Aujourd'hui, Hadiza et Ibrahim présentent leur boîte à outils. »

**Scène 2 — B1 Accroche · 0:09–0:18 · B**
- Visuel : carte promesse, texte révélé en deux temps.
- Écran : « À la fin de cette leçon, vous saurez construire et justifier votre boîte à outils IA. »
- VO : « À la fin de cette leçon, vous saurez construire et justifier votre boîte à outils IA. » *(promesse dite à 0:09)*

**Scène 3 — B2 Cadrage · 0:18–0:27 · B**
- Visuel : carte, surtitre « Le malentendu » ; une longue liste d'icônes d'applications défile, puis reçoit un point d'interrogation.
- Écran : « Le malentendu · Longue liste = bonne boîte ? »
- VO : « C'est le projet final du cours. Le malentendu : une longue liste d'outils fait une bonne boîte. »

**Scène 4 — B2 Cadrage · 0:27–0:43 · C**
- Visuel : deux fiches côte à côte. À gauche : liste d'applications sans raison ni plan B (croix). À droite : tableau « tâche · outil · raison · plan B » (coche).
- Écran : « Sans raison ni plan B ✗ · Tâche, outil, raison, plan B ✓ »
- VO : « On évalue le raisonnement : pour chaque tâche, un outil, une raison, un plan B. Peu d'outils bien choisis valent mieux qu'une longue liste. »

**Scène 5 — B3 Notion · 0:43–1:13 · A**
- Visuel : capture réelle du modèle de dossier dans l'outil de documents ; défilement lent ; un cadre se pose sur chacun des trois livrables, l'un après l'autre.
- Écran : « 1 Fiche · 2 Trois preuves · 3 Règle de données »
- VO : « Le dossier compte trois livrables. Un : la fiche d'une page. Cinq tâches réelles, avec pour chacune la famille, l'outil, la raison et le plan B. Deux : trois preuves. Un test à consigne égale, une source vérifiée, une capture de vos réglages. Trois : une règle de données, en une phrase. »

**Scène 6 — B3 Notion · 1:13–1:31 · B**
- Visuel : carte, surtitre « La règle de données » ; la phrase s'écrit lettre par lettre.
- Écran : « Ma règle : aucun nom, numéro ni photo de client »
- VO : « La règle de données tient en une phrase. Par exemple : aucun nom, aucun numéro, aucune photo de client dans un assistant. Vous l'écrivez, puis vous la respectez. »

**Scène 7 — B3 Notion · 1:31–2:08 · C**
- Visuel : grille des cinq critères ; chaque critère entre avec son pictogramme (cible, grille, lien, cadenas, deuxième outil) et une case à cocher.
- Écran : « Réel · Testé · Sourcé · Protégé · Plan B »
- VO : « Cinq critères comptent pour le certificat. Tâches réelles : celles de votre semaine. Choix testé : même consigne, même grille. Sources ouvertes : une date, un lien. Données protégées : réglages faits, rien de sensible. Plan B : un deuxième outil pour chaque tâche. Dit autrement : le certificat récompense votre méthode, pas vos applications. On vérifie chaque critère, un par un. »

**Scène 8 — B4 Application · 2:08–2:22 · A**
- Visuel : capture réelle de l'exemple de dossier ; la fiche de Hadiza ; un cadre sur les colonnes « tâche », « famille » et « outil ».
- Écran : « Cinq tâches · cinq familles · cinq outils »
- VO : « Voici la fiche de Hadiza. Cinq tâches de son atelier : annoncer, traduire, chercher, illustrer, résumer un document. Chacune a sa famille et son outil. »

**Scène 9 — B4 Application · 2:22–2:34 · A**
- Visuel : capture réelle : défilement vers les colonnes « raison » et « plan B » ; un cadre sur une ligne complète.
- Écran : « Raison : un test · Plan B : un deuxième outil »
- VO : « Colonne raison : chaque choix renvoie à un test. Colonne plan B : un deuxième outil, déjà essayé. Rien n'est choisi au hasard. »

**Scène 10 — B4 Application · 2:34–2:46 · A**
- Visuel : capture réelle : page des trois preuves ; la grille remplie, la source avec lien et date, la capture des réglages ; cadre sur chacune, l'une après l'autre.
- Écran : « Grille · source + lien + date · réglages »
- VO : « Puis les trois preuves. La grille remplie. Une source, avec son lien et sa date. La capture des réglages. »

**Scène 11 — B4 Application · 2:46–2:57 · A**
- Visuel : capture réelle : la dernière ligne du dossier, la règle de données, encadrée.
- Écran : « Ma règle : aucun nom, numéro ni photo de client »
- VO : « Et sa règle, en une phrase : aucun nom, numéro ni photo de client dans un assistant. »

**Scène 12 — B4 Application · 2:57–3:07 · A**
- Visuel : capture réelle : export du document en PDF, puis la page de dépôt du projet final ; coche.
- Écran : « Un seul PDF, déposé »
- VO : « Elle exporte le dossier en PDF et le dépose sur la page du projet. »

**Scène 13 — B5 Consolidation · 3:07–3:32 · B**
- Visuel : carte : une très longue liste d'applications, sans colonne « raison » ni « plan B ». Silence. Puis une croix sur les critères « testé » et « plan B » de la grille.
- Écran : « Vingt applications, sans test ni plan B ? »
- VO : « Un autre dossier liste vingt applications, sans test ni plan B. Recevable ? » *(silence, 3 s)* « Non. Une liste n'est pas un choix. Sans test, sans raison et sans plan B, le dossier revient. »

**Scène 14 — B6 Clôture · 3:32–3:39 · B (carte de rappel, panneau 1)**
- Visuel : carte de rappel, panneau 1 : la promesse ; la boîte à outils complète se referme.
- Écran : « À la fin de cette leçon, vous saurez construire et justifier votre boîte à outils IA. »
- VO : « Leurs boîtes sont prêtes : chaque outil est choisi, testé et réglé. »

**Scène 15 — B6 Clôture · 3:39–3:46 · B**
- Visuel : carte de dépôt : un pictogramme de fichier PDF entre dans une boîte « Projet final ».
- Écran : « Dépôt : un seul PDF, sur la page du projet final »
- VO : « Votre dépôt : un seul PDF, sur la page du projet final. »

**Scène 16 — B6 Clôture · 3:46–3:57 · B (carte de rappel)**
- Visuel : carte de rappel du cours, panneau 2 : quatre points, un par leçon, révélés au rythme de la voix.
- Écran : « 1. Tâche d'abord » « 2. Même test pour tous » « 3. Ouvrez la source » « 4. Protégez vos données »
- VO : « La tâche d'abord. Un même test. La source ouverte. Les données protégées. Construisez votre boîte à outils et déposez votre dossier. »

#### Captures à fournir par l'owner

| Scène | Outil · appareil | Gestes exacts | Texte exact à taper | Durée utile | À masquer |
|---|---|---|---|---|---|
| 5 | Outil de documents (Google Docs ou équivalent) · téléphone ou ordinateur | Ouvrir le modèle de dossier (voir 2.6) ; faire défiler lentement ses trois parties. | Aucun | 30 s | Compte, autres documents |
| 8–11 | Même outil | Ouvrir l'exemple de dossier rempli (cas fictif de Hadiza, avec les vrais résultats des tests des leçons 2 à 4) ; défiler page par page ; s'arrêter 3 s sur les colonnes « tâche · famille · outil », sur « raison » et « plan B », sur chaque preuve, puis sur la règle. | Aucun | 45 s | Compte ; tout nom réel, toute adresse, tout numéro |
| 12 | Même outil, puis plateforme Karatou Academy | Menu « Télécharger » ou « Exporter » → PDF ; ouvrir la page du projet final ; déposer le fichier. | Aucun | 12 s | Nom et adresse e-mail du compte |

#### Notes de script

- L'exemple de dossier est fictif quant aux personas, mais ses preuves doivent être réelles : la grille vient de la leçon 2, la source de la leçon 3, les réglages de la leçon 4. Ne jamais inventer une preuve.
- Scène 7 : les cinq critères doivent correspondre à la grille d'évaluation réellement utilisée pour le certificat ; l'aligner avant l'enregistrement. [à vérifier au moment de la production]
- Scène 12 : capturer la vraie page de dépôt du projet final. Si elle n'existe pas encore, montrer seulement l'export en PDF et dire : « Elle exporte le dossier en PDF, prêt à déposer. » [à vérifier au moment de la production]
- Le dossier ne doit contenir aucune donnée personnelle : pas de noms de clientes ou de clients, pas de numéros, pas de captures de conversations réelles non anonymisées.
- Termes : « livrable » est dit une fois et illustré par la liste ; « recevable » est glosé par la suite (« le dossier revient »).
- Adaptation EN : « boîte à outils » = *toolkit* ; « livrable » = *deliverable* ; « recevable » = *acceptable*.
- Adaptation HA / DJE : « certificat » et « projet final » : reprendre les termes de l'interface de la plateforme dans la langue, s'ils existent.

## 2.6 Captures et éléments à préparer

| Leçon | Élément | Comment l'obtenir | Qui |
|---|---|---|---|
| Toutes | Téléphone Android et comptes de tournage (Gemini, ChatGPT, Claude, Copilot, Perplexity, NotebookLM), versions gratuites, interface en français, mode clair, sans historique | Créer les comptes ; vérifier que chaque outil est disponible au Niger et en français ; remplacer tout outil indisponible | Owner |
| Toutes | État réel des versions gratuites le jour du tournage (fonctions citées dans les scripts) | Vérifier dans chaque application ; retirer des scripts toute fonction qui ne serait plus exacte | Owner, puis Claude pour la mise à jour des scripts |
| Toutes | Illustrations des personas (Ibrahim, Hadiza), boîte à outils, grille de test, balance, cadenas | Produites en motion selon 2.4 | Claude |
| 1 | PDF de cours de démonstration (support public ou document Karatou, sans donnée personnelle, au moins un chapitre 2) | Choisir ou préparer le document ; vérifier qu'on peut le montrer | Owner |
| 1 | Écran d'accueil avec les cinq applications d'IA | Installer les cinq applications ; capture immobile | Owner |
| 2 | Informations de la consigne de démo (atelier, horaires, date de commande) | Reprendre celles de la fiche ; aucune donnée réelle de client | Owner |
| 2 | Relecture des quatre versions haoussa par un locuteur | Un locuteur consentant relit les quatre réponses pour le critère « langue » ; aucun nom affiché | Owner |
| 3 | Un programme de bourse réel, en cours, ouvert aux étudiants nigériens, avec une page officielle datée | Choisir le programme et noter la page officielle ; vérifier la date limite | Owner |
| 4 | Conversations de test fictives dans l'historique (titres fictifs, crochets à la place des noms) | Créer trois conversations de test sans donnée réelle | Owner |
| 4 | Libellés exacts des réglages de données, de la conversation temporaire et de la suppression dans l'assistant retenu | Relever les libellés à l'écran ; vérifier les valeurs par défaut | Owner |
| 5 | Modèle de dossier (trois parties) et exemple rempli | Rédigés à partir des fiches des leçons 1 à 4 ; mis en page dans l'outil de documents ; preuves réelles issues des captures des leçons 2 à 4 | Claude (rédaction), Owner (mise en page et capture) |
| 5 | Page de dépôt du projet final et grille d'évaluation du certificat | Capturer la page réelle ; obtenir la grille utilisée par la plateforme | Owner |
