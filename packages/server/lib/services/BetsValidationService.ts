import { GameRepository } from "../Repository/GameRepository";
import { GameStatuses } from "../enums/gameStatuses";
import { Game } from "../structures/Game";
import { GameBet } from "../structures/GameBet";
import { RecalculateService } from "./RecalculateService";
import { ChampionBet } from "../structures/ChampionBet";
import { GameStages } from "../enums/gameStages";
import { GameBetService } from "./GameBetService";
import { ChampionBetService } from "./ChampionBetService";
import { GameService } from "./GameService";

export class BetsValidationService {
  private gameRepository = new GameRepository();
  private gameBetService = new GameBetService();
  private gamesService = new GameService();
  private championBetService = new ChampionBetService();
  private recalculateService = new RecalculateService();

  public async validateMatchBets() {
    const gameStagesToValidate: string[] = await this.getGameStagesToValidate();
    let updatedBets = [];

    if (!gameStagesToValidate.length) {
      return;
    }

    const updatedGames: Game[] = await this.gamesService.getUpdatedGamesByStages(
      gameStagesToValidate
    );

    if (!updatedGames.length) {
      return;
    }

    const updatedGameBets: GameBet[] = await this.gameBetService.updateBetsByGames(
      updatedGames
    );
    updatedBets = [...updatedGameBets];

    if (gameStagesToValidate.includes(GameStages.FINAL)) {
      const updatedChampionBets: ChampionBet[] = await this.championBetService.updateBets();
      updatedBets = [...updatedBets, ...updatedChampionBets];
    }

    if (!updatedBets.length) {
      return;
    }

    const updatedUsers = await this.recalculateService.recalculateUsersScores(
      updatedBets.map(({ createdBy }) => createdBy._id)
    );
  }

  private async getGameStagesToValidate(): Promise<string[]> {
    const stages = await this.gameRepository
      .getMany({
        status: GameStatuses.SCHEDULED,
      })
      .then((data) => data.map((game) => game.stage));

    return Array.from(new Set(stages));
  }
}
