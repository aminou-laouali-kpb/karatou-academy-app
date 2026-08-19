type RuntimeEnvironment = Record<string, string | undefined>;

const DEFAULT_VERIFY_HOSTS = ['verify.karatou.academy'];

/**
 * Returns the hosts that should open the public attestation checker at `/`.
 * Set VITE_VERIFY_HOSTS to a comma-separated list for staging or an alias.
 */
export function getVerificationHosts(environment: RuntimeEnvironment): string[] {
  const configured = environment.VITE_VERIFY_HOSTS?.trim();
  const rawHosts = configured ? configured.split(',') : DEFAULT_VERIFY_HOSTS;

  return [...new Set(
    rawHosts
      .map((host) => host.trim().toLowerCase())
      .filter((host) => host.length > 0),
  )];
}

export function isVerificationHost(
  hostname: string,
  environment: RuntimeEnvironment = import.meta.env,
): boolean {
  return getVerificationHosts(environment).includes(hostname.trim().toLowerCase());
}