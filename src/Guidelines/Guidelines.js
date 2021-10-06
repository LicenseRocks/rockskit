import React, { useState } from "react";
import styled, { css, useTheme, keyframes } from "styled-components";
// Dependencies
import { GuidelinesPropTypes, GuidelinesDefaultProps } from "./props";
// Components, Typography, etc.
import { Icon, Button, H5, Text, SPACER, DISPLAY } from "..";
import { text } from "@fortawesome/fontawesome-svg-core";

// Animation for accordion
const showDrop = keyframes`
0%{
  opacity: 0;
}
100%{
  opacity: 1;
}
`;

const StyledAccordion = styled.div`
  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

const StyledRow = styled.div`
  min-width: 400px;
  height: 33px;
  // box-sizing: border-box;

  // margin: 10px 0px;
  // padding: 8px;

  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${({ theme }) => theme.palette.text.primary};
  cursor: pointer;
`;

const StyledStatus = styled.div`
  width: 90px;
  height: 33px;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ alerts }) => alerts.backgroundColor};
  border-radius: 8px 0px 0px 8px;
`;

const StyledMessage = styled.div`
  height: 33px;
  flex: 1;
  display: flex;
  align-items: center;
  // box-sizing: border-box;

  // padding: 8px 16px;
  // margin: 0px 4px;
  background-color: ${({ theme }) => theme.palette.gray.semiLight};
  color: ${({ theme }) => theme.palette.text.primary};
  transition: all 100ms ease-in-out;
`;

const StyledDropButton = styled.div`
  width: 32px;
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.palette.gray.regular};
  border-radius: 0px 8px 8px 0px;
  cursor: pointer;

  // svg {
  //   color: ${({ theme }) => theme.palette.text.primary};
  // }
`;

const StyledDropped = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${(props) =>
    props.animation === true &&
    css`
      animation: ${showDrop} 0.8s;
    `}

  div {
    max-width: 600px;
    padding-left: 115px;
  }

  button {
    min-width: 100px !important;
    margin: 0px 56px 0px 0px;
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

export const Guidelines = ({
  animation,
  buttonFunction,
  children,
  data,
  buttonText,
  ...props
}) => {
  // Managing accordion
  const [clicked, setClicked] = useState(null);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  const theme = useTheme();

  return (
    <StyledAccordion {...props}>
      {data.map((item, index) => {
        return (
          <>
            <StyledRow m={10} onClick={() => toggle(index)} key={index}>
              <StyledStatus alerts={getAlerts(item.status, theme)}>
                <Text content={item.status} />
              </StyledStatus>
              <StyledMessage {...props}>
                <H5 content={item.message} />
              </StyledMessage>
              <StyledDropButton>
                {clicked === index ? (
                  <Icon color="gray" icon="angle-up" />
                ) : (
                  <Icon icon="angle-down" />
                )}
              </StyledDropButton>
            </StyledRow>

            {clicked === index ? (
              <StyledDropped animation={animation}>
                <Text content={item.explanation} />
                <Button
                  onCLick={buttonFunction}
                  size={"sm"}
                  content={buttonText}
                />
              </StyledDropped>
            ) : null}
          </>
        );
      })}
    </StyledAccordion>
  );
};

Guidelines.propTypes = GuidelinesPropTypes;

Guidelines.defaultProps = GuidelinesDefaultProps;
