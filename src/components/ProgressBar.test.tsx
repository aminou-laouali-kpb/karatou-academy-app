import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { ProgressBar } from './ProgressBar';

describe('accessible progress values', () => {
  it.each([[-10, 0], [130, 100], [NaN, 0], [Infinity, 0], [42, 42]])(
    'clamps %s to %s with an accessible name',
    (value, expected) => {
      const html = renderToStaticMarkup(<ProgressBar value={value} ariaLabel="Progression du cours" />);
      expect(html).toContain(`aria-valuenow="${expected}"`);
      expect(html).toContain(`aria-label="Progression du cours: ${expected}%"`);
    },
  );
});
