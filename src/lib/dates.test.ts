import { describe, expect, it } from 'vitest';
import { formatLongDate } from './dates';

describe('formatLongDate', () => {
  it('writes dates in the learner language, Hausa included', () => {
    expect(formatLongDate('2026-11-22', 'fr')).toBe('22 novembre 2026');
    expect(formatLongDate('2026-11-22', 'en')).toBe('22 November 2026');
    expect(formatLongDate('2026-11-22', 'ha')).toBe('22 Nuwamba 2026');
    expect(formatLongDate('2026-01-05T10:00:00Z', 'ha')).toBe('5 Janairu 2026');
  });

  it('leaves non-dates alone', () => {
    expect(formatLongDate('1 juin 2026', 'fr')).toBe('1 juin 2026');
    expect(formatLongDate('', 'fr')).toBe('');
  });
});
