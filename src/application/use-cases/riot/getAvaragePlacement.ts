import { MatchRepository } from "@/infrastructure/repositories/riot/match.repository";

const matchRepo = new MatchRepository();

export async function getAvaragePlacement(puuid: string): Promise<number> {
    return await matchRepo.getAvaragePlacement(puuid);
}