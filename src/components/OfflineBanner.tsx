import { useEffect, useState } from 'react';
import { WifiOff } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import type { Language } from '../data/translations';

// Tiny, self-contained trilingual copy (lives outside the dictionary so the
// banner remains decoupled from the i18n table even when offline).
const COPY: Record<Language, { offline: string; cached: string }> = {
  fr: {
    offline: 'Hors connexion',
    cached: 'Vous consultez le contenu déjà téléchargé.',
  },
  en: {
    offline: 'Offline',
    cached: 'You are viewing already downloaded content.',
  },
  ha: {
    offline: 'Babu intanet',
    cached: 'Kana duban abun da aka riga aka loda.',
  },
};

export function OfflineBanner() {
  const { lang } = useLanguage();
  // Default to online to avoid a flash of the banner during SSR-like pre-paint
  // (we run client-side, but the first render still happens before any event).
  const [online, setOnline] = useState(() =>
    typeof navigator === 'undefined' ? true : navigator.onLine
  );

  useEffect(() => {
    const goOnline = () => setOnline(true);
    const goOffline = () => setOnline(false);
    window.addEventListener('online', goOnline);
    window.addEventListener('offline', goOffline);
    return () => {
      window.removeEventListener('online', goOnline);
      window.removeEventListener('offline', goOffline);
    };
  }, []);

  if (online) return null;
  const copy = COPY[lang] ?? COPY.fr;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-body-sm text-amber-900 shadow-blue-md border border-amber-200"
    >
      <WifiOff size={14} aria-hidden="true" />
      <span className="font-semibold">{copy.offline}</span>
      <span className="text-meta text-amber-700 hidden sm:inline">— {copy.cached}</span>
    </div>
  );
}
