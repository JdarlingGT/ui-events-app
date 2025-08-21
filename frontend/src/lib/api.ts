// Typed client to /api (fetch wrappers)

// Base API configuration
const API_BASE_URL = "/api";

// Generic fetch wrapper
async function apiFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

// API methods
export const api = {
  get: <T>(endpoint: string) => apiFetch<T>(endpoint),
  post: <T>(endpoint: string, data: unknown) => apiFetch<T>(endpoint, {
    method: "POST",
    body: JSON.stringify(data),
  }),
  put: <T>(endpoint: string, data: unknown) => apiFetch<T>(endpoint, {
    method: "PUT",
    body: JSON.stringify(data),
  }),
  delete: <T>(endpoint: string) => apiFetch<T>(endpoint, {
    method: "DELETE",
  }),
};