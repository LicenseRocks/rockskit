import React from "react";
import { bool, func } from "prop-types";
import styled from "styled-components";

import Switch from "./Switch";
import { DISPLAY, SPACER } from "../../theme";

const StyledToggle = styled.div`
  display: inline-block;
  position: relative;

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

export const Toggle = ({ disabled, onChange, value, ...props }) => {
  const handleToggle = () => {
    onChange(!value);
  };

  return (
    <StyledToggle>
      <Switch
        disabled={disabled}
        handleToggle={!disabled ? handleToggle : undefined}
        toggled={value}
        {...props}
      />
    </StyledToggle>
  );
};

Toggle.propTypes = {
  disabled: bool,
  onChange: func,
  value: bool,
};

Toggle.defaultProps = {
  disabled: false,
  onChange: null,
  value: false,
};
