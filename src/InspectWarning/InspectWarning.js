import React, { useState } from "react";
import styled, { useTheme } from "styled-components";

import { DISPLAY, SPACER } from "..";
import { Icon } from "../Icon";
import { Button } from "..";
import { InspectWarningPropTypes, InspectWarningDefaultProps } from "./props";

const AccordionSection = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  height: 33px;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  position: absolute;
`;

const InspectContainer = styled.div`
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
  height: 33px;
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  p {
    padding-left: 98px;
    max-width: 400px;
  }

  button {
    width: 119px !important;
    margin: 0px 76px;
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
      <Container>
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
      </Container>
    </AccordionSection>
  );
};

InspectWarning.propTypes = InspectWarningPropTypes;

InspectWarning.defaultProps = InspectWarningDefaultProps;
