import { storiesOf } from "@storybook/react";
import React from "react";
import centered from "@storybook/addon-centered/react";
import { boolean, text } from "@storybook/addon-knobs";
import { Radio } from "./Radio";
import { action } from "@storybook/addon-actions";

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
