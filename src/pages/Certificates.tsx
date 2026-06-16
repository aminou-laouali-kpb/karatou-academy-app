import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { StudentNav } from '../layouts/StudentNav';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { ProgressBar } from '../components/ProgressBar';
import { useAuth } from '../hooks/useAuth';
import { useLearning } from '../hooks/useLearning';
import { useLanguage } from '../hooks/useLanguage';
import { localizeModules } from '../data/localizedContent';
import { Certificate } from '../types';
import { Download, ExternalLink, RotateCw, GraduationCap, Shield, BookOpen } from 'lucide-react';

function downloadCertificate(certificate: Certificate) {
  const verificationUrl =
    typeof window === 'undefined'
      ? `https://karatou.academy/verify/${encodeURIComponent(certificate.uid)}`
      : `${window.location.origin}/verify/${encodeURIComponent(certificate.uid)}`;
  const content = [
    'Karatou Academy - Certification Officielle',
    '',
    `Titulaire: ${certificate.userName}`,
    `Module: ${certificate.moduleName}`,
    `ID: ${certificate.uid}`,
    `Delivre: ${certificate.issuedAt}`,
    `Valide jusqu'au: ${certificate.expiresAt}`,
    `Statut: ${certificate.status}`,
    `Verification: ${verificationUrl}`,
  ].join('\n');
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${certificate.uid}.txt`;
  link.click();
  URL.revokeObjectURL(url);
}

export function Certificates() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { lang, t } = useLanguage();
  const { modules, getUserCertificates, getProgress, issueCertificate } = useLearning();
  const localizedModules = useMemo(() => localizeModules(modules, lang), [modules, lang]);
  const certificates = user ? getUserCertificates(user.id) : [];
  const activeCertificates = certificates.filter((certificate) => certificate.status === 'active');
  const readyModules = localizedModules.filter(
    (module) =>
      getProgress(module.slug) >= 100 &&
      !activeCertificates.some((certificate) => certificate.moduleSlug === module.slug)
  );
  const primaryCert = activeCertificates[0];
  const primaryModuleTitle = primaryCert
    ? localizedModules.find((module) => module.slug === primaryCert.moduleSlug)?.title || primaryCert.moduleName
    : '';

  const handleIssue = (moduleSlug: string) => {
    if (!user) {
      return;
    }

    issueCertificate(user, moduleSlug);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <StudentNav />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-8">
          <h1 className="font-playfair text-3xl font-bold text-gray-900">{t('certificatesTitle')}</h1>
          <p className="text-gray-500 mt-1">{t('certificatesSubtitle')}</p>
        </div>

        {readyModules.length > 0 && (
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 mb-6">
            <p className="font-semibold text-emerald-800 mb-2">{t('readyCertTitle')}</p>
            <p className="text-sm text-emerald-700 mb-4">
              {t('readyCertBody')}
            </p>
            <div className="flex flex-wrap gap-3">
              {readyModules.map((module) => (
                <Button key={module.slug} variant="primary" size="sm" onClick={() => handleIssue(module.slug)}>
                  {t('issue')} {module.title}
                </Button>
              ))}
            </div>
          </div>
        )}

        {!primaryCert ? (
          <div className="bg-white rounded-2xl shadow-blue-sm p-10 text-center mb-10">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap size={28} className="text-gray-400" />
            </div>
            <p className="font-semibold text-gray-700 mb-2">{t('noActiveCert')}</p>
            <p className="text-sm text-gray-500 mb-5">{t('finishAllLessons')}</p>
            <Button variant="primary" size="sm" onClick={() => navigate('/learn')}>
              {t('continueCourses')}
            </Button>
          </div>
        ) : (
          <>
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-6 sm:p-8 mb-6 relative overflow-hidden">
              <div className="absolute top-4 right-4 w-12 h-12 bg-gold-400/20 rounded-full flex items-center justify-center">
                <GraduationCap size={24} className="text-gold-400" />
              </div>
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full translate-x-1/4 translate-y-1/4" />

              <div className="relative">
                <div className="flex items-center gap-2 mb-6">
                  <Shield size={16} className="text-blue-300" />
                  <p className="text-sm text-blue-300 font-medium">{t('officialCertification')}</p>
                </div>

                <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">{t('certifyThat')}</p>
                <h2 className="font-playfair text-2xl font-bold text-white mb-1">{primaryCert.userName}</h2>
                <p className="text-gray-300 mb-6">{t('completedSuccessfully')}</p>
                <h3 className="font-playfair text-xl font-bold text-gold-400 mb-8">
                  {primaryModuleTitle}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">{t('issued')}</p>
                    <p className="text-sm text-white font-medium mt-0.5">{primaryCert.issuedAt}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">{t('validUntil')}</p>
                    <p className="text-sm text-white font-medium mt-0.5">{primaryCert.expiresAt}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">{t('status')}</p>
                    <Badge variant="green" className="mt-1">{t('active')}</Badge>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <p className="font-mono text-sm text-blue-300">{primaryCert.uid}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-12">
              <Button variant="outline" size="sm" onClick={() => downloadCertificate({ ...primaryCert, moduleName: primaryModuleTitle })}>
                <Download size={16} /> {t('downloadCertificate')}
              </Button>
              <Button variant="primary" size="sm" onClick={() => navigate(`/verify/${primaryCert.uid}`)}>
                <ExternalLink size={16} /> {t('verifyOnline')}
              </Button>
              <Button variant="ghost" size="sm" disabled>
                <RotateCw size={16} /> {t('renewIn')} {primaryCert.daysLeft} {t('days')}
              </Button>
            </div>
          </>
        )}

        <h2 className="font-playfair text-xl font-bold text-gray-900 mb-4">{t('moduleStatus')}</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {localizedModules.map((module) => {
            const progress = getProgress(module.slug);
            const certificate = activeCertificates.find((item) => item.moduleSlug === module.slug);

            return (
              <div key={module.id} className="bg-white rounded-2xl p-5 border border-gray-200">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{module.emoji}</span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{module.title}</h3>
                    <p className="text-xs text-gray-500 mb-3">{module.subtitle}</p>
                    <div className="flex items-center gap-3">
                      <BookOpen size={14} className="text-gray-400" />
                      <div className="flex-1">
                        <ProgressBar value={progress} />
                      </div>
                      <span className="text-xs text-gray-500">{progress}%</span>
                    </div>
                  </div>
                  {certificate ? <Badge variant="green">{t('certified')}</Badge> : <Badge variant="gray">{t('inProgress')}</Badge>}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
