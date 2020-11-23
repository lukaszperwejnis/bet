import styled, {css} from 'styled-components';
import {MessageType} from './Message';
import {Icon} from '../Icon/Icon';
import {stylesConfig} from '../../../../styles/styles-config';
import {WithChildrenProps, WithExcludedChildrenProps} from '../../../../types';

const iconMixin = `
    width: 30px;
    margin-right: ${stylesConfig.spacing.normal};
`;

const messageTypeColorDictionary = {
    success: stylesConfig.color.success,
    error: stylesConfig.color.error,
    warning: stylesConfig.color.warning,
    info: stylesConfig.color.primary,
};

interface ContainerProps extends WithChildrenProps {
    type: MessageType;
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    align-items: center;
    background-color: ${stylesConfig.color.white};
    border-radius: 4px;
    padding: ${stylesConfig.spacing.extraSmall} ${stylesConfig.spacing.normal};
    box-shadow: ${stylesConfig.boxShadow};
    font-family: ${stylesConfig.fontFamily.primary};
    font-size: ${stylesConfig.fontSize.small};
    border: 1px solid;
    ${(props: ContainerProps) => css`
        border-color: ${messageTypeColorDictionary[props.type]};
        color: ${messageTypeColorDictionary[props.type]};
    `}
`;

export const Success = styled(Icon)<WithExcludedChildrenProps>`
    &&& {
        color: ${stylesConfig.color.success};
        ${iconMixin};
    }
`;

export const Error = styled(Icon)<WithExcludedChildrenProps>`
    &&& {
        color: ${stylesConfig.color.error};
        ${iconMixin};
    }
`;

export const Warning = styled(Icon)<WithExcludedChildrenProps>`
    &&& {
        color: ${stylesConfig.color.error};
        ${iconMixin};
    }
`;

export const Info = styled(Icon)<WithExcludedChildrenProps>`
    &&& {
        color: ${stylesConfig.color.primary};
        ${iconMixin};
    }
`;
