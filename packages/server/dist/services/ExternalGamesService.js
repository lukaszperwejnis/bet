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
const config_1 = require("../config");
const fetch = require('node-fetch');
class ExternalGamesService {
    constructor(competition) {
        this.competition = competition ? competition : "CL" /* UEFA_CHAMPIONS_LEAGUE */;
    }
    getGames(filters) {
        return fetch(`https://api.football-data.org/v2/competitions/${this.competition}/matches?${filters}`, {
            method: 'get',
            headers: { 'x-auth-token': config_1.default.externalAPIAuthToken },
        })
            .then(res => res.json())
            .then(json => mapDataToExternalGames(json));
    }
    getGamesByStages(stage) {
        return __awaiter(this, void 0, void 0, function* () {
            //todo
            const filterQuery = `stage=${stage}`;
            //const filterQuery = `season=2018&stage=${stage}`;
            return this.getGames(filterQuery);
        });
    }
    getScheduledGames() {
        return __awaiter(this, void 0, void 0, function* () {
            //todo
            const filterQuery = `status=SCHEDULED`;
            // const filterQuery = `season=2018`;
            return this.getGames(filterQuery);
        });
    }
}
exports.ExternalGamesService = ExternalGamesService;
function mapDataToExternalGames(data = []) {
    return data.matches.map(match => {
        return {
            externalId: match.id,
            scheduledDate: match.utcDate,
            stage: match.stage,
            status: match.status,
            homeTeam: {
                externalId: match.homeTeam.id,
                name: match.homeTeam.name
            },
            awayTeam: {
                externalId: match.awayTeam.id,
                name: match.awayTeam.name
            },
            competition: data.competition.code,
            score: match.score
        };
    });
}
//# sourceMappingURL=ExternalGamesService.js.map