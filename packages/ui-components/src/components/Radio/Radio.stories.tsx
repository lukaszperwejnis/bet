import { storiesOf } from "@storybook/react";
import centered from "@storybook/addon-centered/react";
import { boolean, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { Radio } from "./Radio";

storiesOf("Radio", module)
  .addDecorator(centered)
  .add("default", () => (
    <Radio
      value="1"
      name="radio"
      disabled={boolean("disabled", false)}
      checked={boolean("checked", false)}
      label={text("label", "Label")}
      onChange={action("onChange")}
      onBlur={action("onBlur")}
    />
  ));
