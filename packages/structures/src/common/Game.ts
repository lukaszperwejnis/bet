import { Team } from '../Team';
import { GameStatus } from './GameStatus';
import { CreationType } from './CreationType';
import { Winner } from './Winner';

export interface Game {
  readonly _id?: string;
  readonly externalId?: number;
  readonly homeTeam: Team;
  readonly awayTeam: Team;
  readonly homeScore?: number;
  readonly awayScore?: number;
  readonly status: GameStatus;
  readonly stage: string;
  readonly scheduledDate: Date;
  readonly winner?: Winner;
  readonly creationType: CreationType;
}
