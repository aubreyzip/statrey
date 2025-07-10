import { z } from 'zod';
import { participantSchema } from './participant';

export const infoSchema = z.object({
  endOfGameResult: z.string(),
  gameCreation: z.number(),
  gameId: z.number(),
  game_datetime: z.number(),
  game_length: z.number(),
  game_version: z.string(),
  mapId: z.number(),
  participants: z.array(participantSchema),
  queueId: z.number(),
  queue_id: z.number(),
  tft_game_type: z.string(),
  tft_set_core_name: z.string(),
  tft_set_number: z.number(),
});