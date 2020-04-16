import * as mongoose from 'mongoose';
import {Competitions} from "../enums/competitions";
import {BetStatuses} from "../enums/betStatuses";

const championBetSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        auto: true,
    },
    bet: {
        required: true,
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Team',
    },
    competition: {
        type: String,
        enum: [Competitions.UEFA_CHAMPIONS_LEAGUE],
        default: Competitions.UEFA_CHAMPIONS_LEAGUE
    },
    status: {
        type: String,
        enum: [BetStatuses.SCHEDULED, BetStatuses.FINISHED],
        default: BetStatuses.SCHEDULED
    },
    hasChampionCorrect: {
        type: Boolean,
        default: false
    },
    createdBy: {
        required: true,
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
    },
}, {
    collection: 'championBet',
    timestamps: true
});

export const ChampionBetModel: mongoose.Model<any> = mongoose.model<any>('ChampionBet', championBetSchema);
