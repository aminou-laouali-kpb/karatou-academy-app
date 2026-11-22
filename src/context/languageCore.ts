import { createContext } from 'react';
import { Language, translations } from '../data/translations';

export interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextType>({
  lang: 'fr',
  setLang: () => {},
  t: (key: string) => translations.fr[key] || key,
});

const SUPPORTED_LANGS: Language[] = ['fr', 'en', 'ha'];

function isLanguage(value: unknown): value is Language {
  return typeof value === 'string' && (SUPPORTED_LANGS as string[]).includes(value);
}

/**
 * Initial language: an explicit ?lang= link (WhatsApp shares, partner
 * campaigns) wins, then the learner's last choice, then the phone's own
 * language. French stays the fallback. A Hausa-speaking phone used to land on
 * French pages with no switcher in sight.
 */
export function detectInitialLang(
  search: string,
  stored: string | null,
  browserLanguages: readonly string[]
): Language {
  const fromUrl = new URLSearchParams(search).get('lang')?.toLowerCase();
  if (isLanguage(fromUrl)) return fromUrl;
  if (isLanguage(stored)) return stored;
  for (const tag of browserLanguages) {
    const base = tag.toLowerCase().split('-')[0];
    if (isLanguage(base)) return base;
  }
  return 'fr';
}

