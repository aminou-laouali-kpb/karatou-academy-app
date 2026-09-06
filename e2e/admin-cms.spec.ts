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
    await expect(page.getByRole('heading', { name: 'Équipe & accès' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Créer un admin entreprise' })).toBeVisible();
  });

  test('bulk attestations tool loads', async ({ page }) => {
    await demoLogin(page, 'platform');
    await page.goto('/admin/attestations');
    await expect(page.getByRole('heading', { name: 'Attestations en masse' })).toBeVisible();
    await expect(page.getByText('Charger le modele PDF')).toBeVisible();
  });

  test('attestation registry page loads and is gated in demo mode', async ({ page }) => {
    await demoLogin(page, 'platform');
    await page.goto('/admin/attestations/registry');
    await expect(page.getByRole('heading', { name: 'Registre des attestations' })).toBeVisible();
    // No Supabase session in demo mode: searching the real registry is refused,
    // with the same notice as the other server-backed admin tools.
    await expect(page.getByRole('button', { name: /Rechercher/ })).toBeDisabled();
    await expect(page.getByRole('status')).toContainText('platform admin Supabase');
  });

  test('the registry is reachable from the admin navigation', async ({ page }) => {
    await demoLogin(page, 'platform');
    await page.getByRole('link', { name: 'Registre' }).click();
    await expect(page).toHaveURL(/\/admin\/attestations\/registry$/);
  });

  test('lesson studio loads with the selected lesson and is gated in demo mode', async ({ page }) => {
    await demoLogin(page, 'platform');
    await page.goto('/admin/lecons');
    await expect(page.getByRole('heading', { name: 'Studio des leçons' })).toBeVisible();

    // The editor opens on the first lesson of the first course, pre-filled from
    // the authored registry rather than a blank form.
    await expect(page.getByLabel('Titre', { exact: true })).not.toHaveValue('');
    await expect(page.getByRole('heading', { name: 'Sections du cours' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Vidéos de la leçon' })).toBeVisible();

    // No Supabase session in demo mode: generating and saving are refused.
    await expect(page.getByRole('button', { name: /Générer un brouillon/ })).toBeDisabled();
    await expect(page.getByRole('status').first()).toContainText('platform admin Supabase');
  });

  test('the lesson studio is reachable from the admin navigation', async ({ page }) => {
    await demoLogin(page, 'platform');
    await page.getByRole('link', { name: 'Leçons' }).click();
    await expect(page).toHaveURL(/\/admin\/lecons$/);
  });

  test('editing a lesson field marks the draft as unsaved', async ({ page }) => {
    await demoLogin(page, 'platform');
    await page.goto('/admin/lecons');
    await expect(page.getByText('À jour')).toBeVisible();

    await page.getByLabel('Objectif de la leçon').fill('Objectif de test E2E.');
    await expect(page.getByText('Modifications non enregistrées')).toBeVisible();

    // "Revert" drops the local edit and restores the loaded body.
    await page.getByRole('button', { name: /Annuler mes modifications/ }).click();
    await expect(page.getByText('À jour')).toBeVisible();
    await expect(page.getByLabel('Objectif de la leçon')).not.toHaveValue('Objectif de test E2E.');
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
