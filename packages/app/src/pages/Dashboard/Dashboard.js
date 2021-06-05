var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { betService, userService } from '@services';
import { GameBet } from '../../components/GameBet/GameBet';
export const Dashboard = () => {
    const [availableGameBets, setAvailableGameBets] = useState([]);
    const [availableChampionBets, setAvailableChampionBets] = useState([]);
    const [userBets, setUserBets] = useState([]);
    const [bets, setBets] = useState([]);
    const logout = () => {
        userService.logout();
    };
    useEffect(() => {
        betService.getAvailableBets().then((result) => {
            setAvailableGameBets(result.data.availableGames);
            setAvailableChampionBets(result.data.availableChampions);
        });
        betService.getUserBets().then((result) => {
            setUserBets(result.data.gameBets);
        });
    }, []);
    const createBets = () => __awaiter(void 0, void 0, void 0, function* () {
        const data = {
            games: bets,
        };
        console.log(data);
        const result = yield betService.createBets(data);
        console.log(result);
    });
    const renderUserBets = (bet) => {
        return (_jsxs("div", { children: [bet.game.homeTeam.name, " : ", bet.game.awayTeam.name, _jsx("br", {}, void 0), bet.awayScore, " : ", bet.homeScore] }, bet._id));
    };
    const onAddBet = ({ homeTeamScore, awayTeamScore, gameId }) => {
        setBets([
            ...bets,
            {
                gameId,
                homeScore: Number.parseInt(homeTeamScore, 10),
                awayScore: Number.parseInt(awayTeamScore, 10),
            },
        ]);
    };
    const renderAvailableGamesBet = ({ _id, homeTeam, awayTeam, }) => {
        return (_jsx(GameBet, { gameId: _id, homeTeamName: homeTeam.name, awayTeamName: awayTeam.name, onChange: onAddBet }, _id));
    };
    return (_jsxs("div", { children: ["Hello from dashboard", _jsx("button", Object.assign({ type: "button", onClick: logout }, { children: "Logout" }), void 0),
            _jsx("br", {}, void 0),
            _jsx("br", {}, void 0), "User BETS", userBets.map(renderUserBets), _jsx("br", {}, void 0),
            _jsx("br", {}, void 0), "Available bets", availableGameBets.map(renderAvailableGamesBet), _jsx("button", Object.assign({ type: "button", onClick: createBets }, { children: "Postaw zak\u0142ady!!!" }), void 0)] }, void 0));
};
