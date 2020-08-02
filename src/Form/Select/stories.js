import React from "react";
import { withKnobs, boolean } from "@storybook/addon-knobs";

import { StoryWrapper } from "../../../.storybook/decorators";
import { Select } from ".";

export default {
  title: "Form/Select",
  component: Select,
  decorators: [StoryWrapper, withKnobs],
};

export const main = (props = {}) => {
  const defaultProps = {
    disabled: boolean("Disabled", false),
    hasError: boolean("Has error", false),
    name: "selectInput",
    options: [
      { value: "first", label: "First" },
      { value: "second", label: "Second" },
      { value: "third", label: "Third" },
    ],
    ...props,
  };

  return <Select {...defaultProps} />;
};
