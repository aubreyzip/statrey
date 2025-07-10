import { Match } from "@/entities/models/match/types";

export interface IMatchService {
  fetchMatchData(matchId: string): Promise<Match>;
  fetchPastMatchesData(puuid: string): Promise<string[]>;
}