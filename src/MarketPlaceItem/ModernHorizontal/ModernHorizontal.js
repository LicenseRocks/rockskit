import React from "react";
import styled, { css } from "styled-components";

import {
  BoxBase,
  Button,
  DetailsTable,
  Flex,
  H3,
  Hidden,
  Text,
  TinyBadge,
} from "../..";
import {
  MarketPlaceItemPropTypes,
  MarketPlaceItemDefaultProps,
} from "../props";
import { Cover } from "./Cover";

const StyledMarketPlaceItem = styled(BoxBase)`
  border-radius: 8px;
  height: 140px;
  width: 100%;
  display: flex;
  align-items: center;
  transition: all 200ms ease-in-out;

  :not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing(4)};
  }

  ${({ hoverEffect }) =>
    hoverEffect &&
    css`
      &:hover {
        transform: scale(1.02);
      }
    `}
`;

const Content = styled(Flex).attrs(() => ({
  container: true,
  alignItems: "flex-start",
  justify: "space-between",
}))`
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spacing(4)};
  box-sizing: border-box;
  z-index: 1;
`;

const Highlight = styled.div`
  display: flex;
  align-items: flex-end;
  background-color: ${({ theme }) => theme.palette.primary.light};
  padding: ${({ theme }) => theme.spacing(0, 0, 1, 4)};
  height: 36px;
  border-radius: 8px;
  margin-top: -16px;
  z-index: 1;
`;

export const ModernHorizontalItem = ({
  ActionWrapper,
  action,
  actionTitle,
  badges,
  coverSrc,
  coverPlaceholderSrc,
  dataCy,
  details,
  highlight,
  megaTitle,
  price,
  priceLabel,
  subTitle,
  title,
  Wrapper,
  ...props
}) => {
  const actionButton = (
    <Button block content={actionTitle} color="subtle" onClick={action} />
  );

  const Item = () => (
    <>
      <StyledMarketPlaceItem data-cy={dataCy} {...props}>
        <Cover imgSrc={coverSrc} placeholderSrc={coverPlaceholderSrc} />

        <Content>
          <Flex item xs={12} md={7} lg={8} pl={4}>
            <H3 content={title} noWrap />

            <Text
              content={megaTitle}
              color="textSecondary"
              fontSize="sm"
              fontStyle="italic"
              noWrap
            />

            <Text
              content={subTitle}
              color="textSecondary"
              fontSize="sm"
              fontStyle="italic"
              noWrap
            />

            <Hidden smDown>
              <DetailsTable
                labelFontSize="sm"
                mt={4}
                size="sm"
                rows={details}
              />
            </Hidden>
          </Flex>

          <Hidden smDown>
            <Flex item>
              {badges.map((badge) => (
                <TinyBadge {...badge} dBlock mb={1} />
              ))}
            </Flex>
          </Hidden>

          <Flex
            item
            lg={2}
            md={3}
            xs={11}
            container
            justify="space-between"
            alignItems="flex-start"
            h100
          >
            <div>
              <Text
                content={priceLabel}
                fontStyle="italic"
                fontSize="sm"
                mb={2}
              />

              <H3 content={price} color="primary" noWrap />
            </div>

            {ActionWrapper ? (
              <ActionWrapper>{actionButton}</ActionWrapper>
            ) : (
              actionButton
            )}
          </Flex>
        </Content>
      </StyledMarketPlaceItem>
      {highlight && (
        <Highlight>
          <Text
            color="primary"
            content={highlight}
            fontWeight="bold"
            fontSize="sm"
          />
        </Highlight>
      )}
    </>
  );

  return Wrapper ? (
    <Wrapper>
      <Item />
    </Wrapper>
  ) : (
    <Item />
  );
};

ModernHorizontalItem.propTypes = MarketPlaceItemPropTypes;

ModernHorizontalItem.defaultProps = MarketPlaceItemDefaultProps;
