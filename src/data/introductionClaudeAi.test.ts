import { describe, expect, it } from 'vitest';
import { hasAuthoredLesson, loadAuthoredLesson } from './localizedContent';
import type { Language } from './translations';

const LANGS: Language[] = ['fr', 'en', 'ha'];
const IDS = ['cl1', 'cl2', 'cl3', 'cl4', 'cl5', 'cl6'];

describe('module introduction-claude-ai', () => {
  IDS.forEach((id, index) => {
    LANGS.forEach((lang) => {
      it(`${id}/${lang} est coherent`, async () => {
        expect(hasAuthoredLesson('introduction-claude-ai', id), `${id} absent du registre`).toBe(true);
        const lesson = await loadAuthoredLesson('introduction-claude-ai', id, lang);
        expect(lesson, `${id}/${lang} absent du registre`).not.toBeNull();
        if (!lesson) return;
        expect(lesson.id).toBe(id);
        expect(lesson.lessonNumber).toBe(index + 1);
        expect(lesson.title.trim().length).toBeGreaterThan(0);
        expect(lesson.objective.trim().length).toBeGreaterThan(0);
        expect(lesson.content.length).toBeGreaterThan(0);
        lesson.content.forEach((bloc) => {
          expect(bloc.title.trim().length).toBeGreaterThan(0);
          expect(bloc.body.trim().length).toBeGreaterThan(0);
          // le lecteur rend du texte brut : aucun markdown ne doit passer
          expect(bloc.body).not.toContain('**');
        });
        expect(lesson.practice.instructions.length).toBeGreaterThan(0);
        expect(lesson.glossary.length).toBeGreaterThan(0);
        expect(lesson.quiz.length).toBeGreaterThan(0);
        lesson.quiz.forEach((q, qi) => {
          const keys = q.options.map((o) => o.key);
          expect(new Set(keys).size, `${id}/${lang} q${qi} cles dupliquees`).toBe(keys.length);
          expect(keys, `${id}/${lang} q${qi} reponse hors options`).toContain(q.answer);
          expect(q.explanation.trim().length).toBeGreaterThan(0);
          q.options.forEach((o) => expect(o.text.trim().length).toBeGreaterThan(0));
        });
      });
    });
  });

  it("l'evaluation finale couvre les cinq chapitres", async () => {
    for (const lang of LANGS) {
      const lesson = await loadAuthoredLesson('introduction-claude-ai', 'cl6', lang);
      expect(lesson?.quiz.length, `cl6/${lang}`).toBe(10);
    }
  });
});
