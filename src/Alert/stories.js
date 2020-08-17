import React from "react";
import { select } from "@storybook/addon-knobs";

import { StoryWrapper } from "../../.storybook/decorators";
import { Alert } from "./Alert";

export default {
  title: "Alert",
  component: Alert,
  decorators: [StoryWrapper],
};

export const main = () => {
  return (
    <Alert
      color={select("Color", ["info", "danger", "warning"], "info")}
      content="Message content"
    />
  );
};
