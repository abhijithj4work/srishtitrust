/**
 * Resolve a public asset path respecting Vite's BASE_URL.
 * Works for local dev (base `/`) and GitHub Pages (base `/repo-name/`).
 */
export function assetUrl(path: string): string {
  if (!path) return path
  if (path.startsWith('http://') || path.startsWith('https://')) return path
  const clean = path.replace(/^\//, '')
  const base = import.meta.env.BASE_URL
  return `${base}${clean}`
}
