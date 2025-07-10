import { AccountRepository } from "@/infrastructure/repositories/riot/account.repository";

const accountRepo = new AccountRepository();

export async function getAccount(gameName: string, tagLine: string) {
  const puuid = await accountRepo.getPuuid(gameName, tagLine);
  return await accountRepo.getAccount(puuid);
}
export async function getPuuid(gameName: string, tagLine: string) {
  return await accountRepo.getPuuid(gameName, tagLine);
}