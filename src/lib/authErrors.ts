/**
 * Supabase speaks English, and it speaks to developers. Anything it returns
 * that reaches a person has to be translated first — otherwise a French page
 * shows "New password should be different from the old password", which is how
 * this module came to exist.
 *
 * These functions return a *translation key*, never a sentence: the context
 * layer has no access to the active language, only the pages do.
 */

export const AUTH_ERROR_FALLBACK = 'authErrGeneric';

interface SupabaseLikeError {
  code?: unknown;
  message?: unknown;
}

/**
 * `code` is the stable identifier and is preferred whenever the SDK provides
 * one. It is absent on older clients and on a few endpoints, hence the prose
 * patterns below.
 */
const BY_CODE: Record<string, string> = {
  invalid_credentials: 'authErrInvalidCredentials',
  email_not_confirmed: 'authErrEmailNotConfirmed',
  user_already_exists: 'authErrEmailTaken',
  email_exists: 'authErrEmailTaken',
  weak_password: 'authErrWeakPassword',
  same_password: 'authErrSamePassword',
  over_email_send_rate_limit: 'authErrRateLimit',
  over_request_rate_limit: 'authErrRateLimit',
  email_address_invalid: 'authErrEmailInvalid',
  validation_failed: 'authErrEmailInvalid',
  session_expired: 'authErrSessionExpired',
  refresh_token_not_found: 'authErrSessionExpired',
  user_not_found: 'authErrUserNotFound',
  signup_disabled: 'authErrSignupDisabled',
};

/** Matched against the English prose when no `code` is available. */
const BY_MESSAGE: Array<[RegExp, string]> = [
  [/different from the old password/i, 'authErrSamePassword'],
  [/invalid login credentials/i, 'authErrInvalidCredentials'],
  [/email not confirmed/i, 'authErrEmailNotConfirmed'],
  [/already registered|already exists|already been registered/i, 'authErrEmailTaken'],
  [/password should be at least|password is too weak/i, 'authErrWeakPassword'],
  [/rate limit|for security purposes/i, 'authErrRateLimit'],
  [/unable to validate email|invalid email|invalid format/i, 'authErrEmailInvalid'],
  [/user not found/i, 'authErrUserNotFound'],
  [/signups? (?:not allowed|disabled)/i, 'authErrSignupDisabled'],
];

/** Translation key for an error coming back from Supabase Auth. */
export function mapAuthError(error: unknown): string {
  if (!error) return AUTH_ERROR_FALLBACK;

  const candidate = error as SupabaseLikeError;
  const code = typeof candidate.code === 'string' ? candidate.code.trim().toLowerCase() : '';
  if (code && BY_CODE[code]) {
    return BY_CODE[code];
  }

  const message = typeof candidate.message === 'string' ? candidate.message : '';
  const matched = BY_MESSAGE.find(([pattern]) => pattern.test(message));
  return matched ? matched[1] : AUTH_ERROR_FALLBACK;
}

/**
 * The untranslated text, kept only when nothing matched. Showing it is better
 * than showing nothing when a real user hits an unmapped case in the field, but
 * it is deliberately never the primary message.
 */
export function authErrorDetail(error: unknown): string | undefined {
  if (mapAuthError(error) !== AUTH_ERROR_FALLBACK) return undefined;
  const message = (error as SupabaseLikeError | null)?.message;
  return typeof message === 'string' && message.trim() ? message.trim() : undefined;
}
