import React from 'react';
import {compose} from 'redux';
import {Button, Layout, message} from "antd";
import {Form, Formik} from "formik";
import * as Yup from "yup";
import {FormattedMessage, injectIntl} from "react-intl";
import {withResetPasswordApi} from "../withResetPasswordApi";
import {Loader} from "../../../compontents/Loader/Loader";
import {TileFormWrapper} from "../../../compontents/TileForm/components/TileFormWrapper/TileFormWrapper";
import {TileFormTitle} from "../../../compontents/TileForm/components/TileFormTitle/TileFormTitle";
import {FieldWrapper} from "../../../compontents/FieldWrapper/FieldWrapper";
import * as FormField from "../../../compontents/FormField";
import {InvalidResetPasswordToken} from "./components/InvalidResetPasswordToken/InvalidResetPasswordToken";
import {ResetPasswordUpdateSuccess} from "./components/ResetPasswordUpdateSuccess/ResetPasswordUpdateSuccess";

class ResetPasswordNewPasswordComponent extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            token: null,
            isTokenInvalid: true,
            isSuccess: false
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        const {token} = this.props.match.params;
        this.props.validateResetPasswordToken(token).then(result => {
            console.log(result);
            if (result && result.status === 500) {
                return this.setState({
                    token
                });
            }

            this.setState({
                token,
                isTokenInvalid: false,
            })
        });
    }


    getTranslation(id, values) {
        return this.props.intl.formatMessage({id}, {...values})
    }

    get schema() {
        return Yup.object({
            password: Yup.string()
                .ensure()
                .trim()
                .required(this.getTranslation("validation.password.required"))
                .matches(/^(?=.*[A-Z])(?=.*\d).*[\s\S]{8,}$/, this.getTranslation("validation.password.secure"))
        });
    }

    onSubmit({password}) {
        this.setState({
            isLoading: true
        });
        this.props.resetPassword({
            token: this.state.token,
            password
        }).then(result => {
            console.log(result);
            if (result && result.data) {
                this.setState({
                    isLoading: false,
                    isSuccess: true
                })
            }
        });
    }

    getPageContent() {
        const {token, isTokenInvalid, isSuccess, isLoading} = this.state;
        switch (true) {
            case !token:
                return <Loader/>;
            case isTokenInvalid:
                return <InvalidResetPasswordToken/>;
            case isSuccess:
                return <ResetPasswordUpdateSuccess/>;
            default:
                return <TileFormWrapper>
                    <FormattedMessage id='resetPassword.update.header'>
                        {translation => <TileFormTitle>{translation}</TileFormTitle>}
                    </FormattedMessage>
                    <Formik
                        validationSchema={this.schema}
                        initialValues={{password: ""}}
                        onSubmit={this.onSubmit}>
                        {() => <Form>
                            <FieldWrapper
                                type="password"
                                name="password"
                                autoComplete="current-password"
                                label={this.getTranslation("fields.new-password")}
                                component={FormField.Input}
                            />
                            <div className='mail-invitation-signup__submit'>
                                <Button htmlType='submit' disabled={isLoading}>
                                    <FormattedMessage id='cta.updatePassword'/>
                                </Button>
                            </div>
                        </Form>
                        }
                    </Formik>
                </TileFormWrapper>;
        }
    }

    render() {
        return <Layout className='mail-invitation-signup__layout'>
            {this.getPageContent()}
        </Layout>;
    }
}

export const ResetPasswordUpdate = compose(
    injectIntl,
    withResetPasswordApi
)(ResetPasswordNewPasswordComponent);
