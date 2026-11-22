import type { Language } from '../data/translations';

// Browsers have no Hausa month names (Intl falls back to English or French),
// so Hausa dates are spelled out here.
const HAUSA_MONTHS = [
  'Janairu', 'Fabrairu', 'Maris', 'Afrilu', 'Mayu', 'Yuni',
  'Yuli', 'Agusta', 'Satumba', 'Oktoba', 'Nuwamba', 'Disamba',
];

const LOCALES: Record<Language, string> = { fr: 'fr-FR', en: 'en-GB', ha: 'ha' };

/** "22 novembre 2026" / "22 November 2026" / "22 Nuwamba 2026". Returns the input unchanged if it is not a date. */
export function formatLongDate(value: string | Date | null | undefined, lang: Language): string {
  if (!value) return '';
  // Bare YYYY-MM-DD dates are calendar days: read them as local, not UTC midnight.
  const date =
    value instanceof Date
      ? value
      : /^\d{4}-\d{2}-\d{2}$/.test(value)
        ? new Date(`${value}T12:00:00`)
        : new Date(value);
  if (Number.isNaN(date.getTime())) return typeof value === 'string' ? value : '';
  if (lang === 'ha') return `${date.getDate()} ${HAUSA_MONTHS[date.getMonth()]} ${date.getFullYear()}`;
  try {
    return new Intl.DateTimeFormat(LOCALES[lang], { day: 'numeric', month: 'long', year: 'numeric' }).format(date);
  } catch {
    return date.toISOString().slice(0, 10);
  }
}
