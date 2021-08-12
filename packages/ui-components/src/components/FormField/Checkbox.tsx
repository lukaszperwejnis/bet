import { useField } from 'formik';
import { Wrapper } from './components';
import { Checkbox as CheckboxComponent } from '../Checkbox/Checkbox';
import { RenderType, WithExcludedChildrenProps } from '../../types';

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
  ...props
}: FormFieldCheckboxProps): JSX.Element => {
  const [field] = useField(props);
  return (
    <Wrapper className={wrapperClassName}>
      <CheckboxComponent
        id={field.name}
        label={label}
        value={field.value}
        onChange={field.onChange}
        onBlur={field.onBlur}
        checked={checked}
        {...props}
      />
    </Wrapper>
  );
};
