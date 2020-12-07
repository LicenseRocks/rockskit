import React from "react";

import { StoryWrapper } from "../../.storybook/decorators";
import { HistoryTree } from ".";

export default {
  title: "HistoryTree",
  component: HistoryTree,
  decorators: [StoryWrapper],
};

export const main = () => {
  const defaultProps = {
    activeNodeId: 3,
    data: [
      {
        key: 1,
        description: "2020-12-20",
        nodes: [
          {
            id: 1,
            label: "NFT created",
          },
        ],
      },
      {
        key: 2,
        description: "2020-12-22",
        nodes: [
          {
            id: 2,
            label: "NFT re-created",
          },
          {
            id: 3,
            label: "Documents added",
          },
        ],
      },
    ],
  };

  return <HistoryTree {...defaultProps} />;
};
