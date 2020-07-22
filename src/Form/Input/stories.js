import React from "react";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";

import { StoryWrapper } from "../../../.storybook/decorators";
import { Input } from "./Input";

export default {
  title: "Form/Input",
  component: Input,
  decorators: [StoryWrapper, withKnobs],
};

export const main = () => {
  const defaultProps = {
    disabled: boolean("Disabled", false),
    endIcon: "box",
    name: "textInput",
    placeholder: text("Placeholder", "Placeholder"),
    startIcon: "user",
  };

  return <Input {...defaultProps} />;
};
