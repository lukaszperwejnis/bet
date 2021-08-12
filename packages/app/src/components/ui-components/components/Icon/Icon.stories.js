'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const jsx_runtime_1 = require('react/jsx-runtime');
const react_1 = require('@storybook/react');
const react_2 = __importDefault(require('@storybook/addon-centered/react'));
const addon_knobs_1 = require('@storybook/addon-knobs');
const Icon_1 = require('./Icon');
react_1
  .storiesOf('Icon', module)
  .addDecorator(react_2.default)
  .add('default', () =>
    jsx_runtime_1.jsx(
      Icon_1.Icon,
      {
        size: addon_knobs_1.select(
          'size',
          {
            small: 'small',
            normal: 'normal',
            large: 'large',
          },
          'normal',
        ),
        icon: addon_knobs_1.select(
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
          },
          'dashboard',
        ),
        type: addon_knobs_1.select(
          'type',
          {
            default: 'default',
            primary: 'primary',
            secondary: 'secondary',
            error: 'error',
          },
          'default',
        ),
      },
      void 0,
    ),
  );
