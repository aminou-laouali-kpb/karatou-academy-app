import type { Language } from './translations';

/**
 * Countries offered at sign-up.
 *
 * The form used to list Niger's eight regions, which told every visitor from
 * Dakar or Accra that the platform was not for them. The scope is West Africa,
 * so the field is a country — and it feeds `profiles.country`, the column the
 * public impact statistics already aggregate on (`by_country`).
 *
 * Codes are ISO 3166-1 alpha-2, matching the 'NE' already stored in production
 * and the `upper(trim(country))` grouping in `karatou_public_impact_stats()`.
 * `XX` is the ISO user-assigned range, used here for "elsewhere": someone
 * outside the region should be able to sign up without lying about where they
 * live.
 *
 * Hausa labels intentionally reuse the French ones. Inventing exonyms we cannot
 * verify would be worse than showing a name every Hausa speaker in the region
 * already reads on documents; a native review is welcome.
 */
export interface CountryOption {
  code: string;
  fr: string;
  en: string;
}

/** UN geoscheme for Western Africa, alphabetical by French label. */
export const WEST_AFRICA_COUNTRIES: CountryOption[] = [
  { code: 'BJ', fr: 'Bénin', en: 'Benin' },
  { code: 'BF', fr: 'Burkina Faso', en: 'Burkina Faso' },
  { code: 'CV', fr: 'Cap-Vert', en: 'Cabo Verde' },
  { code: 'CI', fr: 'Côte d’Ivoire', en: 'Côte d’Ivoire' },
  { code: 'GM', fr: 'Gambie', en: 'Gambia' },
  { code: 'GH', fr: 'Ghana', en: 'Ghana' },
  { code: 'GN', fr: 'Guinée', en: 'Guinea' },
  { code: 'GW', fr: 'Guinée-Bissau', en: 'Guinea-Bissau' },
  { code: 'LR', fr: 'Libéria', en: 'Liberia' },
  { code: 'ML', fr: 'Mali', en: 'Mali' },
  { code: 'MR', fr: 'Mauritanie', en: 'Mauritania' },
  { code: 'NE', fr: 'Niger', en: 'Niger' },
  { code: 'NG', fr: 'Nigéria', en: 'Nigeria' },
  { code: 'SN', fr: 'Sénégal', en: 'Senegal' },
  { code: 'SL', fr: 'Sierra Leone', en: 'Sierra Leone' },
  { code: 'TG', fr: 'Togo', en: 'Togo' },
];

const VALID_CODES = new Set(WEST_AFRICA_COUNTRIES.map((country) => country.code));

/** Code stored when the person lives outside the listed countries. */
export const OTHER_COUNTRY_CODE = 'XX';

export function countryLabel(code: string, lang: Language): string {
  const country = WEST_AFRICA_COUNTRIES.find((candidate) => candidate.code === code);
  if (!country) return code;
  return lang === 'en' ? country.en : country.fr;
}

/**
 * Normalises what the form submits before it reaches the database. Anything
 * unrecognised becomes `XX` rather than a free-text value: the impact
 * statistics group on this column, and one stray label fragments the counts.
 */
export function normalizeCountryCode(value: string | undefined | null): string | undefined {
  const code = (value ?? '').trim().toUpperCase();
  if (!code) return undefined;
  if (VALID_CODES.has(code)) return code;
  return OTHER_COUNTRY_CODE;
}
