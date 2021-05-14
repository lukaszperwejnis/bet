import { useField } from 'formik';
import { RenderType, WithExcludedChildrenProps } from '@structures';
import { Label, Wrapper, Error, Description } from './components';
import { Input as InputComponent, InputProps } from '../Input/Input';

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
  name,
  ...props
}: FormFieldInputProps & InputProps): JSX.Element => {
  const [field, meta] = useField({ name, ...props });
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
        name={field.name}
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
