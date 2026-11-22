import { useState, useEffect, useMemo, useCallback, ReactNode } from 'react';
import { Language, translations } from '../data/translations';
import { LanguageContext, detectInitialLang } from './languageCore';

const LANG_STORAGE_KEY = 'karatou.lang.v1';

function readStoredValue(): string | null {
  try {
    return window.localStorage.getItem(LANG_STORAGE_KEY);
  } catch {
    // Blocked storage (private mode, site data disabled) must not blank the app.
    return null;
  }
}

function readStoredLang(): Language {
  if (typeof window === 'undefined') {
    return 'fr';
  }
  const languages = typeof navigator !== 'undefined' ? navigator.languages || [navigator.language] : [];
  return detectInitialLang(window.location.search, readStoredValue(), languages);
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
      try {
        window.localStorage.setItem(LANG_STORAGE_KEY, lang);
      } catch {
        // Not persisted: the language still applies for this visit.
      }
    }
  }, [lang]);

  const t = useCallback((key: string) => translations[lang][key] || key, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
