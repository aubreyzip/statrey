import { Match } from "@/entities/models/match/types";
import { matchSchema } from "@/entities/models/match/match";
import { IMatchRepository } from "@/application/repositories/riot/match.repository.interface";
import { MatchService } from "@/infrastructure/services/riot/match.service";

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export class MatchRepository implements IMatchRepository {
  private readonly matchService = new MatchService();

  public async getMatch(matchId: string): Promise<Match> {
    const matchData = await this.matchService.fetchMatchData(matchId);
    const parsedMatch = matchSchema.parse(matchData);
    return parsedMatch;
  }

  public async getPastMatches(puuid: string): Promise<string[]> {
    const pastMatchesData = await this.matchService.fetchPastMatchesData(puuid);
    return pastMatchesData;
  }

  public async getAvaragePlacement(puuid: string): Promise<number> {
    const pastMatches = await this.getPastMatches(puuid);
    if (pastMatches.length === 0) {
      return 0;
    }

    const chunkSize = 10;
    const delayBetweenChunks = 1000; //1sec
    const matchChunks: string[][] = [];
    
    for (let i = 0; i < pastMatches.length; i += chunkSize) {
      matchChunks.push(pastMatches.slice(i, i + chunkSize));
    }
    const placements: number[] = [];
    for (const chunk of matchChunks) {
      const results = await Promise.all(
        chunk.map(async (matchId) => {
          const match = await this.getMatch(matchId);
          return match.info.participants.find(
            participant => participant.puuid === puuid
          )?.placement || 0;
        })
      );

      console.log(`Processed chunk of ${chunk.length}`);
      console.log(`Placements in this chunk: ${results.join(", ")}`);
      
      placements.push(...results);
      if (chunk !== matchChunks[matchChunks.length - 1]) {
        await delay(delayBetweenChunks);
      }
    }
    const totalPlacement = placements.reduce((acc, placement) => acc + placement, 0);
    return totalPlacement / placements.length;
  }
}