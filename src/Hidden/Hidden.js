import React from "react";
import styled from "styled-components";
import MuiHidden from "@material-ui/core/Hidden";

import { DISPLAY, SPACER } from "../theme";

const StyledHidden = styled(MuiHidden)`
  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

export const Hidden = (props) => <StyledHidden {...props} />;
