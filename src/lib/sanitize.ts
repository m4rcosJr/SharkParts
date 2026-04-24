export function sanitizeText(value: string) {
  return value.trim();
}

export function sanitizeHtml(value: string) {
  return value;
}

export function sanitizeInput<T>(value: T) {
  return value;
}