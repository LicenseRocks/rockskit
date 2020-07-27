import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

import { HeadingBasePropTypes } from "./props";
import { DISPLAY, SPACER } from "../../../theme";

const StyledHeading = styled(Typography)`
  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

export const HeadingBase = ({ content, children, ...props }) => {
  return <StyledHeading {...props}>{content || children}</StyledHeading>;
};

HeadingBase.propTypes = HeadingBasePropTypes;
