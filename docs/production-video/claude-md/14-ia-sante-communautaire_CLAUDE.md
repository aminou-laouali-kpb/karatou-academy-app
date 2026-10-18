# CLAUDE.md — Karatou Academy · Production vidéo
# Cours 14 — IA et santé communautaire

> **Pour l'owner — mode d'emploi**
> 1. Créez un dossier vide sur votre ordinateur, par exemple `karatou-ia-sante-communautaire`.
> 2. Copiez-y ce fichier et renommez-le exactement `CLAUDE.md`.
> 3. Ouvrez Claude Code dans ce dossier (dans un terminal : `cd karatou-ia-sante-communautaire` puis `claude`).
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
livraison/ia-sante-communautaire/<id>/      fichiers livrés · livraison/ia-sante-communautaire/INTEGRATION.md
```

`<id>` est l'identifiant de la leçon (`sa1`, `sa2`…). Langues : `fr`, `en`, `ha`, `dje`.

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

### 9.2 Nommage et contenu de `livraison/ia-sante-communautaire/<id>/`

`ia-sante-communautaire_<id>_<langue>_v<n>.mp4` · `…-360.mp4` · `….srt` · `….vtt` · `…_cover.jpg` (1920 × 1080, qualité 85,
première image stable de B1) · `…_transcript.md` (un titre par temps, texte dit + actions à l'écran entre
crochets) · `RECETTE.md`.

### 9.3 Mise en ligne

Chaîne YouTube **Karatou Academy**, vidéos **non répertoriées**, une vidéo par langue, sous-titres `.srt` ajoutés
comme piste. Titre : « Karatou Academy — IA et santé communautaire — Leçon N : <titre> (<LANGUE>) ». Le site lit des **URL
d'intégration** : `https://www.youtube.com/embed/<ID>` (jamais `watch?v=` ni `youtu.be/`). Teste chaque URL dans un
navigateur avant de la consigner.

### 9.4 Intégration au site — `livraison/ia-sante-communautaire/INTEGRATION.md`

Le site lit, pour chaque leçon, un champ `video: { fr, en, ha }` dans les fichiers TypeScript du dépôt
`karatou-academy-app` (registre `authoredLessons`). Chaque leçon y a aussi un texte (objectif, quatre sections,
exemple, exercice, quiz de cinq questions, réflexion, glossaire), rédigé par l'équipe avec le skill
`karatou-course-creator`, et des lignes Supabase (module, leçons) pour la progression et les certificats.

Ton rôle : tenir `INTEGRATION.md` à jour, leçon par leçon : module `ia-sante-communautaire`, id, titre, promesse (objectif), cas
réel (exemple), exercice (titre et étapes), carte de rappel, quiz, marques citées, URL FR / EN / HA, et URL DJE
« en attente ». Ce fichier est remis à l'équipe technique ; tu ne modifies pas le dépôt du site.

### 9.5 Corrections après publication

Une URL publiée est figée. Pour corriger : nouvelle version `v2` → mise en ligne → nouvelle URL testée →
`INTEGRATION.md` mis à jour → l'équipe technique remplace l'URL → l'ancienne vidéo est rendue privée, jamais
supprimée. Consigne chaque version dans le journal de `PROGRESS.md`.

## 10. `PROGRESS.md` — modèle

```markdown
# PROGRESS — Cours 14 · IA et santé communautaire
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
| Numéro | 14 |
| Titre | IA et santé communautaire |
| Format | Motion graphics + captures d'écran, voix off (voix clonée de l'owner) |
| Owner / voix | à désigner — nom complet et titre exact demandés au premier lancement |
| Rubrique | IA & Données |
| Public | Agents de santé communautaire (cases de santé), relais communautaires, animateurs et animatrices de sensibilisation (ONG, projets de santé), qui travaillent sous la supervision d'un centre de santé intégré (CSI). Ce n'est pas un cours de soins. |
| Slug du module (provisoire) | `ia-sante-communautaire` |
| Préfixe des leçons | `sa` |
| Nombre de vidéos | 5 (dont la dernière = projet final certifiant) |
| Durée par vidéo | 3–5 min (cible 4:00) |
| Langues | FR (référence) · EN · HA · DJE |
| Prérequis | Un téléphone Android connecté ; un compte gratuit sur un assistant conversationnel (Gemini, ChatGPT, Claude ou Copilot) ; lire le français. Aucune compétence technique. Conseillé avant : le cours 1 « L'IA expliquée simplement ». |
| Promesse du cours | Vous utiliserez l'IA pour préparer des messages de santé clairs, dans votre langue, sans exposer un patient ni sortir du protocole. |
| Positionnement | Cours d'application centré sur la communication pour la santé et la mise en forme de l'information. L'IA ne pose aucun diagnostic et ne remplace ni le protocole national (dont la PCIME communautaire) ni l'agent de santé : chaque leçon le redit. Le cours prolonge le module en ligne « Intelligence artificielle » (limites, éthique) et renvoie au cours 10 pour la sécurité des comptes. Il ne forme pas à la prise en charge des malades. |
| Fil rouge | Rahila, agente de santé communautaire dans la case de santé d'un village de la région de Dosso où l'on parle zarma et haoussa ; Souleymane, relais communautaire bénévole du même village, de langue maternelle haoussa ; Issoufou, infirmier, chef du CSI de l'aire de santé, qui valide chaque contenu. Ensemble, ils préparent la campagne « Moustiquaire chaque nuit » avant la saison des pluies. |
| Marques citées | Gemini (Google), ChatGPT (OpenAI), Claude (Anthropic), Copilot (Microsoft), WhatsApp (Meta), plus l'outil de documents retenu en leçon 5. Organismes cités (hors mention de marque) : OMS, UNICEF, ministère de la Santé publique du Niger [intitulé exact à vérifier au moment de la production], HAPDP. |

## 2.2 Ce que l'apprenant saura faire

- Séparer les tâches que l'IA peut préparer (rédiger, reformuler, traduire un premier jet, mettre en forme) de celles qu'elle ne doit jamais faire (diagnostic, traitement, décision de référence).
- Passer toute demande au test des trois questions (décision de santé ? donnée de patient ? source pour vérifier ?) avant de l'écrire dans un assistant.
- Adapter un message officiel de prévention (paludisme, nutrition, vaccination, hygiène) à un public et à un format de terrain, sans en changer le fond.
- Obtenir un premier jet en haoussa ou en zarma, le contrôler par retraduction et le faire valider par un locuteur et par un professionnel de santé.
- Tirer d'un extrait du protocole national un aide-mémoire de référence vierge, vérifié ligne par ligne et validé par le chef du CSI.
- Monter et documenter une campagne de sensibilisation, avec une note d'usage responsable et aucune donnée de patient.

## 2.3 Plan du cours

| Leçon | Id | Titre | Promesse (objectif) | Cas réel (B1) | Démo (B4) | Durée cible |
|---|---|---|---|---|---|---|
| 1 | `sa1` | Ce que l'IA peut faire en santé, et ce qu'elle ne doit pas faire | À la fin de cette leçon, vous saurez séparer ce que l'IA prépare de ce que vous décidez. | Jour de marché : une mère montre à Rahila un assistant qui conseille un médicament pour son fils fiévreux. | Test des trois questions, puis rappel WhatsApp de la séance de vaccination ; la phrase santé écrite par l'IA est remplacée par celle de la fiche officielle. | 4:00 |
| 2 | `sa2` | Préparer un message de sensibilisation clair | À la fin de cette leçon, vous saurez adapter un message officiel à votre public. | Souleymane anime samedi une causerie sur le paludisme ; la fiche officielle est écrite pour des soignants. | Messages officiels collés dans la consigne → plan de causerie, trois questions, message vocal → relecture fiche à côté → validation du chef du CSI. | 4:00 |
| 3 | `sa3` | Traduire en haoussa et en zarma, avec validation humaine | À la fin de cette leçon, vous saurez obtenir un premier jet traduit et le faire valider. | Le message vocal doit exister en haoussa et en zarma ; un mot mal traduit peut changer le sens. | Traduction en haoussa avec lexique → retraduction en français dans une nouvelle conversation → écart repéré → correction par Souleymane → sens validé par Issoufou. | 4:00 |
| 4 | `sa4` | Organiser l'information pour référer, selon le protocole | À la fin de cette leçon, vous saurez tirer du protocole un aide-mémoire de référence. | Des fiches de référence arrivent incomplètes au CSI ; Issoufou demande à Rahila un aide-mémoire d'une page. | Extrait officiel du protocole, sans donnée de patient → aide-mémoire en trois parties → comparaison ligne par ligne → validation datée. | 4:00 |
| 5 | `sa5` | Projet final : votre campagne de sensibilisation | À la fin de cette leçon, vous saurez présenter une campagne de sensibilisation validée. | Rahila et Souleymane présentent la campagne « Moustiquaire chaque nuit » pour le certificat. | Le dossier réussi de bout en bout : fiche de campagne, supports, version traduite validée, note d'usage responsable, dépôt. | 4:00 |

## 2.4 Direction artistique du cours

- **Motif récurrent : le classeur de campagne.** Un classeur à cinq intercalaires (Règles · Message · Langues · Référence · Campagne). Chaque leçon ouvre son intercalaire en B1 et le referme en B6 ; la leçon 5 montre le classeur complet.
- **Deuxième motif fixe : le tampon « Validé ».** Un cercle, une coche et le texte « Validé · chef du CSI ». Il apparaît chaque fois qu'un humain valide un contenu, jamais sur une production brute de l'IA. La validation est toujours portée par la forme (cercle + coche), jamais par la seule couleur.
- **Personas.** Illustrations en aplats, formes simples, sans photoréalisme ni visage généré qui imite une personne réelle. Rahila : blouse claire, badge « ASC », carnet. Souleymane : sacoche de relais et boîte à images. Issoufou : blouse blanche, devant le CSI. Décors : case de santé, marché hebdomadaire, arbre à palabres, CSI.
- **Interdits visuels.** Aucun enfant malade représenté de façon dramatique, aucun geste clinique, aucun médicament, aucune dose, aucune boîte de médicament, même flouté. Aucune donnée de patient, même fictive, dans un outil réel.
- **Trois schémas types réutilisés.** (1) Les trois lignes rouges : trois barres, chacune avec une croix et un libellé. (2) Le circuit de validation : Source officielle → IA (brouillon) → Vous (relecture) → Validation (locuteur, chef du CSI) → Diffusion. (3) Le test des trois questions : trois portes, chacune avec sa question et une coche.
- **Iconographie.** Pictogrammes au trait : moustiquaire, carnet de santé, téléphone, micro (message vocal), case de santé, CSI, bulle de dialogue, cadenas (données), tampon. Logos de marques : seulement à l'intérieur des captures réelles, jamais sur les cartes.
- **Captures.** Un seul assistant pour tout le cours, version gratuite, interface en français, mode clair, sur téléphone Android. Gemini est conseillé (souvent déjà installé sur Android) ; les gestes sont les mêmes dans les autres assistants.
- **Ce qui reste fixe.** Le classeur, le tampon, le circuit de validation, les trois personas. **Ce qui change.** L'intercalaire ouvert, le persona au premier plan (L1 Rahila, L2 Souleymane, L3 les deux, L4 Rahila et Issoufou, L5 l'équipe), le thème de santé illustré.
- **Son.** Aucune musique sous la voix. Un court habillage sonore possible sur les cartes seulement (ouverture d'intercalaire, tampon).

## 2.5 Les leçons

### Leçon 1 — Ce que l'IA peut faire en santé, et ce qu'elle ne doit pas faire (`sa1`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez séparer ce que l'IA prépare de ce que vous décidez. »
- **Cas réel (B1 → B6)** : jour de marché dans un village de la région de Dosso. Une mère montre à Rahila, agente de santé communautaire, la réponse d'un assistant sur le téléphone de son frère : un médicament pour son fils qui a de la fièvre. Enjeu : un conseil donné sans examen peut retarder les soins. B6 (champ `example`) : à la case de santé, Rahila prend l'enfant en charge selon le protocole ; l'IA ne lui sert qu'à préparer sa prochaine causerie.
- **Unités de notion (B3)** : 1. L'IA prépare, vous décidez — elle rédige, résume, reformule, propose une traduction ; examiner, traiter et référer restent votre travail, selon le protocole. · 2. Trois lignes rouges — aucun diagnostic ni traitement demandé à l'IA, aucune donnée de patient, jamais à la place du protocole ni du centre de santé. · 3. La source officielle passe d'abord — l'IA peut « halluciner » (une réponse fausse, donnée avec assurance) ; la référence reste la fiche officielle et le chef du CSI. L'OMS a publié en 2024 des orientations sur l'IA générative en santé et y signale le risque de trop faire confiance à la machine.
- **Démo (B4)** : assistant (Gemini conseillé), version gratuite, sur téléphone Android. 1. Rahila passe sa demande au test des trois questions : décision de santé ? donnée de patient ? source pour vérifier ? 2. Elle tape sa consigne : un rappel WhatsApp de la séance de vaccination de jeudi au CSI, avec « une phrase sur l'importance des vaccins ». 3. La réponse arrive ; la phrase santé écrite par l'IA est encadrée « à vérifier ». 4. Rahila ouvre la fiche officielle du CSI, remplace cette phrase par celle de la fiche, mot pour mot, puis vérifie le jour, l'heure et le lieu. 5. Le chef du CSI relit ; le message part au groupe WhatsApp des mères. Pour la prochaine fois, sa consigne interdit tout ajout médical. Résultat à l'écran : un message de cinq lignes, sans aucun nom, avec la phrase officielle.
- **Consolidation (B5)** : prédiction. Souleymane, le relais, veut demander à l'assistant : « Enfant de 2 ans, fièvre depuis 3 jours, que faire ? ». L'assistant peut-il l'aider ? Réponse : non. Même sans nom, c'est une décision de santé : on applique le protocole, et l'enfant vient à la case de santé.
- **Consigne à copier** :

```text
Rédige un message WhatsApp court, en français simple, pour les mères de [village ou quartier].
Objet : [séance de vaccination], le [jour] à [heure], au [lieu].
Ajoute cette phrase de la fiche officielle, sans la modifier : « [phrase de la fiche] ».
Ton chaleureux et respectueux. Cinq lignes au plus.
N'ajoute aucune autre information médicale.
```

- **Exercice** : « Classez vos demandes avec le test des trois questions » — 1. Notez cinq tâches de votre semaine pour lesquelles vous pensez à l'IA. 2. Passez chacune au test : décision de santé ? donnée de patient ? source officielle pour vérifier ? Barrez celles qui échouent. 3. Réalisez une tâche qui passe le test avec la consigne, puis comparez le résultat à la fiche officielle.
- **Carte de rappel** : 1. L'IA prépare, vous décidez · 2. Aucune donnée de patient · 3. Source officielle d'abord
- **Quiz** *(5 questions ; chaque point de la carte de rappel est couvert)* :
  1. Pour quelle tâche Rahila peut-elle utiliser un assistant ? — A) Choisir le traitement d'un enfant fiévreux B) Décider si un enfant doit être référé C) Préparer le brouillon d'un message de sensibilisation D) Remplacer le protocole national — **Réponse : C**
  2. Laquelle de ces informations ne doit jamais être tapée dans un assistant grand public ? — A) Le jour d'une séance de vaccination B) Le thème d'une causerie C) Le nom de votre région D) Le prénom et le village d'un enfant malade — **Réponse : D**
  3. Souleymane veut demander : « Enfant de 2 ans, fièvre depuis 3 jours, que faire ? ». Que lui répondez-vous ? — A) Vas-y, il n'y a pas de nom B) Non : c'est une décision de santé, on applique le protocole et l'enfant vient à la case de santé C) Demande à deux assistants et compare D) Demande, puis vérifie sur Internet — **Réponse : B**
  4. Une « hallucination » de l'IA, c'est : — A) une réponse fausse, donnée avec assurance B) une panne de l'application C) une réponse trop longue D) une réponse dans une autre langue — **Réponse : A**
  5. L'assistant a ajouté une phrase sur les vaccins que vous ne lui avez pas donnée. Que faites-vous ? — A) Vous la gardez, elle semble juste B) Vous demandez à l'assistant s'il est sûr de lui C) Vous la traduisez en zarma D) Vous la vérifiez dans la fiche officielle, puis vous la remplacez ou la retirez — **Réponse : D**
- **Marques citées** : Gemini (ou l'assistant retenu pour les captures), WhatsApp. Organisme cité : OMS.

#### Script v1 (à valider par l'owner)

Durée estimée : 4:00 (dont 3 s de mention légale, Partie 1) · Mots de voix off : 428

**Scène 1 — B1 Accroche · 0:00–0:09 · E**
- Visuel : l'intercalaire « Règles » du classeur s'ouvre sur une illustration en aplats : marché hebdomadaire, une mère tend un téléphone à Rahila (blouse claire, badge « ASC »). Sur le téléphone, une bulle floutée et un point d'interrogation. Aucun médicament représenté.
- Écran : « Rahila · agente de santé communautaire · région de Dosso »
- VO : « Près de Dosso, une mère montre à Rahila le conseil d'un assistant : un médicament pour son fils fiévreux. »

**Scène 2 — B1 Accroche · 0:09–0:18 · B**
- Visuel : carte promesse sur fond clair, texte révélé en deux temps.
- Écran : « À la fin de cette leçon, vous saurez séparer ce que l'IA prépare de ce que vous décidez. »
- VO : « À la fin de cette leçon, vous saurez séparer ce que l'IA prépare de ce que vous décidez. » *(promesse dite à 0:09)*

**Scène 3 — B2 Cadrage · 0:18–0:27 · B**
- Visuel : carte, surtitre « Le malentendu » ; le titre « Bien écrit = juste » apparaît, le signe « = » est barré et remplacé par « ≠ ».
- Écran : « Le malentendu · Bien écrit ≠ juste »
- VO : « Rahila le sait : ce conseil peut retarder les soins. Le malentendu ? Une réponse bien écrite paraît juste. »

**Scène 4 — B2 Cadrage · 0:27–0:45 · A**
- Visuel : capture réelle de l'assistant, nouvelle conversation vide ; zoom lent vers la mention d'avertissement sous la zone de saisie ; un cadre l'entoure (une annotation à la fois).
- Écran : « L'outil l'écrit lui-même »
- VO : « Regardez sous la zone de saisie. L'outil l'écrit lui-même : il peut faire des erreurs. Il n'a pas vu l'enfant. Il ne connaît ni votre protocole, ni les médicaments du centre de santé. »

**Scène 5 — B3 Notion · 0:45–1:07 · C**
- Visuel : schéma en deux colonnes. À gauche, « L'IA prépare » : quatre pictogrammes (écrire, résumer, reformuler, traduire) entrent un par un. À droite, « Vous décidez » : examiner, traiter, référer, avec le libellé « selon le protocole ». Une flèche relie les colonnes : tout brouillon passe par vous.
- Écran : « 1 · L'IA prépare : écrire, résumer, traduire · Vous décidez : examiner, traiter, référer »
- VO : « Première idée : l'IA prépare, vous décidez. Elle écrit un brouillon de message. Elle résume une fiche, elle propose une traduction. Examiner, traiter, référer : cela reste votre travail, selon le protocole. Autrement dit, l'IA tient le stylo. La décision de santé reste humaine. »

**Scène 6 — B3 Notion · 1:07–1:29 · C**
- Visuel : schéma « les trois lignes rouges » : trois barres horizontales entrent l'une après l'autre, chacune avec une croix et son libellé.
- Écran : « 2 · Pas de diagnostic · Pas de donnée de patient · Pas à la place du protocole »
- VO : « Deuxième idée : trois lignes rouges. Un : vous ne demandez jamais de diagnostic ni de traitement. Deux : aucune donnée de patient, ni nom, ni numéro, ni photo. Trois : l'IA ne remplace ni le protocole national ni le centre de santé. »

**Scène 7 — B3 Notion · 1:29–1:42 · B**
- Visuel : carte ; d'un pictogramme de téléphone part une bulle vers un nuage ; un cadenas ouvert apparaît à côté du nuage.
- Écran : « Ce que vous tapez quitte votre téléphone »
- VO : « Pourquoi ? Ce que vous tapez part sur les serveurs d'une entreprise. Vous n'en gardez plus le contrôle complet. Et le secret professionnel s'applique aussi ici. »

**Scène 8 — B3 Notion · 1:42–2:12 · B**
- Visuel : carte, surtitre « 3 · La source officielle d'abord » ; le mot « hallucination » entre, puis sa définition ; en bas, la source « OMS, 2024 ».
- Écran : « Hallucination : une réponse fausse, donnée avec assurance · OMS, 2024 »
- VO : « Troisième idée : la source officielle passe d'abord. L'IA peut produire une hallucination : une réponse fausse, donnée avec assurance. Elle invente, sans prévenir. En deux mille vingt-quatre, l'OMS a publié des orientations sur ces outils en santé. Elle y signale un risque : trop faire confiance à la machine. Votre référence reste la fiche officielle et le chef du CSI. »

**Scène 9 — B4 Application · 2:12–2:22 · C**
- Visuel : schéma « le test des trois questions » : trois portes s'allument l'une après l'autre ; chaque porte reçoit une coche.
- Écran : « Décision de santé ? · Donnée de patient ? · Source pour vérifier ? »
- VO : « Avant chaque demande, Rahila passe un test en trois questions. Décision de santé ? Donnée de patient ? Source pour vérifier ? »

**Scène 10 — B4 Application · 2:22–2:36 · A**
- Visuel : capture réelle : nouvelle conversation ; la consigne s'écrit (frappe accélérée), puis l'envoi.
- Écran : « Rappel : vaccination, jeudi, au CSI »
- VO : « Sa consigne, c'est-à-dire sa demande écrite : rappeler aux mères la vaccination de jeudi. Ni décision, ni patient. Le planning du CSI permet de vérifier. »

**Scène 11 — B4 Application · 2:36–2:48 · A**
- Visuel : capture réelle : la réponse s'affiche ; un cadre entoure la phrase santé écrite par l'assistant, puis l'étiquette « à vérifier » apparaît.
- Écran : « Phrase santé écrite par l'IA → à vérifier »
- VO : « La réponse arrive : un message court et chaleureux. Une phrase sur les vaccins vient de l'IA. Rahila doit la vérifier. »

**Scène 12 — B4 Application · 2:48–3:02 · A**
- Visuel : capture réelle : la photo de la fiche officielle dans la galerie du téléphone (aucun nom visible), puis le message dans l'application de notes ; la phrase de l'IA est barrée et remplacée par celle de la fiche ; coche sur le jour, l'heure et le lieu.
- Écran : « Remplacée par la phrase de la fiche, mot pour mot »
- VO : « Rahila ouvre la fiche officielle du CSI. Elle remplace la phrase par celle de la fiche. Puis elle vérifie le jour, l'heure, le lieu. »

**Scène 13 — B4 Application · 3:02–3:12 · A**
- Visuel : capture réelle : groupe WhatsApp de test (nom du groupe, numéros et photos masqués), le message final envoyé ; le tampon « Validé · chef du CSI » se pose en surimpression.
- Écran : « Validé par le chef du CSI »
- VO : « Le chef du CSI relit, et le message part. La prochaine fois, sa consigne interdira tout ajout médical. »

**Scène 14 — B5 Consolidation · 3:12–3:37 · A**
- Visuel : capture réelle : la zone de saisie de l'assistant, avec la question tapée mais non envoyée. Pendant le silence, rien ne bouge. À la réponse, une croix couvre le bouton d'envoi et l'étiquette « Décision de santé → protocole » apparaît.
- Écran : « Décision de santé → protocole, case de santé »
- VO : « Souleymane, le relais, veut demander : enfant de deux ans, fièvre depuis trois jours, que faire ? L'assistant peut-il l'aider ? » *(silence, 3 s)* « Non. Même sans nom, c'est une décision de santé. Vous appliquez le protocole. Et l'enfant vient à la case de santé. »

**Scène 15 — B6 Clôture · 3:37–3:45 · B (carte de rappel, panneau 1)**
- Visuel : carte de rappel, panneau 1 : la promesse ; en bas, le classeur referme l'intercalaire « Règles ».
- Écran : « À la fin de cette leçon, vous saurez séparer ce que l'IA prépare de ce que vous décidez. »
- VO : « Rahila a pris l'enfant en charge, selon le protocole. L'IA prépare seulement sa causerie. »

**Scène 16 — B6 Clôture · 3:45–3:57 · B (carte de rappel)**
- Visuel : carte de rappel, panneau 2 : trois points révélés au rythme de la voix ; le dernier reste affiché pendant le titre de l'exercice.
- Écran : « 1. L'IA prépare, vous décidez » « 2. Aucune donnée de patient » « 3. Source officielle d'abord »
- VO : « L'IA prépare, vous décidez. Aucune donnée de patient. La source officielle d'abord. Classez vos demandes avec le test des trois questions. »

#### Captures à fournir par l'owner

| Scène | Outil · appareil | Gestes exacts | Texte exact à taper | Durée utile | À masquer |
|---|---|---|---|---|---|
| 4 | Assistant retenu (Gemini conseillé), version gratuite, interface en français · téléphone Android | Ouvrir l'application, démarrer une nouvelle conversation, ne rien taper ; laisser l'écran immobile. | Aucun | 12 s | Photo de profil, nom du compte, historique |
| 10–11 | Même assistant · même téléphone | Nouvelle conversation ; taper le texte ; envoyer ; attendre la fin de la réponse sans faire défiler trop vite. | « Rédige un message WhatsApp court, en français simple, pour les mères du quartier. Objet : séance de vaccination, jeudi à 9 h, au CSI. Ajoute une phrase sur l'importance des vaccins. Cinq lignes au plus. » | 25 s (frappe accélérée au montage) + 12 s de réponse | Compte, historique |
| 12 | Galerie photo + application de notes · même téléphone | Ouvrir la photo de la fiche officielle (voir 2.6) ; ouvrir la note où la réponse a été collée ; supprimer la phrase santé de l'IA ; taper à la place la phrase de la fiche, mot pour mot. | La phrase exacte de la fiche officielle | 20 s | Tout nom, numéro ou cachet nominatif sur la fiche |
| 13 | WhatsApp · même téléphone | Dans un groupe de test créé pour l'occasion (« Test causerie », un seul autre participant consentant), coller le message final et l'envoyer. | Le message final de la scène 12 | 8 s | Nom du groupe, numéros, photos de profil |
| 14 | Assistant retenu · même téléphone | Nouvelle conversation ; taper la phrase **sans l'envoyer** ; laisser l'écran immobile. | « Enfant de 2 ans, fièvre depuis 3 jours, que faire ? » | 10 s | Compte, historique |

#### Notes de script

- Prononciation : « CSI » se dit « cé-esse-i » ; « OMS » se dit « o-emme-esse ». « ASC » n'apparaît qu'à l'écran, sur le badge.
- Scène 4 : recopier dans l'annotation le texte exact de l'avertissement affiché sous la zone de saisie (ex. « … peut faire des erreurs … »). Si l'outil n'affiche plus d'avertissement, supprimer la phrase « L'outil l'écrit lui-même » et garder le reste. [à vérifier au moment de la production]
- Scène 8 : l'OMS a publié en janvier 2024 des orientations intitulées *Ethics and governance of artificial intelligence for health: guidance on large multi-modal models* ; elles décrivent le « biais d'automatisation », c'est-à-dire trop faire confiance à la machine. Afficher « OMS, 2024 ». Aucun chiffre.
- Scènes 10 à 12 : la consigne de la démo demande volontairement « une phrase sur l'importance des vaccins ». Elle sert à montrer le problème. La consigne à copier de la fiche est la version corrigée, qui fournit la phrase officielle et interdit tout autre ajout. Quelle que soit la phrase produite par l'IA, on la traite comme « à vérifier » : ne jamais dire à l'écran qu'elle est fausse si elle ne l'est pas ; le point est qu'elle ne vient pas de la fiche.
- Scène 14 : la question est tapée mais jamais envoyée. Elle ne contient ni nom ni lieu, et ce n'est pas un vrai cas.
- Termes nouveaux : « consigne » (scène 10, glosé « votre demande écrite ») et « hallucination » (scène 8, glosé puis redit : « elle invente, sans prévenir »). Aucun autre terme technique.
- Adaptation EN : « case de santé » = *health post* ; « relais communautaire » = *community relay volunteer* ; « CSI » = *integrated health centre (CSI)* ; « causerie » = *health talk* ; « l'IA tient le stylo » = *AI holds the pen*.
- Adaptation HA / DJE : employer les termes en usage dans le système de santé nigérien pour case de santé, CSI et relais, validés par un agent de santé locuteur. Si l'image du stylo ne passe pas, dire « l'IA écrit, vous décidez ». « Hallucination » : garder une glose simple (« une réponse fausse, dite avec assurance ») plutôt qu'un mot calqué.

### Leçon 2 — Préparer un message de sensibilisation clair (`sa2`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez adapter un message officiel à votre public. »
- **Cas réel (B1 → B6)** : Souleymane, relais communautaire, anime samedi une causerie sur le paludisme pour les mères du village, sous l'arbre à palabres, avant la saison des pluies. La fiche officielle du programme est juste, mais écrite pour des soignants. Enjeu : que les mères retiennent deux gestes, la moustiquaire chaque nuit et la case de santé sans attendre en cas de fièvre de l'enfant. B6 (champ `example`) : samedi, les mères répondent juste aux trois questions de Souleymane ; son texte porte le tampon du chef du CSI.
- **Unités de notion (B3)** : 1. Partir du message officiel — vous donnez à l'IA les phrases clés de la fiche (programme national, CSI, OMS, UNICEF) ; elle reformule, elle n'invente rien. · 2. Un public, une action, un format — qui écoute, quel geste fera-t-il après, et sous quelle forme (causerie avec questions, message vocal, crieur, radio communautaire). · 3. Relire avec la fiche à côté — chaque phrase de santé doit se retrouver dans la fiche ; sinon on la retire ou on la fait valider ; et une phrase exacte peut rester obscure.
- **Démo (B4)** : assistant (même outil qu'en leçon 1) sur téléphone. 1. Souleymane prépare sa consigne : message officiel, public, lieu, attentes, et la règle « rien de médical en plus ». 2. Il colle les deux messages de la fiche et envoie. 3. La réponse : un plan de causerie en trois parties, trois questions, un message vocal de trente secondes. 4. Il relit, la fiche à côté : une phrase absente de la fiche est barrée, ou soumise au chef du CSI. 5. Issoufou valide ; Souleymane recopie le texte dans son cahier de relais. Résultat à l'écran : un texte court, deux gestes, trois questions, tampon « Validé ».
- **Consolidation (B5)** : prédiction. Une première version disait : « Le Plasmodium est transmis par l'anophèle femelle. » La phrase est exacte : la gardez-vous pour les mères ? Réponse : non. Exacte, mais pas claire pour ce public : on demande à l'IA des mots de tous les jours, puis on revérifie avec la fiche.
- **Consigne à copier** :

```text
Tu aides un relais communautaire au Niger à préparer une causerie.
Message officiel, à ne pas changer sur le fond : « [phrases clés de la fiche officielle] »
Public : [mères d'enfants de moins de cinq ans]. Lieu : [sous l'arbre à palabres].
Écris : 1. un plan de causerie en 3 parties ; 2. trois questions pour vérifier la compréhension ; 3. un message vocal de 30 secondes.
Mots de tous les jours, phrases courtes. N'ajoute aucune information médicale absente du message officiel.
```

- **Exercice** : « Adaptez un message officiel pour votre prochaine causerie » — 1. Choisissez une fiche officielle remise par votre CSI ou votre programme (paludisme, nutrition, vaccination ou hygiène). 2. Utilisez la consigne pour obtenir un plan, trois questions et un message vocal. 3. Surlignez dans la fiche chaque phrase reprise, barrez le reste, puis faites valider par le chef du CSI.
- **Carte de rappel** : 1. Le message officiel d'abord · 2. Un public, une action · 3. Tout se retrouve dans la fiche
- **Quiz** *(5 questions ; chaque point de la carte de rappel est couvert)* :
  1. Avant de demander un message de sensibilisation à l'IA, que lui donnez-vous ? — A) Rien : elle connaît le paludisme B) Les phrases clés de la fiche officielle C) Les noms des mères du village D) La photo d'un enfant malade — **Réponse : B**
  2. « Un public, une action » veut dire : — A) un message par village B) une causerie par mois C) savoir qui écoute et quel geste il fera après D) un seul relais par campagne — **Réponse : C**
  3. L'assistant ajoute une phrase de santé absente de la fiche. Que faites-vous ? — A) Vous la gardez si elle semble juste B) Vous la mettez en gras C) Vous demandez une version plus longue D) Vous la retirez, ou vous la faites valider par le chef du CSI — **Réponse : D**
  4. « Le Plasmodium est transmis par l'anophèle femelle. » Pour une causerie avec des mères, cette phrase est : — A) à garder telle quelle, car elle est exacte B) fausse, donc à supprimer C) exacte mais pas claire : à reformuler en mots de tous les jours, puis à revérifier D) à traduire en anglais — **Réponse : C**
  5. Quel format convient pour prévenir tout le village d'une séance ? — A) Un message vocal ou l'annonce du crieur B) Un tableau de calcul C) Un long document PDF D) Un courriel — **Réponse : A**
- **Marques citées** : Gemini (ou l'assistant retenu pour les captures). Organismes cités : OMS, UNICEF.

#### Script v1 (à valider par l'owner)

Durée estimée : 4:00 (dont 3 s de mention légale, Partie 1) · Mots de voix off : 390

**Scène 1 — B1 Accroche · 0:00–0:09 · E**
- Visuel : l'intercalaire « Message » s'ouvre sur une illustration en aplats : Souleymane sous l'arbre à palabres, la fiche officielle à la main ; des mères assises en cercle.
- Écran : « Souleymane · relais communautaire · causerie de samedi »
- VO : « Leçon précédente : l'IA prépare, vous décidez. Ce samedi, Souleymane anime une causerie sur le paludisme. »

**Scène 2 — B1 Accroche · 0:09–0:18 · B**
- Visuel : carte promesse, texte révélé en deux temps.
- Écran : « À la fin de cette leçon, vous saurez adapter un message officiel à votre public. »
- VO : « À la fin de cette leçon, vous saurez adapter un message officiel à votre public. » *(promesse dite à 0:09)*

**Scène 3 — B2 Cadrage · 0:18–0:27 · B**
- Visuel : carte, surtitre « Le malentendu » ; la demande « Écris un message sur le paludisme » s'affiche dans une bulle vide de tout contenu.
- Écran : « Le malentendu · “Écris un message sur le paludisme” »
- VO : « Sa fiche est juste, mais écrite pour des soignants. Le malentendu : demander un message à l'IA suffit. »

**Scène 4 — B2 Cadrage · 0:27–0:45 · A**
- Visuel : capture réelle : l'assistant répond à la demande vague par un texte général ; un cadre entoure la réponse, puis l'étiquette « D'où vient ce contenu ? » apparaît.
- Écran : « D'où vient ce contenu ? »
- VO : « Regardez. Sans fiche, l'assistant écrit à partir de textes lus ailleurs. Rien ne dit que c'est le message de votre programme. Ni vos dates, ni vos lieux, ni vos campagnes. »

**Scène 5 — B3 Notion · 0:45–1:12 · C**
- Visuel : schéma « circuit » : Fiche officielle → Consigne → IA (reformule) → Message adapté ; une branche « IA invente » s'affiche puis reçoit une croix. Pendant l'exemple, une étiquette « OMS et UNICEF » entre sous la fiche.
- Écran : « 1 · Partir du message officiel » « OMS et UNICEF : allaitement exclusif pendant 6 mois »
- VO : « Première idée : partez du message officiel. Vous collez dans la consigne les phrases clés de la fiche. L'IA les reformule, elle n'invente rien. Exemple : l'OMS et l'UNICEF recommandent l'allaitement maternel exclusif pendant six mois. Vous donnez cette phrase. L'IA l'adapte, sans changer le sens. »

**Scène 6 — B3 Notion · 1:12–1:40 · C**
- Visuel : trois cases entrent l'une après l'autre : « Public » (pictogramme de mères), « Action » (moustiquaire), « Format » (bulle de causerie, micro, crieur, poste de radio).
- Écran : « 2 · Un public, une action, un format » « Mères · Moustiquaire chaque nuit · Causerie »
- VO : « Deuxième idée : un public, une action, un format. Qui vous écoute ? Que fera cette personne après la causerie ? Une seule action claire par message. Puis le format : causerie avec questions, message vocal, crieur ou radio communautaire. Pour Souleymane : les mères, la moustiquaire chaque nuit, et une causerie. »

**Scène 7 — B3 Notion · 1:40–2:12 · B**
- Visuel : carte, surtitre « 3 · Relire avec la fiche à côté » ; un surligneur passe sur une ligne de la fiche ; en bas, la phrase-clé.
- Écran : « 3 · Relire avec la fiche à côté » « La fiche est le juge, pas l'IA »
- VO : « Troisième idée : relisez avec la fiche à côté. Chaque phrase de santé doit s'y retrouver. Une phrase absente de la fiche ? Vous la retirez, ou vous la faites valider par le chef du CSI. Dit autrement : la fiche est le juge, pas l'IA. Vérifiez aussi les mots : juste ne veut pas dire clair. »

**Scène 8 — B4 Application · 2:12–2:23 · G**
- Visuel : carte de consigne sur fond clair, en deux panneaux successifs (la consigne complète figure dans la fiche, sous la vidéo).
- Écran : « Message officiel : [phrases de la fiche] · Public : [ … ] · Lieu : [ … ] » « Écris : plan en 3 parties · 3 questions · vocal de 30 s · rien de médical en plus »
- VO : « Voici sa consigne : message officiel, public, lieu, puis ce qu'il attend. Et une règle : rien de médical en plus. »

**Scène 9 — B4 Application · 2:23–2:37 · A**
- Visuel : capture réelle : nouvelle conversation ; la consigne est collée, les deux messages de la fiche sont encadrés ; envoi.
- Écran : « Les deux messages de la fiche, collés tels quels »
- VO : « Il colle les deux messages de la fiche. Moustiquaire chaque nuit. Fièvre de l'enfant : la case de santé, sans attendre. Il envoie. »

**Scène 10 — B4 Application · 2:37–2:50 · A**
- Visuel : capture réelle : la réponse défile lentement ; trois cadres successifs : le plan, les questions, le message vocal.
- Écran : « Plan · 3 questions · message vocal »
- VO : « La réponse arrive : un plan en trois parties, trois questions, un message vocal. Les deux gestes sont là. »

**Scène 11 — B4 Application · 2:50–3:03 · A**
- Visuel : capture réelle : la réponse collée dans l'application de notes, à côté de la photo de la fiche ; une phrase absente de la fiche est barrée (croix).
- Écran : « Absente de la fiche → barrée ou soumise au CSI »
- VO : « Souleymane relit, la fiche à côté. Une phrase n'y figure pas. Il la barre, ou la soumet au chef du CSI. »

**Scène 12 — B4 Application · 3:03–3:12 · A**
- Visuel : capture réelle : le texte final dans l'application de notes ; le tampon « Validé · chef du CSI » se pose.
- Écran : « Validé · chef du CSI »
- VO : « Issoufou, le chef du CSI, valide le texte. Souleymane le recopie dans son cahier de relais. »

**Scène 13 — B5 Consolidation · 3:12–3:37 · A**
- Visuel : capture réelle : la phrase de la première version est surlignée ; silence ; puis la relance tapée à l'écran et la nouvelle formulation, encadrée d'une coche.
- Écran : « Exact ≠ clair → “des mots de tous les jours” »
- VO : « Une première version disait : le Plasmodium est transmis par l'anophèle femelle. C'est exact. Vous gardez cette phrase ? » *(silence, 3 s)* « Non. Exacte, mais pas claire pour ce public. Souleymane demande : remplace chaque mot technique par des mots de tous les jours. »

**Scène 14 — B6 Clôture · 3:37–3:43 · B (carte de rappel, panneau 1)**
- Visuel : carte de rappel, panneau 1 : la promesse ; l'intercalaire « Message » se referme.
- Écran : « À la fin de cette leçon, vous saurez adapter un message officiel à votre public. »
- VO : « Samedi, les mères répondent juste aux trois questions de Souleymane. »

**Scène 15 — B6 Clôture · 3:43–3:57 · B (carte de rappel)**
- Visuel : carte de rappel, panneau 2 : trois points révélés au rythme de la voix.
- Écran : « 1. Le message officiel d'abord » « 2. Un public, une action » « 3. Tout se retrouve dans la fiche »
- VO : « Le message officiel d'abord. Un public, une action, un format. Chaque phrase se retrouve dans la fiche. Adaptez un message officiel pour votre prochaine causerie. »

#### Captures à fournir par l'owner

| Scène | Outil · appareil | Gestes exacts | Texte exact à taper | Durée utile | À masquer |
|---|---|---|---|---|---|
| 4 | Assistant retenu, version gratuite · téléphone Android | Nouvelle conversation ; taper ; envoyer ; laisser la réponse s'afficher. | « Écris un message de sensibilisation sur le paludisme pour des mères. » | 18 s | Compte, historique |
| 9–10 | Même assistant · même téléphone | Nouvelle conversation ; coller la consigne complète ; envoyer ; faire défiler lentement la réponse jusqu'au message vocal. | La consigne à copier, avec : message officiel = « Dormez sous une moustiquaire imprégnée chaque nuit. Si votre enfant a de la fièvre, amenez-le à la case de santé sans attendre. » [à remplacer par le texte exact de la fiche officielle, voir 2.6] ; public = « mères d'enfants de moins de cinq ans » ; lieu = « sous l'arbre à palabres » | 30 s | Compte, historique |
| 11–12 | Application de notes + galerie · même téléphone | Coller la réponse dans une note ; ouvrir la photo de la fiche à côté (écran partagé ou alternance) ; barrer la phrase absente de la fiche ; afficher le texte final. | Aucun | 25 s | Tout nom ou cachet nominatif sur la fiche |
| 13 | Assistant retenu · même téléphone | Nouvelle conversation ; taper la première demande ; envoyer ; puis taper la relance ; envoyer. | 1) « Explique en deux phrases comment se transmet le paludisme. » 2) « Remplace chaque mot technique par des mots de tous les jours. » | 25 s | Compte, historique |

#### Notes de script

- Prononciation : « Plasmodium » se dit « plas-mo-di-omme » ; « anophèle » se dit « a-no-fèle ».
- Scène 9 : les deux messages de la démo reprennent des messages de prévention courants (moustiquaire imprégnée chaque nuit ; consulter sans attendre quand un enfant a de la fièvre). La vidéo doit pourtant montrer le **texte exact** de la fiche officielle remise par le CSI ou le programme national de lutte contre le paludisme ; adapter la voix off si la formulation diffère. [à vérifier au moment de la production]
- Scène 5 : l'OMS et l'UNICEF recommandent l'allaitement maternel exclusif pendant les six premiers mois ; afficher « OMS et UNICEF », sans autre chiffre.
- Scène 11 : la phrase barrée dépend de la réponse réelle. Si l'IA n'ajoute rien, montrer les coches et dire : « Chaque phrase se retrouve dans la fiche. Il coche. » Ne jamais dire qu'une phrase est fausse : elle est seulement absente de la fiche.
- Scène 13 : si la réponse réelle n'emploie pas ces mots savants, afficher la phrase en carte retapée et le préciser dans la voix off (« Une première version pourrait dire… »).
- Termes : aucun nouveau terme technique ; « consigne » est déjà connu (leçon 1).
- Adaptation EN : « arbre à palabres » = *palaver tree* ; « crieur » = *town crier* ; « radio communautaire » = *community radio* ; « causerie » = *health talk*.
- Adaptation HA / DJE : employer le mot local en usage chez les relais pour la causerie et pour le crieur public. En scène 13, garder « Plasmodium » et « anophèle » tels quels (c'est le but), puis faire reformuler la phrase simple par le traducteur, en mots de tous les jours.

### Leçon 3 — Traduire en haoussa et en zarma, avec validation humaine (`sa3`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez obtenir un premier jet traduit et le faire valider. »
- **Cas réel (B1 → B6)** : au village, les mères parlent zarma ou haoussa. Le message vocal validé en leçon 2 doit exister dans les deux langues. Rahila (zarma) et Souleymane (haoussa) utilisent l'IA pour un premier jet. Enjeu : un mot mal traduit peut changer le sens d'un message de santé. B6 (champ `example`) : Rahila fait de même en zarma ; chacun enregistre le message de sa propre voix ; les deux versions validées partent au groupe WhatsApp des mères.
- **Unités de notion (B3)** : 1. L'IA donne un premier jet — un point de départ, jamais un texte prêt ; la qualité varie selon la langue et l'outil ; le zarma, moins présent sur Internet que le haoussa, expose à davantage d'erreurs [à vérifier au moment de la production]. · 2. Retraduire pour repérer les écarts — dans une nouvelle conversation, faire retraduire en français et comparer avec l'original ; un écart est un signal, pas une preuve. · 3. Deux validations humaines — un locuteur natif (le texte sonne juste au village) et un professionnel de santé (le sens médical n'a pas bougé) ; les mots validés entrent dans un lexique réutilisé.
- **Démo (B4)** : assistant (même outil) sur téléphone. 1. Rahila tape la consigne de traduction en haoussa, avec le lexique déjà validé, et demande la liste des mots douteux. 2. Le premier jet arrive ; Souleymane entoure les mots signalés. 3. Dans une nouvelle conversation, Rahila demande la retraduction en français ; la comparaison fait apparaître un écart. 4. Souleymane corrige le haoussa avec ses propres mots et lit la phrase à voix haute. 5. Issoufou vérifie le sens avec lui ; tampon « Validé » ; le mot corrigé rejoint le lexique. Résultat à l'écran : le message en haoussa validé, et le lexique mis à jour.
- **Consolidation (B5)** : prédiction. La retraduction revient parfaite, mot pour mot. Peut-on diffuser ? Réponse : non. Elle ne dit pas si la phrase sonne naturelle au village, ni si l'orthographe est juste : un locuteur et un soignant valident, toujours.
- **Consigne à copier** :

```text
Traduis ce message en [haoussa du Niger / zarma] pour des habitants d'un village : mots simples, phrases courtes.
Utilise ces termes validés : [mot français = terme validé ; …].
Message : « [message validé en français] »
Ensuite, liste les mots dont tu n'es pas sûr.

(Puis, dans une NOUVELLE conversation :)
Traduis ce texte en français, phrase par phrase, sans l'améliorer : « [texte traduit] »
```

- **Exercice** : « Faites traduire, retraduire, puis valider votre message » — 1. Traduisez en haoussa ou en zarma le message de la leçon 2, avec la consigne. 2. Retraduisez-le dans une nouvelle conversation et notez chaque écart. 3. Faites valider par un locuteur et par un professionnel de santé ; ajoutez leurs corrections à votre lexique.
- **Carte de rappel** : 1. L'IA donne un premier jet · 2. Retraduire pour repérer · 3. Locuteur et soignant valident
- **Quiz** *(5 questions ; chaque point de la carte de rappel est couvert)* :
  1. Le texte traduit en haoussa par l'IA est : — A) prêt à diffuser B) un premier jet à faire valider C) forcément faux D) inutile — **Réponse : B**
  2. À quoi sert la retraduction en français ? — A) À prouver que la traduction est juste B) À corriger l'orthographe C) À repérer des écarts de sens, qu'un humain vérifie ensuite D) À remplacer le locuteur — **Réponse : C**
  3. Qui valide une traduction avant sa diffusion ? — A) Un locuteur natif et un professionnel de santé B) L'IA elle-même C) Un deuxième assistant D) Personne, si la retraduction est parfaite — **Réponse : A**
  4. Pourquoi demander la retraduction dans une nouvelle conversation ? — A) Pour aller plus vite B) Parce que l'application l'exige C) Pour économiser des données D) Pour que l'IA ne recopie pas le texte français qu'elle a déjà vu — **Réponse : D**
  5. À quoi sert le lexique ? — A) À traduire tout seul B) À remplacer le locuteur C) À garder les mots validés et à les réutiliser à chaque message D) À compter les mots — **Réponse : C**
- **Marques citées** : Gemini (ou l'assistant retenu pour les captures), WhatsApp.

#### Script v1 (à valider par l'owner)

Durée estimée : 4:00 (dont 3 s de mention légale, Partie 1) · Mots de voix off : 366

**Scène 1 — B1 Accroche · 0:00–0:09 · E**
- Visuel : l'intercalaire « Langues » s'ouvre sur une illustration : Rahila et Souleymane devant la case de santé, un téléphone entre eux ; deux bulles « zarma » et « haoussa ».
- Écran : « Rahila (zarma) · Souleymane (haoussa) · même village »
- VO : « Leçon précédente : chaque phrase vient de la fiche. Aujourd'hui, le message passe en haoussa et en zarma. »

**Scène 2 — B1 Accroche · 0:09–0:18 · B**
- Visuel : carte promesse, texte révélé en deux temps.
- Écran : « À la fin de cette leçon, vous saurez obtenir un premier jet traduit et le faire valider. »
- VO : « À la fin de cette leçon, vous saurez obtenir un premier jet traduit et le faire valider. » *(promesse dite à 0:09)*

**Scène 3 — B2 Cadrage · 0:18–0:27 · B**
- Visuel : carte, surtitre « Le malentendu » ; « Rapide = juste ? » ; le signe « = » est barré.
- Écran : « Le malentendu · Rapide = juste ? »
- VO : « Au village, on parle les deux langues. Le malentendu : traduction rapide égale traduction juste. »

**Scène 4 — B2 Cadrage · 0:27–0:45 · A**
- Visuel : capture réelle : la traduction en haoussa s'affiche d'un bloc ; un cadre l'entoure, puis l'étiquette « Aucun doute signalé ».
- Écran : « Aucun doute signalé »
- VO : « Regardez : la réponse en haoussa arrive en quelques secondes, sans aucun doute affiché. Pourtant, la qualité varie selon la langue. Et rien ne vous dit où sont les erreurs. »

**Scène 5 — B3 Notion · 0:45–1:10 · C**
- Visuel : une feuille marquée « brouillon » glisse vers une loupe « relecture » ; deux jauges de langue côte à côte, sans chiffre, avec les libellés « haoussa » et « zarma ».
- Écran : « 1 · Un premier jet, jamais diffusé tel quel »
- VO : « Première idée : l'IA donne un premier jet. C'est un point de départ, jamais un texte prêt. La qualité varie selon la langue et l'outil. Le zarma est moins présent sur Internet que le haoussa. Attendez-vous à davantage d'erreurs. »

**Scène 6 — B3 Notion · 1:10–1:38 · C**
- Visuel : schéma aller-retour : Français → Haoussa (conversation 1) → Français (conversation 2) ; les deux textes français se superposent ; un mot manquant clignote une fois, entouré.
- Écran : « 2 · Retraduire : français → haoussa → français »
- VO : « Deuxième idée : la retraduction. Vous demandez, dans une nouvelle conversation, de retraduire le texte en français. Puis vous comparez avec votre original. Autrement dit, vous faites le chemin inverse pour voir ce qui s'est perdu. Un mot disparu, un sens qui glisse : c'est un signal. Attention : un signal, pas une preuve. »

**Scène 7 — B3 Notion · 1:38–2:12 · B**
- Visuel : carte, surtitre « 3 · Deux validations humaines » ; deux pictogrammes entrent : une bulle « locuteur », une croix de santé « soignant » ; en bas, une petite liste « lexique ».
- Écran : « 3 · Un locuteur + un soignant » « Lexique : les mots validés »
- VO : « Troisième idée : deux validations humaines, toujours. Un locuteur natif vérifie que le texte sonne juste au village. Un professionnel de santé vérifie que le sens médical n'a pas bougé. Les mots validés vont dans un lexique, une simple liste : fièvre, moustiquaire imprégnée, case de santé. Vous la réutilisez à chaque message. »

**Scène 8 — B4 Application · 2:12–2:26 · A**
- Visuel : capture réelle : nouvelle conversation ; la consigne de traduction est collée ; le lexique est encadré ; envoi.
- Écran : « Consigne + lexique validé »
- VO : « Rahila tape la consigne : traduire en haoussa, avec le lexique déjà validé. Elle demande aussi la liste des mots douteux. »

**Scène 9 — B4 Application · 2:26–2:38 · A**
- Visuel : capture réelle : le premier jet en haoussa, puis la liste des mots douteux ; un cercle entoure chaque mot signalé, l'un après l'autre.
- Écran : « Mots signalés comme douteux »
- VO : « Le premier jet arrive, avec des mots signalés comme douteux. Souleymane les entoure. »

**Scène 10 — B4 Application · 2:38–2:52 · A**
- Visuel : capture réelle : nouvelle conversation, retraduction en français ; puis le texte retraduit et l'original côte à côte dans l'application de notes ; l'écart est encadré.
- Écran : « Retraduction ≠ original : un mot a disparu »
- VO : « Dans une nouvelle conversation, elle demande la retraduction en français. Une différence apparaît : un mot important a disparu. »

**Scène 11 — B4 Application · 2:52–3:04 · A**
- Visuel : capture réelle : l'application de notes ; la phrase en haoussa corrigée est tapée ; coche.
- Écran : « Corrigé par un locuteur »
- VO : « Souleymane corrige le haoussa avec ses mots à lui. Il lit la phrase à voix haute : elle sonne juste. »

**Scène 12 — B4 Application · 3:04–3:12 · A**
- Visuel : capture réelle : la note « Lexique » ; une ligne s'ajoute ; le tampon « Validé · chef du CSI » se pose.
- Écran : « Sens validé · lexique mis à jour »
- VO : « Issoufou vérifie le sens avec lui. Tampon, et le mot rejoint le lexique. »

**Scène 13 — B5 Consolidation · 3:12–3:37 · A**
- Visuel : capture réelle : une retraduction qui reprend l'original mot pour mot, coches sur chaque phrase ; silence ; puis une croix sur le bouton « diffuser » dessiné en surimpression et l'étiquette « locuteur + soignant ».
- Écran : « Retraduction parfaite ≠ texte validé »
- VO : « La retraduction revient parfaite, mot pour mot. Vous pouvez diffuser ? » *(silence, 3 s)* « Non. Elle ne dit pas si la phrase sonne naturelle au village. Ni si l'orthographe est juste. Locuteur et soignant valident, toujours. »

**Scène 14 — B6 Clôture · 3:37–3:44 · B (carte de rappel, panneau 1)**
- Visuel : carte de rappel, panneau 1 : la promesse ; deux ondes sonores (haoussa, zarma) sous le classeur, qui referme l'intercalaire « Langues ».
- Écran : « À la fin de cette leçon, vous saurez obtenir un premier jet traduit et le faire valider. »
- VO : « Rahila fait de même en zarma. Puis chacun enregistre le message. »

**Scène 15 — B6 Clôture · 3:44–3:57 · B (carte de rappel)**
- Visuel : carte de rappel, panneau 2 : trois points révélés au rythme de la voix.
- Écran : « 1. L'IA donne un premier jet » « 2. Retraduire pour repérer » « 3. Locuteur et soignant valident »
- VO : « L'IA donne un premier jet. La retraduction signale, sans prouver. Un locuteur et un soignant valident. Faites traduire, retraduire, puis valider votre message. »

#### Captures à fournir par l'owner

| Scène | Outil · appareil | Gestes exacts | Texte exact à taper | Durée utile | À masquer |
|---|---|---|---|---|---|
| 4 | Assistant retenu, version gratuite · téléphone Android | Nouvelle conversation ; taper ; envoyer ; laisser la réponse s'afficher. | « Traduis en haoussa : Dormez sous une moustiquaire imprégnée chaque nuit. » | 15 s | Compte, historique |
| 8–9 | Même assistant · même téléphone | Nouvelle conversation ; coller la consigne de traduction remplie ; envoyer ; faire défiler jusqu'à la liste des mots douteux. | La consigne à copier, avec : langue = « haoussa du Niger » ; termes validés = ceux fournis par le locuteur (voir 2.6) ; message = le message vocal validé en leçon 2 | 25 s | Compte, historique |
| 10 | Même assistant + application de notes | Nouvelle conversation ; coller la consigne de retraduction avec le texte haoussa obtenu ; envoyer ; coller la retraduction dans une note, sous l'original français. | « Traduis ce texte en français, phrase par phrase, sans l'améliorer : » + le texte haoussa | 15 s | Compte, historique |
| 11–12 | Application de notes | Taper la phrase haoussa corrigée fournie par le locuteur ; ouvrir la note « Lexique » et ajouter une ligne. | Texte fourni par le locuteur haoussaphone ; ligne de lexique « [mot français] = [terme validé] » | 20 s | Aucun nom de personne |
| 13 | Même assistant | Nouvelle conversation ; faire retraduire une phrase très simple, pour obtenir une retraduction identique à l'original. | « Traduis ce texte en français, phrase par phrase, sans l'améliorer : » + une phrase haoussa simple validée | 20 s | Compte, historique |

#### Notes de script

- Prononciation : « haoussa » se dit « a-ou-sa » ; « zarma » se dit « zar-ma » ; « retraduction » sans liaison particulière.
- Unité 1 : l'écart de qualité entre haoussa et zarma est une attente raisonnable, pas un résultat mesuré. Avant l'enregistrement, tester le même message dans les deux langues avec l'assistant retenu ; si le zarma n'est pas plus faible, retirer la phrase « Attendez-vous à davantage d'erreurs » et dire seulement que la qualité varie. [à vérifier au moment de la production]
- Scènes 9 et 10 : le nombre de mots douteux et l'écart repéré dépendent de la réponse réelle ; annoter ce que la capture montre, sans l'inventer. Tout texte haoussa ou zarma affiché comme « corrigé » ou « validé » doit venir d'un locuteur réel (voir 2.6).
- Écriture : le haoussa du Niger s'écrit en caractères latins avec des lettres spéciales (ɓ, ɗ, ƙ, ƴ) ; vérifier leur affichage dans les captures et les sous-titres. L'IA peut produire un vocabulaire du haoussa du Nigeria : le locuteur l'adapte à l'usage nigérien. Pour le zarma, suivre l'orthographe usuelle au Niger. [à vérifier au moment de la production]
- Termes nouveaux : « retraduction » (scène 6, redite « faire le chemin inverse ») et « lexique » (scène 7, glosé « une simple liste »).
- Adaptation EN : « retraduction » = *back-translation* ; « lexique » = *glossary* ; « premier jet » = *first draft*.
- Adaptation HA / DJE : la leçon parle de traduire vers la langue de la vidéo elle-même. Dans la version HA, garder la démo vers le haoussa ; dans la version DJE, l'owner peut refaire les captures 8 à 12 vers le zarma (même consigne), à condition qu'un locuteur zarma valide chaque texte affiché.

### Leçon 4 — Organiser l'information pour référer, selon le protocole (`sa4`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez tirer du protocole un aide-mémoire de référence. »
- **Cas réel (B1 → B6)** : pendant la dernière saison des pluies, plusieurs fiches de référence sont arrivées incomplètes au CSI (heure, signes observés ou gestes déjà faits non notés ; cas fictif). Issoufou demande à Rahila un aide-mémoire d'une page, tiré du protocole national, pour ne rien oublier avant de référer un enfant. Enjeu : l'enfant référé arrive avec une information complète, et le CSI agit sans perdre de temps. B6 (champ `example`) : l'aide-mémoire validé et daté rejoint le registre de la case de santé ; la fiche de référence suivante arrive complète.
- **Unités de notion (B3)** : 1. Le protocole décide, l'IA met en forme — vous lui donnez le texte officiel (par exemple la PCIME communautaire, prise en charge intégrée des maladies de l'enfant) ; elle le range, elle ne classe aucun enfant ; si un formulaire officiel existe, c'est lui qu'on remplit. · 2. Rien qui permette de reconnaître un patient — ni nom, ni numéro, ni photo ; l'âge et le village ensemble suffisent parfois ; au Niger, une loi protège les données personnelles et la HAPDP veille à son respect. · 3. Comparer chaque ligne, puis faire valider — l'IA peut oublier ou ajouter un élément ; ce qui n'est pas dans l'extrait sort de l'aide-mémoire ; le chef du CSI valide et date ; on recommence si le protocole change.
- **Démo (B4)** : assistant (même outil) sur téléphone, puis application de notes. 1. Rahila colle l'extrait officiel sur la référence, obtenu au CSI, sans aucune donnée de patient, puis sa consigne en trois parties. 2. L'aide-mémoire arrive : signes de danger, ce qu'il faut noter sur la fiche de référence, ce que l'accompagnant emporte. 3. Elle compare chaque ligne avec l'extrait : une ligne absente de l'extrait est retirée. 4. Un élément de l'extrait manque : elle le rétablit, mot pour mot. 5. Issoufou valide et date la page ; elle rejoint le registre. Résultat à l'écran : un aide-mémoire vierge d'une page, conforme à l'extrait, tamponné et daté.
- **Consolidation (B5)** : contre-exemple sous forme de question. Un collègue tape le prénom et le village d'un enfant, avec « convulsions, que faire ? ». Combien d'erreurs ? Réponse : deux. Il expose un patient, et il demande une décision à l'IA. Les convulsions figurent parmi les signes de danger de la PCIME : on applique le protocole, sans attendre.
- **Consigne à copier** :

```text
Voici un extrait du protocole national que j'applique : « [texte exact de l'extrait, sans aucune donnée de patient] »
Range ce texte en aide-mémoire d'une page, en trois parties :
1. les signes de danger, recopiés mot pour mot ;
2. ce qu'il faut noter sur la fiche de référence ;
3. ce que l'accompagnant emporte.
N'ajoute rien qui ne soit pas dans l'extrait. Signale ce qui te paraît manquer, sans le compléter.
```

- **Exercice** : « Tirez un aide-mémoire de votre protocole et faites-le valider » — 1. Demandez à votre CSI l'extrait officiel du protocole qui porte sur la référence. 2. Utilisez la consigne, puis comparez chaque ligne avec l'extrait : retirez les ajouts, rétablissez les oublis. 3. Faites valider et dater la page par le chef du CSI avant de l'afficher.
- **Carte de rappel** : 1. Le protocole décide · 2. Aucun patient reconnaissable · 3. Comparer, faire valider
- **Quiz** *(5 questions ; chaque point de la carte de rappel est couvert)* :
  1. Dans cette leçon, quel est le rôle de l'IA ? — A) Classer l'état de l'enfant B) Décider de la référence C) Mettre en forme le texte officiel que vous lui donnez D) Choisir un traitement avant le départ — **Réponse : C**
  2. Un formulaire officiel de référence existe. Que faites-vous ? — A) Vous le remplacez par la page produite par l'IA B) Vous le remplissez tel quel ; l'aide-mémoire sert seulement à ne rien oublier C) Vous le faites remplir par l'IA D) Vous ne l'utilisez plus — **Réponse : B**
  3. Laquelle de ces demandes respecte la règle des données ? — A) « Range cet extrait du protocole en aide-mémoire. » B) « [prénom], 18 mois, de [village], a de la fièvre : que faire ? » C) « Voici la photo de l'enfant : qu'en penses-tu ? » D) « Voici le numéro de la mère : rédige-lui un message. » — **Réponse : A**
  4. L'aide-mémoire contient une ligne qui n'est pas dans l'extrait officiel. Que faites-vous ? — A) Vous la gardez si elle semble utile B) Vous la mettez en gras C) Vous demandez à l'IA si elle est sûre D) Vous la retirez : seul l'extrait officiel compte, et le chef du CSI valide la page — **Réponse : D**
  5. Un collègue tape le prénom et le village d'un enfant, avec « convulsions, que faire ? ». Quelles sont ses erreurs ? — A) Aucune : c'est urgent B) Il expose un patient et demande une décision à l'IA ; il faut appliquer le protocole sans attendre C) Il aurait dû utiliser un autre assistant D) Il aurait dû écrire en haoussa — **Réponse : B**
- **Marques citées** : Gemini (ou l'assistant retenu pour les captures). Organismes cités : HAPDP (Niger).

#### Script v1 (à valider par l'owner)

Durée estimée : 4:00 (dont 3 s de mention légale, Partie 1) · Mots de voix off : 363

**Scène 1 — B1 Accroche · 0:00–0:09 · E**
- Visuel : l'intercalaire « Référence » s'ouvre sur une illustration : Issoufou au CSI, une fiche de référence à la main, plusieurs lignes vides (aucun nom visible).
- Écran : « Issoufou · chef du CSI · fiches de référence incomplètes »
- VO : « Leçon précédente : un locuteur et un soignant valident. Aujourd'hui, Issoufou reçoit des fiches de référence incomplètes. »

**Scène 2 — B1 Accroche · 0:09–0:18 · B**
- Visuel : carte promesse, texte révélé en deux temps.
- Écran : « À la fin de cette leçon, vous saurez tirer du protocole un aide-mémoire de référence. »
- VO : « À la fin de cette leçon, vous saurez tirer du protocole un aide-mémoire de référence. » *(promesse dite à 0:09)*

**Scène 3 — B2 Cadrage · 0:18–0:27 · B**
- Visuel : carte, surtitre « Le malentendu » ; la phrase entre puis reçoit une croix.
- Écran : « Le malentendu · “L'IA connaît déjà le protocole” »
- VO : « Il demande à Rahila un aide-mémoire d'une page. Le malentendu : l'IA connaît déjà votre protocole. »

**Scène 4 — B2 Cadrage · 0:27–0:45 · A**
- Visuel : capture réelle : la question posée à l'assistant, puis sa réponse **floutée** (seule la structure reste visible) ; deux étiquettes successives : « Quel document ? » puis « Quelle année ? ».
- Écran : « Quel document ? Quelle année ? »
- VO : « Elle répond avec assurance. Mais de quel document parle-t-elle ? De quelle année ? Votre protocole national peut être différent, et il est mis à jour. »

**Scène 5 — B3 Notion · 0:45–1:12 · C**
- Visuel : schéma : un document « Protocole national » entre dans un entonnoir « IA : met en forme » et ressort en page à trois parties ; à côté, une icône « Formulaire officiel » reste intacte, avec la mention « on le remplit tel quel ».
- Écran : « 1 · Le protocole décide, l'IA met en forme »
- VO : « Première idée : le protocole décide, l'IA met en forme. Vous lui donnez le texte officiel, par exemple la PCIME communautaire. C'est-à-dire la prise en charge intégrée des maladies de l'enfant. L'IA range ce texte. Elle ne classe aucun enfant. Et si un formulaire officiel existe, c'est lui que vous remplissez. »

**Scène 6 — B3 Notion · 1:12–1:38 · C**
- Visuel : une page vierge ; quatre pictogrammes barrés entrent l'un après l'autre (nom, numéro, photo, « âge + village ») ; en bas, un cadenas et la mention de la loi.
- Écran : « 2 · Aucun patient reconnaissable » « Loi sur les données personnelles · HAPDP »
- VO : « Deuxième idée : rien qui permette de reconnaître un patient. Ni nom, ni numéro, ni photo. Même l'âge et le village ensemble suffisent parfois à reconnaître quelqu'un. Au Niger, une loi protège les données personnelles. Une haute autorité, la HAPDP, veille à son respect. »

**Scène 7 — B3 Notion · 1:38–2:12 · B**
- Visuel : carte, surtitre « 3 · Comparer, puis faire valider » ; deux colonnes de lignes ; une ligne en trop reçoit une croix, une ligne manquante reçoit un signe « + » ; le tampon daté se pose.
- Écran : « 3 · Comparer chaque ligne, puis faire valider »
- VO : « Troisième idée : comparez chaque ligne avec le protocole, puis faites valider. L'IA peut oublier un signe de danger. Elle peut aussi en ajouter un, venu d'ailleurs. Dit simplement : ce qui n'est pas dans votre extrait sort de l'aide-mémoire. Enfin, le chef du CSI valide et date la page. Si le protocole change, on recommence. »

**Scène 8 — B4 Application · 2:12–2:26 · A**
- Visuel : capture réelle : nouvelle conversation ; l'extrait officiel est collé, puis la consigne ; un cadre souligne l'absence de toute donnée de patient ; envoi.
- Écran : « Extrait officiel · aucune donnée de patient »
- VO : « Rahila colle l'extrait officiel sur la référence, obtenu au CSI. Pas un seul patient dedans. Puis sa consigne en trois parties. »

**Scène 9 — B4 Application · 2:26–2:38 · A**
- Visuel : capture réelle : l'aide-mémoire s'affiche ; trois cadres successifs sur les trois parties.
- Écran : « Signes de danger · À noter · À emporter »
- VO : « L'aide-mémoire arrive : signes de danger, ce qu'il faut noter, ce que l'accompagnant emporte. »

**Scène 10 — B4 Application · 2:38–2:52 · A**
- Visuel : capture réelle : l'aide-mémoire collé dans l'application de notes, à côté de l'extrait ; une ligne absente de l'extrait est barrée (croix).
- Écran : « Absente de l'extrait → retirée »
- VO : « Rahila compare chaque ligne avec l'extrait. Une ligne n'y figure pas : elle la retire. »

**Scène 11 — B4 Application · 2:52–3:04 · A**
- Visuel : capture réelle : dans la note, un élément de l'extrait est retapé à sa place ; signe « + » et coche.
- Écran : « Oubli rétabli, mot pour mot »
- VO : « Un élément de l'extrait manque : elle le rétablit, mot pour mot. »

**Scène 12 — B4 Application · 3:04–3:12 · A**
- Visuel : capture réelle : la page finale ; le tampon « Validé · chef du CSI » se pose, avec la date.
- Écran : « Validé et daté »
- VO : « Issoufou valide et date la page. Elle rejoint le registre de la case de santé. »

**Scène 13 — B5 Consolidation · 3:12–3:37 · A**
- Visuel : capture réelle : la zone de saisie avec « [prénom], 2 ans, [village] : convulsions, que faire ? », tapé mais non envoyé. Silence. Puis deux croix successives : sur « [prénom] » et « [village] », puis sur « que faire ? » ; l'étiquette « Signe de danger → protocole » apparaît.
- Écran : « Signe de danger → protocole, sans attendre »
- VO : « Un collègue tape le prénom et le village d'un enfant, avec : convulsions, que faire ? Combien d'erreurs ? » *(silence, 3 s)* « Deux. Il expose un patient. Et il demande une décision à l'IA. Les convulsions sont un signe de danger : appliquez le protocole, sans attendre. »

**Scène 14 — B6 Clôture · 3:37–3:44 · B (carte de rappel, panneau 1)**
- Visuel : carte de rappel, panneau 1 : la promesse ; l'intercalaire « Référence » se referme.
- Écran : « À la fin de cette leçon, vous saurez tirer du protocole un aide-mémoire de référence. »
- VO : « La fiche de référence suivante arrive complète au CSI. »

**Scène 15 — B6 Clôture · 3:44–3:57 · B (carte de rappel)**
- Visuel : carte de rappel, panneau 2 : trois points révélés au rythme de la voix.
- Écran : « 1. Le protocole décide » « 2. Aucun patient reconnaissable » « 3. Comparer, faire valider »
- VO : « Le protocole décide, l'IA met en forme. Aucun patient reconnaissable. Comparez, puis faites valider. Tirez un aide-mémoire de votre protocole et faites-le valider. »

#### Captures à fournir par l'owner

| Scène | Outil · appareil | Gestes exacts | Texte exact à taper | Durée utile | À masquer |
|---|---|---|---|---|---|
| 4 | Assistant retenu, version gratuite · téléphone Android | Nouvelle conversation ; taper ; envoyer ; laisser la réponse s'afficher (elle sera floutée au montage). | « Quels sont les signes de danger chez l'enfant selon le protocole du Niger ? » | 15 s | Compte, historique ; **flouter tout le texte de la réponse** |
| 8–9 | Même assistant · même téléphone | Nouvelle conversation ; coller la consigne avec l'extrait officiel ; envoyer ; faire défiler lentement les trois parties. | La consigne à copier, avec l'extrait exact obtenu au CSI ou au district (voir 2.6) | 25 s | Compte, historique |
| 10–12 | Application de notes · même téléphone | Coller l'aide-mémoire sous l'extrait ; barrer la ligne en trop ; retaper l'élément manquant, mot pour mot ; afficher la page finale. | L'élément manquant, recopié de l'extrait | 30 s | Aucun nom, aucun cachet nominatif |
| 13 | Assistant retenu · même téléphone | Nouvelle conversation ; taper le texte **sans l'envoyer** ; laisser l'écran immobile. | « [prénom], 2 ans, [village] : convulsions, que faire ? » (crochets compris) | 12 s | Compte, historique |

#### Notes de script

- Prononciation : « PCIME » se dit lettre par lettre, « pé-cé-i-emme-e », sauf si les agents de santé de la zone emploient une autre prononciation [à vérifier au moment de la production] ; « HAPDP » se dit « ache-a-pé-dé-pé ».
- Scènes 5 et 8 : l'extrait doit venir d'un document officiel en vigueur (guide national de PCIME communautaire, guide de l'agent de santé communautaire ou équivalent), obtenu au CSI ou au district sanitaire. Le titre exact et l'année de la version en vigueur sont à confirmer avec le chef de CSI. [à vérifier au moment de la production]
- Scène 4 : la réponse de l'assistant est floutée : on ne montre jamais un contenu clinique non validé.
- Scène 6 : texte de référence : loi n° 2022-59 du 16 décembre 2022 relative à la protection des données à caractère personnel, modifiée en 2023 ; autorité : Haute Autorité de Protection des Données à caractère Personnel (HAPDP). Ni numéro ni date dans la voix off. [texte en vigueur à vérifier au moment de la production]
- Scène 13 : les convulsions font partie des signes généraux de danger de la PCIME (OMS, UNICEF). Ne citer aucun autre signe dans la voix off : la liste complète est celle du protocole national.
- Scènes 10 et 11 : la ligne retirée et l'élément rétabli dépendent de la réponse réelle. Si l'aide-mémoire est fidèle du premier coup, montrer les coches et dire : « Chaque ligne correspond. Elle coche. »
- Termes nouveaux : « PCIME » (glosé en scène 5) ; « aide-mémoire » est un mot courant. Ne pas employer « triage » à l'écran ni dans la voix.
- Adaptation EN : « aide-mémoire » = *job aid* ; « fiche de référence » = *referral form* ; « PCIME » = *IMCI (Integrated Management of Childhood Illness)* ; « PCIME communautaire » = *community case management (iCCM)*.
- Adaptation HA / DJE : reprendre les termes des supports de formation des relais et des ASC dans la langue, s'ils existent ; sinon, garder « PCIME » et le gloser.

### Leçon 5 — Projet final : votre campagne de sensibilisation (`sa5`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez présenter une campagne de sensibilisation validée. »
- **Cas réel (B1 → B6)** : avant la saison des pluies, Rahila et Souleymane présentent leur campagne « Moustiquaire chaque nuit » pour le certificat. Ils doivent prouver chaque étape : la source, l'adaptation, la traduction, les validations, la protection des patients. B6 (champ `example`) : la campagne part avant les pluies, validée et traduite, sans aucun patient exposé ; leur dossier est déposé.
- **Unités de notion (B3) — livrables et critères** : 1. Quatre livrables — la fiche de campagne d'une page (thème, public, message officiel et sa source, action, période, canaux) ; les supports en français (plan de causerie, trois questions, message vocal) ; la version en haoussa ou en zarma, avec son lexique ; la note d'usage responsable. · 2. La note d'usage — cinq lignes : ce que l'IA a fait, ce que vous avez vérifié, vos sources, qui a validé, et « aucune donnée de patient utilisée ». · 3. Cinq critères — fidèle à la source officielle ; clair pour le public ; validé par un locuteur et un soignant ; sans aucune donnée de patient ; faisable sur le terrain.
- **Démo (B4) — exemple de projet réussi, de bout en bout** : outil de documents sur téléphone ou ordinateur (Google Docs ou équivalent, selon l'owner). 1. Première page : la fiche de campagne, avec la source citée (la fiche du programme, remise par le CSI). 2. Les supports de la leçon 2, avec le tampon du chef du CSI. 3. Les versions haoussa et zarma, chacune avec le rôle de son locuteur et de son soignant, et le lexique. 4. La note d'usage en cinq lignes, dont « aucune donnée de patient ». 5. Export en un seul fichier PDF et dépôt sur la page du projet final. Résultat à l'écran : un dossier de quelques pages, complet, sans aucun nom de patient.
- **Consolidation (B5)** : prédiction. Un autre dossier présente une belle affiche, traduite en deux langues, mais personne ne l'a validée. Est-il recevable ? Réponse : non. Sans validation humaine, rien ne part sur le terrain ; le dossier revient pour validation.
- **Consigne à copier** :

```text
Voici les éléments de ma campagne de sensibilisation : thème [ … ] ; public [ … ] ; message officiel « [ … ] » (source : [ … ]) ; action demandée [ … ] ; période [ … ] ; canaux [ … ].
Mets-les en forme en une fiche de campagne d'une page, avec un titre court.
N'ajoute aucune information de santé. Laisse vide toute case que je n'ai pas remplie.
```

- **Exercice** : « Montez votre campagne et déposez votre dossier » — 1. Remplissez le modèle de dossier : fiche de campagne, supports, version traduite, note d'usage. 2. Faites valider les supports et la traduction par un locuteur et par un professionnel de santé ; notez leur rôle et leur accord, sans numéro de téléphone. 3. Exportez le tout en un seul fichier PDF et déposez-le sur la page du projet final.
- **Carte de rappel** *(récapitulatif du cours, un point par leçon)* : 1. Vous décidez · 2. Source officielle · 3. Double validation · 4. Le protocole décide
- **Quiz** *(5 questions ; chaque point de la carte de rappel est couvert)* :
  1. Que contient la note d'usage responsable ? — A) Les noms des patients rencontrés B) Ce que l'IA a fait, ce que vous avez vérifié, vos sources, qui a validé, et « aucune donnée de patient utilisée » C) Le prix de l'assistant D) Le nombre de mots du message — **Réponse : B**
  2. Dans votre campagne, qui décide du contenu de santé ? — A) L'assistant B) Le relais seul C) La première personne qui répond sur WhatsApp D) La source officielle et le chef du CSI ; l'IA prépare seulement — **Réponse : D**
  3. Une phrase de santé de votre support ne figure pas dans la fiche officielle. Que faites-vous ? — A) Vous la gardez si elle est utile B) Vous la gardez si l'IA l'a proposée C) Vous la retirez, ou vous la faites valider par le chef du CSI D) Vous la traduisez en haoussa — **Réponse : C**
  4. Votre version en zarma n'a été relue par personne. Que manque-t-il ? — A) La validation d'un locuteur et d'un professionnel de santé B) Rien C) Un deuxième assistant D) Une affiche plus colorée — **Réponse : A**
  5. Pendant une causerie, une mère vous décrit les signes de son enfant malade. Que faites-vous ? — A) Vous tapez les signes dans l'assistant B) Vous appliquez le protocole et orientez l'enfant vers la case de santé C) Vous attendez la fin de la causerie D) Vous demandez l'avis du groupe WhatsApp — **Réponse : B**
- **Marques citées** : Gemini (ou l'assistant retenu), WhatsApp, l'outil de documents utilisé pour les captures (ex. Google Docs).

#### Script v1 (à valider par l'owner)

Durée estimée : 4:00 (dont 3 s de mention légale, Partie 1) · Mots de voix off : 362

**Scène 1 — B1 Accroche · 0:00–0:09 · E**
- Visuel : le classeur complet, cinq intercalaires remplis ; l'intercalaire « Campagne » s'ouvre sur l'équipe devant la case de santé, une moustiquaire pliée sur la table.
- Écran : « Campagne “Moustiquaire chaque nuit” · avant les pluies »
- VO : « Leçon précédente : le protocole décide, l'IA met en forme. Aujourd'hui, Rahila et Souleymane présentent leur campagne. »

**Scène 2 — B1 Accroche · 0:09–0:18 · B**
- Visuel : carte promesse, texte révélé en deux temps.
- Écran : « À la fin de cette leçon, vous saurez présenter une campagne de sensibilisation validée. »
- VO : « À la fin de cette leçon, vous saurez présenter une campagne de sensibilisation validée. » *(promesse dite à 0:09)*

**Scène 3 — B2 Cadrage · 0:18–0:27 · B**
- Visuel : carte, surtitre « Le malentendu » ; une affiche très colorée entre, puis reçoit un point d'interrogation.
- Écran : « Le malentendu · “Une belle affiche suffit” »
- VO : « C'est le projet final du cours. Le malentendu : un beau visuel fait une bonne campagne. »

**Scène 4 — B2 Cadrage · 0:27–0:43 · C**
- Visuel : deux dossiers côte à côte. À gauche : belle affiche, ni source ni tampon (croix). À droite : page simple, source citée, tampon « Validé » (coche).
- Écran : « Sans source ni validation ✗ · Simple, sourcé, validé ✓ »
- VO : « On évalue autre chose : la justesse, la clarté, la validation, et la protection des patients. Une affiche simple et validée vaut mieux qu'une belle affiche sans source. »

**Scène 5 — B3 Notion · 0:43–1:13 · A**
- Visuel : capture réelle du modèle de dossier dans l'outil de documents ; défilement lent ; un cadre se pose sur chacune des quatre sections, l'une après l'autre.
- Écran : « 1 Fiche · 2 Supports · 3 Version traduite · 4 Note d'usage »
- VO : « Le dossier compte quatre livrables. Un : la fiche de campagne, sur une page. Thème, public, message officiel et sa source, action, période, canaux. Deux : les supports en français : plan de causerie, trois questions, message vocal. Trois : la version en haoussa ou en zarma, avec le lexique. Quatre : la note d'usage responsable. »

**Scène 6 — B3 Notion · 1:13–1:31 · B**
- Visuel : carte, surtitre « La note d'usage » ; cinq lignes courtes entrent l'une après l'autre.
- Écran : « IA · vérifications · sources · validations · aucun patient »
- VO : « La note d'usage tient en cinq lignes. Ce que l'IA a fait. Ce que vous avez vérifié. Vos sources. Qui a validé. Et une phrase : aucune donnée de patient utilisée. »

**Scène 7 — B3 Notion · 1:31–2:08 · C**
- Visuel : grille des cinq critères ; chaque critère entre avec son pictogramme (document source, bulle, tampon, cadenas, village) et une case à cocher.
- Écran : « Fidèle · Clair · Validé · Aucun patient · Faisable »
- VO : « Cinq critères comptent pour le certificat. Fidèle : chaque phrase de santé vient de la source officielle. Clair : une action par message, des mots de tous les jours. Validé : un locuteur et un soignant ont donné leur accord. Aucune donnée de patient, nulle part. Et faisable avec vos moyens, dans votre village. On vérifie chaque critère, un par un. »

**Scène 8 — B4 Application · 2:08–2:22 · A**
- Visuel : capture réelle de l'exemple de dossier ; première page, la fiche de campagne ; un cadre sur la ligne « Source ».
- Écran : « Source citée : fiche du programme, remise par le CSI »
- VO : « Voici le dossier de Rahila et Souleymane. Première page : la fiche de campagne. La source est citée, avec sa provenance. »

**Scène 9 — B4 Application · 2:22–2:34 · A**
- Visuel : capture réelle : page des supports (plan, trois questions, message vocal) ; le tampon « Validé · chef du CSI » est visible ; cadre.
- Écran : « Supports validés »
- VO : « Puis les supports de la leçon deux, avec le tampon du chef du CSI. »

**Scène 10 — B4 Application · 2:34–2:46 · A**
- Visuel : capture réelle : pages haoussa et zarma, chacune avec la ligne « Validé par : locuteur · soignant » (rôles, sans nom ni numéro), puis le lexique.
- Écran : « Haoussa · zarma · lexique »
- VO : « Les versions haoussa et zarma, chacune avec son locuteur, son soignant et le lexique. »

**Scène 11 — B4 Application · 2:46–2:57 · A**
- Visuel : capture réelle : la note d'usage ; la dernière ligne est encadrée.
- Écran : « “Aucune donnée de patient utilisée” »
- VO : « La note d'usage, en cinq lignes. La dernière dit : aucune donnée de patient. »

**Scène 12 — B4 Application · 2:57–3:07 · A**
- Visuel : capture réelle : export du document en PDF, puis la page de dépôt du projet final ; coche.
- Écran : « Un seul PDF, déposé »
- VO : « Ils exportent le dossier en PDF et le déposent sur la page du projet. »

**Scène 13 — B5 Consolidation · 3:07–3:32 · B**
- Visuel : carte : une affiche colorée, deux bulles de langue, aucune trace de tampon. Silence. Puis une croix sur la case « Validé » de la grille des critères.
- Écran : « Belle, traduite… mais non validée ? »
- VO : « Un autre dossier : une belle affiche, traduite en deux langues. Mais personne ne l'a validée. Recevable ? » *(silence, 3 s)* « Non. Sans validation humaine, rien ne part sur le terrain. Le dossier revient pour validation. »

**Scène 14 — B6 Clôture · 3:32–3:39 · B (carte de rappel, panneau 1)**
- Visuel : carte de rappel, panneau 1 : la promesse ; le classeur complet se referme.
- Écran : « À la fin de cette leçon, vous saurez présenter une campagne de sensibilisation validée. »
- VO : « Leur campagne part avant les pluies : validée, traduite, sans patient exposé. »

**Scène 15 — B6 Clôture · 3:39–3:46 · B**
- Visuel : carte de dépôt : pictogramme de fichier PDF qui entre dans une boîte « Projet final ».
- Écran : « Dépôt : un seul PDF, sur la page du projet final »
- VO : « Votre dépôt : un seul fichier PDF, sur la page du projet final. »

**Scène 16 — B6 Clôture · 3:46–3:57 · B (carte de rappel)**
- Visuel : carte de rappel du cours, panneau 2 : quatre points, un par leçon, révélés au rythme de la voix.
- Écran : « 1. Vous décidez » « 2. Source officielle » « 3. Double validation » « 4. Le protocole décide »
- VO : « L'IA prépare, vous décidez. Le message officiel d'abord. Locuteur et soignant valident. Le protocole décide. Montez votre campagne et déposez votre dossier. »

#### Captures à fournir par l'owner

| Scène | Outil · appareil | Gestes exacts | Texte exact à taper | Durée utile | À masquer |
|---|---|---|---|---|---|
| 5 | Outil de documents (Google Docs ou équivalent) · téléphone ou ordinateur | Ouvrir le modèle de dossier (voir 2.6) ; faire défiler lentement de la section 1 à la section 4. | Aucun | 30 s | Compte, autres documents |
| 8–11 | Même outil | Ouvrir l'exemple de dossier rempli (cas fictif) ; défiler page par page ; s'arrêter 3 s sur la ligne « Source », sur le tampon, sur les lignes « Validé par », sur la dernière ligne de la note d'usage. | Aucun | 50 s | Compte ; aucune signature ni aucun nom réel dans l'exemple |
| 12 | Même outil, puis plateforme Karatou Academy | Menu « Télécharger » ou « Exporter » → PDF ; ouvrir la page du projet final ; déposer le fichier. | Aucun | 12 s | Nom et adresse e-mail du compte |

#### Notes de script

- L'exemple de dossier est entièrement fictif : les personas sont des illustrations ; les lignes « Validé par » indiquent des rôles, jamais des noms ni des numéros.
- Scène 12 : capturer la vraie page de dépôt du projet final. Si elle n'existe pas encore au moment du tournage, montrer seulement l'export en PDF et dire : « Ils exportent le dossier en PDF, prêt à déposer. » [à vérifier au moment de la production]
- Scène 7 : les cinq critères doivent correspondre à la grille d'évaluation réellement utilisée pour le certificat ; l'aligner avant l'enregistrement. [à vérifier au moment de la production]
- Termes : « note d'usage responsable » (glosée par son contenu, scène 6) ; « livrable » est dit une fois et illustré par la liste.
- Adaptation EN : « dossier » = *campaign file* ; « note d'usage responsable » = *responsible-use note* ; « recevable » = *acceptable*.
- Adaptation HA / DJE : « certificat » et « projet final » : reprendre les termes de l'interface de la plateforme dans la langue, s'ils existent.

## 2.6 Captures et éléments à préparer

| Leçon | Élément | Comment l'obtenir | Qui |
|---|---|---|---|
| Toutes | Assistant retenu (Gemini conseillé), version gratuite, compte dédié au tournage, interface en français, mode clair, téléphone Android | Créer un compte de tournage sans historique ; vérifier que l'assistant est disponible au Niger | Owner |
| Toutes | Illustrations des personas (Rahila, Souleymane, Issoufou), décors, classeur à intercalaires, tampon « Validé » | Produites en motion selon 2.4 | Claude |
| Toutes | Relecture santé des cinq scripts (exactitude, cohérence avec le protocole national) | Faire relire par un professionnel de santé nigérien (infirmier chef de CSI ou médecin de district) avant l'enregistrement | Owner |
| 1, 2 | Fiches officielles de sensibilisation (vaccination, paludisme) : photo nette, sans nom ni cachet nominatif, et texte exact des messages clés | Demander au CSI, au district sanitaire ou au programme national de lutte contre le paludisme la version en vigueur ; photographier à plat, en lumière du jour | Owner, avec un agent de santé |
| 1 | Texte exact de l'avertissement affiché sous la zone de saisie de l'assistant | Le recopier depuis la capture réelle | Owner → Claude |
| 1 | Groupe WhatsApp de test « Test causerie » | Créer un groupe avec un seul autre participant, consentant | Owner |
| 3 | Un locuteur haoussa et un locuteur zarma pour corriger les textes affichés et valider le lexique | Agents de santé ou relais locuteurs, consentants ; aucun nom affiché | Owner |
| 3 | Lexique validé (fièvre, moustiquaire imprégnée, case de santé, vaccination) en haoussa et en zarma | Établi avec les deux locuteurs et un professionnel de santé | Owner, locuteurs |
| 4 | Extrait officiel du protocole national sur la référence (PCIME communautaire ou guide de l'agent de santé communautaire), version en vigueur, titre et année | Demander au chef de CSI ou au district sanitaire | Owner, avec un professionnel de santé |
| 4 | Confirmation du texte de loi en vigueur sur les données personnelles et du nom de l'autorité (HAPDP) | Site officiel de la HAPDP ou Journal officiel du Niger | Owner |
| 5 | Modèle de dossier de campagne (quatre sections) et exemple rempli (cas fictif de Rahila et Souleymane) | Rédigés à partir des fiches des leçons 1 à 4, sans aucune donnée réelle ; mis en page dans l'outil de documents | Claude (rédaction), Owner (mise en page et capture) |
| 5 | Page de dépôt du projet final et grille d'évaluation du certificat | Capturer la page réelle ; obtenir la grille utilisée par la plateforme | Owner |
| Toutes | Intitulé exact du ministère de la Santé du Niger, s'il est cité à l'écran | Site officiel du gouvernement du Niger | Owner |
