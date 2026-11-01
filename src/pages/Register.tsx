import { FormEvent, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { CheckCircle2, MailCheck } from 'lucide-react';
import { Button } from '../components/Button';
import { Logo } from '../components/Logo';
import { useAuth } from '../hooks/useAuth';
import { useLanguage } from '../hooks/useLanguage';
import { isDemoEnabled } from '../lib/demoMode';
import { trackEvent } from '../lib/analytics';
import {
  OTHER_COUNTRY_CODE,
  WEST_AFRICA_COUNTRIES,
  countryLabel,
} from '../data/westAfricaCountries';

export function Register() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { register } = useAuth();
  const { t, lang } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // Pre-fill the demo password only in demo mode (mirrors Login); production
  // registrations start with an empty password field.
  const [password, setPassword] = useState(() => (isDemoEnabled ? 'demo1234' : ''));
  // Opt-in demographic fields (feed the public impact dashboard). Both can stay
  // blank — the user controls disclosure.
  const [country, setCountry] = useState('');
  const [gender, setGender] = useState('');
  const [error, setError] = useState('');
  const [errorDetail, setErrorDetail] = useState('');
  // Registration can succeed without a session: the address needs confirming
  // first. That is not a failure, so it gets its own screen rather than the
  // red banner that used to make a success look like a crash.
  const [pendingEmail, setPendingEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError('');
    setErrorDetail('');
    setLoading(true);
    const result = await register({ name, email, password, country, gender });
    setLoading(false);

    if (!result.ok) {
      setError(t(result.errorKey || 'authErrGeneric'));
      setErrorDetail(result.errorDetail || '');
      return;
    }

    trackEvent('auth_register');

    if (result.pendingEmailConfirmation) {
      setPendingEmail(email.trim());
      return;
    }

    navigate(searchParams.get('redirect') || '/dashboard', { replace: true });
  };

  if (pendingEmail) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-5 py-10">
        <main id="main-content" className="w-full max-w-lg">
          <div className="flex justify-center mb-8">
            <Logo />
          </div>

          <div className="bg-white rounded-2xl shadow-blue-md border border-gray-100 p-6 sm:p-8 text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={28} className="text-emerald-600" />
            </div>
            <h1 className="font-heading text-h2 text-gray-900">{t('registerPendingTitle')}</h1>
            <p className="text-body text-gray-600 mt-3">{t('registerPendingBody')}</p>
            <p className="text-body font-semibold text-gray-900 mt-3 break-all">{pendingEmail}</p>
            <p className="text-meta text-gray-500 mt-4 flex items-center justify-center gap-1.5">
              <MailCheck size={14} /> {t('registerPendingSpam')}
            </p>
            <Button
              variant="primary"
              size="md"
              className="w-full mt-6"
              onClick={() => navigate('/login', { replace: true })}
            >
              {t('registerPendingCta')}
            </Button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-5 py-10">
      <main id="main-content" className="w-full max-w-lg">
        <div className="flex justify-center mb-8">
          <Logo />
        </div>

        <div className="bg-white rounded-2xl shadow-blue-md border border-gray-100 p-6 sm:p-8">
          <h1 className="font-heading text-h1 text-gray-900">{t('createAccount')}</h1>
          <p className="text-gray-500 mt-2 mb-6">
            {t('registerSubtitle')}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-body text-red-700" role="alert">
                <p>{error}</p>
                {errorDetail && (
                  <p className="text-meta text-red-600/80 mt-1">
                    {t('authErrDetailPrefix')} : {errorDetail}
                  </p>
                )}
              </div>
            )}

            <label className="block">
              <span className="text-body font-medium text-gray-700">{t('fullName')}</span>
              <input
                type="text"
                autoComplete="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="mt-1.5 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-body outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
                placeholder="Amina Garba"
                required
              />
            </label>

            <label className="block">
              <span className="text-body font-medium text-gray-700">{t('email')}</span>
              <input
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mt-1.5 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-body outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
                placeholder="amina@example.com"
                required
              />
            </label>

            <label className="block">
              <span className="text-body font-medium text-gray-700">{t('password')}</span>
              <input
                type="password"
                autoComplete="new-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                minLength={6}
                className="mt-1.5 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-body outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
                required
              />
            </label>

            <fieldset className="rounded-xl border border-blue-100 bg-blue-50/40 px-4 py-3">
              <legend className="px-1 text-eyebrow text-blue-700">
                {t('demographicsTitle')}
              </legend>
              <p className="text-meta text-blue-700/80 mb-3">{t('demographicsHelp')}</p>
              <div className="grid sm:grid-cols-2 gap-3">
                <label className="block">
                  <span className="text-meta font-medium text-gray-700">
                    {t('countryLabel')} <span className="text-red-700">({t('requiredField')})</span>
                  </span>
                  <select
                    value={country}
                    onChange={(event) => setCountry(event.target.value)}
                    className="mt-1 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-body outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
                    required
                  >
                    <option value="">{t('countryPlaceholder')}</option>
                    {/* Required: left empty, the database trigger would default
                        everyone to Niger and quietly falsify the impact figures. */}
                    {WEST_AFRICA_COUNTRIES.map((option) => (
                      <option key={option.code} value={option.code}>
                        {countryLabel(option.code, lang)}
                      </option>
                    ))}
                    <option value={OTHER_COUNTRY_CODE}>{t('countryOther')}</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-meta font-medium text-gray-700">
                    {t('genderLabel')} <span className="text-gray-600">({t('optionalField')})</span>
                  </span>
                  <select
                    value={gender}
                    onChange={(event) => setGender(event.target.value)}
                    className="mt-1 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-body outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
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

        <p className="text-center text-body text-gray-500 mt-6">
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
