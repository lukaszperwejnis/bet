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
const GameService_1 = require("./GameService");
const ChampionBetService_1 = require("./ChampionBetService");
class BetService {
    constructor() {
        this.gameService = new GameService_1.GameService();
        this.championBetService = new ChampionBetService_1.ChampionBetService();
    }
    getAvailableBetsByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const availableGames = yield this.gameService.getAvailableByUserId(userId);
            const availableChampions = yield this.championBetService.getAvailableByUserId(userId);
            return {
                availableGames,
                availableChampions
            };
        });
    }
}
exports.BetService = BetService;
//# sourceMappingURL=BetService.js.map