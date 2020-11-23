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
const MatchBetRepository_1 = require("../Repository/MatchBetRepository");
const MatchRepository_1 = require("../Repository/MatchRepository");
const fetch = require('node-fetch');
class MatchBetsValidationService {
    constructor() {
        this.matchRepository = new MatchRepository_1.MatchRepository();
        this.matchBetRepository = new MatchBetRepository_1.MatchBetRepository();
    }
    validateMatchBets() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('validate');
            const scheduledMatchesExternalIds = yield this.getScheduledMatchesIds();
            const finishedMatchesFromExternalAPI = yield this.getFinishedMatchesFromExternalAPI();
            const updatedMatches = [];
            const updatedMatchBets = [];
            for (let finishedMatch of finishedMatchesFromExternalAPI) {
                if (scheduledMatchesExternalIds.includes(finishedMatch.id)) {
                    const updatedMatch = yield this.matchRepository.findOneAndUpdate({ externalId: finishedMatch.id }, {
                        homeScore: finishedMatch.score.fullTime.homeTeam,
                        awayScore: finishedMatch.score.fullTime.awayTeam,
                        winner: finishedMatch.score.winner,
                        status: finishedMatch.status
                    });
                    updatedMatches.push(updatedMatch);
                }
            }
            for (let updatedMatch of updatedMatches) {
                const matchBet = yield this.matchBetRepository.findOne({ match: updatedMatch._id });
                const updatedMatchBet = yield this.matchBetRepository.findOneAndUpdate({ match: updatedMatch._id }, {
                    status: matchBet.bet === matchBet.match.winner ? "VALID" /* VALID */ : "INVALID" /* INVALID */
                });
                updatedMatchBets.push(updatedMatchBet);
            }
        });
    }
    getScheduledMatchesIds() {
        return this.matchRepository.findMany({
            status: "SCHEDULED" /* SCHEDULED */
        }).then(data => data.map(match => match.externalId));
    }
    getFinishedMatchesFromExternalAPI() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield fetch(`https://api.football-data.org/v2/competitions/CL/matches?status=FINISHED`, {
                method: 'get',
                headers: { 'x-auth-token': 'b6565257ac824b0aaf3e6d883c156e27' },
            })
                .then(res => res.json())
                .then(res => res.matches);
        });
    }
}
exports.MatchBetsValidationService = MatchBetsValidationService;
//# sourceMappingURL=MatchBetsValidationService.js.map