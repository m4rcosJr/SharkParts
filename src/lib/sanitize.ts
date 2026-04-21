/** Sanitize a string to prevent XSS — strips HTML tags and trims */
export function sanitizeText(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .trim();
}

/** Decode sanitized text back for display in inputs */
export function decodeSanitized(input: string): string {
  return input
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<")
    .replace(/&amp;/g, "&");
}

/** Validate URL format */
export function isValidUrl(url: string): boolean {
  if (!url) return true; // optional
  try {
    const u = new URL(url);
    return u.protocol === "https:" || u.protocol === "http:";
  } catch {
    return false;
  }
}

/** Validate price format (R$ X.XXX,XX or empty) */
export function isValidPrice(price: string): boolean {
  if (!price) return true;
  return /^R\$\s?\d{1,3}(\.\d{3})*(,\d{2})?$/.test(price.trim());
}

/** Generate a simple session token */
export function generateSessionToken(): string {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, (b) => b.toString(16).padStart(2, "0")).join("");
}

const SESSION_KEY = "shark_admin_token";
const SESSION_EXPIRY_KEY = "shark_admin_expiry";
const SESSION_DURATION = 2 * 60 * 60 * 1000; // 2 hours

export function createSession(): void {
  const token = generateSessionToken();
  const expiry = Date.now() + SESSION_DURATION;
  sessionStorage.setItem(SESSION_KEY, token);
  sessionStorage.setItem(SESSION_EXPIRY_KEY, expiry.toString());
}

export function isSessionValid(): boolean {
  if (typeof window === "undefined") return false;
  const token = sessionStorage.getItem(SESSION_KEY);
  const expiry = sessionStorage.getItem(SESSION_EXPIRY_KEY);
  if (!token || !expiry) return false;
  return Date.now() < parseInt(expiry, 10);
}

export function clearSession(): void {
  sessionStorage.removeItem(SESSION_KEY);
  sessionStorage.removeItem(SESSION_EXPIRY_KEY);
}
