import React from 'react';
import {compose} from 'redux';
import {Button, Layout, message} from "antd";
import * as Yup from "yup";
import {Form, Formik} from "formik";
import {FormattedMessage, injectIntl} from "react-intl";
import {withResetPasswordApi} from "../withResetPasswordApi";
import {TileFormWrapper} from "../../../compontents/TileForm/components/TileFormWrapper/TileFormWrapper";
import {TileFormTitle} from "../../../compontents/TileForm/components/TileFormTitle/TileFormTitle";
import {FieldWrapper} from "../../../compontents/FieldWrapper/FieldWrapper";
import * as FormField from "../../../compontents/FormField";
import {ResetPasswordSuccess} from "./components/ResetPasswordRequestSuccess/ResetPasswordSuccess";
import './ResetPasswordRequest.scss';

class ResetPasswordRequestComponent extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            isSuccess: false
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    getTranslation(id, values) {
        return this.props.intl.formatMessage({id}, {...values})
    }

    get schema() {
        return Yup.object({
            email: Yup.string()
                .email(this.getTranslation("validation.email.syntax"))
                .required(this.getTranslation("validation.email.required"))
        });
    }

    onSubmit(values) {
        this.setState({
            isLoading: true
        });
        this.props.sendResetPasswordEmail(values).then(result => {
            if (result && result.status === 500) {
                this.setState({
                    isLoading: false,
                });

                return message.error(this.getTranslation('resetPassword.request.error.emailNotFound'));
            }

            return this.setState({
                isLoading: false,
                isSuccess: true
            });
        });
    }

    render() {
        return <Layout className='reset-password-request__layout'>
            {this.state.isSuccess && <ResetPasswordSuccess/>}
            {!this.state.isSuccess && <TileFormWrapper>
                <FormattedMessage id='resetPassword.request.header'>
                    {translation => <TileFormTitle>{translation}</TileFormTitle>}
                </FormattedMessage>
                <Formik
                    validationSchema={this.schema}
                    initialValues={{email: ''}}
                    onSubmit={this.onSubmit}>
                    {() => <Form>
                        <FieldWrapper
                            name="email"
                            label={this.getTranslation("fields.email")}
                            component={FormField.Input}
                        />
                        <div className='reset-password-request__submit'>
                            <Button htmlType='submit' disabled={this.state.isLoading}>
                                <FormattedMessage id='cta.resetPassword'/>
                            </Button>
                        </div>
                    </Form>
                    }
                </Formik>
            </TileFormWrapper>}
        </Layout>
    }
}

export const ResetPasswordRequest = compose(
    injectIntl,
    withResetPasswordApi
)(ResetPasswordRequestComponent);
