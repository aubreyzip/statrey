import { z } from "zod";

export const itemSchema = z.object({
  id: z.number(),
  name: z.string(),
  effects: z.record(z.string(), z.number()),
  from: z.array(z.number()),
  tags: z.array(z.string()),
});

export const itemsSchema = z.record(z.string(), itemSchema);