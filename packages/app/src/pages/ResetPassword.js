import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { FormattedMessage } from 'react-intl';
import { tokenService } from '@services';
import { useRouter, useTranslation } from '@hooks';
import { InvalidTokenPage, Page, PageTile, StyledForm, Submit, } from '@components';
import { FormField } from '@bet/ui-components';
import { reset as resetPassword } from '@stores/actions';
import { passwordSchema, confirmedPasswordSchema } from '@schemas';
import { invalidTokenReset } from '@stores/actions/password.actions';
const formInitialValues = {
    password: '',
    confirmedPassword: '',
};
export const ResetPassword = () => {
    const { query } = useRouter();
    const { token } = query;
    const { isLoading, hasInvalidToken } = useSelector((store) => store.password);
    const dispatch = useDispatch();
    const translate = useTranslation();
    const schema = Yup.object({
        password: passwordSchema,
        confirmedPassword: confirmedPasswordSchema,
    });
    const onSubmit = ({ password }) => {
        dispatch(resetPassword({ token, password }));
    };
    useEffect(() => {
        if (tokenService.isTokenInvalid(token)) {
            dispatch(invalidTokenReset());
        }
    });
    if (hasInvalidToken) {
        return _jsx(InvalidTokenPage, {}, void 0);
    }
    return (_jsx(Page, Object.assign({ centered: true }, { children: _jsx(PageTile, Object.assign({ header: _jsx(FormattedMessage, { id: "resetPassword.header" }, void 0), isLoading: isLoading }, { children: _jsx(Formik, Object.assign({ validationSchema: schema, initialValues: formInitialValues, onSubmit: onSubmit }, { children: _jsxs(StyledForm, { children: [_jsx(FormField.Input, { name: "password", placeholder: translate('fields.password'), type: "password" }, void 0),
                        _jsx(FormField.Input, { name: "confirmedPassword", placeholder: translate('fields.confirmedPassword'), type: "password" }, void 0),
                        _jsx(Submit, Object.assign({ disabled: isLoading }, { children: _jsx(FormattedMessage, { id: "resetPassword.cta.submit" }, void 0) }), void 0)] }, void 0) }), void 0) }), void 0) }), void 0));
};
