import { describe, expect, it } from 'vitest';
import { slugify } from './strings';

describe('slugify', () => {
  it('lower-cases and strips accents', () => {
    expect(slugify('Élève en démarche')).toBe('eleve-en-demarche');
  });

  it('collapses non-alphanumerics into a single dash', () => {
    expect(slugify('hello   world!!!  test')).toBe('hello-world-test');
  });

  it('trims leading/trailing dashes', () => {
    expect(slugify('  --hello-- ')).toBe('hello');
  });

  it('returns empty string for purely symbolic input', () => {
    expect(slugify('!!!@@@###')).toBe('');
  });

  it('is idempotent (slugifying twice == slugifying once)', () => {
    const once = slugify('Introduction à l’IA');
    expect(slugify(once)).toBe(once);
  });

  it('caps the slug at 64 chars to fit DB constraints', () => {
    const long = 'a'.repeat(200);
    const out = slugify(long);
    expect(out.length).toBeLessThanOrEqual(64);
  });

  it('handles unicode/emoji by removing them', () => {
    // Emojis and CJK are dropped by the [^a-z0-9]+ replace.
    expect(slugify('Karatou 🎓 学院')).toBe('karatou');
  });
});
