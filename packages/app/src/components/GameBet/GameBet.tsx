import * as Yup from 'yup';
import { Formik } from 'formik';
import { FormattedMessage } from 'react-intl';
import { betScoreValidationSchema } from '@schemas';
import { useState } from 'react';
import {
  TeamName,
  TeamNames,
  BetContainer,
  StyledForm,
  CrestWrapper,
  Crest,
  Separator,
  TeamWrapper,
  ScoreFormField,
  Submit,
  SeparatorWrapper,
  ScheduledDate,
} from './GameBet.styles';

type GameBetProps = {
  homeTeam: {
    name: string;
    crest: string;
    betScore?: number;
  };
  awayTeam: {
    name: string;
    crest: string;
    betScore?: number;
  };
  scheduledDate: string;
  onChange: (data: { homeScore: number; awayScore: number }) => void;
};

type FormValues = {
  homeScore: string | number;
  awayScore: string | number;
};

const formInitialValues: FormValues = {
  homeScore: '',
  awayScore: '',
};

export const GameBet = ({
  homeTeam,
  awayTeam,
  onChange,
  scheduledDate,
}: GameBetProps): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  const validationSchema = Yup.object({
    homeScore: betScoreValidationSchema,
    awayScore: betScoreValidationSchema,
  });

  const onSubmit = ({ homeScore, awayScore }: FormValues) => {
    onChange({
      homeScore: +homeScore,
      awayScore: +awayScore,
    });

    // setIsExpanded(false);
  };

  const handleOnClick = () => {
    // setIsExpanded(!isExpanded);
  };

  return (
    <BetContainer onClick={handleOnClick}>
      <Formik
        validationSchema={validationSchema}
        initialValues={formInitialValues}
        onSubmit={onSubmit}
        validateOnMount
      >
        {({ isValid }) => (
          <StyledForm>
            <TeamNames>
              <TeamWrapper>
                <CrestWrapper>
                  <Crest src={homeTeam.crest} />
                </CrestWrapper>
                <TeamName>{homeTeam.name}</TeamName>
                {isExpanded && (
                  <ScoreFormField name="homeScore" type="number" />
                )}
              </TeamWrapper>
              <SeparatorWrapper>
                <ScheduledDate>
                  {new Date(scheduledDate).toLocaleString()}
                </ScheduledDate>
                <Separator />
              </SeparatorWrapper>
              <TeamWrapper>
                <CrestWrapper>
                  <Crest src={awayTeam.crest} />
                </CrestWrapper>
                <TeamName>{awayTeam.name}</TeamName>
                {isExpanded && (
                  <ScoreFormField name="awayScore" type="number" />
                )}
              </TeamWrapper>
            </TeamNames>
            {isExpanded && (
              <Submit disabled={!isValid} type="submit">
                <FormattedMessage id="gameBet.cta.add" />
              </Submit>
            )}
          </StyledForm>
        )}
      </Formik>
    </BetContainer>
  );
};
