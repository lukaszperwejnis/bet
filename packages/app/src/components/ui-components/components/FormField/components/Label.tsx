import styled from 'styled-components';
import {stylesConfig} from '../../../../../styles/styles-config';
import {WithChildrenProps} from '../../../../../types';

export const Label = styled.label<WithChildrenProps>`
    margin-bottom: ${stylesConfig.spacing.small};
    font-size: ${stylesConfig.fontSize.normal};
    color: ${stylesConfig.color.textColor};
    font-weight: ${stylesConfig.fontWeight.bold};
    font-family: ${stylesConfig.fontFamily.primary};
    letter-spacing: 0.2px;
`;
