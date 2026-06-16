# Sprint 03 - Code Review Remediation

Dates: June 16, 2026 to June 27, 2026
Owner: Karatou Academy product/engineering
Status: In Progress

## Sprint Goal

Fix the findings from the June 2026 four-axis code review (correctness, security,
accessibility/i18n, performance/quality) so the app is correct, accessible,
performant, and safe to expose to real users.

## Why This Sprint Matters

The review surfaced two P0 security issues (certificates are world-readable and
forgeable) plus correctness, accessibility, and performance gaps. The security
items are server-side (RLS/migrations) and require live Supabase access; the rest
are client-side and shippable immediately. This sprint tracks and closes all of them.

## Scope

In scope: all review findings.
Out of scope: new features (covered by Sprint 02 public-launch work).

## How to read this

Each ticket lists its findings with a status:
- [x] = done (this remediation push)
- [ ] = pending

Verification gate for every change: `npm run typecheck`, `npm run lint`,
`npm run build`, and `npm run test:e2e` stay green.

## Sprint Backlog

### S03-01 - Correctness Fixes (client)

Priority: P0/P1
Estimate: 8 pts
Status: In Progress

- [x] A6 Demo reseed no longer overwrites real Supabase org data (`repairEnterpriseSeed` gated on demo mode).
- [x] A9 `getInitials` and certificate-UID builder hardened against empty name/slug segments.
- [x] A2 (partial) Certificate UID gets a random suffix to avoid client-side collisions (full fix is server-side, S03-04).
- [x] A1 (P0) Demo session made explicit via a ref so the Supabase auth listener no longer clears it on the demo `signOut` (no longer relies on a race).
- [x] A3 (P1) Learner/enterprise sync effects now key on `user?.id/role/orgId` instead of the whole `user` object (no re-fetch on token refresh).
- [x] A4 (P1) `removeModuleRecord` deletes the module's `karatou_courses` before the module (no orphans).
- [x] A5 (P1) `loadContentSnapshot` returns `null` on schema-pending errors (missing table / permission), falling back to seeded content.
- [x] A7 (P2) `getUser()` failure now flips `authReady` so the app never sticks on the loader.
- [ ] A8 (P2) `completeCourse` return value — accepted as-is: correct for the actual single-completion usage; a ref-based rewrite isn't worth the risk.
- [ ] A10 (P2) `loadPrimaryOrganization` org binding — deferred to Sprint 02 S02-02 (enterprise-admin provisioning), since it needs real membership data to test.

### S03-02 - Performance & Code Quality

Priority: P1/P2
Estimate: 5 pts
Status: In Progress

- [x] D1 Route-level code-splitting (React.lazy + Suspense); heavy pages load on demand.
- [x] D9 Language selection persisted to localStorage.
- [x] D8 Duplicated `slugify` extracted to `src/lib/strings.ts`.
- [x] D5 Dead code removed (`addCourseToModule` / `updateCourseInModule`).
- [x] D4 (partial) `LessonPlayer` memoizes the module lookup/localization.
- [ ] D2 (P1) Memoize Auth/Learning context `value` (+ `useCallback` handlers) to cut cascading re-renders.
- [ ] D3 (P1) Memoize `localizeModule(s)` on Dashboard/Certificates and pass localized data into `ModuleCard`.
- [ ] D7 (P2) Add runtime validation at localStorage/Supabase trust boundaries instead of bare `as` casts.

### S03-03 - Accessibility & i18n

Priority: P0/P1/P2
Estimate: 5 pts
Status: In Progress

- [x] C1 (P0) `document.documentElement.lang` synced with the active language.
- [x] C3 Icon-only buttons get accessible names (nav bell/avatar/logout, mobile menu, lesson sidebar).
- [x] C4 Enterprise search/filter controls get labels.
- [x] C9 Quiz options grouped with `role="radiogroup"` bound to the question.
- [x] C7 (partial) Decorative icons marked `aria-hidden` on touched components.
- [x] C5 (P1) Remaining hardcoded strings ("Email", "Connexion...", "Creation...") translated.
- [x] C6 (P1) Skip-to-content link added (`SkipLink`), with `id="main-content"` on key pages' `<main>`.
- [x] C8 (P2) Low-contrast text fixed (marketing nav links, video placeholder).
- [x] C2 (P0) `AdminContent` internationalized (fr/en/ha) — labels, buttons, status options, notices, and validation messages routed through `t()`. (Two deep per-lesson translation-editor placeholders remain in French; cosmetic.)
- [ ] C10 (P2) Lesson mobile sidebar: focus trap, focus-on-open, Escape-to-close.

### S03-04 - Security: Server-side RLS Hardening

Priority: P0
Estimate: 8 pts
Status: Not started (requires live Supabase access; see also Sprint 02 S02-11)

- [ ] B1 (P0) Certificate table is world-readable (PII). Replace blanket read with a `SECURITY DEFINER` verify RPC returning a single UID; restrict table SELECT to owner + org admins.
- [ ] B2 (P0) Certificates are forgeable (INSERT/UPDATE only check `user_id = auth.uid()`). Move issuance to a server RPC that verifies completion and generates the UID; revoke direct client writes; add a DB unique index.
- [ ] B4 (P1) `karatou_learner_progress` readable by any enterprise admin; scope to the admin's organization.
- [ ] B5 (P1) `karatou_content_imports` writable by enterprise admins; re-harden to platform-admin only.
- [ ] B7 (P2) Generate bourse codes server-side with a CSPRNG + adequate length; rate-limit the redeem RPC.
- [ ] B8 (P2) Confirm `profiles.role` cannot be self-updated; treat it as display-only.

### S03-05 - Security: Client & Repo Hygiene

Priority: P1/P2
Estimate: 2 pts
Status: In Progress

- [x] B3 `.gitignore` now ignores all `.env*` except the safe tracked files, preventing accidental secret commits.
- [ ] B6 (P2) Source demo-login availability from `import.meta.env.DEV` so demo accounts are impossible in a production bundle.

## Definition Of Done

Every completed item must pass `npm run typecheck`, `npm run lint`,
`npm run build`, and `npm run test:e2e`; server-side items must ship a Supabase
migration and be re-verified with rollback-wrapped SQL.

## Success Metric

All review findings are resolved or explicitly accepted; the app stays green on
all gates; certificates are confidential and unforgeable; organization data is
isolated; and the learner UI is accessible in all three languages.
