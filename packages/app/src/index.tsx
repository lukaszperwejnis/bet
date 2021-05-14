import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { rootStore } from '@stores/index';
import { MessageTracker } from '@pages';
import { pl } from './locales/pl';
import { Routes } from './routes/routes';

const App = (): JSX.Element => (
  <IntlProvider locale="pl" messages={pl}>
    <Provider store={rootStore}>
      <Routes />
      <MessageTracker />
    </Provider>
  </IntlProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
