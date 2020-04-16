import {FormattedMessage} from "react-intl";
import React from "react";
import './ResetPasswordSuccess.scss';

export const ResetPasswordSuccess = ()  => {
    return <div className='reset-password-request-success'>
        <FormattedMessage id="resetPassword.request.success">
            {translation => <div className='reset-password-request-success__description'>{translation}</div>}
        </FormattedMessage>
    </div>
};
