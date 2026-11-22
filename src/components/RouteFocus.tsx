import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * After a client-side navigation, screen readers stayed on <body> and the tab
 * title never changed, so a blind learner could not tell that the page had
 * changed. On every route change (not the first load) this moves focus to the
 * page's main landmark and names the tab after the page's <h1>.
 */
export function RouteFocus() {
  const { pathname } = useLocation();
  const firstRender = useRef(true);

  useEffect(() => {
    const update = () => {
      const heading = document.querySelector('main h1, h1');
      const text = heading?.textContent?.trim();
      document.title = text ? `${text} — Karatou Academy` : 'Karatou Academy';
      if (firstRender.current) {
        firstRender.current = false;
        return;
      }
      const main = document.getElementById('main-content');
      if (main) {
        if (!main.hasAttribute('tabindex')) main.setAttribute('tabindex', '-1');
        main.focus({ preventScroll: true });
      }
    };
    // Lazy pages render after Suspense resolves (a chunk may take a while on
    // 2G): wait for the page's own <main>, up to ~3 s.
    let attempts = 0;
    let timer = 0;
    const waitForPage = () => {
      if (document.getElementById('main-content') || attempts >= 12) {
        update();
        return;
      }
      attempts += 1;
      timer = window.setTimeout(waitForPage, 250);
    };
    const frame = requestAnimationFrame(waitForPage);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}
