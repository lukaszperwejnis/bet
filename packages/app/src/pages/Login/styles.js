import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { config } from '@styles';
import { FormComponents } from '@bet/ui-components';
export const PasswordRestLink = styled(Link) `
  display: block;
  margin-top: ${config.spacing.large};
  text-decoration: none;
  font-family: ${config.fontFamily.primary};
  color: ${config.color.textColor};
  font-size: ${config.fontSize.normal};
`;
export const Error = styled(FormComponents.Error) `
  display: block;
  margin-top: ${config.spacing.large};
  font-size: ${config.fontSize.normal};
`;
