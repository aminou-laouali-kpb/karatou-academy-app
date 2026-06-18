import { test, expect } from '@playwright/test';

// Runs against the demo-OFF build (.env.e2e-prod). Proves the production access
// gating: no demo affordances, dashboards gated, server-only verification, and no
// localStorage-based auth bypass.
test.describe('Production mode (demo off)', () => {
  test('login page shows no demo affordances', async ({ page }) => {
    await page.goto('/login');
    await expect(page.getByText('Mode Demonstration')).toHaveCount(0);
    await expect(page.getByText('Demonstration')).toHaveCount(0);
    await expect(page.getByRole('button', { name: /student@karatou\.test/ })).toHaveCount(0);
  });

  test('logged-out users are redirected from every dashboard', async ({ page }) => {
    for (const path of ['/dashboard', '/admin', '/admin/team', '/admin/attestations', '/enterprise', '/enterprise/members']) {
      await page.goto(path);
      await expect(page).toHaveURL(/\/login/);
    }
  });

  test('public /verify does NOT validate a demo certificate UID', async ({ page }) => {
    await page.goto('/verify/KA-2026-AI-PN001');
    // In production the demo seed is gone and /verify is server-only -> not found,
    // never a green "Certificat Verifie".
    await expect(page.getByRole('heading', { name: 'Certificat introuvable' })).toBeVisible();
    await expect(page.getByText('Certificat Verifie')).toHaveCount(0);
  });

  test('crafted localStorage user cannot grant admin access', async ({ page }) => {
    await page.addInitScript(() => {
      window.localStorage.setItem(
        'karatou.auth.v1',
        JSON.stringify({ id: 'x', name: 'Attacker', email: 'a@a.a', role: 'platform_admin' })
      );
    });
    await page.goto('/admin');
    await expect(page).toHaveURL(/\/login/);
  });
});
