import type { Match } from "@/entities/models/match/types";
import { IMatchService } from "@/application/services/riot/match.service.interface";

export class MatchService implements IMatchService {
  private readonly apiKey = process.env.RIOT_API_KEY || process.env.NEXT_PUBLIC_RIOT_API_KEY || "";

  private async fetchFromRiot<T>(url: string): Promise<T> {
    const response = await fetch(url, {
      headers: {
        "X-Riot-Token": this.apiKey,
      },
    });

    if (!response.ok) {
      throw new Error(`Riot API Error (${response.status}): ${response.statusText}`);
    }

    return await response.json();
  }

  public async fetchMatchData(matchId: string): Promise<Match> {
    const data = await this.fetchFromRiot<Match>(
      `https://europe.api.riotgames.com/tft/match/v1/matches/${matchId}`
    );

    return data;
  }

  public async fetchPastMatchesData(puuid: string): Promise<string[]> {
    const data = await this.fetchFromRiot<string[]>(
      `https://europe.api.riotgames.com/tft/match/v1/matches/by-puuid/${puuid}/ids`
    );

    return data;
  }
}