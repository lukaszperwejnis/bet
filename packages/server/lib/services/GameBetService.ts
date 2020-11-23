import {Game} from "../structures/Game";
import {GameBet} from "../structures/GameBet";
import {BetStatuses} from "../enums/betStatuses";
import {GameBetRepository} from "../Repository/GameBetRepository";
import {GameRepository} from "../Repository/GameRepository";
import * as Joi from "@hapi/joi";
import {VALIDATION_SCHEMA_KEYS} from "../constants/validationSchemaKeys";
import {BetAlredyExistError, BetLateError, FieldValidationError, InvalidIdError, GameNotFoundError} from "../errors";
import {mapSchemaValidationErrors} from "../helpers/mapSchemaValidationErrors";
import {gameWinnerTypeByScores} from "../helpers/gameWinnerTypeByScores";
import {isValidObjectId} from "../helpers/isValidObjectId";

export class GameBetService {
    private gameRepository = new GameRepository();
    private gameBetRepository = new GameBetRepository();

    public async createOne(userId: string, input: any): Promise<GameBet> {
        const schema = Joi.object({
            gameId: VALIDATION_SCHEMA_KEYS.ID,
            homeScore: VALIDATION_SCHEMA_KEYS.TEAM.SCORE,
            awayScore: VALIDATION_SCHEMA_KEYS.TEAM.SCORE,
        });

        const {error} = schema.validate(input);
        if (error) {
            throw new FieldValidationError(mapSchemaValidationErrors(error.details));
        }

        const {gameId, homeScore, awayScore} = input;
        const game = await this.gameRepository.findById(gameId);
        const gameBet = await this.gameBetRepository.findOne({game: gameId, createdBy: userId});

        if (!game) {
            throw new GameNotFoundError(gameId);
        }

        if (new Date().getTime() > new Date(game.scheduledDate).getTime()) {
            throw new BetLateError(gameId);
        }

        if (gameBet) {
            throw new BetAlredyExistError(gameId);
        }

        return await this.gameBetRepository.createOne({
            ...input,
            bet: gameWinnerTypeByScores(homeScore, awayScore),
            createdBy: userId,
            game,
            homeScore,
            awayScore
        });
    }

    public async getOneById(id: string): Promise<GameBet> {
        if (!isValidObjectId(id)) {
             throw new InvalidIdError(id);
        }

        const doc = await this.gameBetRepository.findById(id);

        if (!doc) {
            throw new GameNotFoundError(id);
        }

        return doc;
    }

    public async getManyByUserId(userId: string): Promise<GameBet[]> {
        return await this.gameBetRepository.find({createdBy: userId});
    }

    public async updateBetsByGames(games: Game[]): Promise<GameBet[]> {
        const pipeline = [
            {
                $lookup: {
                    from: 'game',
                    localField: 'game',
                    foreignField: '_id',
                    as: 'gameRecord'
                }
            },
            {$unwind: "$gameRecord"},
            {
                $match: {
                    "gameRecord.externalId": {$in: games.map(game => game.externalId)}
                }
            }
        ];
        const betsToUpdate: any = await this.gameBetRepository.aggregate(pipeline);

        if (!betsToUpdate.length) {
            return betsToUpdate;
        }

        const updatedBets: GameBet[] = [];

        for (let bet of betsToUpdate) {
            const updatedGameBet = await this.gameBetRepository.getOneAndUpdate({_id: bet._id}, {
                hasWinner: bet.bet === bet.gameRecord.winner,
                hasTeamsScores: bet.gameRecord.homeScore === bet.homeScore && bet.gameRecord.awayScore === bet.awayScore,
                status: BetStatuses.FINISHED
            });

            updatedBets.push(updatedGameBet);
        }

        return updatedBets;
    }
}
