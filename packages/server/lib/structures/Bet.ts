import { Competitions } from "../enums/competitions";
import { User } from "./User";
import { BetStatuses } from "../enums/betStatuses";

export declare class Bet {
  readonly _id?: string;
  readonly competition: Competitions;
  readonly status: BetStatuses;
  readonly createdBy: User;
}
