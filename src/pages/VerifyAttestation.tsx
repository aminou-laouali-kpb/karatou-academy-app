import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AlertCircle, Ban, CheckCircle2, ShieldCheck, XCircle } from 'lucide-react';
import { Logo } from '../components/Logo';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { useLanguage } from '../hooks/useLanguage';
import { verifyAttestation, VerificationResult } from '../services/attestationVerify';
import type { AttestationPayload as CertificatePayload } from '../lib/attestationPayload';
import { decodeAttestationPayload } from '../lib/attestationPayload';
import { VERIFY_DISPLAY_HOST } from '../lib/verification';

const inputClass =
  'mt-1.5 w-full h-24 rounded-xl border border-gray-200 px-3 py-2 text-body font-mono outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15';

export function VerifyAttestation() {
  const { hash } = useLocation();
  const { t } = useLanguage();
  const [manual, setManual] = useState('');
  const [manualResult, setManualResult] = useState<VerificationResult | null>(null);
  const [hashResult, setHashResult] = useState<VerificationResult | null>(null);

  // Decode the scanned QR (URL hash) during render; verify it (async) in an effect.
  const hashPayload = useMemo(() => {
    const raw = hash.replace(/^#/, '');
    if (!raw) return undefined;
    return decodeAttestationPayload(raw);
  }, [hash]);

  useEffect(() => {
    if (hashPayload === undefined) return;
    let active = true;
    const run = hashPayload
      ? verifyAttestation(hashPayload)
      : Promise.resolve<VerificationResult>({ status: 'invalid' });
    run.then((value) => { if (active) setHashResult(value); });
    return () => { active = false; };
  }, [hashPayload]);

  const result = manualResult ?? hashResult;

  const verifyManual = async () => {
    const trimmed = manual.trim();
    if (!trimmed) return;
    let payload: CertificatePayload | null = null;
    if (trimmed.startsWith('{')) {
      try {
        payload = JSON.parse(trimmed) as CertificatePayload;
      } catch {
        payload = null;
      }
    } else {
      const fragment = trimmed.includes('#') ? trimmed.slice(trimmed.indexOf('#') + 1) : trimmed;
      payload = decodeAttestationPayload(fragment);
    }
    setManualResult(payload?.signature ? await verifyAttestation(payload) : { status: 'invalid' });
  };

  const status = result?.status;
  const isValid = status === 'valid';
  const isExpired = status === 'expired';
  // A revoked attestation was genuinely issued, then withdrawn: it must never
  // read as authentic, and never as a forgery either.
  const isRevoked = status === 'revoked';
  // The service could not be reached. This is not a verdict on the document:
  // showing "forged" here would accuse a genuine holder over a dropped 2G link.
  const isUnavailable = status === 'unavailable';
  const cert = result?.payload;

  const headerClass = isUnavailable ? 'bg-gray-100' : isValid ? 'bg-emerald-50' : isExpired ? 'bg-amber-50' : 'bg-red-50';
  const titleClass = isUnavailable ? 'text-gray-700' : isValid ? 'text-emerald-700' : isExpired ? 'text-amber-700' : 'text-red-700';
  const bodyClass = isUnavailable ? 'text-gray-600' : isValid ? 'text-emerald-600' : isExpired ? 'text-amber-600' : 'text-red-600';

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <main id="main-content" className="w-full max-w-lg">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-3"><Logo variant="default" /></div>
          <p className="text-body text-gray-500">{VERIFY_DISPLAY_HOST}/verify-attestation</p>
        </div>

        {result && (
          <div className="bg-white rounded-2xl shadow-blue-md overflow-hidden mb-6">
            <div className={`px-6 py-5 text-center ${headerClass}`}>
              {isUnavailable ? <AlertCircle size={40} className="text-gray-400 mx-auto mb-2" />
                : isValid ? <CheckCircle2 size={40} className="text-emerald-500 mx-auto mb-2" />
                : isExpired ? <XCircle size={40} className="text-amber-500 mx-auto mb-2" />
                : <Ban size={40} className="text-red-500 mx-auto mb-2" />}
              <h1 className={`font-heading text-h3 ${titleClass}`}>
                {isUnavailable ? t('attUnavailable')
                  : isValid ? t('attValid') : isExpired ? t('attExpired') : isRevoked ? t('attRevoked') : t('attInvalid')}
              </h1>
              <p className={`text-body mt-1 ${bodyClass}`}>
                {isUnavailable ? t('attUnavailableBody')
                  : isValid || isExpired ? t('attValidBody') : isRevoked ? t('attRevokedBody') : t('attInvalidBody')}
              </p>
            </div>

            {cert && status !== 'invalid' && status !== 'unavailable' && (
              <div className="px-6 py-6 space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-body text-gray-500">{t('holder')}</span>
                  <span className="text-body font-semibold text-gray-900 text-right">{cert.name}</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-body text-gray-500">{t('issued')}</span>
                  <span className="text-body text-gray-700">{cert.issuedAt}</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-body text-gray-500">{t('validUntil')}</span>
                  <span className="text-body text-gray-700">{cert.expiresAt}</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-body text-gray-500">{t('status')}</span>
                  {isValid ? <Badge variant="green">{t('active').toUpperCase()}</Badge>
                    : isRevoked ? <Badge variant="red">{t('regRevokedBadge')}</Badge>
                    : <Badge variant="gold">{t('expired')}</Badge>}
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-body text-gray-500">ID</span>
                  <span className="text-body font-mono text-gray-700 text-right break-all">{cert.id}</span>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-blue-sm border border-gray-100 p-5">
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck size={16} className="text-blue-500" />
            <h2 className="font-semibold text-gray-900">{t('attVerifyTitle')}</h2>
          </div>
          <p className="text-body text-gray-500 mb-3">{t('attVerifyIntro')}</p>
          <textarea
            value={manual}
            onChange={(event) => setManual(event.target.value)}
            placeholder={t('attPastePlaceholder')}
            className={inputClass}
          />
          <Button variant="primary" size="sm" className="mt-3" onClick={verifyManual} disabled={!manual.trim()}>
            {t('attVerifyBtn')}
          </Button>
        </div>
      </main>
    </div>
  );
}
