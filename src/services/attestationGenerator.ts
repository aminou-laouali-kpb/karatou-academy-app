import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import QRCode from 'qrcode';
import CryptoJS from 'crypto-js';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { format, addYears } from 'date-fns';
import * as XLSX from 'xlsx';
import { isSupabaseConfigured, supabase } from '../lib/supabaseClient';
import { VERIFY_BASE_URL } from '../lib/verification';

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

export interface CertificatePayload {
  id: string;
  name: string;
  issuedAt: string;
  expiresAt: string;
  signature: string;
}

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
      let message = error.message;
      const context = (error as { context?: Response }).context;
      if (context && typeof context.json === 'function') {
        try {
          const payload = await context.json();
          if (payload?.error) message = String(payload.error);
        } catch {
          // keep the original error message
        }
      }
      throw new Error(message);
    }
    return (data as { payloads: CertificatePayload[] }).payloads;
  }
  return clean.map((name) => buildSignedPayloadLocal(name));
}

export type VerificationStatus = 'valid' | 'expired' | 'invalid';

export interface VerificationResult {
  status: VerificationStatus;
  payload?: CertificatePayload;
}

function signatureFor(payload: Pick<CertificatePayload, 'id' | 'name' | 'issuedAt' | 'expiresAt'>): string {
  const base = JSON.stringify({
    id: payload.id,
    name: payload.name,
    issuedAt: payload.issuedAt,
    expiresAt: payload.expiresAt,
  });
  return CryptoJS.HmacSHA256(base, SECRET).toString();
}

function verifyAttestationLocal(payload: CertificatePayload): VerificationResult {
  if (!payload?.id || !payload.signature) return { status: 'invalid' };
  if (signatureFor(payload) !== payload.signature) return { status: 'invalid' };
  const expired = new Date(`${payload.expiresAt}T23:59:59`).getTime() < Date.now();
  return { status: expired ? 'expired' : 'valid', payload };
}

/**
 * Verifies a payload. Server-side via the attestation-verify Edge Function when
 * Supabase is configured; local demo fallback otherwise.
 */
export async function verifyAttestation(payload: CertificatePayload): Promise<VerificationResult> {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase.functions.invoke('attestation-verify', { body: { payload } });
    if (error || !data) return { status: 'invalid' };
    return data as VerificationResult;
  }
  return verifyAttestationLocal(payload);
}

export function encodeAttestationPayload(payload: CertificatePayload): string {
  const bytes = new TextEncoder().encode(JSON.stringify(payload));
  let binary = '';
  bytes.forEach((b) => { binary += String.fromCharCode(b); });
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

export function decodeAttestationPayload(encoded: string): CertificatePayload | null {
  try {
    const padded = encoded.replace(/-/g, '+').replace(/_/g, '/');
    const binary = atob(padded);
    const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
    const parsed = JSON.parse(new TextDecoder().decode(bytes));
    return parsed && typeof parsed === 'object' && parsed.id && parsed.signature ? (parsed as CertificatePayload) : null;
  } catch {
    return null;
  }
}

/** The QR encodes this URL: scanning opens the verifier with the signed payload. */
export function attestationVerifyUrl(payload: CertificatePayload): string {
  return `${VERIFY_BASE_URL}/verify-attestation#${encodeAttestationPayload(payload)}`;
}

/** Parses the first sheet's first column into a list of participant names. */
export async function parseParticipants(file: File): Promise<string[]> {
  const buffer = await file.arrayBuffer();
  const workbook = XLSX.read(buffer, { type: 'array' });
  const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
  if (!firstSheet) return [];

  const rows = XLSX.utils.sheet_to_json<unknown[]>(firstSheet, { header: 1, blankrows: false });
  const names = rows
    .map((row) => (row?.[0] ?? '').toString().trim())
    .filter((value) => value.length > 0);

  // Drop an obvious header row.
  if (names.length > 0 && /^(nom|name|participant|prenom|full\s?name|apprenant)/i.test(names[0])) {
    names.shift();
  }
  return names;
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

export interface GenerateParams {
  templateBuffer: ArrayBuffer;
  names: string[];
  namePlacement: NamePlacement;
  qrPlacement: QrPlacement;
  onProgress?: (done: number, total: number) => void;
}

/** Builds one attestation PDF per name + a traceability CSV, zips and downloads them. */
export async function generateAttestationsZip(params: GenerateParams): Promise<number> {
  const { templateBuffer, names, namePlacement, qrPlacement, onProgress } = params;
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

    const pdfDoc = await PDFDocument.load(templateBuffer.slice(0));
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const page = pdfDoc.getPages()[0];
    const { width: pageWidth, height: pageHeight } = page.getSize();

    // Name (top-left origin in the editor -> bottom-left origin in PDF).
    const fontSize = namePlacement.fontSize;
    const boxX = namePlacement.xRatio * pageWidth;
    const boxWidth = namePlacement.widthRatio * pageWidth;
    const textWidth = font.widthOfTextAtSize(name, fontSize);
    let textX = boxX;
    if (namePlacement.align === 'center') textX = boxX + (boxWidth - textWidth) / 2;
    else if (namePlacement.align === 'right') textX = boxX + (boxWidth - textWidth);
    const textY = pageHeight * (1 - namePlacement.yRatio) - fontSize;
    page.drawText(name, { x: textX, y: textY, size: fontSize, font, color: hexToRgb(namePlacement.colorHex) });

    // QR code with the signed payload.
    const qrDataUrl = await QRCode.toDataURL(attestationVerifyUrl(payload), { margin: 1, width: 512 });
    const qrImage = await pdfDoc.embedPng(qrDataUrl);
    const qrSize = qrPlacement.sizeRatio * pageWidth;
    const qrX = qrPlacement.xRatio * pageWidth;
    const qrY = pageHeight * (1 - qrPlacement.yRatio) - qrSize;
    page.drawImage(qrImage, { x: qrX, y: qrY, width: qrSize, height: qrSize });

    const bytes = await pdfDoc.save();
    zip.file(`${safeFileName(name)}_Attestation.pdf`, bytes);
    csvRows.push([payload.id, name, payload.issuedAt, payload.expiresAt, payload.signature].map(csvCell).join(','));

    onProgress?.(index + 1, payloads.length);
  }

  // BOM so Excel opens the UTF-8 CSV correctly.
  zip.file('Tracabilite_Certificats.csv', `\uFEFF${csvRows.join('\r\n')}`);

  const blob = await zip.generateAsync({ type: 'blob' });
  saveAs(blob, 'Attestations_Karatou.zip');
  return payloads.length;
}
