import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

import { BaseTypographyPropTypes } from "./props";

const StyledTypography = styled(Typography)``;

export const BaseTypography = ({ content, children, ...props }) => {
  return <StyledTypography {...props}>{content || children}</StyledTypography>;
};

BaseTypography.propTypes = BaseTypographyPropTypes;
