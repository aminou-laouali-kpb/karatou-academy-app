import { test, expect } from '@playwright/test';
import { demoLogin } from './helpers';

test.describe('Platform admin CMS', () => {
  test('admin content page loads', async ({ page }) => {
    await demoLogin(page, 'platform');
    await expect(page.getByRole('heading', { name: 'Admin contenus' })).toBeVisible();
  });

  test('blocks saving a module with an empty title', async ({ page }) => {
    await demoLogin(page, 'platform');
    await page.getByRole('button', { name: 'Nouveau', exact: true }).click();
    await page.getByLabel('Titre FR', { exact: true }).fill('');
    await page.getByRole('button', { name: 'Sauvegarder', exact: true }).click();
    await expect(page.getByRole('alert')).toContainText('Le titre FR est obligatoire.');
  });

  test('team page loads with the create-enterprise-admin form', async ({ page }) => {
    await demoLogin(page, 'platform');
    await page.goto('/admin/team');
    await expect(page.getByRole('heading', { name: 'Equipe & acces' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Creer un admin entreprise' })).toBeVisible();
  });

  test('saves a new draft module and shows it in the module list', async ({ page }) => {
    await demoLogin(page, 'platform');

    const title = `E2E Smoke Module ${Date.now()}`;
    await page.getByRole('button', { name: 'Nouveau', exact: true }).click();
    await page.getByLabel('Titre FR', { exact: true }).fill(title);
    await page.getByRole('button', { name: 'Sauvegarder', exact: true }).click();

    await expect(page.getByRole('status')).toContainText(title);
    await expect(page.getByRole('button', { name: new RegExp(title) })).toBeVisible();
  });
});
