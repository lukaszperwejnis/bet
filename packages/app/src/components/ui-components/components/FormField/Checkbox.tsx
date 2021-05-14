import { useField } from 'formik';
import { RenderType, WithExcludedChildrenProps } from '@structures';
import { Wrapper } from './components';
import { Checkbox as CheckboxComponent } from '../Checkbox/Checkbox';

interface FormFieldCheckboxProps extends WithExcludedChildrenProps {
  name: string;
  label: RenderType;
  checked: boolean;
  disabled?: boolean;
  wrapperClassName?: string;
  labelClassName?: string;
}

export const Checkbox = ({
  label,
  checked,
  wrapperClassName,
  name,
  ...props
}: FormFieldCheckboxProps): JSX.Element => {
  const [field] = useField({ name, ...props });
  return (
    <Wrapper className={wrapperClassName}>
      <CheckboxComponent
        id={field.name}
        label={label}
        name={field.name}
        value={field.value}
        onChange={field.onChange}
        onBlur={field.onBlur}
        checked={checked}
        {...props}
      />
    </Wrapper>
  );
};
