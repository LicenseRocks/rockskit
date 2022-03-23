import React from "react";
import { boolean, text } from "@storybook/addon-knobs";

import { StoryWrapper } from "../../.storybook/decorators";
import { H3, Divider } from "..";

const BaseComponent = ({ Component, title, ...props }) => {
  return (
    <>
      <H3 color="textSecondary">{title}</H3>
      <Component {...props}/>
    </>
  );
};

export default {
  title: "Divider",
  decorators: [StoryWrapper],
};

export const main = () => {
  const defaultProps = {
    vertical: boolean("Vertical", false),
    text: text("Text", "hello im divider"),
    labelColor: text("Label color", "#FFFFFF")
  };

  return (
    <>
      <BaseComponent Component={Divider} title="Divider" {...defaultProps} />
    </>
  );
};
