import { Form, Formik } from "formik";
import { storiesOf } from "@storybook/react";
import centered from "@storybook/addon-centered/react";
import { boolean, select, text } from "@storybook/addon-knobs";
import { Input } from "./Input";
import { Radio } from "./Radio";
import { ToggleSwitch } from "./ToggleSwitch";
import { Select } from "./Select";
import { Checkbox } from "./Checkbox";

// TODO type
const FormikFormWrapper = ({ initialValues, children }: any) => (
  <Formik
    initialValues={initialValues}
    onSubmit={(values) => {
      // eslint-disable-next-line no-console
      console.log(values, "submit");
    }}
  >
    {() => <Form>{children}</Form>}
  </Formik>
);

storiesOf("FormField", module)
  .addDecorator(centered)
  .add("Input", () => (
    <FormikFormWrapper initialValues={{ email: "jan@wp.pl" }}>
      <Input
        name="email"
        disabled={boolean("disabled", false)}
        placeholder={text("placeholder", "placeholder")}
        type={select(
          "type",
          {
            text: "text",
            password: "password",
            email: "email",
          },
          "text"
        )}
        description={text("description", "Input description")}
        label={text("label", "Email address")}
        errorMessage={text("errorMessage", "Error message")}
      />
    </FormikFormWrapper>
  ))
  .add("Radio", () => (
    <FormikFormWrapper initialValues={{ car: "toyota" }}>
      <Radio
        name="car"
        label={text("label", "Toyota")}
        disabled={boolean("disabled", false)}
        description={text("description", "Toyota description")}
        valueToSet="toyota"
        errorMessage={text("errorMessage", "Error message")}
      />
      <Radio
        name="car"
        label="Porshe"
        disabled={boolean("disabled", false)}
        description="Porshe description"
        valueToSet="porshe"
      />
    </FormikFormWrapper>
  ))
  .add("ToggleSwitch", () => (
    <FormikFormWrapper initialValues={{ active: true }}>
      <ToggleSwitch
        name="active"
        label={text("label", "Is active")}
        disabled={boolean("disabled", false)}
        description={text("description", "Active description")}
        valueToSet={boolean("valueToSet", true)}
        errorMessage={text("errorMessage", "Error message")}
      />
    </FormikFormWrapper>
  ))
  .add("Select", () => (
    <FormikFormWrapper initialValues={{ car: "porshe" }}>
      <Select
        label={text("label", "Car")}
        name="car"
        options={[
          { name: "Porshe", value: "porshe" },
          { name: "Toyota", value: "toyota" },
          { name: "Audi", value: "audi" },
        ]}
        placeholder={text("placeholder", "Select car...")}
        disabled={boolean("disabled", false)}
        description={text("description", "Active description")}
        errorMessage={text("errorMessage", "Error message")}
      />
    </FormikFormWrapper>
  ))
  .add("Checkbox", () => (
    <FormikFormWrapper initialValues={{ car: "toyota" }}>
      <Checkbox
        name="car"
        label={text("label", "Toyota")}
        disabled={boolean("disabled", false)}
        checked={boolean("checked", true)}
      />
      <Checkbox name="car" label="Porshe" disabled={false} checked={false} />
    </FormikFormWrapper>
  ));
