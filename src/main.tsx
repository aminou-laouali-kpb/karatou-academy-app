import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Self-hosted fonts (bundled, no CDN). Variable fonts ship the whole weight axis
// in a single woff2, so DM Sans/Playfair cover all weights with one file each.
// DM Mono is not yet variable on fontsource, so only the weights we actually use.
import '@fontsource-variable/dm-sans';
import '@fontsource-variable/playfair-display';
import '@fontsource/dm-mono/400.css';
import '@fontsource/dm-mono/500.css';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
