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
| Application en ligne | **https://course.karatou.academy** — et `verify.karatou.academy` sert le **même** déploiement statique Replit (les deux pointent vers `34.111.179.208`) |
| Domaine apex | **https://karatou.academy** sert une **page « liste d'attente »** distincte (« Lancement officiel en 2026 ») — ce n'est pas cette application |
| `www.karatou.academy` | redirige (302) vers l'apex |
| Supabase | projet `pqcovsnomouclkdjhjig` (eu-west-3) |
| Comptes réels | 6 utilisateurs Auth : 3 admins (`app_metadata.role = 'admin'`), 3 apprenants |
| Données apprenants | 3 lignes de progression, **0 certificat** émis à ce jour |
| Attestations | **15 lignes** dans `karatou_attestations` (13 réelles + 2 tests révoqués) |
| Newsletter | 22 abonnés réels |
| Organisations | 0 (les données de démo PNUD ont déjà été retirées de la prod) |
| Catalogue | 5 modules : 3 publiés (`intelligence-artificielle` c1–c8, `gestion-projet` p1–p5, `data-analysis` d1–d6), 2 brouillons (`agriculture-ia`, `productivite-google`) |
| Build déployé | figé au **7 septembre 2026, 10:00 UTC** : polices DM Sans/Playfair (avant refonte), aucune leçon rédigée, ni studio, ni registre. Voir §6 |
| Liens profonds | `/login`, `/verify/:uid` répondent **404** : la réécriture SPA n'est pas activée côté hôte |

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
   - Replit statique : réglé par `[[deployment.rewrites]]` dans `.replit`
     (`from = "/*"`, `to = "/index.html"`), effectif à la republication.
     `public/404.html` reste en place — dormant tant que la règle est active,
     filet si elle disparaît.
   - Vérification : `curl -I https://<domaine>/verify/KA-2026-INT-0001` doit
     répondre **200**.

3. **Redéployer**. Le build en ligne est antérieur à la refonte de charte, aux 19
   leçons, au registre et aux correctifs ci-dessus.
   - Secrets d'environnement requis : `VITE_SUPABASE_URL`,
     `VITE_SUPABASE_ANON_KEY`, `VITE_DEMO_ENABLED=false`.
   - Les valeurs `VITE_*` sont gravées **au build** : reconstruire après toute
     modification.

4. **Supabase → Authentication → URL Configuration** : ajouter le domaine de
   production aux *Redirect URLs* (sinon les liens de réinitialisation de mot de
   passe ne résolvent pas), et relire les modèles d'email.

4 bis. **Désactiver la confirmation d'email** — décision prise le 2026-09-10.
   *Authentication → Providers → Email* → décocher **Confirm email**.

   Motif : aucun SMTP n'est branché, et le service d'envoi par défaut de Supabase
   ne délivre pas de façon fiable. Avec la confirmation active, personne ne
   recevait le lien, donc personne ne pouvait activer son compte — et l'upsert du
   profil, qui n'a lieu qu'en présence d'une session, ne s'exécutait jamais : ni
   pays ni genre n'étaient enregistrés. C'est ce qu'Idriss a rencontré.

   ⚠️ **Contrepartie assumée** : sans confirmation, rien ne prouve qu'une personne
   possède l'adresse qu'elle déclare. Sur une plateforme de certification où
   l'email identifie le titulaire, c'est un vrai compromis. À rétablir dès qu'un
   SMTP réel est en place (Resend, Postmark, SES…) — l'écran de confirmation
   côté application est déjà écrit et se réactivera tout seul.

5. **Supabase → Authentication → Policies** : activer **Leaked password
   protection** (dernier advisor de sécurité ouvert ; bascule tableau de bord,
   non scriptable).

### P1 — à faire avant de communiquer largement

6. **Clé Anthropic pour le studio des leçons** (optionnelle, mais sans elle le
   bouton « Générer un brouillon » renvoie une erreur explicite et seule la
   saisie manuelle fonctionne) :

   Tableau de bord Supabase → *Project Settings* → *Edge Functions* → *Secrets* →
   ajouter `OPENROUTER_API_KEY`. En ligne de commande :

   ```bash
   supabase secrets set OPENROUTER_API_KEY=sk-or-v1-... --project-ref pqcovsnomouclkdjhjig
   ```

   La clé reste côté serveur (Edge Function `admin-generate-lesson`) et n'est
   jamais exposée au navigateur. Modèle par défaut : `z-ai/glm-5.3-flash` via
   OpenRouter (mesuré : ~15 s et moins d'un centime par leçon) ; `LESSON_MODEL`
   permet de pointer n'importe quel autre modèle OpenRouter sans redéployer.

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
3. Créer un compte apprenant réel : l'inscription doit ouvrir la session
   directement (la confirmation d'email est désactivée, cf. §3 P0 4 bis), et le
   pays choisi doit apparaître dans `profiles.country`.
4. Ouvrir une leçon de chaque module et vérifier le contenu rédigé (pas le gabarit
   générique) en FR, EN et HA.
5. Terminer un module → un certificat durable est émis → le vérifier sur
   `/verify/:uid` en navigation privée.
6. Scanner le QR d'une attestation déjà imprimée → la page de vérification
   s'ouvre et affiche « authentique ».
8. Révoquer une attestation de test depuis `/admin/attestations/registry`, puis
   rescanner son QR → « révoquée ».
9. Coller le lien du domaine dans WhatsApp ou LinkedIn → l'aperçu social s'affiche.

---

## 6. Phase 2 — réaligner le déploiement en ligne sur `main`

*(rédigé le 9 septembre 2026, après vérification en local du build de `main`)*

### Pourquoi c'est une opération à part

L'espace de travail Replit **est un clone du même dépôt GitHub**, mais il a
divergé de `main` le 22 juin 2026 (base commune `00fd9df`) et son `git fetch`
échoue depuis — authentification GitHub cassée. Il porte donc **49 commits jamais
poussés**, et c'est lui qui construit le site public.

Ce n'est ni « Replit est en retard » ni « Replit est en avance » : c'est les deux
à la fois. Ce qui méritait d'être sauvé a été porté dans `main` (PR #11) ; le
reste est du bruit d'agent (`attached_assets/`, `.agents/`, `.bolt/`).

### Ordre des opérations — le premier point n'est pas négociable

1. **Rétablir l'accès GitHub depuis Replit, puis sauvegarder les 49 commits.**

   Reconnecter le compte GitHub dans le panneau *Git* de l'interface **ne suffit
   pas** : constaté le 9 septembre, l'espace de travail n'a *aucun*
   `credential.helper` configuré, son remote est une HTTPS nue sans identifiants,
   et aucune variable d'environnement GitHub n'est exposée. Le `git` du Shell n'a
   donc littéralement aucun moyen de s'authentifier, quoi qu'affiche l'interface.

   La voie propre passe par le GitHub CLI, déjà installé dans l'espace de travail.

   ⚠️ **Dans le Shell de Replit, pas dans un terminal local.** La confusion est
   facile et elle fait perdre un aller-retour : une machine de développement a
   souvent déjà un `gh` authentifié et un `origin/main` à jour, si bien que les
   commandes ci-dessous y réussissent sans rien changer à l'espace de travail.
   Vérifier d'abord où l'on se trouve :

   ```bash
   hostname && pwd     # attendu dans Replit : « repl » et /home/runner/workspace
   ```

   Puis, dans ce Shell :

   ```bash
   gh auth login       # GitHub.com → HTTPS → « Login with a web browser »
   gh auth setup-git   # câble le credential.helper pour git
   ```

   `gh auth login` affiche un code à usage unique à valider dans le navigateur :
   aucun jeton à copier-coller, rien de secret à écrire dans le dépôt. Contrôler
   ensuite que l'accès fonctionne :

   ```bash
   git fetch origin && git log --oneline -1 origin/main
   ```

   La sortie doit montrer un commit de septembre. Une fois l'accès rétabli :

   ```bash
   git checkout -b replit-snapshot-2026-09-09
   git push -u origin replit-snapshot-2026-09-09
   ```

   ⚠️ **Ne rien réinitialiser tant que ce `push` n'a pas réussi.** Les 49 commits
   n'existent nulle part ailleurs.
   *(Éviter de coller un jeton dans l'URL du remote : il resterait en clair dans
   `.git/config` de l'espace de travail. `gh auth login` le range hors du dépôt.
   Un `gh auth logout` après l'opération referme l'accès si l'espace de travail
   est partagé.)*

   **État constaté le 9 septembre 2026** (interrogation en lecture seule de
   l'espace de travail) : `HEAD` toujours sur `e68ce6d`, arbre de travail propre
   (0 fichier modifié), aucune branche `*snapshot*`, et `git fetch origin`
   répond encore :

   ```
   remote: Invalid username or token. Password authentication is not supported
   fatal: Authentication failed for '…/karatou-academy-app/'
   ```

   Autrement dit : rien n'a bougé, et **l'authentification GitHub est le seul
   verrou** — elle bloque à la fois la sauvegarde (étape 1) et le réalignement
   (étape 2). Le reste de la procédure ne peut pas commencer avant.

   Point rassurant : `HEAD` est resté sur le commit exact qui a servi à
   l'analyse. Le lot des 55 fichiers modifiés côté Replit est donc inchangé, et
   tout ce qui méritait d'être conservé est déjà dans `main` via la PR #11. La
   sauvegarde reste une assurance contre un oubli d'analyse, pas contre une
   perte connue.

2. **Réaligner sur `main` — mais seulement après un `fetch` réussi.**

   ⚠️ **Le piège le plus dangereux de toute l'opération.** Tant que
   l'authentification GitHub échoue, la référence `origin/main` *à l'intérieur de
   Replit* reste figée sur `00fd9df` — le commit du **22 juin**. Un
   `git reset --hard origin/main` lancé dans cet état ne ramènerait pas le
   travail récent : il détruirait les 49 commits **et** ferait reculer l'espace
   de travail de trois mois.

   Vérifier d'abord que le `fetch` passe, et que `origin/main` a bien avancé :

   ```bash
   git fetch origin && git log --oneline -1 origin/main
   ```

   La sortie doit montrer un commit de septembre (« Merge pull request #14 … »
   ou plus récent). Si elle affiche `00fd9df` ou une erreur d'authentification,
   **s'arrêter là** et revenir à l'étape 1.

   Une fois seulement cette vérification passée :

   ```bash
   git checkout main
   git reset --hard origin/main
   npm ci
   ```

   `npm ci` est indispensable : `main` a introduit `@pdf-lib/fontkit` et les
   polices Noto. Sans lui, le build échoue sur un import non résolu. (Le hook
   `scripts/post-merge.sh` couvre le cas d'un `git pull`, pas d'un `reset`.)

   À noter : `git reset --hard` ne touche ni aux fichiers non suivis ni aux
   fichiers ignorés — les secrets locaux de l'espace de travail survivent.

3. **Vérifier les secrets Replit** : `VITE_SUPABASE_URL`,
   `VITE_SUPABASE_ANON_KEY`, `VITE_DEMO_ENABLED=false`. Optionnel :
   `VITE_VERIFY_HOSTS` (défaut `verify.karatou.academy`) — liste des hôtes dont
   la racine doit ouvrir le vérificateur d'attestation plutôt que la page
   d'accueil. Les `VITE_*` sont gravées **au build**.

4. **Réécriture SPA** — plus rien à faire dans l'interface : la règle est
   désormais versionnée dans `.replit`.

   ```toml
   [[deployment.rewrites]]
   from = "/*"
   to = "/index.html"
   ```

   Elle prend effet à la republication. Les fichiers réellement présents dans
   `dist/` restent servis tels quels (« shadowing » : quand une réécriture vise
   un chemin qui correspond aussi à un fichier, le fichier gagne), donc les
   assets, `robots.txt`, `sitemap.xml` et `opengraph.jpg` ne sont pas affectés.

5. **Republier**, puis contrôler :

   ```bash
   curl -I https://course.karatou.academy/verify/KA-2026-INT-0001   # attendu : 200
   curl -s https://course.karatou.academy/ | grep -c inter-latin    # polices de la charte
   ```

### Ce qui a déjà été vérifié en local, et ne reste donc pas à découvrir

Le build de `main` a été servi derrière un simulateur reproduisant exactement le
comportement actuel de l'hôte (200 sur `/`, 404 + `404.html` sur tout le reste),
puis parcouru dans un vrai navigateur :

| Cas | Résultat |
| --- | --- |
| `/verify/:uid` sans réécriture SPA | rattrapé côté client, identifiant préservé |
| QR format `main` : `/verify-attestation#payload` | ouvre le vérificateur |
| QR format Replit : `/#payload` | ouvre aussi le vérificateur |
| Racine avec `VITE_VERIFY_HOSTS` correspondant | ouvre le vérificateur, pas la landing |
| Polices | Inter + Literata + DM Mono, zéro DM Sans/Playfair |
| Contenu | 18 chunks de leçons, `AdminLessonStudio`, `AdminAttestationRegistry` |

**Conséquence pratique :** les 13 attestations déjà imprimées continuent de se
vérifier après la bascule, dans les deux formats de QR — y compris si l'étape 4
(réécriture SPA) est reportée. L'étape 4 reste nécessaire pour les aperçus
sociaux et l'indexation, pas pour que le site fonctionne.

### Le cycle de déploiement courant

Une fois l'espace de travail réaligné, chaque mise en ligne suit toujours la même
séquence — dans le Shell Replit, après avoir vérifié `hostname` (« repl ») :

```bash
git fetch origin && git reset --hard origin/main
```

puis **Republish**.

⚠️ **Ne pas utiliser `git pull`.** Replit crée un commit vide « Published your
App » à chaque publication : le `main` local diverge donc systématiquement, et
le `pull` échoue (`Not possible to fast-forward, aborting` — avec
`pull.ff only`) ou fabrique une fusion inutile. Le piège coûte cher parce que
l'échec est discret : on republie sans s'en apercevoir, et c'est l'ancien build
qui repart en ligne. C'est arrivé deux fois.

Écraser ces commits ne perd rien : ils sont vides, ce que `git show --stat`
confirme (aucun fichier listé). Faire `npm ci` **uniquement** quand la mise à
jour touche `package.json`.

**Contrôler ce qui est réellement servi** — et par le contenu, pas par le nom du
fichier : le hash du bundle dépend des variables `VITE_*` inlinées au build, donc
un build local sans les secrets de production ne produit jamais le même nom.

```bash
curl -s https://course.karatou.academy/ | grep -o 'assets/index-[^"]*\.js'
```

Le hash doit simplement **avoir changé** par rapport à l'avant-déploiement. Pour
confirmer le contenu, chercher une chaîne propre à la nouvelle version dans le
bundle servi.

### Si Replit n'est pas la bonne maison

La réécriture SPA est le seul point que l'hébergement statique Replit ne garantit
pas. Déménager (Netlify, Cloudflare Pages) rendrait `public/_redirects` — déjà
présent dans le dépôt — immédiatement effectif. Dans ce cas, `verify.karatou.academy`
doit rester servi (ou redirigé en 301) : c'est l'URL gravée dans les QR imprimés.

À noter pour qui reprendra le dossier : la zone DNS de `karatou.academy` est chez
**n0c.com** (PlanetHoster), pas chez Hostinger — le compte Hostinger connecté ne
gère que `kpbeducation.cloud`.
