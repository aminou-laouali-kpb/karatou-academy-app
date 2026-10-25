import { describe, expect, it } from 'vitest';
import { hasAuthoredLesson, loadAuthoredLesson } from './localizedContent';
import { modules } from './mockData';
import type { Language } from './translations';

const LANGS: Language[] = ['fr', 'en', 'ha'];
const SLUG = 'ia-administration';
const IDS = ['ad1', 'ad2', 'ad3', 'ad4', 'ad5'];
const FINAL = 'ad5';

describe('module ia-administration (cours de lancement 13)', () => {
  it('le catalogue declare les memes lecons que le registre', () => {
    const module = modules.find((m) => m.slug === SLUG);
    expect(module, 'module absent de mockData').toBeDefined();
    expect(module?.courses.map((c) => c.id)).toEqual(IDS);
    expect(module?.lessons).toBe(IDS.length);
  });

  IDS.forEach((id, index) => {
    LANGS.forEach((lang) => {
      it(`${id}/${lang} est coherent`, async () => {
        expect(hasAuthoredLesson(SLUG, id), `${id} absent du registre`).toBe(true);
        const lesson = await loadAuthoredLesson(SLUG, id, lang);
        expect(lesson, `${id}/${lang} absent du registre`).not.toBeNull();
        if (!lesson) return;
        expect(lesson.id).toBe(id);
        expect(lesson.lessonNumber).toBe(index + 1);
        expect(lesson.objective.trim().length).toBeGreaterThan(0);
        expect(lesson.content.length).toBe(4);
        lesson.content.forEach((bloc) => {
          expect(bloc.body).not.toContain('**');
          expect(bloc.title).not.toMatch(/^\d+\.\s/);
          expect(bloc.body.split('\n\n').length).toBeGreaterThanOrEqual(2);
        });
        expect(lesson.practice.instructions.length).toBe(3);
        expect(lesson.practice.observation.trim().length).toBeGreaterThan(0);
        expect(lesson.reflection).toContain('?');
        const isFinal = id === FINAL;
        expect(lesson.glossary.length).toBeGreaterThanOrEqual(6);
        expect(lesson.glossary.length).toBeLessThanOrEqual(isFinal ? 7 : 6);
        // le quiz final est cumulatif : au moins une question par lecon precedente
        expect(lesson.quiz.length).toBeGreaterThanOrEqual(isFinal ? IDS.length - 1 : 5);
        lesson.quiz.forEach((q, qi) => {
          const keys = q.options.map((o) => o.key);
          expect(keys, `${id}/${lang} q${qi} options`).toEqual(['A', 'B', 'C', 'D']);
          expect(keys, `${id}/${lang} q${qi} reponse hors options`).toContain(q.answer);
          expect(q.explanation.trim().length).toBeGreaterThan(0);
        });
        // bonnes reponses variees : jamais toutes sur la meme lettre
        expect(new Set(lesson.quiz.map((q) => q.answer)).size).toBeGreaterThan(1);
        // aucun identifiant interne dans le texte visible
        const visible = JSON.stringify({ ...lesson, id: '' });
        expect(visible).not.toMatch(/\bad[1-5]\b/);
        // convention du depot : haoussa sans lettres crochetees
        if (lang === 'ha') expect(visible).not.toMatch(/[ƙɗɓƴƘƊƁƳ]/);
      });
    });
  });

  it('les quiz sont identiques dans les trois langues (memes bonnes reponses)', async () => {
    for (const id of IDS) {
      const answers = await Promise.all(
        LANGS.map(async (lang) => (await loadAuthoredLesson(SLUG, id, lang))?.quiz.map((q) => q.answer).join('')),
      );
      expect(new Set(answers).size, `${id} : reponses differentes selon la langue`).toBe(1);
    }
  });
});
