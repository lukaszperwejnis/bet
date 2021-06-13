import React from "react";
import { mount } from "enzyme";
import faker from "faker";
import "jest-styled-components";
import { Button } from "../../components/index";
import { stylesConfig } from "../../styles/styles-config";
import { getPropertyFromComponent } from "../../testsHelpers";

describe("<Button> component", () => {
  it("render <Button> component without crashing", () => {
    const { wrapper, component } = getWrapperAndComponent();
    expect(wrapper.find(Button).exists()).toBeTruthy();
    expect(wrapper.prop("type")).toBe("primary");
    expect(component).toHaveStyleRule(
      "background-color",
      stylesConfig.color.primary
    );
    expect(component).toHaveStyleRule("type", undefined);
  });

  it("render <Button> as button type", () => {
    const { component } = getWrapperAndComponent({ htmlType: "button" });
    expect(getPropertyFromComponent<HTMLButtonElement>(component, "type")).toBe(
      "button"
    );
  });

  it("render <Button> as secondary", () => {
    const { wrapper, component } = getWrapperAndComponent({
      type: "secondary",
    });
    expect(wrapper.prop("type")).toBe("secondary");
    expect(component).toHaveStyleRule(
      "background-color",
      stylesConfig.color.secondary
    );
  });

  it("render <Button> as error", () => {
    const { wrapper, component } = getWrapperAndComponent({ type: "error" });
    expect(wrapper.prop("type")).toBe("error");
    expect(component).toHaveStyleRule(
      "background-color",
      stylesConfig.color.error
    );
  });

  it("render <Button> as success", () => {
    const { wrapper, component } = getWrapperAndComponent({ type: "success" });
    expect(wrapper.prop("type")).toBe("success");
    expect(component).toHaveStyleRule(
      "background-color",
      stylesConfig.color.success
    );
  });

  it("render <Button> as warning", () => {
    const { wrapper, component } = getWrapperAndComponent({ type: "warning" });
    expect(wrapper.prop("type")).toBe("warning");
    expect(component).toHaveStyleRule(
      "background-color",
      stylesConfig.color.warning
    );
  });

  it("render <Button> as empty", () => {
    const { wrapper, component } = getWrapperAndComponent({ type: "empty" });
    expect(wrapper.prop("type")).toBe("empty");
    expect(component).toHaveStyleRule("background-color", undefined);
  });

  it("render <Button> as disabled", () => {
    const { wrapper, component } = getWrapperAndComponent({ disabled: true });
    expect(wrapper.prop("disabled")).toBeTruthy();
    expect(
      getPropertyFromComponent<HTMLButtonElement>(component, "disabled")
    ).toBeTruthy();
  });

  it("render <Button> as hollow", () => {
    const { wrapper } = getWrapperAndComponent({ isHollow: true });
    expect(wrapper.prop("isHollow")).toBeTruthy();
  });
});

function getWrapperAndComponent(props?: object) {
  const mockedOnClick = jest.fn();
  const mockedChildren = faker.random.word();
  const wrapper = mount(
    <Button onClick={mockedOnClick} {...props}>
      {mockedChildren}
    </Button>
  );
  return { wrapper, component: wrapper.find("button") };
}
