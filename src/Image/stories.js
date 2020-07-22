import React from "react";

import { StoryWrapper } from "../../.storybook/decorators";
import { Image } from ".";

export default {
  title: "Image",
  component: Image,
  decorators: [StoryWrapper],
};

export const main = () => (
  <Image alt="Majid Amiri" src="http://via.placeholder.com/350x150" />
);
