import { z } from "zod";

// Venue schema
export const venueSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "Name is required"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(2, "State is required").max(2, "State must be 2 characters"),
  zipCode: z.string().min(5, "Zip code is required").max(10, "Invalid zip code"),
  capacity: z.number().min(1).optional(),
  amenities: z.array(z.string()).optional(),
});

// Venue creation schema (without id)
export const createVenueSchema = venueSchema.omit({ id: true });

// Venue update schema (all fields optional except id)
export const updateVenueSchema = venueSchema.partial().extend({
  id: z.string(),
});

// Type inference
export type Venue = z.infer<typeof venueSchema>;
export type CreateVenue = z.infer<typeof createVenueSchema>;
export type UpdateVenue = z.infer<typeof updateVenueSchema>;