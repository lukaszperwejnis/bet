import {GameService} from "./GameService";
import {ChampionBetService} from "./ChampionBetService";
import {Game} from "../structures/Game";
import {Team} from "../structures/Team";

export class BetService {
    private gameService = new GameService();
    private championBetService = new ChampionBetService();

    public async getAvailableBetsByUserId(userId: string) {
        const availableGames: Game[] = await this.gameService.getAvailableByUserId(userId);
        const availableChampions: Team[] = await this.championBetService.getAvailableByUserId(userId);
        return {
            availableGames,
            availableChampions
        }
    }
}
