import {
  Bet,
  BetStatus,
  ChampionBet,
  Game,
  GameBet,
  GameStage,
} from '@bet/structures';
import { GameRepository } from '../Repository/GameRepository';
import { RecalculateService } from './RecalculateService';
import { GameBetService } from './GameBetService';
import { ChampionBetService } from './ChampionBetService';
import { GameService } from './GameService';

export class BetsValidationService {
  private gameRepository = new GameRepository();
  private gameBetService = new GameBetService();
  private gamesService = new GameService();
  private championBetService = new ChampionBetService();
  private recalculateService = new RecalculateService();

  async validateMatchBets(): Promise<void> {
    const gameStagesToValidate: string[] = await this.getGameStagesToValidate();
    let updatedBets: Bet[] = [];

    if (!gameStagesToValidate.length) {
      return;
    }

    const updatedGames: Game[] =
      await this.gamesService.getUpdatedGamesByStages(gameStagesToValidate);

    if (!updatedGames.length) {
      return;
    }

    const updatedGameBets: GameBet[] =
      await this.gameBetService.updateBetsByGames(updatedGames);

    updatedBets = [...updatedGameBets];

    if (gameStagesToValidate.includes(GameStage.Final)) {
      const updatedChampionBets: ChampionBet[] =
        await this.championBetService.updateBets();
      updatedBets = [...updatedBets, ...updatedChampionBets];
    }

    if (!updatedBets.length) {
      return;
    }

    await this.recalculateService.recalculateUsersScores(
      updatedBets.map(({ createdBy }) => createdBy._id),
    );
  }

  private async getGameStagesToValidate(): Promise<string[]> {
    const stages = await this.gameRepository
      .getMany({
        status: BetStatus.Scheduled,
      })
      .then((data) => data.map((game) => game.stage));

    return Array.from(new Set(stages));
  }
}
