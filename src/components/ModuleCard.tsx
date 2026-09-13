import { useNavigate } from 'react-router-dom';
import { BookOpen, Clock, Users, Star, CheckCircle2 } from 'lucide-react';
import { ProgressBar } from './ProgressBar';
import { Button } from './Button';
import { LearningModule } from '../types';
import { useLanguage } from '../hooks/useLanguage';

interface ModuleCardProps {
  module: LearningModule;
}

export function ModuleCard({ module }: ModuleCardProps) {
  const navigate = useNavigate();
  const { t } = useLanguage();
  // The module is already localized + progress-augmented by the caller (Dashboard).
  const localizedModule = module;
  const isLocked = !localizedModule.isFree && localizedModule.progress === 0;
  const isInProgress = localizedModule.progress > 0;
  const isCompleted = localizedModule.progress >= 100;
  const firstCourse = localizedModule.courses[0]?.id;
  const target = firstCourse ? `/learn/${localizedModule.slug}/${firstCourse}` : `/learn/${localizedModule.slug}`;

  return (
    <article className="relative bg-white rounded-2xl overflow-hidden shadow-blue-sm hover:shadow-blue-lg hover:-translate-y-1 transition-all duration-200 group">
      <div className={`h-32 bg-gradient-to-br ${localizedModule.color} flex items-center justify-center relative`}>
        <span className="text-5xl" aria-hidden="true">{localizedModule.emoji}</span>
        {isCompleted && (
          <div className="absolute top-3 right-3 bg-white/90 text-emerald-700 text-meta font-semibold px-3 py-1 rounded-full flex items-center gap-1">
            <CheckCircle2 size={13} /> {t('completed')}
          </div>
        )}
        {isLocked && (
          <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-[2px] flex items-center justify-center">
            <span className="bg-white/90 text-blue-900 text-meta font-semibold px-4 py-1.5 rounded-full">
              {t('subscription')}
            </span>
          </div>
        )}
      </div>

      <div className="p-5">
        <p className="text-eyebrow text-blue-500 mb-1">
          {localizedModule.level}
        </p>
        <h3 className="font-body text-title text-gray-900 mb-1">{localizedModule.title}</h3>
        <p className="text-body-sm text-gray-500 mb-4 line-clamp-2">{localizedModule.description}</p>

        <div className="flex items-center gap-4 text-meta text-gray-500 mb-4">
          <span className="flex items-center gap-1">
            <BookOpen size={13} /> {localizedModule.lessons} {t('lesson').toLowerCase()}s
          </span>
          <span className="flex items-center gap-1">
            <Clock size={13} /> {localizedModule.duration}
          </span>
          <span className="flex items-center gap-1">
            <Users size={13} /> {localizedModule.enrolled}
          </span>
          {localizedModule.rating > 0 && (
            <span className="flex items-center gap-1">
              <Star size={13} className="text-gold-400" /> {localizedModule.rating}
            </span>
          )}
        </div>

        {isInProgress && (
          <div className="mb-4">
            <div className="flex justify-between text-meta text-gray-500 mb-1.5">
              <span>{t('progress')}</span>
              <span className="font-medium tabular-nums text-blue-600">{localizedModule.progress}%</span>
            </div>
            <ProgressBar value={localizedModule.progress} />
          </div>
        )}

        <Button
          variant={isLocked ? 'ghost' : isInProgress ? 'primary' : 'outline'}
          size="sm"
          className="w-full"
          onClick={() => !isLocked && navigate(target)}
          disabled={isLocked}
        >
          {isCompleted ? t('review') : isInProgress ? t('continue') : isLocked ? t('lockedSubscription') : t('start')}
        </Button>
      </div>
    </article>
  );
}
