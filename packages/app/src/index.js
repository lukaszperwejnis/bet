import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { RawIntlProvider } from 'react-intl';
import { rootStore } from '@stores/index';
import { MessageTracker } from '@pages';
import { intl } from '@utils';
import { Routes } from './routes/routes';
const App = () => (_jsx(RawIntlProvider, Object.assign({ value: intl }, { children: _jsxs(Provider, Object.assign({ store: rootStore }, { children: [_jsx(Routes, {}, void 0),
            _jsx(MessageTracker, {}, void 0)] }), void 0) }), void 0));
ReactDOM.render(_jsx(App, {}, void 0), document.getElementById('root'));
