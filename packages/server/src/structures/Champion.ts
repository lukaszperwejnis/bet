import { Team } from '@bet/structures';
import { User } from './User';

export declare class Champion {
  readonly _id?: string;
  readonly team: Team.Team;
  readonly competition: string;
  readonly createdBy: User;
}
