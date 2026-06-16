import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import QRCode from 'qrcode';
import CryptoJS from 'crypto-js';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { format, addYears } from 'date-fns';
import * as XLSX from 'xlsx';

// HMAC secret. NOTE: a VITE_ var is bundled into the client, so this is NOT
// truly secret — it deters casual tampering, not a determined attacker. For
// real tamper-resistance, sign server-side (see Sprint 02 notes).
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

export function buildSignedPayload(name: string): CertificatePayload {
  const now = new Date();
  const id = randomCertId();
  const issuedAt = format(now, 'yyyy-MM-dd');
  const expiresAt = format(addYears(now, 1), 'yyyy-MM-dd');
  // Sign the canonical fields so the QR cannot be altered without the secret.
  const base = JSON.stringify({ id, name, issuedAt, expiresAt });
  const signature = CryptoJS.HmacSHA256(base, SECRET).toString();
  return { id, name, issuedAt, expiresAt, signature };
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

  for (let index = 0; index < names.length; index += 1) {
    const name = names[index];
    const payload = buildSignedPayload(name);

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
    const qrDataUrl = await QRCode.toDataURL(JSON.stringify(payload), { margin: 1, width: 512 });
    const qrImage = await pdfDoc.embedPng(qrDataUrl);
    const qrSize = qrPlacement.sizeRatio * pageWidth;
    const qrX = qrPlacement.xRatio * pageWidth;
    const qrY = pageHeight * (1 - qrPlacement.yRatio) - qrSize;
    page.drawImage(qrImage, { x: qrX, y: qrY, width: qrSize, height: qrSize });

    const bytes = await pdfDoc.save();
    zip.file(`${safeFileName(name)}_Attestation.pdf`, bytes);
    csvRows.push([payload.id, name, payload.issuedAt, payload.expiresAt, payload.signature].map(csvCell).join(','));

    onProgress?.(index + 1, names.length);
  }

  // BOM so Excel opens the UTF-8 CSV correctly.
  zip.file('Tracabilite_Certificats.csv', `\uFEFF${csvRows.join('\r\n')}`);

  const blob = await zip.generateAsync({ type: 'blob' });
  saveAs(blob, 'Attestations_Karatou.zip');
  return names.length;
}
