import {UserRepository} from "../Repository/UserRepository";
import {User} from "../structures/User";
import {GameBet} from "../structures/GameBet";
import {GameBetRepository} from "../Repository/GameBetRepository";
import {BetStatuses} from "../enums/betStatuses";
import {ChampionBetRepository} from "../Repository/ChampionBetRepository";
import {ChampionBet} from "../structures/ChampionBet";
import {ScoreValues} from "../enums/scoreValues";
import {TeamService} from "./TeamService";
import {Team} from "../structures/Team";

export class RecalculateService {
    private userRepository = new UserRepository();
    private gameBetRepository = new GameBetRepository();
    private championBetRepository = new ChampionBetRepository();
    private teamService = new TeamService();

    public async recalculateUsersScores(usersIds: string[]): Promise<User[]> {
        const updatedUsers: User[] = [];
        for (let userId of usersIds) {
            let score = 0;
            const betsQuery = {
                status: BetStatuses.FINISHED,
                createdBy: userId
            };

            const gameBets: GameBet[] = await this.gameBetRepository.getMany(betsQuery);
            const competitionWinner: Team = await this.teamService.getCompetitionWinner();

            score = this.countScoreFromGameBets(gameBets);

            if (competitionWinner) {
                const championBet: ChampionBet = await this.championBetRepository.getOne(betsQuery);
                score = championBet && championBet.hasChampionCorrect ? score + ScoreValues.HAS_CHAMPION_SCORE : score;
            }

            const user = await this.userRepository.findOneAndUpdate({_id: userId}, {score});
            user && updatedUsers.push(user)
        }

        return updatedUsers;
    }

    private countScoreFromGameBets(gameBets: GameBet[]): number {
        let score = 0;
        for (let {hasWinner, hasTeamsScores} of gameBets) {
            if (hasWinner) {
                score += ScoreValues.HAS_WINNER;
            }

            if (hasTeamsScores) {
                score += ScoreValues.HAS_TEAMS_SCORES
            }
        }

        return score;
    }
}

