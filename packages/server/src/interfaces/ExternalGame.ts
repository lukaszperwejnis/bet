import {Competition, GameStatus} from "@bet/structures";
import {WinnerType} from "../enums";


export interface ExternalGame {
  externalId: number;
  homeTeam: Team;
  awayTeam: Team;
  status: GameStatus;
  stage: string;
  competition: Competition;
  scheduledDate: Date;
  score: Score;
}

interface Team {
  externalId: number;
  name: string;
}

interface Score {
  winner: WinnerType;
  fullTime: GameResult;
}

interface GameResult {
  homeTeam: number;
  awayTeam: number;
}
