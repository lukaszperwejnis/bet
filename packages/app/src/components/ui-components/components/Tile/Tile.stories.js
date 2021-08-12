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
const Tile_1 = require('./Tile');
react_1
  .storiesOf('Tile', module)
  .addDecorator(react_2.default)
  .add('default', () =>
    jsx_runtime_1.jsx(
      Tile_1.Tile,
      Object.assign(
        { isRound: addon_knobs_1.boolean('isRound', false) },
        { children: 'Hello from the tile' },
      ),
      void 0,
    ),
  );
