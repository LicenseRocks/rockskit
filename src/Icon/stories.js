import React from "react";
import { select, boolean } from "@storybook/addon-knobs";

import { StoryWrapper } from "../../.storybook/decorators";
import { KIT_ICON_SIZES, THEME_COLORS } from "../theme";
import { Icon } from ".";

export default {
  title: "Icon",
  decorators: [StoryWrapper],
};

export const main = () => {
  const defaultProps = {
    color: select("Color", THEME_COLORS, "primary"),
    rounded: boolean("Rounded", false),
    squared: boolean("Squared", false),
    size: select("Size", Object.keys(KIT_ICON_SIZES), "md"),
  };

  return <Icon icon="check-circle" {...defaultProps} />;
};
