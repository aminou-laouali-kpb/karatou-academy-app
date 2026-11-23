import { describe, expect, it } from 'vitest';
import { levelProgressPercent, parseLearnerHome } from './gamificationRepository';

// Shape returned by public.karatou_get_learner_home() (migration 20261124090200).
const rpcPayload = {
  stats: {
    total_xp: 180,
    level: 3,
    level_floor_xp: 150,
    next_level_xp: 300,
    daily_goal_xp: 30,
    timezone: 'Africa/Niamey',
  },
  streak: { status: 'at_risk', current: 4, longest: 9, freezes: 1, last_active_date: '2026-11-22' },
  daily_goal: { date: '2026-11-23', target: 60, earned: 25, reached: false },
  quests: [],
  league: { unlocked: true },
  reviews_due: 3,
};

describe('parseLearnerHome', () => {
  it('maps the RPC payload', () => {
    expect(parseLearnerHome(rpcPayload)).toEqual({
      totalXp: 180,
      level: 3,
      levelFloorXp: 150,
      nextLevelXp: 300,
      streak: { status: 'at_risk', current: 4, longest: 9, freezes: 1 },
      dailyGoal: { target: 60, earned: 25, reached: false },
    });
  });

  it('returns null when the payload is not the expected object', () => {
    expect(parseLearnerHome(null)).toBeNull();
    expect(parseLearnerHome([])).toBeNull();
    expect(parseLearnerHome({ stats: {} })).toBeNull();
  });

  it('clamps unexpected values instead of rendering NaN or negatives', () => {
    const home = parseLearnerHome({
      stats: { total_xp: 'abc', level: -2 },
      streak: { status: 'weird', current: -1 },
    });
    expect(home?.totalXp).toBe(0);
    expect(home?.level).toBe(1);
    expect(home?.nextLevelXp).toBe(50);
    expect(home?.streak).toEqual({ status: 'none', current: 0, longest: 0, freezes: 0 });
    expect(home?.dailyGoal.target).toBe(30);
  });
});

describe('levelProgressPercent', () => {
  it('measures progress inside the current level', () => {
    expect(levelProgressPercent({ totalXp: 150, levelFloorXp: 150, nextLevelXp: 300 })).toBe(0);
    expect(levelProgressPercent({ totalXp: 225, levelFloorXp: 150, nextLevelXp: 300 })).toBe(50);
    expect(levelProgressPercent({ totalXp: 999, levelFloorXp: 150, nextLevelXp: 300 })).toBe(100);
    expect(levelProgressPercent({ totalXp: 0, levelFloorXp: 0, nextLevelXp: 0 })).toBe(100);
  });
});
