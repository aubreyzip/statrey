import z from "zod";
import { matchesSchema } from "./matches";

export type MatchesType = z.infer<typeof matchesSchema>;