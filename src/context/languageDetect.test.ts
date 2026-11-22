import { describe, expect, it } from 'vitest';
import { detectInitialLang } from './languageCore';

describe('initial language', () => {
  it('follows ?lang=, then the saved choice, then the phone', () => {
    expect(detectInitialLang('?lang=ha', 'fr', ['en-US'])).toBe('ha');
    expect(detectInitialLang('', 'en', ['ha-NG'])).toBe('en');
    expect(detectInitialLang('', null, ['ha-NG', 'en'])).toBe('ha');
    expect(detectInitialLang('', null, ['de-DE', 'en-GB'])).toBe('en');
    expect(detectInitialLang('?lang=xx', 'zz', ['de'])).toBe('fr');
  });
});
