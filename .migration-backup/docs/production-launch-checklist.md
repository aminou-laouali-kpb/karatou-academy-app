# Karatou Academy - Production Launch Checklist

Last updated: June 15, 2026
Owner: Karatou Academy product/engineering

This checklist lets a new operator deploy and test Karatou Academy from scratch.
It separates three environments:

- **Local demo** - laptop, no real backend, demo accounts on. For development and grant demos.
- **Staging** - real Supabase project, demo affordances still visible for reviewers.
- **Production** - real Supabase project, demo affordances off.

The app is a static Vite + React SPA. The backend is Supabase (Postgres + Auth + RLS).
Demo mode runs entirely in the browser against `src/data/mockData.ts`; it does not
require Supabase.

---

## 1. Environment matrix

| Variable | Scope | Local demo | Staging | Production |
| --- | --- | --- | --- | --- |
| `VITE_SUPABASE_URL` | client | empty / unset | staging project URL | prod project URL |
| `VITE_SUPABASE_ANON_KEY` | client | empty / unset | staging anon/publishable key | prod anon/publishable key |
| `VITE_DEMO_ENABLED` | client | `true` | `true` | `false` |
| `SUPABASE_SERVICE_ROLE_KEY` | server-only | not needed | required for seed/admin | required for seed/admin |
| `KARATOU_ADMIN_EMAIL` | server-only | not needed | required for `seed:admin` | required for `seed:admin` |
| `KARATOU_ADMIN_PASSWORD` | server-only | not needed | required for `seed:admin` | required for `seed:admin` |
| `KARATOU_ADMIN_NAME` | server-only | optional | optional | optional |

Notes:

- Only `VITE_*` variables reach the browser. **Never** prefix the service-role key
  with `VITE_` and never reference it in client code.
- When `VITE_SUPABASE_URL`/`VITE_SUPABASE_ANON_KEY` are empty, the app runs in pure
  local-demo mode regardless of other settings (`src/lib/supabaseClient.ts`).
- `VITE_DEMO_ENABLED=false` removes the demo badge, demo switcher, demo login cards,
  local demo sessions, and the Supabase-login fallback to demo accounts.
- Client env values are baked in **at build time**. Rebuild after changing any `VITE_*`.

### Env files

- Client dev: copy `.env.example` to `.env.local` and fill the `VITE_*` values.
- Server-only secrets for the seed/admin scripts are read from `.env`, `.env.local`,
  then `.env.seed` (first file to define a key wins; real shell env wins over all).
  Keep `SUPABASE_SERVICE_ROLE_KEY` and `KARATOU_ADMIN_*` out of anything `VITE_`-prefixed.
- `.env.e2e` is committed and only used by `npm run dev:e2e` / `npm run test:e2e`
  to force hermetic local-demo runs. Do not put real secrets in it.

---

## 2. Prerequisites

- Node.js 20+ and npm.
- Supabase CLI (`supabase`) installed and authenticated (`supabase login`).
- A Supabase project. The current target is `Karatou Academy` (`pqcovsnomouclkdjhjig`).
  Because that project has legacy `modules`/`courses`/`certificates` tables, this app
  uses namespaced `karatou_*` tables.

```bash
npm install
supabase link --project-ref <your-project-ref>
```

---

## 3. Apply database migrations

Migrations live in `supabase/migrations/` and are applied in timestamp order by the
CLI. Always dry-run first.

```bash
npm run supabase:push:dry   # supabase db push --dry-run --linked
npm run supabase:push       # supabase db push --linked --yes
```

Migration order (the CLI handles this automatically):

1. `202606120001_content_cms.sql` - content CMS tables (`karatou_rubriques/modules/courses/content_imports`)
2. `20260612111129_learner_activity_and_certificates.sql` - learner progress + certificates
3. `20260612225233_namespaced_karatou_app_tables.sql`
4. `20260612225800_harden_karatou_app_tables.sql`
5. `20260612232749_enterprise_members_and_scholarships.sql`
6. `20260614010456_s01_02_role_model_cleanup.sql` - role model `platform_admin | enterprise_admin | learner`
7. `20260614081648_s01_03_organization_data_model.sql` - organizations + memberships + RLS
8. `20260614165334_s01_04_bourse_redemption_flow.sql`
9. `20260614170140_s01_04_bourse_redemption_role_guard.sql`
10. `20260614170328_s01_04_bourse_redemption_conflict_fix.sql`
11. `20260614170524_s01_04_bourse_redemption_role_guard_fix.sql`
12. `20260615093513_s01_06_certificate_verification_hardening.sql`

A private profile-bootstrap trigger creates a `profiles` row for each new Auth user.

---

## 4. Seed content

`seed:content` upserts the rubriques/modules/courses plus the PNUD Niger organization,
its memberships, enterprise members, and scholarships from `src/data/mockData.ts`.
It is idempotent (upsert on conflict).

```bash
npm run seed:content -- --dry-run   # prints counts, needs no Supabase env
npm run seed:content                # needs SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY
```

---

## 5. Create the platform admin

`seed:admin` creates or updates one platform-admin Auth user and sets
`app_metadata.role = "platform_admin"` (plus a matching `profiles` row). Idempotent.

```bash
npm run seed:admin   # needs SUPABASE_SERVICE_ROLE_KEY + KARATOU_ADMIN_EMAIL/PASSWORD
```

Convenience: `npm run prod:bootstrap` runs push + seed:content + seed:admin in order.

### Enterprise admins

`seed:enterprise-admin` creates/updates an enterprise-admin Auth user, sets
`app_metadata.role = "enterprise_admin"`, and links them to an existing organization
(`karatou_org_memberships` + `karatou_enterprise_members`). The org must already exist
(`npm run seed:content`).

```bash
KARATOU_ENTERPRISE_EMAIL=admin@partner.org \
KARATOU_ENTERPRISE_PASSWORD=... \
KARATOU_ENTERPRISE_ORG_ID=org-pnud-niger \
npm run seed:enterprise-admin   # needs SUPABASE_SERVICE_ROLE_KEY
```

---

## 6. Build and deploy the frontend

```bash
npm run typecheck && npm run lint && npm run build
```

Deploy the `dist/` folder to any static host (Netlify, Vercel, Cloudflare Pages, S3+CDN).

**SPA routing:** the app uses client-side routing (`BrowserRouter`). Configure the host
to rewrite all unknown paths to `/index.html`, otherwise deep links like
`/verify/:uid`, `/redeem/:code`, `/enterprise`, and `/admin` will 404 on refresh.

---

## 7. Smoke-test checklist

### Automated (run before every deploy)

```bash
npm run test:e2e
```

Covers role login + route guards, admin CMS load/validation/draft-save, enterprise
bourse creation, and public certificate verification. Runs hermetically in forced
local-demo mode (see README "End-to-End Smoke Tests"). All flows must pass.

### Manual demo script (per environment)

1. Open `/login`. On staging confirm demo cards are visible; on production confirm they are gone.
2. Log in as platform admin, open `/admin`, create/edit a module, refresh, confirm it persists.
3. Log in as enterprise admin, open `/enterprise`, create a bourse, copy the `/redeem/...` link.
4. In a fresh session, redeem that bourse as a learner and confirm org access.
5. Complete or open a certificate, then verify it at `/verify/:uid` (try an active, an
   expired, and a revoked UID; confirm each state renders correctly).
6. On production only: confirm no demo badge, no demo switcher, and that demo credentials
   do not authenticate.

---

## 8. Pre-launch hardening

- [ ] `VITE_DEMO_ENABLED=false` in the production build, and the bundle was rebuilt after setting it.
- [ ] Service-role key is server-side only and never shipped to the browser.
- [ ] `KARATOU_ADMIN_PASSWORD` changed from the example value.
- [ ] Supabase advisors reviewed and addressed (`get_advisors` / dashboard) - legacy issues exist on the project.
- [ ] RLS verified: anonymous REST reads of organizations/members/scholarships return permission denied.
- [ ] Public `/verify/:uid` works while logged out.
- [ ] SPA rewrite-to-index configured on the host.

---

## 9. Known limitations

- **Demo accounts are local-only.** `student@karatou.test`, `admin@karatou.test`, and
  `platform@karatou.test` (password `demo1234`) exist only in the browser demo data, not
  in Supabase Auth. Real environments need real Auth users.
- **No durable learner certificate rows** are seeded into `karatou_certificates` yet;
  certificate behavior is proven by demo data and rollback-wrapped SQL.
- **Cross-organization RLS isolation** is verified at the database layer (SQL) but not yet
  by a browser E2E - that needs a seeded second organization plus a second enterprise-admin
  Auth user (tracked as a `test.fixme` in `e2e/enterprise.spec.ts`).
- **PDF/DOCX lesson import** accepts files as sources but does not extract content in the
  browser; production extraction needs a server-side (Supabase Edge Function) workflow.
- **Out of scope** for this release: payments/subscriptions, multi-tenant billing plans,
  native mobile apps, and advanced analytics dashboards.
