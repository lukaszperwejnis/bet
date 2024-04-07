import styled, { css } from 'styled-components';
import { config } from '@bet/ui-components/dist/styles';
import { Form } from 'formik';
import { Button, FormField } from '@bet/ui-components';

type BetContainerProps = Partial<{
  isValid: boolean;
  isPreview: boolean;
}>;

export const BetContainer = styled.div<BetContainerProps>`
  background-color: ${config.color.white};
  border: 1px solid ${config.color.secondary};
  padding: ${config.spacing.normal};
  border-radius: 4px;
  box-shadow: ${config.boxShadow};
  cursor: pointer;

  & + & {
    margin-top: 15px;
  }

  ${({ isPreview }) =>
    isPreview &&
    css`
      cursor: auto;
    `};

  ${({ isValid }) =>
    isValid &&
    css`
      border: 5px solid ${config.color.success};
    `};
`;

export const StyledForm = styled(Form)`
  text-align: center;
`;

export const TeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TeamNames = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: ${config.spacing.normal};
`;

export const TeamName = styled.span`
  font-size: ${config.fontSize.normal};
  color: ${config.color.textColor};
  margin-bottom: ${config.spacing.small};
  font-weight: ${config.fontWeight.bolder};
`;

export const Submit = styled(Button)`
  margin-top: ${config.spacing.huge};
  width: auto;
`;

export const CrestWrapper = styled.div`
  padding: ${config.spacing.normal};
`;

export const Crest = styled.img`
  width: 55px;
  height: 55px;
`;

export const SeparatorWrapper = styled.div`
  margin-left: ${config.spacing.huge};
  margin-right: ${config.spacing.huge};
  text-align: center;
`;

export const ScheduledDate = styled.div`
  font-size: ${config.fontSize.normal};
  font-weight: ${config.fontWeight.bolder};
  margin-bottom: ${config.spacing.small};
`;

export const Separator = styled.div`
  margin-left: ${config.spacing.extraSmall};
  margin-right: ${config.spacing.extraSmall};

  &:before {
    content: ' - ';
    font-size: 50px;
  }
`;

export const ScoreFormField = styled(FormField.Input)`
  text-align: center;
`;

type ScoreWrapperProps = {
  isFinished?: boolean;
};

export const ScoreWrapper = styled.div<ScoreWrapperProps>`
  display: flex;
  align-items: center;
  width: auto;
  justify-content: space-between;

  ${({ isFinished }) =>
    isFinished &&
    css`
      width: 100px;
    `};
`;

type ScorePreviewProps = {
  isPreview?: boolean;
};

export const ScorePreview = styled.div<ScorePreviewProps>`
  padding: ${config.spacing.normal};
  font-size: ${config.fontSize.large};

  ${({ isPreview }) =>
    isPreview &&
    css`
      padding: ${config.spacing.extraSmall};
    `};
`;
