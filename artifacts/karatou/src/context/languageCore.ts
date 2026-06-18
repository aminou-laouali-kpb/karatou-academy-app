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
