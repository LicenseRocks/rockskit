import React, { useState } from "react";

// UI
import { ExplorerLayout, H1, H4, OutlineButton } from "../..";
import { main as DetailsTableStory } from "../../DetailsTable/stories";
import { main as ShareModuleStory } from "../../ShareModule/stories";
import { Tab } from "../../Tab";

export default {
  title: "Layout/Explorer",
  parameters: {
    options: { showPanel: false },
  },
};

const TABS = [
  {
    index: 0,
    value: "itemHistory",
    label: "Item History",
    showTab: true,
    showContent: true,
    render: () => "Item History",
  },
  {
    index: 1,
    value: "files",
    label: "Files",
    showTab: true,
    showContent: true,
    render: () => "Files",
  },
];

const headerRight = (
  <OutlineButton content="Action Button" color="secondary" size="sm" />
);

const sidebar = (
  <>
    <H4>Share this license</H4>
    <ShareModuleStory />
  </>
);

export const main = () => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <ExplorerLayout
      headerLogoAction={() => {}}
      headerRight={headerRight}
      sidebar={sidebar}
    >
      <H1 content="Main content" />
      <DetailsTableStory />
      <Tab currentTab={currentTab} onChange={setCurrentTab} tabs={TABS} />
    </ExplorerLayout>
  );
};
