var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { FormattedMessage } from 'react-intl';
import { useTranslation } from '@hooks';
import { login } from '@stores/actions';
import { FormField } from '@bet/ui-components';
import { AppUrls } from '@config';
import { Page, PageTile, StyledForm, Submit } from '@components';
import { useState } from 'react';
import { PasswordRestLink, Error } from './styles';
export const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const error = useSelector((store) => store.auth.error);
    const translate = useTranslation();
    const formInitialsValues = { email: '', password: '' };
    const schema = Yup.object({
        email: Yup.string()
            .required(translate('validation.email.required'))
            .email(translate('validation.email.syntax'))
            .trim(),
        password: Yup.string()
            .required(translate('validation.password.required'))
            .trim(),
    });
    const onSubmit = (values) => __awaiter(void 0, void 0, void 0, function* () {
        setIsLoading(true);
        console.log(dispatch(login(values)), 'DISPATCH');
        // setIsLoading(false);
    });
    return (_jsx(Page, Object.assign({ centered: true }, { children: _jsxs(PageTile, Object.assign({ header: _jsx(FormattedMessage, { id: "login.header" }, void 0) }, { children: [_jsx(Formik, Object.assign({ validationSchema: schema, initialValues: formInitialsValues, onSubmit: onSubmit }, { children: _jsxs(StyledForm, { children: [_jsx(FormField.Input, { name: "email", placeholder: translate('fields.email') }, void 0),
                            _jsx(FormField.Input, { name: "password", placeholder: translate('fields.password'), type: "password" }, void 0),
                            _jsx(_Fragment, { children: error && _jsx(Error, { children: error }, void 0) }, void 0),
                            _jsx(Submit, Object.assign({ disabled: isLoading }, { children: _jsx(FormattedMessage, { id: "login.submit" }, void 0) }), void 0)] }, void 0) }), void 0),
                _jsx(PasswordRestLink, Object.assign({ to: AppUrls.RESET_PASSWORD.pattern }, { children: _jsx("div", { children: _jsx(FormattedMessage, { id: "login.forgotPassword" }, void 0) }, void 0) }), void 0)] }), void 0) }), void 0));
};
