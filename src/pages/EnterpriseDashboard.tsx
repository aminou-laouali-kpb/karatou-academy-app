import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EnterpriseNav } from '../layouts/EnterpriseNav';
import { KpiCard } from '../components/KpiCard';
import { ProgressBar } from '../components/ProgressBar';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { useLearning } from '../hooks/useLearning';
import { useLanguage } from '../hooks/useLanguage';
import { Users, GraduationCap, TrendingUp, CreditCard, UserPlus, Gift, Download, Activity, ExternalLink } from 'lucide-react';

function redeemPath(code: string) {
  return `/redeem/${encodeURIComponent(code)}`;
}

export function EnterpriseDashboard() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { organization, organizations, members, scholarships, createScholarship } = useLearning();
  const canManageOrganization = Boolean(organization);
  const [createdScholarship, setCreatedScholarship] = useState('');
  const certifiedMembers = members.filter((member) => member.status === 'certified').length;
  const completionRate = members.length
    ? Math.round(members.reduce((sum, member) => sum + member.progress, 0) / members.length)
    : 0;
  const seatsUsed = members.length;
  const org = organization || {
    id: 'no-organization',
    slug: 'no-organization',
    name: t('enterprise'),
    industry: t('internationalOrganization'),
    country: 'NE',
    plan: 'Enterprise',
    seatsTotal: Math.max(seatsUsed, 1),
    status: 'active' as const,
  };
  const seatsTotal = Math.max(org.seatsTotal, seatsUsed, 1);

  const activities = [
    { text: t('activityCert'), time: t('twoHoursAgo'), icon: <GraduationCap size={14} /> },
    { text: t('activityScholarship'), time: t('yesterday'), icon: <Gift size={14} /> },
    { text: t('activityProgress'), time: t('twoDaysAgo'), icon: <TrendingUp size={14} /> },
    { text: t('activityMembers'), time: t('thisWeekLabel'), icon: <Users size={14} /> },
  ];

  const handleCreateScholarship = () => {
    const scholarship = createScholarship();
    if (scholarship) {
      setCreatedScholarship(scholarship.code);
    }
  };

  const exportReport = () => {
    const rows = [
      ['name', 'email', 'role', 'progress', 'certificates', 'status'],
      ...members.map((member) => [
        member.name,
        member.email,
        member.role,
        String(member.progress),
        String(member.certificates),
        member.status,
      ]),
    ];
    const csv = rows.map((row) => row.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'karatou-enterprise-report.csv';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <EnterpriseNav />

      <main id="main-content" className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Welcome */}
        <div className="mb-8">
          <h1 className="font-playfair text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
            {t('adminHello')}
          </h1>
          <p className="text-gray-500 flex items-center gap-2">
            {t('portal')} {org.name} - {org.industry || t('internationalOrganization')} - {org.country}
            <Badge variant="blue">{org.plan}</Badge>
            {organizations.length > 1 && <Badge variant="gray">{organizations.length} organisations</Badge>}
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <KpiCard
            icon={<Users size={20} className="text-blue-500" />}
            value={members.length}
            label={t('activeMembers')}
            trend={t('thisMonthPlus2')}
            iconBg="bg-blue-100"
          />
          <KpiCard
            icon={<GraduationCap size={20} className="text-gold-500" />}
            value={certifiedMembers}
            label={t('certificates')}
            trend={t('thisMonthPlus5')}
            iconBg="bg-gold-100"
          />
          <KpiCard
            icon={<TrendingUp size={20} className="text-emerald-600" />}
            value={completionRate}
            suffix="%"
            label={t('completionRate')}
            trend={t('previousMonthPlus8')}
            iconBg="bg-emerald-100"
          />
          <KpiCard
            icon={<CreditCard size={20} className="text-blue-600" />}
            value={seatsUsed}
            suffix={`/${seatsTotal}`}
            label={t('seatsUsed')}
            trend={`${Math.max(seatsTotal - seatsUsed, 0)} ${t('availableSeats')}`}
            iconBg="bg-blue-100"
          />
        </div>

        {/* Seats Progress */}
        <div className="bg-white rounded-2xl p-5 shadow-blue-sm mb-8">
          <div className="flex items-center justify-between mb-3">
            <p className="font-semibold text-gray-900">{t('seatsUsed')}</p>
            <p className="text-sm text-gray-500">{seatsUsed} / {seatsTotal}</p>
          </div>
          <ProgressBar value={(seatsUsed / seatsTotal) * 100} height="md" />
          <p className="text-xs text-gray-500 mt-3">
            {scholarships.filter((scholarship) => scholarship.status === 'pending').length} {t('scholarshipsAvailable')}
          </p>
          {createdScholarship && (
            <div className="mt-4 rounded-xl border border-gold-200 bg-gold-50 px-4 py-3 text-sm text-gold-700">
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
        </div>

        {/* Activity + Quick Actions */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Activity Feed */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-5 shadow-blue-sm">
            <div className="flex items-center gap-2 mb-4">
              <Activity size={18} className="text-blue-500" />
              <h2 className="font-semibold text-gray-900">{t('recentActivity')}</h2>
            </div>
            <div className="space-y-4">
              {activities.map((a, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 text-blue-500">
                    {a.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-700">{a.text}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{a.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl p-5 shadow-blue-sm">
            <h2 className="font-semibold text-gray-900 mb-4">{t('quickActions')}</h2>
            <div className="space-y-3">
              <Button variant="primary" size="sm" className="w-full" onClick={() => navigate('/enterprise/members')}>
                <UserPlus size={16} /> {t('inviteMember')}
              </Button>
              <Button variant="gold" size="sm" className="w-full" onClick={handleCreateScholarship} disabled={!canManageOrganization}>
                <Gift size={16} /> {t('createScholarships')}
              </Button>
              <Button variant="outline" size="sm" className="w-full" onClick={exportReport}>
                <Download size={16} /> {t('exportReport')}
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
