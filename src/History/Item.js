import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Grid } from "@material-ui/core/Grid";

import { Text } from "..";
import ItemIcon, { IconWrapper } from "./ItemIcon";

const RowWrapper = styled(Grid).attrs(() => ({
  container: true,
  alignItems: "center",
  justify: "center",
  wrap: "nowrap",
}))`
  height: 40px;
  &:first-child {
    ${IconWrapper}::before {
      content: none;
    }
  }
`;

const DetailsWrapper = styled(Grid).attrs(() => ({
  container: true,
  alignItems: "center",
  justify: "space-between",
}))`
  height: 40px;
  box-sizing: border-box;
  border-bottom: 1px solid ${({ theme }) => theme.palette.secondary.main};
`;

const Item = styled(Grid).attrs(() => ({
  item: true,
}))``;

const HistoryItem = ({
  data: { createdAt, description, title, name, attachments },
}) => {
  const renderItem = (url = null) => {
    return (
      <RowWrapper data-cy="historyItem">
        <Item md={1} xs={2}>
          <ItemIcon type={name} />
        </Item>
        <DetailsWrapper md={11} xs={10}>
          <Item md={5} xs={4}>
            <Text>{title}</Text>
          </Item>
          <Item md={5} xs={3}>
            <Text>{description}</Text>
          </Item>
          <Item md={2} xs={3}>
            <Text>{createdAt}</Text>
          </Item>
        </DetailsWrapper>
      </RowWrapper>
    );
  };

  if (attachments.length === 0) {
    return renderItem();
  }

  return attachments.map(({ url }) => renderItem(url));
};

HistoryItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attachments: PropTypes.arrayOf(PropTypes.shape({}).isRequired),
  }).isRequired,
};

export default HistoryItem;
