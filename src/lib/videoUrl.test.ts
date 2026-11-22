import { describe, expect, it } from 'vitest';
import { toEmbedUrl, toPlayerUrl, youtubeVideoId } from './videoUrl';

describe('video URL allow-list', () => {
  it('accepts the YouTube forms admins paste', () => {
    expect(toEmbedUrl('https://www.youtube.com/embed/x6-rsUQzkHw')).toBe('https://www.youtube.com/embed/x6-rsUQzkHw');
    expect(toEmbedUrl('https://youtu.be/vIyMyoWzx5o')).toBe('https://www.youtube.com/embed/vIyMyoWzx5o');
    expect(toEmbedUrl('https://youtu.be/vIyMyoWzx5o?si=abc')).toBe('https://www.youtube.com/embed/vIyMyoWzx5o');
    expect(toEmbedUrl('https://www.youtube.com/watch?v=hxHEe9SD8-M&t=30')).toBe('https://www.youtube.com/embed/hxHEe9SD8-M');
    expect(toPlayerUrl('https://youtu.be/vIyMyoWzx5o')).toBe('https://www.youtube-nocookie.com/embed/vIyMyoWzx5o');
  });

  it('rejects anything that could run script or frame another site', () => {
    for (const url of [
      'javascript:alert(1)',
      'JAVASCRIPT:alert(1)//https://youtu.be/vIyMyoWzx5o',
      'data:text/html,<script>alert(1)</script>',
      'http://www.youtube.com/embed/x6-rsUQzkHw',
      'https://evil.example/embed/x6-rsUQzkHw',
      'https://www.youtube.com.evil.example/embed/x6-rsUQzkHw',
      'https://youtu.be/short',
      '',
    ]) {
      expect(youtubeVideoId(url)).toBeNull();
      expect(toPlayerUrl(url)).toBe('');
    }
  });
});
