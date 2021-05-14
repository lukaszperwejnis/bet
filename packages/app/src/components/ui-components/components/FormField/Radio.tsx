import { useField } from 'formik';
import { RenderType, WithExcludedChildrenProps } from '@structures';
import { Wrapper, Error, Description } from './components';
import { Radio as RadioComponent } from '../Radio/Radio';

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
  name,
  ...props
}: FormFieldRadioProps): JSX.Element => {
  const [field, meta] = useField({ name, ...props });
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
      <>{hasError && error && <Error>{error}</Error>}</>
      <>{description && <Description>{description}</Description>}</>
    </Wrapper>
  );
};
