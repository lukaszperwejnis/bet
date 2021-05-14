import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { FormattedMessage } from 'react-intl';
import { useTranslation } from '@hooks';
import { login } from '@stores/actions';
import { Page, PageTile, Submit } from '../../components';
import { FormField } from '../../components/ui-components/components';
import { PasswordRestLink } from './styles';

type FormValues = {
  email: string;
  password: string;
};

export const Login = (): JSX.Element => {
  const dispatch = useDispatch();
  const translate = useTranslation();
  const formInitialsValues: FormValues = { email: '', password: '' };

  const schema = Yup.object({
    email: Yup.string()
      .required(translate('validation.email.required'))
      .email(translate('validation.email.syntax'))
      .trim(),
    password: Yup.string()
      .required(translate('validation.password.required'))
      .trim(),
  });

  const onSubmit = async (values: FormValues) => dispatch(login(values));

  return (
    <Page centered>
      <PageTile header={<FormattedMessage id="login.header" />}>
        <Formik
          validationSchema={schema}
          initialValues={formInitialsValues}
          onSubmit={onSubmit}
        >
          <Form>
            <FormField.Input
              name="email"
              placeholder={translate('fields.email')}
            />
            <FormField.Input
              name="password"
              placeholder={translate('fields.password')}
              type="password"
            />
            <Submit>
              <FormattedMessage id="login.submit" />
            </Submit>
          </Form>
        </Formik>
        <PasswordRestLink to="/reset-password">
          <div className="login__password-reset">
            <FormattedMessage id="login.forgotPassword" />
          </div>
        </PasswordRestLink>
      </PageTile>
    </Page>
  );
};
