import React, { ReactElement, useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { FormattedMessage } from 'react-intl';
import { tokenService } from '@services';
import { useRouter, useTranslation } from '../../hooks';
import { InvalidTokenPage, Page, PageTile, Submit } from '../../components';
import { FormField } from '../../components/ui-components/components';

type FormValues = {
  password: string;
  confirmedPassword: string;
};

export const SetPassword = (): ReactElement => {
  const router = useRouter();
  const { token } = router.query as { token: string };
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasInvalidToken, setHasInvalidToken] = useState<boolean>(
    tokenService.isTokenInvalid(token),
  );
  const translate = useTranslation();
  console.log({ hasInvalidToken });

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
    // userService.resetPassword({ token, password }).then((result) => {
    //   setIsLoading(false);
    //
    //   console.log(result);
    //   switch (result.status) {
    //     case 500:
    //       messageActions.error(translate('setPassword.error.invalidToken'));
    //       setHasInvalidToken(true);
    //       return;
    //     case 422:
    //       messageActions.error(
    //         translate('setPassword.error.passwordIsEqualWithPrevious'),
    //       );
    //       return;
    //     case 200:
    //       messageActions.success(translate('setPassword.success'));
    //       router.push(URLS.LOGIN());
    //       return;
    //   }
    // });
  };

  if (hasInvalidToken) {
    return <InvalidTokenPage />;
  }

  return (
    <Page centered>
      <PageTile header={<FormattedMessage id="setPassword.header" />}>
        <Formik
          validationSchema={schema}
          initialValues={{ password: '', confirmedPassword: '' }}
          onSubmit={onSubmit}
        >
          <Form>
            <FormField.Input
              name="password"
              placeholder={translate('fields.password')}
              type="password"
            />
            <FormField.Input
              name="confirmedPassword"
              placeholder={translate('fields.confirmed-password')}
              type="password"
            />
            <Submit disabled={isLoading}>
              <FormattedMessage id="setPassword.cta.submit" />
            </Submit>
          </Form>
        </Formik>
      </PageTile>
    </Page>
  );
};
