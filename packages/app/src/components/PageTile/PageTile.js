'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.PageTile = void 0;
const jsx_runtime_1 = require('react/jsx-runtime');
const ui_components_1 = require('@bet/ui-components');
const styles_1 = require('./styles');
const PageTile = ({ header, children, isLoading }) =>
  jsx_runtime_1.jsxs(
    styles_1.StyledTile,
    Object.assign(
      { isLoading: isLoading },
      {
        children: [
          jsx_runtime_1.jsx(
            jsx_runtime_1.Fragment,
            {
              children:
                header &&
                jsx_runtime_1.jsx(
                  styles_1.Header,
                  { children: header },
                  void 0,
                ),
            },
            void 0,
          ),
          jsx_runtime_1.jsx(
            styles_1.Description,
            { children: children },
            void 0,
          ),
          jsx_runtime_1.jsx(
            jsx_runtime_1.Fragment,
            {
              children:
                isLoading &&
                jsx_runtime_1.jsx(ui_components_1.Loader, {}, void 0),
            },
            void 0,
          ),
        ],
      },
    ),
    void 0,
  );
exports.PageTile = PageTile;
