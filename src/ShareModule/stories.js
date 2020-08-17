import React from "react";

import { StoryWrapper } from "../../.storybook/decorators";
import { ShareModule } from ".";

export default {
  title: "ShareModule",
  decorators: [StoryWrapper],
};

export const main = (props) => {
  const defaultProps = {
    url: "https://license.rocks/",
    ...props,
  };

  return <ShareModule {...defaultProps} />;
};
