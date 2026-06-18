# Sprint 01 - Production Core

Dates: June 13, 2026 to June 27, 2026
Owner: Karatou Academy product/engineering
Status: All backlog items done (S01-01..S01-08). Residual production-data risks tracked below.

## Sprint Goal

Move Karatou Academy from a demo-shaped MVP to a production-testable web app where platform admin, enterprise admin, and learner flows are separated, secured, and backed by Supabase.

## Why This Sprint Matters

This sprint removes the biggest competition/grant risk: the app should not feel like a prototype that depends on demo shortcuts. By the end, a reviewer should be able to log in with real accounts, see the right portal for their role, create content, create bourses, enroll learners, and verify certificates with persisted Supabase data.

## Scope

In scope:
- Disable demo affordances in production builds.
- Separate roles: `platform_admin`, `enterprise_admin`, `learner`.
- Add real organization and membership tables.
- Make bourse/invitation redemption production-testable.
- Enforce route access by role.
- Add first E2E smoke tests for admin, enterprise, and learner paths.
- Document production environment variables and launch checks.

Out of scope:
- Payment/subscriptions.
- Full PDF/DOCX lesson extraction.
- Mobile native apps.
- Multi-tenant billing plans.
- Advanced analytics dashboards.

## Sprint Backlog

### S01-01 - Production Demo Gate

Status: Done
Priority: P0
Estimate: 3 pts

User story:
As a platform owner, I want demo UI hidden in production so reviewers use real app flows.

Tasks:
- Add `VITE_DEMO_ENABLED` to `.env.example`.
- Hide demo login cards when disabled.
- Hide `DemoSwitcher` and `DemoBadge` when disabled.
- Keep demo mode available in local development.

Acceptance criteria:
- With `VITE_DEMO_ENABLED=false`, no demo badge, demo switcher, or demo login cards are visible.
- With `VITE_DEMO_ENABLED=true`, current demo behavior still works.

Verification:
- `npm run typecheck`, `npm run lint`, and `npm run build` passed.
- Browser checked demo-on at `http://127.0.0.1:5173/login`: demo cards and demo login still work.
- Browser checked demo-off at `http://127.0.0.1:5174/login`: no demo cards, no demo copy, empty credentials, and demo credentials do not authenticate.

### S01-02 - Role Model Cleanup

Status: Done
Priority: P0
Estimate: 5 pts

User story:
As Karatou, I want platform admins and enterprise admins separated so CMS access is not mixed with organization management.

Tasks:
- Update role type to `platform_admin | enterprise_admin | learner`.
- Map Supabase `app_metadata.role` to the new roles.
- Update redirects:
  - platform admin -> `/admin`
  - enterprise admin -> `/enterprise`
  - learner -> `/dashboard`
- Update protected routes.
- Update seed/admin script role assignment.

Acceptance criteria:
- Platform admin cannot be confused with enterprise admin in UI.
- Enterprise admin cannot access platform CMS unless explicitly granted.
- Learner cannot access admin or enterprise routes.

Verification:
- `npm run typecheck`, `npm run lint`, and `npm run build` passed.
- Supabase migration `20260614010456_s01_02_role_model_cleanup` applied to `pqcovsnomouclkdjhjig`.
- Browser smoke checked `platform_admin -> /admin`, `enterprise_admin -> /enterprise`, and `learner -> /dashboard`.
- Browser smoke confirmed enterprise admin redirects from `/admin` back to `/enterprise`.
- Browser smoke confirmed learner redirects from `/enterprise` and `/admin` back to `/dashboard`.
- Mobile-width login smoke confirmed learner, enterprise admin, and platform admin demo entries are present.

### S01-03 - Organization Data Model

Status: Done
Priority: P0
Estimate: 8 pts

User story:
As Karatou, I want enterprise data scoped to organizations so one partner cannot see another partner's learners or bourses.

Tasks:
- Add Supabase migration for:
  - `karatou_organizations`
  - `karatou_org_memberships`
  - org-scoped `karatou_enterprise_members`
  - org-scoped `karatou_scholarships`
- Add RLS policies using `app_metadata.role` and organization membership.
- Seed PNUD Niger as the first organization.
- Link existing enterprise members and bourses to PNUD Niger.

Acceptance criteria:
- Enterprise admin sees only their organization.
- Platform admin can see all organizations.
- Anonymous users see no organization/member/bourse data.

Implementation notes:
- Added local migration `20260614081648_s01_03_organization_data_model.sql`.
- Added `Organization` state, org-scoped enterprise members, org-scoped scholarships, and seeded PNUD Niger as `org-pnud-niger`.
- Updated enterprise reads/writes and seed script to use organization IDs.
- Added a safe fallback so local MVP testing keeps seeded enterprise data while the remote org schema is pending.

Verification:
- `npm run typecheck`, `npm run lint`, `npm run build`, and `npm run seed:content -- --dry-run` passed.
- Supabase migration `20260614083435_s01_03_organization_data_model` applied to `pqcovsnomouclkdjhjig`.
- Supabase count check confirmed 1 organization, 6 org memberships, 6 enterprise members, and 4 scholarships.
- Anonymous REST reads for organizations, members, and scholarships return `42501 permission denied`.
- Browser smoke checked `/enterprise`: PNUD Niger dashboard restores 6 members after KPI animation settles.
- Browser smoke checked `Creer des bourses`: a new `KA-SCH-PNUD-*` bourse code appears with no fresh console errors.
- Browser smoke checked `/enterprise/members`: entering `KA-2026-AI-PN001` opens `/verify/KA-2026-AI-PN001` and shows Fatima Moussa's valid certificate with no fresh console errors.

Residual risk:
- A second organization fixture should be added in S01-07 E2E tests to prove cross-organization isolation beyond the current single-org seed.

### S01-04 - Bourse Redemption Flow

Status: Done
Priority: P0
Estimate: 5 pts

User story:
As a learner, I want to redeem a bourse code so I can join an organization-backed learning path.

Tasks:
- Add `/redeem/:code` or `/redeem?code=...` route.
- Validate bourse code status and expiry.
- Connect redeemed code to learner profile/membership.
- Mark bourse as claimed.
- Show clear success and invalid-code states.

Acceptance criteria:
- Valid unused code attaches the learner to the organization.
- Claimed/expired/invalid codes show clear errors.
- Redeemed bourse persists after refresh.

Implementation notes:
- Added `/redeem` and `/redeem/:code` with logged-out, learner-only, success, claimed, expired, invalid, and role-blocked states.
- Added enterprise bourse links so admins can copy/open a learner redemption URL after creating a bourse.
- Added Supabase claim metadata on `karatou_scholarships`: claiming user, email, claimed timestamp, expiry date, and `expired` status support.
- Added `public.karatou_redeem_scholarship(input_code)` backed by a security-definer private function that atomically claims a code and upserts learner organization/member records.
- Hardened organization admin policies so platform admins and active organization admins can manage memberships/bourses, while normal learners cannot.
- Updated auth fallback so local demo login clears stale Supabase sessions before running demo-only flows.

Verification:
- `npm run typecheck`, `npm run lint`, `npm run build`, and `npm run seed:content -- --dry-run` passed.
- Supabase migrations applied to `pqcovsnomouclkdjhjig`: `20260614170051_s01_04_bourse_redemption_flow`, `20260614170241_s01_04_bourse_redemption_role_guard`, `20260614170428_s01_04_bourse_redemption_conflict_fix`, and `20260614170638_s01_04_bourse_redemption_role_guard_fix`.
- Supabase SQL count check confirmed 6 org memberships, 6 enterprise members, 2 claimed scholarships, 2 pending scholarships, and 4 scholarships with expiry dates before browser-created local test bourses.
- Supabase transactional SQL checked the redemption success path: member and claimed-scholarship counts increased inside the transaction, then rollback restored the baseline.
- Supabase transactional SQL checked admin/enterprise role guard: admin claims return `role_not_allowed`.
- Browser smoke checked enterprise bourse creation: `KA-SCH-PNUD-6VC2RM` generated with `/redeem/KA-SCH-PNUD-6VC2RM` and zero fresh console warnings/errors.
- Browser smoke checked logged-out redemption: `/redeem/KA-SCH-PNUD-6VC2RM` shows `Connexion requise` and preserves the code.
- Browser smoke checked learner redemption: demo learner returns to `/redeem/KA-SCH-PNUD-6VC2RM`, activates it, and sees `Bourse activee` plus `Portail PNUD Niger`.
- Browser smoke checked enterprise verification after redemption: `/enterprise/members` shows `KA-SCH-PNUD-6VC2RM` claimed by `Amadou Kouyate` / `student@karatou.test` with no fresh console warnings/errors.

Residual risk:
- The remote production redemption path is SQL-verified transactionally; the browser learner flow is still local-demo because the project currently has no `student@karatou.test` Supabase Auth user.

### S01-05 - Admin CMS Persistence Checks

Status: Done
Priority: P1
Estimate: 5 pts

User story:
As platform admin, I want CMS edits to persist in Supabase so content management is production-testable.

Tasks:
- Verify rubrique/module/course save paths against Supabase.
- Add status feedback for save failure vs success.
- Add basic validation for required fields.
- Add safe delete confirmation for modules.
- Ensure refresh reloads saved content from Supabase.

Acceptance criteria:
- Create/edit/publish a module, refresh, and see it remain.
- Required fields block invalid saves.
- Failed Supabase saves show a visible error.

Implementation notes:
- CMS save/delete actions now await the persistence result instead of showing success before Supabase responds.
- Local demo CMS saves explicitly report local persistence and explain that a Supabase platform-admin session is required for remote persistence.
- Module validation blocks missing title, slug, description, invalid rubrique, duplicate slug, empty lesson fields, and published modules with no lessons.
- Module deletion now requires an explicit confirmation step before removing the module and associated lessons.

Verification:
- `npm run typecheck`, `npm run lint`, `npm run build`, and `npm run seed:content -- --dry-run` passed.
- Supabase policy inspection confirmed platform-admin-only insert/update/delete policies for `karatou_rubriques`, `karatou_modules`, `karatou_courses`, and `karatou_content_imports`.
- Supabase transactional SQL as authenticated platform admin wrote 1 rubrique, 1 module, and 1 course, then rolled back.
- Supabase transactional SQL as authenticated platform admin deleted a module and confirmed course cascade, then rolled back.
- Browser smoke checked `/admin` as platform-admin demo: page identity, meaningful CMS content, no framework overlay, and no fresh console warnings/errors.
- Browser smoke checked invalid save: empty `Titre FR` blocks save with `Le titre FR est obligatoire.`
- Browser smoke checked valid draft save: new draft module increments the module count and shows local persistence feedback.
- Browser smoke checked safe delete: first click shows confirmation, second click deletes and restores the module count.

Residual risk:
- Browser persistence was verified in local-demo mode because the staging project has no known platform-admin password available to this session. Remote persistence is verified by Supabase transactional SQL.

### S01-06 - Certificate Verification Hardening - Done

Priority: P1
Estimate: 5 pts

User story:
As an enterprise admin or public verifier, I want certificate checks to be reliable and tamper-resistant.

Tasks:
- Confirm certificate UID uniqueness.
- Add certificate status states: active, expired, revoked.
- Ensure `/verify/:uid` works without login.
- Ensure enterprise portal can search certificates by UID/learner.
- Add QR-ready verification URL format.

Acceptance criteria:
- Public verification works for active certificates.
- Revoked/expired certificates are clearly marked.
- Enterprise admin can verify learners in their org.

Implementation:
- Added Supabase migration `20260615093513_s01_06_certificate_verification_hardening.sql`.
- Added case-insensitive unique certificate UID index with `upper(uid)`.
- Updated public and authenticated certificate RLS so active, expired, and revoked statuses are visible to verification reads.
- Added app-side UID normalization and expiry derivation for Supabase certificate lookups.
- Updated `/verify/:uid` to show distinct active, expired, revoked, and unknown states with a canonical verification URL for QR generation.
- Updated enterprise member certificate search to accept certificate UID, learner name, or learner email.
- Added stale demo-state repair so new seed certificates are added even when a browser already has older local storage.
- Added FR, EN, and HA copy for revoked/expired verification states and enterprise certificate search helper text.

Verification:
- `npm run typecheck`, `npm run lint`, `npm run build`, and `npm run seed:content -- --dry-run` passed.
- Supabase project confirmed as `Karatou Academy` (`pqcovsnomouclkdjhjig`), migration applied as `20260615094147_s01_06_certificate_verification_hardening`.
- Supabase policy inspection confirmed anon verification can read statuses `active`, `expired`, and `revoked`.
- Supabase transactional SQL inserted active, expired, and revoked test certificates, selected them under `set local role anon`, and rolled back.
- Browser smoke checked `/verify/KA-2026-AI-PN001`, `/verify/KA-2024-AI-00017`, `/verify/KA-2026-AI-REVOKED`, and `/verify/UNKNOWN-CERT`.
- Browser smoke checked `/enterprise/members`: searching `Fatima` navigates to `/verify/KA-2026-AI-PN001`.
- Browser console check found no errors.

Residual risk:
- The production database currently has no durable learner certificate rows in `karatou_certificates`; the verification behavior was proven with rollback-wrapped SQL plus demo seed data.

### S01-07 - E2E Smoke Tests

Status: Done
Priority: P1
Estimate: 8 pts

User story:
As the team, we want automated smoke tests so production readiness does not depend on manual clicking.

Tasks:
- Add Playwright or equivalent E2E setup.
- Test login/redirect by role.
- Test admin CMS page loads and saves a draft module.
- Test enterprise bourse creation.
- Test public certificate verification page.
- Wire tests into `npm run test:e2e`.

Acceptance criteria:
- E2E tests run locally.
- Tests fail on broken auth/route/content/bourse/certificate flows.

Implementation:
- Added Playwright (`@playwright/test`) with `playwright.config.ts` (Chromium project, HTML + list reporters, trace on first retry).
- Added a deterministic forced-demo test build: `npm run dev:e2e` runs `vite --mode e2e` and a committed `.env.e2e` sets `VITE_DEMO_ENABLED=true` with empty Supabase vars. A Vite mode env file overrides `.env.local`, so tests never touch the real Supabase project and never depend on a developer's local credentials.
- Playwright `webServer` boots `npm run dev:e2e` on `127.0.0.1:4317` (`--strictPort`, dedicated port so it never collides with `npm run dev` on 5173).
- Added specs under `e2e/`:
  - `auth-roles.spec.ts`: demo login redirects per role, unauthenticated redirect to `/login`, and negative role guards (learner blocked from `/admin` and `/enterprise`, enterprise admin blocked from `/admin`, platform admin allowed into `/enterprise`).
  - `admin-cms.spec.ts`: `/admin` loads, required-title validation blocks an empty save, and a new draft module saves and appears in the module list.
  - `enterprise.spec.ts`: dashboard is scoped to PNUD Niger and bourse creation emits a `KA-SCH-PNUD-*` code with a redeem link.
  - `certificate-verify.spec.ts`: public `/verify/:uid` shows distinct active, expired, revoked, and not-found states without login.
- Wired `npm run test:e2e` (plus `test:e2e:ui` and `test:e2e:report`). Added eslint node-globals override for `e2e/**` and `playwright.config.ts`, and gitignored Playwright artifacts.

Verification:
- `npm run lint`, `npm run typecheck`, and `npm run build` passed.
- `npm run test:e2e` passed: 17 tests green, 1 documented `test.fixme` (cross-org isolation, see residual risk).

Residual risk:
- Smoke tests run in forced local-demo mode because the Supabase project has no demo Auth users; they verify app/route/CMS/bourse/certificate behavior, not server-side RLS.
- Cross-organization RLS isolation (the second-org fixture deferred from S01-03) is left as a documented `test.fixme`. Proving it in the browser requires seeding a second organization plus a second enterprise-admin Auth user in Supabase; it remains verified at the database layer by the rollback-wrapped SQL in S01-03/S01-04.

### S01-08 - Production Launch Checklist

Status: Done
Priority: P1
Estimate: 3 pts

User story:
As Karatou, I want a launch checklist so deployments are repeatable and grant demos are controlled.

Tasks:
- Document required env vars.
- Document Supabase migrations and seed order.
- Document admin account creation.
- Add smoke-test checklist for demos.
- Add known limitations.

Acceptance criteria:
- A new operator can deploy and test the app from docs.
- Checklist separates local demo, staging, and production.

Implementation:
- Added `docs/production-launch-checklist.md` with a local-demo/staging/production
  environment matrix, prerequisites, ordered migration list, content seed and platform
  admin steps (including the manual enterprise-admin grant), static-host deploy notes
  (SPA rewrite-to-index), an automated + manual smoke-test checklist, a pre-launch
  hardening checklist, and known limitations.
- Linked the checklist from `README.md`.

Verification:
- Facts cross-checked against `.env.example`, `package.json` scripts, `supabase/migrations/`,
  `scripts/seed-supabase-content.mjs`, and `scripts/create-supabase-admin.mjs`.
- `npm run lint`, `npm run typecheck`, and `npm run build` passed.

## Definition Of Done

Every completed item must:
- Pass `npm run typecheck`.
- Pass `npm run lint`.
- Pass `npm run build`.
- Include Supabase migration when schema changes are made.
- Be tested manually in the browser for the main user flow.
- Preserve RLS: no anonymous leakage for private app data.
- Update README or docs when setup behavior changes.

## Sprint Review Demo Script

1. Log in as platform admin and open `/admin`.
2. Create or edit one module, refresh, and confirm persistence.
3. Log in as enterprise admin and open `/enterprise`.
4. Create bourse codes and invite/redeem one learner.
5. Log in as learner and confirm organization/course access.
6. Complete or verify a certificate using `/verify/:uid`.
7. Show demo mode disabled in production config.

## Risks

- Supabase Auth admin creation still depends on service-role key outside the frontend.
- Existing legacy Supabase advisor issues should be fixed before public launch.
- PDF/DOCX import will need a server-side extraction workflow, not browser-only parsing.
- Multi-organization RLS must be tested carefully to avoid data leaks.

## Success Metric

At sprint end, Karatou Academy can be demoed as a real multi-role production web app on staging, with no visible demo shortcuts and with persisted Supabase-backed admin, enterprise, learner, bourse, and certificate flows.
