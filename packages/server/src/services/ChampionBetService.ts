import * as Joi from '@hapi/joi';
import {
  BetFilters,
  BetStatus,
  ChampionBet,
  Game,
  GameStatus,
  Team,
} from '@bet/structures';
import { TeamService } from './TeamService';
import { ChampionBetRepository } from '../Repository/ChampionBetRepository';
import { TeamRepository } from '../Repository/TeamRepository';
import { compareObjectsIds } from '../helpers/compareObjectIds';
import { GameRepository } from '../Repository/GameRepository';
import {
  BetAlreadyExistError,
  FieldValidationError,
  GameNotFoundError,
  InvalidIdError,
  TeamNotFoundError,
} from '../errors';
import { isValidObjectId } from '../helpers/isValidObjectId';
import { VALIDATION_SCHEMA_KEYS } from '../constants/validationSchemaKeys';
import { mapSchemaValidationErrors } from '../helpers/mapSchemaValidationErrors';

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
    input: ChampionBetInput,
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
      throw new BetAlreadyExistError(input.teamId);
    }

    const team = await this.teamRepository.findById(input.teamId);

    if (!team) {
      throw new TeamNotFoundError(input.teamId);
    }

    return this.championBetRepository.createOne({
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
    const competitionWinner = await this.teamService.getCompetitionWinner();

    if (!competitionWinner) {
      return [];
    }

    const championBets: ChampionBet[] =
      await this.championBetRepository.getMany({
        status: BetStatus.Scheduled,
      });

    for (const championBet of championBets) {
      const betTeam = await this.teamRepository.findById(championBet.bet._id);
      const bet: ChampionBet =
        await this.championBetRepository.findOneAndUpdate(
          { _id: championBet._id },
          {
            hasChampionCorrect: compareObjectsIds(
              betTeam._id,
              competitionWinner._id,
            ),
            status: BetStatus.Finished,
          },
        );

      if (bet) {
        updatedBets.push(bet);
      }
    }

    return updatedBets;
  }

  async getChampionBet(filters: BetFilters): Promise<Team.Team[]> {
    const { userId, status } = filters;
    const championBet: ChampionBet = await this.championBetRepository.getOne({
      createdBy: userId,
    });

    if (championBet) {
      return [];
    }

    const scheduledGames: Game[] = await this.gameRepository.getMany({
      status,
    });

    const teamIds = scheduledGames.reduce(
      (acc: Team.Team[], { homeTeam, awayTeam }) => {
        return [...acc, homeTeam, awayTeam];
      },
      [],
    );

    return await this.teamRepository.getMany({ _id: { $in: teamIds } });
  }

  async isValidBet(
    userId: string,
    championBet: ChampionBetInput,
  ): Promise<boolean> {
    if (!championBet) {
      return false;
    }

    const availableChampions: Team.Team[] = await this.getChampionBet({
      status: BetStatus.Scheduled,
      userId,
    });

    return availableChampions
      .map((champion) => champion._id.toString())
      .includes(championBet.teamId);
  }

  // getOneByUserId(userId: string): Promise<ChampionBet> {
  //   return this.championBetRepository.getOne({
  //     createdBy: userId,
  //     status: BetStatus.Scheduled,
  //   });
  // }
}
