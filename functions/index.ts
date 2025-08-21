import { Hono } from "hono";
import { eventsRoute } from "./routes/events";
import { venuesRoute } from "./routes/venues";
import { instructorsRoute } from "./routes/instructors";

const app = new Hono();

// Base route
app.get("/", (c) => {
  return c.json({ message: "UI Events API" });
});

// API routes
app.route("/api/events", eventsRoute);
app.route("/api/venues", venuesRoute);
app.route("/api/instructors", instructorsRoute);

export default app;