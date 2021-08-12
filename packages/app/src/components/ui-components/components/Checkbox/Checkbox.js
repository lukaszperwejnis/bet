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
const Checkbox_styles_1 = require('./Checkbox.styles');
function Checkbox(_a) {
  var { label, disabled, checked, title } = _a,
    props = __rest(_a, ['label', 'disabled', 'checked', 'title']);
  return jsx_runtime_1.jsxs(
    Checkbox_styles_1.Wrapper,
    Object.assign(
      { disabled: disabled },
      {
        children: [
          jsx_runtime_1.jsx(
            Checkbox_styles_1.CheckboxInput,
            Object.assign({ disabled: disabled, checked: checked }, props),
            void 0,
          ),
          jsx_runtime_1.jsx(Checkbox_styles_1.Inner, {}, void 0),
          jsx_runtime_1.jsx(
            Checkbox_styles_1.Label,
            Object.assign({ title: title }, { children: label }),
            void 0,
          ),
        ],
      },
    ),
    void 0,
  );
}
exports.Checkbox = Checkbox;
