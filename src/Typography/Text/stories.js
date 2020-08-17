import React from "react";
import { select } from "@storybook/addon-knobs";

import { StoryWrapper } from "../../../.storybook/decorators";
import { H3, Paragraph, Text } from "..";

export default {
  title: "Typography/Text",
  decorators: [StoryWrapper],
};

export const main = () => {
  const defaultProps = {
    fontSize: select("Font Size", ["sm", "md", "lg"], "md"),
    fontStyle: select("Font Style", ["normal", "italic"], "normal"),
    fontWeight: select("Font Weight", ["light", "regular", "bold"], "regular"),
  };

  return (
    <>
      <H3 color="textSecondary">Paragraph</H3>
      <Paragraph {...defaultProps}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard dummy text ever
        since the 1500s
      </Paragraph>

      <H3 color="textSecondary">Text</H3>
      <Text {...defaultProps}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard dummy text ever
        since the 1500s
      </Text>
    </>
  );
};
