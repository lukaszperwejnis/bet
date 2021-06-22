"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const formik_1 = require("formik");
const react_redux_1 = require("react-redux");
const Yup = __importStar(require("yup"));
const react_intl_1 = require("react-intl");
const _config_1 = require("@config");
const _hooks_1 = require("@hooks");
const actions_1 = require("@stores/actions");
const _schemas_1 = require("@schemas");
const ui_components_1 = require("@bet/ui-components");
const _components_1 = require("@components");
const styles_1 = require("./styles");
const formInitialsValues = { email: '', password: '' };
const Login = () => {
    const dispatch = react_redux_1.useDispatch();
    const translate = _hooks_1.useTranslation();
    const { isLoading, error } = react_redux_1.useSelector((store) => store.auth);
    const schema = Yup.object({
        email: _schemas_1.emailSchema,
        password: _schemas_1.getRequiredStringSchema(translate('validation.password.required')),
    });
    const onSubmit = (values) => __awaiter(void 0, void 0, void 0, function* () {
        dispatch(actions_1.login(values));
    });
    return (jsx_runtime_1.jsx(_components_1.Page, Object.assign({ centered: true }, { children: jsx_runtime_1.jsxs(_components_1.PageTile, Object.assign({ header: jsx_runtime_1.jsx(react_intl_1.FormattedMessage, { id: "login.header" }, void 0), isLoading: isLoading }, { children: [jsx_runtime_1.jsx(formik_1.Formik, Object.assign({ validationSchema: schema, initialValues: formInitialsValues, onSubmit: onSubmit }, { children: jsx_runtime_1.jsxs(_components_1.StyledForm, { children: [jsx_runtime_1.jsx(ui_components_1.FormField.Input, { name: "email", placeholder: translate('fields.email') }, void 0),
                            jsx_runtime_1.jsx(ui_components_1.FormField.Input, { name: "password", placeholder: translate('fields.password'), type: "password" }, void 0),
                            jsx_runtime_1.jsx(jsx_runtime_1.Fragment, { children: error && jsx_runtime_1.jsx(styles_1.Error, { children: error }, void 0) }, void 0), isLoading, jsx_runtime_1.jsx(_components_1.Submit, Object.assign({ disabled: isLoading }, { children: jsx_runtime_1.jsx(react_intl_1.FormattedMessage, { id: "login.submit" }, void 0) }), void 0)] }, void 0) }), void 0),
                jsx_runtime_1.jsx(styles_1.PasswordRestLink, Object.assign({ to: _config_1.AppUrls.RESET_PASSWORD.pattern }, { children: jsx_runtime_1.jsx("div", { children: jsx_runtime_1.jsx(react_intl_1.FormattedMessage, { id: "login.forgotPassword" }, void 0) }, void 0) }), void 0)] }), void 0) }), void 0));
};
exports.Login = Login;
