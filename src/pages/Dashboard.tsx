import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { StudentNav } from '../layouts/StudentNav';
import { ModuleCard } from '../components/ModuleCard';
import { KpiCard } from '../components/KpiCard';
import { ProgressBar } from '../components/ProgressBar';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';
import { useLearning } from '../hooks/useLearning';
import { useLanguage } from '../hooks/useLanguage';
import { localizeModules } from '../data/localizedContent';
import { BookOpen, CheckCircle2, GraduationCap, Flame, ArrowRight, ShieldCheck } from 'lucide-react';

export function Dashboard() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { lang, t } = useLanguage();
  const { modules, getProgress, getCompletedCourseIds, getUserCertificates } = useLearning();
  const localizedModules = useMemo(
    () => localizeModules(modules.filter((module) => module.status !== 'draft'), lang),
    [modules, lang]
  );
  const modulesWithProgress = localizedModules.map((module) => ({
    ...module,
    progress: getProgress(module.slug),
  }));
  const activeModule =
    modulesWithProgress.find((module) => module.progress > 0 && module.progress < 100) ||
    modulesWithProgress.find((module) => module.progress === 0) ||
    modulesWithProgress[0];
  const userCertificates = user ? getUserCertificates(user.id).filter((cert) => cert.status === 'active') : [];
  const completedLessonCount = modulesWithProgress.reduce(
    (total, module) => total + getCompletedCourseIds(module.slug).length,
    0
  );

  // Empty production tenant (no published modules yet): show a clean empty state
  // instead of crashing on an undefined active module.
  if (!activeModule) {
    return (
      <div className="min-h-screen bg-gray-50">
        <StudentNav />
        <main id="main-content" className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-6 sm:p-8 mb-8">
            <h1 className="font-playfair text-2xl sm:text-3xl font-bold text-white mb-2">
              {t('hello')}, {user?.name?.split(' ')[0] || ''}
            </h1>
            <p className="text-blue-100">{t('noCoursesYet')}</p>
          </div>
          <div className="bg-white rounded-2xl shadow-blue-sm p-10 text-center text-sm text-gray-500">
            {t('noCoursesYet')}
          </div>
        </main>
      </div>
    );
  }

  const activeCourse = activeModule.courses.find((course) => !getCompletedCourseIds(activeModule.slug).includes(course.id)) || activeModule.courses[0];

  return (
    <div className="min-h-screen bg-gray-50">
      <StudentNav />

      <main id="main-content" className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-6 sm:p-8 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
          <div className="relative">
            <h1 className="font-playfair text-2xl sm:text-3xl font-bold text-white mb-2">
              {t('hello')}, {user?.name.split(' ')[0] || 'Amadou'}
            </h1>
            <p className="text-blue-100 mb-5">
              {t('youAreAt')} {activeModule.progress}% {t('ofModule')} {activeModule.title}.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button variant="gold" size="md" onClick={() => navigate(`/learn/${activeModule.slug}/${activeCourse.id}`)}>
                {t('continueLesson')} <ArrowRight size={16} />
              </Button>
              <div className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-2">
                <span className="text-xs text-blue-100">{t('progress')}</span>
                <div className="w-32">
                  <ProgressBar value={activeModule.progress} variant="gold" height="md" />
                </div>
                <span className="text-sm font-semibold text-white">{activeModule.progress}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <KpiCard
            icon={<BookOpen size={20} className="text-blue-500" />}
            value={modulesWithProgress.filter((module) => module.progress > 0 && module.progress < 100).length}
            label={t('modulesInProgress')}
            iconBg="bg-blue-100"
          />
          <KpiCard
            icon={<CheckCircle2 size={20} className="text-emerald-600" />}
            value={completedLessonCount}
            label={t('lessonsCompleted')}
            iconBg="bg-emerald-100"
          />
          <KpiCard
            icon={<GraduationCap size={20} className="text-gold-500" />}
            value={userCertificates.length}
            label={t('activeCertificates')}
            iconBg="bg-gold-100"
          />
          <KpiCard
            icon={<Flame size={20} className="text-orange-500" />}
            value={5}
            label={t('streakDays')}
            iconBg="bg-orange-100"
            trend={t('thisWeek')}
          />
        </div>

        {/* Continue Learning */}
        <section className="mb-8">
          <h2 className="font-playfair text-xl font-bold text-gray-900 mb-4">{t('continueLearning')}</h2>
          <div className="bg-white rounded-2xl shadow-blue-sm p-5 flex flex-col sm:flex-row items-start gap-5 hover:shadow-blue-md transition-all duration-200">
            <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${activeModule.color} flex items-center justify-center flex-shrink-0`}>
              <span className="text-3xl">{activeModule.emoji}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-blue-500 font-semibold uppercase tracking-wider mb-1">{activeModule.title}</p>
              <h3 className="font-semibold text-gray-900 mb-2">
                {t('resume')} : {activeCourse.title}
              </h3>
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-1 max-w-xs">
                  <ProgressBar value={activeModule.progress} />
                </div>
                <span className="text-xs text-gray-500">{activeModule.progress}%</span>
              </div>
              <Button variant="primary" size="sm" onClick={() => navigate(`/learn/${activeModule.slug}/${activeCourse.id}`)}>
                {t('resume')} <ArrowRight size={14} />
              </Button>
            </div>
          </div>
        </section>

        {/* My Certificates */}
        <section className="mb-8">
          <h2 className="font-playfair text-xl font-bold text-gray-900 mb-4">{t('myCertificates')}</h2>
          {userCertificates.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-blue-sm p-10 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap size={28} className="text-gray-400" />
              </div>
              <p className="font-semibold text-gray-700 mb-2">{t('noCertificates')}</p>
              <p className="text-sm text-gray-500 mb-4">{t('finishModuleToCert')}</p>
              <Button variant="outline" size="sm" onClick={() => navigate('/learn')}>
                {t('seeModules')}
              </Button>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-blue-sm p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <ShieldCheck size={18} className="text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {modulesWithProgress.find((module) => module.slug === userCertificates[0].moduleSlug)?.title || userCertificates[0].moduleName}
                    </p>
                    <p className="text-sm text-gray-500 font-mono">{userCertificates[0].uid}</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" onClick={() => navigate('/certificates')}>
                  {t('seeAll')}
                </Button>
              </div>
            </div>
          )}
        </section>

        {/* Available Modules */}
        <section>
          <h2 className="font-playfair text-xl font-bold text-gray-900 mb-4">{t('availableModules')}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {modulesWithProgress.map((m) => (
              <ModuleCard key={m.id} module={m} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
