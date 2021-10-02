import React, { useState } from "react";
import styled, { useTheme } from "styled-components";

import { DISPLAY, SPACER } from "..";
import { Icon } from "../Icon";
import { Button } from "..";
import { InspectWarningPropTypes, InspectWarningDefaultProps } from "./props";

const AccordionSection = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 33px;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const InspectContainer = styled.div`
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  height: 33px;
  padding: 8px;
  font-size: 14px;
  transition: all 100ms ease-in-out;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${({ theme }) => theme.palette.text.primary};
  svg {
    width: 12px;
    color: ${({ theme }) => theme.palette.text.primary};
  }

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

const Alert = styled.div`
  width: 90px;
  height: 33px;
  padding: 8px 16px;
  border-radius: 8px 0px 0px 8px;
  display: flex;
  justify-content: center;
  background-color: ${({ alerts }) => alerts.backgroundColor};

  ${(theme) => SPACER(theme)} ${(theme) => DISPLAY(theme)};
`;

const WarningMessage = styled.div`
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

const InspectDrop = styled.div`
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

const DropContainer = styled.div`
  height: 100px;
  width: 100%;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 219px !important;

    text-transform: lower-case;
  }
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
  explanation,
  ...props
}) => {
  // Managing Accordion stuff
  const [clicked, setClicked] = useState(false);

  const theme = useTheme();
  const alerts = getAlerts(alert, theme);
  const message = getAlerts(alert, theme);
  return (
    <AccordionSection>
      <InspectContainer>
        <Alert alerts={alerts}>{message.alertContent}</Alert>
        <WarningMessage {...props}>{content || children}</WarningMessage>
        <InspectDrop onClick={() => setClicked(!clicked)}>
          {clicked === false ? (
            <Icon icon="angle-down" />
          ) : (
            <Icon icon="angle-up" />
          )}
        </InspectDrop>
      </InspectContainer>
      {clicked ? (
        <DropContainer>
          <p>{explanation}</p>
          <Button size={"sm"} content={"Resume"} />
        </DropContainer>
      ) : null}
    </AccordionSection>
  );
};

InspectWarning.propTypes = InspectWarningPropTypes;

InspectWarning.defaultProps = InspectWarningDefaultProps;
