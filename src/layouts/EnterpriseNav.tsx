import { NavLink, useNavigate } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { DemoSwitcher } from '../components/DemoSwitcher';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { useLanguage } from '../hooks/useLanguage';
import { useAuth } from '../hooks/useAuth';
import { useLearning } from '../hooks/useLearning';
import { LogOut } from 'lucide-react';

export function EnterpriseNav() {
  const { t } = useLanguage();
  const { user, logout } = useAuth();
  const { organization } = useLearning();
  const navigate = useNavigate();
  const organizationName = organization?.name || user?.orgName || 'PNUD Niger';

  const tabs = [
    { to: '/enterprise', label: t('dashboard'), end: true },
    { to: '/enterprise/members', label: t('members') },
    ...(user?.role === 'platform_admin' ? [{ to: '/admin', label: 'Admin CMS' }] : []),
  ];

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo />
          <span className="hidden sm:inline-block text-meta font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
            {t('enterprise')}
          </span>
        </div>

        <div className="hidden md:flex items-center gap-1">
          {tabs.map((tab) => (
            <NavLink
              key={tab.to}
              to={tab.to}
              end={tab.end}
              className={({ isActive }) =>
                `px-4 py-2 text-body font-medium rounded-xl transition-all duration-150 ${
                  isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`
              }
            >
              {tab.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <DemoSwitcher />
          </div>
          <LanguageSwitcher />
          <div className="flex items-center gap-2">
            <span className="hidden sm:block text-body font-medium text-gray-700">{organizationName}</span>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-white text-body font-semibold">
              {user?.initials || 'PN'}
            </div>
            <button
              onClick={() => {
                logout();
                navigate('/login');
              }}
              className="hidden sm:flex w-8 h-8 items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              title={t('logout')}
            >
              <LogOut size={17} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
