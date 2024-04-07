import { Game } from './Game';
import { Bet } from './Bet';
import { Winner } from './Winner';

export interface GameBet extends Bet {
  readonly game: Game;
  readonly bet: Winner;
  readonly homeScore: number;
  readonly awayScore: number;
  readonly hasWinner: boolean;
  readonly hasTeamsScores: boolean;
}

export type GameBetInput = {
  gameId: string;
  homeScore: number;
  awayScore: number;
};
