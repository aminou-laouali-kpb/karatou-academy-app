import { describe, expect, it } from 'vitest';
import { hasAuthoredLesson, loadAuthoredLesson } from './localizedContent';
import { modules } from './mockData';
import type { Language } from './translations';

const LANGS: Language[] = ['fr', 'en', 'ha'];
const IDS = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8'];
const SLUG = 'intelligence-artificielle';

describe('module intelligence-artificielle', () => {
  IDS.forEach((id, index) => {
    LANGS.forEach((lang) => {
      it(`${id}/${lang} est coherent`, async () => {
        expect(hasAuthoredLesson(SLUG, id), `${id} absent du registre`).toBe(true);
        const lesson = await loadAuthoredLesson(SLUG, id, lang);
        expect(lesson, `${id}/${lang} absent du registre`).not.toBeNull();
        if (!lesson) return;
        expect(lesson.id).toBe(id);
        expect(lesson.lessonNumber).toBe(index + 1);
        expect(lesson.title.trim().length).toBeGreaterThan(0);
        expect(lesson.objective.trim().length).toBeGreaterThan(0);
        expect(lesson.content.length).toBe(4);
        lesson.content.forEach((bloc) => {
          expect(bloc.title.trim().length).toBeGreaterThan(0);
          expect(bloc.body.trim().length).toBeGreaterThan(0);
          // le lecteur rend du texte brut : aucun markdown ne doit passer
          expect(bloc.body).not.toContain('**');
          // le lecteur numerote deja les blocs : pas de "1." dans le titre
          expect(bloc.title).not.toMatch(/^\d+\.\s/);
        });
        expect(lesson.practice.instructions.length).toBe(3);
        expect(lesson.practice.observation.trim().length).toBeGreaterThan(0);
        expect(lesson.glossary.length).toBeGreaterThanOrEqual(5);
        lesson.glossary.forEach((item) => {
          expect(item.term.trim().length).toBeGreaterThan(0);
          expect(item.definition.trim().length).toBeGreaterThan(0);
        });
        // la reflexion est une question ouverte, pas une declaration
        expect(lesson.reflection).toContain('?');
        lesson.quiz.forEach((q, qi) => {
          const keys = q.options.map((o) => o.key);
          expect(keys, `${id}/${lang} q${qi} options`).toEqual(['A', 'B', 'C', 'D']);
          expect(keys, `${id}/${lang} q${qi} reponse hors options`).toContain(q.answer);
          expect(q.question.trim().length).toBeGreaterThan(0);
          expect(q.explanation.trim().length).toBeGreaterThan(0);
          q.options.forEach((o) => expect(o.text.trim().length).toBeGreaterThan(0));
        });
      });
    });
  });

  it('les bonnes reponses ne se concentrent pas sur une seule position', async () => {
    for (const id of IDS) {
      for (const lang of LANGS) {
        const lesson = await loadAuthoredLesson(SLUG, id, lang);
        const answers = lesson?.quiz.map((q) => q.answer) ?? [];
        const counts = new Map<string, number>();
        answers.forEach((a) => counts.set(a, (counts.get(a) ?? 0) + 1));
        // un apprenant ne doit pas pouvoir reussir en cochant toujours la meme lettre
        expect(counts.size, `${id}/${lang} une seule position correcte`).toBeGreaterThan(1);
        const dominant = Math.max(...counts.values());
        expect(
          dominant / answers.length,
          `${id}/${lang} position correcte trop dominante (${answers.join('')})`
        ).toBeLessThanOrEqual(0.6);
      }
    }
  });

  it('les trois langues ont la meme structure', async () => {
    for (const id of IDS) {
      const [fr, en, ha] = await Promise.all(
        LANGS.map((lang) => loadAuthoredLesson(SLUG, id, lang))
      );
      for (const other of [en, ha]) {
        expect(other?.content.length, `${id} sections`).toBe(fr?.content.length);
        expect(other?.quiz.length, `${id} quiz`).toBe(fr?.quiz.length);
        expect(other?.glossary.length, `${id} glossaire`).toBe(fr?.glossary.length);
        expect(other?.practice.instructions.length, `${id} pratique`).toBe(
          fr?.practice.instructions.length
        );
        // meme corrige dans les trois langues
        expect(other?.quiz.map((q) => q.answer), `${id} reponses`).toEqual(
          fr?.quiz.map((q) => q.answer)
        );
      }
    }
  });

  it("les lecons c2 a c7 ont 5 questions, l'evaluation finale en couvre chaque lecon", async () => {
    for (const lang of LANGS) {
      for (const id of ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7']) {
        const lesson = await loadAuthoredLesson(SLUG, id, lang);
        expect(lesson?.quiz.length, `${id}/${lang}`).toBe(5);
      }
      const finale = await loadAuthoredLesson(SLUG, 'c8', lang);
      expect(finale?.quiz.length, `c8/${lang}`).toBeGreaterThanOrEqual(8);
    }
  });

  it('la duree annoncee du module est la somme des lecons', () => {
    modules.forEach((module) => {
      const minutes = module.courses.reduce((total, course) => {
        const match = course.duration.match(/(\d+)\s*min/);
        return total + (match ? Number(match[1]) : 0);
      }, 0);
      const announced = module.duration.match(/(?:(\d+)h)?\s*(\d+)?\s*min/);
      const hours = Number(announced?.[1] ?? 0);
      const rest = Number(announced?.[2] ?? 0);
      expect(hours * 60 + rest, `${module.slug} duree annoncee`).toBe(minutes);
      expect(module.courses.length, `${module.slug} nombre de lecons`).toBe(module.lessons);
    });
  });
});
