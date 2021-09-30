import React from "react";
import { select } from "@storybook/addon-knobs";

import { StoryWrapper } from "../../.storybook/decorators";
import { InspectWarning } from "./InspectWarning";

export default {
  title: "InspectWarning",
  component: InspectWarning,
  decorators: [StoryWrapper],
};

export const main = () => {
  return (
    <InspectWarning
      color={select("Color", ["info", "danger", "warning"], "info")}
      content="Inspect"
    />
  );
};
