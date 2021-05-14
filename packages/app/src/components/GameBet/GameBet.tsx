import React, { useState } from 'react';
import { TeamWrapper, Wrapper } from './styles';

type GameBetProps = {
  gameId: string;
  homeTeamName: any;
  awayTeamName: any;
  onChange: (data: {
    homeTeamScore: number;
    awayTeamScore: number;
    gameId: string;
  }) => void;
};

export const GameBet = ({
  gameId,
  homeTeamName,
  awayTeamName,
  onChange,
}: GameBetProps) => {
  const [homeTeamScore, setHomeTeamScore] = useState<number>(0);
  const [awayTeamScore, setAwayTeamScore] = useState<number>(0);

  const onHomeTeamScoreChange = (event: any) => {
    event.persist();
    setHomeTeamScore(event.target.value);
  };

  const onAwayTeamScoreChange = (event: any) => {
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

  return (
    <Wrapper>
      <Team name={homeTeamName} onChange={onHomeTeamScoreChange} />
      <Team name={awayTeamName} onChange={onAwayTeamScoreChange} />
      <button type="button" onClick={onAddBet}>
        Postaw zakład
      </button>
    </Wrapper>
  );
};

const Team = ({ name, onChange }: any) => (
  <TeamWrapper>
    {name} <input onChange={onChange} type="number" />
  </TeamWrapper>
);
