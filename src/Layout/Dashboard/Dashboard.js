import React from "react";
import styled from "styled-components";
import MuiContainer from "@material-ui/core/Container";

import { Flex, PageLoading } from "../..";
import { Text } from "../../Typography";
import { DashboardLayoutPropTypes, DashboardLayoutDefaultProps } from ".";
import { DashboardLayoutNavigation } from "./Navigation";
import { DashboardLayoutHeader } from "./Header";
import { DashboardLayoutFooter } from "./Footer";

const StyledContainer = styled(MuiContainer).attrs(() => ({
  maxWidth: "lg",
}))`
  height: 100%;
`;

const Content = styled.div`
  flex: 1;
  width: 100%;
`;

const NavigationContainer = styled(Flex).attrs(() => ({
  item: true,
  md: 2,
  xs: 4,
}))`
  ${({ theme }) => theme.breakpoints.up("md")} {
    height: 100%;
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    order: 2;
  }
`;

const SidebarContainer = styled(Flex).attrs(() => ({
  item: true,
  md: 2,
  xs: 12,
}))`
  padding: ${({ theme }) => theme.spacing(8, 0)};

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: ${({ theme }) => theme.spacing(0, 8)};
    height: 100%;
  }
`;

const poweredBy = (
  <Text color="textSecondary" fontStyle="italic">
    Powered by
    <Text color="textPrimary" fontWeight="bold" dInline>
      {" "}
      license.rocks
    </Text>
  </Text>
);

export const DashboardLayout = ({
  content,
  footerContent,
  headerLeft,
  headerBackButtonOnClick,
  headerLogoAction,
  headerLogoSrc,
  headerRight,
  headerRenderLogo,
  navigationItems,
  loading,
  sidebar,
  userMenuItems,
  userMenuOnClick,
  ...props
}) => {
  if (loading) return <PageLoading />;

  return (
    <StyledContainer {...props}>
      <Flex
        container
        direction="column"
        alignItems="flex-start"
        justify="flex-start"
        xs={12}
        h100
        wrap="nowrap"
      >
        <DashboardLayoutHeader
          backButtonOnClick={headerBackButtonOnClick}
          headerLeft={headerLeft}
          headerRight={headerRight}
          logoAction={headerLogoAction}
          logoSrc={headerLogoSrc}
          renderLogo={headerRenderLogo}
        />

        <Flex
          item
          container
          alignItems="flex-start"
          justify="flex-start"
          xs={12}
        >
          <NavigationContainer>
            <DashboardLayoutNavigation
              navigationItems={navigationItems}
              userMenuItems={userMenuItems}
              userMenuOnClick={userMenuOnClick}
            />
          </NavigationContainer>

          <Flex item md={8} xs={12}>
            <Content>{content}</Content>
          </Flex>

          <SidebarContainer>{sidebar}</SidebarContainer>
        </Flex>

        <Flex container item xs={12}>
          <DashboardLayoutFooter content={footerContent || poweredBy} />
        </Flex>
      </Flex>
    </StyledContainer>
  );
};

DashboardLayout.propTypes = DashboardLayoutPropTypes;

DashboardLayout.defaultProps = DashboardLayoutDefaultProps;
