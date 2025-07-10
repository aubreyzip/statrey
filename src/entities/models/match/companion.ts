import { z } from 'zod';

export const companionSchema = z.object({
  content_ID: z.string(),
  item_ID: z.number(),
  skin_ID: z.number(),
  species: z.string(),
});