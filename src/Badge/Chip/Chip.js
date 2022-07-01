import React from "react";
import styled, { css } from "styled-components";

import { ChipBadgePropTypes, ChipBadgeDefaultProps } from "./props";
import { DISPLAY, SPACER } from "../..";
import { Icon } from "../../Icon"
import { Text } from "../../Typography";

const StyledChip = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 22px;
  min-width: 32px;
  min-height: 32px;
  width: max-content;

  ${({ color, theme, textColor }) =>
    css`
      padding: ${theme.spacing(2, 3)};
      background-color: ${theme.palette[color].main};
      color: ${theme.palette[textColor].main};
    `}

  ${({ color }) => ["primary", "secondary"].includes(color)
    && css`
      svg {
        mix-blend-mode: exclusion;
        filter: invert(1);
      }
    `}

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

const StyledLabel = styled(Text).attrs(() => ({
  fontWeight: "bold",
}))`
  
  ${({ labelColor }) => ["primary", "secondary"].includes(labelColor)
    && css`
      mix-blend-mode: exclusion;
      filter: invert(1);
    `}
`;

const StyledIcon = styled(Icon)`
  margin-right: ${({ theme, icon }) => icon && theme.spacing(2)};
`;

export const ChipBadge = ({ color, icon, label, ...props }) => {
  const contentColor =
    ["success", "black", "error", "darkYellow"].includes(color)
      ? "white"
      : "black"

console.log("🎉 color: ", color)

  return (
    <StyledChip color={color} textColor={contentColor} {...props}>
      {icon && <StyledIcon color={contentColor} icon={icon} />}
      {label && <StyledLabel icon={icon} labelColor={color} color="initial">{label}</StyledLabel>}
    </StyledChip>
  );
};

ChipBadge.propTypes = ChipBadgePropTypes;

ChipBadge.defaultProps = ChipBadgeDefaultProps;
