import React from "react";
import styled, { css } from "styled-components";

import { Hidden } from "../../../..";
import {
  CreatorsHubHeaderPropTypes,
  CreatorsHubHeaderDefaultProps,
} from "./props";

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  max-height: 80px;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.palette.common.white};

  ${({ secondaryHasBorder }) =>
    secondaryHasBorder &&
    css`
      border-top: 1px solid ${({ theme }) => theme.palette.gray.semiLight};
    `}

  ${({ theme }) => theme.breakpoints.down("sm")} {
    height: 64px;
    max-height: 64px;
  }
`;

const SecondaryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  height: 100%;
`;

const SecondaryListItem = styled.li`
  position: relative;
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.text.secondary};
  font-weight: 600;
  height: 100%;
  :not(:last-child) {
    margin-right: ${({ theme }) => theme.spacing(8)};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.palette.text.secondary};
  }

  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.palette.text.primary};

      a {
        text-decoration: none;
        color: ${({ theme }) => theme.palette.text.primary};
      }

      ::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        border-radius: 11px;
        background-color: ${({ theme }) => theme.palette.primary.main};
      }
    `}
`;

const SecondaryRight = styled.div`
  display: flex;
  align-items: center;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    flex: 1;
    justify-content: space-between;
  }
`;

export const SecondaryHeader = ({
  secondaryHideOnScroll,
  secondaryNavItems,
  secondaryRenderRight,
  ...props
}) => {
  return (
    <StyledHeader {...props}>
      <Hidden implementation="js" smDown>
        <SecondaryList>
          {secondaryNavItems?.map((item) => (
            <SecondaryListItem active={item?.active}>
              {item.render()}
            </SecondaryListItem>
          ))}
        </SecondaryList>
      </Hidden>

      <SecondaryRight>{secondaryRenderRight()}</SecondaryRight>
    </StyledHeader>
  );
};

SecondaryHeader.propTypes = CreatorsHubHeaderPropTypes;

SecondaryHeader.defaultProps = CreatorsHubHeaderDefaultProps;
