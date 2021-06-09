import { storiesOf } from "@storybook/react";
import React from "react";
import centered from "@storybook/addon-centered/react";
import { boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { TrashAlt } from "@styled-icons/boxicons-regular";

import { Button } from "./Button";
import styled from "styled-components";

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
          primary: "primary",
          secondary: "secondary",
          error: "error",
          warning: "warning",
          success: "success",
          empty: "empty",
        },
        "primary"
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
      type="empty"
      disabled={boolean("disabled", false)}
      onClick={action("clicked")}
    >
      <TrashIcon style={{ width: "17px", height: "17px" }} />
    </Button>
  ));
