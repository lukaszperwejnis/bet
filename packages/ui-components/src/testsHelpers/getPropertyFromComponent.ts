import { ReactWrapper } from 'enzyme';

type DOMNodeType = {
  [key: string]: string;
};

export const getPropertyFromComponent = (
  component: ReactWrapper,
  property: string,
): unknown => {
  return (component.getDOMNode() as unknown as DOMNodeType)[property];
};
