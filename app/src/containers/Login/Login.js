import React from 'react';
import * as Yup from 'yup';
import {compose} from 'redux';
import {TileFormWrapper} from "../../compontents/TileForm/components/TileFormWrapper/TileFormWrapper";
import {FormattedMessage, injectIntl} from "react-intl";
import {Form, Formik} from "formik";
import {FieldWrapper} from "../../compontents/FieldWrapper/FieldWrapper";
import * as FormField from '../../compontents/FormField';
import {Button, Layout, message} from "antd";
import {withLoginApi} from "./withLoginApi";
import {TileFormTitle} from "../../compontents/TileForm/components/TileFormTitle/TileFormTitle";
import {Link} from "react-router-dom";
import './Login.scss';

class LoginComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            isLoading: false
        }
    }

    getTranslation(id, values) {
        return this.props.intl.formatMessage({id}, {...values})
    }

    get schema() {
        return Yup.object({
            email: Yup.string()
                .email(this.getTranslation("validation.email.syntax"))
                .required(this.getTranslation("validation.email.required"))
                .trim(),
            password: Yup.string()
                .required(this.getTranslation("validation.password.required"))
                .trim()
        });
    }

    onSubmit(values) {
        this.setState({
            isLoading: true
        });

        this.props.signin(values).then(result => {
            console.log({result});
            this.setState({
                isLoading: false
            });

            if (result && result.status === 401) {
                return message.error(this.getTranslation('login.error.incorrectLoginOrPassword'));
            }

            if (result && result.data) {
                return this.props.history.push('/dashboard')
            }
        });
    }

    render() {
        console.log(this.props);
        return <Layout className='login__layout'>
            <TileFormWrapper>
                <FormattedMessage id='login.header'>
                    {translation => <TileFormTitle>{translation}</TileFormTitle>}
                </FormattedMessage>
                <Formik
                    validationSchema={this.schema}
                    initialValues={{email: "", password: ""}}
                    onSubmit={this.onSubmit}>
                    {() => <Form>
                        <FieldWrapper
                            name="email"
                            label={this.getTranslation("fields.email")}
                            component={FormField.Input}
                        />
                        <FieldWrapper
                            type="password"
                            name="password"
                            autoComplete="current-password"
                            label={this.getTranslation("fields.password")}
                            component={FormField.Input}
                        />
                        <Link to='/reset-password'>
                            <div className='login__password-reset'>
                                Zapomniałeś hasła?
                            </div>
                        </Link>
                        <div className='login__submit'>
                            <Button disabled={this.state.isLoading} htmlType='submit'>
                                <FormattedMessage id='cta.login'/>
                            </Button>
                        </div>
                    </Form>
                    }
                </Formik>
            </TileFormWrapper>
        </Layout>;
    }
}

export const Login = compose(
    withLoginApi,
    injectIntl,
)(LoginComponent);
