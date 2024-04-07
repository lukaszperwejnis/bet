import { Competition, GameStatus, Winner } from '@bet/structures';

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
  crest: string;
}

interface Score {
  winner: Winner;
  fullTime: GameResult;
}

interface GameResult {
  home: number;
  away: number;
}
