import { BetStatus, ChampionBet, GameBet } from '@bet/structures';
import { UserRepository } from '../Repository/UserRepository';
import { User } from '../structures/User';
import { GameBetRepository } from '../Repository/GameBetRepository';
import { ChampionBetRepository } from '../Repository/ChampionBetRepository';
import { TeamService } from './TeamService';
import { ScoreValue } from '../enums';

export class RecalculateService {
  private userRepository = new UserRepository();
  private gameBetRepository = new GameBetRepository();
  private championBetRepository = new ChampionBetRepository();
  private teamService = new TeamService();

  async recalculateUsersScores(usersIds: string[]): Promise<User[]> {
    const updatedUsers: User[] = [];

    for (const userId of usersIds) {
      let score = 0;
      const betsQuery = {
        status: BetStatus.Finished,
        createdBy: userId,
      };

      const gameBets = await this.gameBetRepository.getMany(betsQuery);
      const competitionWinner = await this.teamService.getCompetitionWinner();

      score = RecalculateService.countScoreFromGameBets(gameBets);

      if (competitionWinner) {
        const championBet: ChampionBet =
          await this.championBetRepository.getOne(betsQuery);
        score =
          championBet && championBet.hasChampionCorrect
            ? score + ScoreValue.HasChampionScore
            : score;
      }

      const user = await this.userRepository.findOneAndUpdate(
        { _id: userId },
        { score },
      );

      if (user) {
        updatedUsers.push(user);
      }
    }

    return updatedUsers;
  }

  private static countScoreFromGameBets(gameBets: GameBet[]): number {
    let score = 0;
    for (const { hasWinner, hasTeamsScores } of gameBets) {
      if (hasWinner) {
        score += ScoreValue.HasWinner;
      }

      if (hasTeamsScores) {
        score += ScoreValue.HasTeamScores;
      }
    }

    return score;
  }
}
