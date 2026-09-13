import { useLanguage } from '../hooks/useLanguage';

/**
 * Keyboard-accessible "skip to content" link. Visually hidden until focused,
 * then jumps to the page's <main id="main-content">.
 */
export function SkipLink() {
  const { t } = useLanguage();
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-label focus:text-blue-700 focus:shadow-blue-md"
    >
      {t('skipToContent')}
    </a>
  );
}
