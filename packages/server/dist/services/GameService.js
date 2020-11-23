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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const TeamRepository_1 = require("../Repository/TeamRepository");
const GameRepository_1 = require("../Repository/GameRepository");
const ExternalGamesService_1 = require("./ExternalGamesService");
const GameBetRepository_1 = require("../Repository/GameBetRepository");
class GameService {
    constructor() {
        this.gameRepository = new GameRepository_1.GameRepository();
        this.teamRepository = new TeamRepository_1.TeamRepository();
        this.externalGamesService = new ExternalGamesService_1.ExternalGamesService();
        this.gameBetRepository = new GameBetRepository_1.GameBetRepository();
    }
    addScheduledMatchesToDatabase() {
        return __awaiter(this, void 0, void 0, function* () {
            const scheduledGames = yield this.externalGamesService.getScheduledGames();
            const gamesToAdd = yield this.mapToGames(scheduledGames);
            const createdMatches = yield this.createGames(gamesToAdd);
            if (createdMatches.length) {
                // console.log({
                //     createdMatches
                // });
            }
        });
    }
    mapToGames(matches) {
        return Promise.all(matches.map((_a) => __awaiter(this, void 0, void 0, function* () {
            var { homeTeam, awayTeam, score } = _a, values = __rest(_a, ["homeTeam", "awayTeam", "score"]);
            const homeTeamDoc = yield this.teamRepository.getOne({ externalId: homeTeam.externalId });
            const awayTeamDoc = yield this.teamRepository.getOne({ externalId: awayTeam.externalId });
            return Object.assign(Object.assign({}, values), { creationType: "EXTERNAL" /* EXTERNAL */, homeTeam: homeTeamDoc, awayTeam: awayTeamDoc, winner: score.winner, homeScore: score.fullTime.homeTeam, awayScore: score.fullTime.awayTeam });
        })));
    }
    createGames(matches) {
        return __awaiter(this, void 0, void 0, function* () {
            const addedMatches = [];
            for (let betToAdd of matches) {
                const game = yield this.gameRepository.getOne({ externalId: betToAdd.externalId });
                if (!game) {
                    const doc = yield this.gameRepository.createOne(Object.assign({}, betToAdd));
                    addedMatches.push(doc);
                }
            }
            return addedMatches;
        });
    }
    getUpdatedGamesByStages(stages) {
        return __awaiter(this, void 0, void 0, function* () {
            const finishedGames = yield this.externalGamesService.getGamesByStages(stages.join(','))
                .then(data => data.filter(game => game.status === "FINISHED" /* FINISHED */));
            if (!finishedGames.length) {
                return [];
            }
            const updatedGames = [];
            for (let finishedGame of finishedGames) {
                const updatedGame = yield this.gameRepository.findOneAndUpdate({
                    externalId: finishedGame.externalId,
                    status: "SCHEDULED" /* SCHEDULED */
                }, {
                    homeScore: finishedGame.score.fullTime.homeTeam,
                    awayScore: finishedGame.score.fullTime.awayTeam,
                    winner: finishedGame.score.winner,
                    status: finishedGame.status
                });
                updatedGame && updatedGames.push(updatedGame);
            }
            return updatedGames;
        });
    }
    getAvailableByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const userGameBets = yield this.gameBetRepository.getMany({
                status: "SCHEDULED" /* SCHEDULED */,
                createdBy: userId,
            });
            return yield this.gameRepository.getMany({
                _id: {
                    $nin: userGameBets.map(el => el.game._id)
                },
                status: "SCHEDULED" /* SCHEDULED */
            });
        });
    }
}
exports.GameService = GameService;
//# sourceMappingURL=GameService.js.map