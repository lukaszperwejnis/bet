import {Competition, GameStatus} from "@bet/structures";
import { TeamRepository } from "../Repository/TeamRepository";
import { CreationType, WinnerType } from "../enums";
import { GameRepository } from "../Repository/GameRepository";
import { Team } from "../structures/Team";
import { Game } from "../structures/Game";
import { ExternalGamesService } from "./ExternalGamesService";
import {
  FieldValidationError,
  InvalidIdError,
  TeamNameDuplicatedError,
  TeamNotFoundError,
} from "../errors";
import { isValidObjectId } from "../helpers/isValidObjectId";
import * as Joi from "@hapi/joi";
import { VALIDATION_SCHEMA_KEYS } from "../constants/validationSchemaKeys";
import { mapSchemaValidationErrors } from "../helpers/mapSchemaValidationErrors";

export class TeamService {
  private readonly competition: Competition;
  private teamRepository = new TeamRepository();
  private gameRepository = new GameRepository();
  private externalGameService = new ExternalGamesService();

  constructor(competition?: Competition) {
    this.competition = competition
      ? competition
      : Competition.UefaChampionsLeague;
  }

  async getOneById(id: string): Promise<Team> {
    if (!isValidObjectId(id)) {
      throw new InvalidIdError(id);
    }

    const doc = await this.teamRepository.findById(id);
    if (!doc) {
      throw new TeamNotFoundError(id);
    }

    return doc;
  }

  async createOne(input: any): Promise<Team> {
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

    return await this.teamRepository.createOne({ ...input });
  }

  async addTeamsToDatabase() {
    const teams: Team[] = await this.getTeamsFromExternalAPI();
    await this.insertTeamsToDatabase(teams);
  }

  private getTeamsFromExternalAPI(): Promise<Team[]> {
    return this.externalGameService.getScheduledGames().then((data) => {
      console.log(data);
      return [];
      // return data.reduce((accu, { homeTeam, awayTeam }) => {
      //   accu.push(
      //     {
      //       name: homeTeam.name,
      //       externalId: homeTeam.externalId,
      //       creationType: CreationType.External,
      //     },
      //     {
      //       name: awayTeam.name,
      //       externalId: awayTeam.externalId,
      //       creationType: CreationType.External,
      //     }
      //   );
      //
      //   return accu;
      // }, []);
    });
  }

  private async insertTeamsToDatabase(teams: Team[]) {
    const addedTeams = [];
    for (let el of teams) {
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

  async getCompetitionWinner(): Promise<Team | null> {
    const finalGame: Game = await this.gameRepository.getOne({
      competition: this.competition,
      stage: "FINAL",
      status: GameStatus.Finished,
    });

    if (!finalGame) {
      return null;
    }

    const winnerTeamId =
      finalGame.winner === WinnerType.HomeTeam
        ? finalGame.homeTeam
        : finalGame.awayTeam;
    return await this.teamRepository.getOne({
      _id: winnerTeamId,
    });
  }
}
