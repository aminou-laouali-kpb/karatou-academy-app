# Prompts vidéo NotebookLM — gabarit par leçon

Chaque leçon possède un champ `video: { fr, en, ha }` laissé vide à la génération.
Les vidéos sont produites après coup dans NotebookLM (Video Overview), publiées sur
YouTube en **non répertorié**, puis l'URL d'**embed** est collée dans le champ.

## Livrable : `notebooklm-prompts.md`

Pour chaque leçon du module, produire une entrée avec : la **source** à charger dans le
notebook (sections Contenu + Exemple + Glossaire de la leçon, copiées du fichier TS), un
**prompt FR** et un **prompt EN**. Ajouter en tête du document le mode d'emploi et le
tableau de mapping leçon → fichier → champ `video`.

## Ossature d'un prompt (la suivre pour chaque leçon)

> Crée une vidéo explicative de 4–6 minutes pour [AUDIENCE africaine précise].
> Objectif : [l'objectif de la leçon en une phrase].
> Couvre dans l'ordre : 1) [section 1] ; 2) [section 2] ; 3) [section 3] ; 4) [section 4].
> Langage simple, phrases courtes, exemples [FCFA / terrain / outil local de la leçon].
> Sois honnête sur [la limite clé enseignée par la leçon].
> Termine par [l'action concrète que l'apprenant peut faire aujourd'hui].
> Évite tout jargon non expliqué.

Règles : durée 4–6 min (5–6 pour une leçon technique ou finale) ; audience mobile à
connectivité limitée ; la vidéo d'une leçon finale est un récapitulatif motivant du module
qui mentionne le certificat. Optionnel : un prompt d'introduction du module (3–4 min).

## Langues

- **FR et EN** : générables par NotebookLM → 2 vidéos par leçon (régler la langue de
  sortie du notebook avant chaque génération).
- **HA (haoussa)** : non généré de façon fiable par NotebookLM. Trois options, à choisir
  avec l'utilisateur : (1) laisser `video.ha` vide — défaut ; (2) réutiliser la vidéo FR ;
  (3) sous-titres haoussa ajoutés manuellement sur YouTube.

## Workflow de production (à inclure dans le livrable)

1. Un notebook NotebookLM par leçon ; charger la source (texte de la leçon).
2. Video Overview → Customize → coller le prompt ; langue de sortie FR ou EN.
3. Générer, télécharger le MP4.
4. Publier sur YouTube en **non répertorié** ; récupérer l'ID (après `watch?v=`).
5. Coller `https://www.youtube.com/embed/VIDEO_ID` dans `video.fr` / `video.en` du
   fichier TS de la leçon ; retirer le commentaire `/* TODO … */` une fois rempli.
6. `npm run build` puis vérifier l'onglet Vidéo de la leçon avant de committer.
