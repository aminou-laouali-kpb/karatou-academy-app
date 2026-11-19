import { describe, expect, it } from 'vitest';
import { hasAuthoredLesson, loadAuthoredLesson } from './localizedContent';
import { modules } from './mockData';
import type { Language } from './translations';

const LANGS: Language[] = ['fr', 'en', 'ha'];
const SLUG = 'outils-ia-gratuits';
const IDS = ['og1', 'og2', 'og3', 'og4', 'og5', 'og6', 'og7'];
const FINAL = 'og7';

describe('module outils-ia-gratuits (cours de lancement 15)', () => {
  it('le catalogue declare les memes lecons que le registre', () => {
    const module = modules.find((m) => m.slug === SLUG);
    expect(module, 'module absent de mockData').toBeDefined();
    expect(module?.courses.map((c) => c.id)).toEqual(IDS);
    expect(module?.lessons).toBe(IDS.length);
  });

  it('chaque lecon a sa video francaise, au format que le lecteur sait integrer', async () => {
    // le lecteur affiche la video dans une iframe : un lien youtu.be ou watch?v= y reste vide
    const EMBED = /^https:\/\/www\.youtube\.com\/embed\/[A-Za-z0-9_-]{11}$/;
    for (const id of IDS) {
      for (const lang of LANGS) {
        const lesson = await loadAuthoredLesson(SLUG, id, lang);
        expect(lesson?.video.fr, `${id}/${lang} video.fr`).toMatch(EMBED);
      }
    }
  });

  it('les cours 1, 5, 6, 7 et 8 ont une video de presentation integrable', () => {
    const EMBED = /^https:\/\/www\.youtube\.com\/embed\/[A-Za-z0-9_-]{11}$/;
    for (const id of ['1', '5', '6', '7', '8']) {
      const module = modules.find((m) => m.id === id);
      expect(module?.introVideo?.fr, `module ${id} introVideo.fr`).toMatch(EMBED);
    }
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
        expect(visible).not.toMatch(/\bog[1-7]\b/);
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
