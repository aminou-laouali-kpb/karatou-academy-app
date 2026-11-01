import { KeyboardEvent, useEffect, useRef, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AlertCircle, ChevronDown, LogOut, Award } from 'lucide-react';
import { Logo } from '../components/Logo';
import { DemoSwitcher } from '../components/DemoSwitcher';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { useLanguage } from '../hooks/useLanguage';
import { useAuth } from '../hooks/useAuth';

export function StudentNav() {
  const { t } = useLanguage();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoutError, setLogoutError] = useState(false);
  const rootRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const firstItemRef = useRef<HTMLAnchorElement>(null);

  const tabs = [
    { to: '/dashboard', label: t('home') },
    { to: '/learn', label: t('modules') },
    { to: '/certificates', label: t('certificates') },
  ];

  useEffect(() => {
    if (!menuOpen) return;
    firstItemRef.current?.focus();
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setMenuOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [menuOpen]);

  const onMenuKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const items = Array.from(
      event.currentTarget.querySelectorAll<HTMLElement>('[role="menuitem"]'),
    );
    const index = items.indexOf(document.activeElement as HTMLElement);
    if (event.key === 'Escape') {
      event.preventDefault();
      setMenuOpen(false);
      triggerRef.current?.focus();
    } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      const delta = event.key === 'ArrowDown' ? 1 : -1;
      items[(index + delta + items.length) % items.length]?.focus();
    } else if (event.key === 'Home' || event.key === 'End') {
      event.preventDefault();
      items[event.key === 'Home' ? 0 : items.length - 1]?.focus();
    }
  };

  const signOut = async () => {
    setLogoutError(false);
    try {
      await logout();
      setMenuOpen(false);
      navigate('/login', { replace: true });
    } catch {
      setLogoutError(true);
    }
  };

  return (
    <nav ref={rootRef} className="sticky top-0 z-[60] bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 h-16 flex items-center justify-between gap-2">
        <Logo />

        <div className="hidden md:flex items-center gap-1">
          {tabs.map((tab) => (
            <NavLink
              key={tab.to}
              to={tab.to}
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

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden lg:block"><DemoSwitcher /></div>
          <LanguageSwitcher />
          <div className="relative">
            <button
              ref={triggerRef}
              type="button"
              onClick={() => { setLogoutError(false); setMenuOpen((open) => !open); }}
              className="flex items-center gap-1.5 rounded-full p-1 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              aria-label={`${t('profile')}: ${user?.name ?? ''}`}
              aria-haspopup="menu"
              aria-expanded={menuOpen}
              aria-controls="student-account-menu"
              title={user?.name}
            >
              <span className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-body font-semibold">
                {user?.initials || 'AK'}
              </span>
              <ChevronDown size={15} aria-hidden="true" />
            </button>
            {menuOpen && (
              <div
                id="student-account-menu"
                role="menu"
                aria-label={t('accountMenu')}
                onKeyDown={onMenuKeyDown}
                className="absolute right-0 top-full mt-2 w-56 rounded-xl border border-gray-200 bg-white p-2 shadow-2xl z-[70]"
              >
                <Link
                  ref={firstItemRef}
                  to="/certificates"
                  role="menuitem"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-body text-gray-800 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none"
                >
                  <Award size={17} aria-hidden="true" /> {t('certificates')}
                </Link>
                <button
                  type="button"
                  role="menuitem"
                  onClick={signOut}
                  className="w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-body text-gray-800 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none"
                >
                  <LogOut size={17} aria-hidden="true" /> {t('logout')}
                </button>
                {logoutError && (
                  <p role="alert" className="flex items-center gap-2 px-3 py-2 text-meta text-red-700">
                    <AlertCircle size={15} aria-hidden="true" /> {t('logoutFailed')}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="md:hidden border-t border-gray-100 px-3 py-2 flex gap-1 overflow-x-auto">
        {tabs.map((tab) => (
          <NavLink
            key={tab.to}
            to={tab.to}
            className={({ isActive }) =>
              `px-3 py-1.5 text-meta font-medium rounded-lg whitespace-nowrap ${
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
