import { CreationType, GameStatus, Team } from '@bet/structures';
import { WinnerType } from '../enums';

export declare class Game {
  readonly _id?: string;
  readonly externalId?: number;
  readonly homeTeam: Team.Team;
  readonly awayTeam: Team.Team;
  readonly homeScore?: number;
  readonly awayScore?: number;
  readonly status: GameStatus;
  readonly stage: string;
  readonly scheduledDate: Date;
  readonly winner?: WinnerType;
  readonly creationType: CreationType;
}
