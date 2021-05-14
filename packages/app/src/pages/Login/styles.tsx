import styled from 'styled-components';
import { stylesConfig } from '../../styles/styles-config';
import { Link } from 'react-router-dom';

export const PasswordRestLink = styled(Link)`
  margin-top: ${stylesConfig.spacing.normal};
  text-align: left;
  text-decoration: none;
  font-family: ${stylesConfig.fontFamily.primary};
  color: ${stylesConfig.color.textColor};
  font-size: ${stylesConfig.fontSize.small};
`;
