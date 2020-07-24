import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

import { Text } from "..";
import { Icon } from "../Icon";
import { Collapse, CollapseButton } from "../Collapse";

const ItemConnector = styled.div`
  border-width: 0;
  border-style: solid;
  border-color: ${({ theme }) => theme.palette.gray.regular};
  border-left-width: 1px;
  transition: all 0.1ms ease-in-out;
  position: absolute;
  bottom: 0;
  left: 15px;
  top: 0;
  ::before {
    content: "";
    width: 1px;
    height: 100%;
    display: inline-block;
  }
`;

const Container = styled.div`
  position: relative;
  min-height: 40px;

  :last-child {
    ${ItemConnector} {
      border-left-width: 0;
    }
  }
`;

const RowWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const RowDetails = styled(Grid).attrs(() => ({
  container: true,
}))`
  width: 100%;
  height: 100%;
`;

const Item = styled(Grid).attrs(({ lg }) => ({
  item: true,
  xs: 4,
  lg: lg || 3,
}))`
  display: flex;
  align-items: center;
`;

const StyledIcon = styled(Icon)`
  margin-right: ${({ theme }) => theme.spacing(2)};
  flex-shrink: 0;
`;

const StyledCollapseButton = styled(CollapseButton)`
  margin-left: ${({ theme }) => theme.spacing(4)};
  color: ${({ theme }) => theme.palette.text.primary};
`;

const Content = styled.div`
  padding: ${({ theme }) => theme.spacing(4, 10)};
`;

export const HistoryItem = ({
  data: {
    collapsible,
    collapseContent,
    description,
    icon,
    iconColor,
    moreInfo,
    title,
  },
}) => {
  const [collapseOpen, setCollapseOpen] = useState(false);

  return (
    <Container data-cy="historyItem">
      <ItemConnector />

      <RowWrapper>
        <StyledIcon bordered color={iconColor} icon={icon} />

        <RowDetails>
          <Item lg={5}>
            <Text fontWeight="bold">{title}</Text>
          </Item>

          <Item lg={4}>
            <Text color="textSecondary" noWrap>
              {description}
            </Text>
          </Item>

          <Item justify="flex-end">
            <Text color="textSecondary" fontStyle="italic">
              {moreInfo}
            </Text>

            {collapsible && (
              <StyledCollapseButton
                isOpened={collapseOpen}
                onClick={() => setCollapseOpen((prev) => !prev)}
              />
            )}
          </Item>
        </RowDetails>
      </RowWrapper>

      {collapsible && (
        <Collapse isOpened={collapseOpen}>
          <Content>{collapseContent}</Content>
        </Collapse>
      )}
    </Container>
  );
};

HistoryItem.propTypes = {
  data: PropTypes.shape({
    collapsible: PropTypes.bool,
    collapseContent: PropTypes.node,
    id: PropTypes.number.isRequired,
    description: PropTypes.string,
    moreInfo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    iconColor: PropTypes.string,
  }).isRequired,
};
