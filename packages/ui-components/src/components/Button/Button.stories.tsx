import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
// eslint-disable-next-line import/no-extraneous-dependencies
import { TrashAlt } from '@styled-icons/boxicons-regular';
import { Button, Variant } from './Button';

const TrashIcon = styled(TrashAlt)`
  color: red;
`;

storiesOf('Button', module)
  .addDecorator(centered)
  .add('default', () => (
    <Button
      disabled={boolean('disabled', false)}
      isHollow={boolean('isHollow', false)}
      onClick={action('clicked')}
      variant={select(
        'variant',
        {
          primary: Variant.Primary,
          secondary: Variant.Secondary,
          error: Variant.Error,
          warning: Variant.Warning,
          success: Variant.Success,
          empty: Variant.Empty,
        },
        Variant.Primary,
      )}
    >
      Hello Button
    </Button>
  ))
  .add('Empty with icon', () => (
    <Button
      disabled={boolean('disabled', false)}
      onClick={action('clicked')}
      variant={Variant.Empty}
    >
      <TrashIcon style={{ width: '17px', height: '17px' }} />
    </Button>
  ));
