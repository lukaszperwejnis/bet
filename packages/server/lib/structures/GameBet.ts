import { Game } from "./Game";
import { Bet } from "./Bet";
import { WinnerTypes } from "../enums/winnerTypes";

export declare class GameBet extends Bet {
  readonly game: Game;
  readonly bet: WinnerTypes;
  readonly homeScore: number;
  readonly awayScore: number;
  readonly hasWinner: boolean;
  readonly hasTeamsScores: boolean;
}
