import { test, expect } from '@playwright/test';
import { demoLogin } from '../e2e/helpers';

test('a visited lesson and its local notes survive an offline reload', async ({ page, context }) => {
  const browserErrors: string[] = [];
  page.on('pageerror', (error) => browserErrors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error') browserErrors.push(message.text());
  });
  await page.goto('/');
  await page.evaluate(() => navigator.serviceWorker.ready);
  await page.waitForFunction(() => Boolean(navigator.serviceWorker.controller));
  await demoLogin(page, 'learner');
  await page.goto('/learn/data-analysis/d1');
  await page.getByRole('button', { name: /Pratique$/ }).click();
  await page.getByRole('textbox', { name: 'Pratique' }).fill('Note disponible hors connexion');
  await expect(page.getByText('Enregistré dans ce navigateur.')).toBeVisible();
  await page.getByRole('button', { name: /Réflexion$/ }).click();
  await page.getByRole('textbox', { name: 'Réflexion' }).fill('Réflexion conservée hors connexion');
  await page.waitForFunction(async () => {
    const requests = await (await caches.open('karatou-assets')).keys();
    return requests.some((request) => request.url.includes('da-d1-nettoyage'));
  });

  await context.setOffline(true);
  await page.reload({ waitUntil: 'domcontentloaded' });
  await page.getByRole('button', { name: /Pratique$/ }).click();
  await expect(page.getByRole('textbox', { name: 'Pratique' })).toHaveValue('Note disponible hors connexion');
  await page.getByRole('button', { name: /Réflexion$/ }).click();
  await expect(page.getByRole('textbox', { name: 'Réflexion' })).toHaveValue('Réflexion conservée hors connexion');
  await context.setOffline(false);
  expect(browserErrors).toEqual([]);
});
