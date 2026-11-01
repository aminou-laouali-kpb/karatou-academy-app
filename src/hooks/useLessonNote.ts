import { useEffect, useMemo, useState } from 'react';

export type NoteSaveStatus = 'idle' | 'saved' | 'error';

type NoteState = {
  key: string | null;
  value: string;
  status: NoteSaveStatus;
};

export function lessonNoteStorageKey(
  accountId: string,
  moduleSlug: string,
  lessonId: string,
  section: 'practice' | 'reflection',
) {
  return `karatou.lesson-note.v1:${JSON.stringify([accountId, moduleSlug, lessonId, section])}`;
}

export function readLessonNote(storage: Pick<Storage, 'getItem'>, key: string) {
  const value = storage.getItem(key);
  return { value: value ?? '', status: value === null ? 'idle' as const : 'saved' as const };
}

export function writeLessonNote(storage: Pick<Storage, 'setItem'>, key: string, value: string) {
  storage.setItem(key, value);
}

export function useLessonNote(
  accountId: string | undefined,
  moduleSlug: string | undefined,
  lessonId: string | undefined,
  section: 'practice' | 'reflection',
) {
  const key = useMemo(
    () => accountId && moduleSlug && lessonId
      ? lessonNoteStorageKey(accountId, moduleSlug, lessonId, section)
      : null,
    [accountId, moduleSlug, lessonId, section],
  );
  const [state, setState] = useState<NoteState>({ key: null, value: '', status: 'idle' });

  useEffect(() => {
    let active = true;
    const timer = window.setTimeout(() => {
      if (!active) return;
      if (!key) {
        setState({ key, value: '', status: 'idle' });
        return;
      }
      try {
        setState({ key, ...readLessonNote(window.localStorage, key) });
      } catch {
        setState({ key, value: '', status: 'error' });
      }
    }, 0);
    return () => {
      active = false;
      window.clearTimeout(timer);
    };
  }, [key]);

  const change = (value: string) => {
    if (!key) {
      setState({ key, value, status: 'error' });
      return;
    }
    try {
      // localStorage is synchronous, so even a reload immediately after the
      // final keystroke cannot race a debounce or an unflushed state effect.
      writeLessonNote(window.localStorage, key, value);
      setState({ key, value, status: 'saved' });
    } catch {
      setState({ key, value, status: 'error' });
    }
  };

  // Never flash a previous account/lesson's draft while the next key loads.
  if (state.key !== key) return { value: '', status: 'idle' as const, change };
  return { value: state.value, status: state.status, change };
}
