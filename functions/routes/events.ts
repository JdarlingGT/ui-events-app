import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { eventSchema, createEventSchema, updateEventSchema } from "../schemas/eventSchema";
import { cacheMiddleware } from "../middleware/cache";

const app = new Hono();

// Get all events
app.get("/", cacheMiddleware(60), (c) => {
  // In a real implementation, you would fetch from a database
  const events = [
    {
      id: "1",
      title: "Sample Event",
      description: "This is a sample event",
      startDate: new Date().toISOString(),
      endDate: new Date(Date.now() + 3600000).toISOString(),
    },
  ];
  
  return c.json({ events });
});

// Get event by ID
app.get("/:id", cacheMiddleware(60), (c) => {
  const id = c.req.param("id");
  
  // In a real implementation, you would fetch from a database
  const event = {
    id,
    title: "Sample Event",
    description: "This is a sample event",
    startDate: new Date().toISOString(),
    endDate: new Date(Date.now() + 3600000).toISOString(),
  };
  
  return c.json({ event });
});

// Create event
app.post("/", zValidator("json", createEventSchema), (c) => {
  const data = c.req.valid("json");
  
  // In a real implementation, you would save to a database
  const event = {
    id: "new-id",
    ...data,
  };
  
  return c.json({ event }, 201);
});

// Update event
app.put("/:id", zValidator("json", updateEventSchema), (c) => {
  const id = c.req.param("id");
  const data = c.req.valid("json");
  
  // In a real implementation, you would update in a database
  const event = {
    id,
    ...data,
  };
  
  return c.json({ event });
});

// Delete event
app.delete("/:id", (c) => {
  const id = c.req.param("id");
  
  // In a real implementation, you would delete from a database
  
  return c.json({ message: `Event ${id} deleted` });
});

export { app as eventsRoute };