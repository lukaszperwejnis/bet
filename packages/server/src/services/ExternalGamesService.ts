import { Competition } from '@bet/structures';
import { ExternalGame } from '../interfaces/ExternalGame';
import config from '../config';

const fetch = require('node-fetch');

const filterByExistingTeams = ({ homeTeam, awayTeam }: ExternalGame): boolean =>
  Boolean(homeTeam.externalId && awayTeam.externalId);

function mapDataToExternalGames(data: any = []): ExternalGame[] {
  return data.matches.map((match: any) => ({
    externalId: match.id,
    scheduledDate: match.utcDate,
    stage: match.stage,
    status: match.status,
    homeTeam: {
      externalId: match.homeTeam.id,
      name: match.homeTeam.name,
    },
    awayTeam: {
      externalId: match.awayTeam.id,
      name: match.awayTeam.name,
    },
    competition: data.competition.code,
    score: match.score,
  }));
}

export class ExternalGamesService {
  private readonly competition: Competition;

  constructor(competition?: Competition) {
    this.competition = competition || Competition.UefaChampionsLeague;
  }

  private getGames(filters?: string) {
    return fetch(
      `https://api.football-data.org/v2/competitions/${this.competition}/matches?${filters}`,
      {
        method: 'get',
        headers: { 'x-auth-token': config.externalAPIAuthToken },
      },
    )
      .then((res: any) => res.json())
      .then((json: any) => mapDataToExternalGames(json));
  }

  async getGamesByStages(stage: string): Promise<ExternalGame[]> {
    const filterQuery = `stage=${stage}`;
    const games = await this.getGames(filterQuery);
    return games.filter(filterByExistingTeams);
  }

  async getScheduledGames(): Promise<ExternalGame[]> {
    const filterQuery = `status=SCHEDULED`;
    const games = await this.getGames(filterQuery);
    return games.filter(filterByExistingTeams);
  }
}
