import { useLanguage } from '../hooks/useLanguage';
import type { Language } from '../data/translations';

export function LanguageSwitcher({ variant = 'default' }: { variant?: 'default' | 'dark' }) {
  const { lang, setLang } = useLanguage();
  const languages: Language[] = ['fr', 'en', 'ha'];
  const labels = { fr: 'FR', en: 'EN', ha: 'HA' };

  return (
    <div className="flex items-center gap-0.5 bg-gray-100/80 rounded-full p-0.5">
      {languages.map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-2.5 py-1 text-xs font-medium rounded-full transition-all duration-150 ${
            lang === l
              ? variant === 'dark'
                ? 'bg-white text-blue-900'
                : 'bg-blue-500 text-white'
              : variant === 'dark'
                ? 'text-gray-300 hover:text-white'
                : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          {labels[l]}
        </button>
      ))}
    </div>
  );
}
