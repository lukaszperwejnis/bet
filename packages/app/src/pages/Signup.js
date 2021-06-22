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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Signup = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const formik_1 = require("formik");
const react_intl_1 = require("react-intl");
const Yup = __importStar(require("yup"));
const _hooks_1 = require("@hooks");
const _services_1 = require("@services");
const _components_1 = require("@components");
const ui_components_1 = require("@bet/ui-components");
const _schemas_1 = require("@schemas");
const actions_1 = require("@stores/actions");
const auth_actions_1 = require("@stores/actions/auth.actions");
const formInitialValues = { password: '', confirmedPassword: '' };
const Signup = () => {
    const dispatch = react_redux_1.useDispatch();
    const { query } = _hooks_1.useRouter();
    const { isLoading, hasInvalidToken } = react_redux_1.useSelector((store) => store.auth);
    const translate = _hooks_1.useTranslation();
    const { token, email } = query;
    react_1.useEffect(() => {
        if (_services_1.tokenService.isTokenInvalid(token)) {
            dispatch(auth_actions_1.invalidTokenSignup());
        }
    }, []);
    const schema = Yup.object({
        password: _schemas_1.passwordSchema,
        confirmedPassword: _schemas_1.confirmedPasswordSchema,
    });
    const onSubmit = ({ password }) => {
        dispatch(actions_1.signup({ token, password }));
    };
    if (hasInvalidToken) {
        return jsx_runtime_1.jsx(_components_1.InvalidTokenPage, {}, void 0);
    }
    return (jsx_runtime_1.jsx(_components_1.Page, Object.assign({ centered: true }, { children: jsx_runtime_1.jsx(_components_1.PageTile, Object.assign({ header: jsx_runtime_1.jsx(react_intl_1.FormattedMessage, { id: "signup.header" }, void 0), isLoading: isLoading }, { children: jsx_runtime_1.jsx(formik_1.Formik, Object.assign({ validationSchema: schema, initialValues: formInitialValues, onSubmit: onSubmit }, { children: jsx_runtime_1.jsxs(_components_1.StyledForm, { children: [jsx_runtime_1.jsxs(ui_components_1.FormComponents.Wrapper, { children: [jsx_runtime_1.jsx(ui_components_1.FormComponents.Label, { children: jsx_runtime_1.jsx(react_intl_1.FormattedMessage, { id: "fields.email" }, void 0) }, void 0),
                                jsx_runtime_1.jsx(ui_components_1.Input, { disabled: true, placeholder: translate('fields.email'), value: email }, void 0)] }, void 0),
                        jsx_runtime_1.jsx(ui_components_1.FormField.Input, { label: translate('fields.password'), name: "password", placeholder: translate('fields.password'), type: "password" }, void 0),
                        jsx_runtime_1.jsx(ui_components_1.FormField.Input, { label: translate('fields.confirmedPassword'), name: "confirmedPassword", placeholder: translate('fields.confirmedPassword'), type: "password" }, void 0),
                        jsx_runtime_1.jsx(_components_1.Submit, Object.assign({ disabled: isLoading }, { children: jsx_runtime_1.jsx(react_intl_1.FormattedMessage, { id: "signup.submit" }, void 0) }), void 0)] }, void 0) }), void 0) }), void 0) }), void 0));
};
exports.Signup = Signup;
