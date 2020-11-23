"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function gameWinnerTypeByScores(homeScore, awayScore) {
    switch (true) {
        case homeScore > awayScore:
            return "HOME_TEAM" /* HOME_TEAM */;
        case awayScore > homeScore:
            return "AWAY_TEAM" /* AWAY_TEAM */;
        default:
            return "DRAW" /* DRAW */;
    }
}
exports.gameWinnerTypeByScores = gameWinnerTypeByScores;
//# sourceMappingURL=gameWinnerTypeByScores.js.map