import { FormEvent, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '../components/Button';
import { Logo } from '../components/Logo';
import { useAuth } from '../hooks/useAuth';
import { useLanguage } from '../hooks/useLanguage';

export function Register() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { register } = useAuth();
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('demo1234');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError('');
    setLoading(true);
    const result = await register({ name, email, password });
    setLoading(false);

    if (!result.ok) {
      setError(result.error || 'Creation de compte impossible.');
      return;
    }

    navigate(searchParams.get('redirect') || '/dashboard', { replace: true });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-5 py-10">
      <main id="main-content" className="w-full max-w-lg">
        <div className="flex justify-center mb-8">
          <Logo />
        </div>

        <div className="bg-white rounded-2xl shadow-blue-md border border-gray-100 p-6 sm:p-8">
          <h1 className="font-playfair text-3xl font-bold text-gray-900">{t('createAccount')}</h1>
          <p className="text-gray-500 mt-2 mb-6">
            {t('registerSubtitle')}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}

            <label className="block">
              <span className="text-sm font-medium text-gray-700">{t('fullName')}</span>
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="mt-1.5 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
                placeholder="Amina Garba"
                required
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-gray-700">{t('email')}</span>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mt-1.5 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
                placeholder="amina@example.com"
                required
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-gray-700">{t('password')}</span>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                minLength={6}
                className="mt-1.5 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
                required
              />
            </label>

            <Button type="submit" variant="primary" size="md" className="w-full" disabled={loading}>
              {loading ? t('creatingAccount') : t('startTest')}
            </Button>
          </form>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          {t('alreadyRegistered')}{' '}
          <Link
            to={searchParams.get('redirect') ? `/login?redirect=${encodeURIComponent(searchParams.get('redirect') || '')}` : '/login'}
            className="text-blue-600 font-medium hover:underline"
          >
            {t('login')}
          </Link>
        </p>
      </main>
    </div>
  );
}
