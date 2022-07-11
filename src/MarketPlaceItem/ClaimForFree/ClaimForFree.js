import React from "react";
import styled, { css } from "styled-components";

import { BoxBase, DetailsTable, H3, Icon, OutlineButton, Text, TinyBadge } from "../..";
import {
  MarketPlaceItemPropTypes,
  MarketPlaceItemDefaultProps,
} from "../props";
import { Cover } from "./Cover";

const StyledMarketPlaceItem = styled(BoxBase)`
  border-radius: 16px;
  overflow: hidden;
  min-height: 112px;
  width: 100%;
  display: flex;
  flex-direction: column;
  transition: all 200ms ease-in-out;

  ${({ hoverEffect }) =>
  hoverEffect &&
  css`
      &:hover {
        transform: scale(1.03);
      }
    `}
`;

const Content = styled.div`
  flex: 1;
  width: 100%;
  padding: ${({ theme }) => theme.spacing(4)};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
`;

const Row = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
`;

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  
  svg {
    transition: color .3s ease-out;
  }
  
  &:hover svg {
    color: ${({ theme }) => theme.palette.error.main};
  }
`;

const Badges = styled.div`
  margin-top: ${({ theme }) => theme.spacing(4)};
`;

export const ClaimForFree = ({
  badges,
  coverSrc,
  coverPlaceholderSrc,
  dataCy,
  details,
  highlight,
  megaTitle,
  subTitle,
  title,
  Wrapper,
  addToFavorites,
  buttonText,
  ...props
}) => {
  const creator = details.find(item => item.label === "Creator").value;
  const Item = () => (
    <StyledMarketPlaceItem data-cy={dataCy} {...props}>
      <Content>
        <Row>
          <H3 content={title} />
          <StyledButton onClick={() => addToFavorites()}>
            <Icon icon="heart" prefix="far" color="black" size="lg" />
          </StyledButton>
        </Row>
        <Text
          content={creator}
          fontSize="sm"
          mt={2}
          mb={4}
        />
        <Cover imgSrc={coverSrc} placeholderSrc={coverPlaceholderSrc} />

        <Badges>
          {badges.map((badge) => (
            <TinyBadge {...badge} mr={1} mb={1} />
          ))}
        </Badges>

        <OutlineButton mt={6} mb={2} color="black">
          {buttonText}
        </OutlineButton>

      </Content>
      {/*<Content>*/}
        {/*<DetailsTable*/}
        {/*  justifyBetween*/}
        {/*  labelFontSize="sm"*/}
        {/*  mt={4}*/}
        {/*  size="sm"*/}
        {/*  rows={details}*/}
        {/*/>*/}
      {/*</Content>*/}
    </StyledMarketPlaceItem>
  );

  return Wrapper ? (
    <Wrapper>
      <Item />
    </Wrapper>
  ) : (
    <Item />
  );
};

ClaimForFree.propTypes = MarketPlaceItemPropTypes;

ClaimForFree.defaultProps = MarketPlaceItemDefaultProps;
