import { test, expect, Page } from '@playwright/test';
import { demoLogin } from './helpers';

// Lesson d1 of the free data-analysis module: the demo learner has no progress there.
const LESSON = '/learn/data-analysis/d1';

/** Answers every question of the open quiz; returns the correct letters it saw. */
async function answerQuiz(page: Page, letters: string[] | null): Promise<string[]> {
  const seen: string[] = [];
  const total = await page.getByRole('radiogroup').locator('..').locator('button.rounded-full').count();
  for (let index = 0; index < total; index += 1) {
    const group = page.getByRole('radiogroup');
    const options = group.getByRole('radio');
    const wanted = letters?.[index];
    if (wanted) {
      await group.locator(`input[value="${wanted}"]`).check();
    } else {
      await options.first().check();
    }
    await page.getByRole('button', { name: 'Valider ma réponse' }).click();
    const feedback = page.getByText(/Bonne réponse !|Mauvaise réponse\. La bonne réponse est/);
    const text = (await feedback.textContent()) ?? '';
    const match = text.match(/est ([A-Z])\./);
    seen.push(match ? match[1] : wanted ?? (await options.first().getAttribute('value')) ?? 'A');
    if (index < total - 1) await page.getByRole('button', { name: /Question suivante/ }).click();
  }
  return seen;
}

test.describe('Lesson completion requires passing the quiz', () => {
  test('"Marquer terminée" sends to the quiz until 70 % is reached', async ({ page }) => {
    await demoLogin(page, 'learner');
    await page.goto(LESSON);

    const markDone = page.getByRole('button', { name: 'Marquer terminée' });
    await markDone.click();
    // Not completed: the learner is taken to the quiz with the rule explained.
    await expect(page.getByText('Réussissez le quiz (70 % de bonnes réponses) pour terminer cette leçon.')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Déjà terminée' })).toHaveCount(0);

    // First pass reveals the expected answers; the retake applies them.
    const correct = await answerQuiz(page, null);
    const retake = page.getByRole('button', { name: 'Recommencer le quiz' });
    if (await retake.isVisible()) {
      await retake.click();
      await answerQuiz(page, correct);
    }
    await expect(page.getByText(/Quiz réussi/)).toBeVisible();

    await page.getByRole('button', { name: 'Marquer terminée' }).click();
    await expect(page.getByRole('button', { name: 'Déjà terminée' })).toBeVisible();
  });
});

test.describe('Certificate lookup page', () => {
  test('/verify (address printed on PDFs) offers an ID field instead of a 404', async ({ page }) => {
    await page.goto('/verify');
    await expect(page.getByRole('heading', { name: 'Vérifier un certificat' })).toBeVisible();
    await page.getByLabel('Identifiant du certificat').fill('ka-2026-ai-pn001');
    await page.getByRole('button', { name: 'Vérifier', exact: true }).click();
    await expect(page).toHaveURL(/\/verify\/KA-2026-AI-PN001$/);
    await expect(page.getByRole('heading', { name: 'Certificat Vérifié' })).toBeVisible();
  });
});
