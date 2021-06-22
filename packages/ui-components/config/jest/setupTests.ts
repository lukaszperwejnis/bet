import { configure } from 'enzyme';
import faker from 'faker';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

faker.seed(123456);
configure({ adapter: new Adapter() });

jest.mock('react-intl', () => {
  const reactIntl = jest.requireActual('react-intl');
  const intl = reactIntl.createIntl({
    locale: 'en',
    messages: require(`@assets/i18n/en.json`),
  });

  return {
    ...reactIntl,
    useIntl: () => intl,
  };
});

jest.mock('react', () => ({
  ...(jest.requireActual('react') as Record<string, unknown>),
  useLayoutEffect: jest.requireActual('react').useEffect,
}));
