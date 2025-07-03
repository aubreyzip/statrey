import { championsSchema } from "@/entities/models/tft/champion";

export async function fetchChampionsFromJson(): Promise<ReturnType<typeof championsSchema.parse>> {
  const raw = await import("../static/data.json");
  const champions = raw.default?.units ?? raw.units;

  if (!champions) throw new Error("No champions found in static data");
  console.log(champions);
  return championsSchema.parse(champions);
}