import { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Ban, CheckCircle2, ShieldCheck, XCircle } from 'lucide-react';
import { Logo } from '../components/Logo';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { useLanguage } from '../hooks/useLanguage';
import {
  decodeAttestationPayload, verifyAttestation, CertificatePayload, VerificationResult,
} from '../services/attestationGenerator';

const inputClass =
  'mt-1.5 w-full h-24 rounded-xl border border-gray-200 px-3 py-2 text-sm font-mono outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15';

export function VerifyAttestation() {
  const { hash } = useLocation();
  const { t } = useLanguage();
  const [manual, setManual] = useState('');
  const [manualResult, setManualResult] = useState<VerificationResult | null>(null);

  // Result from the scanned QR (URL hash) is derived during render.
  const hashResult = useMemo<VerificationResult | null>(() => {
    const raw = hash.replace(/^#/, '');
    if (!raw) return null;
    const payload = decodeAttestationPayload(raw);
    return payload ? verifyAttestation(payload) : { status: 'invalid' };
  }, [hash]);
  const result = manualResult ?? hashResult;

  const verifyManual = () => {
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
    setManualResult(payload?.signature ? verifyAttestation(payload) : { status: 'invalid' });
  };

  const status = result?.status;
  const isValid = status === 'valid';
  const isExpired = status === 'expired';
  const cert = result?.payload;

  const headerClass = isValid ? 'bg-emerald-50' : isExpired ? 'bg-amber-50' : 'bg-red-50';
  const titleClass = isValid ? 'text-emerald-700' : isExpired ? 'text-amber-700' : 'text-red-700';
  const bodyClass = isValid ? 'text-emerald-600' : isExpired ? 'text-amber-600' : 'text-red-600';

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <main id="main-content" className="w-full max-w-lg">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-3"><Logo variant="default" /></div>
          <p className="text-sm text-gray-500">karatou.academy/verify-attestation</p>
        </div>

        {result && (
          <div className="bg-white rounded-2xl shadow-blue-md overflow-hidden mb-6">
            <div className={`px-6 py-5 text-center ${headerClass}`}>
              {isValid ? <CheckCircle2 size={40} className="text-emerald-500 mx-auto mb-2" />
                : isExpired ? <XCircle size={40} className="text-amber-500 mx-auto mb-2" />
                : <Ban size={40} className="text-red-500 mx-auto mb-2" />}
              <h1 className={`font-playfair text-xl font-bold ${titleClass}`}>
                {isValid ? t('attValid') : isExpired ? t('attExpired') : t('attInvalid')}
              </h1>
              <p className={`text-sm mt-1 ${bodyClass}`}>
                {isValid || isExpired ? t('attValidBody') : t('attInvalidBody')}
              </p>
            </div>

            {cert && status !== 'invalid' && (
              <div className="px-6 py-6 space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-sm text-gray-500">{t('holder')}</span>
                  <span className="text-sm font-semibold text-gray-900 text-right">{cert.name}</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-sm text-gray-500">{t('issued')}</span>
                  <span className="text-sm text-gray-700">{cert.issuedAt}</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-sm text-gray-500">{t('validUntil')}</span>
                  <span className="text-sm text-gray-700">{cert.expiresAt}</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-sm text-gray-500">{t('status')}</span>
                  {isValid ? <Badge variant="green">{t('active').toUpperCase()}</Badge> : <Badge variant="gold">{t('expired')}</Badge>}
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-sm text-gray-500">ID</span>
                  <span className="text-sm font-mono text-gray-700 text-right break-all">{cert.id}</span>
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
          <p className="text-sm text-gray-500 mb-3">{t('attVerifyIntro')}</p>
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
