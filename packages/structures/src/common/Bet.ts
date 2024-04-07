import { Competition } from './Competition';
import { BetStatus } from './BetStatus';
import { User } from '../user';

export interface Bet {
  readonly _id?: string;
  readonly competition: Competition;
  readonly status: BetStatus;
  readonly createdBy: User.User;
}

export type BetFilters = {
  userId: string;
  status?: BetStatus;
  from?: string;
  to?: string;
};
