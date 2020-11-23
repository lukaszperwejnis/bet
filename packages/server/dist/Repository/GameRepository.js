"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Repository_1 = require("./Repository");
const GameModel_1 = require("../models/GameModel");
class GameRepository extends Repository_1.Repository {
    constructor() {
        super(GameModel_1.GameModel);
    }
    findById(id) {
        return super.findById(id);
    }
    getMany(query) {
        return super.find(query);
    }
    createOne(input) {
        return super.create(input);
    }
    getOne(input) {
        return super.findOne(input);
    }
    updateOne(query, data) {
        const _super = Object.create(null, {
            updateOne: { get: () => super.updateOne }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.updateOne.call(this, query, data);
        });
    }
    getOneAndUpdate(query, data) {
        return super.findOneAndUpdate(query, data);
    }
}
exports.GameRepository = GameRepository;
//# sourceMappingURL=GameRepository.js.map