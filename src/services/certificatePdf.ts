import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import QRCode from 'qrcode';
import { saveAs } from 'file-saver';
import { VERIFY_DISPLAY_HOST } from '../lib/verification';

// A4 landscape, points. The layout is authored in the 680x480 mockup coordinate
// space and scaled to the page, so it matches the approved design 1:1.
const W = 842;
const H = 595.28;
const MOCK_W = 680;
const k = W / MOCK_W; // mockup unit -> PDF point

const sx = (mx: number) => mx * k;
const sy = (myFromTop: number) => H - myFromTop * k; // text baseline / point, from top
const fs = (size: number) => size * k;

const NAVY = rgb(0.086, 0.188, 0.431);
const BLUE = rgb(0.118, 0.227, 0.541);
const GOLD = rgb(0.784, 0.58, 0.102);
const GOLD_BRIGHT = rgb(0.949, 0.761, 0);
const GRAY = rgb(0.42, 0.447, 0.502);
const FAINT_GOLD = rgb(0.941, 0.902, 0.8);
const CREAM = rgb(0.984, 0.953, 0.871);
const WHITE = rgb(1, 1, 1);

const SVG_OPTS = { x: 0, y: H, scale: k } as const;

// pdf-lib StandardFonts use WinAnsi (Latin-1); strip anything outside it so a
// stray character never throws mid-generation.
function safe(text: string): string {
  return text.normalize('NFC').replace(/[^\u0020-\u00FF]/g, '');
}

export interface CertificatePdfInput {
  name: string;
  moduleName: string;
  issuedAt: string; // already formatted, e.g. "1 juin 2026"
  uid: string;
  verifyUrl: string; // e.g. https://site/verify/UID
  sponsorLogoUrl?: string | null;
}

async function fetchImageBytes(url: string, timeoutMs = 6000): Promise<ArrayBuffer | null> {
  // Abort after a short delay: on a slow 2G link a hanging logo fetch must never
  // freeze the whole certificate generation — we just skip the sponsor logo.
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { mode: 'cors', signal: controller.signal });
    if (!res.ok) return null;
    return await res.arrayBuffer();
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

export async function generateCertificatePdf(input: CertificatePdfInput): Promise<Uint8Array> {
  const doc = await PDFDocument.create();
  const page = doc.addPage([W, H]);

  const serifBold = await doc.embedFont(StandardFonts.TimesRomanBold);
  const serifItalic = await doc.embedFont(StandardFonts.TimesRomanItalic);
  const sans = await doc.embedFont(StandardFonts.Helvetica);
  const sansBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const mono = await doc.embedFont(StandardFonts.Courier);

  const center = (text: string, font: typeof sans, size: number, yTop: number, color = NAVY) => {
    const t = safe(text);
    const w = font.widthOfTextAtSize(t, size);
    page.drawText(t, { x: (W - w) / 2, y: sy(yTop), size, font, color });
  };
  const rightText = (text: string, font: typeof sans, size: number, xRightMock: number, yTop: number, color = NAVY) => {
    const t = safe(text);
    const w = font.widthOfTextAtSize(t, size);
    page.drawText(t, { x: sx(xRightMock) - w, y: sy(yTop), size, font, color });
  };
  const rect = (mx: number, my: number, mw: number, mh: number, opts: Record<string, unknown>) =>
    page.drawRectangle({ x: sx(mx), y: sy(my + mh), width: mw * k, height: mh * k, ...opts });
  const line = (x1: number, y1: number, x2: number, y2: number, color: ReturnType<typeof rgb>, thickness = 0.75) =>
    page.drawLine({ start: { x: sx(x1), y: sy(y1) }, end: { x: sx(x2), y: sy(y2) }, thickness, color });

  // Paper + double frame.
  page.drawRectangle({ x: 0, y: 0, width: W, height: H, color: WHITE });
  rect(16, 16, 648, 448, { borderColor: NAVY, borderWidth: 1.5 });
  rect(22, 22, 636, 436, { borderColor: GOLD, borderWidth: 0.75 });

  // Gold corner flourishes + dots.
  for (const d of [
    'M28 54 Q28 28 54 28',
    'M652 54 Q652 28 626 28',
    'M28 426 Q28 452 54 452',
    'M652 426 Q652 452 626 452',
  ]) {
    page.drawSvgPath(d, { ...SVG_OPTS, borderColor: GOLD, borderWidth: 1 });
  }
  for (const [cx, cy] of [[28, 28], [652, 28], [28, 452], [652, 452]] as const) {
    page.drawCircle({ x: sx(cx), y: sy(cy), size: 2 * k, color: GOLD });
  }

  // Karatou logo mark (rounded square) + gold K + underline.
  page.drawSvgPath('M55 36 h18 a9 9 0 0 1 9 9 v18 a9 9 0 0 1 -9 9 h-18 a9 9 0 0 1 -9 -9 v-18 a9 9 0 0 1 9 -9 z', {
    ...SVG_OPTS,
    color: BLUE,
    borderColor: GOLD,
    borderWidth: 0.5,
  });
  const kW = serifBold.widthOfTextAtSize('K', fs(26));
  page.drawText('K', { x: sx(64) - kW / 2, y: sy(63), size: fs(26), font: serifBold, color: GOLD_BRIGHT });
  rect(57, 60, 15, 3, { color: GOLD_BRIGHT });
  page.drawText('Karatou Academy', { x: sx(94), y: sy(56), size: fs(18), font: serifBold, color: NAVY });
  line(95, 64, 285, 64, FAINT_GOLD);
  page.drawText('LEARN   ·   CERTIFY   ·   GROW', { x: sx(95), y: sy(77), size: fs(8.5), font: sans, color: GRAY });

  // Sponsor logo (top-right), only when provided and fetchable.
  if (input.sponsorLogoUrl) {
    const bytes = await fetchImageBytes(input.sponsorLogoUrl);
    if (bytes) {
      let img = null;
      try {
        img = await doc.embedPng(bytes);
      } catch {
        try {
          img = await doc.embedJpg(bytes);
        } catch {
          img = null;
        }
      }
      if (img) {
        const maxW = 110 * k;
        const maxH = 38 * k;
        const scale = Math.min(maxW / img.width, maxH / img.height);
        const dw = img.width * scale;
        const dh = img.height * scale;
        rightText('EN PARTENARIAT AVEC', sans, fs(8.5), 636, 42, GRAY);
        page.drawImage(img, { x: sx(636) - dw, y: H - 46 * k - dh, width: dw, height: dh });
      }
    }
  }

  line(46, 92, 540, 92, FAINT_GOLD);

  // Eyebrow with side rules.
  const eyebrow = 'CERTIFICAT DE RÉUSSITE';
  const ebSize = fs(13);
  const ebW = sansBold.widthOfTextAtSize(eyebrow, ebSize);
  const ebX = (W - ebW) / 2;
  page.drawText(eyebrow, { x: ebX, y: sy(124), size: ebSize, font: sansBold, color: BLUE });
  page.drawLine({ start: { x: ebX - 44, y: sy(120) }, end: { x: ebX - 12, y: sy(120) }, thickness: 0.75, color: GOLD });
  page.drawLine({ start: { x: ebX + ebW + 12, y: sy(120) }, end: { x: ebX + ebW + 44, y: sy(120) }, thickness: 0.75, color: GOLD });

  center('Le présent certificat atteste que', sans, fs(13), 151, GRAY);

  // Recipient name.
  center(input.name, serifBold, fs(38), 206, NAVY);

  // Gold underline + end dots.
  const uw = 150 * k;
  const ux = (W - uw) / 2;
  page.drawRectangle({ x: ux, y: sy(224), width: uw, height: 2, color: GOLD });
  page.drawCircle({ x: ux, y: sy(223), size: 2.6, color: GOLD });
  page.drawCircle({ x: ux + uw, y: sy(223), size: 2.6, color: GOLD });

  center('a complété avec succès le module', sans, fs(14), 256, GRAY);

  // Module name (shrink to fit the safe width).
  let modSize = fs(17);
  const maxModW = W - sx(120);
  while (sansBold.widthOfTextAtSize(safe(input.moduleName), modSize) > maxModW && modSize > fs(11)) {
    modSize -= 1;
  }
  center(input.moduleName, sansBold, modSize, 284, BLUE);

  center(`Délivré le ${input.issuedAt}`, sans, fs(13), 315, GRAY);

  // Gold seal / rosette.
  page.drawCircle({ x: sx(340), y: sy(390), size: 21 * k, borderColor: GOLD, borderWidth: 3, borderDashArray: [1 * k, 5 * k] });
  page.drawCircle({ x: sx(340), y: sy(390), size: 15 * k, color: CREAM, borderColor: GOLD, borderWidth: 0.75 });
  page.drawSvgPath(
    'M340 382 L341.8 387.5 L347.6 387.5 L342.9 391.1 L344.7 396.8 L340 393.4 L335.3 396.8 L337.1 391.1 L332.4 387.5 L338.2 387.5 Z',
    { ...SVG_OPTS, color: GOLD }
  );

  // Signature (bottom-left).
  page.drawText('Karatou', { x: sx(60), y: sy(406), size: fs(21), font: serifItalic, color: NAVY });
  line(60, 416, 232, 416, GRAY);
  page.drawText('Karatou Academy', { x: sx(60), y: sy(432), size: fs(12), font: sansBold, color: NAVY });
  page.drawText('Le Président', { x: sx(60), y: sy(446), size: fs(11), font: sans, color: GRAY });

  // QR + verification (bottom-right).
  const qrDataUrl = await QRCode.toDataURL(input.verifyUrl, { margin: 0, width: 256 });
  const qr = await doc.embedPng(qrDataUrl);
  page.drawImage(qr, { x: sx(566), y: sy(444), width: 60 * k, height: 60 * k });
  rightText("Vérifier l'authenticité", sans, fs(11), 556, 402, GRAY);
  rightText(`${VERIFY_DISPLAY_HOST}/verify`, sans, fs(11), 556, 418, NAVY);
  rightText(`ID : ${input.uid}`, mono, fs(10.5), 556, 434, GRAY);

  return doc.save();
}

function safeFileName(name: string): string {
  return (
    name.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-zA-Z0-9]+/g, '_').replace(/^_+|_+$/g, '') ||
    'Certificat'
  );
}

export async function downloadCertificatePdf(input: CertificatePdfInput): Promise<void> {
  const bytes = await generateCertificatePdf(input);
  saveAs(new Blob([bytes], { type: 'application/pdf' }), `Certificat_${safeFileName(input.name)}.pdf`);
}
