import { BetStatus, Competition, GameStatus } from '@bet/structures';
import { ExternalGame } from '../interfaces/ExternalGame';
import config from '../config';
import { MockedGames } from '../mocks/mockedGames';

const fetch = require('node-fetch');

function getCurrentDatePlusFiveMinutes(): Date {
  const date = new Date();
  date.setMinutes(date.getMinutes() + 5);
  return date;
}

const filterByExistingTeams = ({ homeTeam, awayTeam }: ExternalGame): boolean =>
  Boolean(homeTeam.externalId && awayTeam.externalId);

function mapDataToExternalGames(data: any = []): ExternalGame[] {
  // return MockedGames.matches.map((match: any) => ({
  //   externalId: match.id,
  //   scheduledDate: getCurrentDatePlusFiveMinutes(),
  //   stage: match.stage,
  //   status: match.status,
  //   homeTeam: {
  //     externalId: match.homeTeam.id,
  //     name: match.homeTeam.name,
  //     crest: match.homeTeam.crest,
  //   },
  //   awayTeam: {
  //     externalId: match.awayTeam.id,
  //     name: match.awayTeam.name,
  //     crest: match.awayTeam.crest,
  //   },
  //   competition: data.competition.code,
  //   score: match.score,
  // }));

  return data.matches.map((match: any) => ({
    externalId: match.id,
    scheduledDate: match.utcDate,
    stage: match.stage,
    status:
      match.status === GameStatus.Timed ? BetStatus.Scheduled : match.status,
    homeTeam: {
      externalId: match.homeTeam.id,
      name: match.homeTeam.name,
      crest: match.homeTeam.crest,
    },
    awayTeam: {
      externalId: match.awayTeam.id,
      name: match.awayTeam.name,
      crest: match.awayTeam.crest,
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
      `https://api.football-data.org/v4/competitions/${this.competition}/matches?${filters}`,
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
    // console.log(games.length, 'GET GAMES BY STAGES');
    return games.filter(filterByExistingTeams);
  }

  async getScheduledGames(): Promise<ExternalGame[]> {
    // TODO DEVELOPMENT
    // const testFilterQuery = `status=FINISHED&stage=QUARTER_FINALS`;
    // const testFilterQuery = `status=FINISHED&stage=QUARTER_FINALS&season=2022`;
    // const games = await this.getGames(testFilterQuery);
    // return mapDataToExternalGames(MockedGames);
    const filterQuery = `status=SCHEDULED`;
    const games = await this.getGames(filterQuery);
    // console.log({ games });
    return games.filter(filterByExistingTeams);
  }
}
