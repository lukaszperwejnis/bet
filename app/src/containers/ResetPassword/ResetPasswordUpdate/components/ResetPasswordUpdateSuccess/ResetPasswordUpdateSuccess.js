import React from 'react';
import './ResetPasswordUpdateSuccess.scss';
import {FormattedMessage} from "react-intl";
import {Button} from "antd";
import {withRouter} from "react-router";

export const ResetPasswordUpdateSuccess = withRouter(({history}) => {
    const redirectToLogin = () => history.push('/login');
    return <div className='reset-password-update-success'>
        <FormattedMessage id='resetPassword.update.success'>
            {translation =>
                <div className='reset-password-update-success__description'>
                    {translation}
                </div>
            }
        </FormattedMessage>
        <div className='reset-password-update-success__redirect'>
            <Button onClick={redirectToLogin}>
                <FormattedMessage id='cta.goToLogin'/>
            </Button>
        </div>
    </div>;
});
