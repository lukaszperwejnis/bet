"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const gameBetSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true,
    },
    game: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Game',
        required: true,
    },
    bet: {
        required: true,
        type: String,
        enum: ["HOME_TEAM" /* HOME_TEAM */, "DRAW" /* DRAW */, "AWAY_TEAM" /* AWAY_TEAM */]
    },
    homeScore: {
        required: true,
        type: Number
    },
    awayScore: {
        required: true,
        type: Number,
    },
    status: {
        type: String,
        enum: ["SCHEDULED" /* SCHEDULED */, "FINISHED" /* FINISHED */],
        default: "SCHEDULED" /* SCHEDULED */
    },
    hasWinner: {
        type: Boolean,
        default: false
    },
    hasTeamsScores: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required: true
    },
}, {
    collection: 'gameBet',
    timestamps: true
});
exports.GameBetModel = mongoose.model('GameBet', gameBetSchema);
//# sourceMappingURL=GameBetModel.js.map