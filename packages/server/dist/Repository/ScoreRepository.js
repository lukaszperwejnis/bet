"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Repository_1 = require("./Repository");
const ScoreModel_1 = require("../models/ScoreModel");
class ScoreRepository extends Repository_1.Repository {
    constructor() {
        super(ScoreModel_1.BetScoreModel);
    }
    getOneByUserId(userId) {
        return super.findOne({ user: userId });
    }
    createOne(input) {
        return super.create(input);
    }
}
exports.ScoreRepository = ScoreRepository;
//# sourceMappingURL=BetScoreRepository.js.map
