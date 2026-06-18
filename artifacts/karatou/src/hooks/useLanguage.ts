import { useContext } from 'react';
import { LanguageContext } from '../context/languageCore';

export const useLanguage = () => useContext(LanguageContext);
