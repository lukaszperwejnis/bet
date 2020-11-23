import styled from 'styled-components';
import {stylesConfig} from '../../../../../styles/styles-config';
import {WithChildrenProps} from '../../../../../types';

export const Description = styled.span<WithChildrenProps>`
    color: ${stylesConfig.color.textColor};
    font-size: ${stylesConfig.fontSize.small};
    margin: ${stylesConfig.spacing.small} 0;
    font-family: ${stylesConfig.fontFamily.primary};
    letter-spacing: 0.2px;
`;
