import React from "react";
import styled, { css } from "styled-components";

import { ChipBadgePropTypes, ChipBadgeDefaultProps } from "./props";
import { Icon, DISPLAY, SPACER } from "../..";
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

  ${({ color, theme }) =>
    css`
      padding: ${theme.spacing(2)};
      background-color: ${theme.palette[color].light};
      color: ${theme.palette[color].main};
    `}

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

const StyledLabel = styled(Text).attrs(() => ({
  fontWeight: "bold",
}))`
  padding-left: ${({ theme }) => theme.spacing(2)};
`;

export const ChipBadge = ({ color, icon, label, ...props }) => {
  return (
    <StyledChip color={color} {...props}>
      <Icon color={color} icon={icon} />
      {label && <StyledLabel>{label}</StyledLabel>}
    </StyledChip>
  );
};

ChipBadge.propTypes = ChipBadgePropTypes;

ChipBadge.defaultProps = ChipBadgeDefaultProps;
