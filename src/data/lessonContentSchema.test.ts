import { describe, expect, it } from 'vitest';
import {
  emptyLessonContent,
  lessonCompleteness,
  parseLessonBundle,
  parseLessonContent,
} from './lessonContentSchema';

const validBody = {
  id: 'c1',
  lessonNumber: 1,
  title: 'Introduction à l’IA',
  objective: 'Comprendre ce qu’est l’IA.',
  video: { fr: 'https://www.youtube.com/embed/abc', en: '', ha: '' },
  content: [{ title: 'Section 1', body: 'Corps de la section.' }],
  example: { title: 'Cas', challenge: 'Défi', solution: 'Solution', impact: 'Impact' },
  practice: { title: 'Exercice', instructions: ['Étape 1', 'Étape 2'], observation: 'À noter.' },
  quiz: [
    {
      question: 'Qu’est-ce que l’IA ?',
      options: [
        { key: 'a', text: 'Un robot' },
        { key: 'b', text: 'Un système qui apprend' },
      ],
      answer: 'b',
      explanation: 'Elle apprend de données.',
    },
  ],
  reflection: 'Où pourriez-vous l’utiliser ?',
  glossary: [{ term: 'IA', definition: 'Intelligence artificielle.' }],
};

describe('parseLessonContent', () => {
  it('accepts a well-formed body unchanged', () => {
    const parsed = parseLessonContent(validBody);
    expect(parsed).not.toBeNull();
    expect(parsed?.title).toBe('Introduction à l’IA');
    expect(parsed?.content).toHaveLength(1);
    expect(parsed?.quiz[0].options).toHaveLength(2);
    expect(parsed?.video.fr).toBe('https://www.youtube.com/embed/abc');
  });

  it('rejects non-objects and bodies with no usable core', () => {
    expect(parseLessonContent(null)).toBeNull();
    expect(parseLessonContent('lesson')).toBeNull();
    expect(parseLessonContent([])).toBeNull();
    expect(parseLessonContent({ title: 'Titre seul' })).toBeNull();
    expect(parseLessonContent({ objective: 'Sans titre' })).toBeNull();
  });

  it('accepts a body with a title and sections but no objective', () => {
    const parsed = parseLessonContent({
      title: 'Titre',
      content: [{ title: 'S1', body: 'B1' }],
    });
    expect(parsed?.objective).toBe('');
    expect(parsed?.content).toHaveLength(1);
  });

  it('fills missing optional blocks instead of throwing', () => {
    const parsed = parseLessonContent({ title: 'Titre', objective: 'But' });
    expect(parsed).not.toBeNull();
    expect(parsed?.content).toEqual([]);
    expect(parsed?.quiz).toEqual([]);
    expect(parsed?.glossary).toEqual([]);
    expect(parsed?.video).toEqual({ fr: '', en: '', ha: '' });
    expect(parsed?.practice.instructions).toEqual([]);
  });

  it('drops quiz questions whose answer matches no option', () => {
    const parsed = parseLessonContent({
      ...validBody,
      quiz: [
        ...validBody.quiz,
        {
          question: 'Question cassée',
          options: [
            { key: 'a', text: 'Un' },
            { key: 'b', text: 'Deux' },
          ],
          answer: 'z',
          explanation: '',
        },
      ],
    });
    expect(parsed?.quiz).toHaveLength(1);
    expect(parsed?.quiz[0].answer).toBe('b');
  });

  it('drops quiz questions with fewer than two options', () => {
    const parsed = parseLessonContent({
      ...validBody,
      quiz: [{ question: 'Une seule option', options: [{ key: 'a', text: 'Un' }], answer: 'a', explanation: '' }],
    });
    expect(parsed?.quiz).toEqual([]);
  });

  it('ignores malformed entries inside arrays', () => {
    const parsed = parseLessonContent({
      ...validBody,
      content: [{ title: 'Ok', body: 'Corps' }, 'texte brut', null, { title: '', body: '' }],
      glossary: [{ term: 'IA', definition: 'Def' }, { definition: 'sans terme' }, 42],
      practice: { title: 'T', instructions: ['A', '', 7, 'B'], observation: '' },
    });
    expect(parsed?.content).toHaveLength(1);
    expect(parsed?.glossary).toHaveLength(1);
    expect(parsed?.practice.instructions).toEqual(['A', 'B']);
  });

  it('uses the fallback id, number and title when the body omits them', () => {
    const parsed = parseLessonContent(
      { objective: 'But', content: [{ title: 'S', body: 'B' }] },
      { id: 'd4', lessonNumber: 4, title: 'Titre de secours' }
    );
    expect(parsed?.id).toBe('d4');
    expect(parsed?.lessonNumber).toBe(4);
    expect(parsed?.title).toBe('Titre de secours');
  });
});

describe('parseLessonBundle', () => {
  it('keeps only the languages that parse', () => {
    const bundle = parseLessonBundle({
      fr: validBody,
      en: { title: 'Broken' },
      ha: { ...validBody, title: 'Gabatarwa' },
      de: validBody,
    });
    expect(Object.keys(bundle).sort()).toEqual(['fr', 'ha']);
    expect(bundle.ha?.title).toBe('Gabatarwa');
  });

  it('returns an empty bundle for junk', () => {
    expect(parseLessonBundle(null)).toEqual({});
    expect(parseLessonBundle('nope')).toEqual({});
  });
});

describe('lessonCompleteness', () => {
  it('is 0 for a missing or blank body', () => {
    expect(lessonCompleteness(null)).toBe(0);
    expect(lessonCompleteness(emptyLessonContent('c1', 1, ''))).toBe(0);
  });

  it('grows as the body fills in and never exceeds 100', () => {
    const partial = lessonCompleteness(parseLessonContent(validBody));
    const full = lessonCompleteness(
      parseLessonContent({
        ...validBody,
        content: [
          { title: 'S1', body: 'B1' },
          { title: 'S2', body: 'B2' },
          { title: 'S3', body: 'B3' },
        ],
        quiz: [validBody.quiz[0], validBody.quiz[0], validBody.quiz[0]],
        glossary: [
          { term: 'A', definition: '1' },
          { term: 'B', definition: '2' },
          { term: 'C', definition: '3' },
        ],
      })
    );
    expect(partial).toBeGreaterThan(0);
    expect(partial).toBeLessThan(full);
    expect(full).toBe(100);
  });
});
