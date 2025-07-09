import { Account } from "@/entities/models/riot/types";

export interface IAccountRepository {
  getPuuid(gameName: string, tagLine: string): Promise<string>;
  getAccount(puuid: string): Promise<Account>;
}