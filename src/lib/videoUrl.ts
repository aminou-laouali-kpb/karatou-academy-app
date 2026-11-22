/**
 * Video URLs come from admins (CMS, lesson studio, JSON imports) and end up in
 * an <iframe src>. React does not block `javascript:` there, so an unchecked
 * value could run script for every learner. Only YouTube links are accepted,
 * and they are rebuilt from the video id — nothing of the original string is
 * passed through. youtu.be and watch?v= links pasted from the share button are
 * converted too (they do not play inside an iframe as such).
 */
const YOUTUBE_ID = '[A-Za-z0-9_-]{11}';
const PATTERNS = [
  new RegExp(`^https://(?:www\\.|m\\.)?youtube(?:-nocookie)?\\.com/embed/(${YOUTUBE_ID})(?:[?&#].*)?$`),
  new RegExp(`^https://(?:www\\.|m\\.)?youtube\\.com/(?:watch\\?(?:.*&)?v=|shorts/|live/)(${YOUTUBE_ID})(?:[?&#].*)?$`),
  new RegExp(`^https://youtu\\.be/(${YOUTUBE_ID})(?:[?&#].*)?$`),
];

export function youtubeVideoId(url: string | null | undefined): string | null {
  const value = (url || '').trim();
  for (const pattern of PATTERNS) {
    const match = value.match(pattern);
    if (match) return match[1];
  }
  return null;
}

/** Canonical embed URL (stored form), or '' when the URL is not an allowed video. */
export function toEmbedUrl(url: string | null | undefined): string {
  const id = youtubeVideoId(url);
  return id ? `https://www.youtube.com/embed/${id}` : '';
}

/** What the iframe loads: privacy-enhanced domain, no third-party cookies before play. */
export function toPlayerUrl(url: string | null | undefined): string {
  const id = youtubeVideoId(url);
  return id ? `https://www.youtube-nocookie.com/embed/${id}` : '';
}
