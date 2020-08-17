import React from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { SnackbarProvider } from "notistack";

import { AppContainerPropTypes } from "./props";
import { GlobalStyle } from "../theme";

export const AppContainer = ({ children, icons, theme }) => {
  if (icons) library.add(icons);

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3}>
          <GlobalStyle />
          <CssBaseline />
          {children}
        </SnackbarProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

AppContainer.propTypes = AppContainerPropTypes;
