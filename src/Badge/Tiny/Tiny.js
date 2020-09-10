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
  border-radius: 8px;
  height: 16px;
  width: max-content;

  ${({ color, theme }) =>
    css`
      padding: ${theme.spacing(0, 2)};
      border: 1px solid ${theme.palette[color].light};
      color: ${theme.palette[color].main};
    `}

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

export const TinyBadge = ({ color, label, ...props }) => {
  return (
    <StyledBadge color={color} {...props}>
      <Text fontWeight="bold" fontSize="sm">
        {label}
      </Text>
    </StyledBadge>
  );
};

TinyBadge.propTypes = ChipBadgePropTypes;

TinyBadge.defaultProps = ChipBadgeDefaultProps;
