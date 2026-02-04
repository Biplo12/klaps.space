const API_URL = process.env.API_URL!;
const INTERNAL_API_KEY = process.env.INTERNAL_API_KEY!;

export async function apiFetch<T>(
  path: string,
  options: RequestInit & { params?: Record<string, string> } = {}
): Promise<T> {
  const url = new URL(`${API_URL}${path}`);

  if (options.params) {
    Object.entries(options.params).forEach(([key, value]) => {
      if (value) {
        url.searchParams.set(key, value);
      }
    });
  }

  const res = await fetch(url.toString(), {
    ...options,
    headers: {
      ...options.headers,
      "x-internal-api-key": INTERNAL_API_KEY,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    console.error(res.statusText);
    throw new Error(`API error ${res.status}`);
  }

  return res.json();
}
