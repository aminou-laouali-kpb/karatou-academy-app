import { useLanguage } from '../hooks/useLanguage';
import { useAuth } from '../hooks/useAuth';
import { isDemoEnabled } from '../lib/demoMode';

export function DemoBadge() {
  const { t } = useLanguage();
  const { authMode } = useAuth();

  if (!isDemoEnabled || authMode === 'supabase') {
    return null;
  }

  return (
    <div className="pointer-events-none fixed top-32 right-4 sm:top-20 z-50 bg-blue-900/90 backdrop-blur-sm text-white text-xs px-4 py-2 rounded-full shadow-blue-lg flex items-center gap-2">
      <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
      {t('demoBadge')}
    </div>
  );
}
