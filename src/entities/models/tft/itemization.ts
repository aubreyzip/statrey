import { z } from "zod";

export const itemizationSchema = z.record(z.string(), z.array(z.string()));
export const itemizationsSchema = z.record(z.string(), itemizationSchema);