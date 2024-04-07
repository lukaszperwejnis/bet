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

type GameBetPropsPreview = {
  gameBet: GameBet;
};

export const GameBetPreview = ({
  gameBet,
}: GameBetPropsPreview): JSX.Element => {
  return (
    <BetContainer isPreview>
      <TeamNames>
        <TeamWrapper>
          <CrestWrapper>
            <Crest src={gameBet.game.homeTeam.crest} />
          </CrestWrapper>
          <TeamName>{gameBet.game.homeTeam.name}</TeamName>
          <ScoreWrapper>
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
          <ScoreWrapper>
            <ScorePreview>{gameBet.awayScore}</ScorePreview>
          </ScoreWrapper>
        </TeamWrapper>
      </TeamNames>
    </BetContainer>
  );
};
