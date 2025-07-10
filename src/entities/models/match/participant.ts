import { z } from 'zod';
import { companionSchema } from './companion';
import { traitSchema } from './trait';
import { unitSchema } from './unit';

export const participantSchema = z.object({
  companion: companionSchema,
  gold_left: z.number(),
  last_round: z.number(),
  level: z.number(),
  missions: z.record(z.string(), z.number()),
  placement: z.number(),
  players_eliminated: z.number(),
  puuid: z.string(),
  riotIdGameName: z.string(),
  riotIdTagline: z.string(),
  time_eliminated: z.number(),
  total_damage_to_players: z.number(),
  traits: z.array(traitSchema),
  units: z.array(unitSchema),
  win: z.boolean(),
});