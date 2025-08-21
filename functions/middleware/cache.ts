// LRU/Cache API helpers

import { Context, Next } from "hono";

// Simple in-memory cache (for demonstration)
// In production, you might use Cloudflare's Cache API or a dedicated cache service
const cacheStore = new Map<string, { data: any; expiry: number }>();

export function cacheMiddleware(ttl: number = 60) {
  return async function cache(c: Context, next: Next) {
    const key = c.req.url;
    
    // Check if we have a cached response
    const cached = cacheStore.get(key);
    if (cached && cached.expiry > Date.now()) {
      return c.json(cached.data);
    }
    
    // Continue with the request
    await next();
    
    // Cache the response if it's successful
    if (c.res.status === 200) {
      const data = await c.res.clone().json();
      cacheStore.set(key, {
        data,
        expiry: Date.now() + ttl * 1000,
      });
    }
  };
}