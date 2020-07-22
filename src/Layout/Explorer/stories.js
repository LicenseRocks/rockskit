import React from "react";

// UI
import { ExplorerLayout, H1, H4, OutlineButton, ShareModule } from "../..";
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

const sidebar = (
  <>
    <H4>Share this license</H4>
    <ShareModule />
  </>
);

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
