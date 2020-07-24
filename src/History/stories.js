import React from "react";

import { StoryWrapper } from "../../.storybook/decorators";
import { History } from "./History";
import { Text } from "..";

export default {
  title: "History",
  component: History,
  decorators: [StoryWrapper],
};

const ROWS = [
  {
    id: 1,
    description: "Description",
    moreInfo: "2020-06-20",
    title: "Test",
    icon: "check-circle",
    iconColor: "success",
    collapsible: true,
    collapseContent: (
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt
        suscipit purus, et ultrices ante sagittis sit amet. Nulla in scelerisque
        erat. Phasellus molestie turpis vel nisi commodo lacinia. Etiam vitae
        lectus lectus. Etiam et diam ex. Cras tellus dolor, congue sed libero
        cursus, dictum dapibus nisl. Nam efficitur ante non nibh efficitur, sed
        porttitor nisi tristique. Duis pellentesque eu dolor sit amet tristique.
        Ut id ligula aliquet, suscipit erat eget, commodo nisi. Sed ut diam non
        turpis pretium ultricies nec non purus. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas. Cras
        sagittis nisl sit amet mollis blandit. Fusce hendrerit lacus nec cursus
        scelerisque. Nullam mollis eu ante in pharetra. In aliquam sapien eu
        rutrum vestibulum. Aenean facilisis leo vitae odio laoreet ultrices.
      </Text>
    ),
  },
  {
    id: 2,
    description: "Some description",
    moreInfo: "2020-02-10",
    title: "Test 2",
    icon: "plus",
    iconColor: "secondary",
  },
  {
    id: 3,
    description: "",
    moreInfo: "2020-01-23",
    title: "Test 3",
    icon: "copy",
    iconColor: "warning",
  },
];

export const main = () => <History rows={ROWS} />;
