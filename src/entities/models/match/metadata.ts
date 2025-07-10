import { z } from 'zod';

export const metadataSchema = z.object({
  data_version: z.string(),
  match_id: z.string(),
  participants: z.array(z.string()),
});