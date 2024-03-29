import React, { useState } from "react";

// UI
import {
  DownloadModule,
  ExplorerLayout,
  H1,
  H4,
  OutlineButton,
  Text,
} from "../..";
import { main as DetailsTableStory } from "../../DetailsTable/stories";
import { main as ShareModuleStory } from "../../ShareModule/stories";
import { main as HistoryStory } from "../../History/stories";
import { main as FileManagerStory } from "../../FileManager/stories";
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
    render: () => <HistoryStory />,
  },
  {
    index: 1,
    value: "files",
    label: "Files",
    showTab: true,
    showContent: true,
    render: () => <FileManagerStory />,
  },
];

const headerRight = (
  <OutlineButton content="Action Button" color="secondary" size="sm" />
);

const sidebar = (
  <>
    <H4 mb={6}>Share this license</H4>
    <ShareModuleStory mb={6} />
  </>
);

const extraSidebar = <DownloadModule mb={6} />;

const content = (
  <>
    <H1 content="Main content" />
    <Text color="textSecondary" mb={2}>
      Network:
      <Text color="textPrimary" content=" Mainnet" dInline fontWeight="bold" />
    </Text>
    <OutlineButton
      color="secondary"
      content="Visit Website of License"
      size="sm"
    />

    <DetailsTableStory my={10} />
  </>
);

export const main = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const extraContent = (
    <>
      <Tab currentTab={currentTab} onChange={setCurrentTab} tabs={TABS} />
      {TABS[currentTab].render()}
    </>
  );

  return (
    <ExplorerLayout
      content={content}
      extraContent={extraContent}
      extraSidebar={extraSidebar}
      headerLogoAction={() => {}}
      headerRight={headerRight}
      sidebar={sidebar}
    />
  );
};
