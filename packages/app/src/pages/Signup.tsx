import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { FormattedMessage } from 'react-intl';
import * as Yup from 'yup';
import { useRouter, useTranslation } from '@hooks';
import { tokenService } from '@services';
import {
  InvalidTokenPage,
  Page,
  PageTile,
  StyledForm,
  Submit,
} from '@components';
import { FormField, Input, FormComponents } from '@bet/ui-components';
import { confirmedPasswordSchema, passwordSchema } from '@schemas';
import { StoreType } from '@stores/types';
import { signup } from '@stores/actions';
import { invalidTokenSignup } from '@stores/actions/auth.actions';

type FormValues = {
  password: string;
  confirmedPassword: string;
};

type QueryValues = {
  token: string;
  email: string;
};

const formInitialValues: FormValues = { password: '', confirmedPassword: '' };

export const Signup = (): JSX.Element => {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const { isLoading, hasInvalidToken } = useSelector(
    (store: StoreType) => store.auth,
  );
  const translate = useTranslation();
  const { token, email } = query as QueryValues;

  useEffect(() => {
    if (tokenService.isTokenInvalid(token)) {
      dispatch(invalidTokenSignup());
    }
  }, []);

  const schema = Yup.object({
    password: passwordSchema,
    confirmedPassword: confirmedPasswordSchema,
  });

  const onSubmit = ({ password }: FormValues) => {
    dispatch(signup({ token, password }));
  };

  if (hasInvalidToken) {
    return <InvalidTokenPage />;
  }

  return (
    <Page centered>
      <PageTile
        header={<FormattedMessage id="signup.header" />}
        isLoading={isLoading}
      >
        <Formik
          validationSchema={schema}
          initialValues={formInitialValues}
          onSubmit={onSubmit}
        >
          <StyledForm>
            <FormComponents.Wrapper>
              <FormComponents.Label>
                <FormattedMessage id="fields.email" />
              </FormComponents.Label>
              <Input
                disabled
                placeholder={translate('fields.email')}
                value={email}
              />
            </FormComponents.Wrapper>
            <FormField.Input
              label={translate('fields.password')}
              name="password"
              placeholder={translate('fields.password')}
              type="password"
            />
            <FormField.Input
              label={translate('fields.confirmedPassword')}
              name="confirmedPassword"
              placeholder={translate('fields.confirmedPassword')}
              type="password"
            />
            <Submit disabled={isLoading}>
              <FormattedMessage id="signup.submit" />
            </Submit>
          </StyledForm>
        </Formik>
      </PageTile>
    </Page>
  );
};
