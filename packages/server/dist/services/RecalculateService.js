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
const UserRepository_1 = require("../Repository/UserRepository");
const GameBetRepository_1 = require("../Repository/GameBetRepository");
const ChampionBetRepository_1 = require("../Repository/ChampionBetRepository");
const TeamService_1 = require("./TeamService");
class RecalculateService {
    constructor() {
        this.userRepository = new UserRepository_1.UserRepository();
        this.gameBetRepository = new GameBetRepository_1.GameBetRepository();
        this.championBetRepository = new ChampionBetRepository_1.ChampionBetRepository();
        this.teamService = new TeamService_1.TeamService();
    }
    recalculateUsersScores(usersIds) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedUsers = [];
            for (let userId of usersIds) {
                let score = 0;
                const betsQuery = {
                    status: "FINISHED" /* FINISHED */,
                    createdBy: userId
                };
                const gameBets = yield this.gameBetRepository.getMany(betsQuery);
                const competitionWinner = yield this.teamService.getCompetitionWinner();
                score = this.countScoreFromGameBets(gameBets);
                if (competitionWinner) {
                    const championBet = yield this.championBetRepository.getOne(betsQuery);
                    score = championBet && championBet.hasChampionCorrect ? score + 50 /* HAS_CHAMPION_SCORE */ : score;
                }
                const user = yield this.userRepository.findOneAndUpdate({ _id: userId }, { score });
                user && updatedUsers.push(user);
            }
            return updatedUsers;
        });
    }
    countScoreFromGameBets(gameBets) {
        let score = 0;
        for (let { hasWinner, hasTeamsScores } of gameBets) {
            if (hasWinner) {
                score += 20 /* HAS_WINNER */;
            }
            if (hasTeamsScores) {
                score += 10 /* HAS_TEAMS_SCORES */;
            }
        }
        return score;
    }
}
exports.RecalculateService = RecalculateService;
//# sourceMappingURL=RecalculateService.js.map