import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { boolean, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Select } from './Select';

storiesOf('Select', module)
  .addDecorator(centered)
  .add('default', () => (
    <Select
      placeholder={text('placeholder', 'Car')}
      name="select"
      value={select(
        'value',
        {
          toyota: 'toyota',
          audi: 'audi',
        },
        'audi',
      )}
      options={[
        { name: 'Toyota', value: 'toyota' },
        { name: 'Audi', value: 'audi' },
      ]}
      onChange={action('on change')}
      onBlur={action('on blur')}
      disabled={boolean('disabled', false)}
    />
  ));
