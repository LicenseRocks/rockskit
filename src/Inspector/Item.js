import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Text, H5, Button } from "..";
import { Collapse, CollapseButton } from "../Collapse";

const Container = styled.div`
  position: relative;
  min-height: 41px;
  padding-bottom: ${({ theme }) => theme.spacing(2)};
`;

const RowWrapper = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down("md")} {
    align-items: flex-start;
  }
`;

const StyledStatus = styled.div`
  width: 90px;
  height: 33px;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  // background-color: ${({ alerts }) => alerts.backgroundColor};
  border-radius: 8px 0px 0px 8px;
`;

const StyledMessage = styled.div`
  height: 33px;
  flex: 1;
  display: flex;
  align-items: center;
  margin-left: ${({ theme }) => theme.spacing(1)};
  margin-right: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(2)};
  padding-left: ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme }) => theme.palette.gray.semiLight};
  color: ${({ theme }) => theme.palette.text.primary};
  transition: all 100ms ease-in-out;
`;

const StyledCollapseButton = styled(CollapseButton)`
  width: 33px !important;
  height: 33px !important;
  padding: ${({ theme }) => theme.spacing(2)};
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(4, 12, 4, 24)};

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
        <StyledStatus>
          <Text>Require</Text>
        </StyledStatus>

        <StyledMessage>
          <H5>{title}</H5>
        </StyledMessage>

        {collapsible && (
          <StyledCollapseButton
            isOpened={collapseOpen}
            onClick={() => setCollapseOpen((prev) => !prev)}
          />
        )}
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
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    iconColor: PropTypes.string,
  }).isRequired,
};
