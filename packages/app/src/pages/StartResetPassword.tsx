import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { FormattedMessage } from 'react-intl';
import * as Yup from 'yup';
import { useTranslation } from '@hooks';
import { Page, PageTile, StyledForm, Submit } from '@components';
import { FormField } from '@bet/ui-components';
import { StoreType } from '@stores/index';
import { startReset } from '@stores/actions';
import { emailSchema } from '@schemas';

type FormValues = {
  email: string;
};

const initialFormValues: FormValues = {
  email: '',
};

export const StartResetPassword = (): JSX.Element => {
  const dispatch = useDispatch();
  const translate = useTranslation();
  const { isLoading, isSuccess } = useSelector(
    (store: StoreType) => store.password,
  );

  const schema = Yup.object({
    email: emailSchema,
  });

  const onSubmit = (values: FormValues) => {
    dispatch(startReset(values));
  };

  const StartResetPasswordForm = (): JSX.Element => (
    <Formik
      validationSchema={schema}
      initialValues={initialFormValues}
      onSubmit={onSubmit}
    >
      <StyledForm>
        <FormField.Input name="email" placeholder={translate('fields.email')} />
        <Submit disabled={isLoading}>
          <FormattedMessage id="startResetPassword.cta.submit" />
        </Submit>
      </StyledForm>
    </Formik>
  );

  const SuccessInfo = (): JSX.Element => (
    <FormattedMessage id="startResetPassword.success" />
  );

  return (
    <Page centered>
      <PageTile
        header={<FormattedMessage id="startResetPassword.header" />}
        isLoading={isLoading}
      >
        {isSuccess ? <SuccessInfo /> : <StartResetPasswordForm />}
      </PageTile>
    </Page>
  );
};
