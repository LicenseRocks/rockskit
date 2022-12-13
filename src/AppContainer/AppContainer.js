import React from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { SnackbarProvider } from "notistack";

import { AppContainerPropTypes } from "./props";
import { GlobalStyle } from "../theme";
import { AppContextProvider, PageLoading, PageProgressBar, Snackbar } from "..";
import styled from "styled-components";

const SnackbarStyles = styled.div`
  .snackbar-container-root {
    top: 100px;
  }
`;

export const AppContainer = ({
  appConfig,
  children,
  icons,
  pageLoading,
  pageProgressBar,
  pageProgressBarListener,
  theme,
}) => {
  if (icons) library.add(icons);

  return (
    <AppContextProvider config={appConfig}>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <SnackbarStyles>
            <SnackbarProvider
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              classes={{
                containerRoot: "snackbar-container-root",
              }}
              content={(key, options) => <Snackbar id={key} {...options} />}
              maxSnack={3}
            >
              <GlobalStyle
                gradientColors={theme?.palette?.background?.gradient}
              />

              <CssBaseline />

              {pageProgressBar && (
                <PageProgressBar listener={pageProgressBarListener} />
              )}

              {pageLoading ? <PageLoading fullScreen /> : children}
            </SnackbarProvider>
          </SnackbarStyles>
        </ThemeProvider>
      </MuiThemeProvider>
    </AppContextProvider>
  );
};

AppContainer.propTypes = AppContainerPropTypes;
