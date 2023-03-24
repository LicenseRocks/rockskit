import React from "react";

import { StoryWrapper } from "../../.storybook/decorators";
import { H4, Table, Text } from "..";

const ROW = {
  icon: {
    icon: "file",
  },
  license: (
    <div>
      <Text content="Adobe" color="textPrimary" />
      <H4 content="Acrobat Pro Publisher" />
    </div>
  ),
  amount: 12,
  unitPrice: "€10,00",
  netPrice: "€120,00",
  action: [
    {
      icon: "trash",
      onClick: console.log,
      Wrapper: null,
    },
    {
      icon: "pencil-alt",
      onClick: console.log,
      Wrapper: null,
    },
  ],
};

export default {
  title: "Table",
  decorators: [StoryWrapper],
};

export const main = () => {
  const defaultProps = {
    blackBorders: true,
    columns: [
      {
        hiddenSm: true,
        key: "icon",
        tdAlign: "center",
        type: "icon",
      },
      {
        key: "license",
        label: "License",
      },
      {
        displaySm: "inline",
        key: "amount",
        label: "Amount",
        type: "text",
      },
      {
        key: "unitPrice",
        label: "Unit Price",
        type: "text",
      },
      {
        key: "netPrice",
        label: "Net Price",
        type: "text",
      },
      {
        hiddenLabelSm: true,
        flexSm: true,
        key: "action",
        tdAlign: "right",
        type: "action",
      },
    ],
    rows: [ROW, ROW, ROW, ROW, ROW],
  };

  return <Table {...defaultProps} />;
};
