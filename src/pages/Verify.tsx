import { formatLongDate } from '../lib/dates';
import { FormEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { useLearning } from '../hooks/useLearning';
import { useLanguage } from '../hooks/useLanguage';
import { localizeModules } from '../data/localizedContent';
import { fetchCertificateByUid } from '../services/learningRepository';
import { isDemoEnabled } from '../lib/demoMode';
import { certificateVerifyUrl, VERIFY_DISPLAY_HOST } from '../lib/verification';
import { ShareCertificateButtons } from '../components/ShareCertificateButtons';
import { Certificate } from '../types';
import { AlertCircle, Ban, CheckCircle2, Shield, XCircle, QrCode, Search } from 'lucide-react';

function normalizeCertificateUid(value?: string) {
  return (value || '').trim().toUpperCase();
}

/**
 * ID entry form. `/verify` is the address printed on every certificate PDF, so
 * it must be a working page, not a 404; it also sits under each verdict.
 */
function CertificateLookupForm({ initialValue = '', asPageTitle = false }: { initialValue?: string; asPageTitle?: boolean }) {
  const Heading = asPageTitle ? 'h1' : 'h2';
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [value, setValue] = useState(initialValue);
  const submit = (event: FormEvent) => {
    event.preventDefault();
    const id = normalizeCertificateUid(value);
    if (id) navigate(`/verify/${encodeURIComponent(id)}`);
  };
  return (
    <form onSubmit={submit} className="bg-white rounded-2xl shadow-blue-sm border border-gray-100 p-5">
      <div className="flex items-center gap-2 mb-2">
        <Search size={16} className="text-blue-500" aria-hidden="true" />
        <Heading className="font-semibold text-gray-900">{t('verifyLookupTitle')}</Heading>
      </div>
      <p className="text-body text-gray-500 mb-3">{t('verifyLookupIntro')}</p>
      <label htmlFor="certificate-id" className="text-meta font-medium text-gray-700">{t('verifyLookupLabel')}</label>
      <input
        id="certificate-id"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        autoCapitalize="characters"
        autoComplete="off"
        spellCheck={false}
        placeholder="KA-2026-INT-1A2B3C"
        className="mt-1.5 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-body font-mono outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
      />
      <Button type="submit" variant="primary" size="sm" className="mt-3" disabled={!value.trim()}>
        {t('verifyLookupBtn')}
      </Button>
    </form>
  );
}

export function Verify() {
  const { uid } = useParams();
  if (!uid) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <main id="main-content" className="w-full max-w-lg">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-3"><Logo variant="default" /></div>
            <p className="text-body text-gray-500">{VERIFY_DISPLAY_HOST}/verify</p>
          </div>
          <CertificateLookupForm asPageTitle />
        </main>
      </div>
    );
  }
  return <CertificateVerdict uid={uid} />;
}

function CertificateVerdict({ uid }: { uid: string }) {
  const [remoteLookup, setRemoteLookup] = useState<
    { uid: string; attempt: number; certificate: Certificate | null; failed: boolean } | null
  >(null);
  // Bumped by "Try again" after a network failure.
  const [attempt, setAttempt] = useState(0);
  const { certificates, modules } = useLearning();
  const { lang, t } = useLanguage();
  const normalizedUid = normalizeCertificateUid(uid);
  // Only trust local (demo seed) certificates in demo mode. In production, /verify is
  // authoritative on the server RPC so fabricated demo UIDs can never pass verification.
  const localCert = isDemoEnabled
    ? certificates.find((candidate) => normalizeCertificateUid(candidate.uid) === normalizedUid)
    : undefined;
  const currentLookup =
    remoteLookup?.uid === normalizedUid && remoteLookup.attempt === attempt ? remoteLookup : null;
  const remoteCert = currentLookup ? currentLookup.certificate : null;
  const isLoading = Boolean(normalizedUid && !localCert && !currentLookup);
  // A dropped connection is not a verdict: never call a genuine certificate
  // "invalid" because the lookup could not reach the server.
  const isUnavailable = Boolean(!localCert && currentLookup?.failed);
  const cert = localCert || remoteCert;

  useEffect(() => {
    if (!normalizedUid || localCert) {
      return;
    }

    let active = true;
    fetchCertificateByUid(normalizedUid)
      .then((certificate) => {
        if (active) {
          setRemoteLookup({ uid: normalizedUid, attempt, certificate, failed: false });
        }
      })
      .catch(() => {
        if (active) {
          setRemoteLookup({ uid: normalizedUid, attempt, certificate: null, failed: true });
        }
      });

    return () => {
      active = false;
    };
  }, [localCert, normalizedUid, attempt]);

  const moduleTitle = cert
    ? localizeModules(modules, lang).find((module) => module.slug === cert.moduleSlug)?.title || cert.moduleName
    : t('unknown');
  const status = cert?.status || 'missing';
  const isValid = status === 'active';
  const isExpired = status === 'expired';
  const isRevoked = status === 'revoked';
  const displayUid = cert?.uid || normalizedUid || uid || '';
  const verificationUrl = certificateVerifyUrl(displayUid);
  const statusTone = isUnavailable || isLoading ? 'gray' : isValid ? 'emerald' : isExpired ? 'amber' : 'red';
  const statusHeaderClass = {
    emerald: 'bg-emerald-50',
    amber: 'bg-amber-50',
    red: 'bg-red-50',
    gray: 'bg-gray-100',
  }[statusTone];
  const statusTextClass = {
    emerald: 'text-emerald-700',
    amber: 'text-amber-700',
    red: 'text-red-700',
    gray: 'text-gray-700',
  }[statusTone];
  const statusBodyClass = {
    emerald: 'text-emerald-700',
    amber: 'text-amber-800',
    red: 'text-red-600',
    gray: 'text-gray-600',
  }[statusTone];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <main id="main-content" className="w-full max-w-lg">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-3">
            <Logo variant="default" />
          </div>
          <p className="text-body text-gray-500">{VERIFY_DISPLAY_HOST}/verify</p>
        </div>

        <div className="bg-white rounded-2xl shadow-blue-md overflow-hidden">
          <div className={`px-6 py-5 text-center ${statusHeaderClass}`}>
            {isUnavailable ? (
              <div role="status">
                <AlertCircle size={40} className="text-gray-400 mx-auto mb-2" />
                <h1 className="font-heading text-h3 text-gray-700">{t('attUnavailable')}</h1>
                <p className="text-body text-gray-600 mt-1">{t('attUnavailableBody')}</p>
                <Button variant="outline" size="sm" className="mt-3" onClick={() => setAttempt((value) => value + 1)}>
                  {t('retry')}
                </Button>
              </div>
            ) : isValid ? (
              <>
                <CheckCircle2 size={40} className="text-emerald-500 mx-auto mb-2" />
                <h1 className="font-heading text-h3 text-emerald-700">{t('verifiedCertificate')}</h1>
                <p className="text-body text-emerald-700 mt-1">{t('validCertificateBody')}</p>
              </>
            ) : (
              <>
                {isRevoked ? (
                  <Ban size={40} className="text-red-500 mx-auto mb-2" />
                ) : (
                  <XCircle size={40} className={`${isExpired ? 'text-amber-500' : 'text-red-500'} mx-auto mb-2`} />
                )}
                <h1 className={`font-heading text-h3 ${statusTextClass}`}>
                  {isLoading
                    ? t('loading')
                    : isRevoked
                      ? t('revokedCertificate')
                      : isExpired
                        ? t('expiredCertificate')
                        : t('certificateNotFound')}
                </h1>
                <p className={`text-body mt-1 ${statusBodyClass}`}>
                  {isLoading
                    ? t('loadingContent')
                    : isRevoked
                      ? t('revokedCertificateBody')
                      : isExpired
                        ? `${t('expiredCertificateBody')} ${formatLongDate(cert?.expiresAtIso || cert?.expiresAt, lang) || '-'}`
                        : t('invalidCertBody')}
                </p>
              </>
            )}
          </div>

          <div className="px-6 py-6 space-y-4">
            <div className="flex justify-between items-start">
              <span className="text-body text-gray-500">{t('holder')}</span>
              <span className="text-body font-semibold text-gray-900 text-right">{cert?.userName || t('unknown')}</span>
            </div>
            <div className="flex justify-between items-start">
              <span className="text-body text-gray-500">{t('module')}</span>
              <span className="text-body font-semibold text-gray-900 text-right">{moduleTitle}</span>
            </div>
            <div className="flex justify-between items-start">
              <span className="text-body text-gray-500">{t('issued')}</span>
              <span className="text-body text-gray-700">{formatLongDate(cert?.issuedAtIso || cert?.issuedAt, lang) || '-'}</span>
            </div>
            <div className="flex justify-between items-start">
              <span className="text-body text-gray-500">{t('validUntil')}</span>
              <span className="text-body text-gray-700">{formatLongDate(cert?.expiresAtIso || cert?.expiresAt, lang) || '-'}</span>
            </div>
            <div className="flex justify-between items-start">
              <span className="text-body text-gray-500">{t('status')}</span>
              {isValid ? (
                <Badge variant="green">{t('active').toUpperCase()}</Badge>
              ) : isExpired ? (
                <Badge variant="gold">{t('expired')}</Badge>
              ) : isRevoked ? (
                <Badge variant="red">{t('revoked')}</Badge>
              ) : (
                <Badge variant={isUnavailable || isLoading ? 'gray' : 'red'}>{isUnavailable || isLoading ? '—' : t('invalid')}</Badge>
              )}
            </div>
            <div className="flex justify-between items-start">
              <span className="text-body text-gray-500">ID</span>
              <span className="text-body font-mono text-gray-700 text-right break-all">{displayUid}</span>
            </div>
          </div>

          <div className="border-t border-gray-100 px-6 py-5 flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <QrCode size={32} className="text-gray-400" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <Shield size={14} className="text-blue-500" />
                <span className="text-meta font-medium text-blue-600">{t('issuedBy')}</span>
              </div>
              <p className="text-meta text-gray-500">
                {t('verifyFooter')}
              </p>
              <p className="mt-2 text-meta font-medium text-gray-700">{t('verificationUrl')}</p>
              <p className="text-meta font-mono text-gray-500 break-all">{verificationUrl}</p>
            </div>
          </div>

          {isValid && cert && (
            <div className="border-t border-gray-100 px-6 py-4 bg-gray-50">
              <ShareCertificateButtons
                url={verificationUrl}
                moduleName={moduleTitle}
                holderName={cert.userName}
              />
            </div>
          )}
        </div>
        <div className="mt-6">
          <CertificateLookupForm key={displayUid} />
        </div>
      </main>
    </div>
  );
}
