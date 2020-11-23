"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const teamSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
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
    name: {
        type: String,
        trim: true,
        required: true,
        minlength: 2,
        maxlength: 30,
    },
    creationType: {
        type: String,
        enum: ["MANUAL" /* MANUAL */, "EXTERNAL" /* EXTERNAL */],
        default: "EXTERNAL" /* EXTERNAL */
    }
}, {
    collection: 'team',
    timestamps: true
});
teamSchema.index({ name: 1, externalId: 1 }, { unique: true, sparse: true });
exports.TeamModel = mongoose.model('Team', teamSchema);
//# sourceMappingURL=TeamModel.js.map