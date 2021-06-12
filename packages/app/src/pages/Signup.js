import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { FormattedMessage } from 'react-intl';
import * as Yup from 'yup';
import { useRouter, useTranslation } from '@hooks';
import { tokenService } from '@services';
import { InvalidTokenPage, Page, PageTile, StyledForm, Submit, } from '@components';
import { FormField, Input, FormComponents } from '@bet/ui-components';
import { confirmedPasswordSchema, passwordSchema } from '@schemas';
import { signup } from '@stores/actions';
import { invalidTokenSignup } from '@stores/actions/auth.actions';
const formInitialValues = { password: '', confirmedPassword: '' };
export const Signup = () => {
    const dispatch = useDispatch();
    const { query } = useRouter();
    const { isLoading, hasInvalidToken } = useSelector((store) => store.auth);
    const translate = useTranslation();
    const { token, email } = query;
    useEffect(() => {
        if (tokenService.isTokenInvalid(token)) {
            dispatch(invalidTokenSignup());
        }
    }, []);
    const schema = Yup.object({
        password: passwordSchema,
        confirmedPassword: confirmedPasswordSchema,
    });
    const onSubmit = ({ password }) => {
        dispatch(signup({ token, password }));
    };
    if (hasInvalidToken) {
        return _jsx(InvalidTokenPage, {}, void 0);
    }
    return (_jsx(Page, Object.assign({ centered: true }, { children: _jsx(PageTile, Object.assign({ header: _jsx(FormattedMessage, { id: "signup.header" }, void 0), isLoading: isLoading }, { children: _jsx(Formik, Object.assign({ validationSchema: schema, initialValues: formInitialValues, onSubmit: onSubmit }, { children: _jsxs(StyledForm, { children: [_jsxs(FormComponents.Wrapper, { children: [_jsx(FormComponents.Label, { children: _jsx(FormattedMessage, { id: "fields.email" }, void 0) }, void 0),
                                _jsx(Input, { disabled: true, placeholder: translate('fields.email'), value: email }, void 0)] }, void 0),
                        _jsx(FormField.Input, { label: translate('fields.password'), name: "password", placeholder: translate('fields.password'), type: "password" }, void 0),
                        _jsx(FormField.Input, { label: translate('fields.confirmedPassword'), name: "confirmedPassword", placeholder: translate('fields.confirmedPassword'), type: "password" }, void 0),
                        _jsx(Submit, Object.assign({ disabled: isLoading }, { children: _jsx(FormattedMessage, { id: "signup.submit" }, void 0) }), void 0)] }, void 0) }), void 0) }), void 0) }), void 0));
};
