import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";

import { theme, GlobalStyle } from "../../src/theme";

export const Container = (story) => {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {story()}
      </ThemeProvider>
    </MuiThemeProvider>
  );
};
