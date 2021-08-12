'use strict';
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k];
          },
        });
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v });
      }
    : function (o, v) {
        o['default'] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.StartResetPassword = void 0;
const jsx_runtime_1 = require('react/jsx-runtime');
const react_redux_1 = require('react-redux');
const formik_1 = require('formik');
const react_intl_1 = require('react-intl');
const Yup = __importStar(require('yup'));
const _hooks_1 = require('@hooks');
const _components_1 = require('@components');
const ui_components_1 = require('@bet/ui-components');
const actions_1 = require('@stores/actions');
const _schemas_1 = require('@schemas');
const initialFormValues = {
  email: '',
};
const StartResetPassword = () => {
  const dispatch = react_redux_1.useDispatch();
  const translate = _hooks_1.useTranslation();
  const { isLoading, isSuccess } = react_redux_1.useSelector(
    (store) => store.password,
  );
  const schema = Yup.object({
    email: _schemas_1.emailSchema,
  });
  const onSubmit = (values) => {
    dispatch(actions_1.startReset(values));
  };
  const StartResetPasswordForm = () =>
    jsx_runtime_1.jsx(
      formik_1.Formik,
      Object.assign(
        {
          validationSchema: schema,
          initialValues: initialFormValues,
          onSubmit: onSubmit,
        },
        {
          children: jsx_runtime_1.jsxs(
            _components_1.StyledForm,
            {
              children: [
                jsx_runtime_1.jsx(
                  ui_components_1.FormField.Input,
                  { name: 'email', placeholder: translate('fields.email') },
                  void 0,
                ),
                jsx_runtime_1.jsx(
                  _components_1.Submit,
                  Object.assign(
                    { disabled: isLoading },
                    {
                      children: jsx_runtime_1.jsx(
                        react_intl_1.FormattedMessage,
                        { id: 'startResetPassword.cta.submit' },
                        void 0,
                      ),
                    },
                  ),
                  void 0,
                ),
              ],
            },
            void 0,
          ),
        },
      ),
      void 0,
    );
  const SuccessInfo = () =>
    jsx_runtime_1.jsx(
      react_intl_1.FormattedMessage,
      { id: 'startResetPassword.success' },
      void 0,
    );
  return jsx_runtime_1.jsx(
    _components_1.Page,
    Object.assign(
      { centered: true },
      {
        children: jsx_runtime_1.jsx(
          _components_1.PageTile,
          Object.assign(
            {
              header: jsx_runtime_1.jsx(
                react_intl_1.FormattedMessage,
                { id: 'startResetPassword.header' },
                void 0,
              ),
              isLoading: isLoading,
            },
            {
              children: isSuccess
                ? jsx_runtime_1.jsx(SuccessInfo, {}, void 0)
                : jsx_runtime_1.jsx(StartResetPasswordForm, {}, void 0),
            },
          ),
          void 0,
        ),
      },
    ),
    void 0,
  );
};
exports.StartResetPassword = StartResetPassword;
