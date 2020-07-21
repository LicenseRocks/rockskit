import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

import { BaseHeadingPropTypes } from "./props";

const StyledHeading = styled(Typography)``;

export const BaseHeading = ({ content, children, ...props }) => {
  return <StyledHeading {...props}>{content || children}</StyledHeading>;
};

BaseHeading.propTypes = BaseHeadingPropTypes;
