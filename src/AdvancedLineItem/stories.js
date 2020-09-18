import React from "react";

import { AdvancedLineItem } from ".";

export default {
  title: "AdvancedLineItem"
};

const BaseComponent = ({ totalPage, ...props }) => {
  const contentItems = [
    {
      icon: "truck",
      mainText: "Order #1234",
      md: 6
    },
    {
      mainText: "12",
      mainTextSize: 14,
      text: " licenses"
    },
    {
      align: "right",
      badge: "initialized"
    },
    {
      icon: "map-marker",
      md: 6,
      text: "Address"
    },
    {
      icon: "calendar",
      text: "2020.04.04"
    },
    {
      skip: true
    }
  ];

  const actionButtons = [
    {
      title: "Action A"
    },
    {
      title: "Action B",
      type: "outline"
    }
  ];

  return (
    <AdvancedLineItem
      actionButtons={actionButtons}
      contentItems={contentItems}
      itemId={1}
      {...props}
    />
  );
};

export const main = () => <BaseComponent actionButtons={[]} />;

export const withActionButtons = () => {
  return <BaseComponent />;
};

export const linkedItem = () => <BaseComponent link="/sample-link" />;
