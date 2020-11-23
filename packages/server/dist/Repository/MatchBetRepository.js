"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Repository_1 = require("./Repository");
const MatchBetModel_1 = require("../models/MatchBetModel");
class MatchBetRepository extends Repository_1.Repository {
    constructor() {
        super(MatchBetModel_1.MatchBetModel);
    }
    findById(id) {
        return super.findById(id);
    }
    findOne(query) {
        return super.findOne(query);
    }
    createOne(input) {
        return super.create(input);
    }
    getOneAndUpdate(query, data) {
        return super.findOneAndUpdate(query, data);
    }
}
exports.MatchBetRepository = MatchBetRepository;
//# sourceMappingURL=MatchBetRepository.js.map