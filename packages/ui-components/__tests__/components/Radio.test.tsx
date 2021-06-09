import React from "react";
import { mount } from "enzyme";
import faker from "faker";
import { Radio } from "../../components";
import { getPropertyFromComponent } from "../../testsHelpers";

describe("<Radio> component", () => {
  const initialProps = {
    name: faker.random.word(),
    label: faker.random.word(),
    value: faker.random.word(),
    onChange: jest.fn(),
    checked: false,
  };

  const wrapper = mount(<Radio {...initialProps} />);
  const input = wrapper.find(`input[name="${initialProps.name}"]`);

  it("render <Radio> component without crashing", () => {
    expect(wrapper.find(Radio).exists()).toBeTruthy();
    expect(input.exists()).toBeTruthy();
    expect(getPropertyFromComponent<HTMLInputElement>(input, "value")).toBe(
      initialProps.value
    );
    expect(wrapper.find('[data-radio-role="label"]').last().text()).toBe(
      initialProps.label
    );
  });

  it("render <Radio> component disabled", () => {
    wrapper.setProps({ disabled: true });
    expect(
      getPropertyFromComponent<HTMLInputElement>(input, "disabled")
    ).toBeTruthy();
  });

  it("render <Radio> component checked", () => {
    wrapper.setProps({ checked: true });
    expect(
      getPropertyFromComponent<HTMLInputElement>(input, "checked")
    ).toBeTruthy();
  });
});
