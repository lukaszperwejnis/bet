import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { ToggleSwitch } from './ToggleSwitch';

storiesOf('ToggleSwitch', module)
  .addDecorator(centered)
  .add('default', () => (
    <ToggleSwitch
      value="1"
      name="toggleSwitch"
      disabled={boolean('disabled', false)}
      checked={boolean('checked', false)}
      label={text('label', 'Label')}
      onChange={action('onChange')}
      onBlur={action('onBlur')}
    />
  ));
