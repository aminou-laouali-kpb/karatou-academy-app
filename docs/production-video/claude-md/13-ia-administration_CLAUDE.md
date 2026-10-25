# CLAUDE.md — Karatou Academy · Production vidéo
# Cours 13 — IA pour l'administration

> **Pour l'owner — mode d'emploi**
> 1. Créez un dossier vide sur votre ordinateur, par exemple `karatou-ia-administration`.
> 2. Copiez-y ce fichier et renommez-le exactement `CLAUDE.md`.
> 3. Ouvrez Claude Code dans ce dossier (dans un terminal : `cd karatou-ia-administration` puis `claude`).
> 4. Écrivez : **« On démarre. »**
>
> Claude vous demande d'abord le **design system de Karatou Academy**, puis vos fichiers (logo, photo, voix).
> Ensuite il produit les vidéos **une par une** et s'arrête à chaque validation. Pour reprendre plus tard,
> écrivez « On continue. » : l'avancement est noté dans `PROGRESS.md`.

| | |
|---|---|
| Format | Motion graphics et captures d'écran, voix off clonée de l'owner |
| Owner | Idriss (son nom et sa photo figurent sur les cartes présentateur ; voix clonée) |
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
livraison/ia-administration/<id>/      fichiers livrés · livraison/ia-administration/INTEGRATION.md
```

`<id>` est l'identifiant de la leçon (`ad1`, `ad2`…). Langues : `fr`, `en`, `ha`, `dje`.

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

### 9.2 Nommage et contenu de `livraison/ia-administration/<id>/`

`ia-administration_<id>_<langue>_v<n>.mp4` · `…-360.mp4` · `….srt` · `….vtt` · `…_cover.jpg` (1920 × 1080, qualité 85,
première image stable de B1) · `…_transcript.md` (un titre par temps, texte dit + actions à l'écran entre
crochets) · `RECETTE.md`.

### 9.3 Mise en ligne

Chaîne YouTube **Karatou Academy**, vidéos **non répertoriées**, une vidéo par langue, sous-titres `.srt` ajoutés
comme piste. Titre : « Karatou Academy — IA pour l'administration — Leçon N : <titre> (<LANGUE>) ». Le site lit des **URL
d'intégration** : `https://www.youtube.com/embed/<ID>` (jamais `watch?v=` ni `youtu.be/`). Teste chaque URL dans un
navigateur avant de la consigner.

### 9.4 Intégration au site — `livraison/ia-administration/INTEGRATION.md`

Le site lit, pour chaque leçon, un champ `video: { fr, en, ha }` dans les fichiers TypeScript du dépôt
`karatou-academy-app` (registre `authoredLessons`). Chaque leçon y a aussi un texte (objectif, quatre sections,
exemple, exercice, quiz de cinq questions, réflexion, glossaire), rédigé par l'équipe avec le skill
`karatou-course-creator`, et des lignes Supabase (module, leçons) pour la progression et les certificats.

Ton rôle : tenir `INTEGRATION.md` à jour, leçon par leçon : module `ia-administration`, id, titre, promesse (objectif), cas
réel (exemple), exercice (titre et étapes), carte de rappel, quiz, marques citées, URL FR / EN / HA, et URL DJE
« en attente ». Ce fichier est remis à l'équipe technique ; tu ne modifies pas le dépôt du site.

### 9.5 Corrections après publication

Une URL publiée est figée. Pour corriger : nouvelle version `v2` → mise en ligne → nouvelle URL testée →
`INTEGRATION.md` mis à jour → l'équipe technique remplace l'URL → l'ancienne vidéo est rendue privée, jamais
supprimée. Consigne chaque version dans le journal de `PROGRESS.md`.

## 10. `PROGRESS.md` — modèle

```markdown
# PROGRESS — Cours 13 · IA pour l'administration
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
| Numéro | 13 |
| Titre | IA pour l'administration |
| Format | Motion graphics + captures d'écran, voix off (voix clonée de l'owner) |
| Owner / voix | Idriss — nom complet et titre exact demandés au premier lancement |
| Rubrique | IA & Données |
| Public | Fonctionnaires et agents des administrations d'Afrique francophone (et au-delà) : agents de l'État et des collectivités, agents de projet, secrétariats et assistants de direction. Sur ordinateur de bureau ou téléphone, avec des outils gratuits ou ceux que fournit l'administration. |
| Slug du module (provisoire) | `ia-administration` |
| Préfixe des leçons | `ad` |
| Nombre de vidéos | 5 (dont la dernière = projet final certifiant) |
| Durée par vidéo | 3–5 min (cible 4:00) |
| Langues | FR (référence) · EN · HA · DJE |
| Prérequis | Savoir utiliser un assistant conversationnel. Connaître les modèles de documents de son service (lettre, procès-verbal, note, rapport). Aucun module préalable. |
| Promesse du cours | Vous apprendrez à préparer courriers, procès-verbaux, synthèses et rapports avec l'IA, sans rien divulguer, et en gardant la main. |
| Positionnement | L'IA prépare un brouillon ; l'agent vérifie, la hiérarchie vise, le signataire engage. Le cours respecte la culture administrative (registre, formules, circuit du parapheur) et place la confidentialité avant tout usage. Aucun gain de temps chiffré. Prolonge la leçon c4 du module `intelligence-artificielle` et la leçon cl5 de `introduction-claude-ai` ; distinct du cours A1 (ONG) et du cours 11 (Excel + IA). |
| Fil rouge | Deux administrations fictives, dans deux pays. Zeinabou, secrétaire de direction dans une direction régionale fictive de Tahoua (Niger) : leçons 1 et 2 ; son dossier sert d'exemple complet en leçon 5. Souleymane, chef de service dans une direction régionale fictive de Bouaké (Côte d'Ivoire) : leçons 3 et 4 ; en leçon 5, il partage sa méthode avec Zeinabou, en pair (vérification article par article, chiffres recalculés). Contre-exemples : Abdoul-Aziz, agent d'une mairie fictive de Garoua (Cameroun), en leçon 1 ; Rahila, agente d'une direction départementale fictive de Parakou (Bénin), en leçon 5. Montants éventuels en FCFA (monnaie des quatre pays). Cas fictifs, anonymisation du § 5.9. |
| Marques citées | Gemini, Gemini Notebook (anciennement NotebookLM) (Google) |

**Outils montrés et point d'actualité (vérifié en octobre 2026).** Les démonstrations utilisent Gemini (version gratuite, navigateur d'ordinateur) et Gemini Notebook, nouveau nom de NotebookLM depuis le 16 juillet 2026 : même produit, mêmes carnets. La vidéo dit « Gemini Notebook, l'outil qu'on appelait NotebookLM » à sa première mention. Si l'administration de l'apprenant fournit un outil d'IA validé, celui-ci passe en priorité : le cours le dit en leçon 5. Aucun outil de transcription automatique n'est montré : leur disponibilité et leurs conditions n'ont pas pu être vérifiées pour ce cours, et une réunion administrative ne s'enregistre qu'avec l'accord des participants.

**Cadre de confidentialité.** La vidéo et les fiches parlent « des textes de la fonction publique de votre pays » et « de la loi », sans citer de décret, de numéro de texte ni d'autorité d'un seul pays : l'apprenant applique les textes de son propre pays.

*Note pour l'owner, à ne pas reprendre dans les scripts — un exemple, le Niger (vérifié en octobre 2026)* : le décret n° 2008-244/PRN/MFP/T, pris pour l'application du statut général de la fonction publique de l'État, impose à l'agent, en son article 9, une obligation de discrétion professionnelle sur les documents, faits et informations connus en service ; la loi n° 2019-26 prévoit secret et discrétion pour le personnel des collectivités territoriales ; la Haute Autorité de protection des données à caractère personnel (HAPDP) a été supprimée par le décret n° 2026-310/PRN/PM du 8 juin 2026, ses attributions étant réparties entre ministères selon la presse. Les autres pays du cours (Côte d'Ivoire, Cameroun, Bénin…) ont leurs propres statuts de la fonction publique et leurs propres lois et autorités de protection des données : ce sont les textes du pays de chaque apprenant qui s'appliquent. [à vérifier au moment de la production : textes en vigueur et autorités compétentes, pays par pays]

## 2.2 Ce que l'apprenant saura faire

- Distinguer ce qui peut entrer dans un outil d'IA grand public (éléments anonymisés, textes publics, totaux) de ce qui n'y entre jamais (données personnelles d'usagers, documents classés ou non publics).
- Faire préparer par l'IA le brouillon d'un courrier administratif au bon registre, avec une consigne en quatre blocs (RCTF : Rôle, Contexte, Tâche, Format), à partir d'éléments anonymisés et du modèle de son service, puis le vérifier.
- Transformer ses notes de réunion en procès-verbal fidèle, avec un tableau des actions, prêt à faire valider par le président de séance.
- Résumer un texte réglementaire public et vérifier chaque point, article par article, dans le texte en vigueur.
- Construire un rapport d'activités à partir de ses propres chiffres, recalculés, en séparant faits, analyse et recommandations.
- Assembler le dossier complet d'une réunion et sa fiche de contrôle.

## 2.3 Plan du cours

| Leçon | Id | Titre | Promesse (objectif) | Cas réel (B1) | Démo (B4) | Durée cible |
|---|---|---|---|---|---|---|
| 1 | `ad1` | Rédiger un courrier administratif avec l'IA, sans divulguer de données | Préparer un courrier administratif avec l'IA, sans rien divulguer | Zeinabou, secrétaire de direction dans une direction régionale fictive de Tahoua (Niger), doit préparer la lettre d'invitation à la réunion de coordination | Gemini : consigne RCTF avec éléments anonymisés et modèle du service → brouillon → contrôle des dates et des formules → noms ajoutés hors de l'outil | 4:00 |
| 2 | `ad2` | Transformer vos notes de réunion en procès-verbal avec l'IA | Transformer vos notes en procès-verbal fidèle, prêt à valider | À Tahoua, la réunion a eu lieu ; Zeinabou a trois pages de notes et doit produire le PV | Gemini : consigne RCTF, notes avec fonctions au lieu des noms → PV structuré avec « [À COMPLÉTER] » → comparaison avec les notes → modèle du service et validation | 4:00 |
| 3 | `ad3` | Résumer un texte réglementaire avec l'IA et vérifier chaque article | Résumer un texte réglementaire avec l'IA, et vérifier chaque point | Souleymane, chef de service dans une direction régionale fictive de Bouaké (Côte d'Ivoire), doit présenter un long texte réglementaire public au directeur | Gemini Notebook : dépôt du texte public, consigne RCTF, liste des obligations avec articles, vérification dans le PDF, note d'une page | 4:00 |
| 4 | `ad4` | Rédiger un rapport d'activités avec l'IA, à partir de vos chiffres vérifiés | Construire un rapport d'activités avec l'IA, sur vos chiffres vérifiés | À Bouaké, le rapport trimestriel du service de Souleymane est attendu vendredi | Gemini : consigne RCTF, tableau anonymisé et notes → sections du rapport avec calculs montrés → recalcul → recommandations réécrites | 4:00 |
| 5 | `ad5` | Projet final : préparer le dossier complet d'une réunion avec l'IA | Constituer et déposer le dossier complet d'une réunion | À Tahoua, Zeinabou prépare le dossier de la réunion suivante de sa direction ; Souleymane, chef de service à Bouaké, lui partage sa méthode | Le dossier exemple de Zeinabou : courrier, PV, note de synthèse, page de rapport, fiche de contrôle, puis relecture critère par critère avec une consigne RCTF | 4:00 |

## 2.4 Direction artistique du cours

- **Motif récurrent : le parapheur.** Une chemise de parapheur stylisée, à fenêtres, où chaque leçon ajoute son document (courrier, PV, note, rapport, fiche de contrôle). Les sorties de l'IA portent une étiquette générique « BROUILLON », remplacée par une case « Visa » cochée après la vérification humaine. Aucun emblème national, aucun sceau, aucun en-tête ni nom de service réels : l'en-tête des documents fictifs est « [EN-TÊTE DU SERVICE] » et chaque document porte la mention « Exemple fictif ».
- **Personas et pays.** Formes simples en aplats, sans photoréalisme et sans imiter une personne réelle. Zeinabou : secrétaire de direction dans une direction régionale fictive de Tahoua (Niger), foulard, bureau avec registre du courrier et ordinateur (leçons 1, 2 et 5). Souleymane : chef de service dans une direction régionale fictive de Bouaké (Côte d'Ivoire), chemise ou boubou, classeurs, calculatrice (leçons 3 et 4 ; en leçon 5, en pair, dans une vignette « Bouaké »). Mêmes silhouettes et mêmes couleurs d'une leçon à l'autre. Abdoul-Aziz (mairie fictive de Garoua, Cameroun, leçon 1) et Rahila (direction départementale fictive de Parakou, Bénin, leçon 5) n'apparaissent qu'en silhouette secondaire. Le lieu est donné par l'écran texte (« Tahoua · Niger », « Bouaké · Côte d'Ivoire »…) ; les décors restent génériques : aucun monument, drapeau, emblème ni bâtiment réel. Ton sobre et respectueux : aucune caricature de l'administration.
- **Trois schémas types réutilisés (C).**
  1. « Le filtre » : une porte avec un cadenas. Passent (coche) : éléments anonymisés, fonctions, textes publics, totaux. Ne passent jamais (croix) : noms et numéros d'usagers, documents classés ou non publics, projets internes. Leçons 1, 3, 4, 5.
  2. « La chaîne de validation » : Brouillon → Vérification par l'agent → Visa de la hiérarchie → Signature → Enregistrement. Leçons 1, 2, 5.
  3. « Du texte à l'article » : une ligne de synthèse reliée par un trait à son article, loupe sur le passage. Leçons 3 et 5.
- **Iconographie.** Pictogrammes au trait : parapheur, registre, cadenas, loupe, calculatrice, stylo, case à cocher. Toute validation ou erreur portée par une forme (coche, croix, cadre), jamais par la couleur seule.
- **Captures (A).** Ordinateur, navigateur en français, pour Gemini et Gemini Notebook ; traitement de texte avec barre d'outils recadrée hors champ ; téléphone seulement pour la calculatrice (leçon 4). Noms de compte, sélecteur de modèle et bandeaux masqués.
- **Consignes à l'écran.** Toute consigne montrée suit la méthode RCTF : quatre blocs étiquetés « Rôle », « Contexte », « Tâche », « Format », chacun sur sa ligne, l'étiquette en gras ; le garde-fou souligné (crochets, « [À COMPLÉTER] », « N'invente aucun… »).
- **Ce qui reste fixe** : le parapheur, les deux personas, les trois schémas, la carte de consigne RCTF, la place de la carte de rappel. **Ce qui change** : le document ajouté au parapheur, le persona et le pays de la leçon, l'outil capturé.
- **Son.** Aucune musique sous la voix. Un court habillage sonore possible sur les cartes uniquement.

## 2.5 Les leçons

### Leçon 1 — Rédiger un courrier administratif avec l'IA, sans divulguer de données (`ad1`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez préparer un courrier administratif avec l'IA, sans rien divulguer. »
- **Cas réel (B1 → B6)** : Zeinabou, secrétaire de direction dans une direction régionale fictive de Tahoua (Niger), doit préparer pour demain la lettre qui invite les services techniques, la mairie et deux ONG partenaires à la réunion de coordination trimestrielle. Elle a la note manuscrite du directeur : noms, numéros de téléphone, et un passage confidentiel sur un différend avec un partenaire. Tentation : tout coller dans l'assistant. Enjeu : une lettre correcte, au bon registre, sans qu'aucune information ne sorte du service. Fermeture en B6 (champ `example`) : la lettre passe au parapheur, le directeur la signe, elle part enregistrée au courrier départ.
- **Unités de notion (B3)** : 1. Rien de confidentiel dans l'outil — ni document classé ou non public, ni donnée personnelle d'usager ; ce qu'on colle dans un outil grand public sort du service ; les textes de la fonction publique de votre pays imposent la discrétion professionnelle ; en cas de doute, la hiérarchie tranche. · 2. Des éléments et un modèle, pas le dossier — des fonctions au lieu des noms, des crochets au lieu des numéros, et le modèle de lettre du service, anonymisé. · 3. Registre et formules vérifiés — « J'ai l'honneur de… » ouvre la lettre ; la formule finale dépend du rang du destinataire ; le modèle du service tranche.
- **Démo (B4)** : Gemini, version gratuite, dans le navigateur d'un ordinateur. 1. Nouvelle conversation. 2. Coller la consigne RCTF remplie : Rôle, puis Contexte avec les éléments de la réunion (fonction de l'expéditeur, fonctions des destinataires, objet, date, heure, lieu, ordre du jour, demande de confirmation), puis Tâche. 3. Dans le bloc Format, coller le modèle de lettre du service, anonymisé, puis la ligne des garde-fous. 4. Lire le brouillon : objet, références entre crochets, « J'ai l'honneur de vous inviter… », formule finale. 5. Contrôler date, heure, ordre du jour et formule finale. 6. Copier le texte dans le modèle du service, sur l'ordinateur, et y ajouter hors de l'outil le numéro du registre et les mentions nominatives. Résultat attendu à l'écran : un brouillon fidèle au modèle, sans aucun nom ni numéro inventé.
- **Consolidation (B5)** : prédiction. « Dans une mairie de Garoua, au Cameroun, Abdoul-Aziz colle la requête d'un usager : nom, adresse, téléphone. Il demande une réponse. Quel est le problème ? » — 3 s de silence — « Des données personnelles d'usager sont sorties du service. Il fallait écrire “un usager demande…”, puis remettre le nom hors de l'outil. »
- **Consigne à copier** :

```text
Rôle : tu es secrétaire de direction dans une administration publique.
Contexte : je prépare un courrier de mon service. Expéditeur : [fonction, sans nom]. Destinataires : [fonctions, sans noms]. Objet : [objet]. Références : [laisser entre crochets]. Contenu : [faits, date, heure, lieu, ce qui est demandé, délai de réponse].
Tâche : rédige le brouillon de cette lettre, au registre administratif, avec les formules d'usage.
Format : suis la structure de ce modèle de mon service : [collez un modèle anonymisé].
Garde tous les crochets tels quels. N'invente aucun nom, aucun numéro, aucune référence.
```

  *(Quatre blocs RCTF ; la dernière ligne, celle des garde-fous, appartient au bloc Format.)*

- **Exercice** : « Rédigez un courrier sans rien divulguer » — 1. Choisissez un courrier courant de votre service (invitation, transmission, demande d'information). 2. Listez ses éléments en remplaçant chaque nom par une fonction et chaque numéro par des crochets. 3. Remplissez les quatre blocs de la consigne (Rôle, Contexte, Tâche, Format), avec un modèle anonymisé de votre service dans le bloc Format. 4. Vérifiez dates, références, registre et formule finale ; complétez les crochets dans votre traitement de texte, puis présentez la lettre au parapheur.
- **Carte de rappel** : 1. Rien de confidentiel 2. Des éléments, un modèle 3. Registre et formules vérifiés
- **Quiz** :
  1. Que pouvez-vous coller dans un assistant grand public ? — A) La requête d'un usager, avec son nom B) Un document classé, pour le résumer C) Les éléments d'un courrier, noms remplacés par des fonctions et des crochets D) Le fichier du personnel — **Réponse : C**
  2. Pourquoi coller le modèle de lettre de votre service, anonymisé ? — A) Pour que le brouillon suive la structure et les usages du service B) Pour que la lettre soit plus longue C) Pour ne pas avoir à la relire D) Pour que l'IA la signe — **Réponse : A**
  3. Quelle phrase relève du registre administratif ? — A) « Salut, on se voit mardi ? » B) « J'ai l'honneur de vous inviter à la réunion de coordination. » C) « Venez nombreux, ce sera top ! » D) « Merci de répondre vite fait. » — **Réponse : B**
  4. Le brouillon contient une référence « N° 245/DR » que vous n'avez pas donnée. Que faites-vous ? — A) Vous la gardez B) Vous la soulignez C) Vous demandez au directeur de l'adopter D) Vous la supprimez et mettez, hors de l'outil, le vrai numéro du registre — **Réponse : D**
  5. Abdoul-Aziz colle la requête d'un usager avec son nom et son téléphone. Quel est le problème ? — A) Aucun, l'outil est gratuit B) Des données personnelles d'usager sortent du service C) La réponse sera trop longue D) L'outil ne comprend pas les noms — **Réponse : B**
- **Marques citées** : Gemini (Google)

#### Script v1 (à valider par l'owner)

Durée estimée : 4:05 · Mots de voix off : 406

**Scène 1 — B1 Accroche · 0:00–0:09 · E**
- Visuel : illustration en aplats, bureau de secrétariat d'une direction régionale fictive à Tahoua (décor générique, aucun bâtiment réel). Zeinabou à son poste, registre du courrier ouvert, note manuscrite du directeur posée à côté. Le parapheur du cours apparaît en bas à droite.
- Écran : « Zeinabou · secrétaire de direction · Tahoua, Niger »
- VO : « Tahoua, au Niger. Zeinabou est secrétaire de direction dans une direction régionale. Le directeur lui demande une lettre. »

**Scène 2 — B1 Accroche · 0:09–0:19 · B**
- Visuel : carte de promesse posée sur la chemise du parapheur.
- Écran : « Préparer un courrier administratif avec l'IA, sans rien divulguer »
- VO : « À la fin de cette leçon, vous saurez préparer un courrier administratif avec l'IA, sans rien divulguer. »

**Scène 3 — B2 Cadrage · 0:19–0:37 · C**
- Visuel : la note du directeur glisse vers une fenêtre d'assistant ; deux étiquettes s'allument l'une après l'autre : « tout coller » (croix) et « l'IA connaît nos usages » (croix).
- Écran : « Deux erreurs : tout coller · croire que l'IA connaît nos usages »
- VO : « Il s'agit d'inviter les partenaires à la réunion de coordination. Elle pense coller la note du directeur, telle quelle. Elle pense aussi que l'IA connaît les usages de l'administration. Deux erreurs. »

**Scène 4 — B2 Cadrage · 0:37–0:49 · A**
- Visuel : capture `ad1-01` — la note fictive du directeur dans le traitement de texte. Les noms, les numéros et le passage confidentiel sont couverts d'aplats annotés « nom », « téléphone », « passage confidentiel », révélés un à un.
- Écran : « Noms · numéros · passage confidentiel »
- VO : « La note contient des noms, des numéros, et un passage confidentiel. Et l'IA ignore les usages de votre service. »

**Scène 5 — B3 Notion · 0:49–1:07 · C**
- Visuel : schéma « Le filtre ». À gauche, ce qui passe (coche) : éléments, fonctions. À droite, ce qui ne passe jamais (croix) : document classé ou non public, données d'usager.
- Écran : « 1 · Rien de confidentiel dans l'outil »
- VO : « Première règle : rien de confidentiel dans l'outil. Ni document classé ou non public. Ni donnée personnelle d'usager. Ce que vous collez dans un outil grand public sort du service. »

**Scène 6 — B3 Notion · 1:07–1:21 · B**
- Visuel : carte typographique sur la chemise du parapheur ; un cadenas se ferme.
- Écran : « Discrétion professionnelle · En cas de doute : la hiérarchie »
- VO : « Les textes de la fonction publique de votre pays vous imposent d'ailleurs la discrétion professionnelle. En cas de doute, demandez à votre hiérarchie. »

**Scène 7 — B3 Notion · 1:21–1:39 · A**
- Visuel : capture `ad1-02` — dans Gemini, la consigne RCTF remplie avec les éléments de Zeinabou (blocs Rôle, Contexte, Tâche). Cadres successifs sur les fonctions et sur les crochets.
- Écran : « 2 · Des éléments et un modèle, pas le dossier »
- VO : « Deuxième règle : donnez des éléments et un modèle, pas le dossier. Les fonctions plutôt que les noms. Des crochets à la place des numéros. Et un modèle de lettre de votre service, anonymisé. »

**Scène 8 — B3 Notion · 1:39–1:59 · G**
- Visuel : carte de consigne RCTF, fond clair, consigne complète ; les étiquettes « Rôle », « Contexte », « Tâche », « Format » s'allument au rythme de la voix. La dernière ligne (bloc Format) est soulignée.
- Écran : « La consigne en quatre blocs : méthode RCTF », puis la consigne à copier de la fiche, en entier, avec ses quatre blocs.
- VO : « Voici la consigne, en quatre blocs : Rôle, Contexte, Tâche, Format. C'est la méthode RCTF. Sa dernière ligne compte : garder les crochets, et n'inventer ni nom, ni numéro, ni référence. »

**Scène 9 — B3 Notion · 1:59–2:17 · B**
- Visuel : carte typographique ; la formule d'ouverture s'écrit, puis une échelle à trois marches illustre le rang du destinataire.
- Écran : « 3 · “J'ai l'honneur de…” · Formule finale selon le rang »
- VO : « Troisième règle : le registre et les formules, vous les vérifiez. “J'ai l'honneur de…” ouvre la lettre. La formule finale dépend du rang du destinataire. En cas de doute, suivez le modèle du service. »

**Scène 10 — B4 Application · 2:17–2:30 · A**
- Visuel : capture `ad1-03` — le modèle de lettre anonymisé collé dans le bloc Format, la ligne des garde-fous, puis l'envoi.
- Écran : « Consigne RCTF + modèle du service »
- VO : « Zeinabou remplit le contexte : expéditeur, destinataires, objet, date, lieu, ordre du jour. Puis elle colle le modèle du service. »

**Scène 11 — B4 Application · 2:30–2:44 · A**
- Visuel : capture `ad1-04` — le brouillon. Cadres successifs sur l'objet, les références entre crochets, la formule d'ouverture, la formule finale. Étiquette « BROUILLON » sur le côté.
- Écran : « Objet · [Références] · formules d'usage »
- VO : « Le brouillon arrive. Objet, références entre crochets, “J'ai l'honneur de vous inviter”, formule finale. La structure suit son modèle. »

**Scène 12 — B4 Application · 2:44–2:58 · A**
- Visuel : capture `ad1-05` — le brouillon et la note du directeur en alternance ; coche sur la date, l'heure et chacun des trois points de l'ordre du jour, puis cadre sur la formule finale.
- Écran : « Date ✓ · Heure ✓ · Ordre du jour ✓ · Formule finale »
- VO : « Elle vérifie la date, l'heure, l'ordre du jour. Elle contrôle la formule finale, selon le rang des destinataires. »

**Scène 13 — B4 Application · 2:58–3:12 · A**
- Visuel : capture `ad1-06` — le texte collé dans le modèle du service (« [EN-TÊTE DU SERVICE] », mention « Exemple fictif ») ; les crochets sont complétés au clavier.
- Écran : « Les crochets se remplissent hors de l'outil »
- VO : « Puis elle copie le texte dans le modèle du service, sur son ordinateur. Les noms et le numéro du registre s'ajoutent là, hors de l'outil. »

**Scène 14 — B5 Consolidation · 3:12–3:40 · B**
- Visuel : carte question, vignette « Garoua · Cameroun ». La silhouette d'Abdoul-Aziz colle un document où apparaissent les étiquettes « nom », « adresse », « téléphone ». Silence de 3 s, puis une croix, et la formulation correcte s'inscrit.
- Écran : temps 1 « Nom · adresse · téléphone d'un usager → dans l'outil ? » ; temps 2 « “Un usager demande…” »
- VO : « À vous. Dans une mairie de Garoua, au Cameroun, Abdoul-Aziz colle la requête d'un usager : nom, adresse, téléphone. Il demande une réponse. Quel est le problème ? » [silence 3 s] « Des données personnelles d'usager sont sorties du service. Il fallait écrire : “un usager demande…”. Le nom se remet ensuite, hors de l'outil. »

**Scène 15 — B6 Clôture · 3:40–3:50 · B (rappel de la promesse)**
- Visuel : la lettre entre dans le parapheur ; la case « Visa » se coche, puis la signature (trait stylisé, illisible) ; tampon générique « Courrier départ ». La promesse revient, mot pour mot.
- Écran : « Préparer un courrier administratif avec l'IA, sans rien divulguer »
- VO : « Le lendemain, la lettre passe au parapheur. Le directeur la signe. Elle part, enregistrée au courrier départ. »

**Scène 16 — B6 Clôture · 3:50–4:05 · B (carte de rappel)**
- Visuel : carte de rappel, points révélés au rythme de la voix ; tenue ≥ 4 s après le dernier point.
- Écran : « 1. Rien de confidentiel » « 2. Des éléments, un modèle » « 3. Registre et formules vérifiés »
- VO : « Retenez : rien de confidentiel dans l'outil. Des éléments et un modèle, pas le dossier. Un registre et des formules que vous vérifiez. Rédigez un courrier sans rien divulguer. »

#### Captures à fournir par l'owner

Ordinateur, navigateur en français, zoom 125 %, barre d'adresse recadrée hors champ. Compte Google de tournage pour Gemini. Traitement de texte avec barre d'outils recadrée hors champ. Tous les documents sont fictifs, préparés à l'avance (voir 2.6) : en-tête « [EN-TÊTE DU SERVICE] », mention « Exemple fictif », aucun emblème, aucun nom de service réel. À masquer : compte, sélecteur de modèle, bandeaux.

- **`ad1-01` (scène 4)** — Ouvrir la « Note du directeur » fictive. Poser sur les noms, les numéros de téléphone et le passage confidentiel des aplats annotés « nom », « téléphone », « passage confidentiel ». Durée utile : 8 s.
- **`ad1-02` (scène 7)** — Gemini, nouvelle conversation. Taper la consigne remplie, un bloc par ligne, sans l'envoyer : « Rôle : tu es secrétaire de direction dans une administration publique. » / « Contexte : je prépare un courrier de mon service. Expéditeur : le Directeur régional. Destinataires : les chefs des services techniques régionaux, le Maire de la commune, les responsables des ONG partenaires. Objet : réunion de coordination trimestrielle. Références : [N° de référence]. Contenu : réunion le [date], à 9 heures, dans la salle de réunion de la direction ; ordre du jour : bilan du trimestre, programmation du trimestre suivant, divers ; chaque structure confirme sa participation et désigne un représentant avant le [date limite]. » / « Tâche : rédige le brouillon de cette lettre, au registre administratif, avec les formules d'usage. » / « Format : suis la structure de ce modèle de mon service : » Durée utile : 10 s.
- **`ad1-03` (scène 10)** — Coller à la suite, dans le bloc Format, le modèle de lettre fictif, puis la dernière ligne : « Garde tous les crochets tels quels. N'invente aucun nom, aucun numéro, aucune référence. » Envoyer. Durée utile : 8 s.
- **`ad1-04` (scène 11)** — Filmer l'arrivée du brouillon, puis un défilement lent jusqu'à la formule finale. Si le brouillon invente un numéro ou un nom, garder la prise : elle sert le propos ; ajuster seulement la phrase de VO de la scène 11 à la validation. Durée utile : 12 s.
- **`ad1-05` (scène 12)** — Alterner le brouillon et la note du directeur ; pointer avec le curseur la date, l'heure et les trois points de l'ordre du jour, puis la formule finale. Durée utile : 10 s.
- **`ad1-06` (scène 13)** — Copier le brouillon dans le modèle fictif du service, puis remplacer au clavier « [N° de référence] » par « N° 000/EXEMPLE » et les crochets de date par des dates. Durée utile : 12 s.

#### Notes de script

- **Prononciation** : Gemini « jé-mi-ni » (fixer au premier lancement, identique dans tout le cours) ; Tahoua « ta-houa » ; Garoua « ga-rou-a » ; RCTF « èr-cé-té-èf », lettre par lettre.
- **Registre** : formules à montrer telles que le modèle du service les donne. Exemples courants, à adapter au rang du destinataire et aux usages du service : « Veuillez agréer, Monsieur le Maire, l'expression de ma considération distinguée » ; pour une haute autorité, « … de ma haute considération ». Ne jamais présenter une formule comme la règle unique.
- **Exactitude** : « les textes de la fonction publique de votre pays » renvoie au statut de la fonction publique de chaque pays. Exemple du Niger et textes des autres pays : voir la note pour l'owner du § 2.1. Ne citer aucun numéro de texte ni aucune autorité dans la VO ni à l'écran. « Ce que vous collez dans un outil grand public sort du service » est un principe de prudence : ne rien affirmer sur l'usage que fait un éditeur des données.
- **Pièges** : aucun vrai en-tête, sceau, emblème ou nom de service ; aucune vraie signature. Le passage confidentiel de la note fictive reste masqué même s'il est inventé : c'est le geste qu'on enseigne. Si l'administration de l'owner interdit tout outil grand public, le dire en Notes de validation et proposer un outil validé à la place de Gemini.
- **Termes à gloser** : « parapheur » et « courrier départ » sont connus du public ; « registre » est employé dans ses deux sens (registre du courrier, registre de langue) : l'écran précise lequel.
- **Adaptation EN** : « J'ai l'honneur de… » n'a pas d'équivalent courant ; garder la formule française à l'écran, sous-titrée « I have the honour to… (formal French administrative opening) ». « Parapheur » = « signature folder » ; « courrier départ » = « outgoing mail register ». RCTF = « Role, Context, Task, Format » : le sigle reste RCTF, les étiquettes des blocs sont traduites.
- **Adaptation HA / DJE** : les lettres restent rédigées en français ; garder les formules en français à l'écran et les expliquer à l'oral. « Discrétion professionnelle » : dire « ne pas révéler ce qu'on apprend au travail ». La consigne reste en français à l'écran (le courrier est en français) ; le sigle RCTF et le rôle de chaque bloc sont expliqués à l'oral.

### Leçon 2 — Transformer vos notes de réunion en procès-verbal avec l'IA (`ad2`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez transformer vos notes en procès-verbal fidèle, prêt à valider. »
- **Cas réel (B1 → B6)** : à la direction régionale fictive de Tahoua (Niger), la réunion de coordination a eu lieu (acquis de la leçon 1 : la lettre d'invitation est partie sans rien divulguer). Dix participants, trois points à l'ordre du jour. Zeinabou, secrétaire de séance, a trois pages de notes ; le procès-verbal doit être signé par le président de séance et par elle. Tentation : tout enregistrer la prochaine fois et laisser l'IA écrire. Enjeu : un PV engage les services ; une décision inventée ou oubliée crée des conflits. Fermeture en B6 (champ `example`) : le PV est signé ; à la réunion suivante, le suivi part du tableau des actions.
- **Unités de notion (B3)** : 1. Le procès-verbal fait foi, une fois signé — le compte rendu informe les absents ; le procès-verbal constate officiellement débats et décisions. · 2. Rien que vos notes — l'IA met en forme, elle n'ajoute rien ; les noms sont remplacés par les fonctions avant de coller, et reviennent dans le document final ; une information manquante devient « [À COMPLÉTER] ». · 3. Qui, quoi, quand — le PV se termine par un tableau des actions (action, responsable, échéance), relu à la réunion suivante ; le président de séance valide avant les signatures.
- **Démo (B4)** : Gemini, version gratuite, navigateur d'ordinateur. 1. Coller la consigne RCTF : Rôle ; Contexte avec les notes, où chaque participant est désigné par sa fonction ; Tâche ; Format avec le modèle de PV du service (sans noms). 2. Lire le brouillon : participants, ordre du jour, déroulement, décisions, tableau des actions, ton neutre. 3. Repérer la mention « [À COMPLÉTER] » (heure de levée de séance, absente des notes) et la compléter depuis l'agenda. 4. Comparer chaque décision du brouillon avec les notes. 5. Copier dans le modèle du service, remettre les noms, transmettre au président de séance. Résultat attendu à l'écran : un PV structuré, fidèle aux notes, avec son tableau des actions.
- **Consolidation (B5)** : prédiction. « Le brouillon contient : “Il a été décidé de reporter la campagne.” Vos notes n'en disent rien. Que faites-vous ? » — 3 s de silence — « Vous supprimez la phrase, ou vous la faites confirmer par le président de séance. Un procès-verbal ne contient que ce qui a été dit et décidé. »
- **Consigne à copier** :

```text
Rôle : tu es secrétaire de séance dans une administration publique.
Contexte : voici mes notes d'une réunion. Les participants sont désignés par leur fonction. Notes : [collez vos notes, sans noms ni données personnelles]
Tâche : rédige le brouillon du procès-verbal, dans un style neutre, à la troisième personne. N'ajoute rien qui ne figure pas dans mes notes. Si une information manque, écris [À COMPLÉTER].
Format : date et lieu, participants (fonctions), ordre du jour, déroulement point par point, décisions, tableau des actions (action, responsable, échéance), levée de séance. Suis la présentation de ce modèle de mon service : [collez un modèle de PV sans noms].
```

- **Exercice** : « Transformez vos notes en procès-verbal » — 1. Reprenez les notes d'une réunion récente et non confidentielle, ou les notes fictives fournies avec le cours. 2. Remplacez chaque nom par une fonction. 3. Remplissez les quatre blocs de la consigne (Rôle, Contexte, Tâche, Format), puis comparez chaque décision du brouillon avec vos notes. 4. Complétez les « [À COMPLÉTER] », remettez les noms dans le modèle du service et transmettez au président de séance.
- **Carte de rappel** : 1. Le PV fait foi une fois signé 2. Rien que vos notes 3. Qui, quoi, quand
- **Quiz** :
  1. Quelle est la différence entre un compte rendu et un procès-verbal ? — A) Aucune, ce sont deux noms du même document B) Le compte rendu informe ; le procès-verbal constate officiellement débats et décisions C) Le procès-verbal est toujours plus court D) Le compte rendu doit être signé par tous les participants — **Réponse : B**
  2. Le brouillon contient une décision absente de vos notes. Que faites-vous ? — A) Vous la gardez, elle semble logique B) Vous la mettez en gras C) Vous la supprimez, ou vous la faites confirmer par le président de séance D) Vous l'ajoutez au tableau des actions — **Réponse : C**
  3. Que contient le tableau qui termine le procès-verbal ? — A) L'action, le responsable et l'échéance B) Les numéros de téléphone des participants C) Les opinions de la secrétaire D) Le budget de l'année — **Réponse : A**
  4. L'heure de fin manque dans vos notes. Que demande la consigne à l'IA ? — A) De la deviner B) De mettre une heure plausible C) De supprimer la rubrique D) D'écrire « [À COMPLÉTER] » — **Réponse : D**
  5. Un collègue propose d'enregistrer la prochaine réunion et de confier l'enregistrement à un outil grand public. Que vérifiez-vous d'abord ? — A) La qualité du micro B) L'accord des participants, les règles du service et la sensibilité de la réunion C) La durée de la réunion D) Rien, c'est plus rapide — **Réponse : B**
- **Marques citées** : Gemini (Google)

#### Script v1 (à valider par l'owner)

Durée estimée : 4:01 · Mots de voix off : 389

**Scène 1 — B1 Accroche · 0:00–0:09 · E**
- Visuel : illustration en aplats, salle de réunion de la direction régionale de Tahoua (décor générique) : une table en U, des chevalets de fonction sans nom, Zeinabou en bout de table, cahier de notes ouvert. Le parapheur reçoit un second document vide.
- Écran : « Réunion de coordination · Tahoua, Niger · Zeinabou, secrétaire de séance »
- VO : « La lettre de Zeinabou est partie sans rien divulguer. La réunion de coordination a eu lieu, à Tahoua. »

**Scène 2 — B1 Accroche · 0:09–0:19 · B**
- Visuel : carte de promesse sur la chemise du parapheur.
- Écran : « Transformer vos notes en procès-verbal fidèle, prêt à valider »
- VO : « À la fin de cette leçon, vous saurez transformer vos notes en procès-verbal fidèle, prêt à valider. »

**Scène 3 — B2 Cadrage · 0:19–0:39 · C**
- Visuel : un micro dessiné relié à une fenêtre d'assistant. Deux conditions s'affichent devant lui : « accord des participants » et « règles du service » ; puis une étiquette « réunion sensible » barre la flèche d'une croix.
- Écran : « Enregistrer ? Accord, règles, et jamais une réunion sensible »
- VO : « Zeinabou a trois pages de notes. Un collègue lui conseille : “Enregistre, et l'IA écrira tout.” Deux problèmes. Enregistrer exige l'accord des participants, et des règles claires. Et une réunion sensible n'a rien à faire dans un outil grand public. »

**Scène 4 — B2 Cadrage · 0:39–0:49 · A**
- Visuel : capture `ad2-01` — les notes de Zeinabou, saisies dans le traitement de texte, défilement lent ; les noms sont couverts d'aplats annotés « nom ».
- Écran : « Une transcription n'est pas un procès-verbal »
- VO : « Et une transcription n'est pas un procès-verbal. Le procès-verbal retient les décisions, et engage ceux qui le signent. »

**Scène 5 — B3 Notion · 0:49–1:09 · B**
- Visuel : carte typographique en deux colonnes : « Compte rendu : informe les absents » / « Procès-verbal : constate, fait foi une fois signé ».
- Écran : « 1 · Compte rendu : informe · Procès-verbal : fait foi »
- VO : « Première règle : le procès-verbal fait foi, une fois signé. On dit souvent “PV”. Le compte rendu informe ceux qui étaient absents. Le procès-verbal constate officiellement les débats et les décisions. »

**Scène 6 — B3 Notion · 1:09–1:27 · A**
- Visuel : capture `ad2-02` — les mêmes notes, où chaque nom a été remplacé par une fonction (« Chef du service de l'hydraulique », « Représentant de la mairie », « ONG A »). Cadre sur deux remplacements.
- Écran : « 2 · Rien que vos notes · fonctions au lieu des noms »
- VO : « Deuxième règle : rien que vos notes. L'IA met en forme ; elle ne doit rien ajouter. Avant de coller, remplacez les noms par les fonctions. Les noms reviendront dans le document final. »

**Scène 7 — B3 Notion · 1:27–1:47 · G**
- Visuel : carte de consigne RCTF, fond clair, consigne complète ; les étiquettes « Rôle », « Contexte », « Tâche », « Format » s'allument une à une. Soulignés, dans le bloc Tâche : « N'ajoute rien », « [À COMPLÉTER] ».
- Écran : « Consigne RCTF : Rôle · Contexte · Tâche · Format », puis la consigne à copier de la fiche, en entier, avec ses quatre blocs.
- VO : « La consigne suit la méthode RCTF : Rôle, Contexte, Tâche, Format. Son bloc Tâche le dit noir sur blanc. Rien d'ajouté. Et si une information manque : “À compléter”, entre crochets. »

**Scène 8 — B3 Notion · 1:47–2:07 · C**
- Visuel : schéma d'un tableau à trois colonnes « Action · Responsable · Échéance » qui se remplit ligne à ligne ; puis la chaîne de validation : président de séance (visa), puis deux signatures stylisées.
- Écran : « 3 · Le tableau des actions : qui · quoi · quand »
- VO : « Troisième règle : terminez par un tableau. Qui fait quoi, et pour quand. C'est lui qu'on relit à la réunion suivante. Ensuite, le président de séance relit et valide. Les signatures viennent après. »

**Scène 9 — B4 Application · 2:07–2:21 · A**
- Visuel : capture `ad2-03` — dans Gemini, la consigne RCTF : les notes anonymisées dans le bloc Contexte, le modèle de PV sans noms dans le bloc Format, puis l'envoi.
- Écran : « Consigne RCTF : notes anonymisées + modèle de PV »
- VO : « Zeinabou remplit les quatre blocs. Dans le contexte, ses notes : les participants y sont désignés par leur fonction. »

**Scène 10 — B4 Application · 2:21–2:33 · A**
- Visuel : capture `ad2-04` — le brouillon, défilement lent ; cadres successifs sur « Participants », « Ordre du jour », « Déroulement », « Décisions », puis sur le tableau des actions. Étiquette « BROUILLON ».
- Écran : « Structure du PV · tableau des actions »
- VO : « Le brouillon suit la structure : participants, ordre du jour, déroulement, décisions. Puis le tableau des actions. Le ton est neutre, à la troisième personne. »

**Scène 11 — B4 Application · 2:33–2:47 · A**
- Visuel : capture `ad2-05` — cadre sur « [À COMPLÉTER] » à la ligne de levée de séance ; puis l'agenda de Zeinabou (fictif) et l'heure saisie dans le texte.
- Écran : « [À COMPLÉTER] → l'heure retrouvée »
- VO : « Une mention “À compléter” apparaît : l'heure de levée de séance, absente des notes. Zeinabou la retrouve dans son agenda. »

**Scène 12 — B4 Application · 2:47–2:59 · A**
- Visuel : capture `ad2-06` — décisions du brouillon et notes en alternance ; une coche dessinée à chaque décision retrouvée dans les notes.
- Écran : « Chaque décision ↔ les notes »
- VO : « Elle compare chaque décision du brouillon avec ses notes, une par une. »

**Scène 13 — B4 Application · 2:59–3:11 · A**
- Visuel : capture `ad2-07` — le texte collé dans le modèle de PV du service (« [EN-TÊTE DU SERVICE] », « Exemple fictif ») ; les fonctions redeviennent des noms fictifs ; blocs de signature « Le Président de séance » et « La Secrétaire de séance ».
- Écran : « Les noms reviennent hors de l'outil · visa du président »
- VO : « Dans le modèle du service, elle remet les noms. Puis elle transmet au président de séance, pour validation. »

**Scène 14 — B5 Consolidation · 3:11–3:37 · B**
- Visuel : carte question. Une phrase du brouillon est encadrée : « Il a été décidé de reporter la campagne. » À côté, le cahier de notes : aucune ligne correspondante. Silence de 3 s, puis la phrase est barrée d'une croix.
- Écran : « “Il a été décidé de reporter la campagne.” · Dans vos notes : rien »
- VO : « À vous. Le brouillon contient : “Il a été décidé de reporter la campagne.” Vos notes n'en disent rien. Que faites-vous ? » [silence 3 s] « Vous supprimez la phrase, ou vous la faites confirmer par le président de séance. Un procès-verbal ne contient que ce qui a été dit et décidé. »

**Scène 15 — B6 Clôture · 3:37–3:47 · B (rappel de la promesse)**
- Visuel : le PV entre dans le parapheur ; la case « Visa » se coche ; deux signatures stylisées, illisibles. La promesse revient, mot pour mot.
- Écran : « Transformer vos notes en procès-verbal fidèle, prêt à valider »
- VO : « Le procès-verbal est signé. À la réunion suivante, le suivi part du tableau des actions. »

**Scène 16 — B6 Clôture · 3:47–4:01 · B (carte de rappel)**
- Visuel : carte de rappel, points révélés au rythme de la voix ; tenue ≥ 4 s après le dernier point.
- Écran : « 1. Le PV fait foi une fois signé » « 2. Rien que vos notes » « 3. Qui, quoi, quand »
- VO : « Retenez : le procès-verbal fait foi, une fois signé. Rien que vos notes. Et un tableau : qui, quoi, quand. Transformez vos notes en procès-verbal. »

#### Captures à fournir par l'owner

Ordinateur, navigateur en français, zoom 125 %. Compte Google de tournage pour Gemini. Traitement de texte avec barre d'outils recadrée hors champ. Documents fictifs préparés à l'avance (voir 2.6) : les notes de réunion (trois pages, l'heure de levée de séance volontairement absente, aucune décision de report), leur version anonymisée et un modèle de PV de service. À masquer : compte, sélecteur de modèle, bandeaux.

- **`ad2-01` (scène 4)** — Les notes brutes dans le traitement de texte, noms couverts d'aplats annotés « nom ». Défilement lent sur les trois pages. Durée utile : 8 s.
- **`ad2-02` (scène 6)** — La version anonymisée des mêmes notes, où chaque nom est remplacé par une fonction. Marquer une pause sur deux remplacements. Durée utile : 8 s.
- **`ad2-03` (scène 9)** — Gemini, nouvelle conversation. Coller la consigne de la fiche, un bloc par ligne : les notes anonymisées après « Notes : » (bloc Contexte), puis le modèle de PV après « modèle de mon service : » (bloc Format). Envoyer. Durée utile : 10 s.
- **`ad2-04` (scène 10)** — Filmer l'arrivée du brouillon, puis un défilement lent jusqu'au tableau des actions. Durée utile : 12 s.
- **`ad2-05` (scène 11)** — Cadrer la ligne de levée de séance avec « [À COMPLÉTER] » ; puis montrer l'agenda fictif et taper l'heure dans le texte copié. Si la mention n'apparaît pas, recommencer dans une nouvelle conversation. Durée utile : 10 s.
- **`ad2-06` (scène 12)** — Alterner décisions du brouillon et notes ; pointer chaque décision avec le curseur. Si le brouillon contient un élément absent des notes, garder la prise et le signaler à la validation : la VO de la scène 12 sera ajustée. Durée utile : 10 s.
- **`ad2-07` (scène 13)** — Coller le texte validé dans le modèle de PV du service ; remplacer les fonctions par des noms fictifs (prénom et initiale) ; montrer les blocs de signature. Durée utile : 10 s.

#### Notes de script

- **Prononciation** : « PV » « pé-vé » ; « procès-verbal » sans élision.
- **Exactitude** : la distinction compte rendu / procès-verbal suit l'usage administratif courant ; certains services nomment autrement leurs documents : le modèle du service prime. Beaucoup d'administrations d'Afrique francophone ouvrent le PV par une formule du type « L'an deux mille vingt-six, le …, s'est tenue … sous la présidence de … » : si c'est l'usage du service, elle figure dans le modèle collé, pas dans la VO.
- **Enregistrement et transcription** : aucun outil de transcription n'est montré ni nommé. Si l'owner souhaite en citer un, vérifier son existence, ses conditions et son traitement des données. [à vérifier au moment de la production] La règle de la scène 3 s'applique dans tous les cas : accord des participants, règles du service, jamais de réunion sensible dans un outil grand public.
- **Pièges** : l'IA peut embellir ou « compléter » une décision ; c'est l'objet de B5. Les chevalets et documents ne portent aucun nom réel.
- **Termes à gloser** : « PV » est dit une fois en toutes lettres puis abrégé ; « levée de séance » est montré par l'exemple ; « noir sur blanc » est une image familière.
- **Adaptation EN** : « procès-verbal » = « official minutes » ; « compte rendu » = « meeting summary » ; « président de séance » = « chair » ; « secrétaire de séance » = « meeting secretary » ; « levée de séance » = « close of the meeting » ; « noir sur blanc » = « in black and white » ; blocs RCTF : « Role, Context, Task, Format ».
- **Adaptation HA / DJE** : garder « procès-verbal » et « PV » en français, expliquer la différence avec le compte rendu par l'exemple (« le PV engage, le compte rendu informe »). « Noir sur blanc » : dire « clairement, par écrit ».

### Leçon 3 — Résumer un texte réglementaire avec l'IA et vérifier chaque article (`ad3`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez résumer un texte réglementaire avec l'IA, et vérifier chaque point. »
- **Cas réel (B1 → B6)** : après le PV de Zeinabou à Tahoua (acquis de la leçon 2), le cours change de pays. Souleymane, chef de service dans une direction régionale fictive de Bouaké (Côte d'Ivoire), doit présenter lundi à son directeur les obligations que fixe aux agents publics un long décret (texte fictif pour la démonstration, voir Captures) : un texte long, un week-end court. Tentation : se contenter d'un résumé de l'IA. Enjeu : une erreur dans une synthèse devient une consigne fausse donnée aux agents. Fermeture en B6 (champ `example`) : lundi, le directeur demande « Où est-ce écrit ? » ; Souleymane ouvre l'article ; sa note tient en une page.
- **Unités de notion (B3)** : 1. Textes publics seulement — un texte publié au Journal officiel peut aller dans l'outil ; une note interne, un projet de texte, un document classé, jamais. · 2. Un point, un article — exiger le numéro d'article pour chaque point et les mots exacts pour délais, montants, conditions et exceptions ; Gemini Notebook (anciennement NotebookLM) ajoute des citations cliquables. · 3. Le texte officiel fait foi — vérifier chaque point dans l'article, et vérifier que le texte est en vigueur, ni modifié ni abrogé.
- **Démo (B4)** : Gemini Notebook dans le navigateur d'un ordinateur. 1. Créer un carnet « Textes RH ». 2. Ajouter comme source le PDF du décret (texte fictif de la démonstration ; dans l'exercice, l'apprenant télécharge un texte depuis une source officielle de son pays). 3. Coller la consigne RCTF : Rôle, Contexte, Tâche (les obligations des agents), Format (une ligne par point, avec l'article). 4. La liste arrive, chaque ligne avec sa citation. 5. Toucher la citation de la ligne sur la discrétion professionnelle : le passage s'affiche ; ouvrir le PDF à l'article correspondant (article 9 du texte fictif) et comparer les mots. 6. Faire de même pour chaque ligne ; retirer toute ligne sans article. 7. Rédiger la note d'une page dans le modèle du service : objet, points clés avec articles, deux questions à clarifier. Résultat attendu à l'écran : une note dont chaque point renvoie à un article vérifié.
- **Consolidation (B5)** : prédiction, exemple fictif affiché comme tel. « La synthèse indique “délai de trente jours”. L'article dit “quinze jours”. Que retenez-vous ? » — 3 s de silence — « Quinze jours : le texte officiel fait toujours foi. Vous corrigez la synthèse avant de la transmettre, et vous vérifiez les autres points. »
- **Consigne à copier** :

```text
Rôle : tu aides un chef de service d'une administration publique à lire un texte réglementaire.
Contexte : je dois présenter à mon directeur ce texte réglementaire public, déposé comme source. Il concerne [public concerné].
Tâche : à partir de ce texte uniquement, liste les [obligations / procédures / délais] qu'il fixe pour [public concerné]. N'ajoute rien qui ne figure pas dans le texte. Si un point est ambigu, signale-le.
Format : une ligne par point, avec le numéro de l'article entre parenthèses. Garde les mots exacts du texte pour les délais, montants, conditions et exceptions.
```

- **Exercice** : « Synthétisez un texte public, article par article » — 1. Téléchargez, depuis une source officielle de votre pays, un texte réglementaire public lié à votre travail. 2. Déposez-le dans Gemini Notebook et remplissez les quatre blocs de la consigne (Rôle, Contexte, Tâche, Format). 3. Vérifiez chaque point dans le texte, article par article, et vérifiez que le texte est toujours en vigueur. 4. Rédigez une note d'une page : objet, points clés avec leurs articles, questions à clarifier.
- **Carte de rappel** : 1. Textes publics seulement 2. Un point, un article 3. Le texte officiel fait foi
- **Quiz** :
  1. Lequel de ces documents pouvez-vous déposer dans un outil grand public ? — A) Un décret publié au Journal officiel B) Un projet de note confidentielle C) Le dossier disciplinaire d'un agent D) Un rapport interne classé — **Réponse : A**
  2. Pourquoi exiger le numéro d'article pour chaque point de la synthèse ? — A) Pour allonger la note B) Pour pouvoir vérifier chaque point dans le texte C) Parce que le directeur aime les chiffres D) Pour ne pas avoir à lire le texte — **Réponse : B**
  3. La synthèse dit « trente jours », l'article dit « quinze jours ». Que retenez-vous ? — A) Trente jours, c'est la synthèse B) La moyenne des deux C) Quinze jours, ce que dit l'article D) Vous demandez à l'IA de choisir — **Réponse : C**
  4. Avant de diffuser votre note, que vérifiez-vous aussi ? — A) Que la note tient en dix lignes B) Que l'IA est d'accord avec vous C) Que le PDF est en couleur D) Que le texte est toujours en vigueur, ni modifié ni abrogé — **Réponse : D**
  5. Dans Gemini Notebook, comment voir d'où vient un point de la synthèse ? — A) Demander à un collègue B) Toucher le numéro de citation pour afficher le passage C) Régénérer la réponse D) Changer d'outil — **Réponse : B**
- **Marques citées** : Gemini Notebook, NotebookLM (Google)

#### Script v1 (à valider par l'owner)

Durée estimée : 4:02 · Mots de voix off : 383

**Scène 1 — B1 Accroche · 0:00–0:09 · E**
- Visuel : illustration en aplats, bureau de Souleymane à Bouaké (décor générique) le vendredi soir, un épais document relié devant lui, calendrier ouvert sur « lundi ». Le parapheur reçoit un troisième document vide.
- Écran : « Souleymane · chef de service · Bouaké, Côte d'Ivoire · un décret à présenter lundi »
- VO : « Bouaké, en Côte d'Ivoire. Lundi, Souleymane, chef de service, doit présenter un long décret à son directeur. »

**Scène 2 — B1 Accroche · 0:09–0:19 · B**
- Visuel : carte de promesse sur la chemise du parapheur.
- Écran : « Résumer un texte réglementaire avec l'IA, et vérifier chaque point »
- VO : « À la fin de cette leçon, vous saurez résumer un texte réglementaire avec l'IA, et vérifier chaque point. »

**Scène 3 — B2 Cadrage · 0:19–0:37 · C**
- Visuel : un long texte se comprime en un court résumé ; trois mots tombent en route (« sauf », « au plus tard », « sous réserve »), chacun marqué d'une croix.
- Écran : « Un résumé omet, arrondit, inverse »
- VO : « Le texte est long, le temps court. Il pense : “Le résumé de l'IA, c'est le texte en plus court.” C'est faux. Un résumé omet, arrondit, et peut inverser une condition. »

**Scène 4 — B2 Cadrage · 0:37–0:49 · A**
- Visuel : capture `ad3-01` — la première page du PDF du décret. Cadre sur l'intitulé.
- Écran : « “sauf” · “au plus tard” · “sous réserve” »
- VO : « Dans un texte réglementaire, un seul mot change tout : “sauf”, “au plus tard”, “sous réserve”. Le résumé ne remplace pas le texte. »

**Scène 5 — B3 Notion · 0:49–1:07 · C**
- Visuel : schéma « Le filtre ». Passe (coche) : « texte publié au Journal officiel ». Ne passent jamais (croix) : « note interne », « projet de texte », « document classé ».
- Écran : « 1 · Textes publics seulement »
- VO : « Première règle : seulement des textes publics. Un décret publié au Journal officiel peut aller dans l'outil. Une note interne, un projet de texte, un document classé : jamais. »

**Scène 6 — B3 Notion · 1:07–1:27 · A**
- Visuel : capture `ad3-02` — Gemini Notebook, une réponse avec numéros de citation ; le toucher d'un numéro affiche le passage. Encart : « anciennement NotebookLM ».
- Écran : « 2 · Un point, un article »
- VO : « Deuxième règle : un point, un article. Exigez le numéro d'article pour chaque point. Gemini Notebook, l'outil qu'on appelait NotebookLM, ajoute des citations : touchez-les pour voir le passage. »

**Scène 7 — B3 Notion · 1:27–1:46 · G**
- Visuel : carte de consigne RCTF, fond clair, consigne complète ; les étiquettes « Rôle », « Contexte », « Tâche », « Format » s'allument une à une. Soulignés : « signale-le » (bloc Tâche), « numéro de l'article », « mots exacts » (bloc Format).
- Écran : « Consigne RCTF : Rôle · Contexte · Tâche · Format », puis la consigne à copier de la fiche, en entier, avec ses quatre blocs.
- VO : « La consigne suit la méthode RCTF : Rôle, Contexte, Tâche, Format. Le format exige les mots exacts : délais, montants, conditions, exceptions. Et la tâche, de signaler ce qui est ambigu. »

**Scène 8 — B3 Notion · 1:46–2:06 · B**
- Visuel : carte typographique ; une balance penche du côté « Texte officiel » contre « Synthèse » ; puis deux cases à cocher : « en vigueur », « ni modifié ni abrogé ».
- Écran : « 3 · Le texte officiel fait foi · en vigueur ? »
- VO : « Troisième règle : le texte officiel fait foi. Pas la synthèse. Vérifiez chaque point dans l'article. Et vérifiez que le texte est toujours en vigueur : ni modifié, ni abrogé. Abrogé, c'est-à-dire supprimé par un texte plus récent. »

**Scène 9 — B4 Application · 2:06–2:18 · A**
- Visuel : capture `ad3-03` — création du carnet « Textes RH » et ajout du PDF comme source.
- Écran : « Carnet “Textes RH” · source : le décret en PDF »
- VO : « Souleymane crée un carnet, “Textes RH”. Il y dépose le décret, en PDF, téléchargé d'une source officielle. »

**Scène 10 — B4 Application · 2:18–2:32 · A**
- Visuel : capture `ad3-04` — la consigne RCTF envoyée, puis la liste des obligations, chaque ligne terminée par un article et une citation. Étiquette « BROUILLON ».
- Écran : « Une ligne = un point + son article »
- VO : « Il colle la consigne : les obligations des agents, avec les articles. La liste arrive, chaque ligne avec sa citation. »

**Scène 11 — B4 Application · 2:32–2:46 · A**
- Visuel : capture `ad3-05` — toucher de la citation sur la discrétion professionnelle, passage affiché ; puis le PDF ouvert à l'article correspondant, mot recherché surligné ; trait reliant les deux.
- Écran : « La citation ↔ l'article du texte »
- VO : « Il touche une citation : l'article sur la discrétion professionnelle. Puis il ouvre le PDF à cet article, et compare. »

**Scène 12 — B4 Application · 2:46–2:58 · A**
- Visuel : capture `ad3-06` — défilement de la liste ; une coche à chaque ligne vérifiée ; une ligne sans article est barrée.
- Écran : « Ligne vérifiée ✓ · ligne sans article ✗ »
- VO : « Les mots concordent. Il fait de même pour chaque ligne, une par une. Une ligne sans article ? Il la retire. »

**Scène 13 — B4 Application · 2:58–3:12 · A**
- Visuel : capture `ad3-07` — la note d'une page dans le modèle du service (« [EN-TÊTE DU SERVICE] », « Exemple fictif ») : objet, points clés avec articles, deux questions à clarifier.
- Écran : « Note d'une page : objet · points + articles · questions »
- VO : « Enfin, il rédige sa note d'une page : objet, points clés avec leurs articles, et deux questions à clarifier. Il la colle dans le modèle de note du service. »

**Scène 14 — B5 Consolidation · 3:12–3:38 · B**
- Visuel : carte question, mention « Exemple fictif ». Deux étiquettes face à face : « Synthèse : 30 jours » / « Article : 15 jours ». Silence de 3 s, puis croix sur la synthèse, cadre sur l'article.
- Écran : « Exemple fictif · Synthèse : 30 jours · Article : 15 jours »
- VO : « À vous. La synthèse indique : “délai de trente jours”. L'article dit : “quinze jours”. Que retenez-vous ? » [silence 3 s] « Quinze jours. Le texte officiel fait toujours foi. Vous corrigez la synthèse avant de la transmettre, et vous vérifiez les autres points. »

**Scène 15 — B6 Clôture · 3:38–3:48 · B (rappel de la promesse)**
- Visuel : bureau du directeur ; une bulle « Où est-ce écrit ? » ; Souleymane pointe l'article sur son écran. La promesse revient, mot pour mot.
- Écran : « Résumer un texte réglementaire avec l'IA, et vérifier chaque point »
- VO : « Lundi, le directeur demande : “Où est-ce écrit ?” Souleymane ouvre l'article. La note tient en une page. »

**Scène 16 — B6 Clôture · 3:48–4:02 · B (carte de rappel)**
- Visuel : carte de rappel, points révélés au rythme de la voix ; tenue ≥ 4 s après le dernier point.
- Écran : « 1. Textes publics seulement » « 2. Un point, un article » « 3. Le texte officiel fait foi »
- VO : « Retenez : des textes publics seulement. Un point, un article. Le texte officiel fait foi. Synthétisez un texte public, article par article. »

#### Captures à fournir par l'owner

Ordinateur, navigateur en français, zoom 125 %. Compte Google de tournage pour Gemini Notebook, sans autre carnet. Texte utilisé : un décret **fictif et générique**, rédigé par Claude et relu par l'owner (voir 2.6), en PDF : « Décret portant obligations des agents publics — Exemple fictif ». Une douzaine de pages, une vingtaine d'articles, dont l'article 9 sur la discrétion professionnelle, et au moins un délai, une condition et une exception (« sauf », « au plus tard », « sous réserve »). Aucun emblème, aucune devise, aucune mention « République de… », aucun numéro de texte réel, aucune signature ; mention « Exemple fictif » en tête de chaque page. Variante, au choix de l'owner : un texte réglementaire public ivoirien en vigueur, téléchargé depuis une source officielle [à vérifier au moment de la production : en vigueur, article sur la discrétion, adresse de la source] ; la VO ne cite aucun numéro d'article et reste valable. À masquer : compte, bandeaux.

- **`ad3-01` (scène 4)** — Ouvrir le PDF dans le navigateur, première page, intitulé lisible. Durée utile : 6 s.
- **`ad3-02` (scène 6)** — Dans le carnet de la démo, poser d'abord : « Quel est l'objet de ce décret ? Cite l'article. » Toucher le numéro de citation ; laisser le passage affiché. Durée utile : 10 s.
- **`ad3-03` (scène 9)** — Depuis l'accueil de Gemini Notebook : créer un carnet, le nommer « Textes RH », ajouter le PDF comme source, attendre qu'il apparaisse. Durée utile : 10 s.
- **`ad3-04` (scène 10)** — Coller ce texte exact, un bloc par ligne, et l'envoyer : « Rôle : tu aides un chef de service d'une administration publique à lire un texte réglementaire. » / « Contexte : je dois présenter à mon directeur ce texte réglementaire public, déposé comme source. Il concerne les agents publics. » / « Tâche : à partir de ce texte uniquement, liste les obligations qu'il fixe pour les agents publics. N'ajoute rien qui ne figure pas dans le texte. Si un point est ambigu, signale-le. » / « Format : une ligne par point, avec le numéro de l'article entre parenthèses. Garde les mots exacts du texte pour les délais, montants, conditions et exceptions. » Filmer la liste. Durée utile : 12 s.
- **`ad3-05` (scène 11)** — Toucher la citation de la ligne sur la discrétion professionnelle ; puis, dans le PDF, lancer la recherche du mot « discrétion » et s'arrêter sur l'article. Durée utile : 12 s.
- **`ad3-06` (scène 12)** — Copier la liste dans un document ; défiler en pointant chaque ligne ; supprimer une ligne sans article s'il y en a une. Durée utile : 8 s.
- **`ad3-07` (scène 13)** — La note d'une page dans le modèle fictif du service. Durée utile : 10 s.

#### Notes de script

- **Prononciation** : « NotebookLM » « note-bouk-èl-ème » ; « Journal officiel » sans abréviation ; Bouaké « bou-a-ké » ; RCTF lettre par lettre.
- **Exactitude** : le décret de la démonstration est fictif ; la VO ne cite aucun numéro d'article ni aucun texte réel d'un pays, et reste juste si l'owner choisit la variante d'un texte ivoirien réel. Le principe « le texte publié au Journal officiel fait foi » est général ; ne citer aucune adresse de site officiel dans la VO. Dans l'exercice, chaque apprenant télécharge un texte de son pays.
- **Point d'actualité** : Gemini Notebook est le nom de NotebookLM depuis le 16 juillet 2026. [à vérifier au moment de la production : libellés du bouton d'ajout de source et de la citation]
- **Pièges** : le décret fictif ne reproduit aucun statut réel d'un pays (aucune copie d'article existant). L'exemple « trente jours / quinze jours » est fictif et doit porter la mention à l'écran. Ne jamais déposer un projet de texte ni une note interne, même pour la démo. Si la liste produite contient une ligne sans article, c'est un bon moment de capture : la scène 12 le montre.
- **Termes à gloser** : « abrogé » est glosé dans la VO ; « en vigueur » est montré par la case à cocher.
- **Adaptation EN** : « Journal officiel » = « Official Gazette » ; « abrogé » = « repealed » ; « note de synthèse » = « briefing note » ; « décret » = « decree » ; blocs RCTF : « Role, Context, Task, Format ».
- **Adaptation HA / DJE** : garder « décret », « article » et « Journal officiel » en français ; expliquer « abrogé » (« qui ne s'applique plus ») et « en vigueur » (« qui s'applique aujourd'hui »).

### Leçon 4 — Rédiger un rapport d'activités avec l'IA, à partir de vos chiffres vérifiés (`ad4`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez construire un rapport d'activités avec l'IA, sur vos chiffres vérifiés. »
- **Cas réel (B1 → B6)** : Souleymane sait désormais vérifier une synthèse article par article (acquis de la leçon 3). Vendredi, il doit rendre le rapport d'activités trimestriel de son service, à la direction régionale fictive de Bouaké (Côte d'Ivoire). Il dispose d'un tableau d'activités (exemple fictif : vingt prévues, dix-sept réalisées) et de notes sur les difficultés. Tentation : demander « Écris-moi un rapport ». Enjeu : le rapport remonte la hiérarchie ; un chiffre faux engage le service. Fermeture en B6 (champ `example`) : vendredi, le rapport part à l'heure, chaque chiffre recalculé ; le directeur le vise et le transmet.
- **Unités de notion (B3)** : 1. Le plan d'abord — contexte, activités réalisées, résultats, difficultés, recommandations ; le modèle imposé par le ministère prime ; le plan est donné à l'IA avec les données. · 2. Vos chiffres, recalculés — l'IA peut se tromper ou arrondir sans le dire ; elle montre chaque calcul, l'agent le refait ; chaque chiffre est marqué « [À VÉRIFIER] » jusqu'au contrôle. · 3. Faits, analyse, recommandations — un fait se constate, une analyse s'argumente, une recommandation dit qui fait quoi et quand ; des totaux, jamais de listes de noms.
- **Démo (B4)** : Gemini, version gratuite, navigateur d'ordinateur ; calculatrice du téléphone. 1. Coller la consigne RCTF : Rôle (avec le trimestre), Contexte (le tableau anonymisé et les notes), Tâche, Format (le plan du service). 2. Lire le brouillon : il suit le plan ; le taux de réalisation apparaît avec son calcul (dix-sept divisé par vingt). 3. Refaire le calcul sur la calculatrice : quatre-vingt-cinq pour cent ; retirer la mention « [À VÉRIFIER] ». 4. Réécrire une recommandation vague (« renforcer le suivi ») en qui, quoi, quand. 5. Coller les sections dans le modèle de rapport du service, feuille de calcul en annexe, et soumettre. Résultat attendu à l'écran : des sections fidèles au plan, des chiffres recalculés, des recommandations précises.
- **Consolidation (B5)** : prédiction, exemple fictif affiché comme tel. « Dans un autre brouillon, l'IA écrit “taux de réalisation : 90 %”. Le tableau dit dix-sept sur vingt. Juste ? » — 3 s de silence — « Non : dix-sept sur vingt, c'est 85 %. Un seul chiffre faux, et tout le rapport perd sa crédibilité. »
- **Consigne à copier** :

```text
Rôle : tu aides un chef de service d'une administration publique à rédiger le rapport d'activités du [trimestre] de son service.
Contexte : voici le tableau des activités (prévu, réalisé) et mes notes sur les difficultés. Les données sont anonymisées. Tableau et notes : [collez vos données, sans aucun nom]
Tâche : rédige les sections du rapport. N'invente aucun chiffre. Montre chaque calcul. Sépare les faits de l'analyse. Pour chaque recommandation, précise qui, quoi, quand.
Format : suis ce plan : [collez le plan ou le modèle imposé]. Marque chaque chiffre [À VÉRIFIER].
```

- **Exercice** : « Rédigez une page de rapport vérifiée » — 1. Préparez votre tableau d'activités (prévu, réalisé), sans aucun nom de personne. 2. Remplissez les quatre blocs de la consigne (Rôle, Contexte, Tâche, Format) avec votre tableau, vos notes et le plan de votre service. 3. Recalculez chaque chiffre vous-même et retirez chaque « [À VÉRIFIER] » après contrôle. 4. Réécrivez les recommandations (qui, quoi, quand), puis collez la page dans le modèle de votre service.
- **Carte de rappel** : 1. Le plan d'abord 2. Vos chiffres, recalculés 3. Faits, analyse, recommandations
- **Quiz** :
  1. Par quoi commencer un rapport d'activités avec l'IA ? — A) Par la conclusion B) Par le plan, ou le modèle imposé par votre ministère C) Par la mise en page D) Par les annexes — **Réponse : B**
  2. L'IA donne un taux de réalisation de 90 % ; votre tableau indique 17 activités réalisées sur 20. Que faites-vous ? — A) Vous gardez 90 % B) Vous arrondissez à 100 % C) Vous recalculez : 85 %, et vous corrigez D) Vous supprimez le taux — **Réponse : C**
  3. Quelle phrase est une recommandation utilisable ? — A) « Il faudrait faire mieux. » B) « La situation est préoccupante. » C) « Le service fera de son mieux. » D) « Le chef de service organisera une visite de suivi par mois dans chaque commune, dès juillet. » — **Réponse : D**
  4. Que pouvez-vous coller dans l'outil pour préparer votre rapport ? — A) Des totaux et des notes sans aucun nom B) La liste nominative des bénéficiaires C) Les évaluations individuelles des agents D) Les numéros de téléphone des partenaires — **Réponse : A**
  5. Pourquoi séparer les faits de l'analyse ? — A) Pour allonger le rapport B) Pour que le lecteur distingue ce qui est constaté de ce qui est interprété C) Parce que l'IA l'exige D) Pour cacher les difficultés — **Réponse : B**
- **Marques citées** : Gemini (Google)

#### Script v1 (à valider par l'owner)

Durée estimée : 4:05 · Mots de voix off : 377

**Scène 1 — B1 Accroche · 0:00–0:09 · E**
- Visuel : illustration en aplats, bureau de Souleymane à Bouaké (décor générique) ; un calendrier entoure « vendredi » ; classeurs et calculatrice. Le parapheur reçoit un quatrième document vide.
- Écran : « Souleymane · Bouaké, Côte d'Ivoire · rapport trimestriel à rendre vendredi »
- VO : « Souleymane sait vérifier une synthèse, article par article. Vendredi, à Bouaké, il rend le rapport trimestriel. »

**Scène 2 — B1 Accroche · 0:09–0:19 · B**
- Visuel : carte de promesse sur la chemise du parapheur.
- Écran : « Construire un rapport d'activités avec l'IA, sur vos chiffres vérifiés »
- VO : « À la fin de cette leçon, vous saurez construire un rapport d'activités avec l'IA, sur vos chiffres vérifiés. »

**Scène 3 — B2 Cadrage · 0:19–0:35 · C**
- Visuel : une fenêtre d'assistant produit un rapport « plausible » ; trois étiquettes s'y collent : « activités imaginaires », « chiffres ronds », « difficultés génériques », chacune avec une croix.
- Écran : « Sans vos données : plausible, et faux »
- VO : « Il est tenté de demander : “Écris-moi un rapport d'activités.” Sans ses données, l'IA produira un rapport plausible. Et faux. Des activités imaginaires, des chiffres ronds, des difficultés génériques. »

**Scène 4 — B2 Cadrage · 0:35–0:49 · A**
- Visuel : capture `ad4-01` — le tableau d'activités fictif dans un tableur (Activité, Prévu, Réalisé, Observations). Cadre sur les totaux : 20 et 17.
- Écran : « Le rapport part de votre tableau et de vos notes · Exemple fictif »
- VO : « La matière du rapport, c'est son tableau d'activités et ses notes. Rien d'autre. Le tableau ne contient aucun nom : des activités et des totaux. »

**Scène 5 — B3 Notion · 0:49–1:09 · B**
- Visuel : carte typographique ; le plan s'empile en cinq intercalaires (contexte, activités, résultats, difficultés, recommandations), puis un cachet générique « Modèle du ministère » se pose dessus.
- Écran : « 1 · Le plan d'abord · le modèle du ministère prime »
- VO : « Première règle : le plan d'abord. Contexte, activités réalisées, résultats, difficultés, recommandations. Si votre ministère impose un modèle, c'est lui qui s'applique. Donnez ce plan à l'IA, avec vos données. »

**Scène 6 — B3 Notion · 1:09–1:27 · C**
- Visuel : une ligne de rapport « Taux de réalisation : … » ; à côté, une calculatrice dessinée qui refait le calcul ; une coche quand les deux concordent.
- Écran : « 2 · Vos chiffres, recalculés »
- VO : « Deuxième règle : vos chiffres, recalculés. L'IA peut se tromper dans un calcul, ou arrondir sans le dire. Exigez qu'elle montre chaque calcul. Puis refaites-le vous-même. »

**Scène 7 — B3 Notion · 1:27–1:47 · G**
- Visuel : carte de consigne RCTF, fond clair, consigne complète ; les étiquettes « Rôle », « Contexte », « Tâche », « Format » s'allument une à une. Soulignés : « N'invente aucun chiffre », « Montre chaque calcul » (bloc Tâche), « [À VÉRIFIER] » (bloc Format).
- Écran : « Consigne RCTF : Rôle · Contexte · Tâche · Format », puis la consigne à copier de la fiche, en entier, avec ses quatre blocs.
- VO : « Cette consigne suit la méthode RCTF : Rôle, Contexte, Tâche, Format. Sa tâche interdit d'inventer un chiffre. Son format marque chaque chiffre “À vérifier”. Vous retirez la mention après contrôle. »

**Scène 8 — B3 Notion · 1:47–2:07 · C**
- Visuel : trois colonnes : « Faits : se constatent » (loupe), « Analyse : s'argumente » (balance), « Recommandations : qui, quoi, quand » (calendrier). En bas, le schéma « Le filtre » : « totaux » (coche), « listes de noms » (croix).
- Écran : « 3 · Faits · analyse · recommandations »
- VO : « Troisième règle : séparez les faits, l'analyse et les recommandations. Un fait se constate. Une analyse s'argumente. Une recommandation dit qui fait quoi, et quand. Et jamais de listes de noms : des totaux seulement. »

**Scène 9 — B4 Application · 2:07–2:21 · A**
- Visuel : capture `ad4-02` — dans Gemini, la consigne RCTF : le tableau et les notes collés dans le bloc Contexte, le plan du service dans le bloc Format, puis l'envoi.
- Écran : « Consigne RCTF : tableau + notes + plan du service »
- VO : « Souleymane remplit les quatre blocs. Dans le contexte, son tableau : vingt activités prévues, dix-sept réalisées. Et ses notes sur les difficultés. »

**Scène 10 — B4 Application · 2:21–2:35 · A**
- Visuel : capture `ad4-03` — le brouillon ; cadres successifs sur les titres du plan, puis sur la ligne du taux de réalisation et son calcul. Étiquette « BROUILLON ».
- Écran : « Taux de réalisation : 17 ÷ 20 [À VÉRIFIER] »
- VO : « Le brouillon suit son plan. Le taux de réalisation apparaît, avec son calcul : dix-sept divisé par vingt. »

**Scène 11 — B4 Application · 2:35–2:49 · A**
- Visuel : capture `ad4-04` — la calculatrice du téléphone : 17 ÷ 20 × 100 = 85 ; puis, dans le texte copié, la mention « [À VÉRIFIER] » supprimée. Coche.
- Écran : « 17 ÷ 20 = 85 % ✓ »
- VO : « Il refait le calcul sur sa calculatrice : quatre-vingt-cinq pour cent. Le chiffre est juste. Il retire la mention “À vérifier”. »

**Scène 12 — B4 Application · 2:49–3:01 · A**
- Visuel : capture `ad4-05` — la recommandation « renforcer le suivi » encadrée, puis réécrite au clavier en une phrase avec responsable, action et date.
- Écran : « “Renforcer le suivi” → qui, quoi, quand »
- VO : « Il relit les recommandations. L'une dit seulement : “renforcer le suivi”. Il la réécrit : qui, quoi, quand. »

**Scène 13 — B4 Application · 3:01–3:15 · A**
- Visuel : capture `ad4-06` — les sections collées dans le modèle de rapport du service (« [EN-TÊTE DU SERVICE] », « Exemple fictif ») ; page « Annexe : tableau de calcul ».
- Écran : « Modèle du service · annexe : le calcul »
- VO : « Enfin, il colle les sections dans le modèle de rapport du service, et le soumet au directeur. Il garde sa feuille de calcul en annexe. »

**Scène 14 — B5 Consolidation · 3:15–3:41 · B**
- Visuel : carte question, mention « Exemple fictif ». Étiquette « IA : 90 % » face au tableau « 17 / 20 ». Silence de 3 s, puis croix sur « 90 % » et cadre sur « 85 % ».
- Écran : « Exemple fictif · IA : 90 % · Tableau : 17 sur 20 »
- VO : « À vous. Dans un autre brouillon, l'IA écrit : “taux de réalisation : quatre-vingt-dix pour cent”. Le tableau dit dix-sept sur vingt. Juste ? » [silence 3 s] « Non. Dix-sept sur vingt, c'est quatre-vingt-cinq pour cent. Un seul chiffre faux, et tout le rapport perd sa crédibilité. »

**Scène 15 — B6 Clôture · 3:41–3:51 · B (rappel de la promesse)**
- Visuel : le rapport entre dans le parapheur ; la case « Visa » se coche ; flèche « Transmis ». La promesse revient, mot pour mot.
- Écran : « Construire un rapport d'activités avec l'IA, sur vos chiffres vérifiés »
- VO : « Vendredi, le rapport part à l'heure. Chaque chiffre a été recalculé. Le directeur le vise et le transmet. »

**Scène 16 — B6 Clôture · 3:51–4:05 · B (carte de rappel)**
- Visuel : carte de rappel, points révélés au rythme de la voix ; tenue ≥ 4 s après le dernier point.
- Écran : « 1. Le plan d'abord » « 2. Vos chiffres, recalculés » « 3. Faits, analyse, recommandations »
- VO : « Retenez : le plan d'abord. Vos chiffres, recalculés. Faits, analyse et recommandations, séparés. Rédigez une page de rapport vérifiée. »

#### Captures à fournir par l'owner

Ordinateur, navigateur en français, zoom 125 % ; tableur et traitement de texte avec barre d'outils recadrée hors champ ; téléphone pour la calculatrice. Compte Google de tournage pour Gemini. Documents fictifs préparés à l'avance (voir 2.6) : tableau de vingt activités dont dix-sept réalisées, notes sur les difficultés, plan et modèle de rapport du service. À masquer : compte, sélecteur de modèle, bandeaux.

- **`ad4-01` (scène 4)** — Le tableau fictif dans le tableur, totaux visibles. Durée utile : 8 s.
- **`ad4-02` (scène 9)** — Gemini, nouvelle conversation. Coller la consigne de la fiche, un bloc par ligne : « deuxième trimestre » dans le bloc Rôle, le tableau (copié en texte) et les notes après « Tableau et notes : » (bloc Contexte), le plan du service à la place du crochet du bloc Format. Envoyer. Durée utile : 10 s.
- **`ad4-03` (scène 10)** — Filmer le brouillon, défilement lent ; s'arrêter sur la ligne du taux de réalisation et son calcul. Si le calcul n'est pas montré, recommencer dans une nouvelle conversation. Durée utile : 12 s.
- **`ad4-04` (scène 11)** — Calculatrice du téléphone : taper 17 ÷ 20 × 100. Puis, dans le texte copié dans le traitement de texte, supprimer « [À VÉRIFIER] » sur cette ligne. Durée utile : 12 s.
- **`ad4-05` (scène 12)** — Encadrer la recommandation la plus vague du brouillon, puis la réécrire au clavier, par exemple : « Le chef de service organisera une visite de suivi par mois dans chaque commune, à partir de juillet. » Si aucune recommandation n'est vague, ajuster la VO de la scène 12 à la validation. Durée utile : 10 s.
- **`ad4-06` (scène 13)** — Le modèle de rapport fictif du service avec les sections collées, puis la page d'annexe. Durée utile : 10 s.

#### Notes de script

- **Prononciation** : dire lentement « dix-sept », « vingt », « quatre-vingt-cinq pour cent » ; à l'écran, les chiffres restent en chiffres ; Bouaké « bou-a-ké ». Si l'owner ajoute un montant au tableau fictif, il est en FCFA.
- **Exactitude** : taux de réalisation = activités réalisées ÷ activités prévues. Les chiffres sont fictifs et signalés comme tels. Le plan proposé est un plan courant ; le modèle imposé par le ministère ou le partenaire prime toujours.
- **Pièges** : l'IA calcule souvent juste sur un cas simple ; la démonstration montre le recalcul quand même, c'est le geste qui compte. L'erreur est montrée en B5, comme exemple fictif, jamais en fausse capture.
- **Confidentialité** : aucune liste nominative de bénéficiaires, aucune évaluation individuelle d'agent, aucun numéro de téléphone de partenaire dans l'outil : des totaux et des notes sans nom.
- **Termes à gloser** : « taux de réalisation » est montré par le calcul ; « viser » (le directeur vise) est familier du public.
- **Adaptation EN** : « rapport d'activités » = « activity report » ; « taux de réalisation » = « completion rate » ; « viser » = « to initial and approve » ; blocs RCTF : « Role, Context, Task, Format ».
- **Adaptation HA / DJE** : dire les nombres lentement et les répéter à l'écran ; « taux de réalisation » : « combien d'activités faites sur combien prévues ».

### Leçon 5 — Projet final : préparer le dossier complet d'une réunion avec l'IA (`ad5`)

#### Fiche

- **Promesse** : « À la fin de cette leçon, vous saurez constituer et déposer le dossier complet d'une réunion. »
- **Cas réel (B1 → B6)** : à Tahoua (Niger), Zeinabou prépare le dossier de la réunion trimestrielle suivante de sa direction régionale fictive. Souleymane, chef de service à Bouaké (Côte d'Ivoire), n'est pas dans son service : en pair, il lui partage sa méthode (vérifier chaque point article par article, recalculer chaque chiffre, acquis des leçons 3 et 4). Zeinabou croit qu'il suffit de bien rédiger. Enjeu : un dossier que l'on peut contrôler, sans rien divulguer. Fermeture en B6 (champ `example`) : elle assemble ses pièces en un seul PDF et le dépose selon la consigne.
- **Unités de notion (B3)** : *(livrables et critères)* 1. Cinq pièces, une par leçon — un courrier ; un procès-verbal avec son tableau des actions ; une note de synthèse d'un texte public, avec articles ; une page de rapport avec ses calculs ; une fiche de contrôle. · 2. Cinq critères d'évaluation — confidentialité, fidélité, exactitude, registre, vérification humaine. · 3. Trois erreurs qui font échouer — un nom ou un numéro d'usager dans une pièce, un chiffre ou un article non vérifié, une décision absente des notes.
- **Démo (B4)** : exemple de projet réussi, de bout en bout : le dossier fictif de Zeinabou, ouvert sur ordinateur. 1. Sommaire et fiche de contrôle. 2. Pièce 1 : le courrier et son modèle. 3. Pièce 2 : le PV et le tableau des actions. 4. Pièce 3 : la note de synthèse, chaque point avec son article. 5. Pièce 4 : la page de rapport et son tableau de calcul. 6. Relecture avec la consigne RCTF : l'assistant signale un chiffre sans calcul joint ; il est ajouté. Résultat attendu à l'écran : un dossier complet, chaque critère visible.
- **Consolidation (B5)** : contre-exemple sous forme de prédiction. « À Parakou, au Bénin, le dossier de Rahila est soigné, mais la pièce 2 contient le nom d'un usager et la note cite un article qu'elle n'a pas vérifié. Quels critères échouent ? » — 3 s de silence — « La confidentialité et l'exactitude. Un beau dossier ne compense pas. »
- **Consigne à copier** :

```text
Rôle : tu es un relecteur exigeant dans une administration publique.
Contexte : voici les pièces du dossier d'une réunion : [collez le texte, sans aucun nom d'usager ni donnée personnelle]. Critères : confidentialité, fidélité aux notes, exactitude, registre administratif, vérification humaine.
Tâche : ne réécris rien. Pour chaque critère, dis-moi ce qui manque ou ce qui est fragile, en citant le passage concerné.
Format : un court paragraphe par critère, dans l'ordre de la liste, puis trois questions que mon directeur pourrait me poser.
```

- **Exercice** : « Constituez et déposez le dossier d'une réunion » — 1. Préparez vos cinq pièces (courrier, PV avec tableau des actions, note de synthèse d'un texte public avec articles, page de rapport avec calculs, fiche de contrôle), sur un cas non confidentiel ou fictif. 2. Retirez tout nom d'usager et toute donnée personnelle. 3. Relisez avec la consigne de relecture (Rôle, Contexte, Tâche, Format) et les cinq critères. 4. Assemblez un seul PDF et déposez-le selon la consigne affichée sous la vidéo.
- **Carte de rappel** : 1. Rien de confidentiel 2. Rien que vos notes 3. L'article fait foi 4. Chiffres recalculés
- **Quiz** :
  1. Que pouvez-vous coller dans un assistant grand public pour votre dossier ? — A) La requête d'un usager B) Un projet de texte non publié C) Des éléments sans noms, avec des fonctions et des crochets D) Un document classé — **Réponse : C**
  2. Que contient le procès-verbal ? — A) Ce que le brouillon de l'IA juge logique B) Ce qui a été dit et décidé, d'après vos notes C) Les opinions de la secrétaire D) Les décisions probables — **Réponse : B**
  3. Quelle est la source qui fait foi pour une note sur un décret ? — A) La synthèse de l'IA B) Le résumé d'un collègue C) Le texte officiel, en vigueur D) Un site d'actualités — **Réponse : C**
  4. Que faites-vous d'un chiffre donné par l'IA ? — A) Vous le recalculez et vous gardez le calcul B) Vous l'arrondissez C) Vous le gardez s'il paraît plausible D) Vous le supprimez toujours — **Réponse : A**
  5. Le dossier de Rahila est soigné, mais la pièce 2 contient le nom d'un usager. Quel critère échoue ? — A) Le registre B) La fidélité C) La vérification D) La confidentialité — **Réponse : D**
- **Marques citées** : Gemini, Gemini Notebook (Google)

#### Script v1 (à valider par l'owner)

Durée estimée : 3:57 · Mots de voix off : 370

**Scène 1 — B1 Accroche · 0:00–0:09 · E**
- Visuel : illustration en aplats, Zeinabou à son bureau de Tahoua, devant le parapheur, qui contient quatre documents ; une cinquième pochette, vide, attend. En vignette, Souleymane à son bureau de Bouaké, téléphone à la main.
- Écran : « Projet final : préparer le dossier complet d'une réunion · Zeinabou, Tahoua (Niger) · Souleymane, Bouaké (Côte d'Ivoire) »
- VO : « À Tahoua, Zeinabou prépare la prochaine réunion. Depuis Bouaké, Souleymane lui partage sa méthode. »

**Scène 2 — B1 Accroche · 0:09–0:19 · B**
- Visuel : carte de promesse sur la chemise du parapheur.
- Écran : « Constituer et déposer le dossier complet d'une réunion »
- VO : « À la fin de cette leçon, vous saurez constituer et déposer le dossier complet d'une réunion. »

**Scène 3 — B2 Cadrage · 0:19–0:37 · B**
- Visuel : une belle couverture s'efface au profit de pièces cochées ; la vignette de Souleymane affiche une bulle « contrôlable ? ».
- Écran : « Ce qui est évalué : un dossier qu'on peut contrôler »
- VO : « Elle croit qu'il suffit de bien rédiger. Souleymane la reprend : ce n'est pas l'essentiel. Ce qui est évalué, c'est un dossier que l'on peut contrôler, sans rien divulguer. »

**Scène 4 — B2 Cadrage · 0:37–0:49 · A**
- Visuel : capture `ad5-01` — sommaire du dossier exemple en PDF, cinq pièces cadrées une à une. Mention « Exemple fictif ».
- Écran : « Un seul PDF · 5 pièces »
- VO : « Le dossier tient en un seul fichier PDF. Cinq pièces, une par leçon, plus une fiche de contrôle. Chaque pièce se contrôle. »

**Scène 5 — B3 Notion · 0:49–1:11 · C**
- Visuel : le parapheur s'ouvre ; cinq pièces apparaissent avec leur pictogramme (lettre, PV, loupe, calculatrice, case à cocher).
- Écran : « Les 5 pièces du dossier : courrier · PV · note · rapport · fiche de contrôle »
- VO : « Les livrables. Un courrier. Un procès-verbal, avec son tableau des actions. Une note de synthèse d'un texte public, article par article. Une page de rapport, avec ses calculs. Et une fiche de contrôle. »

**Scène 6 — B3 Notion · 1:11–1:31 · C**
- Visuel : grille de cinq critères, chacun avec un pictogramme et une case à cocher.
- Écran : « Les 5 critères d'évaluation : confidentialité · fidélité · exactitude · registre · vérification humaine »
- VO : « Cinq critères. Confidentialité : aucun nom d'usager. Fidélité : rien d'ajouté aux notes. Exactitude : chiffres et articles vérifiés. Registre : les formules d'usage. Vérification humaine : un visa. »

**Scène 7 — B3 Notion · 1:31–1:45 · C**
- Visuel : trois cases « erreur », chacune barrée d'une croix quand elle est dite.
- Écran : « 3 erreurs qui font échouer : un nom d'usager · un chiffre non vérifié · une décision inventée »
- VO : « Trois erreurs font échouer un dossier. Un nom d'usager. Un chiffre ou un article non vérifié. Une décision absente des notes. »

**Scène 8 — B3 Notion · 1:45–2:02 · G**
- Visuel : carte de consigne RCTF, fond clair, consigne complète ; les étiquettes « Rôle », « Contexte », « Tâche », « Format » s'allument une à une. Soulignés, dans le bloc Tâche : « Ne réécris rien », « Pour chaque critère ».
- Écran : « Consigne de relecture RCTF : Rôle · Contexte · Tâche · Format », puis la consigne à copier de la fiche, en entier, avec ses quatre blocs.
- VO : « Avant de déposer, faites relire le dossier avec cette consigne en quatre blocs, la méthode RCTF. L'assistant ne réécrit rien. Il signale ce qui manque, critère par critère. »

**Scène 9 — B4 Application · 2:02–2:14 · A**
- Visuel : capture `ad5-02` — la fiche de contrôle et le sommaire du dossier exemple.
- Écran : « Fiche de contrôle · 5 critères »
- VO : « Voici son dossier. La fiche de contrôle liste les cinq critères, pièce par pièce. Elle sert de repère avant le dépôt. »

**Scène 10 — B4 Application · 2:14–2:26 · A**
- Visuel : capture `ad5-03` — pièce 1 (courrier) et pièce 2 (PV, tableau des actions). Cadre sur « [EN-TÊTE DU SERVICE] » et sur les fonctions.
- Écran : « Pièces 1 et 2 · courrier · PV »
- VO : « Pièce un : le courrier. Pièce deux : le procès-verbal, avec le tableau des actions. Des fonctions, aucun nom d'usager. »

**Scène 11 — B4 Application · 2:26–2:41 · A**
- Visuel : capture `ad5-04` — pièce 3 : note de synthèse, chaque point suivi de son article. Coche à chaque ligne.
- Écran : « Pièce 3 · chaque point, son article · méthode de Souleymane »
- VO : « Pièce trois : la note de synthèse. Avec la méthode de Souleymane, chaque point renvoie à son article, vérifié dans le texte. »

**Scène 12 — B4 Application · 2:41–2:53 · A**
- Visuel : capture `ad5-05` — pièce 4 : la page de rapport et son tableau de calcul en annexe.
- Écran : « Pièce 4 · rapport + calculs »
- VO : « Pièce quatre : la page de rapport. Les calculs sont joints, recalculés à la main, un par un. Rien n'est laissé au hasard. »

**Scène 13 — B4 Application · 2:53–3:05 · A**
- Visuel : capture `ad5-06` — la consigne de relecture RCTF dans Gemini ; réponse critère par critère ; cadre sur « calcul non joint » ; l'annexe est complétée.
- Écran : « Relecture : un calcul manquant repéré, puis ajouté »
- VO : « Enfin, elle colle la consigne de relecture. L'assistant repère un chiffre sans calcul joint. Elle l'ajoute. »

**Scène 14 — B5 Consolidation · 3:05–3:33 · B**
- Visuel : carte question, vignette « Parakou · Bénin ». Dossier de Rahila, soigné ; étiquettes « nom d'usager » et « article non vérifié ». Silence de 3 s, puis deux critères reçoivent une croix.
- Écran : « Dossier soigné, mais : un nom d'usager · un article non vérifié »
- VO : « À vous. À Parakou, au Bénin, le dossier de Rahila est soigné. Mais la pièce deux contient le nom d'un usager, et la note cite un article non vérifié. Quels critères échouent ? » [silence 3 s] « La confidentialité, et l'exactitude. Un beau dossier ne compense pas. »

**Scène 15 — B6 Clôture · 3:33–3:43 · B (rappel de la promesse)**
- Visuel : les pièces forment un seul PDF qui part vers « Dépôt ». La promesse revient, mot pour mot.
- Écran : « Constituer et déposer le dossier complet d'une réunion »
- VO : « Zeinabou assemble ses pièces en un seul PDF. Elle le dépose selon la consigne affichée sous la vidéo. »

**Scène 16 — B6 Clôture · 3:43–3:57 · B (carte de rappel)**
- Visuel : carte de rappel du cours, un point par leçon, révélés au rythme de la voix ; tenue ≥ 4 s après le dernier point.
- Écran : « 1. Rien de confidentiel » « 2. Rien que vos notes » « 3. L'article fait foi » « 4. Chiffres recalculés »
- VO : « Retenez le cours en quatre gestes. Rien de confidentiel. Rien que vos notes. L'article fait foi. Des chiffres recalculés. Constituez et déposez le dossier d'une réunion. »

#### Captures à fournir par l'owner

Ordinateur, lecteur PDF, zoom lisible, mention « Exemple fictif » en haut de chaque page. Dossier exemple préparé à l'avance (voir 2.6). À masquer : compte, sélecteur de modèle, bandeaux.

- **`ad5-01` (scène 4)** — PDF « Dossier de réunion (exemple fictif) », page du sommaire. Durée utile : 6 s.
- **`ad5-02` (scène 9)** — Page de la fiche de contrôle. Durée utile : 8 s.
- **`ad5-03` (scène 10)** — Pièces 1 et 2, défilement lent. Durée utile : 10 s.
- **`ad5-04` (scène 11)** — Pièce 3, ligne par ligne. Durée utile : 10 s.
- **`ad5-05` (scène 12)** — Pièce 4 et son annexe de calcul. Durée utile : 10 s.
- **`ad5-06` (scène 13)** — Gemini : coller la consigne RCTF de la fiche, un bloc par ligne, avec, à la place du crochet du bloc Contexte, le texte du dossier dont un calcul a été retiré. Envoyer, filmer la réponse. Durée utile : 10 s.

#### Notes de script

- **Structure de projet final** : B3 présente livrables et critères, B4 un exemple réussi, B6 le récapitulatif (un point par leçon) et la consigne de dépôt.
- **Dépôt** : aucun dépôt de fichier n'est visible dans la plateforme à ce jour ; la VO renvoie à « la consigne affichée sous la vidéo ». [à vérifier au moment de la production : mode de dépôt et d'évaluation du projet final]
- **Dossier exemple** : c'est celui de Zeinabou, entièrement fictif : courrier et PV de sa direction de Tahoua (leçons 1 et 2), note de synthèse sur le décret fictif de la leçon 3 (mention « Exemple fictif »), page de rapport sur les activités de sa direction (chiffres fictifs ; montants éventuels en FCFA), fiche de contrôle. Variante, au choix de l'owner : une note sur un texte public réel, articles vérifiés. [à vérifier au moment de la production si la variante est retenue]
- **Narration** : Zeinabou et Souleymane ne travaillent ni dans le même service ni dans le même pays. Souleymane apparaît en vignette « Bouaké », comme un pair qui partage sa méthode (échange fictif, à distance) ; il ne vise ni ne signe aucune pièce du dossier.
- **Prononciation** : Parakou « pa-ra-kou » ; Bouaké « bou-a-ké ».
- **Outil de l'administration** : si le service fournit un outil validé, il passe avant Gemini ; à dire dans le texte de la leçon.
- **Pas de promesse** : le dossier prouve une démarche, il ne garantit rien.
- **Adaptation EN** : « dossier de réunion » = « meeting file » ; « fiche de contrôle » = « checklist » ; blocs RCTF : « Role, Context, Task, Format ».
- **Adaptation HA / DJE** : garder les cinq critères en français à l'écran, avec une explication orale courte.

## 2.6 Captures et éléments à préparer

| Leçon | Élément | Comment l'obtenir | Qui |
|---|---|---|---|
| Toutes | Compte Google de tournage (Gemini, Gemini Notebook), interface en français, sans historique | Créer un compte dédié | Owner |
| Toutes | Illustrations (Zeinabou, Souleymane, silhouettes d'Abdoul-Aziz et de Rahila), vignettes de lieu « Tahoua · Niger », « Bouaké · Côte d'Ivoire », « Garoua · Cameroun », « Parakou · Bénin », parapheur, étiquettes « BROUILLON » et « Visa », carte de consigne RCTF (quatre blocs étiquetés) | Aplats, charte Karatou, décors génériques, aucun emblème, drapeau ni sceau | Claude |
| Toutes | Prononciation de « Gemini » | Fixée au premier lancement | Owner |
| 1 | Note du directeur fictive, modèle de lettre anonymisé, modèle de service fictif | Rédigés par Claude, relus par l'owner (aucun vrai en-tête) | Claude + owner |
| 1 | Captures `ad1-01` à `ad1-06` | Gemini sur ordinateur | Owner |
| 2 | Notes de réunion fictives (3 pages, heure de fin absente), version anonymisée, modèle de PV | Rédigés par Claude, relus par l'owner | Claude + owner |
| 2 | Captures `ad2-01` à `ad2-07` | Gemini, traitement de texte | Owner |
| 3 | PDF du décret fictif « Décret portant obligations des agents publics — Exemple fictif » (une vingtaine d'articles, article 9 sur la discrétion, un délai, une condition, une exception) | Rédigé par Claude, relu par l'owner ; variante : texte public ivoirien en vigueur, téléchargé d'une source officielle et vérifié | Claude + owner |
| 3 | Captures `ad3-01` à `ad3-07` | Gemini Notebook, carnet « Textes RH » | Owner |
| 4 | Tableau fictif (20 activités, 17 réalisées), notes, plan et modèle de rapport | Rédigés par Claude | Claude + owner |
| 4 | Captures `ad4-01` à `ad4-06` | Tableur, Gemini, calculatrice du téléphone | Owner |
| 5 | Dossier exemple de Zeinabou, PDF (5 pièces) « Exemple fictif » | Pièces rédigées par Claude (note sur le décret fictif de la leçon 3), relues par l'owner | Claude + owner |
| 5 | Captures `ad5-01` à `ad5-06` | PDF, Gemini | Owner |
| 5 | Mode de dépôt et d'évaluation du projet final | À confirmer avant le rendu | Équipe Karatou |
