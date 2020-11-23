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
const GameRepository_1 = require("../Repository/GameRepository");
const RecalculateService_1 = require("./RecalculateService");
const GameBetService_1 = require("./GameBetService");
const ChampionBetService_1 = require("./ChampionBetService");
const GameService_1 = require("./GameService");
class BetsValidationService {
    constructor() {
        this.gameRepository = new GameRepository_1.GameRepository();
        this.gameBetService = new GameBetService_1.GameBetService();
        this.gamesService = new GameService_1.GameService();
        this.championBetService = new ChampionBetService_1.ChampionBetService();
        this.recalculateService = new RecalculateService_1.RecalculateService();
    }
    validateMatchBets() {
        return __awaiter(this, void 0, void 0, function* () {
            const gameStagesToValidate = yield this.getGameStagesToValidate();
            let updatedBets = [];
            if (!gameStagesToValidate.length) {
                return;
            }
            const updatedGames = yield this.gamesService.getUpdatedGamesByStages(gameStagesToValidate);
            if (!updatedGames.length) {
                return;
            }
            const updatedGameBets = yield this.gameBetService.updateBetsByGames(updatedGames);
            updatedBets = [...updatedGameBets];
            if (gameStagesToValidate.includes("FINAL" /* FINAL */)) {
                const updatedChampionBets = yield this.championBetService.updateBets();
                updatedBets = [...updatedBets, ...updatedChampionBets];
            }
            if (!updatedBets.length) {
                return;
            }
            const updatedUsers = yield this.recalculateService.recalculateUsersScores(updatedBets.map(({ createdBy }) => createdBy._id));
        });
    }
    getGameStagesToValidate() {
        return __awaiter(this, void 0, void 0, function* () {
            const stages = yield this.gameRepository.getMany({
                status: "SCHEDULED" /* SCHEDULED */
            }).then(data => data.map(game => game.stage));
            return Array.from(new Set(stages));
        });
    }
}
exports.BetsValidationService = BetsValidationService;
//# sourceMappingURL=BetsValidationService.js.map