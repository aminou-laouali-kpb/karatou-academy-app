import { useState } from 'react';
import { Share2, Check, Copy } from 'lucide-react';
// Inline SVG marks for WhatsApp / LinkedIn — keeps us off the brand-icon-font
// hook and respects the assets-only-on-disk rule.
import { useLanguage } from '../hooks/useLanguage';
import type { Language } from '../data/translations';

interface ShareCertificateButtonsProps {
  /** Public verification URL (verify.karatou.academy/verify/<uid>). */
  url: string;
  /** Module name to mention in the share message. */
  moduleName: string;
  /** Recipient name — used in the share text. */
  holderName?: string;
}

const COPY: Record<Language, { share: string; message: (m: string, n?: string) => string; copy: string; copied: string }> = {
  fr: {
    share: 'Partager',
    message: (m, n) =>
      n
        ? `🎓 ${n} a obtenu sa certification Karatou Academy : ${m}. Vérifiez son authenticité :`
        : `🎓 J'ai obtenu ma certification Karatou Academy : ${m}. Vérifiez son authenticité :`,
    copy: 'Copier le lien',
    copied: 'Lien copié',
  },
  en: {
    share: 'Share',
    message: (m, n) =>
      n
        ? `🎓 ${n} earned a Karatou Academy certification: ${m}. Verify it here:`
        : `🎓 I earned my Karatou Academy certification: ${m}. Verify it here:`,
    copy: 'Copy link',
    copied: 'Link copied',
  },
  ha: {
    share: 'Raba',
    message: (m, n) =>
      n
        ? `🎓 ${n} ya samu takardar shaida ta Karatou Academy: ${m}. Tabbatar a nan:`
        : `🎓 Na samu takardar shaida ta Karatou Academy: ${m}. Tabbatar a nan:`,
    copy: 'Kwafi mahaɗin',
    copied: 'An kwafa',
  },
};

export function ShareCertificateButtons({ url, moduleName, holderName }: ShareCertificateButtonsProps) {
  const { lang } = useLanguage();
  const copy = COPY[lang] ?? COPY.fr;
  const text = copy.message(moduleName, holderName);
  const [copied, setCopied] = useState(false);

  // Native share where supported (mobile). Fallback to opening WhatsApp/LinkedIn.
  const handleNativeShare = async () => {
    if (typeof navigator !== 'undefined' && 'share' in navigator) {
      try {
        await navigator.share({ title: 'Karatou Academy', text, url });
      } catch {
        // user dismissed — ignore
      }
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`;
  const linkedinHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  const hasNativeShare = typeof navigator !== 'undefined' && 'share' in navigator;

  const btnClass =
    'inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs font-semibold text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2';

  return (
    <div className="flex flex-wrap items-center gap-2">
      {hasNativeShare && (
        <button type="button" onClick={handleNativeShare} className={btnClass} aria-label={copy.share}>
          <Share2 size={14} aria-hidden="true" /> {copy.share}
        </button>
      )}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`${btnClass} !text-emerald-700 !border-emerald-200 hover:!bg-emerald-50`}
        aria-label="WhatsApp"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.555-5.338 11.89-11.893 11.89a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.527 5.286l-.999 3.648 3.961-.633zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
        </svg>
        WhatsApp
      </a>
      <a
        href={linkedinHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`${btnClass} !text-blue-700 !border-blue-200 hover:!bg-blue-50`}
        aria-label="LinkedIn"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
        LinkedIn
      </a>
      <button type="button" onClick={handleCopy} className={btnClass} aria-label={copy.copy}>
        {copied ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
        {copied ? copy.copied : copy.copy}
      </button>
    </div>
  );
}
