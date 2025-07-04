import { z } from "zod";

export const augmentSchema = z.object({
  id: z.number(),
  name: z.string(),
  rank: z.number(),
  tags: z.array(z.string()),
  picks: z.tuple([z.boolean(), z.boolean(), z.boolean()]),
  disabled: z.boolean().optional(),
});

export const augmentsSchema = z.record(z.string(), augmentSchema);