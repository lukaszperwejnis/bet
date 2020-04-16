import * as mongoose from 'mongoose';
import {GameStatuses} from "../enums/gameStatuses";
import {CreationTypes} from "../enums/creationTypes";
import {WinnerTypes} from "../enums/winnerTypes";
import {Competitions} from "../enums/competitions";

const gameSchema = new mongoose.Schema({
    _id: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
    },
    externalId: {
        type: Number,
        required: [
            function () {
                return this.creationType !== CreationTypes.EXTERNAL;
            },
        ]
    },
    winner: {
        type: String,
        enum: [null, WinnerTypes.HOME_TEAM, WinnerTypes.DRAW, WinnerTypes.AWAY_TEAM],
        required: [
            function () {
                return this.status === GameStatuses.FINISHED;
            },
        ]
    },
    stage: {
        type: String,
        required: true
    },
    competition: {
        type: String,
        enum: [Competitions.UEFA_CHAMPIONS_LEAGUE],
        default: Competitions.UEFA_CHAMPIONS_LEAGUE
    },
    homeTeam: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team'
    },
    awayTeam: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team'
    },
    homeScore: {
        type: Number
    },
    awayScore: {
        type: Number,
    },
    status: {
        type: String,
        enum: [GameStatuses.SCHEDULED, GameStatuses.FINISHED],
        default: GameStatuses.SCHEDULED
    },
    creationType: {
        type: String,
        enum: [CreationTypes.MANUAL, CreationTypes.EXTERNAL],
        default: CreationTypes.EXTERNAL
    }
}, {
    collection: 'game',
    timestamps: true
});

export const GameModel: mongoose.Model<any> = mongoose.model<any>('Game', gameSchema);
