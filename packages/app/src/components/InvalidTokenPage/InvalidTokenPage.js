'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.InvalidTokenPage = void 0;
const jsx_runtime_1 = require('react/jsx-runtime');
const react_intl_1 = require('react-intl');
const Page_1 = require('../Page');
const __1 = require('..');
const InvalidTokenPage = () =>
  jsx_runtime_1.jsx(
    Page_1.Page,
    Object.assign(
      { centered: true },
      {
        children: jsx_runtime_1.jsx(
          __1.PageTile,
          Object.assign(
            {
              header: jsx_runtime_1.jsx(
                react_intl_1.FormattedMessage,
                { id: 'invalidToken.header' },
                void 0,
              ),
            },
            {
              children: jsx_runtime_1.jsx(
                react_intl_1.FormattedMessage,
                { id: 'invalidToken.description' },
                void 0,
              ),
            },
          ),
          void 0,
        ),
      },
    ),
    void 0,
  );
exports.InvalidTokenPage = InvalidTokenPage;
