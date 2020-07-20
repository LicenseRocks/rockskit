import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import { H1, H2, H3, H4 } from ".";

export default {
  title: "Typography",
  component: Text,
  decorators: [withKnobs],
};

const BaseComponent = ({ Component, title, ...props }) => {
  return (
    <>
      <H3 color="textSecondary">{title}</H3>
      <Component {...props}>
        license.rocks is among the Top10 at the German startup award
      </Component>
    </>
  );
};

export const main = () => {
  return (
    <>
      <BaseComponent Component={H1} title="h1" />

      <BaseComponent Component={H2} title="h2" />

      <BaseComponent Component={H3} title="h3" />

      <BaseComponent Component={H4} title="h4" />
    </>
  );
};
