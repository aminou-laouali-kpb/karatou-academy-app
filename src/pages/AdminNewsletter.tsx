import { FormEvent, useCallback, useEffect, useState } from 'react';
import { Download, Mail, Send, Trash2, Users } from 'lucide-react';
import { AdminNav } from '../layouts/AdminNav';
import { Button } from '../components/Button';
import {
  deleteDraft,
  exportSubscribersCSV,
  fetchSubscribers,
  getDrafts,
  markSent,
  NewsletterDraft,
  NewsletterSubscriber,
  removeSubscriber,
  saveDraft,
} from '../services/newsletterService';

const inputClass =
  'w-full rounded-xl border border-gray-200 px-3 py-2.5 text-body outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15';

type Tab = 'subscribers' | 'compose';

const SOURCE_LABEL: Record<NewsletterSubscriber['source'], string> = {
  attestation: 'Attestation',
  popup: 'Site web',
  manual: 'Manuel',
};

export function AdminNewsletter() {
  const [tab, setTab] = useState<Tab>('subscribers');
  const [subscribers, setSubscribers] = useState<NewsletterSubscriber[]>([]);
  const [loading, setLoading] = useState(true);
  const [drafts, setDrafts] = useState<NewsletterDraft[]>(() => getDrafts());

  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [sending, setSending] = useState(false);
  const [notice, setNotice] = useState<{ tone: 'success' | 'error'; text: string } | null>(null);

  const refreshSubscribers = useCallback(async () => {
    setLoading(true);
    try {
      setSubscribers(await fetchSubscribers());
    } finally {
      setLoading(false);
    }
  }, []);

  // Initial load: set state only from async callbacks (not synchronously in the
  // effect body) — `loading` already starts true. Manual refreshes go through
  // refreshSubscribers() from event handlers.
  useEffect(() => {
    let active = true;
    fetchSubscribers()
      .then((subs) => { if (active) setSubscribers(subs); })
      .catch(() => undefined)
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, []);

  const refreshDrafts = useCallback(() => setDrafts(getDrafts()), []);

  const handleRemoveSub = async (id: string) => {
    await removeSubscriber(id);
    void refreshSubscribers();
  };

  const handleExportCSV = () => {
    const csv = exportSubscribersCSV(subscribers);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'newsletter_abonnes.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleSend = async (event: FormEvent) => {
    event.preventDefault();
    if (!subject.trim() || !body.trim()) {
      setNotice({ tone: 'error', text: 'Le sujet et le corps de la newsletter sont requis.' });
      return;
    }
    setSending(true);
    setNotice(null);

    const draft = saveDraft({ subject: subject.trim(), body: body.trim() });

    await new Promise((resolve) => setTimeout(resolve, 1200));

    markSent(draft.id, subscribers.length);
    refreshDrafts();
    setSending(false);
    setNotice({
      tone: 'success',
      text: `Newsletter enregistrée pour ${subscribers.length} abonné${subscribers.length !== 1 ? 's' : ''}. (Intégrez un service d'envoi email pour une diffusion réelle.)`,
    });
    setSubject('');
    setBody('');
  };

  const handleDeleteDraft = (id: string) => {
    deleteDraft(id);
    refreshDrafts();
  };

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' });

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />

      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-eyebrow text-blue-600">Karatou</p>
            <h1 className="font-heading text-h1 text-gray-900 mt-1">Newsletter</h1>
            <p className="text-body text-gray-500 mt-2 max-w-2xl">
              Gérez vos abonnés et rédigez vos campagnes email. Les participants certifiés avec email sont ajoutés automatiquement.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-2xl px-4 py-3 text-body">
            <Users size={16} className="text-blue-600" />
            <span className="font-semibold text-blue-900">{subscribers.length}</span>
            <span className="text-blue-700">abonné{subscribers.length !== 1 ? 's' : ''}</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-gray-100 rounded-xl p-1 w-fit mb-6">
          {([
            { key: 'subscribers', label: 'Abonnés', icon: Users },
            { key: 'compose', label: 'Rédiger & envoyer', icon: Mail },
          ] as const).map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => { setTab(key); setNotice(null); }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-body font-medium transition-all ${
                tab === key
                  ? 'bg-white text-blue-700 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Icon size={15} />
              {label}
            </button>
          ))}
        </div>

        {tab === 'subscribers' && (
          <div className="bg-white border border-gray-200 rounded-2xl shadow-blue-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between gap-3 flex-wrap">
              <h2 className="font-semibold text-gray-900">Liste des abonnés</h2>
              <Button variant="outline" size="sm" onClick={handleExportCSV} className="flex items-center gap-2">
                <Download size={14} /> Exporter CSV
              </Button>
            </div>

            {loading ? (
              <div className="px-5 py-16 text-center text-body text-gray-400">
                <div className="w-6 h-6 border-2 border-blue-200 border-t-blue-500 rounded-full animate-spin mx-auto mb-3" />
                Chargement des abonnés…
              </div>
            ) : subscribers.length === 0 ? (
              <div className="px-5 py-16 text-center text-body text-gray-400">
                <Mail size={32} className="mx-auto mb-3 text-gray-300" />
                <p className="font-medium text-gray-500 mb-1">Aucun abonné pour l'instant</p>
                <p className="text-meta max-w-xs mx-auto">
                  Les participants certifiés avec email seront ajoutés automatiquement. Les visiteurs peuvent s'abonner via la popup du site.
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-body">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-100">
                      <th className="text-left px-5 py-3 text-eyebrow text-gray-500">Nom</th>
                      <th className="text-left px-5 py-3 text-eyebrow text-gray-500">Email</th>
                      <th className="text-left px-4 py-3 text-eyebrow text-gray-500">Téléphone</th>
                      <th className="text-left px-4 py-3 text-eyebrow text-gray-500">Source</th>
                      <th className="text-left px-4 py-3 text-eyebrow text-gray-500">Inscrit le</th>
                      <th className="px-4 py-3" />
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {subscribers.map((sub) => (
                      <tr key={sub.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-5 py-3 font-medium text-gray-900 whitespace-nowrap">{sub.name}</td>
                        <td className="px-5 py-3 text-gray-600">{sub.email}</td>
                        <td className="px-4 py-3 text-gray-500">{sub.phone || '—'}</td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-meta font-medium ${
                            sub.source === 'attestation'
                              ? 'bg-blue-50 text-blue-700'
                              : sub.source === 'popup'
                              ? 'bg-emerald-50 text-emerald-700'
                              : 'bg-gray-100 text-gray-600'
                          }`}>
                            {SOURCE_LABEL[sub.source]}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-gray-500 whitespace-nowrap">{formatDate(sub.joinedAt)}</td>
                        <td className="px-4 py-3 text-right">
                          <button
                            onClick={() => void handleRemoveSub(sub.id)}
                            aria-label="Supprimer"
                            className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded"
                          >
                            <Trash2 size={15} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {tab === 'compose' && (
          <div className="grid lg:grid-cols-[1fr_360px] gap-6">
            <div className="space-y-5">
              <div className="bg-white border border-gray-200 rounded-2xl shadow-blue-sm p-6">
                <h2 className="font-semibold text-gray-900 mb-4">Nouvelle newsletter</h2>

                {notice && (
                  <div className={`mb-4 rounded-xl border px-4 py-3 text-body ${
                    notice.tone === 'success'
                      ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                      : 'border-red-200 bg-red-50 text-red-700'
                  }`}>
                    {notice.text}
                  </div>
                )}

                <form onSubmit={handleSend} className="space-y-4">
                  <div>
                    <label className="block text-body font-medium text-gray-700 mb-1.5">
                      Sujet de l'email
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Nouveau module disponible — IA et données"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-body font-medium text-gray-700 mb-1.5">
                      Corps du message
                    </label>
                    <textarea
                      placeholder="Rédigez votre newsletter ici. Vous pouvez utiliser du texte simple ou du markdown..."
                      value={body}
                      onChange={(e) => setBody(e.target.value)}
                      required
                      rows={12}
                      className={`${inputClass} resize-y font-mono text-meta leading-relaxed`}
                    />
                    <p className="text-meta text-gray-400 mt-1">{body.length} caractères</p>
                  </div>
                  <div className="flex items-center justify-between pt-2 flex-wrap gap-3">
                    <p className="text-body text-gray-500">
                      Envoi à <span className="font-semibold text-gray-700">{subscribers.length}</span> abonné{subscribers.length !== 1 ? 's' : ''}
                    </p>
                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      disabled={sending || subscribers.length === 0}
                      className="flex items-center gap-2"
                    >
                      {sending ? (
                        <>Envoi en cours…</>
                      ) : (
                        <><Send size={15} /> Envoyer la newsletter</>
                      )}
                    </Button>
                  </div>
                  {subscribers.length === 0 && !loading && (
                    <p className="text-meta text-amber-600 bg-amber-50 rounded-lg px-3 py-2">
                      Aucun abonné. Générez des attestations avec emails, ou attendez des inscriptions via la popup du site.
                    </p>
                  )}
                </form>
              </div>
            </div>

            {/* Sent history */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-blue-sm p-5">
              <h2 className="font-semibold text-gray-900 mb-4">Historique des envois</h2>
              {drafts.length === 0 ? (
                <p className="text-body text-gray-400 text-center py-8">Aucun envoi pour l'instant.</p>
              ) : (
                <div className="space-y-3">
                  {drafts.map((d) => (
                    <div key={d.id} className="rounded-xl border border-gray-100 p-3 group">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <p className="text-body font-medium text-gray-900 truncate">{d.subject}</p>
                          <p className="text-meta text-gray-400 mt-0.5">
                            {d.sentAt ? (
                              <span className="text-emerald-600">Envoyé le {formatDate(d.sentAt)} · {d.recipientCount} destinataires</span>
                            ) : (
                              <span className="text-amber-600">Brouillon — {formatDate(d.createdAt)}</span>
                            )}
                          </p>
                        </div>
                        <button
                          onClick={() => handleDeleteDraft(d.id)}
                          aria-label="Supprimer"
                          className="text-gray-300 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100 flex-shrink-0"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
