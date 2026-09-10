import { describe, expect, it } from 'vitest';
import {
  OTHER_COUNTRY_CODE,
  WEST_AFRICA_COUNTRIES,
  countryLabel,
  normalizeCountryCode,
} from './westAfricaCountries';

describe('WEST_AFRICA_COUNTRIES', () => {
  it('covers the sixteen countries of the UN Western Africa geoscheme', () => {
    expect(WEST_AFRICA_COUNTRIES).toHaveLength(16);
    const codes = WEST_AFRICA_COUNTRIES.map((country) => country.code);
    expect(codes).toContain('NE');
    expect(codes).toContain('SN');
    expect(codes).toContain('NG');
    expect(codes).toContain('MR');
  });

  it('uses unique ISO 3166-1 alpha-2 codes', () => {
    const codes = WEST_AFRICA_COUNTRIES.map((country) => country.code);
    expect(new Set(codes).size).toBe(codes.length);
    codes.forEach((code) => expect(code).toMatch(/^[A-Z]{2}$/));
  });

  it('never collides with the "elsewhere" code', () => {
    expect(WEST_AFRICA_COUNTRIES.some((c) => c.code === OTHER_COUNTRY_CODE)).toBe(false);
  });

  it('is sorted by French label, which is the order the form renders', () => {
    const labels = WEST_AFRICA_COUNTRIES.map((country) => country.fr);
    expect(labels).toEqual([...labels].sort((a, b) => a.localeCompare(b, 'fr')));
  });
});

describe('countryLabel', () => {
  it('localises the names that actually differ', () => {
    expect(countryLabel('CV', 'fr')).toBe('Cap-Vert');
    expect(countryLabel('CV', 'en')).toBe('Cabo Verde');
    expect(countryLabel('MR', 'fr')).toBe('Mauritanie');
    expect(countryLabel('MR', 'en')).toBe('Mauritania');
  });

  it('falls back to the French label in Hausa rather than inventing an exonym', () => {
    expect(countryLabel('SN', 'ha')).toBe('Sénégal');
  });

  it('returns the code itself when it is unknown', () => {
    expect(countryLabel('ZZ', 'fr')).toBe('ZZ');
  });
});

describe('normalizeCountryCode', () => {
  it('accepts a listed code, whatever the casing or padding', () => {
    expect(normalizeCountryCode('ne')).toBe('NE');
    expect(normalizeCountryCode('  sn  ')).toBe('SN');
  });

  it('collapses anything unlisted to the "elsewhere" code', () => {
    // The impact statistics group on this column: one stray free-text label
    // would fragment the counts.
    expect(normalizeCountryCode('FR')).toBe(OTHER_COUNTRY_CODE);
    expect(normalizeCountryCode('Niamey')).toBe(OTHER_COUNTRY_CODE);
    expect(normalizeCountryCode(OTHER_COUNTRY_CODE)).toBe(OTHER_COUNTRY_CODE);
  });

  it('stays undefined when nothing was chosen', () => {
    expect(normalizeCountryCode('')).toBeUndefined();
    expect(normalizeCountryCode('   ')).toBeUndefined();
    expect(normalizeCountryCode(undefined)).toBeUndefined();
    expect(normalizeCountryCode(null)).toBeUndefined();
  });
});
