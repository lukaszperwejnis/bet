import React from "react";
import { mount } from "enzyme";
import "jest-styled-components";
import faker from "faker";
import { Tile } from "../../components";

describe("<Tile> component", () => {
  const mockedChildren = faker.lorem.sentence();
  const wrapper = mount(<Tile>{mockedChildren}</Tile>);

  it("render <Tile> component without crashing", () => {
    expect(wrapper.find(Tile).exists()).toBeTruthy();
    expect(wrapper.text()).toBe(mockedChildren);
  });

  it("render <Tile> as rounded", () => {
    wrapper.setProps({ isRound: true });
    expect(wrapper).toHaveStyleRule("border-radius", "10px");
  });
});
