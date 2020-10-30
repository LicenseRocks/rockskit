import React, { useState } from "react";
import styled from "styled-components";

import { DISPLAY, SPACER } from "../../../..";
import {
  CreatorsHubHeaderPropTypes,
  CreatorsHubHeaderDefaultProps,
} from "./props";
import { PrimaryHeader } from "./Primary";
import { SecondaryHeader } from "./Secondary";
import { HeaderDrawer } from "./Drawer";

const HEADER_SM_HEIGHT = "72px";

const Header = styled.div`
  ${(theme) => SPACER(theme)}
  ${(theme) => DISPLAY(theme)}
`;

export const CreatorsHubHeader = ({
  logoSrc,
  logoAction,
  primaryNavItems,
  primaryHasBorder,
  primaryWhite,
  renderLogo,
  secondary,
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
          headerSmHeight={HEADER_SM_HEIGHT}
          logoSrc={logoSrc}
          logoAction={logoAction}
          primaryNavItems={primaryNavItems}
          primaryHasBorder={primaryHasBorder}
          primaryWhite={primaryWhite}
          renderLogo={renderLogo}
          setDrawerOpen={setDrawerOpen}
        />

        {secondary && (
          <SecondaryHeader
            secondaryNavItems={secondaryNavItems}
            secondaryRenderRight={secondaryRenderRight}
          />
        )}
      </Header>

      <HeaderDrawer
        navItems={smNavItems || secondaryNavItems || primaryNavItems}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        offsetTop={HEADER_SM_HEIGHT}
      />
    </>
  );
};

CreatorsHubHeader.propTypes = CreatorsHubHeaderPropTypes;

CreatorsHubHeader.defaultProps = CreatorsHubHeaderDefaultProps;
