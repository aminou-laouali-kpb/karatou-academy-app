# Validation en ligne du registre d’attestations

Le registre Supabase est une dépendance de production : les tests E2E ordinaires
restent volontairement hors ligne. Après un déploiement de la migration du
registre et des fonctions Edge `attestation-sign` et `attestation-verify`,
exécutez :

```bash
npm run validate:attestation:registry
```

## Ce que le contrôle vérifie

Le script ouvre une session avec l’administrateur de plateforme configuré,
émet une attestation technique, la retrouve dans le registre, vérifie qu’elle
est valide publiquement, contrôle qu’une version altérée est refusée, la
révoque, puis confirme que le vérificateur public affiche l’état `revoked`.

Il ne journalise ni adresse, ni mot de passe, ni jeton, ni signature. Pour
laisser une trace non ambiguë du test, l’attestation technique créée est
révoquée avant la fin du script.

## Prérequis

Les secrets suivants doivent être disponibles dans l’environnement qui exécute
la commande :

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `KARATOU_ADMIN_EMAIL`
- `KARATOU_ADMIN_PASSWORD`

La commande ajoute elle-même `--live` au script ; ne l’intégrez donc pas à la
validation de release générale, car elle écrit volontairement dans le registre.