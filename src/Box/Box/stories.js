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
    contentPadding: boolean("Content padding", false),
    footerActionTitle: text("Footer action title", "Submit"),
    footerActionDisabled: boolean("Footer action disabled", false),
    footerActionLoading: boolean("Footer action loading", false),
    footerRenderTitle: () => "Footer",
    headerActionIcon: text("Header action icon", "chevron-right"),
    headerTitle: text("Header title", "Title"),
    headerTitleIcon: text("Header title icon", "box"),
    loading: boolean("Loading", false),
    loadingMessage: text("Loading message", "Loading... Thanks for waiting"),
    tabs: [
      {
        index: 0,
        value: "first",
        label: "First tab",
        showTab: true,
        showContent: true,
        render: () => "First Tab",
      },
      {
        index: 1,
        value: "second",
        label: "Second tab",
        showTab: true,
        showContent: true,
        render: () => "Second Tab",
      },
    ],
    tabsProps: {
      currentTab: 0,
    },
    transparentSm: boolean("Transparent SM", false),
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
