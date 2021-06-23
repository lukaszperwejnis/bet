import {GameStatus} from "@bet/structures";
import { Team } from "./Team";
import { WinnerType, CreationType} from "../enums";

export declare class Game {
  readonly _id?: string;
  readonly externalId?: number;
  readonly homeTeam: Team;
  readonly awayTeam: Team;
  readonly homeScore?: number;
  readonly awayScore?: number;
  readonly status: GameStatus;
  readonly stage: string;
  readonly scheduledDate: Date;
  readonly winner?: WinnerType;
  readonly creationType: CreationType;
}
