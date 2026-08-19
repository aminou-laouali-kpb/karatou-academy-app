import { readFile } from 'node:fs/promises';
import { expect, test } from '@playwright/test';

const fallbackHtml = await readFile(new URL('../public/404.html', import.meta.url), 'utf8');

test.describe('Static-host deep-link recovery', () => {
  test('restores a verification URL with query string and QR fragment after a 404', async ({ page }) => {
    let fallbackRequests = 0;

    await page.route('**/verify-attestation?source=qr', async (route) => {
      fallbackRequests += 1;
      await route.fulfill({
        status: 404,
        contentType: 'text/html',
        body: fallbackHtml,
      });
    });

    await page.goto('/verify-attestation?source=qr#signed-payload');

    await expect(page).toHaveURL(/\/\?source=qr&__karatou_attestation=1#signed-payload$/);
    await expect(page.getByRole('heading', { name: 'Vérifier une attestation' })).toBeVisible();
    expect(fallbackRequests).toBe(1);
  });
});