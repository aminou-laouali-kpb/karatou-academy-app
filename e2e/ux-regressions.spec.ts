import { test, expect } from '@playwright/test';
import { demoLogin } from './helpers';

test.describe('public navigation and localization', () => {
  test('course links stay public and footer links lead to real destinations', async ({ page }) => {
    await page.goto('/');
    await page.locator('a[href="#modules"]').first().click();
    await expect(page).toHaveURL(/#modules$/);
    await expect(page.locator('#modules')).toBeVisible();

    await page.getByRole('button', { name: 'EN', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Artificial Intelligence' })).toBeVisible();
    await expect(page.locator('a[href="#modules"]')).toHaveCount(2);
    await expect(page.locator('a[href="#pricing"]')).toHaveCount(2);
    await expect(page.locator('a[href="mailto:commercial@karatou.academy"]')).toHaveCount(2);
    await expect(page.getByRole('link', { name: 'About', exact: true })).toHaveCount(0);
  });

  test('registration explains required country and optional gender in all languages', async ({ page }) => {
    await page.goto('/register');
    const messages = [
      { code: 'FR', copy: 'Le pays est obligatoire. Le genre est facultatif.' },
      { code: 'EN', copy: 'Country is required. Gender is optional.' },
      { code: 'HA', copy: 'Ƙasa wajibi ce. Jinsi na zaɓi ne.' },
    ];
    for (const { code, copy } of messages) {
      await page.getByRole('button', { name: code, exact: true }).click();
      await expect(page.getByText(new RegExp(copy))).toBeVisible();
      await expect(page.locator('fieldset label').nth(0)).toContainText(/\(.*\)/);
      await expect(page.locator('fieldset label').nth(1)).toContainText(/\(.*\)/);
      await expect(page.getByRole('combobox').nth(0)).toHaveJSProperty('required', true);
      await expect(page.getByRole('combobox').nth(1)).toHaveJSProperty('required', false);
    }
    await expect(page.getByRole('button', { name: 'Create my account' })).toBeVisible();
  });
});

test.describe('learner notes and account menu', () => {
  test('notes survive lesson changes, language changes, and reloads', async ({ page }) => {
    await demoLogin(page, 'learner');
    await page.goto('/learn/data-analysis/d1');
    await page.getByRole('button', { name: 'Pratique', exact: true }).click();
    const note = page.getByRole('textbox', { name: 'Pratique' });
    await note.fill('Dernière phrase conservée');
    await expect(page.getByText('Enregistré dans ce navigateur.')).toBeVisible();

    await page.goto('/learn/data-analysis/d2');
    await expect(page.getByRole('button', { name: 'Pratique', exact: true })).toBeVisible();
    await page.goto('/learn/data-analysis/d1');
    await page.getByRole('button', { name: 'Pratique', exact: true }).click();
    await expect(page.getByRole('textbox', { name: 'Pratique' })).toHaveValue('Dernière phrase conservée');
    await page.reload();
    await page.getByRole('button', { name: 'Pratique', exact: true }).click();
    await expect(page.getByRole('textbox', { name: 'Pratique' })).toHaveValue('Dernière phrase conservée');

    await page.getByRole('button', { name: 'EN', exact: true }).click();
    await page.getByRole('button', { name: 'Practice', exact: true }).click();
    await expect(page.getByRole('textbox', { name: 'Practice' })).toHaveValue('Dernière phrase conservée');
  });

  test('the learner account menu works at 375px and logout protects routes', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await demoLogin(page, 'learner');
    const trigger = page.locator('button[aria-haspopup="menu"]');
    await trigger.click();
    const menu = page.getByRole('menu');
    await expect(menu.getByRole('link', { name: 'Certificats' })).toBeVisible();
    const box = await menu.boundingBox();
    expect(box).not.toBeNull();
    expect(box!.x).toBeGreaterThanOrEqual(0);
    expect(box!.x + box!.width).toBeLessThanOrEqual(375);

    await page.keyboard.press('Escape');
    await expect(trigger).toBeFocused();
    await trigger.click();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(/\/login$/);
    await page.goto('/dashboard');
    await expect(page).toHaveURL(/\/login/);
  });
});

test('newsletter panel is non-modal, does not steal focus, and closes on Escape', async ({ page }) => {
  await page.addInitScript(() => localStorage.removeItem('karatou_newsletter_popup_v1'));
  await page.goto('/');
  const anchor = page.locator('a[href="#modules"]').first();
  await anchor.focus();
  const panel = page.locator('[role="region"][aria-label="Rejoindre la newsletter Karatou"]');
  await expect(panel).toBeVisible({ timeout: 8_000 });
  await expect(page.locator('[aria-modal="true"]')).toHaveCount(0);
  await expect(anchor).toBeFocused();

  await page.getByPlaceholder('votre@email.com').focus();
  await page.keyboard.press('Escape');
  await expect(panel).toHaveCount(0);
  await expect(anchor).toBeFocused();
});
