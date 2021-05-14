import React, { ReactElement, useState } from 'react';
import { Form, Formik } from 'formik';
import { FormattedMessage } from 'react-intl';
import * as Yup from 'yup';
import { userService } from '@services';
import { useTranslation } from '@hooks';
import { Page, PageTile, Submit } from '../../components';
import { FormField } from '../../components/ui-components/components';

export const ResetPassword = (): ReactElement => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const translate = useTranslation();

  const schema = Yup.object({
    email: Yup.string()
      .email(translate('validation.email.syntax'))
      .required(translate('validation.email.required')),
  });

  const onSubmit = async ({ email }: { email: string }): Promise<void> => {
    // setIsLoading(true);
    //
    // const { status } = await userService.startResetPassword(email);
    //
    // setIsLoading(false);
    //
    // if (status === 422) {
    //   messageActions.error(translate('resetPassword.error.emailNotFound'));
    //   return;
    // }
    //
    // if (status === 200) {
    //   setIsSuccess(true);
    // }
  };

  const ResetPasswordForm = (): ReactElement => (
    <Formik
      validationSchema={schema}
      initialValues={{ email: '' }}
      onSubmit={onSubmit}
    >
      <Form>
        <FormField.Input name="email" placeholder={translate('fields.email')} />
        <Submit disabled={isLoading}>
          <FormattedMessage id="resetPassword.cta.submit" />
        </Submit>
      </Form>
    </Formik>
  );

  const SuccessInfo = (): ReactElement => (
    <FormattedMessage id="resetPassword.success" />
  );

  return (
    <Page centered>
      <PageTile header={<FormattedMessage id="resetPassword.header" />}>
        {isSuccess ? <SuccessInfo /> : <ResetPasswordForm />}
      </PageTile>
    </Page>
  );
};
