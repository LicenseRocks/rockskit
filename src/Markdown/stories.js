import React from "react";
import { StoryWrapper } from "../../.storybook/decorators";
import { Markdown } from "./Markdown";

export default {
  title: "Markdown",
  decorators: [StoryWrapper],
};

export const main = () => {
  const [content, setContent] = React.useState("");
  const defaultProps = {};

  return <Markdown value={content} onChange={setContent} {...defaultProps} />;
};
