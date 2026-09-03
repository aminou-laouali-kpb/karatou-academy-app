import { useNavigate, useLocation } from 'react-router-dom';
import { User, Building2 } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useAuth } from '../hooks/useAuth';
import { isDemoEnabled } from '../lib/demoMode';

export function DemoSwitcher() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();
  const { authMode, loginAs } = useAuth();
  const isEnterprise = location.pathname.startsWith('/enterprise');

  if (!isDemoEnabled || authMode === 'supabase') {
    return null;
  }

  return (
    <div className="flex items-center gap-0.5 bg-gray-100 rounded-full p-0.5">
      <button
        onClick={() => {
          loginAs('learner').then((result) => {
            if (result.ok) {
              navigate('/dashboard');
            }
          });
        }}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-meta font-medium transition-all duration-150 ${
          !isEnterprise ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        <User size={13} />
        {t('studentView')}
      </button>
      <button
        onClick={() => {
          loginAs('enterprise_admin').then((result) => {
            if (result.ok) {
              navigate('/enterprise');
            }
          });
        }}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-meta font-medium transition-all duration-150 ${
          isEnterprise ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        <Building2 size={13} />
        {t('enterpriseView')}
      </button>
    </div>
  );
}
