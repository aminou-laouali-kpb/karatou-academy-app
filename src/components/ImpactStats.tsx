import { useEffect, useState } from 'react';
import { Users, Award, MapPin, Globe } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import {
  fetchPublicImpactStats,
  PublicImpactStats,
} from '../services/publicStatsRepository';

interface ImpactStatsProps {
  /** Visual variant: 'hero' = inline with the navy hero, 'section' = stand-alone. */
  variant?: 'hero' | 'section';
  /** Fallback stats to show in demo mode / before the RPC resolves. */
  fallback?: { learners: string; certificates: string; countries: string; regions?: string };
  /** Number of published modules to display alongside the live KPIs. */
  modulesCount?: number;
}

const formatInt = (n: number) => new Intl.NumberFormat().format(n);

export function ImpactStats({ variant = 'hero', fallback, modulesCount }: ImpactStatsProps) {
  const { t, lang } = useLanguage();
  const [stats, setStats] = useState<PublicImpactStats | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let active = true;
    fetchPublicImpactStats()
      .then((s) => { if (active) { setStats(s); setLoaded(true); } })
      .catch(() => { if (active) setLoaded(true); });
    return () => { active = false; };
  }, []);

  // Display the live counts when we have them, else the fallback string. We
  // never show "0" for an unloaded fetch — that would look broken at first paint.
  const learners = stats ? formatInt(stats.learners) : fallback?.learners ?? '—';
  const certificates = stats ? formatInt(stats.certificates) : fallback?.certificates ?? '—';
  const countries = stats ? formatInt(Math.max(stats.countries, 1)) : fallback?.countries ?? '—';
  // Sign-up now collects a country, not a Niger region, so this breakdown is
  // empty on a fresh tenant. Showing « 0 régions » would read as a bug.
  const regions = stats
    ? stats.regions > 0
      ? formatInt(stats.regions)
      : undefined
    : fallback?.regions;

  const items = [
    { value: learners, label: t('learners'), Icon: Users },
    {
      value: modulesCount !== undefined ? String(modulesCount) : certificates,
      label: modulesCount !== undefined ? t('modules').toLowerCase() : t('certificates'),
      Icon: Award,
    },
    ...(regions ? [{ value: regions, label: t('regions'), Icon: MapPin }] : []),
    { value: countries, label: t('countries'), Icon: Globe },
  ];

  const isHero = variant === 'hero';
  const tone = isHero
    ? { num: 'text-white', label: 'text-gray-400', icon: 'text-gold-400' }
    : { num: 'text-gray-900', label: 'text-gray-500', icon: 'text-blue-500' };

  const cols = items.length >= 4 ? 'sm:grid-cols-4' : 'sm:grid-cols-3';

  return (
    <div className={`grid grid-cols-2 ${cols} gap-6 max-w-2xl mx-auto`}>
      {items.map(({ value, label, Icon }) => (
        <div key={label} className="text-center">
          <Icon size={20} className={`${tone.icon} mx-auto mb-2`} aria-hidden="true" />
          <p className={`font-heading text-h1 tabular-nums ${tone.num}`}>{value}</p>
          <p className={`text-eyebrow ${tone.label} mt-1`}>{label}</p>
        </div>
      ))}
      {/* Visually-hidden announcement once loaded so screen readers know the live counts. */}
      {loaded && stats && (
        <span aria-live="polite" className="sr-only">
          {t('impactLoaded')}
          {lang === 'fr' && ` ${stats.learners} apprenants, ${stats.certificates} certificats.`}
          {lang === 'en' && ` ${stats.learners} learners, ${stats.certificates} certificates.`}
          {lang === 'ha' && ` ${stats.learners} dalibai, ${stats.certificates} takardun shaida.`}
        </span>
      )}
    </div>
  );
}
