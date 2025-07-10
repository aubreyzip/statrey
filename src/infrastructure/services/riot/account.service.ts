import { Account } from "@/entities/models/riot/types";
import { accountSchema } from "@/entities/models/riot/account";
import { IAccountService } from "@/application/services/riot/account.service.interface";

export class AccountService implements IAccountService {
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

    const data: T = await response.json();
    return data;
  }

  public async fetchAccountData(puuid: string): Promise<Account> {
    const data = await this.fetchFromRiot(
      `https://europe.api.riotgames.com/riot/account/v1/accounts/by-puuid/${puuid}`
    );

    return accountSchema.parse(data);
  }

  public async fetchPuuid(gameName: string, tagLine: string): Promise<string> {
    const data = await this.fetchFromRiot(
      `https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`
    );

    const account = accountSchema.parse(data);
    return account.puuid;
  }
}