import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { instructorSchema, createInstructorSchema, updateInstructorSchema } from "../schemas/instructorSchema";
import { cacheMiddleware } from "../middleware/cache";

const app = new Hono();

// Get all instructors
app.get("/", cacheMiddleware(60), (c) => {
  // In a real implementation, you would fetch from a database
  const instructors = [
    {
      id: "1",
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
    },
  ];
  
  return c.json({ instructors });
});

// Get instructor by ID
app.get("/:id", cacheMiddleware(60), (c) => {
  const id = c.req.param("id");
  
  // In a real implementation, you would fetch from a database
  const instructor = {
    id,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
  };
  
  return c.json({ instructor });
});

// Create instructor
app.post("/", zValidator("json", createInstructorSchema), (c) => {
  const data = c.req.valid("json");
  
  // In a real implementation, you would save to a database
  const instructor = {
    id: "new-id",
    ...data,
  };
  
  return c.json({ instructor }, 201);
});

// Update instructor
app.put("/:id", zValidator("json", updateInstructorSchema), (c) => {
  const id = c.req.param("id");
  const data = c.req.valid("json");
  
  // In a real implementation, you would update in a database
  const instructor = {
    id,
    ...data,
  };
  
  return c.json({ instructor });
});

// Delete instructor
app.delete("/:id", (c) => {
  const id = c.req.param("id");
  
  // In a real implementation, you would delete from a database
  
  return c.json({ message: `Instructor ${id} deleted` });
});

export { app as instructorsRoute };