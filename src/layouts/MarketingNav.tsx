import { Link, useNavigate } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { Button } from '../components/Button';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { useLanguage } from '../hooks/useLanguage';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function MarketingNav() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-blue-900/95 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Logo variant="dark" />

        <div className="hidden md:flex items-center gap-8">
          <a href="#modules" className="text-body text-gray-200 hover:text-white transition-colors">{t('modules')}</a>
          <a href="#pricing" className="text-body text-gray-200 hover:text-white transition-colors">{t('pricing')}</a>
          <Link to="/enterprise" className="text-body text-gray-200 hover:text-white transition-colors">{t('enterprise')}</Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher variant="dark" />
          <Button variant="ghost" size="sm" onClick={() => navigate('/login')} className="text-gray-200 hover:text-white hover:bg-white/10">
            {t('login')}
          </Button>
          <Button variant="primary" size="sm" onClick={() => navigate('/register')}>
            {t('start')}
          </Button>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label={open ? t('closeMenu') : t('openMenu')}
          aria-expanded={open}
        >
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-blue-900 border-t border-white/10 px-4 py-4 space-y-3">
          <a href="#modules" className="block text-body text-gray-200">{t('modules')}</a>
          <a href="#pricing" className="block text-body text-gray-200">{t('pricing')}</a>
          <Link to="/enterprise" className="block text-body text-gray-200">{t('enterprise')}</Link>
          <div className="pt-3 flex gap-2">
            <Button variant="primary" size="sm" onClick={() => navigate('/register')}>
              {t('start')}
            </Button>
            <LanguageSwitcher variant="dark" />
          </div>
        </div>
      )}
    </nav>
  );
}
