# Sprint 05 — Finalisation du lancement officiel

Date : 3 septembre 2026
Statut : **Fait (code + base de données)**. Reste des actions opérateur, listées dans
[go-live-runbook.md](../go-live-runbook.md#3-ce-quil-reste-à-faire--actions-opérateur).

## Point de départ

L'audit et les sprints précédents avaient laissé le projet dans un état trompeur :
tout semblait fait côté fonctionnalités, mais la production réelle divergeait du
dépôt sur trois axes, chacun découvert en inspectant la prod plutôt que les docs.

1. **Le contenu pédagogique n'était pas en ligne.** Les 19 leçons trilingues étaient
   rédigées et validées depuis le 27 août, sur une branche jamais fusionnée
   (`claude/exciting-nightingale-531b30`). La production servait **une** leçon
   rédigée et 18 gabarits génériques, alors que les cours correspondants sont
   publiés en base avec exactement les bons identifiants.
2. **Les Edge Functions déployées étaient en avance sur le dépôt.** La version en
   production (v4, 17 août) archive les attestations signées, vérifie contre ce
   registre et sait révoquer ; le dépôt en était resté au HMAC sans registre. Un
   redéploiement depuis `main` aurait fait régresser la production et cassé la
   vérification des 13 attestations réelles déjà émises. La table
   `karatou_attestations` (15 lignes) n'avait aucune migration versionnée.
3. **Les liens profonds étaient cassés en production.** L'hôte répond 404 aux
   routes client et son repli JavaScript redirigeait vers `/` **en perdant le
   chemin** : un QR d'attestation scanné n'atteignait jamais le vérificateur.
   `og:image` pointait par ailleurs vers une URL en 404 — aucun aperçu social.

## Livré

### Produit
- Fusion des 19 leçons FR/EN/HA (IA `c1–c8`, Gestion de projet `p1–p5`, Analyse de
  données `d1–d6`) ; correspondance vérifiée avec les cours publiés en base.
- Corps de leçon chargés à la demande : `localizedContent` repasse de 791 kB
  (270 kB gzip) à 23 kB, une leçon coûte ~15 kB gzip.
- Précache du service worker : 3,2 Mo → 1,13 Mo, avec une règle `CacheFirst` sur
  `/assets/` pour que le contenu consulté reste disponible hors ligne.
- Page `/admin/attestations/registry` : recherche et révocation motivée des
  attestations, trilingue, réservée au platform admin.
- État « révoquée » rendu sur la page publique de vérification (il s'affichait
  « non authentique » tout en montrant les informations du bénéficiaire et le
  statut « expiré »).
- Récupération des liens profonds : `public/404.html` préservant chemin, requête et
  fragment, `src/lib/spaRedirect.ts` (dont le rattrapage des QR d'attestation
  échoués sur `/`), `public/_redirects` pour une réécriture 200 côté hôte.
- SEO/partage : `og:url`/`og:image`/`twitter:image` recalés sur l'origine qui sert
  l'app, `canonical`, `sitemap.xml`, `robots.txt` excluant les URL par-credential.
- Correctif i18n du badge de démo ; accents rétablis dans la navigation admin ;
  `package.json` renommé `karatou-academy` en `1.0.0`.

### Base de données (appliqué en production)
- `20260819164745_attestation_archive.sql` : rattrapage versionné de la table
  `karatou_attestations` (idempotent, sans effet sur la prod existante).
- `20260903162346_s05_launch_hardening.sql` : politique de lecture platform-admin
  sur le registre, `EXECUTE` retiré à `anon` sur `karatou_issue_certificate`,
  `search_path` figé sur `handle_new_user` et `update_expired_certificates`,
  politiques newsletter réalignées sur le rôle JWT (au lieu de la colonne héritée
  `profiles.role`) et découpées par action, index de couverture sur les clés
  étrangères `karatou_*`.
- Advisors de sécurité : 4 constats résolus ; les autres sont assumés et
  documentés (RPC publiques intentionnelles, tables d'un autre produit, protection
  des mots de passe compromis à activer au tableau de bord).

### Tests
- `scripts/verify-cross-org-rls.sql` + `npm run test:rls` : l'isolation
  inter-organisations (item S02-05, ouvert depuis le sprint 01) est prouvée sur un
  vrai Postgres — deux organisations jetables, bascule sur les rôles
  `authenticated`/`anon`, aucune fuite d'organisation, de membre, de bourse, de
  progression ni de certificat ; l'anonyme est refusé dès les `GRANT`. Exécuté en
  production le 3 septembre 2026, sans laisser de ligne.
- 9 tests unitaires sur la récupération des liens profonds (48 tests au total).
- E2E : 29 tests verts (registre des attestations + navigation, routes admin
  ajoutées à la porte de production), 1 `test.fixme` documenté.
- Vérifié en prod via les Edge Functions : `revoked` pour une attestation révoquée,
  `invalid` pour une charge utile falsifiée, `401` pour une recherche de registre
  sans session admin.

## Definition of done

- [x] `npm run typecheck`, `npm run lint`, `npm test`, `npm run build`
- [x] `npm run test:e2e` (démo + porte de production)
- [x] Migrations versionnées pour tout changement de schéma, appliquées en prod
- [x] Aucune fuite anonyme ni inter-organisation (vérifiée, pas supposée)
- [x] Dépôt ≥ production (Edge Functions et schéma réconciliés)
- [x] README / checklist / runbook mis à jour

## Ce qui n'est pas fait, et pourquoi

Tout le reste demande un accès tableau de bord ou une décision produit — voir le
runbook. Le point saillant : **l'application est publiée sur
`verify.karatou.academy` pendant que `karatou.academy` sert encore une page
« liste d'attente » annonçant un lancement à venir.** Choisir et appliquer le
domaine public est la dernière étape du lancement officiel, et elle n'appartient
pas au code.
