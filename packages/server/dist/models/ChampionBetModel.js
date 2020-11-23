"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
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
        enum: ["CL" /* UEFA_CHAMPIONS_LEAGUE */],
        default: "CL" /* UEFA_CHAMPIONS_LEAGUE */
    },
    status: {
        type: String,
        enum: ["SCHEDULED" /* SCHEDULED */, "FINISHED" /* FINISHED */],
        default: "SCHEDULED" /* SCHEDULED */
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
exports.ChampionBetModel = mongoose.model('ChampionBet', championBetSchema);
//# sourceMappingURL=ChampionBetModel.js.map