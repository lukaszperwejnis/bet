import { Winner } from '@bet/structures';

export function gameWinnerTypeByScores(
  homeScore: number,
  awayScore: number,
): Winner {
  switch (true) {
    case homeScore > awayScore:
      return Winner.HomeTeam;
    case awayScore > homeScore:
      return Winner.AwayTeam;
    default:
      return Winner.Draw;
  }
}
