import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";

import { StoryWrapper } from "../../../.storybook/decorators";
import { FormLabel } from ".";

export default {
  title: "Form/Label",
  component: FormLabel,
  decorators: [StoryWrapper, withKnobs],
};

export const main = () => {
  const defaultProps = {
    children: text("Label", "Label"),
  };

  return <FormLabel {...defaultProps} />;
};
