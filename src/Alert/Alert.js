import React from "react";
import styled, { css, useTheme } from "styled-components";

import { DISPLAY, SPACER } from "..";
import { Icon } from "../Icon";
import { AlertPropTypes, AlertDefaultProps } from "./props";

const StyledMessage = styled.div`
  width: 100%;
  box-sizing: border-box;
  min-height: 40px;
  padding: 8px;
  font-size: 14px;
  transition: all 100ms ease-in-out;
  display: flex;
  align-items: center;
  ${({ noBorderRadius }) => !noBorderRadius && "border-radius: 8px;"}
  background-color: ${({ colors }) => colors.backgroundColor};
  color: ${({ colors }) => colors.color};
  svg {
    color: ${({ colors }) => colors.iconColor};
  }

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

const getColors = (color, theme) => {
  switch (color) {
    case "danger":
      return {
        backgroundColor: theme.palette.error.light,
        color: theme.palette.error.main,
        iconColor: theme.palette.error.main,
      };
    case "warning":
      return {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.main,
        iconColor: theme.palette.primary.main,
      };
    case "success":
      return {
        backgroundColor: theme.palette.success.light,
        color: theme.palette.success.main,
        iconColor: theme.palette.success.main,
      };
    default:
      return {
        backgroundColor: theme.palette.gray.semiLight,
        color: theme.palette.text.primary,
        iconColor: theme.palette.primary.main,
      };
  }
};

export const Alert = ({ content, children, color, ...props }) => {
  const theme = useTheme();
  const colors = getColors(color, theme);
  return (
    <StyledMessage colors={colors} {...props}>
      <Icon icon="info-circle" mr={2} />
      {content || children}
    </StyledMessage>
  );
};

Alert.propTypes = AlertPropTypes;

Alert.defaultProps = AlertDefaultProps;
