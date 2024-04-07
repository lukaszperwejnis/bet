import { ReactElement, useEffect, useState } from 'react';
import { betService, userService } from '@services';
import { BetStatus, Game, GameBetInput, GameBet, Team } from '@bet/structures';
import {
  Page,
  GameBet as GameBetComponent,
  GameBetPreview,
  GameBetFinished,
} from '@components';
import { BetWrapper, Header } from './Dashboard.styles';

type GameDTO = Game & {
  scheduledDate: string;
};

export const Dashboard = (): ReactElement => {
  const [availableGameBets, setAvailableGameBets] = useState<GameDTO[]>([]);
  const [availableChampionBets, setAvailableChampionBets] = useState<
    Team.Team[]
  >([]);
  const [finishedGameBets, setFinishedGameBets] = useState<GameBet[]>([]);
  const [userBets, setUserBets] = useState<any>([]);
  const [bets, setBets] = useState<Map<string, GameBetInput>>(new Map());
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const logout = (): void => {
    userService.logout();
  };

  useEffect(() => {
    betService.getAvailableBets().then((result) => {
      setAvailableGameBets(result.data.availableGames as GameDTO[]);
      setAvailableChampionBets(result.data.availableChampions);
    });

    betService
      .getUserBets({ status: BetStatus.Finished })
      .then((result: any) => {
        setFinishedGameBets(result.data.gameBets);
      });

    betService
      .getUserBets({ status: BetStatus.Scheduled })
      .then((result: any) => {
        setUserBets(result.data.gameBets);
      });
  }, []);

  const createBets = async () => {
    const data = {
      games: Array.from(bets.values()),
    };

    setIsLoading(true);
    await betService.createBets(data);

    betService
      .getUserBets({ status: BetStatus.Scheduled })
      .then((result: any) => {
        setUserBets(result.data.gameBets);
      });

    betService.getAvailableBets().then((result) => {
      setAvailableGameBets(result.data.availableGames as GameDTO[]);
      setAvailableChampionBets(result.data.availableChampions);
      setIsLoading(false);
      setBets(new Map());
    });
  };

  const onAddBet = (gameBetInput: GameBetInput) => {
    bets.set(gameBetInput.gameId, gameBetInput);
  };

  const renderAvailableGamesBet = ({
    _id,
    homeTeam,
    awayTeam,
    scheduledDate,
  }: GameDTO): JSX.Element => {
    return (
      <GameBetComponent
        key={_id}
        homeTeam={homeTeam}
        awayTeam={awayTeam}
        scheduledDate={scheduledDate}
        onChange={({ homeScore, awayScore }) =>
          onAddBet({ gameId: _id as string, homeScore, awayScore })
        }
      />
    );
  };

  const renderUserGameBets = (gameBet: GameBet): JSX.Element => {
    return <GameBetPreview key={gameBet._id} gameBet={gameBet} />;
  };

  const renderUserFinishedBets = (gameBet: GameBet): JSX.Element => {
    return <GameBetFinished key={gameBet._id} gameBet={gameBet} />;
  };

  return (
    <Page>
      <button type="button" onClick={logout}>
        Logout
      </button>
      <br />
      <button disabled={isLoading} type="button" onClick={createBets}>
        Postaw zakłady!
      </button>
      <br />
      <BetWrapper>
        <Header>Postawione zakłady</Header>
        {userBets.map(renderUserGameBets)}
      </BetWrapper>
      <BetWrapper>
        <Header>Dostępne zakłady</Header>
        {availableGameBets.map(renderAvailableGamesBet)}
      </BetWrapper>
      <BetWrapper>
        <Header>Zakończone zakłady</Header>
        {finishedGameBets.map(renderUserFinishedBets)}
      </BetWrapper>
    </Page>
  );
};
