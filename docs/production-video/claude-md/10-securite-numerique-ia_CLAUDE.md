# CLAUDE.md — Karatou Academy · Production vidéo
# Cours 10 — Arnaques, deepfakes et sécurité numérique

> **Pour l'owner — mode d'emploi**
> 1. Créez un dossier vide sur votre ordinateur, par exemple `karatou-securite-numerique-ia`.
> 2. Copiez-y ce fichier et renommez-le exactement `CLAUDE.md`.
> 3. Ouvrez Claude Code dans ce dossier (dans un terminal : `cd karatou-securite-numerique-ia` puis `claude`).
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
livraison/securite-numerique-ia/<id>/      fichiers livrés · livraison/securite-numerique-ia/INTEGRATION.md
```

`<id>` est l'identifiant de la leçon (`sn1`, `sn2`…). Langues : `fr`, `en`, `ha`, `dje`.

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

### 9.2 Nommage et contenu de `livraison/securite-numerique-ia/<id>/`

`securite-numerique-ia_<id>_<langue>_v<n>.mp4` · `…-360.mp4` · `….srt` · `….vtt` · `…_cover.jpg` (1920 × 1080, qualité 85,
première image stable de B1) · `…_transcript.md` (un titre par temps, texte dit + actions à l'écran entre
crochets) · `RECETTE.md`.

### 9.3 Mise en ligne

Chaîne YouTube **Karatou Academy**, vidéos **non répertoriées**, une vidéo par langue, sous-titres `.srt` ajoutés
comme piste. Titre : « Karatou Academy — Arnaques, deepfakes et sécurité numérique — Leçon N : <titre> (<LANGUE>) ». Le site lit des **URL
d'intégration** : `https://www.youtube.com/embed/<ID>` (jamais `watch?v=` ni `youtu.be/`). Teste chaque URL dans un
navigateur avant de la consigner.

### 9.4 Intégration au site — `livraison/securite-numerique-ia/INTEGRATION.md`

Le site lit, pour chaque leçon, un champ `video: { fr, en, ha }` dans les fichiers TypeScript du dépôt
`karatou-academy-app` (registre `authoredLessons`). Chaque leçon y a aussi un texte (objectif, quatre sections,
exemple, exercice, quiz de cinq questions, réflexion, glossaire), rédigé par l'équipe avec le skill
`karatou-course-creator`, et des lignes Supabase (module, leçons) pour la progression et les certificats.

Ton rôle : tenir `INTEGRATION.md` à jour, leçon par leçon : module `securite-numerique-ia`, id, titre, promesse (objectif), cas
réel (exemple), exercice (titre et étapes), carte de rappel, quiz, marques citées, URL FR / EN / HA, et URL DJE
« en attente ». Ce fichier est remis à l'équipe technique ; tu ne modifies pas le dépôt du site.

### 9.5 Corrections après publication

Une URL publiée est figée. Pour corriger : nouvelle version `v2` → mise en ligne → nouvelle URL testée →
`INTEGRATION.md` mis à jour → l'équipe technique remplace l'URL → l'ancienne vidéo est rendue privée, jamais
supprimée. Consigne chaque version dans le journal de `PROGRESS.md`.

## 10. `PROGRESS.md` — modèle

```markdown
# PROGRESS — Cours 10 · Arnaques, deepfakes et sécurité numérique
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
| Numéro | 10 |
| Titre | Arnaques, deepfakes et sécurité numérique |
| Format | Motion graphics + captures d'écran, voix off (voix clonée de l'owner) |
| Owner / voix | à désigner — nom complet et titre exact demandés au premier lancement |
| Rubrique | Culture numérique |
| Public | Grand public : étudiants, commerçants, agents d'ONG, fonctionnaires, familles ; sur téléphone, en 3G |
| Slug du module (provisoire) | `securite-numerique-ia` |
| Préfixe des leçons | `sn` |
| Nombre de vidéos | 5 (dont la dernière = projet final certifiant) |
| Durée par vidéo | 3–5 min (cible 4:00) |
| Langues | FR (référence) · EN · HA · DJE |
| Prérequis | Savoir envoyer un SMS et un message WhatsApp. Aucun prérequis technique. |
| Promesse du cours | « Vous saurez reconnaître les arnaques dopées à l'IA, vérifier un contenu douteux, verrouiller vos comptes et agir vite si l'on vous piège. » |
| Positionnement | Cours grand public, partageable sur WhatsApp. Il protège sans faire peur : trois réflexes (s'arrêter, vérifier par un autre canal, ne jamais donner un code) plutôt qu'un catalogue de menaces. Il ne montre aucune technique utilisable pour frauder. Pour aller plus loin : module `intelligence-artificielle` (leçon c6, éthique et biais) et module `introduction-claude-ai` (leçon cl5, limites, vérification, confidentialité). |
| Fil rouge | Aïcha, commerçante de pagnes au marché de Niamey ; son fils Moussa, étudiant à Zinder ; sa tante Hadiza, tailleuse à Maradi ; sa voisine d'étal Rahila. Tous fictifs. |
| Marques citées | WhatsApp, Meta, Gemini, Google, Google Lens, Google Docs, Claude, Anthropic, ChatGPT, OpenAI |

## 2.2 Ce que l'apprenant saura faire

- Reconnaître le scénario commun des arnaques dopées à l'IA (urgence, secret, argent) et s'arrêter avant de payer.
- Vérifier l'identité d'un proche par un second canal (rappel au numéro enregistré, mot de code familial).
- Examiner une image, une vidéo ou un audio douteux, puis conclure « vrai », « faux » ou « incertain » en donnant ses raisons.
- Trier un SMS, un message WhatsApp, un e-mail ou une demande « mobile money » et ne jamais donner un code ou un PIN.
- Activer la double vérification (e-mail, réseaux sociaux, WhatsApp) et contrôler les appareils connectés à WhatsApp.
- Appliquer les cinq gestes si l'on est piégé, et rédiger un plan de sécurité familial d'une page.

## 2.3 Plan du cours

| Leçon | Id | Titre | Promesse (objectif) | Cas réel (B1) | Démo (B4) | Durée cible |
|---|---|---|---|---|---|---|
| 1 | `sn1` | Les nouvelles arnaques dopées à l'IA | « À la fin de cette leçon, vous saurez reconnaître une arnaque dopée à l'IA. » | Aïcha reçoit un vocal à la voix de son fils Moussa : accident, argent, secret (cas fictif) | Ne pas répondre, rappeler Moussa depuis le répertoire, bloquer et signaler l'inconnu (WhatsApp) | 4:00 |
| 2 | `sn2` | Reconnaître et vérifier un deepfake | « À la fin de cette leçon, vous saurez vérifier un contenu douteux. » | Moussa reçoit dans un groupe une vidéo d'un faux directeur d'ONG qui promet une aide | Vérifier une image : outil de vérification de Gemini, puis recherche de la source | 4:00 |
| 3 | `sn3` | Faux messages : SMS, WhatsApp, e-mail, mobile money | « À la fin de cette leçon, vous saurez repérer un faux message. » | Hadiza reçoit un SMS « compte bloqué », puis un appel qui réclame un code | Lire sans cliquer, refuser le code, vérifier par le canal officiel, bloquer l'expéditeur | 4:00 |
| 4 | `sn4` | Verrouiller ses comptes, réagir si l'on est piégé | « À la fin de cette leçon, vous saurez verrouiller vos comptes et réagir en cas de piège. » | Le compte WhatsApp de Rahila est piraté ; Aïcha verrouille le sien | WhatsApp : validation en deux étapes, e-mail de secours, appareils connectés | 4:00 |
| 5 | `sn5` | Projet final : votre plan de sécurité familial | « À la fin de cette leçon, vous saurez déposer votre plan de sécurité familial. » | Un dimanche, Aïcha réunit sa famille pour tout mettre sur une page | Le plan d'Aïcha, bloc par bloc, de bout en bout | 4:00 |

## 2.4 Direction artistique du cours

- **Motif récurrent : « la porte et ses verrous ».** Une porte de concession (aplat, vue de face) apparaît sur chaque carte de titre ; chaque leçon ferme un verrou de plus (voix, contenu, message, compte, plan). À la leçon 5, les cinq verrous sont fermés. Le motif ne porte jamais d'information seul : chaque verrou est numéroté.
- **Personnages (type E).** Illustrations à plat, formes simples, aplats de la palette Karatou, visages sans traits réalistes (ovale, coiffe ou foulard, pas d'yeux détaillés). Aucun photoréalisme généré, aucune ressemblance avec une personne réelle. Un personnage = une couleur de vêtement constante d'une leçon à l'autre (Aïcha, Moussa, Hadiza, Rahila).
- **Contenus truqués.** On ne fabrique jamais le deepfake d'une personne réelle, même pour illustrer. Les exemples visuels sont des images de lieux ou de silhouettes fictives. Aucun vrai numéro, aucun vrai nom, aucun vrai logo d'opérateur à l'écran : les captures montrent des numéros masqués (« +227 •• •• •• •• ») et le nom « Opérateur » générique.
- **Trois schémas types réutilisés (type C).**
  1. « Stop · Rappelez · Mot de code » : trois pastilles reliées par des flèches (leçons 1 et 3).
  2. Anatomie d'un message : un message fictif, quatre repères numérotés (urgence, menace ou gain, lien ou numéro inconnu, demande de code) (leçons 1 et 3).
  3. Le trajet d'un code : téléphone, SMS, autre personne, avec une croix à l'endroit où il ne doit jamais aller (leçons 3 et 4).
- **Iconographie.** Triangle avec point d'exclamation (alerte), coche (validé), croix (erreur), cadenas (verrou), flèche de retour (rappeler). Toujours doublée d'un mot ou d'une forme, jamais de couleur seule.
- **Fixe d'une leçon à l'autre.** La porte, la couleur par personnage, la carte de rappel à trois points, le cadre rouge-forme (cadre + croix) pour ce qu'il ne faut pas faire et vert-forme (cadre + coche) pour le bon geste.
- **Change d'une leçon à l'autre.** Le verrou allumé sur la porte, le lieu (Niamey, Zinder, Maradi), l'outil à l'écran.
- **Musique.** Aucune sous la voix. Un court habillage sonore (un « clic » de verrou) sur les cartes de titre et la carte de rappel uniquement.

## 2.5 Les leçons

### Leçon 1 — Les nouvelles arnaques dopées à l'IA (`sn1`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez reconnaître une arnaque dopée à l'IA. »
- **Cas réel (B1 → B6)** : Aïcha, commerçante de pagnes au marché de Niamey, reçoit un vocal d'un numéro inconnu avec la voix de son fils Moussa, étudiant à Zinder : accident, nouveau numéro, 150 000 FCFA à envoyer par mobile money (cas fictif), « ne dis rien à papa ». Elle ne répond pas, rappelle Moussa depuis son répertoire : il est en cours, tout va bien. B6 : elle n'a rien envoyé ; la somme de ce cas fictif est restée dans sa caisse.
- **Unités de notion (B3)** : 1. Quatre visages, un même scénario — voix clonée d'un proche, faux recruteur, faux placement, faux service client, tous pour vous faire payer vite · 2. Urgence, secret, argent — trois signaux qui, ensemble, sont une alarme · 3. Raccrochez, rappelez, mot de code — la parade en trois gestes.
- **Démo (B4)** : WhatsApp sur téléphone, cas d'Aïcha. 1. Ne pas répondre au numéro inconnu. 2. Ouvrir le répertoire, choisir le contact enregistré « Moussa (test) », l'appeler. 3. Le contact décroche : tout va bien. 4. Revenir à la conversation inconnue, menu, bloquer puis signaler. 5. Prévenir la famille avec un message rédigé grâce à la consigne (scène G). Résultat à l'écran : le contact confirme, le numéro inconnu est bloqué.
- **Consolidation (B5)** : prédiction. « La voix est identique à celle de Moussa. Est-ce une preuve ? » (2–3 s de silence). Réponse : non, une voix se copie ; seul un rappel au numéro habituel, ou le mot de code, le prouve.
- **Consigne à copier** :

```text
Tu es un assistant qui m'aide à protéger ma famille contre les arnaques par message et par appel.
Rédige un message WhatsApp court et chaleureux, en français simple, pour [ma famille : par exemple « mes enfants et mes parents »].
Le message explique trois choses : 1. si quelqu'un demande de l'argent en urgence, même avec la voix d'un proche, on ne paie pas ; 2. on raccroche et on rappelle le numéro enregistré dans le répertoire ; 3. on demande le mot de code familial, que je donnerai de vive voix.
N'écris aucun nom, aucun numéro et aucun mot de code dans le message.
```

- **Exercice** : « Fixez votre mot de code familial » — 1. Réunissez deux ou trois proches (ou appelez-les) et choisissez ensemble un mot ou une courte phrase que personne ne peut deviner : ni un prénom, ni une date, rien de publié en ligne. 2. Convenez de la règle : toute demande d'argent par message ou par appel, même avec une voix connue, exige ce mot. 3. Ne l'écrivez nulle part ; notez seulement qui le connaît, et passez un appel de test avec l'un d'eux.
- **Carte de rappel** : 1. Urgence, secret, argent : arrêtez-vous. 2. Raccrochez, puis rappelez au numéro habituel. 3. Un mot de code, connu de la famille seule.
- **Quiz** :
  1. Un vocal avec la voix de votre fils réclame de l'argent, depuis un numéro inconnu. Premier réflexe ? — A) Envoyer une petite somme pour tester B) Répondre vite pour le rassurer C) Ne rien envoyer et le rappeler sur son numéro enregistré D) Transférer le vocal à toute la famille — **Réponse : C**
  2. Quels trois signaux, ensemble, doivent vous arrêter ? — A) Urgence, secret, argent B) Politesse, humour, long message C) Photo, lien, émoji D) Nuit, week-end, numéro étranger — **Réponse : A**
  3. La voix est identique à celle de votre proche. Que prouve cela ? — A) Que c'est bien lui B) Rien : une voix peut être copiée C) Que l'appel vient de la famille D) Que le numéro est fiable — **Réponse : B**
  4. Pour vérifier, quel numéro appelez-vous ? — A) Celui du message reçu B) Celui que donne l'appelant C) Celui d'un site trouvé en ligne D) Celui enregistré dans votre répertoire avant l'appel — **Réponse : D**
  5. Quel est un bon mot de code familial ? — A) Le nom de la mère B) Une date de naissance C) Un mot choisi ensemble, qui ne s'écrit nulle part en ligne D) Le prénom d'un enfant — **Réponse : C**
- **Marques citées** : WhatsApp (Meta) ; Claude (Anthropic), Gemini (Google), ChatGPT (OpenAI), nommés comme exemples d'assistants d'IA.

#### Script v1 (à valider par l'owner)

Durée estimée : 4:00 · Mots de voix off : 358 *(340–460)*

**Scène 1 — B1 Accroche · 0:00–0:04 · E**
- Visuel : illustration à plat : Aïcha à son étal de pagnes, marché de Niamey ; son téléphone s'allume sur l'étal. Fondu d'entrée simple.
- Écran : « Niamey · cas fictif »
- VO : « Aïcha reçoit un vocal de son fils. »

**Scène 2 — B1 Accroche · 0:04–0:14 · B**
- Visuel : carte de promesse, texte posé d'un bloc, sans effet.
- Écran : « À la fin de cette leçon, vous saurez reconnaître une arnaque dopée à l'IA. »
- VO : « À la fin de cette leçon, vous saurez reconnaître une arnaque dopée à l'IA. » *(promesse commencée à 0:04, achevée vers 0:11)*

**Scène 3 — B1 Accroche · 0:14–0:20 · E**
- Visuel : même illustration, le téléphone au premier plan, une bulle de vocal sans texte.
- Écran : « Un vocal. La voix de Moussa. »
- VO : « La voix parle d'accident et d'argent. Mais ce n'est pas Moussa. »

**Scène 4 — B2 Cadrage · 0:20–0:46 · A**
- Visuel : capture réelle de la conversation WhatsApp avec le numéro inconnu (vocal reçu, numéro masqué). Cadre sur le numéro non enregistré, puis cadre sur le vocal. Mention « Cas fictif » en coin.
- Écran : « Numéro inconnu · vocal · "J'ai changé de numéro" »
- VO : « Vous pensez peut-être : je reconnaîtrais la voix de mon fils. Pourtant, une voix peut être copiée par l'intelligence artificielle. Un court extrait publié en ligne peut suffire. C'est cela, une arnaque dopée à l'IA : la même ruse qu'avant, avec une voix imitée. »

**Scène 5 — B3 Notion · 0:46–0:53 · B (carte unité 1)**
- Visuel : carte, verrou numéro un allumé sur la porte.
- Écran : « 1 · Quatre visages, un même scénario »
- VO : « Premier point : quatre visages, un même scénario. »

**Scène 6 — B3 Notion · 0:53–1:14 · C**
- Visuel : schéma animé : quatre pastilles apparaissent une à une (voix d'un proche, recruteur, placement, service client), puis convergent vers une flèche « Payez, vite ».
- Écran : « Voix clonée · Faux recruteur · Faux placement · Faux service client »
- VO : « La voix clonée d'un proche. Le faux recruteur, qui réclame des frais. Le faux placement, qui promet des gains faciles. Le faux service client. Quatre visages, un seul but : vous faire payer vite. »

**Scène 7 — B3 Notion · 1:14–1:21 · B (carte unité 2)**
- Visuel : carte, verrou numéro un toujours allumé, repère « 2 ».
- Écran : « 2 · Urgence, secret, argent »
- VO : « Deuxième point : urgence, secret, argent. »

**Scène 8 — B3 Notion · 1:21–1:43 · A**
- Visuel : capture réelle du message texte reçu après le vocal. Trois surlignages successifs, chacun ≥ 2,5 s, chacun doublé d'un cadre : « tout de suite », « ne dis rien à papa », « Envoie 150 000 FCFA ». Pas de couleur seule.
- Écran : « Urgence · Secret · Argent »
- VO : « Relisez le message. Il presse : tout de suite. Il isole : ne dis rien à papa. Il réclame de l'argent. Ces trois signaux ensemble sont une alarme. Chacun seul peut être innocent. Les trois ensemble : arrêtez-vous. »

**Scène 9 — B3 Notion · 1:43–1:50 · B (carte unité 3)**
- Visuel : carte, repère « 3 », cadenas.
- Écran : « 3 · Raccrochez, rappelez, mot de code »
- VO : « Troisième point : la parade, en trois gestes. »

**Scène 10 — B3 Notion · 1:50–2:10 · C**
- Visuel : schéma « Stop · Rappelez · Mot de code » : trois pastilles reliées ; sous « Rappelez », une icône de répertoire ; sous « Mot de code », une bouche (dit à voix haute) et un crayon barré.
- Écran : « 1 Stop · 2 Rappelez · 3 Mot de code »
- VO : « Un : ne répondez pas, ou raccrochez. Deux : rappelez le numéro enregistré dans votre répertoire. Trois : demandez le mot de code, connu de la famille seule. Un mot choisi ensemble, jamais écrit en ligne. »

**Scène 11 — B4 Application · 2:10–2:34 · A**
- Visuel : enregistrement d'écran : retour à la liste des discussions, ouverture du répertoire, contact « Moussa (test) », appui sur l'icône d'appel, appel établi. Annotation unique : cadre sur « contact enregistré », tenue ≥ 2,5 s.
- Écran : « Appel au contact enregistré, jamais au numéro du message »
- VO : « Reprenons le cas d'Aïcha. Elle ne répond pas au numéro inconnu. Elle ouvre son répertoire, choisit Moussa, et l'appelle. Moussa décroche. Il est en cours, à Zinder. Tout va bien. »

**Scène 12 — B4 Application · 2:34–2:57 · A**
- Visuel : enregistrement d'écran : conversation du numéro inconnu, menu, « Plus », « Bloquer » puis « Signaler ». Coche verte-forme sur « Bloqué ».
- Écran : « Bloquer, puis signaler le numéro inconnu »
- VO : « Ensuite, elle ne discute pas avec l'inconnu. Elle ouvre le menu de la conversation. Elle choisit bloquer, puis signaler. Enfin, elle prévient sa famille : un faux vocal circule, et ce n'était pas Moussa. »

**Scène 13 — B4 Application · 2:57–3:12 · G**
- Visuel : carte de consigne sur fond clair : la consigne exacte, en texte, lisible, avec les [crochets] en gras.
- Écran : « Consigne : message d'alerte pour la famille » (la consigne complète est affichée en dessous)
- VO : « Une consigne est la demande que vous écrivez à un assistant d'IA, comme Claude, Gemini ou ChatGPT. Celle-ci rédige le message pour la famille. Recopiez-la depuis la fiche. »

**Scène 14 — B5 Consolidation · 3:12–3:40 · B**
- Visuel : carte question ; après trois secondes de silence, une croix apparaît sur « preuve », puis la réponse s'affiche.
- Écran : « La voix est identique. Est-ce une preuve ? » puis « Non. Seul un second canal prouve. »
- VO : « Question. La voix est identique à celle de Moussa. Est-ce une preuve ? [silence 3 s] Non. Une voix se copie. Seul un rappel au numéro habituel, ou le mot de code, le prouve. »

**Scène 15 — B6 Clôture · 3:40–3:48 · B**
- Visuel : la promesse affichée mot pour mot, coche verte-forme qui se pose à côté ; le verrou numéro un se ferme.
- Écran : « À la fin de cette leçon, vous saurez reconnaître une arnaque dopée à l'IA. »
- VO : « Aïcha n'a rien envoyé. Les cent cinquante mille francs de ce cas fictif sont restés dans sa caisse. »

**Scène 16 — B6 Clôture · 3:48–4:00 · B (carte de rappel)**
- Visuel : carte de rappel, points révélés au rythme de la voix.
- Écran : « 1. Urgence, secret, argent : arrêtez-vous. » « 2. Raccrochez, puis rappelez au numéro habituel. » « 3. Un mot de code, connu de la famille seule. »
- VO : « Urgence, secret, argent : arrêtez-vous. Raccrochez, puis rappelez au numéro habituel. Un mot de code, connu de la famille seule. Fixez votre mot de code familial. »

#### Captures à fournir par l'owner

Toutes les captures sont sur **téléphone**, WhatsApp en français, **compte et numéros de test** (jamais le compte personnel ni de vrais contacts).

1. **Scènes 4 et 8 — le vocal et le message** (durée utile : 15 s). Depuis un second numéro non enregistré dans le répertoire du téléphone de test, envoyer : (a) un message vocal de quelques secondes, dit par l'owner avec sa propre voix (le son n'est pas diffusé dans la vidéo), puis (b) ce texte exact : « Maman, c'est Moussa. J'ai eu un accident et j'ai changé de numéro. Envoie 150 000 FCFA tout de suite par mobile money. Ne dis rien à papa. » Ouvrir la conversation, laisser l'écran fixe 8 s, puis défiler lentement. **Masquer** : les chiffres du numéro (garder « +227 »), la photo de profil, tous les autres contacts.
2. **Scène 11 — l'appel au contact enregistré** (durée utile : 10 s). Enregistrer dans le répertoire un contact nommé « Moussa (test) » (numéro de l'owner ou d'un collègue). Enregistrement d'écran : quitter la conversation inconnue, ouvrir le répertoire, toucher « Moussa (test) », toucher l'icône d'appel. **Masquer** : le numéro du contact.
3. **Scène 12 — bloquer et signaler** (durée utile : 12 s). Dans la conversation du numéro inconnu : toucher le menu (trois points), « Plus » puis « Signaler », puis « Bloquer ». S'arrêter sur le message de confirmation. Les libellés exacts des menus varient selon la version : [à vérifier au moment de la production].

#### Notes de script

- **Prononciation** : « WhatsApp » se dit « ouatsap ». « FCFA » se dit « francs CFA ». « IA » se dit « i-a ».
- **Termes à gloser** : « dopée à l'IA » (scène 4 : même ruse qu'avant, avec une voix imitée) ; « voix clonée » (une voix copiée par l'IA) ; « mobile money » (l'argent par téléphone, glosé en leçon 3) ; « consigne » (scène 13, dit une fois avec glose, puis employé seul).
- **Pièges** : ne jamais faire entendre une voix clonée réelle ; ne jamais afficher un vrai numéro ni un vrai nom ; ne pas donner de durée chiffrée (« quelques secondes d'audio ») sur la quantité de voix nécessaire pour cloner : formulation prudente conservée.
- **À vérifier au moment de la production** : libellés des menus WhatsApp (Plus, Signaler, Bloquer) ; la fonction de signalement d'un numéro inconnu peut apparaître dès l'ouverture de la conversation selon la version.
- **Adaptation EN** : « arnaque au faux proche » = « family emergency scam ». **HA / DJE** : « mobile money » et « mot de code » : employer le terme courant du quotidien, à fixer avec le traducteur. « Faux placement » : préférer un exemple local de « doublement d'argent » plutôt qu'une traduction mot à mot. L'enchaînement « urgence, secret, argent » doit garder son rythme en trois mots.

### Leçon 2 — Reconnaître et vérifier un deepfake (`sn2`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez vérifier un contenu douteux. »
- **Cas réel (B1 → B6)** : Moussa, étudiant à Zinder, reçoit dans un groupe WhatsApp d'étudiants une vidéo d'un « directeur d'ONG » (personnage fictif, jamais une personne réelle) qui annonce une aide en argent pour les étudiants, avec un lien et de petits frais d'inscription. Plusieurs étudiants la partagent. Moussa vérifie l'image, ne trouve aucune source fiable, ne partage pas, et écrit dans le groupe ce qu'il a vérifié. Rappel de la leçon 1 : une voix se copie, une vidéo aussi.
- **Unités de notion (B3)** : 1. Les indices aident, ils ne prouvent rien — mains, textes, ombres, bouche et voix : des signaux, jamais un verdict · 2. Trois vérifications avant de croire — qui publie en premier, des médias fiables en parlent-ils, où l'image est-elle apparue avant · 3. Un outil donne un indice, pas un verdict — une marque trouvée informe, rien trouvé ne prouve rien.
- **Démo (B4)** : application Gemini sur téléphone ou ordinateur, avec une image créée pour le cours. 1. Enregistrer l'image « tirée de la vidéo ». 2. Ouvrir Gemini, déposer l'image. 3. Demander : « Cette image a-t-elle été créée avec l'IA de Google ? » 4. Lire la réponse (marque détectée). 5. Chercher la source, ne trouver aucun média fiable, conclure « faux » et noter les raisons. Résultat attendu à l'écran : la réponse de l'outil, puis la conclusion écrite. [à vérifier au moment de la production : formulation exacte de la réponse, et disponibilité de la vérification pour la vidéo et l'audio selon l'application et le pays]
- **Consolidation (B5)** : prédiction. « Gemini ne trouve aucune marque. L'image est-elle vraie ? » (2–3 s de silence). Réponse : pas forcément ; l'outil ne reconnaît que certaines IA ; on reprend les trois vérifications.
- **Consigne à copier** :

```text
Je veux vérifier un contenu reçu sur WhatsApp. Voici ce qu'on y voit ou entend : [décrire en deux phrases, sans nom ni numéro de personne réelle].
Il m'a été envoyé par [un groupe / un inconnu / un ami], avec ce message : [recopier le message en remplaçant noms, numéros et liens par XXX].
Donne-moi une liste de vérifications à faire moi-même, dans cet ordre : source d'origine, reprise par des médias fiables, recherche par image, indices dans le contenu.
Ne conclus pas à ma place : dis-moi ce qui resterait incertain.
```

- **Exercice** : « Vérifiez avant de partager » — 1. Choisissez un contenu viral reçu cette semaine (image, vidéo ou audio). 2. Déroulez les trois vérifications et notez ce que vous trouvez à chaque étape. 3. Concluez par « vrai », « faux » ou « incertain », avec vos raisons ; ne partagez que ce qui est vrai et sourcé.
- **Carte de rappel** : 1. Les indices aident, ils ne prouvent rien. 2. Cherchez la source avant de croire. 3. Un outil muet ne prouve pas la vérité.
- **Quiz** :
  1. Des mains déformées sur une image : que prouve cet indice ? — A) Que l'image est truquée, à coup sûr B) Que l'image est authentique C) Rien à lui seul : c'est un indice parmi d'autres D) Que l'image est ancienne — **Réponse : C**
  2. Avant de partager une vidéo choquante, que vérifiez-vous en premier ? — A) Le nombre de partages B) Qui l'a publiée en premier C) La qualité de l'image D) La durée de la vidéo — **Réponse : B**
  3. À quoi sert une recherche par image ? — A) À voir où l'image est apparue avant B) À l'agrandir C) À la retoucher D) À la rendre plus nette — **Réponse : A**
  4. Un outil ne trouve aucune marque d'IA. Que conclure ? — A) Le contenu est vrai B) Le contenu est faux C) L'outil est en panne D) On ne sait pas : il faut poursuivre les vérifications — **Réponse : D**
  5. La source d'une vidéo virale reste introuvable. Que faites-vous ? — A) Je la partage avec un avertissement B) Je ne la partage pas C) Je la partage aux proches seulement D) Je la partage après dix partages — **Réponse : B**
- **Marques citées** : WhatsApp (Meta) ; Gemini, Google Lens (Google) ; « Nano Banana » (surnom de l'outil d'image de Gemini) si l'owner en parle à l'écran.

#### Script v1 (à valider par l'owner)

Durée estimée : 4:00 · Mots de voix off : 356 *(340–460)*

**Scène 1 — B1 Accroche · 0:00–0:04 · E**
- Visuel : illustration à plat : Moussa, étudiant à Zinder, regarde son téléphone ; une vignette de vidéo (silhouette fictive, sans visage) sur l'écran.
- Écran : « Zinder · groupe d'étudiants · cas fictif »
- VO : « Dans un groupe, Moussa reçoit une vidéo. »

**Scène 2 — B1 Accroche · 0:04–0:14 · B**
- Visuel : carte de promesse, texte posé d'un bloc.
- Écran : « À la fin de cette leçon, vous saurez vérifier un contenu douteux. »
- VO : « À la fin de cette leçon, vous saurez vérifier un contenu douteux. » *(promesse commencée à 0:04, achevée vers 0:10)*

**Scène 3 — B1 Accroche · 0:14–0:20 · E**
- Visuel : même illustration ; le verrou numéro un de la porte (leçon 1) réapparaît, allumé, puis le verrou numéro deux clignote une fois.
- Écran : « Leçon 1 : une voix se copie »
- VO : « Leçon un : une voix se copie. Une vidéo aussi. Moussa le sait. »

**Scène 4 — B2 Cadrage · 0:20–0:46 · A**
- Visuel : capture réelle de l'application Gemini : l'image créée pour le cours (un marché à l'aube, silhouettes fictives) affichée en grand. Cadre sur l'image. Mention « Image créée pour ce cours » en coin.
- Écran : « Image créée avec l'IA · personnages fictifs »
- VO : « Beaucoup croient qu'un faux se voit toujours à l'œil nu. C'est faux. Voici une image créée avec l'IA pour ce cours. Elle semble ordinaire. On appelle cela un deepfake : un contenu fabriqué par l'IA pour imiter la réalité. »

**Scène 5 — B3 Notion · 0:46–0:53 · B (carte unité 1)**
- Visuel : carte, verrou numéro deux sur la porte.
- Écran : « 1 · Les indices aident, ils ne prouvent rien »
- VO : « Premier point : les indices aident, ils ne prouvent rien. »

**Scène 6 — B3 Notion · 0:53–1:14 · C**
- Visuel : schéma animé « anatomie » : une silhouette abstraite avec quatre repères numérotés qui s'allument un à un : mains et doigts, texte dans l'image, ombres, bouche et voix.
- Écran : « 1 Mains · 2 Textes · 3 Ombres · 4 Bouche et voix »
- VO : « Regardez les mains et les doigts. Lisez les textes dans l'image : les lettres sont parfois déformées. Observez les ombres. Dans une vidéo, la bouche suit-elle exactement la voix ? Dans un audio, la voix est-elle trop lisse, sans respiration ? »

**Scène 7 — B3 Notion · 1:14–1:21 · B (carte unité 2)**
- Visuel : carte, repère « 2 ».
- Écran : « 2 · Trois vérifications avant de croire »
- VO : « Deuxième point : trois vérifications avant de croire. »

**Scène 8 — B3 Notion · 1:21–1:43 · A**
- Visuel : capture réelle de Google Lens (recherche par image) sur une photo libre de droits : page de résultats « pages avec des images similaires ». Cadre sur les résultats, une seule annotation à la fois.
- Écran : « Qui publie ? · Qui en parle ? · Où est-elle apparue avant ? »
- VO : « Première question : qui a publié en premier ? Deuxième : des médias fiables en parlent-ils ? Troisième : où cette image est-elle apparue avant ? Une recherche par image répond à la troisième. Si la source reste introuvable, ne partagez pas. »

**Scène 9 — B3 Notion · 1:43–1:50 · B (carte unité 3)**
- Visuel : carte, repère « 3 ».
- Écran : « 3 · Un outil donne un indice, pas un verdict »
- VO : « Troisième point : un outil donne un indice, pas un verdict. »

**Scène 10 — B3 Notion · 1:50–2:10 · C**
- Visuel : schéma : une loupe cherche une marque invisible sur une image. Deux sorties : « Marque trouvée » (coche, flèche vers « vient de cette IA ») et « Rien trouvé » (point d'interrogation, flèche vers « on ne sait pas »).
- Écran : « Marque trouvée = vient de cette IA · Rien trouvé = on ne sait pas »
- VO : « Certains outils cherchent une marque invisible, laissée par l'IA qui a créé le contenu. Marque trouvée : il vient de cette IA. Rien trouvé : vous ne savez pas. Ils ne reconnaissent que certaines IA. »

**Scène 11 — B4 Application · 2:10–2:34 · A**
- Visuel : enregistrement d'écran : l'image est enregistrée, l'application Gemini s'ouvre, l'image est déposée, la question est tapée en entier (silence de démonstration pendant la frappe).
- Écran : « Cette image a-t-elle été créée avec l'IA de Google ? »
- VO : « Moussa enregistre l'image de la vidéo. Il ouvre l'application Gemini. Il dépose l'image. Puis il demande : cette image a-t-elle été créée avec l'IA de Google ? »

**Scène 12 — B4 Application · 2:34–2:57 · A**
- Visuel : la réponse s'affiche (marque détectée) ; cadre sur la réponse ; puis un bloc de notes « Source : introuvable · Médias fiables : aucun · Conclusion : faux » apparaît en surimpression.
- Écran : « Conclusion : faux — source introuvable, aucun média fiable »
- VO : « Gemini répond : une marque a été détectée. Moussa ne s'arrête pas là. Il cherche la source, ne trouve aucun média fiable, et conclut : faux. Il l'écrit dans ses notes, avec ses raisons. »

**Scène 13 — B4 Application · 2:57–3:12 · G**
- Visuel : carte de consigne sur fond clair, texte complet, [crochets] en gras.
- Écran : « Consigne : préparer ma vérification » (consigne complète dessous)
- VO : « Voici la consigne qui prépare votre vérification. Elle décrit le contenu sans nommer personne. Elle demande une liste de contrôles, pas un verdict. Recopiez-la depuis la fiche. »

**Scène 14 — B5 Consolidation · 3:12–3:40 · A**
- Visuel : capture réelle de la réponse de l'outil sur une photo ordinaire de l'owner (aucune marque détectée). Question en surimpression, trois secondes de silence, puis cadre + point d'interrogation, puis la réponse écrite.
- Écran : « Aucune marque détectée. L'image est-elle vraie ? » puis « Pas forcément. »
- VO : « Question. Gemini ne trouve aucune marque. L'image est-elle vraie ? [silence 3 s] Pas forcément. L'outil ne reconnaît que certaines IA. Il ne dit rien des autres. Reprenez les trois vérifications. »

**Scène 15 — B6 Clôture · 3:40–3:48 · B**
- Visuel : promesse affichée mot pour mot, coche verte-forme ; le verrou numéro deux se ferme.
- Écran : « À la fin de cette leçon, vous saurez vérifier un contenu douteux. »
- VO : « Moussa n'a pas partagé la vidéo. Il a écrit dans le groupe ce qu'il a vérifié, et comment. »

**Scène 16 — B6 Clôture · 3:48–4:00 · B (carte de rappel)**
- Visuel : carte de rappel, points révélés au rythme de la voix.
- Écran : « 1. Les indices aident, ils ne prouvent rien. » « 2. Cherchez la source avant de croire. » « 3. Un outil muet ne prouve pas la vérité. »
- VO : « Les indices aident, ils ne prouvent rien. Cherchez la source avant de croire. Un outil muet ne prouve pas la vérité. Vérifiez avant de partager. »

#### Captures à fournir par l'owner

1. **Scène 4 — l'image créée pour le cours** (durée utile : 8 s). Sur ordinateur ou téléphone, dans l'application Gemini, créer avec l'outil d'image une scène **sans personne réelle** : « Un marché de Niamey à l'aube, silhouettes lointaines, éclairage doux. » Enregistrer l'image. Capture d'écran de l'image affichée en grand. **Masquer** : nom du compte, adresse e-mail.
2. **Scènes 11 et 12 — la vérification** (durée utile : 25 s). Dans une nouvelle conversation Gemini : déposer l'image enregistrée, taper exactement : « Cette image a-t-elle été créée avec l'IA de Google ? », enregistrer l'écran jusqu'à la réponse. Si la réponse n'est pas « marque détectée », la signaler : la voix off de la scène 12 sera adaptée. [à vérifier au moment de la production]
3. **Scène 8 — recherche par image** (durée utile : 12 s). Sur téléphone, application Google, icône d'appareil photo (Google Lens) : choisir dans la galerie une photo libre de droits (par exemple une photo de Wikimedia Commons) et laisser la page de résultats s'afficher. Libellés exacts du menu : [à vérifier au moment de la production]. **Masquer** : historique, nom du compte.
4. **Scène 14 — aucune marque** (durée utile : 10 s). Même démarche avec une photo ordinaire prise par l'owner (un objet, un paysage, aucune personne identifiable). Capturer la réponse.

#### Notes de script

- **Prononciation** : « deepfake » se dit « dip-feïk » ; il est glosé une fois (scène 4), puis remplacé par « contenu truqué » si besoin. « Gemini » se dit « jé-mi-naï » en français courant. « Google Lens » se dit « gougueul lensse ».
- **Pièges** : ne jamais fabriquer ni montrer le deepfake d'une personne réelle ; le « directeur d'ONG » n'existe qu'en silhouette. Ne pas laisser entendre que l'outil de vérification de Gemini détecte tout : il ne reconnaît que les contenus marqués par certaines IA [à vérifier au moment de la production : périmètre actuel]. Ne donner aucune limite chiffrée (taille, durée de fichier).
- **Termes à gloser** : « deepfake » (scène 4), « marque invisible » (scène 10 : un signal caché laissé par l'IA qui a créé l'image).
- **Adaptation EN** : « deepfake » reste tel quel. **HA / DJE** : pas d'équivalent courant pour « deepfake » : utiliser une périphrase (« image ou voix fabriquée par ordinateur pour imiter le vrai »), à valider avec le traducteur. Les noms de lieux et de personnages restent inchangés.

### Leçon 3 — Faux messages : SMS, WhatsApp, e-mail, mobile money (`sn3`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez repérer un faux message. »
- **Cas réel (B1 → B6)** : Hadiza, tailleuse à Maradi, reçoit un SMS au nom de son opérateur : « Votre compte mobile money va être bloqué. » Puis un appel : un faux « conseiller » réclame le code qu'elle vient de recevoir par SMS. Elle refuse, raccroche, ne rappelle aucun numéro du message, vérifie son solde par le menu habituel et passe à l'agence. Son compte n'a jamais été bloqué : le message mentait. Rappel de la leçon 2 : chercher d'abord la source.
- **Unités de notion (B3)** : 1. Quatre signes d'un faux message — urgence, menace ou promesse de gain, lien ou numéro inconnu, demande d'information ou de code · 2. Un code ne se donne jamais — code WhatsApp à six chiffres, code secret mobile money, tout code reçu par SMS : personne d'honnête ne le demande, pas même le service client · 3. Le piège de l'argent envoyé par erreur — ne rien renvoyer, vérifier son solde soi-même.
- **Démo (B4)** : téléphone (Android), cas de Hadiza. 1. Lire le SMS sans toucher au lien. 2. Repérer les signes. 3. Ne pas rappeler le numéro du message ; refuser le code au téléphone. 4. Vérifier son solde par le menu habituel de l'opérateur (ou en agence). 5. Dans l'application de messages : ouvrir le SMS, menu, bloquer et signaler comme indésirable. Résultat à l'écran : le message est bloqué, la conversation reste pour preuve tant qu'on ne l'efface pas. [à vérifier au moment de la production : libellés de l'application de messages]
- **Consolidation (B5)** : prédiction. « Un ami écrit sur WhatsApp : j'ai envoyé un code par erreur, renvoie-le-moi. Que faites-vous ? » (silence). Réponse : jamais ; son compte est peut-être piraté, et ce code ouvre le vôtre ; appelez votre ami.
- **Consigne à copier** :

```text
Je viens de recevoir ce message par [SMS / WhatsApp / e-mail] : « [coller le texte en remplaçant noms, numéros et liens par XXX] ».
Liste les signes d'alerte que tu repères : urgence, menace ou promesse de gain, lien ou numéro inconnu, demande d'information ou de code.
Dis-moi ce que je dois vérifier moi-même par un autre canal (menu habituel de mon téléphone, agence de mon opérateur, appel à un numéro déjà enregistré).
Ne conclus pas « c'est sûr » ou « c'est faux » à ma place. Ne me demande aucun mot de passe ni aucun code.
```

- **Exercice** : « Triez trois messages suspects » — 1. Retrouvez trois messages reçus récemment (SMS, WhatsApp ou e-mail) qui demandent de l'argent, un code ou un clic. 2. Pour chacun, notez lesquels des quatre signes sont présents. 3. Bloquez l'expéditeur, gardez une capture si besoin, et montrez le message à un proche.
- **Carte de rappel** : 1. Urgence, lien, code : trois alarmes. 2. Un code ne se donne à personne. 3. Vérifiez par le canal officiel.
- **Quiz** :
  1. Lequel de ces éléments est un signe d'alerte ? — A) Un message bien écrit B) Un expéditeur qui vous salue C) Une demande urgente de code ou de clic D) Un message court — **Réponse : C**
  2. Un « conseiller » vous demande le code reçu par SMS pour « vérifier votre identité ». Que faites-vous ? — A) Je le donne, c'est le service client B) Je ne le donne jamais et je raccroche C) Je donne la moitié du code D) Je le donne s'il me rappelle — **Réponse : B**
  3. Quels codes ne se donnent jamais à personne ? — A) Le code WhatsApp à six chiffres, le code secret mobile money, tout code reçu par SMS B) Le code postal C) L'indicatif du pays D) Le code de la ville — **Réponse : A**
  4. Un inconnu dit avoir envoyé de l'argent par erreur et vous demande de le renvoyer. Que faites-vous ? — A) Je clique sur son lien pour voir B) Je renvoie la moitié C) Je renvoie tout de suite D) Je ne renvoie rien et je vérifie mon solde moi-même, par le menu habituel — **Réponse : D**
  5. Où vérifier si votre compte est vraiment bloqué ? — A) En rappelant le numéro du SMS B) Par le menu habituel de votre téléphone ou à l'agence de votre opérateur C) Dans le lien du message D) Auprès du « conseiller » qui vous appelle — **Réponse : B**
- **Marques citées** : WhatsApp (Meta).

#### Script v1 (à valider par l'owner)

Durée estimée : 4:00 · Mots de voix off : 356 *(340–460)*

**Scène 1 — B1 Accroche · 0:00–0:04 · E**
- Visuel : illustration à plat : Hadiza à sa machine à coudre, atelier de Maradi ; le téléphone vibre sur la table.
- Écran : « Maradi · cas fictif »
- VO : « Hadiza, tailleuse à Maradi, reçoit un SMS. »

**Scène 2 — B1 Accroche · 0:04–0:14 · B**
- Visuel : carte de promesse.
- Écran : « À la fin de cette leçon, vous saurez repérer un faux message. »
- VO : « À la fin de cette leçon, vous saurez repérer un faux message. » *(promesse commencée à 0:04, achevée vers 0:09)*

**Scène 3 — B1 Accroche · 0:14–0:20 · E**
- Visuel : même illustration ; le verrou numéro deux (leçon 2) allumé, le verrou numéro trois clignote.
- Écran : « Leçon 2 : chercher la source »
- VO : « Leçon deux : cherchez d'abord la source. Ici, la source, c'est l'opérateur. »

**Scène 4 — B2 Cadrage · 0:20–0:46 · A**
- Visuel : capture réelle du SMS fictif sur le téléphone de test : texte propre, sans faute, signé « Opérateur ». Cadre sur le texte, tenue ≥ 2,5 s ; mention « Cas fictif ».
- Écran : « Bien écrit, au nom de l'opérateur. Et pourtant. »
- VO : « Beaucoup croient qu'un faux message se reconnaît à ses fautes. Ce n'est plus fiable. Les outils d'IA écrivent un français propre, et dans plusieurs langues. Voici le message reçu par Hadiza : bien écrit, au nom de l'opérateur. Aucune faute. Pourtant, c'est un piège. »

**Scène 5 — B3 Notion · 0:46–0:53 · B (carte unité 1)**
- Visuel : carte, verrou numéro trois sur la porte.
- Écran : « 1 · Quatre signes d'un faux message »
- VO : « Premier point : quatre signes d'un faux message. »

**Scène 6 — B3 Notion · 0:53–1:14 · C**
- Visuel : schéma « anatomie d'un message » : le SMS fictif reprend à l'écran, quatre repères numérotés s'allument un à un, chacun avec une forme (triangle, éclair, lien barré, clé).
- Écran : « 1 Urgence · 2 Menace ou gain · 3 Lien ou numéro inconnu · 4 Demande de code »
- VO : « Un : l'urgence. Deux : la menace, ou la promesse d'un gain. Trois : un lien ou un numéro inconnu. Quatre : une demande d'information ou de code. Un seul signe suffit pour ralentir. »

**Scène 7 — B3 Notion · 1:14–1:21 · B (carte unité 2)**
- Visuel : carte, repère « 2 ».
- Écran : « 2 · Un code ne se donne jamais »
- VO : « Deuxième point : un code ne se donne jamais. »

**Scène 8 — B3 Notion · 1:21–1:43 · A**
- Visuel : capture réelle d'un SMS de test « Votre code est 000000 » (code fictif). Cadre + croix sur le code, tenue ≥ 2,5 s ; un cadenas se ferme à côté.
- Écran : « Ce code n'est pas à partager »
- VO : « Un code reçu par SMS prouve que c'est vous. Le donner, c'est donner la clé. Le code WhatsApp à six chiffres. Le code secret de votre mobile money, c'est-à-dire l'argent par téléphone. Personne d'honnête ne vous les demande. Même pas le service client. »

**Scène 9 — B3 Notion · 1:43–1:50 · B (carte unité 3)**
- Visuel : carte, repère « 3 ».
- Écran : « 3 · Le piège de l'argent envoyé par erreur »
- VO : « Troisième point : le piège de l'argent envoyé par erreur. »

**Scène 10 — B3 Notion · 1:50–2:10 · C**
- Visuel : schéma en quatre cases : « Message : j'ai envoyé par erreur » → « Demande : renvoyez-moi » → croix sur « Renvoyer » → coche sur « Vérifier mon solde moi-même ».
- Écran : « Ne renvoyez rien · Vérifiez votre solde vous-même »
- VO : « Un inconnu vous écrit : j'ai envoyé de l'argent par erreur, renvoyez-le. Parfois, le message de confirmation est faux. Vérifiez votre solde vous-même, dans le menu habituel. N'utilisez jamais un lien reçu. »

**Scène 11 — B4 Application · 2:10–2:34 · A**
- Visuel : enregistrement d'écran : le SMS, puis un appel entrant d'un numéro inconnu (numéro masqué) ; le doigt refuse l'appel. Annotation unique : cadre sur « appel entrant », tenue ≥ 2,5 s.
- Écran : « Le SMS, puis l'appel : même piège »
- VO : « Reprenons Hadiza. Le SMS annonce un compte bloqué. Un appel suit. Le faux conseiller demande le code reçu à l'instant. Hadiza refuse. Elle raccroche. Elle ne rappelle aucun numéro du message. »

**Scène 12 — B4 Application · 2:34–2:57 · A**
- Visuel : enregistrement d'écran : application de messages, SMS ouvert, menu, « Bloquer et signaler » ; coche verte-forme sur la confirmation.
- Écran : « Bloquer et signaler le numéro. Garder la preuve. »
- VO : « Puis elle vérifie son solde dans le menu habituel, ou passe à l'agence de son opérateur. Son compte n'est pas bloqué. Elle bloque l'expéditeur du SMS, et garde le message comme preuve. »

**Scène 13 — B4 Application · 2:57–3:12 · G**
- Visuel : carte de consigne sur fond clair, texte complet.
- Écran : « Consigne : analyser un message suspect » (consigne complète dessous)
- VO : « Un doute sur un message ? Collez-le dans un assistant d'IA, sans noms ni numéros. La consigne demande les signes d'alerte, pas un verdict. Recopiez-la depuis la fiche. »

**Scène 14 — B5 Consolidation · 3:12–3:40 · B**
- Visuel : carte question ; trois secondes de silence ; croix sur « renvoyer » ; la réponse s'affiche avec un téléphone barré.
- Écran : « Un ami : "j'ai envoyé un code par erreur, renvoie-le-moi" »
- VO : « Question. Un ami écrit sur WhatsApp : j'ai envoyé un code par erreur, renvoie-le-moi. Que faites-vous ? [silence 3 s] Jamais. Son compte est peut-être piraté, et ce code ouvre le vôtre. Appelez votre ami. »

**Scène 15 — B6 Clôture · 3:40–3:48 · B**
- Visuel : promesse affichée mot pour mot, coche verte-forme ; le verrou numéro trois se ferme.
- Écran : « À la fin de cette leçon, vous saurez repérer un faux message. »
- VO : « Hadiza n'a donné aucun code. Son compte n'a jamais été bloqué : le message mentait. »

**Scène 16 — B6 Clôture · 3:48–4:00 · B (carte de rappel)**
- Visuel : carte de rappel, points révélés au rythme de la voix.
- Écran : « 1. Urgence, lien, code : trois alarmes. » « 2. Un code ne se donne à personne. » « 3. Vérifiez par le canal officiel. »
- VO : « Urgence, lien, code : trois alarmes. Un code ne se donne à personne. Vérifiez par le canal officiel. Triez trois messages suspects. »

#### Captures à fournir par l'owner

Toutes les captures sont sur **téléphone Android** en français, avec un **numéro de test**. Les messages sont **fictifs** : aucun vrai nom d'opérateur, aucun vrai numéro.

1. **Scènes 4 et 6 — le SMS fictif** (durée utile : 12 s). Depuis un second téléphone, envoyer au téléphone de test ce SMS exact : « Opérateur : votre compte mobile money va être bloqué aujourd'hui. Rappelez le 00 00 00 00 pour le débloquer. » Ouvrir le SMS et laisser l'écran fixe 8 s. **Masquer** : le numéro de l'expéditeur (garder « +227 ») ; ne pas afficher d'autres conversations.
2. **Scène 8 — le SMS de code** (durée utile : 8 s). Envoyer au téléphone de test : « Votre code de vérification est 000000. Ne le communiquez à personne. » Capturer le message tel qu'il s'affiche.
3. **Scène 11 — l'appel entrant** (durée utile : 10 s). Depuis le second téléphone, appeler le téléphone de test ; enregistrer l'écran pendant la sonnerie et refuser l'appel. **Masquer** : le numéro appelant.
4. **Scène 12 — bloquer et signaler** (durée utile : 12 s). Dans l'application de messages : ouvrir le SMS, menu (trois points), « Bloquer et signaler comme spam » ou équivalent, confirmer. [à vérifier au moment de la production : libellés selon la marque du téléphone et l'application de messages]

#### Notes de script

- **Prononciation** : « mobile money » se dit « mo-baïl mo-nî » ; « SMS » se dit lettre par lettre. « Phishing » n'est pas employé dans la voix off : on dit « faux message ». Il peut apparaître une fois en bas de la carte de titre, avec la glose « hameçonnage ».
- **Pièges** : ne jamais citer un vrai opérateur, un vrai numéro ni un vrai logo ; ne jamais montrer comment rédiger un faux message efficace (le SMS fictif est volontairement simple et reste dans la capture). Ne pas dire que « tous les messages d'opérateurs sont faux » : on enseigne à vérifier par un canal officiel.
- **Termes à gloser** : « mobile money » (scène 8 : l'argent par téléphone) ; « canal officiel » (le menu habituel du téléphone, l'agence de l'opérateur).
- **Adaptation EN** : « phishing » peut rester tel quel après glose. **HA / DJE** : conserver l'image de la clé (« donner le code, c'est donner la clé ») si elle parle ; sinon la remplacer par une image locale équivalente (la clé du cadenas du magasin). « Opérateur » : dire le terme courant des opérateurs de téléphonie, sans nom.

### Leçon 4 — Verrouiller ses comptes, réagir si l'on est piégé (`sn4`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez verrouiller vos comptes et réagir en cas de piège. »
- **Cas réel (B1 → B6)** : Rahila, voisine d'étal d'Aïcha au marché de Niamey, a donné un code : son compte WhatsApp est piraté et ses clientes reçoivent des demandes d'argent. Aïcha, elle, verrouille le sien la même semaine. B6 : Rahila suit les cinq gestes et reprend son compte ; Aïcha a verrouillé le sien avant. Rappel de la leçon 3 : un code ne se donne jamais.
- **Unités de notion (B3)** : 1. Un mot de passe long, jamais réutilisé — une phrase plutôt qu'un mot, un mot de passe différent par compte important, jamais confié à personne · 2. La double vérification — une seconde preuve en plus du mot de passe ; on commence par le compte e-mail, qui récupère les autres · 3. Si l'on est piégé : cinq gestes — couper, changer, prévenir, garder les preuves, signaler.
- **Démo (B4)** : WhatsApp sur téléphone, compte de test. 1. Ouvrir WhatsApp, puis les paramètres. 2. Compte, puis « Validation en deux étapes ». 3. Activer, créer un code secret à six chiffres. 4. Ajouter une adresse e-mail de secours. 5. Ouvrir « Appareils connectés » et retirer tout appareil inconnu. Résultat à l'écran : validation en deux étapes activée, liste des appareils contrôlée. [à vérifier au moment de la production : libellés exacts (Compte, Validation en deux étapes, Appareils connectés)]
- **Consolidation (B5)** : prédiction. « Vous oubliez le code secret de WhatsApp. Comment retrouver l'accès ? » (silence). Réponse : grâce à l'adresse e-mail de secours, ajoutée en amont ; sans elle, l'attente peut être longue [à vérifier au moment de la production : délai éventuel annoncé par WhatsApp, à ne pas chiffrer dans la voix] ; moralité : préparer la sortie de secours avant d'en avoir besoin.
- **Consigne à copier** :

```text
Je veux sécuriser mes comptes. Voici la liste, sans aucun mot de passe ni code : [par exemple : WhatsApp, e-mail, Facebook, mobile money, banque].
Classe-les du plus important au moins important pour ma sécurité, avec une phrase d'explication pour chacun.
Pour chaque compte, dis-moi quelle protection activer (mot de passe long et unique, double vérification) et où la trouver dans les paramètres, en termes simples. Si tu n'es pas sûr d'un menu, dis-le.
Ne me demande jamais un mot de passe ni un code.
```

- **Exercice** : « Verrouillez vos trois comptes essentiels » — 1. Choisissez vos trois comptes les plus importants (en général : e-mail, WhatsApp, un compte d'argent ou un réseau social). 2. Pour chacun, remplacez le mot de passe par une phrase longue et propre à ce compte, puis activez la double vérification. 3. Dans WhatsApp, ajoutez l'e-mail de secours et retirez les appareils connectés que vous ne reconnaissez pas.
- **Carte de rappel** : 1. Un mot de passe long, unique par compte. 2. Activez la double vérification partout. 3. Piégé : coupez, changez, prévenez, gardez, signalez.
- **Quiz** :
  1. Quel mot de passe est le plus solide ? — A) Le prénom de votre enfant B) 123456 C) Une phrase longue, propre à ce compte D) Le même partout, pour ne pas l'oublier — **Réponse : C**
  2. Pourquoi un mot de passe différent pour chaque compte important ? — A) Parce qu'une seule fuite ouvrirait toutes les portes B) Pour le changer plus souvent C) Pour impressionner D) Parce que les sites l'exigent tous — **Réponse : A**
  3. À quoi sert la double vérification ? — A) À accélérer la connexion B) À ajouter une seconde preuve : un pirate qui connaît le mot de passe reste bloqué C) À supprimer le mot de passe D) À partager le compte — **Réponse : B**
  4. Pourquoi ajouter une adresse e-mail de secours à la validation en deux étapes de WhatsApp ? — A) Pour retrouver l'accès si l'on oublie le code secret B) Pour recevoir des publicités C) Pour changer de numéro D) Pour inviter des amis — **Réponse : A**
  5. Vous êtes piégé et de l'argent est parti. Quel est le premier geste ? — A) Attendre quelques jours B) Effacer tous les messages C) Appeler vite son opérateur D) Prévenir seulement les inconnus — **Réponse : C**
- **Marques citées** : WhatsApp (Meta) ; Google (capture de la page de sécurité du compte).

#### Script v1 (à valider par l'owner)

Durée estimée : 4:00 · Mots de voix off : 378 *(340–460)*

**Scène 1 — B1 Accroche · 0:00–0:04 · E**
- Visuel : illustration à plat : Rahila devant son étal, le téléphone à la main, l'air inquiet ; deux clientes reçoivent un message.
- Écran : « Niamey · cas fictif »
- VO : « Le compte WhatsApp de Rahila est piraté. »

**Scène 2 — B1 Accroche · 0:04–0:14 · B**
- Visuel : carte de promesse.
- Écran : « À la fin de cette leçon, vous saurez verrouiller vos comptes et réagir en cas de piège. »
- VO : « À la fin de cette leçon, vous saurez verrouiller vos comptes et réagir en cas de piège. » *(promesse commencée à 0:04, achevée vers 0:11)*

**Scène 3 — B1 Accroche · 0:14–0:20 · E**
- Visuel : même illustration ; le verrou numéro trois (leçon 3) allumé, le verrou numéro quatre clignote.
- Écran : « Leçon 3 : un code ne se donne jamais »
- VO : « Leçon trois : un code ne se donne jamais. Rahila l'avait donné. »

**Scène 4 — B2 Cadrage · 0:20–0:46 · A**
- Visuel : capture réelle des paramètres de WhatsApp (compte de test) : liste des rubriques, cadre sur « Compte ». Numéro et photo masqués.
- Écran : « WhatsApp · Paramètres · Compte »
- VO : « Beaucoup pensent : mon compte n'intéresse personne. Pourtant, un compte piraté sert à tromper vos proches et vos clients. Ce n'est pas vous qui êtes visé, ce sont les gens qui vous font confiance. Voici où se règle la sécurité de WhatsApp : dans les paramètres, rubrique Compte. »

**Scène 5 — B3 Notion · 0:46–0:53 · B (carte unité 1)**
- Visuel : carte, verrou numéro quatre sur la porte.
- Écran : « 1 · Un mot de passe long, jamais réutilisé »
- VO : « Premier point : un mot de passe long, jamais réutilisé. »

**Scène 6 — B3 Notion · 0:53–1:14 · C**
- Visuel : schéma comparatif : à gauche, un mot court (cadre rouge-forme, croix) ; à droite, une phrase longue fictive (cadre vert-forme, coche) ; en dessous, un trousseau où une seule clé ouvre quatre portes (croix).
- Écran : « Une phrase longue · un mot de passe par compte »
- VO : « Pensez à une phrase, pas à un mot. Un mot de passe différent pour chaque compte important. Sinon, une seule fuite ouvre toutes vos portes. Ne le confiez à personne, pas même à un assistant d'IA. »

**Scène 7 — B3 Notion · 1:14–1:21 · B (carte unité 2)**
- Visuel : carte, repère « 2 ».
- Écran : « 2 · La double vérification »
- VO : « Deuxième point : la double vérification. »

**Scène 8 — B3 Notion · 1:21–1:43 · A**
- Visuel : capture réelle de la page « Validation en deux étapes » d'un compte Google de test (ordinateur ou téléphone). Cadre sur l'interrupteur « Activée ». Libellés : [à vérifier au moment de la production].
- Écran : « Mot de passe + seconde preuve »
- VO : « Elle ajoute une seconde preuve, en plus du mot de passe. Un code, ou une validation sur votre téléphone. Un pirate qui connaît le mot de passe reste bloqué. Commencez par votre e-mail : il permet de récupérer tous les autres comptes. »

**Scène 9 — B3 Notion · 1:43–1:50 · B (carte unité 3)**
- Visuel : carte, repère « 3 ».
- Écran : « 3 · Si l'on est piégé : cinq gestes »
- VO : « Troisième point : les cinq gestes si l'on est piégé. »

**Scène 10 — B3 Notion · 1:50–2:10 · C**
- Visuel : schéma en cinq pastilles reliées : Couper, Changer, Prévenir, Garder, Signaler ; une icône par pastille (ciseaux, clé, haut-parleur, dossier, drapeau), les pastilles s'allument au rythme de la voix.
- Écran : « Couper · Changer · Prévenir · Garder · Signaler »
- VO : « Un : coupez. Appelez vite votre opérateur si de l'argent est parti. Deux : changez vos mots de passe. Trois : prévenez vos proches. Quatre : gardez les preuves, captures et heures. Cinq : signalez à l'opérateur et à la police. »

**Scène 11 — B4 Application · 2:10–2:34 · A**
- Visuel : enregistrement d'écran (compte de test) : Paramètres, Compte, Validation en deux étapes, Activer, saisie du code à six chiffres (**points masqués, jamais lisibles**). Annotation unique : cadre sur « Validation en deux étapes », tenue ≥ 2,5 s.
- Écran : « Compte → Validation en deux étapes → Activer »
- VO : « Aïcha ouvre WhatsApp, puis les paramètres. Elle choisit Compte, puis validation en deux étapes. Elle active, et crée un code secret à six chiffres. Elle ne le dit à personne. »

**Scène 12 — B4 Application · 2:34–2:57 · A**
- Visuel : enregistrement d'écran : écran « Ajouter une adresse e-mail » (adresse masquée), puis Paramètres → Appareils connectés : liste d'un appareil, bouton de déconnexion. Coche verte-forme sur « Activée ».
- Écran : « E-mail de secours · Appareils connectés »
- VO : « Elle ajoute une adresse e-mail de secours. Elle permet de retrouver l'accès si elle oublie le code. Puis elle ouvre appareils connectés. Elle retire tout appareil qu'elle ne reconnaît pas. »

**Scène 13 — B4 Application · 2:57–3:12 · G**
- Visuel : carte de consigne sur fond clair, texte complet.
- Écran : « Consigne : classer mes comptes à protéger » (consigne complète dessous)
- VO : « Pour savoir par où commencer, une consigne aide à classer vos comptes. Elle ne demande jamais de mot de passe. Recopiez-la depuis la fiche. »

**Scène 14 — B5 Consolidation · 3:12–3:40 · B**
- Visuel : carte question ; trois secondes de silence ; icône de clé oubliée, puis flèche vers « e-mail de secours » et coche.
- Écran : « Code secret oublié : comment rentrer ? »
- VO : « Question. Vous oubliez le code secret de WhatsApp. Comment retrouver l'accès ? [silence 3 s] Grâce à l'adresse e-mail de secours, ajoutée en amont. Sans elle, l'attente peut être longue. Moralité : préparez la sortie de secours avant d'en avoir besoin. »

**Scène 15 — B6 Clôture · 3:40–3:48 · B**
- Visuel : promesse affichée mot pour mot, coche verte-forme ; le verrou numéro quatre se ferme.
- Écran : « À la fin de cette leçon, vous saurez verrouiller vos comptes et réagir en cas de piège. »
- VO : « Rahila a suivi les cinq gestes et repris son compte. Aïcha, elle, a verrouillé le sien avant. »

**Scène 16 — B6 Clôture · 3:48–4:00 · B (carte de rappel)**
- Visuel : carte de rappel, points révélés au rythme de la voix.
- Écran : « 1. Un mot de passe long, unique par compte. » « 2. Activez la double vérification partout. » « 3. Piégé : coupez, changez, prévenez, gardez, signalez. »
- VO : « Un mot de passe long, unique par compte. Activez la double vérification partout. Piégé : coupez, changez, prévenez, gardez, signalez. Verrouillez vos trois comptes essentiels. »

#### Captures à fournir par l'owner

Compte WhatsApp de **test** (un numéro dédié, jamais le compte personnel de l'owner). Interface en français, téléphone.

1. **Scène 4 — Paramètres** (durée utile : 6 s). Ouvrir WhatsApp, toucher le menu (trois points) puis « Paramètres » ; laisser l'écran fixe 4 s. **Masquer** : numéro, photo, nom du compte.
2. **Scène 11 — activer la validation en deux étapes** (durée utile : 20 s). Paramètres → « Compte » → « Validation en deux étapes » → « Activer » → saisir un code de test à six chiffres, **jamais réutilisé ailleurs** → confirmer. Enregistrement d'écran ; le clavier numérique est **flouté au montage** et les points du code restent masqués. [à vérifier au moment de la production : libellés et ordre des écrans]
3. **Scène 12 — e-mail de secours et appareils connectés** (durée utile : 20 s). Saisir une adresse e-mail dédiée au test (masquée au montage), terminer, puis Paramètres → « Appareils connectés » : montrer la liste. **Masquer** : adresse e-mail, noms d'appareils.
4. **Scène 8 — Validation en deux étapes d'un compte Google de test** (durée utile : 8 s). Sur ordinateur : page de sécurité du compte Google de test, section de la validation en deux étapes. **Masquer** : nom, adresse e-mail.

#### Notes de script

- **Prononciation** : « WhatsApp » se dit « ouatsap ». « Validation en deux étapes » est le libellé de l'application ; « double vérification » est le terme que l'on retient ensuite à l'oral : le dire explicitement à la scène 7.
- **Pièges** : ne jamais lire ni montrer un code secret, même de test ; ne jamais conseiller de noter ses mots de passe dans un message ou une consigne. Ne pas chiffrer le délai de récupération d'un compte : [à vérifier au moment de la production]. Le geste « signalez à la police » reste générique tant que le service de police compétent n'est pas confirmé : [à vérifier au moment de la production : service de police chargé de la cybercriminalité au Niger, coordonnées exactes ; canaux de signalement des opérateurs mobiles]. Aucun numéro d'urgence n'est cité sans confirmation officielle.
- **Termes à gloser** : « double vérification » (une seconde preuve en plus du mot de passe) ; « appareils connectés » (les autres écrans reliés à votre WhatsApp).
- **Adaptation EN** : « two-step verification » est le libellé de WhatsApp ; garder « double vérification » = « two-step verification ». **HA / DJE** : l'image du trousseau (« une seule clé pour toutes les portes ») est universelle, à garder. Les libellés des menus WhatsApp doivent être pris dans l'application réglée dans la langue de la voix.

### Leçon 5 — Projet final : votre plan de sécurité familial (`sn5`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez déposer votre plan de sécurité familial. »
- **Cas réel (B1 → B6)** : un dimanche à Niamey, Aïcha réunit sa famille (Moussa en appel, Hadiza sur place) : après deux tentatives d'arnaque évitées, elle veut tout mettre sur une page. B6 : le plan est affiché près du téléphone ; chacun sait quoi faire et qui appeler. Rappel de la leçon 4 : verrouiller ses comptes.
- **Unités de notion (B3, leçon finale : livrables et critères)** : 1. Cinq blocs sur une page — le mot de code, les comptes et leur protection, la règle de l'argent, qui appeler, les cinq gestes · 2. Les critères d'évaluation — complet, utilisable, partagé, sans danger · 3. Ce qui ne figure jamais sur la page — mot de passe, code reçu par SMS, numéro de carte, pièce d'identité.
- **Démo (B4)** : exemple de projet réussi, de bout en bout : le plan d'Aïcha dans Google Docs. 1. Bloc un : un mot de code choisi en famille, écrit nulle part. 2. Bloc deux : trois comptes, tous avec la double vérification. 3. Bloc trois : aucun paiement sur simple message, toujours rappeler d'abord. 4. Bloc quatre : qui appeler (proches, opérateur, service de police chargé de la cybercriminalité). 5. Bloc cinq : les cinq gestes. En bas, la date et les prénoms de ceux qui l'ont lu. Résultat : une page lisible, sans aucune donnée sensible.
- **Consolidation (B5)** : prédiction. « Le plan indique le mot de code, écrit en toutes lettres. Est-ce prudent ? » (silence). Réponse : non ; un mot de code se dit à voix haute, il ne s'écrit pas ; on note seulement qui le connaît.
- **Consigne à copier** :

```text
Aide-moi à rédiger un plan de sécurité familial d'une page, en français simple.
Voici ce que je fournis : [mes comptes à protéger, sans mot de passe] ; [les prénoms de mes proches, sans numéro] ; [mon opérateur de téléphone].
Structure demandée, en cinq blocs courts : 1. le mot de code familial (indique seulement qui le connaît, sans l'écrire) ; 2. mes comptes et leur protection ; 3. la règle de l'argent : aucun paiement sur simple demande reçue par message ou par appel ; 4. qui appeler ; 5. les cinq gestes si l'on est piégé : couper, changer, prévenir, garder les preuves, signaler.
N'inclus aucun mot de passe, aucun code, aucun numéro de carte. Laisse des [crochets] là où je dois compléter.
```

- **Exercice** : « Déposez votre plan de sécurité familial » — 1. Rédigez votre plan d'une page en cinq blocs (avec la consigne si vous le souhaitez), en laissant le mot de code hors de la page. 2. Relisez-le avec au moins deux proches et corrigez ce qui n'est pas clair. 3. Déposez-le sur la plateforme, en PDF ou en photo, **sans** mot de passe, code ni numéro de carte. [à vérifier au moment de la production : modalité exacte de dépôt sur la plateforme]
- **Critères d'évaluation** : plan **complet** (les cinq blocs sont remplis) ; **utilisable** (compris d'un coup d'œil) ; **partagé** (relu avec au moins deux proches) ; **sans danger** (aucune donnée sensible déposée).
- **Carte de rappel** *(récapitulatif du cours, un point par leçon)* : 1. Urgence, secret, argent : arrêtez-vous. 2. Vérifiez la source avant de partager. 3. Un code ne se donne à personne. 4. Double vérification partout.
- **Quiz** :
  1. Un message mêle urgence, secret et demande d'argent. Que faites-vous ? — A) Je m'arrête et je rappelle le proche à son numéro habituel B) Je paie vite pour le rassurer C) Je réponds par un vocal D) Je transfère le message — **Réponse : A**
  2. Une vidéo douteuse circule. Que faites-vous avant de partager ? — A) Je compte les partages B) Je cherche la source d'origine C) Je regarde la qualité de l'image D) Je la partage avec un avertissement — **Réponse : B**
  3. Un « conseiller » demande le code reçu par SMS. Que faites-vous ? — A) Je le donne, c'est le service client B) Je donne seulement la moitié C) Je ne le donne à personne et je raccroche D) Je le donne s'il rappelle — **Réponse : C**
  4. Quelle protection est conseillée pour chaque compte important ? — A) Le même mot de passe partout B) Un mot de passe court C) Aucune, si l'on est prudent D) Un mot de passe long et unique, avec la double vérification — **Réponse : D**
  5. Que ne doit jamais contenir votre plan déposé ? — A) Les prénoms de vos proches B) Un mot de passe, un code reçu par SMS ou un numéro de carte C) Le nom de votre opérateur D) Les cinq gestes — **Réponse : B**
- **Marques citées** : Google Docs (Google) ; WhatsApp (Meta) si l'écran du plan le mentionne.

#### Script v1 (à valider par l'owner)

Durée estimée : 4:00 · Mots de voix off : 385 *(340–460)*

**Scène 1 — B1 Accroche · 0:00–0:04 · E**
- Visuel : illustration à plat : un salon à Niamey, Aïcha, Hadiza et un téléphone en appel (Moussa) autour d'une feuille.
- Écran : « Niamey · dimanche · cas fictif »
- VO : « Un dimanche, Aïcha réunit sa famille. »

**Scène 2 — B1 Accroche · 0:04–0:14 · B**
- Visuel : carte de promesse.
- Écran : « À la fin de cette leçon, vous saurez déposer votre plan de sécurité familial. »
- VO : « À la fin de cette leçon, vous saurez déposer votre plan de sécurité familial. » *(promesse commencée à 0:04, achevée vers 0:10)*

**Scène 3 — B1 Accroche · 0:14–0:20 · E**
- Visuel : même illustration ; la porte, quatre verrous allumés, le cinquième clignote.
- Écran : « Leçon 4 : verrouiller vos comptes »
- VO : « Leçon quatre : verrouiller vos comptes. Ici : tout réunir en une page. »

**Scène 4 — B2 Cadrage · 0:20–0:46 · A**
- Visuel : capture réelle d'une page Google Docs (le plan fictif d'Aïcha), vue d'ensemble : cinq blocs numérotés, titres lisibles. Cadre sur la page entière, tenue ≥ 2,5 s.
- Écran : « Une page · cinq blocs · aucun mot de passe »
- VO : « Beaucoup pensent que la sécurité numérique est réservée aux experts. Pourtant, une famille peut s'en sortir avec une seule page. Voici celle d'Aïcha : simple, lisible, sans aucun mot de passe écrit dessus. Elle tient sur une feuille. »

**Scène 5 — B3 Notion · 0:46–0:53 · B (carte unité 1)**
- Visuel : carte, verrou numéro cinq sur la porte.
- Écran : « 1 · Cinq blocs sur une page »
- VO : « Premier point : les cinq blocs du plan. »

**Scène 6 — B3 Notion · 0:53–1:14 · C**
- Visuel : schéma : une page se découpe en cinq blocs numérotés, chacun avec son icône (bouche, cadenas, interdit, téléphone, cinq pastilles).
- Écran : « 1 Mot de code · 2 Comptes · 3 Argent · 4 Qui appeler · 5 Cinq gestes »
- VO : « Un : le mot de code familial. Deux : vos comptes, et leur protection. Trois : la règle de l'argent, aucun paiement sur simple demande reçue. Quatre : qui appeler, vos proches et votre opérateur. Cinq : les cinq gestes en cas de piège. »

**Scène 7 — B3 Notion · 1:14–1:21 · B (carte unité 2)**
- Visuel : carte, repère « 2 ».
- Écran : « 2 · Les critères d'évaluation »
- VO : « Deuxième point : ce qui sera évalué. »

**Scène 8 — B3 Notion · 1:21–1:43 · C**
- Visuel : liste de contrôle animée : quatre lignes (Complet · Utilisable · Partagé · Sans danger), chacune avec une case qui se coche à son tour.
- Écran : « Complet · Utilisable · Partagé · Sans danger »
- VO : « Votre plan est complet : les cinq blocs sont remplis. Il est utilisable : on le comprend d'un coup d'œil. Il est partagé avec au moins deux proches. Et il est sans danger : ni mot de passe, ni code, ni numéro de carte. »

**Scène 9 — B3 Notion · 1:43–1:50 · B (carte unité 3)**
- Visuel : carte, repère « 3 ».
- Écran : « 3 · Ce qui ne figure jamais sur la page »
- VO : « Troisième point : ce qui n'y figure jamais. »

**Scène 10 — B3 Notion · 1:50–2:10 · B**
- Visuel : carte avec trois lignes barrées d'une croix, révélées une à une.
- Écran : « Pas de mot de passe · Pas de code SMS · Pas de numéro de carte »
- VO : « Jamais de mot de passe sur la page. Jamais de code reçu par SMS. Jamais de numéro de carte ni de pièce d'identité. Si la page se perd, elle ne doit pas ouvrir une seule porte. »

**Scène 11 — B4 Application · 2:10–2:34 · A**
- Visuel : capture réelle du plan d'Aïcha, blocs un à trois, défilement lent ; une annotation à la fois : cadre sur chaque bloc, ≥ 2,5 s.
- Écran : « Bloc 1 mot de code · Bloc 2 comptes · Bloc 3 argent »
- VO : « Voici le plan d'Aïcha, de bout en bout. Bloc un : un mot de code, choisi en famille, mais écrit nulle part. Bloc deux : trois comptes, tous avec la double vérification. Bloc trois : aucun paiement sur simple message. Toujours rappeler d'abord. »

**Scène 12 — B4 Application · 2:34–2:57 · A**
- Visuel : suite du défilement : blocs quatre et cinq, puis le pied de page (date, prénoms). Coche verte-forme sur la page entière.
- Écran : « Bloc 4 qui appeler · Bloc 5 cinq gestes »
- VO : « Bloc quatre : qui appeler. Moussa, Hadiza, l'opérateur, et le service de police chargé de la cybercriminalité. Bloc cinq : les cinq gestes, du premier au dernier. En bas, la date, et les prénoms de ceux qui l'ont lu. »

**Scène 13 — B4 Application · 2:57–3:12 · G**
- Visuel : carte de consigne sur fond clair, texte complet.
- Écran : « Consigne : rédiger mon plan d'une page » (consigne complète dessous)
- VO : « La consigne vous aide à rédiger la page, sans donnée sensible. Ensuite, déposez le plan sur la plateforme, en PDF ou en photo. Pas de mot de passe, jamais. »

**Scène 14 — B5 Consolidation · 3:12–3:40 · A**
- Visuel : capture réelle du bloc un avec une version fautive (le mot de code écrit en toutes lettres, mot fictif visiblement factice) ; question en surimpression, trois secondes de silence, puis cadre + croix sur le mot, puis la version correcte (« Connu de : Aïcha, Moussa, Hadiza ») avec coche.
- Écran : « Mot de code écrit sur la page ? » puis « On note qui le connaît, pas le mot. »
- VO : « Question. Le plan indique le mot de code, écrit en toutes lettres. Est-ce prudent ? [silence 3 s] Non. Un mot de code se dit à voix haute, il ne s'écrit pas. On note seulement qui le connaît. »

**Scène 15 — B6 Clôture · 3:40–3:48 · B**
- Visuel : promesse affichée mot pour mot, coche verte-forme ; le cinquième verrou se ferme, la porte est entièrement verrouillée.
- Écran : « À la fin de cette leçon, vous saurez déposer votre plan de sécurité familial. »
- VO : « Le plan d'Aïcha est affiché près du téléphone. Chacun sait quoi faire, et qui appeler. »

**Scène 16 — B6 Clôture · 3:48–4:00 · B (carte de rappel du cours)**
- Visuel : carte de rappel, quatre points (un par leçon) révélés au rythme de la voix.
- Écran : « 1. Urgence, secret, argent : arrêtez-vous. » « 2. Vérifiez la source avant de partager. » « 3. Un code ne se donne à personne. » « 4. Double vérification partout. »
- VO : « Urgence, secret, argent : arrêtez-vous. Vérifiez la source avant de partager. Un code ne se donne à personne. Double vérification partout. Déposez votre plan de sécurité familial. »

#### Captures à fournir par l'owner

1. **Scènes 4, 11, 12 — le plan d'Aïcha** (durée utile : 45 s de défilement lent). Dans Google Docs (ordinateur ou téléphone), créer un document de **une page** nommé « Plan de sécurité — famille d'Aïcha (cas fictif) », avec cinq titres numérotés : « 1. Mot de code familial — connu de : Aïcha, Moussa, Hadiza (le mot n'est pas écrit) » ; « 2. Mes comptes : WhatsApp, e-mail, réseau social — double vérification activée » ; « 3. Règle de l'argent : aucun paiement sur simple message ou appel ; je rappelle d'abord au numéro enregistré » ; « 4. Qui appeler : Moussa, Hadiza, mon opérateur, le service de police chargé de la cybercriminalité [coordonnées à compléter après vérification] » ; « 5. Si je suis piégé : couper, changer, prévenir, garder les preuves, signaler » ; pied de page : « Relu le [date] par : Moussa, Hadiza ». Capture en défilement lent. **Masquer** : nom du compte Google, adresse e-mail.
2. **Scène 14 — la version fautive** (durée utile : 8 s). Même document, copie dont le bloc 1 contient « Mot de code : MANGUIER-27 » (mot factice). Capture fixe 4 s, puis remplacer par « Connu de : Aïcha, Moussa, Hadiza » et recapturer 4 s.

#### Notes de script

- **Prononciation** : « cybercriminalité » se dit « si-bère-cri-mi-na-li-té ». « PDF » se dit lettre par lettre.
- **Pièges** : ne pas laisser croire qu'un plan garantit l'absence d'arnaque : il réduit le risque et accélère la réaction. Ne jamais citer un numéro d'urgence ou un service sans confirmation : [à vérifier au moment de la production : service de police chargé de la cybercriminalité au Niger (la presse mentionne une division de lutte contre la cybercriminalité au sein de la police judiciaire), adresse et contact public, canaux de signalement des opérateurs]. Le dépôt sur la plateforme : [à vérifier au moment de la production].
- **Termes à gloser** : aucun terme nouveau ; la leçon réutilise les mots des quatre leçons précédentes.
- **Adaptation EN** : « plan de sécurité familial » = « family security plan ». **HA / DJE** : la liste « qui appeler » doit être adaptée par le traducteur aux noms de services réellement connus localement ; ne pas traduire littéralement « service de police chargé de la cybercriminalité » si une désignation locale existe.

## 2.6 Captures et éléments à préparer

| Leçon | Élément | Comment l'obtenir | Qui |
|---|---|---|---|
| Toutes | Illustrations de situation (Aïcha, Moussa, Hadiza, Rahila ; étal, atelier, salon) | Dessin à plat dans la palette Karatou, visages sans traits réalistes | Claude (HyperFrames) |
| sn1 | Vocal et message texte d'un numéro inconnu (WhatsApp, numéros de test) | Mise en scène avec un second numéro ; texte exact fourni dans « Captures » | Owner |
| sn1 | Appel au contact « Moussa (test) », puis bloquer et signaler | Enregistrement d'écran sur le téléphone de test | Owner |
| sn2 | Image créée pour le cours (marché de Niamey, sans personne réelle) | Outil d'image de Gemini, consigne fournie dans « Captures » | Owner |
| sn2 | Vérification dans Gemini (image créée pour le cours, puis photo ordinaire) | Enregistrement d'écran ; vérifier le libellé réel de la réponse | Owner |
| sn2 | Recherche par image dans Google Lens (photo libre de droits) | Enregistrement d'écran sur téléphone | Owner |
| sn3 | SMS fictif « compte bloqué », SMS de code factice, appel entrant, bloquer et signaler | Second téléphone + téléphone de test ; textes exacts fournis | Owner |
| sn4 | Paramètres WhatsApp, validation en deux étapes, e-mail de secours, appareils connectés | Compte WhatsApp de test ; code jamais lisible (flou au montage) | Owner |
| sn4 | Page de validation en deux étapes d'un compte Google de test | Capture sur ordinateur, informations masquées | Owner |
| sn5 | Plan d'Aïcha dans Google Docs, version correcte et version fautive | Texte fourni dans « Captures » ; capture en défilement lent | Owner |
| sn4, sn5 | Service de police chargé de la cybercriminalité au Niger : nom exact, coordonnées publiques, procédure de plainte ; canaux de signalement des opérateurs mobiles | Vérification auprès des sources officielles avant la production ; sinon formulation générique conservée | Équipe Karatou + owner |
| Toutes | Libellés réels des menus (WhatsApp, Google, application de messages) dans la langue de tournage | Contrôle à l'écran le jour de la capture ; adapter la voix off si besoin | Owner |
