import { z } from "zod";
import { matchSchema } from "@/entities/models/match/match";

export type Match = z.infer<typeof matchSchema>;
export type PastMatches = string[];