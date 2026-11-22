import { useLanguage } from '../hooks/useLanguage';
import type { Language } from '../data/translations';

export interface LanguageSwitcherProps {
  variant?: 'default' | 'dark';
}

export function LanguageSwitcher({ variant = 'default' }: LanguageSwitcherProps) {
  const { lang, setLang, t } = useLanguage();
  const languages: Language[] = ['fr', 'en', 'ha'];
  const labels: Record<Language, string> = { fr: 'FR', en: 'EN', ha: 'HA' };
  // Each language names itself, so a reader who does not understand the
  // current page still recognises theirs.
  const fullNames: Record<Language, string> = { fr: 'Français', en: 'English', ha: 'Hausa' };

  return (
    <div
      role="group"
      aria-label={t('language')}
      className={`flex items-center gap-0.5 rounded-full p-0.5 ${variant === 'dark' ? 'bg-white/10' : 'bg-gray-100/80'}`}
    >
      {languages.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          aria-label={fullNames[l]}
          lang={l}
          title={fullNames[l]}
          className={`px-2.5 py-1 text-meta font-medium rounded-full transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1 ${
            lang === l
              ? variant === 'dark'
                ? 'bg-white text-blue-900'
                : 'bg-blue-500 text-white'
              : variant === 'dark'
                ? 'text-gray-100 hover:text-white'
                : 'text-gray-500 hover:text-gray-700'
          } ${variant === 'dark' ? 'focus-visible:ring-offset-blue-900' : ''}`}
        >
          {labels[l]}
        </button>
      ))}
    </div>
  );
}
