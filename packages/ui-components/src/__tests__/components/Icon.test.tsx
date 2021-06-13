import React from "react";
import { mount, shallow } from "enzyme";
import faker from "faker";
import { Icon, IconComponentType } from "../../components/Icon/Icon";

describe("<Icon> component", () => {
  const wrapper = mount(<Icon icon="dashboard" />);
  const component = wrapper.find("svg");

  it("render <Icon> component without crashing", () => {
    expect(component.hasClass("icon--default"));
    expect(component.hasClass("icon--normal"));
  });

  it("render <Icon> changed size to small", () => {
    wrapper.setProps({ size: "small" });
    expect(component.hasClass("icon--small"));
  });

  it("render <Icon> changed size to large", () => {
    wrapper.setProps({ size: "large" });
    expect(component.hasClass("icon--large"));
  });

  it("render <Icon> changed type to primary", () => {
    wrapper.setProps({ size: "primary" });
    expect(component.hasClass("icon--primary"));
  });

  it("render <Icon> changed type to secondary", () => {
    wrapper.setProps({ size: "secondary" });
    expect(component.hasClass("icon--secondary"));
  });

  it("render <Icon> changed type to error", () => {
    wrapper.setProps({ size: "error" });
    expect(component.hasClass("icon--error"));
  });

  it("render <Icon> unknown icon", () => {
    const icon = faker.random.word() as IconComponentType;
    const wrapper = shallow(<Icon icon={icon} />);
    expect(wrapper.find(Icon).exists()).toBeFalsy();
  });
});
