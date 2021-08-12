import { useField } from 'formik';
import { Description, Error, Label, Wrapper } from './components';
import { Select as SelectComponent } from '../Select/Select';
import { RenderType, WithExcludedChildrenProps } from '../../types';

interface FormFieldSelectProps extends WithExcludedChildrenProps {
  name: string;
  disabled?: boolean;
  errorMessage?: string;
  description?: RenderType;
  error?: RenderType;
  wrapperClassName?: string;
  labelClassName?: string;
  placeholder: string;
  label: RenderType;
  options: {
    name: string;
    value: string;
  }[];
}

export const Select = ({
  label,
  description,
  errorMessage,
  wrapperClassName,
  labelClassName,
  ...props
}: FormFieldSelectProps): JSX.Element => {
  const [field, meta] = useField(props);
  const hasError = errorMessage || (meta.touched && meta.error);
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
      <SelectComponent
        id={field.name}
        value={field.value}
        onChange={field.onChange}
        onBlur={field.onBlur}
        {...props}
      />
      <>{hasError && error && <Error>{error}</Error>}</>
      <>{description && <Description>{description}</Description>}</>
    </Wrapper>
  );
};
