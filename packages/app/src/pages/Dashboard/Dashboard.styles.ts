import { config } from '@styles';
import styled from 'styled-components';

export const BetWrapper = styled.div`
  & + & {
    margin-top: ${config.spacing.big};
  }
`;

export const Header = styled.h3`
  margin-bottom: ${config.spacing.normal};
`;
