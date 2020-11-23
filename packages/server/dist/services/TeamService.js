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
const TeamRepository_1 = require("../Repository/TeamRepository");
const GameRepository_1 = require("../Repository/GameRepository");
const ExternalGamesService_1 = require("./ExternalGamesService");
const errors_1 = require("../errors");
const isValidObjectId_1 = require("../helpers/isValidObjectId");
const Joi = require("@hapi/joi");
const validationSchemaKeys_1 = require("../constants/validationSchemaKeys");
const mapSchemaValidationErrors_1 = require("../helpers/mapSchemaValidationErrors");
class TeamService {
    constructor(competition) {
        this.teamRepository = new TeamRepository_1.TeamRepository();
        this.gameRepository = new GameRepository_1.GameRepository();
        this.externalGameService = new ExternalGamesService_1.ExternalGamesService();
        this.competition = competition ? competition : "CL" /* UEFA_CHAMPIONS_LEAGUE */;
    }
    getOneById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!isValidObjectId_1.isValidObjectId(id)) {
                throw new errors_1.InvalidIdError(id);
            }
            const doc = yield this.teamRepository.findById(id);
            if (!doc) {
                throw new errors_1.TeamNotFoundError(id);
            }
            return doc;
        });
    }
    createOne(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const schema = Joi.object({
                name: validationSchemaKeys_1.VALIDATION_SCHEMA_KEYS.TEAM.NAME
            });
            const { error } = schema.validate(input);
            if (error) {
                throw new errors_1.FieldValidationError(mapSchemaValidationErrors_1.mapSchemaValidationErrors(error.details));
            }
            const existingTeam = yield this.teamRepository.findOne({ name: input.name });
            if (existingTeam) {
                throw new errors_1.TeamNameDuplicatedError(input.name);
            }
            return yield this.teamRepository.createOne(Object.assign({}, input));
        });
    }
    addTeamsToDatabase() {
        return __awaiter(this, void 0, void 0, function* () {
            const teams = yield this.getTeamsFromExternalAPI();
            const createdTeams = yield this.insertTeamsToDatabase(teams);
            // if (createdTeams.length) {
            //     console.log({createdTeams});
            // }
        });
    }
    getTeamsFromExternalAPI() {
        return this.externalGameService.getScheduledGames()
            .then(data => {
            return data.reduce((accu, { homeTeam, awayTeam }) => {
                accu.push({
                    name: homeTeam.name,
                    externalId: homeTeam.externalId,
                    creationType: "EXTERNAL" /* EXTERNAL */
                }, {
                    name: awayTeam.name,
                    externalId: awayTeam.externalId,
                    creationType: "EXTERNAL" /* EXTERNAL */
                });
                return accu;
            }, []);
        });
    }
    insertTeamsToDatabase(teams) {
        return __awaiter(this, void 0, void 0, function* () {
            const addedTeams = [];
            for (let el of teams) {
                const team = yield this.teamRepository.getOne({ externalId: el.externalId });
                if (!team) {
                    const doc = yield this.teamRepository.createOne(Object.assign({}, el));
                    addedTeams.push(doc);
                }
            }
            return addedTeams;
        });
    }
    getCompetitionWinner() {
        return __awaiter(this, void 0, void 0, function* () {
            const finalGame = yield this.gameRepository.getOne({
                competition: this.competition,
                stage: 'FINAL',
                status: "FINISHED" /* FINISHED */
            });
            if (!finalGame) {
                return null;
            }
            const winnerTeamId = finalGame.winner === "HOME_TEAM" /* HOME_TEAM */ ? finalGame.homeTeam : finalGame.awayTeam;
            return yield this.teamRepository.getOne({
                _id: winnerTeamId
            });
        });
    }
}
exports.TeamService = TeamService;
//# sourceMappingURL=TeamService.js.map