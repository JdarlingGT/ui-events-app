import { z } from "zod";

// Event schema
export const eventSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  startDate: z.string().datetime(),
  endDate: z.string().datetime(),
  venueId: z.string().optional(),
  instructorId: z.string().optional(),
  capacity: z.number().min(1).optional(),
});

// Event creation schema (without id)
export const createEventSchema = eventSchema.omit({ id: true });

// Event update schema (all fields optional except id)
export const updateEventSchema = eventSchema.partial().extend({
  id: z.string(),
});

// Type inference
export type Event = z.infer<typeof eventSchema>;
export type CreateEvent = z.infer<typeof createEventSchema>;
export type UpdateEvent = z.infer<typeof updateEventSchema>;