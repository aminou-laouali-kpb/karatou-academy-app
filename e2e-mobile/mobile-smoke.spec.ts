import { expect, test } from '@playwright/test';
import { demoLogin } from '../e2e/helpers';

// The audience is mostly on low-end Android phones: the main journeys must hold
// at phone width, with touch, without horizontal scrolling.
async function expectNoHorizontalScroll(page: import('@playwright/test').Page) {
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
}

test('landing, login and certificate lookup fit a phone screen', async ({ page }) => {
  await page.goto('/');
  await expectNoHorizontalScroll(page);
  await page.goto('/login');
  await expectNoHorizontalScroll(page);
  await page.goto('/verify');
  await expect(page.getByLabel('Identifiant du certificat')).toBeVisible();
  await expectNoHorizontalScroll(page);
});

test('lesson drawer: closed it is out of the tab order, open it is usable', async ({ page }) => {
  await demoLogin(page, 'learner');
  await page.goto('/learn/data-analysis/d1');
  await expectNoHorizontalScroll(page);

  // Closed drawer: inert, so its lesson buttons cannot take focus.
  const drawer = page.locator('aside').first();
  expect(await drawer.evaluate((element) => (element as HTMLElement).inert)).toBe(true);

  await page.getByRole('button', { name: 'Liste des leçons', exact: true }).click();
  expect(await drawer.evaluate((element) => (element as HTMLElement).inert)).toBe(false);
});

test('certificates page works at phone width', async ({ page }) => {
  await demoLogin(page, 'learner');
  await page.goto('/certificates');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await expectNoHorizontalScroll(page);
});
