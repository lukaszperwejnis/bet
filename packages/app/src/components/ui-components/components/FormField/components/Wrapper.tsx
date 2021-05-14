import styled from 'styled-components';
import { stylesConfig } from '../../../../../styles/styles-config';
import { WithChildrenProps } from '@structures';

export const Wrapper = styled.div<WithChildrenProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;
  & + & {
    margin-top: ${stylesConfig.spacing.normal};
  }
`;
