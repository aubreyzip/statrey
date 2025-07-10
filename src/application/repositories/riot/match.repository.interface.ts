import { Match } from "@/entities/models/match/types";

export interface IMatchRepository {
  getMatch(matchId: string): Promise<Match>;
  getPastMatches(puuid: string): Promise<string[]>;
  getAvaragePlacement(puuid: string): Promise<number>;
}