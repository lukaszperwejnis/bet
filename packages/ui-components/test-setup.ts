import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import faker from "faker";

configure({ adapter: new Adapter() });
faker.seed(123456);
