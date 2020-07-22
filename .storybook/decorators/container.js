import React from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "styled-components";

import { theme } from "../../src/theme";

export const Container = (story) => {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {story()}
      </ThemeProvider>
    </MuiThemeProvider>
  );
};
