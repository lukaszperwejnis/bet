import * as Yup from 'yup';
import { translate } from '@utils';
export const getRequiredStringSchema = (requiredMessage) => Yup.string()
    .required(requiredMessage || translate('validation.field.required'))
    .trim();
