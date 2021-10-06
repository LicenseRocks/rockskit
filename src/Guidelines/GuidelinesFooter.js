import React from "react";
import styled, { useTheme } from "styled-components";
// Components, Typography, etc.
import { SPACER, DISPLAY, Text, DIMENSION } from "..";

const StyledFooter = styled.div`
  border-top: 1px solid ${({ theme }) => theme.palette.gray.semiLight};

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

const StyledRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 8px;
`;

const StyledCircle = styled.div`
  height: 8px;
  width: 8px;
  margin-right: 8px;
  border-radius: 50%;
  display: inline-block;
  background-color: ${({ status }) => status.backgroundColor};
`;
const StyledStatus = styled.div`mr={50}
  color: ${({ status }) => status.color};
  width: 50px;
`;

const StyledContent = styled.div`
  color: ${({ theme }) => theme.palette.gray.medium};
`;

const getColor = (status, theme) => {
  switch (status) {
    case "require":
      return {
        backgroundColor: theme.palette.error.main,
        color: theme.palette.error.main,
      };
    case "optional":
      return {
        backgroundColor: theme.palette.warning.light,
        color: theme.palette.grey.semiLight,
      };
    case "passed":
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

export const GuidelinesFooter = ({ footerData, ...props }) => {
  const theme = useTheme();

  return (
    <StyledFooter {...props}>
      {footerData?.map((item, id) => {
        return (
          <>
            <StyledRow key={id}>
              <StyledCircle
                status={getColor(item.status, theme)}
              ></StyledCircle>
              <StyledStatus status={getColor(item.status, theme)}>
                <Text fontSize={"sm"} content={item.status} />
              </StyledStatus>
              <StyledContent>
                <Text fontSize={"sm"} content={item.content} />
              </StyledContent>
            </StyledRow>
          </>
        );
      })}
    </StyledFooter>
  );
};
