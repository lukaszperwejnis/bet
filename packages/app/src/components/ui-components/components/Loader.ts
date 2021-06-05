import styled from 'styled-components';
import { WithExcludedChildrenProps } from '@structures';
import { config } from '@styles';

export const Loader = styled.div<WithExcludedChildrenProps>`
  position: absolute;
  margin: 60px auto;
  font-size: 10px;
  text-indent: -9999em;
  border-top: 1.1em solid ${config.color.primary};
  border-right: 1.1em solid ${config.color.primary};
  border-bottom: 1.1em solid ${config.color.primary};
  border-left: 1.1em solid ${config.color.white};
  transform: translateZ(0);
  animation: load8 1.1s infinite linear;
  z-index: 1;

  &,
  &:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }

  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
