import { describe, expect, it } from 'vitest';
import {
  acknowledgeCompletions,
  enqueueCompletion,
  groupByModule,
  mergeCompletedCourses,
  readOutbox,
} from './progressOutbox';

function memoryStorage(): Storage {
  const data = new Map<string, string>();
  return {
    get length() { return data.size; },
    clear: () => data.clear(),
    getItem: (key) => data.get(key) ?? null,
    key: (index) => [...data.keys()][index] ?? null,
    removeItem: (key) => { data.delete(key); },
    setItem: (key, value) => { data.set(key, String(value)); },
  };
}

const at = '2026-11-22T10:00:00.000Z';

describe('progress outbox', () => {
  it('keeps completions per user, without duplicates', () => {
    const storage = memoryStorage();
    enqueueCompletion('u1', { moduleSlug: 'm', courseId: 'c1', completedAt: at }, storage);
    enqueueCompletion('u1', { moduleSlug: 'm', courseId: 'c1', completedAt: at }, storage);
    enqueueCompletion('u2', { moduleSlug: 'm', courseId: 'c2', completedAt: at }, storage);
    expect(readOutbox('u1', storage)).toHaveLength(1);
    expect(readOutbox('u2', storage).map((item) => item.courseId)).toEqual(['c2']);
  });

  it('drops only what the server confirmed', () => {
    const storage = memoryStorage();
    const a = { moduleSlug: 'm', courseId: 'c1', completedAt: at };
    const b = { moduleSlug: 'm', courseId: 'c2', completedAt: at };
    enqueueCompletion('u1', a, storage);
    enqueueCompletion('u1', b, storage);
    expect(acknowledgeCompletions('u1', [a], storage)).toEqual([b]);
    expect(acknowledgeCompletions('u1', [b], storage)).toEqual([]);
    expect(storage.length).toBe(0);
  });

  it('never loses a pending completion when the server snapshot arrives', () => {
    const merged = mergeCompletedCourses(
      { m: ['c1'], other: ['x1'] },
      [
        { moduleSlug: 'm', courseId: 'c1', completedAt: at },
        { moduleSlug: 'm', courseId: 'c3', completedAt: at },
        { moduleSlug: 'new', courseId: 'n1', completedAt: at },
      ]
    );
    expect(merged).toEqual({ m: ['c1', 'c3'], other: ['x1'], new: ['n1'] });
  });

  it('ignores corrupted storage', () => {
    const storage = memoryStorage();
    storage.setItem('karatou.progress.outbox.u1', '{not json');
    expect(readOutbox('u1', storage)).toEqual([]);
    storage.setItem('karatou.progress.outbox.u1', JSON.stringify([{ moduleSlug: 'm' }, { moduleSlug: 'm', courseId: 'c', completedAt: at }]));
    expect(readOutbox('u1', storage)).toHaveLength(1);
  });

  it('groups by module for one bulk insert each', () => {
    const groups = groupByModule([
      { moduleSlug: 'a', courseId: '1', completedAt: at },
      { moduleSlug: 'b', courseId: '2', completedAt: at },
      { moduleSlug: 'a', courseId: '3', completedAt: at },
    ]);
    expect(Object.keys(groups)).toEqual(['a', 'b']);
    expect(groups.a.map((item) => item.courseId)).toEqual(['1', '3']);
  });
});
