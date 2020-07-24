import React, { useState } from "react";
import { withKnobs } from "@storybook/addon-knobs";

import { StoryWrapper } from "../../.storybook/decorators";
import { Tab } from ".";

export default {
  title: "Tab",
  decorators: [StoryWrapper, withKnobs],
};

const TABS = [
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
];

export const main = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const defaultProps = {
    currentTab,
    onChange: setCurrentTab,
    tabs: TABS,
  };

  return (
    <>
      <Tab {...defaultProps} />
      {TABS[currentTab].render()}
    </>
  );
};
