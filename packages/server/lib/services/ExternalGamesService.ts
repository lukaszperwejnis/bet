import {ExternalGame} from "../interfaces/ExternalGame";
import {Competitions} from "../enums/competitions";
import config from "../config";

const fetch = require('node-fetch');

export class ExternalGamesService {
    private readonly competition: Competitions;

    constructor(competition?: Competitions) {
        this.competition = competition ? competition : Competitions.UEFA_CHAMPIONS_LEAGUE;
    }

    private getGames(filters?: string) {
        return fetch(`https://api.football-data.org/v2/competitions/${this.competition}/matches?${filters}`, {
            method: 'get',
            headers: {'x-auth-token': config.externalAPIAuthToken},
        })
            .then(res => res.json())
            .then(json => mapDataToExternalGames(json));
    }

    public async getGamesByStages(stage: string): Promise<ExternalGame[]> {
        //todo
        const filterQuery = `stage=${stage}`;
        //const filterQuery = `season=2018&stage=${stage}`;
        return this.getGames(filterQuery);
    }

    public async getScheduledGames(): Promise<ExternalGame[]> {
        //todo
        const filterQuery = `status=SCHEDULED`;
        // const filterQuery = `season=2018`;
        return this.getGames(filterQuery);
    }
}

function mapDataToExternalGames(data: any = []): ExternalGame[] {
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
        }
    });
}
