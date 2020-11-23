import React from 'react';
import styled, {css} from 'styled-components';
import {stylesConfig} from '../../../../styles/styles-config';
import {darken, lighten} from 'polished';
import {WithChildrenProps} from '../../../../types';
import {device} from '../../../../styles/breakpoints';

type ColorType = 'primary' | 'secondary' | 'error' | 'warning' | 'success' | 'empty';
type ButtonHtmlType = 'submit' | 'button';

interface ButtonProps extends WithChildrenProps {
    onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
    isHollow?: boolean;
    disabled?: boolean;
    isEmpty?: boolean;
    title?: string;
}

interface ButtonComponentProps extends ButtonProps {
    type?: ColorType;
    htmlType?: ButtonHtmlType;
}

const defaultProps = Object.freeze({
    type: 'primary',
});

export const Button = ({type, htmlType, ...otherProps}: ButtonComponentProps) => <StyledButton type={htmlType} colorType={type} {...otherProps} />;

Button.defaultProps = defaultProps;

interface StyledButtonProps extends ButtonProps {
    colorType: ColorType;
}

const StyledButton = styled.button<StyledButtonProps>`
    border: none;
    border-radius: 4px;
    color: ${stylesConfig.color.white};
    font-size: ${stylesConfig.fontSize.small};
    padding: ${stylesConfig.spacing.small};
    transition-property: background-color, border, color, opacity;
    transition-duration: 0.25s;
    transition-timing-function: cubic-bezier(0.27, 0.01, 0.38, 1.06);
    will-change: background-color, border, color, opacity;
    font-family: ${stylesConfig.fontFamily.primary};
    cursor: pointer;

    &:active,
    &:focus {
        outline: none;
    }

    @media ${device.tabletUp} {
        font-size: ${stylesConfig.fontSize.normal};
    }

    ${({disabled}: StyledButtonProps) =>
        disabled &&
        css`
            opacity: ${stylesConfig.opacity.disabled};
            cursor: auto;
        `};

    ${({colorType}: StyledButtonProps) =>
        colorType === 'primary' &&
        css`
            background-color: ${stylesConfig.color.primary};
            &:hover {
                background-color: ${lighten(0.1, stylesConfig.color.primary)};
            }
        `};

    ${({colorType, isHollow}: StyledButtonProps) =>
        colorType === 'primary' &&
        isHollow &&
        css`
            color: ${stylesConfig.color.primary};
            border-color: ${stylesConfig.color.primary};
            &:hover {
                background-color: ${stylesConfig.color.primary};
            }
        `};
    ${({colorType}: StyledButtonProps) =>
        colorType === 'secondary' &&
        css`
            color: ${stylesConfig.color.textColor};
            background-color: ${stylesConfig.color.secondary};
            &:hover {
                background-color: ${darken(0.1, stylesConfig.color.secondary)};
            }
        `};

    ${({colorType, isHollow}: StyledButtonProps) =>
        colorType === 'secondary' &&
        isHollow &&
        css`
            color: ${stylesConfig.color.secondary};
            border-color: ${stylesConfig.color.secondary};
            &:hover {
                background-color: ${stylesConfig.color.secondary};
            }
        `};
    ${({colorType}: StyledButtonProps) =>
        colorType === 'error' &&
        css`
            background-color: ${stylesConfig.color.guardsmanRed};
            &:hover {
                background-color: ${lighten(0.1, stylesConfig.color.guardsmanRed)};
            }
        `};

    ${({colorType, isHollow}: StyledButtonProps) =>
        colorType === 'error' &&
        isHollow &&
        css`
            color: ${stylesConfig.color.guardsmanRed};
            border-color: ${stylesConfig.color.guardsmanRed};
            &:hover {
                background-color: ${stylesConfig.color.guardsmanRed};
            }
        `};

    ${({colorType}: StyledButtonProps) =>
        colorType === 'warning' &&
        css`
            background-color: ${stylesConfig.color.warning};
            &:hover {
                background-color: ${lighten(0.1, stylesConfig.color.warning)};
            }
        `};

    ${({colorType, isHollow}: StyledButtonProps) =>
        colorType === 'warning' &&
        isHollow &&
        css`
            color: ${stylesConfig.color.warning};
            border-color: ${stylesConfig.color.warning};
            &:hover {
                background-color: ${stylesConfig.color.warning};
            }
        `};

    ${({colorType}: StyledButtonProps) =>
        colorType === 'success' &&
        css`
            background-color: ${stylesConfig.color.success};
            &:hover {
                background-color: ${lighten(0.1, stylesConfig.color.success)};
            }
        `};

    ${({colorType, isHollow}: StyledButtonProps) =>
        colorType === 'success' &&
        isHollow &&
        css`
            color: ${stylesConfig.color.success};
            border-color: ${stylesConfig.color.success};
            &:hover {
                background-color: ${stylesConfig.color.success};
            }
        `};

    ${({colorType}: StyledButtonProps) =>
        colorType === 'empty' &&
        css`
            margin: 0;
            background: none;
            padding: 0;
            min-width: auto;

            &:hover {
                background: none;
                opacity: 0.7;
            }
        `};

    ${({isHollow}: ButtonProps) =>
        isHollow &&
        css`
            background-color: ${stylesConfig.color.white};
            border: 1px solid;
            &:hover {
                color: ${stylesConfig.color.white};
            }
        `};
`;
