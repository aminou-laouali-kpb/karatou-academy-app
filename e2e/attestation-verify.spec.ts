import { test, expect } from '@playwright/test';

test.describe('Attestation verifier', () => {
  test('loads and rejects a tampered payload', async ({ page }) => {
    await page.goto('/verify-attestation');
    await expect(page.getByRole('heading', { name: 'Vérifier une attestation' })).toBeVisible();

    await page
      .getByPlaceholder('Contenu du QR code...')
      .fill('{"id":"KA-ATT-X","name":"Test","issuedAt":"2026-01-01","expiresAt":"2027-01-01","signature":"deadbeef"}');
    await page.getByRole('button', { name: 'Vérifier' }).click();

    await expect(page.getByRole('heading', { name: 'Attestation invalide ou falsifiée' })).toBeVisible();
  });
});
