import { FormEvent, useState } from 'react';
import { AlertCircle, Building2, CheckCircle2, UserPlus } from 'lucide-react';
import { AdminNav } from '../layouts/AdminNav';
import { Button } from '../components/Button';
import { useLearning } from '../hooks/useLearning';
import { useAuth } from '../hooks/useAuth';
import { useLanguage } from '../hooks/useLanguage';
import { provisionEnterpriseAdmin } from '../services/adminRepository';
import { uploadOrgLogo, saveOrganizationRecord } from '../services/enterpriseRepository';

const inputClass =
  'mt-1.5 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-body outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15';

export function AdminTeam() {
  const { organizations, createOrganization } = useLearning();
  const { authMode } = useAuth();
  const { t } = useLanguage();
  const [orgId, setOrgId] = useState(organizations[0]?.id || '');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pending, setPending] = useState(false);
  const [notice, setNotice] = useState<{ tone: 'success' | 'error'; message: string } | null>(null);
  const [orgName, setOrgName] = useState('');
  const [orgLogoFile, setOrgLogoFile] = useState<File | null>(null);

  const isSupabase = authMode === 'supabase';

  const handleCreateOrg = async (event: FormEvent) => {
    event.preventDefault();
    setNotice(null);
    const created = createOrganization({ name: orgName });
    let extra = '';
    if (orgLogoFile && isSupabase) {
      try {
        const url = await uploadOrgLogo(created.id, orgLogoFile);
        await saveOrganizationRecord({ ...created, logoUrl: url });
        extra = ' — logo televerse';
      } catch (error) {
        setOrgId(created.id);
        setOrgName('');
        setOrgLogoFile(null);
        setNotice({
          tone: 'error',
          message: `Organisation creee, mais echec du logo: ${error instanceof Error ? error.message : 'erreur'}`,
        });
        return;
      }
    } else if (orgLogoFile && !isSupabase) {
      extra = ' (logo ignore en mode demo)';
    }
    setOrgId(created.id);
    setOrgName('');
    setOrgLogoFile(null);
    setNotice({ tone: 'success', message: `${t('teamOrgCreated')}: ${created.name}${extra}` });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setNotice(null);
    setPending(true);
    const result = await provisionEnterpriseAdmin({ email, password, name, orgId });
    setPending(false);
    setNotice({
      tone: result.ok ? 'success' : 'error',
      message: result.ok
        ? `${t('teamCreated')}: ${result.message}${result.passwordUnchanged ? ` — ${t('teamExistingAccount')}` : ''}`
        : result.message,
    });
    if (result.ok) {
      setName('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />

      <main id="main-content" className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-7">
          <p className="text-eyebrow text-blue-600">Karatou</p>
          <h1 className="font-heading text-h1 text-gray-900 mt-1">{t('teamTitle')}</h1>
          <p className="text-body text-gray-500 mt-2 max-w-2xl">{t('teamIntro')}</p>
        </div>

        {!isSupabase && (
          <div className="mb-6 flex items-start gap-2 rounded-2xl border border-gold-200 bg-gold-50 px-4 py-3 text-body text-gold-700" role="status">
            <AlertCircle size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
            <span>{t('teamDemoNote')}</span>
          </div>
        )}

        {notice && (
          <div
            className={`mb-6 flex items-start gap-2 rounded-2xl border px-4 py-3 text-body ${
              notice.tone === 'success'
                ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                : 'border-red-200 bg-red-50 text-red-700'
            }`}
            role={notice.tone === 'success' ? 'status' : 'alert'}
            aria-live="polite"
          >
            <span className="mt-0.5 shrink-0">
              {notice.tone === 'success' ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
            </span>
            <span>{notice.message}</span>
          </div>
        )}

        <form onSubmit={handleCreateOrg} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-blue-sm space-y-4 mb-6">
          <h2 className="font-semibold text-gray-900 flex items-center gap-2">
            <Building2 size={18} className="text-blue-600" aria-hidden="true" /> {t('teamCreateOrgTitle')}
          </h2>
          <label className="block">
            <span className="text-body font-medium text-gray-700">{t('teamOrgNameLabel')}</span>
            <input value={orgName} onChange={(event) => setOrgName(event.target.value)} required className={inputClass} />
          </label>
          <label className="block">
            <span className="text-body font-medium text-gray-700">{t('teamOrgLogoLabel')}</span>
            <input
              type="file"
              accept="image/png,image/jpeg,image/jpg"
              onChange={(event) => setOrgLogoFile(event.target.files?.[0] ?? null)}
              className="mt-1.5 w-full text-body text-gray-600 file:mr-3 file:rounded-lg file:border-0 file:bg-blue-50 file:px-3 file:py-2 file:text-body file:font-medium file:text-blue-700"
            />
            <span className="mt-1 block text-meta text-gray-400">{t('teamOrgLogoHint')}</span>
          </label>
          <Button type="submit" variant="outline" size="md" disabled={!orgName.trim()}>
            {t('teamCreateOrgBtn')}
          </Button>
        </form>

        <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-blue-sm space-y-4">
          <h2 className="font-semibold text-gray-900 flex items-center gap-2">
            <UserPlus size={18} className="text-blue-600" aria-hidden="true" /> {t('teamCreateAdminTitle')}
          </h2>

          <label className="block">
            <span className="text-body font-medium text-gray-700">{t('teamOrgLabel')}</span>
            <select value={orgId} onChange={(event) => setOrgId(event.target.value)} required className={inputClass}>
              {organizations.length === 0 && <option value="">-</option>}
              {organizations.map((org) => (
                <option key={org.id} value={org.id}>{org.name}</option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="text-body font-medium text-gray-700">{t('fullName')}</span>
            <input value={name} onChange={(event) => setName(event.target.value)} required className={inputClass} />
          </label>

          <label className="block">
            <span className="text-body font-medium text-gray-700">{t('email')}</span>
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required className={inputClass} />
          </label>

          <label className="block">
            <span className="text-body font-medium text-gray-700">{t('password')}</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              minLength={8}
              required
              className={inputClass}
            />
          </label>

          <Button type="submit" variant="primary" size="md" disabled={pending || !isSupabase || !orgId}>
            {pending ? t('teamCreating') : t('teamSubmit')}
          </Button>
        </form>
      </main>
    </div>
  );
}
