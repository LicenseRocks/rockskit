import React from "react";
import styled from "styled-components";

import {
  RadioBase,
  RadioBasePropTypes,
  RadioBaseDefaultProps,
} from "../RadioBase";
import { DISPLAY, SPACER } from "../../theme";

const StyledRadioBase = styled(RadioBase)`
  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

export const Checkbox = (props) => {
  return <StyledRadioBase type="checkbox" {...props} />;
};

Checkbox.propTypes = RadioBasePropTypes;

Checkbox.defaultProps = RadioBaseDefaultProps;
