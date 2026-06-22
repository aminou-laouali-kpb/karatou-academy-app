import { describe, expect, it } from 'vitest';
import { parseDemoFlag } from './demoMode';

describe('parseDemoFlag', () => {
  it('returns null for undefined / empty', () => {
    expect(parseDemoFlag(undefined)).toBeNull();
    expect(parseDemoFlag('')).toBeNull();
  });

  it.each(['1', 'true', 'yes', 'on', 'TRUE', '  Yes ', 'ON'])(
    'maps "%s" to true',
    (value) => {
      expect(parseDemoFlag(value)).toBe(true);
    }
  );

  it.each(['0', 'false', 'no', 'off', 'FALSE', '  Off '])(
    'maps "%s" to false',
    (value) => {
      expect(parseDemoFlag(value)).toBe(false);
    }
  );

  it('returns null for ambiguous strings (so the DEV fallback applies)', () => {
    expect(parseDemoFlag('maybe')).toBeNull();
    expect(parseDemoFlag('2')).toBeNull();
    expect(parseDemoFlag('truee')).toBeNull();
  });
});
