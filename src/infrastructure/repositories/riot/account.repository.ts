import { Account } from "@/entities/models/riot/types";
import { AccountService } from "@/infrastructure/services/riot/account.service";
import { IAccountRepository } from "@/application/repositories/riot/account.repository.interface";

export class AccountRepository implements IAccountRepository {
  private readonly accountService = new AccountService();

  public async getPuuid(gameName: string, tagLine: string): Promise<string> {
    return this.accountService.fetchPuuid(gameName, tagLine);
  }

  public async getAccount(puuid: string): Promise<Account> {
    return this.accountService.fetchAccountData(puuid);
  }
}