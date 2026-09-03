import { useLanguage } from '../hooks/useLanguage';
import type { Language } from '../data/translations';

export interface LanguageSwitcherProps {
  variant?: 'default' | 'dark';
}

export function LanguageSwitcher({ variant = 'default' }: LanguageSwitcherProps) {
  const { lang, setLang, t } = useLanguage();
  const languages: Language[] = ['fr', 'en', 'ha'];
  const labels: Record<Language, string> = { fr: 'FR', en: 'EN', ha: 'HA' };

  return (
    <div
      role="group"
      aria-label={t('language')}
      className="flex items-center gap-0.5 bg-gray-100/80 rounded-full p-0.5"
    >
      {languages.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`px-2.5 py-1 text-meta font-medium rounded-full transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1 ${
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
