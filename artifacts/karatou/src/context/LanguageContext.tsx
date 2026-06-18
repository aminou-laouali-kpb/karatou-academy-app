import { useState, useEffect, useMemo, useCallback, ReactNode } from 'react';
import { Language, translations } from '../data/translations';
import { LanguageContext } from './languageCore';

const LANG_STORAGE_KEY = 'karatou.lang.v1';
const SUPPORTED_LANGS: Language[] = ['fr', 'en', 'ha'];

function readStoredLang(): Language {
  if (typeof window === 'undefined') {
    return 'fr';
  }
  const stored = window.localStorage.getItem(LANG_STORAGE_KEY) as Language | null;
  return stored && SUPPORTED_LANGS.includes(stored) ? stored : 'fr';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(() => readStoredLang());

  // Keep the document language in sync (accessibility / screen readers) and
  // persist the choice so it survives reloads.
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(LANG_STORAGE_KEY, lang);
    }
  }, [lang]);

  const t = useCallback((key: string) => translations[lang][key] || key, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
