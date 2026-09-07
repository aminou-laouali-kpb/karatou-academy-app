import { PointerEvent as ReactPointerEvent, useEffect, useMemo, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import {
  AlignCenter, AlignLeft, AlignRight, ChevronLeft, ChevronRight,
  Ban, Download, FileSpreadsheet, FileText, Loader2, Plus, QrCode, RefreshCw, Search, Trash2, Image as ImageIcon,
} from 'lucide-react';
import { AdminNav } from '../layouts/AdminNav';
import { Button } from '../components/Button';
import {
  ArchivedAttestation, detectTemplateType, generateAttestationsZip, parseParticipants,
  NamePlacement, Participant, QrPlacement, revokeArchivedAttestation, searchAttestationArchive,
  TemplateType, TextAlign, validateTemplate,
} from '../services/attestationGenerator';
import { addSubscribers } from '../services/newsletterService';
import { trackEvent } from '../lib/analytics';
// Bundle the worker that matches the installed pdfjs-dist version. `?url` lets
// Vite emit it as a hashed asset that resolves correctly in production builds
// (more robust than `new URL(..., import.meta.url)`, which can break under a
// non-root base path / static hosting).
import pdfWorkerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url';

// pdf.js worker (Vite-friendly, version-locked to the dependency).
pdfjs.GlobalWorkerOptions.workerSrc = pdfWorkerUrl;

const PREVIEW_WIDTH = 560;
const inputClass = 'w-full rounded-lg border border-gray-200 px-2.5 py-1.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15';

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

type DragKind = 'name' | 'name-resize' | 'id' | 'id-resize' | 'qr';

// Reusable controls for any positionable text element (name, certificate ID, …).
// Replaces what used to be an inline "Texte du nom" block, so admins get the
// exact same UI for the holder's name and the certificate ID without duplication.
function TextControls({ title, placement, onChange }: {
  title: string;
  placement: NamePlacement;
  onChange: (updater: (p: NamePlacement) => NamePlacement) => void;
}) {
  return (
    <section className="bg-white border border-gray-200 rounded-2xl p-5 shadow-blue-sm space-y-3">
      <h2 className="font-semibold text-gray-900">{title}</h2>
      <div className="flex gap-2">
        {([['left', AlignLeft], ['center', AlignCenter], ['right', AlignRight]] as const).map(([value, Icon]) => (
          <button
            key={value}
            onClick={() => onChange((p) => ({ ...p, align: value as TextAlign }))}
            aria-label={`Aligner ${value}`}
            className={`flex-1 flex items-center justify-center rounded-lg border py-2 ${placement.align === value ? 'border-blue-400 bg-blue-50 text-blue-600' : 'border-gray-200 text-gray-500'}`}
          >
            <Icon size={16} />
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3">
        <label className="block text-xs font-medium text-gray-600">Taille (pt)
          <input type="number" min={6} max={120} value={placement.fontSize} onChange={(e) => onChange((p) => ({ ...p, fontSize: clamp(Number(e.target.value) || 0, 6, 200) }))} className={inputClass} />
        </label>
        <label className="block text-xs font-medium text-gray-600">Couleur
          <span className="mt-1 flex items-center gap-2">
            <input type="color" value={placement.colorHex} onChange={(e) => onChange((p) => ({ ...p, colorHex: e.target.value }))} className="h-8 w-9 rounded border border-gray-200" />
            <input type="text" value={placement.colorHex} onChange={(e) => onChange((p) => ({ ...p, colorHex: e.target.value }))} className={inputClass} />
          </span>
        </label>
        <label className="block text-xs font-medium text-gray-600">Position X (%)
          <input type="number" min={0} max={100} value={Math.round(placement.xRatio * 100)} onChange={(e) => onChange((p) => ({ ...p, xRatio: clamp(Number(e.target.value) / 100, 0, 1 - p.widthRatio) }))} className={inputClass} />
        </label>
        <label className="block text-xs font-medium text-gray-600">Position Y (%)
          <input type="number" min={0} max={100} value={Math.round(placement.yRatio * 100)} onChange={(e) => onChange((p) => ({ ...p, yRatio: clamp(Number(e.target.value) / 100, 0, 0.98) }))} className={inputClass} />
        </label>
        <label className="block text-xs font-medium text-gray-600 col-span-2">Largeur de la zone (%)
          <input type="number" min={5} max={100} value={Math.round(placement.widthRatio * 100)} onChange={(e) => onChange((p) => ({ ...p, widthRatio: clamp(Number(e.target.value) / 100, 0.05, 1 - p.xRatio) }))} className={inputClass} />
        </label>
      </div>
    </section>
  );
}

export function AdminAttestations() {
  const [templateBuffer, setTemplateBuffer] = useState<ArrayBuffer | null>(null);
  const [templateType, setTemplateType] = useState<TemplateType>('pdf');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [manualName, setManualName] = useState('');
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [current, setCurrent] = useState(0);
  const [pdfPoints, setPdfPoints] = useState<{ width: number; height: number } | null>(null);
  const [error, setError] = useState('');
  const [generating, setGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState('');
  const [archive, setArchive] = useState<ArchivedAttestation[]>([]);
  const [archiveQuery, setArchiveQuery] = useState('');
  const [archiveError, setArchiveError] = useState('');
  const [archiveLoading, setArchiveLoading] = useState(false);
  const [revokingId, setRevokingId] = useState<string | null>(null);

  const [name, setName] = useState<NamePlacement>({
    xRatio: 0.25, yRatio: 0.45, widthRatio: 0.5, fontSize: 28, colorHex: '#1e3a8a', align: 'center',
  });
  const [certId, setCertId] = useState<NamePlacement>({
    xRatio: 0.25, yRatio: 0.6, widthRatio: 0.5, fontSize: 12, colorHex: '#475569', align: 'center',
  });
  const [qr, setQr] = useState<QrPlacement>({ xRatio: 0.8, yRatio: 0.78, sizeRatio: 0.12 });

  const wrapperRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ kind: DragKind; offsetX: number; offsetY: number } | null>(null);

  const previewFile = useMemo(
    () => (templateBuffer && templateType === 'pdf' ? { data: new Uint8Array(templateBuffer.slice(0)) } : null),
    [templateBuffer, templateType]
  );
  const previewName = participants[current]?.name || 'Nom du participant';
  const previewId = `KA-ATT-${new Date().getFullYear()}-XXXXXX`;
  const subscribableCount = participants.filter((p) => p.email).length;
  const scale = pdfPoints ? PREVIEW_WIDTH / pdfPoints.width : 1;

  // Revoke the object URL used for the image preview when it's replaced/unmounted.
  useEffect(() => () => { if (imageUrl) URL.revokeObjectURL(imageUrl); }, [imageUrl]);

  useEffect(() => {
    let active = true;
    searchAttestationArchive()
      .then((items) => { if (active) setArchive(items); })
      .catch(() => { if (active) setArchiveError('Le registre des attestations est indisponible pour le moment.'); })
    return () => { active = false; };
  }, []);

  const onTemplateUpload = async (file?: File) => {
    if (!file) return;
    setError('');
    setDone('');
    const type = detectTemplateType(file);
    if (!type) {
      setError('Format non pris en charge. Utilisez un PDF, PNG ou JPG.');
      return;
    }
    try {
      const buffer = await file.arrayBuffer();
      const dimensions = await validateTemplate(buffer, type);
      setPdfPoints(dimensions);
      setTemplateType(type);
      setTemplateBuffer(buffer);
      if (imageUrl) URL.revokeObjectURL(imageUrl);
      setImageUrl(type === 'image' ? URL.createObjectURL(file) : null);
      trackEvent('attestation_template_loaded', { template_type: type });
    } catch (templateError) {
      setError(templateError instanceof Error ? templateError.message : 'Modèle illisible.');
    }
  };

  const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setPdfPoints({ width: e.currentTarget.naturalWidth, height: e.currentTarget.naturalHeight });
  };

  const onExcelUpload = async (file?: File) => {
    if (!file) return;
    setError('');
    setDone('');
    try {
      const parsed = await parseParticipants(file);
      if (parsed.length === 0) {
        setError('Aucun nom trouve dans la premiere colonne du fichier.');
        return;
      }
      setParticipants((prev) => [...prev, ...parsed]);
      setCurrent(0);
      trackEvent('attestation_participants_imported', {
        source: 'spreadsheet',
        participant_count: parsed.length,
      });
    } catch {
      setError('Fichier Excel illisible. Verifiez le format (.xlsx/.xls).');
    }
  };

  const onAddManualName = () => {
    const trimmed = manualName.trim();
    if (!trimmed) return;
    setError('');
    setDone('');
    setParticipants((prev) => [...prev, { name: trimmed }]);
    setManualName('');
    setCurrent((c) => (participants.length === 0 ? 0 : c));
  };

  const onRemoveParticipant = (index: number) => {
    setParticipants((prev) => prev.filter((_, i) => i !== index));
    setCurrent((c) => Math.max(0, Math.min(c, participants.length - 2)));
  };

  const handleDragStart = (event: ReactPointerEvent<HTMLDivElement>) => {
    const kind = event.currentTarget.dataset.drag as DragKind | undefined;
    const rect = wrapperRef.current?.getBoundingClientRect();
    if (!kind || !rect) return;
    event.preventDefault();
    event.stopPropagation();
    const anchor =
      kind === 'qr' ? qr
        : kind === 'id' || kind === 'id-resize' ? certId
          : name;
    const anchorX = anchor.xRatio;
    const anchorY = anchor.yRatio;
    dragRef.current = {
      kind,
      offsetX: event.clientX - (rect.left + anchorX * rect.width),
      offsetY: event.clientY - (rect.top + anchorY * rect.height),
    };
    wrapperRef.current?.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    const rect = wrapperRef.current?.getBoundingClientRect();
    if (!drag || !rect) return;
    const px = event.clientX - rect.left;
    const py = event.clientY - rect.top;

    if (drag.kind === 'name') {
      setName((prev) => ({
        ...prev,
        xRatio: clamp((px - drag.offsetX) / rect.width, 0, 1 - prev.widthRatio),
        yRatio: clamp((py - drag.offsetY) / rect.height, 0, 0.98),
      }));
    } else if (drag.kind === 'name-resize') {
      setName((prev) => ({ ...prev, widthRatio: clamp(px / rect.width - prev.xRatio, 0.05, 1 - prev.xRatio) }));
    } else if (drag.kind === 'id') {
      setCertId((prev) => ({
        ...prev,
        xRatio: clamp((px - drag.offsetX) / rect.width, 0, 1 - prev.widthRatio),
        yRatio: clamp((py - drag.offsetY) / rect.height, 0, 0.98),
      }));
    } else if (drag.kind === 'id-resize') {
      setCertId((prev) => ({ ...prev, widthRatio: clamp(px / rect.width - prev.xRatio, 0.05, 1 - prev.xRatio) }));
    } else {
      setQr((prev) => ({
        ...prev,
        xRatio: clamp((px - drag.offsetX) / rect.width, 0, 1 - prev.sizeRatio),
        yRatio: clamp((py - drag.offsetY) / rect.height, 0, Math.max(0, 1 - prev.sizeRatio * rect.width / rect.height)),
      }));
    }
  };

  const endDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    dragRef.current = null;
    wrapperRef.current?.releasePointerCapture(event.pointerId);
  };

  const handleGenerate = async () => {
    if (!templateBuffer || participants.length === 0) return;
    setGenerating(true);
    setError('');
    setDone('');
    setProgress(0);
    try {
      const count = await generateAttestationsZip({
        templateBuffer,
        templateType,
        names: participants.map((p) => p.name),
        namePlacement: name,
        idPlacement: certId,
        qrPlacement: qr,
        onProgress: (d, total) => setProgress(Math.round((d / total) * 100)),
      });

      // Auto-subscribe participants who provided an email (source: 'attestation').
      // Best-effort: failure is silent so the certified batch still ships.
      const withEmail = participants.filter((p) => p.email);
      let extra = '';
      if (withEmail.length > 0) {
        try {
          const added = addSubscribers(
            withEmail.map((p) => ({ name: p.name, email: p.email!, phone: p.phone, source: 'attestation' as const }))
          );
          if (added > 0) {
            extra = ` · ${added} participant${added !== 1 ? 's' : ''} ajoute${added !== 1 ? 's' : ''} a la newsletter.`;
          }
        } catch {
          // Swallow — subscription failures should not break the success message.
        }
      }
      setDone(`${count} attestations generees et telechargees (ZIP + CSV de tracabilite).${extra}`);
      trackEvent('attestation_batch_generated', {
        template_type: templateType,
        participant_count: participants.length,
        output_count: count,
      });
    } catch (e) {
      setError(`Echec de la generation: ${e instanceof Error ? e.message : 'erreur inconnue'}`);
    } finally {
      setGenerating(false);
    }
  };

  const handleArchiveSearch = async () => {
    setArchiveLoading(true);
    setArchiveError('');
    try {
      const results = await searchAttestationArchive(archiveQuery);
      setArchive(results);
      trackEvent('attestation_archive_searched', {
        has_query: Boolean(archiveQuery.trim()),
        result_count: results.length,
      });
    } catch (archiveLookupError) {
      setArchiveError(archiveLookupError instanceof Error ? archiveLookupError.message : 'Recherche impossible.');
    } finally {
      setArchiveLoading(false);
    }
  };

  const handleRevoke = async (record: ArchivedAttestation) => {
    if (!window.confirm(`Révoquer définitivement l’attestation ${record.id} de ${record.recipientName} ?`)) return;
    setRevokingId(record.id);
    setArchiveError('');
    try {
      const updated = await revokeArchivedAttestation(record.id, 'Révoquée depuis le registre administrateur.');
      setArchive((current) => current.map((item) => item.id === updated.id ? updated : item));
      setDone(`Attestation ${updated.id} révoquée. Le QR indiquera désormais qu’elle n’est plus valide.`);
      trackEvent('attestation_revoked', { status: 'revoked' });
    } catch (revokeError) {
      setArchiveError(revokeError instanceof Error ? revokeError.message : 'Révocation impossible.');
    } finally {
      setRevokingId(null);
    }
  };

  const qrSidePx = qr.sizeRatio * PREVIEW_WIDTH;
  const qrMaxY = Math.max(0, 1 - qr.sizeRatio * ((pdfPoints?.width ?? PREVIEW_WIDTH) / (pdfPoints?.height ?? PREVIEW_WIDTH)));

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />
      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-6">
          <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider">Karatou</p>
          <h1 className="font-playfair text-3xl font-bold text-gray-900 mt-1">Attestations en masse</h1>
          <p className="text-sm text-gray-500 mt-2 max-w-2xl">
            Chargez un modele (PDF, PNG ou JPG) puis une liste Excel ou des noms tapes a la main, positionnez le nom, l'ID du certificat et le QR code, puis generez toutes les attestations signees en un ZIP.
          </p>
        </div>

        {error && <div className="mb-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">{error}</div>}
        {done && <div className="mb-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700" role="status">{done}</div>}

        <div className="grid lg:grid-cols-[360px_1fr] gap-6">
          {/* Config panel */}
          <aside className="space-y-5">
            <section className="bg-white border border-gray-200 rounded-2xl p-5 shadow-blue-sm space-y-3">
              <h2 className="font-semibold text-gray-900">Sources</h2>
              <label className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2.5 text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-50">
                {templateType === 'image' ? <ImageIcon size={16} className="text-blue-600" /> : <FileText size={16} className="text-blue-600" />}
                {templateBuffer ? (templateType === 'image' ? 'Modele image charge' : 'Modele PDF charge') : 'Charger le modele (PDF, PNG ou JPG)'}
                <input type="file" accept="application/pdf,.pdf,image/png,image/jpeg,.png,.jpg,.jpeg" className="hidden" onChange={(e) => onTemplateUpload(e.target.files?.[0])} />
              </label>
              <label className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2.5 text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-50">
                <FileSpreadsheet size={16} className="text-emerald-600" /> {participants.length ? `${participants.length} participants${subscribableCount > 0 ? ` · ${subscribableCount} email${subscribableCount !== 1 ? 's' : ''}` : ''}` : 'Charger la liste Excel'}
                <input type="file" accept=".xlsx,.xls" className="hidden" onChange={(e) => onExcelUpload(e.target.files?.[0])} />
              </label>

              <div className="flex gap-2 pt-1">
                <input
                  type="text"
                  value={manualName}
                  onChange={(e) => setManualName(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); onAddManualName(); } }}
                  placeholder="Taper un nom puis Ajouter"
                  className={inputClass}
                />
                <button
                  type="button"
                  onClick={onAddManualName}
                  disabled={!manualName.trim()}
                  aria-label="Ajouter le nom"
                  className="shrink-0 flex items-center justify-center rounded-lg border border-blue-200 bg-blue-50 text-blue-600 px-3 disabled:opacity-40"
                >
                  <Plus size={16} />
                </button>
              </div>

              {participants.length > 0 && (
                <ul className="max-h-40 overflow-y-auto divide-y divide-gray-100 rounded-xl border border-gray-100">
                  {participants.map((p, i) => (
                    <li key={`${p.name}-${i}`} className="flex items-center justify-between gap-2 px-3 py-1.5 text-sm text-gray-700">
                      <span className="truncate">{p.name}</span>
                      <button
                        type="button"
                        onClick={() => onRemoveParticipant(i)}
                        aria-label={`Retirer ${p.name}`}
                        className="shrink-0 text-gray-400 hover:text-red-500"
                      >
                        <Trash2 size={14} />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </section>

            <TextControls title="Texte du nom" placement={name} onChange={setName} />
            <TextControls title="Texte de l'ID du certificat" placement={certId} onChange={setCertId} />

            <section className="bg-white border border-gray-200 rounded-2xl p-5 shadow-blue-sm space-y-3">
              <h2 className="font-semibold text-gray-900 flex items-center gap-2"><QrCode size={16} className="text-blue-600" /> QR code</h2>
              <div className="grid grid-cols-3 gap-3">
                <label className="block text-xs font-medium text-gray-600">X (%)
                  <input type="number" min={0} max={100} value={Math.round(qr.xRatio * 100)} onChange={(e) => setQr((p) => ({ ...p, xRatio: clamp(Number(e.target.value) / 100, 0, 1 - p.sizeRatio) }))} className={inputClass} />
                </label>
                <label className="block text-xs font-medium text-gray-600">Y (%)
                  <input type="number" min={0} max={Math.floor(qrMaxY * 100)} value={Math.round(qr.yRatio * 100)} onChange={(e) => setQr((p) => ({ ...p, yRatio: clamp(Number(e.target.value) / 100, 0, qrMaxY) }))} className={inputClass} />
                </label>
                <label className="block text-xs font-medium text-gray-600">Taille (%)
                  <input type="number" min={3} max={50} value={Math.round(qr.sizeRatio * 100)} onChange={(e) => setQr((p) => {
                    const sizeRatio = clamp(Number(e.target.value) / 100, 0.03, 0.5);
                    const maxY = Math.max(0, 1 - sizeRatio * ((pdfPoints?.width ?? PREVIEW_WIDTH) / (pdfPoints?.height ?? PREVIEW_WIDTH)));
                    return { ...p, sizeRatio, xRatio: Math.min(p.xRatio, 1 - sizeRatio), yRatio: Math.min(p.yRatio, maxY) };
                  })} className={inputClass} />
                </label>
              </div>
            </section>

            <Button variant="primary" size="md" className="w-full" onClick={handleGenerate} disabled={!templateBuffer || participants.length === 0 || generating}>
              {generating ? <><Loader2 size={16} className="animate-spin" /> Generation {progress}%</> : <><Download size={16} /> Generer ({participants.length})</>}
            </Button>
          </aside>

          {/* Live preview */}
          <section className="bg-white border border-gray-200 rounded-2xl p-5 shadow-blue-sm">
            {participants.length > 0 && (
              <div className="flex items-center justify-between mb-4">
                <button onClick={() => setCurrent((c) => Math.max(0, c - 1))} disabled={current === 0} aria-label="Precedent" className="p-1.5 rounded-lg border border-gray-200 disabled:opacity-40"><ChevronLeft size={16} /></button>
                <p className="text-sm font-medium text-gray-700 truncate px-3">{current + 1} / {participants.length} - {previewName}</p>
                <button onClick={() => setCurrent((c) => Math.min(participants.length - 1, c + 1))} disabled={current >= participants.length - 1} aria-label="Suivant" className="p-1.5 rounded-lg border border-gray-200 disabled:opacity-40"><ChevronRight size={16} /></button>
              </div>
            )}

            {!templateBuffer ? (
              <div className="rounded-2xl border border-dashed border-gray-300 p-16 text-center text-sm text-gray-500">
                Chargez un modele (PDF, PNG ou JPG) pour afficher l'apercu et positionner les elements.
              </div>
            ) : (
              <div className="flex justify-center">
                <div
                  ref={wrapperRef}
                  className="relative inline-block touch-none select-none shadow-blue-sm"
                  onPointerMove={onPointerMove}
                  onPointerUp={endDrag}
                  onPointerCancel={endDrag}
                >
                  {templateType === 'image' && imageUrl ? (
                    <img
                      src={imageUrl}
                      alt="Modele d'attestation"
                      width={PREVIEW_WIDTH}
                      style={{ width: PREVIEW_WIDTH, height: 'auto', display: 'block' }}
                      onLoad={onImageLoad}
                      onError={() => setError('Image illisible.')}
                    />
                  ) : previewFile ? (
                    <Document file={previewFile} onLoadError={() => setError('PDF illisible.')}>
                      <Page
                        pageNumber={1}
                        width={PREVIEW_WIDTH}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        onLoadSuccess={(page) => setPdfPoints({ width: page.originalWidth, height: page.originalHeight })}
                      />
                    </Document>
                  ) : null}

                  {/* Name box */}
                  <div
                    data-drag="name"
                    onPointerDown={handleDragStart}
                    style={{
                      position: 'absolute',
                      left: `${name.xRatio * 100}%`,
                      top: `${name.yRatio * 100}%`,
                      width: `${name.widthRatio * 100}%`,
                      textAlign: name.align,
                      color: name.colorHex,
                      fontSize: `${name.fontSize * scale}px`,
                      lineHeight: 1.1,
                    }}
                    className="group cursor-move outline-dashed outline-1 outline-blue-400/60 hover:outline-blue-500"
                  >
                    <span className="whitespace-nowrap overflow-hidden">{previewName}</span>
                    <span
                      data-drag="name-resize"
                      onPointerDown={handleDragStart}
                      className="absolute -right-1.5 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 cursor-ew-resize"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Certificate ID box (emerald accent so it's visually
                      distinct from the navy Name box). */}
                  <div
                    data-drag="id"
                    onPointerDown={handleDragStart}
                    style={{
                      position: 'absolute',
                      left: `${certId.xRatio * 100}%`,
                      top: `${certId.yRatio * 100}%`,
                      width: `${certId.widthRatio * 100}%`,
                      textAlign: certId.align,
                      color: certId.colorHex,
                      fontSize: `${certId.fontSize * scale}px`,
                      lineHeight: 1.1,
                    }}
                    className="group cursor-move outline-dashed outline-1 outline-emerald-400/60 hover:outline-emerald-500"
                  >
                    <span className="whitespace-nowrap overflow-hidden">{previewId}</span>
                    <span
                      data-drag="id-resize"
                      onPointerDown={handleDragStart}
                      className="absolute -right-1.5 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 cursor-ew-resize"
                      aria-hidden="true"
                    />
                  </div>

                  {/* QR box */}
                  <div
                    data-drag="qr"
                    onPointerDown={handleDragStart}
                    style={{ position: 'absolute', left: `${qr.xRatio * 100}%`, top: `${qr.yRatio * 100}%`, width: `${qrSidePx}px`, height: `${qrSidePx}px` }}
                    className="cursor-move bg-gray-900/10 border border-blue-400/70 hover:border-blue-500 flex items-center justify-center"
                  >
                    <QrCode size={Math.max(14, qrSidePx * 0.6)} className="text-gray-700" aria-hidden="true" />
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>

        <section className="mt-8 bg-white border border-gray-200 rounded-2xl p-5 shadow-blue-sm">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div>
              <h2 className="font-semibold text-gray-900">Registre des attestations émises</h2>
              <p className="text-sm text-gray-500">Recherchez une attestation archivée et révoquez-la si nécessaire.</p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <input
                value={archiveQuery}
                onChange={(event) => setArchiveQuery(event.target.value)}
                onKeyDown={(event) => { if (event.key === 'Enter') void handleArchiveSearch(); }}
                placeholder="Nom ou ID d’attestation"
                className={inputClass}
                aria-label="Rechercher dans le registre"
              />
              <Button variant="outline" size="sm" onClick={() => void handleArchiveSearch()} disabled={archiveLoading}>
                {archiveLoading ? <Loader2 size={16} className="animate-spin" /> : <Search size={16} />} Rechercher
              </Button>
              <Button variant="ghost" size="sm" onClick={() => { setArchiveQuery(''); void handleArchiveSearch(); }} disabled={archiveLoading} aria-label="Actualiser le registre">
                <RefreshCw size={16} />
              </Button>
            </div>
          </div>
          {archiveError && <p role="alert" className="mb-3 text-sm text-red-700">{archiveError}</p>}
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="border-b border-gray-200 text-left text-xs uppercase tracking-wide text-gray-500">
                <tr><th className="py-2 pr-4">Bénéficiaire</th><th className="py-2 pr-4">ID</th><th className="py-2 pr-4">Émise le</th><th className="py-2 pr-4">Statut</th><th className="py-2 text-right">Action</th></tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {archive.map((record) => (
                  <tr key={record.id}>
                    <td className="py-3 pr-4 font-medium text-gray-900">{record.recipientName}</td>
                    <td className="py-3 pr-4 font-mono text-xs text-gray-600">{record.id}</td>
                    <td className="py-3 pr-4 text-gray-600">{record.issuedAt}</td>
                    <td className="py-3 pr-4">
                      <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-semibold ${record.status === 'revoked' ? 'bg-red-100 text-red-700' : record.status === 'expired' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>
                        {record.status === 'revoked' ? 'Révoquée' : record.status === 'expired' ? 'Expirée' : 'Active'}
                      </span>
                    </td>
                    <td className="py-3 text-right">
                      <button
                        type="button"
                        disabled={record.status === 'revoked' || revokingId === record.id}
                        onClick={() => void handleRevoke(record)}
                        className="inline-flex items-center gap-1 text-xs font-medium text-red-600 hover:text-red-800 disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        {revokingId === record.id ? <Loader2 size={14} className="animate-spin" /> : <Ban size={14} />} Révoquer
                      </button>
                    </td>
                  </tr>
                ))}
                {!archiveLoading && archive.length === 0 && (
                  <tr><td colSpan={5} className="py-6 text-center text-sm text-gray-500">Aucune attestation trouvée.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
