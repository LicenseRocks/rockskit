import React from "react";

import { StoryWrapper } from "../../.storybook/decorators";
import { Thumbnail } from ".";

export default {
  title: "Thumbnail",
  decorators: [StoryWrapper],
};

export const main = () => {
  return <Thumbnail imgSrc="https://via.placeholder.com/350x150" />;
};

export const withBrokenImage = () => {
  return <Thumbnail imgSrc="https://example.com/example.jpg" />;
};

export const withPreview = () => {
  return <Thumbnail imgSrc="https://via.placeholder.com/500X1000" hasPreview />;
};
