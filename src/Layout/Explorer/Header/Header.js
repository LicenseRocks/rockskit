import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

import Logo from "../../../assets/images/logo-horizontal.svg";
import { Image } from "../../..";
import { ExplorerLayoutHeaderPropTypes } from "./props";

const StyledHeader = styled(Grid).attrs(() => ({
  container: true,
  alignItems: "center",
}))`
  height: 128px;
  ${({ theme }) => theme.breakpoints.down("md")} {
    height: 96px;
  }
`;

const StyledLogo = styled(Image).attrs(() => ({
  alt: "Logo",
  src: Logo,
}))`
  width: 155px;
  ${({ theme }) => theme.breakpoints.down("md")} {
    width: 103px;
  }
`;

export const ExplorerLayoutHeader = ({ action, ...props }) => {
  return (
    <StyledHeader {...props}>
      <Grid item lg={9} xs={6}>
        <StyledLogo onClick={() => {}} />
      </Grid>
      <Grid container item justify="flex-end" lg={3} xs={6}>
        {action}
      </Grid>
    </StyledHeader>
  );
};

ExplorerLayoutHeader.propTypes = ExplorerLayoutHeaderPropTypes;
