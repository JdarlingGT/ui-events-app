// Cloudflare Access JWT verification middleware

import { Context, Next } from "hono";

export async function authMiddleware(c: Context, next: Next) {
  // Get the JWT from the Authorization header
  const authHeader = c.req.header("Authorization");
  
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return c.json({ error: "Unauthorized" }, 401);
  }
  
  const token = authHeader.substring(7); // Remove "Bearer " prefix
  
  // Verify the JWT (implementation depends on your auth provider)
  // This is a placeholder implementation
  try {
    // In a real implementation, you would verify the JWT here
    // const payload = verifyJWT(token, JWT_SECRET);
    
    // Add user info to context
    // c.set("user", payload);
    
    await next();
  } catch (error) {
    return c.json({ error: "Invalid token" }, 401);
  }
}