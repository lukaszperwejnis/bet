import { jsx as _jsx } from "react/jsx-runtime";
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { boolean } from '@storybook/addon-knobs';
import { Tile } from './Tile';
storiesOf('Tile', module)
    .addDecorator(centered)
    .add('default', () => (_jsx(Tile, Object.assign({ isRound: boolean('isRound', false) }, { children: "Hello from the tile" }), void 0)));
