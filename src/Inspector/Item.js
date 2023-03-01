import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { useTheme } from "styled-components";
import { Text, H5, Button } from "..";
import { Collapse, CollapseButton } from "../Collapse";

const Container = styled.div`
  position: relative;
  min-height: 41px;
  padding: ${({ theme }) => theme.spacing(1, 0)};
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
  background-color: ${({ color }) => color.backgroundColor};
  border-radius: 8px 0px 0px 8px;

  div {
    text-transform: capitalize !important;
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    width: 65px;
  }
`;

const StyledMessage = styled.div`
  height: 33px;
  flex: 1;
  display: flex;
  align-items: center;
  margin: ${({ theme }) => theme.spacing(0, 1)};
  padding: ${({ theme }) => theme.spacing(2, 2, 2, 4)};
  background-color: ${({ theme }) => theme.palette.gray.semiLight};
  color: ${({ theme }) => theme.palette.text.primary};
  transition: all 100ms ease-in-out;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    h5 {
      font-size: ${({ theme }) => theme.typography.h6};
    }
  }
`;

const StyledCollapseButton = styled(CollapseButton)`
  width: 17px !important;
  height: 17px !important;
  padding: ${({ theme }) => theme.spacing(2)};
  color: ${({ theme }) => theme.palette.text.primary};
  background-color: ${({ theme }) => theme.palette.gray.regular};
  border-radius: 0px 8px 8px 0px;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: ${({ theme }) => theme.spacing(3)};
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(4, 12, 4, 28)};

  div {
    max-width: 80%;
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: ${({ theme }) => theme.spacing(2, 4, 4, 2)};
  }
`;

export const InspectorItem = ({
  data: {
    collapsible,
    collapseContent,
    status,
    buttonFunction,
    buttonContent,
    title,
  },
}) => {
  const [collapseOpen, setCollapseOpen] = useState(false);
  const theme = useTheme();

  const getColor = (status, theme) => {
    switch (status) {
      case "require":
        return {
          backgroundColor: theme.palette.error.main,
        };
      case "optional":
        return {
          backgroundColor: theme.palette.warning.light,
        };
      case "passed":
        return {
          backgroundColor: theme.palette.success.main,
        };
      default:
        return {
          backgroundColor: theme.palette.warning.light,
        };
    }
  };

  return (
    <Container>
      <RowWrapper>
        <StyledStatus color={getColor(status, theme)}>
          <Text content={status} />
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
            <Text fontSize={"sm"} content={collapseContent} />
            <Button
              onClick={buttonFunction}
              size={"sm"}
              content={buttonContent}
            />
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
    status: PropTypes.string.isRequired,
    buttonFunction: PropTypes.func.isRequired,
    buttonContent: PropTypes.string.isRequired,
  }).isRequired,
};
