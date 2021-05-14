import { ReactElement, useEffect, useState } from 'react';
import { betService, userService } from '@services';
import { GameBet } from '../../components/GameBet/GameBet';

export const Dashboard = (): ReactElement => {
  const [availableGameBets, setAvailableGameBets] = useState<unknown[]>([]);
  const [availableChampionBets, setAvailableChampionBets] = useState<unknown[]>(
    [],
  );
  const [userBets, setUserBets] = useState<any>([]);
  const [bets, setBets] = useState<any>([]);
  const logout = (): void => {
    userService.logout();
  };

  useEffect(() => {
    betService.getAvailableBets().then((result: any) => {
      setAvailableGameBets(result.data.availableGames);
      setAvailableChampionBets(result.data.availableChampions);
    });

    betService.getUserBets().then((result: any) => {
      setUserBets(result.data.gameBets);
    });
  }, []);

  const createBets = async () => {
    const data = {
      games: bets,
    };

    console.log(data);

    const result = await betService.createBets(data);
    console.log(result);
  };

  const renderUserBets = (bet: any): JSX.Element => {
    return (
      <div key={bet._id}>
        {bet.game.homeTeam.name} : {bet.game.awayTeam.name}
        <br />
        {bet.awayScore} : {bet.homeScore}
      </div>
    );
  };

  const onAddBet = ({ homeTeamScore, awayTeamScore, gameId }: any) => {
    setBets([
      ...bets,
      {
        gameId,
        homeScore: Number.parseInt(homeTeamScore, 10),
        awayScore: Number.parseInt(awayTeamScore, 10),
      },
    ]);
  };

  const renderAvailableGamesBet = ({
    _id,
    homeTeam,
    awayTeam,
  }: any): JSX.Element => {
    return (
      <GameBet
        key={_id}
        gameId={_id}
        homeTeamName={homeTeam.name}
        awayTeamName={awayTeam.name}
        onChange={onAddBet}
      />
    );
  };

  return (
    <div>
      Hello from dashboard
      <button type="button" onClick={logout}>
        Logout
      </button>
      <br />
      <br />
      User BETS
      {userBets.map(renderUserBets)}
      <br />
      <br />
      Available bets
      {availableGameBets.map(renderAvailableGamesBet)}
      <button type="button" onClick={createBets}>
        Postaw zakłady!!!
      </button>
    </div>
  );
};
