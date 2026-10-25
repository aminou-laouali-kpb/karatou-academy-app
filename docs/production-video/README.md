# Production vidéo des cours de lancement

- `claude-md/` : un `CLAUDE.md` par cours (16 fichiers) et `00-LISEZMOI-OWNERS.md`. Chaque owner importe son fichier
  dans un dossier vide, le renomme `CLAUDE.md`, ouvre Claude Code et écrit « On démarre. »
- `sources/` : Partie 1 commune (`partA/PARTIE1.tpl.md`), règles et gabarits de rédaction (`spec/`) et
  `assemble.py`. Pour modifier le protocole commun : éditer le gabarit, puis `python3 sources/assemble.py`
  (relit la Partie 2 dans `claude-md/` et régénère les 16 fichiers).

Version 1.0, 18 octobre 2026. Les éléments « à vérifier » sont des points à contrôler au tournage ou à la production.
