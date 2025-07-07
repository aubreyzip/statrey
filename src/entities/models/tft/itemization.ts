import { z } from "zod";

export const itemizationSchema = z.array(z.string());
export const itemizationsSchema = z.record(z.string(), itemizationSchema);
