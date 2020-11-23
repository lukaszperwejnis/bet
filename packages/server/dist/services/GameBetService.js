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
const GameBetRepository_1 = require("../Repository/GameBetRepository");
const GameRepository_1 = require("../Repository/GameRepository");
const Joi = require("@hapi/joi");
const validationSchemaKeys_1 = require("../constants/validationSchemaKeys");
const errors_1 = require("../errors");
const mapSchemaValidationErrors_1 = require("../helpers/mapSchemaValidationErrors");
const gameWinnerTypeByScores_1 = require("../helpers/gameWinnerTypeByScores");
const isValidObjectId_1 = require("../helpers/isValidObjectId");
class GameBetService {
    constructor() {
        this.gameRepository = new GameRepository_1.GameRepository();
        this.gameBetRepository = new GameBetRepository_1.GameBetRepository();
    }
    createOne(userId, input) {
        return __awaiter(this, void 0, void 0, function* () {
            const schema = Joi.object({
                gameId: validationSchemaKeys_1.VALIDATION_SCHEMA_KEYS.ID,
                homeScore: validationSchemaKeys_1.VALIDATION_SCHEMA_KEYS.TEAM.SCORE,
                awayScore: validationSchemaKeys_1.VALIDATION_SCHEMA_KEYS.TEAM.SCORE,
            });
            const { error } = schema.validate(input);
            if (error) {
                throw new errors_1.FieldValidationError(mapSchemaValidationErrors_1.mapSchemaValidationErrors(error.details));
            }
            const { gameId, homeScore, awayScore } = input;
            const game = yield this.gameRepository.findById(gameId);
            const gameBet = yield this.gameBetRepository.findOne({ game: gameId, createdBy: userId });
            if (!game) {
                throw new errors_1.GameNotFoundError(gameId);
            }
            if (new Date().getTime() > new Date(game.scheduledDate).getTime()) {
                throw new errors_1.BetLateError(gameId);
            }
            if (gameBet) {
                throw new errors_1.BetAlredyExistError(gameId);
            }
            return yield this.gameBetRepository.createOne(Object.assign(Object.assign({}, input), { bet: gameWinnerTypeByScores_1.gameWinnerTypeByScores(homeScore, awayScore), createdBy: userId, game,
                homeScore,
                awayScore }));
        });
    }
    getOneById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!isValidObjectId_1.isValidObjectId(id)) {
                throw new errors_1.InvalidIdError(id);
            }
            const doc = yield this.gameBetRepository.findById(id);
            if (!doc) {
                throw new errors_1.GameNotFoundError(id);
            }
            return doc;
        });
    }
    getManyByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.gameBetRepository.find({ createdBy: userId });
        });
    }
    updateBetsByGames(games) {
        return __awaiter(this, void 0, void 0, function* () {
            const pipeline = [
                {
                    $lookup: {
                        from: 'game',
                        localField: 'game',
                        foreignField: '_id',
                        as: 'gameRecord'
                    }
                },
                { $unwind: "$gameRecord" },
                {
                    $match: {
                        "gameRecord.externalId": { $in: games.map(game => game.externalId) }
                    }
                }
            ];
            const betsToUpdate = yield this.gameBetRepository.aggregate(pipeline);
            if (!betsToUpdate.length) {
                return betsToUpdate;
            }
            const updatedBets = [];
            for (let bet of betsToUpdate) {
                const updatedGameBet = yield this.gameBetRepository.getOneAndUpdate({ _id: bet._id }, {
                    hasWinner: bet.bet === bet.gameRecord.winner,
                    hasTeamsScores: bet.gameRecord.homeScore === bet.homeScore && bet.gameRecord.awayScore === bet.awayScore,
                    status: "FINISHED" /* FINISHED */
                });
                updatedBets.push(updatedGameBet);
            }
            return updatedBets;
        });
    }
}
exports.GameBetService = GameBetService;
//# sourceMappingURL=GameBetService.js.map