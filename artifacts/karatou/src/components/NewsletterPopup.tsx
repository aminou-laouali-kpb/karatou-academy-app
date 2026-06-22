import { FormEvent, useEffect, useState } from 'react';
import { Mail, X } from 'lucide-react';
import { Button } from './Button';
import { addSubscribers, POPUP_SEEN_KEY } from '../services/newsletterService';

export function NewsletterPopup() {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (localStorage.getItem(POPUP_SEEN_KEY)) return;
    const timer = setTimeout(() => setVisible(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    localStorage.setItem(POPUP_SEEN_KEY, '1');
    setVisible(false);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const trimmedEmail = email.trim().toLowerCase();
    if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setError('Adresse email invalide.');
      return;
    }
    addSubscribers([{ name: name.trim() || trimmedEmail, email: trimmedEmail, source: 'popup' }]);
    localStorage.setItem(POPUP_SEEN_KEY, '1');
    setDone(true);
    setTimeout(() => setVisible(false), 2200);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Rejoindre la newsletter Karatou"
      className="fixed bottom-5 right-5 z-50 w-[340px] max-w-[calc(100vw-2rem)] rounded-2xl bg-white border border-gray-200 shadow-2xl animate-slide-up"
    >
      <div className="bg-blue-900 rounded-t-2xl px-5 pt-5 pb-4 relative">
        <button
          onClick={dismiss}
          aria-label="Fermer"
          className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X size={16} />
        </button>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
            <Mail size={18} className="text-white" />
          </div>
          <p className="font-playfair text-lg font-bold text-white leading-tight">
            Restez informé
          </p>
        </div>
        <p className="text-blue-100 text-sm leading-relaxed">
          Recevez nos nouveaux modules, actualités IA et opportunités de formation directement dans votre boîte mail.
        </p>
      </div>

      <div className="px-5 py-4">
        {done ? (
          <div className="text-center py-2">
            <p className="text-emerald-600 font-semibold text-sm">Inscription confirmée ✓</p>
            <p className="text-gray-500 text-xs mt-1">Bienvenue dans la communauté Karatou !</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            {error && (
              <p className="text-xs text-red-600 bg-red-50 rounded-lg px-3 py-2">{error}</p>
            )}
            <input
              type="text"
              placeholder="Votre prénom (optionnel)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
            />
            <input
              type="email"
              placeholder="votre@email.com"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(''); }}
              required
              className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
            />
            <Button type="submit" variant="primary" size="sm" className="w-full">
              S'inscrire gratuitement
            </Button>
            <button
              type="button"
              onClick={dismiss}
              className="w-full text-xs text-gray-400 hover:text-gray-600 transition-colors py-1"
            >
              Non merci
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
