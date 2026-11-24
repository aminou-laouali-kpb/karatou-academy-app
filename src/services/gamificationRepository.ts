import { isSupabaseConfigured, supabase } from '../lib/supabaseClient';

/** What the web dashboard shows from `karatou_get_learner_home()` (B2/B7). */
export interface LearnerHome {
  totalXp: number;
  level: number;
  /** XP needed to reach the current level, and the next one. */
  levelFloorXp: number;
  nextLevelXp: number;
  streak: {
    status: 'active' | 'at_risk' | 'broken' | 'none';
    current: number;
    longest: number;
    freezes: number;
  };
  dailyGoal: {
    target: number;
    earned: number;
    reached: boolean;
  };
}

const STREAK_STATUSES = new Set(['active', 'at_risk', 'broken', 'none']);

function toCount(value: unknown): number {
  const n = Number(value);
  return Number.isFinite(n) && n >= 0 ? Math.floor(n) : 0;
}

function asObject(value: unknown): Record<string, unknown> {
  return value && typeof value === 'object' && !Array.isArray(value) ? (value as Record<string, unknown>) : {};
}

/** Maps the RPC's JSON; anything malformed means "no gamification data". */
export function parseLearnerHome(value: unknown): LearnerHome | null {
  const root = asObject(value);
  const stats = asObject(root.stats);
  const streak = asObject(root.streak);
  const goal = asObject(root.daily_goal);
  if (stats.total_xp === undefined || stats.level === undefined) return null;

  const status = String(streak.status ?? 'none');
  const level = Math.max(1, toCount(stats.level));
  return {
    totalXp: toCount(stats.total_xp),
    level,
    levelFloorXp: toCount(stats.level_floor_xp),
    nextLevelXp: toCount(stats.next_level_xp) || 25 * (level + 1) * level,
    streak: {
      status: (STREAK_STATUSES.has(status) ? status : 'none') as LearnerHome['streak']['status'],
      current: toCount(streak.current),
      longest: toCount(streak.longest),
      freezes: toCount(streak.freezes),
    },
    dailyGoal: {
      target: toCount(goal.target) || 30,
      earned: toCount(goal.earned),
      reached: goal.reached === true,
    },
  };
}

/** Share of the way from the current level to the next one, 0–100. */
export function levelProgressPercent(home: Pick<LearnerHome, 'totalXp' | 'levelFloorXp' | 'nextLevelXp'>): number {
  const span = home.nextLevelXp - home.levelFloorXp;
  if (span <= 0) return 100;
  return Math.max(0, Math.min(100, Math.round(((home.totalXp - home.levelFloorXp) / span) * 100)));
}

/**
 * XP, level and streak of the signed-in learner. Returns null in demo mode, or
 * when the RPC is not available yet (migrations 20261124090* not applied): the
 * dashboard then keeps its previous figures instead of showing an error.
 */
export async function fetchLearnerHome(): Promise<LearnerHome | null> {
  if (!isSupabaseConfigured || !supabase) return null;
  try {
    const { data, error } = await supabase.rpc('karatou_get_learner_home');
    if (error) return null;
    return parseLearnerHome(data);
  } catch {
    return null;
  }
}
