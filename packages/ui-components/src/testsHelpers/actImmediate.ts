import { ReactWrapper } from 'enzyme';
import { act } from 'react-dom/test-utils';

export const actImmediate = (wrapper: ReactWrapper): Promise<void> =>
  act(
    () =>
      new Promise<void>((resolve) => {
        setImmediate(() => {
          wrapper.update();
          resolve();
        });
      }),
  );
