import React from 'react';
import {FormattedMessage} from "react-intl";
import './InvalidResetPasswordToken.scss';

export const InvalidResetPasswordToken = () => {
    return <div className='invalid-reset-password-token'>
        <FormattedMessage id='resetPassword.update.token.expired'>
            {translation =>
                <div className='invalid-reset-password-token__description'>
                    {translation}
                </div>
            }
        </FormattedMessage>
    </div>;
};
