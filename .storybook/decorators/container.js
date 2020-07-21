import React from "react";
import styled from "styled-components";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";

import { theme, GlobalStyle } from "../../src/theme";

const StyledWrapper = styled.div`
  padding: 16px;
  position: relative;
  background-color: #f7f7f9;
`;

export const Container = (story) => {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledWrapper>{story()}</StyledWrapper>
      </ThemeProvider>
    </MuiThemeProvider>
  );
};
