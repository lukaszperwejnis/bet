import { useField } from "formik";
import { Label, Wrapper, Error, Description } from "./components/index";
import { Input as InputComponent, InputProps } from "../Input/Input";
import { RenderType, WithExcludedChildrenProps } from "../../types/index";

interface FormFieldInputProps extends WithExcludedChildrenProps {
  name: string;
  label?: RenderType;
  description?: RenderType;
  errorMessage?: RenderType;
  wrapperClassName?: string;
  labelClassName?: string;
}

export const Input = ({
  label,
  description,
  errorMessage,
  wrapperClassName,
  labelClassName,
  ...props
}: FormFieldInputProps & InputProps): JSX.Element => {
  const [field, meta] = useField(props);
  const hasError = Boolean(errorMessage || (meta.touched && meta.error));
  const error = errorMessage || meta.error;
  return (
    <Wrapper className={wrapperClassName}>
      <>
        {label && (
          <Label htmlFor={field.name} className={labelClassName}>
            {label}
          </Label>
        )}
      </>
      <InputComponent
        id={field.name}
        value={field.value}
        onChange={field.onChange}
        onBlur={field.onBlur}
        isInvalid={hasError}
        {...props}
      />
      <>{hasError && error && <Error data-error={field.name}>{error}</Error>}</>
      <>{description && <Description>{description}</Description>}</>
    </Wrapper>
  );
};

Input.defaultProps = {
  type: "text",
};
