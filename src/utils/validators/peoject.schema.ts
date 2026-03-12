import { z } from "zod";

export const createProjectSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  description: z.string().min(2, "Name must be at least 2 characters"),
  start_date: z.string().min(6, "startDate require"),
  end_date: z.string().min(6, "endDate require"),
  budget: z.coerce.number().min(6, "endDate require"),
  location: z.string().min(2, "location require"),
});

export const ProjectSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  description: z.string().min(2, "Description must be at least 2 characters"),
  start_date: z.string().min(6, "startDate required"),
  end_date: z.string().min(6, "endDate required"),
  budget: z.coerce.number(),
  status: z.string().min(2, "Status required"),
  location: z.string().min(2, "Location required")
});

export const updateProjectSchema = ProjectSchema.partial();