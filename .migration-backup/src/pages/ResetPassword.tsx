import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Logo } from '../components/Logo';
import { useAuth } from '../hooks/useAuth';
import { useLanguage } from '../hooks/useLanguage';

const inputClass =
  'mt-1.5 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15';

export function ResetPassword() {
  const navigate = useNavigate();
  const { updatePassword } = useAuth();
  const { t } = useLanguage();
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError('');
    if (password !== confirm) {
      setError(t('resetMismatch'));
      return;
    }
    setLoading(true);
    const result = await updatePassword(password);
    setLoading(false);
    if (!result.ok) {
      setError(result.error || t('genericError'));
      return;
    }
    navigate('/dashboard', { replace: true });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-5 py-10">
      <main id="main-content" className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <Logo />
        </div>
        <div className="bg-white rounded-2xl shadow-blue-md border border-gray-100 p-6 sm:p-8">
          <h1 className="font-playfair text-2xl font-bold text-gray-900">{t('resetTitle')}</h1>
          <p className="text-gray-500 mt-2 mb-6">{t('resetSubtitle')}</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
                {error}
              </div>
            )}
            <label className="block">
              <span className="text-sm font-medium text-gray-700">{t('newPassword')}</span>
              <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} minLength={8} required className={inputClass} />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-gray-700">{t('confirmPassword')}</span>
              <input type="password" value={confirm} onChange={(event) => setConfirm(event.target.value)} minLength={8} required className={inputClass} />
            </label>
            <Button type="submit" variant="primary" size="md" className="w-full" disabled={loading}>
              {loading ? t('signingIn') : t('resetSubmit')}
            </Button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            <Link to="/login" className="text-blue-600 font-medium hover:underline">{t('backToLogin')}</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
