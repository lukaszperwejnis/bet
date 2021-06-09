import React from "react";
import { mount } from "enzyme";
import faker from "faker";
import { Select } from "../../components";
import { getPropertyFromComponent } from "../../testsHelpers";

describe("<Select> component", () => {
  const value = faker.random.word();
  const initialProps = {
    name: faker.random.word(),
    value: value,
    onChange: jest.fn(),
    placeholder: faker.random.word(),
    options: [
      {
        name: faker.random.word(),
        value: value,
      },
      {
        name: faker.random.word(),
        value: faker.random.word(),
      },
      {
        name: faker.random.word(),
        value: faker.random.word(),
      },
    ],
  };

  const wrapper = mount(<Select {...initialProps} />);
  const select = wrapper.find(`select[name="${initialProps.name}"]`);

  it("render <Select> component without crashing", () => {
    expect(wrapper.find(Select).exists()).toBeTruthy();
    expect(select.exists()).toBeTruthy();
    expect(getPropertyFromComponent<HTMLSelectElement>(select, "value")).toBe(
      initialProps.value
    );
    expect(
      getPropertyFromComponent<HTMLSelectElement>(select, "disabled")
    ).toBeFalsy();
  });

  it("render <Select> component disabled", () => {
    wrapper.setProps({ disabled: true });
    expect(
      getPropertyFromComponent<HTMLSelectElement>(select, "disabled")
    ).toBeTruthy();
  });
});
