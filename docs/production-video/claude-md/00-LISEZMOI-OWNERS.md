# Production vidéo des cours de lancement — mode d'emploi des owners

Ce dossier contient **un fichier `.md` par cours**. Chaque fichier est un `CLAUDE.md` complet : il explique à
Claude Code comment produire toutes les vidéos du cours avec HyperFrames, dans la charte Karatou Academy, avec
votre voix. Partie 1 : le protocole commun (identique dans tous les fichiers). Partie 2 : le cours lui-même (plan,
fiches de leçon, scripts, et pour les cours filmés le plan de tournage et le montage idéal).

## Avant de commencer — une fois par ordinateur

1. **Claude Code** installé et connecté à votre compte.
2. **Node.js 22 ou plus** et **FFmpeg**. Claude vérifie et vous guide si besoin.
3. **VoiceStudio** installé et lancé (il répond à l'adresse `http://localhost:3900`).
4. **Votre voix clonée dans VoiceStudio**, un profil par langue : français, anglais, haoussa, zarma. Pour chaque
   profil : 10 à 20 secondes d'enregistrement propre, **dans la langue du profil**, dans une pièce calme.
   Si vous préférez une API de voix (ElevenLabs, HeyGen…), Claude sait l'utiliser : la clé reste dans une variable
   d'environnement, jamais dans un fichier.
5. Facultatif : le connecteur **Magic Patterns** actif dans Claude. Claude lit alors directement le design system
   « Karatou Academy ». Sinon, il vous demandera les fichiers `index.css` et `tailwind.config.js`.

## Démarrer un cours

1. Créez un dossier vide, par exemple `karatou-agents-ia`.
2. Téléchargez le `.md` de votre cours (lien dans le Sheet), placez-le dans ce dossier et **renommez-le `CLAUDE.md`**.
3. Ouvrez Claude Code dans ce dossier et écrivez : **« On démarre. »**
4. Claude vous demande le design system, puis le logo, votre photo, votre nom et votre titre exacts, puis il
   configure et teste vos voix. Ensuite il attaque la leçon 1.

Pour reprendre un autre jour : ouvrez Claude Code dans le même dossier et écrivez **« On continue. »**
L'avancement est noté dans `PROGRESS.md`.

## Qui fait quoi

| Étape | Vous | Claude |
|---|---|---|
| Démarrage | Design system, logo, photo, nom et titre, voix clonées | Conversion de la charte, cartes présentateur, tests de voix |
| Script | Vous validez | Il vérifie les outils (recherche web) et finalise |
| Captures d'écran | Vous enregistrez les gestes demandés (liste précise fournie) | Il les annote et les intègre |
| Cours filmés : tournage | Vous filmez par blocs, avec téléprompteur et feuille de service | Il prépare les documents, puis dérushe, propose l'EDL et monte |
| Voix | Vous écoutez et validez | Il génère avec votre voix clonée, scène par scène |
| Langues | Vous relisez le haoussa et le zarma (ou un relecteur natif) | Il traduit, génère les voix, refait les sous-titres |
| Preview | Vous regardez et validez | Il corrige jusqu'à votre accord, puis rend la vidéo |
| Mise en ligne | Vous publiez sur la chaîne YouTube (non répertorié) et donnez les liens | Il vérifie les liens et met à jour `INTEGRATION.md` |

Claude **s'arrête et attend votre « oui »** à chaque point de validation : charte, cartes présentateur, voix de
chaque langue, script de chaque leçon, EDL (cours filmés), traductions haoussa et zarma, preview de chaque vidéo.

## À transmettre à l'équipe technique

Le fichier `livraison/<cours>/INTEGRATION.md` : il contient, leçon par leçon, les liens vidéo et tout ce qu'il faut
pour créer les leçons sur le site (objectif, exemple, exercice, quiz). Le zarma n'a pas encore d'emplacement sur la
plateforme : ces vidéos sont produites et gardées en attente.

## Les fichiers

| N° | Cours | Format | Owner | Fichier |
|---|---|---|---|---|
| 1 | L'IA expliquée simplement | Filmé | Idriss | `01-ia-expliquee-simplement_CLAUDE.md` |
| 2 | Agents IA : construire son premier agent | Filmé | Idriss | `02-agents-ia_CLAUDE.md` |
| 3 | Vibe coding : créer une app sans savoir coder | Filmé | Aminou | `03-vibe-coding_CLAUDE.md` |
| 4 | Lancer et développer son business avec l'IA | Filmé | Aminou | `04-business-ia_CLAUDE.md` |
| 5 | Créer visuels et vidéos avec l'IA | Filmé | Aminou | `05-visuels-videos-ia_CLAUDE.md` |
| Alt | IA pour les ONG et le développement | Filmé | Aminou | `A1-ia-ong-developpement_CLAUDE.md` |
| 6 | IA pour les éducateurs | Motion | à désigner | `06-ia-educateurs_CLAUDE.md` |
| 7 | IA et agriculture | Motion | Judicael | `07-ia-agriculture_CLAUDE.md` |
| 8 | Automatiser son travail sans coder | Motion | Judicael | `08-automatiser-sans-coder_CLAUDE.md` |
| 9 | L'IA pour les tâches créatives | Motion | Aminou | `09-ia-taches-creatives_CLAUDE.md` |
| 10 | Arnaques, deepfakes et sécurité numérique | Motion | à désigner | `10-securite-numerique-ia_CLAUDE.md` |
| 11 | Excel + IA : analyser ses données en une heure | Motion | à désigner | `11-excel-ia_CLAUDE.md` |
| 12 | Étudier et rédiger avec l'IA | Motion | à désigner | `12-etudier-rediger-ia_CLAUDE.md` |
| 13 | IA pour l'administration | Motion | Idriss | `13-ia-administration_CLAUDE.md` |
| 14 | IA et santé communautaire | Motion | à désigner | `14-ia-sante-communautaire_CLAUDE.md` |
| 15 | Choisir le bon outil IA gratuit | Motion | Idriss | `15-outils-ia-gratuits_CLAUDE.md` |

Version 1.0 — 18 octobre 2026.
