import styled from 'styled-components';
import {Button} from './ui-components/components';
import {stylesConfig} from '../styles/styles-config';

export const Submit = styled(Button)`
    margin-top: ${stylesConfig.spacing.huge};
    width: 100%;
`;

Submit.defaultProps = {
    htmlType: 'submit',
};
