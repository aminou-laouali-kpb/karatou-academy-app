# CLAUDE.md — Karatou Academy · Production vidéo
# Cours 11 — Excel + IA : analyser ses données en une heure

> **Pour l'owner — mode d'emploi**
> 1. Créez un dossier vide sur votre ordinateur, par exemple `karatou-excel-ia`.
> 2. Copiez-y ce fichier et renommez-le exactement `CLAUDE.md`.
> 3. Ouvrez Claude Code dans ce dossier (dans un terminal : `cd karatou-excel-ia` puis `claude`).
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
livraison/excel-ia/<id>/      fichiers livrés · livraison/excel-ia/INTEGRATION.md
```

`<id>` est l'identifiant de la leçon (`xl1`, `xl2`…). Langues : `fr`, `en`, `ha`, `dje`.

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

### 9.2 Nommage et contenu de `livraison/excel-ia/<id>/`

`excel-ia_<id>_<langue>_v<n>.mp4` · `…-360.mp4` · `….srt` · `….vtt` · `…_cover.jpg` (1920 × 1080, qualité 85,
première image stable de B1) · `…_transcript.md` (un titre par temps, texte dit + actions à l'écran entre
crochets) · `RECETTE.md`.

### 9.3 Mise en ligne

Chaîne YouTube **Karatou Academy**, vidéos **non répertoriées**, une vidéo par langue, sous-titres `.srt` ajoutés
comme piste. Titre : « Karatou Academy — Excel + IA : analyser ses données en une heure — Leçon N : <titre> (<LANGUE>) ». Le site lit des **URL
d'intégration** : `https://www.youtube.com/embed/<ID>` (jamais `watch?v=` ni `youtu.be/`). Teste chaque URL dans un
navigateur avant de la consigner.

### 9.4 Intégration au site — `livraison/excel-ia/INTEGRATION.md`

Le site lit, pour chaque leçon, un champ `video: { fr, en, ha }` dans les fichiers TypeScript du dépôt
`karatou-academy-app` (registre `authoredLessons`). Chaque leçon y a aussi un texte (objectif, quatre sections,
exemple, exercice, quiz de cinq questions, réflexion, glossaire), rédigé par l'équipe avec le skill
`karatou-course-creator`, et des lignes Supabase (module, leçons) pour la progression et les certificats.

Ton rôle : tenir `INTEGRATION.md` à jour, leçon par leçon : module `excel-ia`, id, titre, promesse (objectif), cas
réel (exemple), exercice (titre et étapes), carte de rappel, quiz, marques citées, URL FR / EN / HA, et URL DJE
« en attente ». Ce fichier est remis à l'équipe technique ; tu ne modifies pas le dépôt du site.

### 9.5 Corrections après publication

Une URL publiée est figée. Pour corriger : nouvelle version `v2` → mise en ligne → nouvelle URL testée →
`INTEGRATION.md` mis à jour → l'équipe technique remplace l'URL → l'ancienne vidéo est rendue privée, jamais
supprimée. Consigne chaque version dans le journal de `PROGRESS.md`.

## 10. `PROGRESS.md` — modèle

```markdown
# PROGRESS — Cours 11 · Excel + IA : analyser ses données en une heure
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
| Numéro | 11 |
| Titre | Excel + IA : analyser ses données en une heure |
| Format | Motion graphics + captures d'écran, voix off (voix clonée de l'owner) |
| Owner / voix | à désigner — nom complet et titre exact demandés au premier lancement |
| Rubrique | IA & Données |
| Public | Professionnels, agents d'ONG, administration : toute personne qui reçoit des tableaux et doit en tirer une page fiable ; sur ordinateur ou téléphone, avec des outils gratuits |
| Slug du module (provisoire) | `excel-ia` |
| Préfixe des leçons | `xl` |
| Nombre de vidéos | 5 (dont la dernière = projet final certifiant) |
| Durée par vidéo | 3–5 min (cible 4:00) |
| Langues | FR (référence) · EN · HA · DJE |
| Prérequis | Savoir ouvrir un tableur (Excel ou Google Sheets), saisir des données, enregistrer un fichier. Avoir un compte gratuit sur un assistant d'IA (Claude, Gemini ou ChatGPT). |
| Promesse du cours | « Vous saurez transformer un tableau brut en rapport d'une page, avec l'IA comme copilote, en vérifiant chaque chiffre. » |
| Positionnement | « En une heure » désigne le format de la séance de travail du projet final, pas une promesse de résultat ni de durée : chacun avance à son rythme. L'IA est un copilote du tableur : elle explique, propose, rédige ; l'apprenant décide, teste et vérifie. Le cours ne duplique pas le module en ligne `data-analysis` (leçons d1 à d6), qui détaille les gestes manuels : nettoyage (d1), tableaux croisés (d2), graphiques (d4), raconter une analyse (d5), mini-projet (d6). Chaque leçon renvoie à la leçon correspondante « pour aller plus loin ». Tous les fichiers montrés sont fictifs et anonymisés. |
| Fil rouge | Zeinabou, chargée de suivi-évaluation dans une association fictive de Tahoua, et sa directrice Mariama. Un seul fichier fictif suit tout le cours : une enquête de satisfaction sur des points d'eau, huit villages « A » à « H », trois cents réponses. |
| Marques citées | Excel, Microsoft, Google Sheets, Google Drive, Google, Claude, Anthropic, Gemini, ChatGPT, OpenAI, WhatsApp, Meta |

## 2.2 Ce que l'apprenant saura faire

- Décrire la structure d'un tableau à un assistant d'IA (titres de colonnes, lignes fictives) sans lui confier de données personnelles.
- Obtenir un diagnostic des problèmes d'un fichier, puis une formule de correction expliquée, la tester sur quelques lignes et l'appliquer.
- Poser une question en mots simples et en tirer une formule de calcul (moyenne, somme, comptage selon un critère) et un tableau croisé dynamique, puis les comparer.
- Choisir le type de graphique adapté à une question, rédiger un titre qui énonce le message, et contrôler l'axe et les valeurs.
- Faire rédiger une synthèse à partir d'un tableau résumé et contrôler chaque chiffre en le reliant à sa cellule d'origine.
- Mener, en une séance de travail, une analyse complète et déposer un rapport d'une page vérifiable.

## 2.3 Plan du cours

| Leçon | Id | Titre | Promesse (objectif) | Cas réel (B1) | Démo (B4) | Durée cible |
|---|---|---|---|---|---|---|
| 1 | `xl1` | Préparer et nettoyer son tableau avec l'IA | « À la fin de cette leçon, vous saurez nettoyer un tableau avec l'IA sans exposer vos données. » | Zeinabou ouvre le fichier de l'enquête : trois formats de dates, villages écrits de plusieurs façons, rapport attendu lundi | Copie du fichier, diagnostic par l'assistant, formule expliquée testée sur cinq lignes puis étendue | 4:00 |
| 2 | `xl2` | Formules et tableaux croisés avec l'IA | « À la fin de cette leçon, vous saurez obtenir et comprendre une formule ou un tableau croisé. » | Mariama demande : quel village est le moins satisfait ? | Question en mots, formule de moyenne par critère, tableau croisé, comparaison des deux résultats | 4:00 |
| 3 | `xl3` | Graphiques et indicateurs lisibles | « À la fin de cette leçon, vous saurez choisir le bon graphique et le créer avec l'IA. » | Zeinabou envoie un graphique à Mariama, lu sur téléphone : le camembert à huit parts est illisible | Choisir des barres triées, titre qui dit le message, valeurs affichées, export en image | 4:00 |
| 4 | `xl4` | Synthèse écrite et vérification des chiffres | « À la fin de cette leçon, vous saurez faire rédiger une synthèse et vérifier chaque chiffre. » | Zeinabou doit écrire cinq lignes pour le bailleur | Synthèse rédigée par l'assistant, contrôle chiffre par chiffre, ajout d'une phrase de limites | 4:00 |
| 5 | `xl5` | Projet final : analyser un fichier en une séance | « À la fin de cette leçon, vous saurez mener une analyse complète et déposer votre rapport. » | Vendredi, Mariama attend le rapport complet | Le projet réussi de Zeinabou : les quatre livrables, de bout en bout | 4:00 |

## 2.4 Direction artistique du cours

- **Motif récurrent : « le classeur de terrain ».** Un grand tableau en grille, aux cases arrondies, sert de décor aux cartes de titre ; chaque leçon met en lumière une partie de la grille (colonnes, formule, graphique, texte, dossier). Une loupe sur une cellule symbolise la vérification et revient dans chaque leçon.
- **Personnages (type E).** Illustrations à plat, formes simples, aplats de la palette Karatou, visages sans traits réalistes, aucun photoréalisme généré, aucune ressemblance avec une personne réelle. Zeinabou (foulard bleu), Mariama (foulard orange), constants d'une leçon à l'autre.
- **Données et captures.** Tout est fictif et signalé par la mention « Données fictives » en coin d'écran dès qu'un tableau apparaît. Les captures viennent d'un vrai tableur (Google Sheets, mêmes gestes dans Excel) et d'un vrai assistant d'IA : jamais d'interface inventée. Aucun nom de personne, aucun numéro : les colonnes montrent des identifiants (« R001 ») et des villages « A » à « H ».
- **Trois schémas types réutilisés (type C).**
  1. Le flux « Votre fichier → tri de ce qu'on peut partager → assistant → formule → test → résultat » (leçons 1 et 4).
  2. Le « double chemin » : deux flèches (formule, tableau croisé) qui convergent sur un même chiffre, avec une coche (leçons 2 et 5).
  3. La chaîne « chiffre → cellule » : un chiffre dans une phrase relié par un trait à sa cellule dans la grille (leçons 4 et 5).
- **Iconographie.** Loupe (vérifier), cadenas (donnée protégée), coche (validé), croix (erreur), point d'interrogation (incertain). Toujours doublée d'un mot ou d'une forme, jamais de couleur seule.
- **Fixe d'une leçon à l'autre.** La grille, la loupe, les couleurs des personnages, la carte de rappel à trois points (quatre dans la leçon finale), le cadre + coche pour le bon geste et le cadre + croix pour l'erreur.
- **Change d'une leçon à l'autre.** La partie de la grille éclairée, la formule ou l'écran montré, le livrable qui s'ajoute au dossier de Zeinabou.
- **Musique.** Aucune sous la voix. Un court habillage sonore (un « clic » de cellule) sur les cartes de titre et la carte de rappel uniquement.

## 2.5 Les leçons

### Leçon 1 — Préparer et nettoyer son tableau avec l'IA (`xl1`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez nettoyer un tableau avec l'IA sans exposer vos données. »
- **Cas réel (B1 → B6)** : Zeinabou, chargée de suivi-évaluation dans une association fictive de Tahoua, ouvre le fichier de l'enquête de satisfaction sur les points d'eau : trois cents réponses, dates écrites de trois façons, villages orthographiés de plusieurs manières, quelques identifiants en double. Le rapport est attendu lundi. B6 : le fichier est propre, l'original est intact, et aucun nom n'a quitté l'association.
- **Unités de notion (B3)** : 1. Décrire sans exposer — on donne à l'assistant la structure (titres de colonnes, quelques lignes fictives), jamais les personnes · 2. D'abord un diagnostic — on demande la liste des problèmes avant toute correction · 3. Une formule expliquée, testée — on se fait expliquer chaque morceau, on teste sur cinq lignes, puis on applique.
- **Démo (B4)** : Google Sheets (mêmes gestes dans Excel) et un assistant d'IA. 1. Faire une copie du fichier et la nommer. 2. Copier les titres de colonnes et cinq lignes fictives. 3. Les coller dans l'assistant avec la consigne. 4. Lire le diagnostic. 5. Demander une formule pour la colonne « Village » ; lire l'explication. 6. La tester sur cinq lignes, comparer avant et après. 7. L'étendre aux trois cents lignes et noter le changement dans une colonne « Remarques ». Résultat attendu à l'écran : colonne « Village » harmonisée, journal des modifications renseigné.
- **Consolidation (B5)** : prédiction. « Une date du quatre mars a été lue comme le trois avril. Comment le repérer ? » (silence). Réponse : regarder les dates dont le jour dépasse douze (le vingt, par exemple) : elles ne peuvent pas être un mois, l'erreur saute aux yeux.
- **Consigne à copier** :

```text
Je travaille dans [Excel / Google Sheets], en français. Voici la structure d'un tableau, avec des données fictives ou anonymisées : titres de colonnes : [liste des titres] ; cinq lignes d'exemple : [coller cinq lignes sans nom ni numéro de téléphone].
1. Liste les problèmes de qualité que tu repères (dates, espaces, écritures différentes, doublons, cellules vides), sans rien corriger encore.
2. Pour chaque problème, propose une formule à tester et explique-la en une phrase par morceau.
3. Dis-moi comment vérifier le résultat sur quelques lignes avant de l'appliquer à tout le tableau.
```

- **Exercice** : « Nettoyez une colonne avec une formule expliquée » — 1. Faites une copie d'un fichier anonymisé (ou d'un fichier d'exercice) et nommez-la « _COPIE ». 2. Donnez la structure à l'assistant avec la consigne, obtenez le diagnostic, puis une formule pour une colonne. 3. Testez la formule sur cinq lignes, appliquez-la, et notez dans une colonne « Remarques » ce que vous avez changé.
- **Carte de rappel** : 1. Collez la structure, jamais les personnes. 2. Un diagnostic d'abord, la formule ensuite. 3. Testez sur cinq lignes avant d'appliquer.
- **Quiz** :
  1. Que peut-on coller dans un assistant d'IA ? — A) Les noms des bénéficiaires B) Les numéros de téléphone C) Les titres de colonnes et quelques lignes fictives D) Le fichier complet, tel quel — **Réponse : C**
  2. Que demandez-vous à l'assistant en premier ? — A) De tout corriger d'un coup B) Un diagnostic : la liste des problèmes C) De supprimer les doublons D) D'écrire le rapport — **Réponse : B**
  3. Que faites-vous avant d'appliquer une formule aux trois cents lignes ? — A) Je la teste sur cinq lignes B) Je l'applique d'abord, je regarderai ensuite C) Je supprime l'original D) Je la recopie à la main — **Réponse : A**
  4. Pourquoi demander à l'assistant d'expliquer la formule ? — A) Pour la rendre plus longue B) Pour changer de logiciel C) Pour supprimer des lignes D) Pour la comprendre avant de l'appliquer — **Réponse : D**
  5. Une formule a lu le quatre mars comme le trois avril. Quelle vérification ? — A) Aucune, c'est automatique B) Regarder les dates dont le jour dépasse douze C) Supprimer la colonne D) Changer de logiciel — **Réponse : B**
- **Marques citées** : Google Sheets, Google ; Excel, Microsoft ; Claude (Anthropic), Gemini (Google), ChatGPT (OpenAI), nommés comme exemples d'assistants d'IA.

#### Script v1 (à valider par l'owner)

Durée estimée : 4:00 · Mots de voix off : 392 *(340–460)*

**Scène 1 — B1 Accroche · 0:00–0:04 · E**
- Visuel : illustration à plat : Zeinabou à son bureau, ordinateur ouvert sur un grand tableau, bureau d'une association à Tahoua.
- Écran : « Tahoua · cas fictif »
- VO : « Zeinabou ouvre le fichier de l'enquête. »

**Scène 2 — B1 Accroche · 0:04–0:14 · B**
- Visuel : carte de promesse.
- Écran : « À la fin de cette leçon, vous saurez nettoyer un tableau avec l'IA sans exposer vos données. »
- VO : « À la fin de cette leçon, vous saurez nettoyer un tableau avec l'IA sans exposer vos données. » *(promesse commencée à 0:04, achevée vers 0:12)*

**Scène 3 — B1 Accroche · 0:14–0:20 · E**
- Visuel : même illustration ; trois étiquettes de dates différentes flottent au-dessus de l'écran.
- Écran : « Trois dates différentes · rapport lundi »
- VO : « Trois dates différentes dans la même colonne. Le rapport est attendu lundi. »

**Scène 4 — B2 Cadrage · 0:20–0:46 · A**
- Visuel : capture réelle de Google Sheets : le fichier fictif brut, défilement lent ; cadre sur la colonne des dates, puis sur la colonne des villages. Mention « Données fictives ».
- Écran : « Données fictives · dates en trois formats · villages écrits de plusieurs façons »
- VO : « Beaucoup pensent qu'il faut envoyer tout le fichier à l'IA. Non. Vous lui décrivez la structure : les titres de colonnes et quelques lignes fictives. Voici le fichier de Zeinabou : des dates en trois formats, des villages écrits de plusieurs façons. Tout est fictif et anonymisé. »

**Scène 5 — B3 Notion · 0:46–0:53 · B (carte unité 1)**
- Visuel : carte, la grille s'éclaire sur la ligne des titres.
- Écran : « 1 · Décrire sans exposer »
- VO : « Premier point : décrire sans exposer. »

**Scène 6 — B3 Notion · 0:53–1:14 · C**
- Visuel : schéma de flux : « Votre fichier » → barrière avec cadenas « noms, numéros, données de bénéficiaires » (croix) → « Titres + cinq lignes fictives » (coche) → « Assistant d'IA ».
- Écran : « Titres + cinq lignes fictives. Pas de noms. Pas de numéros. »
- VO : « Les noms, les numéros de téléphone et les données de bénéficiaires restent chez vous. Vous collez seulement les titres de colonnes. Puis cinq lignes inventées, qui ressemblent aux vraies. L'assistant d'IA, Claude, Gemini ou ChatGPT, comprend la forme, sans voir une seule personne. »

**Scène 7 — B3 Notion · 1:14–1:21 · B (carte unité 2)**
- Visuel : carte, repère « 2 », loupe.
- Écran : « 2 · D'abord un diagnostic »
- VO : « Deuxième point : d'abord un diagnostic, ensuite les corrections. »

**Scène 8 — B3 Notion · 1:21–1:43 · A**
- Visuel : capture réelle de la réponse de l'assistant : liste de problèmes repérés. Annotation une à la fois, ≥ 2,5 s : cadre sur « dates en formats mélangés », puis sur « espaces en trop », puis sur « villages écrits différemment ».
- Écran : « Diagnostic : dates · espaces · villages »
- VO : « Demandez-lui de lister les problèmes, avant toute correction. Il repère les dates en formats mélangés. Il repère les espaces en trop, et les villages écrits de plusieurs façons. Vous gardez la main : vous décidez quoi corriger. »

**Scène 9 — B3 Notion · 1:43–1:50 · B (carte unité 3)**
- Visuel : carte, repère « 3 ».
- Écran : « 3 · Une formule expliquée, testée »
- VO : « Troisième point : une formule expliquée, puis testée. »

**Scène 10 — B3 Notion · 1:50–2:10 · C**
- Visuel : schéma d'anatomie : la formule =NOMPROPRE(SUPPRESPACE(B2)) s'affiche ; deux accolades successives s'allument de l'intérieur vers l'extérieur, avec une phrase courte sous chacune.
- Écran : « =NOMPROPRE(SUPPRESPACE(B2)) · de l'intérieur vers l'extérieur »
- VO : « Une formule se lit de l'intérieur vers l'extérieur. Ici, supprespace retire les espaces en trop. Nompropre met une majuscule à chaque mot. Faites-vous expliquer chaque morceau. Une formule que vous ne comprenez pas, vous ne l'appliquez pas. »

**Scène 11 — B4 Application · 2:10–2:34 · A**
- Visuel : enregistrement d'écran : duplication de l'onglet ou du fichier (copie nommée), sélection des titres et de cinq lignes fictives, collage dans l'assistant avec la consigne ; le diagnostic apparaît. Annotation unique : cadre sur « copie », tenue ≥ 2,5 s.
- Écran : « Copie d'abord · structure + cinq lignes · diagnostic »
- VO : « Zeinabou fait d'abord une copie du fichier. Elle copie les titres et cinq lignes fictives. Elle les colle dans l'assistant avec sa consigne, sa demande écrite. L'assistant liste plusieurs problèmes, dont les dates et les espaces. »

**Scène 12 — B4 Application · 2:34–2:57 · A**
- Visuel : enregistrement d'écran : la formule est collée dans une colonne de test, cinq lignes avant/après affichées côte à côte (cadre + coche), puis la formule est étendue à tout le tableau ; la colonne « Remarques » reçoit une ligne.
- Écran : « Test sur 5 lignes → puis tout le tableau → Remarques »
- VO : « Pour la colonne des villages, elle teste la formule sur cinq lignes. Elle compare avant et après. Tout est correct. Alors seulement, elle l'étend aux trois cents lignes, et note le changement dans sa colonne remarques. »

**Scène 13 — B4 Application · 2:57–3:12 · G**
- Visuel : carte de consigne sur fond clair, texte complet, [crochets] en gras.
- Écran : « Consigne : diagnostic et formule expliquée » (consigne complète dessous)
- VO : « Voici la consigne de cette leçon. Elle donne la structure, le logiciel utilisé, et trois demandes précises. Recopiez-la depuis la fiche, et remplacez les crochets. »

**Scène 14 — B5 Consolidation · 3:12–3:40 · B**
- Visuel : carte question ; trois secondes de silence ; une grille de dates apparaît avec « 20/03 » entouré (cadre) ; la réponse s'affiche.
- Écran : « Le 4 mars lu comme le 3 avril : comment le repérer ? »
- VO : « Question. Une date du quatre mars a été lue comme le trois avril. Comment le repérer ? [silence 3 s] Regardez les dates dont le jour dépasse douze, comme le vingt. Elles ne peuvent pas être un mois. Là, l'erreur saute aux yeux. »

**Scène 15 — B6 Clôture · 3:40–3:48 · B**
- Visuel : promesse affichée mot pour mot, coche ; la loupe se pose sur une cellule propre.
- Écran : « À la fin de cette leçon, vous saurez nettoyer un tableau avec l'IA sans exposer vos données. »
- VO : « Le fichier de Zeinabou est propre. L'original est intact, et aucun nom n'a quitté l'association. »

**Scène 16 — B6 Clôture · 3:48–4:00 · B (carte de rappel)**
- Visuel : carte de rappel, points révélés au rythme de la voix.
- Écran : « 1. Collez la structure, jamais les personnes. » « 2. Un diagnostic d'abord, la formule ensuite. » « 3. Testez sur cinq lignes avant d'appliquer. »
- VO : « Collez la structure, jamais les personnes. Un diagnostic d'abord, la formule ensuite. Testez sur cinq lignes avant d'appliquer. Nettoyez une colonne avec une formule expliquée. »

#### Captures à fournir par l'owner

**Fichier fictif de tout le cours** : `enquete_fictive.csv`, généré par Claude par script selon la spécification ci-dessous, puis importé par l'owner dans Google Sheets (Fichier → Importer). Spécification : 300 lignes ; colonnes « ID réponse » (R001…), « Village », « Date », « Âge », « Satisfaction » (de 1 à 5), « Montant payé (FCFA) » ; huit villages « Village A » à « Village H » avec respectivement 41, 38, 3, 45, 36, 52, 40 et 45 réponses ; moyennes de satisfaction voisines de 3,8 · 3,6 · 4,7 · 3,9 · 3,5 · 2,4 · 3,7 · 3,6 ; dates écrites en trois formats (JJ/MM/AAAA, AAAA-MM-JJ, « 12 mars 2026 ») ; environ un quart des villages avec une variante d'écriture (« village c », « Village  C » avec double espace) ; une dizaine d'identifiants en double ; quelques cellules d'âge vides. Aucun nom, aucun numéro.

Tout est sur **ordinateur**, Google Sheets en français, assistant d'IA **unique pour tout le cours** (au choix de l'owner, version gratuite).

1. **Scène 4 — le fichier brut** (durée utile : 15 s). Ouvrir le fichier importé, défiler lentement de haut en bas. **Masquer** : nom du compte Google, adresse e-mail, autres fichiers du Drive.
2. **Scène 8 — le diagnostic** (durée utile : 12 s). Dans l'assistant, nouvelle conversation : coller la consigne de la fiche complétée avec les titres de colonnes et cinq lignes du fichier. Laisser la réponse s'afficher entièrement. **Masquer** : nom du compte, historique des conversations.
3. **Scènes 11 et 12 — la copie, le test, l'extension** (durée utile : 40 s). Faire une copie du fichier (Fichier → Créer une copie), nommée « enquete_fictive_COPIE ». Dans une colonne vide, coller la formule proposée par l'assistant pour la colonne « Village » (par exemple =NOMPROPRE(SUPPRESPACE(B2)) pour l'interface en français ; =PROPER(TRIM(B2)) en anglais), la tester sur cinq lignes, puis l'étendre au tableau. Ajouter la colonne « Remarques ». Les noms de fonctions dépendent de la langue de l'interface : [à vérifier au moment de la production].

#### Notes de script

- **Prononciation** : « supprespace » se dit « supp-ress-pass » ; « nompropre » se dit « non-propre » ; « CSV » se dit lettre par lettre ; « Excel » se dit « ek-cèl ». Les noms de fonctions suivent la langue de l'interface montrée à l'écran.
- **Pièges** : ne jamais coller de vraies données (noms, numéros, montants individuels) dans l'assistant, même pour « tester » ; l'owner n'utilise que le fichier fictif. L'assistant peut proposer une formule inexacte : la leçon insiste sur le test sur cinq lignes. Les fonctions intégrées d'IA de certains tableurs (Copilot dans Excel, Gemini dans Google Sheets) dépendent de la version : le cours n'en dépend pas, et ne les présente pas comme acquises [à vérifier au moment de la production : disponibilité en version gratuite].
- **Termes à gloser** : « assistant d'IA » (scène 6, avec exemples) ; « consigne » (scène 11 : sa demande écrite) ; « diagnostic » (la liste des problèmes, avant toute correction).
- **Pour aller plus loin** : module `data-analysis`, leçon d1 « Nettoyer un fichier Excel » (gestes manuels : filtres, tri, suppression des doublons).
- **Adaptation EN** : noms de fonctions en anglais (TRIM, PROPER) à l'écran si la voix est anglaise. **HA / DJE** : les noms de fonctions et de menus restent ceux de l'interface ; la voix explique leur rôle en une phrase. « Doublon » : prévoir une périphrase (« la même ligne écrite deux fois »).

### Leçon 2 — Formules et tableaux croisés avec l'IA (`xl2`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez obtenir et comprendre une formule ou un tableau croisé. »
- **Cas réel (B1 → B6)** : Mariama, la directrice, demande à Zeinabou : « Quel village est le moins satisfait ? » Zeinabou dispose du fichier propre de la leçon 1 (huit villages, trois cents réponses). B6 : elle répond avec deux méthodes concordantes et le nombre de réponses derrière chaque moyenne. Rappel de la leçon 1 : coller la structure, jamais les personnes.
- **Unités de notion (B3)** : 1. Poser la question en mots — on décrit ce qu'on veut calculer, selon quel critère, dans quelles colonnes · 2. Lire une formule, argument par argument — moyenne selon un critère, lue pas à pas avec l'assistant · 3. Le tableau croisé dynamique — villages en lignes, mois en colonnes, satisfaction en valeurs, avec l'option « moyenne ».
- **Démo (B4)** : Google Sheets (mêmes gestes dans Excel) et l'assistant. 1. Poser la question en mots, avec les titres de colonnes. 2. Obtenir la formule de moyenne selon un critère ; la lire argument par argument. 3. La coller dans une cellule vide ; obtenir la moyenne d'un village. 4. Suivre les étapes de l'assistant : Insertion → Tableau croisé dynamique. 5. Placer « Village » en lignes et « Satisfaction » en valeurs, option moyenne. 6. Comparer : les deux méthodes donnent le même chiffre. Résultat attendu à l'écran : deux nombres identiques côte à côte, coche.
- **Consolidation (B5)** : prédiction. « Le village C a la meilleure moyenne. Pouvez-vous conclure ? » (silence). Réponse : pas encore ; on compte ses réponses (fonction de comptage selon un critère) : avec trois réponses seulement, une moyenne dit très peu.
- **Consigne à copier** :

```text
Mon tableau est dans [Excel / Google Sheets], en français. Ses colonnes : [titres des colonnes, par exemple : ID réponse, Village, Date, Âge, Satisfaction].
Ma question, en mots : [par exemple : la satisfaction moyenne, village par village].
Donne-moi : 1. la formule à saisir, avec l'explication de chaque argument ; 2. les étapes pour obtenir le même résultat avec un tableau croisé dynamique ; 3. une vérification que je peux faire moi-même pour m'assurer que les deux résultats concordent.
Si ta réponse dépend de la langue de mon logiciel, dis-le. Je ne te donne aucune donnée personnelle.
```

- **Exercice** : « Obtenez deux fois le même résultat » — 1. Choisissez une question simple sur votre fichier (moyenne, somme ou nombre de lignes selon un critère). 2. Obtenez-la d'abord avec une formule, puis avec un tableau croisé dynamique, en suivant l'assistant. 3. Comparez les deux nombres ; s'ils diffèrent, cherchez pourquoi avant de continuer.
- **Carte de rappel** : 1. Posez une question claire, en mots. 2. Une formule se lit, argument par argument. 3. Deux méthodes, un même résultat : c'est la preuve.
- **Quiz** :
  1. Quelle demande est la plus claire pour l'assistant ? — A) « Fais-moi une formule » B) « La moyenne de satisfaction, village par village, colonnes B et D » C) « Analyse mon fichier » D) « Fais-moi un tableau » — **Réponse : B**
  2. Dans la formule de moyenne selon un critère, que désigne le premier argument ? — A) Le critère B) Le titre C) La colonne dont on calcule la moyenne D) Le nombre de lignes — **Réponse : C**
  3. Dans un tableau croisé dynamique, où place-t-on les villages pour une ligne par village ? — A) Dans les lignes B) Dans les valeurs C) Dans le titre D) Dans le filtre de date — **Réponse : A**
  4. Pourquoi obtenir le même résultat avec deux méthodes ? — A) Pour impressionner B) Pour remplir la page C) Pour changer de logiciel D) C'est une vérification : si les résultats concordent, la confiance augmente — **Réponse : D**
  5. Un village a la meilleure moyenne, avec trois réponses. Que faites-vous ? — A) Je conclus qu'il est le plus satisfait B) Je compte ses réponses avant de conclure C) Je le supprime D) Je l'ignore — **Réponse : B**
- **Marques citées** : Google Sheets, Google ; Excel, Microsoft.

#### Script v1 (à valider par l'owner)

Durée estimée : 4:00 · Mots de voix off : 363 *(340–460)*

**Scène 1 — B1 Accroche · 0:00–0:04 · E**
- Visuel : illustration à plat : Mariama debout devant le bureau de Zeinabou, un doigt levé vers l'écran.
- Écran : « Tahoua · cas fictif »
- VO : « Mariama demande : quel village est le moins satisfait ? »

**Scène 2 — B1 Accroche · 0:04–0:14 · B**
- Visuel : carte de promesse.
- Écran : « À la fin de cette leçon, vous saurez obtenir et comprendre une formule ou un tableau croisé. »
- VO : « À la fin de cette leçon, vous saurez obtenir et comprendre une formule ou un tableau croisé. » *(promesse commencée à 0:04, achevée vers 0:12)*

**Scène 3 — B1 Accroche · 0:14–0:20 · E**
- Visuel : même illustration ; la loupe de la leçon 1 se pose sur le titre des colonnes.
- Écran : « Leçon 1 : la structure, jamais les personnes »
- VO : « Leçon un : collez la structure, jamais les personnes. »

**Scène 4 — B2 Cadrage · 0:20–0:46 · A**
- Visuel : capture réelle de Google Sheets : le fichier propre, huit villages, trois cents lignes ; cadre sur les titres de colonnes. Mention « Données fictives ».
- Écran : « Données fictives · 8 villages · 300 réponses »
- VO : « Beaucoup pensent : il faut connaître les formules par cœur. Ou bien : l'IA donne toujours la bonne. Ni l'un ni l'autre. Vous décrivez la question en mots simples. Vous lisez la réponse. Vous vérifiez. Voici le tableau propre de Zeinabou, avec huit villages et trois cents réponses. »

**Scène 5 — B3 Notion · 0:46–0:53 · B (carte unité 1)**
- Visuel : carte, la grille s'éclaire sur deux colonnes.
- Écran : « 1 · Poser la question en mots »
- VO : « Premier point : posez la question en mots. »

**Scène 6 — B3 Notion · 0:53–1:14 · C**
- Visuel : schéma : une bulle « Fais-moi une formule » (croix) ; une bulle « La moyenne de satisfaction, village par village » (coche) ; trois pastilles apparaissent : quoi calculer, selon quel critère, dans quelles colonnes.
- Écran : « Quoi · Selon quel critère · Dans quelles colonnes »
- VO : « Ne dites pas : fais-moi une formule. Dites : la moyenne de satisfaction, village par village. L'assistant a besoin de trois choses : ce que vous voulez calculer, selon quel critère, et dans quelles colonnes. »

**Scène 7 — B3 Notion · 1:14–1:21 · B (carte unité 2)**
- Visuel : carte, repère « 2 ».
- Écran : « 2 · Lire une formule, argument par argument »
- VO : « Deuxième point : lisez la formule, argument par argument. »

**Scène 8 — B3 Notion · 1:21–1:43 · A**
- Visuel : capture réelle de la formule de moyenne selon un critère dans la barre de formule de Sheets, avec les plages colorées par le logiciel. Trois cadres successifs, ≥ 2,5 s chacun : première plage, deuxième plage, critère.
- Écran : « Moyenne de… · selon la colonne… · égale à… »
- VO : « La formule moyenne si ens calcule une moyenne selon un critère. Premier argument : la colonne à moyenner. Deuxième : la colonne où chercher. Troisième : le village voulu. Demandez à l'assistant de relire chaque argument avec vous. »

**Scène 9 — B3 Notion · 1:43–1:50 · B (carte unité 3)**
- Visuel : carte, repère « 3 ».
- Écran : « 3 · Le tableau croisé dynamique »
- VO : « Troisième point : le tableau croisé dynamique. »

**Scène 10 — B3 Notion · 1:50–2:10 · C**
- Visuel : schéma : un petit tableau croisé avec trois zones nommées « Lignes », « Colonnes », « Valeurs » ; des étiquettes glissent : « Village » en lignes, « Mois » en colonnes, « Satisfaction (moyenne) » en valeurs.
- Écran : « Lignes : village · Colonnes : mois · Valeurs : moyenne »
- VO : « Un tableau croisé résume vos lignes. Les villages vont en lignes. Les mois, en colonnes. La satisfaction, en valeurs, avec l'option moyenne. L'assistant vous dit quoi glisser où, en suivant vos noms de colonnes. »

**Scène 11 — B4 Application · 2:10–2:34 · A**
- Visuel : enregistrement d'écran : question tapée dans l'assistant ; la formule proposée est copiée, collée dans une cellule vide, la moyenne du premier village s'affiche. Annotation unique : cadre sur le résultat, tenue ≥ 2,5 s.
- Écran : « Formule collée → moyenne du village A »
- VO : « Zeinabou pose sa question à l'assistant. Il propose une formule moyenne si ens. Elle la colle dans une cellule vide. Elle obtient une moyenne pour le premier village. »

**Scène 12 — B4 Application · 2:34–2:57 · A**
- Visuel : enregistrement d'écran : Insertion → Tableau croisé dynamique, panneau latéral, « Village » en lignes, « Satisfaction » en valeurs (moyenne) ; les deux résultats du village A s'alignent à l'écran, cadre + coche sur l'égalité.
- Écran : « Formule = tableau croisé : même chiffre »
- VO : « Ensuite, elle suit les étapes pour un tableau croisé : insertion, puis tableau croisé dynamique. Elle place villages et satisfaction. Les deux méthodes donnent le même chiffre. Deux chemins, un résultat : c'est sa preuve. »

**Scène 13 — B4 Application · 2:57–3:12 · G**
- Visuel : carte de consigne sur fond clair, texte complet.
- Écran : « Consigne : formule et tableau croisé » (consigne complète dessous)
- VO : « Voici la consigne. Elle décrit vos colonnes et votre question, en mots. Elle demande trois choses : la formule, le tableau croisé, une vérification. Recopiez-la depuis la fiche. »

**Scène 14 — B5 Consolidation · 3:12–3:40 · A**
- Visuel : capture réelle du tableau croisé trié par moyenne : le village C en tête. Question en surimpression, trois secondes de silence, puis cadre + croix sur « C meilleur ? », et une colonne « Nombre de réponses » apparaît avec « 3 » encadré.
- Écran : « Village C : meilleure moyenne. Combien de réponses ? »
- VO : « Question. Le village C a la meilleure moyenne. Pouvez-vous conclure ? [silence 3 s] Pas encore. Comptez ses réponses. Avec trois réponses seulement, une moyenne dit très peu. Ajoutez une colonne avec nb si ens. »

**Scène 15 — B6 Clôture · 3:40–3:48 · B**
- Visuel : promesse affichée mot pour mot, coche ; la loupe se pose sur le résultat.
- Écran : « À la fin de cette leçon, vous saurez obtenir et comprendre une formule ou un tableau croisé. »
- VO : « Zeinabou répond à Mariama avec deux méthodes concordantes, et le nombre de réponses derrière chaque moyenne. »

**Scène 16 — B6 Clôture · 3:48–4:00 · B (carte de rappel)**
- Visuel : carte de rappel, points révélés au rythme de la voix.
- Écran : « 1. Posez une question claire, en mots. » « 2. Une formule se lit, argument par argument. » « 3. Deux méthodes, un même résultat : c'est la preuve. »
- VO : « Posez une question claire, en mots. Une formule se lit, argument par argument. Deux méthodes, un même résultat : c'est la preuve. Obtenez deux fois le même résultat. »

#### Captures à fournir par l'owner

Ordinateur, Google Sheets en français, fichier fictif de la leçon 1 **nettoyé** (colonne « Village » harmonisée, dates uniformisées). Même assistant d'IA que dans la leçon 1.

1. **Scène 4 — le fichier propre** (durée utile : 8 s). Fichier ouvert, défilement lent. **Masquer** : nom du compte, autres fichiers.
2. **Scène 8 — la formule** (durée utile : 12 s). Cliquer sur la cellule du résultat pour que la formule de moyenne selon un critère s'affiche dans la barre de formule et que les plages soient colorées. Libellé de la fonction en français : MOYENNE.SI.ENS ; en anglais : AVERAGEIFS. Séparateur d'arguments (point-virgule ou virgule) selon la langue : [à vérifier au moment de la production].
3. **Scène 11 — la question et la formule** (durée utile : 20 s). Dans l'assistant, taper : « Mon tableau est dans Google Sheets, en français. Ses colonnes : ID réponse, Village, Date, Âge, Satisfaction, Montant payé. Ma question : la satisfaction moyenne, village par village. Donne-moi la formule avec l'explication de chaque argument. » Copier la formule, la coller dans une cellule vide.
4. **Scène 12 — le tableau croisé** (durée utile : 20 s). Sélectionner toute la plage de données, Insertion → Tableau croisé dynamique, nouvelle feuille ; dans le panneau latéral : « Lignes » → Village ; « Valeurs » → Satisfaction, « Résumer par » → moyenne. Libellés : [à vérifier au moment de la production].
5. **Scène 14 — le nombre de réponses** (durée utile : 10 s). Dans le tableau croisé, ajouter « ID réponse » en valeurs avec « Résumer par » → comptage (ou ajouter une colonne avec la fonction de comptage selon un critère, NB.SI.ENS en français). Trier par moyenne décroissante : le village C (3 réponses) apparaît en tête.

#### Notes de script

- **Prononciation** : « moyenne si ens » : on ne prononce pas les points (MOYENNE.SI.ENS) ; « nb si ens » se dit « n-b si ens ». « Tableau croisé dynamique » peut être raccourci en « tableau croisé » après la première occurrence.
- **Pièges** : l'assistant peut donner une formule dont le séparateur ne convient pas à la langue du logiciel : la consigne lui demande de le signaler, et l'owner vérifie à l'écran. Ne pas laisser croire que la formule et le tableau croisé donnent toujours le même résultat : s'ils diffèrent, c'est le signal d'une erreur à chercher (c'est le but de la vérification). Les valeurs de l'exemple sont fictives.
- **Termes à gloser** : « argument » (une information donnée à la formule) ; « critère » (la condition, ici le nom du village) ; « tableau croisé dynamique » (un tableau qui résume les lignes selon des catégories).
- **Pour aller plus loin** : module `data-analysis`, leçon d2 « Tableaux croisés et indicateurs ».
- **Adaptation EN** : AVERAGEIFS, COUNTIFS et « pivot table » à l'écran ; la voix dit « pivot table ». **HA / DJE** : garder les noms de fonctions tels qu'ils s'affichent ; expliquer « moyenne » et « critère » par un exemple de marché (la moyenne des prix, selon le produit).

### Leçon 3 — Graphiques et indicateurs lisibles (`xl3`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez choisir le bon graphique et le créer avec l'IA. »
- **Cas réel (B1 → B6)** : Zeinabou doit envoyer à Mariama, par WhatsApp, un graphique comparant les huit villages. Son premier essai, un camembert à huit parts, est illisible sur téléphone. B6 : Mariama lit des barres triées, d'un coup d'œil ; le village F se détache clairement. Rappel de la leçon 2 : deux méthodes, un même résultat.
- **Unités de notion (B3)** : 1. Une question, un graphique — comparer : barres ; suivre une évolution : ligne ; montrer la part d'un tout : camembert, quatre parts au plus · 2. Un titre qui dit le message — « Le village F est le moins satisfait » plutôt que « Satisfaction par village » · 3. Vérifier l'axe et les valeurs — axe qui part de zéro pour des barres, valeurs affichées.
- **Démo (B4)** : Google Sheets (mêmes gestes dans Excel) et l'assistant. 1. Sélectionner le tableau résumé (village, nombre de réponses, moyenne). 2. Décrire la question et le public (lecture sur téléphone) à l'assistant ; il conseille des barres horizontales triées. 3. Insertion → Graphique ; choisir les barres. 4. Remplacer le titre par le message ; afficher les valeurs. 5. Enregistrer le graphique en image, prêt pour WhatsApp. Résultat attendu à l'écran : barres triées, titre clair, valeurs lisibles. [à vérifier au moment de la production : libellés des menus du graphique et de l'export en image]
- **Consolidation (B5)** : prédiction. « Deux barres paraissent très différentes. Quelle est la première vérification ? » (silence). Réponse : regarder où commence l'axe ; ici il commence à trois, pas à zéro ; l'écart réel est petit.
- **Consigne à copier** :

```text
Voici un tableau résumé, sans aucune donnée personnelle : [coller le tableau résumé : villages, nombre de réponses, moyenne].
Mon message : [par exemple : le village F est le moins satisfait]. Mon public : [par exemple : la directrice et le bailleur] ; ils lisent sur téléphone.
Propose : 1. le type de graphique adapté et pourquoi ; 2. un titre qui énonce le message ; 3. les réglages à faire dans [Excel / Google Sheets en français] ; 4. les erreurs à éviter pour ce graphique (axe, couleurs, nombre de parts).
```

- **Exercice** : « Faites lire votre graphique en cinq secondes » — 1. Choisissez un message à montrer à partir de votre tableau résumé, et créez le graphique avec l'aide de l'assistant. 2. Montrez-le cinq secondes à un collègue, puis cachez-le : demandez ce qu'il a retenu. 3. Corrigez le titre, l'axe ou les couleurs jusqu'à ce que le message soit retenu.
- **Carte de rappel** : 1. Un graphique répond à une question. 2. Le titre dit le message. 3. Vérifiez l'axe et affichez les valeurs.
- **Quiz** :
  1. Pour comparer huit villages, quel graphique choisir ? — A) Un camembert à huit parts B) Des barres C) Une ligne D) Un nuage de points — **Réponse : B**
  2. Quel titre dit le message ? — A) « Satisfaction par village » B) « Graphique 1 » C) « Le village F est le moins satisfait » D) « Voir ci-dessous » — **Réponse : C**
  3. Que vérifier en premier sur des barres qui paraissent très différentes ? — A) Où commence l'axe vertical B) La couleur C) La police D) Le logo — **Réponse : A**
  4. Quel graphique pour suivre une évolution mois par mois ? — A) Un camembert B) Une carte C) Un tableau de texte D) Une ligne — **Réponse : D**
  5. Pourquoi afficher les valeurs sur le graphique ? — A) Pour décorer B) Pour qu'on lise sans deviner C) Pour cacher l'axe D) Pour allonger le graphique — **Réponse : B**
- **Marques citées** : Google Sheets, Google ; Excel, Microsoft ; WhatsApp (Meta).

#### Script v1 (à valider par l'owner)

Durée estimée : 4:00 · Mots de voix off : 355 *(340–460)*

**Scène 1 — B1 Accroche · 0:00–0:04 · E**
- Visuel : illustration à plat : Zeinabou envoie un message depuis son téléphone ; une vignette de graphique part vers Mariama.
- Écran : « Tahoua · cas fictif »
- VO : « Zeinabou envoie un graphique à Mariama. »

**Scène 2 — B1 Accroche · 0:04–0:14 · B**
- Visuel : carte de promesse.
- Écran : « À la fin de cette leçon, vous saurez choisir le bon graphique et le créer avec l'IA. »
- VO : « À la fin de cette leçon, vous saurez choisir le bon graphique et le créer avec l'IA. » *(promesse commencée à 0:04, achevée vers 0:11)*

**Scène 3 — B1 Accroche · 0:14–0:20 · E**
- Visuel : même illustration ; les deux méthodes de la leçon 2 (deux flèches) convergent sur un chiffre.
- Écran : « Leçon 2 : deux méthodes, un même résultat »
- VO : « Leçon deux : deux méthodes, un même résultat. »

**Scène 4 — B2 Cadrage · 0:20–0:46 · A**
- Visuel : capture réelle de Google Sheets : le camembert à huit parts, affiché dans un cadre de la taille d'un écran de téléphone. Cadre sur les huit légendes minuscules. Mention « Données fictives ».
- Écran : « Huit parts, huit couleurs : illisible sur téléphone »
- VO : « Beaucoup pensent : un camembert avec tous les villages, ce sera clair. Regardez-le sur un téléphone. Huit parts, huit couleurs, aucune réponse. Un graphique n'est pas une décoration. Il répond à une question. C'est le premier essai de Zeinabou. »

**Scène 5 — B3 Notion · 0:46–0:53 · B (carte unité 1)**
- Visuel : carte, la grille s'éclaire sur le tableau résumé.
- Écran : « 1 · Une question, un graphique »
- VO : « Premier point : une question, un graphique. »

**Scène 6 — B3 Notion · 0:53–1:14 · C**
- Visuel : schéma à trois lignes : « Comparer → barres », « Évolution → ligne », « Part d'un tout → camembert (4 parts au plus) », chacune avec une icône simple qui apparaît à son tour.
- Écran : « Comparer : barres · Évolution : ligne · Part d'un tout : camembert »
- VO : « Comparer des villages : des barres. Suivre une évolution dans le temps : une ligne. Montrer la part d'un tout : un camembert, quatre parts au plus. Posez d'abord votre question. Le type de graphique en découle. »

**Scène 7 — B3 Notion · 1:14–1:21 · B (carte unité 2)**
- Visuel : carte, repère « 2 ».
- Écran : « 2 · Un titre qui dit le message »
- VO : « Deuxième point : un titre qui dit le message. »

**Scène 8 — B3 Notion · 1:21–1:43 · A**
- Visuel : capture réelle du même graphique en barres avec deux titres successifs : « Satisfaction par village » (cadre + croix) puis « Le village F est le moins satisfait » (cadre + coche), chacun tenu ≥ 2,5 s.
- Écran : « Décrit ≠ dit le message »
- VO : « Comparez deux titres. Satisfaction par village : cela décrit, cela ne dit rien. Le village F est le moins satisfait : voilà le message. L'assistant propose des titres. Vous choisissez celui que les chiffres permettent de défendre. »

**Scène 9 — B3 Notion · 1:43–1:50 · B (carte unité 3)**
- Visuel : carte, repère « 3 ».
- Écran : « 3 · Vérifier l'axe et les valeurs »
- VO : « Troisième point : vérifier l'axe et les valeurs. »

**Scène 10 — B3 Notion · 1:50–2:10 · C**
- Visuel : schéma comparatif : deux paires de barres identiques ; à gauche, axe tronqué (cadre + croix, l'écart paraît énorme) ; à droite, axe qui part de zéro (cadre + coche, l'écart est petit) ; les valeurs s'affichent au-dessus des barres.
- Écran : « Axe tronqué ≠ axe à zéro · Valeurs affichées »
- VO : « Regardez où commence l'axe vertical. S'il commence tout près des valeurs, de petites différences paraissent énormes. Pour des barres, partez de zéro. Affichez les valeurs sur le graphique, pour qu'on lise sans deviner. »

**Scène 11 — B4 Application · 2:10–2:34 · A**
- Visuel : enregistrement d'écran : sélection du tableau résumé ; consigne collée dans l'assistant (seulement le tableau résumé) ; la réponse conseille des barres horizontales triées avec les valeurs affichées. Annotation unique : cadre sur la recommandation.
- Écran : « Tableau résumé seulement · barres horizontales triées »
- VO : « Zeinabou sélectionne son tableau résumé. Elle ne donne à l'assistant que ce tableau, pas les réponses individuelles. Elle décrit sa question à l'assistant : comparer huit villages, lecture sur téléphone. Il conseille des barres horizontales, triées, avec les valeurs affichées. »

**Scène 12 — B4 Application · 2:34–2:57 · A**
- Visuel : enregistrement d'écran : Insertion → Graphique ; choix des barres ; édition du titre ; case « Étiquettes de données » cochée ; menu du graphique → téléchargement en image.
- Écran : « Insertion → Graphique → titre → valeurs → image »
- VO : « Elle ouvre le menu insertion, puis graphique. Elle choisit les barres, change le titre, et affiche les valeurs. Elle enregistre le graphique en image, prêt pour WhatsApp. »

**Scène 13 — B4 Application · 2:57–3:12 · G**
- Visuel : carte de consigne sur fond clair, texte complet.
- Écran : « Consigne : le bon graphique et son titre » (consigne complète dessous)
- VO : « La consigne reçoit votre tableau résumé, sans donnée personnelle. Elle précise votre message et votre public. Elle demande le graphique, le titre et les erreurs à éviter. Recopiez-la depuis la fiche. »

**Scène 14 — B5 Consolidation · 3:12–3:40 · A**
- Visuel : capture réelle de deux barres (moyennes de deux villages, par exemple 3,8 et 3,5) dont l'axe commence à trois : l'écart paraît grand. Question en surimpression, trois secondes de silence, puis cadre sur l'origine de l'axe et mention « axe : 3 ».
- Écran : « Deux barres très différentes ? Où commence l'axe ? »
- VO : « Question. Deux barres paraissent très différentes. Quelle est la première vérification ? [silence 3 s] Regardez où commence l'axe. Ici, il commence à trois, pas à zéro. L'écart réel est petit. »

**Scène 15 — B6 Clôture · 3:40–3:48 · B**
- Visuel : promesse affichée mot pour mot, coche ; le graphique en barres triées apparaît dans un cadre de téléphone.
- Écran : « À la fin de cette leçon, vous saurez choisir le bon graphique et le créer avec l'IA. »
- VO : « Mariama lit le graphique sur son téléphone, d'un coup d'œil. Le village F se détache clairement. »

**Scène 16 — B6 Clôture · 3:48–4:00 · B (carte de rappel)**
- Visuel : carte de rappel, points révélés au rythme de la voix.
- Écran : « 1. Un graphique répond à une question. » « 2. Le titre dit le message. » « 3. Vérifiez l'axe et affichez les valeurs. »
- VO : « Un graphique répond à une question. Le titre dit le message. Vérifiez l'axe et affichez les valeurs. Faites lire votre graphique en cinq secondes. »

#### Captures à fournir par l'owner

Ordinateur, Google Sheets en français. Tableau résumé **fictif**, à saisir dans un nouvel onglet « Résumé » (colonnes : Village · Réponses · Moyenne sur 5) : A 41 · 3,8 ; B 38 · 3,6 ; C 3 · 4,7 ; D 45 · 3,9 ; E 36 · 3,5 ; F 52 · 2,4 ; G 40 · 3,7 ; H 45 · 3,6. Ces valeurs correspondent au fichier généré à la leçon 1 ; mention « Données fictives » ajoutée au montage.

1. **Scène 4 — le camembert illisible** (durée utile : 8 s). Sélectionner Village et Moyenne, Insertion → Graphique, choisir « Graphique à secteurs ». Réduire la fenêtre du graphique à la largeur d'un téléphone avant la capture.
2. **Scènes 8 et 12 — les barres** (durée utile : 35 s). Insertion → Graphique → « Graphique à barres » ; trier le tableau par moyenne croissante avant de créer le graphique ; titre d'abord « Satisfaction par village », puis remplacé par « Le village F est le moins satisfait » ; activer « Étiquettes de données » dans l'éditeur ; menu du graphique (trois points) → téléchargement en image. Libellés : [à vérifier au moment de la production].
3. **Scène 11 — l'assistant** (durée utile : 15 s). Coller dans l'assistant la consigne de la fiche complétée **avec le tableau résumé seulement** ; laisser la réponse s'afficher. **Masquer** : nom du compte, historique.
4. **Scène 14 — l'axe tronqué** (durée utile : 10 s). Graphique à barres de deux lignes (village A, 3,8 ; village E, 3,5) ; dans l'éditeur, « Axe vertical » → minimum 3. Capturer, puis remettre le minimum à 0 et recapturer 4 s.

#### Notes de script

- **Prononciation** : « camembert » est le terme courant pour « graphique à secteurs » ; le dire une fois avec sa glose. « Axe vertical » : la ligne graduée sur le côté du graphique.
- **Pièges** : ne pas condamner le camembert en général (il convient pour quatre parts au plus) ; ne pas laisser croire qu'un graphique « honnête » existe sans vérification de l'axe ; le graphique exporté ne doit contenir aucune donnée personnelle. Le tableau résumé montre le nombre de réponses : la leçon 4 s'appuie dessus.
- **Termes à gloser** : « axe » (la ligne graduée), « étiquettes de données » (les chiffres affichés sur les barres), « tableau résumé » (un tableau de quelques lignes, déjà agrégé).
- **Pour aller plus loin** : module `data-analysis`, leçon d4 « Visualiser les résultats ».
- **Adaptation EN** : « pie chart », « bar chart », « axis », « data labels ». **HA / DJE** : « camembert » n'a pas d'équivalent courant : dire « le cercle découpé en parts, comme un gâteau partagé ». Garder l'exemple du village F.

### Leçon 4 — Synthèse écrite et vérification des chiffres (`xl4`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez faire rédiger une synthèse et vérifier chaque chiffre. »
- **Cas réel (B1 → B6)** : Mariama demande à Zeinabou cinq lignes pour le bailleur, pas un fichier. Zeinabou fait rédiger la synthèse par l'assistant, puis contrôle chaque chiffre. B6 : elle envoie ses cinq lignes ; chaque chiffre a une source, et la limite est écrite. Rappel de la leçon 3 : un graphique répond à une question.
- **Unités de notion (B3)** : 1. Vous donnez les chiffres, l'IA donne les mots — on colle un tableau résumé et on impose des règles (conclusion en premier, chiffres du tableau seulement, « non disponible » plutôt qu'estimer) · 2. Chaque chiffre renvoie à une cellule — on surligne chaque chiffre de la synthèse et on le retrouve dans le tableau · 3. Dire ce que les données ne prouvent pas — nombre de réponses, réponses manquantes, période : une phrase de limites termine la synthèse.
- **Démo (B4)** : l'assistant et Google Sheets. 1. Coller le tableau résumé avec la consigne. 2. Lire la synthèse (conclusion en premier, cellule citée après chaque chiffre). 3. Contrôler les chiffres un par un dans le tableau. 4. Constater que le village C, présenté comme le plus satisfait, n'a que trois réponses. 5. Ajouter cette limite dans la synthèse. Résultat attendu à l'écran : synthèse annotée, chiffres cochés, phrase de limites ajoutée. Si l'assistant ne commet aucune imprécision, la scène reste valable : le contrôle est montré tel quel et la limite du village C est ajoutée de la même façon.
- **Consolidation (B5)** : prédiction. « L'assistant écrit : la satisfaction a progressé. Que lui demandez-vous ? » (silence). Réponse : les deux chiffres comparés, leur période et leurs cellules ; un verbe de tendance cache toujours deux chiffres.
- **Consigne à copier** :

```text
Voici un tableau résumé, sans donnée personnelle : [coller le tableau résumé : villages, nombre de réponses, moyenne].
Rédige une synthèse de cinq lignes pour [destinataire : par exemple, la directrice, un bailleur].
Règles : 1. la conclusion en premier ; 2. n'utilise que les chiffres du tableau ; 3. après chaque chiffre, cite la colonne et la ligne d'où il vient ; 4. termine par une phrase sur les limites des données ; 5. si une information manque, écris « non disponible » au lieu de l'estimer.
```

- **Exercice** : « Contrôlez chaque chiffre de votre synthèse » — 1. Faites rédiger une synthèse de cinq lignes à partir de votre tableau résumé, avec la consigne. 2. Surlignez chaque chiffre et cochez-le seulement quand vous l'avez retrouvé dans le tableau, même ligne, même colonne. 3. Ajoutez une phrase sur ce que vos données ne prouvent pas (nombre de réponses, manques, période).
- **Carte de rappel** : 1. L'IA rédige, vous fournissez les chiffres. 2. Chaque chiffre renvoie à une cellule. 3. Écrivez ce que les données ne prouvent pas.
- **Quiz** :
  1. Qui fournit les chiffres, et qui fournit les mots ? — A) L'IA invente les deux B) Vous fournissez les chiffres, l'assistant rédige les mots C) L'assistant fournit les chiffres, vous les mots D) Personne — **Réponse : B**
  2. Comment contrôler un chiffre de la synthèse ? — A) Le croire s'il paraît plausible B) Demander à l'IA si elle est sûre C) Le retrouver dans le tableau, même ligne et même colonne D) Le supprimer — **Réponse : C**
  3. Qu'est-ce qu'une hallucination ? — A) Une réponse fausse, donnée avec assurance B) Une réponse trop longue C) Une réponse en retard D) Une réponse en anglais — **Réponse : A**
  4. Une bonne synthèse se termine par : — A) Une photo B) Un remerciement C) Une promesse D) Une phrase de limites — **Réponse : D**
  5. L'assistant écrit « la satisfaction a progressé ». Que lui demandez-vous ? — A) De le répéter B) Les deux chiffres comparés, leur période et leurs cellules C) De le mettre en gras D) De le traduire — **Réponse : B**
- **Marques citées** : Google Sheets, Google ; Claude (Anthropic), Gemini (Google), ChatGPT (OpenAI), nommés comme exemples d'assistants d'IA si la voix les reprend.

#### Script v1 (à valider par l'owner)

Durée estimée : 4:00 · Mots de voix off : 376 *(340–460)*

**Scène 1 — B1 Accroche · 0:00–0:04 · E**
- Visuel : illustration à plat : Zeinabou devant une page presque blanche, Mariama derrière elle avec cinq doigts levés.
- Écran : « Tahoua · cas fictif »
- VO : « Zeinabou doit écrire cinq lignes pour le bailleur. »

**Scène 2 — B1 Accroche · 0:04–0:14 · B**
- Visuel : carte de promesse.
- Écran : « À la fin de cette leçon, vous saurez faire rédiger une synthèse et vérifier chaque chiffre. »
- VO : « À la fin de cette leçon, vous saurez faire rédiger une synthèse et vérifier chaque chiffre. » *(promesse commencée à 0:04, achevée vers 0:11)*

**Scène 3 — B1 Accroche · 0:14–0:20 · E**
- Visuel : même illustration ; le graphique en barres de la leçon 3 apparaît sur l'écran de Zeinabou.
- Écran : « Leçon 3 : un graphique répond à une question »
- VO : « Leçon trois : un graphique répond à une question. »

**Scène 4 — B2 Cadrage · 0:20–0:46 · A**
- Visuel : capture réelle de la réponse de l'assistant : une synthèse de quelques lignes, fluide, d'apparence parfaite. Cadre sur le texte. Mention « Données fictives ».
- Écran : « Une synthèse fluide. Fiable ? »
- VO : « Beaucoup pensent : l'IA a lu le tableau, donc ses chiffres sont justes. Pas toujours. Un assistant peut écrire une phrase fluide et fausse. On appelle cela une hallucination : une réponse fausse, donnée avec assurance. Voici la synthèse reçue par Zeinabou. Elle a l'air parfaite. »

**Scène 5 — B3 Notion · 0:46–0:53 · B (carte unité 1)**
- Visuel : carte, la grille s'éclaire sur le tableau résumé.
- Écran : « 1 · Vous donnez les chiffres, l'IA les mots »
- VO : « Premier point : vous donnez les chiffres, l'assistant donne les mots. »

**Scène 6 — B3 Notion · 0:53–1:14 · C**
- Visuel : schéma de flux : « Tableau résumé » → (chiffres seulement) → « Assistant » → « Texte » ; quatre règles en étiquettes qui s'ajoutent : conclusion en premier, chiffres du tableau seulement, « non disponible » si absent, cellule citée.
- Écran : « Chiffres du tableau seulement · "non disponible" plutôt qu'estimer »
- VO : « Collez un tableau résumé, pas un fichier entier. Imposez : conclusion en premier, chiffres du tableau seulement. Et si une donnée manque, écrire non disponible. L'assistant ne doit jamais estimer à votre place. »

**Scène 7 — B3 Notion · 1:14–1:21 · B (carte unité 2)**
- Visuel : carte, repère « 2 », loupe.
- Écran : « 2 · Chaque chiffre renvoie à une cellule »
- VO : « Deuxième point : chaque chiffre renvoie à une cellule. »

**Scène 8 — B3 Notion · 1:21–1:43 · A**
- Visuel : capture de la synthèse avec trois chiffres surlignés (cadre + numéro) ; un trait relie chacun à la cellule correspondante du tableau, un par un, ≥ 2,5 s ; coche sur chaque lien.
- Écran : « Chiffre → cellule : même valeur, même ligne, même colonne »
- VO : « Surlignez chaque chiffre de la synthèse. Retrouvez-le dans le tableau. Même valeur, même ligne, même colonne ? Alors il est bon. Sinon, vous corrigez la phrase. Demandez à l'assistant d'indiquer la cellule d'origine après chaque chiffre. »

**Scène 9 — B3 Notion · 1:43–1:50 · B (carte unité 3)**
- Visuel : carte, repère « 3 ».
- Écran : « 3 · Dire ce que les données ne prouvent pas »
- VO : « Troisième point : dire ce que les données ne prouvent pas. »

**Scène 10 — B3 Notion · 1:50–2:10 · C**
- Visuel : schéma : un tableau où une ligne affiche « 3 réponses » (cadre + point d'interrogation) ; trois questions s'allument : combien de réponses, quelles réponses manquent, quelle période ; une phrase de limites se forme en bas.
- Écran : « Combien de réponses ? · Lesquelles manquent ? · Quelle période ? »
- VO : « Combien de réponses derrière chaque chiffre ? Un village avec trois réponses ne représente pas un village. Y a-t-il des réponses manquantes ? Sur quelle période ? Une bonne synthèse se termine par une phrase de limites. »

**Scène 11 — B4 Application · 2:10–2:34 · A**
- Visuel : enregistrement d'écran : le tableau résumé est collé dans l'assistant avec la consigne ; la synthèse s'affiche, chaque chiffre suivi de sa colonne et de sa ligne.
- Écran : « Consigne + tableau résumé → synthèse avec sources »
- VO : « Zeinabou colle son tableau résumé, avec sa consigne. L'assistant écrit cinq lignes, conclusion en premier. Après chaque chiffre, il cite la colonne et la ligne du tableau. »

**Scène 12 — B4 Application · 2:34–2:57 · A**
- Visuel : enregistrement d'écran : les chiffres sont cochés un par un dans le tableau ; la phrase « le village C est le plus satisfait » est encadrée, un cadre sur « 3 réponses » ; une phrase de limites est ajoutée en fin de synthèse.
- Écran : « Village C : trois réponses seulement · limite ajoutée »
- VO : « Elle contrôle les chiffres un par un. Trois sur trois sont dans le tableau. Mais une phrase dit que le village C est le plus satisfait. Il n'a que trois réponses. Elle ajoute cette limite dans la synthèse. »

**Scène 13 — B4 Application · 2:57–3:12 · G**
- Visuel : carte de consigne sur fond clair, cinq règles numérotées.
- Écran : « Consigne : synthèse sourcée et limites » (consigne complète dessous)
- VO : « La consigne impose cinq règles. Conclusion en premier. Chiffres du tableau seulement. Cellule citée après chaque chiffre. Limites en dernière phrase. Non disponible, plutôt qu'estimer. Recopiez-la depuis la fiche. »

**Scène 14 — B5 Consolidation · 3:12–3:40 · B**
- Visuel : carte question ; trois secondes de silence ; la phrase « a progressé » se scinde en deux chiffres reliés à deux cellules, avec une période.
- Écran : « "La satisfaction a progressé" : que demandez-vous ? »
- VO : « Question. L'assistant écrit : la satisfaction a progressé. Que lui demandez-vous ? [silence 3 s] Les deux chiffres comparés, leur période, et leurs cellules. Sans eux, progresser ne veut rien dire. Un verbe de tendance cache toujours deux chiffres. »

**Scène 15 — B6 Clôture · 3:40–3:48 · B**
- Visuel : promesse affichée mot pour mot, coche ; la loupe se pose sur une cellule.
- Écran : « À la fin de cette leçon, vous saurez faire rédiger une synthèse et vérifier chaque chiffre. »
- VO : « Zeinabou envoie ses cinq lignes à Mariama. Chaque chiffre a une source, et la limite est écrite. »

**Scène 16 — B6 Clôture · 3:48–4:00 · B (carte de rappel)**
- Visuel : carte de rappel, points révélés au rythme de la voix.
- Écran : « 1. L'IA rédige, vous fournissez les chiffres. » « 2. Chaque chiffre renvoie à une cellule. » « 3. Écrivez ce que les données ne prouvent pas. »
- VO : « L'IA rédige, vous fournissez les chiffres. Chaque chiffre renvoie à une cellule. Écrivez ce que les données ne prouvent pas. Contrôlez chaque chiffre de votre synthèse. »

#### Captures à fournir par l'owner

Ordinateur, Google Sheets en français, onglet « Résumé » de la leçon 3 (même tableau fictif). Même assistant d'IA que dans les leçons précédentes.

1. **Scènes 4 et 11 — la synthèse** (durée utile : 30 s). Dans une nouvelle conversation, coller la consigne de la fiche avec le tableau résumé (villages, réponses, moyennes) et le destinataire « la directrice ». Laisser la réponse s'afficher en entier. **Masquer** : nom du compte, historique.
2. **Scènes 8 et 12 — le contrôle** (durée utile : 35 s). Côte à côte : la synthèse (à gauche, texte copié dans un document ou laissé dans l'assistant) et l'onglet « Résumé » (à droite). Pointer chaque chiffre puis sa cellule, lentement. Les traits et cadres sont ajoutés au montage : l'owner ne dessine rien.
3. **Scène 12 — la phrase de limites** (durée utile : 10 s). Dans l'assistant, demander : « Ajoute une dernière phrase sur les limites : le village C n'a que trois réponses. » Laisser la phrase s'afficher. Si la synthèse d'origine contient déjà une limite, le dire : la voix off de la scène 12 sera adaptée.

#### Notes de script

- **Prononciation** : « hallucination » se dit comme en français courant ; il est glosé une fois (scène 4) : « une réponse fausse, donnée avec assurance », puis employé seul si besoin.
- **Pièges** : ne pas présenter l'erreur comme garantie : l'assistant peut très bien ne se tromper sur aucun chiffre ; la leçon enseigne le contrôle, pas la méfiance générale. Ne pas coller le fichier de réponses individuelles : seulement le tableau résumé. Ne pas affirmer qu'« une moyenne sur trois réponses est fausse » : elle est exacte mais peu informative.
- **Termes à gloser** : « hallucination » (scène 4) ; « verbe de tendance » (progresser, baisser : un verbe qui compare deux moments).
- **Pour aller plus loin** : module `data-analysis`, leçon d5 « Raconter une analyse » (message clé d'abord, adapter au public).
- **Adaptation EN** : « hallucination » est le terme courant ; « bottom line up front » n'est pas utilisé dans la voix. **HA / DJE** : « hallucination » : périphrase (« une réponse fausse, dite avec assurance ») ; garder l'exemple des trois réponses, qui parle de lui-même.

### Leçon 5 — Projet final : analyser un fichier en une séance (`xl5`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez mener une analyse complète et déposer votre rapport. »
- **Cas réel (B1 → B6)** : vendredi, Mariama attend le rapport complet sur l'enquête. Zeinabou réserve une séance de travail et déroule les quatre temps du cours. B6 : le rapport est déposé ; Mariama peut refaire chaque calcul sans rien demander. Rappel de la leçon 4 : chaque chiffre renvoie à une cellule.
- **Unités de notion (B3, leçon finale : livrables et critères)** : 1. Les quatre livrables — le fichier nettoyé avec son journal des modifications, un chiffre clé obtenu de deux façons, un graphique lisible sur téléphone, une synthèse avec ses sources et ses limites · 2. Les critères d'évaluation — fiable, vérifiable, lisible, honnête, confidentiel · 3. Quoi déposer, et comment — un rapport d'une page, le fichier nettoyé et anonymisé, aucune donnée personnelle.
- **Démo (B4)** : exemple de projet réussi, de bout en bout : le dossier de Zeinabou. 1. Temps un : copie du fichier, diagnostic, formules testées, journal des modifications. 2. Temps deux : moyenne par village obtenue par formule et par tableau croisé, avec le nombre de réponses. 3. Temps trois : barres triées, titre clair, valeurs affichées. 4. Temps quatre : cinq lignes de synthèse, chaque chiffre relié à sa cellule, phrase de limites. Résultat : un rapport d'une page et un dossier de quatre éléments.
- **Consolidation (B5)** : prédiction. « Un chiffre de la synthèse n'existe dans aucune cellule. Que faites-vous ? » (silence). Réponse : on ne l'envoie pas ; on corrige la phrase ou on la retire ; un chiffre sans cellule n'est pas un chiffre.
- **Consigne à copier** :

```text
Je travaille dans [Excel / Google Sheets], en français, sur un fichier anonymisé. Voici sa structure : titres de colonnes : [liste des titres] ; cinq lignes fictives : [coller cinq lignes sans nom ni numéro].
Guide-moi en quatre temps, un temps à la fois, et attends ma réponse avant de passer au suivant :
1. Nettoyer : liste les problèmes, propose des formules expliquées, puis aide-moi à tenir un journal des modifications.
2. Calculer : aide-moi à obtenir [mon chiffre clé] de deux façons (formule et tableau croisé) et à compter les réponses derrière.
3. Montrer : propose le graphique adapté, un titre qui énonce le message et les réglages à faire.
4. Raconter : à partir de mon tableau résumé, rédige cinq lignes avec la conclusion en premier, chaque chiffre suivi de sa cellule, une phrase de limites, et « non disponible » pour tout ce qui manque.
Je ne te donne aucune donnée personnelle.
```

- **Exercice** : « Déposez votre rapport d'une page » — 1. Choisissez un fichier anonymisé de votre travail (ou le fichier d'exercice) et déroulez les quatre temps, avec la consigne si vous le souhaitez ; vous chronométrez votre séance vous-même : ce n'est pas un objectif de durée. 2. Rassemblez les quatre livrables : fichier nettoyé et journal, chiffre obtenu de deux façons, graphique, synthèse avec ses cellules et ses limites. 3. Déposez-les sur la plateforme, **sans** aucun nom ni numéro. [à vérifier au moment de la production : modalité exacte de dépôt sur la plateforme]
- **Critères d'évaluation** : **fiable** (original conservé, chaque changement noté) ; **vérifiable** (chaque chiffre renvoie à une cellule, chiffre clé obtenu de deux façons) ; **lisible** (graphique compris d'un coup d'œil, lecture possible sur téléphone) ; **honnête** (limites écrites) ; **confidentiel** (aucune donnée personnelle dans ce qui est déposé).
- **Carte de rappel** *(récapitulatif du cours, un point par leçon)* : 1. Collez la structure, jamais les personnes. 2. Posez la question en mots, vérifiez deux fois. 3. Un graphique répond à une question. 4. Chaque chiffre renvoie à une cellule.
- **Quiz** :
  1. Que collez-vous dans l'assistant ? — A) La structure et quelques lignes fictives B) Le fichier complet C) La liste des noms D) Les numéros de téléphone — **Réponse : A**
  2. Comment s'assurer qu'un résultat est juste ? — A) Faire confiance à l'IA B) L'obtenir de deux façons et comparer C) Le refaire avec la même méthode D) Demander à un collègue de le croire — **Réponse : B**
  3. Que fait un bon graphique ? — A) Il décore B) Il utilise un maximum de couleurs C) Il répond à une question, avec un titre qui dit le message D) Il cache l'axe — **Réponse : C**
  4. Que doit pouvoir faire un lecteur de votre synthèse ? — A) Admirer le style B) Deviner d'où viennent les chiffres C) Raccourcir le texte D) Retrouver chaque chiffre dans une cellule — **Réponse : D**
  5. Que ne dépose-t-on jamais ? — A) Le graphique B) Un fichier qui contient des noms ou des numéros C) La synthèse D) Le journal des modifications — **Réponse : B**
- **Marques citées** : Excel, Microsoft ; Google Sheets, Google Drive, Google ; Claude (Anthropic), Gemini (Google), ChatGPT (OpenAI), nommés comme exemples d'assistants d'IA si la voix les reprend.

#### Script v1 (à valider par l'owner)

Durée estimée : 4:00 · Mots de voix off : 370 *(340–460)*

**Scène 1 — B1 Accroche · 0:00–0:04 · E**
- Visuel : illustration à plat : Mariama pose un calendrier sur le bureau de Zeinabou, le vendredi entouré.
- Écran : « Tahoua · cas fictif »
- VO : « Vendredi, Mariama attend le rapport complet. »

**Scène 2 — B1 Accroche · 0:04–0:14 · B**
- Visuel : carte de promesse.
- Écran : « À la fin de cette leçon, vous saurez mener une analyse complète et déposer votre rapport. »
- VO : « À la fin de cette leçon, vous saurez mener une analyse complète et déposer votre rapport. » *(promesse commencée à 0:04, achevée vers 0:11)*

**Scène 3 — B1 Accroche · 0:14–0:20 · E**
- Visuel : même illustration ; la loupe et une cellule apparaissent au-dessus du calendrier.
- Écran : « Leçon 4 : chaque chiffre renvoie à une cellule »
- VO : « Leçon quatre : chaque chiffre renvoie à une cellule. »

**Scène 4 — B2 Cadrage · 0:20–0:46 · A**
- Visuel : capture réelle du dossier Google Drive de Zeinabou : quatre éléments (fichier nettoyé, tableau croisé, graphique, synthèse). Cadre sur le dossier entier. Mention « Données fictives ».
- Écran : « Un dossier · quatre éléments · données fictives »
- VO : « Le titre du cours parle d'une heure. C'est le format de la séance, pas une promesse. Vous gardez la main : l'IA copilote, vous pilotez. Voici le dossier final de Zeinabou : un fichier nettoyé, un graphique, une synthèse. »

**Scène 5 — B3 Notion · 0:46–0:53 · B (carte unité 1)**
- Visuel : carte, la grille s'éclaire en quatre blocs.
- Écran : « 1 · Les quatre livrables »
- VO : « Premier point : les quatre livrables. »

**Scène 6 — B3 Notion · 0:53–1:14 · C**
- Visuel : schéma en quatre temps reliés : Nettoyer → Calculer → Montrer → Raconter ; chaque temps s'allume avec son livrable (fichier et journal, deux méthodes, graphique, synthèse).
- Écran : « Nettoyer · Calculer · Montrer · Raconter »
- VO : « Un : le fichier nettoyé, avec son journal des modifications. Deux : un chiffre clé, obtenu de deux façons. Trois : un graphique lisible sur téléphone. Quatre : une synthèse, avec ses sources et ses limites. Quatre temps, vous les chronométrez vous-même. »

**Scène 7 — B3 Notion · 1:14–1:21 · B (carte unité 2)**
- Visuel : carte, repère « 2 ».
- Écran : « 2 · Les critères d'évaluation »
- VO : « Deuxième point : les critères d'évaluation. »

**Scène 8 — B3 Notion · 1:21–1:43 · C**
- Visuel : liste de contrôle animée : cinq lignes (Fiable · Vérifiable · Lisible · Honnête · Confidentiel), chacune avec une case qui se coche à son tour et une icône (cadenas, loupe, œil, balance, bouclier).
- Écran : « Fiable · Vérifiable · Lisible · Honnête · Confidentiel »
- VO : « Fiable : l'original est conservé, et chaque changement noté. Vérifiable : chaque chiffre renvoie à une cellule. Lisible : un graphique compris d'un coup d'œil. Honnête : les limites sont écrites. Confidentiel : aucun nom, aucun numéro dans ce que vous déposez. »

**Scène 9 — B3 Notion · 1:43–1:50 · B (carte unité 3)**
- Visuel : carte, repère « 3 ».
- Écran : « 3 · Quoi déposer, et comment »
- VO : « Troisième point : quoi déposer, et comment. »

**Scène 10 — B3 Notion · 1:50–2:10 · B**
- Visuel : carte avec trois lignes révélées une à une, la dernière barrée d'une croix.
- Écran : « Un rapport d'une page · Un fichier anonymisé · Aucun nom, aucun numéro »
- VO : « Déposez un rapport d'une page : graphique, synthèse, limites. Joignez le fichier nettoyé, anonymisé. Aucun nom, aucun numéro de téléphone. Si un doute persiste sur une donnée, ne la déposez pas. »

**Scène 11 — B4 Application · 2:10–2:34 · A**
- Visuel : capture réelle : défilement lent du fichier nettoyé et de son journal des modifications, puis du tableau croisé et de la formule côte à côte (résultats identiques, cadre + coche), le nombre de réponses à côté.
- Écran : « Temps 1 : fichier et journal · Temps 2 : formule = tableau croisé »
- VO : « Le projet de Zeinabou, de bout en bout. Temps un : copie du fichier, diagnostic, formules testées, journal des modifications. Temps deux : la moyenne par village, par formule et par tableau croisé, avec le nombre de réponses. »

**Scène 12 — B4 Application · 2:34–2:57 · A**
- Visuel : capture réelle : les barres triées avec le titre-message ; puis la synthèse de cinq lignes avec chaque chiffre relié à sa cellule (traits ajoutés au montage), phrase de limites en bas.
- Écran : « Temps 3 : graphique · Temps 4 : synthèse sourcée et limites »
- VO : « Temps trois : des barres triées, titre clair, valeurs affichées. Temps quatre : cinq lignes de synthèse, chaque chiffre relié à sa cellule, et une phrase de limites. Le tout tient sur une page. »

**Scène 13 — B4 Application · 2:57–3:12 · G**
- Visuel : carte de consigne sur fond clair, texte complet, quatre temps numérotés.
- Écran : « Consigne du projet : guide en quatre temps » (consigne complète dessous)
- VO : « Voici la consigne du projet. Elle vous guide pendant la séance, temps par temps. Recopiez-la depuis la fiche. Déposez ensuite votre rapport à l'endroit indiqué sur la plateforme. »

**Scène 14 — B5 Consolidation · 3:12–3:40 · A**
- Visuel : capture réelle de la synthèse dont un chiffre a été **volontairement modifié pour l'exemple** (mention « chiffre modifié pour l'exemple » en coin) ; recherche du chiffre dans le tableau : aucune cellule ne correspond (cadre + croix). Question en surimpression, trois secondes de silence, puis la phrase corrigée.
- Écran : « Ce chiffre n'existe dans aucune cellule »
- VO : « Question. Un chiffre de la synthèse n'existe dans aucune cellule. Que faites-vous ? [silence 3 s] Vous ne l'envoyez pas. Vous corrigez la phrase, ou vous la retirez. Un chiffre sans cellule n'est pas un chiffre. »

**Scène 15 — B6 Clôture · 3:40–3:48 · B**
- Visuel : promesse affichée mot pour mot, coche ; la grille entière s'éclaire.
- Écran : « À la fin de cette leçon, vous saurez mener une analyse complète et déposer votre rapport. »
- VO : « Le rapport de Zeinabou est déposé. Mariama peut refaire chaque calcul. Pour aller plus loin, le module Analyse de données détaille chaque geste. »

**Scène 16 — B6 Clôture · 3:48–4:00 · B (carte de rappel du cours)**
- Visuel : carte de rappel, quatre points (un par leçon) révélés au rythme de la voix.
- Écran : « 1. Collez la structure, jamais les personnes. » « 2. Posez la question en mots, vérifiez deux fois. » « 3. Un graphique répond à une question. » « 4. Chaque chiffre renvoie à une cellule. »
- VO : « Collez la structure, jamais les personnes. Posez la question en mots, vérifiez deux fois. Un graphique répond à une question. Chaque chiffre renvoie à une cellule. Déposez votre rapport d'une page. »

#### Captures à fournir par l'owner

Ordinateur, Google Sheets et Google Drive en français. Tout réutilise les fichiers des leçons 1 à 4.

1. **Scène 4 — le dossier** (durée utile : 8 s). Dans Google Drive, créer un dossier « Projet Zeinabou (cas fictif) » contenant quatre éléments : « enquete_fictive_NETTOYE », « tableau croise », « graphique (image) », « synthese ». Capture fixe du dossier ouvert. **Masquer** : nom du compte, autres dossiers du Drive.
2. **Scène 11 — fichier, journal et deux méthodes** (durée utile : 20 s). Défilement lent du fichier nettoyé (colonne « Remarques » visible) ; puis, côte à côte, la formule de moyenne selon un critère et le tableau croisé, avec le nombre de réponses.
3. **Scène 12 — graphique et synthèse** (durée utile : 20 s). Les barres triées de la leçon 3 ; la synthèse de la leçon 4 dans un document, chaque chiffre suivi de sa cellule, et la phrase de limites. Les traits de liaison sont ajoutés au montage.
4. **Scène 14 — le chiffre sans cellule** (durée utile : 10 s). Dans la synthèse, modifier **volontairement** un chiffre (par exemple remplacer « 2,4 » par « 2,9 ») ; rechercher « 2,9 » dans l'onglet « Résumé » (Édition → Rechercher, ou Ctrl+F) : aucune correspondance. La mention « chiffre modifié pour l'exemple » est ajoutée au montage et reste visible. Libellés : [à vérifier au moment de la production].

#### Notes de script

- **Prononciation** : « copilote » est glosé à la scène 4 (l'IA aide, vous décidez). « Anonymisé » : sans aucun nom ni numéro qui permette de reconnaître une personne.
- **Pièges** : « une heure » n'est jamais une promesse de durée ni de résultat : la voix dit « format de séance » et « vous les chronométrez vous-même ». Le chiffre de la scène 14 est modifié exprès : la mention est obligatoire à l'écran, pour ne jamais présenter une fausse donnée comme vraie. Le dépôt ne contient aucune donnée personnelle ; si un doute persiste, on ne dépose pas. Modalité de dépôt : [à vérifier au moment de la production].
- **Termes à gloser** : « copilote » (scène 4) ; « anonymisé » (scène 10).
- **Pour aller plus loin** : module `data-analysis`, leçon d6 « Mini-projet données » (rapport complet et vérifiable) ; leçons d1 à d5 pour chaque geste.
- **Adaptation EN** : « co-pilot » ; « one session » plutôt que « one hour » dans la voix si le titre le permet. **HA / DJE** : « copilote » : image de l'aide-chauffeur (il aide, le chauffeur conduit), à valider avec le traducteur. La carte de rappel à quatre points doit rester en quatre phrases courtes.

## 2.6 Captures et éléments à préparer

| Leçon | Élément | Comment l'obtenir | Qui |
|---|---|---|---|
| Toutes | Illustrations de situation (Zeinabou, Mariama ; bureau d'association à Tahoua) | Dessin à plat dans la palette Karatou, visages sans traits réalistes | Claude (HyperFrames) |
| xl1 | Fichier fictif `enquete_fictive.csv` (300 lignes, huit villages, formats volontairement mêlés) | Généré par script selon la spécification de la leçon 1, puis importé dans Google Sheets | Claude + owner |
| xl1 | Compte sur un assistant d'IA gratuit (le même pour tout le cours) et langue du tableur | Choix de l'owner avant la première capture | Owner |
| xl1 | Captures : fichier brut, diagnostic de l'assistant, copie, formule testée sur cinq lignes, colonne « Remarques » | Enregistrement d'écran sur ordinateur ; informations de compte masquées | Owner |
| xl2 | Captures : formule de moyenne selon un critère, tableau croisé dynamique, comparaison des deux résultats, comptage des réponses | Enregistrement d'écran, interface en français ; libellés à vérifier | Owner |
| xl3 | Onglet « Résumé » (huit villages, réponses, moyennes) saisi à la main | Valeurs fournies dans « Captures » de la leçon 3 | Owner |
| xl3 | Captures : camembert à huit parts, barres triées, deux titres, export en image, axe tronqué puis axe à zéro | Enregistrement d'écran ; fenêtre réduite à la largeur d'un téléphone pour le camembert | Owner |
| xl4 | Captures : synthèse de l'assistant, contrôle chiffre par chiffre, phrase de limites | Enregistrement d'écran ; traits et cadres ajoutés au montage | Owner (captures) + Claude (annotations) |
| xl5 | Dossier Drive « Projet Zeinabou (cas fictif) » et chiffre volontairement modifié | Création du dossier avec les fichiers des leçons 1 à 4 ; mention « chiffre modifié pour l'exemple » au montage | Owner |
| xl5 | Modalité de dépôt du projet sur la plateforme | Confirmer le parcours réel avant la production ; adapter la scène 13 | Équipe Karatou + owner |
| Toutes | Libellés réels des menus (Sheets ou Excel, assistant) dans la langue de tournage ; disponibilité des fonctions d'IA intégrées aux tableurs selon la version | Contrôle à l'écran le jour de la capture ; adapter la voix off si besoin | Owner |
