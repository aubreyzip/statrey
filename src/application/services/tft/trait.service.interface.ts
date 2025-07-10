import { Trait } from "@/entities/models/tft/types";

export interface ITraitService {
  fetchTraits(): Promise<Record<string, Trait>>;
}