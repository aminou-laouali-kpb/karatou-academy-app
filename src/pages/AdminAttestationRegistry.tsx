import { FormEvent, useEffect, useState } from 'react';
import { AlertCircle, Ban, CheckCircle2, Search } from 'lucide-react';
import { AdminNav } from '../layouts/AdminNav';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';
import { useLanguage } from '../hooks/useLanguage';
import {
  AttestationRecord,
  revokeAttestation,
  searchAttestations,
} from '../services/attestationRegistry';

const inputClass =
  'mt-1.5 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-body outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15';

export function AdminAttestationRegistry() {
  const { authMode } = useAuth();
  const { t } = useLanguage();
  const isSupabase = authMode === 'supabase';

  const [query, setQuery] = useState('');
  const [records, setRecords] = useState<AttestationRecord[]>([]);
  // Starts true in Supabase mode: the initial listing is fetched on mount, so
  // the button must read "searching" from the first paint (and no setState is
  // called synchronously inside the effect).
  const [loading, setLoading] = useState(isSupabase);
  const [notice, setNotice] = useState<{ tone: 'success' | 'error'; message: string } | null>(null);
  const [revokingId, setRevokingId] = useState<string | null>(null);
  const [reason, setReason] = useState<Record<string, string>>({});

  const runSearch = async (value: string) => {
    setLoading(true);
    try {
      setRecords(await searchAttestations(value));
    } catch (error) {
      setNotice({ tone: 'error', message: error instanceof Error ? error.message : 'error' });
    } finally {
      setLoading(false);
    }
  };

  // Show the latest issued attestations as soon as the page opens.
  useEffect(() => {
    if (!isSupabase) return;
    let active = true;
    searchAttestations('')
      .then((rows) => { if (active) setRecords(rows); })
      .catch((error: unknown) => {
        if (active) setNotice({ tone: 'error', message: error instanceof Error ? error.message : 'error' });
      })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, [isSupabase]);

  const handleSearch = (event: FormEvent) => {
    event.preventDefault();
    setNotice(null);
    void runSearch(query);
  };

  const handleRevoke = async (record: AttestationRecord) => {
    if (!window.confirm(t('regRevokeConfirm'))) return;
    setNotice(null);
    setRevokingId(record.id);
    try {
      const updated = await revokeAttestation(record.id, reason[record.id] || '');
      setRecords((current) => current.map((item) => (item.id === updated.id ? updated : item)));
      setNotice({ tone: 'success', message: `${t('regRevoked')}: ${updated.id}` });
    } catch (error) {
      setNotice({ tone: 'error', message: error instanceof Error ? error.message : 'error' });
    } finally {
      setRevokingId(null);
    }
  };

  const statusBadge = (record: AttestationRecord) => {
    if (record.status === 'revoked') return <Badge variant="red">{t('regRevokedBadge')}</Badge>;
    if (record.status === 'expired') return <Badge variant="gold">{t('regExpiredBadge')}</Badge>;
    return <Badge variant="green">{t('regActiveBadge')}</Badge>;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />

      <main id="main-content" className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-7">
          <p className="text-eyebrow text-blue-600">Karatou</p>
          <h1 className="font-heading text-h1 text-gray-900 mt-1">{t('regTitle')}</h1>
          <p className="text-body text-gray-500 mt-2 max-w-2xl">{t('regIntro')}</p>
        </div>

        {!isSupabase && (
          <div className="mb-6 flex items-start gap-2 rounded-2xl border border-gold-200 bg-gold-50 px-4 py-3 text-body text-gold-700" role="status">
            <AlertCircle size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
            <span>{t('regDemoNote')}</span>
          </div>
        )}

        {notice && (
          <div
            className={`mb-6 flex items-start gap-2 rounded-2xl border px-4 py-3 text-body ${
              notice.tone === 'success'
                ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                : 'border-red-200 bg-red-50 text-red-700'
            }`}
            role={notice.tone === 'success' ? 'status' : 'alert'}
          >
            {notice.tone === 'success'
              ? <CheckCircle2 size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
              : <AlertCircle size={16} className="mt-0.5 shrink-0" aria-hidden="true" />}
            <span>{notice.message}</span>
          </div>
        )}

        <form
          onSubmit={handleSearch}
          className="bg-white rounded-2xl shadow-blue-sm border border-gray-100 p-5 mb-6"
        >
          <label htmlFor="registry-query" className="block">
            <span className="text-body font-medium text-gray-700">{t('regSearchLabel')}</span>
            <input
              id="registry-query"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t('regSearchPlaceholder')}
              className={inputClass}
              autoComplete="off"
            />
          </label>
          <Button type="submit" variant="primary" size="sm" className="mt-3" disabled={loading || !isSupabase}>
            <span className="inline-flex items-center gap-2">
              <Search size={15} aria-hidden="true" />
              {loading ? t('regSearching') : t('regSearchBtn')}
            </span>
          </Button>
        </form>

        <div aria-live="polite">
          {!loading && records.length === 0 && isSupabase && (
            <p className="text-body text-gray-500">{t('regEmpty')}</p>
          )}

          <ul className="space-y-4">
            {records.map((record) => (
              <li
                key={record.id}
                className="bg-white rounded-2xl shadow-blue-sm border border-gray-100 p-5"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-body font-semibold text-gray-900">{record.recipientName}</p>
                    <p className="text-meta font-mono text-gray-500 break-all">{record.id}</p>
                  </div>
                  {statusBadge(record)}
                </div>

                <dl className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <dt className="text-meta text-gray-500">{t('issued')}</dt>
                    <dd className="text-body text-gray-700">{record.issuedAt}</dd>
                  </div>
                  <div>
                    <dt className="text-meta text-gray-500">{t('validUntil')}</dt>
                    <dd className="text-body text-gray-700">{record.expiresAt}</dd>
                  </div>
                  <div>
                    <dt className="text-meta text-gray-500">{t('regIssuedOn')}</dt>
                    <dd className="text-body text-gray-700">{record.issuedOn.slice(0, 10)}</dd>
                  </div>
                </dl>

                {record.status === 'revoked' ? (
                  <p className="mt-4 flex items-start gap-2 rounded-xl bg-red-50 px-3 py-2 text-body text-red-700">
                    <Ban size={15} className="mt-0.5 shrink-0" aria-hidden="true" />
                    <span>
                      {t('attRevokedOn')}: {record.revokedAt ? record.revokedAt.slice(0, 10) : '—'}
                      {record.revocationReason ? ` — ${t('attRevocationReason')}: ${record.revocationReason}` : ''}
                    </span>
                  </p>
                ) : (
                  <div className="mt-4 border-t border-gray-100 pt-4">
                    <label htmlFor={`reason-${record.id}`} className="block">
                      <span className="text-body font-medium text-gray-700">{t('regRevokeReasonLabel')}</span>
                      <input
                        id={`reason-${record.id}`}
                        value={reason[record.id] || ''}
                        onChange={(event) =>
                          setReason((current) => ({ ...current, [record.id]: event.target.value }))
                        }
                        className={inputClass}
                        autoComplete="off"
                      />
                    </label>
                    <Button
                      variant="danger"
                      size="sm"
                      className="mt-3"
                      disabled={revokingId === record.id}
                      onClick={() => { void handleRevoke(record); }}
                    >
                      <span className="inline-flex items-center gap-2">
                        <Ban size={15} aria-hidden="true" />
                        {revokingId === record.id ? t('regRevoking') : t('regRevokeBtn')}
                      </span>
                    </Button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
