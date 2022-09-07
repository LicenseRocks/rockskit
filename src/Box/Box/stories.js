import React from "react";
import { boolean, text } from "@storybook/addon-knobs";

import { StoryWrapper } from "../../../.storybook/decorators";
import { Box } from ".";

export default {
  title: "Box/Box",
  component: Box,
  decorators: [StoryWrapper],
};

const createSharedDefaultProps = () => ({
  footerActionTitle: text("Footer action title", "Submit"),
  footerActionDisabled: boolean("Footer action disabled", false),
  footerActionLoading: boolean("Footer action loading", false),
  // footerRenderTitle: () => "Footer Title",
  // footerRenderAction: () => "Footer Action",
  headerActionIcon: text("Header action icon", "chevron-right"),
  headerTitle: text("Header title", "Title"),
  headerTitleIcon: text("Header title icon", "box"),
  headerTitleIconHiddenSm: false,
  headerSubTitle: text("Header sub title", "sub title"),
  headerMetaTitle: text("Header meta title", "meta title"),
  // headerRenderTitle: () => "Header Title",
  // headerRenderAction: () => "Header Action",
  loading: boolean("Loading", false),
  loadingMessage: text("Loading message", "Loading... Thanks for waiting"),
  transparentSm: boolean("Transparent SM", false),
});

export const full = () => {
  const defaultProps = {
    ...createSharedDefaultProps(),
    alert: text("Alert", "This is an alert"),
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

export const Basic = () => {
  return <Box {...createSharedDefaultProps()}>Hello</Box>;
};
