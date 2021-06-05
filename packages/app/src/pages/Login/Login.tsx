import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { FormattedMessage } from 'react-intl';
import { AppUrls } from '@config';
import { useTranslation } from '@hooks';
import { login } from '@stores/actions';
import { StoreType } from '@stores/index';
import { emailSchema, getRequiredStringSchema } from '@schemas';
import { FormField } from '@bet/ui-components';
import { Page, PageTile, StyledForm, Submit } from '@components';
import { PasswordRestLink, Error } from './styles';

type FormValues = {
  email: string;
  password: string;
};

const formInitialsValues: FormValues = { email: '', password: '' };

export const Login = (): JSX.Element => {
  const dispatch = useDispatch();
  const translate = useTranslation();
  const { isLoading, error } = useSelector((store: StoreType) => store.auth);

  const schema = Yup.object({
    email: emailSchema,
    password: getRequiredStringSchema(
      translate('validation.password.required'),
    ),
  });

  const onSubmit = async (values: FormValues) => {
    dispatch(login(values));
  };

  return (
    <Page centered>
      <PageTile
        header={<FormattedMessage id="login.header" />}
        isLoading={isLoading}
      >
        <Formik
          validationSchema={schema}
          initialValues={formInitialsValues}
          onSubmit={onSubmit}
        >
          <StyledForm>
            <FormField.Input
              name="email"
              placeholder={translate('fields.email')}
            />
            <FormField.Input
              name="password"
              placeholder={translate('fields.password')}
              type="password"
            />
            <>{error && <Error>{error}</Error>}</>
            {isLoading}
            <Submit disabled={isLoading}>
              <FormattedMessage id="login.submit" />
            </Submit>
          </StyledForm>
        </Formik>
        <PasswordRestLink to={AppUrls.RESET_PASSWORD.pattern}>
          <div>
            <FormattedMessage id="login.forgotPassword" />
          </div>
        </PasswordRestLink>
      </PageTile>
    </Page>
  );
};
