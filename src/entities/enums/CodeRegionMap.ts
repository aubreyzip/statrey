import { PlatformCodeType } from "./platformCode";
import { RegionalRoutingType } from "./regionalRouting";
import { PlatformCode } from "./platformCode";
import { RegionalRouting } from "./regionalRouting";

export const PLATFORM_TO_REGION_MAP: Record<PlatformCodeType, RegionalRoutingType> = {
  [PlatformCode.BR1]: RegionalRouting.AMERICAS,
  [PlatformCode.LA1]: RegionalRouting.AMERICAS,
  [PlatformCode.LA2]: RegionalRouting.AMERICAS,
  [PlatformCode.NA1]: RegionalRouting.AMERICAS,

  [PlatformCode.EUW1]: RegionalRouting.EUROPE,
  [PlatformCode.EUN1]: RegionalRouting.EUROPE,
  [PlatformCode.TR1]: RegionalRouting.EUROPE,
  [PlatformCode.RU]: RegionalRouting.EUROPE,

  [PlatformCode.JP1]: RegionalRouting.ASIA,
  [PlatformCode.KR]: RegionalRouting.ASIA,

  [PlatformCode.OC1]: RegionalRouting.SEA,
  [PlatformCode.PH2]: RegionalRouting.SEA,
  [PlatformCode.SG2]: RegionalRouting.SEA,
  [PlatformCode.TH2]: RegionalRouting.SEA,
  [PlatformCode.TW2]: RegionalRouting.SEA,
  [PlatformCode.VN2]: RegionalRouting.SEA,
};