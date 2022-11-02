import React from "react";
import styled, { css } from "styled-components";

import { ChipBadgePropTypes, ChipBadgeDefaultProps } from "./props";
import { DISPLAY, SPACER } from "../..";
import { Text } from "../../Typography";

const StyledBadge = styled.div`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border: none;
  border-radius: ${({ isShort }) => isShort ? "50%" : "16px"};
  height: ${({ isShort }) => isShort ? "24px" : "16px"};
  width: ${({ isShort }) => isShort ? "24px" : "max-content"};
  padding: ${({ theme }) => theme.spacing(0, 2)};
  
  ${({ backgroundColor, color, theme }) =>
    css`
      background-color: ${theme.palette[backgroundColor].main};
      color: ${theme.palette[color].main};
    `}

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

const StyledText = styled(Text)`
  line-height: 1 !important;
  ${({ color }) => color === "primary"
    && css`
      line-height: 1;
      mix-blend-mode: exclusion;
      filter: invert(1);
    `}
`

export const TinyBadge = ({ color, label, ...props }) => {
  const contentColor =
    ["success", "black", "error", "darkYellow"].includes(color)
      ? "white"
      : "black"
  
  return (
    <StyledBadge
      color={contentColor}
      backgroundColor={color}
      isShort={label.length === 1}
      {...props}
    >
      <StyledText color="initial" fontWeight="bold" fontSize="sm">
        {label}
      </StyledText>
    </StyledBadge>
  );
};

TinyBadge.propTypes = ChipBadgePropTypes;

TinyBadge.defaultProps = ChipBadgeDefaultProps;
