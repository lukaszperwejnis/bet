import { Bet } from './Bet';
import { Team } from '../Team';

export interface ChampionBet extends Bet {
  readonly bet: Team;
  readonly hasChampionCorrect: boolean;
}

export type ChampionBetInput = { teamId: string };
