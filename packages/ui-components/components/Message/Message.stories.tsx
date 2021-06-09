import { storiesOf } from "@storybook/react";
import centered from "@storybook/addon-centered/react";
import { text } from "@storybook/addon-knobs";
import React from "react";
import { Message } from "./Message";

storiesOf("Message", module)
  .addDecorator(centered)
  .add("success", () => (
    <Message
      root="root"
      type="success"
      text={text("text", "Success message")}
    />
  ))
  .add("error", () => (
    <Message root="root" type="error" text={text("text", "Error message")} />
  ))
  .add("warning", () => (
    <Message
      root="root"
      type="warning"
      text={text("text", "Warning message")}
    />
  ))
  .add("primary", () => (
    <Message root="root" type="info" text={text("text", "Info message")} />
  ));
