import { User } from './User';
import { Team } from './Team';

export declare class Champion {
  readonly _id?: string;
  readonly team: Team;
  readonly competition: string;
  readonly createdBy: User;
}
