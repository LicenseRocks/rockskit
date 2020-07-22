import React from "react";
import styled from "styled-components";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "styled-components";

import { theme } from "../../src/theme";

const StyledWrapper = styled.div`
  position: relative;
`;

export const Container = (story) => {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StyledWrapper>{story()}</StyledWrapper>
      </ThemeProvider>
    </MuiThemeProvider>
  );
};
