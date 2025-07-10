import type { Match } from "@/entities/models/match/types";

export async function fetchMatchData(matchId: string): Promise<Match> {
    const response = await fetch(
        `https://europe.api.riotgames.com/tft/match/v1/matches/${matchId}`,
        {
        headers: {
            "X-Riot-Token": process.env.NEXT_PUBLIC_RIOT_API_KEY || "",
            },
        }
    );
    if (!response.ok) {
        throw new Error(`Failed to fetch match data: ${response.status} ${response.statusText}`);
    }
    const json = await response.json();
    return json as Match;

}
export async function fetchPastMatchesData(puuid: string): Promise<string[]> {
    const response = await fetch(
        `https://europe.api.riotgames.com/tft/match/v1/matches/by-puuid/${puuid}/ids`,
        {
            headers: {
                "X-Riot-Token": process.env.NEXT_PUBLIC_RIOT_API_KEY || "",
            },
        }
    );
    if (!response.ok) {
        throw new Error(`Failed to fetch past matches: ${response.statusText}`);
    }
    const json = await response.json();
    return json as string[];
}