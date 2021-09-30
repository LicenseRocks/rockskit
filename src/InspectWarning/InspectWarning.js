import React from "react";
import styled, { useTheme } from "styled-components";

import { DISPLAY, SPACER } from "..";
import { Icon } from "../Icon";
import { InspectWarningPropTypes, InspectWarningDefaultProps } from "./props";

const StyledInspectContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 33px;
  padding: 8px 16px;
  font-size: 14px;
  transition: all 100ms ease-in-out;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  color: ${({ colors }) => colors.color};
  svg {
    color: ${({ colors }) => colors.iconColor};
  }

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

const StyledInspectAlert = styled.div`
  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

const StyledInspectWarning = styled.div`
  width: 100%;
  box-sizing: border-box;
  min-height: 40px;
  padding: 8px;
  font-size: 14px;
  transition: all 100ms ease-in-out;
  display: flex;
  align-items: center;
  ${({ rounded }) => rounded && "border-radius: 8px;"}
  background-color: ${({ colors }) => colors.backgroundColor};
  color: ${({ colors }) => colors.color};
  svg {
    color: ${({ colors }) => colors.iconColor};
  }

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

const StyledInspectDrop = styled.div`
  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

const getColors = (color, theme) => {
  switch (color) {
    case "require":
      return {
        backgroundColor: theme.palette.error.main,
        color: theme.palette.text.primary,
        iconColor: theme.palette.text.primary,
      };
    case "optional":
      return {
        backgroundColor: theme.palette.warning.light,
        color: theme.palette.text.primary,
        iconColor: theme.palette.text.primary,
      };
    case "passed":
      return {
        backgroundColor: theme.palette.success.main,
        color: theme.palette.text.primary,
        iconColor: theme.palette.text.primary,
      };
    default:
      return {
        backgroundColor: theme.palette.gray.semiLight,
        color: theme.palette.text.primary,
        iconColor: theme.palette.text.primary,
      };
  }
};

export const InspectWarning = ({ content, children, color, ...props }) => {
  const theme = useTheme();
  const colors = getColors(color, theme);
  return (
    <StyledInspectContainer colors={colors} {...props}>
      <StyledInspectAlert colors={colors} {...props}>
        {children}
      </StyledInspectAlert>
      <StyledInspectWarning colors={colors} {...props}>
        {content || children}
      </StyledInspectWarning>
      <StyledInspectDrop>
        <Icon icon="info-circle" mr={2} />
      </StyledInspectDrop>
    </StyledInspectContainer>
  );
};

InspectWarning.propTypes = InspectWarningPropTypes;

InspectWarning.defaultProps = InspectWarningDefaultProps;
