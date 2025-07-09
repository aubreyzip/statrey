import { Account } from "@/entities/models/riot/types";
import { fetchAccountData, fetchPuuid } from "@/infrastructure/services/riot/account.service";
import { IAccountRepository } from "@/application/repositories/account.repository.interface";

export class AccountRepository implements IAccountRepository {

  public async getPuuid(gameName: string,tagLine: string): Promise<string> {
    return fetchPuuid(gameName, tagLine);
  }
  public async getAccount(puuid: string): Promise<Account> {
    return fetchAccountData(puuid);
  }
}