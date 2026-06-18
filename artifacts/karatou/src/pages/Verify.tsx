import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { Badge } from '../components/Badge';
import { useLearning } from '../hooks/useLearning';
import { useLanguage } from '../hooks/useLanguage';
import { localizeModules } from '../data/localizedContent';
import { fetchCertificateByUid } from '../services/learningRepository';
import { Certificate } from '../types';
import { Ban, CheckCircle2, Shield, XCircle, QrCode } from 'lucide-react';

function normalizeCertificateUid(value?: string) {
  return (value || '').trim().toUpperCase();
}

export function Verify() {
  const { uid } = useParams();
  const [remoteLookup, setRemoteLookup] = useState<{ uid: string; certificate: Certificate | null } | null>(null);
  const { certificates, modules } = useLearning();
  const { lang, t } = useLanguage();
  const normalizedUid = normalizeCertificateUid(uid);
  const localCert = certificates.find((candidate) => normalizeCertificateUid(candidate.uid) === normalizedUid);
  const remoteCert = remoteLookup?.uid === normalizedUid ? remoteLookup.certificate : null;
  const isLoading = Boolean(normalizedUid && !localCert && remoteLookup?.uid !== normalizedUid);
  const cert = localCert || remoteCert;

  useEffect(() => {
    if (!normalizedUid || localCert) {
      return;
    }

    let active = true;
    fetchCertificateByUid(normalizedUid)
      .then((certificate) => {
        if (active) {
          setRemoteLookup({ uid: normalizedUid, certificate });
        }
      })
      .catch(() => {
        if (active) {
          setRemoteLookup({ uid: normalizedUid, certificate: null });
        }
      });

    return () => {
      active = false;
    };
  }, [localCert, normalizedUid]);

  const moduleTitle = cert
    ? localizeModules(modules, lang).find((module) => module.slug === cert.moduleSlug)?.title || cert.moduleName
    : t('unknown');
  const status = cert?.status || 'missing';
  const isValid = status === 'active';
  const isExpired = status === 'expired';
  const isRevoked = status === 'revoked';
  const displayUid = cert?.uid || normalizedUid || uid || '';
  const verificationUrl =
    typeof window === 'undefined'
      ? `https://karatou.academy/verify/${encodeURIComponent(displayUid)}`
      : `${window.location.origin}/verify/${encodeURIComponent(displayUid)}`;
  const statusTone = isValid ? 'emerald' : isExpired ? 'amber' : 'red';
  const statusHeaderClass = {
    emerald: 'bg-emerald-50',
    amber: 'bg-amber-50',
    red: 'bg-red-50',
  }[statusTone];
  const statusTextClass = {
    emerald: 'text-emerald-700',
    amber: 'text-amber-700',
    red: 'text-red-700',
  }[statusTone];
  const statusBodyClass = {
    emerald: 'text-emerald-600',
    amber: 'text-amber-600',
    red: 'text-red-600',
  }[statusTone];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-3">
            <Logo variant="default" />
          </div>
          <p className="text-sm text-gray-500">karatou.academy/verify</p>
        </div>

        <div className="bg-white rounded-2xl shadow-blue-md overflow-hidden">
          <div className={`px-6 py-5 text-center ${statusHeaderClass}`}>
            {isValid ? (
              <>
                <CheckCircle2 size={40} className="text-emerald-500 mx-auto mb-2" />
                <h1 className="font-playfair text-xl font-bold text-emerald-700">{t('verifiedCertificate')}</h1>
                <p className="text-sm text-emerald-600 mt-1">{t('validCertificateBody')}</p>
              </>
            ) : (
              <>
                {isRevoked ? (
                  <Ban size={40} className="text-red-500 mx-auto mb-2" />
                ) : (
                  <XCircle size={40} className={`${isExpired ? 'text-amber-500' : 'text-red-500'} mx-auto mb-2`} />
                )}
                <h1 className={`font-playfair text-xl font-bold ${statusTextClass}`}>
                  {isLoading
                    ? t('loading')
                    : isRevoked
                      ? t('revokedCertificate')
                      : isExpired
                        ? t('expiredCertificate')
                        : t('certificateNotFound')}
                </h1>
                <p className={`text-sm mt-1 ${statusBodyClass}`}>
                  {isLoading
                    ? t('loadingContent')
                    : isRevoked
                      ? t('revokedCertificateBody')
                      : isExpired
                        ? `${t('expiredCertificateBody')} ${cert?.expiresAt || '-'}`
                        : t('invalidCertBody')}
                </p>
              </>
            )}
          </div>

          <div className="px-6 py-6 space-y-4">
            <div className="flex justify-between items-start">
              <span className="text-sm text-gray-500">{t('holder')}</span>
              <span className="text-sm font-semibold text-gray-900 text-right">{cert?.userName || t('unknown')}</span>
            </div>
            <div className="flex justify-between items-start">
              <span className="text-sm text-gray-500">{t('module')}</span>
              <span className="text-sm font-semibold text-gray-900 text-right">{moduleTitle}</span>
            </div>
            <div className="flex justify-between items-start">
              <span className="text-sm text-gray-500">{t('issued')}</span>
              <span className="text-sm text-gray-700">{cert?.issuedAt || '-'}</span>
            </div>
            <div className="flex justify-between items-start">
              <span className="text-sm text-gray-500">{t('validUntil')}</span>
              <span className="text-sm text-gray-700">{cert?.expiresAt || '-'}</span>
            </div>
            <div className="flex justify-between items-start">
              <span className="text-sm text-gray-500">{t('status')}</span>
              {isValid ? (
                <Badge variant="green">{t('active').toUpperCase()}</Badge>
              ) : isExpired ? (
                <Badge variant="gold">{t('expired')}</Badge>
              ) : isRevoked ? (
                <Badge variant="red">{t('revoked')}</Badge>
              ) : (
                <Badge variant="red">{t('invalid')}</Badge>
              )}
            </div>
            <div className="flex justify-between items-start">
              <span className="text-sm text-gray-500">ID</span>
              <span className="text-sm font-mono text-gray-700 text-right break-all">{displayUid}</span>
            </div>
          </div>

          <div className="border-t border-gray-100 px-6 py-5 flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <QrCode size={32} className="text-gray-400" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <Shield size={14} className="text-blue-500" />
                <span className="text-xs font-medium text-blue-600">{t('issuedBy')}</span>
              </div>
              <p className="text-xs text-gray-500">
                {t('verifyFooter')}
              </p>
              <p className="mt-2 text-xs font-medium text-gray-700">{t('verificationUrl')}</p>
              <p className="text-xs font-mono text-gray-500 break-all">{verificationUrl}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
