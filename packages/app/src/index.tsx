import React, {ReactElement} from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import {IntlProvider} from 'react-intl';
import {pl} from './locales/pl';
import {store} from './redux/store';
import {Routes} from './routes/routes';
import {MessageTracker} from './containers/MessageTracker';

const App = (): ReactElement => (
    <IntlProvider locale="pl" messages={pl}>
        <Provider store={store}>
            <Routes />
            <MessageTracker />
        </Provider>
    </IntlProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
