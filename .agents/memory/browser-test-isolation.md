---
name: Isolation des tests navigateur
description: Pourquoi les tests PWA authentifiés utilisent des données de démonstration et un build indépendant.
---

Les tests hors connexion nécessitant un apprenant doivent utiliser un build optimisé isolé, sans backend réel. Ne pas remplacer le build publiable par un bundle où la démonstration est activée.

**Why:** Le parcours apprenant nécessite une session, alors que la production doit désactiver la démonstration. Réutiliser le même résultat de build risquerait de publier les accès de test ou de déclencher des écritures réelles.

**How to apply:** Garder les sorties et réglages de test distincts du build de release. Rapporter séparément les assertions sur fixtures et ce qui a réellement été vérifié sur le site publié.
