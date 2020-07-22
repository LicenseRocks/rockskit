import React from "react";

// UI
import { ExplorerLayout, H1, H4, OutlineButton } from "../..";

export default {
  title: "Layout/Explorer",
};

const headerAction = (
  <OutlineButton content="Action Button" color="secondary" size="sm" />
);

const sidebar = <H4>Sidebar</H4>;

export const main = () => (
  <ExplorerLayout headerAction={headerAction} sidebar={sidebar}>
    <H1 content="Main content" />
  </ExplorerLayout>
);
