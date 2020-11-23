import {WithChildrenProps} from '../../../../types';
import styled, {css} from 'styled-components';
import {stylesConfig} from '../../../../styles/styles-config';

interface SelectProps extends WithChildrenProps {
    disabled?: boolean;
}

export const Select = styled.select<SelectProps>`
    height: 34px;
    border: 1px solid ${stylesConfig.color.secondary};
    font-size: ${stylesConfig.fontSize.normal};
    padding: 0 ${stylesConfig.spacing.big} 0 ${stylesConfig.spacing.normal};
    color: ${stylesConfig.color.textColor};
    background-size: 12px;
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none;
    border-radius: 4px;
    transition: opacity 0.25s ease-in-out;
    background: ${stylesConfig.color.white}
        url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%3D5170' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E")
        no-repeat right 0.75rem center;
    background-size: 8px 10px;
    cursor: pointer;
    ${({disabled}: SelectProps) =>
        disabled &&
        css`
            opacity: ${stylesConfig.opacity.disabled};
            cursor: not-allowed;
        `};
`;
