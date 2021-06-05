import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Header, StyledTile } from './PageTile.styles';
export const PageTile = ({ header, children }) => (_jsxs(StyledTile, { children: [_jsx(_Fragment, { children: header && _jsx(Header, { children: header }, void 0) }, void 0), children] }, void 0));
