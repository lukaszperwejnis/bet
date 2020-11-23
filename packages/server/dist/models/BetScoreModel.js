"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const betScoreSchema = new mongoose.Schema({
    _id: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
    },
    bet: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'matchBet',
        required: true
    },
    isWinnerCorrect: {
        type: Boolean,
    },
    isTeamScoresCorrect: {
        type: Boolean
    },
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user',
        required: true
    },
}, {
    collection: 'betScore',
    timestamps: true
});
exports.BetScoreModel = mongoose.model('BetScore', betScoreSchema);
//# sourceMappingURL=BetScoreModel.js.map