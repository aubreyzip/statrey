import { z } from 'zod';

export const traitSchema = z.object({
  name: z.string(),
  num_units: z.number(),
  style: z.number(),
  tier_current: z.number(),
  tier_total: z.number(),
});