import React, { useState } from "react";
import styled, { useTheme } from "styled-components";

import { DISPLAY, SPACER } from "..";

const data = [
  {
    id: 1,
    status: "Require",
    content:
      "Explain about require alert for example Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: 2,
    status: "Optional",
    content:
      "Explain about require alert for example Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: 3,
    status: "Passed",
    content:
      "Explain about require alert for example Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];

const Container = styled.div`
  width: 100%;
  min-width: 400px;
  padding-top: 20px;
  padding-bottom: 20px;

  border-top: 1px solid ${({ theme }) => theme.palette.gray.semiLight};

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 8px;

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

const Circle = styled.div`
  height: 8px;
  width: 8px;
  margin-right: 8px;
  border-radius: 50%;
  display: inline-block;
  background-color: ${({ status }) => status.backgroundColor};

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;
const Status = styled.div`
  color: ${({ status }) => status.color};
  margin-right: 8px;
  width: 50px;
  font-size: 12px;
  line-height: 120%;
  font-weight: normal;

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

const Content = styled.div`
  color: ${({ theme }) => theme.palette.gray.medium};

  font-size: 12px;
  line-height: 120%;
  font-weight: normal;

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

const getColor = (status, theme) => {
  switch (status) {
    case "Require":
      return {
        backgroundColor: theme.palette.error.main,
        color: theme.palette.error.main,
      };
    case "Optional":
      return {
        backgroundColor: theme.palette.warning.light,
        color: theme.palette.grey.semiLight,
      };
    case "Passed":
      return {
        backgroundColor: theme.palette.success.main,
        color: theme.palette.success.main,
      };
    default:
      return {
        backgroundColor: theme.palette.warning.light,
        color: theme.palette.grey.semiLight,
      };
  }
};

export const InspectFooter = () => {
  const theme = useTheme();

  return (
    <Container>
      {data.map((item, index) => {
        return (
          <>
            <Row>
              <Circle status={getColor(item.status, theme)}></Circle>
              <Status status={getColor(item.status, theme)}>
                {item.status}:
              </Status>
              <Content>{item.content}</Content>
            </Row>
          </>
        );
      })}
    </Container>
  );
};
