import { itemizationsSchema } from "@/entities/models/tft/itemization";
import { Itemization } from "@/entities/models/tft/types";
import { fetchData } from "./utils";
import { keys } from "@/entities/models/tft/keys";

export async function fetchItemizations(): Promise<Record<string, Itemization>> {
  return fetchData(keys.itemization, itemizationsSchema);
}