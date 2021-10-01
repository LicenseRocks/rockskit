import React from "react";
import styled, { useTheme } from "styled-components";

import { DISPLAY, SPACER } from "..";
import { Icon } from "../Icon";
import { InspectWarningPropTypes, InspectWarningDefaultProps } from "./props";

const StyledInspectContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 33px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 8px;
  font-size: 14px;
  transition: all 100ms ease-in-out;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${({ theme }) => theme.palette.text.primary};
  svg {
    width: 12px;
    margin-left: 8px;
    color: ${({ theme }) => theme.palette.text.primary};
  }

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

const StyledInspectAlert = styled.div`
  width: 90px;
  height: 33px;
  padding: 8px 16px;
  border-radius: 8px 0px 0px 8px;
  background-color: ${({ alerts }) => alerts.backgroundColor};

  ${(theme) => SPACER(theme)} ${(theme) => DISPLAY(theme)};
`;

const StyledInspectWarning = styled.div`
  flex: 1;
  box-sizing: border-box;
  height: 33px;
  padding: 8px 16px;
  margin: 0px 4px;
  font-size: 14px;
  font-weight: 600;
  transition: all 100ms ease-in-out;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.gray.semiLight};
  color: ${({ theme }) => theme.palette.text.primary};

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

const StyledInspectDrop = styled.div`
  box-sizing: border-box;
  width: 32px;
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 0px 8px 8px 0px;
  background-color: ${({ theme }) => theme.palette.gray.regular};

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

const getAlerts = (alert, theme) => {
  switch (alert) {
    case "require":
      return {
        backgroundColor: theme.palette.error.main,
        alertContent: "Require",
      };
    case "optional":
      return {
        backgroundColor: theme.palette.warning.light,
        alertContent: "Optional",
      };
    case "passed":
      return {
        backgroundColor: theme.palette.success.main,
        alertContent: "Passed",
      };
    default:
      return {
        backgroundColor: theme.palette.warning.light,
        alertContent: "Optional",
      };
  }
};

export const InspectWarning = ({
  content,
  children,
  color,
  alert,
  ...props
}) => {
  const theme = useTheme();
  const alerts = getAlerts(alert, theme);
  const message = getAlerts(alert, theme);
  return (
    <StyledInspectContainer {...props}>
      <StyledInspectAlert alerts={alerts} {...props}>
        {message.alertContent}
      </StyledInspectAlert>
      <StyledInspectWarning {...props}>
        {content || children}
      </StyledInspectWarning>
      <StyledInspectDrop>
        <Icon icon="angle-down" mr={2} />
      </StyledInspectDrop>
    </StyledInspectContainer>
  );
};

InspectWarning.propTypes = InspectWarningPropTypes;

InspectWarning.defaultProps = InspectWarningDefaultProps;
