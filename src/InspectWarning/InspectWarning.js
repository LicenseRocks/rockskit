import React, { useState } from "react";
import styled, { useTheme, keyframes } from "styled-components";

import { DISPLAY, SPACER } from "..";
import { Icon } from "../Icon";
import { Button } from "..";
import { InspectWarningPropTypes, InspectWarningDefaultProps } from "./props";

const showDrop = keyframes`
0%{
  opacity: 0;
}
100%{
  opacity: 1;
}
`;

const AccordionSection = styled.div`
  width: 100%;
  min-height: ${({ countHeight }) => countHeight * 53}px;
  box-sizing: border-box;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

const Container = styled.div`
  width: 100%;
  position: absolute;

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

const InspectContainer = styled.div`
  width: 100%;
  min-width: 400px;
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
  cursor: pointer;
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
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: ${showDrop} 1s;

  p {
    padding-left: 115px;
    max-width: 600px;
    font-size: 12px;
    font-weight: 400;
  }

  button {
    min-width: 100px !important;
    margin: 0px 56px 0px 0px;
  }

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

const getAlerts = (alert, theme) => {
  switch (alert) {
    case "Require":
      return {
        backgroundColor: theme.palette.error.main,
        alertContent: "Require",
      };
    case "Optional":
      return {
        backgroundColor: theme.palette.warning.light,
        alertContent: "Optional",
      };
    case "Passed":
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
  children,
  data,
  buttonFunction,
  ...props
}) => {
  // Managing accordion
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  const theme = useTheme();
  const countHeight = data.length;

  return (
    <AccordionSection countHeight={countHeight}>
      <Container>
        {data.map((item, index) => {
          return (
            <>
              <InspectContainer onClick={() => toggle(index)} key={index}>
                <Alert alerts={getAlerts(item.status, theme)}>
                  {item.status}
                </Alert>
                <WarningMessage {...props}>{item.message}</WarningMessage>
                <InspectDrop>
                  {clicked === index ? (
                    <Icon icon="angle-up" />
                  ) : (
                    <Icon icon="angle-down" />
                  )}
                </InspectDrop>
              </InspectContainer>

              {clicked === index ? (
                <DropContainer>
                  <p>{item.explanation}</p>
                  <Button
                    onCLick={buttonFunction}
                    size={"sm"}
                    content={"Resume"}
                  />
                </DropContainer>
              ) : null}
            </>
          );
        })}
      </Container>
    </AccordionSection>
  );
};

InspectWarning.propTypes = InspectWarningPropTypes;

InspectWarning.defaultProps = InspectWarningDefaultProps;
