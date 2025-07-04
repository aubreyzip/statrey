import { z } from "zod";

export const unitStatsSchema = z.object({
  hp: z.number(),
  mana: z.number(),
  initialMana: z.number(),
  damage: z.number(),
  armor: z.number(),
  magicResist: z.number(),
  critMultiplier: z.number(),
  critChance: z.number(),
  attackSpeed: z.number(),
  range: z.number(),
});

export const abilitySchema = z.object({
  details: z.array(z.array(z.string().or(z.number()).nullable()).nullable()),
});

export const itemizationSchema = z.record(z.string(), z.array(z.string()));

export const unitSchema = z.object({
  name: z.string(),
  stats: unitStatsSchema,
  itemizationId: z.string().optional(),
  ability: abilitySchema,
  tags: z.array(z.string()),
});

export const unitsSchema = z.record(z.string(), unitSchema);