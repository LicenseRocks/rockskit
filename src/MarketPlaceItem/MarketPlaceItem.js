import React from "react";
import styled, { css } from "styled-components";

import {
  BoxBase,
  Button,
  DetailsTable,
  Divider,
  H3,
  Icon,
  Image,
  Text,
} from "..";
import { MarketPlaceItemPropTypes, MarketPlaceItemDefaultProps } from "./props";
import { LicenseBox } from "./LicenseBox";

const StyledMarketPlaceItem = styled(BoxBase)`
  border-radius: 8px;
  overflow: initial;
  min-height: 240px;
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing(10)};
  width: 100%;
`;

const Content = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spacing(2, 4, 4, 4)};
  box-sizing: border-box;
  ${({ initialTextAlign }) => initialTextAlign && "text-align: initial;"}
`;

export const MarketPlaceItem = ({
  ActionWrapper,
  action,
  actionTitle,
  dataCy,
  details,
  iconName,
  iconPrefix,
  iconColor,
  megaTitle,
  subTitle,
  title,
  ...props
}) => {
  const actionButton = (
    <Button block content={actionTitle} color="subtle" onClick={action} />
  );

  return (
    <StyledMarketPlaceItem data-cy={dataCy} {...props}>
      <LicenseBox
        iconName={iconName}
        iconPrefix={iconPrefix}
        iconColor={iconColor}
      />

      <Content>
        <Text content={megaTitle} color="textSecondary" noWrap />

        <H3 content={title} noWrap />

        <Text
          content={subTitle}
          color="textSecondary"
          fontSize="sm"
          fontStyle="italic"
          noWrap
        />
      </Content>

      <Divider />

      <Content initialTextAlign>
        <DetailsTable justifyBetween rows={details} />

        {ActionWrapper ? (
          <ActionWrapper>{actionButton}</ActionWrapper>
        ) : (
          actionButton
        )}
      </Content>
    </StyledMarketPlaceItem>
  );
};

MarketPlaceItem.propTypes = MarketPlaceItemPropTypes;

MarketPlaceItem.defaultProps = MarketPlaceItemDefaultProps;
