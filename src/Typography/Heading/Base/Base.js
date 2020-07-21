import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

import { HeadingBasePropTypes } from "./props";

const StyledHeading = styled(Typography)``;

export const HeadingBase = ({ content, children, ...props }) => {
  return <StyledHeading {...props}>{content || children}</StyledHeading>;
};

HeadingBase.propTypes = HeadingBasePropTypes;
