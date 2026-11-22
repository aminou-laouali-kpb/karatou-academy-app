import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import QRCode from 'qrcode';
import CryptoJS from 'crypto-js';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { format, addYears } from 'date-fns';
import * as XLSX from 'xlsx';
import { isSupabaseConfigured, supabase } from '../lib/supabaseClient';
import { VERIFY_BASE_URL } from '../lib/verification';
import { encodeAttestationPayload } from '../lib/attestationPayload';
import type { AttestationPayload } from '../lib/attestationPayload';
import { drawUnicodeName, embedNameFonts, isRightToLeft, unicodeNameWidth } from './pdfFonts';

// Re-exported so the attestation tool and its tests keep a single import site.
export { encodeAttestationPayload, decodeAttestationPayload } from '../lib/attestationPayload';

// Local/demo HMAC secret — used ONLY when Supabase is not configured (offline
// demo on e.g. Replit). In production, signing and verification run server-side
// via the attestation-sign / attestation-verify Edge Functions, where the real
// secret lives and is never shipped to the browser.
const SECRET = (import.meta.env.VITE_ATTESTATION_SECRET as string | undefined) || 'karatou-attestation-demo-secret';

export type TextAlign = 'left' | 'center' | 'right';

export interface NamePlacement {
  xRatio: number; // left edge of the text box, 0..1 of page width
  yRatio: number; // top edge of the text box, 0..1 of page height
  widthRatio: number; // box width, 0..1 of page width
  fontSize: number; // in PDF points
  colorHex: string; // #RRGGBB
  align: TextAlign;
}

export interface QrPlacement {
  xRatio: number;
  yRatio: number;
  sizeRatio: number; // square side, 0..1 of page width
}

/** Kept as the historical name used across the attestation tool and tests. */
export type CertificatePayload = AttestationPayload;

function randomCertId(): string {
  const rand = CryptoJS.lib.WordArray.random(6).toString().toUpperCase();
  return `KA-ATT-${format(new Date(), 'yyyy')}-${rand}`;
}

// Local/demo signing (used only when Supabase is not configured).
function buildSignedPayloadLocal(name: string): CertificatePayload {
  const now = new Date();
  const id = randomCertId();
  const issuedAt = format(now, 'yyyy-MM-dd');
  const expiresAt = format(addYears(now, 1), 'yyyy-MM-dd');
  const signature = signatureFor({ id, name, issuedAt, expiresAt });
  return { id, name, issuedAt, expiresAt, signature };
}

/**
 * Signs a batch of names. Server-side via the attestation-sign Edge Function when
 * Supabase is configured (real secret, infalsifiable); local demo fallback otherwise.
 */
export async function signAttestations(names: string[]): Promise<CertificatePayload[]> {
  const clean = names.map((value) => value.trim()).filter(Boolean);
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase.functions.invoke('attestation-sign', { body: { names: clean } });
    if (error) {
      throw await attestationFunctionError(error);
    }
    return (data as { payloads: CertificatePayload[] }).payloads;
  }
  return clean.map((name) => buildSignedPayloadLocal(name));
}

/** Unwraps the Edge Function error body, which carries the real message. */
async function attestationFunctionError(error: unknown): Promise<Error> {
  const initial = error instanceof Error ? error.message : 'Erreur de service.';
  const context = (error as { context?: Response })?.context;
  if (context && typeof context.json === 'function') {
    try {
      const payload = await context.json();
      if (payload?.error) return new Error(String(payload.error));
    } catch {
      // Keep the original function error.
    }
  }
  return new Error(initial);
}

// Verification lives in a light module so the public QR page does not load
// this file's PDF/Excel tooling. Re-exported for the admin tool and tests.
export { verifyAttestation } from './attestationVerify';
export type { VerificationStatus, VerificationResult } from './attestationVerify';
import type { VerificationResult } from './attestationVerify';

function signatureFor(payload: Pick<CertificatePayload, 'id' | 'name' | 'issuedAt' | 'expiresAt'>): string {
  const base = JSON.stringify({
    id: payload.id,
    name: payload.name,
    issuedAt: payload.issuedAt,
    expiresAt: payload.expiresAt,
  });
  return CryptoJS.HmacSHA256(base, SECRET).toString();
}

/** Demo-only verifier (no Supabase): checks the HMAC with the bundled demo secret. */
export function verifyAttestationLocal(payload: CertificatePayload): VerificationResult {
  if (!payload?.id || !payload.signature) return { status: 'invalid' };
  if (signatureFor(payload) !== payload.signature) return { status: 'invalid' };
  const expired = new Date(`${payload.expiresAt}T23:59:59`).getTime() < Date.now();
  return { status: expired ? 'expired' : 'valid', payload };
}

/** The QR encodes this URL: scanning opens the verifier with the signed payload. */
export function attestationVerifyUrl(payload: CertificatePayload): string {
  return `${VERIFY_BASE_URL}/verify-attestation#${encodeAttestationPayload(payload)}`;
}

/** Parses the first sheet's first column into a list of participant names. */
export interface Participant {
  name: string;
  email?: string;
  phone?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const HEADER_NAME_RE = /^(nom|name|participant|prenom|full\s?name|apprenant)/i;
const HEADER_EMAIL_RE = /^(e?[-_ ]?mail|courriel|imel)/i;
const HEADER_PHONE_RE = /^(tel|tél|tele|teleph|phone|portable|mobile|whatsapp|num[ée]ro)/i;

// Parses an XLSX file into [{name, email?, phone?}]. The first column is the
// name; we autodetect optional email/phone columns from header labels (and
// fall back to scanning rows for anything that looks like an email).
export async function parseParticipants(file: File): Promise<Participant[]> {
  const buffer = await file.arrayBuffer();
  const workbook = XLSX.read(buffer, { type: 'array' });
  const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
  if (!firstSheet) return [];

  const rows = XLSX.utils.sheet_to_json<unknown[]>(firstSheet, { header: 1, blankrows: false });
  if (rows.length === 0) return [];

  // Detect a header row in the first non-empty line and map columns.
  const firstRow = rows[0].map((c) => (c ?? '').toString().trim());
  const headerLooksReal = firstRow.some((c) => HEADER_NAME_RE.test(c));
  let emailCol = -1;
  let phoneCol = -1;
  let nameCol = 0;
  let dataStart = 0;
  if (headerLooksReal) {
    firstRow.forEach((cell, idx) => {
      if (HEADER_NAME_RE.test(cell)) nameCol = idx;
      else if (HEADER_EMAIL_RE.test(cell) && emailCol < 0) emailCol = idx;
      else if (HEADER_PHONE_RE.test(cell) && phoneCol < 0) phoneCol = idx;
    });
    dataStart = 1;
  }

  const out: Participant[] = [];
  for (let i = dataStart; i < rows.length; i++) {
    const row = rows[i];
    const name = (row?.[nameCol] ?? '').toString().trim();
    if (!name) continue;

    let email: string | undefined;
    let phone: string | undefined;

    if (emailCol >= 0) {
      const v = (row?.[emailCol] ?? '').toString().trim();
      if (EMAIL_RE.test(v)) email = v.toLowerCase();
    }
    if (phoneCol >= 0) {
      const v = (row?.[phoneCol] ?? '').toString().trim();
      if (v) phone = v;
    }

    // Fallback: if we didn't have a labelled email column, scan the row for
    // anything that looks like an email.
    if (!email) {
      for (const cell of row || []) {
        const v = (cell ?? '').toString().trim();
        if (EMAIL_RE.test(v)) { email = v.toLowerCase(); break; }
      }
    }

    out.push({ name, email, phone });
  }
  return out;
}

function hexToRgb(hex: string) {
  const clean = hex.replace('#', '').trim();
  const value = clean.length === 3
    ? clean.split('').map((c) => c + c).join('')
    : clean.padEnd(6, '0').slice(0, 6);
  const r = parseInt(value.slice(0, 2), 16) / 255;
  const g = parseInt(value.slice(2, 4), 16) / 255;
  const b = parseInt(value.slice(4, 6), 16) / 255;
  return rgb(Number.isFinite(r) ? r : 0, Number.isFinite(g) ? g : 0, Number.isFinite(b) ? b : 0);
}

function safeFileName(name: string): string {
  return name.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-zA-Z0-9]+/g, '_').replace(/^_+|_+$/g, '') || 'Participant';
}

function csvCell(value: string): string {
  return `"${value.replace(/"/g, '""')}"`;
}

export type TemplateType = 'pdf' | 'image';

/** Detects whether a template file is a PDF or a raster image from its MIME type/name. */
export function detectTemplateType(file: File): TemplateType | null {
  const type = file.type.toLowerCase();
  const name = file.name.toLowerCase();
  if (type === 'application/pdf' || name.endsWith('.pdf')) return 'pdf';
  if (type === 'image/png' || type === 'image/jpeg' || /\.(png|jpe?g)$/.test(name)) return 'image';
  return null;
}

export interface TemplateDimensions {
  width: number;
  height: number;
}

const MIN_QR_SIZE_POINTS = 72;
const QR_PNG_SIZE = 512;
const MIN_QR_PIXELS_PER_MODULE = 4;

function assertFiniteRatio(value: number, name: string) {
  if (!Number.isFinite(value) || value < 0 || value > 1) {
    throw new Error(`${name} doit être compris entre 0 et 100%.`);
  }
}

/** Loads the template into a fresh pdf-lib document: the PDF as-is, or an image drawn full-bleed onto a new page. */
async function loadTemplateDoc(templateBuffer: ArrayBuffer, templateType: TemplateType) {
  if (templateType === 'pdf') {
    return PDFDocument.load(templateBuffer.slice(0));
  }
  const pdfDoc = await PDFDocument.create();
  let image;
  try {
    image = await pdfDoc.embedPng(templateBuffer.slice(0));
  } catch {
    image = await pdfDoc.embedJpg(templateBuffer.slice(0));
  }
  const page = pdfDoc.addPage([image.width, image.height]);
  page.drawImage(image, { x: 0, y: 0, width: image.width, height: image.height });
  return pdfDoc;
}

/**
 * A certificate must have one unambiguous background page. Multi-page PDFs are
 * rejected rather than silently placing the name and QR on their first page.
 */
export async function validateTemplate(
  templateBuffer: ArrayBuffer,
  templateType: TemplateType
): Promise<TemplateDimensions> {
  const doc = await loadTemplateDoc(templateBuffer, templateType);
  const pages = doc.getPages();
  if (pages.length !== 1) {
    throw new Error('Le modèle PDF doit contenir une seule page. Exportez la page d’attestation seule avant de continuer.');
  }
  const { width, height } = pages[0].getSize();
  if (!Number.isFinite(width) || !Number.isFinite(height) || width <= 0 || height <= 0) {
    throw new Error('Le modèle ne contient pas de page utilisable.');
  }
  return { width, height };
}

/**
 * Checks both clipping and QR density before certificates are signed or saved.
 * Four printer pixels per module is the minimum reliable 300dpi print target.
 */
export function validateQrPlacement(
  placement: QrPlacement,
  dimensions: TemplateDimensions,
  verifyUrl: string
): void {
  assertFiniteRatio(placement.xRatio, 'La position X du QR');
  assertFiniteRatio(placement.yRatio, 'La position Y du QR');
  if (!Number.isFinite(placement.sizeRatio) || placement.sizeRatio <= 0 || placement.sizeRatio > 1) {
    throw new Error('La taille du QR doit être comprise entre 1 et 100%.');
  }

  const size = placement.sizeRatio * dimensions.width;
  const x = placement.xRatio * dimensions.width;
  const yFromTop = placement.yRatio * dimensions.height;
  if (size < MIN_QR_SIZE_POINTS) {
    throw new Error('Le QR est trop petit pour être lu de façon fiable à l’impression. Choisissez au moins 25 mm.');
  }
  if (x + size > dimensions.width || yFromTop + size > dimensions.height) {
    throw new Error('Le QR doit rester entièrement dans les limites de la page.');
  }

  const qr = QRCode.create(verifyUrl, { errorCorrectionLevel: 'M' });
  const moduleCount = qr.modules.size;
  if (QR_PNG_SIZE / moduleCount < MIN_QR_PIXELS_PER_MODULE) {
    throw new Error('Les données du QR sont trop denses pour être lues de façon fiable. Raccourcissez le nom du participant.');
  }
  if (((size / 72) * 300) / moduleCount < MIN_QR_PIXELS_PER_MODULE) {
    throw new Error('Le QR est trop dense pour sa taille d’impression. Augmentez sa taille.');
  }
}

/** Numbered, ID-suffixed filename so homonyms never collide inside the ZIP. */
export function attestationZipFilename(payload: Pick<CertificatePayload, 'id' | 'name'>, index: number): string {
  return `${String(index + 1).padStart(3, '0')}_${safeFileName(payload.name)}_${payload.id}.pdf`;
}

export interface GenerateParams {
  templateBuffer: ArrayBuffer;
  /** Whether the template is a PDF page or a raster image (PNG/JPEG) used as a full-page background. */
  templateType: TemplateType;
  names: string[];
  namePlacement: NamePlacement;
  /** Optional placement for the certificate ID (KA-ATT-YYYY-XXXXXX). */
  idPlacement?: NamePlacement;
  qrPlacement: QrPlacement;
  onProgress?: (done: number, total: number) => void;
}

/** Builds one attestation PDF per name + a traceability CSV, zips and downloads them. */
export async function generateAttestationsZip(params: GenerateParams): Promise<number> {
  const { templateBuffer, templateType, names, namePlacement, idPlacement, qrPlacement, onProgress } = params;
  const dimensions = await validateTemplate(templateBuffer, templateType);
  // Refuse an unreadable layout BEFORE signing: a signed attestation is
  // archived server-side, so a batch that fails halfway would leave orphans.
  const today = format(new Date(), 'yyyy-MM-dd');
  names
    .map((name) => name.trim())
    .filter(Boolean)
    .forEach((name) => {
      validateQrPlacement(
        qrPlacement,
        dimensions,
        attestationVerifyUrl({
          id: 'KA-ATT-0000-0000000000',
          name,
          issuedAt: today,
          expiresAt: today,
          signature: '0'.repeat(64),
        })
      );
    });
  const zip = new JSZip();
  const csvRows: string[] = [
    ['ID Certificat', 'Nom du Participant', 'Date de Delivrance', 'Date d Expiration', 'Signature Electronique']
      .map(csvCell)
      .join(','),
  ];

  // Sign the whole batch up front (one server round-trip when Supabase is configured).
  const payloads = await signAttestations(names);

  for (let index = 0; index < payloads.length; index += 1) {
    const payload = payloads[index];
    const name = payload.name;

    const pdfDoc = await loadTemplateDoc(templateBuffer, templateType);
    const nameFonts = await embedNameFonts(pdfDoc);
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const page = pdfDoc.getPages()[0];
    const { width: pageWidth, height: pageHeight } = page.getSize();

    // Name (top-left origin in the editor -> bottom-left origin in PDF).
    const fontSize = namePlacement.fontSize;
    const boxX = namePlacement.xRatio * pageWidth;
    const boxWidth = namePlacement.widthRatio * pageWidth;
    const textWidth = unicodeNameWidth(name, nameFonts, fontSize);
    let textX = boxX;
    if (namePlacement.align === 'center') textX = boxX + (boxWidth - textWidth) / 2;
    else if (namePlacement.align === 'right' || isRightToLeft(name)) textX = boxX + (boxWidth - textWidth);
    const textY = pageHeight * (1 - namePlacement.yRatio) - fontSize;
    drawUnicodeName(page, name, nameFonts, {
      x: textX,
      y: textY,
      size: fontSize,
      color: hexToRgb(namePlacement.colorHex),
    });

    // Certificate ID (same box model as the name) — optional, rendered only
    // when an idPlacement is provided. Lets admins position the signed UID on
    // the template so it appears alongside the holder's name.
    if (idPlacement) {
      const idText = payload.id;
      const idFontSize = idPlacement.fontSize;
      const idBoxX = idPlacement.xRatio * pageWidth;
      const idBoxWidth = idPlacement.widthRatio * pageWidth;
      const idTextWidth = font.widthOfTextAtSize(idText, idFontSize);
      let idTextX = idBoxX;
      if (idPlacement.align === 'center') idTextX = idBoxX + (idBoxWidth - idTextWidth) / 2;
      else if (idPlacement.align === 'right') idTextX = idBoxX + (idBoxWidth - idTextWidth);
      const idTextY = pageHeight * (1 - idPlacement.yRatio) - idFontSize;
      page.drawText(idText, { x: idTextX, y: idTextY, size: idFontSize, font, color: hexToRgb(idPlacement.colorHex) });
    }

    // QR code with the signed payload.
    const verifyUrl = attestationVerifyUrl(payload);
    validateQrPlacement(qrPlacement, dimensions, verifyUrl);
    const qrDataUrl = await QRCode.toDataURL(verifyUrl, {
      margin: 1,
      width: QR_PNG_SIZE,
      errorCorrectionLevel: 'M',
    });
    const qrImage = await pdfDoc.embedPng(qrDataUrl);
    const qrSize = qrPlacement.sizeRatio * pageWidth;
    const qrX = qrPlacement.xRatio * pageWidth;
    const qrY = pageHeight * (1 - qrPlacement.yRatio) - qrSize;
    page.drawImage(qrImage, { x: qrX, y: qrY, width: qrSize, height: qrSize });

    const bytes = await pdfDoc.save();
    zip.file(attestationZipFilename(payload, index), bytes);
    csvRows.push([payload.id, name, payload.issuedAt, payload.expiresAt, payload.signature].map(csvCell).join(','));

    onProgress?.(index + 1, payloads.length);
  }

  // BOM so Excel opens the UTF-8 CSV correctly.
  zip.file('Tracabilite_Certificats.csv', `\uFEFF${csvRows.join('\r\n')}`);

  const blob = await zip.generateAsync({ type: 'blob' });
  saveAs(blob, 'Attestations_Karatou.zip');
  return payloads.length;
}
