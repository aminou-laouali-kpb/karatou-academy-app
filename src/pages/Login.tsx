import { FormEvent, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Building2, GraduationCap, Lock, Mail, ShieldCheck } from 'lucide-react';
import { Button } from '../components/Button';
import { Logo } from '../components/Logo';
import { useAuth } from '../hooks/useAuth';
import { useLanguage } from '../hooks/useLanguage';
import { isDemoEnabled } from '../lib/demoMode';
import { defaultRouteForRole } from '../lib/roles';
import { trackEvent } from '../lib/analytics';
import { UserRole } from '../types';

export function Login() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { login, loginAs } = useAuth();
  const { t } = useLanguage();
  const [email, setEmail] = useState(() => (isDemoEnabled ? 'student@karatou.test' : ''));
  const [password, setPassword] = useState(() => (isDemoEnabled ? 'demo1234' : ''));
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const redirectTo = searchParams.get('redirect') || '/dashboard';

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError('');
    setLoading(true);
    const result = await login(email, password);
    setLoading(false);

    if (!result.ok) {
      setError(t(result.errorKey || 'authErrInvalidCredentials'));
      return;
    }

    trackEvent('auth_login', { method: 'password' });
    navigate(redirectTo, { replace: true });
  };

  const handleDemo = async (role: UserRole) => {
    if (!isDemoEnabled) {
      return;
    }

    setError('');
    setLoading(true);
    const result = await loginAs(role);
    setLoading(false);
    if (!result.ok) {
      setError(t(result.errorKey || 'authErrInvalidCredentials'));
      return;
    }
    trackEvent('auth_login', { method: 'demo', role });
    navigate(searchParams.get('redirect') || defaultRouteForRole(role), { replace: true });
  };

  return (
    <div className="min-h-screen bg-gray-50 grid lg:grid-cols-[1fr_0.85fr]">
      <section className="bg-blue-900 text-white px-6 py-8 sm:px-10 lg:px-16 flex flex-col justify-between">
        <Logo variant="dark" />
        <div className="max-w-xl py-16">
          <p className="text-eyebrow text-gold-400 mb-4">
            {isDemoEnabled ? t('mvpTestable') : t('loginEyebrowProduction')}
          </p>
          <h1 className="font-heading text-display sm:text-display-lg mb-5">
            {isDemoEnabled ? t('loginHero') : t('loginHeroProduction')}
          </h1>
          <p className="text-blue-100 text-body-lg leading-relaxed">
            {isDemoEnabled ? t('loginHeroSubtitle') : t('loginHeroSubtitleProduction')}
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-3 text-body text-blue-100">
          <span className="rounded-xl bg-white/10 px-4 py-3">
            {isDemoEnabled ? t('localSession') : t('secureAccount')}
          </span>
          <span className="rounded-xl bg-white/10 px-4 py-3">
            {isDemoEnabled ? t('savedProgress') : t('syncedProgress')}
          </span>
          <span className="rounded-xl bg-white/10 px-4 py-3">{t('verifiableCert')}</span>
        </div>
      </section>

      <main id="main-content" className="px-5 py-8 sm:px-10 flex items-center">
        <div className="w-full max-w-md mx-auto">
          <div className="mb-8">
            <h2 className="font-heading text-h1 text-gray-900">{t('signInTitle')}</h2>
            <p className="text-gray-500 mt-2">
              {isDemoEnabled ? t('signInSubtitle') : t('signInSubtitleProduction')}
            </p>
          </div>

          {isDemoEnabled && (
            <div className="grid sm:grid-cols-3 gap-3 mb-6">
              <button
                onClick={() => handleDemo('learner')}
                className="text-left bg-white border border-gray-200 rounded-2xl p-4 hover:border-blue-300 hover:shadow-blue-sm transition-all"
              >
                <GraduationCap size={20} className="text-blue-500 mb-3" />
                <p className="font-semibold text-gray-900">{t('demoStudent')}</p>
                <p className="text-meta text-gray-500 mt-1">student@karatou.test</p>
              </button>
              <button
                onClick={() => handleDemo('enterprise_admin')}
                className="text-left bg-white border border-gray-200 rounded-2xl p-4 hover:border-gold-300 hover:shadow-blue-sm transition-all"
              >
                <Building2 size={20} className="text-gold-500 mb-3" />
                <p className="font-semibold text-gray-900">{t('demoEnterprise')}</p>
                <p className="text-meta text-gray-500 mt-1">admin@karatou.test</p>
              </button>
              <button
                onClick={() => handleDemo('platform_admin')}
                className="text-left bg-white border border-gray-200 rounded-2xl p-4 hover:border-blue-400 hover:shadow-blue-sm transition-all"
              >
                <ShieldCheck size={20} className="text-blue-700 mb-3" />
                <p className="font-semibold text-gray-900">{t('demoPlatformAdmin')}</p>
                <p className="text-meta text-gray-500 mt-1">platform@karatou.test</p>
              </button>
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-blue-sm border border-gray-100 p-5 space-y-4">
            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-body text-red-700" role="alert">
                {error}
              </div>
            )}

            <label className="block">
              <span className="text-body font-medium text-gray-700">{t('email')}</span>
              <span className="mt-1.5 flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/15">
                <Mail size={16} className="text-gray-400" />
                <input
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full py-2.5 text-body outline-none"
                  required
                />
              </span>
            </label>

            <label className="block">
              <span className="text-body font-medium text-gray-700">{t('password')}</span>
              <span className="mt-1.5 flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/15">
                <Lock size={16} className="text-gray-400" />
                <input
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full py-2.5 text-body outline-none"
                  required
                />
              </span>
            </label>

            <Button type="submit" variant="primary" size="md" className="w-full" disabled={loading}>
              {loading ? t('signingIn') : t('signInAction')}
            </Button>
          </form>

          <p className="text-center text-body text-gray-500 mt-4">
            <Link to="/forgot-password" className="text-blue-600 font-medium hover:underline">{t('forgotLink')}</Link>
          </p>

          <p className="text-center text-body text-gray-500 mt-2">
            {t('newTester')}{' '}
            <Link to="/register" className="text-blue-600 font-medium hover:underline">
              {t('createLearnerAccount')}
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
