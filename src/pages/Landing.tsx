import { Link, useNavigate } from 'react-router-dom';
import { MarketingNav } from '../layouts/MarketingNav';
import { Button } from '../components/Button';
import { ModuleCard } from '../components/ModuleCard';
import { Logo } from '../components/Logo';
import { NewsletterPopup } from '../components/NewsletterPopup';
import { ImpactStats } from '../components/ImpactStats';
import { useLanguage } from '../hooks/useLanguage';
import { useLearning } from '../hooks/useLearning';
import { GraduationCap, Globe, Building2, Check, Star } from 'lucide-react';

export function Landing() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { modules } = useLearning();
  const publishedModules = modules.filter((module) => module.status !== 'draft');

  return (
    <div className="min-h-screen">
      <MarketingNav />
      <NewsletterPopup />

      {/* Hero */}
      <section className="relative bg-blue-900 pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-400/8 rounded-full blur-[100px]" />

        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-display sm:text-display-lg lg:text-display-xl text-white mb-6">
            {t('heroTitle1')}
            <br />{t('heroTitle2')}
            <br /><span className="text-gold-400">{t('heroTitle3')}</span>
          </h1>
          <p className="text-gray-400 text-body-lg mb-10 max-w-xl mx-auto">
            {t('heroSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button variant="primary" size="lg" onClick={() => navigate('/dashboard')}>
              {t('startFree')}
            </Button>
            <Button variant="outline" size="lg" onClick={() => navigate('/dashboard')} className="border-white/30 text-white hover:bg-white/10">
              {t('seeModules')}
            </Button>
          </div>

          <ImpactStats
            variant="hero"
            modulesCount={publishedModules.length}
            fallback={{ learners: '—', certificates: '—', countries: '—' }}
          />
          <p className="text-center text-meta text-gray-500 mt-3">{t('impactDisclaimer')}</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-h1 text-center text-gray-900 mb-12">
            {t('whyTitle')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <GraduationCap size={24} className="text-blue-500" />,
                bg: 'bg-blue-50',
                title: t('featureCertTitle'),
                desc: t('featureCertDesc'),
              },
              {
                icon: <Globe size={24} className="text-gold-500" />,
                bg: 'bg-gold-50',
                title: t('featureLangTitle'),
                desc: t('featureLangDesc'),
              },
              {
                icon: <Building2 size={24} className="text-emerald-600" />,
                bg: 'bg-emerald-50',
                title: t('featureOrgTitle'),
                desc: t('featureOrgDesc'),
              },
            ].map((f) => (
              <div key={f.title} className="bg-gray-50 rounded-2xl p-7 hover:shadow-blue-md hover:-translate-y-1 transition-all duration-200">
                <div className={`w-12 h-12 rounded-xl ${f.bg} flex items-center justify-center mb-4`}>
                  {f.icon}
                </div>
                <h3 className="font-heading text-title text-gray-900 mb-2">{f.title}</h3>
                <p className="text-body text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section id="modules" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-h1 text-center text-gray-900 mb-3">
            {t('ourModules')}
          </h2>
          <p className="text-center text-gray-500 mb-12">{t('modulesSubtitle')}</p>
          <div className="grid md:grid-cols-3 gap-6">
            {publishedModules.map((m) => (
              <ModuleCard key={m.id} module={m} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-h1 text-center text-gray-900 mb-3">
            {t('pricingTitle')}
          </h2>
          <p className="text-center text-gray-500 mb-12">{t('pricingSubtitle')}</p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Free */}
            <div className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-blue-md transition-all duration-200">
              <p className="text-eyebrow text-gray-500 mb-2">{t('freePlan')}</p>
              <p className="font-heading text-h1 text-gray-900 mb-1">0 <span className="text-body-lg font-sans text-gray-500">FCFA</span></p>
              <p className="text-body text-gray-400 mb-6">{t('discoverPlan')}</p>
              <ul className="space-y-3 mb-8">
                {[t('freeFeature1'), t('freeFeature2'), t('freeFeature3')].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-body text-gray-600">
                    <Check size={16} className="text-gray-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="outline" size="md" className="w-full" onClick={() => navigate('/dashboard')}>
                {t('start')}
              </Button>
            </div>

            {/* Certificate - Popular */}
            <div className="relative bg-white border-2 border-gold-400 rounded-2xl p-7 shadow-gold-md hover:shadow-blue-lg transition-all duration-200">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-gradient-gold text-white text-meta font-semibold px-4 py-1 rounded-full flex items-center gap-1">
                  <Star size={12} /> {t('popular')}
                </span>
              </div>
              <p className="text-eyebrow text-gold-600 mb-2">{t('certificatePlan')}</p>
              <p className="font-heading text-h1 text-gray-900 mb-1">7 500 <span className="text-body-lg font-sans text-gray-500">FCFA</span></p>
              <p className="text-body text-gray-400 mb-6">{t('perModule')}</p>
              <ul className="space-y-3 mb-8">
                {[t('certificateFeature1'), t('certificateFeature2'), t('certificateFeature3'), t('certificateFeature4')].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-body text-gray-700">
                    <Check size={16} className="text-gold-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="gold" size="md" className="w-full" onClick={() => navigate('/dashboard')}>
                {t('getCertificate')}
              </Button>
            </div>

            {/* Plus */}
            <div className="bg-white border-2 border-blue-200 rounded-2xl p-7 hover:shadow-blue-md transition-all duration-200">
              <p className="text-eyebrow text-blue-600 mb-2">{t('plusPlan')}</p>
              <p className="font-heading text-h1 text-gray-900 mb-1">90 000 <span className="text-body-lg font-sans text-gray-500">FCFA/an</span></p>
              <p className="text-body text-gray-400 mb-6">{t('allIncluded')}</p>
              <ul className="space-y-3 mb-8">
                {[t('plusFeature1'), t('plusFeature2'), t('plusFeature3'), t('plusFeature4')].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-body text-gray-700">
                    <Check size={16} className="text-blue-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="primary" size="md" className="w-full" onClick={() => navigate('/dashboard')}>
                {t('subscribe')}
              </Button>
            </div>
          </div>

          <p className="text-center text-body text-gray-500 mt-8">
            {t('orgPricing')} → <button onClick={() => navigate('/enterprise')} className="text-blue-500 font-medium hover:underline">{t('contactEnterprise')}</button>
          </p>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-eyebrow text-gray-500 mb-8">{t('trustedBy')}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {['PNUD', t('ministryEducation'), 'ONG Sahel Tech', t('universityNiamey'), 'Banque Sahel'].map((p) => (
              <span key={p} className="bg-white border border-gray-200 text-gray-600 text-body font-medium px-6 py-2.5 rounded-full">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-start mb-8">
            <div>
              <Logo variant="dark" />
              <p className="text-gray-400 text-body mt-3">{t('footerTagline')}</p>
            </div>
            <div className="flex flex-wrap gap-6 justify-center">
              {[t('modules'), t('pricing'), t('enterprise'), t('about')].map((link) => (
                <a key={link} href="#" className="text-body text-gray-400 hover:text-white transition-colors">
                  {link}
                </a>
              ))}
            </div>
            <div className="text-right">
              <p className="text-body text-gray-300">karatou.academy</p>
              <p className="text-meta text-gray-500 mt-1">FR · EN · HA</p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-center gap-x-4 gap-y-2 text-center">
            <p className="text-meta text-gray-500">&copy; 2026 Karatou Academy - {t('copyright')}</p>
            <Link to="/privacy" className="text-meta text-gray-400 hover:text-white transition-colors">{t('footerPrivacy')}</Link>
            <Link to="/terms" className="text-meta text-gray-400 hover:text-white transition-colors">{t('footerTerms')}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
