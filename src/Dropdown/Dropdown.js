import React from "react";
import styled, { useTheme } from "styled-components";
import Dialog from "@material-ui/core/Dialog";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { useMediaQuery } from "..";
import { DISPLAY, SPACER } from "../theme";
import { DropdownDefaultProps, DropdownPropTypes } from "./props";

const StyledDropdown = styled(Menu)`
  & {
    pointer-events: none;
  }

  .MuiMenu-paper {
    position: relative;
    border-radius: 12px;
    pointer-events: all;
    background-color: ${({ theme }) => theme.palette.common.white};
    box-shadow: 0px 16px 56px rgba(41, 40, 57, 0.16);
  }

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

const StyledItem = styled(MenuItem)``;

const StyledDialog = styled(Dialog).attrs(() => ({
  fullScreen: true,
  hideBackdrop: true,
}))`
  && {
    .MuiDialog-paper {
      position: relative;
      background-color: ${({ theme }) => theme.palette.common.white};
    }
  }
`;

export const Dropdown = ({ children, items, responsive, ...props }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (responsive && isMobile)
    return (
      <StyledDialog fullScreen hideBackdrop {...props}>
        {children}
      </StyledDialog>
    );

  return (
    <StyledDropdown {...props}>
      {children ||
        items.map(({ label, onClick, value, ...itemProps }) => (
          <StyledItem key={label} onClick={() => onClick(value)} {...itemProps}>
            {label}
          </StyledItem>
        ))}
    </StyledDropdown>
  );
};

Dropdown.propTypes = DropdownPropTypes;

Dropdown.defaultProps = DropdownDefaultProps;
