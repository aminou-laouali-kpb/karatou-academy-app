# CLAUDE.md — Karatou Academy · Production vidéo
# Cours 9 — L'IA pour les tâches créatives

> **Pour l'owner — mode d'emploi**
> 1. Créez un dossier vide sur votre ordinateur, par exemple `karatou-ia-taches-creatives`.
> 2. Copiez-y ce fichier et renommez-le exactement `CLAUDE.md`.
> 3. Ouvrez Claude Code dans ce dossier (dans un terminal : `cd karatou-ia-taches-creatives` puis `claude`).
> 4. Écrivez : **« On démarre. »**
>
> Claude vous demande d'abord le **design system de Karatou Academy**, puis vos fichiers (logo, photo, voix).
> Ensuite il produit les vidéos **une par une** et s'arrête à chaque validation. Pour reprendre plus tard,
> écrivez « On continue. » : l'avancement est noté dans `PROGRESS.md`.

| | |
|---|---|
| Format | Motion graphics et captures d'écran, voix off clonée de l'owner |
| Owner | Aminou Laouali Abdou |
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
livraison/ia-taches-creatives/<id>/      fichiers livrés · livraison/ia-taches-creatives/INTEGRATION.md
```

`<id>` est l'identifiant de la leçon (`cr1`, `cr2`…). Langues : `fr`, `en`, `ha`, `dje`.

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

### 9.2 Nommage et contenu de `livraison/ia-taches-creatives/<id>/`

`ia-taches-creatives_<id>_<langue>_v<n>.mp4` · `…-360.mp4` · `….srt` · `….vtt` · `…_cover.jpg` (1920 × 1080, qualité 85,
première image stable de B1) · `…_transcript.md` (un titre par temps, texte dit + actions à l'écran entre
crochets) · `RECETTE.md`.

### 9.3 Mise en ligne

Chaîne YouTube **Karatou Academy**, vidéos **non répertoriées**, une vidéo par langue, sous-titres `.srt` ajoutés
comme piste. Titre : « Karatou Academy — L'IA pour les tâches créatives — Leçon N : <titre> (<LANGUE>) ». Le site lit des **URL
d'intégration** : `https://www.youtube.com/embed/<ID>` (jamais `watch?v=` ni `youtu.be/`). Teste chaque URL dans un
navigateur avant de la consigner.

### 9.4 Intégration au site — `livraison/ia-taches-creatives/INTEGRATION.md`

Le site lit, pour chaque leçon, un champ `video: { fr, en, ha }` dans les fichiers TypeScript du dépôt
`karatou-academy-app` (registre `authoredLessons`). Chaque leçon y a aussi un texte (objectif, quatre sections,
exemple, exercice, quiz de cinq questions, réflexion, glossaire), rédigé par l'équipe avec le skill
`karatou-course-creator`, et des lignes Supabase (module, leçons) pour la progression et les certificats.

Ton rôle : tenir `INTEGRATION.md` à jour, leçon par leçon : module `ia-taches-creatives`, id, titre, promesse (objectif), cas
réel (exemple), exercice (titre et étapes), carte de rappel, quiz, marques citées, URL FR / EN / HA, et URL DJE
« en attente ». Ce fichier est remis à l'équipe technique ; tu ne modifies pas le dépôt du site.

### 9.5 Corrections après publication

Une URL publiée est figée. Pour corriger : nouvelle version `v2` → mise en ligne → nouvelle URL testée →
`INTEGRATION.md` mis à jour → l'équipe technique remplace l'URL → l'ancienne vidéo est rendue privée, jamais
supprimée. Consigne chaque version dans le journal de `PROGRESS.md`.

## 10. `PROGRESS.md` — modèle

```markdown
# PROGRESS — Cours 9 · L'IA pour les tâches créatives
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
| Numéro | 9 |
| Titre | L'IA pour les tâches créatives |
| Format | Motion graphics + captures d'écran, voix off (voix clonée de l'owner) |
| Owner / voix | Aminou — nom complet et titre exact demandés au premier lancement |
| Rubrique | Entrepreneuriat |
| Public | Commerçants, artisans et community managers (gestionnaires de pages) de petites entreprises, qui publient sur Facebook, WhatsApp et Instagram depuis un téléphone |
| Slug du module (provisoire) | `ia-taches-creatives` |
| Préfixe des leçons | `cr` |
| Nombre de vidéos | 5 (dont la dernière = projet final certifiant) |
| Durée par vidéo | 3–5 min (cible 4:00) |
| Langues | FR (référence) · EN · HA · DJE |
| Prérequis | Un smartphone avec connexion ; un compte Google (assistant Gemini, version gratuite) ; un compte Canva gratuit ; WhatsApp. L'ordinateur est facultatif. |
| Promesse du cours | Vous saurez préparer et publier, avec l'IA et en toute honnêteté, une semaine de contenus pour vendre votre produit. |
| Positionnement | Le quotidien créatif d'une petite entreprise, vite, sur téléphone, avec des outils gratuits. Il complète le cours 4 (« Lancer et développer son business avec l'IA »), qui n'effleure que les visuels. Pour aller plus loin, il renvoie au cours 5 (« Créer visuels et vidéos avec l'IA », filmé, approfondi) : maîtrise des consignes visuelles, image professionnelle, compétence qui se vend. Les fonctions d'IA de Canva, l'outil d'image de Gemini et la génération vidéo changent vite et dépendent de l'offre (gratuite ou payante), du pays et de limites d'usage : chaque leçon propose donc une voie sans génération [disponibilité et limites à vérifier au moment de la production]. Fil conducteur éthique : « les trois vérifications avant de publier » (Vrai · Permis · À moi). |
| Fil rouge | **Hadiza**, qui tient une boutique de couture à Maradi (boutique fictive, jamais nommée) et vend des sacs en pagne cousus avec une coopérative de couturières. Elle prépare, leçon après leçon, une semaine de publications pour ses sacs. **Souleymane**, community manager indépendant à Niamey, gère les pages de trois petits commerces : il apparaît dans les contre-exemples (honnêteté envers le client) et relit le projet final. |
| Marques citées | Canva ; Google (Gemini, Google Sheets, Veo) ; « Nano Banana » (surnom de l'outil d'image de Gemini) ; CapCut ; WhatsApp, Facebook, Instagram (Meta) |

## 2.2 Ce que l'apprenant saura faire

- Rédiger la fiche de son commerce et obtenir de l'IA un calendrier de publications du mois, vérifié et réaliste.
- Faire écrire un texte de vente clair, en français puis en haoussa, et le valider avant publication.
- Retoucher une photo produit et réaliser une affiche dans Canva, sans modifier ce que le client recevra.
- Monter une vidéo courte verticale et sous-titrée sur téléphone, avec ou sans clip généré par l'IA.
- Appliquer les trois vérifications avant de publier : Vrai, Permis, À moi.
- Organiser une campagne d'une semaine pour un produit, puis en mesurer simplement les résultats.

## 2.3 Plan du cours

| Leçon | Id | Titre | Promesse (objectif) | Cas réel (B1) | Démo (B4) | Durée cible |
|---|---|---|---|---|---|---|
| 1 | `cr1` | Trouver des idées et planifier son mois | Obtenir des idées et un calendrier du mois | Hadiza poste quand elle y pense, sans plan | Gemini : fiche de commerce → calendrier de quatre semaines → tableur | 4:00 |
| 2 | `cr2` | Des textes qui vendent, en français et en haoussa | Faire écrire un texte de vente et le valider | Un message « beaux sacs en vente » que personne ne lit | Gemini : texte de vente FR, adaptation en haoussa, relecture des promesses | 4:00 |
| 3 | `cr3` | Affiches et photos produits sans tromper | Retoucher une photo et faire une affiche honnêtes | Une photo prise le soir, fond encombré, couleur jaunie | Gemini (outil d'image) + Canva : photo nettoyée, comparée à l'original, affiche exportée | 4:00 |
| 4 | `cr4` | Vidéos courtes verticales, sous-titrées | Monter une vidéo verticale sous-titrée | Hadiza n'ose pas se filmer, ses vidéos sont trop longues | Gemini (génération vidéo) pour l'ambiance, montage et sous-titres sur téléphone | 4:00 |
| 5 | `cr5` | Projet final : une campagne d'une semaine | Livrer une campagne d'une semaine pour un produit | Hadiza lance ses sacs en pagne : sept jours, un produit | Le dossier de campagne de Hadiza : calendrier, contenus, vérifications, bilan | 4:00 |

## 2.4 Direction artistique du cours

- **Motif récurrent : « l'étal de Hadiza ».** Un étal de marché vu de face, avec un petit carnet posé devant. Chaque leçon y ajoute un objet : un calendrier (L1), un mot écrit sur une étiquette (L2), une affiche et une photo encadrée (L3), un téléphone qui filme (L4), l'étal complet avec ses sept jours (L5). L'étal sert de fond aux cartes B1 et B6.
- **Fil conducteur visuel : « les trois vérifications ».** Trois pastilles-pictogrammes qui reviennent avant chaque publication : une coche pour **Vrai** (le produit, la livraison, la promesse), un cadenas ouvert pour **Permis** (droits d'image, consentement), une main pour **À moi** (ma voix, ma validation). Jamais de couleur seule : chaque pastille a sa forme et son mot.
- **Schéma type 1 : « le calendrier du mois ».** Une grille de quatre semaines ; chaque case porte un pictogramme (produit, preuve, coulisses, conseil, offre) et un jour. Utilisé en L1, repris en L5 en version sept jours.
- **Schéma type 2 : « consigne → IA → mon contrôle ».** Trois boîtes reliées par des flèches : la consigne (carte de consigne), l'assistant, puis la loupe du contrôle. Un point d'honneur : la boîte « mon contrôle » est toujours la plus grande.
- **Schéma type 3 : « avant / après côte à côte ».** Écran partagé : l'original à gauche, la version retouchée à droite, des cadres de vérification sur la couleur, la forme, les détails. Utilisé en L3 et L4.
- **Personas** : illustrations en aplats, formes simples, sans photoréalisme ni visage généré imitant une vraie personne. Hadiza devant son étal de Maradi, sacs en pagne aux motifs colorés ; Souleymane, un téléphone à la main, dans un cybercafé de Niamey ; couturières vues de dos ou de loin.
- **Captures** : Gemini et Canva (applications ou navigateur), Google Sheets, CapCut ou l'éditeur du téléphone, dans un cadre de téléphone neutre ; annotations en français. Données fictives, aucun visage de client, aucun numéro visible.
- **Iconographie** : pictogrammes au trait d'épaisseur constante : calendrier, étiquette, affiche, appareil photo, clap vertical, loupe, coche, cadenas, main.
- **Fixe d'une leçon à l'autre** : l'étal, les trois pastilles, le cadre de téléphone, le trio « consigne → IA → contrôle ». **Ce qui change** : l'objet ajouté à l'étal et le type de contenu (calendrier, texte, image, vidéo).
- **Son** : aucune musique sous la voix ; un court habillage sonore possible sur les cartes uniquement.

## 2.5 Les leçons

### Leçon 1 — Trouver des idées et planifier son mois (`cr1`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez obtenir des idées et un calendrier du mois avec l'IA. »
- **Cas réel (B1 → B6)** : Hadiza, à Maradi, vend des sacs en pagne cousus avec une coopérative de couturières. Elle publie sur Facebook et en statut WhatsApp quand elle y pense, et manque d'idées. Enjeu : de la régularité sans y passer ses soirées. En B6, elle a un calendrier de quatre semaines, trois publications par semaine, chaque idée relue et chaque date vérifiée.
- **Unités de notion (B3)** : 1. La fiche de votre commerce — ce que vous vendez, à qui, où vous publiez, et vos limites. · 2. Cinq familles d'idées — produit, preuve, coulisses, conseil, offre. · 3. Un calendrier que vous pouvez tenir — peu de publications, régulières, vérifiées.
- **Démo (B4)** : Gemini (version gratuite), sur téléphone. 1. Ouvrir une nouvelle conversation. 2. Coller la consigne avec la fiche de commerce de Hadiza. 3. Lire le tableau rendu : semaine, jour, famille, idée, photo à prévoir. 4. Demander de remplacer une idée impossible (« je ne fais pas de réduction »). 5. Demander la liste des dates et faits à vérifier. 6. Copier le tableau dans Google Sheets. Résultat : un calendrier de quatre semaines dans un tableur. [Bouton d'export vers Google Sheets à vérifier au moment de la production ; sinon copier-coller]
- **Consolidation (B5)** : prédiction. « L'assistant propose de publier lors d'une journée mondiale, avec la date. Vous publiez sans vérifier ? » Réponse : non. Un assistant peut se tromper de date, avec assurance : c'est une hallucination. Vérifier sur une source fiable.
- **Consigne à copier** :

```text
Vous êtes conseiller en communication pour une petite entreprise d'Afrique de l'Ouest.
Mon commerce : [ce que vous vendez, en une phrase]. Ville : [ville].
Mes clients : [qui achète]. Où je publie : [Facebook, statuts WhatsApp, Instagram…].
Ce que je peux faire : [vente en boutique, commande par WhatsApp, stock limité…].
Ce que je ne peux pas faire : [livrer hors de ma ville, faire des réductions…].
Proposez un calendrier de [quatre] semaines, [trois] publications par semaine, en tableau :
semaine, jour, famille d'idée (produit, preuve, coulisses, conseil, offre),
idée en une phrase, photo ou vidéo à prévoir.
Respectez mes limites. N'inventez aucun chiffre, aucune date, aucun témoignage.
Terminez par la liste des dates ou des faits que je dois vérifier moi-même.
```

- **Exercice** : « Construisez votre calendrier du mois » — 1. Écrivez la fiche de votre commerce en cinq lignes, sans donnée personnelle de client. 2. Collez la consigne, relisez, retirez les idées que vous ne pouvez pas tenir. 3. Copiez le tableau dans un tableur et vérifiez chaque date.
- **Carte de rappel** *(titre de la carte = la promesse, mot pour mot, sans « À la fin de cette leçon »)* : 1. Décrire son commerce avant de demander · 2. Varier : cinq familles d'idées · 3. Vérifier chaque date et chaque fait
- **Quiz** :
  1. Que faut-il donner à l'assistant avant de demander des idées ? — A) Rien, il devine B) La fiche de votre commerce : produit, clients, limites C) Le numéro de vos clients D) Votre mot de passe — **Réponse : B**
  2. Laquelle n'est PAS une des cinq familles d'idées ? — A) Produit B) Coulisses C) Conseil D) Prédiction du futur — **Réponse : D**
  3. Quel rythme de publication est le plus sûr pour débuter ? — A) Peu de publications, mais régulières B) Dix publications le premier jour C) Une seule, un jour par an D) Aucune planification — **Réponse : A**
  4. L'assistant donne une date de fête avec assurance. Que faites-vous ? — A) Vous publiez B) Vous la supprimez sans réfléchir C) Vous la vérifiez sur une source fiable D) Vous la demandez à un autre assistant seulement — **Réponse : C**
  5. Pourquoi écrire « ce que je ne peux pas faire » dans la consigne ? — A) Pour que les idées respectent vos limites B) Pour remplir la consigne C) Parce que c'est obligatoire D) Pour que l'assistant se trompe moins de date — **Réponse : A**
- **Marques citées** : Google (Gemini, Google Sheets) ; Facebook, WhatsApp (Meta)

#### Script v1 (à valider par l'owner)

Durée estimée : 3:20 · Mots de voix off : 368

**Scène 1 — B1 Accroche · 0:00–0:14 · E**
- Visuel : illustration en aplats. Hadiza derrière son étal de sacs en pagne à Maradi ; son téléphone à la main, un carnet vide posé devant elle. Entrée en fondu.
- Écran : « Maradi · un samedi »
- VO : « Maradi, un samedi. Hadiza vend des sacs en pagne, cousus avec sa coopérative. Ses sacs sont prêts, mais pas ses publications : elle poste quand elle y pense. »

**Scène 2 — B1 Accroche · 0:14–0:24 · B**
- Visuel : carte promesse ; un petit calendrier s'ajoute sur l'étal.
- Écran : « Des idées et un calendrier du mois »
- VO : « À la fin de cette leçon, vous saurez obtenir des idées et un calendrier du mois avec l'IA. »

**Scène 3 — B2 Cadrage · 0:24–0:38 · B**
- Visuel : carte à deux lignes : « Sans fiche : des idées pour n'importe quelle boutique » (croix) ; « Avec fiche : des idées pour la vôtre » (coche).
- Écran : « L'IA ne connaît pas votre commerce »
- VO : « L'IA ne connaît pas votre commerce. Si vous ne dites rien, elle propose des idées pour n'importe quelle boutique. Plus vous précisez, plus elle aide. »

**Scène 4 — B2 Cadrage · 0:38–0:52 · A**
- Visuel : capture réelle de l'écran d'accueil de Gemini sur téléphone, zone de saisie encadrée.
- Écran : « Gemini : vous écrivez, il répond »
- VO : « Voici Gemini, un assistant, en version gratuite. Vous écrivez, il répond. C'est tout ce qu'il faut pour commencer. Aucune installation compliquée : un compte Google suffit. »

**Scène 5 — B3 Notion · 0:52–1:09 · C**
- Visuel : un carnet s'ouvre avec quatre lignes : « Je vends », « Mes clients », « Je publie sur », « Je ne peux pas ».
- Écran : « La fiche de votre commerce »
- VO : « Un : la fiche de votre commerce. Ce que vous vendez, à qui, où vous publiez. Et ce que vous ne pouvez pas faire : par exemple, livrer hors de votre ville. »

**Scène 6 — B3 Notion · 1:09–1:21 · C**
- Visuel : cinq pictogrammes s'allument l'un après l'autre : sac, étoile, coulisses (rideau), ampoule, étiquette.
- Écran : « Produit · Preuve · Coulisses · Conseil · Offre »
- VO : « Deux : cinq familles d'idées. Le produit. La preuve. Les coulisses. Le conseil. L'offre. Variez-les, et vos clients ne se lassent pas. »

**Scène 7 — B3 Notion · 1:21–1:39 · C**
- Visuel : le calendrier du mois : quatre lignes de trois cases pleines, puis une version surchargée barrée d'une croix.
- Écran : « Trois publications par semaine : un rythme tenable »
- VO : « Trois : un calendrier que vous pouvez tenir. Mieux vaut peu de publications, mais régulières. Trois par semaine, pas dix, puis plus rien. Hadiza en choisit trois, parce qu'elle sait qu'elle peut les tenir. »

**Scène 8 — B4 Application · 1:39–1:52 · A**
- Visuel : capture réelle de Gemini : la consigne collée avec la fiche de Hadiza ; cadre sur la ligne « Ce que je ne peux pas faire ».
- Écran : « La consigne, avec les limites de Hadiza »
- VO : « Démonstration. Hadiza colle la consigne avec la fiche de son commerce. Elle précise ses limites : pas de livraison hors de Maradi, pas de réduction. »

**Scène 9 — B4 Application · 1:52–2:07 · A**
- Visuel : capture réelle de la réponse en tableau ; cadre sur les colonnes « famille » et « photo à prévoir ».
- Écran : « Un tableau : semaine, jour, famille, idée »
- VO : « L'assistant rend un tableau : semaine, jour, famille, idée, photo à prévoir. Douze idées pour quatre semaines. Elle voit tout de suite quelle photo préparer pour chaque jour. »

**Scène 10 — B4 Application · 2:07–2:19 · A**
- Visuel : capture réelle : Hadiza demande « Remplacez l'idée de la semaine deux : je ne fais pas de réduction » ; la ligne remplacée est encadrée.
- Écran : « Une idée impossible ? Demandez de la remplacer »
- VO : « Une idée ne lui convient pas. Elle demande de la remplacer, et l'assistant propose autre chose. Elle reste maîtresse de son calendrier. »

**Scène 11 — B4 Application · 2:19–2:30 · A**
- Visuel : capture réelle : question « Quelles dates dois-je vérifier ? » et la liste rendue ; une coche à côté de chaque date.
- Écran : « Les dates à vérifier : la liste de l'assistant »
- VO : « Elle demande aussi : quelles dates dois-je vérifier ? L'assistant liste les fêtes et les jours de marché à confirmer. »

**Scène 12 — B4 Application · 2:30–2:44 · A**
- Visuel : capture réelle de Google Sheets : le tableau collé, les colonnes alignées.
- Écran : « Dans un tableur : votre calendrier du mois »
- VO : « Elle copie le tableau dans un tableur. Son calendrier du mois est prêt, sur son téléphone. Elle pourra le modifier à tout moment, sans rien perdre. »

**Scène 13 — B5 Consolidation · 2:44–2:55 · B**
- Visuel : carte question, pictogramme de calendrier avec un point d'interrogation.
- Écran : « Une journée mondiale, une date : on publie ? »
- VO : « À vous. L'assistant propose une journée mondiale, avec la date. Vous publiez sans vérifier ? » [silence 3 s]

**Scène 14 — B5 Consolidation · 2:55–3:09 · B**
- Visuel : carte réponse : « Non » ; la loupe sur la date ; la définition de l'hallucination s'écrit en dessous.
- Écran : « Hallucination : une réponse fausse, donnée avec assurance »
- VO : « Non. Un assistant peut se tromper de date, avec assurance. On appelle cela une hallucination : une réponse fausse, donnée avec assurance. Vérifiez sur une source fiable. »

**Scène 15 — B6 Clôture · 3:09–3:20 · B (carte de rappel)**
- Visuel : carte de rappel, points révélés au rythme de la voix ; l'étal de Hadiza avec son calendrier en fond.
- Écran : « Vous saurez obtenir des idées et un calendrier du mois avec l'IA » « 1. Décrire son commerce avant de demander » « 2. Varier : cinq familles d'idées » « 3. Vérifier chaque date et chaque fait »
- VO : « Hadiza a quatre semaines d'idées, et chaque date est vérifiée. Retenez : décrire, varier, vérifier. Construisez votre calendrier du mois. »

#### Captures à fournir par l'owner

1. **Gemini — accueil (scène 4)** · téléphone. Ouvrir l'application ou le site de Gemini, nouvelle conversation, zone de saisie visible. Enregistrement d'écran, environ 5 s. Masquer : nom et photo du compte, historique des conversations.
2. **Gemini — la consigne et le tableau (scènes 8 à 11)** · téléphone (ou ordinateur), compte de démonstration, interface en français. Enregistrement d'écran, environ 70 s utiles. Coller la consigne de la fiche en remplaçant les crochets : *« je vends des sacs en pagne cousus par une coopérative de couturières » · « Maradi » · « des femmes et des jeunes actifs de Maradi et des environs » · « Facebook et statuts WhatsApp » · « vente en boutique à Maradi, commande par WhatsApp, quantités limitées » · « livrer hors de Maradi, faire des réductions » · « quatre » · « trois »*. Puis taper : *« Remplacez l'idée de la semaine deux : je ne fais pas de réduction. »* Puis : *« Quelles dates dois-je vérifier ? »* Masquer : compte, historique.
3. **Google Sheets — le calendrier (scène 12)** · téléphone ou ordinateur. Copier le tableau de Gemini (ou utiliser le bouton d'export s'il existe [à vérifier au moment de la production]), le coller dans une feuille vierge, capture fixe. Masquer : e-mail du compte.

#### Notes de script

- Prononciation : Gemini « jé-mi-ni » ; Maradi « ma-ra-di ».
- « Consigne » remplace « prompt » ; « statut WhatsApp » désigne l'image ou la vidéo visible vingt-quatre heures : à ne pas expliquer en VO, la capture suffit.
- Pas de chiffre d'efficacité, pas de promesse de ventes. « Douze idées » décrit le tableau de la démo, pas un résultat.
- La fiche de commerce ne contient aucune donnée personnelle de client : jamais de noms ni de numéros dans la consigne.
- Notes d'adaptation : EN — « statut WhatsApp » → « WhatsApp Status ». HA / DJE — « hallucination » : garder le mot et la glose (« une réponse fausse, donnée avec assurance ») ; chercher avec le traducteur une image locale pour « les coulisses » ; adapter les jours de marché et les fêtes à la ville de l'apprenant.

### Leçon 2 — Des textes qui vendent, en français et en haoussa (`cr2`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez obtenir un texte de vente en français et en haoussa. »
- **Cas réel (B1 → B6)** : Hadiza, à Maradi. Son calendrier est prêt (leçon 1) ; aujourd'hui, c'est le jour du produit. Elle écrit « Beaux sacs en vente » : personne ne répond. Enjeu : un texte clair, vrai, avec une seule action, en français et en haoussa. En B6, elle publie deux textes vérifiés ; la version haoussa a été relue par Rahila, couturière de sa coopérative, qui a corrigé un mot.
- **Unités de notion (B3)** : 1. Le modèle en quatre temps — accroche, avantage concret, preuve, appel à agir. · 2. La même idée, deux langues — une adaptation en haoussa, pas une traduction mot à mot. · 3. Les trois vérifications avant de publier — Vrai (chaque promesse est exacte), Permis (vous avez le droit de tout montrer), À moi (votre voix, votre validation).
- **Démo (B4)** : Gemini (version gratuite). 1. Noter cinq faits vrais sur le sac. 2. Premier essai : coller la consigne sans la ligne « n'ajoutez aucun fait » ; repérer les promesses inventées dans la réponse. 3. Ajouter la ligne et relancer : le texte reste dans les faits. 4. Lire la version haoussa et le sens redonné en français. 5. Envoyer la version haoussa à Rahila par WhatsApp ; elle corrige un mot. 6. Publier. Résultat : un texte français et un texte haoussa validés. [Qualité du haoussa de l'assistant à vérifier au moment de la production]
- **Consolidation (B5)** : prédiction. « Le texte haoussa de l'assistant vous semble parfait. Vous publiez ? » Réponse : non. Un assistant écrit parfois un haoussa étrange ou change le sens : faire relire par une personne qui parle la langue.
- **Consigne à copier** :

```text
Vous rédigez un texte de vente pour [une publication Facebook / un statut WhatsApp].
Produit : [nom et description en une phrase].
Faits vrais, les seuls à utiliser : [matière, tailles, couleurs, lieu de vente, comment commander].
Client visé : [qui].
Structure : 1. une accroche d'une phrase ; 2. un avantage concret ; 3. une preuve tirée de mes faits ;
4. un appel à agir : [commander sur WhatsApp, passer à la boutique…].
Ton : [chaleureux et direct]. Maximum [soixante] mots.
N'ajoutez aucun fait, aucun prix, aucun témoignage qui ne figure pas dans mes faits.
Écrivez ensuite la même idée en haoussa naturel pour [des clientes de ma ville], sans traduction
mot à mot, puis redonnez le sens de votre haoussa en français pour que je vérifie.
```

- **Exercice** : « Rédigez et vérifiez votre texte de vente » — 1. Notez cinq faits vrais sur votre produit. 2. Collez la consigne, puis supprimez toute promesse absente de vos faits. 3. Faites relire la version haoussa par une personne de confiance qui parle la langue, puis corrigez avant de publier.
- **Carte de rappel** *(titre de la carte = la promesse, mot pour mot, sans « À la fin de cette leçon »)* : 1. Quatre temps : accroche, avantage, preuve, appel · 2. Haoussa : faire relire par un locuteur · 3. Vrai, Permis, À moi avant de publier
- **Quiz** :
  1. Quels sont les quatre temps d'un texte de vente ? — A) Titre, sous-titre, prix, signature B) Accroche, avantage, preuve, appel à agir C) Salut, excuses, promesse, adieu D) Photo, vidéo, son, musique — **Réponse : B**
  2. L'assistant écrit « résistant à l'eau », ce que vous n'avez jamais dit. Que faites-vous ? — A) Vous gardez, c'est joli B) Vous supprimez cette promesse et précisez la consigne C) Vous changez de téléphone D) Vous ajoutez une promesse de plus — **Réponse : B**
  3. Pourquoi demander le sens du haoussa en français ? — A) Pour allonger le texte B) Pour vérifier que le sens n'a pas changé C) Pour traduire en anglais D) Pour supprimer le haoussa — **Réponse : B**
  4. Qui doit valider un texte en haoussa écrit par l'assistant ? — A) Personne B) L'assistant lui-même C) Une personne de confiance qui parle la langue D) Un inconnu en ligne — **Réponse : C**
  5. Que vérifie « Permis » ? — A) Que vous avez le droit d'utiliser ce que vous montrez et dites B) Que le texte est court C) Que le téléphone est chargé D) Que le prix est bas — **Réponse : A**
- **Marques citées** : Google (Gemini) ; Facebook, WhatsApp (Meta)

#### Script v1 (à valider par l'owner)

Durée estimée : 3:23 · Mots de voix off : 373

**Scène 1 — B1 Accroche · 0:00–0:13 · E**
- Visuel : illustration en aplats. Hadiza à son étal, calendrier posé devant elle ; son téléphone affiche une publication « Beaux sacs en vente » sans aucune réaction.
- Écran : « Maradi · le jour du produit »
- VO : « Maradi. Le calendrier de Hadiza est prêt. Aujourd'hui, c'est le jour du produit. Elle écrit : « Beaux sacs en vente. » Personne ne répond. »

**Scène 2 — B1 Accroche · 0:13–0:23 · B**
- Visuel : carte promesse ; une étiquette portant un mot s'ajoute sur l'étal.
- Écran : « Un texte de vente en français et en haoussa »
- VO : « À la fin de cette leçon, vous saurez obtenir un texte de vente en français et en haoussa. »

**Scène 3 — B2 Cadrage · 0:23–0:40 · B**
- Visuel : carte à deux lignes : « Long, qui promet tout » (croix) ; « Clair, vrai, une seule action » (coche).
- Écran : « Un texte qui vend : clair, vrai, une seule action »
- VO : « Un texte qui vend n'est pas un texte long. Ni un texte qui promet tout. C'est un texte clair, vrai, avec une seule action. Vos clientes lisent sur un petit écran, en passant. »

**Scène 4 — B2 Cadrage · 0:40–0:56 · A**
- Visuel : capture réelle d'une application de notes sur téléphone : la liste des cinq faits sur le sac, encadrée.
- Écran : « Les faits vrais de Hadiza »
- VO : « Voici ce que Hadiza sait vraiment de son sac : la matière, les tailles, où commander. Ce sont ses faits. Elle les note avant de demander quoi que ce soit. »

**Scène 5 — B3 Notion · 0:56–1:08 · C**
- Visuel : quatre cases en ligne : « Accroche », « Avantage », « Preuve », « Appel » ; chacune s'allume avec un pictogramme.
- Écran : « Accroche · Avantage · Preuve · Appel à agir »
- VO : « Un : le modèle en quatre temps. Une accroche. Un avantage concret. Une preuve. Un appel à agir. Quatre phrases courtes suffisent. »

**Scène 6 — B3 Notion · 1:08–1:23 · C**
- Visuel : une même idée dans deux bulles, « Français » et « Haoussa » ; une flèche d'adaptation, et une flèche « mot à mot » barrée d'une croix.
- Écran : « Adapter, pas traduire mot à mot »
- VO : « Deux : la même idée, deux langues. Le français d'abord. Puis une adaptation en haoussa, pas une traduction mot à mot. Une adaptation parle comme vos clientes. »

**Scène 7 — B3 Notion · 1:23–1:40 · C**
- Visuel : trois pastilles s'allument : coche « Vrai », cadenas ouvert « Permis », main « À moi ».
- Écran : « Vrai · Permis · À moi »
- VO : « Trois : les trois vérifications avant de publier. Vrai : chaque promesse est exacte. Permis : vous avez le droit de tout montrer. À moi : c'est votre voix, et vous validez. »

**Scène 8 — B4 Application · 1:40–1:53 · G**
- Visuel : carte de consigne sur fond clair : la consigne de la fiche, avec les faits de Hadiza à la place des crochets.
- Écran : « La consigne, avec les faits vrais de Hadiza »
- VO : « Démonstration. Hadiza colle la consigne, avec ses faits vrais. L'assistant doit n'utiliser que ces faits. La consigne fixe aussi la longueur et le ton. »

**Scène 9 — B4 Application · 1:53–2:06 · A**
- Visuel : capture réelle de Gemini : premier essai ; les promesses ajoutées par l'assistant sont encadrées une à une. [Adapter selon la réponse réelle]
- Écran : « Premier essai : des promesses que Hadiza n'a jamais faites »
- VO : « Premier essai, sans la règle. L'assistant ajoute « résistant à l'eau » et « idéal pour toutes les occasions ». Hadiza ne l'a jamais dit. »

**Scène 10 — B4 Application · 2:06–2:16 · A**
- Visuel : capture réelle : la ligne « N'ajoutez aucun fait absent de ma liste » ajoutée ; le second texte, avec coche sur chaque phrase.
- Écran : « Règle ajoutée : seulement mes faits »
- VO : « Elle ajoute une ligne : n'ajoutez aucun fait absent de ma liste. Le second texte reste dans ses faits. »

**Scène 11 — B4 Application · 2:16–2:32 · A**
- Visuel : capture réelle : la version haoussa, puis le sens redonné en français ; cadre sur le sens en français.
- Écran : « Le sens en français : pour vérifier »
- VO : « Ensuite, la version en haoussa. L'assistant redonne aussi son sens en français. Hadiza vérifie que rien n'a changé. Un regard de plus, et une erreur de sens se voit. »

**Scène 12 — B4 Application · 2:32–2:47 · A**
- Visuel : capture réelle de WhatsApp : la version haoussa envoyée à Rahila ; réponse avec un mot corrigé, encadré. Nom et photo de contact masqués.
- Écran : « Relecture par une locutrice de confiance »
- VO : « Elle envoie le texte à Rahila, une couturière de sa coopérative. Rahila parle haoussa chaque jour. Elle corrige un mot. Une personne de confiance vaut mieux qu'un outil seul. »

**Scène 13 — B5 Consolidation · 2:47–2:57 · B**
- Visuel : carte question : un texte haoussa avec une coche tentante.
- Écran : « Un haoussa qui semble parfait : on publie ? »
- VO : « À vous. Le texte haoussa de l'assistant vous semble parfait. Vous publiez ? » [silence 3 s]

**Scène 14 — B5 Consolidation · 2:57–3:09 · B**
- Visuel : carte réponse : « Non » ; une loupe sur le texte, une main « À moi ».
- Écran : « Faire relire par une personne qui parle la langue »
- VO : « Non. Un assistant écrit parfois un haoussa étrange, ou change le sens. Faites relire par une personne qui parle la langue. »

**Scène 15 — B6 Clôture · 3:09–3:23 · B (carte de rappel)**
- Visuel : carte de rappel, points révélés au rythme de la voix ; l'étal avec deux étiquettes, une en français, une en haoussa.
- Écran : « Vous saurez obtenir un texte de vente en français et en haoussa » « 1. Quatre temps : accroche, avantage, preuve, appel » « 2. Haoussa : faire relire par un locuteur » « 3. Vrai, Permis, À moi avant de publier »
- VO : « Hadiza publie deux textes vérifiés, l'un en français, l'autre en haoussa. Retenez : quatre temps, un locuteur, trois vérifications. Rédigez et vérifiez votre texte de vente. »

#### Captures à fournir par l'owner

1. **Notes — les faits vrais (scène 4)** · téléphone. Dans l'application de notes, saisir : *Sac cabas en tissu pagne · doublure en coton, une poche intérieure · trois motifs disponibles · cousu à Maradi par une coopérative · commande par WhatsApp ou retrait en boutique à Maradi*. Capture d'écran fixe.
2. **Gemini — deux essais (scènes 8 à 11)** · téléphone (ou ordinateur), compte de démonstration. Enregistrement d'écran, environ 90 s utiles. Essai 1 : consigne de la fiche **sans** la ligne « N'ajoutez aucun fait… », avec les faits de la capture 1, « des femmes de Maradi », « commander sur WhatsApp », « soixante » mots. Garder la réponse réelle ; noter les promesses inventées. Essai 2 : ajouter la ligne *« N'ajoutez aucun fait, aucun prix, aucun témoignage qui ne figure pas dans mes faits. »* et relancer ; montrer aussi la version haoussa et le sens en français. Si l'assistant n'invente rien au premier essai, ne pas truquer : relancer une fois, ou signaler à Claude pour adapter la scène 9. Masquer : compte, historique.
3. **WhatsApp — la relecture (scène 12)** · téléphone. Envoyer le texte haoussa à un proche de confiance (ou à un contact de démonstration), capture de la discussion avec une réponse corrigeant un mot. Masquer : nom, photo et numéro du contact.

#### Notes de script

- Prononciation : Gemini « jé-mi-ni » ; haoussa « hao-sa » ; pagne « pagn ».
- « Accroche » = la première phrase qui donne envie de lire : à glosser en VO si le montage laisse du temps, sinon la carte suffit.
- Honnêteté : jamais de faux témoignage, jamais de prix inventé, jamais de promesse absente des faits. Pas de promesse de ventes. La qualité du haoussa de l'assistant est inégale : la relecture est obligatoire [à vérifier au moment de la production].
- Rahila : relectrice, pas figurante : ne pas la montrer à l'écran, seulement sa réponse.
- Notes d'adaptation : EN — « accroche » → « hook ». HA — la version HA de la vidéo est le moment idéal pour montrer l'adaptation : le traducteur peut proposer d'autres exemples d'accroches locales. DJE — ajouter une adaptation en zarma plutôt que reprendre le haoussa [langue à valider avec le traducteur].

### Leçon 3 — Affiches et photos produits, sans tromper (`cr3`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez retoucher une photo produit et faire une affiche, honnêtement. »
- **Cas réel (B1 → B6)** : Hadiza, à Maradi. Ses textes sont prêts (leçon 2) ; ses photos, non : prises le soir sur le comptoir, fond encombré, couleurs jaunies. Enjeu : une image qui donne envie sans tromper la cliente, qui doit recevoir le sac qu'elle a vu. En B6, l'affiche montre le vrai sac, bien éclairé, avec un message et une action. Contre-exemple (B5) : Souleymane, community manager à Niamey, à qui un client demande un sac « plus rouge » que le vrai.
- **Unités de notion (B3)** : 1. Une bonne photo commence au téléphone — près d'une fenêtre, fond simple, produit entier. · 2. Retoucher le décor, jamais le produit — fond, lumière, netteté : oui ; couleur, motif, défauts : non. · 3. Une affiche : une image, un message, une action — et « Permis » : vous avez le droit d'utiliser chaque image, chaque police, chaque visage.
- **Démo (B4)** : outil d'image de Gemini (surnommé « Nano Banana ») + Canva, sur téléphone. 1. Photographier le sac près d'une fenêtre. 2. Déposer la photo dans l'outil d'image de Gemini et coller la consigne : produit identique, fond clair, lumière douce. 3. Comparer le résultat à l'original, côte à côte : couleur, motif, coutures. 4. Si un détail a changé, relancer plus précisément ou garder l'original. 5. Dans Canva, choisir un format de publication, déposer la photo retouchée. 6. Écrire l'accroche et l'action, vérifier la lisibilité, télécharger. Résultat : une affiche prête à publier, fidèle au produit. [Nom de l'outil d'image dans l'interface, disponibilité en version gratuite, limites d'usage, fonctions d'IA de Canva réservées à la version payante : à vérifier au moment de la production]
- **Consolidation (B5)** : prédiction. « Le client de Souleymane veut son sac « plus rouge » que le vrai. Souleymane peut-il le faire ? » Réponse : non. Éclaircir la photo, oui ; changer la couleur, non : le client recevrait un autre sac et se plaindrait. Souleymane propose une photo plus lumineuse et fidèle.
- **Consigne à copier** :

```text
Voici la photo d'un produit réel : [description : un sac en tissu pagne].
Retouchez cette photo en gardant le produit EXACTEMENT identique : même couleur, mêmes motifs,
même forme, mêmes coutures, mêmes défauts visibles.
Changez seulement : le fond (uni, [clair]), la lumière (douce, naturelle),
et supprimez les objets qui gênent à l'arrière-plan.
N'ajoutez aucun objet, aucun texte, aucune personne.
Format : [carré].
```

- **Exercice** : « Créez une affiche fidèle à votre produit » — 1. Photographiez votre produit près d'une fenêtre, sur un fond simple. 2. Retouchez le fond et la lumière, puis comparez avec l'original : couleur, motif, forme. 3. Dans Canva, faites une affiche : une image, un message, une action.
- **Carte de rappel** *(titre de la carte = la promesse, mot pour mot, sans « À la fin de cette leçon »)* : 1. Photographier près d'une fenêtre, fond simple · 2. Retoucher le décor, jamais le produit · 3. Une affiche : un message, une action
- **Quiz** :
  1. Où prendre la photo d'un produit pour de bons résultats ? — A) Dans une pièce sombre B) Près d'une fenêtre, sur un fond simple C) Sous une lampe très forte D) De très loin — **Réponse : B**
  2. Que peut-on changer en retouchant une photo produit ? — A) La couleur du produit B) Les motifs du produit C) Le fond et la lumière D) La taille du produit — **Réponse : C**
  3. Pourquoi comparer la photo retouchée à l'original ? — A) Pour vérifier que le produit reste fidèle B) Pour choisir la plus grande C) Pour économiser des données D) Pour supprimer l'original — **Réponse : A**
  4. Que contient une affiche efficace ? — A) Dix messages B) Un message, une image, une action C) Uniquement une image D) Uniquement un texte long — **Réponse : B**
  5. Que vérifie « Permis » pour une affiche ? — A) Que l'affiche est belle B) Que le fond est blanc C) Que vous avez le droit d'utiliser chaque image, police et visage montrés D) Que l'affiche est courte — **Réponse : C**
- **Marques citées** : Google (Gemini) ; « Nano Banana » (surnom de l'outil d'image de Gemini) ; Canva ; WhatsApp (Meta)

#### Script v1 (à valider par l'owner)

Durée estimée : 3:26 · Mots de voix off : 379

**Scène 1 — B1 Accroche · 0:00–0:12 · E**
- Visuel : illustration en aplats. Hadiza, le soir, photographie un sac sur un comptoir encombré ; l'ampoule jaunit la scène.
- Écran : « Maradi · le soir »
- VO : « La semaine dernière, Hadiza a appris trois vérifications pour ses textes. Ce soir, sa photo du sac est sombre, avec un fond encombré. »

**Scène 2 — B1 Accroche · 0:12–0:21 · B**
- Visuel : carte promesse ; une affiche encadrée s'ajoute sur l'étal.
- Écran : « Retoucher une photo et faire une affiche »
- VO : « À la fin de cette leçon, vous saurez retoucher une photo produit et faire une affiche, honnêtement. »

**Scène 3 — B2 Cadrage · 0:21–0:35 · B**
- Visuel : carte à deux lignes : « Éclaircir · nettoyer le fond » (coche) ; « Changer la couleur ou la forme » (croix).
- Écran : « Retoucher n'est pas tricher. Changer le produit, si. »
- VO : « Retoucher n'est pas tricher. Éclaircir la photo, nettoyer le fond : c'est permis. Changer la couleur ou la forme du sac, c'est tromper la cliente. »

**Scène 4 — B2 Cadrage · 0:35–0:52 · A**
- Visuel : capture réelle de la photo d'origine, sombre, fond encombré ; le sac encadré.
- Écran : « La photo d'origine »
- VO : « Voici la photo de Hadiza. Elle est sombre, le fond est encombré. Mais le sac, lui, est bien là. Il n'y a rien à inventer : il faut seulement mieux le montrer. »

**Scène 5 — B3 Notion · 0:52–1:08 · C**
- Visuel : pictogrammes : fenêtre, fond uni, produit entier dans un cadre ; chacun s'allume avec une coche.
- Écran : « Fenêtre · fond simple · produit entier »
- VO : « Un : une bonne photo commence au téléphone. Près d'une fenêtre, de jour. Un fond simple. Le produit entier dans le cadre. Prenez trois photos, et gardez la plus nette. »

**Scène 6 — B3 Notion · 1:08–1:21 · C**
- Visuel : avant / après côte à côte ; coches sur « fond », « lumière », « netteté » ; croix sur « couleur », « motif », « défauts ».
- Écran : « Le décor : oui. Le produit : jamais. »
- VO : « Deux : retoucher le décor, jamais le produit. Le fond, la lumière, la netteté : oui. La couleur, le motif, les défauts : non. »

**Scène 7 — B3 Notion · 1:21–1:33 · C**
- Visuel : une affiche en trois zones : image, message, action ; la pastille « Permis » (cadenas ouvert) s'allume.
- Écran : « Une image · un message · une action »
- VO : « Trois : l'affiche. Une image, un message, une action. Et Permis : vous avez le droit d'utiliser chaque image, chaque police, chaque visage montré. »

**Scène 8 — B4 Application · 1:33–1:47 · A**
- Visuel : capture réelle de Gemini : la photo déposée et la consigne collée ; cadre sur « EXACTEMENT identique ».
- Écran : « Consigne : produit identique, fond clair, lumière douce »
- VO : « Démonstration. Hadiza dépose sa photo dans l'outil d'image de Gemini, surnommé « Nano Banana ». Elle colle sa consigne : produit identique, fond clair, lumière douce. »

**Scène 9 — B4 Application · 1:47–2:02 · A**
- Visuel : capture réelle côte à côte de l'original et du résultat ; cadres successifs sur la couleur, le motif, les coutures. [Adapter selon le résultat réel]
- Écran : « Comparer : couleur, motif, coutures »
- VO : « Le résultat s'affiche. Elle le compare à l'original, côte à côte : la couleur, le motif, les coutures. Si un détail diffère, ce n'est plus son sac. »

**Scène 10 — B4 Application · 2:02–2:13 · A**
- Visuel : capture réelle : la bandoulière encadrée ; nouvelle consigne « Gardez exactement la même couleur de bandoulière » ; résultat corrigé. [Adapter selon le résultat réel]
- Écran : « Un détail a changé ? Relancez, ou gardez l'original. »
- VO : « Le motif est fidèle. Mais la bandoulière paraît plus claire. Elle relance en précisant la couleur. Sinon, elle garde l'original. »

**Scène 11 — B4 Application · 2:13–2:20 · A**
- Visuel : capture réelle de Canva sur téléphone : choix d'un format de publication, dépôt de la photo retouchée. Cadre sur le bouton de dépôt.
- Écran : « Canva : un format, votre photo »
- VO : « Ensuite, Canva. Hadiza choisit un format de publication et dépose la photo retouchée. »

**Scène 12 — B4 Application · 2:20–2:34 · A**
- Visuel : capture réelle : champs de texte ajoutés, l'accroche et l'action ; cadre sur le contraste texte/fond.
- Écran : « Un message, une action, bien lisibles »
- VO : « Elle écrit l'accroche et l'action : « Sacs en pagne, cousus à Maradi. Commandez sur WhatsApp. » Elle vérifie que le texte se lit de loin. »

**Scène 13 — B4 Application · 2:34–2:46 · A**
- Visuel : capture réelle : bouton de téléchargement ; l'image enregistrée dans la galerie.
- Écran : « Télécharger, puis publier »
- VO : « Elle télécharge l'image et la publie. Certaines fonctions d'IA de Canva sont payantes : Canva les signale. Les modèles gratuits suffisent pour commencer. »

**Scène 14 — B5 Consolidation · 2:46–3:00 · B**
- Visuel : carte question : un sac gris à côté d'un sac rouge, point d'interrogation.
- Écran : « Un sac « plus rouge » que le vrai : on le fait ? »
- VO : « À vous. Le client de Souleymane veut son sac plus rouge que le vrai. Souleymane peut-il le faire ? » [silence 3 s]

**Scène 15 — B5 Consolidation · 3:00–3:14 · B**
- Visuel : carte réponse : « Non » ; deux pastilles : « Éclaircir : oui », « Changer la couleur : non ».
- Écran : « Éclaircir : oui. Changer la couleur : non. »
- VO : « Non. Éclaircir la photo, oui. Changer la couleur, non : le client recevrait un autre sac, et se plaindrait. Souleymane propose une photo plus lumineuse, fidèle. »

**Scène 16 — B6 Clôture · 3:14–3:26 · B (carte de rappel)**
- Visuel : carte de rappel, points révélés au rythme de la voix ; l'étal avec l'affiche de Hadiza.
- Écran : « Vous saurez retoucher une photo produit et faire une affiche, honnêtement » « 1. Photographier près d'une fenêtre, fond simple » « 2. Retoucher le décor, jamais le produit » « 3. Une affiche : un message, une action »
- VO : « L'affiche de Hadiza montre le vrai sac, bien éclairé. Retenez : photographier, retoucher le décor, un message. Créez une affiche fidèle à votre produit. »

#### Captures à fournir par l'owner

1. **Photo d'origine (scène 4)** · téléphone. Photographier un vrai produit simple (sac en tissu, pagne plié, bouteille non étiquetée…), le soir ou dans une pièce sombre, fond volontairement encombré. Aucun visage, aucune marque visible. Capture fixe de la photo dans la galerie.
2. **Gemini — retouche (scènes 8 à 10)** · téléphone, compte de démonstration. Enregistrement d'écran, environ 75 s utiles : ouvrir Gemini, choisir la création ou la modification d'image [intitulé à vérifier au moment de la production], déposer la photo, coller la consigne de la fiche en remplaçant les crochets par : *« un sac en tissu pagne » · « clair »* · *« carré »*. Garder la réponse réelle. Si un détail a changé (couleur, motif), taper : *« Gardez exactement la même couleur de bandoulière. »* Enregistrer les deux images (originale et retouchée) pour la comparaison faite par Claude. Si l'outil n'est pas disponible en version gratuite, le signaler : Claude adapte la scène [à vérifier au moment de la production].
3. **Canva — l'affiche (scènes 11 à 13)** · téléphone, compte gratuit. Enregistrement d'écran, environ 60 s utiles : créer un design, choisir un format de publication, déposer la photo retouchée, ajouter deux textes : *« Sacs en pagne, cousus à Maradi »* et *« Commandez sur WhatsApp »*, régler la lisibilité (taille, contraste), télécharger. N'utiliser que des éléments marqués gratuits. Masquer : nom du compte, projets récents.

#### Notes de script

- Prononciation : « Nano Banana » = « na-no ba-na-na » ; Canva « kan-va » ; Gemini « jé-mi-ni ». « Nano Banana » est dit une seule fois, avec sa glose (« surnommé ») : ensuite « l'outil d'image de Gemini ».
- Honnêteté envers le client : jamais de photo produit trompeuse, jamais de fausse cliente générée présentée comme réelle, jamais de faux « avant/après ». Si une image illustrative est générée, la présenter comme illustration.
- Droits (Permis) : photos, polices et éléments de Canva soumis à leurs licences ; visage d'une personne : consentement ; conditions d'usage commercial des images générées à lire chez l'outil [à vérifier au moment de la production].
- Version gratuite et limites d'usage : sans chiffre. Fonctions payantes de Canva signalées par l'outil [à vérifier au moment de la production].
- Notes d'adaptation : EN — « affiche » → « poster » ; « fidèle » → « true to the product ». HA / DJE — « retoucher » et « fidèle » : trouver des termes courants ; garder « Canva », « Gemini », « Nano Banana » tels quels.

### Leçon 4 — Vidéos courtes verticales, sous-titrées (`cr4`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez monter une vidéo verticale et sous-titrée, sur téléphone. »
- **Cas réel (B1 → B6)** : Hadiza, à Maradi. Son affiche montre le vrai sac (leçon 3) ; ses clientes veulent le voir bouger, mais elle n'ose pas se filmer et ses anciennes vidéos sont couchées sur le côté et trop longues. Enjeu : une vidéo courte, sans visage, qui montre le vrai produit. En B6, elle a une vidéo verticale, courte, sous-titrée, avec un clip d'ambiance généré qui ne montre jamais le sac. Contre-exemple (B5) : le client de Souleymane voudrait montrer son sac avec le clip généré.
- **Unités de notion (B3)** : 1. Une vidéo, une idée, un geste — format vertical, accroche dès la première seconde, un seul message. · 2. Filmer le vrai, générer l'ambiance — le produit se filme pour de vrai ; un clip généré sert de décor, jamais à montrer le produit. · 3. Monter et sous-titrer sur téléphone — couper, ordonner, ajouter un texte, relire les sous-titres automatiques.
- **Démo (B4)** : téléphone + Gemini (génération vidéo, Veo) + application de montage (CapCut ou éditeur du téléphone). 1. Filmer trois plans courts, téléphone debout : le tissu de près, les mains qui ouvrent le sac, le sac porté. 2. Dans Gemini, demander un clip d'ambiance sans produit ni visage ; vérifier le résultat. 3. Dans l'application de montage, importer les clips, les ordonner, couper les débuts et les fins. 4. Ajouter le texte d'accroche dès la première seconde. 5. Lancer les sous-titres automatiques, relire chaque ligne, corriger. 6. Exporter en vertical et regarder sans le son. Résultat : une vidéo verticale, courte, sous-titrée. Sans génération : filmer un plan de plus. [Disponibilité de la génération vidéo en version gratuite et selon le pays, limites d'usage, libellés de l'application de montage et langues des sous-titres automatiques à vérifier au moment de la production]
- **Consolidation (B5)** : prédiction. « Le client de Souleymane veut montrer son sac avec le clip généré. Ce sac est presque pareil. On publie ? » Réponse : non. Ce n'est pas son sac : la cliente doit reconnaître ce qu'elle recevra. Montrer le vrai produit, filmé ; le clip généré reste un décor.
- **Consigne à copier** :

```text
Clip vertical court : ambiance d'un marché en journée à [votre ville], lumière chaude et douce,
plan fixe ou très lent mouvement de caméra.
Aucun texte à l'écran, aucun visage reconnaissable, aucun logo,
aucun [sac / produit] visible : seulement le décor.
Style réaliste et sobre.
```

- **Exercice** : « Montez votre vidéo verticale sous-titrée » — 1. Filmez trois plans courts de votre produit, téléphone à la verticale. 2. Montez : ordre, coupes, texte d'accroche dès la première seconde. 3. Ajoutez les sous-titres, relisez chaque ligne, regardez la vidéo sans le son.
- **Carte de rappel** *(titre de la carte = la promesse, mot pour mot, sans « À la fin de cette leçon »)* : 1. Verticale, courte : une vidéo, une idée · 2. Filmer le vrai, générer l'ambiance · 3. Sous-titres automatiques : toujours les relire
- **Quiz** :
  1. Quel format convient aux vidéos de réseaux sociaux sur téléphone ? — A) Couché, large B) Carré uniquement C) Vertical D) Aucun, peu importe — **Réponse : C**
  2. Que doit-il se passer dès la première seconde ? — A) Un long générique B) L'accroche : un geste ou un texte qui donne envie de rester C) Un écran noir D) La liste des prix — **Réponse : B**
  3. Que peut montrer un clip généré par l'IA ? — A) Votre produit, comme si c'était le vrai B) Un faux avis de cliente C) Votre prix D) Une ambiance, sans montrer le produit — **Réponse : D**
  4. Pourquoi ajouter des sous-titres ? — A) Pour allonger la vidéo B) Parce que certaines personnes regardent sans le son C) Parce que c'est obligatoire D) Pour cacher la voix — **Réponse : B**
  5. Que faire des sous-titres automatiques ? — A) Les publier tels quels B) Les supprimer toujours C) Les relire et corriger les erreurs, surtout les noms de lieux D) Les traduire en anglais — **Réponse : C**
- **Marques citées** : Google (Gemini, Veo) ; CapCut ; WhatsApp (Meta)

#### Script v1 (à valider par l'owner)

Durée estimée : 3:31 · Mots de voix off : 387

**Scène 1 — B1 Accroche · 0:00–0:12 · E**
- Visuel : illustration en aplats. Hadiza tient son téléphone à l'horizontale devant ses sacs, hésitante ; des clientes en arrière-plan regardent de loin.
- Écran : « Maradi · une cliente demande une vidéo »
- VO : « La semaine dernière, l'affiche de Hadiza montrait le vrai sac. Aujourd'hui, ses clientes veulent le voir bouger. Mais Hadiza n'ose pas se filmer. »

**Scène 2 — B1 Accroche · 0:12–0:21 · B**
- Visuel : carte promesse ; un téléphone vertical qui filme s'ajoute sur l'étal.
- Écran : « Une vidéo verticale et sous-titrée »
- VO : « À la fin de cette leçon, vous saurez monter une vidéo verticale et sous-titrée, sur téléphone. »

**Scène 3 — B2 Cadrage · 0:21–0:35 · B**
- Visuel : carte à deux lignes : « Un visage · un studio » (croix) ; « Des mains · un produit · une idée » (coche).
- Écran : « Ni visage, ni studio : des mains et un produit »
- VO : « Une vidéo courte ne demande ni visage, ni studio. Des mains, un produit, une idée : c'est assez. Votre téléphone suffit, et Hadiza peut rester derrière l'appareil. »

**Scène 4 — B3 Notion · 0:35–0:47 · C**
- Visuel : un cadre vertical se dessine, une accroche apparaît dans la première seconde sur une ligne de temps ; une seule bulle de message.
- Écran : « Vertical · accroche immédiate · un seul message »
- VO : « Un : une vidéo, une idée, un geste. Format vertical. Une accroche dès la première seconde. Un seul message, pas trois. »

**Scène 5 — B3 Notion · 0:47–1:00 · C**
- Visuel : deux pistes : « Filmé : le produit » (coche) ; « Généré : le décor » (coche) ; le produit dans le clip généré est barré d'une croix.
- Écran : « Le produit : filmé. Le décor : peut être généré. »
- VO : « Deux : filmer le vrai, générer l'ambiance. Votre produit se filme pour de vrai. Un clip généré peut servir de décor, jamais pour montrer le produit. »

**Scène 6 — B3 Notion · 1:00–1:17 · C**
- Visuel : une ligne de montage avec trois clips ; ciseaux, texte, sous-titres s'allument un à un ; une loupe sur les sous-titres.
- Écran : « Couper · ordonner · sous-titrer · relire »
- VO : « Trois : monter et sous-titrer. Couper, ordonner, ajouter un texte. Les sous-titres automatiques aident, mais il faut les relire. Chaque outil a ses libellés : suivez les gestes, pas les noms. »

**Scène 7 — B4 Application · 1:17–1:28 · A**
- Visuel : capture réelle sur téléphone : trois plans filmés à la verticale, vignettes dans la galerie : le tissu de près, les mains qui ouvrent le sac, le sac porté.
- Écran : « Trois plans courts, téléphone debout »
- VO : « Démonstration. Hadiza filme trois plans, téléphone debout. Le tissu de près. Les mains qui ouvrent le sac. Le sac porté. »

**Scène 8 — B4 Application · 1:28–1:44 · A**
- Visuel : capture réelle de Gemini : la consigne de clip d'ambiance ; cadre sur « aucun sac visible ».
- Écran : « Un clip d'ambiance : sans sac, sans visage »
- VO : « Pour l'ambiance, elle demande à Gemini un clip court. Un marché de Maradi, lumière douce, sans sac, sans visage. Cette fonction dépend de l'offre. Sinon, elle filme un plan de plus. »

**Scène 9 — B4 Application · 1:44–2:03 · A**
- Visuel : capture réelle : le clip généré en lecture ; cadre sur le bas de l'image, puis coche « pas de sac, pas de logo ». [Adapter selon le résultat réel]
- Écran : « On regarde le clip : pas de sac, pas de logo »
- VO : « Elle regarde le clip entier : pas de sac, pas de logo, pas de visage. Elle le garde comme décor d'ouverture. Une image générée peut cacher un détail faux : il faut regarder jusqu'au bout. »

**Scène 10 — B4 Application · 2:03–2:14 · A**
- Visuel : capture réelle de l'application de montage : nouveau projet, import des quatre clips, rangés sur la ligne de temps ; ciseaux encadrés.
- Écran : « Importer · ordonner · couper »
- VO : « Dans l'application de montage, elle importe les clips. Elle les range dans l'ordre, et coupe les débuts et les fins. »

**Scène 11 — B4 Application · 2:14–2:27 · A**
- Visuel : capture réelle : ajout d'un texte sur le premier clip, « Sacs en pagne, cousus à Maradi » ; cadre sur la durée du texte, au tout début.
- Écran : « L'accroche, dès la première seconde »
- VO : « Elle ajoute l'accroche dès la première seconde : « Sacs en pagne, cousus à Maradi ». On fait défiler vite : le début décide. »

**Scène 12 — B4 Application · 2:27–2:35 · A**
- Visuel : capture réelle : sous-titres automatiques générés ; cadre sur une ligne corrigée.
- Écran : « Sous-titres automatiques : relire chaque ligne »
- VO : « Elle lance les sous-titres automatiques. Puis elle relit chaque ligne, et corrige les noms de lieux. »

**Scène 13 — B4 Application · 2:35–2:49 · A**
- Visuel : capture réelle : bouton d'export ; lecture de la vidéo finale avec le son coupé, sous-titres visibles.
- Écran : « Exporter · regarder sans le son »
- VO : « Elle exporte en vertical, puis regarde sans le son. Le message passe-t-il ? Oui. La vidéo est prête. Elle peut aussi la partager en statut WhatsApp. »

**Scène 14 — B5 Consolidation · 2:49–3:04 · B**
- Visuel : carte question : un sac réel à côté d'un sac « presque pareil », point d'interrogation.
- Écran : « Le clip généré montre un sac presque pareil : on publie ? »
- VO : « À vous. Le client de Souleymane veut montrer son sac avec le clip généré. Ce sac est presque pareil. On publie ? » [silence 3 s]

**Scène 15 — B5 Consolidation · 3:04–3:17 · B**
- Visuel : carte réponse : « Non » ; la pastille « Vrai » (coche) s'allume.
- Écran : « La cliente doit reconnaître ce qu'elle recevra »
- VO : « Non. Ce n'est pas son sac. La cliente doit reconnaître ce qu'elle recevra. Montrez le vrai produit, filmé. Le clip généré reste un décor. »

**Scène 16 — B6 Clôture · 3:17–3:31 · B (carte de rappel)**
- Visuel : carte de rappel, points révélés au rythme de la voix ; l'étal avec un téléphone vertical.
- Écran : « Vous saurez monter une vidéo verticale et sous-titrée, sur téléphone » « 1. Verticale, courte : une vidéo, une idée » « 2. Filmer le vrai, générer l'ambiance » « 3. Sous-titres automatiques : toujours les relire »
- VO : « La vidéo de Hadiza est courte, verticale, sous-titrée, et honnête. Retenez : une idée, le vrai produit, des sous-titres relus. Montez votre vidéo verticale sous-titrée. »

#### Captures à fournir par l'owner

1. **Les trois plans (scène 7)** · téléphone tenu à la verticale, produit réel (sac en tissu ou autre objet simple). Filmer : le tissu de près, les mains qui ouvrent le sac, le sac porté. Environ 5 s chacun. Aucun visage. Puis capture d'écran des trois vignettes dans la galerie.
2. **Gemini — clip d'ambiance (scènes 8 et 9)** · téléphone, compte de démonstration. Enregistrement d'écran, environ 40 s utiles : coller la consigne de la fiche avec *« Maradi »* et *« sac »* à la place des crochets, lancer la génération, lire le clip obtenu. Si la génération vidéo n'est pas disponible avec le compte gratuit, le dire à Claude : les scènes 8 et 9 sont alors remplacées par un plan filmé supplémentaire [à vérifier au moment de la production]. Masquer : compte, historique.
3. **Montage sur téléphone (scènes 10 à 13)** · application CapCut ou éditeur du téléphone [à vérifier au moment de la production]. Enregistrement d'écran, environ 90 s utiles : nouveau projet, importer les quatre clips, ordre, ciseaux ; ajouter le texte *« Sacs en pagne, cousus à Maradi »* au début ; lancer les sous-titres automatiques en français ; corriger une ligne ; exporter ; lire le résultat avec le son coupé. Masquer : nom du compte, projets récents.

#### Notes de script

- Prononciation : Veo « vé-o » (ne pas ajouter de numéro) ; CapCut « kap-keutt ». Dans la VO, on dit « Gemini » et « l'application de montage » ; Veo et CapCut figurent seulement à l'écran et dans la mention légale.
- Honnêteté : une vidéo générée n'est jamais présentée comme le vrai produit ; pas de faux témoignage filmé, pas de visage généré présenté comme une vraie cliente ; le clip généré peut être signalé comme tel [obligations éventuelles de mention à vérifier au moment de la production].
- La disponibilité de la génération vidéo, ses limites d'usage et les langues des sous-titres automatiques (français oui, haoussa à vérifier) changent vite : ne rien chiffrer, ne rien promettre.
- Droits : musique et sons de l'application soumis à leurs licences ; pas de musique commerciale sans droit [à vérifier au moment de la production].
- Notes d'adaptation : EN — « accroche » → « hook ». HA / DJE — « vertical » et « sous-titres » : termes à confirmer ; relire les sous-titres dans la langue de la voix.

### Leçon 5 — Projet final : une campagne d'une semaine (`cr5`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez livrer une campagne d'une semaine, honnête et mesurée. »
- **Cas réel (B1 → B6)** : Hadiza, à Maradi, assemble tout ce qu'elle a fait (calendrier, textes, affiche, vidéo) pour lancer ses sacs en pagne pendant sept jours. Souleymane, community manager à Niamey, lui sert de second regard. Enjeu : une campagne cohérente, honnête, que l'on peut mesurer. En B6, après sept jours, Hadiza compte les messages reçus et les commandes, note ce qui a marché, garde cela et change le reste.
- **Unités de notion (B3)** : 1. Les trois blocs du dossier — le plan (fiche produit, calendrier de sept jours), les contenus (texte, affiche, vidéo), le contrôle (trois vérifications, bilan). · 2. Quatre critères d'évaluation — cohérent, Vrai, Permis, À moi. · 3. Mesurer simplement — compter messages et commandes, noter ce qui a marché, garder ou changer.
- **Démo (B4)** : exemple de projet réussi, le dossier de Hadiza, bloc par bloc. 1. Le plan : fiche produit (faits vrais) et calendrier de sept jours dans un tableur. 2. Les contenus : texte de vente en français et en haoussa relu par Rahila ; affiche avec la comparaison avant/après de la photo ; vidéo verticale sous-titrée. 3. Le contrôle : la fiche des trois vérifications cochée, relue par Souleymane. 4. Le bilan à sept jours : par jour, le contenu publié, les messages reçus, une note. Résultat à l'écran : les trois blocs ouverts l'un après l'autre.
- **Consolidation (B5)** : prédiction. « Les textes d'une campagne sont vrais, mais l'affiche montre un sac plus grand que le vrai. La campagne est-elle honnête ? » Réponse : non. Un seul élément trompeur suffit ; « Vrai » s'applique à chaque texte, chaque image, chaque vidéo.
- **Consigne à copier** :

```text
Relisez ma campagne d'une semaine comme un évaluateur bienveillant, sans la réécrire à ma place.
Produit : [produit, en une phrase]. Mes faits vrais : [liste des faits].
Calendrier : [collez le tableau]. Texte en français : [collez]. Texte en haoussa et son sens
en français : [collez]. Affiche : [décrivez-la]. Vidéo : [décrivez-la].
Critères : 1. cohérent : un produit, un message ; 2. Vrai : chaque promesse figure dans mes faits ;
3. Permis : droits d'image, de musique et consentements réglés ; 4. À moi : ma voix, ma validation.
Pour chaque critère : « acquis », « partiel » ou « absent », avec une phrase d'explication.
Signalez toute promesse qui n'est pas dans mes faits. Terminez par les trois corrections les plus utiles.
Aucune donnée personnelle de client dans ce que je vous envoie.
```

- **Exercice** : « Déposez votre campagne d'une semaine » — 1. Rassemblez les trois blocs : fiche produit et calendrier de sept jours ; texte, affiche et vidéo ; fiche des trois vérifications. 2. Faites relire avec la consigne et par une personne de confiance, puis corrigez. 3. Déposez le dossier sur la plateforme. [Modalités de dépôt à confirmer à l'intégration dans le site]
- **Carte de rappel** *(titre de la carte = la promesse, mot pour mot, sans « À la fin de cette leçon » ; un point par leçon)* : 1. Un calendrier du mois, dates vérifiées · 2. Texte de vente : quatre temps, haoussa relu · 3. Photo et affiche fidèles au produit · 4. Vidéo verticale, sous-titres relus
- **Quiz** :
  1. Que faire des dates proposées par l'assistant avant de les utiliser ? — A) Les publier telles quelles B) Les vérifier sur une source fiable C) Les supprimer toutes D) Les cacher — **Réponse : B**
  2. Qui relit un texte haoussa écrit par l'assistant ? — A) Personne B) L'assistant lui-même C) Un inconnu en ligne D) Une personne de confiance qui parle la langue — **Réponse : D**
  3. Quelle photo produit est acceptable dans la campagne ? — A) Une photo où le produit a une autre couleur B) Une photo où le produit paraît plus grand C) Une photo plus lumineuse, où le produit reste identique D) Une photo générée d'un produit imaginaire — **Réponse : C**
  4. Que faire des sous-titres automatiques d'une vidéo ? — A) Les publier sans les lire B) Les relire et corriger les erreurs C) Les supprimer toujours D) Les traduire en anglais — **Réponse : B**
  5. Comment mesurer simplement une campagne d'une semaine ? — A) Compter les messages reçus et les commandes, et noter ce qui a marché B) Regarder une seule fois, au hasard C) Demander à l'assistant de deviner D) Ne rien mesurer — **Réponse : A**
- **Marques citées** : Google (Gemini, Google Sheets) ; Canva ; WhatsApp (Meta)

#### Script v1 (à valider par l'owner)

Durée estimée : 3:23 · Mots de voix off : 372

**Scène 1 — B1 Accroche · 0:00–0:12 · E**
- Visuel : illustration en aplats. Hadiza et Souleymane devant l'étal ; un grand calendrier de sept jours, des sacs en pagne alignés.
- Écran : « Maradi · le lancement »
- VO : « La semaine dernière, la vidéo de Hadiza était courte, verticale et honnête. Aujourd'hui, elle assemble tout pour lancer ses sacs pendant sept jours. »

**Scène 2 — B1 Accroche · 0:12–0:21 · B**
- Visuel : carte promesse ; l'étal s'habille de ses sept jours.
- Écran : « Une campagne d'une semaine, honnête et mesurée »
- VO : « À la fin de cette leçon, vous saurez livrer une campagne d'une semaine, honnête et mesurée. »

**Scène 3 — B2 Cadrage · 0:21–0:32 · B**
- Visuel : carte : « Un coup d'éclat » (croix) ; « Sept jours qui se répondent » (coche).
- Écran : « Un produit, un message, sept jours »
- VO : « Une campagne n'est pas un coup d'éclat. C'est un produit, un message, et sept jours de publications qui se répondent. »

**Scène 4 — B3 Notion · 0:32–0:51 · C**
- Visuel : trois blocs se posent : « Plan », « Contenus », « Contrôle », chacun avec ses pictogrammes (calendrier ; texte, affiche, clap ; coche, cadenas, main).
- Écran : « Plan · Contenus · Contrôle »
- VO : « Le dossier se compose de trois blocs. Le plan : une fiche produit et un calendrier de sept jours. Les contenus : un texte, une affiche, une vidéo. Le contrôle : les trois vérifications, et un bilan. »

**Scène 5 — B3 Notion · 0:51–1:07 · B**
- Visuel : carte critères, quatre lignes cochées une à une.
- Écran : « Cohérent · Vrai · Permis · À moi »
- VO : « Quatre critères comptent. Cohérent : un produit, un message. Vrai : chaque promesse est exacte. Permis : les droits sont réglés. À moi : c'est votre voix, et vous validez. »

**Scène 6 — B3 Notion · 1:07–1:21 · C**
- Visuel : un petit tableau de bilan : jour, contenu, messages reçus, note ; une loupe puis une flèche « garder / changer ».
- Écran : « Mesurer : messages, commandes, ce qui a marché »
- VO : « Enfin, mesurer simplement. Après sept jours, comptez les messages reçus et les commandes. Notez ce qui a le mieux marché. Gardez cela, changez le reste. »

**Scène 7 — B4 Application · 1:21–1:32 · A**
- Visuel : capture réelle du tableur : fiche produit et calendrier de sept jours ; cadre sur la colonne « Famille ».
- Écran : « Bloc 1 : le plan »
- VO : « Voici la campagne de Hadiza. D'abord le plan : sa fiche produit, avec des faits vrais, et son calendrier de sept jours. »

**Scène 8 — B4 Application · 1:32–1:44 · A**
- Visuel : capture réelle du texte en français et en haoussa avec le sens ; mention « relu par Rahila » encadrée ; puis la comparaison avant/après de la photo.
- Écran : « Bloc 2 : texte relu, affiche fidèle »
- VO : « Les contenus. Son texte de vente, en français et en haoussa, relu par Rahila. Son affiche, avec la comparaison avant et après. »

**Scène 9 — B4 Application · 1:44–1:58 · A**
- Visuel : capture réelle de la vidéo verticale de la leçon 4, sous-titres visibles ; cadre sur le sac filmé.
- Écran : « Bloc 2 : la vidéo, le sac filmé pour de vrai »
- VO : « Sa vidéo verticale, sous-titrée, avec le clip d'ambiance au début. Le sac, lui, est filmé pour de vrai. Aucun visage n'apparaît : les mains suffisent. »

**Scène 10 — B4 Application · 1:58–2:06 · A**
- Visuel : capture réelle de la fiche des trois vérifications : Vrai, Permis, À moi, cochées ; mention « second regard : Souleymane » encadrée.
- Écran : « Bloc 3 : Vrai · Permis · À moi, cochés »
- VO : « Le contrôle : la fiche des trois vérifications, cochée. Souleymane l'a relue, en second regard. »

**Scène 11 — B4 Application · 2:06–2:19 · A**
- Visuel : capture réelle du bilan à sept jours : une ligne par jour ; cadre sur la colonne « Note ».
- Écran : « Le bilan : ce qui a marché, ce qu'on change »
- VO : « Et le bilan, après sept jours. Pour chaque jour : le contenu publié, les messages reçus, une note. Hadiza voit ce qui a marché. »

**Scène 12 — B5 Consolidation · 2:19–2:34 · B**
- Visuel : carte question : une affiche où un sac paraît plus grand que son ombre réelle.
- Écran : « Textes vrais, mais un sac plus grand sur l'affiche : honnête ? »
- VO : « À vous. Les textes d'une campagne sont vrais. Mais l'affiche montre un sac plus grand que le vrai. La campagne est-elle honnête ? » [silence 3 s]

**Scène 13 — B5 Consolidation · 2:34–2:43 · B**
- Visuel : carte réponse : « Non » ; la pastille « Vrai » s'allume sur chaque contenu : texte, affiche, vidéo.
- Écran : « Un seul élément trompeur suffit »
- VO : « Non. Un seul élément trompeur suffit. Vrai s'applique à chaque texte, chaque image, chaque vidéo. »

**Scène 14 — B6 Clôture · 2:43–2:58 · E**
- Visuel : illustration : Hadiza, le septième soir, devant le tableau de bilan ; Souleymane, à côté, lui montre une ligne.
- Écran : « Maradi · le septième jour »
- VO : « Après sept jours, Hadiza compte ses messages et ses commandes. Elle garde ce qui a marché, et change le reste. Souleymane, lui, note la méthode pour ses propres clients. »

**Scène 15 — B6 Clôture · 2:58–3:12 · B (carte de rappel)**
- Visuel : carte de rappel, quatre points révélés au rythme de la voix, un par leçon.
- Écran : « Vous saurez livrer une campagne d'une semaine, honnête et mesurée » « 1. Un calendrier du mois, dates vérifiées » « 2. Texte de vente : quatre temps, haoussa relu » « 3. Photo et affiche fidèles au produit » « 4. Vidéo verticale, sous-titres relus »
- VO : « Quatre leçons, quatre réflexes. Un calendrier aux dates vérifiées. Un texte relu, en haoussa aussi. Des images fidèles au produit. Une vidéo aux sous-titres relus. »

**Scène 16 — B6 Clôture · 3:12–3:23 · B**
- Visuel : carte de suite : pastille « Créer visuels et vidéos avec l'IA » ; puis carte de dépôt.
- Écran : « Pour aller plus loin : Créer visuels et vidéos avec l'IA »
- VO : « Pour aller plus loin : le cours filmé « Créer visuels et vidéos avec l'IA ». Déposez votre campagne d'une semaine. »

#### Captures à fournir par l'owner

1. **Plan : fiche produit et calendrier (scène 7)** · tableur. Fiche produit : *Sac cabas en tissu pagne · doublure en coton, une poche intérieure · trois motifs · cousu à Maradi par une coopérative · commande par WhatsApp ou retrait en boutique à Maradi*. Calendrier, colonnes Jour · Famille · Contenu : *1 · Produit · Affiche du sac* ; *2 · Coulisses · Les mains des couturières au travail* ; *3 · Preuve · Gros plan sur les coutures* ; *4 · Conseil · Entretenir un sac en tissu* ; *5 · Produit · Vidéo verticale du sac* ; *6 · Offre · Choisissez votre motif, sur commande* ; *7 · Bilan · Merci et récapitulatif de la semaine*. Capture fixe.
2. **Contenus (scènes 8 et 9)** · réutiliser les productions des leçons 2, 3 et 4 : texte français et haoussa avec le sens en français et la mention « relu par Rahila » ; comparaison avant/après de la photo (deux images enregistrées en leçon 3) ; la vidéo verticale sous-titrée (leçon 4), extrait de 8 s. Aucun visage.
3. **Contrôle : fiche des trois vérifications (scène 10)** · document d'une page, trois lignes : *Vrai : promesses comparées à la fiche produit ; couleur et motif de la photo comparés à l'original ; aucune promesse ajoutée par l'assistant* · *Permis : éléments Canva gratuits ; aucune personne identifiable ; clip généré sans produit* · *À moi : textes réécrits à ma façon ; haoussa relu par Rahila ; second regard : Souleymane*. Capture fixe.
4. **Bilan à sept jours (scène 11)** · tableur : colonnes Jour · Contenu publié · Messages reçus · Note ; sept lignes fictives, messages en mots (« peu », « plusieurs », « beaucoup »), notes du type *« L'affiche a plu »*, *« La vidéo : à raccourcir »*. Aucun chiffre réel, aucun nom de client. Capture fixe.

#### Notes de script

- Leçon finale : B3 présente livrables et critères ; B4 montre un dossier réussi ; B6 récapitule une leçon par point (4 points), renvoie au cours 5 puis donne la consigne de dépôt.
- Le renvoi au cours 5 se fait par son titre : « Créer visuels et vidéos avec l'IA », sans numéro à l'écran.
- Mesure : aucun chiffre, aucune statistique ; les « messages » et « commandes » sont ceux de l'apprenant, comptés à la main.
- Les modalités de dépôt et la grille de notation réelles seront confirmées à l'intégration dans le site : ne pas annoncer de délai ni de note [à vérifier au moment de la production].
- Notes d'adaptation : EN — « Vrai · Permis · À moi » → « True · Allowed · Mine ». HA / DJE — garder les trois mots comme des repères mémorisables : le traducteur choisit trois mots courts de même forme ; garder « Canva », « Gemini » tels quels.

## 2.6 Captures et éléments à préparer

| Leçon | Élément | Comment l'obtenir | Qui |
|---|---|---|---|
| 1 | Accueil de Gemini (téléphone) | Enregistrement d'écran, environ 5 s ; masquer compte et historique | owner |
| 1 | Gemini : consigne, tableau, remplacement d'une idée, dates à vérifier | Environ 70 s utiles ; texte exact dans la fiche (Captures, leçon 1) | owner |
| 1 | Google Sheets : le calendrier du mois | Copier le tableau, coller, capture fixe ; export direct si le bouton existe [à vérifier] | owner |
| 2 | Application de notes : les faits vrais du sac | Saisir le texte de la fiche (Captures, leçon 2) ; capture fixe | owner |
| 2 | Gemini : deux essais (sans et avec la règle) + version haoussa et sens en français | Environ 90 s utiles ; réponses réelles, pas de montage truqué | owner |
| 2 | WhatsApp : relecture du haoussa par une personne de confiance | Capture avec réponse corrigeant un mot ; masquer nom, photo, numéro | owner |
| 3 | Photo d'origine d'un produit réel (sombre, fond encombré) | Téléphone, sans visage ni marque ; capture fixe | owner |
| 3 | Gemini : retouche d'image + enregistrement des deux images | Environ 75 s utiles ; consigne de la fiche ; images originale et retouchée sauvegardées | owner |
| 3 | Canva : affiche à partir de la photo retouchée | Environ 60 s utiles ; éléments gratuits seulement ; téléchargement | owner |
| 4 | Trois plans verticaux du produit (tissu, mains, sac porté) | Téléphone debout, environ 5 s chacun ; capture des vignettes | owner |
| 4 | Gemini : clip d'ambiance généré (si disponible) | Environ 40 s utiles ; sinon, un plan filmé de plus [à vérifier] | owner |
| 4 | Montage sur téléphone : import, coupes, accroche, sous-titres, export | Environ 90 s utiles ; CapCut ou éditeur du téléphone [libellés à vérifier] | owner |
| 5 | Dossier de Hadiza : plan, contenus, fiche des trois vérifications, bilan | Quatre documents fictifs, textes exacts dans la fiche (Captures, leçon 5) | owner |
| 1–5 | Illustrations de personas (Hadiza, Souleymane, couturières, Rahila hors champ) | Aplats, formes simples, sans visage photoréaliste | Claude |
| 1–5 | Schémas : calendrier du mois, consigne → IA → contrôle, avant/après, trois vérifications | Animations HyperFrames selon la direction artistique | Claude |
| 1–5 | Vérification des libellés et conditions des outils (Gemini, Canva, génération vidéo, application de montage) | Contrôle sur les écrans réels avant tournage ; mentions « à vérifier » levées | owner |
