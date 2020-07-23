import React from "react";
import { select, withKnobs, boolean } from "@storybook/addon-knobs";

import { StoryWrapper } from "../../.storybook/decorators";
import { KIT_ICON_SIZES, THEME_COLORS } from "../theme";
import { Icon } from ".";

export default {
  title: "Icon",
  decorators: [StoryWrapper, withKnobs],
};

export const main = () => {
  const defaultProps = {
    bordered: boolean("Bordered", false),
    color: select("Color", THEME_COLORS, "primary"),
    size: select("Size", Object.keys(KIT_ICON_SIZES), "md"),
  };

  return <Icon icon="check-circle" {...defaultProps} />;
};
