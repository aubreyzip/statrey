import { z } from 'zod';
import { metadataSchema } from './metadata';
import { infoSchema } from './info';

export const matchSchema = z.object({
  metadata: metadataSchema,
  info: infoSchema,
});