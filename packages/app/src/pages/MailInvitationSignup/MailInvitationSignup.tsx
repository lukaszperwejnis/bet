import React, { ReactElement, useState } from 'react';
import { Form, Formik } from 'formik';
import { FormattedMessage } from 'react-intl';
import * as Yup from 'yup';
import { useRouter, useTranslation } from '@hooks';
import { tokenService, userService } from '@services';
import { InvalidTokenPage, Page, Submit } from '../../components';
import {
  Tile,
  FormField,
  Input,
  FormComponents,
} from '../../components/ui-components/components';

type FormValues = {
  password: string;
  confirmedPassword: string;
};

type QueryValues = {
  token: string;
  email: string;
};

export const MailInvitationSignup = (): ReactElement => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const translate = useTranslation();
  const { token, email } = router.query as QueryValues;
  const [hasInvalidToken, setHasInvalidToken] = useState<boolean>(
    tokenService.isTokenInvalid(token),
  );

  const schema = Yup.object({
    password: Yup.string()
      .ensure()
      .trim()
      .required(translate('validation.password.required'))
      .matches(
        /^(?=.*[A-Z])(?=.*\d).*[\s\S]{4,}$/,
        translate('validation.password.secure'),
      )
      .test(
        'is-equal-to-password',
        translate('validation.passwordAreNotEqual'),
        function yupPasswordCustomValidation() {
          // eslint-disable-next-line react/no-this-in-sfc
          const { password, confirmedPassword } = this.parent;
          if (!confirmedPassword.length) {
            return true;
          }

          return password === confirmedPassword;
        },
      ),
    confirmedPassword: Yup.string()
      .ensure()
      .trim()
      .required(translate('validation.confirmedPassword.required'))
      .test(
        'is-equal-to-password',
        translate('validation.passwordAreNotEqual'),
        function yupConfirmedPasswordCustomValidation() {
          // eslint-disable-next-line react/no-this-in-sfc
          const { password, confirmedPassword } = this.parent;
          if (!password.length) {
            return true;
          }

          return password === confirmedPassword;
        },
      ),
  });

  const onSubmit = ({ password }: FormValues) => {
    setIsLoading(true);

    // todo userType
    // userService
    //   .signup(token, password)
    //   .then(
    //     (result: {
    //       status: number;
    //       message: string;
    //       user: Record<string, unknown>;
    //     }) => {
    //       setIsLoading(false);
    //
    //       switch (result.status) {
    //         case 500:
    //           messageActions.error(
    //             translate('mailInvitationSignup.error.invalidToken'),
    //           );
    //           setHasInvalidToken(true);
    //           return;
    //         case 409:
    //           messageActions.error(
    //             translate('mailInvitationSignup.error.userAlreadyExist'),
    //           );
    //           return;
    //         case 201:
    //           messageActions.success(
    //             translate('mailInvitationSignup.success'),
    //             5,
    //           );
    //           router.push(URLS.LOGIN());
    //       }
    //     },
    //   );
  };

  if (hasInvalidToken) {
    return <InvalidTokenPage />;
  }

  return (
    <Page centered>
      <Tile>
        <Formik
          validationSchema={schema}
          initialValues={{ password: '', confirmedPassword: '' }}
          onSubmit={onSubmit}
        >
          <Form>
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
              label={translate('fields.confirmed-password')}
              name="confirmedPassword"
              placeholder={translate('fields.confirmed-password')}
              type="password"
            />
            <Submit disabled={isLoading}>
              <FormattedMessage id="mailInvitationSignup.submit" />
            </Submit>
          </Form>
        </Formik>
      </Tile>
    </Page>
  );
};
