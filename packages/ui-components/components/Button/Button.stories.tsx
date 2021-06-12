import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import centered from "@storybook/addon-centered/react";
import { boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
// eslint-disable-next-line import/no-extraneous-dependencies
import { TrashAlt } from "@styled-icons/boxicons-regular";
import { Button, ColorType } from "./Button";

const TrashIcon = styled(TrashAlt)`
  color: red;
`;

storiesOf("Button", module)
  .addDecorator(centered)
  .add("default", () => (
    <Button
      type={select(
        "type",
        {
          primary: ColorType.Primary,
          secondary: ColorType.Secondary,
          error: ColorType.Error,
          warning: ColorType.Warning,
          success: ColorType.Success,
          empty: ColorType.Empty,
        },
        ColorType.Primary
      )}
      disabled={boolean("disabled", false)}
      isHollow={boolean("isHollow", false)}
      onClick={action("clicked")}
    >
      Hello Button
    </Button>
  ))
  .add("Empty with icon", () => (
    <Button
      type={ColorType.Empty}
      disabled={boolean("disabled", false)}
      onClick={action("clicked")}
    >
      <TrashIcon style={{ width: "17px", height: "17px" }} />
    </Button>
  ));
