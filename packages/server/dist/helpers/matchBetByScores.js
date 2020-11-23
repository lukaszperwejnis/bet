"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function matchBetByScores(homeScore, awayScore) {
    switch (true) {
        case homeScore > awayScore:
            return "HOME_TEAM" /* HOME_TEAM */;
        case awayScore > homeScore:
            return "AWAY_TEAM" /* AWAY_TEAM */;
        default:
            return "DRAW" /* DRAW */;
    }
}
exports.matchBetByScores = matchBetByScores;
//# sourceMappingURL=gameWinnerTypeByScores.js.map
