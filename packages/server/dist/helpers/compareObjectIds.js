"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toObjectId_1 = require("./toObjectId");
function compareObjectsIds(firstId, secondId) {
    return toObjectId_1.toObjectId(firstId).equal(toObjectId_1.toObjectId(secondId));
}
exports.compareObjectsIds = compareObjectsIds;
//# sourceMappingURL=compareObjectIds.js.map