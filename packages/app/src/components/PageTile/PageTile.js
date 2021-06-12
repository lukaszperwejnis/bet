import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Loader } from '@bet/ui-components';
import { Description, Header, StyledTile } from './styles';
export const PageTile = ({ header, children, isLoading, }) => (_jsxs(StyledTile, Object.assign({ isLoading: isLoading }, { children: [_jsx(_Fragment, { children: header && _jsx(Header, { children: header }, void 0) }, void 0),
        _jsx(Description, { children: children }, void 0),
        _jsx(_Fragment, { children: isLoading && _jsx(Loader, {}, void 0) }, void 0)] }), void 0));
