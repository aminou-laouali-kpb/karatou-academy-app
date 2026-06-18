import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Logo } from '../components/Logo';
import { useLanguage } from '../hooks/useLanguage';

export function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-5">
      <main className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <Logo />
        </div>
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">404</p>
        <h1 className="font-playfair text-3xl font-bold text-gray-900 mb-3">
          {t('pageNotFound')}
        </h1>
        <p className="text-gray-500 mb-6">
          {t('routeMissing')}
        </p>
        <Link to="/">
          <Button variant="primary" size="md">{t('backHome')}</Button>
        </Link>
      </main>
    </div>
  );
}
