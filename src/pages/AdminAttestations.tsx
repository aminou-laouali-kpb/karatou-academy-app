import { PointerEvent as ReactPointerEvent, useMemo, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import {
  AlignCenter, AlignLeft, AlignRight, ChevronLeft, ChevronRight,
  Download, FileSpreadsheet, FileText, Loader2, QrCode,
} from 'lucide-react';
import { AdminNav } from '../layouts/AdminNav';
import { Button } from '../components/Button';
import {
  generateAttestationsZip, parseParticipants, NamePlacement, Participant, QrPlacement, TextAlign,
} from '../services/attestationGenerator';
import { addSubscribers } from '../services/newsletterService';
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

type DragKind = 'name' | 'name-resize' | 'qr';

export function AdminAttestations() {
  const [templateBuffer, setTemplateBuffer] = useState<ArrayBuffer | null>(null);
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [current, setCurrent] = useState(0);
  const [pdfPoints, setPdfPoints] = useState<{ width: number; height: number } | null>(null);
  const [error, setError] = useState('');
  const [generating, setGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState('');

  const [name, setName] = useState<NamePlacement>({
    xRatio: 0.25, yRatio: 0.45, widthRatio: 0.5, fontSize: 28, colorHex: '#1e3a8a', align: 'center',
  });
  const [qr, setQr] = useState<QrPlacement>({ xRatio: 0.8, yRatio: 0.78, sizeRatio: 0.12 });

  const wrapperRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ kind: DragKind; offsetX: number; offsetY: number } | null>(null);

  const previewFile = useMemo(
    () => (templateBuffer ? { data: new Uint8Array(templateBuffer.slice(0)) } : null),
    [templateBuffer]
  );
  const previewName = participants[current]?.name || 'Nom du participant';
  const subscribableCount = participants.filter((p) => p.email).length;
  const scale = pdfPoints ? PREVIEW_WIDTH / pdfPoints.width : 1;

  const onPdfUpload = async (file?: File) => {
    if (!file) return;
    setError('');
    setDone('');
    setTemplateBuffer(await file.arrayBuffer());
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
      setParticipants(parsed);
      setCurrent(0);
    } catch {
      setError('Fichier Excel illisible. Verifiez le format (.xlsx/.xls).');
    }
  };

  const handleDragStart = (event: ReactPointerEvent<HTMLDivElement>) => {
    const kind = event.currentTarget.dataset.drag as DragKind | undefined;
    const rect = wrapperRef.current?.getBoundingClientRect();
    if (!kind || !rect) return;
    event.preventDefault();
    event.stopPropagation();
    const anchorX = kind === 'qr' ? qr.xRatio : name.xRatio;
    const anchorY = kind === 'qr' ? qr.yRatio : name.yRatio;
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
    } else {
      setQr((prev) => ({
        ...prev,
        xRatio: clamp((px - drag.offsetX) / rect.width, 0, 1 - prev.sizeRatio),
        yRatio: clamp((py - drag.offsetY) / rect.height, 0, 1 - prev.sizeRatio * scale),
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
        names: participants.map((p) => p.name),
        namePlacement: name,
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
    } catch (e) {
      setError(`Echec de la generation: ${e instanceof Error ? e.message : 'erreur inconnue'}`);
    } finally {
      setGenerating(false);
    }
  };

  const qrSidePx = qr.sizeRatio * PREVIEW_WIDTH;

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />
      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-6">
          <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider">Karatou</p>
          <h1 className="font-playfair text-3xl font-bold text-gray-900 mt-1">Attestations en masse</h1>
          <p className="text-sm text-gray-500 mt-2 max-w-2xl">
            Chargez un modele PDF et une liste Excel, positionnez le nom et le QR code, puis generez toutes les attestations signees en un ZIP.
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
                <FileText size={16} className="text-blue-600" /> {templateBuffer ? 'Modele PDF charge' : 'Charger le modele PDF'}
                <input type="file" accept="application/pdf,.pdf" className="hidden" onChange={(e) => onPdfUpload(e.target.files?.[0])} />
              </label>
              <label className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2.5 text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-50">
                <FileSpreadsheet size={16} className="text-emerald-600" /> {participants.length ? `${participants.length} participants${subscribableCount > 0 ? ` · ${subscribableCount} email${subscribableCount !== 1 ? 's' : ''}` : ''}` : 'Charger la liste Excel'}
                <input type="file" accept=".xlsx,.xls" className="hidden" onChange={(e) => onExcelUpload(e.target.files?.[0])} />
              </label>
            </section>

            <section className="bg-white border border-gray-200 rounded-2xl p-5 shadow-blue-sm space-y-3">
              <h2 className="font-semibold text-gray-900">Texte du nom</h2>
              <div className="flex gap-2">
                {([['left', AlignLeft], ['center', AlignCenter], ['right', AlignRight]] as const).map(([value, Icon]) => (
                  <button
                    key={value}
                    onClick={() => setName((p) => ({ ...p, align: value as TextAlign }))}
                    aria-label={`Aligner ${value}`}
                    className={`flex-1 flex items-center justify-center rounded-lg border py-2 ${name.align === value ? 'border-blue-400 bg-blue-50 text-blue-600' : 'border-gray-200 text-gray-500'}`}
                  >
                    <Icon size={16} />
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3">
                <label className="block text-xs font-medium text-gray-600">Taille (pt)
                  <input type="number" min={6} max={120} value={name.fontSize} onChange={(e) => setName((p) => ({ ...p, fontSize: clamp(Number(e.target.value) || 0, 6, 200) }))} className={inputClass} />
                </label>
                <label className="block text-xs font-medium text-gray-600">Couleur
                  <span className="mt-1 flex items-center gap-2">
                    <input type="color" value={name.colorHex} onChange={(e) => setName((p) => ({ ...p, colorHex: e.target.value }))} className="h-8 w-9 rounded border border-gray-200" />
                    <input type="text" value={name.colorHex} onChange={(e) => setName((p) => ({ ...p, colorHex: e.target.value }))} className={inputClass} />
                  </span>
                </label>
                <label className="block text-xs font-medium text-gray-600">Position X (%)
                  <input type="number" min={0} max={100} value={Math.round(name.xRatio * 100)} onChange={(e) => setName((p) => ({ ...p, xRatio: clamp(Number(e.target.value) / 100, 0, 1 - p.widthRatio) }))} className={inputClass} />
                </label>
                <label className="block text-xs font-medium text-gray-600">Position Y (%)
                  <input type="number" min={0} max={100} value={Math.round(name.yRatio * 100)} onChange={(e) => setName((p) => ({ ...p, yRatio: clamp(Number(e.target.value) / 100, 0, 0.98) }))} className={inputClass} />
                </label>
                <label className="block text-xs font-medium text-gray-600 col-span-2">Largeur de la zone (%)
                  <input type="number" min={5} max={100} value={Math.round(name.widthRatio * 100)} onChange={(e) => setName((p) => ({ ...p, widthRatio: clamp(Number(e.target.value) / 100, 0.05, 1 - p.xRatio) }))} className={inputClass} />
                </label>
              </div>
            </section>

            <section className="bg-white border border-gray-200 rounded-2xl p-5 shadow-blue-sm space-y-3">
              <h2 className="font-semibold text-gray-900 flex items-center gap-2"><QrCode size={16} className="text-blue-600" /> QR code</h2>
              <div className="grid grid-cols-3 gap-3">
                <label className="block text-xs font-medium text-gray-600">X (%)
                  <input type="number" min={0} max={100} value={Math.round(qr.xRatio * 100)} onChange={(e) => setQr((p) => ({ ...p, xRatio: clamp(Number(e.target.value) / 100, 0, 1 - p.sizeRatio) }))} className={inputClass} />
                </label>
                <label className="block text-xs font-medium text-gray-600">Y (%)
                  <input type="number" min={0} max={100} value={Math.round(qr.yRatio * 100)} onChange={(e) => setQr((p) => ({ ...p, yRatio: clamp(Number(e.target.value) / 100, 0, 1) }))} className={inputClass} />
                </label>
                <label className="block text-xs font-medium text-gray-600">Taille (%)
                  <input type="number" min={3} max={50} value={Math.round(qr.sizeRatio * 100)} onChange={(e) => setQr((p) => ({ ...p, sizeRatio: clamp(Number(e.target.value) / 100, 0.03, 0.5) }))} className={inputClass} />
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

            {!previewFile ? (
              <div className="rounded-2xl border border-dashed border-gray-300 p-16 text-center text-sm text-gray-500">
                Chargez un modele PDF pour afficher l'apercu et positionner les elements.
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
                  <Document file={previewFile} onLoadError={() => setError('PDF illisible.')}>
                    <Page
                      pageNumber={1}
                      width={PREVIEW_WIDTH}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                      onLoadSuccess={(page) => setPdfPoints({ width: page.originalWidth, height: page.originalHeight })}
                    />
                  </Document>

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
      </main>
    </div>
  );
}
