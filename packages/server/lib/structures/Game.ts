import {Team} from "./Team";
import {GameStatuses} from "../enums/gameStatuses";
import {WinnerTypes} from "../enums/winnerTypes";
import {CreationTypes} from "../enums/creationTypes";

export declare class Game {
    readonly _id?: string;
    readonly externalId?: number;
    readonly homeTeam: Team;
    readonly awayTeam: Team;
    readonly homeScore?: number;
    readonly awayScore?: number;
    readonly status: GameStatuses;
    readonly stage: string;
    readonly scheduledDate: Date;
    readonly winner?: WinnerTypes;
    readonly creationType: CreationTypes;
}
