import { Team } from './Team';
import { Bet } from './Bet';

export declare class ChampionBet extends Bet {
  readonly bet: Team;
  readonly hasChampionCorrect: boolean;
}
