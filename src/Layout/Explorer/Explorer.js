import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import MuiContainer from "@material-ui/core/Container";

import { Text } from "../../Typography";
import {
  ExplorerLayoutHeader,
  ExplorerLayoutFooter,
  ExplorerLayoutPropTypes,
} from ".";

const Content = styled(Grid).attrs(() => ({
  container: true,
}))`
  padding-top: ${({ theme }) => theme.spacing(8)};
  ${({ theme }) => theme.breakpoints.down("md")} {
    padding-top: ${({ theme }) => theme.spacing(2)};
  }
`;

const poweredBy = (
  <Text color="textSecondary" fontStyle="italic">
    Powered by
    <Text color="textPrimary" fontWeight="bold">
      {" "}
      license.rocks
    </Text>
  </Text>
);

export const ExplorerLayout = ({
  children,
  footerContent,
  headerLogoAction,
  headerRight,
  sidebar,
  ...props
}) => {
  return (
    <MuiContainer {...props}>
      <ExplorerLayoutHeader
        logoAction={headerLogoAction}
        headerRight={headerRight}
      />
      <Content>
        <Grid item lg={9} xs={12}>
          {children}
        </Grid>
        <Grid item lg={3} xs={12}>
          {sidebar}
        </Grid>
      </Content>
      {footerContent && (
        <ExplorerLayoutFooter>
          {footerContent || poweredBy}
        </ExplorerLayoutFooter>
      )}
    </MuiContainer>
  );
};

ExplorerLayout.propTypes = ExplorerLayoutPropTypes;
ExplorerLayout.defaultProps = {
  footerContent: poweredBy,
};
