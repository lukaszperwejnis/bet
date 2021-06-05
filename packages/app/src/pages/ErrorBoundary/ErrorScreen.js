import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
import { Page } from '../../components';
import { config } from '../../styles/config';
const ErrorPage = styled(Page) `
  flex-direction: column;
`;
const ErrorCode = styled.h2 `
  color: ${config.color.doveGrey};
  font-weight: ${config.fontWeight.bolder};
  font-size: 60px;
  margin-bottom: ${config.spacing.big};
  font-family: ${config.fontFamily.primary};
`;
const Title = styled.h3 `
  font-weight: ${config.fontWeight.bold};
  margin-bottom: ${config.spacing.small};
  color: ${config.color.textColor};
  font-family: ${config.fontFamily.primary};
`;
export const ErrorScreen = () => (_jsxs(ErrorPage, Object.assign({ centered: true }, { children: [_jsx(ErrorCode, { children: "500" }, void 0),
        _jsx(Title, { children: "Oops, co\u015B posz\u0142o nie tak" }, void 0)] }), void 0));
