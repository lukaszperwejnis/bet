import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { WithChildrenProps } from '../../types';
import { Page } from '../../components';
import { config } from '../../styles/config';

const ErrorPage = styled(Page)`
  flex-direction: column;
`;

const ErrorCode = styled.h2<WithChildrenProps>`
  color: ${config.color.doveGrey};
  font-weight: ${config.fontWeight.bolder};
  font-size: 60px;
  margin-bottom: ${config.spacing.big};
  font-family: ${config.fontFamily.primary};
`;

const Title = styled.h3<WithChildrenProps>`
  font-weight: ${config.fontWeight.bold};
  margin-bottom: ${config.spacing.small};
  color: ${config.color.textColor};
  font-family: ${config.fontFamily.primary};
`;

export const ErrorScreen = (): ReactElement => (
  <ErrorPage centered>
    <ErrorCode>500</ErrorCode>
    <Title>Oops, coś poszło nie tak</Title>
  </ErrorPage>
);
