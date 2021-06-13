import { mount } from "enzyme";
import * as faker from "faker";
import { Checkbox } from "../../components/index";
import { getPropertyFromComponent } from "../../testsHelpers";

describe("<Checkbox> component", () => {
  const initialProps = {
    name: faker.random.word(),
    label: faker.random.word(),
    value: faker.random.word(),
    onChange: jest.fn(),
    checked: false,
  };

  const wrapper = mount(<Checkbox {...initialProps} />);
  const input = wrapper.find(`input[name="${initialProps.name}"]`);

  it("render <Checkbox> component without crashing", () => {
    expect(wrapper.find(Checkbox).exists()).toBeTruthy();
    expect(input.exists()).toBeTruthy();
    expect(getPropertyFromComponent<HTMLInputElement>(input, "value")).toBe(
      initialProps.value
    );
  });

  it("render <Checkbox> component disabled", () => {
    wrapper.setProps({ disabled: true });
    expect(
      getPropertyFromComponent<HTMLInputElement>(input, "disabled")
    ).toBeTruthy();
  });

  it("render <Checkbox> component checked", () => {
    wrapper.setProps({ checked: true });
    expect(
      getPropertyFromComponent<HTMLInputElement>(input, "checked")
    ).toBeTruthy();
  });
});
