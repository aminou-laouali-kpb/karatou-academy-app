import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replit (and similar) serve the Vite dev server behind an HTTPS proxy on a
// *.replit.dev host. Detecting it lets us fix the HMR websocket port.
const isReplit = Boolean(process.env.REPL_ID);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    // Bind 0.0.0.0 so a hosted preview proxy can reach the dev server.
    host: true,
    // Allow the dev server to be served through hosted preview domains.
    allowedHosts: true,
    // On Replit the public HTTPS proxy terminates on 443, so HMR must target it.
    ...(isReplit ? { hmr: { clientPort: 443 } } : {}),
  },
});
