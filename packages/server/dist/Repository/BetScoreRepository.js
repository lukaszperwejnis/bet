"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Repository_1 = require("./Repository");
const BetScoreModel_1 = require("../models/BetScoreModel");
class BetScoreRepository extends Repository_1.Repository {
    constructor() {
        super(BetScoreModel_1.BetScoreModel);
    }
    getOneByUserId(userId) {
        return super.findOne({ user: userId });
    }
    createOne(input) {
        return super.create(input);
    }
}
exports.BetScoreRepository = BetScoreRepository;
//# sourceMappingURL=BetScoreRepository.js.map