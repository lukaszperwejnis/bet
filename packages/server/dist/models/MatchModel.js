"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const matchSchema = new mongoose.Schema({
    _id: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
    },
    externalId: {
        type: Number,
        required: [
            function () {
                return this.creationType !== "EXTERNAL" /* EXTERNAL */;
            },
        ]
    },
    winner: {
        type: String,
        enum: ["HOME_TEAM" /* HOME_TEAM */, "DRAW" /* DRAW */, "AWAY_TEAM" /* AWAY_TEAM */],
        required: [
            function () {
                return this.status === "FINISHED" /* FINISHED */;
            },
        ]
    },
    stage: {
        type: String,
        required: true
    },
    homeTeam: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'team'
    },
    awayTeam: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'team'
    },
    homeScore: {
        type: Number
    },
    awayScore: {
        type: Number,
    },
    status: {
        type: String,
        enum: ["SCHEDULED" /* SCHEDULED */, "FINISHED" /* FINISHED */],
        default: "SCHEDULED" /* SCHEDULED */
    },
    creationType: {
        type: String,
        enum: ["MANUAL" /* MANUAL */, "EXTERNAL" /* EXTERNAL */],
        default: "EXTERNAL" /* EXTERNAL */
    }
}, {
    collection: 'match',
    timestamps: true
});
exports.MatchModel = mongoose.model('Match', matchSchema);
//# sourceMappingURL=MatchModel.js.map