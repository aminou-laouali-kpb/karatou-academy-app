import { describe, expect, it } from 'vitest';
import { isFramedByAnotherSite } from './frameGuard';

function fakeWindow(top: unknown, origin = 'https://course.karatou.academy') {
  const self = { location: { origin } } as unknown as Window;
  (self as unknown as { self: Window }).self = self;
  (self as unknown as { top: unknown }).top = top === 'self' ? self : top;
  return self;
}

describe('frame guard', () => {
  it('is quiet when the app is the top window', () => {
    expect(isFramedByAnotherSite(fakeWindow('self'))).toBe(false);
  });

  it('allows a same-origin parent', () => {
    expect(isFramedByAnotherSite(fakeWindow({ location: { origin: 'https://course.karatou.academy' } }))).toBe(false);
  });

  it('detects a cross-origin parent (reading its location throws)', () => {
    const crossOrigin = {
      get location(): Location {
        throw new DOMException('Blocked a frame with origin', 'SecurityError');
      },
    };
    expect(isFramedByAnotherSite(fakeWindow(crossOrigin))).toBe(true);
  });
});
