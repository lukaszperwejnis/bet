import { ReactWrapper } from "enzyme";

type DOMNodeType = {
  [key: string]: string;
};

export const getPropertyFromComponent = <T>(
  component: ReactWrapper,
  property: string
) => {
  return ((component.getDOMNode() as unknown) as DOMNodeType)[property];
};
