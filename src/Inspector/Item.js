import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Grid from "@material-ui/core/Grid";

import { Text, H5, Button } from "..";
import { Icon } from "../Icon";
import { Collapse, CollapseButton } from "../Collapse";

const Container = styled.div`
  position: relative;
  min-height: 40px;
  padding-bottom: ${({ theme }) => theme.spacing(4)};
`;

const RowWrapper = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down("md")} {
    align-items: flex-start;
  }
`;

const RowDetails = styled(Grid).attrs(() => ({
  container: true,
}))`
  width: 100%;
  height: 100%;
`;

const Item = styled(Grid).attrs(({ lg }) => ({
  item: true,
  xs: 12,
  lg: lg || 3,
}))`
  display: flex;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    margin-bottom: ${({ theme }) => theme.spacing(1)};
  }

  ${({ align, theme }) =>
    align &&
    css`
      ${theme.breakpoints.up("sm")} {
        justify-content: ${align};
      }
    `}
`;

const StyledIcon = styled(Icon)`
  margin-right: ${({ theme }) => theme.spacing(2)};
  flex-shrink: 0;
`;

const StyledCollapseButton = styled(CollapseButton)`
  margin-left: ${({ theme }) => theme.spacing(4)};
  color: ${({ theme }) => theme.palette.text.primary};
  background-color: ${({ theme }) => theme.palette.gray.regular};
  border-radius: 0px 8px 8px 0px;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

const Content = styled.div`
  padding: ${({ theme }) => theme.spacing(4, 10)};

  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: ${({ theme }) => theme.spacing(2, 4, 4, 10)};
  }
`;

export const InspectorItem = ({
  data: { collapsible, collapseContent, icon, iconColor, buttonContent, title },
}) => {
  const [collapseOpen, setCollapseOpen] = useState(false);

  return (
    <Container data-cy="inspectorItem">
      <RowWrapper>
        <StyledIcon rounded color={iconColor} icon={icon} />

        <RowDetails>
          <Item lg={5}>
            <H5>{title}</H5>
          </Item>

          <Item align="flex-end">
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
          <Content>
            <Text content={collapseContent} />
            <Button size={"sm"} content={buttonContent} />
          </Content>
        </Collapse>
      )}
    </Container>
  );
};

InspectorItem.propTypes = {
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
