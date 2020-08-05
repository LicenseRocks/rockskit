import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

import { FlexPropTypes, FlexDefaultProps } from "./props";
import { DIMENSION, DISPLAY, SPACER } from "..";

const StyledFlex = styled(Grid)`
  ${(theme) => DIMENSION(theme)}
  ${(theme) => DISPLAY(theme)}
  ${(theme) => SPACER(theme)}
`;

export const Flex = (props) => <StyledFlex {...props} />;

Flex.propTypes = FlexPropTypes;

Flex.defaultProps = FlexDefaultProps;
