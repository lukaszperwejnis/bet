import styled, { css } from 'styled-components';
import { Message } from '@structures';
import { Icon } from '../Icon/Icon';
import { config } from '../../../../styles/config';
import {
  WithChildrenProps,
  WithExcludedChildrenProps,
} from '../../../../types';

const iconMixin = `
    width: 30px;
    margin-right: ${config.spacing.normal};
`;

const messageTypeColorDictionary = {
  [Message.Type.Success]: config.color.success,
  [Message.Type.Error]: config.color.error,
  [Message.Type.Warning]: config.color.warning,
  [Message.Type.Info]: config.color.primary,
};

interface ContainerProps extends WithChildrenProps {
  type: Message.Type;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  background-color: ${config.color.white};
  border-radius: 4px;
  padding: ${config.spacing.extraSmall} ${config.spacing.normal};
  box-shadow: ${config.boxShadow};
  font-family: ${config.fontFamily.primary};
  font-size: ${config.fontSize.small};
  border: 1px solid;
  ${(props: ContainerProps) => css`
    border-color: ${messageTypeColorDictionary[props.type]};
    color: ${messageTypeColorDictionary[props.type]};
  `}
`;

export const Success = styled(Icon)<WithExcludedChildrenProps>`
  &&& {
    color: ${config.color.success};
    ${iconMixin};
  }
`;

export const Error = styled(Icon)<WithExcludedChildrenProps>`
  &&& {
    color: ${config.color.error};
    ${iconMixin};
  }
`;

export const Warning = styled(Icon)<WithExcludedChildrenProps>`
  &&& {
    color: ${config.color.error};
    ${iconMixin};
  }
`;

export const Info = styled(Icon)<WithExcludedChildrenProps>`
  &&& {
    color: ${config.color.primary};
    ${iconMixin};
  }
`;
