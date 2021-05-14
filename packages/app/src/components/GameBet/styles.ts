import styled from 'styled-components';

export const Wrapper = styled.div`
  & + & {
    margin-top: 15px;
  }
`;

export const TeamWrapper = styled.div`
  & + & {
    margin-top: 5px;
  }
`;
