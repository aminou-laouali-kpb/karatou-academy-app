import { Link } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { useLanguage } from '../hooks/useLanguage';

export function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-5">
      <main id="main-content" tabIndex={-1} className="text-center max-w-md focus:outline-none">
        <div className="flex justify-center mb-6">
          <Logo />
        </div>
        <div className="flex justify-center mb-6">
          <LanguageSwitcher />
        </div>
        <p className="text-eyebrow text-blue-600 mb-3">404</p>
        <h1 className="font-heading text-h1 text-gray-900 mb-3">
          {t('pageNotFound')}
        </h1>
        <p className="text-gray-500 mb-6">
          {t('routeMissing')}
        </p>
        {/* A link styled as a button: a <button> inside <a> made two tab stops. */}
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-xl bg-gradient-blue px-6 py-2.5 text-body font-semibold text-white shadow-blue-md hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          {t('backHome')}
        </Link>
      </main>
    </div>
  );
}
