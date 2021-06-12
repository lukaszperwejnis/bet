import { storiesOf } from "@storybook/react";
import centered from "@storybook/addon-centered/react";
import { boolean } from "@storybook/addon-knobs";

import { Tile } from "./Tile";

storiesOf("Tile", module)
  .addDecorator(centered)
  .add("default", () => (
    <Tile isRound={boolean("isRound", false)}>Hello from the tile</Tile>
  ));
