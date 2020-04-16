import React from 'react';
import {compose} from 'redux';
import {Form, Formik} from "formik";
import {withRouter} from "react-router";
import {FormattedMessage, injectIntl} from "react-intl";
import {Button, Layout, message} from "antd";
import {withMailInvitationSignupApi} from "./withMailInvitationSignup";
import {TileFormWrapper} from "../../compontents/TileForm/components/TileFormWrapper/TileFormWrapper";
import {FieldWrapper} from "../../compontents/FieldWrapper/FieldWrapper";
import * as FormField from "../../compontents/FormField";
import * as Yup from "yup";
import {Loader} from "../../compontents/Loader/Loader";
import {TileFormTitle} from "../../compontents/TileForm/components/TileFormTitle/TileFormTitle";
import './MailInvitationSignup.scss';

class MailInvitationSignupComponent extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            email: null,
            token: null
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        const {token} = this.props.match.params;
        console.log(token);
        this.props.validateInvitationToken(token).then(result => {
            if (result && result.status === 500) {
                return this.props.history.push("/invalid-signup-token");
            }

            this.setState({
                email: result.data.email,
                token
            });
        });
    }

    getTranslation(id, values) {
        return this.props.intl.formatMessage({id}, {...values})
    }

    get schema() {
        return Yup.object({
            email: Yup.string(),
            password: Yup.string()
                .ensure()
                .trim()
                .required(this.getTranslation("validation.password.required"))
                .matches(/^(?=.*[A-Z])(?=.*\d).*[\s\S]{8,}$/, this.getTranslation("validation.password.secure"))
        });
    }

    onSubmit({password}) {
        this.setState({isLoading: true});
        this.props.signup({
            token: this.state.token,
            password
        }).then(result => {
            if (result && result.status === 409) {
                this.setState({isLoading: false});
                return message.error(this.getTranslation('mailInvitationSignup.error.userAlreadyExist'));
            }

            if (result && result.data) {
                message.success(this.getTranslation('mailInvitationSignup.success'));
                return this.props.history.push('/dashboard')
            }
        })
    }

    render() {
        const {email, isLoading} = this.state;
        return <Layout className='mail-invitation-signup__layout'>
            {!email && <Loader/>}
            {email && <React.Fragment>
                <TileFormWrapper>
                    <FormattedMessage id='mailInvitationSignup.header'>
                        {translation => <TileFormTitle>{translation}</TileFormTitle>}
                    </FormattedMessage>
                    <Formik
                        validationSchema={this.schema}
                        initialValues={{email, password: ""}}
                        onSubmit={this.onSubmit}>
                        {() => <Form>
                            <FieldWrapper
                                name="email"
                                label={this.getTranslation("fields.email")}
                                component={FormField.Input}
                                disabled={true}
                            />
                            <FieldWrapper
                                type="password"
                                name="password"
                                autoComplete="current-password"
                                label={this.getTranslation("fields.password")}
                                component={FormField.Input}
                            />
                            <div className='mail-invitation-signup__submit'>
                                <Button disabled={isLoading} htmlType='submit'>
                                    <FormattedMessage id='cta.signup'/>
                                </Button>
                            </div>
                        </Form>
                        }
                    </Formik>
                </TileFormWrapper>
            </React.Fragment>}
        </Layout>;
    }
}

export const MailInvitationSignup = compose(
    withRouter,
    withMailInvitationSignupApi,
    injectIntl
)(MailInvitationSignupComponent);
