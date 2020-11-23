import React, {ReactElement} from 'react';
import styled from 'styled-components';
import {WithChildrenProps} from '../../types';
import {Page} from '../../components';
import {stylesConfig} from '../../styles/styles-config';

const ErrorPage = styled(Page)`
    flex-direction: column;
`;

const ErrorCode = styled.h2<WithChildrenProps>`
    color: ${stylesConfig.color.doveGrey};
    font-weight: ${stylesConfig.fontWeight.bolder};
    font-size: 60px;
    margin-bottom: ${stylesConfig.spacing.big};
    font-family: ${stylesConfig.fontFamily.primary};
`;

const Title = styled.h3<WithChildrenProps>`
    font-weight: ${stylesConfig.fontWeight.bold};
    margin-bottom: ${stylesConfig.spacing.small};
    color: ${stylesConfig.color.textColor};
    font-family: ${stylesConfig.fontFamily.primary};
`;

export const ErrorScreen = (): ReactElement => (
    <ErrorPage centered>
        <ErrorCode>500</ErrorCode>
        <Title>Oops, coś poszło nie tak</Title>
    </ErrorPage>
);
