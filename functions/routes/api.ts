import { Hono } from 'hono';
import { z } from 'zod';
import { validateJWT } from '../middleware/auth';
import { getEvents, getEventById, venuesCRUD, instructorsCRUD } from '../clients/wordpress';
import { cacheMiddleware } from '../middleware/cache';

const api = new Hono();

// Middleware for JWT validation
api.use('/api/*', validateJWT);

// GET /api/events
api.get('/api/events', cacheMiddleware, async (c) => {
  const events = await getEvents();
  return c.json(events);
});

// GET /api/events/:id
api.get('/api/events/:id', cacheMiddleware, async (c) => {
  const id = c.req.param('id');
  const event = await getEventById(id);
  return c.json(event);
});

// CRUD for venues
api.route('/api/venues', venuesCRUD);

// CRUD for instructors
api.route('/api/instructors', instructorsCRUD);

export default api;
