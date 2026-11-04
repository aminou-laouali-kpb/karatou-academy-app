import { describe, expect, it } from 'vitest';
import { modules } from './mockData';
import { localizeModules } from './localizedContent';

describe('public catalogue localization', () => {
  it.each(['fr', 'en', 'ha'] as const)('keeps published module content usable in %s', (lang) => {
    const published = localizeModules(modules.filter((module) => module.status !== 'draft'), lang);
    expect(published.length).toBeGreaterThan(0);
    for (const module of published) {
      expect(module.title.trim()).not.toBe('');
      expect(module.subtitle.trim()).not.toBe('');
      expect(module.description.trim()).not.toBe('');
      expect(module.level.trim()).not.toBe('');
      expect(module.courses.length).toBeGreaterThan(0);
      for (const course of module.courses) {
        expect(course.title.trim()).not.toBe('');
        expect(course.description.trim()).not.toBe('');
      }
    }
  });

  it('uses translated course and level copy where it exists', () => {
    for (const lang of ['en', 'ha'] as const) {
      const module = localizeModules([modules[0]], lang)[0];
      expect(module.title).not.toBe(modules[0].title);
      expect(module.level).not.toBe(modules[0].level);
      expect(module.courses[0].title).not.toBe(modules[0].courses[0].title);
    }
  });

  it('retains understandable source content when no translation exists', () => {
    const source = { ...modules[0], slug: 'source-only-module', translations: undefined };
    const result = localizeModules([source], 'ha')[0];
    expect(result.title).toBe(source.title);
    expect(result.description).toBe(source.description);
    expect(result.level).toBe(source.level);
    expect(result.courses[0].title).toBe(source.courses[0].title);
  });
});
