import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import fetchMock from 'jest-fetch-mock';
import faker from 'faker';
import { LocalStorageMock } from './test/mocks/LocalStorageMock';

faker.seed(123456);
configure({ adapter: new Adapter() });
global.fetch = fetchMock;
fetchMock.enableMocks();

global['localStorage'] = new LocalStorageMock();
