import styled from 'styled-components';
import { Button } from '@bet/ui-components';
import { config } from '@styles';
export const Submit = styled(Button) `
  margin-top: ${config.spacing.huge};
  width: 100%;
`;
Submit.defaultProps = {
    htmlType: 'submit',
};
