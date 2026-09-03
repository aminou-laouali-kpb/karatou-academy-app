import { NavLink, useNavigate } from 'react-router-dom';
import { Award, BookOpenCheck, Building2, LogOut, Mail, ShieldCheck, UserPlus, UsersRound } from 'lucide-react';
import { Logo } from '../components/Logo';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { useAuth } from '../hooks/useAuth';
import { useLanguage } from '../hooks/useLanguage';

export function AdminNav() {
  const navigate = useNavigate();
  const { logout, user } = useAuth();
  const { t } = useLanguage();

  const tabs = [
    { to: '/admin', label: 'Contenus CMS', icon: BookOpenCheck, end: true },
    { to: '/admin/team', label: 'Equipe & acces', icon: UserPlus },
    { to: '/admin/attestations', label: 'Attestations', icon: Award },
    { to: '/admin/newsletter', label: 'Newsletter', icon: Mail },
    { to: '/enterprise', label: 'Supervision enterprise', icon: Building2 },
    { to: '/enterprise/members', label: 'Apprenants & bourses', icon: UsersRound },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 min-h-16 flex flex-wrap items-center justify-between gap-3 py-3">
        <div className="flex items-center gap-3 min-w-0">
          <Logo />
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1 text-meta font-semibold text-blue-700">
            <ShieldCheck size={13} />
            Admin plateforme
          </span>
        </div>

        <div className="order-3 w-full overflow-x-auto md:order-none md:w-auto">
          <div className="flex items-center gap-1 min-w-max">
            {tabs.map((tab) => {
              const Icon = tab.icon;

              return (
                <NavLink
                  key={tab.to}
                  to={tab.to}
                  end={tab.end}
                  className={({ isActive }) =>
                    `inline-flex items-center gap-2 px-3.5 py-2 text-body font-medium rounded-xl transition-all duration-150 ${
                      isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`
                  }
                >
                  <Icon size={16} />
                  {tab.label}
                </NavLink>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <div className="hidden sm:block text-right">
            <p className="text-body font-semibold text-gray-900">Admin Karatou</p>
            <p className="text-meta text-gray-500">Back office Karatou</p>
          </div>
          <button
            onClick={() => navigate('/admin')}
            className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-700 to-blue-500 flex items-center justify-center text-white text-body font-semibold"
            title={user?.name || 'Admin Karatou'}
          >
            KA
          </button>
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
    </nav>
  );
}
