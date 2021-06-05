import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { FormattedMessage } from 'react-intl';
import * as Yup from 'yup';
import { useTranslation } from '@hooks';
import { Page, PageTile, StyledForm, Submit } from '@components';
import { FormField } from '@bet/ui-components';
import { startReset } from '@stores/actions';
export const StartResetPassword = () => {
    const dispatch = useDispatch();
    const { isLoading, isSuccess } = useSelector((store) => store.password);
    const translate = useTranslation();
    const schema = Yup.object({
        email: Yup.string()
            .email(translate('validation.email.syntax'))
            .required(translate('validation.email.required')),
    });
    const onSubmit = (values) => {
        dispatch(startReset(values));
    };
    const ResetPasswordForm = () => (_jsx(Formik, Object.assign({ validationSchema: schema, initialValues: { email: '' }, onSubmit: onSubmit }, { children: _jsxs(StyledForm, { children: [_jsx(FormField.Input, { name: "email", placeholder: translate('fields.email') }, void 0),
                _jsx(Submit, Object.assign({ disabled: isLoading }, { children: _jsx(FormattedMessage, { id: "resetPassword.cta.submit" }, void 0) }), void 0)] }, void 0) }), void 0));
    const SuccessInfo = () => (_jsx(FormattedMessage, { id: "resetPassword.success" }, void 0));
    return (_jsx(Page, Object.assign({ centered: true }, { children: _jsx(PageTile, Object.assign({ header: _jsx(FormattedMessage, { id: "resetPassword.header" }, void 0) }, { children: isSuccess ? _jsx(SuccessInfo, {}, void 0) : _jsx(ResetPasswordForm, {}, void 0) }), void 0) }), void 0));
};
