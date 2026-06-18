import { Link } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { useLanguage } from '../hooks/useLanguage';
import { privacyPolicy, termsOfService, LegalDoc } from '../data/legalContent';

function LegalLayout({ doc }: { doc: LegalDoc }) {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link to="/" aria-label="Karatou Academy">
            <Logo />
          </Link>
          <LanguageSwitcher />
        </div>
      </header>

      <main id="main-content" className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="font-playfair text-3xl font-bold text-gray-900">{doc.title}</h1>
        <p className="text-sm text-gray-500 mt-1">{doc.updated}</p>
        <p className="text-gray-700 leading-relaxed mt-4">{doc.intro}</p>

        <div className="mt-8 space-y-8">
          {doc.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-semibold text-lg text-gray-900 mb-2">{section.heading}</h2>
              <div className="space-y-2">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-sm text-gray-700 leading-relaxed">{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-10">
          <Link to="/" className="text-blue-600 font-medium hover:underline">{t('backHome')}</Link>
        </p>
      </main>
    </div>
  );
}

export function PrivacyPolicy() {
  const { lang } = useLanguage();
  return <LegalLayout doc={privacyPolicy[lang]} />;
}

export function TermsOfService() {
  const { lang } = useLanguage();
  return <LegalLayout doc={termsOfService[lang]} />;
}
