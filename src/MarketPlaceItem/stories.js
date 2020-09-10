import React from "react";
import styled from "styled-components";
import { select, text } from "@storybook/addon-knobs";

import { StoryWrapper } from "../../.storybook/decorators";
import { H3, MarketPlaceItem } from "..";

const StyledWrapper = styled.div`
  width: ${({ width }) => width};
`;

export default {
  title: "MarketPlaceItem",
  component: MarketPlaceItem,
  decorators: [StoryWrapper],
};

export const main = () => {
  const defaultProps = {
    coverSrc: "https://source.unsplash.com/featured?technology",
    badges: [
      {
        label: "Badge",
      },
      {
        label: "Badge",
      },
      {
        label: "Badge",
      },
    ],
    details: [
      {
        label: "Creator",
        value: "Majid",
      },
      {
        label: "Amount",
        value: <H3 content="140" />,
      },
    ],
    highlight: "This is highlight",
    megaTitle: "LIM MIRYANG",
    subTitle: "Size: 32 W x 25.5 H x 1 in",
    title: "Shooting",
    type: select(
      "Type",
      ["legacy", "modern", "modernHorizontal"],
      "modernHorizontal"
    ),
  };

  return (
    <StyledWrapper width={text("Wrapper width", "100%")}>
      <MarketPlaceItem {...defaultProps} />
    </StyledWrapper>
  );
};
