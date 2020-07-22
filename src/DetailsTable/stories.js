import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import { StoryWrapper } from "../../.storybook/decorators";
import { DetailsTable, H3 } from "..";
import { ChipBadge } from "../Badge/Chip";

export default {
  title: "DetailsTable",
  decorators: [StoryWrapper, withKnobs],
};

export const main = () => {
  const defaultProps = {
    rows: [
      {
        label: "Last updated",
        value: "4 Feb 2020",
      },
      {
        label: "Creator",
        value: "Majid Amiri",
      },
      {
        label: "Status",
        value: <ChipBadge icon="check-circle" label="Verified" />,
      },
      {
        label: "Amount",
        value: <H3 content="140" />,
      },
      {
        label: "Unit Price",
        value: <H3 content="100,00" color="primary" />,
      },
    ],
  };

  return <DetailsTable {...defaultProps} />;
};
