import { BetStatus, Competition, User } from '@bet/structures';

export declare class Bet {
  readonly _id?: string;
  readonly competition: Competition;
  readonly status: BetStatus;
  readonly createdBy: User.User;
}
