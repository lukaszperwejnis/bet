import React from "react";
import { mount } from "enzyme";
import faker from "faker";
import { Input } from "../../components";
import { getPropertyFromComponent } from "../../testsHelpers";

describe("<Input> component", () => {
  const initialProps = {
    name: faker.random.word(),
    placeholder: faker.random.word(),
    defaultValue: faker.random.word(),
  };

  const wrapper = mount(<Input {...initialProps} />);
  const input = wrapper.find(`input[name="${initialProps.name}"]`);

  it("render <Input> component without crashing", () => {
    expect(wrapper.find(Input).exists()).toBeTruthy();
    expect(getPropertyFromComponent<HTMLInputElement>(input, "value")).toBe(
      initialProps.defaultValue
    );
    expect(getPropertyFromComponent<HTMLInputElement>(input, "type")).toBe(
      "text"
    );
    expect(
      getPropertyFromComponent<HTMLInputElement>(input, "disabled")
    ).toBeFalsy();
  });

  it("render <Checkbox> component disabled", () => {
    wrapper.setProps({ disabled: true });
    expect(wrapper.prop("disabled")).toBeTruthy();
    expect(
      getPropertyFromComponent<HTMLInputElement>(input, "disabled")
    ).toBeTruthy();
  });

  it("render <Checkbox> changed type to password", () => {
    wrapper.setProps({ type: "password" });
    expect(getPropertyFromComponent<HTMLInputElement>(input, "type")).toBe(
      "password"
    );
  });
});
