import React from "react";
import styled from "styled-components";
import Hidden from "@material-ui/core/Hidden";

import Logo from "../../../assets/images/logo-symbol.svg";
import { Flex, Image, TextButton } from "../../..";
import {
  DashboardLayoutHeaderPropTypes,
  DashboardLayoutHeaderDefaultProps,
} from "./props";

const StyledHeader = styled(Flex).attrs(() => ({
  container: true,
  alignItems: "center",
  justify: "space-between",
}))`
  flex: 0 0 120px;
  ${({ theme }) => theme.breakpoints.down("md")} {
    flex: 0 0 96px;
  }
`;

const LogoContainer = styled(Flex).attrs(() => ({
  container: true,
  item: true,
  md: 2,
  xs: 4,
  justify: "center",
}))`
  ${({ theme }) => theme.breakpoints.down("sm")} {
    order: 1;
  }

  img {
    width: 48px;
    height: 48px;
  }
`;

const HeaderRight = styled(Flex).attrs(() => ({
  container: true,
  item: true,
  md: 2,
  xs: 4,
  justify: "flex-end",
}))`
  ${({ theme }) => theme.breakpoints.down("sm")} {
    order: 2;
  }
`;

export const DashboardLayoutHeader = ({
  backButtonOnClick,
  headerLeft,
  headerRight,
  logoAction,
  renderLogo,
  ...props
}) => {
  const backButton = (
    <TextButton color="secondary" onClick={backButtonOnClick} px={0} size="sm">
      Back
    </TextButton>
  );

  return (
    <StyledHeader {...props}>
      <LogoContainer>
        {renderLogo() || <Image alt="Logo" onClick={logoAction} src={Logo} />}
      </LogoContainer>

      <Flex item md={6} xs={4}>
        {headerLeft || backButton}
      </Flex>

      <HeaderRight>{headerRight}</HeaderRight>

      <Hidden smDown implementation="js">
        <Flex item md={2} />
      </Hidden>
    </StyledHeader>
  );
};

DashboardLayoutHeader.propTypes = DashboardLayoutHeaderPropTypes;

DashboardLayoutHeader.defaultProps = DashboardLayoutHeaderDefaultProps;
