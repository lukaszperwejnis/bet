import React, { ReactElement } from "react";
import { useField } from "formik";
import { Wrapper, Error, Description } from "./components";
import { Radio as RadioComponent } from "../Radio/Radio";
import { RenderType, WithExcludedChildrenProps } from "../../types";

interface FormFieldRadioProps extends WithExcludedChildrenProps {
  name: string;
  label: RenderType;
  valueToSet: string | number;
  disabled?: boolean;
  errorMessage?: string;
  description?: RenderType;
  error?: RenderType;
  wrapperClassName?: string;
  labelClassName?: string;
}

export const Radio = ({
  label,
  description,
  valueToSet,
  errorMessage,
  wrapperClassName,
  ...props
}: FormFieldRadioProps): ReactElement => {
  const [field, meta] = useField(props);
  const hasError = errorMessage || (meta.touched && meta.error);
  const error = errorMessage || meta.error;

  return (
    <Wrapper className={wrapperClassName}>
      <RadioComponent
        id={field.name}
        label={label}
        name={field.name}
        value={valueToSet}
        onChange={field.onChange}
        onBlur={field.onBlur}
        checked={valueToSet === field.value}
        {...props}
      />
      {hasError && <Error>{error}</Error>}
      {description && <Description>{description}</Description>}
    </Wrapper>
  );
};
