import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import MuiContainer from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";

import { Text } from "../../Typography";
import { PageLoading } from "../..";
import {
  ExplorerLayoutHeader,
  ExplorerLayoutFooter,
  ExplorerLayoutPropTypes,
} from ".";

const Content = styled(Grid).attrs(() => ({
  container: true,
}))`
  padding-top: ${({ theme }) => theme.spacing(8)};
  padding-bottom: ${({ theme }) => theme.spacing(20)};
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
  ads,
  content,
  extraContent,
  extraSidebar,
  footerContent,
  headerLogoAction,
  headerRight,
  loading,
  sidebar,
  ...props
}) => {
  if (loading) return <PageLoading />;

  return (
    <MuiContainer {...props}>
      <ExplorerLayoutHeader
        logoAction={headerLogoAction}
        headerRight={headerRight}
      />
      <Content>
        {/* Desktop */}
        <Hidden mdDown>
          <Grid item lg={9}>
            {content}
            {extraContent}
          </Grid>

          <Grid item lg={3}>
            {sidebar}
            {extraSidebar}
            {ads}
          </Grid>
        </Hidden>

        {/* Tablet and Mobile */}
        <Hidden lgUp>
          <Grid item xs={12}>
            {content}
          </Grid>

          <Grid
            container
            alignItems="center"
            justify="space-between"
            spacing={4}
          >
            <Grid item md={6} xs={12}>
              {sidebar}
            </Grid>

            <Grid item md={6} xs={12}>
              {extraSidebar}
            </Grid>
          </Grid>

          <Grid item xs={12}>
            {extraContent}
            {ads}
          </Grid>
        </Hidden>
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
