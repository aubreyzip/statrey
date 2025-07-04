import { z } from "zod";

export const traitSchema = z.object({
  name: z.string(),
});

export const traitsSchema = z.record(z.string(), traitSchema);