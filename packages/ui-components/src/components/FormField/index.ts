import { Description, Error, Label, Wrapper } from './components';
import { Input } from './Input';
import { Radio } from './Radio';
import { ToggleSwitch } from './ToggleSwitch';
import { Select } from './Select';
import { Checkbox } from './Checkbox';

export const FormComponents = {
  Description,
  Error,
  Label,
  Wrapper,
};

type FormFieldType = {
  Input: any;
  Radio: any;
  ToggleSwitch: any;
  Select: any;
  Checkbox: any;
};

export const FormField: FormFieldType = {
  Input,
  Radio,
  ToggleSwitch,
  Select,
  Checkbox,
};
