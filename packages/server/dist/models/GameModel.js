"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
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
                return this.creationType !== "EXTERNAL" /* EXTERNAL */;
            },
        ]
    },
    winner: {
        type: String,
        enum: [null, "HOME_TEAM" /* HOME_TEAM */, "DRAW" /* DRAW */, "AWAY_TEAM" /* AWAY_TEAM */],
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
    competition: {
        type: String,
        enum: ["CL" /* UEFA_CHAMPIONS_LEAGUE */],
        default: "CL" /* UEFA_CHAMPIONS_LEAGUE */
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
        enum: ["SCHEDULED" /* SCHEDULED */, "FINISHED" /* FINISHED */],
        default: "SCHEDULED" /* SCHEDULED */
    },
    creationType: {
        type: String,
        enum: ["MANUAL" /* MANUAL */, "EXTERNAL" /* EXTERNAL */],
        default: "EXTERNAL" /* EXTERNAL */
    }
}, {
    collection: 'game',
    timestamps: true
});
exports.GameModel = mongoose.model('Game', gameSchema);
//# sourceMappingURL=GameModel.js.map