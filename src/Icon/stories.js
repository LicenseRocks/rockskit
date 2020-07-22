import React from "react";
import { select, withKnobs } from "@storybook/addon-knobs";

import { StoryWrapper } from "../../.storybook/decorators";
import { KIT_ICON_SIZES, KIT_ICON_COLORS } from "../theme";
import { Icon } from ".";

export default {
  title: "Icon",
  decorators: [StoryWrapper, withKnobs],
};

export const main = () => {
  const defaultProps = {
    color: select("Color", KIT_ICON_COLORS, "text"),
    size: select("Size", Object.keys(KIT_ICON_SIZES), "md"),
  };

  return <Icon icon="check-circle" {...defaultProps} />;
};
