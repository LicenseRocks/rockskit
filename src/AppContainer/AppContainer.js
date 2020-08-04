import React from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";

import { AppContainerPropTypes } from "./props";

export const AppContainer = ({ children, icons, theme }) => {
  if (icons) library.add(icons);

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

AppContainer.propTypes = AppContainerPropTypes;
