import { ZodSchema } from "zod";
import type { StaticJsonKeys } from "@/entities/models/tft/keys";

export async function fetchData<T>(
  key: StaticJsonKeys,
  schema: ZodSchema<T>
): Promise<T> {
  const raw = await import("@/infrastructure/static/data.json");
  const dataSection = raw.default?.[key] ?? raw[key];

  if (!dataSection) {
    throw new Error(`No "${key}" found in static data`);
  }

  return schema.parse(dataSection);
}