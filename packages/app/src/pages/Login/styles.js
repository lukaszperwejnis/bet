import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { config } from '@styles';
import { FormComponents } from '@bet/ui-components';
export const PasswordRestLink = styled(Link) `
  margin-top: ${config.spacing.normal};
  text-align: left;
  text-decoration: none;
  font-family: ${config.fontFamily.primary};
  color: ${config.color.textColor};
  font-size: ${config.fontSize.small};
`;
export const Error = styled(FormComponents.Error) `
  display: block;
  text-align: center;
  margin-top: ${config.spacing.normal};
`;
