import React, { useState } from "react";
import styled from "styled-components";
import Drawer from "@material-ui/core/Drawer";
import Fab from "@material-ui/core/Fab";
import Hidden from "@material-ui/core/Hidden";

import { Icon, TextButton } from "../../..";
import { NavigationMenu } from "./NavigationMenu";
import { UserMenu } from "./UserMenu";
import { DashboardLayoutNavigationPropTypes } from "./props";

const MainNav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding: ${({ theme }) => theme.spacing(0, 8, 0, 4)};
  height: 100%;
`;

const StyledFab = styled(Fab).attrs(() => ({
  color: "primary",
  size: "small",
}))`
  && {
    position: fixed;
    bottom: ${({ theme }) => theme.spacing(4)};
    right: ${({ theme }) => theme.spacing(4)};
    z-index: 10;
  }
`;

const NavIcon = styled(Icon).attrs(() => ({ icon: "bars", size: "lg" }))`
  color: #fff;
`;

const DrawerWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing(2, 10, 0, 2)};
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
  background-color: ${({ theme }) => theme.palette.common.white};
`;

export const DashboardLayoutNavigation = ({
  navigationItems,
  userMenuItems,
  userMenuOnClick,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const renderMainNav = () => (
    <>
      <NavigationMenu items={navigationItems} />
      <UserMenu menuItems={userMenuItems} onClick={userMenuOnClick} />
    </>
  );

  return (
    <>
      <Hidden smUp implementation="js">
        <StyledFab
          aria-label="toggleNavigation"
          onClick={() => setMobileOpen(true)}
        >
          <NavIcon />
        </StyledFab>
      </Hidden>

      <Hidden smUp implementation="js">
        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <DrawerWrapper>{renderMainNav()}</DrawerWrapper>
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="js">
        <MainNav>{renderMainNav()}</MainNav>
      </Hidden>
    </>
  );
};

DashboardLayoutNavigation.propTypes = DashboardLayoutNavigationPropTypes;
