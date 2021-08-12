import { Team } from '@bet/structures';
import { Bet } from './Bet';

export declare class ChampionBet extends Bet {
  readonly bet: Team.Team;
  readonly hasChampionCorrect: boolean;
}
