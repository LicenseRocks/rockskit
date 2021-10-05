import React from "react";
import styled, { useTheme } from "styled-components";

const StyledFooter = styled.div`
  width: 100%;
  padding: 20px 10px;
  border-top: 1px solid ${({ theme }) => theme.palette.gray.semiLight};
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
const StyledStatus = styled.div`
  color: ${({ status }) => status.color};
  margin-right: 8px;
  width: 50px;
  font-size: 12px;
  line-height: 120%;
  font-weight: normal;
`;

const StyledContent = styled.div`
  color: ${({ theme }) => theme.palette.gray.medium};
  font-size: 12px;
  line-height: 120%;
  font-weight: normal;
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

export const GuidelinesFooter = ({ footerData }) => {
  const theme = useTheme();

  return (
    <StyledFooter>
      {footerData.map((item, id) => {
        return (
          <>
            <StyledRow key={id}>
              <StyledCircle
                status={getColor(item.status, theme)}
              ></StyledCircle>
              <StyledStatus status={getColor(item.status, theme)}>
                {item.status}:
              </StyledStatus>
              <StyledContent>{item.content}</StyledContent>
            </StyledRow>
          </>
        );
      })}
    </StyledFooter>
  );
};
