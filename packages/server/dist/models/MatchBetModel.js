"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const matchBetSchema = new mongoose.Schema({
    _id: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
    },
    match: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'match',
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
    result: {
        type: String,
        enum: ["VALID" /* VALID */, "INVALID" /* INVALID */]
    },
    status: {
        type: String,
        enum: ["SCHEDULED" /* SCHEDULED */, "INVALID" /* INVALID */]
    },
    betScore: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'BetScore',
    },
    createdBy: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required: true
    },
}, {
    collection: 'matchBet',
    timestamps: true
});
exports.MatchBetModel = mongoose.model('MatchBet', matchBetSchema);
//# sourceMappingURL=MatchBetModel.js.map