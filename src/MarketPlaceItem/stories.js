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
    coverSrc: "https://creatorshub.s3.eu-central-1.amazonaws.com/0x5a4e206426c168a62db840d653a420b629b402ae/nftFiles/10/cover/joker.jpg",
    badges: [
      {
        label: "Warning Badge",
        color: "warning"
      },
      {
        label: "Error Badge",
        color: "error"
      },
      {
        label: "Gray Badge",
        color: "gray"
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
    title: text("Title", "Shooting"),
    type: select("Type", ["legacy", "modern", "modernHorizontal", "claimForFree"], "modern"),
    buttonText: text("Button Text", "Claim NFT for free"),
    // addToFavorites: alert("Adding to favorites ❤️"),
  };

  return (
    <StyledWrapper width={text("Wrapper width", "240px")}>
      <MarketPlaceItem {...defaultProps} />
    </StyledWrapper>
  );
};
