import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

import { FlexPropTypes, FlexDefaultProps } from "./props";
import { DISPLAY, SPACER } from "..";

const StyledFlex = styled(Grid)`
  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

export const Flex = (props) => <StyledFlex {...props} />;

Flex.propTypes = FlexPropTypes;

Flex.defaultProps = FlexDefaultProps;
