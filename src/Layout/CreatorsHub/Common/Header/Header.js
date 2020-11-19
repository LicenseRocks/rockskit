import React, { useState } from "react";
import styled from "styled-components";

import { DISPLAY, SPACER } from "../../../..";
import {
  CreatorsHubHeaderPropTypes,
  CreatorsHubHeaderDefaultProps,
} from "./props";
import { PrimaryHeader } from "./Primary";
import { HeaderDrawer } from "./Drawer";

const Header = styled.div`
  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

export const MainHeader = ({
  fixed,
  heightSm,
  logoSrc,
  logoAction,
  primaryNavItems,
  primaryWhite,
  renderLogo,
  secondary,
  secondaryHideOnScroll,
  secondaryNavItems,
  secondaryRenderRight,
  smNavItems,
  ...props
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Header {...props}>
        <PrimaryHeader
          drawerOpen={drawerOpen}
          headerSmHeight={`${heightSm}px`}
          logoSrc={logoSrc}
          logoAction={logoAction}
          primaryNavItems={primaryNavItems}
          primaryWhite={primaryWhite}
          renderLogo={renderLogo}
          setDrawerOpen={setDrawerOpen}
        />
      </Header>

      <HeaderDrawer
        navItems={smNavItems || secondaryNavItems || primaryNavItems}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        offsetTop={`${heightSm}px`}
      />
    </>
  );
};

MainHeader.propTypes = CreatorsHubHeaderPropTypes;

MainHeader.defaultProps = CreatorsHubHeaderDefaultProps;
