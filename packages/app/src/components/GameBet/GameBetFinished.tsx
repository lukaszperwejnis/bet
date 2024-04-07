import { GameBet } from '@bet/structures';
import {
  TeamName,
  TeamNames,
  BetContainer,
  CrestWrapper,
  Crest,
  Separator,
  TeamWrapper,
  SeparatorWrapper,
  ScheduledDate,
  ScorePreview,
  ScoreWrapper,
} from './GameBet.styles';

type GameBetFinishedProps = {
  gameBet: GameBet;
};

export const GameBetFinished = ({
  gameBet,
}: GameBetFinishedProps): JSX.Element => {
  return (
    <BetContainer isValid={gameBet.hasWinner} isPreview>
      <TeamNames>
        <TeamWrapper>
          <CrestWrapper>
            <Crest src={gameBet.game.homeTeam.crest} />
          </CrestWrapper>
          <TeamName>{gameBet.game.homeTeam.name}</TeamName>
          <ScoreWrapper isFinished>
            Wynik
            <ScorePreview isPreview>{gameBet.game.homeScore}</ScorePreview>
          </ScoreWrapper>
          <ScoreWrapper isFinished>
            Typ
            <ScorePreview>{gameBet.homeScore}</ScorePreview>
          </ScoreWrapper>
        </TeamWrapper>
        <SeparatorWrapper>
          <ScheduledDate>
            {new Date(gameBet.game.scheduledDate).toLocaleString()}
          </ScheduledDate>
          <Separator />
        </SeparatorWrapper>
        <TeamWrapper>
          <CrestWrapper>
            <Crest src={gameBet.game.awayTeam.crest} />
          </CrestWrapper>
          <TeamName>{gameBet.game.awayTeam.name}</TeamName>
          <ScoreWrapper isFinished>
            Wynik
            <ScorePreview isPreview>{gameBet.game.awayScore}</ScorePreview>
          </ScoreWrapper>
          <ScoreWrapper isFinished>
            Typ
            <ScorePreview isPreview>{gameBet.awayScore}</ScorePreview>
          </ScoreWrapper>
        </TeamWrapper>
      </TeamNames>
    </BetContainer>
  );
};
