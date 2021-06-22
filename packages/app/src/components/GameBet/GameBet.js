"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameBet = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styles_1 = require("./styles");
const GameBet = ({ gameId, homeTeamName, awayTeamName, onChange, }) => {
    const [homeTeamScore, setHomeTeamScore] = react_1.useState(0);
    const [awayTeamScore, setAwayTeamScore] = react_1.useState(0);
    const onHomeTeamScoreChange = (event) => {
        event.persist();
        setHomeTeamScore(event.target.value);
    };
    const onAwayTeamScoreChange = (event) => {
        event.persist();
        setAwayTeamScore(event.target.value);
    };
    const onAddBet = () => {
        onChange({
            homeTeamScore,
            awayTeamScore,
            gameId,
        });
    };
    return (jsx_runtime_1.jsxs(styles_1.Wrapper, { children: [jsx_runtime_1.jsx(Team, { name: homeTeamName, onChange: onHomeTeamScoreChange }, void 0),
            jsx_runtime_1.jsx(Team, { name: awayTeamName, onChange: onAwayTeamScoreChange }, void 0),
            jsx_runtime_1.jsx("button", Object.assign({ type: "button", onClick: onAddBet }, { children: "Postaw zak\u0142ad" }), void 0)] }, void 0));
};
exports.GameBet = GameBet;
const Team = ({ name, onChange }) => (jsx_runtime_1.jsxs(styles_1.TeamWrapper, { children: [name, " ", jsx_runtime_1.jsx("input", { onChange: onChange, type: "number" }, void 0)] }, void 0));
