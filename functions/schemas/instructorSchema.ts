import { z } from "zod";

// Instructor schema
export const instructorSchema = z.object({
  id: z.string().optional(),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  bio: z.string().optional(),
  specialties: z.array(z.string()).optional(),
});

// Instructor creation schema (without id)
export const createInstructorSchema = instructorSchema.omit({ id: true });

// Instructor update schema (all fields optional except id)
export const updateInstructorSchema = instructorSchema.partial().extend({
  id: z.string(),
});

// Type inference
export type Instructor = z.infer<typeof instructorSchema>;
export type CreateInstructor = z.infer<typeof createInstructorSchema>;
export type UpdateInstructor = z.infer<typeof updateInstructorSchema>;