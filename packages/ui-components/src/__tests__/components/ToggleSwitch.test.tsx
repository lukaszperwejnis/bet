import React from "react";
import { mount } from "enzyme";
import faker from "faker";
import { ToggleSwitch } from "../../components/index";
import { getPropertyFromComponent } from "../../testsHelpers";

describe("<ToggleSwitch> component", () => {
  const initialProps = {
    value: "1",
    name: faker.random.word(),
    label: faker.random.word(),
    checked: false,
    onChange: jest.fn(),
    onBlur: jest.fn(),
  };

  const wrapper = mount(<ToggleSwitch {...initialProps} />);
  const input = wrapper.find(`input[name="${initialProps.name}"]`);

  it("render <ToggleSwitch> component without crashing in default state", () => {
    expect(wrapper.find(ToggleSwitch).exists()).toBeTruthy();
    expect(getPropertyFromComponent<HTMLInputElement>(input, "value")).toBe(
      initialProps.value
    );
    expect(
      getPropertyFromComponent<HTMLInputElement>(input, "disabled")
    ).toBeFalsy();
    expect(
      getPropertyFromComponent<HTMLInputElement>(input, "checked")
    ).toBeFalsy();
  });

  it("render <Radio> checked", () => {
    wrapper.setProps({ checked: true });
    expect(
      getPropertyFromComponent<HTMLInputElement>(input, "checked")
    ).toBeTruthy();
  });

  it("render <Radio> disabled", () => {
    wrapper.setProps({ disabled: true });
    expect(
      getPropertyFromComponent<HTMLInputElement>(input, "disabled")
    ).toBeTruthy();
  });
});
