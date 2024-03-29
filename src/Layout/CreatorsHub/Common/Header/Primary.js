import React from "react";
import styled, { css } from "styled-components";

import Logo from "../../../../assets/images/logo-symbol.svg";
import { Hidden, Icon, Image } from "../../../..";
import {
  CreatorsHubHeaderPropTypes,
  CreatorsHubHeaderDefaultProps,
} from "./props";

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  padding: ${({ theme }) => theme.spacing(4, 0)};
  height: 80px;
  max-height: 80px;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    height: ${({ headerSmHeight }) => headerSmHeight};
    max-height: ${({ headerSmHeight }) => headerSmHeight};
  }

  ${({ primaryWhite }) =>
    primaryWhite &&
    css`
      background-color: ${({ theme }) => theme.palette.common.white};
    `}
`;

const MenuIconButton = styled(Icon).attrs(() => ({
  squared: true,
  mr: 4,
}))`
  && {
    background-color: ${({ theme }) => theme.palette.gray.semiLight};
    border: none;

    svg {
      color: ${({ theme }) => theme.palette.gray.medium};
    }
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PrimaryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const PrimaryListItem = styled.li`
  display: inline-block;
  font-size: 12px;
  line-height: 120%;
  :not(:first-child) {
    margin-left: ${({ theme }) => theme.spacing(6)};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.palette.text.primary};
  }
`;

export const PrimaryHeader = ({
  drawerOpen,
  logoSrc,
  logoAction,
  primaryNavItems,
  renderLogo,
  setDrawerOpen,
  ...props
}) => {
  return (
    <>
      <StyledHeader {...props}>
        <LogoContainer>
          <Hidden implementation="js" mdUp>
            <MenuIconButton
              icon={drawerOpen ? "times" : "bars"}
              onClick={() => setDrawerOpen((prev) => !prev)}
            />
          </Hidden>

          {renderLogo() || (
            <Image
              alt="Logo"
              height="100%"
              onClick={logoAction}
              src={logoSrc || Logo}
            />
          )}
        </LogoContainer>

        <PrimaryList>
          {primaryNavItems?.map((item) => (
            <Hidden implementation="js" smDown={!item.showSm} key={item.key}>
              <PrimaryListItem key={item.key}>{item.render()}</PrimaryListItem>
            </Hidden>
          ))}
        </PrimaryList>
      </StyledHeader>
    </>
  );
};

PrimaryHeader.propTypes = CreatorsHubHeaderPropTypes;

PrimaryHeader.defaultProps = CreatorsHubHeaderDefaultProps;
