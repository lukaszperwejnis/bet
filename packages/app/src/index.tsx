import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { RawIntlProvider } from 'react-intl';
import { rootStore } from '@stores/index';
import { MessageTracker } from '@pages';
import { intl } from '@utils';
import { Routes } from './routes/routes';

const App = (): JSX.Element => (
  <RawIntlProvider value={intl}>
    <Provider store={rootStore}>
      <Routes />
      <MessageTracker />
    </Provider>
  </RawIntlProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
