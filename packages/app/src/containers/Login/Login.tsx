import {Form, Formik} from 'formik';
import React, {ReactElement, useState} from 'react';
import * as Yup from 'yup';
import {FormattedMessage} from 'react-intl';
import {userService} from '../../services';
import {useRouter, useTranslation} from '../../hooks';
import {URLS} from '../../routes/URLS';
import {PasswordRestLink} from './Login.styles';
import {Page, PageTile, Submit} from '../../components';
import {FormField} from '../../components/ui-components/components';
import {messageActions} from '../../redux/actions';

type FormValues = {
    email: string;
    password: string;
};

export const Login = (): ReactElement => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [translate] = useTranslation();
    const formInitialsValues: FormValues = {email: '', password: ''};

    const schema = Yup.object({
        email: Yup.string().required(translate('validation.email.required')).email(translate('validation.email.syntax')).trim(),
        password: Yup.string().required(translate('validation.password.required')).trim(),
    });

    const onSubmit = async ({email, password}: FormValues) => {
        setIsLoading(true);
        const result = await userService.login(email, password);

        console.log(result, 'result');

        if (result.status === 401 || result.message === 'Unauthorized') {
            setIsLoading(false);
            messageActions.error(translate('login.error.incorrectLoginOrPassword'));
            return;
        }

        if (!result.status && result.message === 'Failed to fetch') {
            messageActions.error(translate('login.error.internal'));
            return;
        }

        router.push(URLS.DASHBOARD());
        return;
    };

    return (
        <Page centered>
            <PageTile header={<FormattedMessage id="login.header" />}>
                <Formik validationSchema={schema} initialValues={formInitialsValues} onSubmit={onSubmit}>
                    <Form>
                        <FormField.Input name="email" placeholder={translate('fields.email')} />
                        <FormField.Input name="password" placeholder={translate('fields.password')} type="password" />
                        <Submit disabled={isLoading}>
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
