import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import { StoryWrapper } from "../../.storybook/decorators";
import { ShareModule } from ".";

export default {
  title: "ShareModule",
  decorators: [StoryWrapper, withKnobs],
};

export const main = (props) => {
  const defaultProps = {
    url: "https://license.rocks/",
    ...props,
  };

  return <ShareModule {...defaultProps} />;
};