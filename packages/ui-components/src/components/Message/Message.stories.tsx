import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { text } from '@storybook/addon-knobs';
import { Message } from './Message';
import { Message as MessageStructure } from '../../types';

storiesOf('Message', module)
  .addDecorator(centered)
  .add('success', () => (
    <Message
      root="root"
      type={MessageStructure.Type.Success}
      text={text('text', 'Success message')}
    />
  ))
  .add('error', () => (
    <Message
      root="root"
      type={MessageStructure.Type.Error}
      text={text('text', 'Error message')}
    />
  ))
  .add('warning', () => (
    <Message
      root="root"
      type={MessageStructure.Type.Warning}
      text={text('text', 'Warning message')}
    />
  ))
  .add('primary', () => (
    <Message
      root="root"
      type={MessageStructure.Type.Info}
      text={text('text', 'Info message')}
    />
  ));
