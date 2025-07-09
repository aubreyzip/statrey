import { Account } from "@/entities/models/riot/types";
import { accountSchema } from "@/entities/models/riot/account";

export async function fetchAccountData(
  puuid: string,
): Promise<Account> {
  const response = await fetch(
    `https://europe.api.riotgames.com/riot/account/v1/accounts/by-puuid/${puuid}`,
    {
      headers: {
        "X-Riot-Token": process.env.NEXT_PUBLIC_RIOT_API_KEY || "",
      },
    }
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch account data: ${response.statusText}`);
  }
  const json = await response.json();

  return accountSchema.parse(json);
}
export async function fetchPuuid(
  gameName: string,
  tagLine: string,
): Promise<string> {
  const response = await fetch(
    `https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`,
    {
      headers: {
        "X-Riot-Token": process.env.NEXT_PUBLIC_RIOT_API_KEY || "",
      },
    }
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch puuid: ${response.statusText}`);
  }
  const json = await response.json();
  return json.puuid as string;
}