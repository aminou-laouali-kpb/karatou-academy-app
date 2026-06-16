import { FormEvent, useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { EnterpriseNav } from '../layouts/EnterpriseNav';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { ProgressBar } from '../components/ProgressBar';
import { useLearning } from '../hooks/useLearning';
import { useLanguage } from '../hooks/useLanguage';
import { Search, Filter, UserPlus, ExternalLink, GraduationCap, Gift } from 'lucide-react';

function redeemPath(code: string) {
  return `/redeem/${encodeURIComponent(code)}`;
}

function normalizeSearchValue(value: string) {
  return value.trim().toLowerCase();
}

function normalizeCertificateUid(value?: string) {
  return (value || '').trim().toUpperCase();
}

export function EnterpriseMembers() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { t } = useLanguage();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showInvite, setShowInvite] = useState(searchParams.get('invite') === '1');
  const [inviteName, setInviteName] = useState('');
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteRole, setInviteRole] = useState<'learner' | 'enterprise_admin'>('learner');
  const [createdScholarship, setCreatedScholarship] = useState('');
  const [verifyUid, setVerifyUid] = useState('');
  const [verifyError, setVerifyError] = useState('');
  const { members, scholarships, addMember, createScholarship } = useLearning();

  const filteredMembers = useMemo(
    () =>
      members.filter((member) => {
        const matchesSearch =
          member.name.toLowerCase().includes(search.toLowerCase()) ||
          member.email.toLowerCase().includes(search.toLowerCase());
        const matchesStatus = statusFilter === 'all' || member.status === statusFilter;
        return matchesSearch && matchesStatus;
      }),
    [members, search, statusFilter]
  );

  const statusBadge = (status: string) => {
    switch (status) {
      case 'certified': return <Badge variant="green">{t('certified')}</Badge>;
      case 'in_progress': return <Badge variant="blue">{t('inProgress')}</Badge>;
      default: return <Badge variant="gray">{t('notStarted')}</Badge>;
    }
  };

  const getInitials = (name: string) =>
    name.split(' ').map((part) => part[0]).join('').toUpperCase().slice(0, 2);

  const formatLastActivity = (value: string) => {
    switch (value) {
      case "Aujourd'hui":
        return t('today');
      case 'Hier':
        return t('yesterday');
      case 'Il y a 2 jours':
        return t('twoDaysAgo');
      case 'Il y a 5 jours':
        return t('fiveDaysAgo');
      case 'Il y a 1 semaine':
        return t('oneWeekAgo');
      default:
        return value;
    }
  };

  const avatarColors = [
    'from-blue-500 to-blue-700',
    'from-emerald-500 to-emerald-700',
    'from-gold-400 to-gold-600',
    'from-rose-400 to-rose-600',
    'from-cyan-500 to-cyan-700',
    'from-orange-400 to-orange-600',
  ];

  const handleInvite = (event: FormEvent) => {
    event.preventDefault();
    addMember({ name: inviteName, email: inviteEmail, role: inviteRole });
    setInviteName('');
    setInviteEmail('');
    setInviteRole('learner');
    setShowInvite(false);
  };

  const handleCreateScholarship = () => {
    const scholarship = createScholarship();
    setCreatedScholarship(scholarship.code);
  };

  const handleVerifyCertificate = (event: FormEvent) => {
    event.preventDefault();
    const query = verifyUid.trim();
    const normalizedQuery = normalizeSearchValue(query);
    const normalizedUid = normalizeCertificateUid(query);

    if (!query) {
      return;
    }

    const memberMatch = members.find((member) => {
      const memberName = normalizeSearchValue(member.name);
      const memberEmail = normalizeSearchValue(member.email);
      const memberCertificateUid = normalizeCertificateUid(member.certificateUid);

      return (
        Boolean(member.certificateUid) &&
        (memberCertificateUid === normalizedUid ||
          memberName.includes(normalizedQuery) ||
          memberEmail.includes(normalizedQuery))
      );
    });

    if (memberMatch?.certificateUid) {
      setVerifyError('');
      navigate(`/verify/${encodeURIComponent(memberMatch.certificateUid)}`);
      return;
    }

    if (query.toUpperCase().startsWith('KA-')) {
      setVerifyError('');
      navigate(`/verify/${encodeURIComponent(normalizedUid)}`);
      return;
    }

    setVerifyError(t('certificateSearchNotFound'));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <EnterpriseNav />

      <main id="main-content" className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="font-playfair text-2xl font-bold text-gray-900">{members.length} {t('members').toLowerCase()}</h1>
            <p className="text-sm text-gray-500 mt-1">{t('membersIntro')}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden="true" />
              <input
                type="text"
                aria-label={t('search')}
                placeholder={t('search')}
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className="pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-56"
              />
            </div>
            <div className="relative">
              <Filter size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden="true" />
              <select
                aria-label={t('filterByStatus')}
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
                className="pl-9 pr-8 py-2 text-sm border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              >
                <option value="all">{t('filterAll')}</option>
                <option value="certified">{t('verifiedLearners')}</option>
                <option value="in_progress">{t('inProgress')}</option>
                <option value="not_started">{t('notStarted')}</option>
              </select>
            </div>
            <Button variant="primary" size="sm" onClick={() => setShowInvite(true)}>
              <UserPlus size={16} /> {t('invite')}
            </Button>
          </div>
        </div>

        {showInvite && (
          <form onSubmit={handleInvite} className="bg-white border border-blue-100 rounded-2xl shadow-blue-sm p-5 mb-6">
            <div className="grid md:grid-cols-[1fr_1fr_160px_auto] gap-3 items-end">
              <label className="block">
                <span className="text-sm font-medium text-gray-700">{t('name')}</span>
                <input
                  value={inviteName}
                  onChange={(event) => setInviteName(event.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
                  placeholder={t('newMemberPlaceholder')}
                  required
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-gray-700">{t('email')}</span>
                <input
                  type="email"
                  value={inviteEmail}
                  onChange={(event) => setInviteEmail(event.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
                  placeholder="membre@org.test"
                  required
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-gray-700">{t('role')}</span>
                <select
                  value={inviteRole}
                  onChange={(event) => setInviteRole(event.target.value as 'learner' | 'enterprise_admin')}
                  className="mt-1.5 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
                >
                  <option value="learner">{t('learner')}</option>
                  <option value="enterprise_admin">{t('enterpriseAdmin')}</option>
                </select>
              </label>
              <div className="flex gap-2">
                <Button type="submit" variant="primary" size="sm">{t('send')}</Button>
                <Button variant="ghost" size="sm" onClick={() => setShowInvite(false)}>{t('cancel')}</Button>
              </div>
            </div>
          </form>
        )}

        <form onSubmit={handleVerifyCertificate} className="bg-white border border-blue-100 rounded-2xl shadow-blue-sm p-5 mb-6">
          <div className="grid md:grid-cols-[1fr_auto] gap-3 items-end">
            <label className="block">
              <span className="text-sm font-medium text-gray-700">{t('verifyCert')}</span>
              <input
                value={verifyUid}
                onChange={(event) => {
                  setVerifyUid(event.target.value);
                  setVerifyError('');
                }}
                className="mt-1.5 w-full rounded-xl border border-gray-200 px-3 py-2.5 font-mono text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
                placeholder={t('verifyCertSearchPlaceholder')}
              />
              <span className="mt-1.5 block text-xs text-gray-500">{t('verifyCertSearchHelp')}</span>
            </label>
            <Button type="submit" variant="outline" size="sm" disabled={!verifyUid.trim()}>
              <ExternalLink size={14} /> {t('verifyCert')}
            </Button>
          </div>
          {verifyError && (
            <p className="mt-3 rounded-xl border border-red-100 bg-red-50 px-3 py-2 text-sm text-red-600">
              {verifyError}
            </p>
          )}
        </form>

        <div className="bg-white rounded-2xl shadow-blue-sm overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left px-5 py-3.5 text-xs font-medium text-gray-500 uppercase tracking-wider">{t('member')}</th>
                  <th className="text-left px-5 py-3.5 text-xs font-medium text-gray-500 uppercase tracking-wider">{t('role')}</th>
                  <th className="text-left px-5 py-3.5 text-xs font-medium text-gray-500 uppercase tracking-wider">{t('progress')}</th>
                  <th className="text-left px-5 py-3.5 text-xs font-medium text-gray-500 uppercase tracking-wider">{t('certs')}</th>
                  <th className="text-left px-5 py-3.5 text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">{t('lastActivity')}</th>
                  <th className="text-left px-5 py-3.5 text-xs font-medium text-gray-500 uppercase tracking-wider">{t('status')}</th>
                  <th className="px-5 py-3.5"></th>
                </tr>
              </thead>
              <tbody>
                {filteredMembers.map((member, index) => (
                  <tr key={member.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${avatarColors[index % avatarColors.length]} flex items-center justify-center text-white text-xs font-semibold`}>
                          {getInitials(member.name)}
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-900 block">{member.name}</span>
                          <span className="text-xs text-gray-500">{member.email}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-3.5">
                      <Badge variant={member.role === 'enterprise_admin' ? 'gold' : 'gray'}>
                        {member.role === 'enterprise_admin' ? t('enterpriseAdmin') : t('learner')}
                      </Badge>
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-2">
                        <ProgressBar value={member.progress} variant={member.progress === 100 ? 'green' : 'blue'} className="w-16" />
                        <span className="text-xs text-gray-500">{member.progress}%</span>
                      </div>
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-1 text-sm text-gray-700">
                        <GraduationCap size={14} className="text-gold-500" />
                        {member.certificates}
                      </div>
                    </td>
                    <td className="px-5 py-3.5 hidden lg:table-cell">
                      <span className="text-sm text-gray-500">{formatLastActivity(member.lastActivity)}</span>
                    </td>
                    <td className="px-5 py-3.5">{statusBadge(member.status)}</td>
                    <td className="px-5 py-3.5">
                      {member.certificateUid ? (
                        <Button variant="outline" size="sm" onClick={() => navigate(`/verify/${member.certificateUid}`)}>
                          <ExternalLink size={14} /> {t('verifyCert')}
                        </Button>
                      ) : null}
                    </td>
                  </tr>
                ))}
                {filteredMembers.length === 0 && (
                  <tr>
                    <td colSpan={7} className="px-5 py-10 text-center text-sm text-gray-500">
                      {t('noMemberMatch')}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-blue-sm p-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
            <div>
              <h2 className="font-semibold text-gray-900">{t('scholarships')}</h2>
              <p className="text-sm text-gray-500">
                {scholarships.length} {t('scholarships').toLowerCase()} - {scholarships.filter((item) => item.status === 'claimed').length} {t('claimed').toLowerCase()} - {scholarships.filter((item) => item.status === 'pending').length} {t('available').toLowerCase()}
              </p>
            </div>
            <Button variant="gold" size="sm" onClick={handleCreateScholarship}>
              <Gift size={16} /> {t('createScholarships')}
            </Button>
          </div>
          {createdScholarship && (
            <div className="mb-4 rounded-xl border border-gold-200 bg-gold-50 px-4 py-3 text-sm text-gold-600">
              <p>
                {t('scholarshipCreated')}: <span className="font-mono">{createdScholarship}</span>
              </p>
              <a
                href={redeemPath(createdScholarship)}
                className="mt-2 inline-flex items-center gap-1.5 font-semibold text-blue-600 hover:underline"
              >
                <ExternalLink size={14} /> {t('redeemLink')}: <span className="font-mono">{redeemPath(createdScholarship)}</span>
              </a>
            </div>
          )}
          <div className="space-y-2">
            {scholarships.map((scholarship) => (
              <div key={scholarship.id} className="flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-gray-50 transition-colors">
                <div>
                  <span className="font-mono text-xs text-gray-600">{scholarship.code}</span>
                  <a
                    href={redeemPath(scholarship.code)}
                    className="mt-1 flex items-center gap-1 text-xs font-medium text-blue-600 hover:underline"
                  >
                    <ExternalLink size={12} /> {t('openRedeemLink')}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  {scholarship.claimedBy && <span className="text-xs text-gray-500 hidden sm:block">{scholarship.claimedBy}</span>}
                  <Badge variant={scholarship.status === 'claimed' ? 'green' : scholarship.status === 'expired' ? 'red' : 'gold'}>
                    {scholarship.status === 'claimed'
                      ? t('claimed')
                      : scholarship.status === 'expired'
                        ? t('expired')
                        : t('available')}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
