import React from "react";
import { text } from "@storybook/addon-knobs";

import { StoryWrapper } from "../../../.storybook/decorators";
import { FormLabel } from ".";

export default {
  title: "Form/Label",
  component: FormLabel,
  decorators: [StoryWrapper],
};

export const main = () => {
  const defaultProps = {
    children: text("Label", "Label"),
  };

  return <FormLabel {...defaultProps} />;
};
