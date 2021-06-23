import { Game } from "./Game";
import { Bet } from "./Bet";
import { WinnerType } from "../enums/winnerType";

export declare class GameBet extends Bet {
  readonly game: Game;
  readonly bet: WinnerType;
  readonly homeScore: number;
  readonly awayScore: number;
  readonly hasWinner: boolean;
  readonly hasTeamsScores: boolean;
}
