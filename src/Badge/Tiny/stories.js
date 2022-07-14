import React from "react";
import { select, text, boolean } from "@storybook/addon-knobs";

import { StoryWrapper } from "../../../.storybook/decorators";
import { THEME_COLORS } from "../../theme";
import { TinyBadge } from ".";

export default {
  title: "Badge/TinyBadge",
  decorators: [StoryWrapper],
};

export const main = () => {
  const defaultProps = {
    color: select("Color", THEME_COLORS, "black"),
    label: text("Chip label", "Label"),
  };

  return <TinyBadge {...defaultProps} />;
};
