import React from "react";
import { boolean } from "@storybook/addon-knobs";
import { useForm } from "react-hook-form";

import { StoryWrapper } from "../../../.storybook/decorators";
import { Radio } from "./Radio";

export default {
  title: "Form/Radio",
  component: Radio,
  decorators: [StoryWrapper],
};

export const main = () => {
  const { register, watch } = useForm();

  const defaultProps = {
    disabled: boolean("Disabled", false),
    hasError: boolean("Has error", false),
    name: "radio",
    options: [
      { value: "first", label: "First", icon: "tv" },
      { value: "second", label: "Second" },
      { value: "third", label: "Third" },
    ],
    register,
    stacked: boolean("Stacked", true),
  };

  const values = watch();
  console.log("values: ", values);

  return <Radio {...defaultProps} />;
};
