import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Checkbox } from './Checkbox';

storiesOf('Checkbox', module)
  .addDecorator(centered)
  .add('default', () => (
    <div>
      <Checkbox
        value="1"
        name="checkbox"
        disabled={boolean('disabled', false)}
        checked={boolean('checked', false)}
        label={text('label', 'Label')}
        onChange={action('onChange')}
        onBlur={action('onBlur')}
      />
      <Checkbox
        value="2"
        name="checkbox"
        disabled={false}
        checked={false}
        label="Second label"
        onChange={action('onChange')}
        onBlur={action('onBlur')}
      />
    </div>
  ));
