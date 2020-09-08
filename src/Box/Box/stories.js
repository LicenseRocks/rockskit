import React from "react";
import { boolean, text } from "@storybook/addon-knobs";

import { StoryWrapper } from "../../../.storybook/decorators";
import { Box } from ".";

export default {
  title: "Box/Box",
  component: Box,
  decorators: [StoryWrapper],
};

export const main = () => {
  const defaultProps = {
    footerActionTitle: text("Footer action title", "Submit"),
    footerActionDisabled: boolean("Footer action disabled", false),
    footerActionLoading: boolean("Footer action loading", false),
    footerRenderTitle: () => "Footer",
    headerActionIcon: text("Header action icon", "chevron-right"),
    headerTitle: text("Header title", "Title"),
    headerTitleIcon: text("Header title icon", "box"),
    loading: boolean("Loading", false),
    loadingMessage: text("Loading message", "Loading... Thanks for waiting"),
  };

  return (
    <Box {...defaultProps}>
      Content
      <br />
      Content
      <br />
      Content
      <br />
      Content
      <br />
      Content
      <br />
      Content
      <br />
      Content
      <br />
      Content
      <br />
      Content
      <br />
      Content
      <br />
      Content
      <br />
    </Box>
  );
};
