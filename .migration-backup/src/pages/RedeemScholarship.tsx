import { FormEvent, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Gift, LogIn, ShieldCheck, UserPlus, XCircle } from 'lucide-react';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { Logo } from '../components/Logo';
import { useAuth } from '../hooks/useAuth';
import { useLanguage } from '../hooks/useLanguage';
import { useLearning } from '../hooks/useLearning';
import { RedeemScholarshipResult } from '../types';

function normalizeCode(code: string) {
  return code.trim().toUpperCase();
}

function redeemPath(code: string) {
  const normalized = normalizeCode(code);
  return normalized ? `/redeem/${encodeURIComponent(normalized)}` : '/redeem';
}

export function RedeemScholarship() {
  const navigate = useNavigate();
  const { code: codeParam } = useParams();
  const [searchParams] = useSearchParams();
  const { t } = useLanguage();
  const { user, isAuthenticated } = useAuth();
  const { redeemScholarship } = useLearning();
  const initialCode = codeParam || searchParams.get('code') || '';
  const [code, setCode] = useState(() => normalizeCode(initialCode));
  const [result, setResult] = useState<RedeemScholarshipResult | null>(null);
  const [loading, setLoading] = useState(false);
  const redirect = redeemPath(code);
  const loginTarget = `/login?redirect=${encodeURIComponent(redirect)}`;
  const registerTarget = `/register?redirect=${encodeURIComponent(redirect)}`;

  const statusTone =
    result?.status === 'redeemed' || result?.status === 'already_claimed'
      ? {
          icon: <CheckCircle2 size={22} />,
          className: 'border-emerald-200 bg-emerald-50 text-emerald-700',
          badge: 'green' as const,
          title: result.status === 'redeemed' ? t('redeemSuccessTitle') : t('redeemAlreadyClaimedTitle'),
        }
      : result?.status === 'claimed' ||
          result?.status === 'expired' ||
          result?.status === 'invalid' ||
          result?.status === 'role_not_allowed' ||
          result?.status === 'error'
        ? {
            icon: <XCircle size={22} />,
            className: 'border-red-200 bg-red-50 text-red-700',
            badge: 'red' as const,
            title:
              result.status === 'claimed'
                ? t('redeemClaimedTitle')
                : result.status === 'expired'
                  ? t('redeemExpiredTitle')
                  : result.status === 'role_not_allowed'
                    ? t('redeemLearnerOnlyTitle')
                    : t('redeemInvalidTitle'),
          }
        : {
            icon: <ShieldCheck size={22} />,
            className: 'border-blue-100 bg-blue-50 text-blue-700',
            badge: 'blue' as const,
            title: t('redeemReadyTitle'),
          };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setResult(await redeemScholarship(code));
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-100 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-3">
          <Logo />
          <Badge variant={statusTone.badge}>{t('scholarships')}</Badge>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <section className="grid lg:grid-cols-[0.95fr_1.05fr] gap-6 items-start">
          <div className="pt-2">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-100 text-gold-600 mb-5">
              <Gift size={24} />
            </div>
            <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              {t('redeemTitle')}
            </h1>
            <p className="text-gray-500 mt-4 leading-relaxed">
              {t('redeemSubtitle')}
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl shadow-blue-sm p-5 sm:p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="block">
                <span className="text-sm font-medium text-gray-700">{t('bourseCode')}</span>
                <input
                  value={code}
                  onChange={(event) => {
                    setCode(normalizeCode(event.target.value));
                    setResult(null);
                  }}
                  className="mt-1.5 w-full rounded-xl border border-gray-200 px-3 py-3 font-mono text-sm tracking-wide outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
                  placeholder={t('redeemCodePlaceholder')}
                  required
                />
              </label>

              {!isAuthenticated ? (
                <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
                  <p className="text-sm font-semibold text-blue-800">{t('redeemAuthRequiredTitle')}</p>
                  <p className="text-sm text-blue-700 mt-1">{t('redeemAuthRequiredBody')}</p>
                  <div className="mt-4 flex flex-col sm:flex-row gap-2">
                    <Button size="sm" onClick={() => navigate(loginTarget)}>
                      <LogIn size={16} /> {t('redeemSignIn')}
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => navigate(registerTarget)}>
                      <UserPlus size={16} /> {t('redeemCreateAccount')}
                    </Button>
                  </div>
                </div>
              ) : (
                <Button type="submit" variant="primary" size="md" className="w-full" disabled={loading || !code.trim()}>
                  {loading ? t('redeemLoading') : t('redeemAction')} <ArrowRight size={16} />
                </Button>
              )}
            </form>

            <div className={`mt-5 rounded-2xl border p-4 ${statusTone.className}`}>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex-shrink-0">{statusTone.icon}</div>
                <div>
                  <p className="font-semibold">{statusTone.title}</p>
                  <p className="text-sm mt-1">
                    {result?.message || t('redeemPendingBody')}
                  </p>
                  {result?.organizationName && (
                    <p className="text-sm mt-2">
                      {t('portal')} <span className="font-semibold">{result.organizationName}</span>
                    </p>
                  )}
                </div>
              </div>
            </div>

            {(result?.status === 'redeemed' || result?.status === 'already_claimed') && (
              <Button variant="gold" size="sm" className="mt-4" onClick={() => navigate('/dashboard')}>
                {t('redeemContinueDashboard')} <ArrowRight size={16} />
              </Button>
            )}

            {isAuthenticated && user?.role !== 'learner' && (
              <p className="mt-4 text-xs text-gray-500">{t('redeemLearnerOnlyBody')}</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
