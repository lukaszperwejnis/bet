import styled from 'styled-components';
import { WithChildrenProps } from '@structures';
import { config } from '@styles';

export const Wrapper = styled.div<WithChildrenProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;
  & + & {
    margin-top: ${config.spacing.normal};
  }
`;
