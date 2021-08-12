import * as Joi from '@hapi/joi';
import { Competition, GameStatus, Team, CreationType } from '@bet/structures';
import { TeamRepository } from '../Repository/TeamRepository';
import { WinnerType } from '../enums';
import { GameRepository } from '../Repository/GameRepository';
import { Game } from '../structures/Game';
import { ExternalGamesService } from './ExternalGamesService';
import {
  FieldValidationError,
  InvalidIdError,
  TeamNameDuplicatedError,
  TeamNotFoundError,
} from '../errors';
import { isValidObjectId } from '../helpers/isValidObjectId';
import { VALIDATION_SCHEMA_KEYS } from '../constants/validationSchemaKeys';
import { mapSchemaValidationErrors } from '../helpers/mapSchemaValidationErrors';

export class TeamService {
  private readonly competition: Competition;
  private teamRepository = new TeamRepository();
  private gameRepository = new GameRepository();
  private externalGameService = new ExternalGamesService();

  constructor(competition?: Competition) {
    this.competition = competition || Competition.UefaChampionsLeague;
  }

  async getOneById(id: string): Promise<Team.Team> {
    if (!isValidObjectId(id)) {
      throw new InvalidIdError(id);
    }

    const doc = await this.teamRepository.findById(id);
    if (!doc) {
      throw new TeamNotFoundError(id);
    }

    return doc;
  }

  async createOne(input: Team.CreatePayload): Promise<Team.Team> {
    const schema = Joi.object({
      name: VALIDATION_SCHEMA_KEYS.TEAM.NAME,
    });

    const { error } = schema.validate(input);
    if (error) {
      throw new FieldValidationError(mapSchemaValidationErrors(error.details));
    }

    const existingTeam = await this.teamRepository.findOne({
      name: input.name,
    });

    if (existingTeam) {
      throw new TeamNameDuplicatedError(input.name);
    }

    return this.teamRepository.createOne({ ...input } as any);
  }

  async addTeamsToDatabase(): Promise<void> {
    const teams: Team.Team[] = await this.getTeamsFromExternalAPI();
    await this.insertTeamsToDatabase(teams);
  }

  private async getTeamsFromExternalAPI(): Promise<Team.Team[]> {
    const scheduledGames = await this.externalGameService.getScheduledGames();
    return scheduledGames.reduce(
      (accu: Team.Team[], { homeTeam, awayTeam }) => {
        if (!homeTeam.externalId || !awayTeam.externalId) {
          return accu;
        }

        return [
          ...accu,
          {
            name: homeTeam.name,
            externalId: homeTeam.externalId,
            creationType: CreationType.External,
          } as Team.Team,
          {
            name: awayTeam.name,
            externalId: awayTeam.externalId,
            creationType: CreationType.External,
          } as Team.Team,
        ];
      },
      [],
    );
  }

  private async insertTeamsToDatabase(teams: Team.Team[]) {
    const addedTeams = [];

    for (const el of teams) {
      const team = await this.teamRepository.getOne({
        externalId: el.externalId,
      });

      if (!team) {
        const doc = await this.teamRepository.createOne({ ...el });
        addedTeams.push(doc);
      }
    }

    return addedTeams;
  }

  async getCompetitionWinner(): Promise<Team.Team | null> {
    const finalGame: Game = await this.gameRepository.getOne({
      competition: this.competition,
      stage: 'FINAL',
      status: GameStatus.Finished,
    });

    if (!finalGame) {
      return null;
    }

    const winnerTeamId =
      finalGame.winner === WinnerType.HomeTeam
        ? finalGame.homeTeam
        : finalGame.awayTeam;
    return this.teamRepository.getOne({
      _id: winnerTeamId,
    });
  }
}
