import { z } from "zod";

export const createPDPRSchema = z.object({
  date: z.string().min(2, "date Require"),
  work_description: z.string().min(2, "description must be at least 2 characters"),
  weather: z.string().min(3, "weather require"),
  worker_count: z.coerce.number().min(1, "worker count require")
});