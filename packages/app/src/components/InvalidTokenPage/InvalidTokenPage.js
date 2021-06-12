import { jsx as _jsx } from "react/jsx-runtime";
import { FormattedMessage } from 'react-intl';
import { Page } from '../Page';
import { PageTile } from '..';
export const InvalidTokenPage = () => (_jsx(Page, Object.assign({ centered: true }, { children: _jsx(PageTile, Object.assign({ header: _jsx(FormattedMessage, { id: "invalidToken.header" }, void 0) }, { children: _jsx(FormattedMessage, { id: "invalidToken.description" }, void 0) }), void 0) }), void 0));
