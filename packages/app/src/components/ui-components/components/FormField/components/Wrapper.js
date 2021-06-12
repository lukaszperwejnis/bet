import styled from 'styled-components';
import { config } from '@styles';
export const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;
  & + & {
    margin-top: ${config.spacing.normal};
  }
`;
