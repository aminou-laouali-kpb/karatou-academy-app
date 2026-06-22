# Audit « Classe mondiale » — Karatou Academy

> Objectif : amener l'app au niveau requis pour **gagner des concours** (edtech / impact social / dev).
> Méthode : audit multi-dimensionnel (10 dimensions) par agents lisant le code réel, trouvailles
> vérifiées de façon adversariale. Date : 2026-06-22.
> Note de méthode : sur les 10 dimensions, *Robustesse* a été vérifiée en adversarial et **Architecture a
> été auditée manuellement en relecture directe** (le run multi-agents avait buté sur une limite de session).
> Les 8 autres dimensions sont issues d'une passe unique mais citent du code réel ; les constats clés ont
> été re-vérifiés manuellement (voir ✅).

---

## 1. Verdict exécutif

**Note globale : ~62 / 100 aujourd'hui. Plafond atteignable ~88 / 100 avec la feuille de route ci-dessous.**

Karatou Academy n'est **pas** un projet bâclé : le **backend est sérieux** (RLS partout, rôle lu depuis le
JWT non falsifiable, certificats émis/vérifiés par RPC serveur, signature HMAC côté serveur), le
**trilinguisme FR/EN/HA est authentique** (jusque dans le contenu de leçon, pas juste l'UI), le
**code-splitting** est réel et les **libs lourdes** (pdf-lib, xlsx, pdfjs) sont bien isolées hors du bundle
apprenant. C'est déjà au-dessus de la moyenne des projets de concours.

Mais il **perd exactement sur les axes qu'un jury de cette catégorie note le plus durement** :
1. **La promesse « 2G/3G, faible bande passante » n'est pas tenue** — aucun mode hors-ligne / PWA.
2. **La couche distribution publique est absente** — un certificat partagé n'a aucun aperçu social (pas
   d'OpenGraph), la favicon est cassée, pas de partage WhatsApp/LinkedIn. Or c'est ainsi qu'un projet
   d'impact « prend » devant un jury et des bailleurs.
3. **Du polish qui trahit l'amateurisme** en démo : le **français — langue principale — est sans accents**,
   écran blanc possible (pas d'ErrorBoundary), pas de retour de chargement sur les actions clés.
4. **Deux trous d'intégrité** contredisent la promesse « certificats infalsifiables ».
5. **Pyramide de tests amputée** (0 test unitaire, pas de CI).

Bref : **d'excellentes fondations, mais la dernière couche — celle que le jury voit et teste — manque.**
La bonne nouvelle : presque tout le rattrapage est en efforts **S/M**, et plusieurs sont des *quick wins*.

---

## 2. Tableau de maturité par dimension

| Dimension | Score /10 | Verdict court |
|---|:---:|---|
| 🔒 Sécurité & intégrité | **7.5** | Backend solide ; 2 trous d'intégrité à fermer |
| 🎨 UX / UI polish | **6.5** | Direction artistique mature ; manque feedback & focus |
| 🌍 i18n FR/EN/HA | **6.0** | Hausa authentique ; **FR sans accents** (grave en perception) |
| 🛡️ Robustesse / erreurs | **6.0** | Discipline par service ; fragile bout-à-bout (écran blanc) |
| ⚡ Performance / faible débit | **5.5** | Bonnes bases ; **pas d'offline**, polices CDN bloquantes |
| ♿ Accessibilité (WCAG AA) | **5.5** | Vraies bases ; contraste « gold » et focus à corriger |
| 🚀 Produit & différenciation | **5.5** | LMS classique correct ; peu de différenciateurs concours |
| 🏗️ Architecture & code | **6.5** | Fondations propres (split Core/Context, repository, typage strict) ; freinée par un contexte monolithique et l'absence de couche data |
| 🧪 Tests & QA | **4.5** | Bon E2E ; **0 test unitaire, pas de CI** |
| 📦 Build / SEO-meta / PWA | **4.5** | Déploiement ok ; **0 OG, favicon cassée, pas de PWA** |

---

## 3. Top 10 des améliorations à plus fort levier

| # | Amélioration | Dim. | Sév. | Effort | Impact concours |
|:--:|---|---|:--:|:--:|---|
| 1 | **PWA offline-first** (service worker + manifest, précache shell + contenu consulté, bannière hors-ligne) | Perf/Prod | P1 | **L** | Tient *enfin* la promesse 2G/3G — LE critère phare |
| 2 | **ErrorBoundary global** (+ retry sur les `import()` lazy) | Robust. | **P0** | **S** | Supprime l'écran blanc devant le jury — *quick win* |
| 3 | **Corriger les accents français** (translations.ts, legalContent.ts) | i18n | P1 | **S** | Langue principale crédible — *quick win* |
| 4 | **OpenGraph/Twitter cards + favicon réelle + manifest + renommer le projet** | Build/SEO | P1 | **S/M** | Certificat partagé = aperçu superbe → viralité/jury |
| 5 | **Fermer le trou d'intégrité de la progression** (preuve serveur de complétion avant émission) | Sécu | P1 | **M** | Rend les certificats *vraiment* infalsifiables |
| 6 | **Restreindre la RLS `enterprise_members` aux admins** (pas tout membre actif) | Sécu | P1 | **S** | Vraie faille d'autorisation — *quick win* |
| 7 | **Auto-héberger + sous-ensembler les polices** (supprimer le CDN bloquant) | Perf | P1 | **S** | Premier rendu fiable sur 2G — *quick win* |
| 8 | **Feedback de chargement + try/catch sur actions async** (téléchargement PDF, émission) + système de toast | UX/Robust. | P2 | **S/M** | Sécurise le moment « héros » (obtenir son certificat) |
| 9 | **A11y : contraste AA des boutons « gold », anneau de focus visible, `aria-current`/`aria-pressed`, annonce du résultat `/verify`, `autocomplete`** | A11y | P1 | **S/M** | Inclusion réelle + conformité que les juges vérifient |
| 10 | **Tableau d'impact mesurable désagrégé (région/genre) + retirer les données factices** (`Register` pré-rempli, streak/stats statiques) | Produit | P1 | **M** | Les jurys d'impact adorent les métriques crédibles |

---

## 4. 🏆 Différenciateurs pour GAGNER

Au-delà des correctifs, voici les mouvements qui font passer de « bien fait » à « inoubliable » :

1. **PWA offline-first installable** — l'apprenant installe l'app, suit un cours déjà téléchargé **sans
   réseau**, et la progression se resynchronise au retour du signal. C'est *exactement* le pitch que le
   contexte sahélien attend ; aujourd'hui il n'est pas tenu. **Le différenciateur n°1.**
2. **Certificat « waouh » et partageable** — page publique `/verify/:uid` soignée + aperçu OpenGraph
   superbe + bouton **« Partager sur WhatsApp / LinkedIn »**. Un certificat qui circule = preuve sociale et
   acquisition virale, et un jury qui voit son propre partage s'afficher proprement est conquis.
3. **Tableau d'impact en temps réel** — nb d'apprenants, certificats délivrés, **désagrégés par région et
   par genre**, taux de complétion. C'est le langage des bailleurs (PNUD, Ambassade US) et des jurys d'impact.
4. **Inclusion par l'oral / le Hausa parlé** — narration audio des leçons et consignes vocales pour les
   publics peu alphabétisés numériquement. Très fort sur l'axe « ne laisser personne de côté ».
5. **Intégrité de bout en bout réellement infalsifiable** — fermer le trou de progression pour pouvoir
   affirmer « un employeur peut vérifier ce diplôme, et personne ne peut se l'auto-décerner ».
6. **Canal WhatsApp / SMS** — notifications de progression et rappels via le canal n°1 de la région
   (et, à terme, micro-parcours). Rencontre les utilisateurs là où ils sont déjà.

---

## 5. ⚡ Quick wins (< 1 jour chacun)

- [ ] **ErrorBoundary global** localisé (FR/EN/HA) + bouton « Recharger » + retry des `import()` lazy. *(P0)*
- [ ] **Accents français** dans `translations.ts` et `legalContent.ts` (~68 mots). *(P1)*
- [ ] **`index.html`** : meta description + OpenGraph + Twitter card + `theme-color` + **vraie favicon**
      (remplacer `/vite.svg` cassé) + lien manifest. *(P1)*
- [ ] **Renommer** `package.json` (`vite-react-typescript-starter` → `karatou-academy`, version réelle). *(P3)*
- [ ] **RLS `karatou_enterprise_members`** : restreindre insert/update/delete aux admins. *(P1)*
- [ ] **Auto-héberger les polices** (woff2 sous-ensemblé) au lieu du CDN Google bloquant. *(P1)*
- [ ] **Timeout + AbortController** sur `fetchImageBytes` (logo sponsor) → le certificat ne « gèle » plus sur 2G. *(P1)*
- [ ] **`Register.tsx:15`** : ne plus pré-remplir `'demo1234'` hors mode démo (gardé comme `Login.tsx`). *(P2)*
- [ ] **A11y** : `focus-visible` ring sur `Button`, contraste des boutons « gold », `aria-current` sur la nav,
      `aria-pressed` sur le switch de langue, `autocomplete` sur Login/Register. *(P1)*
- [ ] **`prefers-reduced-motion`** : désactiver les animations pour qui le demande. *(P2)*
- [ ] **`try/catch` + spinner + bouton désactivé** sur le téléchargement du certificat (`Certificates.tsx`). *(P2)*
- [ ] **Mémoïser les valeurs de contexte** `AuthContext` et `LearningContext` (`useMemo`/`useCallback`) → moins de re-renders. *(P2, arch+perf)*
- [ ] **`robots.txt`** + (optionnel) `sitemap.xml`. *(P3)*

---

## 6. Plan de séquencement (3 vagues)

### Vague A — Avant le concours / indispensable (≈ 2–3 jours, surtout du S)
Crédibilité immédiate, zéro défaut visible :
ErrorBoundary global • accents FR • OG/favicon/meta/manifest • contraste & focus a11y • feedback +
try/catch sur actions async • retrait des données factices • fix RLS `enterprise_members` • timeout fetch
logo • renommage du projet.

### Vague B — Fort différenciateur (≈ 1–2 semaines)
Ce qui fait *gagner* :
**PWA offline-first** complète • **certificat partageable** (OG + WhatsApp/LinkedIn + page publique soignée)
• **tableau d'impact mesurable** (région/genre) • auto-hébergement des polices • timeouts réseau
généralisés + bannière hors-ligne • **fermeture du trou d'intégrité de la progression**.

### Vague C — Polish & solidité (continu)
Tests unitaires (HMAC, slug, rôles, génération PDF) + **CI GitHub Actions** • support **audio/oral & Hausa
parlé** • canal **WhatsApp/SMS** • régression visuelle + axe a11y automatisé • i18n du **certificat PDF** +
dates localisées + localiser les **4 modules** non traduits.

**Dette d'architecture** (à traiter quand le rythme le permet, fort signal de qualité pour un jury) :
adopter une **couche data-fetching/cache** (TanStack Query) — règle d'un coup retries/timeouts/cache offline ;
**scinder le `LearningContext`** monolithique en contextes par domaine ; **valider/versionner le cache
localStorage** (cause-racine du crash écran blanc) ; renommer `DemoUser`→`AppUser` et porter `authMode`
explicitement ; centraliser le **formatage de date localisé** et remplacer `contentSyncStatus` (chaîne FR) par
un code de statut localisé.

---

## 7. Annexe — Constats par dimension

### 🔒 Sécurité & intégrité — 7.5/10
**Forces :** aucun secret exposé (anon publishable, jamais de service-role en `VITE_`) ; rôle depuis
`app_metadata` du JWT (non falsifiable) ; certificats par RPC `SECURITY DEFINER` (plus d'INSERT client) ;
HMAC serveur ; Edge Functions revérifient le rôle ; aucune policy `using(true)` ; pas de
`dangerouslySetInnerHTML`/`eval` ; bucket logos verrouillé platform-admin ; contournement localStorage durci en prod.
**À corriger :**
- **[P1] Intégrité de la progression** — la progression est écrite librement par le client sans preuve
  serveur ⇒ un apprenant peut déclencher l'émission d'un **vrai certificat signé** sans réellement terminer.
  *(Contredit la promesse « infalsifiable ». À fermer par une validation serveur de la complétion.)*
- ~~**[P1] RLS `karatou_enterprise_members`** — tout membre actif pourrait insert/update/delete.~~
  **FAUX POSITIF (vérifié 2026-06-22).** Les 4 migrations successives définissent une **unique** policy
  « Karatou admins can manage enterprise members », toujours restreinte aux admins (origine :
  `app_metadata.role in ('admin','enterprise_admin','org_admin')` ; finale s01_04 :
  `is_platform_admin() OR is_org_admin(organization_id)`, `is_org_admin` exigeant le rôle `enterprise_admin`).
  Aucune policy « membre actif » n'a jamais existé. Aucune action requise.
- **[P2] CORS large** sur les Edge Functions ; **[P2] dépendance `xlsx`** réputée vulnérable (envisager
  `exceljs` ou isolation stricte côté admin).

### 🎨 UX / UI polish — 6.5/10
**Forces :** design system cohérent (bleu/or, ombres sur-mesure), typographie éditoriale (Playfair + DM Sans),
états vides soignés, composants factorisés, micro-interactions sur cartes, sidebar mobile accessible.
**À corriger :** pas d'anneau de **focus visible** sur `Button` ; **pas de feedback de chargement** sur les
actions async critiques (téléchargement PDF, émission) ; **pas de système de toast/confirmation** ; animations
non désactivables ; **données factices visibles** (`Register` pré-rempli `demo1234` ✅, streak/stats statiques) ;
pas d'ErrorBoundary global.

### 🌍 i18n FR/EN/HA — 6.0/10
**Forces :** parité parfaite des 378 clés (0 manquante/doublon) ; **Hausa authentique** ; `document.lang`
synchronisé ; persistance validée ; contenu légal trilingue ; leçon de secours et sélecteur vidéo trilingues.
**À corriger :** **[P1] français sans accents** dans `translations.ts` + `legalContent.ts` ✅ (incohérent avec
`lessonContent.ts` qui, lui, est accentué) ; **certificat PDF codé en dur en français** ; **4 des 7 modules**
non localisés, leçons EN/HA tronquées ; **dates toujours en `fr-FR`**.

### 🛡️ Robustesse / gestion d'erreurs — 6.0/10 *(seule dimension vérifiée en adversarial)*
**Forces :** services gardés + erreurs typées ; détection « schéma non appliqué » avec fallback ; effets
annulés (flag `active`) ; génération PDF défensive (`safe()`) ; unwrap des erreurs Edge Functions ; idempotence
d'émission.
**À corriger (vérifié) :**
- **[P0] Aucun ErrorBoundary global** — une exception de rendu (ex. `LessonPlayer` accède sans garde à
  `lesson.content.map`, `lesson.quiz[…].options.map`…) **efface toute l'app** (écran blanc). *Confirmé.*
  *(Placer l'ErrorBoundary à l'intérieur des providers pour pouvoir localiser le message.)*
- **[P1] Pas d'offline/PWA** — sur coupure 2G pendant le chargement d'un chunk lazy, faute de boundary,
  l'arbre se démonte → écran blanc. *Confirmé.*
- **[P1] Aucun timeout/AbortController** — surtout `fetchImageBytes` (logo sponsor) **attendu inline** dans
  `generateCertificatePdf` : un fetch suspendu **gèle toute la génération** du certificat. *(Nuance : l'UI
  globale n'est pas figée — le contenu local s'affiche ; c'est le statut de sync et la génération PDF qui pendent.)*
- **[P2] Téléchargement PDF sans try/catch ni état** (`Certificates.tsx:34-48`) — échec silencieux, clics
  multiples possibles. *(Sévérité ramenée à P2 : action secondaire, certificat déjà affiché et vérifiable.)*

### ⚡ Performance / faible débit — 5.5/10
**Forces :** code-splitting par route réel (22 pages lazy) ; **libs lourdes isolées** hors bundle apprenant ;
**zéro image raster** (tout SVG/CSS) ; requêtes Supabase batchées (pas de N+1) ; progression persistée ;
`font-display:swap` ; mémoïsation ciblée.
**À corriger :** **[P1] pas de PWA/service worker** ; **[P1] polices Google Fonts CDN render-blocking** ✅
(point de défaillance unique sur 2G) ; bundle initial ~119 KB gzip avec **les 3 langues chargées d'emblée** ;
config Vite sans `manualChunks`/budget ; PDF certificat chargé à l'ouverture de la page plutôt qu'au clic.
*(Nuance ✅ : le **déploiement Replit est bien `static` + `npm run build`** ; seul le bouton « Run » lance le dev — pas un problème de prod.)*

### ♿ Accessibilité (WCAG AA) — 5.5/10
**Forces :** SkipLink correct ; `document.lang` synchronisé ; focus piégé/restauré + Escape sur la sidebar
mobile ; quiz `role="radiogroup"` ; icônes `aria-hidden` ; boutons-icônes `aria-label` ; plusieurs notices
`aria-live` ; labels de formulaires ; un `<h1>` unique par page.
**À corriger :** **[P1] contraste AA** (boutons « gold » texte blanc ≈ 2.03:1, badges, étoiles) ; **pas de
gestion du focus au changement de route** SPA ; états ARIA manquants (`ProgressBar`, tablist, `aria-current`,
`aria-pressed`) ; **Login/Register n'annoncent pas leurs erreurs** et **pas d'`autocomplete`** ; pas de
`prefers-reduced-motion` ; **`/verify` n'annonce pas son résultat** aux lecteurs d'écran.

### 🚀 Produit & différenciation — 5.5/10
**Forces :** trilinguisme profond (jusqu'au contenu) ; certificats vérifiables QR+HMAC ; sélecteur vidéo par
langue ; modèle FCFA + bourses + tableau enterprise (angle PNUD) ; pédagogie en 8 onglets avec déverrouillage
progressif.
**À corriger / saisir :** pas d'**offline/PWA** ; pas de **support oral** pour publics peu alphabétisés ; pas
de **partage social** des certificats ; pas de **tableau d'impact mesurable** (région/genre) ; pas de
**WhatsApp/SMS** ; **gamification partiellement factice** ; **storytelling de mission absent**.

### 🧪 Tests & QA — 4.5/10
**Forces :** suite **production-gate** (prouve l'absence de bypass d'auth — précieux) ; matrice de routage par
rôle exhaustive ; environnements hermétiques (ports/`.env` dédiés) ; **sélecteurs `getByRole/Label`** robustes
et multilingues ; vérif certificat sur 3 états ; test négatif d'altération d'attestation ; `test.fixme`
honnête pour le cross-org ; config Playwright prête pour CI.
**À corriger :** **[P1] zéro test unitaire/intégration** (pas de vitest/jest) alors que la logique pure
(HMAC, `slugify`, rôles, `parseDemoFlag`, PDF) est très testable ; **[P1] aucun CI** (`.github` absent) ⇒
régressions mergeables ; E2E contre **Supabase vidé** ⇒ Edge Functions / RLS multi-org / RPC d'émission
**jamais exercés** ; pas d'axe a11y ni de régression visuelle ; parcours non couverts (inscription,
complétion→certificat, rachat de bourse, reset password).

### 📦 Build / SEO-meta / PWA — 4.5/10
**Forces :** déploiement Replit **static** correct (rewrite SPA documenté) ; HMR derrière proxy géré ;
secrets exemplaires (service-role jamais `VITE_`) ; `.gitignore` propre ; `<title>` orienté valeur ; `lang`
HTML géré ; viewport correct ; README opérationnel de qualité.
**À corriger :** **[P1] aucune meta description, 0 OpenGraph/Twitter** ✅ (certificat partagé sans aperçu) ;
**favicon cassée `/vite.svg`** ✅ ; **pas de PWA** (ni manifest ni SW) ; **polices CDN bloquantes** ✅ ;
`package.json` = `vite-react-typescript-starter` v0.0.0 ✅ ; pas de `robots.txt`/`sitemap` ; build sans config
explicite (`target`, `sourcemap`, `manualChunks`).

### 🏗️ Architecture & code — 6.5/10 *(auditée manuellement, relecture directe)*
**Forces (réelles et au-dessus de la moyenne) :**
- **Séparation `*Core.ts` / `*Context.tsx`** délibérée : la définition du contexte + ses types vivent dans
  `authCore.ts`/`learningCore.ts`/`languageCore.ts`, l'implémentation du provider dans le `.tsx`. Propre,
  compatible Fast Refresh, et découple le contrat de l'implémentation. *(src/context/*)*
- **Pattern repository cohérent** : tout l'accès Supabase passe par `services/*` avec des interfaces `Row`
  typées, des mappeurs `mapX`/`xToRow` symétriques, un garde `isSupabaseConfigured` et `requireClient()`.
  Frontière DB↔domaine nette (`contentRepository.ts`, `learningRepository.ts`, `enterpriseRepository.ts`).
- **Typage strict** : aucun `any` repéré ; parsing JSON via `unknown` + narrowing (`readStoredState`,
  `readStoredUser`) ; rôles normalisés en un seul endroit (`lib/roles.ts`).
- **Hooks défensifs** (`useAuth`/`useLearning` jettent hors provider) ; `ProtectedRoute` mince qui délègue à
  `canAccessRole` ; dualité démo/prod centralisée (`isDemoEnabled`, `getContentBackend()`, `authMode`).
- **Auth à double source** (Supabase JWT + session démo locale) gérée avec soin (`demoSessionActive` ref pour
  ne pas écraser la session démo au sign-out Supabase).

**À corriger :**
- **[P2] `LearningContext` est un objet-Dieu** (~990 lignes, valeur de contexte à 28 membres) mélangeant
  **5 domaines** : CMS de contenu, progression apprenant, certificats, organisations/entreprise, bourses.
  C'est le 1ᵉʳ risque de maintenabilité. À scinder en `ContentContext` / `LearnerContext` / `EnterpriseContext`.
  *(Effort L — fort signal de qualité pour un jury qui inspecte le code.)*
- **[P2] Valeurs de contexte non mémoïsées** : `AuthContext` et `LearningContext` recréent leur objet `value`
  (et toutes leurs fonctions) **à chaque rendu** → tous les consommateurs de `useLearning`/`useAuth`
  re-rendent à chaque changement d'état. (Seul `LanguageContext` est correctement `useMemo`/`useCallback`.)
  *(Effort M — `useMemo` + `useCallback`. Gain perf + propreté.)*
- **[P2] Pas de couche de data-fetching/cache** (type TanStack Query/SWR) : toute la synchro serveur est
  câblée à la main dans des `useEffect` avec flags `active` et statuts en texte libre, sans cache, dédup,
  retry, ni timeout. **Levier le plus élevé** : adopter une telle couche réglerait *d'un coup*
  timeouts + retries + cache **offline** (recoupe les findings Robustesse/PWA). *(Effort L.)*
- **[P1→P2] Cache localStorage fragile** : le suffixe `v6` trahit des migrations de schéma répétées ; le merge
  `{ ...defaultState, ...parsed }` est **superficiel** (la dérive de forme imbriquée n'est pas réparée) et la
  seule validation est « est-ce un objet ». Un cache d'un ancien schéma peut injecter un objet malformé dans
  les composants — **c'est précisément la cause-racine du crash écran blanc** (cf. ErrorBoundary P0). Valider
  par version/schéma et invalider en cas de divergence. *(Effort M.)*
- **[P3] Type `DemoUser` réutilisé comme utilisateur applicatif** même en prod (le user Supabase y est mappé,
  avec `password: ''`), et **`authMode` est dérivé de `!user?.password`** — astucieux mais fragile et trompeur.
  Renommer en `AppUser`/`SessionUser` et porter `authMode` par un champ explicite.
- **[P3] Logique métier dupliquée local vs serveur** (rachat de bourse, règles de certificat) : deux sources de
  vérité qui peuvent diverger. Acceptable pour la démo, à surveiller.
- **[P3] Formatage de date dupliqué et figé `fr-FR`** (`LearningContext.formatDate` + `learningRepository.formatDate`) :
  centraliser dans un util localisé (recoupe l'i18n) ; **[P3] `contentSyncStatus` est une chaîne FR** utilisée
  comme état (non localisable, non testable par valeur) → préférer un code/enum + rendu localisé.

---

*Légende sévérité : P0 = bloquant/grave · P1 = fort impact · P2 = amélioration nette · P3 = polish.
Effort : S < 2h · M = ½–1 j · L = plusieurs jours. ✅ = re-vérifié manuellement après l'audit.*
