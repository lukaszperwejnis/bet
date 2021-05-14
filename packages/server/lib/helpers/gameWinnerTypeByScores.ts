import { WinnerTypes } from "../enums/winnerTypes";

export function gameWinnerTypeByScores(
  homeScore: number,
  awayScore: number
): WinnerTypes {
  switch (true) {
    case homeScore > awayScore:
      return WinnerTypes.HOME_TEAM;
    case awayScore > homeScore:
      return WinnerTypes.AWAY_TEAM;
    default:
      return WinnerTypes.DRAW;
  }
}
