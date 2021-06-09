import React from "react";
import { mount } from "enzyme";
import faker from "faker";
import "jest-styled-components";
import { stylesConfig } from "../../styles/styles-config";
import { MessageType } from "../../types";
import { Message } from "../../components/Message/Message";

describe("<Message> component", () => {
  const modalRoot = global.document.createElement("div");
  modalRoot.setAttribute("id", "root");
  const body = global.document.querySelector("body");
  body.appendChild(modalRoot);

  it("render <Message> component without crashing as success type", () => {
    const mockedText = faker.random.word();
    const wrapper = getWrapper({
      type: "success" as MessageType,
      text: mockedText,
    });
    expect(wrapper.find(Message).exists()).toBeTruthy();
    expect(wrapper.text()).toBe(mockedText);
    expect(wrapper.prop("type")).toBe("success");
    expect(wrapper).toHaveStyleRule("color", stylesConfig.color.success);
    expect(wrapper).toHaveStyleRule("border-color", stylesConfig.color.success);
  });

  it("render <Message> component with error type", () => {
    const wrapper = getWrapper({ type: "error" as MessageType });
    expect(wrapper.prop("type")).toBe("error");
    expect(wrapper).toHaveStyleRule("color", stylesConfig.color.error);
    expect(wrapper).toHaveStyleRule("border-color", stylesConfig.color.error);
  });

  it("render <Message> component with warning type", () => {
    const wrapper = getWrapper({ type: "warning" as MessageType });
    expect(wrapper.prop("type")).toBe("warning");
    expect(wrapper).toHaveStyleRule("color", stylesConfig.color.warning);
    expect(wrapper).toHaveStyleRule("border-color", stylesConfig.color.warning);
  });

  it("render <Message> component with primary type", () => {
    const wrapper = getWrapper({ type: "info" as MessageType });
    expect(wrapper.prop("type")).toBe("info");
    expect(wrapper).toHaveStyleRule("color", stylesConfig.color.primary);
    expect(wrapper).toHaveStyleRule("border-color", stylesConfig.color.primary);
  });
});

function getWrapper({
  type,
  text = faker.random.word(),
  ...props
}: {
  type: MessageType;
  text?: string;
}) {
  return mount(<Message root="root" type={type} text={text} {...props} />);
}
