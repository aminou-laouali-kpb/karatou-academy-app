import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { initMonitoring } from './lib/monitoring';
import { applyBootRedirect } from './lib/spaRedirect';
// Self-hosted fonts (bundled, no CDN). Variable fonts ship the whole weight axis
// in a single woff2, so Inter/Literata cover all weights with one file each.
// DM Mono is not yet variable on fontsource, so only the weights we actually use.
import '@fontsource-variable/inter';
import '@fontsource-variable/literata';
import '@fontsource/dm-mono/400.css';
import '@fontsource/dm-mono/500.css';
import App from './App.tsx';
import './index.css';

// Recover a deep link that a static host answered with its 404 fallback
// (shared certificate URLs, scanned attestation QR codes). Must run before the
// router reads the location.
applyBootRedirect();

// Opt-in: no-op unless VITE_SENTRY_DSN is set in the environment.
initMonitoring();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
