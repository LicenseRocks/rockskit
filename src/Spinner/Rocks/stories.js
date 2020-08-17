import React from "react";
import { number } from "@storybook/addon-knobs";

import { StoryWrapper } from "../../../.storybook/decorators";
import { RocksSpinner } from ".";

export default {
  title: "Spinner/Rocks",
  decorators: [StoryWrapper],
};

export const main = () => {
  const defaultProps = {
    size: number("Size", 60),
  };

  return <RocksSpinner {...defaultProps} />;
};
