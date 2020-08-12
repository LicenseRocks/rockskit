import React from "react";
import { number } from "@storybook/addon-knobs";

import { StoryWrapper } from "../../../.storybook/decorators";
import { DotsSpinner } from ".";

export default {
  title: "Spinner/Dots",
  decorators: [StoryWrapper],
};

export const main = () => {
  const defaultProps = {
    size: number("Size", 60),
  };

  return <DotsSpinner {...defaultProps} />;
};
