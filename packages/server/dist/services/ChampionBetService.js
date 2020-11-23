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
const TeamService_1 = require("./TeamService");
const ChampionBetRepository_1 = require("../Repository/ChampionBetRepository");
const TeamRepository_1 = require("../Repository/TeamRepository");
const compareObjectIds_1 = require("../helpers/compareObjectIds");
const GameRepository_1 = require("../Repository/GameRepository");
const errors_1 = require("../errors");
const isValidObjectId_1 = require("../helpers/isValidObjectId");
const Joi = require("@hapi/joi");
const validationSchemaKeys_1 = require("../constants/validationSchemaKeys");
const mapSchemaValidationErrors_1 = require("../helpers/mapSchemaValidationErrors");
class ChampionBetService {
    constructor() {
        this.teamService = new TeamService_1.TeamService();
        this.teamRepository = new TeamRepository_1.TeamRepository();
        this.championBetRepository = new ChampionBetRepository_1.ChampionBetRepository();
        this.gameRepository = new GameRepository_1.GameRepository();
    }
    createOne(userId, input) {
        return __awaiter(this, void 0, void 0, function* () {
            const schema = Joi.object({
                teamId: validationSchemaKeys_1.VALIDATION_SCHEMA_KEYS.ID,
            });
            const { error } = schema.validate(input);
            if (error) {
                throw new errors_1.FieldValidationError(mapSchemaValidationErrors_1.mapSchemaValidationErrors(error.details));
            }
            const bet = yield this.championBetRepository.getOne({ createdBy: userId });
            if (bet) {
                throw new errors_1.BetAlredyExistError(input.teamId);
            }
            const team = yield this.teamRepository.findById(input.teamId);
            if (!team) {
                throw new errors_1.TeamNotFoundError(input.teamId);
            }
            return yield this.championBetRepository.createOne({ bet: team, createdBy: userId });
        });
    }
    getOneById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!isValidObjectId_1.isValidObjectId(id)) {
                throw new errors_1.InvalidIdError(id);
            }
            const doc = yield this.championBetRepository.findById(id);
            if (!doc) {
                throw new errors_1.GameNotFoundError(id);
            }
            return doc;
        });
    }
    updateBets() {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedBets = [];
            const competitionWinner = yield this.teamService.getCompetitionWinner();
            const championBets = yield this.championBetRepository.getMany({
                status: "SCHEDULED" /* SCHEDULED */
            });
            for (let championBet of championBets) {
                const betTeam = yield this.teamRepository.findById(championBet.bet);
                const bet = yield this.championBetRepository.findOneAndUpdate({ _id: championBet._id }, {
                    hasChampionCorrect: compareObjectIds_1.compareObjectsIds(betTeam._id, competitionWinner._id),
                    status: "FINISHED" /* FINISHED */
                });
                bet && updatedBets.push(bet);
            }
            return updatedBets;
        });
    }
    getAvailableByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const championBet = yield this.championBetRepository.getOne({ createdBy: userId });
            if (championBet) {
                return [];
            }
            const scheduledGames = yield this.gameRepository.getMany({ status: "SCHEDULED" /* SCHEDULED */ });
            const teamIds = scheduledGames.reduce((acc, { homeTeam, awayTeam }) => {
                acc.push(homeTeam, awayTeam);
                return acc;
            }, []);
            return yield this.teamRepository.getMany({ _id: { $in: teamIds } });
        });
    }
}
exports.ChampionBetService = ChampionBetService;
//# sourceMappingURL=ChampionBetService.js.map