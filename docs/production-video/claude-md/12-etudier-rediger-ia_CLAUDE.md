# CLAUDE.md — Karatou Academy · Production vidéo
# Cours 12 — Étudier et rédiger avec l'IA

> **Pour l'owner — mode d'emploi**
> 1. Créez un dossier vide sur votre ordinateur, par exemple `karatou-etudier-rediger-ia`.
> 2. Copiez-y ce fichier et renommez-le exactement `CLAUDE.md`.
> 3. Ouvrez Claude Code dans ce dossier (dans un terminal : `cd karatou-etudier-rediger-ia` puis `claude`).
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
livraison/etudier-rediger-ia/<id>/      fichiers livrés · livraison/etudier-rediger-ia/INTEGRATION.md
```

`<id>` est l'identifiant de la leçon (`et1`, `et2`…). Langues : `fr`, `en`, `ha`, `dje`.

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

### 9.2 Nommage et contenu de `livraison/etudier-rediger-ia/<id>/`

`etudier-rediger-ia_<id>_<langue>_v<n>.mp4` · `…-360.mp4` · `….srt` · `….vtt` · `…_cover.jpg` (1920 × 1080, qualité 85,
première image stable de B1) · `…_transcript.md` (un titre par temps, texte dit + actions à l'écran entre
crochets) · `RECETTE.md`.

### 9.3 Mise en ligne

Chaîne YouTube **Karatou Academy**, vidéos **non répertoriées**, une vidéo par langue, sous-titres `.srt` ajoutés
comme piste. Titre : « Karatou Academy — Étudier et rédiger avec l'IA — Leçon N : <titre> (<LANGUE>) ». Le site lit des **URL
d'intégration** : `https://www.youtube.com/embed/<ID>` (jamais `watch?v=` ni `youtu.be/`). Teste chaque URL dans un
navigateur avant de la consigner.

### 9.4 Intégration au site — `livraison/etudier-rediger-ia/INTEGRATION.md`

Le site lit, pour chaque leçon, un champ `video: { fr, en, ha }` dans les fichiers TypeScript du dépôt
`karatou-academy-app` (registre `authoredLessons`). Chaque leçon y a aussi un texte (objectif, quatre sections,
exemple, exercice, quiz de cinq questions, réflexion, glossaire), rédigé par l'équipe avec le skill
`karatou-course-creator`, et des lignes Supabase (module, leçons) pour la progression et les certificats.

Ton rôle : tenir `INTEGRATION.md` à jour, leçon par leçon : module `etudier-rediger-ia`, id, titre, promesse (objectif), cas
réel (exemple), exercice (titre et étapes), carte de rappel, quiz, marques citées, URL FR / EN / HA, et URL DJE
« en attente ». Ce fichier est remis à l'équipe technique ; tu ne modifies pas le dépôt du site.

### 9.5 Corrections après publication

Une URL publiée est figée. Pour corriger : nouvelle version `v2` → mise en ligne → nouvelle URL testée →
`INTEGRATION.md` mis à jour → l'équipe technique remplace l'URL → l'ancienne vidéo est rendue privée, jamais
supprimée. Consigne chaque version dans le journal de `PROGRESS.md`.

## 10. `PROGRESS.md` — modèle

```markdown
# PROGRESS — Cours 12 · Étudier et rédiger avec l'IA
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
| Numéro | 12 |
| Titre | Étudier et rédiger avec l'IA |
| Format | Motion graphics + captures d'écran, voix off (voix clonée de l'owner) |
| Owner / voix | à désigner — nom complet et titre exact demandés au premier lancement |
| Rubrique | Employabilité |
| Public | Étudiants d'université, de BTS et de grandes écoles, futurs candidats à une bourse. Au Niger et en Afrique de l'Ouest, sur téléphone, souvent en 3G, avec des outils gratuits. |
| Slug du module (provisoire) | `etudier-rediger-ia` |
| Préfixe des leçons | `et` |
| Nombre de vidéos | 5 (dont la dernière = projet final certifiant) |
| Durée par vidéo | 3–5 min (cible 4:00) |
| Langues | FR (référence) · EN · HA · DJE |
| Prérequis | Savoir utiliser un assistant conversationnel sur téléphone. Un compte Google (Gemini Notebook, Google Scholar, Google Docs) et un compte ChatGPT gratuit. Aucun module préalable. |
| Promesse du cours | Vous apprendrez à comprendre, réviser, chercher et rédiger avec l'IA, sans tricher, et à le prouver. |
| Positionnement | Un cours d'apprentissage et d'intégrité, pas un raccourci pour « faire faire » ses devoirs. Aucune promesse de note ni de réussite. Ne répète pas le cours 5 (image professionnelle, candidatures) ni la leçon c6 du module `intelligence-artificielle` (éthique) : il y renvoie. Pour aller plus loin : `introduction-claude-ai` (cl5, vérification). |
| Fil rouge | Ibrahim, BTS 2ᵉ année en comptabilité-gestion à Maradi (leçons 1 et 2), et Mariama, Master 2 de sociologie à Niamey, qui vise une bourse de doctorat (leçons 3 à 5). Hadiza, camarade d'Ibrahim, et Moussa, camarade de Mariama, servent aux contre-exemples. Cas fictifs. |
| Marques citées | ChatGPT (OpenAI), OpenAI, Gemini, Gemini Notebook (anciennement NotebookLM), Google Scholar, Google Docs (Google), Compilatio, Turnitin |

**Outils montrés et point d'actualité (vérifié en octobre 2026).** NotebookLM a été renommé **Gemini Notebook** par Google le 16 juillet 2026 : même produit, mêmes carnets, application Android et iOS renommée sans réinstallation. La vidéo dit « Gemini Notebook, l'outil qu'on appelait NotebookLM » à la première mention de chaque leçon où il apparaît. Ne pas confondre avec la rubrique « Notebooks » de l'application Gemini, qui est un autre espace. Le mode tuteur montré est « Étudier et apprendre » de ChatGPT (gratuit, web, Android, iOS) ; l'équivalent chez Google s'appelle « Apprentissage guidé » dans Gemini.

## 2.2 Ce que l'apprenant saura faire

- Utiliser un assistant en mode tuteur pour comprendre une notion, puis l'expliquer seul, sans écran.
- Transformer ses propres cours en kit de révision dans Gemini Notebook (fiches, quiz, résumé audio) et vérifier chaque réponse grâce aux citations.
- Vérifier qu'une référence existe et dit bien ce qu'on lui attribue, puis la citer dans le texte et en bibliographie selon la norme exigée.
- Rédiger soi-même un texte universitaire en se servant de l'IA comme relecteur, sans plagiat.
- Tenir un journal d'usage de l'IA et rédiger une déclaration d'usage conforme aux règles de son établissement.
- Assembler un dossier qui prouve sa démarche, et le défendre à l'oral.

## 2.3 Plan du cours

| Leçon | Id | Titre | Promesse (objectif) | Cas réel (B1) | Démo (B4) | Durée cible |
|---|---|---|---|---|---|---|
| 1 | `et1` | Apprendre avec l'IA sans tricher | Faire de l'IA votre tuteur, sans lui confier votre travail | Ibrahim (BTS, Maradi) bloque sur l'amortissement et pense faire faire son devoir maison | ChatGPT, mode « Étudier et apprendre » : l'assistant questionne, Ibrahim se trompe, reçoit un indice, puis explique avec ses mots | 4:00 |
| 2 | `et2` | Réviser avec Gemini Notebook | Transformer vos propres cours en fiches, quiz et résumé audio vérifiables | Ibrahim doit réviser six chapitres avec une connexion faible | Gemini Notebook sur téléphone : carnet, dépôt du chapitre, question avec citations, quiz, résumé audio | 4:00 |
| 3 | `et3` | Trouver, vérifier et citer ses sources | Vérifier qu'une source existe et la citer correctement | Mariama (Master 2, Niamey) découvre qu'une référence donnée par un assistant n'existe pas | ChatGPT pour les mots-clés, puis Google Scholar : chercher, lire le résumé, « Citer », comparer, citer dans le texte | 4:00 |
| 4 | `et4` | Rédiger son mémoire avec l'IA, honnêtement | Utiliser l'IA pour améliorer votre texte, sans plagiat, et le déclarer | Mariama veut faire réécrire tout son premier chapitre | ChatGPT en relecteur : trois remarques sans réécriture, correction par Mariama, journal d'usage | 4:00 |
| 5 | `et5` | Projet final : votre dossier d'étude responsable | Constituer votre dossier d'étude responsable et le déposer pour la certification | Mariama rassemble les preuves de sa démarche | Le dossier de Mariama, pièce par pièce, puis sa relecture critère par critère | 4:00 |

## 2.4 Direction artistique du cours

- **Motif récurrent : le cahier à intercalaires.** Un cahier d'étudiant à spirale, vu de face, avec cinq onglets : « Comprendre », « Réviser », « Sourcer », « Rédiger », « Dossier ». L'onglet de la leçon est ouvert sur les cartes de titre d'unité ; les autres restent visibles et grisés. Les cartes typographiques (B) sont posées sur une page du cahier.
- **Personas.** Formes simples en aplats, sans photoréalisme et sans imiter une personne réelle. Ibrahim : jeune homme, sac à dos, téléphone Android, salle de BTS ou cour d'école à Maradi. Mariama : jeune femme voilée, ordinateur portable, bibliothèque universitaire à Niamey. Mêmes silhouettes, mêmes couleurs de vêtements d'une leçon à l'autre. Hadiza et Moussa n'apparaissent qu'en silhouette secondaire.
- **Trois schémas types réutilisés (C).**
  1. « La ligne » : deux colonnes, « Vous aider » (coche) / « Faire à votre place » (croix), séparées par un trait vertical. Leçons 1, 4, 5.
  2. « La chaîne de vérification » : Source → « Existe-t-elle ? » → « Dit-elle ça ? » → « Citée ». Chaque étape validée par une coche dessinée. Leçons 3 et 5.
  3. « Le journal d'usage » : tableau à quatre colonnes (date, outil, demande, ce que j'ai gardé). Leçons 4 et 5.
- **Iconographie.** Pictogrammes au trait : livre, loupe, guillemets, coche, croix, casque audio, cadenas. Toute validation ou erreur portée par une forme (coche, croix, cadre), jamais par la couleur seule.
- **Captures (A).** Téléphone Android en interface française pour ChatGPT et Gemini Notebook ; navigateur sur ordinateur pour Google Docs. Encadrement identique d'une leçon à l'autre. Noms de compte, sélecteur de modèle, bandeaux d'offre et de limite masqués.
- **Ce qui reste fixe** : le cahier, les deux personas principaux, les trois schémas, la place de la carte de rappel. **Ce qui change** : l'onglet ouvert, le persona de la leçon, l'outil capturé.
- **Son.** Aucune musique sous la voix. Un court habillage sonore possible sur les cartes uniquement.

## 2.5 Les leçons

### Leçon 1 — Apprendre avec l'IA sans tricher (`et1`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez faire de l'IA votre tuteur, sans lui confier votre travail. »
- **Cas réel (B1 → B6)** : Ibrahim, 2ᵉ année de BTS comptabilité-gestion à Maradi, ne comprend pas l'amortissement. Son devoir maison est à rendre lundi ; l'examen écrit, sans téléphone, a lieu dans trois semaines. Tentation : coller le devoir dans un assistant et recopier. Enjeu : comprendre assez pour refaire seul. Fermeture en B6 (champ `example`) : trois semaines plus tard, en salle d'examen, Ibrahim calcule un amortissement seul, sur papier.
- **Unités de notion (B3)** : 1. Un tuteur, pas un prête-plume — l'IA explique, interroge et corrige ; elle ne produit pas ce qui sera noté, et la règle du cours fixe la frontière. · 2. Des questions avant les réponses — le mode « Étudier et apprendre » (ChatGPT) ou « Apprentissage guidé » (Gemini), ou à défaut une consigne qui impose une question à la fois. · 3. Vos mots pour finir — expliquer la notion sans écran prouve qu'on l'a comprise ; l'assistant repère ce qui manque.
- **Démo (B4)** : ChatGPT sur téléphone Android, compte gratuit. 1. Ouvrir une nouvelle conversation. 2. Activer « Étudier et apprendre » depuis le menu des outils de la zone de saisie. 3. Coller la consigne avec « BTS 2ᵉ année, comptabilité-gestion » et « l'amortissement linéaire ». 4. L'assistant part d'un exemple et pose une première question. 5. Ibrahim répond faux une fois ; l'assistant donne un indice, pas la solution ; Ibrahim corrige. 6. Ibrahim explique la notion avec ses mots ; l'assistant signale ce qui manque ; Ibrahim complète. Résultat attendu à l'écran : une conversation où l'assistant questionne et vérifie, sans jamais faire le devoir.
- **Consolidation (B5)** : prédiction. « Ibrahim colle son devoir et écrit : “Fais-le, je recopie.” Aide ou triche ? » — 3 s de silence — « Triche : le travail noté ne serait plus le sien, et à l'examen il ne saurait pas le refaire. Version honnête : “Montre-moi la méthode sur un autre exemple.” »
- **Consigne à copier** :

```text
Je suis étudiant en [niveau et filière]. Je ne comprends pas [la notion].
Sois mon tuteur. Ne me donne pas la réponse directement.
Pose-moi une seule question à la fois, puis attends ma réponse.
Pars d'un exemple simple de la vie courante au Niger.
Quand je me trompe, donne-moi un indice, pas la solution.
À la fin, demande-moi d'expliquer la notion avec mes mots, puis dis-moi ce qui manque.
```

- **Exercice** : « Faites-vous interroger sur une notion difficile » — 1. Choisissez une notion de votre programme que vous maîtrisez mal. 2. Activez le mode tuteur de votre assistant ou collez la consigne, puis répondez à au moins cinq questions. 3. Fermez l'écran et écrivez votre explication en dix lignes ; faites-la relire par l'assistant. 4. Vérifiez la règle d'usage de l'IA de ce cours (plan de cours ou enseignant) et notez-la.
- **Carte de rappel** : 1. Tuteur, pas prête-plume 2. Des questions avant les réponses 3. Vos mots pour finir
- **Quiz** :
  1. Laquelle de ces utilisations de l'IA reste de l'aide ? — A) Faire rédiger son devoir maison B) Se faire expliquer une notion par des questions C) Recopier une réponse pendant un examen en ligne D) Faire traduire le devoir d'un camarade et le rendre — **Réponse : B**
  2. Que fait le mode « Étudier et apprendre » de ChatGPT ? — A) Il donne la réponse plus vite B) Il détecte le plagiat C) Il rédige le devoir à votre place D) Il guide par des questions et vérifie votre compréhension — **Réponse : D**
  3. Après une séance avec le tuteur, quelle est la meilleure preuve que vous avez compris ? — A) Vous expliquez la notion avec vos mots, sans écran B) L'assistant vous a félicité C) Vous avez relu toute la conversation D) Vous avez copié le résumé final — **Réponse : A**
  4. Votre enseignant interdit l'IA pour un devoir. Que faites-vous ? — A) Vous utilisez un autre assistant B) Vous reformulez la réponse de l'IA C) Vous respectez la règle et posez vos questions à l'enseignant en cas de doute D) Vous l'utilisez seulement pour la conclusion — **Réponse : C**
  5. Ibrahim veut de l'aide pour son devoir maison. Quelle demande reste honnête ? — A) « Fais l'exercice, je recopie. » B) « Montre-moi la méthode sur un autre exemple. » C) « Donne-moi juste les résultats. » D) « Réécris mon devoir proprement. » — **Réponse : B**
- **Marques citées** : ChatGPT (OpenAI), Gemini (Google)

#### Script v1 (à valider par l'owner)

Durée estimée : 3:52 · Mots de voix off : 393

**Scène 1 — B1 Accroche · 0:00–0:07 · E**
- Visuel : illustration en aplats, cour d'un établissement de BTS à Maradi en fin d'après-midi. Ibrahim, assis sur un muret, cahier ouvert, fronce les sourcils. Le cahier à intercalaires du cours apparaît en bas à droite, onglet « Comprendre ».
- Écran : « Ibrahim · BTS comptabilité-gestion · Maradi »
- VO : « Maradi. Ibrahim est en deuxième année de BTS, en comptabilité-gestion. L'amortissement le bloque. »

**Scène 2 — B1 Accroche · 0:07–0:18 · B**
- Visuel : carte de promesse posée sur une page du cahier ; le texte s'écrit ligne par ligne.
- Écran : « Faire de l'IA votre tuteur, sans lui confier votre travail »
- VO : « À la fin de cette leçon, vous saurez faire de l'IA votre tuteur, sans lui confier votre travail. »

**Scène 3 — B2 Cadrage · 0:18–0:36 · C**
- Visuel : schéma « La ligne ». À gauche, « Vous aider » avec une coche ; à droite, « Faire à votre place » avec une croix. Le devoir d'Ibrahim glisse vers la colonne de droite, puis s'arrête sur le trait.
- Écran : « Vous aider ≠ faire à votre place »
- VO : « Son devoir maison est à rendre lundi. Il pourrait le coller dans un assistant et recopier la réponse. Beaucoup pensent qu'utiliser l'IA, c'est tricher. C'est faux. Tricher, c'est présenter comme sien un travail qu'on n'a pas fait. »

**Scène 4 — B2 Cadrage · 0:36–0:46 · A**
- Visuel : capture `et1-01` — ChatGPT sur téléphone, menu des outils ouvert. Cadre autour de « Étudier et apprendre ».
- Écran : « Étudier et apprendre »
- VO : « Se faire expliquer une notion, c'est autre chose. C'est le travail d'un bon répétiteur. Un assistant peut jouer ce rôle. »

**Scène 5 — B3 Notion · 0:46–1:04 · B**
- Visuel : onglet « Comprendre » du cahier ; carte d'unité 1. Deux pictogrammes : une plume barrée (croix), un pupitre avec un point d'interrogation (coche).
- Écran : « 1 · Tuteur, pas prête-plume »
- VO : « Première règle : un tuteur, pas un prête-plume. L'IA peut vous expliquer, vous interroger, vous corriger. Elle ne produit pas ce qui sera noté à votre place. Un prête-plume écrit pour vous ; un tuteur vous fait travailler. »

**Scène 6 — B3 Notion · 1:04–1:16 · C**
- Visuel : petit flux en trois cases. « Règle du cours ? » → « Claire : appliquez » (coche) / « Doute : demandez avant » (point d'interrogation dans un cadre).
- Écran : « La règle du cours décide · En cas de doute : demandez avant »
- VO : « La frontière exacte, c'est votre enseignant qui la fixe. Lisez la règle du cours. En cas de doute, demandez avant, pas après. »

**Scène 7 — B3 Notion · 1:16–1:36 · A**
- Visuel : capture `et1-02` — le mode « Étudier et apprendre » activé dans la zone de saisie. Cadre sur l'étiquette du mode. Encart typographique en bas : « Dans Gemini : Apprentissage guidé ».
- Écran : « 2 · Des questions avant les réponses »
- VO : « Deuxième règle : demandez des questions, pas des réponses. Dans ChatGPT, le mode “ Étudier et apprendre ” fait cela. Dans Gemini, c'est l'“ Apprentissage guidé ”. L'assistant avance pas à pas et vérifie ce que vous comprenez. »

**Scène 8 — B3 Notion · 1:36–1:50 · G**
- Visuel : carte de consigne, fond clair, consigne complète en texte. Les lignes « une seule question à la fois » et « un indice, pas la solution » sont soulignées l'une après l'autre.
- Écran : la consigne à copier de la fiche, en entier.
- VO : « Votre assistant n'a pas ce mode ? Cette consigne fait le même travail. Elle impose une question à la fois, et des indices plutôt que des solutions. »

**Scène 9 — B3 Notion · 1:50–2:06 · C**
- Visuel : boucle animée en quatre étapes : « Question » → « Votre réponse » → « Indice » → « Votre explication ». La dernière étape grossit et porte une bulle « vos mots ».
- Écran : « 3 · Vos mots pour finir »
- VO : « Troisième règle : terminez en expliquant avec vos mots. C'est vous qui parlez ; l'assistant écoute et repère ce qui manque. Si vous savez l'expliquer sans écran, vous avez compris. »

**Scène 10 — B4 Application · 2:06–2:20 · A**
- Visuel : capture `et1-03` — la consigne d'Ibrahim collée dans la zone de saisie, mode activé, avant envoi. Cadre sur « l'amortissement linéaire ».
- Écran : « Ibrahim · la consigne, avec sa notion »
- VO : « Ibrahim ouvre le mode “ Étudier et apprendre ”. Il colle la consigne et précise sa notion : l'amortissement linéaire. »

**Scène 11 — B4 Application · 2:20–2:32 · A**
- Visuel : capture `et1-04` — première réponse de l'assistant. Défilement lent ; cadre sur la phrase qui se termine par un point d'interrogation.
- Écran : « Pas de cours récité : une question »
- VO : « L'assistant ne récite pas le cours. Il part d'un exemple de la vie courante. Puis il pose une question, et attend. »

**Scène 12 — B4 Application · 2:32–2:46 · A**
- Visuel : capture `et1-05` — la réponse fausse d'Ibrahim (croix dessinée à côté), puis l'indice de l'assistant (cadre), puis la bonne réponse (coche).
- Écran : « Une erreur → un indice → la correction »
- VO : « Ibrahim répond, et se trompe. L'assistant ne donne pas la solution : il donne un indice. Ibrahim refait le calcul lui-même. »

**Scène 13 — B4 Application · 2:46–3:00 · A**
- Visuel : capture `et1-06` — l'explication d'Ibrahim, puis la réponse de l'assistant qui signale l'élément manquant (cadre sur ce passage).
- Écran : « Ibrahim explique · l'assistant pointe ce qui manque »
- VO : « Pour finir, Ibrahim explique l'amortissement avec ses mots. L'assistant lui signale ce qui manque. Ibrahim complète son explication. »

**Scène 14 — B5 Consolidation · 3:00–3:28 · B**
- Visuel : carte question. La phrase d'Ibrahim apparaît dans une bulle ; deux boutons dessinés « Aide » / « Triche ». Silence de 3 s, puis une croix sur « Aide » et un cadre sur « Triche ». La version honnête s'inscrit en dessous.
- Écran : « “Fais-le, je recopie.” Aide ou triche ? »
- VO : « Une question pour vous. Ibrahim colle son devoir et écrit : “ Fais-le, je recopie. ” Aide ou triche ? » [silence 3 s] « Triche. Le travail noté ne serait plus le sien. Et à l'examen, sans téléphone, il ne saurait pas le refaire. La version honnête : “ Montre-moi la méthode sur un autre exemple. ” »

**Scène 15 — B6 Clôture · 3:28–3:38 · B (rappel de la promesse)**
- Visuel : silhouette d'Ibrahim en salle d'examen, copie et calculatrice, sans téléphone. Puis la promesse revient, mot pour mot, sur la page du cahier.
- Écran : « Faire de l'IA votre tuteur, sans lui confier votre travail »
- VO : « Trois semaines plus tard, en salle d'examen, Ibrahim calcule un amortissement. Seul, sur papier. »

**Scène 16 — B6 Clôture · 3:38–3:52 · B (carte de rappel)**
- Visuel : carte de rappel, points révélés au rythme de la voix ; tenue ≥ 4 s après le dernier point.
- Écran : « 1. Tuteur, pas prête-plume » « 2. Des questions avant les réponses » « 3. Vos mots pour finir »
- VO : « Retenez trois choses. Un tuteur, pas un prête-plume. Des questions avant les réponses. Vos mots pour finir. Faites-vous interroger sur une notion difficile. »

#### Captures à fournir par l'owner

Compte ChatGPT gratuit dédié au tournage, sans historique, interface en français, téléphone Android, mode sombre désactivé. À masquer sur toutes les captures : nom et photo du compte, sélecteur de modèle, bandeaux d'offre payante ou de limite d'usage.

- **`et1-01` (scène 4)** — Ouvrir ChatGPT, toucher « Nouvelle conversation », puis le bouton des outils de la zone de saisie (« + » ou « Outils »). Laisser le menu ouvert avec « Étudier et apprendre » visible. Durée utile : 5 s. [à vérifier au moment de la production : emplacement exact du mode dans le menu]
- **`et1-02` (scène 7)** — Toucher « Étudier et apprendre ». Filmer la zone de saisie vide avec l'étiquette du mode activé. Durée utile : 5 s.
- **`et1-03` (scène 10)** — Coller ce texte exact, sans l'envoyer, puis faire défiler pour qu'il soit lisible en entier : « Je suis étudiant en BTS 2e année, comptabilité-gestion. Je ne comprends pas l'amortissement linéaire. Sois mon tuteur. Ne me donne pas la réponse directement. Pose-moi une seule question à la fois, puis attends ma réponse. Pars d'un exemple simple de la vie courante au Niger. Quand je me trompe, donne-moi un indice, pas la solution. À la fin, demande-moi d'expliquer la notion avec mes mots, puis dis-moi ce qui manque. » Durée utile : 8 s.
- **`et1-04` (scène 11)** — Envoyer. Enregistrer l'écran pendant l'arrivée de la réponse, puis défiler lentement jusqu'à la première question. Durée utile : 10 s.
- **`et1-05` (scène 12)** — Jouer Ibrahim. Répondre une première fois de façon fausse mais plausible (par exemple, donner la valeur totale du bien quand l'assistant demande la part d'une seule année). Laisser apparaître l'indice, puis répondre correctement. Durée utile : 14 s.
- **`et1-06` (scène 13)** — Quand l'assistant le demande (sinon, écrire « Je t'explique avec mes mots »), taper une explication volontairement incomplète, sans parler de la durée d'utilisation : « L'amortissement, c'est quand on répartit le prix d'achat d'un bien sur plusieurs années. » Filmer la réponse qui signale le manque, puis taper le complément. Durée utile : 14 s.

Les réponses de l'assistant varient d'une prise à l'autre : garder une prise où l'assistant pose bien une question en premier. Si l'assistant donne la solution d'emblée, recommencer dans une nouvelle conversation ; ne jamais retoucher une capture pour simuler un comportement.

#### Notes de script

- **Prononciation** : ChatGPT « tchate-dji-pi-ti » ; Gemini « jé-mi-ni » (fixer une prononciation au premier lancement et la garder dans tout le cours) ; BTS « bé-té-esse ».
- **Termes à gloser** : « prête-plume » est glosé dans la VO (« écrit pour vous ») ; ne jamais employer le terme injurieux qu'il remplace. « Répétiteur » est familier au Niger : le garder. « Amortissement » n'a pas à être expliqué dans la VO ; si l'owner le souhaite, encart en scène 1 : « Amortissement : répartir le coût d'un bien sur sa durée d'utilisation ».
- **Pièges** : la VO des scènes 11 à 13 reste générale parce que l'exemple choisi par l'assistant change à chaque prise ; ne pas ajouter de chiffre dans la VO. Aucun vrai devoir, aucun nom d'élève ou d'enseignant à l'écran. Ne pas promettre de note : la fermeture du cas montre une compétence, pas un résultat.
- **Libellés d'interface** : « Étudier et apprendre » (ChatGPT) et « Apprentissage guidé » (Gemini) sont les libellés français vérifiés en octobre 2026 ; les menus de Gemini ont changé plusieurs fois en 2026. [à vérifier au moment de la production]
- **Adaptation EN** : le mode s'appelle « Study and learn » / « study mode » dans l'interface anglaise ; « Apprentissage guidé » = « Guided Learning ». « Prête-plume » = « ghostwriter » ; « répétiteur » = « private tutor » ; préciser « BTS, a two-year vocational diploma ».
- **Adaptation HA / DJE** : les captures restent en français ; dire le libellé en français puis l'expliquer. « Prête-plume » n'a pas d'équivalent courant : dire « quelqu'un qui écrit à votre place ». Garder « BTS » et « amortissement » en français, avec une courte explication orale.

### Leçon 2 — Réviser avec Gemini Notebook (`et2`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez transformer vos cours en fiches, quiz et résumé audio vérifiables. »
- **Cas réel (B1 → B6)** : Ibrahim (acquis de la leçon 1 : il a compris l'amortissement avec un tuteur) doit réviser six chapitres en deux semaines. Il a ses polycopiés en PDF et ses notes ; le soir, à Maradi, la connexion est faible. Tentation : un résumé qui remplacerait tout. Enjeu : savoir précisément ce qu'il maîtrise. Fermeture en B6 (champ `example`) : le jour de l'examen, il a fait chaque quiz deux fois ; il ne connaît pas sa note, mais il sait ce qu'il maîtrise.
- **Unités de notion (B3)** : 1. Vos sources, rien d'autre — Gemini Notebook (anciennement NotebookLM) répond en s'appuyant sur les documents que vous déposez. · 2. Touchez la citation — chaque réponse porte des numéros qui ouvrent le passage exact ; en cas d'écart, le cours fait foi. · 3. Testez-vous : quiz, fiches — le panneau Studio fabrique fiches, quiz et résumé audio ; se tester est actif, relire est passif.
- **Démo (B4)** : application Gemini Notebook sur téléphone Android, compte Google de tournage. 1. Créer un carnet nommé « BTS comptabilité ». 2. Ajouter une source : le PDF de démonstration « Les amortissements ». 3. Coller la consigne avec « la dotation annuelle d'amortissement linéaire », « cinq » lignes, « BTS 2ᵉ année », « trois » questions. 4. Toucher la citation 1 : le passage du cours s'affiche. 5. Studio → Quiz → générer ; répondre, se tromper une fois, lire l'explication. 6. Studio → Résumé audio, langue français → générer → lecteur prêt. Résultat attendu à l'écran : un carnet avec sa source, une réponse citée, un quiz, un résumé audio.
- **Consolidation (B5)** : prédiction. « Hadiza n'a déposé que le chapitre un. Elle demande un résumé du chapitre quatre. Que se passe-t-il ? » — 3 s de silence — « L'outil ne trouve rien dans ses sources : il le signale, ou il reste vague. Pas de source déposée, pas de révision fiable. »
- **Consigne à copier** :

```text
À partir de mes sources uniquement, explique [la notion] en [cinq] lignes, pour un étudiant de [niveau].
Pour chaque idée, cite le passage du cours.
Puis pose-moi [trois] questions pour vérifier que j'ai compris, sans donner les réponses.
```

- **Exercice** : « Construisez votre kit de révision » — 1. Créez un carnet pour une matière et déposez vos cours et vos notes (aucun document qui contient des données personnelles d'autres personnes). 2. Posez trois questions avec la consigne et vérifiez chaque citation. 3. Générez un quiz et des fiches ; refaites-les deux jours plus tard. 4. Notez les questions ratées : c'est votre liste de travail.
- **Carte de rappel** : 1. Vos sources, rien d'autre 2. Touchez la citation 3. Testez-vous : quiz, fiches
- **Quiz** :
  1. Sur quoi Gemini Notebook s'appuie-t-il pour vous répondre ? — A) Sur tout Internet B) Sur les documents que vous avez déposés C) Sur les cours des autres étudiants D) Sur les sujets d'examen officiels — **Réponse : B**
  2. Comment vérifier une réponse de Gemini Notebook ? — A) Poser la même question deux fois B) Lui faire confiance si la réponse est longue C) Toucher le numéro de citation et lire le passage du cours D) Comparer avec un autre assistant — **Réponse : C**
  3. Pourquoi le quiz et les fiches aident-ils plus que la seule relecture ? — A) Ils obligent à retrouver la réponse soi-même B) Ils sont plus courts que le cours C) Ils remplacent le cours D) Ils annoncent la note de l'examen — **Réponse : A**
  4. Hadiza n'a déposé que le chapitre un et demande un résumé du chapitre quatre. Que se passe-t-il ? — A) L'outil résume parfaitement le chapitre quatre B) L'outil télécharge le cours de l'université C) L'outil complète avec ses propres connaissances, sans le dire D) L'outil le signale ou reste vague, faute de source — **Réponse : D**
  5. Lequel de ces documents ne faut-il pas déposer dans votre carnet ? — A) Votre polycopié de cours B) Vos notes manuscrites photographiées C) La liste des notes de la classe, avec les noms D) Le plan du chapitre — **Réponse : C**
- **Marques citées** : Gemini Notebook, NotebookLM (Google)

#### Script v1 (à valider par l'owner)

Durée estimée : 3:47 · Mots de voix off : 390

**Scène 1 — B1 Accroche · 0:00–0:08 · E**
- Visuel : illustration en aplats, chambre d'Ibrahim à Maradi, le soir. Pile de polycopiés, téléphone avec une seule barre de réseau. Le cahier du cours est ouvert sur l'onglet « Réviser ».
- Écran : « Ibrahim · 6 chapitres à réviser »
- VO : « Ibrahim a compris l'amortissement avec son tuteur. Il lui reste six chapitres à réviser. »

**Scène 2 — B1 Accroche · 0:08–0:19 · B**
- Visuel : carte de promesse sur une page du cahier.
- Écran : « Transformer vos cours en fiches, quiz et résumé audio vérifiables »
- VO : « À la fin de cette leçon, vous saurez transformer vos cours en fiches, quiz et résumé audio vérifiables. »

**Scène 3 — B2 Cadrage · 0:19–0:35 · C**
- Visuel : à gauche, une feuille « Résumé » ; à droite, une tête stylisée avec un point d'interrogation. Un signe « ≠ » s'inscrit entre les deux. Puis une ligne du résumé se barre d'une croix.
- Écran : « Un résumé ne dit pas ce que vous savez »
- VO : « Le soir, la connexion est faible. Ibrahim rêve d'un résumé qui remplacerait tout. Mauvaise idée. Un résumé ne dit pas ce que vous savez. Et il peut se tromper sans prévenir. »

**Scène 4 — B2 Cadrage · 0:35–0:47 · A**
- Visuel : capture `et2-01` — écran d'accueil de l'application Gemini Notebook. Cadre sur le nom de l'application. Encart : « anciennement NotebookLM ».
- Écran : « Gemini Notebook (ex-NotebookLM) »
- VO : « Ce qu'il faut : réviser à partir de son cours, et se tester. L'outil pour ça : Gemini Notebook, qu'on appelait NotebookLM. »

**Scène 5 — B3 Notion · 0:47–1:03 · B**
- Visuel : onglet « Réviser » ; carte d'unité 1. Trois documents (PDF, notes, polycopié) glissent dans un carnet.
- Écran : « 1 · Vos sources, rien d'autre »
- VO : « Première idée : Gemini Notebook travaille sur vos sources. Vous y déposez vos cours, vos notes, vos polycopiés. Ses réponses s'appuient sur ces documents. Une source, ici, c'est un document que vous lui donnez. »

**Scène 6 — B3 Notion · 1:03–1:21 · A**
- Visuel : capture `et2-02` — une réponse avec des numéros de citation. Cadre sur le numéro 1, puis sur le passage du cours qui s'affiche au toucher.
- Écran : « 2 · Touchez la citation »
- VO : « Deuxième idée : chaque réponse porte des numéros de citation. Touchez-en un : le passage exact du cours s'affiche. Vous vérifiez aussitôt. Si le passage ne dit pas la même chose, c'est le cours qui a raison. »

**Scène 7 — B3 Notion · 1:21–1:39 · A**
- Visuel : capture `et2-03` — le panneau Studio. Cadres successifs sur « Fiches », « Quiz », « Résumé audio ».
- Écran : « 3 · Fiches · Quiz · Résumé audio »
- VO : « Troisième idée : le panneau Studio fabrique vos outils de révision. Des fiches : une question d'un côté, la réponse de l'autre. Un quiz à choix multiples. Et un résumé audio, en français, à écouter. »

**Scène 8 — B3 Notion · 1:39–1:53 · C**
- Visuel : balance animée. Plateau « Relire » avec un œil (passif) ; plateau « Se tester » avec une main qui écrit (actif). Le second plateau l'emporte.
- Écran : « Relire : passif · Se tester : actif »
- VO : « Relire donne l'impression de savoir. Se tester oblige à retrouver la réponse. Le résumé audio prépare ; le quiz et les fiches entraînent. »

**Scène 9 — B3 Notion · 1:53–2:05 · G**
- Visuel : carte de consigne, fond clair, consigne complète. Soulignés successifs : « uniquement », « cite le passage », « sans donner les réponses ».
- Écran : la consigne à copier de la fiche, en entier.
- VO : « Pour interroger votre cours, utilisez cette consigne. Elle demande une explication courte, avec citations. Puis trois questions pour vous tester. »

**Scène 10 — B4 Application · 2:05–2:17 · A**
- Visuel : capture `et2-04` — création du carnet « BTS comptabilité », ajout du PDF, la source apparaît dans la liste. Cadre sur le nom du fichier.
- Écran : « Carnet “BTS comptabilité” · source : le chapitre en PDF »
- VO : « Ibrahim crée un carnet, un “ notebook ” : “ BTS comptabilité ”. Il y dépose le chapitre sur les amortissements, en PDF. »

**Scène 11 — B4 Application · 2:17–2:31 · A**
- Visuel : capture `et2-05` — la consigne collée et envoyée, la réponse avec ses citations ; toucher de la citation 1, passage affiché. Encart : « dotation annuelle : la part du coût comptée chaque année ».
- Écran : « Réponse citée → passage du cours »
- VO : « Il colle la consigne : expliquer la dotation annuelle, en cinq lignes. La réponse arrive avec ses citations. Il touche la première : le passage du cours s'affiche. »

**Scène 12 — B4 Application · 2:31–2:45 · A**
- Visuel : capture `et2-06` — Studio → Quiz → génération → une question ; réponse fausse (croix dessinée), explication affichée (cadre).
- Écran : « Quiz : une erreur, une explication »
- VO : « Dans Studio, il lance un quiz. Il se trompe à une question. L'explication le renvoie à son cours. »

**Scène 13 — B4 Application · 2:45–2:57 · A**
- Visuel : capture `et2-07` — Studio → Résumé audio, langue « français », génération en cours, puis lecteur prêt. Cadre sur le bouton de lecture.
- Écran : « Résumé audio, en français »
- VO : « Enfin, il génère un résumé audio, en français. Il l'écoutera demain, sur le trajet. »

**Scène 14 — B5 Consolidation · 2:57–3:23 · B**
- Visuel : carte question. Le carnet de Hadiza ne contient qu'un document « Chapitre 1 » ; une bulle demande « Résume le chapitre 4 ». Silence de 3 s, puis un carnet vide de chapitre 4 et une croix.
- Écran : « Source : chapitre 1 · Question : chapitre 4 ? »
- VO : « Une question. Hadiza, sa camarade, n'a déposé que le chapitre un. Elle demande un résumé du chapitre quatre. Que va-t-il se passer ? » [silence 3 s] « L'outil ne trouve rien dans ses sources. Il le signale, ou il reste vague. Pas de source déposée, pas de révision fiable. »

**Scène 15 — B6 Clôture · 3:23–3:35 · B (rappel de la promesse)**
- Visuel : silhouette d'Ibrahim devant la salle d'examen, téléphone rangé. Puis la promesse revient, mot pour mot.
- Écran : « Transformer vos cours en fiches, quiz et résumé audio vérifiables »
- VO : « Le jour de l'examen, Ibrahim a fait chaque quiz deux fois. Il ne connaît pas encore sa note. Mais il sait ce qu'il maîtrise. »

**Scène 16 — B6 Clôture · 3:35–3:47 · B (carte de rappel)**
- Visuel : carte de rappel, points révélés au rythme de la voix ; tenue ≥ 4 s après le dernier point.
- Écran : « 1. Vos sources, rien d'autre » « 2. Touchez la citation » « 3. Testez-vous : quiz, fiches »
- VO : « Retenez : vos sources, rien d'autre. Touchez la citation. Testez-vous, avec le quiz et les fiches. Construisez votre kit de révision. »

#### Captures à fournir par l'owner

Application Gemini Notebook sur téléphone Android, interface en français, compte Google de tournage sans autre carnet. Source unique : le PDF de démonstration « Les amortissements » préparé pour le cours (voir 2.6). À masquer : adresse e-mail et photo du compte, bandeaux d'offre ou de limite.

- **`et2-01` (scène 4)** — Ouvrir l'application. Filmer l'écran d'accueil avec le nom de l'application et le bouton de création. Durée utile : 4 s. [à vérifier au moment de la production : nom affiché ; si l'interface montre encore « NotebookLM », garder la VO telle quelle]
- **`et2-02` (scène 6)** — Dans le carnet de la démo, poser d'abord cette question : « Qu'est-ce que la valeur nette comptable ? » Toucher le numéro de citation 1 et laisser le passage affiché. Durée utile : 8 s.
- **`et2-03` (scène 7)** — Ouvrir le panneau ou l'onglet Studio et faire défiler lentement la liste des formats. Durée utile : 6 s.
- **`et2-04` (scène 10)** — Depuis l'accueil : créer un carnet, le nommer « BTS comptabilité », toucher l'ajout de source, choisir le fichier « amortissements-chapitre.pdf ». Attendre que la source apparaisse. Durée utile : 12 s.
- **`et2-05` (scène 11)** — Coller ce texte exact et l'envoyer : « À partir de mes sources uniquement, explique la dotation annuelle d'amortissement linéaire en cinq lignes, pour un étudiant de BTS 2e année. Pour chaque idée, cite le passage du cours. Puis pose-moi trois questions pour vérifier que j'ai compris, sans donner les réponses. » Laisser la réponse s'afficher, puis toucher la citation 1. Durée utile : 14 s.
- **`et2-06` (scène 12)** — Studio → Quiz. Si un réglage de langue est proposé, choisir « français ». Générer, ouvrir le quiz, répondre faux à une question, laisser l'explication affichée. Durée utile : 14 s.
- **`et2-07` (scène 13)** — Studio → Résumé audio, langue « français ». Lancer la génération (elle prend plusieurs minutes) : filmer l'état « en cours », puis revenir filmer le lecteur prêt. Ne pas filmer de durée ni de compteur d'usage. Durée utile : 10 s.

#### Notes de script

- **Prononciation** : « Gemini Notebook » « jé-mi-ni note-bouk » ; « NotebookLM » « note-bouk-èl-ème » ; « Studio » à la française.
- **Point d'actualité** : NotebookLM s'appelle Gemini Notebook depuis le 16 juillet 2026 (annonce de Google). Mêmes fonctions, mêmes carnets ; l'adresse web serait désormais notebook.google.com, l'ancienne redirigeant. Ne pas confondre avec la rubrique « Notebooks » de l'application Gemini. [à vérifier au moment de la production : adresse et libellés exacts « Résumé audio », « Fiches », « Quiz »]
- **Termes à gloser** : « carnet » pour « notebook » (dit une fois, puis remplacé) ; « source » glosé en scène 5. Attention : ici, « numéro de citation » désigne un renvoi vers un passage du document ; à la leçon 3, « citer » prendra son sens universitaire. Ne pas mélanger les deux à l'écran.
- **Pièges** : ne promettre ni écoute hors connexion ni langue haoussa ou zarma pour le résumé audio : non vérifiés. Ne citer aucune limite d'usage. Le résumé audio peut contenir des erreurs : il prépare, il ne fait pas foi. La VO de la scène 12 suppose que l'explication du quiz renvoie au cours. [à vérifier au moment de la production]
- **Document de démonstration** : le PDF « Les amortissements » est un document fictif, relu par un enseignant de comptabilité (voir 2.6). Aucun logo ni nom d'établissement réel.
- **Adaptation EN** : « Résumé audio » = « Audio Overview » ; « Fiches » = « Flashcards » ; « carnet » = « notebook » ; « polycopié » = « course handout ».
- **Adaptation HA / DJE** : dire « Studio », « Quiz » et les libellés tels qu'ils apparaissent à l'écran, puis les expliquer. La scène 14 (Hadiza) se traduit sans difficulté ; garder « chapitre un / chapitre quatre » très appuyés.

### Leçon 3 — Trouver, vérifier et citer ses sources (`et3`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez vérifier qu'une source existe, et la citer correctement. »
- **Cas réel (B1 → B6)** : Mariama, Master 2 de sociologie à Niamey, prépare un mémoire sur le paiement mobile chez les commerçantes de Niamey ; elle vise une bourse de doctorat. Un assistant lui a fourni une référence parfaite (auteur, titre, revue, année) : elle est introuvable. Son directeur exige une bibliographie à la norme APA. Enjeu : une référence inventée dans un mémoire ruine la crédibilité du travail. Fermeture en B6 (champ `example`) : sa bibliographie ne contient plus que des sources vérifiées ; la référence inventée a disparu. Rappel de la leçon 2 en B1 : Ibrahim révise à partir de ses propres sources.
- **Unités de notion (B3)** : 1. L'IA propose, la source prouve — l'assistant sert aux mots-clés, synonymes et pistes ; toute référence qu'il donne peut être une hallucination. · 2. Existe-t-elle ? Dit-elle ça ? — chercher le titre exact dans Google Scholar ou le catalogue de la bibliothèque, puis lire au moins le résumé. · 3. Citez selon la norme — un renvoi court dans le texte, la référence complète en bibliographie, dans la norme fixée par le département ; le bouton « Citer » de Google Scholar est un point de départ à contrôler.
- **Démo (B4)** : 1. ChatGPT (conversation normale) : coller la consigne avec « Master 2 », « sociologie », « le paiement mobile chez les commerçantes de Niamey » ; obtenir les mots-clés en français et en anglais. 2. Google Scholar dans le navigateur du téléphone : lancer une combinaison de mots-clés, choisir un article réellement lié au sujet. 3. Ouvrir la page de l'article et lire le résumé. 4. Toucher « Citer », copier la version APA, la coller dans la bibliographie (Google Docs), comparer auteurs, année, titre et revue avec la page de l'article, ajouter le renvoi dans le texte. Résultat attendu à l'écran : une source réelle, vérifiée, citée à deux endroits.
- **Consolidation (B5)** : prédiction, exemple fictif affiché comme tel. « Un assistant cite “Diallo, 2019”. Google Scholar trouve le même titre, signé d'autres auteurs, en 2021. Que faites-vous ? » — 3 s de silence — « Vous suivez la source, pas l'assistant : vrais auteurs, vraie année, et lecture avant de citer. »
- **Consigne à copier** :

```text
Je prépare un mémoire de [niveau] en [discipline] sur [sujet].
Propose-moi des mots-clés en français et en anglais pour chercher des travaux universitaires, avec leurs synonymes.
Suggère trois combinaisons de recherche pour Google Scholar.
Ne m'invente aucune référence. Si tu cites un auteur ou un titre, signale que je dois le vérifier.
```

- **Exercice** : « Vérifiez et citez trois sources » — 1. Obtenez vos mots-clés avec la consigne. 2. Trouvez trois sources dans Google Scholar ou le catalogue de votre bibliothèque. 3. Pour chacune, notez par écrit : où vous avez vérifié qu'elle existe (lien) et la phrase du résumé qui montre qu'elle dit ce que vous voulez lui faire dire. 4. Citez-les dans la norme de votre département : renvoi dans le texte et référence complète en bibliographie.
- **Carte de rappel** : 1. L'IA propose, la source prouve 2. Existe-t-elle ? Dit-elle ça ? 3. Citez selon la norme
- **Quiz** :
  1. Qu'appelle-t-on une « hallucination » d'un assistant ? — A) Une réponse fausse, donnée avec assurance B) Une panne de l'application C) Un message d'erreur D) Une réponse trop courte — **Réponse : A**
  2. À quoi sert l'assistant dans votre recherche de sources ? — A) À fournir la bibliographie finale B) À remplacer la lecture des articles C) À proposer des mots-clés et des pistes D) À choisir la norme de citation — **Réponse : C**
  3. Quelles sont les deux questions à poser pour chaque source ? — A) Est-elle récente ? Est-elle longue ? B) Existe-t-elle ? Dit-elle ce qu'on lui fait dire ? C) Est-elle en anglais ? Est-elle gratuite ? D) L'assistant la connaît-il ? Est-elle souvent citée ? — **Réponse : B**
  4. Quelle norme de citation utiliser dans votre mémoire ? — A) Toujours APA B) Celle que propose l'assistant C) N'importe laquelle, pourvu qu'elle soit belle D) Celle qu'exige votre département — **Réponse : D**
  5. Un assistant cite « Diallo, 2019 », mais Google Scholar montre le même titre avec d'autres auteurs, en 2021. Que faites-vous ? — A) Vous gardez la version de l'assistant B) Vous mélangez les deux versions C) Vous citez les vrais auteurs et la vraie année, après lecture D) Vous supprimez l'année — **Réponse : C**
- **Marques citées** : ChatGPT (OpenAI), Google Scholar, Google Docs (Google)

#### Script v1 (à valider par l'owner)

Durée estimée : 3:49 · Mots de voix off : 393

**Scène 1 — B1 Accroche · 0:00–0:08 · E**
- Visuel : illustration en aplats, bibliothèque universitaire à Niamey. Mariama devant son ordinateur, piles de livres. Le cahier du cours passe à l'onglet « Sourcer ».
- Écran : « Mariama · Master 2 de sociologie · Niamey »
- VO : « Ibrahim révise à partir de ses sources. Mariama, en master à Niamey, cherche les siennes. »

**Scène 2 — B1 Accroche · 0:08–0:18 · B**
- Visuel : carte de promesse sur une page du cahier.
- Écran : « Vérifier qu'une source existe, et la citer correctement »
- VO : « À la fin de cette leçon, vous saurez vérifier qu'une source existe, et la citer correctement. »

**Scène 3 — B2 Cadrage · 0:18–0:36 · C**
- Visuel : une fiche de référence dessinée (auteur, titre, revue, année), mention « Exemple fictif ». Une loupe la parcourt ; un tampon « Introuvable » s'appose avec une croix.
- Écran : « Hallucination : une réponse fausse, donnée avec assurance »
- VO : « Pour son mémoire, un assistant lui a donné une référence parfaite. Auteur, titre, revue, année. Elle la cherche partout. Elle n'existe pas. C'est une hallucination : une réponse fausse, donnée avec assurance. »

**Scène 4 — B2 Cadrage · 0:36–0:47 · A**
- Visuel : capture `et3-01` — page d'accueil de Google Scholar dans le navigateur du téléphone. Cadre sur le champ de recherche.
- Écran : « Google Scholar : un moteur de travaux universitaires »
- VO : « Un assistant fabrique du texte plausible, références comprises. Vos sources se cherchent ailleurs : dans un moteur de travaux universitaires, comme Google Scholar. »

**Scène 5 — B3 Notion · 0:47–1:03 · B**
- Visuel : onglet « Sourcer » ; carte d'unité 1. Pictogrammes : une ampoule (pistes) côté IA, un livre ouvert (preuve) côté source.
- Écran : « 1 · L'IA propose, la source prouve »
- VO : « Première règle : l'IA propose, la source prouve. Demandez à l'assistant des mots-clés, en français et en anglais. Des synonymes. Des pistes de recherche. Pas des références toutes faites. »

**Scène 6 — B3 Notion · 1:03–1:15 · G**
- Visuel : carte de consigne, fond clair, consigne complète. La dernière ligne est soulignée.
- Écran : la consigne à copier de la fiche, en entier.
- VO : « Cette consigne le fait. Sa dernière ligne interdit d'inventer des références. Cela ne suffit pas toujours : vous vérifierez quand même. »

**Scène 7 — B3 Notion · 1:15–1:33 · C**
- Visuel : schéma « La chaîne de vérification » : Source → « Existe-t-elle ? » (loupe) → « Dit-elle ça ? » (livre ouvert) → « Citée ». Chaque étape reçoit une coche dessinée.
- Écran : « 2 · Existe-t-elle ? Dit-elle ça ? »
- VO : « Deuxième règle : deux questions pour chaque source. Existe-t-elle ? Cherchez le titre exact dans Google Scholar ou au catalogue de votre bibliothèque. Dit-elle ce qu'on lui fait dire ? Lisez au moins son résumé. »

**Scène 8 — B3 Notion · 1:33–1:52 · C**
- Visuel : deux pages reliées par une flèche. Page « Texte » : « (Auteur, année) ». Page « Bibliographie » : la référence complète, champs encadrés un à un.
- Écran : « 3 · Citez selon la norme »
- VO : « Troisième règle : citer, c'est écrire à deux endroits. Dans le texte, un renvoi court : souvent l'auteur et l'année, entre parenthèses. En fin de mémoire : la référence complète. La norme, APA ou une autre, c'est votre département qui la fixe. »

**Scène 9 — B3 Notion · 1:52–2:05 · A**
- Visuel : capture `et3-02` — fenêtre « Citer » de Google Scholar. Cadre sur la ligne APA.
- Écran : « “Citer” : un point de départ, à contrôler »
- VO : « Dans Google Scholar, le bouton “ Citer ” propose la référence déjà mise en forme. C'est un point de départ. Comparez toujours avec la page de l'article. »

**Scène 10 — B4 Application · 2:05–2:17 · A**
- Visuel : capture `et3-03` — la consigne de Mariama dans ChatGPT, puis la liste de mots-clés. Cadre sur deux mots-clés anglais.
- Écran : « Mots-clés : français et anglais »
- VO : « Mariama colle la consigne avec son sujet : le paiement mobile chez les commerçantes de Niamey. Elle obtient ses mots-clés. »

**Scène 11 — B4 Application · 2:17–2:29 · A**
- Visuel : capture `et3-04` — recherche dans Google Scholar, liste de résultats. Cadre sur le titre retenu.
- Écran : « Recherche → un article qui correspond »
- VO : « Elle les tape dans Google Scholar : “ mobile money ”, “ commerçantes ”, “ Niger ”. Elle choisit un article qui correspond à son sujet. »

**Scène 12 — B4 Application · 2:29–2:43 · A**
- Visuel : capture `et3-05` — la page de l'article, défilement jusqu'au résumé. Cadre sur la phrase du résumé qui touche son sujet, puis coche.
- Écran : « Existe ✓ · Dit ça ✓ »
- VO : « Elle ouvre la page de l'article et lit le résumé. Il traite bien de son sujet. Première source vérifiée. »

**Scène 13 — B4 Application · 2:43–2:59 · A**
- Visuel : capture `et3-06` — « Citer » → APA copiée → collée dans le document « Bibliographie ». Cadres successifs sur auteurs, année, titre, revue, comparés à la page de l'article. Puis le renvoi ajouté dans un paragraphe.
- Écran : « Bibliographie + renvoi dans le texte »
- VO : « Elle touche “ Citer ”, copie la version APA, et la colle dans sa bibliographie. Elle compare : auteurs, année, titre, revue. Dans son texte, elle ajoute le renvoi. »

**Scène 14 — B5 Consolidation · 2:59–3:25 · B**
- Visuel : carte question, mention « Exemple fictif ». Deux fiches côte à côte : « Assistant : Diallo, 2019 » / « Google Scholar : autres auteurs, 2021 ». Silence de 3 s, puis croix sur la fiche de l'assistant, cadre sur celle de la source.
- Écran : « Assistant : Diallo, 2019 · Source : autres auteurs, 2021 »
- VO : « À vous. Un assistant cite “ Diallo, deux mille dix-neuf ”. Google Scholar trouve le même titre, mais signé par d'autres auteurs, en deux mille vingt et un. Que faites-vous ? » [silence 3 s] « Vous suivez la source, pas l'assistant. Vrais auteurs, vraie année. Et vous lisez l'article avant de le citer. »

**Scène 15 — B6 Clôture · 3:25–3:35 · B (rappel de la promesse)**
- Visuel : la bibliographie de Mariama, chaque ligne cochée ; la fiche « Introuvable » sort du cadre. Puis la promesse revient, mot pour mot.
- Écran : « Vérifier qu'une source existe, et la citer correctement »
- VO : « Sa bibliographie ne contient plus que des sources vérifiées. La référence inventée a disparu. »

**Scène 16 — B6 Clôture · 3:35–3:49 · B (carte de rappel)**
- Visuel : carte de rappel, points révélés au rythme de la voix ; tenue ≥ 4 s après le dernier point.
- Écran : « 1. L'IA propose, la source prouve » « 2. Existe-t-elle ? Dit-elle ça ? » « 3. Citez selon la norme »
- VO : « Retenez : l'IA propose, la source prouve. Existe-t-elle ? Dit-elle ça ? Et citez selon la norme de votre département. Vérifiez et citez trois sources. »

#### Captures à fournir par l'owner

Téléphone Android, Chrome en français, barre d'adresse recadrée hors champ. Compte ChatGPT de tournage ; document Google Docs « Bibliographie – mémoire » créé à l'avance, vide. À masquer : comptes, sélecteur de modèle, bandeaux.

- **`et3-01` (scène 4)** — Ouvrir scholar.google.com. Filmer la page d'accueil, champ de recherche vide. Durée utile : 4 s.
- **`et3-02` (scène 9)** — Sur n'importe quel résultat, toucher « Citer » (icône des guillemets). Laisser la fenêtre des normes ouverte. Durée utile : 6 s. [à vérifier au moment de la production : liste exacte des normes proposées selon la langue de l'interface]
- **`et3-03` (scène 10)** — ChatGPT, conversation normale. Coller ce texte exact et l'envoyer : « Je prépare un mémoire de Master 2 en sociologie sur le paiement mobile chez les commerçantes de Niamey. Propose-moi des mots-clés en français et en anglais pour chercher des travaux universitaires, avec leurs synonymes. Suggère trois combinaisons de recherche pour Google Scholar. Ne m'invente aucune référence. Si tu cites un auteur ou un titre, signale que je dois le vérifier. » Filmer la réponse. Durée utile : 12 s.
- **`et3-04` (scène 11)** — Dans Google Scholar, taper « mobile money commerçantes Niger », ou la combinaison proposée par l'assistant qui donne des résultats pertinents. Filmer la liste, puis toucher un article réellement lié au sujet, de préférence en accès libre. Durée utile : 10 s.
- **`et3-05` (scène 12)** — Sur la page de l'article, défiler jusqu'au résumé et marquer une pause dessus. Durée utile : 10 s.
- **`et3-06` (scène 13)** — Revenir aux résultats, toucher « Citer », sélectionner et copier la version APA, la coller dans « Bibliographie – mémoire ». Puis, dans un paragraphe de test du même document, taper le renvoi (auteur et année entre parenthèses). Durée utile : 14 s.

Ne jamais fabriquer de capture d'une référence « introuvable » : la scène 3 est un schéma avec une référence fictive, signalée comme telle.

#### Notes de script

- **Prononciation** : Google Scholar « gou-gueul sko-lar » ; APA « a-pé-a » ; « mobile money » à l'anglaise, c'est un mot-clé de recherche.
- **Termes à gloser** : « hallucination » est gardé et glosé en scène 3 ; « renvoi » est expliqué en scène 8 ; « norme de citation » est montrée par l'exemple APA.
- **Pièges** : les résultats de Google Scholar varient. La VO reste générale (« un article qui correspond ») et ne nomme aucun auteur réel. Choisir un article qui traite vraiment du sujet : c'est la démonstration elle-même. « Diallo, 2019 » est fictif et doit porter la mention « Exemple fictif » à l'écran. Ne donner aucun chiffre sur la fréquence des références inventées. Pour information de l'owner, non dite : le phénomène est documenté, par exemple par Walters et Wilder dans *Scientific Reports* (2023).
- **Exactitude** : le renvoi « (auteur, année) » correspond aux normes auteur-date comme APA ; d'autres normes utilisent des renvois numérotés, d'où « souvent » dans la VO. Les références produites par « Citer » peuvent contenir des erreurs (majuscules, DOI manquant) : la VO dit « point de départ ».
- **Pour aller plus loin (texte de la leçon, pas la vidéo)** : Zotero, gratuit, existe sur ordinateur et sur Android depuis 2025 pour gérer ses références.
- **Adaptation EN** : « mémoire » = « master's thesis » ; « renvoi » = « in-text citation » ; « Exemple fictif » = « Fictional example ». Garder les mots-clés de recherche tels quels.
- **Adaptation HA / DJE** : garder « hallucination » en français et l'expliquer (« une réponse fausse dite avec assurance »). Les années de la scène 14 restent affichées en chiffres ; à l'oral, les dire lentement.

### Leçon 4 — Rédiger son mémoire avec l'IA, honnêtement (`et4`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez améliorer votre texte avec l'IA, sans plagiat, et le déclarer. »
- **Cas réel (B1 → B6)** : Mariama (acquis de la leçon 3 : ses sources sont vérifiées et citées) rédige le premier chapitre de son mémoire. Son brouillon est lourd ; elle est tentée de tout faire réécrire par l'IA. Son université fait passer les mémoires au logiciel anti-plagiat, et son directeur lui a demandé comment elle utilise l'IA. Enjeu : rester l'auteure de son texte, et pouvoir le prouver devant un jury de bourse. Fermeture en B6 (champ `example`) : elle remet son chapitre avec sa déclaration ; son directeur l'interroge sur un paragraphe ; elle l'explique sans hésiter.
- **Unités de notion (B3)** : 1. Vous écrivez, l'IA relit — critique du plan, phrases floues, affirmations sans source ; chaque phrase reste la vôtre. · 2. Le plagiat a plusieurs visages — copier sans guillemets ni référence, paraphraser de trop près, rendre un texte généré sans le dire ; les logiciels anti-plagiat comparent votre texte à d'autres textes. · 3. Tracez, puis déclarez — brouillons datés, historique des versions, journal d'usage ; déclaration selon la règle de l'établissement, ou après accord du directeur.
- **Démo (B4)** : Google Docs et ChatGPT, sur ordinateur. 1. Le paragraphe de démonstration de Mariama dans Google Docs (codes d'enquêtées, aucun nom). 2. Copie du paragraphe dans ChatGPT, sous la consigne. 3. Trois remarques, chacune avec son passage et une question, sans réécriture. 4. Retour dans Google Docs : Mariama ajoute la source manquante et coupe la phrase trop longue, elle-même. 5. Nouvelle ligne dans son journal d'usage. Résultat attendu à l'écran : un paragraphe corrigé par son auteure et une ligne de journal qui servira à la déclaration.
- **Consolidation (B5)** : prédiction. « Un détecteur affiche : “texte probablement écrit par une IA”. Vous l'avez écrit vous-même. Comment le prouver ? » — 3 s de silence — « Avec vos traces : brouillons datés, historique des versions, journal d'usage. Les détecteurs peuvent se tromper : OpenAI a retiré le sien en 2023, faute de fiabilité. »
- **Consigne à copier** :

```text
Voici un paragraphe de mon mémoire de [niveau] en [discipline]. Je l'ai écrit moi-même.
Relis-le comme un directeur de mémoire exigeant. Ne le réécris pas.
Donne-moi trois remarques précises : clarté de l'idée principale, logique entre les phrases, affirmations qui demandent une source.
Pour chaque remarque, cite le passage concerné et pose-moi une question pour m'aider à corriger.
Paragraphe : [collez votre paragraphe, sans aucun nom de personne enquêtée]
```

- **Exercice** : « Rédigez une page et déclarez votre usage » — 1. Écrivez vous-même une page de votre mémoire ou d'un devoir. 2. Demandez trois remarques avec la consigne, puis corrigez vous-même. 3. Tenez votre journal d'usage : date, outil, demande, ce que vous avez gardé. 4. Rédigez votre déclaration selon la règle de votre établissement ; à défaut, et avec l'accord de votre directeur, partez de ce modèle : « J'ai utilisé [outil] pour [usages]. Je ne l'ai pas utilisé pour [usages exclus]. J'ai vérifié toutes les sources citées. Le texte final est de moi et j'en assume la responsabilité. »
- **Carte de rappel** : 1. Vous écrivez, l'IA relit 2. Reformuler sans citer = plagiat 3. Tracez, puis déclarez
- **Quiz** :
  1. Dans cette leçon, quel rôle donnez-vous à l'IA pendant la rédaction ? — A) Rédactrice des parties difficiles B) Traductrice de textes trouvés en ligne C) Relectrice qui pose des questions, sans réécrire D) Auteure de la conclusion — **Réponse : C**
  2. Vous reformulez avec vos mots l'idée d'un auteur, sans le citer. Est-ce du plagiat ? — A) Non, puisque les mots sont différents B) Oui : l'idée vient d'un autre, il faut le citer C) Non, si c'est l'IA qui a reformulé D) Seulement si la phrase est longue — **Réponse : B**
  3. Quelles traces prouvent que vous avez écrit votre texte ? — A) Brouillons datés, historique des versions, journal d'usage B) Le seul fichier final C) Une capture du résultat d'un détecteur D) Le rapport anti-plagiat d'un camarade — **Réponse : A**
  4. Votre établissement n'a pas de règle écrite sur l'IA. Que faites-vous ? — A) Vous n'en parlez pas B) Vous utilisez l'IA sans limite C) Vous évitez tout outil numérique D) Vous demandez à votre directeur et joignez une courte déclaration — **Réponse : D**
  5. Un détecteur annonce que votre texte, écrit par vous, est « probablement écrit par une IA ». Que faites-vous ? — A) Vous réécrivez tout avec l'IA B) Vous montrez vos traces : brouillons, historique, journal C) Vous abandonnez le chapitre D) Vous supprimez votre historique — **Réponse : B**
- **Marques citées** : ChatGPT (OpenAI), OpenAI, Google Docs (Google), Compilatio, Turnitin

#### Script v1 (à valider par l'owner)

Durée estimée : 3:56 · Mots de voix off : 377

**Scène 1 — B1 Accroche · 0:00–0:08 · E**
- Visuel : illustration en aplats, Mariama à sa table de travail, ordinateur ouvert sur une page dense. Le cahier du cours passe à l'onglet « Rédiger ».
- Écran : « Mariama · chapitre 1 du mémoire »
- VO : « Mariama a vérifié et cité ses sources. Maintenant, elle rédige son premier chapitre. »

**Scène 2 — B1 Accroche · 0:08–0:18 · B**
- Visuel : carte de promesse sur une page du cahier.
- Écran : « Améliorer votre texte avec l'IA, sans plagiat, et le déclarer »
- VO : « À la fin de cette leçon, vous saurez améliorer votre texte avec l'IA, sans plagiat, et le déclarer. »

**Scène 3 — B2 Cadrage · 0:18–0:40 · C**
- Visuel : schéma « La ligne ». Côté « Vous aider » : un stylo et une loupe (coche). Côté « Faire à votre place » : un texte d'autrui reformulé, puis un texte généré, chacun barré d'une croix.
- Écran : « Reformuler sans citer = plagiat »
- VO : « Son brouillon est lourd. Elle se dit : “Je fais tout réécrire par l'IA. Reformulé, ce n'est plus du plagiat.” C'est faux. Reformuler l'idée d'un autre sans le citer, c'est du plagiat. Rendre un texte écrit par l'IA comme le sien, c'est tromper son lecteur. »

**Scène 4 — B2 Cadrage · 0:40–0:50 · A**
- Visuel : capture `et4-01` — le paragraphe de démonstration dans Google Docs. Cadre sur la phrase la plus longue.
- Écran : « Le brouillon de Mariama »
- VO : « Le règlement de son université peut sanctionner les deux. Alors, comment s'aider sans franchir la ligne ? »

**Scène 5 — B3 Notion · 0:50–1:06 · B**
- Visuel : onglet « Rédiger » ; carte d'unité 1. Un stylo (la main de Mariama) et une loupe (l'IA) au-dessus d'une page.
- Écran : « 1 · Vous écrivez, l'IA relit »
- VO : « Première règle : vous écrivez, l'IA relit. Elle peut critiquer votre plan. Signaler une phrase floue. Repérer une affirmation sans source. Mais chaque phrase reste la vôtre. »

**Scène 6 — B3 Notion · 1:06–1:20 · G**
- Visuel : carte de consigne, fond clair, consigne complète. Soulignés successifs : « Ne le réécris pas », « trois remarques », « pose-moi une question ».
- Écran : la consigne à copier de la fiche, en entier.
- VO : « Cette consigne en fait un relecteur exigeant. Elle demande trois remarques, avec une question chacune. Et surtout : pas de réécriture. »

**Scène 7 — B3 Notion · 1:20–1:40 · C**
- Visuel : trois visages du plagiat, en trois cases qui s'allument une à une : guillemets absents, texte calqué, texte généré non déclaré. Puis une loupe « logiciel anti-plagiat » passe sur une page et relie des passages à d'autres documents.
- Écran : « 2 · Reformuler sans citer = plagiat »
- VO : « Deuxième règle : le plagiat a plusieurs visages. Copier sans guillemets ni référence. Paraphraser de trop près. Rendre un texte généré sans le dire. Des logiciels anti-plagiat, comme Compilatio ou Turnitin, comparent votre texte à d'autres textes. »

**Scène 8 — B3 Notion · 1:40–1:58 · A**
- Visuel : capture `et4-02` — panneau « Historique des versions » de Google Docs, versions datées. Cadre sur deux dates.
- Écran : « 3 · Tracez, puis déclarez »
- VO : « Troisième règle : tracez, puis déclarez. Gardez vos brouillons datés : l'historique des versions de votre document les garde pour vous. Tenez aussi un journal d'usage : date, outil, demande, ce que vous avez gardé. »

**Scène 9 — B3 Notion · 1:58–2:10 · A**
- Visuel : capture `et4-03` — le journal d'usage, tableau à quatre colonnes avec deux lignes déjà remplies.
- Écran : « Journal : date · outil · demande · ce que j'ai gardé »
- VO : « Ensuite, déclarez votre usage, selon la règle de votre établissement. Pas de règle écrite ? Demandez à votre directeur. »

**Scène 10 — B4 Application · 2:10–2:22 · A**
- Visuel : capture `et4-04` — dans ChatGPT, la consigne suivie du paragraphe. Cadre sur les codes « E2, E5 » à la place des noms.
- Écran : « Consigne + paragraphe, sans aucun nom »
- VO : « Mariama colle la consigne et son paragraphe. Elle a retiré les noms des personnes interrogées. »

**Scène 11 — B4 Application · 2:22–2:34 · A**
- Visuel : capture `et4-05` — les trois remarques. Cadres successifs sur chaque passage cité et sur chaque question.
- Écran : « 3 remarques · 0 réécriture »
- VO : « L'assistant ne réécrit rien. Il fait trois remarques. Chacune cite son passage et pose une question. »

**Scène 12 — B4 Application · 2:34–2:50 · A**
- Visuel : capture `et4-06` — retour dans Google Docs ; Mariama tape le renvoi à sa source, puis coupe la phrase longue en deux. Coche à chaque correction.
- Écran : « Les corrections : par Mariama »
- VO : « Mariama corrige elle-même, dans son document. Elle ajoute la source qui manquait. Elle coupe une phrase trop longue. »

**Scène 13 — B4 Application · 2:50–3:04 · A**
- Visuel : capture `et4-07` — une nouvelle ligne s'ajoute au journal d'usage. Cadre sur la colonne « ce que j'ai gardé ».
- Écran : « Une ligne de journal = une preuve »
- VO : « Puis elle remplit son journal : la date, l'outil, la demande, ce qu'elle a gardé. Sa déclaration s'écrira à partir de ces lignes. »

**Scène 14 — B5 Consolidation · 3:04–3:32 · B**
- Visuel : carte question en deux temps. Temps 1 : un écran de détecteur dessiné, étiquette « probablement écrit par une IA ». Silence de 3 s. Temps 2 : trois pièces s'empilent (brouillons, historique, journal), puis la mention de la source.
- Écran : temps 1 « Détecteur : “probablement écrit par une IA” » ; temps 2 « Vos preuves : brouillons, historique, journal · Source : OpenAI, juillet 2023 »
- VO : « À vous. Un détecteur affiche : “texte probablement écrit par une IA”. Vous l'avez écrit vous-même. Comment le prouver ? » [silence 3 s] « Avec vos traces : brouillons datés, historique des versions, journal d'usage. Les détecteurs peuvent se tromper. OpenAI a retiré le sien en deux mille vingt-trois, faute de fiabilité. »

**Scène 15 — B6 Clôture · 3:32–3:42 · B (rappel de la promesse)**
- Visuel : Mariama face à son directeur, le chapitre et la déclaration posés sur le bureau. Puis la promesse revient, mot pour mot.
- Écran : « Améliorer votre texte avec l'IA, sans plagiat, et le déclarer »
- VO : « Mariama remet son chapitre avec sa déclaration. Son directeur l'interroge sur un paragraphe. Elle l'explique sans hésiter. »

**Scène 16 — B6 Clôture · 3:42–3:56 · B (carte de rappel)**
- Visuel : carte de rappel, points révélés au rythme de la voix ; tenue ≥ 4 s après le dernier point.
- Écran : « 1. Vous écrivez, l'IA relit » « 2. Reformuler sans citer = plagiat » « 3. Tracez, puis déclarez »
- VO : « Retenez : vous écrivez, l'IA relit. Reformuler sans citer, c'est du plagiat. Tracez, puis déclarez. Rédigez une page et déclarez votre usage. »

#### Captures à fournir par l'owner

Ordinateur, Chrome, zoom 125 %, barre d'adresse et onglets recadrés hors champ. Compte Google et compte ChatGPT de tournage. À masquer : comptes, sélecteur de modèle, bandeaux.

Préparation, deux ou trois jours avant : créer le document Google Docs « Mémoire – chapitre 1 (démo) » et y coller ce paragraphe fictif, puis le modifier légèrement à deux moments différents pour que l'historique montre plusieurs versions datées :

« Le paiement mobile s'est fortement développé au Niger ces dernières années. Au marché de Katako, plusieurs commerçantes interrogées disent l'utiliser pour payer leurs fournisseurs, parce que cela leur évite de transporter de l'argent liquide et parce que leurs fournisseurs de Maradi ou de Kano le demandent de plus en plus souvent, même si certaines préfèrent encore le liquide pour les petites sommes (E2, E5). Cette pratique modifie leur rapport au crédit. »

Créer aussi le document « Journal d'usage de l'IA » : un tableau à quatre colonnes (Date · Outil · Demande · Ce que j'ai gardé) avec deux lignes déjà remplies, sans aucun nom de personne.

- **`et4-01` (scène 4)** — Le paragraphe dans Google Docs, lisible en entier. Durée utile : 6 s.
- **`et4-02` (scène 8)** — Fichier → Historique des versions → Afficher l'historique des versions. Laisser le panneau des versions datées ouvert. Durée utile : 8 s.
- **`et4-03` (scène 9)** — Le tableau du journal d'usage, lisible. Durée utile : 6 s.
- **`et4-04` (scène 10)** — ChatGPT, conversation normale. Coller la consigne de la fiche avec « Master 2 » et « sociologie », puis le paragraphe après « Paragraphe : ». Montrer le texte complet avant l'envoi. Durée utile : 10 s.
- **`et4-05` (scène 11)** — Envoyer ; filmer les trois remarques en défilement lent. Si l'assistant réécrit malgré tout le paragraphe, recommencer dans une nouvelle conversation. Durée utile : 10 s.
- **`et4-06` (scène 12)** — Dans Google Docs, taper soi-même les corrections : ajouter un renvoi à une source réelle déjà vérifiée à la leçon 3 après la première phrase, et couper la phrase longue en deux. Durée utile : 14 s.
- **`et4-07` (scène 13)** — Dans le journal, ajouter la ligne : date du jour · ChatGPT · « 3 remarques sur le paragraphe 2, sans réécriture » · « 2 remarques appliquées, corrections écrites par moi ». Durée utile : 12 s.

#### Notes de script

- **Prononciation** : Compilatio « kon-pi-la-sio » (à confirmer au premier lancement) ; Turnitin « teur-ni-tine » ; OpenAI « o-pène-a-i ».
- **Exactitude** : OpenAI a retiré son outil de détection de texte généré le 20 juillet 2023, en invoquant sa faible précision : c'est un fait daté, pas une statistique ; la source est affichée. Compilatio et Turnitin sont cités comme exemples de logiciels anti-plagiat : ne rien affirmer sur leur précision, ni sur leur usage dans une université nigérienne précise. « Le règlement de son université peut sanctionner » : formulation volontairement générale.
- **Pièges** : la VO des scènes 11 et 12 suppose que l'assistant signale l'affirmation sans source et la phrase trop longue, que le paragraphe de démonstration contient exprès. Si la prise montre d'autres remarques, adapter ces deux phrases à la validation, sans retoucher la capture. Ne jamais montrer de vrais entretiens : codes E2, E5 uniquement.
- **Modèle de déclaration** : il ne remplace pas la règle de l'établissement ; il ne sert qu'à défaut, avec l'accord du directeur.
- **Données d'enquête** : rappeler dans le texte de la leçon que les transcriptions d'entretiens ne vont dans un outil grand public qu'anonymisées, et seulement si le directeur ou le comité d'éthique l'autorise.
- **Adaptation EN** : « mémoire » = « master's thesis » ; « directeur de mémoire » = « supervisor » ; « journal d'usage » = « AI use log » ; « déclaration d'usage » = « AI use statement ».
- **Adaptation HA / DJE** : « plagiat » n'a pas d'équivalent courant : dire « prendre le travail d'un autre sans le dire ». Garder « Compilatio », « Turnitin », « OpenAI » tels quels. Le modèle de déclaration reste en français à l'écran : c'est la langue du mémoire.

### Leçon 5 — Projet final : votre dossier d'étude responsable (`et5`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez constituer votre dossier d'étude responsable et le déposer. »
- **Cas réel (B1 → B6)** : Mariama (acquis de la leçon 4 : elle déclare son usage de l'IA) rassemble son travail en un dossier. Elle croit d'abord qu'il suffit d'un beau document. Enjeu : prouver sa démarche, et pouvoir l'expliquer à qui le lui demande. Fermeture en B6 (champ `example`) : elle assemble ses pièces en un seul PDF et le dépose selon la consigne.
- **Unités de notion (B3)** : *(livrables et critères)* 1. Quatre pièces, une par leçon — une notion expliquée avec vos mots et les questions du tuteur ; un kit de révision avec dix questions vérifiées ; cinq sources vérifiées et citées ; une page écrite par vous, avec journal et déclaration. · 2. Cinq critères d'évaluation — intégrité, exactitude, rigueur, compréhension, traçabilité. · 3. Trois erreurs qui font échouer — une source jamais vérifiée, un texte généré non déclaré, une donnée personnelle laissée dans une pièce.
- **Démo (B4)** : exemple de projet réussi, de bout en bout : le dossier fictif de Mariama, ouvert sur ordinateur. 1. Sommaire. 2. Pièce 1 : la notion de « cadre théorique » expliquée avec ses mots, questions du tuteur jointes. 3. Pièce 2 : son carnet Gemini Notebook « Méthodologie », dix questions de quiz vérifiées dans le cours. 4. Pièce 3 : cinq sources, l'endroit de chaque vérification, norme APA exigée par son département. 5. Pièce 4 : sa page avant et après relecture, son journal, sa déclaration signée. 6. Relecture finale avec la consigne : l'assistant signale une source sans lien de vérification ; Mariama l'ajoute. Résultat attendu à l'écran : un dossier complet, chaque critère visible.
- **Consolidation (B5)** : contre-exemple sous forme de prédiction. « Le dossier de Moussa est soigné, mais une référence est introuvable et sa page n'a ni journal ni déclaration. Quels critères échouent ? » — 3 s de silence — « L'exactitude, à cause de la référence ; la traçabilité et l'intégrité, faute de journal et de déclaration. Un beau document ne compense pas. »
- **Consigne à copier** :

```text
Voici les critères de mon projet final : intégrité, exactitude des sources, rigueur des citations, compréhension, traçabilité.
Voici mon dossier : [collez le texte de vos pièces, sans aucune donnée personnelle].
Ne réécris rien. Pour chaque critère, dis-moi ce qui manque ou ce qui est fragile, en citant le passage concerné.
Termine par trois questions qu'un jury pourrait me poser sur ma démarche.
```

- **Exercice** : « Constituez et déposez votre dossier d'étude responsable » — 1. Rassemblez vos quatre pièces : la notion expliquée avec vos mots et les questions du tuteur (leçon 1) ; votre kit de révision avec dix questions de quiz vérifiées dans le cours (leçon 2) ; cinq sources vérifiées, avec l'endroit de chaque vérification, citées dans la norme de votre département (leçon 3) ; une page écrite par vous, avant et après relecture, avec votre journal d'usage (leçon 4). 2. Ajoutez votre déclaration d'usage de l'IA, datée et signée. 3. Relisez avec la consigne et la grille des cinq critères ; retirez toute donnée personnelle. 4. Assemblez un seul PDF et déposez-le selon la consigne affichée sous la vidéo.
- **Carte de rappel** : 1. Se faire interroger 2. Réviser ses cours 3. Vérifier, puis citer 4. Tracer, déclarer
- **Quiz** :
  1. Quelle demande à un assistant respecte l'intégrité académique ? — A) « Rédige mon devoir. » B) « Donne-moi les réponses du TD. » C) « Pose-moi des questions sur cette notion, une à la fois. » D) « Réécris ce texte trouvé en ligne. » — **Réponse : C**
  2. Dans Gemini Notebook, comment vérifier une réponse ? — A) Toucher la citation et lire le passage du cours B) Générer un résumé audio C) Poser la question à un camarade D) Demander une réponse plus longue — **Réponse : A**
  3. Une référence donnée par un assistant est introuvable dans Google Scholar et à la bibliothèque. Que faites-vous ? — A) Vous la gardez, l'assistant est fiable B) Vous la retirez de votre bibliographie C) Vous changez l'année D) Vous la citez sans auteur — **Réponse : B**
  4. Que doit contenir chaque ligne de votre journal d'usage de l'IA ? — A) Seulement le texte final B) Le rapport d'un détecteur C) La liste de vos camarades D) La date, l'outil, la demande et ce que vous avez gardé — **Réponse : D**
  5. Le dossier de Moussa est soigné, mais une référence est introuvable et sa page n'a ni journal ni déclaration. Quels critères échouent ? — A) La rigueur seulement B) La compréhension seulement C) L'exactitude, la traçabilité et l'intégrité D) Aucun, puisque le document est soigné — **Réponse : C**
- **Marques citées** : ChatGPT (OpenAI), Gemini Notebook (Google)

#### Script v1 (à valider par l'owner)

Durée estimée : 3:50 · Mots de voix off : 379

**Scène 1 — B1 Accroche · 0:00–0:08 · E**
- Visuel : illustration en aplats, Mariama à la bibliothèque, quatre pochettes étalées devant elle. Le cahier du cours passe à l'onglet « Dossier ».
- Écran : « Mariama · le projet final »
- VO : « Mariama sait désormais déclarer son usage de l'IA. Aujourd'hui, elle rassemble tout son travail. »

**Scène 2 — B1 Accroche · 0:08–0:18 · B**
- Visuel : carte de promesse sur une page du cahier.
- Écran : « Constituer votre dossier d'étude responsable et le déposer »
- VO : « À la fin de cette leçon, vous saurez constituer votre dossier d'étude responsable et le déposer. »

**Scène 3 — B2 Cadrage · 0:18–0:34 · B**
- Visuel : carte en deux temps. Une couverture élégante apparaît, puis s'efface au profit d'une pile de preuves (brouillon, journal, coche de vérification).
- Écran : « Ce qui est évalué : votre démarche, et sa preuve »
- VO : « Elle croit qu'un projet final, c'est un beau document. Ce n'est pas l'essentiel. Ce qui est évalué, c'est votre démarche. Et la preuve que vous l'avez suivie. »

**Scène 4 — B2 Cadrage · 0:34–0:46 · A**
- Visuel : capture `et5-01` — le sommaire du dossier exemple, en PDF. Cadres successifs sur les quatre pièces et la déclaration.
- Écran : « Un seul PDF · 4 pièces + 1 déclaration »
- VO : « Le dossier tient en un seul fichier PDF. Quatre pièces, une par leçon, plus une déclaration. »

**Scène 5 — B3 Notion · 0:46–1:08 · C**
- Visuel : le cahier se referme et devient un classeur à quatre intercalaires ; chaque intercalaire s'ouvre au rythme de la voix avec son pictogramme (bulle, carnet, loupe, stylo).
- Écran : « 1 Notion · 2 Kit de révision · 3 Cinq sources · 4 Une page + déclaration »
- VO : « Les livrables. Un : une notion expliquée avec vos mots, après le tuteur. Deux : votre kit de révision, avec dix questions vérifiées. Trois : cinq sources vérifiées et citées. Quatre : une page écrite par vous, avec journal et déclaration. »

**Scène 6 — B3 Notion · 1:08–1:30 · C**
- Visuel : grille d'évaluation à cinq lignes ; chaque critère s'inscrit avec son pictogramme (cadenas, loupe, guillemets, bulle, horloge) et une case à cocher.
- Écran : « Intégrité · Exactitude · Rigueur · Compréhension · Traçabilité »
- VO : « Cinq critères. Intégrité : le texte est de vous, l'usage est déclaré. Exactitude : chaque source existe et dit ce que vous écrivez. Rigueur : la norme de citation est respectée. Compréhension : vous expliquez sans l'IA. Traçabilité : vos traces sont jointes. »

**Scène 7 — B3 Notion · 1:30–1:44 · B**
- Visuel : carte « trois erreurs », chacune barrée d'une croix au moment où elle est dite.
- Écran : « Source non vérifiée · Texte généré non déclaré · Donnée personnelle »
- VO : « Trois erreurs font échouer un dossier. Une source jamais vérifiée. Un texte généré, non déclaré. Une donnée personnelle laissée dans une pièce. »

**Scène 8 — B3 Notion · 1:44–1:58 · G**
- Visuel : carte de consigne, fond clair, consigne complète. Soulignés : « Ne réécris rien », « pour chaque critère ».
- Écran : la consigne à copier de la fiche, en entier.
- VO : « Avant de déposer, faites relire votre dossier avec cette consigne. L'assistant ne réécrit rien. Il signale ce qui manque, critère par critère. »

**Scène 9 — B4 Application · 1:58–2:10 · A**
- Visuel : capture `et5-02` — la pièce 1 du dossier exemple. Cadre sur l'explication, puis sur les questions du tuteur.
- Écran : « Pièce 1 · une notion, avec ses mots »
- VO : « Voici le dossier de Mariama. Pièce un : la notion de “cadre théorique”, expliquée avec ses mots. Les questions du tuteur sont jointes. »

**Scène 10 — B4 Application · 2:10–2:22 · A**
- Visuel : capture `et5-03` — la pièce 2 : la capture de son carnet Gemini Notebook, puis la liste des dix questions, chacune suivie d'un renvoi au cours.
- Écran : « Pièce 2 · kit de révision, 10 questions vérifiées »
- VO : « Pièce deux : son carnet Gemini Notebook sur le cours de méthodologie. Dix questions de quiz, chacune vérifiée dans le cours. »

**Scène 11 — B4 Application · 2:22–2:34 · A**
- Visuel : capture `et5-04` — la pièce 3 : cinq références APA, chacune suivie de « vérifiée sur : » et d'un lien. Coche à chaque ligne.
- Écran : « Pièce 3 · 5 sources vérifiées, norme APA »
- VO : « Pièce trois : cinq sources. Pour chacune, l'endroit où elle l'a vérifiée. Toutes citées en APA, comme l'exige son département. »

**Scène 12 — B4 Application · 2:34–2:48 · A**
- Visuel : capture `et5-05` — la pièce 4 : la page avant et après, le journal d'usage, la déclaration signée. Cadres successifs.
- Écran : « Pièce 4 · une page, son journal, sa déclaration »
- VO : « Pièce quatre : sa page, avant et après les remarques de l'IA. Son journal d'usage. Et sa déclaration, signée. »

**Scène 13 — B4 Application · 2:48–3:00 · A**
- Visuel : capture `et5-06` — la consigne de relecture dans ChatGPT, puis la réponse critère par critère. Cadre sur la remarque « lien de vérification manquant ».
- Écran : « Relecture finale : un manque repéré, puis corrigé »
- VO : « Enfin, elle colle la consigne de relecture. L'assistant signale une source sans lien de vérification. Elle l'ajoute. »

**Scène 14 — B5 Consolidation · 3:00–3:26 · B**
- Visuel : carte question. Le dossier de Moussa, soigné ; trois étiquettes apparaissent : « référence introuvable », « pas de journal », « pas de déclaration ». Silence de 3 s, puis trois critères de la grille reçoivent une croix.
- Écran : « Dossier soigné, mais : référence introuvable · ni journal ni déclaration »
- VO : « À vous. Le dossier de Moussa est soigné. Mais une référence est introuvable, et sa page n'a ni journal ni déclaration. Quels critères échouent ? » [silence 3 s] « L'exactitude, à cause de la référence. La traçabilité et l'intégrité, faute de journal et de déclaration. Un beau document ne compense pas. »

**Scène 15 — B6 Clôture · 3:26–3:36 · B (rappel de la promesse)**
- Visuel : Mariama assemble les pièces ; un fichier PDF unique se forme, puis part vers une flèche « Dépôt ». La promesse revient, mot pour mot.
- Écran : « Constituer votre dossier d'étude responsable et le déposer »
- VO : « Mariama assemble ses pièces en un seul PDF. Elle le dépose selon la consigne affichée sous la vidéo. »

**Scène 16 — B6 Clôture · 3:36–3:50 · B (carte de rappel)**
- Visuel : carte de rappel du cours, un point par leçon, révélés au rythme de la voix ; tenue ≥ 4 s après le dernier point.
- Écran : « 1. Se faire interroger » « 2. Réviser ses cours » « 3. Vérifier, puis citer » « 4. Tracer, déclarer »
- VO : « Retenez le cours en quatre gestes. Se faire interroger. Réviser ses cours, en se testant. Vérifier, puis citer. Tracer, déclarer. Constituez et déposez votre dossier d'étude responsable. »

#### Captures à fournir par l'owner

Ordinateur, lecteur PDF ou aperçu Google Drive, zoom lisible, mention « Exemple fictif » visible en haut de chaque page du dossier. Le dossier exemple est préparé à l'avance (voir 2.6). À masquer : comptes, sélecteur de modèle, bandeaux.

- **`et5-01` (scène 4)** — Ouvrir le PDF « Dossier d'étude responsable – Mariama (exemple fictif) » sur la page du sommaire. Durée utile : 6 s.
- **`et5-02` (scène 9)** — Défiler jusqu'à la pièce 1, marquer une pause sur l'explication puis sur les questions du tuteur. Durée utile : 8 s.
- **`et5-03` (scène 10)** — Pièce 2 : la page qui contient la capture du carnet Gemini Notebook « Méthodologie » et la liste des dix questions. Durée utile : 8 s.
- **`et5-04` (scène 11)** — Pièce 3 : la bibliographie, défilement lent ligne par ligne. Durée utile : 8 s.
- **`et5-05` (scène 12)** — Pièce 4 : page avant/après, journal, déclaration signée. Durée utile : 10 s.
- **`et5-06` (scène 13)** — ChatGPT, conversation normale : coller la consigne de la fiche, puis la version texte du dossier dans laquelle le lien de vérification de la source 4 a été volontairement retiré. Envoyer, filmer la réponse critère par critère. Durée utile : 10 s.

#### Notes de script

- **Structure de projet final** : B3 présente les livrables et les critères, B4 un exemple réussi de bout en bout, B6 le récapitulatif du cours (un point par leçon) et la consigne de dépôt.
- **Dépôt** : aucun envoi de fichier n'est visible dans la plateforme à la date de rédaction ; l'attestation est délivrée quand toutes les leçons sont terminées. La VO renvoie donc à « la consigne affichée sous la vidéo ». [à vérifier au moment de la production : mode de dépôt et d'évaluation du projet final sur Karatou Academy]
- **Dossier exemple** : entièrement fictif, mention « Exemple fictif » sur chaque page. Les cinq sources de la pièce 3 doivent être réelles et vérifiées une par une au moment de la production : l'exemple ne peut pas contenir ce qu'il condamne. La VO de la scène 13 suppose que l'assistant repère le lien retiré ; sinon, adapter la phrase à la validation, sans retoucher la capture.
- **Pas de promesse** : le dossier prouve une démarche ; il ne garantit ni note ni bourse. Ne pas ajouter de phrase sur les jurys de bourse dans la VO.
- **Prononciation** : « cadre théorique » bien articulé ; « APA » « a-pé-a ».
- **Adaptation EN** : « dossier d'étude responsable » = « responsible study portfolio » ; « pièce » = « item » ; « déclaration d'usage » = « AI use statement ».
- **Adaptation HA / DJE** : garder les noms des cinq critères en français à l'écran, avec une explication orale courte pour chacun. La carte de rappel reprend des verbes simples : les traduire par des verbes d'action, pas par des noms abstraits.

## 2.6 Captures et éléments à préparer

| Leçon | Élément | Comment l'obtenir | Qui |
|---|---|---|---|
| Toutes | Comptes de tournage (Google, ChatGPT gratuit), interface en français, sans historique | Créer des comptes dédiés ; ne jamais utiliser un compte personnel | Owner |
| Toutes | Illustrations des personas (Ibrahim, Mariama ; Hadiza et Moussa en silhouette) et du cahier à intercalaires | Aplats, charte Karatou, mêmes silhouettes d'une leçon à l'autre | Claude |
| Toutes | Prononciation de « Gemini » | Fixée au premier lancement, identique dans tout le cours | Owner |
| 1 | Captures `et1-01` à `et1-06` | ChatGPT sur téléphone Android, protocole de la leçon 1 | Owner |
| 1 | Vérification des libellés « Étudier et apprendre » et « Apprentissage guidé » | Ouvrir les deux assistants le jour des captures | Owner |
| 2 | PDF de démonstration « Les amortissements » (3 à 4 pages, sans logo ni établissement réel) | Rédigé par Claude, relu et validé par un enseignant de comptabilité | Claude + owner |
| 2 | Captures `et2-01` à `et2-07` | Application Gemini Notebook sur Android, carnet « BTS comptabilité » | Owner |
| 2 | Vérification du nom affiché (Gemini Notebook / NotebookLM) et des libellés du panneau Studio | Le jour des captures | Owner |
| 3 | Captures `et3-01` à `et3-06` | Chrome Android, Google Scholar, ChatGPT, Google Docs « Bibliographie – mémoire » | Owner |
| 3 | Schéma de la référence fictive « Introuvable » (scène 3) | Animation, mention « Exemple fictif » | Claude |
| 4 | Document « Mémoire – chapitre 1 (démo) » avec plusieurs versions datées | Créé dans Google Docs deux ou trois jours avant, paragraphe fourni dans la leçon 4 | Owner |
| 4 | Document « Journal d'usage de l'IA » (tableau à 4 colonnes, 2 lignes remplies) | Modèle rédigé par Claude, copié dans Google Docs | Claude + owner |
| 4 | Captures `et4-01` à `et4-07` | Ordinateur, Google Docs et ChatGPT | Owner |
| 4 | Source affichée « OpenAI, juillet 2023 » (retrait du détecteur) | Vérifiée en octobre 2026 ; relire l'annonce d'OpenAI au moment de la production | Claude |
| 5 | « Cours de méthodologie (démonstration) » et carnet Gemini Notebook « Méthodologie » de Mariama | Cours rédigé par Claude ; carnet et quiz créés par l'owner pour la capture de la pièce 2 | Claude + owner |
| 5 | Dossier exemple PDF « Dossier d'étude responsable – Mariama (exemple fictif) » | Pièces rédigées par Claude ; cinq sources réelles vérifiées une par une | Claude + owner |
| 5 | Captures `et5-01` à `et5-06` | PDF sur ordinateur, ChatGPT | Owner |
| 5 | Mode de dépôt et d'évaluation du projet final | À confirmer avant le rendu de la leçon 5 | Équipe Karatou |
| 5 | Grille d'évaluation des cinq critères (texte de la leçon) | Rédigée par Claude à partir de la leçon 5 | Claude |
