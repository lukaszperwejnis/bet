import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { TeamWrapper, Wrapper } from './styles';
export const GameBet = ({ gameId, homeTeamName, awayTeamName, onChange, }) => {
    const [homeTeamScore, setHomeTeamScore] = useState(0);
    const [awayTeamScore, setAwayTeamScore] = useState(0);
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
    return (_jsxs(Wrapper, { children: [_jsx(Team, { name: homeTeamName, onChange: onHomeTeamScoreChange }, void 0),
            _jsx(Team, { name: awayTeamName, onChange: onAwayTeamScoreChange }, void 0),
            _jsx("button", Object.assign({ type: "button", onClick: onAddBet }, { children: "Postaw zak\u0142ad" }), void 0)] }, void 0));
};
const Team = ({ name, onChange }) => (_jsxs(TeamWrapper, { children: [name, " ", _jsx("input", { onChange: onChange, type: "number" }, void 0)] }, void 0));
