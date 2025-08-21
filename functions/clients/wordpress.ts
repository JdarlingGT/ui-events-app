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