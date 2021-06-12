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
import { AppUrls } from '@config';
import { useTranslation } from '@hooks';
import { login } from '@stores/actions';
import { emailSchema, getRequiredStringSchema } from '@schemas';
import { FormField } from '@bet/ui-components';
import { Page, PageTile, StyledForm, Submit } from '@components';
import { PasswordRestLink, Error } from './styles';
const formInitialsValues = { email: '', password: '' };
export const Login = () => {
    const dispatch = useDispatch();
    const translate = useTranslation();
    const { isLoading, error } = useSelector((store) => store.auth);
    const schema = Yup.object({
        email: emailSchema,
        password: getRequiredStringSchema(translate('validation.password.required')),
    });
    const onSubmit = (values) => __awaiter(void 0, void 0, void 0, function* () {
        dispatch(login(values));
    });
    return (_jsx(Page, Object.assign({ centered: true }, { children: _jsxs(PageTile, Object.assign({ header: _jsx(FormattedMessage, { id: "login.header" }, void 0), isLoading: isLoading }, { children: [_jsx(Formik, Object.assign({ validationSchema: schema, initialValues: formInitialsValues, onSubmit: onSubmit }, { children: _jsxs(StyledForm, { children: [_jsx(FormField.Input, { name: "email", placeholder: translate('fields.email') }, void 0),
                            _jsx(FormField.Input, { name: "password", placeholder: translate('fields.password'), type: "password" }, void 0),
                            _jsx(_Fragment, { children: error && _jsx(Error, { children: error }, void 0) }, void 0), isLoading, _jsx(Submit, Object.assign({ disabled: isLoading }, { children: _jsx(FormattedMessage, { id: "login.submit" }, void 0) }), void 0)] }, void 0) }), void 0),
                _jsx(PasswordRestLink, Object.assign({ to: AppUrls.RESET_PASSWORD.pattern }, { children: _jsx("div", { children: _jsx(FormattedMessage, { id: "login.forgotPassword" }, void 0) }, void 0) }), void 0)] }), void 0) }), void 0));
};
