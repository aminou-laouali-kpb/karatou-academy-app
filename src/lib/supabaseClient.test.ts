import { afterEach, describe, expect, it, vi } from 'vitest';
import { fetchWithTimeout } from './supabaseClient';

describe('fetchWithTimeout', () => {
  afterEach(() => vi.unstubAllGlobals());

  it('gives database and auth calls a deadline', async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response('{}'));
    vi.stubGlobal('fetch', fetchMock);
    await fetchWithTimeout('https://x.supabase.co/rest/v1/karatou_courses');
    expect(fetchMock.mock.calls[0][1]?.signal).toBeInstanceOf(AbortSignal);
  });

  it('leaves Edge Functions (lesson generation takes minutes) and caller signals alone', async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response('{}'));
    vi.stubGlobal('fetch', fetchMock);
    await fetchWithTimeout('https://x.supabase.co/functions/v1/admin-generate-lesson', { method: 'POST' });
    expect(fetchMock.mock.calls[0][1]?.signal).toBeUndefined();
    const own = new AbortController().signal;
    await fetchWithTimeout('https://x.supabase.co/rest/v1/x', { signal: own });
    expect(fetchMock.mock.calls[1][1]?.signal).toBe(own);
  });
});
