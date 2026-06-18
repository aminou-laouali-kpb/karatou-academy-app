import { NavLink, useNavigate } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { DemoSwitcher } from '../components/DemoSwitcher';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { useLanguage } from '../hooks/useLanguage';
import { useAuth } from '../hooks/useAuth';
import { Bell, LogOut } from 'lucide-react';

export function StudentNav() {
  const { t } = useLanguage();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const tabs = [
    { to: '/dashboard', label: t('home') },
    { to: '/learn', label: t('modules') },
    { to: '/certificates', label: t('certificates') },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Logo />

        <div className="hidden md:flex items-center gap-1">
          {tabs.map((tab) => (
            <NavLink
              key={tab.to}
              to={tab.to}
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-medium rounded-xl transition-all duration-150 ${
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
          <button
            aria-label={t('notifications')}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors relative"
          >
            <Bell size={18} className="text-gray-600" aria-hidden="true" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-gold-400 rounded-full" />
          </button>
          <button
            onClick={() => navigate('/certificates')}
            className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-sm font-semibold"
            aria-label={`${t('profile')}: ${user?.name ?? ''}`.trim()}
            title={user?.name}
          >
            {user?.initials || 'AK'}
          </button>
          <button
            onClick={() => {
              logout();
              navigate('/login');
            }}
            className="hidden sm:flex w-8 h-8 items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            aria-label={t('logout')}
            title={t('logout')}
          >
            <LogOut size={17} className="text-gray-600" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="md:hidden border-t border-gray-100 px-3 py-2 flex gap-1 overflow-x-auto">
        {tabs.map((tab) => (
          <NavLink
            key={tab.to}
            to={tab.to}
            className={({ isActive }) =>
              `px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap ${
                isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600'
              }`
            }
          >
            {tab.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
