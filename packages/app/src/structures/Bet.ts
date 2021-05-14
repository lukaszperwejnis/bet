import { Team } from './Team';
import { Competition } from '../types/competition.type';
import { CreationType } from '../types/creation-type.type';
import { Stage } from '../types/stage.type';
import { GameStatus } from '../types/game-status.type';

export interface Bet {
  readonly awayScore: number;
  readonly awayTeam: Team;
  readonly competition: Competition;
  readonly createdAt: string;
  readonly creationType: CreationType;
  readonly externalId: number;
  readonly homeScore: number;
  readonly homeTeam: Team;
  readonly scheduledDate: string;
  readonly stage: Stage;
  readonly status: GameStatus;
  readonly updatedAt: string;
  readonly winner: Team;
}
