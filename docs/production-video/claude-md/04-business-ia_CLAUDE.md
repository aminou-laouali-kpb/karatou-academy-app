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
| Format | Motion graphics et captures d'écran, voix off clonée de l'owner |
| Owner | Aminou Laouali Abdou |
| Vidéos | 6 vidéos · 3 à 5 min (cible 4:00) chacune |
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
livraison/business-ia/<id>/      fichiers livrés · livraison/business-ia/INTEGRATION.md
```

`<id>` est l'identifiant de la leçon (`bz1`, `bz2`…). Langues : `fr`, `en`, `ha`, `dje`.

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
| Format | Motion graphics + captures d'écran, voix off (voix clonée de l'owner) |
| Owner / voix | Aminou Laouali Abdou — nom complet et titre exact demandés au premier lancement |
| Rubrique | Entrepreneuriat |
| Public | Entrepreneurs et commerçants d'Afrique de l'Ouest qui lancent ou font grandir une petite activité : services, restauration, couture, transformation agroalimentaire, cosmétiques naturels, réparation de téléphones. Souvent sur téléphone uniquement, sans formation en gestion. |
| Slug du module (provisoire) | `business-ia` |
| Préfixe des leçons | `bz` (`bz1` … `bz6`) |
| Nombre de vidéos | 6 (dont la dernière = projet final certifiant) |
| Durée par vidéo | 3–5 min (cible 4:00) |
| Langues | FR (référence) · EN · HA · DJE |
| Prérequis | Un smartphone avec WhatsApp ; un compte gratuit sur un assistant d'IA (Gemini, ChatGPT ou Claude) ; un compte Google gratuit (Google Sheets, Google Docs) ; l'application WhatsApp Business, gratuite, installée en leçon 4, idéalement sur un numéro réservé à l'activité ; un cahier et un stylo. Savoir envoyer une photo et copier-coller un texte. Aucune connaissance en gestion. |
| Promesse du cours | « Vous saurez tester une idée, la chiffrer, la vendre sur WhatsApp et suivre votre caisse, avec l'IA comme assistant. » |
| Positionnement | Le parcours complet d'un petit commerce, de la première idée à la caisse de la semaine, sur téléphone et avec des outils gratuits. L'IA y est un assistant de réflexion, de calcul et de rédaction : les décisions, les chiffres et la relation client restent ceux de l'entrepreneur. Le cours applique sans les refaire le module `intelligence-artificielle` (bases, consignes) et `data-analysis` (tableur). Il effleure les visuels et renvoie, pour les photos de produits et les affiches, aux cours 5 « Créer visuels et vidéos avec l'IA » et 9 « L'IA pour les tâches créatives » ; au cours 2 « Agents IA » pour un agent qui répond seul ; au cours 11 « Excel + IA » pour aller plus loin dans le tableur ; au cours 10 « Arnaques, deepfakes et sécurité numérique » pour les fraudes au paiement mobile. Tous les cas, personnes, commerces et montants sont fictifs et annoncés comme tels. |
| Fil rouge | Six entrepreneurs fictifs de six pays, un par leçon, chacun montrant une étape : **Cheikh** (Thiès, Sénégal, repassage et livraison de linge, L1), **Aya** (Korhogo, Côte d'Ivoire, baume et savon au karité, L2), **Fatimata** (Ouagadougou, Burkina Faso, zoom-koom et jus de bissap, L3), **Sènami** (Cotonou, Bénin, couture sur mesure, L4), **Komi** (Lomé, Togo, réparation de téléphones et accessoires, L5), **Hadiza** (Niamey, Niger, repas pour baptêmes et réunions, L6). En leçon 6, les cinq premiers reviennent comme exemples de pièces du dossier, et Hadiza assemble le sien de bout en bout. Personnages secondaires des contre-exemples : **Bakary** (Ségou, Mali, L1), **Mamadou** (Conakry, Guinée, L3), **Akosua** (Kumasi, Ghana, L4), **Sani** (Kano, Nigeria, L6). Monnaies : franc CFA (FCFA) pour les six pays de l'UEMOA, franc guinéen (GNF) en Guinée, naira au Nigeria ; tous les montants sont fictifs. |
| Marques citées | WhatsApp, WhatsApp Business (Meta) · Gemini, Google Sheets, Google Docs, Google (Google) · ChatGPT (OpenAI) · Claude (Anthropic) · Business Model Canvas (Strategyzer, mention à l'écran seulement) |

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
| 1 | `bz1` | Trouver une idée et la tester avant d'investir | « À la fin de cette leçon, vous saurez tester une idée auprès de vrais clients, avant d'investir. » | Thiès (Sénégal) : Cheikh veut collecter et repasser les chemises des employés de bureau ; avant d'acheter une moto et un fer professionnel, il veut une preuve | Gemini : questions sur des faits passés → synthèse de cinq entretiens anonymisés → test de précommande daté | 4:00 |
| 2 | `bz2` | L'étude de marché express, sans chiffres inventés | « À la fin de cette leçon, vous saurez faire une étude de marché express, avec des sources vérifiées. » | Korhogo (Côte d'Ivoire) : Aya veut savoir qui vend déjà des produits au karité, à quel prix, et selon quelles règles | Gemini avec recherche web : tableau de quatre concurrents → règles et sources → liens ouverts → fiche « je sais / je suppose / je vérifie » | 4:00 |
| 3 | `bz3` | Votre projet sur une page, chiffres compris | « À la fin de cette leçon, vous saurez résumer et chiffrer votre projet sur une seule page. » | Ouagadougou (Burkina Faso) : l'agence de microfinance demande à Fatimata son projet sur une page, chiffres compris | Gemini : page en neuf cases → coût de revient, marge et seuil vérifiés à la calculatrice → questions d'un agent de crédit → Google Docs | 4:00 |
| 4 | `bz4` | Vendre sur WhatsApp Business avec l'aide de l'IA | « À la fin de cette leçon, vous saurez préparer votre WhatsApp Business pour vendre, avec l'aide de l'IA. » | Cotonou (Bénin) : les commandes de Sènami, couturière, arrivent en désordre, la nuit, et l'une a été oubliée | Gemini rédige profil, fiches, messages et réponses rapides → configuration de WhatsApp Business → test depuis un second téléphone | 4:00 |
| 5 | `bz5` | Suivre ventes, stock et caisse chaque semaine | « À la fin de cette leçon, vous saurez suivre ventes, stock et caisse chaque semaine, avec l'IA. » | Lomé (Togo) : Komi, réparateur de téléphones, ne sait pas s'il gagne de l'argent ; sa caisse ne tombe jamais juste | Google Sheets (saisie, stock, somme) → point de la semaine avec Gemini → comparaison des totaux → commande d'accessoires | 4:00 |
| 6 | `bz6` | Projet final : votre dossier de lancement | « À la fin de cette leçon, vous saurez bâtir votre dossier de lancement et son plan d'action. » | Niamey (Niger) : l'agence de microfinance attend le dossier complet de Hadiza ; ses pièces sont éparpillées | Dossier de Hadiza page par page → plan de 30 jours avec Gemini → relecture selon les quatre critères → corrections → PDF | 4:00 |

## 2.4 Direction artistique du cours

- **Motif récurrent : « la carte des ateliers ».** Une carte simplifiée de l'Afrique de l'Ouest, en aplats clairs de la palette Karatou, sert de fond aux cartes de titre et aux transitions d'entrée de B3. À chaque leçon, une épingle s'allume sur la ville du persona et une petite vignette d'atelier s'y ancre. En leçon 6, les six épingles sont allumées ensemble et reliées par un trait fin qui converge vers le dossier de Hadiza. Contours des pays exacts et simplifiés, noms de pays écrits en entier ; pas de drapeaux, pas de frontières en relief, pas de carte stylisée « en forme de masque ».
- **Personas (type E, B1 seulement).** Illustrations à plat, formes simples, aplats de la palette Karatou, ombres en une seule teinte, visages lisibles mais sans traits réalistes. Aucun photoréalisme généré, aucune ressemblance avec une personne réelle, aucune photo retouchée. Diversité réelle de carnations, d'âges et de silhouettes, sans exagération de traits. Tenues du quotidien, telles qu'on les voit en ville : chemise, pagne ou wax, tee-shirt, blouse de travail ; ni costume « folklorique », ni boubou d'apparat sans raison. Chaque persona garde un signe distinctif constant d'une leçon à l'autre, pour être reconnu en leçon 6 : Cheikh, un fer à repasser et une chemise sur cintre ; Aya, des pots de baume à couvercle orange ; Fatimata, une glacière bleue et des bouteilles ; Sènami, un mètre ruban autour du cou ; Komi, une petite trousse d'outils et une loupe ; Hadiza, une grande marmite et un carnet de commandes. Fiche de référence de chaque persona (face, trois quarts, couleurs) dessinée une fois en début de production et réutilisée.
- **Repère du pays, sans cliché.** Sur la première scène de chaque leçon : une étiquette discrète en haut à gauche, « Ville · Pays » (ex. « Thiès · Sénégal »), plus la mini-carte de la région avec l'épingle. Le décor dit la ville par des détails ordinaires et justes : une rue commerçante, un atelier, un marché couvert, une gare routière, un bureau ; enseignes sans marque réelle. À proscrire : baobab au coucher de soleil, animaux de savane, masques, tambours, huttes, motifs « tribaux » ou police d'écriture « africaine », scènes de pauvreté décoratives. Personnages secondaires (Bakary, Mamadou, Akosua, Sani) : même style, plus petits, avec la même étiquette « Ville · Pays ».
- **Monnaies et montants.** Montant toujours suivi de la monnaie : « FCFA » pour le Sénégal, la Côte d'Ivoire, le Burkina Faso, le Bénin, le Togo, le Niger et le Mali ; « GNF » (franc guinéen) pour la Guinée ; « naira » pour le Nigeria. Un badge « Montants fictifs » reste visible en coin d'écran tant qu'un montant est affiché.
- **Trois schémas types réutilisés (type C).**
  1. La croix et la coche : une question ou un geste mauvais barré (croix), le bon coché (coche) — leçons 1, 2, 4, 6.
  2. Le calcul posé ligne à ligne : chaque terme entre au rythme de la voix, le résultat reste figé au moins 2,5 s — leçons 2, 3, 5.
  3. La pile du dossier : des pièces (page, preuves, vitrine, caisse, plan) qui s'empilent en un seul document — leçons 3 et 6.
- **Iconographie.** Loupe (vérifier une source ou un total), cadenas (donnée personnelle qui reste chez vous), calculatrice (refaire le calcul), étiquette (classer une commande), calendrier (plan daté). Toujours doublée d'un mot ou d'une forme, jamais de couleur seule.
- **Fixe d'une leçon à l'autre.** La carte des ateliers, la mise en page des cartes d'unité (numéro + titre ≤ 8 mots), la carte de consigne sur fond clair, la carte de rappel à quatre points, le badge « Montants fictifs », la croix et la coche.
- **Change d'une leçon à l'autre.** Le persona, sa ville et son métier ; l'outil montré (assistant, WhatsApp Business, Google Sheets, Google Docs) ; la pièce qui rejoint la pile du dossier.
- **Captures (type A).** Toujours de vraies captures fournies par l'owner, jamais d'interface redessinée ; comptes de démonstration ; aucune donnée réelle.
- **Musique.** Aucune sous la voix. Un court habillage sonore (un « clic » d'épingle sur la carte) sur les cartes de titre et la carte de rappel uniquement.

## 2.5 Les leçons

### Leçon 1 — Trouver une idée et la tester avant d'investir (`bz1`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez tester une idée auprès de vrais clients, avant d'investir. »
- **Cas réel (B1 → B6)** : Cheikh, 28 ans, repasse le linge de ses voisins à Thiès, au Sénégal (cas fictif). Il pense que les employés des bureaux du centre-ville n'ont pas le temps de repasser en semaine. Il voudrait collecter leurs chemises le lundi et les rapporter repassées le mercredi. Avant d'acheter une moto et un fer professionnel, il prépare cinq questions sur leurs habitudes récentes, interroge cinq employés, fait trier ses notes par l'IA et propose dix forfaits « cinq chemises » payés d'avance. En B6, les dix forfaits partent en deux jours et six clients redemandent pour la semaine suivante : l'idée a passé son premier test sans dépense lourde.
- **Unités de notion (B3)** : 1. Partir d'un problème, pas d'un produit — un client paie pour régler un problème qu'il a déjà · 2. Interroger sur le passé, pas l'avenir — les faits récents disent plus que les intentions · 3. Tester petit avant d'investir — précommande ou petit lot ; un vrai signal coûte quelque chose au client · 4. L'IA prépare, vous écoutez — elle prépare les questions et trie les notes, jamais avec un nom ou un numéro.
- **Démo (B4)** : Gemini (application, compte « Karatou Démo »). 1. Coller la consigne, idée et clients remplis. 2. Lire les cinq questions proposées ; en remplacer une par celle de Cheikh : « Dimanche dernier, qui a repassé vos chemises ? ». 3. Saisir les notes fictives des cinq entretiens (ci-dessous). 4. Obtenir le tableau de synthèse : problème cité, solution actuelle, signal d'achat. 5. Demander un test faisable en sept jours ; Cheikh fixe lui-même le nombre (dix forfaits) et la date (collecte lundi). Résultat attendu à l'écran : un tableau de cinq lignes où quatre clients citent le manque de temps en semaine, puis une proposition de précommande. Notes fictives à saisir : « Client 1 — comptable : repasse lui-même le dimanche soir, une heure ; fatigué. Client 2 — agent d'accueil : sa sœur repasse ; pas toujours disponible. Client 3 — commercial : pressing du centre-ville ; rend souvent en retard. Client 4 — enseignant : repasse le matin avant de partir ; arrive en retard. Client 5 — gardien : porte des tenues qui ne se repassent pas ; pas intéressé. » [à vérifier au moment de la production : réponse réelle de Gemini ; adapter la voix off si le tableau diffère.]
- **Consolidation (B5)** : prédiction. À Ségou, au Mali, Bakary demande à dix voisins s'ils achèteraient du pain dans sa boutique ; les dix disent oui ; il commande soixante pains. Question : combien en vend-il ? Réponse : douze, car ses voisins achètent déjà leur pain sur la route du travail ; la bonne question portait sur hier.
- **Consigne à copier** :

```text
Tu es un conseiller en création d'entreprise en Afrique de l'Ouest. Je veux tester une idée avant d'investir.
Mon idée : [votre produit ou service, en une phrase].
Mes clients visés : [qui, où, quand — ex. employés de bureau du centre-ville de ma ville, en semaine].
Le problème que je crois résoudre : [votre hypothèse].

1. Propose 5 questions pour des entretiens de 10 minutes. Elles portent sur des faits passés (« La dernière fois que… »), jamais sur l'avenir (« Achèteriez-vous… ? »).
2. Quand je te donnerai mes notes (Client 1 à Client 5, sans nom ni numéro), fais un tableau : problème cité, solution utilisée aujourd'hui, signal d'achat.
3. Propose un test de vente simple, faisable en 7 jours avec un petit budget.
Réponds en français simple, en phrases courtes.
```

- **Exercice** : « Menez cinq entretiens clients cette semaine » — 1. Écrivez votre idée en une phrase : pour qui, quel problème, quelle solution. 2. Avec la consigne, préparez cinq questions sur des faits passés ; supprimez toute question du type « Achèteriez-vous… ? ». 3. Interrogez cinq clients possibles, dix minutes chacun ; notez leurs mots exacts, sans nom ni numéro. 4. Faites synthétiser vos notes par l'IA, lancez un test de sept jours (précommande ou petit lot) et notez le résultat : il servira au projet final.
- **Carte de rappel** : 1. Tester une idée auprès de vrais clients, avant d'investir 2. Demander des faits passés, pas des promesses 3. Un vrai signal coûte quelque chose au client 4. Jamais de nom ni de numéro dans une consigne
- **Quiz** :
  1. Avant d'acheter du matériel pour une nouvelle idée, que faites-vous d'abord ? — A) Vous demandez à l'IA si l'idée est bonne B) Vous testez l'idée auprès de vrais clients C) Vous imprimez des cartes de visite D) Vous empruntez de l'argent — **Réponse : B**
  2. Quelle question donne l'information la plus fiable ? — A) « Prendriez-vous mon service de repassage ? » B) « Aimez-vous les chemises bien repassées ? » C) « Dimanche dernier, qui a repassé vos chemises ? » D) « Mon idée vous plaît-elle ? » — **Réponse : C**
  3. Lequel de ces retours est un vrai signal d'achat ? — A) « Bonne idée, bravo ! » B) Un cœur sous votre statut C) « Je vous dirai » D) Un forfait payé d'avance — **Réponse : D**
  4. Pour faire synthétiser vos entretiens par l'IA, que mettez-vous dans la consigne ? — A) Les notes, avec « Client 1 », « Client 2 »… B) Les noms et numéros des clients C) Les photos des clients D) Les adresses exactes des clients — **Réponse : A**
  5. Pourquoi un assistant d'IA ne peut-il pas dire seul si votre idée est bonne ? — A) Il ne comprend pas le français B) Il refuse les questions sur le commerce C) Il ne répond qu'en anglais D) Il ne connaît ni vos clients ni votre ville — **Réponse : D**
- **Marques citées** : Gemini (Google), ChatGPT (OpenAI), Claude (Anthropic)

#### Script v1 (à valider par l'owner)

Durée estimée : 3:55 · Mots de voix off : 448 *(340–460)*

**Scène 1 — B1 Accroche · 0:00–0:02 · E**
- Visuel : carte des ateliers ; l'épingle s'allume sur Thiès ; fondu vers l'illustration de Cheikh dans son petit atelier, fer à la main, chemises sur cintres.
- Écran : « Thiès · Sénégal · cas fictif »
- VO : « Thiès, au Sénégal. »

**Scène 2 — B1 Accroche · 0:02–0:12 · B**
- Visuel : carte de promesse, texte révélé au rythme de la voix.
- Écran : « Tester une idée auprès de vrais clients, avant d'investir »
- VO : « À la fin de cette leçon, vous saurez tester une idée auprès de vrais clients, avant d'investir. »

**Scène 3 — B1 Accroche · 0:12–0:25 · E**
- Visuel : même illustration ; une bulle de pensée montre un immeuble de bureaux, puis une moto et un fer professionnel avec un point d'interrogation.
- Écran : « Moto + fer professionnel ? D'abord, une preuve »
- VO : « Cheikh repasse le linge de ses voisins. Il veut servir les bureaux du centre-ville. Avant d'acheter une moto et un fer professionnel, il veut une preuve. »

**Scène 4 — B2 Cadrage · 0:25–0:43 · A**
- Visuel : capture réelle de Gemini sur téléphone : question « Mon idée de repassage pour les bureaux est-elle bonne ? » puis réponse ; cadre sur une phrase encourageante.
- Écran : « Un assistant va souvent dans votre sens »
- VO : « Beaucoup demandent d'abord à l'IA si leur idée est bonne. La réponse encourage Cheikh. Un assistant va souvent dans votre sens, sans connaître vos clients. Seuls vos futurs clients jugent votre idée, par leurs actes. »

**Scène 5 — B3 Notion · 0:43–0:48 · B (carte unité 1)**
- Visuel : carte d'unité, numéro « 1 » ; l'épingle de Thiès reste visible en coin.
- Écran : « 1 · Partir d'un problème, pas d'un produit »
- VO : « Premier principe : partez d'un problème, pas d'un produit. »

**Scène 6 — B3 Notion · 0:48–1:04 · C**
- Visuel : schéma « problème → produit » : une horloge barrée « pas le temps en semaine » mène, par une flèche, au service « collecte et repassage » ; la mention « hypothèse » s'affiche sous l'horloge.
- Écran : « Problème : pas le temps de repasser en semaine · hypothèse »
- VO : « Un client paie pour régler un problème qu'il a déjà. Pour Cheikh, le problème supposé : pas le temps de repasser en semaine. C'est une hypothèse, c'est-à-dire une idée encore à vérifier. »

**Scène 7 — B3 Notion · 1:04–1:09 · B (carte unité 2)**
- Visuel : carte d'unité, numéro « 2 ».
- Écran : « 2 · Interroger sur le passé, pas l'avenir »
- VO : « Deuxième principe : interrogez sur le passé, pas sur l'avenir. »

**Scène 8 — B3 Notion · 1:09–1:29 · C**
- Visuel : schéma croix et coche : la question sur l'avenir apparaît, puis se barre (croix) ; la question sur la semaine passée apparaît, cochée.
- Écran : « ✗ Vous prendriez ce service ? → ✓ Dimanche dernier, qui a repassé vos chemises ? »
- VO : « À la question “Vous prendriez ce service ?”, on répond souvent oui, par politesse. Demandez plutôt ce qui s'est passé la dernière fois. Qui a repassé vos chemises dimanche dernier ? Le passé montre des habitudes ; l'avenir, seulement des intentions. »

**Scène 9 — B3 Notion · 1:29–1:42 · B (carte unité 3)**
- Visuel : carte d'unité, numéro « 3 », trois lignes révélées une à une avec une petite icône chacune (pièce de monnaie, horloge, calendrier).
- Écran : « 3 · Tester petit avant d'investir » « Précommande · petit lot » « Un signal qui coûte »
- VO : « Troisième principe : testez petit avant d'investir. Une précommande, ou un petit lot. Un vrai signal coûte quelque chose au client : de l'argent, du temps, un rendez-vous. »

**Scène 10 — B3 Notion · 1:42–2:04 · A (carte unité 4 en surtitre)**
- Visuel : surtitre « 4 · L'IA prépare, vous écoutez » pendant 2,5 s, puis capture réelle de Gemini : une consigne où les notes commencent par « Client 1 », « Client 2 » ; cadre sur « Client 1 », puis cadenas « pas de nom, pas de numéro ».
- Écran : « 4 · L'IA prépare, vous écoutez · Client 1, Client 2… jamais de nom »
- VO : « Quatrième principe : l'IA prépare, vous écoutez. Elle prépare vos questions, puis trie vos notes. Vous lui donnez une consigne : une demande écrite et précise. En anglais, on dit prompt. Jamais de nom ni de numéro de client : écrivez Client un, Client deux. »

**Scène 11 — B4 Application · 2:04–2:11 · G**
- Visuel : carte de consigne, fond clair, version abrégée de la consigne de la fiche.
- Écran : « Consigne de Cheikh — texte complet sous la vidéo »
- VO : « Voici la consigne de Cheikh. Elle est écrite sous la vidéo, prête à copier. »

**Scène 12 — B4 Application · 2:11–2:34 · A**
- Visuel : capture réelle de Gemini : la consigne collée, les cinq questions ; annotation « Étape 1 », puis cadre sur la question remplacée (« Étape 2 »).
- Écran : « Étape 1 · Étape 2 · Dimanche dernier, qui a repassé vos chemises ? »
- VO : « Étape un : Cheikh colle la consigne dans Gemini. Gemini propose cinq questions sur les habitudes de la semaine. Cheikh en remplace une par la sienne : qui a repassé vos chemises dimanche dernier ? Étape deux : il mène cinq entretiens, à la pause de midi. »

**Scène 13 — B4 Application · 2:34–2:59 · A**
- Visuel : capture réelle de Gemini : notes « Client 1 » à « Client 5 », puis tableau de synthèse ; cadre sur la colonne « problème cité », puis sur la proposition de précommande ; la carte finale affiche le test daté.
- Écran : « Étape 3 · Étape 4 · 10 forfaits payés d'avance · collecte lundi »
- VO : « Étape trois : il tape ses notes, de Client un à Client cinq. Gemini dresse un tableau : problème, solution actuelle, signal d'achat. Quatre clients sur cinq manquent de temps en semaine. Étape quatre : Gemini suggère une précommande. Cheikh fixe lui-même le nombre et la date : dix forfaits payés d'avance, collectés lundi. »

**Scène 14 — B5 Consolidation · 2:59–3:26 · C**
- Visuel : petite illustration de Bakary devant sa boutique, étiquette « Ségou · Mali » ; puis compteur animé : 10 « oui » → 60 pains → (silence) → 12 vendus ; la bonne question s'affiche, cochée.
- Écran : « Ségou · Mali · 10 « oui » → 60 pains → 12 vendus »
- VO : « À Ségou, au Mali, Bakary tient une boutique. Il demande à dix voisins s'ils achèteraient son pain. Les dix disent oui. Il commande soixante pains. Combien en vend-il ? »
- Silence : 2 s
- VO : « Douze. Ses voisins achètent déjà leur pain sur la route du travail. Il fallait demander où ils l'avaient acheté hier. »

**Scène 15 — B6 Clôture · 3:26–3:55 · B (carte de rappel)**
- Visuel : carte de rappel, points révélés au rythme de la voix ; puis vignette de Cheikh, dix forfaits cochés, et titre de l'exercice.
- Écran : « 1. Tester une idée auprès de vrais clients, avant d'investir » « 2. Demander des faits passés, pas des promesses » « 3. Un vrai signal coûte quelque chose au client » « 4. Jamais de nom ni de numéro dans une consigne »
- VO : « Retenez quatre points. Tester une idée auprès de vrais clients, avant d'investir. Demander des faits passés, pas des promesses. Un vrai signal coûte quelque chose au client. Jamais de nom ni de numéro dans une consigne. Cheikh a vendu ses dix forfaits en deux jours. Six clients redemandent déjà. À vous maintenant. Menez cinq entretiens clients cette semaine. »

#### Captures à fournir par l'owner

1. **Gemini, question naïve (scène 4)** — téléphone, application Gemini, compte « Karatou Démo », thème clair. Taper exactement : « Mon idée de repassage et de livraison de chemises pour les employés de bureau, à Thiès, est-elle bonne ? ». Attendre la réponse complète, défiler lentement. Durée utile : 20 s. 2 ou 3 essais ; garder la réponse la plus encourageante, non retouchée. Masquer : nom du compte, historique.
2. **Consigne avec « Client 1 », « Client 2 » (scène 10)** — même téléphone. Coller une consigne courte : « Voici mes notes d'entretien. Client 1 — comptable : repasse lui-même le dimanche soir. Client 2 — agent d'accueil : sa sœur repasse. Quels problèmes reviennent ? ». Durée utile : 12 s. Masquer : nom du compte.
3. **Démo B4 (scènes 12–13)** — même téléphone. Coller la consigne de la fiche (idée : « collecter et repasser les chemises des employés de bureau du centre-ville de Thiès » ; clients : « employés de bureau du centre-ville, en semaine » ; problème : « pas le temps de repasser en semaine »). Lire les questions ; taper : « Remplace la question 3 par : Dimanche dernier, qui a repassé vos chemises ? ». Puis coller les notes fictives de la fiche, puis taper : « Propose un test de vente faisable en 7 jours. ». Durée utile : 60 s au total. Noter la date de la capture. Masquer : nom du compte.

#### Notes de script

- Prononciation : Thiès se dit « Tchièss » ; Ségou « Sé-gou » ; Cheikh « Chèkh ». Gemini se dit « Djé-mi-ni ».
- « Prompt » est dit une fois, en anglais, puis remplacé par « consigne » dans tout le cours. « Hypothèse » est glosée dans la scène 6.
- « Client un », « Client deux » : dits en toutes lettres, affichés « Client 1 », « Client 2 ».
- Forfait « cinq chemises » : aucun prix n'est donné dans cette leçon, volontairement.
- Adaptation EN : « prompt » sans glose ; « ironing and pick-up service ». HA et DJE : rendre « consigne » par l'équivalent local d'« instruction écrite », à valider par le relecteur natif ; la question « Vous prendriez ce service ? » doit rester une question polie sur l'avenir. Thiès, Ségou : ne se traduisent pas.

### Leçon 2 — L'étude de marché express, sans chiffres inventés (`bz2`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez faire une étude de marché express, avec des sources vérifiées. »
- **Cas réel (B1 → B6)** : Aya, 34 ans, à Korhogo, en Côte d'Ivoire (cas fictif), transforme le beurre de karité en baume parfumé et en savon. Trois salons de coiffure lui ont déjà précommandé des pots. Elle veut savoir qui vend déjà ces produits, à quel prix, avec quels défauts, et quelles règles encadrent la vente de cosmétiques artisanaux. Elle relève dans un carnet les prix de quatre vendeurs (A à D), fait comparer ses notes par l'IA, lui fait chercher les règles avec leurs sources, ouvre chaque lien et trie ce qui est sûr, supposé ou à vérifier. En B6, sa place est claire : personne ne livre aux salons un baume étiqueté ; une règle reste à confirmer auprès de la chambre de commerce.
- **Unités de notion (B3)** : 1. Trois questions : qui, où, combien — votre marché, c'est votre zone et les clients que vous pouvez servir · 2. Le terrain d'abord : relever les prix — visiter, noter, compter les clients d'un concurrent pendant une heure · 3. L'IA cherche, vous vérifiez la source — organisme, date, lien, sinon le chiffre ne compte pas · 4. Estimer avec des hypothèses écrites — un calcul simple dont chaque nombre est une supposition à vérifier.
- **Démo (B4)** : Gemini avec recherche web (application, compte « Karatou Démo »), puis navigateur. 1. Coller la consigne avec les notes de terrain fictives (ci-dessous). 2. Obtenir le tableau comparatif des quatre vendeurs. 3. Demander les règles applicables à la vente de cosmétiques artisanaux en Côte d'Ivoire, avec organisme, date et lien de chaque source. 4. Ouvrir chaque lien ; écarter ce qui est ancien, sans auteur ou hors sujet ; garder les pages officielles datées ; noter « À confirmer auprès de la chambre de commerce » quand les sources manquent ou divergent. 5. Demander la fiche finale en trois parties. Résultat attendu à l'écran : le tableau, puis la fiche « Ce que je sais (avec sources) / Ce que je suppose / Ce que je dois vérifier ». Notes fictives à saisir (montants fictifs, FCFA) : « Vendeur A — vendeuse au grand marché : beurre de karité brut en boule, 500 F ; pas d'étiquette ; pas de livraison. Vendeur B — boutique de cosmétiques : crèmes importées, de 2 500 à 5 000 F ; propre, chère ; pas de livraison. Vendeur C — salon de coiffure : baume maison sans étiquette, 1 500 F ; vendu seulement aux clientes du salon. Vendeur D — revendeuse en ligne d'une autre ville : baume parfumé, 3 000 F plus livraison ; délai d'une semaine. » [à vérifier au moment de la production : affichage des sources dans Gemini ; s'il est peu lisible, faire l'étape 3 dans le mode de recherche avec IA de Google. Adapter la voix off des étapes 3 et 4 aux sources réellement obtenues, sans jamais présenter une règle non confirmée comme acquise.]
- **Consolidation (B5)** : prédiction. Un assistant donne, sans aucun lien, le nombre de pots de karité vendus chaque mois dans le pays : que faire de ce chiffre ? Réponse : ne pas l'utiliser ; demander la source ; à défaut, écrire « inconnu » et faire sa propre estimation avec des hypothèses écrites.
- **Consigne à copier** :

```text
Tu es un conseiller en étude de marché pour les petits commerces en Afrique de l'Ouest.
Mon activité : [produit ou service], à [ville, pays].
Mes clients visés : [qui, où, quand].
Mes notes de terrain, concurrents nommés A, B, C… (aucun nom réel) : [prix, format, horaires, points forts, points faibles].

1. Fais un tableau comparatif des concurrents à partir de mes notes. N'invente rien : si une information manque, écris « inconnu ».
2. Cherche sur le web [votre question : règles pour vendre mon produit dans mon pays, saison de forte demande, fournisseurs…]. Pour chaque source, donne l'organisme, la date et le lien.
3. Ne donne aucun chiffre sans source. Si tu n'en trouves pas, dis-le.
4. Termine par une fiche en 3 parties : ce que je sais (avec sources), ce que je suppose, ce que je dois vérifier sur le terrain.
Réponds en français simple.
```

- **Exercice** : « Comparez trois concurrents et vérifiez deux sources » — 1. Visitez au moins trois concurrents ; notez prix, format, horaires, points forts et points faibles ; comptez pendant une heure les clients de l'un d'eux. 2. Avec la consigne, faites dresser le tableau comparatif et posez une question de recherche utile (règle, saison, fournisseur), sources exigées. 3. Ouvrez au moins deux sources : notez l'organisme, la date et ce que vous gardez. 4. Rédigez votre fiche « je sais / je suppose / je vérifie » et une estimation avec ses hypothèses écrites.
- **Carte de rappel** : 1. Faire une étude de marché express, avec des sources vérifiées 2. Relever prix et clients chez trois concurrents 3. Pas de source, pas de chiffre 4. Estimer avec des hypothèses écrites
- **Quiz** :
  1. Pour un petit commerce, une étude de marché express répond d'abord à quoi ? — A) À la taille du marché mondial B) Qui achète, où et quand, et combien C) Au nombre d'habitants du pays D) Aux tendances des réseaux sociaux — **Réponse : B**
  2. Aya veut connaître ses concurrents. Que fait-elle en premier ? — A) Elle demande un rapport complet à l'IA B) Elle copie des prix trouvés sur internet C) Elle relève prix et clients chez des vendeurs de sa ville D) Elle attend la fin du mois — **Réponse : C**
  3. Un assistant vous donne un chiffre précis, sans aucun lien. Que faites-vous ? — A) Vous demandez la source ; sans source, vous écrivez « inconnu » B) Vous l'utilisez s'il paraît logique C) Vous l'arrondissez D) Vous le mettez dans votre dossier — **Réponse : A**
  4. Huit salons, quarante clientes par semaine chacun ; une cliente sur dix achète un pot. Combien de pots par semaine (exemple fictif) ? — A) 320 B) 80 C) 32 D) 4 — **Réponse : C**
  5. Quelle source gardez-vous en priorité ? — A) Un message transféré sur WhatsApp B) Une page officielle datée, d'un organisme connu C) Un article sans date ni auteur D) Une réponse de l'IA sans lien — **Réponse : B**
- **Marques citées** : Gemini, Google (Google), ChatGPT (OpenAI), Claude (Anthropic), WhatsApp (Meta, quiz)

#### Script v1 (à valider par l'owner)

Durée estimée : 3:59 · Mots de voix off : 457 *(340–460)*

**Scène 1 — B1 Accroche · 0:00–0:03 · E**
- Visuel : carte des ateliers ; l'épingle s'allume sur Korhogo ; fondu vers l'illustration d'Aya dans son atelier, pots de baume à couvercle orange alignés.
- Écran : « Korhogo · Côte d'Ivoire · cas fictif »
- VO : « Korhogo, en Côte d'Ivoire. »

**Scène 2 — B1 Accroche · 0:03–0:12 · B**
- Visuel : carte de promesse.
- Écran : « Faire une étude de marché express, avec des sources vérifiées »
- VO : « À la fin de cette leçon, vous saurez faire une étude de marché express, avec des sources vérifiées. »

**Scène 3 — B1 Accroche · 0:12–0:26 · E**
- Visuel : même illustration ; trois petits salons de coiffure cochés au-dessus d'Aya, puis trois points d'interrogation : « Qui ? », « Quel prix ? », « Quelles règles ? ».
- Écran : « 3 salons ont précommandé · Qui vend déjà ? À quel prix ? »
- VO : « Vous savez tester une idée. Aya l'a fait : trois salons ont précommandé son baume au karité. Qui vend déjà ce produit, à quel prix, selon quelles règles ? »

**Scène 4 — B2 Cadrage · 0:26–0:43 · B**
- Visuel : un gros rapport illustré se barre (croix) ; il est remplacé par un petit carnet ouvert avec trois lignes (coche).
- Écran : « Un rapport épais ? Non : trois questions, dans votre zone »
- VO : « On imagine une étude de marché comme un rapport épais. Pour un petit commerce, trois questions suffisent, posées dans votre zone. Et l'IA peut inventer un chiffre, avec un ton très sûr. »

**Scène 5 — B3 Notion · 0:43–0:46 · B (carte unité 1)**
- Visuel : carte d'unité, numéro « 1 ».
- Écran : « 1 · Trois questions : qui, où, combien »
- VO : « Premier outil : trois questions. »

**Scène 6 — B3 Notion · 0:46–1:03 · C**
- Visuel : trois pictogrammes révélés un à un : silhouettes (qui), épingle et horloge (où et quand), pièces (combien) ; puis un cercle autour de Korhogo sur la mini-carte : « votre zone ».
- Écran : « Qui achète ? · Où et quand ? · Combien, et à qui ? »
- VO : « Qui achète ? Où, et à quel moment ? Combien paie-t-on aujourd'hui, et à qui ? Votre marché, c'est votre zone de vente, pas tout le pays. Autrement dit : les clients que vous pouvez vraiment servir. »

**Scène 7 — B3 Notion · 1:03–1:20 · B (carte unité 2)**
- Visuel : carte d'unité, numéro « 2 », trois lignes révélées une à une, icône de carnet.
- Écran : « 2 · Le terrain d'abord : relever les prix » « 4 vendeurs · prix · formats » « 1 h de comptage »
- VO : « Deuxième outil : le terrain d'abord. Aya visite quatre vendeurs et note prix, formats et points faibles. Puis elle compte les clientes d'un salon pendant une heure. C'est un relevé de prix, puis un comptage. »

**Scène 8 — B3 Notion · 1:20–1:25 · B (carte unité 3)**
- Visuel : carte d'unité, numéro « 3 », icône de loupe.
- Écran : « 3 · L'IA cherche, vous vérifiez la source »
- VO : « Troisième outil : l'IA cherche, vous vérifiez la source. »

**Scène 9 — B3 Notion · 1:25–1:49 · A**
- Visuel : capture réelle d'un assistant qui cite ses sources (Gemini) ; cadre sur une source, puis surlignage successif de l'organisme, de la date et du lien (une annotation à la fois, 2,5 s chacune).
- Écran : « Une source = un organisme · une date · un lien »
- VO : « Certains assistants cherchent sur internet et citent leurs sources. Gemini, ChatGPT ou Claude, par exemple. Une source, c'est un organisme, une date, un lien. Ouvrez au moins deux liens, et lisez la date. Un chiffre sans source peut être une hallucination : une réponse fausse, donnée avec assurance. »

**Scène 10 — B3 Notion · 1:49–2:10 · C (carte unité 4 en surtitre)**
- Visuel : surtitre « 4 · Estimer avec des hypothèses écrites » ; puis calcul posé ligne à ligne : 8 salons × 40 clientes × 1 sur 10 = 32 pots par semaine ; chaque nombre porte un petit « ? ».
- Écran : « 8 salons × 40 clientes × 1 sur 10 = 32 pots/semaine · exemple fictif »
- VO : « Quatrième outil : estimer avec des hypothèses écrites. Exemple fictif : huit salons, quarante clientes par semaine chacun. Si une cliente sur dix achète un pot, cela fait trente-deux pots par semaine. Chaque nombre est une supposition, à vérifier sur le terrain. »

**Scène 11 — B4 Application · 2:10–2:14 · G**
- Visuel : carte de consigne, fond clair, version abrégée.
- Écran : « Consigne d'Aya — texte complet sous la vidéo »
- VO : « Voici la consigne d'Aya, sous la vidéo. »

**Scène 12 — B4 Application · 2:14–2:38 · A**
- Visuel : capture réelle de Gemini : notes collées, vendeurs A à D, puis tableau comparatif ; cadre sur la colonne « livraison », où toutes les lignes disent « non ».
- Écran : « Étape 1 · Étape 2 · Vendeurs A à D · aucun nom réel »
- VO : « Étape un : Aya colle la consigne et ses notes de terrain dans Gemini. Les vendeurs y sont nommés A, B, C et D : aucun nom réel. Étape deux : Gemini dresse le tableau des concurrents. Une ligne saute aux yeux : personne ne livre les salons avec un baume étiqueté. »

**Scène 13 — B4 Application · 2:38–3:07 · A**
- Visuel : capture réelle : la question sur les règles, la réponse avec sources ; puis le navigateur : une page sans date barrée (croix), une page officielle datée cochée ; enfin la fiche en trois parties.
- Écran : « Étape 3 · Étape 4 · Étape 5 · Je sais · Je suppose · Je vérifie »
- VO : « Étape trois : elle demande quelles règles s'appliquent aux cosmétiques artisanaux, sources exigées. Étape quatre : elle ouvre chaque lien. Une page sans date est écartée ; une page officielle et datée, gardée. Un point reste flou : elle le confirmera à la chambre de commerce. Étape cinq : Gemini range tout en trois parties. Je sais, je suppose, je vérifie. »

**Scène 14 — B5 Consolidation · 3:07–3:31 · C**
- Visuel : une bulle d'assistant affiche un grand chiffre sans lien ; silence ; le chiffre se barre (croix), remplacé par « inconnu », puis par le petit calcul de la scène 10 (coche).
- Écran : « Chiffre sans source → « inconnu » → estimation avec hypothèses »
- VO : « Vous demandez combien de pots de karité se vendent chaque mois dans le pays. L'assistant donne un chiffre précis, sans aucun lien. Que faites-vous ? »
- Silence : 2 s
- VO : « Vous ne l'utilisez pas. Vous demandez la source. Sans source, vous écrivez inconnu, puis vous estimez avec vos hypothèses. »

**Scène 15 — B6 Clôture · 3:31–3:59 · B (carte de rappel)**
- Visuel : carte de rappel, points révélés au rythme de la voix ; puis vignette d'Aya devant un salon, un pot étiqueté en main, et titre de l'exercice.
- Écran : « 1. Faire une étude de marché express, avec des sources vérifiées » « 2. Relever prix et clients chez trois concurrents » « 3. Pas de source, pas de chiffre » « 4. Estimer avec des hypothèses écrites »
- VO : « Retenez quatre points. Faire une étude de marché express, avec des sources vérifiées. Relever prix et clients chez trois concurrents. Pas de source, pas de chiffre. Estimer avec des hypothèses écrites. Aya a trouvé sa place : un baume étiqueté, livré aux salons. Une règle reste à confirmer. À vous. Comparez trois concurrents et vérifiez deux sources. »

#### Captures à fournir par l'owner

1. **Réponse avec sources (scène 9)** — téléphone, Gemini, compte « Karatou Démo ». Taper : « Quels documents faut-il pour vendre des cosmétiques artisanaux au karité en Côte d'Ivoire ? Donne pour chaque source l'organisme, la date et le lien. ». Durée utile : 20 s. Garder une réponse qui affiche clairement au moins deux sources. Si l'affichage des sources est peu lisible, refaire avec le mode de recherche avec IA de Google [à vérifier au moment de la production]. Masquer : nom du compte.
2. **Démo B4, partie 1 (scène 12)** — même téléphone. Coller la consigne de la fiche (activité : « baume et savon au karité, à Korhogo, Côte d'Ivoire » ; clients : « salons de coiffure de Korhogo, en semaine ») avec les notes fictives A à D. Durée utile : 25 s.
3. **Démo B4, partie 2 (scène 13)** — même conversation, puis navigateur ouvert depuis Gemini, sans onglets, favoris ni compte visibles. Ouvrir deux liens ; tenir chaque page 3 s sur l'organisme et la date. Taper ensuite : « Fais la fiche en 3 parties. ». Durée utile : 40 s. Noter la date de la capture. Ne jamais montrer une règle non confirmée comme acquise : si aucune source officielle n'apparaît, le dire dans la voix off.

#### Notes de script

- Prononciation : Korhogo « Kor-o-go » (h muet) ; karité « ka-ri-té ».
- « Hallucination » est gardé et glosé (scène 9). « Relevé de prix » et « comptage » sont définis dans la scène 7.
- Le calcul de la scène 10 est fictif ; le badge « Montants fictifs » n'est pas nécessaire (aucun montant), mais la mention « exemple fictif » reste à l'écran.
- Les règles de vente des cosmétiques ne sont pas affirmées dans la voix off : seules les sources réellement obtenues à la capture sont montrées.
- Adaptation EN : « hallucination » sans glose, « CFA francs », « chamber of commerce ». HA et DJE : expliquer « hallucination » par la périphrase plutôt que par un mot isolé ; « karité » se dit couramment par son nom local, à faire choisir par le relecteur natif.

### Leçon 3 — Votre projet sur une page, chiffres compris (`bz3`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez résumer et chiffrer votre projet sur une seule page. »
- **Cas réel (B1 → B6)** : Fatimata, 31 ans, à Ouagadougou, au Burkina Faso (cas fictif), prépare du zoom-koom (boisson de mil au gingembre) et du jus de bissap, qu'elle livre en bouteille aux bureaux de son quartier. Pour produire davantage, elle a besoin d'un congélateur et sollicite un petit crédit auprès d'une agence de microfinance. L'agente veut voir le projet résumé sur une page, chiffres compris. Fatimata fait rédiger par l'IA une page en neuf cases à partir de ses notes, calcule coût de revient, marge et seuil (montants fictifs), vérifie chaque opération à la calculatrice et s'entraîne avec l'IA dans le rôle de l'agent de crédit. En B6, au rendez-vous, elle répond sans hésiter à chaque question.
- **Unités de notion (B3)** : 1. Neuf cases sur une page — clients, problème, offre, prix, canaux, ressources, coûts, revenus, hypothèses à vérifier · 2. Le coût de revient d'une unité — tout ce qu'une bouteille coûte, étiquette et livraison comprises · 3. Le seuil : combien vendre par mois — charges fixes divisées par la marge par unité · 4. L'IA rédige et questionne, vous décidez — elle met en forme et joue l'agent de crédit ; vous refaites les calculs.
- **Démo (B4)** : Gemini (compte « Karatou Démo »), calculatrice du téléphone, Google Docs. 1. Coller la consigne avec les notes des leçons précédentes et les coûts fictifs. 2. Obtenir les neuf cases ; corriger « Clients » (« les bureaux de mon quartier », pas « tout Ouagadougou »). 3. Demander coût de revient, marge et seuil, opérations détaillées. 4. Refaire les calculs à la calculatrice. 5. Lancer le rôle d'agent de crédit (cinq questions) ; taper les réponses ; ajouter aux hypothèses la question restée sans réponse. 6. Copier la page dans Google Docs, la relire, l'enregistrer en PDF. Données fictives (FCFA) : mil et gingembre 110, sucre 50, eau et arômes 20, bouteille 70, étiquette 20, livraison 30, soit 300 par bouteille ; prix 500 ; marge 200 ; charges fixes 40 000 par mois (téléphone et internet 10 000, entretien de la moto 15 000, remboursement du congélateur 15 000) ; seuil 200 bouteilles par mois. Résultat attendu à l'écran : la page en neuf cases dans Google Docs et le PDF. [à vérifier au moment de la production : questions réellement posées par Gemini ; si un calcul de Gemini est faux, le montrer et le corriger à l'écran plutôt que refaire la capture.]
- **Consolidation (B5)** : prédiction. À Conakry, en Guinée, Mamadou répare des téléphones et copie le prix de son voisin : 350 000 GNF le changement d'écran (montants fictifs), alors que l'écran lui coûte 310 000 GNF et le transport 50 000 GNF. Gagne-t-il de l'argent ? Réponse : non, il perd 10 000 GNF par réparation, sans compter son temps ; un prix se fixe à partir de son coût de revient.
- **Consigne à copier** :

```text
Tu es un conseiller en création d'entreprise en Afrique de l'Ouest.
Voici mes notes : [collez la synthèse de vos entretiens, votre tableau des concurrents et vos coûts — sans nom ni numéro de client]. Ma monnaie : [FCFA, GNF, naira, cedi…].

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
  5. Mamadou copie le prix de son voisin sans calculer son coût. Quel est le risque ? — A) Aucun : le voisin connaît le marché B) Vendre à perte sans le savoir C) Avoir trop de clients D) Payer moins cher ses pièces — **Réponse : B**
- **Marques citées** : Gemini, Google Docs (Google), WhatsApp (Meta), Business Model Canvas (Strategyzer, mention à l'écran)

#### Script v1 (à valider par l'owner)

Durée estimée : 3:58 · Mots de voix off : 455 *(340–460)*

**Scène 1 — B1 Accroche · 0:00–0:03 · E**
- Visuel : carte des ateliers ; l'épingle s'allume sur Ouagadougou ; fondu vers l'illustration de Fatimata qui remplit des bouteilles, glacière bleue à ses pieds.
- Écran : « Ouagadougou · Burkina Faso · cas fictif »
- VO : « Ouagadougou, au Burkina Faso. »

**Scène 2 — B1 Accroche · 0:03–0:12 · B**
- Visuel : carte de promesse.
- Écran : « Résumer et chiffrer votre projet sur une seule page »
- VO : « À la fin de cette leçon, vous saurez résumer et chiffrer votre projet sur une seule page. »

**Scène 3 — B1 Accroche · 0:12–0:29 · E**
- Visuel : Fatimata au guichet d'une agence de microfinance sans logo ; une bulle de l'agente : « Votre projet sur une page ? ».
- Écran : « Un congélateur, un petit crédit · « Votre projet sur une page ? » »
- VO : « Vous avez étudié votre marché, sources à l'appui. Fatimata prépare du zoom-koom et du jus de bissap. Pour un congélateur, elle demande un petit crédit. L'agente veut son projet sur une page, chiffres compris. »

**Scène 4 — B2 Cadrage · 0:29–0:44 · A**
- Visuel : capture réelle de Google Docs : la page de Fatimata en neuf cases, vue entière, puis cadre sur la case « Hypothèses à vérifier ».
- Écran : « 40 pages ? Non : 1 page claire »
- VO : « On croit souvent qu'il faut un plan d'affaires de quarante pages. Pour démarrer, une page claire vaut mieux. Voici la page de Fatimata : neuf cases, une seule page. »

**Scène 5 — B3 Notion · 0:44–0:48 · B (carte unité 1)**
- Visuel : carte d'unité, numéro « 1 ».
- Écran : « 1 · Neuf cases sur une page »
- VO : « Premier outil : la page du projet. »

**Scène 6 — B3 Notion · 0:48–1:09 · C**
- Visuel : grille de neuf cases qui se remplit case par case ; la neuvième, « Hypothèses à vérifier », en emphase (cadre) ; petite mention « inspiré du Business Model Canvas ».
- Écran : « Clients · Problème · Offre · Prix · Canaux · Ressources · Coûts · Revenus · Hypothèses »
- VO : « Neuf cases. Vos clients, leur problème, votre offre, votre prix. Vos canaux : comment le client vous trouve et achète. Vos ressources, vos coûts, vos revenus. Et la plus importante : les hypothèses à vérifier. Tout ce que vous croyez, sans l'avoir encore prouvé. »

**Scène 7 — B3 Notion · 1:09–1:16 · B (carte unité 2)**
- Visuel : carte d'unité, numéro « 2 ».
- Écran : « 2 · Le coût de revient d'une unité »
- VO : « Deuxième outil : le coût de revient, c'est-à-dire tout ce qu'une unité vous coûte. »

**Scène 8 — B3 Notion · 1:16–1:38 · C**
- Visuel : addition posée ligne à ligne : mil et gingembre 110, sucre 50, eau et arômes 20, bouteille 70, étiquette 20, livraison 30 = 300 FCFA ; puis prix 500, marge 200. Badge « Montants fictifs ».
- Écran : « 110 + 50 + 20 + 70 + 20 + 30 = 300 FCFA · Prix 500 · Marge 200 »
- VO : « Montants fictifs : mil et gingembre, sucre, eau, bouteille, étiquette, livraison. Total : trois cents francs CFA par bouteille. Elle la vend cinq cents francs. Sa marge : deux cents francs par bouteille. Oublier l'étiquette ou la livraison, c'est vendre à perte sans le savoir. »

**Scène 9 — B3 Notion · 1:38–1:59 · B (carte unité 3)**
- Visuel : carte d'unité, numéro « 3 », trois lignes révélées une à une ; badge « Montants fictifs ».
- Écran : « 3 · Le seuil : combien vendre par mois » « Charges fixes ÷ marge » « 40 000 ÷ 200 = 200/mois »
- VO : « Troisième outil : le seuil de rentabilité. Certains coûts restent fixes, même sans vente : téléphone, moto, remboursement du congélateur. Pour Fatimata, quarante mille francs par mois. Quarante mille divisé par deux cents : deux cents bouteilles par mois. En dessous, elle perd de l'argent. »

**Scène 10 — B3 Notion · 1:59–2:18 · A (carte unité 4 en surtitre)**
- Visuel : surtitre « 4 · L'IA rédige et questionne, vous décidez » pendant 2,5 s ; puis capture réelle de Gemini dans le rôle de l'agent de crédit : la première question s'affiche ; icône de calculatrice en coin.
- Écran : « 4 · L'IA rédige et questionne, vous décidez »
- VO : « Quatrième outil : l'IA rédige et questionne, vous décidez. Elle peut aussi jouer l'agent de crédit exigeant, pour vous entraîner. Mais refaites chaque calcul vous-même, à la calculatrice. Une IA peut se tromper, même dans une division. »

**Scène 11 — B4 Application · 2:18–2:23 · G**
- Visuel : carte de consigne, fond clair, version abrégée.
- Écran : « Consigne de Fatimata — texte complet sous la vidéo »
- VO : « Voici la consigne de Fatimata, sous la vidéo. »

**Scène 12 — B4 Application · 2:23–3:01 · A**
- Visuel : captures réelles enchaînées : Gemini (neuf cases, case « Clients » corrigée, calculs), calculatrice du téléphone (coche sur chaque résultat), Gemini en agent de crédit, Google Docs puis export PDF. Numéros d'étape 1 à 5, une annotation à la fois. Badge « Montants fictifs ».
- Écran : « Étape 1 … Étape 5 · 300 · 200 · 200 bouteilles/mois »
- VO : « Étape un : Fatimata colle ses notes et ses coûts fictifs dans Gemini. Étape deux : Gemini remplit les neuf cases ; elle corrige la case Clients. Ce sont les bureaux de son quartier, pas toute la ville. Étape trois : coût de revient, marge et seuil, refaits à la calculatrice. Tout est juste. Étape quatre : l'agent de crédit. Une question reste sans réponse : elle rejoint les hypothèses. Étape cinq : la page part dans Google Docs, puis en PDF. »

**Scène 13 — B5 Consolidation · 3:01–3:32 · C**
- Visuel : petite illustration de Mamadou dans son atelier, étiquette « Conakry · Guinée » ; soustraction animée terme à terme ; silence ; le résultat négatif s'affiche avec une croix. Badge « Montants fictifs ».
- Écran : « 350 000 − 310 000 − 50 000 = − 10 000 GNF »
- VO : « À Conakry, en Guinée, Mamadou répare des téléphones. Il copie le prix de son voisin : trois cent cinquante mille francs guinéens l'écran. L'écran lui coûte trois cent dix mille, le transport cinquante mille. Gagne-t-il de l'argent ? »
- Silence : 2 s
- VO : « Non. Il perd dix mille francs par écran, sans compter son temps. Un prix se fixe à partir du coût de revient. »

**Scène 14 — B6 Clôture · 3:32–3:58 · B (carte de rappel)**
- Visuel : carte de rappel, points révélés au rythme de la voix ; puis vignette de Fatimata qui serre la main de l'agente, et titre de l'exercice.
- Écran : « 1. Résumer et chiffrer votre projet sur une seule page » « 2. Coût de revient : tout ce qu'une unité coûte » « 3. Seuil = charges fixes ÷ marge par unité » « 4. Refaire soi-même chaque calcul de l'IA »
- VO : « Retenez quatre points. Résumer et chiffrer votre projet sur une seule page. Coût de revient : tout ce qu'une unité coûte. Seuil : charges fixes divisées par la marge par unité. Refaire soi-même chaque calcul de l'IA. À l'agence, Fatimata répond à chaque question. À votre tour. Remplissez votre page de projet. »

#### Captures à fournir par l'owner

1. **Page en neuf cases dans Google Docs (scène 4)** — téléphone, application Google Docs, compte « Karatou Démo ». Capturée après la démo : la page entière, puis zoom sur la case « Hypothèses à vérifier ». Durée utile : 12 s. Masquer : nom du compte.
2. **Gemini en agent de crédit (scène 10)** — téléphone, Gemini. Après la consigne, taper : « Joue l'agent de crédit. Pose ta première question. ». Durée utile : 12 s ; réponse non retouchée.
3. **Démo B4 (scène 12)** — Gemini : coller la consigne de la fiche avec les notes fictives (zoom-koom et bissap, bureaux du quartier, coûts de la fiche) ; taper « Dans la case Clients, écris : les bureaux de mon quartier. » ; lire les calculs. Calculatrice : taper 110 + 50 + 20 + 70 + 20 + 30, puis 500 − 300, puis 40000 ÷ 200. Gemini : répondre à deux questions de l'agent de crédit. Google Docs : coller la page, puis « Enregistrer en PDF » ou « Partager et exporter » [à vérifier au moment de la production : libellé exact du menu]. Durée utile : 60 s au total. Masquer : nom du compte.

#### Notes de script

- Prononciation : Ouagadougou « Wa-ga-dou-gou » ; zoom-koom « zome-kome » ; bissap « bi-ssap » ; Conakry « Ko-na-kri ».
- « Plan d'affaires » remplace « business plan », jamais dit. « Business Model Canvas » apparaît à l'écran seulement.
- Les montants sont dits en toutes lettres et affichés en chiffres, avec le badge « Montants fictifs ». Les montants en GNF (scène 13) sont d'un autre ordre de grandeur que le FCFA : ne pas les comparer entre eux.
- Adaptation EN : « unit cost », « break-even point », « microfinance institution », « CFA francs », « Guinean francs ». HA : pistes à valider par le relecteur natif, « riba » (bénéfice), « jari » (capital). DJE : termes de gestion à faire proposer par le relecteur natif. Montants identiques dans toutes les langues.

### Leçon 4 — Vendre sur WhatsApp Business avec l'aide de l'IA (`bz4`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez préparer votre WhatsApp Business pour vendre, avec l'aide de l'IA. »
- **Cas réel (B1 → B6)** : Sènami, 27 ans, couturière à Cotonou, au Bénin (cas fictif), coud des robes en pagne sur mesure, des chemises et des retouches. Sa page de projet désigne WhatsApp comme canal de vente, et les commandes arrivent à toute heure : messages vocaux tard le soir, même prix demandé dix fois, et une commande oubliée la semaine passée. Elle fait rédiger par l'IA la description de son profil, ses fiches de modèles, ses messages d'accueil et d'absence et trois réponses rapides, retire une promesse qu'elle ne pourrait pas tenir, configure WhatsApp Business et teste le parcours depuis un second téléphone. En B6, une cliente qui écrit la nuit reçoit le message d'absence ; au matin, sa commande attend, étiquetée.
- **Unités de notion (B3)** : 1. Un profil qui répond avant vous — nom, description, adresse, horaires, photo ; les horaires pilotent le message d'absence · 2. Le catalogue, une vitrine de poche — photo, nom, prix, description courte ; WhatsApp vérifie chaque article · 3. Les messages qui partent seuls — accueil, absence, et réponses rapides appelées par la barre oblique · 4. Une étiquette par étape de commande — nouvelle commande, acompte payé, livré.
- **Démo (B4)** : Gemini (compte « Karatou Démo »), WhatsApp Business sur la SIM de démonstration, téléphone « client ». 1. Coller la consigne remplie dans Gemini. 2. Relire les textes ; effacer toute promesse impossible (« tenue prête en 24 heures ») ; demander une version en fon ou en yoruba seulement si un locuteur natif peut la relire (sinon, ne pas l'afficher). 3. Dans WhatsApp Business, onglet Outils : coller la description du profil ; ajouter un article au catalogue (photo, nom, prix, description) ; activer le message d'accueil et coller le texte ; créer la réponse rapide « délais ». 4. Depuis le téléphone « client », écrire « Bonjour » : le message d'accueil arrive ; ouvrir le catalogue depuis le profil. 5. Côté Sènami : taper « / », choisir « délais », puis poser l'étiquette « Nouvelle commande ». Données fictives (FCFA) : « Robe en pagne sur mesure, tissu fourni par la cliente — 15 000 », « Chemise homme, tissu fourni — 8 000 », « Retouche simple — 1 500 » ; horaires : lundi à samedi, 9 h–19 h ; délai de couture : 7 jours ; acompte de moitié à la commande, en espèces ou par paiement mobile. Résultat attendu à l'écran : côté cliente, l'accueil reçu et le catalogue visible ; côté Sènami, la réponse rapide envoyée et la discussion étiquetée. [à vérifier au moment de la production : libellés exacts des menus en français (« Outils », « Profil d'entreprise », « Catalogue », « Message d'accueil », « Message d'absence », « Réponses rapides », « Étiquettes » ou « Listes ») ; créer l'article du catalogue la veille, car il passe par une vérification de WhatsApp ; si l'IA n'écrit aucune promesse intenable, montrer la correction réellement faite et adapter la voix off.] Note : WhatsApp propose dans certains pays un agent IA qui répond à la place de l'entreprise [à vérifier au moment de la production : nom, disponibilité au Bénin et effet sur le message d'accueil] ; ne pas l'activer sur le compte de démonstration ; pour aller plus loin, cours 2 « Agents IA ».
- **Consolidation (B5)** : prédiction. À Kumasi, au Ghana, Akosua, qui vend des ustensiles de cuisine, veut envoyer une promotion trois fois par jour à ses trois cents contacts, par liste de diffusion : que va-t-il se passer ? Réponse : seuls les contacts qui ont enregistré son numéro la reçoivent ; les envois répétés entraînent blocages et signalements ; un compte souvent signalé peut être restreint. Mieux vaut un message par semaine, à ceux qui l'ont accepté.
- **Consigne à copier** :

```text
Tu es un spécialiste de la vente sur WhatsApp pour les petits commerces en Afrique de l'Ouest.
Mon activité : [ce que vous vendez], à [ville, pays].
Mes produits et prix : [liste, avec la monnaie].
Mes horaires : [jours et heures]. Mes délais et ma zone de livraison : [précisez].
Moyens de paiement acceptés : [espèces, paiement mobile…].

Rédige en français simple et chaleureux, avec le vouvoiement :
1. une description de profil courte ;
2. une description courte et honnête pour chaque produit ;
3. un message d'accueil ;
4. un message d'absence ;
5. trois réponses rapides : prix, délais, paiement.
N'invente aucune promesse (délai, qualité, réduction) que je ne t'ai pas donnée.
[Option : ajoute une version dans [langue locale], que je ferai relire par un locuteur natif.]
```

- **Exercice** : « Préparez votre vitrine WhatsApp Business » — 1. Installez WhatsApp Business, de préférence sur un numéro réservé à l'activité, et remplissez le profil : nom, description, adresse, horaires, photo. 2. Avec la consigne, faites rédiger vos textes ; supprimez toute promesse que vous ne pouvez pas tenir. 3. Ajoutez trois articles au catalogue, activez les messages d'accueil et d'absence, créez trois réponses rapides et trois étiquettes. 4. Testez depuis le téléphone d'un proche et faites trois captures (profil, catalogue, message d'accueil) : elles serviront au projet final.
- **Carte de rappel** : 1. Préparer votre WhatsApp Business pour vendre, avec l'IA 2. Profil complet et catalogue clair, prix compris 3. Messages automatiques rédigés par l'IA, relus par vous 4. Une étiquette par étape de commande
- **Quiz** :
  1. Gemini écrit « tenue prête en 24 heures » dans votre message d'accueil, mais il vous faut sept jours. Que faites-vous ? — A) Vous gardez la phrase : elle fait vendre B) Vous ajoutez « environ » C) Vous laissez l'IA décider D) Vous effacez la promesse avant de publier — **Réponse : D**
  2. Que doit montrer chaque article du catalogue ? — A) Une photo, un nom, un prix et une description courte B) Uniquement une photo C) Les numéros de vos clientes D) Une promesse de livraison rapide — **Réponse : A**
  3. Quand le message d'accueil part-il ? — A) À chaque message reçu B) Seulement la nuit C) Au premier message d'un client, ou après quatorze jours sans échange D) Jamais automatiquement — **Réponse : C**
  4. À quoi servent les étiquettes ? — A) À bloquer des clients B) À classer chaque discussion selon l'étape de la commande C) À envoyer de la publicité D) À traduire les messages — **Réponse : B**
  5. Qui reçoit un message envoyé par liste de diffusion ? — A) Seulement les contacts qui ont enregistré votre numéro B) Tous vos contacts C) Tous les utilisateurs de votre ville D) Seulement vos groupes — **Réponse : A**
- **Marques citées** : WhatsApp, WhatsApp Business (Meta), Gemini (Google)

#### Script v1 (à valider par l'owner)

Durée estimée : 3:59 · Mots de voix off : 456 *(340–460)*

**Scène 1 — B1 Accroche · 0:00–0:02 · E**
- Visuel : carte des ateliers ; l'épingle s'allume sur Cotonou ; fondu vers l'illustration de Sènami, mètre ruban autour du cou, machine à coudre, téléphone qui s'allume la nuit.
- Écran : « Cotonou · Bénin · cas fictif »
- VO : « Cotonou, au Bénin. »

**Scène 2 — B1 Accroche · 0:02–0:12 · B**
- Visuel : carte de promesse.
- Écran : « Préparer votre WhatsApp Business pour vendre, avec l'aide de l'IA »
- VO : « À la fin de cette leçon, vous saurez préparer votre WhatsApp Business pour vendre, avec l'aide de l'IA. »

**Scène 3 — B1 Accroche · 0:12–0:30 · E**
- Visuel : même illustration ; des bulles de messages s'empilent en désordre au-dessus du téléphone (pictogrammes de micro, points d'interrogation), une bulle grisée « commande oubliée ».
- Écran : « Vocaux à minuit · même prix demandé dix fois · une commande oubliée »
- VO : « Votre page de projet est chiffrée. Celle de Sènami, couturière, désigne WhatsApp pour vendre. Mais ses commandes arrivent en désordre : des vocaux à minuit, le même prix demandé dix fois. Et une commande oubliée. »

**Scène 4 — B2 Cadrage · 0:30–0:46 · A**
- Visuel : capture réelle du téléphone « client » : le profil de Sènami (démo), description, horaires, bouton du catalogue ; cadre successif sur chacun.
- Écran : « Une vitrine + un carnet de commandes »
- VO : « WhatsApp Business est une application gratuite, distincte de WhatsApp. C'est une vitrine, et un carnet de commandes. L'IA, elle, écrit des brouillons, c'est-à-dire des premières versions. Vous les relisez avant de publier. »

**Scène 5 — B3 Notion · 0:46–0:49 · B (carte unité 1)**
- Visuel : carte d'unité, numéro « 1 ».
- Écran : « 1 · Un profil qui répond avant vous »
- VO : « Premier réglage : un profil complet. »

**Scène 6 — B3 Notion · 0:49–1:07 · A**
- Visuel : capture réelle de WhatsApp Business, onglet Outils, puis Profil d'entreprise rempli ; cadre sur le champ des horaires.
- Écran : « Nom · description · adresse · horaires · photo »
- VO : « Dans l'onglet Outils, ouvrez le profil d'entreprise. Nom, description courte, adresse, horaires, photo nette. La cliente sait tout de suite ce que vous faites, où, et quand. Vos horaires servent aussi au message d'absence. »

**Scène 7 — B3 Notion · 1:07–1:26 · B (carte unité 2)**
- Visuel : carte d'unité, numéro « 2 », trois lignes révélées une à une ; en bas, bandeau des cours 5 et 9.
- Écran : « 2 · Le catalogue, une vitrine de poche » « Photo, nom, prix, texte » « Photos : cours 5 et 9 »
- VO : « Deuxième réglage : le catalogue, votre vitrine de poche. Chaque article : une photo, un nom, un prix, une description courte. WhatsApp vérifie chaque article avant de l'afficher. Pour de belles photos, suivez nos cours cinq et neuf. »

**Scène 8 — B3 Notion · 1:26–1:30 · B (carte unité 3)**
- Visuel : carte d'unité, numéro « 3 ».
- Écran : « 3 · Les messages qui partent seuls »
- VO : « Troisième réglage : les messages qui partent seuls. »

**Scène 9 — B3 Notion · 1:30–1:49 · C**
- Visuel : frise en trois temps, pictogrammes seulement (aucune interface redessinée) : « 1er message → accueil », « hors horaires → absence », touche « / » → liste de réponses rapides.
- Écran : « 1er message → accueil · hors horaires → absence · « / » → réponse rapide »
- VO : « Le message d'accueil répond au premier message d'une cliente. Il repart après quatorze jours sans échange. Le message d'absence répond en dehors de vos horaires. Les réponses rapides : tapez une barre oblique, et vos textes enregistrés apparaissent. »

**Scène 10 — B3 Notion · 1:49–2:01 · B (carte unité 4)**
- Visuel : carte d'unité, numéro « 4 », trois étiquettes révélées une à une, chacune avec une forme différente (cercle, carré, triangle).
- Écran : « 4 · Une étiquette par étape de commande » « Nouvelle commande · Acompte payé · Livré »
- VO : « Quatrième réglage : les étiquettes. Une étiquette classe une discussion : nouvelle commande, acompte payé, livré. D'un coup d'œil, vous voyez qui attend sa tenue. »

**Scène 11 — B4 Application · 2:01–2:05 · G**
- Visuel : carte de consigne, fond clair, version abrégée.
- Écran : « Consigne de Sènami — texte complet sous la vidéo »
- VO : « Voici la consigne de Sènami, sous la vidéo. »

**Scène 12 — B4 Application · 2:05–2:30 · A**
- Visuel : capture réelle de Gemini : consigne remplie, textes rédigés ; cadre sur la phrase « prête en 24 heures », croix, puis la phrase corrigée « prête en 7 jours ». Badge « Montants fictifs ».
- Écran : « Étape 1 · Étape 2 · ✗ prête en 24 heures → ✓ prête en 7 jours »
- VO : « Étape un : dans Gemini, Sènami décrit ses modèles, ses prix fictifs, ses horaires et ses délais. Gemini rédige le profil, les fiches, les messages et trois réponses rapides. Étape deux : elle relit tout. Une phrase promet une tenue prête en vingt-quatre heures. Impossible à tenir : elle l'efface. »

**Scène 13 — B4 Application · 2:30–2:56 · A**
- Visuel : captures réelles en écran partagé fixe : à gauche WhatsApp Business de Sènami (profil, catalogue, accueil, réponse rapide), à droite le téléphone « client » (« Bonjour », accueil reçu, catalogue ouvert) ; enfin l'étiquette posée. Numéros d'étape, une annotation à la fois.
- Écran : « Étape 3 · Étape 4 · accueil reçu ✓ · étiquette « Nouvelle commande » »
- VO : « Étape trois : onglet Outils. Elle colle la description, ajoute un modèle au catalogue, active l'accueil. Elle crée la réponse rapide délais. Étape quatre : le test. Depuis un second téléphone, une amie écrit bonjour. L'accueil arrive aussitôt, et le catalogue s'ouvre. Sènami tape une barre oblique, choisit délais, puis pose l'étiquette nouvelle commande. »

**Scène 14 — B5 Consolidation · 2:56–3:30 · C**
- Visuel : petite illustration d'Akosua, étiquette « Kumasi · Ghana » ; compteur « 300 contacts » ; silence ; le compteur se réduit, puis icônes « bloqué » et « signalé » avec croix ; carte finale « 1 message par semaine, à ceux qui ont dit oui » (coche).
- Écran : « 300 contacts · 3 envois par jour → blocages, signalements »
- VO : « À Kumasi, au Ghana, Akosua vend des ustensiles de cuisine. Elle veut envoyer une promotion trois fois par jour à trois cents contacts. Que va-t-il se passer ? »
- Silence : 2 s
- VO : « Seuls les contacts qui ont enregistré son numéro la recevront. Les envois répétés entraînent blocages et signalements. Un compte souvent signalé peut être restreint. Mieux vaut un message par semaine, à ceux qui ont dit oui. »

**Scène 15 — B6 Clôture · 3:30–3:59 · B (carte de rappel)**
- Visuel : carte de rappel, points révélés au rythme de la voix ; puis vignette : téléphone de Sènami au matin, une discussion étiquetée ; titre de l'exercice.
- Écran : « 1. Préparer votre WhatsApp Business pour vendre, avec l'IA » « 2. Profil complet et catalogue clair, prix compris » « 3. Messages automatiques rédigés par l'IA, relus par vous » « 4. Une étiquette par étape de commande »
- VO : « Retenez quatre points. Préparer votre WhatsApp Business pour vendre, avec l'IA. Profil complet et catalogue clair, prix compris. Messages automatiques rédigés par l'IA, relus par vous. Une étiquette par étape de commande. Cette nuit, une cliente écrit à Sènami : le message d'absence lui répond. Au matin, sa commande attend, étiquetée. À vous. Préparez votre vitrine WhatsApp Business. »

#### Captures à fournir par l'owner

1. **Profil vu par une cliente (scène 4)** — téléphone « client » (compte d'un membre de l'équipe consentant), WhatsApp. Ouvrir la discussion avec le compte « Couture Sènami (démo) », toucher le nom, montrer description, horaires, catalogue. Durée utile : 15 s. Masquer : numéro de la SIM de démonstration, nom du contact.
2. **Onglet Outils et profil d'entreprise (scène 6)** — téléphone de démonstration, WhatsApp Business. Outils → Profil d'entreprise ; défiler lentement. Durée utile : 15 s. Masquer : numéro.
3. **Démo B4, rédaction (scène 12)** — Gemini, compte « Karatou Démo ». Coller la consigne de la fiche avec les données fictives de Sènami. Si l'IA écrit une promesse intenable, la montrer ; sinon, montrer la correction réellement faite. Durée utile : 25 s.
4. **Démo B4, configuration et test (scène 13)** — deux téléphones filmés en enregistrement d'écran séparés, synchronisés au montage. Sur le téléphone de démonstration : coller la description ; ajouter l'article « Robe en pagne sur mesure — 15 000 FCFA » (créé la veille, vérifié) ; activer le message d'accueil ; créer la réponse rapide « délais ». Sur le téléphone « client » : écrire « Bonjour », ouvrir le catalogue. Retour au téléphone de démonstration : taper « / », choisir « délais », poser l'étiquette « Nouvelle commande ». Durée utile : 40 s. Masquer : numéros des deux téléphones.
5. **Photos de modèles pour le catalogue** — trois photos de tenues sans marque, sur fond neutre, lumière du jour. Aucune personne reconnaissable.

#### Notes de script

- Prononciation : Sènami « Sè-na-mi » ; Cotonou « Ko-to-nou » ; Kumasi « Kou-ma-si » ; Akosua « A-ko-sou-a ».
- Les libellés de menus sont dits tels qu'ils apparaissent à l'écran le jour de la capture ; s'ils ont changé (par exemple « Listes » au lieu d'« Étiquettes »), adapter la voix off et la carte d'unité 4 [à vérifier au moment de la production].
- Le délai « quatorze jours sans échange » pour le message d'accueil est à reconfirmer dans l'aide officielle de WhatsApp Business avant l'enregistrement de la voix [à vérifier au moment de la production].
- Aucun prix d'option payante n'est cité. Le mot « gratuit » ne s'applique qu'à l'application et aux fonctions montrées.
- Adaptation EN : reprendre les libellés officiels de l'interface anglaise (« greeting message », « away message », « quick replies », « labels », « broadcast list »). HA et DJE : l'interface n'existe probablement pas dans ces langues [à vérifier au moment de la production] ; nommer le menu tel qu'il apparaît, puis l'expliquer. « Pagne » et « acompte » sont des réalités communes, à garder.

### Leçon 5 — Suivre ventes, stock et caisse chaque semaine (`bz5`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez suivre ventes, stock et caisse chaque semaine, avec l'IA. »
- **Cas réel (B1 → B6)** : Komi, 26 ans, à Lomé, au Togo (cas fictif), répare des téléphones et vend des accessoires : protections d'écran, chargeurs, écouteurs. Les clients viennent, mais en fin de mois il ignore si son activité rapporte : son cahier déborde et le compte de sa caisse ne correspond jamais à ses notes. Il passe à un tableau Google Sheets en trois onglets, note chaque vente, suit son stock et, chaque dimanche, confie à l'IA les lignes de la semaine avec le montant compté en caisse. Il contrôle le total, retrouve un paiement mobile oublié dans son comptage et commande des protections d'écran avant la rupture. En B6, sa caisse tombe juste et il sait où il en est.
- **Unités de notion (B3)** : 1. Trois registres : ventes, stock, caisse — ce qui se vend, ce qui reste, l'argent qui entre et sort (espèces et paiement mobile) · 2. Du cahier au tableau, par une photo — l'assistant transcrit la page ; vous relisez chaque ligne · 3. Le point du dimanche, trois questions — articles les plus vendus, rupture à venir, écart de caisse · 4. Devis, reçu, facture : chacun son rôle — l'IA rédige devis et reçus ; la facture officielle suit les règles fiscales du pays.
- **Démo (B4)** : Google Sheets (application, compte « Karatou Démo ») puis Gemini. Classeur fictif prérempli (FCFA) — onglet Ventes, du lundi au samedi : protection d'écran à 1 000 (4, 6, 3, 7, 5, 9 : 34 pièces, 34 000) ; chargeur à 2 500 (1, 2, 1, 2, 1, 3 : 10 pièces, 25 000) ; écouteurs à 1 500 (2, 1, 2, 1, 2, 2 : 10 pièces, 15 000) ; total 74 000. Onglet Stock : protections départ 40, entrées 0, sorties 34, reste 6 ; chargeurs 15, 0, 10, reste 5 ; écouteurs 20, 0, 10, reste 10. Caisse comptée : 73 000 (un paiement mobile de 1 000 oublié dans le comptage). 1. Saisir la ligne du samedi (protection d'écran, 9, 1 000) : la colonne Total calcule quantité × prix. 2. Onglet Stock : formule « départ + entrées − sorties ». 3. Sélectionner la colonne Total : la somme s'affiche en bas de l'écran. 4. Copier les lignes de la semaine, les coller dans Gemini avec la consigne (étape 2) et le montant compté. 5. Comparer le total de Gemini à la somme du tableau ; retrouver l'écart ; commander cinquante protections d'écran pour lundi. Résultat attendu à l'écran : la réponse de Gemini aux trois questions (protections d'écran en tête, surtout le samedi ; rupture de protections en début de semaine ; caisse inférieure de 1 000 FCFA au tableau) et deux totaux identiques. [à vérifier au moment de la production : collage des lignes de Google Sheets vers Gemini sur téléphone ; séparateur des formules selon la langue du classeur ; si le total de Gemini diffère, le montrer et le corriger à l'écran : c'est le cas de B5.]
- **Consolidation (B5)** : prédiction sur un cas imaginé (montants fictifs) : l'assistant annonce 65 000 FCFA pour la semaine, la somme du tableau affiche 74 000 FCFA. Lequel croire ? Réponse : aucun avant vérification ; la comparaison ligne par ligne montre que l'assistant a sauté la ligne du samedi (9 protections, 9 000 FCFA) ; le tableau tenu à partir du cahier reste la référence.
- **Consigne à copier** :

```text
Tu m'aides à suivre mon petit commerce. Je vends [vos produits ou services], à [ville, pays]. Ma monnaie : [FCFA, GNF, naira, cedi…].
Étape 1 (une seule fois) : propose-moi un tableau simple pour Google Sheets, en 3 onglets : Ventes (date, article, quantité, prix, total), Stock (article, départ, entrées, sorties, reste), Caisse (date, entrée, sortie, solde). Explique chaque formule ligne par ligne.
Étape 2 (chaque semaine) : voici mes lignes de la semaine [collez vos lignes — sans nom ni numéro de client] et le montant compté dans ma caisse, espèces et paiement mobile : [montant].
Réponds à 3 questions : qu'est-ce qui s'est le mieux vendu ? qu'est-ce qui va manquer en stock ? la caisse correspond-elle au tableau ?
Montre tes calculs. Si une ligne est illisible ou incomplète, signale-la au lieu de deviner.
```

- **Exercice** : « Tenez votre tableau de caisse pendant sept jours » — 1. Avec l'étape 1 de la consigne, créez votre tableau Google Sheets en trois onglets (ou gardez votre cahier et photographiez chaque page). 2. Chaque jour, notez ventes, entrées et sorties de stock, entrées et sorties d'argent, en espèces et en paiement mobile. 3. Le septième jour, faites le point avec l'étape 2 de la consigne, sans aucun nom de client. 4. Comparez le total de l'IA à la somme du tableau, notez l'écart de caisse et sa cause, et gardez une capture : elle servira au projet final.
- **Carte de rappel** : 1. Suivre ventes, stock et caisse chaque semaine, avec l'IA 2. Noter chaque jour, faire le point chaque dimanche 3. Vérifier les totaux de l'IA avec le tableau 4. Facture officielle : suivre les règles des impôts
- **Quiz** :
  1. Quels sont les trois registres d'un petit commerce présentés dans cette leçon ? — A) Clients, amis, famille B) Publicité, logo, prix C) Ventes, stock, caisse D) Banque, crédit, impôts — **Réponse : C**
  2. À quel rythme Komi fait-il le point avec l'IA ? — A) Une fois par an B) Seulement quand la caisse est vide C) Jamais D) Chaque semaine, le dimanche — **Réponse : D**
  3. Le total donné par l'IA diffère de la somme de votre tableau. Que faites-vous ? — A) Vous croyez l'IA B) Vous comparez ligne par ligne avec le tableau C) Vous prenez la moyenne des deux D) Vous effacez le tableau — **Réponse : B**
  4. Vous devez remettre une facture officielle à une entreprise. Que faites-vous ? — A) Un reçu rédigé par l'IA suffit B) Un simple message WhatsApp suffit C) Vous ne remettez aucun document D) Vous suivez les règles fiscales de votre pays, en vous renseignant auprès des impôts — **Réponse : D**
  5. Un client vous envoie la capture d'écran de son paiement mobile. Que faites-vous ? — A) Vous vérifiez le paiement dans votre propre compte B) Vous livrez tout de suite C) Vous transférez la capture à l'IA D) Vous notez la vente sans vérifier — **Réponse : A**
- **Marques citées** : Google Sheets, Gemini (Google), WhatsApp (Meta, quiz)

#### Script v1 (à valider par l'owner)

Durée estimée : 3:59 · Mots de voix off : 456 *(340–460)*

**Scène 1 — B1 Accroche · 0:00–0:02 · E**
- Visuel : carte des ateliers ; l'épingle s'allume sur Lomé ; fondu vers l'illustration de Komi derrière son comptoir, trousse d'outils et loupe, présentoir d'accessoires sans marque.
- Écran : « Lomé · Togo · cas fictif »
- VO : « Lomé, au Togo. »

**Scène 2 — B1 Accroche · 0:02–0:12 · B**
- Visuel : carte de promesse.
- Écran : « Suivre ventes, stock et caisse chaque semaine, avec l'IA »
- VO : « À la fin de cette leçon, vous saurez suivre ventes, stock et caisse chaque semaine, avec l'IA. »

**Scène 3 — B1 Accroche · 0:12–0:28 · E**
- Visuel : même illustration ; un cahier qui déborde de feuilles volantes ; un point d'interrogation au-dessus de la caisse.
- Écran : « Fin du mois : je gagne de l'argent, ou pas ? »
- VO : « Votre vitrine WhatsApp est prête. Komi répare des téléphones et vend des accessoires. Pourtant, en fin de mois, il ignore s'il gagne de l'argent. Et sa caisse ne tombe jamais juste. »

**Scène 4 — B2 Cadrage · 0:28–0:45 · B**
- Visuel : carte en deux lignes : « Noter chaque jour » (icône de cahier) puis « Regarder chaque semaine » (icône de calendrier) ; une petite mention « L'IA lit et résume · vous vérifiez ».
- Écran : « Gérer = noter chaque jour, regarder chaque semaine »
- VO : « Gérer ne veut pas dire faire une comptabilité compliquée. Gérer, c'est noter chaque jour, puis regarder chaque semaine. Et l'IA n'est pas votre comptable. Elle lit, trie et résume ; vous vérifiez et vous décidez. »

**Scène 5 — B3 Notion · 0:45–0:48 · B (carte unité 1)**
- Visuel : carte d'unité, numéro « 1 ».
- Écran : « 1 · Trois registres : ventes, stock, caisse »
- VO : « Premier outil : trois registres. »

**Scène 6 — B3 Notion · 0:48–1:12 · C**
- Visuel : trois colonnes qui se construisent : Ventes (cahier), Stock (carton), Caisse (billets et téléphone) ; puis un cadenas et une loupe sur « paiement mobile : vérifier dans votre compte » .
- Écran : « Ventes · Stock · Caisse — espèces + paiement mobile »
- VO : « Les ventes : date, article, quantité, prix. Le stock : ce qui entre, ce qui sort, ce qui reste. La caisse : l'argent qui entre, qui sort, et le solde. Comptez les espèces et le paiement mobile. Vérifiez chaque paiement dans votre propre compte, jamais sur une capture envoyée. »

**Scène 7 — B3 Notion · 1:12–1:32 · A (carte unité 2 en surtitre)**
- Visuel : surtitre « 2 · Du cahier au tableau, par une photo » pendant 2,5 s ; puis capture réelle : photo d'une page de cahier fictive envoyée à Gemini, tableau obtenu ; cadre sur un chiffre mal lu (un 7 lu comme un 1), croix, puis correction.
- Écran : « 2 · Du cahier au tableau, par une photo · relisez chaque ligne »
- VO : « Deuxième outil : du cahier au tableau. Photographiez la page du jour et envoyez-la à l'assistant. Il lit souvent même l'écriture à la main. Mais un chiffre mal écrit peut être mal lu. Relisez chaque ligne, le cahier sous les yeux. »

**Scène 8 — B3 Notion · 1:32–1:49 · B (carte unité 3)**
- Visuel : carte d'unité, numéro « 3 », trois questions révélées une à une.
- Écran : « 3 · Le point du dimanche » « Plus vendu ? Bientôt manquant ? » « Caisse juste ? »
- VO : « Troisième outil : le point du dimanche, en trois questions. Qu'est-ce qui s'est le mieux vendu ? Qu'est-ce qui va manquer ? La caisse correspond-elle au tableau ? Et jamais de nom de client dans vos lignes. »

**Scène 9 — B3 Notion · 1:49–2:09 · B (carte unité 4)**
- Visuel : carte d'unité, numéro « 4 », trois mots révélés : devis, reçu, facture ; « facture » porte un petit tampon « règles des impôts ».
- Écran : « 4 · Devis, reçu, facture : chacun son rôle » « Facture officielle : règles des impôts »
- VO : « Quatrième outil : devis, reçu, facture. Le devis annonce un prix avant la vente. Le reçu prouve qu'un client a payé. L'IA peut rédiger les deux. La facture officielle suit les règles fiscales de votre pays : renseignez-vous aux impôts. »

**Scène 10 — B4 Application · 2:09–2:13 · G**
- Visuel : carte de consigne, fond clair, étapes 1 et 2 en version abrégée.
- Écran : « Consigne de Komi — texte complet sous la vidéo »
- VO : « Voici la consigne de Komi, sous la vidéo. »

**Scène 11 — B4 Application · 2:13–2:39 · A**
- Visuel : capture réelle de Google Sheets : saisie de la ligne du samedi, Total calculé ; onglet Stock, formule ; sélection de la colonne Total, somme en bas d'écran (cadre tenu 3 s). Badge « Montants fictifs ».
- Écran : « Étape 1 · Étape 2 · Étape 3 · Total 74 000 FCFA »
- VO : « Étape un : dans Google Sheets, Komi note une vente du samedi. Neuf protections d'écran, mille francs l'une, montant fictif. La colonne Total se calcule seule : quantité fois prix. Étape deux : l'onglet Stock. Reste égale départ, plus entrées, moins sorties. Étape trois : il sélectionne la colonne Total ; la somme s'affiche en bas. »

**Scène 12 — B4 Application · 2:39–3:10 · A**
- Visuel : capture réelle de Gemini : lignes collées, montant compté, réponse aux trois questions ; cadre successif sur chaque réponse ; puis les deux totaux côte à côte, coche.
- Écran : « Étape 4 · Étape 5 · Caisse : − 1 000 FCFA · paiement mobile oublié »
- VO : « Étape quatre : il colle les lignes de la semaine dans Gemini, avec sa caisse comptée. Les protections d'écran se vendent le mieux, surtout le samedi. Il n'en reste que six : rupture en début de semaine. La caisse affiche mille francs de moins que le tableau. Étape cinq : les totaux concordent. L'écart vient d'un paiement mobile oublié. Il commande cinquante protections. »

**Scène 13 — B5 Consolidation · 3:10–3:31 · C**
- Visuel : deux totaux face à face, « Assistant : 65 000 » et « Tableau : 74 000 » ; silence ; les lignes défilent, celle du samedi s'encadre (cadre + croix côté assistant). Badge « Montants fictifs ».
- Écran : « Assistant 65 000 · Tableau 74 000 → comparer ligne par ligne »
- VO : « L'assistant annonce soixante-cinq mille francs pour la semaine. Le tableau affiche soixante-quatorze mille. Lequel croire ? »
- Silence : 2 s
- VO : « Aucun, avant de vérifier. Comparez ligne par ligne. Ici, l'assistant a sauté la ligne du samedi. Votre tableau reste la référence. »

**Scène 14 — B6 Clôture · 3:31–3:59 · B (carte de rappel)**
- Visuel : carte de rappel, points révélés au rythme de la voix ; puis vignette de Komi, caisse cochée, carton d'accessoires livré ; titre de l'exercice.
- Écran : « 1. Suivre ventes, stock et caisse chaque semaine, avec l'IA » « 2. Noter chaque jour, faire le point chaque dimanche » « 3. Vérifier les totaux de l'IA avec le tableau » « 4. Facture officielle : suivre les règles des impôts »
- VO : « Retenez quatre points. Suivre ventes, stock et caisse chaque semaine, avec l'IA. Noter chaque jour, faire le point chaque dimanche. Vérifier les totaux de l'IA avec le tableau. Facture officielle : suivre les règles des impôts. Ce dimanche, la caisse de Komi tombe juste. À vous de jouer. Tenez votre tableau de caisse pendant sept jours. »

#### Captures à fournir par l'owner

1. **Photo de cahier → tableau (scène 7)** — téléphone, Gemini, compte « Karatou Démo ». Photographier une page de cahier fictive écrite à la main par l'équipe (ventes d'accessoires d'une journée, montants fictifs, aucun nom), l'envoyer avec : « Transforme cette page en tableau : date, article, quantité, prix, total. ». Garder, si possible, une prise où un chiffre est mal lu ; sinon, aucune croix à l'écran et la voix off reste générale. Durée utile : 20 s.
2. **Démo B4, Google Sheets (scène 11)** — téléphone, application Google Sheets, classeur fictif prérempli de la fiche. Saisir la ligne « samedi · Protection d'écran · 9 · 1000 » ; montrer la formule de Total ; onglet Stock, toucher la cellule « reste » pour afficher la formule ; sélectionner la colonne Total, tenir 3 s sur la somme en bas. Durée utile : 30 s. Masquer : nom du compte.
3. **Démo B4, Gemini (scène 12)** — copier les lignes de la semaine dans Google Sheets, les coller dans Gemini avec l'étape 2 de la consigne et le montant « 73 000 FCFA ». Durée utile : 30 s. Si le total de Gemini est faux, garder la prise : elle servira à la scène 13 et la voix off de la scène 12 sera adaptée.

#### Notes de script

- Prononciation : Lomé « Lo-mé » ; Komi « Ko-mi » ; Ségou « Sé-gou ».
- « Paiement mobile » est employé partout ; « mobile money » peut être dit une fois si l'owner le souhaite, puis remplacé. Aucun nom d'opérateur.
- La règle fiscale reste générale (« règles fiscales de votre pays ») : elle varie d'un pays et d'un régime à l'autre ; aucune obligation précise n'est affirmée.
- Les captures de tableur sont recadrées sur trois ou quatre lignes à la fois.
- Adaptation EN : « mobile money » sans glose, « official invoice », « tax administration ». HA et DJE : « devis », « reçu », « facture » doivent rester trois mots distincts, à faire proposer par le relecteur natif ; les captures restent en français, avec les lignes clés retapées dans la langue de la version.

### Leçon 6 — Projet final : votre dossier de lancement (`bz6`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez bâtir votre dossier de lancement et son plan d'action. »
- **Cas réel (B1 → B6)** : Hadiza, 36 ans, à Niamey, au Niger (cas fictif), prépare des repas pour les baptêmes, les mariages et les réunions d'associations. Elle sollicite un crédit pour des marmites et un réchaud auprès d'une agence de microfinance, qui attend son dossier complet. Ses pièces existent mais sont dispersées : notes d'entretiens, relevé des autres traiteurs, page chiffrée, captures WhatsApp, tableau de caisse. Elle les rassemble en quatre pages, prépare avec l'IA un plan de trente jours daté et mesurable, fait relire l'ensemble selon les quatre critères, corrige les deux faiblesses repérées et ajoute sa note d'usage de l'IA. Les cinq entrepreneurs des leçons précédentes servent d'exemples pour chaque pièce. En B6, le PDF est déposé et l'agence lui fixe un rendez-vous : elle sait défendre chaque ligne.
- **Unités de notion (B3)** : 1. Quatre pièces, un seul dossier — page chiffrée ; preuves ; vitrine et gestion ; plan de 30 jours ; un PDF de quatre pages, captures en annexe · 2. Trente jours, semaine par semaine — trois actions au plus par semaine, datées, avec un responsable ; un indicateur par semaine · 3. Quatre critères d'évaluation — preuves réelles ; chiffres cohérents et sourcés ; plan daté et mesurable ; usage responsable de l'IA · 4. L'IA relit, vous signez — relecture selon les critères ; chaque phrase doit pouvoir être défendue par l'apprenant.
- **Démo (B4)** : Google Docs et Gemini (compte « Karatou Démo »). 1. Parcourir le dossier de Hadiza page par page. 2. Partie A de la consigne : Gemini propose le plan de 30 jours à partir de la page et des hypothèses ; Hadiza fixe dates et indicateurs. 3. Partie B : relecture selon les quatre critères ; Gemini signale deux faiblesses volontairement laissées dans la version de démonstration (une action sans date, une source sans lien). 4. Corriger dans Google Docs ; ajouter la note d'usage de l'IA. 5. Exporter en PDF. Données fictives (FCFA) : coût de revient d'un plat 600, prix 1 000, marge 400, charges fixes 60 000 par mois, seuil 150 plats par mois ; preuves : cinq entretiens avec des responsables d'associations, un test de 40 plats vendus pour une réunion, quatre traiteurs comparés, deux sources datées. Plan fictif : semaine 1, servir deux réunions déjà réservées (indicateur : 60 plats) ; semaine 2, présenter le menu à quatre associations de quartier (indicateur : 4 visites, 1 commande) ; semaine 3, confirmer auprès de la mairie les règles d'hygiène pour un traiteur (indicateur : réponse obtenue) ; semaine 4, point de caisse du mois et décision sur le réchaud (indicateur : seuil de 150 plats atteint ou non). Note d'usage de l'IA (exemple) : « L'IA a mis en forme mes notes, proposé le plan et relu le dossier. J'ai refait chaque calcul, ouvert chaque source et corrigé les textes. Aucune donnée personnelle de client n'a été saisie. » Résultat attendu à l'écran : le dossier corrigé, puis le PDF de quatre pages. [à vérifier au moment de la production : réponse réelle de Gemini à la relecture ; export PDF depuis l'application Google Docs sur téléphone.]
- **Consolidation (B5)** : prédiction. À Kano, au Nigeria, Sani rend un premier dossier de vingt pages écrites par l'IA, avec « un marché de plusieurs milliards de nairas » sans source et un plan sans date : passe-t-il les critères ? Réponse : non, trois critères sur quatre manquent ; il le reprend avec ses vrais relevés et aboutit à quatre pages vérifiables.
- **Consigne à copier** :

```text
Partie A — Mon plan de 30 jours
Tu es un conseiller en création d'entreprise en Afrique de l'Ouest. Voici ma page de projet et mes hypothèses à vérifier : [collez-les, sans nom ni numéro de client].
Propose un plan de 30 jours : 4 semaines, 3 actions au plus par semaine. Pour chaque action : une date, un responsable, un indicateur chiffré.

Partie B — Relecture de mon dossier
Tu es le jury d'un programme d'appui aux entrepreneurs. Voici mon dossier : [collez le texte des 4 pièces].
1. Évalue-le avec ces 4 critères : preuves réelles ; chiffres cohérents et sourcés ; plan daté et mesurable ; usage responsable de l'IA. Pour chaque critère : atteint ou non, et pourquoi, en citant la phrase concernée.
2. Liste les 3 corrections les plus importantes, par ordre de priorité.
Ne réécris pas le dossier à ma place.
```

- **Exercice** : « Assemblez et déposez votre dossier de lancement » — 1. Rassemblez vos quatre pièces : page du projet chiffrée (leçon 3) ; preuves : synthèse des entretiens, résultat du test, tableau des concurrents avec sources (leçons 1 et 2) ; vitrine et gestion : trois captures WhatsApp Business et une semaine de tableau de caisse (leçons 4 et 5) ; plan de 30 jours. 2. Avec la partie A de la consigne, rédigez le plan : quatre semaines, trois actions datées au plus par semaine, un indicateur par semaine. 3. Avec la partie B, faites relire le dossier, corrigez-le, ajoutez une note d'usage de l'IA de trois lignes et vérifiez qu'aucune donnée personnelle n'apparaît. 4. Exportez un seul PDF (quatre pages au plus, captures en annexe) et déposez-le dans l'espace « Projet final » du cours [modalité de dépôt à confirmer par l'owner]. Évaluation : chaque critère est jugé « atteint » ou « non atteint » ; le projet est validé quand les quatre critères sont atteints [barème à confirmer par l'owner].
- **Carte de rappel** : 1. Bâtir votre dossier de lancement et son plan d'action 2. Quatre pièces, un seul PDF, un plan daté — suivie de la carte récapitulative du cours (un point par leçon) : 1. Tester l'idée auprès de vrais clients 2. Pas de source, pas de chiffre 3. Une page : coût, prix, seuil 4. WhatsApp Business : vitrine et messages relus 5. Chaque semaine : ventes, stock, caisse
- **Quiz** :
  1. Combien de pièces contient le dossier de lancement ? — A) Une seule page B) Quatre : page chiffrée, preuves, vitrine et gestion, plan de 30 jours C) Vingt pages rédigées par l'IA D) Seulement le plan d'action — **Réponse : B**
  2. Quelle action est bien écrite pour le plan de 30 jours ? — A) « Trouver plus de clients » B) « Être plus visible » C) « Semaine 2 : présenter le menu à 4 associations — indicateur : 4 visites » D) « Améliorer la qualité » — **Réponse : C**
  3. Le dossier de Sani annonce « un marché de plusieurs milliards de nairas », sans source. Quel critère n'est pas atteint ? — A) Chiffres cohérents et sourcés B) Mise en page C) Longueur du texte D) Choix de la police — **Réponse : A**
  4. Que contient la note d'usage de l'IA ? — A) Les noms de vos clients B) Le mot de passe de votre compte C) Rien : elle est facultative D) Ce que l'IA a fait, et ce que vous avez vérifié — **Réponse : D**
  5. Sous quelle forme déposez-vous votre dossier ? — A) Un seul PDF de quatre pages au plus, captures en annexe B) Des photos envoyées une par une C) Un message vocal D) Un lien vers une discussion WhatsApp — **Réponse : A**
- **Marques citées** : Google Docs, Gemini (Google), WhatsApp, WhatsApp Business (Meta)

#### Script v1 (à valider par l'owner)

Durée estimée : 4:00 · Mots de voix off : 456 *(340–460)*

**Scène 1 — B1 Accroche · 0:00–0:02 · E**
- Visuel : carte des ateliers ; l'épingle s'allume sur Niamey ; fondu vers l'illustration de Hadiza dans sa cuisine, grande marmite, carnet de commandes, feuilles éparpillées sur la table.
- Écran : « Niamey · Niger · cas fictif »
- VO : « Niamey, au Niger. »

**Scène 2 — B1 Accroche · 0:02–0:12 · B**
- Visuel : carte de promesse.
- Écran : « Bâtir votre dossier de lancement et son plan d'action »
- VO : « À la fin de cette leçon, vous saurez bâtir votre dossier de lancement et son plan d'action. »

**Scène 3 — B1 Accroche · 0:12–0:27 · E**
- Visuel : même illustration ; les feuilles éparpillées s'étiquettent une à une : « entretiens », « traiteurs », « page chiffrée », « WhatsApp », « caisse ».
- Écran : « Marmites + réchaud · l'agence attend le dossier complet »
- VO : « Votre caisse tombe juste. Hadiza prépare des repas pour les baptêmes et les réunions. Pour des marmites et un réchaud, elle demande un crédit. L'agence attend son dossier complet. »

**Scène 4 — B2 Cadrage · 0:27–0:45 · B**
- Visuel : un épais document « écrit par l'IA » se barre (croix) ; à côté, une chemise fine « preuves + plan daté » (coche).
- Écran : « Un dossier = des preuves + un plan daté »
- VO : « Un dossier de lancement n'est pas un texte parfait écrit par l'IA. C'est la preuve de ce que vous avez déjà fait. Et la liste datée de ce que vous ferez ensuite. Il valide le cours. »

**Scène 5 — B3 Notion · 0:45–0:48 · B (carte unité 1)**
- Visuel : carte d'unité, numéro « 1 ».
- Écran : « 1 · Quatre pièces, un seul dossier »
- VO : « D'abord, les livrables : quatre pièces. »

**Scène 6 — B3 Notion · 0:48–1:16 · C**
- Visuel : la carte des ateliers revient ; à chaque pièce citée, la vignette du persona correspondant s'allume sur sa ville (Fatimata, Cheikh, Aya, Sènami, Komi) et sa pièce glisse dans la pile du dossier ; la quatrième pièce, un calendrier, s'ajoute sur Niamey.
- Écran : « 1 page chiffrée · 2 preuves · 3 vitrine et caisse · 4 plan de 30 jours »
- VO : « Pièce un : votre page de projet chiffrée, comme celle de Fatimata. Pièce deux : vos preuves. Des entretiens et un test, comme Cheikh ; des concurrents et des sources, comme Aya. Pièce trois : votre vitrine et votre caisse, comme Sènami et Komi. Pièce quatre : votre plan de trente jours. Un seul PDF, quatre pages au plus. »

**Scène 7 — B3 Notion · 1:16–1:33 · B (carte unité 2)**
- Visuel : carte d'unité, numéro « 2 », trois lignes révélées une à une, icône de calendrier.
- Écran : « 2 · Trente jours, semaine par semaine » « 3 actions max, datées » « 1 indicateur par semaine »
- VO : « Ensuite, le plan de trente jours. Quatre semaines, trois actions au plus par semaine. Chaque action a une date et un responsable. Chaque semaine a un indicateur : un nombre que vous suivez. »

**Scène 8 — B3 Notion · 1:33–1:36 · B (carte unité 3)**
- Visuel : carte d'unité, numéro « 3 ».
- Écran : « 3 · Quatre critères d'évaluation »
- VO : « Voici comment votre dossier sera évalué. »

**Scène 9 — B3 Notion · 1:36–1:56 · C**
- Visuel : grille de quatre critères numérotés, chacun avec un pictogramme (empreinte de pas, calculatrice, calendrier, cadenas) et une case à cocher.
- Écran : « 1. Preuves réelles · 2. Chiffres sourcés · 3. Plan daté · 4. IA responsable »
- VO : « Un : des preuves réelles. Deux : des chiffres cohérents et sourcés. Trois : un plan daté et mesurable. Quatre : un usage responsable de l'IA. Aucune donnée personnelle, et une courte note : ce que l'IA a fait, ce que vous avez vérifié. »

**Scène 10 — B3 Notion · 1:56–2:07 · B (carte unité 4)**
- Visuel : carte d'unité, numéro « 4 », un stylo qui signe en bas d'une page.
- Écran : « 4 · L'IA relit, vous signez »
- VO : « Dernier conseil : l'IA relit, vous signez. Elle repère ce qui manque. Mais chaque phrase doit pouvoir être défendue par vous. »

**Scène 11 — B4 Application · 2:07–2:13 · G**
- Visuel : carte de consigne, fond clair, parties A et B en version abrégée.
- Écran : « Consigne de Hadiza, parties A et B — texte complet sous la vidéo »
- VO : « Voici la consigne de Hadiza, en deux parties, sous la vidéo. »

**Scène 12 — B4 Application · 2:13–2:38 · A**
- Visuel : capture réelle de Google Docs : le dossier de Hadiza page par page, chaque page tenue au moins 4 s, recadrée sur son titre et une ligne clé ; numéros de page 1 à 4. Badge « Montants fictifs ».
- Écran : « Page 1 · Page 2 · Page 3 · Page 4 · plan de 30 jours »
- VO : « Voici le dossier de Hadiza, page par page. Page un : coût d'un plat, prix et seuil, montants fictifs. Page deux : cinq entretiens, un test réussi, quatre traiteurs comparés. Page trois : sa vitrine WhatsApp et une semaine de caisse. Page quatre : son plan de trente jours, préparé avec Gemini. »

**Scène 13 — B4 Application · 2:38–2:56 · A**
- Visuel : capture réelle de Gemini : relecture selon les quatre critères ; cadre sur chaque faiblesse signalée ; puis Google Docs, les deux corrections (coche), la note d'usage de l'IA, l'export PDF.
- Écran : « 2 faiblesses : une action sans date · une source sans lien »
- VO : « Puis, la consigne de relecture. Gemini signale deux faiblesses : une action sans date, une source sans lien. Hadiza corrige les deux. Elle ajoute sa note d'usage de l'IA. Elle exporte en PDF : le dossier est prêt. »

**Scène 14 — B5 Consolidation · 2:56–3:25 · C**
- Visuel : petite illustration de Sani devant son restaurant, étiquette « Kano · Nigeria » ; une pile de vingt pages ; silence ; la grille des critères reçoit trois croix ; puis la pile se réduit à quatre pages cochées.
- Écran : « 20 pages sans preuve → 4 pages vérifiables »
- VO : « À Kano, au Nigeria, Sani veut agrandir son restaurant. Son premier dossier : vingt pages écrites par l'IA. Un marché de plusieurs milliards de nairas, sans source. Un plan sans aucune date. Passe-t-il les critères ? »
- Silence : 2 s
- VO : « Non : trois critères sur quatre manquent. Sani reprend tout avec ses vrais relevés. Quatre pages, plus courtes, mais vérifiables. »

**Scène 15 — B6 Clôture · 3:25–3:36 · B (carte de rappel)**
- Visuel : carte de rappel, deux points révélés au rythme de la voix.
- Écran : « 1. Bâtir votre dossier de lancement et son plan d'action » « 2. Quatre pièces, un seul PDF, un plan daté »
- VO : « Retenez deux points. Bâtir votre dossier de lancement et son plan d'action. Quatre pièces, un seul PDF, un plan daté. »

**Scène 16 — B6 Clôture · 3:36–4:00 · B (carte récapitulative)**
- Visuel : carte récapitulative « Le cours en 5 points », points révélés un à un (tenue au moins 4 s une fois complète) ; puis la carte des ateliers avec les six épingles allumées et le dossier de Hadiza au centre ; titre de l'exercice.
- Écran : « 1. Tester l'idée auprès de vrais clients » « 2. Pas de source, pas de chiffre » « 3. Une page : coût, prix, seuil » « 4. WhatsApp Business : vitrine et messages relus » « 5. Chaque semaine : ventes, stock, caisse »
- VO : « Et tout le cours en cinq gestes : tester, vérifier, chiffrer, vendre, suivre. Hadiza a déposé son dossier, et l'agence lui donne rendez-vous. Cheikh, Aya, Fatimata, Sènami et Komi ont fait le même chemin. Déposez votre PDF dans l'espace Projet final. Assemblez et déposez votre dossier de lancement. »

#### Captures à fournir par l'owner

1. **Dossier de Hadiza, page par page (scène 12)** — téléphone, application Google Docs, compte « Karatou Démo », dossier fictif de quatre pages rédigé par Claude à partir de la fiche (voir 2.6) et mis en page par l'équipe, avec deux faiblesses volontaires. Défiler page par page, tenir chaque titre 4 s. Durée utile : 30 s. Masquer : nom du compte.
2. **Plan de 30 jours (fiche, B4 étape 2)** — Gemini : coller la partie A de la consigne avec la page et les hypothèses de Hadiza. Capture de réserve, utilisée si l'owner préfère montrer la génération du plan. Durée utile : 15 s.
3. **Relecture, corrections et PDF (scène 13)** — Gemini : coller la partie B avec le texte du dossier ; tenir la réponse sur les deux faiblesses. Google Docs : corriger la date manquante et ajouter le lien manquant ; coller la note d'usage de l'IA ; exporter en PDF [à vérifier au moment de la production : libellé du menu d'export sur téléphone]. Durée utile : 30 s.

#### Notes de script

- Prononciation : Niamey « Nia-mè » ; Kano « Ka-no » ; Sani « Sa-ni » ; naira « naï-ra ».
- « Plusieurs milliards de nairas » est une citation du mauvais dossier, jamais un chiffre présenté comme vrai ; il reste sans montant précis.
- La scène 6 est la seule où les cinq autres personas reviennent ; leurs vignettes doivent être identiques à celles de leurs leçons (voir 2.4).
- Le nom de l'espace de dépôt reprend exactement le libellé de la plateforme [à confirmer par l'owner].
- Adaptation EN : « launch file », « 30-day action plan », « indicator », « microfinance institution », « naira ». HA et DJE : les cinq verbes du récapitulatif (tester, vérifier, chiffrer, vendre, suivre) doivent rester cinq verbes courts ; le nom de l'espace de dépôt reprend le libellé de la plateforme dans chaque langue.

## 2.6 Captures et éléments à préparer

| Leçon | Élément | Comment l'obtenir | Qui |
|---|---|---|---|
| Toutes | Comptes de démonstration : Google « Karatou Démo » (Gemini, Google Sheets, Google Docs) ; SIM et WhatsApp Business « Couture Sènami (démo) » ; téléphone « client » | créer les comptes une semaine avant les captures ; aucun historique ; contacts limités à l'équipe | owner + équipe |
| Toutes | Fiches de référence des six personas (Cheikh, Aya, Fatimata, Sènami, Komi, Hadiza) et des quatre personnages secondaires (Bakary, Mamadou, Akosua, Sani) | illustrations en aplats, style de 2.4, validées par l'owner avant la production des leçons | Claude |
| Toutes | Carte des ateliers (Afrique de l'Ouest simplifiée, épingles des dix villes citées) | dessin vectoriel à partir d'un fond de carte libre de droits ; contours et noms de pays relus par l'owner | Claude |
| Toutes | Cartes d'unité, cartes de promesse, cartes de rappel, cartes de consigne, schémas animés | produits avec HyperFrames à partir des scripts et des fiches | Claude |
| Toutes | Consignes complètes à placer sous chaque vidéo | texte exact des fiches, relu par l'owner | Claude + owner |
| 1 | Captures Gemini : question naïve, consigne « Client 1 », démo B4 | voir « Captures à fournir » de la leçon 1 | owner |
| 2 | Captures Gemini avec sources, puis navigateur ; démo B4 | voir « Captures à fournir » de la leçon 2 ; navigateur sans onglets ni compte visibles | owner |
| 3 | Capture Google Docs (page en neuf cases), Gemini en agent de crédit, démo B4 avec calculatrice | voir « Captures à fournir » de la leçon 3 | owner |
| 4 | Captures WhatsApp Business (profil, Outils, catalogue, accueil, réponse rapide, étiquette) et téléphone « client » | voir « Captures à fournir » de la leçon 4 ; article du catalogue créé la veille ; numéros masqués au montage | owner + un membre de l'équipe |
| 4 | Trois photos de modèles de couture, sans marque ni personne reconnaissable | photo au téléphone, fond neutre, lumière du jour | équipe |
| 4 | Vérification des libellés WhatsApp Business et du délai de quatorze jours du message d'accueil | aide officielle de WhatsApp Business, le jour des captures | owner |
| 5 | Page de cahier fictive (ventes d'accessoires d'une journée, aucun nom) | écrite à la main par l'équipe, photographiée | équipe |
| 5 | Classeur Google Sheets prérempli (Ventes, Stock, Caisse) | saisir les données fictives de la fiche de la leçon 5 | équipe |
| 5 | Captures Google Sheets puis Gemini (démo B4) | voir « Captures à fournir » de la leçon 5 | owner |
| 6 | Dossier fictif complet de Hadiza (quatre pages, deux faiblesses volontaires) | texte rédigé à partir de la fiche de la leçon 6, puis mis en page dans Google Docs | Claude (texte) + équipe (mise en page) |
| 6 | Modèle de dossier vide (Google Docs, quatre titres de pièces), joint à la leçon | créer le document | équipe |
| 6 | Captures Google Docs et Gemini (dossier, relecture, corrections, export PDF) | voir « Captures à fournir » de la leçon 6 | owner |
| 6 | Modalité de dépôt du projet final (espace « Projet final ») et barème | à confirmer sur la plateforme avant la voix off de la scène 16 | owner |
