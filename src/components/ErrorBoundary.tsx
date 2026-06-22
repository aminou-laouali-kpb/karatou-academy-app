import { Component, ErrorInfo, ReactNode } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import type { Language } from '../data/translations';

// Self-contained trilingual copy: the boundary must render even if something
// below the language provider is broken. `useLanguage()` falls back to French
// via the default context when no provider is reachable.
const COPY: Record<Language, { title: string; body: string; reload: string }> = {
  fr: {
    title: 'Une erreur est survenue',
    body: "Désolé, un problème inattendu s'est produit. Vous pouvez recharger la page pour continuer.",
    reload: 'Recharger la page',
  },
  en: {
    title: 'Something went wrong',
    body: 'Sorry, an unexpected problem occurred. You can reload the page to continue.',
    reload: 'Reload the page',
  },
  ha: {
    title: 'An samu matsala',
    body: 'Yi haƙuri, an samu kuskure ba zato ba tsammani. Za ka iya sake loda shafin don ci gaba.',
    reload: 'Sake loda shafin',
  },
};

function ErrorFallback() {
  const { lang } = useLanguage();
  const copy = COPY[lang] ?? COPY.fr;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div
        role="alert"
        className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-7 text-center shadow-blue-md"
      >
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
          <span className="text-2xl" aria-hidden="true">⚠️</span>
        </div>
        <h1 className="font-playfair text-xl font-bold text-gray-900">{copy.title}</h1>
        <p className="mt-2 text-sm text-gray-500">{copy.body}</p>
        <button
          autoFocus
          onClick={() => window.location.reload()}
          className="mt-5 inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          {copy.reload}
        </button>
      </div>
    </div>
  );
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

// Catches render-time exceptions anywhere below it (including rejected lazy
// imports surfaced through Suspense — e.g. a chunk that fails to load on a flaky
// 2G connection) and shows a localized recovery screen instead of a blank page.
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // TODO(KPB-34): forward to Sentry once error monitoring is wired.
    console.error('[ErrorBoundary]', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}
