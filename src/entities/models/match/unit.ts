import { z } from 'zod';

export const unitSchema = z.object({
  character_id: z.string(),
  itemNames: z.array(z.string()),
  name: z.string(),
  rarity: z.number(),
  tier: z.number(),
});