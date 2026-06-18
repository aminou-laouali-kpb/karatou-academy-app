function parseDemoFlag(value: string | undefined) {
  if (!value) return null;

  const normalized = value.trim().toLowerCase();
  if (['1', 'true', 'yes', 'on'].includes(normalized)) return true;
  if (['0', 'false', 'no', 'off'].includes(normalized)) return false;

  return null;
}

const configuredDemoFlag = parseDemoFlag(import.meta.env.VITE_DEMO_ENABLED as string | undefined);

export const isDemoEnabled = configuredDemoFlag ?? import.meta.env.DEV;
