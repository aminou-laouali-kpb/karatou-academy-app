import { test, expect } from '@playwright/test';

// Seed fixtures from src/data/mockData.ts, one per certificate status.
const CASES = [
  { uid: 'KA-2026-AI-PN001', holder: 'Fatima Moussa', heading: 'Certificat Verifie' },
  { uid: 'KA-2024-AI-00017', holder: 'Jean Dupont', heading: 'Certificat Expire' },
  { uid: 'KA-2026-AI-REVOKED', holder: 'Ali Zaki', heading: 'Certificat Revoque' },
] as const;

test.describe('Public certificate verification', () => {
  for (const c of CASES) {
    test(`verifies ${c.uid} as "${c.heading}" without login`, async ({ page }) => {
      await page.goto(`/verify/${c.uid}`);
      await expect(page.getByRole('heading', { name: c.heading })).toBeVisible();
      await expect(page.getByText(c.holder)).toBeVisible();
      await expect(page.getByText(c.uid).first()).toBeVisible();
    });
  }

  test('shows a not-found state for an unknown UID', async ({ page }) => {
    await page.goto('/verify/UNKNOWN-CERT-XYZ');
    await expect(page.getByRole('heading', { name: 'Certificat introuvable' })).toBeVisible();
  });
});
