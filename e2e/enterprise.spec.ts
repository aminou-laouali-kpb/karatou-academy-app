import { test, expect } from '@playwright/test';
import { demoLogin } from './helpers';

test.describe('Enterprise portal', () => {
  test('dashboard is scoped to the admin organization', async ({ page }) => {
    await demoLogin(page, 'enterprise');
    // The enterprise admin is scoped to PNUD Niger; no other org should appear.
    await expect(page.getByText('PNUD Niger').first()).toBeVisible();
  });

  test('creates a bourse (scholarship) code', async ({ page }) => {
    await demoLogin(page, 'enterprise');
    await page.getByRole('button', { name: 'Créer des bourses' }).click();

    await expect(page.getByText('Bourse créée')).toBeVisible();
    // The new code is shown both as a label and inside the redeem URL.
    await expect(page.getByText(/KA-SCH-[A-Z0-9]{1,6}-[A-Z2-9]{10}/).first()).toBeVisible();
  });
});

// Cross-organization RLS isolation (the second-org fixture deferred from
// S01-03) cannot be proven in local-demo mode: demo seeds a single org and RLS
// is a Supabase-server concern, not a client one. It is verified at the
// database layer by the rollback-wrapped SQL recorded in the S01-03 / S01-04
// sprint notes. A browser-level cross-org test requires seeding a second
// organization plus a second enterprise-admin Auth user in the Supabase
// project, which is tracked as a production-data residual risk.
// Cross-organization isolation (S02-05) is proven at the database layer, where
// it is actually enforced: `scripts/verify-cross-org-rls.sql` seeds two throwaway
// organizations, switches to the `authenticated` / `anon` roles and asserts that
// neither admin can see the other's organization, members, bourses, progress or
// certificates. It runs against a real Postgres (`npm run test:rls`); this suite
// runs hermetically in local-demo mode with no Supabase, so RLS cannot be
// exercised from here.
test.fixme('enterprise admin cannot see another organization (covered by npm run test:rls)', () => {});
