import { ReactElement } from 'react';
import './styles.css';
import { WithExcludedChildrenProps } from '../../../../types';
declare const Icons: {
    dashboard: import("@styled-icons/styled-icon").StyledIcon;
    leftArrow: import("@styled-icons/styled-icon").StyledIcon;
    plusCircle: import("@styled-icons/styled-icon").StyledIcon;
    organization: import("@styled-icons/styled-icon").StyledIcon;
    menu: import("@styled-icons/styled-icon").StyledIcon;
    users: import("@styled-icons/styled-icon").StyledIcon;
    trash: import("@styled-icons/styled-icon").StyledIcon;
    downArrow: import("@styled-icons/styled-icon").StyledIcon;
    logout: import("@styled-icons/styled-icon").StyledIcon;
    infoCircle: import("@styled-icons/styled-icon").StyledIcon;
    circleWithCross: import("@styled-icons/styled-icon").StyledIcon;
    warning: import("@styled-icons/styled-icon").StyledIcon;
    tick: import("@styled-icons/styled-icon").StyledIcon;
    search: import("@styled-icons/styled-icon").StyledIcon;
    edit: import("@styled-icons/styled-icon").StyledIcon;
    arrows: import("@styled-icons/styled-icon").StyledIcon;
    image: import("@styled-icons/styled-icon").StyledIcon;
    phoneIncoming: import("@styled-icons/styled-icon").StyledIcon;
};
export declare type IconComponentType = keyof typeof Icons;
declare type IconSize = 'small' | 'normal' | 'large' | 'huge';
export declare type IconType = 'default' | 'primary' | 'secondary' | 'error';
interface IconProps extends WithExcludedChildrenProps {
    className?: string;
    icon: IconComponentType;
    type?: IconType;
    size?: IconSize;
    title?: string;
}
export declare const Icon: {
    ({ className, icon, type, size, ...otherProps }: IconProps): ReactElement;
    defaultProps: {
        type: string;
        size: string;
    };
};
export {};
