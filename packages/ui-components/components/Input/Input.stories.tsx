import { storiesOf } from "@storybook/react";
import React from "react";
import centered from "@storybook/addon-centered/react";
import { boolean, select, text } from "@storybook/addon-knobs";
import { Input } from "./Input";

storiesOf("Input", module)
  .addDecorator(centered)
  .add("default", () => (
    <Input
      disabled={boolean("disabled", false)}
      isInvalid={boolean("isInvalid", false)}
      placeholder={text("placeholder", "placeholder")}
      type={select(
        "type",
        {
          text: "text",
          password: "password",
          email: "email",
          number: "number",
        },
        "text"
      )}
    />
  ));
