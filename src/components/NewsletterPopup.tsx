import { FormEvent, useEffect, useState } from 'react';
import { Mail, X } from 'lucide-react';
import { Button } from './Button';
import { addSubscribers, POPUP_SEEN_KEY } from '../services/newsletterService';
import { useLanguage } from '../hooks/useLanguage';
import type { Language } from '../data/translations';

// Self-contained copy: keeps the popup decoupled from translations.ts and lets
// it ship even if the global dictionary is bypassed (e.g. offline-only mode).
const COPY: Record<Language, {
  ariaLabel: string;
  close: string;
  title: string;
  body: string;
  invalidEmail: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  submit: string;
  dismiss: string;
  doneTitle: string;
  doneBody: string;
}> = {
  fr: {
    ariaLabel: 'Rejoindre la newsletter Karatou',
    close: 'Fermer',
    title: 'Restez informé',
    body: 'Recevez nos nouveaux modules, actualités IA et opportunités de formation directement dans votre boîte mail.',
    invalidEmail: 'Adresse email invalide.',
    namePlaceholder: 'Votre prénom (optionnel)',
    emailPlaceholder: 'votre@email.com',
    submit: "S'inscrire gratuitement",
    dismiss: 'Non merci',
    doneTitle: 'Inscription confirmée ✓',
    doneBody: 'Bienvenue dans la communauté Karatou !',
  },
  en: {
    ariaLabel: 'Join the Karatou newsletter',
    close: 'Close',
    title: 'Stay in the loop',
    body: 'Get our new modules, AI news, and training opportunities straight to your inbox.',
    invalidEmail: 'Invalid email address.',
    namePlaceholder: 'Your first name (optional)',
    emailPlaceholder: 'your@email.com',
    submit: 'Subscribe — it’s free',
    dismiss: 'No thanks',
    doneTitle: 'Subscription confirmed ✓',
    doneBody: 'Welcome to the Karatou community!',
  },
  ha: {
    ariaLabel: 'Shiga jaridar Karatou',
    close: 'Rufe',
    title: 'Kasance da labari',
    body: 'Sami sabbin darussa, labaran AI, da damar horo kai tsaye a imel ɗinka.',
    invalidEmail: 'Adireshin imel ba daidai ba.',
    namePlaceholder: 'Sunanka na farko (na zaɓi)',
    emailPlaceholder: 'imel@ka.com',
    submit: 'Yi rajista — kyauta',
    dismiss: 'A’a, na gode',
    doneTitle: 'An tabbatar da rajista ✓',
    doneBody: 'Barka da zuwa al’ummar Karatou!',
  },
};

export function NewsletterPopup() {
  const { lang } = useLanguage();
  const t = COPY[lang] ?? COPY.fr;
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
      setError(t.invalidEmail);
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
      aria-label={t.ariaLabel}
      className="fixed bottom-5 right-5 z-50 w-[340px] max-w-[calc(100vw-2rem)] rounded-2xl bg-white border border-gray-200 shadow-2xl animate-slide-up"
    >
      <div className="bg-blue-900 rounded-t-2xl px-5 pt-5 pb-4 relative">
        <button
          onClick={dismiss}
          aria-label={t.close}
          className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X size={16} />
        </button>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
            <Mail size={18} className="text-white" />
          </div>
          <p className="font-playfair text-lg font-bold text-white leading-tight">
            {t.title}
          </p>
        </div>
        <p className="text-blue-100 text-sm leading-relaxed">
          {t.body}
        </p>
      </div>

      <div className="px-5 py-4">
        {done ? (
          <div className="text-center py-2">
            <p className="text-emerald-600 font-semibold text-sm">{t.doneTitle}</p>
            <p className="text-gray-500 text-xs mt-1">{t.doneBody}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            {error && (
              <p className="text-xs text-red-600 bg-red-50 rounded-lg px-3 py-2">{error}</p>
            )}
            <input
              type="text"
              placeholder={t.namePlaceholder}
              autoComplete="given-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
            />
            <input
              type="email"
              placeholder={t.emailPlaceholder}
              autoComplete="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(''); }}
              required
              className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
            />
            <Button type="submit" variant="primary" size="sm" className="w-full">
              {t.submit}
            </Button>
            <button
              type="button"
              onClick={dismiss}
              className="w-full text-xs text-gray-400 hover:text-gray-600 transition-colors py-1"
            >
              {t.dismiss}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
