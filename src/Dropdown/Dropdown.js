import React from "react";
import styled from "styled-components";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { DISPLAY, SPACER } from "../theme";
import { DropdownDefaultProps, DropdownPropTypes } from "./props";

const StyledDropdown = styled(Menu)`
  border-radius: 24px;

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

const StyledItem = styled(MenuItem)``;

export const Dropdown = ({ items, ...props }) => {
  return (
    <StyledDropdown {...props}>
      {items.map(({ label, onClick, value, ...itemProps }) => (
        <StyledItem key={label} onClick={() => onClick(value)} {...itemProps}>
          {label}
        </StyledItem>
      ))}
    </StyledDropdown>
  );
};

Dropdown.propTypes = DropdownPropTypes;

Dropdown.defaultProps = DropdownDefaultProps;
