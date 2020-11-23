import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetchMock from 'jest-fetch-mock';
import faker from 'faker';
import {LocalStorageMock} from './test/mocks/LocalStorageMock';

configure({adapter: new Adapter()});
global.fetch = fetchMock;
fetchMock.enableMocks();
faker.seed(123456);

global['localStorage'] = new LocalStorageMock();
