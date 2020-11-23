"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
function toObjectId(id) {
    if (!id) {
        return null;
    }
    return mongoose.Types.ObjectId(id);
}
exports.toObjectId = toObjectId;
//# sourceMappingURL=toObjectId.js.map