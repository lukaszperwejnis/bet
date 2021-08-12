'use strict';
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.Checkbox = void 0;
const jsx_runtime_1 = require('react/jsx-runtime');
const formik_1 = require('formik');
const components_1 = require('./components');
const Checkbox_1 = require('../Checkbox/Checkbox');
const Checkbox = (_a) => {
  var { label, checked, wrapperClassName, name } = _a,
    props = __rest(_a, ['label', 'checked', 'wrapperClassName', 'name']);
  const [field] = formik_1.useField(Object.assign({ name }, props));
  return jsx_runtime_1.jsx(
    components_1.Wrapper,
    Object.assign(
      { className: wrapperClassName },
      {
        children: jsx_runtime_1.jsx(
          Checkbox_1.Checkbox,
          Object.assign(
            {
              id: field.name,
              label: label,
              name: field.name,
              value: field.value,
              onChange: field.onChange,
              onBlur: field.onBlur,
              checked: checked,
            },
            props,
          ),
          void 0,
        ),
      },
    ),
    void 0,
  );
};
exports.Checkbox = Checkbox;
