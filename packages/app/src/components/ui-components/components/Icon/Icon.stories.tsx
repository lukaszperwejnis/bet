import { storiesOf } from '@storybook/react';
import React from 'react';
import centered from '@storybook/addon-centered/react';
import { select } from '@storybook/addon-knobs';
import { Icon, IconComponentType } from './Icon';

storiesOf('Icon', module)
  .addDecorator(centered)
  .add('default', () => (
    <Icon
      size={select(
        'size',
        {
          small: 'small',
          normal: 'normal',
          large: 'large',
        },
        'normal',
      )}
      icon={select(
        'icon',
        {
          dashboard: 'dashboard',
          leftArrow: 'leftArrow',
          plusCircle: 'plusCircle',
          organization: 'organization',
          menu: 'menu',
          users: 'users',
          trash: 'trash',
          downArrow: 'downArrow',
          logout: 'logout',
          infoCircle: 'infoCircle',
          circleWithCross: 'circleWithCross',
          warning: 'warning',
          tick: 'tick',
          search: 'search',
          edit: 'edit',
          arrows: 'arrows',
          image: 'image',
          phoneIncoming: 'phoneIncoming',
          unknown: 'unknown',
        } as any,
        'dashboard' as IconComponentType,
      )}
      type={select(
        'type',
        {
          default: 'default',
          primary: 'primary',
          secondary: 'secondary',
          error: 'error',
        },
        'default',
      )}
    />
  ));
