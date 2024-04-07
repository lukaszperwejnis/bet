import { useEffect } from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { FormattedMessage } from 'react-intl';
import { tokenService } from '@services';
import { useRouter, useTranslation } from '@hooks';
import {
  InvalidTokenPage,
  Page,
  PageTile,
  StyledForm,
  Submit,
} from '@components';
import { FormField } from '@bet/ui-components';
import { reset as resetPassword } from '@stores/actions';
import { StoreType } from '@stores/types';
import { passwordSchema, confirmedPasswordSchema } from '@schemas';
import { invalidTokenReset } from '@stores/actions/password.actions';

type FormValues = {
  password: string;
  confirmedPassword: string;
};

const formInitialValues: FormValues = {
  password: '',
  confirmedPassword: '',
};

export const ResetPassword = (): JSX.Element => {
  const { query } = useRouter();
  const { token } = query as { token: string };
  const { isLoading, hasInvalidToken } = useSelector(
    (store: StoreType) => store.password,
  );
  const dispatch = useDispatch();
  const translate = useTranslation();

  const schema = Yup.object({
    password: passwordSchema,
    confirmedPassword: confirmedPasswordSchema,
  });

  const onSubmit = ({ password }: FormValues) => {
    dispatch(resetPassword({ token, password }));
  };

  useEffect(() => {
    if (tokenService.isTokenInvalid(token)) {
      dispatch(invalidTokenReset());
    }
  });

  if (hasInvalidToken) {
    return <InvalidTokenPage />;
  }

  return (
    <Page centered>
      <PageTile
        header={<FormattedMessage id="resetPassword.header" />}
        isLoading={isLoading}
      >
        <Formik
          validationSchema={schema}
          initialValues={formInitialValues}
          onSubmit={onSubmit}
        >
          <StyledForm>
            <FormField.Input
              name="password"
              placeholder={translate('fields.password')}
              type="password"
            />
            <FormField.Input
              name="confirmedPassword"
              placeholder={translate('fields.confirmedPassword')}
              type="password"
            />
            <Submit disabled={isLoading}>
              <FormattedMessage id="resetPassword.cta.submit" />
            </Submit>
          </StyledForm>
        </Formik>
      </PageTile>
    </Page>
  );
};
