import * as Yup from 'yup';
import { translate } from '@utils';
import { BetConstraints } from '@bet/structures';

export const betScoreValidationSchema = Yup.number()
  .min(
    BetConstraints.MinScoreValue,
    translate('validation.bet.score.min', {
      value: BetConstraints.MinScoreValue,
    }),
  )
  .max(
    BetConstraints.MaxScoreValue,
    translate('validation.bet.score.max', {
      value: BetConstraints.MaxScoreValue,
    }),
  )
  .required(translate('validation.bet.score.required'));
