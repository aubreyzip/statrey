import z from "zod";
import { accountSchema } from "@/entities/models/riot/account";

export type AccountType = z.infer<typeof accountSchema>;