import { ChampionBet } from "../structures/ChampionBet";
import { TeamService } from "./TeamService";
import { ChampionBetRepository } from "../Repository/ChampionBetRepository";
import { BetStatuses } from "../enums/betStatuses";
import { Team } from "../structures/Team";
import { TeamRepository } from "../Repository/TeamRepository";
import { compareObjectsIds } from "../helpers/compareObjectIds";
import { GameRepository } from "../Repository/GameRepository";
import { Game } from "../structures/Game";
import {
  BetAlredyExistError,
  FieldValidationError,
  InvalidIdError,
  GameNotFoundError,
  TeamNotFoundError,
} from "../errors";
import { isValidObjectId } from "../helpers/isValidObjectId";
import * as Joi from "@hapi/joi";
import { VALIDATION_SCHEMA_KEYS } from "../constants/validationSchemaKeys";
import { mapSchemaValidationErrors } from "../helpers/mapSchemaValidationErrors";

type ChampionBetInput = {
  teamId: string;
};

export class ChampionBetService {
  private teamService = new TeamService();
  private teamRepository = new TeamRepository();
  private championBetRepository = new ChampionBetRepository();
  private gameRepository = new GameRepository();

  async createOne(
    userId: string,
    input: ChampionBetInput
  ): Promise<ChampionBet> {
    const schema = Joi.object({
      teamId: VALIDATION_SCHEMA_KEYS.ID,
    });

    const { error } = schema.validate(input);
    if (error) {
      throw new FieldValidationError(mapSchemaValidationErrors(error.details));
    }

    const bet = await this.championBetRepository.getOne({ createdBy: userId });
    if (bet) {
      throw new BetAlredyExistError(input.teamId);
    }

    const team = await this.teamRepository.findById(input.teamId);
    if (!team) {
      throw new TeamNotFoundError(input.teamId);
    }

    return await this.championBetRepository.createOne({
      bet: team,
      createdBy: userId,
    });
  }

  async getOneById(id: string): Promise<ChampionBet> {
    if (!isValidObjectId(id)) {
      throw new InvalidIdError(id);
    }

    const doc = await this.championBetRepository.findById(id);
    if (!doc) {
      throw new GameNotFoundError(id);
    }

    return doc;
  }

  async updateBets(): Promise<ChampionBet[]> {
    const updatedBets: ChampionBet[] = [];
    const competitionWinner: Team = await this.teamService.getCompetitionWinner();
    const championBets: ChampionBet[] = await this.championBetRepository.getMany(
      {
        status: BetStatuses.SCHEDULED,
      }
    );

    for (let championBet of championBets) {
      const betTeam: Team = await this.teamRepository.findById(championBet.bet);
      const bet: ChampionBet = await this.championBetRepository.findOneAndUpdate(
        { _id: championBet._id },
        {
          hasChampionCorrect: compareObjectsIds(
            betTeam._id,
            competitionWinner._id
          ),
          status: BetStatuses.FINISHED,
        }
      );

      bet && updatedBets.push(bet);
    }

    return updatedBets;
  }

  async getAvailableByUserId(userId: string): Promise<Team[]> {
    const championBet: ChampionBet = await this.championBetRepository.getOne({
      createdBy: userId,
    });
    if (championBet) {
      return [];
    }

    const scheduledGames: Game[] = await this.gameRepository.getMany({
      status: BetStatuses.SCHEDULED,
    });
    const teamIds = scheduledGames.reduce((acc, { homeTeam, awayTeam }) => {
      acc.push(homeTeam, awayTeam);
      return acc;
    }, []);

    return await this.teamRepository.getMany({ _id: { $in: teamIds } });
  }

  async isValidBet(
    userId: string,
    championBet: ChampionBetInput
  ): Promise<boolean> {
    if (!championBet) {
      return false;
    }

    const availableChampions: Team[] = await this.getAvailableByUserId(userId);

    return availableChampions
      .map((champion) => champion._id.toString())
      .includes(championBet.teamId);
  }

  getOneByUserId(userId: string): Promise<ChampionBet> {
    return this.championBetRepository.getOne({
      createdBy: userId,
      status: BetStatuses.SCHEDULED,
    });
  }
}
