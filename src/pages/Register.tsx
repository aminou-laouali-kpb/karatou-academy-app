import { FormEvent, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '../components/Button';
import { Logo } from '../components/Logo';
import { useAuth } from '../hooks/useAuth';
import { useLanguage } from '../hooks/useLanguage';
import { isDemoEnabled } from '../lib/demoMode';
import { trackEvent } from '../lib/analytics';

export function Register() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { register } = useAuth();
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // Pre-fill the demo password only in demo mode (mirrors Login); production
  // registrations start with an empty password field.
  const [password, setPassword] = useState(() => (isDemoEnabled ? 'demo1234' : ''));
  // Opt-in demographic fields (feed the public impact dashboard). Both can stay
  // blank — the user controls disclosure.
  const [region, setRegion] = useState('');
  const [gender, setGender] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError('');
    setLoading(true);
    const result = await register({ name, email, password, region, gender });
    setLoading(false);

    if (!result.ok) {
      setError(result.error || 'Creation de compte impossible.');
      return;
    }

    trackEvent('auth_register', { method: 'email' });
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
                autoComplete="name"
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
                autoComplete="email"
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
                autoComplete="new-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                minLength={6}
                className="mt-1.5 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
                required
              />
            </label>

            <fieldset className="rounded-xl border border-blue-100 bg-blue-50/40 px-4 py-3">
              <legend className="px-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
                {t('demographicsTitle')}
              </legend>
              <p className="text-xs text-blue-700/80 mb-3">{t('demographicsHelp')}</p>
              <div className="grid sm:grid-cols-2 gap-3">
                <label className="block">
                  <span className="text-xs font-medium text-gray-700">{t('regionLabel')}</span>
                  <select
                    value={region}
                    onChange={(event) => setRegion(event.target.value)}
                    className="mt-1 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
                  >
                    <option value="">{t('regionPlaceholder')}</option>
                    {/* Niger's 8 regions. Stored as the French canonical label
                        so admin breakdowns are consistent across languages. */}
                    <option value="Niamey">Niamey</option>
                    <option value="Tillabéri">Tillabéri</option>
                    <option value="Tahoua">Tahoua</option>
                    <option value="Maradi">Maradi</option>
                    <option value="Zinder">Zinder</option>
                    <option value="Diffa">Diffa</option>
                    <option value="Agadez">Agadez</option>
                    <option value="Dosso">Dosso</option>
                    <option value="autre">{t('regionOther')}</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-xs font-medium text-gray-700">{t('genderLabel')}</span>
                  <select
                    value={gender}
                    onChange={(event) => setGender(event.target.value)}
                    className="mt-1 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
                  >
                    <option value="">{t('genderPlaceholder')}</option>
                    <option value="female">{t('genderFemale')}</option>
                    <option value="male">{t('genderMale')}</option>
                    <option value="other">{t('genderOther')}</option>
                    <option value="prefer_not_to_say">{t('genderUndisclosed')}</option>
                  </select>
                </label>
              </div>
            </fieldset>

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
