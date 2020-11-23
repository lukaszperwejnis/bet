"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Repository_1 = require("./Repository");
const TeamModel_1 = require("../models/TeamModel");
class TeamRepository extends Repository_1.Repository {
    constructor() {
        super(TeamModel_1.TeamModel);
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
exports.TeamRepository = TeamRepository;
//# sourceMappingURL=TeamRepository.js.map