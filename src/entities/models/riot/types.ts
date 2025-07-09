import z from "zod";
import { accountSchema } from "@/entities/models/riot/account";

export type Account = z.infer<typeof accountSchema>;