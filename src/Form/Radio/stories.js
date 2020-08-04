import React from "react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { useForm } from "react-hook-form";

import { StoryWrapper } from "../../../.storybook/decorators";
import { Radio } from "./Radio";

export default {
  title: "Form/Radio",
  component: Radio,
  decorators: [StoryWrapper, withKnobs],
};

export const main = () => {
  const { register, watch } = useForm();

  const defaultProps = {
    disabled: boolean("Disabled", false),
    hasError: boolean("Has error", false),
    name: "radio",
    options: [
      { value: "first", label: "First" },
      { value: "second", label: "Second" },
      { value: "third", label: "Third" },
    ],
    register,
    stacked: boolean("Stacked", false),
  };

  const values = watch();
  console.log("values: ", values);

  return <Radio {...defaultProps} />;
};
