"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Repository_1 = require("./Repository");
const ChampionBetModel_1 = require("../models/ChampionBetModel");
class ChampionBetRepository extends Repository_1.Repository {
    constructor() {
        super(ChampionBetModel_1.ChampionBetModel);
    }
    findById(id) {
        return super.findById(id);
    }
    getOne(query) {
        return super.findOne(query);
    }
    getMany(query) {
        return super.find(query);
    }
    createOne(input) {
        return super.create(input);
    }
}
exports.ChampionBetRepository = ChampionBetRepository;
//# sourceMappingURL=ChampionBetRepository.js.map