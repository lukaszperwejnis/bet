import { WinnerType } from "../enums";

export function gameWinnerTypeByScores(
  homeScore: number,
  awayScore: number
): WinnerType {
  switch (true) {
    case homeScore > awayScore:
      return WinnerType.HomeTeam;
    case awayScore > homeScore:
      return WinnerType.AwayTeam;
    default:
      return WinnerType.Draw;
  }
}
