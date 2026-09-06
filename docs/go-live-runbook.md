# Runbook du lancement officiel — Karatou Academy

Dernière mise à jour : 3 septembre 2026
Portée : ce document dit **où en est réellement la production**, ce que ce sprint a
livré, et **les seules actions qui restent** pour le lancement officiel. Pour la
procédure de déploiement complète (env, migrations, seed), voir
[production-launch-checklist.md](production-launch-checklist.md).

---

## 1. État réel de la production (constaté le 3 septembre 2026)

| Élément | Constat |
| --- | --- |
| Application en ligne | **https://verify.karatou.academy** (hébergement statique Replit) |
| Domaine apex | **https://karatou.academy** sert une **page « liste d'attente »** distincte (« Lancement officiel en 2026 ») — ce n'est pas cette application |
| `www.karatou.academy` | redirige (302) vers l'apex |
| Supabase | projet `pqcovsnomouclkdjhjig` (eu-west-3) |
| Comptes réels | 6 utilisateurs Auth : 3 admins (`app_metadata.role = 'admin'`), 3 apprenants |
| Données apprenants | 3 lignes de progression, **0 certificat** émis à ce jour |
| Attestations | **15 lignes** dans `karatou_attestations` (13 réelles + 2 tests révoqués) |
| Newsletter | 22 abonnés réels |
| Organisations | 0 (les données de démo PNUD ont déjà été retirées de la prod) |
| Catalogue | 5 modules : 3 publiés (`intelligence-artificielle` c1–c8, `gestion-projet` p1–p5, `data-analysis` d1–d6), 2 brouillons (`agriculture-ia`, `productivite-google`) |
| Build déployé | **antérieur** à la refonte de charte et à ce sprint → un redéploiement est nécessaire |

**Conclusion :** la plateforme est déjà utilisée par de vrais apprenants, mais elle
est publiée derrière un sous-domaine `verify.` pendant que l'apex annonce encore
un lancement à venir. Le lancement officiel est donc d'abord une **décision de
domaine + un redéploiement**, pas un chantier de code.

---

## 2. Ce que ce sprint a livré (code + base de données)

### Contenu — le produit lui-même
- **19 leçons rédigées, trilingues FR/EN/HA** intégrées (module IA `c1–c8`,
  Gestion de projet `p1–p5`, Analyse de données `d1–d6`). Elles étaient
  terminées mais restées sur une branche non fusionnée : la production ne servait
  qu'**une seule** leçon rédigée, les 18 autres tombaient sur le gabarit
  générique. Les identifiants correspondent exactement aux cours publiés en base.
- Chargement **à la demande** des corps de leçon (1 chunk par leçon, ~15 kB gzip)
  au lieu d'un bloc unique de 270 kB gzip : ouvrir une leçon sur un lien 2G ne
  fait plus payer tout le catalogue.
- Précache du service worker ramené de **3,2 Mo à 1,13 Mo** ; les leçons et
  l'outillage admin lourd sont mis en cache à la première consultation
  (règle `CacheFirst` sur `/assets/`) — ce qui correspond enfin à la promesse
  « shell précaché + contenu consulté disponible hors ligne ».

### Studio des leçons — écriture et publication depuis l'admin

`/admin/lecons` permet à un platform admin de rédiger le corps complet d'une
leçon (objectif, sections, exemple, exercice, quiz, réflexion, glossaire, liens
vidéo FR/EN/HA) et de le publier **sans redéploiement**. Un bouton « Générer un
brouillon » fait rédiger un premier jet par Claude (Edge Function
`admin-generate-lesson`, clé côté serveur), et « Traduire depuis le français »
produit les versions EN et HA. Rien n'est publié tant que l'admin n'enregistre
pas.

- Stockage : `karatou_courses.lesson_content` (jsonb, migration S06), lisible
  publiquement pour les cours publiés, modifiable seulement par un platform
  admin (RLS existante).
- Priorité : la base gagne sur le registre TypeScript ; vider une langue rend la
  main au registre. Les 19 leçons du lancement restent donc intactes et
  versionnées avec le code.
- Robustesse : tout corps venant de la base ou du modèle passe par
  `parseLessonContent` (12 tests unitaires) avant d'atteindre le lecteur.
- Hors-ligne : une leçon CMS est mise en cache par le service worker dès la
  première ouverture (règle `supabase-rest-content`).

### Attestations — registre et révocation
- Le dépôt était **en retard sur la production** : les Edge Functions déployées
  (v4, 17 août 2026) archivent chaque attestation signée, vérifient contre ce
  registre et savent la révoquer, alors que le code versionné en était resté à un
  HMAC sans registre. Un redéploiement depuis le dépôt aurait **régressé la
  production**. Les sources déployées sont maintenant dans le dépôt, et la table
  `karatou_attestations` a sa migration (`20260819164745_attestation_archive.sql`).
- Nouvelle page **`/admin/attestations/registry`** (onglet « Registre ») :
  recherche par nom ou identifiant, et **révocation avec motif**. Jusqu'ici les
  13 attestations réelles ne pouvaient être ni retrouvées ni retirées.
- La page publique de vérification affiche désormais l'état **« révoquée »**.
  Auparavant une attestation révoquée s'affichait « non authentique » **avec les
  informations du bénéficiaire et le statut « expiré »** — message contradictoire.
  Vérifié en prod : `revoked` pour une attestation révoquée, `invalid` pour une
  charge utile falsifiée, `401` pour une recherche de registre sans session admin.

### Liens profonds (partage de certificats, QR codes)
- L'hôte actuel répond **404** aux routes client (`/verify/:uid`, `/login`,
  `/verify-attestation`…) et son repli JavaScript **redirigeait vers `/` en
  perdant le chemin** : un QR code d'attestation scanné arrivait sur la page
  d'accueil sans jamais vérifier quoi que ce soit.
- Livré : `public/404.html` qui **préserve chemin + requête + fragment**,
  `src/lib/spaRedirect.ts` qui reconstruit la route avant le montage de React
  (y compris le cas « charge utile d'attestation échouée sur `/` », donc les QR
  déjà imprimés fonctionnent), et `public/_redirects` pour une réécriture 200
  propre si l'hébergement passe sur Netlify / Cloudflare Pages. Couvert par 9
  tests unitaires.
- `og:image` pointait vers `https://karatou.academy/opengraph.jpg` — **404** :
  tout partage social était sans aperçu. Corrigé vers l'origine qui sert
  réellement l'app, plus un `<link rel="canonical">`, `sitemap.xml` et un
  `robots.txt` qui exclut les URL par-credential.

### Base de données
- Migration `20260903162346_s05_launch_hardening.sql` **appliquée en production** :
  - politique de lecture explicite (platform admin) sur `karatou_attestations` ;
  - `EXECUTE` retiré à `anon` sur `karatou_issue_certificate` ;
  - `search_path` figé sur les deux fonctions `SECURITY DEFINER` héritées
    (`handle_new_user`, `update_expired_certificates`) ;
  - politiques newsletter réalignées sur le rôle **lu dans le JWT** (elles
    passaient par la colonne héritée `profiles.role`), une politique par action ;
  - index de couverture sur les clés étrangères `karatou_*`.
- **Advisors Supabase** : 4 constats de sécurité résolus. Ce qui reste est
  documenté au §4 comme intentionnel ou hors périmètre.
- **Isolation inter-organisations prouvée** (item S02-05, ouvert depuis le
  sprint 01) : `scripts/verify-cross-org-rls.sql` (`npm run test:rls`) crée deux
  organisations jetables, bascule sur les rôles `authenticated` / `anon` et
  vérifie qu'aucun admin ne voit l'organisation, les membres, les bourses, la
  progression ni les certificats de l'autre. Exécuté en production le
  3 septembre 2026 : **succès, aucune ligne laissée derrière**. L'anonyme est même
  refusé au niveau des `GRANT`, avant la RLS.

---

## 3. Ce qu'il reste à faire — actions opérateur

Aucune ne peut être faite depuis le dépôt : elles demandent le tableau de bord
Replit/Supabase, le registrar DNS, ou une décision produit.

### P0 — bloquant pour le lancement officiel

1. **Décider le domaine public**, puis l'appliquer.
   - *Option A (recommandée)* : l'application passe sur `karatou.academy`, et la
     page « liste d'attente » actuelle devient une section de la landing (ou
     disparaît). C'est ce que « lancement officiel » signifie pour un visiteur.
   - *Option B* : l'application vit sur `app.karatou.academy`, l'apex reste la
     vitrine — mais la vitrine doit alors cesser d'annoncer un lancement à venir
     et pointer vers l'app.
   - Dans les deux cas, mettre à jour **dans le même commit** : `og:url`,
     `og:image`, `twitter:image` et le `canonical` de `index.html`,
     `VERIFY_BASE_URL` de `src/lib/verification.ts` (URL gravée dans les QR
     codes), `public/robots.txt` et `public/sitemap.xml`.
   - ⚠️ Les 13 attestations déjà imprimées portent des QR vers
     `verify.karatou.academy` : **garder ce sous-domaine actif** (ou une
     redirection permanente vers la nouvelle URL de vérification) quel que soit
     le choix.

2. **Configurer une vraie réécriture SPA (statut 200)** sur l'hôte.
   - Netlify / Cloudflare Pages : `public/_redirects` est déjà dans le dépôt, rien
     à faire de plus.
   - Replit statique : si l'hôte ne sait pas réécrire, le `public/404.html` livré
     ici prend le relais sans perdre le chemin — mais les routes continueront à
     répondre 404 aux robots, donc **aucun aperçu social sur un lien de
     certificat partagé**. C'est l'argument le plus concret pour déménager
     l'hébergement.
   - Vérification : `curl -I https://<domaine>/verify/KA-2026-INT-0001` doit
     répondre **200**.

3. **Redéployer**. Le build en ligne est antérieur à la refonte de charte, aux 19
   leçons, au registre et aux correctifs ci-dessus.
   - Secrets d'environnement requis : `VITE_SUPABASE_URL`,
     `VITE_SUPABASE_ANON_KEY`, `VITE_DEMO_ENABLED=false`.
   - Les valeurs `VITE_*` sont gravées **au build** : reconstruire après toute
     modification.

4. **Supabase → Authentication → URL Configuration** : ajouter le domaine de
   production aux *Redirect URLs* (sinon les liens de confirmation d'email et de
   réinitialisation de mot de passe ne résolvent pas), et relire les modèles
   d'email.

5. **Supabase → Authentication → Policies** : activer **Leaked password
   protection** (dernier advisor de sécurité ouvert ; bascule tableau de bord,
   non scriptable).

### P1 — à faire avant de communiquer largement

6. **Clé Anthropic pour le studio des leçons** (optionnelle, mais sans elle le
   bouton « Générer un brouillon » renvoie une erreur explicite et seule la
   saisie manuelle fonctionne) :

   ```bash
   supabase secrets set ANTHROPIC_API_KEY=sk-ant-... --project-ref pqcovsnomouclkdjhjig
   ```

   La clé reste côté serveur (Edge Function `admin-generate-lesson`) et n'est
   jamais exposée au navigateur. Modèle par défaut : `claude-opus-5` ; pour en
   changer sans redéployer, poser `LESSON_MODEL`. Compter environ 1 à 2 minutes
   et quelques dizaines de centimes par leçon générée.

7. **Contact légal** : `src/data/legalContent.ts` porte
   `contact@karatou.academy`. Une boîte `@karatou.academy` existe bien
   (`idriss.laouali@karatou.academy` est un compte réel), mais **confirmer que
   cette adresse est relevée** — c'est l'adresse d'exercice des droits RGPD des
   apprenants. Faire relire la politique de confidentialité et les CGU par un
   conseil (le texte est un modèle, pas un avis juridique).

8. **Première organisation partenaire réelle** : la base n'a aucune organisation.
   Créer l'organisation puis son admin depuis `/admin/team` (Edge Function
   `admin-provision-enterprise-admin`, aucune clé de service à partager).

9. **Vidéos des leçons** : 18 des 19 leçons ont `video: ''` pour les trois
   langues (seule `intelligence-artificielle/c1` en a), ce qui affiche un espace
   « bientôt disponible ». Voir `docs/notebooklm-prompts-videos.md` pour les
   prompts de génération leçon par leçon, puis coller les URL
   `https://www.youtube.com/embed/<id>` — désormais **directement dans
   `/admin/lecons`**, sans redéploiement.

10. **Relecture hausa par un locuteur natif** des 19 leçons et des libellés
   d'interface ajoutés ici (registre des attestations, studio des leçons).


### P2 — après le lancement

11. Deux modules restent en brouillon sans contenu rédigé (`agriculture-ia` 7
    cours, `productivite-google` 2 cours) : les rédiger avec le skill
    `karatou-course-creator` ou les retirer du CMS.
12. Monitoring d'erreurs : `VITE_SENTRY_DSN` est prêt et inactif tant qu'il est
    vide. Le renseigner pour voir les erreurs client réelles après le lancement.
13. Analytics produit (PostHog EU, sans PII) — reporté sciemment (S02-08) ; les
    métriques du pilote se tirent en SQL depuis Supabase.

---

## 4. Advisors Supabase — état et décisions

Résolus par ce sprint : `rls_enabled_no_policy` sur `karatou_attestations`,
`function_search_path_mutable` (×2), `anon_security_definer_function_executable`
sur `karatou_issue_certificate`, `auth_rls_initplan` + `multiple_permissive_policies`
sur `newsletter_subscribers`, `unindexed_foreign_keys` sur les tables `karatou_*`.

Restants, **assumés** :

| Constat | Décision |
| --- | --- |
| `karatou_verify_certificate` et `karatou_public_impact_stats` exécutables par `anon` | **Intentionnel** : vérification publique d'un certificat et compteurs d'impact publics. Chaque fonction ne renvoie que le strict nécessaire. |
| `karatou_issue_certificate` exécutable par `authenticated` | **Intentionnel** : c'est l'apprenant connecté qui déclenche l'émission ; la fonction vérifie côté serveur qu'il a terminé le module. |
| `vsg_brand_profiles`, `vsg_extractions`, `vsg_generations` sans politique | **Hors périmètre** : tables d'un autre produit qui partage le projet Supabase. Sans politique, elles sont inaccessibles à `anon`/`authenticated` — c'est le comportement sûr. |
| `unused_index` sur les tables `karatou_*` | Normal : la plateforme n'a pas encore de trafic. À réévaluer après quelques mois, pas avant. |
| Advisors de performance sur `profiles`, `org_members`, `scholarships`, `user_progress`, `certificates`… | **Tables héritées de l'implémentation Next.js** qui cohabitent dans le même projet. Non touchées volontairement : un site distinct est en ligne sur l'apex. À traiter le jour où cette implémentation est officiellement retirée. |
| Leaked password protection désactivée | À activer au tableau de bord (§3.5). |

---

## 5. Vérification avant d'annoncer

```bash
npm ci
npm run typecheck && npm run lint && npm test && npm run build
npm run test:e2e            # 29 tests, 1 skip documenté
npm run test:rls            # isolation inter-organisations (nécessite $DATABASE_URL)
```

Puis, sur le domaine de production :

1. `curl -I https://<domaine>/verify/KA-2026-INT-0001` → **200** (pas 404).
2. Ouvrir `/` : aucun badge démo, aucune carte de compte démo, aucun sélecteur de démo.
3. Créer un compte apprenant réel, confirmer par email, se connecter.
4. Ouvrir une leçon de chaque module et vérifier le contenu rédigé (pas le gabarit
   générique) en FR, EN et HA.
5. Terminer un module → un certificat durable est émis → le vérifier sur
   `/verify/:uid` en navigation privée.
6. Scanner le QR d'une attestation déjà imprimée → la page de vérification
   s'ouvre et affiche « authentique ».
8. Révoquer une attestation de test depuis `/admin/attestations/registry`, puis
   rescanner son QR → « révoquée ».
9. Coller le lien du domaine dans WhatsApp ou LinkedIn → l'aperçu social s'affiche.
