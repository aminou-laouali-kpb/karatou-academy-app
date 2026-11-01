import { describe, expect, it } from 'vitest';
import { lessonNoteStorageKey, readLessonNote, writeLessonNote } from './useLessonNote';

function memoryStorage() {
  const values = new Map<string, string>();
  return {
    getItem: (key: string) => values.get(key) ?? null,
    setItem: (key: string, value: string) => { values.set(key, value); },
  };
}

describe('account-scoped lesson notes', () => {
  it('separates accounts, modules, lessons and sections', () => {
    const a = lessonNoteStorageKey('account-a', 'module', 'lesson', 'practice');
    const b = lessonNoteStorageKey('account-b', 'module', 'lesson', 'practice');
    expect(a).not.toBe(b);
    expect(a).not.toBe(lessonNoteStorageKey('account-a', 'other', 'lesson', 'practice'));
    expect(a).not.toBe(lessonNoteStorageKey('account-a', 'module', 'other', 'practice'));
    expect(a).not.toBe(lessonNoteStorageKey('account-a', 'module', 'lesson', 'reflection'));
  });

  it('restores the exact final value synchronously', () => {
    const storage = memoryStorage();
    const key = lessonNoteStorageKey('account', 'module', 'lesson', 'practice');
    writeLessonNote(storage, key, 'final keystroke ✨');
    expect(readLessonNote(storage, key)).toEqual({ value: 'final keystroke ✨', status: 'saved' });
  });

  it('does not claim success when storage throws or has no record', () => {
    expect(readLessonNote(memoryStorage(), 'missing')).toEqual({ value: '', status: 'idle' });
    expect(() => writeLessonNote({ setItem: () => { throw new Error('quota'); } }, 'key', 'note')).toThrow();
    expect(() => readLessonNote({ getItem: () => { throw new Error('blocked'); } }, 'key')).toThrow();
  });
});
