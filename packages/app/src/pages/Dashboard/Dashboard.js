"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dashboard = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const _services_1 = require("@services");
const GameBet_1 = require("../../components/GameBet/GameBet");
const Dashboard = () => {
    const [availableGameBets, setAvailableGameBets] = react_1.useState([]);
    const [availableChampionBets, setAvailableChampionBets] = react_1.useState([]);
    const [userBets, setUserBets] = react_1.useState([]);
    const [bets, setBets] = react_1.useState([]);
    const logout = () => {
        _services_1.userService.logout();
    };
    react_1.useEffect(() => {
        _services_1.betService.getAvailableBets().then((result) => {
            setAvailableGameBets(result.data.availableGames);
            setAvailableChampionBets(result.data.availableChampions);
        });
        _services_1.betService.getUserBets().then((result) => {
            setUserBets(result.data.gameBets);
        });
    }, []);
    const createBets = () => __awaiter(void 0, void 0, void 0, function* () {
        const data = {
            games: bets,
        };
        console.log(data);
        const result = yield _services_1.betService.createBets(data);
        console.log(result);
    });
    const renderUserBets = (bet) => {
        return (jsx_runtime_1.jsxs("div", { children: [bet.game.homeTeam.name, " : ", bet.game.awayTeam.name, jsx_runtime_1.jsx("br", {}, void 0), bet.awayScore, " : ", bet.homeScore] }, bet._id));
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
        return (jsx_runtime_1.jsx(GameBet_1.GameBet, { gameId: _id, homeTeamName: homeTeam.name, awayTeamName: awayTeam.name, onChange: onAddBet }, _id));
    };
    return (jsx_runtime_1.jsxs("div", { children: ["Hello from dashboard", jsx_runtime_1.jsx("button", Object.assign({ type: "button", onClick: logout }, { children: "Logout" }), void 0),
            jsx_runtime_1.jsx("br", {}, void 0),
            jsx_runtime_1.jsx("br", {}, void 0), "User BETS", userBets.map(renderUserBets), jsx_runtime_1.jsx("br", {}, void 0),
            jsx_runtime_1.jsx("br", {}, void 0), "Available bets", availableGameBets.map(renderAvailableGamesBet), jsx_runtime_1.jsx("button", Object.assign({ type: "button", onClick: createBets }, { children: "Postaw zak\u0142ady!!!" }), void 0)] }, void 0));
};
exports.Dashboard = Dashboard;
