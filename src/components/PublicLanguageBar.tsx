import { useLocation } from 'react-router-dom';
import { LanguageSwitcher } from './LanguageSwitcher';
import { isVerificationHost } from '../lib/runtimeConfig';

// Pages without a navigation bar: before this, a Hausa or English speaker
// arriving from a shared link or a QR code had no way to change the language.
const PREFIXES = ['/login', '/register', '/forgot-password', '/reset-password', '/redeem', '/verify'];

export function PublicLanguageBar() {
  const { pathname } = useLocation();
  const onVerificationRoot = pathname === '/' && typeof window !== 'undefined' && isVerificationHost(window.location.hostname);
  if (!onVerificationRoot && !PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`) || pathname.startsWith(`${prefix}-`))) {
    return null;
  }
  return (
    <div className="fixed right-3 top-3 z-40 rounded-full bg-white/90 shadow-blue-sm backdrop-blur">
      <LanguageSwitcher />
    </div>
  );
}
