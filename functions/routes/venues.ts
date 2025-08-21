import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { venueSchema, createVenueSchema, updateVenueSchema } from "../schemas/venueSchema";
import { cacheMiddleware } from "../middleware/cache";

const app = new Hono();

// Get all venues
app.get("/", cacheMiddleware(60), (c) => {
  // In a real implementation, you would fetch from a database
  const venues = [
    {
      id: "1",
      name: "Sample Venue",
      address: "123 Main St",
      city: "Anytown",
      state: "ST",
      zipCode: "12345",
    },
  ];
  
  return c.json({ venues });
});

// Get venue by ID
app.get("/:id", cacheMiddleware(60), (c) => {
  const id = c.req.param("id");
  
  // In a real implementation, you would fetch from a database
  const venue = {
    id,
    name: "Sample Venue",
    address: "123 Main St",
    city: "Anytown",
    state: "ST",
    zipCode: "12345",
  };
  
  return c.json({ venue });
});

// Create venue
app.post("/", zValidator("json", createVenueSchema), (c) => {
  const data = c.req.valid("json");
  
  // In a real implementation, you would save to a database
  const venue = {
    id: "new-id",
    ...data,
  };
  
  return c.json({ venue }, 201);
});

// Update venue
app.put("/:id", zValidator("json", updateVenueSchema), (c) => {
  const id = c.req.param("id");
  const data = c.req.valid("json");
  
  // In a real implementation, you would update in a database
  const venue = {
    id,
    ...data,
  };
  
  return c.json({ venue });
});

// Delete venue
app.delete("/:id", (c) => {
  const id = c.req.param("id");
  
  // In a real implementation, you would delete from a database
  
  return c.json({ message: `Venue ${id} deleted` });
});

export { app as venuesRoute };