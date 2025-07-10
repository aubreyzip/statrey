import { Account } from "@/entities/models/riot/types";

export interface IAccountService {
  fetchPuuid(gameName: string, tagLine: string): Promise<string>;
  fetchAccountData(puuid: string): Promise<Account>;
}