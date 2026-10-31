# CLAUDE.md — Karatou Academy · Production vidéo
# Cours 6 — IA pour les éducateurs

> **Pour l'owner — mode d'emploi**
> 1. Créez un dossier vide sur votre ordinateur, par exemple `karatou-ia-educateurs`.
> 2. Copiez-y ce fichier et renommez-le exactement `CLAUDE.md`.
> 3. Ouvrez Claude Code dans ce dossier (dans un terminal : `cd karatou-ia-educateurs` puis `claude`).
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
livraison/ia-educateurs/<id>/      fichiers livrés · livraison/ia-educateurs/INTEGRATION.md
```

`<id>` est l'identifiant de la leçon (`ed1`, `ed2`…). Langues : `fr`, `en`, `ha`, `dje`.

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

### 9.2 Nommage et contenu de `livraison/ia-educateurs/<id>/`

`ia-educateurs_<id>_<langue>_v<n>.mp4` · `…-360.mp4` · `….srt` · `….vtt` · `…_cover.jpg` (1920 × 1080, qualité 85,
première image stable de B1) · `…_transcript.md` (un titre par temps, texte dit + actions à l'écran entre
crochets) · `RECETTE.md`.

### 9.3 Mise en ligne

Chaîne YouTube **Karatou Academy**, vidéos **non répertoriées**, une vidéo par langue, sous-titres `.srt` ajoutés
comme piste. Titre : « Karatou Academy — IA pour les éducateurs — Leçon N : <titre> (<LANGUE>) ». Le site lit des **URL
d'intégration** : `https://www.youtube.com/embed/<ID>` (jamais `watch?v=` ni `youtu.be/`). Teste chaque URL dans un
navigateur avant de la consigner.

### 9.4 Intégration au site — `livraison/ia-educateurs/INTEGRATION.md`

Le site lit, pour chaque leçon, un champ `video: { fr, en, ha }` dans les fichiers TypeScript du dépôt
`karatou-academy-app` (registre `authoredLessons`). Chaque leçon y a aussi un texte (objectif, quatre sections,
exemple, exercice, quiz de cinq questions, réflexion, glossaire), rédigé par l'équipe avec le skill
`karatou-course-creator`, et des lignes Supabase (module, leçons) pour la progression et les certificats.

Ton rôle : tenir `INTEGRATION.md` à jour, leçon par leçon : module `ia-educateurs`, id, titre, promesse (objectif), cas
réel (exemple), exercice (titre et étapes), carte de rappel, quiz, marques citées, URL FR / EN / HA, et URL DJE
« en attente ». Ce fichier est remis à l'équipe technique ; tu ne modifies pas le dépôt du site.

### 9.5 Corrections après publication

Une URL publiée est figée. Pour corriger : nouvelle version `v2` → mise en ligne → nouvelle URL testée →
`INTEGRATION.md` mis à jour → l'équipe technique remplace l'URL → l'ancienne vidéo est rendue privée, jamais
supprimée. Consigne chaque version dans le journal de `PROGRESS.md`.

## 10. `PROGRESS.md` — modèle

```markdown
# PROGRESS — Cours 6 · IA pour les éducateurs
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
| Numéro | 6 |
| Titre | IA pour les éducateurs |
| Format | Motion graphics + captures d'écran, voix off (voix clonée de l'owner) |
| Owner / voix | à désigner — nom complet et titre exact demandés au premier lancement |
| Rubrique | IA & Données |
| Public | Enseignants du primaire et du secondaire, formateurs de la formation professionnelle, conseillers pédagogiques. Classes pléthoriques, peu de matériel, programmes officiels à respecter. |
| Slug du module (provisoire) | `ia-educateurs` |
| Préfixe des leçons | `ed` |
| Nombre de vidéos | 5 (dont la dernière = projet final certifiant) |
| Durée par vidéo | 3–5 min (cible 4:00) |
| Langues | FR (référence) · EN · HA · DJE |
| Prérequis | Un téléphone ou un ordinateur connecté. Un compte Google gratuit (pour Gemini et Gemini Notebook). L'extrait du programme officiel de sa classe, sur papier ou en PDF. Aucune compétence technique. |
| Promesse du cours | Vous préparerez avec l'IA des séquences, des exercices et des retours adaptés à vos classes, en gardant la main sur le programme, la note et les données de vos élèves. |
| Positionnement | Cours métier : l'IA est l'assistante de préparation de l'enseignant ; les élèves n'ont besoin d'aucun appareil. Prolonge le module `intelligence-artificielle` (notions générales) et la leçon cl2 du module `introduction-claude-ai` (bien formuler sa demande). Se distingue du cours 12 « Étudier et rédiger avec l'IA » (côté élève et étudiant : y renvoyer pour l'intégrité académique) et du cours 15 « Choisir le bon outil IA gratuit ». Démonstrations sur Gemini et Gemini Notebook (un seul compte Google) ; toutes les consignes fonctionnent aussi dans ChatGPT, Claude ou Copilot. |
| Fil rouge | Trois collègues fictifs, membres d'un même groupe WhatsApp d'enseignants. **Mariama**, institutrice de CM1 à Zinder, 85 élèves : sa séquence sur les fractions est le fil principal (leçons 1, 2 et 5) et devient l'exemple du projet final. **Ibrahim**, professeur de SVT dans un collège de Maradi, 70 copies à rendre (leçon 3). **Hadiza**, formatrice en électricité du bâtiment dans un centre de formation professionnelle de Tahoua (leçon 4). |
| Marques citées | Gemini, Gemini Notebook (anciennement NotebookLM), Google, ChatGPT, Claude, Copilot, WhatsApp |

## 2.2 Ce que l'apprenant saura faire

- Rédiger une consigne qui fait produire une fiche de séquence à partir de l'extrait du programme officiel et des contraintes réelles de sa classe.
- Créer des exercices et un quiz à trois niveaux pour un même objectif, utilisables sans photocopies (ardoise, tableau, oral), avec une correction vérifiée.
- Construire une grille de correction et des retours types, en anonymisant toute réponse d'élève et en gardant la décision sur la note.
- Transformer ses propres documents en fiche de révision, quiz ou résumé audio avec Gemini Notebook, et vérifier chaque réponse par sa citation.
- Adapter une consigne à un profil d'élèves et à la langue de la classe, avec relecture par un locuteur.
- Assembler, documenter et déposer un kit de séquence complet, avec une note d'usage responsable.

## 2.3 Plan du cours

| Leçon | Id | Titre | Promesse (objectif) | Cas réel (B1) | Démo (B4) | Durée cible |
|---|---|---|---|---|---|---|
| 1 | `ed1` | Une séquence fidèle à votre programme | Préparer une séquence fidèle à votre programme | Mariama, CM1 à Zinder, 85 élèves, démarre les fractions lundi | Gemini : consigne avec extrait officiel et contraintes → fiche de 4 séances en tableau → 3 vérifications → relance | 4:00 |
| 2 | `ed2` | Exercices et quiz à trois niveaux | Créer un quiz et des exercices à trois niveaux | Mariama : dans la même classe, certains confondent encore les termes, d'autres finissent tout de suite | Gemini : 3 niveaux d'exercices + quiz sur ardoise dont chaque mauvaise réponse vise une erreur → l'enseignante refait chaque exercice | 4:00 |
| 3 | `ed3` | Corriger avec une grille, sans exposer vos élèves | Corriger avec une grille, sans exposer vos élèves | Ibrahim, SVT à Maradi, 70 copies sur le paludisme | Gemini : grille critériée → 2 réponses anonymisées → niveaux proposés, décision de l'enseignant → correction collective | 4:00 |
| 4 | `ed4` | Vos documents en fiches, quiz et audio | Transformer vos documents en fiches, quiz et audio | Hadiza, formatrice en électricité à Tahoua, apprentis qui lisent peu | Gemini Notebook : carnet + notes de cours → question vérifiée par citation → fiches, quiz et résumé audio | 4:00 |
| 5 | `ed5` | Projet final : votre kit de séquence complet | Assembler et présenter votre kit de séquence complet | Mariama présente sa séquence à la réunion pédagogique de son école | Le kit de Mariama de bout en bout, dont la consigne en haoussa relue par un collègue et la note d'usage | 4:00 |

## 2.4 Direction artistique du cours

- **Motif récurrent : le cahier de préparation.** Un cahier à spirale à cinq onglets (Séquence · Exercices · Grille · Supports · Kit). Il s'ouvre sur l'onglet du jour au début de B3 et se remplit au fil du cours ; il apparaît complet dans la leçon 5.
- **Personas** : illustrations à plat, formes simples, palette de la charte, visages stylisés sans traits réalistes. Décors du Niger : salle de classe à bancs, tableau noir, ardoises, cour d'école, atelier d'électricité. Chaque persona porte un objet repère : la craie (Mariama), la pile de copies (Ibrahim), le tournevis isolé (Hadiza). Jamais d'image générée qui imite une personne réelle.
- **Trois schémas types**, réutilisés d'une leçon à l'autre :
  1. *L'entonnoir* : sources (extrait officiel, contraintes, documents) → consigne → document produit.
  2. *Les trois marches* : un même objectif en haut ; trois marches marquées ● socle, ▲ standard, ■ défi (forme et libellé, jamais la couleur seule).
  3. *La boucle de contrôle* : l'IA propose → l'enseignant vérifie → l'enseignant décide ; se ferme sur le tampon « Vérifié par l'enseignant ».
- **Iconographie** : ardoise, craie, tableau noir, cahier, copie, loupe (vérifier), cadenas (données d'élèves), tampon. Données : pastille « anonyme » avec coche, pastille « nominatif » avec croix.
- **Captures** : fond clair, zoom sur la zone utile, une annotation à la fois (cadre, flèche, coche, croix, au moins 2,5 s), compte, barre latérale et historique masqués.
- **Ce qui reste fixe** : le cahier en ouverture de B3, les trois schémas, la carte de consigne (G) sur fond clair, le tampon en B6. **Ce qui change** : le persona, l'onglet du jour, l'objet repère.
- **Son** : aucune musique sous la voix ; un court habillage sonore possible sur les cartes uniquement.
- **Minutage** : timecodes sur l'horloge des beats (0:00 = fin de la carte d'ouverture) ; cartes d'ouverture et de clôture et mention légale (Partie 1) en sus. Débit de référence : 115–120 mots/min.

## 2.5 Les leçons

### Leçon 1 — Une séquence fidèle à votre programme (`ed1`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez préparer une séquence fidèle à votre programme. »
- **Cas réel (B1 → B6)** : Mariama, institutrice de CM1 à Zinder (cas fictif), 85 élèves, un manuel pour quatre, pas de photocopieur. Lundi, elle démarre les fractions. Un premier essai d'une ligne lui a rendu une leçon pensée pour une autre classe. En B6, elle entre en classe avec une fiche de quatre séances qui tient au tableau et à la craie, dont chaque objectif renvoie à une ligne de son programme. Devient le champ `example` de la leçon.
- **Unités de notion (B3)** : 1. L'extrait du programme d'abord — l'IA travaille sur le texte officiel que vous collez, pas sur sa mémoire. · 2. Les contraintes réelles de la classe — effectif, matériel, durée et langue des élèves : sans elles, l'IA imagine une classe idéale. · 3. Un format directement utilisable — un tableau, une ligne par séance : objectif, déroulé, matériel, trace écrite, vérification.
- **Démo (B4)** : Gemini, version gratuite (ordinateur ou téléphone). 1. Ouvrir une nouvelle conversation. 2. Coller la consigne de la carte G, complétée avec l'extrait et les contraintes de Mariama. 3. Envoyer : la fiche s'affiche en tableau, une ligne par séance. 4. Vérifier trois points, une coche à la fois : chaque objectif renvoie à une ligne de l'extrait ; le matériel est dans la liste ; la séance tient dans la durée. 5. Signaler tout écart et faire corriger. 6. Relancer : « Pour chaque séance, ajoute une trace écrite de cinq lignes maximum, à recopier au tableau. » 7. Copier la fiche dans le document de préparation. Résultat attendu à l'écran : un tableau de quatre séances, travail en groupes, matériel de la liste, trace écrite courte.
- **Consolidation (B5)** : prédiction. « Mariama demande : “Ta fiche est-elle conforme au programme du Niger ?” Que va répondre l'IA ? » — 3 s de silence — « Souvent oui, avec assurance ; parfois elle nuance. Dans les deux cas, elle ne peut rien prouver. La seule preuve : votre comparaison ligne à ligne avec le texte officiel. »
- **Consigne à copier** :

```text
Tu es conseiller pédagogique. Prépare une séquence de [nombre] séances pour ma classe.
Classe : [niveau, ex. CM1], [effectif] élèves. Langue parlée à la maison : [langue].
Matériel disponible : [ex. tableau, craie, ardoises, capsules de bouteilles]. Aucun autre matériel.
Durée d'une séance : [durée].
Voici l'extrait officiel de mon programme. Ne sors pas de ce texte :
"""
[collez ici la compétence, les objectifs et les contenus, mot pour mot]
"""
Présente la séquence dans un tableau, une ligne par séance : objectif (repris de l'extrait), déroulé en étapes, matériel, trace écrite, comment je vérifie que les élèves ont compris.
Signale tout objectif que tu n'as pas pu relier à l'extrait.
```

- **Exercice** : « Préparez votre première séquence avec l'IA » — 1. Recopiez l'extrait du programme d'une séquence que vous enseignerez bientôt. 2. Complétez la consigne avec votre effectif, votre matériel, vos durées et la langue de vos élèves, puis envoyez-la. 3. Vérifiez chaque objectif contre l'extrait, le matériel contre votre liste, la durée contre votre emploi du temps. 4. Notez dans votre cahier ce que vous avez fait corriger.
- **Carte de rappel** : 1. Préparer une séquence fidèle à votre programme · 2. L'extrait officiel d'abord · 3. Vos contraintes réelles · 4. Vous comparez, vous décidez
- **Quiz** :
  1. Pourquoi coller l'extrait du programme dans la consigne ? — A) Pour obtenir une réponse plus longue B) Parce que l'IA ne connaît pas de façon fiable votre programme officiel C) Parce que Gemini l'exige D) Pour que l'IA traduise le programme — **Réponse : B**
  2. Mariama n'indique ni son effectif ni son matériel. Quel est le risque ? — A) Aucun : l'IA devine la classe B) Une fiche plus courte C) Une fiche pensée pour une classe idéale, avec un matériel qu'elle n'a pas D) Une fiche écrite en anglais — **Réponse : C**
  3. Quel format demander pour une fiche utilisable lundi matin ? — A) Un long texte continu B) Une liste de sites web C) Un résumé de trois lignes D) Un tableau, une ligne par séance : objectif, déroulé, matériel, trace écrite, vérification — **Réponse : D**
  4. L'IA affirme : « Cette fiche est conforme au programme. » Que faites-vous ? — A) Vous la croyez B) Vous lui reposez la question C) Vous comparez chaque objectif avec le texte officiel D) Vous demandez l'avis d'un élève — **Réponse : C**
  5. Qui décide de la version finale de la séquence ? — A) L'enseignant B) L'IA C) Le premier outil qui répond D) Personne, la fiche est automatique — **Réponse : A**
- **Marques citées** : Gemini, ChatGPT, Claude, Copilot

#### Script v1 (à valider par l'owner)

Durée estimée : 3:58 · Mots de voix off : 418

**Scène 1 — B1 Accroche · 0:00–0:08 · E**
- Visuel : illustration à plat ; Mariama au tableau noir devant une classe comble, ardoises sur les bancs. Entrée en fondu, lent glissement latéral.
- Écran : « Zinder · CM1 · 85 élèves »
- VO : « À Zinder, Mariama a quatre-vingt-cinq élèves et un manuel pour quatre. Lundi, elle commence les fractions. »

**Scène 2 — B1 Accroche · 0:08–0:17 · B**
- Visuel : carte typographique ; le cahier de préparation s'ouvre sur l'onglet vide « Séquence », la promesse s'inscrit.
- Écran : « Préparer une séquence fidèle à votre programme »
- VO : « À la fin de cette leçon, vous saurez préparer une séquence fidèle à votre programme. »

**Scène 3 — B2 Cadrage · 0:17–0:29 · A**
- Visuel : capture réelle : la demande d'une ligne, puis le haut de la réponse ; cadre, puis croix, sur un élément qui ne correspond pas à la classe (matériel, effectif ou durée).
- Écran : « Une ligne de demande, une classe imaginaire »
- VO : « Son premier essai tenait en une ligne. La réponse était soignée, mais pensée pour une autre classe, avec un autre matériel. »

**Scène 4 — B2 Cadrage · 0:29–0:48 · C**
- Visuel : schéma « l'entonnoir » : à gauche, un nuage de programmes mélangés, barré d'une croix ; à droite, la feuille « Extrait officiel », seule à entrer dans l'entonnoir.
- Écran : « L'IA ne connaît pas votre programme : donnez-le-lui »
- VO : « Le malentendu : croire que l'IA connaît votre programme. Elle a lu des programmes de nombreux pays, sans savoir lequel est le vôtre. Alors elle fabrique une moyenne plausible. Donnez-lui le texte officiel, et elle travaillera dessus. »

**Scène 5 — B3 Notion · 0:48–1:10 · A**
- Visuel : onglet « Séquence » du cahier (1 s), puis capture réelle : la zone de saisie avec l'extrait collé entre guillemets ; cadre sur « Ne sors pas de ce texte ».
- Écran : « 1. L'extrait du programme d'abord »
- VO : « Première règle : l'extrait du programme d'abord. Copiez la compétence, les objectifs et les contenus, mot pour mot. Placez-les entre guillemets. Puis ajoutez une phrase claire : ne sors pas de ce texte. Ainsi, chaque objectif proposé se relie à une ligne officielle. »

**Scène 6 — B3 Notion · 1:10–1:34 · C**
- Visuel : schéma : quatre icônes viennent se placer autour de la consigne, une par phrase : silhouettes (effectif), craie et ardoise (matériel), horloge (durée), bulle (langue).
- Écran : « 2. Effectif · Matériel · Durée · Langue »
- VO : « Deuxième règle : vos contraintes réelles. Mariama écrit l'effectif : quatre-vingt-cinq élèves. Le matériel : tableau, craie, ardoises, capsules de bouteilles. La durée : quarante-cinq minutes par séance. La langue de la maison : le haoussa. Sans ces informations, l'IA imagine une classe idéale. Avec elles, elle prépare la vraie. »

**Scène 7 — B3 Notion · 1:34–1:59 · B**
- Visuel : carte ; un tableau vide se dessine, colonne par colonne, au rythme de la voix.
- Écran : « 3. Objectif · Déroulé · Matériel · Trace écrite · Vérification »
- VO : « Troisième règle : un format que vous utiliserez vraiment. Demandez un tableau, avec une ligne par séance. Dans chaque ligne : l'objectif, le déroulé, le matériel et la trace écrite. Ajoutez la façon de vérifier que les élèves ont compris. Autrement dit : une fiche prête pour lundi matin. »

**Scène 8 — B4 Application · 1:59–2:17 · G**
- Visuel : carte de consigne sur fond clair, texte complet ; les crochets surlignés un par un.
- Écran : la consigne complète (bloc « Consigne à copier » de la fiche), en deux volets si elle dépasse huit lignes.
- VO : « Voici la consigne complète. Une consigne, c'est le texte exact de votre demande. Mettez la vidéo en pause pour la recopier. Remplacez les crochets par vos informations. »

**Scène 9 — B4 Application · 2:17–2:33 · A**
- Visuel : capture réelle (Gemini) : la consigne collée, l'envoi, puis la réponse en tableau qui défile lentement ; cadre sur la première ligne.
- Écran : « Gemini · même consigne ailleurs »
- VO : « Mariama colle sa consigne dans Gemini, puis l'envoie. La même consigne fonctionne aussi dans ChatGPT, Claude ou Copilot. La réponse arrive en tableau, une ligne par séance. »

**Scène 10 — B4 Application · 2:33–2:47 · A**
- Visuel : même capture ; trois coches apparaissent l'une après l'autre, chacune sur la zone vérifiée : objectif et ligne de l'extrait, matériel, durée.
- Écran : « Objectif ✓ · Matériel ✓ · Durée ✓ »
- VO : « Elle vérifie trois points. Chaque objectif correspond-il à une ligne de l'extrait ? Le matériel est-il dans sa liste ? La séance tient-elle en quarante-cinq minutes ? »

**Scène 11 — B4 Application · 2:47–3:05 · A**
- Visuel : capture réelle : la relance tapée, puis la colonne « Trace écrite » complétée ; cadre sur une trace écrite.
- Écran : « Relance : une trace écrite de 5 lignes »
- VO : « Si un point ne va pas, elle le signale, et l'IA corrige. Puis elle demande une trace écrite de cinq lignes par séance. La fiche part dans son document de préparation. »

**Scène 12 — B5 Consolidation · 3:05–3:17 · B**
- Visuel : carte question, fixe ; 3 s de silence après la question.
- Écran : « Ta fiche est-elle conforme au programme ? »
- VO : « À vous de prédire. Mariama demande : “Ta fiche est-elle conforme au programme du Niger ?” Que va répondre l'IA ? »

**Scène 13 — B5 Consolidation · 3:17–3:34 · A**
- Visuel : capture réelle de la question et de la réponse obtenue ; annotation « Affirmation ≠ preuve » avec une croix, tenue 3 s.
- Écran : « Une affirmation n'est pas une preuve »
- VO : « Souvent, elle répond oui, avec assurance. Parfois, elle nuance. Dans les deux cas, elle ne peut rien prouver. La seule preuve, c'est votre comparaison, ligne à ligne, avec le texte officiel. »

**Scène 14 — B6 Clôture · 3:34–3:47 · B (carte de rappel 1/2)**
- Visuel : le cahier de Mariama, onglet « Séquence » rempli, tampon « Vérifié par l'enseignante » ; la promesse s'inscrit.
- Écran : « Préparer une séquence fidèle à votre programme »
- VO : « Lundi, Mariama entre en classe : tout tient au tableau, tout vient du programme. Vous savez maintenant préparer une séquence fidèle à votre programme. »

**Scène 15 — B6 Clôture · 3:47–3:58 · B (carte de rappel 2/2)**
- Visuel : carte de rappel, points révélés au rythme de la voix.
- Écran : « 2. L'extrait officiel d'abord » « 3. Vos contraintes réelles » « 4. Vous comparez, vous décidez »
- VO : « Retenez : l'extrait officiel d'abord, vos contraintes réelles, et votre comparaison finale. Préparez votre première séquence avec l'IA. »

#### Captures à fournir par l'owner

Outil : Gemini, version gratuite, de préférence sur ordinateur (navigateur, fenêtre propre, zoom 150 %) ; le téléphone convient aussi (application Gemini). Compte de démonstration, sans nom ni photo réels visibles. À masquer partout : nom et photo du compte, historique des conversations, notifications.

| Scène | Gestes exacts | Texte exact à taper | Durée utile |
|---|---|---|---|
| 3 | Nouvelle conversation ; taper, envoyer ; filmer la demande et le haut de la réponse en défilement lent. Repérer un élément inadapté à une classe de 85 élèves sans photocopieur (pour l'annotation). | « Prépare une leçon sur les fractions pour le CM1. » | 10 s |
| 5 | Nouvelle conversation ; coller la consigne de la fiche complétée avec les valeurs de Mariama (CM1, 85 élèves, haoussa, tableau, craie, ardoises, capsules de bouteilles, 45 minutes, 4 séances) et l'extrait ci-dessous ; **ne pas envoyer** ; capture fixe zoomée sur l'extrait entre guillemets. | Consigne complétée + extrait | 6 s |
| 9 | Envoyer la consigne ; filmer l'arrivée de la réponse puis un défilement lent du tableau. | — | 20 s |
| 10 | Captures fixes de chaque ligne du tableau (objectif, matériel, durée lisibles). | — | 3 × 4 s |
| 11 | Dans la même conversation, taper la relance, envoyer, filmer la colonne « Trace écrite ». | « Pour chaque séance, ajoute une trace écrite de cinq lignes maximum, à recopier au tableau. » | 10 s |
| 13 | Dans la même conversation, taper la question, envoyer, filmer la réponse telle quelle (oui ou nuance). | « Ta fiche est-elle conforme au programme du Niger ? » | 8 s |

Extrait à coller : un extrait réel du programme officiel de CM1 sur les fractions si l'owner en dispose (citer sa source dans les notes de production). Sinon, ce texte, affiché à l'écran avec la mention « Extrait (exemple) » et jamais présenté comme officiel : « Compétence : résoudre des problèmes simples avec des fractions. Objectifs : lire et écrire une fraction simple ; représenter une fraction par un dessin ; comparer deux fractions de même numérateur ou de même dénominateur. Contenus : fraction, numérateur, dénominateur. »

#### Notes de script

- Prononciation : Gemini « jé-mi-ni » ; ChatGPT « tchat-gé-pé-té » ; Copilot « co-pi-lote ».
- Les VO des scènes 3, 9, 11 et 13 décrivent la réponse réellement obtenue : ne jamais annoncer à l'oral un élément absent de la capture. Si Gemini ne produit pas de tableau à la scène 9, relancer « Présente-la sous forme de tableau » et filmer la relance.
- Ne pas affirmer que l'IA « connaît » ou « ignore » totalement le programme du Niger : la VO dit « sans savoir lequel est le vôtre ».
- Terme glosé : « consigne » (scène 8). « Trace écrite » et « séquence » sont du vocabulaire d'enseignant : pas de glose.
- Disponibilité de Gemini au Niger et libellés de l'interface [à vérifier au moment de la production].
- Données : aucune consigne ne contient de nom d'élève ; le cas est fictif.
- Adaptation EN : « CM1 » → « Year 5 (CM1) » ; « trace écrite » → « board summary » ; « séquence » → « unit (series of lessons) ». HA : garder « CM1 » ; le vocabulaire scolaire des fractions doit être celui des écoles bilingues [à valider par le relecteur HA]. DJE : même règle, relecteur zarma. Toutes langues : les capsules de bouteilles restent l'exemple de matériel local.

### Leçon 2 — Exercices et quiz à trois niveaux (`ed2`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez créer un quiz et des exercices à trois niveaux. »
- **Cas réel (B1 → B6)** : Mariama (suite, cas fictif). Sa séquence sur les fractions est prête (leçon 1). Mais parmi ses 85 élèves, certains confondent encore les termes, d'autres ont fini avant les autres. Pas de photocopieur : tout passe par le tableau, les ardoises et l'oral. En B6, son tableau est partagé en trois colonnes (● ▲ ■) sur un seul objectif, et le quiz sur ardoise lui montre quelle erreur reprendre le lendemain. Devient le champ `example` de la leçon.
- **Unités de notion (B3)** : 1. Un objectif, trois marches — le même objectif pour tous ; socle (reconnaître sur un dessin), standard (comparer), défi (problème de la vie locale). · 2. Chaque mauvaise réponse vise une erreur — dans un quiz bien construit, chaque choix faux correspond à une erreur fréquente : la réponse levée dit quoi reprendre. · 3. Un format sans photocopies — ardoises levées ensemble (procédé La Martinière), tableau en trois colonnes, questions à l'oral. · 4. Vous refaites chaque exercice — l'IA peut se tromper dans un calcul ; seule votre correction fait foi.
- **Démo (B4)** : Gemini, version gratuite. 1. Coller la consigne de la carte G avec l'objectif de la séance 2 : comparer deux fractions de même numérateur. 2. Envoyer : trois niveaux d'exercices (trois exercices par niveau, avec correction) et cinq questions à choix multiple dont chaque mauvaise réponse est expliquée. 3. Mariama refait chaque exercice elle-même et compare avec la correction proposée ; une coche par exercice vérifié. 4. Relance : « Réécris les consignes du niveau socle en phrases de huit mots maximum, et propose un dessin simple à faire au tableau pour chacune. » 5. Elle recopie les trois niveaux dans son document de préparation. Résultat attendu à l'écran : trois blocs ● ▲ ■ et un quiz de cinq questions aux erreurs annotées.
- **Consolidation (B5)** : prédiction. « Beaucoup d'ardoises affichent B : “un huitième est plus grand qu'un quart”. Que vous dit ce choix ? » — 3 s de silence — « Ces élèves comparent les dénominateurs comme des nombres entiers : huit est plus grand que quatre. C'est l'erreur visée par la réponse B. Mariama reprend avec une galette partagée en quatre, puis en huit. »
- **Consigne à copier** :

```text
Voici l'objectif de ma séance, tiré de mon programme : [objectif].
Classe : [niveau], [effectif] élèves, pas de photocopieur. Les élèves répondent sur ardoise, au tableau ou à l'oral.
1. Propose 3 niveaux d'exercices pour CE MÊME objectif, 3 exercices par niveau, avec la correction :
- Socle : [ex. reconnaître une fraction sur un dessin], consignes de 8 mots maximum.
- Standard : [ex. comparer deux fractions].
- Défi : un problème tiré de la vie au Niger [ex. le marché, le champ, la cuisine].
2. Propose 5 questions à choix multiple (A, B, C, D) pour un quiz sur ardoise.
Pour chaque mauvaise réponse, indique l'erreur d'élève qu'elle révèle.
Ne sors pas de l'objectif.
```

- **Exercice** : « Créez trois niveaux d'exercices pour votre prochaine séance » — 1. Collez dans la consigne l'objectif d'une séance de votre séquence (leçon 1). 2. Faites produire les trois niveaux et le quiz. 3. Refaites vous-même chaque exercice et chaque question ; corrigez la correction si besoin. 4. Préparez la disposition de votre tableau en trois colonnes.
- **Carte de rappel** : 1. Créer un quiz et des exercices à trois niveaux · 2. Un objectif, trois marches · 3. Chaque erreur a sa réponse · 4. Vous refaites chaque exercice
- **Quiz** :
  1. Différencier dans une classe de 85 élèves, c'est d'abord… — A) préparer trois leçons différentes B) garder un même objectif, avec trois niveaux d'entrée C) séparer les élèves dans trois salles D) donner moins d'exercices aux élèves en difficulté — **Réponse : B**
  2. Dans un quiz bien construit, une mauvaise réponse sert à… — A) piéger les élèves B) allonger le quiz C) révéler une erreur précise à reprendre D) rien de particulier — **Réponse : C**
  3. Beaucoup d'élèves lèvent « un huitième est plus grand qu'un quart ». Que reprendre ? — A) Plus on partage, plus chaque part est petite B) La table de multiplication par huit C) L'écriture des chiffres D) Rien, la réponse est juste — **Réponse : A**
  4. Sans photocopieur, quel format convient au quiz ? — A) Une fiche imprimée par élève B) Un formulaire en ligne C) Un envoi par courriel D) Les ardoises levées, le tableau ou l'oral — **Réponse : D**
  5. L'IA fournit la correction des exercices. Avant la classe, vous… — A) la recopiez telle quelle B) lui demandez si elle est sûre C) refaites chaque exercice vous-même D) la donnez aux élèves sans la lire — **Réponse : C**
- **Marques citées** : Gemini

#### Script v1 (à valider par l'owner)

Durée estimée : 3:53 · Mots de voix off : 405

**Scène 1 — B1 Accroche · 0:00–0:09 · E**
- Visuel : illustration à plat ; la classe de Mariama : quelques ardoises vides, d'autres déjà remplies, des mains levées. Entrée en fondu.
- Écran : « Même classe, trois rythmes »
- VO : « Dans la leçon un, Mariama a préparé sa séquence. Mais certains élèves bloquent, d'autres ont déjà fini. »

**Scène 2 — B1 Accroche · 0:09–0:19 · B**
- Visuel : carte typographique ; l'onglet « Exercices » du cahier s'ouvre, la promesse s'inscrit.
- Écran : « Créer un quiz et des exercices à trois niveaux »
- VO : « À la fin de cette leçon, vous saurez créer un quiz et des exercices à trois niveaux. »

**Scène 3 — B2 Cadrage · 0:19–0:30 · B**
- Visuel : carte ; trois grosses piles de fiches de leçon apparaissent, puis une croix les barre.
- Écran : « Différencier = trois leçons ? Non. »
- VO : « On pense souvent : différencier, c'est préparer trois leçons. Avec quatre-vingt-cinq élèves, c'est impossible. Bonne nouvelle : ce n'est pas cela. »

**Scène 4 — B2 Cadrage · 0:30–0:43 · C**
- Visuel : schéma « les trois marches » : une seule porte « Objectif » en haut, trois marches marquées ● socle, ▲ standard, ■ défi ; trois silhouettes montent, chacune depuis sa marche.
- Écran : « Un objectif · trois entrées »
- VO : « Différencier, c'est garder un seul objectif, et ouvrir trois portes d'entrée. Tout le monde va au même endroit. Chacun part de sa marche. »

**Scène 5 — B3 Notion · 0:43–1:02 · A**
- Visuel : onglet « Exercices » (1 s), puis capture réelle des trois niveaux produits par Gemini ; les pictogrammes ● ▲ ■ se posent un à un à côté de chaque bloc.
- Écran : « 1. Reconnaître ● · Comparer ▲ · Résoudre ■ »
- VO : « Première idée : un objectif, trois marches. Ici, l'objectif est de comparer deux fractions. Au socle, l'élève reconnaît une fraction sur un dessin. Au niveau standard, il compare. Au niveau défi, il résout un problème du marché. »

**Scène 6 — B3 Notion · 1:02–1:22 · A**
- Visuel : capture réelle d'une question du quiz ; cadre sur une mauvaise réponse, puis flèche vers l'explication de l'erreur visée.
- Écran : « 2. Chaque mauvaise réponse vise une erreur »
- VO : « Deuxième idée : chaque mauvaise réponse vise une erreur. Dans un bon quiz, les choix faux ne sont pas pris au hasard. Chacun correspond à une erreur fréquente des élèves. La réponse levée vous dit alors quoi reprendre. »

**Scène 7 — B3 Notion · 1:22–1:43 · C**
- Visuel : schéma : un tableau noir partagé en trois colonnes ● ▲ ■, puis une rangée d'ardoises qui se lèvent ensemble ; une loupe passe sur les ardoises.
- Écran : « 3. Ardoises levées · tableau en trois colonnes »
- VO : « Troisième idée : un format sans photocopies. Les élèves écrivent sur l'ardoise, puis la lèvent tous ensemble. C'est le procédé La Martinière. D'un regard, vous voyez qui a compris. Les exercices, eux, se recopient au tableau, partagé en trois colonnes. »

**Scène 8 — B3 Notion · 1:43–1:59 · B**
- Visuel : carte ; un crayon refait un calcul, une coche apparaît.
- Écran : « 4. Vous refaites chaque exercice »
- VO : « Quatrième idée : vous refaites chaque exercice. L'IA peut se tromper dans un calcul, sans prévenir. C'est une hallucination : une réponse fausse, donnée avec assurance. Seule votre correction fait foi. »

**Scène 9 — B4 Application · 1:59–2:14 · G**
- Visuel : carte de consigne sur fond clair, texte complet ; les crochets surlignés un par un.
- Écran : la consigne complète (bloc « Consigne à copier » de la fiche), en deux volets si elle dépasse huit lignes.
- VO : « Voici la consigne. Mettez la vidéo en pause pour la recopier. Collez l'objectif de votre séance à la place des crochets. »

**Scène 10 — B4 Application · 2:14–2:27 · A**
- Visuel : capture réelle (Gemini) : envoi de la consigne, arrivée des trois niveaux puis du quiz, défilement lent ; cadre sur la première explication d'erreur.
- Écran : « Trois niveaux + un quiz aux erreurs annotées »
- VO : « Mariama l'envoie dans Gemini. Les trois niveaux arrivent, avec la correction. Puis le quiz : pour chaque mauvaise réponse, l'erreur qu'elle révèle. »

**Scène 11 — B4 Application · 2:27–2:42 · A**
- Visuel : capture réelle de la correction ; une coche se pose sur chaque exercice vérifié ; si une erreur existe, croix puis correction.
- Écran : « Chaque exercice refait par l'enseignante »
- VO : « Avant la classe, elle refait chaque exercice elle-même, au crayon. Elle compare avec la correction proposée. Une erreur ? Elle la corrige, et elle le note. »

**Scène 12 — B4 Application · 2:42–2:58 · A**
- Visuel : capture réelle : la relance tapée, puis les consignes du socle raccourcies, chacune avec son dessin ; cadre sur une consigne.
- Écran : « Socle : 8 mots maximum + un dessin »
- VO : « Dernière retouche : les consignes du socle, en phrases de huit mots maximum. Chacune avec un dessin à faire au tableau. Elle recopie les trois niveaux dans son document. »

**Scène 13 — B5 Consolidation · 2:58–3:11 · B**
- Visuel : carte question ; une rangée d'ardoises levées, la plupart affichent « B » ; 3 s de silence après la question.
- Écran : « Réponse B : 1/8 est plus grand que 1/4. Pourquoi ? »
- VO : « Le lendemain, beaucoup d'ardoises affichent la réponse B : un huitième est plus grand qu'un quart. Que vous dit ce choix ? »

**Scène 14 — B5 Consolidation · 3:11–3:29 · C**
- Visuel : schéma : une galette coupée en quatre, une autre en huit ; une part de chaque se superpose : la part d'un quart est la plus grande.
- Écran : « 8 > 4, mais 1/8 < 1/4 »
- VO : « Ces élèves comparent les dénominateurs comme des nombres entiers : huit est plus grand que quatre. C'est l'erreur visée par la réponse B. Mariama reprend avec une galette, partagée en quatre, puis en huit. »

**Scène 15 — B6 Clôture · 3:29–3:40 · B (carte de rappel 1/2)**
- Visuel : le tableau de Mariama en trois colonnes ● ▲ ■ sous un seul objectif ; tampon « Vérifié par l'enseignante » ; la promesse s'inscrit.
- Écran : « Créer un quiz et des exercices à trois niveaux »
- VO : « Au tableau, trois colonnes, un seul objectif. Vous savez maintenant créer un quiz et des exercices à trois niveaux. »

**Scène 16 — B6 Clôture · 3:40–3:53 · B (carte de rappel 2/2)**
- Visuel : carte de rappel, points révélés au rythme de la voix.
- Écran : « 2. Un objectif, trois marches » « 3. Chaque erreur a sa réponse » « 4. Vous refaites chaque exercice »
- VO : « Retenez : un objectif, trois marches ; chaque erreur a sa réponse ; vous refaites tout. Créez trois niveaux d'exercices pour votre prochaine séance. »

#### Captures à fournir par l'owner

Outil : Gemini, version gratuite, même compte que la leçon 1 (ordinateur de préférence, zoom 150 %). À masquer : nom et photo du compte, historique, notifications.

| Scène | Gestes exacts | Texte exact à taper | Durée utile |
|---|---|---|---|
| 5, 6, 10 | Nouvelle conversation ; coller la consigne de la fiche complétée avec : objectif « Comparer deux fractions de même numérateur (par exemple 1/4 et 1/8) », CM1, 85 élèves, ardoises ; envoyer ; filmer l'arrivée de la réponse, puis défilement lent des trois niveaux et du quiz. Faire aussi deux captures fixes : les trois blocs de niveaux ; une question du quiz avec l'explication de ses mauvaises réponses. | Consigne complétée | 25 s + 2 fixes |
| 11 | Capture fixe de la correction des exercices (tous les exercices lisibles). L'owner refait les calculs avant de filmer ; noter toute erreur trouvée pour l'annotation. | — | 6 s |
| 12 | Dans la même conversation, taper la relance, envoyer, filmer les consignes du socle réécrites. | « Réécris les consignes du niveau socle en phrases de huit mots maximum, et propose un dessin simple à faire au tableau pour chacune. » | 10 s |

#### Notes de script

- Prononciation : « La Martinière » (la-mar-ti-nière) ; fractions dites en lettres (« un quart », « un huitième »), écrites 1/4, 1/8 à l'écran.
- Scène 11 : si la correction de Gemini contient une erreur, la montrer (croix, puis correction) : c'est le meilleur plan de la leçon. Sinon, garder la VO telle quelle (« Une erreur ? Elle la corrige »).
- Terme glosé : « hallucination » (scène 8), une seule fois. « Procédé La Martinière » glosé par le geste (écrire puis lever l'ardoise).
- La galette de la scène 14 est un dessin de schéma, sans marque ni produit reconnaissable.
- Adaptation EN : « procédé La Martinière » → « the slate method (everyone writes, then raises their slate) » ; « socle » → « core level ». HA : remplacer la galette par un aliment rond que l'on partage couramment (ex. la masa) [à valider par le relecteur HA] ; le mot pour « ardoise » doit être celui de l'école [à valider]. DJE : même adaptation, relecteur zarma.

### Leçon 3 — Corriger avec une grille, sans exposer vos élèves (`ed3`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez corriger avec une grille, sans exposer vos élèves. »
- **Cas réel (B1 → B6)** : Ibrahim, professeur de SVT dans un collège de Maradi (cas fictif), doit rendre 70 copies d'une classe de 4e. Question du devoir : « Expliquez comment le paludisme se transmet et citez deux moyens de prévention. » Sa première idée : photographier les copies et laisser l'IA noter. En B6, il rend des copies notées par lui avec une grille commune, chaque élève reçoit un retour de deux lignes, la correction collective est au tableau, et aucun nom n'est sorti de son cahier. Devient le champ `example` de la leçon.
- **Unités de notion (B3)** : 1. La grille avant les copies — trois ou quatre critères observables, trois niveaux ; l'IA les rédige à partir de la question et de la réponse attendue, vous ajustez. · 2. Anonymiser avant de coller — aucun nom, aucune liste de classe, aucune photo de copie : on retape la réponse seule, nommée « copie A ». · 3. L'IA propose, vous notez — elle suggère un niveau par critère avec une justification ; elle peut varier ; la note est votre décision. · 4. Un retour collectif pour toute la classe — les erreurs que vous relevez deviennent une correction au tableau et un exercice de remédiation.
- **Démo (B4)** : Gemini, version gratuite. 1. Coller la consigne de la carte G avec la question, la réponse attendue et deux réponses retapées sans nom (copie A, copie B). 2. Envoyer : la grille arrive, puis, pour chaque copie, un niveau proposé par critère, une justification et un commentaire de deux lignes. 3. Pour la copie B, Ibrahim n'est pas d'accord sur un critère : il retient son propre niveau et note pourquoi (annotation « Décision de l'enseignant »). 4. Relance : il colle les trois erreurs qu'il a relevées dans ses copies et demande une correction collective et un exercice de remédiation. Résultat attendu à l'écran : la grille, deux retours, une correction collective à recopier au tableau.
- **Consolidation (B5)** : prédiction. « Ibrahim colle la même copie dans deux conversations différentes. Obtient-il le même niveau ? » — 3 s de silence — « Pas forcément : l'IA peut varier d'une fois à l'autre. Une note doit être stable, juste et expliquée ; c'est votre grille, appliquée par vous, qui le garantit. »
- **Consigne à copier** :

```text
Je suis professeur de [matière] en [niveau]. Voici la question de mon devoir : [question].
Voici la réponse attendue : [réponse attendue].
1. Propose une grille de correction : 3 ou 4 critères observables, 3 niveaux par critère (atteint, partiel, non atteint), barème sur [total] points.
2. Pour chaque copie ci-dessous, propose un niveau par critère avec une justification d'une phrase, puis un commentaire de deux lignes adressé à l'élève, bienveillant et précis.
Copie A : [réponse retapée, sans nom ni détail identifiant]
Copie B : [réponse retapée, sans nom ni détail identifiant]
Ne me donne pas de note finale : c'est moi qui décide.
```

- **Exercice** : « Construisez votre grille de correction avec l'IA » — 1. Choisissez une question de votre prochain devoir et rédigez la réponse attendue. 2. Faites produire la grille, puis ajustez-la avant de lire les copies. 3. Testez-la sur deux réponses retapées sans nom ni détail identifiant. 4. Notez où vous n'êtes pas d'accord avec l'IA, et pourquoi.
- **Carte de rappel** : 1. Corriger avec une grille, sans exposer vos élèves · 2. La grille avant les copies · 3. Aucun nom dans la consigne · 4. L'IA propose, vous notez
- **Quiz** :
  1. Avant de coller une réponse d'élève dans l'IA, vous… — A) ajoutez son nom pour vous y retrouver B) retapez la réponse seule, sans nom ni détail identifiant C) photographiez la copie entière D) collez la liste de la classe — **Réponse : B**
  2. Pourquoi rédiger la grille avant de lire les copies ? — A) Pour noter tous les élèves avec les mêmes critères, observables B) Parce que l'IA l'exige C) Pour ne pas lire les copies D) Pour aller plus vite — **Réponse : A**
  3. L'IA propose « atteint » pour un critère ; vous n'êtes pas d'accord. Que faites-vous ? — A) Vous gardez son avis B) Vous demandez à un autre outil C) Vous décidez, grille en main, et vous notez votre raison D) Vous faites la moyenne des deux avis — **Réponse : C**
  4. La même copie, collée deux fois, reçoit deux avis différents. Qu'en conclure ? — A) Il faut la coller une troisième fois B) L'IA est en panne C) La copie est mal écrite D) La note reste votre décision, appliquée avec votre grille — **Réponse : D**
  5. Beaucoup de copies montrent la même erreur. Quel usage de l'IA est le plus utile ? — A) Préparer une correction collective et un exercice de remédiation B) Corriger les copies à votre place C) Envoyer les notes aux parents D) Classer les élèves par nom — **Réponse : A**
- **Marques citées** : Gemini

#### Script v1 (à valider par l'owner)

Durée estimée : 3:54 · Mots de voix off : 414

**Scène 1 — B1 Accroche · 0:00–0:09 · E**
- Visuel : illustration à plat ; Ibrahim à son bureau, le soir, sous une lampe, devant une haute pile de copies.
- Écran : « Maradi · SVT · 70 copies »
- VO : « Leçon deux : Mariama a créé un quiz qui révèle les erreurs. Ibrahim, lui, a soixante-dix copies à corriger. »

**Scène 2 — B1 Accroche · 0:09–0:18 · B**
- Visuel : carte typographique ; l'onglet « Grille » du cahier s'ouvre, la promesse s'inscrit.
- Écran : « Corriger avec une grille, sans exposer vos élèves »
- VO : « À la fin de cette leçon, vous saurez corriger avec une grille, sans exposer vos élèves. »

**Scène 3 — B2 Cadrage · 0:18–0:34 · C**
- Visuel : schéma : un téléphone photographie une copie dont l'en-tête porte un nom (flouté) ; la photo file vers un nuage ; un cadenas se ferme, une croix barre le trajet.
- Écran : « Photographier les copies et laisser noter ? »
- VO : « Sa première idée : photographier les copies, et laisser l'IA noter. Deux problèmes. Les copies portent des noms : ce sont des données personnelles. Et la note engage l'enseignant, pas la machine. »

**Scène 4 — B2 Cadrage · 0:34–0:44 · B**
- Visuel : carte ; deux lignes s'inscrivent l'une après l'autre.
- Écran : « L'IA aide à préparer. Vous corrigez. »
- VO : « L'IA ne corrige pas à votre place. Elle vous aide à préparer la grille, puis les retours. »

**Scène 5 — B3 Notion · 0:44–1:08 · A**
- Visuel : onglet « Grille » (1 s), puis capture réelle de la grille produite ; cadre sur un critère, puis sur ses trois niveaux.
- Écran : « 1. La grille avant les copies »
- VO : « Première règle : la grille avant les copies. Donnez à l'IA la question et la réponse attendue. Elle propose trois ou quatre critères observables, avec trois niveaux. Observable veut dire : on peut le voir sur la copie. Vous ajustez, puis vous ne changez plus la grille. »

**Scène 6 — B3 Notion · 1:08–1:28 · C**
- Visuel : schéma à deux colonnes : à gauche, pastille « anonyme » et coche : une réponse retapée, titrée « Copie A » ; à droite, pastille « nominatif » et croix : nom, liste de classe, photo de copie, relevé de notes.
- Écran : « 2. Anonymiser avant de coller »
- VO : « Deuxième règle : anonymiser avant de coller. Jamais de nom, jamais de liste de classe, jamais de photo de copie. Vous retapez seulement la réponse, et vous l'appelez copie A. Les données de vos élèves restent dans votre cahier. »

**Scène 7 — B3 Notion · 1:28–1:45 · B**
- Visuel : carte ; trois pictogrammes reliés par des flèches : l'IA propose, l'enseignant vérifie, l'enseignant décide ; le tampon se pose sur le dernier.
- Écran : « 3. L'IA propose, vous notez »
- VO : « Troisième règle : l'IA propose, vous notez. Elle suggère un niveau pour chaque critère, avec une justification. Vous acceptez, ou vous changez. La décision vous appartient, et vous pouvez l'expliquer à l'élève. »

**Scène 8 — B3 Notion · 1:45–2:01 · A**
- Visuel : capture réelle de la correction collective produite ; cadre sur l'exercice de remédiation.
- Écran : « 4. Un retour collectif pour toute la classe »
- VO : « Quatrième règle : un retour collectif pour toute la classe. Vous relevez les erreurs qui reviennent. L'IA vous aide à préparer la correction au tableau, et un exercice pour les reprendre. »

**Scène 9 — B4 Application · 2:01–2:16 · G**
- Visuel : carte de consigne sur fond clair, texte complet ; la dernière ligne est encadrée.
- Écran : la consigne complète (bloc « Consigne à copier » de la fiche), en deux volets si elle dépasse huit lignes.
- VO : « Voici la consigne. Mettez la vidéo en pause pour la recopier. Remarquez la dernière ligne : ne me donne pas de note finale. »

**Scène 10 — B4 Application · 2:16–2:29 · A**
- Visuel : capture réelle (Gemini) : la consigne avec les deux copies retapées, l'envoi, puis la grille et les niveaux proposés qui défilent lentement.
- Écran : « Copie A · Copie B : aucun nom »
- VO : « Ibrahim l'envoie dans Gemini, avec deux copies retapées, sans nom. La grille arrive, puis un niveau proposé par critère, avec un commentaire. »

**Scène 11 — B4 Application · 2:29–2:43 · A**
- Visuel : même capture, zoom sur la copie B ; cadre sur un niveau proposé ; l'annotation « Décision de l'enseignant : partiel » se pose à côté, avec le tampon.
- Écran : « Décision de l'enseignant »
- VO : « Pour la copie B, il n'est pas d'accord sur un critère. Il retient son propre niveau, et note pourquoi. C'est sa décision d'enseignant. »

**Scène 12 — B4 Application · 2:43–3:05 · A**
- Visuel : capture réelle : la relance avec les trois erreurs relevées, puis la correction collective ; cadre sur la phrase de correction de l'erreur sur l'eau.
- Écran : « 3 erreurs relevées → une correction au tableau »
- VO : « Puis il colle les trois erreurs relevées dans ses copies. Par exemple : le paludisme viendrait de l'eau qu'on boit. En réalité, il se transmet par la piqûre d'un moustique. L'IA prépare une correction collective et un exercice de remédiation. »

**Scène 13 — B5 Consolidation · 3:05–3:17 · B**
- Visuel : carte question, deux fenêtres de conversation côte à côte, vides ; 3 s de silence après la question.
- Écran : « Même copie, deux conversations : même niveau ? »
- VO : « À vous de prédire. Ibrahim colle la même copie dans deux conversations différentes. Obtient-il le même niveau ? »

**Scène 14 — B5 Consolidation · 3:17–3:31 · B**
- Visuel : carte ; deux pastilles de niveau différentes apparaissent dans les deux fenêtres ; puis la grille passe au premier plan avec le tampon.
- Écran : « Une note stable vient de votre grille »
- VO : « Pas forcément. L'IA peut varier d'une fois à l'autre. Une note doit être stable, juste et expliquée. C'est votre grille, appliquée par vous, qui le garantit. »

**Scène 15 — B6 Clôture · 3:31–3:44 · B (carte de rappel 1/2)**
- Visuel : Ibrahim rend les copies ; la correction collective au tableau ; le cahier fermé avec le cadenas ; la promesse s'inscrit.
- Écran : « Corriger avec une grille, sans exposer vos élèves »
- VO : « Ibrahim rend ses copies : une grille commune, un retour pour chacun, aucun nom sorti. Vous savez corriger avec une grille, sans exposer vos élèves. »

**Scène 16 — B6 Clôture · 3:44–3:54 · B (carte de rappel 2/2)**
- Visuel : carte de rappel, points révélés au rythme de la voix.
- Écran : « 2. La grille avant les copies » « 3. Aucun nom dans la consigne » « 4. L'IA propose, vous notez »
- VO : « Retenez : la grille d'abord, aucun nom, et vous notez. Construisez votre grille de correction avec l'IA. »

#### Captures à fournir par l'owner

Outil : Gemini, version gratuite, ordinateur de préférence (zoom 150 %). À masquer : nom et photo du compte, historique, notifications. **Aucune copie réelle** : les deux réponses ci-dessous sont écrites pour la démonstration.

| Scène | Gestes exacts | Texte exact à taper | Durée utile |
|---|---|---|---|
| 5, 10, 11 | Nouvelle conversation ; coller la consigne de la fiche complétée avec les textes ci-dessous (matière SVT, niveau 4e, barème sur 10) ; envoyer ; filmer l'arrivée de la grille puis des niveaux proposés, défilement lent. Captures fixes : la grille entière ; le bloc de la copie B. | Consigne complétée | 20 s + 2 fixes |
| 8, 12 | Dans la même conversation, taper la relance, envoyer, filmer la correction collective et l'exercice de remédiation. | Relance ci-dessous | 15 s |

- Question : « Expliquez comment le paludisme se transmet et citez deux moyens de prévention. »
- Réponse attendue : « Le paludisme est dû à un parasite. Il se transmet par la piqûre d'un moustique femelle infecté, l'anophèle. Prévention : dormir sous une moustiquaire imprégnée d'insecticide ; supprimer les eaux stagnantes où les moustiques se reproduisent. »
- Copie A : « Le paludisme se transmet par la piqûre d'un moustique. Pour se protéger, on dort sous une moustiquaire et on enlève les eaux qui stagnent. »
- Copie B : « Le paludisme vient de l'eau sale qu'on boit. Il faut faire bouillir l'eau et dormir sous la moustiquaire. »
- Relance : « Dans mes copies, j'ai relevé trois erreurs fréquentes : 1) le paludisme viendrait de l'eau sale qu'on boit ; 2) le moustique est cité, mais pas le parasite qu'il transmet ; 3) les moyens de prévention sont cités sans explication. Prépare une correction collective à écrire au tableau, et un exercice court pour reprendre ces erreurs. »

#### Notes de script

- Prononciation : « anophèle » (a-no-fèl).
- Contenu scientifique : faire relire la réponse attendue et la correction collective par un professeur de SVT avant production ; ne garder à l'écran que des passages exacts (sinon, croix et correction).
- La VO de la scène 11 suppose un désaccord sur la copie B : la copie B est construite pour cela (erreur sur la transmission). Si Gemini propose déjà « non atteint » sur ce critère, choisir un autre critère pour l'annotation.
- Scène 14 : ne pas affirmer que l'IA donne « toujours » des notes différentes ; elle « peut varier ».
- Termes glosés : « observable » (scène 5), « données personnelles » (scène 3, par l'exemple des noms).
- Adaptation EN : « SVT » → « biology » ; « 4e » → « Year 9 (4e) » ; « grille » → « marking rubric ». HA : « paludisme » → terme courant de la santé publique en haoussa [à valider par le relecteur HA] ; garder l'exemple de la moustiquaire. DJE : même règle, relecteur zarma.

### Leçon 4 — Vos documents en fiches, quiz et audio (`ed4`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez transformer vos documents en fiches, quiz et audio. »
- **Cas réel (B1 → B6)** : Hadiza, formatrice en électricité du bâtiment dans un centre de formation professionnelle de Tahoua (cas fictif). Ses apprentis de première année lisent peu ; elle a ses propres notes de cours en PDF et le règlement de l'atelier. Elle veut qu'ils révisent son cours à elle, pas un cours trouvé ailleurs. En B6, le soir même, les apprentis écoutent le résumé audio de son cours sur leur téléphone et s'entraînent avec le quiz, après qu'elle a tout vérifié. Devient le champ `example` de la leçon.
- **Unités de notion (B3)** : 1. Un carnet, vos sources — Gemini Notebook travaille dans un carnet, un espace par sujet, à partir des documents que vous y déposez. · 2. Vérifier par la citation — chaque réponse porte des numéros ; un clic affiche le passage exact du document. · 3. Le support selon les apprenants — fiche de révision pour ceux qui lisent, quiz pour s'entraîner, résumé audio pour ceux qui lisent peu. · 4. Vos documents, jamais leurs données — seulement des documents que vous avez le droit d'utiliser ; aucune liste, note ou dossier d'apprenant.
- **Démo (B4)** : Gemini Notebook, anciennement NotebookLM (version gratuite, ordinateur). 1. Créer un carnet « Sécurité électrique — 1re année ». 2. Ajouter la source : le PDF « Notes de cours — sécurité avant toute intervention (exemple) ». 3. Demander : « Quelles sont les étapes avant d'intervenir sur un circuit ? Réponds en phrases courtes. » 4. Ouvrir une citation : le passage source s'affiche. 5. Dans le panneau des supports, générer des fiches de révision et un quiz, puis un résumé audio en français, avec la consigne de la carte G comme personnalisation [libellés exacts à vérifier au moment de la production]. 6. Écouter le résumé en entier avant de le partager. Résultat attendu à l'écran : une réponse citée, des fiches, un quiz, le lecteur audio.
- **Consolidation (B5)** : prédiction. « Hadiza demande : “Comment choisir le câble d'un four de boulangerie ?” Ses notes n'en parlent pas. Que doit faire le carnet ? » — 3 s de silence — « Dire que ses sources ne contiennent pas la réponse. S'il répond quand même, cherchez la citation. Sans citation, n'utilisez pas : en électricité, une erreur peut blesser. »
- **Consigne à copier** :

```text
Réponds uniquement à partir des sources de ce carnet.
Public : [ex. apprentis de première année, qui lisent peu].
Crée [une fiche de révision / un quiz de 10 questions / le plan d'un résumé audio] sur : [thème].
Phrases courtes. Pour chaque idée, un exemple tiré de [métier ou situation locale].
Si une information n'est pas dans les sources, écris : « absent des sources ».
```

- **Exercice** : « Créez votre premier carnet avec vos documents » — 1. Choisissez un ou deux documents dont vous êtes l'auteur, ou que vous avez le droit d'utiliser. 2. Créez un carnet dans Gemini Notebook et déposez-les. 3. Posez trois questions et ouvrez chaque citation. 4. Générez un support adapté à vos apprenants, vérifiez-le en entier, puis partagez-le.
- **Carte de rappel** : 1. Transformer vos documents en fiches, quiz et audio · 2. Vos sources, vos citations · 3. Le support selon les apprenants · 4. Jamais leurs données
- **Quiz** :
  1. D'où Gemini Notebook tire-t-il ses réponses ? — A) De tout Internet B) Des sources que vous avez déposées dans le carnet C) Des réponses des autres utilisateurs D) D'un manuel officiel intégré — **Réponse : B**
  2. Comment vérifier une réponse du carnet ? — A) En ouvrant sa citation pour lire le passage source B) En reposant la même question C) En demandant si c'est sûr D) En regardant la longueur de la réponse — **Réponse : A**
  3. Vos apprentis lisent peu. Quel support privilégier ? — A) Un long rapport B) Un tableau de chiffres C) Un résumé audio, en phrases simples, que vous avez écouté en entier D) Aucun support — **Réponse : C**
  4. Quel document ne doit jamais entrer dans le carnet ? — A) Vos notes de cours B) Un règlement d'atelier public C) Une fiche technique que vous avez le droit d'utiliser D) La liste de vos apprentis avec leurs notes — **Réponse : D**
  5. Le carnet répond sans citation à une question absente de vos sources. Que faites-vous ? — A) Vous utilisez la réponse B) Vous ne l'utilisez pas et vous cherchez une source fiable C) Vous la traduisez D) Vous la partagez au groupe — **Réponse : B**
- **Marques citées** : Gemini Notebook (anciennement NotebookLM), Google, WhatsApp

#### Script v1 (à valider par l'owner)

Durée estimée : 3:51 · Mots de voix off : 406

**Scène 1 — B1 Accroche · 0:00–0:09 · E**
- Visuel : illustration à plat ; Hadiza dans un atelier, devant un tableau de câblage ; des apprentis autour d'elle, téléphone en poche.
- Écran : « Tahoua · formation en électricité »
- VO : « Leçon trois : aucun nom d'élève dans l'IA. Hadiza, elle, forme des électriciens à Tahoua. Ses apprentis lisent peu. »

**Scène 2 — B1 Accroche · 0:09–0:18 · B**
- Visuel : carte typographique ; l'onglet « Supports » du cahier s'ouvre, la promesse s'inscrit.
- Écran : « Transformer vos documents en fiches, quiz et audio »
- VO : « À la fin de cette leçon, vous saurez transformer vos documents en fiches, quiz et audio. »

**Scène 3 — B2 Cadrage · 0:18–0:31 · B**
- Visuel : carte ; à gauche, un nuage « tout ce qu'il a lu ailleurs » ; à droite, le classeur de Hadiza ; une flèche ne relie que le classeur aux apprentis.
- Écran : « Son cours, pas un autre »
- VO : « Un assistant ordinaire répond avec tout ce qu'il a lu ailleurs. Hadiza, elle, veut que ses apprentis révisent son cours, pas un autre. »

**Scène 4 — B2 Cadrage · 0:31–0:46 · A**
- Visuel : capture réelle de l'accueil de Gemini Notebook, bouton de création d'un carnet encadré.
- Écran : « Gemini Notebook (ex-NotebookLM) »
- VO : « Pour cela, il existe Gemini Notebook. Jusqu'en juillet deux mille vingt-six, il s'appelait NotebookLM. Il répond à partir des documents que vous lui donnez, en citant ses sources. »

**Scène 5 — B3 Notion · 0:46–1:08 · A**
- Visuel : onglet « Supports » (1 s), puis capture réelle : le carnet créé, la source PDF ajoutée dans la liste ; cadre sur la source.
- Écran : « 1. Un carnet, vos sources »
- VO : « Première étape : un carnet, vos sources. Un carnet, c'est un espace de travail pour un sujet. Hadiza y dépose ses notes de cours en PDF, et le règlement de l'atelier. Ce sont ses documents : elle a le droit de les utiliser. »

**Scène 6 — B3 Notion · 1:08–1:23 · A**
- Visuel : capture réelle d'une réponse avec ses numéros de citation ; cadre sur un numéro, puis le passage source surligné.
- Écran : « 2. Chaque réponse se vérifie par sa citation »
- VO : « Deuxième étape : vérifier par la citation. Chaque réponse porte de petits numéros. Touchez-en un : le passage exact du document s'affiche. Pas de citation ? Alors, pas de confiance. »

**Scène 7 — B3 Notion · 1:23–1:41 · C**
- Visuel : schéma : le classeur au centre, trois flèches vers trois supports : une fiche (lire), un quiz (s'entraîner), un casque (écouter) ; chaque support relié à une silhouette d'apprenti.
- Écran : « 3. Lire · S'entraîner · Écouter »
- VO : « Troisième étape : choisir le support selon vos apprenants. Une fiche de révision pour ceux qui lisent. Un quiz pour s'entraîner. Un résumé audio pour ceux qui lisent peu : ils l'écoutent sur leur téléphone. »

**Scène 8 — B3 Notion · 1:41–1:56 · B**
- Visuel : carte ; à gauche, le classeur avec une coche ; à droite, une liste d'apprentis et un relevé de notes, avec une croix et le cadenas.
- Écran : « 4. Vos documents, jamais leurs données »
- VO : « Quatrième étape : vos documents, jamais leurs données. Pas de liste d'apprentis, pas de notes, pas de dossiers. Et seulement des documents que vous avez le droit d'utiliser. »

**Scène 9 — B4 Application · 1:56–2:12 · G**
- Visuel : carte de consigne sur fond clair, texte complet ; les crochets surlignés un par un.
- Écran : la consigne complète (bloc « Consigne à copier » de la fiche).
- VO : « Voici une consigne à coller dans la discussion du carnet, ou dans la personnalisation d'un support. Mettez la vidéo en pause pour la recopier. »

**Scène 10 — B4 Application · 2:12–2:28 · A**
- Visuel : capture réelle : la question tapée dans la discussion du carnet, puis la réponse et ses numéros de citation, défilement lent.
- Écran : « Les étapes avant d'intervenir sur un circuit ? »
- VO : « Hadiza crée un carnet et dépose ses notes. Elle demande : quelles sont les étapes avant d'intervenir sur un circuit ? La réponse cite ses notes, numéro par numéro. »

**Scène 11 — B4 Application · 2:28–2:40 · A**
- Visuel : capture réelle : une citation ouverte, le passage correspondant surligné, coche ; puis la fiche de révision et le quiz générés, défilement lent.
- Écran : « Citation vérifiée ✓ · fiches · quiz »
- VO : « Elle ouvre une citation : le passage correspond. Puis elle demande des fiches de révision et un quiz, en phrases courtes. »

**Scène 12 — B4 Application · 2:40–2:56 · A**
- Visuel : capture réelle : le lancement du résumé audio en français, puis le lecteur audio prêt (son coupé dans la vidéo) ; cadre sur le bouton de lecture.
- Écran : « Résumé audio en français, écouté en entier »
- VO : « Enfin, le résumé audio, en français simple. Sa création peut prendre plusieurs minutes. Hadiza l'écoute en entier avant de le partager dans le groupe de ses apprentis. »

**Scène 13 — B5 Consolidation · 2:56–3:11 · B**
- Visuel : carte question ; le classeur ouvert, une page vide marquée d'un point d'interrogation ; 3 s de silence après la question.
- Écran : « Une question absente de ses notes ? »
- VO : « À vous de prédire. Hadiza demande : comment choisir le câble d'un four de boulangerie ? Ses notes n'en parlent pas. Que doit faire le carnet ? »

**Scène 14 — B5 Consolidation · 3:11–3:26 · A**
- Visuel : capture réelle de la réponse obtenue à cette question ; si le carnet signale l'absence d'information, coche ; s'il répond sans citation, croix sur la réponse.
- Écran : « Sans citation, pas d'usage »
- VO : « Il doit dire que ses sources ne contiennent pas la réponse. S'il répond quand même, cherchez la citation. Sans citation, n'utilisez pas : en électricité, une erreur peut blesser. »

**Scène 15 — B6 Clôture · 3:26–3:38 · B (carte de rappel 1/2)**
- Visuel : les apprentis de Hadiza, écouteurs aux oreilles, à l'arrêt de bus ; tampon « Vérifié par la formatrice » ; la promesse s'inscrit.
- Écran : « Transformer vos documents en fiches, quiz et audio »
- VO : « Le soir même, ses apprentis écoutent le résumé de son cours. Vous savez transformer vos documents en fiches, quiz et audio. »

**Scène 16 — B6 Clôture · 3:38–3:51 · B (carte de rappel 2/2)**
- Visuel : carte de rappel, points révélés au rythme de la voix.
- Écran : « 2. Vos sources, vos citations » « 3. Le support selon les apprenants » « 4. Jamais leurs données »
- VO : « Retenez : vos sources et leurs citations, le support selon vos apprenants, et jamais leurs données. Créez votre premier carnet avec vos documents. »

#### Captures à fournir par l'owner

Outil : Gemini Notebook (anciennement NotebookLM), version gratuite, sur ordinateur (navigateur, zoom 125 %) ; adresse et application mobile [à vérifier au moment de la production]. Compte de démonstration ; à masquer : nom, photo, liste des autres carnets, notifications.

Document source : « Notes de cours — sécurité avant toute intervention (exemple) », une page en PDF, rédigée par Claude au moment de la production et **validée par un formateur en électricité qualifié** avant tout tournage ; aucun nom de personne ni d'établissement réel.

| Scène | Gestes exacts | Texte exact à taper | Durée utile |
|---|---|---|---|
| 4 | Page d'accueil de Gemini Notebook, aucun carnet personnel visible. | — | 4 s |
| 5 | Créer un carnet nommé « Sécurité électrique — 1re année » ; ajouter le PDF ; attendre qu'il apparaisse dans la liste des sources. | « Sécurité électrique — 1re année » | 8 s |
| 6, 10, 11 | Dans la discussion du carnet, taper la question, envoyer, filmer la réponse ; cliquer sur un numéro de citation et filmer le passage surligné. | « Quelles sont les étapes avant d'intervenir sur un circuit ? Réponds en phrases courtes. » | 20 s |
| 11 | Dans le panneau des supports, générer des fiches de révision puis un quiz ; filmer chaque résultat en défilement lent. | — | 15 s |
| 12 | Générer un résumé audio en français, avec la consigne de la carte G en personnalisation si l'option existe ; filmer le lancement, puis le lecteur prêt (couper le son). | Consigne de la carte G complétée (apprentis de première année ; thème : sécurité avant toute intervention ; exemple tiré de l'atelier) | 10 s |
| 14 | Dans la discussion, taper la question, envoyer, filmer la réponse telle quelle. | « Comment choisir le câble d'un four de boulangerie ? » | 8 s |

#### Notes de script

- Prononciation : Gemini Notebook « jé-mi-ni note-bouk » ; NotebookLM « note-bouk-èl-èm ». L'ancien nom n'est dit qu'une fois (scène 4) ; à l'écran, « Gemini Notebook (ex-NotebookLM) » à la première apparition seulement.
- Le changement de nom (juillet 2026) est confirmé ; les libellés français des supports (fiches, quiz, résumé audio, panneau des supports) ont pu changer avec lui : la VO reste générique, les captures font foi [à vérifier au moment de la production].
- Langues du résumé audio : le haoussa ne figurait pas dans la liste officielle consultée [à vérifier au moment de la production] ; ne rien promettre à l'oral sur l'audio en langues nationales.
- Le son du résumé audio n'est jamais diffusé sous la voix off.
- Scène 14 : la réponse réelle décide de l'annotation (coche ou croix) ; la VO fonctionne dans les deux cas.
- Ne jamais citer de limite d'usage de la version gratuite.
- Termes glosés : « carnet » (scène 5), « citation » (par le geste, scène 6).
- Adaptation EN : « carnet » → « notebook » ; « résumé audio » → « audio overview ». HA et DJE : garder les noms de produits ; traduire « carnet » par un mot simple (« cahier ») [à valider par les relecteurs].

### Leçon 5 — Projet final : votre kit de séquence complet (`ed5`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez assembler et présenter votre kit de séquence complet. »
- **Cas réel (B1 → B6)** : Mariama (fil principal, cas fictif). Jeudi, à la réunion pédagogique de son école, le directeur lui demande de présenter sa séquence sur les fractions pour que deux collègues de CM1 l'utilisent. Elle a tous les morceaux (leçons 1 à 4), mais dispersés, et il lui manque l'adaptation des consignes pour les élèves qui lisent encore avec difficulté et parlent haoussa à la maison. En B6, ses collègues repartent avec un kit court, vérifié et signé, prêt pour le lundi suivant. Devient le champ `example` de la leçon.
- **Unités de notion (B3)** : 1. Six livrables, un par étape — fiche de séquence avec l'extrait ; exercices à trois niveaux, quiz et correction vérifiée ; grille et trois retours types ; un support Gemini Notebook ; la différenciation ; la note d'usage. · 2. La différenciation, pièce nouvelle — une consigne du socle réécrite pour un profil d'élèves, puis proposée dans la langue de la classe, avec la liste des mots incertains. · 3. Un locuteur relit toujours — la version en langue de la classe n'est jamais utilisée sans relecture et correction humaines. · 4. Cinq critères d'évaluation — fidèle au programme, faisable dans la classe, juste, vraiment différencié, responsable.
- **Démo (B4)** : le kit de Mariama de bout en bout. 1. Défilement du kit assemblé : fiche et extrait (leçon 1), trois niveaux et quiz corrigés (leçon 2), grille et retours types (leçon 3), fiche de révision créée avec Gemini Notebook à partir de sa séquence (leçon 4). 2. Carte G : la consigne de différenciation. 3. Gemini : la consigne du socle revient en phrases courtes avec un dessin, puis une proposition en haoussa et la liste des mots incertains. 4. Souleymane, collègue locuteur du haoussa, relit : deux corrections visibles à l'écran. 5. La note d'usage de cinq lignes clôt le document, prêt à déposer. Résultat attendu à l'écran : un document unique, six parties, signé.
- **Consolidation (B5)** : contre-exemple. « Un collègue dépose un kit de quarante pages, entièrement généré, jamais relu. Valide-t-il les critères ? » — 3 s de silence — « Non : rien ne prouve qu'il suit le programme, ni que les corrections sont justes, et sa note d'usage serait vide. Un bon kit est court, vérifié, et signé par vous. »
- **Consigne à copier** :

```text
Voici un exercice du niveau socle de ma séquence : [exercice].
Profil d'élèves : [ex. élèves qui lisent encore avec difficulté et parlent haoussa à la maison].
1. Réécris la consigne pour ce profil : phrases de 8 mots maximum, un exemple concret, un dessin à faire au tableau.
2. Propose une traduction de cette consigne en [langue de la classe].
3. Liste les mots dont la traduction est incertaine, pour que je les fasse vérifier.
```

- **Exercice** : « Assemblez et déposez votre kit de séquence » — 1. Choisissez une séquence que vous enseignerez ce mois-ci. 2. Produisez les six livrables en appliquant les leçons 1 à 4 et la consigne de différenciation. 3. Faites relire la version en langue de la classe par un locuteur et notez ses corrections. 4. Rédigez la note d'usage (ce que l'IA a fait, ce que vous avez vérifié, ce que vous avez corrigé), assemblez le kit en un seul document et déposez-le sur la page du projet final [modalité de dépôt à confirmer sur la plateforme].
- **Carte de rappel** : *(la promesse s'affiche en titre au plan 1/2)* 1. Programme d'abord · 2. Trois niveaux · 3. Grille, aucun nom · 4. Sources citées
- **Quiz** :
  1. Dans le kit, comment montrer que la séquence est fidèle au programme ? — A) En joignant l'extrait officiel et en reliant chaque objectif à une ligne B) En écrivant « conforme » en titre C) En demandant à l'IA de le certifier D) En ajoutant des pages — **Réponse : A**
  2. Dans le kit, la différenciation est réussie quand… — A) chaque niveau a un objectif différent B) les trois niveaux visent le même objectif, avec des entrées différentes C) seuls les meilleurs élèves ont des exercices D) l'IA choisit le niveau de chaque élève — **Réponse : B**
  3. Pour la grille et les retours types, le kit doit montrer… — A) des copies photographiées avec les noms B) les notes de chaque élève C) des réponses anonymisées et la décision de l'enseignant D) une note donnée par l'IA — **Réponse : C**
  4. Le support créé avec Gemini Notebook est utilisable si… — A) il est long B) il est en anglais C) il a été généré deux fois D) chaque information renvoie à une source du carnet, que vous avez vérifiée — **Réponse : D**
  5. La version en langue de la classe proposée par l'IA… — A) est relue et corrigée par un locuteur avant usage B) est toujours exacte C) remplace la version française D) n'a pas à figurer dans la note d'usage — **Réponse : A**
- **Marques citées** : Gemini, Gemini Notebook (anciennement NotebookLM)

#### Script v1 (à valider par l'owner)

Durée estimée : 3:40 · Mots de voix off : 386

**Scène 1 — B1 Accroche · 0:00–0:09 · E**
- Visuel : illustration à plat ; salle des maîtres, réunion pédagogique : le directeur, deux collègues, Mariama et son cahier.
- Écran : « Réunion pédagogique · jeudi »
- VO : « Leçon quatre : Hadiza a transformé ses documents en supports vérifiés. Jeudi, Mariama présente sa séquence à ses collègues. »

**Scène 2 — B1 Accroche · 0:09–0:18 · B**
- Visuel : carte typographique ; l'onglet « Kit » du cahier s'ouvre, la promesse s'inscrit.
- Écran : « Assembler et présenter votre kit de séquence complet »
- VO : « À la fin de cette leçon, vous saurez assembler et présenter votre kit de séquence complet. »

**Scène 3 — B2 Cadrage · 0:18–0:39 · C**
- Visuel : schéma : une pile de feuilles et de captures en vrac, barrée d'une croix ; elle se resserre en un dossier mince à six onglets, marqué du tampon.
- Écran : « Pas une pile : une sélection vérifiée »
- VO : « Le malentendu : un kit, ce serait tout ce que l'IA a produit, empilé. Non : un kit est une sélection courte, vérifiée, que vous signez. Un collègue doit pouvoir l'utiliser lundi. C'est votre projet final, celui qui valide le cours. »

**Scène 4 — B3 Notion · 0:39–1:02 · A**
- Visuel : capture réelle du sommaire du kit de Mariama ; les six parties s'encadrent une à une, chacune avec le numéro de sa leçon.
- Écran : « 1. Six livrables, un par étape »
- VO : « Votre kit contient six livrables. La fiche de séquence, avec l'extrait du programme. Les exercices à trois niveaux, le quiz et la correction vérifiée. La grille et trois retours types. Un support créé avec Gemini Notebook. La différenciation. Et une note d'usage. »

**Scène 5 — B3 Notion · 1:02–1:22 · A**
- Visuel : capture réelle de la réponse de différenciation : consigne réécrite, proposition en haoussa, liste des mots incertains ; cadre sur la liste.
- Écran : « 2. La différenciation : profil, langue, mots incertains »
- VO : « La différenciation est la pièce nouvelle. Vous réécrivez une consigne du socle pour un profil d'élèves. Puis l'IA propose une version dans la langue de la classe. Elle liste aussi les mots dont elle n'est pas sûre. »

**Scène 6 — B3 Notion · 1:22–1:35 · B**
- Visuel : carte ; une bulle de texte en haoussa, une loupe, puis une coche posée par une silhouette de collègue.
- Écran : « 3. Un locuteur relit toujours »
- VO : « Cette version n'est jamais utilisée telle quelle. Un locuteur la relit et la corrige. Les traductions automatiques en haoussa ou en zarma restent inégales. »

**Scène 7 — B3 Notion · 1:35–1:52 · C**
- Visuel : schéma : cinq cases à cocher, chacune avec son pictogramme (livre, ardoise, crayon, trois marches, cadenas), cochées au rythme de la voix.
- Écran : « 4. Fidèle · Faisable · Juste · Différencié · Responsable »
- VO : « Votre kit est évalué sur cinq critères. Fidèle au programme. Faisable dans votre classe. Juste, parce que vous avez tout refait. Vraiment différencié. Et responsable : aucune donnée d'élève, et vos décisions écrites. »

**Scène 8 — B4 Application · 1:52–2:13 · A**
- Visuel : capture réelle : défilement lent du kit de Mariama ; à chaque partie, une pastille « Leçon 1 », « Leçon 2 »… se pose dans la marge.
- Écran : « Le kit de Mariama, de bout en bout »
- VO : « Voici le kit de Mariama, de bout en bout. La fiche, avec l'extrait du programme. Les trois niveaux et le quiz, corrigés par elle. Sa grille et ses retours types. Sa fiche de révision, créée avec Gemini Notebook. »

**Scène 9 — B4 Application · 2:13–2:24 · G**
- Visuel : carte de consigne sur fond clair, texte complet ; les crochets surlignés un par un.
- Écran : la consigne complète (bloc « Consigne à copier » de la fiche).
- VO : « Voici la consigne de différenciation. Mettez la vidéo en pause pour la recopier. »

**Scène 10 — B4 Application · 2:24–2:38 · A**
- Visuel : capture réelle (Gemini) : envoi de la consigne, puis la consigne réécrite avec son dessin, la proposition en haoussa et les mots incertains ; cadre sur chacun, l'un après l'autre.
- Écran : « Phrases courtes · version haoussa · mots incertains »
- VO : « Mariama l'envoie dans Gemini. La consigne du socle revient en phrases courtes, avec un dessin. Puis une version en haoussa, et trois mots incertains. »

**Scène 11 — B4 Application · 2:38–2:49 · A**
- Visuel : capture réelle de la version haoussa relue : deux corrections visibles (mot barré, mot corrigé), puis la note d'usage en bas du document, encadrée.
- Écran : « Relu et corrigé par un locuteur ✓ »
- VO : « Son collègue Souleymane, locuteur du haoussa, relit. Il corrige deux mots. Mariama le note dans sa note d'usage. »

**Scène 12 — B5 Consolidation · 2:49–3:00 · B**
- Visuel : carte question ; un épais dossier de quarante pages, sans tampon ; 3 s de silence après la question.
- Écran : « 40 pages générées, jamais relues : valide ? »
- VO : « Un collègue dépose un kit de quarante pages, entièrement généré, jamais relu. Valide-t-il les critères ? »

**Scène 13 — B5 Consolidation · 3:00–3:16 · B**
- Visuel : carte ; les cinq cases de critères restent vides, une croix sur le dossier ; puis le dossier mince de Mariama avec son tampon.
- Écran : « Court, vérifié, signé »
- VO : « Non. Rien ne prouve qu'il suit le programme, ni que les corrections sont justes. Sa note d'usage serait vide. Un bon kit est court, vérifié, et signé par vous. »

**Scène 14 — B6 Clôture · 3:16–3:27 · B (carte de rappel 1/2)**
- Visuel : les deux collègues repartent avec le kit sous le bras ; la promesse s'inscrit en titre, la ligne de dépôt dessous.
- Écran : « Assembler et présenter votre kit de séquence complet » « Dépôt : page du projet final »
- VO : « Jeudi, ses collègues repartent avec un kit prêt pour lundi. Le vôtre se dépose sur la page du projet final. »

**Scène 15 — B6 Clôture · 3:27–3:40 · B (carte de rappel 2/2)**
- Visuel : carte de rappel, un point par leçon, révélés au rythme de la voix.
- Écran : « 1. Programme d'abord » « 2. Trois niveaux » « 3. Grille, aucun nom » « 4. Sources citées »
- VO : « Le cours en quatre gestes : programme d'abord, trois niveaux, grille sans nom, sources citées. Assemblez et déposez votre kit de séquence. »

#### Captures à fournir par l'owner

Outils : Gemini et Gemini Notebook, versions gratuites, ordinateur. À masquer : nom et photo du compte, historique, autres carnets, notifications.

| Scène | Gestes exacts | Texte exact à taper | Durée utile |
|---|---|---|---|
| 4, 8 | Ouvrir le document « Kit de séquence — Les fractions, CM1 (exemple) » ; capture fixe du sommaire, puis défilement lent du document entier. | — | 4 s + 25 s |
| 8 (grille) | Avant l'assemblage : nouvelle conversation Gemini, consigne de la leçon 3 sans copies d'élèves, avec la question et la réponse attendue ci-dessous ; garder la grille et demander trois retours types (un par niveau). | Question : « Compare 1/4 et 1/8. Explique ta réponse avec un dessin. » Réponse attendue : « 1/4 est plus grand que 1/8 : si l'on partage la même galette en huit, chaque part est plus petite qu'en quatre. » | — |
| 8 (support) | Avant l'assemblage : dans Gemini Notebook, carnet « Fractions CM1 », source = la fiche de séquence de la leçon 1 exportée en PDF ; générer une fiche de révision. | — | — |
| 5, 10 | Nouvelle conversation Gemini ; coller la consigne de la carte G avec l'exercice du socle obtenu en leçon 2 et le profil « élèves qui lisent encore avec difficulté et parlent haoussa à la maison », langue « haoussa » ; envoyer ; filmer la réponse. | Consigne complétée | 15 s |
| 11 | Faire relire la proposition en haoussa par un locuteur ; capture de la version relue avec ses corrections visibles (mode suggestion d'un traitement de texte, ou deux versions côte à côte), puis de la note d'usage. | — | 10 s |

Le document du kit est assemblé par Claude à partir des sorties réelles des leçons 1 à 5 (copier-coller, sans réécriture), puis relu par l'owner ; la note d'usage (cinq lignes) décrit ce qui s'est réellement passé pendant les captures.

#### Notes de script

- Prononciation : Souleymane « sou-lé-ï-mane ».
- La version haoussa affichée à la scène 11 est celle **corrigée par le relecteur** ; la proposition brute de la scène 10 reste annotée « à relire ». Ne jamais montrer un texte haoussa non relu comme correct.
- Scène 6 : « restent inégales » décrit la qualité variable des traductions automatiques vers les langues nationales ; aucun chiffre, aucun classement d'outils.
- Modalité de dépôt (fichier unique, photos, lien) [à confirmer sur la plateforme] : adapter la ligne d'écran de la scène 14 si besoin.
- Le cas de B1 se referme en scène 14 (les collègues repartent avec le kit).
- Adaptation EN : « réunion pédagogique » → « staff teaching meeting » ; garder l'exemple de la version haoussa (sous-titré). HA : la scène 10 montre du haoussa à l'écran : c'est le cœur de l'exemple, aucun changement. DJE : remplacer l'exemple par une classe de l'ouest du pays où la langue de la maison est le zarma (consigne et relecture en zarma) [à valider avec le relecteur DJE et à capturer séparément].

## 2.6 Captures et éléments à préparer

| Leçon | Élément | Comment l'obtenir | Qui |
|---|---|---|---|
| 1–5 | Illustrations des personas (Mariama, Ibrahim, Hadiza, Souleymane) et décors (classe, salle des maîtres, bureau, atelier) | Aplats selon 2.4, sans imiter une personne réelle | Claude |
| 1–5 | Cahier de préparation à cinq onglets, schémas (entonnoir, trois marches, boucle de contrôle), pictogrammes ● ▲ ■, tampon | Composants HyperFrames réutilisables d'une leçon à l'autre | Claude |
| 1 | Extrait du programme de CM1 sur les fractions | Programme officiel en possession de l'owner ou d'un enseignant ; à défaut, texte d'exemple de la leçon 1, marqué « exemple » | owner |
| 1 | Captures Gemini : demande vague, consigne avec extrait, fiche en tableau, vérifications, relance, question de conformité | Tableau « Captures à fournir » de la leçon 1 | owner |
| 2 | Captures Gemini : trois niveaux, quiz annoté, correction vérifiée, relance du socle | Tableau de la leçon 2 ; l'owner refait les calculs avant de filmer | owner |
| 3 | Captures Gemini : grille, copies A et B, correction collective | Textes fournis en leçon 3 (aucune copie réelle) | owner |
| 3 | Relecture scientifique de la réponse attendue et de la correction collective (paludisme) | Un professeur de SVT | owner |
| 4 | PDF « Notes de cours — sécurité avant toute intervention (exemple) » | Rédigé par Claude, validé par un formateur en électricité qualifié avant les captures | Claude + owner |
| 4 | Captures Gemini Notebook : accueil, carnet et source, réponse citée, citation ouverte, fiches, quiz, résumé audio, question hors sources | Tableau de la leçon 4 | owner |
| 5 | Grille de Mariama et fiche de révision Gemini Notebook (pièces du kit) | Tableau de la leçon 5 | owner |
| 5 | Document « Kit de séquence — Les fractions, CM1 (exemple) » | Assemblé par Claude à partir des sorties réelles, relu par l'owner | Claude + owner |
| 5 | Relecture de la proposition en haoussa, corrections visibles | Locuteur haoussa, idéalement enseignant en école bilingue | owner (relecteur HA) |
| 5 | Variante zarma de l'exemple de différenciation pour la version DJE | Même protocole, relecteur zarma | owner (relecteur DJE) |
| 1–5 | Relecture des voix off EN, HA et DJE (notes d'adaptation de chaque leçon) | Relecteurs natifs | owner |
| 1–5 | Libellés et disponibilité : Gemini au Niger, Gemini Notebook (adresse, application, noms des supports, langues du résumé audio) | Contrôle le jour des captures ; corriger les VO génériques si un libellé est cité | owner |
| 5 | Modalité de dépôt du projet final et critères de validation dans la plateforme | Décision de l'équipe plateforme (skill `karatou-course-creator`) | équipe Karatou |
