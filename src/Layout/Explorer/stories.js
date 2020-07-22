import React from "react";

// UI
import { ExplorerLayout, H1, H4, OutlineButton } from "../..";
import { main as DetailsTableStory } from "../../DetailsTable/stories";

export default {
  title: "Layout/Explorer",
  parameters: {
    options: { showPanel: false },
  },
};

const headerRight = (
  <OutlineButton content="Action Button" color="secondary" size="sm" />
);

const sidebar = <H4>Sidebar</H4>;

export const main = () => (
  <ExplorerLayout
    headerLogoAction={() => {}}
    headerRight={headerRight}
    sidebar={sidebar}
  >
    <H1 content="Main content" />
    <DetailsTableStory />
  </ExplorerLayout>
);
