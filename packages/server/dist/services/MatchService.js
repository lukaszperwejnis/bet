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
const MatchRepository_1 = require("../Repository/MatchRepository");
const fetch = require('node-fetch');
class MatchService {
    constructor() {
        this.matchRepository = new MatchRepository_1.MatchRepository();
        this.teamRepository = new TeamRepository_1.TeamRepository();
    }
    addScheduledMatchesToDatabase() {
        return __awaiter(this, void 0, void 0, function* () {
            const matches = yield MatchService.getMatchesFromExternalAPI();
            const matchesToAdd = yield this.mapMatchesFromExternalAPI(matches);
            const createdMatches = yield this.createMatches(matchesToAdd);
            if (createdMatches.length) {
                console.log({
                    createdMatches
                });
            }
        });
    }
    static getMatchesFromExternalAPI() {
        return __awaiter(this, void 0, void 0, function* () {
            return fetch('https://api.football-data.org/v2/competitions/CL/matches?status=SCHEDULED', {
                method: 'get',
                headers: { 'x-auth-token': 'b6565257ac824b0aaf3e6d883c156e27' },
            })
                .then(res => res.json())
                .then(json => {
                const league = json.competition.name;
                return json.matches.map(match => {
                    return {
                        externalId: match.id,
                        scheduledDate: match.utcDate,
                        stage: match.stage,
                        status: match.status,
                        homeTeamExternalId: match.homeTeam.id,
                        awayTeamExternalId: match.awayTeam.id,
                        league,
                    };
                });
            });
        });
    }
    mapMatchesFromExternalAPI(matches) {
        return Promise.all(matches.map((_a) => __awaiter(this, void 0, void 0, function* () {
            var { homeTeamExternalId, awayTeamExternalId } = _a, values = __rest(_a, ["homeTeamExternalId", "awayTeamExternalId"]);
            const homeTeam = yield this.teamRepository.getOne({ externalId: homeTeamExternalId });
            const awayTeam = yield this.teamRepository.getOne({ externalId: awayTeamExternalId });
            return Object.assign(Object.assign({}, values), { creationType: "EXTERNAL" /* EXTERNAL */, homeTeam,
                awayTeam });
        })));
    }
    createMatches(matches) {
        return __awaiter(this, void 0, void 0, function* () {
            const addedMatches = [];
            console.log({ matches });
            //const matchesToAdd = matches.filter(game => new Date(game.scheduledDate).getTime() > new Date().getTime());
            for (let betToAdd of matches) {
                const match = yield this.matchRepository.getOne({ externalId: betToAdd.externalId });
                if (!match) {
                    const doc = yield this.matchRepository.createOne(Object.assign({}, betToAdd));
                    addedMatches.push(doc);
                }
            }
            return addedMatches;
        });
    }
}
exports.MatchService = MatchService;
//# sourceMappingURL=MatchService.js.map
