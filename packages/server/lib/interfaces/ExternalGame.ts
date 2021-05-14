import { GameStatuses } from "../enums/gameStatuses";
import { Competitions } from "../enums/competitions";
import { WinnerTypes } from "../enums/winnerTypes";

export interface ExternalGame {
  externalId: number;
  homeTeam: Team;
  awayTeam: Team;
  status: GameStatuses;
  stage: string;
  competition: Competitions;
  scheduledDate: Date;
  score: Score;
}

interface Team {
  externalId: number;
  name: string;
}

interface Score {
  winner: WinnerTypes;
  fullTime: GameResult;
}

interface GameResult {
  homeTeam: number;
  awayTeam: number;
}
