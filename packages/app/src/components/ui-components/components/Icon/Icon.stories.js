import { jsx as _jsx } from "react/jsx-runtime";
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { select } from '@storybook/addon-knobs';
import { Icon } from './Icon';
storiesOf('Icon', module)
    .addDecorator(centered)
    .add('default', () => (_jsx(Icon, { size: select('size', {
        small: 'small',
        normal: 'normal',
        large: 'large',
    }, 'normal'), icon: select('icon', {
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
    }, 'dashboard'), type: select('type', {
        default: 'default',
        primary: 'primary',
        secondary: 'secondary',
        error: 'error',
    }, 'default') }, void 0)));
