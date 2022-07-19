import React from "react";
import { bool, func } from "prop-types";
import styled from "styled-components";

import TabsSwitch from "./Switch";
import { DISPLAY, SPACER } from "../../theme";

const StyledToggle = styled.div`
  display: inline-block;
  position: relative;

  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

export const TabsToggle = ({ disabled, onChange, value, ...props }) => {
  const handleToggle = () => {
    onChange(!value);
  };

  return (
    <StyledToggle>
      <TabsSwitch
        disabled={disabled}
        handleToggle={!disabled ? handleToggle : undefined}
        toggled={value}
        {...props}
      />
    </StyledToggle>
  );
};

TabsToggle.propTypes = {
  disabled: bool,
  onChange: func,
  value: bool,
};

TabsToggle.defaultProps = {
  disabled: false,
  onChange: null,
  value: false,
};
