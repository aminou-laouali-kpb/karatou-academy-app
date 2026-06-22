import { test, expect } from '@playwright/test';

test.describe('Legal pages', () => {
  test('privacy policy is reachable without login', async ({ page }) => {
    await page.goto('/privacy');
    await expect(page.getByRole('heading', { name: 'Politique de confidentialité' })).toBeVisible();
  });

  test('terms of service is reachable without login', async ({ page }) => {
    await page.goto('/terms');
    await expect(page.getByRole('heading', { name: "Conditions d'utilisation" })).toBeVisible();
  });
});
