// WordPress REST client (typed)

// WordPress API base URL
const WP_API_BASE = "https://your-wordpress-site.com/wp-json/wp/v2";

// Generic fetch wrapper for WordPress API
async function wpFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${WP_API_BASE}${endpoint}`;

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`WordPress API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

// WordPress post type interfaces
export interface WPPost {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
}

// WordPress client methods
export const wpClient = {
  getPosts: () => wpFetch<WPPost[]>("/posts"),
  getPost: (id: number) => wpFetch<WPPost>(`/posts/${id}`),
  createPost: (data: Partial<WPPost>) => wpFetch<WPPost>("/posts", {
    method: "POST",
    body: JSON.stringify(data),
  }),
};

export const venuesCRUD = { /* CRUD operations for venues */ };
export const instructorsCRUD = { /* CRUD operations for instructors */ };

// Use the global fetch provided by Cloudflare Workers. Read WP_BASE_URL from bindings/globalThis when available.
const WP_BASE_URL: string = (globalThis as any).WP_BASE_URL || process?.env?.WP_BASE_URL || "https://example.com/wp-json";

export async function getEvents(): Promise<any> {
  const response = await fetch(`${WP_BASE_URL}/gt/v1/events`);
  if (!response.ok) {
    throw new Error("Failed to fetch events");
  }
  return response.json();
}

export async function getEventById(id: string): Promise<any> {
  const response = await fetch(`${WP_BASE_URL}/gt/v1/events/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch event by ID");
  }
  return response.json();
}